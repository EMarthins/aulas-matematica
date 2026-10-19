// Auxiliar para escrever, de forma compacta, os módulos de Matemática feitos a partir do CD "Educador Interativo" (slides .ppt/.pptx usados como BASE; texto, exemplos e questões ORIGINAIS).
// Cada aula segue a ESTRUTURA PADRÃO DE EXATAS (docs/estrutura-aulas.md). Cuidados nos textos: "R$" só com número logo depois (ou "R&#36;"); sem barras invertidas; math na mini-linguagem ($…$, {a|b}, √{x}, ^ e _).
const P = require('./kit.js');
const { unidade } = require('./aula.js');
const { tbl, checks, callout, card, g2 } = P;

const TODAS = [];   // todas as questões registradas (usado por conferir-contas.js)
const co = c => `<span style="color:var(--${c});">`;                         // destaque colorido no título
const sp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');         // 12 345 com espaço fino
const fig = (cena, legenda, max) => P.figura(cena, legenda || 'Ilustração original de contexto.', max || '320px');
const ul = (itens, tam) => checks(itens, tam || '1.12rem');

/** Uma aula.  previos = [texto, [enunciado, [opções], índiceCerto, explicação], pergunta-em-dupla]
 *  explicacao = [[titulo, [itens], figHtml?], …]   exemplos = [[titulo, enunciado, [[passo, detalhe], …], resposta, verificação?], …]
 *  guiada = [titulo, enunciado, [dica1, dica2, dica3], resolução, figHtml?]   pratica = [[enun, [opções], idx, comentário], …] (4)
 *  sintese = [[[selo, texto] ×3], perguntaDeRevisão, retomada]   saida = [[enun, [opções], idx] ×3] */
function A(slug, titulo, h1, pergunta, cena, badges, previos, objetivos, dica, explicacao, exemplos, guiada, pratica, sintese, saida, extra = {}) {
  // conferências básicas das questões (o conteúdo matemático é conferido por quem escreve)
  const chk = (q, ctx) => {
    const [en, op, ix] = q;
    if (!Array.isArray(op) || op.length < 4 || op.length > 5) throw new Error(slug + ' ' + ctx + ': precisa de 4–5 alternativas — ' + en);
    if (new Set(op.map(String)).size !== op.length) throw new Error(slug + ' ' + ctx + ': alternativas repetidas — ' + en);
    if (!(ix >= 0 && ix < op.length)) throw new Error(slug + ' ' + ctx + ': índice do gabarito fora das alternativas — ' + en);
  };
  pratica.forEach(q => chk(q, 'prática')); saida.forEach(q => chk(q, 'saída')); chk(previos[1], 'conhecimentos prévios');
  pratica.forEach(q => TODAS.push({ slug, ctx: 'prática', q })); saida.forEach(q => TODAS.push({ slug, ctx: 'saída', q })); TODAS.push({ slug, ctx: 'prévios', q: previos[1] });
  if (pratica.length !== 4 || saida.length !== 3 || explicacao.length < 2 || exemplos.length < 1 || objetivos.length < 2) throw new Error(slug + ': estrutura incompleta');
  return {
    slug, titulo, h1, pergunta, cena, legenda: extra.legenda || 'Ilustração original de contexto.', badges,
    previos: { texto: previos[0], mini: previos[1], dupla: previos[2] },
    objetivos, dica,
    explicacao: explicacao.map(([t, it, f]) => ({ titulo: t, html: ul(it), ...(f ? { fig: f } : {}) })),
    exemplos: exemplos.map(([t, enun, passos, resposta, verif]) => ({ titulo: t, enun, passos, resposta, ...(verif ? { verif } : {}) })),
    guiada: { titulo: guiada[0], enun: guiada[1], dicas: guiada[2], resolucao: guiada[3], ...(guiada[4] ? { fig: guiada[4] } : {}) },
    pratica,
    sintese: { ideias: sintese[0], pergunta: sintese[1], retomada: sintese[2] },
    saida: saida.map(([q, o, a]) => ({ q, o, a })),
    ...(extra.widget ? { widget: extra.widget } : {})
  };
}

/** Um módulo (unidade do catálogo). o = { ano:'6° Ano', tri, pasta, titulo, accent, icon, key, area, destino?, refs?, aulas:[A(...)…] } */
const mod = o => unidade({
  tipo: 'exatas', materia: 'matematica', ano: o.ano, tri: o.tri, pasta: o.pasta, inicio: 1, titulo: o.titulo, accent: o.accent || 'primary', icon: o.icon || 'numbers',
  key: o.key, keyp: o.keyp || ('m' + o.ano[0]), area: o.area, destino: o.destino,
  refs: o.refs || ['Aulas, exemplos e questões originais do EduMath, elaborados a partir das habilidades da BNCC; slides do CD "Educador Interativo" usados apenas como roteiro de conteúdo.'],
  aulas: o.aulas
});

module.exports = { TODAS, P, A, mod, co, sp, fig, ul, tbl, callout, card, g2 };
