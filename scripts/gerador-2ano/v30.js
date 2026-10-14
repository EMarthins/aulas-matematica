// Unidade v30 — Polígonos regulares: elementos, relações métricas e área (aulas 64 e 65 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'poligonos-regulares', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v30', BRAND = 'Polígonos regulares';

// polígono regular de n lados inscrito em circunferência de raio R (vértice no topo); devolve pontos
const reg = (n, R = 1) => Array.from({ length: n }, (_, i) => { const t = Math.PI / 2 + 2 * Math.PI * i / n; return [R * Math.cos(t), R * Math.sin(t)]; });
// figura de um polígono regular com raio, apótema e lado marcados
function figReg(n, o = {}) {
  const P = reg(n), mid = [(P[0][0] + P[1][0]) / 2, (P[0][1] + P[1][1]) / 2];
  return G2.plot([{ pts: P }], [[0, 0, 'O', 'var(--ink)', 'middle', -8, 4], [mid[0] / 2, mid[1] / 2, 'm', 'var(--growth)', 'middle', -8, 0], [P[0][0] / 2, P[0][1] / 2, 'r', 'var(--decay)', 'start', 6, 2], [mid[0], mid[1], 'ℓ', 'var(--primary)', 'middle', -10, -6]], { w: 250, h: 220, ...o },
    [{ de: [0, 0], para: P[0], cor: 'var(--decay)', dash: false }, { de: [0, 0], para: mid, cor: 'var(--growth)', dash: false }]);
}

// ===================== AULA 64: elementos e relações =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 64', h1: 'Polígonos regulares: <span style="color:var(--primary);">lado, raio e apótema</span>',
  sub: 'A porca sextavada é um hexágono e o ringue de MMA é um octógono. Polígonos regulares estão em toda parte, e seus elementos se relacionam por regras simples que dependem do número de lados.',
  badges: [['lados e ângulos iguais'], ['apótema m', 'growth'], ['quadrado · hexágono · triângulo', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Dos elementos às relações métricas.', [
  ['O que é regular', 'lados e ângulos iguais', 'bulb'],
  ['Elementos', 'centro, lado, raio, apótema, ângulos', 'target'],
  ['Quadrado', 'raio, lado e apótema', 'chart'],
  ['Hexágono', 'lado igual ao raio', 'link'],
  ['Triângulo equilátero', 'raio, lado e apótema', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer um <strong>polígono regular</strong> e seus <strong>elementos</strong>: centro, lado, raio, apótema, ângulo central e ângulo interno.',
  'Calcular <strong>ângulo central</strong> $α = {360°|n}$ e <strong>ângulo interno</strong> $β = 180° − α$.',
  'Relacionar <strong>lado, raio e apótema</strong> no quadrado, no hexágono regular e no triângulo equilátero.'
], 'Dica', 'Todo polígono regular se <strong>divide em $n$ triângulos isósceles iguais</strong> a partir do centro: o apótema é a altura de cada um deles.', 'primary'));

a.push(sl('Para início de conversa', 'Uma porca e um ringue', `
          ${lede('A porca sextavada é um <strong>hexágono regular</strong> e o octógono do MMA está no nome. Um polígono é <strong>regular</strong> quando tem todos os <strong>lados</strong> e todos os <strong>ângulos internos</strong> iguais; todo polígono regular pode ser <strong>inscrito</strong> em uma circunferência.')}
          <div class="grid2" style="margin-top:6px;">
            ${figReg(6)}
            ${mini('Um hexágono tem $6$ lados iguais. Cada ângulo central mede:', ['$30°$', '$45°$', '$60°$', '$120°$'], 2, '$α = 360° ÷ 6 = 60°$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · elementos', 'Os elementos de um polígono regular de n lados', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Centro $O$:</strong> centro da circunferência circunscrita (e do polígono).</li>
                <li><strong>Raio $r$:</strong> da circunferência circunscrita (centro até um vértice). <strong>Lado $ℓ$:</strong> lado do polígono.</li>
                <li><strong>Apótema $m$:</strong> distância do centro ao ponto médio de um lado (é perpendicular ao lado).</li>
                <li><strong>Ângulo central</strong> $α = {360°|n}$ e <strong>ângulo interno</strong> $β = 180° − α = {(n − 2) · 180°|n}$.</li>
                <li>Triângulo retângulo básico: $r^{2} = m^{2} + ({ℓ|2})^{2}$.</li>
              </ul>
            </div>
            ${W.box('Polígono regular', W.row(W.rg('p64-n', 'Lados n', 3, 12, 1, 6, ''), W.nm('p64-l', 'Lado ℓ (cm)', 6, 'any', 'min="0.1"')) + W.svg('p64-s', '0 0 340 220', '320px') + W.txt('p64-a', 'Ângulos central · interno: ') + W.txt('p64-b', 'Apótema m · raio r: ') + W.hint('p64-h'))}
          </div>`.replace('${ℓ|2}', '$ {ℓ|2}'), { cls: '' }));

