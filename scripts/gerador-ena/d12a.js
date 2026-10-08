// Unidade 12 — Geometria plana · Aula 1: ângulos, semelhança e triângulos retângulos (capítulo 12)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, svg, ln, pg, ci, dot, tx, txu, rect, rightMark, ink, soft, pri, gro, dec, suc, dan } = K;
const DIR = 'ena-profmat/12-geometria-plana/';
const a = [];

// ---------- figuras estáticas ----------
const figMetricas = svg(320, 200, [
  pg([[30, 170], [290, 170], [110, 50]], 'none', ink, 2.5),
  ln(110, 50, 110, 170, dec, 2.5), rightMark(110, 170, 1, -1, 12),
  dot(110, 50, gro, 4), tx(110, 40, 'A', ink, 15), tx(22, 186, 'B', ink, 15), tx(298, 186, 'C', ink, 15), tx(110, 188, 'H', ink, 15),
  tx(60, 188, 'm', pri, 14), tx(200, 188, 'n', pri, 14), tx(94, 112, 'h', dec, 14, 'end'), tx(55, 100, 'c', ink, 15), tx(215, 100, 'b', ink, 15), tx(160, 205, 'a = m + n', soft, 13)
].join(''), '340px');
const fig30 = svg(460, 200, [
  pg([[30, 170], [203, 170], [203, 70]], 'none', pri, 2.5), rightMark(203, 170, -1, -1, 12),
  tx(116, 188, 'x√3', ink, 15), tx(222, 125, 'x', ink, 15), tx(100, 110, '2x', ink, 15, 'end'), txu(60, 164, '30°', gro, 12), txu(188, 90, '60°', gro, 12, 'end'),
  pg([[290, 170], [390, 170], [390, 70]], 'none', gro, 2.5), rightMark(390, 170, -1, -1, 12), tx(340, 188, 'x', ink, 15), tx(408, 125, 'x', ink, 15), tx(325, 110, 'x√2', ink, 15, 'end'), txu(312, 164, '45°', pri, 12), txu(380, 88, '45°', pri, 12, 'end')
].join(''), '480px');
const figInscrito = svg(300, 200, [
  ci(120, 100, 80, 'none', soft, 2), ln(40, 100, 200, 100, ink, 2.5), ln(40, 100, 147, 25, ink, 2.5), ln(147, 25, 200, 100, ink, 2.5), ln(120, 100, 147, 25, dec, 2, 'stroke-dasharray="5 4"'),
  dot(120, 100, gro, 4), tx(120, 120, 'O', ink, 14), tx(30, 108, 'A', ink, 15), tx(212, 108, 'B', ink, 15), tx(152, 18, 'C', ink, 15), tx(147, 70, 'r', dec, 13, 'start'), rightMark(147, 25, -1, 1, 11)
].join(''), '300px');
// trapézio ABCD (ENA 2025 Q21): B=(0,0), A=(5,0), C=(0,4), D=(3,4); E = ponto médio de AD
const P = (x, y) => [40 + 34 * x, 175 - 34 * y];
const figTrap = (() => { const A = P(5, 0), B = P(0, 0), C = P(0, 4), D = P(3, 4), E = P(4, 2);
  return svg(260, 200, [pg([A, B, C, D], 'none', ink, 2.5), ln(...B, ...D, dec, 2, 'stroke-dasharray="6 4"'), ln(...B, ...E, gro, 2.5), dot(...E, gro, 4),
    tx(A[0] + 10, A[1] + 6, 'A'), tx(B[0] - 10, B[1] + 6, 'B'), tx(C[0] - 10, C[1] - 2, 'C'), tx(D[0] + 6, D[1] - 8, 'D'), tx(E[0] + 12, E[1] - 2, 'E', gro), tx((A[0] + B[0]) / 2, B[1] + 18, '5', soft, 13), tx(D[0] / 2 + C[0] / 2, C[1] - 8, '3', soft, 13), tx(B[0] - 14, (B[1] + C[1]) / 2, '4', soft, 13), rightMark(B[0], B[1], 1, -1, 11), rightMark(C[0], C[1], 1, 1, 11)].join(''), '280px'); })();
