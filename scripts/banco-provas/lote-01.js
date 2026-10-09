// Lote 01 do banco autoral do fazedor de prova: questões ORIGINAIS de 9º Ano e 1º Ano (Matemática).
// Idempotente: remove as questões bp9-* / bp1-* de app/banco-provas.json e grava de novo.
//   node scripts/banco-provas/lote-01.js
const fs = require('fs'), path = require('path');
const arq = path.join(__dirname, '../../app/banco-provas.json');
const M = 'Matemática', F = 'Banco do professor';
const Q = [];
const add = o => Q.push(Object.assign({ materia: M, fonte: F, dificuldade: 2, pontos: 1 }, o));
const T = (t, ok) => ({ t, ok: !!ok });
const S9 = '9º Ano', S1 = '1º Ano';

// ---------- figuras SVG ----------
const SV = (vb, inner) => `<svg viewBox='${vb}' xmlns='http://www.w3.org/2000/svg' font-family='Archivo,Arial,sans-serif' font-size='17'>${inner}</svg>`;
const escada = SV('0 0 230 160', `<line x1='40' y1='18' x2='40' y2='130' stroke='#111' stroke-width='5'/><line x1='40' y1='130' x2='215' y2='130' stroke='#111' stroke-width='2'/><line x1='112' y1='130' x2='40' y2='34' stroke='#111' stroke-width='3' stroke-linecap='round'/><path d='M52 130v-12h-12' fill='none' stroke='#111' stroke-width='1.5'/><text x='92' y='70' font-style='italic'>10 m</text><text x='76' y='148' text-anchor='middle'>6 m</text><text x='30' y='86' text-anchor='end' font-style='italic'>h</text>`);
const tri30 = SV('0 0 220 150', `<polygon points='25,125 155,125 155,50' fill='none' stroke='#111' stroke-width='2' stroke-linejoin='round'/><path d='M143 125v-12h12' fill='none' stroke='#111' stroke-width='1.5'/><text x='80' y='80'>10</text><text x='52' y='120'>30°</text><text x='166' y='92' font-style='italic'>x</text>`);
const cx = 110, cy = 85, r = 60, pt = a => [(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), (cy - r * Math.sin(a * Math.PI / 180)).toFixed(1)];
const A = pt(230), B = pt(310), C = pt(90);
const circ = SV('0 0 220 170', `<circle cx='${cx}' cy='${cy}' r='${r}' fill='none' stroke='#111' stroke-width='2'/><g stroke='#111' stroke-width='1.6'><line x1='${cx}' y1='${cy}' x2='${A[0]}' y2='${A[1]}'/><line x1='${cx}' y1='${cy}' x2='${B[0]}' y2='${B[1]}'/><line x1='${C[0]}' y1='${C[1]}' x2='${A[0]}' y2='${A[1]}'/><line x1='${C[0]}' y1='${C[1]}' x2='${B[0]}' y2='${B[1]}'/></g><circle cx='${cx}' cy='${cy}' r='2.5' fill='#111'/><text x='${cx + 5}' y='${cy - 4}' font-style='italic'>O</text><text x='${+A[0] - 14}' y='${+A[1] + 14}' font-style='italic'>A</text><text x='${+B[0] + 6}' y='${+B[1] + 14}' font-style='italic'>B</text><text x='${+C[0] - 4}' y='${+C[1] - 6}' font-style='italic'>C</text><text x='${cx}' y='${cy + 30}' text-anchor='middle'>80°</text>`);

/* =================== 9º ANO =================== */
add({ id: 'bp9-reais-01', tipo: 'mc', serie: S9, unidade: 'Números reais', topicos: ['irracional', 'racional', 'raiz'], dificuldade: 1,
  enunciado: 'Qual dos números abaixo é irracional?',
  alternativas: [T('$0,25$'), T('$√{16}$'), T('${22|7}$'), T('$√5$', 1), T('$3,666…$')],
  resolucao: '$0,25 = {1|4}$, $√{16} = 4$, ${22|7}$ e $3,666… = {11|3}$ são racionais (razão de inteiros). Já $√5$ não é raiz exata e tem infinitas casas decimais sem período: é irracional.' });
