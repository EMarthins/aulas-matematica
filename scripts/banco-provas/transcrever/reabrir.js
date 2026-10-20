// Devolve questões à versão em IMAGEM (do último commit sem transcrição) para refazer a transcrição.
//   node scripts/banco-provas/transcrever/reabrir.js <id> <id> …
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const base = JSON.parse(execSync('git show 276a4f3:app/banco-provas.json', { cwd: raiz, maxBuffer: 1 << 29 }).toString());
const j = JSON.parse(fs.readFileSync(arq, 'utf8')); let n = 0;
for (const id of process.argv.slice(2)) { const o = base.questoes.find(q => q.id === id), i = j.questoes.findIndex(q => q.id === id); if (o && i >= 0) { j.questoes[i] = o; n++; } }
fs.writeFileSync(arq, JSON.stringify(j, null, 1)); console.log('reabertas', n);
