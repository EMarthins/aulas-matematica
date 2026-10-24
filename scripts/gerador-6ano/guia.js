// Guia visual (infográfico de 1 página) de um módulo de Matemática 6º–9º, montado a partir da própria especificação das aulas.
// Usa o mesmo visual dos guias existentes (gerador-ef/lib.js → info/sec). Chamado por lib.js (modulo) — não rode isoladamente.
const K = require('../gerador-ena/kit.js');
const { G } = K;
const L = require('../gerador-ef/lib.js');

// texto "simples" (tira marcação HTML) com limite de tamanho, sem cortar no meio de um $…$
const plano = (s, max = 160) => {
  let t = String(s).replace(/<\/?(strong|em|b|i|u|span|br|p|div|small|sub|sup|code)(\s[^>]*)?>/g, ' ').replace(/ +([.,;:!?)])/g, '$1').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  let c = t.slice(0, max); const n = (c.match(/\$/g) || []).length;
  if (n % 2) c = c.slice(0, c.lastIndexOf('$'));
  return c.replace(/[\s,;:.]+$/, '') + '…';
};
const CURVAS = [
  ['M20,160 C 120,150 200,120 280,90 C 360,60 420,40 480,24', 'primary'],
  ['M20,150 C 100,150 160,110 240,80 C 320,52 400,34 480,22', 'growth'],
  ['M20,40 C 120,60 200,120 280,140 C 360,156 420,160 480,164', 'decay'],
  ['M20,150 C 90,120 150,60 240,90 C 330,120 400,50 480,30', 'success']
];
const ICONES_SEC = ['target', 'bulb', 'check', 'chart', 'scale', 'link'];

function guia(m, ctx) {
  const A = m.aulas, n = A.length;
  const cor = ['primary', 'growth', 'decay', 'success'].includes(m.accent) ? m.accent : 'primary';
  const curva = CURVAS[(m.key || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0) % CURVAS.length][0];
  const ti = m.titulo, dois = ti.indexOf(':');
  const palavras = ti.split(' ');
  const h1 = dois > 0 ? `${ti.slice(0, dois)}: <span>${ti.slice(dois + 1).trim()}</span>`
    : palavras.length > 2 ? `${palavras.slice(0, -2).join(' ')} <span>${palavras.slice(-2).join(' ')}</span>` : `<span>${ti}</span>`;

  const sections = [];
  // 1) mapa do módulo
  sections.push(['Mapa do módulo', `${n} ${n === 1 ? 'aula' : 'aulas'} em sequência`, 'target', cor,
    G.steps(A.map(a => { const s = plano(a.sub, 400), curta = s.length <= 105 ? s : s.slice(0, 105).replace(/[^.]*$/, '') || ''; if ((curta.match(/\$/g) || []).length % 2) curta = ''; return `<span><strong>${plano(a.t, 90)}</strong>${curta ? ' — ' + curta : ''}</span>`; }))]);
  // 2) regras-chave (dica de cada aula)
  const regras = A.map(a => a.d).filter(Boolean).slice(0, 7);
  sections.push(['Regras-chave', 'O que não pode esquecer', 'bulb', 'growth', G.li(regras.map(r => plano(r, 190)))]);
  // 3) passo a passo — teoria da 1ª aula
  const t0 = (A[0].teo && A[0].teo[0]) || null;
  if (t0) sections.push(['Ideia central', plano(t0[1], 60), 'check', 'success', G.li((t0[2] || []).slice(0, 5).map(x => plano(x, 150)))]);
  // 4) exemplo resolvido: primeira aula e aula do meio
  const ex1 = A[0].ex && A[0].ex[0], mid = A[Math.floor(n / 2)], ex2 = mid && mid.ex && mid.ex[0];
  const exs = [ex1, n > 1 ? ex2 : (A[0].ex && A[0].ex[1])].filter(Boolean);
  sections.push(['Exemplos', 'Resolvidos passo a passo', 'chart', 'decay',
    exs.map(e => G.call(plano(e[0], 60), `${plano(e[1], 170)}<br><strong>Resposta:</strong> ${plano(e[3] || (e[2][e[2].length - 1] || [])[1] || '', 110)}`, 'success')).join('\n')]);
  // 5) quadro-resumo: primeira tabela encontrada na teoria
  let tabela = '';
  for (const a of A) { for (const t of (a.teo || [])) { const mt = String((t[3] && t[3][1]) || '').match(/<table[\s\S]*?<\/table>/); if (mt) { tabela = mt[0]; break; } } if (tabela) break; }
  if (tabela) sections.push(['Quadro-resumo', 'Para consultar rápido', 'scale', 'primary', '      ' + tabela]);
  // 6) objetivos
  const objs = [].concat(...A.map(a => (a.o || []).slice(0, 1))).slice(0, 6);
  sections.push(['Você vai aprender a', 'Objetivos do módulo', 'link', 'growth', G.li(objs.map(o => plano(o, 120)))]);

  // largas: armadilhas e síntese
  const vistos = new Set(), armas = [];
  for (const a of A) for (const c of (a.c || [])) { const k = c[0]; if (!vistos.has(k)) { vistos.add(k); armas.push(`<strong>${plano(c[0], 70)}:</strong> ${plano(c[1], 100)}`); } }
  const wide = [];
  if (armas.length) wide.push(['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', G.wl(armas.slice(0, 8))]);
  const sint = []; const vs = new Set();
  for (const a of A) for (const s of (a.s || [])) { if (!vs.has(s[0])) { vs.add(s[0]); sint.push(`<strong>${plano(s[0], 50)}.</strong> ${plano(s[1], 100)}`); } }
  if (sint.length) wide.push(['Para levar', 'Resumo em poucas linhas', 'check', 'success', G.li(sint.slice(0, 8))]);

  const S = x => L.sec(x[0], x[1], x[2], x[4], x[3]);
  const W = x => L.wideSec(x[0], x[1], x[2], x[4], x[3]);
  const html = K.info({
    title: 'Guia visual — ' + ti + ' (' + ctx.area + ')', brand: ti, key: m.key + '-g', keyp: ctx.keyp, aulas: n + (n === 1 ? ' aula' : ' aulas'), color: cor,
    eyebrowTop: ctx.area + ' · ' + m.tri + 'º trimestre · guia visual', footerTop: ctx.area + ' · ' + m.tri + 'º trimestre · ' + ti,
    h1, lede: `${plano(A[0].sub, 170)} Neste guia: o mapa das aulas, as regras-chave, exemplos resolvidos e as armadilhas mais comuns.`,
    badges: [`${n} ${n === 1 ? 'aula' : 'aulas'}`, ctx.ano, `${m.tri}º trimestre`, 'revisão rápida'], curve: curva,
    sections: sections.map(S), wide: wide.map(W),
    fontes: 'Aulas do módulo (plano de Matemática RCO/NRE 2026) · exercícios e exemplos originais'
  });
  return { out: ctx.pasta + 'infografico.html', html };
}
module.exports = { guia };
