// Unidade 28 — Gráficos de setores, de linhas e pictogramas (aulas 84 a 86)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF, svg, txu } = K;
const { barras, setores, linhas, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'graficos-setores-linhas-pictogramas', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u28', BRAND = 'Gráficos: Setores, Linhas e Pictogramas', CAP = 'Aulas 84 a 86';
const pages = [];

const GJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  var COR = ['var(--primary)', 'var(--growth)', 'var(--decay)', 'var(--success)'];
`;
// pictograma estático: símbolos (🌳) e meio símbolo
const picto = (linhasP) => {
  let s = '';
  linhasP.forEach(([rot, n], i) => {
    const y = 28 + i * 34; s += txu(8, y + 6, rot, 'var(--ink)', 13, 'start');
    const inteiros = Math.floor(n), meio = n - inteiros >= 0.5;
    for (let k = 0; k < inteiros; k++) s += `<text x="${70 + k * 30}" y="${y + 8}" font-size="24">🌳</text>`;
    if (meio) s += `<text x="${70 + inteiros * 30}" y="${y + 8}" font-size="24" opacity="0.4">🌳</text>` + txu(70 + inteiros * 30 + 12, y + 28, '½', 'var(--ink-soft)', 11);
  });
  return svg(300, 28 + linhasP.length * 34 + 10, s, '340px');
};
const ac = setores({ fatias: [['manhã', 700], ['tarde', 300], ['noite', 800], ['madrugada', 200]], maxw: '380px' });
const fat = linhas({ xs: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'], ys: [20, 25, 18, 30, 32], max: 40, passo: 10, maxw: '380px' });

// ===================== AULA 1: gráfico de setores =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 84', h1: 'Gráfico de setores: <span style="color:var(--primary);">cada fatia, uma parte do todo</span>',
  sub: 'Quando o objetivo é mostrar como o todo se divide em partes, o gráfico de setores (“pizza”) mostra de relance quem ocupa mais espaço. A conta por trás: a circunferência tem 360°.',
  badges: [['360° = 100%'], ['ângulo = fr × 360°', 'growth'], ['partes de um todo', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da tabela à pizza e de volta.', [
  ['Quando usar', 'comparar partes com o todo', 'bulb'],
  ['Percentuais', 'fr × 100', 'chart'],
  ['Ângulos', 'fr × 360°', 'target'],
  ['Construção', 'tabela → ângulos → setores', 'link'],
  ['Leitura', 'quantidades a partir do percentual', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer quando usar um <strong>gráfico de setores</strong>.',
  'Calcular o <strong>percentual</strong> e o <strong>ângulo</strong> de cada setor.',
  '<strong>Construir</strong> o gráfico a partir de uma tabela.',
  '<strong>Ler</strong> quantidades a partir do total e dos percentuais.'
], 'Dica', 'No gráfico de setores, <strong>percentual</strong> e <strong>ângulo</strong> andam juntos: $100% ↔ 360°$, $50% ↔ 180°$, $25% ↔ 90°$. Cada $1%$ vale $3,6°$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Qual a vantagem da pizza sobre a tabela?', `
          ${lede('Uma tabela com muitos números exige leitura atenta; um gráfico de setores mostra <strong>de relance</strong> qual categoria ocupa mais do todo. Ele é ideal para a pergunta: <strong>“como o todo está dividido?”</strong>. Para outras perguntas (como evolução no tempo) há gráficos melhores.')}
          <div class="grid2" style="margin-top:6px;">
            ${ac}
            ${mini('Uma academia entrevistou 2 000 pessoas sobre o horário preferido. O setor “noite” representa 40%. Quantas pessoas escolheram a noite?', ['400', '600', '800', '1 000'], 2, '$40% · 2\\ 000 = 0,40 · 2\\ 000 = 800$ pessoas. (Em graus, esse setor mede $0,40 · 360° = 144°$.)')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · percentual e ângulo', 'A pizza e a circunferência', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Setores comparam <strong>partes com o todo</strong> (variável qualitativa ou classes).</li>
                <li><strong>Percentual</strong> da categoria: $f_i ÷ n$ · 100%.</li>
                <li><strong>Ângulo</strong> do setor: $f_r · 360°$ $= {f_i|n} · 360°$.</li>
                <li>Os percentuais somam <strong>100%</strong>; os ângulos, <strong>360°</strong>.</li>
                <li>Não há eixo: o tamanho da fatia só tem significado em relação ao todo.</li>
              </ul>
            </div>
            ${W.box('Monte o gráfico', W.row(W.nm('s1-a', 'Esportes', 320, 'any'), W.nm('s1-b', 'Música', 200, 'any')) + W.row(W.nm('s1-c', 'Teatro', 120, 'any'), W.nm('s1-d', 'Artes', 160, 'any')) + W.svg('s1-s', '0 0 360 190', '380px') + W.txt('s1-t', 'Total: ') + W.txt('s1-p', 'Percentuais e ângulos: ') + W.hint('s1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Atividades extracurriculares', 'Uma pesquisa com 800 alunos perguntou qual atividade gostariam de praticar: esportes (320), música (200), teatro (120) e artes (160). Calcule percentuais e ângulos para construir o gráfico de setores.', [
  ['Percentuais', 'Esportes: $320 ÷ 800 = 40%$ · Música: $25%$ · Teatro: $15%$ · Artes: $20%$.'],
  ['Ângulos', '$0,40 · 360° = 144°$ · $0,25 · 360° = 90°$ · $0,15 · 360° = 54°$ · $0,20 · 360° = 72°$.'],
  ['Conferência', 'Percentuais: $40 + 25 + 15 + 20 = 100%$. Ângulos: $144 + 90 + 54 + 72 = 360°$.']
], 'Com um transferidor, marque os setores de $144°$, $90°$, $54°$ e $72°$.'));
a.push(sl('Figura', 'O gráfico das atividades extracurriculares', `
          <div class="grid2">
            ${setores({ fatias: [['Esportes', 320], ['Música', 200], ['Teatro', 120], ['Artes', 160]], maxw: '400px' })}
            <div>
              ${callout('Leitura', 'A fatia de <strong>esportes</strong> é a maior (144°, 40%). A de <strong>teatro</strong> é a menor (54°, 15%).', 'success')}
              ${callout('Quando a pizza não ajuda', 'Para comparar valores <strong>exatos</strong> entre categorias muito parecidas, as barras são melhores.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Lendo a pizza da academia', 'No gráfico da academia (2 000 pessoas): manhã 700, tarde 300, noite 800 e madrugada 200. Qual a porcentagem e o ângulo de “tarde”? Quantas pessoas preferem manhã ou noite?', [
  ['Tarde', '$300 ÷ 2\\ 000 = 15%$; ângulo $0,15 · 360° = 54°$.'],
  ['Manhã ou noite', '$700 + 800 = 1\\ 500$ pessoas.'],
  ['Percentual', '$1\\ 500 ÷ 2\\ 000 = 75%$.']
], 'Tarde: <strong>15%</strong> (54°). Manhã ou noite: <strong>1 500</strong> pessoas (75%).', 'growth'));

a.push(pratique('Ângulo do setor', 'Em um gráfico de setores, uma categoria representa 25% do total. O ângulo desse setor é:',
  ['25°', '45°', '90°', '120°', '180°'], 2,
  '$0,25 · 360° = 90°$. <strong>Alternativa C.</strong>'));
a.push(pratique('Quantidade pelo percentual', 'No gráfico, 2 000 pessoas foram entrevistadas e o setor “noite” é 40%. O número de pessoas que preferem a noite é:',
  ['400', '600', '800', '1 000', '1 200'], 2,
  '$0,40 · 2\\ 000 = 800$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Lendo o gráfico', 'O gráfico de setores mostra os horários preferidos de 2 000 pessoas: manhã 35%, tarde 15%, noite 40% e madrugada 10%. O número de pessoas que preferem manhã ou tarde é:',
  ['700', '800', '1 000', '1 200', '1 400'], 2,
  '$35% + 15% = 50%$; $0,50 · 2\\ 000 = 1\\ 000$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o gráfico de setores engana', [
  ['Comparar pizzas de totais diferentes', 'Dois gráficos de setores só comparam <strong>percentuais</strong>: os totais podem ser bem diferentes.'],
  ['Confundir percentual e ângulo', 'Um setor de $25%$ mede $90°$, e não $25°$.'],
  ['Soma que não fecha', 'Percentuais devem somar 100%; ângulos, 360°.'],
  ['Usar para série temporal', 'A evolução no tempo é melhor mostrada por um gráfico de linhas.']
]));
a.push(quiz([
  { q: 'Qual o ângulo de um setor de 10%?', o: ['10°', '36°', '18°', '90°'], a: 1 },
  { q: 'Os ângulos de todos os setores somam:', o: ['100°', '180°', '360°', 'depende'], a: 2 },
  { q: 'Um setor de 50% corresponde a:', o: ['um quarto da pizza', 'meia pizza', 'três quartos', 'a pizza toda'], a: 1 },
  { q: 'O gráfico de setores é indicado para:', o: ['evolução no tempo', 'partes de um todo', 'valores exatos pequenos', 'funções'], a: 1 }
]));
a.push(fechamento([
  ['Quando usar', 'Partes de um todo.'],
  ['Cálculos', 'Percentual = fi ÷ n × 100; ângulo = fr × 360°.'],
  ['Conferência', '100% e 360°.']
], 'Percentual e ângulo: duas faces da mesma fatia.'));

pages.push({ out: BASE + 'aula-1-grafico-de-setores.html', html: K.deck({
  title: 'Gráfico de setores — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 84 · Gráfico de setores', slides: a,
  extra: WJS + BIND + GJS + String.raw`
  bind(['s1-a', 's1-b', 's1-c', 's1-d'], function(){ var v = [+$('s1-a').value, +$('s1-b').value, +$('s1-c').value, +$('s1-d').value], s = $('s1-s'); s.innerHTML = '';
    var tot = v.reduce(function(p, q){ return p + q; }, 0); if(!v.every(isFinite) || v.some(function(x){ return x < 0; }) || tot <= 0){ $('s1-t').textContent = '—'; $('s1-p').textContent = ''; return; }
    var nomes = ['Esportes', 'Música', 'Teatro', 'Artes'], cx = 100, cy = 95, r = 75, ang = -Math.PI / 2;
    v.forEach(function(x, i){ if(x <= 0) return; var a2 = ang + x / tot * 2 * Math.PI, large = a2 - ang > Math.PI ? 1 : 0, p1 = [cx + r * Math.cos(ang), cy + r * Math.sin(ang)], p2 = [cx + r * Math.cos(a2), cy + r * Math.sin(a2)];
      el('path', {d: 'M' + cx + ',' + cy + ' L' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1) + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1) + ' Z', fill: COR[i], stroke: 'var(--surface)', 'stroke-width': 2}, s); ang = a2; });
    nomes.forEach(function(nm, i){ el('rect', {x: 200, y: 36 + i * 26, width: 12, height: 12, fill: COR[i], rx: 2}, s); var t = el('text', {x: 218, y: 47 + i * 26, 'font-size': 12, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = nm + ' ' + pt(v[i] / tot * 100, 1) + '%'; });
    $('s1-t').textContent = pt(tot); $('s1-p').textContent = nomes.map(function(nm, i){ return nm + ': ' + pt(v[i] / tot * 100, 1) + '% (' + pt(v[i] / tot * 360, 1) + '°)'; }).join(' · '); $('s1-h').textContent = 'Os percentuais somam 100% e os ângulos somam 360°.'; });`
}) });

// ===================== AULA 2: linhas e pictogramas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 85 e 86', h1: 'Gráficos de linhas e pictogramas: <span style="color:var(--growth);">tendência e símbolo</span>',
  sub: 'O gráfico de linhas mostra o que sobe, o que desce e o que fica igual ao longo do tempo. O pictograma troca barras por desenhos, e a legenda diz quanto vale cada desenho.',
  badges: [['tendência no tempo'], ['legenda do símbolo', 'growth'], ['variação entre períodos', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Tempo e símbolos.', [
  ['Gráfico de linhas', 'tendência: sobe, desce, estabiliza', 'bulb'],
  ['Leitura', 'valores e variações entre períodos', 'chart'],
  ['Pictograma', 'símbolos com legenda', 'target'],
  ['Cálculo com a legenda', 'inteiros e metades', 'link'],
  ['Comparações', 'média, total e variação percentual', 'scale']
]));
b.push(objetivosSlide([
  'Interpretar <strong>gráficos de linhas</strong>: tendências, maiores aumentos e quedas.',
  'Calcular <strong>variações</strong> (absoluta e percentual) entre períodos.',
  'Ler <strong>pictogramas</strong> usando a <strong>legenda</strong>.',
  'Passar de <strong>tabela</strong> para gráfico e de gráfico para tabela.'
], 'Dica', 'Leia primeiro <strong>título, eixos e legenda</strong>. No pictograma, <strong>cada símbolo vale o que a legenda diz</strong> e a metade do símbolo vale a metade.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Atrasos na semana', `
          ${lede('Durante uma semana, a turma registrou quantos estudantes chegaram atrasados a cada dia. O que esperar: números parecidos ou grandes diferenças? Se anotarmos os valores em um gráfico de <strong>linhas</strong>, vemos de uma vez em que dias houve <strong>aumento</strong>, <strong>queda</strong> ou <strong>estabilidade</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${fat}
            ${mini('No gráfico, o faturamento (mil reais) subiu de 18 em março para 30 em abril. O aumento foi de:', ['6 mil', '12 mil', '18 mil', '30 mil'], 1, '$30 − 18 = 12$ mil reais. Em percentual: $12 ÷ 18 ≈ 66,7%$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · linhas e pictogramas', 'Duas formas de mostrar dados', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Gráfico de linhas</strong> (segmentos): pontos ligados por segmentos; ideal para <strong>tendências ao longo do tempo</strong>.</li>
                <li>Segmento <strong>subindo</strong>: aumento; <strong>descendo</strong>: queda; <strong>horizontal</strong>: estabilidade.</li>
                <li><strong>Variação</strong> entre períodos: $y_2 − y_1$; <strong>percentual</strong>: $(y_2 − y_1) ÷ y_1$.</li>
                <li><strong>Pictograma</strong>: símbolos que representam quantidades; a <strong>legenda</strong> diz quanto vale cada símbolo (ou meio símbolo).</li>
              </ul>
            </div>
            ${W.box('Gráfico de linhas', '<div><label>Valores por período (separe por ponto e vírgula)</label><input type="text" id="l1-d" value="20; 25; 18; 30; 32" inputmode="decimal"></div>' + W.svg('l1-s', '0 0 360 190', '380px') + W.txt('l1-v', 'Variações: ') + W.txt('l1-m', 'Maior aumento e maior queda: ') + W.hint('l1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'O faturamento de cinco meses', 'O faturamento de uma confecção (mil reais) foi: Jan 20, Fev 25, Mar 18, Abr 30, Mai 32. Em que intervalo houve o maior aumento e a maior queda?', [
  ['Variações', 'Jan→Fev: $+5$ · Fev→Mar: $−7$ · Mar→Abr: $+12$ · Abr→Mai: $+2$.'],
  ['Maior aumento', '<strong>Março para abril</strong>: $+12$ mil reais.'],
  ['Maior queda', '<strong>Fevereiro para março</strong>: $−7$ mil reais (queda de $7 ÷ 25 = 28%$).']
], 'O gráfico “sobe” em quatro intervalos, mas desce de fevereiro para março.'));

b.push(sl('Pictograma', 'Árvores desmatadas por ano', `
          <div class="grid2">
            ${picto([['2022', 4], ['2023', 3.5], ['2024', 2.5], ['2025', 1.5]])}
            <div>
              ${callout('Legenda', 'Cada árvore inteira representa <strong>20 000 hectares</strong> desmatados; meia árvore, <strong>10 000 hectares</strong>.', 'success')}
              ${W.box('Símbolos a partir do valor', W.row(W.nm('p1-v', 'Valor (ha)', 70000, 'any'), W.nm('p1-e', 'Cada símbolo vale', 20000, 'any')) + W.txt('p1-r', 'Símbolos: ') + W.hint('p1-h'))}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Lendo o pictograma', 'Com a legenda (🌳 = 20 000 ha): 2022: 4 árvores; 2023: 3,5; 2024: 2,5; 2025: 1,5. Calcule os hectares de 2023, a soma de 2024 e 2025 e a redução percentual de 2022 a 2025.', [
  ['2023', '$3,5 · 20\\ 000 = 70\\ 000$ ha.'],
  ['2024 + 2025', '$(2,5 + 1,5) · 20\\ 000 = 4 · 20\\ 000 = 80\\ 000$ ha.'],
  ['Redução 2022 → 2025', '2022: $80\\ 000$; 2025: $30\\ 000$. Redução: $50\\ 000 ÷ 80\\ 000 = 62,5%$.']
], '2023: <strong>70 000 ha</strong>; 2024+2025: <strong>80 000 ha</strong>; redução de <strong>62,5%</strong> de 2022 a 2025.', 'growth'));

b.push(pratique('Maior aumento', 'No gráfico do faturamento (mil reais): Jan 20, Fev 25, Mar 18, Abr 30, Mai 32. O maior aumento entre meses consecutivos ocorreu:',
  ['de janeiro para fevereiro', 'de fevereiro para março', 'de março para abril', 'de abril para maio', 'não houve aumento'], 2,
  'Variações: $+5$, $−7$, $+12$, $+2$. O maior aumento foi $+12$ (março → abril). <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Pictograma', 'Em um pictograma, cada árvore vale 20 000 ha. Em 2023 aparecem 3,5 árvores. A área desmatada é:',
  ['35 000 ha', '60 000 ha', '70 000 ha', '75 000 ha', '80 000 ha'], 2,
  '$3,5 · 20\\ 000 = 70\\ 000$ ha. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Redução percentual', 'Em 2022 foram desmatados 80 000 ha e, em 2025, 30 000 ha. A redução percentual foi de:',
  ['37,5%', '50%', '55%', '62,5%', '70%'], 3,
  '$(80\\ 000 − 30\\ 000) ÷ 80\\ 000 = 0,625 = 62,5%$. <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde linhas e pictogramas enganam', [
  ['Eixo que não começa em zero', 'Um eixo “cortado” exagera visualmente as variações: leia os valores, não só a inclinação.'],
  ['Legenda esquecida', 'Cada símbolo pode valer 1, 20 ou 20 000: <strong>sempre</strong> consulte a legenda.'],
  ['Variação absoluta × percentual', '$+12$ mil e $+66,7%$ são medidas diferentes da mesma variação.'],
  ['Meio símbolo', 'Meio símbolo vale <strong>metade</strong> do valor da legenda.']
]));
b.push(quiz([
  { q: 'O gráfico de linhas é indicado para:', o: ['partes de um todo', 'evolução no tempo', 'classificar variáveis', 'ocupações'], a: 1 },
  { q: 'Se cada símbolo vale 50 e há 3,5 símbolos, o valor é:', o: ['150', '175', '200', '350'], a: 1 },
  { q: 'De 20 para 25, a variação percentual é:', o: ['5%', '20%', '25%', '125%'], a: 2 },
  { q: 'Um segmento descendente indica:', o: ['aumento', 'queda', 'estabilidade', 'erro'], a: 1 }
]));
b.push(fechamento([
  ['Linhas', 'Tendência no tempo; variação = y₂ − y₁.'],
  ['Pictograma', 'Símbolo × legenda; meio símbolo = metade.'],
  ['Variação %', '(y₂ − y₁) ÷ y₁ × 100.']
], 'Leia título, eixos e legenda antes de calcular.'));

pages.push({ out: BASE + 'aula-2-linhas-e-pictogramas.html', html: K.deck({
  title: 'Gráficos de linhas e pictogramas — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 85 e 86 · Linhas e pictogramas', slides: b,
  extra: WJS + BIND + GJS + String.raw`
  bind(['l1-d'], function(){ var d = lista($('l1-d').value), s = $('l1-s'); s.innerHTML = ''; if(d.length < 2 || !d.every(isFinite) || d.length > 24){ $('l1-v').textContent = 'informe de 2 a 24 valores'; $('l1-m').textContent = ''; return; }
    var W0 = 360, H = 190, L = 34, B = 26, T = 14, mx = Math.max.apply(null, d) * 1.15, X = function(i){ return L + (W0 - L - 12) * i / (d.length - 1); }, Y = function(v){ return H - B - v / mx * (H - B - T); };
    el('line', {x1: L, y1: H - B, x2: W0 - 12, y2: H - B, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s); el('line', {x1: L, y1: H - B, x2: L, y2: T, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s);
    el('polyline', {points: d.map(function(v, i){ return X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--primary)', 'stroke-width': 2.8}, s);
    d.forEach(function(v, i){ el('circle', {cx: X(i), cy: Y(v), r: 4, fill: 'var(--decay)'}, s); var t = el('text', {x: X(i), y: Y(v) - 8, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink)'}, s); t.textContent = pt(v); var t2 = el('text', {x: X(i), y: H - B + 14, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, s); t2.textContent = i + 1; });
    var vs = [], maiorA = -Infinity, ia = 0, maiorQ = Infinity, iq = 0; for(var i = 1; i < d.length; i++){ var dv = d[i] - d[i - 1]; vs.push((dv >= 0 ? '+' : '') + pt(dv)); if(dv > maiorA){ maiorA = dv; ia = i; } if(dv < maiorQ){ maiorQ = dv; iq = i; } }
    $('l1-v').textContent = vs.join(' · '); $('l1-m').textContent = 'maior aumento: ' + (maiorA > 0 ? '+' + pt(maiorA) + ' (período ' + ia + ' → ' + (ia + 1) + ')' : 'nenhum') + ' · maior queda: ' + (maiorQ < 0 ? pt(maiorQ) + ' (período ' + iq + ' → ' + (iq + 1) + ')' : 'nenhuma'); $('l1-h').textContent = 'Percentual de variação do primeiro ao último: ' + (d[0] !== 0 ? pt((d[d.length - 1] - d[0]) / d[0] * 100, 1) + '%' : '—') + '.'; });
  bind(['p1-v', 'p1-e'], function(){ var v = +$('p1-v').value, e = +$('p1-e').value; if(!isFinite(v) || !isFinite(e) || e <= 0 || v < 0){ $('p1-r').textContent = '—'; return; }
    var q = v / e, ints = Math.floor(q), meio = (q - ints) >= 0.5 - 1e-9; $('p1-r').textContent = pt(q, 2) + ' símbolos (' + ints + ' inteiro(s)' + (meio ? ' + meio' : '') + ')'; $('p1-h').textContent = 'Valor ÷ valor do símbolo = ' + pt(v) + ' ÷ ' + pt(e) + ' = ' + pt(q, 2) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Gráficos de setores, de linhas e pictogramas: <span>qual usar e como ler</span>',
  lede: 'Setores mostram partes de um todo (percentual e ângulo), linhas mostram tendência no tempo (variações) e pictogramas usam símbolos com legenda.',
  badges: ['360° = 100%', 'variação = y₂ − y₁', 'legenda do símbolo'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Setores', 'Partes de um todo', 'chart', 'primary', p('Ângulo $= f_r · 360°$; percentual $= f_r · 100%$.') + call('Exemplo', '25% = 90°.', 'success')],
    ['Linhas', 'Tendência no tempo', 'target', 'growth', li(['Sobe: aumento.', 'Desce: queda.', 'Horizontal: estável.'])],
    ['Variação', 'Absoluta e %', 'link', 'decay', p('$y_2 − y_1$ e $(y_2 − y_1) ÷ y_1$.') + call('Exemplo', '18 → 30: +12 (66,7%).', 'success')],
    ['Pictograma', 'Símbolo × legenda', 'scale', 'success', p('3,5 símbolos de 20 000 = 70 000.') + call('Cuidado', 'Meio símbolo = metade.', 'danger')],
    ['Escolha do gráfico', 'Pergunta → tipo', 'up', 'primary', li(['Partes do todo: setores.', 'Evolução: linhas.', 'Comparar categorias: barras.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Título e eixos lidos?', 'Legenda consultada?', 'Totais fecham?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir percentual e ângulo.', 'Comparar setores de totais diferentes.', 'Ignorar a legenda do pictograma.', 'Eixo cortado em linhas.', 'Variação absoluta × percentual.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Gráficos: setores, linhas e pictogramas <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: pizza, ângulo, linhas, pictograma e variação percentual.',
  final: 'Leia o gráfico, use a legenda e calcule com percentuais, ângulos e variações.',
  questions: [
    { badge: 'Estilo ENEM · setores', text: 'Uma academia entrevistou 2 000 pessoas: manhã 35%, tarde 15%, noite 40% e madrugada 10%.' + ac, cmd: 'Quantas pessoas preferem a noite?', opts: ['400', '600', '800', '1 000', '1 200'], a: 2,
      sol: '<p>$0,40 · 2\\ 000 = 800$.</p>' },
    { badge: 'Estilo ENEM · ângulo', text: 'Em um gráfico de setores, uma categoria representa 25% do total.', cmd: 'O ângulo do setor correspondente é:', opts: ['25°', '45°', '90°', '120°', '180°'], a: 2,
      sol: '<p>$0,25 · 360° = 90°$.</p>' },
    { badge: 'Estilo ENEM · linhas', text: 'O gráfico mostra o faturamento mensal (mil reais) de uma confecção: Jan 20, Fev 25, Mar 18, Abr 30, Mai 32.' + fat, cmd: 'O maior aumento entre meses consecutivos ocorreu:', opts: ['de jan. para fev.', 'de fev. para mar.', 'de mar. para abr.', 'de abr. para maio', 'não houve aumento'], a: 2,
      sol: '<p>Variações: $+5$, $−7$, $+12$, $+2$. Maior aumento: $+12$ (março → abril).</p>' },
    { badge: 'Estilo ENEM · pictograma', text: 'Em um pictograma, cada árvore representa 20 000 ha desmatados e meia árvore, 10 000 ha. Em 2023 aparecem 3 árvores e meia.', cmd: 'A área desmatada em 2023 foi:', opts: ['35 000 ha', '60 000 ha', '70 000 ha', '75 000 ha', '80 000 ha'], a: 2,
      sol: '<p>$3,5 · 20\\ 000 = 70\\ 000$ ha.</p>' },
    { badge: 'Estilo ENEM · variação', text: 'A área desmatada passou de 80 000 ha (2022) para 30 000 ha (2025).', cmd: 'A redução percentual foi de:', opts: ['37,5%', '50%', '55%', '62,5%', '70%'], a: 3,
      sol: '<p>$50\\ 000 ÷ 80\\ 000 = 62,5%$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'primary',
  h1: 'Verdadeiro ou falso: <span style="color:var(--primary);">gráficos</span>',
  subtitle: 'Julgue as afirmações sobre setores, linhas e pictogramas.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Setores: partes do todo. Linhas: tendência no tempo. Pictograma: legenda manda.',
    afirmacoes: [
      ['O gráfico de setores é indicado para mostrar partes de um todo.', true, 'Verdadeira: cada fatia é uma parte do total.'],
      ['O gráfico de linhas é indicado para mostrar tendência ao longo do tempo.', true, 'Verdadeira: os segmentos mostram aumento, queda ou estabilidade.'],
      ['Em um gráfico de setores, os percentuais somam 100% e os ângulos, 360°.', true, 'Verdadeira: as fatias completam o círculo.'],
      ['No pictograma, cada símbolo representa sempre uma unidade.', false, 'Falsa: a <strong>legenda</strong> diz quanto vale cada símbolo (pode ser 1, 50, 20 000…).'],
      ['O ângulo de um setor de 25% mede 25°.', false, 'Falsa: $0,25 · 360° = 90°$.'],
      ['Um gráfico de setores é a melhor forma de mostrar a evolução de 12 meses.', false, 'Falsa: para evolução no tempo, o de <strong>linhas</strong> é mais adequado.'],
      ['Em um gráfico de linhas, um segmento descendente indica diminuição.', true, 'Verdadeira: o valor caiu de um período para o seguinte.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Gráficos: setores, linhas e pictogramas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de leitura e cálculo. Digite o número pedido.',
  final: 'Você percorreu a trilha: pizza, ângulo, linhas, pictograma e redução.',
  problems: [
    { tag: 'Setores', q: 'Em 2 000 pessoas, 40% preferem a noite. Quantas pessoas?', a: 800, ph: 'pessoas', hint: '0,40 · 2 000.', sol: '<p>$800$.</p>' },
    { tag: 'Ângulo', q: 'Qual o ângulo (graus) de um setor de 15%?', a: 54, ph: 'graus', hint: '0,15 · 360.', sol: '<p>$54°$.</p>' },
    { tag: 'Linhas', q: 'O faturamento foi 20, 25, 18, 30, 32 (mil reais). Qual o maior aumento entre meses consecutivos (mil reais)?', a: 12, ph: 'mil reais', hint: '30 − 18.', sol: '<p>$12$.</p>' },
    { tag: 'Pictograma', q: 'Cada árvore vale 20 000 ha. Quantos hectares correspondem a 3,5 árvores?', a: 70000, ph: 'ha', hint: '3,5 · 20 000.', sol: '<p>$70\\ 000$.</p>' },
    { tag: 'Variação', q: 'De 80 000 ha para 30 000 ha: qual a redução percentual (%)?', a: 62.5, ph: '%', hint: '50 000 ÷ 80 000.', sol: '<p>$62,5%$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Gráficos: Setores, Linhas e Pictogramas', accent: 'primary', icon: 'pie',
  aulas: [['Aula 84', 'Gráfico de setores', 'aula-1-grafico-de-setores.html'], ['Aulas 85–86', 'Gráficos de linhas e pictogramas', 'aula-2-linhas-e-pictogramas.html']],
  enem: 'Gráficos de setores, linhas e pictogramas no estilo ENEM', cria: 'Verdadeiro ou falso: gráficos', pratica: 'Gráficos: setores, linhas e pictogramas: trilha de desafios'
}, pages };
