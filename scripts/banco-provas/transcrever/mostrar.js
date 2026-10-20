// Mostra como ficaram no banco as questões (texto limpo).  node scripts/banco-provas/transcrever/mostrar.js <id …>
const j = require('../../../app/banco-provas.json');
const t = s => String(s || '').replace(/<br><span class="pb"><\/span>/g, '⏎⏎').replace(/<br>/g, '⏎');
for (const id of process.argv.slice(2)) {
  const q = j.questoes.find(x => x.id === id); if (!q) { console.log('?', id); continue; }
  console.log('\n=== ' + id + (q.soImagem ? ' (AINDA IMAGEM)' : ''));
  if (q.soImagem) continue;
  console.log('E: ' + t(q.enunciado));
  const f = q.figuras || (q.figura ? [q.figura] : []); f.forEach(x => console.log('FIG: ' + (x.src || x.tipo) + (x.legenda ? ' | leg: ' + x.legenda : '')));
  if (q.pergunta) console.log('P: ' + t(q.pergunta));
  (q.alternativas || []).forEach((a, i) => console.log('  ' + 'ABCDE'[i] + (a.ok ? '*' : ' ') + ') ' + t(a.t)));
  (q.afirmacoes || []).forEach((a, i) => console.log('  · ' + (a.ok ? 'V ' : 'F ') + t(a.t)));
}
