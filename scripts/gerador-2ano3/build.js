// node scripts/gerador-2ano3/build.js [wNN ...] — gera as aulas da Matemática · 2ª série · 3º trimestre (aulas/2-ano/3-tri/…)
const fs = require('fs');
const K = require('../gerador-9ano/kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const f of fs.readdirSync(__dirname).filter(f => /^w\d\d[\w-]*\.js$/.test(f)).sort()) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const x of require('./' + f).pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
