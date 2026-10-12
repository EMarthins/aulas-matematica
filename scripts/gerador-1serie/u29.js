// Unidade 29 — Histograma de frequência (aulas 87 e 88)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { barras, histograma, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'histograma', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u29', BRAND = 'Histograma de Frequência', CAP = 'Aulas 87 e 88';
const pages = [];

const classesNotas = [[30, 40, 1], [40, 50, 2], [50, 60, 3], [60, 70, 6], [70, 80, 9], [80, 90, 6], [90, 100, 3]];
const espera = [[0, 10, 6], [10, 20, 14], [20, 30, 12], [30, 40, 6], [40, 50, 2]];

const HJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function histo(svg, cl, mostraPoligono){ svg.innerHTML = ''; var W0 = 360, H = 190, L = 34, B = 30, T = 16, R = 10, fm = Math.max.apply(null, cl.map(function(c){ return c[2]; })) * 1.2 || 1, a = cl[0][0], b = cl[cl.length - 1][1];
    var X = function(v){ return L + (v - a) / (b - a) * (W0 - L - R); }, Y = function(v){ return H - B - v / fm * (H - B - T); };
    el('line', {x1: L, y1: H - B, x2: W0 - R, y2: H - B, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg); el('line', {x1: L, y1: H - B, x2: L, y2: T, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    cl.forEach(function(c){ el('rect', {x: X(c[0]), y: Y(c[2]), width: X(c[1]) - X(c[0]), height: Y(0) - Y(c[2]), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2}, svg); var t = el('text', {x: (X(c[0]) + X(c[1])) / 2, y: Y(c[2]) - 5, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: 'var(--ink)'}, svg); t.textContent = c[2]; });
    cl.map(function(c){ return c[0]; }).concat([b]).forEach(function(v){ var t = el('text', {x: X(v), y: H - B + 15, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-soft)'}, svg); t.textContent = pt(v); });
    if(mostraPoligono){ var pts = [[a - (cl[0][1] - cl[0][0]) / 2, 0]].concat(cl.map(function(c){ return [(c[0] + c[1]) / 2, c[2]]; })).concat([[b + (cl[0][1] - cl[0][0]) / 2, 0]]); el('polyline', {points: pts.map(function(q){ return X(Math.max(a - 1e6, Math.min(b + 1e6, q[0]))).toFixed(1) + ',' + Y(q[1]).toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--decay)', 'stroke-width': 2.4}, svg); } }
`;

// ===================== AULA 1: o histograma =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 87', h1: 'Histograma de frequência: <span style="color:var(--primary);">barras coladas para dados em classes</span>',
  sub: 'Notas, alturas, salários, tempos: quando os dados são medidos e agrupados em intervalos, o gráfico certo é o histograma — barras sem espaço entre elas, porque as classes se encostam.',
  badges: [['barras adjacentes'], ['altura = frequência', 'growth'], ['classes de mesma amplitude', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da tabela por classes ao histograma.', [
  ['Histograma × barras', 'por que as barras se tocam', 'bulb'],
  ['Eixos', 'classes na horizontal, fi na vertical', 'chart'],
  ['Construção', 'uma barra por classe', 'target'],
  ['Leitura', 'classe modal e totais', 'link'],
  ['Polígono de frequência', 'ligando os pontos médios', 'scale']
]));
a.push(objetivosSlide([
  'Diferenciar <strong>histograma</strong> de <strong>gráfico de barras</strong>.',
  '<strong>Construir</strong> o histograma a partir de uma tabela por classes.',
  'Identificar a <strong>classe modal</strong> e calcular totais e percentuais.',
  'Traçar o <strong>polígono de frequência</strong>.'
], 'Dica', 'No histograma, a <strong>área</strong> de cada barra é proporcional à frequência (porque as larguras são iguais, a <strong>altura</strong> já basta para comparar).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Barras separadas ou coladas?', `
          ${lede('Um gráfico de barras compara <strong>categorias separadas</strong> (times, cursos, cores) — por isso as barras têm espaço entre elas. Um histograma mostra <strong>intervalos contínuos</strong> de uma variável numérica (notas de 30 a 100): cada classe termina onde a próxima começa, e as barras ficam <strong>coladas</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${histograma({ classes: classesNotas, max: 10, passo: 2, maxw: '340px' })}
            ${mini('As barras de um histograma ficam coladas porque:', ['os dados são qualitativos', 'as classes são intervalos contínuos que se encostam', 'é uma regra estética', 'o espaço seria desperdício'], 1, 'As classes ($30 ⊢ 40$, $40 ⊢ 50$, …) cobrem o eixo <strong>sem lacunas</strong>: o fim de uma é o começo da seguinte.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · construção', 'Passo a passo do histograma', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Eixo horizontal</strong>: as classes (intervalos), com os limites marcados.</li>
                <li><strong>Eixo vertical</strong>: a frequência (absoluta ou relativa).</li>
                <li>Uma <strong>barra</strong> para cada classe, com <strong>altura</strong> igual à frequência.</li>
                <li>Barras <strong>coladas</strong>, de mesma largura (classes de mesma amplitude).</li>
                <li><strong>Polígono de frequência</strong>: ligue os <strong>pontos médios</strong> do topo das barras (e feche nos extremos).</li>
              </ul>
            </div>
            ${W.box('Monte o histograma', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="h1-d" value="34; 41; 47; 52; 55; 58; 60; 62; 63; 65; 66; 68; 70; 71; 72; 73; 74; 75; 76; 78; 79; 80; 82; 83; 85; 86; 88; 90; 94; 98" inputmode="decimal"></div>' + W.row(W.nm('h1-i', 'Início da 1ª classe', 30, 'any'), W.nm('h1-w', 'Amplitude da classe', 10, 'any')) + W.svg('h1-s', '0 0 360 190', '380px') + W.txt('h1-t', 'Frequências: ') + W.hint('h1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Notas em um histograma', 'As notas de 30 estudantes foram agrupadas em classes de amplitude 10: $30 ⊢ 40$: 1; $40 ⊢ 50$: 2; $50 ⊢ 60$: 3; $60 ⊢ 70$: 6; $70 ⊢ 80$: 9; $80 ⊢ 90$: 6; $90 ⊢ 100$: 3. Construa o histograma e identifique a classe modal.', [
  ['Eixos', 'Horizontal: $30$ a $100$ (de $10$ em $10$). Vertical: frequência de $0$ a $10$.'],
  ['Barras', 'Alturas: $1, 2, 3, 6, 9, 6, 3$, coladas.'],
  ['Classe modal', 'A mais alta: <strong>$70 ⊢ 80$</strong>, com $9$ estudantes.']
], 'Total: $1 + 2 + 3 + 6 + 9 + 6 + 3 = 30$ ✓. O histograma é “quase simétrico” em torno da classe modal.'));
a.push(sl('Figura', 'O histograma com o polígono de frequência', `
          <div class="grid2">
            ${histograma({ classes: classesNotas, max: 10, passo: 2, maxw: '360px' })}
            <div>
              ${callout('Polígono de frequência', 'Marque o ponto médio do topo de cada barra e ligue-os; feche o polígono com classes vizinhas de frequência 0 nos extremos. Ele mostra a <strong>forma</strong> da distribuição.', 'success')}
              ${callout('Leitura', 'Barras mais altas no meio e baixas nas pontas: a maioria das notas está em torno de 70–80.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(pratique('Total pelo histograma', 'Um histograma tem barras de alturas 1, 2, 3, 6, 9, 6 e 3. O número total de dados é:',
  ['6', '15', '24', '30', '36'], 3,
  'Soma das alturas: $1 + 2 + 3 + 6 + 9 + 6 + 3 = 30$. <strong>Alternativa D.</strong>'));
a.push(pratique('Classe modal', 'No mesmo histograma, a classe modal é a de frequência 9: $70 ⊢ 80$. Quantos estudantes têm nota <strong>abaixo de 60</strong>?',
  ['3', '6', '9', '12', '15'], 1,
  'Classes até $60$: $1 + 2 + 3 = 6$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Histograma ou barras?', 'Para representar a distribuição das <strong>alturas</strong> de 50 jogadores, agrupadas em faixas de 5 cm, o gráfico mais adequado é:',
  ['gráfico de setores', 'gráfico de linhas', 'histograma', 'pictograma', 'tabela de dupla entrada'], 2,
  'Altura é uma variável <strong>quantitativa contínua</strong> agrupada em classes: o histograma. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o histograma engana', [
  ['Barras separadas', 'No histograma não há espaço entre as barras (classes contínuas).'],
  ['Classes de amplitudes diferentes', 'Com larguras diferentes, só a <strong>área</strong> (e não a altura) é proporcional à frequência.'],
  ['Confundir com barras', 'Barras separadas são para categorias (qualitativas), não para classes numéricas.'],
  ['Eixo dos limites', 'Marque os limites das classes (30, 40, 50…), não rótulos soltos.']
]));
a.push(quiz([
  { q: 'O histograma é usado para:', o: ['dados qualitativos', 'dados quantitativos agrupados em classes', 'frações', 'funções'], a: 1 },
  { q: 'Em um histograma, a altura da barra representa:', o: ['o limite da classe', 'a frequência da classe', 'a amplitude', 'a média'], a: 1 },
  { q: 'A classe modal é a de:', o: ['maior frequência', 'menor frequência', 'meio', 'maior limite'], a: 0 },
  { q: 'O polígono de frequência liga:', o: ['os limites das classes', 'os pontos médios do topo das barras', 'as bases', 'os quartis'], a: 1 }
]));
a.push(fechamento([
  ['Histograma', 'Barras coladas; classes no eixo x; fi na altura.'],
  ['Classe modal', 'A barra mais alta.'],
  ['Polígono', 'Pontos médios dos topos, fechado nos extremos.']
], 'Classes contínuas pedem barras coladas.'));

pages.push({ out: BASE + 'aula-1-o-histograma.html', html: K.deck({
  title: 'O histograma — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 87 · O histograma', slides: a,
  extra: WJS + BIND + HJS + String.raw`
  bind(['h1-d', 'h1-i', 'h1-w'], function(){ var d = lista($('h1-d').value), i0 = +$('h1-i').value, w = +$('h1-w').value; if(!d.length || !d.every(isFinite) || d.length > 300 || !isFinite(i0) || !isFinite(w) || w <= 0){ $('h1-t').textContent = 'informe dados, início e amplitude positiva'; $('h1-s').innerHTML = ''; return; }
    var mn = Math.min.apply(null, d), mx = Math.max.apply(null, d); if(i0 > mn){ $('h1-t').textContent = 'o início deve ser ≤ ' + pt(mn); $('h1-s').innerHTML = ''; return; }
    var k = Math.floor((mx - i0) / w) + 1; if(k > 30){ $('h1-t').textContent = 'muitas classes (' + k + '): aumente a amplitude'; $('h1-s').innerHTML = ''; return; }
    var cl = []; for(var j = 0; j < k; j++){ var a = i0 + j * w, b = a + w; cl.push([a, b, d.filter(function(v){ return v >= a && v < b; }).length]); } histo($('h1-s'), cl, true);
    var mf = Math.max.apply(null, cl.map(function(c){ return c[2]; })), modal = cl.filter(function(c){ return c[2] === mf; }).map(function(c){ return pt(c[0]) + ' ⊢ ' + pt(c[1]); });
    $('h1-t').textContent = cl.map(function(c){ return c[2]; }).join(' · ') + ' (total ' + d.length + ')'; $('h1-h').textContent = 'Classe modal: ' + modal.join(' e ') + '. Linha vermelha: polígono de frequência.'; });`
}) });

// ===================== AULA 2: lendo histogramas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 88', h1: 'Lendo e interpretando histogramas: <span style="color:var(--growth);">o que a forma conta</span>',
  sub: 'Depois de construído, o histograma responde perguntas: quantos esperam menos de 20 minutos? Qual a faixa mais comum? A distribuição é simétrica ou puxada para um lado?',
  badges: [['classe modal'], ['totais e percentuais', 'growth'], ['forma da distribuição', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Da barra à resposta.', [
  ['Totais', 'somar as alturas', 'bulb'],
  ['Percentuais', 'acumular classes', 'chart'],
  ['Classe modal', 'a mais frequente', 'target'],
  ['Forma', 'simétrica ou assimétrica', 'link'],
  ['Problemas', 'tempo de espera e outros', 'scale']
]));
b.push(objetivosSlide([
  'Calcular <strong>totais</strong> e <strong>percentuais</strong> a partir das barras.',
  'Responder “<strong>quantos até</strong> / <strong>a partir de</strong>” somando classes.',
  'Descrever a <strong>forma</strong> da distribuição (simétrica ou assimétrica).',
  'Resolver problemas de <strong>tempos de espera</strong> e semelhantes.'
], 'Dica', 'Leia as classes como <strong>intervalos fechados à esquerda e abertos à direita</strong>: “menos de 20” é $0 ⊢ 10$ mais $10 ⊢ 20$; “30 ou mais” é $30 ⊢ 40$ mais $40 ⊢ 50$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A fila do posto de saúde', `
          ${lede('Um posto de saúde registrou o <strong>tempo de espera</strong>, em minutos, de 40 pacientes: $0 ⊢ 10$: 6; $10 ⊢ 20$: 14; $20 ⊢ 30$: 12; $30 ⊢ 40$: 6; $40 ⊢ 50$: 2. O histograma mostra de imediato que a faixa mais comum é de 10 a 20 minutos e que esperas longas são raras.')}
          <div class="grid2" style="margin-top:6px;">
            ${histograma({ classes: espera, max: 16, passo: 4, maxw: '340px' })}
            ${mini('Quantos pacientes esperaram <strong>menos de 20 minutos</strong>?', ['6', '14', '20', '26'], 2, 'Classes $0 ⊢ 10$ e $10 ⊢ 20$: $6 + 14 = 20$ pacientes (50% de 40).')}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · leitor de histograma', 'Mude as frequências e interprete', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Total</strong> $n = ∑ f_i$ (soma das alturas).</li>
                <li><strong>Percentual</strong> de uma classe: $f_i ÷ n · 100%$.</li>
                <li><strong>Classe modal</strong>: a barra mais alta.</li>
                <li><strong>Simétrica</strong>: barras “espelhadas” em torno do centro. <strong>Assimétrica à direita</strong>: cauda longa de valores altos.</li>
              </ul>
            </div>
            ${W.box('Cinco classes de amplitude 10', '<div><label>Frequências (separe por ponto e vírgula)</label><input type="text" id="e1-f" value="6; 14; 12; 6; 2" inputmode="decimal"></div>' + W.nm('e1-c', 'Contar quem espera menos de (min)', 20, 'any') + W.svg('e1-s', '0 0 360 190', '380px') + W.txt('e1-t', 'Total e classe modal: ') + W.txt('e1-p', 'Menos de x minutos: ') + W.hint('e1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Tempos de espera', 'Com o histograma da fila (40 pacientes: 6, 14, 12, 6 e 2 em classes de $0$ a $50$ min): (a) Qual o percentual que esperou 30 min ou mais? (b) Qual a classe modal? (c) Descreva a forma.', [
  ['(a) 30 min ou mais', 'Classes $30 ⊢ 40$ e $40 ⊢ 50$: $6 + 2 = 8$ pacientes; $8 ÷ 40 = 20%$.'],
  ['(b) Classe modal', 'A barra mais alta tem $14$: <strong>$10 ⊢ 20$</strong>.'],
  ['(c) Forma', 'Barras baixas à direita e uma “cauda” de esperas longas: distribuição <strong>assimétrica à direita</strong>.']
], '(a) <strong>20%</strong>; (b) $10 ⊢ 20$; (c) assimétrica à direita (a maioria espera pouco, poucos esperam muito).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Frequência acumulada no histograma', 'No histograma das notas (alturas $1, 2, 3, 6, 9, 6, 3$ para classes de $30$ a $100$): quantos estudantes tiveram nota inferior a 80 e qual o percentual?', [
  ['Classes abaixo de 80', '$30 ⊢ 40$ a $70 ⊢ 80$: $1 + 2 + 3 + 6 + 9 = 21$ estudantes.'],
  ['Percentual', '$21 ÷ 30 = 0,70 = 70%$.'],
  ['Conferência', 'Faltam $80 ⊢ 90$ (6) e $90 ⊢ 100$ (3): $9$ estudantes, $30%$ ✓.']
], '<strong>21</strong> estudantes (70%) tiraram menos de 80.', 'growth'));

b.push(pratique('Esperas curtas', 'No histograma da fila (6, 14, 12, 6 e 2 pacientes em classes de 10 min de $0$ a $50$), o percentual de pacientes que esperaram <strong>menos de 20 minutos</strong> é:',
  ['15%', '35%', '40%', '50%', '65%'], 3,
  '$6 + 14 = 20$; $20 ÷ 40 = 50%$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(pratique('Esperas longas', 'Quantos pacientes esperaram <strong>30 minutos ou mais</strong>?',
  ['2', '6', '8', '12', '20'], 2,
  'Classes $30 ⊢ 40$ e $40 ⊢ 50$: $6 + 2 = 8$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('A classe modal', 'No histograma das notas (alturas 1, 2, 3, 6, 9, 6 e 3 para as classes de 30 a 100), a classe modal é:',
  ['$50 ⊢ 60$', '$60 ⊢ 70$', '$70 ⊢ 80$', '$80 ⊢ 90$', '$90 ⊢ 100$'], 2,
  'A barra mais alta tem frequência $9$: $70 ⊢ 80$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a leitura de histogramas engana', [
  ['Contar “menos de” com classe a mais', '“Menos de 20” não inclui a classe $20 ⊢ 30$.'],
  ['Confundir moda com média', 'A classe modal é a mais <strong>frequente</strong>; não é, necessariamente, o centro.'],
  ['Percentual sobre a classe errada', 'O denominador é o <strong>total</strong> $n$ (soma de todas as barras).'],
  ['Escalas diferentes', 'Ao comparar dois histogramas, confira se os eixos têm a mesma escala.']
]));
b.push(quiz([
  { q: 'O total de dados em um histograma é:', o: ['a maior barra', 'a soma das alturas', 'o número de classes', 'a amplitude'], a: 1 },
  { q: 'Alturas 6, 14, 12, 6, 2: o total é:', o: ['20', '30', '40', '50'], a: 2 },
  { q: 'Uma distribuição com cauda longa à direita é:', o: ['simétrica', 'assimétrica à direita', 'uniforme', 'sem moda'], a: 1 },
  { q: '“30 ou mais” em classes de 10 de 0 a 50 inclui:', o: ['30⊢40 e 40⊢50', 'só 30⊢40', 'só 40⊢50', 'todas'], a: 0 }
]));
b.push(fechamento([
  ['Totais', 'Σ das alturas = n.'],
  ['Perguntas “até” e “a partir de”', 'Some as classes certas; divida por n.'],
  ['Forma', 'Simétrica ou com cauda para um lado.']
], 'Some as barras certas e divida pelo total.'));

pages.push({ out: BASE + 'aula-2-lendo-histogramas.html', html: K.deck({
  title: 'Lendo histogramas — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 88 · Lendo histogramas', slides: b,
  extra: WJS + BIND + HJS + String.raw`
  bind(['e1-f', 'e1-c'], function(){ var f = lista($('e1-f').value), lim = +$('e1-c').value; if(f.length !== 5 || !f.every(function(x){ return isFinite(x) && x >= 0; }) || f.reduce(function(p, q){ return p + q; }, 0) <= 0){ $('e1-t').textContent = 'informe 5 frequências não negativas'; $('e1-p').textContent = ''; $('e1-s').innerHTML = ''; return; }
    var cl = f.map(function(v, i){ return [i * 10, i * 10 + 10, v]; }); histo($('e1-s'), cl, true); var n = f.reduce(function(p, q){ return p + q; }, 0), mf = Math.max.apply(null, f), mod = cl.filter(function(c){ return c[2] === mf; }).map(function(c){ return c[0] + ' ⊢ ' + c[1]; });
    $('e1-t').textContent = 'n = ' + pt(n) + ' · classe modal: ' + mod.join(' e ');
    if(isFinite(lim)){ var cnt = 0; cl.forEach(function(c){ if(c[1] <= lim) cnt += c[2]; else if(c[0] < lim) cnt += c[2] * (lim - c[0]) / 10; }); var inteiro = cl.every(function(c){ return c[1] <= lim || c[0] >= lim; }); $('e1-p').textContent = pt(cnt, 1) + ' pacientes (' + pt(cnt / n * 100, 1) + '%)' + (inteiro ? '' : ' — estimativa (limite no meio de uma classe)'); }
    $('e1-h').textContent = 'Linha vermelha: polígono de frequência. Use limites múltiplos de 10 para contagens exatas.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Histograma: <span>construir e ler dados em classes</span>',
  lede: 'Barras coladas, classes no eixo horizontal, frequência na altura; classe modal, totais, percentuais, polígono de frequência e a forma da distribuição.',
  badges: ['barras coladas', 'classe modal', 'polígono de frequência'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Histograma × barras', 'Dados diferentes', 'chart', 'primary', li(['Histograma: classes numéricas contínuas.', 'Barras: categorias.', 'Histograma: sem espaço entre barras.'])],
    ['Construção', 'Passo a passo', 'target', 'growth', li(['Classes de mesma amplitude.', 'Uma barra por classe.', 'Altura = frequência.'])],
    ['Classe modal', 'Barra mais alta', 'link', 'decay', p('Notas: 70 ⊢ 80 (9 alunos).')],
    ['Totais e %', 'Somar barras', 'scale', 'success', p('$n = ∑ f_i$; percentual = classe ÷ n.') + call('Exemplo', '6 + 14 = 20 de 40: 50%.', 'success')],
    ['Polígono', 'Pontos médios', 'up', 'primary', p('Ligue os pontos médios dos topos; feche com classes de frequência 0.')],
    ['Forma', 'Simetria', 'check', 'growth', li(['Simétrica.', 'Assimétrica à direita (cauda longa para valores altos).', 'Assimétrica à esquerda.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Barras separadas em histograma.', 'Classes com amplitudes diferentes.', '“Menos de” com classe a mais.', 'Denominador errado no percentual.', 'Confundir classe modal com média.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Histograma <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: total, classe modal, percentual, tempo de espera e escolha do gráfico.',
  final: 'Some as barras certas, divida pelo total e reconheça a classe modal.',
  questions: [
    { badge: 'Estilo ENEM · total', text: 'O histograma das notas de uma turma tem barras de alturas 1, 2, 3, 6, 9, 6 e 3.' + histograma({ classes: classesNotas, max: 10, passo: 2, maxw: '320px' }), cmd: 'O número de estudantes da turma é:', opts: ['6', '15', '24', '30', '36'], a: 3,
      sol: '<p>$1 + 2 + 3 + 6 + 9 + 6 + 3 = 30$.</p>' },
    { badge: 'Estilo ENEM · classe modal', text: 'No mesmo histograma, as classes vão de 30 a 100 (amplitude 10).', cmd: 'A classe modal é:', opts: ['$50 ⊢ 60$', '$60 ⊢ 70$', '$70 ⊢ 80$', '$80 ⊢ 90$', '$90 ⊢ 100$'], a: 2,
      sol: '<p>A barra mais alta tem $9$: $70 ⊢ 80$.</p>' },
    { badge: 'Estilo ENEM · percentual', text: 'No mesmo histograma (30 estudantes):', cmd: 'O percentual de estudantes com nota inferior a 60 é:', opts: ['10%', '15%', '20%', '30%', '40%'], a: 2,
      sol: '<p>$1 + 2 + 3 = 6$; $6 ÷ 30 = 20%$.</p>' },
    { badge: 'Estilo ENEM · tempo de espera', text: 'Tempos de espera de 40 pacientes: $0 ⊢ 10$: 6; $10 ⊢ 20$: 14; $20 ⊢ 30$: 12; $30 ⊢ 40$: 6; $40 ⊢ 50$: 2.' + histograma({ classes: espera, max: 16, passo: 4, maxw: '320px' }), cmd: 'O percentual de pacientes que esperaram menos de 20 minutos é:', opts: ['15%', '35%', '40%', '50%', '65%'], a: 3,
      sol: '<p>$6 + 14 = 20$; $20 ÷ 40 = 50%$.</p>' },
    { badge: 'Estilo ENEM · escolha do gráfico', text: 'Deseja-se representar a distribuição das alturas de 50 jogadores, agrupadas em faixas de 5 cm.', cmd: 'O gráfico mais adequado é:', opts: ['de setores', 'de linhas', 'histograma', 'pictograma', 'tabela de dupla entrada'], a: 2,
      sol: '<p>Altura (quantitativa contínua) em classes: histograma.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Histograma ou <span style="color:var(--growth);">gráfico de barras</span>?',
  subtitle: 'Para cada situação, escolha o gráfico mais adequado.',
  tpl: cClassificar({
    cats: ['Histograma', 'Gráfico de barras'],
    intro: 'Cada cartão descreve dados. Escolha o gráfico mais adequado e clique em <strong>Conferir</strong>.',
    final: 'Quantitativa contínua em classes: histograma. Categorias separadas: barras.',
    itens: [
      ['Tempo de espera agrupado em intervalos de 10 minutos', 0, 'Variável numérica contínua em classes.'],
      ['Número de alunos por turma (A, B e C)', 1, 'Categorias separadas (turmas).'],
      ['Alturas dos jogadores agrupadas em faixas de 5 cm', 0, 'Contínua em classes.'],
      ['Time de futebol preferido', 1, 'Categorias nominais.'],
      ['Salários agrupados em faixas', 0, 'Quantitativa em classes.'],
      ['Nível de escolaridade dos entrevistados', 1, 'Categorias ordinais (barras separadas).'],
      ['Idades agrupadas em classes de 5 anos', 0, 'Contínua em classes.'],
      ['Cor dos olhos dos estudantes', 1, 'Categorias nominais.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Histograma: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de leitura de histogramas. Digite o número pedido.',
  final: 'Você percorreu a trilha: total, moda, percentual e esperas.',
  problems: [
    { tag: 'Total', q: 'Barras de alturas 1, 2, 3, 6, 9, 6 e 3: quantos dados?', a: 30, ph: 'dados', hint: 'Some as alturas.', sol: '<p>$30$.</p>' },
    { tag: 'Classe modal', q: 'No mesmo histograma, qual a frequência da classe modal?', a: 9, ph: 'fi', hint: 'A maior barra.', sol: '<p>$9$.</p>' },
    { tag: 'Percentual', q: 'Em 30 estudantes, 6 têm nota inferior a 60. Qual o percentual (%)?', a: 20, ph: '%', hint: '6 ÷ 30.', sol: '<p>$20%$.</p>' },
    { tag: 'Espera', q: 'Fila: 6, 14, 12, 6 e 2 pacientes (classes de 10 min até 50). Qual a frequência da classe modal?', a: 14, ph: 'fi', hint: 'A barra mais alta.', sol: '<p>$14$.</p>' },
    { tag: 'Espera', q: 'Quantos pacientes esperaram 30 minutos ou mais?', a: 8, ph: 'pacientes', hint: '6 + 2.', sol: '<p>$8$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Histograma de Frequência', accent: 'primary', icon: 'bars',
  aulas: [['Aula 87', 'O histograma', 'aula-1-o-histograma.html'], ['Aula 88', 'Lendo histogramas', 'aula-2-lendo-histogramas.html']],
  enem: 'Histograma no estilo ENEM', cria: 'Histograma ou gráfico de barras?', pratica: 'Histograma: trilha de desafios'
}, pages };
