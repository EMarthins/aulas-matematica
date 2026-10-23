// node scripts/gerador-6ano/build.js [mNN ...] — gera as aulas da Matemática · 6º ano (aulas/6-ano/<tri>/…) a partir das especificações mNN-*.js
const fs = require('fs');
const K = require('../gerador-9ano/kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const f of fs.readdirSync(__dirname).filter(f => /^m\d\d[\w-]*\.js$/.test(f)).sort()) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const x of require('./' + f).pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
