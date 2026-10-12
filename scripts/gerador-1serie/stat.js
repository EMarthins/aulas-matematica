// Gráficos estatísticos estáticos (SVG) e funções de apoio para as unidades de Estatística da 1ª série
const K = require('./kit.js');
const { svg, ln, rect, ci, dot, tx, txu } = K;

const f1 = v => +v.toFixed(1);
const fmt = v => String(+v.toFixed(2)).replace('.', ',');
const CORES = ['var(--primary)', 'var(--growth)', 'var(--decay)', 'var(--success)', 'var(--danger)', 'var(--ink-soft)'];

/** Gráfico de barras verticais. cats: rótulos; vals: valores; opções: w, h, max, passo, titulo */
function barras({ cats, vals, w = 360, h = 190, max, passo, cor = 'var(--primary)', rotulos = true, maxw }) {
  const L = 36, R = 10, T = 14, B = 34, m = max || Math.ceil(Math.max(...vals) * 1.15), ps = passo || (m <= 10 ? 1 : m <= 20 ? 2 : m <= 50 ? 5 : m <= 100 ? 10 : m <= 200 ? 20 : m <= 500 ? 50 : 100);
  const Y = v => f1(h - B - v / m * (h - T - B)), n = cats.length, bw = (w - L - R) / n * 0.62, gap = (w - L - R) / n;
  let s = '';
  for (let v = 0; v <= m + 1e-9; v += ps) s += ln(L, Y(v), w - R, Y(v), 'var(--line)', 1) + txu(L - 5, Y(v) + 4, String(+v.toFixed(2)).replace('.', ','), 'var(--ink-faint)', 10, 'end');
  s += ln(L, Y(0), w - R, Y(0), 'var(--ink-soft)', 1.6) + ln(L, Y(0), L, Y(m), 'var(--ink-soft)', 1.6);
  cats.forEach((c, i) => {
    const x = L + gap * i + (gap - bw) / 2, y = Y(vals[i]);
    s += rect(f1(x), y, f1(bw), f1(Y(0) - y), cor, 'none', 0, 2) + txu(f1(x + bw / 2), Y(0) + 15, c, 'var(--ink)', 11);
    if (rotulos) s += txu(f1(x + bw / 2), y - 5, fmt(vals[i]), 'var(--ink)', 11);
  });
  return svg(w, h, s, maxw || w + 'px');
}

/** Gráfico de setores. fatias: [[rótulo, valor]]. Mostra o percentual dentro/fora de cada fatia. */
function setores({ fatias, w = 300, h = 190, maxw }) {
  const total = fatias.reduce((s, f) => s + f[1], 0), cx = 100, cy = h / 2, r = 70;
  let ang = -Math.PI / 2, s = '';
  fatias.forEach((f, i) => {
    const a2 = ang + f[1] / total * 2 * Math.PI, large = a2 - ang > Math.PI ? 1 : 0, cor = CORES[i % CORES.length];
    const x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    s += fatias.length === 1 ? ci(cx, cy, r, cor, 'var(--surface)', 2) : `<path d="M${cx},${cy} L${f1(x1)},${f1(y1)} A${r},${r} 0 ${large} 1 ${f1(x2)},${f1(y2)} Z" fill="${cor}" stroke="var(--surface)" stroke-width="2"/>`;
    const am = (ang + a2) / 2;
    if (f[1] / total > 0.06) s += txu(f1(cx + r * 0.62 * Math.cos(am)), f1(cy + r * 0.62 * Math.sin(am) + 4), Math.round(f[1] / total * 100) + '%', '#fff', 12);
    s += rect(190, 30 + i * 22, 12, 12, cor, 'none', 0, 2) + `<text x="208" y="${40 + i * 22}" font-size="12" fill="var(--ink)" font-family="Archivo, sans-serif" font-weight="700">${f[0]} (${fmt(f[1])})</text>`;
    ang = a2;
  });
  return svg(w + 90, h, s, maxw || (w + 90) + 'px');
}

/** Gráfico de linhas (série temporal). xs: rótulos; ys: valores */
function linhas({ xs, ys, w = 360, h = 190, max, min = 0, passo, maxw }) {
  const L = 38, R = 14, T = 14, B = 30, m = max || Math.ceil(Math.max(...ys) * 1.15), ps = passo || (m <= 10 ? 1 : m <= 20 ? 2 : m <= 50 ? 5 : m <= 100 ? 10 : m <= 200 ? 20 : 50);
  const Y = v => f1(h - B - (v - min) / (m - min) * (h - T - B)), X = i => f1(L + (w - L - R) * (xs.length === 1 ? 0.5 : i / (xs.length - 1)));
  let s = '';
  for (let v = min; v <= m + 1e-9; v += ps) s += ln(L, Y(v), w - R, Y(v), 'var(--line)', 1) + txu(L - 5, Y(v) + 4, String(+v.toFixed(2)).replace('.', ','), 'var(--ink-faint)', 10, 'end');
  s += ln(L, Y(min), w - R, Y(min), 'var(--ink-soft)', 1.6) + ln(L, Y(min), L, Y(m), 'var(--ink-soft)', 1.6);
  s += `<polyline points="${ys.map((v, i) => X(i) + ',' + Y(v)).join(' ')}" fill="none" stroke="var(--primary)" stroke-width="2.8" stroke-linejoin="round"/>`;
  ys.forEach((v, i) => { s += dot(X(i), Y(v), 'var(--decay)', 4) + txu(X(i), Y(min) + 15, xs[i], 'var(--ink)', 11); });
  return svg(w, h, s, maxw || w + 'px');
}

