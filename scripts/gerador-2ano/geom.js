// Figuras planas (SVG estático, lado Node) e JS de página para os decks de área e polígonos da Matemática · 2ª série (2º tri).
// uso:  const G2 = require('./geom.js');   G2.plot([...], [...], { w, h })   e   G2.GJS  dentro do `extra` do deck.
const K = require('./kit.js');
const { svg, ln, pg, tx, txu } = K;
const f1 = v => +(+v).toFixed(1);

/** Desenha polígonos em coordenadas "do mundo" (y para cima), ajustando a escala à caixa w × h.
 *  polys: [{ pts:[[x,y],...], fill, stroke, dash, w }]   guias: [{ de:[x,y], para:[x,y], cor, dash }]
 *  rot: [[x, y, texto, cor, âncora, dx, dy]]   opts: { w, h, pad, max, grade:{ passo } } */
function plot(polys, rot = [], opts = {}, guias = []) {
  const w = opts.w || 300, h = opts.h || 190, pad = opts.pad == null ? 28 : opts.pad;
  const todos = polys.flatMap(p => p.pts);
  const xs = todos.map(p => p[0]), ys = todos.map(p => p[1]);
  const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
  const k = Math.min((w - 2 * pad) / ((maxx - minx) || 1), (h - 2 * pad) / ((maxy - miny) || 1));
  const ox = (w - (maxx - minx) * k) / 2 - minx * k, oy = (h + (maxy - miny) * k) / 2 + miny * k;
  const X = x => f1(ox + x * k), Y = y => f1(oy - y * k);
  let s = '';
  if (opts.grade) { const st = opts.grade; for (let x = Math.ceil(minx / st) * st; x <= maxx + 1e-9; x += st) s += ln(X(x), Y(miny), X(x), Y(maxy), 'var(--line)', 1); for (let y = Math.ceil(miny / st) * st; y <= maxy + 1e-9; y += st) s += ln(X(minx), Y(y), X(maxx), Y(y), 'var(--line)', 1); }
  polys.forEach(p => { s += pg(p.pts.map(q => [X(q[0]), Y(q[1])]), p.fill || 'var(--primary-soft)', p.stroke || 'var(--primary)', p.w || 2.4); });
  guias.forEach(g => { s += ln(X(g.de[0]), Y(g.de[1]), X(g.para[0]), Y(g.para[1]), g.cor || 'var(--growth)', 1.8, g.dash === false ? '' : 'stroke-dasharray="5 4"'); });
  rot.forEach(([x, y, t, cor, anc, dx = 0, dy = 0]) => { s += txu(f1(X(x) + dx), f1(Y(y) + dy), t, cor || 'var(--decay)', 12, anc || 'middle'); });
  return svg(w, h, s, opts.max || w + 'px');
}
const marca = (x, y, dx = 11) => ''; // reservado

