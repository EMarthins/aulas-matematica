// Unidade 18 — Crescimento, sinal e gráficos de situações da função quadrática (aulas 51 a 54)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { graf, amostra, mg2, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'crescimento-e-sinal-da-quadratica', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u18', BRAND = 'Crescimento e Sinal da Quadrática', CAP = 'Aulas 51 a 54';
const pages = [];

const QJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function leiQ(a, b, c){ var s = a === 1 ? 'x²' : a === -1 ? '−x²' : pt(a) + 'x²';
    if(b > 0) s += ' + ' + (b === 1 ? '' : pt(b)) + 'x'; else if(b < 0) s += ' − ' + (b === -1 ? '' : pt(-b)) + 'x';
    if(c > 0) s += ' + ' + pt(c); else if(c < 0) s += ' − ' + pt(-c); return 'y = ' + s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : 100; }
  function parabola(svg, f, xmin, xmax, ymin, ymax){ var P = plano2(svg, xmin, xmax, ymin, ymax, 360, 230, passo(xmax - xmin), passo(ymax - ymin)), pts = []; for(var i = 0; i <= 120; i++){ var x = xmin + (xmax - xmin) * i / 120; pts.push([x, f(x)]); } linha(svg, P, pts); return P; }
  function janela(a, b, c){ var d = b * b - 4 * a * c, xv = -b / (2 * a), yv = a * xv * xv + b * xv + c, f = function(x){ return a * x * x + b * x + c; }, w = 4; if(d > 0) w = Math.max(w, Math.sqrt(d) / Math.abs(2 * a) + 2);
    var xmin = xv - w, xmax = xv + w, ys = [f(xmin), f(xmax), yv, 0], ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys), pd = (ymax - ymin) * 0.12 + 1; return {d: d, xv: xv, yv: yv, f: f, xmin: xmin, xmax: xmax, ymin: ymin - pd, ymax: ymax + pd}; }
