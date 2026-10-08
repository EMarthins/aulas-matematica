// Unidade 14 — Geometria espacial (capítulo 14)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/14-geometria-espacial/';
const s = [];

s.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 14', h1: 'Geometria espacial: <span style="color:var(--success);">volumes por decomposição</span>',
  sub: 'Fórmulas de volume e área, Euler nos poliedros, a pirâmide como 1/3 do prisma, escalas e o recipiente inclinado (ENA 2026 Q10).',
  badges: [['2 questões em 60'], ['V pirâmide = ⅓·Ab·h', 'growth'], ['dimensões ×k → volume ×k³', 'decay']], color: 'success'
}));
s.push(roteiroSlide('Do bloco ao recipiente inclinado.', [
  ['Volumes e áreas', 'cubo, caixa, prisma, pirâmide, cilindro, cone, esfera', 'cube'],
  ['Poliedros e Euler', 'V − A + F = 2', 'polygon'],
  ['Estratégias de volume', '⅓ do prisma, escalas, seções, inscritos', 'bulb'],
  ['ENA 2025 Q28', 'tetraedro dentro do paralelepípedo', 'target'],
  ['ENA 2026 Q10', 'líquido em recipiente inclinado', 'chart']
]));
s.push(objetivosSlide([
  'Usar as <strong>fórmulas de volume e área</strong> dos sólidos usuais e as <strong>unidades</strong> ($1\\ dm^3 = 1\\ L$).',
  'Aplicar a <strong>relação de Euler</strong> e a contagem de arestas.',
  'Calcular volumes por <strong>decomposição</strong>, <strong>escala</strong> e <strong>semelhança</strong> de seções.',
  'Resolver o problema do <strong>recipiente inclinado</strong> com a seção lateral e trigonometria.'
], 'Em prova', 'Volumes por decomposição: compare com sólidos conhecidos (pirâmide = ⅓ do prisma) e use a seção plana.', 'success', 'success'));

s.push(sl('Para início de conversa', 'A caixa-d’água cúbica', `
          ${lede('Uma caixa-d’água cúbica de <strong>aresta 2 m</strong> está cheia. Quantos litros? E se a aresta <strong>dobrar</strong>, o volume aumenta quantas vezes?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Volume em litros e o efeito de dobrar a aresta:', ['4000 L; dobra', '8000 L; ×8', '6000 L; ×4', '8000 L; ×4'], 1, '$V = 2^3 = 8\\ m^3 = 8000\\ L$ (pois $1\\ m^3 = 1000\\ L$). Dobrando a aresta: $(2a)^3 = 8a^3$: o volume fica <strong>8 vezes</strong> maior.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Dimensões $×k$ ⇒ área $×k^2$ e volume $×k^3$. E $1\\ dm^3 = 1\\ L$, $1\\ m^3 = 1000\\ L$, $1\\ cm^3 = 1\\ mL$.</p>', 'growth')}
          </div>`, { cls: 'success' }));

s.push(sl('Teoria · fórmulas', 'Resumo de volumes e áreas', `
          <div class="grid2">
            <div>
              ${tbl(['Sólido', 'Volume', 'Área'], [['Cubo (aresta $a$)', '$a^3$', '$6a^2$; diag. $a√3$'], ['Paralelepípedo $a,b,c$', '$abc$', '$2(ab + ac + bc)$; diag. $√{a^2 + b^2 + c^2}$'], ['Prisma', '$A_b·h$', '$A_{lat} + 2A_b$'], ['Pirâmide', '${1|3}A_b h$', '$A_{lat} + A_b$'], ['Cilindro', '$πr^2 h$', 'lat. $2πrh$; total $2πr(r + h)$'], ['Cone', '${1|3}πr^2 h$', 'lat. $πrg$; $g^2 = r^2 + h^2$'], ['Esfera', '${4|3}πr^3$', '$4πr^2$'], ['Tronco', '${h|3}(A_B + A_b + √{A_B A_b})$', '']])}
            </div>
            ${W.box('Calculadora de sólidos', W.sel('v1-f', 'Sólido', ['Cubo (a)', 'Caixa (a, b, c)', 'Cilindro (r, h)', 'Cone (r, h)', 'Pirâmide quadrada (l, h)', 'Esfera (r)'], 0) + W.row(W.nm('v1-u', 'u', 3), W.nm('v1-v', 'v', 4), W.nm('v1-w', 'w', 5)) + W.txt('v1-r', 'Volume = ') + W.txt('v1-a', 'Área total = ') + W.hint('v1-h'))}
          </div>`, { cls: 'success' }));

