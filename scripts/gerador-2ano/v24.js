// Unidade v24 — Função cosseno: gráfico e parâmetros (aulas 50 e 51 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'funcao-cosseno', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v24', BRAND = 'Função cosseno';

// ===================== AULA 50: a função y = cos x =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 50', h1: 'A função cosseno: <span style="color:var(--primary);">a onda que começa no topo</span>',
  sub: 'O som que sai do fone de ouvido é uma onda, e muitas ondas sonoras são cossenóides. A função cosseno nasce da circunferência trigonométrica: a abscissa do ponto, acompanhada ao longo do giro.',
  badges: [['y = cos x'], ['começa em 1', 'growth'], ['período 2π', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da abscissa ao gráfico.', [
  ['Cosseno do arco', 'abscissa do ponto, de 1 a −1', 'bulb'],
  ['Crescente ou decrescente', 'o que acontece em cada quadrante', 'target'],
  ['A função', 'f(x) = cos x, com x real', 'chart'],
  ['O gráfico', 'cossenóide e seus pontos notáveis', 'link'],
  ['Relação com o seno', 'a mesma onda deslocada π/2', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a <strong>função cosseno</strong> $f(x) = cos x$ e descrever seu <strong>comportamento por quadrante</strong>.',
  'Construir o gráfico (<strong>cossenóide</strong>) e identificar <strong>domínio, imagem e período</strong>.',
  'Relacionar a cossenóide à senóide: $cos x = sen (x + {π|2})$.'
], 'Dica', 'O gráfico do cosseno <strong>começa no topo</strong> ($cos 0 = 1$), enquanto o do seno começa no meio. É assim que você reconhece um e outro rapidamente.', 'primary'));

