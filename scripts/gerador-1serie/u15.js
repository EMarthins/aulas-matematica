// Unidade 15 — Gráfico da função quadrática: a parábola (aulas 40 e 41)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'grafico-da-funcao-quadratica', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u15', BRAND = 'Gráfico da Função Quadrática', CAP = 'Aulas 40 e 41';
const pages = [];

const QJS = String.raw`
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'y = ' + s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function parabola(svg, f, xmin, xmax, ymin, ymax){ var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, passo(xmax - xmin), passo(ymax - ymin)), pts = []; for(var i = 0; i <= 120; i++){ var x = xmin + (xmax - xmin) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts); return P; }
`;

// ===================== AULA 1: o gráfico é uma parábola =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 40', h1: 'O gráfico da função quadrática: <span style="color:var(--primary);">a parábola</span>',
  sub: 'A bola de futebol que encobre o goleiro desenha uma curva simétrica: sobe, para por um instante e desce. É a parábola, e o sinal de a diz se ela abre para cima ou para baixo.',
  badges: [['a > 0: para cima'], ['a < 0: para baixo', 'decay'], ['(0, c) no eixo y', 'growth']], color: 'primary'
}));
a.push(roteiroSlide('De uma tabela a uma curva.', [
  ['Parábola', 'a curva do gráfico quadrático', 'bulb'],
  ['Concavidade', 'o sinal de a', 'target'],
  ['Tabela de pontos', 'vários valores de x, não só dois', 'chart'],
  ['Simetria', 'pontos com mesma altura', 'link'],
  ['Lei por pontos', 'achar a, b, c no gráfico', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a <strong>parábola</strong> e dizer para onde abre pelo <strong>sinal de a</strong>.',
  'Esboçar o gráfico com uma <strong>tabela de valores</strong>.',
  'Usar a <strong>simetria</strong> da parábola para completar valores.',
  'Descobrir a <strong>lei</strong> a partir de pontos do gráfico.'
], 'Dica', 'A reta precisa de 2 pontos; a parábola precisa de <strong>mais</strong>: escolha valores de $x$ dos dois lados do ponto mais alto (ou mais baixo) para ver a curva “virar”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A bola que encobre o goleiro', `
          ${lede('Um jogador chuta para o alto tentando encobrir o goleiro. A bola sobe, atinge o ponto mais alto e desce. Se desenhássemos a trajetória, teríamos uma curva <strong>simétrica</strong> em relação a uma linha vertical que passa pelo ponto mais alto: uma <strong>parábola</strong>. Esse formato aparece em fontes, pontes, antenas e faróis.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A parábola de $y = −x^{2} + 6x − 5$ abre para:', ['cima', 'baixo', 'a direita', 'a esquerda'], 1, 'O coeficiente de $x^{2}$ é $a = −1 < 0$: a concavidade é voltada para <strong>baixo</strong> (a curva tem um ponto de máximo).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">O gráfico de $y = ax^{2} + bx + c$ é uma <strong>parábola</strong>: concavidade para <strong>cima</strong> se $a > 0$ e para <strong>baixo</strong> se $a < 0$; corta o eixo $y$ em $(0, c)$.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Explore · parábola interativa', 'Mude a, b e c e veja o que muda', `
          <div class="grid2">
            ${W.box('Parábola y = ax² + bx + c', W.row(W.nm('p1-a', 'a', -1, 'any'), W.nm('p1-b', 'b', 2, 'any'), W.nm('p1-c', 'c', 3, 'any')) + W.svg('p1-s', '0 0 360 230', '380px') + W.txt('p1-l', 'Lei: ') + W.txt('p1-k', 'Concavidade: ') + W.txt('p1-z', 'Corte em y e zeros: ') + W.txt('p1-v', 'Vértice: ') + W.hint('p1-h'))}
            <div>
              ${callout('O que observar', '<strong>a</strong>: sinal = para onde abre; módulo = quão “fechada” é a curva. <strong>c</strong>: onde corta o eixo $y$. O <strong>vértice</strong> (ponto laranja) é o ponto mais alto ou mais baixo.', 'success')}
              ${callout('Simetria', 'Os dois lados da parábola são espelhados pela reta vertical que passa pelo vértice. Pontos à mesma distância dessa reta têm a mesma altura.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Construindo o gráfico por tabela', 'Construa o gráfico de $h(x) = −x^{2} + 2x + 3$ com valores de $x$ de $−2$ a $4$.', [
  ['Tabela de valores', '$x$: −2, −1, 0, 1, 2, 3, 4 → $y$: −5, 0, 3, 4, 3, 0, −5.'],
  ['Observe', '$a = −1 < 0$: abre para baixo. Os valores repetem em torno de $x = 1$ (simetria).'],
  ['Marque e una', 'Pontos $(−1, 0)$ e $(3, 0)$ no eixo $x$; $(0, 3)$ no eixo $y$; ponto mais alto $(1, 4)$.']
], 'Parábola para baixo, com ponto mais alto em $(1, 4)$ e eixo de simetria $x = 1$.'));
a.push(sl('Figura', 'A parábola y = −x² + 2x + 3', `
          <div class="grid2">
            ${graf({ xmin: -3, xmax: 5, ymin: -6, ymax: 5, px: 1, py: 1, series: [{ pts: amostra(x => -x * x + 2 * x + 3, -2.2, 4.2, 70) }], marcas: [[-1, 0, '(−1, 0)', -8, -8], [3, 0, '(3, 0)', 8, -8], [0, 3, '(0, 3)', -8, -6], [1, 4, '(1, 4)', 8, -6]], max: '380px' })}
            <div>
              ${callout('Simetria em ação', 'Os pontos $(−1, 0)$ e $(3, 0)$ estão à mesma distância (2 unidades) da reta $x = 1$. Os pontos $(0, 3)$ e $(2, 3)$ também.', 'success')}
              ${callout('Use a simetria', 'Se você já calculou $f(0) = 3$, então $f(2) = 3$ <strong>sem conta</strong> (o eixo é $x = 1$).', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Achando a lei no gráfico', 'A parábola da figura passa por $(0, 3)$, $(1, 4)$ e $(3, 0)$. Determine sua lei.', [
  ['Use (0, 3)', '$f(0) = c = 3$.'],
  ['Use (1, 4) e (3, 0)', '$a + b + 3 = 4$ ⇒ $a + b = 1$; $9a + 3b + 3 = 0$ ⇒ $3a + b = −1$.'],
  ['Resolva o sistema', 'Subtraindo: $2a = −2$ ⇒ $a = −1$, então $b = 2$.']
], '$y = −x^{2} + 2x + 3$ (a mesma parábola do exemplo anterior).', 'growth'));

a.push(pratique('Concavidade', 'A parábola de $f(x) = −2x^{2} + x − 3$:',
  ['abre para cima e corta y em −3', 'abre para baixo e corta y em −3', 'abre para cima e corta y em 3', 'abre para baixo e corta y em 1', 'abre para baixo e corta y em −2'], 1,
  '$a = −2 < 0$: abre para baixo. $c = −3$: corta o eixo $y$ em $(0, −3)$. <strong>Alternativa B.</strong>'));
a.push(pratique('Ponto do gráfico', 'Para que o gráfico de $y = 2x^{2} − 3x + m$ passe pelo ponto $(2, 5)$, o valor de $m$ deve ser:',
  ['−3', '0', '3', '5', '11'], 2,
  'Em $(2, 5)$: $5 = 2 · 4 − 3 · 2 + m = 8 − 6 + m = 2 + m$ ⇒ $m = 3$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Simetria na tabela', 'Uma função quadrática tem a tabela: $x = 0, 1, 2, 3, 4$ com $y = 5, 2, 1, 2, 5$. Mantido o padrão, o valor de $y$ para $x = 5$ é:',
  ['8', '9', '10', '11', '12'], 2,
  'Os valores se repetem em torno de $x = 2$ (eixo de simetria): $y(1) = y(3) = 2$ e $y(0) = y(4) = 5$. Assim $y(5) = y(−1)$. A lei é $y = x^{2} − 4x + 5$: $y(5) = 25 − 20 + 5 = 10$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o gráfico engana', [
  ['Traçar uma reta', 'Parábola é curva: use vários pontos e una-os suavemente, sem “pontas” no vértice.'],
  ['Concavidade pelo b ou pelo c', 'Só o sinal de $a$ decide para onde a parábola abre.'],
  ['Escolher pontos de um só lado', 'Escolha $x$ dos dois lados do vértice para ver a curva virar.'],
  ['Esquecer a simetria', 'Ela poupa contas: valores se repetem a igual distância do eixo.']
]));
a.push(quiz([
  { q: 'O gráfico de uma função quadrática é uma:', o: ['reta', 'parábola', 'circunferência', 'hipérbole'], a: 1 },
  { q: 'Se $a < 0$, a parábola abre para:', o: ['cima', 'baixo', 'direita', 'esquerda'], a: 1 },
  { q: 'O gráfico de $y = x^{2} − 5x + 4$ corta o eixo $y$ em:', o: ['(0, 4)', '(4, 0)', '(0, −5)', '(1, 0)'], a: 0 },
  { q: 'Se $f(0) = f(4)$, o eixo de simetria é:', o: ['x = 0', 'x = 2', 'x = 4', 'x = 8'], a: 1 }
]));
a.push(fechamento([
  ['Parábola', 'Curva simétrica; abre para cima (a > 0) ou para baixo (a < 0).'],
  ['Tabela', 'Vários pontos dos dois lados do vértice.'],
  ['Lei por pontos', 'Três pontos dão a, b e c.']
], 'Da tabela à curva: pontos, simetria e concavidade.'));

pages.push({ out: BASE + 'aula-1-a-parabola.html', html: K.deck({
  title: 'A parábola — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 40 · O gráfico é uma parábola', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['p1-a', 'p1-b', 'p1-c'], function(){ var a = +$('p1-a').value, b = +$('p1-b').value, c = +$('p1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('p1-l').textContent = a === 0 ? 'a = 0: é uma reta (função afim)' : '—'; $('p1-k').textContent = ''; $('p1-z').textContent = ''; $('p1-v').textContent = ''; return; }
    var xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, d = b * b - 4 * a * c, f = function(x){ return a * x * x + b * x + c; };
    var w = 4; if(d > 0) w = Math.max(w, Math.abs(Math.sqrt(d) / (2 * a)) + 2); var xmin = xv - w, xmax = xv + w, ys = [f(xmin), f(xmax), yv, 0, c], ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys), pd = (ymax - ymin) * 0.12 + 1; ymin -= pd; ymax += pd;
    var P = parabola($('p1-s'), f, xmin, xmax, ymin, ymax); bola($('p1-s'), P, xv, yv, false, 'var(--decay)'); if(c >= ymin && c <= ymax && 0 >= xmin && 0 <= xmax) bola($('p1-s'), P, 0, c, false, 'var(--growth)');
    if(d >= 0){ var s = Math.sqrt(d), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); [r1, r2].forEach(function(r){ if(r >= xmin && r <= xmax) bola($('p1-s'), P, r, 0, false, 'var(--primary)'); }); }
    $('p1-l').textContent = leiQ(a, b, c); $('p1-k').textContent = a > 0 ? 'para cima (a > 0): tem ponto de mínimo' : 'para baixo (a < 0): tem ponto de máximo';
    $('p1-z').textContent = '(0; ' + pt(c) + ')' + (d > 0 ? ' · zeros x = ' + pt(Math.min((-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a))) + ' e ' + pt(Math.max((-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a))) : d === 0 ? ' · um zero: x = ' + pt(xv) : ' · sem zeros reais');
    $('p1-v').textContent = '(' + pt(xv, 3) + '; ' + pt(yv, 3) + ') · eixo de simetria x = ' + pt(xv, 3); $('p1-h').textContent = 'Laranja: vértice. Verde: corte em y. Azul: zeros no eixo x.'; });`
}) });

// ===================== AULA 2: modelar com gráficos =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 41', h1: 'A parábola em situações: <span style="color:var(--growth);">lançamento, lucro e parâmetros</span>',
  sub: 'Fogos de artifício, lucro mensal de uma fábrica, parábola tangente ao eixo: o gráfico quadrático organiza todas essas situações e permite perguntar “quando?” e “quanto?”.',
  badges: [['altura × tempo'], ['lucro = receita − custo', 'growth'], ['parâmetro m', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do enunciado à parábola.', [
  ['Lançamento', 'h(t) = −5t² + v₀t + h₀', 'bulb'],
  ['Lucro', 'L = R − D com R quadrática', 'chart'],
  ['Parâmetros', 'passar por um ponto', 'target'],
  ['Tangência', 'tocar o eixo x em um só ponto', 'link'],
  ['Problemas', 'altura, lucro e m', 'scale']
]));
b.push(objetivosSlide([
  'Ler e escrever a <strong>lei de altura</strong> de um lançamento e calcular $h(t)$.',
  'Montar a <strong>lei do lucro</strong> como receita menos despesa.',
  'Determinar parâmetros para que o gráfico <strong>passe por um ponto</strong>.',
  'Usar o discriminante para a parábola <strong>tangente ao eixo $x$</strong>.'
], 'Dica', 'Lucro = receita − despesa. Se a receita é quadrática e a despesa é afim, o lucro é uma <strong>parábola</strong>: reúna os termos semelhantes com cuidado nos sinais.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O show de fogos de artifício', `
          ${lede('Um fogo é lançado e sobe até o ponto máximo, onde “explode”, e depois os restos caem. A altura depende do tempo por uma função quadrática com $a < 0$ (a gravidade “freia” a subida). Conhecendo a lei, <strong>prevemos até onde o fogo vai subir</strong> antes mesmo de ele ser lançado.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Um objeto lançado do solo tem $h(t) = 30t − 5t^{2}$. Em $t = 3$ s a altura é:', ['30 m', '45 m', '60 m', '90 m'], 1, '$h(3) = 30 · 3 − 5 · 9 = 90 − 45 = 45$ m. (É também a altura máxima: o ponto mais alto ocorre no meio entre os instantes $t = 0$ e $t = 6$.)')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Lançamento vertical: $h(t) = −5t^{2} + v_0 t + h_0$ (metros, segundos). $v_0$ é a velocidade inicial e $h_0$ a altura de partida.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · lançamento', 'Velocidade inicial e altura de partida', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com a aceleração da gravidade aproximada por $10$ m/s²: $h(t) = −5t^{2} + v_0 t + h_0$.</li>
                <li>$h_0$ é a altura em $t = 0$ (corte do gráfico com o eixo $y$).</li>
                <li>A bola <strong>volta ao solo</strong> na raiz positiva de $h(t) = 0$.</li>
                <li>A altura <strong>máxima</strong> está no vértice (tratamos disso nas próximas aulas).</li>
              </ul>
            </div>
            ${W.box('Lançamento vertical', W.row(W.nm('l1-v', 'Velocidade inicial (m/s)', 30, 'any'), W.nm('l1-h', 'Altura inicial (m)', 0, 'any')) + W.nm('l1-t', 'Tempo t (s)', 3, 'any') + W.svg('l1-s', '0 0 360 230', '380px') + W.txt('l1-r', 'Altura em t: ') + W.txt('l1-x', 'Volta ao solo em: ') + W.hint('l1-h2'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Lucro mensal de uma fábrica', 'Uma fábrica produz $x$ unidades por mês. A receita é $R(x) = 300x − x^{2}$ e a despesa total, $D(x) = 60x + 8\\ 000$ (reais). Escreva o lucro $L(x)$ e calcule o lucro para $x = 100$.', [
  ['Lucro = receita − despesa', '$L(x) = (300x − x^{2}) − (60x + 8\\ 000)$.'],
  ['Reúna os termos', '$L(x) = −x^{2} + 300x − 60x − 8\\ 000 = −x^{2} + 240x − 8\\ 000$.'],
  ['Calcule L(100)', '$L(100) = −10\\ 000 + 24\\ 000 − 8\\ 000 = 6\\ 000$.']
], '$L(x) = −x^{2} + 240x − 8\\ 000$ e, para $x = 100$, o lucro é de <strong>6 000 reais</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Parábola tangente ao eixo x', 'Para que valor de $m$ o gráfico de $y = x^{2} − 6x + m$ toca o eixo $x$ em <strong>um único ponto</strong>?', [
  ['Um ponto de contato', 'A equação $x^{2} − 6x + m = 0$ deve ter <strong>uma raiz</strong>: $Δ = 0$.'],
  ['Discriminante', '$Δ = (−6)^{2} − 4 · 1 · m = 36 − 4m$.'],
  ['Resolva', '$36 − 4m = 0$ ⇒ $m = 9$.']
], 'Com $m = 9$: $y = (x − 3)^{2}$, tangente ao eixo $x$ em $(3, 0)$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Passando por um ponto', 'Determine $m$ para que o gráfico de $y = 3x^{2} − x + m$ passe por $(1, 6)$.', [
  ['Substitua o ponto', '$6 = 3 · 1^{2} − 1 + m$.'],
  ['Simplifique', '$6 = 2 + m$.'],
  ['Isole m', '$m = 4$.']
], '$m = 4$ e a lei fica $y = 3x^{2} − x + 4$.', 'growth'));

b.push(pratique('Lei do lucro', 'Com $R(x) = 300x − x^{2}$ e $D(x) = 60x + 8\\ 000$, a lei do lucro $L = R − D$ é:',
  ['L = −x² + 360x + 8 000', 'L = x² − 240x + 8 000', 'L = −x² + 240x − 8 000', 'L = −x² + 240x + 8 000', 'L = −x² + 360x − 8 000'], 2,
  '$L = 300x − x^{2} − 60x − 8\\ 000 = −x^{2} + 240x − 8\\ 000$. O sinal da despesa se inverte ao subtrair. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Tangência', 'Para que $y = x^{2} + 8x + k$ seja tangente ao eixo $x$, o valor de $k$ deve ser:',
  ['4', '8', '16', '32', '64'], 2,
  '$Δ = 64 − 4k = 0$ ⇒ $k = 16$. Vale $y = (x + 4)^{2}$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Altura de uma bola', 'Uma bola é lançada do solo para cima e sua altura é $h(t) = 20t − 5t^{2}$ (metros, $t$ em segundos). A altura em $t = 3$ s é:',
  ['5 m', '15 m', '30 m', '45 m', '60 m'], 1,
  '$h(3) = 60 − 45 = 15$ m. A bola já está <strong>descendo</strong>: seu ponto mais alto foi em $t = 2$ s ($h = 20$ m). <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a modelagem engana', [
  ['Sinal da despesa', 'Em $R − D$, distribua o sinal: $−(60x + 8\\ 000) = −60x − 8\\ 000$.'],
  ['Tangente = Δ ≠ 0', 'Tocar em um ponto só exige <strong>$Δ = 0$</strong>, não $Δ > 0$.'],
  ['Substituir x e y trocados', 'Em $(1, 6)$, $x = 1$ e $y = 6$.'],
  ['Altura acima do máximo', 'Confira se o tempo pedido está dentro da duração do voo.']
]));
b.push(quiz([
  { q: 'Se $R(x) = 300x − x^{2}$ e $D(x) = 60x + 8\\ 000$, o lucro é:', o: ['−x² + 240x − 8 000', 'x² − 240x + 8 000', '−x² + 360x − 8 000', '−x² + 240x + 8 000'], a: 0 },
  { q: '$y = x^{2} − 6x + m$ é tangente ao eixo $x$ quando $m$ vale:', o: ['6', '9', '12', '36'], a: 1 },
  { q: 'Em $h(t) = −5t^{2} + 20t$, $h(2)$ vale:', o: ['10', '20', '30', '40'], a: 1 },
  { q: 'O gráfico de $y = 3x^{2} − x + m$ passa por $(1, 6)$ se $m$ vale:', o: ['2', '4', '6', '8'], a: 1 }
]));
b.push(fechamento([
  ['Lançamento', 'h(t) = −5t² + v₀t + h₀; raiz positiva: volta ao solo.'],
  ['Lucro', 'L = R − D; cuide do sinal ao subtrair a despesa.'],
  ['Parâmetro', 'Ponto: substitua. Tangência: Δ = 0.']
], 'Da situação à lei, da lei ao gráfico.'));

pages.push({ out: BASE + 'aula-2-parabola-em-situacoes.html', html: K.deck({
  title: 'A parábola em situações — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 41 · A parábola em situações', slides: b,
  extra: WJS + BIND + PL + QJS + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['l1-v', 'l1-h', 'l1-t'], function(){ var v = +$('l1-v').value, h0 = +$('l1-h').value, t = +$('l1-t').value; if(![v, h0, t].every(isFinite) || v < 0 || h0 < 0 || t < 0){ $('l1-r').textContent = '—'; $('l1-x').textContent = ''; return; }
    var f = function(x){ return -5 * x * x + v * x + h0; }, tv = v / 10, hmax = f(tv), tf = (v + Math.sqrt(v * v + 20 * h0)) / 10, xmax = Math.max(tf * 1.1, t * 1.1, 1);
    var ymax = Math.max(hmax, h0, f(t), 1) * 1.12, P = parabola($('l1-s'), f, 0, xmax, Math.min(0, f(xmax)) - 1, ymax); bola($('l1-s'), P, Math.min(t, xmax), f(Math.min(t, xmax)), false, 'var(--danger)'); bola($('l1-s'), P, tv, hmax, false, 'var(--decay)'); bola($('l1-s'), P, tf, 0, false, 'var(--growth)');
    $('l1-r').textContent = f(t) < 0 ? 'já está no solo (t > ' + pt(tf, 2) + ' s)' : pt(f(t), 2) + ' m'; $('l1-x').textContent = pt(tf, 2) + ' s';
    $('l1-h2').textContent = 'h(t) = −5t² + ' + pt(v) + 't + ' + pt(h0) + '. Laranja: ponto mais alto (' + pt(hmax, 1) + ' m em t = ' + pt(tv, 2) + ' s). Verde: volta ao solo.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Gráfico da função quadrática: <span>a parábola</span>',
  lede: 'Concavidade, corte em y, tabela de pontos, simetria, lei por pontos e as situações clássicas: lançamento, lucro e parâmetros.',
  badges: ['a > 0: ∪', 'a < 0: ∩', 'corte em y: (0, c)'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Parábola', 'Concavidade', 'chart', 'primary', p('$a > 0$ abre para cima; $a < 0$, para baixo.') + call('Corte em y', '$f(0) = c$: ponto $(0, c)$.', 'success')],
    ['Tabela', 'Pontos dos dois lados', 'target', 'growth', p('Calcule $f(x)$ para $x$ dos dois lados do ponto mais alto/baixo.') + call('Dica', 'Una com curva suave, sem pontas.', 'success')],
    ['Simetria', 'Eixo vertical', 'link', 'decay', p('Se $f(m) = f(n)$, o eixo é $x = {m + n|2}$.') + call('Exemplo', 'f(0) = f(2) ⇒ eixo x = 1.', 'success')],
    ['Lei por pontos', 'Sistema 3×3', 'scale', 'success', li(['f(0) dá c.', 'Dois outros pontos dão a e b.', 'Confira com um quarto ponto.'])],
    ['Lançamento', 'h(t) = −5t² + v₀t + h₀', 'up', 'primary', p('Volta ao solo na raiz positiva.') + call('Atenção', 'Descarte tempo negativo.', 'danger')],
    ['Parâmetros', 'm no gráfico', 'check', 'growth', li(['Passa por (x₀, y₀): substitua.', 'Tangente ao eixo x: Δ = 0.', 'Lucro: L = R − D.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Desenhar uma reta ou bico no vértice.', 'Decidir a concavidade pelo b ou c.', 'Usar pontos de um só lado do vértice.', 'Errar o sinal da despesa em L = R − D.', 'Confundir tangência (Δ = 0) com dois zeros.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'A parábola <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: concavidade, simetria, parâmetro, lei por pontos e lucro.',
  final: 'Sinal de a, corte em y, simetria e substituição resolvem quase tudo.',
  questions: [
    { badge: 'Estilo ENEM · concavidade', text: 'Considere a função $y = −x^{2} + 4x − 5$.', cmd: 'Seu gráfico:', opts: ['abre para cima e corta y em −5', 'abre para baixo e corta y em −5', 'abre para baixo e corta y em 4', 'abre para cima e corta y em 5', 'abre para baixo e corta y em 5'], a: 1,
      sol: '<p>$a = −1 < 0$: abre para baixo. $c = −5$: corta o eixo $y$ em $(0, −5)$.</p>' },
    { badge: 'Estilo ENEM · simetria', text: 'Uma função quadrática tem a tabela: $x = 0, 1, 2, 3, 4$ com $y = 5, 2, 1, 2, 5$.', cmd: 'Mantido o padrão, o valor de $y$ para $x = 5$ é:', opts: ['8', '9', '10', '11', '12'], a: 2,
      sol: '<p>Eixo de simetria $x = 2$. A lei é $y = x^{2} − 4x + 5$; $y(5) = 25 − 20 + 5 = 10$.</p>' },
    { badge: 'Estilo ENEM · parâmetro', text: 'O gráfico de $y = 2x^{2} − 3x + m$ passa pelo ponto $(2, 5)$.', cmd: 'O valor de $m$ é:', opts: ['−3', '0', '3', '5', '11'], a: 2,
      sol: '<p>$5 = 8 − 6 + m$ ⇒ $m = 3$.</p>' },
    { badge: 'Estilo ENEM · lei por pontos', text: 'Uma parábola passa pelos pontos $(0, 3)$, $(1, 4)$ e $(3, 0)$.', cmd: 'O coeficiente $a$ da função é:', opts: ['−2', '−1', '1', '2', '3'], a: 1,
      sol: '<p>$c = 3$; $a + b = 1$; $9a + 3b = −3$ ⇒ $3a + b = −1$. Subtraindo: $2a = −2$ ⇒ $a = −1$.</p>' },
    { badge: 'Estilo ENEM · lucro', text: 'A receita de uma fábrica é $R(x) = 300x − x^{2}$ e a despesa, $D(x) = 60x + 8\\ 000$ (reais).', cmd: 'O lucro para $x = 100$ unidades é, em reais:', opts: ['2 000', '4 000', '6 000', '8 000', '16 000'], a: 2,
      sol: '<p>$L = −x^{2} + 240x − 8\\ 000$; $L(100) = −10\\ 000 + 24\\ 000 − 8\\ 000 = 6\\ 000$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória: <span style="color:var(--growth);">lei e parábola</span>',
  subtitle: 'Encontre os pares: cada lei com a descrição do seu gráfico.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se formarem um par (lei e descrição do gráfico), elas ficam abertas.',
    final: 'a decide a concavidade; c decide onde a parábola corta o eixo y.',
    pares: [['y = x² − 4x + 1', 'para cima · corta y em 1'], ['y = −x² + 6', 'para baixo · corta y em 6'], ['y = 2x² + x − 3', 'para cima · corta y em −3'], ['y = −3x² + 2x', 'para baixo · passa pela origem'], ['y = x² + 4', 'para cima · corta y em 4'], ['y = −0,5x² − 2x − 1', 'para baixo · corta y em −1']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'A parábola: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com a parábola. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: valor, simetria, parâmetro, tangência e lucro.',
  problems: [
    { tag: 'Valor', q: 'Se $f(x) = −x^{2} + 2x + 3$, quanto vale $f(4)$?', a: -5, ph: 'f(4)', hint: '−16 + 8 + 3.', sol: '<p>$−16 + 8 + 3 = −5$.</p>' },
    { tag: 'Simetria', q: 'Uma quadrática tem $y = 5, 2, 1, 2, 5$ para $x = 0, 1, 2, 3, 4$. Quanto vale $y$ em $x = 5$?', a: 10, ph: 'y', hint: 'Lei: y = x² − 4x + 5.', sol: '<p>$25 − 20 + 5 = 10$.</p>' },
    { tag: 'Parâmetro', q: 'O gráfico de $y = 3x^{2} − x + m$ passa por $(1, 6)$. Qual o valor de $m$?', a: 4, ph: 'm', hint: '6 = 3 − 1 + m.', sol: '<p>$m = 4$.</p>' },
    { tag: 'Tangência', q: 'Para que $y = x^{2} + 8x + k$ seja tangente ao eixo $x$, qual o valor de $k$?', a: 16, ph: 'k', hint: 'Δ = 0.', sol: '<p>$64 − 4k = 0$ ⇒ $k = 16$.</p>' },
    { tag: 'Lucro', q: 'Com $L(x) = −x^{2} + 240x − 8\\ 000$, qual o lucro (reais) para $x = 100$?', a: 6000, ph: 'reais', hint: 'Substitua x = 100.', sol: '<p>$−10\\ 000 + 24\\ 000 − 8\\ 000 = 6\\ 000$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Gráfico da Função Quadrática', accent: 'growth', icon: 'parabola',
  aulas: [['Aula 40', 'A parábola', 'aula-1-a-parabola.html'], ['Aula 41', 'A parábola em situações', 'aula-2-parabola-em-situacoes.html']],
  enem: 'A parábola no estilo ENEM', cria: 'Memória: lei e parábola', pratica: 'A parábola: trilha de desafios'
}, pages };
