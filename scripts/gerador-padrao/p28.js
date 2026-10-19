// Matemática · 6º ano · 3º trimestre · Números inteiros (base: slides "Números inteiros" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '6° Ano', tri: 3, pasta: 'aulas/6-ano/3-tri/numeros-inteiros/', titulo: 'Números inteiros', accent: 'primary', icon: 'numbers', key: 'm6p28', area: 'Matemática · 6º ano',
  aulas: [
    A('numeros-inteiros-e-reta-numerica', 'Números inteiros e reta numérica',
      `Acima e abaixo do ${co('primary')}zero</span>`,
      'Numa cidade, a temperatura foi de $5$ °C acima de zero às $15$h e de $3$ °C abaixo de zero às $5$h. Qual das duas temperaturas é maior? Como representar cada uma?',
      'termometro', [['inteiros'], ['positivos e negativos', 'growth'], ['reta numérica', 'decay']],
      ['Temperaturas, saldo bancário e altitude usam números que vão além dos naturais.', ['Quando o termômetro marca $2$ graus abaixo de zero, escrevemos:', ['$2$', '$-2$', '$+2$', '$0,2$'], 1, 'Abaixo de zero é negativo: $-2$.'], 'Dê um exemplo, fora da temperatura, em que se usa um número negativo.'],
      ['<strong>Reconhecer</strong> números inteiros positivos, negativos e o zero.', '<strong>Representar</strong> inteiros na reta numérica e <strong>comparar</strong> inteiros.', 'Identificar o <strong>oposto</strong> e o <strong>módulo</strong> de um inteiro.'],
      'Na reta numérica, o número <strong>mais à direita</strong> é sempre o <strong>maior</strong>.',
      [['O conjunto dos inteiros', ['Os inteiros são os positivos, o zero e os negativos: $…, -3, -2, -1, 0, 1, 2, 3, …$', 'Positivos: acima de zero, ganhos, andares acima. Negativos: abaixo de zero, dívidas, subsolo.', 'O zero não é positivo nem negativo.'],
        fig('termometro', 'Ilustração original: termômetro e reta numérica.', '320px')],
       ['Oposto e módulo', ['O <strong>oposto</strong> de $a$ é $-a$: o oposto de $5$ é $-5$ e o de $-3$ é $3$.', 'O <strong>módulo</strong> é a distância até o zero e é sempre positivo: $|-4| = 4$ e $|4| = 4$.', 'Números opostos têm o mesmo módulo.'],
        tbl(['Número', 'Oposto', 'Módulo'], [['$7$', '$-7$', '$7$'], ['$-3$', '$3$', '$3$']])],
       ['Comparando inteiros', ['Todo positivo é maior que zero e todo negativo é menor que zero.', 'Entre dois negativos, é <strong>maior</strong> o que está <strong>mais perto do zero</strong>: $-2 > -5$.', 'Ordene lendo a reta da esquerda para a direita.'],
        callout('Atenção', '$-8$ é <strong>menor</strong> que $-3$, embora $8 > 3$.', 'decay')]],
      [['Comparando negativos', 'Compare $-5$ e $-2$.', [['Marque na reta', '$-5$ fica mais à esquerda que $-2$.'], ['Quem está mais à direita é maior', '$-2$ é maior.']], '$-5 < -2$'],
       ['Oposto e módulo', 'Dê o oposto e o módulo de $-7$.', [['Oposto', 'Troque o sinal: $7$.'], ['Módulo', 'Distância até o zero: $7$.']], 'Oposto $7$; módulo $7$']],
      ['Ordenar', 'Coloque em ordem crescente: $3$, $-1$, $-4$, $0$.', ['Qual é o menor: $-1$ ou $-4$?', 'Marque na reta.', 'Leia da esquerda para a direita.'], 'Do menor ao maior: $-4, -1, 0, 3$.'],
      [['Qual é a temperatura mais baixa?', ['$-1$ °C', '$-6$ °C', '$0$ °C', '$3$ °C'], 1, '$-6$ está mais à esquerda na reta.'],
       ['O oposto de $-9$ é:', ['$-9$', '$9$', '$0$', '${1|9}$'], 1, 'O oposto troca o sinal.'],
       ['O módulo de $-12$ é:', ['$-12$', '$12$', '$0$', '$1$'], 1, '$|-12| = 12$.'],
       ['Qual desigualdade é verdadeira?', ['$-3 > 2$', '$-5 < -1$', '$0 < -4$', '$-7 > -2$'], 1, '$-5$ está à esquerda de $-1$.']],
      [[['Inteiros', 'Positivos, zero e negativos.'], ['Oposto e módulo', 'Oposto troca o sinal; módulo é a distância até o zero.'], ['Comparação', 'Quem está mais à direita na reta é maior.']], 'Por que $-10$ é menor que $-2$?', 'Voltando ao termômetro: $5$ °C é maior que $-3$ °C (positivo é maior que negativo).'],
      [['Qual é maior?', ['$-4$', '$-1$', '$-8$', '$-6$'], 1], ['O módulo de $-3$ é:', ['$3$', '$-3$', '$0$', '$6$'], 0], ['Em ordem crescente: $-2, 4, -5, 0$ fica:', ['$-5, -2, 0, 4$', '$4, 0, -2, -5$', '$-2, -5, 0, 4$', '$0, -2, -5, 4$'], 0]]),

    A('operacoes-com-numeros-inteiros', 'Operações com números inteiros',
      `Somar, tirar e ${co('primary')}multiplicar</span> com sinais`,
      'Seu saldo no banco é de R&#36; 50 e você faz uma compra de R&#36; 80 no cartão. Qual é o novo saldo?',
      'dinheiro', [['adição'], ['subtração', 'growth'], ['regra dos sinais', 'decay']],
      ['Quem entende a reta numérica já está perto de operar com sinais: andar para a direita é somar, para a esquerda é subtrair.', ['$-3 + 5$ vale:', ['$-8$', '$2$', '$8$', '$-2$'], 1, 'Saindo de $-3$ e andando $5$ para a direita, chega-se a $2$.'], 'Seu saldo é $20$ e você gasta $30$. Que número representa a sua situação?'],
      ['<strong>Somar e subtrair</strong> números inteiros.', 'Aplicar a <strong>regra dos sinais</strong> na multiplicação e na divisão.', 'Resolver <strong>problemas</strong> com saldo, temperatura e altitude.'],
      'Subtrair é <strong>somar o oposto</strong>: $5 - 8 = 5 + (-8)$.',
      [['Adição', ['Sinais <strong>iguais</strong>: some os módulos e mantenha o sinal. $(-3) + (-4) = -7$.', 'Sinais <strong>diferentes</strong>: subtraia os módulos e fique com o sinal do <strong>maior módulo</strong>. $(-8) + 5 = -3$.', 'Na reta: ganho vai para a direita; perda, para a esquerda.'],
        tbl(['Conta', 'Resultado'], [['$(-3) + (-4)$', '$-7$'], ['$(-8) + 5$', '$-3$'], ['$6 + (-2)$', '$4$']])],
       ['Subtração', ['Subtrair é <strong>somar o oposto</strong>: $a - b = a + (-b)$.', '$5 - 8 = 5 + (-8) = -3$.', '$(-4) - (-6) = (-4) + 6 = 2$.'],
        callout('Atenção', 'Menos com menos vira mais: $-(-6) = +6$.', 'primary')],
       ['Multiplicação e divisão', ['Sinais <strong>iguais</strong>: resultado <strong>positivo</strong>. Sinais <strong>diferentes</strong>: <strong>negativo</strong>.', '$(-4) · 3 = -12$; $(-4) · (-3) = 12$.', 'A divisão segue a mesma regra: $(-6) ÷ (-2) = 3$ e $8 ÷ (-4) = -2$.'],
        tbl(['Sinais', 'Resultado'], [['$+ · +$', '$+$'], ['$- · -$', '$+$'], ['$+ · -$', '$-$'], ['$- · +$', '$-$']])]],
      [['Somando com sinais diferentes', 'Calcule $(-8) + 5$.', [['Sinais diferentes: subtraia os módulos', '$8 - 5 = 3$.'], ['Sinal do maior módulo', 'O maior módulo é $8$ (negativo).']], '$-3$'],
       ['Regra dos sinais', 'Calcule $(-4) · 3$ e $(-6) ÷ (-2)$.', [['Sinais diferentes', '$(-4) · 3 = -12$.'], ['Sinais iguais', '$(-6) ÷ (-2) = 3$.']], '$-12$ e $3$']],
      ['O saldo do cartão', 'Saldo de R&#36; 50 e compra de R&#36; 80. Qual é o novo saldo?', ['Gastar é subtrair.', 'Escreva $50 - 80$.', '$50 - 80 = 50 + (-80)$.'], '$50 - 80 = -30$: o saldo fica <strong>negativo</strong>, em R&#36; 30 (uma dívida).'],
      [['O valor de $(-3) + (-4)$ é:', ['$7$', '$-7$', '$1$', '$-1$'], 1, 'Sinais iguais: soma dos módulos com o mesmo sinal.'],
       ['O valor de $5 - 8$ é:', ['$3$', '$-3$', '$13$', '$-13$'], 1, '$5 + (-8) = -3$.'],
       ['O valor de $(-5) · (-4)$ é:', ['$-20$', '$20$', '$-9$', '$9$'], 1, 'Sinais iguais: positivo.'],
       ['O valor de $(-12) ÷ 3$ é:', ['$4$', '$-4$', '$-36$', '$36$'], 1, 'Sinais diferentes: negativo; $12 ÷ 3 = 4$.']],
      [[['Soma', 'Sinais iguais: soma e mantém o sinal; diferentes: subtrai e fica o sinal do maior módulo.'], ['Subtração', 'É somar o oposto.'], ['Produto e quociente', 'Sinais iguais, resultado positivo; diferentes, negativo.']], 'Por que $(-2) · (-3)$ é positivo? Pense em “inverter duas vezes”.', 'Voltando ao cartão: $50 - 80 = -30$; o saldo é de R&#36; 30 negativos.'],
      [['O valor de $(-6) + 10$ é:', ['$4$', '$-4$', '$16$', '$-16$'], 0], ['O valor de $3 - 7$ é:', ['$4$', '$-4$', '$10$', '$-10$'], 1], ['O valor de $(-2) · 5$ é:', ['$10$', '$-10$', '$7$', '$-7$'], 1]])
  ]
});
