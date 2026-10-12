// Unidade 33 — Quartis e box-plot (aulas 96 e 97)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { boxplot, resumo, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'quartis-e-box-plot', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u33', BRAND = 'Quartis e Box-plot', CAP = 'Aulas 96 e 97';
const pages = [];

const QJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function med(a){ var k = a.length; return k % 2 ? a[(k - 1) / 2] : (a[k / 2 - 1] + a[k / 2]) / 2; }
  function quartis(dados){ var d = dados.slice().sort(function(a, b){ return a - b; }), n = d.length, m = Math.floor(n / 2), baixa = d.slice(0, m), alta = d.slice(n % 2 ? m + 1 : m); return {rol: d, n: n, q1: med(baixa), q2: med(d), q3: med(alta), min: d[0], max: d[n - 1]}; }
  function caixa(svg, r, lo, hi, out, esc){ svg.innerHTML = ''; var W0 = 360, L = 20, Rr = 20, a = esc[0], b = esc[1], X = function(v){ return L + (v - a) / (b - a) * (W0 - L - Rr); }, y = 58;
    el('line', {x1: L, y1: 100, x2: W0 - Rr, y2: 100, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    var t = Math.max(1, Math.round((b - a) / 10)); for(var v = Math.ceil(a / t) * t; v <= b; v += t){ el('line', {x1: X(v), y1: 96, x2: X(v), y2: 104, stroke: 'var(--ink-soft)', 'stroke-width': 1.4}, svg); var tx = el('text', {x: X(v), y: 116, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); tx.textContent = pt(v); }
    el('line', {x1: X(lo), y1: y, x2: X(r.q1), y2: y, stroke: 'var(--ink)', 'stroke-width': 2.4}, svg); el('line', {x1: X(r.q3), y1: y, x2: X(hi), y2: y, stroke: 'var(--ink)', 'stroke-width': 2.4}, svg);
    el('line', {x1: X(lo), y1: y - 10, x2: X(lo), y2: y + 10, stroke: 'var(--ink)', 'stroke-width': 2.4}, svg); el('line', {x1: X(hi), y1: y - 10, x2: X(hi), y2: y + 10, stroke: 'var(--ink)', 'stroke-width': 2.4}, svg);
    el('rect', {x: X(r.q1), y: y - 18, width: X(r.q3) - X(r.q1), height: 36, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4, rx: 2}, svg); el('line', {x1: X(r.q2), y1: y - 18, x2: X(r.q2), y2: y + 18, stroke: 'var(--decay)', 'stroke-width': 3.2}, svg);
    out.forEach(function(v){ el('circle', {cx: X(v), cy: y, r: 4.5, fill: 'var(--surface)', stroke: 'var(--danger)', 'stroke-width': 2}, svg); });
    [[lo, 'mín'], [r.q1, 'Q1'], [r.q2, 'Q2'], [r.q3, 'Q3'], [hi, 'máx']].forEach(function(q){ var tt = el('text', {x: X(q[0]), y: y - 26, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: 'var(--ink)'}, svg); tt.textContent = q[1]; }); }
`;
const exDados = [12, 20, 23, 23, 24, 25, 25, 27, 28, 35];
const bpEx = boxplot({ min: 20, q1: 23, med: 24.5, q3: 27, max: 28, out: [12, 35], escala: [10, 40], maxw: '400px' });
const bpA = boxplot({ min: 4, q1: 5.5, med: 7, q3: 8, max: 9.5, escala: [0, 12], h: 110, maxw: '330px' });
const bpB = boxplot({ min: 2, q1: 5, med: 7, q3: 9, max: 10, escala: [0, 12], h: 110, maxw: '330px' });

// ===================== AULA 1: quartis =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 96', h1: 'Quartis: <span style="color:var(--primary);">três cortes, quatro partes de 25%</span>',
  sub: 'A mediana divide os dados em duas metades. Os quartis fazem mais dois cortes e dividem o conjunto ordenado em quatro partes com a mesma quantidade de dados.',
  badges: [['Q1 · Q2 · Q3'], ['25% em cada parte', 'growth'], ['amplitude interquartil', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do rol aos quartis.', [
  ['Rol', 'dados em ordem crescente', 'bulb'],
  ['Q2', 'a mediana', 'target'],
  ['Q1 e Q3', 'medianas das duas metades', 'chart'],
  ['n par e n ímpar', 'como separar as metades', 'link'],
  ['Amplitude interquartil', 'Q3 − Q1: o miolo de 50%', 'scale']
]));
a.push(objetivosSlide([
  'Calcular os <strong>quartis</strong> $Q_1$, $Q_2$ e $Q_3$ de um conjunto de dados.',
  'Tratar corretamente <strong>n par</strong> e <strong>n ímpar</strong>.',
  'Calcular a <strong>amplitude interquartil</strong> $Q_3 − Q_1$.',
  'Interpretar os quartis: <strong>25%</strong> dos dados em cada parte.'
], 'Dica', 'Sempre <strong>ordene</strong> primeiro. $Q_2$ é a mediana de todos; $Q_1$ é a mediana da <strong>metade inferior</strong>; $Q_3$, da <strong>metade superior</strong>. Com $n$ ímpar, a mediana <strong>não entra</strong> em nenhuma metade.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Ordenando produtos pelo preço', `
          ${lede('Em uma loja online, você ordena os produtos do mais barato ao mais caro. O produto do <strong>meio</strong> é a mediana: metade custa menos e metade custa mais. Para separar os produtos em <strong>quatro faixas</strong> de preço, cada uma com 25% dos itens, precisamos de <strong>três cortes</strong>: são os quartis.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantos cortes (quartis) dividem um conjunto ordenado em 4 partes iguais?', ['1', '2', '3', '4'], 2, 'Três cortes ($Q_1$, $Q_2$, $Q_3$) formam <strong>quatro</strong> partes, cada uma com 25% dos dados.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$Q_1$: 25% dos dados estão abaixo. $Q_2$ (mediana): 50%. $Q_3$: 75% estão abaixo.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · cálculo dos quartis', 'Mediana, e as medianas das metades', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> Ordene os dados (rol).</li>
                <li><strong>2.</strong> $Q_2$ = mediana do conjunto todo.</li>
                <li><strong>3.</strong> $Q_1$ = mediana da <strong>metade inferior</strong> (dados abaixo de $Q_2$).</li>
                <li><strong>4.</strong> $Q_3$ = mediana da <strong>metade superior</strong>.</li>
                <li>Com $n$ <strong>ímpar</strong>, retire a mediana antes de formar as metades; com $n$ <strong>par</strong>, as metades têm $n ÷ 2$ dados cada.</li>
                <li><strong>Amplitude interquartil</strong>: $A_{iq} = Q_3 − Q_1$ (miolo de 50% dos dados).</li>
              </ul>
            </div>
            ${W.box('Calculadora de quartis', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="q1-d" value="14; 22; 19; 31; 25; 28; 17; 33; 20" inputmode="decimal"></div>' + W.txt('q1-r', 'Rol: ') + W.txt('q1-q', 'Q1, Q2 e Q3: ') + W.txt('q1-i', 'Amplitude interquartil: ') + W.hint('q1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Quantidade ímpar de dados', 'Os diâmetros (cm) de nove discos cortados de um tronco foram 14, 22, 19, 31, 25, 28, 17, 33 e 20. Encontre os quartis.', [
  ['Rol', '$14, 17, 19, 20, 22, 25, 28, 31, 33$.'],
  ['Q2', 'Nove dados: o 5º é a mediana: $Q_2 = 22$.'],
  ['Q1 e Q3', 'Metade inferior: $14, 17, 19, 20$ ⇒ $Q_1 = (17 + 19) ÷ 2 = 18$. Metade superior: $25, 28, 31, 33$ ⇒ $Q_3 = (28 + 31) ÷ 2 = 29,5$.']
], '$Q_1 = 18$, $Q_2 = 22$ e $Q_3 = 29,5$. Amplitude interquartil: $29,5 − 18 = 11,5$.'));
a.push(exemplo('Exemplo resolvido', 'Quantidade par de dados', 'A umidade relativa do ar (%) em seis meses foi 48, 52, 57, 61, 63 e 70. Encontre os quartis.', [
  ['Q2', 'Seis dados já ordenados: centrais $57$ e $61$ ⇒ $Q_2 = 59$.'],
  ['Q1', 'Metade inferior: $48, 52, 57$ ⇒ $Q_1 = 52$.'],
  ['Q3', 'Metade superior: $61, 63, 70$ ⇒ $Q_3 = 63$.']
], '$Q_1 = 52\\%$, $Q_2 = 59\\%$ e $Q_3 = 63\\%$: os 25% de meses mais secos ficaram entre 48% e 52%.', 'growth'));

a.push(pratique('Q1 de nove dados', 'No rol $14, 17, 19, 20, 22, 25, 28, 31, 33$, o primeiro quartil $Q_1$ é:',
  ['17', '18', '19', '20', '22'], 1,
  'Metade inferior: $14, 17, 19, 20$ ⇒ mediana $(17 + 19) ÷ 2 = 18$. <strong>Alternativa B.</strong>'));
a.push(pratique('Q3 de seis dados', 'Para os dados $48, 52, 57, 61, 63, 70$, o terceiro quartil é:',
  ['61', '62', '63', '66,5', '70'], 2,
  'Metade superior: $61, 63, 70$ ⇒ mediana $63$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Amplitude interquartil', 'No conjunto $12, 20, 23, 23, 24, 25, 25, 27, 28, 35$, a amplitude interquartil $Q_3 − Q_1$ é:',
  ['2', '3', '4', '5', '23'], 2,
  'Metade inferior: $12, 20, 23, 23, 24$ ⇒ $Q_1 = 23$. Metade superior: $25, 25, 27, 28, 35$ ⇒ $Q_3 = 27$. $27 − 23 = 4$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os quartis enganam', [
  ['Esquecer de ordenar', 'Quartis só fazem sentido no rol.'],
  ['Incluir a mediana nas metades (n ímpar)', 'Com $n$ ímpar, a mediana fica de fora das duas metades.'],
  ['Confundir Q2 com a média', '$Q_2$ é a <strong>mediana</strong>, não a média.'],
  ['Achar que Q1 é a média da primeira metade', '$Q_1$ é a <strong>mediana</strong> da metade inferior.']
]));
a.push(quiz([
  { q: 'Qual quartil é igual à mediana?', o: ['Q1', 'Q2', 'Q3', 'nenhum'], a: 1 },
  { q: 'Entre Q1 e Q3 estão aproximadamente:', o: ['25% dos dados', '50% dos dados', '75% dos dados', '100% dos dados'], a: 1 },
  { q: 'Rol: 2, 4, 6, 8, 10. O quartil Q1 é:', o: ['2', '3', '4', '6'], a: 1 },
  { q: 'A amplitude interquartil é:', o: ['máx − mín', 'Q3 − Q1', 'Q2 − Q1', 'Q3 + Q1'], a: 1 }
]));
a.push(fechamento([
  ['Quartis', 'Q1, Q2 (mediana) e Q3 dividem o rol em quatro partes.'],
  ['Cálculo', 'Medianas das metades; n ímpar: tire a mediana.'],
  ['Q3 − Q1', 'Amplitude interquartil: miolo de 50%.']
], 'Ordenar, achar a mediana e as medianas das metades.'));

pages.push({ out: BASE + 'aula-1-quartis.html', html: K.deck({
  title: 'Quartis — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 96 · Quartis', slides: a,
  extra: WJS + BIND + QJS + String.raw`
  bind(['q1-d'], function(){ var d = lista($('q1-d').value); if(d.length < 4 || !d.every(isFinite) || d.length > 100){ $('q1-r').textContent = 'informe de 4 a 100 números'; $('q1-q').textContent = ''; $('q1-i').textContent = ''; return; }
    var r = quartis(d); $('q1-r').textContent = r.rol.map(function(v){ return pt(v); }).join('; '); $('q1-q').textContent = 'Q1 = ' + pt(r.q1) + ' · Q2 = ' + pt(r.q2) + ' · Q3 = ' + pt(r.q3); $('q1-i').textContent = pt(r.q3) + ' − ' + pt(r.q1) + ' = ' + pt(r.q3 - r.q1);
    $('q1-h').textContent = r.n % 2 ? 'n ímpar: a mediana fica fora das duas metades.' : 'n par: cada metade tem ' + r.n / 2 + ' dados.'; });`
}) });

// ===================== AULA 2: box-plot =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 97', h1: 'Box-plot: <span style="color:var(--growth);">a caixa que resume cinco números</span>',
  sub: 'Mínimo, Q1, mediana, Q3 e máximo desenhados em uma só figura. O box-plot mostra o centro, a dispersão e os valores discrepantes — e é ótimo para comparar grupos.',
  badges: [['5 números'], ['limites e outliers', 'growth'], ['comparar grupos', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do conjunto de dados à caixa.', [
  ['Os cinco números', 'mín, Q1, Q2, Q3, máx', 'bulb'],
  ['Limites', 'Q1 − 1,5·Aiq e Q3 + 1,5·Aiq', 'target'],
  ['Outliers', 'valores fora dos limites', 'chart'],
  ['Desenho', 'caixa, bigodes e bolinhas', 'link'],
  ['Leitura e comparação', 'dispersão e simetria', 'scale']
]));
b.push(objetivosSlide([
  'Construir um <strong>box-plot</strong> passo a passo.',
  'Calcular os <strong>limites</strong> inferior e superior e identificar <strong>outliers</strong>.',
  'Ler centro e dispersão em um box-plot e <strong>comparar</strong> dois grupos.',
  'Interpretar a <strong>posição da mediana</strong> dentro da caixa.'
], 'Dica', 'Os <strong>bigodes</strong> vão até o menor e o maior valor que <strong>ainda estão dentro dos limites</strong>; os valores fora são marcados à parte (outliers).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Mensagens codificadas', `
          ${lede('Dois jeitos de escrever a mesma coisa: letras ou números (1 = A, 2 = B…). Só entende quem sabe decodificar. O <strong>box-plot</strong> é um jeito diferente de “escrever” dados: uma pequena figura que, para quem sabe lê-la, mostra <strong>onde está o centro, quanto os dados variam</strong> e <strong>se há valores estranhos</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${bpEx}
            ${mini('Em um box-plot, o traço vermelho dentro da caixa indica:', ['a média', 'a mediana (Q2)', 'o máximo', 'o desvio padrão'], 1, 'A linha dentro da caixa é a <strong>mediana</strong> ($Q_2$). A caixa vai de $Q_1$ a $Q_3$ (50% dos dados no meio).')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · construção do box-plot', 'Cinco passos', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> Ordene os dados e calcule $Q_1$, $Q_2$, $Q_3$ e $A_{iq} = Q_3 − Q_1$.</li>
                <li><strong>2.</strong> Limites: <strong>inferior</strong> $= Q_1 − 1,5 · A_{iq}$; <strong>superior</strong> $= Q_3 + 1,5 · A_{iq}$.</li>
                <li><strong>3.</strong> Compare o mínimo e o máximo com os limites: os que ficam <strong>fora</strong> são <strong>outliers</strong>.</li>
                <li><strong>4.</strong> Resumo: menor valor <strong>dentro dos limites</strong>, $Q_1$, $Q_2$, $Q_3$, maior valor <strong>dentro dos limites</strong>, e os outliers.</li>
                <li><strong>5.</strong> Desenhe: eixo com escala, <strong>caixa</strong> de $Q_1$ a $Q_3$ dividida em $Q_2$, <strong>bigodes</strong> até os extremos e <strong>bolinhas</strong> nos outliers.</li>
              </ul>
            </div>
            ${W.box('Monte o box-plot', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="b1-d" value="12; 20; 23; 23; 24; 25; 25; 27; 28; 35" inputmode="decimal"></div>' + W.svg('b1-s', '0 0 360 130', '380px') + W.txt('b1-r', 'Q1, Q2, Q3 e Aiq: ') + W.txt('b1-l', 'Limites: ') + W.txt('b1-o', 'Outliers e bigodes: ') + W.hint('b1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Construindo o box-plot', 'Construa o box-plot de $12, 20, 23, 23, 24, 25, 25, 27, 28, 35$.', [
  ['Quartis', 'Rol já ordenado ($n = 10$). $Q_2 = (24 + 25) ÷ 2 = 24,5$; $Q_1 = 23$ (mediana de $12, 20, 23, 23, 24$); $Q_3 = 27$ (mediana de $25, 25, 27, 28, 35$). $A_{iq} = 4$.'],
  ['Limites', 'Inferior: $23 − 1,5 · 4 = 17$. Superior: $27 + 1,5 · 4 = 33$.'],
  ['Outliers e bigodes', '$12 < 17$ e $35 > 33$: <strong>outliers</strong>. Bigodes: de $20$ (menor dentro) a $28$ (maior dentro).']
], 'Resumo: $20$, $23$, $24,5$, $27$, $28$ e outliers $12$ e $35$.'));
b.push(sl('Figura', 'O box-plot resultante', `
          <div class="grid2">
            ${bpEx}
            <div>
              ${callout('Leitura', 'Metade central dos dados está entre $23$ e $27$ (caixa). A mediana, $24,5$, está um pouco à esquerda do centro da caixa.', 'success')}
              ${callout('Outliers', 'As bolinhas em $12$ e $35$ são valores <strong>discrepantes</strong>: ficam além dos limites ($17$ e $33$).', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Comparando duas turmas', 'As notas de duas turmas têm o mesmo ponto central, mas box-plots diferentes. A: mín 4; Q1 5,5; Q2 7; Q3 8; máx 9,5. B: mín 2; Q1 5; Q2 7; Q3 9; máx 10. Compare.', [
  ['Centro', 'As duas têm mediana $7$.'],
  ['Caixa', 'Amplitude interquartil: A $= 8 − 5,5 = 2,5$; B $= 9 − 5 = 4$.'],
  ['Extremos', 'Amplitude total: A $= 5,5$; B $= 8$.']
], 'Mesma mediana, mas a turma <strong>B</strong> é <strong>mais dispersa</strong> (caixa e bigodes maiores).', 'growth'));
b.push(sl('Figura', 'Duas turmas lado a lado', `
          <div class="grid2">
            <div><p style="font-weight:700;margin:0;">Turma A</p>${bpA}</div>
            <div><p style="font-weight:700;margin:0;">Turma B</p>${bpB}</div>
          </div>
          ${callout('Como comparar', 'Mesma escala nos dois, olhe: a <strong>posição da mediana</strong> (centro) e o <strong>tamanho da caixa e dos bigodes</strong> (dispersão).', 'success')}`, { cls: 'growth' }));

b.push(pratique('Limites e outliers', 'Em um conjunto com $Q_1 = 23$ e $Q_3 = 27$, o limite superior é $27 + 1,5 · 4 = 33$. O valor $35$ é:',
  ['um valor normal', 'um outlier (acima do limite superior)', 'o primeiro quartil', 'a mediana', 'impossível'], 1,
  '$35 > 33$: fora do limite superior, portanto <strong>outlier</strong>. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Comparando box-plots', 'Duas turmas têm a mesma mediana (7). Na turma B a caixa e os bigodes são bem maiores que na A. Pode-se afirmar que:',
  ['B tem notas mais baixas', 'B tem notas mais dispersas', 'A tem notas mais dispersas', 'A e B têm as mesmas notas', 'A tem a maior mediana'], 1,
  'Caixa maior = maior amplitude interquartil: mais dispersão. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Quais são os outliers?', 'Para $12, 20, 23, 23, 24, 25, 25, 27, 28, 35$ (limites $17$ e $33$), os valores discrepantes são:',
  ['12 e 35', '20 e 28', 'só o 12', 'só o 35', 'não há outliers'], 0,
  '$12 < 17$ e $35 > 33$: ambos fora dos limites. <strong>Alternativa A.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o box-plot engana', [
  ['Bigodes até o mínimo e o máximo reais', 'Os bigodes vão até os extremos <strong>dentro dos limites</strong>; os outliers ficam à parte.'],
  ['Média na caixa', 'A linha da caixa é a <strong>mediana</strong>, não a média.'],
  ['Escalas diferentes', 'Para comparar box-plots, use a <strong>mesma escala</strong>.'],
  ['Caixa maior = valores maiores?', 'Não: caixa maior = <strong>mais dispersão</strong>, não valores maiores.']
]));
b.push(quiz([
  { q: 'A caixa do box-plot vai de:', o: ['mín a máx', 'Q1 a Q3', 'Q1 a Q2', 'média a mediana'], a: 1 },
  { q: 'O limite superior é:', o: ['Q3 + 1,5·Aiq', 'Q3 + Aiq', 'máx + 1,5·Aiq', 'Q3 − 1,5·Aiq'], a: 0 },
  { q: 'Os outliers são marcados:', o: ['dentro da caixa', 'como bolinhas fora dos bigodes', 'na mediana', 'não aparecem'], a: 1 },
  { q: 'Se a mediana está colada em Q1, a distribuição tem:', o: ['mais dados mais próximos dos valores baixos', 'simetria perfeita', 'nenhum dado', 'média zero'], a: 0 }
]));
b.push(fechamento([
  ['Cinco números', 'mín, Q1, Q2, Q3, máx (dentro dos limites).'],
  ['Outliers', 'Fora de Q1 − 1,5·Aiq ou Q3 + 1,5·Aiq.'],
  ['Comparar', 'Mesma escala: centro e dispersão.']
], 'Cinco números e uma régua: o box-plot está pronto.'));

pages.push({ out: BASE + 'aula-2-box-plot.html', html: K.deck({
  title: 'Box-plot — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 97 · Box-plot', slides: b,
  extra: WJS + BIND + QJS + String.raw`
  bind(['b1-d'], function(){ var d = lista($('b1-d').value), s = $('b1-s'); if(d.length < 4 || !d.every(isFinite) || d.length > 100){ s.innerHTML = ''; $('b1-r').textContent = 'informe de 4 a 100 números'; $('b1-l').textContent = ''; $('b1-o').textContent = ''; return; }
    var r = quartis(d), iq = r.q3 - r.q1, li = r.q1 - 1.5 * iq, ls = r.q3 + 1.5 * iq, dentro = r.rol.filter(function(v){ return v >= li && v <= ls; }), out = r.rol.filter(function(v){ return v < li || v > ls; }), lo = dentro[0], hi = dentro[dentro.length - 1];
    var mn = Math.min.apply(null, d), mx = Math.max.apply(null, d), pad = Math.max(1, (mx - mn) * 0.08); caixa(s, r, lo, hi, out, [Math.floor(mn - pad), Math.ceil(mx + pad)]);
    $('b1-r').textContent = 'Q1 = ' + pt(r.q1) + ' · Q2 = ' + pt(r.q2) + ' · Q3 = ' + pt(r.q3) + ' · Aiq = ' + pt(iq); $('b1-l').textContent = 'inferior ' + pt(li) + ' · superior ' + pt(ls); $('b1-o').textContent = (out.length ? 'outliers: ' + out.map(function(v){ return pt(v); }).join(', ') : 'não há outliers') + ' · bigodes de ' + pt(lo) + ' a ' + pt(hi); $('b1-h').textContent = 'Bolinhas vermelhas: valores fora dos limites.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Quartis e box-plot: <span>cinco números, uma figura</span>',
  lede: 'Quartis dividem o rol em quatro partes de 25%; o box-plot resume mínimo, Q1, mediana, Q3 e máximo, e destaca valores discrepantes.',
  badges: ['Q1 · Q2 · Q3', 'Aiq = Q3 − Q1', 'limites 1,5·Aiq'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Quartis', 'Três cortes', 'chart', 'primary', p('Q2 = mediana; Q1 e Q3: medianas das metades.') + call('Exemplo', '14…33: Q1 = 18; Q2 = 22; Q3 = 29,5.', 'success')],
    ['n ímpar × par', 'Metades', 'target', 'growth', li(['Ímpar: tire a mediana das metades.', 'Par: n/2 em cada metade.'])],
    ['Aiq', 'Q3 − Q1', 'link', 'decay', p('Miolo de 50% dos dados.')],
    ['Limites', '1,5·Aiq', 'scale', 'success', p('Inferior: Q1 − 1,5·Aiq. Superior: Q3 + 1,5·Aiq.')],
    ['Box-plot', 'Caixa e bigodes', 'up', 'primary', li(['Caixa: Q1 a Q3; linha: Q2.', 'Bigodes: extremos dentro dos limites.', 'Bolinhas: outliers.'])],
    ['Comparar', 'Mesma escala', 'check', 'growth', li(['Centro: mediana.', 'Dispersão: caixa e bigodes.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Não ordenar os dados.', 'Incluir a mediana nas metades (n ímpar).', 'Bigode até o outlier.', 'Confundir mediana com média.', 'Comparar com escalas diferentes.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Quartis e box-plot <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: Q1, Q3, amplitude interquartil, outliers e comparação de box-plots.',
  final: 'Rol, mediana das metades, limites de 1,5·Aiq e leitura da caixa.',
  questions: [
    { badge: 'Estilo ENEM · Q1', text: 'Os diâmetros (cm) de nove discos: 14, 22, 19, 31, 25, 28, 17, 33 e 20.', cmd: 'O primeiro quartil é:', opts: ['17', '18', '19', '20', '22'], a: 1,
      sol: '<p>Rol: $14, 17, 19, 20, 22, 25, 28, 31, 33$. Metade inferior: $14, 17, 19, 20$ ⇒ $Q_1 = 18$.</p>' },
    { badge: 'Estilo ENEM · Q3', text: 'A umidade relativa (%) em seis meses foi 48, 52, 57, 61, 63 e 70.', cmd: 'O terceiro quartil é:', opts: ['61', '62', '63', '66,5', '70'], a: 2,
      sol: '<p>Metade superior: $61, 63, 70$ ⇒ $Q_3 = 63$.</p>' },
    { badge: 'Estilo ENEM · amplitude interquartil', text: 'Considere o conjunto 12, 20, 23, 23, 24, 25, 25, 27, 28, 35.', cmd: 'A amplitude interquartil é:', opts: ['2', '3', '4', '5', '23'], a: 2,
      sol: '<p>$Q_1 = 23$ e $Q_3 = 27$: $27 − 23 = 4$.</p>' },
    { badge: 'Estilo ENEM · outliers', text: 'No mesmo conjunto, os limites do box-plot são $17$ e $33$.', cmd: 'Os valores discrepantes são:', opts: ['12 e 35', '20 e 28', 'só o 12', 'só o 35', 'não há outliers'], a: 0,
      sol: '<p>$12 < 17$ e $35 > 33$.</p>' },
    { badge: 'Estilo ENEM · comparação', text: 'Os box-plots das turmas A (à esquerda) e B (à direita), na mesma escala:' + bpA + bpB, cmd: 'Sobre as duas turmas é correto afirmar que:', opts: ['têm medianas diferentes', 'a turma B é mais dispersa', 'a turma A é mais dispersa', 'a turma A tem a maior mediana', 'as duas têm exatamente as mesmas notas'], a: 1,
      sol: '<p>Medianas iguais ($7$); caixa e bigodes da turma B são maiores: mais dispersão.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">construção</span>',
  subtitle: 'Passos embaralhados de quartis e box-plot: toque na ordem certa.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Ordenar, achar a mediana, achar as medianas das metades, calcular limites e desenhar.',
    problemas: [
      { titulo: 'Quartis com n ímpar', enunciado: 'Quartis de $14, 22, 19, 31, 25, 28, 17, 33, 20$.', passos: ['Ordene: $14, 17, 19, 20, 22, 25, 28, 31, 33$.', 'A mediana (5º dado) é $Q_2 = 22$.', 'Retire a mediana e separe as metades: $14, 17, 19, 20$ e $25, 28, 31, 33$.', 'Medianas das metades: $Q_1 = 18$ e $Q_3 = 29,5$.'] },
      { titulo: 'Limites e outliers', enunciado: 'Dados com $Q_1 = 23$ e $Q_3 = 27$; mín $12$, máx $35$.', passos: ['Calcule $A_{iq} = Q_3 − Q_1 = 4$.', 'Limite inferior: $23 − 1,5 · 4 = 17$.', 'Limite superior: $27 + 1,5 · 4 = 33$.', 'Compare: $12 < 17$ e $35 > 33$: ambos são outliers.'] },
      { titulo: 'Desenho do box-plot', enunciado: 'Como desenhar o box-plot depois de calcular tudo?', passos: ['Trace um eixo com escala que cubra todos os valores.', 'Desenhe a caixa de $Q_1$ a $Q_3$.', 'Marque a mediana com um traço dentro da caixa.', 'Trace os bigodes até os extremos dentro dos limites e marque os outliers com bolinhas.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Quartis e box-plot: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de quartis e limites. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: quartis, amplitude interquartil, limite e outliers.',
  problems: [
    { tag: 'Q1', q: 'Rol 14, 17, 19, 20, 22, 25, 28, 31, 33. Qual o Q1?', a: 18, ph: 'Q1', hint: 'Mediana de 14, 17, 19, 20.', sol: '<p>$18$.</p>' },
    { tag: 'Q3', q: 'No mesmo rol, qual o Q3?', a: 29.5, ph: 'Q3', hint: 'Mediana de 25, 28, 31, 33.', sol: '<p>$29,5$.</p>' },
    { tag: 'Aiq', q: 'Em 12, 20, 23, 23, 24, 25, 25, 27, 28, 35: qual a amplitude interquartil?', a: 4, ph: 'Aiq', hint: 'Q1 = 23, Q3 = 27.', sol: '<p>$4$.</p>' },
    { tag: 'Limite', q: 'Com Q3 = 27 e Aiq = 4, qual o limite superior?', a: 33, ph: 'limite', hint: '27 + 1,5 · 4.', sol: '<p>$33$.</p>' },
    { tag: 'Outliers', q: 'No conjunto 12, 20, 23, 23, 24, 25, 25, 27, 28, 35 (limites 17 e 33), quantos outliers?', a: 2, ph: 'outliers', hint: '12 e 35.', sol: '<p>$2$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Quartis e Box-plot', accent: 'primary', icon: 'candles',
  aulas: [['Aula 96', 'Quartis', 'aula-1-quartis.html'], ['Aula 97', 'Box-plot', 'aula-2-box-plot.html']],
  enem: 'Quartis e box-plot no estilo ENEM', cria: 'Ordene a construção', pratica: 'Quartis e box-plot: trilha de desafios'
}, pages };
