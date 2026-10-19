// Matemática · 6º ano · 2º trimestre · Operações com números decimais (base: slides "Operações com números decimais" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '6° Ano', tri: 2, pasta: 'aulas/6-ano/2-tri/operacoes-com-decimais/', titulo: 'Operações com números decimais', accent: 'success', icon: 'coin', key: 'm6p26', area: 'Matemática · 6º ano',
  aulas: [
    A('adicao-e-subtracao-de-decimais', 'Adição e subtração de números decimais',
      `Contas com ${co('primary')}dinheiro</span> e medidas`,
      'Você comprou um lanche de R&#36; 7,50 e um suco de R&#36; 4,25. Quanto gastou? Se pagou com R&#36; 20,00, qual foi o troco?',
      'dinheiro', [['soma'], ['subtração', 'growth'], ['vírgula alinhada', 'decay']],
      ['Somamos e subtraímos decimais o tempo todo: preço, troco, medidas.', ['Qual é o valor de $0,5 + 0,25$?', ['$0,30$', '$0,75$', '$0,525$', '$0,3$'], 1, '$0,50 + 0,25 = 0,75$.'], 'Quanto você paga por dois produtos de R&#36; 3,50 cada?'],
      ['<strong>Somar</strong> números decimais alinhando as vírgulas.', '<strong>Subtrair</strong> números decimais completando casas com zeros.', 'Resolver problemas de <strong>dinheiro e medidas</strong>.'],
      '<strong>Vírgula embaixo de vírgula</strong>: assim, cada casa fica alinhada com a sua parceira.',
      [['Adição', ['Escreva um número embaixo do outro, com <strong>vírgula embaixo de vírgula</strong>.', 'Complete com zeros as casas que faltam à direita.', 'Some como nos naturais e coloque a vírgula na mesma coluna.'],
        tbl(['', 'Parcelas'], [['', '$3,40$'], ['+', '$2,75$'], ['=', '<strong>$6,15$</strong>']])],
       ['Subtração', ['Também alinhe as vírgulas e complete com zeros: $10 = 10,00$.', 'Subtraia da direita para a esquerda, “emprestando” quando necessário.', 'Confira somando o resultado ao número que foi subtraído.'],
        tbl(['', 'Subtração'], [['', '$10,00$'], ['−', '$4,36$'], ['=', '<strong>$5,64$</strong>']])],
       ['Problemas com dinheiro', ['O <strong>troco</strong> é o valor pago menos o total da compra.', 'Estime antes: R&#36; 7,50 é perto de R&#36; 8 e R&#36; 4,25 é perto de R&#36; 4.', 'A resposta de dinheiro tem duas casas decimais.'],
        fig('dinheiro', 'Ilustração original: moedas e notas.', '280px')]],
      [['Somando decimais', 'Calcule $3,4 + 2,75$.', [['Complete as casas', '$3,40 + 2,75$.'], ['Some alinhando as vírgulas', '$340 + 275 = 615$ centésimos.'], ['Coloque a vírgula', '$6,15$.']], '$6,15$'],
       ['Subtraindo de um inteiro', 'Calcule $10 - 4,36$.', [['Escreva $10$ com casas', '$10,00$.'], ['Subtraia', '$1000 - 436 = 564$ centésimos.'], ['Coloque a vírgula', '$5,64$.']], '$5,64$', 'Confira: $5,64 + 4,36 = 10,00$.']],
      ['O lanche e o suco', 'Quanto custaram o lanche e o suco juntos? E qual foi o troco de R&#36; 20,00?', ['Some os dois preços.', '$7,50 + 4,25 = ?$', 'O troco é $20,00$ menos o total.'], '$7,50 + 4,25 = 11,75$ (gastou R&#36; 11,75) e $20,00 - 11,75 = 8,25$ (troco de R&#36; 8,25).'],
      [['O valor de $2,3 + 1,45$ é:', ['$3,48$', '$3,75$', '$2,75$', '$3,4$'], 1, '$2,30 + 1,45 = 3,75$.'],
       ['O valor de $8 - 3,6$ é:', ['$5,4$', '$4,4$', '$4,6$', '$5,6$'], 1, '$8,0 - 3,6 = 4,4$.'],
       ['O valor de $15,2 + 0,08$ é:', ['$15,10$', '$15,28$', '$16$', '$15,208$'], 1, '$15,20 + 0,08 = 15,28$.'],
       ['O valor de $7,5 - 2,25$ é:', ['$5,25$', '$5,35$', '$4,75$', '$5,75$'], 0, '$7,50 - 2,25 = 5,25$.']],
      [[['Alinhe', 'Vírgula embaixo de vírgula.'], ['Complete', 'Zeros à direita para igualar as casas.'], ['Confira', 'Some o resultado ao que foi subtraído.']], 'Por que precisamos alinhar as vírgulas antes de somar?', 'Voltando à compra: o total foi R&#36; 11,75 e o troco de R&#36; 20,00 foi R&#36; 8,25.'],
      [['O valor de $4,5 + 3,25$ é:', ['$7,75$', '$7,3$', '$8,75$', '$7,57$'], 0], ['O valor de $10 - 2,5$ é:', ['$8,5$', '$7,5$', '$7,0$', '$12,5$'], 1], ['O valor de $0,6 + 0,45$ é:', ['$0,51$', '$1,05$', '$1,5$', '$0,105$'], 1]]),

    A('multiplicacao-e-divisao-de-decimais', 'Multiplicação e divisão de números decimais',
      `Vezes e ${co('primary')}partes iguais</span> com vírgula`,
      'Um quilo de arroz custa R&#36; 4,80. Quanto custam $2,5$ kg? E se R&#36; 18,00 forem divididos igualmente entre $4$ pessoas, quanto cada uma recebe?',
      'calculadora', [['multiplicação'], ['divisão', 'growth'], ['× e ÷ por 10', 'decay']],
      ['Multiplicar e dividir decimais é parecido com o que você já faz com naturais; o cuidado é com a vírgula.', ['O valor de $0,5 · 4$ é:', ['$2$', '$0,2$', '$20$', '$2,5$'], 0, 'Metade de $4$ é $2$.'], 'Quanto é $0,1 · 0,1$? Estime antes de calcular.'],
      ['<strong>Multiplicar</strong> decimais contando as casas decimais.', '<strong>Dividir</strong> decimais igualando as casas.', 'Multiplicar e dividir por <strong>10, 100 e 1000</strong>.'],
      'Na multiplicação, conte as casas <strong>de cada fator</strong> e some; na divisão, iguale as casas antes de dividir.',
      [['Multiplicação', ['Multiplique como se fossem naturais, <strong>ignorando as vírgulas</strong>.', 'O produto tem tantas casas decimais quanto a <strong>soma</strong> das casas dos fatores.', '$2,5 · 4,8$: $25 · 48 = 1200$; $1 + 1 = 2$ casas ⇒ $12,00 = 12$.'],
        tbl(['Conta', 'Casas', 'Resultado'], [['$0,3 · 0,4$', '$1 + 1 = 2$', '$0,12$'], ['$1,2 · 3$', '$1 + 0 = 1$', '$3,6$']])],
       ['Divisão', ['Para dividir decimais, <strong>iguale o número de casas</strong> e corte as vírgulas.', '$7,5 ÷ 0,5 = 7,5 ÷ 0,5$: multiplicando os dois por $10$, fica $75 ÷ 5 = 15$.', 'Se o dividendo não for exato, acrescente a vírgula e zeros: $9 ÷ 4 = 2,25$.'],
        callout('Regra', 'Multiplicar dividendo e divisor pelo mesmo número não muda o quociente.', 'primary')],
       ['Por 10, 100 e 1000', ['Multiplicar por $10$, $100$, $1000$: desloque a vírgula para a <strong>direita</strong> (1, 2, 3 casas).', 'Dividir por $10$, $100$, $1000$: desloque para a <strong>esquerda</strong>.', '$3,45 · 10 = 34,5$ e $3,45 ÷ 100 = 0,0345$.'],
        tbl(['Conta', 'Resultado'], [['$3,45 · 10$', '$34,5$'], ['$3,45 · 100$', '$345$'], ['$3,45 ÷ 10$', '$0,345$']])]],
      [['Preço do arroz', 'Calcule $2,5 · 4,8$.', [['Ignore as vírgulas', '$25 · 48 = 1200$.'], ['Conte as casas', '$2,5$ tem $1$ e $4,8$ tem $1$: $2$ casas.'], ['Coloque a vírgula', '$12,00$.']], '$12$ (R&#36; 12,00 pelos $2,5$ kg)'],
       ['Dividindo decimais', 'Calcule $7,5 ÷ 0,5$.', [['Iguale as casas', '$7,5 ÷ 0,5$ já tem uma casa em cada.'], ['Corte as vírgulas', '$75 ÷ 5$.'], ['Divida', '$15$.']], '$15$']],
      ['$0,3 · 0,4$', 'Calcule $0,3 · 0,4$.', ['Multiplique $3 · 4$.', 'Quantas casas decimais o resultado tem?', 'Coloque a vírgula contando da direita.'], '$3 · 4 = 12$; duas casas ($1 + 1$): $0,12$.'],
      [['O valor de $1,2 · 3$ é:', ['$0,36$', '$3,6$', '$36$', '$4,2$'], 1, '$12 · 3 = 36$ com uma casa: $3,6$.'],
       ['O valor de $0,5 · 0,5$ é:', ['$0,25$', '$2,5$', '$0,025$', '$1$'], 0, '$5 · 5 = 25$ com duas casas: $0,25$.'],
       ['O valor de $9 ÷ 4$ é:', ['$2$', '$2,25$', '$2,5$', '$3,25$'], 1, '$9 ÷ 4 = 2,25$.'],
       ['O valor de $4,5 ÷ 0,9$ é:', ['$0,5$', '$5$', '$50$', '$4$'], 1, '$45 ÷ 9 = 5$.']],
      [[['Multiplicação', 'Ignore as vírgulas e some as casas dos fatores.'], ['Divisão', 'Iguale as casas e corte as vírgulas.'], ['Por 10, 100, 1000', 'Desloque a vírgula para a direita (×) ou para a esquerda (÷).']], 'Por que $0,3 · 0,4$ é menor que $0,3$?', 'Voltando às compras: $2,5 · 4,80 = 12,00$ (R&#36; 12,00) e $18 ÷ 4 = 4,5$ (R&#36; 4,50 para cada pessoa).'],
      [['O valor de $2,5 · 4$ é:', ['$1$', '$10$', '$100$', '$0,1$'], 1], ['O valor de $6 ÷ 0,5$ é:', ['$3$', '$12$', '$30$', '$1,2$'], 1], ['O valor de $0,2 · 0,3$ é:', ['$0,6$', '$0,06$', '$0,5$', '$0,05$'], 1]])
  ]
});
