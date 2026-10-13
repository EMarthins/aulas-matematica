// Unidade v11 — Função logarítmica: definição, escalas e gráficos (aulas 25 a 30 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-logaritmica', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v11', BRAND = 'Função Logarítmica', CAP = 'Aulas 25 a 30';
const pages = [];

const GJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: definição e escalas =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 25 e 26', h1: 'Função logarítmica: <span style="color:var(--primary);">as escalas da natureza</span>',
  sub: 'Terremotos, acidez e som crescem por fatores de 10, mas nós os medimos com números pequenos. A função logarítmica é a régua dessas escalas e a inversa da exponencial.',
  badges: [['f(x) = log_a x'], ['x > 0', 'growth'], ['inversa de aˣ', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da escala à função.', [
  ['Escalas', 'Richter, pH e decibéis', 'bulb'],
  ['Definição', 'f(x) = log_a x', 'target'],
  ['Domínio e imagem', 'x > 0 e todos os reais', 'chart'],
  ['Inversa', 'logaritmo desfaz exponencial', 'link'],
  ['Aplicações', 'comparar intensidades', 'scale']
]));
a.push(objetivosSlide([
  'Definir a <strong>função logarítmica</strong> $f(x) = log_{a} x$ com $a > 0$ e $a ≠ 1$.',
  'Determinar <strong>domínio</strong> ($x > 0$) e <strong>imagem</strong> ($ℝ$), e calcular valores.',
  'Reconhecer a função logarítmica como <strong>inversa</strong> da exponencial de mesma base.',
  'Interpretar <strong>escalas logarítmicas</strong> (Richter, pH, decibéis).'
], 'Dica', 'Duas funções são inversas quando uma <strong>desfaz</strong> a outra: $2^{x}$ eleva a 2; $log_{2} x$ pergunta “2 elevado a quanto?”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Por que a natureza é logarítmica?', `
          ${lede('Muitos fenômenos variam em fatores de 10 e usam <strong>escalas logarítmicas</strong> para comparar valores gigantes com números pequenos.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Escala', 'Fórmula', 'Cada +1 ou +10 unidades…'], [['Richter', '$M = log {A|A_0}$', '+1 em $M$: amplitude ×10'], ['pH', '$pH = −log\\ H^{+}$', '−1 em pH: acidez ×10'], ['Decibéis', '$β = 10 · log {I|I_0}$', '+10 dB: intensidade ×10']])}
            ${mini('Um som sobe de 20 dB para 40 dB. A intensidade sonora foi multiplicada por:', ['2', '20', '100', '1 000'], 2, '+20 dB equivale a duas vezes +10 dB: $10 · 10 = 100$. Pela fórmula, $I ÷ I_0$ passa de $10^{2}$ a $10^{4}$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · função logarítmica', 'f(x) = log_a x', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Função logarítmica:</strong> $f: ℝ_{+}^{*} → ℝ$, $f(x) = log_{a} x$, com $a > 0$ e $a ≠ 1$.</li>
                <li><strong>Domínio:</strong> $x > 0$. <strong>Imagem:</strong> todos os reais.</li>
                <li>Pontos fixos: $f(1) = 0$ e $f(a) = 1$.</li>
                <li><strong>Inversa</strong> da exponencial: $y = log_{a} x ⇔ x = a^{y}$; os gráficos são simétricos em relação à reta $y = x$.</li>
                <li>$a > 1$: crescente. $0 < a < 1$: decrescente (veremos o gráfico na próxima aula).</li>
              </ul>
            </div>
            ${W.box('Calcule f(x) = log_a x', W.row(W.nm('h1-a', 'base a', 2, 'any'), W.nm('h1-x', 'x', 8, 'any')) + W.txt('h1-f', 'f(x) = ') + W.txt('h1-i', 'Inversa: ') + W.hint('h1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Logaritmo e exponencial', `
          ${tbl(['', 'Exponencial', 'Logarítmica'], [['Lei', '$f(x) = a^{x}$', '$f(x) = log_{a} x$'], ['Domínio', '$ℝ$', '$ℝ_{+}^{*}$ ($x > 0$)'], ['Imagem', '$ℝ_{+}^{*}$ ($y > 0$)', '$ℝ$'], ['Ponto fixo', '$(0, 1)$', '$(1, 0)$'], ['Assíntota', '$y = 0$ (eixo x)', '$x = 0$ (eixo y)']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Trocam de lugar', 'Domínio e imagem trocam: o que é entrada de uma é saída da outra. Os pontos $(x, y)$ viram $(y, x)$.', 'success')}
            ${callout('Desfazem-se', '$log_{a}(a^{x}) = x$ e $a^{log_{a} x} = x$ (para $x > 0$).', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valores de log₂', 'Para $f(x) = log_{2} x$, calcule $f(8)$, $f(1)$ e $f(1 ÷ 4)$.', [
  ['$f(8)$', '$2^{3} = 8$ ⇒ $f(8) = 3$.'],
  ['$f(1)$', '$2^{0} = 1$ ⇒ $f(1) = 0$.'],
  ['$f(1 ÷ 4)$', '$2^{−2} = {1|4}$ ⇒ $f(1 ÷ 4) = −2$.']
], '$f(8) = 3$, $f(1) = 0$ e $f(1 ÷ 4) = −2$.'));
a.push(exemplo('Exemplo resolvido', 'Domínio', 'Determine o domínio de $f(x) = log_{3}(x − 4)$ e calcule $f(7)$.', [
  ['Logaritmando positivo', '$x − 4 > 0$ ⇒ $x > 4$.'],
  ['Valor', '$f(7) = log_{3} 3 = 1$.']
], '$D = \\{x ∈ ℝ ∣ x > 4\\}$ e $f(7) = 1$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Função inversa', 'Determine a inversa de $f(x) = 2^{x}$ e calcule $f^{−1}(32)$.', [
  ['Isole x', '$y = 2^{x}$ ⇒ $x = log_{2} y$.'],
  ['Troque as variáveis', '$f^{−1}(x) = log_{2} x$.'],
  ['Valor', '$f^{−1}(32) = log_{2} 32 = 5$.']
], '$f^{−1}(x) = log_{2} x$ e $f^{−1}(32) = 5$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Decibéis', 'O nível sonoro é $β = 10 · log {I|I_0}$. Qual o nível de um som com $I = 10^{5} · I_0$? E quantas vezes mais intenso é um som de 80 dB que um de 60 dB?', [
  ['Nível', '$β = 10 · log\\ 10^{5} = 10 · 5 = 50$ dB.'],
  ['Diferença', '$80 − 60 = 20$ dB = duas vezes $+10$ dB.'],
  ['Razão', '$10^{2} = 100$.']
], 'O primeiro tem <strong>50 dB</strong>; o de 80 dB é <strong>100 vezes</strong> mais intenso que o de 60 dB.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'pH do sangue', 'O sangue humano tem $pH ≈ 7,4$. Se cair para $7,0$, em quantas vezes cresce a concentração $H^{+}$?', [
  ['Concentrações', '$H^{+} = 10^{−pH}$: $10^{−7,4}$ e $10^{−7,0}$.'],
  ['Razão', '$10^{−7} ÷ 10^{−7,4} = 10^{0,4}$.'],
  ['Valor', '$10^{0,4} ≈ 2,5$.']
], 'A acidez fica cerca de <strong>2,5 vezes</strong> maior (e não 10 vezes: uma queda de 0,4 de pH não é uma unidade inteira).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Richter', 'Um terremoto de magnitude 6 tem amplitude quantas vezes maior que a de um de magnitude 4?', [
  ['Magnitudes', '$M = log {A|A_0}$ ⇒ $A = A_0 · 10^{M}$.'],
  ['Razão', '${A_{6}|A_{4}} = 10^{6 − 4} = 10^{2}$.']
], '<strong>100 vezes</strong>.', 'growth'));

a.push(pratique('Valor', 'Se $f(x) = log_{2} x$, então $f(1 ÷ 8)$ vale:',
  ['−3', '−2', '2', '3', '8'], 0,
  '$2^{−3} = {1|8}$. <strong>Alternativa A.</strong>'));
a.push(pratique('Domínio', 'O domínio de $f(x) = log_{3}(x − 4)$ é:',
  ['$x > 3$', '$x > 4$', '$x ≥ 4$', '$x < 4$', '$x ≠ 4$'], 1,
  '$x − 4 > 0$ ⇒ $x > 4$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Decibéis', 'O nível sonoro é $β = 10 · log (I ÷ I_0)$. Quando o nível passa de 20 dB para 40 dB, a intensidade sonora é multiplicada por:',
  ['2', '10', '20', '100', '1 000'], 3,
  '$β$ aumentou 20: duas vezes +10 dB, ou seja, $10^{2} = 100$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a função logarítmica engana', [
  ['Domínio', 'Só existe para $x > 0$ (e logaritmando $> 0$ em geral).'],
  ['Escala não é linear', '+1 na escala é <strong>multiplicar por 10</strong> a grandeza, e não somar 10.'],
  ['Trocar inversa e recíproca', '$f^{−1}$ é a inversa (desfaz $f$); o recíproco $1 ÷ f$ é outra coisa.'],
  ['Variação pequena de pH', 'Uma queda de 0,4 no pH não multiplica $H^{+}$ por 10: multiplica por $10^{0,4} ≈ 2,5$.']
]));
a.push(quiz([
  { q: 'O domínio de $f(x) = log_{5} x$ é:', o: ['$ℝ$', '$x ≥ 0$', '$x > 0$', '$x ≠ 1$'], a: 2 },
  { q: '$f(x) = log_{3} x$ passa pelo ponto:', o: ['(0, 1)', '(1, 0)', '(3, 0)', '(0, 3)'], a: 1 },
  { q: 'A inversa de $f(x) = 5^{x}$ é:', o: ['$5^{−x}$', '$log_{5} x$', '$x^{5}$', '$1 ÷ 5^{x}$'], a: 1 },
  { q: 'Subir 1 unidade na escala Richter equivale a multiplicar a amplitude por:', o: ['1', '2', '10', '100'], a: 2 }
]));
a.push(fechamento([
  ['Definição', '$f(x) = log_{a} x$, $x > 0$.'],
  ['Inversa', 'Desfaz $a^{x}$: $log_{a} a^{x} = x$.'],
  ['Escalas', '+1 na escala = ×10 na grandeza.']
], 'A função logarítmica é a régua das grandezas que variam por fatores.'));

pages.push({ out: BASE + 'aula-1-definicao-e-escalas.html', html: K.deck({
  title: 'Função logarítmica: definição e escalas — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 25 e 26 · Definição e escalas', slides: a,
  extra: WJS + BIND + GJS + String.raw`
  bind(['h1-a', 'h1-x'], function(){ var a = +$('h1-a').value, x = +$('h1-x').value;
    if(![a, x].every(isFinite) || a <= 0 || a === 1 || x <= 0){ $('h1-f').textContent = '—'; $('h1-i').textContent = '—'; $('h1-h').textContent = (a <= 0 || a === 1) ? 'Base inválida: a > 0 e a ≠ 1.' : 'Domínio: x > 0.'; return; }
    var y = Math.log(x) / Math.log(a), yr = Math.round(y * 1e6) / 1e6;
    $('h1-f').textContent = 'log_' + pt(a) + ' ' + pt(x) + ' = ' + pt(yr, 4);
    $('h1-i').textContent = pt(a) + '^' + pt(yr, 4) + ' = ' + pt(Math.pow(a, yr), 4);
    $('h1-h').textContent = 'A exponencial de base ' + pt(a) + ' desfaz o logaritmo: devolve ' + pt(x) + '. ' + (a > 1 ? 'Base maior que 1: função crescente.' : 'Base entre 0 e 1: função decrescente.'); });`
}) });

// ===================== AULA 2: gráficos =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 27 a 30', h1: 'Gráfico da função logarítmica: <span style="color:var(--growth);">crescente e decrescente</span>',
  sub: 'Medir a altura de uma criança ao longo dos anos mostra uma curva que cresce cada vez mais devagar. É o jeito da função logarítmica: sobe (ou desce) cada vez menos.',
  badges: [['a > 1: crescente'], ['0 < a < 1: decrescente', 'growth'], ['assíntota x = 0', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Esboçar e ler gráficos.', [
  ['Dois tipos', 'a > 1 e 0 < a < 1', 'bulb'],
  ['Pontos-chave', '(1, 0) e (a, 1)', 'target'],
  ['Assíntota', 'o eixo y', 'chart'],
  ['Comparar valores', 'crescente mantém, decrescente inverte', 'link'],
  ['Deslocamentos', 'x − h e + k', 'scale']
]));
b.push(objetivosSlide([
  'Esboçar o gráfico de $f(x) = log_{a} x$ nos casos <strong>$a > 1$</strong> e <strong>$0 < a < 1$</strong>.',
  'Identificar o ponto <strong>$(1, 0)$</strong>, o ponto <strong>$(a, 1)$</strong> e a <strong>assíntota vertical</strong> $x = 0$.',
  'Determinar a <strong>base</strong> a partir de um ponto do gráfico.',
  'Resolver <strong>inequações logarítmicas simples</strong> usando o crescimento ou o decrescimento.'
], 'Dica', 'Calcule pontos com $x$ potência da base: para $log_{2} x$, use $x = {1|2}, 1, 2, 4$ e obtenha $y = −1, 0, 1, 2$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Um crescimento que desacelera', `
          ${lede('Uma mãe anotou a altura do filho: (1; 0,60), (2; 0,80), (3; 1,00), (4; 1,10), (5; 1,20) — idade em anos e altura em metros. A altura <strong>sempre aumenta</strong>, mas cada vez menos: é o jeito de uma função logarítmica crescente.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Idade (anos)', 'Altura (m)', 'Aumento no ano'], [['1', '0,60', '—'], ['2', '0,80', '+0,20'], ['3', '1,00', '+0,20'], ['4', '1,10', '+0,10'], ['5', '1,20', '+0,10']])}
            ${mini('Dos 1 aos 5 anos, a criança cresceu:', ['0,40 m', '0,60 m', '0,80 m', '1,20 m'], 1, '$1,20 − 0,60 = 0,60$ m. Como o valor de $y$ aumenta quando $x$ aumenta, a função é <strong>crescente</strong>.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · gráfico', 'Gráfico de y = log_a x', `
          <div class="grid2">
            <div>
              ${graf({ w: 340, h: 215, xmin: -1, xmax: 8, ymin: -4.5, ymax: 4.5, px: 1, py: 1, series: [{ pts: amostra(x => Math.log2(x), 0.0625, 8, 120), cor: 'var(--growth)' }, { pts: amostra(x => -Math.log2(x), 0.0625, 8, 120), cor: 'var(--decay)' }], marcas: [[1, 0, '(1, 0)', 8, -8]], max: '360px' })}
              <p class="hint" style="margin-top:6px;"><span style="color:var(--growth);">$log_{2} x$ (crescente)</span> e <span style="color:var(--decay);">$log_{1÷2} x$ (decrescente)</span> são simétricas em relação ao eixo $x$.</p>
            </div>
            ${W.box('Gráfico de f(x) = log_a x', W.row(W.nm('g2-a', 'base a', 2, 'any')) + W.svg('g2-s', '0 0 360 230', '380px') + W.txt('g2-v', 'Valores: ') + W.hint('g2-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Propriedades dos gráficos', `
          ${tbl(['Propriedade', 'a > 1', '0 < a < 1'], [['Monotonia', 'crescente', 'decrescente'], ['Domínio', '$x > 0$', '$x > 0$'], ['Imagem', '$ℝ$', '$ℝ$'], ['Ponto fixo', '$(1, 0)$ e $(a, 1)$', '$(1, 0)$ e $(a, 1)$'], ['Assíntota', 'eixo $y$ ($x = 0$)', 'eixo $y$ ($x = 0$)'], ['Para $0 < x < 1$', '$f(x) < 0$', '$f(x) > 0$'], ['Para $x > 1$', '$f(x) > 0$', '$f(x) < 0$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Comparar valores', '$a > 1$: $x_1 < x_2 ⇒ log_{a} x_1 < log_{a} x_2$. $0 < a < 1$: a desigualdade <strong>inverte</strong>.', 'success')}
            ${callout('Deslocar', '$log_{a}(x − h)$ move o gráfico para a direita $h$ unidades (assíntota $x = h$); $+ k$ sobe $k$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Esboço de log₂ x', 'Esboce o gráfico de $y = log_{2} x$.', [
  ['Escolha x como potências de 2', '$x = {1|2}, 1, 2, 4$.'],
  ['Calcule', '$y = −1, 0, 1, 2$.'],
  ['Una os pontos', 'Curva crescente, que passa por $(1, 0)$, com assíntota $x = 0$.']
], 'Pontos: $({1|2}, −1)$, $(1, 0)$, $(2, 1)$ e $(4, 2)$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Base pelo gráfico', 'O gráfico de $f(x) = log_{a} x$ passa por $(4, 2)$. Determine $a$ e $f(8)$.', [
  ['Definição', '$log_{a} 4 = 2$ ⇒ $a^{2} = 4$ ⇒ $a = 2$ (base positiva).'],
  ['Valor', '$f(8) = log_{2} 8 = 3$.']
], '$a = 2$ e $f(8) = 3$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Decrescente', 'Esboce $y = log_{1÷2} x$.', [
  ['Pontos', '$x = {1|4}, {1|2}, 1, 2, 4$.'],
  ['Valores', '$y = 2, 1, 0, −1, −2$.'],
  ['Leitura', 'Curva decrescente, por $(1, 0)$, com assíntota $x = 0$.']
], 'É o gráfico de $log_{2} x$ refletido no eixo $x$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Comparar logaritmos', 'Compare $log_{2} 5$ com $log_{2} 3$ e $log_{1÷2} 5$ com $log_{1÷2} 3$.', [
  ['Base 2 (crescente)', '$5 > 3$ ⇒ $log_{2} 5 > log_{2} 3$.'],
  ['Base 1/2 (decrescente)', '$5 > 3$ ⇒ $log_{1÷2} 5 < log_{1÷2} 3$ (inverte).']
], '$log_{2} 5 > log_{2} 3$ e $log_{1÷2} 5 < log_{1÷2} 3$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Deslocamento', 'Para $g(x) = log_{2}(x − 1) + 3$, dê o domínio, a assíntota e o valor de $g(2)$.', [
  ['Domínio', '$x − 1 > 0$ ⇒ $x > 1$.'],
  ['Assíntota', '$x = 1$ (o gráfico foi deslocado 1 unidade para a direita).'],
  ['Valor', '$g(2) = log_{2} 1 + 3 = 0 + 3 = 3$.']
], '$D = \\{x ∈ ℝ ∣ x > 1\\}$, assíntota $x = 1$ e $g(2) = 3$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Inequação logarítmica', 'Resolva $log_{2} x > 3$ e $log_{1÷2} x > 3$.', [
  ['Primeira (crescente)', '$log_{2} x > 3 = log_{2} 8$ ⇒ $x > 8$.'],
  ['Segunda (decrescente)', '$log_{1÷2} x > 3 = log_{1÷2}({1|8})$ ⇒ a desigualdade inverte: $x < {1|8}$.'],
  ['Domínio', 'Em ambas, $x > 0$: segunda ⇒ $0 < x < {1|8}$.']
], '$x > 8$ e $0 < x < {1|8}$.', 'growth'));

b.push(pratique('Ponto do gráfico', 'O gráfico de $f(x) = log_{a} x$ passa por $(4, 2)$. A base $a$ vale:',
  ['2', '4', '8', '16', '${1|2}$'], 0,
  '$a^{2} = 4$ ⇒ $a = 2$. <strong>Alternativa A.</strong>', '', 'growth'));
b.push(pratique('Comparar', 'Sobre $log_{1÷2} 5$ e $log_{1÷2} 3$, é correto afirmar que:',
  ['$log_{1÷2} 5 > log_{1÷2} 3$', 'são iguais', '$log_{1÷2} 5 < log_{1÷2} 3$', 'não são comparáveis', 'ambos são positivos'], 2,
  'Base entre 0 e 1: função decrescente. Como $5 > 3$, $log_{1÷2} 5 < log_{1÷2} 3$ (ambos são negativos). <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Gráfico crescente', 'O gráfico de $f(x) = log_{a} x$ passa por $(1, 0)$ e $(4, 2)$. O valor de $f(8)$ é:',
  ['3', '2', '4', '6', '8'], 0,
  '$a^{2} = 4$ ⇒ $a = 2$; $f(8) = log_{2} 8 = 3$. <strong>Alternativa A.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o gráfico logarítmico engana', [
  ['Confundir assíntotas', 'A assíntota da log é o <strong>eixo y</strong> ($x = 0$); a da exponencial é o eixo $x$.'],
  ['Cruzar o eixo y', 'O gráfico <strong>nunca</strong> cruza o eixo $y$ (não há $f(0)$); cruza o eixo $x$ em $(1, 0)$.'],
  ['Inverter a desigualdade só às vezes', 'Em inequações, base $< 1$ inverte; base $> 1$ mantém.'],
  ['Esquecer o domínio', 'Em $log_{1÷2} x > 3$, além de $x < 1 ÷ 8$ é preciso $x > 0$.']
]));
b.push(quiz([
  { q: 'O gráfico de $y = log_{a} x$ sempre passa por:', o: ['(0, 1)', '(1, 0)', '(0, 0)', '(a, 0)'], a: 1 },
  { q: 'A assíntota de $y = log_{2} x$ é:', o: ['$y = 0$', '$x = 0$', '$y = x$', '$x = 1$'], a: 1 },
  { q: 'Se $0 < a < 1$, a função $log_{a} x$ é:', o: ['crescente', 'decrescente', 'constante', 'periódica'], a: 1 },
  { q: 'O gráfico de $log_{2}(x − 3)$ tem assíntota:', o: ['$x = 0$', '$x = 3$', '$y = 3$', '$x = −3$'], a: 1 }
]));
b.push(fechamento([
  ['Pontos fixos', '$(1, 0)$ e $(a, 1)$.'],
  ['Monotonia', '$a > 1$ cresce; $0 < a < 1$ decresce.'],
  ['Assíntota', 'O eixo $y$, no domínio $x > 0$.']
], 'Três pontos, uma assíntota e o sentido da curva: o esboço completo da logarítmica.'));

pages.push({ out: BASE + 'aula-2-graficos-crescente-e-decrescente.html', html: K.deck({
  title: 'Gráfico da função logarítmica — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 27 a 30 · Gráficos', slides: b,
  extra: WJS + BIND + PL + GJS + String.raw`
  bind(['g2-a'], function(){ var a = +$('g2-a').value, svg = $('g2-s');
    if(!isFinite(a) || a <= 0 || a === 1){ svg.innerHTML = ''; $('g2-v').textContent = 'base inválida: a > 0 e a ≠ 1'; $('g2-h').textContent = ''; return; }
    var f = function(x){ return Math.log(x) / Math.log(a); }, xmin = -1, xmax = 8, ymin = -4.5, ymax = 4.5, pts = [], i;
    var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, 1, 1);
    for(i = 0; i <= 400; i++){ var x = 0.02 + (xmax - 0.02) * i / 400, y = f(x); if(y >= ymin && y <= ymax) pts.push([x, y]); }
    linha(svg, P, pts, a > 1 ? 'var(--growth)' : 'var(--decay)'); bola(svg, P, 1, 0, false, 'var(--primary)'); if(a <= xmax) bola(svg, P, a, 1, false, 'var(--growth)');
    $('g2-v').textContent = 'f(1/2) = ' + pt(f(0.5), 3) + ' · f(1) = 0 · f(2) = ' + pt(f(2), 3) + ' · f(4) = ' + pt(f(4), 3);
    $('g2-h').textContent = (a > 1 ? 'a > 1: crescente' : '0 < a < 1: decrescente') + '. Passa por (1, 0) e (' + pt(a) + ', 1); a assíntota é o eixo y (x = 0).'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função logarítmica: <span>definição, escalas e gráficos</span>',
  lede: 'f(x) = log_a x é a inversa da exponencial: domínio x > 0, imagem real, passa por (1, 0), tem assíntota x = 0 e cresce (a > 1) ou decresce (0 < a < 1).',
  badges: ['f(x) = log_a x', 'inversa de aˣ', 'assíntota x = 0'],
  curve: 'M20,160 C 100,110 180,70 260,50 C 340,34 420,26 480,22',
  sections: [
    ['Definição', 'x > 0', 'chart', 'primary', p('$f(x) = log_{a} x$, $a > 0$ e $a ≠ 1$.') + call('Exemplo', '$log_{2} 8 = 3$.', 'success')],
    ['Inversa', 'Troca x e y', 'target', 'growth', p('$f^{−1}(x) = log_{a} x$ quando $f(x) = a^{x}$.') + call('Simetria', 'Gráficos simétricos em relação a $y = x$.', 'success')],
    ['Escalas', 'Richter, pH, dB', 'scale', 'decay', li(['+1 Richter: ×10.', '−1 pH: acidez ×10.', '+10 dB: intensidade ×10.'])],
    ['Crescente', 'a > 1', 'up', 'success', p('$x_1 < x_2 ⇒ log_{a} x_1 < log_{a} x_2$') + call('Ponto', '$(1, 0)$ e $(a, 1)$.', 'success')],
    ['Decrescente', '0 < a < 1', 'link', 'primary', p('$x_1 < x_2 ⇒ log_{a} x_1 > log_{a} x_2$') + call('Cuidado', 'A desigualdade inverte.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['$x > 0$?', 'Base maior ou menor que 1?', 'Ponto $(1, 0)$ no gráfico?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir assíntotas da log e da exponencial.', 'Esquecer $x > 0$.', 'Não inverter a desigualdade com base < 1.', 'Tratar a escala como linear.', 'Dizer que o gráfico cruza o eixo y.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Função logarítmica <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: valor, domínio, base pelo gráfico, decibéis e comparação.',
  final: 'Domínio $x > 0$, ponto $(1, 0)$ e o sentido da curva decidem quase tudo.',
  questions: [
    { badge: 'Estilo ENEM · valor', text: 'Considere a função $f(x) = log_{2} x$.', cmd: 'O valor de $f(1 ÷ 8)$ é:', opts: ['−3', '−2', '2', '3', '${1|8}$'], a: 0,
      sol: '<p>$2^{−3} = {1|8}$ ⇒ $f(1 ÷ 8) = −3$.</p>' },
    { badge: 'Estilo ENEM · domínio', text: 'Considere a função $f(x) = log_{3}(x − 4)$.', cmd: 'O domínio de $f$ é:', opts: ['$x > 3$', '$x > 4$', '$x ≥ 4$', '$x < 4$', '$x ≠ 4$'], a: 1,
      sol: '<p>$x − 4 > 0$ ⇒ $x > 4$.</p>' },
    { badge: 'Estilo ENEM · base pelo gráfico', text: 'O gráfico de $f(x) = log_{a} x$ passa por $(1, 0)$ e $(4, 2)$.', cmd: 'O valor de $f(8)$ é:', opts: ['3', '2', '4', '6', '8'], a: 0,
      sol: '<p>$a^{2} = 4$ ⇒ $a = 2$ e $f(8) = log_{2} 8 = 3$.</p>' },
    { badge: 'Estilo ENEM · decibéis', text: 'O nível sonoro é $β = 10 · log (I ÷ I_0)$. Um som passa de 20 dB para 40 dB.', cmd: 'A intensidade sonora foi multiplicada por:', opts: ['2', '10', '20', '100', '1 000'], a: 3,
      sol: '<p>+20 dB ⇒ $10^{2} = 100$.</p>' },
    { badge: 'Estilo ENEM · comparação', text: 'Considere os números $log_{1÷2} 5$ e $log_{1÷2} 3$.', cmd: 'Qual afirmação é correta?', opts: ['$log_{1÷2} 5 > log_{1÷2} 3$', 'são iguais', '$log_{1÷2} 5 < log_{1÷2} 3$', 'não são comparáveis', 'ambos são positivos'], a: 2,
      sol: '<p>Base entre 0 e 1: função decrescente; $5 > 3$ ⇒ $log_{1÷2} 5 < log_{1÷2} 3$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique a <span style="color:var(--growth);">função</span>',
  subtitle: 'Logarítmica crescente, logarítmica decrescente ou outra coisa?',
  tpl: cClassificar({
    cats: ['Logarítmica crescente', 'Logarítmica decrescente', 'Não é logarítmica'],
    intro: 'Cada cartão traz uma função. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Variável no logaritmando e base positiva diferente de 1; depois compare a base com 1.',
    itens: [
      ['$f(x) = log_{2} x$', 0, 'Base $2 > 1$.'],
      ['$f(x) = log_{1÷2} x$', 1, 'Base entre 0 e 1.'],
      ['$f(x) = log_{10} x$', 0, 'Base $10 > 1$: crescente.'],
      ['$f(x) = log_{0,3} x$', 1, 'Base $0,3$ entre 0 e 1.'],
      ['$f(x) = 2^{x}$', 2, 'É a exponencial (a variável está no expoente).'],
      ['$f(x) = x^{2}$', 2, 'Função quadrática.'],
      ['$f(x) = ln\\ x$ (base $e ≈ 2,718$)', 0, 'Base $e > 1$: crescente.'],
      ['$f(x) = log_{1} x$', 2, 'Base 1 não define logaritmo.'],
      ['$f(x) = log_{1÷3} x$', 1, 'Base $1 ÷ 3$ entre 0 e 1.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Função logarítmica: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valor, domínio, base, decibéis e função decrescente. Digite o número pedido.',
  final: 'Você percorreu a trilha: valor, domínio, base, escala e decrescimento.',
  problems: [
    { tag: 'Valor', q: 'Se $f(x) = log_{2} x$, qual o valor de $f(32)$?', a: 5, ph: 'f(32)', hint: '2⁵ = 32.', sol: '<p>$5$.</p>' },
    { tag: 'Domínio', q: 'Qual o <strong>menor inteiro</strong> do domínio de $f(x) = log_{3}(x − 4)$?', a: 5, ph: 'x', hint: 'x > 4.', sol: '<p>$5$.</p>' },
    { tag: 'Base', q: 'O gráfico de $f(x) = log_{a} x$ passa por $(4, 2)$. Qual o valor de $a$?', a: 2, ph: 'a', hint: 'a² = 4 com a > 0.', sol: '<p>$a = 2$.</p>' },
    { tag: 'Decibéis', q: 'Qual o nível, em dB, de um som com $I = 10^{5} · I_0$ ($β = 10 · log (I ÷ I_0)$)?', a: 50, ph: 'dB', hint: '10 · 5.', sol: '<p>$50$ dB.</p>' },
    { tag: 'Decrescente', q: 'Se $f(x) = log_{1÷2} x$, qual o valor de $f(8)$?', a: -3, ph: 'f(8)', hint: '(1/2)^y = 8.', sol: '<p>$({1|2})^{−3} = 8$ ⇒ $f(8) = −3$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Logarítmica', accent: 'growth', icon: 'wave',
  aulas: [['Aulas 25–26', 'Função logarítmica: definição e escalas', 'aula-1-definicao-e-escalas.html'], ['Aulas 27–30', 'Função logarítmica: gráficos crescente e decrescente', 'aula-2-graficos-crescente-e-decrescente.html']],
  enem: 'Função logarítmica no estilo ENEM', cria: 'Classifique a função', pratica: 'Função logarítmica: trilha de desafios'
}, pages };
