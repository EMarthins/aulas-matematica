// Unidade 24 — Teorema de Pitágoras e relações métricas no triângulo retângulo (aulas 68 a 70)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { svg, ln, ci, dot, tx, txu, poli, vert, medida, reto, arco, igual, cen, mid } = require('./geo.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'pitagoras-e-relacoes-metricas', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u24', BRAND = 'Pitágoras e Relações Métricas', CAP = 'Aulas 68 a 70';
const pages = [];

// ---------- figuras ----------
// triângulo 3-4-5 com os quadrados sobre os lados
const quadrados = (() => {
  const o = [150, 150], u = 20, C = [o[0], o[1]], B = [o[0] + 4 * u, o[1]], A = [o[0], o[1] - 3 * u];
  const sq1 = [C, B, [B[0], B[1] + 4 * u], [C[0], C[1] + 4 * u]];
  const sq2 = [C, A, [A[0] - 3 * u, A[1]], [C[0] - 3 * u, C[1]]];
  const dx = B[0] - A[0], dy = B[1] - A[1];
  const L = Math.hypot(dx, dy), px = dy / L * L, py = -dx / L * L;   // perpendicular de comprimento L, para fora
  const sq3 = [A, B, [B[0] + px, B[1] + py], [A[0] + px, A[1] + py]];
  let s = poli(sq1, 'var(--growth)', 'var(--growth-soft)', 2) + poli(sq2, 'var(--decay)', 'var(--decay-soft)', 2) + poli(sq3, 'var(--primary)', 'var(--primary-soft)', 2) + poli([A, B, C], 'var(--ink)', 'var(--surface)', 2.4) + reto(C, A, B, 10);
  s += txu(C[0] + 2 * u, C[1] + 2.5 * u, '4² = 16', 'var(--growth)', 13) + txu(C[0] - 1.5 * u, C[1] - 0.8 * u, '3² = 9', 'var(--decay)', 13) + txu((A[0] + B[0]) / 2 + px / 2, (A[1] + B[1]) / 2 + py / 2 + 4, '5² = 25', 'var(--primary)', 13);
  s += txu(C[0] + 2 * u, C[1] - 6, '4', 'var(--ink)', 12) + txu(C[0] - 10, C[1] - 1.5 * u, '3', 'var(--ink)', 12);
  return svg(360, 240, s, '400px');
})();
// triângulo retângulo com a altura relativa à hipotenusa
const metricas = (() => {
  const B = [30, 160], C = [330, 160], H = [30 + 3.6 / 10 * 300, 160], A = [H[0], 160 - 4.8 * 24];
  // A é o vértice do ângulo reto: BAC = 90°; BC é a hipotenusa
  let s = poli([A, B, C], 'var(--ink-soft)', 'none', 2.2) + ln(A[0], A[1], H[0], H[1], 'var(--primary)', 2.6) + reto(A, B, C, 11) + reto(H, A, C, 9);
  s += txu(A[0], A[1] - 8, 'A', 'var(--ink)', 13) + txu(B[0] - 10, B[1] + 14, 'B', 'var(--ink)', 13) + txu(C[0] + 10, C[1] + 14, 'C', 'var(--ink)', 13) + txu(H[0], H[1] + 16, 'H', 'var(--primary)', 13);
  s += txu((B[0] + H[0]) / 2, B[1] + 16, 'm', 'var(--growth)', 13) + txu((H[0] + C[0]) / 2, C[1] + 16, 'n', 'var(--decay)', 13) + txu(H[0] + 12, (A[1] + H[1]) / 2 + 4, 'h', 'var(--primary)', 13);
  s += txu((B[0] + A[0]) / 2 - 12, (B[1] + A[1]) / 2 - 4, 'c', 'var(--ink)', 13) + txu((A[0] + C[0]) / 2 + 12, (A[1] + C[1]) / 2 - 4, 'b', 'var(--ink)', 13) + txu(180, 196, 'a = m + n', 'var(--ink-soft)', 12);
  return svg(360, 205, s, '420px');
})();

