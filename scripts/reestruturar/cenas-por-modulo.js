// Mostra qual cena de contextualização cada módulo recebeu (para revisar a escolha automática).  node scripts/reestruturar/cenas-por-modulo.js
const { spawnSync } = require('child_process');
const r = spawnSync(process.execPath, [require('path').join(__dirname, 'reestruturar.js'), '.', '--seco', '--lista'], { encoding: 'utf8', maxBuffer: 1 << 26 });
const m = new Map();
for (const l of r.stdout.split('\n').filter(x => x.includes(' | '))) {
  const [p, , , c] = l.split(' | '); const partes = p.split(/[\\/]/);
  const k = partes.slice(0, -1).join('/');
  (m.get(k) || m.set(k, new Set()).get(k)).add(c);
}
for (const [k, v] of m) console.log(k.padEnd(78), [...v].join(','));
