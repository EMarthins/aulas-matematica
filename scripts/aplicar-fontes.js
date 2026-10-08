// Troca o carregamento de fontes do Google (internet) pelas fontes locais em assets/fonts.css.
// Idempotente. Rode depois de criar páginas novas a partir de modelos antigos:  node scripts/aplicar-fontes.js .
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
const IGNORAR = new Set(['node_modules', '.git', 'assets']);

function* walk(d){ for(const n of fs.readdirSync(d)){ if(IGNORAR.has(n)) continue; const p = path.join(d, n); const s = fs.statSync(p);
  if(s.isDirectory()) yield* walk(p); else if(n.endsWith('.html') && !n.startsWith('_')) yield p; } }

const reLinkGoogle = /<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2[^"]*"[^>]*>/g;
const rePre = /\s*<link rel="preconnect" href="https:\/\/fonts\.g(?:oogleapis|static)\.com"[^>]*>/g;
let n = 0, ja = 0;
for(const f of walk(root)){
  let html = fs.readFileSync(f, 'utf8');
  if(!reLinkGoogle.test(html)){ reLinkGoogle.lastIndex = 0; ja++; continue; }
  reLinkGoogle.lastIndex = 0;
  const rel = path.relative(path.dirname(f), path.join(root, 'assets/fonts.css')).split(path.sep).join('/');
  html = html.replace(rePre, '').replace(reLinkGoogle, `<link href="${rel}" rel="stylesheet">`);
  fs.writeFileSync(f, html, 'utf8'); n++;
}
console.log('páginas com fontes locais:', n, '| sem fonte do Google:', ja);
