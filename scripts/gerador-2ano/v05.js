// Unidade v05 — Estudo dos sinais e gráficos que interpretam situações (aulas 12 e 13 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'sinais-e-graficos', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v05', BRAND = 'Sinais e Gráficos de Situações', CAP = 'Aulas 12 e 13';
const pages = [];

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 12 e 13', h1: 'Sinais da função quadrática: <span style="color:var(--primary);">quando é positiva, negativa ou nula</span>',
  sub: 'Em que dias o saldo da conta ficou negativo? Em que instantes a bola está acima de 15 m? O estudo dos sinais responde, e o gráfico interpreta situações do texto.',
  badges: [['f(x) = 0'], ['f(x) > 0', 'growth'], ['f(x) < 0', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do gráfico ao sinal.', [
  ['Comparar', 'positivo, negativo ou nulo', 'bulb'],
  ['Zeros', 'onde o sinal muda', 'target'],
  ['Concavidade', 'dentro ou fora das raízes', 'chart'],
  ['Inequações', 'f(x) > 0, f(x) ≤ 0', 'link'],
  ['Gráfico de situação', 'texto → parábola', 'scale']
]));
a.push(objetivosSlide([
  'Analisar quando $f(x)$ é <strong>nula, positiva ou negativa</strong> a partir dos zeros e da concavidade.',
  'Resolver <strong>inequações do 2º grau</strong> com o estudo dos sinais.',
  'Reconhecer quando a função é <strong>sempre positiva</strong> ou <strong>sempre negativa</strong> ($Δ < 0$).',
  '<strong>Identificar o gráfico</strong> que representa uma situação descrita em um texto.'
], 'Dica', 'Esboce a parábola com os <strong>zeros</strong> e a <strong>concavidade</strong>: o sinal de $f$ é o da altura da curva em relação ao eixo $x$ (acima ⇒ positivo; abaixo ⇒ negativo).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Comparar é estudar sinais', `
          ${lede('Quem é mais alto, você ou seu pai? Em que dias o saldo da conta ficou <strong>negativo</strong>? Qual o dia mais frio? Todas são <strong>comparações com um valor de referência</strong>: o estudo dos sinais compara $f(x)$ com <strong>zero</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Posição da parábola', 'Sinal de f(x)'], [['acima do eixo x', 'positivo'], ['sobre o eixo x (zeros)', 'nulo'], ['abaixo do eixo x', 'negativo']])}
            ${mini('Em $f(x) = x^{2} − 5x + 6$, o gráfico está abaixo do eixo $x$ quando:', ['x < 2', '2 < x < 3', 'x > 3', 'x < 2 ou x > 3'], 1, 'Os zeros são $2$ e $3$; com $a > 0$, a parábola fica <strong>abaixo</strong> do eixo <strong>entre</strong> os zeros.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · estudo dos sinais', 'Os três casos de Δ', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$Δ > 0$</strong> (zeros $x_1 < x_2$): $a > 0$ ⇒ $f > 0$ <strong>fora</strong> das raízes e $f < 0$ <strong>entre</strong> elas; $a < 0$ ⇒ o contrário.</li>
                <li><strong>$Δ = 0$</strong>: $f$ tem o sinal de $a$ em todo $x ≠ x_1$ e é nula em $x_1$.</li>
                <li><strong>$Δ < 0$</strong>: $f$ tem sempre o sinal de $a$ (nunca muda de sinal).</li>
                <li>Inequações: esboce, localize o sinal pedido e escreva o conjunto-solução.</li>
              </ul>
            </div>
            ${W.box('Estudo dos sinais', W.row(W.nm('e-a', 'a', 1, 'any'), W.nm('e-b', 'b', -5, 'any'), W.nm('e-c', 'c', 6, 'any')) + W.svg('e-s', '0 0 360 230', '380px') + W.txt('e-z', 'Zeros: ') + W.txt('e-p', 'f(x) > 0: ') + W.txt('e-n', 'f(x) < 0: ') + W.hint('e-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Esquema de sinais (a > 0)', `
          ${tbl(['Δ', 'Zeros', 'f(x) > 0', 'f(x) < 0'], [['$Δ > 0$', '$x_1 < x_2$', '$x < x_1$ ou $x > x_2$', '$x_1 < x < x_2$'], ['$Δ = 0$', '$x_1 = x_2$', '$x ≠ x_1$', 'nunca'], ['$Δ < 0$', 'nenhum', 'todo $x$', 'nunca']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Se a < 0', 'Inverta tudo: positivo <strong>entre</strong> as raízes, negativo fora.', 'success')}
            ${callout('Gráfico de situação', 'Vale perguntar: onde começa? Sobe ou desce? Há ponto extremo? O gráfico precisa combinar com <strong>essas</strong> respostas.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Sinais com dois zeros', 'Estude os sinais de $f(x) = x^{2} − 5x + 6$.', [
  ['Zeros', '$Δ = 1$; $x = {5 ± 1|2}$ ⇒ $2$ e $3$.'],
  ['Concavidade', '$a = 1 > 0$: para cima.'],
  ['Sinais', '$f > 0$ para $x < 2$ ou $x > 3$; $f < 0$ para $2 < x < 3$; $f = 0$ em $2$ e $3$.']
], 'Positiva fora de $[2, 3]$, negativa dentro.'));
a.push(exemplo('Exemplo resolvido', 'Inequação', 'Resolva $−x^{2} + 4x − 3 ≥ 0$.', [
  ['Zeros', '$−x^{2} + 4x − 3 = 0$ ⇒ $x^{2} − 4x + 3 = 0$ ⇒ $1$ e $3$.'],
  ['Concavidade', '$a = −1 < 0$: para baixo (positiva entre os zeros).'],
  ['Solução', '$1 ≤ x ≤ 3$.']
], '$S = [1, 3]$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quantos inteiros?', 'Quantos números inteiros $x$ satisfazem $x^{2} − 4x − 5 < 0$?', [
  ['Zeros', '$Δ = 36$; $x = {4 ± 6|2}$ ⇒ $−1$ e $5$.'],
  ['Sinal', '$a > 0$: negativa entre os zeros: $−1 < x < 5$.'],
  ['Inteiros', '$0, 1, 2, 3, 4$ (as pontas não entram).']
], '<strong>5 inteiros</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Sempre positiva', 'Mostre que $f(x) = x^{2} + x + 1$ é positiva para todo $x$.', [
  ['Δ', '$Δ = 1 − 4 = −3 < 0$.'],
  ['Concavidade', '$a = 1 > 0$.']
], 'Sem zeros e com $a > 0$: $f(x) > 0$ para <strong>todo</strong> $x$ real.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Que gráfico descreve a situação?', 'Uma bola é chutada do chão, sobe e volta ao chão. Que gráfico representa sua altura em função do tempo?', [
  ['Início', 'Em $t = 0$ a altura é 0: a curva parte da origem.'],
  ['Subida e descida', 'Sobe até um máximo e desce: concavidade para <strong>baixo</strong>.'],
  ['Fim', 'Volta a 0: corta o eixo $t$ em um segundo zero.']
], 'Uma <strong>parábola com concavidade para baixo</strong> que parte de $(0, 0)$ e volta ao eixo $x$.', 'growth'));

a.push(pratique('Sinais', 'Em $f(x) = x^{2} − 5x + 6$, $f(x) < 0$ quando:',
  ['$x < 2$', '$2 < x < 3$', '$x > 3$', '$x < 2$ ou $x > 3$', 'nunca'], 1,
  'Entre os zeros. <strong>Alternativa B.</strong>'));
a.push(pratique('Inequação', 'O conjunto-solução de $−x^{2} + 4x − 3 ≥ 0$ é:',
  ['$[1, 3]$', '$]−∞, 1] ∪ [3, +∞[$', '$]1, 3[$', '$ℝ$', '$∅$'], 0,
  '$a < 0$: positiva entre os zeros, inclusive. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(estiloEnem('Inteiros que satisfazem', 'O número de inteiros $x$ que satisfazem $x^{2} − 4x − 5 < 0$ é:',
  ['3', '4', '5', '6', '7'], 2,
  '$−1 < x < 5$: $0, 1, 2, 3, 4$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os sinais enganam', [
  ['Dentro × fora', 'Com $a > 0$: negativo <strong>entre</strong> as raízes. Com $a < 0$: positivo entre as raízes.'],
  ['Desigualdade estrita × não estrita', '“$<$” exclui as raízes; “$≤$” inclui.'],
  ['Δ < 0 não é sem sinal', 'A função tem sempre o sinal de $a$.'],
  ['Zero duplo', 'Em $Δ = 0$, $f$ não muda de sinal.']
]));
a.push(quiz([
  { q: 'Se $a > 0$ e $Δ < 0$, então $f(x)$ é:', o: ['sempre positiva', 'sempre negativa', 'nula', 'muda de sinal'], a: 0 },
  { q: 'Para $−x^{2} + 4 > 0$ (zeros ±2):', o: ['$x < −2$ ou $x > 2$', '$−2 < x < 2$', '$x > 2$', 'todo $x$'], a: 1 },
  { q: 'A inequação $x^{2} ≥ 0$ tem solução:', o: ['$∅$', '$x > 0$', '$ℝ$', '$x = 0$'], a: 2 },
  { q: 'O gráfico de um objeto lançado do chão tem concavidade:', o: ['para cima', 'para baixo', 'não tem', 'horizontal'], a: 1 }
]));
a.push(fechamento([
  ['Sinais', 'Zeros e concavidade esboçam a parábola.'],
  ['Δ < 0', 'Sinal constante, igual ao de $a$.'],
  ['Situações', 'Início, extremo e fim guiam a escolha do gráfico.']
], 'Esboce, localize o sinal e escreva o conjunto-solução.'));

pages.push({ out: BASE + 'aula-1-sinais-e-graficos-de-situacoes.html', html: K.deck({
  title: 'Estudo dos sinais e gráficos de situações — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 12 e 13 · Sinais e gráficos de situações', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['e-a', 'e-b', 'e-c'], function(){ var a = +$('e-a').value, b = +$('e-b').value, c = +$('e-c').value, sv = $('e-s');
    if(![a, b, c].every(isFinite) || a === 0){ sv.innerHTML = ''; ['e-z', 'e-p', 'e-n'].forEach(function(i){ $(i).textContent = '—'; }); $('e-h').textContent = a === 0 ? 'a = 0: não é quadrática' : ''; return; }
    var d = b * b - 4 * a * c, j = janela(a, b, c), P = parabola(sv, j.f, j.xmin, j.xmax, j.ymin, j.ymax), pos, neg;
    if(d > 0){ var s = Math.sqrt(d), r1 = Math.min((-b - s) / (2 * a), (-b + s) / (2 * a)), r2 = Math.max((-b - s) / (2 * a), (-b + s) / (2 * a)); bola(sv, P, r1, 0, false, 'var(--growth)'); bola(sv, P, r2, 0, false, 'var(--growth)');
      $('e-z').textContent = pt(r1) + ' e ' + pt(r2); var fora = 'x < ' + pt(r1) + ' ou x > ' + pt(r2), dentro = pt(r1) + ' < x < ' + pt(r2); pos = a > 0 ? fora : dentro; neg = a > 0 ? dentro : fora; }
    else if(d === 0){ var x0 = -b / (2 * a); bola(sv, P, x0, 0, false, 'var(--growth)'); $('e-z').textContent = pt(x0) + ' (duplo)'; pos = a > 0 ? 'x ≠ ' + pt(x0) : 'nunca'; neg = a > 0 ? 'nunca' : 'x ≠ ' + pt(x0); }
    else { $('e-z').textContent = 'nenhum zero real'; pos = a > 0 ? 'todo x real' : 'nunca'; neg = a > 0 ? 'nunca' : 'todo x real'; }
    $('e-p').textContent = pos; $('e-n').textContent = neg; $('e-h').textContent = 'a ' + (a > 0 ? '> 0' : '< 0') + ' e Δ = ' + pt(d) + ': a parábola é positiva quando está acima do eixo x e negativa quando está abaixo.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Sinais da função quadrática: <span>zeros, concavidade e situações</span>',
  lede: 'O sinal de f(x) depende dos zeros e do sinal de a. Com Δ > 0: fora das raízes tem o sinal de a e entre elas o contrário. Δ < 0: sinal constante.',
  badges: ['f > 0, f < 0, f = 0', 'fora × entre', 'Δ < 0: sinal de a'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Sinais', 'Posição no gráfico', 'chart', 'primary', p('Acima do eixo: positivo; abaixo: negativo.') + call('Zeros', 'f = 0.', 'success')],
    ['Δ > 0', 'Dois zeros', 'target', 'growth', li(['$a > 0$: positiva fora, negativa entre.', '$a < 0$: o contrário.', 'Raízes: sinal nulo.'])],
    ['Δ = 0', 'Zero duplo', 'scale', 'decay', p('Sem mudança de sinal.') + call('Exemplo', '$(x − 3)^{2} ≥ 0$.', 'success')],
    ['Δ < 0', 'Sem zeros', 'link', 'success', p('Sinal constante: o de $a$.') + call('Exemplo', '$x^{2} + x + 1 > 0$.', 'success')],
    ['Inequações', 'Conjunto-solução', 'up', 'primary', p('Esboce e leia o intervalo.') + call('Exemplo', '$−x^{2} + 4x − 3 ≥ 0$: $[1, 3]$.', 'success')],
    ['Gráficos de situações', 'Texto ↔ parábola', 'check', 'growth', li(['Onde começa?', 'Sobe ou desce?', 'Há extremo?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar dentro e fora.', 'Incluir raízes em “<”.', 'Dizer que Δ < 0 não tem sinal.', 'Esquecer o sinal de a.', 'Escolher gráfico sem checar o ponto inicial.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Sinais da função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: sinais, inequação, inteiros, sempre positiva e gráfico de situação.',
  final: 'Zeros, concavidade e esboço: o sinal está na parábola.',
  questions: [
    { badge: 'Estilo ENEM · sinais', text: 'Considere $f(x) = x^{2} − 5x + 6$.', cmd: 'Em que intervalo $f(x) < 0$?', opts: ['$x < 2$', '$2 < x < 3$', '$x > 3$', '$x < 2$ ou $x > 3$', 'nunca'], a: 1,
      sol: '<p>Zeros $2$ e $3$; $a > 0$: negativa entre eles.</p>' },
    { badge: 'Estilo ENEM · inequação', text: 'Considere a inequação $−x^{2} + 4x − 3 ≥ 0$.', cmd: 'O conjunto-solução é:', opts: ['$[1, 3]$', '$]−∞, 1] ∪ [3, +∞[$', '$]1, 3[$', '$ℝ$', '$∅$'], a: 0,
      sol: '<p>Zeros $1$ e $3$; $a < 0$: positiva (ou nula) entre eles.</p>' },
    { badge: 'Estilo ENEM · inteiros', text: 'Considere $x^{2} − 4x − 5 < 0$.', cmd: 'Quantos números inteiros satisfazem a desigualdade?', opts: ['3', '4', '5', '6', '7'], a: 2,
      sol: '<p>$−1 < x < 5$: $0, 1, 2, 3, 4$.</p>' },
    { badge: 'Estilo ENEM · sempre positiva', text: 'Considere $f(x) = x^{2} + x + 1$.', cmd: 'Para quais valores reais $f(x) > 0$?', opts: ['nenhum', '$x > 0$', '$x > −1$', 'todos os reais', 'só $x = 0$'], a: 3,
      sol: '<p>$Δ = −3 < 0$ e $a > 0$: sempre positiva.</p>' },
    { badge: 'Estilo ENEM · gráfico de situação', text: 'Uma bola é chutada do chão, sobe e volta ao chão.', cmd: 'O gráfico da altura em função do tempo é:', opts: ['reta crescente', 'parábola com concavidade para cima partindo da origem', 'parábola com concavidade para baixo partindo da origem e voltando ao eixo', 'reta horizontal', 'parábola que nunca toca o eixo do tempo'], a: 2,
      sol: '<p>Parte de $(0, 0)$, sobe até um máximo e volta a 0: parábola voltada para baixo.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'O sinal da <span style="color:var(--growth);">função</span>',
  subtitle: 'Sempre positiva, sempre negativa ou muda de sinal?',
  tpl: cClassificar({
    cats: ['Sempre positiva', 'Sempre negativa', 'Muda de sinal'],
    intro: 'Cada cartão traz uma função. Calcule o Δ, olhe o sinal de $a$ e clique em <strong>Conferir</strong>.',
    final: 'Δ < 0 ⇒ sinal de a em todo x; Δ > 0 ⇒ muda de sinal.',
    itens: [
      ['$x^{2} + 1$', 0, '$Δ = −4 < 0$ e $a > 0$.'],
      ['$−x^{2} − 4$', 1, '$Δ < 0$ e $a < 0$.'],
      ['$x^{2} − 1$', 2, 'Zeros $±1$: muda de sinal.'],
      ['$x^{2} + x + 1$', 0, '$Δ = −3 < 0$, $a > 0$.'],
      ['$−x^{2} + 2x − 5$', 1, '$Δ = 4 − 20 = −16 < 0$, $a < 0$.'],
      ['$x^{2} − 4x + 3$', 2, 'Zeros $1$ e $3$.'],
      ['$2x^{2} + 3$', 0, '$Δ < 0$, $a > 0$.'],
      ['$−x^{2} − x − 1$', 1, '$Δ = 1 − 4 = −3 < 0$, $a < 0$.'],
      ['$x^{2} + 2x − 8$', 2, 'Zeros $−4$ e $2$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Sinais da função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: zeros, inteiros, extremo do intervalo e contagem. Digite o número pedido.',
  final: 'Você percorreu a trilha: zeros, intervalos e inteiros.',
  problems: [
    { tag: 'Zeros', q: 'Qual o maior zero de $x^{2} − 5x + 6$?', a: 3, ph: 'x', hint: '2 e 3.', sol: '<p>$3$.</p>' },
    { tag: 'Inteiros', q: 'Quantos inteiros satisfazem $x^{2} − 4x − 5 < 0$?', a: 5, ph: 'inteiros', hint: '−1 < x < 5.', sol: '<p>$5$.</p>' },
    { tag: 'Extremo', q: 'Qual o maior valor de $x$ em $−x^{2} + 4x − 3 ≥ 0$?', a: 3, ph: 'x', hint: '[1, 3].', sol: '<p>$3$.</p>' },
    { tag: 'Inteiros incluindo extremos', q: 'Quantos inteiros satisfazem $−x^{2} + 4x − 3 ≥ 0$?', a: 3, ph: 'inteiros', hint: '1, 2, 3.', sol: '<p>$3$.</p>' },
    { tag: 'Discriminante', q: 'Qual o valor de $Δ$ para $x^{2} + x + 1$?', a: -3, ph: 'Δ', hint: '1 − 4.', sol: '<p>$−3$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Sinais e Gráficos de Situações', accent: 'primary', icon: 'parabola',
  aulas: [['Aulas 12–13', 'Estudo dos sinais e gráficos de situações', 'aula-1-sinais-e-graficos-de-situacoes.html']],
  enem: 'Sinais da função quadrática no estilo ENEM', cria: 'O sinal da função', pratica: 'Sinais da função quadrática: trilha de desafios'
}, pages };
