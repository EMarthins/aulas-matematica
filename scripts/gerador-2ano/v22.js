// Unidade v22 — Função seno: gráfico e parâmetros a e b (aulas 46 e 47 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'funcao-seno', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v22', BRAND = 'Função seno';

// ===================== AULA 46: a função y = sen x =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 46', h1: 'A função seno: <span style="color:var(--primary);">a onda que se repete</span>',
  sub: 'O pêndulo vai e volta no mesmo tempo, o coração bate em ritmo, a maré sobe e desce. Fenômenos periódicos como esses são modelados pela função seno, cujo gráfico é a senóide.',
  badges: [['y = sen x'], ['período 2π', 'growth'], ['imagem [−1, 1]', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da circunferência trigonométrica ao gráfico.', [
  ['Funções periódicas', 'repetem-se a cada período', 'bulb'],
  ['A função seno', 'domínio real, arcos em radianos', 'target'],
  ['O gráfico', 'cinco pontos formam uma onda', 'chart'],
  ['Propriedades', 'domínio, imagem, período', 'link'],
  ['Máximos e mínimos', 'com os limites −1 ≤ sen x ≤ 1', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a <strong>função seno</strong> $f(x) = sen x$ e uma <strong>função periódica</strong>.',
  'Construir o gráfico (<strong>senóide</strong>) e identificar <strong>domínio, imagem e período</strong>.',
  'Calcular <strong>máximos e mínimos</strong> de expressões com $sen x$ usando $−1 ≤ sen x ≤ 1$.'
], 'Dica', 'Na função seno, $x$ é um <strong>número real</strong> (arco em radianos), não um ângulo em graus: no eixo $x$ aparecem $π ÷ 2$, $π$, $3π ÷ 2$, $2π$…', 'primary'));

a.push(sl('Para início de conversa', 'O pêndulo e o movimento periódico', `
          ${lede('Um pêndulo gasta o <strong>mesmo tempo</strong> em cada ida e volta: seu movimento é <strong>periódico</strong>. O eletrocardiograma e o ponteiro do relógio também. Uma função é periódica quando se repete a cada intervalo fixo, o <strong>período</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figOnda({ f: Math.sin, xmin: 0, xmax: 4 * Math.PI, w: 360, h: 170, marcas: [[Math.PI / 2, 1, '', 0, 0], [5 * Math.PI / 2, 1, '', 0, 0]] })}
            ${mini('No gráfico, o valor máximo se repete em $π ÷ 2$ e em $5π ÷ 2$. A distância entre eles é o:', ['período, $2π$', 'domínio', 'zero da função', 'amplitude'], 0, '$5π ÷ 2 − π ÷ 2 = 2π$: é o <strong>período</strong>, o menor intervalo em que o gráfico se repete.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · a função seno', 'f(x) = sen x e sua senóide', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$f: ℝ → ℝ$, $f(x) = sen x$</strong>: associa a cada real $x$ o seno do arco de $x$ radianos.</li>
                <li><strong>Domínio:</strong> $ℝ$. <strong>Imagem:</strong> $[−1, 1]$. <strong>Período:</strong> $2π$.</li>
                <li>Cinco pontos para um período: $(0, 0)$, $(π ÷ 2, 1)$, $(π, 0)$, $(3π ÷ 2, −1)$, $(2π, 0)$.</li>
                <li><strong>Zeros:</strong> $x = kπ$. <strong>Máximo $1$</strong> em $π ÷ 2 + 2kπ$; <strong>mínimo $−1$</strong> em $3π ÷ 2 + 2kπ$.</li>
                <li>Para valores fora de um período, use arcos côngruos: $sen {7π|2} = sen {3π|2} = −1$.</li>
              </ul>
            </div>
            ${W.box('Percorra a senóide', W.row(W.rg('f46-x', 'x (em π rad)', 0, 4, 0.05, 0.5, 'π')) + W.svg('f46-s', '0 0 380 220', '380px') + W.txt('f46-v', 'x · sen x: ') + W.hint('f46-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Um período da senóide', `
          <div class="grid2">
            ${T.figOnda({ f: Math.sin, xmin: 0, xmax: 2 * Math.PI, w: 330, h: 190, marcas: [[Math.PI / 2, 1, '(π/2, 1)', 8, -8], [Math.PI, 0, '(π, 0)', 8, -8], [3 * Math.PI / 2, -1, '(3π/2, −1)', -8, 14]] })}
            ${tbl(['x', '0', 'π/2', 'π', '3π/2', '2π'], [['sen x', '$0$', '$1$', '$0$', '$−1$', '$0$'], ['Comportamento', 'cresce', 'máx.', 'decresce', 'mín.', 'cresce']])}
          </div>
          <p class="hint" style="margin-top:8px;">Crescente em $[0, π ÷ 2]$ e $[3π ÷ 2, 2π]$; decrescente em $[π ÷ 2, 3π ÷ 2]$. O gráfico se repete a cada $2π$.</p>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Máximo e mínimo de 6 sen x', 'Quais os valores máximo e mínimo de $y = 6 · sen x$?', [
  ['Limites do seno', '$−1 ≤ sen x ≤ 1$.'],
  ['Multiplicar por 6', '$−6 ≤ 6 · sen x ≤ 6$.']
], 'Mínimo $−6$ e máximo $6$.'));
a.push(exemplo('Exemplo resolvido', 'Com número negativo', 'Determine o mínimo e o máximo de $y = 4 − 3 · sen x$.', [
  ['Seno', '$−1 ≤ sen x ≤ 1$.'],
  ['Multiplicar por −3 (inverte)', '$3 ≥ −3 · sen x ≥ −3$, isto é, $−3 ≤ −3 · sen x ≤ 3$.'],
  ['Somar 4', '$1 ≤ 4 − 3 · sen x ≤ 7$.']
], 'Mínimo $1$ e máximo $7$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O seno no denominador', 'Determine o máximo e o mínimo de $y = {2|3 + sen x}$.', [
  ['Denominador', '$3 + sen x$ varia de $2$ a $4$.'],
  ['Inverso', 'Quanto menor o denominador, maior a fração.'],
  ['Valores', 'Máximo: ${2|2} = 1$; mínimo: ${2|4} = {1|2}$.'.replace('${', '$ {')]
], 'Máximo $1$ e mínimo $ {1|2}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Existência da equação', 'Para quais valores de $m$ existe $x$ real com $sen x = 3m − 1$?', [
  ['Condição', 'O seno só assume valores de $−1$ a $1$: $−1 ≤ 3m − 1 ≤ 1$.'],
  ['Resolver', '$0 ≤ 3m ≤ 2$ ⇒ $0 ≤ m ≤ {2|3}$.']
], '$0 ≤ m ≤ {2|3}$.'.replace('${', '$ {'), 'decay'));

