// Matemática · 6º ano · 3º trimestre · Perímetro e área (base: slides "Área e perímetro de figuras planas" do CD)
// "R$" é escrito R&#36; para não confundir a mini-linguagem de fórmulas.
const { A, mod, co, sp, fig, tbl, callout } = require('./cd.js');

module.exports = mod({
  ano: '6° Ano', tri: 3, pasta: 'aulas/6-ano/3-tri/perimetro-e-area/', titulo: 'Perímetro e área', accent: 'primary', icon: 'cube', key: 'm6p31', area: 'Matemática · 6º ano',
  aulas: [
    A('perimetro-de-figuras-planas', 'Perímetro de figuras planas',
      `A ${co('primary')}volta</span> em torno da figura`,
      'Quantos metros de rodapé são necessários para contornar uma sala retangular de $5$ m por $4$ m?',
      'terreno', [['perímetro'], ['retângulo e quadrado', 'growth'], ['unidades de comprimento', 'decay']],
      ['Cercar um terreno, colocar rodapé e contornar uma quadra exigem saber o tamanho da “volta”.', ['A soma dos lados de um quadrado de lado $3$ cm é:', ['$6$ cm', '$9$ cm', '$12$ cm', '$18$ cm'], 2, '$4 · 3 = 12$.'], 'Quanto de cerca é preciso para contornar uma horta quadrada de $2$ m de lado?'],
      ['<strong>Calcular o perímetro</strong> de polígonos somando seus lados.', 'Usar as <strong>fórmulas</strong> do perímetro do retângulo e do quadrado.', 'Resolver problemas com <strong>unidades de comprimento</strong>.'],
      'Perímetro é <strong>comprimento</strong>: a resposta fica em cm, m, km — não em m².',
      [['O que é o perímetro', ['<strong>Perímetro</strong> é a medida do contorno de uma figura: a soma de todos os lados.', 'É medido em unidades de comprimento (mm, cm, m, km).', 'Serve para cerca, rodapé, moldura, barbante em volta de um objeto.'],
        fig('terreno', 'Ilustração original: terreno cercado.', '300px')],
       ['Retângulo e quadrado', ['<strong>Retângulo</strong> de lados $a$ e $b$: $P = 2a + 2b = 2 · (a + b)$.', '<strong>Quadrado</strong> de lado $l$: $P = 4 · l$.', 'Em um retângulo, lados opostos são iguais.'],
        tbl(['Figura', 'Fórmula', 'Exemplo'], [['retângulo', '$2(a + b)$', '$5 × 4$: $2 · 9 = 18$'], ['quadrado', '$4l$', '$l = 6,5$: $26$']])],
       ['Unidades e conversões', ['Antes de somar, ponha todos os lados <strong>na mesma unidade</strong>.', '$1$ m $= 100$ cm e $1$ km $= 1000$ m.', 'Exemplo: $2$ m e $50$ cm somam $2,5$ m.'],
        callout('Atenção', 'Não some metros com centímetros sem converter!', 'decay')]],
      [['Perímetro do retângulo', 'Calcule o perímetro de um retângulo de $8$ m por $3$ m.', [['Use $P = 2(a + b)$', '$2 · (8 + 3)$.'], ['Calcule', '$2 · 11 = 22$.']], '$22$ m'],
       ['Perímetro do quadrado', 'Calcule o perímetro de um quadrado de lado $6,5$ cm.', [['Use $P = 4l$', '$4 · 6,5$.'], ['Calcule', '$26$.']], '$26$ cm']],
      ['O rodapé da sala', 'Quantos metros de rodapé são necessários para uma sala de $5$ m por $4$ m?', ['O rodapé contorna a sala.', 'Use a fórmula do perímetro do retângulo.', '$2 · (5 + 4)$.'], '$P = 2 · (5 + 4) = 18$ m de rodapé.'],
      [['O perímetro de um quadrado de lado $9$ cm é:', ['$18$ cm', '$36$ cm', '$81$ cm', '$27$ cm'], 1, '$4 · 9 = 36$.'],
       ['O perímetro de um retângulo de $12$ m por $5$ m é:', ['$17$ m', '$34$ m', '$60$ m', '$120$ m'], 1, '$2 · (12 + 5) = 34$.'],
       ['Um triângulo de lados $7$ cm, $8$ cm e $10$ cm tem perímetro:', ['$25$ cm', '$21$ cm', '$56$ cm', '$80$ cm'], 0, '$7 + 8 + 10 = 25$.'],
       ['Um terreno quadrado de $20$ m de lado será cercado com $3$ voltas de arame. Quantos metros de arame são usados?', ['$80$ m', '$160$ m', '$240$ m', '$400$ m'], 2, 'Uma volta: $4 · 20 = 80$; três voltas: $240$.']],
      [[['Perímetro', 'Soma dos lados: a medida do contorno.'], ['Fórmulas', 'Retângulo: $2(a + b)$. Quadrado: $4l$.'], ['Unidades', 'Comprimento: mm, cm, m, km; converta antes de somar.']], 'Por que o perímetro de um quadrado de lado $4$ é diferente da sua área?', 'Voltando à sala: $2 · (5 + 4) = 18$ m de rodapé.'],
      [['O perímetro de um quadrado de lado $5$ m é:', ['$10$ m', '$20$ m', '$25$ m', '$15$ m'], 1], ['O perímetro de um retângulo de $3$ cm por $7$ cm é:', ['$10$ cm', '$20$ cm', '$21$ cm', '$14$ cm'], 1], ['Um triângulo equilátero de lado $6$ cm tem perímetro:', ['$12$ cm', '$18$ cm', '$36$ cm', '$24$ cm'], 1]]),

    A('area-de-figuras-planas', 'Área de figuras planas',
      `Quanto de ${co('primary')}piso</span> eu preciso?`,
      'Para forrar com piso uma sala retangular de $5$ m por $4$ m, quantos metros quadrados de piso são necessários? Se o metro quadrado custa R&#36; 40,00, qual é o custo?',
      'piso', [['área'], ['retângulo e quadrado', 'growth'], ['triângulo e paralelogramo', 'decay']],
      ['O perímetro mede o contorno; a área mede a <strong>superfície</strong>: quanto cabe dentro da figura.', ['Um quadrado de $1$ m de lado tem área de:', ['$1$ m', '$1$ m²', '$4$ m', '$4$ m²'], 1, 'Um metro quadrado.'], 'Quantos azulejos de $20$ cm por $20$ cm cobrem $1$ m²? (Pense em fileiras.)'],
      ['<strong>Calcular a área</strong> do retângulo, do quadrado, do paralelogramo e do triângulo.', '<strong>Diferenciar</strong> área e perímetro.', 'Resolver problemas com <strong>unidades de área</strong> e preço por m².'],
      'Área é medida em <strong>unidades quadradas</strong> (cm², m², km²).',
      [['Retângulo e quadrado', ['<strong>Retângulo</strong>: $A = b · h$ (base × altura).', '<strong>Quadrado</strong> de lado $l$: $A = l · l = l^2$.', 'A área conta quantos quadradinhos de $1$ unidade cabem na figura.'],
        tbl(['Figura', 'Fórmula', 'Exemplo'], [['retângulo', '$b · h$', '$5 · 4 = 20$ m²'], ['quadrado', '$l^2$', '$6^2 = 36$ cm²']])],
       ['Paralelogramo e triângulo', ['<strong>Paralelogramo</strong>: $A = b · h$ (a altura é perpendicular à base).', '<strong>Triângulo</strong>: $A = {b · h|2}$: é a metade de um paralelogramo.', 'Exemplo: $b = 10$ e $h = 6$ ⇒ $A = {60|2} = 30$.'],
        fig('piso', 'Ilustração original: piso formado por figuras repetidas.', '280px')],
       ['Unidades de área', ['$1$ m² é a área de um quadrado de $1$ m de lado: $1$ m² $= 100 · 100 = 10 000$ cm².', 'Mudar de m² para cm²: multiplique por $10 000$.', 'Cuidado: a área cresce com o <strong>quadrado</strong> da ampliação.'],
        callout('Atenção', 'Dobrar o lado de um quadrado multiplica a área por $4$.', 'decay')]],
      [['Área do piso', 'Calcule a área de uma sala de $5$ m por $4$ m e o custo do piso a R&#36; 40,00 o m².', [['Área do retângulo', '$5 · 4 = 20$ m².'], ['Custo', '$20 · 40 = 800$.']], '$20$ m² e R&#36; 800,00'],
       ['Área do triângulo', 'Calcule a área de um triângulo de base $10$ cm e altura $6$ cm.', [['Use $A = {b · h|2}$', '${10 · 6|2}$.'], ['Calcule', '${60|2} = 30$.']], '$30$ cm²']],
      ['Quadrado de lado 7', 'Qual é a área de um quadrado de lado $7$ cm?', ['Use $A = l^2$.', '$7 · 7 = ?$', 'Escreva a unidade correta.'], '$A = 7 · 7 = 49$ cm².'],
      [['A área de um retângulo de $9$ cm por $4$ cm é:', ['$13$ cm²', '$26$ cm²', '$36$ cm²', '$36$ cm'], 2, '$9 · 4 = 36$ cm².'],
       ['A área de um quadrado de lado $8$ m é:', ['$16$ m²', '$32$ m²', '$64$ m²', '$64$ m'], 2, '$8 · 8 = 64$ m².'],
       ['A área de um triângulo de base $12$ cm e altura $5$ cm é:', ['$60$ cm²', '$30$ cm²', '$17$ cm²', '$34$ cm²'], 1, '${12 · 5|2} = 30$.'],
       ['Um piso custa R&#36; 30,00 por m². Uma sala de $3$ m por $6$ m custa:', ['R&#36; 270,00', 'R&#36; 540,00', 'R&#36; 180,00', 'R&#36; 90,00'], 1, '$18$ m² · R&#36; 30 $= 540$.']],
      [[['Área', 'Medida da superfície; unidade quadrada.'], ['Fórmulas', 'Retângulo e paralelogramo: $b · h$. Quadrado: $l^2$. Triângulo: ${b · h|2}$.'], ['Conversão', '$1$ m² $= 10 000$ cm².']], 'Uma figura pode ter o mesmo perímetro e áreas diferentes? Dê um exemplo.', 'Voltando à sala: $20$ m² de piso a R&#36; 40,00 o m² custam R&#36; 800,00.'],
      [['A área de um retângulo de $6$ m por $3$ m é:', ['$9$ m²', '$18$ m²', '$18$ m', '$36$ m²'], 1], ['A área de um quadrado de lado $10$ cm é:', ['$40$ cm²', '$20$ cm²', '$100$ cm²', '$100$ cm'], 2], ['A área de um triângulo de base $8$ cm e altura $3$ cm é:', ['$24$ cm²', '$12$ cm²', '$11$ cm²', '$6$ cm²'], 1]])
  ]
});
