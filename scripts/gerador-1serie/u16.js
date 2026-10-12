// Unidade 16 — Zeros da função quadrática, discriminante, soma e produto (aulas 42 a 45)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'zeros-da-funcao-quadratica', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u16', BRAND = 'Zeros da Função Quadrática', CAP = 'Aulas 42 a 45';
const pages = [];

const QJS = String.raw`
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'y = ' + s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function parabola(svg, f, xmin, xmax, ymin, ymax){ var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, passo(xmax - xmin), passo(ymax - ymin)), pts = []; for(var i = 0; i <= 120; i++){ var x = xmin + (xmax - xmin) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts); return P; }
`;

// ===================== AULA 1: zeros e discriminante =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 42 e 43', h1: 'Zeros da função quadrática: <span style="color:var(--primary);">onde a parábola toca o chão</span>',
  sub: 'A bola de golfe toca o chão em dois pontos: de onde saiu e onde caiu. Esses pontos são os zeros da função. O discriminante Δ avisa quantos existem.',
  badges: [['f(x) = 0'], ['Δ = b² − 4ac', 'growth'], ['0, 1 ou 2 zeros', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Quantos zeros e quais são.', [
  ['Zeros', 'valores de x que anulam f', 'bulb'],
  ['Discriminante', 'Δ decide a quantidade de zeros', 'target'],
  ['Bhaskara', 'x = (−b ± √Δ) ÷ 2a', 'chart'],
  ['Parâmetros', 'k para um zero dado ou zero único', 'link'],
  ['Gráfico', 'zeros no eixo x', 'scale']
]));
a.push(objetivosSlide([
  'Encontrar os <strong>zeros</strong> de uma função quadrática resolvendo $ax^{2} + bx + c = 0$.',
  'Usar o <strong>discriminante</strong> para prever <strong>0, 1 ou 2</strong> zeros.',
  'Ler os zeros no <strong>gráfico</strong> (onde a parábola corta o eixo $x$).',
  'Determinar <strong>parâmetros</strong> (como $k$ ou $m$) a partir de condições sobre os zeros.'
], 'Dica', 'Antes de resolver, calcule <strong>só o Δ</strong>: se for negativo, não há zero real e você já respondeu a pergunta “quantos zeros?”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Três lançamentos, três situações', `
          <div class="grid2">
            ${card('<strong>Golfista</strong><p style="font-size:.92rem;margin-top:8px;">A bola sai do chão, sobe e cai no buraco: <strong>2 pontos de contato</strong> com o chão.</p>', 'primary')}
            ${card('<strong>Bola que só toca no ponto de partida</strong><p style="font-size:.92rem;margin-top:8px;">Gráfico que apenas encosta no eixo: <strong>1 ponto de contato</strong>.</p>', 'growth')}
            ${card('<strong>Bola que nem chega ao chão</strong><p style="font-size:.92rem;margin-top:8px;">Em um modelo em que o gráfico fica todo acima do eixo: <strong>nenhum ponto de contato</strong>.</p>', 'decay')}
            ${mini('Se a parábola não toca o eixo $x$, o discriminante é:', ['Δ > 0', 'Δ = 0', 'Δ < 0', 'não dá para saber'], 2, 'Sem zeros reais: $Δ < 0$. A equação $ax^{2} + bx + c = 0$ não tem solução real.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · zeros e discriminante', 'Δ decide quantos zeros', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Zeros (raízes)</strong> de $f(x) = ax^{2} + bx + c$: valores de $x$ com $f(x) = 0$.</li>
                <li>$Δ = b^{2} − 4ac$ e $x = {−b ± √{Δ}|2a}$.</li>
                <li>$Δ > 0$: <strong>dois</strong> zeros reais distintos $x'$ e $x''$ (a parábola corta o eixo $x$ em dois pontos).</li>
                <li>$Δ = 0$: <strong>um</strong> zero (duplo): $x = −b ÷ 2a$ (a parábola <strong>toca</strong> o eixo no vértice).</li>
                <li>$Δ < 0$: <strong>nenhum</strong> zero real (a parábola não encontra o eixo $x$).</li>
              </ul>
            </div>
            ${W.box('Zeros e discriminante', W.row(W.nm('z1-a', 'a', 1, 'any'), W.nm('z1-b', 'b', 2, 'any'), W.nm('z1-c', 'c', -3, 'any')) + W.svg('z1-s', '0 0 360 230', '380px') + W.txt('z1-d', 'Δ = ') + W.txt('z1-r', 'Zeros: ') + W.hint('z1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Os seis casos', `
          ${tbl(['', 'Δ > 0', 'Δ = 0', 'Δ < 0'], [['a > 0 (∪)', 'corta o eixo x em dois pontos', 'toca o eixo x no vértice', 'fica toda acima do eixo x'], ['a < 0 (∩)', 'corta o eixo x em dois pontos', 'toca o eixo x no vértice', 'fica toda abaixo do eixo x']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Como ler', 'A <strong>concavidade</strong> vem de $a$; a <strong>posição em relação ao eixo $x$</strong> vem de $Δ$.', 'success')}
            ${callout('Zeros no gráfico', 'No gráfico, os zeros são as <strong>abscissas</strong> dos pontos em que a curva cruza ou toca o eixo $x$.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Zeros de f(x) = x² + 2x − 3', 'Determine os zeros da função $f(x) = x^{2} + 2x − 3$.', [
  ['Iguale a zero', '$x^{2} + 2x − 3 = 0$, com $a = 1$, $b = 2$ e $c = −3$.'],
  ['Discriminante', '$Δ = 4 − 4 · 1 · (−3) = 4 + 12 = 16 > 0$: dois zeros.'],
  ['Bhaskara', '$x = {−2 ± 4|2}$ ⇒ $x = 1$ ou $x = −3$.']
], 'Os zeros são $−3$ e $1$: a parábola corta o eixo $x$ em $(−3, 0)$ e $(1, 0)$.'));
a.push(exemplo('Exemplo resolvido', 'Descobrindo k', 'Calcule $k$ para que $f(x) = kx^{2} − 3x + 4$ tenha o número 4 como um de seus zeros.', [
  ['Zero significa f(4) = 0', '$k · 4^{2} − 3 · 4 + 4 = 0$.'],
  ['Simplifique', '$16k − 12 + 4 = 0$ ⇒ $16k = 8$.'],
  ['Isole k', '$k = 8 ÷ 16 = 0,5$.']
], '$k = 1/2$ (e $f(x) = 0,5x^{2} − 3x + 4$, que tem zeros $2$ e $4$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Um único zero', 'Para que valores de $m$ a função $f(x) = x^{2} + mx + 9$ tem um único zero?', [
  ['Δ = 0', 'Um único zero ⇒ $Δ = m^{2} − 4 · 1 · 9 = 0$.'],
  ['Resolva', '$m^{2} = 36$ ⇒ $m = 6$ ou $m = −6$.'],
  ['Confira', '$m = 6$: $(x + 3)^{2}$, zero $x = −3$. $m = −6$: $(x − 3)^{2}$, zero $x = 3$.']
], '$m = 6$ ou $m = −6$.', 'growth'));

a.push(pratique('Quantos zeros', 'A função $f(x) = x^{2} − 2x + 5$ tem quantos zeros reais?',
  ['0', '1', '2', '3', 'infinitos'], 0,
  '$Δ = 4 − 20 = −16 < 0$: nenhum zero real (a parábola fica toda acima do eixo $x$). <strong>Alternativa A.</strong>'));
a.push(pratique('Zero dado', 'A função $f(x) = kx^{2} − 3x + 4$ tem 4 como zero. O valor de $k$ é:',
  ['0,25', '0,5', '1', '2', '4'], 1,
  '$16k − 12 + 4 = 0$ ⇒ $k = 0,5$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Tangência', 'Para que a parábola de $y = x^{2} + mx + 9$ toque o eixo $x$ em um único ponto, com $m > 0$, é preciso que $m$ valha:',
  ['3', '4', '6', '9', '12'], 2,
  '$Δ = m^{2} − 36 = 0$ ⇒ $m = ±6$. Com $m > 0$: $m = 6$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os zeros enganam', [
  ['Sinal do Δ com c negativo', '$−4ac$ vira soma quando $a$ ou $c$ é negativo: $Δ = 4 + 12 = 16$.'],
  ['Esquecer o denominador 2a', 'Em $x = (−b ± √Δ) ÷ 2a$, divida tudo por $2a$, inclusive o $−b$.'],
  ['Dizer que Δ = 0 é “sem zero”', '$Δ = 0$ dá um zero (duplo), não nenhum.'],
  ['Confundir zero com corte em y', 'Zeros: $y = 0$ (eixo $x$). Corte em $y$: $x = 0$.']
]));
a.push(quiz([
  { q: 'O discriminante de $x^{2} + 2x − 3$ é:', o: ['−8', '4', '8', '16'], a: 3 },
  { q: 'Se $Δ = 0$, a parábola:', o: ['corta o eixo x em dois pontos', 'toca o eixo x em um ponto', 'não toca o eixo x', 'coincide com o eixo y'], a: 1 },
  { q: 'Os zeros de $x^{2} − 9$ são:', o: ['9', '−9 e 9', '−3 e 3', '3'], a: 2 },
  { q: 'Se $f(2) = 0$, então 2 é:', o: ['o vértice', 'um zero de f', 'o coeficiente a', 'o valor de c'], a: 1 }
]));
a.push(fechamento([
  ['Zeros', 'f(x) = 0; no gráfico, onde a curva encontra o eixo x.'],
  ['Δ', '> 0: dois; = 0: um; < 0: nenhum.'],
  ['Parâmetros', 'Zero dado: substitua. Zero único: Δ = 0.']
], 'Calcule o Δ primeiro: ele conta os zeros antes de você achá-los.'));

pages.push({ out: BASE + 'aula-1-zeros-e-discriminante.html', html: K.deck({
  title: 'Zeros e discriminante — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 42 e 43 · Zeros e discriminante', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['z1-a', 'z1-b', 'z1-c'], function(){ var a = +$('z1-a').value, b = +$('z1-b').value, c = +$('z1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('z1-d').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('z1-r').textContent = ''; return; }
    var d = b * b - 4 * a * c, xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, f = function(x){ return a * x * x + b * x + c; };
    var w = 4; if(d > 0) w = Math.max(w, Math.sqrt(d) / Math.abs(2 * a) + 2); var xmin = xv - w, xmax = xv + w, ys = [f(xmin), f(xmax), yv, 0], ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys), pd = (ymax - ymin) * 0.12 + 1;
    var P = parabola($('z1-s'), f, xmin, xmax, ymin - pd, ymax + pd); bola($('z1-s'), P, xv, yv, false, 'var(--decay)');
    $('z1-d').textContent = pt(b) + '² − 4 · ' + pt(a) + ' · ' + pt(c) + ' = ' + pt(d);
    if(d > 0){ var s = Math.sqrt(d), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); bola($('z1-s'), P, r1, 0, false, 'var(--growth)'); bola($('z1-s'), P, r2, 0, false, 'var(--growth)'); $('z1-r').textContent = 'dois zeros: x = ' + pt(Math.min(r1, r2)) + ' e x = ' + pt(Math.max(r1, r2)); $('z1-h').textContent = 'Δ > 0: a parábola corta o eixo x em dois pontos (verdes).'; }
    else if(d === 0){ bola($('z1-s'), P, xv, 0, false, 'var(--growth)'); $('z1-r').textContent = 'um zero: x = ' + pt(xv) + ' (duplo)'; $('z1-h').textContent = 'Δ = 0: a parábola toca o eixo x só no vértice.'; }
    else { $('z1-r').textContent = 'nenhum zero real'; $('z1-h').textContent = 'Δ < 0: a parábola ' + (a > 0 ? 'fica toda acima' : 'fica toda abaixo') + ' do eixo x.'; } });`
}) });

// ===================== AULA 2: soma e produto =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 44 e 45', h1: 'Soma e produto das raízes: <span style="color:var(--growth);">achar os zeros sem Bhaskara</span>',
  sub: 'Quando a = 1, as raízes são os dois números cuja soma é −b e cujo produto é c. Para festas, jardins e retângulos, é um atalho que também monta a equação.',
  badges: [['S = −b/a'], ['P = c/a', 'growth'], ['atalho: a = 1', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('De Bhaskara a um atalho.', [
  ['A relação', 'por que S e P existem', 'bulb'],
  ['Atalho', 'dois números com soma S e produto P', 'chart'],
  ['Quando falha', 'raízes irracionais: volte a Bhaskara', 'target'],
  ['Montar a equação', 'x² − Sx + P = 0', 'link'],
  ['Problemas', 'jardim, parâmetros e fatoração', 'scale']
]));
b.push(objetivosSlide([
  'Relacionar os coeficientes às raízes: <strong>$S = x_1 + x_2 = −b ÷ a$</strong> e <strong>$P = x_1 · x_2 = c ÷ a$</strong>.',
  'Achar raízes inteiras “no olho” pelo método de <strong>soma e produto</strong>.',
  'Reconhecer quando o método <strong>não se aplica</strong>.',
  'Construir a equação quadrática a partir de <strong>soma e produto</strong> dados.'
], 'Dica', 'Liste os pares de números com <strong>produto $c$</strong> e veja qual deles tem <strong>soma $−b$</strong>. Cuide dos sinais: produto negativo ⇒ sinais diferentes.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O jardim retangular', `
          ${lede('Um projeto de jardim retangular tem <strong>perímetro 22 m</strong> e <strong>área 24 m²</strong>. Quais são os lados? Em vez de resolver um sistema, observe: o semiperímetro é $11$ (soma dos lados) e a área é $24$ (produto dos lados). Dois números com <strong>soma 11</strong> e <strong>produto 24</strong>…')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Os lados do jardim, em metros, são:', ['2 e 12', '3 e 8', '4 e 6', '1 e 24'], 1, '$3 + 8 = 11$ e $3 · 8 = 24$. Os lados são <strong>3 m e 8 m</strong> (os outros pares têm produto 24, mas soma diferente de 11).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Os dois lados são as raízes de $x^{2} − 11x + 24 = 0$: soma $11$ e produto $24$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · soma e produto', 'S = −b ÷ a e P = c ÷ a', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Se $x'$ e $x''$ são as raízes de $ax^{2} + bx + c = 0$: <strong>$S = x' + x'' = −{b|a}$</strong> e <strong>$P = x' · x'' = {c|a}$</strong>.</li>
                <li>Com $a = 1$: soma $= −b$ e produto $= c$.</li>
                <li>Equação a partir de $S$ e $P$: <strong>$x^{2} − Sx + P = 0$</strong>.</li>
                <li>O método brilha com raízes <strong>inteiras</strong>; com raízes irracionais, use Bhaskara.</li>
              </ul>
            </div>
            ${W.box('Soma e produto (a = 1)', W.row(W.nm('s1-b', 'b', -6, 'any'), W.nm('s1-c', 'c', 8, 'any')) + W.txt('s1-s', 'Soma S = −b: ') + W.txt('s1-p', 'Produto P = c: ') + W.txt('s1-r', 'Raízes: ') + W.hint('s1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Raízes por soma e produto', 'Resolva $x^{2} − 6x + 8 = 0$ e $x^{2} + 2x − 15 = 0$ sem usar Bhaskara.', [
  ['Primeira equação', '$S = 6$ e $P = 8$. Pares de produto 8: $(2, 4)$ tem soma $6$ ✓. Raízes: $2$ e $4$.'],
  ['Segunda equação', '$S = −2$ e $P = −15$. Produto negativo: sinais diferentes. $(3, −5)$ tem soma $−2$ ✓. Raízes: $3$ e $−5$.'],
  ['Confira', '$2^{2} − 6 · 2 + 8 = 0$ ✓ e $3^{2} + 2 · 3 − 15 = 0$ ✓.']
], 'Raízes: $\\{2, 4\\}$ e $\\{−5, 3\\}$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Quando o atalho não aparece', 'Resolva $x^{2} − 4x + 1 = 0$.', [
  ['Tente soma e produto', '$S = 4$ e $P = 1$. Não há inteiros com produto 1 e soma 4.'],
  ['Volte a Bhaskara', '$Δ = 16 − 4 = 12 > 0$: há duas raízes reais, mas irracionais.'],
  ['Calcule', '$x = {4 ± √{12}|2} = 2 ± √{3}$.']
], 'Raízes $2 + √{3}$ e $2 − √{3}$ (soma $4$ e produto $1$: o atalho continua válido, só não é “no olho”).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Descobrindo k pela soma', 'Em $f(x) = x^{2} − kx + 20$, a soma das raízes é 9. Determine $k$ e as raízes.', [
  ['Soma das raízes', '$S = −b ÷ a = −(−k) ÷ 1 = k$. Logo $k = 9$.'],
  ['Equação', '$x^{2} − 9x + 20 = 0$: $S = 9$ e $P = 20$.'],
  ['Raízes', 'Pares de produto 20: $(4, 5)$ tem soma $9$ ✓.']
], '$k = 9$ e as raízes são $4$ e $5$.', 'growth'));

b.push(pratique('Soma e produto', 'As raízes de $x^{2} + 2x − 15 = 0$ são:',
  ['3 e 5', '−3 e 5', '3 e −5', '−3 e −5', '1 e −15'], 2,
  '$S = −2$ e $P = −15$: $3 + (−5) = −2$ e $3 · (−5) = −15$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Montando a equação', 'Dois números têm soma $7$ e produto $12$. Eles são raízes de:',
  ['x² − 12x + 7 = 0', 'x² − 7x + 12 = 0', 'x² + 7x + 12 = 0', 'x² − 7x − 12 = 0', 'x² + 7x − 12 = 0'], 1,
  '$x^{2} − Sx + P = 0$ ⇒ $x^{2} − 7x + 12 = 0$ (raízes $3$ e $4$). <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('O terreno retangular', 'Um terreno retangular tem perímetro de 22 m e área de 24 m². Qual é a medida do <strong>maior</strong> lado?',
  ['3 m', '4 m', '6 m', '8 m', '11 m'], 3,
  'Semiperímetro (soma dos lados): $11$; área (produto): $24$. Equação: $x^{2} − 11x + 24 = 0$, raízes $3$ e $8$. Maior lado: $8$ m. <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde soma e produto escorregam', [
  ['Sinal da soma', 'A soma das raízes é $−b$ (com $a = 1$). Em $x^{2} − 6x + 8$, a soma é $+6$.'],
  ['Esquecer o a', 'Com $a ≠ 1$: $S = −b ÷ a$ e $P = c ÷ a$.'],
  ['Produto negativo', 'As raízes têm <strong>sinais opostos</strong>; a de maior módulo tem o sinal de $S$.'],
  ['Forçar inteiros', 'Se não há par de inteiros, as raízes não são inteiras: use Bhaskara.']
]));
b.push(quiz([
  { q: 'A soma das raízes de $x^{2} − 6x + 8 = 0$ é:', o: ['−6', '6', '8', '−8'], a: 1 },
  { q: 'O produto das raízes de $x^{2} + 4x + 4 = 0$ é:', o: ['−4', '4', '8', '16'], a: 1 },
  { q: 'Raízes com soma 5 e produto 6 formam a equação:', o: ['x² − 5x + 6 = 0', 'x² + 5x + 6 = 0', 'x² − 6x + 5 = 0', 'x² − 5x − 6 = 0'], a: 0 },
  { q: 'Em $2x^{2} − 10x + 12 = 0$, a soma das raízes é:', o: ['−5', '5', '6', '−6'], a: 1 }
]));
b.push(fechamento([
  ['Relações', 'S = −b/a e P = c/a.'],
  ['Atalho', 'Par de inteiros com produto c e soma −b.'],
  ['Equação', 'x² − Sx + P = 0 reconstrói a equação.']
], 'Soma, produto e conferência: o atalho que também monta equações.'));

pages.push({ out: BASE + 'aula-2-soma-e-produto.html', html: K.deck({
  title: 'Soma e produto das raízes — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 44 e 45 · Soma e produto', slides: b,
  extra: WJS + BIND + QJS + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['s1-b', 's1-c'], function(){ var b = +$('s1-b').value, c = +$('s1-c').value; if(!isFinite(b) || !isFinite(c)){ $('s1-s').textContent = '—'; return; }
    var S = -b, P = c; $('s1-s').textContent = pt(S); $('s1-p').textContent = pt(P); var d = b * b - 4 * c;
    if(d < 0){ $('s1-r').textContent = 'sem raízes reais (Δ = ' + pt(d) + ')'; $('s1-h').textContent = 'Não há dois reais com essa soma e esse produto.'; return; }
    var s = Math.sqrt(d), x1 = (-b - s) / 2, x2 = (-b + s) / 2, inteiro = Math.abs(x1 - Math.round(x1)) < 1e-9 && Math.abs(x2 - Math.round(x2)) < 1e-9;
    $('s1-r').textContent = pt(x1) + ' e ' + pt(x2) + (d === 0 ? ' (raiz dupla)' : '');
    $('s1-h').textContent = inteiro ? 'Raízes inteiras: ' + pt(x1) + ' + ' + pt(x2) + ' = ' + pt(x1 + x2) + ' e ' + pt(x1) + ' · ' + pt(x2) + ' = ' + pt(x1 * x2) + '.' : 'Raízes não inteiras: o atalho “no olho” não funciona, use Bhaskara.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Zeros da função quadrática: <span>Δ, Bhaskara, soma e produto</span>',
  lede: 'Quantos zeros, quais são e como achá-los mais rápido: discriminante, fórmula de Bhaskara, soma e produto, e parâmetros que impõem condições aos zeros.',
  badges: ['Δ = b² − 4ac', 'S = −b/a', 'P = c/a'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Zeros', 'f(x) = 0', 'chart', 'primary', p('No gráfico: abscissas dos pontos no eixo $x$.') + call('Exemplo', 'x² + 2x − 3: zeros −3 e 1.', 'success')],
    ['Discriminante', 'Quantos zeros', 'target', 'growth', li(['Δ > 0: dois zeros.', 'Δ = 0: um zero (duplo).', 'Δ < 0: nenhum zero real.'])],
    ['Bhaskara', 'Fórmula', 'scale', 'decay', p('$x = {−b ± √{Δ}|2a}$') + call('Cuidado', 'Divida tudo por 2a.', 'danger')],
    ['Soma e produto', 'Atalho', 'link', 'success', p('$S = −{b|a}$ · $P = {c|a}$') + call('Exemplo', 'x² − 6x + 8: 2 e 4.', 'success')],
    ['Parâmetros', 'k e m', 'up', 'primary', li(['Zero dado: substitua.', 'Zero único: Δ = 0.', 'Soma dada: −b/a = S.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Δ negativo? Sem zeros reais.', 'Substitua as raízes na equação.', 'Contexto: descarte raízes sem sentido.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Errar o sinal de −4ac.', 'Esquecer o 2a no denominador.', 'Dizer que Δ = 0 não tem zero.', 'Confundir zero com corte em y.', 'Forçar raízes inteiras onde não existem.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Zeros da função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: zeros, parâmetro, quantidade de zeros, soma e produto e tangência.',
  final: 'Δ conta os zeros, Bhaskara os acha e soma e produto os confere.',
  questions: [
    { badge: 'Estilo ENEM · zeros', text: 'Considere $f(x) = x^{2} − 6x + 5$.', cmd: 'Os zeros de $f$ são:', opts: ['−1 e −5', '1 e 5', '−1 e 5', '1 e −5', '2 e 3'], a: 1,
      sol: '<p>$S = 6$ e $P = 5$: $1 + 5 = 6$ e $1 · 5 = 5$. Zeros $1$ e $5$.</p>' },
    { badge: 'Estilo ENEM · parâmetro', text: 'A função $f(x) = kx^{2} − 3x + 4$ tem o número 4 como um de seus zeros.', cmd: 'O valor de $k$ é:', opts: ['0,25', '0,5', '1', '2', '4'], a: 1,
      sol: '<p>$f(4) = 16k − 12 + 4 = 0$ ⇒ $16k = 8$ ⇒ $k = 0,5$.</p>' },
    { badge: 'Estilo ENEM · quantidade de zeros', text: 'Considere a função $f(x) = x^{2} − 2x + 5$.', cmd: 'O número de zeros reais de $f$ é:', opts: ['0', '1', '2', '3', 'infinitos'], a: 0,
      sol: '<p>$Δ = 4 − 20 = −16 < 0$: nenhum zero real.</p>' },
    { badge: 'Estilo ENEM · soma e produto', text: 'Um terreno retangular tem perímetro de 22 m e área de 24 m².', cmd: 'A medida do maior lado, em metros, é:', opts: ['3', '4', '6', '8', '11'], a: 3,
      sol: '<p>Soma dos lados: $11$; produto: $24$. $x^{2} − 11x + 24 = 0$: raízes $3$ e $8$.</p>' },
    { badge: 'Estilo ENEM · zero duplo', text: 'A parábola $y = x^{2} + mx + 9$, com $m > 0$, toca o eixo $x$ em um único ponto.', cmd: 'O valor de $m$ é:', opts: ['3', '4', '6', '9', '12'], a: 2,
      sol: '<p>$Δ = m^{2} − 36 = 0$ ⇒ $m = ±6$; com $m > 0$, $m = 6$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique pelo <span style="color:var(--growth);">discriminante</span>',
  subtitle: 'Quantos zeros tem cada função? Calcule o Δ e classifique.',
  tpl: cClassificar({
    cats: ['Δ > 0 (dois zeros)', 'Δ = 0 (um zero)', 'Δ < 0 (nenhum zero)'],
    intro: 'Cada cartão traz uma função. Calcule $Δ = b^{2} − 4ac$, escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Δ positivo: dois zeros; nulo: um; negativo: nenhum — e só depende de a, b e c.',
    itens: [
      ['$x^{2} − 5x + 6$', 0, '$Δ = 25 − 24 = 1 > 0$.'],
      ['$x^{2} − 6x + 9$', 1, '$Δ = 36 − 36 = 0$ (zero duplo em $x = 3$).'],
      ['$x^{2} + x + 1$', 2, '$Δ = 1 − 4 = −3 < 0$.'],
      ['$2x^{2} − 8$', 0, '$Δ = 0 − 4 · 2 · (−8) = 64 > 0$ (zeros $±2$).'],
      ['$x^{2} + 4$', 2, '$Δ = 0 − 16 = −16 < 0$.'],
      ['$−x^{2} + 4x − 4$', 1, '$Δ = 16 − 16 = 0$ (zero duplo em $x = 2$).'],
      ['$x^{2} − 2x − 3$', 0, '$Δ = 4 + 12 = 16 > 0$.'],
      ['$3x^{2} + 2x + 1$', 2, '$Δ = 4 − 12 = −8 < 0$.'],
      ['$x^{2} + 8x + 16$', 1, '$Δ = 64 − 64 = 0$ (zero duplo em $x = −4$).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Zeros da função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: soma, raiz, discriminante, parâmetro e problema. Digite o número pedido.',
  final: 'Você percorreu a trilha: soma, zeros, Δ, parâmetro e jardim.',
  problems: [
    { tag: 'Soma', q: 'Qual a soma das raízes de $x^{2} − 6x + 8 = 0$?', a: 6, ph: 'S', hint: 'S = −b/a.', sol: '<p>$S = 6$.</p>' },
    { tag: 'Zeros', q: 'Qual a <strong>menor</strong> raiz de $x^{2} − 6x + 8 = 0$?', a: 2, ph: 'x', hint: 'Soma 6, produto 8.', sol: '<p>$2$ e $4$: a menor é $2$.</p>' },
    { tag: 'Discriminante', q: 'Qual o valor de $Δ$ para $2x^{2} − 3x − 5$?', a: 49, ph: 'Δ', hint: 'b² − 4ac = 9 + 40.', sol: '<p>$9 − 4 · 2 · (−5) = 49$.</p>' },
    { tag: 'Parâmetro', q: 'Para que $f(x) = kx^{2} − 3x + 4$ tenha o zero $x = 4$, qual o valor de $k$?', a: 0.5, ph: 'k', hint: '16k − 12 + 4 = 0.', sol: '<p>$k = 0,5$.</p>' },
    { tag: 'Jardim', q: 'Um jardim retangular tem perímetro 22 m e área 24 m². Qual o <strong>maior</strong> lado (m)?', a: 8, ph: 'm', hint: 'Soma 11, produto 24.', sol: '<p>$x^{2} − 11x + 24 = 0$ ⇒ $3$ e $8$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Zeros da Função Quadrática', accent: 'decay', icon: 'algebra',
  aulas: [['Aulas 42–43', 'Zeros e discriminante', 'aula-1-zeros-e-discriminante.html'], ['Aulas 44–45', 'Soma e produto', 'aula-2-soma-e-produto.html']],
  enem: 'Zeros da função quadrática no estilo ENEM', cria: 'Classifique pelo discriminante', pratica: 'Zeros da função quadrática: trilha de desafios'
}, pages };
