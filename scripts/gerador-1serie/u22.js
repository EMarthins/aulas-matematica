// Unidade 22 — Congruência de triângulos: casos LLL, LAL, ALA e LAAo (aulas 63 a 66)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { svg, ln, ci, dot, tx, txu, poli, vert, medida, reto, arco, igual, cen, mid } = require('./geo.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'congruencia-de-triangulos', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u22', BRAND = 'Congruência de Triângulos', CAP = 'Aulas 63 a 66';
const pages = [];

// ---------- figuras ----------
const triCong = (() => {
  const A = [30, 130], B = [140, 130], C = [95, 40], D = [220, 130], E = [330, 130], F = [285, 40];
  const c1 = cen([A, B, C]), c2 = cen([D, E, F]);
  let s = poli([A, B, C]) + poli([D, E, F], 'var(--growth)', 'var(--growth-soft)');
  s += igual(A, B, 1) + igual(B, C, 2) + igual(C, A, 3) + igual(D, E, 1) + igual(E, F, 2) + igual(F, D, 3);
  s += vert(A, 'A', c1) + vert(B, 'B', c1) + vert(C, 'C', c1) + vert(D, 'D', c2) + vert(E, 'E', c2) + vert(F, 'F', c2);
  return svg(360, 160, s, '440px');
})();
const lal = (() => {
  const A = [40, 130], B = [200, 130], C = [120, 30], c = cen([A, B, C]);
  let s = poli([A, B, C]) + igual(A, B, 1) + igual(A, C, 2) + arco(A, B, C, 'α', 26);
  s += vert(A, 'A', c) + vert(B, 'B', c) + vert(C, 'C', c) + medida(A, B, 'AB', c, 16) + medida(A, C, 'AC', c, 16);
  return svg(260, 160, s, '300px');
})();
const para = (() => {
  const A = [40, 130], B = [230, 130], C = [310, 40], D = [120, 40], E = [175, 85];
  let s = poli([A, B, C, D], 'var(--ink-soft)', 'none', 2.2) + ln(A[0], A[1], C[0], C[1], 'var(--primary)', 2) + ln(B[0], B[1], D[0], D[1], 'var(--growth)', 2) + dot(E[0], E[1], 'var(--decay)');
  s += igual(A, E, 1) + igual(E, C, 1) + igual(B, E, 2, 'var(--growth)') + igual(E, D, 2, 'var(--growth)');
  s += txu(24, 146, 'A', 'var(--ink)', 13) + txu(236, 146, 'B', 'var(--ink)', 13) + txu(326, 38, 'C', 'var(--ink)', 13) + txu(106, 34, 'D', 'var(--ink)', 13) + txu(188, 82, 'E', 'var(--decay)', 13);
  return svg(350, 160, s, '400px');
})();

