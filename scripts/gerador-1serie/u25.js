// Unidade 25 — Razões trigonométricas no triângulo retângulo: seno, cosseno e tangente (aulas 71 a 76)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { svg, ln, ci, dot, tx, txu, poli, vert, medida, reto, arco, igual, cen, mid } = require('./geo.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'razoes-trigonometricas', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u25', BRAND = 'Razões Trigonométricas', CAP = 'Aulas 71 a 76';
const pages = [];

// ---------- figuras ----------
const rot = (() => {
  const B = [50, 150], C = [290, 150], A = [290, 50], c = cen([A, B, C]);
  let s = poli([A, B, C]) + reto(C, B, A, 11) + arco(B, C, A, 'α', 34);
  s += txu(A[0] + 12, A[1] - 4, 'A', 'var(--ink)', 13) + txu(B[0] - 12, B[1] + 14, 'B', 'var(--ink)', 13) + txu(C[0] + 12, C[1] + 14, 'C', 'var(--ink)', 13);
  s += txu((A[0] + C[0]) / 2 + 52, (A[1] + C[1]) / 2 + 4, 'cateto oposto', 'var(--decay)', 12) + txu((B[0] + C[0]) / 2, B[1] + 20, 'cateto adjacente', 'var(--growth)', 12) + txu((A[0] + B[0]) / 2 - 20, (A[1] + B[1]) / 2 - 12, 'hipotenusa', 'var(--primary)', 12);
  return svg(380, 180, s, '440px');
})();
const elev = (() => {
  const g = 150;
  let s = ln(10, g, 360, g, 'var(--ink-soft)', 2) + ln(300, g, 300, g - 100, 'var(--growth)', 8) + ln(300, g - 100, 80, g, 'var(--decay)', 1.8) + ln(80, g, 300, g, 'var(--decay)', 4);
  s += arco([80, g], [300, g], [300, g - 100], '30°', 30, 'var(--primary)') + txu(190, g + 18, 'sombra: 30 m', 'var(--decay)', 12) + txu(318, g - 50, 'h', 'var(--growth)', 14, 'start');
  return svg(380, 175, s, '440px');
})();
// tabela de valores
const graus = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
const f3 = v => String(+v.toFixed(3)).replace('.', ',');
const rad = x => x * Math.PI / 180;
const tabela = tbl(['α', ...graus.map(g => g + '°')], [['sen α', ...graus.map(g => f3(Math.sin(rad(g))))], ['cos α', ...graus.map(g => f3(Math.cos(rad(g))))], ['tg α', ...graus.map(g => f3(Math.tan(rad(g))))]]);

const TJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function rad(g){ return g * Math.PI / 180; }
  function triangulo(svg, alfa, hip, nome){ svg.innerHTML = ''; var a = rad(alfa), adj = hip * Math.cos(a), op = hip * Math.sin(a), sc = Math.min(260 / Math.max(adj, 1e-9), 130 / Math.max(op, 1e-9)), B = [40, 160], C = [40 + adj * sc, 160], A = [C[0], 160 - op * sc];
    el('polygon', {points: [A, B, C].map(function(q){ return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg); el('rect', {x: C[0] - 11, y: C[1] - 11, width: 11, height: 11, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 1.4}, svg);
    var arcPath = 'M' + (B[0] + 34) + ',' + B[1] + ' A34,34 0 0 0 ' + (B[0] + 34 * Math.cos(a)).toFixed(1) + ',' + (B[1] - 34 * Math.sin(a)).toFixed(1); el('path', {d: arcPath, fill: 'none', stroke: 'var(--growth)', 'stroke-width': 2}, svg);
    [[(B[0] + C[0]) / 2, 178, 'adjacente ' + pt(adj, 2), 'middle', 'var(--growth)'], [C[0] + 6, (A[1] + C[1]) / 2, 'oposto ' + pt(op, 2), 'start', 'var(--decay)'], [(A[0] + B[0]) / 2 - 8, (A[1] + B[1]) / 2 - 10, 'hip. ' + pt(hip, 2), 'end', 'var(--primary)'], [B[0] + 40, B[1] - 7, 'α', 'start', 'var(--growth)']].forEach(function(t){ var e = el('text', {x: t[0], y: t[1], 'text-anchor': t[3], 'font-size': 12, 'font-weight': 700, fill: t[4]}, svg); e.textContent = t[2]; }); }
`;

// ===================== AULA 1: seno =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 71 e 72', h1: 'O seno: <span style="color:var(--primary);">medir sem alcançar</span>',
  sub: 'Como descobrir a altura de um prédio só com uma trena e um ângulo? Relacionando lados e ângulos de um triângulo retângulo. O seno é a primeira dessas ferramentas.',
  badges: [['sen α = oposto ÷ hipotenusa'], ['independe do tamanho', 'growth'], ['ângulos notáveis', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do cateto oposto à altura do prédio.', [
  ['Elementos', 'cateto oposto, adjacente e hipotenusa', 'bulb'],
  ['Seno', 'sen α = cateto oposto ÷ hipotenusa', 'target'],
  ['Constância', 'só o ângulo importa, não o tamanho', 'link'],
  ['Ângulos notáveis', '30°, 45° e 60°', 'chart'],
  ['Problemas', 'rampas, aviões, tirolesas e mastros', 'scale']
]));
a.push(objetivosSlide([
  'Identificar <strong>cateto oposto</strong>, <strong>cateto adjacente</strong> e <strong>hipotenusa</strong> em relação a um ângulo.',
  'Definir e calcular o <strong>seno</strong> de um ângulo agudo.',
  'Usar o seno para achar <strong>alturas e comprimentos</strong> inacessíveis.',
  'Conhecer os valores do seno para <strong>30°, 45° e 60°</strong>.'
], 'Dica', 'O “oposto” e o “adjacente” dependem <strong>do ângulo escolhido</strong>: o cateto <em>longe</em> do ângulo é o oposto; o <em>perto</em> (que forma o ângulo com a hipotenusa) é o adjacente.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Como medir a altura de um prédio?', `
          ${lede('Será possível medir a altura de um prédio só com uma trena? Dificilmente: não dá para subir até o topo nem esticar a trena na vertical. Mas se <strong>medirmos um ângulo</strong> e uma <strong>distância no chão</strong>, a Trigonometria calcula o resto. Ela relaciona <strong>lados e ângulos</strong> de triângulos retângulos.')}
          <div class="grid2" style="margin-top:6px;">
            ${rot}
            ${mini('Em relação ao ângulo $α$ (vértice $B$), o cateto $AC$ é:', ['a hipotenusa', 'o cateto adjacente', 'o cateto oposto', 'a altura'], 2, '$AC$ está do outro lado do ângulo $α$: é o cateto <strong>oposto</strong>. O adjacente é $BC$ (forma o ângulo com a hipotenusa $AB$).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · o seno', 'Oposto ÷ hipotenusa', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Seno</strong> de um ângulo agudo $α$ em um triângulo retângulo: <strong>$"sen" α = {"cateto oposto"|"hipotenusa"}$</strong>.</li>
                <li>O seno é um número <strong>entre 0 e 1</strong> (cateto menor que a hipotenusa).</li>
                <li>Não depende do tamanho do triângulo: triângulos semelhantes têm o mesmo seno.</li>
                <li>Para achar o cateto oposto: $"oposto" = "sen" α · "hipotenusa"$.</li>
                <li>Para achar a hipotenusa: $"hipotenusa" = {"oposto"|"sen" α}$.</li>
              </ul>
            </div>
            ${W.box('Triângulo retângulo pelo ângulo', W.sel('s1-d', 'Lado conhecido', ['hipotenusa', 'cateto oposto', 'cateto adjacente'], 0) + W.row(W.nm('s1-l', 'Medida do lado', 10, 'any'), W.nm('s1-a', 'Ângulo α (graus)', 30, 'any')) + W.svg('s1-s', '0 0 360 190', '380px') + W.txt('s1-r', 'Seno, cosseno, tangente: ') + W.txt('s1-m', 'Lados: ') + W.hint('s1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Ângulos notáveis', 'Valores que vale a pena memorizar', `
          <div class="grid2">
            <div>
              ${tbl(['α', '30°', '45°', '60°'], [['sen α', '$1/2$', '$√{2}/2$', '$√{3}/2$'], ['cos α', '$√{3}/2$', '$√{2}/2$', '$1/2$'], ['tg α', '$√{3}/3$', '1', '$√{3}$']])}
              <p style="font-size:.9rem;margin-top:8px;">Aproximações: $√{2} ≈ 1,41$ e $√{3} ≈ 1,73$ ⇒ $"sen" 45° ≈ 0,71$ e $"sen" 60° ≈ 0,87$.</p>
            </div>
            ${callout('Por que 30° e 60° se invertem?', 'Em um triângulo retângulo, os dois ângulos agudos são <strong>complementares</strong> ($α + β = 90°$). O cateto oposto a $α$ é o adjacente a $β$: <strong>$"sen" α = "cos" β$</strong>. Por isso $"sen" 30° = "cos" 60°$.', 'success')}
          </div>`.split('"sen" ').join('"sen" ').split('"cos" ').join('"cos" '), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A altura da rampa', 'Uma rampa lisa de 12 m de comprimento faz um ângulo de 20° com o plano horizontal. Usando sen 20° ≈ 0,34, a que altura sobe quem percorre a rampa inteira?', [
  ['Esboce', 'Rampa = hipotenusa ($12$ m); a altura é o cateto <strong>oposto</strong> ao ângulo de $20°$.'],
  ['Escolha a razão', 'Oposto e hipotenusa: <strong>seno</strong>. $"sen" 20° = {h|12}$.'],
  ['Calcule', '$h = 12 · 0,34 = 4,08$ m.']
], 'A pessoa se eleva cerca de <strong>4,08 m</strong>.'));
a.push(exemplo('Exemplo resolvido', 'A tirolesa', 'Uma tirolesa será montada em uma montanha de 100 m de altura, com o cabo formando 30° com o chão. Qual o comprimento do cabo? (sen 30° = 0,5)', [
  ['Esboce', 'Altura $= 100$ m (cateto oposto); cabo = hipotenusa.'],
  ['Razão', '$"sen" 30° = {100|"cabo"}$ ⇒ $"cabo" = {100|0,5}$.'],
  ['Calcule', '$"cabo" = 200$ m.']
], 'O cabo terá <strong>200 m</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O avião que decola', 'Um avião decola formando 40° com o solo e percorre 800 m. A altura atingida? (sen 40° ≈ 0,64)', [
  ['Esboce', 'Trajetória $= 800$ m (hipotenusa); altura = cateto oposto.'],
  ['Razão', '$"sen" 40° = {h|800}$.'],
  ['Calcule', '$h = 800 · 0,64 = 512$ m.']
], 'O avião atinge <strong>512 m</strong> de altura.', 'growth'));

a.push(pratique('Altura da rampa', 'Uma rampa de 12 m forma 20° com o plano horizontal (sen 20° ≈ 0,34). A altura atingida é:',
  ['3,4 m', '4,08 m', '5,2 m', '9,8 m', '12 m'], 1,
  'Altura $= 12 · 0,34 = 4,08$ m. <strong>Alternativa B.</strong>'));
a.push(pratique('A tirolesa', 'Uma tirolesa parte do alto de uma montanha de 100 m e forma 30° com o chão. O comprimento do cabo é:',
  ['100 m', '141 m', '173 m', '200 m', '300 m'], 3,
  '$"sen" 30° = 0,5 = {100|c}$ ⇒ $c = 200$ m. <strong>Alternativa D.</strong>'));
a.push(estiloEnem('A escada e o ângulo de 60°', 'Uma escada de 6 m apoia-se em uma parede formando 60° com o solo. A altura da parede atingida pela escada é:',
  ['3 m', '3√2 m', '3√3 m', '6 m', '6√3 m'], 2,
  '$"sen" 60° = √{3}/2 = {h|6}$ ⇒ $h = 6 · √{3}/2 = 3√{3}$ m. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o seno engana', [
  ['Oposto × adjacente', 'Em relação ao ângulo escolhido: oposto está “longe”, adjacente “perto”. Trocar de ângulo troca os nomes.'],
  ['Hipotenusa errada', 'Seno usa a <strong>hipotenusa</strong> (o maior lado). Com os dois catetos, a razão é a tangente.'],
  ['Modo de calculadora', 'Confira se a calculadora está em <strong>graus</strong> e não em radianos.'],
  ['Seno maior que 1', 'Seno de ângulo agudo fica entre 0 e 1: se passou de 1, a conta tem erro.']
]));
a.push(quiz([
  { q: 'Em um triângulo retângulo, o seno de $α$ é:', o: ['oposto ÷ hipotenusa', 'adjacente ÷ hipotenusa', 'oposto ÷ adjacente', 'hipotenusa ÷ oposto'], a: 0 },
  { q: 'O seno de 30° vale:', o: ['0,5', '0,71', '0,87', '1'], a: 0 },
  { q: 'Rampa de 10 m a 30°: altura:', o: ['5 m', '10 m', '8,7 m', '20 m'], a: 0 },
  { q: 'O seno de um ângulo agudo está sempre:', o: ['entre 0 e 1', 'maior que 1', 'negativo', 'igual a 1'], a: 0 }
]));
a.push(fechamento([
  ['Seno', 'sen α = oposto ÷ hipotenusa.'],
  ['Notáveis', 'sen 30° = 1/2 · sen 45° = √2/2 · sen 60° = √3/2.'],
  ['Uso', 'Esboço, ângulo escolhido e razão certa.']
], 'Escolha o ângulo, nomeie os lados e use o seno.'));

pages.push({ out: BASE + 'aula-1-o-seno.html', html: K.deck({
  title: 'O seno — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 71 e 72 · O seno', slides: a,
  extra: WJS + BIND + TJS + String.raw`
  bind(['s1-d', 's1-l', 's1-a'], function(){ var d = +$('s1-d').value, L = +$('s1-l').value, al = +$('s1-a').value; if(![L, al].every(isFinite) || L <= 0 || al <= 0 || al >= 90){ $('s1-r').textContent = 'use lado positivo e ângulo entre 0° e 90°'; $('s1-m').textContent = ''; $('s1-s').innerHTML = ''; return; }
    var a = rad(al), s = Math.sin(a), c = Math.cos(a), t = Math.tan(a), hip = d === 0 ? L : d === 1 ? L / s : L / c; triangulo($('s1-s'), al, hip);
    $('s1-r').textContent = 'sen = ' + pt(s, 3) + ' · cos = ' + pt(c, 3) + ' · tg = ' + pt(t, 3); $('s1-m').textContent = 'hipotenusa ' + pt(hip, 3) + ' · oposto ' + pt(hip * s, 3) + ' · adjacente ' + pt(hip * c, 3);
    $('s1-h').textContent = d === 0 ? 'Oposto = hipotenusa · sen α.' : d === 1 ? 'Hipotenusa = oposto ÷ sen α.' : 'Hipotenusa = adjacente ÷ cos α.'; });`
}) });

// ===================== AULA 2: cosseno, tangente e problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 74 a 76', h1: 'Cosseno, tangente e problemas: <span style="color:var(--growth);">três razões, um triângulo</span>',
  sub: 'O cosseno relaciona o cateto adjacente à hipotenusa; a tangente relaciona os dois catetos. Com as três razões, escolhe-se a certa pelo que se sabe e pelo que se quer.',
  badges: [['cos α = adjacente ÷ hipotenusa'], ['tg α = oposto ÷ adjacente', 'growth'], ['escolher a razão', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Escolher a razão pelo que se tem e pelo que se quer.', [
  ['Cosseno', 'adjacente ÷ hipotenusa', 'bulb'],
  ['Tangente', 'oposto ÷ adjacente (sem hipotenusa)', 'target'],
  ['Escolha', 'mapa: dados e incógnita', 'link'],
  ['Tabela de valores', 'ângulos não notáveis', 'chart'],
  ['Problemas', 'sombras, escadas e navegação', 'scale']
]));
b.push(objetivosSlide([
  'Definir e usar o <strong>cosseno</strong> e a <strong>tangente</strong> de um ângulo agudo.',
  '<strong>Escolher a razão</strong> a partir dos lados envolvidos.',
  'Usar uma <strong>tabela</strong> de valores aproximados e os ângulos notáveis.',
  'Resolver problemas de <strong>sombra, escada e distância</strong>.'
], 'Dica', 'Faça o <strong>mapa</strong>: o que o problema dá (lado e ângulo) e o que pede (outro lado)? Hipotenusa e oposto: <strong>seno</strong>. Hipotenusa e adjacente: <strong>cosseno</strong>. Oposto e adjacente: <strong>tangente</strong>.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Duas pistas, a mesma altura', `
          ${lede('A pista A tem <strong>3 m de altura</strong> e se espalha por <strong>10 m</strong> no chão. A pista B tem os mesmos 3 m de altura, mas se espalha por <strong>5 m</strong>. Qual é mais íngreme? A B, claro. O que muda é a razão <strong>altura ÷ distância no chão</strong>: a <strong>tangente</strong> do ângulo da pista.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A tangente do ângulo de cada pista é:', ['A: 0,3 e B: 0,6', 'A: 0,6 e B: 0,3', 'A: 3 e B: 5', 'A: 10 e B: 5'], 0, '$"tg" = {"oposto"|"adjacente"} = {3|10} = 0,3$ (pista A) e ${3|5} = 0,6$ (pista B). Quanto maior a tangente, mais íngreme.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;"><strong>cos α</strong> = adjacente ÷ hipotenusa · <strong>tg α</strong> = oposto ÷ adjacente. A tangente <strong>não usa</strong> a hipotenusa.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · cosseno e tangente', 'As três razões', `
          <div class="grid2">
            <div>
              ${tbl(['Razão', 'Definição', 'Usa'], [['sen α', 'oposto ÷ hipotenusa', 'hipotenusa e oposto'], ['cos α', 'adjacente ÷ hipotenusa', 'hipotenusa e adjacente'], ['tg α', 'oposto ÷ adjacente', 'os dois catetos']])}
              <ul class="plain" style="font-size:.93rem;line-height:1.7;margin-top:10px;">
                <li>$"tg" α = {"sen" α|"cos" α}$.</li>
                <li>$"sen"^{2} α + "cos"^{2} α = 1$ (Pitágoras).</li>
                <li>$"sen" α = "cos" (90° − α)$ (complementares).</li>
              </ul>
            </div>
            ${W.box('Calculadora de lados', W.sel('c1-d', 'Lado conhecido', ['hipotenusa', 'cateto oposto', 'cateto adjacente'], 2) + W.row(W.nm('c1-l', 'Medida do lado', 25, 'any'), W.nm('c1-a', 'Ângulo α (graus)', 40, 'any')) + W.svg('c1-s', '0 0 360 190', '380px') + W.txt('c1-r', 'Seno, cosseno, tangente: ') + W.txt('c1-m', 'Lados: ') + W.hint('c1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Tabela trigonométrica', 'Valores aproximados para consulta', `
          ${lede('Problemas de prova costumam informar os valores necessários (como $"sen" 20° ≈ 0,34$). Na dúvida, esta tabela serve de apoio:')}
          <div style="overflow-x:auto;margin-top:8px;font-size:.78rem;">${tabela}</div>
          ${callout('Leitura', 'Quanto maior o ângulo, <strong>maior</strong> o seno e a tangente e <strong>menor</strong> o cosseno. A tangente de 45° é exatamente 1.', 'success')}`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'O cabo de aço do prédio', 'Um cabo de aço vai do alto de um prédio até o chão, formando 40° com a horizontal, e é fixado a 25 m da base do prédio. Qual o comprimento do cabo? (cos 40° ≈ 0,76)', [
  ['Esboce', 'Distância no chão = $25$ m = cateto <strong>adjacente</strong> ao ângulo de $40°$; cabo = hipotenusa.'],
  ['Razão', 'Adjacente e hipotenusa: <strong>cosseno</strong>. $"cos" 40° = {25|"cabo"}$.'],
  ['Calcule', '$"cabo" = {25|0,76} ≈ 32,9$ m.']
], 'O cabo mede cerca de <strong>32,9 m</strong>.'));
b.push(exemplo('Exemplo resolvido', 'A sombra do prédio', 'Quando os raios de sol formam $30°$ com o chão, a sombra de um prédio mede $30$ m. Qual a altura do prédio? ($"tg" 30° ≈ 0,58$)', [
  ['Esboce', 'Sombra $= 30$ m (adjacente); altura = oposto.'],
  ['Razão', 'Os dois catetos: <strong>tangente</strong>. $"tg" 30° = {h|30}$.'],
  ['Calcule', '$h = 30 · 0,58 = 17,4$ m.']
], 'O prédio tem cerca de <strong>17,4 m</strong>.', 'growth'));
b.push(sl('Figura', 'A sombra e o ângulo de elevação do sol', `
          <div class="grid2">
            ${elev}
            <div>
              ${callout('Ângulo do sol', 'O ângulo entre o raio e o chão é o <strong>ângulo de elevação</strong> do sol. Altura = sombra · tg (ângulo).', 'success')}
              ${callout('Caso especial', 'Com $45°$, $"tg" 45° = 1$: a altura é <strong>igual</strong> à sombra.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));
b.push(exemplo('Exemplo resolvido', 'A escada de 6 m', 'Uma escada de $6$ m apoia-se em uma parede formando $60°$ com o solo. A que distância do pé da parede está a base da escada?', [
  ['Esboce', 'Escada = hipotenusa; distância pedida = cateto <strong>adjacente</strong> a $60°$.'],
  ['Razão', 'Adjacente e hipotenusa: cosseno. $"cos" 60° = 1/2 = {d|6}$.'],
  ['Calcule', '$d = 6 · 1/2 = 3$ m.']
], 'A base da escada está a <strong>3 m</strong> da parede.', 'growth'));

b.push(pratique('O cabo do prédio', 'Um cabo de aço é fixado a 25 m da base de um prédio e forma 40° com a horizontal (cos 40° ≈ 0,76). O comprimento do cabo é, aproximadamente:',
  ['19 m', '25 m', '32,9 m', '38 m', '41 m'], 2,
  '$"cos" 40° = {25|c}$ ⇒ $c = 25 ÷ 0,76 ≈ 32,9$ m. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('A sombra', 'Com o sol a 30° do chão, a sombra de um prédio mede 30 m (tg 30° ≈ 0,58). A altura do prédio é, aproximadamente:',
  ['15 m', '17,4 m', '24 m', '30 m', '51,7 m'], 1,
  '$h = 30 · "tg" 30° = 30 · 0,58 = 17,4$ m. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Qual razão usar?', 'Em um problema, conhecem-se o <strong>cateto adjacente</strong> a um ângulo e deseja-se achar a <strong>hipotenusa</strong>. A razão que relaciona essas medidas é:',
  ['seno', 'cosseno', 'tangente', 'Pitágoras apenas', 'nenhuma delas'], 1,
  'Adjacente ÷ hipotenusa é o <strong>cosseno</strong>: $"cos" α = {"adjacente"|"hipotenusa"}$, logo $"hipotenusa" = {"adjacente"|"cos" α}$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde cosseno e tangente enganam', [
  ['Trocar a razão', 'Antes de calcular, marque no esboço qual lado é dado, qual é pedido e quais envolvem a hipotenusa.'],
  ['Dividir ao contrário', 'Para achar a <strong>hipotenusa</strong> com cosseno, divida: $c = {"adjacente"|"cos" α}$.'],
  ['Ângulo errado', 'Oposto e adjacente mudam com o ângulo escolhido: mantenha o <strong>mesmo ângulo</strong> em todo o problema.'],
  ['Valor aproximado como exato', 'Use o valor dado pelo enunciado (ou a tabela) e escreva “aproximadamente”.']
]));
b.push(quiz([
  { q: 'O cosseno de $α$ é:', o: ['oposto ÷ hipotenusa', 'adjacente ÷ hipotenusa', 'oposto ÷ adjacente', 'hipotenusa ÷ adjacente'], a: 1 },
  { q: 'A tangente de 45° é:', o: ['0', '0,5', '1', '√2'], a: 2 },
  { q: 'Sombra de 12 m com sol a 45°: altura:', o: ['6 m', '12 m', '24 m', '17 m'], a: 1 },
  { q: 'Para achar o cateto oposto, dados o adjacente e o ângulo, usa-se:', o: ['seno', 'cosseno', 'tangente', 'Pitágoras'], a: 2 }
]));
b.push(fechamento([
  ['Três razões', 'sen = op/hip · cos = adj/hip · tg = op/adj.'],
  ['Mapa', 'Dado + pedido ⇒ razão certa.'],
  ['Confira', 'Hipotenusa é o maior lado; valores plausíveis.']
], 'Esboço, mapa de lados e razão: o roteiro de todo problema trigonométrico.'));

pages.push({ out: BASE + 'aula-2-cosseno-e-tangente.html', html: K.deck({
  title: 'Cosseno, tangente e problemas — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 74 a 76 · Cosseno, tangente e problemas', slides: b,
  extra: WJS + BIND + TJS + String.raw`
  bind(['c1-d', 'c1-l', 'c1-a'], function(){ var d = +$('c1-d').value, L = +$('c1-l').value, al = +$('c1-a').value; if(![L, al].every(isFinite) || L <= 0 || al <= 0 || al >= 90){ $('c1-r').textContent = 'use lado positivo e ângulo entre 0° e 90°'; $('c1-m').textContent = ''; $('c1-s').innerHTML = ''; return; }
    var a = rad(al), s = Math.sin(a), c = Math.cos(a), t = Math.tan(a), hip = d === 0 ? L : d === 1 ? L / s : L / c; triangulo($('c1-s'), al, hip);
    $('c1-r').textContent = 'sen = ' + pt(s, 3) + ' · cos = ' + pt(c, 3) + ' · tg = ' + pt(t, 3); $('c1-m').textContent = 'hipotenusa ' + pt(hip, 3) + ' · oposto ' + pt(hip * s, 3) + ' · adjacente ' + pt(hip * c, 3);
    $('c1-h').textContent = 'tg α = oposto ÷ adjacente = ' + pt(hip * s, 3) + ' ÷ ' + pt(hip * c, 3) + ' = ' + pt(t, 3) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Razões trigonométricas: <span>seno, cosseno e tangente</span>',
  lede: 'Cateto oposto e adjacente, as três razões, ângulos notáveis e como escolher a razão certa para alturas, distâncias, rampas e sombras.',
  badges: ['sen = op/hip', 'cos = adj/hip', 'tg = op/adj'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Elementos', 'Em relação a α', 'chart', 'primary', li(['Oposto: longe do ângulo.', 'Adjacente: perto, forma o ângulo com a hipotenusa.', 'Hipotenusa: oposta ao ângulo reto.'])],
    ['Seno', 'op ÷ hip', 'target', 'growth', p('Rampa 12 m a 20°: 12 · 0,34 = 4,08 m.') + call('Valores', 'sen 30° = 0,5.', 'success')],
    ['Cosseno', 'adj ÷ hip', 'link', 'decay', p('Cabo a 25 m, 40°: 25 ÷ 0,76 ≈ 32,9 m.') + call('Lembre', 'cos α = sen (90° − α).', 'success')],
    ['Tangente', 'op ÷ adj', 'scale', 'success', p('Sombra 30 m, sol 30°: 30 · 0,58 = 17,4 m.') + call('Atenção', 'Não usa a hipotenusa.', 'success')],
    ['Notáveis', '30°, 45°, 60°', 'up', 'primary', p('sen: 1/2, √2/2, √3/2 · cos: inverso · tg: √3/3, 1, √3')],
    ['Escolha', 'Mapa de dados', 'check', 'growth', li(['Hip + op: seno.', 'Hip + adj: cosseno.', 'Op + adj: tangente.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar oposto e adjacente.', 'Dividir ao contrário.', 'Calculadora em radianos.', 'Misturar ângulos no mesmo problema.', 'Usar seno com os dois catetos.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Razões trigonométricas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: rampa, cabo, sombra, escada e tirolesa.',
  final: 'Esboço, mapa de lados e a razão certa: seno, cosseno ou tangente.',
  questions: [
    { badge: 'Estilo ENEM · seno', text: 'Uma rampa de 12 m forma 20° com o plano horizontal. Use $"sen" 20° ≈ 0,34$.', cmd: 'A altura atingida ao subir a rampa inteira é:', opts: ['3,4 m', '4,08 m', '5,2 m', '9,8 m', '12 m'], a: 1,
      sol: '<p>$h = 12 · 0,34 = 4,08$ m.</p>' },
    { badge: 'Estilo ENEM · cosseno', text: 'Um cabo de aço é fixado a 25 m da base de um prédio e forma 40° com a horizontal. Use $"cos" 40° ≈ 0,76$.', cmd: 'O comprimento do cabo é, aproximadamente:', opts: ['19 m', '25 m', '32,9 m', '38 m', '41 m'], a: 2,
      sol: '<p>$"cos" 40° = {25|c}$ ⇒ $c = 25 ÷ 0,76 ≈ 32,9$ m.</p>' },
    { badge: 'Estilo ENEM · tangente', text: 'Com o sol a 30° do chão, a sombra de um prédio mede 30 m. Use $"tg" 30° ≈ 0,58$.', cmd: 'A altura do prédio é, aproximadamente:', opts: ['15 m', '17,4 m', '24 m', '30 m', '51,7 m'], a: 1,
      sol: '<p>$h = 30 · 0,58 = 17,4$ m.</p>' },
    { badge: 'Estilo ENEM · ângulo notável', text: 'Uma escada de 6 m apoia-se em uma parede formando 60° com o solo.', cmd: 'A altura da parede atingida é:', opts: ['3 m', '3√2 m', '3√3 m', '6 m', '6√3 m'], a: 2,
      sol: '<p>$h = 6 · "sen" 60° = 6 · √{3}/2 = 3√{3}$ m.</p>' },
    { badge: 'Estilo ENEM · tirolesa', text: 'Uma tirolesa parte do alto de uma montanha de 100 m e forma 30° com o chão. Use $"sen" 30° = 0,5$.', cmd: 'O comprimento do cabo é:', opts: ['100 m', '141 m', '173 m', '200 m', '300 m'], a: 3,
      sol: '<p>$c = 100 ÷ 0,5 = 200$ m.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">razão</span> usar?',
  subtitle: 'Seno, cosseno ou tangente? Leia os dados e o que se pede.',
  tpl: cClassificar({
    cats: ['seno', 'cosseno', 'tangente'],
    intro: 'Cada cartão descreve o que se sabe e o que se quer. Escolha a razão trigonométrica certa e clique em <strong>Conferir</strong>.',
    final: 'Hipotenusa + oposto: seno. Hipotenusa + adjacente: cosseno. Os dois catetos: tangente.',
    itens: [
      ['Dados: hipotenusa e ângulo. Quer: cateto oposto.', 0, 'Oposto e hipotenusa: seno.'],
      ['Dados: hipotenusa e ângulo. Quer: cateto adjacente.', 1, 'Adjacente e hipotenusa: cosseno.'],
      ['Dados: cateto adjacente e ângulo. Quer: cateto oposto.', 2, 'Os dois catetos: tangente.'],
      ['Dados: cateto oposto e ângulo. Quer: hipotenusa.', 0, 'Oposto e hipotenusa: seno.'],
      ['Dados: cateto adjacente e ângulo. Quer: hipotenusa.', 1, 'Adjacente e hipotenusa: cosseno.'],
      ['Dados: os dois catetos. Quer: o ângulo.', 2, 'A razão entre os catetos é a tangente.'],
      ['Altura de um prédio pela sombra e pelo ângulo do sol.', 2, 'Altura (oposto) e sombra (adjacente): tangente.'],
      ['Altura de uma rampa, dados o comprimento e o ângulo.', 0, 'Altura (oposto) e comprimento (hipotenusa): seno.'],
      ['Distância da escada à parede, dados o comprimento e o ângulo.', 1, 'Distância (adjacente) e escada (hipotenusa): cosseno.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Razões trigonométricas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com seno, cosseno e tangente. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: seno, cosseno, tangente e ângulos notáveis.',
  problems: [
    { tag: 'Seno', q: 'Rampa de 12 m a 20° (sen 20° = 0,34). Qual a altura (m)?', a: 4.08, tol: 0.02, ph: 'm', hint: '12 · 0,34.', sol: '<p>$4,08$ m.</p>' },
    { tag: 'Cosseno', q: 'Cabo a 25 m da base, 40° com a horizontal (cos 40° = 0,76). Qual o comprimento (m, uma casa decimal)?', a: 32.9, tol: 0.15, ph: 'm', hint: '25 ÷ 0,76.', sol: '<p>$≈ 32,9$ m.</p>' },
    { tag: 'Tangente', q: 'Sol a 30° (tg 30° = 0,58), sombra de 30 m. Qual a altura do prédio (m)?', a: 17.4, tol: 0.1, ph: 'm', hint: '30 · 0,58.', sol: '<p>$17,4$ m.</p>' },
    { tag: 'Tirolesa', q: 'Montanha de 100 m e ângulo de 30° (sen 30° = 0,5). Qual o cabo (m)?', a: 200, ph: 'm', hint: '100 ÷ 0,5.', sol: '<p>$200$ m.</p>' },
    { tag: 'Ângulo de 45°', q: 'Sol a 45° e sombra de 12 m. Qual a altura (m)?', a: 12, ph: 'm', hint: 'tg 45° = 1.', sol: '<p>$12$ m.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Razões Trigonométricas', accent: 'primary', icon: 'wave',
  aulas: [['Aulas 71–72', 'O seno', 'aula-1-o-seno.html'], ['Aulas 74–76', 'Cosseno, tangente e problemas', 'aula-2-cosseno-e-tangente.html']],
  enem: 'Razões trigonométricas no estilo ENEM', cria: 'Qual razão usar?', pratica: 'Razões trigonométricas: trilha de desafios'
}, pages };
