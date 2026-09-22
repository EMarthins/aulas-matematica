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

export async function criarTurma(teacherUid, nome, ano){
  var joinCode = gerarCodigoTurma();
  var ref = await addDoc(collection(db, "teachers", teacherUid, "classes"), {
    nome: nome, ano: ano || "", joinCode: joinCode, createdAt: serverTimestamp()
  });
  return { id: ref.id, joinCode: joinCode };
}

export async function listarTurmas(teacherUid){
  var snap = await getDocs(query(collection(db, "teachers", teacherUid, "classes"), orderBy("createdAt", "desc")));
  return snap.docs.map(function(d){ return Object.assign({ id: d.id }, d.data()); });
}

export async function excluirTurma(teacherUid, classId){
  await deleteDoc(doc(db, "teachers", teacherUid, "classes", classId));
}

export async function buscarTurma(teacherUid, classId){
  var snap = await getDoc(doc(db, "teachers", teacherUid, "classes", classId));
  return snap.exists() ? Object.assign({ id: snap.id }, snap.data()) : null;
}

// ---------- Matrículas (aprovação de alunos) ----------

// Retorna { teacherUid, classId, classNome } ou null se o código não existir.
export async function buscarTurmaPorCodigo(joinCode){
  var snap = await getDocs(query(collectionGroup(db, "classes"), where("joinCode", "==", joinCode.toUpperCase())));
  if(snap.empty) return null;
  var d = snap.docs[0];
  var teacherUid = d.ref.parent.parent.id;
  return { teacherUid: teacherUid, classId: d.id, classNome: d.data().nome };
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
// o aluno está aprovado.
export async function listarAtividadesDoAluno(studentUid){
  var matriculas = await listarMinhasMatriculas(studentUid);
  var aprovadas = matriculas.filter(function(m){ return m.status === "approved"; });
  var todas = [];
  for(var i=0; i<aprovadas.length; i++){
    var m = aprovadas[i];
    var snap = await getDocs(collection(db, "teachers", m.teacherUid, "activities"));
    snap.docs.forEach(function(d){
      var dados = d.data();
      if(dados.classIds && dados.classIds.indexOf(m.classId) !== -1){
        todas.push(Object.assign({ id: d.id, teacherUid: m.teacherUid }, dados));
      }
    });
  }
  return todas;
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
