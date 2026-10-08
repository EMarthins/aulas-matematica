// Unidade 20 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cDetetive } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/20-matrizes-determinantes/', key = 'c20', brand = 'Matrizes, Determinantes e Sistemas', cap = 'Matrizes';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'growth',
  h1: 'Matrizes e determinantes: <span>o bloco do Vol. 4</span>',
  lede: 'Bibliografia do edital (Iezzi/Hazzan, vol. 4): matrizes, produto, inversa, determinantes, regra de Cramer, discussão de sistemas e área por determinante.',
  badges: ['Vol. 4 · Iezzi/Hazzan', 'AB ≠ BA', 'D ≠ 0 ⇒ SPD', 'Área = ½|det|'],
  curve: 'M20,150 C 100,130 180,100 260,90 C 340,80 420,50 480,26',
  sections: [
    ['Matrizes', 'Tipos e ordem', 'grid', 'primary', p('Matriz $m × n$: $m$ linhas, $n$ colunas; $a_{ij}$: linha $i$, coluna $j$. Quadrada, identidade, nula, diagonal, simétrica ($A^t = A$).')],
    ['Operações', 'Soma e produto', 'scale', 'growth', fx('(AB)_{ij} = ∑ a_{ik}b_{kj}') + p('$(m×n)(n×p) = m×p$. <strong>$AB ≠ BA$</strong> em geral; $(AB)^t = B^tA^t$.')],
    ['Inversa', '2×2', 'target', 'decay', fx('A^{−1} = {1|ad − bc}[ d\\ −b ;\\ −c\\ a ]') + p('Existe só se $det A ≠ 0$. $A·A^{−1} = I$.')],
    ['Determinante', '2×2 e 3×3', 'check', 'success', fx('det = ad − bc') + p('Sarrus: diagonais principais menos secundárias. Trocar linhas muda o sinal; linhas proporcionais → 0; $det(kA) = k^n det A$.')],
    ['Cramer', 'Sistemas', 'link', 'primary', fx('x_i = {D_i|D}') + p('$D ≠ 0$: SPD. $D = 0$: examine — SPI (equações proporcionais) ou SI (contraditórias).')],
    ['Discussão', 'Com parâmetro', 'warn', 'danger', p('Calcule $D(k)$; os $k$ que anulam $D$ são os casos especiais. Ex.: $x + y = 2$, $kx + 2y = c$: $D = 2 − k$.')],
    ['Geometria', 'Área e alinhamento', 'triangle', 'growth', fx('A = ½|det[x_1\\ y_1\\ 1;\\ x_2\\ y_2\\ 1;\\ x_3\\ y_3\\ 1]|') + p('Pontos colineares ⇔ determinante nulo.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Multiplicar matrizes elemento a elemento.', 'Trocar a ordem do produto (AB ≠ BA).', 'Esquecer de mudar o sinal dos elementos fora da diagonal na inversa.', 'Sarrus: principais somam, secundárias subtraem.', 'Aplicar Cramer com $D = 0$.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Matrizes <span style="color:var(--growth);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: produto, inversa, Sarrus, Cramer e discussão de um sistema com parâmetro.',
  final: 'Linha × coluna, determinante e Cramer: o kit deste bloco.',
  questions: [
    { badge: 'Estilo ENA · produto', text: 'Sejam $A = [2\\ 1;\\ 0\\ 3]$ e $B = [1\\ 0;\\ 4\\ 1]$.', cmd: 'A soma dos elementos da matriz $AB$ é:', opts: ['18', '20', '22', '24', '26'], a: 2,
      sol: '<p>$AB = [2·1 + 1·4,\\ 2·0 + 1·1;\\ 0·1 + 3·4,\\ 0·0 + 3·1] = [6\\ 1;\\ 12\\ 3]$. Soma: $6 + 1 + 12 + 3 = 22$.</p>' },
    { badge: 'Estilo ENA · inversa', text: 'Seja $A = [3\\ 2;\\ 4\\ 3]$.', cmd: 'O elemento da 1ª linha e 2ª coluna de $A^{−1}$ é:', opts: ['2', '3', '−4', '−2', '4'], a: 3,
      sol: '<p>$det A = 9 − 8 = 1$; $A^{−1} = [3\\ −2;\\ −4\\ 3]$. O elemento pedido é $−2$.</p>' },
    { badge: 'Estilo ENA · Sarrus', text: 'Considere $M = [1\\ 2\\ 0;\\ 0\\ 1\\ 1;\\ 2\\ 0\\ 1]$.', cmd: 'O determinante de $M$ é:', opts: ['5', '−5', '0', '10', '4'], a: 0,
      sol: '<p>Principais: $1·1·1 + 2·1·2 + 0·0·0 = 5$. Secundárias: $0·1·2 + 1·1·0 + 2·0·1 = 0$. $det = 5 − 0 = 5$.</p>' },
    { badge: 'Estilo ENA · Cramer', text: 'Considere o sistema $x + 2y = 5$ e $3x − y = 1$.', cmd: 'O valor de $x + y$ é:', opts: ['2', '3', '4', '5', '6'], a: 1,
      sol: '<p>$D = −1 − 6 = −7$; $D_x = −5 − 2 = −7 ⇒ x = 1$; $D_y = 1 − 15 = −14 ⇒ y = 2$. $x + y = 3$.</p>' },
    { badge: 'Estilo ENA · discussão', text: 'Considere o sistema $x + ky = 1$ e $kx + y = 1$.', cmd: 'Para que valores de $k$ ele é possível e determinado?', opts: ['$k ≠ 1$', '$k ≠ −1$', 'qualquer $k$', '$k ≠ 1$ e $k ≠ −1$', '$k = 0$'], a: 3,
      sol: '<p>$D = 1 − k^2 ≠ 0 ⇔ k ≠ 1$ e $k ≠ −1$. (Para $k = 1$ as equações coincidem: SPI; para $k = −1$ ficam $x − y = 1$ e $−x + y = 1$: SI.)</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Detetive de <span style="color:var(--growth);">matrizes</span>',
  subtitle: 'Cinco resoluções com <strong>uma linha errada</strong>: produto, inversa, Sarrus, determinante de $kA$ e Cramer com $D = 0$.',
  tpl: cDetetive({
    intro: 'Clique na primeira linha que contém o erro. Duas tentativas por caso.',
    final: 'Linha × coluna, sinais da inversa, Sarrus, $k^n$ e a condição $D ≠ 0$.',
    casos: [
      { titulo: 'Caso 1 · produto', enunciado: 'Calcule $AB$ para $A = [1\\ 2;\\ 3\\ 4]$ e $B = [0\\ 1;\\ 1\\ 0]$.', linhas: ['O produto multiplica os elementos correspondentes:', '$AB = [1·0\\ \\ 2·1;\\ 3·1\\ \\ 4·0] = [0\\ 2;\\ 3\\ 0]$.'], erro: 0,
        porque: 'O produto é <strong>linha × coluna</strong>: $(AB)_{11} = 1·0 + 2·1 = 2$, $(AB)_{12} = 1·1 + 2·0 = 1$, $(AB)_{21} = 4$, $(AB)_{22} = 3$. $AB = [2\\ 1;\\ 4\\ 3]$.' },
      { titulo: 'Caso 2 · inversa', enunciado: 'Ache a inversa de $A = [2\\ 1;\\ 5\\ 3]$.', linhas: ['$det A = 2·3 − 1·5 = 1$.', 'Troco 2 e 3 de lugar e <strong>mantenho</strong> os sinais de 1 e 5.', '$A^{−1} = [3\\ 1;\\ 5\\ 2]$.'], erro: 1,
        porque: 'Os elementos fora da diagonal principal <strong>mudam de sinal</strong>: $A^{−1} = [3\\ −1;\\ −5\\ 2]$. Teste: $A·A^{−1} = I$.' },
      { titulo: 'Caso 3 · Sarrus', enunciado: 'Calcule $det [1\\ 0\\ 2;\\ 0\\ 1\\ 0;\\ 3\\ 0\\ 1]$.', linhas: ['Principais: $1·1·1 + 0 + 2·0·0 = 1$.', 'Secundárias: $2·1·3 + 0 + 0 = 6$.', '$det = 1 + 6 = 7$.'], erro: 2,
        porque: 'As secundárias são <strong>subtraídas</strong>: $det = 1 − 6 = −5$.' },
      { titulo: 'Caso 4 · det(kA)', enunciado: 'Se $A$ é $2 × 2$ e $det A = 5$, quanto vale $det(2A)$?', linhas: ['Multiplicar a matriz por 2 multiplica o determinante por 2.', '$det(2A) = 2·5 = 10$.'], erro: 0,
        porque: 'Em uma matriz de ordem $n$, $det(kA) = k^n det A$. Para $n = 2$: $det(2A) = 4·5 = 20$ (cada uma das 2 linhas fica multiplicada por 2).' },
      { titulo: 'Caso 5 · Cramer', enunciado: 'Resolva $x + y = 2$ e $2x + 2y = 5$.', linhas: ['$D = 1·2 − 2·1 = 0$.', 'Aplico Cramer: $x = D_x/D$.', 'Logo $x$ não existe: sistema impossível.'], erro: 1,
        porque: 'Cramer só vale com $D ≠ 0$. Com $D = 0$ examine as equações: a 2ª ($2x + 2y = 5$) contradiz o dobro da 1ª ($2x + 2y = 4$): sistema impossível — mas a conclusão vem da análise, não de dividir por zero.' }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Matrizes: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de determinantes, produto, Cramer e área. Responda com número.',
  final: 'Determinante é o número-chave: sistema, inversa e área nascem dele.',
  problems: [
    { tag: 'Det 2×2', q: 'Qual o determinante de $[2\\ 1;\\ 5\\ 3]$?', a: 1, hint: '$ad − bc$.', sol: '<p>$6 − 5 = 1$.</p>' },
    { tag: 'Produto', q: 'Com $A = [1\\ 2;\\ 0\\ 1]$ e $B = [1\\ 0;\\ 3\\ 1]$, qual o elemento $(AB)_{11}$?', a: 7, hint: '$1·1 + 2·3$.', sol: '<p>$7$.</p>' },
    { tag: 'Sarrus', q: 'Qual o determinante de $[1\\ 2\\ 3;\\ 0\\ 1\\ 4;\\ 5\\ 6\\ 0]$?', a: 1, hint: 'Principais 40; secundárias 39.', sol: '<p>$40 − 39 = 1$.</p>' },
    { tag: 'det(kA)', q: 'Se $A$ é $2 × 2$ e $det A = 4$, quanto vale $det(3A)$?', a: 36, hint: '$3^2·4$.', sol: '<p>$9·4 = 36$.</p>' },
    { tag: 'Cramer', q: 'Em $x + y = 10$ e $x − y = 4$, qual o valor de $x$?', a: 7, hint: '$D = −2$, $D_x = −14$.', sol: '<p>$x = −14/−2 = 7$.</p>' },
    { tag: 'Área', q: 'Qual a área do triângulo de vértices $(0,0)$, $(4,0)$ e $(0,3)$?', a: 6, hint: '$½|det|$ com $det = 12$.', sol: '<p>$½ · 12 = 6$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
