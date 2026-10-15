// ============================================================
// Acesso a dados do Firestore: turmas, matrículas, atividades e
// submissões. Compartilhado pelos painéis de professor e aluno.
// ============================================================
import {
  collection, collectionGroup, doc, addDoc, setDoc, getDoc, getDocs,
  updateDoc, deleteDoc, query, where, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db } from "./firebase-init.js";
import { gerarCodigoTurma } from "./auth.js";

// ---------- Turmas ----------

// O código de convite fica em DOIS lugares: no documento da turma (só o professor lê) e em joinCodes/{CÓDIGO}
// (qualquer usuário logado lê UM código por vez, mas ninguém consegue listar todos). Assim o aluno entra com o
// código sem poder enumerar as turmas dos professores.
function dadosDoCodigo(teacherUid, classId, nome, ano){
  return { teacherUid: teacherUid, classId: classId, nome: nome, ano: ano || "", createdAt: serverTimestamp() };
}

export async function criarTurma(teacherUid, nome, ano){
  var joinCode = gerarCodigoTurma();
  var ref = await addDoc(collection(db, "teachers", teacherUid, "classes"), {
    nome: nome, ano: ano || "", joinCode: joinCode, createdAt: serverTimestamp()
  });
  // Publica o código; se já existir (colisão), sorteia outro. Falhas não impedem a criação da turma:
  // garantirCodigos() refaz o registro na próxima vez que o professor abrir o painel.
  for(var i = 0; i < 4; i++){
    try{
      await setDoc(doc(db, "joinCodes", joinCode), dadosDoCodigo(teacherUid, ref.id, nome, ano));
      break;
    }catch(e){
      joinCode = gerarCodigoTurma();
      try{ await updateDoc(ref, { joinCode: joinCode }); }catch(e2){ break; }
    }
  }
  return { id: ref.id, joinCode: joinCode };
}

// Conferência/migração: garante que toda turma tenha o seu registro em joinCodes (turmas antigas não tinham).
export async function garantirCodigos(teacherUid, turmas){
  for(var i = 0; i < turmas.length; i++){
    var t = turmas[i];
    if(!t.joinCode) continue;
    try{
      var s = await getDoc(doc(db, "joinCodes", t.joinCode));
      if(!s.exists()) await setDoc(doc(db, "joinCodes", t.joinCode), dadosDoCodigo(teacherUid, t.id, t.nome, t.ano));
    }catch(e){ /* regras ainda não publicadas ou sem permissão: tenta de novo na próxima abertura */ }
  }
}

// Trilha da turma (id da trilha) e a aula em que ela está (aparece para os alunos aprovados). Só o professor dono altera.
export async function definirTrilhaTurma(teacherUid, classId, dados){
  await updateDoc(doc(db, "teachers", teacherUid, "classes", classId), dados);
}

export async function listarTurmas(teacherUid){
  var snap = await getDocs(query(collection(db, "teachers", teacherUid, "classes"), orderBy("createdAt", "desc")));
  return snap.docs.map(function(d){ return Object.assign({ id: d.id }, d.data()); });
}

export async function excluirTurma(teacherUid, classId){
  var turma = null; try{ turma = await buscarTurma(teacherUid, classId); }catch(e){}
  await deleteDoc(doc(db, "teachers", teacherUid, "classes", classId));
  if(turma && turma.joinCode){ try{ await deleteDoc(doc(db, "joinCodes", turma.joinCode)); }catch(e){} }
}

export async function buscarTurma(teacherUid, classId){
  var snap = await getDoc(doc(db, "teachers", teacherUid, "classes", classId));
  return snap.exists() ? Object.assign({ id: snap.id }, snap.data()) : null;
}

// ---------- Matrículas (aprovação de alunos) ----------

// Retorna { teacherUid, classId, classNome } ou null se o código não existir.
export async function buscarTurmaPorCodigo(joinCode){
  var codigo = String(joinCode || "").trim().toUpperCase();
  if(!codigo) return null;
  try{
    var s = await getDoc(doc(db, "joinCodes", codigo));
    if(s.exists()){ var x = s.data(); return { teacherUid: x.teacherUid, classId: x.classId, classNome: x.nome }; }
  }catch(e){}
  // Compatibilidade enquanto as regras antigas estiverem publicadas (as novas negam esta consulta de propósito).
  try{
    var snap = await getDocs(query(collectionGroup(db, "classes"), where("joinCode", "==", codigo)));
    if(!snap.empty){ var d = snap.docs[0]; return { teacherUid: d.ref.parent.parent.id, classId: d.id, classNome: d.data().nome }; }
  }catch(e){}
  return null;
}

export async function solicitarMatricula(teacherUid, classId, studentUid, nome, email){
  await setDoc(doc(db, "teachers", teacherUid, "classes", classId, "students", studentUid), {
    uid: studentUid, nome: nome, email: email, status: "pending", requestedAt: serverTimestamp()
  });
}

export async function listarMatriculas(teacherUid, classId){
  var snap = await getDocs(collection(db, "teachers", teacherUid, "classes", classId, "students"));
  return snap.docs.map(function(d){ return Object.assign({ id: d.id }, d.data()); });
}

