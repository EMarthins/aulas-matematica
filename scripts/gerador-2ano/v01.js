// Unidade v01 — Função quadrática e seu gráfico (aulas 1 e 2 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-quadratica', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v01', BRAND = 'Função Quadrática e seu Gráfico', CAP = 'Aulas 1 e 2';
const pages = [];

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 1 e 2', h1: 'Função quadrática: <span style="color:var(--primary);">a curva de quem é lançado</span>',
  sub: 'Uma bola chutada, um jato de água, a trajetória de um salto: todas desenham uma parábola. A função do 2º grau prevê o tempo e a altura do objeto em cada instante.',
  badges: [['y = ax² + bx + c'], ['a ≠ 0', 'growth'], ['parábola', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da lei à parábola.', [
  ['Definição', 'y = ax² + bx + c, com a ≠ 0', 'bulb'],
  ['Valor numérico', 'substituir x na lei', 'target'],
  ['Concavidade', 'o sinal de a', 'chart'],
  ['Corte em y', 'o ponto (0, c)', 'link'],
  ['Esboço', 'tabela de pontos', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer uma <strong>função quadrática</strong> e identificar os coeficientes $a$, $b$ e $c$.',
  'Calcular <strong>valores numéricos</strong> e resolver <strong>equações do 2º grau</strong> em problemas.',
  'Relacionar o sinal de $a$ à <strong>concavidade</strong> e $c$ ao <strong>corte no eixo $y$</strong>.',
  '<strong>Esboçar</strong> a parábola a partir de uma tabela de pontos.'
], 'Dica', 'Para esboçar uma parábola, calcule <strong>pelo menos 5 pontos</strong> simétricos em torno do vértice: a curva é formada por <strong>pontos de mesma altura</strong> à esquerda e à direita do eixo de simetria.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Qual o percurso de um objeto lançado?', `
          ${lede('Uma bola é lançada para cima e sua altura em metros, $t$ segundos depois, é $h(t) = −5t^{2} + 20t$. Qual o percurso no ar? <strong>Uma parábola</strong>, descrita por uma função quadrática.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['t (s)', 'h (m)'], [['0', '0'], ['1', '15'], ['2', '20'], ['3', '15'], ['4', '0']])}
            ${mini('Em qual instante a bola está de volta ao chão?', ['2 s', '3 s', '4 s', '5 s'], 2, '$h(4) = −80 + 80 = 0$. Sobe até $t = 2$ s (20 m) e desce simetricamente.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'Função quadrática', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Função quadrática (do 2º grau):</strong> $f(x) = ax^{2} + bx + c$, com $a, b, c ∈ ℝ$ e <strong>$a ≠ 0$</strong>.</li>
                <li>O gráfico é uma <strong>parábola</strong>. $a > 0$: concavidade <strong>para cima</strong> ($∪$); $a < 0$: <strong>para baixo</strong> ($∩$).</li>
                <li>Corta o eixo $y$ em <strong>$(0, c)$</strong>, pois $f(0) = c$.</li>
                <li>Os zeros ($f(x) = 0$) são os pontos em que corta o eixo $x$.</li>
              </ul>
            </div>
            ${W.box('Parábola y = ax² + bx + c', W.row(W.nm('f1-a', 'a', 1, 'any'), W.nm('f1-b', 'b', -2, 'any'), W.nm('f1-c', 'c', -3, 'any')) + W.svg('f1-s', '0 0 360 230', '380px') + W.txt('f1-l', 'Lei: ') + W.txt('f1-v', 'f(−1), f(0), f(1): ') + W.hint('f1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Esboço por pontos: y = x² − 2x − 3', `
          <div class="grid2">
            <div>
              ${graf({ w: 330, h: 215, xmin: -2, xmax: 4, ymin: -5, ymax: 5, px: 1, py: 1, series: [{ pts: amostra(x => x * x - 2 * x - 3, -1.8, 3.8), cor: 'var(--primary)' }], marcas: [[-1, 0, '(−1, 0)', -8, -8], [3, 0, '(3, 0)', 8, -8], [0, -3, '(0, −3)', 8, 12], [1, -4, '(1, −4)', 8, 14]], max: '350px' })}
            </div>
            ${tbl(['x', '−1', '0', '1', '2', '3'], [['y = x² − 2x − 3', '0', '−3', '−4', '−3', '0']])}
          </div>
          <p class="hint" style="margin-top:6px;">$a = 1 > 0$: concavidade para cima · corta o eixo $y$ em $(0, −3)$ · zeros $−1$ e $3$ · valores simétricos em torno de $x = 1$.</p>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valor numérico', 'Dada $f(x) = x^{2} − 3x + 2$, calcule $f(−2)$ e $f(3)$.', [
  ['$f(−2)$', '$(−2)^{2} − 3(−2) + 2 = 4 + 6 + 2 = 12$.'],
  ['$f(3)$', '$9 − 9 + 2 = 2$.']
], '$f(−2) = 12$ e $f(3) = 2$.'));
a.push(exemplo('Exemplo resolvido', 'Equação do 2º grau em um problema', 'Um retângulo tem lados $x$ e $x + 3$ (em metros) e área $40$ m². Qual o valor de $x$?', [
  ['Equação', '$x(x + 3) = 40$ ⇒ $x^{2} + 3x − 40 = 0$.'],
  ['Soma e produto', 'Dois números com soma $−3$ e produto $−40$: $5$ e $−8$.'],
  ['Descarte', '$x > 0$ ⇒ $x = 5$. Lados $5$ e $8$: $5 · 8 = 40$ ✓.']
], '$x = 5$ m.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quando a bola atinge 15 m?', 'Com $h(t) = −5t^{2} + 20t$, em que instantes a altura é 15 m?', [
  ['Equação', '$−5t^{2} + 20t = 15$ ⇒ $t^{2} − 4t + 3 = 0$.'],
  ['Raízes', '$t = 1$ ou $t = 3$.']
], 'Aos $1$ s (subindo) e aos $3$ s (descendo).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Concavidade e corte em y', 'Para $f(x) = −2x^{2} + 4x + 6$, dê a concavidade e o ponto em que o gráfico corta o eixo $y$.', [
  ['Concavidade', '$a = −2 < 0$ ⇒ para baixo.'],
  ['Corte em y', '$f(0) = c = 6$ ⇒ ponto $(0, 6)$.']
], 'Concavidade para baixo; corta o eixo $y$ em $(0, 6)$.', 'growth'));