add({ id: 'bp9-notcien-01', tipo: 'mc', serie: S9, unidade: 'Notação científica', topicos: ['potência de 10', 'notação científica'], dificuldade: 1,
  enunciado: 'O número $0,000045$, escrito em notação científica, é:',
  alternativas: [T('$4,5 · 10^{-5}$', 1), T('$4,5 · 10^{5}$'), T('$4,5 · 10^{-4}$'), T('$4,5 · 10^{4}$'), T('$45 · 10^{-5}$')],
  resolucao: 'Deslocando a vírgula 5 casas para a direita obtemos $4,5$; logo $0,000045 = 4,5 · 10^{-5}$. (A última opção vale $4,5 · 10^{-4}$.)' });
add({ id: 'bp9-pot-02', tipo: 'mc', serie: S9, unidade: 'Potenciação e radiciação', topicos: ['propriedades das potências'], dificuldade: 1,
  enunciado: 'O valor de $(2^3)^2 ÷ 2^4$ é:',
  alternativas: [T('$2$'), T('$4$', 1), T('$8$'), T('$16$'), T('$32$')],
  resolucao: '$(2^3)^2 = 2^6$ e $2^6 ÷ 2^4 = 2^{6-4} = 2^2 = 4$.' });
add({ id: 'bp9-rad-01', tipo: 'vf', serie: S9, unidade: 'Potenciação e radiciação', topicos: ['raiz quadrada', 'raiz cúbica', 'propriedades'], dificuldade: 2,
  enunciado: 'Julgue as afirmações em verdadeiras (V) ou falsas (F):',
  afirmacoes: [T('$√{49} = 7$', 1), T('$√{a^2} = a$, para qualquer $a$ real.'), T('$∛{-8} = -2$', 1), T('$√2 · √8 = 4$', 1), T('$√{4 + 9} = 2 + 3$')],
  resolucao: 'V; F ($√{a^2} = |a|$; por exemplo, $a = -3$ dá $3$); V ($(-2)^3 = -8$); V ($√{2·8} = √{16} = 4$); F ($√{13} ≠ 5$).' });
add({ id: 'bp9-pn-01', tipo: 'mc', serie: S9, unidade: 'Produtos notáveis e fatoração', topicos: ['quadrado da soma', 'quadrado da diferença'], dificuldade: 2,
  enunciado: 'A expressão $(x + 3)^2 - (x - 3)^2$ é equivalente a:',
  alternativas: [T('$0$'), T('$12x$', 1), T('$18$'), T('$2x^2 + 18$'), T('$6x$')],
  resolucao: '$(x+3)^2 = x^2 + 6x + 9$ e $(x-3)^2 = x^2 - 6x + 9$. Subtraindo: $12x$.' });
add({ id: 'bp9-pn-02', tipo: 'assoc', serie: S9, unidade: 'Produtos notáveis e fatoração', topicos: ['produtos notáveis', 'desenvolvimento'], dificuldade: 1,
  enunciado: 'Associe cada expressão da coluna A ao seu desenvolvimento, na coluna B.',
  colunaA: ['$(a + b)^2$', '$(a - b)^2$', '$(a + b)(a - b)$', '$(a + b)^3$'],
  colunaB: ['$a^2 - b^2$', '$a^2 + 2ab + b^2$', '$a^2 - 2ab + b^2$', '$a^3 + 3a^2b + 3ab^2 + b^3$'], pares: [1, 2, 0, 3],
  resolucao: '1-b (quadrado da soma), 2-c (quadrado da diferença), 3-a (produto da soma pela diferença), 4-d (cubo da soma).' });
add({ id: 'bp9-fat-01', tipo: 'aberta', serie: S9, unidade: 'Produtos notáveis e fatoração', topicos: ['fatoração', 'evidência', 'diferença de quadrados'], dificuldade: 2, pontos: 1.5,
  enunciado: 'Fatore completamente a expressão $x^3 - 4x$ e, em seguida, use a forma fatorada para resolver a equação $x^3 - 4x = 0$.',
  resposta: { modo: 'linhas', n: 5 }, gabarito: '$x(x - 2)(x + 2)$; $x = 0$, $x = 2$ ou $x = -2$',
  resolucao: 'Evidência: $x^3 - 4x = x(x^2 - 4)$. Diferença de quadrados: $x^2 - 4 = (x-2)(x+2)$. Logo $x(x-2)(x+2) = 0$, e um produto é zero quando algum fator é zero: $x = 0$, $x = 2$ ou $x = -2$.' });
