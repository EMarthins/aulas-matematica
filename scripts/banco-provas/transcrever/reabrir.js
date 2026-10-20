// Devolve questões à versão em IMAGEM (do último commit sem transcrição) para refazer a transcrição.
//   node scripts/banco-provas/transcrever/reabrir.js <id> <id> …
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const lerBase = c => JSON.parse(execSync('git show ' + c + ':app/banco-provas.json', { cwd: raiz, maxBuffer: 1 << 29 }).toString());
const base = lerBase('276a4f3'); const base2 = lerBase('8b09178'); // 8b09178 traz as listas (cdb-l) que não existiam em 276a4f3
base.questoes.push(...base2.questoes.filter(q => !base.questoes.some(x => x.id === q.id)));
const j = JSON.parse(fs.readFileSync(arq, 'utf8')); let n = 0;
for (const id of process.argv.slice(2)) { const o = base.questoes.find(q => q.id === id), i = j.questoes.findIndex(q => q.id === id); if (o && i >= 0) { j.questoes[i] = o; n++; } }
fs.writeFileSync(arq, JSON.stringify(j, null, 1)); console.log('reabertas', n);
