// Unidade v07 — População e amostra; pesquisa estatística (aulas 16 e 17 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { setores, barras } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'populacao-e-amostra', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v07', BRAND = 'População e Amostra', CAP = 'Aulas 16 e 17';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 16 e 17', h1: 'População e amostra: <span style="color:var(--primary);">ver o todo por uma parte</span>',
  sub: 'As manchetes anunciam resultados de pesquisas. Mas ninguém consulta todo o país: consulta-se uma parte e conclui-se sobre o todo. Como isso é possível, e quando dá certo?',
  badges: [['população'], ['amostra', 'growth'], ['censo × amostragem', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do todo à parte.', [
  ['População', 'o conjunto estudado', 'bulb'],
  ['Amostra', 'o subconjunto consultado', 'target'],
  ['Censo × amostragem', 'dois modos de pesquisar', 'chart'],
  ['Parâmetro e estatística', 'valor do todo e valor da parte', 'link'],
  ['Estimar', 'da amostra para a população', 'scale']
]));
a.push(objetivosSlide([
  'Distinguir <strong>população</strong>, <strong>unidade estatística</strong> e <strong>amostra</strong>.',
  'Diferenciar a pesquisa <strong>censitária</strong> (populacional) da <strong>amostral</strong> e justificar quando usar cada uma.',
  'Distinguir <strong>parâmetro</strong> (da população) de <strong>estatística</strong> (da amostra).',
  '<strong>Estimar</strong> um percentual da população a partir de uma amostra e reconhecer a <strong>margem de erro</strong>.'
], 'Dica', 'Pergunte sempre: <strong>quem é o “todo” que eu quero conhecer?</strong> Isso é a população. A parte que eu realmente consultei é a amostra.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Quem mora perto de você?', `
          ${lede('Onde você vive? O que as pessoas da sua cidade têm em comum? A <strong>Estatística</strong> parte da observação de <strong>grupos numerosos</strong>, chamados <strong>população</strong> (ou universo estatístico). Cada elemento da população é uma <strong>unidade estatística</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['População', 'Unidade estatística'], [['48 estudantes do 3º ano de uma escola', 'cada estudante'], ['mulheres de uma cidade', 'cada mulher'], ['lâmpadas fabricadas em um mês', 'cada lâmpada']])}
            ${mini('Para saber a opinião dos 1 200 alunos de uma escola, entrevistam-se 100. A <strong>população</strong> é:', ['os 100 entrevistados', 'os 1 200 alunos', 'a escola', 'a opinião'], 1, 'População: todos os 1 200 alunos. Os 100 entrevistados são a <strong>amostra</strong>.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · pesquisa estatística', 'Censo × amostragem', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Pesquisa populacional (censitária):</strong> estuda <strong>todos</strong> os indivíduos. Sem margem de erro, mas pode ser cara e demorada.</li>
                <li><strong>Pesquisa por amostragem:</strong> estuda uma <strong>parte</strong> que representa o todo. É mais rápida e barata, mas tem <strong>margem de erro</strong> e nível de confiança.</li>
                <li><strong>Parâmetro:</strong> característica da <strong>população</strong> que se quer conhecer. <strong>Estatística:</strong> a mesma característica calculada na <strong>amostra</strong>.</li>
                <li>Usa-se amostra quando o <strong>custo</strong> e o <strong>tempo</strong> são grandes, a população é <strong>inacessível</strong> ou o ensaio é <strong>destrutivo</strong> (testar a vida útil de lâmpadas).</li>
              </ul>
            </div>
            ${W.box('Estimando a partir de uma amostra', W.row(W.nm('pe-n', 'população N', 50000, 'any', 'min="1"'), W.nm('pe-m', 'amostra n', 400, 'any', 'min="1"'), W.nm('pe-k', 'favoráveis na amostra', 120, 'any', 'min="0"')) + W.txt('pe-p', 'Percentual na amostra: ') + W.txt('pe-e', 'Estimativa para a população: ') + W.txt('pe-i', 'Margem de erro aproximada: ') + W.hint('pe-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Parâmetro, estatística e erro', `
          <div class="grid2">
            <div>${setores({ fatias: [['Favoráveis (30%)', 120], ['Contrários (70%)', 280]], w: 230, h: 170 })}<p class="hint" style="margin-top:4px;">Amostra de 400 pessoas: 30% são favoráveis.</p></div>
            ${tbl(['Conceito', 'Exemplo'], [['População', '50 000 moradores'], ['Amostra', '400 entrevistados'], ['Estatística', '30% favoráveis'], ['Parâmetro', 'percentual real entre os 50 000 (desconhecido)'], ['Margem de erro (aprox.)', '$1 ÷ √{400} = 5$ pontos percentuais']])}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Identificando os elementos', 'Uma escola tem 1 200 alunos. Para saber o meio de transporte mais usado, sorteiam-se 100 alunos e perguntam-se. Identifique população, amostra e unidade estatística.', [
  ['População', 'Os 1 200 alunos da escola.'],
  ['Amostra', 'Os 100 alunos sorteados.'],
  ['Unidade estatística', 'Cada aluno.']
], 'População: 1 200 alunos; amostra: 100 alunos; unidade: um aluno.'));
a.push(exemplo('Exemplo resolvido', 'Amostra ou censo?', 'Uma fábrica quer saber quanto tempo duram as lâmpadas que produz. Convém testar todas?', [
  ['Ensaio', 'Testar a vida útil <strong>destrói</strong> (ou gasta) a lâmpada.'],
  ['Conclusão', 'Se testássemos todas, não sobraria nenhuma para vender.']
], 'Deve-se usar <strong>amostragem</strong> (ensaio destrutivo).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Estimativa', 'Em uma amostra de 400 moradores, 120 são favoráveis a uma proposta. Estime o número de favoráveis em uma cidade de 50 000 moradores e a margem de erro.', [
  ['Percentual', '$120 ÷ 400 = 30\\%$.'],
  ['Estimativa', '$0,30 · 50\\ 000 = 15\\ 000$ favoráveis.'],
  ['Margem de erro', 'Aproximadamente $1 ÷ √{400} = 0,05 = 5$ pontos: entre $25\\%$ e $35\\%$ ($12\\ 500$ a $17\\ 500$).']
], 'Cerca de <strong>15 000</strong> favoráveis (entre 12 500 e 17 500).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Amostra viciada', 'Para conhecer a opinião da cidade sobre o transporte público, entrevistam-se pessoas na saída de um estacionamento de shopping. A amostra é representativa?', [
  ['Quem foi consultado', 'Pessoas que usam carro.'],
  ['Problema', 'Os usuários de ônibus ficam de fora: a amostra é <strong>tendenciosa</strong>.']
], '<strong>Não</strong>: a amostra precisa ser <strong>aleatória</strong> e abranger todos os grupos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Parâmetro ou estatística?', 'A altura média de <strong>todos</strong> os 480 alunos de uma escola é um parâmetro ou uma estatística? E a média de 40 alunos sorteados?', [
  ['Todos os alunos', 'Característica da <strong>população</strong>: parâmetro.'],
  ['40 sorteados', 'Característica da <strong>amostra</strong>: estatística.']
], 'Parâmetro e estatística, respectivamente.', 'growth'));

