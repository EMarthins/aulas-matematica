// Ligação do app/nuvem.js ao Firestore: teachers/{uid}/{provas|questoes|config}/{id} = { id, t, json }.
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db } from "./firebase-init.js";

export function remotoFirestore(uid) {
  return {
    async listar(col) { const s = await getDocs(collection(db, 'teachers', uid, col)); return s.docs.map(d => Object.assign({ id: d.id }, d.data())); },
    gravar(col, id, dados) { return setDoc(doc(db, 'teachers', uid, col, id), dados); },
    apagar(col, id) { return deleteDoc(doc(db, 'teachers', uid, col, id)); }
  };
}

/** Dados de teachers/{uid} (plano, planoAte…) ou null. */
export async function lerProfessor(uid) {
  const s = await getDoc(doc(db, 'teachers', uid));
  return s.exists() ? s.data() : null;
}
