// Unidade v28 — Área do círculo e de suas partes (aulas 59 e 60 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'area-do-circulo-e-partes', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v28', BRAND = 'Área do círculo e de suas partes';

// JS comum: setor, coroa e segmento desenhados com arcos SVG
const CIRC = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}).replace('-', '−'); }
  function cena(svg, r, r2, deg, modo){ // modo: 'disco' | 'coroa' | 'setor' | 'segmento'
    var W = 340, H = 220, cx = W / 2, cy = H / 2 + 2, R = 86; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var f = R / Math.max(r, 0.0001), a = deg * Math.PI / 180, ri = r2 * f;
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    if(modo === 'disco'){ el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg); el('line', {x1: cx, y1: cy, x2: cx + R, y2: cy, stroke: 'var(--growth)', 'stroke-width': 2.4}, svg); }
    if(modo === 'coroa'){ var p = 'M' + (cx + R) + ',' + cy + ' A' + R + ',' + R + ' 0 1 1 ' + (cx - R) + ',' + cy + ' A' + R + ',' + R + ' 0 1 1 ' + (cx + R) + ',' + cy + ' Z M' + (cx + ri) + ',' + cy + ' A' + ri + ',' + ri + ' 0 1 0 ' + (cx - ri) + ',' + cy + ' A' + ri + ',' + ri + ' 0 1 0 ' + (cx + ri) + ',' + cy + ' Z';
      el('path', {d: p, 'fill-rule': 'evenodd', fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg); el('line', {x1: cx + ri, y1: cy, x2: cx + R, y2: cy, stroke: 'var(--growth)', 'stroke-width': 2.6}, svg); }
    if(modo === 'setor' || modo === 'segmento'){ var x2 = cx + R * Math.cos(a), y2 = cy - R * Math.sin(a), big = deg > 180 ? 1 : 0, d = modo === 'setor' ? 'M' + cx + ',' + cy + ' L' + (cx + R) + ',' + cy + ' A' + R + ',' + R + ' 0 ' + big + ' 0 ' + x2 + ',' + y2 + ' Z' : 'M' + (cx + R) + ',' + cy + ' A' + R + ',' + R + ' 0 ' + big + ' 0 ' + x2 + ',' + y2 + ' Z';
      el('path', {d: d, fill: modo === 'setor' ? 'var(--primary-soft)' : 'var(--growth-soft)', stroke: modo === 'setor' ? 'var(--primary)' : 'var(--growth)', 'stroke-width': 2.4, 'stroke-linejoin': 'round'}, svg);
      el('line', {x1: cx, y1: cy, x2: cx + R, y2: cy, stroke: 'var(--ink)', 'stroke-width': 1.6}, svg); el('line', {x1: cx, y1: cy, x2: x2, y2: y2, stroke: 'var(--ink)', 'stroke-width': 1.6}, svg);
      if(modo === 'segmento') el('polygon', {points: cx + ',' + cy + ' ' + (cx + R) + ',' + cy + ' ' + x2 + ',' + y2, fill: 'var(--surface-2)', stroke: 'var(--ink-soft)', 'stroke-width': 1.2, 'stroke-dasharray': '4 3'}, svg); }
    el('circle', {cx: cx, cy: cy, r: 3.6, fill: 'var(--ink)'}, svg);
  }
