// Montador compacto das aulas do Fundamental (6º–9º ano): cada aula é um objeto curto; este módulo expande para o padrão de 16 slides.
//   modulo({ ano:'6° Ano', tri:1, pasta:'reta-numerica', titulo, accent, icon, key, aulas:[ aula… ] })  → { meta, pages }
// aula = { t, sub, cor?, o:[3 objetivos], d:'dica', g:[título, texto, [pergunta, opções, índice, resolução]],
//          teo:[[eyebrow, título, [bullets], [título do cartão, html]] ×2], ex:[[título, enunciado, [[passo, detalhe]…], fecho] ×2],
//          p:[[enunciado, opções, índice, resolução] ×3], e:[título, enunciado, opções, índice, resolução],
//          c:[[título, texto] ×3], q:[[pergunta, opções, índice] ×4], s:[[título, texto] ×3], m? }
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas; em math, "{a|b}" só dentro de aspas simples.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const { linha, co } = require('./util.js');

const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);
const ICONES = ['target', 'bulb', 'scale', 'link', 'check', 'book'];
const AREA = { '6° Ano': 'Matemática · 6º ano', '7° Ano': 'Matemática · 7º ano', '8° Ano': 'Matemática · 8º ano', '9° Ano': 'Matemática · 9º ano' };
const PASTA = { '6° Ano': '6-ano', '7° Ano': '7-ano', '8° Ano': '8-ano', '9° Ano': '9-ano' };
const CORES = ['primary', 'growth', 'decay'];

function expande(a, i, todas, u) {
  const cor = a.cor || CORES[i % 3];
  const prox = todas[i + 1];
  const teo = a.teo.map(t => [t[0], t[1], g2(`<div>${checks(t[2])}</div>`, card(`<strong>${t[3][0]}</strong>${t[3][1]}`, cor))]);
  return {
    slug: slug(a.t), titulo: a.t,
    h1: a.h1 || `${co(cor)}${a.t.split(':')[0]}</span>${a.t.includes(':') ? ':' + a.t.split(':').slice(1).join(':') : ''}`,
    sub: a.sub, badges: a.b || teo.map((t, k) => [t[0].replace(/^Teoria · /, ''), CORES[k % 3]]).slice(0, 3), color: cor,
    roteiro: [a.rot || a.sub, teo.map((t, k) => [t[1], t[0].replace(/^Teoria · /, ''), ICONES[k % ICONES.length]]).concat([['Praticar', 'exercícios e quiz', 'target']])],
    objetivos: a.o, dica: a.d || 'Leia o enunciado com calma, escolha a estratégia e <strong>confira</strong> a resposta no final.',
    gancho: { titulo: a.g[0], texto: a.g[1], mini: a.g[2] },
    teoria: teo,
    exemplos: a.ex,
    pratique: a.p.map((p, k) => ['Questão ' + (k + 1), p[0], p[1], p[2], p[3]]),
    enem: a.e,
    cuidados: a.c,
    quiz: a.q.map(q => ({ q: q[0], o: q[1], a: q[2] })),
    sintese: a.s,
    msg: a.m || (prox ? 'Na próxima aula: ' + prox.t + '.' : 'Revise as questões que errou e siga para o próximo módulo.')
  };
}

function modulo(m) {
  return unidade({
    materia: 'matematica', ano: m.ano, tri: m.tri, pasta: 'aulas/' + PASTA[m.ano] + '/' + m.tri + '-tri/' + (m.pasta || slug(m.titulo)) + '/',
    titulo: m.titulo, accent: m.accent || 'primary', icon: m.icon || 'numbers', key: m.key, keyp: 'm' + PASTA[m.ano][0], area: AREA[m.ano],
    refs: m.refs || ['Aulas do plano de Matemática do ' + AREA[m.ano].split('· ')[1] + ' (RCO/NRE 2026), reescritas e ampliadas com problemas originais.', 'Exercícios e problemas originais (estilo SAEB); questões de provas oficiais só quando citadas.'],
    aulas: m.aulas.map((a, i) => expande(a, i, m.aulas, m))
  });
}
module.exports = { modulo, slug, K, g2, card, callout, tbl, checks, linha, co };
