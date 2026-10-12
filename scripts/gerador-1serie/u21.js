// Unidade 21 — Semelhança de figuras e de triângulos (aulas 59 a 62)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { svg, ln, ci, dot, tx, txu, poli, vert, medida, reto, arco, igual, cen } = require('./geo.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'semelhanca', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u21', BRAND = 'Semelhança de Figuras e Triângulos', CAP = 'Aulas 59 a 62';
const pages = [];

// ---------- figuras ----------
// dois triângulos semelhantes (AA), o da direita é uma ampliação de razão 2
const triSem = (() => {
  const A = [30, 120], B = [120, 120], C = [90, 55], D = [190, 150], E = [370, 150], F = [310, 20];
  const c1 = cen([A, B, C]), c2 = cen([D, E, F]);
  let s = poli([A, B, C]) + poli([D, E, F], 'var(--growth)', 'var(--growth-soft)');
  s += arco(A, B, C, '50°', 20) + arco(B, C, A, '70°', 20) + arco(D, E, F, '50°', 20) + arco(E, F, D, '70°', 20);
  s += vert(A, 'A', c1) + vert(B, 'B', c1) + vert(C, 'C', c1) + vert(D, 'D', c2) + vert(E, 'E', c2) + vert(F, 'F', c2);
  s += medida(A, B, '3', c1, 14) + medida(D, E, '6', c2, 14);
  return svg(400, 175, s, '480px');
})();
// problema do rio: OA ∥ BC, P, O, B alinhados e P, A, C alinhados
const rio = (() => {
  const P = [180, 20], O = [100, 120], B = [60, 170], A = [260, 120], C = [300, 170], c = cen([P, B, C]);
  let s = poli([P, B, C], 'var(--ink-soft)', 'none', 2) + ln(O[0], O[1], A[0], A[1], 'var(--primary)', 2.6) + ln(P[0], P[1], B[0], B[1], 'var(--ink-soft)', 2);
  s += dot(P[0], P[1], 'var(--decay)') + dot(O[0], O[1]) + dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]);
  s += txu(180, 12, 'P', 'var(--ink)', 13) + txu(86, 118, 'O', 'var(--ink)', 13) + txu(274, 118, 'A', 'var(--ink)', 13) + txu(46, 178, 'B', 'var(--ink)', 13) + txu(314, 178, 'C', 'var(--ink)', 13);
  s += txu(180, 112, '20', 'var(--decay)', 12) + txu(180, 188, '30', 'var(--decay)', 12) + txu(62, 148, '15', 'var(--decay)', 12);
  return svg(360, 200, s, '420px');
})();
// sombras: poste e prédio
const sombras = (() => {
  const g = 150;
  let s = ln(10, g, 350, g, 'var(--ink-soft)', 2);
  s += ln(60, g, 60, g - 40, 'var(--primary)', 5) + ln(60, g - 40, 100, g, 'var(--decay)', 1.6) + ln(60, g, 100, g, 'var(--decay)', 4);
  s += ln(180, g, 180, g - 100, 'var(--growth)', 8) + ln(180, g - 100, 310, g, 'var(--decay)', 1.6) + ln(180, g, 310, g, 'var(--decay)', 4);
  s += txu(44, g - 18, '2 m', 'var(--primary)', 12, 'end') + txu(80, g + 18, '0,8 m', 'var(--decay)', 12) + txu(164, g - 50, 'h', 'var(--growth)', 14, 'end') + txu(245, g + 18, '12 m', 'var(--decay)', 12);
  return svg(360, 175, s, '420px');
})();

