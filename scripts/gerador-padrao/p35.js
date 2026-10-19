// Matemática · 7º ano · 2º trimestre · Equações e inequações do 1º grau (base: slides "Equações e inequações" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '7° Ano', tri: 2, pasta: 'aulas/7-ano/2-tri/equacoes-e-inequacoes/', titulo: 'Equações e inequações do 1º grau', accent: 'decay', icon: 'algebra', key: 'm7p35', area: 'Matemática · 7º ano',
  aulas: [
    A('equacoes-do-1-grau', 'Equações do 1º grau',
      `A balança em ${co('primary')}equilíbrio</span>`,
      'Uma balança está em equilíbrio: de um lado, uma caixa de peso desconhecido $x$ mais $3$ kg; do outro, $12$ kg. Quanto pesa a caixa?',
      'balanca', [['equação'], ['incógnita', 'growth'], ['equivalência', 'decay']],
      ['Equação é uma igualdade com um valor desconhecido. A balança em equilíbrio é a melhor imagem para ela.', ['Qual valor de $x$ torna verdadeira a igualdade $x + 3 = 7$?', ['$3$', '$4$', '$10$', '$7$'], 1, '$4 + 3 = 7$.'], 'Pense em um número. Dobre-o e some $3$: deu $11$. Qual era o número?'],
      ['<strong>Identificar</strong> equação, incógnita e solução.', 'Usar os <strong>princípios de equivalência</strong> para resolver equações do 1º grau.', '<strong>Resolver problemas</strong> escrevendo uma equação.'],
      'O que você faz de um lado da igualdade, faça <strong>também</strong> do outro.',
      [['O que é uma equação', ['<strong>Equação</strong> é uma igualdade com uma <strong>incógnita</strong> (valor desconhecido), em geral $x$.', 'A <strong>solução</strong> (ou raiz) é o valor que torna a igualdade verdadeira.', 'Equação do 1º grau: a incógnita aparece com expoente $1$, como em $2x + 5 = 17$.'],
        fig('balanca', 'Ilustração original: balança de dois pratos.', '300px')],
       ['Princípios de equivalência', ['Somar ou subtrair o <strong>mesmo número</strong> nos dois lados não muda a solução.', 'Multiplicar ou dividir os dois lados pelo <strong>mesmo número diferente de zero</strong> também não.', 'Use isso para <strong>isolar</strong> o $x$.'],
        tbl(['Passo', '$2x + 5 = 17$'], [['subtrair $5$', '$2x = 12$'], ['dividir por $2$', '$x = 6$']])],
       ['Verificar e traduzir problemas', ['Sempre <strong>verifique</strong>: troque $x$ pela solução e confira a igualdade.', 'Para resolver problemas: defina a incógnita, escreva a equação, resolva e responda.', '“O triplo de um número mais $4$ é $25$” vira $3x + 4 = 25$.'],
        callout('Dica', 'Leia o problema devagar e escreva o que $x$ representa.', 'primary')]],
      [['Resolvendo $2x + 5 = 17$', 'Resolva $2x + 5 = 17$.', [['Subtraia $5$ dos dois lados', '$2x = 12$.'], ['Divida os dois lados por $2$', '$x = 6$.']], '$x = 6$', 'Confira: $2 · 6 + 5 = 17$.'],
       ['Com parênteses', 'Resolva $3(x - 2) = 15$.', [['Divida por $3$', '$x - 2 = 5$.'], ['Some $2$', '$x = 7$.']], '$x = 7$', 'Confira: $3 · (7 - 2) = 15$.']],
      ['A caixa na balança', 'Resolva $x + 3 = 12$ e diga quanto pesa a caixa.', ['Tire $3$ dos dois pratos.', '$x + 3 - 3 = 12 - 3$.', 'Interprete a resposta.'], '$x = 9$: a caixa pesa $9$ kg.'],
      [['A solução de $x + 8 = 15$ é:', ['$x = 23$', '$x = 7$', '$x = 8$', '$x = 15$'], 1, '$15 - 8 = 7$.'],
       ['A solução de $4x = 28$ é:', ['$x = 24$', '$x = 32$', '$x = 7$', '$x = 112$'], 2, '$28 ÷ 4 = 7$.'],
       ['A solução de $3x - 4 = 11$ é:', ['$x = 5$', '$x = 7$', '$x = 15$', '$x = 3$'], 0, '$3x = 15$ e $x = 5$.'],
       ['“O dobro de um número, mais $6$, é $20$.” A equação e a solução são:', ['$2x + 6 = 20$; $x = 7$', '$2x = 26$; $x = 13$', '$x + 12 = 20$; $x = 8$', '$2x + 6 = 20$; $x = 13$'], 0, '$2x = 14$ e $x = 7$.']],
      [[['Equação', 'Igualdade com incógnita; solução é o valor que a satisfaz.'], ['Equivalência', 'Fazer o mesmo nos dois lados.'], ['Verificação', 'Substitua a solução na equação original.']], 'Por que é permitido somar o mesmo número aos dois lados de uma equação?', 'Voltando à balança: $x + 3 = 12$ dá $x = 9$ kg.'],
      [['A solução de $x - 5 = 9$ é:', ['$4$', '$14$', '$-4$', '$45$'], 1], ['A solução de $5x = 40$ é:', ['$8$', '$35$', '$45$', '$200$'], 0], ['A solução de $2x + 1 = 9$ é:', ['$4$', '$5$', '$10$', '$8$'], 0]]),

    A('inequacoes-do-1-grau', 'Inequações do 1º grau',
      `Quando a igualdade vira ${co('primary')}desigualdade</span>`,
      'Com R&#36; 130,00, quantas camisetas de R&#36; 25,00 é possível comprar? Existe uma única resposta ou várias?',
      'dinheiro', [['inequação'], ['desigualdades', 'growth'], ['reta numérica', 'decay']],
      ['Nem toda situação tem uma única solução. Muitas vezes queremos saber “até quanto” ou “a partir de quanto”.', ['Qual valor satisfaz $x > 3$?', ['$2$', '$3$', '$5$', '$-1$'], 2, '$5 > 3$.'], 'Em quais valores de idade uma pessoa pode votar no Brasil? É um único número?'],
      ['<strong>Reconhecer</strong> inequações e seus símbolos ($<$, $>$, $≤$, $≥$).', '<strong>Resolver</strong> inequações do 1º grau (com atenção ao <strong>número negativo</strong>).', '<strong>Resolver problemas</strong> com inequações.'],
      'Ao <strong>multiplicar ou dividir por número negativo</strong>, o sentido da desigualdade <strong>se inverte</strong>.',
      [['Inequação e símbolos', ['<strong>Inequação</strong> é uma desigualdade com incógnita: $2x - 3 > 7$.', 'Símbolos: $<$ (menor), $>$ (maior), $≤$ (menor ou igual), $≥$ (maior ou igual).', 'A solução é, em geral, um <strong>conjunto de valores</strong>.'],
        tbl(['Símbolo', 'Lê-se'], [['$x > 3$', 'x maior que 3'], ['$x ≤ 5$', 'x menor ou igual a 5']])],
       ['Resolvendo', ['Use os mesmos princípios das equações: somar/subtrair e multiplicar/dividir os dois lados.', '<strong>Atenção</strong>: se multiplicar ou dividir por <strong>negativo</strong>, <strong>inverta</strong> o sinal da desigualdade.', 'Exemplo: $-2x < 8$ ⇒ $x > -4$.'],
        callout('Por quê?', '$3 < 5$, mas $-3 > -5$: multiplicar por $-1$ troca a ordem.', 'decay')],
       ['Representação na reta', ['Bolinha <strong>aberta</strong> (○) para $<$ e $>$: o número não entra.', 'Bolinha <strong>fechada</strong> (●) para $≤$ e $≥$: o número entra.', 'A solução de $x > 5$ é a semirreta à direita de $5$.'],
        tbl(['Solução', 'Representação'], [['$x > 5$', '○ em $5$, para a direita'], ['$x ≤ 2$', '● em $2$, para a esquerda']])]],
      [['Resolvendo uma inequação', 'Resolva $2x - 3 > 7$.', [['Some $3$ aos dois lados', '$2x > 10$.'], ['Divida por $2$ (positivo)', '$x > 5$.']], '$x > 5$'],
       ['Com número negativo', 'Resolva $-2x < 8$.', [['Divida por $-2$', 'Atenção: inverte-se o sinal.'], ['Resultado', '$x > -4$.']], '$x > -4$', 'Teste: $x = 0$ dá $0 < 8$ (verdadeiro).']],
      ['As camisetas', 'Com R&#36; 130,00, quantas camisetas de R&#36; 25,00 é possível comprar?', ['Se $x$ é o número de camisetas, quanto se gasta?', 'A desigualdade é $25x ≤ 130$.', '$x$ precisa ser inteiro.'], '$25x ≤ 130$ ⇒ $x ≤ 5,2$. Como $x$ é inteiro, no máximo <strong>5 camisetas</strong>.'],
      [['A solução de $x + 4 > 10$ é:', ['$x > 6$', '$x > 14$', '$x < 6$', '$x > 4$'], 0, '$x > 10 - 4$.'],
       ['A solução de $3x ≤ 12$ é:', ['$x ≤ 36$', '$x ≤ 4$', '$x ≥ 4$', '$x ≤ 9$'], 1, '$x ≤ 12 ÷ 3$.'],
       ['A solução de $-x > 3$ é:', ['$x > -3$', '$x < -3$', '$x > 3$', '$x < 3$'], 1, 'Multiplicando por $-1$ inverte: $x < -3$.'],
       ['Qual é o maior inteiro que satisfaz $2x < 11$?', ['$4$', '$5$', '$6$', '$5,5$'], 1, '$x < 5,5$: o maior inteiro é $5$.']],
      [[['Inequação', 'Desigualdade com incógnita; solução é um conjunto.'], ['Resolução', 'Como a equação, mas inverta o sinal ao multiplicar/dividir por negativo.'], ['Reta', '○ não inclui o número; ● inclui.']], 'Por que, em uma compra, a resposta de uma inequação como $25x ≤ 130$ precisa ser um inteiro?', 'Voltando às camisetas: $x ≤ 5,2$; compram-se no máximo $5$.'],
      [['A solução de $x - 2 < 5$ é:', ['$x < 7$', '$x < 3$', '$x > 7$', '$x < -3$'], 0], ['A solução de $4x > 20$ é:', ['$x > 5$', '$x > 80$', '$x < 5$', '$x > 16$'], 0], ['A solução de $-3x ≤ 9$ é:', ['$x ≤ -3$', '$x ≥ -3$', '$x ≥ 3$', '$x ≤ 3$'], 1]])
  ]
});