// ===================== AULA 1: Pitágoras =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 68', h1: 'Teorema de Pitágoras: <span style="color:var(--primary);">o atalho que se calcula</span>',
  sub: 'Atravessar a praça pela diagonal é mais curto do que contornar pelas calçadas — mas quanto mais curto? Em todo triângulo retângulo, os quadrados dos lados se relacionam de um jeito exato.',
  badges: [['a² = b² + c²'], ['hipotenusa × catetos', 'growth'], ['recíproca', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do atalho da praça à fórmula.', [
  ['Triângulo retângulo', 'catetos e hipotenusa', 'bulb'],
  ['O teorema', 'a² = b² + c²', 'target'],
  ['Cálculo de um lado', 'hipotenusa ou cateto', 'chart'],
  ['Triplas pitagóricas', '3-4-5, 5-12-13 e múltiplos', 'link'],
  ['Aplicações', 'diagonais, cabos e distâncias', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer <strong>catetos</strong> e <strong>hipotenusa</strong> em um triângulo retângulo.',
  'Aplicar o <strong>Teorema de Pitágoras</strong> para achar um lado desconhecido.',
  'Usar as <strong>triplas pitagóricas</strong> e a <strong>recíproca</strong> do teorema.',
  'Resolver problemas de <strong>distância e diagonal</strong>.'
], 'Dica', 'Antes de substituir, <strong>identifique a hipotenusa</strong>: é o lado <strong>oposto ao ângulo reto</strong> e o maior dos três. É ela que fica sozinha no lado esquerdo de $a^{2} = b^{2} + c^{2}$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O atalho pela praça', `
          ${lede('Numa praça quadrada de lado 30 m, você vai de um canto ao canto oposto. Pelas calçadas são $30 + 30 = 60$ m. Atravessando o gramado em linha reta, o caminho é a <strong>diagonal</strong>. Quanto mede? O Teorema de Pitágoras responde <strong>sem fita métrica</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A diagonal da praça (use $√2 ≈ 1,41$) mede, aproximadamente:', ['30 m', '36 m', '42,3 m', '60 m'], 2, '$d^{2} = 30^{2} + 30^{2} = 1\\ 800$ ⇒ $d = 30√2 ≈ 30 · 1,41 = 42,3$ m: o atalho economiza quase $18$ m.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em um triângulo retângulo: <strong>hipotenusa² = cateto² + cateto²</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · o teorema', 'O quadrado da hipotenusa', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Catetos</strong> $b$ e $c$: os lados que formam o ângulo reto. <strong>Hipotenusa</strong> $a$: o lado oposto, o maior.</li>
                <li><strong>Teorema de Pitágoras</strong>: $a^{2} = b^{2} + c^{2}$.</li>
                <li>Geometricamente: a <strong>área do quadrado</strong> sobre a hipotenusa é a soma das áreas dos quadrados sobre os catetos.</li>
                <li><strong>Recíproca</strong>: se $a^{2} = b^{2} + c^{2}$, o triângulo é retângulo.</li>
                <li>Triplas pitagóricas: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$ e seus múltiplos.</li>
              </ul>
            </div>
            ${quadrados}
          </div>`, { cls: '' }));

