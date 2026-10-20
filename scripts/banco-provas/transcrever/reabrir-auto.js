// Reabre (volta para imagem) todas as questões transcritas AUTOMATICAMENTE (as que não têm linha em lote-0NN-*.jsonl), para refazer com o analisar.js.
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const manual = new Set(); fs.readdirSync(__dirname).filter(f => /^lote-\d+/.test(f)).forEach(f => fs.readFileSync(path.join(__dirname, f), 'utf8').split('\n').filter(Boolean).forEach(l => manual.add(JSON.parse(l).id)));
const base = JSON.parse(execSync('git show 276a4f3:app/banco-provas.json', { cwd: raiz, maxBuffer: 1 << 29 }).toString()), porId = Object.fromEntries(base.questoes.map(q => [q.id, q]));
const j = JSON.parse(fs.readFileSync(arq, 'utf8')); let n = 0;
j.questoes = j.questoes.map(q => { if (q.transcrita && !manual.has(q.id) && porId[q.id]) { n++; return porId[q.id]; } return q; });
fs.writeFileSync(arq, JSON.stringify(j, null, 1)); console.log('reabertas (automáticas):', n);
