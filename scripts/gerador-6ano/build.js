// node scripts/gerador-6ano/build.js [mNN ...] — gera as aulas da Matemática do 6º ao 9º ano (aulas/<ano>/<tri>/…) a partir das especificações mNN-*.js
// (cada arquivo exporta um módulo ou uma lista de módulos).
const fs = require('fs');
const K = require('../gerador-9ano/kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const f of fs.readdirSync(__dirname).filter(f => /^m\d\d[\w-]*\.js$/.test(f)).sort()) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const mod of [].concat(require('./' + f))) for (const x of mod.pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