`;

// ===================== AULA 1: crescimento e decrescimento =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 51 e 52', h1: 'Crescimento e decrescimento da parábola: <span style="color:var(--primary);">o vértice divide a curva</span>',
  sub: 'Um drone sobe até um ponto máximo e depois desce. Uma fábrica tem um custo que cai e depois sobe. Em ambos, o vértice é o divisor de águas entre crescer e decrescer.',
  badges: [['antes do vértice'], ['depois do vértice', 'growth'], ['intervalos em x', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Quando a parábola sobe e quando desce.', [
  ['Dois comportamentos', 'a curva muda de direção no vértice', 'bulb'],
  ['Efeito da concavidade', 'a > 0 e a < 0', 'target'],
  ['Intervalos', 'escritos com xᵥ', 'chart'],
  ['Em contexto', 'drone, custo e lucro', 'link'],
  ['Problemas', 'identificar o intervalo certo', 'scale']
]));
a.push(objetivosSlide([
  'Dizer onde a função quadrática é <strong>crescente</strong> e <strong>decrescente</strong>.',
  'Usar o <strong>vértice</strong> $x_v = −b ÷ 2a$ como ponto de mudança.',
  'Escrever os <strong>intervalos</strong> corretos conforme o sinal de $a$.',
  'Interpretar crescimento e decrescimento em <strong>situações reais</strong>.'
], 'Dica', 'Trace a parábola mentalmente: com $a > 0$ ela <strong>desce até o vértice e sobe depois</strong>; com $a < 0$, <strong>sobe até o vértice e desce depois</strong>.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Subindo, parando, descendo', `
          ${lede('Um drone de entrega descreve a trajetória $h(t) = −t^{2} + 10t + 11$ (altura em metros, tempo em segundos). Nos primeiros instantes ele <strong>sobe</strong>; em certo momento atinge o ponto mais alto e passa a <strong>descer</strong>. Esse instante é o $t_v = −b ÷ 2a = 5$ s.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Em $t = 2$ s, o drone está:', ['subindo', 'descendo', 'parado', 'no solo'], 0, 'Como $t = 2 < t_v = 5$ e $a < 0$, a função ainda é <strong>crescente</strong>: o drone está subindo.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em $y = ax^{2} + bx + c$, o vértice $x_v = −b ÷ 2a$ separa o trecho em que a função <strong>cresce</strong> do trecho em que <strong>decresce</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · intervalos', 'Crescimento e decrescimento', `
          <div class="grid2">
            <div>
              ${tbl(['Concavidade', 'Crescente em', 'Decrescente em'], [['a > 0 (∪)', '[xᵥ, +∞[', ']−∞, xᵥ]'], ['a < 0 (∩)', ']−∞, xᵥ]', '[xᵥ, +∞[']])}
              <ul class="plain" style="font-size:.93rem;line-height:1.7;margin-top:10px;">
                <li>O vértice é o ponto de <strong>troca</strong> de comportamento: ele pertence aos dois intervalos.</li>
                <li>Os intervalos são medidos no eixo <strong>$x$</strong>.</li>
                <li>Em contextos, o domínio limita os intervalos (por exemplo, $t ≥ 0$).</li>
              </ul>
            </div>
            ${W.box('Intervalos de monotonia', W.row(W.nm('c1-a', 'a', -1, 'any'), W.nm('c1-b', 'b', 10, 'any'), W.nm('c1-c', 'c', 11, 'any')) + W.row(W.nm('c1-x1', 'x₁', 2, 'any'), W.nm('c1-x2', 'x₂', 8, 'any')) + W.svg('c1-s', '0 0 360 230', '380px') + W.txt('c1-v', 'xᵥ = ') + W.txt('c1-c2', 'Crescente em: ') + W.txt('c1-d', 'Decrescente em: ') + W.txt('c1-t', 'Teste: ') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O drone sobe e desce', 'A altura de um drone é $h(t) = −t^{2} + 10t + 11$, para $0 ≤ t ≤ 11$ (segundos). Em que intervalos ele sobe e desce, e qual a altura máxima?', [
  ['Vértice', '$t_v = −{10|2 · (−1)} = 5$ e $h(5) = −25 + 50 + 11 = 36$.'],
  ['Sinal de a', '$a = −1 < 0$: sobe até o vértice e desce depois.'],
  ['Intervalos no domínio', 'Sobe em $[0, 5]$ e desce em $[5, 11]$ (toca o solo em $t = 11$: $h(11) = 0$).']
], 'O drone sobe de $0$ a $5$ s, desce de $5$ a $11$ s e atinge no máximo <strong>36 m</strong>.'));
a.push(exemplo('Exemplo resolvido', 'O custo que cai e sobe', 'O custo de produção é $C(x) = x^{2} − 10x + 40$ (milhares de reais), com $x$ milhares de unidades. Para que valores de $x$ o custo diminui e qual o menor custo?', [
  ['Vértice', '$x_v = {10|2} = 5$ e $C(5) = 25 − 50 + 40 = 15$.'],
  ['Sinal de a', '$a = 1 > 0$: o custo diminui até $x = 5$ e depois aumenta.'],
  ['Interprete', 'Menor custo: <strong>15 mil reais</strong>, com 5 mil unidades.']
], 'O custo cai em $[0, 5]$, sobe depois de $5$; o mínimo é $15$ (mil reais).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Intervalo de decrescimento', 'Em que intervalo $f(x) = x^{2} − 4x + 3$ é decrescente?', [
  ['Vértice', '$x_v = {4|2} = 2$.'],
  ['Concavidade', '$a = 1 > 0$: ∪.'],
  ['Antes do vértice', 'A parábola desce até $x = 2$ e sobe depois.']
], 'Decrescente em $]−∞, 2]$; crescente em $[2, +∞[$.', 'growth'));

a.push(pratique('Intervalo decrescente', 'A função $f(x) = x^{2} − 6x + 5$ é decrescente em:',
  ['[3, +∞[', ']−∞, 3]', '[1, 5]', ']−∞, 5]', '[−3, +∞['], 1,
  '$x_v = 3$ e $a > 0$: decresce até o vértice: $]−∞, 3]$. <strong>Alternativa B.</strong>'));
a.push(pratique('Altura máxima do drone', 'Para $h(t) = −t^{2} + 10t + 11$, com $0 ≤ t ≤ 11$, o drone atinge a altura máxima no instante:',
  ['2,5 s', '5 s', '10 s', '11 s', '36 s'], 1,
  '$t_v = −10 ÷ (−2) = 5$ s. (A altura máxima é $36$ m; o número 36 não é um instante.) <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Custo mínimo', 'O custo de uma empresa é $C(x) = x^{2} − 10x + 40$ (mil reais), com $x$ mil unidades. O menor custo possível, em mil reais, é:',
  ['5', '10', '15', '25', '40'], 2,
  '$x_v = 5$; $C(5) = 25 − 50 + 40 = 15$. Como $a > 0$, é mínimo. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o crescimento engana', [
  ['Intervalos em y', 'Crescimento e decrescimento são intervalos de <strong>$x$</strong>, não de $y$.'],
  ['Trocar os lados', 'Com $a > 0$ decresce <strong>antes</strong> do vértice; com $a < 0$ cresce antes.'],
  ['Esquecer o domínio do contexto', 'Em problemas de tempo, os intervalos começam em $t = 0$.'],
  ['Não incluir o vértice', 'O vértice é ponto de troca: entra nos dois intervalos (fechados).']
]));
a.push(quiz([
  { q: 'Se $a < 0$, a função é crescente em:', o: [']−∞, xᵥ]', '[xᵥ, +∞[', 'ℝ', 'em nenhum intervalo'], a: 0 },
  { q: 'O vértice de $y = x^{2} − 4x + 3$ tem abscissa:', o: ['−2', '2', '4', '3'], a: 1 },
  { q: '$f(x) = x^{2} − 4x + 3$ é crescente em:', o: ['[2, +∞[', ']−∞, 2]', '[3, +∞[', ']−∞, 3]'], a: 0 },
  { q: 'No drone $h(t) = −t^{2} + 10t + 11$, depois de 5 s ele:', o: ['sobe', 'desce', 'fica parado', 'some'], a: 1 }
]));
a.push(fechamento([
  ['Divisor de águas', 'O vértice xᵥ = −b/2a separa subida e descida.'],
  ['Concavidade', 'a > 0: decresce, depois cresce. a < 0: cresce, depois decresce.'],
  ['Contexto', 'Respeite o domínio (tempo ≥ 0, quantidade ≥ 0).']
], 'Ache xᵥ, olhe o sinal de a e escreva os intervalos em x.'));

pages.push({ out: BASE + 'aula-1-crescimento-e-decrescimento.html', html: K.deck({
  title: 'Crescimento e decrescimento da função quadrática — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 51 e 52 · Crescimento e decrescimento', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['c1-a', 'c1-b', 'c1-c', 'c1-x1', 'c1-x2'], function(){ var a = +$('c1-a').value, b = +$('c1-b').value, c = +$('c1-c').value, x1 = +$('c1-x1').value, x2 = +$('c1-x2').value; if(![a, b, c].every(isFinite) || a === 0){ $('c1-v').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('c1-c2').textContent = ''; $('c1-d').textContent = ''; $('c1-t').textContent = ''; return; }
    var J = janela(a, b, c), xv = J.xv, xs = pt(xv, 3), P = parabola($('c1-s'), J.f, J.xmin, J.xmax, J.ymin, J.ymax); bola($('c1-s'), P, xv, J.yv, false, 'var(--decay)');
    $('c1-v').textContent = xs; $('c1-c2').textContent = a > 0 ? '[' + xs + '; +∞[' : ']−∞; ' + xs + ']'; $('c1-d').textContent = a > 0 ? ']−∞; ' + xs + ']' : '[' + xs + '; +∞[';
    if(isFinite(x1) && isFinite(x2) && x1 !== x2){ var lo = Math.min(x1, x2), hi = Math.max(x1, x2), fl = J.f(lo), fh = J.f(hi), mesmo = (lo >= xv) || (hi <= xv); $('c1-t').textContent = 'f(' + pt(lo) + ') = ' + pt(fl) + ' e f(' + pt(hi) + ') = ' + pt(fh) + (mesmo ? (fh > fl ? ' → cresceu' : ' → decresceu') : ' → o intervalo contém o vértice: subiu e desceu (ou o contrário)'); }
    $('c1-h').textContent = 'Ponto laranja: o vértice, onde a curva troca de sentido.'; });`
}) });