a.push(sl('Explore · calculadora de Pitágoras', 'Ache o lado que falta', `
          <div class="grid2">
            ${W.box('Triângulo retângulo', W.sel('p1-q', 'O que procuro?', ['hipotenusa a (dados os catetos)', 'cateto c (dados a hipotenusa e o outro cateto)'], 0) + W.row(W.nm('p1-x', 'Primeiro dado', 3, 'any'), W.nm('p1-y', 'Segundo dado', 4, 'any')) + W.svg('p1-s', '0 0 360 190', '380px') + W.txt('p1-r', 'Resultado: ') + W.txt('p1-t', 'Tripla pitagórica? ') + W.hint('p1-h'))}
            <div>
              ${callout('Primeiro dado e segundo dado', 'Se procura a <strong>hipotenusa</strong>, informe os dois <strong>catetos</strong>. Se procura um <strong>cateto</strong>, informe a <strong>hipotenusa</strong> (primeiro dado) e o outro cateto (segundo dado).', 'success')}
              ${callout('Confira', 'A hipotenusa é sempre o <strong>maior lado</strong>. Se o resultado de uma hipotenusa ficou menor que um cateto, algo foi invertido.', 'danger')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O cabo da antena', 'Um cabo de aço liga o topo de um poste de 16 m a uma estaca no chão, a 12 m da base do poste. Qual o comprimento do cabo?', [
  ['Triângulo retângulo', 'Poste vertical e chão formam $90°$: catetos $16$ e $12$; o cabo é a hipotenusa.'],
  ['Aplique o teorema', '$a^{2} = 16^{2} + 12^{2} = 256 + 144 = 400$.'],
  ['Raiz', '$a = √{400} = 20$ m.']
], 'O cabo tem <strong>20 m</strong> (tripla $12$-$16$-$20$, múltipla de $3$-$4$-$5$).'));
a.push(exemplo('Exemplo resolvido', 'Dois caminhantes', 'Duas pessoas partem do mesmo ponto: uma anda para o norte a 3 km/h e outra para o leste a 4 km/h. Qual a distância em linha reta entre elas após 2 horas?', [
  ['Distâncias percorridas', 'Norte: $3 · 2 = 6$ km; leste: $4 · 2 = 8$ km (direções perpendiculares).'],
  ['Pitágoras', '$d^{2} = 6^{2} + 8^{2} = 36 + 64 = 100$.'],
  ['Distância', '$d = 10$ km.']
], 'Elas estão a <strong>10 km</strong> uma da outra.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A diagonal da caixa', 'Uma caixa em forma de paralelepípedo tem $3$ m, $4$ m e $12$ m. Qual a medida da maior diagonal?', [
  ['Diagonal da base', '$d^{2} = 3^{2} + 4^{2} = 25$ ⇒ $d = 5$ m.'],
  ['Diagonal da caixa', 'Triângulo retângulo com catetos $5$ e $12$: $D^{2} = 25 + 144 = 169$.'],
  ['Resultado', '$D = 13$ m.']
], 'A diagonal da caixa mede <strong>13 m</strong> (fórmula geral: $D = √{a^{2} + b^{2} + c^{2}}$).', 'growth'));

a.push(pratique('O cabo', 'Um poste de 16 m tem um cabo preso ao topo e a uma estaca a 12 m da base. O comprimento do cabo é:',
  ['14 m', '18 m', '20 m', '24 m', '28 m'], 2,
  '$a^{2} = 256 + 144 = 400$ ⇒ $a = 20$ m. <strong>Alternativa C.</strong>'));
a.push(pratique('Cateto desconhecido', 'Em um triângulo retângulo, a hipotenusa mede 13 cm e um cateto, 5 cm. O outro cateto mede:',
  ['8 cm', '10 cm', '12 cm', '14 cm', '18 cm'], 2,
  '$13^{2} = 5^{2} + c^{2}$ ⇒ $c^{2} = 169 − 25 = 144$ ⇒ $c = 12$ cm. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('O atalho da praça', 'Uma praça quadrada tem 30 m de lado. Usando $√2 ≈ 1,41$, a diagonal da praça mede, aproximadamente:',
  ['30 m', '36 m', '42,3 m', '45 m', '60 m'], 2,
  '$d = 30√2 ≈ 30 · 1,41 = 42,3$ m. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde Pitágoras engana', [
  ['Hipotenusa errada', 'A hipotenusa é a oposta ao ângulo reto (a maior): ela é o lado “sozinho” da fórmula.'],
  ['Somar sem elevar ao quadrado', '$a^{2} = b^{2} + c^{2}$, não $a = b + c$.'],
  ['Esquecer a raiz', 'Depois de achar $a^{2} = 400$, calcule $a = 20$.'],
  ['Usar em triângulo qualquer', 'O teorema vale para triângulos <strong>retângulos</strong>.']
]));
a.push(quiz([
  { q: 'Catetos 6 e 8: a hipotenusa mede:', o: ['10', '14', '12', '48'], a: 0 },
  { q: 'Hipotenusa 13 e cateto 5: o outro cateto mede:', o: ['8', '12', '18', '144'], a: 1 },
  { q: 'Qual terna é pitagórica?', o: ['2, 3, 4', '5, 12, 13', '4, 5, 6', '6, 7, 8'], a: 1 },
  { q: 'A diagonal de um quadrado de lado 1 é:', o: ['1', '√2', '2', '√3'], a: 1 }
]));
a.push(fechamento([
  ['Teorema', 'a² = b² + c² (a: hipotenusa).'],
  ['Triplas', '3-4-5, 5-12-13, 8-15-17 e múltiplos.'],
  ['Aplicações', 'Diagonais, cabos e distâncias em ângulo reto.']
], 'Identifique a hipotenusa, eleve ao quadrado e extraia a raiz.'));

pages.push({ out: BASE + 'aula-1-teorema-de-pitagoras.html', html: K.deck({
  title: 'Teorema de Pitágoras — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 68 · Teorema de Pitágoras', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['p1-q', 'p1-x', 'p1-y'], function(){ var q = +$('p1-q').value, x = +$('p1-x').value, y = +$('p1-y').value, s = $('p1-s'); s.innerHTML = '';
    if(![x, y].every(isFinite) || x <= 0 || y <= 0){ $('p1-r').textContent = 'use valores positivos'; $('p1-t').textContent = ''; return; }
    var a, b, c; if(q === 0){ b = x; c = y; a = Math.sqrt(b * b + c * c); } else { a = x; b = y; if(a <= b){ $('p1-r').textContent = 'a hipotenusa deve ser maior que o cateto'; $('p1-t').textContent = ''; $('p1-h').textContent = ''; return; } c = Math.sqrt(a * a - b * b); }
    var sc = Math.min(300 / b, 150 / c), C = [40, 170], B = [40 + b * sc, 170], A = [40, 170 - c * sc]; el('polygon', {points: [A, B, C].map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, s); el('rect', {x: 40, y: 158, width: 12, height: 12, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 1.5}, s);
    [[B[0] / 2 + C[0] / 2, 186, 'cateto ' + pt(b, 3)], [28, (A[1] + C[1]) / 2, 'cateto ' + pt(c, 3)], [(A[0] + B[0]) / 2 + 40, (A[1] + B[1]) / 2 - 8, 'hipotenusa ' + pt(a, 3)]].forEach(function(t){ var e = el('text', {x: t[0], y: t[1], 'text-anchor': t[0] < 40 ? 'start' : 'middle', 'font-size': 12, 'font-weight': 700, fill: 'var(--decay)'}, s); e.textContent = t[2]; });
    $('p1-r').textContent = q === 0 ? 'a = √(' + pt(b) + '² + ' + pt(c) + '²) = ' + pt(a, 3) : 'c = √(' + pt(a) + '² − ' + pt(b) + '²) = ' + pt(c, 3);
    var tri = Math.abs(a - Math.round(a)) < 1e-9 && Math.abs(b - Math.round(b)) < 1e-9 && Math.abs(c - Math.round(c)) < 1e-9; $('p1-t').textContent = tri ? 'sim: (' + pt(Math.min(b, c)) + ', ' + pt(Math.max(b, c)) + ', ' + pt(a) + ')' : 'não (algum lado não é inteiro)';
    $('p1-h').textContent = 'Confira: ' + pt(a, 3) + '² = ' + pt(a * a, 3) + ' e ' + pt(b, 3) + '² + ' + pt(c, 3) + '² = ' + pt(b * b + c * c, 3) + '.'; });`
}) });