a.push(pratique('Imagem', 'O conjunto imagem de $y = sen x$ é:',
  ['$ℝ$', '$[0, 1]$', '$[−1, 1]$', '$[−π, π]$'], 2, 'O seno nunca sai de $−1$ a $1$. <strong>Alternativa C.</strong>'));
a.push(pratique('Período', 'O período de $y = sen x$ é:',
  ['$π ÷ 2$', '$π$', '$2π$', '$4π$'], 2, 'O gráfico se repete a cada volta completa, $2π$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Valor numérico', 'O valor de $sen {7π|2}$ é:',
  ['$1$', '$0$', '$−1$', '$−{1|2}$'].map(t => t.replace('${', '$ {')), 2, '$ {7π|2} = {3π|2} + 2π$: côngruo a $ {3π|2}$ ($270°$), onde $sen = −1$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Maré', 'A altura da maré em um porto, em metros, é modelada por $h = 3 + 2 · sen x$, com $x$ em radianos. Os valores máximo e mínimo dessa altura são, respectivamente:',
  ['$5$ e $1$', '$5$ e $−1$', '$3$ e $2$', '$2$ e $1$', '$6$ e $0$'], 0, '$−1 ≤ sen x ≤ 1$ ⇒ $1 ≤ 3 + 2 sen x ≤ 5$. <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a função seno engana', [
  ['Graus no eixo x', 'Na função, $x$ está em <strong>radianos</strong>: $sen 90$ (grau) e $sen (π ÷ 2)$ não são a mesma coisa.'],
  ['Período confundido com imagem', 'Período é horizontal ($2π$); imagem é vertical ($[−1, 1]$).'],
  ['Multiplicar por número negativo', 'Inverte as desigualdades: máximo vira mínimo.'],
  ['Gráfico em segmentos', 'A senóide é uma curva <strong>suave</strong>, não uma poligonal.']
]));
a.push(quiz([
  { q: 'O domínio da função seno é:', o: ['$[−1, 1]$', '$ℝ$', '$[0, 2π]$', '$ℝ^{*}$'], a: 1 },
  { q: 'O valor máximo de $y = 5 · sen x$ é:', o: ['$1$', '$5$', '$−5$', '$10$'], a: 1 },
  { q: 'O gráfico de $sen x$ corta o eixo $x$ em:', o: ['$kπ$', '$π ÷ 2 + kπ$', '$2kπ$ apenas', 'nunca corta'], a: 0 },
  { q: 'O valor mínimo de $y = 2 + sen x$ é:', o: ['$−1$', '$1$', '$2$', '$3$'], a: 1 }
]));
a.push(fechamento([
  ['Função', '$f(x) = sen x$: domínio $ℝ$, imagem $[−1, 1]$, período $2π$.'],
  ['Gráfico', 'Senóide pelos pontos $0$, $π ÷ 2$, $π$, $3π ÷ 2$ e $2π$.'],
  ['Extremos', 'Combine $−1 ≤ sen x ≤ 1$ com as operações da expressão.']
], 'A senóide básica está pronta. Próxima aula: o que acontece com o gráfico quando mudamos $a$ e $b$ em $y = a + b · sen x$.'));