// ===================== AULA 1: LLL e LAL =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 63 e 64', h1: 'Congruência de triângulos: <span style="color:var(--primary);">casos LLL e LAL</span>',
  sub: 'Duas folhas de caderno têm a mesma forma e o mesmo tamanho: são congruentes. Para triângulos, não é preciso medir tudo: poucos dados já garantem que são “cópias exatas”.',
  badges: [['LLL: 3 lados'], ['LAL: 2 lados + ângulo entre eles', 'growth'], ['mesma área e perímetro', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Quando dois triângulos são cópias exatas.', [
  ['Congruência', 'mesma forma e mesmo tamanho', 'bulb'],
  ['Caso LLL', 'três lados iguais', 'chart'],
  ['Construção', 'dois círculos e um ponto de encontro', 'link'],
  ['Caso LAL', 'ângulo entre os dois lados', 'target'],
  ['Aplicações', 'paralelogramos e medidas desconhecidas', 'scale']
]));
a.push(objetivosSlide([
  'Definir <strong>polígonos congruentes</strong> e relacioná-los a <strong>transformações</strong> (reflexão, rotação, translação).',
  'Aplicar os casos <strong>LLL</strong> e <strong>LAL</strong> de congruência de triângulos.',
  'Usar a congruência para achar <strong>medidas desconhecidas</strong>, perímetros e áreas.',
  'Justificar que <strong>diagonais</strong> dividem paralelogramos em triângulos congruentes.'
], 'Dica', 'Na hora de justificar, escreva os <strong>pares de partes iguais</strong> (lado = lado, ângulo = ângulo) e diga o <strong>caso</strong> usado: “por LAL, △ABC ≅ △DEF”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Dois objetos de mesma forma e tamanho', `
          ${lede('Duas folhas de caderno, dois azulejos, dois cartões iguais: você consegue <strong>sobrepor</strong> um ao outro e eles coincidem. Isso é <strong>congruência</strong>. Em polígonos: lados e ângulos correspondentes com as <strong>mesmas medidas</strong>. Os egípcios já usavam essas ideias na construção civil.')}
          <div class="grid2" style="margin-top:6px;">
            ${triCong}
            ${mini('Se $△ABC ≅ △DEF$ e $AB = 6$ cm, então $DE$ vale:', ['3 cm', '6 cm', '12 cm', 'não dá para saber'], 1, 'Triângulos congruentes têm lados correspondentes <strong>iguais</strong>: $DE = AB = 6$ cm. (Se fossem só semelhantes, poderia ser outro valor.)')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · congruência e o caso LLL', 'Três lados iguais bastam', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Congruentes</strong> ($≅$): mesma forma e mesmo tamanho; um se obtém do outro por <strong>reflexão, rotação ou translação</strong>.</li>
                <li>Lados e ângulos correspondentes são <strong>iguais</strong>; áreas e perímetros também.</li>
                <li><strong>Caso LLL</strong>: se os três lados de um triângulo são iguais aos três lados de outro, os triângulos são congruentes.</li>
                <li>Existência: só há triângulo se cada lado for <strong>menor que a soma</strong> dos outros dois.</li>
                <li>Congruência é semelhança com <strong>razão $k = 1$</strong>.</li>
              </ul>
            </div>
            ${W.box('Construa pelo LLL', W.row(W.nm('t1-a', 'Lado a', 6, 'any'), W.nm('t1-b', 'Lado b', 4, 'any'), W.nm('t1-c', 'Lado c', 3, 'any')) + W.svg('t1-s', '0 0 360 190', '380px') + W.txt('t1-v', 'Existe o triângulo? ') + W.txt('t1-g', 'Ângulos: ') + W.txt('t1-r', 'Perímetro e área: ') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Construindo com régua e compasso', 'Como construir o triângulo de lados $6$ cm, $4$ cm e $3$ cm?', [
  ['Base', 'Desenhe o segmento de $6$ cm e marque as extremidades $A$ e $B$.'],
  ['Dois círculos', 'Com centro em $A$, raio $4$ cm; com centro em $B$, raio $3$ cm.'],
  ['O vértice C', 'Os círculos se cortam em dois pontos, $C$ e $C′$ (simétricos em relação à base): os triângulos $ABC$ e $ABC′$ são congruentes por <strong>LLL</strong> (lado $AB$ comum, $AC = AC′ = 4$, $BC = BC′ = 3$).']
], 'Com três lados dados, o triângulo fica <strong>determinado</strong> (a menos de posição): não há dois triângulos diferentes.'));

a.push(sl('Teoria · caso LAL', 'Dois lados e o ângulo entre eles', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Caso LAL</strong>: dois lados e o <strong>ângulo compreendido entre eles</strong> iguais ⇒ triângulos congruentes.</li>
                <li>O ângulo precisa estar <strong>entre</strong> os dois lados (na figura, $α$ está entre $AB$ e $AC$).</li>
                <li>Do vértice de um vulcão a dois pontos acessíveis: com os dois lados e o ângulo entre eles, <strong>calculamos o terceiro lado</strong> sem medi-lo.</li>
                <li>Consequência: $BC$, os outros dois ângulos, a área e o perímetro ficam determinados.</li>
              </ul>
            </div>
            ${lal}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valor de x e perímetro', 'Os triângulos $CME$ e $PUE$ são congruentes por LAL, com $CE = 2x + 7$ e $PE = 21$ (lados correspondentes), $CM = 16$ cm e $ME = UE = 7$ cm. Determine $x$ e o perímetro de $PUE$.', [
  ['Lados correspondentes', '$CE = PE$ ⇒ $2x + 7 = 21$ ⇒ $2x = 14$ ⇒ $x = 7$.'],
  ['Lado que falta', '$PU = CM = 16$ cm (lados correspondentes).'],
  ['Perímetro', '$21 + 7 + 16 = 44$ cm.']
], '$x = 7$ e o perímetro de $PUE$ é <strong>44 cm</strong> (o mesmo de $CME$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'As diagonais de um paralelogramo', 'As diagonais de um paralelogramo se cortam no ponto $E$, que é ponto médio de cada uma. Explique por que $△BEC ≅ △DEA$.', [
  ['Lados iguais', '$BE = DE$ e $CE = AE$ (pontos médios).'],
  ['Ângulo entre eles', '$∠BEC = ∠DEA$ (ângulos opostos pelo vértice).'],
  ['Conclusão', 'Dois lados e o ângulo entre eles iguais: congruentes por <strong>LAL</strong>.']
], 'Logo $BC = DA$, e os lados opostos do paralelogramo são iguais.', 'growth'));
a.push(sl('Figura', 'Diagonais e pontos médios', `
          <div class="grid2">
            ${para}
            <div>
              ${callout('Marcas iguais', 'Um tracinho: $AE = EC$. Dois tracinhos: $BE = ED$. Os ângulos em $E$ opostos pelo vértice também são iguais.', 'success')}
              ${callout('Aplicação', 'Os triângulos $AEB$ e $CED$ também são congruentes (LAL): assim se prova que $AB = CD$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(pratique('Medidas correspondentes', 'Os triângulos de lados $5$, $7$ e $x$ e de lados $5$, $y$ e $9$ são congruentes (LLL). O valor de $x + y$ é:',
  ['12', '14', '16', '18', '21'], 2,
  'Os conjuntos de lados coincidem: $\\{5, 7, x\\} = \\{5, y, 9\\}$ ⇒ $x = 9$ e $y = 7$. $x + y = 16$. <strong>Alternativa C.</strong>'));
a.push(pratique('Perímetro', 'Os triângulos ABC e DEF são congruentes por LAL, com $AB = DE = 5$ cm, $AC = DF = 7$ cm e $BC = 6$ cm. O perímetro de DEF é:',
  ['12 cm', '15 cm', '18 cm', '21 cm', '24 cm'], 2,
  '$EF = BC = 6$ (lados correspondentes). Perímetro $= 5 + 7 + 6 = 18$ cm. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Qual é o caso?', 'No paralelogramo ABCD, as diagonais se cortam em E. Os triângulos BEC e DEA são congruentes pelo caso:',
  ['LLL', 'LAL', 'ALA', 'LAAo', 'AAA'], 1,
  '$BE = DE$ e $CE = AE$ (as diagonais se bissectam) e o ângulo entre eles é igual (opostos pelo vértice): <strong>LAL</strong>. <strong>Alternativa B.</strong> (AAA nunca garante congruência.)'));

a.push(armadilhas('Cuidados', 'Onde LLL e LAL enganam', [
  ['Ângulo fora de lugar', 'No LAL o ângulo está <strong>entre</strong> os dois lados. Com o ângulo oposto a um deles (LLA), o caso <strong>não vale</strong>.'],
  ['Achar que 3 ângulos bastam', 'Triângulos com ângulos iguais podem ter tamanhos diferentes (são semelhantes, não congruentes).'],
  ['Trocar a ordem dos vértices', '$△ABC ≅ △DEF$ significa $A↔D$, $B↔E$, $C↔F$.'],
  ['Lados que não fecham', 'Se um lado é maior ou igual à soma dos outros dois, não existe o triângulo.']
]));
a.push(quiz([
  { q: 'Triângulos com os três lados iguais são congruentes pelo caso:', o: ['LAL', 'LLL', 'ALA', 'AAA'], a: 1 },
  { q: 'No caso LAL, o ângulo deve estar:', o: ['entre os dois lados', 'oposto a um dos lados', 'em qualquer lugar', 'fora do triângulo'], a: 0 },
  { q: 'Triângulos congruentes têm sempre:', o: ['mesma área e mesmo perímetro', 'apenas mesma área', 'apenas mesmo perímetro', 'lados diferentes'], a: 0 },
  { q: 'Existe triângulo de lados 2, 3 e 7?', o: ['sim', 'não'], a: 1 }
]));
a.push(fechamento([
  ['Congruência', 'Mesma forma e tamanho: partes correspondentes iguais.'],
  ['LLL', 'Três lados iguais.'],
  ['LAL', 'Dois lados e o ângulo entre eles.']
], 'Liste os pares de partes iguais e diga qual caso foi usado.'));

pages.push({ out: BASE + 'aula-1-casos-lll-e-lal.html', html: K.deck({
  title: 'Congruência: casos LLL e LAL — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 63 e 64 · Casos LLL e LAL', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}); }
  bind(['t1-a', 't1-b', 't1-c'], function(){ var a = +$('t1-a').value, b = +$('t1-b').value, c = +$('t1-c').value, s = $('t1-s'); s.innerHTML = '';
    if(![a, b, c].every(isFinite) || a <= 0 || b <= 0 || c <= 0){ $('t1-v').textContent = 'use medidas positivas'; $('t1-g').textContent = ''; $('t1-r').textContent = ''; return; }
    if(a >= b + c || b >= a + c || c >= a + b){ $('t1-v').textContent = 'não existe: um lado é maior ou igual à soma dos outros'; $('t1-g').textContent = ''; $('t1-r').textContent = ''; $('t1-h').textContent = 'Desigualdade triangular: cada lado precisa ser menor que a soma dos outros dois.'; return; }
    var x = (b * b + c * c - a * a) / (2 * c), y = Math.sqrt(Math.max(0, b * b - x * x)), sc = Math.min(300 / (Math.max(c, x, c - x) + 0.01), 140 / y, 300 / c), A = [30, 165], B = [30 + c * sc, 165], C = [30 + x * sc, 165 - y * sc];
    var off = (360 - Math.max(B[0], C[0]) - 30) / 2; [A, B, C].forEach(function(q){ q[0] += off; });
    el('polygon', {points: [A, B, C].map(function(q){ return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, s);
    [[A, 'A'], [B, 'B'], [C, 'C']].forEach(function(q){ var t = el('text', {x: q[0][0], y: q[0][1] + (q[1] === 'C' ? -8 : 16), 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = q[1]; });
    var ang = function(p1, q1, r1){ return Math.acos((p1 * p1 + q1 * q1 - r1 * r1) / (2 * p1 * q1)) * 180 / Math.PI; }, Aa = ang(b, c, a), Bb = ang(a, c, b), Cc = ang(a, b, c), sp = (a + b + c) / 2, area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    $('t1-v').textContent = 'sim (a = ' + pt(a) + ', b = ' + pt(b) + ', c = ' + pt(c) + ')'; $('t1-g').textContent = 'A ≈ ' + pt(Aa, 1) + '° · B ≈ ' + pt(Bb, 1) + '° · C ≈ ' + pt(Cc, 1) + '°'; $('t1-r').textContent = 'perímetro ' + pt(a + b + c) + ' · área ≈ ' + pt(area);
    $('t1-h').textContent = 'Os três lados já determinam os ângulos: qualquer outro triângulo com esses lados é congruente (LLL).'; });`
}) });

// ===================== AULA 2: ALA e LAAo =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 65 e 66', h1: 'Congruência: <span style="color:var(--growth);">casos ALA e LAAo, e o que não funciona</span>',
  sub: 'Dois ângulos e um lado também determinam um triângulo — seja o lado entre os ângulos (ALA) ou oposto a um deles (LAAo). Mas três ângulos ou dois lados e um ângulo qualquer não bastam.',
  badges: [['ALA'], ['LAAo', 'growth'], ['AAA e LLA: não', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Os quatro casos e os dois impostores.', [
  ['ALA', 'ângulo, lado entre eles, ângulo', 'bulb'],
  ['LAAo', 'lado, ângulo adjacente e ângulo oposto', 'chart'],
  ['Os quatro casos', 'LLL, LAL, ALA, LAAo', 'target'],
  ['Não garantem', 'AAA e LLA', 'link'],
  ['Aplicações', 'isósceles e quadrados', 'scale']
]));
b.push(objetivosSlide([
  'Aplicar os casos <strong>ALA</strong> e <strong>LAAo</strong>.',
  'Reconhecer os <strong>quatro casos</strong> de congruência de triângulos.',
  'Explicar por que <strong>AAA</strong> e <strong>LLA</strong> <strong>não</strong> garantem congruência.',
  'Usar congruência em <strong>triângulos isósceles</strong> e em <strong>quadrados</strong>.'
], 'Dica', 'Com dois ângulos iguais, o terceiro também é igual (soma $180°$). Por isso LAAo vira ALA: basta <strong>um lado correspondente</strong> junto com dois ângulos.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Incongruência é incoerência?', `
          ${lede('“Incongruente” lembra “absurdo”, “contradição”. Em Geometria, dois triângulos são <strong>incongruentes</strong> quando não podem coincidir. Existem apenas <strong>quatro</strong> conjuntos de dados que garantem congruência — e entender por que os outros não servem evita erros de justificativa.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Dois triângulos têm os três ângulos iguais (60°, 60°, 60°), mas lados de 3 cm e de 6 cm. São:', ['congruentes', 'semelhantes, não congruentes', 'impossíveis', 'iguais em área'], 1, 'Três ângulos iguais garantem <strong>semelhança</strong> (caso AA), não congruência: a razão pode ser $k = 2$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Os casos de congruência sempre incluem <strong>pelo menos um lado</strong>: só ângulos não fixam o tamanho.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · os quatro casos', 'LLL, LAL, ALA e LAAo', `
          <div class="grid2">
            <div>
              ${tbl(['Caso', 'Dados iguais', 'Garante?'], [['LLL', 'três lados', 'sim'], ['LAL', 'dois lados e o ângulo entre eles', 'sim'], ['ALA', 'dois ângulos e o lado entre eles', 'sim'], ['LAAo', 'um lado, um ângulo adjacente e o ângulo oposto a ele', 'sim'], ['AAA', 'três ângulos', 'não (só semelhança)'], ['LLA', 'dois lados e um ângulo não compreendido', 'não']])}
            </div>
            ${W.box('Estes dados garantem congruência?', W.sel('c1-q', 'Dados iguais nos dois triângulos', ['três lados (LLL)', 'dois lados e o ângulo entre eles (LAL)', 'dois ângulos e o lado entre eles (ALA)', 'dois ângulos e um lado não adjacente (LAAo)', 'três ângulos (AAA)', 'dois lados e um ângulo não compreendido (LLA)'], 0) + W.txt('c1-v', 'Veredito: ') + W.txt('c1-m', 'Motivo: ') + W.hint('c1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Dois ângulos e um lado', 'No triângulo $△GHI$ e no triângulo $△KJI$, tem-se $\∠H = \∠J$, $HI = IJ = 30$ cm e $∠GIH = ∠KIJ$ (ângulos opostos pelo vértice). Os triângulos são congruentes?', [
  ['Ângulo', '$\∠H = \∠J$.'],
  ['Lado entre os ângulos', '$HI = IJ = 30$ cm (lado adjacente aos dois ângulos).'],
  ['Ângulo', '$∠GIH = ∠KIJ$ (opostos pelo vértice).']
], 'Ângulo, lado, ângulo: congruentes por <strong>ALA</strong>. Logo $GH = KJ$ e $GI = KI$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'O triângulo isósceles', 'No triângulo isósceles $ABC$ de base $BC$, $AH$ é a altura relativa à base. Mostre que $△AHB ≅ △AHC$ e conclua sobre $BH$ e $HC$.', [
  ['Lados', '$AB = AC$ (isósceles) e $AH$ é <strong>comum</strong>.'],
  ['Ângulos', 'Os ângulos em $H$ são retos ($90°$); os ângulos da base $\∠B = \∠C$.'],
  ['Caso', 'Hipotenusa e cateto, ou LAAo ($\∠B = \∠C$, $\∠H = 90°$, $AH$ comum): $△AHB ≅ △AHC$.']
], '$BH = HC$: a altura relativa à base de um triângulo isósceles é também <strong>mediana</strong> (e bissetriz).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Por que AAA não basta', 'Dois triângulos equiláteros, um de lado 3 cm e outro de lado 6 cm, têm os três ângulos iguais ($60°$). São congruentes?', [
  ['Compare os ângulos', 'Todos iguais: $60°$, $60°$, $60°$.'],
  ['Compare os lados', '$3 ≠ 6$: os tamanhos diferem.'],
  ['Conclusão', 'Têm a mesma forma (semelhantes, $k = 2$) mas <strong>não</strong> o mesmo tamanho.']
], 'Não são congruentes: <strong>AAA não garante congruência</strong>.', 'growth'));

b.push(pratique('Qual caso?', 'Dois triângulos têm $AB = DE = 6$ cm, $\∠B = \∠E = 40°$ e $\∠A = \∠D = 70°$. Eles são congruentes pelo caso:',
  ['LLL', 'LAL', 'ALA', 'LAAo', 'não necessariamente congruentes'], 2,
  'O lado $AB$ está <strong>entre</strong> os ângulos $A$ e $B$ (e $DE$ entre $D$ e $E$): <strong>ALA</strong>. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Isósceles', 'No triângulo isósceles ABC de base BC, a altura AH divide a base. Se $BH = 5$ cm, a base BC mede:',
  ['5 cm', '7,5 cm', '10 cm', '12 cm', '15 cm'], 2,
  '$△AHB ≅ △AHC$ ⇒ $HC = BH = 5$. $BC = 10$ cm. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('O que garante congruência?', 'Em qual das situações os dois triângulos <strong>necessariamente</strong> são congruentes?',
  ['os três ângulos são iguais', 'dois lados e um ângulo oposto a um deles são iguais', 'os três lados são iguais', 'apenas um lado e um ângulo são iguais', 'a área e um ângulo são iguais'], 2,
  'Só LLL (três lados) está entre as alternativas dos quatro casos. AAA dá semelhança; LLA não garante; um lado e um ângulo, ou área e um ângulo, não fixam o triângulo. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde ALA e LAAo enganam', [
  ['AAA ≠ congruência', 'Mesmos ângulos ⇒ semelhantes; pode haver razão $k ≠ 1$.'],
  ['LLA não vale', 'Dois lados e um ângulo <strong>não compreendido</strong> podem formar dois triângulos diferentes.'],
  ['Ângulos “iguais” só porque a figura parece', 'Use apenas o que o enunciado informa ou o que se prova (ângulos opostos pelo vértice, base de isósceles).'],
  ['Esquecer o lado', 'Em ALA e LAAo é indispensável <strong>um lado</strong> correspondente igual.']
]));
b.push(quiz([
  { q: 'Dois ângulos e o lado entre eles iguais: caso', o: ['LLL', 'LAL', 'ALA', 'AAA'], a: 2 },
  { q: 'Os três ângulos iguais garantem:', o: ['congruência', 'semelhança', 'mesma área', 'mesmo perímetro'], a: 1 },
  { q: 'No triângulo isósceles, a altura relativa à base:', o: ['é igual aos lados', 'divide a base em duas partes iguais', 'é maior que a base', 'mede 90°'], a: 1 },
  { q: 'Qual caso NÃO existe?', o: ['LAL', 'ALA', 'LAAo', 'LLA'], a: 3 }
]));
b.push(fechamento([
  ['Quatro casos', 'LLL, LAL, ALA e LAAo.'],
  ['Não valem', 'AAA (só semelhança) e LLA.'],
  ['Aplicação', 'Isósceles: altura = mediana; paralelogramo: diagonais.']
], 'Sempre há um lado entre os dados que garantem congruência.'));

pages.push({ out: BASE + 'aula-2-casos-ala-e-laao.html', html: K.deck({
  title: 'Congruência: casos ALA e LAAo — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 65 e 66 · Casos ALA e LAAo', slides: b,
  extra: WJS + BIND + String.raw`
  var MOT = [['sim', 'Três lados iguais fixam todos os ângulos: LLL.'], ['sim', 'O ângulo entre os dois lados fecha o triângulo: LAL.'], ['sim', 'O lado entre os ângulos e os ângulos formam um único triângulo: ALA.'], ['sim', 'Com dois ângulos o terceiro também é igual (soma 180°); sobra um lado correspondente: LAAo.'], ['não', 'Só garante semelhança: o tamanho pode mudar (k ≠ 1).'], ['não', 'O ângulo não compreendido pode gerar dois triângulos diferentes (caso ambíguo).']];
  function caso(){ var k = +$('c1-q').value; $('c1-v').textContent = MOT[k][0]; $('c1-m').textContent = MOT[k][1]; $('c1-h').textContent = MOT[k][0] === 'sim' ? 'Você pode escrever: “por ' + ['LLL', 'LAL', 'ALA', 'LAAo'][k] + ', os triângulos são congruentes”.' : 'Não use este critério como justificativa de congruência.'; }
  $('c1-q').addEventListener('change', caso); caso();`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Congruência de triângulos: <span>os quatro casos</span>',
  lede: 'LLL, LAL, ALA e LAAo garantem que dois triângulos são cópias exatas; AAA e LLA não. Aplicações em medidas desconhecidas, paralelogramos e triângulos isósceles.',
  badges: ['LLL', 'LAL', 'ALA', 'LAAo'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Congruência', 'Mesma forma e tamanho', 'chart', 'primary', p('Lados e ângulos correspondentes iguais; mesma área e perímetro.') + call('Notação', '△ABC ≅ △DEF: A↔D, B↔E, C↔F.', 'success')],
    ['LLL e LAL', 'Lados', 'target', 'growth', li(['LLL: três lados.', 'LAL: dois lados e o ângulo ENTRE eles.', 'Existência: cada lado < soma dos outros.'])],
    ['ALA e LAAo', 'Ângulos e um lado', 'link', 'decay', li(['ALA: lado entre os ângulos.', 'LAAo: lado, ângulo adjacente e oposto.', 'O 3º ângulo vem da soma 180°.'])],
    ['O que não vale', 'AAA e LLA', 'scale', 'success', p('AAA ⇒ semelhantes (k pode ser ≠ 1). LLA ⇒ caso ambíguo.') + call('Dica', 'Procure sempre um lado nos dados.', 'success')],
    ['Aplicações', 'Medidas e provas', 'up', 'primary', li(['Paralelogramo: diagonais se bissectam (LAL).', 'Isósceles: altura = mediana.', 'Quadrados: triângulos congruentes por ALA.'])],
    ['Justificar', 'Escreva os pares', 'check', 'growth', li(['Lado = lado, ângulo = ângulo.', 'Diga o caso.', 'Conclua as outras partes.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar AAA como congruência.', 'Ângulo fora do lugar no LAL.', 'Trocar a ordem dos vértices.', 'Confiar no desenho sem prova.', 'Esquecer a desigualdade triangular.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Congruência de triângulos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: LLL, caso ALA, perímetro por LAL, paralelogramo e triângulo isósceles.',
  final: 'Pares de partes iguais + o caso certo = congruência justificada.',
  questions: [
    { badge: 'Estilo ENEM · LLL', text: 'Os triângulos de lados $5$, $7$ e $x$ e de lados $5$, $y$ e $9$ são congruentes.', cmd: 'O valor de $x + y$ é:', opts: ['12', '14', '16', '18', '21'], a: 2,
      sol: '<p>Os lados coincidem dois a dois: $x = 9$ e $y = 7$. Soma $16$.</p>' },
    { badge: 'Estilo ENEM · caso ALA', text: 'Dois triângulos têm $AB = DE = 6$ cm, $\∠B = \∠E = 40°$ e $\∠A = \∠D = 70°$.', cmd: 'Eles são congruentes pelo caso:', opts: ['LLL', 'LAL', 'ALA', 'LAAo', 'não necessariamente congruentes'], a: 2,
      sol: '<p>O lado $AB$ está entre os ângulos $A$ e $B$: ALA.</p>' },
    { badge: 'Estilo ENEM · perímetro', text: 'Os triângulos ABC e DEF são congruentes por LAL, com $AB = DE = 5$ cm, $AC = DF = 7$ cm e $BC = 6$ cm.', cmd: 'O perímetro de DEF é:', opts: ['12 cm', '15 cm', '18 cm', '21 cm', '24 cm'], a: 2,
      sol: '<p>$EF = BC = 6$. Perímetro $= 5 + 7 + 6 = 18$ cm.</p>' },
    { badge: 'Estilo ENEM · paralelogramo', text: 'No paralelogramo ABCD, as diagonais se cortam em E (ponto médio de cada uma).', cmd: 'Os triângulos BEC e DEA são congruentes pelo caso:', opts: ['LLL', 'LAL', 'ALA', 'LAAo', 'AAA'], a: 1,
      sol: '<p>$BE = DE$, $CE = AE$ e os ângulos em $E$ são opostos pelo vértice: LAL.</p>' },
    { badge: 'Estilo ENEM · isósceles', text: 'No triângulo isósceles ABC de base BC, a altura AH tem pé em H e $BH = 5$ cm.', cmd: 'A base BC mede:', opts: ['5 cm', '7,5 cm', '10 cm', '12 cm', '15 cm'], a: 2,
      sol: '<p>$△AHB ≅ △AHC$ ⇒ $HC = BH = 5$; $BC = 10$ cm.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">congruência</span>',
  subtitle: 'Julgue as afirmações sobre os casos de congruência.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Os quatro casos têm sempre um lado; AAA e LLA não bastam.',
    afirmacoes: [
      ['Dois triângulos com os três ângulos iguais são sempre congruentes.', false, 'Falsa: AAA garante apenas <strong>semelhança</strong> (a razão pode ser diferente de 1).'],
      ['Triângulos com os três lados respectivamente iguais são congruentes (LLL).', true, 'Verdadeira: três lados determinam o triângulo.'],
      ['Dois lados e um ângulo qualquer iguais (LLA) garantem congruência.', false, 'Falsa: se o ângulo não está entre os lados, podem existir dois triângulos diferentes.'],
      ['No caso LAL, o ângulo deve estar entre os dois lados.', true, 'Verdadeira: é o ângulo compreendido entre os lados.'],
      ['Triângulos congruentes têm a mesma área e o mesmo perímetro.', true, 'Verdadeira: lados e ângulos iguais.'],
      ['Dois ângulos e um lado iguais (ALA ou LAAo) garantem congruência.', true, 'Verdadeira: o terceiro ângulo também é igual, e o lado fixa o tamanho.'],
      ['“Congruentes” e “semelhantes” significam a mesma coisa.', false, 'Falsa: congruentes são semelhantes com razão $k = 1$; semelhantes podem ter razão qualquer.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Congruência de triângulos: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de medidas em triângulos congruentes. Digite o número pedido.',
  final: 'Você percorreu a trilha: lados, perímetro, base, ângulo e área.',
  problems: [
    { tag: 'LLL', q: 'Triângulos de lados $5, 7, x$ e $5, y, 9$ são congruentes. Quanto vale $x + y$?', a: 16, ph: 'x + y', hint: 'x = 9 e y = 7.', sol: '<p>$9 + 7 = 16$.</p>' },
    { tag: 'LAL', q: 'Triângulos congruentes com $AB = 5$, $AC = 7$ e $BC = 6$ cm. Qual o perímetro (cm) de qualquer um deles?', a: 18, ph: 'cm', hint: 'Some os três lados.', sol: '<p>$5 + 7 + 6 = 18$.</p>' },
    { tag: 'Isósceles', q: 'No isósceles de base BC, a altura AH cai em H com BH = 5 cm. Quanto mede BC (cm)?', a: 10, ph: 'cm', hint: 'BH = HC.', sol: '<p>$BC = 10$.</p>' },
    { tag: 'Ângulos', q: 'Dois triângulos congruentes têm ângulos de 40° e 70°. Qual o terceiro ângulo (graus)?', a: 70, ph: 'graus', hint: '180 − 40 − 70.', sol: '<p>$70°$.</p>' },
    { tag: 'Área', q: 'Um triângulo retângulo de catetos 6 cm e 8 cm é congruente a outro. Qual a área (cm²) do outro?', a: 24, ph: 'cm²', hint: '6 · 8 ÷ 2.', sol: '<p>$24$ cm².</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Congruência de Triângulos', accent: 'growth', icon: 'triangle',
  aulas: [['Aulas 63–64', 'Casos LLL e LAL', 'aula-1-casos-lll-e-lal.html'], ['Aulas 65–66', 'Casos ALA e LAAo', 'aula-2-casos-ala-e-laao.html']],
  enem: 'Congruência de triângulos no estilo ENEM', cria: 'Verdadeiro ou falso: congruência', pratica: 'Congruência de triângulos: trilha de desafios'
}, pages };
