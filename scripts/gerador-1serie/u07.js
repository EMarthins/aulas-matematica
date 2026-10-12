// Unidade 7 — Gráfico de uma função: ler, escolher e analisar (aulas 18 a 20)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive, svg, ln, ci, tx, txu, dot } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'grafico-de-uma-funcao', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u07', BRAND = 'Gráfico de uma Função', CAP = 'Aulas 18 a 20';
const pages = [];

// ---------- figuras estáticas ----------
// series: [{ pts:[[x,y],...], abertos:[índices], cor }]
function graf({ w = 320, h = 190, xmin, xmax, ymin, ymax, px = 1, py = 1, series = [], rot = true, marcas = [], max = '' }) {
  const L = rot ? 36 : 10, R = 12, T = 12, B = rot ? 26 : 10;
  const X = x => +(L + (x - xmin) / (xmax - xmin) * (w - L - R)).toFixed(1), Y = y => +(h - B - (y - ymin) / (ymax - ymin) * (h - T - B)).toFixed(1);
  const x0 = xmin <= 0 && xmax >= 0 ? 0 : xmin, y0 = ymin <= 0 && ymax >= 0 ? 0 : ymin;
  let s = '';
  const nx = Math.floor((xmax - Math.ceil(xmin / px) * px) / px + 1e-9);
  for (let i = 0; i <= nx; i++) { const x = Math.ceil(xmin / px) * px + i * px; s += ln(X(x), Y(ymin), X(x), Y(ymax), 'var(--line)', 1); if (rot && Math.abs(x - x0) > 1e-9) s += txu(X(x), Y(y0) + 14, String(x).replace('-', '−'), 'var(--ink-faint)', 10); }
  const ny = Math.floor((ymax - Math.ceil(ymin / py) * py) / py + 1e-9);
  for (let i = 0; i <= ny; i++) { const y = Math.ceil(ymin / py) * py + i * py; s += ln(X(xmin), Y(y), X(xmax), Y(y), 'var(--line)', 1); if (rot && Math.abs(y - y0) > 1e-9) s += txu(X(x0) - 5, Y(y) + 4, String(y).replace('-', '−'), 'var(--ink-faint)', 10, 'end'); }
  s += ln(X(xmin), Y(y0), X(xmax), Y(y0), 'var(--ink-soft)', 1.6) + ln(X(x0), Y(ymin), X(x0), Y(ymax), 'var(--ink-soft)', 1.6);
  if (rot) s += tx(X(xmax) - 2, Y(y0) - 6, 'x', 'var(--ink-soft)', 13, 'end') + tx(X(x0) + 10, Y(ymax) + 10, 'y', 'var(--ink-soft)', 13, 'start');
  series.forEach(se => {
    const cor = se.cor || 'var(--primary)';
    s += `<polyline points="${se.pts.map(q => X(q[0]) + ',' + Y(q[1])).join(' ')}" fill="none" stroke="${cor}" stroke-width="${rot ? 3 : 2.6}" stroke-linejoin="round" stroke-linecap="round"${se.tracejado ? ' stroke-dasharray="6 5"' : ''}/>`;
    (se.bolas || []).forEach(([i, ab]) => { const q = se.pts[i]; s += ab ? ci(X(q[0]), Y(q[1]), 5, 'var(--surface)', cor, 2.4) : dot(X(q[0]), Y(q[1]), cor, 5); });
  });
  marcas.forEach(([x, y, t, dx = 8, dy = -8]) => { s += dot(X(x), Y(y), 'var(--decay)', 4.5) + txu(X(x) + dx, Y(y) + dy, t, 'var(--decay)', 12, dx < 0 ? 'end' : 'start'); });
  return svg(w, h, s, max || w + 'px');
}
const amostra = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return [x, f(x)]; });
const mg = (pts, ex = {}) => graf({ w: 130, h: 66, ...ex, series: [{ pts }] });   // gráfico compacto para alternativas
const mg2 = (pts, ex = {}) => mg(pts, { w: 104, h: 50, ...ex });
const MINI = { rot: false };

