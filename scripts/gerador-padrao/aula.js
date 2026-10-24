// Montador de aulas na ESTRUTURA PADRÃO (docs/estrutura-aulas.md).
//
// exatas(s):  abertura → conhecimentos prévios → objetivos → explicação (2–4) → exemplo passo a passo (1–2) → prática guiada → prática independente (sem resposta)
//             → correção comentada → síntese → exit ticket (questões de saída) → "o que ainda ficou difícil?" → referências
// humanas(s): abertura provocativa → conhecimentos prévios → contextualização → ideias centrais (3–5) → fonte/evidência → análise/comparação → atividade de aplicação
//             → correção comentada → síntese + retomada da pergunta inicial → exit ticket → "o que ainda ficou difícil?" → referências
//
// spec comum: { slug, titulo, eyebrow?, h1?, pergunta, cena (chave de ilus.js ou SVG), legenda, badges?, previos:{texto,mini,dupla,cena?},
//   objetivos:[2-3], dica, explicacao:[{eb?,titulo,html,fig?}], exemplos:[{titulo,enun,passos,resposta,verif?,fig?}], guiada:{titulo,enun,dicas,resolucao,fig?},
//   pratica:[[enun, [opções], idxCerto, comentário]…], sintese:{ideias:[[badge,texto]×3], pergunta, retomada?}, saida:[{q,o,a}×3], widget?:{titulo,html,js}, refs? }
// humanas acrescenta: contexto:[{titulo,html,fig?}], fonte:{titulo,trecho,proced,perguntas:[[p,comentário]]}, comparar:{titulo,pergunta,a:[t,h],b:[t,h],fecho}
const P = require('./kit.js');
const { WJS, BIND } = P;

const final = (s, u, partes) => {
  const a = [...partes];
  if (s.widget) a.splice(Math.min(5, a.length), 0, P.explicacao({ eb: 'Experimente', titulo: s.widget.titulo, html: s.widget.html, cls: 'decay' }));
  a.push(P.exitTicket(s.saida), P.reflexao(s.reflexao));
  a.push(P.refsSlide(s.refs || u.refs || ['Texto, exemplos e questões originais, elaborados para o EduMath a partir das habilidades da BNCC.'], 'Para continuar', 'Referências e próximos passos', s.proximo || 'Refaça as questões sem olhar a correção e anote o que errou.'));
  return a;
};

function exatas(u, k, s) {
  const a = [];
  a.push(P.abertura({ eyebrow: u.area + ' · Aula ' + k, h1: s.h1 || s.titulo, pergunta: s.pergunta, cena: s.cena, legenda: s.legenda, badges: s.badges || [] }));
  a.push(P.previos({ ...s.previos, cena: s.previos.cena, legenda: s.previos.legenda }));
  a.push(P.objetivos(s.objetivos, s.dica));
  s.explicacao.forEach(e => a.push(P.explicacao(e)));
  s.exemplos.forEach(e => a.push(P.exemploPassos(e)));
  a.push(P.guiada(s.guiada));
  a.push(P.praticaSlides(s.pratica));
  a.push(P.correcao(s.pratica));
  a.push(P.sintese(s.sintese));
  return build(u, k, s, final(s, u, a));
}

function humanas(u, k, s) {
  const a = [];
  a.push(P.abertura({ eyebrow: u.area + ' · Aula ' + k, h1: s.h1 || s.titulo, pergunta: s.pergunta, cena: s.cena, legenda: s.legenda, badges: s.badges || [] }));
  a.push(P.previos({ ...s.previos }));
  s.contexto.forEach(e => a.push(P.explicacao({ eb: 'Contextualização', ...e })));
  s.explicacao.forEach(e => a.push(P.explicacao({ eb: 'Ideias centrais', ...e })));
  a.push(P.fonte(s.fonte));
  a.push(P.comparar(s.comparar));
  a.push(P.praticaSlides(s.pratica, 'Atividade de aplicação'));
  a.push(P.correcao(s.pratica));
  a.push(P.sintese(s.sintese));
  return build(u, k, s, final(s, u, a));
}

function build(u, k, s, slides) {
  const file = 'aula-' + k + '-' + s.slug + '.html';
  return {
    file, titulo: s.titulo,
    page: {
      out: u.pasta + file,
      html: P.deck({ title: s.titulo + ' — ' + u.area, area: u.area, keyp: u.keyp, brand: u.titulo, key: u.key + 'a' + k, meta: 'Aula ' + k + ' · ' + s.titulo, slides, extra: WJS + BIND + (s.widget ? s.widget.js : '') + P.EXTRA })
    }
  };
}

/** u = { materia, ano, tri, pasta, titulo, accent, icon, key, keyp, area, refs?, tipo: 'exatas' | 'humanas', aulas: [spec…] } */
function unidade(u) {
  // cada aula pode escolher o seu modelo (s.tipo); sem isso vale o do módulo (u.tipo)
  const out = u.aulas.map((s, i) => ((s.tipo || u.tipo) === 'humanas' ? humanas : exatas)(u, i + 1, s));
  return {
    meta: { materia: u.materia, ano: u.ano, tri: u.tri, pasta: u.pasta, titulo: u.titulo, accent: u.accent || 'primary', icon: u.icon || 'numbers', aulas: out.map((o, i) => ['Aula ' + (u.inicio ? u.inicio + i : i + 1), o.titulo, o.file]), pendente: true, padrao: true, destino: u.destino },
    pages: out.map(o => o.page)
  };
}
module.exports = { exatas, humanas, unidade };
