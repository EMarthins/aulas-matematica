// node scripts/gerador-fisica/build.js [fNN ...] — gera as páginas das aulas de Física (aulas/fisica/<série>/<tri>-tri/<módulo>/aula-N-….html)
const K = require('../gerador-9ano/kit.js');
const only = process.argv.slice(2);
let n = 0;
for (const m of require('./todos.js')()) {
  if (only.length && !only.some(o => m.arquivoFonte.startsWith(o))) continue;
  for (const x of m.pages) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
