// Unidade 7 — Funções afim e quadrática (capítulo 7)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/07-funcoes-afim-quadratica/';
const out = [];

// ====================== AULA 1: função afim e regiões ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 7 · Aula 1', h1: 'Função afim e <span style="color:var(--primary);">regiões do plano</span>',
  sub: 'Coeficientes angular e linear, reta por dois pontos, retas paralelas e perpendiculares, regiões acima e abaixo de uma reta — e o conceito de função: domínio, composição e inversa.',
  badges: [['5 questões em 60'], ['y = ax + b', 'growth'], ['teste um ponto', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da reta no gráfico à região do plano que ela limita.', [
  ['Função afim', 'a, b, raiz e gráfico', 'chart'],
  ['Reta por dois pontos', 'a = Δy/Δx e depois b', 'link'],
  ['Paralelas e perpendiculares', 'a₁ = a₂ · a₁·a₂ = −1', 'scale'],
  ['Região do plano', 'acima/abaixo: substitua o ponto (ENA 2025 Q18)', 'target'],
  ['Conceitos de função', 'domínio, composição, inversa, par/ímpar', 'book']
]));
a.push(objetivosSlide([
  'Ler <strong>a</strong> (coeficiente angular), <strong>b</strong> (ordenada na origem) e a <strong>raiz</strong> de $y = ax + b$.',
  'Achar a equação da reta por <strong>dois pontos</strong>.',
  'Decidir se um ponto está <strong>acima, abaixo ou sobre</strong> uma reta, substituindo.',
  'Revisar <strong>domínio</strong>, composição, inversa e paridade de funções.'
], 'Em prova', 'Não confie no olho para saber se um ponto está acima ou abaixo da reta: <strong>substitua</strong> e compare.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Qual é a equação da reta?', `
          ${lede('Uma reta passa pelos pontos $(1, 3)$ e $(3, 7)$. Como achar $y = ax + b$ sem desenhar?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A equação da reta por $(1, 3)$ e $(3, 7)$ é:', ['$y = 2x + 1$', '$y = 3x$', '$y = 2x − 1$', '$y = x + 2$'], 0, '$a = {7 − 3|3 − 1} = 2$. Com o ponto $(1, 3)$: $3 = 2·1 + b ⇒ b = 1$. Logo $y = 2x + 1$. Teste: em $x = 3$, $y = 7$ ✓.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Uma reta fica determinada por <strong>dois pontos</strong>: primeiro o <strong>coeficiente angular</strong> (quanto $y$ sobe para cada unidade de $x$), depois o linear.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · função afim', 'y = ax + b: o que cada coisa significa', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$a = {y_2 − y_1|x_2 − x_1}$ é o <strong>coeficiente angular</strong>: $a > 0$ reta crescente; $a < 0$ decrescente.</li>
                <li>$b$ é a <strong>ordenada</strong> onde a reta corta o eixo $y$ (em $x = 0$).</li>
                <li>A <strong>raiz</strong> (onde corta o eixo $x$) é $x = −{b|a}$.</li>
                <li>Reta por $(x_0, y_0)$ com inclinação $a$: $y − y_0 = a(x − x_0)$.</li>
              </ul>
            </div>
            ${W.box('Gráfico de y = ax + b', W.rg('f1-a', 'a', -4, 4, 0.5, 2) + W.rg('f1-b', 'b', -6, 6, 1, 1) + W.svg('f1-s', '0 0 360 230') + W.hint('f1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Reta por dois pontos', 'Ache a e b em dois passos', `
          <div class="grid2">
            <div>
              ${F('a = {y_2 − y_1|x_2 − x_1}   b = y_1 − a x_1', true)}
              ${callout('Treino 7.2', 'Pontos $(1, 3)$ e $(3, 7)$: $a = 4/2 = 2$; $3 = 2·1 + b ⇒ b = 1$ → $y = 2x + 1$.', 'success')}
              ${callout('Paralelas e perpendiculares', 'Paralelas: mesmo $a$. Perpendiculares: $a_1 · a_2 = −1$ (ex.: $2$ e $−1/2$).')}
            </div>
            ${W.box('Reta por dois pontos', W.row(W.nm('f2-x1', 'x₁', 1), W.nm('f2-y1', 'y₁', 3), W.nm('f2-x2', 'x₂', 3), W.nm('f2-y2', 'y₂', 7)) + W.svg('f2-s', '0 0 360 230') + W.txt('f2-t', 'Equação: ') + W.hint('f2-h'))}
          </div>`, { cls: '' }));

a.push(sl('Região do plano', 'Acima ou abaixo da reta? Substitua o ponto', `
          ${lede('Para decidir se $(x_0, y_0)$ está <strong>abaixo</strong> da reta $y = ax + b$ (região $y ≤ ax + b$), calcule $ax_0 + b$ e <strong>compare com $y_0$</strong>. Com $a < 0$ a reta cai: um ponto à direita pode estar “acima”.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Região abaixo da reta AB', W.row(W.nm('f3-xa', 'A: x', 0), W.nm('f3-ya', 'A: y', 0.3333)) + W.row(W.nm('f3-xb', 'B: x', 1.6667), W.nm('f3-yb', 'B: y', 0)) + W.row(W.nm('f3-xp', 'P: x', 7), W.nm('f3-yp', 'P: y', -1)) + W.svg('f3-s', '0 0 360 150') + W.hint('f3-h'))}
            ${callout('ENA 2025 Q18', 'Reta por $A(0, 1/3)$ e $B(5/3, 0)$: $a = {0 − 1/3|5/3 − 0} = −{1|5}$; $b = {1|3}$. Região $R$: $y ≤ −{x|5} + {1|3}$. Teste cada ponto.', 'success')}
          </div>`, { cls: '' }));

a.push(ja('ENA 2025 · Q18', 'Qual ponto NÃO pertence à região?',
  'Seja $R$ a região do plano <strong>abaixo</strong> da reta que passa por $A = (0, 1/3)$ e $B = (5/3, 0)$ (incluindo a reta). Qual ponto <strong>NÃO</strong> pertence a $R$?',
  ['$(−4, 1)$', '$(4, −1)$', '$(7, −1)$', '$(−7, 1)$', '$(1/3, 1/5)$'], 2,
  '$b = 1/3$ e $a = −1/5$: $R$: $y ≤ −{x|5} + {1|3}$. $(−4, 1)$: $0,8 + 0,33 ≥ 1$ ✓. $(4, −1)$: $−0,8 + 0,33 = −0,47 ≥ −1$ ✓. $(7, −1)$: $−1,4 + 0,33 = −1,07$, e $−1 > −1,07$ ✗ (fica acima da reta). $(−7, 1)$: $1,4 + 0,33 ≥ 1$ ✓. $(1/3, 1/5)$: $−{1|15} + {1|3} = {4|15} ≈ 0,27 ≥ 0,2$ ✓. <strong>Alternativa C.</strong>'));

a.push(sl('Revisão · funções', 'Domínio, composição, inversa e paridade', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.65;">
                <li><strong>Domínio</strong>: denominador $≠ 0$; radicando de índice par $≥ 0$; logaritmando $> 0$.</li>
                <li><strong>Composição</strong>: $(f ∘ g)(x) = f(g(x))$ — não é comutativa.</li>
                <li><strong>Inversa</strong>: troque $x ↔ y$ e isole $y$. Os gráficos são simétricos em relação à reta $y = x$.</li>
                <li><strong>Par</strong>: $f(−x) = f(x)$. <strong>Ímpar</strong>: $f(−x) = −f(x)$.</li>
                <li>Injetora / sobrejetora / bijetora.</li>
              </ul>
            </div>
            ${W.box('Composição e inversa de funções afins', W.row(W.nm('f4-a', 'f(x) = ax + b: a', 2), W.nm('f4-b', 'b', 1)) + W.row(W.nm('f4-c', 'g(x) = cx + d: c', 3), W.nm('f4-d', 'd', -2), W.nm('f4-x', 'x', 4)) + W.txt('f4-r', '') + W.hint('f4-h'))}
          </div>`, { cls: '' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em função afim', [
  ['Confiar no olho', 'Um ponto à direita da reta pode estar “acima” se a reta é decrescente. Substitua $x$ e compare $y$.'],
  ['Trocar a ordem em $a$', '$a = Δy/Δx$ — use os pontos na <strong>mesma ordem</strong> no numerador e no denominador.'],
  ['Perpendicular ≠ oposto', 'Perpendiculares têm $a_1 a_2 = −1$ (inverso e <strong>oposto</strong>), não apenas $a_2 = −a_1$.'],
  ['Compor ao contrário', '$(f ∘ g)(x) = f(g(x))$: aplica $g$ primeiro. $f(g(x)) ≠ g(f(x))$ em geral.']
]));

