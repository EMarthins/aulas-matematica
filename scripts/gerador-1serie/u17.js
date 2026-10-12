// Unidade 17 — Vértice, valor máximo e mínimo, imagem da função quadrática (aulas 46 a 50)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'vertice-maximo-minimo-e-imagem', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u17', BRAND = 'Vértice, Máximo, Mínimo e Imagem', CAP = 'Aulas 46 a 50';
const pages = [];

const QJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'y = ' + s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function parabola(svg, f, xmin, xmax, ymin, ymax, x0, x1){ var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, passo(xmax - xmin), passo(ymax - ymin)), pts = [], a = x0 == null ? xmin : x0, b = x1 == null ? xmax : x1; for(var i = 0; i <= 120; i++){ var x = a + (b - a) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts); return P; }
  function eixo(svg, P, xv, ymin, ymax){ el('line', {x1: P.sx(xv), y1: P.sy(ymin), x2: P.sx(xv), y2: P.sy(ymax), stroke: 'var(--decay)', 'stroke-width': 1.5, 'stroke-dasharray': '6 5'}, svg); }
`;

// ===================== AULA 1: vértice =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 46 e 47', h1: 'O vértice da parábola: <span style="color:var(--primary);">o ponto de virada</span>',
  sub: 'No topo do salto, o skatista para de subir e começa a descer. Na parábola, esse ponto é o vértice: o mais alto (a < 0) ou o mais baixo (a > 0). Uma reta vertical o atravessa: o eixo de simetria.',
  badges: [['xᵥ = −b/2a'], ['yᵥ = −Δ/4a', 'growth'], ['eixo x = xᵥ', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('O ponto mais importante da parábola.', [
  ['Vértice e eixo de simetria', 'o que são e como se relacionam', 'bulb'],
  ['Fórmulas', 'xᵥ = −b ÷ 2a e yᵥ = f(xᵥ)', 'chart'],
  ['Forma canônica', 'y = a(x − xᵥ)² + yᵥ', 'link'],
  ['Em contexto', 'arcos, taças e túneis', 'target'],
  ['Parâmetros', 'vértice dá condições sobre a, b e c', 'scale']
]));
a.push(objetivosSlide([
  'Calcular as <strong>coordenadas do vértice</strong> $(x_v, y_v)$.',
  'Usar o <strong>eixo de simetria</strong> $x = x_v$ para achar pontos e zeros.',
  'Escrever a função na <strong>forma canônica</strong> $y = a(x − x_v)^{2} + y_v$.',
  'Resolver problemas em que o <strong>vértice</strong> é dado ou procurado.'
], 'Dica', 'Primeiro ache $x_v = −b ÷ 2a$; depois obtenha $y_v$ <strong>substituindo $x_v$ na função</strong> (quase sempre mais fácil do que usar $−Δ ÷ 4a$).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O half-pipe e a formiguinha', `
          ${lede('Imagine uma formiguinha caminhando pela rampa em forma de “U” (um half-pipe). Ela desce até o ponto <strong>mais baixo</strong> e depois sobe do outro lado: o ponto em que ela muda de direção é o <strong>vértice</strong>. Em uma parábola “∩”, o vértice é o ponto <strong>mais alto</strong>. Pelo vértice passa uma reta vertical que divide a parábola em duas metades espelhadas.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O eixo de simetria da parábola $y = x^{2} − 4x + 3$ é a reta:', ['x = −2', 'x = 2', 'x = 4', 'x = 3'], 1, '$x_v = −b ÷ 2a = 4 ÷ 2 = 2$. Os zeros ($1$ e $3$) estão à mesma distância de $x = 2$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Vértice: $V = (x_v, y_v)$ com $x_v = −{b|2a}$ e $y_v = f(x_v)$. Pontos à mesma distância do eixo têm a <strong>mesma altura</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · coordenadas do vértice', 'x do vértice, y do vértice', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$x_v = −{b|2a}$</strong> (é a média dos zeros, quando existem).</li>
                <li><strong>$y_v = f(x_v)$</strong>; equivalentemente $y_v = −{Δ|4a}$.</li>
                <li><strong>$a > 0$</strong>: vértice é o ponto de <strong>mínimo</strong>. <strong>$a < 0$</strong>: ponto de <strong>máximo</strong>.</li>
                <li>Eixo de simetria: reta <strong>$x = x_v$</strong>.</li>
                <li>Forma canônica: $y = a(x − x_v)^{2} + y_v$.</li>
              </ul>
            </div>
            ${W.box('Calculadora de vértice', W.row(W.nm('v1-a', 'a', -2, 'any'), W.nm('v1-b', 'b', 4, 'any'), W.nm('v1-c', 'c', -5, 'any')) + W.svg('v1-s', '0 0 360 230', '380px') + W.txt('v1-v', 'Vértice: ') + W.txt('v1-t', 'Tipo: ') + W.txt('v1-f', 'Forma canônica: ') + W.hint('v1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Vértice de f(x) = −2x² + 4x − 5', 'Determine as coordenadas do vértice da parábola de $f(x) = −2x^{2} + 4x − 5$.', [
  ['Abscissa', '$x_v = −{4|2 · (−2)} = −{4|−4} = 1$.'],
  ['Ordenada', '$y_v = f(1) = −2 + 4 − 5 = −3$.'],
  ['Tipo', '$a = −2 < 0$: o vértice é ponto de <strong>máximo</strong>.']
], '$V = (1, −3)$: valor máximo $−3$ em $x = 1$.'));
a.push(exemplo('Exemplo resolvido', 'A taça tangente ao eixo', 'Em $f(x) = x^{2} − 4x + C$, o vértice está sobre o eixo $x$ (a parábola é tangente ao eixo). Determine $C$.', [
  ['Abscissa do vértice', '$x_v = −{−4|2} = 2$.'],
  ['Vértice no eixo x: yᵥ = 0', '$f(2) = 4 − 8 + C = 0$.'],
  ['Isole C', '$C = 4$.']
], '$C = 4$: $f(x) = (x − 2)^{2}$, com vértice em $(2, 0)$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Pela forma canônica', 'A parábola tem vértice $(2, −1)$ e passa por $(0, 3)$. Determine sua lei.', [
  ['Forma canônica', '$y = a(x − 2)^{2} − 1$.'],
  ['Use o ponto (0, 3)', '$3 = a(0 − 2)^{2} − 1 = 4a − 1$ ⇒ $a = 1$.'],
  ['Desenvolva', '$y = (x − 2)^{2} − 1 = x^{2} − 4x + 3$.']
], '$y = x^{2} − 4x + 3$.', 'growth'));

a.push(pratique('Vértice', 'O vértice da parábola de $f(x) = x^{2} − 6x + 5$ é:',
  ['(3, −4)', '(−3, −4)', '(3, 4)', '(6, 5)', '(−6, 5)'], 0,
  '$x_v = 6 ÷ 2 = 3$; $y_v = 9 − 18 + 5 = −4$. <strong>Alternativa A.</strong>'));
a.push(pratique('Arco de ponte', 'O arco de uma ponte tem altura (em metros) dada por $y = −x^{2} + 8x$, com $x$ a distância horizontal a partir de um dos pés do arco. A altura máxima do arco é:',
  ['4 m', '8 m', '16 m', '32 m', '64 m'], 2,
  '$x_v = 8 ÷ 2 = 4$; $y_v = −16 + 32 = 16$. Altura máxima de $16$ m, no meio do arco (a base tem 8 m de largura: zeros $0$ e $8$). <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Parâmetro e vértice', 'O gráfico de $f(x) = x^{2} − 4x + C$ é tangente ao eixo das abscissas. O valor de $C$ é:',
  ['−4', '0', '2', '4', '8'], 3,
  'Tangente: vértice sobre o eixo $x$. $x_v = 2$ e $f(2) = 4 − 8 + C = 0$ ⇒ $C = 4$. (Também: $Δ = 16 − 4C = 0$.) <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o vértice engana', [
  ['Sinal de b', '$x_v = −b ÷ 2a$: em $x^{2} − 6x + 5$, $b = −6$ e $x_v = +3$.'],
  ['yᵥ sem substituir', 'Depois de $x_v$, substitua <strong>na função</strong>: evita a conta do $Δ$.'],
  ['Trocar máximo e mínimo', '$a > 0$: mínimo; $a < 0$: máximo.'],
  ['Vértice como zero', 'O vértice só é zero quando $Δ = 0$.']
]));
a.push(quiz([
  { q: 'A abscissa do vértice de $y = −x^{2} + 8x$ é:', o: ['−4', '4', '8', '16'], a: 1 },
  { q: 'O vértice de $y = x^{2} − 6x + 5$ é:', o: ['(3, −4)', '(−3, −4)', '(3, 4)', '(−3, 4)'], a: 0 },
  { q: 'Se $a > 0$, o vértice é ponto de:', o: ['máximo', 'mínimo', 'inflexão', 'zero'], a: 1 },
  { q: 'Os zeros de uma parábola são $1$ e $5$. O eixo de simetria é:', o: ['x = 1', 'x = 3', 'x = 5', 'x = 6'], a: 1 }
]));
a.push(fechamento([
  ['Vértice', 'V = (−b/2a, f(−b/2a)).'],
  ['Eixo', 'x = xᵥ; zeros simétricos em relação a ele.'],
  ['Forma canônica', 'y = a(x − xᵥ)² + yᵥ para achar a lei.']
], 'Ache xᵥ, substitua e interprete: ponto de máximo ou de mínimo.'));

pages.push({ out: BASE + 'aula-1-vertice-da-parabola.html', html: K.deck({
  title: 'Vértice da parábola — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 46 e 47 · Vértice da parábola', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['v1-a', 'v1-b', 'v1-c'], function(){ var a = +$('v1-a').value, b = +$('v1-b').value, c = +$('v1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('v1-v').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('v1-t').textContent = ''; $('v1-f').textContent = ''; return; }
    var xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, d = b * b - 4 * a * c, f = function(x){ return a * x * x + b * x + c; };
    var w = 4; if(d > 0) w = Math.max(w, Math.sqrt(d) / Math.abs(2 * a) + 2); var xmin = xv - w, xmax = xv + w, ys = [f(xmin), f(xmax), yv, 0], ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys), pd = (ymax - ymin) * 0.12 + 1; ymin -= pd; ymax += pd;
    var P = parabola($('v1-s'), f, xmin, xmax, ymin, ymax); eixo($('v1-s'), P, xv, ymin, ymax); bola($('v1-s'), P, xv, yv, false, 'var(--decay)');
    $('v1-v').textContent = '(' + pt(xv) + '; ' + pt(yv) + ')  com xᵥ = −(' + pt(b) + ') ÷ (2 · ' + pt(a) + ')'; $('v1-t').textContent = a > 0 ? 'ponto de mínimo (a > 0): menor valor ' + pt(yv) : 'ponto de máximo (a < 0): maior valor ' + pt(yv);
    $('v1-f').textContent = 'y = ' + pt(a) + '(x ' + (xv >= 0 ? '− ' + pt(xv) : '+ ' + pt(-xv)) + ')² ' + (yv >= 0 ? '+ ' + pt(yv) : '− ' + pt(-yv)); $('v1-h').textContent = 'A reta tracejada é o eixo de simetria x = ' + pt(xv) + '.'; });`
}) });

// ===================== AULA 2: máximo, mínimo e imagem =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 48 a 50', h1: 'Máximo, mínimo e imagem: <span style="color:var(--growth);">o melhor (ou o pior) valor possível</span>',
  sub: 'Qual o maior lucro? A maior área com uma cerca de tamanho fixo? Até onde sobe a bola? A resposta é o y do vértice — e ele também descreve o conjunto imagem da função.',
  badges: [['valor máximo (a < 0)'], ['valor mínimo (a > 0)', 'growth'], ['Im = [yᵥ, +∞) ou (−∞, yᵥ]', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('De problemas de otimização ao conjunto imagem.', [
  ['Máximo e mínimo', 'o que o vértice significa no contexto', 'bulb'],
  ['Qual variável?', 'x do vértice ou y do vértice', 'target'],
  ['Otimização', 'lucro, área e altura', 'chart'],
  ['Conjunto imagem', 'intervalo a partir do yᵥ', 'link'],
  ['Domínio restrito', 'tempo e quantidade', 'scale']
]));
b.push(objetivosSlide([
  'Decidir se a função tem <strong>valor máximo ou mínimo</strong> pelo sinal de $a$.',
  'Resolver problemas de <strong>otimização</strong>: lucro, área, altura.',
  'Escrever o <strong>conjunto imagem</strong> a partir de $y_v$ e da concavidade.',
  'Diferenciar <strong>“para que x”</strong> (use $x_v$) de <strong>“qual o valor”</strong> (use $y_v$).'
], 'Dica', 'A pergunta diz o que usar: <strong>“quantas unidades para o lucro máximo?”</strong> pede $x_v$; <strong>“qual é o lucro máximo?”</strong> pede $y_v$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Dois números, dois significados', `
          ${lede('Em $y = −5x^{2} + 60x$, que representa a altura de um objeto no tempo $x$: o <strong>$x$ do vértice</strong> é <strong>o instante</strong> em que a altura é máxima e o <strong>$y$ do vértice</strong> é <strong>a altura máxima</strong>. Perguntas diferentes, valores diferentes do mesmo ponto.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Em $h(t) = −5t^{2} + 20t$, a altura máxima atingida é:', ['2 m', '10 m', '20 m', '40 m'], 2, '$t_v = 20 ÷ 10 = 2$ s e $h(2) = −20 + 40 = 20$ m. <strong>Altura máxima: 20 m</strong> (atingida em 2 s).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$a < 0$: valor <strong>máximo</strong> $= y_v$. $a > 0$: valor <strong>mínimo</strong> $= y_v$. A <strong>imagem</strong> vai de $y_v$ para o infinito no sentido da abertura.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · imagem', 'O conjunto imagem a partir do vértice', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$a > 0$: $Im = [y_v, +∞[ = \\{y ∈ ℝ | y ≥ y_v\\}$.</li>
                <li>$a < 0$: $Im = ]−∞, y_v] = \\{y ∈ ℝ | y ≤ y_v\\}$.</li>
                <li>Se o domínio é restrito (tempo de $0$ a $T$, por exemplo), compare $y_v$ <strong>e os valores nas pontas</strong> do intervalo.</li>
                <li>O valor máximo ou mínimo <strong>só existe</strong> se o vértice estiver dentro do domínio.</li>
              </ul>
            </div>
            ${W.box('Máximo, mínimo e imagem', W.row(W.nm('m1-a', 'a', -5, 'any'), W.nm('m1-b', 'b', 20, 'any'), W.nm('m1-c', 'c', 0, 'any')) + W.row(W.nm('m1-x0', 'x mínimo do domínio', 0, 'any'), W.nm('m1-x1', 'x máximo do domínio', 4, 'any')) + W.svg('m1-s', '0 0 360 230', '380px') + W.txt('m1-v', 'Vértice: ') + W.txt('m1-e', 'No domínio: ') + W.txt('m1-i', 'Imagem: ') + W.hint('m1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Cerca de 40 metros', 'Um agricultor tem 40 m de tela e quer cercar um terreno retangular, com um dos lados medindo $x$. Qual a maior área possível?', [
  ['Lado e área', 'Se um lado mede $x$, o outro mede $20 − x$ (semiperímetro 20). $A(x) = x(20 − x) = −x^{2} + 20x$.'],
  ['Vértice', '$x_v = −{20|2 · (−1)} = 10$ e $A(10) = −100 + 200 = 100$.'],
  ['Interprete', 'Lados iguais ($10$ e $10$): um <strong>quadrado</strong>.']
], 'Área máxima: <strong>100 m²</strong>, com lados de $10$ m.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Lucro máximo', 'O lucro mensal é $L(x) = −x^{2} + 240x − 8\\ 000$ (reais), com $x$ unidades. Quantas unidades dão o lucro máximo e qual é ele?', [
  ['Número de unidades', '$x_v = −{240|2 · (−1)} = 120$.'],
  ['Lucro máximo', '$L(120) = −14\\ 400 + 28\\ 800 − 8\\ 000 = 6\\ 400$.'],
  ['Resposta com unidade', '120 unidades e R$ 6 400.']
], 'Produzir <strong>120 unidades</strong> leva ao lucro máximo de <strong>6 400 reais</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Conjunto imagem', 'Determine o conjunto imagem de $f(x) = x^{2} − 2x − 3$ definida em $ℝ$.', [
  ['Concavidade', '$a = 1 > 0$: abre para cima, tem mínimo.'],
  ['Vértice', '$x_v = 1$ e $y_v = 1 − 2 − 3 = −4$.'],
  ['Conjunto imagem', 'Os valores partem de $−4$ e crescem sem limite.']
], '$Im(f) = [−4, +∞[$ (menor valor: $−4$).', 'growth'));

b.push(pratique('Cercando um terreno', 'Com 40 m de tela, a maior área retangular que se pode cercar é:',
  ['80 m²', '96 m²', '100 m²', '120 m²', '400 m²'], 2,
  '$A = x(20 − x)$ tem máximo em $x = 10$: $A = 100$ m². <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Imagem', 'O conjunto imagem da função $f(x) = x^{2} − 2x − 3$ é:',
  ['[−3, +∞[', '[−4, +∞[', ']−∞, −4]', ']−∞, 4]', '[1, +∞['], 1,
  '$a > 0$ e $y_v = −4$: $Im = [−4, +∞[$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Lucro máximo', 'O lucro de uma loja é $L(x) = −x^{2} + 240x − 8\\ 000$ reais, em que $x$ é o número de unidades vendidas. O número de unidades que produz o lucro máximo é:',
  ['80', '100', '120', '160', '200'], 2,
  '$x_v = −b ÷ 2a = 240 ÷ 2 = 120$. <strong>Alternativa C.</strong> (O lucro máximo seria $L(120) = 6\\ 400$.)'));

b.push(armadilhas('Cuidados', 'Onde máximo e mínimo escorregam', [
  ['Responder com o valor errado', '“Quantas unidades?” é $x_v$; “qual o lucro?” é $y_v$.'],
  ['Imagem com colchete trocado', '$Im = [y_v, +∞[$ para $a > 0$ e $]−∞, y_v]$ para $a < 0$.'],
  ['Ignorar o domínio do contexto', 'Se $x$ é tempo de 0 a 4 s, a imagem é o intervalo entre os extremos dentro de $[0, 4]$.'],
  ['Máximo com a positivo', 'Com $a > 0$ não há máximo (a função cresce sem limite).']
]));
b.push(quiz([
  { q: 'O valor máximo de $h(t) = −5t^{2} + 20t$ é:', o: ['2', '20', '40', '10'], a: 1 },
  { q: 'Em $f(x) = x^{2} − 2x − 3$, o valor mínimo é:', o: ['−3', '−4', '1', '4'], a: 1 },
  { q: 'Se $a < 0$ e $y_v = 5$, a imagem é:', o: ['[5, +∞[', ']−∞, 5]', 'ℝ', ']−∞, −5]'], a: 1 },
  { q: 'Com 40 m de tela, o retângulo de maior área é:', o: ['10 por 10', '5 por 15', '8 por 12', '2 por 18'], a: 0 }
]));
b.push(fechamento([
  ['Máximo e mínimo', 'a < 0: máximo yᵥ; a > 0: mínimo yᵥ.'],
  ['Qual valor', 'xᵥ responde “quando/quantos”; yᵥ responde “quanto vale”.'],
  ['Imagem', 'Parte de yᵥ no sentido da abertura da parábola.']
], 'No vértice mora a resposta de todo problema de otimização.'));

pages.push({ out: BASE + 'aula-2-maximo-minimo-e-imagem.html', html: K.deck({
  title: 'Máximo, mínimo e imagem — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 48 a 50 · Máximo, mínimo e imagem', slides: b,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['m1-a', 'm1-b', 'm1-c', 'm1-x0', 'm1-x1'], function(){ var a = +$('m1-a').value, b = +$('m1-b').value, c = +$('m1-c').value, x0 = +$('m1-x0').value, x1 = +$('m1-x1').value;
    if(![a, b, c, x0, x1].every(isFinite) || a === 0 || x0 >= x1){ $('m1-v').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('m1-e').textContent = ''; $('m1-i').textContent = ''; $('m1-h').textContent = x0 >= x1 ? 'O x mínimo deve ser menor que o x máximo.' : ''; return; }
    var f = function(x){ return a * x * x + b * x + c; }, xv = -b / (2 * a), yv = f(xv), dentro = xv >= x0 && xv <= x1, v0 = f(x0), v1 = f(x1);
    var mx = Math.max(v0, v1, dentro ? yv : -Infinity), mn = Math.min(v0, v1, dentro ? yv : Infinity), pad = (mx - mn) * 0.15 + 1;
    var P = parabola($('m1-s'), f, x0 - (x1 - x0) * 0.1, x1 + (x1 - x0) * 0.1, Math.min(mn, 0) - pad, Math.max(mx, 0) + pad, x0, x1); if(dentro) bola($('m1-s'), P, xv, yv, false, 'var(--decay)'); bola($('m1-s'), P, x0, v0, false, 'var(--primary)'); bola($('m1-s'), P, x1, v1, false, 'var(--primary)');
    $('m1-v').textContent = '(' + pt(xv) + '; ' + pt(yv) + ') — ' + (a > 0 ? 'mínimo' : 'máximo') + (dentro ? ' dentro do domínio' : ' fora do domínio');
    $('m1-e').textContent = 'máximo ' + pt(mx) + ' · mínimo ' + pt(mn); $('m1-i').textContent = '[' + pt(mn) + '; ' + pt(mx) + ']  para x em [' + pt(x0) + '; ' + pt(x1) + ']';
    $('m1-h').textContent = dentro ? 'O vértice está no domínio: compare-o com as pontas.' : 'O vértice está fora: os extremos ocorrem nas pontas do domínio.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Vértice, máximo, mínimo e imagem: <span>otimizando com a parábola</span>',
  lede: 'Coordenadas do vértice, eixo de simetria, forma canônica, problemas de máximo e mínimo e o conjunto imagem de uma função quadrática.',
  badges: ['xᵥ = −b/2a', 'yᵥ = f(xᵥ)', 'Im a partir de yᵥ'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Vértice', 'Ponto de virada', 'chart', 'primary', p('$x_v = −{b|2a}$ · $y_v = f(x_v)$') + call('Exemplo', 'x² − 6x + 5: V = (3, −4).', 'success')],
    ['Eixo de simetria', 'x = xᵥ', 'link', 'growth', p('Zeros e pontos de mesma altura são simétricos.') + call('Atenção', 'xᵥ é a média dos zeros.', 'success')],
    ['Forma canônica', 'a(x − xᵥ)² + yᵥ', 'target', 'decay', p('Dados vértice e um ponto, ache $a$.') + call('Exemplo', 'V(2, −1) e (0, 3): a = 1.', 'success')],
    ['Máximo e mínimo', 'Sinal de a', 'up', 'success', li(['a < 0: valor máximo yᵥ.', 'a > 0: valor mínimo yᵥ.', 'xᵥ: “quando/quantos”.'])],
    ['Imagem', 'Intervalo', 'scale', 'primary', p('$a > 0$: $[y_v, +∞[$ · $a < 0$: $]−∞, y_v]$') + call('Domínio restrito', 'Compare yᵥ com as pontas.', 'danger')],
    ['Otimização', 'Lucro, área, altura', 'check', 'growth', li(['Monte a função quadrática.', 'Ache o vértice.', 'Responda com a unidade.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Errar o sinal de b em −b/2a.', 'Responder xᵥ quando pedem yᵥ.', 'Imagem com intervalo no sentido errado.', 'Esquecer o domínio de contexto.', 'Chamar de máximo o vértice de uma parábola com a > 0.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Vértice, máximo e imagem <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: vértice, tangência, lucro máximo, cerca e conjunto imagem.',
  final: 'xᵥ responde “quanto/quando”, yᵥ responde “qual o valor” — e a imagem parte de yᵥ.',
  questions: [
    { badge: 'Estilo ENEM · vértice', text: 'Considere $f(x) = −2x^{2} + 4x − 5$.', cmd: 'O vértice da parábola é:', opts: ['(1, −3)', '(−1, −11)', '(2, −5)', '(1, −5)', '(−1, 3)'], a: 0,
      sol: '<p>$x_v = −{4|−4} = 1$; $y_v = −2 + 4 − 5 = −3$. $V = (1, −3)$.</p>' },
    { badge: 'Estilo ENEM · tangência', text: 'O gráfico de $f(x) = x^{2} − 4x + C$ é tangente ao eixo das abscissas.', cmd: 'O valor de $C$ é:', opts: ['−4', '0', '2', '4', '8'], a: 3,
      sol: '<p>$x_v = 2$; $f(2) = 4 − 8 + C = 0$ ⇒ $C = 4$.</p>' },
    { badge: 'Estilo ENEM · lucro máximo', text: 'O lucro de uma loja é $L(x) = −x^{2} + 240x − 8\\ 000$ reais, com $x$ unidades vendidas.', cmd: 'O número de unidades que dá o lucro máximo é:', opts: ['80', '100', '120', '160', '200'], a: 2,
      sol: '<p>$x_v = 240 ÷ 2 = 120$ unidades.</p>' },
    { badge: 'Estilo ENEM · cerca', text: 'Um agricultor tem 40 m de tela para cercar um terreno retangular.', cmd: 'A maior área possível, em m², é:', opts: ['80', '96', '100', '120', '400'], a: 2,
      sol: '<p>Lados $x$ e $20 − x$: $A = −x^{2} + 20x$, máxima em $x = 10$: $A = 100$.</p>' },
    { badge: 'Estilo ENEM · imagem', text: 'Seja $f: ℝ → ℝ$ dada por $f(x) = x^{2} − 2x − 3$.', cmd: 'O conjunto imagem de $f$ é:', opts: ['[−3, +∞[', '[−4, +∞[', ']−∞, −4]', ']−∞, 4]', '[1, +∞['], a: 1,
      sol: '<p>$a > 0$; $y_v = f(1) = −4$. $Im = [−4, +∞[$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'primary',
  h1: 'Verdadeiro ou falso: <span style="color:var(--primary);">vértice e imagem</span>',
  subtitle: 'Julgue as afirmações sobre vértice, máximo e imagem.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Vértice = ponto de virada; yᵥ é o máximo (a < 0) ou o mínimo (a > 0); a imagem parte de yᵥ.',
    afirmacoes: [
      ['A abscissa do vértice de $y = ax^{2} + bx + c$ é $−b ÷ 2a$.', true, 'Verdadeira: é também a média dos zeros, quando existem.'],
      ['Se $a > 0$, a função tem valor máximo.', false, 'Falsa: com $a > 0$ o vértice é ponto de <strong>mínimo</strong>.'],
      ['Pontos à mesma distância do eixo de simetria têm a mesma altura.', true, 'Verdadeira: a parábola é simétrica em relação à reta $x = x_v$.'],
      ['A imagem de $f(x) = −x^{2} + 4$ é $[4, +∞[$.', false, 'Falsa: $a < 0$ e $y_v = 4$, então $Im = ]−∞, 4]$.'],
      ['O valor máximo de $h(t) = −5t^{2} + 20t$ é 20.', true, 'Verdadeira: $t_v = 2$ e $h(2) = −20 + 40 = 20$.'],
      ['Se os zeros de uma parábola são 1 e 5, o eixo de simetria é $x = 3$.', true, 'Verdadeira: $x_v$ é a média dos zeros: $(1 + 5) ÷ 2 = 3$.'],
      ['O vértice de $y = x^{2} + 6x + 9$ está sobre o eixo $x$.', true, 'Verdadeira: $y = (x + 3)^{2}$ tem vértice $(−3, 0)$ (zero duplo).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Vértice, máximo e imagem: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: xᵥ, yᵥ, máximo, área e mínimo. Digite o número pedido.',
  final: 'Você percorreu a trilha: abscissa e ordenada do vértice, altura máxima, cerca e mínimo.',
  problems: [
    { tag: 'xᵥ', q: 'Qual a abscissa do vértice de $f(x) = −2x^{2} + 4x − 5$?', a: 1, ph: 'xᵥ', hint: '−b ÷ 2a = −4 ÷ (−4).', sol: '<p>$x_v = 1$.</p>' },
    { tag: 'yᵥ', q: 'Qual a ordenada do vértice da mesma função?', a: -3, ph: 'yᵥ', hint: 'f(1) = −2 + 4 − 5.', sol: '<p>$y_v = −3$.</p>' },
    { tag: 'Altura máxima', q: 'Qual a altura máxima (m) de $h(t) = −5t^{2} + 20t$?', a: 20, ph: 'm', hint: 't = 2 s.', sol: '<p>$h(2) = −20 + 40 = 20$ m.</p>' },
    { tag: 'Cerca', q: 'Com 40 m de tela, qual a maior área (m²) de um terreno retangular?', a: 100, ph: 'm²', hint: 'Lados x e 20 − x.', sol: '<p>$A_{máx} = 10 · 10 = 100$.</p>' },
    { tag: 'Mínimo', q: 'Qual o valor mínimo de $f(x) = x^{2} − 2x − 3$?', a: -4, ph: 'mínimo', hint: 'f(1).', sol: '<p>$f(1) = 1 − 2 − 3 = −4$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Vértice, Máximo, Mínimo e Imagem', accent: 'growth', icon: 'parabola',
  aulas: [['Aulas 46–47', 'Vértice da parábola', 'aula-1-vertice-da-parabola.html'], ['Aulas 48–50', 'Máximo, mínimo e imagem', 'aula-2-maximo-minimo-e-imagem.html']],
  enem: 'Vértice, máximo e imagem no estilo ENEM', cria: 'Verdadeiro ou falso: vértice e imagem', pratica: 'Vértice, máximo e imagem: trilha de desafios'
}, pages };
