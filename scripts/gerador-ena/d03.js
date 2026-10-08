// Unidade 3 — Conjuntos e contagem de elementos (capítulo 3)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/03-conjuntos-contagem/';
const s = [];

s.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 3', h1: 'Conjuntos e <span style="color:var(--decay);">contagem de elementos</span>',
  sub: 'Notação, união e interseção, inclusão–exclusão, quantos termos tem uma lista e quantos subconjuntos existem. A conta é curta; o perigo está nas extremidades.',
  badges: [['3 questões em 60'], ['|A∪B| = |A| + |B| − |A∩B|', 'decay'], ['2ⁿ subconjuntos', 'growth']], color: 'decay'
}));
s.push(roteiroSlide('Sempre o mesmo caminho: descrever o conjunto, contar com cuidado e usar inclusão–exclusão.', [
  ['Notação e operações', '∈, ⊂, ∪, ∩, ∖ e a notação de conjunto', 'book'],
  ['Inclusão–exclusão', 'dois e três conjuntos, “nenhum dos dois”', 'scale'],
  ['Contar elementos de uma lista', 'número de termos, múltiplos entre m e n', 'chart'],
  ['Armadilha das extremidades', '≤ × <, primeiro e último múltiplo', 'warn'],
  ['Subconjuntos', '2ⁿ, próprios, com k elementos', 'link'],
  ['Questões que já caíram', 'ENA 2026 Q19 · ENA 2025 Q9 e Q30', 'target']
]));
s.push(objetivosSlide([
  'Ler a <strong>notação de conjuntos</strong> e descrever um conjunto por propriedade.',
  'Usar a <strong>inclusão–exclusão</strong> para contar uniões e “nenhum dos dois”.',
  'Contar <strong>termos de uma lista</strong> e múltiplos em um intervalo sem esquecer as pontas.',
  'Calcular o <strong>número de subconjuntos</strong> (todos, não vazios, com k elementos).'
], 'Em prova', 'Em “conjuntos”, 80% do erro vem de contar errado um intervalo. Aprenda a fórmula do número de termos e confira as <strong>extremidades</strong>.', 'decay', 'decay-ink'));

