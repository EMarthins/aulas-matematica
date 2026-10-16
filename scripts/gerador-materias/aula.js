// Montador de aulas (decks) da Recomposição do 9º ano: cada aula é uma "especificação" compacta; este módulo gera os slides no padrão do site.
//
// spec = {
//   slug, titulo, h1?, sub, badges: [[texto, cor?]…],
//   roteiro: [lede, [[título, descrição, ícone]…]],
//   objetivos: [3 textos], dica: 'texto do cartão',
//   gancho: { titulo, texto, fig?, mini: [pergunta, opções, índice, resolução] },
//   teoria: [[eyebrow, título, html]…],            // html pode usar os helpers do kit (lede, card, tbl, callout…)
//   exemplos: [[título, enunciado, [[passo, dica?]…], fecho]…],
//   widget?: { titulo, html, js },                  // interativo (html com W.*, js cru com $, el, nf, bind…)
//   pratique: [[título, enunciado, opções, índice, resolução, nota?]…],
//   enem: [título, enunciado, opções, índice, resolução],
//   cuidados: [[título, texto]…],
//   quiz: [{ q, o, a }…],
//   sintese: [[título, texto]…], msg
// }
const K = require('../gerador-9ano/kit.js');
const { sl, lede, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND } = K;

function aula(u, k, s) {
  const a = [];
  a.push(coverSlide({
    eyebrow: u.area + ' · Aula ' + k, h1: s.h1 || s.titulo, sub: s.sub,
    badges: s.badges || [], color: u.cor || 'primary'
  }));
  a.push(roteiroSlide(s.roteiro[0], s.roteiro[1]));
  a.push(objetivosSlide(s.objetivos, 'Dica', s.dica, 'primary'));
  const g = s.gancho;
  a.push(sl('Para início de conversa', g.titulo, `
          ${lede(g.texto)}
          <div class="grid2" style="margin-top:6px;">
            ${g.fig || ''}
            ${mini(...g.mini)}
          </div>`, { cls: '' }));
  const teo = s.teoria.map(t => sl(t[0], t[1], t[2], { cls: t[3] || 'primary' }));
  const ex = s.exemplos.map(e => exemplo('Exemplo resolvido', e[0], e[1], e[2], e[3] || ''));
  // ordem: teoria 1 → exemplo 1 → (widget) → teoria 2… → exemplo 2…
  const seq = [];
  teo.forEach((t, i) => { seq.push(t); if (ex[i]) seq.push(ex[i]); });
  ex.slice(teo.length).forEach(e => seq.push(e));
  if (s.widget) seq.splice(Math.min(2, seq.length), 0, sl('Experimente', s.widget.titulo, s.widget.html, { cls: 'decay' }));
  a.push(...seq);
  (s.pratique || []).forEach(p => a.push(pratique(...p)));
  if (s.enem) a.push(estiloEnem(...s.enem));
  a.push(armadilhas('Cuidados', s.cuidadosTitulo || 'Onde costuma dar errado', s.cuidados));
  a.push(quiz(s.quiz));
  a.push(fechamento(s.sintese, s.msg, s.refs || u.refs));
  const file = 'aula-' + k + '-' + s.slug + '.html';
  return {
    file, titulo: s.titulo,
    page: {
      out: u.pasta + file,
      html: K.deck({
        title: s.titulo + ' — ' + u.area, area: u.area, keyp: u.keyp, brand: u.titulo, key: u.key + 'a' + k, meta: 'Aula ' + k + ' · ' + s.titulo, slides: a,
        extra: WJS + BIND + (s.widget ? s.widget.js : '') + (s.js || '')
      })
    }
  };
}

/** Unidade (módulo): { tri, dir, titulo, accent, icon, key, cor?, aulas: [spec…] } → { meta, pages } */
function unidade(u) {
  const out = u.aulas.map((s, i) => aula(u, i + 1, s));
  return {
    meta: { materia: u.materia, ano: u.ano, tri: u.tri, pasta: u.pasta, titulo: u.titulo, accent: u.accent || 'primary', icon: u.icon || 'numbers', aulas: out.map((o, i) => ['Aula ' + (i + 1), o.titulo, o.file]), pendente: true },
    pages: out.map(o => o.page)
  };
}
module.exports = { aula, unidade };