add({ id: 'bp9-eq2-02', tipo: 'mc', serie: S9, unidade: 'Equações do 2º grau', topicos: ['soma das raízes', 'relações de Girard'], dificuldade: 2,
  enunciado: 'A soma das raízes da equação $x^2 - 7x + 10 = 0$ é:',
  alternativas: [T('$2$'), T('$5$'), T('$7$', 1), T('$10$'), T('$-7$')],
  resolucao: 'Para $ax^2 + bx + c = 0$, a soma das raízes é $-{b|a} = {7|1} = 7$. Conferindo: as raízes são $2$ e $5$ (soma $7$, produto $10$).' });
add({ id: 'bp9-eq2-03', tipo: 'aberta', serie: S9, unidade: 'Equações do 2º grau', topicos: ['problema', 'área do retângulo', 'bhaskara'], dificuldade: 2, pontos: 2,
  enunciado: 'A área de um retângulo é $48 cm^2$ e o seu comprimento excede a largura em $2 cm$. Determine as dimensões do retângulo, mostrando a equação montada e sua resolução.',
  resposta: { modo: 'linhas', n: 7 }, gabarito: 'Largura $6$ cm e comprimento $8$ cm',
  resolucao: 'Largura $x$; comprimento $x + 2$. Então $x(x + 2) = 48 ⇒ x^2 + 2x - 48 = 0$. $Δ = 4 + 192 = 196$, $x = {-2 +- 14|2}$, ou seja, $x = 6$ ou $x = -8$. Como a largura é positiva, $x = 6$ cm e o comprimento é $8$ cm.' });
add({ id: 'bp9-pit-02', tipo: 'mc', serie: S9, unidade: 'Teorema de Pitágoras', topicos: ['aplicação', 'escada', 'problema'], dificuldade: 1,
  enunciado: 'Uma escada de $10 m$ de comprimento está apoiada em uma parede vertical, com o pé a $6 m$ da parede, como na figura. A altura $h$ que a escada alcança na parede é:',
  figura: { tipo: 'svg', svg: escada, largura: '68%' },
  alternativas: [T('$4 m$'), T('$6 m$'), T('$8 m$', 1), T('$12 m$'), T('$16 m$')],
  resolucao: 'Triângulo retângulo com hipotenusa $10$ e um cateto $6$: $h^2 + 6^2 = 10^2 ⇒ h^2 = 100 - 36 = 64 ⇒ h = 8$ m.' });
add({ id: 'bp9-sem-01', tipo: 'mc', serie: S9, unidade: 'Semelhança e proporção', topicos: ['semelhança', 'sombra', 'regra de três'], dificuldade: 1,
  enunciado: 'No mesmo instante, um poste de $4 m$ projeta uma sombra de $3 m$ e uma árvore projeta uma sombra de $12 m$. A altura da árvore é:',
  alternativas: [T('$9 m$'), T('$12 m$'), T('$14 m$'), T('$16 m$', 1), T('$18 m$')],
  resolucao: 'Os raios solares formam triângulos semelhantes: ${h|12} = {4|3}$, logo $h = {4·12|3} = 16$ m.' });
add({ id: 'bp9-trig-02', tipo: 'mc', serie: S9, unidade: 'Razões trigonométricas', topicos: ['seno', 'triângulo retângulo', '30 graus'], dificuldade: 2,
  enunciado: 'No triângulo retângulo da figura, a hipotenusa mede $10$ e um dos ângulos agudos mede $30°$. O comprimento $x$ do cateto oposto a esse ângulo é:',
  figura: { tipo: 'svg', svg: tri30, largura: '68%' },
  alternativas: [T('$5$', 1), T('$5√3$'), T('$5√2$'), T('$10$'), T('$10√3$')],
  resolucao: '$sen 30° = {x|10}$ e $sen 30° = {1|2}$, logo $x = 5$.' });
add({ id: 'bp9-ang-01', tipo: 'mc', serie: S9, unidade: 'Circunferência e ângulos', topicos: ['ângulo inscrito', 'ângulo central'], dificuldade: 2,
  enunciado: 'Na circunferência de centro $O$ da figura, o ângulo central $AÔB$ mede $80°$. O ângulo inscrito $AĈB$, que subtende o mesmo arco $AB$, mede:',
  figura: { tipo: 'svg', svg: circ, largura: '68%' },
  alternativas: [T('$20°$'), T('$40°$', 1), T('$80°$'), T('$100°$'), T('$160°$')],
  resolucao: 'O ângulo inscrito mede a metade do ângulo central correspondente ao mesmo arco: $80° ÷ 2 = 40°$.' });
