// node build.js [d1 d2 ...]  — gera as páginas no site
const L = require('./lib.js');
const fs = require('fs');
const only = process.argv.slice(2);
const mods = fs.readdirSync(__dirname).filter(f => /^(d\d|i\d|a\d)[\w-]*\.js$/.test(f)).sort();
for (const f of mods) {
  const id = f.replace(/\.js$/, '');
  if (only.length && !only.some(o => id.startsWith(o))) continue;
  const m = require('./' + f);
  const list = Array.isArray(m) ? m : [m];
  for (const x of list) {
    if (x.slides) L.write(x.out, L.deck(x));
    else if (x.kind === 'info') L.write(x.out, L.info(x));
    else if (x.kind === 'enem') L.write(x.out, L.enemPage(x));
    else if (x.kind === 'trilha') L.write(x.out, L.trilhaPage(x));
    else if (x.kind === 'free') L.write(x.out, L.freePage(x));
  }
}
