// Unidade 10 — Probabilidade (capítulo 10)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/10-probabilidade/';
const s = [];

s.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 10', h1: 'Probabilidade: <span style="color:var(--decay);">contagem + fração</span>',
  sub: 'Casos favoráveis sobre casos possíveis, complementar, união, condicional, independência e sorteios com e sem reposição. A conta é curta; o cuidado é com o denominador.',
  badges: [['3 questões em 60'], ['P = favoráveis / possíveis', 'decay'], ['Sem reposição: o denominador cai', 'growth']], color: 'decay'
}));
s.push(roteiroSlide('A mesma receita para todo problema de probabilidade.', [
  ['Definição e regras', 'equiprováveis, complementar, união', 'scale'],
  ['Dois dados', 'a tabela das somas (ENA 2025 Q25)', 'dice'],
  ['“Pelo menos um”', 'complementar e moedas', 'coin'],
  ['Condicional e independentes', 'P(A|B) e P(A)·P(B)', 'link'],
  ['Com e sem reposição', 'pedras de 1 a 15 (ENA 2026 Q6)', 'chart'],
  ['O cubo', 'três faces que se encontram (ENA 2026 Q26)', 'target']
]));
s.push(objetivosSlide([
  'Calcular $P = {"favoráveis"|"possíveis"}$ contando com cuidado (combinação ou produto).',
  'Usar o <strong>complementar</strong> em “pelo menos um” e a regra da <strong>união</strong>.',
  'Distinguir sorteio <strong>com</strong> e <strong>sem reposição</strong>, e usar probabilidade <strong>condicional</strong>.',
  'Resolver problemas com <strong>dados, moedas e cubo</strong> e reconhecer a distribuição binomial.'
], 'Em prova', 'Probabilidade no ENA é sempre equiprovável: <strong>a conta é contagem + fração</strong>. Simplifique no meio do caminho.', 'decay', 'decay-ink'));

