// Unidade 34 — Ramos e folhas, conversão entre gráficos e critérios de escolha (aulas 98 a 100)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { barras, setores, linhas, histograma, boxplot, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'ramos-e-folhas-e-escolha-de-graficos', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u34', BRAND = 'Ramos e Folhas e Escolha de Gráficos', CAP = 'Aulas 98 a 100';
const pages = [];

const notas = [49, 52, 55, 55, 58, 61, 63, 63, 63, 67, 70, 72, 75, 81, 94];
const alturas = [155, 158, 160, 162, 163, 163, 165, 167, 167, 168, 170, 171, 172, 172, 174, 176, 178, 180, 183, 189];
// diagrama de ramos e folhas em HTML (tabela)
const ramos = (dados, rotuloUnidade) => {
  const grupos = {}; dados.slice().sort((a, b) => a - b).forEach(v => { const r = Math.floor(v / 10); (grupos[r] = grupos[r] || []).push(v % 10); });
  const linhas = Object.keys(grupos).map(Number).sort((a, b) => a - b).map(r => `<tr><td style="text-align:right;padding:2px 10px;font-weight:700;border-right:2px solid var(--ink-soft);">${r}</td><td style="padding:2px 10px;letter-spacing:.12em;">${grupos[r].join(' ')}</td></tr>`).join('');
  return `<table class="tb" style="font-size:.95rem;"><thead><tr><th style="text-align:right;">Ramo</th><th>Folhas</th></tr></thead><tbody>${linhas}</tbody></table><p class="hint" style="margin-top:6px;">${rotuloUnidade}</p>`;
};

const RJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function med(a){ var k = a.length; return k % 2 ? a[(k - 1) / 2] : (a[k / 2 - 1] + a[k / 2]) / 2; }
`;

// ===================== AULA 1: ramos e folhas =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 99', h1: 'Diagrama de ramos e folhas: <span style="color:var(--primary);">organizar sem perder nenhum dado</span>',
  sub: 'Em vez de agrupar em classes e esconder os valores, o diagrama de ramos e folhas organiza o rol de forma compacta mantendo cada dado visível — e mostra de relance moda, mediana e amplitude.',
  badges: [['ramo = dezenas'], ['folha = unidades', 'growth'], ['mantém os dados', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do rol ao diagrama.', [
  ['A ideia de Tukey', 'tronco, ramos e folhas', 'bulb'],
  ['Construção', 'ramo à esquerda, folhas à direita', 'target'],
  ['Leitura', 'moda, mediana e amplitude', 'chart'],
  ['Legenda', 'como interpretar cada linha', 'link'],
  ['Ramos divididos', 'quando há muitos dados por dezena', 'scale']
]));
a.push(objetivosSlide([
  'Construir um <strong>diagrama de ramos e folhas</strong> a partir de dados quantitativos.',
  'Ler dele a <strong>moda</strong>, a <strong>mediana</strong> e a <strong>amplitude</strong>.',
  'Usar a <strong>legenda</strong> para interpretar os valores.',
  'Reconhecer quando usar <strong>ramos divididos</strong> (* e ·).'
], 'Dica', 'No ramo vão os algarismos das <strong>dezenas</strong> (ou centenas e dezenas); nas folhas, o das <strong>unidades</strong>, <strong>em ordem crescente</strong>. Sempre inclua uma <strong>legenda</strong>: “6 | 3 = 63”.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Organizar as idades de toda a escola', `
          ${lede('A turma recebe a missão de organizar as <strong>idades</strong> dos estudantes de toda a escola: aparecem centenas de números. Como organizar de modo que se veja <strong>quais idades aparecem mais</strong>, as menores e as maiores, <strong>sem apagar nem agrupar</strong> nenhum valor? O estatístico John Tukey propôs um modo: o <strong>diagrama de ramos e folhas</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${ramos(notas, 'Legenda: 6 | 3 significa 63 pontos.')}
            ${mini('No diagrama, a linha “6 | 1 3 3 3 7” representa:', ['os números 6, 1, 3, 3, 3 e 7', 'as notas 61, 63, 63, 63 e 67', 'a soma 6 + 1 + 3 + 3 + 3 + 7', 'a mediana 63'], 1, 'O <strong>ramo</strong> $6$ são as dezenas; as <strong>folhas</strong> são as unidades: $61, 63, 63, 63, 67$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · como construir', 'Quatro passos', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> Identifique o <strong>menor</strong> e o <strong>maior</strong> valor para saber os ramos necessários.</li>
                <li><strong>2.</strong> Escreva os ramos (dezenas) em coluna, à esquerda de uma linha vertical.</li>
                <li><strong>3.</strong> Escreva as folhas (unidades) de cada dado à direita, <strong>em ordem crescente</strong>.</li>
                <li><strong>4.</strong> Acrescente a <strong>legenda</strong>.</li>
                <li>Leitura: <strong>moda</strong> = folha mais repetida; <strong>mediana</strong> = valor central contando as folhas; <strong>amplitude</strong> = maior − menor.</li>
              </ul>
            </div>
            ${W.box('Gere o diagrama', '<div><label>Dados inteiros (separe por ponto e vírgula)</label><input type="text" id="r1-d" value="49; 52; 55; 55; 58; 61; 63; 63; 63; 67; 70; 72; 75; 81; 94" inputmode="decimal"></div>' + W.txt('r1-t', 'Diagrama: ') + W.txt('r1-m', 'Mediana, moda e amplitude: ') + W.hint('r1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Notas de 15 estudantes', 'As notas de 15 estudantes foram: 49, 52, 55, 55, 58, 61, 63, 63, 63, 67, 70, 72, 75, 81 e 94. Construa o diagrama e leia mediana, moda e amplitude.', [
  ['Ramos', 'Menor: $49$; maior: $94$ ⇒ ramos de $4$ a $9$.'],
  ['Diagrama', '4 | 9 · 5 | 2 5 5 8 · 6 | 1 3 3 3 7 · 7 | 0 2 5 · 8 | 1 · 9 | 4.'],
  ['Leituras', 'Moda: <strong>63</strong> (folha 3 repetida 3 vezes). Mediana: 15 dados, o 8º é <strong>63</strong>. Amplitude: $94 − 49 = 45$.']
], 'Mediana $63$, moda $63$ e amplitude $45$.'));
a.push(sl('Figura', 'As alturas de 20 estudantes', `
          <div class="grid2">
            ${ramos(alturas.map(v => v - 100), 'Legenda: 6 | 3 significa 163 cm (centena 1 omitida).')}
            <div>
              ${callout('Ramo com dezenas, folhas com unidades', 'Para alturas como 163 cm, o <strong>ramo</strong> é $16$ (centenas e dezenas); como no diagrama ao lado usamos os valores menos $100$, o ramo mostra apenas a dezena: $6$.', 'success')}
              ${callout('Forma', 'A “tabela deitada” lembra um histograma: o comprimento de cada linha mostra a <strong>quantidade</strong> de dados da faixa.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Lendo o diagrama das alturas', 'Com 20 alturas (cm): 155, 158, 160, 162, 163, 163, 165, 167, 167, 168, 170, 171, 172, 172, 174, 176, 178, 180, 183, 189. Qual a mediana e que percentual tem 170 cm ou mais?', [
  ['Mediana', '$n = 20$: 10º e 11º dados: $168$ e $170$ ⇒ mediana $= (168 + 170) ÷ 2 = 169$ cm.'],
  ['170 ou mais', 'Dados de $170$ em diante: $170, 171, 172, 172, 174, 176, 178, 180, 183, 189$ ⇒ $10$ estudantes.'],
  ['Percentual', '$10 ÷ 20 = 50%$.']
], 'Mediana <strong>169 cm</strong>; <strong>50%</strong> têm 170 cm ou mais.', 'growth'));

a.push(pratique('Mediana no diagrama', 'No diagrama das 15 notas (4|9 · 5|2 5 5 8 · 6|1 3 3 3 7 · 7|0 2 5 · 8|1 · 9|4), a mediana é:',
  ['55', '61', '63', '67', '70'], 2,
  '$n = 15$: o 8º dado. Contando as folhas: 49, 52, 55, 55, 58, 61, 63, <strong>63</strong> (8º). Mediana $63$. <strong>Alternativa C.</strong>'));
a.push(pratique('Moda e amplitude', 'No mesmo diagrama, a moda e a amplitude são, respectivamente:',
  ['55 e 94', '63 e 45', '63 e 94', '55 e 45', '61 e 49'], 1,
  'Moda: $63$ (aparece 3 vezes). Amplitude: $94 − 49 = 45$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Quantos estudantes?', 'No diagrama das notas (4|9 · 5|2 5 5 8 · 6|1 3 3 3 7 · 7|0 2 5 · 8|1 · 9|4), quantos estudantes tiraram nota <strong>63 ou mais</strong>?',
  ['5', '7', '9', '10', '15'], 2,
  'Notas $≥ 63$: $63, 63, 63, 67, 70, 72, 75, 81, 94$ ⇒ <strong>9</strong> estudantes. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o diagrama engana', [
  ['Folhas fora de ordem', 'Em cada ramo, as folhas devem estar em <strong>ordem crescente</strong>.'],
  ['Esquecer a legenda', 'Sem “6 | 3 = 63” não se sabe se o ramo é dezena ou centena.'],
  ['Folhas repetidas omitidas', 'Cada dado vira uma folha: valores repetidos aparecem <strong>repetidos</strong>.'],
  ['Ramo gigante', 'Quando há muitos dados em um ramo, divida-o em dois (* para folhas 0–4, · para 5–9).']
]));
a.push(quiz([
  { q: 'Na linha “7 | 0 2 5”, os dados são:', o: ['7, 0, 2, 5', '70, 72, 75', '702 e 5', '7 + 0 + 2 + 5'], a: 1 },
  { q: 'A moda no diagrama é:', o: ['o maior ramo', 'a folha mais repetida (com seu ramo)', 'a primeira folha', 'a soma das folhas'], a: 1 },
  { q: 'Dados de 49 a 94: a amplitude é:', o: ['45', '49', '94', '143'], a: 0 },
  { q: 'O diagrama de ramos e folhas:', o: ['esconde os dados', 'mantém todos os dados visíveis', 'só serve para qualitativos', 'precisa de classes'], a: 1 }
]));
a.push(fechamento([
  ['Estrutura', 'Ramo: dezenas · Folha: unidades · Legenda.'],
  ['Leituras', 'Moda, mediana e amplitude.'],
  ['Vantagem', 'Organiza sem perder dados.']
], 'Ordene as folhas, conte e leia: o diagrama conta tudo.'));

pages.push({ out: BASE + 'aula-1-ramos-e-folhas.html', html: K.deck({
  title: 'Diagrama de ramos e folhas — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 99 · Ramos e folhas', slides: a,
  extra: WJS + BIND + RJS + String.raw`
  bind(['r1-d'], function(){ var d = lista($('r1-d').value); if(d.length < 2 || !d.every(function(v){ return isFinite(v) && v >= 0 && Math.round(v) === v; }) || d.length > 120){ $('r1-t').textContent = 'informe de 2 a 120 inteiros não negativos'; $('r1-m').textContent = ''; return; }
    var s = d.slice().sort(function(a, b){ return a - b; }), g = {}; s.forEach(function(v){ var r = Math.floor(v / 10); (g[r] = g[r] || []).push(v % 10); });
    var lin = Object.keys(g).map(Number).sort(function(a, b){ return a - b; }).map(function(r){ return r + ' | ' + g[r].join(' '); }); $('r1-t').textContent = lin.join('  ·  ');
    var f = {}; s.forEach(function(v){ f[v] = (f[v] || 0) + 1; }); var mf = Math.max.apply(null, Object.keys(f).map(function(k){ return f[k]; })), moda = mf === 1 ? 'não há moda' : Object.keys(f).filter(function(k){ return f[k] === mf; }).join(' e ');
    $('r1-m').textContent = 'mediana ' + pt(med(s)) + ' · moda ' + moda + ' · amplitude ' + pt(s[s.length - 1] - s[0]); $('r1-h').textContent = 'Legenda: ramo | folha ⇒ ramo × 10 + folha. ' + s.length + ' dados.'; });`
}) });

// ===================== AULA 2: conversão e escolha =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 98 e 100', h1: 'Converter e escolher gráficos: <span style="color:var(--growth);">o gráfico certo para a história certa</span>',
  sub: 'A mesma informação pode aparecer em barras, setores ou linhas. O que muda é o que cada gráfico deixa ver com facilidade. Saber converter e escolher é a última etapa da Estatística do 1º ano.',
  badges: [['mesmos dados'], ['objetivo → gráfico', 'growth'], ['3 perguntas', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do dado ao gráfico adequado.', [
  ['Construir', 'tabela → gráfico com eixos, título e escala', 'bulb'],
  ['Converter', 'de um gráfico para outro, sem mudar a informação', 'chart'],
  ['O que muda', 'o que cada gráfico destaca', 'target'],
  ['Três perguntas', 'o que mostrar? que dados? quantas categorias?', 'link'],
  ['Mapa de escolha', 'linhas, barras, setores, histograma, box-plot, ramos e folhas', 'scale']
]));
b.push(objetivosSlide([
  '<strong>Construir</strong> gráficos a partir de tabelas, com título, eixos, legenda e escala.',
  '<strong>Converter</strong> um gráfico em outro mantendo categorias e quantidades.',
  'Dizer o que cada gráfico <strong>destaca</strong> (comparação, parte do todo, tendência, resumo).',
  '<strong>Escolher</strong> o gráfico mais adequado ao objetivo e ao tipo de dado.'
], 'Dica', 'Faça três perguntas antes de desenhar: <strong>1)</strong> O que quero mostrar? <strong>2)</strong> Que tipo de dado tenho? <strong>3)</strong> Quantas categorias ou períodos?', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Lista ou imagem?', `
          ${lede('Duas pessoas precisam contar como foi o movimento de uma loja durante a semana: uma usa uma <strong>lista</strong> organizada; a outra, um <strong>gráfico</strong>. Qual ajuda a entender mais rápido? Depende do que se quer destacar. A <strong>forma</strong> de apresentar facilita alguns aspectos e dificulta outros.')}
          <div class="grid2" style="margin-top:6px;">
            ${barras({ cats: ['A pé', 'Bicicleta', 'Ônibus', 'Carro', 'Moto'], vals: [40, 20, 80, 40, 20], max: 100, passo: 20, maxw: '340px' })}
            ${setores({ fatias: [['A pé', 40], ['Bicicleta', 20], ['Ônibus', 80], ['Carro', 40], ['Moto', 20]], maxw: '400px' })}
          </div>
          <p class="hint" style="margin-top:6px;">Os dois gráficos mostram os mesmos 200 estudantes e seus meios de transporte.</p>`, { cls: 'growth' }));

b.push(sl('Teoria · o que cada gráfico mostra', 'Mapa de escolha', `
          <div class="grid2">
            <div>
              ${tbl(['Para mostrar…', 'Use'], [['evolução no tempo', 'gráfico de linhas'], ['comparar categorias', 'gráfico de barras'], ['partes de um todo (100%)', 'gráfico de setores'], ['dados numéricos em faixas contínuas', 'histograma'], ['resumo (5 números) e valores discrepantes', 'box-plot'], ['formato do grupo mantendo os dados', 'ramos e folhas']])}
            </div>
            ${W.box('Qual gráfico usar?', W.sel('g1-q', 'O que eu quero mostrar', ['como as vendas mudaram mês a mês', 'qual bebida vendeu mais', 'a fatia de cada forma de pagamento no total', 'quantos clientes gastaram entre 0–10, 10–20, 20–30 reais', 'se algum dia teve gasto anormalmente alto', 'as idades dos clientes sem perder cada valor'], 0) + W.txt('g1-t', 'Gráfico indicado: ') + W.txt('g1-m', 'Por quê: ') + W.hint('g1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · converter tabela em gráficos', 'Os mesmos dados em barras e em setores', `
          <div class="grid2">
            ${W.box('Quatro categorias', W.row(W.nm('k1-a', 'A pé', 40, 'any'), W.nm('k1-b', 'Bicicleta', 20, 'any')) + W.row(W.nm('k1-c', 'Ônibus', 80, 'any'), W.nm('k1-d', 'Carro', 40, 'any')) + W.txt('k1-t', 'Percentuais e ângulos: ') + W.hint('k1-h'))}
            <div>
              ${W.svg('k1-s1', '0 0 360 170', '380px')}
              ${W.svg('k1-s2', '0 0 360 170', '380px')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'De barras para setores', 'Um gráfico de barras mostra o transporte de 200 estudantes: a pé 40, bicicleta 20, ônibus 80, carro 40, moto 20. Converta para um gráfico de setores.', [
  ['O que se mantém', 'As <strong>categorias</strong> e as <strong>quantidades</strong> (total 200).'],
  ['Percentuais', '$40 ÷ 200 = 20%$ · $20 ÷ 200 = 10%$ · $80 ÷ 200 = 40%$ · carro $20%$ · moto $10%$.'],
  ['Ângulos', '$0,20 · 360° = 72°$ · $36°$ · $144°$ · $72°$ · $36°$ (soma $360°$).']
], 'Setores: a pé 72°, bicicleta 36°, ônibus 144°, carro 72°, moto 36°.'));
b.push(exemplo('Exemplo resolvido', 'Qual gráfico para a série mensal?', 'Usuários ativos de um aplicativo (mil): Jan 120, Fev 135, Mar 150, Abr 162, Mai 158, Jun 145. Qual gráfico mostra melhor a alta e a posterior queda?', [
  ['Tipo de dado e objetivo', 'Série <strong>temporal</strong>; o objetivo é a <strong>tendência</strong>.'],
  ['Gráfico adequado', '<strong>Linhas</strong>: a inclinação dos segmentos mostra a subida (jan–abr) e a queda (mai–jun).'],
  ['Por que não setores', 'Setores mostram partes de um todo e <strong>não</strong> a ordem cronológica.']
], 'Gráfico de linhas.', 'growth'));

b.push(pratique('Percentual convertido', 'Na pesquisa dos 200 estudantes, 80 vão de ônibus. No gráfico de setores, o ônibus ocupa:',
  ['20%', '30%', '40%', '50%', '80%'], 2,
  '$80 ÷ 200 = 0,40 = 40%$ (e $144°$). <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Escolha do gráfico', 'Para mostrar a variação mensal do número de usuários de um aplicativo ao longo de um semestre, o mais adequado é:',
  ['gráfico de setores', 'gráfico de linhas', 'diagrama de ramos e folhas', 'histograma', 'tabela de dupla entrada'], 1,
  'Série temporal: <strong>gráfico de linhas</strong>. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Gasto fora do comum', 'O dono de uma cafeteria quer identificar rapidamente o resumo dos gastos dos clientes e se algum teve gasto anormalmente alto. O gráfico mais adequado é:',
  ['gráfico de setores', 'gráfico de linhas', 'pictograma', 'box-plot', 'gráfico de barras'], 3,
  'O <strong>box-plot</strong> resume (mín, Q1, mediana, Q3, máx) e destaca <strong>outliers</strong>. <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a escolha e a conversão enganam', [
  ['Mudar os dados ao converter', 'Categorias e quantidades <strong>devem</strong> permanecer iguais nos dois gráficos.'],
  ['Pizza para série temporal', 'Setores não mostram evolução no tempo.'],
  ['Barras para dados contínuos agrupados', 'Dados numéricos em faixas pedem <strong>histograma</strong> (barras coladas).'],
  ['Eixos sem título ou escala', 'Sem título, eixos e legenda, o gráfico não se interpreta.']
]));
b.push(quiz([
  { q: 'Para evolução no tempo, use:', o: ['setores', 'linhas', 'ramos e folhas', 'box-plot'], a: 1 },
  { q: 'Para partes de um todo, use:', o: ['linhas', 'barras', 'setores', 'histograma'], a: 2 },
  { q: 'Para destacar outliers e resumo de 5 números:', o: ['pictograma', 'box-plot', 'setores', 'linhas'], a: 1 },
  { q: 'Ao converter barras em setores, o que não pode mudar?', o: ['as cores', 'as categorias e quantidades', 'o título', 'o tamanho'], a: 1 }
]));
b.push(fechamento([
  ['Construir', 'Título, eixos, legenda e escala.'],
  ['Converter', 'Mesmas categorias e quantidades; muda o que se destaca.'],
  ['Escolher', 'Objetivo, tipo de dado e número de categorias.']
], 'O gráfico certo conta a história certa.'));

pages.push({ out: BASE + 'aula-2-conversao-e-escolha-de-graficos.html', html: K.deck({
  title: 'Conversão e escolha de gráficos — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 98 e 100 · Conversão e escolha', slides: b,
  extra: WJS + BIND + RJS + String.raw`
  var GR = [['gráfico de linhas', 'Série temporal: a inclinação dos segmentos mostra aumento e queda.'], ['gráfico de barras', 'Compara categorias separadas lado a lado.'], ['gráfico de setores', 'Mostra a parte de cada categoria no todo (100%).'], ['histograma', 'Dados numéricos agrupados em faixas contínuas.'], ['box-plot', 'Resume em 5 números e destaca valores fora da curva.'], ['diagrama de ramos e folhas', 'Mostra a forma do grupo mantendo cada valor.']];
  function escolha(){ var k = +$('g1-q').value; $('g1-t').textContent = GR[k][0]; $('g1-m').textContent = GR[k][1]; $('g1-h').textContent = 'Pergunte: o que mostrar? que dados? quantas categorias?'; } $('g1-q').addEventListener('change', escolha); escolha();
  var COR = ['var(--primary)', 'var(--growth)', 'var(--decay)', 'var(--success)'];
  bind(['k1-a', 'k1-b', 'k1-c', 'k1-d'], function(){ var v = [+$('k1-a').value, +$('k1-b').value, +$('k1-c').value, +$('k1-d').value], tot = v.reduce(function(p, q){ return p + q; }, 0), s1 = $('k1-s1'), s2 = $('k1-s2'); s1.innerHTML = ''; s2.innerHTML = '';
    if(!v.every(isFinite) || v.some(function(x){ return x < 0; }) || tot <= 0){ $('k1-t').textContent = '—'; return; }
    var m = Math.max.apply(null, v), nm = ['A pé', 'Bicicleta', 'Ônibus', 'Carro'], bw = 50, L = 30, gap = (360 - L - 10) / 4; el('line', {x1: L, y1: 140, x2: 350, y2: 140, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s1);
    v.forEach(function(x, i){ var h = x / m * 105, X = L + gap * i + (gap - bw) / 2; el('rect', {x: X, y: 140 - h, width: bw, height: h, fill: COR[i], rx: 3}, s1); var t = el('text', {x: X + bw / 2, y: 156, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: 'var(--ink)'}, s1); t.textContent = nm[i]; var t2 = el('text', {x: X + bw / 2, y: 140 - h - 4, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--ink)'}, s1); t2.textContent = pt(x); });
    var cx = 80, cy = 85, r = 65, ang = -Math.PI / 2; v.forEach(function(x, i){ if(x <= 0) return; var a2 = ang + x / tot * 2 * Math.PI, large = a2 - ang > Math.PI ? 1 : 0, p1 = [cx + r * Math.cos(ang), cy + r * Math.sin(ang)], p2 = [cx + r * Math.cos(a2), cy + r * Math.sin(a2)]; el('path', {d: 'M' + cx + ',' + cy + ' L' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1) + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1) + ' Z', fill: COR[i], stroke: 'var(--surface)', 'stroke-width': 2}, s2); ang = a2; });
    nm.forEach(function(n, i){ el('rect', {x: 180, y: 40 + i * 24, width: 12, height: 12, fill: COR[i], rx: 2}, s2); var t = el('text', {x: 198, y: 51 + i * 24, 'font-size': 12, 'font-weight': 700, fill: 'var(--ink)'}, s2); t.textContent = n + ' ' + pt(v[i] / tot * 100, 1) + '%'; });
    $('k1-t').textContent = nm.map(function(n, i){ return n + ': ' + pt(v[i] / tot * 100, 1) + '% (' + pt(v[i] / tot * 360, 1) + '°)'; }).join(' · '); $('k1-h').textContent = 'As categorias e as quantidades são as mesmas nos dois gráficos; o que muda é o que cada um destaca.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Ramos e folhas e escolha de gráficos: <span>o fechamento da Estatística</span>',
  lede: 'Como organizar dados em ramos e folhas e como escolher, construir e converter gráficos de acordo com o objetivo e o tipo de dado.',
  badges: ['ramo | folha', 'mesmos dados, outro gráfico', 'objetivo → tipo'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Ramos e folhas', 'Sem perder dados', 'chart', 'primary', p('Ramo: dezenas · folhas: unidades · legenda.') + call('Exemplo', '6 | 1 3 3 3 7 = 61, 63, 63, 63, 67.', 'success')],
    ['Leituras', 'No diagrama', 'target', 'growth', li(['Moda: folha mais repetida.', 'Mediana: valor central.', 'Amplitude: maior − menor.'])],
    ['Converter', 'Mantendo os dados', 'link', 'decay', p('Categorias e quantidades permanecem; muda o destaque.')],
    ['Mapa de escolha', 'Objetivo → gráfico', 'scale', 'success', li(['Tempo: linhas.', 'Categorias: barras.', 'Partes do todo: setores.', 'Faixas contínuas: histograma.', 'Resumo e outliers: box-plot.'])],
    ['Três perguntas', 'Antes de desenhar', 'up', 'primary', li(['O que mostrar?', 'Que tipo de dado?', 'Quantas categorias?'])],
    ['Construção', 'Elementos', 'check', 'growth', li(['Título.', 'Eixos e escala.', 'Legenda.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Folhas fora de ordem.', 'Sem legenda.', 'Mudar dados ao converter.', 'Setores para série temporal.', 'Barras separadas para dados em faixas.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Ramos e folhas e escolha de gráficos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: mediana, moda, conversão, escolha e box-plot.',
  final: 'Leia o diagrama com a legenda e escolha o gráfico pelo objetivo.',
  questions: [
    { badge: 'Estilo ENEM · mediana', text: 'Diagrama de ramos e folhas das notas de 15 estudantes (legenda: 6 | 3 = 63): 4|9; 5|2 5 5 8; 6|1 3 3 3 7; 7|0 2 5; 8|1; 9|4.', cmd: 'A mediana das notas é:', opts: ['55', '61', '63', '67', '70'], a: 2,
      sol: '<p>$n = 15$: o 8º dado é $63$.</p>' },
    { badge: 'Estilo ENEM · moda', text: 'No mesmo diagrama:', cmd: 'A moda e a amplitude são, respectivamente:', opts: ['55 e 94', '63 e 45', '63 e 94', '55 e 45', '61 e 49'], a: 1,
      sol: '<p>Moda $63$ (3 vezes); amplitude $94 − 49 = 45$.</p>' },
    { badge: 'Estilo ENEM · conversão', text: 'Uma pesquisa com 200 estudantes mostra que 80 vão de ônibus. Um gráfico de barras será convertido em gráfico de setores.', cmd: 'O setor correspondente ao ônibus mede:', opts: ['36°', '72°', '108°', '144°', '180°'], a: 3,
      sol: '<p>$80 ÷ 200 = 40%$; $0,40 · 360° = 144°$.</p>' },
    { badge: 'Estilo ENEM · escolha', text: 'A diretoria quer entender rapidamente a trajetória de um aplicativo ao longo de seis meses: alta inicial e queda posterior.', cmd: 'O gráfico mais adequado é:', opts: ['de setores', 'de linhas', 'de ramos e folhas', 'histograma', 'box-plot'], a: 1,
      sol: '<p>Série temporal: gráfico de linhas.</p>' },
    { badge: 'Estilo ENEM · box-plot', text: 'Um dono de cafeteria quer resumir os gastos dos clientes e identificar algum gasto anormalmente alto.', cmd: 'O gráfico mais indicado é:', opts: ['de setores', 'de linhas', 'pictograma', 'box-plot', 'de barras'], a: 3,
      sol: '<p>Box-plot: resumo e valores discrepantes.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">gráfico</span> usar?',
  subtitle: 'Para cada objetivo, escolha o gráfico mais adequado.',
  tpl: cClassificar({
    cats: ['linhas', 'barras', 'setores', 'histograma', 'box-plot', 'ramos e folhas'],
    intro: 'Cada cartão descreve o que se quer mostrar. Escolha o gráfico mais adequado e clique em <strong>Conferir</strong>.',
    final: 'Tempo: linhas · categorias: barras · partes do todo: setores · faixas: histograma · resumo e outliers: box-plot · valores originais: ramos e folhas.',
    itens: [
      ['Vendas de uma loja mês a mês durante um ano', 0, 'Evolução no tempo.'],
      ['Qual bebida vendeu mais: café, cappuccino ou espresso?', 1, 'Comparação entre categorias.'],
      ['Porcentagem de clientes que pagam com pix, cartão ou dinheiro', 2, 'Partes de um todo.'],
      ['Quantos clientes gastaram entre 0–10, 10–20 e 20–30 reais', 3, 'Dados numéricos em faixas contínuas.'],
      ['Identificar se algum dia teve gasto anormalmente alto', 4, 'Resumo e valores discrepantes.'],
      ['Idades dos clientes mantendo o registro exato de cada uma', 5, 'Formato do grupo sem perder valores.'],
      ['Temperatura medida a cada hora ao longo de um dia', 0, 'Série temporal.'],
      ['Quantidade de alunos por turma (A, B, C, D)', 1, 'Categorias separadas.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Ramos e folhas e escolha de gráficos: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de leitura e conversão. Digite o número pedido.',
  final: 'Você percorreu a trilha: mediana, moda, amplitude, percentual e ângulo.',
  problems: [
    { tag: 'Mediana', q: 'Notas: 49, 52, 55, 55, 58, 61, 63, 63, 63, 67, 70, 72, 75, 81, 94. Qual a mediana?', a: 63, ph: 'mediana', hint: 'O 8º dado.', sol: '<p>$63$.</p>' },
    { tag: 'Moda', q: 'Qual a moda dessas notas?', a: 63, ph: 'moda', hint: 'O que mais aparece.', sol: '<p>$63$.</p>' },
    { tag: 'Amplitude', q: 'Qual a amplitude?', a: 45, ph: 'amplitude', hint: '94 − 49.', sol: '<p>$45$.</p>' },
    { tag: 'Percentual', q: 'Em 200 estudantes, 80 vão de ônibus. Qual o percentual (%)?', a: 40, ph: '%', hint: '80 ÷ 200.', sol: '<p>$40%$.</p>' },
    { tag: 'Ângulo', q: 'Qual o ângulo (graus) do setor do ônibus no gráfico de setores?', a: 144, ph: 'graus', hint: '0,40 · 360.', sol: '<p>$144°$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Ramos e Folhas e Escolha de Gráficos', accent: 'primary', icon: 'candles',
  aulas: [['Aula 99', 'Diagrama de ramos e folhas', 'aula-1-ramos-e-folhas.html'], ['Aulas 98 e 100', 'Conversão e escolha de gráficos', 'aula-2-conversao-e-escolha-de-graficos.html']],
  enem: 'Ramos e folhas e escolha de gráficos no estilo ENEM', cria: 'Qual gráfico usar?', pratica: 'Ramos e folhas e escolha de gráficos: trilha de desafios'
}, pages };
