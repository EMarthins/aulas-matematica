// Unidade 9 — Gráfico da função afim e zero da função (aulas 24 a 26)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { graf, mg2, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'grafico-e-zero-da-funcao-afim', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u09', BRAND = 'Gráfico e Zero da Função Afim', CAP = 'Aulas 24 a 26';
const pages = [];

const LEI = String.raw`
  function lei(a, b){ var s = 'y = '; if(Math.abs(a) < 1e-12) return s + pt(b); s += a === 1 ? '' : a === -1 ? '−' : pt(a); s += 'x'; if(b > 1e-12) s += ' + ' + pt(b); else if(b < -1e-12) s += ' − ' + pt(-b); return s; }
`;

// ===================== AULA 1: gráfico da função afim =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 24', h1: 'O gráfico da função afim: <span style="color:var(--primary);">uma reta definida por dois pontos</span>',
  sub: 'Duas contas e dois pontinhos: é tudo o que se precisa para desenhar o gráfico de y = ax + b e, no caminho inverso, para descobrir a lei de uma reta desenhada.',
  badges: [['reta'], ['2 pontos bastam', 'growth'], ['linear: pela origem', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do cálculo ao desenho e do desenho à lei.', [
  ['Esboçar a reta', 'tabela com dois valores de x', 'bulb'],
  ['Casos especiais', 'linear (pela origem) e constante (horizontal)', 'link'],
  ['Ler a reta', 'dois pontos do desenho viram a lei', 'chart'],
  ['Pertence à reta?', 'substituir e comparar', 'target'],
  ['Problemas', 'salário, custos e sistemas', 'scale']
]));
a.push(objetivosSlide([
  'Construir o gráfico de $y = ax + b$ a partir de <strong>dois pontos</strong>.',
  'Reconhecer os gráficos da <strong>função linear</strong> e da <strong>função constante</strong>.',
  'Encontrar a <strong>lei</strong> a partir do gráfico e dizer se um ponto pertence a ele.',
  'Relacionar os coeficientes $a$ e $b$ ao <strong>desenho</strong>.'
], 'Dica', 'Prefira os valores de $x$ que facilitam a conta: <strong>$x = 0$</strong> (dá o $b$) e outro valor pequeno. Marque, trace a reta com régua e estenda além dos pontos.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Dois pontos, uma reta', `
          ${lede('Por dois pontos distintos passa <strong>uma única reta</strong>. Como o gráfico de toda função afim definida em $ℝ$ é uma reta, basta calcular a função em <strong>dois valores</strong> de $x$, marcar os pontos e traçar a reta.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Para esboçar $y = 3x − 1$ marcamos $x = 0$ e $x = 2$. Os pontos são:', ['(0, −1) e (2, 5)', '(0, 1) e (2, 7)', '(0, −1) e (2, 6)', '(0, 3) e (2, −1)'], 0, '$x = 0 → y = −1$; $x = 2 → y = 6 − 1 = 5$. Pontos: $(0, −1)$ e $(2, 5)$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Gráfico de $y = ax + b$: <strong>reta</strong> que corta o eixo $y$ em $(0, b)$ e é crescente se $a > 0$, decrescente se $a < 0$.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Explore · reta interativa', 'Mude a e b e veja a reta', `
          <div class="grid2">
            ${W.box('Gráfico de y = ax + b', W.row(W.nm('g1-a', 'a', 2, 'any'), W.nm('g1-b', 'b', -3, 'any')) + W.svg('g1-s', '0 0 360 230', '380px') + W.txt('g1-l', 'Lei: ') + W.txt('g1-z', 'Zero e corte em y: ') + W.hint('g1-h'))}
            <div>
              ${callout('O que observar', '<strong>b</strong> desloca a reta para cima ou para baixo: é onde ela corta o eixo $y$. <strong>a</strong> muda a inclinação: positivo sobe, negativo desce, zero deixa a reta horizontal.', 'success')}
              ${callout('Teste', 'Coloque $a = 0$: a função vira constante e o gráfico é uma reta <strong>horizontal</strong>. Coloque $b = 0$: o gráfico passa pela origem (função linear).', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Esboce o gráfico de y = 2x − 3', 'Construa o gráfico de $y = 2x − 3$.', [
  ['Monte a tabela com dois valores de x', '$x = 0 → y = −3$ · $x = 2 → y = 1$.'],
  ['Marque os pontos', '$(0, −3)$ e $(2, 1)$.'],
  ['Trace a reta', 'Una os pontos e prolongue nos dois sentidos: a reta é infinita.']
], 'Reta crescente ($a = 2$) que corta o eixo $y$ em $−3$.'));
a.push(sl('Figura', 'A reta y = 2x − 3', `
          <div class="grid2">
            ${graf({ xmin: -3, xmax: 5, ymin: -5, ymax: 5, px: 1, py: 1, series: [{ pts: [[-1, -5], [4, 5]], bolas: [] }], marcas: [[0, -3, '(0, −3)', 10, 4], [2, 1, '(2, 1)', 10, 4]], max: '380px' })}
            <div>
              ${callout('Qualquer par de x serve', 'Se outro colega escolher $x = 1$ e $x = 3$, os pontos serão outros, mas <strong>a reta é a mesma</strong>.', 'success')}
              ${callout('Caso linear', 'Em $y = 5x$ o ponto $(0, 0)$ já é um dos pontos; basta achar mais um, como $(1, 5)$.', 'success')}
              ${callout('Caso constante', '$y = 4$ é uma reta <strong>horizontal</strong> pelo ponto $(0, 4)$. Não é função afim (porque $a = 0$), mas o gráfico também é reta.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Da reta à lei', 'Uma reta passa pelos pontos $(−1, 6)$ e $(3, −2)$. Determine sua lei.', [
  ['Taxa', '$a = {−2 − 6|3 − (−1)} = {−8|4} = −2$ (reta decrescente).'],
  ['Valor inicial', '$6 = −2 · (−1) + b$ ⇒ $b = 4$.'],
  ['Confira com o outro ponto', '$−2 · 3 + 4 = −2$ ✓.']
], '$y = −2x + 4$.', 'growth'));

a.push(pratique('O ponto da reta', 'A função afim $f$ tem $f(1) = 4$ e $f(3) = 10$. Qual dos pontos abaixo pertence ao gráfico de $f$?',
  ['(0, 2)', '(2, 8)', '(4, 12)', '(−1, −3)', '(5, 16)'], 4,
  '$a = {10 − 4|3 − 1} = 3$; $4 = 3 + b$ ⇒ $b = 1$; $f(x) = 3x + 1$. Teste: $f(5) = 16$ ✓. Os outros: $f(0) = 1$, $f(2) = 7$, $f(4) = 13$, $f(−1) = −2$. <strong>Alternativa E.</strong>'));
a.push(pratique('Lei pelo desenho', 'O gráfico abaixo é uma reta que passa por $(0, 2)$ e $(2, −2)$.' + graf({ xmin: -2, xmax: 4, ymin: -3, ymax: 4, px: 1, py: 1, series: [{ pts: [[-1, 4], [3, -4]] }], marcas: [[0, 2, '(0, 2)', 10, -6], [2, -2, '(2, −2)', 8, -8]], max: '300px' }) + 'Sua lei de formação é:',
  ['f(x) = −2x + 2', 'f(x) = 2x + 2', 'f(x) = −x + 2', 'f(x) = −2x − 2', 'f(x) = 2x − 2'], 0,
  'Corta o eixo $y$ em $(0, 2)$: $b = 2$. De $x = 0$ a $x = 2$, $y$ vai de $2$ a $−2$: $a = −4 ÷ 2 = −2$. Lei: $f(x) = −2x + 2$. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(estiloEnem('Salário de vendedor', 'O salário mensal $y$ de um vendedor é a soma de um valor fixo e de uma comissão por venda $x$. O gráfico é uma reta que passa por $(0, 800)$ e $(20, 1\\ 300)$. A lei do salário é:',
  ['y = 800 − 25x', 'y = 25 + 800x', 'y = 800 + 25x', 'y = 1 300 + 25x', 'y = 800x + 25'], 2,
  'Valor fixo: $b = 800$. Comissão: $a = {1\\ 300 − 800|20 − 0} = 25$ por venda. Lei: $y = 800 + 25x$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o gráfico engana', [
  ['Marcar pontos sem testar', 'Confira um terceiro ponto: se estiver na reta, o desenho está certo.'],
  ['Limitar a reta aos pontos', 'A reta é <strong>infinita</strong>: prolongue nos dois sentidos.'],
  ['Trocar x e y', 'Em $(2, 1)$, $2$ é $x$ (horizontal) e $1$ é $y$ (vertical).'],
  ['Achar que constante é afim', 'Em $y = 4$, $a = 0$: gráfico horizontal, mas fora da definição de afim ($a ≠ 0$).']
]));
a.push(quiz([
  { q: 'O gráfico de uma função afim em $ℝ$ é:', o: ['uma reta', 'uma parábola', 'uma semicircunferência', 'um ponto'], a: 0 },
  { q: 'O gráfico de $y = 4x$ passa pelo ponto:', o: ['(0, 4)', '(1, 4)', '(4, 1)', '(0, 1)'], a: 1 },
  { q: 'A reta $y = −x + 1$ é:', o: ['crescente', 'decrescente', 'horizontal', 'vertical'], a: 1 },
  { q: 'O gráfico de $y = 7$ é uma reta:', o: ['horizontal', 'vertical', 'crescente', 'decrescente'], a: 0 }
]));
a.push(fechamento([
  ['Esboço', 'Dois pontos (x = 0 e mais um) e trace a reta.'],
  ['Leitura', 'Dois pontos da reta dão a e b.'],
  ['Pertinência', 'Substitua o x do ponto e compare com o y.']
], 'Reta definida por dois pontos: calcule, marque e confira.'));

pages.push({ out: BASE + 'aula-1-grafico-da-funcao-afim.html', html: K.deck({
  title: 'Gráfico da função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 24 · Gráfico da função afim', slides: a,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['g1-a', 'g1-b'], function(){ var a = +$('g1-a').value, b = +$('g1-b').value; if(!isFinite(a) || !isFinite(b)){ $('g1-l').textContent = '—'; return; }
    var P = plano2($('g1-s'), -6, 6, -8, 8, 360, 230, 2, 2), ya = a * -6 + b, yb = a * 6 + b;
    linha($('g1-s'), P, [[-6, Math.max(-8, Math.min(8, ya))], [6, Math.max(-8, Math.min(8, yb))]], 'var(--primary)');
    if(a !== 0){ var cx = (8 - b) / a, cx2 = (-8 - b) / a, p1 = [Math.max(-6, Math.min(6, Math.min(cx, cx2))), 0], p2 = [Math.max(-6, Math.min(6, Math.max(cx, cx2))), 0]; $('g1-s').lastChild.remove(); linha($('g1-s'), P, [[p1[0], a * p1[0] + b], [p2[0], a * p2[0] + b]], 'var(--primary)'); }
    if(Math.abs(b) <= 8) bola($('g1-s'), P, 0, b, false, 'var(--decay)');
    var z = a === 0 ? null : -b / a; if(z !== null && Math.abs(z) <= 6) bola($('g1-s'), P, z, 0, false, 'var(--growth)');
    $('g1-l').textContent = lei(a, b) + (a === 0 ? '  (constante: não é afim)' : a > 0 ? '  (crescente)' : '  (decrescente)');
    $('g1-z').textContent = (a === 0 ? 'sem zero (ou infinitos)' : 'zero em x = ' + pt(z, 3)) + ' · corta y em (0; ' + pt(b) + ')';
    $('g1-h').textContent = b === 0 && a !== 0 ? 'b = 0: função linear, reta pela origem.' : 'Ponto laranja: (0, b). Ponto verde: zero da função.'; });`
}) });