s.push(sl('Para início de conversa', 'Soma 7 em dois dados', `
          ${lede('Ao lançar <strong>dois dados</strong> justos, há $6 · 6 = 36$ resultados possíveis (lembre: (1, 6) e (6, 1) são diferentes). Qual a probabilidade de a <strong>soma</strong> ser 7?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Probabilidade de soma 7:', ['1/12', '1/9', '1/6', '1/4'], 2, 'Pares com soma 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ → 6 casos em 36: ${6|36} = {1|6}$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Probabilidade é <strong>contar</strong> os casos favoráveis e os possíveis (com a <strong>mesma</strong> lista de resultados) e dividir.</p>', 'growth')}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · definição', 'Casos favoráveis ÷ casos possíveis', `
          <div class="grid2">
            <div>
              ${F('P(A) = {"nº de casos favoráveis"|"nº de casos possíveis"}   0 ≤ P ≤ 1', true)}
              ${F('P(Ā) = 1 − P(A)')}
              ${F('P(A ∪ B) = P(A) + P(B) − P(A ∩ B)')}
              ${callout('Mutuamente exclusivos', 'Se $A$ e $B$ não podem ocorrer juntos, $P(A ∩ B) = 0$ e basta somar.', 'success')}
            </div>
            ${W.box('Dois dados: a tabela das somas', W.row(W.sel('p1-m', 'Evento', ['soma igual a', 'soma maior ou igual a'], 0), W.rg('p1-s', 'valor', 2, 12, 1, 7)) + '<div id="p1-g" style="margin-top:8px;"></div>' + W.txt('p1-r', '') + W.hint('p1-h'))}
          </div>`, { cls: 'decay' }));

s.push(ja('ENA 2025 · Q25', 'Dois dados e a soma 7',
  'Lançando dois dados, qual a probabilidade de a soma dos resultados ser <strong>7</strong>?',
  ['1/12', '1/9', '1/8', '1/7', '1/6'], 4,
  'Pares: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ → 6 de 36 → ${1|6}$. <strong>Alternativa E.</strong> A soma 7 é a mais provável: tem 6 formas.'));

s.push(sl('Teoria · complementar', '“Pelo menos um”: 1 − P(nenhum)', `
          ${lede('Contar “pelo menos uma cara” em vários lançamentos exige somar muitos casos. Pelo <strong>complementar</strong>: $P = 1 − P("nenhuma")$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Lançamentos de moeda', W.rg('p2-n', 'lançamentos n', 1, 12, 1, 4) + W.rg('p2-k', 'caras exatas k', 0, 12, 1, 2) + W.txt('p2-a', 'Pelo menos uma cara: ') + W.txt('p2-b', 'Exatamente k caras: ') + W.hint('p2-h'))}
            ${callout('Treino 10.1', '3 lançamentos, exatamente 2 caras: $C(3, 2)/2^3 = {3|8}$. Pelo menos uma cara em 4 lançamentos: $1 − {1|16} = {15|16}$.', 'success')}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · condicional', 'Probabilidade condicional e eventos independentes', `
          <div class="grid2">
            <div>
              ${F('P(A | B) = {P(A ∩ B)|P(B)}', true)}
              ${F('"independentes:" P(A ∩ B) = P(A)·P(B)')}
              ${callout('Treino 10.5', 'Dois dados: probabilidade de soma 8 dado que o 1º dado foi 3. Com o 1º = 3, o 2º precisa ser 5: ${1|6}$. Pela fórmula: ${1/36|1/6} = {1|6}$.', 'success')}
            </div>
            ${W.box('Dado que o primeiro dado foi d', W.rg('p3-d', 'primeiro dado d', 1, 6, 1, 3) + W.rg('p3-s', 'soma desejada s', 2, 12, 1, 8) + W.txt('p3-c', 'P(soma = s | 1º = d) = ') + W.txt('p3-t', 'P(soma = s) sem condição = ') + W.hint('p3-h'))}
          </div>`, { cls: 'decay' }));

s.push(sl('Teoria · sorteios', 'Com reposição × sem reposição', `
          ${lede('<strong>Com reposição</strong> os denominadores não mudam (eventos independentes). <strong>Sem reposição</strong> o denominador <strong>cai</strong> a cada retirada. Há dois jeitos equivalentes de contar:')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Urna com N bolas, K favoráveis, r retiradas', W.row(W.nm('p4-n', 'N', 15, 1, 'min="1" max="40"'), W.nm('p4-k', 'K', 8, 1, 'min="0" max="40"'), W.nm('p4-r', 'r', 3, 1, 'min="1" max="6"')) + W.txt('p4-s', 'Sem reposição (sequencial): ') + W.txt('p4-c', 'Sem reposição (combinação): ') + W.txt('p4-w', 'Com reposição: ') + W.hint('p4-h'))}
            ${callout('ENA 2026 Q6', 'Pedras de 1 a 15 (8 ímpares, 7 pares), 3 retiradas sem devolver: ${8|15}·{7|14}·{6|13} = {8|65}$. Por combinação: $C(8,3)/C(15,3) = 56/455 = 8/65$ ✓. <strong>Cancele</strong> no meio: $7/14 = 1/2$.', 'success')}
          </div>`, { cls: 'decay' }));

s.push(ja('ENA 2026 · Q6', 'Três pedras ímpares',
  'De uma caixa com pedras numeradas de 1 a 15, retiram-se 3 pedras ao acaso, uma após a outra, <strong>sem devolver</strong>. Qual a probabilidade de os três números serem ímpares?',
  ['1/8', '7/65', '1/9', '2/15', '8/65'], 4,
  'Há 8 ímpares e 7 pares: ${8|15} · {7|14} · {6|13} = {336|2730} = {8|65}$. <strong>Alternativa E.</strong> (Com reposição seria $(8/15)^3$, bem diferente.)'));

s.push(sl('Geometria + probabilidade', 'As três faces do cubo (ENA 2026 Q26)', `
          ${lede('Um cubo tem <strong>6 faces</strong>, <strong>8 vértices</strong> e <strong>12 arestas</strong>; em cada vértice <strong>concorrem 3 faces</strong>. Escolhendo 3 faces ao acaso, qual a chance de <strong>não</strong> se encontrarem em um único ponto?')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Contagem', 'Total de ternas de faces: $C(6, 3) = 20$. Ternas que se encontram em um ponto: uma por vértice → <strong>8</strong>. $P("não se encontram") = 1 − {8|20} = {12|20} = {3|5}$.', 'success')}
            ${mini('Probabilidade de as três faces escolhidas não concorrerem em um vértice:', ['2/5', '1/2', '3/5', '7/10'], 2, 'Das 20 ternas, 8 concorrem em um vértice e 12 não: ${12|20} = {3|5}$. Use sempre a mesma lista (ternas não ordenadas) no numerador e no denominador.')}
          </div>`, { cls: 'decay' }));

s.push(ja('ENA 2026 · Q26', 'Faces de um cubo que não se intersectam num ponto',
  'Escolhem-se aleatoriamente 3 faces de um cubo. Qual a probabilidade de essas três faces <strong>não</strong> se intersectarem em um único ponto?',
  ['2/5', '1/2', '3/5', '7/10', '4/5'], 2,
  'Total: $C(6, 3) = 20$. Desfavoráveis: uma terna por vértice → 8. $1 − {8|20} = {3|5}$. <strong>Alternativa C.</strong>'));

s.push(sl('Extras', 'Binomial e probabilidade geométrica', `
          <div class="grid2">
            <div>
              ${F('P("k sucessos em" n) = C(n, k) p^k (1 − p)^{n−k}')}
              ${callout('Probabilidade geométrica', 'Em problemas de sorteio de pontos, a probabilidade é a <strong>razão entre áreas</strong> (ou comprimentos): $P = {"área favorável"|"área total"}$.')}
            </div>
            ${W.box('Distribuição binomial', W.rg('p5-n', 'n', 1, 14, 1, 6) + W.rg('p5-p', 'p (%)', 5, 95, 5, 50) + W.svg('p5-s', '0 0 360 170') + W.hint('p5-h'))}
          </div>`, { cls: 'decay' }));

s.push(exemplo('Treinos 10.3 e 10.6', 'Urna e fila', 'Urna com 5 bolas vermelhas e 3 azuis: sorteiam-se 2 sem reposição; probabilidade de ambas vermelhas? Quatro pessoas em fila ao acaso: probabilidade de A e B ficarem juntas?', [
  ['Urna (sequencial)', '${5|8}·{4|7} = {5|14}$'],
  ['Fila: casos possíveis', '$4! = 24$'],
  ['Fila: casos favoráveis', 'bloco AB (2 ordens) × 3 elementos: $2 · 3! = 12$'],
  ['Probabilidade', '${12|24} = {1|2}$']
], 'Urna: <strong>5/14</strong>. Fila: <strong>1/2</strong>.', 'decay'));

s.push(armadilhas('Cuidado', 'Onde se perde ponto em probabilidade', [
  ['(1, 6) e (6, 1) como um só', 'Em dois dados, os pares ordenados são <strong>diferentes</strong>: são 36 resultados, não 21.'],
  ['“Pelo menos um” × “exatamente um”', '“Pelo menos um” → complementar ($1 −$ nenhum). “Exatamente um” é outra conta.'],
  ['Sem reposição e denominador fixo', 'Em “sem reposição”, o denominador <strong>diminui</strong> a cada retirada: ${8|15}·{7|14}·{6|13}$.'],
  ['Misturar listas', 'Numerador e denominador devem contar a <strong>mesma coisa</strong> (ternas não ordenadas, ou sequências ordenadas).']
]));

s.push(quiz([
  { q: 'Em 3 lançamentos de uma moeda, a probabilidade de <strong>exatamente 2 caras</strong> é:', o: ['1/4', '3/8', '1/2', '3/4'], a: 1 },
  { q: 'Ao lançar dois dados, a probabilidade de a soma ser maior ou igual a 10 é:', o: ['1/12', '1/9', '1/6', '1/4'], a: 2 },
  { q: 'Urna com 5 bolas vermelhas e 3 azuis; sorteiam-se 2 sem reposição. A probabilidade de ambas serem vermelhas é:', o: ['25/64', '5/14', '5/16', '1/2'], a: 1 },
  { q: 'Sorteando um número de 1 a 20, a probabilidade de ser múltiplo de 3 <strong>ou</strong> de 5 é:', o: ['7/20', '9/20', '1/2', '11/20'], a: 1 }
]));
s.push(fechamento([
  ['Definição', '$P = $ favoráveis / possíveis, contando a <strong>mesma</strong> lista; $0 ≤ P ≤ 1$.'],
  ['Regras', 'Complementar $1 − P$; união $P(A) + P(B) − P(A∩B)$; independentes $P(A)P(B)$.'],
  ['Sorteios', 'Sem reposição o denominador cai; use combinação ou produto sequencial.']
], 'Conte, divida e simplifique no meio do caminho.'));

module.exports = [{ out: DIR + 'aula-probabilidade.html', html: K.deck({
  title: 'Probabilidade — ENA · PROFMAT', brand: 'Probabilidade', key: 'c10', meta: 'Capítulo 10 · Probabilidade', slides: s,
  extra: WJS + BIND + String.raw`
  function C(n, k){ if(k < 0 || k > n) return 0; var r = 1; for(var i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }
  function fr(a, b){ var g = mdc(a, b) || 1; return (a / g) + '/' + (b / g); }
  bind(['p1-m', 'p1-s'], function(){ var m = +$('p1-m').value, s = +$('p1-s').value; $('p1-sv').textContent = s; var h = '<table class="tbl" style="margin:0;text-align:center;font-size:.8rem;"><tr><th></th>' + [1, 2, 3, 4, 5, 6].map(function(j){ return '<th>' + j + '</th>'; }).join('') + '</tr>', n = 0; for(var i = 1; i <= 6; i++){ h += '<tr><th>' + i + '</th>'; for(var j = 1; j <= 6; j++){ var ok = m === 0 ? (i + j === s) : (i + j >= s); if(ok) n++; h += '<td style="' + (ok ? 'background:var(--growth-soft);font-weight:700;color:var(--growth-ink);' : '') + '">' + (i + j) + '</td>'; } h += '</tr>'; } $('p1-g').innerHTML = h + '</table>'; $('p1-r').textContent = 'Favoráveis: ' + n + ' de 36 → ' + fr(n, 36) + ' ≈ ' + nf(n / 36 * 100, 1) + '%'; $('p1-h').textContent = 'Linhas = 1º dado, colunas = 2º dado. Soma 7: 6/36 = 1/6 (a mais provável).'; });
  bind(['p2-n', 'p2-k'], function(){ var n = +$('p2-n').value, k = +$('p2-k').value; if(k > n){ k = n; $('p2-k').value = n; } $('p2-nv').textContent = n; $('p2-kv').textContent = k; $('p2-a').textContent = '1 − (1/2)^' + n + ' = ' + nf((1 - Math.pow(0.5, n)) * 100, 3) + '%'; $('p2-b').textContent = 'C(' + n + ',' + k + ')/2^' + n + ' = ' + C(n, k) + '/' + Math.pow(2, n) + ' = ' + fr(C(n, k), Math.pow(2, n)) + ' ≈ ' + nf(C(n, k) / Math.pow(2, n) * 100, 2) + '%'; $('p2-h').textContent = 'Total de resultados: 2^' + n + ' = ' + Math.pow(2, n) + '.'; });
  bind(['p3-d', 'p3-s'], function(){ var d = +$('p3-d').value, s = +$('p3-s').value; $('p3-dv').textContent = d; $('p3-sv').textContent = s; var ok = (s - d >= 1 && s - d <= 6) ? 1 : 0, tot = 0; for(var i = 1; i <= 6; i++) for(var j = 1; j <= 6; j++) if(i + j === s) tot++; $('p3-c').textContent = ok ? '1/6 (o 2º dado precisa ser ' + (s - d) + ')' : '0 (impossível)'; $('p3-t').textContent = fr(tot, 36); $('p3-h').textContent = 'P(A|B) = P(A∩B)/P(B) = ' + (ok ? '(1/36)/(1/6) = 1/6' : '0/(1/6) = 0') + '. Dados são independentes entre si; o evento “soma = s” não é independente do 1º dado.'; });
  bind(['p4-n', 'p4-k', 'p4-r'], function(){ var N = Math.round(+$('p4-n').value), Kf = Math.round(+$('p4-k').value), r = Math.round(+$('p4-r').value); if(Kf > N || r > N || r < 1){ $('p4-s').textContent = '—'; $('p4-c').textContent = ''; $('p4-w').textContent = ''; $('p4-h').textContent = 'Use K ≤ N e r ≤ N.'; return; } var num = 1, den = 1, t = []; for(var i = 0; i < r; i++){ num *= Math.max(0, Kf - i); den *= (N - i); t.push((Kf - i) + '/' + (N - i)); } $('p4-s').textContent = t.join(' · ') + ' = ' + (num ? fr(num, den) : '0') + ' ≈ ' + nf(num / den * 100, 2) + '%'; $('p4-c').textContent = 'C(' + Kf + ',' + r + ')/C(' + N + ',' + r + ') = ' + C(Kf, r) + '/' + C(N, r) + ' = ' + (C(Kf, r) ? fr(C(Kf, r), C(N, r)) : '0'); $('p4-w').textContent = '(' + Kf + '/' + N + ')^' + r + ' = ' + nf(Math.pow(Kf / N, r) * 100, 2) + '%'; $('p4-h').textContent = 'Os dois jeitos sem reposição dão o mesmo valor. Para N = 15, K = 8, r = 3: 8/65 (ENA 2026 Q6).'; });
  bind(['p5-n', 'p5-p'], function(){ var n = +$('p5-n').value, p = +$('p5-p').value / 100; $('p5-nv').textContent = n; $('p5-pv').textContent = Math.round(p * 100); var svg = $('p5-s'); svg.innerHTML = ''; var P = [], mx = 0; for(var k = 0; k <= n; k++){ var v = C(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k); P.push(v); mx = Math.max(mx, v); } var bw = 320 / (n + 1); P.forEach(function(v, k){ var h = v / mx * 120; el('rect', {x: 20 + k * bw + 2, y: 140 - h, width: bw - 4, height: h, fill: 'var(--decay)', 'fill-opacity': .75}, svg); var t = el('text', {x: 20 + k * bw + bw / 2, y: 156, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); t.textContent = k; }); var best = P.indexOf(mx); $('p5-h').textContent = 'Mais provável: k = ' + best + ' (' + nf(mx * 100, 2) + '%). P(k) = C(n,k)·p^k·(1−p)^(n−k).'; });`
}) }];
