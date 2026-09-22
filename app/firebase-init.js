// ============================================================
// Inicialização única do Firebase, reaproveitada por todas as
// páginas do app (login, painel do professor, painel do aluno,
// player de atividades).
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

// Sem Cloud Storage: desde out/2024 o Firebase Storage exige o plano pago
// (Blaze, com cartão cadastrado) mesmo dentro da cota gratuita. Em vez de
// upload de arquivo, os alunos colam um link (Google Drive etc.) nas
// atividades do tipo "envio de resposta/arquivo" — ver player.html.
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
