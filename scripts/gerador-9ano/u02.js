// Módulo 2 · 9º ano · Recomposição · 1º trimestre — Números racionais: representações e frações (aulas 4 a 6 do plano)
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wf = Wd.fracao('rf1');

module.exports = unidade({
  tri: 1, dir: 'numeros-racionais', titulo: 'Números racionais: representações e frações', accent: 'growth', icon: 'numbers', key: 'r1u2',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'representacoes-de-um-racional', titulo: 'Representações de um número racional',
      h1: `Racionais: ${co('growth')}o mesmo número, vários jeitos</span>`,
      sub: 'Fração, número decimal e porcentagem são três "roupas" do mesmo número racional. Saber trocar de roupa é a base de quase todo problema com frações.',
      badges: [['fração'], ['decimal', 'growth'], ['%', 'decay']], color: 'growth',
      roteiro: ['De fração para decimal, de decimal para porcentagem e de volta.', [['O que é racional', 'a razão de dois inteiros', 'bulb'], ['Fração → decimal', 'dividir numerador por denominador', 'scale'], ['Decimal → fração', 'potências de 10', 'chart'], ['Dízimas periódicas', 'a fração geratriz', 'target'], ['Porcentagem', 'fração de denominador 100', 'coin']]],
      objetivos: ['Reconhecer um número <strong>racional</strong> como quociente de inteiros.', 'Converter entre <strong>fração, decimal e porcentagem</strong>.', 'Encontrar a <strong>fração geratriz</strong> de uma dízima periódica simples.'],
      dica: 'Para passar de fração a decimal, <strong>divida</strong> o numerador pelo denominador. Para o caminho de volta, use denominadores $10$, $100$, $1000$…',
      gancho: { titulo: 'A receita e o copo medidor', texto: 'Uma receita pede <strong>${3|4}$ de xícara</strong> de leite, mas o copo medidor da cozinha está graduado em números decimais. Quanto devemos medir?', mini: ['${3|4}$ de xícara equivale a:', ['0,34', '0,75', '0,43', '3,4'], 1, '$3 ÷ 4 = 0,75$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · racionais', 'Um número, três representações', g2(`<div>
              ${checks(['<strong>Racional</strong> é todo número que pode ser escrito como ${a|b}$ com $a$ e $b$ inteiros e $b ≠ 0$.', 'A <strong>fração</strong> indica uma divisão: ${3|4}$ é $3 ÷ 4$.', 'O <strong>decimal</strong> é o resultado da divisão: $0,75$.', 'A <strong>porcentagem</strong> é a fração de denominador $100$: $75\%$ vale ${75|100}$.'], '.95rem')}
            </div>`, card(`<strong>Tabela de equivalências</strong>
              ${tbl(['Fração', 'Decimal', 'Porcentagem'], [['${1|2}$', '$0,5$', '$50\%$'], ['${3|4}$', '$0,75$', '$75\%$'], ['${2|5}$', '$0,4$', '$40\%$'], ['${1|8}$', '$0,125$', '$12,5\%$'], ['${1|3}$', '$0,333…$', '$33,33…\%$']])}`, 'primary'))],
        ['Teoria · decimal para fração', 'Denominador 10, 100, 1000…', g2(`<div>
              ${checks(['Conte as casas decimais: <strong>1 casa</strong> → denominador $10$; <strong>2 casas</strong> → $100$; <strong>3 casas</strong> → $1000$.', '$0,6 = {6|10} = {3|5}$ e $0,125 = {125|1000} = {1|8}$.', '<strong>Dízima periódica</strong> (infinitos algarismos que se repetem) também é racional: tem uma <strong>fração geratriz</strong>.', '$0,333… = {1|3}$; $0,777… = {7|9}$; $0,4545… = {45|99} = {5|11}$.'], '.95rem')}
            </div>`, callout('Dízima periódica simples', 'Período com $1$ algarismo → denominador $9$; com $2$ algarismos → $99$; com $3$ → $999$. O numerador é o período.', 'growth'))]
      ],
      exemplos: [
        ['De fração para decimal', 'Escreva ${7|8}$ como decimal e como porcentagem.', [['Dividir', '$7 ÷ 8$: como $7 < 8$, começamos com $0,$.'], ['Continuar a divisão', '$70 ÷ 8 = 8$ (resto 6); $60 ÷ 8 = 7$ (resto 4); $40 ÷ 8 = 5$ (resto 0).'], ['Decimal', '$0,875$.'], ['Porcentagem', '$0,875 = 87,5\%$.']], '${7|8} = 0,875 = 87,5\%$.'],
        ['Geratriz de uma dízima', 'Encontre a fração geratriz de $0,4545…$', [['Chamar de x', '$x = 0,4545…$'], ['Deslocar o período', 'O período tem 2 algarismos: $100x = 45,4545…$'], ['Subtrair', '$100x − x = 45$, logo $99x = 45$.'], ['Simplificar', '$x = {45|99} = {5|11}$.']], 'A geratriz é <strong>${5|11}$</strong>.']
      ],
      widget: { titulo: 'Fração, decimal e porcentagem ao mesmo tempo', html: wf.html, js: wf.js },
      pratique: [
        ['Decimal para fração', 'O número decimal $0,35$ é igual à fração:', ['${7|20}$', '${35|10}$', '${3|5}$', '${35|1000}$'], 0, '$0,35 = {35|100} = {7|20}$ (dividindo por 5). <strong>Alternativa A.</strong>'],
        ['Fração para porcentagem', 'A fração ${3|8}$ corresponde a:', ['$38\%$', '$37,5\%$', '$3,8\%$', '$83\%$'], 1, '$3 ÷ 8 = 0,375 = 37,5\%$. <strong>Alternativa B.</strong>'],
        ['A dízima', 'Qual fração é igual a $0,666…$?', ['${2|3}$', '${3|2}$', '${6|10}$', '${66|100}$'], 0, 'Período $6$ de 1 algarismo: ${6|9} = {2|3}$. <strong>Alternativa A.</strong>']
      ],
      enem: ['O tanque', 'Um tanque está com $0,625$ da sua capacidade de água. Essa quantidade corresponde a qual fração da capacidade?', ['${3|5}$', '${5|8}$', '${6|25}$', '${5|6}$', '${62|5}$'], 1, '$0,625 = {625|1000} = {5|8}$ (dividindo por $125$). <strong>Alternativa B.</strong>'],
      cuidados: [['${1|4}$ não é $0,14$', '${1|4} = 1 ÷ 4 = 0,25$: a fração <strong>não</strong> vira decimal escrevendo os números lado a lado.'], ['$0,5$ não é $5\%$', '$0,5 = 50\%$. Para passar de decimal a porcentagem, multiplique por $100$.'], ['Dízima não é "quase"', '$0,333… = {1|3}$ exatamente; $0,33$ é só uma aproximação.'], ['Denominador zero', 'Fração com denominador $0$ não existe: ${5|0}$ não é número.']],
      quiz: [
        { q: 'O decimal que representa ${1|5}$ é:', o: ['$0,15$', '$0,2$', '$0,5$', '$1,5$'], a: 1 },
        { q: '$0,08$ é igual à fração:', o: ['${8|10}$', '${8|1000}$', '${2|25}$', '${4|5}$'], a: 2 },
        { q: '$25\%$ de um número é a mesma coisa que:', o: ['${1|4}$ dele', '${1|2}$ dele', '${2|5}$ dele', '${1|25}$ dele'], a: 0 },
        { q: 'A geratriz de $0,111…$ é:', o: ['${1|11}$', '${1|10}$', '${1|9}$', '${11|100}$'], a: 2 }
      ],
      sintese: [['Racional', 'Quociente de inteiros com denominador diferente de zero.'], ['Conversões', 'Fração ÷ para decimal; decimal × 100 para porcentagem; denominador 10, 100… para voltar à fração.'], ['Dízimas', 'Período no numerador; 9, 99, 999… no denominador.']],
      msg: 'Agora você troca de representação com segurança. Próxima aula: fração como parte do todo, razão e número misto.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'fracao-parte-razao-misto', titulo: 'Fração como parte do todo, razão e número misto',
      h1: `Frações: ${co('growth')}parte, razão e número misto</span>`,
      sub: 'A fração aparece de três formas: parte de um todo, divisão e comparação entre quantidades (razão). Aprender a ler cada uma evita erros de interpretação.',
      badges: [['parte-todo'], ['razão', 'growth'], ['misto', 'decay']], color: 'growth',
      roteiro: ['Do desenho da pizza à razão entre grandezas.', [['Parte de um todo', 'numerador e denominador', 'bulb'], ['Tipos de fração', 'própria, imprópria, aparente', 'target'], ['Número misto', 'ir e voltar', 'scale'], ['Razão', 'comparar duas quantidades', 'chart'], ['Problemas', 'ler e interpretar', 'book']]],
      objetivos: ['Interpretar a fração como <strong>parte de um todo</strong> e como <strong>quociente</strong>.', 'Classificar frações e converter <strong>número misto</strong> em fração imprópria e vice-versa.', 'Escrever e simplificar uma <strong>razão</strong> entre duas quantidades.'],
      dica: 'Numerador = quantas partes <strong>tomamos</strong>; denominador = em quantas partes <strong>iguais</strong> o todo foi dividido.',
      gancho: { titulo: 'A pizza que sobrou', texto: 'Uma pizza foi cortada em <strong>8 fatias iguais</strong>. Foram comidas $3$ fatias. Que fração da pizza <strong>sobrou</strong>?', mini: ['A fração que sobrou:', ['${3|8}$', '${5|8}$', '${5|3}$', '${8|5}$'], 1, 'Sobraram $8 − 3 = 5$ fatias de $8$: ${5|8}$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · tipos de fração', 'Própria, imprópria, aparente e mista', g2(`<div>
              ${tbl(['Tipo', 'Característica', 'Exemplo'], [['Própria', 'numerador < denominador', '${3|5}$'], ['Imprópria', 'numerador > denominador', '${9|4}$'], ['Aparente', 'numerador múltiplo do denominador', '${12|3} = 4$'], ['Mista', 'inteiro + fração própria', '$2 {1|4}$']])}
            </div>`, card(`<strong>Ida e volta do número misto</strong>
              <p style="font-size:.92rem;margin-top:8px;">Misto → fração: $3 {2|5} = {3 · 5 + 2|5} = {17|5}$.</p>
              <p style="font-size:.92rem;margin-top:6px;">Fração → misto: $17 ÷ 5 = 3$, resto $2$ ⇒ $3 {2|5}$.</p>`, 'primary'))],
        ['Teoria · razão', 'Comparar duas quantidades por divisão', g2(`<div>
              ${checks(['<strong>Razão</strong> entre $a$ e $b$ é ${a|b}$ ($b ≠ 0$): lemos "$a$ para $b$".', 'Em uma sala com $12$ meninas e $18$ meninos, a razão de meninas para meninos é ${12|18} = {2|3}$.', 'A <strong>ordem importa</strong>: a razão de meninos para meninas é ${3|2}$.', 'A razão entre uma parte e o todo é uma fração do todo: meninas são ${12|30} = {2|5}$ da turma.'], '.95rem')}
            </div>`, callout('Simplifique', 'Divida numerador e denominador pelo <strong>mesmo número</strong> até não dar mais: $12$ e $18$ são divisíveis por $6$ ⇒ ${2|3}$.', 'growth'))]
      ],
      exemplos: [
        ['Misto e imprópria', 'Escreva ${29|6}$ como número misto e $4 {3|7}$ como fração imprópria.', [['Dividir 29 por 6', '$29 = 4 · 6 + 5$, quociente $4$ e resto $5$.'], ['Montar o misto', '${29|6} = 4 {5|6}$.'], ['Misto para imprópria', '$4 {3|7} = {4 · 7 + 3|7} = {31|7}$.']], '${29|6} = 4 {5|6}$ e $4 {3|7} = {31|7}$.'],
        ['Uma razão de campeonato', 'Um time venceu $9$ dos $15$ jogos que disputou. Qual é a razão entre vitórias e jogos? E qual é a porcentagem?', [['Razão', '${9|15}$.'], ['Simplificar', 'Divida por $3$: ${3|5}$.'], ['Porcentagem', '${3|5} = 0,6 = 60\%$.']], 'Razão ${3|5}$, isto é, <strong>60%</strong> de aproveitamento.']
      ],
      pratique: [
        ['De misto para fração', 'O número misto $5 {2|3}$ é igual à fração:', ['${17|3}$', '${13|3}$', '${10|3}$', '${7|3}$'], 0, '$5 · 3 + 2 = 17$ ⇒ ${17|3}$. <strong>Alternativa A.</strong>'],
        ['De fração para misto', 'A fração ${23|4}$ é igual a:', ['$4 {3|4}$', '$5 {3|4}$', '$5 {1|4}$', '$6 {3|4}$'], 1, '$23 = 5 · 4 + 3$ ⇒ $5 {3|4}$. <strong>Alternativa B.</strong>'],
        ['A razão certa', 'Em uma prova, $20$ dos $25$ alunos foram aprovados. A razão entre aprovados e total, na forma irredutível, é:', ['${20|25}$', '${4|5}$', '${5|4}$', '${1|5}$'], 1, '${20|25} = {4|5}$ (dividindo por $5$). <strong>Alternativa B.</strong>']
      ],
      enem: ['Os óculos da turma', 'Em uma turma de $40$ alunos, ${3|8}$ usam óculos. Quantos alunos usam óculos?', ['$5$', '$8$', '$15$', '$24$', '$32$'], 2, '$40 ÷ 8 = 5$ e $3 · 5 = 15$. <strong>Alternativa C.</strong>'],
      cuidados: [['Partes desiguais', 'Só vale ${3|8}$ se as $8$ fatias forem <strong>iguais</strong>.'], ['Razão invertida', 'Razão de $a$ para $b$ é ${a|b}$, não ${b|a}$; confira a ordem do enunciado.'], ['Misto errado', '$2 {1|3}$ não é ${2|3}$ nem ${3|3}$: é $2 + {1|3} = {7|3}$.'], ['Simplificar pela metade', 'Simplifique até a fração ficar <strong>irredutível</strong> ($12$ e $18$: dividir por $2$ não basta).']],
      quiz: [
        { q: 'A fração ${15|5}$ é do tipo:', o: ['própria', 'aparente', 'mista', 'decimal'], a: 1 },
        { q: '$3 {1|2}$ é igual a:', o: ['${3|2}$', '${4|2}$', '${7|2}$', '${5|2}$'], a: 2 },
        { q: 'A razão entre $6$ e $9$ é, simplificada:', o: ['${6|9}$', '${3|2}$', '${2|3}$', '${1|3}$'], a: 2 },
        { q: 'Dividido em $6$ partes iguais, quanto vale $4$ partes?', o: ['${4|6}$', '${6|4}$', '${2|6}$', '${4|10}$'], a: 0 }
      ],
      sintese: [['Fração', 'Numerador toma partes; denominador conta as partes iguais do todo.'], ['Misto', 'Ida: inteiro × denominador + numerador. Volta: divida e use o resto.'], ['Razão', 'Comparação por divisão; a ordem importa e a simplificação é bem-vinda.']],
      msg: 'Próxima aula: calcular a fração de uma quantidade e comparar frações.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'fracao-de-quantidade-e-comparacao', titulo: 'Fração de uma quantidade e comparação de frações',
      h1: `Frações: ${co('growth')}quanto vale e quem é maior</span>`,
      sub: 'Calcular a fração de uma quantidade e saber qual de duas frações é maior são habilidades de todo dia: descontos, receitas, distâncias e pesquisas.',
      badges: [['fração de'], ['comparar', 'growth'], ['reta', 'decay']], color: 'growth',
      roteiro: ['Dividir pelo denominador, multiplicar pelo numerador.', [['Fração de um valor', 'dividir e multiplicar', 'coin'], ['Mesmo denominador', 'compara-se o numerador', 'scale'], ['Mesmo numerador', 'maior denominador, menor fração', 'target'], ['Referência 1/2 e 1', 'estimar rápido', 'bulb'], ['Ordenar', 'frações na reta', 'chart']]],
      objetivos: ['Calcular a <strong>fração de uma quantidade</strong>.', '<strong>Comparar</strong> frações com mesmo denominador, mesmo numerador ou usando referências.', '<strong>Ordenar</strong> frações e localizá-las na reta numérica.'],
      dica: 'Para a fração de uma quantidade: <strong>divida pelo denominador</strong> (acha uma parte) e <strong>multiplique pelo numerador</strong> (toma as partes).',
      gancho: { titulo: 'Dois descontos', texto: 'Uma loja oferece desconto de <strong>${1|3}$</strong> do preço em uma camisa e de <strong>${2|5}$</strong> em uma calça. Sem calcular o valor, qual é o <strong>maior</strong> desconto em fração?', mini: ['Qual fração é maior?', ['${1|3}$', '${2|5}$', 'São iguais', 'Não dá para comparar'], 1, '${1|3} ≈ 0,333$ e ${2|5} = 0,4$. Como $0,4 > 0,333$, o maior é ${2|5}$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fração de uma quantidade', 'Dividir por baixo, multiplicar por cima', g2(`<div>
              ${checks(['<strong>${2|5}$ de $60$:</strong> $60 ÷ 5 = 12$ (um quinto) e $2 · 12 = 24$.', 'Em uma conta só: ${2|5} · 60 = {2 · 60|5} = 24$.', '<strong>${3|4}$ de R$ 80:</strong> $80 ÷ 4 = 20$ e $3 · 20 = 60$ reais.', 'Fração do todo: se $5$ de $20$ alunos faltaram, faltaram ${5|20} = {1|4}$ da turma.'], '.95rem')}
            </div>`, callout('Palavra "de"', 'Em matemática, "fração <strong>de</strong> um número" significa <strong>multiplicar</strong>: ${2|5}$ de $60$ é ${2|5} · 60$.', 'growth'))],
        ['Teoria · comparando frações', 'Três atalhos', g2(`<div>
              ${checks(['<strong>Mesmo denominador:</strong> é maior a de maior numerador: ${5|9} > {2|9}$.', '<strong>Mesmo numerador:</strong> é maior a de <strong>menor</strong> denominador: ${3|4} > {3|7}$.', '<strong>Referências:</strong> compare com ${1|2}$ e com $1$: ${4|7} > {1|2}$ (pois $4 > 3,5$) e ${3|8} < {1|2}$.', 'Se nada ajudar, use <strong>frações equivalentes</strong> (mesmo denominador) ou os <strong>decimais</strong>.'], '.95rem')}
            </div>`, card(`<strong>Ordem crescente</strong>
              <p style="font-size:.92rem;margin-top:8px;">\${1|4} < {1|3} < {1|2} < {3|4}$.</p>
              <p class="hint" style="margin-top:6px;">Com numerador $1$, quanto maior o denominador, menor a fração.</p>`, 'primary'))]
      ],
      exemplos: [
        ['Fração do salário', 'Rafael gasta ${3|8}$ do salário de R$ 2.400 com aluguel e ${1|6}$ com alimentação. Quanto sobra para o resto?', [['Aluguel', '$2400 ÷ 8 = 300$; $3 · 300 = 900$ reais.'], ['Alimentação', '$2400 ÷ 6 = 400$ reais.'], ['Total gasto', '$900 + 400 = 1300$ reais.'], ['O que sobra', '$2400 − 1300 = 1100$ reais.']], 'Sobram <strong>R$ 1.100</strong>.'],
        ['Qual é maior?', 'Compare ${5|6}$ e ${7|9}$.', [['Referência', 'Ambas estão perto de $1$: faltam ${1|6}$ e ${2|9}$ para completar o inteiro.'], ['Comparar o que falta', '${1|6} ≈ 0,167$ e ${2|9} ≈ 0,222$: falta menos em ${5|6}$.'], ['Conferir pelos decimais', '${5|6} ≈ 0,833$ e ${7|9} ≈ 0,778$.']], '<strong>${5|6} > {7|9}$</strong>.']
      ],
      pratique: [
        ['Fração de uma quantidade', 'Os ${3|5}$ de $45$ são:', ['$9$', '$15$', '$27$', '$75$'], 2, '$45 ÷ 5 = 9$ e $3 · 9 = 27$. <strong>Alternativa C.</strong>'],
        ['Quem é a maior?', 'Entre as frações ${4|9}$, ${4|7}$ e ${4|11}$, a <strong>menor</strong> é:', ['${4|9}$', '${4|7}$', '${4|11}$', 'todas são iguais'], 2, 'Mesmo numerador: quanto maior o denominador, menor a fração. <strong>Alternativa C.</strong>'],
        ['Conta de luz', 'Em uma casa, ${2|7}$ da conta de luz de R$ 245 vêm do chuveiro. Isso dá, em reais:', ['R$ 35', 'R$ 70', 'R$ 175', 'R$ 98'], 1, '$245 ÷ 7 = 35$ e $2 · 35 = 70$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Percurso de ônibus', 'Um ônibus já percorreu ${3|8}$ de um trajeto de $240$ km. Quantos quilômetros ainda faltam?', ['$30$', '$90$', '$150$', '$180$', '$210$'], 2, 'Percorrido: $240 ÷ 8 = 30$; $3 · 30 = 90$ km. Falta $240 − 90 = 150$ km. <strong>Alternativa C.</strong>'],
      cuidados: [['Fração de é multiplicação', '"${3|5}$ de 45" é ${3|5} · 45$, não ${3|5} + 45$.'], ['Maior denominador, maior fração?', 'Só com o <strong>mesmo numerador</strong> a de maior denominador é a menor.'], ['Resposta é a parte, não o todo', 'Depois de achar ${3|8}$ de $240$, leia a pergunta: ela pede a parte ou o que falta?'], ['Decimais aproximados', 'Ao comparar pelos decimais, use casas suficientes para não empatar por arredondamento.']],
      quiz: [
        { q: '${1|4}$ de $120$ é:', o: ['$4$', '$30$', '$40$', '$480$'], a: 1 },
        { q: 'Qual é maior?', o: ['${3|10}$', '${3|8}$', '${3|20}$', '${3|100}$'], a: 1 },
        { q: '${5|6}$ é maior ou menor que ${1|2}$?', o: ['maior', 'menor', 'igual', 'não dá para saber'], a: 0 },
        { q: 'Os ${2|3}$ de $90$ são:', o: ['$30$', '$45$', '$60$', '$135$'], a: 2 }
      ],
      sintese: [['Fração de', 'Divida pelo denominador e multiplique pelo numerador.'], ['Comparar', 'Mesmo denominador, mesmo numerador, referências 1/2 e 1; ou equivalentes e decimais.'], ['Ordenar', 'Com numerador 1, maior denominador significa menor fração.']],
      msg: 'Próximo módulo: frações equivalentes, para somar e comparar com segurança.'
    }
  ]
});
