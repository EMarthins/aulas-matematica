// Unidade 15 — Tópicos complementares · Aula 2: polinômios, complexos, matrizes, financeira, dízimas, médias, demonstrações
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/15-topicos-complementares/';
const b = [];

b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 15 · Aula 2', h1: 'Polinômios, complexos, matrizes e <span style="color:var(--growth);">mais</span>',
  sub: 'Teorema do resto e Girard da cúbica, números complexos, determinantes 2×2, matemática financeira, dízimas, desigualdade das médias e técnicas de demonstração.',
  badges: [['EXTRA'], ['P(a) = resto', 'growth'], ['M = C(1 + i)ᵗ', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Seis blocos curtos, cada um com uma ideia-chave.', [
  ['Polinômios', 'teorema do resto, Briot–Ruffini, Girard da cúbica', 'sigma'],
  ['Números complexos', 'iⁿ, conjugado, módulo, quociente', 'planet'],
  ['Matrizes e determinantes', 'det 2×2, inversa, Cramer', 'grid'],
  ['Matemática financeira', 'juros simples e compostos, taxa equivalente', 'coin'],
  ['Dízimas e conjuntos numéricos', 'geratriz', 'numbers'],
  ['Médias e demonstrações', 'MH ≤ MG ≤ MA, indução, absurdo, pombos', 'bulb']
]));
b.push(objetivosSlide([
  'Usar o <strong>teorema do resto</strong> e o dispositivo de <strong>Briot–Ruffini</strong>.',
  'Operar com <strong>complexos</strong>: potências de $i$, conjugado, módulo e quociente.',
  'Calcular <strong>determinantes</strong> 2×2, inversa e aplicar <strong>juros compostos</strong>.',
  'Achar a <strong>geratriz</strong> de dízimas e usar $MH ≤ MG ≤ MA$.'
], 'Em prova', 'Todos EXTRA: priorize depois dos capítulos 1 a 14. Cada bloco cabe em 10 minutos de estudo.', 'growth', 'growth-ink'));

