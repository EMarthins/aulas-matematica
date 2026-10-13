// Unidade v02 — Zeros da função quadrática: Bhaskara, discriminante, soma e produto (aulas 3 a 6 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'zeros-soma-produto', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v02', BRAND = 'Zeros, Soma e Produto', CAP = 'Aulas 3 a 6';
const pages = [];

// ===================== AULA 1: zeros e discriminante =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 3 e 4', h1: 'Zeros da função quadrática: <span style="color:var(--primary);">onde a parábola toca o chão</span>',
  sub: 'Um golfinho salta e volta à água: os dois pontos de contato com a superfície são os zeros da função. O discriminante Δ avisa quantos existem antes de calcular.',
  badges: [['f(x) = 0'], ['Δ = b² − 4ac', 'growth'], ['0, 1 ou 2 zeros', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Quantos zeros e quais são.', [
  ['Zeros', 'valores de x com f(x) = 0', 'bulb'],
  ['Discriminante', 'Δ decide a quantidade', 'target'],
  ['Bhaskara', 'x = (−b ± √Δ) ÷ 2a', 'chart'],
  ['Gráfico', 'cortes no eixo x', 'link'],
  ['Parâmetros', 'k que impõe uma condição', 'scale']
]));
a.push(objetivosSlide([
  'Encontrar os <strong>zeros</strong> de $f(x) = ax^{2} + bx + c$ resolvendo $ax^{2} + bx + c = 0$.',
  'Usar o <strong>discriminante</strong> para decidir entre <strong>0, 1 ou 2</strong> zeros reais.',
  'Ler os zeros no <strong>gráfico</strong> (cortes no eixo $x$).',
  'Determinar <strong>parâmetros</strong> a partir de condições sobre os zeros.'
], 'Dica', 'Calcule primeiro o <strong>Δ</strong>: se for negativo, a parábola não toca o eixo $x$ e você já respondeu à pergunta “quantos zeros?”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O salto do golfinho', `
          ${lede('Um golfinho salta e sua altura (m) é $h(x) = −x^{2} + 6x$, com $x$ a distância horizontal (m) desde o ponto de saída. Quando ele volta à água, $h = 0$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['x (m)', 'h (m)'], [['0', '0'], ['1', '5'], ['3', '9'], ['5', '5'], ['6', '0']])}
            ${mini('Em que distância o golfinho volta à água?', ['3 m', '6 m', '9 m', '12 m'], 1, '$−x^{2} + 6x = 0$ ⇒ $x(6 − x) = 0$ ⇒ $x = 0$ ou $x = 6$. Os zeros são $0$ e $6$: o alcance do salto é 6 m.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · zeros e discriminante', 'Δ decide quantos zeros', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Zeros:</strong> $x$ tais que $f(x) = 0$ (abscissas dos pontos em que a parábola corta o eixo $x$).</li>
                <li>$Δ = b^{2} − 4ac$ e $x = {−b ± √{Δ}|2a}$ (Bhaskara).</li>
                <li>$Δ > 0$: <strong>dois</strong> zeros reais distintos.</li>
                <li>$Δ = 0$: <strong>um</strong> zero (duplo): a parábola <strong>toca</strong> o eixo no vértice.</li>
                <li>$Δ < 0$: <strong>nenhum</strong> zero real.</li>
              </ul>
            </div>
            ${W.box('Zeros e discriminante', W.row(W.nm('z-a', 'a', 1, 'any'), W.nm('z-b', 'b', -6, 'any'), W.nm('z-c', 'c', 8, 'any')) + W.svg('z-s', '0 0 360 230', '380px') + W.txt('z-d', 'Δ = ') + W.txt('z-r', 'Zeros: ') + W.hint('z-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Os seis casos', `
          ${tbl(['', 'Δ > 0', 'Δ = 0', 'Δ < 0'], [['a > 0 (∪)', 'corta o eixo x em 2 pontos', 'toca o eixo x no vértice', 'toda acima do eixo x'], ['a < 0 (∩)', 'corta o eixo x em 2 pontos', 'toca o eixo x no vértice', 'toda abaixo do eixo x']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Como ler', 'A <strong>concavidade</strong> vem de $a$; a <strong>posição em relação ao eixo $x$</strong> vem de $Δ$.', 'success')}
            ${callout('Zero duplo', 'Em $x^{2} − 6x + 9$, $Δ = 0$ e o único zero é $x = 3$: $(x − 3)^{2}$.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Dois zeros', 'Determine os zeros de $f(x) = x^{2} − 6x + 8$.', [
  ['Discriminante', '$Δ = 36 − 32 = 4 > 0$.'],
  ['Bhaskara', '$x = {6 ± 2|2}$ ⇒ $x = 4$ ou $x = 2$.']
], 'Zeros $2$ e $4$.'));
a.push(exemplo('Exemplo resolvido', 'Coeficientes diferentes de 1', 'Resolva $2x^{2} − 3x − 5 = 0$.', [
  ['Discriminante', '$Δ = 9 − 4 · 2 · (−5) = 9 + 40 = 49$.'],
  ['Bhaskara', '$x = {3 ± 7|4}$ ⇒ $x = 2,5$ ou $x = −1$.']
], 'Zeros $−1$ e $2,5$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quantos zeros?', 'Quantos zeros reais têm $f(x) = x^{2} − 4x + 5$ e $g(x) = x^{2} − 6x + 9$?', [
  ['Para $f$', '$Δ = 16 − 20 = −4 < 0$: nenhum zero.'],
  ['Para $g$', '$Δ = 36 − 36 = 0$: um zero ($x = 3$).']
], '$f$ não tem zeros reais; $g$ tem um (duplo).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Determinando k', 'Para que valores de $k$ a função $f(x) = x^{2} − 4x + k$ tem <strong>um único zero</strong>? E <strong>nenhum</strong>?', [
  ['Δ', '$Δ = 16 − 4k$.'],
  ['Único zero', '$Δ = 0$ ⇒ $k = 4$.'],
  ['Nenhum zero', '$Δ < 0$ ⇒ $16 − 4k < 0$ ⇒ $k > 4$.']
], 'Um zero para $k = 4$; nenhum para $k > 4$.', 'growth'));

a.push(pratique('Maior zero', 'O maior zero de $f(x) = x^{2} − 6x + 8$ é:',
  ['2', '3', '4', '6', '8'], 2,
  '$Δ = 4$; $x = (6 ± 2) ÷ 2$: $2$ e $4$. <strong>Alternativa C.</strong>'));
a.push(pratique('Quantidade de zeros', 'A função $f(x) = x^{2} − 4x + 5$ tem quantos zeros reais?',
  ['0', '1', '2', '3', 'infinitos'], 0,
  '$Δ = 16 − 20 < 0$. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(estiloEnem('Raiz dupla', 'Para que a parábola $y = x^{2} − 4x + k$ toque o eixo $x$ em um único ponto, $k$ deve valer:',
  ['1', '2', '4', '8', '16'], 2,
  '$Δ = 16 − 4k = 0$ ⇒ $k = 4$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os zeros enganam', [
  ['Sinal do Δ com c negativo', '$−4ac$ vira soma quando $a$ ou $c$ é negativo: $Δ = 9 + 40 = 49$.'],
  ['Esquecer o denominador 2a', 'Em $(−b ± √Δ) ÷ 2a$, divida tudo por $2a$, inclusive o $−b$.'],
  ['Δ = 0 não é “sem zero”', 'Dá um zero (duplo).'],
  ['Zero × corte em y', 'Zeros: $y = 0$. Corte em $y$: $x = 0$.']
]));
a.push(quiz([
  { q: 'O discriminante de $x^{2} − 6x + 8$ é:', o: ['−4', '4', '12', '68'], a: 1 },
  { q: 'Se $Δ = 0$, a parábola:', o: ['corta o eixo x duas vezes', 'toca o eixo x uma vez', 'não toca o eixo x', 'corta o eixo y'], a: 1 },
  { q: 'Os zeros de $x^{2} − 9$ são:', o: ['9', '3', '−3 e 3', 'não existem'], a: 2 },
  { q: 'Se $f(2) = 0$, então 2 é:', o: ['o vértice', 'um zero de f', 'o valor de c', 'o valor de a'], a: 1 }
]));
a.push(fechamento([
  ['Zeros', '$f(x) = 0$; cortes no eixo $x$.'],
  ['Δ', '> 0: dois · = 0: um · < 0: nenhum.'],
  ['Bhaskara', '$x = (−b ± √Δ) ÷ 2a$.']
], 'Calcule o Δ primeiro: ele conta os zeros antes de você achá-los.'));

pages.push({ out: BASE + 'aula-1-zeros-e-discriminante.html', html: K.deck({
  title: 'Zeros e discriminante — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 3 e 4 · Zeros e discriminante', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['z-a', 'z-b', 'z-c'], function(){ var a = +$('z-a').value, b = +$('z-b').value, c = +$('z-c').value;
    if(![a, b, c].every(isFinite) || a === 0){ $('z-s').innerHTML = ''; $('z-d').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('z-r').textContent = ''; $('z-h').textContent = ''; return; }
    var d = b * b - 4 * a * c, j = janela(a, b, c), P = parabola($('z-s'), j.f, j.xmin, j.xmax, j.ymin, j.ymax), xv = -b / (2 * a); bola($('z-s'), P, xv, j.f(xv), false, 'var(--decay)');
    $('z-d').textContent = (b < 0 ? '(' + pt(b) + ')' : pt(b)) + '² − 4 · ' + pt(a) + ' · ' + pt(c) + ' = ' + pt(d);
    if(d > 0){ var s = Math.sqrt(d), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); bola($('z-s'), P, r1, 0, false, 'var(--growth)'); bola($('z-s'), P, r2, 0, false, 'var(--growth)'); $('z-r').textContent = 'dois zeros: x = ' + pt(Math.min(r1, r2)) + ' e x = ' + pt(Math.max(r1, r2)); $('z-h').textContent = 'Δ > 0: a parábola corta o eixo x em dois pontos (verdes).'; }
    else if(d === 0){ bola($('z-s'), P, xv, 0, false, 'var(--growth)'); $('z-r').textContent = 'um zero: x = ' + pt(xv) + ' (duplo)'; $('z-h').textContent = 'Δ = 0: a parábola toca o eixo x só no vértice.'; }
    else { $('z-r').textContent = 'nenhum zero real'; $('z-h').textContent = 'Δ < 0: a parábola ' + (a > 0 ? 'fica toda acima' : 'fica toda abaixo') + ' do eixo x.'; } });`
}) });

// ===================== AULA 2: soma e produto =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 5 e 6', h1: 'Soma e produto das raízes: <span style="color:var(--growth);">sem Bhaskara</span>',
  sub: 'Quando as raízes são inteiras, basta achar dois números com a soma e o produto certos. O atalho também monta a equação e responde sem nem calcular as raízes.',
  badges: [['S = −b/a'], ['P = c/a', 'growth'], ['x² − Sx + P = 0', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('De Bhaskara a um atalho.', [
  ['As relações', 'S = −b/a e P = c/a', 'bulb'],
  ['Raízes inteiras', 'par com soma S e produto P', 'target'],
  ['Montar a equação', 'x² − Sx + P = 0', 'chart'],
  ['Sem achar as raízes', 'x₁² + x₂², 1/x₁ + 1/x₂', 'link'],
  ['Problemas', 'perímetro, área e parâmetros', 'scale']
]));
b.push(objetivosSlide([
  'Relacionar coeficientes e raízes: <strong>$S = x_1 + x_2 = −b ÷ a$</strong> e <strong>$P = x_1 · x_2 = c ÷ a$</strong>.',
  'Achar raízes inteiras “no olho” pelo método de <strong>soma e produto</strong>.',
  '<strong>Montar a equação</strong> $x^{2} − Sx + P = 0$ a partir de $S$ e $P$.',
  'Calcular expressões simétricas das raízes (como $x_1^{2} + x_2^{2}$) <strong>sem</strong> resolver a equação.'
], 'Dica', 'Cuide dos sinais: produto <strong>negativo</strong> ⇒ raízes de sinais opostos; produto positivo e soma positiva ⇒ as duas positivas.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O retângulo de perímetro 26', `
          ${lede('Um terreno retangular tem <strong>perímetro 26 m</strong> e <strong>área 40 m²</strong>. A soma dos lados vale $13$ (semiperímetro) e o produto, $40$. Quais as medidas?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Pares com produto 40', 'Soma'], [['1 e 40', '41'], ['2 e 20', '22'], ['4 e 10', '14'], ['5 e 8', '13 ✓']])}
            ${mini('Os lados do terreno medem:', ['4 m e 10 m', '5 m e 8 m', '2 m e 20 m', '6 m e 7 m'], 1, '$5 + 8 = 13$ e $5 · 8 = 40$. São as raízes de $x^{2} − 13x + 40 = 0$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · soma e produto', 'S = −b ÷ a e P = c ÷ a', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Para $ax^{2} + bx + c = 0$ com raízes $x_1$ e $x_2$: <strong>$S = −{b|a}$</strong> e <strong>$P = {c|a}$</strong>.</li>
                <li>Equação a partir de $S$ e $P$: <strong>$x^{2} − Sx + P = 0$</strong>.</li>
                <li>Expressões simétricas: <strong>$x_1^{2} + x_2^{2} = S^{2} − 2P$</strong> e <strong>$1 ÷ x_1 + 1 ÷ x_2 = S ÷ P$</strong>.</li>
                <li>Com raízes inteiras o método “no olho” é rápido; senão, use Bhaskara.</li>
              </ul>
            </div>
            ${W.box('Soma, produto e raízes', W.row(W.nm('s-a', 'a', 1, 'any'), W.nm('s-b', 'b', -13, 'any'), W.nm('s-c', 'c', 40, 'any')) + W.txt('s-s', 'Soma S = −b/a = ') + W.txt('s-p', 'Produto P = c/a = ') + W.txt('s-q', 'x₁² + x₂² = S² − 2P = ') + W.txt('s-r', 'Raízes: ') + W.hint('s-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Raízes por soma e produto', 'Resolva $x^{2} − 13x + 40 = 0$ e $x^{2} + 2x − 15 = 0$ sem Bhaskara.', [
  ['Primeira', '$S = 13$ e $P = 40$: $5 + 8 = 13$ e $5 · 8 = 40$ ⇒ raízes $5$ e $8$.'],
  ['Segunda', '$S = −2$ e $P = −15$: $3$ e $−5$ ($3 − 5 = −2$ e $3 · (−5) = −15$).']
], '$\\{5, 8\\}$ e $\\{−5, 3\\}$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Montando a equação', 'Escreva uma equação do 2º grau cujas raízes são $2$ e $−5$.', [
  ['Soma e produto', '$S = 2 + (−5) = −3$; $P = 2 · (−5) = −10$.'],
  ['Equação', '$x^{2} − Sx + P = x^{2} + 3x − 10 = 0$.']
], '$x^{2} + 3x − 10 = 0$ (confira: $4 + 6 − 10 = 0$ ✓).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Sem achar as raízes', 'Sendo $x_1$ e $x_2$ as raízes de $x^{2} − 5x + 3 = 0$, calcule $x_1^{2} + x_2^{2}$ e ${1|x_1} + {1|x_2}$.', [
  ['S e P', '$S = 5$ e $P = 3$.'],
  ['Soma dos quadrados', '$S^{2} − 2P = 25 − 6 = 19$.'],
  ['Soma dos inversos', '${x_1 + x_2|x_1 x_2} = {S|P} = {5|3}$.']
], '$x_1^{2} + x_2^{2} = 19$ e a soma dos inversos vale ${5|3}$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Descobrindo k', 'Em $x^{2} − kx + 12 = 0$ a soma das raízes é 7. Determine $k$ e as raízes.', [
  ['Soma', '$S = k = 7$.'],
  ['Equação', '$x^{2} − 7x + 12 = 0$.'],
  ['Raízes', '$P = 12$ e $S = 7$: $3$ e $4$.']
], '$k = 7$ e raízes $3$ e $4$.', 'growth'));

b.push(pratique('Soma e produto', 'As raízes de $x^{2} + 2x − 15 = 0$ são:',
  ['3 e 5', '−3 e 5', '3 e −5', '−3 e −5', '1 e −15'], 2,
  '$S = −2$ e $P = −15$: $3$ e $−5$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Soma dos quadrados', 'Se $x_1$ e $x_2$ são as raízes de $x^{2} − 5x + 3 = 0$, então $x_1^{2} + x_2^{2}$ vale:',
  ['13', '19', '22', '25', '28'], 1,
  '$25 − 6 = 19$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('O terreno', 'Um terreno retangular tem perímetro 26 m e área 40 m². A medida do maior lado, em metros, é:',
  ['5', '6', '8', '13', '40'], 2,
  '$x^{2} − 13x + 40 = 0$ ⇒ $5$ e $8$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde soma e produto escorregam', [
  ['Sinal da soma', 'A soma é $−b$ (com $a = 1$): em $x^{2} − 13x + 40$, a soma é $+13$.'],
  ['Esquecer o a', 'Com $a ≠ 1$: $S = −b ÷ a$ e $P = c ÷ a$.'],
  ['Forçar inteiros', 'Se não há par de inteiros, as raízes não são inteiras (use Bhaskara).'],
  ['Trocar S e P na equação', 'A equação é $x^{2} − Sx + P = 0$ (o sinal de $S$ muda).']
]));
b.push(quiz([
  { q: 'A soma das raízes de $x^{2} − 6x + 8 = 0$ é:', o: ['−6', '6', '8', '−8'], a: 1 },
  { q: 'O produto das raízes de $2x^{2} − 10x + 12 = 0$ é:', o: ['5', '6', '10', '12'], a: 1 },
  { q: 'Raízes com soma 5 e produto 6 formam a equação:', o: ['$x^{2} − 5x + 6 = 0$', '$x^{2} + 5x + 6 = 0$', '$x^{2} − 6x + 5 = 0$', '$x^{2} − 5x − 6 = 0$'], a: 0 },
  { q: '$x_1^{2} + x_2^{2}$ é igual a:', o: ['$S^{2}$', '$S^{2} − 2P$', '$S − 2P$', '$S^{2} + 2P$'], a: 1 }
]));
b.push(fechamento([
  ['Relações', '$S = −b ÷ a$ e $P = c ÷ a$.'],
  ['Equação', '$x^{2} − Sx + P = 0$.'],
  ['Simétricas', '$x_1^{2} + x_2^{2} = S^{2} − 2P$.']
], 'Soma, produto e conferência: o atalho que também monta equações.'));

pages.push({ out: BASE + 'aula-2-soma-e-produto.html', html: K.deck({
  title: 'Soma e produto das raízes — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 5 e 6 · Soma e produto', slides: b,
  extra: WJS + BIND + QJS + String.raw`
  bind(['s-a', 's-b', 's-c'], function(){ var a = +$('s-a').value, b = +$('s-b').value, c = +$('s-c').value;
    if(![a, b, c].every(isFinite) || a === 0){ ['s-s', 's-p', 's-q', 's-r'].forEach(function(i){ $(i).textContent = '—'; }); $('s-h').textContent = 'a deve ser diferente de 0.'; return; }
    var S = -b / a, P = c / a, d = b * b - 4 * a * c;
    $('s-s').textContent = pt(S, 4); $('s-p').textContent = pt(P, 4); $('s-q').textContent = pt(S * S - 2 * P, 4);
    if(d < 0){ $('s-r').textContent = 'sem raízes reais (Δ = ' + pt(d) + ')'; $('s-h').textContent = 'S e P existem como números complexos, mas aqui não há raízes reais.'; return; }
    var s = Math.sqrt(d), x1 = (-b - s) / (2 * a), x2 = (-b + s) / (2 * a), inteiro = Math.abs(x1 - Math.round(x1)) < 1e-9 && Math.abs(x2 - Math.round(x2)) < 1e-9;
    $('s-r').textContent = pt(x1, 4) + ' e ' + pt(x2, 4) + (d === 0 ? ' (raiz dupla)' : '');
    $('s-h').textContent = inteiro ? 'Raízes inteiras: ' + pt(x1) + ' + ' + pt(x2) + ' = ' + pt(x1 + x2) + ' e ' + pt(x1) + ' · ' + pt(x2) + ' = ' + pt(x1 * x2) + '.' : 'Raízes não inteiras: o atalho “no olho” não funciona, use Bhaskara.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Zeros da função quadrática: <span>Δ, Bhaskara, soma e produto</span>',
  lede: 'Quantos zeros, quais são e como achá-los mais rápido: discriminante, fórmula de Bhaskara, soma e produto das raízes e problemas com parâmetros.',
  badges: ['Δ = b² − 4ac', 'S = −b/a', 'P = c/a'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Zeros', 'f(x) = 0', 'chart', 'primary', p('Abscissas dos cortes no eixo $x$.') + call('Exemplo', '$x^{2} − 6x + 8$: 2 e 4.', 'success')],
    ['Discriminante', 'Quantos zeros', 'target', 'growth', li(['Δ > 0: dois.', 'Δ = 0: um (duplo).', 'Δ < 0: nenhum real.'])],
    ['Bhaskara', 'Fórmula', 'scale', 'decay', p('$x = {−b ± √{Δ}|2a}$') + call('Cuidado', 'Divida tudo por 2a.', 'danger')],
    ['Soma e produto', 'Atalho', 'link', 'success', p('$S = −{b|a}$ · $P = {c|a}$') + call('Equação', '$x^{2} − Sx + P = 0$.', 'success')],
    ['Simétricas', 'Sem as raízes', 'up', 'primary', li(['$x_1^{2} + x_2^{2} = S^{2} − 2P$.', 'Soma dos inversos: $S ÷ P$.', 'Evite resolver se não precisa.'])],
    ['Parâmetros', 'k impõe condição', 'check', 'growth', li(['Zero único: Δ = 0.', 'Sem zeros: Δ < 0.', 'Soma dada: $−b ÷ a = S$.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Errar o sinal de −4ac.', 'Esquecer o 2a no denominador.', 'Dizer que Δ = 0 não tem zero.', 'Trocar o sinal de S na equação.', 'Forçar raízes inteiras onde não existem.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Zeros da função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: maior zero, quantidade, raiz dupla, terreno e soma dos quadrados.',
  final: 'Δ conta os zeros, Bhaskara os acha e soma e produto os confere.',
  questions: [
    { badge: 'Estilo ENEM · zeros', text: 'Considere $f(x) = x^{2} − 6x + 8$.', cmd: 'O maior zero de $f$ é:', opts: ['2', '3', '4', '6', '8'], a: 2,
      sol: '<p>$S = 6$ e $P = 8$: zeros $2$ e $4$.</p>' },
    { badge: 'Estilo ENEM · quantidade de zeros', text: 'Considere $f(x) = x^{2} − 4x + 5$.', cmd: 'O número de zeros reais de $f$ é:', opts: ['0', '1', '2', '3', 'infinitos'], a: 0,
      sol: '<p>$Δ = 16 − 20 = −4 < 0$.</p>' },
    { badge: 'Estilo ENEM · raiz dupla', text: 'A parábola $y = x^{2} − 4x + k$ toca o eixo $x$ em um único ponto.', cmd: 'O valor de $k$ é:', opts: ['1', '2', '4', '8', '16'], a: 2,
      sol: '<p>$Δ = 16 − 4k = 0$ ⇒ $k = 4$.</p>' },
    { badge: 'Estilo ENEM · terreno', text: 'Um terreno retangular tem perímetro 26 m e área 40 m².', cmd: 'A medida do maior lado, em metros, é:', opts: ['5', '6', '8', '13', '40'], a: 2,
      sol: '<p>$x^{2} − 13x + 40 = 0$ ⇒ lados $5$ e $8$.</p>' },
    { badge: 'Estilo ENEM · soma dos quadrados', text: 'Sejam $x_1$ e $x_2$ as raízes de $x^{2} − 5x + 3 = 0$.', cmd: 'O valor de $x_1^{2} + x_2^{2}$ é:', opts: ['13', '19', '22', '25', '28'], a: 1,
      sol: '<p>$S^{2} − 2P = 25 − 6 = 19$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique pelo <span style="color:var(--growth);">discriminante</span>',
  subtitle: 'Quantos zeros tem cada função? Calcule o Δ e classifique.',
  tpl: cClassificar({
    cats: ['Δ > 0 (dois zeros)', 'Δ = 0 (um zero)', 'Δ < 0 (nenhum zero)'],
    intro: 'Cada cartão traz uma função. Calcule $Δ = b^{2} − 4ac$, escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Δ positivo: dois zeros; nulo: um; negativo: nenhum.',
    itens: [
      ['$x^{2} − 7x + 10$', 0, '$Δ = 49 − 40 = 9 > 0$.'],
      ['$x^{2} − 10x + 25$', 1, '$Δ = 100 − 100 = 0$ (zero duplo em $x = 5$).'],
      ['$x^{2} + x + 2$', 2, '$Δ = 1 − 8 = −7 < 0$.'],
      ['$2x^{2} − 8$', 0, '$Δ = 0 + 64 = 64 > 0$ (zeros $±2$).'],
      ['$x^{2} + 9$', 2, '$Δ = 0 − 36 < 0$.'],
      ['$−x^{2} + 6x − 9$', 1, '$Δ = 36 − 36 = 0$ (zero duplo em $x = 3$).'],
      ['$x^{2} − x − 6$', 0, '$Δ = 1 + 24 = 25 > 0$.'],
      ['$3x^{2} + x + 1$', 2, '$Δ = 1 − 12 = −11 < 0$.'],
      ['$x^{2} + 4x + 4$', 1, '$Δ = 16 − 16 = 0$ (zero duplo em $x = −2$).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Zeros da função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: Δ, raiz, parâmetro, soma e lado do terreno. Digite o número pedido.',
  final: 'Você percorreu a trilha: Δ, zeros, parâmetro, soma e problema.',
  problems: [
    { tag: 'Discriminante', q: 'Qual o valor de $Δ$ para $2x^{2} − 3x − 5$?', a: 49, ph: 'Δ', hint: '9 + 40.', sol: '<p>$49$.</p>' },
    { tag: 'Raiz', q: 'Qual a <strong>maior</strong> raiz de $2x^{2} − 3x − 5 = 0$?', a: 2.5, ph: 'x', hint: '(3 + 7) ÷ 4.', sol: '<p>$2,5$.</p>' },
    { tag: 'Parâmetro', q: 'Para qual $k$ a função $x^{2} − 4x + k$ tem um único zero?', a: 4, ph: 'k', hint: 'Δ = 0.', sol: '<p>$k = 4$.</p>' },
    { tag: 'Soma', q: 'Qual a soma das raízes de $2x^{2} − 10x + 8 = 0$?', a: 5, ph: 'S', hint: '−b ÷ a.', sol: '<p>$5$.</p>' },
    { tag: 'Terreno', q: 'Perímetro 26 m e área 40 m²: qual o maior lado (m)?', a: 8, ph: 'm', hint: 'Soma 13, produto 40.', sol: '<p>$8$ m.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Zeros, Soma e Produto', accent: 'decay', icon: 'algebra',
  aulas: [['Aulas 3–4', 'Zeros e discriminante', 'aula-1-zeros-e-discriminante.html'], ['Aulas 5–6', 'Soma e produto das raízes', 'aula-2-soma-e-produto.html']],
  enem: 'Zeros da função quadrática no estilo ENEM', cria: 'Classifique pelo discriminante', pratica: 'Zeros da função quadrática: trilha de desafios'
}, pages };