// ===================== AULA 2: zero da função =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 25 e 26', h1: 'O zero da função afim: <span style="color:var(--growth);">onde a reta encontra o eixo x</span>',
  sub: 'O zero é o valor de x que faz y valer 0. Em contextos, responde: quando o tanque esvazia? Quantas unidades pagam o custo? Quando o bem perde todo o valor?',
  badges: [['f(x) = 0'], ['x = −b/a', 'growth'], ['(0, b) no eixo y', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Os dois pontos especiais da reta.', [
  ['Zero da função', 'o valor de x que anula f', 'bulb'],
  ['Corte no eixo y', 'o ponto (0, b)', 'target'],
  ['Em contexto', 'tanque que esvazia, custo e depreciação', 'chart'],
  ['Escalas de temperatura', 'quando duas escalas coincidem', 'link'],
  ['Problemas', 'resolver f(x) = c', 'scale']
]));
b.push(objetivosSlide([
  'Calcular o <strong>zero</strong> de uma função afim: $x = −b ÷ a$.',
  'Localizar os pontos em que a reta corta os <strong>dois eixos</strong>.',
  'Resolver problemas que pedem “quando $f(x)$ vale $c$”.',
  'Ler o zero no <strong>contexto</strong> (tempo, quantidade, temperatura).'
], 'Dica', 'Para achar o zero, escreva <strong>$f(x) = 0$</strong> e resolva a equação do 1º grau. Para achar o corte em $y$, calcule <strong>$f(0)$</strong>.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O marco zero da cidade', `
          ${lede('O <strong>marco zero</strong> é o ponto de partida da numeração das ruas. Na função, o <strong>zero</strong> é o ponto de partida do estudo do sinal: o valor de $x$ em que $y$ passa por $0$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O zero da função $f(x) = 2x − 8$ é:', ['−4', '4', '8', '−8'], 1, '$2x − 8 = 0$ ⇒ $2x = 8$ ⇒ $x = 4$. O gráfico corta o eixo $x$ no ponto $(4, 0)$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em $y = ax + b$: zero $x = −{b|a}$ (ponto $(−b/a, 0)$) e corte em $y$: ponto $(0, b)$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · pontos especiais', 'Onde a reta encontra os eixos', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Zero da função</strong>: valor de $x$ com $f(x) = 0$. Resolva $ax + b = 0$ ⇒ $x = −{b|a}$.</li>
                <li>O gráfico corta o <strong>eixo x</strong> em $(−b/a, 0)$.</li>
                <li>O gráfico corta o <strong>eixo y</strong> em $(0, b)$.</li>
                <li>Para saber <strong>quando $f(x) = c$</strong>: resolva $ax + b = c$.</li>
                <li>Se $a = 0$, não há zero (ou todos os $x$ são zeros, quando $b = 0$): não é afim.</li>
              </ul>
            </div>
            ${W.box('Depreciação linear', W.row(W.nm('z1-v', 'Valor inicial (reais)', 5000, 'any'), W.nm('z1-t', 'Vida útil (anos)', 5, 'any')) + W.nm('z1-x', 'Idade (anos)', 2, 'any') + W.svg('z1-s', '0 0 360 220', '380px') + W.txt('z1-l', 'Lei: ') + W.txt('z1-r', 'Valor na idade escolhida: ') + W.hint('z1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Zero e corte em y', 'Dada $f(x) = −2x + 8$, determine o zero da função e o ponto em que o gráfico corta o eixo $y$.', [
  ['Zero: resolva f(x) = 0', '$−2x + 8 = 0$ ⇒ $2x = 8$ ⇒ $x = 4$. Ponto $(4, 0)$.'],
  ['Corte em y: calcule f(0)', '$f(0) = −2 · 0 + 8 = 8$. Ponto $(0, 8)$.'],
  ['Compare com a lei', '$b = 8$ confirma o corte em $(0, 8)$.']
], 'Zero em $x = 4$ e corte em $y$ no ponto $(0, 8)$.', 'growth'));
b.push(sl('Figura', 'A reta y = −2x + 8', `
          <div class="grid2">
            ${graf({ xmin: -2, xmax: 6, ymin: -2, ymax: 10, px: 1, py: 2, series: [{ pts: [[-1, 10], [5, -2]] }], marcas: [[0, 8, '(0, 8)', 10, -2], [4, 0, '(4, 0)', 6, -10]], max: '380px' })}
            <div>
              ${callout('Leitura do desenho', 'A reta é decrescente ($a = −2$), corta o eixo $y$ em $8$ e o eixo $x$ em $4$.', 'success')}
              ${callout('Conferência', 'Em $x = 4$: $−2 · 4 + 8 = 0$ ✓.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Custo de produção', 'O custo de fabricar $x$ peças é $C(x) = 40x + 2\\ 000$ (reais). Qual é o custo com 10 peças e quantas peças custam 3 200 reais?', [
  ['Custo com 10 peças', '$C(10) = 40 · 10 + 2\\ 000 = 2\\ 400$ reais.'],
  ['Quando C = 3 200?', '$40x + 2\\ 000 = 3\\ 200$ ⇒ $40x = 1\\ 200$ ⇒ $x = 30$.'],
  ['Interprete', 'O custo fixo de 2 000 reais é pago mesmo sem produção ($C(0) = 2\\ 000$).']
], '10 peças custam 2 400 reais; 3 200 reais pagam 30 peças. Como $x$ é quantidade, o gráfico é formado por <strong>pontos isolados</strong> ($x ∈ \\{0, 1, 2, ...\\}$).', 'growth'));

b.push(pratique('Zero da função', 'O zero da função $f(x) = 3x − 12$ é:',
  ['−4', '4', '12', '−12', '0,25'], 1,
  '$3x − 12 = 0$ ⇒ $x = 4$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('A piscina que esvazia', 'O volume de água de uma piscina durante o esvaziamento é $V = 12\\ 000 − 400t$ (litros, $t$ em minutos). Ela fica vazia no instante:',
  ['20 min', '25 min', '30 min', '40 min', '300 min'], 2,
  'Vazia: $V = 0$. $12\\ 000 − 400t = 0$ ⇒ $t = 30$ minutos. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Celsius e Fahrenheit', 'A relação entre as escalas é $F = 1,8C + 32$. A temperatura em que as duas escalas indicam o <strong>mesmo número</strong> é:',
  ['−40', '−32', '0', '32', '40'], 0,
  'Mesmo número: $F = C$. $C = 1,8C + 32$ ⇒ $−0,8C = 32$ ⇒ $C = −40$. <strong>Alternativa A.</strong> (Em −40 °C e −40 °F a leitura é igual.)'));

b.push(armadilhas('Cuidados', 'Onde o zero escorrega', [
  ['Trocar o sinal', '$ax + b = 0$ dá $x = −b ÷ a$. Em $2x − 8 = 0$: $x = +4$, não $−4$.'],
  ['Confundir zero com corte em y', 'Zero: $y = 0$ (eixo $x$). Corte em $y$: $x = 0$.'],
  ['Esquecer o domínio no contexto', 'Quantidade de peças é inteira e não negativa; tempo não é negativo.'],
  ['Não interpretar', 'O zero tem unidade de $x$: minutos, anos, peças. Escreva a resposta com ela.']
]));
b.push(quiz([
  { q: 'O zero de $f(x) = 5x − 20$ é:', o: ['−4', '4', '20', '−20'], a: 1 },
  { q: 'O gráfico de $y = −2x + 6$ corta o eixo $y$ em:', o: ['(0, 6)', '(6, 0)', '(0, −2)', '(3, 0)'], a: 0 },
  { q: 'Se $C(x) = 40x + 2\\ 000$, o custo fixo é:', o: ['40', '2 000', '2 040', '80 000'], a: 1 },
  { q: 'O gráfico de $y = 3x − 6$ corta o eixo $x$ em:', o: ['(−2, 0)', '(2, 0)', '(0, −6)', '(6, 0)'], a: 1 }
]));
b.push(fechamento([
  ['Zero', 'f(x) = 0 ⇒ x = −b ÷ a; ponto (−b/a, 0).'],
  ['Corte em y', 'f(0) = b; ponto (0, b).'],
  ['Contexto', 'Resolva f(x) = c e interprete com a unidade.']
], 'Zero é “quando”; corte em y é “quanto no início”.'));

pages.push({ out: BASE + 'aula-2-zero-da-funcao-afim.html', html: K.deck({
  title: 'Zero da função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 25 e 26 · Zero da função afim', slides: b,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['z1-v', 'z1-t', 'z1-x'], function(){ var V = +$('z1-v').value, T = +$('z1-t').value, x = +$('z1-x').value;
    if(![V, T, x].every(isFinite) || V <= 0 || T <= 0){ $('z1-l').textContent = '—'; $('z1-r').textContent = ''; return; }
    var a = -V / T, X = Math.max(T * 1.2, x), P = plano2($('z1-s'), 0, X, 0, V * 1.1, 360, 220, Math.max(1, Math.round(X / 6)), V / 5);
    linha($('z1-s'), P, [[0, V], [T, 0]], 'var(--primary)'); bola($('z1-s'), P, 0, V, false, 'var(--decay)'); bola($('z1-s'), P, T, 0, false, 'var(--growth)');
    if(x <= T) bola($('z1-s'), P, x, V + a * x, false, 'var(--danger)');
    $('z1-l').textContent = 'V(t) = ' + pt(a) + ' · t + ' + pt(V);
    $('z1-r').textContent = x > T ? 'depois de ' + pt(T) + ' anos o bem já perdeu todo o valor (0)' : 'reais ' + pt(V + a * x, 2);
    $('z1-h').textContent = 'O zero da função é t = ' + pt(T) + ' anos: o valor chega a zero. A perda é de ' + pt(-a) + ' reais por ano.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Gráfico e zero da função afim: <span>reta, eixos e contexto</span>',
  lede: 'Como desenhar a reta com dois pontos, ler a lei no gráfico, achar o zero e os cortes nos eixos e usar tudo isso em problemas.',
  badges: ['reta por 2 pontos', 'zero: x = −b/a', 'corte em y: (0, b)'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Esboço', 'Dois pontos', 'chart', 'primary', p('Tabela com $x = 0$ e outro valor; marque; trace a reta infinita.') + call('Exemplo', 'y = 2x − 3: (0, −3) e (2, 1).', 'success')],
    ['Casos especiais', 'Linear e constante', 'link', 'growth', li(['Linear: passa por (0, 0).', 'Constante y = c: horizontal.', 'Constante não é afim (a = 0).'])],
    ['Lei pelo gráfico', 'Dois pontos lidos', 'target', 'decay', p('$a = {Δy|Δx}$ e $b$ = onde corta o eixo $y$.') + call('Exemplo', '(0,2) e (2,−2): y = −2x + 2.', 'success')],
    ['Zero', 'f(x) = 0', 'scale', 'success', p('$x = −{b|a}$; ponto $(−b/a, 0)$.') + call('Exemplo', 'f(x) = −2x + 8: zero em 4.', 'success')],
    ['Corte em y', 'f(0) = b', 'up', 'primary', p('Ponto $(0, b)$.') + call('Atenção', 'Não confunda com o zero.', 'danger')],
    ['Contexto', 'Resolver f(x) = c', 'check', 'growth', li(['Montar a lei.', 'Igualar a c.', 'Resolver e interpretar com a unidade.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Prolongar a reta só até os pontos marcados.', 'Trocar x e y ao marcar pontos.', 'Esquecer o sinal em x = −b ÷ a.', 'Confundir zero com corte em y.', 'Ignorar o domínio do contexto.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const gq1 = graf({ xmin: -2, xmax: 4, ymin: -3, ymax: 6, px: 1, py: 1, series: [{ pts: [[-1, 6], [3, -2]] }], marcas: [[0, 4, '(0, 4)', 10, -4], [2, 0, '(2, 0)', 8, -8]], max: '300px' });
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Gráfico e zero da função afim <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: lei pelo gráfico, zero, depreciação, temperatura e cortes nos eixos.',
  final: 'Dois pontos dão a lei; igualar a zero dá o ponto de encontro com o eixo x.',
  questions: [
    { badge: 'Estilo ENEM · lei pelo gráfico', text: 'A reta do gráfico passa pelos pontos $(0, 4)$ e $(2, 0)$.' + gq1, cmd: 'A lei da função representada é:', opts: ['y = 2x + 4', 'y = −2x + 4', 'y = −2x − 4', 'y = 4x − 2', 'y = −4x + 2'], a: 1,
      sol: '<p>Corta o eixo $y$ em $4$: $b = 4$. De $x = 0$ a $x = 2$, $y$ cai $4$: $a = −4 ÷ 2 = −2$. Lei: $y = −2x + 4$.</p>' },
    { badge: 'Estilo ENEM · zero', text: 'Considere a função $f(x) = 5x − 30$.', cmd: 'O zero de $f$ é:', opts: ['−6', '−30', '5', '6', '30'], a: 3,
      sol: '<p>$5x − 30 = 0$ ⇒ $x = 6$.</p>' },
    { badge: 'Estilo ENEM · depreciação', text: 'O valor de uma máquina cai de forma linear, de 12 000 reais para zero, em 8 anos.', cmd: 'O valor da máquina após 3 anos é:', opts: ['4 500 reais', '7 500 reais', '8 000 reais', '9 000 reais', '10 500 reais'], a: 1,
      sol: '<p>A perda é $12\\ 000 ÷ 8 = 1\\ 500$ por ano. Lei: $V(t) = 12\\ 000 − 1\\ 500t$. $V(3) = 12\\ 000 − 4\\ 500 = 7\\ 500$.</p>' },
    { badge: 'Estilo ENEM · temperatura', text: 'A relação entre as escalas Celsius e Fahrenheit é $F = 1,8C + 32$.', cmd: 'A temperatura de 77 °F corresponde a quantos graus Celsius?', opts: ['20', '22', '25', '30', '45'], a: 2,
      sol: '<p>$77 = 1,8C + 32$ ⇒ $1,8C = 45$ ⇒ $C = 25$.</p>' },
    { badge: 'Estilo ENEM · cortes nos eixos', text: 'Considere a reta $y = 3x − 6$.', cmd: 'Ela corta o eixo $x$ e o eixo $y$, respectivamente, nos pontos:', opts: ['(2, 0) e (0, −6)', '(−2, 0) e (0, 6)', '(6, 0) e (0, −2)', '(0, 2) e (−6, 0)', '(2, −6) e (0, 0)'], a: 0,
      sol: '<p>Eixo $x$: $3x − 6 = 0$ ⇒ $x = 2$: $(2, 0)$. Eixo $y$: $f(0) = −6$: $(0, −6)$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Memória: <span style="color:var(--decay);">função e zero</span>',
  subtitle: 'Encontre os pares: cada função com o seu zero.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se formarem um par (função e o seu zero), elas ficam abertas.',
    final: 'Zero: resolva ax + b = 0 e fique com x = −b ÷ a.',
    pares: [['y = 2x − 6', 'zero: x = 3'], ['y = −x + 5', 'zero: x = 5'], ['y = 4x + 8', 'zero: x = −2'], ['y = x − 1', 'zero: x = 1'], ['y = −5x + 10', 'zero: x = 2'], ['y = 3x', 'zero: x = 0']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Gráfico e zero da função afim: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: zero, corte em y, leitura de reta, custo e depreciação. Digite o número pedido.',
  final: 'Você percorreu a trilha: zero, corte em y, leitura da reta e dois problemas de contexto.',
  problems: [
    { tag: 'Zero', q: 'Qual é o zero da função $f(x) = −2x + 8$?', a: 4, ph: 'x', hint: 'Resolva −2x + 8 = 0.', sol: '<p>$2x = 8$ ⇒ $x = 4$.</p>' },
    { tag: 'Corte em y', q: 'O gráfico de $f(x) = 7x − 15$ corta o eixo $y$ em um ponto $(0, y)$. Qual o valor de $y$?', a: -15, ph: 'y', hint: 'Calcule f(0).', sol: '<p>$f(0) = −15$.</p>' },
    { tag: 'Leitura', q: 'Uma reta passa por $(0, 4)$ e $(2, 0)$. Qual o valor de $y$ para $x = 5$?', a: -6, ph: 'y', hint: 'Lei: y = −2x + 4.', sol: '<p>$a = −2$, $b = 4$; $y(5) = −10 + 4 = −6$.</p>' },
    { tag: 'Custo', q: 'O custo é $C(x) = 40x + 2\\ 000$ (reais). Para um custo de 3 200 reais, quantas peças são produzidas?', a: 30, ph: 'peças', hint: 'Resolva 40x + 2 000 = 3 200.', sol: '<p>$40x = 1\\ 200$ ⇒ $x = 30$.</p>' },
    { tag: 'Depreciação', q: 'Um equipamento de 5 000 reais perde valor linearmente até zero em 5 anos. Qual o valor (em reais) após 2 anos?', a: 3000, ph: 'reais', hint: 'Perda anual: 5 000 ÷ 5.', sol: '<p>Perda de 1 000 por ano: $5\\ 000 − 2 · 1\\ 000 = 3\\ 000$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Gráfico e Zero da Função Afim', accent: 'growth', icon: 'curve-up',
  aulas: [['Aula 24', 'Gráfico da função afim', 'aula-1-grafico-da-funcao-afim.html'], ['Aulas 25–26', 'Zero da função afim', 'aula-2-zero-da-funcao-afim.html']],
  enem: 'Gráfico e zero da função afim no estilo ENEM', cria: 'Memória: função e zero', pratica: 'Gráfico e zero da função afim: trilha de desafios'
}, pages };
