// node scripts/gerador-3ano/build.js [vNN ...] — gera as páginas da Matemática · 3ª série (aulas/3-ano/<tri>-tri/…)
// Cada módulo vNN.js exporta { meta, pages: [{ out, html }] }.
const fs = require('fs');
const K = require('./kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const f of fs.readdirSync(__dirname).filter(f => /^v\d\d[\w-]*\.js$/.test(f)).sort()) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const x of require('./' + f).pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
