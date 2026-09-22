// ============================================================
// Funções compartilhadas de autenticação e perfil de usuário.
// Usadas por login.html, professor/dashboard.html, aluno/dashboard.html
// e player.html.
// ============================================================
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { auth, db } from "./firebase-init.js";

// role: 'professor' | 'aluno'
export async function cadastrar(nome, email, senha, role){
  const cred = await createUserWithEmailAndPassword(auth, email, senha);
  await updateProfile(cred.user, { displayName: nome });

  await setDoc(doc(db, "users", cred.user.uid), {
    nome, email, role, createdAt: serverTimestamp()
  });

  if(role === "professor"){
    await setDoc(doc(db, "teachers", cred.user.uid), {
      nome, plano: "free", createdAt: serverTimestamp()
    });
  }

  return cred.user;
}

export async function entrar(email, senha){
  const cred = await signInWithEmailAndPassword(auth, email, senha);
  return cred.user;
}

export function sair(){
  return signOut(auth);
}

export function recuperarSenha(email){
  return sendPasswordResetEmail(auth, email);
}

export function aoMudarAuth(callback){
  return onAuthStateChanged(auth, callback);
}

export async function buscarPerfil(uid){
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// Redireciona para a página certa se o usuário não estiver logado
// ou não tiver o papel esperado. Use no topo de páginas protegidas.
// `loginPath` é o caminho RELATIVO até login.html a partir da página atual
// (ex.: 'login.html' na raiz, '../login.html' se estiver numa subpasta) —
// necessário porque o site é hospedado numa subpasta no GitHub Pages, então
// caminhos absolutos como "/login.html" apontariam para o domínio errado.
export function protegerPagina(roleEsperada, aoAutenticar, loginPath){
  loginPath = loginPath || "login.html";
  aoMudarAuth(async (user) => {
    if(!user){
      window.location.href = loginPath;
      return;
    }
    const perfil = await buscarPerfil(user.uid);
    if(!perfil || perfil.role !== roleEsperada){
      window.location.href = loginPath;
      return;
    }
    aoAutenticar(user, perfil);
  });
}

export function gerarCodigoTurma(){
  const alfabeto = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sem O/0/I/1, evita confusão
  let codigo = "";
  for(let i=0; i<6; i++){
    codigo += alfabeto[Math.floor(Math.random()*alfabeto.length)];
  }
  return codigo;
}

export function mensagemErroAuth(err){
  var codigo = err && err.code;
  var mapa = {
    "auth/email-already-in-use": "Esse e-mail já tem uma conta. Tente entrar em vez de cadastrar.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/user-not-found": "Não encontramos uma conta com esse e-mail.",
    "auth/invalid-credential": "E-mail ou senha incorretos.",
    "auth/too-many-requests": "Muitas tentativas. Aguarde um pouco e tente de novo."
  };
  return mapa[codigo] || "Não foi possível completar a ação. Tente novamente.";
}
