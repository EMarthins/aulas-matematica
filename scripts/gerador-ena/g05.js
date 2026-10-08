// Unidade 5 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cDetetive } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/05-algebra/', key = 'c5', brand = 'Álgebra', cap = 'Capítulo 5';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Álgebra: <span>a ferramenta número 1</span>',
  lede: 'Produtos notáveis, fatoração, potências, radicais, módulo e ordem: aparece direta ou escondida em quase toda questão do ENA.',
  badges: ['(a+b)² = a²+2ab+b²', 'a²+b² = (a+b)²−2ab', '√(x²) = |x|', 'Números de teste'],
  curve: 'M20,150 C 120,160 200,110 280,80 C 360,50 420,40 480,22',
  sections: [
    ['Aula 1', 'Quadrados', 'scale', 'primary', fx('(a ± b)^2 = a^2 ± 2ab + b^2') + fx('(a + b)(a − b) = a^2 − b^2') + call('Cálculo mental', '$103·97 = 100^2 − 3^2 = 9991$.', 'success')],
    ['Aula 1', 'Cubos e trinômios', 'chart', 'growth', fx('(a ± b)^3 = a^3 ± 3a^2b + 3ab^2 ± b^3') + fx('a^3 ± b^3 = (a ± b)(a^2 ∓ ab + b^2)') + fx('x^2 + (p+q)x + pq = (x+p)(x+q)')],
    ['Aula 1', 'Soma e produto', 'link', 'decay', fx('x^2 + y^2 = S^2 − 2P') + fx('(x − y)^2 = S^2 − 4P') + fx('x^3 + y^3 = S^3 − 3PS') + call('Retângulo', 'perímetro 16 e área 14 → $d^2 = 64 − 28 = 36$.', 'success')],
    ['Aula 1', 'Com inversos', 'target', 'primary', fx('x^2 + {1|x^2} = (x + {1|x})^2 − 2') + fx('{1|x} + {1|y} = {x+y|xy}') + call('Sempre positivo', '$x^2 + x + 1 > 0$ (Δ < 0).', 'success')],
    ['Aula 2', 'Potências', 'clock', 'growth', fx('a^m·a^n = a^{m+n}   (a^m)^n = a^{mn}   a^{−n} = {1|a^n}') + fx('a^{m/n} = √[n]{a^m}') + call('ENA 2025 Q19', '$32^{3/7} = 2^{15/7}$; converta tudo para base 2.', 'success')],
    ['Aula 2', 'Radicais', 'coin', 'decay', fx('√{50} = 5√2   {1|√a} = {√a|a}') + fx('{1|a + √b} = {a − √b|a^2 − b}') + call('Cuidado', '$√{a+b} ≠ √a + √b$.', '')],
    ['Aula 2', 'Módulo', 'check', 'primary', tb(['Forma', 'Equivale a'], [['$∣x∣ = k$', '$x = ±k$'], ['$∣x∣ < k$', '$−k < x < k$'], ['$∣x∣ > k$', '$x < −k$ ou $x > k$']]) + p('$√{x^2} = ∣x∣$; $∛{x^3} = x$.')],
    ['Aula 2', 'Ordem', 'up', 'success', tb(['Se', 'Então'], [['$0 < a < 1$', '$a^2 < a < √a$'], ['$0 < a < b$', '$a^2 < ab < b^2$ e $1/a > 1/b$']]) + call('MA ≥ MG', '$(a+b)/2 ≥ √{ab}$ para $a, b ≥ 0$.', 'success')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['$(a + b)^2 ≠ a^2 + b^2$: falta o $2ab$.', '$−3^2 = −9$ mas $(−3)^2 = 9$; torre de potências $2^{5^3} ≠ (2^5)^3$.', '$√{x^2} = ∣x∣$, não $x$ (índice par).', 'Cancelar termos em vez de fatores em frações algébricas.', 'Em “ordem crescente”: sempre teste números e descarte alternativas.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Álgebra <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: soma e produto, racionalização, ordem crescente, equação modular e identidade com raízes.',
  final: 'Identidades, módulo e números de teste: com elas, a álgebra deixa de ser conta e vira estratégia.',
  questions: [
    { badge: 'Estilo ENA · soma e produto', text: 'Sejam $x$ e $y$ números reais tais que $x + y = 9$ e $xy = 14$.', cmd: 'O valor de $x^2 + y^2$ é:', opts: ['45', '49', '53', '67', '81'], a: 2,
      sol: '<p>$x^2 + y^2 = (x + y)^2 − 2xy = 81 − 28 = 53$.</p>' },
    { badge: 'Estilo ENA · racionalização', text: 'Considere o número ${4|√7 − √3}$.', cmd: 'Racionalizando o denominador, obtemos:', opts: ['$√7 − √3$', '$√7 + √3$', '$4(√7 + √3)$', '${√7 + √3|4}$', '$2√7$'], a: 1,
      sol: '<p>Multiplique por $√7 + √3$: ${4(√7 + √3)|7 − 3} = √7 + √3$.</p>' },
    { badge: 'Estilo ENA · ordem crescente', text: 'Sejam $0 < a < b < 1$.', cmd: 'Qual das sequências abaixo está em <strong>ordem crescente</strong>?', opts: ['$a^2,\\ ab,\\ b^2,\\ b$', '$ab,\\ a^2,\\ b^2,\\ b$', '$a^2,\\ b^2,\\ ab,\\ b$', '$a^2,\\ ab,\\ b,\\ b^2$', '$b^2,\\ ab,\\ a^2,\\ b$'], a: 0,
      sol: '<p>Como $0 < a < b$: $a^2 < ab < b^2$. Como $b < 1$: $b^2 < b$. Logo $a^2 < ab < b^2 < b$. Teste com $a = 0,2$ e $b = 0,5$: $0,04 < 0,1 < 0,25 < 0,5$ ✓.</p>' },
    { badge: 'Estilo ENA · equação modular', text: 'Considere a equação $∣2x − 6∣ = x + 3$ nos reais.', cmd: 'O conjunto-solução é:', opts: ['$\\{9\\}$', '$\\{1\\}$', '$\\{1, 9\\}$', '$\\{−3, 9\\}$', 'vazio'], a: 2,
      sol: '<p>Exigimos $x + 3 ≥ 0$. Caso 1: $2x − 6 = x + 3 ⇒ x = 9$ (e $12 ≥ 0$ ✓). Caso 2: $2x − 6 = −x − 3 ⇒ x = 1$ (e $4 ≥ 0$ ✓). Solução: $\\{1, 9\\}$.</p>' },
    { badge: 'Estilo ENA · identidade com raízes', text: 'Considere a expressão $(√3 + √2)^2 + (√3 − √2)^2$.', cmd: 'Seu valor é:', opts: ['5', '6', '8', '10', '12'], a: 3,
      sol: '<p>$(a + b)^2 + (a − b)^2 = 2a^2 + 2b^2$. Com $a = √3$, $b = √2$: $2·3 + 2·2 = 10$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: '',
  h1: 'Caça-erros de <span style="color:var(--primary);">álgebra</span>',
  subtitle: 'Cinco resoluções com <strong>uma linha errada</strong> cada. Quem reconhece o erro dos outros erra menos na prova.',
  tpl: cDetetive({
    intro: 'Leia o enunciado e clique na primeira linha que contém o erro. Duas tentativas por caso.',
    final: 'Termo do meio, raiz da soma, conjugado, módulo e torre de potências: os cinco erros mais frequentes.',
    casos: [
      { titulo: 'Caso 1 · quadrado da soma', enunciado: 'Desenvolva $(x + 3)^2$.', linhas: ['$(x + 3)^2 = (x + 3)(x + 3)$.', '$= x^2 + 3^2 = x^2 + 9$.', 'Logo o desenvolvimento é $x^2 + 9$.'], erro: 1,
        porque: 'Faltou o termo do meio: $(x + 3)^2 = x^2 + 2·x·3 + 9 = x^2 + 6x + 9$. $(a + b)^2 ≠ a^2 + b^2$.' },
      { titulo: 'Caso 2 · raiz da soma', enunciado: 'Calcule $√{9 + 16}$.', linhas: ['$√{9 + 16} = √9 + √{16}$.', '$= 3 + 4 = 7$.', 'Logo $√{25} = 7$.'], erro: 0,
        porque: 'A raiz da soma <strong>não</strong> é a soma das raízes: $√{25} = 5$, e $3 + 4 = 7$ é diferente.' },
      { titulo: 'Caso 3 · racionalização', enunciado: 'Racionalize ${1|√5 − √2}$.', linhas: ['Multiplique numerador e denominador por $√5 − √2$.', 'O denominador vira $(√5 − √2)^2 = 7 − 2√{10}$.', 'Ainda há raízes no denominador: não funcionou.'], erro: 0,
        porque: 'Deve-se multiplicar pelo <strong>conjugado</strong> $√5 + √2$: $(√5 − √2)(√5 + √2) = 5 − 2 = 3$. Resultado: ${√5 + √2|3}$.' },
      { titulo: 'Caso 4 · módulo', enunciado: 'Resolva $∣x∣ < 3$.', linhas: ['$∣x∣ < 3$ significa distância até zero menor que 3.', 'Logo $x < −3$ ou $x > 3$.', 'Solução: $(−∞, −3) ∪ (3, +∞)$.'], erro: 1,
        porque: '“Distância menor que 3” é <strong>entre</strong> $−3$ e $3$: $−3 < x < 3$. A forma “$x < −3$ ou $x > 3$” é de $∣x∣ > 3$.' },
      { titulo: 'Caso 5 · torre de potências', enunciado: 'Calcule $2^{5^3}$.', linhas: ['$2^{5^3}$ é uma torre: o expoente é $5^3$.', '$2^{5^3} = (2^5)^3$.', '$= 2^{15}$.'], erro: 1,
        porque: 'A torre se resolve de cima para baixo: $5^3 = 125$, logo $2^{5^3} = 2^{125}$. $(2^5)^3 = 2^{15}$ é outra expressão.' }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Álgebra: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas de identidades, radicais, potências, módulo e ordem. Responda com número; duas tentativas e dica por etapa.',
  final: 'Identidades e números de teste resolvem a maior parte da álgebra do ENA.',
  problems: [
    { tag: 'Soma e produto', q: 'Se $x + y = 7$ e $xy = 10$, quanto vale $x^2 + y^2$?', a: 29, hint: '$(x + y)^2 − 2xy$.', sol: '<p>$49 − 20 = 29$.</p>' },
    { tag: 'Inversos', q: 'Se $x − {1|x} = 3$, quanto vale $x^2 + {1|x^2}$?', a: 11, hint: 'Eleve a igualdade ao quadrado.', sol: '<p>$(x − 1/x)^2 = x^2 − 2 + 1/x^2 = 9 ⇒ x^2 + 1/x^2 = 11$.</p>' },
    { tag: 'Radicais', q: 'Calcule $(√{50} + √{18})^2$.', a: 128, hint: '$√{50} = 5√2$ e $√{18} = 3√2$.', sol: '<p>$(5√2 + 3√2)^2 = (8√2)^2 = 64·2 = 128$.</p>' },
    { tag: 'Potências', q: 'Calcule $8^{2/3} · 9^{1/2}$.', a: 12, hint: '$8^{2/3} = (2^3)^{2/3}$.', sol: '<p>$4 · 3 = 12$.</p>' },
    { tag: 'Módulo', q: 'Quantas soluções reais tem $∣x − 1∣^3 + 5∣x − 1∣^2 + 6∣x − 1∣ = 0$?', a: 1, hint: 'Cada parcela é $≥ 0$: a soma só é zero se todas forem zero.', sol: '<p>$∣x − 1∣ = 0 ⇒ x = 1$: <strong>1</strong> solução.</p>' },
    { tag: 'Ordem', q: 'Para $a = 0,25$, quanto vale $√a$?', a: 0.5, tol: 0.001, hint: '$0,5^2 = 0,25$.', sol: '<p>$√{0,25} = 0,5$. Note: $a^2 = 0,0625 < a = 0,25 < √a = 0,5$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
