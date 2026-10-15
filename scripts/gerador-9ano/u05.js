// Módulo 5 · 9º ano · Recomposição · 1º trimestre — Porcentagem (aulas 14 a 16 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois (o "$" sozinho quebra a matemática). Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wp = Wd.porcento('rp1');

module.exports = unidade({
  tri: 1, dir: 'porcentagem', titulo: 'Porcentagem', accent: 'decay', icon: 'percent', key: 'r1u5',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'porcentagem-e-suas-representacoes', titulo: 'Porcentagem e suas representações',
      h1: `Porcentagem: ${co('decay')}cem partes do todo</span>`,
      sub: 'Porcentagem é uma fração de denominador 100. Ela aparece em descontos, pesquisas, notas e juros, e sempre pode ser escrita como fração ou como decimal.',
      badges: [['%'], ['fração', 'growth'], ['decimal', 'decay']], color: 'decay',
      roteiro: ['De "por cento" à conta de cabeça.', [['O que é %', 'por cem', 'bulb'], ['Fração, decimal e %', 'três escritas', 'scale'], ['% de uma quantidade', 'três métodos', 'target'], ['Percentuais famosos', '10%, 25%, 50%', 'chart'], ['Conferir', 'estimativas', 'book']]],
      objetivos: ['Relacionar <strong>porcentagem</strong> com <strong>fração e decimal</strong>.', 'Calcular a <strong>porcentagem de uma quantidade</strong>.', 'Usar percentuais de referência (<strong>10%, 25%, 50%</strong>) para estimar.'],
      dica: '<strong>1%</strong> de um valor é esse valor dividido por <strong>100</strong>. A partir dele você chega a qualquer percentual.',
      gancho: { titulo: 'A promoção da loja', texto: 'Uma camisa de <strong>R$ 80</strong> está com <strong>25% de desconto</strong>. De quanto é o desconto, em reais?', mini: ['25% de 80 é:', ['R$ 8', 'R$ 20', 'R$ 25', 'R$ 40'], 1, '25% é ${1|4}$: $80 ÷ 4 = 20$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · porcentagem', 'Três escritas do mesmo número', g2(`<div>
              ${checks(['<strong>Por cento</strong> significa "por cem": $35% = {35|100}$.', 'Em decimal: $35% = 0,35$ (divida por $100$ = desloque a vírgula duas casas à esquerda).', 'De decimal para %: $0,6 = 60%$ (multiplique por $100$).', 'Pode passar de $100%$: $150% = {150|100} = 1,5$ (uma vez e meia).'], '.95rem')}
            </div>`, card(`<strong>Percentuais de referência</strong>
              ${tbl(['%', 'Fração', 'Como achar'], [['$50%$', '${1|2}$', 'dividir por 2'], ['$25%$', '${1|4}$', 'dividir por 4'], ['$10%$', '${1|10}$', 'dividir por 10'], ['$20%$', '${1|5}$', 'dividir por 5'], ['$75%$', '${3|4}$', '3 vezes 25%']])}`, 'primary'))],
        ['Teoria · calcular', 'Porcentagem de uma quantidade', g2(`<div>
              ${checks(['<strong>Como fração:</strong> $30%$ de $250 = {30|100} · 250 = 75$.', '<strong>Como decimal:</strong> $0,30 · 250 = 75$.', '<strong>Pelo 1%:</strong> $1% = 2,5$ e $30 · 2,5 = 75$.', '<strong>Pelo 10%:</strong> $10% = 25$; $30% = 3 · 25 = 75$.'], '.95rem')}
            </div>`, callout('Palavra "de"', '"$30%$ <strong>de</strong> 250" significa <strong>multiplicar</strong>: $0,30 · 250$.', 'decay'))]
      ],
      exemplos: [
        ['De cabeça com o 10%', 'Quanto é $15%$ de $240$?', [['Achar 10%', '$240 ÷ 10 = 24$.'], ['Achar 5%', 'Metade de 10%: $12$.'], ['Somar', '$15% = 10% + 5% = 24 + 12 = 36$.']], '$15%$ de $240$ é <strong>36</strong>.'],
        ['De fração para %', 'Escreva ${7|20}$ como porcentagem.', [['Denominador 100', '$20 · 5 = 100$, então multiplique em cima e embaixo por $5$.'], ['Conta', '${7 · 5|20 · 5} = {35|100}$.']], '${7|20}$ = <strong>35%</strong>.']
      ],
      widget: { titulo: 'Calculadora de porcentagem', html: wp.html, js: wp.js },
      pratique: [
        ['Decimal e %', 'O número decimal $0,08$ corresponde a:', ['$80%$', '$8%$', '$0,8%$', '$0,08%$'], 1, '$0,08 · 100 = 8%$. <strong>Alternativa B.</strong>'],
        ['Porcentagem de um valor', '$40%$ de $350$ é:', ['$120$', '$140$', '$150$', '$160$'], 1, '$0,4 · 350 = 140$. <strong>Alternativa B.</strong>'],
        ['Fração para %', 'A fração ${3|5}$ corresponde a:', ['$35%$', '$53%$', '$60%$', '$6%$'], 2, '${3|5} = {60|100} = 60%$. <strong>Alternativa C.</strong>']
      ],
      enem: ['Pesquisa na escola', 'Em uma pesquisa com $200$ alunos, $45%$ disseram que preferem aulas práticas. Quantos alunos preferem aulas práticas?', ['$45$', '$80$', '$90$', '$110$', '$155$'], 2, '$0,45 · 200 = 90$. <strong>Alternativa C.</strong>'],
      cuidados: [['10% de 50 é 10?', '$10%$ de $50$ é $5$ (um décimo), não $10$.'], ['0,5 não é 5%', '$0,5 = 50%$. O decimal $0,05$ é que vale $5%$.'], ['% acima de 100', '$120%$ de um valor é <strong>mais</strong> que o valor: $1,2$ vez.'], ['Porcentagem sem base', 'Sempre pergunte: porcentagem <strong>de quê</strong>? A base muda o resultado.']],
      quiz: [
        { q: '$25%$ de $64$ é:', o: ['$8$', '$12$', '$16$', '$20$'], a: 2 },
        { q: '$0,72$ corresponde a:', o: ['$7,2%$', '$72%$', '$0,72%$', '$720%$'], a: 1 },
        { q: 'A fração ${9|50}$ corresponde a:', o: ['$9%$', '$18%$', '$45%$', '$90%$'], a: 1 },
        { q: '$10%$ de $90$ é:', o: ['$1$', '$9$', '$10$', '$81$'], a: 1 }
      ],
      sintese: [['Por cento', 'Fração com denominador 100; decimal = % ÷ 100.'], ['Calcular', 'Multiplique pelo decimal ou use 1%, 10%, 25%, 50%.'], ['Base', 'Porcentagem sempre é de alguma quantidade.']],
      msg: 'Próxima aula: aumentos e descontos percentuais.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'aumentos-e-descontos', titulo: 'Aumentos e descontos percentuais',
      h1: `Aumentos e descontos: ${co('decay')}o fator multiplicador</span>`,
      sub: 'Um aumento de 20% é multiplicar por 1,20; um desconto de 20% é multiplicar por 0,80. Esse "fator" resolve a conta em um passo.',
      badges: [['aumento'], ['desconto', 'growth'], ['fator', 'decay']], color: 'decay',
      roteiro: ['Do cálculo em duas etapas ao fator de uma conta só.', [['Aumento', 'somar a porcentagem', 'chart'], ['Desconto', 'tirar a porcentagem', 'coin'], ['Fator multiplicador', '1 + i  ou  1 − i', 'scale'], ['Aumentos sucessivos', 'não somam', 'target'], ['Conferir', 'sentido do resultado', 'book']]],
      objetivos: ['Calcular <strong>aumentos e descontos</strong> percentuais.', 'Usar o <strong>fator multiplicador</strong>.', 'Reconhecer que <strong>aumentos e descontos sucessivos não se somam</strong>.'],
      dica: 'Aumento de $i%$: multiplique por $1 + i$. Desconto de $i%$: multiplique por $1 − i$ (com $i$ em decimal).',
      gancho: { titulo: 'O tênis da vitrine', texto: 'Um tênis custa <strong>R$ 200</strong>. A loja aumentou o preço em <strong>10%</strong> e, na semana seguinte, deu <strong>10% de desconto</strong> sobre o novo preço. Voltou ao preço inicial?', mini: ['O preço final é:', ['R$ 200', 'R$ 198', 'R$ 220', 'R$ 180'], 1, 'Aumento: $200 · 1,1 = 220$. Desconto: $220 · 0,9 = 198$. Não voltou! <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fator multiplicador', 'Uma conta, um passo', g2(`<div>
              ${checks(['<strong>Aumento de 15%:</strong> novo preço $= 100% + 15% = 115% = 1,15$ do preço.', '<strong>Desconto de 15%:</strong> $100% − 15% = 85% = 0,85$ do preço.', 'Preço de R$ 40 com aumento de $15%$: $40 · 1,15 = 46$.', 'Preço de R$ 40 com desconto de $15%$: $40 · 0,85 = 34$.'], '.95rem')}
            </div>`, card(`<strong>Tabela de fatores</strong>
              ${tbl(['Variação', 'Fator'], [['+ 10%', '$1,10$'], ['+ 25%', '$1,25$'], ['− 10%', '$0,90$'], ['− 40%', '$0,60$'], ['+ 100%', '$2,00$']])}`, 'primary'))],
        ['Teoria · sucessivos', 'Os fatores se multiplicam', g2(`<div>
              ${checks(['Aumento de $10%$ e depois desconto de $10%$: $1,1 · 0,9 = 0,99$ ⇒ <strong>queda de 1%</strong>.', 'Dois descontos de $20%$: $0,8 · 0,8 = 0,64$ ⇒ <strong>desconto total de 36%</strong> (não 40%).', 'Dois aumentos de $10%$: $1,1 · 1,1 = 1,21$ ⇒ <strong>aumento de 21%</strong>.', 'Variação percentual $=$ (fator final $− 1$) $· 100$.'], '.95rem')}
            </div>`, callout('Por que não soma?', 'O segundo percentual incide sobre um valor <strong>já modificado</strong>, e não sobre o preço inicial.', 'decay'))]
      ],
      exemplos: [
        ['Preço com desconto', 'Um fone custa R$ 150. Qual é o preço com desconto de $30%$?', [['Fator', '$1 − 0,30 = 0,70$.'], ['Multiplicar', '$150 · 0,70 = 105$.']], 'O preço final é <strong>R$ 105</strong>.'],
        ['Descobrindo a variação', 'O preço de um produto subiu de R$ 80 para R$ 92. De quanto foi o aumento percentual?', [['Aumento em reais', '$92 − 80 = 12$.'], ['Razão com o inicial', '${12|80} = 0,15$.'], ['Em %', '$0,15 = 15%$.']], 'O aumento foi de <strong>15%</strong>.']
      ],
      pratique: [
        ['Fator de desconto', 'Para dar $20%$ de desconto, multiplicamos o preço por:', ['$0,2$', '$0,8$', '$1,2$', '$1,8$'], 1, '$1 − 0,20 = 0,80$. <strong>Alternativa B.</strong>'],
        ['Aumento', 'Um aluguel de R$ 1.200 teve reajuste de $5%$. O novo valor é:', ['R$ 1.205', 'R$ 1.250', 'R$ 1.260', 'R$ 1.300'], 2, '$1200 · 1,05 = 1260$. <strong>Alternativa C.</strong>'],
        ['Descontos sucessivos', 'Dois descontos sucessivos de $10%$ equivalem a um desconto único de:', ['$20%$', '$19%$', '$21%$', '$18%$'], 1, '$0,9 · 0,9 = 0,81$, ou seja, $19%$ de desconto. <strong>Alternativa B.</strong>']
      ],
      enem: ['A liquidação', 'Uma bicicleta custa R$ 800. Na liquidação, o preço caiu $25%$. Depois, o preço com desconto sofreu um aumento de $10%$. O preço final é:', ['R$ 600', 'R$ 640', 'R$ 660', 'R$ 680', 'R$ 720'], 2, '$800 · 0,75 = 600$ e $600 · 1,10 = 660$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar percentuais sucessivos', '+10% e −10% <strong>não</strong> anulam: $1,1 · 0,9 = 0,99$.'], ['Desconto no preço errado', 'O segundo desconto incide sobre o preço <strong>já reduzido</strong>.'], ['Fator 0,2 para desconto de 20%', 'Desconto de $20%$ usa $0,8$; o $0,2$ é o que você <strong>economiza</strong>.'], ['Percentual de variação', 'Divida a variação pelo valor <strong>inicial</strong>, não pelo final.']],
      quiz: [
        { q: 'Aumentar $12%$ é multiplicar por:', o: ['$0,12$', '$1,12$', '$12$', '$0,88$'], a: 1 },
        { q: 'Um item de R$ 50 com $20%$ de desconto custa:', o: ['R$ 30', 'R$ 40', 'R$ 45', 'R$ 48'], a: 1 },
        { q: 'Um aumento de $100%$ equivale a multiplicar por:', o: ['$1$', '$1,5$', '$2$', '$10$'], a: 2 },
        { q: 'O preço passou de R$ 40 para R$ 50. O aumento foi de:', o: ['$10%$', '$20%$', '$25%$', '$50%$'], a: 2 }
      ],
      sintese: [['Fator', 'Aumento: 1 + i; desconto: 1 − i.'], ['Sucessivos', 'Multiplique os fatores; não some os percentuais.'], ['Variação', 'Variação em reais ÷ valor inicial.']],
      msg: 'Próxima aula: problemas de porcentagem, do todo e da parte.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'problemas-de-porcentagem', titulo: 'Problemas de porcentagem',
      h1: `Porcentagem em ${co('decay')}problemas: parte, todo e taxa</span>`,
      sub: 'Todo problema de porcentagem tem três ingredientes: a parte, o todo e a taxa. Conhecendo dois deles, calculamos o terceiro.',
      badges: [['parte'], ['todo', 'growth'], ['taxa', 'decay']], color: 'decay',
      roteiro: ['Descobrir o terceiro ingrediente.', [['Parte, todo e taxa', 'a relação fundamental', 'bulb'], ['Achar a parte', 'taxa vezes todo', 'chart'], ['Achar a taxa', 'parte dividida pelo todo', 'scale'], ['Achar o todo', 'parte dividida pela taxa', 'target'], ['Juros simples', 'porcentagem ao longo do tempo', 'coin']]],
      objetivos: ['Identificar <strong>parte, todo e taxa</strong> em um enunciado.', 'Calcular qualquer um dos três conhecendo os outros dois.', 'Resolver problemas simples de <strong>juros</strong> e <strong>pesquisas</strong>.'],
      dica: 'Relação fundamental: <strong>parte = taxa × todo</strong>. Dela saem as três perguntas.',
      gancho: { titulo: 'O resultado da prova', texto: 'Em uma prova com <strong>40 questões</strong>, Ivo acertou <strong>34</strong>. Qual foi o percentual de acertos?', mini: ['Percentual de acertos:', ['$74%$', '$80%$', '$85%$', '$90%$'], 2, '${34|40} = 0,85 = 85%$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · três perguntas', 'Parte, todo e taxa', g2(`<div>
              ${checks(['<strong>Parte:</strong> $30%$ de $150 = 0,30 · 150 = 45$ (parte = taxa × todo).', '<strong>Taxa:</strong> $45$ é quantos % de $150$? ${45|150} = 0,30 = 30%$.', '<strong>Todo:</strong> $45$ é $30%$ de qual número? $45 ÷ 0,30 = 150$.', 'Confira sempre: a parte é <strong>menor</strong> que o todo se a taxa for menor que $100%$.'], '.95rem')}
            </div>`, card(`<strong>Esquema</strong>
              <p style="font-size:.95rem;margin-top:8px;">parte $= $ taxa $·$ todo</p>
              <p style="font-size:.95rem;">taxa $= $ parte $÷$ todo</p>
              <p style="font-size:.95rem;">todo $= $ parte $÷$ taxa</p>`, 'primary'))],
        ['Teoria · juros simples', 'Porcentagem que se repete a cada período', g2(`<div>
              ${checks(['<strong>Juros simples:</strong> o percentual incide sempre sobre o valor <strong>inicial</strong>.', 'R$ 1.000 a $2%$ ao mês durante $6$ meses: $0,02 · 1000 = 20$ por mês; $6 · 20 = 120$ de juros.', 'Montante $= 1000 + 120 = 1120$.', 'Fórmula: juros $= C · i · t$ (capital × taxa × tempo).'], '.95rem')}
            </div>`, callout('Cuidado com as unidades', 'Taxa e tempo precisam estar na mesma unidade: taxa ao mês, tempo em meses.', 'decay'))]
      ],
      exemplos: [
        ['Achando o todo', 'Em uma turma, $18$ alunos são meninos, o que corresponde a $45%$ da turma. Quantos alunos há na turma?', [['Relação', '$18 = 0,45 · $ todo.'], ['Dividir', 'todo $= 18 ÷ 0,45 = 40$.']], 'A turma tem <strong>40 alunos</strong>.'],
        ['Juros simples', 'Um capital de R$ 2.000 rende juros simples de $1,5%$ ao mês. Qual o montante após $4$ meses?', [['Juros por mês', '$0,015 · 2000 = 30$.'], ['Em 4 meses', '$4 · 30 = 120$.'], ['Montante', '$2000 + 120 = 2120$.']], 'O montante é <strong>R$ 2.120</strong>.']
      ],
      pratique: [
        ['Achar a taxa', '$27$ é quantos por cento de $90$?', ['$27%$', '$30%$', '$33%$', '$36%$'], 1, '${27|90} = 0,3 = 30%$. <strong>Alternativa B.</strong>'],
        ['Achar o todo', '$12%$ de um número é $30$. O número é:', ['$200$', '$250$', '$300$', '$360$'], 1, '$30 ÷ 0,12 = 250$. <strong>Alternativa B.</strong>'],
        ['Juros', 'R$ 500 aplicados a $4%$ ao mês, juros simples, durante $3$ meses rendem de juros:', ['R$ 20', 'R$ 40', 'R$ 60', 'R$ 80'], 2, '$0,04 · 500 = 20$ por mês; $3 · 20 = 60$. <strong>Alternativa C.</strong>']
      ],
      enem: ['Votos da eleição', 'Em uma eleição de grêmio, a chapa A recebeu $234$ votos, que correspondem a $52%$ dos votos válidos. Quantos votos válidos houve?', ['$300$', '$400$', '$450$', '$480$', '$500$'], 2, '$234 ÷ 0,52 = 450$. <strong>Alternativa C.</strong>'],
      cuidados: [['Dividir ao contrário', 'Taxa = parte ÷ todo (a parte menor em cima).'], ['Taxa em %, conta em decimal', 'Use $0,45$ nas contas, não $45$.'], ['Juros: taxa e tempo desalinhados', 'Taxa ao mês e tempo em anos? Converta antes.'], ['% pedido no resultado', 'Se pedem "quantos por cento", multiplique por $100$ no fim.']],
      quiz: [
        { q: 'Em $60$ questões, acertar $45$ dá:', o: ['$65%$', '$70%$', '$75%$', '$80%$'], a: 2 },
        { q: '$20%$ de um número é $14$. O número é:', o: ['$28$', '$56$', '$70$', '$140$'], a: 2 },
        { q: 'A relação fundamental é:', o: ['parte = taxa ÷ todo', 'parte = taxa × todo', 'todo = parte × taxa', 'taxa = todo ÷ parte'], a: 1 },
        { q: 'Juros simples de R$ 800 a $1%$ ao mês por $5$ meses:', o: ['R$ 8', 'R$ 40', 'R$ 80', 'R$ 400'], a: 1 }
      ],
      sintese: [['Relação', 'Parte = taxa × todo; dela saem taxa e todo.'], ['Juros simples', 'C · i · t, com taxa e tempo na mesma unidade.'], ['Conferir', 'Parte menor que o todo quando a taxa é menor que 100%.']],
      msg: 'Próximo módulo: grandezas proporcionais (aulas 17 a 20).'
    }
  ]
});
