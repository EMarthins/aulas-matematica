// Detector de sobras da mini-linguagem nas aulas de Matemática 6º–9º (exceto a matéria "Recomposição Matemática").
//   node scripts/gerador-6ano/vazamentos-mat.js
// Pega: "$" solto, "{a|b}" sem cifrões, "R$" sem número, e páginas "engolidas" (tags HTML escapadas dentro de uma fórmula).
const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const raiz = path.join(__dirname, '../..', 'aulas');
const pastas = [];
for (const ano of ['6-ano', '7-ano', '8-ano', '9-ano']) {
  const a = path.join(raiz, ano); if (!fs.existsSync(a)) continue;
  for (const tri of fs.readdirSync(a)) {
    const t = path.join(a, tri); if (!fs.statSync(t).isDirectory()) continue;
    for (const mod of fs.readdirSync(t)) if (!/^recomposicao/.test(mod) && fs.statSync(path.join(t, mod)).isDirectory()) pastas.push(path.join(t, mod));
  }
}
const r = spawnSync(process.execPath, [path.join(__dirname, '../reestruturar/vazamentos.js'), ...pastas], { stdio: 'inherit' });
process.exit(r.status || 0);
