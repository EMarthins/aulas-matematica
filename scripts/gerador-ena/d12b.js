// Unidade 12 — Geometria plana · Aula 2: áreas e razões de áreas (capítulo 12)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, svg, ln, pg, ci, dot, tx, txu, rect, rightMark, ink, soft, pri, gro, dec, suc, dan } = K;
const DIR = 'ena-profmat/12-geometria-plana/';
const b = [];

// figura da ENA 2025 Q7: triângulo ABC com P em AC e Q em AB
const figQ7 = (() => { const A = [80, 30], B = [30, 170], C = [250, 170], Qp = [A[0] + (B[0] - A[0]) * 8 / 12, A[1] + (B[1] - A[1]) * 8 / 12], Pp = [A[0] + (C[0] - A[0]) * 6 / 10, A[1] + (C[1] - A[1]) * 6 / 10];
  return svg(290, 200, [pg([A, B, C], 'none', ink, 2.5), pg([A, Qp, Pp], 'var(--growth)', gro, 2), ln(...Qp, ...Pp, gro, 2.5), tx(A[0], A[1] - 8, 'A'), tx(B[0] - 10, B[1] + 6, 'B'), tx(C[0] + 10, C[1] + 6, 'C'), tx(Qp[0] - 12, Qp[1], 'Q', gro), tx(Pp[0] + 12, Pp[1] - 4, 'P', gro),
    tx(Qp[0] - 20, (A[1] + Qp[1]) / 2, '8', soft, 12), tx((Qp[0] + B[0]) / 2 - 14, (Qp[1] + B[1]) / 2 + 4, '4', soft, 12), tx((A[0] + Pp[0]) / 2 + 14, (A[1] + Pp[1]) / 2 - 4, '6', soft, 12), tx((Pp[0] + C[0]) / 2 + 12, (Pp[1] + C[1]) / 2 + 4, '4', soft, 12)].join(''), '310px'); })();
// figura da ENA 2026 Q27: ABC equilátero de lado 3√2, P em AB (AP/AB = 1/3), PQ ⊥ BC, QR ⊥ AC
const figQ27 = (() => { const L = 3 * Math.SQRT2 * 46, B = [30, 185], C = [30 + L, 185], A = [30 + L / 2, 185 - L * Math.sqrt(3) / 2], Pp = [A[0] + (B[0] - A[0]) / 3, A[1] + (B[1] - A[1]) / 3], Qp = [Pp[0], 185];
  const d = [C[0] - A[0], C[1] - A[1]], t = ((Qp[0] - A[0]) * d[0] + (Qp[1] - A[1]) * d[1]) / (d[0] * d[0] + d[1] * d[1]), R = [A[0] + t * d[0], A[1] + t * d[1]];
  return svg(260, 215, [pg([A, B, C], 'none', ink, 2.5), pg([Pp, Qp, R], 'var(--growth)', gro, 2.5), tx(A[0], A[1] - 8, 'A'), tx(B[0] - 10, B[1] + 6, 'B'), tx(C[0] + 10, C[1] + 6, 'C'), tx(Pp[0] - 12, Pp[1], 'P', gro), tx(Qp[0], Qp[1] + 17, 'Q', gro), tx(R[0] + 12, R[1] - 2, 'R', gro), rightMark(Qp[0], Qp[1], 1, -1, 10)].join(''), '280px'); })();