a.push(sl('Para início de conversa', 'O som é uma onda', `
          ${lede('No celular, a música é guardada como <strong>números</strong>: o som é descrito por funções periódicas. Uma pressão do ar que sobe e desce regularmente pode ser modelada por uma <strong>função cosseno</strong>, como $P(t) = 2 · cos (πt)$.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figOnda({ f: Math.cos, xmin: 0, xmax: 4 * Math.PI, w: 360, h: 160, ymin: -1.4, ymax: 1.4 })}
            ${mini('No início do movimento ($x = 0$) a onda cosseno está:', ['no ponto mais alto, valor $1$', 'no zero', 'no ponto mais baixo', 'indefinida'], 0, '$cos 0 = 1$: a cossenóide começa no máximo.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · cosseno e movimento', 'Como o cosseno varia no giro', `
          <div class="grid2">
            <div>
              ${tbl(['Quadrante', 'Sinal', 'Variação (ao crescer o arco)'], [['1º', '$+$', 'decrescente (de $1$ a $0$)'], ['2º', '$−$', 'decrescente (de $0$ a $−1$)'], ['3º', '$−$', 'crescente (de $−1$ a $0$)'], ['4º', '$+$', 'crescente (de $0$ a $1$)']])}
              <p class="hint" style="margin-top:8px;">O cosseno é a <strong>abscissa</strong> do ponto: diminui enquanto o ponto vai para a esquerda e aumenta quando volta para a direita.</p>
            </div>
            <ul class="plain" style="font-size:.93rem;line-height:1.65;">
              <li>Valores notáveis: $cos 0 = 1$, $cos {π|2} = 0$, $cos π = −1$, $cos {3π|2} = 0$, $cos 2π = 1$.</li>
              <li>O cosseno é uma função <strong>par</strong>: $cos (−x) = cos x$ (o gráfico é simétrico em relação ao eixo $y$).</li>
            </ul>
          </div>`.replace('${', '$ {'), { cls: '' }));

a.push(sl('Teoria · a função cosseno', 'f(x) = cos x e sua cossenóide', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$f: ℝ → ℝ$, $f(x) = cos x$.</strong></li>
                <li><strong>Domínio:</strong> $ℝ$. <strong>Imagem:</strong> $[−1, 1]$. <strong>Período:</strong> $2π$.</li>
                <li>Pontos do 1º período: $(0, 1)$, $(π ÷ 2, 0)$, $(π, −1)$, $(3π ÷ 2, 0)$, $(2π, 1)$.</li>
                <li><strong>Zeros:</strong> $x = π ÷ 2 + kπ$. <strong>Máximo $1$</strong> em $x = 2kπ$; <strong>mínimo $−1$</strong> em $x = π + 2kπ$.</li>
                <li>Para $f(x) = cos (cx)$, o período é $2π ÷ |c|$.</li>
                <li>Mesma curva do seno, deslocada: $cos x = sen (x + π ÷ 2)$.</li>
              </ul>
            </div>
            ${W.box('Percorra a cossenóide', W.row(W.rg('f50-x', 'x (em π rad)', 0, 4, 0.05, 0.5, 'π')) + W.svg('f50-s', '0 0 380 220', '380px') + W.txt('f50-v', 'x · cos x: ') + W.hint('f50-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Cossenóide e senóide', `
          <div class="grid2">
            ${T.figOnda({ f: Math.cos, xmin: 0, xmax: 2 * Math.PI, w: 330, h: 190, marcas: [[0, 1, '(0, 1)', 8, 14], [Math.PI / 2, 0, '(π/2, 0)', 8, -8], [Math.PI, -1, '(π, −1)', 8, -8], [2 * Math.PI, 1, '(2π, 1)', -8, 14]] })}
            ${tbl(['x', '0', 'π/2', 'π', '3π/2', '2π'], [['cos x', '$1$', '$0$', '$−1$', '$0$', '$1$'], ['sen x', '$0$', '$1$', '$0$', '$−1$', '$0$']])}
          </div>
          <p class="hint" style="margin-top:8px;">As duas curvas têm o mesmo formato: deslocando a senóide $π ÷ 2$ para a esquerda, obtém-se a cossenóide.</p>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Pressão sonora', 'A pressão do ar de um som é $P(t) = 2 · cos (πt)$, com $t$ em segundos. Calcule $P(0)$, $P(0,5)$ e $P(1)$, e o período.', [
  ['t = 0', '$P(0) = 2 · cos 0 = 2$.'],
  ['t = 0,5', '$P(0,5) = 2 · cos ({π|2}) = 0$.'],
  ['t = 1', '$P(1) = 2 · cos π = −2$.'],
  ['Período', '$2π ÷ π = 2$ s.']
], '$P(0) = 2$, $P(0,5) = 0$, $P(1) = −2$; período de $2$ s.'));
a.push(exemplo('Exemplo resolvido', 'Corda de violão', 'O deslocamento de uma corda é $y(t) = 4 · cos (2πt)$ mm, com $t$ em segundos. Qual o deslocamento em $t = 0$ e em $t = 0,25$ s?', [
  ['t = 0', '$y(0) = 4 · cos 0 = 4$ mm.'],
  ['t = 0,25', '$2π · 0,25 = {π|2}$ ⇒ $y = 4 · cos ({π|2}) = 0$ mm.']
], 'Em $t = 0$ a corda está em $4$ mm (extremo); em $t = 0,25$ s passa pelo centro ($0$ mm).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Altura máxima na roda-gigante', 'A altura de uma cabine é $h(t) = 25 + 20 · cos ({πt|5})$ (metros, $t$ em minutos). Qual a altura máxima e quando ocorre?', [
  ['Cosseno máximo', '$cos θ ≤ 1$, com igualdade em $θ = 0$.'],
  ['Altura máxima', '$h = 25 + 20 · 1 = 45$ m.'],
  ['Quando', '${πt|5} = 0$ ⇒ $t = 0$ (e a cada $10$ min).'.replace('${', '$ {')]
], 'A altura máxima é $45$ m, em $t = 0$ (e a cada $10$ min).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Cosseno é a senóide deslocada', 'Mostre que $cos {π|3} = sen ({π|3} + {π|2})$ usando valores conhecidos.', [
  ['Lado esquerdo', '$cos {π|3} = {1|2}$.'],
  ['Lado direito', '${π|3} + {π|2} = {5π|6}$ (que é $150°$); $sen 150° = sen 30° = {1|2}$.'.replace('${', '$ {')]
], 'Os dois lados valem $ {1|2}$: a identidade se confirma.'.replace('${', '$ {'), 'decay'));

