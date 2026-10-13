// Unidade v09 — Interpretação de tabelas e gráficos: leitura crítica de dados (aula 20 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF, svg, rect, txu, ln } = K;
const { setores, linhas } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'tabelas-e-graficos', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v09', BRAND = 'Interpretação de Tabelas e Gráficos', CAP = 'Aula 20';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// duas barras (95 e 100): eixo truncado × eixo a partir de zero
function duasBarras(min, w = 170, h = 150) {
  const L = 30, B = 24, T = 12, vals = [95, 100], top = 105, Y = v => +(h - B - (v - min) / (top - min) * (h - T - B)).toFixed(1);
  let s = ln(L, Y(min), w - 8, Y(min), 'var(--ink-soft)', 1.6);
  [min, Math.round((min + top) / 2 / 5) * 5, 100].forEach(v => { s += ln(L, Y(v), w - 8, Y(v), 'var(--line)', 1) + txu(L - 4, Y(v) + 4, String(v), 'var(--ink-faint)', 10, 'end'); });
  vals.forEach((v, i) => { const x = L + 22 + i * 62; s += rect(x, Y(v), 40, Y(min) - Y(v), i ? 'var(--growth)' : 'var(--primary)', 'none', 0, 2) + txu(x + 20, Y(v) - 4, String(v), 'var(--ink)', 11) + txu(x + 20, Y(min) + 15, i ? '2025' : '2024', 'var(--ink)', 11); });
  return svg(w, h, s, w + 'px');
}

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 20', h1: 'Tabelas e gráficos: <span style="color:var(--primary);">leia com desconfiança saudável</span>',
  sub: 'A trend “mostre o quão alto você é” engana com escalas. Gráficos e tabelas também podem confundir (ou manipular) opiniões, sem ser tão óbvio. Veja os cuidados de leitura.',
  badges: [['amostra ou censo?'], ['conferir as contas', 'growth'], ['escalas e tipo de gráfico', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Perguntas antes de acreditar.', [
  ['Quem foi pesquisado', 'população ou amostra', 'bulb'],
  ['A amostra serve', 'tamanho e aleatoriedade', 'target'],
  ['Margem de erro', 'diferenças pequenas não valem', 'chart'],
  ['As contas fecham', 'somas e percentuais', 'link'],
  ['A escala engana', 'eixos e tipo de gráfico', 'scale']
]));
a.push(objetivosSlide([
  'Verificar se uma pesquisa é <strong>populacional ou amostral</strong> e se a amostra é <strong>suficiente e aleatória</strong>.',
  'Interpretar <strong>margem de erro</strong> e <strong>nível de confiança</strong> ($≈ 1 ÷ √n$).',
  '<strong>Conferir cálculos</strong>: partes que somam o total; percentuais que somam 100% (exceto resposta múltipla).',
  'Escolher o <strong>gráfico adequado</strong> e reconhecer <strong>escalas enganosas</strong>.'
], 'Dica', 'Ao ver um gráfico, olhe <strong>primeiro</strong> o eixo (onde começa? qual a unidade?), depois a fonte, depois os números.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A ilusão da escala', `
          ${lede('Em 2024 uma empresa vendeu <strong>95</strong> mil unidades e em 2025, <strong>100</strong> mil. O mesmo dado em dois gráficos: no da <strong>esquerda</strong>, o eixo começa em 90; no da <strong>direita</strong>, em 0.')}
          <div class="grid2" style="margin-top:6px;">
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">${duasBarras(90)}${duasBarras(0)}</div>
            ${mini('No gráfico da esquerda (eixo a partir de 90), a barra de 2025 parece quantas vezes a de 2024?', ['1,05 vez', '2 vezes', '5 vezes', '10 vezes'], 1, 'Alturas visíveis: $100 − 90 = 10$ e $95 − 90 = 5$: parece o <strong>dobro</strong>, mas o aumento real é só $100 ÷ 95 ≈ 5,3\\%$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · leitura crítica', 'O que checar em uma pesquisa', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>É <strong>populacional</strong> ou <strong>amostral</strong>? Se amostral, a amostra é <strong>suficiente</strong> e <strong>aleatória</strong>?</li>
                <li>Há <strong>margem de erro</strong> e <strong>nível de confiança</strong>? Diferenças menores que a margem são <strong>empate técnico</strong>.</li>
                <li>Os <strong>cálculos conferem</strong>? Partes somam o total; percentuais de variável de resposta única somam 100%.</li>
                <li>Perguntas de <strong>múltipla resposta</strong> podem somar mais de 100%.</li>
                <li><strong>Gráfico:</strong> setores para partes de um todo; linhas para evolução no tempo; barras para comparar categorias; eixos com escala honesta.</li>
              </ul>
            </div>
            ${W.box('Escala enganosa', W.row(W.nm('ge-a', 'valor A', 95, 'any'), W.nm('ge-b', 'valor B', 100, 'any'), W.nm('ge-m', 'início do eixo', 90, 'any')) + W.txt('ge-v', 'B parece quantas vezes A: ') + W.txt('ge-r', 'B é, de fato, quantas vezes A: ') + W.hint('ge-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Escolhendo o gráfico', `
          <div class="grid2">
            <div>${setores({ fatias: [['Ônibus', 45], ['Carro', 30], ['A pé', 25]], w: 200, h: 150 })}<p class="hint" style="margin-top:4px;">Partes de um todo: setores.</p></div>
            <div>${linhas({ xs: ['Jan', 'Fev', 'Mar', 'Abr'], ys: [22, 24, 27, 26], w: 260, h: 160, max: 30, passo: 5 })}<p class="hint" style="margin-top:4px;">Evolução no tempo: linhas.</p></div>
          </div>
          ${tbl(['Objetivo', 'Gráfico'], [['partes de um todo (soma 100%)', 'setores (pizza)'], ['comparar categorias', 'barras ou colunas'], ['evolução no tempo', 'linhas']])}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Eixo truncado', 'As vendas passaram de 95 para 100 (mil). Em um gráfico com eixo iniciando em 90, quantas vezes a barra de 2025 parece maior que a de 2024? E qual o aumento real?', [
  ['Alturas visíveis', '$100 − 90 = 10$ e $95 − 90 = 5$: razão visual $2$.'],
  ['Aumento real', '$100 ÷ 95 ≈ 1,053$ ⇒ cerca de $5,3\\%$.']
], 'Parece <strong>2 vezes</strong>, mas o aumento é de apenas <strong>5,3%</strong>.'));
a.push(exemplo('Exemplo resolvido', 'Percentuais que somam mais de 100%', 'Em uma pesquisa, 60% dos entrevistados disseram usar ônibus, 50% bicicleta e 20% carro. A soma é 130%. Há erro?', [
  ['Pergunta', 'Se cada pessoa podia marcar <strong>mais de uma</strong> opção, os percentuais não precisam somar 100%.'],
  ['Se fosse resposta única', 'Somar 130% indicaria erro.']
], 'Não há erro se a pergunta permitia <strong>múltipla resposta</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Empate técnico', 'Uma pesquisa com 1 000 eleitores dá 52% ao candidato A e 48% ao B, com margem de erro de cerca de 3 pontos. Quem está na frente?', [
  ['Intervalos', 'A: $49\\%$ a $55\\%$. B: $45\\%$ a $51\\%$.'],
  ['Sobreposição', 'Os intervalos se cruzam (entre 49% e 51%).']
], '<strong>Empate técnico</strong>: a diferença (4 pontos) é menor que o dobro da margem (6).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Conferindo uma tabela', 'Uma tabela mostra 120 alunos no turno da manhã, 80 à tarde e 50 à noite, e “Total: 260”. Os dados conferem?', [
  ['Soma', '$120 + 80 + 50 = 250$.'],
  ['Comparação', '$250 ≠ 260$.']
], 'Não conferem: há uma <strong>inconsistência</strong> de 10 alunos.', 'growth'));