s.push(sl('Poliedros', 'A relação de Euler', `
          <div class="grid2">
            <div>
              ${F('V − A + F = 2   2A = ∑ "lados das faces" = ∑ "arestas por vértice"', true)}
              ${tbl(['Poliedro regular', 'F', 'V', 'A'], [['Tetraedro', '4', '4', '6'], ['Cubo', '6', '8', '12'], ['Octaedro', '8', '6', '12'], ['Dodecaedro', '12', '20', '30'], ['Icosaedro', '20', '12', '30']])}
            </div>
            ${W.box('Euler', W.row(W.nm('v2-v', 'V', 10), W.nm('v2-a', 'A', 15)) + W.txt('v2-f', 'Faces F = 2 − V + A = ') + W.hint('v2-h'))}
          </div>`, { cls: 'success' }));

s.push(sl('Estratégias', 'Padrões de volume', `
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Pirâmide = ⅓ do prisma</strong><p style="font-size:.88rem;margin-top:8px;">Mesma base e mesma altura. Tetraedro $ABCI$ com base $ABC$ (metade da base do paralelepípedo) e mesma altura: ${1|3}·{b|2}·h = {V|6}$ — <strong>não importa onde está $I$</strong> na face de cima.</p>', 'growth')}
            ${card('<strong>Escalas e seções</strong><p style="font-size:.88rem;margin-top:8px;">Dimensões $×k$ → volume $×k^3$, área $×k^2$. Plano paralelo à base de pirâmide/cone: ${V_{"menor"}|V_{"maior"}} = ({h\'|h})^3$.</p>', 'decay')}
            ${card('<strong>Inscrito e circunscrito</strong><p style="font-size:.88rem;margin-top:8px;">Esfera inscrita no cubo: $r = a/2$. Esfera circunscrita ao cubo: $R = {a√3|2}$.</p>', 'primary')}
            ${card('<strong>Líquido inclinado</strong><p style="font-size:.88rem;margin-top:8px;">Volume restante = total − parte derramada. Use a <strong>seção lateral</strong> (um retângulo) e trigonometria.</p>', 'success')}
          </div>`, { cls: 'success' }));

s.push(ja('ENA 2025 · Q28', 'O tetraedro dentro do paralelepípedo',
  'O paralelepípedo $ABCDEFGH$ tem volume $V$ ($ABCD$ é a base). $I$ é um ponto da face superior $EFGH$. Qual o volume do tetraedro $ABCI$?',
  ['${V|2}$', '${V|3}$', '${V|6}$', '${V|9}$', '${V|12}$'], 2,
  'A base $ABC$ é metade do paralelogramo $ABCD$: área ${b|2}$. A altura até $I$ é a mesma altura $h$ do sólido. $V_{tet} = {1|3}·{b|2}·h = {bh|6} = {V|6}$. <strong>Alternativa C.</strong>'));

s.push(sl('Recipiente inclinado', 'ENA 2026 Q10: quanto líquido restou?', `
          ${lede('Recipiente sem tampa, paralelepípedo de base quadrada $1 × 1$ dm e altura $2$ dm, cheio de líquido. Ele é inclinado, girando sobre uma aresta da base, até a face lateral formar $60^∘$ com o plano horizontal, derramando parte do líquido.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Seção lateral (1 × 2 dm)', W.rg('v3-a', 'inclinação em relação à vertical (°)', 0, 60, 1, 30) + W.svg('v3-s', '0 0 260 230', '200px') + W.txt('v3-r', '') + W.hint('v3-h'))}
            ${callout('Resolução', 'Volume total $1·1·2 = 2$. Na vista lateral, o nível é horizontal e a parede forma $60^∘$ com o chão, logo o ângulo entre o nível e a borda superior é $30^∘$. O trecho sem líquido é um prisma triangular de catetos $1$ e $x$, com ${x|1} = tg 30^∘ = {1|√3}$; área $= {1|2}·{1|√3}·1 = {1|2√3}$, altura 1. Restou $2 − {1|2√3} = {12 − √3|6}$.', 'success')}
          </div>`, { cls: 'growth' }));

