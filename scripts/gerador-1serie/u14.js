// Unidade 14 — Função quadrática: definição e primeiros problemas (aulas 38 e 39)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'funcao-quadratica-definicao', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u14', BRAND = 'Função Quadrática: Definição', CAP = 'Aulas 38 e 39';
const pages = [];

const QJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'f(x) = ' + s; }
`;

// ===================== AULA 1: definição e coeficientes =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 38', h1: 'Função quadrática: <span style="color:var(--primary);">a lei dos saltos, jatos e lucros</span>',
  sub: 'O salto de um skatista, a água de uma fonte, o lucro de uma loja: situações em que a variação não é constante, mas descrita por uma expressão com x² — a função polinomial do 2º grau.',
  badges: [['f(x) = ax² + bx + c'], ['a ≠ 0', 'decay'], ['3 coeficientes', 'growth']], color: 'primary'
}));
a.push(roteiroSlide('Da definição ao uso.', [
  ['Definição', 'f(x) = ax² + bx + c com a ≠ 0', 'bulb'],
  ['Coeficientes', 'a, b e c e o papel de cada um', 'target'],
  ['Valor numérico', 'calcular f(x) para um x dado', 'chart'],
  ['Descobrir a lei', 'três informações dão a, b e c', 'link'],
  ['Problemas', 'lançamentos e expressões', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer uma <strong>função quadrática</strong> e identificar os coeficientes <strong>a, b e c</strong>.',
  'Calcular <strong>valores numéricos</strong> $f(x)$, inclusive com $x$ negativo ou fracionário.',
  'Determinar a <strong>lei</strong> a partir de três valores conhecidos (sistema).',
  'Aplicar a função a <strong>situações</strong> de lançamento.'
], 'Dica', 'Ao substituir um valor negativo, use <strong>parênteses</strong>: $f(−4) = (−4)^{2} − 5(−4) + 4$. O quadrado de um negativo é positivo.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O salto do skatista', `
          ${lede('Durante um salto, o skatista sobe, atinge um ponto mais alto e desce. O caminho no ar é uma curva chamada <strong>parábola</strong> e a altura em função do tempo é descrita por uma <strong>função quadrática</strong>. Diferente da função afim, aqui a altura não sobe a um ritmo constante: sobe cada vez mais devagar até parar e depois desce.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A altura (em metros) de um salto é $h(t) = 30t − 5t^{2}$. Depois de 2 segundos, a altura é:', ['20 m', '40 m', '50 m', '60 m'], 1, '$h(2) = 30 · 2 − 5 · 2^{2} = 60 − 20 = 40$ m. Note que o quadrado é calculado <strong>antes</strong> da multiplicação por 5.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Quando a lei tem $x^{2}$ como maior potência, o gráfico é uma <strong>parábola</strong>, não uma reta.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'f(x) = ax² + bx + c, com a ≠ 0', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Função <strong>quadrática</strong> (ou polinomial do 2º grau): $f(x) = ax^{2} + bx + c$, com $a, b, c ∈ ℝ$ e <strong>$a ≠ 0$</strong>.</li>
                <li><strong>a</strong> é o coeficiente de $x^{2}$ (decide a concavidade), <strong>b</strong> o de $x$ e <strong>c</strong> o termo independente.</li>
                <li>$b$ e $c$ podem ser zero: $y = −3x^{2} + 5$ e $y = x^{2} − 4x$ também são quadráticas.</li>
                <li>Se $a = 0$ sobra $bx + c$: é uma função afim, não quadrática.</li>
                <li>$f(0) = c$: o termo independente é o valor em $x = 0$.</li>
              </ul>
            </div>
            ${W.box('Máquina quadrática', W.row(W.nm('q1-a', 'a', 1, 'any'), W.nm('q1-b', 'b', -5, 'any'), W.nm('q1-c', 'c', 4, 'any')) + W.nm('q1-x', 'x', -4, 'any') + W.txt('q1-l', 'Lei: ') + W.txt('q1-y', 'f(x): ') + W.txt('q1-t', 'Tabela: ') + W.hint('q1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valor numérico', 'Dada $f(x) = x^{2} − 5x + 4$, calcule $f(0)$, $f(−4)$ e $f(1/2)$.', [
  ['f(0)', '$0^{2} − 5 · 0 + 4 = 4$ (é o termo $c$).'],
  ['f(−4)', '$(−4)^{2} − 5 · (−4) + 4 = 16 + 20 + 4 = 40$.'],
  ['f(1/2)', '$(1/2)^{2} − 5 · (1/2) + 4 = 0,25 − 2,5 + 4 = 1,75$.']
], '$f(0) = 4$, $f(−4) = 40$ e $f(1/2) = 1,75$.'));

a.push(sl('Explore · achando a lei', 'Três valores conhecidos, três coeficientes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Como há três incógnitas ($a$, $b$, $c$), precisamos de <strong>três informações</strong>.</li>
                <li>Com $f(0)$, $f(1)$ e $f(−1)$: $c = f(0)$, depois $a + b = f(1) − c$ e $a − b = f(−1) − c$.</li>
                <li>Somando as duas últimas: $2a = f(1) + f(−1) − 2c$; subtraindo: $2b = f(1) − f(−1)$.</li>
              </ul>
            </div>
            ${W.box('Lei por três valores', W.row(W.nm('q2-0', 'f(0)', 3, 'any'), W.nm('q2-1', 'f(1)', 0, 'any'), W.nm('q2-m', 'f(−1)', 8, 'any')) + W.txt('q2-s', 'Coeficientes: ') + W.txt('q2-l', 'Lei: ') + W.hint('q2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Descobrindo a função', 'Uma função quadrática $f$ é tal que $f(0) = 3$, $f(1) = 0$ e $f(−1) = 8$. Determine $f$ e calcule $f(2)$.', [
  ['Valor de c', '$f(0) = c = 3$.'],
  ['Sistema para a e b', '$f(1) = a + b + 3 = 0$ ⇒ $a + b = −3$; $f(−1) = a − b + 3 = 8$ ⇒ $a − b = 5$.'],
  ['Resolva', 'Somando: $2a = 2$ ⇒ $a = 1$; então $b = −4$. $f(x) = x^{2} − 4x + 3$ e $f(2) = 4 − 8 + 3 = −1$.']
], '$f(x) = x^{2} − 4x + 3$ e $f(2) = −1$.', 'growth'));

a.push(pratique('Os coeficientes', 'Na função $f(x) = −3x^{2} + 5x − 7$, a soma $a + b + c$ vale:',
  ['−15', '−5', '5', '7', '15'], 1,
  '$a = −3$, $b = 5$, $c = −7$: $−3 + 5 − 7 = −5$. (Também é $f(1)$.) <strong>Alternativa B.</strong>'));
a.push(pratique('f(−4)', 'Se $f(x) = x^{2} − 5x + 4$, então $f(−4)$ vale:',
  ['−32', '−8', '8', '40', '44'], 3,
  '$(−4)^{2} − 5(−4) + 4 = 16 + 20 + 4 = 40$. <strong>Alternativa D.</strong> Erro comum: escrever $−4^{2} = −16$.', '', 'growth'));
a.push(estiloEnem('Quem é quadrática?', 'Qual das expressões define uma <strong>função quadrática</strong>?',
  ['f(x) = 5x − 3', 'f(x) = x³ + x', 'f(x) = (x + 1)² − x²', 'f(x) = x(x − 3)', 'f(x) = 7'], 3,
  '$x(x − 3) = x^{2} − 3x$: tem $a = 1 ≠ 0$. Em $(x+1)^{2} − x^{2} = 2x + 1$ os $x^{2}$ se cancelam: é afim. $x^{3} + x$ é do 3º grau. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a função quadrática engana', [
  ['Esquecer a condição a ≠ 0', 'Sem $x^{2}$ a função deixa de ser quadrática.'],
  ['Quadrado de negativo', '$(−4)^{2} = 16$, não $−16$. Use parênteses.'],
  ['Expandir mal', '$(x + 1)^{2} = x^{2} + 2x + 1$, e não $x^{2} + 1$.'],
  ['Ordem das operações', 'Em $5t^{2}$, eleve $t$ ao quadrado <strong>antes</strong> de multiplicar por 5.']
]));
a.push(quiz([
  { q: 'Em $y = −3x^{2} + 5$, os coeficientes $a$, $b$ e $c$ são:', o: ['−3, 5, 0', '−3, 0, 5', '5, −3, 0', '0, −3, 5'], a: 1 },
  { q: 'Se $f(x) = 2x^{2} − 1$, então $f(3)$ vale:', o: ['5', '11', '17', '35'], a: 2 },
  { q: '$f(0)$ em $f(x) = ax^{2} + bx + c$ é:', o: ['a', 'b', 'c', '0'], a: 2 },
  { q: 'Qual não é função quadrática?', o: ['y = x² − 4', 'y = (x − 2)²', 'y = 3x² + 2x', 'y = 5x + 7'], a: 3 }
]));
a.push(fechamento([
  ['Definição', 'f(x) = ax² + bx + c com a ≠ 0.'],
  ['Valor numérico', 'Substitua com parênteses; eleve ao quadrado primeiro.'],
  ['Lei por pontos', 'Três valores dão um sistema para a, b e c.']
], 'Parábola à vista: preste atenção ao x² e ao sinal dos coeficientes.'));

pages.push({ out: BASE + 'aula-1-definicao-e-coeficientes.html', html: K.deck({
  title: 'Função quadrática: definição e coeficientes — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 38 · Função quadrática', slides: a,
  extra: WJS + BIND + QJS + String.raw`
  bind(['q1-a', 'q1-b', 'q1-c', 'q1-x'], function(){ var a = +$('q1-a').value, b = +$('q1-b').value, c = +$('q1-c').value, x = +$('q1-x').value;
    if(![a, b, c, x].every(isFinite)){ $('q1-l').textContent = '—'; return; }
    if(a === 0){ $('q1-l').textContent = 'a = 0: não é quadrática'; $('q1-y').textContent = ''; $('q1-t').textContent = ''; $('q1-h').textContent = 'Sem x² a função é afim (ou constante).'; return; }
    $('q1-l').textContent = leiQ(a, b, c); $('q1-y').textContent = pt(a * x * x + b * x + c) + ' (x = ' + pt(x) + ')'; var t = []; for(var i = -3; i <= 3; i++) t.push(i + ' → ' + pt(a * i * i + b * i + c)); $('q1-t').textContent = t.join('   ');
    $('q1-h').textContent = 'f(0) = c = ' + pt(c) + '. A tabela já mostra que os valores não variam de modo constante.'; });
  bind(['q2-0', 'q2-1', 'q2-m'], function(){ var f0 = +$('q2-0').value, f1 = +$('q2-1').value, fm = +$('q2-m').value; if(![f0, f1, fm].every(isFinite)){ $('q2-s').textContent = '—'; return; }
    var c = f0, a = (f1 + fm) / 2 - c, b = (f1 - fm) / 2; $('q2-s').textContent = 'a = ' + pt(a) + ' · b = ' + pt(b) + ' · c = ' + pt(c);
    if(a === 0){ $('q2-l').textContent = 'a = 0: os valores dados correspondem a uma função afim'; $('q2-h').textContent = ''; return; }
    $('q2-l').textContent = leiQ(a, b, c); $('q2-h').textContent = 'Confira: f(1) = ' + pt(a + b + c) + ' e f(−1) = ' + pt(a - b + c) + '.'; });`
}) });

// ===================== AULA 2: resolvendo problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 39', h1: 'Problemas com função quadrática: <span style="color:var(--growth);">da situação à equação do 2º grau</span>',
  sub: 'Quando o canteiro quadrado cresce, quando o lucro vira zero, quando a bola chega ao chão: em todos esses casos a pergunta vira “ax² + bx + c = 0”.',
  badges: [['equação do 2º grau'], ['Bhaskara', 'growth'], ['descartar raiz absurda', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do enunciado à raiz com sentido.', [
  ['Montar a equação', 'área, lucro, altura', 'bulb'],
  ['Resolver', 'raiz por fatoração ou Bhaskara', 'chart'],
  ['Escolher a solução', 'tempo e comprimento não são negativos', 'target'],
  ['Interpretar', 'unidade e contexto', 'link'],
  ['Problemas', 'canteiro, lucro e lançamento', 'scale']
]));
b.push(objetivosSlide([
  'Transformar problemas em <strong>equações do 2º grau</strong>.',
  'Resolver com <strong>Bhaskara</strong> ou por <strong>fatoração</strong>.',
  'Decidir qual raiz <strong>faz sentido</strong> no contexto.',
  'Interpretar o resultado com a <strong>unidade</strong> correta.'
], 'Dica', 'Duas raízes não significam duas respostas: uma medida de <strong>comprimento</strong> ou <strong>tempo</strong> não pode ser negativa — descarte a raiz sem sentido e diga por quê.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A bola lançada no parque', `
          ${lede('Um grupo lança uma bola para o alto. Ela sobe, para por um instante e cai. Para <strong>prever</strong> a altura depois de certo tempo precisamos da <strong>altura inicial</strong>, da <strong>velocidade de lançamento</strong> e da <strong>gravidade</strong>. Reunidas, essas informações formam uma lei do tipo $h(t) = −5t^{2} + v_0 t + h_0$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Se $h(t) = −5t^{2} + 20t$ (metros), a bola volta ao solo em $t = $:', ['2 s', '4 s', '5 s', '20 s'], 1, 'No solo, $h = 0$: $−5t^{2} + 20t = 0$ ⇒ $−5t(t − 4) = 0$ ⇒ $t = 0$ (lançamento) ou $t = 4$ s (volta ao solo).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A altura vale zero em <strong>dois instantes</strong>: ao sair do solo e ao voltar. Só um deles responde à pergunta.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · resolvendo ax² + bx + c = 0', 'A fórmula de Bhaskara', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Discriminante: $Δ = b^{2} − 4ac$.</li>
                <li>Raízes: $x = {−b ± √{Δ}|2a}$ (se $Δ ≥ 0$).</li>
                <li>$Δ > 0$: duas raízes reais distintas. $Δ = 0$: uma raiz (dupla). $Δ < 0$: nenhuma raiz real.</li>
                <li>Se $b = 0$ ou $c = 0$ há atalhos: $x^{2} = k$ ou fatorar $x(ax + b) = 0$.</li>
                <li>Em problemas, <strong>confira</strong> cada raiz e descarte as que não servem.</li>
              </ul>
            </div>
            ${W.box('Resolvedor de equação do 2º grau', W.row(W.nm('b1-a', 'a', 1, 'any'), W.nm('b1-b', 'b', -4, 'any'), W.nm('b1-c', 'c', -12, 'any')) + W.txt('b1-d', 'Δ = ') + W.txt('b1-r', 'Raízes: ') + W.hint('b1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'O canteiro quadrado', 'Um canteiro quadrado de lado $x$ foi ampliado em 2 m nas duas dimensões e passou a ter área de 100 m². Qual era o lado original?', [
  ['Monte a equação', 'Novo lado: $x + 2$. Área: $(x + 2)^{2} = 100$.'],
  ['Resolva', '$x + 2 = 10$ ou $x + 2 = −10$ ⇒ $x = 8$ ou $x = −12$.'],
  ['Escolha a raiz', 'Lado não pode ser negativo: $x = 8$.']
], 'O lado original era de <strong>8 m</strong> (confira: $10 · 10 = 100$ m²).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Quando o lucro é nulo', 'O lucro de uma empresa é $L(n) = n^{2} − 10n + 21$ (milhares de reais), com $n$ em milhares de unidades. Para quais valores de $n$ o lucro é nulo?', [
  ['Lucro nulo', '$L(n) = 0$ ⇒ $n^{2} − 10n + 21 = 0$.'],
  ['Bhaskara', '$Δ = 100 − 84 = 16$; $n = {10 ± 4|2}$.'],
  ['Raízes', '$n = 7$ ou $n = 3$.']
], 'O lucro é nulo para <strong>3 mil</strong> ou <strong>7 mil</strong> unidades (ponto de equilíbrio em 3 mil).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'A bola lançada do alto de uma torre', 'Uma bola é lançada do alto de uma torre e sua altura (em metros) é $d(t) = 60 + 20t − 5t^{2}$. Em que instante ela atinge o solo?', [
  ['Solo: d = 0', '$60 + 20t − 5t^{2} = 0$. Divida por $−5$: $t^{2} − 4t − 12 = 0$.'],
  ['Bhaskara', '$Δ = 16 + 48 = 64$; $t = {4 ± 8|2}$ ⇒ $t = 6$ ou $t = −2$.'],
  ['Escolha', 'Tempo não é negativo: $t = 6$ s.']
], 'A bola atinge o solo após <strong>6 segundos</strong> (confira: $60 + 120 − 180 = 0$).', 'growth'));

b.push(pratique('Canteiro', 'Um terreno quadrado de lado $x$ tem 3 m acrescentados em cada dimensão e a nova área é 64 m². O lado original é:',
  ['3 m', '5 m', '8 m', '11 m', '61 m'], 1,
  '$(x + 3)^{2} = 64$ ⇒ $x + 3 = 8$ ⇒ $x = 5$ m. (A raiz $−11$ é descartada.) <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Lucro nulo', 'Com $L(n) = n^{2} − 12n + 32$ (milhares de reais), o <strong>menor</strong> valor de $n$ (milhares de unidades) em que o lucro é nulo é:',
  ['2', '4', '6', '8', '32'], 1,
  '$Δ = 144 − 128 = 16$; $n = {12 ± 4|2}$ ⇒ $n = 8$ ou $n = 4$. O menor é $4$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('A bola e a torre', 'Uma bola é lançada para cima do alto de uma torre e sua distância ao solo (em metros) é dada por $d(t) = 80 + 30t − 5t^{2}$. Em qual instante $t$ (em segundos) ela atinge o solo?',
  ['t = −2 s', 't = 2 s', 't = 6 s', 't = 8 s', 't = 16 s'], 3,
  '$d = 0$: $5t^{2} − 30t − 80 = 0$ ⇒ $t^{2} − 6t − 16 = 0$. $Δ = 36 + 64 = 100$; $t = {6 ± 10|2}$ ⇒ $t = 8$ ou $t = −2$. Tempo positivo: $t = 8$ s. <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas enganam', [
  ['Aceitar a raiz negativa', 'Tempo, comprimento e quantidade não são negativos: descarte.'],
  ['Errar o sinal do discriminante', '$Δ = b^{2} − 4ac$: com $c$ negativo, $−4ac$ <strong>soma</strong>.'],
  ['Esquecer o ± ', 'Bhaskara dá duas raízes; calcule as duas e escolha.'],
  ['Não dividir pelo coeficiente comum', 'Simplificar a equação (÷ 5, por exemplo) evita contas grandes.']
]));
b.push(quiz([
  { q: 'O discriminante de $x^{2} − 4x − 12$ é:', o: ['−32', '16', '64', '−16'], a: 2 },
  { q: 'As raízes de $x^{2} − 4x − 12 = 0$ são:', o: ['6 e −2', '−6 e 2', '4 e 3', '12 e −1'], a: 0 },
  { q: 'Se $Δ < 0$, a equação do 2º grau:', o: ['tem duas raízes reais', 'tem uma raiz real', 'não tem raiz real', 'tem infinitas raízes'], a: 2 },
  { q: 'Num problema de tempo, se as raízes são 8 e −2, a resposta é:', o: ['−2', '8', '6', '−16'], a: 1 }
]));
b.push(fechamento([
  ['Montar a equação', 'Traduza a situação (área, lucro, altura) em ax² + bx + c = 0.'],
  ['Bhaskara', 'Δ = b² − 4ac; x = (−b ± √Δ) ÷ 2a.'],
  ['Escolha', 'Descarte raízes sem sentido e escreva a unidade.']
], 'Duas raízes, uma resposta: o contexto decide.'));

pages.push({ out: BASE + 'aula-2-problemas-do-2-grau.html', html: K.deck({
  title: 'Problemas com função quadrática — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 39 · Problemas do 2º grau', slides: b,
  extra: WJS + BIND + QJS + String.raw`
  bind(['b1-a', 'b1-b', 'b1-c'], function(){ var a = +$('b1-a').value, b = +$('b1-b').value, c = +$('b1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('b1-d').textContent = a === 0 ? 'a = 0: não é do 2º grau' : '—'; $('b1-r').textContent = ''; return; }
    var d = b * b - 4 * a * c; $('b1-d').textContent = pt(b) + '² − 4 · ' + pt(a) + ' · ' + pt(c) + ' = ' + pt(d);
    if(d < 0){ $('b1-r').textContent = 'sem raízes reais'; $('b1-h').textContent = 'Δ < 0: a parábola não toca o eixo x.'; }
    else { var s = Math.sqrt(d), x1 = (-b - s) / (2 * a), x2 = (-b + s) / (2 * a); $('b1-r').textContent = d === 0 ? 'x = ' + pt(x1) + ' (raiz dupla)' : 'x₁ = ' + pt(Math.min(x1, x2)) + ' e x₂ = ' + pt(Math.max(x1, x2)); $('b1-h').textContent = 'x = (' + pt(-b) + ' ± √' + pt(d) + ') ÷ ' + pt(2 * a) + '. Em problemas, verifique qual raiz tem sentido.'; } });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função quadrática: <span>definição e problemas</span>',
  lede: 'A forma ax² + bx + c, os coeficientes, o valor numérico, como achar a lei com três valores e como resolver problemas que levam à equação do 2º grau.',
  badges: ['f(x) = ax² + bx + c', 'a ≠ 0', 'Δ = b² − 4ac'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Definição', 'Lei do 2º grau', 'chart', 'primary', p('$f(x) = ax^{2} + bx + c$ com $a ≠ 0$.') + call('f(0)', 'é o termo independente c.', 'success')],
    ['Valor numérico', 'Substituir', 'target', 'growth', p('$f(−4) = (−4)^{2} − 5(−4) + 4 = 40$') + call('Cuidado', 'Use parênteses com negativos.', 'danger')],
    ['Lei por três valores', 'Sistema', 'link', 'decay', li(['c = f(0).', 'a + b = f(1) − c.', 'a − b = f(−1) − c.'])],
    ['Bhaskara', 'Raízes', 'scale', 'success', p('$Δ = b^{2} − 4ac$ · $x = {−b ± √{Δ}|2a}$') + call('Δ', '> 0: duas; = 0: uma; < 0: nenhuma.', 'success')],
    ['Contexto', 'Descartar raiz', 'up', 'primary', li(['Tempo e comprimento ≥ 0.', 'Verifique substituindo.', 'Escreva a unidade.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['a ≠ 0?', 'Parênteses com negativos?', 'Raiz com sentido?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Calcular −4² como 16.', 'Esquecer o a ≠ 0.', 'Errar o sinal de Δ com c negativo.', 'Aceitar raiz negativa em problema de tempo.', 'Expandir (x+1)² como x²+1.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: coeficientes, lei por valores, canteiro, lançamento e lucro nulo.',
  final: 'Substitua com cuidado, monte a equação e escolha a raiz que faz sentido.',
  questions: [
    { badge: 'Estilo ENEM · coeficientes', text: 'Considere $f(x) = −3x^{2} + 5x − 7$.', cmd: 'A soma $a + b + c$ dos coeficientes é:', opts: ['−15', '−5', '5', '7', '15'], a: 1,
      sol: '<p>$a = −3$, $b = 5$, $c = −7$: $−3 + 5 − 7 = −5$.</p>' },
    { badge: 'Estilo ENEM · lei por valores', text: 'Uma função quadrática $f$ satisfaz $f(0) = 3$, $f(1) = 0$ e $f(−1) = 8$.', cmd: 'O valor de $f(2)$ é:', opts: ['−1', '0', '1', '3', '5'], a: 0,
      sol: '<p>$c = 3$; $a + b = −3$; $a − b = 5$ ⇒ $a = 1$, $b = −4$. $f(2) = 4 − 8 + 3 = −1$.</p>' },
    { badge: 'Estilo ENEM · canteiro', text: 'Um canteiro quadrado de lado $x$ foi ampliado em 2 m nas duas dimensões e passou a ter 100 m² de área.', cmd: 'O lado original, em metros, era:', opts: ['6', '8', '10', '12', '98'], a: 1,
      sol: '<p>$(x + 2)^{2} = 100$ ⇒ $x + 2 = 10$ ⇒ $x = 8$ (a raiz $−12$ não serve).</p>' },
    { badge: 'Estilo ENEM · lançamento', text: 'Um objeto é lançado do solo e sua altura (em metros) é $h(t) = 30t − 5t^{2}$.', cmd: 'O objeto volta ao solo após:', opts: ['3 s', '5 s', '6 s', '9 s', '30 s'], a: 2,
      sol: '<p>$30t − 5t^{2} = 0$ ⇒ $5t(6 − t) = 0$ ⇒ $t = 0$ ou $t = 6$. Volta ao solo em $6$ s.</p>' },
    { badge: 'Estilo ENEM · lucro nulo', text: 'O lucro de uma empresa é $L(n) = n^{2} − 10n + 21$ (milhares de reais), com $n$ em milhares de unidades.', cmd: 'O menor valor de $n$ para o qual o lucro é nulo é:', opts: ['1', '3', '5', '7', '21'], a: 1,
      sol: '<p>$Δ = 100 − 84 = 16$; $n = {10 ± 4|2}$ ⇒ $n = 3$ ou $n = 7$. O menor é $3$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique as <span style="color:var(--growth);">funções</span>',
  subtitle: 'Quadrática, afim ou nenhuma das duas? Atenção às expressões disfarçadas.',
  tpl: cClassificar({
    cats: ['Quadrática', 'Afim', 'Nenhuma das duas'],
    intro: 'Cada cartão traz uma lei. Se preciso, <strong>desenvolva</strong> a expressão antes de decidir. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Desenvolva as expressões: o x² pode aparecer (ou sumir) depois das contas.',
    itens: [
      ['$f(x) = x^{2} − 5x + 4$', 0, 'a = 1 ≠ 0: quadrática.'],
      ['$y = 3x + 1$', 1, 'Maior potência 1, a ≠ 0: afim.'],
      ['$y = −2x^{2}$', 0, 'a = −2, b = c = 0: quadrática.'],
      ['$y = x^{3} + x$', 2, 'É do 3º grau.'],
      ['$y = (x + 1)^{2}$', 0, 'Desenvolvendo: $x^{2} + 2x + 1$: quadrática.'],
      ['$y = x(x − 3)$', 0, '$x^{2} − 3x$: quadrática.'],
      ['$y = 2x$', 1, 'Afim (linear).'],
      ['$y = (x + 2)^{2} − x^{2}$', 1, 'Desenvolvendo: $4x + 4$ — o $x^{2}$ se cancela: afim.'],
      ['$y = 7$', 2, 'Constante: a = 0, nem afim nem quadrática.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valor numérico, lei, lançamento, área e equação. Digite o número pedido.',
  final: 'Você percorreu a trilha: valor numérico, lei por valores, altura, canteiro e raiz.',
  problems: [
    { tag: 'Valor numérico', q: 'Se $f(x) = x^{2} − 5x + 4$, quanto vale $f(−4)$?', a: 40, ph: 'f(−4)', hint: '(−4)² = 16.', sol: '<p>$16 + 20 + 4 = 40$.</p>' },
    { tag: 'Lei por valores', q: 'Uma quadrática tem $f(0) = 3$, $f(1) = 0$ e $f(−1) = 8$. Quanto vale $f(2)$?', a: -1, ph: 'f(2)', hint: 'Ache a, b, c: f(x) = x² − 4x + 3.', sol: '<p>$f(2) = 4 − 8 + 3 = −1$.</p>' },
    { tag: 'Altura', q: 'A altura é $h(t) = 30t − 5t^{2}$ (m). Qual a altura em $t = 2$ s?', a: 40, ph: 'm', hint: '30·2 − 5·4.', sol: '<p>$60 − 20 = 40$ m.</p>' },
    { tag: 'Canteiro', q: 'Um canteiro quadrado de lado $x$ ganhou 2 m em cada dimensão e ficou com 100 m². Qual o lado original (m)?', a: 8, ph: 'm', hint: '(x + 2)² = 100.', sol: '<p>$x + 2 = 10$ ⇒ $x = 8$.</p>' },
    { tag: 'Equação', q: 'Qual a raiz <strong>positiva</strong> de $t^{2} − 4t − 12 = 0$?', a: 6, ph: 't', hint: 'Δ = 64.', sol: '<p>$t = {4 ± 8|2}$ ⇒ $6$ ou $−2$. A positiva é $6$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Quadrática: Definição', accent: 'primary', icon: 'parabola',
  aulas: [['Aula 38', 'Definição e coeficientes', 'aula-1-definicao-e-coeficientes.html'], ['Aula 39', 'Problemas do 2º grau', 'aula-2-problemas-do-2-grau.html']],
  enem: 'Função quadrática no estilo ENEM', cria: 'Classifique as funções', pratica: 'Função quadrática: trilha de desafios'
}, pages };
