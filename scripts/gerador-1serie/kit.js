// Kit da Matemática · 1ª série do Ensino Médio.
// Reaproveita o kit do ENA (mini-linguagem $...$, figuras SVG, padrões de slide, widgets, modelos de atividade criativa)
// e só troca o rótulo da matéria e as montagens de guia/atividade.
const E = require('../gerador-ena/kit.js');
const { L, T } = E;

const ANO = process.env.SERIE_EM || '1';   // '1' ou '3': usado também pelo gerador-3ano
const BASE = { area: 'Matemática · ' + ANO + 'ª Série', keyp: 'm' + ANO };
const SERIE = 'Matemática · ' + ANO + 'ª série do Ensino Médio';
// os <li> dos slides viram flex: cada pedaço de texto/matemática viraria uma coluna — embrulhamos o conteúdo num <span>
const embrulhaLi = h => h.replace(/<li>(?!\s*<svg)([\s\S]*?)<\/li>/g, (m, i) => `<li>${L.ic('check', '', 18)}<span>${i}</span></li>`);
const deck = c => embrulhaLi(T(L.deck({ ...BASE, ...c })));
const info = c => T(L.info({ ...BASE, ...c }));
const enem = c => T(L.enemPage({ ...BASE, ...c }));
const trilha = c => T(L.trilhaPage({ ...BASE, ...c }));
const free = c => T(L.freePage({ ...BASE, ...c }));
const limpa = h => h.replace(/\s*<script id="progresso-local">[\s\S]*?<\/script>/g, '').replace(/\s*<script src="[^"]*" id="ferramentas"><\/script>/g, '');
const writeP = (rel, html) => L.write(rel, limpa(html));

const { G } = E;
const S = a => L.sec(a[0], a[1], a[2], a[4], a[3] || 'primary');
const W = a => L.wideSec(a[0], a[1], a[2], a[4], a[3] || 'primary');

/** Guia visual (infográfico) da unidade. */
function guia(c) {
  return { out: c.dir + 'infografico.html', html: info({
    title: 'Guia visual — ' + c.brand + ' (' + ANO + 'ª série)', brand: c.brand, key: c.key + '-g', aulas: c.cap, color: c.color || 'primary',
    eyebrowTop: SERIE + ' · ' + c.cap, footerTop: SERIE + ' · ' + c.cap + ' · ' + c.brand,
    h1: c.h1, lede: c.lede, badges: c.badges, curve: c.curve || 'M20,160 C 120,150 200,120 280,90 C 360,60 420,40 480,24',
    sections: c.sections.map(S), wide: (c.wide || []).map(W),
    fontes: c.fontes || 'Aulas de Matemática da ' + ANO + 'ª série (2026), reescritas e organizadas em guia visual. Exercícios originais.'
  }) };
}
/** Atividade 1: questões de múltipla escolha no estilo ENEM/SAEB (originais). */
function atvEnem(c) {
  return { out: c.dir + 'atividade-enem.html', html: enem({
    key: c.key + '-en', title: c.h1.replace(/<[^>]+>/g, '') + ' — Atividade estilo ENEM', brand: c.brand, cls: c.cls || '',
    eyebrow: 'Estilo ENEM · ' + c.cap, h1: c.h1, subtitle: c.subtitle,
    introT: 'Antes de começar', introP: c.intro || 'Questões originais, no formato do ENEM (múltipla escolha A–E). Resolva no papel primeiro e só depois marque — a resolução aparece depois da resposta.',
    final: c.final, questions: c.questions
  }) };
}
/** Atividade 3: trilha de etapas com resposta numérica. */
function atvPratica(c) {
  return { out: c.dir + 'atividade-pratica.html', html: trilha({
    key: c.key + '-pr', title: c.h1.replace(/<[^>]+>/g, '') + ' — Prática', brand: c.brand, cls: c.cls || '',
    eyebrow: 'Prática progressiva · ' + c.cap, h1: c.h1, subtitle: c.subtitle, final: c.final, problems: c.problems
  }) };
}
/** Atividade 2: criativa (cClassificar, cOrdenar, cDetetive, cVF ou cMemoria). */
function atvCria(c) {
  const t = c.tpl;
  return { out: c.dir + 'atividade-criativa.html', html: free({
    key: c.key + '-cr', title: c.h1.replace(/<[^>]+>/g, ''), brand: c.brand, cls: c.cls || '',
    eyebrow: 'Atividade criativa · ' + c.cap, h1: c.h1, subtitle: c.subtitle, pill: t.pill, body: t.body, script: t.script
  }) };
}
const FONTE = ['Aulas de Matemática da ' + ANO + 'ª série do Ensino Médio (2026) — organizadas, reescritas e ampliadas para estudo.',
  'Exercícios e problemas originais (estilo ENEM/SAEB); questões de provas oficiais só quando citadas.'];
const fechamento = (cards, msg, refs = FONTE) => E.sintese(cards, msg) + E.refsSlide(refs, 'Para continuar', 'Referências e próximos passos', 'Refaça sozinho as questões, sem olhar a resolução, e anote os erros no caderno.');

module.exports = Object.assign({}, E, { BASE, SERIE, deck, info, enem, trilha, free, writeP, guia, atvEnem, atvPratica, atvCria, FONTE, fechamento });

// ---- atalhos extras desta série ----
const { sl, lede, mini, card, callout } = E;
/** Questão "Praticando": enunciado + alternativas com resolução. */
const pratique = (titulo, enun, opts, a, sol, nota = '', cls = 'primary') => sl('Praticando', titulo, `
          ${lede(enun)}
          ${mini('Escolha a alternativa:', opts, a, sol)}
          ${nota ? `<p class="hint" style="margin-top:6px;">${nota}</p>` : ''}`, { cls });
/** Questão no estilo ENEM (original) dentro do deck. */
const estiloEnem = (titulo, enun, opts, a, sol, cls = 'growth') => sl('Estilo ENEM', titulo, `
          ${lede(enun)}
          ${mini('Escolha a alternativa:', opts, a, sol)}
          <p class="hint" style="margin-top:6px;">Questão original, no formato do ENEM.</p>`, { cls });
Object.assign(module.exports, { pratique, estiloEnem });
