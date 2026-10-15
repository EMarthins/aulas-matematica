// Módulo 9 · 9º ano · Recomposição · 2º trimestre — Propriedades dos triângulos (aulas 26 e 27 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

const ext = svg(220, 130, `<polygon points="40,100 130,100 90,25" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/><line x1="130" y1="100" x2="200" y2="100" stroke="var(--decay)" stroke-width="3"/><path d="M146 100 A16 16 0 0 0 138 86" fill="none" stroke="var(--decay)" stroke-width="2.5"/><text x="150" y="86" font-size="13" fill="var(--decay)">e</text><text x="48" y="94" font-size="13" fill="var(--ink)">A</text><text x="104" y="90" font-size="13" fill="var(--ink)">B</text><text x="88" y="48" font-size="13" fill="var(--ink)">C</text>`, '260px');
const cev = svg(220, 130, `<polygon points="30,105 190,105 80,20" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="3" stroke-linejoin="round"/><line x1="80" y1="20" x2="80" y2="105" stroke="var(--primary)" stroke-width="2.5" stroke-dasharray="5 4"/><line x1="80" y1="20" x2="110" y2="105" stroke="var(--decay)" stroke-width="2.5" stroke-dasharray="5 4"/><text x="84" y="64" font-size="12" fill="var(--primary)">h</text><text x="108" y="66" font-size="12" fill="var(--decay)">m</text>`, '260px');