s.push(ja('ENA 2026 · Q10', 'Volume que restou no recipiente inclinado',
  'Recipiente sem tampa, paralelepípedo de base quadrada com lados $1$ dm e altura $2$ dm, totalmente cheio. Ele é inclinado, girando sobre uma aresta da base, até a face lateral formar $60^∘$ com o plano horizontal, derramando parte do líquido. Qual o volume, em dm³, que restou?',
  ['${12 − √3|6}$', '${12 − √3|3}$', '$2 − {√3|3}$', '${6 − √3|3}$', '$2 − {1|√3}$'], 0,
  'Volume total $2$. O líquido deixa de ocupar um prisma de base triangular (catetos $1$ e $x = {1|√3}$) e altura $1$: ${1|2}·{1|√3}·1 = {1|2√3}$. Restou $2 − {1|2√3} = {4√3 − 1|2√3} = {12 − √3|6}$. Conferência: $2 − 0,2887 = 1,7113$ e ${12 − 1,732|6} = 1,7113$ ✓. <strong>Alternativa A.</strong>'));

s.push(exemplo('Treinos 14.2 e 14.3', 'Cone e pirâmide', 'Cone de raio 3 e altura 4: geratriz e volume. Pirâmide de base quadrada de lado 6 e altura 5: volume.', [
  ['Geratriz do cone', '$g = √{3^2 + 4^2} = 5$'],
  ['Volume do cone', '$V = {1|3}π·9·4 = 12π$'],
  ['Pirâmide', '$V = {1|3}·36·5 = 60$']
], 'Cone: $g = 5$ e $V = 12π$. Pirâmide: $V = 60$.', 'success'));

s.push(armadilhas('Cuidado', 'Onde se perde ponto em geometria espacial', [
  ['Esquecer o 1/3', 'Pirâmide e cone têm $V = {1|3}A_b h$.'],
  ['Escalas', 'Dobrar as dimensões multiplica o volume por 8 (não por 2) e a área por 4.'],
  ['Unidades', '$1\\ dm^3 = 1\\ L$; $1\\ m^3 = 1000\\ L$.'],
  ['Seção sem desenho', 'No recipiente inclinado, faça a vista lateral: o nível é horizontal e a parede é inclinada.']
]));

s.push(quiz([
  { q: 'A diagonal de um cubo de aresta 3 mede:', o: ['$3√2$', '$3√3$', '9', '$√{27}·3$'], a: 1 },
  { q: 'O volume de um cone de raio 3 e altura 4 é:', o: ['$12π$', '$36π$', '$9π$', '$20π$'], a: 0 },
  { q: 'Um poliedro convexo tem 10 vértices e 15 arestas. O número de faces é:', o: ['5', '6', '7', '8'], a: 2 },
  { q: 'Se todas as dimensões de um sólido dobram, o volume fica multiplicado por:', o: ['2', '4', '6', '8'], a: 3 }
]));
s.push(fechamento([
  ['Fórmulas', 'Prisma $A_b h$; pirâmide e cone $⅓A_bh$; esfera $⁴⁄₃πr^3$.'],
  ['Escalas', 'Dimensões $×k$: área $×k^2$, volume $×k^3$.'],
  ['Estratégia', 'Decomponha: compare com prisma, use semelhança e a seção lateral.']
], 'Volume por decomposição: encontre o prisma ou a pirâmide escondidos.'));