add({ id: 'bp9-prob-02', tipo: 'soma', serie: S9, unidade: 'Probabilidade', topicos: ['urna', 'eventos', 'espaço amostral'], dificuldade: 2,
  enunciado: 'Uma urna contém $3$ bolas vermelhas, $2$ azuis e $5$ verdes, todas idênticas, exceto pela cor. Retira-se uma bola ao acaso. Some os números das afirmações corretas.',
  afirmacoes: [T('A probabilidade de sair bola vermelha é ${3|10}$.', 1), T('A probabilidade de sair bola azul é ${2|5}$.'), T('A probabilidade de sair bola verde é ${1|2}$.', 1), T('A probabilidade de sair bola amarela é $0$.', 1), T('A soma das probabilidades de sair vermelha, azul e verde é $1$.', 1)],
  resolucao: 'Há $10$ bolas. Vermelha: ${3|10}$ (01 ✓). Azul: ${2|10} = {1|5}$, e não ${2|5}$ (02 ✗). Verde: ${5|10} = {1|2}$ (04 ✓). Amarela: nenhum caso favorável, $0$ (08 ✓). ${3|10} + {2|10} + {5|10} = 1$ (16 ✓). Soma: $1 + 4 + 8 + 16 = 29$.' });
add({ id: 'bp9-est-03', tipo: 'mc', serie: S9, unidade: 'Estatística', topicos: ['mediana', 'moda', 'rol'], dificuldade: 1,
  enunciado: 'A mediana do conjunto de dados $3, 7, 5, 9, 12, 7$ é:',
  alternativas: [T('$5$'), T('$6$'), T('$7$', 1), T('$8$'), T('$9$')],
  resolucao: 'Em ordem crescente: $3, 5, 7, 7, 9, 12$. Como há $6$ valores, a mediana é a média dos dois centrais: ${7 + 7|2} = 7$.' });
add({ id: 'bp9-porc-01', tipo: 'mc', serie: S9, unidade: 'Porcentagem', topicos: ['aumento', 'desconto', 'fator de multiplicação'], dificuldade: 2,
  enunciado: 'Um produto custava R$ 200,00. Teve um aumento de $20%$ e, depois, um desconto de $20%$ sobre o novo preço. O preço final é:',
  alternativas: [T('R$ 200,00'), T('R$ 192,00', 1), T('R$ 208,00'), T('R$ 180,00'), T('R$ 240,00')],
  resolucao: 'Aumento de $20%$: $200 · 1,2 = 240$. Desconto de $20%$: $240 · 0,8 = 192$. Aumentar e descontar o mesmo percentual não devolve o preço original.' });
add({ id: 'bp9-prop-01', tipo: 'vf', serie: S9, unidade: 'Razão e proporção', topicos: ['proporcionalidade inversa', 'escala', 'porcentagem'], dificuldade: 2,
  enunciado: 'Julgue as afirmações em verdadeiras (V) ou falsas (F):',
  afirmacoes: [T('Se $3$ operários fazem uma obra em $12$ dias, $6$ operários, no mesmo ritmo, fazem a mesma obra em $6$ dias.', 1), T('Em grandezas inversamente proporcionais, a razão entre seus valores é constante.'), T('Em um mapa na escala $1 : 50 000$, $2 cm$ representam $1 km$ no terreno.', 1), T('$10%$ de $10%$ é igual a $20%$.')],
  resolucao: 'V (dobrando os operários, o tempo cai pela metade). F (em grandezas inversamente proporcionais é o <b>produto</b> que é constante). V ($2 · 50 000 = 100 000 cm = 1 km$). F ($0,1 · 0,1 = 0,01 = 1%$).' });
add({ id: 'bp9-fa-03', tipo: 'mc', serie: S9, unidade: 'Função afim', topicos: ['f(x)', 'valor numérico'], dificuldade: 1,
  enunciado: 'Sendo $f(x) = 3x - 2$, o valor de $f(4) - f(1)$ é:',
  alternativas: [T('$3$'), T('$6$'), T('$9$', 1), T('$10$'), T('$12$')],
  resolucao: '$f(4) = 12 - 2 = 10$ e $f(1) = 3 - 2 = 1$. Logo $f(4) - f(1) = 9$.' });