// ===================== AULA 47: parâmetros a e b =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 47', h1: 'Parâmetros da senóide: <span style="color:var(--primary);">centro e amplitude</span>',
  sub: 'A temperatura do corpo varia de 36,1 °C a 37,2 °C; 45 °C seria absurdo. Em funções do tipo y = a + b · sen(cx + d), os parâmetros fixam em que faixa de valores a onda oscila.',
  badges: [['a: centro'], ['b: amplitude', 'growth'], ['Im = [a − |b|, a + |b|]', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do gráfico base à onda deslocada e esticada.', [
  ['A família', 'y = a + b · sen(cx + d)', 'bulb'],
  ['Parâmetro a', 'sobe ou desce a onda inteira', 'target'],
  ['Parâmetro b', 'estica verticalmente (ou inverte)', 'chart'],
  ['Imagem', '[a − |b|, a + |b|]', 'link'],
  ['Problemas', 'identificar a e b em gráficos', 'scale']
]));
b.push(objetivosSlide([
  'Interpretar o parâmetro <strong>$a$</strong> como a <strong>ordenada do centro</strong> da onda e $b$ como a sua <strong>amplitude</strong>.',
  'Determinar a <strong>imagem</strong> $[a − |b|, a + |b|]$ e o efeito do <strong>sinal de $b$</strong>.',
  'Descobrir $a$ e $b$ a partir de um <strong>gráfico</strong> ou da <strong>imagem</strong>.'
], 'Dica', 'Leia $a$ no <strong>meio do gráfico</strong> (reta que divide a onda ao meio) e $|b|$ na <strong>distância do meio ao pico</strong>. Se a onda começa descendo, $b$ é negativo.', 'primary'));

