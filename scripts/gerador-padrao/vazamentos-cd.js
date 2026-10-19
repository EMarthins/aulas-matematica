// Roda o detector de sobras da mini-linguagem só nas pastas geradas pelos módulos pNN/hNN (as demais aulas têm "R$" legítimo).
//   node scripts/gerador-padrao/vazamentos-cd.js
const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const pastas = fs.readdirSync(__dirname).filter(n => /^[ph]\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta.pasta);
const r = spawnSync(process.execPath, [path.join(__dirname, '../reestruturar/vazamentos.js'), ...pastas.map(p => path.join(__dirname, '../..', p))], { stdio: 'inherit' });
process.exit(r.status || 0);
