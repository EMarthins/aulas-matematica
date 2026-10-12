// Unidade v03 — Gráfico da função exponencial: crescente e decrescente (aulas 6 a 9 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-exponencial-grafico', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v03', BRAND = 'Gráfico da Função Exponencial', CAP = 'Aulas 6 a 9';
const pages = [];

const GJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function curva(svg, P, f, xmin, xmax, cor){ var pts = []; for(var i = 0; i <= 120; i++){ var x = xmin + (xmax - xmin) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts, cor); }
`;

// ===================== AULA 1: crescente =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 6 e 7', h1: 'Exponencial crescente: <span style="color:var(--growth);">a curva que acelera</span>',
  sub: 'Juros compostos, células que se dividem, usuários de um aplicativo: o crescimento exponencial começa devagar e depois dispara. O gráfico mostra isso.',
  badges: [['a > 1'], ['passa por (0, k)', 'growth'], ['nunca toca o eixo x', 'decay']], color: 'growth'
}));
a.push(roteiroSlide('Ler e esboçar o gráfico.', [
  ['Juros compostos', 'a primeira exponencial do dia a dia', 'bulb'],
  ['Pontos-chave', '(0, k) e a curva sempre acima do eixo x', 'target'],
  ['Propriedades', 'domínio, imagem, raiz e monotonia', 'chart'],
  ['Deslocamentos', 'f(x) + c e k · f(x)', 'link'],
  ['Comparar valores', 'crescente mantém a desigualdade', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer o <strong>gráfico</strong> da exponencial crescente ($a > 1$): curva que sobe cada vez mais rápido.',
  'Identificar o ponto $(0, k)$ e entender por que a curva <strong>não tem raiz</strong> ($a^{x} > 0$).',
  'Descrever <strong>domínio, imagem e assíntota</strong> ($y = 0$).',
  'Relacionar mudanças na lei ($+c$, $k ·$) com mudanças no gráfico.'
], 'Dica', 'Para esboçar, calcule três pontos: $x = −1$, $x = 0$ e $x = 1$. A curva fica <strong>colada ao eixo x</strong> à esquerda e <strong>dispara</strong> à direita.', 'growth', 'growth-ink'));

a.push(sl('Para início de conversa', 'Juros sobre juros', `
          ${lede('Ana aplicou <strong>R$ 3 000</strong> a juros compostos de <strong>20% ao ano</strong>. Cada ano o montante é multiplicado por $1,2$: $M(t) = 3\\ 000 · 1,2^{t}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Ano', 'Montante (reais)'], [['0', '3 000'], ['1', '3 600'], ['2', '4 320'], ['3', '5 184']])}
            ${mini('Se Ana não retirar nada, ao fim de 3 anos terá, em reais:', ['4 800', '5 000', '5 184', '5 400'], 2, '$3\\ 000 · 1,2^{3} = 3\\ 000 · 1,728 = 5\\ 184$. Os juros de cada ano incidem sobre o montante anterior (juros sobre juros).')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · gráfico', 'A curva de y = 2ˣ', `
          <div class="grid2">
            <div>
              ${graf({ w: 340, h: 215, xmin: -3, xmax: 3, ymin: -1, ymax: 9, px: 1, py: 2, series: [{ pts: amostra(x => Math.pow(2, x), -3, 3), cor: 'var(--growth)' }], marcas: [[0, 1, '(0, 1)', 8, -8], [1, 2, '(1, 2)', 8, -8], [2, 4, '(2, 4)', -8, -8]], max: '360px' })}
              <p class="hint" style="margin-top:6px;">Para $x → −∞$ a curva se aproxima do eixo $x$, sem tocá-lo (<strong>assíntota</strong> $y = 0$).</p>
            </div>
            ${W.box('Gráfico de f(x) = k · aˣ', W.row(W.nm('g1-k', 'k', 1, 'any', 'min="0.1"'), W.nm('g1-a', 'base a', 2, 'any')) + W.svg('g1-s', '0 0 360 230', '380px') + W.txt('g1-v', 'Pontos: ') + W.hint('g1-h'))}
          </div>`, { cls: 'growth' }));

a.push(sl('Resumo visual', 'Propriedades da exponencial crescente (a > 1)', `
          ${tbl(['Propriedade', 'f(x) = k · aˣ (k > 0, a > 1)'], [['Domínio', '$ℝ$ (todos os reais)'], ['Imagem', '$ℝ_{+}^{*}$: $f(x) > 0$ para todo $x$'], ['Corte no eixo y', 'ponto $(0, k)$ — para $k = 1$, o ponto $(0, 1)$'], ['Raízes (corte no eixo x)', 'não tem: $a^{x} ≠ 0$'], ['Monotonia', 'estritamente crescente: $x_1 < x_2 ⇒ f(x_1) < f(x_2)$'], ['Assíntota', 'o eixo x ($y = 0$) à esquerda']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Deslocar para cima', '$g(x) = a^{x} + c$ sobe o gráfico $c$ unidades: $g(0) = 1 + c$ e a assíntota passa a ser $y = c$.', 'success')}
            ${callout('Esticar', '$h(x) = k · a^{x}$ muda o valor inicial: $h(0) = k$. A assíntota continua $y = 0$.', 'success')}
          </div>`, { cls: 'growth' }));

a.push(exemplo('Exemplo resolvido', 'Propriedades de 3ˣ', 'Para $f(x) = 3^{x}$, determine $f(0)$, o sinal de $f$ e a imagem.', [
  ['Valor inicial', '$f(0) = 3^{0} = 1$: a curva passa por $(0, 1)$.'],
  ['Sinal', 'Potência de base positiva é sempre positiva: $f(x) > 0$.'],
  ['Imagem', '$Im(f) = ]0, +∞[$; não há ponto com $y ≤ 0$, logo não há raiz.']
], '$f(0) = 1$, $f(x) > 0$ e $Im(f) = ℝ_{+}^{*}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Duas funções com f(0) = 2', 'Dada $f(x) = 3^{x}$, escreva duas modificações da lei de modo que a nova função $g$ tenha $g(0) = 2$.', [
  ['Esticar', '$g(x) = 2 · 3^{x}$ ⇒ $g(0) = 2 · 1 = 2$.'],
  ['Deslocar', '$h(x) = 3^{x} + 1$ ⇒ $h(0) = 1 + 1 = 2$.'],
  ['Compare as assíntotas', '$g$ tem assíntota $y = 0$; $h$ tem assíntota $y = 1$.']
], '$g(x) = 2 · 3^{x}$ e $h(x) = 3^{x} + 1$ — as duas passam por $(0, 2)$, mas têm gráficos diferentes.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Imagem com deslocamento', 'Qual é a imagem de $g(x) = 5 · 2^{x} + 1$?', [
  ['Parte exponencial', '$5 · 2^{x} > 0$ para todo $x$.'],
  ['Some 1', '$g(x) = 5 · 2^{x} + 1 > 1$.'],
  ['Valores atingidos', 'A curva se aproxima de $y = 1$ sem tocar; $g(0) = 6$.']
], '$Im(g) = \\{y ∈ ℝ ∣ y > 1\\}$, com assíntota $y = 1$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Lei pelo gráfico', 'O gráfico de $f(x) = k · a^{x}$ passa por $(0, 2)$ e $(1, 6)$. Determine $f(2)$.', [
  ['Valor inicial', '$f(0) = k = 2$.'],
  ['Base', '$f(1) = 2a = 6$ ⇒ $a = 3$.'],
  ['Valor pedido', '$f(2) = 2 · 3^{2} = 18$.']
], '$f(x) = 2 · 3^{x}$ e $f(2) = 18$.', 'growth'));

a.push(pratique('Ponto do gráfico', 'O gráfico de $f(x) = 4 · 3^{x}$ corta o eixo $y$ no ponto:',
  ['(0, 1)', '(0, 3)', '(0, 4)', '(4, 0)', '(3, 0)'], 2,
  '$f(0) = 4 · 3^{0} = 4$: o ponto é $(0, 4)$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Comparar valores', 'Qual é maior: $2^{1,5}$ ou $2^{1,7}$?',
  ['$2^{1,5}$', '$2^{1,7}$', 'são iguais', 'depende de x', 'não dá para comparar'], 1,
  'Base $2 > 1$: função crescente, logo o maior expoente dá o maior valor. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Lei pelo gráfico', 'O gráfico de $f(x) = k · a^{x}$, com $a > 0$, passa por $(0, 4)$ e $(1, 12)$. O valor de $f(2)$ é:',
  ['24', '30', '36', '48', '72'], 2,
  '$k = 4$ e $4a = 12$ ⇒ $a = 3$. $f(2) = 4 · 9 = 36$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o gráfico exponencial engana', [
  ['Curva que “toca” o eixo x', 'A curva só se aproxima do eixo $x$; $a^{x} = 0$ não tem solução.'],
  ['Confundir f(0) com 0', '$f(0) = k$ (ou $1$, se $k = 1$): é o corte no <strong>eixo y</strong>.'],
  ['Assíntota depois do deslocamento', 'Em $a^{x} + c$ a assíntota é $y = c$ (não $y = 0$).'],
  ['Achar que cresce linearmente', 'O aumento por passo <strong>não é constante</strong>: cresce cada vez mais.']
]));
a.push(quiz([
  { q: 'O gráfico de $f(x) = 2^{x}$ passa por:', o: ['(0, 0)', '(0, 1)', '(1, 1)', '(2, 2)'], a: 1 },
  { q: 'O gráfico de $f(x) = 5^{x}$ corta o eixo $x$ em:', o: ['(0, 0)', '(1, 0)', '(5, 0)', 'nenhum ponto'], a: 3 },
  { q: 'A imagem de $f(x) = 2^{x} + 3$ é:', o: ['$y > 0$', '$y > 3$', '$y ≥ 3$', '$ℝ$'], a: 1 },
  { q: 'Se $a > 1$ e $x_1 < x_2$, então:', o: ['$a^{x_1} > a^{x_2}$', '$a^{x_1} = a^{x_2}$', '$a^{x_1} < a^{x_2}$', 'nada se pode afirmar'], a: 2 }
]));
a.push(fechamento([
  ['Forma', 'Curva crescente que passa por $(0, k)$.'],
  ['Eixo x', 'Assíntota: nunca toca, sem raízes.'],
  ['Imagem', '$y > 0$ (ou $y > c$ se deslocada).']
], 'Três pontos e uma assíntota: o esboço completo da exponencial crescente.'));

pages.push({ out: BASE + 'aula-1-exponencial-crescente.html', html: K.deck({
  title: 'Exponencial crescente: gráfico — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 6 e 7 · Exponencial crescente', slides: a,
  extra: WJS + BIND + PL + GJS + String.raw`
  bind(['g1-k', 'g1-a'], function(){ var k = +$('g1-k').value, a = +$('g1-a').value, svg = $('g1-s');
    if(![k, a].every(isFinite) || a <= 0 || a === 1 || k <= 0){ svg.innerHTML = ''; $('g1-v').textContent = (a <= 0 || a === 1) ? 'base inválida: a > 0 e a ≠ 1' : 'use k > 0'; $('g1-h').textContent = ''; return; }
    var f = function(x){ return k * Math.pow(a, x); }, xmin = -3, xmax = 3, ymax = Math.max(f(xmin), f(xmax)) * 1.08, ymin = -ymax * 0.1;
    var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, 1, passo(ymax)); curva(svg, P, f, xmin, xmax, a > 1 ? 'var(--growth)' : 'var(--decay)'); bola(svg, P, 0, k, false, 'var(--primary)');
    $('g1-v').textContent = 'f(−1) = ' + pt(f(-1), 3) + ' · f(0) = ' + pt(k) + ' · f(1) = ' + pt(f(1), 3);
    $('g1-h').textContent = (a > 1 ? 'a > 1: curva crescente' : '0 < a < 1: curva decrescente') + '; corta o eixo y em (0, ' + pt(k) + ') e não toca o eixo x.'; });`
}) });

// ===================== AULA 2: decrescente =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 8 e 9', h1: 'Exponencial decrescente: <span style="color:var(--decay);">a queda que desacelera</span>',
  sub: 'A radioatividade se desintegra pela metade a cada intervalo fixo — a meia-vida. A massa nunca chega a zero, mas fica cada vez menor.',
  badges: [['0 < a < 1'], ['espelho de aˣ', 'growth'], ['assíntota y = 0', 'decay']], color: 'decay'
}));
b.push(roteiroSlide('Decaimento exponencial.', [
  ['Meia-vida', 'material radioativo e medicamentos', 'bulb'],
  ['Base entre 0 e 1', 'a curva desce', 'target'],
  ['Espelho', '$(1 ÷ a)^{x}$ é $a^{x}$ refletido', 'chart'],
  ['Comparações', 'decrescente inverte a desigualdade', 'link'],
  ['Leitura de gráficos', 'achar a base pelos pontos', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer o gráfico da exponencial <strong>decrescente</strong> ($0 < a < 1$).',
  'Relacionar $a^{x}$ e $(1 ÷ a)^{x}$: gráficos <strong>simétricos em relação ao eixo y</strong>.',
  'Comparar valores usando a regra: <strong>base entre 0 e 1 inverte</strong> a desigualdade dos expoentes.',
  'Determinar a lei de uma função decrescente a partir de <strong>dois pontos</strong>.'
], 'Dica', '$({1|2})^{x} = 2^{−x}$: escrever a base inversa com expoente negativo ajuda a reconhecer o gráfico espelhado.', 'decay', 'decay'));

b.push(sl('Para início de conversa', 'Meia-vida', `
          ${lede('A <strong>meia-vida</strong> é o tempo para que metade de um material radioativo se desintegre. Uma amostra de <strong>80 g</strong> com meia-vida de <strong>2 h</strong> perde metade da massa a cada 2 horas.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Tempo (h)', 'Massa (g)'], [['0', '80'], ['2', '40'], ['4', '20'], ['6', '10'], ['t', '$80 · ({1|2})^{t ÷ 2}$']])}
            ${mini('Depois de 6 horas, restam:', ['5 g', '10 g', '20 g', '40 g'], 1, '6 h são 3 meias-vidas: $80 → 40 → 20 → 10$. Pela lei: $80 · ({1|2})^{3} = 80 ÷ 8 = 10$ g.')}
          </div>`, { cls: 'decay' }));

b.push(sl('Teoria · gráfico', 'O espelho de aˣ', `
          <div class="grid2">
            <div>
              ${graf({ w: 340, h: 215, xmin: -3, xmax: 3, ymin: -1, ymax: 9, px: 1, py: 2, series: [{ pts: amostra(x => Math.pow(2, x), -3, 3), cor: 'var(--growth)' }, { pts: amostra(x => Math.pow(0.5, x), -3, 3), cor: 'var(--decay)' }], marcas: [[0, 1, '(0, 1)', 8, -8]], max: '360px' })}
              <p class="hint" style="margin-top:6px;"><span style="color:var(--growth);">$2^{x}$ (crescente)</span> e <span style="color:var(--decay);">$({1|2})^{x}$ (decrescente)</span> são simétricas em relação ao eixo $y$.</p>
            </div>
            ${W.box('Compare aˣ e (1/a)ˣ', W.row(W.nm('g2-a', 'base a', 0.5, 'any')) + W.svg('g2-s', '0 0 360 230', '380px') + W.txt('g2-v', 'Valores em x = 2: ') + W.hint('g2-h'))}
          </div>`, { cls: 'decay' }));

b.push(sl('Resumo visual', 'Crescente × decrescente', `
          ${tbl(['', 'Crescente (a > 1)', 'Decrescente (0 < a < 1)'], [['Exemplo', '$2^{x}$', '$({1|2})^{x}$'], ['Passa por', '$(0, 1)$', '$(0, 1)$'], ['Imagem', '$y > 0$', '$y > 0$'], ['Comportamento', 'sobe; $x → −∞$ ⇒ cola em $y = 0$', 'desce; $x → +∞$ ⇒ cola em $y = 0$'], ['Comparar expoentes', '$x_1 < x_2 ⇒ f(x_1) < f(x_2)$', '$x_1 < x_2 ⇒ f(x_1) > f(x_2)$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Atenção', 'Em ambos os casos a imagem é $y > 0$ e <strong>não há raiz</strong>: a função nunca vale zero.', 'success')}
            ${callout('Equivalência', '$({1|a})^{x} = a^{−x}$: a função decrescente é a crescente refletida pelo eixo $y$.', 'success')}
          </div>`, { cls: 'decay' }));

b.push(exemplo('Exemplo resolvido', 'Meia-vida', 'Uma amostra de 80 g tem meia-vida de 2 h: $M(t) = 80 · ({1|2})^{t ÷ 2}$. Quanto resta após 6 h?', [
  ['Substitua', '$M(6) = 80 · ({1|2})^{6 ÷ 2} = 80 · ({1|2})^{3}$.'],
  ['Calcule a potência', '$({1|2})^{3} = {1|8}$.'],
  ['Multiplique', '$80 · {1|8} = 10$.']
], 'Restam <strong>10 g</strong>.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'Desvalorização', 'Um equipamento de R$ 20 000 perde 15% do valor por ano: $V(t) = 20\\ 000 · 0,85^{t}$. Quanto vale após 2 anos?', [
  ['Base', 'Queda de 15%: $a = 0,85$ (entre 0 e 1: decrescente).'],
  ['Potência', '$0,85^{2} = 0,7225$.'],
  ['Valor', '$20\\ 000 · 0,7225 = 14\\ 450$.']
], 'Vale <strong>R$ 14 450</strong>.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'Comparação com base menor que 1', 'Compare $({1|2})^{3}$ e $({1|2})^{5}$.', [
  ['Calcule', '$({1|2})^{3} = {1|8}$ e $({1|2})^{5} = {1|32}$.'],
  ['Compare', '${1|8} > {1|32}$.'],
  ['Regra', 'Base entre 0 e 1: $3 < 5$ mas $f(3) > f(5)$ — a desigualdade <strong>inverte</strong>.']
], '$({1|2})^{3} > ({1|2})^{5}$.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'Inequação exponencial simples', 'Resolva $({1|3})^{x} > {1|27}$.', [
  ['Mesma base', '${1|27} = ({1|3})^{3}$ ⇒ $({1|3})^{x} > ({1|3})^{3}$.'],
  ['Base entre 0 e 1', 'A função é decrescente: ao tirar a base, a desigualdade <strong>inverte</strong>.'],
  ['Resultado', '$x < 3$.']
], '$x < 3$. Teste: $x = 2$ ⇒ ${1|9} > {1|27}$ ✓.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'Lei pelo gráfico', 'O gráfico de $f(x) = a^{x}$ passa por $(1, 0,25)$. Determine $a$ e $f(−1)$.', [
  ['Base', '$f(1) = a = 0,25 = {1|4}$ (entre 0 e 1: decrescente).'],
  ['Lei', '$f(x) = ({1|4})^{x} = 4^{−x}$.'],
  ['Valor', '$f(−1) = ({1|4})^{−1} = 4$.']
], '$a = {1|4}$ e $f(−1) = 4$.', 'decay'));

b.push(pratique('Reconhecendo', 'Qual das funções é decrescente?',
  ['$2^{x}$', '$3^{x}$', '$({1|5})^{x}$', '$1,5^{x}$', '$10^{x}$'], 2,
  'Só $({1|5})^{x}$ tem base entre 0 e 1. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(pratique('Meia-vida', 'Uma massa de 80 g tem meia-vida de 2 h. Após 4 h restam:',
  ['10 g', '20 g', '30 g', '40 g', '60 g'], 1,
  '4 h são 2 meias-vidas: $80 → 40 → 20$. <strong>Alternativa B.</strong>', '', 'decay'));
b.push(estiloEnem('Desvalorização', 'Um equipamento de R$ 20 000 perde 15% do valor por ano. Seu valor, em reais, após 2 anos é:',
  ['14 000', '14 450', '15 000', '16 000', '17 000'], 1,
  '$20\\ 000 · 0,85^{2} = 20\\ 000 · 0,7225 = 14\\ 450$. <strong>Alternativa B.</strong>', 'decay'));

b.push(armadilhas('Cuidados', 'Onde o decaimento engana', [
  ['Achar que chega a zero', 'A massa fica cada vez menor, mas $a^{x} > 0$: nunca é exatamente zero.'],
  ['Esquecer de inverter a desigualdade', 'Com base entre 0 e 1, $f$ é decrescente: o sinal da desigualdade entre expoentes <strong>muda</strong>.'],
  ['Queda de 15% como base 0,15', 'Queda de 15% dá base $1 − 0,15 = 0,85$.'],
  ['Confundir meia-vida com metade do total', 'A cada meia-vida, reduz-se à metade <strong>do que havia</strong>, e não do valor inicial.']
]));
b.push(quiz([
  { q: 'A função $f(x) = 0,7^{x}$ é:', o: ['crescente', 'decrescente', 'constante', 'quadrática'], a: 1 },
  { q: 'Os gráficos de $3^{x}$ e $({1|3})^{x}$ são simétricos em relação ao:', o: ['eixo x', 'eixo y', 'origem', 'ponto (1, 1)'], a: 1 },
  { q: 'Após 3 meias-vidas, a fração que resta é:', o: ['${1|3}$', '${1|6}$', '${1|8}$', '${1|9}$'], a: 2 },
  { q: 'Se $0 < a < 1$ e $x_1 < x_2$, então:', o: ['$a^{x_1} < a^{x_2}$', '$a^{x_1} = a^{x_2}$', '$a^{x_1} > a^{x_2}$', 'nada se pode afirmar'], a: 2 }
]));
b.push(fechamento([
  ['Base', '$0 < a < 1$: curva decrescente.'],
  ['Espelho', '$({1|a})^{x}$ reflete $a^{x}$ no eixo y.'],
  ['Desigualdade', 'Inverte quando a base está entre 0 e 1.']
], 'Cada meia-vida corta pela metade: a curva cai, mas nunca toca o eixo.'));

pages.push({ out: BASE + 'aula-2-exponencial-decrescente.html', html: K.deck({
  title: 'Exponencial decrescente: gráfico — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 8 e 9 · Exponencial decrescente', slides: b,
  extra: WJS + BIND + PL + GJS + String.raw`
  bind(['g2-a'], function(){ var a = +$('g2-a').value, svg = $('g2-s');
    if(!isFinite(a) || a <= 0 || a === 1){ svg.innerHTML = ''; $('g2-v').textContent = 'base inválida: a > 0 e a ≠ 1'; $('g2-h').textContent = ''; return; }
    var f = function(x){ return Math.pow(a, x); }, g = function(x){ return Math.pow(1 / a, x); }, xmin = -3, xmax = 3, ymax = Math.max(f(xmin), f(xmax), g(xmin), g(xmax)) * 1.08, ymin = -ymax * 0.1;
    var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, 1, passo(ymax)); curva(svg, P, f, xmin, xmax, 'var(--decay)'); curva(svg, P, g, xmin, xmax, 'var(--growth)'); bola(svg, P, 0, 1, false, 'var(--primary)');
    $('g2-v').textContent = pt(a) + '^2 = ' + pt(f(2), 4) + ' e (1/' + pt(a) + ')^2 = ' + pt(g(2), 4);
    $('g2-h').textContent = 'Vermelho: ' + pt(a) + '^x (' + (a > 1 ? 'crescente' : 'decrescente') + '). Verde: (1/' + pt(a) + ')^x (' + (a > 1 ? 'decrescente' : 'crescente') + '). Uma é a outra refletida no eixo y.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Gráfico da função exponencial: <span>crescente e decrescente</span>',
  lede: 'A curva passa por (0, k), nunca toca o eixo x e sobe (a > 1) ou desce (0 < a < 1). As duas são espelhos uma da outra no eixo y.',
  badges: ['a > 1: sobe', '0 < a < 1: desce', 'assíntota y = 0'],
  curve: 'M20,165 C 120,160 200,135 280,95 C 360,55 420,35 480,18',
  sections: [
    ['Pontos-chave', '(0, k)', 'chart', 'primary', p('$f(0) = k · a^{0} = k$') + call('Exemplo', '$4 · 3^{x}$ passa por $(0, 4)$.', 'success')],
    ['Crescente', 'a > 1', 'up', 'growth', li(['$x_1 < x_2 ⇒ f(x_1) < f(x_2)$.', 'Cola em $y = 0$ à esquerda.', 'Juros, bactérias, usuários.'])],
    ['Decrescente', '0 < a < 1', 'target', 'decay', li(['$x_1 < x_2 ⇒ f(x_1) > f(x_2)$.', 'Cola em $y = 0$ à direita.', 'Meia-vida, desvalorização.'])],
    ['Imagem e raízes', 'Sempre y > 0', 'scale', 'success', p('$a^{x} > 0$ ⇒ sem raiz.') + call('Com deslocamento', '$a^{x} + c$: imagem $y > c$.', 'success')],
    ['Espelho', 'a e 1/a', 'link', 'primary', p('$({1|a})^{x} = a^{−x}$') + call('Simetria', 'Em relação ao eixo y.', 'success')],
    ['Lei pelo gráfico', 'Dois pontos', 'check', 'growth', li(['$k = f(0)$.', '$a = f(1) ÷ f(0)$.', 'Teste com um terceiro ponto.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Dizer que a curva toca o eixo x.', 'Esquecer de inverter a desigualdade com base entre 0 e 1.', 'Queda de 15% ⇒ base 0,15 (errado: 0,85).', 'Confundir f(0) com zero.', 'Esquecer a assíntota deslocada em $a^{x} + c$.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Gráfico da exponencial <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: juros compostos, imagem, lei pelo gráfico, meia-vida e inequação.',
  final: 'Ponto (0, k), base maior ou menor que 1 e assíntota: o gráfico se lê em três passos.',
  questions: [
    { badge: 'Estilo ENEM · juros compostos', text: 'Ana aplicou R$ 3 000 a juros compostos de 20% ao ano: $M(t) = 3\\ 000 · 1,2^{t}$.', cmd: 'O montante após 3 anos, em reais, é:', opts: ['4 800', '5 000', '5 184', '5 400', '6 000'], a: 2,
      sol: '<p>$1,2^{3} = 1,728$ ⇒ $3\\ 000 · 1,728 = 5\\ 184$.</p>' },
    { badge: 'Estilo ENEM · imagem', text: 'Considere a função $g(x) = 5 · 2^{x} + 1$.', cmd: 'O conjunto imagem de $g$ é:', opts: ['$y > 0$', '$y > 1$', '$y > 5$', '$y ≥ 1$', '$ℝ$'], a: 1,
      sol: '<p>$5 · 2^{x} > 0$, logo $g(x) > 1$. A curva se aproxima de $y = 1$ sem tocar.</p>' },
    { badge: 'Estilo ENEM · lei pelo gráfico', text: 'O gráfico de $f(x) = k · a^{x}$, com $a > 0$, passa por $(0, 4)$ e $(1, 12)$.', cmd: 'O valor de $f(2)$ é:', opts: ['24', '30', '36', '48', '72'], a: 2,
      sol: '<p>$k = 4$ e $a = 3$: $f(2) = 4 · 9 = 36$.</p>' },
    { badge: 'Estilo ENEM · meia-vida', text: 'Uma amostra de 80 g de um material tem meia-vida de 2 horas: $M(t) = 80 · ({1|2})^{t ÷ 2}$.', cmd: 'A massa restante após 6 horas, em gramas, é:', opts: ['20', '5', '40', '10', '2,5'], a: 3,
      sol: '<p>$80 · ({1|2})^{3} = 80 ÷ 8 = 10$ g.</p>' },
    { badge: 'Estilo ENEM · inequação', text: 'Considere a inequação $({1|3})^{x} > {1|27}$.', cmd: 'O conjunto solução é:', opts: ['$x < 3$', '$x > 3$', '$x > −3$', '$x < −3$', '$x = 3$'], a: 0,
      sol: '<p>${1|27} = ({1|3})^{3}$. Base entre 0 e 1: a desigualdade inverte, $x < 3$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Verdadeiro ou falso: <span style="color:var(--decay);">gráficos exponenciais</span>',
  subtitle: 'Julgue cada afirmação sobre curvas exponenciais.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'A exponencial passa por (0, k), nunca toca o eixo x e é crescente ou decrescente conforme a base.',
    afirmacoes: [
      ['O gráfico de $f(x) = 3^{x}$ corta o eixo $x$ na origem.', false, 'Falsa: $3^{x} > 0$ sempre; a curva não toca o eixo $x$. Ela corta o eixo $y$ em $(0, 1)$.'],
      ['O gráfico de $f(x) = 3^{x}$ passa por $(0, 1)$.', true, 'Verdadeira: $3^{0} = 1$.'],
      ['A imagem de $f(x) = 2^{x}$ é o conjunto dos reais positivos.', true, 'Verdadeira: $2^{x}$ assume qualquer valor positivo e nunca zero ou negativo.'],
      ['A função $f(x) = ({1|2})^{x}$ é crescente.', false, 'Falsa: a base está entre 0 e 1, a função é decrescente.'],
      ['Os gráficos de $2^{x}$ e $({1|2})^{x}$ são simétricos em relação ao eixo $y$.', true, 'Verdadeira: $({1|2})^{x} = 2^{−x}$, que é $f(−x)$.'],
      ['A função $f(x) = 2^{x} + 1$ tem assíntota $y = 1$.', true, 'Verdadeira: o gráfico de $2^{x}$ foi deslocado 1 unidade para cima.'],
      ['Se $a > 1$ e $x_1 < x_2$, então $a^{x_1} > a^{x_2}$.', false, 'Falsa: com $a > 1$ a função é crescente, $a^{x_1} < a^{x_2}$.'],
      ['Em $f(x) = 5 · 2^{x}$, o valor de $f(0)$ é $5$.', true, 'Verdadeira: $5 · 2^{0} = 5$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Gráfico da exponencial: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: ponto, montante, lei, meia-vida e espelho. Digite o número pedido.',
  final: 'Você percorreu a trilha: ponto, juros, lei, decaimento e simetria.',
  problems: [
    { tag: 'Ponto', q: 'Qual o valor de $f(0)$ para $f(x) = 3^{x}$?', a: 1, ph: 'f(0)', hint: 'Qualquer base elevada a zero.', sol: '<p>$3^{0} = 1$.</p>' },
    { tag: 'Montante', q: 'Qual o montante, em reais, de R$ 3 000 a 20% ao ano, após 3 anos?', a: 5184, ph: 'reais', hint: '3000 · 1,2³ com 1,2³ = 1,728.', sol: '<p>$3\\ 000 · 1,728 = 5\\ 184$.</p>' },
    { tag: 'Lei', q: 'O gráfico de $f(x) = k · a^{x}$ passa por $(0, 2)$ e $(1, 6)$. Qual o valor de $f(3)$?', a: 54, ph: 'f(3)', hint: 'k = 2 e a = 3.', sol: '<p>$2 · 3^{3} = 54$.</p>' },
    { tag: 'Meia-vida', q: 'Uma massa de 80 g tem meia-vida de 2 h. Quantos gramas restam após 6 h?', a: 10, ph: 'g', hint: 'Três meias-vidas: 80 → 40 → 20 → …', sol: '<p>$80 → 40 → 20 → 10$.</p>' },
    { tag: 'Espelho', q: 'Se $f(x) = ({1|2})^{x}$, qual o valor de $f(−3)$?', a: 8, ph: 'f(−3)', hint: '(1/2)^(−3) = 2³.', sol: '<p>$({1|2})^{−3} = 2^{3} = 8$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Gráfico da Função Exponencial', accent: 'growth', icon: 'parabola',
  aulas: [['Aulas 6–7', 'Exponencial crescente: gráfico', 'aula-1-exponencial-crescente.html'], ['Aulas 8–9', 'Exponencial decrescente: gráfico', 'aula-2-exponencial-decrescente.html']],
  enem: 'Gráfico da exponencial no estilo ENEM', cria: 'Verdadeiro ou falso: gráficos exponenciais', pratica: 'Gráfico da exponencial: trilha de desafios'
}, pages };
