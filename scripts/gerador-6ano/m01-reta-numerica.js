// Módulo · Matemática · 6º ano · 1º trimestre — Reta numérica (aulas 05 e 06 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo. Em math, "${a|b}" só dentro de aspas simples.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const { linha, co } = require('./util.js');

module.exports = unidade({
  materia: 'matematica', ano: '6° Ano', tri: 1, pasta: 'aulas/6-ano/1-tri/reta-numerica/',
  titulo: 'Reta numérica', accent: 'primary', icon: 'reta-num', key: 'm6m01', keyp: 'm6', area: 'Matemática · 6º ano',
  refs: ['Aulas 05 e 06 do plano de Matemática do 6º ano (1º trimestre) do RCO/NRE, reescritas e ampliadas com problemas originais.', 'Exercícios e problemas originais (estilo SAEB); questões de provas oficiais só quando citadas.'],
  aulas: [
    // ------------------------------------------------------------ aula 05
    {
      slug: 'reta-numerica-i', titulo: 'Reta numérica I',
      h1: `A ${co('primary')}reta numérica:</span> cada número no seu lugar`,
      sub: 'A reta numérica organiza os números em uma linha. Quanto mais à direita, maior é o número.',
      badges: [['0 1 2 3 …'], ['origem e unidade', 'growth'], ['ordem', 'decay']], color: 'primary',
      roteiro: ['Da régua da carteira à reta numérica.', [['A reta numérica', 'origem, unidade e sentido', 'target'], ['Localizar números', 'marcas de 1 em 1', 'bulb'], ['Comparar e ordenar', 'o maior fica à direita', 'scale'], ['Antecessor e sucessor', 'os vizinhos de um número', 'link']]],
      objetivos: ['Reconhecer a <strong>origem</strong>, a <strong>unidade</strong> e o <strong>sentido</strong> da reta numérica.', 'Localizar <strong>números naturais</strong> na reta.', 'Comparar números pela reta e dizer o <strong>antecessor</strong> e o <strong>sucessor</strong>.'],
      dica: 'Na reta, andar para a <strong>direita</strong> é aumentar; andar para a <strong>esquerda</strong> é diminuir.',
      gancho: { titulo: 'A régua da carteira', texto: 'Na régua da escola, o $0$ marca o começo e cada risquinho mostra mais uma unidade. A reta numérica funciona igual: tem um começo (o número $0$) e marcas igualmente espaçadas. Se você está no $7$ e anda $3$ marcas para a direita, onde chega?', mini: ['Você chega ao número:', ['$9$', '$10$', '$11$', '$4$'], 1, '$7 + 3 = 10$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · a reta numérica', 'Origem, unidade e sentido', g2(`<div>
              ${checks(['<strong>Origem:</strong> o ponto do número $0$, onde tudo começa.', '<strong>Unidade:</strong> a distância entre duas marcas vizinhas (aqui, de $1$ em $1$).', '<strong>Sentido:</strong> para a direita os números <strong>aumentam</strong>.', '<strong>Números naturais:</strong> $0, 1, 2, 3, …$ — sempre existe um próximo.'])}
            </div>`, card(`<strong>Reta numérica dos naturais</strong>${linha(['0', '1', '2', '3', '4', '5', '6', '7'], { dest: [0] })}<p class="hint" style="margin-top:8px;">As marcas ficam sempre à mesma distância umas das outras.</p>`, 'primary'))],
        ['Teoria · comparar e ordenar', 'Quem está mais à direita é maior', g2(`<div>
              ${checks(['$3$ está à esquerda de $8$, então $3 < 8$.', 'Para <strong>ordenar</strong>, leia a reta da esquerda para a direita: ordem <strong>crescente</strong>.', '<strong>Antecessor</strong> de um número: o que vem logo antes ($n − 1$). <strong>Sucessor</strong>: o que vem logo depois ($n + 1$).', 'O $0$ não tem antecessor entre os naturais.'])}
            </div>`, card(`<strong>Vizinhos de um número</strong>${tbl(['Número', 'Antecessor', 'Sucessor'], [['$10$', '$9$', '$11$'], ['$99$', '$98$', '$100$'], ['$0$', '—', '$1$']])}`, 'growth'))]
      ],
      exemplos: [
        ['Localizando um número', 'Em uma reta numérica marcada de $1$ em $1$, onde fica o número $6$?', [['Ache a origem', 'O $0$ é o ponto de partida.'], ['Conte as marcas', 'Ande $6$ marcas para a direita: $1, 2, 3, 4, 5, 6$.'], ['Marque o ponto', 'O ponto de chegada é o $6$.']], 'O $6$ fica a $6$ unidades da origem.'],
        ['Ordem, antecessor e sucessor', 'Coloque $12$, $5$, $9$ e $0$ em ordem crescente e dê o sucessor do maior.', [['Compare na reta', 'O $0$ está mais à esquerda; depois $5$, $9$ e $12$.'], ['Ordem crescente', '$0 < 5 < 9 < 12$.'], ['Maior número', '$12$.'], ['Sucessor', '$12 + 1 = 13$.']], 'Ordem crescente: $0, 5, 9, 12$. Sucessor do maior: $13$.']
      ],
      pratique: [
        ['Localizar', 'Em uma reta marcada de $1$ em $1$, o ponto $P$ está $9$ marcas à direita da origem. O número de $P$ é:', ['$8$', '$9$', '$10$', '$18$'], 1, 'Partindo do $0$ e andando $9$ marcas, chega-se ao $9$. <strong>Alternativa B.</strong>'],
        ['Comparar', 'Qual sentença é verdadeira?', ['$14 < 9$', '$23 > 32$', '$40 > 39$', '$7 > 70$'], 2, '$40$ fica à direita de $39$, então $40 > 39$. <strong>Alternativa C.</strong>'],
        ['Vizinhos', 'O antecessor de $200$ e o sucessor de $199$ são, respectivamente:', ['$199$ e $200$', '$201$ e $198$', '$199$ e $198$', '$201$ e $200$'], 0, 'Antecessor de $200$: $199$. Sucessor de $199$: $200$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A fila do ônibus', 'Marina, Beto, Caio e Dora ocupam as posições $14$, $8$, $11$ e $3$ da fila, contadas a partir do início (posição $0$). Quem está mais perto do início da fila?', ['Marina', 'Beto', 'Caio', 'Dora'], 3, 'A menor posição é $3$ (Dora): é a mais próxima da origem. <strong>Alternativa D.</strong>'],
      cuidados: [['Contar o ponto de partida', 'O $0$ não conta como passo: para chegar ao $6$, são $6$ marcas depois do $0$.'], ['Trocar esquerda e direita', 'Os números crescem <strong>para a direita</strong>; o menor sempre fica à esquerda.'], ['Marcas desiguais', 'Numa reta numérica as marcas têm a <strong>mesma distância</strong> entre si.']],
      quiz: [
        { q: 'Na reta numérica, os números crescem:', o: ['para a esquerda', 'para a direita', 'para cima apenas', 'em qualquer sentido'], a: 1 },
        { q: 'O sucessor de $349$ é:', o: ['$348$', '$350$', '$359$', '$340$'], a: 1 },
        { q: 'O ponto de origem da reta dos naturais é o número:', o: ['$1$', '$10$', '$0$', '$100$'], a: 2 },
        { q: 'A ordem crescente de $4, 15, 9$ é:', o: ['$15, 9, 4$', '$4, 9, 15$', '$9, 4, 15$', '$4, 15, 9$'], a: 1 }
      ],
      sintese: [['Origem e unidade', 'O $0$ começa a reta; as marcas têm a mesma distância.'], ['Ordem', 'Mais à direita = maior; leia da esquerda para a direita para ordenar.'], ['Vizinhos', 'Antecessor $n − 1$ e sucessor $n + 1$.']],
      msg: 'Na próxima aula você vai usar escalas diferentes: de 2 em 2, de 5 em 5, de 10 em 10…'
    },
    // ------------------------------------------------------------ aula 06
    {
      slug: 'reta-numerica-ii', titulo: 'Reta numérica II',
      h1: `Reta numérica ${co('growth')}II:</span> escalas e distâncias`,
      sub: 'Nem toda reta anda de $1$ em $1$. Descubra a escala, localize números entre as marcas e calcule distâncias.',
      badges: [['escala'], ['entre as marcas', 'growth'], ['distância', 'decay']], color: 'growth',
      roteiro: ['Das placas da estrada às escalas da reta.', [['Escala', 'de quanto em quanto a reta anda', 'target'], ['Descobrir a escala', 'diferença ÷ espaços', 'bulb'], ['Entre as marcas', 'o ponto do meio', 'scale'], ['Distâncias', 'maior menos menor', 'link']]],
      objetivos: ['Identificar a <strong>escala</strong> de uma reta numérica.', 'Localizar números <strong>entre duas marcas</strong>.', 'Calcular a <strong>distância</strong> entre dois pontos da reta.'],
      dica: 'Escala = quanto vale <strong>o espaço entre duas marcas vizinhas</strong>. Descubra-a antes de qualquer outra coisa.',
      gancho: { titulo: 'As placas da estrada', texto: 'Em uma estrada, as placas de quilômetro aparecem de $5$ em $5$: $0, 5, 10, 15, 20, 25$. Se você acabou de passar pela placa $25$, qual será a próxima?', mini: ['A próxima placa é:', ['$26$', '$30$', '$35$', '$50$'], 1, '$25 + 5 = 30$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · a escala', 'De quanto em quanto a reta anda', g2(`<div>
              ${checks(['<strong>Escala:</strong> o valor do espaço entre duas marcas vizinhas.', 'Para descobrir: <strong>(diferença entre dois números marcados) ÷ (número de espaços)</strong>.', 'Escalas comuns: de $1$ em $1$, de $2$ em $2$, de $5$ em $5$, de $10$ em $10$, de $100$ em $100$.', 'A escala <strong>não muda</strong> ao longo da mesma reta.'])}
            </div>`, card(`<strong>Reta de $5$ em $5$</strong>${linha(['0', '5', '10', '15', '20', '25', '30'], { dest: [4], cor: 'growth' })}<p class="hint" style="margin-top:8px;">Destaque: o $20$ está a $4$ espaços da origem ($4 × 5 = 20$).</p>`, 'growth'))],
        ['Teoria · entre as marcas e distâncias', 'O ponto do meio e a distância', g2(`<div>
              ${checks(['O número que está <strong>no meio</strong> de duas marcas é a metade da soma delas: entre $20$ e $30$ fica o $25$.', 'A <strong>distância</strong> entre dois pontos é <strong>maior − menor</strong>.', 'Se o espaço entre marcas é $10$, meio espaço vale $5$.'])}
            </div>`, callout('Dica', 'Antes de localizar um número, descubra a escala e confira se o ponto cabe <strong>entre</strong> as marcas: números que não são múltiplos da escala ficam entre elas.', 'growth'))]
      ],
      exemplos: [
        ['Descobrindo a escala', 'Em uma reta, as marcas $20$ e $60$ têm $4$ espaços iguais entre elas. Qual é a escala?', [['Diferença', '$60 − 20 = 40$.'], ['Espaços', 'Há $4$ espaços iguais.'], ['Divida', '$40 ÷ 4 = 10$.']], 'Escala de $10$ em $10$: $20, 30, 40, 50, 60$.'],
        ['Distância e ponto do meio', 'Os pontos $A = 35$ e $B = 80$ estão na mesma reta. Qual é a distância entre eles e qual número fica no meio?', [['Distância', '$80 − 35 = 45$.'], ['Soma', '$35 + 80 = 115$.'], ['Metade da soma', '$115 ÷ 2 = 57,5$.']], 'Distância: $45$ unidades. O ponto do meio é $57,5$.']
      ],
      pratique: [
        ['Escala', 'Em uma reta, $0$ e $50$ têm $5$ espaços iguais entre eles. A escala é de:', ['$5$ em $5$', '$10$ em $10$', '$25$ em $25$', '$50$ em $50$'], 1, '$50 ÷ 5 = 10$. <strong>Alternativa B.</strong>'],
        ['Localizar', 'Em uma reta marcada de $10$ em $10$ a partir do $0$, o ponto que está $7$ marcas à direita do $0$ vale:', ['$7$', '$17$', '$70$', '$700$'], 2, '$7 × 10 = 70$. <strong>Alternativa C.</strong>'],
        ['Distância', 'A distância entre os pontos $48$ e $120$ da reta é:', ['$62$', '$72$', '$78$', '$168$'], 1, '$120 − 48 = 72$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O mapa da trilha', 'Em uma trilha, as placas indicam $0$ m, $200$ m, $400$ m, $600$ m e $800$ m, igualmente espaçadas. Um mirante fica exatamente no meio entre as placas de $400$ m e $600$ m. Em que marca está o mirante?', ['$450$ m', '$500$ m', '$550$ m', '$1 000$ m'], 1, 'Meio entre $400$ e $600$: $(400 + 600) ÷ 2 = 500$. <strong>Alternativa B.</strong>'],
      cuidados: [['Supor que a escala é sempre $1$', 'Leia primeiro os números que já estão marcados e calcule a escala.'], ['Dividir pelo número de marcas', 'Divida pelo número de <strong>espaços</strong> (entre as marcas), não pelo número de marcas.'], ['Distância com o menor primeiro', 'Faça sempre <strong>maior − menor</strong> para a distância não dar negativa.']],
      quiz: [
        { q: 'Em uma reta, as marcas $0$ e $20$ têm $4$ espaços entre elas. A escala é:', o: ['$2$ em $2$', '$4$ em $4$', '$5$ em $5$', '$10$ em $10$'], a: 2 },
        { q: 'O número que está no meio de $40$ e $60$ é:', o: ['$45$', '$50$', '$55$', '$100$'], a: 1 },
        { q: 'A distância entre $17$ e $52$ é:', o: ['$35$', '$45$', '$69$', '$25$'], a: 0 },
        { q: 'Em uma reta de $100$ em $100$, depois do $300$ vem o:', o: ['$301$', '$310$', '$400$', '$1 000$'], a: 2 }
      ],
      sintese: [['Escala', 'Valor do espaço entre marcas vizinhas: (diferença) ÷ (espaços).'], ['Entre as marcas', 'O ponto do meio é a metade da soma.'], ['Distância', 'Maior − menor.']],
      msg: 'Na próxima aula você vai estudar os processos da adição de números naturais.'
    }
  ]
});