add({ id: 'bp9-vol-01', tipo: 'aberta', serie: S9, unidade: 'Volumes', topicos: ['paralelepípedo', 'litros', 'unidades de medida'], dificuldade: 1,
  enunciado: 'Uma caixa-d’água tem a forma de um paralelepípedo com $2 m$ de comprimento, $1,5 m$ de largura e $1 m$ de altura. Calcule sua capacidade em litros ($1 "m"^3 = 1000$ litros).',
  resposta: { modo: 'linhas', n: 4 }, gabarito: '$3 "m"^3 = 3000$ litros',
  resolucao: '$V = 2 · 1,5 · 1 = 3 "m"^3$. Como $1 "m"^3 = 1000$ L, a capacidade é $3000$ litros.' });

/* =================== 1º ANO =================== */
add({ id: 'bp1-conj-01', tipo: 'mc', serie: S1, unidade: 'Conjuntos', topicos: ['união', 'interseção', 'número de elementos'], dificuldade: 1,
  enunciado: 'Dados $A = \\{1, 2, 3, 4\\}$ e $B = \\{3, 4, 5\\}$, o número de elementos de $A ∪ B$ é:',
  alternativas: [T('$3$'), T('$4$'), T('$5$', 1), T('$6$'), T('$7$')],
  resolucao: '$A ∪ B = \\{1, 2, 3, 4, 5\\}$, com $5$ elementos. (Ou: $n(A) + n(B) - n(A ∩ B) = 4 + 3 - 2 = 5$.)' });
add({ id: 'bp1-conj-02', tipo: 'mc', serie: S1, unidade: 'Conjuntos', topicos: ['diagrama de Venn', 'problema', 'inclusão e exclusão'], dificuldade: 2,
  enunciado: 'Em uma turma de $40$ alunos, $25$ gostam de Matemática, $18$ gostam de Português e $8$ gostam das duas disciplinas. Quantos alunos não gostam de nenhuma delas?',
  alternativas: [T('$3$'), T('$5$', 1), T('$7$'), T('$8$'), T('$10$')],
  resolucao: 'Pelo menos uma: $25 + 18 - 8 = 35$ alunos. Nenhuma: $40 - 35 = 5$.' });
add({ id: 'bp1-int-01', tipo: 'vf', serie: S1, unidade: 'Conjuntos numéricos e intervalos', topicos: ['intervalos', 'ℕ ℤ ℚ ℝ', 'união', 'interseção'], dificuldade: 2,
  enunciado: 'Julgue as afirmações em verdadeiras (V) ou falsas (F):',
  afirmacoes: [T('$[1, 4] ∩ (2, 6) = (2, 4]$', 1), T('$√2 ∈ ℚ$'), T('$-3 ∈ ℕ$'), T('$ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ$', 1), T('$(1, 3) ∪ [3, 5] = (1, 5]$', 1)],
  resolucao: 'V (parte comum: de $2$, aberto, a $4$, fechado). F ($√2$ é irracional). F ($-3$ é inteiro negativo, não natural). V (cada conjunto está contido no seguinte). V (o $3$ é completado pelo segundo intervalo).' });
add({ id: 'bp1-dom-01', tipo: 'mc', serie: S1, unidade: 'Funções', topicos: ['domínio', 'raiz quadrada'], dificuldade: 1,
  enunciado: 'O domínio da função real $f(x) = √{x - 3}$ é o conjunto dos números reais tais que:',
  alternativas: [T('$x > 3$'), T('$x >= 3$', 1), T('$x <= 3$'), T('$x != 3$'), T('$x$ qualquer')],
  resolucao: 'A raiz quadrada exige radicando não negativo: $x - 3 >= 0 ⇒ x >= 3$.' });
add({ id: 'bp1-fa-04', tipo: 'mc', serie: S1, unidade: 'Função afim', topicos: ['lei da função', 'coeficiente angular', 'reta por dois pontos'], dificuldade: 2,
  enunciado: 'O gráfico de uma função afim $f$ passa pelos pontos $(1, 3)$ e $(3, 7)$. O valor de $f(10)$ é:',
  alternativas: [T('$19$'), T('$20$'), T('$21$', 1), T('$22$'), T('$23$')],
  resolucao: 'Coeficiente angular: $a = {7 - 3|3 - 1} = 2$. De $f(1) = 3$: $2 + b = 3 ⇒ b = 1$, logo $f(x) = 2x + 1$ e $f(10) = 21$.' });
