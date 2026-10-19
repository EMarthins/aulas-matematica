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
  onIdTokenChanged,
  updateProfile,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, updateDoc, increment, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { auth, db } from "./firebase-init.js";

// Trava de servidor das aulas (functions/_middleware.js): o token de identificação vai num cookie e o servidor confere a assinatura.
// O token vale 1 h; renovamos o cookie a cada renovação do token. Se expirar com a aba fechada, a própria página de bloqueio renova.
function gravaCookieSessao(token){
  try{ document.cookie = "edu_t=" + (token || "") + "; Path=/; Max-Age=" + (token ? 3300 : 0) + "; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : ""); }catch(e){}
}
onIdTokenChanged(auth, (u) => { if(u) u.getIdToken().then(gravaCookieSessao).catch(() => {}); else gravaCookieSessao(""); });


// Guarda nome e papel do usuário neste aparelho para a barra lateral (app/sidebar.js) montar o menu sem carregar o Firebase.
export function lembrarUsuario(perfil){
  try{
    if(perfil) localStorage.setItem("sb:user", JSON.stringify({ nome: perfil.nome, role: perfil.role, materia: perfil.materia || "" }));
    else { localStorage.removeItem("sb:user"); localStorage.removeItem("sb:admin"); }
  }catch(e){}
}

// role: 'professor' | 'aluno'
export async function cadastrar(nome, email, senha, role, materia){
  const cred = await createUserWithEmailAndPassword(auth, email, senha);
  await updateProfile(cred.user, { displayName: nome });
  var materiaPrincipal = role === "professor" ? String(materia || "") : "";
  lembrarUsuario({ nome, role, materia: materiaPrincipal }); // a barra lateral e a trava das aulas leem isto

  await setDoc(doc(db, "users", cred.user.uid), Object.assign({
    nome, email, role, createdAt: serverTimestamp(), ultimoAcesso: serverTimestamp(), acessos: 1
  }, materiaPrincipal ? { materia: materiaPrincipal } : {}));
  try{ sessionStorage.setItem("acesso:" + cred.user.uid, "1"); }catch(e){}

  if(role === "professor"){
    // Todo professor nasce no plano gratuito e AGUARDANDO APROVAÇÃO (o administrador aprova em admin.html).
    await setDoc(doc(db, "teachers", cred.user.uid), {
      nome, email, plano: "free", status: "pending", createdAt: serverTimestamp()
    });
  }

  return cred.user;
}

export async function entrar(email, senha){
  const cred = await signInWithEmailAndPassword(auth, email, senha);
  registrarAcesso(cred.user.uid, true);
  return cred.user;
}

// Registra o acesso (para o painel de administração): no máximo uma vez por sessão do navegador, ou a cada login.
// Falhas são ignoradas de propósito (não podem atrapalhar o uso); sem registro, o acesso fica "sem registro" no painel.
export async function registrarAcesso(uid, forcar){
  try{
    const k = "acesso:" + uid;
    if(!forcar && sessionStorage.getItem(k)) return;
    await updateDoc(doc(db, "users", uid), { ultimoAcesso: serverTimestamp(), acessos: increment(1) });
    sessionStorage.setItem(k, "1");
  }catch(e){}
}

// Matéria principal do professor (mudou de turmas? é só trocar). Guarda no perfil e neste aparelho.
export async function definirMateria(uid, materia){
  await updateDoc(doc(db, "users", uid), { materia: materia || "" });
  try{
    var u = JSON.parse(localStorage.getItem("sb:user") || "null");
    if(u){ u.materia = materia || ""; localStorage.setItem("sb:user", JSON.stringify(u)); }
    if(materia && materia !== "varias") localStorage.setItem("materia-pref", materia);
  }catch(e){}
}

export function sair(){
  lembrarUsuario(null);
  gravaCookieSessao("");
  return signOut(auth);
}

// Confirma a senha do usuário logado (necessário para excluir a conta).
export async function reautenticar(senha){
  const u = auth.currentUser;
  if(!u || !u.email) throw new Error("Sem usuário logado.");
  await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, senha));
}

export async function excluirUsuarioAuth(){
  await deleteUser(auth.currentUser);
}

export function recuperarSenha(email){
  return sendPasswordResetEmail(auth, email);
}

export function aoMudarAuth(callback){
  return onAuthStateChanged(auth, (user) => {
    if(!user) lembrarUsuario(null);
    else registrarAcesso(user.uid);
    callback(user);
  });
}

export async function buscarPerfil(uid){
  const snap = await getDoc(doc(db, "users", uid));
  const perfil = snap.exists() ? snap.data() : null;
  if(perfil && auth.currentUser && auth.currentUser.uid === uid) lembrarUsuario(perfil);
  return perfil;
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
    "auth/requires-recent-login": "Por segurança, saia, entre de novo e tente outra vez.",
    "auth/too-many-requests": "Muitas tentativas. Aguarde um pouco e tente de novo."
  };
  return mapa[codigo] || "Não foi possível completar a ação. Tente novamente.";
}