// ===================== AULA 1: texto → gráfico =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 18', h1: 'Do texto ao gráfico: <span style="color:var(--primary);">como uma história vira curva</span>',
  sub: 'Sobe, desce, fica parado, sobe mais rápido… Quem lê uma situação em palavras consegue desenhar (ou reconhecer) o gráfico certo.',
  badges: [['crescente'], ['decrescente', 'decay'], ['constante', 'growth']], color: 'primary'
}));
a.push(roteiroSlide('Palavras que viram traços.', [
  ['Vocabulário', 'crescente, decrescente, constante e mais rápido', 'bulb'],
  ['Valor inicial', 'onde o gráfico encontra o eixo y', 'target'],
  ['Fixo + variável', 'a reta que começa acima de zero', 'chart'],
  ['Quedas que desaceleram', 'meia-vida e curva decrescente', 'link'],
  ['Problemas', 'eliminar gráficos por pistas do texto', 'scale']
]));
a.push(objetivosSlide([
  'Traduzir expressões como “aumenta”, “permanece” e “diminui” em <strong>trechos do gráfico</strong>.',
  'Identificar o <strong>valor inicial</strong> e a <strong>taxa</strong> (inclinação) de uma situação.',
  'Reconhecer o gráfico de <strong>fixo + variável</strong> e o de <strong>meia-vida</strong>.',
  'Usar a técnica da <strong>eliminação</strong>: uma pista do texto descarta alternativas.'
], 'Dica', 'Leia o texto em pedaços. A cada pedaço, pergunte: o gráfico <strong>sobe, desce ou fica parado</strong>? E em seguida: <strong>começa onde</strong>?', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A história da piscina', `
          ${lede('Uma piscina vazia é <strong>enchida</strong> com uma mangueira; depois a torneira é <strong>fechada</strong> e o nível fica estável por um tempo; por fim, a piscina é <strong>esvaziada</strong>. Qual gráfico de <strong>nível da água × tempo</strong> conta essa história?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Escolha o gráfico:', [
  mg([[0, 6], [2, 6], [4, 0], [6, 0]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 0], [2, 2], [4, 4], [6, 6]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 0], [2, 4], [4, 4], [6, 0]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 4], [2, 0], [4, 0], [6, 4]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 })
], 2, 'Enche (sobe), torneira fechada (<strong>horizontal</strong>), esvazia (desce). Só o terceiro gráfico faz as três coisas, nessa ordem, começando do zero.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Cada verbo vira um trecho: <strong>aumenta</strong> = sobe · <strong>diminui</strong> = desce · <strong>permanece</strong> = horizontal.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · vocabulário', 'O que cada palavra faz com a curva', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Crescente</strong>: ao andar para a direita, o gráfico <strong>sobe</strong> ($x$ aumenta, $y$ aumenta).</li>
                <li><strong>Decrescente</strong>: ao andar para a direita, o gráfico <strong>desce</strong>.</li>
                <li><strong>Constante</strong>: o gráfico é um segmento <strong>horizontal</strong>.</li>
                <li><strong>Mais rápido</strong> = mais <strong>inclinado</strong>; mais devagar = menos inclinado.</li>
                <li><strong>Valor inicial</strong> é onde o gráfico toca o eixo $y$ (quando $x = 0$).</li>
              </ul>
            </div>
            ${graf({ xmin: 0, xmax: 12, ymin: 0, ymax: 8, px: 2, py: 2, series: [{ pts: [[0, 1], [3, 6], [6, 6], [10, 2], [12, 2]], bolas: [[0, false]] }], marcas: [[1.5, 3.5, 'sobe', 8, 14], [4.5, 6, 'constante', 0, -10], [8, 4, 'desce', 8, -4]], max: '360px' })}
          </div>`, { cls: '' }));

a.push(sl('Explore · fixo + variável', 'Uma conta com parte fixa e parte por minuto', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Uma companhia cobra um <strong>valor fixo</strong> $F$ e mais $p$ reais por minuto: $y = F + p · x$.</li>
                <li>O gráfico é uma <strong>reta</strong> que <strong>começa em $(0, F)$</strong> — acima da origem.</li>
                <li>A <strong>inclinação</strong> da reta é o preço por minuto $p$: quanto maior, mais íngreme.</li>
                <li>Sem parte fixa ($F = 0$), a reta sai da origem.</li>
              </ul>
            </div>
            ${W.box('Fixo + variável', W.row(W.nm('t1-f', 'Valor fixo F (reais)', 4, 'any'), W.nm('t1-p', 'Preço por min p', 0.2, 'any')) + W.nm('t1-x', 'Minutos usados', 15, 'any') + W.svg('t1-s', '0 0 360 210', '380px') + W.txt('t1-r', 'Valor cobrado: ') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Qual gráfico descreve a conta?', 'Uma companhia telefônica cobra <strong>4 reais fixos</strong> mais <strong>0,20 real por minuto</strong>. Como é o gráfico do valor $y$ em função dos minutos $x$?', [
  ['Descubra onde o gráfico começa', 'Com $x = 0$ já se paga o valor fixo: o gráfico parte do ponto $(0, 4)$.'],
  ['Ache a inclinação', 'A cada minuto, o valor sobe 0,20; a cada 5 minutos, sobe 1 real.'],
  ['Marque outros pontos', '$x = 5 → y = 5$ · $x = 10 → y = 6$ · $x = 20 → y = 8$.']
], 'Reta crescente, <strong>começando em (0, 4)</strong> e subindo 1 real a cada 5 minutos.'));
a.push(sl('Figura', 'O gráfico da conta de telefone', `
          <div class="grid2">
            ${graf({ xmin: 0, xmax: 20, ymin: 0, ymax: 10, px: 5, py: 2, series: [{ pts: [[0, 4], [20, 8]], bolas: [[0, false], [1, false]] }], marcas: [[0, 4, '(0, 4)', 10, -8], [10, 6, '(10, 6)', 8, 18], [20, 8, '(20, 8)', -8, -8]], max: '380px' })}
            <div>
              ${callout('Pistas para eliminar', 'Não pode ser uma curva (a taxa é constante); não pode sair da origem (há valor fixo); não pode ser decrescente (o preço só aumenta).', 'success')}
              ${callout('Conferência', 'Em 10 minutos: $4 + 0,20 · 10 = 6$ reais. O ponto $(10, 6)$ está na reta.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Teoria · quedas que desaceleram', 'Meia-vida: cai pela metade, mas nunca chega a zero', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um medicamento cuja concentração <strong>cai pela metade a cada intervalo fixo</strong> (a <em>meia-vida</em>) tem gráfico <strong>decrescente e curvo</strong>.</li>
                <li>A queda é <strong>rápida</strong> no início e <strong>cada vez mais lenta</strong>: 10 → 5 → 2,5 → 1,25…</li>
                <li>A curva se aproxima do eixo $x$ <strong>sem tocá-lo</strong>.</li>
                <li>Não é reta: a cada hora cai uma <strong>fração</strong>, não um valor fixo.</li>
              </ul>
            </div>
            ${W.box('Meia-vida', W.row(W.nm('m1-c', 'Concentração inicial', 10, 'any'), W.nm('m1-t', 'Meia-vida (h)', 1, 'any')) + W.nm('m1-x', 'Horas decorridas', 3, 'any') + W.svg('m1-s', '0 0 360 210', '380px') + W.txt('m1-r', 'Concentração: ') + W.hint('m1-h'))}
          </div>`, { cls: '' }));

a.push(pratique('Dose de remédio', 'Uma dose de 80 mg é ministrada e a concentração no sangue cai pela metade a cada 2 horas. Depois de 6 horas, a concentração é de:',
  ['0 mg', '10 mg', '20 mg', '26,7 mg', '40 mg'], 1,
  '6 horas são 3 meias-vidas: $80 → 40 → 20 → 10$. Concentração: <strong>10 mg</strong> (alternativa B). Não é $80 − 3 · 20$: a queda é por <strong>metade</strong>, não por valor fixo.', '', 'primary'));
a.push(pratique('O carro que freia', 'Um carro anda com velocidade constante e depois freia de modo uniforme até parar. Qual gráfico de velocidade × tempo representa a situação?', [
  mg([[0, 5], [3, 5], [6, 0]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 0], [3, 5], [6, 5]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 5], [3, 0], [6, 0]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 }),
  mg([[0, 0], [3, 0], [6, 5]], { ...MINI, xmin: 0, xmax: 6, ymin: 0, ymax: 7 })
], 0, '“Velocidade constante” = trecho horizontal e “freia de modo uniforme até parar” = reta descendo até o zero. Só o primeiro faz isso, nessa ordem.', '', 'growth'));
a.push(estiloEnem('Aluguel de bicicleta', 'Uma empresa aluga bicicletas cobrando 6 reais fixos mais 2 reais por hora de uso. Qual gráfico mostra o valor cobrado (eixo vertical) em função das horas (eixo horizontal)?', [
  mg2([[0, 0], [4, 8]], { xmin: 0, xmax: 4, ymin: 0, ymax: 16, px: 1, py: 4 }),
  mg2([[0, 6], [4, 14]], { xmin: 0, xmax: 4, ymin: 0, ymax: 16, px: 1, py: 4 }),
  mg2([[0, 6], [4, 6]], { xmin: 0, xmax: 4, ymin: 0, ymax: 16, px: 1, py: 4 }),
  mg2([[0, 2], [2, 14]], { xmin: 0, xmax: 4, ymin: 0, ymax: 16, px: 1, py: 4 }),
  mg2([[0, 14], [4, 6]], { xmin: 0, xmax: 4, ymin: 0, ymax: 16, px: 1, py: 4 })
], 1, 'O gráfico começa em $(0, 6)$ (valor fixo) e sobe 2 a cada hora: em 4 horas chega a $6 + 8 = 14$. O primeiro sai da origem; o terceiro é constante; o quarto sobe depressa demais; o quinto desce. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o texto engana na hora de desenhar', [
  ['Esquecer o valor fixo', 'Se há taxa fixa, o gráfico <strong>não passa pela origem</strong>: começa em $(0, F)$.'],
  ['Chamar de crescente o trecho horizontal', 'Horizontal é <strong>constante</strong>: $y$ não muda enquanto $x$ aumenta.'],
  ['Desenhar reta onde há meia-vida', 'Quedas por fração dão curva: rápidas no início, lentas depois.'],
  ['Trocar os eixos', 'Em “nível da água × tempo”, o tempo fica no eixo horizontal.']
]));
a.push(quiz([
  { q: 'Um trecho horizontal do gráfico indica que a função é:', o: ['crescente', 'decrescente', 'constante', 'negativa'], a: 2 },
  { q: 'Plano com taxa fixa de 10 reais mais 3 reais por GB. O gráfico começa em:', o: ['(0, 0)', '(0, 10)', '(10, 0)', '(3, 10)'], a: 1 },
  { q: 'A concentração de um remédio cai pela metade a cada hora. O gráfico é:', o: ['uma reta decrescente', 'uma curva decrescente que se aproxima do eixo x', 'uma reta horizontal', 'uma curva crescente'], a: 1 },
  { q: 'Mais rápido, em um gráfico de crescimento, significa:', o: ['mais inclinado', 'mais curvo para baixo', 'mais próximo do eixo x', 'horizontal'], a: 0 }
]));
a.push(fechamento([
  ['Vocabulário', 'Sobe = crescente · desce = decrescente · horizontal = constante.'],
  ['Valor inicial', 'Fixo + variável: reta que começa em (0, F).'],
  ['Eliminação', 'Cada pista do texto descarta alternativas: ponto de partida, tendência e rapidez.']
], 'Leia o texto em pedaços e traduza cada pedaço em um trecho do gráfico.'));

const PL = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function plano2(svg, xmin, xmax, ymin, ymax, W, H, px, py){
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var L = 38, R = 12, T = 12, B = 26;
    var sx = function(x){ return L + (x - xmin) / (xmax - xmin) * (W - L - R); }, sy = function(y){ return H - B - (y - ymin) / (ymax - ymin) * (H - T - B); };
    var x0 = (xmin <= 0 && xmax >= 0) ? 0 : xmin, y0 = (ymin <= 0 && ymax >= 0) ? 0 : ymin, i, v, t;
    var ax = Math.ceil(xmin / px - 1e-9), nx = Math.floor(xmax / px + 1e-9);
    for(i = ax; i <= nx; i++){ v = i * px; el('line', {x1: sx(v), y1: sy(ymin), x2: sx(v), y2: sy(ymax), stroke: 'var(--line)', 'stroke-width': 1}, svg); if(Math.abs(v - x0) > 1e-9){ t = el('text', {x: sx(v), y: sy(y0) + 14, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = pt(v, 2); } }
    var ay = Math.ceil(ymin / py - 1e-9), ny = Math.floor(ymax / py + 1e-9);
    for(i = ay; i <= ny; i++){ v = i * py; el('line', {x1: sx(xmin), y1: sy(v), x2: sx(xmax), y2: sy(v), stroke: 'var(--line)', 'stroke-width': 1}, svg); if(Math.abs(v - y0) > 1e-9){ t = el('text', {x: sx(x0) - 5, y: sy(v) + 4, 'text-anchor': 'end', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = pt(v, 2); } }
    el('line', {x1: sx(xmin), y1: sy(y0), x2: sx(xmax), y2: sy(y0), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    el('line', {x1: sx(x0), y1: sy(ymin), x2: sx(x0), y2: sy(ymax), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    return {sx: sx, sy: sy};
  }
  function linha(svg, P, pts, cor){ el('polyline', {points: pts.map(function(q){ return P.sx(q[0]).toFixed(1) + ',' + P.sy(q[1]).toFixed(1); }).join(' '), fill: 'none', stroke: cor || 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round'}, svg); }
  function bola(svg, P, x, y, aberta, cor){ el('circle', {cx: P.sx(x), cy: P.sy(y), r: 5, fill: aberta ? 'var(--surface)' : (cor || 'var(--decay)'), stroke: cor || 'var(--decay)', 'stroke-width': 2.4}, svg); }
`;

pages.push({ out: BASE + 'aula-1-do-texto-ao-grafico.html', html: K.deck({
  title: 'Do texto ao gráfico — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 18 · Do texto ao gráfico', slides: a,
  extra: WJS + BIND + PL + String.raw`
  bind(['t1-f', 't1-p', 't1-x'], function(){ var F = +$('t1-f').value, q = +$('t1-p').value, x = +$('t1-x').value;
    if(![F, q, x].every(isFinite) || F < 0 || q < 0 || x < 0){ $('t1-r').textContent = '—'; return; }
    var X = 20, y1 = F + q * X, ym = Math.max(10, Math.ceil(Math.max(y1, F + q * x) * 1.1 / 5) * 5), P = plano2($('t1-s'), 0, X, 0, ym, 360, 210, 5, ym <= 20 ? 5 : ym <= 50 ? 10 : 20);
    linha($('t1-s'), P, [[0, F], [X, y1]], 'var(--primary)'); bola($('t1-s'), P, 0, F, false, 'var(--primary)');
    if(x <= X) bola($('t1-s'), P, x, F + q * x, false, 'var(--decay)');
    $('t1-r').textContent = 'reais ' + pt(F + q * x, 2) + ' (fixo ' + pt(F) + ' + ' + pt(q) + ' × ' + pt(x) + ')';
    $('t1-h').textContent = 'O gráfico parte de (0; ' + pt(F) + '). Cada minuto a mais acrescenta ' + pt(q) + '.'; });
  bind(['m1-c', 'm1-t', 'm1-x'], function(){ var c = +$('m1-c').value, T = +$('m1-t').value, x = +$('m1-x').value;
    if(![c, T, x].every(isFinite) || c <= 0 || T <= 0 || x < 0){ $('m1-r').textContent = '—'; return; }
    var X = Math.max(6 * T, x), P = plano2($('m1-s'), 0, X, 0, c * 1.1, 360, 210, Math.max(T, X / 6), c / 2);
    var pts = []; for(var i = 0; i <= 60; i++){ var t = X * i / 60; pts.push([t, c / Math.pow(2, t / T)]); }
    linha($('m1-s'), P, pts, 'var(--primary)'); for(var k = 0; k * T <= X; k++) bola($('m1-s'), P, k * T, c / Math.pow(2, k), false, 'var(--growth)');
    bola($('m1-s'), P, x, c / Math.pow(2, x / T), false, 'var(--decay)');
    $('m1-r').textContent = pt(c / Math.pow(2, x / T), 3) + ' (' + pt(x / T, 2) + ' meias-vidas)';
    $('m1-h').textContent = 'A cada ' + pt(T) + ' h a concentração cai à metade: ' + pt(c) + ' → ' + pt(c / 2) + ' → ' + pt(c / 4) + '… e nunca chega a zero.'; });`
}) });

// ===================== AULA 2: domínio, imagem e crescimento no gráfico =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 19 e 20', h1: 'Lendo o gráfico: <span style="color:var(--growth);">domínio, imagem e crescimento</span>',
  sub: 'O gráfico projeta uma “sombra” em cada eixo. A sombra no eixo x é o domínio; a sombra no eixo y é a imagem. E os trechos que sobem e descem dizem onde a função cresce ou decresce.',
  badges: [['sombra em x = Dom'], ['sombra em y = Im', 'growth'], ['intervalos', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do desenho aos conjuntos.', [
  ['Sombras do gráfico', 'projeção nos eixos x e y', 'bulb'],
  ['Bolinhas', 'aberta (não inclui) e fechada (inclui)', 'target'],
  ['Notação', 'intervalos e conjuntos', 'scale'],
  ['Crescimento', 'intervalos em que sobe, desce ou fica constante', 'chart'],
  ['Pontos do gráfico', 'pertence ou não à curva', 'link']
]));
b.push(objetivosSlide([
  'Determinar <strong>domínio e imagem</strong> a partir do gráfico.',
  'Usar <strong>bolinha aberta e fechada</strong> e escrever com intervalos e com conjuntos.',
  'Indicar os <strong>intervalos de crescimento, decrescimento e constância</strong>.',
  'Verificar se um <strong>ponto pertence</strong> ao gráfico de uma lei.'
], 'Dica', 'Imagine uma lanterna: a sombra do gráfico no <strong>chão</strong> (eixo x) é o domínio; a sombra na <strong>parede</strong> (eixo y) é a imagem.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A sombra do gráfico', `
          <div class="grid2">
            ${graf({ xmin: -4, xmax: 6, ymin: 0, ymax: 6, px: 1, py: 1, series: [{ pts: [[-2, 3], [0, 1], [4, 5]], bolas: [[0, false], [2, false]] }], max: '360px' })}
            <div>
              ${lede('Veja o gráfico: ele começa em $x = −2$ e termina em $x = 4$. O ponto mais baixo está em $y = 1$ e o mais alto, em $y = 5$.')}
              ${mini('Domínio e imagem, nessa ordem:', ['[−2, 4] e [1, 5]', '[1, 5] e [−2, 4]', '[−2, 5] e [1, 4]', '[−2, 1] e [4, 5]'], 0, 'Domínio: sombra em $x$, de $−2$ a $4$. Imagem: sombra em $y$, de $1$ a $5$ (o gráfico nunca desce abaixo de 1 nem sobe acima de 5). Extremos fechados: colchetes.')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · domínio e imagem no gráfico', 'Sombras e bolinhas', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Domínio</strong> = todos os $x$ dos pontos do gráfico (sombra no <strong>eixo x</strong>).</li>
                <li><strong>Imagem</strong> = todos os $y$ dos pontos do gráfico (sombra no <strong>eixo y</strong>).</li>
                <li><strong>Bolinha fechada</strong> ● : o ponto <strong>pertence</strong> ao gráfico → colchete [ ].</li>
                <li><strong>Bolinha aberta</strong> ○ : o ponto <strong>não pertence</strong> → parêntese ( ) ou colchete invertido ] [.</li>
                <li>Duas escritas: $Dom(f) = (−4, 5]$ ou $\\{x ∈ ℝ | −4 < x ≤ 5\\}$.</li>
              </ul>
            </div>
            ${callout('Cuidado com o ponto aberto', 'Se o extremo é uma bolinha aberta mas o <strong>mesmo valor de y</strong> é atingido em outro ponto do gráfico, ele <strong>continua na imagem</strong>. Só sai quando for atingido unicamente pelo ponto aberto.', 'danger')}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · leitor de gráficos', 'Troque o gráfico e confira as leituras', `
          <div class="grid2">
            ${W.box('Gráfico de uma função', W.sel('e1-g', 'Gráfico', ['Gráfico A', 'Gráfico B', 'Gráfico C'], 0) + W.svg('e1-s', '0 0 360 220', '380px') + W.nm('e1-x', 'Teste um x', 0, 'any') + W.txt('e1-v', 'f(x): '))}
            <div>
              ${W.box('Leituras', W.txt('e1-d', 'Domínio: ') + W.txt('e1-i', 'Imagem: ') + W.txt('e1-c', 'Crescente em: ') + W.txt('e1-e', 'Decrescente em: ') + W.txt('e1-k', 'Constante em: ') + W.hint('e1-h'))}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Leitura completa de um gráfico', 'O gráfico liga os pontos $(−3, 2)$, $(−1, −2)$, $(1, −2)$ e $(3, 3)$ com segmentos, todos os extremos fechados. Faça as leituras.', [
  ['Domínio (sombra em x)', 'O gráfico vai de $x = −3$ a $x = 3$: $Dom = [−3, 3]$.'],
  ['Imagem (sombra em y)', 'O menor $y$ é $−2$ e o maior é $3$: $Im = [−2, 3]$.'],
  ['Crescimento', 'Desce de $x = −3$ a $x = −1$ · fica constante de $−1$ a $1$ · sobe de $1$ a $3$.']
], 'Decrescente em $[−3, −1]$, constante em $[−1, 1]$ e crescente em $[1, 3]$.', 'growth'));
b.push(sl('Figura', 'O gráfico do exemplo', `
          <div class="grid2">
            ${graf({ xmin: -4, xmax: 4, ymin: -3, ymax: 4, px: 1, py: 1, series: [{ pts: [[-3, 2], [-1, -2], [1, -2], [3, 3]], bolas: [[0, false], [3, false]] }], max: '380px' })}
            <div>
              ${callout('Intervalos de crescimento falam de x', 'Os intervalos são medidos no <strong>eixo x</strong>: “crescente em $[1, 3]$” significa que, para $x$ entre 1 e 3, a função sobe.', 'success')}
              ${callout('Constante', 'No trecho horizontal $y = −2$ nunca muda: o valor $−2$ é o <strong>mínimo</strong> e vale em todo o intervalo $[−1, 1]$.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · ponto do gráfico', 'O ponto está na curva y = x² − 2?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um ponto $(a, b)$ <strong>pertence ao gráfico</strong> de $f$ quando $f(a) = b$.</li>
                <li>Teste: troque $x$ por $a$ na lei e compare o resultado com $b$.</li>
                <li>Exemplo: $f(x) = x^{2} − 2$ e $A(3, 7)$: $f(3) = 9 − 2 = 7$ → <strong>pertence</strong>.</li>
                <li>$B(1, −3)$: $f(1) = 1 − 2 = −1 ≠ −3$ → <strong>não pertence</strong>.</li>
              </ul>
            </div>
            ${W.box('Teste de pertinência', W.row(W.nm('p1-a', 'a (x do ponto)', 3, 'any'), W.nm('p1-b', 'b (y do ponto)', 7, 'any')) + W.svg('p1-s', '0 0 360 220', '380px') + W.txt('p1-r', 'Resultado: ') + W.hint('p1-h'))}
          </div>`, { cls: 'growth' }));

b.push(pratique('Leia o gráfico', 'O gráfico abaixo liga, com segmentos, os pontos $(−4, 1)$, $(−1, 4)$, $(2, −1)$ e $(5, 2)$, todos fechados.' + graf({ xmin: -5, xmax: 6, ymin: -2, ymax: 5, px: 1, py: 1, series: [{ pts: [[-4, 1], [-1, 4], [2, -1], [5, 2]], bolas: [[0, false], [3, false]] }], max: '360px' }) + 'Domínio e imagem são, respectivamente:',
  ['[−4, 5] e [−1, 4]', '[−1, 4] e [−4, 5]', '[−4, 5] e [1, 2]', '[−4, 4] e [−1, 5]', '(−4, 5) e (−1, 4)'], 0,
  'Sombra em $x$: de $−4$ a $5$. Sombra em $y$: o mínimo é $−1$ (ponto $(2, −1)$) e o máximo é $4$ (ponto $(−1, 4)$). Extremos fechados. <strong>Alternativa A.</strong>', '', 'growth'));
b.push(pratique('Onde sobe?', 'No mesmo gráfico, ligado por $(−4, 1)$, $(−1, 4)$, $(2, −1)$ e $(5, 2)$, a função é <strong>crescente</strong> em:',
  ['[−4, −1] e [2, 5]', '[−1, 2]', '[−4, 2]', '[−4, 5]', '[−1, 5]'], 0,
  'Sobe de $(−4, 1)$ a $(−1, 4)$: crescente em $[−4, −1]$. Desce de $(−1, 4)$ a $(2, −1)$. Sobe de $(2, −1)$ a $(5, 2)$: crescente em $[2, 5]$. <strong>Alternativa A.</strong>', '', 'growth'));
const altura = [
  mg2(amostra(x => 1 + 0.18 * x, 0, 25), { xmin: 0, xmax: 25, ymin: 0, ymax: 8, rot: false }),
  mg2(amostra(x => 7 * (1 - Math.exp(-x / 7)), 0, 25), { xmin: 0, xmax: 25, ymin: 0, ymax: 8, rot: false }),
  mg2(amostra(x => 0.011 * x * x, 0, 25), { xmin: 0, xmax: 25, ymin: 0, ymax: 8, rot: false }),
  mg2(amostra(x => 7 * Math.sin(Math.PI * x / 25), 0, 25), { xmin: 0, xmax: 25, ymin: 0, ymax: 8, rot: false }),
  mg2([[0, 1], [17, 7], [25, 7]], { xmin: 0, xmax: 25, ymin: 0, ymax: 8, rot: false })
];
b.push(estiloEnem('Crescimento de uma árvore', 'Uma árvore cresce depressa nos primeiros anos e depois cada vez mais devagar, até a altura quase se estabilizar. Qual gráfico (altura × tempo) representa a situação?', altura, 1,
  'Altura sempre crescente (descarta o quarto), mais íngreme no começo e cada vez mais “deitada”: curva que sobe e se achata. O reto (A) tem crescimento constante, o terceiro acelera, e o quinto é reto até estabilizar de repente. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a leitura do gráfico escorrega', [
  ['Trocar as sombras', 'Domínio é a sombra no eixo <strong>x</strong>; imagem, no eixo <strong>y</strong>.'],
  ['Colchete no lugar do parêntese', 'Bolinha aberta exclui o extremo: use ( ) ou ] [; bolinha fechada: [ ].'],
  ['Medir o crescimento em y', 'Intervalos de crescimento e decrescimento são escritos em termos de <strong>x</strong>.'],
  ['Horizontal como crescente', 'Trecho horizontal é <strong>constante</strong>, nem crescente nem decrescente.']
]));
b.push(quiz([
  { q: 'A imagem de uma função, no gráfico, é a projeção no eixo:', o: ['y', 'x', 'x e y', 'nenhum'], a: 0 },
  { q: 'Uma bolinha aberta em $x = −4$ no início do gráfico indica que:', o: ['−4 não pertence ao domínio', '−4 pertence ao domínio', 'a função é decrescente', 'a função é constante'], a: 0 },
  { q: '$Dom(f) = (−2, 4]$ equivale a:', o: ['−2 < x ≤ 4', '−2 ≤ x < 4', '−2 < x < 4', '−2 ≤ x ≤ 4'], a: 0 },
  { q: 'Se o gráfico sobe quando $x$ aumenta, a função é:', o: ['crescente', 'decrescente', 'constante', 'nula'], a: 0 }
]));
b.push(fechamento([
  ['Domínio e imagem', 'Sombra no eixo x e sombra no eixo y.'],
  ['Bolinhas', 'Fechada: pertence ([ ]). Aberta: não pertence (( )).'],
  ['Crescimento', 'Sobe, desce ou fica horizontal — sempre em intervalos de x.']
], 'Antes de responder, desenhe as sombras e marque os extremos.'));

pages.push({ out: BASE + 'aula-2-dominio-imagem-e-crescimento-no-grafico.html', html: K.deck({
  title: 'Domínio, imagem e crescimento no gráfico — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 19 e 20 · Domínio, imagem e crescimento no gráfico', slides: b,
  extra: WJS + BIND + PL + String.raw`
  var PRE = [ {pts: [[-3, 2], [-1, -2], [1, -2], [3, 3]], ab: [false, false]}, {pts: [[-4, -1], [0, 3], [3, 2]], ab: [true, false]}, {pts: [[0, 0], [2, 4], [4, 4], [6, 1]], ab: [false, true]} ];
  function intv(a, b, abA, abB){ return (abA ? '(' : '[') + pt(a) + '; ' + pt(b) + (abB ? ')' : ']'); }
  function leitor(){ var g = PRE[+$('e1-g').value], P0 = g.pts, n = P0.length, ab = g.ab;
    var xs = P0.map(function(q){ return q[0]; }), ys = P0.map(function(q){ return q[1]; });
    var xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs), ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys);
    var P = plano2($('e1-s'), Math.floor(xmin) - 1, Math.ceil(xmax) + 1, Math.floor(ymin) - 1, Math.ceil(ymax) + 1, 360, 220, 1, 1);
    linha($('e1-s'), P, P0); P0.forEach(function(q, i){ bola($('e1-s'), P, q[0], q[1], (i === 0 && ab[0]) || (i === n - 1 && ab[1]), 'var(--primary)'); });
    function atinge(v){ return ys.some(function(y, i){ return y === v && !(i === 0 && ab[0]) && !(i === n - 1 && ab[1]); }); }
    $('e1-d').textContent = intv(xmin, xmax, ab[0], ab[1]); $('e1-i').textContent = intv(ymin, ymax, !atinge(ymin), !atinge(ymax));
    var grupos = {c: [], d: [], k: []}, cur = null;
    for(var i = 0; i < n - 1; i++){ var s = Math.sign(ys[i + 1] - ys[i]), tipo = s > 0 ? 'c' : s < 0 ? 'd' : 'k';
      if(cur && cur.t === tipo){ cur.b = xs[i + 1]; cur.fim = i + 1; } else { cur = {t: tipo, a: xs[i], b: xs[i + 1], ini: i, fim: i + 1}; grupos[tipo].push(cur); } }
    var f = function(l){ return l.length ? l.map(function(q){ return intv(q.a, q.b, q.ini === 0 && ab[0], q.fim === n - 1 && ab[1]); }).join(' e ') : 'nenhum'; };
    $('e1-c').textContent = f(grupos.c); $('e1-e').textContent = f(grupos.d); $('e1-k').textContent = f(grupos.k);
    $('e1-h').textContent = 'A bolinha aberta tira o extremo do conjunto; mas se o mesmo y aparece em outro ponto, ele continua na imagem.';
    var x = +$('e1-x').value, out = '—';
    if(isFinite(x) && x >= xmin && x <= xmax && !(x === xmin && ab[0]) && !(x === xmax && ab[1])){ for(var j = 0; j < n - 1; j++){ if(x >= xs[j] && x <= xs[j + 1]){ var t = (x - xs[j]) / (xs[j + 1] - xs[j]); out = pt(ys[j] + t * (ys[j + 1] - ys[j]), 3); break; } } }
    else if(isFinite(x)) out = 'x fora do domínio';
    $('e1-v').textContent = out; }
  $('e1-g').addEventListener('change', leitor); bind(['e1-x'], leitor); leitor();
  bind(['p1-a', 'p1-b'], function(){ var a = +$('p1-a').value, b = +$('p1-b').value;
    var P = plano2($('p1-s'), -4, 4, -3, 8, 360, 220, 1, 1); var pts = []; for(var i = 0; i <= 80; i++){ var x = -4 + 8 * i / 80; pts.push([x, x * x - 2]); } linha($('p1-s'), P, pts, 'var(--primary)');
    if(!isFinite(a) || !isFinite(b)){ $('p1-r').textContent = '—'; return; }
    var fa = a * a - 2, ok = Math.abs(fa - b) < 1e-9; bola($('p1-s'), P, Math.max(-4, Math.min(4, a)), Math.max(-3, Math.min(8, b)), !ok, ok ? 'var(--success)' : 'var(--danger)');
    $('p1-r').textContent = ok ? 'O ponto (' + pt(a) + '; ' + pt(b) + ') pertence ao gráfico.' : 'O ponto (' + pt(a) + '; ' + pt(b) + ') não pertence ao gráfico.';
    $('p1-h').textContent = 'f(' + pt(a) + ') = ' + pt(a) + '² − 2 = ' + pt(fa) + (ok ? ', igual a b.' : ', diferente de ' + pt(b) + '.'); });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Gráfico de uma função: <span>ler e escolher</span>',
  lede: 'Traduzir texto em gráfico, achar domínio e imagem pelas sombras, ler os intervalos de crescimento e verificar se um ponto está na curva.',
  badges: ['sombra em x = Dom', 'sombra em y = Im', 'bolinha aberta × fechada'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Do texto ao gráfico', 'Palavra → traço', 'link', 'primary', li(['Aumenta = sobe.', 'Diminui = desce.', 'Permanece = horizontal.', 'Mais rápido = mais inclinado.'])],
    ['Fixo + variável', 'Reta que não sai da origem', 'chart', 'growth', p('$y = F + p · x$ começa em $(0, F)$.') + call('Exemplo', '4 reais + 0,20 por minuto: (0, 4) e (10, 6).', 'success')],
    ['Meia-vida', 'Curva que desacelera', 'target', 'decay', p('A cada intervalo, metade: 80 → 40 → 20 → 10.') + call('Atenção', 'Nunca é reta e nunca toca o eixo.', 'danger')],
    ['Domínio e imagem', 'Sombras', 'scale', 'success', p('Dom: sombra em $x$. Im: sombra em $y$.') + call('Bolinhas', 'Fechada ●: inclui [ ]. Aberta ○: exclui ( ).', 'success')],
    ['Crescimento', 'Intervalos de x', 'up', 'primary', p('Sobe: crescente. Desce: decrescente. Horizontal: constante.') + call('Exemplo', 'Sobe de 1 a 3: crescente em [1, 3].', 'success')],
    ['Pertence ao gráfico?', 'Substitua e compare', 'check', 'growth', li(['Troque x pelo primeiro número.', 'Compare com o segundo.', 'Se for igual, pertence.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o valor fixo no ponto inicial.', 'Chamar o trecho horizontal de crescente.', 'Trocar domínio por imagem.', 'Usar colchete onde há bolinha aberta.', 'Escrever intervalos de crescimento em termos de y.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const tem = graf({ xmin: 0, xmax: 24, ymin: 0, ymax: 30, px: 4, py: 10, series: [{ pts: [[0, 14], [4, 10], [8, 12], [12, 22], [16, 24], [20, 16], [24, 12]], bolas: [[0, false], [6, false]] }], max: '380px' });
const dom1 = graf({ xmin: -4, xmax: 6, ymin: -3, ymax: 5, px: 1, py: 1, series: [{ pts: [[-3, 1], [0, 4], [2, 2], [5, -2]], bolas: [[0, false], [3, false]] }], max: '360px' });
const dom2 = graf({ xmin: -3, xmax: 5, ymin: 0, ymax: 5, px: 1, py: 1, series: [{ pts: [[-2, 1], [1, 4], [4, 2]], bolas: [[0, true], [2, false]] }], max: '360px' });
const op = pts => mg(pts, { xmin: 0, xmax: 4, ymin: 0, ymax: 200, px: 1, py: 50 });
const tel = graf({ xmin: 0, xmax: 12, ymin: 0, ymax: 8, px: 2, py: 2, series: [{ pts: [[0, 4], [10, 6]], bolas: [[0, false], [1, false]] }], marcas: [[0, 4, '(0, 4)', 10, -8], [10, 6, '(10, 6)', -8, -10]], max: '360px' });
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Gráficos de funções <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: leitura de temperatura, domínio e imagem, ponto aberto, texto → gráfico e taxa.',
  final: 'Sombras nos eixos, bolinhas e a pista de cada trecho resolvem a leitura do gráfico.',
  questions: [
    { badge: 'Estilo ENEM · leitura', text: 'O gráfico mostra a temperatura (em °C) de uma cidade ao longo de 24 horas, em função da hora do dia.' + tem, cmd: 'A temperatura foi crescente no intervalo de:', opts: ['0 h às 4 h', '4 h às 16 h', '8 h às 20 h', '16 h às 24 h', '12 h às 24 h'], a: 1,
      sol: '<p>A temperatura desce de 0 h a 4 h (de 14 °C a 10 °C), sobe de 4 h a 16 h (10 → 12 → 22 → 24) e depois desce até 24 h. Crescente em $[4, 16]$.</p>' },
    { badge: 'Estilo ENEM · domínio e imagem', text: 'O gráfico liga, por segmentos, os pontos $(−3, 1)$, $(0, 4)$, $(2, 2)$ e $(5, −2)$, todos fechados.' + dom1, cmd: 'O domínio e a imagem da função são, respectivamente:', opts: ['[−3, 5] e [−2, 4]', '[−2, 4] e [−3, 5]', '[−3, 4] e [−2, 5]', '[1, 4] e [−3, 5]', '(−3, 5) e (−2, 4)'], a: 0,
      sol: '<p>Sombra em $x$: $[−3, 5]$. Sombra em $y$: menor valor $−2$ (em $x = 5$) e maior $4$ (em $x = 0$): $[−2, 4]$.</p>' },
    { badge: 'Estilo ENEM · ponto aberto', text: 'O gráfico liga os pontos $(−2, 1)$ (bolinha aberta), $(1, 4)$ e $(4, 2)$ (bolinha fechada).' + dom2, cmd: 'O conjunto imagem da função é:', opts: ['[1, 4]', '(1, 4]', '(1, 4)', '[2, 4]', '(−2, 4]'], a: 1,
      sol: '<p>O maior valor é $4$ (fechado, em $x = 1$). O menor valor aparece no ponto aberto $(−2, 1)$ e <strong>não</strong> é atingido em nenhum outro ponto; logo $1$ fica de fora: $Im = (1, 4]$.</p>' },
    { badge: 'Estilo ENEM · texto → gráfico', text: 'Uma academia cobra 50 reais de matrícula e 30 reais por mês de mensalidade. O valor total pago (eixo vertical) é função do número de meses (eixo horizontal).', cmd: 'O gráfico que representa a situação é:', opts: [op([[0, 0], [4, 120]]), op([[0, 50], [4, 170]]), op([[0, 50], [4, 50]]), op([[0, 30], [3, 180]]), op([[0, 170], [4, 50]])], a: 1,
      sol: '<p>O gráfico parte de $(0, 50)$ (matrícula) e sobe 30 por mês: em 4 meses, $50 + 120 = 170$. O primeiro sai da origem; o terceiro é constante; o quarto parte de 30 e sobe mais depressa; o quinto desce.</p>' },
    { badge: 'Estilo ENEM · taxa', text: 'O gráfico mostra o valor da conta de um plano (em reais) em função dos minutos usados, ligando $(0, 4)$ a $(10, 6)$ por uma reta.' + tel, cmd: 'Mantido o padrão, o valor para 25 minutos é:', opts: ['5 reais', '9 reais', '10 reais', '12 reais', '14 reais'], a: 1,
      sol: '<p>De 0 a 10 min o valor sobe 2 reais: $0,20$ real por minuto. Lei: $y = 4 + 0,2x$. Para $x = 25$: $4 + 5 = 9$ reais.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive de <span style="color:var(--decay);">gráficos</span>',
  subtitle: 'Cada resolução tem um erro de leitura. Encontre a linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Sombra em x é o domínio, sombra em y é a imagem; bolinha aberta exclui; horizontal é constante; fixo começa fora da origem.',
    casos: [
      { titulo: 'Sombras trocadas', enunciado: 'Um gráfico vai de $x = −2$ até $x = 4$, e seus valores de $y$ ficam entre $1$ e $5$. Determine domínio e imagem.', linhas: ['O domínio é a sombra do gráfico no eixo x.', 'O gráfico vai de x = −2 a x = 4, então Dom = [−2, 4].', 'A imagem também é uma sombra; vamos projetar no eixo x: Im = [−2, 4].', 'Conclusão: Dom = Im = [−2, 4].'], erro: 2, porque: 'A imagem é a sombra no <strong>eixo y</strong>, entre $1$ e $5$: $Im = [1, 5]$.' },
      { titulo: 'Bolinha aberta', enunciado: 'Um gráfico começa em $x = −1$ (bolinha aberta) e termina em $x = 6$ (bolinha fechada). Escreva o domínio.', linhas: ['A bolinha aberta em x = −1 indica que −1 não pertence ao domínio.', 'A bolinha fechada em x = 6 indica que 6 pertence.', 'Portanto Dom = [−1, 6].', 'O trecho entre −1 e 6 completa o intervalo.'], erro: 2, porque: 'Como −1 não pertence, o intervalo é aberto à esquerda: $Dom = (−1, 6]$.' },
      { titulo: 'Subida ou plateau?', enunciado: 'O gráfico sobe de $(−2, 0)$ a $(1, 5)$, fica horizontal até $(3, 5)$ e desce até $(6, 1)$. Em que intervalo a função é crescente?', linhas: ['Crescente: o gráfico sobe quando x aumenta.', 'Isso acontece de x = −2 até x = 1.', 'De x = 1 até x = 3 o gráfico é horizontal, e dizemos que também é crescente.', 'Logo, é crescente em [−2, 3].'], erro: 2, porque: 'Trecho horizontal é <strong>constante</strong>, não crescente. A função é crescente só em $[−2, 1]$.' },
      { titulo: 'Fixo mais variável', enunciado: 'Uma locadora cobra 6 reais fixos e 2 reais por hora. Onde o gráfico do valor × horas começa?', linhas: ['O valor fixo é pago logo no início, antes de qualquer hora.', 'Então o gráfico começa no eixo y, em (0, 6).', 'A cada hora o valor cresce 2: a reta é inclinada para cima.', 'Logo, o gráfico começa na origem (0, 0).'], erro: 3, porque: 'O gráfico começa em $(0, 6)$, não na origem: o valor fixo desloca o início para cima.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Gráficos de funções: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de leitura e cálculo. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: reta com valor fixo, meia-vida, domínios em intervalos e taxa.',
  problems: [
    { tag: 'Fixo + variável', q: 'Uma conta tem <strong>4 reais</strong> fixos mais <strong>0,20 real</strong> por minuto. Quanto custam <strong>35 minutos</strong>? (em reais)', a: 11, ph: 'reais', hint: '4 + 0,20 × 35.', sol: '<p>$0,2 · 35 = 7$; $4 + 7 = 11$ reais.</p>' },
    { tag: 'Meia-vida', q: 'Uma dose de <strong>120 mg</strong> cai pela metade a cada <strong>3 horas</strong>. Qual a concentração (mg) depois de <strong>9 horas</strong>?', a: 15, ph: 'mg', hint: '9 horas = 3 meias-vidas.', sol: '<p>$120 → 60 → 30 → 15$ mg.</p>' },
    { tag: 'Domínio', q: 'O domínio de um gráfico é o intervalo <strong>[−3, 7]</strong> (fechado). Quantos números <strong>inteiros</strong> pertencem a ele?', a: 11, ph: 'inteiros', hint: 'Conte de −3 até 7, inclusive.', sol: '<p>$−3, −2, ..., 7$: são $7 − (−3) + 1 = 11$.</p>' },
    { tag: 'Bolinha aberta', q: 'O domínio é <strong>(−2, 5]</strong>. Quantos números <strong>inteiros</strong> pertencem a ele?', a: 7, ph: 'inteiros', hint: 'O −2 não entra; o 5 entra.', sol: '<p>$−1, 0, 1, 2, 3, 4, 5$: são <strong>7</strong>.</p>' },
    { tag: 'Taxa', q: 'Uma reta passa pelos pontos <strong>(0, 3)</strong> e <strong>(4, 11)</strong>. Qual o valor de y em <strong>x = 10</strong>?', a: 23, ph: 'y', hint: 'A inclinação é (11 − 3) ÷ 4.', sol: '<p>Inclinação $= 8 ÷ 4 = 2$. Lei: $y = 3 + 2x$. Para $x = 10$: $y = 23$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Gráfico de uma Função', accent: 'growth', icon: 'curve-log',
  aulas: [['Aula 18', 'Do texto ao gráfico', 'aula-1-do-texto-ao-grafico.html'], ['Aulas 19–20', 'Domínio, imagem e crescimento no gráfico', 'aula-2-dominio-imagem-e-crescimento-no-grafico.html']],
  enem: 'Gráficos de funções no estilo ENEM', cria: 'Detetive de gráficos', pratica: 'Gráficos de funções: trilha de desafios'
}, pages };
