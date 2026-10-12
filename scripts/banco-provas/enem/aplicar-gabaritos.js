// Junta os gabaritos oficiais (INEP) às questões: lê gabaritos-AAAA.json e preenche o campo gab de imagens-AAAA.json.
//   node scripts/banco-provas/enem/aplicar-gabaritos.js   e depois   node scripts/banco-provas/enem/montar-imagens.js
// gabaritos-AAAA.json = { fonte, D1: { "6": "A", "1i": "B", … }, D2: { "91": "C", … } } — o caderno usado é o mesmo do recorte (D1 = caderno 1, D2 = caderno 5; 2018 só tem o 2º dia).
const fs = require('fs'), path = require('path');
let total = 0, faltam = [];
for (const f of fs.readdirSync(__dirname).filter(n => /^gabaritos-\d{4}\.json$/.test(n))) {
  const ano = f.match(/\d{4}/)[0], G = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
  const arq = path.join(__dirname, `imagens-${ano}.json`); if (!fs.existsSync(arq)) continue;
  const D = JSON.parse(fs.readFileSync(arq, 'utf8'));
  for (const it of D.itens) {
    const k = it.id.replace(/^enem\d+-/, ''), dia = it.n >= 91 ? 'D2' : 'D1';
    const g = (G[dia] || {})[k];
    if (g) { it.gab = g; total++; } else if (!it.gab) faltam.push(ano + '-' + k);
  }
  fs.writeFileSync(arq, JSON.stringify(D, null, 1));
}
console.log('gabaritos aplicados:', total, faltam.length ? '· sem gabarito: ' + faltam.join(',') : '');
