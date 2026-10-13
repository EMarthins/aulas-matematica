// Unidade v04 — Valor máximo e mínimo e imagem da função quadrática (aulas 9 a 11 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'maximo-minimo-e-imagem', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v04', BRAND = 'Máximo, Mínimo e Imagem', CAP = 'Aulas 9 a 11';
const pages = [];

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 9 a 11', h1: 'Máximo, mínimo e imagem: <span style="color:var(--primary);">os extremos da parábola</span>',
  sub: 'Qual a maior altura de um salto? Qual o menor custo de produção? O vértice responde, e ele também define até onde vai a imagem da função quadrática.',
  badges: [['a > 0: mínimo'], ['a < 0: máximo', 'growth'], ['Im(f) a partir do vértice', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do vértice à imagem.', [
  ['Extremos', 'máximo ou mínimo no vértice', 'bulb'],
  ['Valor extremo', 'yᵥ = −Δ ÷ 4a', 'target'],
  ['Onde ocorre', 'xᵥ = −b ÷ 2a', 'chart'],
  ['Imagem', 'a partir (ou até) yᵥ', 'link'],
  ['Problemas', 'altura, lucro, custo e área', 'scale']
]));
a.push(objetivosSlide([
  'Decidir se o vértice é <strong>máximo</strong> ($a < 0$) ou <strong>mínimo</strong> ($a > 0$).',
  'Calcular o <strong>valor</strong> máximo ou mínimo ($y_v$) e <strong>onde ocorre</strong> ($x_v$).',
  'Escrever o <strong>conjunto imagem</strong>: $Im(f) = [y_v, +∞[$ ou $]−∞, y_v]$.',
  'Resolver problemas de <strong>otimização</strong>: altura, lucro, custo e área.'
], 'Dica', 'Em “o <strong>valor</strong> máximo” a resposta é o $y_v$; em “<strong>para que valor de $x$</strong>” ou “em que instante” a resposta é o $x_v$. Leia a pergunta!', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Máximos e mínimos do dia a dia', `
          ${lede('O homem mais alto do mundo mede 2,51 m. Um golfinho salta cerca de 7 m. A fossa das Marianas tem 11 516 m de profundidade. Quando comprar uma ação para ganhar mais? Quando o preço for o <strong>menor possível</strong>. Todos esses são <strong>extremos</strong>, e na função quadrática eles estão no vértice.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Função', 'a', 'Vértice', 'Extremo'], [['$h(t) = −5t^{2} + 20t$', '−5', '$(2, 20)$', 'máximo 20'], ['$C(x) = x^{2} − 8x + 20$', '1', '$(4, 4)$', 'mínimo 4']])}
            ${mini('A altura máxima de $h(t) = −5t^{2} + 20t$ (m) é:', ['2 m', '10 m', '20 m', '40 m'], 2, '$t_v = 2$ s e $h(2) = −20 + 40 = 20$ m.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · extremos e imagem', 'Valor extremo e conjunto imagem', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$a > 0$:</strong> o vértice é o <strong>mínimo</strong>; $Im(f) = \\{y ∈ ℝ ∣ y ≥ y_v\\}$.</li>
                <li><strong>$a < 0$:</strong> o vértice é o <strong>máximo</strong>; $Im(f) = \\{y ∈ ℝ ∣ y ≤ y_v\\}$.</li>
                <li><strong>Domínio:</strong> sempre $ℝ$ (a parábola se abre indefinidamente).</li>
                <li>Valor extremo: $y_v = −{Δ|4a}$. Ele ocorre em $x_v = −{b|2a}$.</li>
              </ul>
            </div>
            ${W.box('Extremo e imagem', W.row(W.nm('m-a', 'a', -1, 'any'), W.nm('m-b', 'b', 2, 'any'), W.nm('m-c', 'c', 3, 'any')) + W.svg('m-s', '0 0 360 230', '380px') + W.txt('m-v', 'Vértice: ') + W.txt('m-i', 'Imagem: ') + W.hint('m-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Imagem de duas parábolas', `
          <div class="grid2">
            <div>${graf({ w: 330, h: 200, xmin: -2, xmax: 6, ymin: -2, ymax: 8, px: 1, py: 2, series: [{ pts: amostra(x => x * x - 4 * x + 7, -1.6, 5.6), cor: 'var(--primary)' }, { pts: amostra(x => -x * x + 2 * x + 3, -1.6, 3.6), cor: 'var(--decay)' }], marcas: [[2, 3, 'mín. 3', 8, 14], [1, 4, 'máx. 4', -8, -8]], max: '350px' })}</div>
            ${tbl(['Função', 'Vértice', 'Imagem'], [['$x^{2} − 4x + 7$', '$(2, 3)$', '$y ≥ 3$'], ['$−x^{2} + 2x + 3$', '$(1, 4)$', '$y ≤ 4$']])}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Altura máxima de um lançamento', 'A altura (m) de uma bola é $h(t) = −5t^{2} + 20t$. Qual a altura máxima e quando ocorre?', [
  ['Instante', '$t_v = −{20|2 · (−5)} = 2$ s.'],
  ['Altura', '$h(2) = −20 + 40 = 20$ m.']
], 'Altura máxima de <strong>20 m</strong>, aos <strong>2 s</strong>.'));
a.push(exemplo('Exemplo resolvido', 'Lucro máximo', 'O lucro (milhares de reais) de uma loja em função do preço $x$ é $L(x) = −x^{2} + 10x − 16$. Qual o preço que maximiza o lucro e qual o lucro máximo?', [
  ['Preço', '$x_v = −{10|2 · (−1)} = 5$.'],
  ['Lucro máximo', '$L(5) = −25 + 50 − 16 = 9$.']
], 'Preço $5$ e lucro máximo de <strong>9 mil reais</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Custo mínimo', 'O custo de produção é $C(x) = x^{2} − 8x + 20$. Qual a quantidade que minimiza o custo e qual o custo mínimo?', [
  ['Quantidade', '$x_v = 4$.'],
  ['Custo', '$C(4) = 16 − 32 + 20 = 4$.']
], '$x = 4$ e custo mínimo $4$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Imagem', 'Determine o conjunto imagem de $f(x) = x^{2} − 4x + 7$.', [
  ['Concavidade', '$a = 1 > 0$: tem mínimo.'],
  ['Mínimo', '$x_v = 2$; $f(2) = 4 − 8 + 7 = 3$.']
], '$Im(f) = \\{y ∈ ℝ ∣ y ≥ 3\\}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Produto máximo', 'Dois números positivos somam 20. Qual o maior produto possível?', [
  ['Modelo', 'Números $x$ e $20 − x$: $P(x) = x(20 − x) = −x^{2} + 20x$.'],
  ['Vértice', '$x_v = 10$; $P(10) = 100$.']
], 'O maior produto é <strong>100</strong> (com $10$ e $10$).', 'growth'));

a.push(pratique('Altura máxima', 'A altura máxima de $h(t) = −5t^{2} + 20t$, em metros, é:',
  ['10', '15', '20', '25', '40'], 2,
  '$h(2) = 20$. <strong>Alternativa C.</strong>'));
a.push(pratique('Imagem', 'A imagem de $f(x) = x^{2} − 4x + 7$ é:',
  ['$y ≥ 3$', '$y ≤ 3$', '$y ≥ 7$', '$y ≥ 2$', '$ℝ$'], 0,
  'Mínimo $f(2) = 3$. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(estiloEnem('Lucro máximo', 'O lucro (milhares de reais) é $L(x) = −x^{2} + 10x − 16$, com $x$ o preço. O lucro máximo é:',
  ['5', '7', '9', '16', '25'], 2,
  '$x_v = 5$; $L(5) = 9$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde máximo e mínimo enganam', [
  ['Confundir valor e posição', 'O <strong>valor</strong> máximo é $y_v$; <strong>onde</strong> ocorre é $x_v$.'],
  ['Máximo × mínimo', '$a < 0$ ⇒ máximo; $a > 0$ ⇒ mínimo.'],
  ['Imagem e domínio', 'O domínio é $ℝ$; a imagem tem um limite no vértice.'],
  ['Intervalo restrito', 'Se $x$ só pode variar em um intervalo, o extremo pode estar nas pontas.']
]));
a.push(quiz([
  { q: 'Se $a > 0$, o vértice é ponto de:', o: ['máximo', 'mínimo', 'inflexão', 'zero'], a: 1 },
  { q: 'A imagem de $f(x) = −x^{2} + 2x + 3$ é:', o: ['$y ≥ 4$', '$y ≤ 4$', '$y ≤ 3$', '$ℝ$'], a: 1 },
  { q: 'O valor mínimo de $x^{2} − 6x + 10$ é:', o: ['1', '3', '10', '19'], a: 0 },
  { q: 'O domínio de uma função quadrática é:', o: ['$y ≥ y_v$', '$x ≥ x_v$', '$ℝ$', '$ℝ_{+}$'], a: 2 }
]));
a.push(fechamento([
  ['Extremo', '$a > 0$ mínimo; $a < 0$ máximo.'],
  ['Valor e posição', '$y_v$ e $x_v$.'],
  ['Imagem', 'A partir do vértice (cima ou baixo).']
], 'O vértice responde: onde, quanto e até onde vai a imagem.'));

pages.push({ out: BASE + 'aula-1-maximos-minimos-e-imagem.html', html: K.deck({
  title: 'Máximo, mínimo e imagem — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 9 a 11 · Máximo, mínimo e imagem', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['m-a', 'm-b', 'm-c'], function(){ var a = +$('m-a').value, b = +$('m-b').value, c = +$('m-c').value, sv = $('m-s');
    if(![a, b, c].every(isFinite) || a === 0){ sv.innerHTML = ''; $('m-v').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('m-i').textContent = ''; $('m-h').textContent = ''; return; }
    var xv = -b / (2 * a), j = janela(a, b, c), yv = j.f(xv), P = parabola(sv, j.f, j.xmin, j.xmax, j.ymin, j.ymax);
    el('line', {x1: P.sx(j.xmin), y1: P.sy(yv), x2: P.sx(j.xmax), y2: P.sy(yv), stroke: 'var(--decay)', 'stroke-width': 1.4, 'stroke-dasharray': '5 4'}, sv); bola(sv, P, xv, yv, false, 'var(--decay)');
    $('m-v').textContent = 'V(' + pt(xv, 3) + '; ' + pt(yv, 3) + ') — ' + (a > 0 ? 'mínimo' : 'máximo');
    $('m-i').textContent = a > 0 ? 'y ≥ ' + pt(yv, 3) : 'y ≤ ' + pt(yv, 3);
    $('m-h').textContent = 'O valor ' + (a > 0 ? 'mínimo' : 'máximo') + ' é ' + pt(yv, 3) + ' e ocorre em x = ' + pt(xv, 3) + '. O domínio é ℝ.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Máximo, mínimo e imagem da <span>função quadrática</span>',
  lede: 'O vértice é o extremo: mínimo se a > 0 e máximo se a < 0. O valor extremo é yv, ele ocorre em xv e a imagem vai de yv para cima (ou para baixo).',
  badges: ['a > 0: mínimo', 'a < 0: máximo', 'Im: a partir de yv'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Extremo', 'Máximo ou mínimo', 'chart', 'primary', p('No vértice.') + call('Exemplo', '$−5t^{2} + 20t$: máx. 20.', 'success')],
    ['Valor e posição', 'yv e xv', 'target', 'growth', p('Valor: $y_v$. Posição: $x_v$.') + call('Atenção', 'Leia o que a pergunta pede.', 'success')],
    ['Imagem', 'Conjunto de y', 'scale', 'decay', li(['$a > 0$: $y ≥ y_v$.', '$a < 0$: $y ≤ y_v$.', 'Domínio: $ℝ$.'])],
    ['Lucro e custo', 'Otimização', 'link', 'success', p('Lucro máximo ou custo mínimo.') + call('Exemplo', '$−x^{2} + 10x − 16$: 9.', 'success')],
    ['Produto máximo', 'Soma fixa', 'up', 'primary', p('$x(20 − x)$ máx. em $x = 10$.') + call('Resultado', '100.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Concavidade.', 'Valor ou posição?', 'Restrição de domínio?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar valor e posição.', 'Trocar máximo e mínimo.', 'Esquecer que o domínio é ℝ.', 'Ignorar restrições do problema.', 'Errar o sinal de −b.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Máximo, mínimo e imagem <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: altura, lucro, imagem, produto e custo.',
  final: 'Vértice: onde, quanto e até onde vai a imagem.',
  questions: [
    { badge: 'Estilo ENEM · altura máxima', text: 'A altura (m) de uma bola é $h(t) = −5t^{2} + 20t$, com $t$ em segundos.', cmd: 'A altura máxima atingida, em metros, é:', opts: ['10', '15', '20', '25', '40'], a: 2,
      sol: '<p>$t_v = 2$; $h(2) = 20$.</p>' },
    { badge: 'Estilo ENEM · lucro', text: 'O lucro (milhares de reais) é $L(x) = −x^{2} + 10x − 16$, com $x$ o preço.', cmd: 'O lucro máximo é:', opts: ['5', '7', '9', '16', '25'], a: 2,
      sol: '<p>$x_v = 5$; $L(5) = 9$.</p>' },
    { badge: 'Estilo ENEM · imagem', text: 'Considere $f(x) = x^{2} − 4x + 7$.', cmd: 'O conjunto imagem de $f$ é:', opts: ['$y ≥ 3$', '$y ≤ 3$', '$y ≥ 7$', '$y ≥ 2$', '$ℝ$'], a: 0,
      sol: '<p>Mínimo: $f(2) = 3$; $Im = [3, +∞[$.</p>' },
    { badge: 'Estilo ENEM · produto máximo', text: 'Dois números positivos têm soma 20.', cmd: 'O maior produto possível é:', opts: ['75', '91', '99', '100', '120'], a: 3,
      sol: '<p>$x(20 − x)$ é máximo em $x = 10$: $100$.</p>' },
    { badge: 'Estilo ENEM · custo mínimo', text: 'O custo (mil reais) de produzir $x$ unidades é $C(x) = x^{2} − 8x + 20$.', cmd: 'O custo mínimo é:', opts: ['2', '4', '8', '16', '20'], a: 1,
      sol: '<p>$x_v = 4$; $C(4) = 4$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Verdadeiro ou falso: <span style="color:var(--decay);">extremos e imagem</span>',
  subtitle: 'Julgue cada afirmação sobre máximos, mínimos e imagem.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'O vértice é o extremo; a imagem para nele.',
    afirmacoes: [
      ['Se $a > 0$, a função quadrática tem valor mínimo.', true, 'Verdadeira: a concavidade é para cima.'],
      ['O domínio de uma função quadrática é $y ≥ y_v$.', false, 'Falsa: o domínio é $ℝ$; é a <strong>imagem</strong> que tem limite.'],
      ['Em $f(x) = −x^{2} + 2x + 3$, o valor máximo é 4.', true, '$x_v = 1$; $f(1) = 4$.'],
      ['O valor máximo de $f$ ocorre em $x_v$ e vale $x_v$.', false, 'Falsa: ocorre em $x_v$, mas vale $y_v = f(x_v)$.'],
      ['A imagem de $x^{2} − 4x + 7$ é $y ≥ 3$.', true, 'Mínimo $f(2) = 3$.'],
      ['Toda função quadrática tem máximo e mínimo.', false, 'Falsa: só um dos dois (conforme o sinal de $a$).'],
      ['Dois números positivos de soma 20 têm produto máximo 100.', true, 'Com $10$ e $10$.'],
      ['Se $a < 0$, a imagem é $y ≥ y_v$.', false, 'Falsa: $y ≤ y_v$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Máximo, mínimo e imagem: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: altura, instante, lucro, produto e mínimo. Digite o número pedido.',
  final: 'Você percorreu a trilha: extremos, posições e imagens.',
  problems: [
    { tag: 'Altura máxima', q: 'Com $h(t) = −5t^{2} + 20t$, qual a altura máxima (m)?', a: 20, ph: 'm', hint: 'h(2).', sol: '<p>$20$.</p>' },
    { tag: 'Instante', q: 'Em que instante (s) ocorre a altura máxima?', a: 2, ph: 's', hint: '−b ÷ 2a.', sol: '<p>$2$.</p>' },
    { tag: 'Lucro', q: 'Qual o lucro máximo de $L(x) = −x^{2} + 10x − 16$?', a: 9, ph: 'L', hint: 'x = 5.', sol: '<p>$9$.</p>' },
    { tag: 'Produto', q: 'Dois números de soma 20: qual o maior produto?', a: 100, ph: 'P', hint: '10 · 10.', sol: '<p>$100$.</p>' },
    { tag: 'Mínimo', q: 'Qual o valor mínimo de $x^{2} − 4x + 7$?', a: 3, ph: 'y', hint: 'f(2).', sol: '<p>$3$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Máximo, Mínimo e Imagem', accent: 'growth', icon: 'parabola',
  aulas: [['Aulas 9–11', 'Valor máximo e mínimo e imagem da função quadrática', 'aula-1-maximos-minimos-e-imagem.html']],
  enem: 'Máximo, mínimo e imagem no estilo ENEM', cria: 'Verdadeiro ou falso: extremos e imagem', pratica: 'Máximo, mínimo e imagem: trilha de desafios'
}, pages };
