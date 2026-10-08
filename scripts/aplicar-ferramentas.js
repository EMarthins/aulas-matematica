// Liga a cada aula, guia e atividade o menu de ferramentas (app/ferramentas.js).
// Idempotente: rode sempre que criar páginas novas.
//
//   node scripts/aplicar-ferramentas.js .
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
const MARK = 'id="ferramentas"';

function* walk(d){ for(const n of fs.readdirSync(d)){ const p = path.join(d, n); const s = fs.statSync(p);
  if(s.isDirectory()) yield* walk(p); else if(n.endsWith('.html')) yield p; } }

let novos = 0, ja = 0;
for(const sub of ['aulas', 'educacao-financeira']){
  const base = path.join(root, sub); if(!fs.existsSync(base)) continue;
  for(const f of walk(base)){
    const html = fs.readFileSync(f, 'utf8');
    if(html.includes(MARK)){ ja++; continue; }
    const rel = path.relative(path.dirname(f), path.join(root, 'app', 'ferramentas.js')).split(path.sep).join('/');
    fs.writeFileSync(f, html.replace(/\s*$/, '\n') + `<script src="${rel}" ${MARK}></script>\n`, 'utf8'); novos++;
  }
}
console.log('ferramentas ligadas:', novos, '| já tinham:', ja);
