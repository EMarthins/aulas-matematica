// Widgets da Matemática · 2ª série · 3º trimestre (exponencial, logaritmo, partes, composta, inversa). Cada função recebe um prefixo de id e devolve { html, js }.
// O js é texto cru que roda dentro do deck, com $, el, nf, bind, plano, curva, ponto (do kit). Não use barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { W } = K;

// f(x) = k · a^x
const expo = id => ({
  html: W.box('Função exponencial f(x) = k · aˣ',
    W.row(W.nm(id + 'k', 'Coeficiente k', 1, 0.5, 'min="0.5" max="4"'), W.nm(id + 'a', 'Base a (a > 0 e a ≠ 1)', 2, 0.25, 'min="0.25" max="4"')) +
    W.svg(id + 's', '0 0 560 300', '560px') + W.txt(id + 't', 'f(x) = ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}k', '${id}a'], function(){
    var k = +$('${id}k').value, a = +$('${id}a').value, svg = $('${id}s');
    if(!(a > 0) || a === 1){ svg.innerHTML = ''; $('${id}t').textContent = 'Escolha a > 0 e a diferente de 1'; $('${id}h').textContent = 'Com a = 1 a função vira constante (f(x) = k), e a base não pode ser zero nem negativa.'; return; }
    var P = plano(svg, -4, 4, -1, 9, 560, 300, 1);
    curva(svg, P, function(x){ return k * Math.pow(a, x); }, -4, 4, -1, 9, a > 1 ? 'var(--growth)' : 'var(--decay)');
    ponto(svg, P, 0, k, 'var(--primary)', '(0, ' + nf(k, 2) + ')');
    if(k * a <= 9) ponto(svg, P, 1, k * a, 'var(--primary)', '(1, ' + nf(k * a, 2) + ')');
    $('${id}t').textContent = 'f(x) = ' + nf(k, 2) + ' · ' + nf(a, 2) + '^x   ·   ' + (a > 1 ? 'crescente' : 'decrescente');
    $('${id}h').textContent = 'O gráfico sempre corta o eixo y em (0, k) e nunca toca o eixo x (assíntota horizontal y = 0). ' + (a > 1 ? 'Com a > 1, quando x aumenta 1 unidade, f(x) é multiplicado por ' + nf(a, 2) + '.' : 'Com 0 < a < 1, quando x aumenta 1 unidade, f(x) é multiplicado por ' + nf(a, 2) + ' (diminui).');
  });`
});

// f(x) = log_a(x)
const logf = id => ({
  html: W.box('Função logarítmica f(x) = logₐ x',
    W.row(W.nm(id + 'a', 'Base a (a > 0 e a ≠ 1)', 2, 0.25, 'min="0.25" max="10"'), W.nm(id + 'x', 'Testar x (x > 0)', 8, 0.5, 'min="0.25" max="16"')) +
    W.svg(id + 's', '0 0 560 300', '560px') + W.txt(id + 't', 'log = ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}a', '${id}x'], function(){
    var a = +$('${id}a').value, x0 = +$('${id}x').value, svg = $('${id}s');
    if(!(a > 0) || a === 1 || !(x0 > 0)){ svg.innerHTML = ''; $('${id}t').textContent = 'Use a > 0, a diferente de 1, e x > 0'; $('${id}h').textContent = 'A base precisa ser positiva e diferente de 1, e o logaritmando precisa ser positivo.'; return; }
    var P = plano(svg, -1, 16, -5, 5, 560, 300, 2), L = function(x){ return Math.log(x) / Math.log(a); };
    curva(svg, P, L, 0.02, 16, -5, 5, a > 1 ? 'var(--growth)' : 'var(--decay)');
    ponto(svg, P, 1, 0, 'var(--primary)', '(1, 0)');
    var y0 = L(x0); if(Math.abs(y0) <= 5) ponto(svg, P, x0, y0, 'var(--danger)', '(' + nf(x0, 2) + '; ' + nf(y0, 2) + ')');
    $('${id}t').textContent = 'log base ' + nf(a, 2) + ' de ' + nf(x0, 2) + ' = ' + nf(y0, 3) + '   ·   ' + (a > 1 ? 'crescente' : 'decrescente');
    $('${id}h').textContent = 'Conferência: ' + nf(a, 2) + ' elevado a ' + nf(y0, 3) + ' = ' + nf(Math.pow(a, y0), 2) + '. O gráfico passa sempre por (1, 0) e nunca toca o eixo y (assíntota vertical x = 0).';
  });`
});