add({ id: 'bp1-fa-05', tipo: 'aberta', serie: S1, unidade: 'Função afim', topicos: ['problema', 'lei da função', 'táxi'], dificuldade: 2, pontos: 2,
  enunciado: 'Uma corrida de táxi custa R$ 5,00 de bandeirada mais R$ 2,50 por quilômetro rodado. Seja $x$ a distância percorrida, em km.\n(a) Escreva a lei da função $f$ que dá o preço da corrida.\n(b) Calcule o preço de uma corrida de $12 km$.\n(c) Quantos quilômetros se pode percorrer com R$ 40,00?',
  resposta: { modo: 'linhas', n: 7 }, gabarito: '(a) $f(x) = 5 + 2,5x$; (b) R$ 35,00; (c) $14$ km',
  resolucao: '(a) $f(x) = 5 + 2,5x$. (b) $f(12) = 5 + 30 = 35$, ou seja, R$ 35,00. (c) $5 + 2,5x = 40 ⇒ 2,5x = 35 ⇒ x = 14$ km.' });
add({ id: 'bp1-fq-02', tipo: 'mc', serie: S1, unidade: 'Função quadrática', topicos: ['vértice', 'xv', 'yv'], dificuldade: 2,
  enunciado: 'O vértice da parábola que representa a função $f(x) = x^2 - 6x + 5$ é o ponto:',
  alternativas: [T('$(3, -4)$', 1), T('$(-3, -4)$'), T('$(3, 4)$'), T('$(6, 5)$'), T('$(-3, 32)$')],
  resolucao: '$x_v = -{b|2a} = {6|2} = 3$ e $y_v = f(3) = 9 - 18 + 5 = -4$. Vértice: $(3, -4)$.' });
add({ id: 'bp1-fq-03', tipo: 'mc', serie: S1, unidade: 'Função quadrática', topicos: ['otimização', 'valor máximo', 'altura'], dificuldade: 2,
  enunciado: 'Uma bola é lançada para cima e sua altura, em metros, após $t$ segundos, é dada por $h(t) = -t^2 + 6t$. A altura máxima atingida pela bola é:',
  alternativas: [T('$3 m$'), T('$6 m$'), T('$9 m$', 1), T('$12 m$'), T('$18 m$')],
  resolucao: 'Como $a = -1 < 0$, o máximo ocorre no vértice: $t_v = -{6|-2} = 3$ s e $h(3) = -9 + 18 = 9$ m.' });
add({ id: 'bp1-fq-04', tipo: 'soma', serie: S1, unidade: 'Função quadrática', topicos: ['gráfico', 'raízes', 'vértice', 'concavidade'], dificuldade: 2,
  enunciado: 'O gráfico abaixo representa a função $f(x) = -x^2 + 4x - 3$. Some os números das afirmações corretas.',
  figura: { tipo: 'funcao', fs: [{ e: '-x^2+4x-3', rotulo: 'f' }], x: [-1, 5], y: [-5, 2], pontos: [{ x: 1, y: 0, rotulo: '1' }, { x: 3, y: 0, rotulo: '3' }, { x: 2, y: 1, rotulo: 'V' }], largura: '62%' },
  afirmacoes: [T('As raízes de $f$ são $1$ e $3$.', 1), T('O vértice da parábola é o ponto $(2, 1)$.', 1), T('A concavidade da parábola é voltada para baixo.', 1), T('$f(0) = 3$.'), T('O valor máximo de $f$ é $1$.', 1)],
  resolucao: 'Raízes: $-x^2 + 4x - 3 = 0 ⇒ x = 1$ ou $x = 3$ (01 ✓). Vértice: $x_v = 2$ e $y_v = -4 + 8 - 3 = 1$ (02 ✓). $a = -1 < 0$: concavidade para baixo (04 ✓). $f(0) = -3$, e não $3$ (08 ✗). Valor máximo $y_v = 1$ (16 ✓). Soma: $1 + 2 + 4 + 16 = 23$.' });