a.push(sl('Resumo visual', 'Três polígonos que o Pitágoras resolve', `
          <div class="grid2">
            ${tbl(['Polígono', 'Lado ℓ em função de r', 'Apótema m'], [['Triângulo equilátero', '$r√{3}$', '${r|2}$'.replace('${', '$ {')], ['Quadrado', '$r√{2}$', '${ℓ|2} = {r√{2}|2}$'.replace('${', '$ {')], ['Hexágono regular', '$r$', '${r√{3}|2}$'.replace('${', '$ {')]])}
            <ul class="plain" style="font-size:.93rem;line-height:1.65;">
              <li><strong>Hexágono:</strong> os $6$ triângulos centrais são <strong>equiláteros</strong> ($α = 60°$ e os outros dois ângulos também), logo $ℓ = r$; o apótema é a altura: $m = {ℓ√{3}|2}$.</li>
              <li><strong>Quadrado:</strong> $ℓ^{2} = r^{2} + r^{2}$ ⇒ $ℓ = r√{2}$; o apótema é metade do lado.</li>
              <li><strong>Triângulo equilátero:</strong> $r = {ℓ√{3}|3}$ e $m = {r|2}$.</li>
            </ul>
          </div>`.replace('${ℓ√', '$ {ℓ√').replace('${ℓ√', '$ {ℓ√'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A lanterna do SUV', 'Na lanterna de um carro, um triângulo equilátero de lado $10√{3}$ cm e um hexágono regular estão inscritos na mesma circunferência. Qual o apótema do hexágono?', [
  ['Raio comum', 'Do triângulo: $r = {ℓ√{3}|3} = {10√{3} · √{3}|3} = 10$ cm.'.replace('${', '$ {')],
  ['Lado do hexágono', 'No hexágono, $ℓ = r = 10$ cm.'],
  ['Apótema', '$m = {r√{3}|2} = 5√{3} ≈ 8,7$ cm.'.replace('${', '$ {')]
], 'O apótema do hexágono mede $5√{3} ≈ 8,7$ cm.'));
a.push(exemplo('Exemplo resolvido', 'A engrenagem hexagonal', 'Uma engrenagem tem seção hexagonal regular de lado $18$ cm. Qual o raio da circunferência que a circunscreve?', [
  ['Hexágono', 'No hexágono regular, o raio é igual ao lado.']
], 'O raio é $18$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O vitral', 'Um painel de vidro em forma de triângulo equilátero de lado $6√{3}$ cm será encaixado em uma moldura circular. Qual o raio da moldura?', [
  ['Relação', '$r = {ℓ√{3}|3}$.'],
  ['Cálculo', '$r = {6√{3} · √{3}|3} = {18|3} = 6$ cm.']
], 'A moldura tem $6$ cm de raio.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ângulo interno', 'Calcule o ângulo central e o ângulo interno de um polígono regular de $12$ lados (dodecágono).', [
  ['Central', '$α = 360° ÷ 12 = 30°$.'],
  ['Interno', '$β = 180° − 30° = 150°$.']
], 'Central $30°$ e interno $150°$.', 'decay'));

