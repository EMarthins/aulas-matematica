// JS compartilhado (para os widgets) das unidades de função quadrática da 2ª série: formatação, escala e parábola em SVG
const QJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'y = ' + s; }
  function parabola(svg, f, xmin, xmax, ymin, ymax){ var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, passo(xmax - xmin), passo(ymax - ymin)), pts = []; for(var i = 0; i <= 120; i++){ var x = xmin + (xmax - xmin) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts); return P; }
  // janela que mostra vértice, zeros e corte em y
  function janela(a, b, c){ var xv = -b / (2 * a), d = b * b - 4 * a * c, w = 4; if(d > 0) w = Math.max(w, Math.sqrt(d) / Math.abs(2 * a) + 2); w = Math.max(w, Math.abs(xv) + 2);
    var f = function(x){ return a * x * x + b * x + c; }, xmin = xv - w, xmax = xv + w, ys = [f(xmin), f(xmax), f(xv), 0, c], ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys), pd = (ymax - ymin) * 0.12 + 1;
    return {f: f, xmin: xmin, xmax: xmax, ymin: ymin - pd, ymax: ymax + pd}; }
`;
module.exports = { QJS };