// ===================== AULA 1: figuras semelhantes =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 59 e 60', h1: 'Figuras semelhantes: <span style="color:var(--primary);">mesma forma, tamanhos diferentes</span>',
  sub: 'Quando você dá zoom numa foto, tudo cresce junto e nada se deforma. Em Matemática, é isso que significa semelhança: ângulos iguais e lados proporcionais.',
  badges: [['ângulos iguais'], ['lados proporcionais', 'growth'], ['perímetros: k · áreas: k²', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da foto ampliada à razão de semelhança.', [
  ['Ideia de semelhança', 'o que o zoom preserva', 'bulb'],
  ['Definição', 'ângulos iguais e lados proporcionais', 'target'],
  ['Razão de semelhança', 'k e o que ela multiplica', 'chart'],
  ['Falsas semelhanças', 'só ângulos ou só lados não bastam', 'link'],
  ['Problemas', 'plantas, fotos e polígonos regulares', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer <strong>polígonos semelhantes</strong> pelos ângulos e pelos lados.',
  'Calcular a <strong>razão de semelhança</strong> $k$ e usá-la em lados e perímetros.',
  'Saber que a razão entre <strong>áreas</strong> é $k^{2}$.',
  'Aplicar semelhança a <strong>plantas, fotos e reduções</strong>.'
], 'Dica', 'Duas condições, <strong>as duas</strong>: ângulos correspondentes iguais <strong>e</strong> lados correspondentes proporcionais. Faltando uma, não há semelhança (nos triângulos, basta uma — veja a próxima aula).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O zoom do celular', `
          ${lede('Ao dar zoom numa foto, o nariz da pessoa não cresce sozinho: <strong>tudo cresce junto</strong>, na mesma proporção, e os <strong>ângulos não mudam</strong>. A foto ampliada é <strong>semelhante</strong> à original: tem a mesma forma, em outro tamanho.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Uma foto de 6 cm × 4 cm é ampliada, mantendo a proporção, para 12 cm de comprimento. A largura passa a ser:', ['6 cm', '8 cm', '10 cm', '12 cm'], 1, 'O comprimento foi multiplicado por $12 ÷ 6 = 2$ (razão $k = 2$). A largura também: $4 · 2 = 8$ cm.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em figuras semelhantes, todos os lados são multiplicados pelo <strong>mesmo número</strong> $k$ (razão de semelhança); os ângulos ficam <strong>iguais</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · semelhança de polígonos', 'Ângulos iguais e lados proporcionais', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Dois polígonos são <strong>semelhantes</strong> quando têm <strong>ângulos correspondentes iguais</strong> e <strong>lados correspondentes (homólogos) proporcionais</strong>.</li>
                <li>A <strong>razão de semelhança</strong> é $k = {\\text{lado do 2º}|\\text{lado do 1º}}$, igual para todos os pares de lados.</li>
                <li>Perímetros: razão $k$. <strong>Áreas: razão $k^{2}$</strong>.</li>
                <li><strong>Só ângulos</strong> iguais não bastam: um retângulo $2 × 3$ e outro $2 × 6$ têm ângulos retos, mas não são semelhantes.</li>
                <li><strong>Só lados</strong> proporcionais não bastam: um quadrado e um losango de mesmo lado.</li>
              </ul>
            </div>
            ${W.box('Dois retângulos são semelhantes?', W.row(W.nm('e1-a', 'Retângulo 1: base', 3, 'any'), W.nm('e1-b', 'altura', 4, 'any')) + W.row(W.nm('e1-c', 'Retângulo 2: base', 6, 'any'), W.nm('e1-d', 'altura', 8, 'any')) + W.svg('e1-s', '0 0 360 170', '380px') + W.txt('e1-r', 'Razões: ') + W.txt('e1-v', 'Veredito: ') + W.hint('e1-h'))}
          </div>`.replace('{\\text{lado do 2º}|\\text{lado do 1º}}', '{"lado do 2º"|"lado do 1º"}'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A planta da sala', 'Uma sala retangular tem 6 m × 4 m. Em uma planta, o comprimento aparece com 15 cm. Qual a largura na planta e qual a escala?', [
  ['Converta as unidades', '6 m = 600 cm. Razão: $k = {15|600} = {1|40}$.'],
  ['Largura na planta', '$4$ m $= 400$ cm; $400 · {1|40} = 10$ cm.'],
  ['Escala', '1 cm no desenho representa 40 cm reais: escala $1 : 40$.']
], 'Planta de <strong>15 cm × 10 cm</strong>, na escala $1 : 40$.'));
a.push(exemplo('Exemplo resolvido', 'Pentágonos regulares', 'Dois pentágonos regulares têm razão de semelhança $2/3$ (do menor para o maior). O perímetro do menor é 30 cm. Qual o perímetro e o lado do maior?', [
  ['Perímetro', 'Razão entre perímetros $= k = 2/3$: $30 ÷ (2/3) = 45$ cm.'],
  ['Lado do maior', 'Pentágono regular: $45 ÷ 5 = 9$ cm.'],
  ['Confira', 'Lado do menor: $30 ÷ 5 = 6$ cm e $6 ÷ 9 = 2/3$ ✓.']
], 'Perímetro $45$ cm e lado $9$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ampliando uma figura', 'Uma figura de 4 cm² de área é ampliada com razão de semelhança 3. Qual a área da ampliação?', [
  ['Razão de áreas', '$k^{2} = 3^{2} = 9$.'],
  ['Calcule', '$4 · 9 = 36$ cm².'],
  ['Atenção', 'Os comprimentos triplicam, mas a <strong>área</strong> fica 9 vezes maior.']
], 'Área da ampliação: <strong>36 cm²</strong>.', 'growth'));