a.push(pratique('Eixo truncado', 'Dois valores, 95 e 100, são mostrados em barras com eixo iniciando em 90. A barra do 100 parece quantas vezes a do 95?',
  ['1,05', '1,5', '2', '5', '10'], 2,
  '$10 ÷ 5 = 2$. <strong>Alternativa C.</strong>'));
a.push(pratique('Empate técnico', 'Candidato A: 52%; B: 48%; margem de erro de 3 pontos. Pode-se afirmar que:',
  ['A venceu com certeza', 'B venceu com certeza', 'há empate técnico', 'a pesquisa é censitária', 'a margem não importa'], 2,
  'A diferença (4) é menor que o dobro da margem (6). <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Que gráfico usar', 'Para mostrar a evolução mensal da temperatura média de uma cidade ao longo de um ano, o gráfico mais adequado é o de:',
  ['setores', 'linhas', 'pictograma de pizza', 'colunas com eixo truncado', 'rosca'], 1,
  'Evolução no tempo: gráfico de linhas. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde tabelas e gráficos enganam', [
  ['Eixo que não começa em zero', 'Exagera diferenças pequenas (barras) — olhe o eixo.'],
  ['Setores que não somam 100%', 'Partes de um todo devem somar 100%.'],
  ['Ignorar a margem de erro', 'Diferença menor que a margem não é diferença.'],
  ['Amostra por voluntários', 'Enquetes de redes sociais não são aleatórias.']
]));
a.push(quiz([
  { q: 'Em perguntas de resposta única, os percentuais devem somar:', o: ['100%', '50%', '200%', 'qualquer valor'], a: 0 },
  { q: 'Para partes de um todo, usa-se, em geral:', o: ['linhas', 'setores', 'dispersão', 'caixa'], a: 1 },
  { q: 'Eixo de barras começando em valor alto:', o: ['é sempre correto', 'pode exagerar diferenças', 'reduz diferenças', 'não altera nada'], a: 1 },
  { q: 'Margem de erro de 3 pontos e diferença de 2 pontos entre candidatos:', o: ['há vencedor claro', 'há empate técnico', 'a pesquisa é inválida', 'o líder é o menor'], a: 1 }
]));
a.push(fechamento([
  ['Origem', 'População, amostra, aleatoriedade e margem de erro.'],
  ['Contas', 'Somas e percentuais devem fechar.'],
  ['Visual', 'Tipo de gráfico e escala dos eixos.']
], 'Eixo, fonte e contas: três checagens antes de acreditar em um gráfico.'));

