// 1ª série — Deck H: apostas, bets e jogos on-line (aulas 35, 41, 50)
// O conteúdo das aulas 35/41/50 da 1ª série coincide com o das aulas 35/42/47 da 2ª série: reaproveita o deck e ajusta os rótulos.
const d4 = require('./d4.js');
const tr = s => s
  .replace(/Aula 47/g, 'Aula @50').replace(/Aula 42/g, 'Aula 41').replace(/Aula @50/g, 'Aula 50')
  .replace(/AULAS 35, 42, 47/g, 'AULAS 35, 41, 50')
  .replace(/2ª série/g, '1ª série')
  .replace(/Aulas 35, 42, 47/g, 'Aulas 35, 41, 50');
const slides = d4.slides.map(tr);
module.exports = { ...d4, slides, extra: d4.extra, aulas: 'Aulas 35, 41, 50', serie: '1ª Série', key: 'apostas1', out: 'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/aula.html' };
