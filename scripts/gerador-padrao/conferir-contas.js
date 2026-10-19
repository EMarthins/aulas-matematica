// Confere automaticamente as questões de CONTA dos módulos pNN (as que seguem "O valor de $expressão$ é:" com alternativas numéricas):
// calcula a expressão e compara com a alternativa marcada como certa.   node scripts/gerador-padrao/conferir-contas.js
const fs = require('fs'), path = require('path');
const cd = require('./cd.js');
for (const f of fs.readdirSync(__dirname).filter(n => /^p\d\d[\w-]*\.js$/.test(n)).sort()) require('./' + f);

// $...$ → número (ou null se a expressão não for puramente numérica)
const mat = t => { const m = String(t).match(/^\s*\$([^$]+)\$\s*$/); return m ? m[1] : null; };
function valor(expr) {
  if (expr == null) return null;
  let e = expr.replace(/&nbsp;/g, '').replace(/\s+/g, ' ');
  if (/[a-zA-Zπ%°]/.test(e.replace(/√/g, ''))) return null;
  e = e.replace(/√\{([^{}]*)\}/g, 'Math.sqrt($1)');
  for (let i = 0; i < 4; i++) e = e.replace(/\{([^{}|]*)\|([^{}|]*)\}/g, '(($1)/($2))');
  e = e.replace(/(\d) (\d)/g, '$1$2').replace(/,/g, '.').replace(/·/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/\^\{([^{}]*)\}/g, '**($1)').replace(/\^(-?\d+)/g, '**($1)').replace(/\[/g, '(').replace(/\]/g, ')');
  if (!/^[0-9+\-*/(). Mathsqrt]*$/.test(e)) return null;
  try { const v = Function('return (' + e + ')')(); return typeof v === 'number' && isFinite(v) ? v : null; } catch (err) { return null; }
}
let conferidas = 0; const erros = [];
for (const { slug, ctx, q } of cd.TODAS) {
  const [en, op, ix] = q;
  const m = String(en).match(/^\s*(?:O valor de|O resultado de|Calcule)\s*(\$[^$]+\$)\s*(?:é|vale)?:?\.?\s*$/i) || String(en).match(/^\s*(\$[^$]+\$)\s*(?:vale|é igual a|é):?\s*$/i);
  if (!m) continue;
  const esperado = valor(mat(m[1])); if (esperado == null) continue;
  const vs = op.map(o => valor(mat(o))); if (vs.some(v => v == null)) continue;
  conferidas++;
  const certo = vs[ix];
  if (Math.abs(certo - esperado) > 1e-9) erros.push(`${slug} (${ctx}): ${m[1]} = ${esperado}, mas a alternativa marcada vale ${certo}` + (vs.findIndex(v => Math.abs(v - esperado) < 1e-9) >= 0 ? ` (a certa seria a ${'ABCDE'[vs.findIndex(v => Math.abs(v - esperado) < 1e-9)]})` : ' (nenhuma alternativa bate)'));
}
console.log(`contas conferidas: ${conferidas} de ${cd.TODAS.length} questões`);
erros.forEach(e => console.log('  ✘', e));
process.exit(erros.length ? 1 : 0);
