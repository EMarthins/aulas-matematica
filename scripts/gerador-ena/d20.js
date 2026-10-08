// Unidade 20 — Matrizes, determinantes e sistemas lineares (bibliografia do edital: Iezzi/Hazzan, vol. 4)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, vfBlock } = K;
const DIR = 'ena-profmat/20-matrizes-determinantes/';
const out = [];

const mat2 = (id, v) => W.row(W.nm(id + '1', '', v[0]), W.nm(id + '2', '', v[1])) + W.row(W.nm(id + '3', '', v[2]), W.nm(id + '4', '', v[3]));

// ====================== AULA 1: matrizes ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Matrizes · Aula 1', h1: 'Matrizes: <span style="color:var(--primary);">operações e inversa</span>',
  sub: 'Definição e tipos, igualdade, soma, produto por escalar, produto de matrizes (e por que não comuta), transposta, matriz identidade e inversa 2×2.',
  badges: [['Bibliografia: Iezzi/Hazzan v.4'], ['AB ≠ BA', 'danger'], ['A·A⁻¹ = I', 'growth']], color: 'primary'
}));
a.push(roteiroSlide('Tabelas de números com regras próprias de operação.', [
  ['O que é uma matriz', 'ordem m × n e elementos aᵢⱼ', 'grid'],
  ['Tipos especiais', 'quadrada, identidade, nula, diagonal, simétrica', 'check'],
  ['Soma e produto por escalar', 'elemento a elemento', 'scale'],
  ['Produto de matrizes', 'linha × coluna; não comuta', 'link'],
  ['Transposta', '(AB)ᵗ = BᵗAᵗ', 'chart'],
  ['Inversa 2×2', 'A⁻¹ = (1/det A)·[d −b; −c a]', 'target']
]));
a.push(objetivosSlide([
  'Ler uma matriz e identificar sua <strong>ordem</strong> e seus <strong>elementos</strong>.',
  'Somar, multiplicar por escalar e <strong>multiplicar matrizes</strong> (verificando a ordem).',
  'Calcular a <strong>transposta</strong> e a <strong>inversa</strong> de uma matriz 2×2.',
  'Reconhecer que o produto de matrizes <strong>não é comutativo</strong>.'
], 'Na bibliografia do edital', 'O Vol. 4 de Iezzi/Hazzan trata de sequências, matrizes, determinantes e sistemas — o último bloco deste curso.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Uma loja, dois dias, três produtos', `
          ${lede('Uma loja anota as vendas em uma tabela: <strong>linhas</strong> = dias, <strong>colunas</strong> = produtos. Essa tabela é uma <strong>matriz</strong> de ordem $2 × 3$.')}
          ${tbl(['', 'Caneta', 'Caderno', 'Lápis'], [['Segunda', '5', '2', '8'], ['Terça', '3', '4', '6']])}
          <div class="grid2" style="margin-top:8px;">
            ${mini('Sendo $a_{ij}$ o elemento da linha $i$ e coluna $j$, o valor de $a_{23}$ é:', ['2', '4', '6', '8'], 2, '$a_{23}$ está na <strong>linha 2</strong> (terça) e <strong>coluna 3</strong> (lápis): vale 6. Primeiro índice: linha; segundo: coluna.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Matriz $m × n$: $m$ linhas e $n$ colunas. Operações com matrizes seguem regras que respeitam essa <strong>ordem</strong>.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · tipos', 'Tipos de matrizes e igualdade', `
          <div class="grid2">
            <div>
              ${tbl(['Tipo', 'Característica'], [['Quadrada', '$n × n$ (mesmo número de linhas e colunas)'], ['Identidade $I$', 'quadrada com 1 na diagonal e 0 fora'], ['Nula', 'todos os elementos 0'], ['Diagonal', 'zeros fora da diagonal principal'], ['Transposta $A^t$', 'troca linhas por colunas'], ['Simétrica', '$A^t = A$']])}
            </div>
            <div>
              ${callout('Igualdade', 'Duas matrizes são iguais se têm a <strong>mesma ordem</strong> e elementos correspondentes iguais. Ex.: $[x\\ 2;\\ 3\\ y] = [5\\ 2;\\ 3\\ −1]$ ⇒ $x = 5$ e $y = −1$.', 'success')}
              ${callout('Identidade', '$A·I = I·A = A$. É o “1” das matrizes quadradas.')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Operações', 'Soma, produto por escalar, produto e transposta', `
          <div class="grid2">
            <div>
              ${F('A ± B: "elemento a elemento (mesma ordem)"   kA: "multiplica todos"')}
              ${F('(AB)_{ij} = ∑_k a_{ik}·b_{kj}   "A (m×n) · B (n×p) = AB (m×p)"')}
              ${callout('Não comuta', 'Em geral $AB ≠ BA$ (e às vezes só um dos produtos existe). Vale $(AB)^t = B^tA^t$ e $A(B + C) = AB + AC$.', 'danger')}
            </div>
            ${W.box('Matrizes 2×2', '<p class="small" style="margin:0 0 2px;"><b>A</b></p>' + mat2('m1-', [1, 2, 3, 4]) + '<p class="small" style="margin:4px 0 2px;"><b>B</b></p>' + mat2('m2-', [0, 1, 1, 0]) + W.nm('m3-k', 'escalar k', 2) + '<div id="m3-r" style="margin-top:8px;font-family:JetBrains Mono,monospace;font-size:.82rem;line-height:1.8;"></div>' + W.hint('m3-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Treino', 'AB e BA são diferentes', 'Com $A = [1\\ 2;\\ 0\\ 1]$ e $B = [1\\ 0;\\ 3\\ 1]$, calcule $AB$ e $BA$.', [
  ['AB (linha × coluna)', '$AB = [1·1 + 2·3,\\ 1·0 + 2·1;\\ 0·1 + 1·3,\\ 0·0 + 1·1] = [7\\ 2;\\ 3\\ 1]$'],
  ['BA', '$BA = [1·1 + 0·0,\\ 1·2 + 0·1;\\ 3·1 + 1·0,\\ 3·2 + 1·1] = [1\\ 2;\\ 3\\ 7]$'],
  ['Compare', '$AB ≠ BA$']
], 'O produto de matrizes <strong>não é comutativo</strong>: $AB = [7\\ 2;\\ 3\\ 1]$ e $BA = [1\\ 2;\\ 3\\ 7]$.', 'primary'));

a.push(sl('Inversa', 'Matriz inversa 2×2', `
          <div class="grid2">
            <div>
              ${F('A = [ a\\ b ;\\ c\\ d ]   A^{−1} = {1|ad − bc}[ d\\ −b ;\\ −c\\ a ]   A·A^{−1} = I', false)}
              ${callout('Existência', 'A inversa existe só se $det A = ad − bc ≠ 0$. Trocamos os elementos da diagonal principal, mudamos o sinal dos outros dois e dividimos pelo determinante.', 'success')}
              ${callout('Exemplo', '$A = [2\\ 1;\\ 5\\ 3]$: $det = 6 − 5 = 1$; $A^{−1} = [3\\ −1;\\ −5\\ 2]$.')}
            </div>
            ${W.box('Inversa de A', mat2('m4-', [2, 1, 5, 3]) + '<div id="m4-r" style="margin-top:8px;font-family:JetBrains Mono,monospace;font-size:.85rem;line-height:1.8;"></div>' + W.hint('m4-h'))}
          </div>`, { cls: '' }));

a.push(sl('Verdadeiro ou falso?', 'Teste rápido de conceitos', `
          ${vfBlock([
  ['Se $A$ é $2 × 3$ e $B$ é $3 × 4$, o produto $AB$ existe e é $2 × 4$.', true, 'Verdadeiro: número de colunas de A (3) = número de linhas de B (3); a ordem do produto é 2 × 4.'],
  ['Para quaisquer matrizes quadradas $A$ e $B$, vale $AB = BA$.', false, 'Falso: o produto de matrizes não é comutativo em geral.'],
  ['Toda matriz quadrada tem inversa.', false, 'Falso: só tem inversa se o determinante é diferente de zero.'],
  ['$(AB)^t = B^tA^t$.', true, 'Verdadeiro: a transposta do produto é o produto das transpostas, na ordem trocada.']
])}`, { cls: '' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto com matrizes', [
  ['Multiplicar elemento a elemento', 'O produto é linha × coluna: $(AB)_{11} = a_{11}b_{11} + a_{12}b_{21}$, não $a_{11}b_{11}$.'],
  ['Trocar a ordem do produto', '$AB$ e $BA$ são diferentes; escreva a ordem exatamente como no enunciado.'],
  ['Inversa de matriz singular', 'Se $det = 0$ não existe inversa. Calcule o determinante primeiro.'],
  ['Ordem incompatível', 'Verifique se (colunas de A) = (linhas de B) antes de multiplicar.']
]));

a.push(quiz([
  { q: 'Em $2A$, com $A = [1\\ 2;\\ 3\\ 4]$, o elemento da 2ª linha e 2ª coluna é:', o: ['4', '6', '8', '10'], a: 2 },
  { q: 'Se $A = [1\\ 2;\\ 0\\ 1]$ e $B = [1\\ 0;\\ 3\\ 1]$, o elemento $(AB)_{11}$ é:', o: ['3', '5', '7', '9'], a: 2 },
  { q: '$A$ é $2 × 3$ e $B$ é $3 × 4$. O produto $AB$ tem ordem:', o: ['$3 × 3$', '$2 × 4$', '$4 × 2$', 'não existe'], a: 1 },
  { q: 'Se $A = [2\\ 1;\\ 5\\ 3]$, o elemento $(A^{−1})_{11}$ é:', o: ['2', '3', '−1', '−5'], a: 1 }
]));
a.push(fechamento([
  ['Ordem', '$m × n$; produto $(m×n)(n×p) = m×p$.'],
  ['Produto', 'Linha × coluna; $AB ≠ BA$; $(AB)^t = B^tA^t$.'],
  ['Inversa', '$A^{−1} = {1|det A}[d\\ −b;\\ −c\\ a]$, se $det A ≠ 0$.']
], 'Respeite a ordem: das dimensões à ordem do produto.'));

out.push({ out: DIR + 'aula-1-matrizes-operacoes-inversa.html', html: K.deck({
  title: 'Matrizes: operações e inversa — ENA · PROFMAT', brand: 'Matrizes e Determinantes', key: 'c20a1', meta: 'Matrizes · Aula 1 · Operações e inversa', slides: a,
  extra: WJS + BIND + String.raw`
  function M(p){ return [[+$(p + '1').value, +$(p + '2').value], [+$(p + '3').value, +$(p + '4').value]]; }
  function fm(X){ return '[ ' + X[0].map(function(v){ return nf(v, 4); }).join('  ') + ' ]  [ ' + X[1].map(function(v){ return nf(v, 4); }).join('  ') + ' ]'; }
  function mul(X, Y){ return [[X[0][0] * Y[0][0] + X[0][1] * Y[1][0], X[0][0] * Y[0][1] + X[0][1] * Y[1][1]], [X[1][0] * Y[0][0] + X[1][1] * Y[1][0], X[1][0] * Y[0][1] + X[1][1] * Y[1][1]]]; }
  var ids = []; ['m1-', 'm2-'].forEach(function(p){ for(var i = 1; i <= 4; i++) ids.push(p + i); }); ids.push('m3-k');
  bind(ids, function(){ var A = M('m1-'), B = M('m2-'), k = +$('m3-k').value, S = [[A[0][0] + B[0][0], A[0][1] + B[0][1]], [A[1][0] + B[1][0], A[1][1] + B[1][1]]], AB = mul(A, B), BA = mul(B, A), eq = AB[0][0] === BA[0][0] && AB[0][1] === BA[0][1] && AB[1][0] === BA[1][0] && AB[1][1] === BA[1][1];
    $('m3-r').innerHTML = 'A + B = ' + fm(S) + '<br>' + k + '·A = ' + fm([[k * A[0][0], k * A[0][1]], [k * A[1][0], k * A[1][1]]]) + '<br>A·B = ' + fm(AB) + '<br>B·A = ' + fm(BA) + '<br>Aᵗ = ' + fm([[A[0][0], A[1][0]], [A[0][1], A[1][1]]]); $('m3-h').textContent = eq ? 'Neste caso AB = BA (acontece, mas é exceção).' : 'AB ≠ BA: o produto não comuta. Com A = [1 2; 3 4] e B = [0 1; 1 0], AB ≠ BA.'; });
  bind(['m4-1', 'm4-2', 'm4-3', 'm4-4'], function(){ var A = M('m4-'), D = A[0][0] * A[1][1] - A[0][1] * A[1][0]; if(!D){ $('m4-r').textContent = 'det A = 0: A não tem inversa.'; $('m4-h').textContent = 'Matriz singular.'; return; } var I = [[A[1][1] / D, -A[0][1] / D], [-A[1][0] / D, A[0][0] / D]], P = mul(A, I); $('m4-r').innerHTML = 'det A = ' + D + '<br>A⁻¹ = ' + fm(I) + '<br>A·A⁻¹ = ' + fm(P.map(function(r){ return r.map(function(v){ return Math.round(v * 1e9) / 1e9; }); })); $('m4-h').textContent = 'Para [2 1; 5 3]: det = 1 e A⁻¹ = [3 −1; −5 2].'; });`
}) });

// ====================== AULA 2: determinantes e sistemas ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Matrizes · Aula 2', h1: 'Determinantes e <span style="color:var(--growth);">sistemas lineares</span>',
  sub: 'Determinante 2×2 e 3×3 (Sarrus), propriedades, regra de Cramer, discussão de sistemas com parâmetro e aplicações em geometria analítica (área e colinearidade).',
  badges: [['Bibliografia: Iezzi/Hazzan v.4'], ['D ≠ 0 ⇒ SPD', 'growth'], ['área = ½|det|', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('O determinante diz se o sistema tem solução única — e até a área de um triângulo.', [
  ['Determinante 2×2 e 3×3', 'ad − bc e regra de Sarrus', 'grid'],
  ['Propriedades', 'troca de linhas, linhas proporcionais, det(AB)', 'check'],
  ['Regra de Cramer', 'x = Dₓ/D', 'link'],
  ['Discussão de sistemas', 'D ≠ 0, D = 0 com parâmetro', 'warn'],
  ['Geometria analítica', 'área do triângulo e alinhamento de três pontos', 'triangle']
]));
b.push(objetivosSlide([
  'Calcular <strong>determinantes</strong> 2×2 e 3×3 (Sarrus) e aplicar suas <strong>propriedades</strong>.',
  'Resolver sistemas pela <strong>regra de Cramer</strong> e <strong>discutir</strong> a classificação com parâmetro.',
  'Usar o determinante para a <strong>área de um triângulo</strong> e para testar <strong>colinearidade</strong>.'
], 'Na bibliografia do edital', 'Vol. 4 de Iezzi/Hazzan: matrizes, determinantes e sistemas. Aqui também reaparece o item “b” (sistemas do 1º grau).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O número que decide tudo', `
          ${lede('Para $\\{ ax + by = e ;\\ cx + dy = f \\}$, o <strong>determinante</strong> $D = ad − bc$ diz se o sistema tem uma só solução.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O sistema $\\{ 2x + 3y = 12 ;\\ 4x + 6y = 24 \\}$ tem $D$ igual a:', ['0', '6', '12', '24'], 0, '$D = 2·6 − 3·4 = 12 − 12 = 0$. Com $D = 0$ não há solução única: aqui as equações são proporcionais (SPI).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$D ≠ 0$ ⇒ solução <strong>única</strong> (Cramer). $D = 0$ ⇒ sem solução ou infinitas: é preciso olhar mais de perto.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · determinantes', '2×2 e 3×3 (regra de Sarrus)', `
          <div class="grid2">
            <div>
              ${F('det [ a\\ b ;\\ c\\ d ] = ad − bc', false)}
              ${callout('Sarrus (3×3)', 'Repita as duas primeiras colunas à direita. Some os produtos das <strong>três diagonais principais</strong> e subtraia os das <strong>três secundárias</strong>.', 'success')}
              ${tbl(['Propriedade', 'Efeito'], [['trocar duas linhas', 'det muda de sinal'], ['linha nula ou duas linhas proporcionais', 'det = 0'], ['multiplicar uma linha por $k$', 'det × $k$'], ['$det(kA)$, ordem $n$', '$k^n·det A$'], ['$det(AB)$ e $det(A^t)$', '$det A · det B$ e $det A$']])}
            </div>
            ${W.box('Determinante 3×3', [0, 1, 2].map(i => W.row(...[0, 1, 2].map(j => W.nm(`d${i}${j}`, '', [[1, 2, 3], [0, 1, 4], [5, 6, 0]][i][j])))).join('') + W.txt('d-r', '') + W.hint('d-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Regra de Cramer', 'Sistema n×n com determinante não nulo', `
          ${lede('Em um sistema com $D ≠ 0$, cada incógnita é $x_i = {D_i|D}$, onde $D_i$ é o determinante obtido trocando a coluna $i$ pela coluna dos termos independentes.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Sistema 3×3 por Cramer', '<div class="row"><div><label>x</label></div><div><label>y</label></div><div><label>z</label></div><div><label>=</label></div></div>' + [[1, 1, 1, 6], [1, -1, 0, 1], [0, 1, -1, 1]].map((r, i) => W.row(...r.map((v, j) => W.nm(`c${i}${j}`, '', v)))).join('') + W.txt('c-d', '') + W.txt('c-r', '') + W.hint('c-h'))}
            ${callout('2×2', '$x = {c_1b_2 − c_2b_1|a_1b_2 − a_2b_1}$ e $y = {a_1c_2 − a_2c_1|a_1b_2 − a_2b_1}$. Para $x + y = 10$ e $x − y = 4$: $D = −2$, $D_x = −14$, $D_y = −6$ → $(7, 3)$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Discussão', 'Sistema com parâmetro: quando há uma, nenhuma ou infinitas soluções?', `
          <div class="grid2">
            <div>
              ${callout('Roteiro', '1) Calcule $D$ em função do parâmetro. 2) $D ≠ 0$: SPD. 3) Valores de $k$ que anulam $D$: substitua e examine — equações proporcionais (SPI) ou contraditórias (SI).', 'success')}
              ${callout('Exemplo', '$\\{ x + y = 2 ;\\ kx + 2y = c \\}$: $D = 2 − k$. Se $k ≠ 2$, SPD. Se $k = 2$: $2x + 2y = c$ é o dobro da 1ª quando $c = 4$ (SPI) e contradiz quando $c ≠ 4$ (SI).')}
            </div>
            ${W.box('x + y = 2 e kx + 2y = c', W.row(W.nm('k-k', 'k', 2), W.nm('k-c', 'c', 4)) + W.txt('k-r', '') + W.hint('k-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Geometria analítica', 'Área do triângulo e três pontos alinhados', `
          <div class="grid2">
            <div>
              ${F('A = ½ ∣ det [ x_1\\ y_1\\ 1 ;\\ x_2\\ y_2\\ 1 ;\\ x_3\\ y_3\\ 1 ] ∣', false)}
              ${callout('Alinhamento', 'Os três pontos são <strong>colineares</strong> se, e só se, o determinante é <strong>zero</strong> (área nula).', 'success')}
            </div>
            ${W.box('Três pontos', W.row(W.nm('g-x1', 'x₁', 1), W.nm('g-y1', 'y₁', 2)) + W.row(W.nm('g-x2', 'x₂', 4), W.nm('g-y2', 'y₂', 6)) + W.row(W.nm('g-x3', 'x₃', 7), W.nm('g-y3', 'y₃', 10)) + W.txt('g-r', '') + W.hint('g-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Treino', 'Determinante e sistema', 'Calcule $det [1\\ 2\\ 3;\\ 0\\ 1\\ 4;\\ 5\\ 6\\ 0]$ (Sarrus).', [
  ['Diagonais principais', '$1·1·0 + 2·4·5 + 3·0·6 = 0 + 40 + 0 = 40$'],
  ['Diagonais secundárias', '$3·1·5 + 1·4·6 + 2·0·0 = 15 + 24 + 0 = 39$'],
  ['Diferença', '$40 − 39 = 1$']
], 'O determinante vale <strong>1</strong>.', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em determinantes e sistemas', [
  ['Sarrus com sinais trocados', 'Principais <strong>somam</strong>; secundárias <strong>subtraem</strong>. Confira com uma linha de zeros (det = 0).'],
  ['$det(kA) = k·det A$', 'Para matriz de ordem $n$: $det(kA) = k^n det A$ (em 2×2, $k^2$).'],
  ['$D = 0$ não significa “sem solução”', 'Pode ser SPI (infinitas). Examine $D_x, D_y$ ou as equações.'],
  ['Cramer com $D = 0$', 'A regra só vale quando $D ≠ 0$.']
]));

b.push(quiz([
  { q: '$det [2\\ 1;\\ 5\\ 3]$ vale:', o: ['1', '−1', '11', '6'], a: 0 },
  { q: '$det [1\\ 2\\ 3;\\ 0\\ 1\\ 4;\\ 5\\ 6\\ 0]$ vale:', o: ['−1', '0', '1', '2'], a: 2 },
  { q: 'O sistema $x + y = 2$ e $2x + 2y = 5$ é:', o: ['possível determinado', 'possível indeterminado', 'impossível', 'tem 2 soluções'], a: 2 },
  { q: 'Se $A$ é $2 × 2$ com $det A = 4$, então $det(3A)$ vale:', o: ['12', '18', '36', '108'], a: 2 }
]));
b.push(fechamento([
  ['Determinante', '$ad − bc$; Sarrus no 3×3; trocar linhas muda o sinal; linhas proporcionais dão 0.'],
  ['Cramer', '$x_i = D_i/D$ para $D ≠ 0$; com $D = 0$, discuta.'],
  ['Geometria', 'Área $= ½|det|$; pontos colineares ⇔ $det = 0$.']
], 'O determinante é um resumo do sistema: único, vários ou nenhum.'));

out.push({ out: DIR + 'aula-2-determinantes-sistemas-cramer.html', html: K.deck({
  title: 'Determinantes e sistemas lineares — ENA · PROFMAT', brand: 'Matrizes e Determinantes', key: 'c20a2', meta: 'Matrizes · Aula 2 · Determinantes e sistemas', slides: b,
  extra: WJS + BIND + String.raw`
  function det3(m){ return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]); }
  var ids = []; for(var i = 0; i < 3; i++) for(var j = 0; j < 3; j++) ids.push('d' + i + j);
  bind(ids, function(){ var m = [0, 1, 2].map(function(i){ return [0, 1, 2].map(function(j){ return +$('d' + i + j).value; }); }); var p = m[0][0] * m[1][1] * m[2][2] + m[0][1] * m[1][2] * m[2][0] + m[0][2] * m[1][0] * m[2][1], q = m[0][2] * m[1][1] * m[2][0] + m[0][0] * m[1][2] * m[2][1] + m[0][1] * m[1][0] * m[2][2]; $('d-r').textContent = 'principais ' + p + ' − secundárias ' + q + ' = ' + (p - q); $('d-h').textContent = (p - q) === det3(m) ? 'Confere com a expansão por cofatores. Para [1 2 3; 0 1 4; 5 6 0]: det = 1.' : ''; });
  var ids2 = []; for(var i = 0; i < 3; i++) for(var j = 0; j < 4; j++) ids2.push('c' + i + j);
  bind(ids2, function(){ var A = [0, 1, 2].map(function(i){ return [0, 1, 2].map(function(j){ return +$('c' + i + j).value; }); }), b = [0, 1, 2].map(function(i){ return +$('c' + i + '3').value; }), D = det3(A); function col(k){ return A.map(function(r, i){ var s = r.slice(); s[k] = b[i]; return s; }); } var Dx = det3(col(0)), Dy = det3(col(1)), Dz = det3(col(2)); $('c-d').textContent = 'D = ' + D + ' · Dx = ' + Dx + ' · Dy = ' + Dy + ' · Dz = ' + Dz; if(D !== 0){ $('c-r').textContent = 'x = ' + nf(Dx / D, 4) + ' · y = ' + nf(Dy / D, 4) + ' · z = ' + nf(Dz / D, 4); $('c-h').textContent = 'D ≠ 0: solução única (SPD).'; } else { $('c-r').textContent = '—'; $('c-h').textContent = 'D = 0: sem solução ou infinitas; Cramer não se aplica diretamente.'; } });
  bind(['k-k', 'k-c'], function(){ var k = +$('k-k').value, c = +$('k-c').value, D = 2 - k; if(D !== 0){ var y = (2 * k - c) / (k - 2) * -1; var x = 2 - ((c - 2 * k) / (2 - k)); $('k-r').textContent = 'D = 2 − k = ' + D + ' ≠ 0: SPD. x = ' + nf(2 - (c - 2 * k) / (2 - k), 4) + ', y = ' + nf((c - 2 * k) / (2 - k), 4); $('k-h').textContent = 'Para k ≠ 2 há uma única solução.'; } else { $('k-r').textContent = c === 4 ? 'k = 2 e c = 4: SPI (infinitas soluções)' : 'k = 2 e c ≠ 4: SI (nenhuma solução)'; $('k-h').textContent = 'D = 0: equações proporcionais ou contraditórias.'; } });
  bind(['g-x1', 'g-y1', 'g-x2', 'g-y2', 'g-x3', 'g-y3'], function(){ var x1 = +$('g-x1').value, y1 = +$('g-y1').value, x2 = +$('g-x2').value, y2 = +$('g-y2').value, x3 = +$('g-x3').value, y3 = +$('g-y3').value, D = x1 * (y2 - y3) - y1 * (x2 - x3) + (x2 * y3 - x3 * y2); $('g-r').textContent = 'det = ' + D + ' · área = ½|det| = ' + nf(Math.abs(D) / 2, 4) + ' · ' + (D === 0 ? 'pontos COLINEARES' : 'formam triângulo'); $('g-h').textContent = 'Para (1,2), (4,6), (7,10): det = 0 (alinhados na reta y = 4x/3 + 2/3).'; });`
}) });

module.exports = out;