a.push(pratique('População', 'Em uma escola com 1 200 alunos, entrevistam-se 100. A população estudada é:',
  ['os 100 entrevistados', 'os 1 200 alunos', 'cada aluno', 'a escola e seus professores', '12 alunos'], 1,
  'Todo o grupo de interesse: os 1 200 alunos. <strong>Alternativa B.</strong>'));
a.push(pratique('Estimativa', 'Em uma amostra de 400 moradores, 120 apoiam uma proposta. Em uma cidade de 50 000 moradores, a estimativa de apoiadores é:',
  ['6 000', '12 000', '15 000', '20 000', '30 000'], 2,
  '$30\\% · 50\\ 000 = 15\\ 000$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Quando usar amostra', 'Em qual das situações é mais indicado usar uma pesquisa por amostragem, em vez de consultar toda a população?',
  ['saber a idade dos 30 alunos de uma sala', 'testar a resistência de caixas de fósforo produzidas em uma fábrica', 'contar os funcionários de uma pequena empresa', 'saber quem faltou hoje em uma turma', 'conferir o troco de uma compra'], 1,
  'O teste de resistência destrói o produto: não se testa tudo. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde população e amostra enganam', [
  ['Amostra pequena demais', 'A margem de erro cresce quando a amostra diminui ($≈ 1 ÷ √n$).'],
  ['Amostra tendenciosa', 'Se nem todos têm chance de entrar, o resultado é viciado, por maior que seja a amostra.'],
  ['Confundir parâmetro e estatística', 'Parâmetro: da população (quase sempre desconhecido). Estatística: da amostra (calculada).'],
  ['Dar certeza', 'Resultados amostrais são <strong>estimativas</strong>: “cerca de”, “entre … e …”.']
]));
a.push(quiz([
  { q: 'A pesquisa que estuda todos os indivíduos chama-se:', o: ['amostral', 'censitária', 'aleatória', 'estimada'], a: 1 },
  { q: 'Cada elemento da população é a:', o: ['amostra', 'unidade estatística', 'estatística', 'margem de erro'], a: 1 },
  { q: 'A média calculada em uma amostra é uma:', o: ['população', 'parâmetro', 'estatística', 'moda'], a: 2 },
  { q: 'Para uma amostra de 100 pessoas, a margem de erro aproximada é:', o: ['1 ponto', '5 pontos', '10 pontos', '50 pontos'], a: 2 }
]));
a.push(fechamento([
  ['Todo e parte', 'População e amostra.'],
  ['Dois modos', 'Censo (todos) e amostragem (parte).'],
  ['Estimativa', 'Estatística da amostra ⇒ parâmetro da população, com margem de erro.']
], 'Amostra bem escolhida e grande o bastante: é assim que a parte fala pelo todo.'));