module.exports = [{ out: DIR + 'aula-volumes-poliedros.html', html: K.deck({
  title: 'Geometria espacial — ENA · PROFMAT', brand: 'Geometria Espacial', key: 'c14', meta: 'Capítulo 14 · Geometria espacial', slides: s,
  extra: WJS + BIND + String.raw`
  bind(['v1-f', 'v1-u', 'v1-v', 'v1-w'], function(){ var f = +$('v1-f').value, u = +$('v1-u').value, v = +$('v1-v').value, w = +$('v1-w').value, V, A, d; switch(f){ case 0: V = u * u * u; A = 6 * u * u; d = 'diagonal = u√3 = ' + nf(u * Math.sqrt(3), 3); break; case 1: V = u * v * w; A = 2 * (u * v + u * w + v * w); d = 'diagonal = √(u² + v² + w²) = ' + nf(Math.sqrt(u * u + v * v + w * w), 3); break; case 2: V = Math.PI * u * u * v; A = 2 * Math.PI * u * (u + v); d = 'r = u, h = v'; break; case 3: var g = Math.sqrt(u * u + v * v); V = Math.PI * u * u * v / 3; A = Math.PI * u * (u + g); d = 'geratriz g = ' + nf(g, 3); break; case 4: V = u * u * v / 3; var ap = Math.sqrt(v * v + u * u / 4); A = u * u + 2 * u * ap; d = 'apótema lateral = ' + nf(ap, 3); break; default: V = 4 / 3 * Math.PI * u * u * u; A = 4 * Math.PI * u * u; d = 'r = u'; } $('v1-r').textContent = nf(V, 4); $('v1-a').textContent = nf(A, 4); $('v1-h').textContent = d + '. (Em dm → litros iguais ao volume em dm³.)'; });
  bind(['v2-v', 'v2-a'], function(){ var V = +$('v2-v').value, A = +$('v2-a').value; $('v2-f').textContent = 2 - V + A; $('v2-h').textContent = 'V − A + F = 2 → F = ' + (2 - V + A) + '. Para V = 10, A = 15: F = 7.'; });
  bind(['v3-a'], function(){ var deg = +$('v3-a').value; $('v3-av').textContent = deg; var f = deg * Math.PI / 180, w = 1, H = 2, c = Math.cos(f), s = Math.sin(f), P = [[0, 0], [w * c, w * s], [w * c - H * s, w * s + H * c], [-H * s, H * c]], lvl = Math.min(P[2][1], P[3][1]);
    function clip(poly, y){ var out = []; for(var i = 0; i < poly.length; i++){ var a = poly[i], b = poly[(i + 1) % poly.length], ia = a[1] <= y + 1e-12, ib = b[1] <= y + 1e-12; if(ia) out.push(a); if(ia !== ib){ var t = (y - a[1]) / (b[1] - a[1]); out.push([a[0] + t * (b[0] - a[0]), y]); } } return out; }
    function area(p){ var s2 = 0; for(var i = 0; i < p.length; i++){ var a = p[i], b = p[(i + 1) % p.length]; s2 += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s2) / 2; }
    var L = clip(P, lvl), A = area(L), svg = $('v3-s'); svg.innerHTML = ''; var k = 80, ox = 150, oy = 200; function X(x){ return ox + x * k; } function Y(y){ return oy - y * k; }
    el('polygon', {points: P.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2.5}, svg); el('polygon', {points: L.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary)', 'fill-opacity': .35}, svg); el('line', {x1: 20, y1: Y(lvl), x2: 240, y2: Y(lvl), stroke: 'var(--decay)', 'stroke-dasharray': '5 4', 'stroke-width': 2}, svg); el('circle', {cx: X(0), cy: Y(0), r: 4, fill: 'var(--growth)'}, svg);
    $('v3-r').textContent = 'Volume restante = área da seção × 1 = ' + nf(A, 4) + ' dm³ (' + nf((2 - A) / 2 * 100, 2) + '% derramado)'; $('v3-h').textContent = deg === 30 ? 'Para 30° da vertical (parede a 60° do chão): (12 − √3)/6 ≈ 1,7113 ✔ (ENA 2026 Q10).' : 'Experimente 30° (face a 60° com o plano horizontal).'; });`
}) }];
