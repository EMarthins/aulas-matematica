// node scripts/gerador-9ano/build.js [uNN ...] — gera as páginas da Matemática · 9º ano · Recomposição (aulas/9-ano/<tri>-tri/…)
// Cada módulo uNN.js exporta { meta, pages: [{ out, html }] } (use unidade() de aula.js).
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