a.push(pratique('Valor numérico', 'Se $f(x) = x^{2} − 3x + 2$, então $f(−2)$ vale:',
  ['0', '2', '8', '12', '16'], 3,
  '$4 + 6 + 2 = 12$. <strong>Alternativa D.</strong>'));
a.push(pratique('Lados do retângulo', 'Um retângulo tem lados $x$ e $x + 3$ e área 40 m². O menor lado mede:',
  ['4 m', '5 m', '6 m', '8 m', '10 m'], 1,
  '$x^{2} + 3x − 40 = 0$ ⇒ $x = 5$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Altura da bola', 'A altura (m) de uma bola é $h(t) = −5t^{2} + 20t$, com $t$ em segundos. A altura em $t = 3$ s é:',
  ['10 m', '12 m', '15 m', '20 m', '25 m'], 2,
  '$−45 + 60 = 15$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a função quadrática engana', [
  ['Esquecer a condição a ≠ 0', 'Com $a = 0$ a função é afim ($bx + c$), e não parábola.'],
  ['Confundir c com o vértice', '$c$ é o corte no eixo $y$; o vértice está em $x = −b ÷ 2a$.'],
  ['Erro de sinal no quadrado', '$(−2)^{2} = 4$ e $−2^{2} = −4$: use parênteses.'],
  ['Aceitar raiz sem sentido', 'No contexto, $x$ negativo (lado, tempo) é descartado.']
]));
a.push(quiz([
  { q: 'Qual é uma função quadrática?', o: ['$y = 3x + 1$', '$y = x^{2} − 4$', '$y = 2^{x}$', '$y = 5$'], a: 1 },
  { q: 'Se $a < 0$, a parábola tem concavidade:', o: ['para cima', 'para baixo', 'para a direita', 'não tem'], a: 1 },
  { q: 'O gráfico de $f(x) = x^{2} + 5x − 7$ corta o eixo $y$ em:', o: ['$(0, 5)$', '$(0, −7)$', '$(−7, 0)$', '$(5, 0)$'], a: 1 },
  { q: 'Se $f(x) = x^{2} − 2x − 3$, o ponto $(1, −4)$:', o: ['pertence ao gráfico', 'não pertence', 'é um zero', 'é o corte em y'], a: 0 }
]));
a.push(fechamento([
  ['Definição', '$f(x) = ax^{2} + bx + c$, $a ≠ 0$.'],
  ['Gráfico', 'Parábola; concavidade pelo sinal de $a$; corta $y$ em $(0, c)$.'],
  ['Esboço', 'Tabela com pontos simétricos.']
], 'Lei, tabela e parábola: a função do 2º grau em três passos.'));