b.push(sl('Para início de conversa', 'O que foge dos parâmetros?', `
          ${lede('A temperatura normal do corpo vai de $36,1$ °C a $37,2$ °C. Uma pessoa com $45$ °C está <strong>fora</strong> da faixa esperada. A faixa em que uma função seno oscila é controlada por seus <strong>parâmetros</strong>: veremos $a$ e $b$ nesta aula e $c$ e $d$ na próxima.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figOnda({ f: x => 2 + Math.sin(x), xmin: 0, xmax: 4 * Math.PI, ymin: -1.2, ymax: 3.6, w: 340, h: 170, tracejadas: [[2, 'var(--growth)']] })}
            ${mini('Na figura, a reta tracejada passa por $y = 2$ e a onda sobe e desce $1$ unidade. A função é:', ['$y = 1 + 2 · sen x$', '$y = 2 + sen x$', '$y = 2 · sen x$', '$y = sen (x + 2)$'], 1, 'Centro em $y = 2$ ($a = 2$) e amplitude $1$ ($b = 1$): $y = 2 + sen x$, com imagem $[1, 3]$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · a e b', 'y = a + b · sen x', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Forma geral: $y = a + b · sen (cx + d)$; aqui $c = 1$ e $d = 0$.</li>
                <li><strong>$a$ (centro):</strong> a reta $y = a$ divide a onda ao meio. $a > 0$ sobe o gráfico, $a < 0$ desce.</li>
                <li><strong>$b$ (amplitude):</strong> a onda sobe e desce $|b|$ unidades a partir do centro. Se $b < 0$, o gráfico fica <strong>invertido</strong> (espelhado no eixo do centro).</li>
                <li><strong>Imagem:</strong> $[a − |b|, a + |b|]$. O <strong>período não muda</strong>: continua $2π$.</li>
              </ul>
            </div>
            ${W.box('Mude a e b', W.row(W.rg('p47-a', 'a (centro)', -4, 4, 0.5, 2, ''), W.rg('p47-b', 'b (amplitude)', -4, 4, 0.5, 1.5, '')) + W.svg('p47-s', '0 0 380 220', '380px') + W.txt('p47-i', 'Imagem: ') + W.txt('p47-m', 'Máximo e mínimo: ') + W.hint('p47-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Subir a onda', 'Esboce $y = 2 + sen x$ a partir de $y = sen x$ e dê a imagem.', [
  ['Parâmetro a', '$a = 2$: todos os valores sobem $2$ unidades.'],
  ['Imagem', '$[2 − 1, 2 + 1] = [1, 3]$.']
], 'A onda oscila em torno de $y = 2$ com imagem $[1, 3]$.'));
b.push(exemplo('Exemplo resolvido', 'Inverter a onda', 'Como é o gráfico de $y = −2 · sen x$? Dê a imagem.', [
  ['Parâmetros', '$a = 0$ e $b = −2$.'],
  ['Efeito', 'O sinal negativo troca o sinal de todas as imagens: o gráfico fica invertido (começa descendo).'],
  ['Imagem', '$[0 − 2, 0 + 2] = [−2, 2]$.']
], 'Onda invertida, com imagem $[−2, 2]$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Imagem a partir da lei', 'Qual a imagem de $y = 1 − 4 · sen x$?', [
  ['Parâmetros', '$a = 1$ e $|b| = 4$.'],
  ['Imagem', '$[1 − 4, 1 + 4] = [−3, 5]$.']
], '$[−3, 5]$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Descobrir a lei pela imagem', 'Uma função $y = a + b · sen x$ (com $b > 0$) tem imagem $[−1, 5]$. Quais são $a$ e $b$?', [
  ['Centro', '$a$ é o ponto médio da imagem: $a = {−1 + 5|2} = 2$.'],
  ['Amplitude', '$b$ é a metade do comprimento: $b = {5 − (−1)|2} = 3$.']
], '$a = 2$ e $b = 3$: $y = 2 + 3 · sen x$.'.replace('${', '$ {'), 'decay'));

b.push(pratique('Imagem', 'A imagem de $y = −3 + 5 · sen x$ é:',
  ['$[−8, 2]$', '$[−5, 5]$', '$[2, 8]$', '$[−3, 5]$'], 0, '$[−3 − 5, −3 + 5] = [−8, 2]$. <strong>Alternativa A.</strong>'));
b.push(pratique('Qual função?', 'A função que tem imagem $[2, 5]$ é:',
  ['$y = 2,5 · sen x$', '$y = 2 + sen x$', '$y = 3,5 + 1,5 · sen x$', '$y = 2,5 + sen x$'], 2, 'Centro $(2 + 5) ÷ 2 = 3,5$ e amplitude $1,5$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Amplitude', 'A amplitude de $f(x) = 3 + 2 · sen (2x − 5)$ é:',
  ['$2$', '$3$', '$5$', '$2x − 5$'], 0, 'A amplitude é $|b| = 2$. <strong>Alternativa A.</strong>', '', 'decay'));
b.push(estiloEnem('Custo do produto', 'O custo unitário de um produto, em reais, varia com o tempo de acordo com $C = 150 + 50 · sen x$ ($x$ em radianos). Os custos máximo e mínimo são, respectivamente:',
  ['$200$ e $100$', '$150$ e $50$', '$200$ e $50$', '$250$ e $100$', '$100$ e $50$'], 0, '$Im = [150 − 50, 150 + 50] = [100, 200]$. <strong>Alternativa A.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os parâmetros a e b enganam', [
  ['Confundir a com o máximo', '$a$ é o <strong>centro</strong>; o máximo é $a + |b|$.'],
  ['Esquecer o módulo de b', 'A amplitude é $|b|$; com $b < 0$ a imagem é a mesma de $|b|$.'],
  ['Achar que a muda o período', 'Só $c$ muda o período (próxima aula); $a$ e $b$ não.'],
  ['Ler a no pico', 'O centro está no <strong>meio</strong> do gráfico, entre pico e vale.']
]));
b.push(quiz([
  { q: 'O parâmetro $a$ de $y = a + b · sen x$ indica:', o: ['o período', 'o centro da onda', 'a amplitude', 'o deslocamento horizontal'], a: 1 },
  { q: 'A imagem de $y = 2 · sen x$ é:', o: ['$[0, 2]$', '$[−2, 2]$', '$[−1, 1]$', '$[2, 4]$'], a: 1 },
  { q: 'Com $b < 0$, o gráfico:', o: ['sobe mais', 'fica invertido', 'muda o período', 'não muda'], a: 1 },
  { q: 'A imagem de $y = 4 + 3 · sen x$ é:', o: ['$[1, 7]$', '$[−3, 3]$', '$[4, 7]$', '$[0, 7]$'], a: 0 }
]));
b.push(fechamento([
  ['Centro', '$a$ é a ordenada da reta que divide a onda ao meio.'],
  ['Amplitude', '$|b|$ é quanto a onda sobe e desce; $b < 0$ inverte o gráfico.'],
  ['Imagem', '$[a − |b|, a + |b|]$; o período segue $2π$.']
], 'Com $a$ e $b$ dominados, falta mexer na largura e na posição horizontal. Próxima aula: os parâmetros $c$ e $d$.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-funcao-seno.html', html: K.deck({
  title: 'Função seno e sua senóide — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 46 · Função seno', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['f46-x'], function(){ var t = +$('f46-x').value; $('f46-xv').textContent = pt(t, 2); var x = t * Math.PI, svg = $('f46-s'), P = ondaW(svg, Math.sin, 1, 1, 0, 0, 0, 4 * Math.PI);
    el('line', {x1: P.X(x), y1: P.Y(0), x2: P.X(x), y2: P.Y(Math.sin(x)), stroke: 'var(--decay)', 'stroke-width': 2.6}, svg); el('circle', {cx: P.X(x), cy: P.Y(Math.sin(x)), r: 5.5, fill: 'var(--growth)'}, svg);
    var v = Math.sin(x); if(Math.abs(v) < 1e-9) v = 0; $('f46-v').textContent = pt(t, 2) + 'π ≈ ' + pt(x, 2) + ' rad · sen x = ' + pt(v, 3);
    $('f46-h').textContent = v === 0 ? 'Zero da função (x = kπ).' : Math.abs(Math.abs(v) - 1) < 1e-9 ? (v > 0 ? 'Máximo: sen x = 1.' : 'Mínimo: sen x = −1.') : v > 0 ? 'A senóide está acima do eixo x.' : 'A senóide está abaixo do eixo x.'; });`
}) });
pages.push({ out: BASE + 'aula-2-parametros-a-e-b.html', html: K.deck({
  title: 'Função seno: parâmetros a e b — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 47 · Parâmetros a e b', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['p47-a', 'p47-b'], function(){ var a = +$('p47-a').value, b = +$('p47-b').value; $('p47-av').textContent = pt(a, 1); $('p47-bv').textContent = pt(b, 1);
    ondaW($('p47-s'), Math.sin, b, 1, 0, a, 0, 2 * Math.PI);
    $('p47-i').textContent = '[' + pt(a - Math.abs(b), 1) + ', ' + pt(a + Math.abs(b), 1) + ']'; $('p47-m').textContent = pt(a + Math.abs(b), 1) + ' e ' + pt(a - Math.abs(b), 1);
    $('p47-h').textContent = (b === 0 ? 'Com b = 0 a função é constante, igual a a.' : b < 0 ? 'b < 0: gráfico invertido (começa descendo).' : 'b > 0: a onda começa subindo.') + ' Centro em y = ' + pt(a, 1) + ', amplitude ' + pt(Math.abs(b), 1) + '.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função seno: gráfico, centro e amplitude', accent: 'primary', icon: 'wave',
  aulas: [['Aula 46', 'A função seno: senóide, domínio, imagem e período', 'aula-1-funcao-seno.html'], ['Aula 47', 'Parâmetros a e b: centro e amplitude', 'aula-2-parametros-a-e-b.html']],
  pendente: true
}, pages };