a.push(quiz([
  { q: 'A raiz da função $y = −2x + 6$ é:', o: ['2', '3', '6', '−3'], a: 1 },
  { q: 'Uma reta tem coeficiente angular 2. Uma reta perpendicular a ela tem coeficiente angular:', o: ['−2', '−1/2', '1/2', '2'], a: 1 },
  { q: 'O ponto $(3, 1)$ em relação à reta $y = x − 1$ está:', o: ['acima', 'abaixo', 'sobre a reta', 'não dá para saber'], a: 1 },
  { q: 'A reta que passa por $(0, 4)$ e $(−4, 0)$ tem equação:', o: ['$y = x + 4$', '$y = −x + 4$', '$y = 4x$', '$y = x − 4$'], a: 0 }
]));
a.push(fechamento([
  ['Reta', '$a = Δy/Δx$; $b = y_1 − ax_1$; raiz $−b/a$.'],
  ['Região', 'Substitua o ponto e compare $y$ com $ax + b$.'],
  ['Perpendiculares', '$a_1 · a_2 = −1$.']
], 'Na dúvida, substitua: o cálculo vence o olhômetro.'));

out.push({ out: DIR + 'aula-1-funcao-afim-regioes.html', html: K.deck({
  title: 'Função afim e regiões do plano — ENA · PROFMAT', brand: 'Funções', key: 'c7a1', meta: 'Capítulo 7 · Aula 1 · Função afim e regiões', slides: a,
  extra: WJS + BIND + String.raw`
  function eq(a, b){ var A = nf(a, 4), B = nf(Math.abs(b), 4); return 'y = ' + (a === 1 ? '' : a === -1 ? '−' : A.replace('-', '−')) + 'x' + (b === 0 ? '' : (b > 0 ? ' + ' : ' − ') + B); }
  bind(['f1-a', 'f1-b'], function(){ var a = +$('f1-a').value, b = +$('f1-b').value; $('f1-av').textContent = a; $('f1-bv').textContent = b; var svg = $('f1-s'), P = plano(svg, -8, 8, -8, 8, 360, 230, 2); curva(svg, P, function(x){ return a * x + b; }, -8, 8, -8, 8); ponto(svg, P, 0, b, 'var(--growth)', '(0, ' + b + ')'); if(a !== 0 && Math.abs(b / a) <= 8) ponto(svg, P, -b / a, 0, 'var(--decay)', 'raiz'); $('f1-h').textContent = eq(a, b) + (a !== 0 ? ' · raiz x = ' + nf(-b / a, 3) : ' · reta horizontal') + ' · ' + (a > 0 ? 'crescente' : a < 0 ? 'decrescente' : 'constante'); });
  bind(['f2-x1', 'f2-y1', 'f2-x2', 'f2-y2'], function(){ var x1 = +$('f2-x1').value, y1 = +$('f2-y1').value, x2 = +$('f2-x2').value, y2 = +$('f2-y2').value, svg = $('f2-s'), P = plano(svg, -8, 8, -8, 8, 360, 230, 2); if(x1 === x2){ el('line', {x1: P.sx(x1), y1: P.sy(-8), x2: P.sx(x1), y2: P.sy(8), stroke: 'var(--primary)', 'stroke-width': 3}, svg); $('f2-t').textContent = 'reta vertical x = ' + x1; $('f2-h').textContent = 'Com x₁ = x₂ não existe coeficiente angular (reta vertical).'; ponto(svg, P, x1, y1, 'var(--growth)'); ponto(svg, P, x2, y2, 'var(--growth)'); return; } var a = (y2 - y1) / (x2 - x1), b = y1 - a * x1; curva(svg, P, function(x){ return a * x + b; }, -8, 8, -8, 8); ponto(svg, P, x1, y1, 'var(--growth)', '(' + x1 + ', ' + y1 + ')'); ponto(svg, P, x2, y2, 'var(--growth)', '(' + x2 + ', ' + y2 + ')'); $('f2-t').textContent = eq(a, b); $('f2-h').textContent = 'a = (' + y2 + ' − ' + y1 + ')/(' + x2 + ' − ' + x1 + ') = ' + nf(a, 4) + ' · b = ' + y1 + ' − ' + nf(a, 4) + '·' + x1 + ' = ' + nf(b, 4); });
  bind(['f3-xa', 'f3-ya', 'f3-xb', 'f3-yb', 'f3-xp', 'f3-yp'], function(){ var xa = +$('f3-xa').value, ya = +$('f3-ya').value, xb = +$('f3-xb').value, yb = +$('f3-yb').value, xp = +$('f3-xp').value, yp = +$('f3-yp').value, svg = $('f3-s'), P = plano(svg, -10, 10, -8, 8, 360, 150, 2); if(xa === xb){ $('f3-h').textContent = 'Escolha pontos com x diferentes (reta não vertical).'; return; }
    var a = (yb - ya) / (xb - xa), b = ya - a * xa, f = function(x){ return a * x + b; }, cl = function(y){ return Math.max(-8, Math.min(8, y)); };
    el('polygon', {points: [[-10, -8], [10, -8], [10, cl(f(10))], [-10, cl(f(-10))]].map(function(p){ return P.sx(p[0]).toFixed(1) + ',' + P.sy(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary)', 'fill-opacity': .13}, svg);
    curva(svg, P, f, -10, 10, -8, 8); ponto(svg, P, xa, ya, 'var(--growth)', 'A'); ponto(svg, P, xb, yb, 'var(--growth)', 'B'); var fp = f(xp), ok = yp <= fp + 1e-9; ponto(svg, P, xp, yp, ok ? 'var(--success)' : 'var(--danger)', 'P'); $('f3-h').textContent = eq(a, b) + ' · em x = ' + xp + ' a reta vale ' + nf(fp, 4) + ' e P tem y = ' + yp + ' → ' + (Math.abs(yp - fp) < 1e-9 ? 'sobre a reta (pertence a R)' : ok ? 'abaixo da reta: PERTENCE a R' : 'acima da reta: NÃO pertence a R'); });
  bind(['f4-a', 'f4-b', 'f4-c', 'f4-d', 'f4-x'], function(){ var a = +$('f4-a').value, b = +$('f4-b').value, c = +$('f4-c').value, d = +$('f4-d').value, x = +$('f4-x').value; var gx = c * x + d, fx = a * x + b; $('f4-r').textContent = 'f(g(' + x + ')) = f(' + gx + ') = ' + (a * gx + b) + ' · g(f(' + x + ')) = g(' + fx + ') = ' + (c * fx + d); $('f4-h').textContent = (a ? 'Inversa de f: f⁻¹(y) = (y − ' + b + ')/' + a + ' → f⁻¹(' + fx + ') = ' + x : 'f é constante: não tem inversa.') + ' · f∘g ' + ((a * gx + b) === (c * fx + d) ? '=' : '≠') + ' g∘f neste ponto.'; });`
}) });