`;

// ===================== AULA 59: círculo e coroa =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 59', h1: 'Área do círculo e da coroa circular: <span style="color:var(--primary);">o π em ação</span>',
  sub: 'Para que serve o número π? Ele é a razão entre a circunferência e o diâmetro, e é ele que liga o raio de um círculo à sua circunferência e à sua área.',
  badges: [['C = 2πr'], ['A = πr²', 'growth'], ['coroa: π(R² − r²)', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do raio ao disco e à coroa.', [
  ['Elementos', 'centro, raio, diâmetro', 'bulb'],
  ['O número π', 'razão entre C e d', 'target'],
  ['Circunferência', 'C = 2πr', 'chart'],
  ['Área do disco', 'A = πr²', 'link'],
  ['Coroa circular', 'disco maior menos disco menor', 'scale']
]));
a.push(objetivosSlide([
  'Identificar os <strong>elementos</strong> do círculo e entender o número <strong>π</strong>.',
  'Calcular a <strong>circunferência</strong> $C = 2πr$ e a <strong>área do disco</strong> $A = πr^{2}$.',
  'Calcular a área da <strong>coroa circular</strong> $π(R^{2} − r^{2})$ em problemas.'
], 'Dica', 'Confira se o enunciado dá o <strong>raio</strong> ou o <strong>diâmetro</strong>: o erro número 1 em círculo é usar $d$ no lugar de $r$.', 'primary'));

a.push(sl('Para início de conversa', 'Para que serve o π?', `
          ${lede('Em qualquer círculo, a razão entre a <strong>circunferência</strong> e o <strong>diâmetro</strong> é sempre a mesma, um número irracional chamado $π ≈ 3,14159…$. Conhecido o raio, o $π$ entrega a circunferência e a área.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Disco circular', W.row(W.nm('d59-r', 'Raio (m)', 15, 'any', 'min="0.1"')) + W.svg('d59-s', '0 0 340 220', '320px') + W.txt('d59-c', 'Circunferência: ') + W.txt('d59-a', 'Área: ') + W.hint('d59-h'))}
            ${mini('A razão $C ÷ d$ em qualquer circunferência vale:', ['$2$', '$3$', '$π ≈ 3,14$', '$4$'], 2, 'Essa razão é constante e se chama $π$: $C = π · d = 2πr$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · circunferência e disco', 'C = 2πr e A = πr²', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Diâmetro</strong> $d = 2r$ (passa pelo centro).</li>
                <li><strong>Circunferência:</strong> $C = π · d = 2πr$ (unidade de comprimento).</li>
                <li><strong>Área do disco:</strong> $A = πr^{2}$ (unidade de área). Dividindo o disco em setores finos e intercalando-os, forma-se quase um paralelogramo de base $πr$ (meia circunferência) e altura $r$: $A = πr · r$.</li>
                <li>Se o raio dobra, a circunferência dobra e a <strong>área quadruplica</strong>.</li>
              </ul>
            </div>
            ${callout('Duas áreas, duas dimensões', 'Raio $5$ ⇒ $A = 25π$. Raio $10$ ⇒ $A = 100π$: o raio dobrou e a área ficou <strong>4 vezes</strong> maior.', 'success')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · coroa circular', 'A região entre duas circunferências', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Coroa circular:</strong> região entre duas circunferências concêntricas, de raios $R$ (maior) e $r$ (menor).</li>
                <li>Área = disco maior − disco menor: $A = πR^{2} − πr^{2} = π(R^{2} − r^{2})$.</li>
                <li>A <strong>largura</strong> da coroa é $R − r$.</li>
              </ul>
            </div>
            ${W.box('Coroa circular', W.row(W.nm('k59-R', 'R (maior)', 11, 'any', 'min="0.2"'), W.nm('k59-r', 'r (menor)', 8, 'any', 'min="0.1"')) + W.svg('k59-s', '0 0 340 220', '320px') + W.txt('k59-a', 'Área da coroa: ') + W.hint('k59-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A praça circular', 'Uma praça circular de $30$ m de diâmetro será toda coberta por grama sintética. Qual a área de grama? (use $π = 3,14$)', [
  ['Raio', '$r = 30 ÷ 2 = 15$ m.'],
  ['Área', '$A = π · 15^{2} = 3,14 · 225$.'],
  ['Conta', '$A = 706,5$ m².']
], 'A área de grama é $706,5$ m².'));
a.push(exemplo('Exemplo resolvido', 'A pista de caminhada', 'Uma pista de caminhada de $3$ m de largura contorna um canteiro circular de $8$ m de raio. O metro quadrado da pavimentação custa R$ 60,00. Qual o custo? (use $π = 3$)', [
  ['Raios', '$r = 8$ e $R = 8 + 3 = 11$.'],
  ['Área da pista', '$A = π(R^{2} − r^{2}) = 3 · (121 − 64) = 3 · 57 = 171$ m².'],
  ['Custo', '$171 · 60 = 10260$: R$ 10.260,00.']
], 'A pista custa R$ 10.260,00.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Lona de piscina', 'Uma piscina infantil circular tem $8$ m de diâmetro. Qual deve ser a área da lona redonda que a cobre? (use $π = 3,14$)', [
  ['Raio', '$r = 4$ m.'],
  ['Área', '$A = 3,14 · 16 = 50,24$ m².']
], 'A lona precisa ter $50,24$ m².', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Arruela metálica', 'Uma arruela tem diâmetro externo de $10$ cm e furo central de $6$ cm de diâmetro. Qual a área da superfície metálica? (use $π = 3,14$)', [
  ['Raios', '$R = 5$ cm e $r = 3$ cm.'],
  ['Coroa', '$A = π(25 − 9) = 16π$.'],
  ['Valor', '$A = 16 · 3,14 = 50,24$ cm².']
], 'A arruela tem $50,24$ cm² de metal.', 'decay'));

a.push(pratique('Circunferência', 'A circunferência de um círculo de raio $7$ cm é: (use $π = 3,14$)',
  ['$21,98$ cm', '$43,96$ cm', '$153,86$ cm', '$14$ cm'], 1, '$C = 2πr = 2 · 3,14 · 7 = 43,96$ cm. <strong>Alternativa B.</strong>'));
a.push(pratique('Área do disco', 'Um círculo tem diâmetro $20$ m. Sua área é: (use $π = 3,14$)',
  ['$62,8$ m²', '$125,6$ m²', '$314$ m²', '$1256$ m²'], 2, '$r = 10$ e $A = 3,14 · 100 = 314$ m². <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Coroa', 'A área da coroa de raios $10$ e $6$ é: (use $π = 3$)',
  ['$48$', '$192$', '$300$', '$108$'], 1, '$π(100 − 36) = 3 · 64 = 192$. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Pizzas', 'Uma pizza grande tem $40$ cm de diâmetro e uma média, $30$ cm. O que rende mais: uma grande ou duas médias? (use $π = 3$)',
  ['uma grande: $1200$ cm² contra $1350$ cm²', 'duas médias: $1350$ cm² contra $1200$ cm²', 'as duas opções rendem igual', 'uma grande: $2400$ cm² contra $1350$ cm²', 'duas médias: $2700$ cm² contra $1200$ cm²'], 1, 'Grande: $π · 20^{2} = 1200$. Média: $π · 15^{2} = 675$; duas médias: $1350$ cm². <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o círculo engana', [
  ['Diâmetro no lugar do raio', '$A = πr^{2}$ usa o <strong>raio</strong>; se dão o diâmetro, divida por $2$ antes.'],
  ['Elevar ao quadrado depois de multiplicar', '$π r^{2}$ é $π · (r · r)$, não $(π r)^{2}$.'],
  ['Coroa: subtrair os raios', 'O correto é subtrair os <strong>quadrados</strong>: $π(R^{2} − r^{2})$, não $π(R − r)^{2}$.'],
  ['Comprimento e área misturados', '$C$ está em metros e $A$ em metros quadrados.']
]));
a.push(quiz([
  { q: 'A circunferência de raio $r$ é:', o: ['$πr$', '$2πr$', '$πr^{2}$', '$2r$'], a: 1 },
  { q: 'A área de um círculo de raio $3$ ($π ≈ 3$) é:', o: ['$9$', '$18$', '$27$', '$54$'], a: 2 },
  { q: 'Dobrando o raio, a área do círculo:', o: ['dobra', 'triplica', 'quadruplica', 'não muda'], a: 2 },
  { q: 'A área da coroa de raios $R$ e $r$ é:', o: ['$π(R − r)^{2}$', '$π(R^{2} − r^{2})$', '$π(R + r)$', '$2π(R − r)$'], a: 1 }
]));
a.push(fechamento([
  ['π', 'Razão entre circunferência e diâmetro; $C = 2πr$.'],
  ['Disco', '$A = πr^{2}$; dobrar o raio quadruplica a área.'],
  ['Coroa', '$A = π(R^{2} − r^{2})$.']
], 'Com o disco e a coroa, partimos para as fatias do círculo. Próxima aula: setor e segmento circular.'));

// ===================== AULA 60: setor e segmento =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 60', h1: 'Setor e segmento circular: <span style="color:var(--primary);">fatias do círculo</span>',
  sub: 'Um gráfico de pizza, um irrigador de jardim, uma logomarca: todos usam “pedaços” de círculo. Setor e segmento circular se calculam por proporção e, no caso do segmento, com um triângulo.',
  badges: [['setor: θ ÷ 360 do disco'], ['em radianos: α·r² ÷ 2', 'growth'], ['segmento = setor − triângulo', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do disco ao setor e ao segmento.', [
  ['Setor circular', 'região entre dois raios', 'bulb'],
  ['Área do setor', 'fração do disco', 'target'],
  ['Em radianos', 'A = α · r² ÷ 2', 'chart'],
  ['Segmento circular', 'região entre corda e arco', 'link'],
  ['Área do segmento', 'setor − triângulo', 'scale']
]));
b.push(objetivosSlide([
  'Calcular a <strong>área de um setor circular</strong> por proporção, em graus ou em radianos.',
  'Definir <strong>segmento circular</strong> e calcular sua área como <strong>setor menos triângulo</strong>.',
  'Resolver problemas de <strong>gráficos de pizza, irrigação e logomarcas</strong>.'
], 'Dica', 'Antes de qualquer fórmula, pergunte: <strong>que fração da volta é esse ângulo?</strong> A área do setor é essa fração da área do disco.', 'primary'));

b.push(sl('Para início de conversa', 'O gráfico de pizza', `
          ${lede('Em um gráfico de setores com $6$ cm de diâmetro, a fatia azul representa 35% dos dados. Sem usar o ângulo, a área da fatia é <strong>35% da área do círculo</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Setor circular', W.row(W.rg('s60-g', 'Ângulo central', 10, 360, 5, 120, '°'), W.nm('s60-r', 'Raio (cm)', 6, 'any', 'min="0.1"')) + W.svg('s60-s', '0 0 340 220', '320px') + W.txt('s60-a', 'Área do setor: ') + W.hint('s60-h'))}
            ${mini('Com raio $3$ cm, a área de 35% do círculo é aproximadamente: (use $π = 3,14$)', ['$3,3$ cm²', '$9,9$ cm²', '$28,3$ cm²', '$35$ cm²'], 1, 'Disco: $π · 9 = 28,26$; 35% de $28,26$ é aproximadamente $9,9$ cm².')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · setor circular', 'Fração do disco', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Setor circular:</strong> porção do círculo delimitada por dois raios e pelo arco entre eles; o ângulo entre os raios é o <strong>ângulo central</strong>.</li>
                <li>Em <strong>graus</strong>: $A_{setor} = {θ|360} · πr^{2}$.</li>
                <li>Em <strong>radianos</strong> (volta inteira $= 2π$): $A_{setor} = {α|2π} · πr^{2} = {α · r^{2}|2}$.</li>
                <li>A área do setor é <strong>proporcional</strong> ao ângulo: o dobro do ângulo, o dobro da área.</li>
              </ul>
            </div>
            ${tbl(['Ângulo', 'Fração do disco', 'Área ($r = 6$, $π = 3,14$)'], [['$90°$', '$ {1|4}$', '$28,26$'], ['$120°$', '$ {1|3}$', '$37,68$'], ['$180°$', '$ {1|2}$', '$56,52$'], ['$360°$', '$1$', '$113,04$']])}
          </div>`.replace('${θ|360}', '$ {θ|360}'), { cls: '' }));

b.push(sl('Teoria · segmento circular', 'Região entre a corda e o arco', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Segmento circular:</strong> região do círculo delimitada por uma <strong>corda</strong> e pelo <strong>arco</strong> que ela determina.</li>
                <li>Área = <strong>setor</strong> menos o <strong>triângulo</strong> formado pelos dois raios e a corda.</li>
                <li>O triângulo tem dois lados $r$ e ângulo $α$ entre eles: $A_{tri} = {1|2} r^{2} · sen α$.</li>
                <li><strong>Fórmula:</strong> $A_{seg} = {r^{2}|2}(α − sen α)$, com $α$ em radianos.</li>
              </ul>
            </div>
            ${W.box('Segmento circular', W.row(W.rg('g60-g', 'Ângulo central', 10, 180, 5, 60, '°'), W.nm('g60-r', 'Raio (cm)', 6, 'any', 'min="0.1"')) + W.svg('g60-s', '0 0 340 220', '320px') + W.txt('g60-a', 'Setor · triângulo · segmento: ') + W.hint('g60-h'))}
          </div>`.replace('${1|2} r', '$ {1|2} r'), { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'O irrigador', 'Um irrigador cobre um ângulo central de $150°$ com alcance de $12$ m. Qual a área molhada? (use $π = 3$)', [
  ['Fração da volta', '${150|360} = {5|12}$.'.replace('${', '$ {')],
  ['Disco', '$π · 12^{2} = 3 · 144 = 432$ m².'],
  ['Setor', '${5|12} · 432 = 180$ m².'.replace('${', '$ {')]
], 'A área molhada é $180$ m².'));

b.push(exemplo('Exemplo resolvido', 'Setor em radianos', 'Um setor tem raio $4$ m e ângulo central $ {π|3}$ rad. Qual a área?', [
  ['Fórmula', '$A = {α · r^{2}|2} = {(π ÷ 3) · 16|2}$.'],
  ['Resultado', '$A = {8π|3} ≈ 8,37$ m².']
], '$A = {8π|3} ≈ 8,4$ m².'.replace('${', '$ {'), 'growth'));
b.push(exemplo('Exemplo resolvido', 'A logomarca', 'Uma logomarca contém um segmento circular de um círculo de raio $6$ cm, com ângulo central de $60°$. Qual a área do segmento? (use $π = 3,14$ e $√{3} = 1,73$)', [
  ['Setor', '${60|360} · π · 36 = 6π = 18,84$ cm².'.replace('${', '$ {')],
  ['Triângulo', 'Com $60°$ e dois lados $6$, é equilátero: $A = {6^{2} · √{3}|4} = 9√{3} = 15,57$ cm².'.replace('${', '$ {')],
  ['Segmento', '$18,84 − 15,57 = 3,27$ cm².']
], 'O segmento tem cerca de $3,27$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Fatia de pizza', 'Uma pizza de $36$ cm de diâmetro é dividida em $8$ fatias iguais. Qual a área de uma fatia? (use $π = 3,14$)', [
  ['Raio', '$r = 18$ cm; disco: $3,14 · 324 = 1017,36$ cm².'],
  ['Uma fatia', '$1017,36 ÷ 8 = 127,17$ cm².']
], 'Cada fatia tem cerca de $127$ cm².', 'decay'));

b.push(pratique('Setor de 90°', 'O setor de $90°$ de um círculo de raio $10$ cm tem área: (use $π = 3,14$)',
  ['$31,4$ cm²', '$78,5$ cm²', '$157$ cm²', '$314$ cm²'], 1, '${1|4} · 3,14 · 100 = 78,5$ cm². <strong>Alternativa B.</strong>'.replace('${', '$ {')));

b.push(pratique('Irrigador', 'Um irrigador de alcance $9$ m cobre $120°$. A área molhada é: (use $π = 3$)',
  ['$9$ m²', '$27$ m²', '$81$ m²', '$243$ m²'], 2, '${1|3} · 3 · 81 = 81$ m². <strong>Alternativa C.</strong>'.replace('${', '$ {'), '', 'growth'));
b.push(pratique('Segmento', 'O segmento de um círculo de raio $10$ cm e ângulo $60°$ tem área: (use $π = 3$ e $√{3} = 1,7$)',
  ['$7,5$ cm²', '$42,5$ cm²', '$50$ cm²', '$92,5$ cm²'], 0, 'Setor: ${1|6} · 3 · 100 = 50$; triângulo: $25√{3} = 42,5$; segmento: $7,5$ cm². <strong>Alternativa A.</strong>'.replace('${', '$ {'), '', 'decay'));
b.push(estiloEnem('Jardim em leque', 'Um jardim tem a forma de um setor circular de raio $6$ m e ângulo central de $120°$. Qual a área, usando $π = 3$?',
  ['$18$ m²', '$27$ m²', '$36$ m²', '$54$ m²', '$108$ m²'], 2, '${1|3} · 3 · 36 = 36$ m². <strong>Alternativa C.</strong>'.replace('${', '$ {')));

b.push(armadilhas('Cuidados', 'Onde setor e segmento enganam', [
  ['Graus na fórmula em radianos', '$A = α · r^{2} ÷ 2$ exige $α$ em <strong>radianos</strong>.'],
  ['Segmento sem subtrair o triângulo', 'O segmento é o setor <strong>menos</strong> o triângulo, não o setor inteiro.'],
  ['Triângulo errado', 'O triângulo tem lados $r$, $r$ e ângulo $α$; só é equilátero em $60°$.'],
  ['Fração mal calculada', '$120°$ é $ {1|3}$ da volta, não $ {1|2}$.']
].map(x => [x[0], x[1].replace('${', '$ {')])));
b.push(quiz([
  { q: 'Um setor de $180°$ de um disco de área $100$ tem área:', o: ['$25$', '$50$', '$100$', '$200$'], a: 1 },
  { q: 'O segmento circular é o setor:', o: ['mais o triângulo', 'menos o triângulo', 'vezes o triângulo', 'sem relação'], a: 1 },
  { q: 'Em radianos, a área do setor de ângulo $α$ e raio $r$ é:', o: ['$α r$', '$α r^{2} ÷ 2$', '$π α r$', '$2 α r$'], a: 1 },
  { q: 'Um setor de $60°$ é que fração do disco?', o: ['${1|2}$', '${1|3}$', '${1|6}$', '${1|4}$'].map(t => t.replace('${', '$ {')), a: 2 }
].map(q => ({ ...q, o: q.o.map(t => t.replace('${', '$ {')) }))));
b.push(fechamento([
  ['Setor', '$A = {θ|360} · πr^{2}$ (graus) ou ${α r^{2}|2}$ (radianos).'.split('${').join('$ {')],
  ['Segmento', '$A_{seg} = A_{setor} − A_{triângulo}$.'],
  ['Estratégia', 'Descubra a fração da volta e aplique ao disco.']
], 'Setor e segmento completam a família dos “pedaços” de círculo. Próxima aula: problemas que combinam círculos e outras figuras.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-circulo-e-coroa.html', html: K.deck({
  title: 'Área do círculo e da coroa circular — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 59 · Círculo e coroa circular', slides: a,
  extra: WJS + BIND + CIRC + String.raw`
  bind(['d59-r'], function(){ var r = +$('d59-r').value; if(!(r > 0)){ $('d59-s').innerHTML = ''; $('d59-c').textContent = '—'; $('d59-a').textContent = '—'; return; }
    cena($('d59-s'), r, 0, 0, 'disco'); $('d59-c').textContent = pt(2 * Math.PI * r, 2) + ' m'; $('d59-a').textContent = pt(Math.PI * r * r, 2) + ' m²';
    $('d59-h').textContent = 'C = 2πr e A = πr² (com π ≈ 3,1416). Raio ' + pt(r, 2) + ' m, diâmetro ' + pt(2 * r, 2) + ' m.'; });
  bind(['k59-R', 'k59-r'], function(){ var R = +$('k59-R').value, r = +$('k59-r').value; if(!(R > 0 && r > 0 && R > r)){ $('k59-s').innerHTML = ''; $('k59-a').textContent = '—'; $('k59-h').textContent = 'O raio maior R precisa ser maior que o menor r.'; return; }
    cena($('k59-s'), R, r, 0, 'coroa'); var A = Math.PI * (R * R - r * r); $('k59-a').textContent = pt(A, 2) + ' m²';
    $('k59-h').textContent = 'π(R² − r²) = π · (' + pt(R * R, 2) + ' − ' + pt(r * r, 2) + '); largura da coroa: ' + pt(R - r, 2) + ' m.'; });`
}) });
pages.push({ out: BASE + 'aula-2-setor-e-segmento.html', html: K.deck({
  title: 'Setor e segmento circular — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 60 · Setor e segmento circular', slides: b,
  extra: WJS + BIND + CIRC + String.raw`
  bind(['s60-g', 's60-r'], function(){ var g = +$('s60-g').value, r = +$('s60-r').value; $('s60-gv').textContent = g; if(!(r > 0)){ $('s60-s').innerHTML = ''; $('s60-a').textContent = '—'; return; }
    cena($('s60-s'), r, 0, g, 'setor'); var A = g / 360 * Math.PI * r * r; $('s60-a').textContent = pt(A, 2) + ' cm²';
    $('s60-h').textContent = g + '° é ' + pt(g / 360, 3) + ' da volta; disco: ' + pt(Math.PI * r * r, 2) + ' cm²; setor = fração × disco.'; });
  bind(['g60-g', 'g60-r'], function(){ var g = +$('g60-g').value, r = +$('g60-r').value; $('g60-gv').textContent = g; if(!(r > 0)){ $('g60-s').innerHTML = ''; $('g60-a').textContent = '—'; return; }
    cena($('g60-s'), r, 0, g, 'segmento'); var al = g * Math.PI / 180, S = al * r * r / 2, Tr = r * r * Math.sin(al) / 2;
    $('g60-a').textContent = pt(S, 2) + ' · ' + pt(Tr, 2) + ' · ' + pt(S - Tr, 2) + ' cm²'; $('g60-h').textContent = 'segmento = setor − triângulo = ' + pt(S, 2) + ' − ' + pt(Tr, 2) + ' = ' + pt(S - Tr, 2) + ' cm².'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Área do círculo e de suas partes', accent: 'decay', icon: 'dots',
  aulas: [['Aula 59', 'Círculo, circunferência e coroa circular', 'aula-1-circulo-e-coroa.html'], ['Aula 60', 'Setor e segmento circular', 'aula-2-setor-e-segmento.html']],
  pendente: true
}, pages };
