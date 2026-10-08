// Unidade 12 — Geometria plana · Aula 3: círculo e truques de prova (capítulo 12)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, svg, ln, pg, ci, dot, tx, txu, rect, rightMark, ink, soft, pri, gro, dec, suc, dan } = K;
const DIR = 'ena-profmat/12-geometria-plana/';
const c = [];

c.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 12 · Aula 3', h1: 'Círculo e os <span style="color:var(--decay);">truques para gabaritar</span>',
  sub: 'Tangentes, cordas, quadriláteros inscritíveis, círculo tangente a lados, triângulo retângulo inscrito de área máxima e o quadrado “girado” dentro de quadrado.',
  badges: [['ENA 2026 Q18, Q20'], ['área máxima = r²', 'decay'], ['diagonal pela identidade', 'growth']], color: 'decay'
}));
c.push(roteiroSlide('Do círculo aos três truques que mais renderam pontos.', [
  ['Propriedades do círculo', 'tangente ⟂ raio, tangentes iguais, corda e distância ao centro', 'target'],
  ['Círculo tangente a lados', 'centro na bissetriz/diagonal: distância r√2 (ENA 2026 Q20)', 'link'],
  ['Triângulo inscrito de área máxima', 'hipotenusa = diâmetro, altura = r (ENA 2026 Q18)', 'scale'],
  ['Retângulo: perímetro + área → diagonal', 'sem resolver o sistema', 'bulb'],
  ['Quadrado girado', 'lado b − a, área c² − 2ab', 'chart']
]));
c.push(objetivosSlide([
  'Usar <strong>tangentes, cordas e potência de ponto</strong> em problemas com círculos.',
  'Montar equações ao longo da <strong>diagonal</strong> quando um círculo é tangente a dois lados de um quadrado.',
  'Achar o <strong>triângulo retângulo inscrito</strong> de área máxima.',
  'Aplicar os <strong>truques</strong>: diagonal do retângulo pela identidade e quadrado inclinado.'
], 'Em prova', 'Geometria plana vale 1 em cada 6 questões. Os truques desta aula transformam contas longas em duas linhas.', 'decay', 'decay-ink'));

c.push(sl('Para início de conversa', 'A corda e o centro', `
          ${lede('Em um círculo de <strong>raio 5</strong>, uma corda mede <strong>8</strong>. A que distância do centro ela está?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Distância da corda ao centro:', ['2', '3', '4', '√39'], 1, 'O raio até a ponta da corda, a metade da corda (4) e a distância $d$ formam um triângulo retângulo: $d = √{5^2 − 4^2} = 3$ (terno 3-4-5).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A perpendicular do centro a uma corda a divide ao meio. Daí sai um triângulo retângulo: $r^2 = d^2 + (c/2)^2$.</p>', 'growth')}
          </div>`, { cls: '' }));

