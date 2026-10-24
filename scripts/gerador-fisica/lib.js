// Montador das aulas de Física (Ensino Médio) na ESTRUTURA PADRÃO: cada aula escolhe o modelo —
//   E(...) = modelo de EXATAS (aulas com contas)   ·   H(...) = modelo de HUMANAS (aulas teóricas: fonte/evidência + análise/comparação)
// Cada arquivo fNN-*.js exporta um array de módulos:  module.exports = [ modulo({ ano, tri, titulo, accent, icon, key, aulas:[E(...), H(...)] }), … ]
// O título do módulo e os títulos das aulas devem ser IGUAIS aos de scripts/plano/dados/fisica.js (a checagem está em scripts/plano/itens.js).
// Cuidados: "R$" só com número depois; sem barras invertidas; math na mini-linguagem ($…$, {a|b}, √{x}, ^ e _); "${a|b}" em template literal vira \${a|b}.
const P = require('../gerador-padrao/kit.js');
const { unidade } = require('../gerador-padrao/aula.js');
const cd = require('../gerador-padrao/cd.js');
const CEN = {}; // cenas.js (3ª série), cenas2.js (2ª série), cenas1.js (1ª série)
['cenas.js', 'cenas2.js', 'cenas1.js'].forEach(f => { if (require('fs').existsSync(require('path').join(__dirname, f))) Object.assign(CEN, require('./' + f)); });
const { tbl, checks, callout, card, g2 } = P;

const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);
const co = c => `<span style="color:var(--${c});">`;
const sp = cd.sp;
const ul = (itens, tam) => checks(itens, tam || '1.12rem');
const fig = (cena, legenda, max) => P.figura(typeof cena === 'string' && CEN[cena] ? CEN[cena] : cena, legenda || 'Ilustração original de contexto.', max || '320px');
const cena = k => { if (!CEN[k]) throw new Error('cena inexistente: ' + k); return CEN[k]; };
// (IL e resolveCena são definidos logo abaixo)

const chk = (slugA, q, ctx) => {
  const [en, op, ix] = q;
  if (!Array.isArray(op) || op.length < 4 || op.length > 5) throw new Error(slugA + ' ' + ctx + ': precisa de 4–5 alternativas — ' + en);
  if (new Set(op.map(String)).size !== op.length) throw new Error(slugA + ' ' + ctx + ': alternativas repetidas — ' + en);
  if (!(ix >= 0 && ix < op.length)) throw new Error(slugA + ' ' + ctx + ': índice do gabarito fora das alternativas — ' + en);
  cd.TODAS.push({ slug: slugA, ctx, q });
};
const lista = (slugA, pratica, saida, previos) => {
  pratica.forEach(q => chk(slugA, q, 'prática')); saida.forEach(q => chk(slugA, q, 'saída')); chk(slugA, previos[1], 'prévios');
  if (pratica.length !== 4 || saida.length !== 3) throw new Error(slugA + ': 4 questões de prática e 3 de saída');
};
const IL = require('../gerador-padrao/ilus.js').cenas;
const resolveCena = c => { if (typeof c !== 'string') return c; if (CEN[c]) return CEN[c]; if (IL[c]) return c; throw new Error('cena inexistente: ' + c); };

/** Aula de EXATAS (com contas). Mesmos argumentos de A() em scripts/gerador-padrao/cd.js; a cena é uma chave de cenas.js ou de ilus.js.
 *  A(slug, titulo, h1, pergunta, cena, badges, [texto, [enun, opções, idx, expl], dupla], objetivos, dica, explicacao[[t,[itens],fig?]],
 *    exemplos[[t, enun, [[passo,detalhe]], resposta, verif?]], guiada[t, enun, [dicas], resolução, fig?], pratica(4), [ideias, pergunta, retomada], saida(3), {legenda?}) */