// função por partes: f(x) = m1·x + b1 se x < c ; m2·x + b2 se x ≥ c
const partes = id => ({
  html: W.box('Função definida por duas sentenças',
    W.row(W.nm(id + 'c', 'Ponto de corte c', 2, 1, 'min="-3" max="5"'), W.nm(id + 'm1', 'm₁ (x < c)', 1, 0.5, 'min="-3" max="3"'), W.nm(id + 'b1', 'b₁', 0, 1, 'min="-5" max="5"'), W.nm(id + 'm2', 'm₂ (x ≥ c)', -1, 0.5, 'min="-3" max="3"'), W.nm(id + 'b2', 'b₂', 6, 1, 'min="-5" max="10"'), W.nm(id + 'x', 'Testar x', 3, 1, 'min="-6" max="6"')) +
    W.svg(id + 's', '0 0 560 300', '560px') + W.txt(id + 't', 'f(x) = ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}c', '${id}m1', '${id}b1', '${id}m2', '${id}b2', '${id}x'], function(){
    var c = +$('${id}c').value, m1 = +$('${id}m1').value, b1 = +$('${id}b1').value, m2 = +$('${id}m2').value, b2 = +$('${id}b2').value, x0 = +$('${id}x').value, svg = $('${id}s');
    var f = function(x){ return x < c ? m1 * x + b1 : m2 * x + b2; };
    var P = plano(svg, -6, 6, -6, 10, 560, 300, 2);
    curva(svg, P, function(x){ return x < c ? m1 * x + b1 : NaN; }, -6, c, -6, 10, 'var(--primary)');
    curva(svg, P, function(x){ return x >= c ? m2 * x + b2 : NaN; }, c, 6, -6, 10, 'var(--growth)');
    el('circle', {cx: P.sx(c), cy: P.sy(m1 * c + b1), r: 5, fill: 'var(--bg, #fff)', stroke: 'var(--primary)', 'stroke-width': 2.5}, svg);
    ponto(svg, P, c, m2 * c + b2, 'var(--growth)', '');
    var y0 = f(x0); if(y0 >= -6 && y0 <= 10) ponto(svg, P, x0, y0, 'var(--danger)', '(' + nf(x0, 1) + '; ' + nf(y0, 2) + ')');
    $('${id}t').textContent = 'f(' + nf(x0, 1) + ') = ' + nf(y0, 2) + '   (usa a sentença ' + (x0 < c ? '1: x < ' + nf(c, 1) : '2: x ≥ ' + nf(c, 1)) + ')';
    $('${id}h').textContent = 'Em x = ' + nf(c, 1) + ' a primeira sentença vale ' + nf(m1 * c + b1, 2) + ' (bolinha vazia) e a segunda vale ' + nf(m2 * c + b2, 2) + ' (bolinha cheia). ' + (Math.abs((m1 * c + b1) - (m2 * c + b2)) < 1e-9 ? 'As duas coincidem: o gráfico é contínuo.' : 'Há um "salto": o gráfico é descontínuo em x = ' + nf(c, 1) + '.');
  });`
});

// composta: f(x) = a·x + b ; g(x) = c·x + d
const composta = id => ({
  html: W.box('Função composta f(g(x))',
    W.row(W.nm(id + 'fa', 'f(x) = a·x + b: a', 2, 1, 'min="-5" max="5"'), W.nm(id + 'fb', 'b', 1, 1, 'min="-9" max="9"'), W.nm(id + 'ga', 'g(x) = c·x + d: c', 3, 1, 'min="-5" max="5"'), W.nm(id + 'gb', 'd', -2, 1, 'min="-9" max="9"'), W.nm(id + 'x', 'x', 4, 1, 'min="-9" max="9"')) +
    W.txt(id + 't', 'f(g(x)) = ') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}fa', '${id}fb', '${id}ga', '${id}gb', '${id}x'], function(){
    var a = +$('${id}fa').value, b = +$('${id}fb').value, c = +$('${id}ga').value, d = +$('${id}gb').value, x = +$('${id}x').value;
    var gx = c * x + d, fgx = a * gx + b, gfx = c * (a * x + b) + d;
    function termo(m, n){ return (m === 0 ? '' : (m === 1 ? '' : m === -1 ? '−' : sgn(m)) + 'x') + (n === 0 ? (m === 0 ? '0' : '') : (m === 0 ? sgn(n) : (n < 0 ? ' − ' + fmtN(-n) : ' + ' + fmtN(n)))); }
    var A = a * c, B = a * d + b;
    $('${id}t').textContent = 'g(' + x + ') = ' + gx + '  →  f(g(' + x + ')) = f(' + gx + ') = ' + fgx + '   ·   (f∘g)(x) = ' + termo(A, B);
    $('${id}h').textContent = 'A ordem importa: (g∘f)(' + x + ') = ' + gfx + ' e (f∘g)(' + x + ') = ' + fgx + (gfx === fgx ? ' (aqui, iguais por coincidência).' : ' (diferentes: composição não é comutativa).');
  });`
});

