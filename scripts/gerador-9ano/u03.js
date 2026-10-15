// Módulo 3 · 9º ano · Recomposição · 1º trimestre — Frações equivalentes (aulas 7 a 9 do plano)
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const we = Wd.equivalente('re3');

module.exports = unidade({
  tri: 1, dir: 'fracoes-equivalentes', titulo: 'Frações equivalentes', accent: 'growth', icon: 'pie', key: 'r1u3',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'equivalencia-e-simplificacao', titulo: 'Frações equivalentes e simplificação',
      h1: `Frações ${co('growth')}diferentes, mesmo valor</span>`,
      sub: 'Duas frações são equivalentes quando representam a mesma quantidade. Multiplicar ou dividir numerador e denominador pelo mesmo número gera frações equivalentes.',
      badges: [['equivalência'], ['simplificar', 'growth'], ['irredutível', 'decay']], color: 'growth',
      roteiro: ['Como reconhecer, gerar e simplificar frações equivalentes.', [['Mesma quantidade', 'desenhos e reta', 'bulb'], ['Gerar equivalentes', 'multiplicar os dois termos', 'scale'], ['Simplificar', 'dividir os dois termos', 'target'], ['Irredutível', 'quando parar', 'chart'], ['Teste cruzado', 'produtos em cruz', 'book']]],
      objetivos: ['Reconhecer <strong>frações equivalentes</strong> em diferentes representações.', '<strong>Gerar</strong> frações equivalentes multiplicando ou dividindo os dois termos pelo mesmo número.', '<strong>Simplificar</strong> até a fração <strong>irredutível</strong>.'],
      dica: 'O que não muda a fração: <strong>multiplicar ou dividir</strong> numerador e denominador pelo <strong>mesmo número diferente de zero</strong>.',
      gancho: { titulo: 'Meia pizza de três jeitos', texto: 'Ana comeu <strong>${1|2}$</strong> da pizza cortada em 2 pedaços. Beto comeu <strong>${2|4}$</strong> de uma pizza igual, cortada em 4. Carla comeu <strong>${4|8}$</strong> de outra, cortada em 8. Quem comeu mais?', mini: ['Quem comeu mais pizza?', ['Ana', 'Beto', 'Carla', 'Todos comeram a mesma quantidade'], 3, 'As três frações valem a metade da pizza. <strong>Alternativa D.</strong>'] },
      teoria: [
        ['Teoria · gerar equivalentes', 'Multiplicar os dois termos pelo mesmo número', g2(`<div>
              ${checks(['${1|2}$ e ${2|4}$ e ${4|8}$ <strong>representam a mesma parte do todo</strong>.', 'Multiplicando por $2$: ${1|2} = {1 · 2|2 · 2} = {2|4}$.', 'Multiplicando por $3$: ${1|2} = {3|6}$; por $5$: ${1|2} = {5|10}$.', 'Há <strong>infinitas</strong> frações equivalentes a uma dada.'], '.95rem')}
            </div>`, card(`<strong>Sequência de equivalentes de ${'$'}{2|3}${'$'}</strong>
              <p style="font-size:.95rem;margin-top:8px;">${'$'}{2|3} = {4|6} = {6|9} = {8|12} = {10|15} = …${'$'}</p>
              <p class="hint" style="margin-top:6px;">Cada termo é múltiplo de $2$ e de $3$, respectivamente, pelo mesmo fator.</p>`, 'primary'))],
        ['Teoria · simplificar', 'Dividir os dois termos pelo mesmo número', g2(`<div>
              ${checks(['<strong>Simplificar</strong> é dividir numerador e denominador por um <strong>divisor comum</strong>.', '${12|18}$ ÷ $2$ ⇒ ${6|9}$; ÷ $3$ ⇒ ${2|3}$. Dividindo direto pelo $"mdc"(12, 18) = 6$: ${2|3}$.', 'Fração <strong>irredutível</strong>: numerador e denominador só têm o $1$ como divisor comum.', 'Teste de equivalência: ${a|b} = {c|d}$ quando $a · d = b · c$ (produtos em cruz).'], '.95rem')}
            </div>`, callout('Produtos em cruz', 'Para saber se ${3|4}$ e ${9|12}$ são equivalentes: $3 · 12 = 36$ e $4 · 9 = 36$. Iguais ⇒ equivalentes.', 'growth'))]
      ],
      exemplos: [
        ['Simplificar até o fim', 'Simplifique ${84|126}$ até a fração irredutível.', [['Primeiro divisor comum', 'Os dois são pares: ÷ $2$ ⇒ ${42|63}$.'], ['Continuar', '$42$ e $63$ são múltiplos de $21$: ÷ $21$ ⇒ ${2|3}$.'], ['Conferir', '$2$ e $3$ só têm o $1$ como divisor comum.']], 'A irredutível é <strong>${2|3}$</strong>.'],
        ['Teste cruzado', '${5|8}$ e ${15|24}$ são equivalentes? E ${5|8}$ e ${10|17}$?', [['Primeiro par', '$5 · 24 = 120$ e $8 · 15 = 120$. Iguais.'], ['Segundo par', '$5 · 17 = 85$ e $8 · 10 = 80$. Diferentes.']], 'Sim para ${15|24}$; <strong>não</strong> para ${10|17}$.']
      ],
      widget: { titulo: 'Gerador de frações equivalentes', html: we.html, js: we.js },
      pratique: [
        ['Fração equivalente', 'Qual fração é equivalente a ${3|5}$?', ['${6|10}$', '${6|15}$', '${5|3}$', '${9|20}$'], 0, 'Multiplicando por $2$: ${6|10}$. <strong>Alternativa A.</strong>'],
        ['Simplificação', 'A forma irredutível de ${36|48}$ é:', ['${9|12}$', '${6|8}$', '${3|4}$', '${12|16}$'], 2, 'O mdc é $12$: ${36 ÷ 12|48 ÷ 12} = {3|4}$. <strong>Alternativa C.</strong>'],
        ['Termo que falta', 'Em ${4|9} = {x|45}$, o valor de $x$ é:', ['$5$', '$20$', '$36$', '$45$'], 1, '$9 · 5 = 45$, então $x = 4 · 5 = 20$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Jarras de suco', 'Duas jarras iguais têm suco: a primeira está com ${3|4}$ da capacidade e a segunda com ${15|20}$. Sobre as quantidades, é correto afirmar que:', ['a primeira tem mais suco', 'a segunda tem mais suco', 'as duas têm a mesma quantidade', 'a primeira tem o dobro da segunda', 'não é possível comparar'], 2, '${15|20}$ ÷ $5$ ⇒ ${3|4}$. São equivalentes. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar o mesmo número', 'Somar $2$ aos dois termos <strong>não</strong> mantém a fração: ${1|2}$ não é ${3|4}$.'], ['Mudar só um termo', 'Multiplicar só o numerador muda o valor da fração.'], ['Parar cedo', 'Antes de dizer "simplifiquei", confira se ainda há divisor comum.'], ['Denominador maior = maior', 'Frações equivalentes têm termos diferentes e o <strong>mesmo valor</strong>.']],
      quiz: [
        { q: 'Qual par é de frações equivalentes?', o: ['${1|3}$ e ${2|5}$', '${2|6}$ e ${1|3}$', '${3|4}$ e ${4|3}$', '${5|10}$ e ${1|5}$'], a: 1 },
        { q: 'A forma irredutível de ${20|30}$ é:', o: ['${10|15}$', '${4|6}$', '${2|3}$', '${1|2}$'], a: 2 },
        { q: 'Em ${2|7} = {8|y}$, y vale:', o: ['$14$', '$21$', '$28$', '$35$'], a: 2 },
        { q: 'Para gerar uma fração equivalente, podemos:', o: ['somar o mesmo número aos dois termos', 'multiplicar os dois termos pelo mesmo número', 'multiplicar só o numerador', 'trocar numerador e denominador'], a: 1 }
      ],
      sintese: [['Equivalentes', 'Mesmo valor, termos diferentes; multiplique ou divida os dois termos pelo mesmo número.'], ['Simplificação', 'Divida pelo maior divisor comum até a fração ficar irredutível.'], ['Teste', 'Produtos em cruz iguais confirmam a equivalência.']],
      msg: 'Próxima aula: levar frações ao mesmo denominador para comparar e ordenar.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'mesmo-denominador-e-mmc', titulo: 'Frações com o mesmo denominador e o mínimo múltiplo comum',
      h1: `Mesmo denominador: ${co('growth')}comparar e ordenar</span>`,
      sub: 'Para comparar ou somar frações com denominadores diferentes, escolhemos frações equivalentes com o mesmo denominador. O melhor denominador comum é o MMC.',
      badges: [['MMC'], ['comum', 'growth'], ['ordenar', 'decay']], color: 'growth',
      roteiro: ['Do MMC à ordenação de várias frações.', [['O que é o MMC', 'menor múltiplo comum', 'bulb'], ['Denominador comum', 'achar o novo denominador', 'scale'], ['Converter', 'equivalentes de cada fração', 'target'], ['Comparar', 'olhar os numeradores', 'chart'], ['Ordenar', 'crescente e decrescente', 'book']]],
      objetivos: ['Calcular o <strong>MMC</strong> de dois ou três denominadores.', 'Reescrever frações com o <strong>mesmo denominador</strong>.', '<strong>Comparar e ordenar</strong> frações usando denominador comum.'],
      dica: 'MMC de dois números: o <strong>menor</strong> número que é múltiplo dos dois ao mesmo tempo.',
      gancho: { titulo: 'Três amigos, três partes', texto: 'Léo comeu ${1|2}$ de uma barra de chocolate, Mia comeu ${1|3}$ e Noé comeu ${1|6}$ de barras iguais. Para colocar as frações em um mesmo "tamanho de pedaço", cortamos cada barra em quantos pedaços?', mini: ['O menor denominador comum de 2, 3 e 6 é:', ['$6$', '$12$', '$18$', '$36$'], 0, 'O $6$ é múltiplo de $2$, $3$ e $6$, e é o menor. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · MMC', 'Menor múltiplo comum', g2(`<div>
              ${checks(['Múltiplos de $4$: $4, 8, 12, 16, 20, 24, …$', 'Múltiplos de $6$: $6, 12, 18, 24, 30, …$', 'Comuns: $12, 24, …$ ⇒ <strong>MMC(4, 6) = 12</strong>.', 'Com decomposição em fatores primos: $4 = 2²$ e $6 = 2 · 3$ ⇒ MMC $= 2² · 3 = 12$ (maiores expoentes).'], '.95rem')}
            </div>`, card(`<strong>Atalhos úteis</strong>
              <p style="font-size:.92rem;margin-top:8px;">Se um número é múltiplo do outro, o MMC é o maior: MMC(3, 9) = 9.</p>
              <p style="font-size:.92rem;margin-top:6px;">Se são primos entre si, o MMC é o produto: MMC(4, 9) = 36.</p>`, 'primary'))],
        ['Teoria · denominador comum', 'Converter e comparar', g2(`<div>
              ${checks(['Compare ${3|4}$ e ${5|6}$: MMC(4, 6) = $12$.', '${3|4} = {9|12}$ (× $3$) e ${5|6} = {10|12}$ (× $2$).', 'Mesmo denominador: maior numerador, maior fração ⇒ ${5|6} > {3|4}$.', 'Para ordenar várias, converta <strong>todas</strong> ao mesmo denominador e ordene os numeradores.'], '.95rem')}
            </div>`, callout('Como converter', 'Novo numerador = numerador × (MMC ÷ denominador antigo). Em ${3|4}$ para denominador $12$: $12 ÷ 4 = 3$ e $3 · 3 = 9$.', 'growth'))]
      ],
      exemplos: [
        ['MMC de três números', 'Calcule MMC(6, 8, 12).', [['Decompor', '$6 = 2 · 3$; $8 = 2³$; $12 = 2² · 3$.'], ['Maiores expoentes', '$2³$ e $3$.'], ['Multiplicar', '$2³ · 3 = 8 · 3 = 24$.']], 'MMC(6, 8, 12) = <strong>24</strong>.'],
        ['Ordenar frações', 'Coloque em ordem crescente: ${2|3}$, ${3|4}$, ${5|8}$.', [['MMC', 'MMC(3, 4, 8) = $24$.'], ['Converter', '${2|3} = {16|24}$; ${3|4} = {18|24}$; ${5|8} = {15|24}$.'], ['Ordenar numeradores', '$15 < 16 < 18$.']], 'Ordem crescente: <strong>${5|8} < {2|3} < {3|4}$</strong>.']
      ],
      pratique: [
        ['Qual o MMC?', 'O MMC de $9$ e $12$ é:', ['$3$', '$18$', '$36$', '$108$'], 2, '$9 = 3²$ e $12 = 2² · 3$ ⇒ MMC $= 2² · 3² = 36$. <strong>Alternativa C.</strong>'],
        ['Maior fração', 'Entre ${5|6}$, ${7|9}$ e ${11|12}$, a maior é:', ['${5|6}$', '${7|9}$', '${11|12}$', 'todas são iguais'], 2, 'MMC = $36$: $30$, $28$ e $33$ trinta e seis avos. A maior é ${11|12}$. <strong>Alternativa C.</strong>'],
        ['Mesmo denominador', 'Ao escrever ${1|4}$ e ${5|6}$ com o menor denominador comum, obtemos:', ['${3|12}$ e ${10|12}$', '${6|24}$ e ${20|24}$', '${2|8}$ e ${5|8}$', '${1|12}$ e ${5|12}$'], 0, 'MMC(4, 6) = $12$: ${3|12}$ e ${10|12}$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A corrida', 'Três corredores terminaram, respectivamente, ${4|5}$, ${7|9}$ e ${3|4}$ de um percurso em dado instante. Quem estava na frente?', ['o primeiro (${4|5}$)', 'o segundo (${7|9}$)', 'o terceiro (${3|4}$)', 'todos empatados', 'não dá para saber'], 0, 'MMC(5, 9, 4) = $180$: ${144|180}$, ${140|180}$ e ${135|180}$. O maior é ${4|5}$. <strong>Alternativa A.</strong>'],
      cuidados: [['MMC é diferente de MDC', 'MDC (maior divisor comum) <strong>simplifica</strong>; MMC (menor múltiplo comum) <strong>iguala denominadores</strong>.'], ['Multiplicar só o denominador', 'Ao mudar o denominador, multiplique também o numerador pelo mesmo fator.'], ['Qualquer denominador comum serve', 'Serve, mas o MMC mantém os números menores e as contas mais curtas.'], ['Maior denominador = maior', '${1|8}$ é menor que ${1|2}$, apesar de $8 > 2$.']],
      quiz: [
        { q: 'MMC(10, 15) é:', o: ['$5$', '$25$', '$30$', '$150$'], a: 2 },
        { q: 'O menor denominador comum de ${1|6}$ e ${3|8}$ é:', o: ['$14$', '$24$', '$48$', '$12$'], a: 1 },
        { q: 'Qual é maior: ${5|8}$ ou ${7|12}$?', o: ['${5|8}$', '${7|12}$', 'iguais', 'não dá'], a: 0 },
        { q: 'Ordem crescente de ${1|2}$, ${1|3}$, ${1|4}$:', o: ['${1|2}$, ${1|3}$, ${1|4}$', '${1|4}$, ${1|3}$, ${1|2}$', '${1|3}$, ${1|4}$, ${1|2}$', '${1|4}$, ${1|2}$, ${1|3}$'], a: 1 }
      ],
      sintese: [['MMC', 'Menor múltiplo comum: fatores primos com os maiores expoentes.'], ['Converter', 'Novo numerador = numerador × (MMC ÷ denominador antigo).'], ['Ordenar', 'Mesmo denominador ⇒ compare numeradores.']],
      msg: 'Próxima aula: equivalência em situações do dia a dia e na reta numérica.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'equivalencia-em-problemas', titulo: 'Frações equivalentes em problemas e na reta numérica',
      h1: `Equivalência ${co('growth')}no dia a dia e na reta</span>`,
      sub: 'Receitas, medidas e tempo escondem frações equivalentes. Na reta numérica, frações equivalentes ocupam o mesmo ponto.',
      badges: [['reta'], ['receitas', 'growth'], ['medidas', 'decay']], color: 'growth',
      roteiro: ['Aplicar a equivalência fora do papel.', [['Mesmo ponto na reta', 'equivalentes coincidem', 'chart'], ['Receitas', 'dobrar e reduzir', 'coin'], ['Tempo e medidas', 'meia hora, quarto de hora', 'bulb'], ['Resolver', 'passo a passo', 'target'], ['Conferir', 'estimativa e simplificação', 'book']]],
      objetivos: ['Localizar frações equivalentes no <strong>mesmo ponto</strong> da reta numérica.', 'Usar equivalência em <strong>receitas, tempo e medidas</strong>.', 'Resolver problemas escolhendo o <strong>denominador mais conveniente</strong>.'],
      dica: 'Em problemas, escolha o denominador que deixa a conta <strong>mais fácil</strong>: ${1|2}$ de hora é $30$ min; ${1|4}$ de hora é $15$ min.',
      gancho: { titulo: 'O bolo da vovó', texto: 'A receita pede <strong>${3|4}$ de xícara</strong> de açúcar para um bolo. Você vai fazer <strong>o dobro</strong> da receita. Quantas xícaras de açúcar são necessárias?', mini: ['Dobro de ${3|4}$ de xícara:', ['${3|8}$', '${6|8}$ (que é ${3|4}$)', '${3|2}$', '${6|4}$ (que é ${3|2}$)'], 3, '$2 · {3|4} = {6|4} = {3|2}$ = uma xícara e meia. <strong>Alternativa D</strong> (${6|4}$ e ${3|2}$ são equivalentes).'] },
      teoria: [
        ['Teoria · reta numérica', 'Equivalentes ocupam o mesmo ponto', g2(`<div>
              ${checks(['Dividindo o intervalo de $0$ a $1$ em $2$, $4$ ou $8$ partes iguais, o ponto da <strong>metade</strong> é o mesmo: ${1|2} = {2|4} = {4|8}$.', 'Mais divisões = marcas mais próximas, mas o ponto da fração não muda.', 'Se uma fração é <strong>imprópria</strong>, ela passa do $1$: ${7|4}$ fica entre $1$ e $2$ ($1 {3|4}$).'], '.95rem')}
            </div>`, card(`<strong>Pontos importantes</strong>
              ${tbl(['Fração', 'Posição na reta'], [['${1|4}$', 'entre 0 e ½'], ['${1|2}$', 'metade do caminho'], ['${3|4}$', 'perto do 1'], ['${5|4}$', 'logo depois do 1']])}`, 'primary'))],
        ['Teoria · aplicações', 'Tempo, receitas e medidas', g2(`<div>
              ${checks(['<strong>Tempo:</strong> ${1|2}$ h $= 30$ min; ${1|4}$ h $= 15$ min; ${3|4}$ h $= 45$ min; ${1|3}$ h $= 20$ min.', '<strong>Medidas:</strong> ${3|4}$ de metro = $75$ cm; ${1|5}$ de litro = $200$ mL.', '<strong>Receitas:</strong> dobrar = multiplicar por $2$; reduzir à metade = dividir por $2$.', 'Use a equivalência para <strong>somar</strong> quantidades: ${1|2} + {1|4} = {2|4} + {1|4} = {3|4}$.'], '.95rem')}
            </div>`, callout('Dica', 'Se a fração tem denominador de 60, 30, 15, 12 ou 4, pense em <strong>horas e minutos</strong>.', 'growth'))]
      ],
      exemplos: [
        ['Receita ajustada', 'Uma receita pede ${2|3}$ de xícara de farinha para 4 porções. Quanta farinha para 6 porções?', [['Razão de porções', '$6 ÷ 4 = {3|2}$ da receita.'], ['Multiplicar', '${3|2} · {2|3} = {6|6} = 1$.']], 'São necessárias <strong>1 xícara</strong> de farinha.'],
        ['Tempo em fração', 'Uma aula dura ${5|6}$ de hora. Quantos minutos?', [['Hora tem 60 minutos', 'Calcule ${5|6}$ de $60$.'], ['Dividir e multiplicar', '$60 ÷ 6 = 10$ e $5 · 10 = 50$.']], 'A aula dura <strong>50 minutos</strong>.']
      ],
      pratique: [
        ['Fração de hora', '${3|4}$ de hora equivalem a:', ['$15$ min', '$30$ min', '$45$ min', '$75$ min'], 2, '${3|4}$ de $60$ min: $60 ÷ 4 = 15$; $3 · 15 = 45$. <strong>Alternativa C.</strong>'],
        ['Na reta', 'Qual fração está no mesmo ponto da reta que ${3|6}$?', ['${1|3}$', '${2|4}$', '${3|4}$', '${6|3}$'], 1, '${3|6} = {1|2} = {2|4}$. <strong>Alternativa B.</strong>'],
        ['Metade de uma receita', 'Uma receita usa ${3|4}$ de xícara de leite. A metade da receita usa:', ['${3|8}$ de xícara', '${3|2}$ de xícara', '${1|4}$ de xícara', '${6|4}$ de xícara'], 0, 'Metade de ${3|4}$: ${3|4} ÷ 2 = {3|8}$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A estrada', 'Um carro percorre uma estrada em três trechos: o primeiro com ${1|4}$ do total, o segundo com ${2|8}$ e o terceiro com o restante. A fração do terceiro trecho é:', ['${1|4}$', '${1|2}$', '${3|8}$', '${2|3}$', '${5|8}$'], 1, '${1|4} + {2|8} = {2|8} + {2|8} = {4|8} = {1|2}$. Restante: $1 − {1|2} = {1|2}$. <strong>Alternativa B.</strong>'],
      cuidados: [['${1|3}$ de hora não é 30 min', '${1|3}$ de $60$ min dá $20$ min; ${1|2}$ é que dá $30$ min.'], ['Unidades misturadas', 'Antes de somar, confira se tudo está na mesma unidade (horas, minutos).'], ['Reduzir à metade', 'Reduzir à metade é dividir por $2$ — o denominador é que dobra: ${3|4} ÷ 2 = {3|8}$.'], ['Sem conferir', 'Estime: ${5|6}$ de hora é um pouco menos que uma hora, não pode passar de $60$ min.']],
      quiz: [
        { q: '${1|3}$ de hora são quantos minutos?', o: ['$10$', '$20$', '$30$', '$45$'], a: 1 },
        { q: 'Duas frações equivalentes ocupam, na reta numérica:', o: ['pontos diferentes', 'o mesmo ponto', 'pontos opostos', 'não é possível localizar'], a: 1 },
        { q: 'O dobro de ${5|8}$ de litro, simplificado, é:', o: ['${5|4}$ L', '${10|16}$ L', '${5|16}$ L', '$2$ L'], a: 0 },
        { q: '${7|4}$ está entre:', o: ['0 e 1', '1 e 2', '2 e 3', '3 e 4'], a: 1 }
      ],
      sintese: [['Reta', 'Equivalentes marcam o mesmo ponto; imprópria passa do 1.'], ['Tempo', '${1|2}$ h = 30 min; ${1|4}$ h = 15 min; ${1|3}$ h = 20 min.'], ['Estratégia', 'Escolha o denominador que facilita a conta e confira com estimativa.']],
      msg: 'Próximo módulo: operações com números racionais (somar, subtrair, multiplicar e dividir frações).'
    }
  ]
});
