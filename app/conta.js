// ============================================================
// Minha conta (LGPD): baixar os próprios dados e excluir a conta com tudo que é dela.
// Professor: turmas (e matrículas), atividades (e submissões), provas, questões próprias, configurações, perfil.
// Aluno: matrículas, submissões e perfil.
// ============================================================
import {
  collection, collectionGroup, doc, getDoc, getDocs, deleteDoc, query, where
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db, auth } from "./firebase-init.js";
import { reautenticar, excluirUsuarioAuth, lembrarUsuario } from "./auth.js";

const lerDocs = async (...caminho) => (await getDocs(collection(db, ...caminho))).docs.map(d => Object.assign({ id: d.id }, d.data()));
const limpa = v => JSON.parse(JSON.stringify(v, (k, x) => (x && typeof x === 'object' && typeof x.toDate === 'function') ? x.toDate().toISOString() : x));

/** Junta tudo que a conta tem (para o arquivo JSON). */
export async function coletarDados(uid, role, perfil) {
  const dados = { geradoEm: new Date().toISOString(), conta: { uid, email: auth.currentUser && auth.currentUser.email, papel: role, perfil } };
  if (role === 'professor') {
    const prof = await getDoc(doc(db, 'teachers', uid)); dados.professor = prof.exists() ? prof.data() : null;
    dados.turmas = [];
    for (const t of await lerDocs('teachers', uid, 'classes')) dados.turmas.push(Object.assign(t, { matriculas: await lerDocs('teachers', uid, 'classes', t.id, 'students') }));
    dados.atividades = [];
    for (const a of await lerDocs('teachers', uid, 'activities')) dados.atividades.push(Object.assign(a, { submissoes: await lerDocs('teachers', uid, 'activities', a.id, 'submissions') }));
    dados.provas = await lerDocs('teachers', uid, 'provas');
    dados.questoesProprias = await lerDocs('teachers', uid, 'questoes');
    dados.configuracoes = await lerDocs('teachers', uid, 'config');
  } else {
    const mats = (await getDocs(query(collectionGroup(db, 'students'), where('uid', '==', uid)))).docs;
    dados.matriculas = []; dados.submissoes = [];
    for (const m of mats) {
      const classId = m.ref.parent.parent.id, teacherUid = m.ref.parent.parent.parent.parent.id;
      dados.matriculas.push(Object.assign({ teacherUid, classId }, m.data()));
      if (m.data().status !== 'approved') continue;
      for (const a of await lerDocs('teachers', teacherUid, 'activities')) {
        if (!(a.classIds || []).includes(classId)) continue;
        const s = await getDoc(doc(db, 'teachers', teacherUid, 'activities', a.id, 'submissions', uid));
        if (s.exists()) dados.submissoes.push(Object.assign({ teacherUid, activityId: a.id, atividade: a.titulo }, s.data()));
      }
    }
  }
  return limpa(dados);
}

/** Exclui TUDO da conta e depois o login. Pede a senha (reautenticação). Lança erro com `.code` do Firebase. */
export async function excluirConta(uid, role, senha, aoProgresso) {
  const p = t => { try { aoProgresso && aoProgresso(t); } catch (_) { /* tela */ } };
  p('Confirmando sua senha…');
  await reautenticar(senha);
  if (role === 'professor') {
    p('Apagando turmas e matrículas…');
    for (const t of await lerDocs('teachers', uid, 'classes')) {
      for (const m of await lerDocs('teachers', uid, 'classes', t.id, 'students')) await deleteDoc(doc(db, 'teachers', uid, 'classes', t.id, 'students', m.id));
      await deleteDoc(doc(db, 'teachers', uid, 'classes', t.id));
      if (t.joinCode) { try { await deleteDoc(doc(db, 'joinCodes', t.joinCode)); } catch (_) { /* já não existe */ } }
    }
    p('Apagando atividades e envios…');
    for (const a of await lerDocs('teachers', uid, 'activities')) {
      for (const s of await lerDocs('teachers', uid, 'activities', a.id, 'submissions')) await deleteDoc(doc(db, 'teachers', uid, 'activities', a.id, 'submissions', s.id));
      await deleteDoc(doc(db, 'teachers', uid, 'activities', a.id));
    }
    p('Apagando provas e questões…');
    for (const col of ['provas', 'questoes', 'config']) for (const d of await lerDocs('teachers', uid, col)) await deleteDoc(doc(db, 'teachers', uid, col, d.id));
    await deleteDoc(doc(db, 'teachers', uid));
  } else {
    p('Apagando matrículas e envios…');
    const mats = (await getDocs(query(collectionGroup(db, 'students'), where('uid', '==', uid)))).docs;
    for (const m of mats) {
      const classId = m.ref.parent.parent.id, teacherUid = m.ref.parent.parent.parent.parent.id;
      if (m.data().status === 'approved') {
        for (const a of await lerDocs('teachers', teacherUid, 'activities')) {
          if (!(a.classIds || []).includes(classId)) continue;
          await deleteDoc(doc(db, 'teachers', teacherUid, 'activities', a.id, 'submissions', uid));
        }
      }
      await deleteDoc(m.ref);
    }
  }
  p('Apagando seu perfil…');
  await deleteDoc(doc(db, 'users', uid));
  p('Encerrando o login…');
  await excluirUsuarioAuth();
  lembrarUsuario(null);
  try { ['prova:salvas', 'prova:minhas', 'prova:perfil', 'prova:rascunho', 'prova:nuvem:meta', 'prova:nuvem:uid'].forEach(k => localStorage.removeItem(k)); } catch (_) { /* ok */ }
}
