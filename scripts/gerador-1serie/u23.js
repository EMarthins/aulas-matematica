// Unidade 23 — Teorema Fundamental da Semelhança (aula 67)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { svg, ln, ci, dot, tx, txu, poli, vert, medida, reto, arco, igual, cen, mid } = require('./geo.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'teorema-fundamental-da-semelhanca', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u23', BRAND = 'Teorema Fundamental da Semelhança', CAP = 'Aula 67';
const pages = [];

// triângulo ABC com DE paralelo a BC, AD/AB = 1/3
const fundamental = (() => {
  const A = [180, 15], B = [40, 165], C = [330, 165], t = 1 / 3, D = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t], E = [A[0] + (C[0] - A[0]) * t, A[1] + (C[1] - A[1]) * t];
  let s = poli([A, B, C], 'var(--ink-soft)', 'none', 2.2) + ln(D[0], D[1], E[0], E[1], 'var(--primary)', 3) + dot(D[0], D[1], 'var(--decay)') + dot(E[0], E[1], 'var(--decay)');
  s += txu(180, 9, 'A', 'var(--ink)', 13) + txu(26, 176, 'B', 'var(--ink)', 13) + txu(344, 176, 'C', 'var(--ink)', 13) + txu(D[0] - 12, D[1] + 4, 'D', 'var(--decay)', 13) + txu(E[0] + 12, E[1] + 4, 'E', 'var(--decay)', 13);
  s += txu(185, 88, '', 'var(--primary)', 12) + txu((D[0] + E[0]) / 2, D[1] - 8, 'DE ∥ BC', 'var(--primary)', 12);
  return svg(380, 190, s, '440px');
})();
// triângulo médio: M, N, P pontos médios
const medio = (() => {
  const A = [30, 150], B = [330, 150], C = [150, 25], M = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2], N = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2], P = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  let s = poli([A, B, C], 'var(--ink-soft)', 'none', 2.2) + poli([M, N, P], 'var(--growth)', 'var(--growth-soft)', 2.4);
  s += txu(150, 13, 'C', 'var(--ink)', 13) + txu(16, 160, 'A', 'var(--ink)', 13) + txu(344, 160, 'B', 'var(--ink)', 13) + txu(M[0] - 12, M[1], 'M', 'var(--growth)', 13) + txu(N[0] + 12, N[1], 'N', 'var(--growth)', 13) + txu(P[0], P[1] + 18, 'P', 'var(--growth)', 13);
  return svg(360, 175, s, '420px');
})();

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 67', h1: 'Teorema Fundamental da Semelhança: <span style="color:var(--primary);">uma paralela e um triângulo menor</span>',
  sub: 'Corte um triângulo por uma reta paralela a um dos lados: o triângulo que aparece é uma miniatura do original. Daí saem razões de lados, perímetros, alturas e áreas.',
  badges: [['paralela ⇒ semelhante'], ['k: lados, perímetros, alturas', 'growth'], ['k²: áreas', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da escada trapezoidal ao teorema.', [
  ['A escada', 'degraus paralelos e triângulos', 'bulb'],
  ['O teorema', 'paralela a um lado ⇒ triângulo semelhante', 'target'],
  ['Consequências', 'razões de lados, alturas, medianas, perímetros e áreas', 'chart'],
  ['Triângulo médio', 'pontos médios dos lados', 'link'],
  ['Problemas', 'área, lagoa e medidas inacessíveis', 'scale']
]));
a.push(objetivosSlide([
  'Enunciar o <strong>Teorema Fundamental da Semelhança</strong>.',
  'Usar $k$ para <strong>lados, alturas, medianas e perímetros</strong> e $k^{2}$ para <strong>áreas</strong>.',
  'Resolver problemas com o <strong>triângulo dos pontos médios</strong> ($k = 1/2$).',
  'Aplicar a <strong>proporcionalidade</strong> a medidas inacessíveis.'
], 'Dica', 'Reconheça o triângulo menor “escondido” dentro do maior: <strong>vértice em comum</strong> e um lado paralelo à base. Escreva a razão antes de calcular.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A escada trapezoidal', `
          ${lede('Em uma escada trapezoidal, cada degrau é <strong>paralelo</strong> ao anterior e mais curto que ele. Se prolongássemos os lados da escada até se encontrarem num ponto, cada degrau seria a base de um <strong>triângulo</strong>. Esses triângulos têm <strong>os mesmos ângulos</strong>: mudam de tamanho, não de forma.')}
          <div class="grid2" style="margin-top:6px;">
            ${fundamental}
            ${mini('Se $DE ∥ BC$, os triângulos $ADE$ e $ABC$ são:', ['congruentes', 'semelhantes', 'sem relação', 'equiláteros'], 1, 'Os ângulos em $D$ e $B$ são correspondentes (paralelas cortadas por uma transversal) e o ângulo em $A$ é comum: dois ângulos iguais, caso <strong>AA</strong>. São <strong>semelhantes</strong>.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · o teorema', 'Paralela a um lado ⇒ triângulo semelhante', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Teorema</strong>: em um triângulo, toda reta paralela a um dos lados que corte os outros dois em pontos distintos determina um triângulo <strong>semelhante</strong> ao primeiro.</li>
                <li>Com $DE ∥ BC$: razão de semelhança $k = {AD|AB} = {AE|AC} = {DE|BC}$.</li>
                <li>Razão entre <strong>alturas</strong>, <strong>medianas</strong> e <strong>perímetros</strong> correspondentes: também $k$.</li>
                <li>Razão entre <strong>áreas</strong>: $k^{2}$.</li>
                <li>Cuidado: a proporção usa o <strong>lado inteiro</strong> $AB$, não $DB$.</li>
              </ul>
            </div>
            ${W.box('Mova a paralela', W.nm('f1-k', 'Razão k = AD ÷ AB (entre 0 e 1)', 0.33, 'any') + W.nm('f1-bc', 'Medida de BC', 12, 'any') + W.nm('f1-ar', 'Área de ABC', 36, 'any') + W.svg('f1-s', '0 0 380 190', '400px') + W.txt('f1-d', 'DE = ') + W.txt('f1-a', 'Área de ADE: ') + W.hint('f1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O triângulo dos pontos médios', 'Um triângulo tem lados $6$ cm, $8$ cm e $10$ cm. Os pontos $M$, $N$ e $P$ são os pontos médios dos lados. Qual o perímetro do triângulo $MNP$?', [
  ['Razão', 'O segmento que une dois pontos médios é <strong>paralelo</strong> ao terceiro lado e mede <strong>metade</strong> dele: $k = 1/2$.'],
  ['Lados de MNP', '$3$, $4$ e $5$ cm (metade de $6$, $8$ e $10$).'],
  ['Perímetro', '$3 + 4 + 5 = 12$ cm $= 24 ÷ 2$.']
], 'Perímetro de $MNP$: <strong>12 cm</strong> (metade do perímetro de $ABC$).'));
a.push(sl('Figura', 'Triângulo ABC e o triângulo MNP', `
          <div class="grid2">
            ${medio}
            <div>
              ${callout('Quatro triângulos iguais', 'Os pontos médios dividem $ABC$ em <strong>quatro</strong> triângulos congruentes entre si, cada um semelhante ao original com $k = 1/2$.', 'success')}
              ${callout('Área', 'Área de $MNP$ $= {1|4}$ da área de $ABC$ ($k^{2} = 1/4$).', 'success')}
            </div>
          </div>`, { cls: '' }));
a.push(exemplo('Exemplo resolvido', 'A razão entre áreas', 'O triângulo $ABC$ tem área $80$ cm². Uma reta paralela a $BC$ passa por $D$ em $AB$, com $AD ÷ AB = 1/4$. Qual a área do triângulo $ADE$?', [
  ['Razão de semelhança', '$k = AD ÷ AB = 1/4$.'],
  ['Razão de áreas', '$k^{2} = 1/16$.'],
  ['Área de ADE', '$80 ÷ 16 = 5$ cm².']
], 'Área do triângulo $ADE$: <strong>5 cm²</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A largura da lagoa', 'Para medir o comprimento $AB$ de uma lagoa, usa-se o esquema em que $AB ∥ CD$ e as retas $AD$ e $BC$ se cortam em $P$. Sabe-se $CD = 10$ m, $PA = 8$ m e $PD = 2$ m, com $P$ entre $A$ e $D$ e entre $B$ e $C$. Quanto mede $AB$?', [
  ['Triângulos semelhantes', '$△PAB ∼ △PDC$ (ângulos opostos pelo vértice em $P$ e $AB ∥ CD$).'],
  ['Proporção', 'Lados correspondentes: $PA ↔ PD$ e $AB ↔ DC$. ${AB|CD} = {PA|PD} = {8|2} = 4$.'],
  ['Calcule', '$AB = 4 · CD = 4 · 10 = 40$ m.']
], 'A lagoa tem <strong>40 m</strong> de comprimento.', 'growth'));

a.push(pratique('Medida no triângulo', 'Em um triângulo ABC, $DE ∥ BC$, com $D$ em $AB$ e $E$ em $AC$. Se $AD = 3$, $AB = 9$ e $AE = 4$, então $AC$ vale:',
  ['8', '10', '12', '14', '16'], 2,
  '${AD|AB} = {AE|AC}$ ⇒ ${3|9} = {4|AC}$ ⇒ $AC = 12$. <strong>Alternativa C.</strong>'));
a.push(pratique('Altura em triângulos semelhantes', 'Dois triângulos semelhantes têm razão $2/5$ (menor para maior). Se a altura do maior é 15 cm, a do menor é:',
  ['5 cm', '6 cm', '7,5 cm', '9 cm', '10 cm'], 1,
  'Alturas têm a razão $k$: $15 · 2/5 = 6$ cm. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('A área do triângulo menor', 'Uma reta paralela à base $BC$ de um triângulo $ABC$ de área 80 cm² passa por $D$ em $AB$ com $AD ÷ AB = 1/4$. A área do triângulo $ADE$ é:',
  ['5 cm²', '10 cm²', '20 cm²', '40 cm²', '60 cm²'], 0,
  '$k = 1/4$; áreas na razão $k^{2} = 1/16$: $80 ÷ 16 = 5$ cm². <strong>Alternativa A.</strong> (Erro comum: usar $80 ÷ 4 = 20$.)'));

a.push(armadilhas('Cuidados', 'Onde o teorema engana', [
  ['Parte no lugar do todo', 'Use $AB$ (inteiro) na razão, e não $DB$.'],
  ['Razão de áreas igual a k', 'Áreas: $k^{2}$. Com $k = 1/4$, a área é $1/16$.'],
  ['Paralela não é “qualquer reta”', 'O teorema vale para reta <strong>paralela</strong> a um lado.'],
  ['Triângulo médio', '$MN$ mede <strong>metade</strong> do lado paralelo a ele, não o mesmo.']
]));
a.push(quiz([
  { q: 'Em $△ABC$, $DE ∥ BC$, $AD = 2$ e $AB = 8$. A razão $k$ é:', o: ['1/4', '1/2', '4', '2'], a: 0 },
  { q: 'Com $k = 1/3$, a razão entre as áreas é:', o: ['1/3', '1/6', '1/9', '1/27'], a: 2 },
  { q: 'O segmento que une os pontos médios de dois lados é:', o: ['paralelo ao terceiro lado e igual a ele', 'paralelo ao terceiro lado e metade dele', 'perpendicular ao terceiro lado', 'igual ao terceiro lado'], a: 1 },
  { q: 'Se o perímetro de ABC é 30 e $k = 1/3$, o perímetro do triângulo semelhante é:', o: ['3', '10', '90', '15'], a: 1 }
]));
a.push(fechamento([
  ['Teorema', 'Paralela a um lado ⇒ triângulo semelhante ao original.'],
  ['Razões', 'k para lados, alturas, medianas e perímetros; k² para áreas.'],
  ['Triângulo médio', 'k = 1/2: perímetro pela metade, área 1/4.']
], 'Ache o triângulo escondido, escreva k e escolha k ou k².'));

pages.push({ out: BASE + 'aula-teorema-fundamental-da-semelhanca.html', html: K.deck({
  title: 'Teorema Fundamental da Semelhança — Matemática 1ª série', brand: BRAND, key: KEY + 'a', meta: 'Aula 67 · Teorema Fundamental da Semelhança', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['f1-k', 'f1-bc', 'f1-ar'], function(){ var k = +$('f1-k').value, bc = +$('f1-bc').value, ar = +$('f1-ar').value, s = $('f1-s'); s.innerHTML = '';
    if(![k, bc, ar].every(isFinite) || k <= 0 || k >= 1 || bc <= 0 || ar <= 0){ $('f1-d').textContent = '—'; $('f1-a').textContent = ''; $('f1-h').textContent = 'Use k entre 0 e 1 e medidas positivas.'; return; }
    var A = [190, 15], B = [40, 165], C = [340, 165], D = [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k], E = [A[0] + (C[0] - A[0]) * k, A[1] + (C[1] - A[1]) * k];
    el('polygon', {points: [A, B, C].map(function(q){ return q.join(','); }).join(' '), fill: 'none', stroke: 'var(--ink-soft)', 'stroke-width': 2.2}, s); el('polygon', {points: [A, D, E].map(function(q){ return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.8}, s);
    [[A, 'A', 0, -4], [B, 'B', -12, 12], [C, 'C', 12, 12], [D, 'D', -12, 4], [E, 'E', 12, 4]].forEach(function(q){ var t = el('text', {x: q[0][0] + q[2], y: q[0][1] + q[3], 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = q[1]; });
    $('f1-d').textContent = pt(k * bc, 3) + '  (k · BC)'; $('f1-a').textContent = pt(k * k * ar, 3) + '  (k² · área de ABC = ' + pt(k * k, 4) + ' · ' + pt(ar) + ')';
    $('f1-h').textContent = 'AD ÷ AB = AE ÷ AC = DE ÷ BC = ' + pt(k, 3) + '. Perímetros: razão ' + pt(k, 3) + ' · áreas: razão ' + pt(k * k, 4) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Teorema Fundamental da Semelhança: <span>paralela, razão k e k²</span>',
  lede: 'Uma reta paralela a um lado de um triângulo determina outro triângulo semelhante: razão k para lados, alturas e perímetros e k² para áreas; o triângulo dos pontos médios tem k = 1/2.',
  badges: ['DE ∥ BC', 'k = AD/AB', 'áreas: k²'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Teorema', 'Paralela ⇒ semelhante', 'chart', 'primary', p('$DE ∥ BC$ ⇒ $△ADE ∼ △ABC$.') + call('Por quê', 'Caso AA: ângulo comum e correspondentes.', 'success')],
    ['Razão k', 'Lados', 'target', 'growth', p('$k = {AD|AB} = {AE|AC} = {DE|BC}$') + call('Cuidado', 'Use o lado inteiro.', 'danger')],
    ['Alturas e medianas', 'Também k', 'link', 'decay', li(['Alturas correspondentes: k.', 'Medianas correspondentes: k.', 'Perímetros: k.'])],
    ['Áreas', 'k²', 'scale', 'success', p('Área menor = k² · área maior.') + call('Exemplo', 'k = 1/4 ⇒ 80 vira 5.', 'success')],
    ['Triângulo médio', 'Pontos médios', 'up', 'primary', p('Lados = metade; perímetro = metade; área = 1/4.')],
    ['Medidas inacessíveis', 'Lagoa, rio', 'check', 'growth', li(['Ache o triângulo menor.', 'Escreva a razão.', 'Resolva a proporção.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar DB em vez de AB.', 'Razão de áreas igual a k.', 'Reta que não é paralela.', 'Esquecer que o triângulo médio tem k = 1/2.', 'Não conferir a razão nos três pares de lados.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Teorema Fundamental da Semelhança <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: lado, triângulo médio, área, lagoa e altura.',
  final: 'Paralela ⇒ semelhante; k nos comprimentos e k² nas áreas.',
  questions: [
    { badge: 'Estilo ENEM · lado', text: 'No triângulo ABC, $DE ∥ BC$, com $D$ em $AB$ e $E$ em $AC$. Sabe-se $AD = 3$, $AB = 9$ e $AE = 4$.', cmd: 'A medida de $AC$ é:', opts: ['8', '10', '12', '14', '16'], a: 2,
      sol: '<p>${3|9} = {4|AC}$ ⇒ $AC = 12$.</p>' },
    { badge: 'Estilo ENEM · triângulo médio', text: 'Um triângulo tem lados 6 cm, 8 cm e 10 cm. Os pontos médios dos lados formam outro triângulo.', cmd: 'O perímetro do triângulo dos pontos médios é:', opts: ['6 cm', '8 cm', '12 cm', '24 cm', '48 cm'], a: 2,
      sol: '<p>$k = 1/2$: perímetro $= 24 ÷ 2 = 12$ cm.</p>' },
    { badge: 'Estilo ENEM · área', text: 'O triângulo ABC tem área 80 cm². Uma reta paralela a BC passa por D em AB com $AD ÷ AB = 1/4$.', cmd: 'A área do triângulo ADE é:', opts: ['5 cm²', '10 cm²', '20 cm²', '40 cm²', '60 cm²'], a: 0,
      sol: '<p>$k^{2} = 1/16$; $80 ÷ 16 = 5$ cm².</p>' },
    { badge: 'Estilo ENEM · lagoa', text: 'Para medir o comprimento AB de uma lagoa, usa-se $AB ∥ CD$, com $CD = 10$ m e as retas AD e BC se cortando em P, com $PA = 8$ m e $PD = 2$ m (P entre A e D e entre B e C).', cmd: 'O comprimento da lagoa é:', opts: ['32 m', '36 m', '40 m', '45 m', '50 m'], a: 2,
      sol: '<p>△PAB ∼ △PDC: ${AB|CD} = {PA|PD} = {8|2} = 4$ ⇒ $AB = 40$ m.</p>' },
    { badge: 'Estilo ENEM · altura', text: 'Dois triângulos semelhantes têm razão $2/5$ (menor para maior). A altura do maior é 15 cm.', cmd: 'A altura correspondente do menor é:', opts: ['5 cm', '6 cm', '7,5 cm', '9 cm', '10 cm'], a: 1,
      sol: '<p>$15 · 2/5 = 6$ cm.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'O que a razão <span style="color:var(--growth);">multiplica</span>?',
  subtitle: 'Em triângulos semelhantes de razão k: k, k² ou nada muda?',
  tpl: cClassificar({
    cats: ['multiplica por k', 'multiplica por k²', 'não muda'],
    intro: 'Cada cartão traz uma grandeza. Escolha como ela se comporta numa semelhança de razão $k$ e clique em <strong>Conferir</strong>.',
    final: 'Comprimentos × k; áreas × k²; ângulos e razões entre comprimentos do mesmo triângulo não mudam.',
    itens: [
      ['Comprimento de um lado', 0, 'Lados correspondentes: razão $k$.'],
      ['Perímetro', 0, 'Soma de comprimentos: razão $k$.'],
      ['Área do triângulo', 1, 'Duas dimensões: $k^{2}$.'],
      ['Altura relativa a um lado', 0, 'Comprimento: razão $k$.'],
      ['Mediana correspondente', 0, 'Comprimento: razão $k$.'],
      ['Medida de um ângulo', 2, 'Semelhantes têm ângulos iguais: não muda.'],
      ['Razão entre dois lados do mesmo triângulo', 2, 'Os dois lados são multiplicados por $k$: a razão permanece.'],
      ['Área de um quadrado construído sobre um lado', 1, 'Área: $k^{2}$.'],
      ['Raio da circunferência inscrita', 0, 'Comprimento: razão $k$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Teorema Fundamental: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas com razões em triângulos. Digite o número pedido.',
  final: 'Você percorreu a trilha: lado, perímetro, área, lagoa e altura.',
  problems: [
    { tag: 'Lado', q: 'Em ABC, DE ∥ BC, AD = 3, AB = 9 e AE = 4. Quanto mede AC?', a: 12, ph: 'AC', hint: '3/9 = 4/AC.', sol: '<p>$AC = 12$.</p>' },
    { tag: 'Perímetro', q: 'Triângulo de lados 6, 8 e 10 cm: qual o perímetro (cm) do triângulo dos pontos médios?', a: 12, ph: 'cm', hint: 'k = 1/2.', sol: '<p>$24 ÷ 2 = 12$.</p>' },
    { tag: 'Área', q: 'ABC tem área 80 cm² e AD ÷ AB = 1/4. Qual a área (cm²) de ADE?', a: 5, ph: 'cm²', hint: 'k² = 1/16.', sol: '<p>$80 ÷ 16 = 5$.</p>' },
    { tag: 'Lagoa', q: 'AB ∥ CD, CD = 10 m, PA = 8 m e PD = 2 m (P entre A e D). Quanto mede AB (m)?', a: 40, ph: 'm', hint: 'AB = 4 · CD.', sol: '<p>$40$ m.</p>' },
    { tag: 'Altura', q: 'Triângulos semelhantes de razão 2/5. A altura do maior é 15 cm. Qual a do menor (cm)?', a: 6, ph: 'cm', hint: '15 · 2/5.', sol: '<p>$6$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Teorema Fundamental da Semelhança', accent: 'primary', icon: 'triangle',
  aulas: [['Aula 67', 'Teorema Fundamental da Semelhança', 'aula-teorema-fundamental-da-semelhanca.html']],
  enem: 'Teorema Fundamental da Semelhança no estilo ENEM', cria: 'O que a razão multiplica?', pratica: 'Teorema Fundamental: trilha de desafios'
}, pages };
