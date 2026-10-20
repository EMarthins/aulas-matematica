// Mostra como ficaram no banco as questões (texto limpo).  node scripts/banco-provas/transcrever/mostrar.js <id …>
const j = require('../../../app/banco-provas.json');
const t = s => String(s || '').replace(/<br><span class="pb"><\/span>/g, '⏎⏎').replace(/<br>/g, '⏎');
for (const id of process.argv.slice(2)) {
  const q = j.questoes.find(x => x.id === id); if (!q) { console.log('?', id); continue; }
  console.log('\n=== ' + id + (q.soImagem ? ' (AINDA IMAGEM)' : ''));
  if (q.soImagem) continue;
  const E = t(q.enunciado); console.log('E: ' + (process.env.COMPACT && E.length > 260 ? E.slice(0, 70) + ' […' + (E.length - 210) + ']… ' + E.slice(-140) : E));
  const f = q.figuras || (q.figura ? [q.figura] : []); f.forEach(x => console.log('FIG: ' + (x.src || x.tipo) + (x.legenda ? ' | leg: ' + x.legenda : '')));
  if (q.pergunta) { const P = t(q.pergunta); console.log('P: ' + (process.env.COMPACT && P.length > 260 ? P.slice(0, 70) + ' […]… ' + P.slice(-140) : P)); }
  (q.alternativas || []).forEach((a, i) => console.log('  ' + 'ABCDE'[i] + (a.ok ? '*' : ' ') + ') ' + (process.env.COMPACT ? t(a.t).slice(0, 60) : t(a.t))));
  (q.afirmacoes || []).forEach((a, i) => console.log('  · ' + (a.ok ? 'V ' : 'F ') + t(a.t)));
}