// ===================== AULA 2: relações métricas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 69 e 70', h1: 'Relações métricas: <span style="color:var(--growth);">a altura que divide o triângulo retângulo</span>',
  sub: 'A altura relativa à hipotenusa divide o triângulo em dois outros, ambos semelhantes ao original. Dessa semelhança saem cinco relações que resolvem muitos problemas sem sistemas.',
  badges: [['b² = a·m, c² = a·n'], ['h² = m·n', 'growth'], ['b·c = a·h', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Três triângulos semelhantes, cinco relações.', [
  ['Elementos', 'catetos, hipotenusa, altura e projeções', 'bulb'],
  ['Semelhança', 'ABC, HBA e HAC são semelhantes', 'link'],
  ['As relações', 'b² = a·m · c² = a·n · h² = m·n · b·c = a·h', 'chart'],
  ['Escolha da relação', 'qual usar em cada problema', 'target'],
  ['Problemas', 'telhados, encostas e caixas', 'scale']
]));
b.push(objetivosSlide([
  'Identificar <strong>projeções</strong> $m$ e $n$, altura $h$, catetos $b$ e $c$ e hipotenusa $a$.',
  'Deduzir as relações pela <strong>semelhança</strong> dos três triângulos.',
  'Aplicar $b^{2} = a · m$, $c^{2} = a · n$, $h^{2} = m · n$ e $b · c = a · h$.',
  'Combinar as relações com <strong>Pitágoras</strong>.'
], 'Dica', 'Sempre faça um <strong>esboço</strong> com todos os dados. Marque as <strong>projeções</strong> $m$ e $n$ sobre a hipotenusa e a altura $h$: elas dizem qual relação usar.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A estrutura do telhado', `
          ${lede('Numa estrutura de telhado, a viga vertical do centro encontra a base e forma <strong>três triângulos</strong> retângulos: o grande e os dois menores. Eles têm os <strong>mesmos ângulos</strong>, ou seja, são semelhantes. É dessa semelhança que nascem as relações métricas.')}
          <div class="grid2" style="margin-top:6px;">
            ${metricas}
            ${mini('Na figura (ângulo reto em A), $BC = a = m + n$. O segmento $AH$ é:', ['a hipotenusa', 'a altura relativa à hipotenusa', 'uma projeção', 'um cateto'], 1, '$AH$ é perpendicular a $BC$ e sai do vértice do ângulo reto: é a <strong>altura</strong> $h$ relativa à hipotenusa. $BH = m$ e $HC = n$ são as <strong>projeções</strong> dos catetos.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · as relações métricas', 'Cinco igualdades', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$△ABC ∼ △HBA ∼ △HAC$ (ângulo reto e um ângulo agudo em comum).</li>
                <li><strong>$b^{2} = a · n$</strong> e <strong>$c^{2} = a · m$</strong> (cateto² = hipotenusa × sua projeção).</li>
                <li><strong>$h^{2} = m · n$</strong> (altura² = produto das projeções).</li>
                <li><strong>$b · c = a · h$</strong> (produto dos catetos = hipotenusa × altura).</li>
                <li><strong>$a = m + n$</strong> e <strong>$a^{2} = b^{2} + c^{2}$</strong>.</li>
              </ul>
              <p style="font-size:.85rem;margin-top:6px;">Na figura, $c$ é o cateto $AB$ (projeção $m$ em $BC$) e $b$ é o cateto $AC$ (projeção $n$).</p>
            </div>
            ${W.box('Triângulo retângulo pelos catetos', W.row(W.nm('m1-b', 'Cateto b', 6, 'any'), W.nm('m1-c', 'Cateto c', 8, 'any')) + W.svg('m1-s', '0 0 360 210', '380px') + W.txt('m1-a', 'Hipotenusa a: ') + W.txt('m1-h', 'Altura h = b·c ÷ a: ') + W.txt('m1-m', 'Projeções m e n: ') + W.hint('m1-hh'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Catetos 6 e 8', 'Um triângulo retângulo tem catetos $b = 6$ e $c = 8$. Determine a hipotenusa, a altura relativa à hipotenusa e as projeções dos catetos.', [
  ['Hipotenusa', '$a = √{36 + 64} = 10$.'],
  ['Altura', '$b · c = a · h$ ⇒ $48 = 10 · h$ ⇒ $h = 4,8$.'],
  ['Projeções', '$b^{2} = a · n$ ⇒ $n = 36 ÷ 10 = 3,6$; $c^{2} = a · m$ ⇒ $m = 64 ÷ 10 = 6,4$ (e $m + n = 10$ ✓).']
], '$a = 10$, $h = 4,8$, projeções $3,6$ e $6,4$. Confira: $h^{2} = m · n$ ⇒ $4,8^{2} = 23,04 = 3,6 · 6,4$ ✓.'));
b.push(exemplo('Exemplo resolvido', 'Altura e uma projeção conhecidas', 'Em um triângulo retângulo ABC (reto em A), a altura relativa à hipotenusa vale $h = 6$ e a projeção de um cateto é $m = 3$. Quanto mede a hipotenusa e qual o produto dos catetos?', [
  ['Outra projeção', '$h^{2} = m · n$ ⇒ $36 = 3 · n$ ⇒ $n = 12$.'],
  ['Hipotenusa', '$a = m + n = 3 + 12 = 15$.'],
  ['Produto dos catetos', '$b · c = a · h = 15 · 6 = 90$.']
], 'Hipotenusa $15$ e $b · c = 90$. (Catetos: $c = √{a · m} = √{45}$ e $b = √{a · n} = √{180}$.)', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Conferindo as medidas', 'Um triângulo retângulo tem altura relativa à hipotenusa de $12$ m e projeções dos catetos de $9$ m e $16$ m sobre a hipotenusa. Essas medidas são compatíveis? Quais os comprimentos dos catetos?', [
  ['Teste da relação', '$h^{2} = m · n$? $12^{2} = 144 = 9 · 16$ ✓ (compatíveis).'],
  ['Hipotenusa', '$a = m + n = 25$ m.'],
  ['Catetos', '$c = √{a · m} = √{225} = 15$ m e $b = √{a · n} = √{400} = 20$ m.']
], 'Triângulo $15$-$20$-$25$ (múltiplo de $3$-$4$-$5$): as projeções $9$ e $16$ são consistentes com a altura $12$.', 'growth'));

b.push(pratique('Altura relativa à hipotenusa', 'Em um triângulo retângulo de catetos 6 cm e 8 cm, a altura relativa à hipotenusa mede:',
  ['4 cm', '4,8 cm', '5 cm', '6 cm', '7 cm'], 1,
  '$a = 10$; $b · c = a · h$ ⇒ $48 = 10h$ ⇒ $h = 4,8$ cm. <strong>Alternativa B.</strong>'));
b.push(pratique('A hipotenusa pela altura', 'Em um triângulo retângulo, a altura relativa à hipotenusa é 6 cm e uma das projeções dos catetos é 3 cm. A hipotenusa mede:',
  ['9 cm', '12 cm', '15 cm', '18 cm', '21 cm'], 2,
  '$h^{2} = m · n$ ⇒ $36 = 3n$ ⇒ $n = 12$; $a = 3 + 12 = 15$ cm. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Produto dos catetos', 'Em um triângulo retângulo ABC, reto em A, a altura AH relativa à hipotenusa mede 6 cm e $BH = 3$ cm. O produto dos comprimentos dos catetos é:',
  ['45 cm²', '60 cm²', '90 cm²', '120 cm²', '150 cm²'], 2,
  '$h^{2} = BH · HC$ ⇒ $HC = 12$; hipotenusa $= 15$. Produto dos catetos: $b · c = a · h = 15 · 6 = 90$ cm². <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as relações métricas enganam', [
  ['Projeção trocada', 'Cada cateto é a média geométrica da <strong>hipotenusa inteira</strong> e <strong>sua</strong> projeção: $c^{2} = a · m$ (com $m$ adjacente a $c$).'],
  ['Altura de outro vértice', '$h$ é a altura relativa à <strong>hipotenusa</strong> (do vértice do ângulo reto).'],
  ['Usar a relação sem esboço', 'Sem a figura, é fácil trocar $m$ e $n$, $b$ e $c$.'],
  ['Esquecer a conferência', 'Confirme com Pitágoras: $a^{2} = b^{2} + c^{2}$.']
]));
b.push(quiz([
  { q: 'Em um triângulo retângulo, $h^{2}$ é igual a:', o: ['m + n', 'm · n', 'a · m', 'b · c'], a: 1 },
  { q: 'Catetos 3 e 4: a altura relativa à hipotenusa é:', o: ['2,4', '2,5', '3', '3,5'], a: 0 },
  { q: 'Se $m = 4$ e $n = 9$, a altura $h$ vale:', o: ['6', '5', '13', '36'], a: 0 },
  { q: '$b · c = a · h$: o produto dos catetos é igual a:', o: ['hipotenusa × altura', 'soma das projeções', 'área do triângulo', 'a²'], a: 0 }
]));
b.push(fechamento([
  ['Semelhança', 'ABC ∼ HBA ∼ HAC é a origem das relações.'],
  ['Relações', 'b² = a·n · c² = a·m · h² = m·n · b·c = a·h.'],
  ['Conferência', 'a = m + n e a² = b² + c².']
], 'Esboço, projeções marcadas e a relação certa: problema resolvido.'));

pages.push({ out: BASE + 'aula-2-relacoes-metricas.html', html: K.deck({
  title: 'Relações métricas no triângulo retângulo — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 69 e 70 · Relações métricas', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['m1-b', 'm1-c'], function(){ var b = +$('m1-b').value, c = +$('m1-c').value, s = $('m1-s'); s.innerHTML = ''; if(![b, c].every(isFinite) || b <= 0 || c <= 0){ $('m1-a').textContent = '—'; $('m1-h').textContent = ''; $('m1-m').textContent = ''; return; }
    var a = Math.sqrt(b * b + c * c), h = b * c / a, m = c * c / a, n = b * b / a, sc = 300 / a, B = [30, 160], C = [30 + a * sc, 160], H = [30 + m * sc, 160], A = [H[0], 160 - h * sc];
    el('polygon', {points: [A, B, C].map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, s); el('line', {x1: A[0], y1: A[1], x2: H[0], y2: H[1], stroke: 'var(--decay)', 'stroke-width': 2.2, 'stroke-dasharray': '5 4'}, s);
    [[A, 'A', 0, -8], [B, 'B', -10, 14], [C, 'C', 10, 14], [H, 'H', 0, 16]].forEach(function(q){ var t = el('text', {x: q[0][0] + q[2], y: q[0][1] + q[3], 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = q[1]; });
    $('m1-a').textContent = pt(a, 3) + ' (c = ' + pt(c) + ', b = ' + pt(b) + ')'; $('m1-h').textContent = pt(b) + ' · ' + pt(c) + ' ÷ ' + pt(a, 3) + ' = ' + pt(h, 3); $('m1-m').textContent = 'm = ' + pt(m, 3) + ' e n = ' + pt(n, 3) + '  (m + n = ' + pt(m + n, 3) + ')';
    $('m1-hh').textContent = 'Confira: h² = ' + pt(h * h, 3) + ' e m · n = ' + pt(m * n, 3) + '. Cateto c fica ao lado da projeção m; b, ao lado de n.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Pitágoras e relações métricas: <span>do triângulo retângulo ao problema</span>',
  lede: 'a² = b² + c², triplas pitagóricas, diagonais, e as relações entre catetos, hipotenusa, altura e projeções.',
  badges: ['a² = b² + c²', 'h² = m·n', 'b·c = a·h'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Pitágoras', 'Hipotenusa² = soma', 'chart', 'primary', p('$a^{2} = b^{2} + c^{2}$') + call('Exemplo', 'Catetos 12 e 16: hipotenusa 20.', 'success')],
    ['Triplas', 'Inteiros prontos', 'target', 'growth', li(['3, 4, 5', '5, 12, 13', '8, 15, 17 e múltiplos'])],
    ['Diagonais', 'Pitágoras em figuras', 'link', 'decay', p('Quadrado: $d = ℓ√2$. Caixa: $D = √{a^{2} + b^{2} + c^{2}}$.') + call('Exemplo', 'Caixa 3-4-12: D = 13.', 'success')],
    ['Projeções e altura', 'm, n e h', 'scale', 'success', p('$a = m + n$ · $h^{2} = m · n$') + call('Esboço', 'Marque m e n na hipotenusa.', 'success')],
    ['Cateto e produto', 'Relações', 'up', 'primary', p('$b^{2} = a · n$ · $c^{2} = a · m$ · $b · c = a · h$') + call('Exemplo', '6 e 8: h = 4,8.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Hipotenusa é o maior lado?', 'a² = b² + c²?', 'h² = m·n?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar a hipotenusa por um cateto.', 'Somar os lados sem elevar ao quadrado.', 'Esquecer a raiz.', 'Trocar m e n.', 'Usar Pitágoras em triângulo não retângulo.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Pitágoras e relações métricas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: cabo, diagonal da praça, caminhantes, altura e hipotenusa.',
  final: 'Esboço, hipotenusa identificada e a relação métrica certa resolvem os problemas.',
  questions: [
    { badge: 'Estilo ENEM · cabo', text: 'Um cabo liga o topo de um poste de 16 m a uma estaca no chão, a 12 m da base do poste.', cmd: 'O comprimento do cabo é:', opts: ['14 m', '18 m', '20 m', '24 m', '28 m'], a: 2,
      sol: '<p>$a^{2} = 16^{2} + 12^{2} = 400$ ⇒ $a = 20$ m.</p>' },
    { badge: 'Estilo ENEM · diagonal', text: 'Uma praça quadrada tem 30 m de lado. Use $√2 ≈ 1,41$.', cmd: 'A diagonal da praça mede, aproximadamente:', opts: ['30 m', '36 m', '42,3 m', '45 m', '60 m'], a: 2,
      sol: '<p>$30√2 ≈ 42,3$ m.</p>' },
    { badge: 'Estilo ENEM · caminhantes', text: 'Duas pessoas partem do mesmo ponto: uma anda para o norte a 3 km/h e outra para o leste a 4 km/h.', cmd: 'A distância entre elas, após 2 horas, é:', opts: ['7 km', '10 km', '14 km', '24 km', '25 km'], a: 1,
      sol: '<p>Catetos $6$ e $8$ km: hipotenusa $10$ km.</p>' },
    { badge: 'Estilo ENEM · altura', text: 'Um triângulo retângulo tem catetos de 6 cm e 8 cm.', cmd: 'A altura relativa à hipotenusa mede:', opts: ['4 cm', '4,8 cm', '5 cm', '6 cm', '7 cm'], a: 1,
      sol: '<p>$b · c = a · h$: $48 = 10h$ ⇒ $h = 4,8$.</p>' },
    { badge: 'Estilo ENEM · hipotenusa', text: 'Em um triângulo retângulo, a altura relativa à hipotenusa mede 6 cm e a projeção de um dos catetos sobre a hipotenusa mede 3 cm.', cmd: 'A hipotenusa mede:', opts: ['9 cm', '12 cm', '15 cm', '18 cm', '21 cm'], a: 2,
      sol: '<p>$36 = 3n$ ⇒ $n = 12$; $a = 15$ cm.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">solução</span>',
  subtitle: 'Passos embaralhados de três problemas com Pitágoras e relações métricas.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Identifique o triângulo retângulo, escolha a relação, calcule e confira.',
    problemas: [
      { titulo: 'Cabo de antena', enunciado: 'Poste de 16 m e estaca a 12 m da base: qual o comprimento do cabo?', passos: ['Forme o triângulo retângulo: catetos $16$ e $12$.', 'Aplique $a^{2} = b^{2} + c^{2}$: $a^{2} = 16^{2} + 12^{2}$.', 'Calcule: $a^{2} = 256 + 144 = 400$.', 'Extraia a raiz: $a = 20$ m.'] },
      { titulo: 'Altura relativa à hipotenusa', enunciado: 'Catetos 6 e 8: qual a altura relativa à hipotenusa?', passos: ['Ache a hipotenusa: $a = √{36 + 64} = 10$.', 'Use $b · c = a · h$: $6 · 8 = 10 · h$.', 'Isole: $h = 48 ÷ 10$.', 'Resposta: $h = 4,8$.'] },
      { titulo: 'Diagonal da caixa', enunciado: 'Caixa de 3 m, 4 m e 12 m: qual a diagonal?', passos: ['Diagonal da base: $d^{2} = 3^{2} + 4^{2} = 25$, logo $d = 5$.', 'Triângulo com $d$ e a altura $12$: $D^{2} = 5^{2} + 12^{2}$.', 'Calcule: $D^{2} = 25 + 144 = 169$.', 'Resposta: $D = 13$ m.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Pitágoras e relações métricas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo em triângulos retângulos. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: hipotenusa, cabo, altura, projeção e diagonal.',
  problems: [
    { tag: 'Hipotenusa', q: 'Catetos 5 e 12: quanto mede a hipotenusa?', a: 13, ph: 'a', hint: '25 + 144.', sol: '<p>$√{169} = 13$.</p>' },
    { tag: 'Cabo', q: 'Poste de 16 m e estaca a 12 m da base: qual o cabo (m)?', a: 20, ph: 'm', hint: '256 + 144.', sol: '<p>$20$.</p>' },
    { tag: 'Altura', q: 'Catetos 6 e 8: qual a altura relativa à hipotenusa?', a: 4.8, ph: 'h', hint: 'b·c = a·h.', sol: '<p>$4,8$.</p>' },
    { tag: 'Projeção', q: 'Altura 6 e projeção m = 3. Quanto vale a outra projeção n?', a: 12, ph: 'n', hint: 'h² = m·n.', sol: '<p>$36 ÷ 3 = 12$.</p>' },
    { tag: 'Diagonal', q: 'Caixa de 3 m, 4 m e 12 m: qual a diagonal (m)?', a: 13, ph: 'm', hint: '9 + 16 + 144.', sol: '<p>$√{169} = 13$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Pitágoras e Relações Métricas', accent: 'primary', icon: 'triangle',
  aulas: [['Aula 68', 'Teorema de Pitágoras', 'aula-1-teorema-de-pitagoras.html'], ['Aulas 69–70', 'Relações métricas', 'aula-2-relacoes-metricas.html']],
  enem: 'Pitágoras e relações métricas no estilo ENEM', cria: 'Ordene a solução', pratica: 'Pitágoras e relações métricas: trilha de desafios'
}, pages };
