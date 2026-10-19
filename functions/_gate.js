// Trava REAL das aulas (servidor): lógica pura usada por functions/_middleware.js (Cloudflare Pages Functions).
// O navegador envia o "token de identificação" do Firebase num cookie (edu_t, gravado por app/auth.js); aqui conferimos a
// ASSINATURA do token com as chaves públicas do Google. Sem token válido, as aulas (exceto as grátis) não saem do servidor.
// Não depende de nada além de Web Crypto e fetch (roda no Cloudflare e no Node 20+, onde é testado: scripts/testar-gate.js).

export const PROJETO = 'estude-app-marth';
export const JWKS_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';
export const COOKIE = 'edu_t';
const RAIZES = ['/aulas/', '/educacao-financeira/', '/ena-profmat/'];

/** Caminho do arquivo protegido (sem a barra inicial) ou null se a página é livre. `gratis` = Set de caminhos liberados. */
export function protegido(pathname, gratis) {
  let p;
  try { p = decodeURIComponent(pathname); } catch (e) { return null; }
  if (!RAIZES.some(r => p.startsWith(r))) return null;
  if (p.includes('..')) return p.slice(1) || null;
  const ultimo = p.split('/').pop();
  if (p.endsWith('/')) p += 'index.html'; else if (!ultimo.includes('.')) p += '.html';
  if (!p.endsWith('.html')) return null;
  const rel = p.slice(1);
  return gratis.has(rel) ? null : rel;
}

export function lerCookie(cabecalho, nome) {
  if (!cabecalho) return '';
  for (const parte of cabecalho.split(';')) {
    const i = parte.indexOf('=');
    if (i > 0 && parte.slice(0, i).trim() === nome) return parte.slice(i + 1).trim();
  }
  return '';
}

const b64 = s => { s = s.split('-').join('+').split('_').join('/'); while (s.length % 4) s += '='; const bin = atob(s); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };
const json = s => JSON.parse(new TextDecoder().decode(b64(s)));

let chaves = null, chavesAte = 0;   // cache por instância
async function carregaChaves(forcar, buscar) {
  const agora = Date.now();
  if (!forcar && chaves && agora < chavesAte) return chaves;
  const r = await (buscar || fetch)(JWKS_URL);
  if (!r.ok) throw new Error('jwks ' + r.status);
  const j = await r.json();
  chaves = j.keys || []; chavesAte = agora + 60 * 60 * 1000;
  return chaves;
}
export function limpaCacheChaves() { chaves = null; chavesAte = 0; }

/** { ok:true, uid, email } | { ok:false, motivo } | { ok:false, indisponivel:true } (não deu para buscar as chaves do Google) */
export async function verificaToken(token, opc = {}) {
  const agora = Math.floor((opc.agora || Date.now()) / 1000), projeto = opc.projeto || PROJETO;
  const partes = String(token || '').split('.');
  if (partes.length !== 3) return { ok: false, motivo: 'formato' };
  let cab, pl;
  try { cab = json(partes[0]); pl = json(partes[1]); } catch (e) { return { ok: false, motivo: 'formato' }; }
  if (cab.alg !== 'RS256' || !cab.kid) return { ok: false, motivo: 'alg' };
  if (pl.aud !== projeto || pl.iss !== 'https://securetoken.google.com/' + projeto) return { ok: false, motivo: 'projeto' };
  if (!pl.sub || typeof pl.sub !== 'string') return { ok: false, motivo: 'sub' };
  if (typeof pl.exp !== 'number' || pl.exp <= agora) return { ok: false, motivo: 'expirado' };
  if (typeof pl.iat === 'number' && pl.iat > agora + 300) return { ok: false, motivo: 'futuro' };
  let ks;
  try {
    ks = await carregaChaves(false, opc.buscar);
    if (!ks.some(k => k.kid === cab.kid)) ks = await carregaChaves(true, opc.buscar);   // chave nova (rotação)
  } catch (e) { return { ok: false, indisponivel: true }; }
  const jwk = ks.find(k => k.kid === cab.kid);
  if (!jwk) return { ok: false, motivo: 'kid' };
  try {
    const chave = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const bom = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', chave, b64(partes[2]), new TextEncoder().encode(partes[0] + '.' + partes[1]));
    if (!bom) return { ok: false, motivo: 'assinatura' };
  } catch (e) { return { ok: false, motivo: 'assinatura' }; }
  return { ok: true, uid: pl.sub, email: pl.email || '' };
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** Página devolvida (HTTP 401) quando não há sessão válida. Tenta renovar sozinha o cookie a partir do login do Firebase e recarrega. */
export function paginaBloqueio(rel) {
  // `rel` vem do endereço pedido: nunca entra cru no HTML (voltar é codificado; no script, "<" vira o código unicode)
  const voltar = encodeURIComponent(rel), r = JSON.stringify(rel).split('<').join(String.fromCharCode(92) + 'u003c'), cookie = COOKIE;
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<title>Aula para quem tem conta — EduMath</title>
<style>:root{color-scheme:light dark}body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:system-ui,Segoe UI,Roboto,sans-serif;background:#14141a;color:#f2f2f7;padding:20px;box-sizing:border-box}
@media (prefers-color-scheme:light){body{background:#f6f6fb;color:#1b1b24}.c{background:#fff!important;border-color:#d8d8e6!important}}
.c{max-width:30rem;text-align:center;background:#1e1e27;border:1px solid #34344a;border-radius:20px;padding:28px 24px}h1{font-size:1.35rem;margin:.4em 0}p{line-height:1.5;color:inherit;opacity:.85}
a.b{display:inline-block;margin:6px 4px;padding:.65em 1.2em;border-radius:12px;font-weight:700;text-decoration:none;border:1.5px solid #7b6cf6;color:#fff;background:#5b4de0}a.s{background:transparent;color:inherit;border-color:#7b6cf655}</style></head>
<body><div class="c"><div style="font-size:2rem">&#128274;</div><h1 id="t">Verificando seu acesso…</h1><p id="p">Só um instante.</p><div id="a" hidden>
<a class="b" href="/login.html?voltar=${voltar}">Entrar</a><a class="b s" href="/login.html?modo=cadastrar&amp;voltar=${voltar}">Criar conta grátis</a><br><a class="b s" href="/catalogo.html#gratis">Ver aulas grátis</a></div></div>
<script type="module">
var REL = ${r}, KEY = 'gate:' + REL, t = document.getElementById('t'), p = document.getElementById('p'), a = document.getElementById('a');
function mostra(titulo, texto){ t.textContent = titulo || 'Esta aula é para quem tem conta'; p.textContent = texto || 'Sem conta você acessa 1 aula por ano e trimestre. Crie sua conta grátis (ou entre) para liberar todas.'; a.hidden = false; }
try {
  var m = await import('/app/firebase-init.js');
  var f = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js');
  f.onAuthStateChanged(m.auth, async function(u){
    if(!u){ mostra(); return; }
    try {
      var tk = await u.getIdToken(true);
      document.cookie = '${cookie}=' + tk + '; Path=/; Max-Age=3300; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
      var ult = 0; try { ult = +sessionStorage.getItem(KEY) || 0; } catch(e){}
      if(Date.now() - ult > 20000){ try { sessionStorage.setItem(KEY, String(Date.now())); } catch(e){} location.reload(); }
      else mostra('Não foi possível liberar esta aula', 'Sua sessão não foi aceita pelo servidor. Saia, entre de novo e tente outra vez.');
    } catch(e){ mostra(); }
  });
} catch(e){ mostra(); }
</script></body></html>`;
}
