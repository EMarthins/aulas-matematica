// Unidade 5 — Álgebra: produtos notáveis, fatoração, potências, radicais, módulo e ordem (capítulo 5)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/05-algebra/';
const out = [];

// ====================== AULA 1: produtos notáveis e fatoração ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 5 · Aula 1', h1: 'Produtos notáveis e <span style="color:var(--primary);">fatoração</span>',
  sub: 'A ferramenta número 1 do exame: aparece dentro de quase toda questão — retângulo, quadrática, trigonometria. Quadrados, cubos, diferença de quadrados e as identidades que fazem “sumir” as contas.',
  badges: [['diretas e escondidas em 60 questões'], ['(a + b)² = a² + 2ab + b²', 'growth'], ['a² + b² = (a + b)² − 2ab', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da figura que prova a fórmula até as identidades de prova.', [
  ['O quadrado da soma', 'por que falta o 2ab', 'chart'],
  ['Soma × diferença', 'a² − b² e o cálculo mental', 'scale'],
  ['Cubos e trinômios', '(a ± b)³, a³ ± b³, x² + (p+q)x + pq', 'link'],
  ['Identidades de prova', 'a² + b² = (a + b)² − 2ab e companhia', 'bulb'],
  ['Fatoração', 'fator comum, agrupamento, quadrados e cubos', 'check'],
  ['Questões que já caíram', 'retângulo: perímetro/área → diagonal', 'target']
]));
a.push(objetivosSlide([
  'Desenvolver e <strong>fatorar</strong> os produtos notáveis sem decorar às cegas (com a figura e a conta).',
  'Usar a <strong>soma × diferença</strong> para cálculo mental e simplificações.',
  'Aplicar as <strong>identidades</strong> que ligam $x + y$, $xy$, $x^2 + y^2$ e $x^2 + 1/x^2$.',
  'Fatorar para <strong>simplificar frações algébricas</strong> e resolver equações.'
], 'Em prova', 'Se a conta ficou enorme, você provavelmente perdeu uma identidade. Aprenda a reconhecê-las em vez de “resolver o sistema”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', '(a + b)² é a² + b²?', `
          ${lede('Um dos erros mais comuns em álgebra é “distribuir” o quadrado. Teste com números: $(2 + 3)^2 = 25$, mas $2^2 + 3^2 = 13$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual é o desenvolvimento correto de $(a + b)^2$?', ['$a^2 + b^2$', '$a^2 + 2ab + b^2$', '$a^2 + ab + b^2$', '$a^2 + 2b^2$'], 1, 'Os quatro termos de $(a+b)(a+b)$ são $a^2$, $ab$, $ba$ e $b^2$: sobram <strong>dois</strong> termos $ab$. Por isso $(a + b)^2 = a^2 + 2ab + b^2$. O $2ab$ é o que “falta” no erro comum.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Um produto notável é só uma multiplicação feita uma vez para sempre. Entender a <strong>figura</strong> evita decorar.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · quadrado da soma', 'A figura que prova (a + b)² = a² + 2ab + b²', `
          ${lede('Um quadrado de lado $a + b$ se divide em um quadrado $a × a$, um $b × b$ e <strong>dois</strong> retângulos $a × b$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Modelo de áreas', W.rg('n1-a', 'a', 1, 9, 1, 5) + W.rg('n1-b', 'b', 1, 9, 1, 3) + W.svg('n1-s', '0 0 260 220') + W.txt('n1-t', ''))}
            <div>
              ${F('(a + b)^2 = a^2 + 2ab + b^2', true)}
              ${F('(a − b)^2 = a^2 − 2ab + b^2', true)}
              ${callout('Atenção ao sinal', 'No quadrado da diferença, só o termo do meio fica negativo: $(a − b)^2 = a^2 − 2ab + b^2$. E $−3^2 = −9$, mas $(−3)^2 = 9$.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · soma × diferença', 'O produto da soma pela diferença', `
          ${F('(a + b)(a − b) = a^2 − b^2', true)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Cálculo mental', W.row(W.nm('n2-a', 'a (centro)', 100), W.nm('n2-b', 'b (afastamento)', 3)) + W.txt('n2-t', '') + W.txt('n2-r', 'Resultado: ') + W.hint('n2-h'))}
            <div>
              ${callout('Exemplos', '$103 · 97 = (100 + 3)(100 − 3) = 100^2 − 3^2 = 9991$ · $51 · 49 = 50^2 − 1 = 2499$.', 'success')}
              ${callout('Racionalizar', '$(√a + √b)(√a − √b) = a − b$: o produto dos <strong>conjugados</strong> elimina as raízes.')}
            </div>
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · cubos e trinômios', 'Cubos, três termos e o trinômio soma-produto', `
          <div class="grid2">
            <div>
              ${F('(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3')}
              ${F('(a − b)^3 = a^3 − 3a^2b + 3ab^2 − b^3')}
              ${F('a^3 + b^3 = (a + b)(a^2 − ab + b^2)')}
              ${F('a^3 − b^3 = (a − b)(a^2 + ab + b^2)')}
              ${F('(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc')}
              ${F('x^2 + (p + q)x + pq = (x + p)(x + q)')}
            </div>
            ${W.box('Confira numericamente', W.sel('n3-s', 'Identidade', ['(a + b)² = a² + 2ab + b²', '(a − b)³ = a³ − 3a²b + 3ab² − b³', 'a³ + b³ = (a + b)(a² − ab + b²)', 'a³ − b³ = (a − b)(a² + ab + b²)'], 2) + W.row(W.nm('n3-a', 'a', 5), W.nm('n3-b', 'b', 2)) + W.txt('n3-l', 'Lado esquerdo: ') + W.txt('n3-r', 'Lado direito: ') + W.hint('n3-h'))}
          </div>`, { cls: 'growth' }));

a.push(sl('Identidades de prova', 'x + y e xy mandam em tudo', `
          ${lede('Em vez de achar $x$ e $y$, trabalhe com a <strong>soma</strong> $S = x + y$ e o <strong>produto</strong> $P = xy$:')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('x^2 + y^2 = S^2 − 2P')}
              ${F('(x − y)^2 = S^2 − 4P')}
              ${F('x^3 + y^3 = S^3 − 3PS')}
              ${F('x^2 + {1|x^2} = (x + {1|x})^2 − 2')}
              ${F('{1|x} + {1|y} = {x + y|xy}')}
              ${callout('Sempre positivo', '$x^2 + x + 1 > 0$ para todo $x$ (pois $Δ = −3 < 0$ e $a > 0$).', 'success')}
            </div>
            ${W.box('Calculadora de identidades', W.row(W.nm('n4-s', 'S = x + y', 7), W.nm('n4-p', 'P = x·y', 10)) + W.txt('n4-a', 'x² + y² = ') + W.txt('n4-b', '(x − y)² = ') + W.txt('n4-c', 'x³ + y³ = ') + W.hint('n4-h'))}
          </div>`, { cls: 'growth' }));

a.push(ja('ENA 2025 · Q6', 'O retângulo de perímetro 16 e área 14',
  'Um retângulo tem <strong>16 cm de perímetro</strong> e <strong>14 cm² de área</strong>. Qual a medida da sua diagonal?',
  ['5 cm', '6 cm', '7 cm', '8 cm', '10 cm'], 1,
  '$a + b = 8$ e $ab = 14$. $d^2 = a^2 + b^2 = (a + b)^2 − 2ab = 64 − 28 = 36 ⇒ d = 6$. <strong>Alternativa B.</strong> Nunca resolva o sistema: a identidade basta.'));

a.push(ja('ENA 2026 · Q3', 'O retângulo de área 60 e diagonal 13',
  'Um retângulo tem área $60\\ cm^2$ e diagonal $13$ cm. Qual o perímetro?',
  ['34 cm', '30 cm', '38 cm', '26 cm', '60 cm'], 0,
  '$ab = 60$ e $a^2 + b^2 = 169$. $(a + b)^2 = 169 + 2·60 = 289 ⇒ a + b = 17$. Perímetro $= 2·17 = 34$ cm. (Os lados são 5 e 12: terno 5-12-13.) <strong>Alternativa A.</strong>'));

a.push(sl('Fatoração', 'Do produto de volta aos fatores', `
          ${lede('Fatorar é o caminho inverso: escrever uma soma como produto. É essencial para <strong>simplificar frações</strong> e resolver equações.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Tipo', 'Exemplo'], [['Fator comum', '$6x^2 + 9x = 3x(2x + 3)$'], ['Agrupamento', '$ax + ay + bx + by = (a + b)(x + y)$'], ['Dif. de quadrados', '$x^2 − 9 = (x − 3)(x + 3)$'], ['Quadrado perfeito', '$x^2 − 6x + 9 = (x − 3)^2$'], ['Soma/dif. de cubos', '$x^3 − 27 = (x − 3)(x^2 + 3x + 9)$']])}
            ${callout('Treino 5.4', '$x^3 − 27 = (x − 3)(x^2 + 3x + 9)$. E ${x^2 − 9|x^2 − 6x + 9} = {(x − 3)(x + 3)|(x − 3)^2} = {x + 3|x − 3}$, com $x ≠ 3$.', 'success')}
          </div>`, { cls: 'growth' }));

a.push(exemplo('Treino 5.1', 'x + y = 7 e xy = 10: quanto vale x² + y²?', 'E se $x − 1/x = 3$, quanto vale $x^2 + 1/x^2$?', [
  ['Primeira: use a identidade', '$x^2 + y^2 = (x + y)^2 − 2xy = 49 − 20 = 29$'],
  ['Segunda: eleve ao quadrado', '$(x − {1|x})^2 = x^2 − 2 + {1|x^2} = 9$'],
  ['Isole', '$x^2 + {1|x^2} = 9 + 2 = 11$']
], 'Respostas: <strong>29</strong> e <strong>11</strong>. Nenhuma das duas precisou achar $x$.', 'growth'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em produtos notáveis', [
  ['Esquecer o termo do meio', '$(a + b)^2 ≠ a^2 + b^2$; $(a + b)^3 ≠ a^3 + b^3$. Falta $2ab$ (e $3a^2b + 3ab^2$ nos cubos).'],
  ['Errar o sinal em $−3^2$', '$−3^2 = −9$, mas $(−3)^2 = 9$. Parênteses mudam o resultado.'],
  ['Resolver o sistema à toa', 'Perímetro e área do retângulo dão a diagonal por $d^2 = (a + b)^2 − 2ab$, sem achar os lados.'],
  ['Cancelar termos, não fatores', '${x^2 − 9|x^2 − 6x + 9}$ só simplifica depois de <strong>fatorar</strong>; e lembre a condição $x ≠ 3$.']
]));

a.push(quiz([
  { q: 'Se $x + y = 8$ e $xy = 12$, o valor de $x^2 + y^2$ é:', o: ['20', '36', '40', '52'], a: 2 },
  { q: 'O valor de $(√5 + √2)(√5 − √2)$ é:', o: ['3', '7', '10', '$7 + 2√{10}$'], a: 0 },
  { q: 'Usando $(a + b)(a − b)$, o produto $103 · 97$ vale:', o: ['9991', '10 011', '9909', '9981'], a: 0 },
  { q: 'Se $x − {1|x} = 3$, então $x^2 + {1|x^2}$ vale:', o: ['7', '9', '11', '13'], a: 2 }
]));
a.push(fechamento([
  ['Quadrados', '$(a ± b)^2 = a^2 ± 2ab + b^2$ e $(a + b)(a − b) = a^2 − b^2$.'],
  ['Soma e produto', '$x^2 + y^2 = S^2 − 2P$ — sem achar $x$ e $y$.'],
  ['Fatorar', 'Fator comum, quadrados, cubos: simplifique e anote as condições.']
], 'Se a conta ficou enorme, procure uma identidade.'));

out.push({ out: DIR + 'aula-1-produtos-notaveis-fatoracao.html', html: K.deck({
  title: 'Produtos notáveis e fatoração — ENA · PROFMAT', brand: 'Álgebra', key: 'c5a1', meta: 'Capítulo 5 · Aula 1 · Produtos notáveis', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['n1-a', 'n1-b'], function(){ var a = +$('n1-a').value, b = +$('n1-b').value; $('n1-av').textContent = a; $('n1-bv').textContent = b; var svg = $('n1-s'); svg.innerHTML = ''; var T = a + b, k = 200 / T, x0 = 40, y0 = 10, wa = a * k, wb = b * k;
    function R(x, y, w, h, c, t){ el('rect', {x: x, y: y, width: w, height: h, fill: c, 'fill-opacity': .28, stroke: c, 'stroke-width': 2}, svg); var e = el('text', {x: x + w / 2, y: y + h / 2 + 5, 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, fill: 'var(--ink)'}, svg); e.textContent = t; }
    R(x0, y0, wa, wa, 'var(--primary)', 'a² = ' + a * a); R(x0 + wa, y0, wb, wa, 'var(--growth)', 'ab = ' + a * b); R(x0, y0 + wa, wa, wb, 'var(--growth)', 'ab = ' + a * b); R(x0 + wa, y0 + wa, wb, wb, 'var(--decay)', 'b² = ' + b * b);
    $('n1-t').textContent = '(a + b)² = ' + T * T + ' = ' + a * a + ' + 2·' + a * b + ' + ' + b * b + ' = ' + (a * a + 2 * a * b + b * b) + '   ·   (a − b)² = ' + (a - b) * (a - b); });
  bind(['n2-a', 'n2-b'], function(){ var a = +$('n2-a').value, b = +$('n2-b').value; $('n2-t').textContent = '(' + (a - b) + ') · (' + (a + b) + ')'; $('n2-r').textContent = (a - b) * (a + b) + '  (= ' + a + '² − ' + b + '² = ' + (a * a) + ' − ' + (b * b) + ')'; $('n2-h').textContent = 'a² − b² = (a + b)(a − b): ' + (a * a - b * b); });
  bind(['n3-s', 'n3-a', 'n3-b'], function(){ var k = +$('n3-s').value, a = +$('n3-a').value, b = +$('n3-b').value, L, R; if(k === 0){ L = Math.pow(a + b, 2); R = a * a + 2 * a * b + b * b; } else if(k === 1){ L = Math.pow(a - b, 3); R = Math.pow(a, 3) - 3 * a * a * b + 3 * a * b * b - Math.pow(b, 3); } else if(k === 2){ L = Math.pow(a, 3) + Math.pow(b, 3); R = (a + b) * (a * a - a * b + b * b); } else { L = Math.pow(a, 3) - Math.pow(b, 3); R = (a - b) * (a * a + a * b + b * b); } $('n3-l').textContent = L; $('n3-r').textContent = R; $('n3-h').textContent = L === R ? '✔ Iguais: a identidade vale para estes valores.' : '✘ Diferentes.'; });
  bind(['n4-s', 'n4-p'], function(){ var S = +$('n4-s').value, P = +$('n4-p').value; $('n4-a').textContent = S * S - 2 * P; $('n4-b').textContent = S * S - 4 * P; $('n4-c').textContent = Math.pow(S, 3) - 3 * P * S; $('n4-h').textContent = S * S - 4 * P < 0 ? 'Atenção: (x − y)² < 0 — não existem x e y reais com essa soma e produto.' : 'x² + y² = S² − 2P = ' + S + '² − 2·' + P + '.'; });`
}) });