a.push(pratique('Raio do hexágono', 'O hexágono regular de lado $15$ cm é circunscrito por uma circunferência de raio:',
  ['$7,5$ cm', '$7,5√{3}$ cm', '$15$ cm', '$30$ cm'], 2, 'No hexágono regular o raio é igual ao lado: $15$ cm. <strong>Alternativa C.</strong>'));
a.push(pratique('Raio do triângulo', 'Um triângulo equilátero de lado $9√{3}$ cm está inscrito em uma circunferência de raio:',
  ['$3$ cm', '$9$ cm', '$9√{3}$ cm', '$27$ cm'], 1, '$r = ℓ√{3} ÷ 3 = 9√{3} · √{3} ÷ 3 = 9$ cm. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Ângulo interno do octógono', 'O ângulo interno de um octógono regular mede:',
  ['$120°$', '$135°$', '$140°$', '$150°$'], 1, '$α = 360° ÷ 8 = 45°$ e $β = 180° − 45° = 135°$. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Peça cilíndrica', 'Um torneiro vai cortar uma peça hexagonal regular de $12$ cm de lado a partir de um cilindro de metal. O raio mínimo do cilindro é:',
  ['$6$ cm', '$6√{3}$ cm', '$12$ cm', '$12√{3}$ cm', '$24$ cm'], 2, 'No hexágono regular o raio circunscrito é igual ao lado: $12$ cm. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os polígonos regulares enganam', [
  ['Confundir raio e apótema', 'O raio vai ao <strong>vértice</strong>; o apótema vai ao <strong>meio do lado</strong> (e é perpendicular a ele).'],
  ['Ângulo central e interno', 'Central: $360° ÷ n$. Interno: $180° − 360° ÷ n$.'],
  ['Hexágono com raio diferente do lado', 'No hexágono regular, $r = ℓ$ sempre.'],
  ['Raiz de 3 no lugar errado', 'No triângulo equilátero, $r = ℓ√{3} ÷ 3$; no hexágono, $m = ℓ√{3} ÷ 2$.']
]));
a.push(quiz([
  { q: 'O ângulo central de um pentágono regular é:', o: ['$60°$', '$72°$', '$90°$', '$108°$'], a: 1 },
  { q: 'No hexágono regular de lado $8$, o raio é:', o: ['$4$', '$8$', '$8√{3}$', '$16$'], a: 1 },
  { q: 'O apótema é perpendicular ao lado no seu:', o: ['vértice', 'ponto médio', 'extremo', 'centro'], a: 1 },
  { q: 'O ângulo interno do quadrado é:', o: ['$45°$', '$60°$', '$90°$', '$120°$'], a: 2 }
]));
a.push(fechamento([
  ['Ângulos', 'Central $360° ÷ n$; interno $180° − 360° ÷ n$.'],
  ['Hexágono', '$ℓ = r$ e $m = {ℓ√{3}|2}$.'.replace('${', '$ {')],
  ['Pitágoras', '$r^{2} = m^{2} + (ℓ ÷ 2)^{2}$ liga raio, apótema e lado.']
], 'Com os elementos prontos, podemos calcular a área de qualquer polígono regular. Próxima aula: área e semiperímetro.'));