// ====================== AULA 2: função quadrática ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 7 · Aula 2', h1: 'Função quadrática: <span style="color:var(--growth);">vértice, raízes e otimização</span>',
  sub: 'A ficha completa da parábola, mínimo e máximo restritos aos inteiros, reta × parábola, leitura de gráficos e os problemas clássicos de máximo.',
  badges: [['ENA 2026 Q2, Q14'], ['ENA 2025 Q4, Q16'], ['x_v = −b/2a', 'growth']], color: 'growth'
}));
b.push(roteiroSlide('Tudo o que a parábola “conta” em uma ficha.', [
  ['Ficha da parábola', 'c, concavidade, Δ, vértice, eixo, formas', 'chart'],
  ['Lei por raízes', 'a(x − x₁)(x − x₂) e um ponto', 'link'],
  ['Mínimo restrito aos inteiros', 'ENA 2025 Q16', 'target'],
  ['Reta × parábola', 'igualar → Δ (ENA 2026 Q14)', 'scale'],
  ['Leitura de gráficos', 'ENA 2025 Q4', 'bulb'],
  ['Otimização clássica', 'soma fixa, perímetro fixo, vértice', 'up']
]));
b.push(objetivosSlide([
  'Calcular <strong>vértice</strong>, <strong>raízes</strong>, interseção com os eixos e concavidade de $y = ax^2 + bx + c$.',
  'Escrever a lei de uma parábola a partir das <strong>raízes</strong> e de um ponto.',
  'Achar <strong>mínimos e máximos</strong>, inclusive restritos aos inteiros.',
  'Resolver <strong>reta × parábola</strong> e ler gráficos para descobrir as expressões.'
], 'Em prova', 'Quadrática no ENA quase sempre é: $f(0) = c$, vértice ou $Δ = 0$ (tangência). Tenha a ficha na ponta da língua.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O menor valor de x² − 6x + 5', `
          ${lede('Em vez de tentar valores, use o <strong>vértice</strong>: o ponto mais baixo (ou alto) da parábola.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O vértice de $f(x) = x^2 − 6x + 5$ é:', ['$(3, −4)$', '$(−3, 4)$', '$(3, 4)$', '$(6, 5)$'], 0, '$x_v = −{b|2a} = {6|2} = 3$ e $y_v = f(3) = 9 − 18 + 5 = −4$. Como $a > 0$, é um <strong>mínimo</strong>: o valor mínimo é $−4$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">O vértice é o <strong>ponto médio das raízes</strong> e fica sobre o eixo de simetria $x = x_v$. Ele responde “qual o maior (ou menor) valor?”.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · ficha da parábola', 'Tudo sobre y = ax² + bx + c', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.92rem;line-height:1.6;">
                <li>$c = f(0)$: ordenada onde corta o eixo $y$. $f(1) = a + b + c$ · $f(−1) = a − b + c$.</li>
                <li>$a > 0$: concavidade para cima (mínimo); $a < 0$: para baixo (máximo).</li>
                <li>$Δ = b^2 − 4ac$ define quantas raízes reais: $Δ > 0$ (2), $Δ = 0$ (1), $Δ < 0$ (0).</li>
                <li>Vértice: $x_v = −{b|2a}$ (média das raízes), $y_v = −{Δ|4a} = f(x_v)$.</li>
                <li>Formas: canônica $a(x − x_v)^2 + y_v$; fatorada $a(x − x_1)(x − x_2)$. $S = −b/a$, $P = c/a$.</li>
              </ul>
            </div>
            ${W.box('Explorador da parábola', W.rg('g1-a', 'a', -3, 3, 0.5, 1) + W.rg('g1-b', 'b', -8, 8, 1, -2) + W.rg('g1-c', 'c', -10, 10, 1, -3) + W.svg('g1-s', '0 0 360 230') + W.hint('g1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Lei da parábola', 'Raízes + um ponto determinam a lei', `
          <div class="grid2">
            <div>
              ${lede('Se as raízes são $r$ e $s$, então $f(x) = a(x − r)(x − s)$. Um ponto qualquer fixa o valor de $a$.')}
              ${callout('Treino 7.6', 'Raízes $−1$ e $3$, passa por $(0, −3)$: $f(0) = a(1)(−3) = −3a = −3 ⇒ a = 1$. Então $f(x) = x^2 − 2x − 3$.', 'success')}
            </div>
            ${W.box('Parábola pelas raízes', W.row(W.nm('g2-r', 'raiz r', -1), W.nm('g2-s', 'raiz s', 3)) + W.row(W.nm('g2-x', 'ponto: x', 0), W.nm('g2-y', 'ponto: y', -3)) + W.txt('g2-t', 'Lei: ') + W.txt('g2-v', 'Vértice: ') + W.hint('g2-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q2', 'A parábola que passa por (2, 6)',
  'A parábola $y = ax^2 + bx + c$ passa pelo ponto $(2, 6)$. A ordenada do ponto onde ela corta o eixo vertical é $2$. Qual o valor de $2a + b + c$?',
  ['2', '3', '4', '5', '6'], 2,
  '$c = f(0) = 2$. $f(2) = 4a + 2b + c = 6 ⇒ 4a + 2b = 4 ⇒ 2a + b = 2$. Então $2a + b + c = 2 + 2 = 4$. <strong>Alternativa C.</strong>'));

b.push(sl('Mínimo restrito aos inteiros', 'O vértice cai num meio-inteiro? Compare os vizinhos', `
          ${lede('Se $n$ só pode ser inteiro e o vértice está em $12,5$, os inteiros mais próximos ($12$ e $13$) <strong>empatam</strong>. Se o vértice é inteiro, é ele; se não, teste os dois vizinhos.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Mínimo de n² + bn + c com n inteiro', W.row(W.nm('g3-b', 'b', -25), W.nm('g3-c', 'c', 0)) + W.txt('g3-v', 'Vértice: ') + W.txt('g3-n', 'Inteiros vizinhos: ') + W.out('g3-m', '1.4rem') + W.hint('g3-h'))}
            ${callout('Treino 7.4', '$n^2 − 9n$: vértice $4,5$; $n = 4$ ou $5$ → $16 − 36 = −20$. O mínimo inteiro é <strong>−20</strong> (o mínimo real, em $4,5$, seria $−20,25$).', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q16', 'O menor elemento do conjunto',
  'O menor elemento do conjunto $\\{n^2 − 25n ∣ n$ inteiro$\\}$ é:',
  ['$−169$', '$−160$', '$−156$', '$−150$', '$−144$'], 2,
  'Vértice em $x = 12,5$; inteiros $12$ e $13$: $12·(−13) = −156$ e $13·(−12) = −156$. O mínimo real $−156,25$ não é atingido por inteiros. <strong>Alternativa C — $−156$.</strong>'));

b.push(sl('Reta × parábola', 'Iguale as expressões: o Δ responde', `
          ${lede('Igualando $f(x) = g(x)$ obtemos uma equação do 2º grau: $Δ > 0$ → dois pontos; <strong>$Δ = 0$ → um único ponto (tangência)</strong>; $Δ < 0$ → nenhum.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('y = x² − 1 e y = mx − 4', W.rg('g4-m', 'm', 0, 8, 0.01, 3.46) + W.svg('g4-s', '0 0 360 230') + W.hint('g4-h'))}
            ${callout('ENA 2026 Q14', '$x^2 − 1 = mx − 4 ⇒ x^2 − mx + 3 = 0$; ponto único ⇒ $Δ = m^2 − 12 = 0 ⇒ m = 2√3$ (com $m > 0$). A reta $y = 2√3·x − 4$ corta o eixo $x$ em $x = {4|2√3} = {2√3|3}$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q14', 'Tangência e raiz de g',
  'Os gráficos de $f(x) = x^2 − 1$ e $g(x) = mx − 4$, com $m > 0$, intersectam-se em um <strong>único</strong> ponto. Em que $x$ o gráfico de $g$ corta o eixo das abscissas?',
  ['$√3$', '$√3/3$', '$2/3$', '${2√3|3}$', '$4/3$'], 3,
  '$x^2 − 1 = mx − 4 ⇒ x^2 − mx + 3 = 0$; ponto único ⇒ $Δ = m^2 − 12 = 0 ⇒ m = 2√3$. $g(x) = 0 ⇒ x = {4|m} = {4|2√3} = {2√3|3}$. <strong>Alternativa D.</strong>'));

b.push(ja('ENA 2025 · Q4', 'Leitura de gráfico: reta e parábola',
  'Reta crescente e parábola com concavidade para baixo e uma raiz positiva se cortam em $(−4, 0)$ e $(0, 4)$. Quais as expressões da <strong>parábola</strong> e da <strong>reta</strong>? (alternativas de treino)',
  ['$y = −x^2 − 3x + 4$ e $y = x − 4$', '$y = −x^2 + 3x + 4$ e $y = x + 4$', '$y = x^2 + 3x + 4$ e $y = x + 4$', '$y = −x^2 − 3x + 4$ e $y = −x + 4$', '$y = −x^2 − 3x + 4$ e $y = x + 4$'], 4,
  'A reta por $(−4, 0)$ e $(0, 4)$ é $y = x + 4$ (crescente ✓). Iguale: $−x^2 − 3x + 4 = x + 4 ⇒ x^2 + 4x = 0 ⇒ x = 0$ ou $x = −4$ ✓. A parábola $−(x + 4)(x − 1)$ tem raízes $−4$ e $1$ (uma positiva) e concavidade para baixo ✓. <strong>Alternativa E.</strong>'));

b.push(sl('Otimização', 'Problemas clássicos de máximo e mínimo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.7;">
                <li>Soma fixa $x + y = S$ → produto $xy$ máximo quando $x = y = S/2$.</li>
                <li>Perímetro fixo → a <strong>maior área</strong> do retângulo é a do quadrado.</li>
                <li>Qualquer “lucro/área/altura” quadrática: <strong>vértice</strong>.</li>
                <li>Triângulo retângulo inscrito em círculo de raio $r$: área máxima $r^2$ (capítulo 12).</li>
              </ul>
              ${callout('Treino 7.3', 'Dois números somam 20: $x(20 − x)$ é máximo em $x = 10$ → <strong>100</strong>.', 'success')}
            </div>
            ${W.box('Retângulo de perímetro P', W.nm('g5-p', 'Perímetro P', 20, 2, 'min="4"') + W.rg('g5-x', 'lado x', 1, 19, 0.5, 6) + W.svg('g5-s', '0 0 360 200') + W.hint('g5-h'))}
          </div>`, { cls: 'growth' }));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em quadráticas', [
  ['Vértice não inteiro', 'Se pedem valor mínimo com $n$ inteiro e $x_v = 12,5$, teste $12$ e $13$ — não use $f(12,5)$.'],
  ['Esquecer $m > 0$', 'Em $m^2 = 12$ há duas soluções; o enunciado pode restringir o sinal de $m$.'],
  ['Confundir $c$ com raiz', '$c = f(0)$ é onde corta o eixo $y$; as raízes são onde corta o eixo $x$.'],
  ['Máximo × mínimo', '$a < 0$ → <strong>máximo</strong>; $a > 0$ → <strong>mínimo</strong>. O vértice dá o valor extremo em ambos os casos.']
]));

b.push(quiz([
  { q: 'O valor mínimo de $f(x) = x^2 − 6x + 5$ é:', o: ['−4', '−3', '3', '5'], a: 0 },
  { q: 'O menor valor de $n^2 − 9n$ com $n$ inteiro é:', o: ['−20,25', '−20', '−18', '−16'], a: 1 },
  { q: 'Para que $f(x) = x^2 − 4x + k$ tenha raiz dupla, $k$ deve ser:', o: ['2', '4', '−4', '8'], a: 1 },
  { q: 'Dois números reais somam 20. O maior produto possível é:', o: ['75', '96', '99', '100'], a: 3 }
]));
b.push(fechamento([
  ['Vértice', '$x_v = −b/2a$ e $y_v = f(x_v)$; extremo da função.'],
  ['Inteiros', 'Se $x_v$ não é inteiro, compare os dois inteiros vizinhos.'],
  ['Tangência', 'Reta × parábola com um ponto: $Δ = 0$ ao igualar.']
], 'A parábola guarda tudo em c, Δ e no vértice.'));

out.push({ out: DIR + 'aula-2-funcao-quadratica-otimizacao.html', html: K.deck({
  title: 'Função quadrática: vértice, raízes e otimização — ENA · PROFMAT', brand: 'Funções', key: 'c7a2', meta: 'Capítulo 7 · Aula 2 · Função quadrática', slides: b,
  extra: WJS + BIND + String.raw`
  function raizes(a, b, c){ var D = b * b - 4 * a * c; if(D < 0) return [D, []]; var s = Math.sqrt(D); return [D, D === 0 ? [-b / (2 * a)] : [(-b - s) / (2 * a), (-b + s) / (2 * a)].sort(function(x, y){ return x - y; })]; }
  bind(['g1-a', 'g1-b', 'g1-c'], function(){ var a = +$('g1-a').value || 1, b = +$('g1-b').value, c = +$('g1-c').value; $('g1-av').textContent = a; $('g1-bv').textContent = b; $('g1-cv').textContent = c; var svg = $('g1-s'), P = plano(svg, -8, 8, -20, 20, 360, 230, 4), f = function(x){ return a * x * x + b * x + c; }; curva(svg, P, f, -8, 8, -20, 20); var xv = -b / (2 * a), yv = f(xv), r = raizes(a, b, c); if(Math.abs(xv) <= 8 && Math.abs(yv) <= 20) ponto(svg, P, xv, yv, 'var(--growth)', 'V'); r[1].forEach(function(x){ if(Math.abs(x) <= 8) ponto(svg, P, x, 0, 'var(--decay)'); }); if(Math.abs(c) <= 20) ponto(svg, P, 0, c, 'var(--success)', 'c'); $('g1-h').textContent = 'Δ = ' + (b * b - 4 * a * c) + ' · vértice (' + nf(xv, 3) + '; ' + nf(yv, 3) + ') · ' + (a > 0 ? 'mínimo' : 'máximo') + ' ' + nf(yv, 3) + ' · raízes: ' + (r[1].length ? r[1].map(function(x){ return nf(x, 3); }).join(' e ') : 'nenhuma real') + ' · f(0) = ' + c; });
  bind(['g2-r', 'g2-s', 'g2-x', 'g2-y'], function(){ var r = +$('g2-r').value, s = +$('g2-s').value, x = +$('g2-x').value, y = +$('g2-y').value, d = (x - r) * (x - s); if(!d){ $('g2-t').textContent = '—'; $('g2-v').textContent = ''; $('g2-h').textContent = 'O ponto não pode ser uma das raízes.'; return; } var a = y / d, b = -a * (r + s), c = a * r * s; $('g2-t').textContent = 'f(x) = ' + nf(a, 4) + '(x − ' + r + ')(x − ' + s + ') = ' + nf(a, 4) + 'x² + ' + nf(b, 4) + 'x + ' + nf(c, 4); var xv = (r + s) / 2; $('g2-v').textContent = '(' + nf(xv, 3) + '; ' + nf(a * (xv - r) * (xv - s), 3) + ')'; $('g2-h').textContent = 'a = ' + y + ' / [(' + x + ' − ' + r + ')(' + x + ' − ' + s + ')] = ' + nf(a, 4); });
  bind(['g3-b', 'g3-c'], function(){ var b = +$('g3-b').value, c = +$('g3-c').value, xv = -b / 2, lo = Math.floor(xv), hi = Math.ceil(xv); function f(n){ return n * n + b * n + c; } $('g3-v').textContent = nf(xv, 3); $('g3-n').textContent = lo === hi ? lo + ' (vértice inteiro)' : lo + ' e ' + hi; var m = Math.min(f(lo), f(hi)); $('g3-m').textContent = 'mínimo inteiro = ' + m; $('g3-h').textContent = 'f(' + lo + ') = ' + f(lo) + ' · f(' + hi + ') = ' + f(hi) + ' · mínimo real em ' + nf(xv, 3) + ' vale ' + nf(f(xv), 4) + (lo === hi ? '' : ' (não é atingido por inteiros)'); });
  bind(['g4-m'], function(){ var m = +$('g4-m').value; $('g4-mv').textContent = nf(m, 2); var svg = $('g4-s'), P = plano(svg, -4, 6, -8, 12, 360, 230, 2); curva(svg, P, function(x){ return x * x - 1; }, -4, 6, -8, 12, 'var(--primary)'); curva(svg, P, function(x){ return m * x - 4; }, -4, 6, -8, 12, 'var(--growth)'); var D = m * m - 12; if(D >= 0){ var x1 = (m - Math.sqrt(D)) / 2, x2 = (m + Math.sqrt(D)) / 2; ponto(svg, P, x1, x1 * x1 - 1, 'var(--success)'); if(Math.abs(D) > 1e-9) ponto(svg, P, x2, x2 * x2 - 1, 'var(--success)'); } $('g4-h').textContent = 'Δ = m² − 12 = ' + nf(D, 4) + ' → ' + (Math.abs(D) < 0.05 ? 'quase tangente (m = 2√3 ≈ 3,464 dá Δ = 0)' : D > 0 ? 'dois pontos de interseção' : 'nenhum ponto de interseção'); });
  bind(['g5-p', 'g5-x'], function(){ var P0 = Math.max(4, +$('g5-p').value || 20), half = P0 / 2, x = +$('g5-x').value; $('g5-x').max = half - 0.5; if(x > half - 0.5){ x = half - 0.5; $('g5-x').value = x; } $('g5-xv').textContent = x; var svg = $('g5-s'), Pn = plano(svg, 0, half, 0, half * half / 4 * 1.15, 360, 200, 0), A = function(t){ return t * (half - t); }; curva(svg, Pn, A, 0, half, 0, half * half / 4 * 1.15); ponto(svg, Pn, x, A(x), 'var(--growth)'); ponto(svg, Pn, half / 2, half * half / 4, 'var(--success)', 'máx'); $('g5-h').textContent = 'Lados ' + x + ' e ' + nf(half - x, 2) + ' → área ' + nf(A(x), 3) + ' · máxima: quadrado de lado ' + nf(half / 2, 2) + ' (área ' + nf(half * half / 4, 3) + ').'; });`
}) });

module.exports = out;
