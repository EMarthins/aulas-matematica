// Kit da Matemática · 9º ano · Recomposição: reaproveita o kit do ENA (mini-linguagem $...$, SVG, slides, widgets) e troca o rótulo.
const E = require('../gerador-ena/kit.js');
const { L, T } = E;

const BASE = { area: 'Matemática · 9º ano · Recomposição', keyp: 'r9' };
const SERIE = 'Matemática · 9º ano do Ensino Fundamental · Recomposição';
// os <li> dos slides viram flex: embrulhamos o conteúdo num <span>
const embrulhaLi = h => h.replace(/<li>(?!\s*<svg)([\s\S]*?)<\/li>/g, (m, i) => `<li>${L.ic('check', '', 18)}<span>${i}</span></li>`);
const deck = c => embrulhaLi(T(L.deck({ ...BASE, ...c })));
const limpa = h => h.replace(/\s*<script id="progresso-local">[\s\S]*?<\/script>/g, '').replace(/\s*<script src="[^"]*" id="ferramentas"><\/script>/g, '');
const writeP = (rel, html) => L.write(rel, limpa(html));

const FONTE = ['Aulas de Recomposição de Aprendizagem de Matemática do 9º ano (2026) — organizadas, reescritas e ampliadas para estudo.',
  'Exercícios e problemas originais (estilo SAEB/ENEM); questões de provas oficiais só quando citadas.'];
const fechamento = (cards, msg, refs = FONTE) => E.sintese(cards, msg) + E.refsSlide(refs, 'Para continuar', 'Referências e próximos passos', 'Refaça sozinho as questões, sem olhar a resolução, e anote os erros no caderno.');

const { sl, lede, mini } = E;
/** Questão "Praticando": enunciado + alternativas com resolução. */
const pratique = (titulo, enun, opts, a, sol, nota = '', cls = 'primary') => sl('Praticando', titulo, `
          ${lede(enun)}
          ${mini('Escolha a alternativa:', opts, a, sol)}
          ${nota ? `<p class="hint" style="margin-top:6px;">${nota}</p>` : ''}`, { cls });
/** Questão no estilo SAEB/ENEM (original) dentro do deck. */
const estiloEnem = (titulo, enun, opts, a, sol, cls = 'growth') => sl('Estilo SAEB', titulo, `
          ${lede(enun)}
          ${mini('Escolha a alternativa:', opts, a, sol)}
          <p class="hint" style="margin-top:6px;">Questão original, no formato do SAEB/ENEM.</p>`, { cls });

module.exports = Object.assign({}, E, { BASE, SERIE, deck, writeP, FONTE, fechamento, pratique, estiloEnem });