/** Histograma. classes: [[inicio, fim, freq]] (classes contíguas de mesma amplitude) */
function histograma({ classes, w = 360, h = 190, max, passo, maxw }) {
  const L = 36, R = 10, T = 14, B = 34, fm = max || Math.ceil(Math.max(...classes.map(c => c[2])) * 1.15), ps = passo || (fm <= 10 ? 1 : fm <= 20 ? 2 : fm <= 50 ? 5 : fm <= 100 ? 10 : 20);
  const x0 = classes[0][0], x1 = classes[classes.length - 1][1], X = v => f1(L + (v - x0) / (x1 - x0) * (w - L - R)), Y = v => f1(h - B - v / fm * (h - T - B));
  let s = '';
  for (let v = 0; v <= fm + 1e-9; v += ps) s += ln(L, Y(v), w - R, Y(v), 'var(--line)', 1) + txu(L - 5, Y(v) + 4, String(v), 'var(--ink-faint)', 10, 'end');
  classes.forEach(c => { s += rect(X(c[0]), Y(c[2]), f1(X(c[1]) - X(c[0])), f1(Y(0) - Y(c[2])), 'var(--primary-soft)', 'var(--primary)', 2, 0) + txu(f1((X(c[0]) + X(c[1])) / 2), Y(c[2]) - 5, String(c[2]), 'var(--ink)', 11); });
  const eixos = [...classes.map(c => c[0]), classes[classes.length - 1][1]];
  eixos.forEach(v => { s += txu(X(v), Y(0) + 15, String(v), 'var(--ink-soft)', 10); });
  s += ln(L, Y(0), w - R, Y(0), 'var(--ink-soft)', 1.6) + ln(L, Y(0), L, Y(fm), 'var(--ink-soft)', 1.6);
  return svg(w, h, s, maxw || w + 'px');
}

/** Box-plot horizontal. cinco: {min, q1, med, q3, max, out: []}; escala: [a, b] */
function boxplot({ min, q1, med, q3, max, out = [], escala, w = 360, h = 120, rotulos = true, maxw }) {
  const L = 20, R = 20, a = escala[0], b = escala[1], X = v => f1(L + (v - a) / (b - a) * (w - L - R)), y = 52;
  let s = ln(L, 96, w - R, 96, 'var(--ink-soft)', 1.6);
  const t = Math.max(1, Math.round((b - a) / 10));
  for (let v = Math.ceil(a / t) * t; v <= b; v += t) s += ln(X(v), 92, X(v), 100, 'var(--ink-soft)', 1.4) + txu(X(v), 112, String(v), 'var(--ink-faint)', 10);
  s += ln(X(min), y, X(q1), y, 'var(--ink)', 2.4) + ln(X(q3), y, X(max), y, 'var(--ink)', 2.4) + ln(X(min), y - 10, X(min), y + 10, 'var(--ink)', 2.4) + ln(X(max), y - 10, X(max), y + 10, 'var(--ink)', 2.4);
  s += rect(X(q1), y - 18, f1(X(q3) - X(q1)), 36, 'var(--primary-soft)', 'var(--primary)', 2.4, 2) + ln(X(med), y - 18, X(med), y + 18, 'var(--decay)', 3.2);
  out.forEach(v => { s += ci(X(v), y, 4.5, 'var(--surface)', 'var(--danger)', 2); });
  if (rotulos) { [[min, 'mín'], [q1, 'Q1'], [med, 'Q2'], [q3, 'Q3'], [max, 'máx']].forEach(([v, r], i) => { s += txu(X(v), y - 26 - (i % 2) * 0, r, 'var(--ink)', 11); }); }
  return svg(w, h, s, maxw || w + 'px');
}

/** Média, mediana, moda e quartis (método “mediana das metades”) */
function resumo(dados) {
  const d = [...dados].sort((x, y) => x - y), n = d.length, med = a => { const k = a.length; return k % 2 ? a[(k - 1) / 2] : (a[k / 2 - 1] + a[k / 2]) / 2; };
  const metade = Math.floor(n / 2), baixa = d.slice(0, metade), alta = d.slice(n % 2 ? metade + 1 : metade);
  const freq = {}; d.forEach(v => { freq[v] = (freq[v] || 0) + 1; }); const mf = Math.max(...Object.values(freq)), moda = Object.keys(freq).filter(k => freq[k] === mf).map(Number);
  return { rol: d, n, media: d.reduce((s, v) => s + v, 0) / n, mediana: med(d), moda: mf === 1 ? [] : moda, q1: med(baixa), q3: med(alta), min: d[0], max: d[n - 1] };
}

module.exports = { barras, setores, linhas, histograma, boxplot, resumo, fmt, CORES };
