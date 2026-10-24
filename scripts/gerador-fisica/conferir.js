// node scripts/gerador-fisica/conferir.js — confere as páginas de Física geradas: sobras da mini-linguagem ($ solto, tags engolidas),
// 16 seções balanceadas e gabaritos dentro das alternativas. (A parte física dos exercícios é conferida por quem escreve.)
const fs = require('fs'), path = require('path');
const raiz = path.resolve(__dirname, '../..');
let n = 0, ruins = 0;
const ver = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) return ver(p);
  if (!/^aula-.*\.html$/.test(e.name)) return;
  n++;
  const h = fs.readFileSync(p, 'utf8'), corpo = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const probs = [];
  const sobras = (corpo.match(/\$/g) || []).length; if (sobras) probs.push(sobras + ' "$" soltos');
  if (/&lt;\/?<i>|&lt;<i>(div|span|p|li|section)/.test(corpo)) probs.push('página engolida por $ sem par');
  if (/\{[^{}<>]*\|[^{}<>]*\}/.test(corpo.replace(/<svg[\s\S]*?<\/svg>/g, ''))) probs.push('fração {a|b} sem $');
  const a = (corpo.match(/<section/g) || []).length, b = (corpo.match(/<\/section>/g) || []).length; if (a !== b) probs.push('sections ' + a + '/' + b);
  if (probs.length) { ruins++; console.log('✘', path.relative(raiz, p), '—', probs.join('; ')); }
});
ver(path.join(raiz, 'aulas/fisica'));
console.log(ruins ? '\n' + ruins + ' páginas com problemas (de ' + n + ')' : '✔ ' + n + ' páginas de Física sem sobras da mini-linguagem');
process.exit(ruins ? 1 : 0);
