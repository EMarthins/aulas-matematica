// Matemática · 6º ano · 2º trimestre · Porcentagem (base: slides "Porcentagem" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '6° Ano', tri: 2, pasta: 'aulas/6-ano/2-tri/porcentagem/', titulo: 'Porcentagem', accent: 'decay', icon: 'percent', key: 'm6p27', area: 'Matemática · 6º ano',
  aulas: [
    A('porcentagem-conceito-e-calculo', 'Porcentagem: o que é e como calcular',
      `Cem partes do ${co('primary')}todo</span>`,
      'Uma blusa de R&#36; 80,00 está com $25%$ de desconto. De quanto é o desconto?',
      'mercado', [['%'], ['fração de denominador 100', 'growth'], ['10%, 25%, 50%', 'decay']],
      ['Porcentagem aparece em descontos, pesquisas, notas e na bateria do celular.', ['$50%$ de um valor equivale a:', ['o dobro', 'a metade', 'um quarto', 'o triplo'], 1, '$50% = {1|2}$: a metade.'], 'Em que situações do seu dia a dia você vê o símbolo %?'],
      ['Reconhecer a <strong>porcentagem</strong> como fração de denominador $100$.', 'Calcular a <strong>porcentagem de uma quantidade</strong>.', 'Usar os valores de referência: $10%$, $25%$ e $50%$.'],
      '$1%$ de um valor é esse valor <strong>dividido por 100</strong>; a partir dele, chegue a qualquer porcentagem.',
      [['O que é porcentagem', ['“Por cento” significa “por cem”: $25%$ é ${25|100}$.', 'Também se escreve como decimal, $25% = 0,25$, e como fração irredutível, ${1|4}$.', 'Pode passar de $100%$: $150%$ é uma vez e meia o valor.'],
        tbl(['%', 'Fração', 'Decimal'], [['$50%$', '${1|2}$', '$0,5$'], ['$25%$', '${1|4}$', '$0,25$'], ['$10%$', '${1|10}$', '$0,1$']])],
       ['Calculando porcentagens', ['$x%$ de $N$ é ${x|100} · N$.', 'Referências: $10%$ = dividir por $10$; $50%$ = dividir por $2$; $25%$ = dividir por $4$.', 'Combine: $15% = 10% + 5%$.'],
        callout('Atalho', '$10%$ de $60$ é $6$; $5%$ é a metade: $3$; logo $15%$ de $60$ é $9$.', 'primary')],
       ['Porcentagem em situações reais', ['Desconto de $25%$ em R&#36; 80,00: paga-se ${3|4}$ do preço.', 'Pesquisa: $30%$ de $200$ alunos são $60$ alunos.', 'Sempre pergunte: porcentagem <strong>de quê</strong>? (essa é a base).'],
        fig('mercado', 'Ilustração original: etiquetas de preço.', '260px')]],
      [['Porcentagem de uma quantidade', 'Calcule $20%$ de $150$.', [['Converta', '$20% = {20|100} = {1|5}$.'], ['Calcule a fração de $150$', '$150 ÷ 5 = 30$.']], '$30$'],
       ['Desconto na blusa', 'Calcule $25%$ de R&#36; 80,00.', [['Use a fração', '$25% = {1|4}$, um quarto.'], ['Divida por $4$', '$80 ÷ 4 = 20$.']], 'R&#36; 20,00 de desconto']],
      ['$15%$ de $60$', 'Calcule $15%$ de $60$.', ['Calcule $10%$ de $60$.', 'Calcule $5%$ (metade de $10%$).', 'Some os dois resultados.'], '$10% = 6$; $5% = 3$; $15% = 6 + 3 = 9$.'],
      [['$50%$ de $84$ é:', ['$42$', '$40$', '$84$', '$8,4$'], 0, 'Metade de $84$.'],
       ['$10%$ de $360$ é:', ['$3,6$', '$36$', '$180$', '$350$'], 1, '$360 ÷ 10 = 36$.'],
       ['$25%$ de $200$ é:', ['$25$', '$50$', '$100$', '$75$'], 1, '$200 ÷ 4 = 50$.'],
       ['${3|4}$ escrito como porcentagem é:', ['$34%$', '$75%$', '$43%$', '$3,4%$'], 1, '${3|4} = 0,75 = 75%$.']],
      [[['Porcentagem', 'Fração de denominador $100$: $x% = {x|100}$.'], ['Cálculo', 'Use $10%$, $50%$ e $25%$ como referência.'], ['Base', 'Sempre diga porcentagem <strong>de quê</strong>.']], 'Por que $50%$ de $10$ é diferente de $10%$ de $50$? Calcule os dois.', 'Voltando à blusa: $25%$ de R&#36; 80,00 são R&#36; 20,00 de desconto.'],
      [['$20%$ de $50$ é:', ['$5$', '$10$', '$20$', '$25$'], 1], ['$0,35$ escrito como porcentagem é:', ['$3,5%$', '$35%$', '$0,35%$', '$350%$'], 1], ['${1|5}$ escrito como porcentagem é:', ['$5%$', '$15%$', '$20%$', '$50%$'], 2]]),

    A('aumentos-e-descontos-percentuais', 'Aumentos e descontos percentuais',
      `Quanto vou ${co('primary')}pagar</span> de verdade?`,
      'Um tênis de R&#36; 200,00 recebeu $15%$ de desconto. Quanto passou a custar?',
      'mercado', [['desconto'], ['aumento', 'growth'], ['preço final', 'decay']],
      ['Já sabemos calcular a porcentagem de um valor. Agora vamos aplicá-la a preços e salários.', ['$10%$ de $80$ é:', ['$0,8$', '$8$', '$18$', '$80$'], 1, '$80 ÷ 10 = 8$.'], 'Seu salário aumentou $10%$. Ele ficou maior ou menor? Em quanto?'],
      ['Calcular o <strong>preço com desconto</strong> e o <strong>preço com aumento</strong>.', 'Resolver problemas com <strong>aumentos e descontos</strong> simples.', 'Descobrir a <strong>porcentagem</strong> que um valor representa de outro.'],
      'Desconto <strong>subtrai</strong> do preço; aumento <strong>soma</strong>. A base é sempre o preço <strong>original</strong>.',
      [['Desconto', ['Calcule a porcentagem do preço e <strong>subtraia</strong> do preço original.', 'Outro caminho: com $15%$ de desconto, paga-se $85%$ do preço.', 'Exemplo: $200 - 15% · 200 = 200 - 30 = 170$.'],
        tbl(['Preço', 'Desconto', 'Paga'], [['R&#36; 200', '$15%$ (R&#36; 30)', 'R&#36; 170']])],
       ['Aumento', ['Calcule a porcentagem e <strong>some</strong> ao valor original.', 'Com aumento de $10%$, o novo valor é $110%$ do antigo.', 'Exemplo: R&#36; 80,00 com aumento de $10%$: $80 + 8 = 88$.'],
        callout('Dica', 'Desconto de $15%$ ⇒ multiplique por $0,85$; aumento de $10%$ ⇒ multiplique por $1,10$.', 'primary')],
       ['Que porcentagem é?', ['Para saber que porcentagem uma parte é do todo, divida a parte pelo todo e passe para porcentagem.', '$30$ é que porcentagem de $120$? ${30|120} = {1|4} = 25%$.', 'Um desconto de R&#36; 30 em R&#36; 120 é um desconto de $25%$.'],
        tbl(['Parte', 'Todo', 'Porcentagem'], [['$30$', '$120$', '$25%$']])]],
      [['O tênis com desconto', 'Quanto custa um tênis de R&#36; 200,00 com $15%$ de desconto?', [['Calcule o desconto', '$15%$ de $200 = 30$.'], ['Subtraia', '$200 - 30 = 170$.']], 'R&#36; 170,00'],
       ['Aumento de salário', 'Um salário de R&#36; 1.200,00 teve aumento de $5%$. Qual é o novo salário?', [['Calcule o aumento', '$5%$ de $1200 = 60$.'], ['Some', '$1200 + 60 = 1260$.']], 'R&#36; 1.260,00']],
      ['Camisa em liquidação', 'Uma camisa de R&#36; 60,00 está com $20%$ de desconto. Qual é o preço final?', ['Calcule $10%$ de $60$ e dobre para obter $20%$.', 'Subtraia o desconto do preço original.', 'Confira: paga-se $80%$ do preço.'], '$20%$ de $60 = 12$; $60 - 12 = 48$. O preço final é R&#36; 48,00.'],
      [['Um produto de R&#36; 150,00 com $10%$ de desconto custa:', ['R&#36; 140,00', 'R&#36; 135,00', 'R&#36; 160,00', 'R&#36; 15,00'], 1, '$10%$ de $150 = 15$; $150 - 15 = 135$.'],
       ['Um salário de R&#36; 1.000,00 com aumento de $20%$ passa a ser:', ['R&#36; 1.020,00', 'R&#36; 1.200,00', 'R&#36; 800,00', 'R&#36; 1.002,00'], 1, '$20%$ de $1000 = 200$; $1000 + 200 = 1200$.'],
       ['Um desconto de R&#36; 30,00 em um produto de R&#36; 120,00 representa:', ['$30%$', '$25%$', '$20%$', '$40%$'], 1, '${30|120} = {1|4} = 25%$.'],
       ['$30%$ de $90$ é:', ['$9$', '$27$', '$30$', '$60$'], 1, '$10% = 9$; $30% = 27$.']],
      [[['Desconto', 'Subtrai a porcentagem do preço original.'], ['Aumento', 'Soma a porcentagem ao valor original.'], ['Parte do todo', 'Divida a parte pelo todo e converta em porcentagem.']], 'Um desconto de $10%$ seguido de um aumento de $10%$ volta ao preço inicial? Teste com R&#36; 100,00.', 'Voltando ao tênis: $15%$ de $200$ são R&#36; 30,00; ele passa a custar R&#36; 170,00.'],
      [['Um produto de R&#36; 400,00 com $25%$ de desconto custa:', ['R&#36; 300,00', 'R&#36; 375,00', 'R&#36; 100,00', 'R&#36; 425,00'], 0], ['Um valor de $50$ com aumento de $20%$ passa a ser:', ['$60$', '$70$', '$55$', '$52$'], 0], ['$15%$ de $200$ é:', ['$15$', '$30$', '$45$', '$20$'], 1]])
  ]
});