a.push(pratique('Valor máximo', 'O valor máximo de $y = 3 · cos x$ é:',
  ['$1$', '$3$', '$−3$', '$6$'], 1, '$−1 ≤ cos x ≤ 1$ ⇒ $−3 ≤ 3 cos x ≤ 3$. <strong>Alternativa B.</strong>'));
a.push(pratique('Onde começa', 'O gráfico de $y = cos x$ passa por qual ponto no início do período?',
  ['$(0, 0)$', '$(0, 1)$', '$(0, −1)$', '$(π, 0)$'], 1, '$cos 0 = 1$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Período', 'O período de $y = cos (2x)$ é:',
  ['$π ÷ 2$', '$π$', '$2π$', '$4π$'], 1, '$2π ÷ 2 = π$. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Vibração', 'A vibração de uma membrana é $y(t) = 6 · cos (4πt)$ (mm, $t$ em s). O deslocamento em $t = {1|4}$ s é:'.replace('${', '$ {'),
  ['$−6$ mm', '$0$ mm', '$3$ mm', '$6$ mm', '$12$ mm'], 0, '$4π · {1|4} = π$ e $cos π = −1$: $y = −6$ mm. <strong>Alternativa A.</strong>'.replace('${', '$ {')));

a.push(armadilhas('Cuidados', 'Onde a função cosseno engana', [
  ['Confundir com o seno', 'O cosseno começa no <strong>máximo</strong> ($cos 0 = 1$); o seno começa no zero.'],
  ['Esquecer que x é real', 'Em $cos (πt)$ o argumento é um número em radianos, não graus.'],
  ['Período errado', 'Para $cos (cx)$ o período é $2π ÷ |c|$, não $2π · c$.'],
  ['Cosseno “maior que 1”', 'O cosseno nunca passa de $1$; se o resultado deu $2,3$, há erro.']
]));
a.push(quiz([
  { q: 'O domínio de $f(x) = cos x$ é:', o: ['$[−1, 1]$', '$ℝ$', '$[0, 2π]$', '$ℝ_{+}$'], a: 1 },
  { q: '$cos π$ vale:', o: ['$1$', '$0$', '$−1$', '$π$'], a: 2 },
  { q: 'O gráfico da função cosseno corta o eixo $x$ em:', o: ['$kπ$', '$π ÷ 2 + kπ$', '$2kπ$', 'nunca'], a: 1 },
  { q: 'A função cosseno é igual à função seno:', o: ['deslocada $π ÷ 2$ para a esquerda', 'deslocada $π$ para cima', 'invertida', 'multiplicada por $2$'], a: 0 }
]));
a.push(fechamento([
  ['Função', '$f(x) = cos x$: domínio $ℝ$, imagem $[−1, 1]$, período $2π$.'],
  ['Gráfico', 'Cossenóide pelos pontos $(0, 1)$, $(π ÷ 2, 0)$, $(π, −1)$, $(3π ÷ 2, 0)$, $(2π, 1)$.'],
  ['Relação', '$cos x = sen (x + π ÷ 2)$: mesma curva, deslocada.']
], 'Com a cossenóide básica, podemos agora mudar seus parâmetros. Próxima aula: $a$, $b$, $c$ e $d$ na função cosseno.'));