// quadrado ABCD de lado 3 (ENA 2025 Q14)
const Q = (x, y) => [40 + 62 * x, 190 - 62 * y];
const figQuad = (() => { const A = Q(0, 0), B = Q(3, 0), C = Q(3, 3), D = Q(0, 3), E = Q(2, 0), Fp = Q(3, 2), G = Q(18 / 13, 12 / 13);
  return svg(260, 220, [pg([A, B, C, D], 'none', ink, 2.5), ln(...D, ...E, pri, 2.5), ln(...A, ...Fp, gro, 2.5), dot(...G, dan, 4.5),
    tx(A[0] - 10, A[1] + 14, 'A'), tx(B[0] + 12, B[1] + 14, 'B'), tx(C[0] + 12, C[1] - 2, 'C'), tx(D[0] - 10, D[1] - 4, 'D'), tx(E[0], E[1] + 17, 'E', pri), tx(Fp[0] + 14, Fp[1] + 4, 'F', gro), tx(G[0] + 14, G[1] - 8, 'G', dan)].join(''), '270px'); })();

a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 12 · Aula 1', h1: 'Geometria plana: <span style="color:var(--primary);">ângulos, semelhança e triângulos retângulos</span>',
  sub: 'O maior bloco da prova (10 de 60 questões). Aqui o essencial: soma de ângulos, congruência e semelhança, Pitágoras, relações métricas e os triângulos notáveis 30-60-90 e 45-45-90.',
  badges: [['10 questões em 60'], ['a² = b² + c²', 'growth'], ['razão k: lados ×k, áreas ×k²', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Três aulas de geometria plana: esta é a das ferramentas básicas.', [
  ['Método geral', 'figura, triângulos retângulos, semelhança, coordenadas', 'bulb'],
  ['Ângulos', 'triângulo, polígonos, paralelas e círculo', 'scale'],
  ['Congruência e semelhança', 'casos, Tales, bissetriz, razões k, k², k³', 'link'],
  ['Triângulos retângulos', 'Pitágoras, relações métricas, 30-60-90 e 45-45-90', 'triangle'],
  ['Questões que já caíram', 'ENA 2025 Q21 (trapézio) e Q14 (quadrado)', 'target']
]));
a.push(objetivosSlide([
  'Calcular <strong>ângulos</strong> em triângulos, polígonos e circunferências.',
  'Usar <strong>semelhança</strong> e a razão $k$ (lados $×k$, áreas $×k^2$, volumes $×k^3$).',
  'Aplicar <strong>Pitágoras</strong>, as <strong>relações métricas</strong> do triângulo retângulo e os triângulos notáveis.',
  'Resolver problemas com <strong>figura</strong>, <strong>semelhança</strong> ou <strong>coordenadas</strong>.'
], 'Em prova', 'Faça uma figura grande, nomeie todos os dados e procure triângulos retângulos e semelhantes. Se travar, use coordenadas.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A escada e o terno 3-4-5', `
          ${lede('Uma escada de <strong>5 m</strong> está apoiada em uma parede com a base a <strong>3 m</strong> da parede. A que altura ela toca a parede?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A altura atingida na parede é:', ['2 m', '4 m', '√34 m', '8 m'], 1, 'A escada é a hipotenusa: $5^2 = 3^2 + h^2 ⇒ h^2 = 16 ⇒ h = 4$. É o terno pitagórico <strong>3-4-5</strong>, que aparece o tempo todo em prova.')}
            ${card('<strong>Método geral</strong><p style="font-size:.9rem;margin-top:8px;">1) Figura grande com todos os dados. 2) Procure <strong>triângulos retângulos</strong> (Pitágoras, 3-4-5, 30-60-90). 3) Procure <strong>triângulos semelhantes</strong>. 4) Áreas por subtração. 5) Se travar: <strong>coordenadas</strong>.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · ângulos', 'Ângulos em triângulos, polígonos e circunferências', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.9rem;line-height:1.6;">
                <li>Triângulo: soma dos ângulos internos $= 180^∘$; ângulo <strong>externo</strong> $=$ soma dos dois internos não adjacentes.</li>
                <li>Polígono de $n$ lados: soma interna $= (n − 2)·180^∘$; soma externa $= 360^∘$; diagonais $= {n(n − 3)|2}$; regular: interno $= {(n − 2)·180^∘|n}$.</li>
                <li>Paralelas cortadas por transversal: alternos internos iguais, correspondentes iguais, colaterais somam $180^∘$.</li>
                <li>Circunferência: ângulo <strong>inscrito</strong> $= ½$ do arco (ou do ângulo central); o que “enxerga” o diâmetro mede $90^∘$.</li>
              </ul>
            </div>
            ${W.box('Polígono regular de n lados', W.rg('g1-n', 'n', 3, 12, 1, 6) + W.svg('g1-s', '0 0 240 170') + W.txt('g1-t', '') + W.hint('g1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · semelhança', 'Congruência, semelhança e a razão k', `
          <div class="grid2">
            <div>
              ${tbl(['Tópico', 'Resumo'], [['Congruência', 'LAL, ALA, LLL, LAAo'], ['Semelhança', 'AA (dois ângulos), LAL (dois lados proporcionais e ângulo entre eles), LLL'], ['Razão $k$', 'lados $×k$, perímetros $×k$, <strong>áreas $×k^2$</strong>, volumes $×k^3$'], ['Tales', 'paralelas cortando transversais: segmentos proporcionais'], ['Bissetriz interna', '${BD|DC} = {AB|AC}$']])}
            </div>
            ${W.box('Razão de semelhança', W.rg('g2-k', 'k (em décimos)', 5, 30, 1, 20) + W.svg('g2-s', '0 0 260 170') + W.txt('g2-t', '') + W.hint('g2-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · Pitágoras', 'O teorema e os ternos que se repetem', `
          ${lede('Em um triângulo retângulo de catetos $b, c$ e hipotenusa $a$: <strong>$a^2 = b^2 + c^2$</strong>. Ternos pitagóricos (e múltiplos): $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$, $(20,21,29)$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Catetos → hipotenusa', W.row(W.nm('g3-b', 'cateto b', 6, 1, 'min="1"'), W.nm('g3-c', 'cateto c', 8, 1, 'min="1"')) + W.svg('g3-s', '0 0 260 170', '210px') + W.txt('g3-t', '') + W.hint('g3-h'))}
            ${callout('Dica', 'Se os lados estão em PA, o triângulo retângulo é $3k, 4k, 5k$. E se as medidas já lembram um terno, evite a conta de raiz.', 'success')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · relações métricas', 'A altura relativa à hipotenusa', `
          <div class="grid2">
            <div>
              ${figMetricas}
            </div>
            <div>
              ${F('h^2 = m·n   b^2 = a·m   c^2 = a·n   b·c = a·h')}
              ${callout('Raios', 'Circunraio $R = {a|2}$ (a hipotenusa é diâmetro; a mediana relativa a ela mede $a/2$). Inraio $r = {b + c − a|2}$.', 'success')}
              ${W.box('Triângulo de catetos b e c', W.row(W.nm('g4-b', 'b', 6, 1, 'min="1"'), W.nm('g4-c', 'c', 8, 1, 'min="1"')) + W.txt('g4-r', '') + W.hint('g4-h'))}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Triângulos notáveis', '30-60-90 e 45-45-90', `
          ${fig30}
          <div class="grid2" style="margin-top:6px;">
            ${callout('30-60-90', 'Lados $x, x√3, 2x$. O cateto oposto a $30^∘$ é <strong>metade da hipotenusa</strong>.', 'success')}
            ${callout('45-45-90', 'Lados $x, x, x√2$. A diagonal do quadrado de lado $x$ é $x√2$.', 'success')}
          </div>
          ${W.box('Triângulo notável', W.sel('g5-t', 'Tipo', ['30-60-90', '45-45-90'], 0) + W.rg('g5-x', 'x', 1, 12, 1, 4) + W.txt('g5-r', ''))}`, { cls: '' }));

a.push(sl('Triângulo retângulo inscrito', 'A hipotenusa é o diâmetro', `
          <div class="grid2">
            <div>${figInscrito}</div>
            <div>
              ${lede('Um triângulo retângulo inscrito em uma circunferência tem a <strong>hipotenusa como diâmetro</strong> (ângulo inscrito que enxerga o diâmetro é $90^∘$). Logo:')}
              <ul class="plain" style="font-size:.92rem;line-height:1.7;"><li>circunraio $R = a/2$;</li><li>a <strong>mediana</strong> da hipotenusa mede $a/2$ ($OC = r$);</li><li>a altura relativa à hipotenusa é no máximo o raio.</li></ul>
              ${callout('Treino 12.3', 'Catetos 6 e 8: hipotenusa $10$; altura $h = {6·8|10} = 4,8$; circunraio $5$; inraio $(6 + 8 − 10)/2 = 2$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Questão que já caiu · figura', 'ENA 2025 Q21: o trapézio com ângulos retos', `
          <div class="grid2">
            <div>${figTrap}</div>
            <div>
              ${lede('Trapézio $ABCD$: bases $AB = 5$ e $CD = 3$, altura $BC = 4$ (ângulos retos em $B$ e $C$). $E$ é o pé da perpendicular de $B$ sobre $AD$. Qual a razão ${BE|AD}$? <span class="hint">(figura reconstruída a partir da resolução oficial)</span>')}
              ${mini('A razão BE/AD vale:', ['1/2', '1', '√5/2', '2'], 1, '$BD^2 = BC^2 + CD^2 = 16 + 9 = 25 ⇒ BD = 5 = AB$: o triângulo $ABD$ é <strong>isósceles</strong> e $E$ é ponto médio de $AD$. Com $M$ tal que $ABCM$ é retângulo: $AM = 4$, $MD = 5 − 3 = 2$, $AD^2 = 16 + 4 = 20$, $AD = 2√5$ e $ED = √5$. Em $BED$: $BE^2 = 25 − 5 = 20 ⇒ BE = 2√5$. Razão $= 1$. <strong>Alternativa B.</strong>')}
            </div>
          </div>`, { cls: 'growth' }));

a.push(sl('Questão que já caiu · coordenadas', 'ENA 2025 Q14: o quadrado e o ponto G', `
          <div class="grid2">
            <div>${figQuad}</div>
            <div>
              ${lede('$ABCD$ é um quadrado de lado 3; $E ∈ AB$ e $F ∈ BC$ com $AE = BF = 2$; $G$ é a interseção de $DE$ com $AF$. Qual a medida de $EG$?')}
              ${mini('EG mede:', ['${2|√13}$', '${3|√13}$', '${5|√13}$', '${6|√13}$', '${4|√13}$'], 4, 'Por semelhança: $ED = √{9 + 4} = √{13}$; $DAE ≅ ABF$ (LAL), então $∠ADE = ∠BAF$ e $DAE ∼ AGE$ (AA): ${EA|EG} = {ED|EA} ⇒ EG = {4|√13}$. <strong>Por coordenadas</strong>: $A = (0,0)$, $E = (2,0)$, $F = (3,2)$, $D = (0,3)$; $AF: y = {2|3}x$; $DE: y = 3 − {3|2}x$ → $G = ({18|13}, {12|13})$ e $EG = {√{208}|13} = {4|√13}$ ✓. <strong>Alternativa E.</strong>')}
            </div>
          </div>`, { cls: 'growth' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em geometria plana', [
  ['Razão $k$ de lados × de áreas', 'A razão de semelhança $k$ vale para lados; <strong>áreas usam $k^2$</strong>, volumes $k^3$.'],
  ['Altura × lado inclinado', 'Em trapézios retângulos use a altura (lado perpendicular às bases), não o lado inclinado.'],
  ['Equilátero', 'A altura é ${l√3|2}$, não ${l|2}√2$.'],
  ['Figura sem dados nomeados', 'Faça uma figura grande, nomeie tudo e marque ângulos retos. Na dúvida, use coordenadas.']
]));

a.push(quiz([
  { q: 'Um triângulo retângulo tem catetos 6 e 8. A altura relativa à hipotenusa mede:', o: ['4', '4,8', '5', '6'], a: 1 },
  { q: 'A soma dos ângulos internos de um polígono regular de 12 lados é:', o: ['1440°', '1800°', '2160°', '1620°'], a: 1 },
  { q: 'Dois triângulos semelhantes têm lados na razão 2 : 3 e o menor tem área 20. A área do maior é:', o: ['30', '40', '45', '60'], a: 2 },
  { q: 'O cateto oposto ao ângulo de 30° em um triângulo retângulo de hipotenusa 14 mede:', o: ['7', '14√3/2', '7√3', '14'], a: 0 }
]));
a.push(fechamento([
  ['Ângulos', 'Triângulo $180^∘$; polígono $(n − 2)·180^∘$; inscrito $= ½$ do arco.'],
  ['Semelhança', 'Razão $k$: lados $×k$, áreas $×k^2$, volumes $×k^3$.'],
  ['Retângulo', '$a^2 = b^2 + c^2$; $h^2 = mn$; 30-60-90: $x, x√3, 2x$; 45-45-90: $x, x, x√2$.']
], 'Figura, triângulos retângulos, semelhança — e coordenadas se travar.'));

module.exports = [{ out: DIR + 'aula-1-angulos-semelhanca-triangulos.html', html: K.deck({
  title: 'Geometria plana: ângulos, semelhança e triângulos retângulos — ENA · PROFMAT', brand: 'Geometria Plana', key: 'c12a1', meta: 'Capítulo 12 · Aula 1 · Ângulos e triângulos', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['g1-n'], function(){ var n = +$('g1-n').value; $('g1-nv').textContent = n; var svg = $('g1-s'); svg.innerHTML = ''; var pts = [], cx = 120, cy = 85, R = 70; for(var i = 0; i < n; i++){ var t = -Math.PI / 2 + 2 * Math.PI * i / n; pts.push([cx + R * Math.cos(t), cy + R * Math.sin(t)]); } el('polygon', {points: pts.map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary)', 'fill-opacity': .15, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); for(var i = 0; i < n; i++) for(var j = i + 2; j < n; j++){ if(i === 0 && j === n - 1) continue; el('line', {x1: pts[i][0], y1: pts[i][1], x2: pts[j][0], y2: pts[j][1], stroke: 'var(--growth)', 'stroke-opacity': .45, 'stroke-width': 1}, svg); } $('g1-t').textContent = 'Soma interna ' + (n - 2) * 180 + '° · ângulo interno ' + nf((n - 2) * 180 / n, 3) + '° · externo ' + nf(360 / n, 3) + '° · diagonais ' + n * (n - 3) / 2; $('g1-h').textContent = 'Treino 12.7: n = 12 → interno 150°; hexágono tem 9 diagonais.'; });
  bind(['g2-k'], function(){ var k = +$('g2-k').value / 10; $('g2-kv').textContent = nf(k, 1); var svg = $('g2-s'); svg.innerHTML = ''; var b = 60, h = 50, s = Math.min(k, 3); el('polygon', {points: '20,150 ' + (20 + b) + ',150 20,' + (150 - h), fill: 'var(--primary)', 'fill-opacity': .25, stroke: 'var(--primary)', 'stroke-width': 2}, svg); var W2 = Math.min(b * s, 200), H2 = Math.min(h * s, 130); el('polygon', {points: '100,150 ' + (100 + W2) + ',150 100,' + (150 - H2), fill: 'var(--growth)', 'fill-opacity': .22, stroke: 'var(--growth)', 'stroke-width': 2}, svg); $('g2-t').textContent = 'k = ' + nf(k, 1) + ' → lados ×' + nf(k, 1) + ' · perímetro ×' + nf(k, 1) + ' · área ×' + nf(k * k, 2) + ' · volume ×' + nf(k * k * k, 2); $('g2-h').textContent = 'Treino 12.4: k = 3/2, área menor 20 → maior ' + nf(20 * 2.25, 1) + '.'; });
  bind(['g3-b', 'g3-c'], function(){ var b = +$('g3-b').value, c = +$('g3-c').value; if(b < 1 || c < 1) return; var a = Math.sqrt(b * b + c * c), svg = $('g3-s'); svg.innerHTML = ''; var s = 120 / Math.max(b, c), x1 = 40, y1 = 150, x2 = 40 + b * s, y2 = y1, x3 = x2, y3 = y1 - c * s; el('polygon', {points: x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3, fill: 'var(--primary)', 'fill-opacity': .2, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); [['b = ' + b, (x1 + x2) / 2, y1 + 14], ['c = ' + c, x2 + 6, (y2 + y3) / 2], ['a = ' + nf(a, 3), (x1 + x3) / 2 - 20, (y1 + y3) / 2 - 6]].forEach(function(t){ var e = el('text', {x: t[1], y: t[2], 'font-size': 12, fill: 'var(--ink)', 'font-weight': 700}, svg); e.textContent = t[0]; }); $('g3-t').textContent = 'a = √(' + b + '² + ' + c + '²) = √' + (b * b + c * c) + ' = ' + nf(a, 4); $('g3-h').textContent = Number.isInteger(a) ? '✔ Terno pitagórico (' + b + ', ' + c + ', ' + a + ').' : 'Não é terno inteiro.'; });
  bind(['g4-b', 'g4-c'], function(){ var b = +$('g4-b').value, c = +$('g4-c').value; if(b < 1 || c < 1) return; var a = Math.sqrt(b * b + c * c), h = b * c / a, m = c * c / a, n = b * b / a; $('g4-r').textContent = 'a = ' + nf(a, 3) + ' · h = bc/a = ' + nf(h, 3) + ' · projeções ' + nf(m, 3) + ' e ' + nf(n, 3) + ' (soma ' + nf(m + n, 3) + ') · h² = mn: ' + nf(h * h, 3) + ' = ' + nf(m * n, 3) + ' · R = a/2 = ' + nf(a / 2, 3) + ' · r = (b + c − a)/2 = ' + nf((b + c - a) / 2, 3); $('g4-h').textContent = 'Para 6 e 8: a = 10, h = 4,8, R = 5, r = 2.'; });
  bind(['g5-t', 'g5-x'], function(){ var t = +$('g5-t').value, x = +$('g5-x').value; $('g5-xv').textContent = x; $('g5-r').textContent = t === 0 ? 'Lados: x = ' + x + ' (cateto oposto a 30°) · x√3 = ' + nf(x * Math.sqrt(3), 3) + ' · hipotenusa 2x = ' + 2 * x : 'Catetos: ' + x + ' e ' + x + ' · hipotenusa x√2 = ' + nf(x * Math.SQRT2, 3); });`
}) }];
