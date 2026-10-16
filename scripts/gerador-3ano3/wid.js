// Widgets da Matemática · 3ª série · 3º trimestre (somas de PA e PG, triângulo retângulo, circunferência trigonométrica, funções trigonométricas).
// Cada função recebe um prefixo de id e devolve { html, js }. O js roda dentro do deck, com $, el, nf, bind, plano, curva, ponto (do kit). Sem barras invertidas.
const K = require('../gerador-9ano/kit.js');
const { W } = K;

// soma dos n primeiros termos de uma PA ou de uma PG
const somas = id => ({
  html: W.box('Soma dos n primeiros termos',
    W.row(W.sel(id + 'o', 'Tipo', ['PA (soma r a cada termo)', 'PG (multiplica por q a cada termo)']), W.nm(id + 'a', 'Primeiro termo a₁', 2, 1, 'min="-20" max="20"'), W.nm(id + 'r', 'r (PA) ou q (PG)', 3, 0.5, 'min="-5" max="5"'), W.rg(id + 'n', 'Quantidade de termos n', 2, 12, 1, 8)) +
    W.svg(id + 's', '0 0 560 240', '560px') + W.txt(id + 't', 'S = ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}o', '${id}a', '${id}r', '${id}n'], function(){
    var pg = $('${id}o').value === '1', a = +$('${id}a').value, r = +$('${id}r').value, n = +$('${id}n').value, svg = $('${id}s'), t = [], v = a, S = 0, i;
    $('${id}nv').textContent = n;
    for(i = 1; i <= n; i++){ t.push(v); S += v; v = pg ? v * r : v + r; }
    var an = t[n - 1], max = 0; t.forEach(function(x){ max = Math.max(max, Math.abs(x)); }); if(max === 0) max = 1;
    svg.innerHTML = '';
    var w = 500 / n, base = 190, esc = 150 / max;
    el('line', {x1: 30, y1: base, x2: 540, y2: base, stroke: 'var(--ink-soft)', 'stroke-width': 1.5}, svg);
    t.forEach(function(x, k){ var h = Math.abs(x) * esc, y = x >= 0 ? base - h : base; el('rect', {x: 35 + k * w, y: y, width: Math.max(4, w - 6), height: Math.max(1, h), rx: 3, fill: x >= 0 ? 'var(--primary)' : 'var(--decay)', opacity: .85}, svg); var tx = el('text', {x: 35 + k * w + (w - 6) / 2, y: x >= 0 ? y - 4 : y + h + 12, 'font-size': 10, 'text-anchor': 'middle', fill: 'var(--ink-soft)'}, svg); tx.textContent = nf(x, 2); });
    var formula = pg ? (r === 1 ? n * a : a * (Math.pow(r, n) - 1) / (r - 1)) : n * (a + an) / 2;
    $('${id}t').textContent = 'a_n = ' + nf(an, 3) + '   ·   S_n = ' + nf(formula, 3) + (Math.abs(formula - S) < 1e-6 ? '   (confere com a soma dos termos: ' + nf(S, 3) + ')' : '');
    $('${id}h').textContent = pg ? 'Soma da PG: S_n = a₁ · (qⁿ − 1) ÷ (q − 1), para q ≠ 1.' + (Math.abs(r) < 1 ? ' Como |q| < 1, a soma infinita existe e vale a₁ ÷ (1 − q) = ' + nf(a / (1 - r), 3) + '.' : '') : 'Soma da PA: S_n = n · (a₁ + aₙ) ÷ 2 (média do primeiro e do último, vezes n).';
  });`
});

// triângulo retângulo com ângulo θ e hipotenusa fixa
const triret = id => ({
  html: W.box('Triângulo retângulo: seno, cosseno e tangente',
    W.rg(id + 'a', 'Ângulo θ (graus)', 5, 85, 1, 30) + W.nm(id + 'h', 'Hipotenusa', 10, 1, 'min="1" max="30"') + W.svg(id + 's', '0 0 360 220', '360px') + W.txt(id + 't', '') + W.hint(id + 'h2')),
  js: String.raw`
  bind(['${id}a', '${id}h'], function(){
    var g = +$('${id}a').value, H = Math.max(1, +$('${id}h').value), th = g * Math.PI / 180, svg = $('${id}s');
    $('${id}av').textContent = g;
    var co = H * Math.sin(th), ca = H * Math.cos(th), esc = 160 / Math.max(H, 1) * 1, X0 = 30, Y0 = 190;
    svg.innerHTML = '';
    var x1 = X0 + ca * esc, y1 = Y0 - co * esc;
    el('polygon', {points: X0 + ',' + Y0 + ' ' + (X0 + ca * esc) + ',' + Y0 + ' ' + x1 + ',' + y1, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round'}, svg);
    el('rect', {x: X0 + ca * esc - 12, y: Y0 - 12, width: 12, height: 12, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 1.5}, svg);
    function T(x, y, s, c){ var t = el('text', {x: x, y: y, 'font-size': 12, fill: c || 'var(--ink)', 'font-weight': 700}, svg); t.textContent = s; }
    T(X0 + 36, Y0 - 6, 'θ = ' + g + '°', 'var(--growth)');
    T(X0 + ca * esc / 2 - 20, Y0 + 16, 'adjacente ' + nf(ca, 2));
    T(x1 + 6, (Y0 + y1) / 2, 'oposto ' + nf(co, 2), 'var(--decay)');
    T((X0 + x1) / 2 - 40, (Y0 + y1) / 2 - 8, 'hipotenusa ' + nf(H, 2));
    $('${id}t').textContent = 'sen θ = ' + nf(Math.sin(th), 4) + '   ·   cos θ = ' + nf(Math.cos(th), 4) + '   ·   tg θ = ' + nf(Math.tan(th), 4);
    $('${id}h2').textContent = 'sen = oposto ÷ hipotenusa = ' + nf(co, 2) + ' ÷ ' + nf(H, 2) + ';  cos = adjacente ÷ hipotenusa;  tg = oposto ÷ adjacente. As razões só dependem do ângulo, não do tamanho do triângulo.';
  });`
});

// circunferência trigonométrica
const ciclo = id => ({
  html: W.box('Circunferência trigonométrica',
    W.rg(id + 'a', 'Arco x (graus)', 0, 360, 5, 50) + W.svg(id + 's', '0 0 360 300', '340px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}a'], function(){
    var g = +$('${id}a').value, x = g * Math.PI / 180, svg = $('${id}s'); $('${id}av').textContent = g;
    var cx = 180, cy = 150, R = 110; svg.innerHTML = '';
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    el('line', {x1: cx - R - 14, y1: cy, x2: cx + R + 14, y2: cy, stroke: 'var(--ink-faint)', 'stroke-width': 1.5}, svg);
    el('line', {x1: cx, y1: cy - R - 14, x2: cx, y2: cy + R + 14, stroke: 'var(--ink-faint)', 'stroke-width': 1.5}, svg);
    var px = cx + R * Math.cos(x), py = cy - R * Math.sin(x);
    el('path', {d: 'M' + (cx + 28) + ',' + cy + ' A28,28 0 ' + (g > 180 ? 1 : 0) + ' 0 ' + (cx + 28 * Math.cos(x)) + ',' + (cy - 28 * Math.sin(x)), fill: 'none', stroke: 'var(--growth)', 'stroke-width': 3}, svg);
    el('line', {x1: cx, y1: cy, x2: px, y2: py, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
    el('line', {x1: px, y1: py, x2: px, y2: cy, stroke: 'var(--decay)', 'stroke-width': 3}, svg);
    el('line', {x1: cx, y1: cy, x2: px, y2: cy, stroke: 'var(--success)', 'stroke-width': 3}, svg);
    el('circle', {cx: px, cy: py, r: 6, fill: 'var(--primary)'}, svg);
    function T(xx, yy, s, c){ var t = el('text', {x: xx, y: yy, 'font-size': 12, fill: c, 'font-weight': 700}, svg); t.textContent = s; }
    T(px + (Math.cos(x) >= 0 ? 8 : -60), (py + cy) / 2 + 4, 'sen = ' + nf(Math.sin(x), 3), 'var(--decay)');
    T((px + cx) / 2 - 24, cy + (Math.sin(x) >= 0 ? 16 : -8), 'cos = ' + nf(Math.cos(x), 3), 'var(--success)');
    var q = g === 0 || g === 360 ? 'eixo +x' : g < 90 ? '1º quadrante' : g === 90 ? 'eixo +y' : g < 180 ? '2º quadrante' : g === 180 ? 'eixo −x' : g < 270 ? '3º quadrante' : g === 270 ? 'eixo −y' : '4º quadrante';
    $('${id}t').textContent = 'x = ' + g + '° = ' + nf(x, 3) + ' rad   ·   ' + q + '   ·   (cos x ; sen x) = (' + nf(Math.cos(x), 3) + ' ; ' + nf(Math.sin(x), 3) + ')';
    $('${id}h').textContent = 'O ponto da circunferência de raio 1 tem coordenadas (cos x ; sen x). O seno é a altura (eixo y) e o cosseno é a posição horizontal (eixo x).';
  });`
});

// funções trigonométricas: f(x) = a + b · sen/cos(c·x + d) ; tangente separada
const trigf = id => ({
  html: W.box('Função trigonométrica: a + b · f(c·x + d)',
    W.row(W.sel(id + 'f', 'Função', ['seno', 'cosseno', 'tangente']), W.nm(id + 'a', 'a (desloca para cima)', 0, 0.5, 'min="-3" max="3"'), W.nm(id + 'b', 'b (amplitude)', 1, 0.5, 'min="-3" max="3"'), W.nm(id + 'c', 'c (frequência)', 1, 0.5, 'min="0.5" max="4"'), W.nm(id + 'd', 'd (fase, rad)', 0, 0.25, 'min="-3.2" max="3.2"')) +
    W.svg(id + 's', '0 0 560 300', '560px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}f', '${id}a', '${id}b', '${id}c', '${id}d'], function(){
    var f = +$('${id}f').value, a = +$('${id}a').value, b = +$('${id}b').value, c = +$('${id}c').value, d = +$('${id}d').value, svg = $('${id}s');
    var F = function(x){ var u = c * x + d; return a + b * (f === 0 ? Math.sin(u) : f === 1 ? Math.cos(u) : Math.tan(u)); };
    var P = plano(svg, -7, 7, -5, 5, 560, 300, 2);
    el('line', {x1: P.sx(-6.2832), y1: P.sy(-5), x2: P.sx(-6.2832), y2: P.sy(5), stroke: 'var(--line)', 'stroke-width': 1, 'stroke-dasharray': '4 4'}, svg);
    el('line', {x1: P.sx(6.2832), y1: P.sy(-5), x2: P.sx(6.2832), y2: P.sy(5), stroke: 'var(--line)', 'stroke-width': 1, 'stroke-dasharray': '4 4'}, svg);
    if(f === 2){
      var k, lo, hi, u0 = -7;
      for(var s = -12; s <= 12; s++){ lo = ((s - 0.5) * Math.PI - d) / c; hi = ((s + 0.5) * Math.PI - d) / c; if(hi < -7 || lo > 7) continue; curva(svg, P, F, Math.max(lo + 0.02, -7), Math.min(hi - 0.02, 7), -5, 5, 'var(--primary)'); }
    } else { curva(svg, P, F, -7, 7, -5, 5, f === 0 ? 'var(--primary)' : 'var(--growth)'); }
    var periodo = (f === 2 ? Math.PI : 2 * Math.PI) / c;
    $('${id}t').textContent = (f === 0 ? 'sen' : f === 1 ? 'cos' : 'tg') + ' · período = ' + nf(periodo, 3) + (f === 2 ? '' : '   ·   imagem = [' + nf(a - Math.abs(b), 2) + ' ; ' + nf(a + Math.abs(b), 2) + ']');
    $('${id}h').textContent = f === 2 ? 'A tangente tem período π (dividido por c), imagem real e assíntotas verticais onde o cosseno se anula.' : 'Período = 2π ÷ c. Imagem de a + b·sen(...) ou a + b·cos(...): de a − |b| até a + |b|. As linhas tracejadas marcam x = −2π e x = 2π.';
  });`
});

module.exports = { somas, triret, ciclo, trigf };
