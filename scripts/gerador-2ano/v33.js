// Unidade v33 — Retomada: equação do 2º grau e raízes de funções (aulas R9 e R10 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { W, WJS, BIND } = K;
const R = require('./rev.js');
const TRI = 2, DIR = 'retomada-equacao-do-2-grau', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v33', BRAND = 'Retomada: equação do 2º grau';

const UT = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== R9: equação do 2º grau =====================
const a = R.build({
  eb: 'Matemática · 2ª série · Retomada R9', h1: 'Retomada: <span style="color:var(--primary);">equação do 2º grau</span>',
  sub: 'Uma bola chutada descreve uma parábola. Para saber onde ela está em cada instante, e quando volta ao chão, resolvemos equações do 2º grau com Bhaskara ou com soma e produto.',
  badges: [['ax² + bx + c = 0'], ['Δ = b² − 4ac', 'growth'], ['soma e produto', 'decay']],
  roteiro: ['Das raízes ao problema.', [['Forma geral', 'ax² + bx + c = 0, com a ≠ 0', 'bulb'], ['Fórmula resolutiva', 'Bhaskara e o discriminante Δ', 'target'], ['Soma e produto', 'Girard: −b ÷ a e c ÷ a', 'chart'], ['f(x) = k', 'igualar a zero e resolver', 'link'], ['Problemas', 'receita e uma única raiz', 'scale']]],
  objetivos: ['Resolver <strong>equações do 2º grau</strong> pela fórmula resolutiva e por <strong>soma e produto</strong>.', 'Usar o <strong>discriminante</strong> $Δ$ para saber quantas raízes reais existem.', 'Resolver <strong>problemas</strong> que levam a equações do 2º grau (receita, áreas, trajetórias).'],
  dica: 'Antes de aplicar a fórmula, <strong>iguale a zero</strong> e identifique $a$, $b$ e $c$ com seus <strong>sinais</strong>.',
  abertura: { titulo: 'A bola e a parábola', texto: 'Uma bola de futebol chutada descreve, em geral, uma <strong>parábola</strong>. Se a altura é $h = −5t^{2} + 20t$, quando ela volta ao chão ($h = 0$)? Precisamos resolver uma equação do 2º grau.',
    extra: W.box('Resolva ax² + bx + c = 0', W.row(W.nm('q9-a', 'a', 1, 'any'), W.nm('q9-b', 'b', -8, 'any'), W.nm('q9-c', 'c', 15, 'any')) + W.svg('q9-s', '0 0 360 200', '340px') + W.txt('q9-d', 'Δ = ') + W.txt('q9-r', 'Raízes: ') + W.hint('q9-h')),
    mini: ['Em $h = −5t^{2} + 20t$, a bola está no chão quando $t =$', ['$0$ ou $2$', '$0$ ou $4$', '$2$ ou $4$', 'só $t = 4$'], 1, '$−5t(t − 4) = 0$ ⇒ $t = 0$ (chute) ou $t = 4$ (volta ao chão).'] },
  teoria: [
    { eb: 'Teoria · como resolver', titulo: 'Bhaskara, discriminante e soma e produto', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Forma geral:</strong> $ax^{2} + bx + c = 0$, com $a ≠ 0$.</li>
                <li><strong>Discriminante:</strong> $Δ = b^{2} − 4ac$. <strong>Raízes:</strong> $x = {−b ± √{Δ}|2a}$.</li>
                <li>$Δ > 0$: duas raízes reais diferentes. $Δ = 0$: duas raízes iguais (o vértice). $Δ < 0$: nenhuma raiz real.</li>
                <li><strong>Soma e produto:</strong> $x' + x'' = {−b|a}$ e $x' · x'' = {c|a}$.</li>
                <li><strong>Função × equação:</strong> as raízes de $f(x) = ax^{2} + bx + c$ são as soluções de $f(x) = 0$. Para $f(x) = k$, resolva $ax^{2} + bx + c − k = 0$.</li>
              </ul>
            </div>
            <div>
              <p class="hint">Observe no widget: com $Δ > 0$ a parábola corta o eixo $x$ em dois pontos; com $Δ = 0$ ela apenas toca; com $Δ < 0$ não toca.</p>
            </div>
          </div>` }
  ],
  exemplos: [
    ['Resolver por Bhaskara', 'Resolva $x^{2} − 8x + 15 = 0$.', [['Coeficientes', '$a = 1$, $b = −8$, $c = 15$.'], ['Discriminante', '$Δ = 64 − 60 = 4$.'], ['Raízes', '$x = {8 ± 2|2}$: $x = 5$ ou $x = 3$.']], '$x = 3$ ou $x = 5$.'],
    ['f(x) = k', 'Para $f(x) = x^{2} − 8x + 15$, em que valores de $x$ temos $f(x) = 3$?', [['Igualar', '$x^{2} − 8x + 15 = 3$ ⇒ $x^{2} − 8x + 12 = 0$.'], ['Soma e produto', '$x\' + x\'\' = 8$ e $x\' · x\'\' = 12$: números $2$ e $6$.']], '$x = 2$ ou $x = 6$.'],
    ['Receita da livraria', 'Uma livraria vende um livro por R$ 20,00 e vende $60$ por mês. Para cada R$ 1,00 de desconto, vende $5$ a mais. Para qual desconto $x$ a receita $(20 − x)(60 + 5x)$ é de R$ 1.280,00 (o máximo possível)?', [['Montar', '$(20 − x)(60 + 5x) = 1200 + 40x − 5x^{2}$.'], ['Igualar', '$−5x^{2} + 40x + 1200 = 1280$ ⇒ $−5x^{2} + 40x − 80 = 0$.'], ['Simplificar', '$x^{2} − 8x + 16 = 0$ ⇒ $Δ = 0$ ⇒ $x = 4$.']], 'Desconto de R$ 4,00 (única raiz: o máximo).'],
    ['Uma única raiz real', 'Para que valores de $p$ a equação $x^{2} + px + 4 = 0$ tem uma só raiz real?', [['Condição', '$Δ = 0$: $p^{2} − 16 = 0$.'], ['Resolver', '$p = 4$ ou $p = −4$.']], '$p = ±4$.']
  ],
  pratique: [
    ['Raiz positiva', 'Se $x$ é real positivo e $2x^{2} + 10x − 28 = 0$, então $x$ vale:', ['$2$', '$5$', '$7$', '$14$'], 0, 'Dividindo por $2$: $x^{2} + 5x − 14 = 0$ ⇒ $x = 2$ ou $x = −7$. <strong>Alternativa A.</strong>'],
    ['A outra raiz', 'A equação $x^{2} − 8x + k = 0$ tem uma raiz igual a $3$. A outra raiz é:', ['$3$', '$4$', '$5$', '$8$'], 2, 'A soma das raízes é $8$: $3 + x = 8$ ⇒ $x = 5$. <strong>Alternativa C.</strong>'],
    ['Discriminante', 'A equação $x^{2} − 6x + 9 = 0$ tem:', ['duas raízes diferentes', 'uma raiz dupla', 'nenhuma raiz real', 'três raízes'], 1, '$Δ = 36 − 36 = 0$: raiz dupla $x = 3$. <strong>Alternativa B.</strong>']
  ],
  enem: ['Preço e quantidade', 'Uma loja vende um produto a R$ 12,00 e $80$ unidades por mês. Para cada R$ 1,00 de desconto $x$, vende $10$ unidades a mais: receita $(12 − x)(80 + 10x)$. A receita é R$ 1.000,00 (o máximo) para um desconto de:', ['R$ 2,00', 'R$ 4,00', 'R$ 6,00', 'R$ 8,00', 'R$ 10,00'], 0, '$−10x^{2} + 40x + 960 = 1000$ ⇒ $x^{2} − 4x + 4 = 0$ ⇒ $x = 2$ (raiz dupla). <strong>Alternativa A.</strong>'],
  cuidados: [['Esquecer de igualar a zero', 'A fórmula só vale para $ax^{2} + bx + c = 0$.'], ['Sinal de b', 'Em $x = {−b ± √{Δ}|2a}$, o $−b$ muda o sinal de $b$.'], ['Raiz descartável', 'Em problemas de lados e tempos, descarte a raiz negativa.'], ['Dividir por a só em parte', 'Ao dividir a equação por um número, divida <strong>todos</strong> os termos.']],
  quiz: [{ q: '$Δ = b^{2} − 4ac$ vale $0$. A equação tem:', o: ['duas raízes diferentes', 'uma raiz dupla', 'nenhuma raiz', 'infinitas raízes'], a: 1 }, { q: 'A soma das raízes de $x^{2} − 5x + 6 = 0$ é:', o: ['$−5$', '$5$', '$6$', '$−6$'], a: 1 }, { q: 'O produto das raízes de $x^{2} − 5x + 6 = 0$ é:', o: ['$5$', '$−5$', '$6$', '$1$'], a: 2 }, { q: 'Quantas raízes reais tem $x^{2} + 1 = 0$?', o: ['$0$', '$1$', '$2$', '$4$'], a: 0 }],
  fecha: { cards: [['Fórmula', '$x = {−b ± √{Δ}|2a}$ com $Δ = b^{2} − 4ac$.'], ['Girard', 'Soma $−b ÷ a$ e produto $c ÷ a$.'], ['Problemas', 'Monte a equação, iguale a zero, resolva e interprete.']], msg: 'Equações do 2º grau resolvem trajetórias, receitas e áreas. Agora, as raízes e o vértice no gráfico.' }
});

// ===================== R10: raízes de uma função =====================
const b = R.build({
  eb: 'Matemática · 2ª série · Retomada R10', h1: 'Retomada: <span style="color:var(--primary);">raízes, vértice e simetria da parábola</span>',
  sub: 'A parábola tem um eixo de simetria vertical que funciona como espelho: as raízes ficam à mesma distância do vértice. Isso dá atalhos para achar alturas mínimas, máximas e zeros.',
  badges: [['raízes: f(x) = 0'], ['vértice: −b ÷ 2a', 'growth'], ['eixo de simetria', 'decay']],
  roteiro: ['Dos quatro pontos principais ao problema.', [['Concavidade', 'sinal de a', 'bulb'], ['Raízes', 'onde corta o eixo x', 'target'], ['Corte em y', 'o ponto (0, c)', 'chart'], ['Vértice e eixo', 'x_v = (x\' + x\'\') ÷ 2', 'link'], ['Aplicação', 'o fio entre dois postes', 'scale']]],
  objetivos: ['Reconhecer os <strong>pontos principais</strong> da parábola: raízes, corte em $y$, vértice e eixo de simetria.', 'Usar a <strong>simetria</strong> para achar o vértice a partir das raízes (e vice-versa).', 'Resolver problemas de <strong>altura mínima e máxima</strong> modelados por funções quadráticas.'],
  dica: 'O vértice fica <strong>no meio das duas raízes</strong>: $x_{v} = {x\' + x\'\'|2}$. Depois, substitua $x_{v}$ na função para achar $y_{v}$.',
  abertura: { titulo: 'O espelho da parábola', texto: 'Um fio elétrico entre dois postes de mesma altura forma uma curva em formato de parábola. Pela <strong>simetria</strong>, o ponto mais baixo do fio fica no <strong>meio</strong> entre os postes.',
    extra: W.box('Explore a parábola', W.row(W.nm('r10-a', 'a', 1, 'any'), W.nm('r10-b', 'b', -4, 'any'), W.nm('r10-c', 'c', -5, 'any')) + W.svg('r10-s', '0 0 360 220', '340px') + W.txt('r10-r', 'Raízes: ') + W.txt('r10-v', 'Vértice: ') + W.hint('r10-h')),
    mini: ['Se as raízes de uma parábola são $0$ e $10$, o eixo de simetria é a reta:', ['$x = 0$', '$x = 5$', '$x = 10$', '$x = 20$'], 1, '$x_{v} = (0 + 10) ÷ 2 = 5$.'] },
  teoria: [
    { eb: 'Teoria · pontos principais', titulo: 'Raízes, corte em y, vértice e eixo', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Concavidade:</strong> $a > 0$ para cima; $a < 0$ para baixo.</li>
                <li><strong>Raízes:</strong> $f(x) = 0$; dependem de $Δ$.</li>
                <li><strong>Corte em $y$:</strong> $(0, c)$.</li>
                <li><strong>Vértice:</strong> $x_{v} = {−b|2a}$ e $y_{v} = {−Δ|4a}$ (mínimo se $a > 0$, máximo se $a < 0$).</li>
                <li><strong>Eixo de simetria:</strong> $x = x_{v}$, e vale $x_{v} = {x\' + x\'\'|2}$.</li>
              </ul>
            </div>
            <div><p class="hint">Se você conhece o vértice e <strong>uma</strong> raiz, a outra é a reflexão no eixo: $x'' = 2x_{v} − x'$.</p></div>
          </div>` }
  ],
  exemplos: [
    ['O fio entre os postes', 'Dois postes de $8$ m de altura distam $10$ m. O fio é modelado por $y = 0,04x^{2} − 0,4x$, com $A$ na origem. Qual a menor distância do fio ao solo?', [['Raízes', '$0,04x(x − 10) = 0$: $x = 0$ e $x = 10$.'], ['Vértice', '$x_{v} = 5$; $y_{v} = 0,04 · 25 − 0,4 · 5 = 1 − 2 = −1$.'], ['Altura', 'O fio desce $1$ m abaixo do topo: $8 − 1 = 7$ m.']], 'A menor distância do fio ao solo é $7$ m.'],
    ['Raiz que falta', 'O vértice de uma parábola é $(5, −4)$ e uma raiz é $7$. Qual a outra?', [['Reflexão', '$x\'\' = 2 · 5 − 7 = 3$.']], 'As raízes são $3$ e $7$.'],
    ['Do gráfico à lei', 'Uma parábola passa por $(0, 0)$ e $(4, 0)$ com concavidade para cima. Onde está o vértice e quanto vale $f(x) = x^{2} − 4x$ nele?', [['Eixo', '$x_{v} = (0 + 4) ÷ 2 = 2$.'], ['Vértice', '$f(2) = 4 − 8 = −4$.']], 'Vértice em $(2, −4)$ (valor mínimo $−4$).'],
    ['Altura máxima', 'A altura de um aviãozinho é $h(x) = −{2|3}x^{2} + 8x + 8$ (metros). Qual a altura máxima?', [['Vértice', '$x_{v} = {−8|2 · (−{2|3})} = {−8|−{4|3}} = 6$.'], ['Altura', '$h(6) = −{2|3} · 36 + 48 + 8 = −24 + 56 = 32$ m.']], 'A altura máxima é $32$ m.']
  ],
  pratique: [
    ['Eixo de simetria', 'As raízes de uma função quadrática são $−2$ e $6$. O eixo de simetria é:', ['$x = 1$', '$x = 2$', '$x = 4$', '$x = 8$'], 1, '$(−2 + 6) ÷ 2 = 2$. <strong>Alternativa B.</strong>'],
    ['Vértice', 'O vértice de $f(x) = x^{2} − 6x + 5$ é:', ['$(3, −4)$', '$(−3, 4)$', '$(6, 5)$', '$(3, 4)$'], 0, '$x_{v} = 3$; $f(3) = 9 − 18 + 5 = −4$. <strong>Alternativa A.</strong>'],
    ['A outra raiz', 'O vértice de uma parábola é $(3, −1)$ e uma raiz é $4$. A outra raiz é:', ['$1$', '$2$', '$3$', '$5$'], 1, '$2 · 3 − 4 = 2$. <strong>Alternativa B.</strong>']
  ],
  enem: ['Fio de alta tensão', 'Dois postes de $6$ m de altura distam $8$ m e o fio entre eles segue $y = 0,02x^{2} − 0,16x$ (com $A$ na origem). A menor distância do fio ao solo é:', ['$5,36$ m', '$5,68$ m', '$5,84$ m', '$5,98$ m', '$5,99$ m'], 1, 'Vértice em $x = 4$: $y = 0,32 − 0,64 = −0,32$; distância $6 − 0,32 = 5,68$ m. <strong>Alternativa B.</strong>'],
  cuidados: [['Vértice no lugar errado', '$x_{v} = −b ÷ 2a$, não $b ÷ 2a$.'], ['Esquecer o sinal de y_v', 'Se o vértice está abaixo do eixo $x$, $y_{v}$ é negativo.'], ['Simetria sem raízes', 'Se $Δ < 0$ não há raízes, mas o eixo $x = −b ÷ 2a$ continua existindo.'], ['Altura mínima do fio', 'Some (ou subtraia) $y_{v}$ da altura do topo dos postes, conforme o sinal.']],
  quiz: [{ q: 'O vértice de $y = x^{2} − 4x + 3$ tem abscissa:', o: ['$−2$', '$2$', '$4$', '$−4$'], a: 1 }, { q: 'Em uma parábola com $a < 0$, o vértice é:', o: ['mínimo', 'máximo', 'raiz', 'ponto de corte em $y$'], a: 1 }, { q: 'Raízes $1$ e $5$ ⇒ eixo de simetria:', o: ['$x = 1$', '$x = 3$', '$x = 5$', '$x = 6$'], a: 1 }, { q: 'A parábola $y = x^{2} + 1$ corta o eixo $x$?', o: ['em $x = 1$', 'em $x = −1$', 'em dois pontos', 'não corta'], a: 3 }],
  fecha: { cards: [['Vértice', '$x_{v} = {−b|2a}$ e $y_{v} = {−Δ|4a}$.'], ['Simetria', '$x_{v} = {x\' + x\'\'|2}$; reflexão: $x\'\' = 2x_{v} − x\'$.'], ['Problemas', 'Achar o extremo da função e interpretar no contexto.']], msg: 'Raízes e vértice resolvem a maior parte dos problemas de parábola. Próxima retomada: comportamento de funções e sistemas lineares.' }
});

