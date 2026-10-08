// Unidade 6 — Equações, inequações e sistemas (capítulo 6)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/06-equacoes-inequacoes-sistemas/';
const out = [];

// ====================== AULA 1: 2º grau, Girard, sinal ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 6 · Aula 1', h1: 'Equação do 2º grau, <span style="color:var(--primary);">Girard e sinal</span>',
  sub: 'Discriminante, soma e produto das raízes sem resolver a equação, forma fatorada e como estudar o sinal de uma quadrática — a base das inequações do ENA.',
  badges: [['6 questões em 60'], ['S = −b/a · P = c/a', 'growth'], ['f > 0 fora das raízes', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do Δ à tabela de sinais: três ferramentas para uma família de questões.', [
  ['Bhaskara e o discriminante', 'quantas raízes? quais?', 'scale'],
  ['Relações de Girard', 'soma e produto sem resolver', 'bulb'],
  ['Forma fatorada', 'a(x − x₁)(x − x₂) e equação com raízes dadas', 'link'],
  ['Sinal da quadrática', 'onde f é positiva ou negativa', 'chart'],
  ['Inequação-quociente', 'tabela de sinais (nunca multiplicar “cruzado”)', 'warn'],
  ['Questões que já caíram', 'ENA 2026 Q5 · ENA 2025 Q22', 'target']
]));
a.push(objetivosSlide([
  'Resolver $ax^2 + bx + c = 0$ e interpretar o <strong>discriminante</strong> Δ.',
  'Usar <strong>Girard</strong> ($S = −b/a$, $P = c/a$) para calcular expressões simétricas das raízes.',
  'Estudar o <strong>sinal</strong> de uma função quadrática e resolver inequações.',
  'Montar a <strong>tabela de sinais</strong> de um quociente sem multiplicar “em cruz”.'
], 'Em prova', 'Se pedem só a soma, o produto ou a soma dos quadrados das raízes, <strong>não resolva</strong> a equação: use Girard.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Soma das raízes sem achar as raízes', `
          ${lede('A equação $2x^2 − 6x + 4 = 0$ tem duas raízes. Sem resolver, qual é a <strong>soma</strong> delas?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A soma das raízes de $2x^2 − 6x + 4 = 0$ é:', ['2', '3', '−3', '6'], 1, 'Girard: $S = −{b|a} = −{−6|2} = 3$. De fato, as raízes são $1$ e $2$ (soma 3, produto 2 $= c/a = 4/2$).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Os coeficientes <strong>já contêm</strong> a soma e o produto das raízes. Quase toda questão de “raízes” do ENA se resolve só com $S$ e $P$.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · Bhaskara', 'Discriminante: quantas raízes reais?', `
          <div class="grid2">
            <div>
              ${F('Δ = b^2 − 4ac   x = {−b ± √Δ|2a}', true)}
              ${tbl(['Δ', 'Raízes reais'], [['$Δ > 0$', 'duas, distintas'], ['$Δ = 0$', 'uma (raiz dupla): tangência'], ['$Δ < 0$', 'nenhuma']])}
              ${callout('Tangência', 'Reta e parábola se tocam em <strong>um</strong> ponto quando, ao igualar, obtém-se $Δ = 0$ (ENA 2026 Q14).', 'success')}
            </div>
            ${W.box('Resolva ax² + bx + c = 0', W.row(W.nm('q1-a', 'a', 1, 1), W.nm('q1-b', 'b', -7, 1), W.nm('q1-c', 'c', 10, 1)) + W.txt('q1-d', 'Δ = ') + W.txt('q1-x', 'Raízes: ') + W.txt('q1-g', 'Soma e produto: ') + W.hint('q1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · Girard', 'Soma e produto das raízes — e tudo o que decorre deles', `
          ${lede('Se $x_1, x_2$ são as raízes de $ax^2 + bx + c = 0$, então:')}
          ${F('S = x_1 + x_2 = −{b|a}   P = x_1 x_2 = {c|a}', true)}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('x_1^2 + x_2^2 = S^2 − 2P')}
              ${F('{1|x_1} + {1|x_2} = {S|P}')}
              ${F('(x_1 − x_2)^2 = S^2 − 4P')}
              ${F('x_1^3 + x_2^3 = S^3 − 3PS')}
              ${callout('Montar a equação', 'Com raízes $r$ e $s$: $x^2 − (r + s)x + rs = 0$. Forma fatorada: $a(x − x_1)(x − x_2)$.', 'success')}
            </div>
            ${W.box('Girard em ação', W.row(W.nm('q2-a', 'a', 2), W.nm('q2-b', 'b', -6), W.nm('q2-c', 'c', 4)) + W.txt('q2-s', 'S = −b/a = ') + W.txt('q2-p', 'P = c/a = ') + W.txt('q2-q', 'x₁² + x₂² = ') + W.txt('q2-i', '1/x₁ + 1/x₂ = ') + W.txt('q2-k', 'x₁³ + x₂³ = ') + W.hint('q2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Treino 6.3', 'Soma, produto e soma dos quadrados — sem resolver', 'Para $2x^2 − 6x + 4 = 0$, dê a soma, o produto e a soma dos quadrados das raízes.', [
  ['Soma', '$S = −{−6|2} = 3$'],
  ['Produto', '$P = {4|2} = 2$'],
  ['Soma dos quadrados', '$S^2 − 2P = 9 − 4 = 5$']
], 'Confirmação: as raízes são $1$ e $2$, e $1 + 4 = 5$ ✓. Só falta conferir que $Δ > 0$ e que as raízes são <strong>válidas</strong> no contexto.', 'growth'));

a.push(sl('Teoria · sinal da quadrática', 'Onde f(x) = ax² + bx + c é positiva?', `
          <div class="grid2">
            <div>
              ${tbl(['Caso', 'Sinal'], [['$a > 0$, raízes $x_1 < x_2$', '$f > 0$ <strong>fora</strong> das raízes; $f < 0$ <strong>entre</strong> elas'], ['$a < 0$, raízes $x_1 < x_2$', 'o contrário'], ['$Δ < 0$', '$f$ tem sempre o sinal de $a$'], ['$Δ = 0$', '$f$ tem o sinal de $a$ (exceto na raiz, onde é 0)']])}
              ${callout('Exemplo', '$x^2 + 6x − 16 = (x − 2)(x + 8) < 0 ⇔ −8 < x < 2$.', 'success')}
            </div>
            ${W.box('Parábola e sinal', W.rg('q3-a', 'a', -3, 3, 1, 1) + W.rg('q3-b', 'b', -8, 8, 1, 6) + W.rg('q3-c', 'c', -20, 20, 1, -16) + W.svg('q3-s', '0 0 360 220') + W.hint('q3-h'))}
          </div>`, { cls: '' }));

a.push(ja('ENA 2026 · Q5', 'Quantos inteiros satisfazem x² + 6x − 16 < 0?',
  'Quantos elementos tem $A = \\{x ∈ Z ∣ x^2 + 6x − 16 < 0\\}$?',
  ['7', '8', '9', '10', '11'], 2,
  '$x^2 + 6x − 16 = (x − 2)(x + 8) < 0 ⇔ −8 < x < 2$ (entre as raízes, pois $a > 0$). Inteiros: $−7, −6, …, 1$ → $1 − (−7) + 1 = 9$. <strong>Alternativa C.</strong>'));

a.push(sl('Teoria · inequações de 1º grau', 'Equivalência de desigualdades (ENA 2025 Q22)', `
          ${lede('Somar o mesmo número aos dois lados mantém o sentido; multiplicar por positivo mantém; por <strong>negativo inverte</strong>. Com isso, reescreva a desigualdade até reconhecer a alternativa.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Q22 (2025)', '${x + y|2} > y ⇔ x + y > 2y ⇔ x > y$. Em palavras: a média está acima de $y$ ⇔ $y$ é o menor ⇔ a média está <strong>abaixo</strong> de $x$: ${x + y|2} < x$.', 'success')}
            ${mini('Qual desigualdade é equivalente a ${x + y|2} > y$?', ['$x < y$', '$y − x > 0$', '$−x > y$', '${x + y|2} < x$', '${x + y|2} > x$'], 3, '${x + y|2} > y ⇔ x > y$. Só a alternativa D diz o mesmo: ${x + y|2} < x ⇔ x + y < 2x ⇔ y < x$. <strong>Alternativa D.</strong>')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · quociente', 'Inequação-quociente: tabela de sinais', `
          ${lede('${f|g} > 0 ⇔ f·g > 0$ e $g ≠ 0$. Passe tudo para um lado, ponha sobre denominador comum, fatore e estude o sinal de <strong>cada fator</strong> numa reta. Para $≥$, inclua os zeros de $f$, <strong>nunca</strong> os de $g$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('(x − p) / (x − q) com sinal escolhido', W.row(W.nm('q4-p', 'p', -1), W.nm('q4-q', 'q', 2), W.sel('q4-o', 'Condição', ['> 0', '≥ 0', '< 0', '≤ 0'], 1)) + '<div id="q4-r" style="margin-top:10px;font-weight:700;"></div>' + W.hint('q4-h'))}
            ${callout('Nunca faça isto', 'Multiplicar “em cruz” ${x − 1|x + 2} < x ⇒ x − 1 < x(x + 2)$ sem saber o sinal de $x + 2$: se $x + 2 < 0$ a desigualdade <strong>inverte</strong>. Passe $x$ para o outro lado e compare com zero.', 'danger')}
          </div>`, { cls: '' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em equações do 2º grau e inequações', [
  ['Resolver sem necessidade', 'Pediram soma/produto/soma dos quadrados? Use Girard. Só confirme que $Δ > 0$ e que as raízes valem no problema.'],
  ['Esquecer o sentido da parábola', 'Com $a < 0$, $f > 0$ <strong>entre</strong> as raízes. Olhe o sinal de $a$ antes de ler o intervalo.'],
  ['Multiplicar por expressão de sinal desconhecido', 'Em quocientes, passe tudo para um lado e use tabela de sinais; nunca “em cruz”.'],
  ['Contar mal os inteiros', 'Em $−8 < x < 2$ <strong>não</strong> entram $−8$ nem $2$: de $−7$ a $1$ são 9 inteiros.']
]));

a.push(quiz([
  { q: 'Sem resolver, a soma dos quadrados das raízes de $x^2 − 6x + 4 = 0$ é:', o: ['20', '24', '28', '32', '36'], a: 2 },
  { q: 'Quantos inteiros satisfazem $x^2 − 4x − 12 < 0$?', o: ['5', '6', '7', '8', '9'], a: 2 },
  { q: 'Para que $x^2 + kx + 9 = 0$ tenha raiz dupla (com $k > 0$), $k$ vale:', o: ['3', '6', '9', '18'], a: 1 },
  { q: 'O conjunto-solução de $x^2 − 5x + 6 < 0$ é:', o: ['$x < 2$ ou $x > 3$', '$2 < x < 3$', '$x < 3$', '$x > 2$'], a: 1 }
]));
a.push(fechamento([
  ['Δ e raízes', '$Δ > 0$: duas; $Δ = 0$: uma; $Δ < 0$: nenhuma. Tangência ⇒ $Δ = 0$.'],
  ['Girard', '$S = −b/a$, $P = c/a$; $x_1^2 + x_2^2 = S^2 − 2P$.'],
  ['Sinal', '$a > 0$: positiva fora das raízes. Quociente: tabela de sinais.']
], 'Antes de resolver, pergunte se Girard ou o sinal já bastam.'));

out.push({ out: DIR + 'aula-1-segundo-grau-girard-sinal.html', html: K.deck({
  title: 'Equação do 2º grau, Girard e sinal — ENA · PROFMAT', brand: 'Equações', key: 'c6a1', meta: 'Capítulo 6 · Aula 1 · 2º grau e sinal', slides: a,
  extra: WJS + BIND + String.raw`
  function raizes(a, b, c){ var D = b * b - 4 * a * c; if(D < 0) return [D, []]; var s = Math.sqrt(D); return [D, D === 0 ? [-b / (2 * a)] : [(-b - s) / (2 * a), (-b + s) / (2 * a)].sort(function(x, y){ return x - y; })]; }
  bind(['q1-a', 'q1-b', 'q1-c'], function(){ var a = +$('q1-a').value, b = +$('q1-b').value, c = +$('q1-c').value; if(!a){ $('q1-d').textContent = '—'; $('q1-x').textContent = 'a não pode ser 0'; return; } var r = raizes(a, b, c); $('q1-d').textContent = r[0] + (r[0] > 0 ? ' (duas raízes)' : r[0] === 0 ? ' (raiz dupla)' : ' (sem raízes reais)'); $('q1-x').textContent = r[1].length ? r[1].map(function(x){ return nf(x, 4); }).join(' e ') : 'nenhuma real'; $('q1-g').textContent = 'S = ' + nf(-b / a, 4) + ' · P = ' + nf(c / a, 4); $('q1-h').textContent = 'Vértice em x = ' + nf(-b / (2 * a), 3) + ' · ' + (a > 0 ? 'concavidade para cima (mínimo)' : 'concavidade para baixo (máximo)'); });
  bind(['q2-a', 'q2-b', 'q2-c'], function(){ var a = +$('q2-a').value, b = +$('q2-b').value, c = +$('q2-c').value; if(!a) return; var S = -b / a, P = c / a; $('q2-s').textContent = nf(S, 4); $('q2-p').textContent = nf(P, 4); $('q2-q').textContent = nf(S * S - 2 * P, 4); $('q2-i').textContent = P ? nf(S / P, 4) : '— (P = 0)'; $('q2-k').textContent = nf(S * S * S - 3 * P * S, 4); var r = raizes(a, b, c); $('q2-h').textContent = r[1].length === 2 ? 'Conferência com as raízes ' + nf(r[1][0], 3) + ' e ' + nf(r[1][1], 3) + ': x₁² + x₂² = ' + nf(r[1][0] * r[1][0] + r[1][1] * r[1][1], 4) : r[0] < 0 ? 'Δ < 0: raízes complexas (as fórmulas de Girard ainda valem, mas não há raízes reais).' : 'Raiz dupla.'; });
  bind(['q3-a', 'q3-b', 'q3-c'], function(){ var a = +$('q3-a').value || 1, b = +$('q3-b').value, c = +$('q3-c').value; $('q3-av').textContent = a; $('q3-bv').textContent = b; $('q3-cv').textContent = c; var svg = $('q3-s'), P = plano(svg, -10, 10, -25, 25, 360, 220, 5), f = function(x){ return a * x * x + b * x + c; }; curva(svg, P, f, -10, 10, -25, 25); var r = raizes(a, b, c);
    function seg(x1, x2, ok){ el('line', {x1: P.sx(x1), y1: P.sy(0), x2: P.sx(x2), y2: P.sy(0), stroke: ok ? 'var(--success)' : 'var(--danger)', 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-opacity': .85}, svg); }
    if(r[1].length === 2){ var x1 = r[1][0], x2 = r[1][1], pos = a > 0, k1 = Math.max(-10, Math.min(10, x1)), k2 = Math.max(-10, Math.min(10, x2)); seg(-10, k1, pos); seg(k1, k2, !pos); seg(k2, 10, pos); ponto(svg, P, x1, 0, 'var(--growth)'); ponto(svg, P, x2, 0, 'var(--growth)'); $('q3-h').textContent = 'Raízes ' + nf(x1, 2) + ' e ' + nf(x2, 2) + ' · verde: f > 0 · vermelho: f < 0 · f > 0 ' + (pos ? 'fora' : 'entre') + ' das raízes.'; }
    else if(r[1].length === 1){ seg(-10, 10, a > 0); $('q3-h').textContent = 'Raiz dupla em x = ' + nf(r[1][0], 2) + ': f tem o sinal de a, exceto na raiz.'; ponto(svg, P, r[1][0], 0, 'var(--growth)'); }
    else { seg(-10, 10, a > 0); $('q3-h').textContent = 'Δ < 0: sem raízes reais — f tem sempre o sinal de a (' + (a > 0 ? 'positiva' : 'negativa') + ').'; } });
  bind(['q4-p', 'q4-q', 'q4-o'], function(){ var p = +$('q4-p').value, q = +$('q4-q').value, o = +$('q4-o').value; var strict = o === 0 || o === 2, pos = o === 0 || o === 1, txt;
    if(p === q){ $('q4-r').textContent = 'Com p = q a fração vale 1 (se x ≠ q).'; $('q4-h').textContent = ''; return; }
    var lo = Math.min(p, q), hi = Math.max(p, q), sinalEntre = (p < q) ? -1 : 1; // (x-p)/(x-q): fora das raízes positivo
    // sinal: x < lo e x > hi: positivo; entre: negativo
    var incP = !strict; function cc(v, incl){ return incl ? '[' + v : '(' + v; }
    if(pos){ txt = 'x < ' + lo + ' ou x > ' + hi; var left = '(−∞, ' + lo + (lo === p && incP ? ']' : ')'), right = (hi === p && incP ? '[' : '(') + hi + ', +∞)'; txt = left + ' ∪ ' + right; }
    else { var l = (lo === p && incP ? '[' : '(') + lo, r = hi + (hi === p && incP ? ']' : ')'); txt = l + ', ' + r; }
    $('q4-r').textContent = '(x − ' + p + ')/(x − ' + q + ') ' + ['> 0', '≥ 0', '< 0', '≤ 0'][o] + '  ⇒  ' + txt; $('q4-h').textContent = 'O zero do numerador (x = ' + p + ') ' + (incP ? 'entra' : 'não entra') + '; o zero do denominador (x = ' + q + ') <b>nunca</b> entra.'.replace(/<\/?b>/g, ''); });`
}) });

// ====================== AULA 2: fracionária, modular, irracional, sistemas ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 6 · Aula 2', h1: 'Fracionárias, modulares, <span style="color:var(--growth);">irracionais e sistemas</span>',
  sub: 'Cada questão tem uma “pegadinha”: condição de existência, sinal ou raiz estranha. Aprenda o método de cada tipo e a conferência que evita o erro.',
  badges: [['ENA 2026 Q7, Q9, Q15, Q28'], ['Raiz estranha ✘', 'danger'], ['Cramer', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Cinco tipos de equação, um hábito: conferir.', [
  ['Equação fracionária', 'condição de existência e MMC (ENA 2026 Q15)', 'scale'],
  ['Inequação fracionária', 'passar tudo para um lado (ENA 2026 Q7)', 'chart'],
  ['Equação modular', '|f| = g ⇔ g ≥ 0 e f = ±g (ENA 2026 Q9)', 'link'],
  ['Equação irracional', 'elevar ao quadrado e testar (ENA 2026 Q28)', 'warn'],
  ['Biquadrada e fatoração', 't = x² e produto nulo', 'bulb'],
  ['Sistemas lineares 2×2', 'soma/subtração e Cramer', 'check']
]));
b.push(objetivosSlide([
  'Escrever a <strong>condição de existência</strong> e descartar raízes que anulam denominadores.',
  'Resolver <strong>equações modulares</strong> exigindo o lado direito não negativo.',
  'Resolver <strong>equações irracionais</strong> e eliminar as <strong>raízes estranhas</strong>.',
  'Resolver <strong>sistemas</strong> por adição/substituição e pela regra de Cramer.'
], 'Em prova', 'Cinco questões do ENA 2026 caem aqui. Em todas, o último passo — conferir na equação original — decide o ponto.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A raiz que não vale', `
          ${lede('Resolva $√{x + 3} = x − 3$. Elevando ao quadrado: $x + 3 = x^2 − 6x + 9$, ou $x^2 − 7x + 6 = 0$, de raízes $x = 1$ e $x = 6$. As duas servem?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quais valores são solução da equação original?', ['$x = 1$ e $x = 6$', 'somente $x = 1$', 'somente $x = 6$', 'nenhum'], 2, 'Teste: $x = 1$: $√4 = 2$, mas $1 − 3 = −2$ ✗ (raiz estranha). $x = 6$: $√9 = 3 = 6 − 3$ ✓. Elevar ao quadrado “perde” o sinal e cria raízes que não valem.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Toda operação que <strong>não é reversível</strong> (elevar ao quadrado, multiplicar por expressão com $x$) pode criar raízes estranhas. <strong>Sempre confira</strong> no enunciado.</p>', 'danger')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · fracionária', 'Equação fracionária: condição de existência e MMC', `
          <div class="grid2">
            <div>
              ${lede('1) Escreva a <strong>condição de existência</strong> (denominadores ≠ 0). 2) Multiplique pelo MMC. 3) Resolva. 4) Descarte raízes que anulam denominador.')}
              ${callout('ENA 2026 Q15', '${4|x + 3} + {2|x − 1} = −1$, com $x ≠ −3, 1$. Multiplicando: $4(x − 1) + 2(x + 3) = −(x + 3)(x − 1) ⇒ x^2 + 8x − 1 = 0$. Girard: $S = −8$, $P = −1$ → $x_1^2 + x_2^2 = S^2 − 2P = 66$.', 'success')}
            </div>
            ${W.box('A/(x+3) + B/(x−1) = C', W.row(W.nm('r1-a', 'A', 4), W.nm('r1-b', 'B', 2), W.nm('r1-c', 'C', -1)) + W.txt('r1-q', 'Equação: ') + W.txt('r1-x', 'Raízes: ') + W.txt('r1-v', 'Válidas (≠ −3, 1)? ') + W.txt('r1-s', 'Soma dos quadrados: ') + W.hint('r1-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q15', 'Soma dos quadrados das soluções',
  'A soma dos quadrados das soluções de ${4|x + 3} + {2|x − 1} = −1$ é igual a:',
  ['50', '62', '66', '68', '70'], 2,
  'Condição: $x ≠ −3$ e $x ≠ 1$. Multiplicando por $(x + 3)(x − 1)$: $6x + 2 = −x^2 − 2x + 3 ⇒ x^2 + 8x − 1 = 0$. $Δ = 68 > 0$ e as raízes não são $−3$ nem $1$ (substituindo: $9 − 24 − 1 ≠ 0$; $1 + 8 − 1 ≠ 0$). Girard: $S = −8$, $P = −1$ → $S^2 − 2P = 64 + 2 = 66$. <strong>Alternativa C.</strong>'));

b.push(ja('ENA 2026 · Q7', 'Inequação-quociente equivalente',
  'Qual alternativa é equivalente a ${x − 1|x + 2} < x$? (A) $x + 2 > 0$ (B) $x + 1 > 0$ (C) $x − 2 > 0$ (D) $x − 3 > 0$ (E) $x − 4 > 0$',
  ['A', 'B', 'C', 'D', 'E'], 0,
  '${x − 1|x + 2} − x < 0 ⇔ {x − 1 − x^2 − 2x|x + 2} < 0 ⇔ {−x^2 − x − 1|x + 2} < 0 ⇔ {x^2 + x + 1|x + 2} > 0$. Como $x^2 + x + 1 > 0$ sempre ($Δ = −3$), o sinal é o de $x + 2$: <strong>$x + 2 > 0$ — alternativa A.</strong>'));

b.push(sl('Teoria · modular', 'Equação modular: g ≥ 0 e f = ±g', `
          <div class="grid2">
            <div>
              ${F('∣f(x)∣ = g(x) ⇔ g(x) ≥ 0   "e"   (f = g "ou" f = −g)', false)}
              ${callout('Exemplo', '$∣2x − 3∣ = 5 ⇒ 2x − 3 = 5$ ou $2x − 3 = −5 ⇒ x = 4$ ou $x = −1$.', 'success')}
              ${callout('Truque (ENA 2026 Q9)', 'Em $∣u∣^3 + 5∣u∣^2 + 6∣u∣ = 0$, fatore: $∣u∣(∣u∣^2 + 5∣u∣ + 6) = 0$. O parêntese é sempre positivo ⇒ $∣u∣ = 0$.')}
            </div>
            ${W.box('|ax + b| = cx + d', W.row(W.nm('r2-a', 'a', 2), W.nm('r2-b', 'b', -6), W.nm('r2-c', 'c', 1), W.nm('r2-d', 'd', 3)) + W.txt('r2-r', 'Candidatas: ') + W.txt('r2-v', 'Soluções válidas: ') + W.hint('r2-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q9', 'Soma de parcelas não negativas',
  'Quantas soluções reais tem ${∣x − 1∣^3 + 5∣x − 1∣^2 + 6∣x − 1∣ = 0}$?',
  ['1', '2', '3', '4', 'infinitas'], 0,
  'Cada parcela é $≥ 0$ (pois $∣x − 1∣ ≥ 0$). Soma zero ⇒ todas são zero ⇒ $∣x − 1∣ = 0 ⇒ x = 1$. <strong>Uma solução — alternativa A.</strong>'));

b.push(sl('Teoria · irracional', 'Equação irracional: isole, eleve, teste', `
          ${lede('1) Isole a raiz. 2) Eleve ao quadrado. 3) Resolva. 4) <strong>Teste</strong> cada raiz na equação original. Condição: radicando $≥ 0$ <strong>e</strong> o lado oposto à raiz $≥ 0$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('√(x + k) = x − m', W.row(W.nm('r3-k', 'k', 3), W.nm('r3-m', 'm', 3)) + W.txt('r3-q', 'Elevando ao quadrado: ') + W.txt('r3-x', 'Candidatas: ') + W.txt('r3-v', 'Teste: ') + W.hint('r3-h'))}
            ${callout('ENA 2026 Q28', '$√{x + 3} = x − 3$ → $x^2 − 7x + 6 = 0$ → $x = 1$ ✗ ($√4 = 2 ≠ −2$) ou $x = 6$ ✓. Única solução: 6, que pertence a $(2, 8)$. Cuidado: em $(1, 6)$ o 6 ficaria de fora (intervalo aberto!).', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q28', 'A raiz que pertence a qual intervalo?',
  'Os valores reais de $x$ que satisfazem $√{x + 3} = x − 3$ pertencem a qual intervalo? (A) $(7, 10)$ (B) $(2, 8)$ (C) $(3, 5)$ (D) $(0, 4)$ (E) $(1, 6)$',
  ['A', 'B', 'C', 'D', 'E'], 1,
  'Elevando ao quadrado: $x^2 − 7x + 6 = 0 ⇒ x = 1$ ou $6$. $x = 1$ dá $√4 = −2$ ✗ (raiz estranha). $x = 6$ dá $3 = 3$ ✓. Única solução: 6, que está em $(2, 8)$. <strong>Alternativa B.</strong>'));

b.push(sl('Outras equações', 'Biquadrada, fatoração e tangência', `
          <div class="grid3" style="margin-top:6px;">
            ${card('<strong>Biquadrada</strong><p style="font-size:.88rem;margin-top:8px;">$ax^4 + bx^2 + c = 0$: faça $t = x^2\\ (t ≥ 0)$. Treino 6.4: $x^4 − 5x^2 + 4 = 0 ⇒ t = 1$ ou $4$ ⇒ $x = ±1, ±2$.</p>', 'growth')}
            ${card('<strong>Fatoração</strong><p style="font-size:.88rem;margin-top:8px;">$x^3 − x = 0 ⇒ x(x − 1)(x + 1) = 0 ⇒ x = 0, 1, −1$. Produto nulo: um fator zero.</p>', 'decay')}
            ${card('<strong>Tangência</strong><p style="font-size:.88rem;margin-top:8px;">Reta e parábola com um único ponto comum: $Δ = 0$ ao igualar. Treino 6.5: $x^2 + kx + 9$ com raiz dupla → $k^2 − 36 = 0 ⇒ k = ±6$.</p>', 'primary')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · sistemas', 'Sistemas lineares 2×2: adição, substituição e Cramer', `
          <div class="grid2">
            <div>
              ${lede('Para $a_1x + b_1y = c_1$ e $a_2x + b_2y = c_2$: $D = a_1b_2 − a_2b_1$, $D_x = c_1b_2 − c_2b_1$, $D_y = a_1c_2 − a_2c_1$.')}
              ${F('x = {D_x|D}   y = {D_y|D}', true)}
              ${callout('Classificação', '$D ≠ 0$: solução única. $D = 0$: sem solução ou infinitas.', 'success')}
              ${callout('Truque (ENA 2026 Q29)', 'Em ${1|2}x − {1|2}y = b$ e ${1|2}x + {1|2}y = a$: somando, $x = a + b$; subtraindo, $y = a − b$.')}
            </div>
            ${W.box('Resolva o sistema', W.row(W.nm('r4-a1', 'a₁', 1), W.nm('r4-b1', 'b₁', 1), W.nm('r4-c1', 'c₁', 10)) + W.row(W.nm('r4-a2', 'a₂', 1), W.nm('r4-b2', 'b₂', -1), W.nm('r4-c2', 'c₂', 4)) + W.txt('r4-d', 'D, Dx, Dy = ') + W.out('r4-r', '1.3rem') + W.hint('r4-h'))}
          </div>`, { cls: 'growth' }));

b.push(armadilhas('Cuidado', 'Onde se perde ponto neste capítulo', [
  ['Esquecer a condição de existência', 'Equação fracionária: $x ≠ −3, 1$. Uma raiz que zera um denominador deve ser descartada.'],
  ['Não testar a raiz estranha', 'Elevar ao quadrado cria raízes. Em $√{x + 3} = x − 3$, $x = 1$ não vale: o lado direito é negativo.'],
  ['Modular sem a condição $g ≥ 0$', '$∣f∣ = g$ exige $g ≥ 0$. Valores que dão $g < 0$ não servem.'],
  ['Intervalo aberto × fechado', 'O 6 está em $(2, 8)$ mas <strong>não</strong> em $(1, 6)$. Leia os parênteses das alternativas.']
]));

b.push(quiz([
  { q: 'As soluções de $x^4 − 5x^2 + 4 = 0$ são:', o: ['$±1$ e $±2$', '$1$ e $4$', '$±1$ e $±4$', '$2$ e $4$'], a: 0 },
  { q: 'A equação $√{2x + 1} = x − 1$ tem como solução:', o: ['$x = 0$', '$x = 4$', '$x = 0$ e $x = 4$', 'nenhuma'], a: 1 },
  { q: 'O sistema $x + y = 10$, $x − y = 4$ tem solução $(x, y)$ igual a:', o: ['$(6, 4)$', '$(7, 3)$', '$(8, 2)$', '$(5, 5)$'], a: 1 },
  { q: 'Quantas soluções reais tem $∣x − 2∣ = −1$?', o: ['0', '1', '2', 'infinitas'], a: 0 }
]));
b.push(fechamento([
  ['Fracionária', 'Condição de existência, MMC e descartar raízes que anulam denominador.'],
  ['Modular e irracional', 'Exija $g ≥ 0$; eleve ao quadrado e <strong>teste</strong> a raiz.'],
  ['Sistemas', 'Adição/substituição ou Cramer: $x = D_x/D$, $y = D_y/D$.']
], 'Cada operação não reversível pede uma conferência no fim.'));

out.push({ out: DIR + 'aula-2-fracionarias-modulares-irracionais-sistemas.html', html: K.deck({
  title: 'Fracionárias, modulares, irracionais e sistemas — ENA · PROFMAT', brand: 'Equações', key: 'c6a2', meta: 'Capítulo 6 · Aula 2 · Outras equações e sistemas', slides: b,
  extra: WJS + BIND + String.raw`
  function raizes(a, b, c){ var D = b * b - 4 * a * c; if(D < 0) return [D, []]; var s = Math.sqrt(D); return [D, D === 0 ? [-b / (2 * a)] : [(-b - s) / (2 * a), (-b + s) / (2 * a)].sort(function(x, y){ return x - y; })]; }
  bind(['r1-a', 'r1-b', 'r1-c'], function(){ var A = +$('r1-a').value, B = +$('r1-b').value, C = +$('r1-c').value; var qa = C, qb = 2 * C - A - B, qc = -3 * C + A - 3 * B; $('r1-q').textContent = nf(qa, 3) + 'x² + ' + nf(qb, 3) + 'x + ' + nf(qc, 3) + ' = 0'; if(!qa){ $('r1-x').textContent = qb ? nf(-qc / qb, 4) + ' (1º grau)' : '—'; $('r1-v').textContent = ''; $('r1-s').textContent = ''; $('r1-h').textContent = 'Com C = 0 a equação vira de 1º grau.'; return; } var r = raizes(qa, qb, qc); $('r1-x').textContent = r[1].length ? r[1].map(function(x){ return nf(x, 4); }).join(' e ') : 'sem raízes reais (Δ < 0)'; var val = r[1].filter(function(x){ return Math.abs(x + 3) > 1e-9 && Math.abs(x - 1) > 1e-9; }); $('r1-v').textContent = r[1].length ? (val.length === r[1].length ? 'todas válidas' : 'há raiz que zera denominador') : '—'; var S = -qb / qa, P = qc / qa; $('r1-s').textContent = r[0] >= 0 ? nf(S * S - 2 * P, 4) + '  (S² − 2P, S = ' + nf(S, 3) + ', P = ' + nf(P, 3) + ')' : '—'; $('r1-h').textContent = 'A(x − 1) + B(x + 3) = C(x + 3)(x − 1). Para A = 4, B = 2, C = −1 (ENA 2026 Q15): x² + 8x − 1 = 0 e soma dos quadrados 66.'; });
  bind(['r2-a', 'r2-b', 'r2-c', 'r2-d'], function(){ var a = +$('r2-a').value, b = +$('r2-b').value, c = +$('r2-c').value, d = +$('r2-d').value, c1 = [], v = [];
    if(a !== c) c1.push((d - b) / (a - c)); if(a !== -c) c1.push((-d - b) / (a + c)); var vistos = {}; var cand = c1.filter(function(x){ var k = x.toFixed(9); if(vistos[k]) return false; vistos[k] = 1; return true; });
    $('r2-r').textContent = cand.length ? cand.map(function(x){ return nf(x, 3); }).join(' ; ') : 'nenhuma'; cand.forEach(function(x){ if(c * x + d >= -1e-9 && Math.abs(Math.abs(a * x + b) - (c * x + d)) < 1e-9) v.push(x); }); $('r2-v').textContent = v.length ? v.map(function(x){ return nf(x, 3); }).join(' ; ') : 'nenhuma'; $('r2-h').textContent = 'Exige ' + c + 'x + ' + d + ' ≥ 0. Candidatas: ax + b = ±(cx + d). ' + (cand.length > v.length ? 'Descartada(s) por tornar o lado direito negativo.' : ''); });
  bind(['r3-k', 'r3-m'], function(){ var k = +$('r3-k').value, m = +$('r3-m').value, qb = -(2 * m + 1), qc = m * m - k; $('r3-q').textContent = 'x² ' + (qb >= 0 ? '+ ' : '− ') + Math.abs(qb) + 'x ' + (qc >= 0 ? '+ ' : '− ') + Math.abs(qc) + ' = 0'; var r = raizes(1, qb, qc); if(!r[1].length){ $('r3-x').textContent = 'nenhuma real'; $('r3-v').textContent = ''; $('r3-h').textContent = ''; return; } $('r3-x').textContent = r[1].map(function(x){ return nf(x, 3); }).join(' e '); var res = r[1].map(function(x){ var ok = x + k >= 0 && x - m >= 0 && Math.abs(Math.sqrt(x + k) - (x - m)) < 1e-9; return nf(x, 3) + (ok ? ' ✔' : ' ✘ (estranha)'); }); $('r3-v').textContent = res.join(' · '); $('r3-h').textContent = 'Com k = 3 e m = 3 é exatamente a ENA 2026 Q28: x = 1 é raiz estranha e x = 6 vale.'; });
  bind(['r4-a1', 'r4-b1', 'r4-c1', 'r4-a2', 'r4-b2', 'r4-c2'], function(){ var a1 = +$('r4-a1').value, b1 = +$('r4-b1').value, c1 = +$('r4-c1').value, a2 = +$('r4-a2').value, b2 = +$('r4-b2').value, c2 = +$('r4-c2').value; var D = a1 * b2 - a2 * b1, Dx = c1 * b2 - c2 * b1, Dy = a1 * c2 - a2 * c1; $('r4-d').textContent = D + ', ' + Dx + ', ' + Dy; if(D !== 0){ $('r4-r').textContent = 'x = ' + nf(Dx / D, 4) + ' · y = ' + nf(Dy / D, 4); $('r4-h').textContent = 'D ≠ 0: solução única.'; } else { $('r4-r').textContent = (Dx === 0 && Dy === 0) ? 'infinitas soluções' : 'sem solução'; $('r4-h').textContent = 'D = 0: ' + ((Dx === 0 && Dy === 0) ? 'as equações são equivalentes (retas coincidentes).' : 'retas paralelas distintas.'); } });`
}) });

module.exports = out;
