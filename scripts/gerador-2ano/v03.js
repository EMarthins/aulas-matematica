// Unidade v03 — Vértice da parábola e eixo de simetria (aulas 7 e 8 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'vertice-da-parabola', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v03', BRAND = 'Vértice da Parábola', CAP = 'Aulas 7 e 8';
const pages = [];

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 7 e 8', h1: 'Vértice da parábola: <span style="color:var(--primary);">o ponto mais alto (ou mais baixo)</span>',
  sub: 'Metade do rosto, refletida, forma um rosto simétrico. A parábola também é simétrica: o eixo de simetria passa pelo vértice, ponto de máximo ou de mínimo.',
  badges: [['xᵥ = −b ÷ 2a'], ['yᵥ = −Δ ÷ 4a', 'growth'], ['eixo: x = xᵥ', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Simetria e vértice.', [
  ['Simetria', 'o eixo vertical da parábola', 'bulb'],
  ['Vértice', 'ponto extremo da curva', 'target'],
  ['Coordenadas', 'xᵥ = −b/2a e yᵥ = −Δ/4a', 'chart'],
  ['Pelos zeros', 'xᵥ é a média dos zeros', 'link'],
  ['Pontos simétricos', 'mesma altura, lados opostos', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer o <strong>eixo de simetria</strong> e o <strong>vértice</strong> $V(x_v, y_v)$ de uma parábola.',
  'Calcular <strong>$x_v = −b ÷ 2a$</strong> e <strong>$y_v = −Δ ÷ 4a$</strong> (ou $f(x_v)$).',
  'Obter $x_v$ como a <strong>média dos zeros</strong> quando eles são conhecidos.',
  'Usar a <strong>simetria</strong> para achar pontos do gráfico sem calcular.'
], 'Dica', 'Primeiro ache $x_v$; depois substitua em $f$ para obter $y_v$. É mais seguro que decorar $−Δ ÷ 4a$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Simetria ao nosso redor', `
          ${lede('Um site duplicou só <strong>uma das metades</strong> do rosto de uma pessoa e produziu duas imagens simétricas. O que há de simétrico na natureza? Asas de uma borboleta, folhas, o <strong>arco de um jato de água</strong>. A parábola tem uma reta que a divide em duas metades iguais: o <strong>eixo de simetria</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['x', '0', '1', '2', '3', '4', '5', '6'], [['y = x² − 6x + 5', '5', '0', '−3', '−4', '−3', '0', '5']])}
            ${mini('Na tabela, os valores se repetem em torno de qual $x$?', ['x = 2', 'x = 3', 'x = 4', 'x = 0'], 1, '$f(2) = f(4) = −3$, $f(1) = f(5) = 0$, $f(0) = f(6) = 5$: o eixo de simetria é $x = 3$ e o vértice é $(3, −4)$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · vértice', 'Coordenadas do vértice', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Vértice $V$:</strong> ponto de <strong>mínimo</strong> ($a > 0$) ou de <strong>máximo</strong> ($a < 0$) da parábola.</li>
                <li><strong>Eixo de simetria:</strong> reta $x = x_v$.</li>
                <li><strong>$x_v = −{b|2a}$</strong> (média dos zeros, se existirem) e <strong>$y_v = −{Δ|4a} = f(x_v)$</strong>.</li>
                <li>Pontos simétricos: $f(x_v + d) = f(x_v − d)$.</li>
              </ul>
            </div>
            ${W.box('Vértice e eixo', W.row(W.nm('v-a', 'a', 1, 'any'), W.nm('v-b', 'b', -6, 'any'), W.nm('v-c', 'c', 5, 'any')) + W.svg('v-s', '0 0 360 230', '380px') + W.txt('v-v', 'Vértice: ') + W.txt('v-t', 'Tipo: ') + W.hint('v-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'y = x² − 6x + 5', `
          <div class="grid2">
            <div>${graf({ w: 330, h: 215, xmin: -1, xmax: 7, ymin: -5, ymax: 7, px: 1, py: 2, series: [{ pts: amostra(x => x * x - 6 * x + 5, -0.6, 6.6), cor: 'var(--primary)' }], marcas: [[3, -4, 'V(3, −4)', 10, 14], [1, 0, '1', -8, -8], [5, 0, '5', 8, -8], [0, 5, '5', 8, -4]], max: '350px' })}</div>
            ${tbl(['Elemento', 'Valor'], [['Zeros', '1 e 5'], ['$x_v$', '$(1 + 5) ÷ 2 = 3$'], ['$y_v$', '$f(3) = 9 − 18 + 5 = −4$'], ['Eixo de simetria', '$x = 3$']])}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Vértice pela fórmula', 'Determine o vértice de $f(x) = −2x^{2} + 8x − 3$.', [
  ['$x_v$', '$−{8|2 · (−2)} = 2$.'],
  ['$y_v$', '$f(2) = −8 + 16 − 3 = 5$.'],
  ['Conferência', '$Δ = 64 − 24 = 40$ e $−{40|4 · (−2)} = 5$ ✓.']
], '$V(2, 5)$: ponto de <strong>máximo</strong> ($a < 0$).'));
a.push(exemplo('Exemplo resolvido', 'Vértice pelos zeros', 'Uma parábola tem zeros $−1$ e $5$. Qual a abscissa do vértice?', [
  ['Média dos zeros', '$x_v = {−1 + 5|2} = 2$.']
], '$x_v = 2$ (eixo $x = 2$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ponto simétrico', 'O gráfico de uma função quadrática passa pelo ponto $(1, 4)$ e tem eixo de simetria $x = 3$. Por qual outro ponto de mesma ordenada passa?', [
  ['Distância ao eixo', '$|1 − 3| = 2$ à esquerda.'],
  ['Simétrico', '$3 + 2 = 5$, com a mesma altura.']
], 'Também passa por $(5, 4)$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Descobrindo b', 'Para que o vértice de $f(x) = x^{2} + bx + 7$ tenha abscissa $2$, qual o valor de $b$?', [
  ['Condição', '$x_v = −{b|2} = 2$.'],
  ['Resolva', '$b = −4$.']
], '$b = −4$ ($f(x) = x^{2} − 4x + 7$, vértice $(2, 3)$).', 'growth'));