function E(slugA, titulo, h1, pergunta, cn, badges, previos, objetivos, dica, explicacao, exemplos, guiada, pratica, sintese, saida, extra = {}) {
  lista(slugA, pratica, saida, previos);
  if (explicacao.length < 2 || exemplos.length < 1 || objetivos.length < 2) throw new Error(slugA + ': estrutura incompleta');
  return {
    slug: slugA, titulo, h1, pergunta, cena: resolveCena(cn), legenda: extra.legenda || 'Ilustração original de contexto.', badges,
    previos: { texto: previos[0], mini: previos[1], dupla: previos[2] }, objetivos, dica,
    explicacao: explicacao.map(([t, it, f]) => ({ titulo: t, html: ul(it), ...(f ? { fig: f } : {}) })),
    exemplos: exemplos.map(([t, enun, passos, resposta, verif]) => ({ titulo: t, enun, passos, resposta, ...(verif ? { verif } : {}) })),
    guiada: { titulo: guiada[0], enun: guiada[1], dicas: guiada[2], resolucao: guiada[3], ...(guiada[4] ? { fig: guiada[4] } : {}) },
    pratica, sintese: { ideias: sintese[0], pergunta: sintese[1], retomada: sintese[2] }, saida: saida.map(([q, o, a]) => ({ q, o, a })),
    ...(extra.widget ? { widget: extra.widget } : {})
  };
}

/** Aula de HUMANAS (teórica): abertura → prévios → contextualização → ideias centrais → fonte/evidência → análise/comparação → aplicação → síntese.
 *  H(slug, titulo, h1, pergunta, cena, badges, [texto, [enun, opções, idx, expl], dupla], contexto[[t,[itens],fig?]], explicacao[[t,[itens],fig?]],
 *    fonte[titulo, trecho, procedência, [[pergunta, comentário]…], cena?], comparar[titulo, pergunta, [tituloA, textoA], [tituloB, textoB], fecho],
 *    pratica(4), [ideias, pergunta, retomada], saida(3), {legenda?}) */
function H(slugA, titulo, h1, pergunta, cn, badges, previos, contexto, explicacao, fonte, comparar, pratica, sintese, saida, extra = {}) {
  lista(slugA, pratica, saida, previos);
  if (explicacao.length < 2 || contexto.length < 1) throw new Error(slugA + ': estrutura incompleta');
  const mk = ([t, it, f]) => ({ titulo: t, html: ul(it), ...(f ? { fig: f } : {}) });
  return {
    tipo: 'humanas', slug: slugA, titulo, h1, pergunta, cena: resolveCena(cn), legenda: extra.legenda || 'Ilustração original de contexto.', badges,
    previos: { texto: previos[0], mini: previos[1], dupla: previos[2] },
    contexto: contexto.map(mk), explicacao: explicacao.map(mk),
    fonte: { titulo: fonte[0], trecho: fonte[1], proced: fonte[2], perguntas: fonte[3], ...(fonte[4] ? { cena: resolveCena(fonte[4]), legenda: 'Ilustração original de apoio.' } : {}) },
    comparar: { titulo: comparar[0], pergunta: comparar[1], a: comparar[2], b: comparar[3], fecho: comparar[4] },
    pratica, sintese: { ideias: sintese[0], pergunta: sintese[1], retomada: sintese[2] }, saida: saida.map(([q, o, a]) => ({ q, o, a }))
  };
}

const ANO = { '1° Ano': ['1ª série', 1], '2° Ano': ['2ª série', 2], '3° Ano': ['3ª série', 3] };
/** Módulo: { ano:'3° Ano', tri:1, titulo, accent?, icon?, key, aulas:[E()|H()…] } */
function modulo(o) {
  const [nome, n] = ANO[o.ano];
  return unidade({
    tipo: 'exatas', materia: 'fisica', ano: o.ano, tri: o.tri, pasta: 'aulas/fisica/' + n + '-ano/' + o.tri + '-tri/' + slug(o.titulo) + '/', inicio: 1,
    titulo: o.titulo, accent: o.accent || 'primary', icon: o.icon || 'wave', key: o.key, keyp: 'fi', area: 'Física · ' + nome,
    refs: o.refs || ['Aulas, exemplos e questões originais do EduMath, elaborados a partir das habilidades de Ciências da Natureza da BNCC (Ensino Médio).', 'Dica de estudo: faça um desenho da situação, anote os dados com as unidades e confira o resultado.'],
    aulas: o.aulas
  });
}
module.exports = { E, H, modulo, slug, co, sp, ul, fig, cena, tbl, checks, callout, card, g2, P };
