// node scripts/gerador-1serie/build.js [uNN ...]  — gera as páginas da Matemática · 1ª série (aulas/1-ano/…)
// Cada módulo uNN.js exporta { meta, pages: [{ out, html }] }.
const fs = require('fs');
const K = require('./kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const f of fs.readdirSync(__dirname).filter(f => /^u\d\d[\w-]*\.js$/.test(f)).sort()) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const x of require('./' + f).pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
