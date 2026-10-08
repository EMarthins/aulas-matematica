// Unidade 13 — Trigonometria (capítulo 13), duas aulas
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/13-trigonometria/';
const out = [];

// ====================== AULA 1 ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 13 · Aula 1', h1: 'Trigonometria no <span style="color:var(--primary);">triângulo retângulo</span>',
  sub: 'Seno, cosseno e tangente, os ângulos notáveis, as relações fundamentais e o truque “dada a tangente, ache tudo” (ENA 2026 Q4).',
  badges: [['3 questões em 60'], ['sen² + cos² = 1', 'growth'], ['1 + tg² = 1/cos²', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('O essencial que o ENA cobra, sem calculadora.', [
  ['Razões trigonométricas', 'oposto, adjacente, hipotenusa', 'triangle'],
  ['Ângulos notáveis', '30°, 45°, 60° (decore a tabela)', 'target'],
  ['Identidades', 'sen² + cos² = 1 e companhia', 'scale'],
  ['Dada a tangente', 'desenhe o triângulo (ENA 2026 Q4)', 'bulb'],
  ['Questões que já caíram', 'ENA 2026 Q4 · ENA 2025 Q5', 'link']
]));
a.push(objetivosSlide([
  'Calcular <strong>seno, cosseno e tangente</strong> de ângulos agudos em um triângulo retângulo.',
  'Usar a <strong>tabela de 30°, 45° e 60°</strong> sem calculadora.',
  'Aplicar as <strong>relações fundamentais</strong> e achar tudo a partir de $tg$ ou $sen$.',
  'Resolver problemas de <strong>altura e distância</strong> com trigonometria.'
], 'Em prova', 'Não há calculadora: use os ângulos notáveis e o triângulo desenhado.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A escada de 6 m a 60°', `
          ${lede('Uma escada de <strong>6 m</strong> forma <strong>60°</strong> com o chão. Que altura ela alcança na parede?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A altura é:', ['3 m', '$3√2$ m', '$3√3$ m', '6 m'], 2, 'A altura é o cateto <strong>oposto</strong> ao ângulo e a escada é a hipotenusa: $h = 6·sen 60^∘ = 6·{√3|2} = 3√3$ m ≈ 5,2 m.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Seno = oposto ÷ hipotenusa; cosseno = adjacente ÷ hipotenusa; tangente = oposto ÷ adjacente. Identifique quem é “oposto” <strong>em relação ao ângulo dado</strong>.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · razões', 'Seno, cosseno e tangente', `
          <div class="grid2">
            <div>
              ${F('sen α = {"cateto oposto"|"hipotenusa"}   cos α = {"cateto adjacente"|"hipotenusa"}   tg α = {"oposto"|"adjacente"} = {sen α|cos α}', false)}
              ${callout('Complementares', '$sen(90^∘ − α) = cos α$ e $tg(90^∘ − α) = 1/tg α$.', 'success')}
            </div>
            ${W.box('Ângulo agudo α', W.rg('t1-a', 'α (graus)', 5, 85, 1, 30) + W.svg('t1-s', '0 0 260 170') + W.txt('t1-t', '') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Tabela', 'Ângulos notáveis: decore', `
          ${tbl(['', '30°', '45°', '60°'], [['sen', '${1|2}$', '${√2|2}$', '${√3|2}$'], ['cos', '${√3|2}$', '${√2|2}$', '${1|2}$'], ['tg', '${√3|3}$', '1', '$√3$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Mnemônico do seno', '${√1|2}, {√2|2}, {√3|2}$ para 30°, 45°, 60°. O cosseno é o <strong>inverso</strong> dessa ordem.', 'success')}
            ${mini('O valor de $sen 30^∘ + cos 60^∘$ é:', ['1/2', '1', '$√3$', '$√3/2$'], 1, '$sen 30^∘ = {1|2}$ e $cos 60^∘ = {1|2}$: soma $= 1$ (são complementares: $sen 30^∘ = cos 60^∘$).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · identidades', 'Relações fundamentais', `
          <div class="grid2">
            <div>
              ${F('sen^2 x + cos^2 x = 1', true)}
              ${F('1 + tg^2 x = {1|cos^2 x}   1 + cotg^2 x = {1|sen^2 x}')}
              ${F('(sen x + cos x)^2 = 1 + 2 sen x cos x = 1 + sen 2x')}
            </div>
            ${W.box('Confira para qualquer x', W.rg('t2-x', 'x (graus)', 1, 89, 1, 37) + W.txt('t2-a', '') + W.txt('t2-b', '') + W.txt('t2-c', '') + W.hint('t2-h'))}
          </div>`, { cls: '' }));

a.push(sl('Truque · dada a tangente', 'Desenhe o triângulo e leia tudo', `
          ${lede('Se $tg α = t$, desenhe um triângulo com cateto oposto $t$, adjacente $1$ e hipotenusa $√{1 + t^2}$:')}
          ${F('sen α = {t|√{1 + t^2}}   cos α = {1|√{1 + t^2}}   (sen α + cos α)^2 = 1 + {2t|1 + t^2}', false)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Dado t = tg α (agudo)', W.nm('t3-t', 't', 2, 0.5) + W.txt('t3-s', 'sen α = ') + W.txt('t3-c', 'cos α = ') + W.txt('t3-q', '(sen α + cos α)² = ') + W.hint('t3-h'))}
            ${callout('ENA 2026 Q4', '$tg α = 2$: $cos^2 α = {1|5}$, $sen^2 α = {4|5}$, $(sen α + cos α)^2 = 1 + {2·2|1 + 4} = {9|5}$.', 'success')}
          </div>`, { cls: 'growth' }));

a.push(ja('ENA 2026 · Q4', 'Tangente igual a 2',
  'Sabendo que a tangente de um ângulo agudo $α$ é igual a 2, qual o valor de $(sen α + cos α)^2$?',
  ['$1$', '${6|5}$', '${7|5}$', '${8|5}$', '${9|5}$'], 4,
  '$1 + tg^2 α = {1|cos^2 α} ⇒ cos^2 α = {1|5}$, $sen^2 α = {4|5}$, $cos α = {1|√5}$, $sen α = {2|√5}$ (agudo). $({3|√5})^2 = {9|5}$. Atalho: $1 + {2·2|1 + 4} = {9|5}$. <strong>Alternativa E.</strong>'));

a.push(ja('ENA 2025 · Q5', 'Cateto ℓ oposto a 30°',
  'Um dos catetos de um triângulo retângulo mede $ℓ$ cm e o ângulo oposto a ele mede $30^∘$. Qual a área?',
  ['${ℓ^2 √3|2}$', '${ℓ^2|2}$', '${ℓ^2 √3|4}$', '$ℓ^2√3$', '${ℓ^2|2√3}$'], 0,
  'O outro cateto (oposto ao ângulo de $60^∘$) mede $ℓ√3$, pois $tg 30^∘ = {ℓ|x} ⇒ x = ℓ√3$. Área $= {ℓ · ℓ√3|2}$. <strong>Alternativa A.</strong>'));

a.push(exemplo('Treino 13.1', 'sen α = 3/5, α agudo', 'Ache $cos α$ e $tg α$.', [
  ['Use sen² + cos² = 1', '$cos α = √{1 − {9|25}} = {4|5}$'],
  ['Tangente', '$tg α = {sen α|cos α} = {3|4}$']
], '$cos α = 4/5$ e $tg α = 3/4$ (triângulo 3-4-5).', 'primary'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em trigonometria básica', [
  ['Oposto × adjacente', 'Os nomes dependem do ângulo escolhido. O cateto oposto a $30^∘$ é a <strong>metade</strong> da hipotenusa.'],
  ['$sen(a + b) ≠ sen a + sen b$', 'Soma de ângulos usa fórmulas próprias (aula 2).'],
  ['Graus × radianos', 'Não há calculadora: use os notáveis. Converta com $π\\ rad = 180^∘$.'],
  ['Sinal da raiz', 'Em ângulo agudo, seno e cosseno são <strong>positivos</strong>: ao tirar raiz, fique com o valor positivo.']
]));

a.push(quiz([
  { q: 'Se $sen α = {3|5}$ (agudo), então $tg α$ vale:', o: ['3/4', '4/3', '4/5', '5/3'], a: 0 },
  { q: 'Se $tg α = 3$ (agudo), $(sen α + cos α)^2$ vale:', o: ['6/5', '7/5', '8/5', '9/5'], a: 2 },
  { q: 'O valor de $sen 45^∘ · cos 45^∘$ é:', o: ['1/4', '1/2', '$√2/2$', '1'], a: 1 },
  { q: 'Um poste projeta sombra de 10 m quando o Sol forma 45° com o chão. Sua altura é:', o: ['5 m', '10 m', '$10√2$ m', '20 m'], a: 1 }
]));
a.push(fechamento([
  ['Razões', 'sen = op/hip; cos = adj/hip; tg = op/adj; complementares.'],
  ['Notáveis', '30°: ½, √3/2, √3/3 · 45°: √2/2, √2/2, 1 · 60°: √3/2, ½, √3.'],
  ['Dada a tg', 'Triângulo $t$, 1, $√{1+t^2}$; $(sen+cos)^2 = 1 + 2t/(1+t^2)$.']
], 'Desenhe o triângulo: a trigonometria vira Pitágoras.'));

out.push({ out: DIR + 'aula-1-razoes-notaveis-identidades.html', html: K.deck({
  title: 'Trigonometria no triângulo retângulo — ENA · PROFMAT', brand: 'Trigonometria', key: 'c13a1', meta: 'Capítulo 13 · Aula 1 · Razões e identidades', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['t1-a'], function(){ var a = +$('t1-a').value; $('t1-av').textContent = a; var r = a * Math.PI / 180, svg = $('t1-s'); svg.innerHTML = ''; var H = 120, x0 = 30, y0 = 140, bx = x0 + H * Math.cos(r), by = y0 - H * Math.sin(r); el('polygon', {points: x0 + ',' + y0 + ' ' + bx.toFixed(1) + ',' + y0 + ' ' + bx.toFixed(1) + ',' + by.toFixed(1), fill: 'var(--primary)', 'fill-opacity': .2, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); [['hip = 1', (x0 + bx) / 2 - 24, (y0 + by) / 2 - 8], ['adj = cos', (x0 + bx) / 2 - 14, y0 + 15], ['op = sen', bx + 6, (y0 + by) / 2]].forEach(function(t){ var e = el('text', {x: t[1], y: t[2], 'font-size': 11, fill: 'var(--ink)', 'font-weight': 700}, svg); e.textContent = t[0]; }); $('t1-t').textContent = 'sen = ' + nf(Math.sin(r), 4) + ' · cos = ' + nf(Math.cos(r), 4) + ' · tg = ' + nf(Math.tan(r), 4); $('t1-h').textContent = a === 30 ? 'sen 30° = 1/2 · cos 30° = √3/2 ≈ 0,866 · tg 30° = √3/3 ≈ 0,577' : a === 45 ? 'sen 45° = cos 45° = √2/2 ≈ 0,707 · tg 45° = 1' : a === 60 ? 'sen 60° = √3/2 · cos 60° = 1/2 · tg 60° = √3 ≈ 1,732' : 'Teste 30°, 45° e 60° para ver os valores notáveis.'; });
  bind(['t2-x'], function(){ var x = +$('t2-x').value; $('t2-xv').textContent = x; var r = x * Math.PI / 180, s = Math.sin(r), c = Math.cos(r); $('t2-a').textContent = 'sen² + cos² = ' + nf(s * s + c * c, 6); $('t2-b').textContent = '1 + tg² = ' + nf(1 + Math.tan(r) * Math.tan(r), 5) + ' = 1/cos² = ' + nf(1 / (c * c), 5); $('t2-c').textContent = '(sen + cos)² = ' + nf((s + c) * (s + c), 5) + ' = 1 + sen 2x = ' + nf(1 + Math.sin(2 * r), 5); });
  bind(['t3-t'], function(){ var t = +$('t3-t').value; if(t <= 0) return; var h = Math.sqrt(1 + t * t); $('t3-s').textContent = nf(t / h, 5) + ' (= ' + nf(t, 3) + '/√' + nf(1 + t * t, 3) + ')'; $('t3-c').textContent = nf(1 / h, 5); $('t3-q').textContent = nf(1 + 2 * t / (1 + t * t), 5) + ' (= 1 + 2t/(1+t²))'; $('t3-h').textContent = 'Para t = 2: 9/5 = 1,8 (ENA 2026 Q4).'; });`
}) });

// ====================== AULA 2 ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 13 · Aula 2', h1: 'Triângulo qualquer, <span style="color:var(--growth);">radianos e fórmulas</span>',
  sub: 'Lei dos senos e dos cossenos, área com seno, radianos e círculo trigonométrico, redução ao 1º quadrante, adição de arcos e arco duplo: o complemento que ajuda a resolver “por outro caminho”.',
  badges: [['a² = b² + c² − 2bc·cos A'], ['π rad = 180°', 'growth'], ['sen 2a = 2 sen a cos a', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do triângulo qualquer ao círculo trigonométrico.', [
  ['Lei dos cossenos e dos senos', 'quando o triângulo não é retângulo', 'triangle'],
  ['Área com seno', '½·b·c·sen A', 'scale'],
  ['Radianos', 'π rad = 180° e arco s = rθ', 'wave'],
  ['Redução ao 1º quadrante', 'sen(180° − x) = sen x', 'link'],
  ['Adição e arco duplo', 'sen(a ± b), cos(a ± b), sen 2a', 'bulb']
]));
b.push(objetivosSlide([
  'Aplicar a <strong>lei dos cossenos</strong> e a <strong>lei dos senos</strong> em triângulos quaisquer.',
  'Calcular <strong>áreas</strong> com $½ bc·sen A$.',
  'Converter <strong>graus ↔ radianos</strong> e reduzir arcos ao 1º quadrante.',
  'Usar <strong>adição de arcos</strong> e <strong>arco duplo</strong> (ex.: $sen 75^∘$).'
], 'Em prova', 'Ainda não caíram diretamente, mas resolvem “por outro caminho” questões de geometria. Priorize depois de dominar a aula 1.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Dois lados e o ângulo entre eles', `
          ${lede('Um triângulo tem lados <strong>5</strong> e <strong>8</strong> formando um ângulo de <strong>60°</strong>. Qual o terceiro lado?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O terceiro lado mede:', ['6', '7', '$√{89}$', '9'], 1, 'Lei dos cossenos: $c^2 = 5^2 + 8^2 − 2·5·8·cos 60^∘ = 25 + 64 − 40 = 49 ⇒ c = 7$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A lei dos cossenos é o <strong>Pitágoras generalizado</strong>: com $A = 90^∘$, $cos A = 0$ e voltamos a $a^2 = b^2 + c^2$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · triângulo qualquer', 'Lei dos senos, dos cossenos e área', `
          <div class="grid2">
            <div>
              ${F('{a|sen A} = {b|sen B} = {c|sen C} = 2R', false)}
              ${F('a^2 = b^2 + c^2 − 2bc·cos A', false)}
              ${F('"área" = ½ bc·sen A', false)}
              ${callout('Treino 13.3', 'Lados 7 e 8 com ângulo de $30^∘$: área $= ½·7·8·½ = 14$.', 'success')}
            </div>
            ${W.box('Dois lados e o ângulo entre eles', W.row(W.nm('u1-b', 'b', 5), W.nm('u1-c', 'c', 8), W.nm('u1-a', 'ângulo A (°)', 60)) + W.txt('u1-r', 'Terceiro lado a = ') + W.txt('u1-s', 'Área = ') + W.hint('u1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Radianos', 'π rad = 180° e o círculo trigonométrico', `
          <div class="grid2">
            <div>
              ${F('π\\ rad = 180^∘   s = rθ', false)}
              ${tbl(['Graus', '30°', '45°', '60°', '90°', '180°', '360°'], [['Radianos', '${π|6}$', '${π|4}$', '${π|3}$', '${π|2}$', '$π$', '$2π$']])}
              ${callout('Treino 13.6', '$135^∘ = {3π|4}$ e ${5π|6} = 150^∘$.', 'success')}
            </div>
            ${W.box('Círculo trigonométrico', W.rg('u2-t', 'θ (graus)', 0, 360, 5, 60) + W.svg('u2-s', '0 0 260 200') + W.txt('u2-r', '') + W.hint('u2-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Redução e fórmulas', 'Redução ao 1º quadrante, adição e arco duplo', `
          <div class="grid2">
            <div>
              ${F('sen(180^∘ − x) = sen x   cos(180^∘ − x) = −cos x')}
              ${F('sen(180^∘ + x) = −sen x   cos(360^∘ − x) = cos x')}
              ${F('sen(a ± b) = sen a cos b ± cos a sen b')}
              ${F('cos(a ± b) = cos a cos b ∓ sen a sen b')}
              ${F('sen 2a = 2 sen a cos a   cos 2a = cos^2 a − sen^2 a = 1 − 2 sen^2 a')}
            </div>
            ${W.box('Confira numericamente', W.row(W.nm('u3-a', 'a (°)', 45), W.nm('u3-b', 'b (°)', 30)) + W.txt('u3-s', '') + W.txt('u3-c', '') + W.txt('u3-d', '') + W.hint('u3-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Treino 13.4', 'cos 120° e sen 75°', 'Calcule $cos 120^∘$ e $sen 75^∘$ sem calculadora.', [
  ['Redução', '$cos 120^∘ = −cos 60^∘ = −{1|2}$'],
  ['Adição', '$sen 75^∘ = sen(45^∘ + 30^∘) = {√2|2}·{√3|2} + {√2|2}·{1|2}$'],
  ['Simplifique', '$= {√6 + √2|4}$']
], '$cos 120^∘ = −1/2$ e $sen 75^∘ = (√6 + √2)/4 ≈ 0,966$.', 'growth'));

b.push(exemplo('Treino 13.5', 'sen x + cos x = 7/5', 'Calcule $sen x · cos x$.', [
  ['Eleve ao quadrado', '$(sen x + cos x)^2 = 1 + 2 sen x cos x$'],
  ['Substitua', '${49|25} = 1 + 2 sen x cos x$'],
  ['Isole', '$sen x cos x = {24/25|2} = {12|25}$']
], '$sen x · cos x = 12/25$ (e $sen 2x = 24/25$).', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto neste complemento', [
  ['Lei dos cossenos com o ângulo errado', 'O ângulo $A$ é o <strong>oposto</strong> ao lado $a$.'],
  ['$sen(a + b) ≠ sen a + sen b$', 'Use $sen a cos b + cos a sen b$.'],
  ['Sinais na redução', 'No 2º quadrante o cosseno é negativo: $cos 120^∘ = −cos 60^∘$.'],
  ['Graus × radianos', 'Confira a unidade antes de usar $s = rθ$ (θ em radianos).']
]));

b.push(quiz([
  { q: 'Um triângulo tem lados 5 e 8 com ângulo de 60° entre eles. O terceiro lado mede:', o: ['6', '7', '9', '$√{89}$'], a: 1 },
  { q: 'O valor de $cos 120^∘$ é:', o: ['−1/2', '1/2', '$−√3/2$', '$√3/2$'], a: 0 },
  { q: '$135^∘$ equivale, em radianos, a:', o: ['$π/4$', '$2π/3$', '$3π/4$', '$5π/6$'], a: 2 },
  { q: 'Se $sen x + cos x = {7|5}$, então $sen x · cos x$ vale:', o: ['12/25', '24/25', '1/5', '7/25'], a: 0 }
]));
b.push(fechamento([
  ['Triângulo qualquer', 'Cossenos: $a^2 = b^2 + c^2 − 2bc·cos A$; área $½bc·sen A$.'],
  ['Radianos', '$π$ rad $= 180^∘$; reduza arcos ao 1º quadrante com sinais.'],
  ['Fórmulas', 'Adição $sen(a±b)$; arco duplo $sen 2a = 2 sen a cos a$.']
], 'Fórmulas extras ajudam a resolver “por outro caminho”.'));

out.push({ out: DIR + 'aula-2-triangulo-qualquer-radianos-formulas.html', html: K.deck({
  title: 'Triângulo qualquer, radianos e fórmulas — ENA · PROFMAT', brand: 'Trigonometria', key: 'c13a2', meta: 'Capítulo 13 · Aula 2 · Triângulo qualquer e radianos', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['u1-b', 'u1-c', 'u1-a'], function(){ var b = +$('u1-b').value, c = +$('u1-c').value, A = +$('u1-a').value, r = A * Math.PI / 180, a2 = b * b + c * c - 2 * b * c * Math.cos(r); $('u1-r').textContent = nf(Math.sqrt(a2), 4) + ' (a² = ' + nf(a2, 4) + ')'; $('u1-s').textContent = nf(0.5 * b * c * Math.sin(r), 4); $('u1-h').textContent = A === 90 ? 'Com A = 90° vira Pitágoras.' : 'Para b = 5, c = 8, A = 60°: a = 7 · para 7, 8, 30°: área 14.'; });
  bind(['u2-t'], function(){ var t = +$('u2-t').value; $('u2-tv').textContent = t; var r = t * Math.PI / 180, svg = $('u2-s'); svg.innerHTML = ''; var cx = 130, cy = 100, R = 80; el('line', {x1: 20, y1: cy, x2: 240, y2: cy, stroke: 'var(--ink-soft)'}, svg); el('line', {x1: cx, y1: 10, x2: cx, y2: 190, stroke: 'var(--ink-soft)'}, svg); el('circle', {cx: cx, cy: cy, r: R, fill: 'none', stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); var px = cx + R * Math.cos(r), py = cy - R * Math.sin(r); el('line', {x1: cx, y1: cy, x2: px, y2: py, stroke: 'var(--primary)', 'stroke-width': 3}, svg); el('line', {x1: px, y1: py, x2: px, y2: cy, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg); el('line', {x1: cx, y1: cy, x2: px, y2: cy, stroke: 'var(--decay)', 'stroke-width': 2.5}, svg); el('circle', {cx: px, cy: py, r: 5, fill: 'var(--primary)'}, svg); $('u2-r').textContent = 'θ = ' + nf(r, 4) + ' rad · cos θ = ' + nf(Math.cos(r), 4) + ' (verde-água) · sen θ = ' + nf(Math.sin(r), 4) + ' (laranja)'; $('u2-h').textContent = t === 120 ? 'cos 120° = −cos 60° = −1/2' : 'θ em radianos = θ° × π/180.'; });
  bind(['u3-a', 'u3-b'], function(){ var a = +$('u3-a').value * Math.PI / 180, b = +$('u3-b').value * Math.PI / 180; $('u3-s').textContent = 'sen(a + b) = ' + nf(Math.sin(a + b), 5) + ' = sen a cos b + cos a sen b = ' + nf(Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b), 5); $('u3-c').textContent = 'cos(a + b) = ' + nf(Math.cos(a + b), 5) + ' = cos a cos b − sen a sen b = ' + nf(Math.cos(a) * Math.cos(b) - Math.sin(a) * Math.sin(b), 5); $('u3-d').textContent = 'sen 2a = ' + nf(Math.sin(2 * a), 5) + ' = 2 sen a cos a = ' + nf(2 * Math.sin(a) * Math.cos(a), 5); $('u3-h').textContent = 'Com a = 45° e b = 30°: sen 75° = (√6 + √2)/4 ≈ 0,9659.'; });`
}) });

module.exports = out;
