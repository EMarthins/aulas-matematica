// Unidade 19 — Triângulos: congruência e semelhança (edital: item j)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, svg, ln, pg, ci, dot, tx, txu, rect, rightMark, ink, soft, pri, gro, dec, suc, dan, vfBlock } = K;
const DIR = 'ena-profmat/19-congruencia-semelhanca/';
const out = [];

// figuras
const figMed = (() => { const A = [110, 25], B = [25, 170], C = [270, 170], mAB = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], mBC = [(B[0] + C[0]) / 2, 170], mAC = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2], G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  return svg(300, 195, [pg([A, B, C], 'none', ink, 2.5), ln(...A, ...mBC, pri, 2, 'stroke-dasharray="5 4"'), ln(...B, ...mAC, gro, 2, 'stroke-dasharray="5 4"'), ln(...C, ...mAB, dec, 2, 'stroke-dasharray="5 4"'), dot(...G, dan, 5), tx(A[0], A[1] - 8, 'A'), tx(B[0] - 10, B[1] + 6, 'B'), tx(C[0] + 10, C[1] + 6, 'C'), tx(mBC[0], mBC[1] + 16, 'M', pri, 13), tx(G[0] + 14, G[1] - 4, 'G', dan, 14)].join(''), '320px'); })();
const figIsos = svg(240, 170, [pg([[20, 150], [220, 150], [120, 25]], 'none', ink, 2.5), ln(120, 25, 120, 150, dec, 2, 'stroke-dasharray="5 4"'), rightMark(120, 150, 1, -1, 11), tx(120, 16, 'A'), tx(12, 160, 'B'), tx(228, 160, 'C'), tx(120, 166, 'M', dec, 13), txu(52, 142, 'β', gro, 13), txu(190, 142, 'β', gro, 13)].join(''), '260px');

