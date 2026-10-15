// Módulo 10 · 9º ano · Recomposição · 2º trimestre — Quadriláteros (aulas 28 e 29 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

const q = (pts, cor = 'var(--primary)', fundo = 'var(--primary-soft)') => `<polygon points="${pts}" fill="${fundo}" stroke="${cor}" stroke-width="3" stroke-linejoin="round"/>`;
const fig = (inner, legenda) => `<figure style="margin:0;text-align:center;">${svg(150, 110, inner, '120px')}<figcaption style="font-size:.85rem;color:var(--ink-soft);">${legenda}</figcaption></figure>`;
const tira = `<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
  ${fig(q('30,95 120,95 120,20 30,20'), 'quadrado')}
  ${fig(q('15,95 135,95 135,35 15,35', 'var(--growth)', 'var(--growth-soft)'), 'retângulo')}
  ${fig(q('75,10 135,55 75,100 15,55', 'var(--decay)', 'var(--decay-soft)'), 'losango')}
  ${fig(q('10,95 100,95 140,25 50,25'), 'paralelogramo')}
  ${fig(q('10,95 140,95 105,25 45,25', 'var(--growth)', 'var(--growth-soft)'), 'trapézio')}
</div>`;

module.exports = unidade({
  tri: 2, dir: 'quadrilateros', titulo: 'Quadriláteros', accent: 'primary', icon: 'grid', key: 'r2u4',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'classificacao-dos-quadrilateros', titulo: 'Classificação dos quadriláteros',
      h1: `${co('primary')}Quadriláteros:</span> a família de quatro lados`,
      sub: 'Quadriláteros são polígonos de quatro lados. Paralelogramos, retângulos, losangos, quadrados e trapézios formam uma família com propriedades que se herdam.',
      badges: [['paralelogramo'], ['trapézio', 'growth'], ['quadrado', 'decay']], color: 'primary',
      roteiro: ['Conhecer a família e suas relações.', [['Quadrilátero', 'quatro lados', 'bulb'], ['Trapézio', 'um par paralelo', 'target'], ['Paralelogramo', 'dois pares paralelos', 'scale'], ['Retângulo, losango, quadrado', 'casos especiais', 'chart'], ['Quem é quem', 'diagrama de famílias', 'book']]],
      objetivos: ['Definir <strong>trapézio, paralelogramo, retângulo, losango e quadrado</strong>.', 'Reconhecer as <strong>relações de inclusão</strong> entre eles.', 'Identificar propriedades de <strong>lados e ângulos</strong>.'],
      dica: 'Todo quadrado é retângulo, losango e paralelogramo — mas o contrário nem sempre vale.',
      gancho: { titulo: 'Quadrado ou retângulo?', texto: 'Uma pessoa disse que "todo quadrado é retângulo". Outra respondeu que "isso é impossível, porque o retângulo tem lados diferentes". Quem tem razão?', mini: ['Todo quadrado é retângulo?', ['Sim: tem 4 ângulos retos', 'Não, retângulo tem lados desiguais', 'Só os grandes', 'Só os pequenos'], 0, 'Retângulo exige 4 ângulos retos; o quadrado cumpre. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · a família', 'Definições', g2(`<div>
              ${checks(['<strong>Trapézio:</strong> pelo menos um par de lados paralelos.', '<strong>Paralelogramo:</strong> dois pares de lados paralelos.', '<strong>Retângulo:</strong> paralelogramo com $4$ ângulos retos.', '<strong>Losango:</strong> paralelogramo com $4$ lados iguais.', '<strong>Quadrado:</strong> retângulo e losango ao mesmo tempo.'], '.95rem')}
            </div>`, `<div>${tira}</div>`)],
        ['Teoria · relações', 'Quem está dentro de quem', g2(`<div>
              ${tbl(['Figura', 'Lados opostos paralelos', 'Lados iguais', 'Ângulos retos'], [['trapézio', '1 par', 'não', 'não'], ['paralelogramo', '2 pares', 'opostos iguais', 'não'], ['retângulo', '2 pares', 'opostos iguais', 'sim (4)'], ['losango', '2 pares', '4 iguais', 'não'], ['quadrado', '2 pares', '4 iguais', 'sim (4)']])}
            </div>`, callout('Hierarquia', 'quadrado ⊂ retângulo ⊂ paralelogramo ⊂ trapézio; quadrado ⊂ losango ⊂ paralelogramo.', 'primary'))]
      ],
      exemplos: [
        ['Qual é a figura?', 'Um quadrilátero tem os quatro lados iguais, mas seus ângulos não são retos. Qual é?', [['Lados iguais', 'É losango ou quadrado.'], ['Sem ângulo reto', 'Não é quadrado.']], 'É um <strong>losango</strong>.'],
        ['Verdadeiro ou falso', 'Todo losango é um paralelogramo. Verdadeiro ou falso? E todo paralelogramo é retângulo?', [['Losango', 'Tem dois pares de lados paralelos: é paralelogramo.'], ['Paralelogramo', 'Nem todo tem ângulos retos.']], 'A primeira é <strong>verdadeira</strong>; a segunda é <strong>falsa</strong>.']
      ],
      pratique: [
        ['Definição', 'O quadrilátero com apenas um par de lados paralelos é o:', ['paralelogramo', 'trapézio', 'retângulo', 'losango'], 1, 'Trapézio. <strong>Alternativa B.</strong>'],
        ['Inclusão', 'Qual afirmação é <strong>verdadeira</strong>?', ['todo retângulo é quadrado', 'todo quadrado é losango', 'todo trapézio é paralelogramo', 'todo losango é retângulo'], 1, 'O quadrado tem 4 lados iguais: é losango. <strong>Alternativa B.</strong>'],
        ['Lados iguais', 'Quais quadriláteros têm os $4$ lados iguais?', ['retângulo e trapézio', 'losango e quadrado', 'paralelogramo e trapézio', 'só o quadrado'], 1, 'Losango e quadrado. <strong>Alternativa B.</strong>']
      ],
      enem: ['A mesa', 'Uma mesa tem tampo com $4$ lados, dois pares de lados paralelos, lados vizinhos de tamanhos diferentes e quatro ângulos retos. O tampo tem formato de:', ['quadrado', 'losango', 'trapézio', 'retângulo', 'paralelogramo sem ângulo reto'], 3, 'Retângulo. <strong>Alternativa D.</strong>'],
      cuidados: [['Quadrado e retângulo', 'O quadrado <strong>é</strong> retângulo (caso especial).'], ['Losango não é quadrado', 'O losango só vira quadrado se tiver ângulos retos.'], ['Trapézio exige ao menos um par', 'Pode ter dois pares (então é paralelogramo) — depende da definição.'], ['Desenho enganoso', 'Compare propriedades, não a aparência da figura.']],
      quiz: [
        { q: 'O paralelogramo tem:', o: ['um par de lados paralelos', 'dois pares de lados paralelos', 'nenhum lado paralelo', 'quatro ângulos retos sempre'], a: 1 },
        { q: 'O quadrado é:', o: ['só retângulo', 'só losango', 'retângulo e losango', 'trapézio sem paralelos'], a: 2 },
        { q: 'O losango tem:', o: ['4 lados iguais', '4 ângulos retos', 'diagonais iguais', 'um par paralelo'], a: 0 },
        { q: 'Quantos lados tem um quadrilátero?', o: ['$3$', '$4$', '$5$', '$6$'], a: 1 }
      ],
      sintese: [['Família', 'Trapézio, paralelogramo, retângulo, losango, quadrado.'], ['Inclusão', 'Quadrado dentro de retângulo e losango.'], ['Critério', 'Paralelismo, lados iguais e ângulos retos.']],
      msg: 'Próxima aula: propriedades e soma dos ângulos dos quadriláteros.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'propriedades-dos-quadrilateros', titulo: 'Propriedades dos quadriláteros',
      h1: `Quadriláteros: ${co('primary')}ângulos, diagonais e áreas</span>`,
      sub: 'A soma dos ângulos internos de um quadrilátero é 360°. As diagonais de cada figura têm propriedades próprias, e as áreas seguem fórmulas simples.',
      badges: [['360°'], ['diagonais', 'growth'], ['área', 'decay']], color: 'primary',
      roteiro: ['Ângulos, diagonais e área do quadrilátero.', [['Soma 360°', 'dois triângulos', 'target'], ['Ângulos opostos', 'no paralelogramo', 'scale'], ['Diagonais', 'propriedades', 'bulb'], ['Áreas', 'paralelogramo, losango, trapézio', 'chart'], ['Problemas', 'aplicar', 'book']]],
      objetivos: ['Usar a <strong>soma de 360°</strong> dos ângulos internos.', 'Conhecer propriedades das <strong>diagonais</strong>.', 'Calcular <strong>áreas</strong> de paralelogramo, losango e trapézio.'],
      dica: 'Uma diagonal divide o quadrilátero em <strong>dois triângulos</strong>: $2 · 180° = 360°$.',
      gancho: { titulo: 'O terreno em pedaços', texto: 'Um terreno em formato de quadrilátero tem três ângulos medindo <strong>90°</strong>, <strong>100°</strong> e <strong>80°</strong>. Quanto mede o quarto?', mini: ['O quarto ângulo mede:', ['$70°$', '$90°$', '$100°$', '$110°$'], 1, 'Soma dada: $90° + 100° + 80° = 270°$; falta $360° − 270° = 90°$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · ângulos', 'Soma de 360° e paralelogramo', g2(`<div>
              ${checks(['Soma dos ângulos internos do quadrilátero: $360°$ (dois triângulos).', 'No <strong>paralelogramo</strong>: ângulos <strong>opostos iguais</strong>; ângulos vizinhos <strong>suplementares</strong> (somam $180°$).', 'No <strong>retângulo</strong> e no <strong>quadrado</strong>: quatro ângulos de $90°$.', 'No <strong>trapézio isósceles</strong>: ângulos da mesma base iguais.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Paralelogramo com um ângulo de $70°$: o vizinho mede $110°$ e o oposto também $70°$.</p>`, 'primary'))],
        ['Teoria · diagonais e área', 'O que cada figura tem', g2(`<div>
              ${checks(['<strong>Paralelogramo:</strong> diagonais se cortam no ponto médio.', '<strong>Retângulo:</strong> diagonais iguais.', '<strong>Losango:</strong> diagonais perpendiculares, e cortam os ângulos ao meio.', '<strong>Quadrado:</strong> diagonais iguais, perpendiculares, e se cortam ao meio.'], '.95rem')}
            </div>`, callout('Áreas', 'Paralelogramo: $"base" · "altura"$. Losango: ${D · d|2}$ (diagonais). Trapézio: ${("B" + "b") · "h"|2}$.', 'primary'))]
      ],
      exemplos: [
        ['Ângulo que falta', 'Três ângulos de um quadrilátero medem $75°$, $105°$ e $120°$. Quanto mede o quarto?', [['Soma', '$75° + 105° + 120° = 300°$.'], ['Falta', '$360° − 300° = 60°$.']], 'O quarto ângulo mede <strong>60°</strong>.'],
        ['Área do trapézio', 'Um trapézio tem bases de $10$ cm e $6$ cm e altura de $4$ cm. Qual é a área?', [['Somar as bases', '$10 + 6 = 16$.'], ['Multiplicar pela altura', '$16 · 4 = 64$.'], ['Dividir por 2', '$64 ÷ 2 = 32$.']], 'A área é <strong>32 cm²</strong>.']
      ],
      pratique: [
        ['Soma', 'Os ângulos de um quadrilátero medem $x$, $x$, $90°$ e $110°$. O valor de $x$ é:', ['$50°$', '$80°$', '$100°$', '$160°$'], 1, '$2x + 200° = 360°$ ⇒ $2x = 160°$ ⇒ $x = 80°$. <strong>Alternativa B.</strong>'],
        ['Paralelogramo', 'Em um paralelogramo, um ângulo mede $65°$. O ângulo vizinho mede:', ['$25°$', '$65°$', '$115°$', '$295°$'], 2, 'Suplementares: $180° − 65° = 115°$. <strong>Alternativa C.</strong>'],
        ['Área do losango', 'Um losango com diagonais $12$ cm e $8$ cm tem área de:', ['$20$ cm²', '$48$ cm²', '$96$ cm²', '$192$ cm²'], 1, '${12 · 8|2} = 48$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A bandeira', 'Uma bandeira tem formato de losango com diagonais de $1,2$ m e $0,8$ m. Qual é a área do tecido?', ['$0,48$ m²', '$0,96$ m²', '$2,0$ m²', '$1,92$ m²', '$0,24$ m²'], 0, '${1,2 · 0,8|2} = 0,48$ m². <strong>Alternativa A.</strong>'],
      cuidados: [['Somar só três ângulos', 'Para achar o quarto, subtraia a soma dos três de $360°$.'], ['Vizinhos iguais', 'No paralelogramo, vizinhos somam $180°$; os <strong>opostos</strong> é que são iguais.'], ['Esquecer o ÷ 2', 'Losango e trapézio levam metade do produto.'], ['Trocar diagonais por lados', 'A fórmula do losango usa as <strong>diagonais</strong>.']],
      quiz: [
        { q: 'A soma dos ângulos internos de um quadrilátero é:', o: ['$180°$', '$270°$', '$360°$', '$540°$'], a: 2 },
        { q: 'Diagonais iguais caracterizam o:', o: ['losango', 'retângulo', 'paralelogramo qualquer', 'trapézio qualquer'], a: 1 },
        { q: 'Em um paralelogramo, os ângulos opostos são:', o: ['suplementares', 'iguais', 'complementares', 'retos'], a: 1 },
        { q: 'Área do paralelogramo de base $9$ e altura $4$:', o: ['$13$', '$18$', '$36$', '$72$'], a: 2 }
      ],
      sintese: [['Soma', '360° nos ângulos internos.'], ['Diagonais', 'Retângulo: iguais; losango: perpendiculares.'], ['Áreas', 'Paralelogramo b·h; losango D·d÷2; trapézio (B+b)·h÷2.']],
      msg: 'Próximo módulo: propriedades gerais dos polígonos.'
    }
  ]
});
