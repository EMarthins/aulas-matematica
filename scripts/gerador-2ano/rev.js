// Construtor enxuto de decks de RETOMADA (revisões do 2º tri): monta a lista de slides a partir de uma descrição.
// build({ eb, h1, sub, badges, roteiro:[tit, [[a,b,ic]...]], objetivos:[...], dica, abertura:{ titulo, texto, extra, mini:[q, opts, a, sol] },
//         teoria:[{ eb, titulo, html }], exemplos:[[titulo, enunciado, passos, resposta, cor]], pratique:[[titulo, enun, opts, a, sol]],
//         enem:[titulo, enun, opts, a, sol], cuidados:[[t, h]...], quiz:[{q,o,a}], fecha:{ cards:[[t,h]...], msg } })  →  array de slides (HTML)
const K = require('./kit.js');
const { sl, lede, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem } = K;
const CORES = ['primary', 'growth', 'decay', 'success'];
function build(c) {
  const s = [];
  s.push(coverSlide({ eyebrow: c.eb, h1: c.h1, sub: c.sub, badges: c.badges, color: 'primary' }));
  s.push(roteiroSlide(c.roteiro[0], c.roteiro[1]));
  s.push(objetivosSlide(c.objetivos, 'Dica', c.dica, 'primary'));
  const ab = c.abertura;
  s.push(sl('Para início de conversa', ab.titulo, `
          ${lede(ab.texto)}
          <div class="grid2" style="margin-top:6px;">
            ${ab.extra || ''}
            ${mini(...ab.mini)}
          </div>`, { cls: '' }));
  c.teoria.forEach(t => s.push(sl(t.eb || 'Teoria', t.titulo, t.html, { cls: '' })));
  c.exemplos.forEach((e, i) => s.push(exemplo('Exemplo resolvido', e[0], e[1], e[2], e[3], e[4] || CORES[i % 4])));
  c.pratique.forEach((p, i) => s.push(pratique(p[0], p[1], p[2], p[3], p[4], '', CORES[i % 4])));
  if (c.enem) s.push(estiloEnem(c.enem[0], c.enem[1], c.enem[2], c.enem[3], c.enem[4]));
  s.push(armadilhas('Cuidados', 'Onde este assunto engana', c.cuidados));
  s.push(quiz(c.quiz));
  s.push(fechamento(c.fecha.cards, c.fecha.msg));
  return s;
}
module.exports = { build };
