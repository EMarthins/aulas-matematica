// Unidade v26 — Área: unidades e fórmulas dos polígonos (aulas 55 e 56 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'area-de-poligonos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v26', BRAND = 'Área de polígonos';

// ===================== AULA 55: área e unidades =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 55', h1: 'Área: <span style="color:var(--primary);">quantos quadrados cabem na figura</span>',
  sub: 'Trocar o gramado de um estádio, pintar as linhas do campo, comparar quadras: tudo começa por medir uma superfície. Esta aula revisa a noção de área, as unidades e as transformações entre elas.',
  badges: [['m² · cm² · ha'], ['de 100 em 100', 'growth'], ['A = b · h', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da unidade quadrada ao custo de um estádio.', [
  ['O que é área', 'unidades quadradas que cabem', 'bulb'],
  ['Unidades', 'km², hm², dam², m², dm², cm², mm²', 'target'],
  ['Transformar', 'de 100 em 100, não de 10 em 10', 'chart'],
  ['Hectare', '1 ha = 10 000 m²', 'link'],
  ['Problemas', 'gramado, mesa e fazenda', 'scale']
]));
a.push(objetivosSlide([
  'Compreender <strong>área</strong> como a medida da superfície em <strong>unidades quadradas</strong>.',
  '<strong>Transformar unidades de área</strong> (multiplicando ou dividindo por $100$ a cada passo).',
  'Resolver problemas de <strong>cobertura, custo e conversão</strong>.'
], 'Dica', 'Cada unidade de área é <strong>quadrada</strong>: $1$ m $= 100$ cm, mas $1$ m² $= 100 · 100 = 10 000$ cm².'.split(' ').join(''), 'primary'));

a.push(sl('Para início de conversa', 'Medir a superfície do campo', `
          ${lede('Uma organização de campeonato vai trocar o gramado de $12$ estádios. Cada campo oficial mede cerca de $105$ m por $68$ m. Para estimar a grama necessária e o custo, é preciso <strong>medir a superfície</strong> de cada campo: sua <strong>área</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: [[0, 0], [105, 0], [105, 68], [0, 68]], fill: 'var(--success-soft)', stroke: 'var(--success)' }], [[52, 0, '105 m', null, 'middle', 0, 16], [105, 34, '68 m', null, 'start', 8, 4]], { w: 280, h: 170 })}
            ${mini('A área de um campo de $105$ m por $68$ m é:', ['$173$ m²', '$346$ m²', '$7 140$ m²'.split(' ').join(''), '$71 400$ m²'.split(' ').join('')], 2, '$A = 105 · 68 = 7140$ m².')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · unidades de área', 'Unidades quadradas e transformações', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Área</strong> é a medida da superfície de uma figura plana: quantas unidades quadradas cabem nela. Exemplo: um retângulo de $4 × 3$ tem $A = 12$ u².</li>
                <li>Unidade padrão: o <strong>metro quadrado (m²)</strong>, área de um quadrado de $1$ m de lado.</li>
                <li>Cada passo na escada de unidades (km², hm², dam², m², dm², cm², mm²) é de <strong>100 em 100</strong> ($10^{2}$): para uma unidade menor, <strong>multiplique por $100$</strong>; para uma maior, <strong>divida por $100$</strong>.</li>
                <li><strong>Hectare:</strong> $1$ ha $= 10 000$ m².</li>
              </ul>
            </div>
            ${W.box('Conversor de unidades de área', W.row(W.nm('u55-v', 'Valor', 2, 'any'), W.sel('u55-a', 'De', ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²', 'ha'], 3), W.sel('u55-b', 'Para', ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²', 'ha'], 5)) + W.txt('u55-r', 'Resultado: ') + W.hint('u55-h'))}
          </div>`.split(' ').join(''), { cls: '' }));