module.exports = unidade({
  tri: 2, dir: 'propriedades-dos-triangulos', titulo: 'Propriedades dos triângulos', accent: 'growth', icon: 'triangle', key: 'r2u3',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'soma-dos-angulos-e-angulo-externo', titulo: 'Soma dos ângulos internos e ângulo externo',
      h1: `Triângulos: ${co('growth')}soma 180° e ângulo externo</span>`,
      sub: 'A soma dos ângulos internos de um triângulo é 180°. O ângulo externo é a soma dos dois internos não adjacentes a ele.',
      badges: [['180°'], ['externo', 'growth'], ['equações', 'decay']], color: 'growth',
      roteiro: ['Duas propriedades e muitas contas.', [['Soma interna', '180°, sempre', 'target'], ['Ângulo externo', 'o suplemento do interno', 'bulb'], ['Teorema', 'externo = soma dos dois opostos', 'scale'], ['Equações', 'ângulos com incógnita', 'chart'], ['Problemas', 'telhados e rampas', 'book']]],
      objetivos: ['Usar a <strong>soma de 180°</strong> para achar ângulos.', 'Calcular o <strong>ângulo externo</strong> de um triângulo.', 'Resolver <strong>equações</strong> simples com ângulos.'],
      dica: 'Ângulo externo: <strong>externo + interno vizinho = 180°</strong>, e externo = <strong>soma dos dois internos não vizinhos</strong>.',
      gancho: { titulo: 'O ângulo do telhado', texto: 'Em um telhado triangular, dois ângulos da base medem <strong>35°</strong> e <strong>50°</strong>. Quanto mede o ângulo do topo?', mini: ['O ângulo do topo mede:', ['$85°$', '$95°$', '$105°$', '$145°$'], 1, '$180° − 35° − 50° = 95°$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · ângulo externo', 'O ângulo que "sai" do triângulo', g2(`<div>
              ${checks(['<strong>Ângulo externo</strong>: formado por um lado e o prolongamento do lado vizinho.', 'Externo e interno vizinho são <strong>suplementares</strong>: $e + C = 180°$.', '<strong>Teorema do ângulo externo:</strong> $e = A + C$ (soma dos internos <strong>não</strong> adjacentes).', 'Prova rápida: $A + B + C = 180°$ e $e + B = 180°$ ⇒ $e = A + C$.'], '.95rem')}
            </div>`, `<div>${ext}</div>`)],
        ['Teoria · com equações', 'Ângulos desconhecidos', g2(`<div>
              ${checks(['Ângulos $x$, $2x$ e $3x$: $6x = 180°$ ⇒ $x = 30°$ (ângulos $30°, 60°, 90°$).', 'Ângulos $x$, $x + 10°$ e $x + 20°$: $3x + 30° = 180°$ ⇒ $x = 50°$.', 'Externo $= 130°$ e um interno oposto $= 70°$ ⇒ o outro mede $60°$.', 'A soma dos três externos (um por vértice) é sempre $360°$.'], '.95rem')}
            </div>`, callout('Truque', 'Se aparecer um ângulo "fora" do triângulo, pense em <strong>suplemento</strong> ($180°$ menos o interno) ou em <strong>soma dos dois opostos</strong>.', 'growth'))]
      ],
      exemplos: [
        ['Ângulo externo', 'Em um triângulo, dois ângulos internos medem $45°$ e $65°$. Qual é o ângulo externo do terceiro vértice?', [['Soma dos dois', 'O externo é a soma dos dois não adjacentes: $45° + 65° = 110°$.'], ['Conferir', 'Interno do terceiro: $70°$; $70° + 110° = 180°$ ✓.']], 'O ângulo externo mede <strong>110°</strong>.'],
        ['Equação', 'Os ângulos de um triângulo medem $x$, $x + 20°$ e $x + 40°$. Quanto vale cada um?', [['Somar', '$3x + 60° = 180°$.'], ['Resolver', '$3x = 120°$ ⇒ $x = 40°$.'], ['Ângulos', '$40°$, $60°$ e $80°$.']], 'Os ângulos são <strong>40°, 60° e 80°</strong>.']
      ],
      pratique: [
        ['Soma', 'Dois ângulos de um triângulo medem $62°$ e $48°$. O terceiro mede:', ['$60°$', '$70°$', '$80°$', '$110°$'], 1, '$180° − 110° = 70°$. <strong>Alternativa B.</strong>'],
        ['Externo', 'Um ângulo externo mede $120°$. O interno vizinho mede:', ['$30°$', '$60°$', '$120°$', '$240°$'], 1, '$180° − 120° = 60°$. <strong>Alternativa B.</strong>'],
        ['Equação', 'Os ângulos $x$, $2x$ e $3x$ de um triângulo. O maior mede:', ['$30°$', '$60°$', '$90°$', '$120°$'], 2, '$6x = 180°$ ⇒ $x = 30°$; maior $= 90°$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A placa inclinada', 'Uma placa triangular tem dois ângulos internos de $50°$ e $60°$. O ângulo externo no vértice do terceiro ângulo mede:', ['$70°$', '$90°$', '$110°$', '$130°$', '$250°$'], 2, 'Externo $= 50° + 60° = 110°$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar três internos errado', 'Confira se a soma dá $180°$.'], ['Externo com o interno oposto', 'O externo é a soma dos internos <strong>não vizinhos</strong>.'], ['Usar $360°$', '$360°$ é a soma dos três ângulos externos, não dos internos.'], ['Esquecer o suplemento', 'Externo e interno vizinho somam $180°$.']],
      quiz: [
        { q: 'A soma dos ângulos internos de um triângulo é:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 1 },
        { q: 'Internos de $30°$ e $80°$: o externo do terceiro vértice mede:', o: ['$70°$', '$110°$', '$150°$', '$100°$'], a: 1 },
        { q: 'A soma dos três ângulos externos (um por vértice) é:', o: ['$180°$', '$270°$', '$360°$', '$540°$'], a: 2 },
        { q: 'Triângulo com ângulos $x$, $x$ e $2x$: $x$ vale:', o: ['$30°$', '$45°$', '$60°$', '$90°$'], a: 1 }
      ],
      sintese: [['Soma', 'Internos somam 180°.'], ['Externo', 'Suplementar do interno; soma dos dois não vizinhos.'], ['Equação', 'Monte a soma = 180° e resolva.']],
      msg: 'Próxima aula: relações entre lados e ângulos e segmentos notáveis.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'lados-angulos-e-segmentos-notaveis', titulo: 'Relações entre lados e ângulos e segmentos notáveis',
      h1: `Triângulos: ${co('growth')}lados, ângulos e segmentos notáveis</span>`,
      sub: 'Ao maior lado opõe-se o maior ângulo. Altura, mediana e bissetriz são segmentos que revelam muito sobre o triângulo.',
      badges: [['lado × ângulo'], ['altura', 'growth'], ['mediana', 'decay']], color: 'growth',
      roteiro: ['Mais propriedades do triângulo.', [['Maior lado, maior ângulo', 'oposição', 'scale'], ['Altura', 'perpendicular à base', 'target'], ['Mediana', 'ponto médio', 'bulb'], ['Bissetriz', 'divide o ângulo', 'chart'], ['Aplicar', 'problemas', 'book']]],
      objetivos: ['Relacionar <strong>lados e ângulos opostos</strong>.', 'Identificar <strong>altura, mediana e bissetriz</strong>.', 'Calcular a <strong>área</strong> usando a altura.'],
      dica: 'Altura é <strong>perpendicular</strong> à base; mediana vai ao <strong>ponto médio</strong>; bissetriz <strong>divide o ângulo ao meio</strong>.',
      gancho: { titulo: 'Quem é o maior ângulo?', texto: 'Um triângulo tem lados de <strong>5 cm, 7 cm e 10 cm</strong>. Sem medir, qual ângulo é o <strong>maior</strong>?', mini: ['O maior ângulo está oposto ao lado de:', ['5 cm', '7 cm', '10 cm', 'todos iguais'], 2, 'Ao maior lado opõe-se o maior ângulo. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · lado e ângulo', 'Maior lado, maior ângulo', g2(`<div>
              ${checks(['Em um triângulo, ao <strong>maior lado</strong> opõe-se o <strong>maior ângulo</strong>; ao menor, o menor.', 'Lados iguais ⇒ ângulos opostos iguais (isósceles).', 'Ângulos $50°, 60°, 70°$: o maior lado é o oposto ao de $70°$.', 'Em triângulo obtusângulo, o maior lado é o oposto ao ângulo obtuso.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              ${tbl(['Lado', 'Ângulo oposto'], [['$a = 6$', '$A = 80°$'], ['$b = 4$', '$B = 45°$'], ['$c = 5$', '$C = 55°$']])}
              <p class="hint" style="margin-top:6px;">Ordem dos lados e dos ângulos coincide.</p>`, 'primary'))],
        ['Teoria · segmentos notáveis', 'Altura, mediana e bissetriz', g2(`<div>
              ${checks(['<strong>Altura:</strong> do vértice, perpendicular ao lado oposto (ou ao seu prolongamento).', '<strong>Mediana:</strong> do vértice ao <strong>ponto médio</strong> do lado oposto.', '<strong>Bissetriz:</strong> divide o ângulo do vértice em dois ângulos iguais.', 'Área do triângulo $= {"base" · "altura"|2}$.'], '.95rem')}
            </div>`, `<div>${cev}</div>`)]
      ],
      exemplos: [
        ['Ordem dos lados', 'Em um triângulo, $A = 70°$, $B = 40°$ e $C = 70°$. Qual lado é o menor? Que tipo de triângulo é?', [['Menor ângulo', '$B = 40°$.'], ['Lado oposto', 'O menor lado é $b$ (oposto a $B$).'], ['Igualdade', '$A = C$ ⇒ lados opostos iguais: $a = c$.']], 'O menor lado é <strong>b</strong>; o triângulo é <strong>isósceles</strong>.'],
        ['Área pela altura', 'Um triângulo tem base $12$ cm e altura $7$ cm. Qual é a área?', [['Fórmula', '${"base" · "altura"|2}$.'], ['Substituir', '${12 · 7|2} = 42$.']], 'A área é <strong>42 cm²</strong>.']
      ],
      pratique: [
        ['Maior ângulo', 'Lados de $4$, $6$ e $9$ cm. O maior ângulo está oposto ao lado de:', ['$4$ cm', '$6$ cm', '$9$ cm', 'é impossível saber'], 2, 'Maior lado, maior ângulo. <strong>Alternativa C.</strong>'],
        ['Mediana', 'A mediana de um triângulo liga o vértice:', ['ao ponto médio do lado oposto', 'perpendicularmente ao lado oposto', 'ao meio do ângulo', 'ao vértice vizinho'], 0, 'Mediana: ao ponto médio. <strong>Alternativa A.</strong>'],
        ['Área', 'A área de um triângulo de base $10$ cm e altura $6$ cm é:', ['$16$ cm²', '$30$ cm²', '$60$ cm²', '$120$ cm²'], 1, '${10 · 6|2} = 30$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O terreno', 'Um terreno triangular tem base de $20$ m e altura de $9$ m. Sua área é:', ['$29$ m²', '$90$ m²', '$180$ m²', '$360$ m²', '$45$ m²'], 1, '${20 · 9|2} = 90$ m². <strong>Alternativa B.</strong>'],
      cuidados: [['Altura é lado?', 'A altura nem sempre é um lado: é perpendicular à base.'], ['Mediana ≠ altura', 'Mediana vai ao ponto médio; altura é perpendicular. Só coincidem em casos especiais.'], ['Esquecer o ÷ 2', 'A área do triângulo é metade de base × altura.'], ['Ordem trocada', 'O maior ângulo fica oposto ao <strong>maior</strong> lado, não ao menor.']],
      quiz: [
        { q: 'A bissetriz de um ângulo:', o: ['divide o ângulo ao meio', 'é perpendicular ao lado', 'liga pontos médios', 'mede 90°'], a: 0 },
        { q: 'Área de triângulo com base $8$ e altura $5$:', o: ['$13$', '$20$', '$40$', '$80$'], a: 1 },
        { q: 'Ao menor lado opõe-se:', o: ['o maior ângulo', 'o menor ângulo', 'um ângulo reto', 'ângulo raso'], a: 1 },
        { q: 'A altura é sempre:', o: ['paralela à base', 'perpendicular à base (ou prolongamento)', 'igual à mediana', 'igual ao lado'], a: 1 }
      ],
      sintese: [['Lado × ângulo', 'Maior lado, maior ângulo oposto.'], ['Segmentos', 'Altura ⊥, mediana ao ponto médio, bissetriz divide o ângulo.'], ['Área', 'Base × altura ÷ 2.']],
      msg: 'Próximo módulo: quadriláteros.'
    }
  ]
});