add({ id: 'bp1-mod-01', tipo: 'mc', serie: S1, unidade: 'Função modular', topicos: ['módulo', 'conjunto imagem', 'gráfico'], dificuldade: 2,
  enunciado: 'A figura mostra o gráfico da função $f(x) = |x - 2|$. O conjunto imagem de $f$ é:',
  figura: { tipo: 'funcao', fs: [{ e: 'abs(x-2)', rotulo: 'f' }], x: [-3, 7], y: [-1, 6], pontos: [{ x: 2, y: 0, rotulo: '(2, 0)' }], largura: '60%' },
  alternativas: [T('$[0, +∞)$', 1), T('ℝ'), T('$[2, +∞)$'), T('$(-∞, 0]$'), T('$(0, +∞)$')],
  resolucao: 'Um módulo nunca é negativo e assume o valor $0$ em $x = 2$; para $x$ grande, cresce sem limite. Imagem: $[0, +∞)$.' });
add({ id: 'bp1-exp-01', tipo: 'mc', serie: S1, unidade: 'Função exponencial', topicos: ['equação exponencial', 'potências de 2'], dificuldade: 1,
  enunciado: 'Se $2^{x+1} = 32$, então o valor de $x$ é:',
  alternativas: [T('$3$'), T('$4$', 1), T('$5$'), T('$6$'), T('$16$')],
  resolucao: '$32 = 2^5$, então $x + 1 = 5$ e $x = 4$.' });
add({ id: 'bp1-exp-02', tipo: 'mc', serie: S1, unidade: 'Função exponencial', topicos: ['crescimento', 'bactérias', 'modelagem'], dificuldade: 2,
  enunciado: 'Uma população de bactérias dobra a cada hora. Se havia $500$ bactérias inicialmente, o número delas após $4$ horas é:',
  alternativas: [T('$2000$'), T('$4000$'), T('$8000$', 1), T('$10 000$'), T('$16 000$')],
  resolucao: '$N(t) = 500 · 2^t$. Para $t = 4$: $500 · 16 = 8000$.' });
add({ id: 'bp1-log-01', tipo: 'mc', serie: S1, unidade: 'Logaritmos', topicos: ['definição', 'log base 2'], dificuldade: 1,
  enunciado: 'O valor de $log_{2} 32$ é:',
  alternativas: [T('$4$'), T('$5$', 1), T('$6$'), T('$16$'), T('$30$')],
  resolucao: '$log_{2} 32 = x ⇔ 2^x = 32$. Como $32 = 2^5$, $x = 5$.' });
add({ id: 'bp1-log-02', tipo: 'aberta', serie: S1, unidade: 'Logaritmos', topicos: ['equação logarítmica', 'condição de existência'], dificuldade: 2,
  enunciado: 'Resolva a equação $log_{3}(x + 1) = 2$, indicando a condição de existência.',
  resposta: { modo: 'linhas', n: 4 }, gabarito: '$x = 8$',
  resolucao: 'Condição de existência: $x + 1 > 0$, isto é, $x > -1$. Pela definição, $x + 1 = 3^2 = 9$, logo $x = 8$, que satisfaz a condição.' });
add({ id: 'bp1-pa-01', tipo: 'mc', serie: S1, unidade: 'Progressão aritmética', topicos: ['termo geral', 'razão'], dificuldade: 1,
  enunciado: 'Em uma progressão aritmética de primeiro termo $3$ e razão $4$, o décimo termo é:',
  alternativas: [T('$31$'), T('$36$'), T('$39$', 1), T('$40$'), T('$43$')],
  resolucao: '$a_{10} = a_1 + 9r = 3 + 9 · 4 = 39$.' });
add({ id: 'bp1-pa-02', tipo: 'mc', serie: S1, unidade: 'Progressão aritmética', topicos: ['soma dos termos', 'Gauss'], dificuldade: 1,
  enunciado: 'A soma $1 + 2 + 3 + … + 100$ é igual a:',
  alternativas: [T('$4950$'), T('$5000$'), T('$5050$', 1), T('$5100$'), T('$10 100$')],
  resolucao: '$S_n = {n(a_1 + a_n)|2} = {100 · 101|2} = 5050$.' });
add({ id: 'bp1-pg-01', tipo: 'mc', serie: S1, unidade: 'Progressão geométrica', topicos: ['termo geral', 'razão'], dificuldade: 1,
  enunciado: 'O quinto termo da progressão geométrica $(2, 6, 18, …)$ é:',
  alternativas: [T('$54$'), T('$108$'), T('$162$', 1), T('$486$'), T('$324$')],
  resolucao: 'Razão $q = 3$. $a_5 = a_1 · q^4 = 2 · 81 = 162$.' });