b.push(sl('Polinômios', 'Teorema do resto e Briot–Ruffini', `
          <div class="grid2">
            <div>
              ${F('"resto de" P(x) ÷ (x − a) = P(a)   P(a) = 0 ⇔ (x − a) "divide" P')}
              ${callout('Girard (cúbica)', 'Para $ax^3 + bx^2 + cx + d$: $x_1 + x_2 + x_3 = −{b|a}$; $x_1x_2 + x_1x_3 + x_2x_3 = {c|a}$; $x_1x_2x_3 = −{d|a}$. Raízes racionais ${p|q}$ de coeficientes inteiros: $p ∣ a_0$ e $q ∣ a_n$.', 'success')}
              ${callout('Treino 15.4', 'Resto de $x^3 − 2x + 5$ por $x − 2$: $P(2) = 8 − 4 + 5 = 9$. As raízes de $x^3 − 6x^2 + 11x − 6$ somam $6$ e multiplicam $6$ (raízes 1, 2, 3).')}
            </div>
            ${W.box('Briot–Ruffini', '<div><label>Coeficientes (do maior grau)</label><input type="text" id="b1-c" value="1, 0, -2, 5" style="font:inherit;width:100%;padding:.4em .6em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);"></div>' + W.nm('b1-a', 'dividir por (x − a), a =', 2) + W.txt('b1-q', 'Quociente: ') + W.txt('b1-r', 'Resto = P(a) = ') + W.hint('b1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Números complexos', 'i, conjugado, módulo e quociente', `
          <div class="grid2">
            <div>
              ${F('i^2 = −1   i^n "repete a cada 4:" i, −1, −i, 1')}
              ${F('z = a + bi   z̄ = a − bi   ∣z∣ = √{a^2 + b^2}   z z̄ = ∣z∣^2')}
              ${callout('Quociente', 'Multiplique por $z̄$: ${1|1 + i} = {1 − i|2}$. Raízes complexas com $Δ < 0$: ${−b ± i√{−Δ}|2a}$. Polar: $z^n = ∣z∣^n(cos nθ + i sen nθ)$.', 'success')}
              ${callout('Treino 15.5', '$2026 ≡ 2 (mod 4) ⇒ i^{2026} = i^2 = −1$.')}
            </div>
            ${W.box('Complexos', W.row(W.nm('b2-a', 'a', 1), W.nm('b2-b', 'b', 1), W.nm('b2-n', 'n (para iⁿ)', 2026, 1, 'min="0"')) + W.txt('b2-i', 'iⁿ = ') + W.txt('b2-z', 'z̄ e |z| = ') + W.txt('b2-q', '1/z = ') + W.hint('b2-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Matrizes', 'Determinante 2×2, inversa e Cramer', `
          <div class="grid2">
            <div>
              ${F('det [ a b ; c d ] = ad − bc   A^{−1} = {1|ad − bc}[ d  −b ; −c  a ]')}
              ${callout('Propriedades', '3×3: regra de Sarrus. $det(AB) = det A·det B$. O produto de matrizes <strong>não</strong> é comutativo. Sistema $n × n$: $det ≠ 0$ ⇒ solução única (Cramer).', 'success')}
            </div>
            ${W.box('Matriz 2×2', W.row(W.nm('b3-a', 'a', 2), W.nm('b3-b', 'b', 1)) + W.row(W.nm('b3-c', 'c', 5), W.nm('b3-d', 'd', 3)) + W.txt('b3-t', 'Determinante = ') + W.txt('b3-i', 'Inversa: ') + W.hint('b3-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Matemática financeira', 'Juros simples, compostos e taxas equivalentes', `
          <div class="grid2">
            <div>
              ${F('"simples:" J = C i t   M = C(1 + i t)   "compostos:" M = C(1 + i)^t')}
              ${F('1 + i_{anual} = (1 + i_{mensal})^{12}')}
              ${callout('Treino 15.6', '$1000$ a $10%$ ao mês por 2 meses: $M = 1000 · 1,1^2 = 1210$. Taxa e tempo na <strong>mesma unidade</strong>. Depósitos periódicos → soma de PG.', 'success')}
            </div>
            ${W.box('Simples × compostos', W.row(W.nm('b4-c', 'Capital C', 1000), W.nm('b4-i', 'taxa i (%)', 10), W.nm('b4-t', 'tempo t', 2, 1, 'min="0"')) + W.txt('b4-s', 'Montante simples = ') + W.txt('b4-m', 'Montante composto = ') + W.txt('b4-e', 'Taxa anual equivalente a i ao mês: ') + W.hint('b4-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Dízimas e conjuntos numéricos', 'Qual é a fração geratriz?', `
          <div class="grid2">
            <div>
              ${F('N ⊂ Z ⊂ Q ⊂ R   "racional ⇔ decimal finito ou dízima periódica"')}
              ${callout('Geratriz', 'Padrões: $0,aaa… = {a|9}$; $0,ababab… = {ab|99}$; $0,abbb… = {ab − a|90}$. Ex.: $0,777… = {7|9}$; $0,1666… = {16 − 1|90} = {1|6}$. E $0,999… = 1$.', 'success')}
              ${callout('Lembre', 'Soma e produto de racionais são racionais; racional não nulo × irracional é irracional; irracional ± irracional pode ser racional ($√2 + (−√2) = 0$).')}
            </div>
            ${W.box('Dízima periódica', W.row(W.nm('b5-a', 'parte não periódica (dígitos)', '1', 1, 'min="0"'), W.nm('b5-p', 'período (dígitos)', '6', 1, 'min="0"')) + W.txt('b5-f', '') + W.hint('b5-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Médias e desigualdades', 'MH ≤ MG ≤ MA e como usar', `
          <div class="grid2">
            <div>
              ${F('M_H = {2ab|a + b} ≤ M_G = √{ab} ≤ M_A = {a + b|2}')}
              ${callout('Usos', 'Maximizar produto com soma fixa; minimizar soma com produto fixo: $x + {1|x} ≥ 2$ para $x > 0$. A igualdade só ocorre se $a = b$.', 'success')}
            </div>
            ${W.box('Médias de a e b (positivos)', W.row(W.nm('b6-a', 'a', 4, 1, 'min="0.1"'), W.nm('b6-b', 'b', 9, 1, 'min="0.1"')) + W.txt('b6-r', '') + W.hint('b6-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Técnicas de demonstração', 'Indução, absurdo, pombos e invariantes', `
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Indução</strong><p style="font-size:.88rem;margin-top:8px;">Prove a base ($n = 1$) e, supondo para $n = k$, prove $n = k + 1$. Ex.: $1 + ⋯ + n = n(n+1)/2$.</p>', 'growth')}
            ${card('<strong>Absurdo</strong><p style="font-size:.88rem;margin-top:8px;">Suponha o contrário e chegue a uma contradição. Ex.: $√2$ é irracional.</p>', 'decay')}
            ${card('<strong>Casa dos pombos</strong><p style="font-size:.88rem;margin-top:8px;">$n + 1$ objetos em $n$ caixas ⇒ alguma caixa tem $≥ 2$.</p>', 'primary')}
            ${card('<strong>Paridade / invariantes</strong><p style="font-size:.88rem;margin-top:8px;">Ache uma grandeza que <strong>não muda</strong> ao longo do processo.</p>', 'success')}
          </div>`, { cls: 'growth' }));

b.push(armadilhas('Cuidado', 'Onde se perde ponto neste bloco', [
  ['Briot–Ruffini com coeficiente faltando', 'Em $x^3 − 2x + 5$ os coeficientes são $1, 0, −2, 5$ (o termo $x^2$ vale 0).'],
  ['Ciclo de $i$', 'Use o resto do expoente por 4: $2026 = 4·506 + 2$ → $i^2 = −1$.'],
  ['Taxas e prazos em unidades diferentes', 'Juros compostos pedem $i$ e $t$ na mesma unidade (mês com mês).'],
  ['Geratriz de período e antiperíodo', '$0,1666…$ tem antiperíodo 1: ${16 − 1|90}$, não ${16|99}$.'],
]));

b.push(quiz([
  { q: 'O resto de $x^3 − 2x + 5$ por $x − 2$ é:', o: ['5', '9', '13', '1'], a: 1 },
  { q: 'O valor de $i^{2026}$ é:', o: ['$1$', '$i$', '$−1$', '$−i$'], a: 2 },
  { q: 'Um capital de R$ 1000 a juros compostos de 10% ao mês por 2 meses rende montante de:', o: ['1200', '1210', '1220', '1100'], a: 1 },
  { q: 'A geratriz de $0,36363636…$ é:', o: ['$36/100$', '$4/11$', '$9/25$', '$36/90$'], a: 1 }
]));
b.push(fechamento([
  ['Polinômios', '$P(a)$ é o resto por $x − a$; Girard da cúbica.'],
  ['Complexos', '$i^n$ tem ciclo 4; quociente pelo conjugado.'],
  ['Financeira e dízimas', '$M = C(1 + i)^t$; geratriz: período/9…9 com antiperíodo.']
], 'Cada bloco extra resolve uma família de questões “por outro caminho”.'));

module.exports = [{ out: DIR + 'aula-2-polinomios-complexos-matrizes-financeira.html', html: K.deck({
  title: 'Polinômios, complexos, matrizes e mais — ENA · PROFMAT', brand: 'Tópicos Complementares', key: 'c15a2', meta: 'Capítulo 15 · Aula 2 · Polinômios, complexos e mais', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['b1-c', 'b1-a'], function(){ var cs = ($('b1-c').value || '').replace(/,/g, ' ').split(/\s+/).map(parseFloat).filter(function(x){ return !isNaN(x); }), a = +$('b1-a').value; if(cs.length < 2){ $('b1-q').textContent = '—'; return; } var q = [cs[0]]; for(var i = 1; i < cs.length; i++) q.push(cs[i] + a * q[i - 1]); var r = q.pop(); $('b1-q').textContent = q.map(function(x){ return nf(x, 4); }).join(', ') + ' (grau ' + (q.length - 1) + ')'; $('b1-r').textContent = nf(r, 4); $('b1-h').textContent = r === 0 ? '(x − ' + a + ') divide P: ' + a + ' é raiz.' : 'Para x³ − 2x + 5 por x − 2: quociente 1, 2, 2 e resto 9.'; });
  bind(['b2-a', 'b2-b', 'b2-n'], function(){ var a = +$('b2-a').value, b = +$('b2-b').value, n = Math.round(+$('b2-n').value), d = a * a + b * b; $('b2-i').textContent = ['1', 'i', '−1', '−i'][((n % 4) + 4) % 4] + '  (n mod 4 = ' + (n % 4) + ')'; $('b2-z').textContent = nf(a, 3) + ' − ' + nf(b, 3) + 'i  e  ' + nf(Math.sqrt(d), 4); $('b2-q').textContent = d ? nf(a / d, 4) + ' ' + (b > 0 ? '− ' : '+ ') + nf(Math.abs(b) / d, 4) + 'i  (= z̄/|z|²)' : '—'; $('b2-h').textContent = 'Para z = 1 + i: 1/z = (1 − i)/2.'; });
  bind(['b3-a', 'b3-b', 'b3-c', 'b3-d'], function(){ var a = +$('b3-a').value, b = +$('b3-b').value, c = +$('b3-c').value, d = +$('b3-d').value, D = a * d - b * c; $('b3-t').textContent = a + '·' + d + ' − ' + b + '·' + c + ' = ' + D; $('b3-i').textContent = D ? '(1/' + D + ')·[ ' + d + '  ' + (-b) + ' ; ' + (-c) + '  ' + a + ' ]' : 'não existe (det = 0)'; $('b3-h').textContent = D ? 'det ≠ 0: matriz invertível.' : 'det = 0: sistema impossível ou indeterminado.'; });
  bind(['b4-c', 'b4-i', 'b4-t'], function(){ var C = +$('b4-c').value, i = +$('b4-i').value / 100, t = +$('b4-t').value; $('b4-s').textContent = nf(C * (1 + i * t), 4); $('b4-m').textContent = nf(C * Math.pow(1 + i, t), 4); $('b4-e').textContent = nf((Math.pow(1 + i, 12) - 1) * 100, 3) + '% ao ano'; $('b4-h').textContent = 'Diferença (juros sobre juros): ' + nf(C * Math.pow(1 + i, t) - C * (1 + i * t), 4) + '.'; });
  bind(['b5-a', 'b5-p'], function(){ var A = ($('b5-a').value || '').replace(/\D/g, ''), P = ($('b5-p').value || '').replace(/\D/g, ''); if(!P){ $('b5-f').textContent = 'Informe o período.'; return; } var num = parseInt(A + P, 10) - parseInt(A || '0', 10), den = (Math.pow(10, P.length) - 1) * Math.pow(10, A.length), g = mdc(num, den) || 1; $('b5-f').textContent = '0,' + A + P + P + P + '… = ' + (num / g) + '/' + (den / g) + ' (' + num + '/' + den + ' antes de simplificar)'; $('b5-h').textContent = 'Para antiperíodo 1 e período 6: 0,1666… = 15/90 = 1/6. Para antiperíodo vazio e período 36: 4/11.'; });
  bind(['b6-a', 'b6-b'], function(){ var a = +$('b6-a').value, b = +$('b6-b').value; if(a <= 0 || b <= 0) return; $('b6-r').textContent = 'MH = ' + nf(2 * a * b / (a + b), 4) + ' ≤ MG = ' + nf(Math.sqrt(a * b), 4) + ' ≤ MA = ' + nf((a + b) / 2, 4); $('b6-h').textContent = a === b ? 'Com a = b as três médias coincidem.' : 'Quanto mais distantes a e b, maior a diferença entre as médias.'; });`
}) }];
