// Unidade 14 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cVF } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/14-geometria-espacial/', key = 'c14', brand = 'Geometria Espacial', cap = 'Capítulo 14';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'success',
  h1: 'Geometria espacial: <span>volumes e Euler</span>',
  lede: 'Duas questões em 60 (e uma de escala): volumes por decomposição, pirâmide como ⅓ do prisma, líquido em recipiente inclinado e a relação de Euler.',
  badges: ['2× nas provas 2025–26', 'V = ⅓·Ab·h', 'k³ no volume', 'V − A + F = 2'],
  curve: 'M20,150 C 100,150 160,110 240,100 C 320,90 400,40 480,24',
  sections: [
    ['Volumes', 'Resumo', 'cube', 'success', tb(['Sólido', 'Volume'], [['Cubo / caixa', '$a^3$ / $abc$'], ['Prisma', '$A_b·h$'], ['Pirâmide / cone', '$⅓A_bh$'], ['Cilindro', '$πr^2h$'], ['Esfera', '$⁴⁄₃πr^3$']])],
    ['Áreas', 'Superfícies', 'scale', 'primary', fx('"cubo" 6a^2   "esfera" 4πr^2   "cilindro" 2πr(r+h)') + p('Diagonal do cubo $a√3$; da caixa $√{a^2+b^2+c^2}$; cone $g^2 = r^2 + h^2$.')],
    ['Unidades', 'Litros', 'coin', 'growth', p('$1\\ dm^3 = 1\\ L$ · $1\\ m^3 = 1000\\ L$ · $1\\ cm^3 = 1\\ mL$.')],
    ['Euler', 'Poliedros', 'link', 'decay', fx('V − A + F = 2') + tb(['Regular', 'F', 'V', 'A'], [['Tetraedro', '4', '4', '6'], ['Cubo', '6', '8', '12'], ['Octaedro', '8', '6', '12']])],
    ['ENA 2025 Q28', 'Tetraedro', 'target', 'success', p('Base $ABC$ = metade da base do paralelepípedo; mesma altura:') + fx('{1|3}·{b|2}·h = {V|6}')],
    ['ENA 2026 Q10', 'Líquido inclinado', 'chart', 'primary', p('Total − parte derramada. Seção lateral e $tg 30^∘$: restou $(12 − √3)/6$.')],
    ['Escalas', 'k, k², k³', 'up', 'growth', p('Dimensões $×k$: área $×k^2$, volume $×k^3$. Seção paralela à base: $(h\'/h)^3$.')],
    ['Inscritos', 'Esfera e cubo', 'bulb', 'decay', p('Esfera inscrita no cubo: $r = a/2$. Circunscrita: $R = a√3/2$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o $⅓$ em pirâmides e cones.', 'Dobrar dimensões: volume ×8, não ×2.', 'Trocar dm³, m³ e litros.', 'Não fazer a seção lateral no recipiente inclinado.', 'Usar a altura inclinada (geratriz) no lugar da altura.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Geometria espacial <span style="color:var(--success);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: tetraedro e prisma, escala, Euler, cone e esfera inscrita.',
  final: 'Decomposição, escala e fórmulas: volume deixa de ser um bicho de sete cabeças.',
  questions: [
    { badge: 'Estilo ENA · pirâmide e prisma', text: 'Um prisma triangular tem volume $V$. Uma pirâmide tem a mesma base e a mesma altura do prisma.', cmd: 'O volume da pirâmide é:', opts: ['$V/2$', '$V/3$', '$V/4$', '$V/6$', '$2V/3$'], a: 1,
      sol: '<p>Mesma base e mesma altura: a pirâmide tem $⅓$ do volume do prisma: $V/3$.</p>' },
    { badge: 'Estilo ENA · escala', text: 'Um reservatório tem capacidade de 500 L. Constrói-se outro semelhante, com todas as dimensões lineares <strong>triplicadas</strong>.', cmd: 'A capacidade do novo reservatório é:', opts: ['1500 L', '4500 L', '9000 L', '13 500 L', '27 000 L'], a: 3,
      sol: '<p>Volume $×k^3 = ×27$: $500 · 27 = 13 500$ L.</p>' },
    { badge: 'Estilo ENA · Euler', text: 'Um poliedro convexo tem 12 arestas e 6 vértices.', cmd: 'O número de faces é:', opts: ['4', '6', '8', '10', '12'], a: 2,
      sol: '<p>$V − A + F = 2 ⇒ 6 − 12 + F = 2 ⇒ F = 8$ (é o octaedro).</p>' },
    { badge: 'Estilo ENA · cone', text: 'Um cone tem raio da base 6 e geratriz 10.', cmd: 'Seu volume é:', opts: ['$96π$', '$120π$', '$144π$', '$180π$', '$360π$'], a: 0,
      sol: '<p>$h = √{10^2 − 6^2} = 8$. $V = {1|3}π·36·8 = 96π$.</p>' },
    { badge: 'Estilo ENA · esfera inscrita', text: 'Uma esfera está inscrita em um cubo de aresta 6.', cmd: 'O volume da esfera é:', opts: ['$12π$', '$24π$', '$36π$', '$48π$', '$72π$'], a: 2,
      sol: '<p>$r = 3$. $V = {4|3}π·27 = 36π$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'success',
  h1: 'Verdadeiro ou falso: <span style="color:var(--success);">espacial</span>',
  subtitle: 'Seis afirmações sobre volumes, escalas e Euler.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Fator 1/3, k³ e Euler: três ideias que resolvem quase tudo.',
    afirmacoes: [
      ['O volume de uma pirâmide é o dobro do volume do prisma de mesma base e altura.', false, 'Falsa: é $1/3$ do volume do prisma.'],
      ['Dobrando todas as arestas de um cubo, o volume fica 8 vezes maior.', true, 'Verdadeira: $(2a)^3 = 8a^3$.'],
      ['Um poliedro convexo com 8 vértices e 12 arestas tem 6 faces.', true, 'Verdadeira: $8 − 12 + F = 2 ⇒ F = 6$ (o cubo).'],
      ['Um litro equivale a um metro cúbico.', false, 'Falsa: 1 L = 1 dm³ e 1 m³ = 1000 L.'],
      ['Duplicar o raio de uma esfera multiplica o volume por 4.', false, 'Falsa: o volume é proporcional a $r^3$: fica multiplicado por 8 (a área é que quadruplica).'],
      ['A diagonal de um cubo de aresta $a$ mede $a√3$.', true, 'Verdadeira: $√{a^2 + a^2 + a^2} = a√3$.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Espacial: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de volumes, Euler e escalas. Responda com número.',
  final: 'Fórmulas, escalas e Euler resolvem a geometria espacial do ENA.',
  problems: [
    { tag: 'Cubo', q: 'Qual a área total de um cubo de aresta 3?', a: 54, hint: '$6a^2$.', sol: '<p>$6 · 9 = 54$.</p>' },
    { tag: 'Cone', q: 'Cone de raio 3 e altura 4: qual o volume dividido por $π$?', a: 12, hint: '${1|3}·9·4$.', sol: '<p>$V = 12π$ → 12.</p>' },
    { tag: 'Pirâmide', q: 'Pirâmide de base quadrada de lado 6 e altura 5: qual o volume?', a: 60, hint: '${1|3}·36·5$.', sol: '<p>$V = 60$.</p>' },
    { tag: 'Euler', q: 'Um poliedro convexo tem 10 vértices e 15 arestas. Quantas faces?', a: 7, hint: '$V − A + F = 2$.', sol: '<p>$F = 2 − 10 + 15 = 7$.</p>' },
    { tag: 'Litros', q: 'Uma caixa-d’água cúbica de aresta 2 m está cheia. Quantos litros?', a: 8000, hint: '$1\\ m^3 = 1000\\ L$.', sol: '<p>$8\\ m^3 = 8000\\ L$.</p>' },
    { tag: 'Escala', q: 'Se a aresta dobrar, quantas vezes o volume aumenta?', a: 8, hint: '$k^3$.', sol: '<p>$2^3 = 8$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
