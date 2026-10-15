// Módulo 8 · 9º ano · Recomposição · 2º trimestre — Triângulos: existência e classificação (aulas 23 a 25 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wt = Wd.triExiste('rt1');

// triângulos desenhados em SVG (pontos fixos) para ilustrar as classificações
const tri = (pts, cor = 'var(--primary)', fundo = 'var(--primary-soft)') => `<polygon points="${pts}" fill="${fundo}" stroke="${cor}" stroke-width="3" stroke-linejoin="round"/>`;
const fig = (inner, legenda) => `<figure style="margin:0;text-align:center;">${svg(150, 110, inner, '130px')}<figcaption style="font-size:.85rem;color:var(--ink-soft);">${legenda}</figcaption></figure>`;
const tiraLados = `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
  ${fig(tri('75,10 135,100 15,100'), 'equilátero')}
  ${fig(tri('75,10 125,100 25,100', 'var(--growth)', 'var(--growth-soft)'), 'isósceles')}
  ${fig(tri('20,100 130,100 90,15', 'var(--decay)', 'var(--decay-soft)'), 'escaleno')}
</div>`;
const tiraAng = `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
  ${fig(tri('20,100 130,100 20,20'), 'retângulo')}
  ${fig(tri('75,15 130,100 20,100', 'var(--growth)', 'var(--growth-soft)'), 'acutângulo')}
  ${fig(tri('15,100 140,100 115,40', 'var(--decay)', 'var(--decay-soft)'), 'obtusângulo')}
</div>`;

