// Módulo 15 · 9º ano · Recomposição · 3º trimestre — Área de figuras planas (aulas 46 a 48 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wa = Wd.area('rr1');

const quadric = svg(240, 130, `<g stroke="var(--primary)" stroke-width="1.6" fill="var(--primary-soft)">${[0, 1, 2, 3, 4].map(i => [0, 1, 2].map(j => `<rect x="${30 + i * 34}" y="${15 + j * 34}" width="34" height="34"/>`).join('')).join('')}</g><text x="95" y="124" font-size="13" fill="var(--ink)">5 · 3 = 15 quadradinhos</text>`, '280px');

module.exports = unidade({
  tri: 3, dir: 'area-de-figuras-planas', titulo: 'Área de figuras planas', accent: 'growth', icon: 'grid', key: 'r3u2',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'area-de-figuras-planas-i', titulo: 'Área de figuras planas I: o conceito e o retângulo',
      h1: `Área: ${co('growth')}quantos quadradinhos cabem?</span>`,
      sub: 'Área é a medida da superfície de uma figura. Medimos contando quantas unidades quadradas cabem dentro dela: m², cm², km².',
      badges: [['superfície'], ['m²', 'growth'], ['retângulo', 'decay']], color: 'growth',
      roteiro: ['Da contagem de quadradinhos à fórmula.', [['O que é área', 'superfície', 'bulb'], ['Unidades', 'cm², m², km²', 'chart'], ['Converter', '× 100 por degrau', 'scale'], ['Retângulo e quadrado', 'base × altura', 'target'], ['Problemas', 'pisos e terrenos', 'book']]],
      objetivos: ['Entender <strong>área</strong> como contagem de unidades quadradas.', '<strong>Converter</strong> unidades de área.', 'Calcular a área de <strong>retângulos e quadrados</strong>.'],
      dica: 'Área de retângulo: <strong>base × altura</strong>. Quadrado de lado $a$: $a²$.',
      gancho: { titulo: 'Piso da sala', texto: 'Uma sala retangular tem <strong>5 m de comprimento</strong> e <strong>3 m de largura</strong>. Quantos metros quadrados de piso são necessários?', mini: ['A área da sala é:', ['$8$ m²', '$15$ m²', '$16$ m²', '$30$ m²'], 1, '$5 · 3 = 15$ m². <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o conceito', 'Contar quadradinhos', g2(`<div>
              ${checks(['<strong>Área</strong> é a medida da superfície; usa unidades quadradas (cm², m², km²).', '$1$ m² é a área de um quadrado de $1$ m de lado.', '<strong>Retângulo</strong> de base $b$ e altura $h$: $A = b · h$.', '<strong>Quadrado</strong> de lado $a$: $A = a · a = a²$.'], '.95rem')}
            </div>`, `<div>${quadric}</div>`)],
        ['Teoria · unidades de área', 'Cada degrau vale 100', g2(`<div>
              ${checks(['$1$ m $= 100$ cm ⇒ $1$ m² $= 100 · 100 = 10 000$ cm².', '$1$ km² $= 1 000 000$ m².', '$1$ hectare (ha) $= 10 000$ m².', 'Entre unidades vizinhas de área, multiplique ou divida por <strong>100</strong> (não por 10).'], '.95rem')}
            </div>`, callout('Armadilha', 'Área não se converte como comprimento: $1$ m² <strong>não</strong> é $100$ cm², é $10 000$ cm².', 'growth'))]
      ],
      exemplos: [
        ['Área da sala', 'Uma sala mede $4,5$ m por $3,2$ m. Qual é a área?', [['Fórmula', '$A = b · h$.'], ['Calcular', '$4,5 · 3,2 = 14,4$.']], 'A área é <strong>14,4 m²</strong>.'],
        ['Conversão', 'Converta $3,5$ m² para cm².', [['Fator', '$1$ m² $= 10 000$ cm².'], ['Multiplicar', '$3,5 · 10 000 = 35 000$.']], '$3,5$ m² $=$ <strong>35 000 cm²</strong>.']
      ],
      widget: { titulo: 'Áreas de figuras planas', html: wa.html, js: wa.js },
      pratique: [
        ['Retângulo', 'Um retângulo de $12$ cm por $7$ cm tem área de:', ['$19$ cm²', '$38$ cm²', '$84$ cm²', '$144$ cm²'], 2, '$12 · 7 = 84$. <strong>Alternativa C.</strong>'],
        ['Quadrado', 'Um quadrado de lado $9$ m tem área de:', ['$18$ m²', '$36$ m²', '$81$ m²', '$99$ m²'], 2, '$9² = 81$. <strong>Alternativa C.</strong>'],
        ['Conversão', '$2$ m² correspondem a:', ['$200$ cm²', '$2 000$ cm²', '$20 000$ cm²', '$200 000$ cm²'], 2, '$2 · 10 000 = 20 000$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O piso', 'Um piso retangular de $8$ m por $5$ m será coberto por lajotas quadradas de $0,5$ m de lado. Quantas lajotas serão necessárias?', ['$40$', '$80$', '$120$', '$160$', '$200$'], 3, 'Área $= 40$ m²; lajota $= 0,25$ m²; $40 ÷ 0,25 = 160$. <strong>Alternativa D.</strong>'],
      cuidados: [['Perímetro × área', 'Perímetro soma lados; área multiplica.'], ['Converter por 10', 'Em áreas, o fator é $100$ por degrau.'], ['Unidades diferentes', 'Converta base e altura para a mesma unidade antes.'], ['Esquecer o quadrado', 'Resposta de área leva unidade ao quadrado.']],
      quiz: [
        { q: 'Área de retângulo $6 × 4$:', o: ['$10$', '$20$', '$24$', '$48$'], a: 2 },
        { q: '$1$ m² tem quantos cm²?', o: ['$100$', '$1 000$', '$10 000$', '$100 000$'], a: 2 },
        { q: 'Quadrado de lado $7$:', o: ['$14$', '$28$', '$49$', '$77$'], a: 2 },
        { q: 'A área é medida em unidades:', o: ['lineares', 'quadradas', 'cúbicas', 'angulares'], a: 1 }
      ],
      sintese: [['Área', 'Quantidade de unidades quadradas.'], ['Retângulo', 'b × h; quadrado a².'], ['Conversão', '× 100 por degrau.']],
      msg: 'Próxima aula: áreas do triângulo, paralelogramo, trapézio e losango.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'area-de-figuras-planas-ii', titulo: 'Área de figuras planas II: triângulo, paralelogramo, trapézio e losango',
      h1: `Áreas: ${co('growth')}triângulo, paralelogramo, trapézio e losango</span>`,
      sub: 'Todas as fórmulas de área vêm do retângulo: basta recortar e remontar a figura. Conhecê-las permite calcular terrenos, telhados e velas.',
      badges: [['triângulo'], ['trapézio', 'growth'], ['losango', 'decay']], color: 'growth',
      roteiro: ['De cada figura ao retângulo.', [['Paralelogramo', 'b × h', 'target'], ['Triângulo', 'b × h ÷ 2', 'scale'], ['Trapézio', '(B + b) × h ÷ 2', 'chart'], ['Losango', 'D × d ÷ 2', 'bulb'], ['Comparar', 'qual é a maior', 'book']]],
      objetivos: ['Aplicar as fórmulas de <strong>área</strong> de paralelogramo, triângulo, trapézio e losango.', '<strong>Justificar</strong> as fórmulas recortando figuras.', 'Resolver problemas de <strong>terrenos e superfícies</strong>.'],
      dica: 'A altura é sempre <strong>perpendicular</strong> à base — não é o lado inclinado.',
      gancho: { titulo: 'A bandeirinha de festa', texto: 'Uma bandeirinha triangular tem <strong>base 20 cm</strong> e <strong>altura 15 cm</strong>. Qual é a área de tecido de cada bandeirinha?', mini: ['A área da bandeirinha é:', ['$35$ cm²', '$150$ cm²', '$300$ cm²', '$600$ cm²'], 1, '${20 · 15|2} = 150$ cm². <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fórmulas', 'Todas derivam do retângulo', g2(`<div>
              ${tbl(['Figura', 'Fórmula'], [['paralelogramo', '$b · h$'], ['triângulo', '${b · h|2}$'], ['trapézio', '${(B + b) · h|2}$'], ['losango', '${D · d|2}$'], ['retângulo', '$b · h$']])}
            </div>`, card(`<strong>Por quê?</strong>
              <p style="font-size:.92rem;margin-top:8px;">Paralelogramo: recorta-se um triângulo de um lado e cola-se no outro: vira retângulo $b × h$.</p>
              <p style="font-size:.92rem;">Triângulo: metade de um paralelogramo.</p>
              <p style="font-size:.92rem;">Trapézio: dois trapézios iguais formam um paralelogramo de base $B + b$.</p>`, 'primary'))],
        ['Teoria · cuidados', 'Altura e diagonais', g2(`<div>
              ${checks(['<strong>Altura</strong>: perpendicular à base, não o lado oblíquo.', 'Losango: use as <strong>diagonais</strong> $D$ e $d$.', 'Para figuras com unidades mistas, converta antes.', 'Confira: a área do triângulo é <strong>metade</strong> do retângulo $b · h$.'], '.95rem')}
            </div>`, callout('Dica', 'Se a figura for composta, <strong>decomponha</strong> em figuras conhecidas e some as áreas.', 'growth'))]
      ],
      exemplos: [
        ['Trapézio', 'Um terreno em forma de trapézio tem bases de $30$ m e $18$ m e altura de $10$ m. Qual é a área?', [['Somar as bases', '$30 + 18 = 48$.'], ['Multiplicar', '$48 · 10 = 480$.'], ['Dividir', '$480 ÷ 2 = 240$.']], 'A área é <strong>240 m²</strong>.'],
        ['Losango', 'Uma pipa em losango tem diagonais de $60$ cm e $40$ cm. Qual é a área?', [['Fórmula', '${D · d|2}$.'], ['Calcular', '${60 · 40|2} = 1200$.']], 'A área é <strong>1 200 cm²</strong>.']
      ],
      pratique: [
        ['Triângulo', 'Triângulo de base $14$ e altura $9$: área:', ['$23$', '$63$', '$126$', '$252$'], 1, '${14 · 9|2} = 63$. <strong>Alternativa B.</strong>'],
        ['Paralelogramo', 'Paralelogramo de base $10$ e altura $6$:', ['$16$', '$30$', '$60$', '$120$'], 2, '$10 · 6 = 60$. <strong>Alternativa C.</strong>'],
        ['Trapézio', 'Trapézio com bases $7$ e $5$ e altura $4$:', ['$12$', '$24$', '$48$', '$140$'], 1, '${(7 + 5) · 4|2} = 24$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A empena', 'A empena (parede triangular) de uma casa tem $8$ m de base e $3$ m de altura. A tinta rende $6$ m² por litro. Quantos litros são necessários para uma demão?', ['$1$', '$2$', '$3$', '$4$', '$6$'], 1, 'Área $= {8 · 3|2} = 12$ m²; $12 ÷ 6 = 2$ litros. <strong>Alternativa B.</strong>'],
      cuidados: [['Altura = lado', 'A altura é perpendicular; o lado inclinado é maior.'], ['Esquecer ÷ 2', 'Triângulo, trapézio e losango levam ÷ 2.'], ['Somar bases erradas', 'No trapézio, some as duas bases paralelas.'], ['Confundir D e d', 'No losango, use as duas diagonais.']],
      quiz: [
        { q: 'Área do triângulo com base $10$ e altura $4$:', o: ['$14$', '$20$', '$40$', '$80$'], a: 1 },
        { q: 'Área do losango com diagonais $8$ e $6$:', o: ['$14$', '$24$', '$48$', '$96$'], a: 1 },
        { q: 'A fórmula do trapézio é:', o: ['$B · b · h$', '${(B + b) · h|2}$', '$(B − b) · h$', '$B + b + h$'], a: 1 },
        { q: 'O paralelogramo vira retângulo $b × h$ ao:', o: ['girar', 'recortar e colar', 'dobrar ao meio', 'esticar'], a: 1 }
      ],
      sintese: [['Paralelogramo', 'b·h.'], ['Triângulo e losango', 'Metade do produto.'], ['Trapézio', '(B+b)·h÷2.']],
      msg: 'Próxima aula: figuras compostas e problemas de área.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'area-de-figuras-planas-iii', titulo: 'Área de figuras planas III: figuras compostas e problemas',
      h1: `Áreas: ${co('growth')}decompor e resolver problemas</span>`,
      sub: 'Terrenos, pisos e paredes raramente são figuras simples. Decompomos em partes, somamos ou subtraímos e ainda calculamos custos e quantidades de material.',
      badges: [['composta'], ['custo', 'growth'], ['material', 'decay']], color: 'growth',
      roteiro: ['Do desenho ao orçamento.', [['Decompor', 'partes conhecidas', 'target'], ['Somar e subtrair', 'áreas', 'chart'], ['Custos', 'área × preço', 'coin'], ['Material', 'rendimento', 'bulb'], ['Conferir', 'ordem de grandeza', 'book']]],
      objetivos: ['Calcular áreas de <strong>figuras compostas</strong>.', 'Resolver problemas de <strong>custo e rendimento</strong>.', 'Conferir resultados por <strong>estimativa</strong>.'],
      dica: 'Desenhe a figura, <strong>marque as medidas</strong>, decomponha e anote a área de cada parte.',
      gancho: { titulo: 'O quintal com piscina', texto: 'Um quintal retangular de <strong>12 m × 8 m</strong> tem uma piscina retangular de <strong>5 m × 3 m</strong>. Quantos m² sobram de área livre?', mini: ['A área livre é:', ['$81$ m²', '$96$ m²', '$111$ m²', '$15$ m²'], 0, '$96 − 15 = 81$ m². <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · estratégia', 'Somar ou subtrair', g2(`<div>
              ${checks(['<strong>Somar:</strong> divida a figura em retângulos, triângulos… e some as áreas.', '<strong>Subtrair:</strong> área do todo menos a do "buraco".', 'Escolha o caminho com <strong>menos contas</strong>.', 'Estime antes: a área está entre a do menor e a do maior retângulo envolvente.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Figura em L: retângulo $10 × 6$ mais retângulo $4 × 3$. Área $= 60 + 12 = 72$.</p>`, 'primary'))],
        ['Teoria · aplicações', 'Custo e rendimento', g2(`<div>
              ${checks(['<strong>Custo</strong> $=$ área $×$ preço por m².', '<strong>Rendimento:</strong> se uma lata cobre $12$ m², para $60$ m² precisa de $60 ÷ 12 = 5$ latas.', 'Material sempre se <strong>arredonda para cima</strong> (não dá para comprar meia lata).', 'Inclua perdas se o enunciado pedir (ex.: $10%$ a mais de piso).'], '.95rem')}
            </div>`, callout('Arredonde para cima', 'Se o resultado deu $4,2$ latas, compre $5$.', 'growth'))]
      ],
      exemplos: [
        ['Custo do piso', 'Uma sala de $6$ m por $4$ m receberá piso que custa R$ 45 o m². Qual o custo?', [['Área', '$6 · 4 = 24$ m².'], ['Custo', '$24 · 45 = 1080$.']], 'O custo é <strong>R$ 1.080</strong>.'],
        ['Latas de tinta', 'Uma parede de $5$ m por $3$ m terá duas demãos. Uma lata rende $10$ m² por demão. Quantas latas?', [['Área', '$15$ m².'], ['Duas demãos', '$2 · 15 = 30$ m².'], ['Latas', '$30 ÷ 10 = 3$.']], 'São necessárias <strong>3 latas</strong>.']
      ],
      pratique: [
        ['Figura em L', 'Uma figura em L é formada por um retângulo $8 × 5$ e outro $3 × 2$. A área total é:', ['$40$', '$46$', '$50$', '$56$'], 1, '$40 + 6 = 46$. <strong>Alternativa B.</strong>'],
        ['Custo', 'Um terreno de $200$ m² custa R$ 150 o m². O preço total é:', ['R$ 3.000', 'R$ 30.000', 'R$ 300.000', 'R$ 350'], 1, '$200 · 150 = 30 000$. <strong>Alternativa B.</strong>'],
        ['Rendimento', 'Uma lata cobre $8$ m². Para $50$ m², quantas latas são necessárias?', ['$6$', '$7$', '$8$', '$9$'], 1, '$50 ÷ 8 = 6,25$ ⇒ $7$ latas. <strong>Alternativa B.</strong>']
      ],
      enem: ['A reforma', 'Uma varanda de $5$ m por $4$ m receberá cerâmica em toda a área, com $10%$ de sobra para quebras. Quantos m² de cerâmica devem ser comprados?', ['$20$', '$21$', '$22$', '$24$', '$30$'], 2, '$20 · 1,10 = 22$ m². <strong>Alternativa C.</strong>'],
      cuidados: [['Contar duas vezes', 'Cuide para não somar a mesma região duas vezes.'], ['Arredondar para baixo', 'Em compras, arredonde para <strong>cima</strong>.'], ['Unidades misturadas', 'Converta cm e m antes de calcular.'], ['Esquecer o buraco', 'Se há recorte, subtraia a área dele.']],
      quiz: [
        { q: 'Quintal $10 × 6$ com canteiro $2 × 3$: área livre:', o: ['$54$', '$60$', '$66$', '$6$'], a: 0 },
        { q: 'Piso a R$ 30 o m² em sala de $20$ m²:', o: ['R$ 50', 'R$ 600', 'R$ 6.000', 'R$ 20'], a: 1 },
        { q: 'Lata cobre $12$ m²; parede de $30$ m²: latas:', o: ['$2$', '$3$', '$4$', '$6$'], a: 1 },
        { q: 'Materiais de obra devem ser:', o: ['arredondados para baixo', 'arredondados para cima', 'ignorados', 'divididos por 2'], a: 1 }
      ],
      sintese: [['Compostas', 'Decomponha, some ou subtraia.'], ['Custo', 'Área × preço por m².'], ['Material', 'Arredonde para cima.']],
      msg: 'Próximo módulo: área do círculo.'
    }
  ]
});