// ====================== AULA 1: congruência ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Triângulos · Aula 1', h1: 'Triângulos: <span style="color:var(--primary);">existência, congruência e pontos notáveis</span>',
  sub: 'Desigualdade triangular, classificação, ângulos, os casos de congruência (LAL, ALA, LLL, LAAo, cateto–hipotenusa), triângulos isósceles e equiláteros, medianas, alturas, bissetrizes e os pontos notáveis.',
  badges: [['Edital: triângulos, congruências'], ['LAL · ALA · LLL · LAAo', 'growth'], ['baricentro 2 : 1', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da pergunta “existe esse triângulo?” até “por que dois triângulos são iguais?”.', [
  ['Existência e classificação', 'desigualdade triangular; por lados e por ângulos', 'triangle'],
  ['Ângulos', 'soma 180° e ângulo externo', 'scale'],
  ['Congruência', 'casos LAL, ALA, LLL, LAAo e cateto–hipotenusa', 'check'],
  ['Isósceles e equilátero', 'ângulos da base e a mediana que é tudo ao mesmo tempo', 'polygon'],
  ['Segmentos e pontos notáveis', 'baricentro, incentro, circuncentro, ortocentro', 'target'],
  ['Uso em prova', 'ENA 2025 Q14: DAE ≅ ABF (LAL)', 'bulb']
]));
a.push(objetivosSlide([
  'Decidir se três medidas formam um triângulo e <strong>classificá-lo</strong> por lados e por ângulos.',
  'Aplicar os <strong>casos de congruência</strong> e reconhecer o que <strong>não</strong> é caso (AAA, LLA).',
  'Usar as propriedades dos triângulos <strong>isósceles e equiláteros</strong>.',
  'Localizar e usar os <strong>pontos notáveis</strong> (principalmente o baricentro).'
], 'No edital', 'Item “j — triângulos: congruências e semelhanças”. Congruência é a justificativa de “são iguais”; semelhança (aula 2) é a de “são proporcionais”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Existe um triângulo de lados 3, 4 e 8?', `
          ${lede('Três varetas de <strong>3 cm, 4 cm e 8 cm</strong>: dá para formar um triângulo?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Resposta correta:', ['Sim, é um triângulo escaleno', 'Sim, é um triângulo retângulo', 'Não: $3 + 4 < 8$', 'Não: os lados precisam ser iguais'], 2, '<strong>Desigualdade triangular</strong>: cada lado deve ser menor que a soma dos outros dois. Aqui $3 + 4 = 7 < 8$: as varetas de 3 e 4 não conseguem “fechar” o triângulo com a de 8.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em todo triângulo: $∣b − c∣ < a < b + c$. O maior lado é oposto ao maior ângulo.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · classificação', 'Existência e classificação de um triângulo', `
          <div class="grid2">
            <div>
              ${tbl(['Por lados', 'Por ângulos'], [['Equilátero: 3 lados iguais', 'Acutângulo: 3 ângulos agudos ($c^2 < a^2 + b^2$)'], ['Isósceles: 2 lados iguais', 'Retângulo: um ângulo reto ($c^2 = a^2 + b^2$)'], ['Escaleno: 3 lados diferentes', 'Obtusângulo: um ângulo obtuso ($c^2 > a^2 + b^2$)']])}
              ${callout('Ângulos', 'Soma dos internos $= 180^∘$. Ângulo <strong>externo</strong> = soma dos dois internos não adjacentes. Maior lado ↔ maior ângulo.', 'success')}
            </div>
            ${W.box('Três lados', W.row(W.nm('c1-a', 'a', 3), W.nm('c1-b', 'b', 4), W.nm('c1-c', 'c', 5)) + W.txt('c1-e', '') + W.txt('c1-l', '') + W.txt('c1-g', '') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · congruência', 'Os casos de congruência', `
          <div class="grid2">
            <div>
              ${tbl(['Caso', 'O que precisa ser igual'], [['LAL', 'dois lados e o <strong>ângulo entre eles</strong>'], ['ALA', 'dois ângulos e o <strong>lado entre eles</strong>'], ['LLL', 'os três lados'], ['LAAo', 'um lado, um ângulo adjacente e o ângulo oposto a ele'], ['Cat–Hip', 'hipotenusa e um cateto (triângulos retângulos)']])}
            </div>
            <div>
              ${callout('O que NÃO é caso', '<strong>AAA</strong> (três ângulos): dá triângulos <em>semelhantes</em>, não necessariamente iguais. <strong>LLA</strong> (dois lados e um ângulo <em>não</em> compreendido): pode dar dois triângulos diferentes.', 'danger')}
              ${mini('Dois triângulos têm os três ângulos respectivamente iguais. Eles são:', ['sempre congruentes', 'sempre semelhantes', 'sempre iguais em área', 'sempre isósceles'], 1, 'AAA é o caso de <strong>semelhança</strong> (AA basta). Para congruir, é preciso também um lado.')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Teoria · isósceles', 'Isósceles e equilátero: ângulos e a mediana “tudo em um”', `
          <div class="grid2">
            <div>${figIsos}</div>
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.7;">
                <li><strong>Isósceles</strong> ($AB = AC$): os ângulos da base são iguais (ângulo $B$ = ângulo $C$) e vale a recíproca.</li>
                <li>No isósceles, a <strong>mediana</strong> da base é também <strong>altura</strong>, <strong>bissetriz</strong> do vértice e parte da <strong>mediatriz</strong>.</li>
                <li><strong>Equilátero</strong>: três ângulos de $60^∘$; altura $h = {l√3|2}$.</li>
              </ul>
              ${callout('Prova (LLL)', 'Os triângulos $ABM$ e $ACM$ têm $AB = AC$, $BM = MC$ e $AM$ comum: são congruentes (LLL) ⇒ ângulos da base iguais e $AM ⟂ BC$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Pontos notáveis', 'Medianas, alturas, bissetrizes e mediatrizes se encontram', `
          <div class="grid2">
            <div>${figMed}</div>
            <div>
              ${tbl(['Ponto', 'Encontro de', 'Propriedade'], [['Baricentro (G)', 'medianas', 'divide cada mediana na razão $2 : 1$ (a partir do vértice)'], ['Incentro (I)', 'bissetrizes', 'equidista dos lados: centro do círculo inscrito'], ['Circuncentro (O)', 'mediatrizes', 'equidista dos vértices: centro do círculo circunscrito'], ['Ortocentro (H)', 'alturas', '—']])}
              ${callout('No equilátero', 'Os quatro pontos coincidem. No retângulo, o circuncentro é o ponto médio da hipotenusa.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Ferramenta', 'Pontos notáveis de um triângulo com coordenadas', `
          ${lede('Mexa nos vértices e veja baricentro, circuncentro, incentro e ortocentro (todos calculados). Note que $G$ fica sempre a $2/3$ da mediana, a partir do vértice.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Vértices A, B, C', W.row(W.nm('c2-ax', 'A: x', 0), W.nm('c2-ay', 'A: y', 6)) + W.row(W.nm('c2-bx', 'B: x', -4), W.nm('c2-by', 'B: y', 0)) + W.row(W.nm('c2-cx', 'C: x', 6), W.nm('c2-cy', 'C: y', 0)) + W.svg('c2-s', '0 0 320 200', '340px') + W.txt('c2-t', '') + W.hint('c2-h'))}
            ${callout('Fórmulas', 'Baricentro: $G = {A + B + C|3}$. Incentro: $I = {aA + bB + cC|a + b + c}$ ($a, b, c$ lados opostos). Euler: $H = A + B + C − 2O$ (vetores).', 'success')}
          </div>`, { cls: '' }));

a.push(ja('ENA 2025 · Q14', 'Congruência dentro de uma questão de prova',
  '$ABCD$ é um quadrado de lado 3; $E ∈ AB$ e $F ∈ BC$ com $AE = BF = 2$; $G$ é a interseção de $DE$ com $AF$. Qual a medida de $EG$?',
  ['${2|√13}$', '${3|√13}$', '${5|√13}$', '${6|√13}$', '${4|√13}$'], 4,
  'Os triângulos $DAE$ e $ABF$ são <strong>congruentes por LAL</strong> ($DA = AB = 3$, ângulo $DAE$ = ângulo $ABF$ = $90^∘$, $AE = BF = 2$). Logo ângulo $ADE$ = ângulo $BAF$ e, no triângulo $AGE$, o ângulo em $G$ é reto. Como $DAE ∼ AGE$ (AA): ${EA|EG} = {ED|EA}$ com $ED = √{13}$ ⇒ $EG = {4|√13}$. <strong>Alternativa E.</strong>'));

a.push(exemplo('Uso prático', 'Mostre que as diagonais de um retângulo são iguais', 'Seja $ABCD$ um retângulo. Mostre que $AC = BD$.', [
  ['Escolha os triângulos', '$ABC$ e $BAD$ (compartilham o lado $AB$)'],
  ['Compare', '$AB$ comum; $BC = AD$ (lados opostos); $∠ABC = ∠BAD = 90^∘$'],
  ['Caso LAL', '$ABC ≅ BAD$ ⇒ $AC = BD$ (lados correspondentes)']
], 'As diagonais do retângulo são iguais (e, no mesmo raciocínio, o triângulo $ABC$ com $B$ reto tem mediana $= $ metade da hipotenusa).', 'primary'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em triângulos', [
  ['“AAA” como congruência', 'Três ângulos iguais dão <strong>semelhança</strong>, não congruência.'],
  ['“LLA” como caso', 'Dois lados e um ângulo que <strong>não</strong> está entre eles não garante congruência (exceto em triângulos retângulos, que é o caso cateto–hipotenusa).'],
  ['Esquecer a desigualdade triangular', 'Antes de calcular, veja se o triângulo existe: o maior lado tem de ser menor que a soma dos outros.'],
  ['Baricentro 1 : 2', 'O baricentro está a <strong>2/3</strong> da mediana a partir do vértice (e 1/3 a partir do lado).']
]));

a.push(quiz([
  { q: 'Podem formar um triângulo as medidas:', o: ['3, 4, 8', '5, 5, 11', '6, 8, 10', '2, 3, 6'], a: 2 },
  { q: 'Em um triângulo isósceles, o ângulo do vértice mede 40°. Cada ângulo da base mede:', o: ['40°', '60°', '70°', '140°'], a: 2 },
  { q: 'Qual NÃO é caso de congruência de triângulos?', o: ['LAL', 'ALA', 'LLL', 'AAA'], a: 3 },
  { q: 'O baricentro divide uma mediana de 12 cm em partes de:', o: ['6 e 6', '4 e 8', '3 e 9', '2 e 10'], a: 1 }
]));
a.push(fechamento([
  ['Existência', 'Cada lado menor que a soma dos outros dois; maior lado ↔ maior ângulo.'],
  ['Congruência', 'LAL, ALA, LLL, LAAo, cateto–hipotenusa. AAA e LLA não valem.'],
  ['Notáveis', 'Baricentro 2 : 1; incentro (inscrito); circuncentro (circunscrito).']
], 'Congruência justifica “são iguais”; é o primeiro argumento de muita prova.'));

out.push({ out: DIR + 'aula-1-triangulos-congruencia-pontos-notaveis.html', html: K.deck({
  title: 'Triângulos: existência, congruência e pontos notáveis — ENA · PROFMAT', brand: 'Triângulos', key: 'c19a1', meta: 'Triângulos · Aula 1 · Congruência', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['c1-a', 'c1-b', 'c1-c'], function(){ var L = [+$('c1-a').value, +$('c1-b').value, +$('c1-c').value].sort(function(x, y){ return x - y; }); if(L[0] <= 0){ $('c1-e').textContent = 'Use medidas positivas.'; return; } var ok = L[0] + L[1] > L[2]; $('c1-e').textContent = ok ? 'Existe: ' + L[0] + ' + ' + L[1] + ' = ' + (L[0] + L[1]) + ' > ' + L[2] : 'Não existe: ' + L[0] + ' + ' + L[1] + ' = ' + (L[0] + L[1]) + ' ≤ ' + L[2]; if(!ok){ $('c1-l').textContent = ''; $('c1-g').textContent = ''; $('c1-h').textContent = 'Desigualdade triangular violada.'; return; } $('c1-l').textContent = 'Por lados: ' + (L[0] === L[2] ? 'equilátero' : (L[0] === L[1] || L[1] === L[2]) ? 'isósceles' : 'escaleno'); var d = L[2] * L[2], s = L[0] * L[0] + L[1] * L[1]; $('c1-g').textContent = 'Por ângulos: ' + (Math.abs(d - s) < 1e-9 ? 'retângulo' : d < s ? 'acutângulo' : 'obtusângulo') + ' (c² = ' + nf(d, 3) + ' × a² + b² = ' + nf(s, 3) + ')'; $('c1-h').textContent = 'Teste 3, 4, 5 (retângulo), 5, 5, 8 (obtusângulo) e 6, 6, 6 (equilátero).'; });
  bind(['c2-ax', 'c2-ay', 'c2-bx', 'c2-by', 'c2-cx', 'c2-cy'], function(){ var A = [+$('c2-ax').value, +$('c2-ay').value], B = [+$('c2-bx').value, +$('c2-by').value], C = [+$('c2-cx').value, +$('c2-cy').value], svg = $('c2-s'), P = plano(svg, -10, 10, -4, 12, 320, 200, 0); var D = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1])); if(Math.abs(D) < 1e-9){ $('c2-t').textContent = 'Pontos colineares: não há triângulo.'; $('c2-h').textContent = ''; return; } var a = Math.hypot(B[0] - C[0], B[1] - C[1]), b = Math.hypot(A[0] - C[0], A[1] - C[1]), c = Math.hypot(A[0] - B[0], A[1] - B[1]), G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3], I = [(a * A[0] + b * B[0] + c * C[0]) / (a + b + c), (a * A[1] + b * B[1] + c * C[1]) / (a + b + c)], ux = ((A[0] * A[0] + A[1] * A[1]) * (B[1] - C[1]) + (B[0] * B[0] + B[1] * B[1]) * (C[1] - A[1]) + (C[0] * C[0] + C[1] * C[1]) * (A[1] - B[1])) / D, uy = ((A[0] * A[0] + A[1] * A[1]) * (C[0] - B[0]) + (B[0] * B[0] + B[1] * B[1]) * (A[0] - C[0]) + (C[0] * C[0] + C[1] * C[1]) * (B[0] - A[0])) / D, O = [ux, uy], H = [A[0] + B[0] + C[0] - 2 * ux, A[1] + B[1] + C[1] - 2 * uy];
    el('polygon', {points: [A, B, C].map(function(p){ return P.sx(p[0]).toFixed(1) + ',' + P.sy(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary)', 'fill-opacity': .12, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); ponto(svg, P, G[0], G[1], 'var(--danger)', 'G'); ponto(svg, P, I[0], I[1], 'var(--success)', 'I'); ponto(svg, P, O[0], O[1], 'var(--growth)', 'O'); ponto(svg, P, H[0], H[1], 'var(--decay)', 'H');
    $('c2-t').textContent = 'G = (' + nf(G[0], 2) + '; ' + nf(G[1], 2) + ') · I = (' + nf(I[0], 2) + '; ' + nf(I[1], 2) + ') · O = (' + nf(O[0], 2) + '; ' + nf(O[1], 2) + ') · H = (' + nf(H[0], 2) + '; ' + nf(H[1], 2) + ')'; $('c2-h').textContent = 'G (vermelho), I (verde), O (laranja), H (azul-água). Para A = (0,6), B = (−4,0), C = (6,0): G = (0,67; 2).'; });`
}) });

// ====================== AULA 2: semelhança ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Triângulos · Aula 2', h1: 'Semelhança de triângulos, <span style="color:var(--growth);">Tales e bissetriz</span>',
  sub: 'Casos AA, LAL e LLL, razão de semelhança (lados, perímetros, áreas), teorema de Tales, teorema da bissetriz interna, base média e as aplicações clássicas (sombras e alturas inacessíveis).',
  badges: [['Edital: triângulos, semelhanças'], ['AA · LAL · LLL', 'growth'], ['razão k: áreas ×k²', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Proporcionalidade com figura: a ferramenta mais usada da geometria plana.', [
  ['O que é semelhança', 'ângulos iguais e lados proporcionais', 'link'],
  ['Casos AA, LAL, LLL', 'o mínimo para provar', 'check'],
  ['Teorema de Tales', 'paralela a um lado: segmentos proporcionais', 'scale'],
  ['Bissetriz interna', 'BD/DC = AB/AC', 'target'],
  ['Base média', 'metade do lado; no trapézio, a média das bases', 'chart'],
  ['Aplicações', 'sombras, alturas inacessíveis, relações métricas', 'bulb']
]));
b.push(objetivosSlide([
  'Reconhecer triângulos <strong>semelhantes</strong> e usar os casos AA, LAL e LLL.',
  'Aplicar a <strong>razão $k$</strong>: lados e perímetros $×k$, áreas $×k^2$.',
  'Usar <strong>Tales</strong>, a <strong>bissetriz interna</strong> e a <strong>base média</strong>.',
  'Resolver problemas de <strong>alturas inacessíveis</strong> e justificar as relações métricas do triângulo retângulo.'
], 'No edital', 'Semelhança é o argumento de “proporção” em geometria: aparece em quase toda questão do capítulo 12.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A altura do poste pela sombra', `
          ${lede('No mesmo instante, uma pessoa de <strong>1,8 m</strong> projeta sombra de <strong>2,4 m</strong> e um poste projeta sombra de <strong>8 m</strong>. Qual a altura do poste?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A altura do poste é:', ['4,5 m', '6 m', '7,2 m', '10,7 m'], 1, 'Os raios do Sol são paralelos: os triângulos (pessoa + sombra) e (poste + sombra) têm ângulos iguais (<strong>AA</strong>) e são semelhantes: ${H|8} = {1,8|2,4} ⇒ H = 6$ m.')}
            ${W.box('Sombras', W.row(W.nm('t2-h', 'pessoa (m)', 1.8, 0.1), W.nm('t2-s', 'sombra dela (m)', 2.4, 0.1), W.nm('t2-S', 'sombra do poste (m)', 8, 0.5)) + W.txt('t2-r', 'Altura do poste = ') + W.hint('t2-h2'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · semelhança', 'Casos e razão de semelhança', `
          <div class="grid2">
            <div>
              ${tbl(['Caso', 'Condição'], [['AA', 'dois ângulos respectivamente iguais'], ['LAL', 'dois lados proporcionais e o ângulo entre eles igual'], ['LLL', 'os três lados proporcionais']])}
              ${F('{a|a\'} = {b|b\'} = {c|c\'} = k', false)}
              ${callout('Razão k', 'Lados, alturas, medianas, perímetros: $×k$. <strong>Áreas: $×k^2$</strong>. Volumes (sólidos semelhantes): $×k^3$. (Treino 12.4: razão 2 : 3, área do menor 20 → maior $20 · {9|4} = 45$.)', 'success')}
            </div>
            ${mini('Triângulos semelhantes com razão de semelhança $3$. A razão entre as áreas é:', ['3', '6', '9', '27'], 2, 'Áreas na razão $k^2 = 3^2 = 9$. (O volume, em sólidos semelhantes, seria $k^3 = 27$.)')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teorema de Tales', 'Uma paralela a um lado “fatia” o triângulo proporcionalmente', `
          ${lede('Se $DE ∥ BC$ (com $D ∈ AB$ e $E ∈ AC$), então $ADE ∼ ABC$ (AA) e vale ${AD|AB} = {AE|AC} = {DE|BC}$ — e também ${AD|DB} = {AE|EC}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Mova a paralela DE', W.rg('t1-t', 'AD/AB (em décimos)', 1, 9, 1, 4) + W.svg('t1-s', '0 0 290 190') + W.txt('t1-r', '') + W.hint('t1-h'))}
            ${callout('Feixe de paralelas', 'Três paralelas cortadas por duas transversais determinam segmentos proporcionais: ${AB|BC} = {A\'B\'|B\'C\'}$. Ex.: $DE ∥ BC$, $AD = 3$, $DB = 2$, $BC = 10$ ⇒ ${AD|AB} = {3|5}$ ⇒ $DE = 6$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Bissetriz e base média', 'Dois teoremas que poupam semelhança', `
          <div class="grid2">
            <div>
              ${callout('Bissetriz interna', 'Se $AD$ é bissetriz do ângulo $A$ ($D ∈ BC$): ${BD|DC} = {AB|AC}$. Os segmentos são <strong>proporcionais aos lados adjacentes</strong>.', 'success')}
              ${callout('Base média', 'O segmento que une os pontos médios de dois lados é <strong>paralelo ao terceiro</strong> e mede <strong>metade</strong> dele. No trapézio, a base média mede ${B + b|2}$.')}
            </div>
            ${W.box('Bissetriz do ângulo A', W.row(W.nm('t3-a', 'BC = a', 10), W.nm('t3-b', 'AC = b', 9), W.nm('t3-c', 'AB = c', 6)) + W.txt('t3-r', '') + W.hint('t3-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Aplicação', 'Semelhança no triângulo retângulo: as relações métricas', `
          ${lede('A altura $AH$ relativa à hipotenusa divide o triângulo retângulo $ABC$ em dois triângulos <strong>semelhantes entre si e ao original</strong> (AA). Daí saem todas as relações:')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('h^2 = m·n   b^2 = a·m   c^2 = a·n   bc = ah', false)}
              ${callout('Como sair', '$ABH ∼ ABC$ dá ${c|a} = {n|c}$ ⇒ $c^2 = a·n$. $ACH ∼ ABC$ dá $b^2 = a·m$. Somando: $b^2 + c^2 = a(m + n) = a^2$ — o <strong>Teorema de Pitágoras</strong>!', 'success')}
            </div>
            ${mini('Em um triângulo retângulo de catetos 6 e 8, a altura relativa à hipotenusa mede:', ['4', '4,8', '5', '6,4'], 1, '$a = 10$ e $bc = ah ⇒ 6·8 = 10h ⇒ h = 4,8$.')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q7', 'Semelhança escondida: a área do triângulo APQ',
  'No triângulo $ABC$ (área 36), $P ∈ AC$ e $Q ∈ AB$ com $AP = 6$, $PC = 4$, $AQ = 8$ e $QB = 4$. Qual a área de $APQ$?',
  ['${72|5}$', '${36|5}$', '$16$', '$18$', '$24$'], 0,
  'Pelo ângulo comum: ${[APQ]|[ABC]} = {6·8|10·12} = {2|5}$ ⇒ $36·{2|5} = {72|5}$. <strong>Alternativa A.</strong> Pela prova: $AB = 12$, altura de $C$ em $AB$: $H = 6$; por semelhança (paralelas pelas alturas), a altura de $P$ é $h = {6|10}H = {18|5}$ e a área é ${8h|2} = {72|5}$.'));

b.push(exemplo('Treino', 'Base média no trapézio', 'Um trapézio tem bases 10 e 6. Qual o comprimento do segmento que une os pontos médios dos lados não paralelos?', [
  ['Base média', 'É paralela às bases'],
  ['Valor', '${B + b|2} = {10 + 6|2} = 8$']
], 'A base média mede <strong>8</strong>. (Se fosse um triângulo, a base média seria metade da base.)', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em semelhança', [
  ['Proporção com lados trocados', 'Associe lados <strong>correspondentes</strong> (opostos a ângulos iguais). Marque ângulos iguais antes de escrever a proporção.'],
  ['Razão k de áreas', 'Áreas na razão $k^2$ — e a razão de <strong>alturas</strong> e <strong>perímetros</strong> é $k$.'],
  ['Tales sem paralelismo', 'Só use Tales se houver retas <strong>paralelas</strong> (justifique).'],
  ['Bissetriz externa', 'O teorema acima é da bissetriz <strong>interna</strong>; não confunda com a externa.']
]));

b.push(quiz([
  { q: 'Pessoa de 1,8 m com sombra de 2,4 m; poste com sombra de 8 m. A altura do poste é:', o: ['4,5 m', '6 m', '7,2 m', '10,7 m'], a: 1 },
  { q: '$DE ∥ BC$, $AD = 3$, $DB = 2$ e $BC = 10$. A medida de $DE$ é:', o: ['4', '5', '6', '7,5'], a: 2 },
  { q: 'Em $ABC$, $AB = 6$, $AC = 9$, $BC = 10$ e $AD$ é bissetriz de $A$. A medida de $BD$ é:', o: ['3', '4', '5', '6'], a: 1 },
  { q: 'Triângulos semelhantes com razão 3; a área do menor é 4. A do maior é:', o: ['12', '16', '36', '108'], a: 2 }
]));
b.push(fechamento([
  ['Semelhança', 'AA, LAL, LLL; razão $k$: lados $×k$, áreas $×k^2$.'],
  ['Tales e bissetriz', '$DE ∥ BC$ ⇒ ${AD|AB} = {DE|BC}$; bissetriz: ${BD|DC} = {AB|AC}$.'],
  ['Retângulo', 'Semelhança dá $h^2 = mn$, $b^2 = am$, $c^2 = an$ e Pitágoras.']
], 'Marque os ângulos iguais, associe lados correspondentes e escreva a proporção.'));

out.push({ out: DIR + 'aula-2-semelhanca-tales-bissetriz.html', html: K.deck({
  title: 'Semelhança de triângulos, Tales e bissetriz — ENA · PROFMAT', brand: 'Triângulos', key: 'c19a2', meta: 'Triângulos · Aula 2 · Semelhança', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['t2-h', 't2-s', 't2-S'], function(){ var h = +$('t2-h').value, s = +$('t2-s').value, S = +$('t2-S').value; if(!s){ $('t2-r').textContent = '—'; return; } $('t2-r').textContent = nf(h * S / s, 3) + ' m'; $('t2-h2').textContent = 'H/S = h/s → H = ' + h + '·' + S + '/' + s + '.'; });
  bind(['t1-t'], function(){ var t = +$('t1-t').value / 10; $('t1-tv').textContent = nf(t, 1); var svg = $('t1-s'); svg.innerHTML = ''; var A = [110, 25], B = [25, 165], C = [265, 165], D = [A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])], E = [A[0] + t * (C[0] - A[0]), A[1] + t * (C[1] - A[1])]; el('polygon', {points: [A, B, C].map(function(p){ return p.join(','); }).join(' '), fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2.5}, svg); el('polygon', {points: [A, D, E].map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--growth)', 'fill-opacity': .3, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg); [['A', A, 0, -8], ['B', B, -10, 6], ['C', C, 10, 6], ['D', D, -12, 0], ['E', E, 12, 0]].forEach(function(p){ var e = el('text', {x: p[1][0] + p[2], y: p[1][1] + p[3], 'text-anchor': 'middle', 'font-size': 14, 'font-style': 'italic', fill: 'var(--ink)'}, svg); e.textContent = p[0]; }); $('t1-r').textContent = 'AD/AB = AE/AC = DE/BC = ' + nf(t, 2) + ' · AD/DB = ' + nf(t / (1 - t), 3) + ' · áreas: [ADE]/[ABC] = ' + nf(t * t, 3); $('t1-h').textContent = 'DE é paralela a BC; a razão de semelhança é ' + nf(t, 2) + ' e a razão das áreas é o quadrado.'; });
  bind(['t3-a', 't3-b', 't3-c'], function(){ var a = +$('t3-a').value, b = +$('t3-b').value, c = +$('t3-c').value; if(b + c <= 0) return; $('t3-r').textContent = 'BD = a·c/(b + c) = ' + nf(a * c / (b + c), 4) + ' · DC = a·b/(b + c) = ' + nf(a * b / (b + c), 4); $('t3-h').textContent = 'BD/DC = c/b = ' + nf(c / b, 4) + ' (AB/AC). Para a = 10, b = 9, c = 6: BD = 4 e DC = 6.'; });`
}) });

module.exports = out;
