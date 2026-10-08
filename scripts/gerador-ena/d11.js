// Unidade 11 — Estatística descritiva (capítulo 11)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/11-estatistica/';
const s = [];

s.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 11', h1: 'Estatística: <span style="color:var(--growth);">média, mediana e moda</span>',
  sub: 'Medidas de posição, tabela de frequências, variância e desvio padrão, e o que acontece com elas quando todos os dados são transformados.',
  badges: [['2 questões em 60'], ['Ordene antes da mediana', 'growth'], ['σ não muda ao somar c', 'decay']], color: 'growth'
}));
s.push(roteiroSlide('Do conjunto de dados ao número que o resume.', [
  ['Média, mediana e moda', 'posição e o efeito do valor extremo', 'chart'],
  ['Tabela de frequências', 'mediana por posições (ENA 2025 Q10)', 'book'],
  ['O que caiu em 2026', 'média, mediana e moda de 11 idades (Q24)', 'target'],
  ['Variância e desvio padrão', 'dispersão em torno da média', 'scale'],
  ['Transformações dos dados', 'somar c, multiplicar por k', 'link']
]));
s.push(objetivosSlide([
  'Calcular <strong>média</strong>, <strong>mediana</strong> e <strong>moda</strong>, ordenando os dados e usando frequências.',
  'Achar a mediana de uma <strong>tabela de frequências</strong> pelas posições centrais.',
  'Calcular <strong>amplitude</strong>, <strong>variância</strong> e <strong>desvio padrão</strong>.',
  'Prever o efeito de <strong>somar $c$</strong> ou <strong>multiplicar por $k$</strong> nos dados.'
], 'Em prova', 'Duas questões em dois anos — ambas “pontos baratos” se você ordena os dados e confere qual medida foi pedida.', 'growth', 'growth-ink'));