s.push(sl('Para início de conversa', 'Quantos alunos gostam dos dois?', `
          ${lede('Numa pesquisa com <strong>100 pessoas</strong>, 60 gostam de futebol, 50 gostam de vôlei e 20 não gostam de nenhum dos dois. Quantas gostam dos <strong>dois</strong>?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantas gostam de futebol e de vôlei?', ['10', '20', '30', '40'], 2, 'Gostam de pelo menos um: $100 − 20 = 80$. Pela inclusão–exclusão: $60 + 50 − x = 80 ⇒ x = 30$. A soma $60 + 50 = 110$ conta duas vezes quem gosta dos dois.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Somar $|A| + |B|$ conta <strong>duas vezes</strong> quem está nos dois conjuntos. A inclusão–exclusão corrige isso subtraindo a interseção.</p>', 'growth')}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · notação', 'A linguagem dos conjuntos', `
          <div class="grid2">
            <div>
              ${tbl(['Símbolo', 'Significado'], [['$x ∈ A$', '$x$ pertence a $A$'], ['$A ⊂ B$', '$A$ está contido em $B$'], ['$∅$', 'conjunto vazio'], ['$A ∪ B$', 'união: está em $A$ <strong>ou</strong> em $B$'], ['$A ∩ B$', 'interseção: em $A$ <strong>e</strong> em $B$'], ['$A ∖ B$', 'em $A$ e <strong>não</strong> em $B$'], ['$N, Z, Q, R$', 'naturais, inteiros, racionais, reais']])}
            </div>
            <div>
              ${callout('Descrição por propriedade', '$\\{x ∈ Z ∣ 30 ≤ x ≤ 2025\\}$ lê-se: “o conjunto dos inteiros $x$ <strong>tais que</strong> $30 ≤ x ≤ 2025$”. Os extremos <strong>entram</strong> (≤).', 'success')}
              ${callout('Cardinalidade', '$|A|$ é o número de elementos de $A$. Em $A × B$ (pares ordenados): $|A × B| = |A| · |B|$.')}
            </div>
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · inclusão–exclusão', 'Contando uniões sem contar duas vezes', `
          ${F('|A ∪ B| = |A| + |B| − |A ∩ B|', true)}
          ${F('|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Dois conjuntos', W.row(W.nm('c1-u', 'Total (U)', 100, 1, 'min="0"'), W.nm('c1-a', '|A|', 60), W.nm('c1-b', '|B|', 50), W.nm('c1-i', '|A ∩ B|', 30)) + W.svg('c1-s', '0 0 360 170') + W.hint('c1-h'))}
            ${callout('Nenhum dos dois', '$"nenhum" = U − |A ∪ B|$. Os números do Venn mostram cada região: só $A$, só $B$, os dois e nenhum.', 'success')}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · contagem', 'Quantos termos tem uma lista com razão constante?', `
          ${lede('Para contar os termos de $a, a+r, a+2r, …, b$ (de um ao outro, <strong>inclusive</strong>), use:')}
          ${F('"nº de termos" = {b − a|r} + 1', true)}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${callout('Múltiplos de k entre m e n (inclusive)', '$⌊{n|k}⌋ − ⌈{m|k}⌉ + 1$. Ex.: múltiplos de 7 de 100 a 500: primeiro $105 = 7·15$, último $497 = 7·71$ → $71 − 15 + 1 = 57$.', 'success')}
              ${tbl(['Intervalo de inteiros', 'Quantidade'], [['$[a, b]$', '$b − a + 1$'], ['$(a, b)$', '$b − a − 1$'], ['$[a, b)$ ou $(a, b]$', '$b − a$']])}
            </div>
            ${W.box('Contador', W.row(W.nm('c2-a', 'a', 100), W.nm('c2-b', 'b', 500), W.nm('c2-k', 'k (múltiplos de)', 7, 1, 'min="1"')) + W.txt('c2-r1', 'Inteiros em [a, b]: ') + W.txt('c2-r2', 'Múltiplos de k em [a, b]: ') + W.txt('c2-r3', 'Primeiro e último: ') + W.hint('c2-h'))}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · múltiplos comuns', 'Múltiplos de dois números ao mesmo tempo', `
          ${lede('Ser múltiplo de $a$ <strong>e</strong> de $b$ é ser múltiplo do <strong>MMC</strong>. Múltiplos de 10 e de 15 juntos = múltiplos de 30. Veja a conta completa da ENA 2026 Q19 no simulador:')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('|A ∪ B| com múltiplos', W.row(W.nm('c3-m', 'de', 30), W.nm('c3-n', 'até', 2025)) + W.row(W.nm('c3-k1', 'A: múltiplos de', 10, 1, 'min="1"'), W.nm('c3-k2', 'B: múltiplos de', 15, 1, 'min="1"')) + W.txt('c3-ra', '|A| = ') + W.txt('c3-rb', '|B| = ') + W.txt('c3-ri', '|A ∩ B| (múltiplos de mmc) = ') + W.out('c3-ru', '1.5rem') + W.hint('c3-h'))}
            ${callout('Escreva a lista em múltiplos', '$A = \\{3·10, 4·10, …, 202·10\\}$: conte os <strong>multiplicadores</strong>, de 3 a 202: $202 − 3 + 1 = 200$. (Cada elemento do conjunto é “$k$ vezes um número consecutivo”.)', 'success')}
          </div>`, { cls: 'decay' }));

s.push(armadilhas('Armadilha das extremidades', 'Cuidado com “≤”, “<” e com o primeiro e o último múltiplo', [
  ['Primeiro múltiplo dentro do intervalo', 'O primeiro múltiplo de 8 a partir de 33 é <strong>40</strong> (não 32, que está fora; não 33). O último até 999 é <strong>992</strong>.'],
  ['Esquecer o “+ 1”', 'De 105 a 497 de 7 em 7: $(497 − 105)/7 + 1 = 57$. Sem o +1 daria 56.'],
  ['Intervalos abertos', 'Em $(−3, 10)$ não entram $−3$ nem $10$: $10 − (−3) − 1 = 12$ inteiros.'],
  ['Subtrair da interseção errada', 'Quem é múltiplo de $a$ e de $b$ é múltiplo do <strong>MMC</strong>, não do produto (10 e 15 → 30, não 150).']
]));

s.push(ja('ENA 2026 · Q19', 'Múltiplos de 10 ou de 15',
  '$X = \\{n ∈ Z ∣ 30 ≤ n ≤ 2025\\}$, $A = \\{n ∈ X ∣ n$ múltiplo de $10\\}$ e $B = \\{n ∈ X ∣ n$ divisível por $15\\}$. Quantos elementos tem $A ∪ B$?',
  ['201', '234', '267', '300', '334'], 2,
  '$A = \\{30, …, 2020\\}$: 200 elementos. $B = \\{30, 45, …, 2025\\} = \\{2·15, …, 135·15\\}$: 134 elementos. $A ∩ B$ = múltiplos de 30 de 30 a 2010: 67. $|A ∪ B| = 200 + 134 − 67 = 267$. <strong>Alternativa C.</strong>'));

s.push(ja('ENA 2025 · Q9', 'Quais afirmações estão corretas?',
  '$X = \\{x ∈ N ∣ 33 ≤ x ≤ 999\\}$, $A$ = elementos divisíveis por 8 e $B$ = divisíveis por 10. Afirmações: <strong>I)</strong> $|A| = 120$; <strong>II)</strong> $|A ∪ B| = 216$; <strong>III)</strong> $|A ∩ B| = 24$. Quais estão corretas?',
  ['I, apenas', 'II, apenas', 'I e II, apenas', 'I e III, apenas', 'I, II e III'], 3,
  '$A = \\{40, …, 992\\} = \\{5·8, …, 124·8\\}$: 120 ✓. $B = \\{40, …, 990\\} = \\{4·10, …, 99·10\\}$: 96. $A ∩ B$ (múltiplos de 40): 40, …, 960 → 24 ✓. $|A ∪ B| = 120 + 96 − 24 = 192 ≠ 216$ ✗. <strong>Alternativa D — I e III.</strong>'));

s.push(sl('Teoria · subconjuntos', 'Cada elemento entra ou não entra', `
          ${lede('Um conjunto com $n$ elementos tem $2^n$ subconjuntos (para cada elemento, 2 escolhas). Com exatamente $k$ elementos: $C(n, k)$.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${tbl(['Quais', 'Quantidade'], [['Todos', '$2^n$'], ['Próprios (≠ todo o conjunto)', '$2^n − 1$'], ['Não vazios', '$2^n − 1$'], ['Com exatamente $k$ elementos', '$C(n, k) = {n!|k!(n−k)!}$']])}
            </div>
            ${W.box('Subconjuntos de um conjunto de n elementos', W.rg('c4-n', 'n', 0, 14, 1, 5) + W.rg('c4-k', 'k', 0, 14, 1, 2) + W.txt('c4-t', 'Total 2ⁿ = ') + W.txt('c4-ne', 'Não vazios (2ⁿ − 1): ') + W.txt('c4-c', 'Com exatamente k elementos: ') + W.hint('c4-h'))}
          </div>`, { cls: 'decay' }));

s.push(ja('ENA 2025 · Q30', 'Subconjuntos listados sem repetição',
  'Um aluno listou corretamente, sem repetição, <strong>198 subconjuntos</strong> de um conjunto com $n$ elementos distintos (até certo momento). Qual o menor valor possível de $n$?',
  ['7', '8', '9', '10', '12'], 1,
  'O total de subconjuntos é $2^n ≥ 198$. Como $2^7 = 128 < 198 ≤ 256 = 2^8$, o menor é $n = 8$. <strong>Alternativa B.</strong>'));

s.push(exemplo('Treino 3.2', 'Múltiplos de 4 ou de 6 entre 1 e 100', 'Quantos inteiros de 1 a 100 são múltiplos de 4 <strong>ou</strong> de 6?', [
  ['Conte cada conjunto', '$⌊100/4⌋ = 25$ múltiplos de 4 · $⌊100/6⌋ = 16$ múltiplos de 6'],
  ['Interseção = múltiplos do MMC', '$mmc(4, 6) = 12$ → $⌊100/12⌋ = 8$'],
  ['Inclusão–exclusão', '$25 + 16 − 8 = 33$']
], 'Há <strong>33</strong> inteiros nessa condição.', 'decay'));

s.push(quiz([
  { q: 'Numa turma de 40 alunos, 25 gostam de Matemática, 18 de Física e 6 de nenhuma das duas. Quantos gostam das duas?', o: ['5', '7', '9', '12'], a: 2 },
  { q: 'Quantos inteiros de 20 a 200 (inclusive) são múltiplos de 6?', o: ['28', '29', '30', '31'], a: 2 },
  { q: 'Um conjunto tem 6 elementos. Quantos subconjuntos têm exatamente 2 elementos?', o: ['12', '15', '20', '30'], a: 1 },
  { q: 'Quantos inteiros pertencem ao intervalo $(−4, 7]$?', o: ['10', '11', '12', '13'], a: 1 }
]));
s.push(fechamento([
  ['Inclusão–exclusão', '$|A ∪ B| = |A| + |B| − |A ∩ B|$; “nenhum” = total − união.'],
  ['Contar termos', '$(b − a)/r + 1$; em múltiplos, ache o primeiro e o último dentro do intervalo.'],
  ['Subconjuntos', '$2^n$ no total; $C(n, k)$ com exatamente $k$ elementos.']
], 'Em conjuntos, o perigo está nas pontas: confira o primeiro e o último termo.'));

module.exports = [{ out: DIR + 'aula-conjuntos-contagem.html', html: K.deck({
  title: 'Conjuntos e contagem de elementos — ENA · PROFMAT', brand: 'Conjuntos', key: 'c3', meta: 'Capítulo 3 · Conjuntos e contagem', slides: s,
  extra: WJS + BIND + String.raw`
  bind(['c1-u', 'c1-a', 'c1-b', 'c1-i'], function(){ var U = +$('c1-u').value, A = +$('c1-a').value, B = +$('c1-b').value, I = +$('c1-i').value;
    var svg = $('c1-s'); svg.innerHTML = ''; var ok = I <= Math.min(A, B) && I >= 0 && A + B - I <= U;
    el('rect', {x: 4, y: 4, width: 352, height: 162, rx: 10, fill: 'none', stroke: 'var(--line-strong)', 'stroke-width': 2}, svg);
    el('circle', {cx: 140, cy: 85, r: 58, fill: 'var(--primary)', 'fill-opacity': .22, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); el('circle', {cx: 220, cy: 85, r: 58, fill: 'var(--growth)', 'fill-opacity': .22, stroke: 'var(--growth)', 'stroke-width': 2.5}, svg);
    function t(x, y, s, sz, c){ var e = el('text', {x: x, y: y, 'text-anchor': 'middle', 'font-size': sz || 16, 'font-weight': 700, fill: c || 'var(--ink)'}, svg); e.textContent = s; }
    t(112, 90, A - I, 18); t(180, 90, I, 18); t(248, 90, B - I, 18); t(115, 32, 'A', 14, 'var(--primary)'); t(245, 32, 'B', 14, 'var(--growth)'); t(330, 155, U - (A + B - I), 14, 'var(--ink-soft)'); t(300, 155, 'fora:', 11, 'var(--ink-faint)');
    $('c1-h').textContent = ok ? '|A ∪ B| = ' + A + ' + ' + B + ' − ' + I + ' = ' + (A + B - I) + ' · nenhum dos dois = ' + U + ' − ' + (A + B - I) + ' = ' + (U - (A + B - I)) : 'Valores incompatíveis: a interseção não pode passar de |A| nem de |B|, e a união não pode passar do total.'; });
  bind(['c2-a', 'c2-b', 'c2-k'], function(){ var a = Math.round(+$('c2-a').value), b = Math.round(+$('c2-b').value), k = Math.round(+$('c2-k').value); if(k < 1 || b < a) return; var lo = Math.ceil(a / k), hi = Math.floor(b / k); $('c2-r1').textContent = b - a + 1; $('c2-r2').textContent = Math.max(0, hi - lo + 1); $('c2-r3').textContent = hi >= lo ? (lo * k) + ' e ' + (hi * k) : '—'; $('c2-h').textContent = '⌊' + b + '/' + k + '⌋ − ⌈' + a + '/' + k + '⌉ + 1 = ' + hi + ' − ' + lo + ' + 1'; });
  bind(['c3-m', 'c3-n', 'c3-k1', 'c3-k2'], function(){ var m = Math.round(+$('c3-m').value), n = Math.round(+$('c3-n').value), k1 = Math.round(+$('c3-k1').value), k2 = Math.round(+$('c3-k2').value); if(k1 < 1 || k2 < 1 || n < m) return; function cnt(k){ return Math.max(0, Math.floor(n / k) - Math.ceil(m / k) + 1); } var l = k1 / mdc(k1, k2) * k2, A = cnt(k1), B = cnt(k2), I = cnt(l); $('c3-ra').textContent = A; $('c3-rb').textContent = B; $('c3-ri').textContent = I + ' (mmc = ' + l + ')'; $('c3-ru').textContent = '|A ∪ B| = ' + (A + B - I); $('c3-h').textContent = A + ' + ' + B + ' − ' + I + ' = ' + (A + B - I); });
  function C(n, k){ if(k < 0 || k > n) return 0; var r = 1; for(var i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }
  bind(['c4-n', 'c4-k'], function(){ var n = +$('c4-n').value, k = +$('c4-k').value; $('c4-nv').textContent = n; $('c4-kv').textContent = k; $('c4-t').textContent = Math.pow(2, n); $('c4-ne').textContent = Math.pow(2, n) - 1; $('c4-c').textContent = C(n, k); $('c4-h').textContent = k > n ? 'k maior que n: não há subconjuntos assim.' : 'Linha do triângulo de Pascal para n = ' + n + ': ' + Array.apply(null, {length: n + 1}).map(function(_, i){ return C(n, i); }).join(' · '); });`
}) }];