pages.push({ out: BASE + 'aula-1-leitura-critica-de-tabelas-e-graficos.html', html: K.deck({
  title: 'Interpretação de tabelas e gráficos — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 20 · Leitura crítica de tabelas e gráficos', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['ge-a', 'ge-b', 'ge-m'], function(){ var A = +$('ge-a').value, B = +$('ge-b').value, m = +$('ge-m').value;
    if(![A, B, m].every(isFinite) || A <= m || B <= m || A <= 0){ $('ge-v').textContent = '—'; $('ge-r').textContent = '—'; $('ge-h').textContent = 'Use valores acima do início do eixo.'; return; }
    var vis = (B - m) / (A - m), re = B / A;
    $('ge-v').textContent = pt(vis, 3) + ' vezes'; $('ge-r').textContent = pt(re, 3) + ' vezes (' + pt((re - 1) * 100, 2) + '%)';
    $('ge-h').textContent = vis > re * 1.15 ? 'O eixo truncado (início em ' + pt(m) + ') faz a diferença parecer ' + pt(vis / re, 2) + ' vezes maior que a real.' : 'A escala quase não distorce a comparação.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Tabelas e gráficos: <span>leitura crítica</span>',
  lede: 'Antes de acreditar em um gráfico: a pesquisa é populacional ou amostral? A amostra serve? Há margem de erro? As contas fecham? A escala e o tipo de gráfico são honestos?',
  badges: ['amostra', 'margem de erro', 'escala do eixo'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Origem', 'Quem foi ouvido', 'chart', 'primary', p('Censo ou amostra.') + call('Amostra', 'Suficiente e aleatória?', 'success')],
    ['Margem de erro', 'Empate técnico', 'target', 'growth', p('Diferença menor que 2 margens.') + call('Exemplo', '52% × 48%, margem 3.', 'success')],
    ['Contas', 'Somas e %', 'scale', 'decay', li(['Partes somam o total.', 'Resposta única: 100%.', 'Múltipla: pode passar de 100%.'])],
    ['Escala', 'Eixos', 'link', 'success', p('Eixo truncado exagera diferenças.') + call('Exemplo', '95 × 100: parece o dobro.', 'success')],
    ['Tipo de gráfico', 'Adequação', 'up', 'primary', li(['Setores: partes do todo.', 'Linhas: tempo.', 'Barras: categorias.'])],
    ['Fonte', 'Quem diz', 'check', 'growth', li(['Fonte confiável?', 'Título e unidade claros?', 'Período informado?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Eixo que não começa em zero.', 'Setores que não somam 100%.', 'Ignorar a margem de erro.', 'Enquete de voluntários como pesquisa.', 'Somar respostas múltiplas como se fossem únicas.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Tabelas e gráficos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: eixo truncado, múltipla resposta, empate técnico, tipo de gráfico e tabela inconsistente.',
  final: 'Eixo, fonte e contas: confira antes de acreditar.',
  questions: [
    { badge: 'Estilo ENEM · eixo truncado', text: 'Um gráfico de barras com eixo vertical iniciando em 90 mostra os valores 95 (2024) e 100 (2025).', cmd: 'A barra de 2025 parece quantas vezes a de 2024?', opts: ['1,05', '1,5', '2', '5', '10'], a: 2,
      sol: '<p>$(100 − 90) ÷ (95 − 90) = 2$.</p>' },
    { badge: 'Estilo ENEM · múltipla resposta', text: 'Em uma pesquisa, 60% dizem usar ônibus, 50% bicicleta e 20% carro (soma 130%).', cmd: 'Esses percentuais são coerentes se:', opts: ['cada pessoa marcou uma só opção', 'a pergunta permitia mais de uma resposta', 'a amostra foi censitária', 'a margem de erro é nula', 'nunca são coerentes'], a: 1,
      sol: '<p>Múltipla resposta pode somar mais de 100%.</p>' },
    { badge: 'Estilo ENEM · empate técnico', text: 'Pesquisa: A 52%, B 48%, margem de erro de 3 pontos.', cmd: 'É correto afirmar que:', opts: ['A venceu', 'B venceu', 'há empate técnico', 'a margem de erro é irrelevante', 'a pesquisa é censitária'], a: 2,
      sol: '<p>Intervalos 49–55% e 45–51% se sobrepõem.</p>' },
    { badge: 'Estilo ENEM · tipo de gráfico', text: 'Deseja-se mostrar a variação mensal da temperatura média de uma cidade durante um ano.', cmd: 'O gráfico mais adequado é o de:', opts: ['setores', 'linhas', 'rosca', 'colunas com eixo truncado', 'nenhum'], a: 1,
      sol: '<p>Evolução no tempo: linhas.</p>' },
    { badge: 'Estilo ENEM · tabela', text: 'Uma tabela traz 120, 80 e 50 alunos nos turnos manhã, tarde e noite e “Total: 260”.', cmd: 'A tabela:', opts: ['está correta', 'tem soma 250: inconsistência', 'tem soma 270', 'é censitária', 'é amostral'], a: 1,
      sol: '<p>$120 + 80 + 50 = 250 ≠ 260$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Verdadeiro ou falso: <span style="color:var(--decay);">leitura crítica</span>',
  subtitle: 'Julgue cada afirmação sobre pesquisas, tabelas e gráficos.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Eixos, margem de erro e contas: o trio da leitura crítica.',
    afirmacoes: [
      ['Um gráfico de barras com eixo iniciando em valor alto pode exagerar diferenças.', true, 'Verdadeira: as alturas visíveis deixam de ser proporcionais aos valores.'],
      ['Em pesquisa de resposta única, os percentuais devem somar 100%.', true, 'Verdadeira.'],
      ['Se a diferença entre dois candidatos é menor que a margem de erro, há empate técnico.', true, 'Verdadeira (na prática, menor que o dobro da margem).'],
      ['Uma enquete aberta em rede social é uma amostra aleatória da população.', false, 'Falsa: participam voluntários, não é aleatória.'],
      ['Para a evolução no tempo, o gráfico de setores é o mais adequado.', false, 'Falsa: o de linhas.'],
      ['Toda pesquisa amostral tem margem de erro.', true, 'Verdadeira: é o preço de não consultar todos.'],
      ['Aumentar o tamanho da amostra elimina o viés de uma amostra tendenciosa.', false, 'Falsa: o viés permanece, mesmo com amostra grande.'],
      ['Percentuais de pergunta com várias respostas possíveis podem somar mais de 100%.', true, 'Verdadeira.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Tabelas e gráficos: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: razão visual, aumento real, soma, margem de erro e inconsistência. Digite o número pedido.',
  final: 'Você percorreu a trilha: escalas, percentuais e margem.',
  problems: [
    { tag: 'Razão visual', q: 'Valores 95 e 100 em barras com eixo iniciando em 90: quantas vezes a segunda barra parece a primeira?', a: 2, ph: 'vezes', hint: '10 ÷ 5.', sol: '<p>$2$.</p>' },
    { tag: 'Aumento real', q: 'De 95 para 100, qual o aumento percentual aproximado? (inteiro)', a: 5, ph: '%', hint: '100 ÷ 95 ≈ 1,053.', sol: '<p>$≈ 5\\%$.</p>' },
    { tag: 'Soma', q: 'Percentuais 60%, 50% e 20% de uma pergunta de múltipla resposta: qual a soma?', a: 130, ph: '%', hint: '60 + 50 + 20.', sol: '<p>$130\\%$.</p>' },
    { tag: 'Margem de erro', q: 'Para n = 100, qual a margem de erro aproximada (1 ÷ √n), em pontos?', a: 10, ph: 'pontos', hint: '100 ÷ 10.', sol: '<p>$10$.</p>' },
    { tag: 'Tabela', q: 'Turnos com 120, 80 e 50 alunos: qual a soma correta?', a: 250, ph: 'alunos', hint: '120 + 80 + 50.', sol: '<p>$250$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Interpretação de Tabelas e Gráficos', accent: 'growth', icon: 'bars',
  aulas: [['Aula 20', 'Leitura crítica de tabelas e gráficos', 'aula-1-leitura-critica-de-tabelas-e-graficos.html']],
  enem: 'Tabelas e gráficos no estilo ENEM', cria: 'Verdadeiro ou falso: leitura crítica', pratica: 'Tabelas e gráficos: trilha de desafios'
}, pages };