const pages = [];
pages.push({ out: BASE + 'aula-1-retomada-equacao-do-2-grau.html', html: K.deck({
  title: 'Retomada: equação do 2º grau — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Retomada R9 · Equação do 2º grau', slides: a,
  extra: WJS + BIND + UT + String.raw`
  bind(['q9-a', 'q9-b', 'q9-c'], function(){ var a = +$('q9-a').value, b = +$('q9-b').value, c = +$('q9-c').value, svg = $('q9-s');
    if(!isFinite(a) || a === 0){ svg.innerHTML = ''; $('q9-d').textContent = '—'; $('q9-r').textContent = 'a ≠ 0'; return; }
    var D = b * b - 4 * a * c, xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, w = Math.max(4, Math.abs(xv) + (D > 0 ? Math.sqrt(D) / Math.abs(a) : 2)), xmin = xv - w, xmax = xv + w, ymn = Math.min(yv, 0, c) - 2, ymx = Math.max(yv, 0, c) + 2;
    if(a < 0){ ymx = Math.max(ymx, yv + 2); } var f = function(x){ return a * x * x + b * x + c; };
    var P = plano(svg, Math.floor(xmin), Math.ceil(xmax), Math.floor(ymn), Math.ceil(ymx), 360, 200, 0); curva(svg, P, f, Math.floor(xmin), Math.ceil(xmax), Math.floor(ymn), Math.ceil(ymx), 'var(--primary)');
    $('q9-d').textContent = pt(D);
    if(D > 0){ var r1 = (-b - Math.sqrt(D)) / (2 * a), r2 = (-b + Math.sqrt(D)) / (2 * a); ponto(svg, P, r1, 0, 'var(--growth)', ''); ponto(svg, P, r2, 0, 'var(--growth)', ''); $('q9-r').textContent = pt(Math.min(r1, r2)) + ' e ' + pt(Math.max(r1, r2)); $('q9-h').textContent = 'Δ > 0: duas raízes reais. Soma = ' + pt(r1 + r2) + ' (= −b/a) e produto = ' + pt(r1 * r2) + ' (= c/a).'; }
    else if(D === 0){ ponto(svg, P, xv, 0, 'var(--growth)', ''); $('q9-r').textContent = pt(xv) + ' (raiz dupla)'; $('q9-h').textContent = 'Δ = 0: a parábola toca o eixo x no vértice.'; }
    else { $('q9-r').textContent = 'sem raízes reais'; $('q9-h').textContent = 'Δ < 0: a parábola não corta o eixo x.'; } });`
}) });
pages.push({ out: BASE + 'aula-2-retomada-raizes-e-vertice.html', html: K.deck({
  title: 'Retomada: raízes, vértice e simetria — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Retomada R10 · Raízes e vértice', slides: b,
  extra: WJS + BIND + UT + String.raw`
  bind(['r10-a', 'r10-b', 'r10-c'], function(){ var a = +$('r10-a').value, b = +$('r10-b').value, c = +$('r10-c').value, svg = $('r10-s');
    if(!isFinite(a) || a === 0){ svg.innerHTML = ''; $('r10-r').textContent = 'a ≠ 0'; $('r10-v').textContent = '—'; return; }
    var D = b * b - 4 * a * c, xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, w = Math.max(4, Math.abs(xv) + (D > 0 ? Math.sqrt(D) / Math.abs(a) : 2)), xmin = Math.floor(xv - w), xmax = Math.ceil(xv + w), ymn = Math.floor(Math.min(yv, 0, c) - 2), ymx = Math.ceil(Math.max(yv, 0, c) + 2), f = function(x){ return a * x * x + b * x + c; };
    var P = plano(svg, xmin, xmax, ymn, ymx, 360, 220, 0); el('line', {x1: P.sx(xv), y1: P.sy(ymn), x2: P.sx(xv), y2: P.sy(ymx), stroke: 'var(--growth)', 'stroke-width': 1.6, 'stroke-dasharray': '5 4'}, svg); curva(svg, P, f, xmin, xmax, ymn, ymx, 'var(--primary)');
    ponto(svg, P, xv, yv, 'var(--decay)', ''); ponto(svg, P, 0, c, 'var(--success)', '');
    if(D >= 0){ var s = Math.sqrt(D), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); ponto(svg, P, r1, 0, 'var(--growth)', ''); ponto(svg, P, r2, 0, 'var(--growth)', ''); $('r10-r').textContent = pt(Math.min(r1, r2)) + ' e ' + pt(Math.max(r1, r2)); } else $('r10-r').textContent = 'sem raízes reais';
    $('r10-v').textContent = '(' + pt(xv) + '; ' + pt(yv) + ') — ' + (a > 0 ? 'mínimo' : 'máximo'); $('r10-h').textContent = 'Eixo de simetria: x = ' + pt(xv) + '. Corte em y: (0; ' + pt(c) + ').'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Retomada: equação do 2º grau e raízes da função', accent: 'primary', icon: 'parabola',
  aulas: [['Aula R9', 'Retomada: equação do 2º grau', 'aula-1-retomada-equacao-do-2-grau.html'], ['Aula R10', 'Retomada: raízes, vértice e simetria da parábola', 'aula-2-retomada-raizes-e-vertice.html']],
  pendente: true
}, pages };
