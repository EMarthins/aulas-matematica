// Módulo 1 · 9º ano · Recomposição · 1º trimestre — Operações com números inteiros (aulas 1 a 3 do plano)
const K = require('./kit.js');
const { lede, g2, card, cardT, callout, formula, tbl, checks, stat } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;

const w1 = Wd.reta('ri1');

module.exports = unidade({
  tri: 1, dir: 'operacoes-com-inteiros', titulo: 'Operações com números inteiros', accent: 'primary', icon: 'numbers', key: 'r1u1',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'inteiros-soma-e-subtracao', titulo: 'Números inteiros: soma e subtração',
      h1: `Números inteiros: ${co('primary')}acima e abaixo de zero</span>`,
      sub: 'Temperaturas negativas, saldo no vermelho, andares do subsolo: os números inteiros descrevem ganhos e perdas. Hoje você recomeça com a reta numérica e as regras da soma e da subtração.',
      badges: [['Z'], ['+ e −', 'growth'], ['reta numérica', 'decay']],
      roteiro: ['Do zero para os dois lados da reta.', [['Conjunto Z', 'positivos, negativos e o zero', 'bulb'], ['Oposto e módulo', 'a mesma distância do zero', 'target'], ['Comparar', 'quem é maior na reta', 'scale'], ['Soma e subtração', 'regras de sinais', 'chart'], ['Problemas', 'saldo, temperatura, altitude', 'coin']]],
      objetivos: ['Reconhecer os <strong>números inteiros</strong> em situações reais e localizá-los na reta.', 'Comparar inteiros e determinar <strong>oposto</strong> e <strong>módulo</strong>.', 'Efetuar <strong>somas e subtrações</strong> com sinais diferentes.'],
      dica: 'Quando estiver em dúvida com o sinal, desenhe a <strong>reta numérica</strong> e ande: para a direita se soma um positivo, para a esquerda se soma um negativo.',
      gancho: { titulo: 'O frio que subiu', texto: 'Às 6h, a temperatura em uma cidade da serra era de $−3$ °C. Até o meio-dia, ela <strong>subiu 8 °C</strong>. Qual era a temperatura ao meio-dia?', mini: ['Temperatura ao meio-dia:', ['−11 °C', '5 °C', '−5 °C', '11 °C'], 1, '$−3 + 8 = 5$. Partindo de $−3$ e andando 8 casas para a direita, passamos pelo zero e chegamos a $5$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o conjunto dos inteiros', 'Naturais, seus opostos e o zero', g2(`<div>
              ${checks(['Os <strong>inteiros</strong> são os números naturais, seus <strong>opostos</strong> (negativos) e o zero: $Z = …, −3, −2, −1, 0, 1, 2, 3, …$.', 'O <strong>oposto</strong> de $5$ é $−5$; o oposto de $−8$ é $8$; o oposto de $0$ é o próprio $0$.', 'O <strong>módulo</strong> (valor absoluto) é a distância até o zero: $|−7| = 7$ e $|7| = 7$.', '<strong>Comparar:</strong> quanto mais à direita na reta, maior o número. Assim, $−2 > −9$.'], '.95rem')}
            </div>`, card(`<strong>Quem é maior?</strong>
              ${tbl(['Par', 'Resultado'], [['$−3$ e $2$', '$−3 < 2$'], ['$−1$ e $−6$', '$−1 > −6$'], ['$0$ e $−4$', '$0 > −4$']])}
              <p class="hint" style="margin-top:6px;">Negativo é sempre menor que positivo; entre negativos, o que tem <strong>menor módulo</strong> é o maior.</p>`, 'primary'))],
        ['Teoria · soma e subtração', 'Sinais iguais somam; sinais diferentes subtraem', g2(`<div>
              ${checks(['<strong>Sinais iguais:</strong> some os módulos e conserve o sinal: $(−4) + (−6) = −10$.', '<strong>Sinais diferentes:</strong> subtraia os módulos e use o sinal do que tem <strong>maior módulo</strong>: $(−9) + 4 = −5$.', '<strong>Subtrair</strong> é somar o oposto: $5 − (−3) = 5 + 3 = 8$.', 'Parênteses precedidos de $−$ <strong>trocam os sinais</strong> de dentro: $−(−2 + 7) = 2 − 7$.'], '.95rem')}
            </div>`, callout('Regra prática', 'Primeiro elimine os parênteses (sinal de menos antes troca o sinal), depois some os positivos, some os negativos e, por fim, efetue a diferença.', 'growth'))]
      ],
      exemplos: [
        ['A conta no vermelho', 'Marta tinha saldo de R$ 120 e fez, em sequência: compra de R$ 45, depósito de R$ 30 e débito de R$ 200. Qual ficou sendo o saldo?', [['Escrever como inteiros', 'Entradas são positivas e saídas negativas: $120 − 45 + 30 − 200$.'], ['Somar positivos e negativos', 'Positivos: $120 + 30 = 150$. Negativos: $−45 − 200 = −245$.'], ['Efetuar', '$150 + (−245) = −95$.']], 'Saldo de <strong>−R$ 95</strong>: a conta ficou no vermelho.'],
        ['Expressão com sinais', 'Calcule $(−7) + (−5) − (−9) + 4$.', [['Eliminar parênteses', '$−7 − 5 + 9 + 4$ (o menos antes de $(−9)$ troca o sinal).'], ['Negativos juntos', '$−7 − 5 = −12$.'], ['Somar o resto', '$−12 + 9 + 4 = 1$.']], 'O resultado é <strong>1</strong>.']
      ],
      widget: { titulo: 'Ande na reta e veja a conta', html: w1.html, js: w1.js },
      pratique: [
        ['O elevador', 'Um prédio tem 4 subsolos. O elevador sai do <strong>2º subsolo</strong> (andar $−2$) e sobe 7 andares. Em que andar ele para?', ['3º andar', '5º andar', '7º andar', '9º andar'], 1, '$−2 + 7 = 5$. <strong>Alternativa B.</strong>'],
        ['Em ordem crescente', 'A sequência dos números $−4, 3, −9, 0, −1$ em ordem <strong>crescente</strong> é:', ['$−9, −4, −1, 0, 3$', '$−1, −4, −9, 0, 3$', '$0, −1, −4, −9, 3$', '$3, 0, −1, −4, −9$'], 0, 'Do mais à esquerda para o mais à direita: $−9 < −4 < −1 < 0 < 3$. <strong>Alternativa A.</strong>'],
        ['Sinais e parênteses', 'O valor de $−8 + 3 − (−6) − 10$ é:', ['$−9$', '$−1$', '$1$', '$−15$'], 0, '$−8 + 3 + 6 − 10 = −9$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Pontos de um jogo', 'Em um jogo, Ana começou com $0$ ponto. Ganhou $15$, perdeu $22$, ganhou $9$ e perdeu $4$. A pontuação final de Ana é:', ['$−2$', '$2$', '$−6$', '$6$', '$46$'], 0, '$15 − 22 = −7$; $−7 + 9 = 2$; $2 − 4 = −2$. <strong>Alternativa A.</strong>'],
      cuidados: [['Menos com menos', '$5 − (−3)$ é $5 + 3 = 8$, não $2$: subtrair um negativo <strong>aumenta</strong>.'], ['Maior módulo ≠ maior número', '$−9$ tem módulo maior que $−2$, mas $−9 < −2$.'], ['Esquecer o sinal do resultado', '$4 − 9 = −5$: o sinal vem do número de <strong>maior módulo</strong>.'], ['Parênteses esquecidos', '$−(3 − 8)$ vale $5$; tirar o parêntese sem trocar os sinais dá $−3 − 8$, que está errado.']],
      quiz: [
        { q: 'O oposto de $−12$ é:', o: ['$−12$', '$12$', '$0$', '$−{1|12}$'], a: 1 },
        { q: 'Qual é o maior número?', o: ['$−15$', '$−3$', '$−8$', '$−21$'], a: 1 },
        { q: '$(−6) + (−9)$ é igual a:', o: ['$−3$', '$3$', '$−15$', '$15$'], a: 2 },
        { q: '$7 − (−4)$ é igual a:', o: ['$3$', '$11$', '$−11$', '$−3$'], a: 1 }
      ],
      sintese: [['Z', 'Naturais, opostos e zero; comparam-se pela posição na reta.'], ['Soma', 'Sinais iguais somam e conservam o sinal; diferentes subtraem e ficam com o sinal do maior módulo.'], ['Subtração', 'Subtrair é somar o oposto; menos antes de parênteses troca os sinais.']],
      msg: 'Com a reta e as regras de sinais você resolve ganhos e perdas. Próxima aula: multiplicação, divisão e potência.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'inteiros-multiplicacao-divisao-potencia', titulo: 'Multiplicação, divisão e potenciação com inteiros',
      h1: `Inteiros: ${co('primary')}a regra dos sinais</span>`,
      sub: 'Multiplicar e dividir inteiros segue uma regra simples de sinais. Com ela, e com a ordem das operações, você calcula expressões inteiras sem tropeçar.',
      badges: [['× e ÷'], ['regra de sinais', 'growth'], ['potência', 'decay']],
      roteiro: ['Sinais, quocientes, potências e a ordem das contas.', [['Regra de sinais', 'mesmo sinal: positivo; sinais diferentes: negativo', 'bulb'], ['Divisão', 'mesma regra do produto', 'scale'], ['Potência', 'expoente par ou ímpar', 'target'], ['Ordem das operações', 'potência, × e ÷, depois + e −', 'chart'], ['Expressões', 'passo a passo', 'link']]],
      objetivos: ['Aplicar a <strong>regra de sinais</strong> na multiplicação e na divisão de inteiros.', 'Calcular <strong>potências</strong> de base negativa e identificar o sinal pelo expoente.', 'Resolver <strong>expressões numéricas</strong> respeitando a ordem das operações.'],
      dica: 'Conte quantos fatores são negativos: <strong>quantidade par</strong> dá produto positivo; <strong>quantidade ímpar</strong> dá produto negativo.',
      gancho: { titulo: 'Dívida em prestações', texto: 'Pedro deve <strong>R$ 35</strong> por mês, durante 4 meses. Se escrevermos a dívida como $−35$ por mês, qual é a variação total do saldo dele nesse período?', mini: ['Variação total:', ['$−39$', '$−140$', '$140$', '$−31$'], 1, '$4 · (−35) = −140$. Uma parcela negativa repetida 4 vezes dá um total negativo. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · multiplicação e divisão', 'Sinais iguais: positivo. Sinais diferentes: negativo', g2(`<div>
              ${tbl(['Sinais dos fatores', 'Resultado', 'Exemplo'], [['$+$ e $+$', '$+$', '$3 · 4 = 12$'], ['$−$ e $−$', '$+$', '$(−3)(−4) = 12$'], ['$+$ e $−$', '$−$', '$3 · (−4) = −12$'], ['$−$ e $+$', '$−$', '$(−3) · 4 = −12$']])}
            </div>`, card(`<strong>A divisão segue a mesma regra</strong>
              <p style="font-size:.92rem;margin-top:8px;">$(−20) ÷ 5 = −4$, $(−20) ÷ (−5) = 4$ e $20 ÷ (−5) = −4$.</p>
              <p class="hint" style="margin-top:6px;">E lembre: dividir por zero não existe; zero dividido por um número ≠ 0 dá zero.</p>`, 'primary'))],
        ['Teoria · potenciação', 'O expoente decide o sinal', g2(`<div>
              ${checks(['Potência é <strong>produto de fatores iguais</strong>: $(−2)^{3} = (−2)(−2)(−2) = −8$.', '<strong>Expoente par</strong> → resultado positivo: $(−3)^{2} = 9$.', '<strong>Expoente ímpar</strong> → mantém o sinal da base: $(−3)^{3} = −27$.', 'Cuidado: $−3^{2}$ significa $−(3^{2}) = −9$, enquanto $(−3)^{2} = 9$.'], '.95rem')}
            </div>`, callout('Ordem das operações', '1º parênteses (e colchetes, chaves); 2º potências e raízes; 3º multiplicações e divisões, da esquerda para a direita; 4º somas e subtrações.', 'growth'))]
      ],
      exemplos: [
        ['Produto com vários fatores', 'Calcule $(−2) · 3 · (−5) · (−1)$.', [['Contar os negativos', 'Há 3 fatores negativos: o produto será negativo.'], ['Multiplicar os módulos', '$2 · 3 · 5 · 1 = 30$.'], ['Aplicar o sinal', 'Resultado: $−30$.']], 'O produto vale <strong>−30</strong>.'],
        ['Expressão completa', 'Calcule $(−4)^{2} − 3 · (−5) + 18 ÷ (−6)$.', [['Potência', '$(−4)^{2} = 16$.'], ['Produto e quociente', '$3 · (−5) = −15$ e $18 ÷ (−6) = −3$.'], ['Montar a soma', '$16 − (−15) + (−3) = 16 + 15 − 3$.'], ['Resultado', '$31 − 3 = 28$.']], 'A expressão vale <strong>28</strong>.']
      ],
      pratique: [
        ['Sinal da potência', 'O valor de $(−5)^{3}$ é:', ['$−125$', '$125$', '$−15$', '$15$'], 0, '$(−5)(−5)(−5) = 25 · (−5) = −125$. <strong>Alternativa A.</strong>'],
        ['Quociente', 'O resultado de $(−48) ÷ (−6) ÷ (−2)$ é:', ['$4$', '$−4$', '$16$', '$−16$'], 1, '$(−48) ÷ (−6) = 8$; depois $8 ÷ (−2) = −4$. <strong>Alternativa B.</strong>'],
        ['Expressão', 'O valor de $2 · (−3)^{2} − 15 ÷ 3$ é:', ['$13$', '$−23$', '$−13$', '$23$'], 0, '$(−3)^{2} = 9$; $2 · 9 = 18$; $15 ÷ 3 = 5$; $18 − 5 = 13$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Variação de nível', 'Uma represa perde, em média, $12$ cm de nível por dia na seca. Após $9$ dias seguidos de seca, a variação do nível, em centímetros, é de:', ['$−108$', '$−21$', '$21$', '$108$', '$−3$'], 0, 'Variação por dia: $−12$. Em 9 dias: $9 · (−12) = −108$. <strong>Alternativa A.</strong>'],
      cuidados: [['$−3^{2}$ não é $(−3)^{2}$', 'Sem parênteses, o sinal fica de fora da potência: $−3^{2} = −9$.'], ['Regra de sinais na soma', 'A regra "menos com menos dá mais" vale para <strong>produto e quociente</strong>, não para a soma: $−3 + (−2) = −5$.'], ['Ordem das operações', '$−2 + 3 · 4 = 10$, não $4$: multiplique antes de somar.'], ['Dividir por zero', '$5 ÷ 0$ não existe; já $0 ÷ 5 = 0$.']],
      quiz: [
        { q: '$(−7) · (−8)$ é igual a:', o: ['$−56$', '$56$', '$−15$', '$15$'], a: 1 },
        { q: '$(−2)^{4}$ é igual a:', o: ['$−8$', '$8$', '$−16$', '$16$'], a: 3 },
        { q: '$(−30) ÷ 6$ é igual a:', o: ['$5$', '$−5$', '$−24$', '$24$'], a: 1 },
        { q: '$−2 + 3 · (−4)$ é igual a:', o: ['$−20$', '$−14$', '$10$', '$−10$'], a: 1 }
      ],
      sintese: [['Regra de sinais', 'Sinais iguais: positivo; diferentes: negativo (vale para × e ÷).'], ['Potência', 'Expoente par: positivo; ímpar: sinal da base.'], ['Ordem', 'Parênteses, potências, × e ÷, depois + e −.']],
      msg: 'Agora é aplicar tudo em problemas reais. Próxima aula: resolução de problemas com números inteiros.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'problemas-com-inteiros', titulo: 'Resolução de problemas com números inteiros',
      h1: `Problemas com inteiros: ${co('primary')}traduza e calcule</span>`,
      sub: 'Saldos, altitudes, temperaturas e pontuações: transformar a história em uma expressão com positivos e negativos é o passo que decide o problema.',
      badges: [['saldo'], ['temperatura', 'growth'], ['altitude', 'decay']],
      roteiro: ['Ler, representar, calcular e conferir.', [['Ler e marcar', 'o que ganha e o que perde', 'book'], ['Representar', 'ganhos positivos, perdas negativas', 'bulb'], ['Calcular', 'expressão passo a passo', 'chart'], ['Interpretar', 'o resultado responde à pergunta?', 'target'], ['Conferir', 'faz sentido?', 'shield']]],
      objetivos: ['<strong>Traduzir</strong> situações do dia a dia para expressões com inteiros.', 'Resolver problemas de <strong>saldo, temperatura, altitude e pontuação</strong>.', 'Interpretar o resultado no contexto (sinal e unidade).'],
      dica: 'Defina primeiro a convenção: <strong>o que é positivo e o que é negativo</strong>. Escreva isso no caderno antes de montar a conta.',
      gancho: { titulo: 'Mergulho e escalada', texto: 'Uma mergulhadora está a $−18$ m (abaixo do nível do mar) e sobe $7$ m. Já um alpinista está a 2&nbsp;300 m de altitude e desce $450$ m. Qual dos dois está mais perto do nível do mar (altitude $0$) agora?', mini: ['Quem está mais perto do nível do mar?', ['A mergulhadora (−11 m)', 'O alpinista (1 850 m)', 'Os dois, igualmente', 'Não dá para saber'], 0, 'Mergulhadora: $−18 + 7 = −11$ m, a $11$ m do nível do mar. Alpinista: $2300 − 450 = 1850$ m. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Método', 'Quatro passos para qualquer problema', g2(`<div>
              ${checks(['<strong>1. Convenção:</strong> o que será positivo (ganho, subida, depósito) e o que será negativo (perda, descida, saque).', '<strong>2. Expressão:</strong> escreva as parcelas na ordem em que acontecem.', '<strong>3. Cálculo:</strong> some os positivos, some os negativos, efetue a diferença.', '<strong>4. Resposta:</strong> interprete o sinal e escreva a unidade.'], '.95rem')}
            </div>`, card(`<strong>Interpretando o sinal</strong>
              ${tbl(['Contexto', 'Resultado $> 0$', 'Resultado $< 0$'], [['Saldo', 'a conta está no azul', 'a conta está no vermelho'], ['Temperatura', 'acima de zero', 'abaixo de zero'], ['Altitude', 'acima do mar', 'abaixo do mar']])}`, 'primary'))],
        ['Variação e valor final', 'Estado inicial + variação = estado final', g2(`<div>
              ${checks(['Valor final $=$ valor inicial $+$ variação.', 'Variação $=$ valor final $−$ valor inicial: de $−4$ °C para $9$ °C a variação é $9 − (−4) = 13$ °C.', 'Variação <strong>positiva</strong> = aumento; <strong>negativa</strong> = diminuição.'], '.95rem')}
            </div>`, callout('Dica', 'A diferença entre dois valores é sempre <strong>final menos inicial</strong>. Assim o sinal já conta se subiu ou desceu.', 'growth'))]
      ],
      exemplos: [
        ['Viagem e orçamento', 'Para uma viagem de 5 dias, Lúcia levou R$ 600. Gastou R$ 90 por dia no hotel, R$ 35 por dia na alimentação e ganhou R$ 150 de reembolso ao fim. Quanto sobrou?', [['Convenção', 'Gastos negativos, reembolso positivo.'], ['Expressão', '$600 + 5 · (−90) + 5 · (−35) + 150$.'], ['Produtos', '$5 · (−90) = −450$ e $5 · (−35) = −175$.'], ['Soma', '$600 − 450 − 175 + 150 = 125$.']], 'Sobraram <strong>R$ 125</strong>.'],
        ['Variação de temperatura', 'Em uma cidade, a mínima de um dia foi $−6$ °C e a máxima, $11$ °C. Qual foi a amplitude térmica (variação) do dia?', [['Fórmula', 'Variação $=$ máxima $−$ mínima.'], ['Substituir', '$11 − (−6)$.'], ['Calcular', '$11 + 6 = 17$.']], 'A variação foi de <strong>17 °C</strong>.']
      ],
      pratique: [
        ['Saldo bancário', 'Uma conta tinha R$ 200. Foram feitos um saque de R$ 80, um depósito de R$ 45 e uma compra de R$ 210. O saldo final é:', ['−R$ 45', 'R$ 45', '−R$ 55', 'R$ 55'], 0, '$200 − 80 + 45 − 210 = −45$. <strong>Alternativa A.</strong>'],
        ['Temperaturas', 'Às 5h a temperatura era $−4$ °C e às 14h, $12$ °C. A variação de temperatura entre os dois horários foi:', ['$8$ °C', '$−8$ °C', '$16$ °C', '$−16$ °C'], 2, '$12 − (−4) = 16$. <strong>Alternativa C.</strong>'],
        ['Placar de um game', 'Em uma fase, cada acerto vale $+5$ e cada erro vale $−3$. Com $7$ acertos e $9$ erros, a pontuação é:', ['$8$', '$−8$', '$62$', '$−62$'], 0, '$7 · 5 + 9 · (−3) = 35 − 27 = 8$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Sobe e desce de um submarino', 'Um submarino estava a $−120$ m. Subiu $45$ m, depois desceu $80$ m e, por fim, subiu $30$ m. A profundidade final é:', ['$−125$ m', '$−115$ m', '$−35$ m', '$35$ m', '$125$ m'], 0, '$−120 + 45 − 80 + 30 = −125$. <strong>Alternativa A.</strong>'],
      cuidados: [['Convenção trocada no meio do caminho', 'Se saque é negativo na primeira parcela, precisa ser negativo em todas.'], ['Responder só com o número', 'Escreva a unidade e o que o sinal significa: "$−45$" é saldo negativo de R$ 45.'], ['Variação ao contrário', 'Variação é <strong>final − inicial</strong>; inverter dá o sinal errado.'], ['Contas fora de ordem', 'Em problemas com × e +, faça os produtos antes das somas.']],
      quiz: [
        { q: 'Saldo de R$ 50 e uma compra de R$ 80 deixam o saldo em:', o: ['R$ 30', '−R$ 30', 'R$ 130', '−R$ 130'], a: 1 },
        { q: 'De $−7$ °C para $5$ °C, a variação é:', o: ['$−2$ °C', '$2$ °C', '$12$ °C', '$−12$ °C'], a: 2 },
        { q: 'Uma altitude de $−30$ m indica um ponto:', o: ['30 m acima do mar', '30 m abaixo do mar', 'no nível do mar', 'a 30 km do mar'], a: 1 },
        { q: 'Se cada erro vale $−2$ e há 6 erros, a perda total é:', o: ['$12$', '$−12$', '$−8$', '$8$'], a: 1 }
      ],
      sintese: [['Convenção', 'Ganhos positivos e perdas negativas, em todas as parcelas.'], ['Variação', 'Final menos inicial; o sinal diz se subiu ou desceu.'], ['Resposta', 'Interprete o sinal e use a unidade.']],
      msg: 'Inteiros dominados! Próxima etapa: os números racionais, com frações e decimais.'
    }
  ]
});