// inversa: gráfico de f e f⁻¹ simétricos em relação a y = x
const inversa = id => ({
  html: W.box('Função e sua inversa: simetria em relação a y = x',
    W.row(W.sel(id + 'o', 'Função', ['f(x) = 2x + 1', 'f(x) = x³ (cúbica)', 'f(x) = 2ˣ (inversa: log₂ x)', 'f(x) = x + 3'])) +
    W.svg(id + 's', '0 0 560 340', '480px') + W.txt(id + 't', 'f e f⁻¹') + W.hint(id + 'h')),
  js: String.raw`
  bind(['${id}o'], function(){
    var o = +$('${id}o').value, svg = $('${id}s'), P = plano(svg, -6, 6, -6, 6, 560, 340, 2);
    var F = [function(x){ return 2 * x + 1; }, function(x){ return x * x * x; }, function(x){ return Math.pow(2, x); }, function(x){ return x + 3; }];
    var G = [function(x){ return (x - 1) / 2; }, function(x){ return Math.cbrt(x); }, function(x){ return x > 0 ? Math.log(x) / Math.log(2) : NaN; }, function(x){ return x - 3; }];
    var nomes = ['f⁻¹(x) = (x − 1) / 2', 'f⁻¹(x) = raiz cúbica de x', 'f⁻¹(x) = log₂ x', 'f⁻¹(x) = x − 3'];
    curva(svg, P, function(x){ return x; }, -6, 6, -6, 6, 'var(--ink-faint)');
    curva(svg, P, F[o], -6, 6, -6, 6, 'var(--primary)');
    curva(svg, P, G[o], -6, 6, -6, 6, 'var(--decay)');
    var pt = [[1, 3], [1, 1], [1, 2], [0, 3]][o]; ponto(svg, P, pt[0], F[o](pt[0]), 'var(--primary)', '(' + pt[0] + '; ' + nf(F[o](pt[0]), 2) + ')');
    ponto(svg, P, F[o](pt[0]), pt[0], 'var(--decay)', '(' + nf(F[o](pt[0]), 2) + '; ' + pt[0] + ')');
    $('${id}t').textContent = ['f(x) = 2x + 1', 'f(x) = x³', 'f(x) = 2ˣ', 'f(x) = x + 3'][o] + '   ·   ' + nomes[o];
    $('${id}h').textContent = 'Se (a; b) pertence ao gráfico de f, então (b; a) pertence ao gráfico de f⁻¹: os dois gráficos são simétricos em relação à reta y = x (cinza).';
  });`
});

module.exports = { expo, logf, partes, composta, inversa };