// ===================== AULA 2: sinal e gráficos de situações =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 53 e 54', h1: 'Sinal da função quadrática e gráficos de situações: <span style="color:var(--growth);">onde está positiva, onde está negativa</span>',
  sub: 'Em que horários o drone está acima do solo? Para que preços a receita é positiva? O estudo do sinal responde, e o gráfico certo de uma situação descrita em texto resume tudo.',
  badges: [['f > 0, f = 0, f < 0'], ['Δ e a decidem', 'growth'], ['texto → gráfico', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Sinal, depois gráfico.', [
  ['Sinal com Δ > 0', 'dentro e fora das raízes', 'bulb'],
  ['Δ = 0 e Δ < 0', 'sinal constante (exceto na raiz)', 'target'],
  ['Inequações', 'resolver f(x) > 0 e f(x) < 0', 'chart'],
  ['Texto → gráfico', 'estratégia em 4 passos', 'link'],
  ['Problemas', 'ingressos e receita', 'scale']
]));
b.push(objetivosSlide([
  'Estudar o <strong>sinal</strong> da função quadrática nos três casos de $Δ$.',
  'Resolver <strong>inequações</strong> do 2º grau pelo estudo do sinal.',
  'Escolher o <strong>gráfico</strong> que representa uma situação descrita em texto.',
  'Reconhecer quando o gráfico deve ser <strong>pontilhado</strong> (valores inteiros).'
], 'Dica', 'Faça sempre o esquema: <strong>raízes</strong>, <strong>concavidade</strong> e <strong>onde está o eixo $x$</strong>. A parábola “∪” é positiva fora das raízes; “∩”, entre elas.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quando o drone está no ar?', `
          ${lede('Um drone decola, sobe, atinge o ponto mais alto e desce até pousar. Em quais instantes ele está <strong>acima do solo</strong> ($h > 0$)? Quando está <strong>no solo</strong> ($h = 0$)? Estudar o sinal de $h$ é responder a essas perguntas.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Se $h(t) = −t^{2} + 10t$ (com raízes $0$ e $10$), $h(t) > 0$ para:', ['t < 0 ou t > 10', '0 < t < 10', 't > 10', 't < 5'], 1, 'Parábola “∩” (a < 0): é positiva <strong>entre</strong> as raízes. O drone está no ar de $t = 0$ a $t = 10$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$a > 0$: positiva <strong>fora</strong> das raízes e negativa entre elas. $a < 0$: o contrário.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estudo do sinal', 'Os seis casos', `
          <div class="grid2">
            <div>
              ${tbl(['', 'Δ > 0', 'Δ = 0', 'Δ < 0'], [['a > 0 (∪)', '+ fora, − entre as raízes', '+ (exceto na raiz: 0)', 'sempre +'], ['a < 0 (∩)', '− fora, + entre as raízes', '− (exceto na raiz: 0)', 'sempre −']])}
              <ul class="plain" style="font-size:.93rem;line-height:1.7;margin-top:10px;">
                <li>Para resolver $f(x) > 0$ ou $f(x) < 0$: ache raízes, observe $a$ e leia os intervalos.</li>
                <li>Desigualdade <strong>estrita</strong> ($>$, $<$) exclui as raízes; “≥” e “≤” as incluem.</li>
              </ul>
            </div>
            ${W.box('Estudo do sinal', W.row(W.nm('s1-a', 'a', 1, 'any'), W.nm('s1-b', 'b', -5, 'any'), W.nm('s1-c', 'c', 6, 'any')) + W.svg('s1-s', '0 0 360 230', '380px') + W.txt('s1-p', 'f(x) > 0 para: ') + W.txt('s1-n', 'f(x) < 0 para: ') + W.txt('s1-z', 'f(x) = 0 para: ') + W.hint('s1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Sinal de x² − 5x + 6', 'Estude o sinal de $f(x) = x^{2} − 5x + 6$.', [
  ['Raízes', '$Δ = 25 − 24 = 1$; $x = {5 ± 1|2}$ ⇒ $x = 2$ ou $x = 3$.'],
  ['Concavidade', '$a = 1 > 0$: ∪.'],
  ['Sinal', '$f > 0$ se $x < 2$ ou $x > 3$ · $f = 0$ se $x = 2$ ou $x = 3$ · $f < 0$ se $2 < x < 3$.']
], 'Teste: $f(0) = 6 > 0$ (fora) e $f(2,5) = −0,25 < 0$ (entre). Com $−x^{2} + 5x − 6$ os sinais se <strong>invertem</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Quando não há raízes', 'Mostre que $f(x) = x^{2} + x + 1$ é positiva para todo $x$.', [
  ['Discriminante', '$Δ = 1 − 4 = −3 < 0$: sem raízes reais.'],
  ['Concavidade', '$a = 1 > 0$: a parábola abre para cima e não toca o eixo $x$.'],
  ['Conclusão', 'Fica toda acima do eixo $x$.']
], '$f(x) > 0$ para todo $x$ real (o mínimo, $y_v = 3/4$, é positivo).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Receita e preço do ingresso', 'Um teatro cobra preço inteiro $p$ (reais). Com ingresso a 20 reais vão 200 pessoas e, a cada 1 real de redução, vão 40 pessoas a mais. A receita é $R(p) = p · (200 + 40(20 − p)) = −40p^{2} + 1\\ 000p$. Como é o gráfico?', [
  ['Concavidade e zeros', '$a = −40 < 0$: ∩. Zeros: $p = 0$ e $p = 25$.'],
  ['Domínio', 'O preço é <strong>inteiro</strong>: o gráfico é formado por <strong>pontos isolados</strong> (pontilhado).'],
  ['Vértice', '$p_v = 12,5$ — mas como $p$ é inteiro, o máximo ocorre em $12$ e $13$: $R = 6\\ 240$.']
], 'Gráfico: pontos sobre uma parábola “∩” que passa pela origem e por $(25, 0)$.', 'growth'));

b.push(pratique('Inequação', 'Os valores de $x$ para os quais $x^{2} − 4 < 0$ são:',
  ['x < −2 ou x > 2', '−2 < x < 2', 'x < 2', 'x > −2', 'x = ±2'], 1,
  'Raízes $−2$ e $2$; parábola “∪”: negativa <strong>entre</strong> as raízes: $−2 < x < 2$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Positiva entre as raízes', 'Para $f(x) = −x^{2} + 4x − 3$, vale $f(x) ≥ 0$ quando:',
  ['x ≤ 1 ou x ≥ 3', '1 ≤ x ≤ 3', 'x ≥ 1', 'x ≤ 3', 'todo x real'], 1,
  'Raízes $1$ e $3$; $a < 0$: positiva entre elas. Com “≥”, as raízes entram: $1 ≤ x ≤ 3$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Qual é o gráfico?', 'A receita de um teatro, em função do preço <strong>inteiro</strong> $p$ do ingresso, é $R(p) = −40p^{2} + 1\\ 000p$. Qual gráfico (pontilhado, preço no eixo horizontal) representa a situação?', [
  graf({ w: 104, h: 50, rot: false, xmin: 0, xmax: 26, ymin: -2, ymax: 8, series: [{ pts: [[0, 0], [25, 7]], bolas: [[0, false], [1, false]], tracejado: true }] }),
  graf({ w: 104, h: 50, rot: false, xmin: 0, xmax: 26, ymin: -2, ymax: 8, series: [{ pts: [[0, 7], [25, 0]], bolas: [[0, false], [1, false]], tracejado: true }] }),
  graf({ w: 104, h: 50, rot: false, xmin: 0, xmax: 26, ymin: -2, ymax: 8, series: [{ pts: amostra(x => ((x - 12.5) ** 2) * (7 / 156.25), 0, 25, 13), bolas: [], tracejado: true }] }),
  graf({ w: 104, h: 50, rot: false, xmin: 0, xmax: 26, ymin: -2, ymax: 8, series: [{ pts: amostra(x => 7 - (x - 12.5) ** 2 * (7 / 156.25), 0, 25, 13), bolas: [[0, false], [2, false], [4, false], [6, false], [8, false], [10, false], [12, false]], tracejado: true }] }),
  graf({ w: 104, h: 50, rot: false, xmin: 0, xmax: 26, ymin: -2, ymax: 8, series: [{ pts: amostra(x => 8 - (x - 12.5) ** 2 * (4 / 156.25), 0, 25, 13), bolas: [[0, false], [2, false], [4, false], [6, false], [8, false], [10, false], [12, false]], tracejado: true }] })
], 3,
  'Receita zero em $p = 0$ e em $p = 25$, com máximo entre eles ($a < 0$): parábola “∩” passando pela origem e por $(25, 0)$ — só o <strong>quarto</strong> gráfico. O primeiro e o segundo são retas; o terceiro é “∪”; o quinto não passa pela origem (receita positiva com preço zero). <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o sinal e os gráficos enganam', [
  ['Trocar “entre” e “fora”', '∪: negativa entre as raízes. ∩: positiva entre as raízes.'],
  ['Raiz nas estritas', 'Em $>0$ ou $<0$ as raízes <strong>não</strong> entram; em $≥$ e $≤$ entram.'],
  ['Não olhar para o domínio', 'Preço, quantidade e pessoas são inteiros: o gráfico é de pontos.'],
  ['Esquecer o Δ < 0', 'Sem raízes, o sinal é o de $a$ em todo o domínio.']
]));
b.push(quiz([
  { q: 'Se $a > 0$ e $Δ > 0$, a função é negativa:', o: ['fora das raízes', 'entre as raízes', 'em todo ℝ', 'em nenhum ponto'], a: 1 },
  { q: '$f(x) = x^{2} + x + 1$ é:', o: ['sempre negativa', 'sempre positiva', 'positiva só entre raízes', 'nula em x = 1'], a: 1 },
  { q: '$−x^{2} + 4x − 3 > 0$ quando:', o: ['x < 1 ou x > 3', '1 < x < 3', 'x > 3', 'x < 1'], a: 1 },
  { q: 'Em $y = −x^{2} + 4x − 4$, com $Δ = 0$, tem-se $y ≤ 0$:', o: ['para todo x', 'só entre as raízes', 'só em x = 2', 'em nenhum x'], a: 0 }
]));
b.push(fechamento([
  ['Sinal', 'Raízes + concavidade: ∪ positiva fora, ∩ positiva entre.'],
  ['Δ ≤ 0', 'Δ < 0: sinal de a em todo x; Δ = 0: sinal de a, exceto na raiz.'],
  ['Texto → gráfico', 'Concavidade, zeros, valor inicial e domínio (pontilhado ou contínuo).']
], 'Raízes, concavidade e domínio: o esquema do sinal e dos gráficos.'));

pages.push({ out: BASE + 'aula-2-sinal-e-graficos-de-situacoes.html', html: K.deck({
  title: 'Sinal da função quadrática e gráficos de situações — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 53 e 54 · Sinal e gráficos de situações', slides: b,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['s1-a', 's1-b', 's1-c'], function(){ var a = +$('s1-a').value, b = +$('s1-b').value, c = +$('s1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('s1-p').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('s1-n').textContent = ''; $('s1-z').textContent = ''; return; }
    var J = janela(a, b, c), P = parabola($('s1-s'), J.f, J.xmin, J.xmax, J.ymin, J.ymax), d = J.d, pos, neg, zer;
    if(d > 0){ var s = Math.sqrt(d), r1 = Math.min((-b - s) / (2 * a), (-b + s) / (2 * a)), r2 = Math.max((-b - s) / (2 * a), (-b + s) / (2 * a)), A = pt(r1), B = pt(r2); bola($('s1-s'), P, r1, 0, false, 'var(--growth)'); bola($('s1-s'), P, r2, 0, false, 'var(--growth)');
      var fora = 'x < ' + A + ' ou x > ' + B, entre = A + ' < x < ' + B; pos = a > 0 ? fora : entre; neg = a > 0 ? entre : fora; zer = 'x = ' + A + ' ou x = ' + B; }
    else if(d === 0){ var r = pt(J.xv); bola($('s1-s'), P, J.xv, 0, false, 'var(--growth)'); pos = a > 0 ? 'todo x ≠ ' + r : 'nenhum x'; neg = a < 0 ? 'todo x ≠ ' + r : 'nenhum x'; zer = 'x = ' + r; }
    else { pos = a > 0 ? 'todo x real' : 'nenhum x'; neg = a < 0 ? 'todo x real' : 'nenhum x'; zer = 'nenhum x (sem raízes)'; }
    $('s1-p').textContent = pos; $('s1-n').textContent = neg; $('s1-z').textContent = zer; $('s1-h').textContent = 'Δ = ' + pt(d) + (d > 0 ? ' > 0' : d === 0 ? ' = 0' : ' < 0') + '; a ' + (a > 0 ? '> 0 (∪)' : '< 0 (∩)') + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Crescimento e sinal da quadrática: <span>subida, descida e sinais</span>',
  lede: 'Onde a parábola cresce e decresce, onde é positiva e negativa, e como escolher o gráfico que representa uma situação descrita em texto.',
  badges: ['vértice divide', 'raízes + a', 'texto → gráfico'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Monotonia', 'Antes e depois do vértice', 'chart', 'primary', p('a > 0: decresce, depois cresce. a < 0: cresce, depois decresce.') + call('Exemplo', 'x²−4x+3: ]−∞,2] decresce.', 'success')],
    ['Intervalos', 'Em x', 'target', 'growth', li(['Meça no eixo x.', 'O vértice entra nos dois.', 'Respeite o domínio do contexto.'])],
    ['Sinal com Δ > 0', 'Dentro e fora', 'link', 'decay', p('∪: + fora, − entre. ∩: − fora, + entre.') + call('Exemplo', 'x²−5x+6: − em ]2, 3[.', 'success')],
    ['Δ = 0 e Δ < 0', 'Sinal de a', 'scale', 'success', li(['Δ = 0: sinal de a, exceto na raiz.', 'Δ < 0: sinal de a em todo x.', 'x²+x+1 > 0 sempre.'])],
    ['Inequações', 'f(x) > 0 ou < 0', 'up', 'primary', li(['Ache as raízes.', 'Faça o esquema ∪ ou ∩.', 'Estrita exclui raízes.'])],
    ['Texto → gráfico', 'Quatro passos', 'check', 'growth', li(['Grandezas e eixos.', 'Concavidade e zeros.', 'Valor inicial.', 'Domínio: pontos ou curva?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Intervalos de crescimento em y.', 'Trocar entre/fora.', 'Incluir raízes em desigualdades estritas.', 'Gráfico contínuo para variável inteira.', 'Ignorar Δ < 0.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Crescimento e sinal da quadrática <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: intervalo, instante, custo mínimo, inequação e sinal com Δ = 0.',
  final: 'Vértice divide a subida da descida; raízes e concavidade definem o sinal.',
  questions: [
    { badge: 'Estilo ENEM · decrescimento', text: 'Considere $f(x) = x^{2} − 6x + 5$.', cmd: 'A função é decrescente no intervalo:', opts: ['[3, +∞[', ']−∞, 3]', '[1, 5]', ']−∞, 5]', '[−3, +∞['], a: 1,
      sol: '<p>$x_v = 3$ e $a > 0$: decrescente em $]−∞, 3]$.</p>' },
    { badge: 'Estilo ENEM · altura máxima', text: 'A altura de um drone é $h(t) = −t^{2} + 10t + 11$ (m), com $0 ≤ t ≤ 11$ s.', cmd: 'A altura é máxima no instante:', opts: ['2,5 s', '5 s', '10 s', '11 s', '36 s'], a: 1,
      sol: '<p>$t_v = −10 ÷ (−2) = 5$ s (altura máxima: 36 m).</p>' },
    { badge: 'Estilo ENEM · custo mínimo', text: 'O custo de uma empresa é $C(x) = x^{2} − 10x + 40$ (mil reais), com $x$ mil unidades.', cmd: 'O menor custo possível, em mil reais, é:', opts: ['5', '10', '15', '25', '40'], a: 2,
      sol: '<p>$x_v = 5$; $C(5) = 25 − 50 + 40 = 15$.</p>' },
    { badge: 'Estilo ENEM · inequação', text: 'Considere a inequação $x^{2} − 4x + 3 < 0$.', cmd: 'O conjunto-solução é:', opts: ['x < 1 ou x > 3', '1 < x < 3', 'x < −3 ou x > −1', '−3 < x < −1', 'x > 3'], a: 1,
      sol: '<p>Raízes $1$ e $3$; “∪”: negativa entre elas: $1 < x < 3$.</p>' },
    { badge: 'Estilo ENEM · sinal com Δ = 0', text: 'Considere $f(x) = −x^{2} + 4x − 4$.', cmd: 'Podemos afirmar que:', opts: ['f(x) > 0 para todo x', 'f(x) ≥ 0 para todo x', 'f(x) ≤ 0 para todo x', 'f(x) < 0 para todo x', 'f(x) > 0 só em x = 2'], a: 2,
      sol: '<p>$f(x) = −(x − 2)^{2}$: $Δ = 0$ e $a < 0$ ⇒ $f(x) ≤ 0$, com igualdade em $x = 2$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive da <span style="color:var(--decay);">parábola</span>',
  subtitle: 'Cada resolução esconde um erro de leitura. Ache a linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Antes do vértice a ∪ decresce; ∪ é negativa entre as raízes; ∩ é positiva entre elas; a > 0 dá mínimo.',
    casos: [
      { titulo: 'Intervalo de crescimento', enunciado: 'Em que intervalo $f(x) = x^{2} − 6x + 5$ é crescente?', linhas: ['A abscissa do vértice é xᵥ = 6 ÷ 2 = 3.', 'Como a = 1 > 0, a parábola abre para cima.', 'Antes do vértice a função cresce.', 'Logo, é crescente em ]−∞, 3] e decrescente em [3, +∞[.'], erro: 2, porque: 'Com $a > 0$ a função <strong>decresce</strong> antes do vértice e cresce depois: crescente em $[3, +∞[$.' },
      { titulo: 'Sinal de uma parábola ∪', enunciado: 'Resolva $x^{2} − 5x + 6 < 0$.', linhas: ['As raízes são 2 e 3.', 'Como a = 1 > 0, a parábola abre para cima.', 'Fora das raízes a função é negativa.', 'Logo x² − 5x + 6 < 0 para x < 2 ou x > 3.'], erro: 2, porque: 'Para $a > 0$, a função é <strong>positiva fora</strong> e negativa <strong>entre</strong> as raízes: $2 < x < 3$.' },
      { titulo: 'Sinal de uma parábola ∩', enunciado: 'Resolva $−x^{2} + 4x − 3 > 0$.', linhas: ['As raízes são 1 e 3.', 'Como a = −1 < 0, a parábola abre para baixo.', 'Com a < 0, a função é positiva entre as raízes.', 'Logo −x² + 4x − 3 > 0 para x < 1 ou x > 3.'], erro: 3, porque: 'A conclusão contradiz a linha anterior: positiva <strong>entre</strong> as raízes, $1 < x < 3$.' },
      { titulo: 'Custo mínimo ou máximo', enunciado: 'O custo é $C(x) = x^{2} − 10x + 40$. Qual o menor custo?', linhas: ['xᵥ = 10 ÷ 2 = 5.', 'yᵥ = C(5) = 25 − 50 + 40 = 15.', 'Como a > 0, o vértice é ponto de máximo.', 'Logo o custo máximo é 15.'], erro: 2, porque: 'Com $a > 0$ o vértice é ponto de <strong>mínimo</strong>: o menor custo é $15$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Crescimento e sinal da quadrática: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: vértice, custo mínimo, contagem de inteiros e altura máxima. Digite o número pedido.',
  final: 'Você percorreu a trilha: vértice, mínimo, inequações e máximo.',
  problems: [
    { tag: 'Vértice', q: 'Qual a abscissa do vértice de $C(x) = x^{2} − 10x + 40$?', a: 5, ph: 'xᵥ', hint: '10 ÷ 2.', sol: '<p>$x_v = 5$.</p>' },
    { tag: 'Mínimo', q: 'Qual o menor custo (mil reais) de $C(x) = x^{2} − 10x + 40$?', a: 15, ph: 'mil reais', hint: 'C(5).', sol: '<p>$25 − 50 + 40 = 15$.</p>' },
    { tag: 'Inequação', q: 'Quantos números <strong>inteiros</strong> satisfazem $x^{2} − 6x + 5 < 0$?', a: 3, ph: 'inteiros', hint: 'Raízes 1 e 5; “entre”.', sol: '<p>$1 < x < 5$: $2, 3, 4$ — são 3.</p>' },
    { tag: 'Inequação', q: 'Quantos números <strong>inteiros</strong> satisfazem $x^{2} − 4 ≤ 0$?', a: 5, ph: 'inteiros', hint: 'Raízes −2 e 2, incluídas.', sol: '<p>$−2 ≤ x ≤ 2$: $−2, −1, 0, 1, 2$ — são 5.</p>' },
    { tag: 'Altura máxima', q: 'Qual a altura máxima (m) de $h(t) = −t^{2} + 10t + 11$?', a: 36, ph: 'm', hint: 'h(5).', sol: '<p>$−25 + 50 + 11 = 36$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Crescimento e Sinal da Quadrática', accent: 'growth', icon: 'stairs',
  aulas: [['Aulas 51–52', 'Crescimento e decrescimento', 'aula-1-crescimento-e-decrescimento.html'], ['Aulas 53–54', 'Sinal e gráficos de situações', 'aula-2-sinal-e-graficos-de-situacoes.html']],
  enem: 'Crescimento e sinal da quadrática no estilo ENEM', cria: 'Detetive da parábola', pratica: 'Crescimento e sinal da quadrática: trilha de desafios'
}, pages };