export async function definirStatusMatricula(teacherUid, classId, studentUid, status){
  await updateDoc(doc(db, "teachers", teacherUid, "classes", classId, "students", studentUid), {
    status: status, decidedAt: serverTimestamp()
  });
}

// Todas as turmas (de qualquer professor) em que este aluno tem matrícula.
export async function listarMinhasMatriculas(studentUid){
  var snap = await getDocs(query(collectionGroup(db, "students"), where("uid", "==", studentUid)));
  return snap.docs.map(function(d){
    return {
      teacherUid: d.ref.parent.parent.parent.parent.id,
      classId: d.ref.parent.parent.id,
      status: d.data().status
    };
  });
}

// ---------- Atividades ----------

export async function criarAtividade(teacherUid, dados){
  var ref = await addDoc(collection(db, "teachers", teacherUid, "activities"), {
    titulo: dados.titulo,
    tipo: dados.tipo, // 'quiz' | 'submissao' | 'leitura'
    lessonPath: dados.lessonPath || "",
    classIds: dados.classIds,
    dueDate: dados.dueDate || "",
    createdAt: serverTimestamp()
  });
  return ref.id;
}

export async function listarAtividades(teacherUid){
  var snap = await getDocs(query(collection(db, "teachers", teacherUid, "activities"), orderBy("createdAt", "desc")));
  return snap.docs.map(function(d){ return Object.assign({ id: d.id }, d.data()); });
}

export async function excluirAtividade(teacherUid, activityId){
  await deleteDoc(doc(db, "teachers", teacherUid, "activities", activityId));
}

// Busca as atividades de todas as turmas (de qualquer professor) em que
// o aluno está aprovado. Cada item já vem com a turma correspondente
// (classId/turmaNome) anexada, útil pra exibir de onde veio a atividade.
export async function listarAtividadesDoAluno(studentUid){
  var matriculas = await listarMinhasMatriculas(studentUid);
  var aprovadas = matriculas.filter(function(m){ return m.status === "approved"; });
  var todas = [];
  for(var i=0; i<aprovadas.length; i++){
    var m = aprovadas[i];
    var turma = await buscarTurma(m.teacherUid, m.classId);
    var snap = await getDocs(collection(db, "teachers", m.teacherUid, "activities"));
    snap.docs.forEach(function(d){
      var dados = d.data();
      if(dados.classIds && dados.classIds.indexOf(m.classId) !== -1){
        todas.push(Object.assign({ id: d.id, teacherUid: m.teacherUid, classId: m.classId, turmaNome: turma ? turma.nome : "" }, dados));
      }
    });
  }
  return todas;
}

// Histórico completo do aluno: cada atividade atribuída, junto com a
// própria submissão (status/nota/datas), pronto pra listar em ordem
// cronológica sem consultas extras na tela.
export async function listarHistoricoDoAluno(studentUid){
  var atividades = await listarAtividadesDoAluno(studentUid);
  var historico = [];
  for(var i=0; i<atividades.length; i++){
    var a = atividades[i];
    var sub = await buscarSubmissao(a.teacherUid, a.id, studentUid);
    historico.push(Object.assign({ atividade: a }, {
      status: sub ? sub.status : "nao-iniciado",
      score: sub ? sub.score : null,
      total: sub ? sub.total : null,
      submittedAt: sub ? sub.submittedAt : null,
      gradedAt: sub ? sub.gradedAt : null,
      firstOpenedAt: sub ? sub.firstOpenedAt : null
    }));
  }
  historico.sort(function(x, y){
    var dx = x.gradedAt || x.submittedAt || x.firstOpenedAt || "";
    var dy = y.gradedAt || y.submittedAt || y.firstOpenedAt || "";
    return dy < dx ? -1 : (dy > dx ? 1 : 0);
  });
  return historico;
}

// Definição de uma atividade (o aluno usa para descobrir a que turma ela pertence).
export async function buscarAtividade(teacherUid, activityId){
  var snap = await getDoc(doc(db, "teachers", teacherUid, "activities", activityId));
  return snap.exists() ? Object.assign({ id: snap.id }, snap.data()) : null;
}

// ---------- Submissões ----------

export async function buscarSubmissao(teacherUid, activityId, studentUid){
  var snap = await getDoc(doc(db, "teachers", teacherUid, "activities", activityId, "submissions", studentUid));
  return snap.exists() ? snap.data() : null;
}

export async function salvarSubmissao(teacherUid, activityId, studentUid, dados){
  await setDoc(doc(db, "teachers", teacherUid, "activities", activityId, "submissions", studentUid), Object.assign({
    updatedAt: serverTimestamp()
  }, dados), { merge: true });
}

export async function listarSubmissoes(teacherUid, activityId){
  var snap = await getDocs(collection(db, "teachers", teacherUid, "activities", activityId, "submissions"));
  return snap.docs.map(function(d){ return Object.assign({ studentUid: d.id }, d.data()); });
}

export async function corrigirSubmissao(teacherUid, activityId, studentUid, nota, feedback){
  await updateDoc(doc(db, "teachers", teacherUid, "activities", activityId, "submissions", studentUid), {
    status: "corrigido", score: nota, feedback: feedback || "", gradedAt: serverTimestamp()
  });
}
