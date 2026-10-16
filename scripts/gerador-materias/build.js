// node scripts/gerador-materias/build.js [mNN ...] — gera a 1ª aula (1º trimestre) de cada matéria nova (aulas/<matéria>/<ano>/1-tri/…)
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