a.push(pratique('Foto reduzida', 'Um laboratório reduz proporcionalmente uma foto de 15 cm de largura e 20 cm de comprimento. A foto reduzida tem 8 cm de comprimento; sua largura, em cm, é:',
  ['5', '6', '7', '7,5', '10'], 1,
  '$k = 8 ÷ 20 = 0,4$. Largura: $15 · 0,4 = 6$ cm. (Ou: $15/20 = 3/4$ e $8 · 3/4 = 6$.) <strong>Alternativa B.</strong>'));
a.push(pratique('Planta', 'Na planta de uma casa, a sala de 8 m de comprimento mede 16 cm. A escala é:',
  ['1 : 10', '1 : 50', '1 : 100', '1 : 200', '1 : 500'], 1,
  '$8$ m $= 800$ cm; $16 ÷ 800 = 1/50$. Escala $1 : 50$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Perímetros semelhantes', 'Dois pentágonos regulares são semelhantes, com razão $2/3$ do menor para o maior. Se o perímetro do menor é 30 cm, o do maior é:',
  ['36 cm', '40 cm', '45 cm', '50 cm', '60 cm'], 2,
  'Perímetros têm a mesma razão $k$: $30 ÷ (2/3) = 45$ cm. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a semelhança engana', [
  ['Só ângulos', 'Retângulos têm sempre quatro ângulos retos, mas só são semelhantes se os lados forem proporcionais.'],
  ['Só lados', 'Quadrado e losango de mesmo lado: lados proporcionais, ângulos diferentes.'],
  ['Razão de áreas', 'Se $k = 3$, a área fica $9$ vezes maior ($k^{2}$), não $3$.'],
  ['Unidades diferentes', 'Para a razão (ou escala), converta tudo para a mesma unidade.']
]));
a.push(quiz([
  { q: 'A razão entre perímetros de figuras semelhantes de razão $k = 4$ é:', o: ['4', '8', '16', '2'], a: 0 },
  { q: 'A razão entre áreas de figuras semelhantes de razão $k = 4$ é:', o: ['4', '8', '16', '2'], a: 2 },
  { q: 'Os retângulos $3 × 4$ e $6 × 8$ são:', o: ['semelhantes (k = 2)', 'não semelhantes', 'congruentes', 'semelhantes (k = 3)'], a: 0 },
  { q: 'Escala 1 : 100: 5 cm no desenho representam:', o: ['5 cm', '50 cm', '500 cm', '5 m'], a: 3 }
]));
a.push(fechamento([
  ['Semelhança', 'Ângulos iguais e lados proporcionais.'],
  ['Razão k', 'Multiplica lados e perímetros; k² multiplica áreas.'],
  ['Escala', 'Desenho ÷ real, na mesma unidade.']
], 'Mesma forma, outro tamanho: razão de semelhança k.'));

