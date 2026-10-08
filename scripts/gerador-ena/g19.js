// Unidade 19 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cMemoria } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/19-congruencia-semelhanca/', key = 'c19', brand = 'Triângulos: Congruência e Semelhança', cap = 'Triângulos';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Triângulos: <span>iguais ou semelhantes</span>',
  lede: 'Item “j” do edital. Existência e classificação, casos de congruência e de semelhança, pontos notáveis, Tales, bissetriz e base média.',
  badges: ['Edital: item j', 'LAL · ALA · LLL', 'AA · LAL · LLL', 'razão k: áreas ×k²'],
  curve: 'M20,160 C 90,100 160,160 240,90 C 320,30 400,70 480,26',
  sections: [
    ['Existência', 'Desigualdade triangular', 'triangle', 'primary', fx('∣b − c∣ < a < b + c') + p('Maior lado ↔ maior ângulo. Retângulo $c^2 = a^2 + b^2$; acutângulo $c^2 <$; obtusângulo $c^2 >$.')],
    ['Congruência', 'Casos', 'check', 'growth', tb(['Caso', 'Igual'], [['LAL', '2 lados + ângulo entre'], ['ALA', '2 ângulos + lado entre'], ['LLL', '3 lados'], ['LAAo', 'lado + 2 ângulos'], ['Cat–Hip', 'triâng. retângulos']]) + call('Não é caso', 'AAA (semelhança) e LLA.', 'danger')],
    ['Isósceles', 'Mediana tudo-em-um', 'polygon', 'decay', p('Ângulos da base iguais; mediana da base = altura = bissetriz. Equilátero: $h = l√3/2$.')],
    ['Pontos notáveis', 'G, I, O, H', 'target', 'success', p('<strong>Baricentro</strong> (medianas): divide em $2 : 1$. <strong>Incentro</strong> (bissetrizes): círculo inscrito. <strong>Circuncentro</strong> (mediatrizes): circunscrito. <strong>Ortocentro</strong> (alturas).')],
    ['Semelhança', 'Casos e razão k', 'link', 'primary', p('AA, LAL, LLL. Lados, perímetros, alturas $×k$; áreas $×k^2$; volumes $×k^3$.') + call('ENA 2025 Q14', 'DAE ≅ ABF (LAL) e DAE ∼ AGE (AA): $EG = 4/√{13}$.', 'success')],
    ['Tales', 'Paralelas', 'scale', 'growth', fx('DE ∥ BC ⇒ {AD|AB} = {AE|AC} = {DE|BC}') + p('Feixe de paralelas: segmentos proporcionais.')],
    ['Bissetriz', 'Interna', 'chart', 'decay', fx('{BD|DC} = {AB|AC}') + p('Proporcional aos lados adjacentes.')],
    ['Base média', 'Triângulo e trapézio', 'bulb', 'success', p('Une pontos médios de dois lados: paralela ao terceiro e metade dele. No trapézio: $(B + b)/2$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['AAA e LLA tratados como congruência.', 'Não verificar a desigualdade triangular.', 'Proporção com lados não correspondentes.', 'Esquecer o quadrado na razão de áreas.', 'Usar Tales sem paralelismo justificado.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Triângulos <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: isósceles, desigualdade triangular, baricentro, Tales e sombras.',
  final: 'Existência, 2 : 1, Tales e semelhança: as ferramentas do item “j” do edital.',
  questions: [
    { badge: 'Estilo ENA · isósceles', text: 'Um triângulo isósceles tem perímetro 36 e base 10.', cmd: 'Cada um dos lados iguais mede:', opts: ['13', '10', '12', '14', '16'], a: 0,
      sol: '<p>$2l + 10 = 36 ⇒ l = 13$. Existe: $13 + 10 > 13$ ✓ e $13 + 13 > 10$ ✓.</p>' },
    { badge: 'Estilo ENA · desigualdade triangular', text: 'Dois lados de um triângulo medem 7 e 12.', cmd: 'Quantos valores <strong>inteiros</strong> o terceiro lado pode ter?', opts: ['11', '12', '13', '14', '15'], a: 2,
      sol: '<p>$12 − 7 < x < 12 + 7 ⇒ 5 < x < 19$: inteiros de 6 a 18 → $18 − 6 + 1 = 13$.</p>' },
    { badge: 'Estilo ENA · baricentro', text: 'Uma mediana de um triângulo mede 18 cm.', cmd: 'A distância do vértice ao baricentro, sobre essa mediana, é:', opts: ['6 cm', '9 cm', '10 cm', '12 cm', '15 cm'], a: 3,
      sol: '<p>O baricentro divide a mediana na razão $2 : 1$ a partir do vértice: $2/3 · 18 = 12$ cm.</p>' },
    { badge: 'Estilo ENA · Tales', text: 'Três retas paralelas cortam duas transversais. Em uma, os segmentos medem $AB = 4$ e $BC = 10$. Na outra, $A\'B\' = 6$.', cmd: 'O segmento $B\'C\'$ mede:', opts: ['12', '15', '14', '16', '20'], a: 1,
      sol: '<p>${AB|BC} = {A\'B\'|B\'C\'} ⇒ {4|10} = {6|B\'C\'} ⇒ B\'C\' = 15$.</p>' },
    { badge: 'Estilo ENA · semelhança', text: 'Um prédio de 40 m projeta sombra de 25 m. No mesmo instante, uma árvore projeta sombra de 5 m.', cmd: 'A altura da árvore é:', opts: ['6 m', '7 m', '9 m', '10 m', '8 m'], a: 4,
      sol: '<p>Triângulos semelhantes (AA): ${h|5} = {40|25} ⇒ h = 8$ m.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">triângulos</span>',
  subtitle: 'Vire duas cartas: junte cada <strong>caso ou teorema</strong> ao seu <strong>significado</strong>.',
  tpl: cMemoria({
    intro: 'Clique em duas cartas. Se formarem um par, ficam verdes.',
    final: 'Casos e teoremas na ponta da língua deixam a geometria mais curta.',
    pares: [
      ['LAL', 'Dois lados e o ângulo entre eles'], ['ALA', 'Dois ângulos e o lado entre eles'], ['LLL', 'Os três lados'], ['AA', 'Caso de semelhança: dois ângulos iguais'],
      ['Baricentro', 'Divide a mediana em $2 : 1$'], ['Tales', 'Paralela a um lado: segmentos proporcionais'], ['Base média', 'Metade do lado e paralela a ele'], ['Razão $k$ de semelhança', 'Áreas na razão $k^2$']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Triângulos: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas de existência, ângulos, Tales, bissetriz e razão de áreas. Responda com número.',
  final: 'Desigualdade triangular, Tales e k²: o essencial deste item.',
  problems: [
    { tag: 'Existência', q: 'Dois lados de um triângulo medem 7 e 12. Qual o maior inteiro que o terceiro lado pode medir?', a: 18, hint: '$x < 7 + 12$.', sol: '<p>$x < 19$: o maior inteiro é $18$.</p>' },
    { tag: 'Isósceles', q: 'Em um triângulo isósceles, o ângulo do vértice mede 40°. Quanto mede cada ângulo da base (em graus)?', a: 70, hint: '$(180 − 40)/2$.', sol: '<p>$140/2 = 70$.</p>' },
    { tag: 'Baricentro', q: 'O baricentro divide uma mediana de 12 cm. Qual a menor parte (cm)?', a: 4, hint: 'Razão 2 : 1.', sol: '<p>$12/3 = 4$ cm (e 8 cm a outra).</p>' },
    { tag: 'Tales', q: '$DE ∥ BC$, $AD = 3$, $DB = 2$, $BC = 10$. Quanto mede $DE$?', a: 6, hint: '${AD|AB} = {DE|BC}$ com $AB = 5$.', sol: '<p>${3|5} = {DE|10} ⇒ DE = 6$.</p>' },
    { tag: 'Bissetriz', q: '$AB = 6$, $AC = 9$, $BC = 10$; $AD$ é bissetriz de $A$. Quanto mede $BD$?', a: 4, hint: '${BD|DC} = {6|9}$.', sol: '<p>$BD = 10·6/15 = 4$.</p>' },
    { tag: 'Razão de áreas', q: 'Triângulos semelhantes com razão 3; a área do menor é 4. Qual a área do maior?', a: 36, hint: '$k^2 = 9$.', sol: '<p>$4 · 9 = 36$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
