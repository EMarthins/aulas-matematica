// Widgets (interativos) das aulas de Recomposição do 9º ano. Cada função recebe um prefixo de id e devolve { html, js }.
// O js é texto cru que roda dentro do deck, com $, el, nf, bind (do kit). Os ids são prefixados para não colidirem.
const K = require('./kit.js');
const { W } = K;

const reta = id => ({
  html: W.box('Reta numérica: andar para a direita ou para a esquerda',
    W.row(W.nm(id + 'a', 'Começa em', 3, 1, 'min="-12" max="12"'), W.sel(id + 'o', 'Operação', ['+ (soma)', '− (subtração)']), W.nm(id + 'b', 'Número', -5, 1, 'min="-12" max="12"')) +
    W.svg(id + 's', '0 0 560 120', '560px') + W.txt(id + 't', 'Conta: ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}a', '${id}o', '${id}b'], function(){
    var a = +$('${id}a').value, b = +$('${id}b').value, sub = $('${id}o').value === '1', r = sub ? a - b : a + b, svg = $('${id}s'); svg.innerHTML = '';
    function X(v){ return 30 + (v + 18) / 36 * 500; }
    el('line', {x1: X(-18), y1: 70, x2: X(18), y2: 70, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    for(var v = -18; v <= 18; v += 3){ el('line', {x1: X(v), y1: 64, x2: X(v), y2: 76, stroke: 'var(--ink-soft)', 'stroke-width': 1.5}, svg); var t = el('text', {x: X(v), y: 96, 'font-size': 12, 'text-anchor': 'middle', fill: 'var(--ink-soft)'}, svg); t.textContent = v < 0 ? '−' + (-v) : v; }
    var passo = sub ? -b : b, fim = a + passo, cor = passo >= 0 ? 'var(--success)' : 'var(--danger)';
    if(Math.abs(a) <= 18 && Math.abs(fim) <= 18){
      el('path', {d: 'M' + X(a) + ',66 Q' + (X(a) + X(fim)) / 2 + ',' + (passo === 0 ? 66 : 20) + ' ' + X(fim) + ',66', fill: 'none', stroke: cor, 'stroke-width': 3}, svg);
      el('circle', {cx: X(a), cy: 70, r: 6, fill: 'var(--primary)'}, svg); el('circle', {cx: X(fim), cy: 70, r: 7, fill: 'var(--growth)'}, svg);
    }
    var fa = a < 0 ? '(−' + (-a) + ')' : a, fb = b < 0 ? '(−' + (-b) + ')' : b;
    $('${id}t').textContent = fa + (sub ? ' − ' : ' + ') + fb + ' = ' + (r < 0 ? '−' + (-r) : r);
    $('${id}h').textContent = sub ? 'Subtrair um número é somar o seu oposto: ' + fa + ' − ' + fb + ' = ' + fa + ' + (' + (b === 0 ? 0 : (-b < 0 ? '−' + b : -b)) + ').' : 'Somar um número positivo anda para a direita; somar um negativo anda para a esquerda.';
  });`
});

const fracao = id => ({
  html: W.box('Fração, decimal e porcentagem',
    W.row(W.nm(id + 'n', 'Numerador', 3, 1, 'min="0" max="24"'), W.nm(id + 'd', 'Denominador', 4, 1, 'min="1" max="12"')) +
    W.svg(id + 's', '0 0 560 90', '560px') + W.txt(id + 't', 'Representação: ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}n', '${id}d'], function(){
    var n = Math.max(0, Math.round(+$('${id}n').value)), d = Math.max(1, Math.round(+$('${id}d').value)), svg = $('${id}s'); svg.innerHTML = '';
    var barras = Math.ceil(n / d) || 1, w = 500 / d, cheios = n;
    for(var b = 0; b < Math.min(barras, 2); b++){
      for(var i = 0; i < d; i++){ var cheio = cheios > 0; cheios--; el('rect', {x: 30 + i * w, y: 10 + b * 36, width: w - 3, height: 28, rx: 5, fill: cheio ? 'var(--primary)' : 'var(--surface)', stroke: 'var(--primary)', 'stroke-width': 1.6}, svg); }
    }
    var v = n / d;
    $('${id}t').textContent = n + '/' + d + ' = ' + nf(v, 4) + ' = ' + nf(v * 100, 2) + '%';
    $('${id}h').textContent = n < d ? 'Fração própria: representa menos de um inteiro.' : n === d ? 'Fração aparente igual a 1 inteiro.' : 'Fração imprópria: ' + Math.floor(n / d) + ' inteiro(s)' + (n % d ? ' e mais ' + (n % d) + '/' + d : '') + '.';
  });`
});

const equivalente = id => ({
  html: W.box('Frações equivalentes: multiplique em cima e embaixo pelo mesmo número',
    W.row(W.nm(id + 'n', 'Numerador', 2, 1, 'min="1" max="9"'), W.nm(id + 'd', 'Denominador', 3, 1, 'min="2" max="9"'), W.nm(id + 'k', 'Multiplicar por', 2, 1, 'min="1" max="6"')) +
    W.svg(id + 's', '0 0 560 100', '560px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}n', '${id}d', '${id}k'], function(){
    var n = Math.round(+$('${id}n').value), d = Math.round(+$('${id}d').value), k = Math.round(+$('${id}k').value), svg = $('${id}s'); svg.innerHTML = '';
    if(!(n >= 1 && d >= 2 && k >= 1)){ $('${id}t').textContent = '—'; return; }
    function barra(y, nn, dd, cor){ var w = 500 / dd; for(var i = 0; i < dd; i++) el('rect', {x: 30 + i * w, y: y, width: w - 2, height: 30, rx: 4, fill: i < nn ? cor : 'var(--surface)', stroke: cor, 'stroke-width': 1.5}, svg); }
    barra(8, n, d, 'var(--primary)'); barra(54, n * k, d * k, 'var(--growth)');
    $('${id}t').textContent = n + '/' + d + ' = ' + (n * k) + '/' + (d * k) + '  (×' + k + ' em cima e embaixo)';
    $('${id}h').textContent = 'As duas barras têm o mesmo comprimento pintado: o valor é o mesmo (' + nf(n / d, 4) + ').';
  });`
});

const porcento = id => ({
  html: W.box('Porcentagem de um valor, acréscimo e desconto',
    W.row(W.nm(id + 'v', 'Valor (reais)', 200, 10, 'min="0"'), W.nm(id + 'p', 'Porcentagem (%)', 15, 1, 'min="0" max="200"'), W.sel(id + 'o', 'Operação', ['Calcular a parte', 'Acréscimo', 'Desconto'])) +
    W.svg(id + 's', '0 0 560 70', '560px') + W.txt(id + 't', 'Resultado: ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}v', '${id}p', '${id}o'], function(){
    var v = +$('${id}v').value, p = +$('${id}p').value, o = +$('${id}o').value, svg = $('${id}s'); svg.innerHTML = '';
    var parte = v * p / 100, r = o === 0 ? parte : o === 1 ? v + parte : v - parte;
    var w = 500, f = Math.min(1, p / 100);
    el('rect', {x: 30, y: 14, width: w, height: 30, rx: 6, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.5}, svg);
    el('rect', {x: 30, y: 14, width: w * f, height: 30, rx: 6, fill: o === 2 ? 'var(--danger)' : 'var(--primary)', opacity: .85}, svg);
    var t = el('text', {x: 30 + w * f / 2, y: 34, 'text-anchor': 'middle', 'font-size': 13, fill: '#fff', 'font-weight': 700}, svg); if(f > .12) t.textContent = nf(p, 1) + '%';
    $('${id}t').textContent = 'R$ ' + nf(r, 2);
    $('${id}h').textContent = o === 0 ? nf(p, 1) + '% de ' + nf(v, 2) + ' = ' + nf(p / 100, 4) + ' × ' + nf(v, 2) + ' = ' + nf(parte, 2) + '.' : o === 1 ? 'Acréscimo: ' + nf(v, 2) + ' + ' + nf(parte, 2) + ' = ' + nf(r, 2) + ' (fator ' + nf(1 + p / 100, 4) + ').' : 'Desconto: ' + nf(v, 2) + ' − ' + nf(parte, 2) + ' = ' + nf(r, 2) + ' (fator ' + nf(1 - p / 100, 4) + ').';
  });`
});

const proporcao = id => ({
  html: W.box('Grandezas proporcionais: direta ou inversa',
    W.row(W.sel(id + 'o', 'Tipo', ['Diretamente proporcionais (y = k·x)', 'Inversamente proporcionais (y = k/x)']), W.nm(id + 'k', 'Constante k', 12, 1, 'min="1" max="60"')) +
    '<div id="' + id + 'tb"></div>' + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}o', '${id}k'], function(){
    var inv = $('${id}o').value === '1', k = Math.max(1, +$('${id}k').value), xs = inv ? [1, 2, 3, 4, 6] : [1, 2, 3, 4, 5];
    var h = '<table class="tbl"><thead><tr><th>x</th>' + xs.map(function(x){ return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody><tr><td><b>y</b></td>' + xs.map(function(x){ return '<td>' + nf(inv ? k / x : k * x, 2) + '</td>'; }).join('') + '</tr><tr><td><b>' + (inv ? 'x · y' : 'y ÷ x') + '</b></td>' + xs.map(function(x){ return '<td>' + nf(k, 2) + '</td>'; }).join('') + '</tr></tbody></table>';
    $('${id}tb').innerHTML = h;
    $('${id}h').textContent = inv ? 'Quando x dobra, y cai pela metade: o PRODUTO x · y é sempre ' + nf(k, 2) + '.' : 'Quando x dobra, y dobra: a RAZÃO y ÷ x é sempre ' + nf(k, 2) + '.';
  });`
});

const somaAng = id => ({
  html: W.box('Polígono regular: soma dos ângulos internos',
    W.rg(id + 'n', 'Número de lados', 3, 12, 1, 5) + W.svg(id + 's', '0 0 300 230', '300px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}n'], function(){
    var n = +$('${id}n').value; $('${id}nv').textContent = n; var svg = $('${id}s'); svg.innerHTML = '';
    var cx = 150, cy = 115, r = 90, pts = [];
    for(var i = 0; i < n; i++){ var ang = -Math.PI / 2 + 2 * Math.PI * i / n; pts.push([cx + r * Math.cos(ang), cy + r * Math.sin(ang)]); }
    el('polygon', {points: pts.map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round'}, svg);
    for(var j = 1; j < n - 1; j++) el('line', {x1: pts[0][0], y1: pts[0][1], x2: pts[j + 1][0], y2: pts[j + 1][1], stroke: 'var(--growth)', 'stroke-width': 1.6, 'stroke-dasharray': '5 4'}, svg);
    var s = (n - 2) * 180;
    $('${id}t').textContent = 'S = (' + n + ' − 2) · 180° = ' + s + '°   ·   cada ângulo = ' + nf(s / n, 2) + '°';
    $('${id}h').textContent = 'Das diagonais que partem de um vértice, saem ' + (n - 2) + ' triângulos — cada um vale 180°. Ângulo externo de cada vértice: ' + nf(360 / n, 2) + '° (a soma dos externos é sempre 360°).';
  });`
});

const triExiste = id => ({
  html: W.box('Existe um triângulo com estes lados?',
    W.row(W.nm(id + 'a', 'Lado a', 3, 0.5, 'min="0.5"'), W.nm(id + 'b', 'Lado b', 4, 0.5, 'min="0.5"'), W.nm(id + 'c', 'Lado c', 5, 0.5, 'min="0.5"')) +
    W.svg(id + 's', '0 0 360 190', '360px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}a', '${id}b', '${id}c'], function(){
    var a = +$('${id}a').value, b = +$('${id}b').value, c = +$('${id}c').value, svg = $('${id}s'); svg.innerHTML = '';
    var l = [a, b, c].sort(function(x, y){ return x - y; }), ok = l[0] > 0 && l[0] + l[1] > l[2];
    if(!ok){ $('${id}t').textContent = 'Não existe triângulo'; $('${id}h').textContent = 'O maior lado (' + nf(l[2], 2) + ') precisa ser menor que a soma dos outros dois (' + nf(l[0] + l[1], 2) + ').';
      el('line', {x1: 40, y1: 120, x2: 40 + l[2] * 10, y2: 120, stroke: 'var(--danger)', 'stroke-width': 5}, svg); el('line', {x1: 40, y1: 150, x2: 40 + l[0] * 10, y2: 150, stroke: 'var(--primary)', 'stroke-width': 5}, svg); el('line', {x1: 40 + l[0] * 10, y1: 150, x2: 40 + (l[0] + l[1]) * 10, y2: 150, stroke: 'var(--growth)', 'stroke-width': 5}, svg); return; }
    var x = (c * c + a * a - b * b) / (2 * c), y2 = a * a - x * x, y = Math.sqrt(Math.max(0, y2)), esc = Math.min(300 / c, 150 / Math.max(y, .1));
    var A = [30, 170], B = [30 + c * esc, 170], C = [30 + x * esc, 170 - y * esc];
    el('polygon', {points: [A, B, C].map(function(p){ return p.join(','); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round'}, svg);
    var tipoL = (a === b && b === c) ? 'equilátero' : (a === b || b === c || a === c) ? 'isósceles' : 'escaleno';
    var q = l[0] * l[0] + l[1] * l[1], m = l[2] * l[2], tipoA = Math.abs(q - m) < 1e-9 ? 'retângulo' : q > m ? 'acutângulo' : 'obtusângulo';
    $('${id}t').textContent = 'Existe: ' + tipoL + ' e ' + tipoA;
    $('${id}h').textContent = nf(l[0], 2) + ' + ' + nf(l[1], 2) + ' = ' + nf(l[0] + l[1], 2) + ' > ' + nf(l[2], 2) + ' ✓. Quanto aos ângulos: ' + nf(l[0], 2) + '² + ' + nf(l[1], 2) + '² ' + (Math.abs(q - m) < 1e-9 ? '=' : q > m ? '>' : '<') + ' ' + nf(l[2], 2) + '².';
  });`
});

const circulo = id => ({
  html: W.box('Circunferência: comprimento e a razão π',
    W.rg(id + 'r', 'Raio (cm)', 1, 10, 0.5, 4) + W.svg(id + 's', '0 0 320 220', '320px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}r'], function(){
    var r = +$('${id}r').value; $('${id}rv').textContent = nf(r, 1); var svg = $('${id}s'); svg.innerHTML = '';
    var R = 16 * r / 2 + 18; el('circle', {cx: 160, cy: 110, r: R, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 3}, svg);
    el('line', {x1: 160 - R, y1: 110, x2: 160 + R, y2: 110, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg); el('circle', {cx: 160, cy: 110, r: 3.5, fill: 'var(--growth)'}, svg);
    var C = 2 * Math.PI * r, d = 2 * r;
    $('${id}t').textContent = 'd = ' + nf(d, 1) + ' cm   ·   C = 2πr ≈ ' + nf(C, 2) + ' cm   ·   C ÷ d ≈ ' + nf(C / d, 4);
    $('${id}h').textContent = 'Não importa o tamanho do círculo: dividir o comprimento pelo diâmetro dá sempre π ≈ 3,1416.';
  });`
});

const area = id => ({
  html: W.box('Área e perímetro de figuras planas',
    W.row(W.sel(id + 'f', 'Figura', ['Retângulo', 'Paralelogramo', 'Triângulo', 'Trapézio', 'Losango']), W.nm(id + 'b', 'Base (ou diagonal D)', 8, 1, 'min="1" max="14"'), W.nm(id + 'h', 'Altura (ou diagonal d)', 5, 1, 'min="1" max="10"'), W.nm(id + 'B', 'Base menor (trapézio)', 4, 1, 'min="1" max="14"')) +
    W.svg(id + 's', '0 0 360 190', '360px') + W.txt(id + 't', '') + W.hint(id + 'h2')),
  js: String.raw`
  bind(['${id}f', '${id}b', '${id}h', '${id}B'], function(){
    var f = +$('${id}f').value, b = +$('${id}b').value, h = +$('${id}h').value, B = +$('${id}B').value, svg = $('${id}s'); svg.innerHTML = '';
    var u = Math.min(300 / Math.max(b, B + 1, 1), 150 / Math.max(h, 1)), x0 = 30, y0 = 170, pts, A, txt, dica;
    for(var gx = 0; gx <= Math.max(b, B); gx++) el('line', {x1: x0 + gx * u, y1: y0, x2: x0 + gx * u, y2: y0 - h * u, stroke: 'var(--line)', 'stroke-width': 1}, svg);
    for(var gy = 0; gy <= h; gy++) el('line', {x1: x0, y1: y0 - gy * u, x2: x0 + Math.max(b, B) * u, y2: y0 - gy * u, stroke: 'var(--line)', 'stroke-width': 1}, svg);
    if(f === 0){ pts = [[0, 0], [b, 0], [b, h], [0, h]]; A = b * h; txt = 'A = b · h = ' + b + ' · ' + h + ' = ' + A + '   ·   P = ' + (2 * (b + h)); dica = 'Retângulo: conte quantos quadradinhos cabem — b colunas por h linhas.'; }
    else if(f === 1){ var d = Math.min(3, b - 1); pts = [[0, 0], [b - d, 0], [b, h], [d, h]]; A = (b - d) * h; txt = 'A = base · altura = ' + (b - d) + ' · ' + h + ' = ' + A; dica = 'O paralelogramo vira um retângulo se você mover o triângulo da ponta: mesma base e mesma altura.'; }
    else if(f === 2){ pts = [[0, 0], [b, 0], [Math.min(b, 2), h]]; A = b * h / 2; txt = 'A = b · h ÷ 2 = ' + b + ' · ' + h + ' ÷ 2 = ' + nf(A, 2); dica = 'Dois triângulos iguais formam um paralelogramo: por isso a área do triângulo é a metade.'; }
    else if(f === 3){ var Bm = Math.min(B, b - 1); pts = [[0, 0], [b, 0], [(b + Bm) / 2, h], [(b - Bm) / 2, h]]; A = (b + Bm) * h / 2; txt = 'A = (B + b) · h ÷ 2 = (' + b + ' + ' + Bm + ') · ' + h + ' ÷ 2 = ' + nf(A, 2); dica = 'Trapézio: média das bases vezes a altura.'; }
    else { pts = [[b / 2, 0], [b, h / 2], [b / 2, h], [0, h / 2]]; A = b * h / 2; txt = 'A = D · d ÷ 2 = ' + b + ' · ' + h + ' ÷ 2 = ' + nf(A, 2); dica = 'Losango: o produto das diagonais dividido por 2.'; }
    el('polygon', {points: pts.map(function(p){ return (x0 + p[0] * u).toFixed(1) + ',' + (y0 - p[1] * u).toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round', opacity: .95}, svg);
    $('${id}t').textContent = txt; $('${id}h2').textContent = dica;
  });`
});

const volume = id => ({
  html: W.box('Volume de blocos e cilindros',
    W.row(W.sel(id + 'f', 'Sólido', ['Bloco retangular', 'Cilindro']), W.nm(id + 'a', 'Comprimento ou raio', 4, 1, 'min="1" max="9"'), W.nm(id + 'b', 'Largura', 3, 1, 'min="1" max="9"'), W.nm(id + 'c', 'Altura', 2, 1, 'min="1" max="9"')) +
    W.svg(id + 's', '0 0 360 200', '360px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}f', '${id}a', '${id}b', '${id}c'], function(){
    var f = +$('${id}f').value, a = +$('${id}a').value, b = +$('${id}b').value, c = +$('${id}c').value, svg = $('${id}s'); svg.innerHTML = '';
    var u = 150 / Math.max(a + b * .5, c + b * .5, 3);
    if(f === 0){
      var x0 = 40, y0 = 170, dx = b * .5 * u, dy = b * .5 * u, W0 = a * u, H0 = c * u;
      el('polygon', {points: [[x0, y0], [x0 + W0, y0], [x0 + W0, y0 - H0], [x0, y0 - H0]].map(function(p){ return p.join(','); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      el('polygon', {points: [[x0, y0 - H0], [x0 + W0, y0 - H0], [x0 + W0 + dx, y0 - H0 - dy], [x0 + dx, y0 - H0 - dy]].map(function(p){ return p.join(','); }).join(' '), fill: 'var(--growth-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      el('polygon', {points: [[x0 + W0, y0], [x0 + W0 + dx, y0 - dy], [x0 + W0 + dx, y0 - H0 - dy], [x0 + W0, y0 - H0]].map(function(p){ return p.join(','); }).join(' '), fill: 'var(--decay-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      $('${id}t').textContent = 'V = ' + a + ' · ' + b + ' · ' + c + ' = ' + (a * b * c) + ' cubinhos (unidades de volume)';
      $('${id}h').textContent = 'Área da base (' + a + ' × ' + b + ' = ' + (a * b) + ') vezes a altura (' + c + ' camadas).';
    } else {
      var r = a * u * .7, cx = 150, top = 30, hh = c * u * 1.3;
      el('ellipse', {cx: cx, cy: top + hh, rx: r, ry: r * .35, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      el('rect', {x: cx - r, y: top, width: 2 * r, height: hh, fill: 'var(--primary-soft)', stroke: 'none'}, svg);
      el('line', {x1: cx - r, y1: top, x2: cx - r, y2: top + hh, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); el('line', {x1: cx + r, y1: top, x2: cx + r, y2: top + hh, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      el('ellipse', {cx: cx, cy: top, rx: r, ry: r * .35, fill: 'var(--growth-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
      var V = Math.PI * a * a * c;
      $('${id}t').textContent = 'V = π · r² · h = π · ' + a + '² · ' + c + ' ≈ ' + nf(V, 2);
      $('${id}h').textContent = 'Área da base (círculo: π · ' + a + '² ≈ ' + nf(Math.PI * a * a, 2) + ') vezes a altura (' + c + ').';
    }
  });`
});

const valorNum = id => ({
  html: W.box('Valor numérico de uma expressão algébrica',
    W.row(W.nm(id + 'a', 'a (coeficiente)', 3, 1), W.nm(id + 'b', 'b (termo fixo)', -2, 1), W.rg(id + 'x', 'Valor de x', -5, 10, 1, 4)) + '<div id="' + id + 'tb"></div>' + W.txt(id + 't', '')),
  js: String.raw`
  bind(['${id}a', '${id}b', '${id}x'], function(){
    var a = +$('${id}a').value, b = +$('${id}b').value, x = +$('${id}x').value; $('${id}xv').textContent = x;
    var xs = [x - 2, x - 1, x, x + 1, x + 2];
    $('${id}tb').innerHTML = '<table class="tbl"><thead><tr><th>x</th>' + xs.map(function(v){ return '<th>' + v + '</th>'; }).join('') + '</tr></thead><tbody><tr><td><b>' + a + 'x ' + (b < 0 ? '− ' + (-b) : '+ ' + b) + '</b></td>' + xs.map(function(v){ return '<td' + (v === x ? ' style="font-weight:800;color:var(--primary)"' : '') + '>' + (a * v + b) + '</td>'; }).join('') + '</tr></tbody></table>';
    $('${id}t').textContent = a + ' · (' + x + ') ' + (b < 0 ? '− ' + (-b) : '+ ' + b) + ' = ' + (a * x + b);
  });`
});

const sequencia = id => ({
  html: W.box('Sequências: o que se repete?',
    W.row(W.sel(id + 'o', 'Tipo', ['Soma o mesmo número (r)', 'Multiplica pelo mesmo número (q)']), W.nm(id + 'a', 'Primeiro termo', 3, 1), W.nm(id + 'r', 'r ou q', 4, 1, 'min="-9" max="9"'), W.nm(id + 'n', 'Posição n', 10, 1, 'min="1" max="20"')) + '<div id="' + id + 'tb"></div>' + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}o', '${id}a', '${id}r', '${id}n'], function(){
    var g = $('${id}o').value === '1', a = +$('${id}a').value, r = +$('${id}r').value, n = Math.max(1, Math.round(+$('${id}n').value)), t = [], v = a;
    for(var i = 1; i <= 7; i++){ t.push(v); v = g ? v * r : v + r; }
    $('${id}tb').innerHTML = '<table class="tbl"><thead><tr><th>n</th>' + t.map(function(_, i){ return '<th>' + (i + 1) + '</th>'; }).join('') + '</tr></thead><tbody><tr><td><b>termo</b></td>' + t.map(function(x){ return '<td>' + nf(x, 4) + '</td>'; }).join('') + '</tr></tbody></table>';
    var an = g ? a * Math.pow(r, n - 1) : a + (n - 1) * r;
    $('${id}t').textContent = 'termo ' + n + ' = ' + nf(an, 4);
    $('${id}h').textContent = g ? 'Termo geral: aₙ = ' + a + ' · ' + r + '^(n − 1).' : 'Termo geral: aₙ = ' + a + ' + (n − 1) · ' + r + ' = ' + (r) + 'n ' + ((a - r) < 0 ? '− ' + (r - a) : '+ ' + (a - r)) + '.';
  });`
});

const angInscrito = id => ({
  html: W.box('Ângulo central e ângulo inscrito',
    W.rg(id + 'c', 'Ângulo central (°)', 20, 180, 5, 100) + W.svg(id + 's', '0 0 320 240', '320px') + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}c'], function(){
    var c = +$('${id}c').value; $('${id}cv').textContent = c; var svg = $('${id}s'); svg.innerHTML = '';
    var cx = 160, cy = 120, R = 95, rad = function(d){ return d * Math.PI / 180; };
    function P(d){ return [cx + R * Math.cos(rad(d)), cy - R * Math.sin(rad(d))]; }
    var A = P(90 + c / 2), B = P(90 - c / 2), V = P(270);
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    el('path', {d: 'M' + cx + ',' + cy + ' L' + A[0] + ',' + A[1] + ' A' + R + ',' + R + ' 0 0 1 ' + B[0] + ',' + B[1] + ' Z', fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
    el('polyline', {points: [A, V, B].map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--growth)', 'stroke-width': 2.5}, svg);
    [A, B, V].forEach(function(p){ el('circle', {cx: p[0], cy: p[1], r: 4, fill: 'var(--ink)'}, svg); }); el('circle', {cx: cx, cy: cy, r: 3.5, fill: 'var(--primary)'}, svg);
    $('${id}t').textContent = 'central = ' + c + '°   ·   inscrito = ' + nf(c / 2, 1) + '°';
    $('${id}h').textContent = 'O ângulo inscrito vale a metade do ângulo central que enxerga o mesmo arco.';
  });`
});

const unidades = id => ({
  html: W.box('Unidades de comprimento: a escada do metro',
    W.row(W.nm(id + 'v', 'Valor', 2.5, 0.1), W.sel(id + 'a', 'De', ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], 3), W.sel(id + 'b', 'Para', ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], 5)) + W.txt(id + 't', '') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}v', '${id}a', '${id}b'], function(){
    var v = +$('${id}v').value, a = +$('${id}a').value, b = +$('${id}b').value, n = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], d = b - a;
    var r = v * Math.pow(10, d);
    $('${id}t').textContent = nf(v, 6) + ' ' + n[a] + ' = ' + nf(r, 6) + ' ' + n[b];
    $('${id}h').textContent = d === 0 ? 'Mesma unidade: nada muda.' : d > 0 ? 'Descendo ' + d + ' degrau(s) na escada: multiplique por 10 em cada degrau (×' + nf(Math.pow(10, d), 0) + ').' : 'Subindo ' + (-d) + ' degrau(s) na escada: divida por 10 em cada degrau (÷' + nf(Math.pow(10, -d), 0) + ').';
  });`
});

module.exports = { reta, fracao, equivalente, porcento, proporcao, somaAng, triExiste, circulo, area, volume, valorNum, sequencia, angInscrito, unidades };