// ====================== AULA 2: potências, radicais, módulo, ordem ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 5 · Aula 2', h1: 'Potências, radicais, <span style="color:var(--growth);">módulo e ordem</span>',
  sub: 'Expoentes fracionários, simplificar e racionalizar, √(a²) = |a|, equações e inequações modulares, e como comparar números sem erro.',
  badges: [['ENA 2025 Q13, Q19'], ['ENA 2026 Q21'], ['√(a²) = |a|', 'growth']], color: 'growth'
}));
b.push(roteiroSlide('Quatro assuntos que vivem escondidos nas questões de álgebra.', [
  ['Potências e radicais', 'propriedades, aᵐ ᐟ ⁿ, simplificar e racionalizar', 'scale'],
  ['As armadilhas dos expoentes', 'torre de potências e parênteses', 'warn'],
  ['Módulo', '√(x²) = |x|, |x| = k, |x| < k, |x| > k', 'chart'],
  ['Ordem e desigualdades', 'regras de ouro, números de teste, MA ≥ MG', 'link'],
  ['Questões que já caíram', 'ENA 2025 Q13, Q19 · ENA 2026 Q21', 'target']
]));
b.push(objetivosSlide([
  'Usar as <strong>propriedades das potências</strong> e converter radicais em expoentes fracionários.',
  '<strong>Simplificar</strong> e <strong>racionalizar</strong> expressões com raízes.',
  'Resolver <strong>equações e inequações modulares</strong> simples.',
  '<strong>Ordenar números</strong> com condições (ex.: $0 < a < b < 1$) usando números de teste e regras de ouro.'
], 'Em prova', 'Converta tudo para a <strong>mesma base</strong> e compare expoentes. Na ordem crescente, teste com números e descarte alternativas.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', '√(x²) é x?', `
          ${lede('Com $x = 3$: $√{3^2} = √9 = 3$. Com $x = −3$: $√{(−3)^2} = √9 = 3$, que <strong>não</strong> é $−3$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual vale para todo real $x$?', ['$√{x^2} = x$', '$√{x^2} = ∣x∣$', '$√{x^2} = −x$', '$√{x^2} = x^2$'], 1, 'A raiz quadrada é sempre <strong>não negativa</strong>; por isso $√{x^2} = ∣x∣$. Para raiz de <strong>índice ímpar</strong> não há problema: $∛{x^3} = x$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A raiz de índice par devolve valor <strong>não negativo</strong>. O módulo é a ferramenta que consertar isso: $∣x∣ = √{x^2}$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · potências', 'As propriedades das potências', `
          <div class="grid2">
            <div>
              ${F('a^m · a^n = a^{m+n}   {a^m|a^n} = a^{m−n}   (a^m)^n = a^{mn}')}
              ${F('(ab)^n = a^n b^n   a^{−n} = {1|a^n}   a^0 = 1\\ (a ≠ 0)')}
              ${F('a^{m/n} = √[n]{a^m}')}
              ${callout('Expoente fracionário', '$32^{3/7} = (2^5)^{3/7} = 2^{15/7}$: potência de potência <strong>multiplica</strong> os expoentes.', 'success')}
            </div>
            ${W.box('Teste as propriedades', W.row(W.nm('p1-a', 'a', 2), W.nm('p1-m', 'm', 5), W.nm('p1-n', 'n', 3)) + '<div id="p1-r" style="margin-top:8px;font-size:.88rem;line-height:1.7;"></div>')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · radicais', 'Simplificar e racionalizar', `
          <div class="grid2">
            <div>
              ${F('√a·√b = √{ab}   √{{a|b}} = {√a|√b}')}
              ${F('{1|√a} = {√a|a}   {1|a + √b} = {a − √b|a^2 − b}')}
              ${callout('Simplificar', '$√{50} = √{25·2} = 5√2$; $√{18} = 3√2$; $√{12} = 2√3$. Procure o <strong>maior quadrado</strong> que divide o radicando.', 'success')}
              ${callout('Treino 5.2', 'Racionalize ${6|√5 − √2}$: multiplique por $√5 + √2$ → ${6(√5 + √2)|5 − 2} = 2(√5 + √2)$.')}
            </div>
            ${W.box('Simplificador de √n', W.nm('p2-n', 'n', 50, 1, 'min="1" max="100000"') + W.txt('p2-r', 'Forma simplificada: ') + W.txt('p2-d', 'Valor aproximado: ') + W.hint('p2-h'))}
          </div>`, { cls: 'growth' }));

b.push(armadilhas('Cuidado', 'As armadilhas dos expoentes e dos radicais', [
  ['Torre de potências', '$2^{5^3} = 2^{125}$ é muito diferente de $(2^5)^3 = 2^{15}$. Leia onde estão os parênteses.'],
  ['$√{x^2} = x$ só para $x ≥ 0$', 'Em geral $√{x^2} = ∣x∣$. O índice ímpar não tem esse problema.'],
  ['Distribuir a raiz ou a potência na soma', '$(a + b)^n ≠ a^n + b^n$ e $√{a + b} ≠ √a + √b$.'],
  ['Sinal e parênteses', '$−3^2 = −9$, mas $(−3)^2 = 9$. E $a^0 = 1$ só para $a ≠ 0$.']
]));

b.push(ja('ENA 2025 · Q19', 'Qual NÃO é igual a 32^(3/7)?',
  'Qual das opções abaixo <strong>NÃO</strong> é o mesmo que $32^{3/7}$? (alternativas reescritas para treino)',
  ['$(2^{5/3})^{1/7}$', '$(2^{5/7})^3$', '$(2^{15})^{1/7}$', '$√[7]{(2^5)^3}$', '$√[7]{32^3}$'], 0,
  '$32^{3/7} = (2^5)^{3/7} = 2^{15/7}$. Todas as corretas se reduzem a $2^{15/7}$: $(2^{5/7})^3$, $(2^{15})^{1/7}$, $√[7]{(2^5)^3}$ e $√[7]{32^3}$. A alternativa A é $(2^{5/3})^{1/7} = 2^{5/21} ≠ 2^{15/7}$. Moral: converta tudo para base 2 e compare os expoentes. <strong>Alternativa A.</strong>'));

b.push(sl('Teoria · módulo', 'Valor absoluto: distância até zero', `
          ${lede('$∣x∣$ é a <strong>distância</strong> de $x$ a 0: $∣x∣ = x$ se $x ≥ 0$ e $∣x∣ = −x$ se $x < 0$. Sempre $∣x∣ ≥ 0$ e $∣x∣ = √{x^2}$.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${tbl(['Forma', 'Equivale a'], [['$∣x∣ = k\\ (k ≥ 0)$', '$x = k$ ou $x = −k$'], ['$∣x∣ < k$', '$−k < x < k$'], ['$∣x∣ > k$', '$x < −k$ ou $x > k$'], ['$∣f∣ = ∣g∣$', '$f = ±g$']])}
              ${callout('Truque (ENA 2026 Q9)', 'Soma de parcelas $≥ 0$ igual a zero ⇒ cada parcela é zero.', 'success')}
            </div>
            ${W.box('Módulo na reta', W.sel('p3-t', 'Condição', ['|x − c| = k', '|x − c| < k', '|x − c| > k'], 1) + W.rg('p3-c', 'c', -5, 5, 1, 0) + W.rg('p3-k', 'k', 0, 6, 1, 3) + W.svg('p3-s', '0 0 340 90') + W.hint('p3-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q13', '√((3x − 12)²) = 3x − 12',
  'Qual o conjunto-solução, em $R$, de $√{(3x − 12)^2} = 3x − 12$?',
  ['$(−∞, 4]$', '$\\{4\\}$', '$[4, +∞)$', '$R$', '$(4, +∞)$'], 2,
  '$√{u^2} = ∣u∣$. A equação vira $∣3x − 12∣ = 3x − 12$, que vale quando $3x − 12 ≥ 0 ⇔ x ≥ 4$. Solução: $[4, +∞)$ — inclui o 4. <strong>Alternativa C.</strong>'));

b.push(sl('Teoria · ordem', 'Regras de ouro para comparar números', `
          <div class="grid2">
            <div>
              ${callout('Regras', 'Somar o mesmo número mantém o sentido. Multiplicar/dividir por <strong>positivo</strong> mantém; por <strong>negativo</strong> inverte.', 'success')}
              ${tbl(['Se', 'Então'], [['$0 < a < 1$', '$a^2 < a$ e $1/a > 1$ e $a < √a$'], ['$0 < a < b$', '$a^2 < ab < b^2$ e $1/a > 1/b$'], ['$a < b$ e $c < d$', '$a + c < b + d$'], ['$a, b ≥ 0$', '$(a + b)/2 ≥ √{ab}$ (MA ≥ MG)']])}
            </div>
            ${W.box('Ordene com números de teste (0 < a < b < 1)', W.rg('p4-a', 'a (em centésimos)', 5, 90, 1, 20) + W.rg('p4-b', 'b (em centésimos)', 10, 95, 1, 50) + '<p class="small" id="p4-r" style="margin:10px 0 0;line-height:1.8;"></p>' + W.hint('p4-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q21', 'Qual alternativa está em ordem crescente?',
  'Sejam $0 < a < b < 1$. Qual alternativa está em ordem crescente? (A) $a^2, a, ab, 1/a$ · (B) $ab, b^2, b, a + b$ · (C) $ab, b, b^2, 1/b$ · (D) $b, b^2, ab, a + b$ · (E) $b^2, b, ab, 1/a$',
  ['A', 'B', 'C', 'D', 'E'], 1,
  '$ab < b·b$ (pois $a < b$); $b^2 < b$ (pois $b < 1$); $b < a + b$ (pois $a > 0$). <strong>B: $ab < b^2 < b < a + b$.</strong> Descartes: (A) $ab < a$, não $a < ab$; (C) e (D) $b^2 < b$, e não o contrário; (E) $ab < b$, não $b < ab$.'));

b.push(exemplo('Treino 5.5', 'Qual é maior: a, a² ou √a?', 'Dado $0 < a < 1$, compare $a$, $a^2$ e $√a$. Teste com $a = 0,25$.', [
  ['Calcule', '$a^2 = 0,0625$ · $a = 0,25$ · $√a = 0,5$'],
  ['Ordene', '$0,0625 < 0,25 < 0,5$'],
  ['Generalize', 'Para $0 < a < 1$: $a^2 < a < √a$ (multiplicar por um número menor que 1 diminui)']
], 'Em geral: números entre 0 e 1 ficam <strong>menores</strong> ao serem elevados e <strong>maiores</strong> ao tirar a raiz.', 'growth'));

b.push(quiz([
  { q: 'O valor de $√{x^2}$ para $x = −4$ é:', o: ['−4', '4', '16', 'não existe'], a: 1 },
  { q: 'O valor de $8^{2/3} · 9^{1/2}$ é:', o: ['6', '12', '18', '24'], a: 1 },
  { q: 'As soluções de $∣2x − 3∣ = 5$ são:', o: ['$x = 4$ apenas', '$x = −1$ apenas', '$x = 4$ ou $x = −1$', '$x = 1$ ou $x = −4$'], a: 2 },
  { q: 'Se $0 < a < 1$, o maior entre $a$, $a^2$ e $√a$ é:', o: ['$a$', '$a^2$', '$√a$', 'são iguais'], a: 2 }
]));
b.push(fechamento([
  ['Potências', 'Mesma base, compare expoentes; potência de potência multiplica.'],
  ['Módulo', '$√{x^2} = ∣x∣$; $∣x∣ < k ⇔ −k < x < k$.'],
  ['Ordem', 'Números de teste + regras de ouro: descarte as alternativas que falham.']
], 'Converta para a mesma base e teste com números.'));

out.push({ out: DIR + 'aula-2-potencias-radicais-modulo-ordem.html', html: K.deck({
  title: 'Potências, radicais, módulo e ordem — ENA · PROFMAT', brand: 'Álgebra', key: 'c5a2', meta: 'Capítulo 5 · Aula 2 · Potências, módulo e ordem', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['p1-a', 'p1-m', 'p1-n'], function(){ var a = +$('p1-a').value, m = +$('p1-m').value, n = +$('p1-n').value; var L = [['a^m · a^n', Math.pow(a, m) * Math.pow(a, n), 'a^(m+n)', Math.pow(a, m + n)], ['(a^m)^n', Math.pow(Math.pow(a, m), n), 'a^(m·n)', Math.pow(a, m * n)], ['a^m ÷ a^n', Math.pow(a, m) / Math.pow(a, n), 'a^(m−n)', Math.pow(a, m - n)]]; $('p1-r').innerHTML = L.map(function(x){ var ok = Math.abs(x[1] - x[3]) <= 1e-9 * Math.max(1, Math.abs(x[1])); return '<b class="mono">' + x[0] + '</b> = ' + nf(x[1], 4) + ' · <b class="mono">' + x[2] + '</b> = ' + nf(x[3], 4) + ' <span style="color:var(--success);font-weight:700;">' + (ok ? '✔' : '≈') + '</span>'; }).join('<br>') + '<br><b class="mono">a^(−n)</b> = ' + nf(Math.pow(a, -n), 6) + ' = 1/' + nf(Math.pow(a, n), 2); });
  bind(['p2-n'], function(){ var n = Math.round(+$('p2-n').value); if(n < 1) return; var k = 1, r = n; for(var d = 2; d * d <= r; d++){ while(r % (d * d) === 0){ k *= d; r /= d * d; } } $('p2-r').textContent = r === 1 ? '√' + n + ' = ' + k : '√' + n + ' = ' + (k > 1 ? k : '') + '√' + r; $('p2-d').textContent = nf(Math.sqrt(n), 5); $('p2-h').textContent = k > 1 ? 'O maior quadrado que divide ' + n + ' é ' + (k * k) + '.' : 'Nenhum quadrado (além de 1) divide ' + n + ': já está simplificado.'; });
  bind(['p3-t', 'p3-c', 'p3-k'], function(){ var t = +$('p3-t').value, c = +$('p3-c').value, k = +$('p3-k').value; $('p3-cv').textContent = c; $('p3-kv').textContent = k; var svg = $('p3-s'); svg.innerHTML = ''; var sx = function(x){ return 20 + (x + 12) / 24 * 300; };
    if(t === 1) el('rect', {x: sx(c - k), y: 28, width: sx(c + k) - sx(c - k), height: 10, fill: 'var(--primary)', 'fill-opacity': .45}, svg);
    if(t === 2){ el('rect', {x: sx(-12), y: 28, width: sx(c - k) - sx(-12), height: 10, fill: 'var(--primary)', 'fill-opacity': .45}, svg); el('rect', {x: sx(c + k), y: 28, width: sx(12) - sx(c + k), height: 10, fill: 'var(--primary)', 'fill-opacity': .45}, svg); }
    el('line', {x1: sx(-12), y1: 33, x2: sx(12), y2: 33, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg);
    for(var x = -10; x <= 10; x += 2){ el('line', {x1: sx(x), y1: 29, x2: sx(x), y2: 37, stroke: 'var(--ink-soft)'}, svg); var tt = el('text', {x: sx(x), y: 54, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); tt.textContent = x; }
    function P(x, cheio){ el('circle', {cx: sx(x), cy: 33, r: 5, fill: cheio ? 'var(--growth)' : 'var(--bg)', stroke: 'var(--growth)', 'stroke-width': 2}, svg); }
    if(t === 0){ P(c - k, true); P(c + k, true); $('p3-h').textContent = k === 0 ? '|x − ' + c + '| = 0 → x = ' + c : '|x − ' + c + '| = ' + k + ' → x = ' + (c - k) + ' ou x = ' + (c + k); }
    else if(t === 1){ P(c - k, false); P(c + k, false); $('p3-h').textContent = k === 0 ? 'Sem solução (|x − c| < 0 é impossível).' : '|x − ' + c + '| < ' + k + ' → ' + (c - k) + ' < x < ' + (c + k); }
    else { P(c - k, false); P(c + k, false); $('p3-h').textContent = '|x − ' + c + '| > ' + k + ' → x < ' + (c - k) + ' ou x > ' + (c + k); } });
  bind(['p4-a', 'p4-b'], function(){ var a = +$('p4-a').value / 100, b = +$('p4-b').value / 100; $('p4-av').textContent = a.toFixed(2).replace('.', ','); $('p4-bv').textContent = b.toFixed(2).replace('.', ','); if(a >= b){ $('p4-r').textContent = 'Escolha a < b.'; $('p4-h').textContent = ''; return; } var L = [['a²', a * a], ['ab', a * b], ['b²', b * b], ['a', a], ['b', b], ['a + b', a + b], ['1/b', 1 / b], ['1/a', 1 / a], ['√a', Math.sqrt(a)]].sort(function(x, y){ return x[1] - y[1]; }); $('p4-r').innerHTML = L.map(function(x){ return '<b>' + x[0] + '</b> = ' + nf(x[1], 3); }).join(' &lt; '); $('p4-h').textContent = 'Compare com a alternativa B da Q21: ab < b² < b < a + b → ' + ((a * b < b * b && b * b < b && b < a + b) ? 'vale ✔' : 'não vale'); });`
}) });

module.exports = out;
