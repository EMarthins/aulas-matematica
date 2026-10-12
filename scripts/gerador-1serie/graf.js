// Figuras de gráfico (SVG estático) e JS de plano cartesiano compartilhados pelas unidades da 1ª série
const K = require('./kit.js');
const { svg, ln, ci, tx, txu, dot } = K;
// ---------- figuras estáticas ----------
// series: [{ pts:[[x,y],...], abertos:[índices], cor }]
function graf({ w = 320, h = 190, xmin, xmax, ymin, ymax, px = 1, py = 1, series = [], rot = true, marcas = [], max = '' }) {
  const L = rot ? 36 : 10, R = 12, T = 12, B = rot ? 26 : 10;
  const X = x => +(L + (x - xmin) / (xmax - xmin) * (w - L - R)).toFixed(1), Y = y => +(h - B - (y - ymin) / (ymax - ymin) * (h - T - B)).toFixed(1);
  const x0 = xmin <= 0 && xmax >= 0 ? 0 : xmin, y0 = ymin <= 0 && ymax >= 0 ? 0 : ymin;
  let s = '';
  const nx = Math.floor((xmax - Math.ceil(xmin / px) * px) / px + 1e-9);
  for (let i = 0; i <= nx; i++) { const x = Math.ceil(xmin / px) * px + i * px; s += ln(X(x), Y(ymin), X(x), Y(ymax), 'var(--line)', 1); if (rot && Math.abs(x - x0) > 1e-9) s += txu(X(x), Y(y0) + 14, String(x).replace('-', '−'), 'var(--ink-faint)', 10); }
  const ny = Math.floor((ymax - Math.ceil(ymin / py) * py) / py + 1e-9);
  for (let i = 0; i <= ny; i++) { const y = Math.ceil(ymin / py) * py + i * py; s += ln(X(xmin), Y(y), X(xmax), Y(y), 'var(--line)', 1); if (rot && Math.abs(y - y0) > 1e-9) s += txu(X(x0) - 5, Y(y) + 4, String(y).replace('-', '−'), 'var(--ink-faint)', 10, 'end'); }
  s += ln(X(xmin), Y(y0), X(xmax), Y(y0), 'var(--ink-soft)', 1.6) + ln(X(x0), Y(ymin), X(x0), Y(ymax), 'var(--ink-soft)', 1.6);
  if (rot) s += tx(X(xmax) - 2, Y(y0) - 6, 'x', 'var(--ink-soft)', 13, 'end') + tx(X(x0) + 10, Y(ymax) + 10, 'y', 'var(--ink-soft)', 13, 'start');
  series.forEach(se => {
    const cor = se.cor || 'var(--primary)';
    s += `<polyline points="${se.pts.map(q => X(q[0]) + ',' + Y(q[1])).join(' ')}" fill="none" stroke="${cor}" stroke-width="${rot ? 3 : 2.6}" stroke-linejoin="round" stroke-linecap="round"${se.tracejado ? ' stroke-dasharray="6 5"' : ''}/>`;
    (se.bolas || []).forEach(([i, ab]) => { const q = se.pts[i]; s += ab ? ci(X(q[0]), Y(q[1]), 5, 'var(--surface)', cor, 2.4) : dot(X(q[0]), Y(q[1]), cor, 5); });
  });
  marcas.forEach(([x, y, t, dx = 8, dy = -8]) => { s += dot(X(x), Y(y), 'var(--decay)', 4.5) + txu(X(x) + dx, Y(y) + dy, t, 'var(--decay)', 12, dx < 0 ? 'end' : 'start'); });
  return svg(w, h, s, max || w + 'px');
}
const amostra = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return [x, f(x)]; });
const mg = (pts, ex = {}) => graf({ w: 130, h: 66, ...ex, series: [{ pts }] });   // gráfico compacto para alternativas
const mg2 = (pts, ex = {}) => mg(pts, { w: 104, h: 50, ...ex });
const MINI = { rot: false };

const PL = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function plano2(svg, xmin, xmax, ymin, ymax, W, H, px, py){
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var L = 38, R = 12, T = 12, B = 26;
    var sx = function(x){ return L + (x - xmin) / (xmax - xmin) * (W - L - R); }, sy = function(y){ return H - B - (y - ymin) / (ymax - ymin) * (H - T - B); };
    var x0 = (xmin <= 0 && xmax >= 0) ? 0 : xmin, y0 = (ymin <= 0 && ymax >= 0) ? 0 : ymin, i, v, t;
    var ax = Math.ceil(xmin / px - 1e-9), nx = Math.floor(xmax / px + 1e-9);
    for(i = ax; i <= nx; i++){ v = i * px; el('line', {x1: sx(v), y1: sy(ymin), x2: sx(v), y2: sy(ymax), stroke: 'var(--line)', 'stroke-width': 1}, svg); if(Math.abs(v - x0) > 1e-9){ t = el('text', {x: sx(v), y: sy(y0) + 14, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = pt(v, 2); } }
    var ay = Math.ceil(ymin / py - 1e-9), ny = Math.floor(ymax / py + 1e-9);
    for(i = ay; i <= ny; i++){ v = i * py; el('line', {x1: sx(xmin), y1: sy(v), x2: sx(xmax), y2: sy(v), stroke: 'var(--line)', 'stroke-width': 1}, svg); if(Math.abs(v - y0) > 1e-9){ t = el('text', {x: sx(x0) - 5, y: sy(v) + 4, 'text-anchor': 'end', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = pt(v, 2); } }
    el('line', {x1: sx(xmin), y1: sy(y0), x2: sx(xmax), y2: sy(y0), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    el('line', {x1: sx(x0), y1: sy(ymin), x2: sx(x0), y2: sy(ymax), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    return {sx: sx, sy: sy};
  }
  function linha(svg, P, pts, cor){ el('polyline', {points: pts.map(function(q){ return P.sx(q[0]).toFixed(1) + ',' + P.sy(q[1]).toFixed(1); }).join(' '), fill: 'none', stroke: cor || 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round'}, svg); }
  function bola(svg, P, x, y, aberta, cor){ el('circle', {cx: P.sx(x), cy: P.sy(y), r: 5, fill: aberta ? 'var(--surface)' : (cor || 'var(--decay)'), stroke: cor || 'var(--decay)', 'stroke-width': 2.4}, svg); }
`;

module.exports = { graf, amostra, mg, mg2, MINI, PL };