pages.push({ out: BASE + 'aula-1-funcao-quadratica-e-grafico.html', html: K.deck({
  title: 'Função quadrática e seu gráfico — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 1 e 2 · Função quadrática e gráfico', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['f1-a', 'f1-b', 'f1-c'], function(){ var a = +$('f1-a').value, b = +$('f1-b').value, c = +$('f1-c').value;
    if(![a, b, c].every(isFinite) || a === 0){ $('f1-s').innerHTML = ''; $('f1-l').textContent = a === 0 ? 'a = 0: não é função quadrática' : '—'; $('f1-v').textContent = ''; $('f1-h').textContent = ''; return; }
    var j = janela(a, b, c), P = parabola($('f1-s'), j.f, j.xmin, j.xmax, j.ymin, j.ymax); bola($('f1-s'), P, 0, c, false, 'var(--decay)');
    $('f1-l').textContent = leiQ(a, b, c); $('f1-v').textContent = pt(j.f(-1)) + ' · ' + pt(c) + ' · ' + pt(j.f(1));
    $('f1-h').textContent = (a > 0 ? 'a > 0: concavidade para cima' : 'a < 0: concavidade para baixo') + '. Corta o eixo y em (0, ' + pt(c) + ').'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função quadrática: <span>lei e gráfico</span>',
  lede: 'f(x) = ax² + bx + c com a ≠ 0. O gráfico é uma parábola: o sinal de a dá a concavidade, c dá o corte no eixo y e uma tabela de pontos permite o esboço.',
  badges: ['a ≠ 0', 'parábola', '(0, c)'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Definição', 'ax² + bx + c', 'chart', 'primary', p('$a ≠ 0$; coeficientes reais.') + call('Exemplo', '$x^{2} − 3x + 2$.', 'success')],
    ['Concavidade', 'Sinal de a', 'target', 'growth', li(['$a > 0$: para cima.', '$a < 0$: para baixo.', '$|a|$ maior: mais fechada.'])],
    ['Corte em y', '(0, c)', 'scale', 'decay', p('$f(0) = c$.') + call('Exemplo', '$−2x^{2} + 4x + 6$: $(0, 6)$.', 'success')],
    ['Valor numérico', 'Substituir x', 'link', 'success', p('Use parênteses nos negativos.') + call('Exemplo', '$f(−2) = 12$.', 'success')],
    ['Equação', 'f(x) = k', 'up', 'primary', p('Em problemas, resolva $ax^{2} + bx + c = k$.') + call('Exemplo', '$−5t^{2} + 20t = 15$.', 'success')],
    ['Esboço', 'Tabela de pontos', 'check', 'growth', li(['Pontos simétricos.', 'Marque o corte em y.', 'Una com curva suave.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Aceitar $a = 0$.', 'Confundir c com o vértice.', 'Erro de sinal em $(−2)^{2}$.', 'Aceitar raiz negativa no contexto.', 'Ligar pontos com segmentos retos.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: valor numérico, lançamento, retângulo, corte em y e ponto do gráfico.',
  final: 'Lei, tabela e parábola: a função do 2º grau em três passos.',
  questions: [
    { badge: 'Estilo ENEM · valor numérico', text: 'Considere $f(x) = x^{2} − 3x + 2$.', cmd: 'O valor de $f(−2)$ é:', opts: ['0', '2', '8', '12', '16'], a: 3,
      sol: '<p>$4 + 6 + 2 = 12$.</p>' },
    { badge: 'Estilo ENEM · lançamento', text: 'A altura (m) de uma bola é $h(t) = −5t^{2} + 20t$, com $t$ em segundos.', cmd: 'A altura em $t = 3$ s é:', opts: ['10 m', '12 m', '15 m', '20 m', '25 m'], a: 2,
      sol: '<p>$−5 · 9 + 60 = 15$.</p>' },
    { badge: 'Estilo ENEM · retângulo', text: 'Um retângulo tem lados $x$ e $x + 3$ (m) e área 40 m².', cmd: 'O valor de $x$ é:', opts: ['4', '5', '6', '8', '10'], a: 1,
      sol: '<p>$x^{2} + 3x − 40 = 0$ ⇒ $x = 5$.</p>' },
    { badge: 'Estilo ENEM · corte em y', text: 'O gráfico de $f(x) = −2x^{2} + 4x + 6$ corta o eixo $y$ em um ponto.', cmd: 'Esse ponto é:', opts: ['$(0, 4)$', '$(0, 6)$', '$(6, 0)$', '$(0, −2)$', '$(3, 0)$'], a: 1,
      sol: '<p>$f(0) = c = 6$.</p>' },
    { badge: 'Estilo ENEM · ponto do gráfico', text: 'Considere $f(x) = x^{2} − 2x − 3$.', cmd: 'Qual dos pontos pertence ao gráfico de $f$?', opts: ['$(1, −2)$', '$(2, 0)$', '$(1, −4)$', '$(0, 3)$', '$(−2, 0)$'], a: 2,
      sol: '<p>$f(1) = 1 − 2 − 3 = −4$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'É função <span style="color:var(--growth);">quadrática</span>?',
  subtitle: 'Quadrática, afim ou outra? Cuidado com as expressões disfarçadas.',
  tpl: cClassificar({
    cats: ['Função quadrática', 'Função afim', 'Outra função'],
    intro: 'Cada cartão traz uma expressão. Simplifique, classifique e clique em <strong>Conferir</strong>.',
    final: 'Desenvolva a expressão antes de classificar: o grau aparece no final.',
    itens: [
      ['$y = x^{2} + 3x − 4$', 0, 'Grau 2, $a = 1$.'],
      ['$y = 3x − 5$', 1, 'Grau 1.'],
      ['$y = 2^{x}$', 2, 'Exponencial: a variável está no expoente.'],
      ['$y = −x^{2} + 1$', 0, 'Grau 2, $a = −1$.'],
      ['$y = x^{3}$', 2, 'Grau 3.'],
      ['$y = x(x − 2)$', 0, 'Desenvolvendo: $x^{2} − 2x$.'],
      ['$y = (x + 1)^{2} − x^{2}$', 1, 'Desenvolvendo: $x^{2} + 2x + 1 − x^{2} = 2x + 1$ (afim!).'],
      ['$y = 1 ÷ x$', 2, 'Variável no denominador.'],
      ['$y = (x − 3)^{2}$', 0, 'Desenvolvendo: $x^{2} − 6x + 9$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valor, lançamento, retângulo, corte em y e ponto. Digite o número pedido.',
  final: 'Você percorreu a trilha: lei, valores, equação e gráfico.',
  problems: [
    { tag: 'Valor numérico', q: 'Se $f(x) = x^{2} − 3x + 2$, qual o valor de $f(−2)$?', a: 12, ph: 'f(−2)', hint: '4 + 6 + 2.', sol: '<p>$12$.</p>' },
    { tag: 'Lançamento', q: 'Com $h(t) = −5t^{2} + 20t$, qual a altura (m) em $t = 2$ s?', a: 20, ph: 'm', hint: '−20 + 40.', sol: '<p>$20$ m.</p>' },
    { tag: 'Retângulo', q: 'Lados $x$ e $x + 3$ e área 40: qual o valor de $x$?', a: 5, ph: 'x', hint: 'x² + 3x − 40 = 0.', sol: '<p>$5$.</p>' },
    { tag: 'Corte em y', q: 'Em $f(x) = −2x^{2} + 4x + 6$, qual a ordenada do ponto em que o gráfico corta o eixo $y$?', a: 6, ph: 'y', hint: 'f(0) = c.', sol: '<p>$6$.</p>' },
    { tag: 'Ponto', q: 'Se $f(x) = x^{2} − 2x − 3$, qual o valor de $f(1)$?', a: -4, ph: 'f(1)', hint: '1 − 2 − 3.', sol: '<p>$−4$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Quadrática e seu Gráfico', accent: 'primary', icon: 'parabola',
  aulas: [['Aulas 1–2', 'Função quadrática e seu gráfico', 'aula-1-funcao-quadratica-e-grafico.html']],
  enem: 'Função quadrática no estilo ENEM', cria: 'É função quadrática?', pratica: 'Função quadrática: trilha de desafios'
}, pages };
