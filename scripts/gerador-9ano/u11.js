// Módulo 11 · 9º ano · Recomposição · 2º trimestre — Propriedades dos polígonos (aulas 30 a 34 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const ws = Wd.somaAng('rs1');

// pentágono com diagonais de um vértice (triangulação)
const pent = (() => {
  const cx = 110, cy = 80, r = 62, p = [];
  for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + 2 * Math.PI * i / 5; p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  const pts = p.map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
  return svg(220, 160, `<polygon points="${pts}" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/>` +
    [2, 3].map(j => `<line x1="${p[0][0].toFixed(1)}" y1="${p[0][1].toFixed(1)}" x2="${p[j][0].toFixed(1)}" y2="${p[j][1].toFixed(1)}" stroke="var(--decay)" stroke-width="2.4" stroke-dasharray="5 4"/>`).join(''), '240px');
})();

module.exports = unidade({
  tri: 2, dir: 'propriedades-dos-poligonos', titulo: 'Propriedades dos polígonos', accent: 'primary', icon: 'polygon', key: 'r2u5',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'soma-dos-angulos-internos', titulo: 'Soma dos ângulos internos de um polígono',
      h1: `Polígonos: ${co('primary')}soma dos ângulos internos</span>`,
      sub: 'Dividindo um polígono convexo em triângulos a partir de um vértice, descobrimos que a soma dos ângulos internos vale (n − 2) · 180°.',
      badges: [['triangulação'], ['(n − 2)·180°', 'growth'], ['regular', 'decay']], color: 'primary',
      roteiro: ['Do triângulo ao polígono de n lados.', [['Triangulação', 'diagonais de um vértice', 'target'], ['Fórmula', 'S = (n − 2) · 180°', 'scale'], ['Tabela', 'de 3 a 10 lados', 'chart'], ['Polígono regular', 'ângulo interno', 'bulb'], ['Problemas', 'achar n ou o ângulo', 'book']]],
      objetivos: ['Deduzir e aplicar $S = (n − 2) · 180°$.', 'Calcular o <strong>ângulo interno</strong> de um polígono regular.', 'Descobrir o <strong>número de lados</strong> a partir da soma.'],
      dica: 'Cada diagonal a partir de um vértice cria um triângulo: um polígono de $n$ lados tem <strong>$n − 2$ triângulos</strong>.',
      gancho: { titulo: 'A cerca do pentágono', texto: 'Um terreno tem formato de <strong>pentágono</strong>. Dividindo-o em triângulos a partir de um vértice, quantos triângulos surgem?', mini: ['Um pentágono se divide em:', ['2 triângulos', '3 triângulos', '4 triângulos', '5 triângulos'], 1, 'Pentágono: $5 − 2 = 3$ triângulos. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · triangulação', 'n − 2 triângulos', g2(`<div>
              ${checks(['Escolha um vértice e trace as diagonais a partir dele.', 'Um polígono de $n$ lados fica dividido em <strong>$n − 2$ triângulos</strong>.', 'Cada triângulo tem soma $180°$ ⇒ <strong>$S = (n − 2) · 180°$</strong>.', 'Pentágono: $3 · 180° = 540°$. Hexágono: $4 · 180° = 720°$.'], '.95rem')}
            </div>`, `<div>${pent}</div>`)],
        ['Teoria · regular', 'Cada ângulo interno', g2(`<div>
              ${checks(['No polígono <strong>regular</strong> todos os ângulos são iguais: $a_i = {(n − 2) · 180°|n}$.', 'Triângulo equilátero: $60°$; quadrado: $90°$.', 'Pentágono regular: ${540°|5} = 108°$.', 'Hexágono regular: ${720°|6} = 120°$; octógono regular: ${1080°|8} = 135°$.'], '.95rem')}
            </div>`, card(`<strong>Tabela</strong>
              ${tbl(['Lados', 'Soma', 'Ângulo (regular)'], [['$3$', '$180°$', '$60°$'], ['$4$', '$360°$', '$90°$'], ['$5$', '$540°$', '$108°$'], ['$6$', '$720°$', '$120°$'], ['$8$', '$1080°$', '$135°$']])}`, 'primary'))]
      ],
      exemplos: [
        ['Soma e ângulo', 'Qual a soma dos ângulos internos de um decágono? E o ângulo de um decágono regular?', [['Lados', '$n = 10$.'], ['Soma', '$(10 − 2) · 180° = 1440°$.'], ['Cada ângulo', '${1440°|10} = 144°$.']], 'Soma <strong>1 440°</strong>; ângulo <strong>144°</strong>.'],
        ['Descobrindo n', 'A soma dos ângulos internos de um polígono é $1 080°$. Quantos lados ele tem?', [['Equação', '$(n − 2) · 180° = 1080°$.'], ['Dividir', '$n − 2 = 6$.'], ['Resolver', '$n = 8$.']], 'É um <strong>octógono</strong> (8 lados).']
      ],
      widget: { titulo: 'Soma dos ângulos de um polígono regular', html: ws.html, js: ws.js },
      pratique: [
        ['Soma', 'A soma dos ângulos internos de um heptágono é:', ['$720°$', '$900°$', '$1 080°$', '$1 260°$'], 1, '$(7 − 2) · 180° = 900°$. <strong>Alternativa B.</strong>'],
        ['Ângulo regular', 'Cada ângulo interno de um pentágono regular mede:', ['$72°$', '$100°$', '$108°$', '$120°$'], 2, '${540°|5} = 108°$. <strong>Alternativa C.</strong>'],
        ['Qual n?', 'A soma dos ângulos internos de um polígono é $1 800°$. Ele tem:', ['$10$ lados', '$11$ lados', '$12$ lados', '$13$ lados'], 2, '$n − 2 = 10$ ⇒ $n = 12$; confira: $(12 − 2) · 180° = 1800°$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O piso hexagonal', 'Um piso é formado por hexágonos regulares. Cada ângulo interno de um hexágono regular mede:', ['$60°$', '$90°$', '$108°$', '$120°$', '$150°$'], 3, '${720°|6} = 120°$. <strong>Alternativa D.</strong>'],
      cuidados: [['n em vez de n − 2', 'A soma usa <strong>$n − 2$</strong> triângulos, não $n$.'], ['Confundir soma com ângulo', 'O ângulo só se obtém dividindo por $n$ no polígono <strong>regular</strong>.'], ['Aplicar ao irregular', 'A soma vale para qualquer polígono convexo; o ângulo único, só ao regular.'], ['Esquecer o grau', 'Escreva sempre a unidade ($°$).']],
      quiz: [
        { q: 'A soma dos ângulos internos de um hexágono é:', o: ['$540°$', '$720°$', '$900°$', '$1 080°$'], a: 1 },
        { q: 'Um polígono de $n$ lados se divide, a partir de um vértice, em quantos triângulos?', o: ['$n$', '$n − 1$', '$n − 2$', '$n − 3$'], a: 2 },
        { q: 'O ângulo interno do octógono regular é:', o: ['$120°$', '$135°$', '$140°$', '$150°$'], a: 1 },
        { q: 'Soma $= 360°$: o polígono é um:', o: ['triângulo', 'quadrilátero', 'pentágono', 'hexágono'], a: 1 }
      ],
      sintese: [['Fórmula', 'S = (n − 2) · 180°.'], ['Regular', 'Ângulo = S ÷ n.'], ['Descobrir n', 'S ÷ 180° + 2.']],
      msg: 'Próxima aula: ângulos externos dos polígonos.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'angulos-externos-dos-poligonos', titulo: 'Ângulos externos dos polígonos',
      h1: `Polígonos: ${co('primary')}ângulos externos</span>`,
      sub: 'A soma dos ângulos externos de qualquer polígono convexo é 360°. Num polígono regular, cada ângulo externo mede 360° dividido por n.',
      badges: [['externo'], ['360°', 'growth'], ['regular', 'decay']], color: 'primary',
      roteiro: ['Dar uma volta completa em torno do polígono.', [['Externo', 'suplementar do interno', 'bulb'], ['Soma 360°', 'uma volta', 'target'], ['Regular', 'e = 360° ÷ n', 'scale'], ['Interno e externo', 'somam 180°', 'chart'], ['Problemas', 'achar n', 'book']]],
      objetivos: ['Calcular o <strong>ângulo externo</strong> de um polígono.', 'Usar a <strong>soma de 360°</strong> dos externos.', 'Relacionar <strong>interno, externo e número de lados</strong>.'],
      dica: 'Ao caminhar em volta de um polígono, você dá <strong>uma volta completa</strong> ($360°$) somando todas as curvas.',
      gancho: { titulo: 'O robô que anda', texto: 'Um robô caminha pelo contorno de um polígono regular, virando sempre o mesmo ângulo em cada vértice, até voltar ao início de frente para o mesmo lado. Se ele vira <strong>45°</strong> a cada vértice, quantos lados tem o polígono?', mini: ['O número de lados é:', ['$6$', '$8$', '$9$', '$10$'], 1, 'Soma das curvas $= 360°$: $360° ÷ 45° = 8$ lados. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · ângulos externos', 'Uma volta completa', g2(`<div>
              ${checks(['<strong>Ângulo externo</strong> e <strong>interno</strong> do mesmo vértice são suplementares: $i + e = 180°$.', 'A soma dos externos (um em cada vértice) é <strong>$360°$</strong>, qualquer que seja $n$.', 'No <strong>regular</strong>: $e = {360°|n}$ e $i = 180° − e$.', 'Hexágono regular: $e = 60°$ e $i = 120°$.'], '.95rem')}
            </div>`, card(`<strong>Interno × externo (regular)</strong>
              ${tbl(['Lados', 'Externo', 'Interno'], [['$3$', '$120°$', '$60°$'], ['$4$', '$90°$', '$90°$'], ['$5$', '$72°$', '$108°$'], ['$6$', '$60°$', '$120°$'], ['$9$', '$40°$', '$140°$'], ['$12$', '$30°$', '$150°$']])}`, 'primary'))],
        ['Teoria · achar n', 'Pelo ângulo externo', g2(`<div>
              ${checks(['Se $e = 24°$, então $n = 360° ÷ 24° = 15$.', 'Se $i = 150°$, então $e = 30°$ e $n = 12$.', 'Se $i = 135°$: $e = 45°$ e $n = 8$ (octógono).', 'Se $n$ crescer, o externo <strong>diminui</strong> e o polígono se parece com um círculo.'], '.95rem')}
            </div>`, callout('Atalho', 'Para o ângulo interno do regular: $i = 180° − {360°|n}$. Mais rápido que a soma.', 'primary'))]
      ],
      exemplos: [
        ['Número de lados', 'Cada ângulo interno de um polígono regular mede $162°$. Quantos lados tem?', [['Externo', '$e = 180° − 162° = 18°$.'], ['Lados', '$n = 360° ÷ 18° = 20$.']], 'O polígono tem <strong>20 lados</strong>.'],
        ['Ângulo externo', 'Calcule o ângulo externo e o interno de um polígono regular de $15$ lados.', [['Externo', '$360° ÷ 15 = 24°$.'], ['Interno', '$180° − 24° = 156°$.']], 'Externo <strong>24°</strong>; interno <strong>156°</strong>.']
      ],
      pratique: [
        ['Externo', 'O ângulo externo de um polígono regular de $9$ lados mede:', ['$30°$', '$36°$', '$40°$', '$45°$'], 2, '$360° ÷ 9 = 40°$. <strong>Alternativa C.</strong>'],
        ['Interno', 'Se o ângulo externo é $20°$, o interno mede:', ['$20°$', '$140°$', '$160°$', '$340°$'], 2, '$180° − 20° = 160°$. <strong>Alternativa C.</strong>'],
        ['Número de lados', 'Um polígono regular tem ângulo externo de $36°$. Seu número de lados é:', ['$8$', '$9$', '$10$', '$12$'], 2, '$360° ÷ 36° = 10$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O parafuso', 'A cabeça de um parafuso tem formato de polígono regular. Cada ângulo externo mede $60°$. Quantos lados tem a cabeça?', ['$4$', '$5$', '$6$', '$8$', '$12$'], 2, '$360° ÷ 60° = 6$: hexágono. <strong>Alternativa C.</strong>'],
      cuidados: [['Soma dos externos', 'Sempre $360°$, <strong>não</strong> $(n − 2) · 180°$.'], ['Interno + externo', 'Somam $180°$ no mesmo vértice.'], ['Dividir pelo interno', 'Para achar $n$, divida $360°$ pelo <strong>externo</strong>.'], ['Aplicar a não regular', 'O externo único vale só para o regular.']],
      quiz: [
        { q: 'A soma dos ângulos externos de qualquer polígono convexo é:', o: ['$180°$', '$360°$', '$540°$', '$720°$'], a: 1 },
        { q: 'Externo de $72°$: o polígono regular tem:', o: ['$4$ lados', '$5$ lados', '$6$ lados', '$8$ lados'], a: 1 },
        { q: 'O externo do octógono regular é:', o: ['$36°$', '$40°$', '$45°$', '$60°$'], a: 2 },
        { q: 'Interno de $140°$: o externo é:', o: ['$40°$', '$140°$', '$220°$', '$20°$'], a: 0 }
      ],
      sintese: [['Soma', 'Externos somam 360°.'], ['Regular', 'e = 360° ÷ n; i = 180° − e.'], ['Achar n', 'n = 360° ÷ e.']],
      msg: 'Próxima aula: diagonais de um polígono.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'diagonais-de-um-poligono', titulo: 'Diagonais de um polígono',
      h1: `Polígonos: ${co('primary')}quantas diagonais?</span>`,
      sub: 'Diagonal é um segmento que liga dois vértices não consecutivos. O número de diagonais de um polígono de n lados é n(n − 3) dividido por 2.',
      badges: [['diagonal'], ['n(n−3)/2', 'growth'], ['contagem', 'decay']], color: 'primary',
      roteiro: ['Contar diagonais com lógica.', [['O que é diagonal', 'vértices não vizinhos', 'bulb'], ['De um vértice', 'n − 3', 'target'], ['Total', 'n(n − 3) ÷ 2', 'scale'], ['Tabela', 'de 4 a 10 lados', 'chart'], ['Achar n', 'a partir do total', 'book']]],
      objetivos: ['Definir <strong>diagonal</strong>.', 'Calcular o <strong>número de diagonais</strong> de um polígono.', 'Descobrir <strong>n</strong> conhecendo o número de diagonais.'],
      dica: 'De cada vértice partem <strong>$n − 3$</strong> diagonais (não vale ele mesmo nem os dois vizinhos).',
      gancho: { titulo: 'O aperto de mãos', texto: 'Em uma reunião, <strong>6 pessoas</strong> sentam em volta de uma mesa hexagonal. Cada uma conversa só com quem <strong>não é vizinho</strong> direto. Quantas conversas diferentes acontecem?', mini: ['O número de conversas é:', ['$6$', '$9$', '$12$', '$15$'], 1, 'Cada pessoa fala com $6 − 3 = 3$; $6 · 3 ÷ 2 = 9$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · contagem', 'De um vértice e no total', g2(`<div>
              ${checks(['<strong>Diagonal:</strong> liga dois vértices <strong>não consecutivos</strong>.', 'De cada vértice saem $n − 3$ diagonais.', 'Como cada diagonal tem dois extremos, contamos $n · (n − 3)$ e dividimos por $2$: <strong>$d = {n(n − 3)|2}$</strong>.', 'Pentágono: ${5 · 2|2} = 5$ diagonais. Hexágono: ${6 · 3|2} = 9$.'], '.95rem')}
            </div>`, card(`<strong>Tabela</strong>
              ${tbl(['Lados', 'Diagonais'], [['$4$', '$2$'], ['$5$', '$5$'], ['$6$', '$9$'], ['$7$', '$14$'], ['$8$', '$20$'], ['$10$', '$35$']])}`, 'primary'))],
        ['Teoria · achar n', 'Equação do 2º grau simples', g2(`<div>
              ${checks(['Se $d = 20$: $n(n − 3) = 40$. Teste: $n = 8$ ⇒ $8 · 5 = 40$ ✓.', 'Se $d = 54$: $n(n − 3) = 108$; $n = 12$ ⇒ $12 · 9 = 108$ ✓.', 'Teste valores de $n$ até o produto $n(n − 3)$ bater com o dobro das diagonais.', 'O triângulo ($n = 3$) tem $0$ diagonais.'], '.95rem')}
            </div>`, callout('Dica', 'Dobre o número de diagonais e procure dois números que diferem em $3$ e multiplicam esse valor.', 'primary'))]
      ],
      exemplos: [
        ['Total de diagonais', 'Quantas diagonais tem um dodecágono?', [['n', '$12$.'], ['Fórmula', '${12 · (12 − 3)|2} = {12 · 9|2}$.'], ['Resolver', '$= 54$.']], 'O dodecágono tem <strong>54 diagonais</strong>.'],
        ['Achando n', 'Um polígono tem $27$ diagonais. Quantos lados tem?', [['Dobro', '$n(n − 3) = 54$.'], ['Testar', '$n = 9$: $9 · 6 = 54$ ✓.']], 'O polígono tem <strong>9 lados</strong> (eneágono).']
      ],
      pratique: [
        ['Diagonais', 'Um hexágono tem quantas diagonais?', ['$6$', '$9$', '$12$', '$18$'], 1, '${6 · 3|2} = 9$. <strong>Alternativa B.</strong>'],
        ['De um vértice', 'De um vértice de um decágono saem quantas diagonais?', ['$7$', '$8$', '$9$', '$10$'], 0, '$10 − 3 = 7$. <strong>Alternativa A.</strong>'],
        ['Achar n', 'Um polígono tem $14$ diagonais. O número de lados é:', ['$6$', '$7$', '$8$', '$9$'], 1, '$n(n − 3) = 28$: $n = 7$ ⇒ $7 · 4 = 28$ ✓. <strong>Alternativa B.</strong>']
      ],
      enem: ['As diagonais da praça', 'Uma praça tem formato de polígono convexo de $8$ lados. Quantas diagonais (segmentos entre vértices não vizinhos) ele possui?', ['$8$', '$16$', '$20$', '$28$', '$40$'], 2, '${8 · 5|2} = 20$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer de dividir por 2', 'Cada diagonal é contada duas vezes.'], ['n − 3, não n − 1', 'O vértice não liga a si mesmo nem aos dois vizinhos: lados não são diagonais.'], ['Contar lados como diagonais', 'Lados ligam vértices consecutivos; diagonais, não.'], ['Resposta fracionária', 'O número de diagonais é sempre inteiro; confira a conta.']],
      quiz: [
        { q: 'De cada vértice de um polígono de $n$ lados saem:', o: ['$n$ diagonais', '$n − 1$', '$n − 2$', '$n − 3$'], a: 3 },
        { q: 'O pentágono tem quantas diagonais?', o: ['$3$', '$5$', '$10$', '$15$'], a: 1 },
        { q: 'O triângulo tem quantas diagonais?', o: ['$0$', '$1$', '$2$', '$3$'], a: 0 },
        { q: 'Octógono: número de diagonais:', o: ['$16$', '$20$', '$24$', '$40$'], a: 1 }
      ],
      sintese: [['Fórmula', 'd = n(n − 3) ÷ 2.'], ['De um vértice', 'n − 3 diagonais.'], ['Achar n', 'Teste valores com n(n − 3) = 2d.']],
      msg: 'Próximas aulas: triângulos em foco — decomposição de figuras e problemas.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'triangulos-em-foco-decomposicao', titulo: 'Triângulos em foco I: decomposição de figuras',
      h1: `Triângulos em foco: ${co('primary')}decompor para calcular</span>`,
      sub: 'Qualquer polígono pode ser dividido em triângulos. Essa ideia calcula áreas de figuras irregulares e explica as fórmulas já vistas.',
      badges: [['decompor'], ['triângulos', 'growth'], ['área', 'decay']], color: 'primary',
      roteiro: ['Quebrar figuras difíceis em pedaços simples.', [['Decompor', 'em triângulos e retângulos', 'bulb'], ['Área do triângulo', 'b · h ÷ 2', 'target'], ['Soma de áreas', 'juntar partes', 'chart'], ['Subtração', 'tirar o que sobra', 'scale'], ['Problemas', 'terrenos e figuras', 'book']]],
      objetivos: ['<strong>Decompor</strong> figuras planas em triângulos e retângulos.', 'Calcular áreas somando ou subtraindo partes.', 'Explicar a fórmula da área do <strong>trapézio</strong> e do <strong>paralelogramo</strong> via triângulos.'],
      dica: 'Figura difícil? <strong>Quebre</strong> em figuras que você sabe calcular e some as áreas (ou subtraia o que sobra).',
      gancho: { titulo: 'O terreno em L', texto: 'Um terreno tem formato de L: um retângulo de <strong>10 m × 4 m</strong> junto de outro retângulo de <strong>5 m × 3 m</strong>. Qual é a área total?', mini: ['A área do terreno é:', ['$40$ m²', '$55$ m²', '$60$ m²', '$70$ m²'], 1, '$10 · 4 + 5 · 3 = 40 + 15 = 55$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · decompor', 'Somar partes', g2(`<div>
              ${checks(['Divida a figura em <strong>retângulos, triângulos e trapézios</strong>.', 'Calcule a área de cada parte e <strong>some</strong>.', 'O paralelogramo é dois triângulos iguais: $A = 2 · {b · h|2} = b · h$.', 'O trapézio é dois triângulos: $A = {B · h|2} + {b · h|2} = {(B + b) · h|2}$.'], '.95rem')}
            </div>`, card(`<strong>Áreas básicas</strong>
              ${tbl(['Figura', 'Área'], [['retângulo', '$b · h$'], ['triângulo', '${b · h|2}$'], ['paralelogramo', '$b · h$'], ['trapézio', '${(B + b) · h|2}$']])}`, 'primary'))],
        ['Teoria · subtrair', 'Tirar o que sobra', g2(`<div>
              ${checks(['Figura com "buraco": área do todo <strong>menos</strong> a área do buraco.', 'Quadrado de lado $10$ com um triângulo cortado em um canto (catetos $4$ e $3$): $100 − {4 · 3|2} = 94$.', 'Moldura: retângulo grande menos retângulo interno.', 'Escolha o caminho com <strong>menos contas</strong>.'], '.95rem')}
            </div>`, callout('Verificação', 'Estime a área: ela deve ser menor que a do retângulo que envolve a figura.', 'primary'))]
      ],
      exemplos: [
        ['Pentágono por partes', 'Um pentágono é formado por um retângulo de $8 × 5$ e um triângulo de base $8$ e altura $3$ em cima. Qual é a área?', [['Retângulo', '$8 · 5 = 40$.'], ['Triângulo', '${8 · 3|2} = 12$.'], ['Total', '$40 + 12 = 52$.']], 'A área é <strong>52 unidades²</strong>.'],
        ['Moldura', 'Um quadro de $60$ cm × $40$ cm tem foto de $50$ cm × $30$ cm. Qual é a área da moldura?', [['Quadro', '$60 · 40 = 2400$.'], ['Foto', '$50 · 30 = 1500$.'], ['Diferença', '$2400 − 1500 = 900$.']], 'A moldura tem <strong>900 cm²</strong>.']
      ],
      pratique: [
        ['Soma de partes', 'Uma figura é formada por um quadrado de lado $6$ e um triângulo de base $6$ e altura $4$ encaixado. A área total é:', ['$36$', '$42$', '$48$', '$60$'], 2, '$36 + {6 · 4|2} = 36 + 12 = 48$. <strong>Alternativa C.</strong>'],
        ['Subtração', 'Um retângulo de $10 × 6$ tem um quadrado de lado $2$ retirado. A área restante é:', ['$54$', '$56$', '$60$', '$64$'], 1, '$60 − 4 = 56$. <strong>Alternativa B.</strong>'],
        ['Trapézio', 'Bases $12$ e $8$, altura $5$. A área é:', ['$40$', '$50$', '$60$', '$100$'], 1, '${(12 + 8) · 5|2} = 50$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O jardim', 'Um jardim tem a forma de um retângulo de $12$ m × $8$ m, com um canteiro triangular de base $6$ m e altura $4$ m retirado de um dos cantos para uma calçada. A área restante de jardim é:', ['$72$ m²', '$84$ m²', '$90$ m²', '$96$ m²', '$108$ m²'], 1, '$12 · 8 − {6 · 4|2} = 96 − 12 = 84$. <strong>Alternativa B</strong>.'],
      cuidados: [['Somar áreas que se sobrepõem', 'Conte cada região <strong>uma única vez</strong>.'], ['Altura errada', 'Use a altura <strong>perpendicular</strong> à base.'], ['Esquecer o ÷ 2', 'Triângulo e trapézio levam o ÷ 2.'], ['Unidades misturadas', 'Converta tudo para a mesma unidade antes de calcular.']],
      quiz: [
        { q: 'A área de um triângulo de base $6$ e altura $5$ é:', o: ['$11$', '$15$', '$30$', '$60$'], a: 1 },
        { q: 'O paralelogramo é igual a dois:', o: ['trapézios', 'triângulos iguais', 'quadrados', 'círculos'], a: 1 },
        { q: 'Retângulo $9 × 4$ menos quadrado de lado $2$:', o: ['$32$', '$34$', '$36$', '$40$'], a: 0 },
        { q: 'Para figuras irregulares, é útil:', o: ['medir só um lado', 'decompor em figuras conhecidas', 'adivinhar', 'usar só o perímetro'], a: 1 }
      ],
      sintese: [['Decompor', 'Quebre em retângulos, triângulos e trapézios.'], ['Somar ou subtrair', 'Soma de partes ou todo menos buraco.'], ['Conferir', 'Estime pela caixa que envolve a figura.']],
      msg: 'Próxima aula: triângulos em foco II — problemas com os polígonos.'
    },
    // ---------------------------------------------------------------- aula 5
    {
      slug: 'triangulos-em-foco-problemas', titulo: 'Triângulos em foco II: problemas com polígonos',
      h1: `Triângulos em foco: ${co('primary')}problemas e mosaicos</span>`,
      sub: 'Reunimos tudo: ângulos, diagonais e áreas. Também investigamos quais polígonos regulares preenchem o plano sem deixar espaços (ladrilhamento).',
      badges: [['ângulos'], ['mosaicos', 'growth'], ['revisão', 'decay']], color: 'primary',
      roteiro: ['Aplicar tudo em situações reais.', [['Revisar', 'fórmulas do módulo', 'book'], ['Ladrilhar', 'quais polígonos preenchem o plano', 'target'], ['Pisos', 'ângulos em torno do ponto', 'chart'], ['Resolver', 'problemas combinados', 'scale'], ['Conferir', 'estimar e testar', 'bulb']]],
      objetivos: ['<strong>Combinar</strong> ângulos, diagonais e áreas em um problema.', 'Explicar por que <strong>triângulo, quadrado e hexágono</strong> regulares ladrilham o plano.', '<strong>Verificar</strong> resultados por estimativa.'],
      dica: 'Para ladrilhar, os ângulos em torno de cada vértice devem <strong>somar $360°$</strong>.',
      gancho: { titulo: 'Piso sem frestas', texto: 'Um pedreiro quer ladrilhar um piso com <strong>pentágonos regulares</strong> iguais, sem frestas. Cada ângulo interno do pentágono regular mede <strong>108°</strong>. Isso é possível?', mini: ['Em torno de um vértice, $108°$ cabem:', ['exatamente 3 vezes', '3 vezes e sobra uma fresta', 'exatamente 4 vezes', '2 vezes'], 1, '$3 · 108° = 324°$ (sobra $36°$) e $4 · 108° = 432°$ (passa). Não fecha $360°$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · ladrilhamento', 'Ângulos em torno de um ponto', g2(`<div>
              ${checks(['Em torno de um ponto, a soma dos ângulos é $360°$.', 'Triângulo equilátero: $6 · 60° = 360°$ ✓.', 'Quadrado: $4 · 90° = 360°$ ✓. Hexágono regular: $3 · 120° = 360°$ ✓.', 'Pentágono regular ($108°$) e octógono regular ($135°$) <strong>não</strong> ladrilham sozinhos.'], '.95rem')}
            </div>`, card(`<strong>Quem fecha 360°?</strong>
              ${tbl(['Polígono regular', 'Ângulo', 'Quantos em volta'], [['triângulo', '$60°$', '$6$'], ['quadrado', '$90°$', '$4$'], ['pentágono', '$108°$', 'não fecha'], ['hexágono', '$120°$', '$3$'], ['octógono', '$135°$', 'não fecha']])}`, 'primary'))],
        ['Teoria · revisão do módulo', 'Fórmulas essenciais', g2(`<div>
              ${checks(['Soma interna: $(n − 2) · 180°$.', 'Soma externa: $360°$; externo regular $= 360° ÷ n$.', 'Diagonais: ${n(n − 3)|2}$.', 'Áreas: triângulo ${b · h|2}$, paralelogramo $b · h$, trapézio ${(B + b) · h|2}$.'], '.95rem')}
            </div>`, callout('Mistura de conceitos', 'Em problemas complexos, comece pelo desenho, marque o que se sabe e escolha a fórmula certa.', 'primary'))]
      ],
      exemplos: [
        ['Ladrilhamento misto', 'Quadrados e octógonos regulares podem ladrilhar juntos: em cada vértice há $1$ quadrado e $2$ octógonos. Confirme com os ângulos.', [['Quadrado', '$90°$.'], ['Octógono', '$135°$ cada.'], ['Soma', '$90° + 135° + 135° = 360°$.']], 'Fecha <strong>360°</strong>: ladrilham sem frestas.'],
        ['Combinando', 'Em um polígono regular, o ângulo externo é $30°$. Quantos lados e quantas diagonais ele tem?', [['Lados', '$360° ÷ 30° = 12$.'], ['Diagonais', '${12 · 9|2} = 54$.']], '<strong>12 lados</strong> e <strong>54 diagonais</strong>.']
      ],
      pratique: [
        ['Fecha 360°?', 'Qual polígono regular ladrilha o plano sozinho?', ['pentágono', 'octógono', 'hexágono', 'decágono'], 2, '$3 · 120° = 360°$. <strong>Alternativa C.</strong>'],
        ['Combinando', 'Um polígono regular tem ângulo interno de $144°$. Quantas diagonais ele tem?', ['$20$', '$27$', '$35$', '$44$'], 2, 'Externo $36°$ ⇒ $n = 10$; diagonais: ${10 · 7|2} = 35$. <strong>Alternativa C.</strong>'],
        ['Área', 'Um hexágono regular de lado $a$ se divide em $6$ triângulos equiláteros. Se cada um tem área $5$, a área do hexágono é:', ['$11$', '$25$', '$30$', '$36$'], 2, '$6 · 5 = 30$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O mosaico', 'Um artesão quer fazer um mosaico só com polígonos regulares iguais, sem frestas e sem sobreposição. Qual polígono ele pode usar?', ['pentágono', 'octógono', 'heptágono', 'triângulo equilátero', 'eneágono'], 3, 'O triângulo equilátero ($60°$) cabe $6$ vezes em $360°$. <strong>Alternativa D.</strong>'],
      cuidados: [['Achar que todo regular ladrilha', 'Só triângulo, quadrado e hexágono ladrilham sozinhos.'], ['Confundir interno e externo', 'Confira qual ângulo o problema fornece.'], ['Contar diagonais com lados', 'Lados não são diagonais.'], ['Esquecer de conferir', 'Reveja as unidades e a ordem de grandeza.']],
      quiz: [
        { q: 'A soma dos ângulos em torno de um ponto é:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 3 },
        { q: 'Cabem quantos hexágonos regulares em torno de um vértice?', o: ['$2$', '$3$', '$4$', '$6$'], a: 1 },
        { q: 'Externo $45°$: o polígono regular tem:', o: ['$6$ lados', '$8$ lados', '$9$ lados', '$12$ lados'], a: 1 },
        { q: 'Qual figura <strong>não</strong> ladrilha sozinha?', o: ['triângulo equilátero', 'quadrado', 'hexágono', 'pentágono regular'], a: 3 }
      ],
      sintese: [['Ladrilhar', 'Ângulos em volta do vértice somam 360°.'], ['Revisão', 'Soma interna, externa, diagonais e áreas.'], ['Estratégia', 'Desenhe, marque, escolha a fórmula, confira.']],
      msg: 'Próximo módulo: círculo e circunferência.'
    }
  ]
});