a.push(pratique('Abscissa do vértice', 'A abscissa do vértice de $f(x) = x^{2} − 6x + 5$ é:',
  ['−3', '1', '3', '5', '6'], 2,
  '$x_v = 6 ÷ 2 = 3$. <strong>Alternativa C.</strong>'));
a.push(pratique('Ordenada do vértice', 'A ordenada do vértice de $f(x) = −2x^{2} + 8x − 3$ é:',
  ['2', '3', '5', '8', '13'], 2,
  '$f(2) = 5$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Simetria', 'O gráfico de uma função quadrática passa por $(1, 4)$ e seu eixo de simetria é a reta $x = 3$. Outro ponto do gráfico é:',
  ['$(3, 1)$', '$(2, 4)$', '$(4, 4)$', '$(5, 4)$', '$(6, 4)$'], 3,
  '$1$ está a 2 do eixo; o simétrico é $3 + 2 = 5$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o vértice engana', [
  ['Sinal do b', '$x_v = −b ÷ 2a$: em $x^{2} − 6x + 5$, $b = −6$ e $x_v = +3$.'],
  ['Confundir x e y do vértice', 'O vértice é $(x_v, y_v)$: $y_v$ se obtém substituindo $x_v$ em $f$.'],
  ['Média dos zeros com Δ < 0', 'Sem zeros reais, use $−b ÷ 2a$.'],
  ['Eixo como y = ...', 'O eixo é <strong>vertical</strong>: $x = x_v$.']
]));
a.push(quiz([
  { q: 'O eixo de simetria de $y = x^{2} + 4x + 1$ é:', o: ['$x = 4$', '$x = 2$', '$x = −2$', '$x = −4$'], a: 2 },
  { q: 'Se os zeros são 2 e 8, a abscissa do vértice é:', o: ['3', '5', '6', '10'], a: 1 },
  { q: 'Se $a < 0$, o vértice é ponto de:', o: ['mínimo', 'máximo', 'zero', 'inflexão'], a: 1 },
  { q: 'O vértice de $y = x^{2} − 4x + 3$ é:', o: ['$(2, −1)$', '$(−2, −1)$', '$(2, 1)$', '$(4, 3)$'], a: 0 }
]));
a.push(fechamento([
  ['Abscissa', '$x_v = −b ÷ 2a$ (média dos zeros).'],
  ['Ordenada', '$y_v = f(x_v) = −Δ ÷ 4a$.'],
  ['Simetria', '$f(x_v + d) = f(x_v − d)$.']
], 'Ache x do vértice e substitua: o ponto extremo da parábola está pronto.'));

