// node scripts/gerador-ena/build.js [prefixo ...]  — gera as páginas ENA / PROFMAT no site
// Cada módulo (dNN.js, gNN.js) exporta uma lista de { out, html }.
const fs = require('fs'), path = require('path');
const K = require('./kit.js');
const only = process.argv.slice(2);
const mods = fs.readdirSync(__dirname).filter(f => /^[dg]\d\d[\w-]*\.js$/.test(f)).sort();
let n = 0;
for (const f of mods) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  for (const x of require('./' + f)) { K.writeP(x.out, x.html); n++; }
}
console.log('\n' + n + ' páginas geradas.');
