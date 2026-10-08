// Unidade 8 — Sequências: PA, PG e somas (capítulo 8)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/08-sequencias-pa-pg/';
const out = [];

// ====================== AULA 1: PA ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 8 · Aula 1', h1: 'Progressão aritmética e <span style="color:var(--primary);">de Sₙ para aₙ</span>',
  sub: 'Termo geral, soma dos termos, termo médio, somas notáveis e o truque que transforma “soma dos n primeiros termos” em “o termo n”.',
  badges: [['ENA 2026 Q16 · 2025 Q15'], ['aₙ = a₁ + (n − 1)r', 'growth'], ['aₙ = Sₙ − Sₙ₋₁', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do menino Gauss ao décimo termo.', [
  ['Termo geral e soma da PA', 'a₁, r, aₙ e Sₙ = n(a₁ + aₙ)/2', 'stairs'],
  ['Termo médio', 'três termos x − r, x, x + r', 'link'],
  ['De Sₙ para aₙ', 'a₁ = S₁ e aₙ = Sₙ − Sₙ₋₁ (ENA 2026 Q16)', 'bulb'],
  ['Somas notáveis', '1+…+n, ímpares, pares, quadrados, cubos', 'chart'],
  ['Triângulo retângulo em PA', 'lados 3, 4, 5 (ENA 2025 Q15)', 'target']
]));
a.push(objetivosSlide([
  'Usar $a_n = a_1 + (n − 1)r$ e $S_n = {n(a_1 + a_n)|2}$ em problemas de texto.',
  'Reconhecer a <strong>PA escondida</strong> numa soma $S_n = An^2 + Bn$.',
  'Calcular <strong>somas notáveis</strong> de inteiros, ímpares e pares.',
  'Aplicar o <strong>termo médio</strong> e a ideia “três termos em PA”.'
], 'Em prova', 'A pergunta “qual o décimo termo?” quando dão a <strong>soma</strong> dos termos é quase sempre $a_n = S_n − S_{n−1}$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A soma de 1 a 100 em segundos', `
          ${lede('Diz a lenda que o menino Gauss somou $1 + 2 + ⋯ + 100$ em segundos: <strong>pareou</strong> o primeiro com o último, o segundo com o penúltimo, e assim por diante.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quanto vale $1 + 2 + 3 + ⋯ + 100$?', ['5000', '5050', '5100', '10 000'], 1, 'Há 50 pares e cada par soma $101$: $50 · 101 = 5050$. É a fórmula ${n(a_1 + a_n)|2} = {100 · 101|2}$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em uma PA, os termos <strong>equidistantes dos extremos somam o mesmo valor</strong>: $a_1 + a_n = a_2 + a_{n−1} = ⋯$. Daí vem $S_n$.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · PA', 'Termo geral, soma e termo médio', `
          <div class="grid2">
            <div>
              ${F('a_n = a_1 + (n − 1)r   a_m = a_n + (m − n)r', true)}
              ${F('S_n = {(a_1 + a_n)·n|2} = {n[2a_1 + (n − 1)r]|2}', true)}
              ${callout('Termo médio', '$b = {a + c|2}$ quando $a, b, c$ estão em PA. Três termos em PA: $x − r,\\ x,\\ x + r$.', 'success')}
            </div>
            ${W.box('Calculadora de PA', W.row(W.nm('s1-a', 'a₁', 5), W.nm('s1-r', 'razão r', 3), W.nm('s1-n', 'n', 20, 1, 'min="1" max="200"')) + W.txt('s1-l', 'Primeiros termos: ') + W.txt('s1-t', 'aₙ = ') + W.txt('s1-s', 'Sₙ = ') + W.hint('s1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Treino 8.1', 'PA com a₁ = 5 e r = 3: a₂₀ e S₂₀', 'Calcule o vigésimo termo e a soma dos 20 primeiros.', [
  ['Termo geral', '$a_{20} = 5 + 19·3 = 62$'],
  ['Soma', '$S_{20} = {20(5 + 62)|2} = 670$']
], 'O 20º termo é <strong>62</strong> e a soma dos 20 primeiros é <strong>670</strong>.', 'primary'));

a.push(sl('Truque · de Sₙ para aₙ', 'Dada a soma dos n primeiros termos, ache o termo', `
          ${lede('O <strong>termo</strong> é a diferença de duas somas consecutivas: o que a soma ganhou ao passar de $n − 1$ para $n$ termos.')}
          ${F('a_1 = S_1   a_n = S_n − S_{n−1}\\ (n ≥ 2)', true)}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${callout('Caso quadrático', 'Se $S_n = An^2 + Bn$, a sequência é uma <strong>PA</strong> com $a_1 = A + B$ e razão $r = 2A$; $a_n = A(2n − 1) + B$.', 'success')}
              ${callout('ENA 2026 Q16', '$S_n = 3n^2 + 4n ⇒ a_n = 3(2n − 1) + 4 = 6n + 1 ⇒ a_{10} = 61$.')}
            </div>
            ${W.box('Sₙ = An² + Bn', W.row(W.nm('s2-A', 'A', 3), W.nm('s2-B', 'B', 4), W.nm('s2-n', 'n', 10, 1, 'min="2" max="100"')) + W.txt('s2-s', '') + W.txt('s2-a', 'aₙ = Sₙ − Sₙ₋₁ = ') + W.txt('s2-f', 'Pela fórmula A(2n − 1) + B = ') + W.hint('s2-h'))}
          </div>`, { cls: '' }));

a.push(ja('ENA 2026 · Q16', 'O décimo termo de uma sequência',
  'A soma dos $n$ primeiros termos de uma sequência é $S_n = 3n^2 + 4n$. Qual é o décimo termo?',
  ['61', '64', '67', '70', '340'], 0,
  '$a_{10} = S_{10} − S_9 = (300 + 40) − (243 + 36) = 340 − 279 = 61$. Pela fórmula $a_n = 6n + 1$: $a_{10} = 61$. <strong>Alternativa A.</strong> (340 é a soma dos 10 primeiros, não o décimo termo.)'));

a.push(sl('Somas notáveis', 'Para decorar', `
          <div class="grid2">
            <div>
              ${F('1 + 2 + ⋯ + n = {n(n + 1)|2}')}
              ${F('1^2 + 2^2 + ⋯ + n^2 = {n(n + 1)(2n + 1)|6}')}
              ${F('1^3 + 2^3 + ⋯ + n^3 = [{n(n + 1)|2}]^2')}
              ${F('"ímpares:" 1 + 3 + ⋯ + (2n − 1) = n^2   "pares:" 2 + 4 + ⋯ + 2n = n(n + 1)')}
              ${callout('Treino 8.3', 'Soma dos múltiplos de 3 de 1 a 100: $3, 6, …, 99$ são 33 termos; $S = {33(3 + 99)|2} = 1683$.', 'success')}
            </div>
            ${W.box('Somas até n', W.rg('s3-n', 'n', 1, 50, 1, 10) + W.txt('s3-a', '1 + … + n = ') + W.txt('s3-b', '1² + … + n² = ') + W.txt('s3-c', '1³ + … + n³ = ') + W.txt('s3-d', 'ímpares (n primeiros) = ') + W.txt('s3-e', 'pares (n primeiros) = '))}
          </div>`, { cls: '' }));

a.push(sl('Geometria + PA', 'Triângulo retângulo com lados em PA é 3-4-5', `
          ${lede('Se os lados estão em PA, escreva $x − r$, $x$, $x + r$. Pitágoras: $(x + r)^2 = (x − r)^2 + x^2 ⇒ 4xr = x^2 ⇒ x = 4r$. Os lados são <strong>$3r, 4r, 5r$</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Consequência', 'Os ângulos agudos têm seno e cosseno iguais a $3/5$ e $4/5$ (ou o contrário). Logo $cos α + cos β = {3|5} + {4|5} = {7|5}$.', 'success')}
            ${mini('Os lados de um triângulo retângulo estão em PA e o maior é 10. O menor lado mede:', ['4', '5', '6', '8'], 2, 'Lados $3r, 4r, 5r$ com $5r = 10 ⇒ r = 2$: lados $6, 8, 10$. O menor mede <strong>6</strong>.')}
          </div>`, { cls: '' }));

a.push(ja('ENA 2025 · Q15', 'Lados em PA e a soma dos cossenos',
  'Os lados de um triângulo retângulo estão em PA. Se $α$ e $β$ são os ângulos agudos, qual o valor de $\cos α + \cos β$?',
  ['1', '6/5', '4/3', '3/2', '7/5'], 4,
  'Lados $x − r, x, x + r$: $(x + r)^2 = (x − r)^2 + x^2 ⇒ 4xr = x^2 ⇒ x = 4r$ → lados $3r, 4r, 5r$. $\cos α + \cos β = {3|5} + {4|5} = {7|5}$. <strong>Alternativa E.</strong>'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em PA', [
  ['Confundir $S_n$ com $a_n$', 'Pedem o <strong>termo</strong> mas dão a <strong>soma</strong>: $a_n = S_n − S_{n−1}$. $S_{10} = 340$ não é o décimo termo.'],
  ['Contar mal $n$', 'De 3 a 99 de 3 em 3: $n = (99 − 3)/3 + 1 = 33$, não 32.'],
  ['Esquecer $a_1 = S_1$', 'A fórmula $S_n − S_{n−1}$ só vale a partir de $n ≥ 2$; o primeiro termo é $S_1$.'],
  ['Usar $r$ errado', 'Em $S_n = An^2 + Bn$, a razão é $2A$ (não $A$).']
]));

a.push(quiz([
  { q: 'Em uma PA com $a_1 = 5$ e $r = 3$, o termo $a_{20}$ vale:', o: ['57', '60', '62', '65'], a: 2 },
  { q: 'A soma dos 50 primeiros números ímpares positivos é:', o: ['1250', '2500', '2550', '5000'], a: 1 },
  { q: 'Se $S_n = n^2 + 2n$, o valor de $a_5$ é:', o: ['9', '11', '35', '13'], a: 1 },
  { q: 'Somando os múltiplos de 3 de 1 a 100 obtemos:', o: ['1650', '1683', '1700', '1716'], a: 1 }
]));
a.push(fechamento([
  ['PA', '$a_n = a_1 + (n − 1)r$; $S_n = n(a_1 + a_n)/2$; extremos equidistantes somam igual.'],
  ['Sₙ → aₙ', '$a_n = S_n − S_{n−1}$; se $S_n = An^2 + Bn$, é PA de razão $2A$.'],
  ['Somas notáveis', '$n(n+1)/2$ · ímpares $n^2$ · pares $n(n+1)$.']
], 'Quando falam em soma e pedem um termo: diferença de somas.'));

out.push({ out: DIR + 'aula-1-progressao-aritmetica.html', html: K.deck({
  title: 'Progressão aritmética e de Sₙ para aₙ — ENA · PROFMAT', brand: 'Sequências', key: 'c8a1', meta: 'Capítulo 8 · Aula 1 · Progressão aritmética', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['s1-a', 's1-r', 's1-n'], function(){ var a = +$('s1-a').value, r = +$('s1-r').value, n = Math.round(+$('s1-n').value); if(n < 1) return; var an = a + (n - 1) * r, S = n * (a + an) / 2, L = []; for(var i = 0; i < Math.min(n, 8); i++) L.push(a + i * r); $('s1-l').textContent = L.join(', ') + (n > 8 ? ', …' : ''); $('s1-t').textContent = a + ' + ' + (n - 1) + '·' + r + ' = ' + an; $('s1-s').textContent = n + '·(' + a + ' + ' + an + ')/2 = ' + S; $('s1-h').textContent = 'a₁ + aₙ = ' + (a + an) + ' (cada par de extremos); ' + (n % 2 ? 'termo central: ' + (a + (n - 1) / 2 * r) : n / 2 + ' pares de soma ' + (a + an)) + '.'; });
  bind(['s2-A', 's2-B', 's2-n'], function(){ var A = +$('s2-A').value, B = +$('s2-B').value, n = Math.round(+$('s2-n').value); if(n < 2) return; function S(k){ return A * k * k + B * k; } $('s2-s').textContent = 'S' + n + ' = ' + S(n) + ' · S' + (n - 1) + ' = ' + S(n - 1); $('s2-a').textContent = S(n) - S(n - 1); $('s2-f').textContent = A * (2 * n - 1) + B; $('s2-h').textContent = 'a₁ = S₁ = ' + S(1) + ' = A + B · razão r = 2A = ' + 2 * A + ' · para A = 3, B = 4, n = 10: a₁₀ = 61 (ENA 2026 Q16).'; });
  bind(['s3-n'], function(){ var n = +$('s3-n').value; $('s3-nv').textContent = n; $('s3-a').textContent = n * (n + 1) / 2; $('s3-b').textContent = n * (n + 1) * (2 * n + 1) / 6; $('s3-c').textContent = Math.pow(n * (n + 1) / 2, 2); $('s3-d').textContent = n * n; $('s3-e').textContent = n * (n + 1); });`
}) });

// ====================== AULA 2: PG, soma geométrica e recursivas ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 8 · Aula 2', h1: 'Progressão geométrica e <span style="color:var(--growth);">sequências recursivas</span>',
  sub: 'Termo geral, soma finita e infinita, termo médio, a soma geométrica “nua” e o método de calcular os primeiros termos para descobrir o padrão.',
  badges: [['ENA 2026 Q23, Q29'], ['ENA 2025 Q12'], ['S = a₁(qⁿ − 1)/(q − 1)', 'growth']], color: 'growth'
}));
b.push(roteiroSlide('Multiplicar em vez de somar: o ritmo da PG.', [
  ['Termo geral e termo médio', 'aₙ = a₁qⁿ⁻¹ · b² = ac', 'curve-up'],
  ['Soma finita e infinita', 'a₁(qⁿ − 1)/(q − 1) · a₁/(1 − q)', 'chart'],
  ['Soma geométrica “nua”', '1 + q + … + qⁿ⁻¹ (ENA 2026 Q23)', 'bulb'],
  ['PG de termos positivos', 'ENA 2025 Q12', 'target'],
  ['Sequências recursivas', 'calcule 6 a 8 termos e ache o padrão (ENA 2026 Q29)', 'link']
]));
b.push(objetivosSlide([
  'Usar $a_n = a_1 q^{n−1}$ e a <strong>soma</strong> de $n$ termos de uma PG.',
  'Calcular a <strong>soma infinita</strong> quando $∣q∣ < 1$.',
  'Resolver problemas com <strong>três termos em PG</strong> e razão desconhecida.',
  'Descobrir o padrão de uma <strong>sequência recursiva</strong> calculando os primeiros termos.'
], 'Em prova', 'Em PG com termos positivos, a razão é positiva: descarte a raiz negativa da equação do 2º grau.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', '1 + 2 + 4 + 8 + … + 512', `
          ${lede('Dobrando a cada passo, a soma cresce rápido. Mas existe uma fórmula curta: $1 + 2 + 4 + ⋯ + 2^9 = 2^{10} − 1$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quanto vale $1 + 2 + 4 + 8 + ⋯ + 512$?', ['1000', '1023', '1024', '1025'], 1, 'PG com $a_1 = 1$, $q = 2$ e $n = 10$ termos: $S = {2^{10} − 1|2 − 1} = 1023$. Dica: a soma é sempre uma unidade <strong>menor</strong> que a próxima potência de 2.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Na PG, cada termo é o anterior vezes $q$. A soma $S_n$ “telescopa”: $qS_n − S_n = a_1(q^n − 1)$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · PG', 'Termo geral, termo médio e soma', `
          <div class="grid2">
            <div>
              ${F('a_n = a_1 q^{n−1}   q = {a_{n+1}|a_n}', true)}
              ${F('S_n = a_1 {q^n − 1|q − 1}\\ (q ≠ 1)   S_∞ = {a_1|1 − q}\\ (∣q∣ < 1)', true)}
              ${callout('Termo médio e três termos', '$b^2 = ac$ quando $a, b, c$ estão em PG. Três termos em PG: ${x|q},\\ x,\\ xq$. Produto de $n$ termos: $(a_1 a_n)^{n/2}$.', 'success')}
            </div>
            ${W.box('Calculadora de PG', W.row(W.nm('t1-a', 'a₁', 2), W.nm('t1-q', 'razão q', 3, 0.5), W.nm('t1-n', 'n', 6, 1, 'min="1" max="40"')) + W.txt('t1-l', 'Termos: ') + W.txt('t1-t', 'aₙ = ') + W.txt('t1-s', 'Sₙ = ') + W.hint('t1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Soma infinita', 'Quando a soma de infinitos termos é finita', `
          ${lede('Se $∣q∣ < 1$, os termos encolhem e a soma se aproxima de $S_∞ = {a_1|1 − q}$. Ex.: $1 + {1|2} + {1|4} + ⋯ = 2$; $1 + {1|3} + {1|9} + ⋯ = {3|2}$ (Treino 8.6).')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Somas parciais e o limite', W.rg('t2-a', 'a₁', 1, 10, 1, 1) + W.rg('t2-q', 'razão q (decimal)', -9, 9, 1, 5) + W.svg('t2-s', '0 0 360 200') + W.hint('t2-h'))}
            ${callout('Condição', 'A fórmula só vale com $∣q∣ < 1$. Para $q ≥ 1$ a soma infinita <strong>diverge</strong> (cresce sem limite).', 'danger')}
          </div>`, { cls: 'growth' }));

b.push(sl('Soma geométrica “nua”', '1 + q + q² + … + qⁿ⁻¹', `
          ${lede('Quando o primeiro termo é $1$, a soma é só $S = {q^n − 1|q − 1}$. Se a PG começa em $a_1$, multiplique por $a_1$.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Com q = 5', '$1 + 5 + 25 + ⋯ + 5^{n−1} = {5^n − 1|4}$. Se a PG começa em ${1|2}$: ${1|2} · {5^n − 1|4} = {5^n − 1|8}$. Teste $n = 1$: ${5 − 1|8} = {1|2}$ ✓.', 'success')}
            ${mini('A soma dos $n$ primeiros termos da PG de primeiro termo $1/2$ e razão 5 é:', ['$5^n − 1$', '${5^n − 1|4}$', '${5^n + 1|8}$', '${5^n − 1|8}$'], 3, '$S_n = {1|2}·{5^n − 1|5 − 1} = {5^n − 1|8}$. Teste $n = 1$: $S_1 = {1|2}$ ✓ (a alternativa B daria 1).')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q23', 'Soma de uma PG de razão 5',
  'A soma dos $n$ primeiros termos da PG de primeiro termo $1/2$ e razão $5$ é:',
  ['${5^n − 1|4}$', '${5^n|2}$', '${5^{n−1} − 1|8}$', '${5^n + 1|8}$', '${5^n − 1|8}$'], 4,
  '$S = {1|2}(1 + 5 + ⋯ + 5^{n−1}) = {1|2}·{5^n − 1|4} = {5^n − 1|8}$. Teste $n = 1$: ${5 − 1|8} = {1|2}$ ✓. <strong>Alternativa E.</strong>'));

b.push(ja('ENA 2025 · Q12', 'PG de termos positivos',
  'Uma PG de termos positivos tem soma dos três primeiros termos igual a $93$ e soma do 2º com o 3º igual a $90$. Qual o terceiro termo?',
  ['27', '45', '60', '75', '81'], 3,
  '$a + aq + aq^2 = 93$ e $aq + aq^2 = 90 ⇒ a = 3$. Então $3q + 3q^2 = 90 ⇒ q^2 + q − 30 = 0 ⇒ q = 5$ (ou $−6$, descartada: termos positivos). $a_3 = 3 · 25 = 75$. <strong>Alternativa D.</strong>'));

b.push(sl('Sequências recursivas', 'Calcule 6 a 8 termos e procure o padrão', `
          ${lede('Em sequências definidas por regras, não tente generalizar de cabeça: <strong>calcule os primeiros termos</strong> e procure período, dobro ou potência de 2. Só então generalize.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('O sistema recursivo da ENA 2026 Q29', W.rg('t3-n', 'número do sistema', 1, 12, 1, 11) + '<div id="t3-r" style="margin-top:8px;font-size:.88rem;line-height:1.7;"></div>' + W.hint('t3-h'))}
            ${callout('Regra do enunciado', 'O sistema ${1|2}x − {1|2}y = b$ e ${1|2}x + {1|2}y = a$ tem solução $x = a + b$, $y = a − b$. A solução $(x_n, y_n)$ vira $(a, b)$ do próximo, começando em $(a, b) = (1, 0)$.')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q29', 'A solução do 11º sistema',
  'No sistema ${1|2}x − {1|2}y = b$, ${1|2}x + {1|2}y = a$, a solução $(x_n, y_n)$ do $n$-ésimo sistema fornece $(a, b) = (x_n, y_n)$ do $(n + 1)$-ésimo, começando com $(a, b) = (1, 0)$ (solução $(1, 1)$). Qual a solução do 11º sistema?',
  ['$(16, 16)$', '$(16, 0)$', '$(32, 0)$', '$(32, 32)$', '$(64, 0)$'], 3,
  'A solução é $x = a + b$, $y = a − b$. Então $(x_{n+1}, y_{n+1}) = (x_n + y_n, x_n − y_n)$: $S_1 = (1, 1) → S_2 = (2, 0) → S_3 = (2, 2) → S_4 = (4, 0) → S_5 = (4, 4) → ⋯$. Padrão: $S_{2k+1} = (2^k, 2^k)$ e $S_{2k} = (2^k, 0)$. Para $S_{11}$: $k = 5$ → <strong>$(32, 32)$ — alternativa D.</strong>'));

b.push(exemplo('Treino 8.5', 'PG com a₂ = 6 e a₅ = 162', 'Ache $a_1$ e a razão $q$.', [
  ['Divida os termos', '${a_5|a_2} = q^3 = {162|6} = 27 ⇒ q = 3$'],
  ['Volte ao 2º termo', '$a_2 = a_1 q ⇒ 6 = 3a_1 ⇒ a_1 = 2$']
], '$a_1 = 2$ e $q = 3$ (PG: 2, 6, 18, 54, 162, …).', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em PG e recursivas', [
  ['Razão negativa em PG positiva', 'Em $q^2 + q − 30 = 0$, $q = 5$ ou $q = −6$; termos positivos ⇒ <strong>q = 5</strong>.'],
  ['Soma infinita sem $∣q∣ < 1$', '$S_∞ = a_1/(1 − q)$ só vale se $∣q∣ < 1$.'],
  ['Esquecer o $a_1$ na soma “nua”', '$1 + q + ⋯ + q^{n−1} = (q^n − 1)/(q − 1)$ só vale com primeiro termo 1; multiplique por $a_1$ se for outro.'],
  ['Generalizar cedo demais', 'Em recursivas, calcule 6–8 termos antes de propor a fórmula (período, dobro, potência de 2).']
]));

b.push(quiz([
  { q: 'A soma dos 6 primeiros termos da PG $2, 6, 18, …$ é:', o: ['364', '728', '1092', '1456'], a: 1 },
  { q: 'Uma PG tem $a_2 = 6$ e $a_5 = 162$. A razão é:', o: ['2', '3', '4', '27'], a: 1 },
  { q: 'O valor de $1 + {1|3} + {1|9} + ⋯$ é:', o: ['1', '4/3', '3/2', '2'], a: 2 },
  { q: 'Três números em PG têm produto 216 e o termo central é:', o: ['3', '6', '9', '12'], a: 1 }
]));
b.push(fechamento([
  ['PG', '$a_n = a_1 q^{n−1}$; $S_n = a_1(q^n − 1)/(q − 1)$; $S_∞ = a_1/(1 − q)$ se $∣q∣ < 1$.'],
  ['Soma nua', '$1 + q + ⋯ + q^{n−1} = (q^n − 1)/(q − 1)$; multiplique por $a_1$.'],
  ['Recursivas', 'Calcule 6 a 8 termos, ache o padrão e só então generalize.']
], 'Na PG, multiplique; nas recursivas, calcule antes de generalizar.'));

out.push({ out: DIR + 'aula-2-progressao-geometrica-recursivas.html', html: K.deck({
  title: 'Progressão geométrica e sequências recursivas — ENA · PROFMAT', brand: 'Sequências', key: 'c8a2', meta: 'Capítulo 8 · Aula 2 · PG e recursivas', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['t1-a', 't1-q', 't1-n'], function(){ var a = +$('t1-a').value, q = +$('t1-q').value, n = Math.round(+$('t1-n').value); if(n < 1) return; var an = a * Math.pow(q, n - 1), L = []; for(var i = 0; i < Math.min(n, 7); i++) L.push(nf(a * Math.pow(q, i), 4)); $('t1-l').textContent = L.join(', ') + (n > 7 ? ', …' : ''); $('t1-t').textContent = nf(an, 6); var S = q === 1 ? a * n : a * (Math.pow(q, n) - 1) / (q - 1); $('t1-s').textContent = nf(S, 6); $('t1-h').textContent = Math.abs(q) < 1 ? 'Com |q| < 1 a soma infinita é ' + nf(a / (1 - q), 4) + '.' : 'Com |q| ≥ 1 a soma infinita diverge.'; });
  bind(['t2-a', 't2-q'], function(){ var a = +$('t2-a').value, q = +$('t2-q').value / 10; $('t2-av').textContent = a; $('t2-qv').textContent = nf(q, 1); var svg = $('t2-s'); svg.innerHTML = ''; var N = 12, S = [], s = 0; for(var i = 0; i < N; i++){ s += a * Math.pow(q, i); S.push(s); } var lim = a / (1 - q), mx = Math.max.apply(null, S.concat([lim])) * 1.1, mn = Math.min(0, Math.min.apply(null, S.concat([lim]))) * 1.1, W = 360, H = 200;
    function sy(v){ return H - 24 - (v - mn) / (mx - mn || 1) * (H - 44); } el('line', {x1: 20, y1: sy(0), x2: 350, y2: sy(0), stroke: 'var(--ink-soft)'}, svg); el('line', {x1: 20, y1: sy(lim), x2: 350, y2: sy(lim), stroke: 'var(--success)', 'stroke-dasharray': '5 4', 'stroke-width': 2}, svg);
    S.forEach(function(v, i){ var x = 28 + i * 26.5; el('rect', {x: x, y: Math.min(sy(v), sy(0)), width: 18, height: Math.abs(sy(v) - sy(0)), fill: 'var(--primary)', 'fill-opacity': .7}, svg); }); var t = el('text', {x: 346, y: sy(lim) - 5, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--success)', 'font-weight': 700}, svg); t.textContent = 'limite ' + nf(lim, 3);
    $('t2-h').textContent = 'S₁₂ = ' + nf(S[N - 1], 5) + ' · S∞ = a₁/(1 − q) = ' + a + '/' + nf(1 - q, 2) + ' = ' + nf(lim, 5); });
  bind(['t3-n'], function(){ var N = +$('t3-n').value; $('t3-nv').textContent = N; var a = 1, b = 0, rows = []; for(var k = 1; k <= N; k++){ var x = a + b, y = a - b; rows.push([k, a, b, x, y]); a = x; b = y; } $('t3-r').innerHTML = '<table class="tbl" style="margin:0;"><tr><th>nº</th><th>(a, b)</th><th>solução (x, y)</th></tr>' + rows.map(function(r){ return '<tr' + (r[0] === N ? ' style="font-weight:700;"' : '') + '><td>' + r[0] + '</td><td>(' + r[1] + ', ' + r[2] + ')</td><td>(' + r[3] + ', ' + r[4] + ')</td></tr>'; }).join('') + '</table>'; $('t3-h').textContent = 'Padrão: nos ímpares (2^k, 2^k); nos pares (2^k, 0). Sistema ' + N + ': (' + rows[N - 1][3] + ', ' + rows[N - 1][4] + ').'; });`
}) });

module.exports = out;
