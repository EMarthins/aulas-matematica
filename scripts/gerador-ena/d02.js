// Unidade 2 — Números inteiros: restos, divisibilidade, MMC/MDC, paridade, algarismos (capítulo 2)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/02-numeros-inteiros/';
const out = [];

// =================== AULA 1: restos, divisibilidade, MMC e MDC ===================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 2 · Aula 1', h1: 'Restos, divisibilidade e <span style="color:var(--primary);">MMC / MDC</span>',
  sub: 'Questões de “truque limpo”: quem conhece a ideia resolve em um minuto. Divisão euclidiana, o macete dos restos, critérios de divisibilidade, MMC, MDC e número de divisores.',
  badges: [['5 questões em 60'], ['n = d·q + r', 'growth'], ['MMC × MDC = a × b', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do resto da divisão ao calendário de eventos que se repetem.', [
  ['Divisão euclidiana', 'n = d·q + r com 0 ≤ r < d', 'scale'],
  ['O macete dos restos', 'ENA 2026 Q17: resto 220 por 451 → resto por 41', 'bulb'],
  ['Congruências', 'potências e restos (3¹⁰⁰ por 4)', 'link'],
  ['Critérios de divisibilidade', '2, 3, 4, 5, 6, 8, 9, 10 e 11', 'check'],
  ['MMC e MDC', 'eventos repetidos × divisão em grupos iguais', 'clock'],
  ['Número de divisores', 'expoentes + 1, multiplicados', 'chart'],
  ['Questões que já caíram', 'ENA 2026 Q8 e Q17', 'target']
]));
a.push(objetivosSlide([
  'Escrever $n = d·q + r$ e usar o resto para decidir <strong>divisibilidade</strong>.',
  'Aplicar o <strong>macete dos restos</strong> quando o divisor é múltiplo de outro.',
  'Calcular <strong>MMC</strong> e <strong>MDC</strong> por fatoração e saber qual usar em cada problema.',
  'Contar os <strong>divisores</strong> de um número a partir da fatoração.'
], 'Em prova', 'Aqui as contas são curtas. A dificuldade é reconhecer a <strong>ideia</strong>: resto, múltiplo comum ou fatoração.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Dois sinais, um instante de encontro', `
          ${lede('Dois sinais luminosos piscam, um a cada <strong>12 s</strong> e outro a cada <strong>18 s</strong>. Acabaram de piscar juntos. Daqui a quanto tempo piscam juntos de novo?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Primeiro encontro futuro:', ['6 s', '30 s', '36 s', '216 s'], 2, 'O primeiro instante em que ambos coincidem é o <strong>menor múltiplo comum</strong> de 12 e 18: $mmc(12, 18) = 36$ s. (216 também é múltiplo comum, mas não é o primeiro.)')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Eventos que se repetem de $a$ em $a$ e de $b$ em $b$ coincidem nos <strong>múltiplos comuns</strong> — todos múltiplos do MMC. É a mesma ideia da <strong>divisão com resto</strong>.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · divisão euclidiana', 'n = d · q + r, com 0 ≤ r < d', `
          <div class="grid2">
            <div>
              ${lede('Dividir $n$ por $d$ dá um <strong>quociente</strong> $q$ e um <strong>resto</strong> $r$, sempre com $0 ≤ r < d$:')}
              ${F('n = d · q + r', true)}
              ${callout('Múltiplo', '$n$ é <strong>múltiplo</strong> de $d$ ⇔ o resto é zero ($r = 0$).', 'success')}
              ${callout('Regra do resto', 'O resto é <strong>menor</strong> que o divisor. Um “resto” maior ou igual a $d$ é sinal de conta errada.')}
            </div>
            ${W.box('Divisão com resto', W.row(W.nm('e1-n', 'n', 451), W.nm('e1-d', 'd', 41, 1, 'min="1"')) + W.txt('e1-t', 'Igualdade: ') + W.out('e1-q', '1.4rem') + '<div class="bar" style="margin-top:8px;"><span id="e1-b" style="background:var(--growth);width:0%"></span></div>' + W.hint('e1-h'))}
          </div>`));

a.push(sl('Macete · usado em 2026 Q17', 'Se D é múltiplo de d, os restos “passam” de D para d', `
          ${lede('Se $D$ é múltiplo de $d$ e $n = D·q + r$, então $n$ e $r$ deixam o <strong>mesmo resto</strong> na divisão por $d$ — porque $D·q$ é múltiplo de $d$ e “não interfere”.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${callout('Exemplo (ENA 2026 Q17)', '$451 = 11 · 41$. Se $n = 451q + 220$, então $n = 41(11q) + 220$ e $220 = 5 · 41 + 15$. Logo $n = 41(11q + 5) + 15$: <strong>resto 15</strong> por 41.', 'success')}
              ${callout('Atenção', 'Só funciona quando <strong>d divide D</strong>. Por 7, por exemplo, 451 não é múltiplo e o macete não vale.')}
            </div>
            ${W.box('Teste o macete', W.rg('e2-q', 'q', 0, 40, 1, 3) + W.txt('e2-n', 'n = 451q + 220 = ') + W.txt('e2-r', 'resto de n por 41 = ') + W.hint('e2-h'))}
          </div>`));

a.push(sl('Teoria · congruências', 'Restos de potências: use a ≡ b (mod m)', `
          ${lede('Escrevemos $a ≡ b "(mod" m")"$ quando $a$ e $b$ deixam o <strong>mesmo resto</strong> por $m$. Podemos somar, multiplicar e <strong>elevar</strong> dos dois lados.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('a ≡ b ⇒ a + c ≡ b + c,   ac ≡ bc,   a^k ≡ b^k')}
              ${callout('Exemplo', 'Resto de $3^{100}$ por 4: $3^{100} = 9^{50} ≡ 1^{50} = 1$, pois $9 ≡ 1 (mod 4)$. <strong>Resto 1.</strong>', 'success')}
            </div>
            ${W.box('Resto de b^e por m', W.row(W.nm('e3-b', 'b', 3, 1), W.nm('e3-e', 'e', 100, 1, 'min="0" max="2000"'), W.nm('e3-m', 'm', 4, 1, 'min="2"')) + W.txt('e3-r', 'resto = ') + W.hint('e3-h'))}
          </div>`));

a.push(sl('Teoria · critérios', 'Critérios de divisibilidade', `
          <div class="grid2">
            <div>
              ${tbl(['Por', 'Critério'], [['2 / 5 / 10', 'termina em par / 0 ou 5 / 0'], ['3 / 9', 'soma dos algarismos múltipla de 3 / de 9'], ['4 / 8', '2 / 3 últimos algarismos formam múltiplo de 4 / 8'], ['6', 'divisível por 2 <strong>e</strong> por 3'], ['11', '(soma das posições ímpares) − (soma das pares) é múltiplo de 11']])}
            </div>
            ${W.box('Teste um número', W.nm('e4-n', 'Número', 3960, 1, 'min="1" max="999999999"') + '<div id="e4-r" style="margin-top:8px;font-size:.9rem;line-height:1.7;"></div>')}
          </div>`));

a.push(sl('Teoria · MMC e MDC', 'Quando usar cada um?', `
          <div class="grid2">
            ${card('<strong>MMC</strong><p style="font-size:.92rem;margin-top:8px;">Eventos que se <strong>repetem</strong> (“de 8 em 8 h” e “de 12 em 12 h”); menor tempo/quantidade que é múltiplo de todos. Múltiplos comuns = múltiplos do MMC.</p>', 'growth')}
            ${card('<strong>MDC</strong><p style="font-size:.92rem;margin-top:8px;">Dividir em <strong>grupos ou pedaços iguais</strong>, no maior tamanho possível (cortar fios, repartir sem sobras).</p>', 'decay')}
          </div>
          <div class="grid2" style="margin-top:10px;">
            <div>
              ${callout('Fatoração', 'MMC = fatores com <strong>maior</strong> expoente · MDC = fatores comuns com <strong>menor</strong> expoente. E vale: $mmc(a,b) · mdc(a,b) = a · b$.', 'success')}
            </div>
            ${W.box('MMC e MDC de dois números', W.row(W.nm('e5-a', 'a', 12, 1, 'min="1"'), W.nm('e5-b', 'b', 18, 1, 'min="1"')) + W.txt('e5-f', '') + W.txt('e5-r', '') + W.hint('e5-h'))}
          </div>`));

a.push(sl('Teoria · divisores', 'Quantos divisores positivos tem n?', `
          ${lede('Fatore $n = p^α · q^β ⋯$. O número de divisores positivos é o produto dos expoentes <strong>mais um</strong>:')}
          ${F('d(n) = (α + 1)(β + 1) ⋯', true)}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${callout('Exemplo (Treino 2.2)', '$360 = 2^3 · 3^2 · 5$ → $(3+1)(2+1)(1+1) = 4 · 3 · 2 = 24$ divisores.', 'success')}
              ${callout('Quadrado perfeito', 'Um número é quadrado perfeito ⇔ <strong>todos</strong> os expoentes da fatoração são pares (e tem quantidade ímpar de divisores).')}
            </div>
            ${W.box('Divisores de n', W.nm('e6-n', 'n', 360, 1, 'min="1" max="5000"') + W.txt('e6-f', 'Fatoração: ') + W.txt('e6-d', 'Nº de divisores: ') + '<p class="small" id="e6-l" style="margin:8px 0 0;line-height:1.5;"></p>')}
          </div>`));

a.push(sl('Armadilha · ENA 2026 Q8', 'Contar só os eventos futuros dentro do prazo', `
          ${lede('“Mais 50 horas, quantas vezes mais?” O instante 0 já passou e o 72 passa de 50. Conte apenas os <strong>múltiplos do MMC</strong> que cabem em $(0, 50]$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Encontros dentro do prazo', W.row(W.nm('e7-a', 'Período A (h)', 8, 1, 'min="1"'), W.nm('e7-b', 'Período B (h)', 12, 1, 'min="1"'), W.nm('e7-t', 'Prazo (h)', 50, 1, 'min="1"')) + W.txt('e7-m', 'mmc = ') + W.out('e7-r', '1.3rem') + W.hint('e7-h'))}
            ${callout('Regra', 'Número de coincidências $= ⌊{prazo|mmc}⌋$ (o instante inicial não conta como “mais uma vez”).', 'success')}
          </div>`, { cls: 'danger' }));

a.push(ja('ENA 2026 · Q8', 'Duas promoções que se repetem',
  'O produto A entra em promoção de <strong>8 em 8 horas</strong> e o B de <strong>12 em 12 horas</strong>. Agora ambos estão em promoção e a campanha dura mais <strong>50 horas</strong>. Quantas vezes mais eles estarão <strong>simultaneamente</strong> em promoção?',
  ['1 vez', '2 vezes', '3 vezes', '4 vezes', '5 vezes'], 1,
  '$mmc(8, 12) = 24$ → as coincidências são em 24 h e 48 h (72 passa de 50). Duas vezes. <strong>Alternativa B.</strong>'));

a.push(ja('ENA 2026 · Q17', 'O resto que “passa” para 41',
  'Um inteiro positivo deixa <strong>resto 220</strong> quando dividido por <strong>451</strong>. Qual é o resto da divisão desse número por <strong>41</strong>?',
  ['15', '20', '41', '220', '11'], 0,
  '$451 = 11 · 41$, então $n = 451q + 220 = 41(11q) + 220$ e $220 = 5 · 41 + 15$. Logo $n = 41(11q + 5) + 15$. Resto <strong>15</strong>. <strong>Alternativa A.</strong>'));

a.push(exemplo('Treino 2.2 · divisores', 'Quantos divisores tem 360?', 'Passo a passo, sem listar nada:', [
  ['Fatore', '$360 = 2^3 · 3^2 · 5^1$'],
  ['Some 1 a cada expoente', '$3 + 1 = 4$, $2 + 1 = 3$, $1 + 1 = 2$'],
  ['Multiplique', '$4 · 3 · 2 = 24$']
], '360 tem <strong>24 divisores positivos</strong>.'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em restos e MMC', [
  ['Resto maior que o divisor', 'Se encontrou resto ≥ divisor, a divisão não terminou. Reduza de novo (220 = 5·41 + 15, não 56).'],
  ['MMC no lugar do MDC', 'Eventos que se repetem → MMC. Dividir em grupos iguais → MDC. Pergunte: “vou procurar um número <em>maior</em> (MMC) ou o <em>maior pedaço</em> (MDC)?”'],
  ['Contar o instante 0', 'Em “quantas vezes mais?”, o instante inicial já passou. Conte só os futuros dentro do prazo.'],
  ['Somar expoentes', 'O nº de divisores é o <strong>produto</strong> de $(expoente + 1)$, não a soma dos expoentes.']
]));

a.push(quiz([
  { q: 'Qual o resto da divisão de $n = 35q + 17$ por 7?', o: ['0', '1', '2', '3', '5'], a: 3 },
  { q: 'Três luzes piscam de 6 em 6 s, de 8 em 8 s e de 12 em 12 s. Piscaram juntas agora. A próxima vez juntas será daqui a:', o: ['12 s', '24 s', '48 s', '72 s'], a: 1 },
  { q: 'Quantos divisores positivos tem $252 = 2^2 · 3^2 · 7$?', o: ['12', '15', '16', '18', '24'], a: 3 },
  { q: 'Qual é o MDC de 84 e 126?', o: ['6', '14', '21', '42'], a: 3 }
]));
a.push(fechamento([
  ['Restos', '$n = d·q + r$ com $0 ≤ r < d$; se $d$ divide $D$, os restos “passam” de $D$ para $d$.'],
  ['MMC × MDC', 'MMC: eventos que se repetem. MDC: grupos iguais. $mmc · mdc = a · b$.'],
  ['Divisores', '$(α+1)(β+1)⋯$ a partir da fatoração.']
], 'Antes de calcular, pergunte: é resto, múltiplo comum ou fatoração?'));

out.push({ out: DIR + 'aula-1-restos-divisibilidade-mmc-mdc.html', html: K.deck({
  title: 'Restos, divisibilidade, MMC e MDC — ENA · PROFMAT', brand: 'Números Inteiros', key: 'c2a1', meta: 'Capítulo 2 · Aula 1 · Restos e MMC/MDC', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['e1-n', 'e1-d'], function(){ var n = Math.round(+$('e1-n').value), d = Math.round(+$('e1-d').value); if(!d || d < 1){ $('e1-t').textContent = '—'; return; } var q = Math.floor(n / d), r = n - d * q; $('e1-t').textContent = n + ' = ' + d + ' · ' + q + ' + ' + r; $('e1-q').textContent = 'q = ' + q + ' · r = ' + r; $('e1-b').style.width = (r / d * 100) + '%'; $('e1-h').textContent = r === 0 ? n + ' é múltiplo de ' + d + ' (resto 0).' : 'O resto ' + r + ' é menor que ' + d + ' ✓ (a barra mostra r/d).'; });
  bind(['e2-q'], function(){ var q = +$('e2-q').value; $('e2-qv').textContent = q; var n = 451 * q + 220; $('e2-n').textContent = n; $('e2-r').textContent = (n % 41) + '  (por 451 o resto é ' + (n % 451) + ')'; $('e2-h').textContent = 'Seja qual for q, o resto por 41 fica em ' + (220 % 41) + ' = resto de 220.'; });
  function powmod(b, e, m){ var r = 1 % m; b = b % m; while(e > 0){ if(e & 1) r = (r * b) % m; b = (b * b) % m; e >>= 1; } return r; }
  bind(['e3-b', 'e3-e', 'e3-m'], function(){ var b = Math.round(+$('e3-b').value), e = Math.round(+$('e3-e').value), m = Math.round(+$('e3-m').value); if(m < 2 || e < 0) return; $('e3-r').textContent = powmod(Math.abs(b), e, m); var s = []; for(var i = 0; i < 8; i++) s.push(powmod(Math.abs(b), i, m)); $('e3-h').textContent = 'Restos de ' + b + '⁰, ' + b + '¹, …: ' + s.join(', ') + ' … (observe o ciclo).'; });
  bind(['e4-n'], function(){ var n = Math.round(+$('e4-n').value); if(n < 1) return; var s = String(n), L = s.length, ds = s.split('').map(Number), soma = ds.reduce(function(x, y){ return x + y; }, 0), alt = 0; for(var i = 0; i < L; i++) alt += (i % 2 === 0 ? 1 : -1) * ds[L - 1 - i];
    var t = [[2, n % 2 === 0, 'termina em ' + s[L - 1]], [3, soma % 3 === 0, 'soma dos algarismos = ' + soma], [4, n % 4 === 0, 'dois últimos: ' + s.slice(-2)], [5, n % 5 === 0, 'termina em ' + s[L - 1]], [6, n % 6 === 0, 'divisível por 2 e por 3?'], [8, n % 8 === 0, 'três últimos: ' + s.slice(-3)], [9, soma % 9 === 0, 'soma = ' + soma], [10, n % 10 === 0, 'termina em ' + s[L - 1]], [11, alt % 11 === 0, 'alternada = ' + alt]];
    $('e4-r').innerHTML = t.map(function(x){ return '<span style="color:' + (x[1] ? 'var(--success)' : 'var(--danger)') + ';font-weight:700;">' + (x[1] ? '✔' : '✘') + ' ' + x[0] + '</span> <span style="color:var(--ink-soft);font-size:.82rem;">(' + x[2] + ')</span>'; }).join('<br>'); });
  bind(['e5-a', 'e5-b'], function(){ var A = Math.round(+$('e5-a').value), B = Math.round(+$('e5-b').value); if(A < 1 || B < 1) return; var g = mdc(A, B), l = A / g * B; $('e5-f').textContent = A + ' = ' + pot(fatora(A)) + ' · ' + B + ' = ' + pot(fatora(B)); $('e5-r').textContent = 'mdc = ' + g + ' · mmc = ' + l; $('e5-h').textContent = 'Confira: mmc × mdc = ' + (l * g) + ' = ' + A + ' × ' + B + ' = ' + (A * B); });
  bind(['e6-n'], function(){ var n = Math.round(+$('e6-n').value); if(n < 1) return; var f = fatora(n), d = f.reduce(function(p, x){ return p * (x[1] + 1); }, 1); $('e6-f').textContent = n + ' = ' + (pot(f) || '1'); $('e6-d').textContent = f.map(function(x){ return '(' + x[1] + '+1)'; }).join('·') + ' = ' + d; var L = []; for(var i = 1; i <= n; i++) if(n % i === 0) L.push(i); $('e6-l').textContent = L.length <= 40 ? L.join(', ') : L.slice(0, 40).join(', ') + ' …'; });
  bind(['e7-a', 'e7-b', 'e7-t'], function(){ var A = Math.round(+$('e7-a').value), B = Math.round(+$('e7-b').value), t = +$('e7-t').value; if(A < 1 || B < 1) return; var l = A / mdc(A, B) * B; $('e7-m').textContent = l; var c = Math.floor(t / l), s = []; for(var i = 1; i <= c; i++) s.push(i * l); $('e7-r').textContent = c + (c === 1 ? ' vez' : ' vezes') + (c ? ': ' + s.join(' h, ') + ' h' : ''); $('e7-h').textContent = 'Próximo encontro depois do prazo: ' + (c + 1) * l + ' h (> ' + t + ').'; });`
}) });

// =================== AULA 2: paridade, algarismos, somas ===================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 2 · Aula 2', h1: 'Paridade, algarismos e <span style="color:var(--growth);">somas de inteiros</span>',
  sub: 'Par ou ímpar? Escreva o número como 2k ou 2k+1. Algarismos invertidos, último algarismo de potências e a soma de inteiros consecutivos: truques que decidem questões em minutos.',
  badges: [['ENA 2025 Q8, Q20, Q27'], ['abc − cba = 99(a − c)', 'growth'], ['S = 10a + 45', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Quatro ferramentas curtas para quatro questões já cobradas.', [
  ['Paridade', 'regras e a técnica 2k / 2k + 1', 'scale'],
  ['ENA 2025 Q27', 'a ímpar, b par: classificando expressões', 'bulb'],
  ['Algarismos e representação decimal', 'abc = 100a + 10b + c', 'chart'],
  ['ENA 2025 Q20', 'M − N = 198 → quantos M?', 'target'],
  ['Último algarismo de potências', 'ciclos de período 4', 'clock'],
  ['Somas de consecutivos', 'S = n·a + n(n−1)/2 (ENA 2025 Q8)', 'up']
]));
b.push(objetivosSlide([
  'Prever a <strong>paridade</strong> de somas, produtos e potências.',
  'Escrever um número de 3 algarismos como $100a + 10b + c$ e usar a diferença com o invertido.',
  'Achar o <strong>último algarismo</strong> de uma potência usando o ciclo.',
  'Decidir se um número pode ser <strong>soma de inteiros consecutivos</strong>.'
], 'Em prova', 'Todas essas questões têm solução em 3 a 6 linhas — e <strong>testar números pequenos</strong> confirma o resultado.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', '$n^2$ tem a mesma paridade de $n$?', `
          ${lede('Teste com números: $n = 3$ → $9$ (ímpar); $n = 4$ → $16$ (par); $n = 7$ → $49$ (ímpar). Parece que sim — mas por quê?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual afirmação é verdadeira para todo inteiro n?', ['$n^2$ é sempre par', '$n^2$ é sempre ímpar', '$n^2$ tem a mesma paridade de $n$', '$n^2 + n$ é sempre ímpar'], 2, 'Se $n = 2k$ então $n^2 = 4k^2$ (par). Se $n = 2k + 1$ então $n^2 = 4k^2 + 4k + 1$ (ímpar). Logo $n^2$ e $n$ têm a mesma paridade. E $n^2 + n = n(n+1)$ é sempre par, porque um dos dois consecutivos é par.')}
            ${card('<strong>Técnica</strong><p style="font-size:.92rem;margin-top:8px;">Escreva <strong>par</strong> como $2k$ e <strong>ímpar</strong> como $2k + 1$ ($k$ inteiro), desenvolva e, no fim, <strong>fatore o 2</strong> para ler a paridade.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · paridade', 'As regras da paridade (e um simulador)', `
          <div class="grid2">
            <div>
              ${tbl(['Operação', 'Resultado'], [['par ± par', 'par'], ['ímpar ± ímpar', 'par'], ['par ± ímpar', 'ímpar'], ['par × qualquer', 'par'], ['ímpar × ímpar', 'ímpar'], ['$n^2$', 'mesma paridade de $n$']])}
            </div>
            ${W.box('Simulador de paridade', W.row(W.sel('p1-a', 'a é', ['par', 'ímpar'], 1), W.sel('p1-b', 'b é', ['par', 'ímpar'], 0)) + '<div id="p1-r" style="margin-top:10px;font-size:.95rem;line-height:1.8;"></div>' + W.hint('p1-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q27', 'a ímpar, b par: classifique as expressões',
  'Sejam $a$ ímpar e $b$ par. Classifique $a + b + ab$, $2a + 3b$ e $a^2 + b^2$ quanto à paridade (nessa ordem).',
  ['ímpar, par e ímpar', 'par, ímpar e ímpar', 'ímpar, ímpar e par', 'par, par e par', 'ímpar, ímpar e ímpar'], 0,
  '$a = 2k + 1$, $b = 2q$. $a + b + ab = 2k + 1 + 2q + 2q(2k+1) = 2(…) + 1$ → <strong>ímpar</strong>. $2a + 3b = 4k + 2 + 6q$ → <strong>par</strong>. $a^2 + b^2 = (2k+1)^2 + 4q^2 = 4k^2 + 4k + 1 + 4q^2$ → <strong>ímpar</strong>. Atalho: teste $a = 1$, $b = 2$: $5$ (ímpar), $8$ (par), $5$ (ímpar) ✓. <strong>Alternativa A.</strong>'));

b.push(sl('Teoria · algarismos', 'Um número de 3 algarismos é 100a + 10b + c', `
          ${lede('O número $abc$ (algarismos $a, b, c$) vale $100a + 10b + c$. O <strong>invertido</strong> $cba$ vale $100c + 10b + a$. A diferença elimina o algarismo do meio:')}
          ${F('abc − cba = 99(a − c)', true)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Experimente', W.rg('p2-a', 'a (centenas)', 1, 9, 1, 7) + W.rg('p2-b', 'b (dezenas)', 0, 9, 1, 3) + W.rg('p2-c', 'c (unidades)', 0, 9, 1, 5) + W.txt('p2-m', '') + W.txt('p2-d', '') + W.hint('p2-h'))}
            ${callout('Conclusão', 'A diferença entre um número de 3 algarismos e o seu invertido é <strong>sempre múltipla de 99</strong>. O algarismo central $b$ nunca importa — e o das centenas nunca é 0.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q20', 'Números invertidos e a diferença 198',
  'Os números $M = abc$ e $N = cba$ têm algarismos invertidos, com $a > 4$ e $M − N = 198$. Quantos são os valores possíveis de $M$?',
  ['20', '30', '40', '50', '60'], 3,
  '$M − N = 99(a − c) = 198 ⇒ a − c = 2$. Com $a ∈ \\{5, 6, 7, 8, 9\\}$ → $c = a − 2 ∈ \\{3, …, 7\\}$: 5 pares $(a, c)$. O algarismo $b$ é livre (10 opções). Total: $5 × 10 = 50$. <strong>Alternativa D.</strong>'));

b.push(sl('Teoria · ciclos', 'O último algarismo de uma potência se repete', `
          ${lede('Os últimos algarismos de $7^n$ são $7, 9, 3, 1, 7, 9, 3, 1, …$ (período 4). Os de $2^n$: $2, 4, 8, 6, …$ (período 4). Para achar o último algarismo de $b^e$: calcule o ciclo e use o <strong>resto de $e$ por 4</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Exemplo (Treino 2.1)', '$7^{2026}$: $2026 = 4 · 506 + 2$ → mesmo que $7^2 = 49$ → último algarismo <strong>9</strong>.', 'success')}
            ${W.box('Último algarismo de b^e', W.row(W.nm('p3-b', 'b', 7, 1, 'min="0" max="99"'), W.nm('p3-e', 'e', 2026, 1, 'min="1" max="100000"')) + W.txt('p3-r', 'último algarismo = ') + W.txt('p3-c', 'ciclo: ') + W.hint('p3-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · consecutivos', 'Soma de n inteiros consecutivos', `
          ${lede('Somando $n$ inteiros consecutivos a partir de $a$ (isto é, $a, a+1, …, a+n−1$):')}
          ${F('S = n·a + {n(n − 1)|2}', true)}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${callout('Casos úteis', '$n = 10$: $S = 10a + 45$ → termina em <strong>5</strong>. $n = 3$: $S = 3a + 3$ (múltiplo de 3). Para $n$ <strong>ímpar</strong>, $S$ é múltiplo de $n$.', 'success')}
            </div>
            ${W.box('Soma de consecutivos', W.row(W.nm('p4-n', 'n', 10, 1, 'min="1" max="30"'), W.nm('p4-a', 'a', 510, 1)) + W.txt('p4-s', 'S = ') + W.txt('p4-f', '') + W.hint('p4-h'))}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q8', 'Qual pode ser a soma de 10 inteiros consecutivos?',
  'Qual das opções pode ser a soma de <strong>10 inteiros consecutivos</strong>?',
  ['3110', '4121', '4134', '5029', '5145'], 4,
  '$S = 10a + 45$ termina em 5 e $a = {S − 45|10}$ precisa ser inteiro. $5145 = 10 · 510 + 45$ ✓ (a = 510). As outras terminam em 0, 1, 4 ou 9 — impossíveis. <strong>Alternativa E.</strong>'));

b.push(exemplo('Treino 2.6 · prova de múltiplo de 9', 'Por que ab − ba é múltiplo de 9?', 'Seja $ab$ um número de 2 algarismos e $ba$ o seu invertido. Mostre que $ab − ba$ é múltiplo de 9 e calcule para 73.', [
  ['Escreva em base 10', '$ab = 10a + b$ e $ba = 10b + a$'],
  ['Subtraia', '$(10a + b) − (10b + a) = 9a − 9b$'],
  ['Fatore', '$= 9(a − b)$ — múltiplo de 9'],
  ['Teste com 73', '$73 − 37 = 36 = 9 · 4$ ✓']
], 'A diferença entre um número e o seu invertido é sempre múltipla de 9 (2 algarismos) ou de 99 (3 algarismos).', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em paridade e algarismos', [
  ['Esquecer a restrição do algarismo', 'No Q20, $a > 4$ e $c = a − 2$ limitam os pares. O algarismo das centenas nunca é 0; $N = cba$ pode precisar de $c ≠ 0$ se o enunciado pedir 3 algarismos.'],
  ['Parar na verificação por exemplos', 'Testar $a = 1$, $b = 2$ confirma, mas só a demonstração com $2k$ e $2k + 1$ garante para todos.'],
  ['Errar o ciclo', 'O último algarismo depende do <strong>resto do expoente</strong> pelo período. Atenção: resto 0 corresponde ao <strong>último</strong> elemento do ciclo.'],
  ['Aceitar um $a$ não inteiro', '$a = {S − 45|10}$ tem de ser inteiro. $4121$ dá $a = 407,6$ — impossível.']
]));

b.push(quiz([
  { q: 'Se $a$ é ímpar e $b$ é par, então $a^2 + b$ é:', o: ['par', 'ímpar', 'depende de a', 'depende de b'], a: 1 },
  { q: 'A soma de 5 inteiros consecutivos é 105. O menor deles é:', o: ['17', '19', '21', '23'], a: 1 },
  { q: 'O último algarismo de $3^{2026}$ é:', o: ['1', '3', '7', '9'], a: 3 },
  { q: 'Um número $M = abc$ e o invertido $N = cba$ satisfazem $M − N = 297$. Então $a − c$ vale:', o: ['2', '3', '4', '5'], a: 1 }
]));
b.push(fechamento([
  ['Paridade', '$n^2$ tem a paridade de $n$; escreva $2k$ e $2k+1$ e fatore o 2.'],
  ['Algarismos', '$abc − cba = 99(a − c)$; o do meio “some”.'],
  ['Consecutivos', '$S = na + n(n−1)/2$; para $n = 10$ termina em 5.']
], 'Teste números pequenos para ter a ideia e prove com 2k e 2k+1.'));

out.push({ out: DIR + 'aula-2-paridade-algarismos-somas.html', html: K.deck({
  title: 'Paridade, algarismos e somas de inteiros — ENA · PROFMAT', brand: 'Números Inteiros', key: 'c2a2', meta: 'Capítulo 2 · Aula 2 · Paridade e algarismos', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['p1-a', 'p1-b'], function(){ var A = +$('p1-a').value, B = +$('p1-b').value; function P(v){ return v % 2 ? 'ímpar' : 'par'; } var linhas = [['a + b', (A + B) % 2], ['a · b', (A * B) % 2], ['a + b + ab', (A + B + A * B) % 2], ['2a + 3b', (2 * A + 3 * B) % 2], ['a² + b²', (A + B) % 2], ['a² + b', (A + B) % 2]]; $('p1-r').innerHTML = linhas.map(function(l){ return '<b class="mono">' + l[0] + '</b> é <span style="color:' + (l[1] ? 'var(--danger)' : 'var(--success)') + ';font-weight:700;">' + P(l[1]) + '</span>'; }).join('<br>'); $('p1-h').textContent = 'Com a ' + P(A) + ' e b ' + P(B) + '. (O Q27 usa a ímpar e b par.)'; });
  bind(['p2-a', 'p2-b', 'p2-c'], function(){ var a = +$('p2-a').value, b = +$('p2-b').value, c = +$('p2-c').value; $('p2-av').textContent = a; $('p2-bv').textContent = b; $('p2-cv').textContent = c; var M = 100 * a + 10 * b + c, N = 100 * c + 10 * b + a; $('p2-m').textContent = 'M = ' + a + b + c + ' = ' + M + ' · N = ' + c + b + a + ' = ' + N; $('p2-d').textContent = 'M − N = ' + (M - N) + ' = 99·(' + a + ' − ' + c + ') = ' + 99 * (a - c); $('p2-h').textContent = (M - N) % 99 === 0 ? 'Múltiplo de 99 ✓ (' + (M - N) / 99 + ' × 99)' : ''; });
  function ld(b, e){ var r = 1, x = b % 10; while(e > 0){ if(e & 1) r = (r * x) % 10; x = (x * x) % 10; e >>= 1; } return r; }
  bind(['p3-b', 'p3-e'], function(){ var b = Math.round(+$('p3-b').value), e = Math.round(+$('p3-e').value); if(e < 1) return; $('p3-r').textContent = ld(Math.abs(b), e); var s = [], seen = {}, x = ld(Math.abs(b), 1); for(var i = 1; i <= 8; i++) s.push(ld(Math.abs(b), i)); $('p3-c').textContent = s.join(', ') + ' …'; $('p3-h').textContent = 'e mod 4 = ' + (e % 4) + ' (resto 0 → 4º elemento do ciclo).'; });
  bind(['p4-n', 'p4-a'], function(){ var n = Math.round(+$('p4-n').value), a = Math.round(+$('p4-a').value); if(n < 1) return; var S = n * a + n * (n - 1) / 2; $('p4-s').textContent = S; var L = []; for(var i = 0; i < Math.min(n, 6); i++) L.push(a + i); $('p4-f').textContent = n + '·' + a + ' + ' + (n * (n - 1) / 2) + ' = ' + S + '   (' + L.join(' + ') + (n > 6 ? ' + …' : '') + ')'; $('p4-h').textContent = n === 10 ? 'Para n = 10, S = 10a + 45 termina em 5 (aqui: ' + (S % 10) + ').' : (n % 2 ? 'n ímpar → S múltiplo de n: ' + (S % n === 0 ? 'sim' : 'não') : ''); });`
}) });

module.exports = out;