// ===================== AULA 51: parâmetros =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 51', h1: 'Parâmetros da cossenóide: <span style="color:var(--primary);">centro, amplitude e período</span>',
  sub: 'O movimento de um ventilador, o giro das rodas de uma bicicleta, as fases da lua: tudo se repete. Em y = a + b · cos(cx + d), cada parâmetro controla uma característica da onda.',
  badges: [['a: centro'], ['b: amplitude', 'growth'], ['c: período', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Da cossenóide básica à família completa.', [
  ['A família', 'y = a + b · cos(cx + d)', 'bulb'],
  ['Parâmetro a', 'sobe ou desce o gráfico', 'target'],
  ['Parâmetro b', 'amplitude e inversão', 'chart'],
  ['Parâmetro c', 'período 2π ÷ |c|', 'link'],
  ['Imagem', '[a − |b|, a + |b|]', 'scale']
]));
b.push(objetivosSlide([
  'Identificar o efeito dos parâmetros <strong>$a$, $b$, $c$ e $d$</strong> no gráfico de $y = a + b · cos (cx + d)$.',
  'Determinar <strong>imagem</strong>, <strong>amplitude</strong> e <strong>período</strong> a partir da lei.',
  'Escrever a lei a partir do <strong>máximo, do mínimo e do período</strong>.'
], 'Dica', 'Tudo o que você aprendeu na função seno vale aqui: $a$ centro, $|b|$ amplitude, período $2π ÷ |c|$. A <strong>diferença</strong> é o ponto de partida: com $b > 0$ e $d = 0$, a cossenóide parte do <strong>máximo</strong>.', 'primary'));

