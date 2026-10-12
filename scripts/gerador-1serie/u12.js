// Unidade 12 — Números reais na reta numérica (aula 33)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar, svg, ln, tx, txu, dot } = K;
const { PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'numeros-reais-na-reta', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u12', BRAND = 'Números Reais na Reta Numérica', CAP = 'Aula 33';
const pages = [];

// reta numérica estática: marcas de 'passo' em passo e pontos nomeados [valor, rótulo]
function reta({ min, max, passo = 1, pontos = [], w = 360, rot = true, max_w = '420px' }) {
  const L = 22, R = 22, y = 52, X = v => +(L + (v - min) / (max - min) * (w - L - R)).toFixed(1);
  let s = ln(L - 6, y, w - R + 6, y, 'var(--ink-soft)', 2);
  const n = Math.round((max - min) / passo);
  for (let i = 0; i <= n; i++) { const v = min + i * passo; s += ln(X(v), y - 6, X(v), y + 6, 'var(--ink-soft)', 1.6); if (rot) s += txu(X(v), y + 22, String(+v.toFixed(4)).replace('.', ',').replace('-', '−'), 'var(--ink-faint)', 10); }
  pontos.forEach(([v, t]) => { s += dot(X(v), y, 'var(--decay)', 5) + txu(X(v), y - 14, t, 'var(--decay)', 12); });
  return svg(w, 76, s, max_w);
}

// ===================== DECK =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 33', h1: 'Números reais na reta numérica: <span style="color:var(--primary);">cada ponto, um número</span>',
  sub: 'Frações, decimais e até números como √2 e π têm lugar na reta. Entre dois pontos quaisquer, sempre cabe outro: a reta não tem “buracos”.',
  badges: [['ℝ = ℚ ∪ 𝕀'], ['reta orientada', 'growth'], ['aproximar irracionais', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Classificar e localizar.', [
  ['A hierarquia dos números', 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ e os irracionais', 'bulb'],
  ['Reta numérica', 'cada ponto, um único número real', 'link'],
  ['Frações e decimais', 'dividir o espaço em partes iguais', 'scale'],
  ['Irracionais', 'estimar entre dois inteiros e refinar', 'chart'],
  ['Marcações e distâncias', 'passos iguais, intervalos e produto', 'target']
]));
a.push(objetivosSlide([
  'Classificar números em <strong>naturais, inteiros, racionais e irracionais</strong>.',
  'Localizar na reta <strong>frações, decimais e aproximações</strong> de irracionais.',
  'Usar <strong>marcações igualmente espaçadas</strong> para achar valores.',
  'Calcular <strong>distâncias</strong> e comparar números pela posição na reta.'
], 'Dica', 'Para localizar um número que você não conhece bem, <strong>comece estimando</strong>: entre quais dois inteiros ele está? Depois refine com decimais.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Quantas réguas cabem na sala?', `
          ${lede('Se medirmos a largura da sala com réguas de 30 cm, dificilmente o resultado será um número <strong>exato</strong> de réguas: sobra um pedaço. Entre dois inteiros de uma régua há <strong>décimos</strong>; entre dois décimos, centésimos… sempre dá para <em>dar um zoom</em> e achar mais números.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantos números reais existem entre 1 e 2?', ['nenhum', 'apenas 1,5', 'só 9 (de 1,1 a 1,9)', 'infinitos'], 3, 'Entre dois números reais diferentes há <strong>infinitos</strong> outros: 1,1; 1,01; 1,001; … Por isso a reta é “contínua”.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A cada ponto da reta corresponde <strong>um único</strong> número real, e a cada número real, <strong>um único</strong> ponto.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · a hierarquia dos números', 'De ℕ até ℝ', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Naturais</strong> ℕ: 0, 1, 2, 3… · <strong>Inteiros</strong> ℤ: …, −2, −1, 0, 1, 2…</li>
                <li><strong>Racionais</strong> ℚ: números que se escrevem como fração $a/b$ ($b ≠ 0$): decimais exatos (0,25) e <strong>dízimas periódicas</strong> (0,333…).</li>
                <li><strong>Irracionais</strong>: decimais infinitos <strong>não periódicos</strong>: π e as raízes não exatas, como $√2$, $√3$, $√5$.</li>
                <li><strong>Reais</strong> ℝ = racionais ∪ irracionais.</li>
                <li>Cuidado: $√9 = 3$ e $√16 = 4$ são <strong>naturais</strong> (raízes exatas).</li>
              </ul>
            </div>
            ${tbl(['Número', 'Classificação'], [['−2', 'inteiro, racional, real'], ['3/4', 'racional, real'], ['0,333…', 'racional (dízima), real'], ['$√9$', 'natural (=3), real'], ['$√2$', 'irracional, real'], ['π', 'irracional, real']])}
          </div>`, { cls: '' }));

a.push(sl('Explore · posição na reta', 'Escolha um número e veja onde ele fica', `
          <div class="grid2">
            ${W.box('Reta numérica', W.sel('n1-q', 'Número', ['−1,5', '1/3', '√2', '√16', 'π', '−√3', '7/4', '0,333…', '√5', '−2'], 2) + W.svg('n1-s', '0 0 360 90', '380px') + W.txt('n1-c', 'Classificação: ') + W.txt('n1-d', 'Valor aproximado: ') + W.txt('n1-i', 'Entre os inteiros: ') + W.hint('n1-h'))}
            <div>
              ${callout('Aproximação', 'Irracionais não têm representação decimal exata: usamos <strong>aproximações</strong> ($√2 ≈ 1,41$; $π ≈ 3,14$). O ponto exato existe na reta, mas só o localizamos com aproximação.', 'success')}
              ${callout('Ordem', 'Se um número fica à <strong>direita</strong> de outro, ele é <strong>maior</strong>. Assim $−√3 ≈ −1,73 < −1,5$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Teoria · localizando irracionais', 'Estimar entre inteiros e refinar', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Para $√n$: ache $k$ com $k^2 < n < (k+1)^2$. Então $k < √n < k + 1$.</li>
                <li>Refine com décimos: teste $k,1^2$; $k,2^2$… até “prender” $√n$ entre dois décimos.</li>
                <li>Frações e decimais: <strong>divida o espaço</strong> entre inteiros em partes iguais.</li>
                <li>Marcações iguais: o passo é $(b − a) ÷ (\\text{número de intervalos})$.</li>
              </ul>
            </div>
            ${W.box('Marcações igualmente espaçadas', W.row(W.nm('e1-a', 'Início', 10, 'any'), W.nm('e1-b', 'Fim', 12, 'any')) + W.row(W.nm('e1-n', 'Nº de intervalos', 8, 'any'), W.nm('e1-k', 'Ponto nº (k)', 5, 'any')) + W.svg('e1-s', '0 0 360 90', '380px') + W.txt('e1-p', 'Passo: ') + W.txt('e1-v', 'Valor do k-ésimo ponto: ') + W.hint('e1-h'))}
          </div>`.replace('\\text{número de intervalos}', '"número de intervalos"'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Onde fica √5?', 'Localize $√5$ na reta numérica.', [
  ['Entre quais inteiros?', '$2^2 = 4 < 5 < 9 = 3^2$, então $2 < √5 < 3$.'],
  ['Refine com décimos', '$2,2^2 = 4,84 < 5$ e $2,3^2 = 5,29 > 5$: $2,2 < √5 < 2,3$.'],
  ['Marque na reta', 'Pouco depois de 2,2, entre 2,2 e 2,3: $√5 ≈ 2,24$.']
], '$√5 ≈ 2,24$, entre 2 e 3 (mais perto de 2).'));
a.push(sl('Figura', 'A reta com √5 aproximado', `
          ${reta({ min: 1, max: 4, passo: 0.5, pontos: [[2.236, '√5']], max_w: '460px' })}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Mais precisão, mais zoom', 'Quanto mais casas decimais usamos, mais o ponto fica “preso” entre números cada vez mais próximos.', 'success')}
            ${callout('Cuidado', 'O ponto $√5$ existe na reta mesmo sem número decimal exato: é a aproximação que usamos para <strong>desenhar</strong>.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Marcações a cada 0,25', 'Em uma reta, a distância entre marcações consecutivas é constante e igual a $0,25$. Se o ponto $M$ está em $1,5$, quais são os pontos imediatamente à esquerda e à direita?', [
  ['Passo', 'Cada marcação difere da vizinha em $0,25$.'],
  ['Esquerda', '$1,5 − 0,25 = 1,25$.'],
  ['Direita', '$1,5 + 0,25 = 1,75$.']
], 'Vizinhos de $M$: $1,25$ (esquerda) e $1,75$ (direita).'));
a.push(exemplo('Exemplo resolvido', 'Onde está o produto?', 'Dados $0 < x < y < 1$, onde fica o produto $x · y$ na reta?', [
  ['Multiplicar por um número entre 0 e 1', 'Reduz o valor: $x · y < x$ (pois $y < 1$).'],
  ['Produto de positivos', '$x · y > 0$.'],
  ['Conclusão', '$0 < x · y < x$.']
], 'O produto fica entre $0$ e $x$. Teste: $x = 0,5$ e $y = 0,8$ dão $0,4$.'));

a.push(pratique('Quem é irracional?', 'Entre os números abaixo, o <strong>irracional</strong> é:',
  ['$√16$', '0,25', '$−7/3$', '$√7$', '0,121212…'], 3,
  '$√16 = 4$ (natural). 0,25 e $−7/3$ são racionais. 0,121212… é dízima periódica (racional). $√7$ não é raiz exata: <strong>irracional</strong>. <strong>Alternativa D.</strong>'));
a.push(pratique('Entre quais inteiros?', 'O número $−√3$ está entre:',
  ['−1 e 0', '−2 e −1', '−3 e −2', '1 e 2', '0 e 1'], 1,
  '$1 < √3 < 2$ ($1^2 = 1 < 3 < 4 = 2^2$), logo $−2 < −√3 < −1$. <strong>Alternativa B.</strong> ($−√3 ≈ −1,73$.)', '', 'growth'));
a.push(estiloEnem('Pontos igualmente espaçados', 'Na reta numérica abaixo, os pontos $0$, $A$, $B$, $C$, $D$ e $1$ são consecutivos e igualmente espaçados.' + reta({ min: 0, max: 1, passo: 0.2, pontos: [[0.2, 'A'], [0.4, 'B'], [0.6, 'C'], [0.8, 'D']], rot: false, max_w: '420px' }) + 'O ponto que representa o número $0,6$ é:',
  ['A', 'B', 'C', 'D', '1'], 2,
  'De $0$ a $1$ há $5$ intervalos iguais: passo $1 ÷ 5 = 0,2$. $A = 0,2$; $B = 0,4$; $C = 0,6$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a reta engana', [
  ['Raiz exata é irracional?', '$√9 = 3$, $√16 = 4$: naturais. Só raízes <strong>não exatas</strong> são irracionais.'],
  ['Dízima é irracional?', '0,333… é <strong>racional</strong> ($= 1/3$): repete um período.'],
  ['Passo com o número errado de divisões', 'Entre $a$ e $b$ com $n$ <strong>intervalos</strong>, o passo é $(b − a) ÷ n$ — e não ÷ (número de pontos).'],
  ['Comparar negativos', 'Mais à direita é maior: $−1,5 > −1,73$.']
]));
a.push(quiz([
  { q: 'Qual número é irracional?', o: ['√25', '0,5', '√2', '−4'], a: 2 },
  { q: '$√20$ está entre:', o: ['3 e 4', '4 e 5', '5 e 6', '19 e 21'], a: 1 },
  { q: 'Entre 0 e 3 há 6 intervalos iguais. O passo é:', o: ['0,3', '0,5', '0,6', '2'], a: 1 },
  { q: 'A distância entre −2,5 e 3,5 na reta numérica é:', o: ['1', '5', '6', '7'], a: 2 }
]));
a.push(fechamento([
  ['Classificação', 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; irracionais: decimais infinitos não periódicos.'],
  ['Localização', 'Estime entre dois inteiros e refine com décimos.'],
  ['Marcações', 'Passo = (b − a) ÷ nº de intervalos; distância = diferença das posições.']
], 'Reta numérica: cada ponto é um número, cada número é um ponto.'));

pages.push({ out: BASE + 'aula-numeros-reais-na-reta.html', html: K.deck({
  title: 'Números reais na reta numérica — Matemática 1ª série', brand: BRAND, key: KEY + 'a', meta: 'Aula 33 · Números reais na reta numérica', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 4 : d}); }
  var NUM = [ {v: -1.5, c: 'racional (decimal exato), real'}, {v: 1 / 3, c: 'racional (dízima periódica), real'}, {v: Math.SQRT2, c: 'irracional, real'}, {v: 4, c: 'natural, inteiro, racional, real (raiz exata)'}, {v: Math.PI, c: 'irracional, real'}, {v: -Math.sqrt(3), c: 'irracional, real'}, {v: 1.75, c: 'racional, real'}, {v: 1 / 3, c: 'racional (dízima periódica), real'}, {v: Math.sqrt(5), c: 'irracional, real'}, {v: -2, c: 'inteiro, racional, real'} ];
  function linhaReal(svg, min, max, pts){ svg.innerHTML = ''; var W = 360, L = 22, R = 22, y = 48, X = function(v){ return L + (v - min) / (max - min) * (W - L - R); };
    el('line', {x1: L - 6, y1: y, x2: W - R + 6, y2: y, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    for(var v = Math.ceil(min); v <= max; v++){ el('line', {x1: X(v), y1: y - 6, x2: X(v), y2: y + 6, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg); var t = el('text', {x: X(v), y: y + 22, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--ink-faint)'}, svg); t.textContent = String(v).replace('-', '−'); }
    pts.forEach(function(q){ el('circle', {cx: X(q[0]), cy: y, r: 5.5, fill: q[2] || 'var(--decay)'}, svg); var t2 = el('text', {x: X(q[0]), y: y - 12, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 700, fill: q[2] || 'var(--decay)'}, svg); t2.textContent = q[1]; }); }
  function posicao(){ var k = +$('n1-q').value, n = NUM[k], nome = $('n1-q').options[k].text;
    linhaReal($('n1-s'), -4, 5, [[n.v, nome]]); $('n1-c').textContent = n.c; $('n1-d').textContent = n.v === Math.round(n.v) ? pt(n.v) : '≈ ' + pt(n.v, 4);
    var fl = Math.floor(n.v); $('n1-i').textContent = n.v === fl ? 'é o próprio inteiro ' + fl : 'entre ' + fl + ' e ' + (fl + 1); $('n1-h').textContent = 'À direita = maior. O número ' + nome + ' fica na posição ' + pt(n.v, 3) + '.'; }
  $('n1-q').addEventListener('change', posicao); posicao();
  bind(['e1-a', 'e1-b', 'e1-n', 'e1-k'], function(){ var a = +$('e1-a').value, b = +$('e1-b').value, n = Math.round(+$('e1-n').value), k = +$('e1-k').value;
    if(![a, b, n, k].every(isFinite) || n < 1 || n > 20 || a === b){ $('e1-p').textContent = '—'; $('e1-v').textContent = ''; $('e1-h').textContent = 'Use de 1 a 20 intervalos e início diferente do fim.'; return; }
    var s = (b - a) / n, svg = $('e1-s'); svg.innerHTML = ''; var W = 360, L = 22, R = 22, y = 48, X = function(v){ return L + (v - Math.min(a, b)) / Math.abs(b - a) * (W - L - R); };
    el('line', {x1: L - 6, y1: y, x2: W - R + 6, y2: y, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    for(var i = 0; i <= n; i++){ var v = a + i * s; el('line', {x1: X(v), y1: y - 6, x2: X(v), y2: y + 6, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg); if(n <= 10 || i % 2 === 0){ var t = el('text', {x: X(v), y: y + 22, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = pt(v, 3); } }
    var kk = Math.max(0, Math.min(n, Math.round(k))), val = a + kk * s; el('circle', {cx: X(val), cy: y, r: 6, fill: 'var(--decay)'}, svg);
    $('e1-p').textContent = '(' + pt(b) + ' − ' + pt(a) + ') ÷ ' + n + ' = ' + pt(s, 4); $('e1-v').textContent = pt(a) + ' + ' + kk + ' · ' + pt(s, 4) + ' = ' + pt(val, 4);
    $('e1-h').textContent = n + ' intervalos têm ' + (n + 1) + ' marcações (contando as pontas). O ponto nº 0 é o início.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Números reais na reta: <span>classificar e localizar</span>',
  lede: 'Naturais, inteiros, racionais e irracionais; como marcar frações, decimais e raízes não exatas na reta; passos iguais, distâncias e comparações.',
  badges: ['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', '√ não exata: irracional', 'passo = (b − a) ÷ n'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Classificação', 'Quem é quem', 'chart', 'primary', li(['Racional: fração, decimal exato ou dízima.', 'Irracional: decimal infinito não periódico.', '√9 = 3 é natural.'])],
    ['Localizar frações', 'Divida em partes iguais', 'scale', 'growth', p('Entre inteiros, parta o espaço em partes iguais.') + call('Exemplo', '7/4 = 1,75: três quartos depois de 1.', 'success')],
    ['Localizar irracionais', 'Estime e refine', 'target', 'decay', p('$k^2 < n < (k+1)^2$ ⇒ $k < √n < k + 1$') + call('Exemplo', '√5 ≈ 2,24.', 'success')],
    ['Marcações iguais', 'Passo constante', 'link', 'success', p('passo = (fim − início) ÷ nº de intervalos') + call('Exemplo', '0 a 1 em 5 partes: 0,2.', 'success')],
    ['Distância', 'Diferença das posições', 'up', 'primary', p('$|x − y|$ = maior − menor') + call('Exemplo', 'Entre −2,5 e 3,5: 6.', 'success')],
    ['Produto em (0, 1)', 'Fica menor', 'check', 'growth', p('Se $0 < x < y < 1$, então $0 < x · y < x$.')]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Chamar raiz exata de irracional.', 'Chamar dízima periódica de irracional.', 'Dividir por pontos em vez de intervalos.', 'Achar que −1,73 é maior que −1,5.', 'Esquecer de refinar a estimativa.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Números reais na reta <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: classificação, estimativa, marcações, produto e distância.',
  final: 'Classifique com cuidado, estime entre inteiros e use o passo da reta.',
  questions: [
    { badge: 'Estilo ENEM · classificação', text: 'Considere os números $√4$, $√5$, $π$, $0,5$ e $−3/7$.', cmd: 'Quantos deles são irracionais?', opts: ['0', '1', '2', '3', '4'], a: 2,
      sol: '<p>$√4 = 2$ (natural), $0,5$ e $−3/7$ são racionais. Irracionais: $√5$ e $π$ — são <strong>2</strong>.</p>' },
    { badge: 'Estilo ENEM · estimativa', text: 'Deseja-se localizar $√10$ na reta numérica.', cmd: '$√10$ está entre os inteiros consecutivos:', opts: ['2 e 3', '3 e 4', '4 e 5', '9 e 10', '10 e 11'], a: 1,
      sol: '<p>$3^2 = 9 < 10 < 16 = 4^2$, então $3 < √10 < 4$ ($√10 ≈ 3,16$).</p>' },
    { badge: 'Estilo ENEM · marcações', text: 'Na reta, os pontos $0$, $A$, $B$, $C$, $D$ e $1$ são consecutivos e igualmente espaçados.' + reta({ min: 0, max: 1, passo: 0.2, pontos: [[0.2, 'A'], [0.4, 'B'], [0.6, 'C'], [0.8, 'D']], rot: false, max_w: '400px' }), cmd: 'O ponto correspondente ao número $0,8$ é:', opts: ['A', 'B', 'C', 'D', '1'], a: 3,
      sol: '<p>Há 5 intervalos iguais entre 0 e 1: passo $0,2$. $A = 0,2$; $B = 0,4$; $C = 0,6$; $D = 0,8$.</p>' },
    { badge: 'Estilo ENEM · quociente', text: 'Sejam $x$ e $y$ números reais tais que $0 < x < y < 1$.', cmd: 'O quociente $x ÷ y$ está:', opts: ['à esquerda de 0', 'entre 0 e 1, sempre', 'à direita de 1', 'coincide com y', 'coincide com x'], a: 1,
      sol: '<p>$x$ e $y$ são positivos, então $x ÷ y > 0$. Como $x < y$, o quociente é menor que 1. Logo $0 < x ÷ y < 1$.</p>' },
    { badge: 'Estilo ENEM · distância', text: 'Na reta numérica, marcam-se os pontos de abscissas $−2,5$ e $3,5$.', cmd: 'A distância entre eles é:', opts: ['1', '5', '6', '7', '8,75'], a: 2,
      sol: '<p>Distância = maior − menor $= 3,5 − (−2,5) = 3,5 + 2,5 = 6$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique os <span style="color:var(--growth);">números</span>',
  subtitle: 'Natural, inteiro, racional ou irracional? Atenção às raízes exatas e às dízimas.',
  tpl: cClassificar({
    cats: ['Natural', 'Inteiro (não natural)', 'Racional (não inteiro)', 'Irracional'],
    intro: 'Cada cartão traz um número. Escolha a <strong>categoria mais específica</strong> e clique em <strong>Conferir</strong>.',
    final: 'Raiz exata vira número comum; dízima periódica é racional; só decimais infinitos não periódicos são irracionais.',
    itens: [
      ['$7$', 0, 'Natural.'],
      ['$−3$', 1, 'Inteiro negativo: não é natural.'],
      ['$3/4$', 2, 'Fração: racional, não inteiro.'],
      ['$√2$', 3, 'Raiz não exata: irracional.'],
      ['$0,25$', 2, 'Decimal exato = $1/4$: racional.'],
      ['$π$', 3, 'Decimal infinito não periódico: irracional.'],
      ['$√16$', 0, '$√16 = 4$: natural.'],
      ['$−√9$', 1, '$−√9 = −3$: inteiro não natural.'],
      ['$0,333…$', 2, 'Dízima periódica ($= 1/3$): racional.'],
      ['$√7$', 3, 'Raiz não exata: irracional.'],
      ['$0$', 0, 'No ensino brasileiro, o zero é natural.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Números reais na reta: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de contagem, estimativa e distância. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: contagem de inteiros, estimativa, marcações, distância e classificação.',
  problems: [
    { tag: 'Contagem', q: 'Quantos números <strong>inteiros</strong> estão entre $−√10$ e $√10$ (inclusive)?', a: 7, ph: 'inteiros', hint: '√10 ≈ 3,16.', sol: '<p>De $−3$ a $3$: $−3, −2, −1, 0, 1, 2, 3$ — <strong>7</strong> inteiros.</p>' },
    { tag: 'Estimativa', q: '$√50$ está entre dois inteiros consecutivos. Qual é o <strong>menor</strong> deles?', a: 7, ph: 'inteiro', hint: '7² = 49 e 8² = 64.', sol: '<p>$49 < 50 < 64$, logo $7 < √50 < 8$. O menor é <strong>7</strong>.</p>' },
    { tag: 'Marcações', q: 'As marcações estão a cada $0,25$ e o ponto $M$ está em $1,5$. Qual o número do ponto imediatamente à direita?', a: 1.75, ph: 'valor', hint: 'Some o passo.', sol: '<p>$1,5 + 0,25 = 1,75$.</p>' },
    { tag: 'Distância', q: 'Qual a distância entre os pontos $−2,5$ e $4$ na reta?', a: 6.5, ph: 'distância', hint: 'Maior − menor.', sol: '<p>$4 − (−2,5) = 6,5$.</p>' },
    { tag: 'Racionais', q: 'Quantos dos números $2/5$, $√9$, $π$, $0,222…$ e $√8$ são <strong>racionais</strong>?', a: 3, ph: 'quantos', hint: '√9 = 3; 0,222… é dízima.', sol: '<p>Racionais: $2/5$, $√9 = 3$ e $0,222…$. Irracionais: $π$ e $√8$. Total: <strong>3</strong>.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Números Reais na Reta Numérica', accent: 'primary', icon: 'numbers',
  aulas: [['Aula 33', 'Números reais na reta numérica', 'aula-numeros-reais-na-reta.html']],
  enem: 'Números reais na reta no estilo ENEM', cria: 'Classifique os números', pratica: 'Números reais na reta: trilha de desafios'
}, pages };
