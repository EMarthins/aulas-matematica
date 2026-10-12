// Unidade 10 — Taxa de variação e coeficientes da função afim (aulas 27 a 31)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { graf, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'taxa-de-variacao-e-coeficientes', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u10', BRAND = 'Taxa de Variação e Coeficientes', CAP = 'Aulas 27 a 31';
const pages = [];

const LEI = String.raw`
  function lei(a, b){ var s = 'y = '; if(Math.abs(a) < 1e-12) return s + pt(b); s += a === 1 ? '' : a === -1 ? '−' : pt(a); s += 'x'; if(b > 1e-12) s += ' + ' + pt(b); else if(b < -1e-12) s += ' − ' + pt(-b); return s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : 20; }
`;

// ===================== AULA 1: taxa de variação e coeficiente linear =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 27 e 28', h1: 'Taxa de variação: <span style="color:var(--primary);">quanto y muda quando x muda</span>',
  sub: 'O coeficiente angular a é a taxa de variação da função afim: a razão entre a variação de y e a variação de x. E o coeficiente linear b diz onde a reta começa.',
  badges: [['a = Δy / Δx'], ['b = f(0)', 'growth'], ['mesmo a: paralelas', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('A inclinação e o ponto de partida da reta.', [
  ['Variação', 'Δy e Δx entre dois pontos', 'bulb'],
  ['Taxa de variação', 'a = Δy ÷ Δx, constante na função afim', 'chart'],
  ['Coeficiente linear', 'onde a reta corta o eixo y', 'target'],
  ['Retas paralelas', 'mesmo a, b diferentes', 'link'],
  ['Problemas', 'vendas, faturas e leitura de gráficos', 'scale']
]));
a.push(objetivosSlide([
  'Calcular a <strong>taxa de variação</strong> $a = {Δy|Δx}$ a partir de dois pontos, de uma tabela ou de um gráfico.',
  'Interpretar $a$ como <strong>quanto $y$ muda</strong> quando $x$ aumenta 1.',
  'Reconhecer que <strong>retas paralelas</strong> têm o mesmo $a$.',
  'Escrever a lei usando $a$ e o <strong>coeficiente linear $b$</strong>.'
], 'Dica', 'Na fórmula $a = {y_2 − y_1|x_2 − x_1}$, use a <strong>mesma ordem</strong> no numerador e no denominador. Trocar a ordem em um só deles inverte o sinal.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Quanto a reta sobe a cada passo?', `
          ${lede('Em uma função afim, <strong>para cada aumento de 1 em $x$, $y$ varia sempre a mesma quantidade</strong>. Essa quantidade é a taxa de variação. Se um salário passa de 90 para 150 reais quando as vendas vão de 2 para 5, quanto ele sobe por venda?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A taxa de variação do salário por venda (de $x = 2$ para $x = 5$) é:', ['10 reais', '20 reais', '30 reais', '60 reais'], 1, '$Δy = 150 − 90 = 60$ e $Δx = 5 − 2 = 3$. Taxa: $a = 60 ÷ 3 = 20$ reais por venda.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$a = {y_2 − y_1|x_2 − x_1}$ vale <strong>igual para qualquer par de pontos</strong> da mesma reta.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · taxa de variação', 'a = Δy ÷ Δx', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$Δx = x_2 − x_1$ (variação de $x$) e $Δy = y_2 − y_1$ (variação de $y$).</li>
                <li>Taxa de variação (<strong>coeficiente angular</strong>, <strong>declividade</strong>): $a = {Δy|Δx}$.</li>
                <li>$a > 0$: reta <strong>crescente</strong>. $a < 0$: reta <strong>decrescente</strong>.</li>
                <li>O <strong>coeficiente linear</strong> $b$ é o valor de $y$ em $x = 0$: onde a reta corta o eixo $y$.</li>
                <li>Depois de $a$, ache $b$: $b = y_1 − a · x_1$.</li>
              </ul>
            </div>
            ${W.box('Taxa entre dois pontos', W.row(W.nm('r1-x1', 'x₁', 1, 'any'), W.nm('r1-y1', 'y₁', 20, 'any')) + W.row(W.nm('r1-x2', 'x₂', 5, 'any'), W.nm('r1-y2', 'y₂', 60, 'any')) + W.svg('r1-s', '0 0 360 220', '380px') + W.txt('r1-d', 'Δx e Δy: ') + W.txt('r1-a', 'a = ') + W.txt('r1-l', 'Lei: ') + W.hint('r1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Projeção de vendas', 'Uma loja vendeu 25 mil itens no ano 1 e 65 mil no ano 5, com crescimento constante. Qual a lei $V(x)$ e qual a projeção para o ano 7?', [
  ['Taxa de variação', '$a = {65 − 25|5 − 1} = {40|4} = 10$ mil itens por ano.'],
  ['Valor inicial', '$25 = 10 · 1 + b$ ⇒ $b = 15$.'],
  ['Lei e projeção', '$V(x) = 10x + 15$. Para $x = 7$: $V(7) = 85$.']
], 'A projeção para o ano 7 é de <strong>85 mil itens</strong>.'));

a.push(sl('Cuidado', 'Um erro clássico: inverter só uma subtração', `
          <div class="grid2">
            <div>
              ${lede('Um colega calculou a taxa entre $(1, 20)$ e $(5, 60)$ assim: $a = {60 − 20|1 − 5} = {40|−4} = −10$. Mas o gráfico <strong>é crescente</strong>.')}
              ${callout('Onde está o erro?', 'Ele subtraiu $y_2 − y_1$ em cima e $x_1 − x_2$ embaixo: <strong>ordens diferentes</strong>. O correto é $a = {60 − 20|5 − 1} = 10$.', 'danger')}
            </div>
            ${callout('Teste de coerência', 'Reta crescente → $a$ positivo. Reta decrescente → $a$ negativo. Se o sinal do resultado contradiz o desenho, revise a ordem das subtrações.', 'success')}
          </div>`, { cls: '' }));

a.push(sl('Explore · retas paralelas', 'Mesmo a, valores iniciais diferentes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Retas com o <strong>mesmo coeficiente angular</strong> são <strong>paralelas</strong>: sobem (ou descem) no mesmo ritmo.</li>
                <li>O coeficiente linear $b$ as <strong>desloca</strong> para cima ou para baixo.</li>
                <li>Três funções com $a = 2$: $y = 2x − 2$, $y = 2x$ e $y = 2x + 3$.</li>
              </ul>
            </div>
            ${W.box('Retas paralelas', W.nm('p1-a', 'a (igual nas três)', 2, 'any') + W.svg('p1-s', '0 0 360 230', '380px') + W.txt('p1-t', 'Retas: ') + W.hint('p1-h'))}
          </div>`, { cls: '' }));

a.push(pratique('Taxa em uma tabela', 'Em uma função afim, $f(3) = 11$ e $f(7) = 27$. Sem achar a lei, o coeficiente angular é:',
  ['3', '4', '5', '8', '16'], 1,
  '$a = {27 − 11|7 − 3} = {16|4} = 4$. <strong>Alternativa B.</strong> (De $x = 3$ a $x = 7$, $y$ sobe 16 em 4 passos.)'));
a.push(pratique('Reta paralela', 'A reta $r$ é paralela à reta $y = 3x − 2$ e passa por $(0, 5)$. A lei de $r$ é:',
  ['y = 3x − 2', 'y = −3x + 5', 'y = 3x + 5', 'y = 5x + 3', 'y = x/3 + 5'], 2,
  'Paralelas têm o mesmo $a$: $a = 3$. Passa por $(0, 5)$: $b = 5$. Lei: $y = 3x + 5$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Fatura de água', 'Uma fatura de água tem uma taxa fixa mais um valor proporcional ao consumo em m³. O gráfico é uma reta que passa por $(0, 20)$ e $(8, 60)$.' + graf({ xmin: 0, xmax: 12, ymin: 0, ymax: 80, px: 2, py: 20, series: [{ pts: [[0, 20], [8, 60]], bolas: [[0, false], [1, false]] }], marcas: [[0, 20, '(0, 20)', 10, -6], [8, 60, '(8, 60)', -8, -8]], max: '320px' }) + 'Um consumo de 11 m³ resulta em uma fatura, em reais, de:',
  ['65', '70', '75', '80', '85'], 2,
  'Taxa: $a = {60 − 20|8 − 0} = 5$ reais por m³. Lei: $y = 5x + 20$. Para $x = 11$: $55 + 20 = 75$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a taxa e o coeficiente enganam', [
  ['Ordens diferentes', 'Em $a = {y_2 − y_1|x_2 − x_1}$, a ordem é a mesma em cima e embaixo.'],
  ['Achar que b é a taxa', '$b$ é o valor inicial ($x = 0$); $a$ é a taxa.'],
  ['Paralelas com b igual', 'Mesmo $a$ e mesmo $b$ dão a <strong>mesma reta</strong>, não duas paralelas.'],
  ['Sinal incoerente', 'Reta crescente com $a$ negativo? Algo foi invertido.']
]));
a.push(quiz([
  { q: 'A taxa de variação entre $(1, 3)$ e $(3, 11)$ é:', o: ['2', '4', '8', '14'], a: 1 },
  { q: 'Em $y = −3x + 2$, quando $x$ aumenta 1, $y$:', o: ['aumenta 3', 'diminui 3', 'aumenta 2', 'diminui 2'], a: 1 },
  { q: 'Qual par de retas é paralelo?', o: ['y = 2x + 1 e y = 2x − 5', 'y = 2x e y = −2x', 'y = x + 1 e y = 2x + 1', 'y = 3x e y = x/3'], a: 0 },
  { q: 'O coeficiente linear de $y = 5x − 7$ é:', o: ['5', '−7', '7', '−5'], a: 1 }
]));
a.push(fechamento([
  ['Taxa', 'a = Δy ÷ Δx, igual para qualquer par de pontos da reta.'],
  ['Coeficiente linear', 'b = f(0): onde a reta corta o eixo y.'],
  ['Paralelas', 'Mesmo a e b diferentes.']
], 'Mesma ordem nas subtrações, sinal coerente com o desenho.'));

pages.push({ out: BASE + 'aula-1-taxa-de-variacao.html', html: K.deck({
  title: 'Taxa de variação da função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 27 e 28 · Taxa de variação', slides: a,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['r1-x1', 'r1-y1', 'r1-x2', 'r1-y2'], function(){ var x1 = +$('r1-x1').value, y1 = +$('r1-y1').value, x2 = +$('r1-x2').value, y2 = +$('r1-y2').value;
    if(![x1, y1, x2, y2].every(isFinite)){ $('r1-a').textContent = '—'; return; }
    if(x1 === x2){ $('r1-d').textContent = 'Δx = 0'; $('r1-a').textContent = 'indefinida'; $('r1-l').textContent = 'reta vertical: não é função'; $('r1-h').textContent = ''; return; }
    var dx = x2 - x1, dy = y2 - y1, a = dy / dx, b = y1 - a * x1;
    var xmin = Math.min(x1, x2, 0) - 1, xmax = Math.max(x1, x2, 0) + 1, ymin = Math.min(y1, y2, 0, b) - 1, ymax = Math.max(y1, y2, 0, b) + 1;
    var P = plano2($('r1-s'), xmin, xmax, ymin, ymax, 360, 220, passo(xmax - xmin), passo(ymax - ymin));
    linha($('r1-s'), P, [[xmin, a * xmin + b], [xmax, a * xmax + b]]); bola($('r1-s'), P, x1, y1, false, 'var(--decay)'); bola($('r1-s'), P, x2, y2, false, 'var(--decay)');
    $('r1-d').textContent = 'Δx = ' + pt(dx) + ' · Δy = ' + pt(dy); $('r1-a').textContent = pt(dy) + ' ÷ ' + pt(dx) + ' = ' + pt(a); $('r1-l').textContent = lei(a, b);
    $('r1-h').textContent = a > 0 ? 'a > 0: reta crescente.' : a < 0 ? 'a < 0: reta decrescente.' : 'a = 0: reta horizontal (constante).'; });
  bind(['p1-a'], function(){ var a = +$('p1-a').value; if(!isFinite(a)){ $('p1-t').textContent = '—'; return; }
    var P = plano2($('p1-s'), -5, 5, -8, 8, 360, 230, 1, 2), cores = ['var(--primary)', 'var(--growth)', 'var(--decay)'], bs = [-2, 0, 3];
    bs.forEach(function(b, i){ linha($('p1-s'), P, [[-5, a * -5 + b], [5, a * 5 + b]], cores[i]); });
    $('p1-t').textContent = bs.map(function(b){ return lei(a, b); }).join('  ·  '); $('p1-h').textContent = 'Mesmo a = ' + pt(a) + ': as retas nunca se cruzam. Só o ponto de partida (b) muda.'; });`
}) });

// ===================== AULA 2: sinais dos coeficientes =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 29 a 31', h1: 'Sinais de a e b: <span style="color:var(--growth);">o gráfico sem fazer conta</span>',
  sub: 'A rampa de skate tem inclinação (a) e altura de partida (b). Só olhando os sinais dos coeficientes já dá para saber por onde a reta passa.',
  badges: [['a > 0: sobe'], ['b > 0: começa acima', 'growth'], ['quadrantes', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do sinal ao desenho.', [
  ['Sinal de a', 'crescente, decrescente ou horizontal', 'bulb'],
  ['Sinal de b', 'corte no eixo y acima ou abaixo da origem', 'target'],
  ['Quadrantes', 'por onde a reta passa', 'scale'],
  ['Escolher o gráfico', 'eliminar alternativas com os sinais', 'chart'],
  ['Problemas', 'combustível e lucro em gráficos', 'link']
]));
b.push(objetivosSlide([
  'Dizer, pelos sinais de $a$ e $b$, se a reta é <strong>crescente ou decrescente</strong> e onde corta o eixo $y$.',
  'Indicar os <strong>quadrantes</strong> percorridos pela reta.',
  'Escolher o gráfico (ou a lei) correto <strong>por eliminação</strong>.',
  'Combinar condições como “$a · b > 0$”.'
], 'Dica', 'Duas perguntas: <strong>a reta sobe ou desce?</strong> (sinal de $a$). <strong>Corta o eixo $y$ acima ou abaixo da origem?</strong> (sinal de $b$).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A rampa da Elaine', `
          ${lede('Elaine projeta rampas de skate. Duas coisas definem uma rampa: a <strong>inclinação</strong> e a <strong>altura de partida</strong>. No gráfico, são o coeficiente <strong>angular</strong> (a) e o coeficiente <strong>linear</strong> (b).')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Uma rampa que <strong>começa em um ponto alto</strong> e <strong>desce</strong> corresponde a:', ['a < 0 e b > 0', 'a > 0 e b > 0', 'a < 0 e b < 0', 'a > 0 e b < 0'], 0, 'Desce: $a < 0$. Começa no alto (valor inicial positivo): $b > 0$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$a$ diz se a reta <strong>sobe ou desce</strong>; $b$ diz <strong>de onde ela parte</strong> no eixo $y$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · sinais dos coeficientes', 'Seis combinações, seis retas', `
          <div class="grid2">
            <div>
              ${tbl(['a', 'b', 'Reta', 'Quadrantes'], [['+', '+', 'crescente, corta y acima', 'I, II, III'], ['+', '−', 'crescente, corta y abaixo', 'I, III, IV'], ['−', '+', 'decrescente, corta y acima', 'I, II, IV'], ['−', '−', 'decrescente, corta y abaixo', 'II, III, IV'], ['+', '0', 'crescente, pela origem', 'I, III'], ['−', '0', 'decrescente, pela origem', 'II, IV']])}
              <p style="font-size:.88rem;margin-top:8px;">Com $a = 0$: reta horizontal ($y = b$), constante.</p>
            </div>
            ${W.box('Sinais → reta', W.row(W.sel('s1-a', 'Sinal de a', ['a > 0 (a = 2)', 'a < 0 (a = −2)', 'a = 0'], 0), W.sel('s1-b', 'Sinal de b', ['b > 0 (b = 3)', 'b < 0 (b = −3)', 'b = 0'], 0)) + W.svg('s1-s', '0 0 360 220', '380px') + W.txt('s1-t', 'A reta: ') + W.txt('s1-q', 'Quadrantes: ') + W.txt('s1-p', 'Produto a · b: ') + W.hint('s1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Classificando três funções', 'Analise os coeficientes de (a) $f(x) = 3x − 2$, (b) $g(x) = −x + 1$ e (c) $h(x) = 4$.', [
  ['f(x) = 3x − 2', '$a = 3 > 0$: crescente. $b = −2$: corta o eixo $y$ <strong>abaixo</strong> da origem.'],
  ['g(x) = −x + 1', '$a = −1 < 0$: decrescente. $b = 1$: corta o eixo $y$ <strong>acima</strong> da origem.'],
  ['h(x) = 4', '$a = 0$: reta <strong>horizontal</strong> em $y = 4$ (constante).']
], 'Três retas distintas apenas pelos sinais dos coeficientes.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'A condição a · b > 0', 'Em $f(x) = ax + b$, o produto $a · b$ é positivo. Que gráficos são possíveis?', [
  ['Produto positivo', '$a$ e $b$ têm o <strong>mesmo sinal</strong>: os dois positivos ou os dois negativos.'],
  ['Caso a > 0 e b > 0', 'Reta crescente que corta o eixo $y$ acima da origem.'],
  ['Caso a < 0 e b < 0', 'Reta decrescente que corta o eixo $y$ abaixo da origem.']
], 'Existem <strong>dois</strong> tipos de gráfico possíveis.', 'growth'));

b.push(pratique('Quadrantes', 'A reta $y = kx + z$ tem $k > 0$ e $z < 0$. Ela passa pelos quadrantes:',
  ['I, II e III', 'I, III e IV', 'I, II e IV', 'II, III e IV', 'apenas I e III'], 1,
  '$z < 0$: corta o eixo $y$ abaixo da origem. $k > 0$: sobe e cruza o eixo $x$ à direita. Passa por III (onde $x$ e $y$ são negativos), IV e I. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Sinais pelo desenho', 'O gráfico da função $y = ax + b$ é a reta da figura.' + graf({ xmin: -4, xmax: 4, ymin: -4, ymax: 4, px: 1, py: 1, series: [{ pts: [[-3, -3], [3, 1]] }], max: '260px' }) + 'Podemos afirmar que:',
  ['a > 0 e b > 0', 'a > 0 e b < 0', 'a < 0 e b > 0', 'a < 0 e b < 0', 'a = 0 e b < 0'], 1,
  'A reta sobe: $a > 0$. Corta o eixo $y$ abaixo da origem (em torno de $y = −1$): $b < 0$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('O tanque de combustível', 'Um carro tem 50 litros de combustível no tanque e é testado até esgotá-lo, percorrendo 500 km em distância total. O gráfico da quantidade $y$ de combustível em função da distância $x$ é uma reta. A lei é:',
  ['y = −10x + 500', 'y = −0,1x + 50', 'y = 0,1x + 50', 'y = −x + 50', 'y = 10x + 50'], 1,
  'Decrescente: $a < 0$. Parte de $50$: $b = 50$. Em $x = 500$, $y = 0$: $a = {0 − 50|500 − 0} = −0,1$. Lei: $y = −0,1x + 50$. <strong>Alternativa B.</strong> Eliminando por sinais já sobram só A, B e D; o ponto $(500, 0)$ decide.'));

b.push(armadilhas('Cuidados', 'Onde os sinais enganam', [
  ['Confundir a com b', '$a$ é a inclinação; $b$ é o ponto em que a reta corta o eixo $y$.'],
  ['Achar que b negativo faz a reta descer', 'O sinal de $b$ não diz se a reta sobe ou desce: isso é com o $a$.'],
  ['Esquecer o caso b = 0', 'Com $b = 0$ a reta passa pela origem (função linear).'],
  ['Produto a·b positivo', 'Não significa $a$ e $b$ positivos: eles podem ser ambos negativos.']
]));
b.push(quiz([
  { q: 'Se $a < 0$ e $b > 0$, a reta é:', o: ['crescente, corta y acima', 'decrescente, corta y acima', 'crescente, corta y abaixo', 'decrescente, corta y abaixo'], a: 1 },
  { q: 'Em $y = 4$, o gráfico é:', o: ['reta crescente', 'reta decrescente', 'reta horizontal', 'reta vertical'], a: 2 },
  { q: 'Se $a · b > 0$, então:', o: ['a e b têm o mesmo sinal', 'a e b têm sinais opostos', 'b = 0', 'a = 0'], a: 0 },
  { q: 'A reta $y = −2x − 3$ passa pelos quadrantes:', o: ['I, II e III', 'I, III e IV', 'II, III e IV', 'I, II e IV'], a: 2 }
]));
b.push(fechamento([
  ['Sinal de a', 'Positivo: sobe. Negativo: desce. Zero: horizontal.'],
  ['Sinal de b', 'Positivo: corta y acima. Negativo: corta y abaixo.'],
  ['Eliminação', 'Use os dois sinais para descartar alternativas.']
], 'Antes de calcular, leia os sinais.'));

pages.push({ out: BASE + 'aula-2-sinais-dos-coeficientes.html', html: K.deck({
  title: 'Sinais dos coeficientes da função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 29 a 31 · Análise dos coeficientes', slides: b,
  extra: WJS + BIND + PL + LEI + String.raw`
  function sinais(){ var sa = +$('s1-a').value, sb = +$('s1-b').value, a = [2, -2, 0][sa], b = [3, -3, 0][sb];
    var P = plano2($('s1-s'), -5, 5, -6, 6, 360, 220, 1, 2); linha($('s1-s'), P, [[-5, a * -5 + b], [5, a * 5 + b]]); bola($('s1-s'), P, 0, b, false, 'var(--decay)');
    var q = a > 0 ? (b > 0 ? 'I, II e III' : b < 0 ? 'I, III e IV' : 'I e III') : a < 0 ? (b > 0 ? 'I, II e IV' : b < 0 ? 'II, III e IV' : 'II e IV') : (b > 0 ? 'I e II' : b < 0 ? 'III e IV' : 'nenhum (é o eixo x)');
    $('s1-t').textContent = lei(a, b) + (a > 0 ? ' — crescente' : a < 0 ? ' — decrescente' : ' — constante') + (b > 0 ? ', corta y acima' : b < 0 ? ', corta y abaixo' : ', passa pela origem');
    $('s1-q').textContent = q; $('s1-p').textContent = a * b > 0 ? 'positivo (mesmo sinal)' : a * b < 0 ? 'negativo (sinais opostos)' : 'zero (a ou b é zero)';
    $('s1-h').textContent = 'Ponto laranja: (0, b). Valores usados: a = ' + pt(a) + ' e b = ' + pt(b) + ' (só o sinal importa para o formato).'; }
  $('s1-a').addEventListener('change', sinais); $('s1-b').addEventListener('change', sinais); sinais();`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Taxa de variação e coeficientes: <span>ler a reta nos números</span>',
  lede: 'Taxa de variação (a), coeficiente linear (b), retas paralelas e o que os sinais de a e b dizem sobre o gráfico.',
  badges: ['a = Δy/Δx', 'b = f(0)', 'sinais → quadrantes'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Taxa de variação', 'a = Δy ÷ Δx', 'chart', 'primary', p('$a = {y_2 − y_1|x_2 − x_1}$') + call('Cuidado', 'Mesma ordem nas duas subtrações.', 'danger')],
    ['Coeficiente linear', 'b = f(0)', 'target', 'growth', p('$b = y_1 − a · x_1$ · ponto $(0, b)$') + call('Exemplo', '(1,25) e (5,65): a = 10, b = 15.', 'success')],
    ['Retas paralelas', 'Mesmo a', 'link', 'decay', li(['a igual, b diferente.', 'Não se cruzam.', 'a e b iguais: mesma reta.'])],
    ['Sinal de a', 'Sobe ou desce', 'up', 'success', li(['a > 0: crescente.', 'a < 0: decrescente.', 'a = 0: horizontal.'])],
    ['Sinal de b', 'Onde parte', 'scale', 'primary', li(['b > 0: corta y acima.', 'b < 0: corta y abaixo.', 'b = 0: pela origem.'])],
    ['Quadrantes', 'a e b juntos', 'check', 'growth', p('a+, b+: I, II, III · a+, b−: I, III, IV · a−, b+: I, II, IV · a−, b−: II, III, IV')]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Subtrair em ordens diferentes.', 'Trocar a taxa pelo valor inicial.', 'Esquecer o caso b = 0.', 'Achar que o sinal de b controla a subida.', 'Confundir paralelas com mesma reta.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const gq3 = graf({ xmin: -3, xmax: 4, ymin: -2, ymax: 8, px: 1, py: 2, series: [{ pts: [[-1, -2], [3, 6]] }], marcas: [[0, 2, '(0, 2)', 10, -6], [2, 6, '(2, 6)', -8, -8]], max: '300px' });
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Taxa de variação e coeficientes <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: taxa, reta paralela, sinais pelo gráfico, valor fixo e produto a·b.',
  final: 'Taxa na mesma ordem, b é o corte em y e os sinais descartam alternativas.',
  questions: [
    { badge: 'Estilo ENEM · taxa', text: 'Em uma função afim $f$, tem-se $f(2) = 9$ e $f(6) = 25$.', cmd: 'O coeficiente angular de $f$ é:', opts: ['3', '4', '5', '6,25', '16'], a: 1,
      sol: '<p>$a = {25 − 9|6 − 2} = {16|4} = 4$.</p>' },
    { badge: 'Estilo ENEM · paralelas', text: 'A reta $s$ é paralela à reta $y = −2x + 1$ e passa pelo ponto $(1, 3)$.', cmd: 'A lei de $s$ é:', opts: ['y = −2x + 1', 'y = −2x + 5', 'y = 2x + 1', 'y = −2x + 3', 'y = 0,5x + 2,5'], a: 1,
      sol: '<p>Paralelas: $a = −2$. Passa por $(1, 3)$: $3 = −2 + b$ ⇒ $b = 5$. Lei: $y = −2x + 5$.</p>' },
    { badge: 'Estilo ENEM · sinais', text: 'A reta da figura passa por $(0, 2)$ e $(2, 6)$.' + gq3, cmd: 'Os coeficientes de $y = ax + b$ satisfazem:', opts: ['a > 0 e b > 0', 'a > 0 e b < 0', 'a < 0 e b > 0', 'a < 0 e b < 0', 'a = 0 e b > 0'], a: 0,
      sol: '<p>A reta sobe: $a > 0$ (de fato $a = 2$). Corta o eixo $y$ em $2$: $b > 0$.</p>' },
    { badge: 'Estilo ENEM · valor fixo', text: 'Um plano de dados cobra um valor fixo mais um valor por GB. Para 2 GB paga-se 50 reais e para 5 GB, 95 reais.', cmd: 'O valor fixo, em reais, é:', opts: ['15', '20', '30', '50', '95'], a: 1,
      sol: '<p>$a = {95 − 50|5 − 2} = 15$ reais por GB. $50 = 15 · 2 + b$ ⇒ $b = 20$ (valor fixo).</p>' },
    { badge: 'Estilo ENEM · a · b < 0', text: 'Em $f(x) = ax + b$ sabe-se que $a · b < 0$.', cmd: 'Um gráfico compatível com essa condição é uma reta:', opts: ['crescente que corta o eixo y acima da origem', 'decrescente que corta o eixo y abaixo da origem', 'crescente que corta o eixo y abaixo da origem', 'horizontal abaixo da origem', 'que passa pela origem'], a: 2,
      sol: '<p>$a · b < 0$: sinais opostos. Crescente ($a > 0$) cortando abaixo ($b < 0$) serve. As duas primeiras têm o mesmo sinal ($ab > 0$); a horizontal tem $a = 0$; pela origem tem $b = 0$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">coeficientes e retas</span>',
  subtitle: 'Julgue cada afirmação sobre taxa, paralelismo e sinais.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'a: inclinação e sinal da subida; b: onde corta o eixo y; mesmo a: paralelas.',
    afirmacoes: [
      ['Retas com o mesmo coeficiente angular são paralelas (ou coincidentes).', true, 'Verdadeira: sobem no mesmo ritmo; se $b$ também for igual, são a mesma reta.'],
      ['Se $a < 0$, a função afim é crescente.', false, 'Falsa: com $a < 0$ a função é <strong>decrescente</strong>.'],
      ['As retas $y = 2x + 5$ e $y = 2x − 1$ se cruzam em um ponto.', false, 'Falsa: têm o mesmo $a = 2$ e $b$ diferentes: são paralelas e nunca se cruzam.'],
      ['O coeficiente linear é o valor de $y$ no ponto em que a reta corta o eixo $y$.', true, 'Verdadeira: $f(0) = b$.'],
      ['Em $y = −3x + 2$, quando $x$ aumenta 1, $y$ diminui 3.', true, 'Verdadeira: a taxa de variação é $a = −3$.'],
      ['Se $a · b > 0$, a reta passa pela origem.', false, 'Falsa: passar pela origem exige $b = 0$, e então $a · b = 0$.'],
      ['Uma reta com $a > 0$ e $b < 0$ passa pelos quadrantes I, III e IV.', true, 'Verdadeira: corta o eixo $y$ abaixo da origem e sobe.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Taxa de variação e coeficientes: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com a taxa e o valor inicial. Digite o número pedido.',
  final: 'Você percorreu a trilha: taxa, variação, paralelas, lei e problema de contexto.',
  problems: [
    { tag: 'Taxa', q: 'Em uma função afim, $f(3) = 11$ e $f(7) = 27$. Qual o coeficiente angular?', a: 4, ph: 'a', hint: '(27 − 11) ÷ (7 − 3).', sol: '<p>$16 ÷ 4 = 4$.</p>' },
    { tag: 'Variação', q: 'Em $y = −3x + 2$, quanto <strong>varia y</strong> quando $x$ aumenta 5?', a: -15, ph: 'Δy', hint: 'Δy = a · Δx.', sol: '<p>$−3 · 5 = −15$.</p>' },
    { tag: 'Paralelas', q: 'A reta paralela a $y = 3x − 2$ que passa por $(0, 5)$ tem lei $y = 3x + 5$. Quanto vale $y$ em $x = 4$?', a: 17, ph: 'y', hint: 'Troque x por 4 na lei.', sol: '<p>$3 · 4 + 5 = 17$.</p>' },
    { tag: 'Valor inicial', q: 'Uma função afim tem $f(0) = 1$ e taxa $a = 4$. Quanto vale $f(10)$?', a: 41, ph: 'f(10)', hint: 'f(x) = 4x + 1.', sol: '<p>$4 · 10 + 1 = 41$.</p>' },
    { tag: 'Contexto', q: 'Um técnico cobra 150 reais por 2 h e 330 reais por 5 h de trabalho (taxa de visita fixa + valor por hora). Quanto cobra por <strong>8 horas</strong>, em reais?', a: 510, ph: 'reais', hint: 'a = (330 − 150) ÷ 3; depois ache b.', sol: '<p>$a = 180 ÷ 3 = 60$ por hora; $150 = 60 · 2 + b$ ⇒ $b = 30$. Para 8 h: $60 · 8 + 30 = 510$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Taxa de Variação e Coeficientes', accent: 'decay', icon: 'bars',
  aulas: [['Aulas 27–28', 'Taxa de variação', 'aula-1-taxa-de-variacao.html'], ['Aulas 29–31', 'Sinais dos coeficientes', 'aula-2-sinais-dos-coeficientes.html']],
  enem: 'Taxa de variação e coeficientes no estilo ENEM', cria: 'Verdadeiro ou falso: coeficientes e retas', pratica: 'Taxa de variação e coeficientes: trilha de desafios'
}, pages };