// ===================== AULA 65: área =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 65', h1: 'Área de um polígono regular: <span style="color:var(--primary);">semiperímetro vezes apótema</span>',
  sub: 'Favos de abelha, flores e cristais formam polígonos regulares. Para medir a área de qualquer um deles basta dividi-lo em triângulos iguais a partir do centro.',
  badges: [['A = p · m'], ['n triângulos', 'growth'], ['hexágono: 3ℓ²√3 ÷ 2', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('De um triângulo a todo o polígono.', [
  ['Dividir', 'n triângulos a partir do centro', 'bulb'],
  ['Um triângulo', 'base ℓ e altura m', 'target'],
  ['Todos juntos', 'A = p · m', 'chart'],
  ['Quadrado e hexágono', 'fórmulas em função do lado', 'link'],
  ['Problemas', 'favos, pisos e peças', 'scale']
]));
b.push(objetivosSlide([
  'Deduzir a área $A = {n · ℓ · m|2} = p · m$, com $p$ o <strong>semiperímetro</strong>.',
  'Calcular a área do <strong>quadrado, do hexágono regular e do triângulo equilátero</strong> em função do lado, do raio ou do apótema.',
  'Resolver problemas com <strong>polígonos regulares</strong>.'
], 'Dica', 'Área de polígono regular = <strong>semiperímetro × apótema</strong>: guarde <strong>$A = p · m$</strong> e ela resolve qualquer $n$.', 'primary'));

b.push(sl('Para início de conversa', 'Na natureza: o favo de mel', `
          ${lede('Um favo de abelhas é feito de hexágonos regulares. Para saber quanto de cera uma célula ocupa, calculamos a área do hexágono. Qualquer polígono regular se divide em <strong>$n$ triângulos isósceles iguais</strong> com vértice no centro: base $ℓ$ e altura $m$ (o apótema).')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: reg(6), fill: 'var(--growth-soft)', stroke: 'var(--growth)' }], [], { w: 230, h: 200 }, reg(6).map(p => ({ de: [0, 0], para: p, cor: 'var(--growth)', dash: false })))}
            ${mini('O hexágono regular se divide em quantos triângulos iguais?', ['$3$', '$4$', '$6$', '$12$'], 2, 'Um para cada lado: $n = 6$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · a área', 'A = p · m', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Cada triângulo tem área $ {ℓ · m|2}$; com $n$ triângulos: $A = n · {ℓ · m|2}$.</li>
                <li>$n · ℓ$ é o <strong>perímetro</strong> $P$ e $p = {P|2}$ é o <strong>semiperímetro</strong>.</li>
                <li><strong>Fórmula geral:</strong> $A = {P · m|2} = p · m$.</li>
                <li>Se faltar o apótema, use $m = {ℓ|2 · tg ({180°|n})}$ ou Pitágoras ($r^{2} = m^{2} + (ℓ ÷ 2)^{2}$).</li>
              </ul>
            </div>
            ${W.box('Área do polígono regular', W.row(W.rg('a65-n', 'Lados n', 3, 12, 1, 6, ''), W.nm('a65-l', 'Lado ℓ (cm)', 4, 'any', 'min="0.1"')) + W.svg('a65-s', '0 0 340 220', '320px') + W.txt('a65-r', 'p · m = ') + W.hint('a65-h'))}
          </div>`.replace('${ℓ · m|2}', '$ {ℓ · m|2}'), { cls: '' }));

b.push(sl('Resumo visual', 'Fórmulas em função do lado', `
          ${tbl(['Polígono', 'Apótema', 'Área'], [['Triângulo equilátero', '${ℓ√{3}|6}$', '${ℓ^{2}√{3}|4}$'], ['Quadrado', '${ℓ|2}$', '$ℓ^{2} = 4m^{2}$'], ['Hexágono regular', '${ℓ√{3}|2}$', '${3ℓ^{2}√{3}|2}$']].map(r => r.map(c => c.replace('${', '$ {'))))}
          <p class="hint" style="margin-top:8px;">No hexágono: $A = 6 · {ℓ^{2}√{3}|4} = {3ℓ^{2}√{3}|2}$ (seis triângulos equiláteros). No quadrado, $A = 4m^{2}$ (quatro quadrados de lado $m$).</p>`.replace('{3ℓ^{2}√{3}|2}$ (seis', '{3ℓ^{2}√{3}|2}$ (seis'), { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'A célula do favo', 'Uma célula de favo é um hexágono regular de lado $4$ mm. Qual a área? (use $√{3} = 1,73$)', [
  ['Fórmula', '$A = {3ℓ^{2}√{3}|2}$.'],
  ['Conta', '$A = {3 · 16 · 1,73|2} = {83,04|2} = 41,52$ mm².']
].map(r => [r[0], r[1].replace('${', '$ {')]), 'A área é cerca de $41,5$ mm².'));
b.push(exemplo('Exemplo resolvido', 'Pelo semiperímetro', 'Um octógono regular tem lado $6$ cm e apótema $7,24$ cm. Calcule a área.', [
  ['Perímetro', '$P = 8 · 6 = 48$ ⇒ $p = 24$ cm.'],
  ['Área', '$A = p · m = 24 · 7,24 = 173,76$ cm².']
], 'A área é cerca de $173,8$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Quadrado pelo apótema', 'O apótema de um quadrado mede $3$ cm. Qual a sua área?', [
  ['Lado', 'O apótema é metade do lado: $ℓ = 6$.'],
  ['Área', '$A = 6^{2} = 36$ cm² (ou $4m^{2} = 4 · 9$).']
], 'A área é $36$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Triângulo equilátero', 'Calcule a área de um triângulo equilátero de lado $8$ cm. (use $√{3} = 1,73$)', [
  ['Fórmula', '$A = {ℓ^{2}√{3}|4}$.'],
  ['Conta', '$A = {64 · 1,73|4} = 27,68$ cm².']
].map(r => [r[0], r[1].replace('${', '$ {')]), 'A área é $27,68$ cm².', 'decay'));

b.push(pratique('Hexágono', 'A área do hexágono regular de lado $2$ cm é: (use $√{3} = 1,7$)',
  ['$5,1$ cm²', '$10,2$ cm²', '$20,4$ cm²', '$24$ cm²'], 1, '${3 · 4 · 1,7|2} = 10,2$ cm². <strong>Alternativa B.</strong>'.replace('${', '$ {')));

b.push(pratique('Semiperímetro', 'Um polígono regular tem perímetro $60$ cm e apótema $8$ cm. Sua área é:',
  ['$120$ cm²', '$240$ cm²', '$480$ cm²', '$960$ cm²'], 1, '$p = 30$ e $A = 30 · 8 = 240$ cm². <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Triângulo equilátero', 'A área de um triângulo equilátero de lado $10$ cm é: (use $√{3} = 1,7$)',
  ['$21,25$ cm²', '$42,5$ cm²', '$85$ cm²', '$100$ cm²'], 1, '${100 · 1,7|4} = 42,5$ cm². <strong>Alternativa B.</strong>'.replace('${', '$ {'), '', 'decay'));
b.push(estiloEnem('Piso hexagonal', 'Um ladrilho hexagonal regular tem lado $10$ cm. Quantos ladrilhos, no mínimo, são necessários para cobrir $1$ m² ($10000$ cm²), sem considerar perdas? (use $√{3} = 1,73$)',
  ['$30$', '$39$', '$51$', '$77$', '$100$'], 1, 'Área do ladrilho: $3 · 100 · 1,73 ÷ 2 = 259,5$ cm². $10000 ÷ 259,5 ≈ 38,5$, então são necessários $39$. <strong>Alternativa B.</strong>', '', 'growth'));

b.push(armadilhas('Cuidados', 'Onde a área do polígono regular engana', [
  ['Usar o lado como altura', 'A altura dos $n$ triângulos é o <strong>apótema</strong>, não o lado.'],
  ['Perímetro no lugar do semiperímetro', 'A fórmula usa $p = P ÷ 2$; com $P$ inteiro, divida por $2$.'],
  ['Esquecer o $n$', '$A = n · ℓ · m ÷ 2$: não basta a área de um triângulo.'],
  ['Hexágono sem $√{3}$', 'A área do hexágono é $3ℓ^{2}√{3} ÷ 2$, não $6ℓ^{2}$.']
]));
b.push(quiz([
  { q: 'A área de um polígono regular é:', o: ['$P · m$', '$p · m$', '$p · ℓ$', '$ℓ · m$'], a: 1 },
  { q: 'Um hexágono regular se divide em triângulos:', o: ['isósceles quaisquer', 'equiláteros', 'retângulos', 'escalenos'], a: 1 },
  { q: 'A área de um quadrado em função do apótema $m$ é:', o: ['$m^{2}$', '$2m^{2}$', '$4m^{2}$', '$8m^{2}$'], a: 2 },
  { q: 'O semiperímetro de um polígono de perímetro $50$ é:', o: ['$25$', '$50$', '$100$', '$12,5$'], a: 0 }
]));
b.push(fechamento([
  ['Fórmula geral', '$A = p · m$ (semiperímetro vezes apótema).'],
  ['Hexágono', '$A = {3ℓ^{2}√{3}|2}$.'.replace('${', '$ {')],
  ['Triângulo equilátero', '$A = {ℓ^{2}√{3}|4}$.'.replace('${', '$ {')]
], 'Com a área de cada polígono regular, estudamos como ela muda quando o lado muda. Próxima aula: variação de perímetro e de área.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-elementos-e-relacoes.html', html: K.deck({
  title: 'Polígonos regulares: elementos e relações — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 64 · Polígonos regulares', slides: a,
  extra: WJS + BIND + G2.GJS + String.raw`
  bind(['p64-n', 'p64-l'], function(){ var n = +$('p64-n').value, l = +$('p64-l').value; $('p64-nv').textContent = n; if(!(l > 0)){ $('p64-s').innerHTML = ''; $('p64-a').textContent = '—'; return; }
    var r = l / (2 * Math.sin(Math.PI / n)), m = l / (2 * Math.tan(Math.PI / n)), pts = [], i; for(i = 0; i < n; i++){ var t = Math.PI / 2 + 2 * Math.PI * i / n; pts.push([r * Math.cos(t), r * Math.sin(t)]); }
    var svg = $('p64-s'), P = polS(svg, pts, []); var mid = [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2]; guiaS(svg, P, 0, 0, pts[0][0], pts[0][1]); guiaS(svg, P, 0, 0, mid[0], mid[1]);
    el('circle', {cx: P.X(0), cy: P.Y(0), r: 3.4, fill: 'var(--ink)'}, svg);
    $('p64-a').textContent = pt(360 / n, 2) + '° · ' + pt(180 - 360 / n, 2) + '°'; $('p64-b').textContent = pt(m, 2) + ' cm · ' + pt(r, 2) + ' cm';
    $('p64-h').textContent = 'm = ℓ ÷ (2 tg(180°/n)) e r = ℓ ÷ (2 sen(180°/n)). Com n = 6: r = ℓ (hexágono); com n = 4: r = ℓ√2/2.'; });`
}) });
pages.push({ out: BASE + 'aula-2-area-do-poligono-regular.html', html: K.deck({
  title: 'Área de um polígono regular — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 65 · Área de polígonos regulares', slides: b,
  extra: WJS + BIND + G2.GJS + String.raw`
  bind(['a65-n', 'a65-l'], function(){ var n = +$('a65-n').value, l = +$('a65-l').value; $('a65-nv').textContent = n; if(!(l > 0)){ $('a65-s').innerHTML = ''; $('a65-r').textContent = '—'; return; }
    var r = l / (2 * Math.sin(Math.PI / n)), m = l / (2 * Math.tan(Math.PI / n)), pts = [], i; for(i = 0; i < n; i++){ var t = Math.PI / 2 + 2 * Math.PI * i / n; pts.push([r * Math.cos(t), r * Math.sin(t)]); }
    var svg = $('a65-s'), P = polS(svg, pts, []); pts.forEach(function(p){ guiaS(svg, P, 0, 0, p[0], p[1]); });
    var p = n * l / 2, A = p * m; $('a65-r').textContent = pt(p, 2) + ' · ' + pt(m, 2) + ' = ' + pt(A, 2) + ' cm²';
    $('a65-h').textContent = 'Semiperímetro p = n · ℓ ÷ 2 = ' + pt(p, 2) + ' cm; apótema m = ' + pt(m, 2) + ' cm; A = p · m.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Polígonos regulares: elementos e área', accent: 'primary', icon: 'polygon',
  aulas: [['Aula 64', 'Polígonos regulares: elementos e relações métricas', 'aula-1-elementos-e-relacoes.html'], ['Aula 65', 'Área de um polígono regular', 'aula-2-area-do-poligono-regular.html']],
  pendente: true
}, pages };
