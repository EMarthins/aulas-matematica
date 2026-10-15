// Módulo 4 · 9º ano · Recomposição · 1º trimestre — Operações com números racionais (aulas 10 a 13 do plano)
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  tri: 1, dir: 'operacoes-com-racionais', titulo: 'Operações com números racionais', accent: 'primary', icon: 'sigma', key: 'r1u4',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'adicao-e-subtracao-de-racionais', titulo: 'Adição e subtração de números racionais',
      h1: `Somar e subtrair ${co('primary')}frações e decimais</span>`,
      sub: 'Para somar ou subtrair frações, elas precisam ter o mesmo denominador. Com decimais, alinhamos a vírgula. Os sinais seguem as regras dos inteiros.',
      badges: [['frações'], ['decimais', 'growth'], ['sinais', 'decay']], color: 'primary',
      roteiro: ['Do mesmo denominador aos decimais e sinais.', [['Mesmo denominador', 'somar numeradores', 'bulb'], ['Denominadores diferentes', 'usar o MMC', 'scale'], ['Decimais', 'alinhar a vírgula', 'chart'], ['Sinais', 'regras dos inteiros', 'target'], ['Conferir', 'estimar o resultado', 'book']]],
      objetivos: ['Somar e subtrair frações com <strong>mesmo</strong> e com <strong>diferentes denominadores</strong>.', 'Operar com <strong>decimais</strong> alinhando a vírgula.', 'Aplicar as <strong>regras de sinais</strong> dos inteiros aos racionais.'],
      dica: 'Só se soma e se subtrai <strong>pedaços do mesmo tamanho</strong>: por isso o denominador comum.',
      gancho: { titulo: 'Fatias de um bolo', texto: 'Ana comeu <strong>${2|8}$</strong> de um bolo e Bia comeu <strong>${3|8}$</strong> do mesmo bolo. Que fração do bolo as duas comeram juntas?', mini: ['A soma ${2|8} + {3|8}$ é:', ['${5|16}$', '${5|8}$', '${6|8}$', '${1|8}$'], 1, 'Mesmo denominador: some os numeradores e mantenha o denominador. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · frações', 'Mesmo denominador e denominadores diferentes', g2(`<div>
              ${checks(['<strong>Mesmo denominador:</strong> ${3|7} + {2|7} = {5|7}$ — o denominador não muda.', '<strong>Diferentes:</strong> ${1|2} + {1|3}$ ⇒ MMC $= 6$ ⇒ ${3|6} + {2|6} = {5|6}$.', 'Subtração é igual: ${3|4} − {1|6} = {9|12} − {2|12} = {7|12}$.', 'No fim, <strong>simplifique</strong> se possível: ${2|6} + {2|6} = {4|6} = {2|3}$.'], '.95rem')}
            </div>`, card(`<strong>Receita rápida</strong>
              <p style="font-size:.92rem;margin-top:8px;">1) Ache o MMC dos denominadores.</p>
              <p style="font-size:.92rem;">2) Converta cada fração.</p>
              <p style="font-size:.92rem;">3) Opere os numeradores.</p>
              <p style="font-size:.92rem;">4) Simplifique.</p>`, 'primary'))],
        ['Teoria · decimais e sinais', 'Alinhe a vírgula, respeite os sinais', g2(`<div>
              ${checks(['<strong>Decimais:</strong> $3,45 + 1,8$: alinhe as vírgulas e complete com zeros ⇒ $3,45 + 1,80 = 5,25$.', '$2,5 − 0,75 = 2,50 − 0,75 = 1,75$.', '<strong>Sinais iguais:</strong> some e mantenha o sinal: $−{1|4} − {1|4} = −{1|2}$.', '<strong>Sinais diferentes:</strong> subtraia e use o sinal do de maior módulo: $−{3|5} + {1|5} = −{2|5}$.'], '.95rem')}
            </div>`, callout('Oposto de fração', 'Subtrair uma fração é somar o seu oposto: $2 − {3|4} = 2 + (−{3|4})$.', 'primary'))]
      ],
      exemplos: [
        ['Soma de três frações', 'Calcule ${1|2} + {2|3} − {1|4}$.', [['MMC', 'MMC(2, 3, 4) = $12$.'], ['Converter', '${6|12} + {8|12} − {3|12}$.'], ['Operar', '$6 + 8 − 3 = 11$ ⇒ ${11|12}$.']], 'O resultado é <strong>${11|12}$</strong>.'],
        ['Com decimais e fração', 'Calcule $0,75 + {1|8}$.', [['Converter para decimal', '${1|8} = 0,125$.'], ['Somar', '$0,75 + 0,125 = 0,875$.'], ['Conferir em fração', '$0,875 = {7|8}$.']], 'O resultado é <strong>$0,875$</strong> (ou ${7|8}$).']
      ],
      pratique: [
        ['Frações com denominador diferente', 'O valor de ${2|3} + {1|6}$ é:', ['${3|9}$', '${5|6}$', '${1|2}$', '${3|6}$'], 1, '${4|6} + {1|6} = {5|6}$. <strong>Alternativa B.</strong>'],
        ['Subtração', 'O valor de ${5|8} − {1|4}$ é:', ['${4|4}$', '${3|8}$', '${4|8}$', '${1|2}$'], 1, '${5|8} − {2|8} = {3|8}$. <strong>Alternativa B.</strong>'],
        ['Decimais', 'O resultado de $12,4 − 3,75$ é:', ['$8,65$', '$9,35$', '$8,75$', '$9,65$'], 0, '$12,40 − 3,75 = 8,65$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Percurso a pé', 'Marta caminhou ${3|5}$ de km pela manhã e ${3|10}$ de km à tarde. Quantos quilômetros ela caminhou no dia?', ['${6|15}$ km', '${3|2}$ km', '${9|10}$ km', '${6|10}$ km', '${9|5}$ km'], 2, '${6|10} + {3|10} = {9|10}$ km. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar denominadores', '${1|3} + {1|3}$ não é ${2|6}$: o denominador permanece, resultado ${2|3}$.'], ['Vírgulas desalinhadas', 'Em $2,5 + 0,25$, alinhe as vírgulas: $2,50 + 0,25 = 2,75$, não $0,50$.'], ['Sinal esquecido', '$−{1|2} − {1|3} = −{5|6}$ (os dois negativos somam em módulo).'], ['Esquecer de simplificar', '${4|8}$ ainda pode ser escrito como ${1|2}$.']],
      quiz: [
        { q: '${1|5} + {2|5}$ é igual a:', o: ['${3|10}$', '${3|5}$', '${2|5}$', '${2|10}$'], a: 1 },
        { q: '$1 − {3|8}$ é igual a:', o: ['${5|8}$', '${3|8}$', '${2|8}$', '${4|8}$'], a: 0 },
        { q: '$0,6 + 0,45$ vale:', o: ['$1,05$', '$0,105$', '$1,5$', '$0,51$'], a: 0 },
        { q: '$−{1|2} + {3|4}$ vale:', o: ['${1|4}$', '$−{1|4}$', '${5|4}$', '$−{5|4}$'], a: 0 }
      ],
      sintese: [['Mesmo denominador', 'Opere os numeradores, mantenha o denominador.'], ['Diferentes', 'MMC, converter, operar, simplificar.'], ['Decimais e sinais', 'Alinhe a vírgula; sinais como nos inteiros.']],
      msg: 'Próxima aula: multiplicar e dividir números racionais.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'multiplicacao-e-divisao-de-racionais', titulo: 'Multiplicação e divisão de números racionais',
      h1: `Multiplicar e dividir ${co('primary')}frações</span>`,
      sub: 'Multiplicar frações é multiplicar numerador por numerador e denominador por denominador. Dividir é multiplicar pelo inverso.',
      badges: [['multiplicar'], ['inverso', 'growth'], ['dividir', 'decay']], color: 'primary',
      roteiro: ['Dois jeitos de ver a multiplicação e o truque da divisão.', [['Fração de fração', 'multiplicar termos', 'bulb'], ['Cancelar antes', 'simplificar em cruz', 'scale'], ['Inverso', 'trocar numerador e denominador', 'target'], ['Dividir', 'multiplicar pelo inverso', 'chart'], ['Decimais', 'conta como com inteiros', 'book']]],
      objetivos: ['Multiplicar <strong>frações e decimais</strong>.', 'Encontrar o <strong>inverso</strong> de um número racional.', 'Dividir racionais <strong>multiplicando pelo inverso</strong>.'],
      dica: '<strong>Dividir por uma fração</strong> é <strong>multiplicar pelo inverso</strong> dela: $6 ÷ {2|3} = 6 · {3|2}$.',
      gancho: { titulo: 'Metade da metade', texto: 'Você tem <strong>${1|2}$ de uma pizza</strong> e come <strong>${1|2}$ dessa sobra</strong>. Que fração da pizza inteira você comeu?', mini: ['${1|2}$ de ${1|2}$ é:', ['${1|2}$', '${1|4}$', '${2|3}$', '${1|8}$'], 1, '${1|2} · {1|2} = {1|4}$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · multiplicação', 'Numerador com numerador, denominador com denominador', g2(`<div>
              ${checks(['${2|3} · {4|5} = {2 · 4|3 · 5} = {8|15}$.', '<strong>Cancele antes:</strong> ${3|8} · {4|9}$ ⇒ divida $3$ e $9$ por $3$, e $4$ e $8$ por $4$ ⇒ ${1|2} · {1|3} = {1|6}$.', 'Inteiro vira fração de denominador $1$: $6 · {2|3} = {6|1} · {2|3} = {12|3} = 4$.', '<strong>Sinais:</strong> iguais ⇒ positivo; diferentes ⇒ negativo.'], '.95rem')}
            </div>`, card(`<strong>Multiplicar por fração menor que 1</strong>
              <p style="font-size:.92rem;margin-top:8px;">$ {1|2} · 10 = 5 $: o resultado é <strong>menor</strong> que 10.</p>
              <p class="hint" style="margin-top:6px;">Multiplicar nem sempre aumenta!</p>`, 'primary'))],
        ['Teoria · divisão', 'Multiplique pelo inverso', g2(`<div>
              ${checks(['<strong>Inverso</strong> de ${a|b}$ é ${b|a}$; de $5$ é ${1|5}$; de $0$ não existe.', '${3|4} ÷ {2|5} = {3|4} · {5|2} = {15|8}$.', '$6 ÷ {2|3} = 6 · {3|2} = 9$ (cabem $9$ pedaços de ${2|3}$ em $6$).', 'Decimais: $2,4 ÷ 0,6$ ⇒ multiplique os dois por $10$ ⇒ $24 ÷ 6 = 4$.'], '.95rem')}
            </div>`, callout('Inverso e oposto são diferentes', 'O <strong>oposto</strong> de ${2|3}$ é $−{2|3}$ (soma $0$). O <strong>inverso</strong> é ${3|2}$ (produto $1$).', 'primary'))]
      ],
      exemplos: [
        ['Multiplicação com cancelamento', 'Calcule ${5|6} · {9|10}$.', [['Cancelar 5 e 10', 'Dividir por $5$: ${1|6} · {9|2}$.'], ['Cancelar 6 e 9', 'Dividir por $3$: ${1|2} · {3|2}$.'], ['Multiplicar', '${3|4}$.']], 'O resultado é <strong>${3|4}$</strong>.'],
        ['Dividir fração por fração', 'Calcule ${7|8} ÷ {7|4}$.', [['Inverter o divisor', '${7|8} · {4|7}$.'], ['Cancelar o 7', '${1|8} · {4|1}$.'], ['Resultado', '${4|8} = {1|2}$.']], 'O resultado é <strong>${1|2}$</strong>.']
      ],
      pratique: [
        ['Produto', 'O valor de ${3|5} · {10|9}$ é:', ['${3|14}$', '${2|3}$', '${13|14}$', '${6|5}$'], 1, '${3|5} · {10|9} = {30|45} = {2|3}$. <strong>Alternativa B.</strong>'],
        ['Divisão', 'O valor de ${5|6} ÷ {10|3}$ é:', ['${25|9}$', '${1|4}$', '${50|18}$', '${5|2}$'], 1, '${5|6} · {3|10} = {15|60} = {1|4}$. <strong>Alternativa B.</strong>'],
        ['Decimais', 'O produto $0,4 · 0,25$ vale:', ['$1$', '$0,1$', '$0,01$', '$0,65$'], 1, '$4 · 25 = 100$ e há $3$ casas decimais: $0,100 = 0,1$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Garrafas de suco', 'Uma garrafa tem $2$ litros de suco. Cada copo recebe ${1|4}$ de litro. Quantos copos podem ser servidos?', ['$4$', '$6$', '$8$', '$12$', '$16$'], 2, '$2 ÷ {1|4} = 2 · 4 = 8$ copos. <strong>Alternativa C.</strong>'],
      cuidados: [['Inverter a primeira fração', 'Só se inverte o <strong>divisor</strong> (a segunda): ${3|4} ÷ {2|5} = {3|4} · {5|2}$.'], ['Quem aumenta?', 'Multiplicar por fração menor que $1$ diminui; dividir por fração menor que $1$ aumenta.'], ['Denominador comum na multiplicação', 'Não precisa de denominador comum para multiplicar nem dividir.'], ['Zero no divisor', 'Dividir por $0$ não tem sentido; $0$ não tem inverso.']],
      quiz: [
        { q: '${2|3} · {3|4}$ é igual a:', o: ['${5|7}$', '${1|2}$', '${6|7}$', '${5|12}$'], a: 1 },
        { q: 'O inverso de ${7|2}$ é:', o: ['$−{7|2}$', '${2|7}$', '$−{2|7}$', '$7$'], a: 1 },
        { q: '$4 ÷ {1|2}$ é:', o: ['$2$', '$4$', '$8$', '${1|8}$'], a: 2 },
        { q: '$−{1|2} · {4|5}$ vale:', o: ['${2|5}$', '$−{2|5}$', '$−{4|7}$', '${5|8}$'], a: 1 }
      ],
      sintese: [['Multiplicar', 'Termo a termo, cancelando antes; inteiro tem denominador 1.'], ['Dividir', 'Multiplique pelo inverso do divisor.'], ['Sinais', 'Iguais: positivo; diferentes: negativo.']],
      msg: 'Próximas aulas: problemas que misturam todas as operações com racionais.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'problemas-com-racionais-i', titulo: 'Resolução de problemas com números racionais I',
      h1: `Problemas com racionais: ${co('primary')}partes e restos</span>`,
      sub: 'Situações do cotidiano pedem identificar o todo, as partes e o que sobra. Aqui treinamos a ler o problema, escolher a operação e conferir o resultado.',
      badges: [['interpretar'], ['operar', 'growth'], ['conferir', 'decay']], color: 'primary',
      roteiro: ['Um roteiro de quatro passos para qualquer problema.', [['Ler e marcar', 'o que é o todo', 'book'], ['Escolher a operação', 'somar, subtrair, multiplicar ou dividir', 'scale'], ['Calcular', 'com fração ou decimal', 'chart'], ['Conferir', 'faz sentido?', 'target'], ['Responder', 'com a unidade', 'bulb']]],
      objetivos: ['Interpretar situações com <strong>fração de um todo</strong> e com <strong>sobras</strong>.', 'Escolher a <strong>operação</strong> adequada.', '<strong>Conferir</strong> a resposta por estimativa.'],
      dica: 'Primeiro defina <strong>o todo</strong>. A fração sempre fala de uma parte desse todo.',
      gancho: { titulo: 'O dinheiro da semana', texto: 'Rafael recebeu <strong>R$ 120</strong> de mesada. Gastou <strong>${1|4}$</strong> no lanche e <strong>${1|3}$</strong> em um jogo. Quanto <strong>sobrou</strong>?', mini: ['Gastou ${1|4}$ e ${1|3}$. A fração que sobrou é:', ['${5|12}$', '${7|12}$', '${2|7}$', '${1|2}$'], 0, '${1|4} + {1|3} = {7|12}$ gasto; sobrou $1 − {7|12} = {5|12}$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · roteiro', 'Quatro passos', g2(`<div>
              ${checks(['<strong>1. Ler:</strong> o que é o todo? Quais são as partes?', '<strong>2. Escolher:</strong> parte de parte ⇒ multiplicar; juntar ⇒ somar; sobra ⇒ subtrair de $1$; quantos cabem ⇒ dividir.', '<strong>3. Calcular</strong> com frações ou decimais, simplificando.', '<strong>4. Conferir:</strong> a resposta é menor que o todo? As unidades fazem sentido?'], '.95rem')}
            </div>`, card(`<strong>Palavras-chave</strong>
              ${tbl(['Palavra', 'Operação'], [['juntos, total', 'somar'], ['sobrou, falta', 'subtrair'], ['de (fração de)', 'multiplicar'], ['quantos cabem', 'dividir']])}`, 'primary'))],
        ['Teoria · o que sobra', 'Parte e resto somam o todo', g2(`<div>
              ${checks(['Todo $= 1$: se gastei ${7|12}$, restam $1 − {7|12} = {5|12}$.', 'Para saber em reais, calcule ${5|12}$ de $120$: $120 ÷ 12 = 10$ e $5 · 10 = 50$.', 'Confira: o gasto foi ${7|12}$ de $120 = 70$; e $70 + 50 = 120$. Fecha!', 'Quando o enunciado dá <strong>a parte em reais</strong> e a fração, descubra o todo dividindo pela fração.'], '.95rem')}
            </div>`, callout('Achar o todo', 'Se ${3|5}$ do todo valem $18$, então ${1|5}$ vale $6$ e o todo vale $30$.', 'primary'))]
      ],
      exemplos: [
        ['Achando o todo', 'Em uma escola, ${2|5}$ dos alunos são do 9º ano. Se há $180$ alunos do 9º ano, quantos alunos tem a escola?', [['Ler', '${2|5}$ do total = $180$.'], ['Um quinto', '$180 ÷ 2 = 90$.'], ['Total', '$5 · 90 = 450$.']], 'A escola tem <strong>450 alunos</strong>.'],
        ['Parte de parte', 'Uma viagem tem $360$ km. Já percorreu ${2|3}$. Dos que faltam, ${1|4}$ são de estrada de terra. Quantos km de terra?', [['Percorrido', '${2|3}$ de $360 = 240$ km.'], ['Falta', '$360 − 240 = 120$ km.'], ['Terra', '${1|4}$ de $120 = 30$ km.']], 'São <strong>30 km</strong> de terra.']
      ],
      pratique: [
        ['Sobra', 'Lia leu ${3|8}$ de um livro de $240$ páginas. Quantas páginas ainda faltam?', ['$90$', '$120$', '$150$', '$210$'], 2, 'Leu $240 ÷ 8 · 3 = 90$; faltam $240 − 90 = 150$. <strong>Alternativa C.</strong>'],
        ['Parte de parte', '${1|2}$ de ${1|3}$ de uma quantia de R$ 600 é:', ['R$ 50', 'R$ 100', 'R$ 200', 'R$ 300'], 1, '${1|3}$ de $600 = 200$; ${1|2}$ de $200 = 100$. <strong>Alternativa B.</strong>'],
        ['O todo', 'Se ${3|7}$ de uma distância equivalem a $12$ km, a distância total é:', ['$16$ km', '$21$ km', '$28$ km', '$36$ km'], 2, '${1|7} = 4$ km; total $= 28$ km. <strong>Alternativa C.</strong>']
      ],
      enem: ['A caixa de lápis', 'Em uma caixa com lápis, ${1|3}$ são azuis, ${1|4}$ são vermelhos e os $10$ restantes são pretos. Quantos lápis há na caixa?', ['$18$', '$20$', '$24$', '$30$', '$36$'], 2, 'Azuis + vermelhos $= {7|12}$; restam ${5|12}$ que são $10$ lápis. ${1|12} = 2$, total $= 24$. <strong>Alternativa C.</strong>'],
      cuidados: [['Todo diferente', 'Se o gasto é ${1|3}$ do que restou, o todo mudou — não é do total inicial.'], ['Responder com a fração', 'Se a pergunta pede "quantos reais", entregue em reais, não em fração.'], ['Parte maior que o todo', 'Se a conta deu maior que o total, algo está errado.'], ['Esquecer a unidade', 'Escreva km, reais, litros, páginas… na resposta.']],
      quiz: [
        { q: '${3|4}$ de $48$ é:', o: ['$12$', '$36$', '$16$', '$60$'], a: 1 },
        { q: 'Se ${2|9}$ do total são $14$, o total é:', o: ['$28$', '$63$', '$42$', '$126$'], a: 1 },
        { q: 'Gastei ${1|5}$ e ${2|5}$ do salário. Sobrou:', o: ['${2|5}$', '${3|5}$', '${1|5}$', '${4|5}$'], a: 0 },
        { q: 'Para saber quantos copos de ${1|5}$ L cabem em $3$ L, faça:', o: ['$3 · {1|5}$', '$3 ÷ {1|5}$', '$3 − {1|5}$', '$3 + {1|5}$'], a: 1 }
      ],
      sintese: [['Todo e partes', 'Defina o todo antes de operar.'], ['Sobra', 'Subtraia a soma das partes de 1 (ou do total).'], ['Conferir', 'Parte + resto = todo.']],
      msg: 'Próxima aula: problemas II, com decimais, dinheiro e expressões.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'problemas-com-racionais-ii', titulo: 'Resolução de problemas com números racionais II',
      h1: `Problemas com racionais: ${co('primary')}decimais e expressões</span>`,
      sub: 'Troco, preço por quilo, descontos e medidas pedem decimais e expressões numéricas com várias operações. A ordem das operações garante o resultado correto.',
      badges: [['decimais'], ['expressões', 'growth'], ['dinheiro', 'decay']], color: 'primary',
      roteiro: ['Misturando decimais, frações e a ordem das operações.', [['Dinheiro', 'troco e preço unitário', 'coin'], ['Ordem das operações', 'parênteses primeiro', 'scale'], ['Expressões com frações', 'passo a passo', 'chart'], ['Comparar ofertas', 'preço por unidade', 'target'], ['Conferir', 'estimar', 'book']]],
      objetivos: ['Resolver problemas com <strong>decimais e dinheiro</strong>.', 'Calcular <strong>expressões numéricas</strong> com a ordem correta.', 'Comparar <strong>preços por unidade</strong>.'],
      dica: 'Ordem: <strong>parênteses</strong> → <strong>potências</strong> → <strong>multiplicação e divisão</strong> → <strong>soma e subtração</strong>.',
      gancho: { titulo: 'Qual é a melhor oferta?', texto: 'O mercado vende arroz em dois pacotes: <strong>2 kg por R$ 11,00</strong> e <strong>5 kg por R$ 26,00</strong>. Qual tem o menor preço por quilo?', mini: ['Preço por kg do pacote de 2 kg:', ['R$ 5,00', 'R$ 5,50', 'R$ 6,00', 'R$ 22,00'], 1, '$11 ÷ 2 = 5,50$ por kg. O de 5 kg custa $26 ÷ 5 = 5,20$ por kg. <strong>Alternativa B</strong> para o pacote de 2 kg.'] },
      teoria: [
        ['Teoria · ordem das operações', 'Quem vem primeiro', g2(`<div>
              ${checks(['<strong>Parênteses</strong> (e colchetes) primeiro, de dentro para fora.', 'Depois <strong>potências</strong> e raízes.', 'Depois <strong>×</strong> e <strong>÷</strong>, da esquerda para a direita.', 'Por fim <strong>+</strong> e <strong>−</strong>, da esquerda para a direita.'], '.95rem')}
            </div>`, card(`<strong>Exemplo completo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$12 − 3 · (2 + 0,5)² ÷ 5$</p>
              <p style="font-size:.92rem;">$= 12 − 3 · 6,25 ÷ 5 = 12 − 18,75 ÷ 5$</p>
              <p style="font-size:.92rem;">$= 12 − 3,75 = 8,25$</p>`, 'primary'))],
        ['Teoria · preço por unidade', 'Divida o preço pela quantidade', g2(`<div>
              ${checks(['<strong>Preço unitário</strong> = preço ÷ quantidade (reais por kg, por litro ou por unidade).', 'Para comparar ofertas, calcule o preço unitário de cada uma e compare.', '<strong>Troco</strong> = valor pago − valor da compra.', 'Atenção às casas decimais: $5,5$ é o mesmo que $5,50$.'], '.95rem')}
            </div>`, callout('Desconto como fração', 'Desconto de $20%$ é pagar ${4|5}$ do preço: $0,8 · preço$. Veremos mais em Porcentagem.', 'primary'))]
      ],
      exemplos: [
        ['Expressão com frações', 'Calcule $ {1|2} + {3|4} · ({2|3} − {1|6}) $.', [['Parênteses', '${2|3} − {1|6} = {4|6} − {1|6} = {3|6} = {1|2}$.'], ['Multiplicação', '${3|4} · {1|2} = {3|8}$.'], ['Soma', '${1|2} + {3|8} = {4|8} + {3|8} = {7|8}$.']], 'O valor é <strong>${7|8}$</strong>.'],
        ['Troco', 'Paula comprou 3 cadernos de R$ 12,50 e uma caneta de R$ 3,75. Pagou com uma nota de R$ 50. Qual foi o troco?', [['Cadernos', '$3 · 12,50 = 37,50$.'], ['Total', '$37,50 + 3,75 = 41,25$.'], ['Troco', '$50,00 − 41,25 = 8,75$.']], 'O troco foi de <strong>R$ 8,75</strong>.']
      ],
      pratique: [
        ['Preço por quilo', 'Um pacote de 3 kg de feijão custa R$ 24,60. O preço por quilo é:', ['R$ 7,20', 'R$ 8,20', 'R$ 8,60', 'R$ 9,20'], 1, '$24,60 ÷ 3 = 8,20$. <strong>Alternativa B.</strong>'],
        ['Expressão', 'O valor de $10 − 4 · 1,5 + 2$ é:', ['$6$', '$11$', '$4$', '$3$'], 0, '$4 · 1,5 = 6$; depois $10 − 6 = 4$ e $4 + 2 = 6$. <strong>Alternativa A.</strong>'],
        ['Com fração', 'O valor de $2 − {1|2} · {3|5}$ é:', ['${3|10}$', '${17|10}$', '${3|2}$', '${7|10}$'], 1, '${1|2} · {3|5} = {3|10}$; $2 − {3|10} = {20|10} − {3|10} = {17|10}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O melhor negócio', 'Um suco é vendido em duas embalagens: $1,5$ L por R$ 6,60 e $2$ L por R$ 8,40. Qual o menor preço por litro?', ['R$ 4,20 (embalagem de 2 L)', 'R$ 4,40 (embalagem de 1,5 L)', 'R$ 3,30', 'R$ 4,50', 'Os preços por litro são iguais'], 0, 'Primeira: $6,60 ÷ 1,5 = 4,40$. Segunda: $8,40 ÷ 2 = 4,20$. Menor: R$ 4,20 (2 L). <strong>Alternativa A.</strong>'],
      cuidados: [['Fazer da esquerda para a direita sem pensar', '$2 + 3 · 4$ é $14$ (multiplica primeiro), não $20$.'], ['Preço unitário ao contrário', 'Divida o preço pela quantidade, não o contrário.'], ['Casas decimais', '$5,3 + 2,25 = 7,55$; alinhe a vírgula.'], ['Parênteses esquecidos', '$(2 + 3) · 4$ vale $20$; sem os parênteses, $14$.']],
      quiz: [
        { q: '$8 + 2 · 3$ é igual a:', o: ['$30$', '$14$', '$16$', '$11$'], a: 1 },
        { q: 'Um litro de leite custa R$ 4,80. $2,5$ L custam:', o: ['R$ 10,00', 'R$ 11,50', 'R$ 12,00', 'R$ 13,50'], a: 2 },
        { q: '$(6 − 2) ÷ 0,5$ é:', o: ['$8$', '$2$', '$4$', '$14$'], a: 0 },
        { q: 'O troco de uma compra de R$ 37,40 paga com R$ 50,00 é:', o: ['R$ 12,60', 'R$ 13,40', 'R$ 12,40', 'R$ 11,60'], a: 0 }
      ],
      sintese: [['Ordem', 'Parênteses, potências, × e ÷, depois + e −.'], ['Unitário', 'Preço ÷ quantidade para comparar ofertas.'], ['Troco', 'Pago − valor da compra.']],
      msg: 'Próximo módulo: porcentagem (aulas 14 a 16).'
    }
  ]
});