module.exports = unidade({
  tri: 2, dir: 'triangulos-existencia-classificacao', titulo: 'Triângulos: existência e classificação', accent: 'growth', icon: 'triangle', key: 'r2u2',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'condicao-de-existencia-de-um-triangulo', titulo: 'Condição de existência de um triângulo',
      h1: `Quando ${co('growth')}três segmentos</span> formam um triângulo?`,
      sub: 'Nem sempre três segmentos formam um triângulo. A desigualdade triangular diz quando isso é possível: cada lado precisa ser menor que a soma dos outros dois.',
      badges: [['lados'], ['desigualdade', 'growth'], ['existência', 'decay']], color: 'growth',
      roteiro: ['Testar três medidas e decidir.', [['Fechar o triângulo', 'o que falta', 'bulb'], ['Desigualdade triangular', 'maior lado < soma', 'target'], ['Teste prático', 'só o maior lado', 'scale'], ['Intervalo do 3º lado', 'entre a diferença e a soma', 'chart'], ['Problemas', 'varetas e cercas', 'book']]],
      objetivos: ['Enunciar a <strong>desigualdade triangular</strong>.', '<strong>Testar</strong> se três medidas formam um triângulo.', 'Determinar o <strong>intervalo</strong> possível para o terceiro lado.'],
      dica: 'Basta testar o <strong>maior</strong> lado: ele precisa ser <strong>menor que a soma</strong> dos outros dois.',
      gancho: { titulo: 'As três varetas', texto: 'Você tem varetas de <strong>3 cm</strong>, <strong>4 cm</strong> e <strong>8 cm</strong>. É possível montar um triângulo com elas?', mini: ['Com 3, 4 e 8 cm:', ['Forma triângulo', 'Não forma triângulo: 3 + 4 < 8', 'Só forma se dobrar a vareta', 'Forma triângulo retângulo'], 1, 'As duas menores somam $7$, que é menor que $8$: não se fecham. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · desigualdade triangular', 'Cada lado é menor que a soma dos outros', g2(`<div>
              ${checks(['Em todo triângulo de lados $a$, $b$, $c$: $a < b + c$, $b < a + c$ e $c < a + b$.', 'Basta testar o <strong>maior</strong> lado: se ele for menor que a soma dos outros dois, os demais testes passam.', '<strong>Exemplo 1:</strong> $5, 6, 10$ ⇒ $10 < 5 + 6 = 11$ ✓ existe.', '<strong>Exemplo 2:</strong> $2, 3, 6$ ⇒ $6 < 5$? ✗ não existe.'], '.95rem')}
            </div>`, card(`<strong>Caso limite</strong>
              <p style="font-size:.92rem;margin-top:8px;">Lados $3, 4, 7$: $7 = 3 + 4$. O triângulo "achata" em um segmento: <strong>não existe</strong>.</p>
              <p class="hint" style="margin-top:6px;">A igualdade também não serve; é preciso <strong>menor</strong>.</p>`, 'primary'))],
        ['Teoria · o terceiro lado', 'Um intervalo de valores', g2(`<div>
              ${checks(['Se dois lados medem $a$ e $b$ (com $a ≥ b$), o terceiro $c$ satisfaz $a − b < c < a + b$.', 'Exemplo: lados $5$ e $9$ ⇒ $4 < c < 14$.', 'Se $c$ é inteiro: $c ∈ \\{5, 6, …, 13\\}$ — são $9$ valores.', 'Perímetros possíveis: entre $2 · 9 = 18$ e $2 · 14 = 28$ (sem incluir os extremos).'], '.95rem')}
            </div>`, callout('Como lembrar', 'O caminho direto é mais curto que o desvio: lado $c$ é o "caminho direto" entre dois vértices, $a + b$ é o desvio.', 'growth'))]
      ],
      exemplos: [
        ['Existe?', 'Os segmentos $7$ cm, $10$ cm e $15$ cm formam um triângulo?', [['Maior lado', '$15$.'], ['Soma dos outros', '$7 + 10 = 17$.'], ['Comparar', '$15 < 17$.']], 'Sim, <strong>forma triângulo</strong>.'],
        ['Intervalo do lado', 'Dois lados de um triângulo medem $6$ cm e $11$ cm. Quais medidas inteiras o terceiro lado pode ter?', [['Diferença e soma', '$11 − 6 = 5$ e $11 + 6 = 17$.'], ['Intervalo', '$5 < c < 17$.'], ['Inteiros', '$6, 7, …, 16$.']], 'Pode medir de <strong>6 a 16 cm</strong> (11 valores).']
      ],
      widget: { titulo: 'Existe um triângulo com estes lados?', html: wt.html, js: wt.js },
      pratique: [
        ['Teste', 'Com qual trio de medidas é possível formar um triângulo?', ['$2, 3, 6$', '$4, 4, 9$', '$5, 7, 11$', '$1, 2, 3$'], 2, '$11 < 5 + 7 = 12$ ✓. <strong>Alternativa C.</strong>'],
        ['Valor máximo', 'Dois lados medem $4$ cm e $9$ cm. O maior valor <strong>inteiro</strong> do terceiro lado é:', ['$12$', '$13$', '$14$', '$5$'], 0, '$9 − 4 < c < 9 + 4$, ou seja, $5 < c < 13$; o maior inteiro é $12$. <strong>Alternativa A.</strong>'],
        ['Valor mínimo', 'Dois lados medem $8$ cm e $5$ cm. O menor valor <strong>inteiro</strong> do terceiro lado é:', ['$3$', '$4$', '$5$', '$13$'], 1, '$3 < c < 13$ ⇒ o menor inteiro é $4$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A cerca triangular', 'Um fazendeiro quer cercar um terreno triangular com lados de $30$ m, $40$ m e $x$ m. Qual valor de $x$ <strong>impede</strong> a existência do terreno?', ['$15$ m', '$35$ m', '$50$ m', '$69$ m', '$70$ m'], 4, '$10 < x < 70$. Com $x = 70$ o triângulo fica degenerado: não existe. <strong>Alternativa E.</strong>'],
      cuidados: [['Igualdade serve?', '$3 + 4 = 7$: não forma triângulo. A soma precisa ser <strong>maior</strong>.'], ['Testar o menor lado', 'Teste o <strong>maior</strong> lado contra a soma dos outros.'], ['Somar os dois maiores', 'Compare o maior lado com a soma dos <strong>dois menores</strong>.'], ['Intervalo aberto', 'Os extremos do intervalo do terceiro lado <strong>não</strong> valem.']],
      quiz: [
        { q: 'Lados $6, 8, 12$ formam triângulo?', o: ['sim', 'não', 'só se for retângulo', 'depende dos ângulos'], a: 0 },
        { q: 'Lados $2, 5, 8$ formam triângulo?', o: ['sim', 'não', 'sim, isósceles', 'sim, escaleno'], a: 1 },
        { q: 'Dois lados $10$ e $15$: o terceiro está entre:', o: ['$0$ e $25$', '$5$ e $25$', '$10$ e $15$', '$5$ e $15$'], a: 1 },
        { q: 'Qual a condição de existência?', o: ['soma dos lados > 180', 'maior lado menor que a soma dos outros dois', 'todos os lados iguais', 'maior lado igual à soma'], a: 1 }
      ],
      sintese: [['Condição', 'Maior lado menor que a soma dos outros dois.'], ['Terceiro lado', 'Entre a diferença e a soma dos outros dois.'], ['Limites', 'Extremos não valem.']],
      msg: 'Próxima aula: classificar triângulos quanto aos lados.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'triangulos-quanto-aos-lados', titulo: 'Classificação dos triângulos quanto aos lados',
      h1: `Triângulos ${co('growth')}quanto aos lados</span>`,
      sub: 'Observando as medidas dos lados, classificamos um triângulo em equilátero, isósceles ou escaleno. Essa classificação revela propriedades dos ângulos.',
      badges: [['equilátero'], ['isósceles', 'growth'], ['escaleno', 'decay']], color: 'growth',
      roteiro: ['Comparar lados e dar nome.', [['Equilátero', 'três lados iguais', 'target'], ['Isósceles', 'dois lados iguais', 'scale'], ['Escaleno', 'três lados diferentes', 'chart'], ['Ângulos e lados', 'iguais ligados', 'bulb'], ['Perímetro', 'soma dos lados', 'book']]],
      objetivos: ['Classificar triângulos em <strong>equilátero, isósceles e escaleno</strong>.', 'Relacionar lados iguais a <strong>ângulos iguais</strong>.', 'Calcular o <strong>perímetro</strong>.'],
      dica: 'Lados iguais ↔ ângulos <strong>opostos</strong> iguais. No equilátero, os três ângulos medem $60°$.',
      gancho: { titulo: 'As placas', texto: 'A placa "Dê a preferência" é um triângulo <strong>equilátero</strong>; a placa de um telhado, um triângulo <strong>isósceles</strong>. Qual é a diferença entre eles?', mini: ['Isósceles tem:', ['3 lados iguais', 'exatamente 2 lados iguais (pelo menos 2)', '3 lados diferentes', 'ângulo de 90°'], 1, 'Isósceles: pelo menos dois lados iguais. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · três tipos', 'Lados iguais e diferentes', g2(`<div>
              ${checks(['<strong>Equilátero:</strong> três lados iguais; três ângulos de $60°$.', '<strong>Isósceles:</strong> dois lados iguais (os "pernas"); ângulos da base iguais.', '<strong>Escaleno:</strong> três lados diferentes; três ângulos diferentes.', 'O equilátero é também um caso particular de isósceles.'], '.95rem')}
            </div>`, `<div>${tiraLados}</div>`)],
        ['Teoria · ângulos e lados', 'Quem é igual a quem', g2(`<div>
              ${checks(['Em um triângulo, a <strong>lados iguais</strong> opõem-se <strong>ângulos iguais</strong>.', 'No isósceles de ângulo do vértice $40°$: ângulos da base $= (180° − 40°) ÷ 2 = 70°$.', 'Ao <strong>maior lado</strong> opõe-se o <strong>maior ângulo</strong>.', 'Perímetro do isósceles com pernas $5$ e base $8$: $5 + 5 + 8 = 18$.'], '.95rem')}
            </div>`, callout('Dica de memória', 'Equi = igual; "látero" = lado. Isósceles significa "pernas iguais". Escaleno vem de "desigual".', 'growth'))]
      ],
      exemplos: [
        ['Classificando', 'Classifique os triângulos de lados: (a) $6, 6, 6$; (b) $5, 5, 8$; (c) $4, 6, 9$.', [['(a)', 'Três iguais: equilátero.'], ['(b)', 'Dois iguais: isósceles.'], ['(c)', 'Todos diferentes: escaleno.'], ['Existe?', '$9 < 4 + 6 = 10$ ✓.']], '(a) <strong>equilátero</strong>, (b) <strong>isósceles</strong>, (c) <strong>escaleno</strong>.'],
        ['Ângulos do isósceles', 'Em um triângulo isósceles, o ângulo do vértice mede $50°$. Quanto mede cada ângulo da base?', [['Soma', 'A soma dos ângulos internos é $180°$.'], ['Base', '$180° − 50° = 130°$ para os dois.'], ['Dividir', '$130° ÷ 2 = 65°$.']], 'Cada ângulo da base mede <strong>65°</strong>.']
      ],
      pratique: [
        ['Equilátero', 'Em um triângulo equilátero, cada ângulo interno mede:', ['$45°$', '$60°$', '$90°$', '$120°$'], 1, '$180° ÷ 3 = 60°$. <strong>Alternativa B.</strong>'],
        ['Perímetro', 'Um triângulo isósceles tem lados $7$, $7$ e $10$. Seu perímetro é:', ['$17$', '$21$', '$24$', '$27$'], 2, '$7 + 7 + 10 = 24$. <strong>Alternativa C.</strong>'],
        ['Ângulos', 'Um triângulo isósceles tem ângulos da base de $35°$. O ângulo do vértice mede:', ['$70°$', '$90°$', '$100°$', '$110°$'], 3, '$180° − 2 · 35° = 110°$. <strong>Alternativa D.</strong>']
      ],
      enem: ['A estrutura do telhado', 'A estrutura de um telhado tem forma de triângulo isósceles com ângulo do vértice de $100°$. Cada ângulo da base mede:', ['$30°$', '$35°$', '$40°$', '$45°$', '$80°$'], 2, '$(180° − 100°) ÷ 2 = 40°$. <strong>Alternativa C.</strong>'],
      cuidados: [['Equilátero não é isósceles?', 'É, sim: tem <strong>pelo menos</strong> dois lados iguais.'], ['Ângulos iguais da base', 'Os ângulos iguais ficam <strong>opostos aos lados iguais</strong>.'], ['Escaleno sem medir', 'Para classificar, compare as medidas, não a aparência do desenho.'], ['Esquecer o teste de existência', 'Antes de classificar, confira a desigualdade triangular.']],
      quiz: [
        { q: 'Triângulo com lados $5, 5, 5$ é:', o: ['escaleno', 'isósceles apenas', 'equilátero', 'retângulo'], a: 2 },
        { q: 'Triângulo com lados $4, 5, 6$ é:', o: ['escaleno', 'isósceles', 'equilátero', 'não existe'], a: 0 },
        { q: 'Ao maior lado opõe-se o:', o: ['menor ângulo', 'maior ângulo', 'ângulo reto', 'ângulo raso'], a: 1 },
        { q: 'Em um isósceles com base $40°$, o outro ângulo é:', o: ['$40°$', '$80°$', '$100°$', '$140°$'], a: 2 }
      ],
      sintese: [['Equilátero', '3 lados iguais; ângulos de 60°.'], ['Isósceles', '2 lados iguais; ângulos da base iguais.'], ['Escaleno', '3 lados diferentes.']],
      msg: 'Próxima aula: classificação quanto aos ângulos.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'triangulos-quanto-aos-angulos', titulo: 'Classificação dos triângulos quanto aos ângulos',
      h1: `Triângulos ${co('growth')}quanto aos ângulos</span>`,
      sub: 'Pelo maior ângulo, o triângulo é acutângulo (todos agudos), retângulo (um reto) ou obtusângulo (um obtuso). A soma dos ângulos internos é sempre 180°.',
      badges: [['acutângulo'], ['retângulo', 'growth'], ['obtusângulo', 'decay']], color: 'growth',
      roteiro: ['Medir o maior ângulo e nomear.', [['Ângulos', 'agudo, reto, obtuso', 'bulb'], ['Soma 180°', 'sempre', 'target'], ['Acutângulo', 'três agudos', 'chart'], ['Retângulo', 'um reto', 'scale'], ['Obtusângulo', 'um obtuso', 'book']]],
      objetivos: ['Classificar triângulos em <strong>acutângulo, retângulo e obtusângulo</strong>.', 'Usar a <strong>soma de 180°</strong> para achar ângulos.', '<strong>Combinar</strong> as duas classificações.'],
      dica: 'Agudo $< 90°$; reto $= 90°$; obtuso $> 90°$. Um triângulo tem <strong>no máximo um</strong> ângulo reto ou obtuso.',
      gancho: { titulo: 'O esquadro', texto: 'Um esquadro de desenho tem um ângulo de <strong>90°</strong>. Os outros dois ângulos de um esquadro medem <strong>45°</strong> cada ou <strong>30°</strong> e <strong>60°</strong>. Por que a soma é sempre a mesma?', mini: ['Os ângulos de um esquadro somam:', ['$90°$', '$180°$', '$270°$', '$360°$'], 1, 'A soma dos ângulos internos de qualquer triângulo é $180°$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · três nomes', 'Pelo maior ângulo', g2(`<div>
              ${checks(['<strong>Acutângulo:</strong> os três ângulos são agudos ($< 90°$).', '<strong>Retângulo:</strong> um ângulo é reto ($= 90°$).', '<strong>Obtusângulo:</strong> um ângulo é obtuso ($> 90°$).', 'A soma dos três ângulos internos é sempre $180°$.'], '.95rem')}
            </div>`, `<div>${tiraAng}</div>`)],
        ['Teoria · usando 180°', 'Descobrir o terceiro ângulo', g2(`<div>
              ${checks(['Ângulos $50°$ e $60°$: o terceiro é $180° − 110° = 70°$ ⇒ acutângulo.', 'Ângulos $30°$ e $60°$: o terceiro é $90°$ ⇒ retângulo.', 'Ângulos $25°$ e $35°$: o terceiro é $120°$ ⇒ obtusângulo.', 'No retângulo, os outros dois ângulos somam $90°$ (são <strong>complementares</strong>).'], '.95rem')}
            </div>`, callout('Duas classificações', 'Um triângulo pode ser, ao mesmo tempo, <strong>isósceles e retângulo</strong> (ângulos $45°, 45°, 90°$).', 'growth'))]
      ],
      exemplos: [
        ['Ângulo que falta', 'Dois ângulos de um triângulo medem $40°$ e $75°$. Quanto mede o terceiro? Como se classifica?', [['Somar', '$40° + 75° = 115°$.'], ['Terceiro', '$180° − 115° = 65°$.'], ['Classificar', 'Todos menores que $90°$: acutângulo.']], 'O terceiro mede <strong>65°</strong>: triângulo <strong>acutângulo</strong>.'],
        ['Retângulo isósceles', 'Um triângulo retângulo é também isósceles. Quanto medem os outros dois ângulos?', [['Soma dos agudos', '$180° − 90° = 90°$.'], ['Iguais', '$90° ÷ 2 = 45°$.']], 'Cada um mede <strong>45°</strong>.']
      ],
      pratique: [
        ['Classificar', 'Um triângulo com ângulos $20°$, $30°$ e $130°$ é:', ['acutângulo', 'retângulo', 'obtusângulo', 'equilátero'], 2, '$130° > 90°$: obtusângulo. <strong>Alternativa C.</strong>'],
        ['Ângulo que falta', 'Em um triângulo retângulo, um ângulo agudo mede $37°$. O outro mede:', ['$43°$', '$53°$', '$63°$', '$143°$'], 1, '$90° − 37° = 53°$. <strong>Alternativa B.</strong>'],
        ['Possível?', 'Pode existir um triângulo com dois ângulos retos?', ['sim', 'não, a soma passaria de 180°', 'sim, se for isósceles', 'sim, se for pequeno'], 1, '$90° + 90° = 180°$, sobraria $0°$ para o terceiro. <strong>Alternativa B.</strong>']
      ],
      enem: ['A rampa', 'Uma rampa forma com o solo um ângulo de $20°$ e com a parede vertical um ângulo reto. O ângulo entre a rampa e a parede mede:', ['$20°$', '$50°$', '$60°$', '$70°$', '$90°$'], 3, 'No triângulo retângulo: $180° − 90° − 20° = 70°$. <strong>Alternativa D.</strong>'],
      cuidados: [['Dois ângulos obtusos', 'Impossível: a soma passaria de $180°$.'], ['Confundir retângulo com a figura', '"Triângulo retângulo" é um triângulo com um ângulo reto; não confundir com o retângulo.'], ['Somar até 360°', 'Triângulo soma $180°$; quadrilátero, $360°$.'], ['Classificar sem medir', 'Use a soma de $180°$ para achar o terceiro ângulo.']],
      quiz: [
        { q: 'Triângulo com ângulos $60°, 60°, 60°$ é:', o: ['retângulo', 'obtusângulo', 'acutângulo', 'impossível'], a: 2 },
        { q: 'A soma dos ângulos internos de um triângulo é:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 1 },
        { q: 'Em um triângulo retângulo, os dois agudos somam:', o: ['$45°$', '$90°$', '$180°$', '$270°$'], a: 1 },
        { q: 'Ângulos $15°, 25°, x$: o triângulo é:', o: ['acutângulo', 'retângulo', 'obtusângulo', 'impossível'], a: 2 }
      ],
      sintese: [['Soma', 'Ângulos internos somam 180°.'], ['Classificação', 'Pelo maior ângulo: agudo, reto ou obtuso.'], ['Duas formas', 'Podemos combinar lados e ângulos (ex.: retângulo isósceles).']],
      msg: 'Próximo módulo: propriedades dos triângulos.'
    }
  ]
});
