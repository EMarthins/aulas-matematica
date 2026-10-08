// Unidade 12 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/12-geometria-plana/', key = 'c12', brand = 'Geometria Plana', cap = 'Capítulo 12';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Geometria plana: <span>1 questão em cada 6</span>',
  lede: 'O maior bloco da prova (10 de 60). Pitágoras, semelhança, razão de áreas, círculo e três truques que evitam contas longas.',
  badges: ['10× nas provas 2025–26', 'a² = b² + c²', 'Áreas: ×k²', 'Figura + coordenadas'],
  curve: 'M20,160 C 100,60 180,160 260,90 C 340,30 420,60 480,24',
  sections: [
    ['Método', 'Passo a passo', 'bulb', 'primary', p('1) Figura grande com os dados. 2) Triângulos <strong>retângulos</strong>. 3) Triângulos <strong>semelhantes</strong>. 4) Áreas por subtração. 5) Se travar: <strong>coordenadas</strong>.')],
    ['Ângulos', 'Soma e polígonos', 'scale', 'growth', fx('(n−2)·180^∘   {n(n−3)|2} "diagonais"') + p('Inscrito $= ½$ do arco; no diâmetro $90^∘$. Paralelas: alternos iguais, colaterais $180^∘$.')],
    ['Semelhança', 'Razão k', 'link', 'decay', fx('"lados" ×k   "áreas" ×k^2   "volumes" ×k^3') + p('Casos: AA, LAL, LLL. Tales; bissetriz: $BD/DC = AB/AC$.')],
    ['Retângulo', 'Triângulo retângulo', 'triangle', 'success', fx('a^2 = b^2 + c^2   h^2 = mn   bc = ah') + p('Ternos: 3-4-5, 5-12-13, 8-15-17, 7-24-25. 30-60-90: $x, x√3, 2x$. 45-45-90: $x, x, x√2$. Inraio $(b+c−a)/2$.')],
    ['Áreas', 'Tabela', 'chart', 'primary', tb(['Figura', 'Área'], [['Triângulo', '$bh/2$; Heron; $pr$; $abc/4R$'], ['Equilátero', '$l^2√3/4$'], ['Trapézio', '$(B+b)h/2$'], ['Losango', '$Dd/2$'], ['Círculo / setor', '$πr^2$; $r^2θ/2$'], ['Hexágono regular', '$3l^2√3/2$']])],
    ['Razões', 'Sem calcular áreas', 'target', 'growth', p('Mesma altura → bases. Ângulo comum: $AP·AQ/(AB·AC)$. Semelhantes: $k^2$.') + call('ENA 2025 Q7', '$36 · (6·8)/(10·12) = 72/5$.', 'success')],
    ['Círculo', 'Propriedades', 'coin', 'decay', p('Tangente ⟂ raio; tangentes de ponto externo iguais; corda $r^2 = d^2 + (c/2)^2$; potência de ponto.') + call('ENA 2026 Q20', 'tudo na diagonal: $r = 4 − 2√2$.', 'success')],
    ['Truques', 'Para gabaritar', 'flag', 'success', p('Retângulo: $d^2 = (a+b)^2 − 2ab$. Triângulo inscrito de área máxima: $r^2$. Quadrado girado: lado $b − a$, área $1 − 2ab$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Razão de semelhança $k$ vale para lados; áreas usam $k^2$.', 'Usar o lado inclinado do trapézio como altura.', 'Altura do equilátero: $l√3/2$, não $(l/2)√2$.', 'Resolver o sistema do retângulo em vez de usar a identidade.', 'Duplicar lados duplica a área? Não: quadruplica (volume octuplica).'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Geometria plana <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: diagonal pela identidade, razão de áreas, semelhança, inraio e corda.',
  final: 'Identidade, mesma altura, k² e Pitágoras: os quatro atalhos de geometria plana.',
  questions: [
    { badge: 'Estilo ENA · diagonal', text: 'Um retângulo tem <strong>perímetro 34</strong> e <strong>área 60</strong>.', cmd: 'A medida da diagonal é:', opts: ['11', '12', '13', '14', '15'], a: 2,
      sol: '<p>$a + b = 17$, $ab = 60$. $d^2 = (a+b)^2 − 2ab = 289 − 120 = 169 ⇒ d = 13$ (lados 5 e 12).</p>' },
    { badge: 'Estilo ENA · razão de áreas', text: 'O triângulo $ABC$ tem área 60. O ponto $D$ pertence a $BC$, com $BD = 3$ e $DC = 2$.', cmd: 'A área do triângulo $ABD$ é:', opts: ['24', '30', '32', '36', '40'], a: 3,
      sol: '<p>$ABD$ e $ABC$ têm a mesma altura (de $A$ até $BC$): a razão das áreas é a das bases, ${BD|BC} = {3|5}$. Área $= 60 · {3|5} = 36$.</p>' },
    { badge: 'Estilo ENA · semelhança', text: 'Dois triângulos semelhantes têm lados na razão $3 : 5$. A área do menor é $27$.', cmd: 'A área do maior é:', opts: ['45', '60', '75', '90', '125'], a: 2,
      sol: '<p>Razão de áreas $= (5/3)^2 = {25|9}$. Área do maior $= 27 · {25|9} = 75$.</p>' },
    { badge: 'Estilo ENA · inraio', text: 'Um triângulo retângulo tem catetos <strong>5</strong> e <strong>12</strong>.', cmd: 'O raio da circunferência inscrita é:', opts: ['1', '2', '2,5', '3', '4'], a: 1,
      sol: '<p>Hipotenusa $13$. $r = {b + c − a|2} = {5 + 12 − 13|2} = 2$. (Conferência: $A = 30 = p·r = 15 · 2$.)</p>' },
    { badge: 'Estilo ENA · corda', text: 'Em um círculo de <strong>raio 13</strong>, uma corda mede <strong>24</strong>.', cmd: 'A distância da corda ao centro é:', opts: ['4', '5', '6', '7', '12'], a: 1,
      sol: '<p>Metade da corda: $12$. $d = √{13^2 − 12^2} = √{25} = 5$ (terno 5-12-13).</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">ferramenta</span> resolve?',
  subtitle: 'Classifique cada problema pela ferramenta mais curta: Pitágoras, semelhança, razão de áreas ou identidade algébrica.',
  tpl: cClassificar({
    cats: ['Pitágoras / terno', 'Semelhança (razão k)', 'Razão de áreas', 'Identidade (a+b)² − 2ab'],
    intro: 'Escolha a ferramenta mais curta para cada situação e clique em <strong>Conferir</strong>.',
    final: 'Quem escolhe bem a ferramenta resolve geometria em duas linhas.',
    itens: [
      ['Escada de 5 m com a base a 3 m da parede: qual a altura?', 0, 'Triângulo retângulo: $5^2 = 3^2 + h^2$.'],
      ['Retângulo de perímetro 16 e área 14: qual a diagonal?', 3, '$d^2 = (a + b)^2 − 2ab = 64 − 28$.'],
      ['Triângulos semelhantes na razão 2 : 3; a área do menor é 20', 1, 'Áreas na razão $k^2 = 4/9$.'],
      ['$P ∈ AC$, $Q ∈ AB$: qual a razão $[APQ]/[ABC]$?', 2, 'Ângulo comum: $AP·AQ/(AB·AC)$.'],
      ['$D ∈ BC$ com $BD = 2DC$: razão $[ABD] : [ADC]$', 2, 'Mesma altura → razão das bases, $2 : 1$.'],
      ['Altura de um triângulo equilátero de lado 12', 0, 'Metade do triângulo é 30-60-90 (Pitágoras): $h = 6√3$.'],
      ['Retângulo de área 60 e diagonal 13: qual o perímetro?', 3, '$(a+b)^2 = d^2 + 2ab = 289$.'],
      ['Um poste e uma pessoa projetam sombras no mesmo instante', 1, 'Triângulos semelhantes: alturas proporcionais às sombras.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Geometria plana: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas: equilátero, retângulo, altura relativa à hipotenusa, semelhança, polígonos e triângulo inscrito. Responda com número.',
  final: 'As ferramentas se repetem: Pitágoras, k², identidade e o raio como altura máxima.',
  problems: [
    { tag: 'Equilátero', q: 'Um triângulo equilátero tem altura $6√3$. Qual o seu lado?', a: 12, hint: '$h = l√3/2$.', sol: '<p>$l = {2·6√3|√3} = 12$.</p>' },
    { tag: 'Retângulo', q: 'Um retângulo tem perímetro 28 e diagonal 10. Qual a sua área?', a: 48, hint: '$a + b = 14$; $2ab = (a+b)^2 − d^2$.', sol: '<p>$2ab = 196 − 100 = 96 ⇒ ab = 48$.</p>' },
    { tag: 'Relações métricas', q: 'Triângulo retângulo de catetos 6 e 8. Qual a altura relativa à hipotenusa? (decimal)', a: 4.8, tol: 0.01, hint: '$bc = ah$ com $a = 10$.', sol: '<p>$h = 48/10 = 4,8$.</p>' },
    { tag: 'Semelhança', q: 'Triângulos semelhantes com lados na razão $2 : 3$; área do menor 20. Qual a área do maior?', a: 45, hint: 'Áreas na razão $4 : 9$.', sol: '<p>$20 · 9/4 = 45$.</p>' },
    { tag: 'Polígonos', q: 'Qual o ângulo interno (em graus) de um polígono regular de 12 lados?', a: 150, hint: '$(n − 2)·180/n$.', sol: '<p>$10 · 180 / 12 = 150$.</p>' },
    { tag: 'Área máxima', q: 'Qual a área máxima de um triângulo retângulo inscrito em um círculo de raio 4?', a: 16, hint: 'Hipotenusa 8; altura máxima = raio.', sol: '<p>$8 · 4 / 2 = 16 = r^2$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