b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 12 · Aula 2', h1: 'Áreas e <span style="color:var(--growth);">razões de áreas</span>',
  sub: 'A tabela de áreas, Heron, o truque “mesma altura → razão das bases”, ângulo comum, semelhança (k²) e áreas por subtração. Muitas questões se resolvem sem calcular a área de nenhuma figura.',
  badges: [['ENA 2025 Q7, Q29'], ['ENA 2026 Q13, Q27'], ['[APQ]/[ABC] = AP·AQ/(AB·AC)', 'growth']], color: 'growth'
}));
b.push(roteiroSlide('Calcule áreas — ou melhor, calcule só a razão entre elas.', [
  ['Tabela de áreas', 'triângulo, quadriláteros, círculo, setor, hexágono', 'chart'],
  ['Triângulo', 'bh/2, ½ab·senγ, Heron, A = pr, A = abc/(4R)', 'triangle'],
  ['Razões de áreas', 'mesma altura, ângulo comum, semelhança (ENA 2025 Q7)', 'scale'],
  ['Área por subtração', 'quadrado menos 4 triângulos (ENA 2026 Q13)', 'link'],
  ['Equilátero e razão de áreas', 'ENA 2026 Q27', 'target'],
  ['Escalas', 'dobrar lados: área ×4, volume ×8 (ENA 2025 Q29)', 'bulb']
]));
b.push(objetivosSlide([
  'Usar a <strong>tabela de áreas</strong> e as fórmulas do triângulo (base × altura, seno, Heron).',
  'Resolver problemas com <strong>razão entre áreas</strong> sem calcular áreas absolutas.',
  'Calcular áreas <strong>por subtração</strong> e por decomposição.',
  'Aplicar <strong>escalas</strong>: comprimento $×k$, área $×k^2$, volume $×k^3$.'
], 'Em prova', 'Antes de calcular uma área, pergunte: dá para só comparar as áreas? Mesma altura, ângulo comum e semelhança resolvem muita coisa.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Duplicando os lados de um retângulo', `
          ${lede('Um retângulo $a × b$ tem os dois lados <strong>duplicados</strong>: $2a × 2b$. O que acontece com a área?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A área do novo retângulo é:', ['o dobro', '3 vezes', '4 vezes', '8 vezes'], 2, '$(2a)(2b) = 4ab$: a área <strong>quadruplica</strong>. Regra geral: se os comprimentos são multiplicados por $k$, a área é multiplicada por $k^2$ e o volume por $k^3$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Comprimento $×k$ · área $×k^2$ · volume $×k^3$. Esta regra resolve a ENA 2025 Q29 e a razão de áreas de figuras semelhantes.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · tabela', 'As áreas que você precisa ter na ponta da língua', `
          <div class="grid2">
            <div>
              ${tbl(['Figura', 'Área', 'Outras'], [['Triângulo', '${b h|2} = ½ab\\ sen γ$', 'Heron; $A = pr$; $A = {abc|4R}$'], ['Equilátero', '${l^2 √3|4}$', '$h = {l√3|2}$; $r = {h|3}$, $R = {2h|3}$'], ['Quadrado', '$l^2$', 'diagonal $l√2$'], ['Retângulo', '$ab$', 'diagonal $√{a^2 + b^2}$'], ['Paralelogramo', '$bh = ab\\ sen θ$', ''], ['Losango', '${D d|2}$', 'diagonais ⟂'], ['Trapézio', '${(B + b)h|2}$', 'base média ${B + b|2}$'], ['Círculo', '$πr^2$', 'comprimento $2πr$'], ['Setor', '${θ|360^∘}πr^2 = {r^2 θ|2}$', 'arco $= rθ$ (rad)'], ['Hexágono regular', '${3 l^2 √3|2}$', '6 equiláteros']])}
            </div>
            ${W.box('Calculadora de áreas', W.sel('h1-f', 'Figura', ['Triângulo (b, h)', 'Equilátero (l)', 'Quadrado (l)', 'Retângulo (a, b)', 'Losango (D, d)', 'Trapézio (B, b, h)', 'Círculo (r)', 'Setor (r, θ°)', 'Hexágono regular (l)'], 0) + W.row(W.nm('h1-u', 'u', 6), W.nm('h1-v', 'v', 4), W.nm('h1-w', 'w', 3)) + W.txt('h1-r', 'Área = ') + W.hint('h1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · triângulo', 'Quatro jeitos de achar a área de um triângulo', `
          <div class="grid2">
            <div>
              ${F('A = {b·h|2} = ½ ab sen γ = √{p(p − a)(p − b)(p − c)} = p·r = {abc|4R}')}
              ${callout('Heron', '$p$ é o semiperímetro. Útil quando só se conhecem os três lados.', 'success')}
              ${callout('Treino 12.1', 'Equilátero com altura $6√3$: $l = 12$ e área $= {144√3|4} = 36√3$.')}
            </div>
            ${W.box('Triângulo de lados a, b, c', W.row(W.nm('h2-a', 'a', 13, 1, 'min="1"'), W.nm('h2-b', 'b', 14, 1, 'min="1"'), W.nm('h2-c', 'c', 15, 1, 'min="1"')) + W.txt('h2-p', 'Semiperímetro p = ') + W.txt('h2-A', 'Área (Heron) = ') + W.txt('h2-r', 'Inraio r = A/p; circunraio R = abc/(4A): ') + W.hint('h2-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Razões de áreas', 'Três regras que valem ouro', `
          <div class="grid3" style="margin-top:6px;">
            ${card('<strong>Mesma altura</strong><p style="font-size:.88rem;margin-top:8px;">Razão das áreas $=$ razão das <strong>bases</strong>. Mesma base: razão das alturas. Ex.: $D ∈ BC$ com $BD = 2DC$ → $[ABD] : [ADC] = 2 : 1$.</p>', 'growth')}
            ${card('<strong>Ângulo comum</strong><p style="font-size:.88rem;margin-top:8px;">Triângulos $APQ$ e $ABC$ com ângulo $A$ comum: ${[APQ]|[ABC]} = {AP·AQ|AB·AC}$.</p>', 'decay')}
            ${card('<strong>Semelhantes</strong><p style="font-size:.88rem;margin-top:8px;">Razão de semelhança $k$: razão das áreas $= k^2$ (ENA 2026 Q27).</p>', 'primary')}
          </div>
          <div class="grid2" style="margin-top:10px;">
            <div>${figQ7}</div>
            ${W.box('Ângulo comum em A', W.row(W.nm('h3-ab', 'AB', 12), W.nm('h3-ac', 'AC', 10)) + W.row(W.nm('h3-aq', 'AQ', 8), W.nm('h3-ap', 'AP', 6), W.nm('h3-s', '[ABC]', 36)) + W.txt('h3-r', '[APQ]/[ABC] = ') + W.txt('h3-a', '[APQ] = ') + W.hint('h3-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q7', 'A área do triângulo APQ',
  'No triângulo $ABC$ (área 36), $P ∈ AC$ e $Q ∈ AB$ com $AP = 6$, $PC = 4$, $AQ = 8$ e $QB = 4$. Qual a área de $APQ$?',
  ['${72|5}$', '${36|5}$', '$16$', '$18$', '$24$'], 0,
  'Atalho: ${[APQ]|[ABC]} = {AP · AQ|AC · AB} = {6 · 8|10 · 12} = {2|5}$ → $36 · {2|5} = {72|5}$. <strong>Alternativa A.</strong> Pela prova: $AB = 12$; altura de $C$ em $AB$: $H = 6$ (pois ${12H|2} = 36$); por semelhança, a altura de $P$ é $h = {6|10}H = {18|5}$; área $= {8h|2} = {72|5}$.'));

b.push(sl('Área por subtração', 'Quadrado menos 4 triângulos (ENA 2026 Q13)', `
          ${lede('O quadrado maior tem área 1. Dentro dele há <strong>quatro triângulos retângulos iguais</strong> (hipotenusa sobre os lados do quadrado maior) e um <strong>quadrado menor inclinado</strong>. Seja $a$ o cateto menor: o outro cateto é $b = √{1 − a^2}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Quadrado inclinado', W.rg('h4-a', 'cateto a', 10, 70, 1, 40) + W.svg('h4-s', '0 0 250 250', '190px') + W.txt('h4-t', '') + W.hint('h4-h'))}
            ${callout('Resolução', 'Cada triângulo tem área ${ab|2}$. Quadrado menor $= 1 − 4·{ab|2} = 1 − 2ab = 1 − 2a√{1 − a^2}$. (Também: lado $b − a$, área $(b − a)^2 = a^2 + b^2 − 2ab = 1 − 2ab$.)', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q13', 'A área do quadrado menor em função de a',
  'O quadrado maior tem área 1; dentro dele há quatro triângulos retângulos iguais (hipotenusa sobre os lados do quadrado maior) e um quadrado menor inclinado. Qual a área do quadrado menor em função do cateto $a$ destacado? (alternativas reescritas para treino)',
  ['$1 − a^2$', '$1 − 2a√{1 − a^2}$', '$1 − 4a$', '$a^2 + (1 − a^2)$', '$1 − a√{1 − a^2}$'], 1,
  'Lado do quadrado maior $= 1$ = hipotenusa de cada triângulo (congruentes por ALA). Outro cateto: $b = √{1 − a^2}$. Área de cada triângulo ${ab|2}$. Quadrado menor $= 1 − 4·{ab|2} = 1 − 2a√{1 − a^2}$. <strong>Alternativa B.</strong>'));

b.push(sl('Questão que já caiu', 'ENA 2026 Q27: triângulos equiláteros e razão de áreas', `
          <div class="grid2">
            <div>${figQ27}</div>
            <div>
              ${lede('$ABC$ é equilátero. $P ∈ AB$ com ${AP|AB} = {1|3}$. $Q ∈ BC$ com $PQ ⊥ BC$ e $R ∈ AC$ com $QR ⊥ AC$, sendo $CR = √2$. Qual a razão entre as áreas de $PQR$ e $ABC$?')}
              ${callout('Resolução', '$AP = x$, $PB = 2x$, $AB = 3x$. Em $QCR$ (reto em $R$, ângulo $C = 60^∘$): $QC = 2CR = 2√2$ e $QR = √6$. Em $PBQ$ (reto em $Q$, ângulo $B = 60^∘$): $BQ = PB·cos 60^∘ = x$. $BC = BQ + QC ⇒ 3x = x + 2√2 ⇒ x = √2$. $PQ = PB·sen 60^∘ = x√3 = √6 = QR$ e o ângulo $PQR$ mede $90^∘ − 30^∘ = 60^∘$ ⇒ $PQR$ é <strong>equilátero de lado $√6$</strong>. Lado de $ABC$: $3√2$. Razão $= (√6/(3√2))^2 = (√3/3)^2 = {1|3}$.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q27', 'A razão entre as áreas de PQR e ABC',
  'Com $ABC$ equilátero, $P ∈ AB$ ($AP/AB = 1/3$), $PQ ⊥ BC$, $QR ⊥ AC$ e $CR = √2$, qual a razão entre as áreas de $PQR$ e $ABC$?',
  ['${1|9}$', '${1|6}$', '${1|4}$', '${1|3}$', '${1|2}$'], 3,
  'Lados: $ABC$ mede $3√2$ e $PQR$ é equilátero de lado $√6$. A razão das áreas é o <strong>quadrado da razão de semelhança</strong>: $({√6|3√2})^2 = ({√3|3})^2 = {3|9} = {1|3}$. <strong>Alternativa D.</strong>'));

b.push(ja('ENA 2025 · Q29', 'Duplicar lados, perímetro e arestas',
  '<strong>I)</strong> Duplicar os lados de um retângulo duplica a área. <strong>II)</strong> Duplicar o perímetro de uma circunferência dobra o raio. <strong>III)</strong> Duplicar as arestas de um cubo duplica o volume. O que é correto?',
  ['II, apenas', 'I, apenas', 'III, apenas', 'I e II, apenas', 'II e III, apenas'], 0,
  'I) $2a·2b = 4ab$: a área quadruplica ✗. II) $C = 2πr$ é proporcional a $r$: dobrar o perímetro dobra o raio ✓. III) $(2a)^3 = 8a^3$: o volume octuplica ✗. Regra: comprimento $×k$, área $×k^2$, volume $×k^3$. <strong>Alternativa A — II, apenas.</strong>'));

b.push(exemplo('Treino 12.5 · trapézio isósceles', 'Altura e área', 'Um trapézio tem bases 10 e 6 e lados não paralelos 5 e 5 (isósceles). Calcule a altura e a área.', [
  ['Projeção de cada lado na base maior', '${10 − 6|2} = 2$'],
  ['Altura (Pitágoras)', '$h = √{5^2 − 2^2} = √{21}$'],
  ['Área', '${(10 + 6)·√{21}|2} = 8√{21}$']
], 'Altura $√{21}$ e área $8√{21}$. Lembre: use a altura, não o lado inclinado.', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em áreas', [
  ['Razão de áreas sem elevar ao quadrado', 'Semelhantes com razão $k$ têm áreas na razão $k^2$ (ex.: $2:3$ → $4:9$).'],
  ['Altura errada no trapézio', 'Use a altura (perpendicular às bases), não o lado inclinado. Em trapézio isósceles, ache-a por Pitágoras com a projeção.'],
  ['Calcular tudo quando basta comparar', 'Mesma altura → bases; ângulo comum → produto dos lados; semelhantes → $k^2$.'],
  ['Esquecer o hexágono', 'Hexágono regular = 6 equiláteros: área ${3l^2√3|2}$.']
]));

b.push(quiz([
  { q: 'Um triângulo equilátero de lado 6 tem área:', o: ['$9√3$', '$18√3$', '$6√3$', '$12√3$'], a: 0 },
  { q: 'O hexágono regular de lado 2 tem área:', o: ['$4√3$', '$6√3$', '$8√3$', '$12√3$'], a: 1 },
  { q: 'Dois triângulos têm a mesma altura e bases 2 e 5. A razão entre suas áreas é:', o: ['2 : 5', '4 : 25', '2 : 3', '5 : 2'], a: 0 },
  { q: 'Um trapézio com bases 8 e 4 e altura 5 tem área:', o: ['20', '25', '30', '60'], a: 2 }
]));
b.push(fechamento([
  ['Razões', 'Mesma altura → bases; ângulo comum → $AP·AQ/(AB·AC)$; semelhantes → $k^2$.'],
  ['Subtração', 'Quadrado menos triângulos; lado inclinado $b − a$, área $1 − 2ab$.'],
  ['Escalas', 'Comprimento $×k$, área $×k^2$, volume $×k^3$.']
], 'Antes de calcular áreas, veja se basta compará-las.'));

module.exports = [{ out: DIR + 'aula-2-areas-razoes-de-areas.html', html: K.deck({
  title: 'Áreas e razões de áreas — ENA · PROFMAT', brand: 'Geometria Plana', key: 'c12a2', meta: 'Capítulo 12 · Aula 2 · Áreas', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['h1-f', 'h1-u', 'h1-v', 'h1-w'], function(){ var f = +$('h1-f').value, u = +$('h1-u').value, v = +$('h1-v').value, w = +$('h1-w').value, A, d; switch(f){ case 0: A = u * v / 2; d = 'b·h/2 com b = u, h = v'; break; case 1: A = u * u * Math.sqrt(3) / 4; d = 'l²√3/4 com l = u'; break; case 2: A = u * u; d = 'l² com l = u'; break; case 3: A = u * v; d = 'a·b com a = u, b = v'; break; case 4: A = u * v / 2; d = 'D·d/2 com D = u, d = v'; break; case 5: A = (u + v) * w / 2; d = '(B + b)·h/2 com B = u, b = v, h = w'; break; case 6: A = Math.PI * u * u; d = 'π·r² com r = u'; break; case 7: A = u * u * (v * Math.PI / 180) / 2; d = 'r²·θ/2 com r = u, θ = v°'; break; default: A = 3 * u * u * Math.sqrt(3) / 2; d = '3l²√3/2 com l = u'; } $('h1-r').textContent = nf(A, 4); $('h1-h').textContent = d; });
  bind(['h2-a', 'h2-b', 'h2-c'], function(){ var a = +$('h2-a').value, b = +$('h2-b').value, c = +$('h2-c').value; if(a + b <= c || a + c <= b || b + c <= a){ $('h2-p').textContent = '—'; $('h2-A').textContent = 'não existe triângulo (desigualdade triangular)'; $('h2-r').textContent = ''; $('h2-h').textContent = ''; return; } var p = (a + b + c) / 2, A = Math.sqrt(p * (p - a) * (p - b) * (p - c)); $('h2-p').textContent = nf(p, 3); $('h2-A').textContent = nf(A, 4); $('h2-r').textContent = nf(A / p, 4) + ' ; ' + nf(a * b * c / (4 * A), 4); $('h2-h').textContent = 'Para 13, 14, 15: p = 21, A = 84, r = 4, R = 8,125.'; });
  bind(['h3-ab', 'h3-ac', 'h3-aq', 'h3-ap', 'h3-s'], function(){ var AB = +$('h3-ab').value, AC = +$('h3-ac').value, AQ = +$('h3-aq').value, AP = +$('h3-ap').value, S = +$('h3-s').value; if(AQ > AB || AP > AC){ $('h3-r').textContent = '—'; $('h3-h').textContent = 'AQ ≤ AB e AP ≤ AC.'; return; } var r = AP * AQ / (AB * AC); $('h3-r').textContent = nf(r, 4) + ' (' + AP + '·' + AQ + '/(' + AC + '·' + AB + '))'; $('h3-a').textContent = nf(S * r, 4); $('h3-h').textContent = 'Com AB = 12, AC = 10, AQ = 8, AP = 6 e [ABC] = 36: [APQ] = 14,4 = 72/5 (ENA 2025 Q7).'; });
  bind(['h4-a'], function(){ var a = +$('h4-a').value / 100; $('h4-av').textContent = nf(a, 2); var b = Math.sqrt(1 - a * a), svg = $('h4-s'); svg.innerHTML = ''; var S = 220, O = 15; function X(x){ return O + x * S; } function Y(y){ return O + (1 - y) * S; } var V = [[0, 0], [1, 0], [1, 1], [0, 1]], Wp = [[a * a, a * b]]; for(var i = 0; i < 3; i++){ var q = Wp[i]; Wp.push([1 - q[1], q[0]]); } var tri = [[V[0], V[1], Wp[0]], [V[1], V[2], Wp[1]], [V[2], V[3], Wp[2]], [V[3], V[0], Wp[3]]]; el('rect', {x: X(0), y: Y(1), width: S, height: S, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2.5}, svg); tri.forEach(function(t){ el('polygon', {points: t.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--growth)', 'fill-opacity': .28, stroke: 'var(--growth)', 'stroke-width': 2}, svg); }); el('polygon', {points: Wp.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary)', 'fill-opacity': .3, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); $('h4-t').textContent = 'b = √(1 − a²) = ' + nf(b, 4) + ' · área do quadrado menor = 1 − 2ab = ' + nf(1 - 2 * a * b, 4) + ' · (b − a)² = ' + nf((b - a) * (b - a), 4); $('h4-h').textContent = 'Quatro triângulos de área ab/2 = ' + nf(a * b / 2, 4) + ' cada: 1 − 4·(ab/2).'; });`
}) }];