c.push(sl('Teoria · círculo', 'Propriedades que mais aparecem', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.9rem;line-height:1.65;">
                <li>Reta <strong>tangente</strong> é perpendicular ao raio no ponto de tangência.</li>
                <li>Dois segmentos tangentes de um ponto externo são <strong>iguais</strong>.</li>
                <li>Círculo tangente a dois lados de um ângulo: centro na <strong>bissetriz</strong>.</li>
                <li>Quadrilátero <strong>inscritível</strong>: ângulos opostos somam $180^∘$.</li>
                <li>Potência de ponto: cordas que se cruzam em $P$: $PA·PB = PC·PD$.</li>
                <li>Corda: $r^2 = d^2 + (c/2)^2$.</li>
              </ul>
            </div>
            ${W.box('Corda e distância ao centro', W.row(W.nm('r1-r', 'raio r', 5, 1, 'min="1"'), W.nm('r1-c', 'corda c', 8, 1, 'min="1"')) + W.svg('r1-s', '0 0 260 170', '220px') + W.txt('r1-t', '') + W.hint('r1-h'))}
          </div>`, { cls: '' }));

c.push(sl('Círculo tangente a lados', 'Tudo se passa na diagonal (ENA 2026 Q20)', `
          ${lede('Dois quadrados, de lados <strong>4</strong> e <strong>2</strong>. O círculo é tangente a dois lados do quadrado maior e <strong>toca o quadrado menor em um vértice</strong>. Qual o raio?')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Quadrados L e ℓ', W.row(W.nm('r2-L', 'lado maior L', 4, 1, 'min="2"'), W.nm('r2-l', 'lado menor ℓ', 2, 1, 'min="1"')) + W.svg('r2-s', '0 0 250 250', '200px') + W.txt('r2-t', '') + W.hint('r2-h'))}
            ${callout('Resolução', 'Na diagonal do quadrado maior ($4√2$): do canto até o centro do círculo, $r√2$ (centro a distância $r$ dos dois lados tangentes); do centro até o vértice do menor, $r$; daí ao canto oposto, a diagonal do menor, $2√2$. Então $r√2 + r + 2√2 = 4√2 ⇒ r(1 + √2) = 2√2 ⇒ r = {2√2|1 + √2} = 2√2(√2 − 1) = 4 − 2√2$.', 'success')}
          </div>`, { cls: 'growth' }));

c.push(ja('ENA 2026 · Q20', 'O raio do círculo entre dois quadrados',
  'Dois quadrados de lados 4 e 2. O círculo é tangente a dois lados do quadrado maior e toca o quadrado menor em um vértice. Qual o raio? (alternativas reescritas para treino)',
  ['$√2$', '$2 − √2$', '$2√2 − 2$', '$3 − √2$', '$4 − 2√2$'], 4,
  'Tudo na diagonal do quadrado maior ($4√2$): $r√2 + r + 2√2 = 4√2 ⇒ r(1 + √2) = 2√2 ⇒ r = {2√2|1 + √2} = 2√2(√2 − 1) = 4 − 2√2 ≈ 1,17$. <strong>Alternativa E.</strong> Conferência numérica: $1,17·1,414 + 1,17 + 2,83 = 5,66 = 4√2$ ✓.'));

c.push(sl('Truque · área máxima', 'Triângulo retângulo inscrito de maior área', `
          ${lede('Hipotenusa fixa (diâmetro $2r$): a <strong>altura é máxima</strong> quando o vértice do ângulo reto está no ponto médio do arco, e vale $h = r$. Área máxima $= {2r·r|2} = r^2$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Mova o vértice C no semicírculo', W.rg('r3-t', 'posição de C (graus)', 10, 170, 1, 60) + W.svg('r3-s', '0 0 260 170') + W.txt('r3-a', '') + W.hint('r3-h'))}
            ${callout('ENA 2026 Q18', 'Raio 4: hipotenusa $= 8$; altura máxima $= 4$; área máxima $= {8·4|2} = 16$ $(= r^2)$.', 'success')}
          </div>`, { cls: 'growth' }));

c.push(ja('ENA 2026 · Q18', 'Triângulos retângulos inscritos num círculo de raio 4',
  'De todos os triângulos retângulos inscritos num círculo de raio 4, qual a área máxima?',
  ['8', '12', '16', '20', '32'], 2,
  'Hipotenusa $=$ diâmetro $= 8$. A altura relativa a ela é no máximo o raio $= 4$ (vértice no ponto médio do arco). Área máxima $= {8·4|2} = 16$. <strong>Alternativa C.</strong>'));

c.push(sl('Truque · retângulo', 'Perímetro e área dão a diagonal', `
          ${F('d^2 = a^2 + b^2 = (a + b)^2 − 2ab', true)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Retângulo: perímetro e área', W.row(W.nm('r4-p', 'perímetro P', 16, 1, 'min="1"'), W.nm('r4-a', 'área A', 14, 1, 'min="1"')) + W.txt('r4-d', 'Diagonal d = ') + W.txt('r4-l', 'Lados: ') + W.hint('r4-h'))}
            ${callout('Dois usos (ENA)', '2025 Q6: $2(a+b) = 16$ e $ab = 14$ → $d^2 = 64 − 28 = 36$, $d = 6$. 2026 Q3: $ab = 60$ e $d = 13$ → $(a+b)^2 = 169 + 120 = 289$, $a + b = 17$, $P = 34$. <strong>Nunca resolva o sistema.</strong>', 'success')}
          </div>`, { cls: 'growth' }));

c.push(sl('Truque · quadrado girado', 'Quadrado inclinado dentro de quadrado', `
          ${lede('É a figura clássica da demonstração de Pitágoras: quatro triângulos retângulos iguais em volta de um quadrado menor. Com catetos $a < b$ e hipotenusa $c$ (lado do quadrado maior), o quadrado menor tem <strong>lado $b − a$</strong> e área $(b − a)^2 = c^2 − 2ab$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Catetos a e b', W.row(W.nm('r5-a', 'a', 3), W.nm('r5-b', 'b', 4)) + W.txt('r5-t', '') + W.hint('r5-h'))}
            ${callout('Mesma ideia da Q13', 'Quadrado maior de lado 1: área do menor $= 1 − 2ab$. É a subtração “quadrado menos 4 triângulos” da aula anterior.', 'success')}
          </div>`, { cls: 'growth' }));

c.push(sl('Método geral', 'Se travar: coordenadas', `
          ${lede('Em quadrados e retângulos, coloque $A = (0, 0)$ e escreva as coordenadas dos pontos. Retas viram equações, interseções viram sistemas, distâncias viram Pitágoras.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Exemplo (ENA 2025 Q14)', '$A = (0,0)$, $E = (2,0)$, $F = (3,2)$, $D = (0,3)$. $AF: y = {2|3}x$; $DE: y = 3 − {3|2}x$ → $G = ({18|13}, {12|13})$. $EG = √{({8|13})^2 + ({12|13})^2} = {√{208}|13} = {4|√13}$.', 'success')}
            ${card('<strong>Passos</strong><ol style="margin:8px 0 0 18px;font-size:.9rem;line-height:1.7;"><li>Figura grande, nomeie tudo.</li><li>Triângulos retângulos e semelhantes.</li><li>Áreas por subtração / razões.</li><li>Coordenadas.</li><li>Confira: o resultado é plausível? (raio maior que o lado? área negativa?)</li></ol>', 'growth')}
          </div>`, { cls: 'growth' }));

c.push(exemplo('Treino 12.8', 'Corda de 8 em círculo de raio 5', 'Qual a distância da corda ao centro?', [
  ['Metade da corda', '$8/2 = 4$'],
  ['Triângulo retângulo', 'raio 5 é a hipotenusa; catetos $d$ e 4'],
  ['Pitágoras', '$d = √{25 − 16} = 3$']
], 'A corda está a <strong>3</strong> do centro.', 'decay'));

c.push(armadilhas('Cuidado', 'Onde se perde ponto com círculos e truques', [
  ['Esquecer onde está o centro', 'Círculo tangente a dois lados de um quadrado tem centro na <strong>diagonal</strong>, a distância $r$ de cada lado: $r√2$ do vértice.'],
  ['Resolver o sistema desnecessariamente', 'Perímetro + área → diagonal pela identidade $(a+b)^2 − 2ab$.'],
  ['Altura sem limite', 'No triângulo retângulo inscrito, a altura é no máximo $r$; a área máxima é $r^2$.'],
  ['Confundir $b − a$ com $c$', 'No quadrado girado, o lado do menor é $b − a$; o do maior é $c$ (hipotenusa).']
]));

c.push(quiz([
  { q: 'A área máxima de um triângulo retângulo inscrito em um círculo de raio 5 é:', o: ['10', '20', '25', '50'], a: 2 },
  { q: 'Retângulo de perímetro 28 e diagonal 10: a área vale:', o: ['40', '48', '52', '96'], a: 1 },
  { q: 'Uma corda de 6 em um círculo de raio 5 está a que distância do centro?', o: ['3', '4', '$√{34}$', '5'], a: 1 },
  { q: 'Catetos 3 e 4 e hipotenusa 5: o quadrado menor (lado $b − a$) tem área:', o: ['1', '2', '5', '7'], a: 0 }
]));
c.push(fechamento([
  ['Círculo', 'Tangente ⟂ raio; corda: $r^2 = d^2 + (c/2)^2$; inscrito no diâmetro: $90^∘$.'],
  ['Truques', 'Diagonal: $(a+b)^2 − 2ab$; quadrado girado: $(b−a)^2 = c^2 − 2ab$; área máxima inscrita: $r^2$.'],
  ['Método', 'Figura, retângulos, semelhança, subtração e, se travar, coordenadas.']
], 'Os truques valem porque evitam a conta longa: procure a identidade antes.'));

module.exports = [{ out: DIR + 'aula-3-circulo-truques.html', html: K.deck({
  title: 'Círculo e truques para gabaritar — ENA · PROFMAT', brand: 'Geometria Plana', key: 'c12a3', meta: 'Capítulo 12 · Aula 3 · Círculo e truques', slides: c,
  extra: WJS + BIND + String.raw`
  bind(['r1-r', 'r1-c'], function(){ var r = +$('r1-r').value, cc = +$('r1-c').value, svg = $('r1-s'); svg.innerHTML = ''; if(cc > 2 * r){ $('r1-t').textContent = 'A corda não pode passar do diâmetro (2r).'; $('r1-h').textContent = ''; return; } var d = Math.sqrt(r * r - cc * cc / 4), s = 70 / r; el('circle', {cx: 130, cy: 85, r: 70, fill: 'none', stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); var hx = cc / 2 * s, dy = d * s; el('line', {x1: 130 - hx, y1: 85 + dy, x2: 130 + hx, y2: 85 + dy, stroke: 'var(--primary)', 'stroke-width': 3}, svg); el('line', {x1: 130, y1: 85, x2: 130, y2: 85 + dy, stroke: 'var(--growth)', 'stroke-width': 2, 'stroke-dasharray': '4 3'}, svg); el('line', {x1: 130, y1: 85, x2: 130 + hx, y2: 85 + dy, stroke: 'var(--decay)', 'stroke-width': 2}, svg); el('circle', {cx: 130, cy: 85, r: 3.5, fill: 'var(--ink)'}, svg); $('r1-t').textContent = 'd = √(r² − (c/2)²) = √(' + r * r + ' − ' + nf(cc * cc / 4, 3) + ') = ' + nf(d, 4); $('r1-h').textContent = 'Para r = 5 e c = 8: d = 3 (Treino 12.8).'; });
  bind(['r2-L', 'r2-l'], function(){ var L = +$('r2-L').value, l = +$('r2-l').value; var svg = $('r2-s'); svg.innerHTML = ''; if(l >= L){ $('r2-t').textContent = 'Use ℓ < L.'; return; } var r = (L - l) * (2 - Math.SQRT2), S = 200 / L, O = 25; function X(x){ return O + x * S; } function Y(y){ return O + (L - y) * S; } el('rect', {x: X(0), y: Y(L), width: L * S, height: L * S, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2.5}, svg); el('rect', {x: X(L - l), y: Y(L), width: l * S, height: l * S, fill: 'var(--growth)', 'fill-opacity': .25, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg); el('circle', {cx: X(r), cy: Y(r), r: r * S, fill: 'var(--primary)', 'fill-opacity': .15, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); el('line', {x1: X(0), y1: Y(0), x2: X(L), y2: Y(L), stroke: 'var(--decay)', 'stroke-dasharray': '5 4'}, svg); $('r2-t').textContent = 'r = (L − ℓ)(2 − √2) = ' + nf(r, 4) + (L === 4 && l === 2 ? ' = 4 − 2√2 ✔' : ''); $('r2-h').textContent = 'Equação na diagonal: r√2 + r + ℓ√2 = L√2 → r = (L − ℓ)√2/(1 + √2).'; });
  bind(['r3-t'], function(){ var th = +$('r3-t').value; $('r3-tv').textContent = th; var svg = $('r3-s'); svg.innerHTML = ''; var cx = 130, cy = 140, R = 100, t = th * Math.PI / 180, Cx = cx - R * Math.cos(t), Cy = cy - R * Math.sin(t); el('path', {d: 'M ' + (cx - R) + ' ' + cy + ' A ' + R + ' ' + R + ' 0 0 1 ' + (cx + R) + ' ' + cy, fill: 'none', stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); el('polygon', {points: (cx - R) + ',' + cy + ' ' + (cx + R) + ',' + cy + ' ' + Cx.toFixed(1) + ',' + Cy.toFixed(1), fill: 'var(--growth)', 'fill-opacity': .25, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg); el('line', {x1: cx, y1: cy, x2: cx, y2: cy - R, stroke: 'var(--decay)', 'stroke-dasharray': '4 3'}, svg); el('circle', {cx: Cx, cy: Cy, r: 4.5, fill: 'var(--primary)'}, svg); var h = Math.sin(t), A = Math.sin(t); $('r3-a').textContent = 'Altura = r·sen θ = ' + nf(h, 3) + 'r · área = r²·sen θ = ' + nf(A, 3) + ' r² (com r = 4: ' + nf(16 * A, 3) + ')'; $('r3-h').textContent = th === 90 ? '✔ Máxima: vértice no ponto médio do arco, área = r² = 16.' : 'A área só chega a r² quando θ = 90°.'; });
  bind(['r4-p', 'r4-a'], function(){ var P = +$('r4-p').value, A = +$('r4-a').value, s = P / 2; var d2 = s * s - 2 * A; if(d2 <= 0){ $('r4-d').textContent = '—'; $('r4-l').textContent = ''; $('r4-h').textContent = 'Valores incompatíveis (a diagonal ao quadrado ficou ≤ 0).'; return; } var disc = s * s - 4 * A; $('r4-d').textContent = nf(Math.sqrt(d2), 4) + '  (d² = (P/2)² − 2A = ' + nf(d2, 4) + ')'; $('r4-l').textContent = disc >= 0 ? nf((s - Math.sqrt(disc)) / 2, 4) + ' e ' + nf((s + Math.sqrt(disc)) / 2, 4) : 'não existe retângulo real com esses valores'; $('r4-h').textContent = 'Para P = 16 e A = 14: d = 6 (ENA 2025 Q6). Os lados não foram necessários.'; });
  bind(['r5-a', 'r5-b'], function(){ var a = +$('r5-a').value, b = +$('r5-b').value, c = Math.sqrt(a * a + b * b); $('r5-t').textContent = 'hipotenusa c = ' + nf(c, 4) + ' · lado do quadrado menor = |b − a| = ' + nf(Math.abs(b - a), 4) + ' · área = ' + nf((b - a) * (b - a), 4) + ' = c² − 2ab = ' + nf(c * c - 2 * a * b, 4); $('r5-h').textContent = 'Os quatro triângulos têm área ab/2 cada: o quadrado maior c² = 4·(ab/2) + (b − a)².'; });`
}) }];