pages.push({ out: BASE + 'aula-1-vertice-e-eixo-de-simetria.html', html: K.deck({
  title: 'Vértice da parábola — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 7 e 8 · Vértice e eixo de simetria', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['v-a', 'v-b', 'v-c'], function(){ var a = +$('v-a').value, b = +$('v-b').value, c = +$('v-c').value, sv = $('v-s');
    if(![a, b, c].every(isFinite) || a === 0){ sv.innerHTML = ''; $('v-v').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('v-t').textContent = ''; $('v-h').textContent = ''; return; }
    var xv = -b / (2 * a), j = janela(a, b, c), yv = j.f(xv), P = parabola(sv, j.f, j.xmin, j.xmax, j.ymin, j.ymax);
    el('line', {x1: P.sx(xv), y1: P.sy(j.ymin), x2: P.sx(xv), y2: P.sy(j.ymax), stroke: 'var(--decay)', 'stroke-width': 1.6, 'stroke-dasharray': '5 4'}, sv); bola(sv, P, xv, yv, false, 'var(--decay)');
    $('v-v').textContent = 'V(' + pt(xv, 3) + '; ' + pt(yv, 3) + ')'; $('v-t').textContent = a > 0 ? 'mínimo (a > 0)' : 'máximo (a < 0)';
    $('v-h').textContent = 'xv = −b ÷ 2a = ' + pt(xv, 3) + '; eixo de simetria x = ' + pt(xv, 3) + '. Dois pontos simétricos têm a mesma altura.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Vértice da parábola: <span>eixo de simetria e ponto extremo</span>',
  lede: 'O vértice V(xv, yv) é o ponto de máximo ou de mínimo. xv = −b ÷ 2a é a média dos zeros e o eixo de simetria é a reta vertical x = xv.',
  badges: ['xv = −b/2a', 'yv = −Δ/4a', 'eixo x = xv'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Vértice', 'Ponto extremo', 'chart', 'primary', p('Mínimo se $a > 0$; máximo se $a < 0$.') + call('Exemplo', '$x^{2} − 6x + 5$: $V(3, −4)$.', 'success')],
    ['Abscissa', '−b ÷ 2a', 'target', 'growth', p('Média dos zeros.') + call('Zeros 1 e 5', '$x_v = 3$.', 'success')],
    ['Ordenada', 'f(xv)', 'scale', 'decay', p('Substitua $x_v$ na lei.') + call('Fórmula', '$y_v = −Δ ÷ 4a$.', 'success')],
    ['Eixo', 'x = xv', 'link', 'success', p('Reta vertical que divide a parábola.') + call('Exemplo', '$x = 3$.', 'success')],
    ['Simetria', 'Mesma altura', 'up', 'primary', p('$f(x_v + d) = f(x_v − d)$.') + call('Exemplo', '$(1, 4)$ ⇒ $(5, 4)$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Sinal do b.', 'x do vértice, depois y.', 'Máximo ou mínimo?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o sinal de −b.', 'Dar só a abscissa e esquecer a ordenada.', 'Usar média dos zeros com Δ < 0.', 'Eixo como reta horizontal.', 'Confundir máximo e mínimo.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Vértice da parábola <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: abscissa, ordenada, simetria, zeros e parâmetro.',
  final: 'Abscissa primeiro, ordenada depois, e a simetria para conferir.',
  questions: [
    { badge: 'Estilo ENEM · abscissa', text: 'Considere $f(x) = x^{2} − 6x + 5$.', cmd: 'A abscissa do vértice é:', opts: ['−3', '1', '3', '5', '6'], a: 2,
      sol: '<p>$x_v = 6 ÷ 2 = 3$.</p>' },
    { badge: 'Estilo ENEM · ordenada', text: 'Considere $f(x) = −2x^{2} + 8x − 3$.', cmd: 'A ordenada do vértice é:', opts: ['2', '3', '5', '8', '13'], a: 2,
      sol: '<p>$x_v = 2$; $f(2) = −8 + 16 − 3 = 5$.</p>' },
    { badge: 'Estilo ENEM · simetria', text: 'O gráfico de uma função quadrática passa por $(1, 4)$ e tem eixo de simetria $x = 3$.', cmd: 'Outro ponto do gráfico é:', opts: ['$(3, 1)$', '$(2, 4)$', '$(4, 4)$', '$(5, 4)$', '$(6, 4)$'], a: 3,
      sol: '<p>O simétrico de $x = 1$ em relação a $x = 3$ é $x = 5$.</p>' },
    { badge: 'Estilo ENEM · zeros', text: 'Uma parábola tem zeros $−1$ e $5$.', cmd: 'A abscissa do vértice é:', opts: ['1', '2', '3', '4', '5'], a: 1,
      sol: '<p>$(−1 + 5) ÷ 2 = 2$.</p>' },
    { badge: 'Estilo ENEM · parâmetro', text: 'O vértice de $f(x) = x^{2} + bx + 7$ tem abscissa 2.', cmd: 'O valor de $b$ é:', opts: ['−4', '−2', '2', '4', '7'], a: 0,
      sol: '<p>$−b ÷ 2 = 2$ ⇒ $b = −4$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">vértices</span>',
  subtitle: 'Ligue cada função ao seu vértice.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se a função combinar com o vértice, o par fica aberto.',
    final: 'Em todos: ache $x_v = −b ÷ 2a$ e depois substitua.',
    pares: [['x² − 4x + 3', '(2, −1)'], ['x² + 2x − 3', '(−1, −4)'], ['−x² + 4x', '(2, 4)'], ['x² − 6x + 9', '(3, 0)'], ['2x² − 8x + 6', '(2, −2)'], ['−x² − 2x + 8', '(−1, 9)']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Vértice da parábola: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: abscissa, ordenada, ordenada com a negativo, zeros e simetria. Digite o número pedido.',
  final: 'Você percorreu a trilha: abscissa, ordenada e simetria.',
  problems: [
    { tag: 'Abscissa', q: 'Qual a abscissa do vértice de $x^{2} − 6x + 5$?', a: 3, ph: 'xv', hint: '6 ÷ 2.', sol: '<p>$3$.</p>' },
    { tag: 'Ordenada', q: 'Qual a ordenada do vértice de $x^{2} − 6x + 5$?', a: -4, ph: 'yv', hint: 'f(3) = 9 − 18 + 5.', sol: '<p>$−4$.</p>' },
    { tag: 'Ordenada (a < 0)', q: 'Qual a ordenada do vértice de $−2x^{2} + 8x − 3$?', a: 5, ph: 'yv', hint: 'xv = 2.', sol: '<p>$5$.</p>' },
    { tag: 'Zeros', q: 'Uma parábola tem zeros $−1$ e $5$. Qual a abscissa do vértice?', a: 2, ph: 'xv', hint: 'Média.', sol: '<p>$2$.</p>' },
    { tag: 'Simetria', q: 'Eixo de simetria $x = 3$ e o gráfico passa por $(1, 4)$. Qual a abscissa do outro ponto de ordenada 4?', a: 5, ph: 'x', hint: '3 + 2.', sol: '<p>$5$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Vértice da Parábola', accent: 'primary', icon: 'parabola',
  aulas: [['Aulas 7–8', 'Vértice e eixo de simetria', 'aula-1-vertice-e-eixo-de-simetria.html']],
  enem: 'Vértice da parábola no estilo ENEM', cria: 'Memória dos vértices', pratica: 'Vértice da parábola: trilha de desafios'
}, pages };