add({ id: 'bp1-dem-02', tipo: 'aberta', serie: S1, unidade: 'Progressão aritmética', topicos: ['demonstração', 'números ímpares', 'soma'], dificuldade: 3, pontos: 2,
  enunciado: 'Demonstre que a soma dos $n$ primeiros números ímpares positivos é igual a $n^2$, isto é, $1 + 3 + 5 + … + (2n - 1) = n^2$.',
  resposta: { modo: 'linhas', n: 8 }, gabarito: '$S_n = n^2$',
  resolucao: 'Os ímpares $1, 3, 5, …, 2n - 1$ formam uma PA de primeiro termo $1$, razão $2$ e $n$ termos, com último termo $a_n = 2n - 1$. Pela soma da PA: $S_n = {n(1 + 2n - 1)|2} = {n · 2n|2} = n^2$. ∎' });
add({ id: 'bp1-trig-02', tipo: 'mc', serie: S1, unidade: 'Trigonometria', topicos: ['relação fundamental', 'seno', 'cosseno'], dificuldade: 2,
  enunciado: 'Se $sen x = {3|5}$ e $x$ é um ângulo agudo, então $cos x$ vale:',
  alternativas: [T('${3|5}$'), T('${4|5}$', 1), T('${5|4}$'), T('${5|3}$'), T('${1|5}$')],
  resolucao: '$sen^2 x + cos^2 x = 1 ⇒ cos^2 x = 1 - {9|25} = {16|25}$. Como $x$ é agudo, $cos x > 0$ e $cos x = {4|5}$.' });
add({ id: 'bp1-geo-02', tipo: 'mc', serie: S1, unidade: 'Geometria plana', topicos: ['área', 'triângulo equilátero'], dificuldade: 2,
  enunciado: 'A área de um triângulo equilátero de lado $6$ é:',
  alternativas: [T('$9√3$', 1), T('$18√3$'), T('$36$'), T('$6√3$'), T('$9$')],
  resolucao: '$A = {l^2 √3|4} = {36√3|4} = 9√3$.' });
add({ id: 'bp1-fun-02', tipo: 'assoc', serie: S1, unidade: 'Funções', topicos: ['tipos de função', 'exponencial', 'logarítmica', 'quadrática', 'afim'], dificuldade: 2,
  enunciado: 'Associe cada função da coluna A à sua característica, na coluna B.',
  colunaA: ['$f(x) = 2^x$', '$f(x) = log_{2} x$', '$f(x) = -x^2 + 1$', '$f(x) = 3x + 1$'],
  colunaB: ['reta de coeficiente angular $3$', 'crescente e sempre positiva', 'parábola com concavidade voltada para baixo', 'crescente e definida apenas para $x > 0$'], pares: [1, 3, 2, 0],
  resolucao: '1-b (a exponencial de base $2$ é crescente e $2^x > 0$), 2-d (logaritmo só existe para $x > 0$), 3-c ($a = -1 < 0$), 4-a (função afim com $a = 3$).' });

// unidades fora do modo matemático (evita itálico): $10 m$ → $10$ m ; $48 cm^2$ → $48$ cm<sup>2</sup>
const SUP = { '^2': '<sup>2</sup>', '^3': '<sup>3</sup>' };
const un = v => typeof v === 'string'
  ? v.replace(/\$([-\d., ]+) ?(cm|km|m|L)(\^[23])?\$/g, (_, n, u, e) => '$' + n + '$ ' + u + (e ? SUP[e] : ''))
  : Array.isArray(v) ? v.map(un)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'svg' ? x : un(x)])) : v;
for (let i = 0; i < Q.length; i++) Q[i] = un(Q[i]);

// ---------- grava ----------
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
const base = j.questoes.filter(q => !/^bp[19]-/.test(q.id));
base.forEach(q => { if (q.figura && q.figura.tipo === 'svg') { q.figura.largura = '68%'; q.figura.svg = q.figura.svg.split("font-size='13'").join("font-size='17'"); } });
j.questoes = base.concat(Q);
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('lote 01:', Q.length, 'questões · banco autoral:', j.questoes.length);
