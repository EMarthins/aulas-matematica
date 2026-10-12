// Unidade 19 — Problemas com funções do 2º grau (aulas 55 e 56)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { graf, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'problemas-com-funcoes-do-2-grau', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u19', BRAND = 'Problemas com Funções do 2º Grau', CAP = 'Aulas 55 e 56';
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

// ===================== AULA 1: o kit de ferramentas =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 55', h1: 'Problemas do 2º grau: <span style="color:var(--primary);">escolhendo a ferramenta certa</span>',
  sub: 'Bhaskara, soma e produto, vértice, sinal: cada problema pede uma ferramenta. Como nos jogos, quem conhece os comandos resolve mais rápido.',
  badges: [['raízes'], ['vértice', 'growth'], ['sinal e imagem', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('O kit completo da função quadrática.', [
  ['Lei por três pontos', 'a, b e c por sistema', 'bulb'],
  ['Raízes', 'Bhaskara ou soma e produto', 'target'],
  ['Vértice', 'máximo, mínimo e eixo', 'chart'],
  ['Escolha da ferramenta', 'o que a pergunta pede', 'link'],
  ['Problemas', 'retângulos, lançamentos e curvas', 'scale']
]));
a.push(objetivosSlide([
  'Reunir as ferramentas: <strong>raízes, vértice, sinal e imagem</strong>.',
  'Escolher a ferramenta pela <strong>pergunta</strong> do problema.',
  'Determinar a lei a partir de <strong>três pontos</strong> e analisar o vértice.',
  'Resolver problemas de <strong>área máxima</strong> e de <strong>lançamento</strong>.'
], 'Dica', 'Antes de calcular, escreva em uma linha o que se pede: <strong>“quando?”</strong> (raiz), <strong>“máximo/mínimo?”</strong> (vértice), <strong>“em que intervalo?”</strong> (sinal).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Aprender um jogo novo', `
          ${lede('Na primeira fase de um jogo ninguém começa vencendo: aprendemos os <strong>comandos</strong> um a um. Com a função quadrática é igual: você já conhece os comandos (raízes, vértice, sinal, imagem). Falta saber <strong>qual usar</strong> em cada fase (problema).')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Para saber <strong>em quanto tempo</strong> uma bola volta ao solo, usamos:', ['o vértice', 'as raízes', 'o termo c', 'o coeficiente a'], 1, 'Voltar ao solo é $h(t) = 0$: <strong>raiz</strong> positiva. (O vértice daria a altura máxima.)')}
            ${card('<strong>Mapa de ferramentas</strong><p style="font-size:.9rem;margin-top:8px;">“Quando é zero?” → <strong>raízes</strong><br>“Qual o maior/menor valor?” → <strong>vértice</strong><br>“Para que x é positiva?” → <strong>sinal</strong><br>“Quais valores assume?” → <strong>imagem</strong></p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Explore · kit completo', 'Tudo sobre uma parábola em um só lugar', `
          <div class="grid2">
            ${W.box('Kit da função quadrática', W.row(W.nm('k1-a', 'a', 1, 'any'), W.nm('k1-b', 'b', 4, 'any'), W.nm('k1-c', 'c', -5, 'any')) + W.svg('k1-s', '0 0 360 230', '380px') + W.txt('k1-l', 'Lei: ') + W.txt('k1-r', 'Raízes: ') + W.txt('k1-v', 'Vértice: ') + W.txt('k1-i', 'Imagem: ') + W.hint('k1-h'))}
            <div>
              ${callout('Passos para qualquer problema', '<strong>1.</strong> Defina a variável e a lei. <strong>2.</strong> Leia o que a pergunta pede. <strong>3.</strong> Use raízes, vértice, sinal ou imagem. <strong>4.</strong> Confira e escreva a unidade.', 'success')}
              ${callout('Exemplo do kit', 'Com $a = 1$, $b = 4$, $c = −5$: raízes $−5$ e $1$; vértice $(−2, −9)$; imagem $[−9, +∞[$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Lei por três pontos e vértice', 'Uma função quadrática tem gráfico que contém $(0, −5)$, $(1, 0)$ e $(2, 7)$. Determine o vértice.', [
  ['Use (0, −5)', '$c = −5$.'],
  ['Use os outros dois', '$a + b − 5 = 0$ ⇒ $a + b = 5$; $4a + 2b − 5 = 7$ ⇒ $2a + b = 6$. Subtraindo: $a = 1$, $b = 4$.'],
  ['Vértice', '$f(x) = x^{2} + 4x − 5$: $x_v = −2$ e $y_v = 4 − 8 − 5 = −9$.']
], '$V = (−2, −9)$.'));
a.push(exemplo('Exemplo resolvido', 'Retângulo de área máxima', 'As dimensões de um retângulo são $x$ e $(12 − 2x)$ (em cm), com $0 < x < 6$. Qual a área máxima?', [
  ['Área', '$A(x) = x(12 − 2x) = −2x^{2} + 12x$.'],
  ['Vértice', '$x_v = −{12|2 · (−2)} = 3$.'],
  ['Valor máximo', '$A(3) = 3 · 6 = 18$.']
], 'Área máxima: <strong>18 cm²</strong>, com lados $3$ cm e $6$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O foguete de garrafa', 'A altura de um foguete de garrafa é $h(t) = −4t^{2} + 24t$ (metros, $t$ em segundos). Qual a altura máxima e quando o foguete volta ao solo?', [
  ['Altura máxima (vértice)', '$t_v = −{24|−8} = 3$ e $h(3) = −36 + 72 = 36$ m.'],
  ['Volta ao solo (raiz)', '$−4t^{2} + 24t = 0$ ⇒ $−4t(t − 6) = 0$ ⇒ $t = 0$ ou $t = 6$.'],
  ['Simetria', '$3$ é a média de $0$ e $6$: o vértice fica no meio do voo.']
], 'Altura máxima de <strong>36 m</strong> em $3$ s; volta ao solo em <strong>6 s</strong>.', 'growth'));

a.push(pratique('Vértice por três pontos', 'O gráfico de uma função quadrática passa por $(0, −5)$, $(1, 0)$ e $(2, 7)$. O vértice é:',
  ['(−2, −9)', '(2, 7)', '(−1, −8)', '(2, −9)', '(−2, 9)'], 0,
  '$f(x) = x^{2} + 4x − 5$; $x_v = −2$; $y_v = −9$. <strong>Alternativa A.</strong> (Teste: $f(−1) = −8$, mas $−1$ não é o vértice.)'));
a.push(pratique('Área máxima', 'Um retângulo tem lados $x$ e $(12 − 2x)$, com $0 < x < 6$. A maior área possível é:',
  ['9', '12', '16', '18', '24'], 3,
  '$A = −2x^{2} + 12x$; máximo em $x = 3$: $A = 18$. <strong>Alternativa D.</strong>', '', 'growth'));
a.push(estiloEnem('O foguete', 'A altura de um foguete de garrafa é $h(t) = −4t^{2} + 24t$ (metros, $t$ em segundos). A altura máxima atingida é:',
  ['24 m', '36 m', '48 m', '72 m', '144 m'], 1,
  '$t_v = 3$ s; $h(3) = −36 + 72 = 36$ m. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a escolha da ferramenta engana', [
  ['Usar o vértice para “quando volta ao solo”', 'Voltar ao solo é $h = 0$: raiz. O vértice dá o ponto mais alto.'],
  ['Usar a raiz para “altura máxima”', 'Altura máxima é $y_v$, não a raiz.'],
  ['Esquecer o domínio', 'Em $0 < x < 6$, o vértice $x = 3$ está dentro: vale. Se estivesse fora, o máximo seria nas pontas.'],
  ['Responder só o número', 'Escreva a unidade (m, cm², s) e interprete.']
]));
a.push(quiz([
  { q: '“Qual a altura máxima?” pede:', o: ['uma raiz', 'o y do vértice', 'o termo c', 'o discriminante'], a: 1 },
  { q: '“Quando a bola volta ao solo?” pede:', o: ['o y do vértice', 'a raiz positiva', 'o x do vértice', 'a imagem'], a: 1 },
  { q: 'Em $A = −2x^{2} + 12x$, o valor de $x$ que dá a área máxima é:', o: ['3', '6', '12', '18'], a: 0 },
  { q: 'Para achar $a$, $b$ e $c$ são necessários:', o: ['1 ponto', '2 pontos', '3 pontos', '4 pontos'], a: 2 }
]));
a.push(fechamento([
  ['Mapa', 'Quando = raiz · máximo/mínimo = vértice · intervalo = sinal.'],
  ['Lei', 'Três pontos dão a, b e c.'],
  ['Resposta', 'Unidade e interpretação sempre.']
], 'Pergunta lida, ferramenta escolhida, resposta conferida.'));

pages.push({ out: BASE + 'aula-1-kit-de-ferramentas.html', html: K.deck({
  title: 'O kit de ferramentas da função quadrática — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 55 · O kit de ferramentas', slides: a,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['k1-a', 'k1-b', 'k1-c'], function(){ var a = +$('k1-a').value, b = +$('k1-b').value, c = +$('k1-c').value; if(![a, b, c].every(isFinite) || a === 0){ $('k1-l').textContent = a === 0 ? 'a = 0: não é quadrática' : '—'; $('k1-r').textContent = ''; $('k1-v').textContent = ''; $('k1-i').textContent = ''; return; }
    var J = janela(a, b, c), P = parabola($('k1-s'), J.f, J.xmin, J.xmax, J.ymin, J.ymax); bola($('k1-s'), P, J.xv, J.yv, false, 'var(--decay)'); if(c >= J.ymin && c <= J.ymax) bola($('k1-s'), P, 0, c, false, 'var(--growth)');
    $('k1-l').textContent = leiQ(a, b, c); var rs;
    if(J.d > 0){ var s = Math.sqrt(J.d), r1 = (-b - s) / (2 * a), r2 = (-b + s) / (2 * a); bola($('k1-s'), P, r1, 0, false, 'var(--primary)'); bola($('k1-s'), P, r2, 0, false, 'var(--primary)'); rs = pt(Math.min(r1, r2)) + ' e ' + pt(Math.max(r1, r2)); } else if(J.d === 0){ rs = pt(J.xv) + ' (dupla)'; bola($('k1-s'), P, J.xv, 0, false, 'var(--primary)'); } else rs = 'sem raízes reais';
    $('k1-r').textContent = rs; $('k1-v').textContent = '(' + pt(J.xv) + '; ' + pt(J.yv) + ') — ' + (a > 0 ? 'mínimo' : 'máximo'); $('k1-i').textContent = a > 0 ? '[' + pt(J.yv) + '; +∞[' : ']−∞; ' + pt(J.yv) + ']';
    $('k1-h').textContent = 'Laranja: vértice · Verde: corte em y · Azul: raízes.'; });`
}) });

// ===================== AULA 2: problemas variados =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 56', h1: 'Resolver problemas é pegar o ritmo: <span style="color:var(--growth);">temperatura, balão e salto do grilo</span>',
  sub: 'No começo analisamos cada detalhe; depois o padrão flui. Mais três situações que combinam raízes, vértice e sinal.',
  badges: [['zeros e sinal'], ['máximo e mínimo', 'growth'], ['interpretar o gráfico', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Três cenários, as mesmas ferramentas.', [
  ['Congelador', 'T(t) < 0: sinal e mínimo', 'bulb'],
  ['Balão de ar quente', 'duração do voo e altura máxima', 'chart'],
  ['Salto do grilo', 'h(t) = 3t − 3t²', 'target'],
  ['Retângulo com perímetro fixo', 'área em função do lado', 'link'],
  ['Estratégia', 'ler, escolher, calcular, conferir', 'scale']
]));
b.push(objetivosSlide([
  'Combinar <strong>raízes, vértice e sinal</strong> em um mesmo problema.',
  'Calcular <strong>durações</strong> como a diferença entre duas raízes.',
  'Interpretar o gráfico em <strong>contextos físicos</strong> (tempo, altura, temperatura).',
  'Resolver problemas de <strong>área máxima</strong> com perímetro fixo.'
], 'Dica', 'Duração entre dois instantes = <strong>diferença entre as raízes</strong>. Em $ax^{2} + bx + c$, a distância entre elas é $√{Δ} ÷ |a|$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Aprender uma coreografia', `
          ${lede('Aprender uma coreografia ou tocar um instrumento: no começo você analisa cada passo; com a prática, os passos <strong>fluem</strong>. Com problemas do 2º grau é igual: a cada situação nova, o <strong>mesmo roteiro</strong> se repete: modelar, escolher a ferramenta, calcular, conferir.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Se uma curva tem raízes $t = 1$ e $t = 5$, o tempo entre elas é:', ['1', '4', '5', '6'], 1, 'Duração $= 5 − 1 = 4$. Também é $√Δ ÷ |a|$: para $t^{2} − 6t + 5$, $√{16} ÷ 1 = 4$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">O <strong>vértice</strong> fica no meio entre as duas raízes: $x_v$ é a média delas.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · perímetro fixo', 'Qual retângulo tem a maior área?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com perímetro $P$ fixo, um lado $x$ e o outro $P/2 − x$.</li>
                <li>Área: $A(x) = x · (P/2 − x) = −x^{2} + (P/2)x$.</li>
                <li>Vértice em $x = P/4$: o <strong>quadrado</strong> tem a maior área.</li>
                <li>Área máxima: $(P/4)^{2}$.</li>
              </ul>
            </div>
            ${W.box('Retângulo de perímetro fixo', W.nm('r1-p', 'Perímetro (m)', 40, 'any') + W.nm('r1-x', 'Um lado (m)', 6, 'any') + W.svg('r1-s', '0 0 360 230', '380px') + W.txt('r1-a', 'Área deste retângulo: ') + W.txt('r1-m', 'Área máxima: ') + W.hint('r1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'A temperatura do congelador', 'A temperatura de um congelador nas primeiras horas é $T(t) = t^{2} − 6t + 5$ (°C, $t$ em horas). Por quanto tempo fica abaixo de zero e qual a menor temperatura?', [
  ['Raízes (T = 0)', 'Soma $6$ e produto $5$: $t = 1$ e $t = 5$.'],
  ['Sinal', 'Parábola “∪”: negativa entre as raízes: $1 < t < 5$ (duração $5 − 1 = 4$ h).'],
  ['Mínimo (vértice)', '$t_v = 3$ e $T(3) = 9 − 18 + 5 = −4$ °C.']
], 'Abaixo de zero por <strong>4 horas</strong> (de $1$ h a $5$ h); mínima de <strong>−4 °C</strong> em $t = 3$ h.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'O balão de ar quente', 'Um balão sai do solo às 9 h e volta ao solo 8 horas depois. A altura (m) é $h(t) = −25t^{2} + 200t$, com $t$ em horas após a saída. Que horário e que altura correspondem ao ponto mais alto?', [
  ['Raízes', '$−25t(t − 8) = 0$ ⇒ $t = 0$ ou $t = 8$ (duração do voo: 8 h).'],
  ['Vértice', '$t_v = 4$ (meio do voo) e $h(4) = −400 + 800 = 400$ m.'],
  ['Horário', '$9 + 4 = 13$ h.']
], 'Ponto mais alto às <strong>13 h</strong>, com <strong>400 m</strong> de altura.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'O salto do grilo', 'Um grilo salta do solo e sua altura (dm) é $h(t) = 3t − 3t^{2}$ ($t$ em segundos). Qual a duração do salto e a altura máxima?', [
  ['Raízes', '$3t(1 − t) = 0$ ⇒ $t = 0$ ou $t = 1$: o salto dura 1 s.'],
  ['Vértice', '$t_v = 0,5$ s (meio do salto).'],
  ['Altura máxima', '$h(0,5) = 1,5 − 0,75 = 0,75$ dm.']
], 'Salto de <strong>1 s</strong>, com altura máxima de <strong>0,75 dm</strong> ($7,5$ cm).', 'growth'));

b.push(pratique('Congelador', 'Com $T(t) = t^{2} − 6t + 5$ (°C), a temperatura fica negativa durante:',
  ['1 hora', '3 horas', '4 horas', '5 horas', '6 horas'], 2,
  'Raízes $1$ e $5$; negativa entre elas: duração $5 − 1 = 4$ h. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Balão', 'O balão com $h(t) = −25t^{2} + 200t$ (m) atinge a altura máxima de:',
  ['100 m', '200 m', '400 m', '800 m', '1 600 m'], 2,
  '$t_v = 4$ h; $h(4) = −400 + 800 = 400$ m. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Cercando um jardim', 'Um jardineiro dispõe de 24 m de cerca para um jardim retangular. A maior área que ele pode cercar é:',
  ['27 m²', '32 m²', '36 m²', '40 m²', '144 m²'], 2,
  'Semiperímetro $12$: lados $x$ e $12 − x$. $A = −x^{2} + 12x$ tem máximo em $x = 6$: $A = 36$ m² (um quadrado de 6 m). <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas enganam', [
  ['Duração como uma raiz só', 'Duração = diferença entre as raízes; use as duas.'],
  ['Hora de relógio × tempo decorrido', '$t$ conta a partir da saída (9 h): o ponto mais alto às 13 h é $t = 4$.'],
  ['Unidade esquecida', 'Dm, m, °C, h: escreva a unidade da resposta.'],
  ['Domínio do contexto', 'Tempo e comprimento ≥ 0; a raiz negativa não entra.']
]));
b.push(quiz([
  { q: 'A duração entre as raízes $1$ e $5$ é:', o: ['1', '4', '5', '6'], a: 1 },
  { q: 'O vértice de $h(t) = −25t^{2} + 200t$ ocorre em:', o: ['t = 2', 't = 4', 't = 8', 't = 400'], a: 1 },
  { q: 'Com 24 m de cerca, a área máxima de um retângulo é:', o: ['27 m²', '36 m²', '40 m²', '144 m²'], a: 1 },
  { q: '$T(t) = t^{2} − 6t + 5$ é mínima em:', o: ['t = 1', 't = 3', 't = 5', 't = 6'], a: 1 }
]));
b.push(fechamento([
  ['Duração', 'Diferença entre as duas raízes.'],
  ['Meio do voo', 'O vértice fica no ponto médio das raízes.'],
  ['Área máxima', 'Perímetro fixo: o quadrado vence.']
], 'Modelar, escolher, calcular e conferir: o ritmo dos problemas do 2º grau.'));

pages.push({ out: BASE + 'aula-2-problemas-variados.html', html: K.deck({
  title: 'Problemas variados com funções do 2º grau — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 56 · Problemas variados', slides: b,
  extra: WJS + BIND + PL + QJS + String.raw`
  bind(['r1-p', 'r1-x'], function(){ var P = +$('r1-p').value, x = +$('r1-x').value; if(!isFinite(P) || !isFinite(x) || P <= 0){ $('r1-a').textContent = '—'; $('r1-m').textContent = ''; return; }
    var s = P / 2, f = function(t){ return t * (s - t); }, ymax = f(s / 2) * 1.15, S = parabola($('r1-s'), f, 0, s, -ymax * 0.08, ymax);
    var xx = Math.max(0, Math.min(s, x)); bola($('r1-s'), S, xx, f(xx), false, 'var(--danger)'); bola($('r1-s'), S, s / 2, f(s / 2), false, 'var(--decay)');
    $('r1-a').textContent = x > s || x < 0 ? 'lado fora de 0 a ' + pt(s) : pt(x) + ' × ' + pt(s - x) + ' = ' + pt(f(x), 2) + ' m²'; $('r1-m').textContent = pt(f(s / 2), 2) + ' m² (lados de ' + pt(s / 2) + ' m: um quadrado)';
    $('r1-h').textContent = 'A(x) = x(' + pt(s) + ' − x). Ponto laranja: o vértice, em x = ' + pt(s / 2) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Problemas do 2º grau: <span>a ferramenta certa para cada pergunta</span>',
  lede: 'Lei por três pontos, raízes, vértice, sinal e imagem, aplicados a retângulos, lançamentos, temperaturas e saltos.',
  badges: ['quando: raiz', 'máximo: vértice', 'intervalo: sinal'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Mapa de ferramentas', 'Pergunta → método', 'chart', 'primary', li(['Quando é zero? raízes.', 'Maior/menor valor? vértice.', 'Para que x positiva? sinal.'])],
    ['Lei por 3 pontos', 'Sistema', 'link', 'growth', p('c = f(0); depois a e b.') + call('Exemplo', '(0,−5),(1,0),(2,7): x²+4x−5.', 'success')],
    ['Área máxima', 'Perímetro fixo', 'target', 'decay', p('Lados $x$ e $P/2 − x$; máximo em $x = P/4$.') + call('Exemplo', '24 m de cerca: 36 m².', 'success')],
    ['Lançamentos', 'Altura × tempo', 'up', 'success', li(['Altura máxima: yᵥ.', 'Volta ao solo: raiz positiva.', 'Meio do voo: xᵥ = média das raízes.'])],
    ['Duração', 'Entre raízes', 'scale', 'primary', p('Duração $= |x_2 − x_1| = √{Δ} ÷ |a|$.') + call('Exemplo', 'Congelador: 4 h abaixo de 0.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Unidade?', 'Raiz negativa descartada?', 'Vértice dentro do domínio?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar vértice onde se pede raiz.', 'Confundir hora do relógio com t.', 'Esquecer a unidade.', 'Aceitar raiz negativa.', 'Ignorar o domínio.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Problemas do 2º grau <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: vértice por pontos, retângulo, foguete, congelador e balão.',
  final: 'Quando é raiz, máximo é vértice, intervalo é sinal — e a unidade vem sempre junto.',
  questions: [
    { badge: 'Estilo ENEM · vértice por pontos', text: 'O gráfico de uma função quadrática contém os pontos $(0, −5)$, $(1, 0)$ e $(2, 7)$.', cmd: 'O vértice da parábola é:', opts: ['(−2, −9)', '(2, 7)', '(−1, −8)', '(2, −9)', '(−2, 9)'], a: 0,
      sol: '<p>$c = −5$; $a + b = 5$ e $2a + b = 6$ ⇒ $a = 1$, $b = 4$. $x_v = −2$; $y_v = −9$.</p>' },
    { badge: 'Estilo ENEM · área máxima', text: 'As dimensões de um retângulo são $x$ cm e $(12 − 2x)$ cm, com $0 < x < 6$.', cmd: 'A área máxima, em cm², é:', opts: ['9', '12', '16', '18', '24'], a: 3,
      sol: '<p>$A = −2x^{2} + 12x$; $x_v = 3$; $A = 3 · 6 = 18$.</p>' },
    { badge: 'Estilo ENEM · foguete', text: 'A altura de um foguete de garrafa é $h(t) = −4t^{2} + 24t$ (m), com $t$ em segundos.', cmd: 'A altura máxima, em metros, é:', opts: ['24', '36', '48', '72', '144'], a: 1,
      sol: '<p>$t_v = 3$; $h(3) = −36 + 72 = 36$ m.</p>' },
    { badge: 'Estilo ENEM · congelador', text: 'A temperatura de um congelador é $T(t) = t^{2} − 6t + 5$ (°C), com $t$ em horas.', cmd: 'A temperatura é negativa durante:', opts: ['1 hora', '3 horas', '4 horas', '5 horas', '6 horas'], a: 2,
      sol: '<p>Raízes $1$ e $5$; negativa entre elas: $5 − 1 = 4$ h.</p>' },
    { badge: 'Estilo ENEM · balão', text: 'A altura de um balão é $h(t) = −25t^{2} + 200t$ (m), com $t$ em horas após a saída do solo.', cmd: 'A altura máxima, em metros, é:', opts: ['100', '200', '400', '800', '1 600'], a: 2,
      sol: '<p>$t_v = 4$; $h(4) = −400 + 800 = 400$ m.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">solução</span>',
  subtitle: 'Passos embaralhados de três problemas do 2º grau: toque na ordem certa.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Raiz, vértice ou sinal: a pergunta escolhe o primeiro passo.',
    problemas: [
      { titulo: 'Altura máxima do foguete', enunciado: 'Qual a altura máxima de $h(t) = −4t^{2} + 24t$?', passos: ['Altura máxima é o $y$ do vértice.', 'Calcule $t_v = −b ÷ 2a = −24 ÷ (−8) = 3$.', 'Substitua: $h(3) = −4 · 9 + 24 · 3 = −36 + 72$.', 'Resposta: $36$ m.'] },
      { titulo: 'Tempo abaixo de zero', enunciado: 'Por quanto tempo $T(t) = t^{2} − 6t + 5$ é negativa?', passos: ['Queremos $T(t) < 0$.', 'Raízes de $t^{2} − 6t + 5 = 0$: soma $6$, produto $5$ ⇒ $1$ e $5$.', 'Parábola “∪” é negativa entre as raízes: $1 < t < 5$.', 'Duração: $5 − 1 = 4$ horas.'] },
      { titulo: 'Retângulo de área máxima', enunciado: 'Lados $x$ e $12 − 2x$: qual a área máxima?', passos: ['A área é $A = x(12 − 2x)$.', 'Desenvolva: $A = −2x^{2} + 12x$.', 'Vértice: $x_v = −12 ÷ (−4) = 3$.', '$A(3) = 3 · 6 = 18$.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Problemas do 2º grau: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de aplicação. Digite o número pedido.',
  final: 'Você percorreu a trilha: vértice, área, foguete, congelador e balão.',
  problems: [
    { tag: 'Vértice', q: 'Qual a ordenada do vértice de $f(x) = x^{2} + 4x − 5$?', a: -9, ph: 'yᵥ', hint: 'xᵥ = −2.', sol: '<p>$f(−2) = 4 − 8 − 5 = −9$.</p>' },
    { tag: 'Área', q: 'Lados $x$ e $12 − 2x$ (cm). Qual a área máxima (cm²)?', a: 18, ph: 'cm²', hint: 'x = 3.', sol: '<p>$3 · 6 = 18$.</p>' },
    { tag: 'Foguete', q: 'Qual a altura máxima (m) de $h(t) = −4t^{2} + 24t$?', a: 36, ph: 'm', hint: 't = 3.', sol: '<p>$h(3) = 36$.</p>' },
    { tag: 'Congelador', q: 'Por quantas horas $T(t) = t^{2} − 6t + 5$ é negativa?', a: 4, ph: 'horas', hint: 'Raízes 1 e 5.', sol: '<p>$5 − 1 = 4$.</p>' },
    { tag: 'Balão', q: 'O balão $h(t) = −25t^{2} + 200t$ volta ao solo após quantas horas?', a: 8, ph: 'horas', hint: 'Raiz positiva.', sol: '<p>$−25t(t − 8) = 0$ ⇒ $t = 8$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Problemas com Funções do 2º Grau', accent: 'primary', icon: 'briefcase',
  aulas: [['Aula 55', 'O kit de ferramentas', 'aula-1-kit-de-ferramentas.html'], ['Aula 56', 'Problemas variados', 'aula-2-problemas-variados.html']],
  enem: 'Problemas do 2º grau no estilo ENEM', cria: 'Ordene a solução', pratica: 'Problemas do 2º grau: trilha de desafios'
}, pages };