/** Retângulo b × h com rótulos. */
const retangulo = (b, h, rb = 'b', rh = 'h', o = {}) => plot([{ pts: [[0, 0], [b, 0], [b, h], [0, h]] }], [[b / 2, 0, rb, null, 'middle', 0, 16], [b, h / 2, rh, null, 'start', 8, 4]], { w: 260, h: 160, ...o });
/** Paralelogramo com base b, altura h e inclinação s (deslocamento horizontal). */
const paralelogramo = (b, h, s, o = {}) => plot([{ pts: [[0, 0], [b, 0], [b + s, h], [s, h]] }], [[b / 2, 0, 'b', null, 'middle', 0, 16], [s + 0.1, h / 2, 'h', 'var(--growth)', 'start', 6, 4]], { w: 280, h: 160, ...o }, [{ de: [s, h], para: [s, 0] }]);
/** Triângulo de base b e altura h (vértice superior em xa). */
const triangulo = (b, h, xa = null, o = {}) => { const x = xa == null ? b / 2 : xa; return plot([{ pts: [[0, 0], [b, 0], [x, h]] }], [[b / 2, 0, 'b', null, 'middle', 0, 16], [x, h / 2, 'h', 'var(--growth)', 'start', 6, 4]], { w: 270, h: 160, ...o }, [{ de: [x, h], para: [x, 0] }]); };
/** Trapézio de bases B (embaixo) e b (em cima) e altura h, simétrico. */
const trapezio = (B, bb, h, o = {}) => { const d = (B - bb) / 2; return plot([{ pts: [[0, 0], [B, 0], [B - d, h], [d, h]] }], [[B / 2, 0, 'B', null, 'middle', 0, 16], [B / 2, h, 'b', null, 'middle', 0, -8], [d, h / 2, 'h', 'var(--growth)', 'start', 8, 4]], { w: 290, h: 160, ...o }, [{ de: [d, h], para: [d, 0] }]); };
/** Losango de diagonais D (horizontal) e d (vertical). */
const losango = (D, d, o = {}) => plot([{ pts: [[0, d / 2], [D / 2, 0], [D, d / 2], [D / 2, d]] }], [[D / 2, d / 2, 'D', null, 'middle', 0, -5], [D / 2 + 0.2, d * 0.78, 'd', 'var(--growth)', 'start', 6, 0]], { w: 270, h: 170, ...o }, [{ de: [0, d / 2], para: [D, d / 2] }, { de: [D / 2, 0], para: [D / 2, d] }]);

/** Malha quadriculada com um polígono (coordenadas inteiras); marca com ● os cantos. */
function malha(pts, o = {}) {
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), W = Math.max(...xs), H = Math.max(...ys), c = o.c || 22, pad = 14;
  const w = W * c + 2 * pad, h = H * c + 2 * pad, X = x => pad + x * c, Y = y => h - pad - y * c;
  let s = '';
  for (let x = 0; x <= W; x++) s += ln(X(x), Y(0), X(x), Y(H), 'var(--line)', 1);
  for (let y = 0; y <= H; y++) s += ln(X(0), Y(y), X(W), Y(y), 'var(--line)', 1);
  s += pg(pts.map(p => [X(p[0]), Y(p[1])]), 'var(--primary-soft)', 'var(--primary)', 2.6);
  pts.forEach(p => { s += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3.4" fill="var(--growth)"/>`; });
  return svg(w, h, s, o.max || w + 'px');
}

// ---------------------------------------------------------------- JS de página ----------------------------------------------------------------
const GJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
  function polS(svg, pts, rot){ // pts em coordenadas do mundo (y para cima); ajusta escala à caixa
    var W = 340, H = 200, pad = 34; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var xs = pts.map(function(p){ return p[0]; }), ys = pts.map(function(p){ return p[1]; }), mx = Math.max.apply(null, xs), my = Math.max.apply(null, ys), mnx = Math.min.apply(null, xs), mny = Math.min.apply(null, ys);
    var k = Math.min((W - 2 * pad) / ((mx - mnx) || 1), (H - 2 * pad) / ((my - mny) || 1)), ox = (W - (mx - mnx) * k) / 2 - mnx * k, oy = (H + (my - mny) * k) / 2 + mny * k;
    var X = function(x){ return ox + x * k; }, Y = function(y){ return oy - y * k; };
    el('polygon', {points: pts.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4, 'stroke-linejoin': 'round'}, svg);
    (rot || []).forEach(function(r){ var t = el('text', {x: X(r[0]) + (r[3] || 0), y: Y(r[1]) + (r[4] || 0), fill: r[5] || 'var(--decay)', 'font-size': 12, 'font-weight': 700, 'text-anchor': r[6] || 'middle'}, svg); t.textContent = r[2]; });
    return {X: X, Y: Y};
  }
  function guiaS(svg, P, x1, y1, x2, y2){ el('line', {x1: P.X(x1), y1: P.Y(y1), x2: P.X(x2), y2: P.Y(y2), stroke: 'var(--growth)', 'stroke-width': 1.8, 'stroke-dasharray': '5 4'}, svg); }
`;

module.exports = { plot, retangulo, paralelogramo, triangulo, trapezio, losango, malha, GJS };
