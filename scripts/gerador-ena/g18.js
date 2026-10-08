// Unidade 18 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cDetetive } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/18-primeiro-grau-sistemas/', key = 'c18', brand = 'Equações, Inequações e Sistemas do 1º Grau', cap = '1º grau';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: '1º grau: <span>equações, inequações e sistemas</span>',
  lede: 'Item “b” do edital. A base de todas as outras equações: resolver, classificar, traduzir problemas, inequações com sinal invertido e sistemas lineares.',
  badges: ['Edital: item b', '(a − c)x = d − b', '× negativo inverte', 'SPD · SPI · SI'],
  curve: 'M20,160 C 100,150 180,110 260,100 C 340,90 420,50 480,28',
  sections: [
    ['Equação', 'Três casos', 'algebra', 'primary', fx('(a − c)x = d − b') + tb(['Caso', 'Resultado'], [['$a ≠ c$', 'uma solução'], ['$a = c$, $b ≠ d$', 'impossível'], ['$a = c$, $b = d$', 'infinitas']])],
    ['Equação', 'Frações e literais', 'scale', 'growth', p('MMC elimina denominadores. Isole a letra pedida tratando as outras como números.') + call('Exemplo', '$x/2 + x/3 = 10 ⇒ 5x = 60 ⇒ x = 12$.', 'success')],
    ['Problemas', 'Do texto à equação', 'book', 'decay', p('1) incógnita; 2) traduza cada frase; 3) monte; 4) resolva; 5) <strong>confira</strong>. “A é o triplo de B” → $A = 3B$.')],
    ['Inequação', 'A regra do sinal', 'warn', 'danger', p('Como equação, mas <strong>multiplicar/dividir por negativo inverte</strong> o sentido. Resposta em intervalo.') + call('Exemplo', '$−2x + 6 ≥ 0 ⇒ x ≤ 3 ⇒ (−∞, 3]$.', 'success')],
    ['Sistemas de inequações', 'Interseção', 'venn', 'success', p('“e” → interseção das soluções. Dupla desigualdade: opere em todos os lados.') + call('Exemplo', '$2x − 5 < 7$ e $x ≥ 1$ → $[1, 6)$.', 'success')],
    ['Sinais', 'Produto e quociente', 'chart', 'primary', p('Sinal de $ax + b$ muda na raiz. Multiplique os sinais numa reta; em quociente, o zero do denominador nunca entra.')],
    ['Sistemas 2×2', 'Métodos e classificação', 'link', 'growth', p('Substituição ou adição. SPD (retas se cruzam), SPI (coincidem), SI (paralelas).') + fx('D = a_1b_2 − a_2b_1')],
    ['Sistemas 3×3', 'Escalonamento', 'cube', 'decay', p('Elimine $x$ das duas últimas, depois $y$ da última; resolva de baixo para cima. Posto menor que 3 → SPI ou SI.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Não inverter o sinal da desigualdade ao dividir por negativo.', 'Cancelar $x$ e perder a solução $x = 0$.', 'Forçar uma solução em equação impossível ($0 = 5$).', 'Traduzir “triplo” como “mais 3”.', 'Esquecer de conferir nas duas equações do sistema.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: '1º grau <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: equação com parênteses, maior inteiro de uma inequação, sistema de inequações, sistema linear e problema de idades.',
  final: 'Sinal, interseção e tradução: o que o 1º grau cobra.',
  questions: [
    { badge: 'Estilo ENA · equação', text: 'Considere a equação $5(x − 1) − 2(x + 3) = x + 7$.', cmd: 'O valor de $x$ é:', opts: ['7', '8', '9', '10', '11'], a: 2,
      sol: '<p>$5x − 5 − 2x − 6 = x + 7 ⇒ 3x − 11 = x + 7 ⇒ 2x = 18 ⇒ x = 9$.</p>' },
    { badge: 'Estilo ENA · inequação', text: 'Considere a inequação $3 − 2x > −10$.', cmd: 'O maior número <strong>inteiro</strong> que a satisfaz é:', opts: ['5', '6', '7', '8', '13'], a: 1,
      sol: '<p>$−2x > −13$; dividindo por $−2$ inverte-se: $x < {13|2} = 6,5$. O maior inteiro é $6$.</p>' },
    { badge: 'Estilo ENA · sistema de inequações', text: 'Considere o sistema de inequações $2x + 1 > −5$ e $3x − 2 ≤ 10$.', cmd: 'Quantos números inteiros o satisfazem?', opts: ['5', '6', '7', '8', '9'], a: 2,
      sol: '<p>Primeira: $x > −3$. Segunda: $x ≤ 4$. Interseção: $(−3, 4]$. Inteiros: $−2, −1, 0, 1, 2, 3, 4$ → <strong>7</strong>.</p>' },
    { badge: 'Estilo ENA · sistema linear', text: 'Os números $x$ e $y$ satisfazem $x + y = 15$ e $3x − y = 5$.', cmd: 'O valor de $x·y$ é:', opts: ['40', '45', '50', '56', '60'], a: 2,
      sol: '<p>Somando: $4x = 20 ⇒ x = 5$ e $y = 10$. Produto $= 50$.</p>' },
    { badge: 'Estilo ENA · idades', text: 'Ana tem o dobro da idade de Bia. Há 5 anos, a idade de Ana era o triplo da idade de Bia.', cmd: 'A idade atual de Ana é:', opts: ['16', '18', '20', '22', '24'], a: 2,
      sol: '<p>Bia: $b$; Ana: $2b$. Há 5 anos: $2b − 5 = 3(b − 5) ⇒ 2b − 5 = 3b − 15 ⇒ b = 10$. Ana tem $20$ anos.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Detetive do <span style="color:var(--growth);">1º grau</span>',
  subtitle: 'Cinco resoluções com <strong>uma linha errada</strong>: sinal da inequação, divisão por x, equação impossível, sistema e tradução do texto.',
  tpl: cDetetive({
    intro: 'Clique na primeira linha que contém o erro. Duas tentativas por caso.',
    final: 'Inverter, não cancelar x, aceitar o impossível, conferir e traduzir bem.',
    casos: [
      { titulo: 'Caso 1 · inequação', enunciado: 'Resolva $−2x + 6 ≥ 0$.', linhas: ['Passe o 6: $−2x ≥ −6$.', 'Divida por $−2$: $x ≥ 3$.', 'Solução: $[3, +∞)$.'], erro: 1,
        porque: 'Ao dividir por número <strong>negativo</strong> o sentido inverte: $x ≤ 3$. Solução correta: $(−∞, 3]$.' },
      { titulo: 'Caso 2 · cancelar x', enunciado: 'Resolva $x(x − 1) = x$.', linhas: ['Divido os dois lados por $x$: $x − 1 = 1$.', '$x = 2$.', 'Solução: $\\{2\\}$.'], erro: 0,
        porque: 'Dividir por $x$ <strong>perde a solução $x = 0$</strong> (e supõe $x ≠ 0$). Correto: $x^2 − 2x = 0 ⇒ x(x − 2) = 0 ⇒ x = 0$ ou $x = 2$.' },
      { titulo: 'Caso 3 · equação impossível', enunciado: 'Resolva $2(x + 3) = 2x + 6$.', linhas: ['Distribua: $2x + 6 = 2x + 6$.', 'Subtraindo $2x$ e $6$: $6 = 0$.', 'Logo a equação não tem solução.'], erro: 1,
        porque: 'Subtraindo $2x + 6$ dos dois lados obtém-se $0 = 0$, <strong>verdadeiro</strong> sempre: a equação é uma identidade (infinitas soluções).' },
      { titulo: 'Caso 4 · sistema', enunciado: 'Resolva $x + y = 10$ e $x − y = 4$.', linhas: ['Somando: $2x = 14$.', '$x = 7$.', 'Subtraindo (1ª − 2ª): $2y = 10 + 4 = 14$, logo $y = 7$.', 'Solução $(7, 7)$.'], erro: 2,
        porque: '$(x + y) − (x − y) = 2y$ e $10 − 4 = 6$, não $10 + 4$. Então $2y = 6$ e $y = 3$. Confira: $7 + 3 = 10$ ✓ e $7 − 3 = 4$ ✓.' },
      { titulo: 'Caso 5 · tradução', enunciado: 'A é o triplo de B e $A + B = 20$. Quanto vale B?', linhas: ['“A é o triplo de B” → $A = B + 3$.', 'Então $B + 3 + B = 20$.', '$B = 8,5$.'], erro: 0,
        porque: '“Triplo” é <strong>multiplicar por 3</strong>: $A = 3B$. Então $4B = 20$ e $B = 5$ (e $A = 15$).' }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: '1º grau: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas de equações, inequações e sistemas. Responda com número.',
  final: 'Equação, inequação e sistema: três ferramentas, o mesmo cuidado com o sinal.',
  problems: [
    { tag: 'Equação', q: 'Resolva $3(x − 2) = 2x + 5$. Qual o valor de $x$?', a: 11, hint: '$3x − 6 = 2x + 5$.', sol: '<p>$x = 11$.</p>' },
    { tag: 'Inequação', q: 'Qual o maior inteiro que satisfaz $2x − 5 < 7$?', a: 5, hint: '$x < 6$.', sol: '<p>$x < 6$: o maior inteiro é $5$.</p>' },
    { tag: 'Sistema', q: 'Em $x + y = 12$ e $x − y = 4$, qual o valor de $x$?', a: 8, hint: 'Some as equações.', sol: '<p>$2x = 16 ⇒ x = 8$.</p>' },
    { tag: 'Cédulas', q: 'Vinte cédulas de R$ 2 e R$ 5 somam R$ 70. Quantas são de R$ 5?', a: 10, hint: '$a + b = 20$ e $2a + 5b = 70$.', sol: '<p>$3b = 30 ⇒ b = 10$.</p>' },
    { tag: 'Sistema 3×3', q: 'Em $x + y + z = 6$, $x − y = 1$, $y − z = 1$, qual o valor de $z$?', a: 1, hint: '$x = y + 1$ e $z = y − 1$.', sol: '<p>$3y = 6 ⇒ y = 2$, $z = 1$.</p>' },
    { tag: 'Velocidades', q: 'Um barco faz 36 km a favor da correnteza em 2 h e volta em 3 h. Qual a velocidade do barco (km/h)?', a: 15, hint: '$b + c = 18$ e $b − c = 12$.', sol: '<p>$b = (18 + 12)/2 = 15$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