b.push(sl('Para início de conversa', 'Qual a posição horizontal do ponto que gira?', `
          ${lede('Um ponto percorre uma circunferência. Sua posição <strong>horizontal</strong> ao longo do tempo é descrita por uma função cosseno: no ventilador, na roda da bicicleta, na lua. Variar o <strong>raio</strong> muda a amplitude; variar a <strong>velocidade</strong>, o período; variar o <strong>centro</strong>, a posição média.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figOnda({ f: x => 1 + 2 * Math.cos(x), xmin: 0, xmax: 4 * Math.PI, ymin: -2.4, ymax: 3.8, w: 350, h: 170, tracejadas: [[1, 'var(--growth)']] })}
            ${mini('A função da figura tem centro em $y = 1$ e oscila $2$ unidades. Ela é:', ['$y = 2 + cos x$', '$y = 1 + 2 · cos x$', '$y = 2 · cos x$', '$y = cos (x + 1)$'], 1, '$a = 1$ (centro) e $b = 2$ (amplitude); com $b > 0$ ela parte do máximo $3$: $y = 1 + 2 · cos x$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · a família do cosseno', 'y = a + b · cos (cx + d)', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$a$:</strong> ordenada do centro (reta que divide a onda ao meio).</li>
                <li><strong>$b$:</strong> amplitude $|b|$; se $b < 0$ o gráfico é <strong>invertido</strong> (parte do mínimo).</li>
                <li><strong>$c$:</strong> período $p = 2π ÷ |c|$.</li>
                <li><strong>$d$:</strong> deslocamento horizontal; o período “básico” começa em $x = −d ÷ c$.</li>
                <li><strong>Imagem:</strong> $[a − |b|, a + |b|]$ (só depende de $a$ e $b$).</li>
              </ul>
            </div>
            ${W.box('Mude a, b e c', W.row(W.rg('p51-a', 'a', -3, 3, 0.5, 1, ''), W.rg('p51-b', 'b', -3, 3, 0.5, 2, ''), W.rg('p51-c', 'c', 0.5, 3, 0.5, 1, '')) + W.svg('p51-s', '0 0 380 220', '380px') + W.txt('p51-i', 'Imagem: ') + W.txt('p51-p', 'Período: ') + W.hint('p51-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'O parâmetro a', 'Esboce $y = 2 + cos x$ a partir de $y = cos x$.', [
  ['Efeito de a', '$a = 2$: todos os valores sobem $2$ unidades.'],
  ['Imagem', '$[2 − 1, 2 + 1] = [1, 3]$.']
], 'A onda oscila em torno de $y = 2$, entre $1$ e $3$.'));
b.push(exemplo('Exemplo resolvido', 'O sinal de b', 'Compare $y = cos x$ e $y = −2 · cos x$.', [
  ['Amplitude', '$|b| = 2$: a onda sobe e desce $2$ unidades.'],
  ['Sinal negativo', 'Troca o sinal de todas as imagens: em $x = 0$, $y = −2$ (começa no mínimo).'],
  ['Imagem', '$[−2, 2]$.']
], 'Cossenóide invertida, com imagem $[−2, 2]$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Imagem e período', 'Determine a imagem e o período de $f(x) = 4 · cos (3x)$.', [
  ['Parâmetros', '$a = 0$, $b = 4$, $c = 3$.'],
  ['Imagem', '$[0 − 4, 0 + 4] = [−4, 4]$.'],
  ['Período', '$2π ÷ 3$.']
], 'Imagem $[−4, 4]$ e período $ {2π|3}$.'.replace('${', '$ {'), 'growth'));
b.push(exemplo('Exemplo resolvido', 'Lei a partir do máximo e do mínimo', 'Uma função $f(x) = a + b · cos x$, com $b > 0$, tem máximo $7$ e mínimo $1$. Determine $a$ e $b$.', [
  ['Centro', '$a = (7 + 1) ÷ 2 = 4$.'],
  ['Amplitude', '$b = (7 − 1) ÷ 2 = 3$.']
], '$a = 4$ e $b = 3$: $f(x) = 4 + 3 · cos x$.', 'decay'));

b.push(pratique('Imagem', 'A imagem de $y = 2 + 3 · cos x$ é:',
  ['$[−1, 5]$', '$[−3, 3]$', '$[2, 5]$', '$[1, 4]$'], 0, '$[2 − 3, 2 + 3] = [−1, 5]$. <strong>Alternativa A.</strong>'));
b.push(pratique('Amplitude', 'A amplitude de $f(x) = 4 + 5 · cos (3x + 2)$ é:',
  ['$3$', '$4$', '$5$', '$9$'], 2, 'A amplitude é $|b| = 5$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Período', 'O período de $y = 1 − cos ({x|3})$ é:',
  ['$ {2π|3}$', '$2π$', '$3π$', '$6π$'].map(t => t.replace('${', '$ {')), 3, '$c = {1|3}$ ⇒ $p = 2π ÷ {1|3} = 6π$. <strong>Alternativa D.</strong>'.replace('${', '$ {'), '', 'decay'));
b.push(estiloEnem('Ventilador', 'A posição horizontal de uma pá de ventilador, em cm, é $x(t) = 15 · cos (2πt)$, com $t$ em segundos. Quantas voltas o ventilador dá em $10$ s?',
  ['$2$', '$5$', '$10$', '$15$', '$20$'], 2, 'O período é $2π ÷ 2π = 1$ s: uma volta por segundo, $10$ voltas em $10$ s. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os parâmetros do cosseno enganam', [
  ['Confundir a com a amplitude', '$a$ é o <strong>centro</strong>; a amplitude é $|b|$.'],
  ['Esquecer o módulo', 'Com $b < 0$ a amplitude ainda é $|b|$ e a imagem usa $|b|$.'],
  ['Misturar com o seno', 'Se a onda parte do máximo, é cosseno (ou seno deslocado).'],
  ['Período em c', 'O período é $2π ÷ |c|$: $c$ maior, período menor.']
]));
b.push(quiz([
  { q: 'A imagem de $y = 3 · cos x$ é:', o: ['$[0, 3]$', '$[−3, 3]$', '$[−1, 1]$', '$[3, 6]$'], a: 1 },
  { q: 'A função $y = −cos x$ em $x = 0$ vale:', o: ['$1$', '$0$', '$−1$', 'não existe'], a: 2 },
  { q: 'O período de $y = cos (4x)$ é:', o: ['$π ÷ 2$', '$π$', '$2π$', '$8π$'], a: 0 },
  { q: 'Com máximo $5$ e mínimo $1$, o centro $a$ é:', o: ['$1$', '$2$', '$3$', '$4$'], a: 2 }
]));
b.push(fechamento([
  ['Centro e amplitude', '$a$ e $|b|$; imagem $[a − |b|, a + |b|]$.'],
  ['Período', '$2π ÷ |c|$.'],
  ['Ponto de partida', 'Com $b > 0$, $d = 0$: a cossenóide parte do máximo.']
], 'Tendo os parâmetros, podemos modelar fenômenos reais. Próxima aula: o cosseno em pêndulos, pressão arterial e marés.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-funcao-cosseno.html', html: K.deck({
  title: 'Função cosseno e sua cossenóide — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 50 · Função cosseno', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['f50-x'], function(){ var t = +$('f50-x').value; $('f50-xv').textContent = pt(t, 2); var x = t * Math.PI, svg = $('f50-s'), P = ondaW(svg, Math.cos, 1, 1, 0, 0, 0, 4 * Math.PI);
    el('line', {x1: P.X(x), y1: P.Y(0), x2: P.X(x), y2: P.Y(Math.cos(x)), stroke: 'var(--decay)', 'stroke-width': 2.6}, svg); el('circle', {cx: P.X(x), cy: P.Y(Math.cos(x)), r: 5.5, fill: 'var(--growth)'}, svg);
    var v = Math.cos(x); if(Math.abs(v) < 1e-9) v = 0; $('f50-v').textContent = pt(t, 2) + 'π ≈ ' + pt(x, 2) + ' rad · cos x = ' + pt(v, 3);
    $('f50-h').textContent = v === 0 ? 'Zero da função (x = π/2 + kπ).' : Math.abs(Math.abs(v) - 1) < 1e-9 ? (v > 0 ? 'Máximo: cos x = 1.' : 'Mínimo: cos x = −1.') : v > 0 ? 'A cossenóide está acima do eixo x.' : 'A cossenóide está abaixo do eixo x.'; });`
}) });
pages.push({ out: BASE + 'aula-2-parametros-da-cossenoide.html', html: K.deck({
  title: 'Função cosseno: parâmetros — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 51 · Parâmetros da função cosseno', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['p51-a', 'p51-b', 'p51-c'], function(){ var a = +$('p51-a').value, b = +$('p51-b').value, c = +$('p51-c').value; $('p51-av').textContent = pt(a, 1); $('p51-bv').textContent = pt(b, 1); $('p51-cv').textContent = pt(c, 1);
    ondaW($('p51-s'), Math.cos, b, c, 0, a, 0, 2 * Math.PI); var p = 2 * Math.PI / c;
    $('p51-i').textContent = '[' + pt(a - Math.abs(b), 1) + ', ' + pt(a + Math.abs(b), 1) + ']'; $('p51-p').textContent = (Math.abs(p - Math.PI) < 1e-9 ? 'π' : Math.abs(p - 2 * Math.PI) < 1e-9 ? '2π' : pt(p / Math.PI, 3) + 'π') + ' ≈ ' + pt(p, 2);
    $('p51-h').textContent = b === 0 ? 'Com b = 0 a função é constante.' : (b > 0 ? 'b > 0: parte do máximo (' + pt(a + b, 1) + ').' : 'b < 0: gráfico invertido, parte do mínimo (' + pt(a + b, 1) + ').'); });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função cosseno: gráfico e parâmetros', accent: 'decay', icon: 'wave',
  aulas: [['Aula 50', 'A função cosseno: cossenóide, domínio, imagem e período', 'aula-1-funcao-cosseno.html'], ['Aula 51', 'Parâmetros da função cosseno', 'aula-2-parametros-da-cossenoide.html']],
  pendente: true
}, pages };