s.push(sl('Para início de conversa', 'Média ou mediana: qual representa melhor?', `
          ${lede('Cinco avaliações de um aluno: <strong>10, 10, 10, 10 e 0</strong> (faltou à última). A <strong>média</strong> é $40/5 = 8$; a <strong>mediana</strong> é 10.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual medida é menos afetada pelo zero (valor extremo)?', ['a média', 'a mediana', 'as duas igualmente', 'nenhuma'], 1, 'A mediana depende da <strong>posição</strong> central, não dos valores extremos: continua 10. A média “puxa” para o valor extremo: caiu para 8. Um <em>outlier</em> altera muito a média e pouco a mediana.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Sempre confira <strong>qual medida</strong> foi pedida: média, mediana e moda respondem a perguntas diferentes.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

s.push(sl('Teoria · posição', 'Média, mediana e moda', `
          <div class="grid2">
            <div>
              ${F('x̄ = {x_1 + ⋯ + x_n|n}   "ponderada:" x̄ = {∑ f_i x_i|∑ f_i}', true)}
              ${tbl(['Medida', 'Como calcular'], [['Média', 'soma ÷ quantidade (ponderada: valor × frequência)'], ['Mediana', 'ordene! $n$ ímpar: termo central (posição $(n+1)/2$); $n$ par: média dos dois centrais (posições $n/2$ e $n/2 + 1$)'], ['Moda', 'valor de maior frequência (pode haver 0, 1 ou várias)']])}
            </div>
            ${W.box('Digite seus dados', '<div><label>Valores (separe por vírgula)</label><input type="text" id="e1-d" value="18,20,21,21,21,22,23,25,28,36,40" style="font:inherit;width:100%;padding:.4em .6em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);"></div>' + W.txt('e1-o', 'Ordenados: ') + W.txt('e1-a', 'n · soma: ') + W.txt('e1-m', 'Média / Mediana / Moda: ') + W.txt('e1-v', 'Amplitude · variância · desvio: ') + W.hint('e1-h'))}
          </div>`, { cls: 'growth' }));

s.push(sl('Tabela de frequências', 'A mediana pelas posições', `
          ${lede('1) Some as frequências ($n$). 2) Descubra as <strong>posições centrais</strong>. 3) Acumule frequências até cobrir essas posições. Com $n = 14$, a mediana é a média da <strong>7ª e da 8ª</strong> observações.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Livros lidos por 14 estudantes (ENA 2025 Q10)', W.row(W.nm('e2-x', 'x (freq. do 5)', 3, 1, 'min="0" max="12"'), W.nm('e2-y', 'y (freq. do 9)', 2, 1, 'min="0" max="12"')) + '<div id="e2-t" style="margin-top:8px;font-size:.82rem;"></div>' + W.txt('e2-n', '') + W.txt('e2-md', 'Mediana: ') + W.hint('e2-h'))}
            ${callout('Raciocínio', 'Para mediana $7,5 = (7 + 8)/2$: a 7ª observação vale 7 e a 8ª vale 8. Até o valor 7: $1 + 2 + x + 1 = 7 ⇒ x = 3$. Do valor 8 em diante: $1 + y + 2 + 2 = 7 ⇒ y = 2$. Confirme $n = 14$ ✓.', 'success')}
          </div>`, { cls: 'growth' }));

s.push(ja('ENA 2025 · Q10', 'Livros lidos: ache x e y',
  '14 estudantes responderam quantos livros leram. Respostas e frequências: $2$ (1), $3$ (2), $5$ ($x$), $7$ (1), $8$ (1), $9$ ($y$), $10$ (2), $11$ (2). A mediana é $7,5$. Quais os valores de $x$ e $y$?',
  ['$x = 2$ e $y = 3$', '$x = 1$ e $y = 4$', '$x = 4$ e $y = 1$', '$x = 2$ e $y = 2$', '$x = 3$ e $y = 2$'], 4,
  'Mediana $7,5$ com $n = 14$ ⇒ 7ª observação $= 7$ e 8ª $= 8$. Até o valor 7 há $1 + 2 + x + 1 = 7 ⇒ x = 3$. Do valor 8 em diante: $1 + y + 2 + 2 = 7 ⇒ y = 2$. Confira $n = 1 + 2 + 3 + 1 + 1 + 2 + 2 + 2 = 14$ ✓. <strong>Alternativa E.</strong>'));

s.push(ja('ENA 2026 · Q24', 'Média, mediana e moda de 11 idades',
  'Idades de 11 pessoas: 18, 20, 21, 21, 21, 22, 23, 25, 28, 36, 40. Afirmações: <strong>I)</strong> a média é 25; <strong>II)</strong> a mediana é 22; <strong>III)</strong> a moda é 21. O que é correto?',
  ['I, apenas', 'II, apenas', 'I e II, apenas', 'II e III, apenas', 'I, II e III'], 4,
  'Soma $= 275$, ${275|11} = 25$ ✓. A mediana é o 6º termo (de 11) $= 22$ ✓. A moda é 21 (aparece 3 vezes) ✓. <strong>Alternativa E.</strong> Dica: a lista já vem ordenada; em outras provas, ordene antes.'));

s.push(sl('Teoria · dispersão', 'Variância e desvio padrão', `
          ${lede('A <strong>amplitude</strong> é máximo − mínimo. A <strong>variância</strong> mede o quanto os dados se afastam da média; o <strong>desvio padrão</strong> é a sua raiz.')}
          ${F('σ^2 = {∑(x_i − x̄)^2|n} = "média dos quadrados" − x̄^2   σ = √{σ^2}', true)}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Treino 11.2', 'Dados $2, 4, 6$: média $4$; desvios $−2, 0, 2$; $σ^2 = {4 + 0 + 4|3} = {8|3}$.', 'success')}
            ${callout('Propriedades', 'A <strong>soma dos desvios</strong> em relação à média é sempre 0 — por isso elevamos ao quadrado. Média de grupos: $x̄ = {n_1 x̄_1 + n_2 x̄_2|n_1 + n_2}$.')}
          </div>`, { cls: 'growth' }));

s.push(sl('Transformações', 'Somar c ou multiplicar por k: o que muda?', `
          <div class="grid2">
            <div>
              ${tbl(['Operação nos dados', 'Média', 'Mediana', 'Desvio padrão'], [['somar $c$ a todos', '$+c$', '$+c$', 'não muda'], ['multiplicar por $k$', '$×k$', '$×k$', '$×∣k∣$ (variância $×k^2$)']])}
              ${callout('Treino 11.4', 'Dados aumentam 5 e depois dobram: média $x̄ → 2(x̄ + 5)$; desvio: o “+5” não muda, o “×2” dobra → $2σ$.', 'success')}
            </div>
            ${W.box('Aplique transformações', W.row(W.nm('e3-c', 'somar c', 5), W.nm('e3-k', 'multiplicar por k', 2)) + '<div style="margin-top:6px;font-size:.85rem;">Dados originais: 2, 4, 6, 8</div>' + W.txt('e3-o', 'Original: ') + W.txt('e3-n', 'Novo (k·x + c): ') + W.hint('e3-h'))}
          </div>`, { cls: 'growth' }));

s.push(sl('Valor extremo', 'Outlier: a média se move, a mediana quase não', `
          ${lede('Dados-base: $20, 21, 22, 23, 24$ (média 22 e mediana 22). Acrescente um valor extremo e compare.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Adicione um valor', W.nm('e4-v', 'novo valor', 100, 1) + W.txt('e4-m', 'Média: ') + W.txt('e4-d', 'Mediana: ') + W.txt('e4-s', 'Desvio padrão: ') + W.hint('e4-h'))}
            ${callout('Interpretação', 'Um valor muito distante desloca bastante a <strong>média</strong> e o <strong>desvio padrão</strong>, e quase nada a <strong>mediana</strong>. Por isso a mediana é “robusta”.', 'success')}
          </div>`, { cls: 'growth' }));

s.push(exemplo('Treinos 11.1 e 11.3', 'Média nova e tabela de frequências', 'A média de 5 números é 12; qual a nova média ao incluir o 18? E: valor 1 (3 vezes), 2 (4 vezes), 3 (5 vezes) — média, mediana e moda?', [
  ['Nova média', 'Soma antiga $= 5 · 12 = 60$; nova soma $= 78$ com 6 números: $78/6 = 13$'],
  ['Média da tabela', '$n = 12$; soma $= 3 + 8 + 15 = 26$; $x̄ = 26/12 = 13/6$'],
  ['Mediana', '6ª e 7ª observações (acumulado 3, 7): ambas valem 2 → mediana $2$'],
  ['Moda', 'valor de maior frequência: $3$ (5 vezes)']
], 'Respostas: nova média <strong>13</strong>; tabela: média $13/6$, mediana <strong>2</strong>, moda <strong>3</strong>.', 'growth'));

s.push(armadilhas('Cuidado', 'Onde se perde ponto em estatística', [
  ['Mediana sem ordenar', 'Ordene antes de achar o termo central. (Em 2026 Q24 a lista já vem ordenada; em outras provas não.)'],
  ['Média ≠ mediana ≠ moda', 'Confira qual foi pedida. Os três podem ser diferentes.'],
  ['Média ponderada sem frequência', 'Em tabelas: $x̄ = ∑ f_i x_i / ∑ f_i$ — multiplique valor × frequência.'],
  ['Variância como média dos desvios', 'A soma dos desvios é sempre 0. A variância usa os <strong>quadrados</strong> dos desvios.']
]));

s.push(quiz([
  { q: 'A média de 5 números é 12. Incluindo o número 18, a nova média é:', o: ['12', '13', '14', '15'], a: 1 },
  { q: 'A mediana de $3, 5, 5, 7, 10, 12$ é:', o: ['5', '6', '6,5', '7'], a: 1 },
  { q: 'Se todos os dados são multiplicados por 3, o desvio padrão:', o: ['não muda', 'fica multiplicado por 3', 'fica multiplicado por 9', 'aumenta 3 unidades'], a: 1 },
  { q: 'A moda do conjunto $1, 1, 2, 2, 2, 3, 4$ é:', o: ['1', '2', '3', '2,5'], a: 1 }
]));
s.push(fechamento([
  ['Posição', 'Média (soma/n), mediana (ordene!), moda (mais frequente). Tabela: média ponderada.'],
  ['Dispersão', '$σ^2$ = média dos quadrados dos desvios; $σ = √{σ^2}$.'],
  ['Transformações', '$+c$: média e mediana $+c$, $σ$ igual. $×k$: tudo $×k$ e $σ$ $×∣k∣$.']
], 'Ordene antes de achar a mediana e confira qual medida foi pedida.'));

module.exports = [{ out: DIR + 'aula-estatistica-descritiva.html', html: K.deck({
  title: 'Estatística descritiva — ENA · PROFMAT', brand: 'Estatística', key: 'c11', meta: 'Capítulo 11 · Estatística descritiva', slides: s,
  extra: WJS + BIND + String.raw`
  function parse(t){ return (t || '').replace(/,/g, ' ').split(/[\s;]+/).map(function(x){ return parseFloat(x); }).filter(function(x){ return !isNaN(x); }); }
  function est(L){ var n = L.length, S = L.reduce(function(a, b){ return a + b; }, 0), m = S / n, ord = L.slice().sort(function(a, b){ return a - b; }), md = n % 2 ? ord[(n - 1) / 2] : (ord[n / 2 - 1] + ord[n / 2]) / 2, cont = {}, mx = 0; L.forEach(function(x){ cont[x] = (cont[x] || 0) + 1; mx = Math.max(mx, cont[x]); }); var mo = Object.keys(cont).filter(function(k){ return cont[k] === mx; }).map(Number).sort(function(a, b){ return a - b; }), v = L.reduce(function(a, x){ return a + (x - m) * (x - m); }, 0) / n; return {n: n, S: S, m: m, md: md, mo: mx > 1 ? mo : [], mx: mx, v: v, sd: Math.sqrt(v), amp: ord[n - 1] - ord[0], ord: ord}; }
  bind(['e1-d'], function(){ var L = parse($('e1-d').value); if(L.length < 2){ $('e1-o').textContent = 'Digite pelo menos 2 números.'; return; } var e = est(L); $('e1-o').textContent = e.ord.join(', '); $('e1-a').textContent = e.n + ' valores · soma ' + nf(e.S, 4); $('e1-m').textContent = nf(e.m, 4) + ' / ' + nf(e.md, 4) + ' / ' + (e.mo.length ? e.mo.join(', ') : 'não há'); $('e1-v').textContent = nf(e.amp, 4) + ' · ' + nf(e.v, 4) + ' · ' + nf(e.sd, 4); $('e1-h').textContent = e.n % 2 ? 'n ímpar: mediana é o ' + (e.n + 1) / 2 + 'º termo.' : 'n par: mediana é a média do ' + e.n / 2 + 'º e do ' + (e.n / 2 + 1) + 'º termos.'; });
  bind(['e2-x', 'e2-y'], function(){ var x = Math.round(+$('e2-x').value), y = Math.round(+$('e2-y').value), val = [2, 3, 5, 7, 8, 9, 10, 11], fr = [1, 2, x, 1, 1, y, 2, 2], n = fr.reduce(function(a, b){ return a + b; }, 0), acc = 0, h = '<table class="tbl" style="margin:0;"><tr><th>valor</th><th>freq.</th><th>acum.</th></tr>'; val.forEach(function(v, i){ acc += fr[i]; h += '<tr><td>' + v + '</td><td>' + fr[i] + '</td><td>' + acc + '</td></tr>'; }); $('e2-t').innerHTML = h + '</table>'; $('e2-n').textContent = 'n = ' + n + (n === 14 ? ' ✓ (14 estudantes)' : ' (o enunciado diz 14)'); function at(p){ var a = 0; for(var i = 0; i < val.length; i++){ a += fr[i]; if(p <= a) return val[i]; } return NaN; } var md = n % 2 ? at((n + 1) / 2) : (at(n / 2) + at(n / 2 + 1)) / 2; $('e2-md').textContent = nf(md, 3) + (n % 2 ? '' : ' (média da ' + n / 2 + 'ª e da ' + (n / 2 + 1) + 'ª observações: ' + at(n / 2) + ' e ' + at(n / 2 + 1) + ')'); $('e2-h').textContent = Math.abs(md - 7.5) < 1e-9 && n === 14 ? '✔ x = ' + x + ' e y = ' + y + ' dão mediana 7,5 com 14 estudantes.' : 'Mediana pedida: 7,5 com n = 14. Ajuste x e y.'; });
  bind(['e3-c', 'e3-k'], function(){ var L = [2, 4, 6, 8], c = +$('e3-c').value, k = +$('e3-k').value, N = L.map(function(x){ return k * x + c; }), a = est(L), b = est(N); $('e3-o').textContent = 'média ' + nf(a.m, 3) + ' · mediana ' + nf(a.md, 3) + ' · desvio ' + nf(a.sd, 3); $('e3-n').textContent = 'média ' + nf(b.m, 3) + ' · mediana ' + nf(b.md, 3) + ' · desvio ' + nf(b.sd, 3); $('e3-h').textContent = 'Novos dados: ' + N.join(', ') + ' · desvio novo = |k|·σ = ' + nf(Math.abs(k) * a.sd, 3) + ' (somar c não altera).'; });
  bind(['e4-v'], function(){ var v = +$('e4-v').value, e = est([20, 21, 22, 23, 24, v]), e0 = est([20, 21, 22, 23, 24]); $('e4-m').textContent = nf(e0.m, 3) + ' → ' + nf(e.m, 3); $('e4-d').textContent = nf(e0.md, 3) + ' → ' + nf(e.md, 3); $('e4-s').textContent = nf(e0.sd, 3) + ' → ' + nf(e.sd, 3); $('e4-h').textContent = 'Com o valor ' + v + ' a média mudou ' + nf(e.m - e0.m, 3) + ' e a mediana ' + nf(e.md - e0.md, 3) + '.'; });`
}) }];
