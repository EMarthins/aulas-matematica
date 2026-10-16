// Módulo 13 · Matemática · 2ª série · 3º trimestre — Retomada: Teorema de Pitágoras (aula R17 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

const tri = svg(240, 150, `<polygon points="30,120 170,120 30,30" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="104" width="16" height="16" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="90" y="138" font-size="14" fill="var(--ink)">cateto b</text><text x="2" y="80" font-size="14" fill="var(--ink)">c</text><text x="108" y="66" font-size="14" fill="var(--decay)">hipotenusa a</text>`, '280px');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/retomada-teorema-de-pitagoras/',
  titulo: 'Retomada: Teorema de Pitágoras', accent: 'success', icon: 'triangle', key: 'm2w13', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aula R17 (retomada) do plano de Matemática da 2ª série (3º trimestre), reescrita e ampliada com problemas originais.', 'Revisão do Ensino Fundamental (8º e 9º anos): triângulo retângulo e teorema de Pitágoras.'],
  aulas: [{
    slug: 'retomada-teorema-de-pitagoras', titulo: 'Retomada: Teorema de Pitágoras',
    h1: `Retomada: ${co('success')}Teorema de Pitágoras</span>`,
    sub: 'Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. É a base da Trigonometria e de muitas medidas indiretas.',
    badges: [['a² = b² + c²'], ['triângulo retângulo', 'growth'], ['triplas', 'decay']], color: 'primary',
    roteiro: ['Do enunciado às aplicações.', [['Elementos', 'catetos e hipotenusa', 'bulb'], ['O teorema', 'a² = b² + c²', 'target'], ['Calcular lados', 'achar o que falta', 'scale'], ['Triplas pitagóricas', '3-4-5 e outras', 'chart'], ['Aplicações', 'diagonais e alturas', 'book']]],
    objetivos: ['Enunciar o <strong>Teorema de Pitágoras</strong> e identificar <strong>catetos e hipotenusa</strong>.', '<strong>Calcular</strong> a medida de um lado desconhecido.', 'Aplicar em <strong>diagonais</strong>, <strong>alturas</strong> e problemas do cotidiano.'],
    dica: 'A <strong>hipotenusa</strong> é o lado oposto ao ângulo reto e é sempre o <strong>maior</strong> lado do triângulo retângulo.',
    gancho: { titulo: 'A escada na parede', texto: 'Uma escada de $5$ m está apoiada em uma parede, com o pé a $3$ m da parede. A que altura da parede ela toca? Os três comprimentos formam um triângulo retângulo.', mini: ['A altura atingida é:', ['$2$ m', '$4$ m', '$5$ m', '$8$ m'], 1, '$5² = 3² + h²$ ⇒ $h² = 16$ ⇒ $h = 4$. <strong>Alternativa B.</strong>'] },
    teoria: [
      ['Teoria · o teorema', 'Enunciado e uso', g2(`<div>
          ${checks(['<strong>Enunciado:</strong> em um triângulo retângulo de catetos $b$ e $c$ e hipotenusa $a$: <strong>$a² = b² + c²$</strong>.', '<strong>Recíproca:</strong> se os lados de um triângulo satisfazem $a² = b² + c²$, ele é retângulo.', '<strong>Tripla pitagórica:</strong> inteiros que satisfazem a relação: $3, 4, 5$; $5, 12, 13$; $8, 15, 17$; $7, 24, 25$ e seus múltiplos.', '<strong>Cálculo:</strong> hipotenusa $a = √{b² + c²}$; cateto $b = √{a² − c²}$.'], '.95rem')}
        </div>`, `<div>${tri}</div>`)],
      ['Teoria · aplicações clássicas', 'Diagonais e alturas', g2(`<div>
          ${checks(['<strong>Diagonal do quadrado</strong> de lado $ℓ$: $d = ℓ √{2}$.', '<strong>Diagonal do retângulo</strong> $a × b$: $d = √{a² + b²}$.', '<strong>Altura do triângulo equilátero</strong> de lado $ℓ$: $h = {ℓ √{3}|2}$.', '<strong>Distância entre pontos:</strong> $d = √{(x_{2} − x_{1})² + (y_{2} − y_{1})²}$.'], '.95rem')}
        </div>`, callout('Conexão com a Trigonometria', 'Pitágoras gera a relação fundamental $sen² θ + cos² θ = 1$ (hipotenusa $1$).', 'primary'))]
    ],
    exemplos: [
      ['Hipotenusa', 'Os catetos de um triângulo retângulo medem $6$ e $8$. Qual a hipotenusa?', [['Teorema', '$a² = 6² + 8² = 36 + 64 = 100$.'], ['Raiz', '$a = 10$.']], 'A hipotenusa mede <strong>10</strong>.'],
      ['Cateto', 'A hipotenusa mede $13$ e um cateto, $5$. Qual o outro cateto?', [['Teorema', '$13² = 5² + b²$.'], ['Isole', '$b² = 169 − 25 = 144$.'], ['Raiz', '$b = 12$.']], 'O outro cateto mede <strong>12</strong>.']
    ],
    pratique: [
      ['Hipotenusa', 'Catetos $9$ e $12$: hipotenusa:', ['$15$', '$21$', '$225$', '$√{21}$'], 0, '$81 + 144 = 225$ ⇒ $15$. <strong>Alternativa A.</strong>'],
      ['Diagonal', 'A diagonal de um quadrado de lado $4$ vale:', ['$4$', '$4√{2}$', '$8$', '$√{8}$'], 1, '$d = ℓ√{2}$. <strong>Alternativa B.</strong>'],
      ['Reconhecer', 'Um triângulo de lados $7$, $24$ e $25$ é:', ['retângulo', 'acutângulo', 'obtusângulo', 'impossível'], 0, '$49 + 576 = 625 = 25²$. <strong>Alternativa A.</strong>']
    ],
    enem: ['O cabo de aço', 'Um poste de $8$ m é sustentado por um cabo esticado até um ponto do chão a $6$ m da base. O comprimento do cabo é:', ['$7$ m', '$10$ m', '$12$ m', '$14$ m', '$100$ m'], 1, '$8² + 6² = 100$ ⇒ $10$. <strong>Alternativa B.</strong>'],
    cuidados: [['Hipotenusa errada', 'A hipotenusa é a que fica sozinha do lado do $a²$.'], ['Somar sem elevar', '$a² = b² + c²$, e não $a = b + c$.'], ['Esquecer a raiz', 'No fim, tire a raiz quadrada.'], ['Aplicar fora do triângulo retângulo', 'O teorema só vale com ângulo reto.']],
    quiz: [
      { q: 'No teorema de Pitágoras, $a$ é:', o: ['um cateto', 'a hipotenusa', 'a altura', 'a mediana'], a: 1 },
      { q: 'Catetos $5$ e $12$: hipotenusa:', o: ['$13$', '$17$', '$7$', '$60$'], a: 0 },
      { q: 'Qual é tripla pitagórica?', o: ['$2, 3, 4$', '$3, 4, 5$', '$4, 5, 7$', '$5, 6, 9$'], a: 1 },
      { q: 'Diagonal do quadrado de lado $ℓ$:', o: ['$ℓ$', '$ℓ√{2}$', '$2ℓ$', '$ℓ²$'], a: 1 }
    ],
    sintese: [['Teorema', 'a² = b² + c² (a hipotenusa).'], ['Triplas', '3-4-5, 5-12-13, 8-15-17, 7-24-25.'], ['Aplicações', 'Diagonais, alturas, distância entre pontos.']],
    msg: 'Com a retomada de Pitágoras, fechamos a Matemática da 2ª série no 3º trimestre.'
  }]
});
