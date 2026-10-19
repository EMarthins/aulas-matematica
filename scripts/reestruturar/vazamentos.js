// Procura sobras da mini-linguagem de fórmulas nos textos visíveis das aulas geradas: "$" solto, "{a|b}", "√{" ou barra invertida sem converter.
//   node scripts/reestruturar/vazamentos.js <pasta-ou-arquivo...>
const fs = require('fs'), path = require('path');
const alvos = process.argv.slice(2); const arqs = [];
const walk = p => { const s = fs.statSync(p); if (s.isDirectory()) fs.readdirSync(p).forEach(n => walk(path.join(p, n))); else if (/\.html$/.test(p)) arqs.push(p); };
alvos.forEach(walk);
let ruins = 0;
for (const f of arqs) {
  const h = fs.readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  const txt = h.replace(/<[^>]+>/g, ' ');
  const ach = [];
  const m1 = txt.match(/\$[^\s]{0,20}/g); if (m1) ach.push('$ solto: ' + m1.slice(0, 3).join(' | '));
  const m2 = txt.match(/\{[^{}]{1,12}\|[^{}]{1,12}\}/g); if (m2) ach.push('{a|b}: ' + m2.slice(0, 3).join(' | '));
  const m3 = txt.match(/√\{/g); if (m3) ach.push('√{');
  const m4 = txt.match(/\\[a-z]+/g); if (m4) ach.push('barra invertida: ' + m4.slice(0, 3).join(' '));
  if (ach.length) { ruins++; console.log('✘', f.replace(/\\/g, '/'), '—', ach.join('; ')); }
}
console.log(ruins ? ruins + ' arquivo(s) com sobras' : '✔ ' + arqs.length + ' arquivo(s) sem sobras da mini-linguagem');
process.exit(ruins ? 1 : 0);