pages.push({ out: BASE + 'aula-1-populacao-e-amostra.html', html: K.deck({
  title: 'População e amostra — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 16 e 17 · População e amostra', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pe-n', 'pe-m', 'pe-k'], function(){ var N = +$('pe-n').value, n = +$('pe-m').value, k = +$('pe-k').value;
    if(![N, n, k].every(isFinite) || N <= 0 || n <= 0 || k < 0 || k > n || n > N){ ['pe-p', 'pe-e', 'pe-i'].forEach(function(i){ $(i).textContent = '—'; }); $('pe-h').textContent = 'Use 0 ≤ favoráveis ≤ n ≤ N.'; return; }
    var pc = k / n, e = 1 / Math.sqrt(n);
    $('pe-p').textContent = pt(pc * 100, 2) + '%'; $('pe-e').textContent = '≈ ' + pt(Math.round(pc * N)) + ' (entre ' + pt(Math.round(Math.max(0, pc - e) * N)) + ' e ' + pt(Math.round(Math.min(1, pc + e) * N)) + ')'; $('pe-i').textContent = '± ' + pt(e * 100, 1) + ' pontos percentuais';
    $('pe-h').textContent = 'Estimativa = percentual da amostra × população. Margem de erro ≈ 1 ÷ √n: quanto maior a amostra, menor o erro. Amostra viciada não é corrigida por tamanho.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'População e amostra: <span>pesquisa censitária e amostral</span>',
  lede: 'População é o todo estudado e amostra é a parte consultada. A pesquisa pode ser censitária (todos) ou por amostragem (parte, com margem de erro). A estatística da amostra estima o parâmetro da população.',
  badges: ['população', 'amostra', 'margem de erro'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['População', 'O todo', 'chart', 'primary', p('Conjunto de interesse.') + call('Unidade', 'Cada elemento.', 'success')],
    ['Amostra', 'A parte', 'target', 'growth', p('Subconjunto consultado.') + call('Exemplo', '100 de 1 200 alunos.', 'success')],
    ['Censo × amostragem', 'Dois modos', 'scale', 'decay', li(['Censo: todos, sem erro.', 'Amostra: rápida, com erro.', 'Ensaio destrutivo: amostra.'])],
    ['Parâmetro e estatística', 'Todo e parte', 'link', 'success', p('Parâmetro: da população. Estatística: da amostra.') + call('Exemplo', 'média das alturas.', 'success')],
    ['Estimativa', 'Da amostra para o todo', 'up', 'primary', p('30% de 50 000 ≈ 15 000.') + call('Erro', '≈ 1 ÷ √n.', 'success')],
    ['Qualidade', 'Boa amostra', 'check', 'growth', li(['Aleatória.', 'Grande o bastante.', 'Abrange todos os grupos.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Amostra pequena demais.', 'Amostra tendenciosa.', 'Confundir parâmetro e estatística.', 'Tratar estimativa como certeza.', 'Confundir população com amostra.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'População e amostra <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: população, amostragem, estimativa, amostra viciada e parâmetro.',
  final: 'Pergunte quem é o todo e quem foi realmente consultado.',
  questions: [
    { badge: 'Estilo ENEM · população', text: 'Em uma escola com 1 200 alunos, entrevistam-se 100 para saber o meio de transporte mais usado.', cmd: 'A população estudada é:', opts: ['os 100 entrevistados', 'os 1 200 alunos', 'cada aluno', 'o meio de transporte', '12 alunos'], a: 1,
      sol: '<p>O grupo de interesse é todo o conjunto de alunos.</p>' },
    { badge: 'Estilo ENEM · amostragem', text: 'Qual das pesquisas é mais adequada para ser feita por amostragem?', cmd: 'Escolha a alternativa:', opts: ['idade dos 30 alunos de uma sala', 'durabilidade de lâmpadas produzidas por uma fábrica', 'número de funcionários de uma pequena loja', 'presença hoje em uma turma', 'valor de uma compra'], a: 1,
      sol: '<p>O ensaio de durabilidade destrói o produto.</p>' },
    { badge: 'Estilo ENEM · estimativa', text: 'Em uma amostra de 400 moradores de uma cidade de 50 000, 120 apoiam uma proposta.', cmd: 'A estimativa do número de apoiadores na cidade é:', opts: ['6 000', '12 000', '15 000', '20 000', '30 000'], a: 2,
      sol: '<p>$30\\% · 50\\ 000 = 15\\ 000$.</p>' },
    { badge: 'Estilo ENEM · amostra viciada', text: 'Para saber a opinião da cidade sobre o transporte público, entrevistam-se pessoas na saída de um estacionamento de shopping.', cmd: 'Esse procedimento:', opts: ['é um censo', 'gera amostra representativa', 'gera amostra tendenciosa', 'elimina a margem de erro', 'não é pesquisa'], a: 2,
      sol: '<p>Usuários de ônibus ficam de fora: amostra tendenciosa.</p>' },
    { badge: 'Estilo ENEM · parâmetro', text: 'Calculou-se a altura média de todos os 480 alunos de uma escola.', cmd: 'Esse valor é:', opts: ['uma estatística amostral', 'um parâmetro', 'uma amostra', 'uma margem de erro', 'uma unidade estatística'], a: 1,
      sol: '<p>Característica da população inteira: parâmetro.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Todo, parte, <span style="color:var(--growth);">parâmetro e estatística</span>',
  subtitle: 'Classifique cada descrição.',
  tpl: cClassificar({
    cats: ['População', 'Amostra', 'Parâmetro', 'Estatística'],
    intro: 'Cada cartão descreve algo de uma pesquisa. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Todo e parte; valor do todo e valor da parte.',
    itens: [
      ['Todos os 1 200 alunos de uma escola', 0, 'O grupo inteiro de interesse.'],
      ['Os 100 alunos entrevistados', 1, 'Subconjunto consultado.'],
      ['Altura média de todos os alunos', 2, 'Característica da população.'],
      ['Altura média dos 40 alunos sorteados', 3, 'Característica da amostra.'],
      ['Todas as lâmpadas fabricadas no mês', 0, 'O conjunto produzido.'],
      ['As 30 lâmpadas testadas', 1, 'Subconjunto ensaiado.'],
      ['Percentual real de eleitores que votarão em A (todos)', 2, 'Valor da população (desconhecido).'],
      ['Percentual de A entre 2 000 entrevistados', 3, 'Valor da amostra.'],
      ['Todos os moradores de uma cidade', 0, 'População.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'População e amostra: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: percentual, estimativa, margem, mais uma estimativa e tamanho da amostra. Digite o número pedido.',
  final: 'Você percorreu a trilha: percentuais, estimativas e erro.',
  problems: [
    { tag: 'Percentual', q: 'Em uma amostra de 400, 120 são favoráveis. Qual o percentual?', a: 30, ph: '%', hint: '120 ÷ 400.', sol: '<p>$30\\%$.</p>' },
    { tag: 'Estimativa', q: 'Em uma cidade de 50 000 moradores, quantos favoráveis se estima (30%)?', a: 15000, ph: 'pessoas', hint: '0,30 · 50 000.', sol: '<p>$15\\ 000$.</p>' },
    { tag: 'Margem de erro', q: 'Para n = 400, qual a margem de erro aproximada (1 ÷ √n), em pontos percentuais?', a: 5, ph: 'pontos', hint: '100 ÷ 20.', sol: '<p>$5$.</p>' },
    { tag: 'Outra estimativa', q: 'Em uma escola de 2 000 alunos, 80 de 200 entrevistados preferem esporte. Estime o total de alunos que preferem.', a: 800, ph: 'alunos', hint: '40% de 2 000.', sol: '<p>$800$.</p>' },
    { tag: 'Tamanho da amostra', q: 'Qual o tamanho n de amostra para uma margem de erro de 5 pontos (1 ÷ √n = 0,05)?', a: 400, ph: 'n', hint: '√n = 20.', sol: '<p>$400$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'População e Amostra', accent: 'primary', icon: 'bars',
  aulas: [['Aulas 16–17', 'População, amostra e pesquisa estatística', 'aula-1-populacao-e-amostra.html']],
  enem: 'População e amostra no estilo ENEM', cria: 'Todo, parte, parâmetro e estatística', pratica: 'População e amostra: trilha de desafios'
}, pages };
