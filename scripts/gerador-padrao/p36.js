// Matemática · 7º ano · 2º trimestre · Razão, proporção e regra de três (base: slides "Proporção", "Regra de 3 simples" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '7° Ano', tri: 2, pasta: 'aulas/7-ano/2-tri/proporcao-e-regra-de-tres/', titulo: 'Razão, proporção e regra de três', accent: 'success', icon: 'percent', key: 'm7p36', area: 'Matemática · 7º ano',
  aulas: [
    A('razao-proporcao-e-grandezas-proporcionais', 'Razão, proporção e grandezas proporcionais',
      `Receita de bolo e ${co('primary')}proporção</span>`,
      'Uma receita usa $2$ xícaras de farinha para $3$ de leite. Para $6$ xícaras de farinha, quantas xícaras de leite são necessárias para manter o sabor?',
      'mercado', [['razão'], ['proporção', 'growth'], ['grandezas diretas', 'decay']],
      ['Comparar quantidades por divisão (razão) é a base de escalas, receitas e velocidades.', ['A razão entre $6$ e $3$ é:', ['$2$', '$3$', '$18$', '${1|2}$'], 0, '$6 ÷ 3 = 2$.'], 'Se uma receita para $2$ pessoas usa $1$ ovo, quantos ovos para $6$ pessoas?'],
      ['<strong>Calcular razões</strong> e reconhecer <strong>proporções</strong>.', 'Usar a <strong>propriedade fundamental</strong> das proporções.', 'Identificar <strong>grandezas diretamente proporcionais</strong>.'],
      'Em uma proporção, o <strong>produto dos meios</strong> é igual ao <strong>produto dos extremos</strong>.',
      [['Razão', ['A <strong>razão</strong> entre $a$ e $b$ ($b ≠ 0$) é o quociente ${a|b}$.', 'Exemplos de razão: velocidade (km por hora), densidade, escala de um mapa.', 'Razão de $3$ para $5$: ${3|5}$.'],
        tbl(['Situação', 'Razão'], [['$12$ gols em $4$ jogos', '${12|4} = 3$ gols por jogo'], ['escala $1:100$', '$1$ cm no desenho ⇔ $100$ cm real']])],
       ['Proporção', ['<strong>Proporção</strong> é a igualdade entre duas razões: ${a|b} = {c|d}$.', 'Propriedade fundamental: $a · d = b · c$ (produto cruzado).', '${2|3} = {6|9}$ porque $2 · 9 = 3 · 6 = 18$.'],
        callout('Para achar o valor que falta', '${x|12} = {3|4}$ ⇒ $4x = 36$ ⇒ $x = 9$.', 'primary')],
       ['Grandezas diretamente proporcionais', ['Duas grandezas são <strong>diretamente proporcionais</strong> quando, ao multiplicar uma por um número, a outra também é multiplicada por ele.', 'A razão entre elas é <strong>constante</strong>.', 'Preço × quantidade (sem desconto) e distância × tempo (velocidade constante) são exemplos.'],
        tbl(['Farinha (xícaras)', 'Leite (xícaras)', 'Razão'], [['$2$', '$3$', '${3|2}$'], ['$4$', '$6$', '${3|2}$'], ['$6$', '$9$', '${3|2}$']])]],
      [['Achando o termo que falta', 'Resolva a proporção ${x|12} = {3|4}$.', [['Produto cruzado', '$4 · x = 12 · 3$.'], ['Calcule', '$4x = 36$ ⇒ $x = 9$.']], '$x = 9$'],
       ['A receita', 'Se $2$ xícaras de farinha pedem $3$ de leite, quantas de leite para $6$ de farinha?', [['Escreva a proporção', '${2|3} = {6|x}$.'], ['Produto cruzado', '$2x = 18$.'], ['Calcule', '$x = 9$.']], '$9$ xícaras de leite']],
      ['É proporcional?', 'As tabelas $(2; 3)$ e $(4; 6)$ mostram grandezas diretamente proporcionais?', ['Calcule as duas razões ${3|2}$ e ${6|4}$.', 'Simplifique ${6|4}$.', 'As razões são iguais?'], '${3|2} = 1,5$ e ${6|4} = 1,5$: as razões são iguais; sim, são diretamente proporcionais.'],
      [['A razão entre $8$ e $20$ (simplificada) é:', ['${2|5}$', '${5|2}$', '${4|10}$', '${1|4}$'], 0, '${8|20} = {2|5}$.'],
       ['Na proporção ${5|x} = {10|8}$, o valor de $x$ é:', ['$4$', '$16$', '$2$', '$10$'], 0, '$10x = 40$; $x = 4$.'],
       ['Um carro faz $60$ km em $1$ h. Em $3$ h, à mesma velocidade, percorre:', ['$63$ km', '$120$ km', '$180$ km', '$20$ km'], 2, 'Distância e tempo são diretamente proporcionais: $60 · 3 = 180$.'],
       ['Qual par forma uma proporção?', ['${1|2}$ e ${3|5}$', '${2|3}$ e ${8|12}$', '${3|4}$ e ${5|6}$', '${1|3}$ e ${2|5}$'], 1, '$2 · 12 = 3 · 8 = 24$.']],
      [[['Razão', 'Quociente entre duas grandezas.'], ['Proporção', 'Igualdade de razões; produto cruzado.'], ['Grandezas diretas', 'Razão constante: se uma dobra, a outra dobra.']], 'Por que o produto cruzado funciona em uma proporção?', 'Voltando à receita: ${2|3} = {6|9}$; para $6$ xícaras de farinha, $9$ de leite.'],
      [['A razão entre $15$ e $5$ é:', ['$3$', '${1|3}$', '$10$', '$75$'], 0], ['Se ${x|6} = {2|3}$, então $x$ vale:', ['$4$', '$9$', '$3$', '$2$'], 0], ['Se $2$ kg de arroz custam R&#36; 14,00, $5$ kg custam:', ['R&#36; 28,00', 'R&#36; 35,00', 'R&#36; 70,00', 'R&#36; 21,00'], 1]]),

    A('regra-de-tres-simples', 'Regra de três simples',
      `Um valor desconhecido, ${co('primary')}três conhecidos</span>`,
      'Se $5$ kg de arroz custam R&#36; 30,00, quanto custam $8$ kg? E se $4$ pedreiros fazem um muro em $6$ dias, em quantos dias $8$ pedreiros o fazem?',
      'taxi', [['regra de três'], ['direta', 'growth'], ['inversa', 'decay']],
      ['A regra de três resolve problemas em que dois valores são dados e queremos o equivalente de um terceiro.', ['Se $1$ caderno custa R&#36; 8,00, $3$ cadernos custam:', ['R&#36; 11,00', 'R&#36; 24,00', 'R&#36; 16,00', 'R&#36; 32,00'], 1, '$3 · 8 = 24$.'], 'Mais operários terminam uma obra mais depressa ou mais devagar? As grandezas crescem juntas?'],
      ['Identificar se as grandezas são <strong>direta</strong> ou <strong>inversamente</strong> proporcionais.', 'Montar e resolver uma <strong>regra de três simples</strong> direta e inversa.', 'Resolver <strong>problemas do dia a dia</strong>.'],
      'Pergunte: <strong>quando uma grandeza aumenta, a outra aumenta ou diminui?</strong>',
      [['Regra de três direta', ['As grandezas <strong>crescem juntas</strong> (ou diminuem juntas).', 'Organize em uma tabela e monte a proporção mantendo a <strong>mesma ordem</strong>.', '$5$ kg ⇒ R&#36; 30; $8$ kg ⇒ $x$: ${5|8} = {30|x}$.'],
        tbl(['Arroz (kg)', 'Preço (R&#36;)'], [['$5$', '$30$'], ['$8$', '$x$']])],
       ['Regra de três inversa', ['Quando uma grandeza <strong>aumenta</strong> e a outra <strong>diminui</strong> na mesma proporção.', 'Operários × dias: mais operários, menos dias.', 'Monte a proporção <strong>invertendo</strong> uma das razões (ou multiplique em linha).'],
        tbl(['Operários', 'Dias'], [['$4$', '$6$'], ['$8$', '$x$']])],
       ['Como decidir', ['Direta: dobra a quantidade, dobra o preço, dobra o consumo…', 'Inversa: dobra a velocidade, <strong>metade</strong> do tempo.', 'Confira o resultado: faz sentido?'],
        callout('Teste rápido', 'Mais operários ⇒ menos dias. Logo, 8 operários levam menos de 6 dias.', 'primary')]],
      [['Direta: o arroz', 'Se $5$ kg custam R&#36; 30,00, quanto custam $8$ kg?', [['Monte a proporção', '${5|8} = {30|x}$.'], ['Produto cruzado', '$5x = 240$.'], ['Calcule', '$x = 48$.']], 'R&#36; 48,00', 'Confira: $1$ kg custa R&#36; 6,00; $8 · 6 = 48$.'],
       ['Inversa: os pedreiros', '$4$ pedreiros fazem um muro em $6$ dias. Em quantos dias $8$ pedreiros fazem o mesmo muro?', [['Grandezas inversas', 'Dobrou o número de pedreiros: o tempo cai pela metade.'], ['Calcule', '$4 · 6 = 8 · x$ ⇒ $24 = 8x$ ⇒ $x = 3$.']], '$3$ dias']],
      ['Quantos litros?', 'Um carro gasta $10$ L de gasolina para percorrer $120$ km. Quantos litros gasta em $300$ km?', ['As grandezas crescem juntas?', 'Monte ${10|x} = {120|300}$.', 'Resolva o produto cruzado.'], 'Direta: $120x = 3000$ ⇒ $x = 25$ L.'],
      [['Se $3$ metros de tecido custam R&#36; 45,00, $5$ metros custam:', ['R&#36; 60,00', 'R&#36; 75,00', 'R&#36; 90,00', 'R&#36; 135,00'], 1, 'Direta: $1$ m custa $15$; $5 · 15 = 75$.'],
       ['Uma torneira enche um tanque em $6$ h. Duas torneiras iguais enchem em:', ['$12$ h', '$3$ h', '$4$ h', '$8$ h'], 1, 'Inversa: o dobro de torneiras, metade do tempo.'],
       ['Se $12$ operários fazem uma obra em $10$ dias, $6$ operários fazem em:', ['$5$ dias', '$20$ dias', '$12$ dias', '$16$ dias'], 1, 'Inversa: $12 · 10 = 6 · x$; $x = 20$.'],
       ['Um ônibus faz $90$ km em $1,5$ h. Em $4$ h, à mesma velocidade, faz:', ['$240$ km', '$360$ km', '$135$ km', '$300$ km'], 0, 'Velocidade $60$ km/h; $60 · 4 = 240$.']],
      [[['Direta', 'Grandezas que crescem juntas: proporção na mesma ordem.'], ['Inversa', 'Uma cresce, a outra diminui: produto constante.'], ['Passos', 'Tabela, decidir direta ou inversa, montar e resolver.']], 'Como saber se uma regra de três é direta ou inversa?', 'Voltando aos problemas: $8$ kg de arroz custam R&#36; 48,00 e $8$ pedreiros levam $3$ dias.'],
      [['Se $2$ lápis custam R&#36; 3,00, $10$ lápis custam:', ['R&#36; 15,00', 'R&#36; 20,00', 'R&#36; 30,00', 'R&#36; 6,00'], 0], ['Se $3$ máquinas fazem um serviço em $8$ h, $6$ máquinas fazem em:', ['$16$ h', '$4$ h', '$24$ h', '$2$ h'], 1], ['Se $4$ L de tinta cobrem $20$ m², $10$ L cobrem:', ['$50$ m²', '$8$ m²', '$80$ m²', '$40$ m²'], 0]])
  ]
});