pages.push({ out: BASE + 'aula-1-figuras-semelhantes.html', html: K.deck({
  title: 'Figuras semelhantes — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 59 e 60 · Figuras semelhantes', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['e1-a', 'e1-b', 'e1-c', 'e1-d'], function(){ var a = +$('e1-a').value, b = +$('e1-b').value, c = +$('e1-c').value, d = +$('e1-d').value; var s = $('e1-s'); s.innerHTML = '';
    if(![a, b, c, d].every(isFinite) || a <= 0 || b <= 0 || c <= 0 || d <= 0){ $('e1-r').textContent = '—'; $('e1-v').textContent = 'use medidas positivas'; $('e1-h').textContent = ''; return; }
    var m = Math.max(a, b, c, d), sc = 120 / m, W1 = a * sc, H1 = b * sc, W2 = c * sc, H2 = d * sc;
    el('rect', {x: 20, y: 150 - H1, width: W1, height: H1, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, s); el('rect', {x: 200, y: 150 - H2, width: W2, height: H2, fill: 'var(--growth-soft)', stroke: 'var(--growth)', 'stroke-width': 2.4}, s);
    var ra = c / a, rb = d / b, ok = Math.abs(ra - rb) < 1e-9; $('e1-r').textContent = pt(c) + '/' + pt(a) + ' = ' + pt(ra, 3) + '  e  ' + pt(d) + '/' + pt(b) + ' = ' + pt(rb, 3);
    $('e1-v').textContent = ok ? 'semelhantes, com razão k = ' + pt(ra, 3) : 'NÃO semelhantes (razões diferentes)'; $('e1-h').textContent = ok ? 'Perímetros: razão ' + pt(ra, 3) + ' · áreas: razão ' + pt(ra * ra, 3) + ' (os ângulos já são todos retos).' : 'Os ângulos são retos nos dois, mas os lados não são proporcionais.'; });`
}) });

// ===================== AULA 2: semelhança de triângulos =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 61 e 62', h1: 'Semelhança de triângulos: <span style="color:var(--growth);">basta ter dois ângulos iguais</span>',
  sub: 'Com triângulos a conta fica mais simples: dois ângulos iguais (caso AA) garantem a semelhança. Daí saem alturas de prédios, larguras de rios e muitos problemas.',
  badges: [['caso AA'], ['lados proporcionais', 'growth'], ['sombras e rios', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do ângulo à medida inacessível.', [
  ['Caso AA', 'dois ângulos iguais', 'bulb'],
  ['Razão de semelhança', 'ordem dos vértices', 'target'],
  ['Sombras', 'altura de objetos distantes', 'chart'],
  ['Retas paralelas', 'triângulos que se formam', 'link'],
  ['Problemas', 'rio, prédio e perímetro', 'scale']
]));
b.push(objetivosSlide([
  'Usar o caso <strong>AA</strong> para reconhecer triângulos semelhantes.',
  'Escrever corretamente a <strong>razão entre lados homólogos</strong> (cuidado com a ordem).',
  'Resolver problemas com <strong>sombras</strong> e <strong>retas paralelas</strong>.',
  'Usar a razão para <strong>perímetros</strong> de triângulos semelhantes.'
], 'Dica', 'Antes de escrever a proporção, <strong>identifique os lados correspondentes</strong>: o lado oposto a um ângulo corresponde ao lado oposto ao ângulo igual no outro triângulo.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O corte paralelo do kiwi', `
          ${lede('Se cortarmos um triângulo por uma reta <strong>paralela a um dos lados</strong>, aparece um triângulo menor com os <strong>mesmos ângulos</strong> do original. Esse é o ponto de partida: dois ângulos iguais bastam para garantir a semelhança de triângulos (caso <strong>AA</strong>).')}
          <div class="grid2" style="margin-top:6px;">
            ${triSem}
            ${mini('Os triângulos ABC (ângulos 50° e 70°) e DEF (ângulos 50° e 70°) são:', ['semelhantes (caso AA)', 'congruentes', 'não semelhantes', 'impossível saber'], 0, 'Dois ângulos iguais ($50°$ e $70°$) ⇒ o terceiro também é igual ($60°$): <strong>semelhantes</strong>. Como $DE = 2 · AB$, a razão é $k = 2$ (mas não são congruentes).')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · caso AA e razões', 'Dois ângulos iguais bastam', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Caso AA</strong>: dois triângulos com <strong>dois ângulos correspondentes iguais</strong> são semelhantes (o terceiro ângulo fica igual, pois a soma é $180°$).</li>
                <li>Lados <strong>homólogos</strong> são opostos a ângulos iguais.</li>
                <li>Escreva a proporção com <strong>a ordem dos vértices</strong>: $△ABC ∼ △DEF$ ⇒ \${AB|DE} = {BC|EF} = {AC|DF} = k$</li>
                <li>Perímetros: razão $k$. Áreas: razão $k^{2}$.</li>
              </ul>
            </div>
            ${W.box('Sombras: altura de um prédio', W.row(W.nm('s1-h', 'Altura do poste (m)', 2, 'any'), W.nm('s1-a', 'Sombra do poste (m)', 0.8, 'any')) + W.nm('s1-b', 'Sombra do prédio (m)', 12, 'any') + W.txt('s1-k', 'Razão: ') + W.txt('s1-r', 'Altura do prédio: ') + W.hint('s1-hh'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'A altura do prédio pela sombra', 'No mesmo instante, um poste de 2 m projeta sombra de 0,8 m e um prédio projeta sombra de 12 m. Qual a altura do prédio?', [
  ['Triângulos semelhantes', 'Os raios do sol formam o <strong>mesmo ângulo</strong> com o chão e poste e prédio formam $90°$: AA.'],
  ['Proporção', '${h|12} = {2|0,8}$ (altura ÷ sombra é igual nos dois).'],
  ['Calcule', '$h = 12 · {2|0,8} = 12 · 2,5 = 30$ m.']
], 'O prédio tem <strong>30 m</strong>.'));
b.push(sl('Figura', 'Poste e prédio', `
          <div class="grid2">
            ${sombras}
            <div>
              ${callout('Por que são semelhantes?', 'O sol “inclina” igualmente os raios nos dois lugares. Cada objeto + sua sombra + o raio de sol formam um triângulo retângulo com o <strong>mesmo ângulo</strong> na ponta da sombra.', 'success')}
              ${callout('Razão constante', 'Altura ÷ sombra $= 2 ÷ 0,8 = 2,5$ em qualquer objeto, no mesmo instante e no mesmo local.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'A largura do rio', 'Um observador em $O$ quer saber a distância até um ponto $P$ na outra margem. Com $OA ∥ BC$, $OA = 20$ m, $BC = 30$ m e $OB = 15$ m, e $P$, $O$, $B$ alinhados (também $P$, $A$, $C$), quanto vale $PO$?', [
  ['Triângulos semelhantes', '$△POA ∼ △PBC$ (ângulo em $P$ comum e $OA ∥ BC$).'],
  ['Proporção', '${PO|PB} = {OA|BC} = {20|30} = {2|3}$, com $PB = PO + 15$.'],
  ['Resolva', '$3 · PO = 2 · (PO + 15)$ ⇒ $PO = 30$ m.']
], 'A distância é de <strong>30 m</strong> ($PB = 45$ m).', 'growth'));
b.push(sl('Figura', 'O esquema do rio', `
          <div class="grid2">
            ${rio}
            <div>
              ${callout('Leitura da figura', 'O segmento <strong>OA</strong> é paralelo à base <strong>BC</strong>; o ponto <strong>P</strong> é o vértice comum dos dois triângulos $POA$ e $PBC$.', 'success')}
              ${callout('Cuidado com PB', 'O lado maior $PB$ é a soma $PO + OB$. Não use $OB$ no lugar de $PB$ na proporção.', 'danger')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Perímetro de um triângulo semelhante', 'Um triângulo tem lados 6 cm, 8 cm e 10 cm. Um triângulo semelhante a ele tem perímetro 36 cm. Quais os seus lados?', [
  ['Perímetro original', '$6 + 8 + 10 = 24$ cm.'],
  ['Razão', '$k = 36 ÷ 24 = 1,5$.'],
  ['Lados do novo', '$6 · 1,5 = 9$; $8 · 1,5 = 12$; $10 · 1,5 = 15$.']
], 'Lados $9$ cm, $12$ cm e $15$ cm (soma $36$ ✓).', 'growth'));

b.push(pratique('Sombra do poste', 'Um poste de 3 m projeta sombra de 1,2 m. No mesmo instante, uma árvore projeta sombra de 8 m. A altura da árvore é:',
  ['16 m', '18 m', '20 m', '22 m', '24 m'], 2,
  '${h|8} = {3|1,2}$ ⇒ $h = 8 · 2,5 = 20$ m. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Semelhante com perímetro', 'Os lados de um triângulo medem 10, 12 e 18 cm. Um triângulo semelhante a ele tem perímetro 60 cm. Seu maior lado mede:',
  ['24 cm', '27 cm', '30 cm', '36 cm', '40 cm'], 1,
  'Perímetro original: $40$; $k = 60 ÷ 40 = 1,5$. Maior lado: $18 · 1,5 = 27$ cm. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('A distância até o ponto P', 'Com $OA ∥ BC$, $OA = 20$ m, $BC = 30$ m e $OB = 15$ m, a distância $PO$ do observador ao ponto $P$ é, em metros:' + rio,
  ['15', '20', '30', '35', '45'], 2,
  '$△POA ∼ △PBC$: ${20|30} = {PO|PO + 15}$ ⇒ $30 · PO = 20 · PO + 300$ ⇒ $PO = 30$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a semelhança de triângulos engana', [
  ['Ordem dos vértices', 'Em $△ABC ∼ △DEF$, $AB$ corresponde a $DE$, e não a $EF$.'],
  ['Usar a parte no lugar do todo', 'No problema do rio, a razão usa $PB$ (inteiro), não só $OB$.'],
  ['Sombras em instantes diferentes', 'A proporção só vale para sombras medidas <strong>no mesmo instante</strong>.'],
  ['Razão de áreas', 'Áreas de triângulos semelhantes têm razão $k^{2}$.']
]));
b.push(quiz([
  { q: 'Dois triângulos com dois ângulos iguais são:', o: ['congruentes', 'semelhantes', 'equiláteros', 'retângulos'], a: 1 },
  { q: 'Poste de 2 m com sombra de 1 m. Árvore com sombra de 6 m tem altura:', o: ['6 m', '8 m', '12 m', '3 m'], a: 2 },
  { q: 'Se $△ABC ∼ △DEF$ com $k = 3$ e perímetro de ABC = 10, o de DEF é:', o: ['13', '30', '90', '3,3'], a: 1 },
  { q: 'Em triângulos semelhantes de razão 2, a razão entre as áreas é:', o: ['2', '4', '8', '1/2'], a: 1 }
]));
b.push(fechamento([
  ['Caso AA', 'Dois ângulos iguais ⇒ semelhantes.'],
  ['Proporção', 'Lados homólogos, na ordem certa; inteiro com inteiro.'],
  ['Sombras', 'Altura ÷ sombra constante no mesmo instante.']
], 'Identifique os ângulos, monte a proporção e confira.'));

pages.push({ out: BASE + 'aula-2-semelhanca-de-triangulos.html', html: K.deck({
  title: 'Semelhança de triângulos — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 61 e 62 · Semelhança de triângulos', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['s1-h', 's1-a', 's1-b'], function(){ var h = +$('s1-h').value, a = +$('s1-a').value, b = +$('s1-b').value; if(![h, a, b].every(isFinite) || h <= 0 || a <= 0 || b <= 0){ $('s1-k').textContent = '—'; $('s1-r').textContent = ''; return; }
    var k = h / a; $('s1-k').textContent = 'altura ÷ sombra = ' + pt(h) + ' ÷ ' + pt(a) + ' = ' + pt(k, 3); $('s1-r').textContent = pt(k * b, 3) + ' m'; $('s1-hh').textContent = 'No mesmo instante, altura ÷ sombra é igual para todos os objetos verticais: ' + pt(b) + ' × ' + pt(k, 3) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Semelhança: <span>figuras, triângulos e razões</span>',
  lede: 'Ângulos iguais e lados proporcionais; razão de semelhança k para lados e perímetros e k² para áreas; caso AA para triângulos e problemas de sombras e retas paralelas.',
  badges: ['k: lados e perímetros', 'k²: áreas', 'caso AA'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Semelhança', 'Forma igual', 'chart', 'primary', p('Ângulos correspondentes iguais e lados proporcionais.') + call('Cuidado', 'Só um dos dois não basta (polígonos).', 'danger')],
    ['Razão k', 'Multiplicador', 'target', 'growth', p('Lados e perímetros × k; áreas × k².') + call('Exemplo', 'k = 3: área 4 → 36.', 'success')],
    ['Escala', 'Desenho ÷ real', 'link', 'decay', p('Mesma unidade: 15 cm ÷ 600 cm = 1 : 40.')],
    ['Caso AA', 'Triângulos', 'scale', 'success', p('Dois ângulos iguais bastam.') + call('Ordem', 'Lados homólogos opostos a ângulos iguais.', 'success')],
    ['Sombras', 'Altura ÷ sombra', 'up', 'primary', p('Poste 2 m, sombra 0,8 m; prédio sombra 12 m: 30 m.')],
    ['Retas paralelas', 'Triângulo menor', 'check', 'growth', li(['Paralela a um lado gera triângulo semelhante.', 'Use o lado inteiro (PB = PO + OB).', 'Confira a proporção.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Só ângulos ou só lados.', 'Razão de áreas igual a k.', 'Unidades diferentes na escala.', 'Ordem dos vértices trocada.', 'Usar parte no lugar do todo.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Semelhança <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: foto, perímetro, sombra, rio e triângulo semelhante.',
  final: 'Razão constante, lados homólogos e unidade única resolvem a semelhança.',
  questions: [
    { badge: 'Estilo ENEM · foto', text: 'Uma foto de 15 cm × 20 cm é reduzida proporcionalmente e fica com 8 cm de comprimento.', cmd: 'A largura da foto reduzida, em cm, é:', opts: ['5', '6', '7', '7,5', '10'], a: 1,
      sol: '<p>$k = 8 ÷ 20 = 0,4$; $15 · 0,4 = 6$ cm.</p>' },
    { badge: 'Estilo ENEM · perímetro', text: 'Dois pentágonos regulares são semelhantes com razão $2/3$ (menor para maior). O menor tem perímetro 30 cm.', cmd: 'O perímetro do maior, em cm, é:', opts: ['36', '40', '45', '50', '60'], a: 2,
      sol: '<p>$30 ÷ (2/3) = 45$ cm.</p>' },
    { badge: 'Estilo ENEM · sombra', text: 'Um poste de 2 m projeta sombra de 0,8 m e, no mesmo instante, um prédio projeta sombra de 12 m.', cmd: 'A altura do prédio, em metros, é:', opts: ['24', '28', '30', '32', '36'], a: 2,
      sol: '<p>${h|12} = {2|0,8}$ ⇒ $h = 30$ m.</p>' },
    { badge: 'Estilo ENEM · rio', text: 'Com $OA ∥ BC$, $OA = 20$ m, $BC = 30$ m e $OB = 15$ m:' + rio, cmd: 'A distância $PO$, em metros, é:', opts: ['15', '20', '30', '35', '45'], a: 2,
      sol: '<p>${20|30} = {PO|PO + 15}$ ⇒ $PO = 30$.</p>' },
    { badge: 'Estilo ENEM · triângulo semelhante', text: 'Um triângulo tem lados 6 cm, 8 cm e 10 cm. Um triângulo semelhante a ele tem perímetro 36 cm.', cmd: 'O maior lado do segundo triângulo, em cm, é:', opts: ['12', '13,5', '15', '18', '20'], a: 2,
      sol: '<p>$k = 36 ÷ 24 = 1,5$; $10 · 1,5 = 15$ cm.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'São <span style="color:var(--growth);">semelhantes</span>?',
  subtitle: 'Classifique cada par de figuras: semelhantes ou não semelhantes.',
  tpl: cClassificar({
    cats: ['Semelhantes', 'Não semelhantes'],
    intro: 'Cada cartão descreve um par de figuras. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Polígonos: ângulos iguais e lados proporcionais. Triângulos: dois ângulos iguais bastam, ou os três pares de lados proporcionais.',
    itens: [
      ['Retângulos $3 × 6$ e $5 × 10$', 0, 'Razões $5/3$ e $10/6 = 5/3$: iguais. Semelhantes.'],
      ['Retângulos $2 × 3$ e $4 × 7$', 1, 'Razões $2$ e $7/3$: diferentes. Não semelhantes.'],
      ['Quadrados de lados $4$ e $9$', 0, 'Todo quadrado é semelhante a qualquer outro quadrado.'],
      ['Quadrado de lado 5 e losango de lado 5 (sem ângulos retos)', 1, 'Lados proporcionais, mas ângulos diferentes.'],
      ['Triângulos com ângulos $50°, 60°, 70°$ e $50°, 70°, 60°$', 0, 'Mesmos ângulos (caso AA): semelhantes.'],
      ['Triângulos de lados $3, 4, 5$ e $6, 8, 10$', 0, 'Razão $2$ em todos os lados: semelhantes.'],
      ['Triângulos de lados $3, 4, 5$ e $4, 5, 6$', 1, 'Razões $4/3$, $5/4$, $6/5$: diferentes.'],
      ['Dois triângulos equiláteros quaisquer', 0, 'Ângulos de $60°$ em ambos: caso AA.'],
      ['Hexágono regular e octógono regular', 1, 'Ângulos internos diferentes ($120°$ e $135°$).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Semelhança: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com razões. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: foto, perímetro, sombra, rio e área.',
  problems: [
    { tag: 'Foto', q: 'Uma foto de 15 × 20 cm é reduzida proporcionalmente para 8 cm de comprimento. Qual a largura (cm)?', a: 6, ph: 'cm', hint: 'k = 8 ÷ 20.', sol: '<p>$15 · 0,4 = 6$.</p>' },
    { tag: 'Perímetro', q: 'Pentágonos regulares com razão 2/3. O perímetro do menor é 30 cm. Qual o do maior (cm)?', a: 45, ph: 'cm', hint: '30 ÷ (2/3).', sol: '<p>$45$.</p>' },
    { tag: 'Sombra', q: 'Poste de 2 m com sombra de 0,8 m. Prédio com sombra de 12 m. Qual a altura (m)?', a: 30, ph: 'm', hint: 'altura ÷ sombra = 2,5.', sol: '<p>$12 · 2,5 = 30$.</p>' },
    { tag: 'Rio', q: 'Com OA ∥ BC, OA = 20, BC = 30 e OB = 15, quanto vale PO (m)?', a: 30, ph: 'm', hint: '20/30 = PO/(PO + 15).', sol: '<p>$PO = 30$.</p>' },
    { tag: 'Área', q: 'Uma figura de 4 cm² é ampliada com razão 3. Qual a nova área (cm²)?', a: 36, ph: 'cm²', hint: 'k² = 9.', sol: '<p>$4 · 9 = 36$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Semelhança de Figuras e Triângulos', accent: 'primary', icon: 'triangle',
  aulas: [['Aulas 59–60', 'Figuras semelhantes', 'aula-1-figuras-semelhantes.html'], ['Aulas 61–62', 'Semelhança de triângulos', 'aula-2-semelhanca-de-triangulos.html']],
  enem: 'Semelhança no estilo ENEM', cria: 'São semelhantes?', pratica: 'Semelhança: trilha de desafios'
}, pages };