a.push(sl('Resumo visual', 'A escada das unidades de área', `
          ${tbl(['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'], [['$10^{6}$ m²', '$10^{4}$ m²', '$10^{2}$ m²', '$1$ m²', '$10^{−2}$ m²', '$10^{−4}$ m²', '$10^{−6}$ m²']])}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Descer na escada (unidade menor)</strong><p style="font-size:.9rem;margin:6px 0 0;">Multiplique por $100$ em cada passo. $2$ m² $= 2 · 100 · 100 = 20 000$ cm².</p>'.split(' ').join(''), 'primary')}
            ${card('<strong>Subir na escada (unidade maior)</strong><p style="font-size:.9rem;margin:6px 0 0;">Divida por $100$ em cada passo. $5 000$ m² $= 5000 ÷ 100 ÷ 100 ÷ 100 = 0,005$ km².</p>'.split(' ').join(''), 'decay')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Grama dos 12 estádios', 'Cada campo mede $105$ m × $68$ m e o metro quadrado de grama custa R$ 38,00. Calcule a área de um campo, a área total dos $12$ estádios e o custo.', [
  ['Um campo', '$A = 105 · 68 = 7140$ m².'],
  ['Os 12 campos', '$7140 · 12 = 85680$ m².'],
  ['Custo', '$85680 · 38 = 3255840$: R$ 3.255.840,00.']
], 'Área total de $85 680$ m² e custo de R$ 3.255.840,00.'.split(' ').join('')));
a.push(exemplo('Exemplo resolvido', 'Placas de grama', 'Se cada placa de grama cobre $2$ m², quantas placas cobrem um campo de $7140$ m²? E quantos cm² tem esse campo?', [
  ['Placas', '$7140 ÷ 2 = 3570$ placas.'],
  ['Para cm²', '$7140 · 100 · 100 = 71 400 000$ cm².']
].map(p => [p[0], p[1].split(' ').join('')]), 'São $3570$ placas e $71400000$ cm².', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Azulejos em uma parede', 'Uma parede de $2$ m² será coberta por azulejos quadrados de $20$ cm de lado. Quantos azulejos são necessários?', [
  ['Mesma unidade', '$2$ m² $= 2 · 10000 = 20000$ cm².'],
  ['Área do azulejo', '$20 · 20 = 400$ cm².'],
  ['Quantidade', '$20000 ÷ 400 = 50$ azulejos.']
], 'São necessários $50$ azulejos (sem desperdício).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Hectares', 'Uma fazenda tem $3,5$ ha. Se $15000$ m² serão de milharal, quanto sobra para pastagem, em m²?', [
  ['Em m²', '$3,5$ ha $= 3,5 · 10000 = 35000$ m².'],
  ['Subtrair', '$35000 − 15000 = 20000$ m².']
], 'Sobram $20000$ m² para pastagem.', 'decay'));

a.push(pratique('Para cm²', 'A área de $45000$ mm² vale, em cm²:',
  ['$4,5$ cm²', '$45$ cm²', '$450$ cm²', '$4500$ cm²'], 2, 'De mm² para cm²: divida por $100$: $45000 ÷ 100 = 450$ cm². <strong>Alternativa C.</strong>'));
a.push(pratique('Para km²', 'Uma área de $2 500 000$ m² equivale a:'.split(' ').join(''),
  ['$0,25$ km²', '$2,5$ km²', '$25$ km²', '$250$ km²'], 1, '$1$ km² $= 1000000$ m²: $2500000 ÷ 1000000 = 2,5$ km². <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Folhas de papel', 'Uma mesa de $1,2$ m² será coberta com folhas de $600$ cm² cada, sem sobreposição. Quantas folhas?',
  ['$2$', '$12$', '$20$', '$200$'], 2, '$1,2$ m² $= 12000$ cm²; $12000 ÷ 600 = 20$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Plantio', 'Um agricultor tem $3$ ha e planta soja em $12000$ m². A área restante, em m², é:',
  ['$6000$', '$12000$', '$18000$', '$30000$', '$36000$'], 2, '$3$ ha $= 30000$ m²; $30000 − 12000 = 18000$ m². <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as unidades de área enganam', [
  ['Transformar de 10 em 10', 'Em área, cada passo vale <strong>100</strong> (e não $10$): $1$ m² $= 10000$ cm².'],
  ['Misturar unidades', 'Antes de dividir ou somar áreas, coloque tudo na <strong>mesma unidade</strong>.'],
  ['Esquecer o hectare', '$1$ ha $= 10000$ m²: é a unidade típica de terrenos rurais.'],
  ['Confundir área e perímetro', 'Área mede a superfície (u²); perímetro mede o contorno (u).']
]));
a.push(quiz([
  { q: 'Um quadrado de $1$ m de lado tem área:', o: ['$1$ cm²', '$1$ m²', '$100$ m²', '$1$ m'], a: 1 },
  { q: 'Para passar de m² para cm², multiplicamos por:', o: ['$10$', '$100$', '$1000$', '$10000$'], a: 3 },
  { q: '$1$ ha equivale a:', o: ['$100$ m²', '$1000$ m²', '$10000$ m²', '$100000$ m²'], a: 2 },
  { q: 'Uma área de $200$ cm² vale, em dm²:', o: ['$2$ dm²', '$20$ dm²', '$0,2$ dm²', '$2000$ dm²'], a: 0 }
]));
a.push(fechamento([
  ['Unidades', 'A unidade padrão é o m²; cada passo da escada vale $100$.'],
  ['Hectare', '$1$ ha $= 10000$ m².'],
  ['Método', 'Coloque tudo na mesma unidade antes de calcular.']
], 'Com as unidades dominadas, podemos calcular áreas de figuras específicas. Próxima aula: triângulos e quadriláteros.'));

// ===================== AULA 56: fórmulas das áreas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 56', h1: 'Áreas de triângulos e quadriláteros: <span style="color:var(--primary);">fórmulas e problemas</span>',
  sub: 'Quanto piso comprar para uma casa? Quanta tinta para uma parede? Qual a área do jardim? Para responder, reconhecemos a figura e aplicamos a fórmula certa.',
  badges: [['retângulo · triângulo'], ['trapézio · losango', 'growth'], ['paralelogramo', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do retângulo ao trapézio.', [
  ['Retângulo e quadrado', 'base × altura', 'bulb'],
  ['Paralelogramo e triângulo', 'b · h e b · h ÷ 2', 'target'],
  ['Losango', 'diagonais D · d ÷ 2', 'chart'],
  ['Trapézio', '(B + b) · h ÷ 2', 'link'],
  ['Problemas', 'piso, parede e terreno', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer e aplicar as <strong>fórmulas de área</strong> do retângulo, quadrado, paralelogramo, triângulo, losango e trapézio.',
  'Usar o <strong>teorema de Pitágoras</strong> para achar a altura quando ela não é dada.',
  'Resolver problemas de <strong>piso, azulejos e terrenos</strong>.'
], 'Dica', 'Quase toda fórmula de área vem do retângulo: <strong>o paralelogramo é um retângulo reorganizado</strong> e <strong>o triângulo é metade de um paralelogramo</strong>.', 'primary'));

b.push(sl('Para início de conversa', 'Mesmo perímetro, mesma área?', `
          ${lede('Um retângulo de $6 × 2$ e um quadrado de lado $4$ têm o <strong>mesmo perímetro</strong> ($16$). Será que têm a mesma área? Para decidir, calculamos: $6 · 2 = 12$ e $4 · 4 = 16$. <strong>Perímetro igual não garante área igual.</strong>')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: [[0, 0], [6, 0], [6, 2], [0, 2]] }], [[3, 0, '6', null, 'middle', 0, 16], [6, 1, '2', null, 'start', 8, 4]], { w: 230, h: 120 })}
            ${G2.plot([{ pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: 'var(--success-soft)', stroke: 'var(--success)' }], [[2, 0, '4', null, 'middle', 0, 16], [4, 2, '4', null, 'start', 8, 4]], { w: 230, h: 140 })}
          </div>
          <p class="hint" style="margin-top:6px;">Perímetro mede o <strong>contorno</strong>; área mede a <strong>superfície</strong>.</p>`, { cls: '' }));

b.push(sl('Resumo visual', 'As fórmulas de área', `
          <div class="grid2">
            ${tbl(['Figura', 'Área'], [['Retângulo', '$b · h$'], ['Quadrado', '$ℓ^{2}$'], ['Paralelogramo', '$b · h$'], ['Triângulo', '${b · h|2}$'.replace('${', '$ {')], ['Triângulo retângulo', '${c_{1} · c_{2}|2}$'.replace('${', '$ {')], ['Triângulo equilátero', '${ℓ^{2} · √{3}|4}$'.replace('${', '$ {')], ['Losango', '${D · d|2}$'.replace('${', '$ {')], ['Trapézio', '${(B + b) · h|2}$'.replace('${', '$ {')]])}
            <div>
              ${G2.trapezio(12, 4, 3, { w: 270, h: 140 })}
              <p class="hint" style="margin-top:4px;">Trapézio: $B$ e $b$ são as bases paralelas e $h$ a distância entre elas.</p>
            </div>
          </div>`, { cls: '' }));

b.push(sl('Teoria · calculadora de áreas', 'Escolha a figura e as medidas', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>A <strong>altura</strong> é sempre perpendicular à base (ou às bases).</li>
                <li>Quando só se conhecem os lados inclinados, use <strong>Pitágoras</strong> para achar a altura.</li>
                <li>No trapézio isósceles, cada “ponta” horizontal mede $d = {B − b|2}$ e a altura satisfaz $h^{2} + d^{2} = ℓ^{2}$, com $ℓ$ o lado inclinado.</li>
                <li>Mude os valores ao lado e observe a área mudar com a fórmula da figura.</li>
              </ul>
            </div>
            ${W.box('Calculadora de áreas', W.sel('g56-f', 'Figura', ['Retângulo', 'Triângulo', 'Paralelogramo', 'Trapézio', 'Losango'], 3) + W.row(W.nm('g56-1', 'b', 12, 'any', 'min="0.1"'), W.nm('g56-2', 'b', 4, 'any', 'min="0.1"'), W.nm('g56-3', 'h', 3, 'any', 'min="0.1"')) + W.svg('g56-s', '0 0 340 200', '340px') + W.txt('g56-r', 'Área: ') + W.hint('g56-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Triângulo na malha', 'Um triângulo tem base $8$ cm e altura $4$ cm. Qual a área?', [
  ['Fórmula', '$A = {b · h|2}$.'],
  ['Substituir', '$A = {8 · 4|2} = 16$.']
], 'A área é $16$ cm².'.replace('${', '$ {')));
b.push(exemplo('Exemplo resolvido', 'Trapézio isósceles', 'Um trapézio isósceles tem bases $12$ cm e $4$ cm e lados inclinados de $5$ cm. Calcule a área.', [
  ['Parte horizontal', '$d = {12 − 4|2} = 4$ cm.'],
  ['Altura (Pitágoras)', '$h^{2} + 4^{2} = 5^{2}$ ⇒ $h^{2} = 9$ ⇒ $h = 3$ cm.'],
  ['Área', '$A = {(12 + 4) · 3|2} = 24$ cm².']
], 'A área do trapézio é $24$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Losango e triângulo equilátero', 'Calcule a área de um losango de diagonais $10$ e $6$ e de um triângulo equilátero de lado $6$.', [
  ['Losango', '$A = {10 · 6|2} = 30$.'],
  ['Equilátero', '$A = {6^{2} · √{3}|4} = 9√{3} ≈ 15,6$.']
], 'Losango: $30$; equilátero: $9√{3} ≈ 15,6$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Casa e quintal', 'Um terreno retangular de $25$ m por $16$ m tem uma casa que ocupa um quinto dele; o restante é quintal. Se o piso do quintal é vendido em caixas de $2$ m², quantas caixas são necessárias?', [
  ['Terreno', '$25 · 16 = 400$ m².'],
  ['Quintal', '$400 − {400|5} = 400 − 80 = 320$ m².'],
  ['Caixas', '$320 ÷ 2 = 160$ caixas.']
], 'São necessárias $160$ caixas.', 'decay'));

b.push(pratique('Triângulo', 'Um triângulo tem base $14$ cm e altura $9$ cm. Sua área é:',
  ['$23$ cm²', '$63$ cm²', '$126$ cm²', '$252$ cm²'], 1, '$A = 14 · 9 ÷ 2 = 63$. <strong>Alternativa B.</strong>'));
b.push(pratique('Azulejos', 'Uma parede de $2,4$ m por $90$ cm será coberta com azulejos quadrados de $45$ cm de lado. O número mínimo de azulejos é:',
  ['$8$', '$10$', '$11$', '$12$'], 3, '$240 ÷ 45 ≈ 5,3$ ⇒ $6$ em cada fileira; $90 ÷ 45 = 2$ fileiras: $6 · 2 = 12$ azulejos. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(pratique('Aumento no lado', 'O lado de um quadrado aumenta 20%. A área aumenta:',
  ['20%', '40%', '44%', '120%'], 2, 'Novo lado $1,2ℓ$; nova área $1,44ℓ^{2}$: aumento de 44%. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(estiloEnem('Jardim em trapézio', 'Um jardim tem forma de trapézio com bases de $10$ m e $6$ m e altura de $5$ m. A área é, em m²:',
  ['$30$', '$40$', '$50$', '$80$', '$300$'], 1, '$A = (10 + 6) · 5 ÷ 2 = 40$ m². <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as fórmulas enganam', [
  ['Lado inclinado no lugar da altura', 'A altura é <strong>perpendicular</strong> à base; não use o lado inclinado do paralelogramo ou do trapézio.'],
  ['Esquecer o “÷ 2”', 'Triângulo, losango e trapézio levam a divisão por $2$.'],
  ['Unidades diferentes', 'Base em m e altura em cm: converta antes de multiplicar.'],
  ['Confundir perímetro e área', 'Mesmo perímetro não significa mesma área.']
]));
b.push(quiz([
  { q: 'A área de um triângulo de base $10$ e altura $6$ é:', o: ['$16$', '$30$', '$60$', '$120$'], a: 1 },
  { q: 'A área de um losango de diagonais $8$ e $5$ é:', o: ['$13$', '$20$', '$40$', '$80$'], a: 1 },
  { q: 'A área de um trapézio de bases $7$ e $3$ e altura $4$ é:', o: ['$20$', '$40$', '$21$', '$84$'], a: 0 },
  { q: 'A altura do paralelogramo é medida:', o: ['pelo lado inclinado', 'perpendicularmente à base', 'pela diagonal', 'pelo perímetro'], a: 1 }
]));
b.push(fechamento([
  ['Quadriláteros', 'Retângulo $b · h$; paralelogramo $b · h$; losango ${D · d|2}$; trapézio ${(B + b) · h|2}$.'.split('${').join('$ {')],
  ['Triângulo', '${b · h|2}$, e no equilátero ${ℓ^{2} · √{3}|4}$.'.split('${').join('$ {')],
  ['Altura', 'Perpendicular à base; quando falta, use Pitágoras.']
], 'Com as fórmulas, calculamos áreas de figuras simples. Próxima aula: polígonos irregulares, que se resolvem por decomposição.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-area-e-unidades.html', html: K.deck({
  title: 'Área e unidades de área — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 55 · Área e unidades', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 6 : d}).replace('-', '−'); }
  var FAT = [1e6, 1e4, 1e2, 1, 1e-2, 1e-4, 1e-6, 1e4], NOME = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²', 'ha'];
  bind(['u55-v', 'u55-a', 'u55-b'], function(){ var v = +$('u55-v').value, i = +$('u55-a').value, j = +$('u55-b').value; if(!isFinite(v)){ $('u55-r').textContent = '—'; return; }
    var r = v * FAT[i] / FAT[j]; $('u55-r').textContent = pt(v) + ' ' + NOME[i] + ' = ' + pt(r) + ' ' + NOME[j];
    $('u55-h').textContent = 'Em m²: ' + pt(v * FAT[i]) + ' m². Cada passo da escada km² → mm² vale 100; o hectare equivale a 10 000 m².'; });`
}) });
pages.push({ out: BASE + 'aula-2-areas-de-triangulos-e-quadrilateros.html', html: K.deck({
  title: 'Áreas de triângulos e quadriláteros — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 56 · Áreas de figuras planas', slides: b,
  extra: WJS + BIND + G2.GJS + String.raw`
  var NOMES = [['b', 'h', ''], ['b', 'h', ''], ['b', 'h', ''], ['B', 'b', 'h'], ['D', 'd', '']];
  function desenha(){ var f = +$('g56-f').value, p1 = +$('g56-1').value, p2 = +$('g56-2').value, p3 = +$('g56-3').value, lab = NOMES[f];
    ['1', '2', '3'].forEach(function(k, i){ $('g56-' + k).parentNode.querySelector('label').textContent = lab[i]; $('g56-' + k).parentNode.style.display = lab[i] ? '' : 'none'; });
    var svg = $('g56-s'), A = 0, fx = '', P;
    if(!(p1 > 0 && p2 > 0) || (f === 3 && !(p3 > 0))){ svg.innerHTML = ''; $('g56-r').textContent = '—'; return; }
    if(f === 0){ A = p1 * p2; fx = 'b · h'; P = polS(svg, [[0, 0], [p1, 0], [p1, p2], [0, p2]], [[p1 / 2, 0, 'b = ' + pt(p1, 2), 0, 16], [p1, p2 / 2, 'h = ' + pt(p2, 2), 8, 4, null, 'start']]); }
    else if(f === 1){ A = p1 * p2 / 2; fx = 'b · h ÷ 2'; P = polS(svg, [[0, 0], [p1, 0], [p1 / 2, p2]], [[p1 / 2, 0, 'b = ' + pt(p1, 2), 0, 16], [p1 / 2, p2 / 2, 'h = ' + pt(p2, 2), 6, 4, 'var(--growth)', 'start']]); guiaS(svg, P, p1 / 2, p2, p1 / 2, 0); }
    else if(f === 2){ var s = p1 / 3; A = p1 * p2; fx = 'b · h'; P = polS(svg, [[0, 0], [p1, 0], [p1 + s, p2], [s, p2]], [[p1 / 2, 0, 'b = ' + pt(p1, 2), 0, 16], [s, p2 / 2, 'h = ' + pt(p2, 2), 6, 4, 'var(--growth)', 'start']]); guiaS(svg, P, s, p2, s, 0); }
    else if(f === 3){ var B = Math.max(p1, p2), b = Math.min(p1, p2), d = (B - b) / 2; A = (B + b) * p3 / 2; fx = '(B + b) · h ÷ 2'; P = polS(svg, [[0, 0], [B, 0], [B - d, p3], [d, p3]], [[B / 2, 0, 'B = ' + pt(B, 2), 0, 16], [B / 2, p3, 'b = ' + pt(b, 2), 0, -8], [d, p3 / 2, 'h = ' + pt(p3, 2), 8, 4, 'var(--growth)', 'start']]); guiaS(svg, P, d, p3, d, 0); }
    else { A = p1 * p2 / 2; fx = 'D · d ÷ 2'; P = polS(svg, [[0, p2 / 2], [p1 / 2, 0], [p1, p2 / 2], [p1 / 2, p2]], [[p1 / 2, p2 / 2, 'D = ' + pt(p1, 2), 0, -5], [p1 / 2, p2 * 0.78, 'd = ' + pt(p2, 2), 6, 0, 'var(--growth)', 'start']]); guiaS(svg, P, 0, p2 / 2, p1, p2 / 2); guiaS(svg, P, p1 / 2, 0, p1 / 2, p2); }
    $('g56-r').textContent = pt(A, 3); $('g56-h').textContent = 'Área = ' + fx + ' = ' + pt(A, 3) + ' (unidades quadradas).'; }
  bind(['g56-f', 'g56-1', 'g56-2', 'g56-3'], desenha);
  $('g56-f').addEventListener('change', desenha);`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Área de polígonos: unidades e fórmulas', accent: 'primary', icon: 'polygon',
  aulas: [['Aula 55', 'Área e unidades de área', 'aula-1-area-e-unidades.html'], ['Aula 56', 'Áreas de triângulos e quadriláteros', 'aula-2-areas-de-triangulos-e-quadrilateros.html']],
  pendente: true
}, pages };
