// Unidade 26 — Estatística: conceito, pesquisa, população, amostra e variáveis (aulas 77 a 80)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { barras, setores, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'estatistica-conceitos-e-variaveis', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u26', BRAND = 'Estatística: Conceitos e Variáveis', CAP = 'Aulas 77 a 80';
const pages = [];

const SJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}); }
`;

// ===================== AULA 1: conceito e pesquisa =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 77 e 78', h1: 'Estatística e pesquisa estatística: <span style="color:var(--primary);">decidir com dados</span>',
  sub: 'Cinco amigos opinam sobre um filme: dá para saber se o filme é bom? A Estatística organiza informações dispersas para entendê-las, analisar tendências e fundamentar decisões.',
  badges: [['organizar dados'], ['tabelas e gráficos', 'growth'], ['censo × amostra', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da opinião de poucos à conclusão com método.', [
  ['O que é Estatística', 'organizar, analisar e decidir', 'bulb'],
  ['Onde se usa', 'eleições, censo, mercado, saúde, qualidade', 'link'],
  ['Lendo tabelas', 'frequência e percentual', 'chart'],
  ['Pesquisa censitária e amostral', 'toda a população ou parte dela', 'target'],
  ['Cautela', 'o que a pesquisa permite (e o que não permite) concluir', 'scale']
]));
a.push(objetivosSlide([
  'Compreender o que é <strong>Estatística</strong> e onde ela é usada.',
  'Ler <strong>tabelas e gráficos</strong> simples e calcular <strong>percentuais</strong>.',
  'Diferenciar <strong>pesquisa censitária</strong> de <strong>pesquisa amostral</strong>.',
  'Interpretar resultados de pesquisas com <strong>cautela</strong>.'
], 'Dica', 'Antes de tirar conclusões de uma pesquisa, pergunte: <strong>quem foi ouvido?</strong> <strong>quantos?</strong> <strong>como foram escolhidos?</strong> A resposta limita o que se pode afirmar.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O filme que acabou de estrear', `
          ${lede('Cinco amigos conversam sobre um filme novo: dois adoraram, um achou regular, dois detestaram. O que se pode concluir <strong>sobre o filme</strong>? Muito pouco: cinco opiniões não representam todo o público. A <strong>Estatística</strong> nasce dessa necessidade: reunir informações de forma organizada para que as conclusões sejam <strong>confiáveis</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Onde a Estatística aparece</strong><ul class="plain" style="font-size:.9rem;margin-top:8px;line-height:1.55;"><li><strong>Eleições</strong>: intenção de voto.</li><li><strong>Censo demográfico</strong>: onde investir em saúde e escola.</li><li><strong>Mercado</strong>: preferência de consumidores.</li><li><strong>Indústria</strong>: controle de qualidade.</li></ul>', 'primary')}
            ${mini('Para decidir onde abrir uma nova escola, o governo precisa saber onde moram crianças. A fonte mais adequada é:', ['a opinião de cinco vizinhos', 'o censo demográfico', 'um sorteio qualquer', 'um palpite'], 1, 'O <strong>censo</strong> reúne informações da população inteira e embasa decisões de governo (onde investir, que projetos implementar).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · da coleta à conclusão', 'Pesquisa censitária e pesquisa amostral', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Estatística</strong>: área que organiza informações para entendê-las, analisar tendências e fundamentar decisões.</li>
                <li><strong>Pesquisa censitária</strong>: dados obtidos de <strong>toda</strong> a população (ex.: o Censo do IBGE).</li>
                <li><strong>Pesquisa amostral</strong>: dados obtidos de <strong>uma parte</strong> da população (a amostra), para estimar o todo (ex.: pesquisas eleitorais).</li>
                <li>Resultados costumam vir em <strong>tabelas</strong> (frequência e percentual) e <strong>gráficos</strong>.</li>
                <li><strong>Percentual</strong> $= {"parte"|"total"} · 100%$.</li>
              </ul>
            </div>
            ${W.box('Tabela e gráfico de uma pesquisa', W.row(W.nm('t1-a', 'Categoria A', 100, 'any'), W.nm('t1-b', 'Categoria B', 30, 'any'), W.nm('t1-c', 'Categoria C', 70, 'any')) + W.svg('t1-s', '0 0 360 180', '380px') + W.txt('t1-t', 'Total: ') + W.txt('t1-p', 'Percentuais: ') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Qual navegador é o mais usado?', 'Uma empresa perguntou a 200 pessoas qual dos três principais navegadores usam (uma resposta por pessoa): A recebeu 100 indicações, B recebeu 30 e C recebeu 70. Organize os dados e conclua.', [
  ['Total', '$100 + 30 + 70 = 200$ pessoas.'],
  ['Percentuais', 'A: $100 ÷ 200 = 50%$ · B: $30 ÷ 200 = 15%$ · C: $70 ÷ 200 = 35%$.'],
  ['Conclusão', 'O navegador mais usado entre os entrevistados é o <strong>A</strong> (metade das indicações).']
], 'Soma dos percentuais: $50 + 15 + 35 = 100%$ ✓.'));
a.push(sl('Figura', 'Os mesmos dados em barras e em setores', `
          <div class="grid2">
            ${barras({ cats: ['A', 'B', 'C'], vals: [100, 30, 70], max: 120, passo: 20, maxw: '320px' })}
            ${setores({ fatias: [['A', 100], ['B', 30], ['C', 70]], maxw: '380px' })}
          </div>
          ${callout('Leitura', 'Barras comparam <strong>quantidades</strong> categoria a categoria; setores mostram a <strong>parte de cada categoria no todo</strong>.', 'success')}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A pesquisa de satisfação', 'Um totem registrou as notas de 1 a 5 de 50 clientes. Agrupando em conceitos: “insatisfatório” (notas 1 e 2): 3 votos; “regular” (3 a 5): 11; “bom” (6 a 8, escala até 10): 19; “excelente” (9 e 10): 17. Qual o conceito mais atribuído e qual a porcentagem dele?', [
  ['Total', '$3 + 11 + 19 + 17 = 50$.'],
  ['Maior frequência', '“Bom”, com $19$ votos.'],
  ['Percentual', '$19 ÷ 50 = 0,38 = 38%$.']
], 'O conceito mais atribuído foi <strong>“bom”</strong>, com <strong>38%</strong> dos votos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A pesquisa eleitoral', 'Uma pesquisa com 2 000 eleitores indicou: candidato A, 38%; B, 27%; C, 20%; nulos/brancos/indecisos, 15%. Quantos eleitores da amostra escolheram B? A é o vencedor garantido?', [
  ['Eleitores de B', '$27% · 2\\ 000 = 0,27 · 2\\ 000 = 540$.'],
  ['Indecisos etc.', '$15% · 2\\ 000 = 300$ eleitores ainda sem candidato.'],
  ['Vencedor garantido?', 'Não: é uma <strong>amostra</strong>, há margem de erro e 15% indecisos podem mudar o resultado.']
], '<strong>540</strong> eleitores escolheram B. A pesquisa mostra uma <strong>tendência</strong>, não um resultado certo da eleição.', 'growth'));

a.push(pratique('Percentual', 'Em uma pesquisa com 400 pessoas, 140 preferiram o produto X. O percentual de preferência por X foi:',
  ['28%', '30%', '35%', '40%', '70%'], 2,
  '$140 ÷ 400 = 0,35 = 35%$. <strong>Alternativa C.</strong>'));
a.push(pratique('Censo ou amostra?', 'Para estimar a intenção de voto dos 150 milhões de eleitores brasileiros, institutos entrevistam alguns milhares de pessoas. Essa é uma pesquisa:',
  ['censitária', 'amostral', 'sem população', 'impossível'], 1,
  'Entrevistam apenas <strong>parte</strong> dos eleitores para estimar o todo: pesquisa <strong>amostral</strong>. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Quantos votos?', 'Em uma pesquisa com 2 000 eleitores, o candidato B teve 27% das intenções de voto. O número de eleitores da amostra que escolheram B foi:',
  ['270', '400', '540', '600', '730'], 2,
  '$0,27 · 2\\ 000 = 540$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as pesquisas enganam', [
  ['Concluir demais de poucos', 'Cinco opiniões não representam o público: a conclusão exige amostra adequada.'],
  ['Confundir tendência com certeza', 'Pesquisa amostral estima; não garante o resultado final.'],
  ['Ignorar quem não respondeu', 'Indecisos, brancos e nulos também fazem parte do quadro.'],
  ['Percentual sem total', '“35%” só faz sentido sabendo de <strong>quantos</strong> (total) ele foi calculado.']
]));
a.push(quiz([
  { q: 'O Censo demográfico é uma pesquisa:', o: ['amostral', 'censitária', 'sem dados', 'aleatória'], a: 1 },
  { q: '35 de 140 pessoas escolheram um item. O percentual é:', o: ['25%', '35%', '40%', '4%'], a: 0 },
  { q: 'Uma pesquisa feita com parte da população é:', o: ['censitária', 'amostral', 'total', 'nula'], a: 1 },
  { q: 'Os percentuais de todas as categorias (uma resposta por pessoa) somam:', o: ['50%', '100%', '200%', 'depende'], a: 1 }
]));
a.push(fechamento([
  ['Estatística', 'Organiza dados para entender, analisar tendências e decidir.'],
  ['Censo × amostra', 'Todos × parte da população.'],
  ['Percentual', 'parte ÷ total × 100; some 100% quando as categorias são exclusivas.']
], 'Quem, quantos e como: perguntas antes de concluir.'));

pages.push({ out: BASE + 'aula-1-conceito-e-pesquisa.html', html: K.deck({
  title: 'Estatística e pesquisa estatística — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 77 e 78 · Estatística e pesquisa', slides: a,
  extra: WJS + BIND + SJS + String.raw`
  bind(['t1-a', 't1-b', 't1-c'], function(){ var v = [+$('t1-a').value, +$('t1-b').value, +$('t1-c').value], s = $('t1-s'); s.innerHTML = '';
    if(!v.every(isFinite) || v.some(function(x){ return x < 0; }) || v.reduce(function(p, q){ return p + q; }, 0) === 0){ $('t1-t').textContent = '—'; $('t1-p').textContent = ''; return; }
    var tot = v.reduce(function(p, q){ return p + q; }, 0), m = Math.max.apply(null, v), W0 = 360, H = 180, L = 30, B = 28, T = 16, bw = 60, gap = (W0 - L - 10) / 3;
    el('line', {x1: L, y1: H - B, x2: W0 - 10, y2: H - B, stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s);
    v.forEach(function(x, i){ var h = x / m * (H - B - T), X = L + gap * i + (gap - bw) / 2; el('rect', {x: X, y: H - B - h, width: bw, height: h, fill: ['var(--primary)', 'var(--growth)', 'var(--decay)'][i], rx: 3}, s);
      var t = el('text', {x: X + bw / 2, y: H - B + 16, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = ['A', 'B', 'C'][i]; var t2 = el('text', {x: X + bw / 2, y: H - B - h - 5, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--ink)'}, s); t2.textContent = pt(x); });
    $('t1-t').textContent = pt(tot); $('t1-p').textContent = v.map(function(x, i){ return ['A', 'B', 'C'][i] + ': ' + pt(x / tot * 100, 1) + '%'; }).join(' · '); $('t1-h').textContent = 'Percentual = frequência ÷ total × 100. A soma dos percentuais é 100%.'; });`
}) });

// ===================== AULA 2: população, amostra e variáveis =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 79 e 80', h1: 'População, amostra e variáveis: <span style="color:var(--growth);">quem é ouvido e o que é medido</span>',
  sub: 'Para saber o lanche preferido da escola não é preciso perguntar a todos — desde que a amostra seja bem escolhida. E antes de analisar dados, é preciso saber de que tipo é cada variável.',
  badges: [['população × amostra'], ['qualitativa × quantitativa', 'growth'], ['nominal, ordinal, discreta, contínua', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do grupo estudado ao tipo de dado.', [
  ['População', 'todos os elementos estudados', 'bulb'],
  ['Amostra', 'subconjunto representativo', 'target'],
  ['Por que amostrar', 'custo, tempo e ensaios destrutivos', 'link'],
  ['Variáveis qualitativas', 'nominais e ordinais', 'chart'],
  ['Variáveis quantitativas', 'discretas e contínuas', 'scale']
]));
b.push(objetivosSlide([
  'Diferenciar <strong>população</strong> e <strong>amostra</strong> e saber quando amostrar.',
  'Reconhecer uma boa amostra: <strong>representativa</strong> e <strong>aleatória</strong>.',
  'Classificar variáveis em <strong>qualitativas</strong> (nominais e ordinais) e <strong>quantitativas</strong> (discretas e contínuas).',
  'Resolver problemas com <strong>contagens</strong> em população e amostra.'
], 'Dica', 'Para classificar uma variável, pergunte: <strong>é número com sentido de quantidade?</strong> Se sim, é quantitativa: <strong>conta</strong> (discreta) ou <strong>mede</strong> (contínua). Se for categoria, é qualitativa: tem ordem (ordinal) ou não (nominal)?', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O lanche preferido da escola', `
          ${lede('Queremos descobrir o lanche preferido dos estudantes da escola. Precisamos perguntar para <strong>todos</strong> ou basta conversar com <strong>alguns</strong>? Se escolhermos bem, alguns bastam: a <strong>amostra</strong> representa a <strong>população</strong>. Mas se perguntarmos só aos amigos do time de futebol, a amostra será <strong>enviesada</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A fábrica quer testar a segurança de um novo modelo simulando acidentes. Por que ela usa uma <strong>amostra</strong>?', ['porque acidentes simulados destroem o carro: não dá para testar todos', 'porque é mais barato errar', 'porque a população é pequena demais', 'porque amostras nunca erram'], 0, 'Ensaios <strong>destrutivos</strong> inutilizam o produto: só se testa uma amostra. Já a pesquisa de opinião usa amostra por <strong>custo e tempo</strong>.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;"><strong>População</strong>: todos os elementos estudados. <strong>Amostra</strong>: subconjunto da população, escolhido de forma <strong>representativa</strong>.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · população e amostra', 'O que torna uma amostra confiável', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>População</strong> (universo estatístico): todos os elementos que se quer estudar.</li>
                <li><strong>Amostra</strong>: parte da população usada na pesquisa.</li>
                <li>Boa amostra: <strong>representativa</strong> (reflete a diversidade da população), <strong>aleatória</strong> e de <strong>tamanho adequado</strong>.</li>
                <li>Amostras maiores tendem a ficar <strong>mais próximas</strong> do valor real da população.</li>
                <li>Se a amostra é enviesada, a conclusão será errada, por maior que seja.</li>
              </ul>
            </div>
            ${W.box('Simulador de amostras', W.row(W.nm('a1-p', 'Proporção real a favor (%)', 40, 'any'), W.nm('a1-n', 'Tamanho da amostra', 50, 'any')) + '<button type="button" id="a1-go" class="choice" style="margin-top:8px;width:auto;">Sortear 10 amostras</button>' + W.txt('a1-r', 'Resultados (% a favor): ') + W.txt('a1-e', 'Maior erro: ') + W.hint('a1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · variáveis estatísticas', 'Quatro tipos de variável', `
          <div class="grid2">
            <div>
              ${tbl(['Tipo', 'O que é', 'Exemplos'], [['Qualitativa nominal', 'categoria sem ordem', 'cor dos olhos, time, estado civil'], ['Qualitativa ordinal', 'categoria com ordem natural', 'escolaridade, conceito (ruim, bom, ótimo)'], ['Quantitativa discreta', 'valores contados (inteiros)', 'nº de irmãos, nº de alunos'], ['Quantitativa contínua', 'valores medidos (qualquer real num intervalo)', 'altura, peso, temperatura']])}
            </div>
            ${W.box('Classifique a variável', W.sel('v1-q', 'Variável', ['cor dos olhos', 'grau de escolaridade', 'número de irmãos', 'altura dos alunos', 'time de futebol', 'temperatura do dia', 'nota de satisfação (1 a 5 estrelas)', 'renda mensal'], 0) + W.txt('v1-t', 'Tipo: ') + W.hint('v1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Classificando variáveis', 'Classifique: (a) número de alunos da sua sala; (b) altura dos professores; (c) cor do cabelo; (d) nível de satisfação (insatisfeito, regular, satisfeito).', [
  ['Variáveis numéricas', '(a) <strong>contagem</strong> de alunos: quantitativa <strong>discreta</strong>. (b) altura é <strong>medida</strong>: quantitativa <strong>contínua</strong>.'],
  ['Variáveis em categorias', '(c) cor do cabelo: qualitativa <strong>nominal</strong> (sem ordem).'],
  ['Com ordem natural', '(d) satisfação: qualitativa <strong>ordinal</strong> (insatisfeito < regular < satisfeito).']
], '(a) discreta · (b) contínua · (c) nominal · (d) ordinal.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Dois idiomas', 'Em uma escola de 1 000 alunos, 600 falam inglês, 450 falam espanhol e 200 falam os dois. Quantos não falam nenhum? Escolhido ao acaso um aluno que não fala inglês, qual a probabilidade de ele falar espanhol?', [
  ['Falam ao menos um', '$600 + 450 − 200 = 850$.'],
  ['Falam nenhum', '$1\\ 000 − 850 = 150$ alunos.'],
  ['Não falam inglês', '$1\\ 000 − 600 = 400$; destes, só espanhol: $450 − 200 = 250$. Probabilidade: $250 ÷ 400 = 5/8$.']
], '<strong>150</strong> alunos não falam nenhum idioma; a probabilidade pedida é $5/8 = 62,5%$.', 'growth'));

b.push(pratique('Variável', 'O <strong>número de livros</strong> lidos por um estudante em um ano é uma variável:',
  ['qualitativa nominal', 'qualitativa ordinal', 'quantitativa discreta', 'quantitativa contínua'], 2,
  'É resultado de uma <strong>contagem</strong> (0, 1, 2, ...): quantitativa <strong>discreta</strong>. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Ensaio destrutivo', 'Uma fábrica de lâmpadas testa a durabilidade de 50 lâmpadas de um lote de 10 000. Nesse estudo, as 50 lâmpadas formam:',
  ['a população', 'a amostra', 'o censo', 'a variável'], 1,
  'As 50 lâmpadas são <strong>parte</strong> do lote: a <strong>amostra</strong>. O lote de 10 000 é a população. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Quem não fala inglês', 'Em uma escola de 1 000 alunos, 600 falam inglês, 450 falam espanhol e 200 falam os dois. Um aluno que <strong>não fala inglês</strong> é sorteado. A probabilidade de ele falar espanhol é:',
  ['1/2', '5/8', '3/4', '9/20', '1/4'], 1,
  'Não falam inglês: $400$. Falam <em>só</em> espanhol: $450 − 200 = 250$. Probabilidade: $250 ÷ 400 = 5/8$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde população, amostra e variáveis enganam', [
  ['Amostra enviesada', 'Entrevistar só um grupo (por exemplo, quem passa em frente a uma loja) não representa a população.'],
  ['Número nem sempre é quantitativo', 'O número da camisa do jogador é só um <strong>rótulo</strong>: qualitativa nominal.'],
  ['Discreta × contínua', 'Contou? discreta. Mediu? contínua.'],
  ['Amostra grande ≠ amostra boa', 'Tamanho ajuda, mas sem representatividade o resultado continua errado.']
]));
b.push(quiz([
  { q: 'Cor dos olhos é uma variável:', o: ['qualitativa nominal', 'qualitativa ordinal', 'quantitativa discreta', 'quantitativa contínua'], a: 0 },
  { q: 'A altura dos alunos é uma variável:', o: ['qualitativa', 'quantitativa discreta', 'quantitativa contínua', 'nominal'], a: 2 },
  { q: 'A parte da população que de fato é pesquisada chama-se:', o: ['universo', 'amostra', 'censo', 'rol'], a: 1 },
  { q: 'Escolaridade (fundamental, médio, superior) é:', o: ['nominal', 'ordinal', 'discreta', 'contínua'], a: 1 }
]));
b.push(fechamento([
  ['População e amostra', 'Todos × parte representativa.'],
  ['Amostragem', 'Aleatória e com tamanho adequado; cuidado com viés.'],
  ['Variáveis', 'Nominal, ordinal, discreta (conta) e contínua (mede).']
], 'Conheça quem foi ouvido e o tipo de dado antes de calcular.'));

pages.push({ out: BASE + 'aula-2-populacao-amostra-e-variaveis.html', html: K.deck({
  title: 'População, amostra e variáveis — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 79 e 80 · População, amostra e variáveis', slides: b,
  extra: WJS + BIND + SJS + String.raw`
  var TIPO = ['qualitativa nominal (categoria sem ordem)', 'qualitativa ordinal (categoria com ordem)', 'quantitativa discreta (contagem)', 'quantitativa contínua (medida)', 'qualitativa nominal (categoria sem ordem)', 'quantitativa contínua (medida)', 'qualitativa ordinal (categoria com ordem)', 'quantitativa contínua (medida)'];
  var DICA = ['Não dá para ordenar “castanho” e “azul”.', 'Fundamental < médio < superior: há ordem.', 'Você conta os irmãos: 0, 1, 2…', 'Mede-se com régua: qualquer valor real num intervalo.', 'Os times não têm ordem natural.', 'Mede-se com termômetro: valores reais.', 'As estrelas indicam grau: há ordem, mas não é medida.', 'Dinheiro mede-se (centavos): tratado como contínua.'];
  function tipo(){ var k = +$('v1-q').value; $('v1-t').textContent = TIPO[k]; $('v1-h').textContent = DICA[k]; } $('v1-q').addEventListener('change', tipo); tipo();
  $('a1-go').addEventListener('click', function(){ var p = +$('a1-p').value / 100, n = Math.round(+$('a1-n').value); if(!isFinite(p) || p < 0 || p > 1 || !isFinite(n) || n < 1 || n > 5000){ $('a1-r').textContent = 'use proporção de 0 a 100 e amostra de 1 a 5000'; $('a1-e').textContent = ''; return; }
    var r = [], maxErr = 0; for(var i = 0; i < 10; i++){ var c = 0; for(var j = 0; j < n; j++) if(Math.random() < p) c++; var pc = c / n * 100; r.push(pc); maxErr = Math.max(maxErr, Math.abs(pc - p * 100)); }
    $('a1-r').textContent = r.map(function(v){ return pt(v, 1); }).join(' · '); $('a1-e').textContent = pt(maxErr, 1) + ' pontos percentuais'; $('a1-h').textContent = 'Valor real: ' + pt(p * 100, 1) + '%. Repita com amostras maiores (por exemplo 500 ou 2000) e veja o erro diminuir.'; });
  $('a1-go').click();`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Estatística: <span>pesquisa, amostra e variáveis</span>',
  lede: 'O que é Estatística, como se faz uma pesquisa (censitária ou amostral), por que e como se escolhe uma amostra e como classificar as variáveis.',
  badges: ['censo × amostra', 'população × amostra', '4 tipos de variável'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Estatística', 'Organizar e decidir', 'chart', 'primary', p('Coleta, organização, análise e conclusão.') + call('Exemplo', 'Censo, eleições, controle de qualidade.', 'success')],
    ['Pesquisa', 'Censitária × amostral', 'target', 'growth', li(['Censitária: toda a população.', 'Amostral: parte representativa.', 'Percentual = parte ÷ total.'])],
    ['População e amostra', 'Todos × parte', 'link', 'decay', p('Ensaios destrutivos exigem amostra.') + call('Cuidado', 'Amostra enviesada leva a erro.', 'danger')],
    ['Qualitativas', 'Categorias', 'scale', 'success', li(['Nominal: sem ordem (cor, time).', 'Ordinal: com ordem (escolaridade).'])],
    ['Quantitativas', 'Números', 'up', 'primary', li(['Discreta: contagem (irmãos).', 'Contínua: medida (altura).'])],
    ['Cautela', 'Interpretar pesquisas', 'check', 'growth', li(['Quem foi ouvido?', 'Quantos?', 'Como foram escolhidos?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Concluir demais de poucas respostas.', 'Tratar tendência como certeza.', 'Confundir rótulo numérico com quantidade.', 'Trocar discreta por contínua.', 'Esquecer o total ao comparar percentuais.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Estatística: conceitos e variáveis <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: percentual, amostra, variável, probabilidade e interpretação de pesquisa.',
  final: 'Total, percentual, amostra representativa e tipo de variável: o vocabulário básico da Estatística.',
  questions: [
    { badge: 'Estilo ENEM · percentual', text: 'Em uma pesquisa com 400 pessoas, 140 preferiram o produto X.', cmd: 'O percentual de preferência por X foi:', opts: ['28%', '30%', '35%', '40%', '70%'], a: 2,
      sol: '<p>$140 ÷ 400 = 0,35 = 35%$.</p>' },
    { badge: 'Estilo ENEM · amostra', text: 'Uma fábrica testa a durabilidade de 50 lâmpadas de um lote de 10 000 (o teste inutiliza a lâmpada).', cmd: 'As 50 lâmpadas testadas constituem:', opts: ['a população', 'a amostra', 'o censo', 'uma variável'], a: 1,
      sol: '<p>São <strong>parte</strong> do lote de 10 000 (a população): a amostra.</p>' },
    { badge: 'Estilo ENEM · variável', text: 'Em uma pesquisa, registra-se o número de livros lidos por cada estudante durante o ano.', cmd: 'Essa variável é classificada como:', opts: ['qualitativa nominal', 'qualitativa ordinal', 'quantitativa discreta', 'quantitativa contínua', 'não é variável'], a: 2,
      sol: '<p>É uma contagem (0, 1, 2, ...): quantitativa discreta.</p>' },
    { badge: 'Estilo ENEM · probabilidade', text: 'Em uma escola de 1 000 alunos, 600 falam inglês, 450 falam espanhol e 200 falam os dois.', cmd: 'Sorteado um aluno que não fala inglês, a probabilidade de ele falar espanhol é:', opts: ['1/2', '5/8', '3/4', '9/20', '1/4'], a: 1,
      sol: '<p>Não falam inglês: $400$; falam só espanhol: $250$. $250 ÷ 400 = 5/8$.</p>' },
    { badge: 'Estilo ENEM · interpretação', text: 'Uma pesquisa com 2 000 eleitores mostra: A, 38%; B, 27%; C, 20%; nulos, brancos e indecisos, 15%.', cmd: 'Qual afirmação é a mais adequada?', opts: ['A vencerá com certeza', 'A lidera a amostra, mas a pesquisa não garante o resultado da eleição', 'B tem 540 votos garantidos', 'C não tem chances', 'a pesquisa é censitária'], a: 1,
      sol: '<p>Pesquisa amostral indica <strong>tendência</strong>: há indecisos e margem de erro; nada é garantido.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique as <span style="color:var(--growth);">variáveis</span>',
  subtitle: 'Nominal, ordinal, discreta ou contínua? Pense em contar, medir ou categorizar.',
  tpl: cClassificar({
    cats: ['Qualitativa nominal', 'Qualitativa ordinal', 'Quantitativa discreta', 'Quantitativa contínua'],
    intro: 'Cada cartão traz uma variável. Escolha o tipo e clique em <strong>Conferir</strong>.',
    final: 'Categoria sem ordem: nominal. Categoria com ordem: ordinal. Contou: discreta. Mediu: contínua.',
    itens: [
      ['Cor dos olhos', 0, 'Categoria sem ordem.'],
      ['Grau de escolaridade (fundamental, médio, superior)', 1, 'Categorias com ordem natural.'],
      ['Número de irmãos', 2, 'Resultado de contagem.'],
      ['Altura dos alunos', 3, 'Medida: qualquer valor real num intervalo.'],
      ['Time de futebol preferido', 0, 'Categoria sem ordem.'],
      ['Temperatura do dia', 3, 'Medida em termômetro.'],
      ['Nota de satisfação em estrelas (1 a 5)', 1, 'Categorias ordenadas (grau), não medida.'],
      ['Número de alunos de uma sala', 2, 'Contagem.'],
      ['Número da camisa de um jogador', 0, 'Só um rótulo: nominal.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Estatística: conceitos e variáveis: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com pesquisas. Digite o número pedido.',
  final: 'Você percorreu a trilha: percentuais, votos, contagens e amostra.',
  problems: [
    { tag: 'Percentual', q: 'Em uma pesquisa com 200 pessoas, 100 indicaram o navegador A. Qual o percentual (%)?', a: 50, ph: '%', hint: '100 ÷ 200.', sol: '<p>$50%$.</p>' },
    { tag: 'Percentual', q: 'Em 50 clientes, 19 deram o conceito “bom”. Qual o percentual (%)?', a: 38, ph: '%', hint: '19 ÷ 50.', sol: '<p>$38%$.</p>' },
    { tag: 'Votos', q: 'B teve 27% das intenções de voto em 2 000 eleitores. Quantos eleitores?', a: 540, ph: 'eleitores', hint: '0,27 · 2 000.', sol: '<p>$540$.</p>' },
    { tag: 'Idiomas', q: 'Em 1 000 alunos, 600 falam inglês, 450 espanhol e 200 ambos. Quantos não falam nenhum?', a: 150, ph: 'alunos', hint: '1 000 − (600 + 450 − 200).', sol: '<p>$150$.</p>' },
    { tag: 'Amostra', q: 'Uma população de 8 000 pessoas será estudada por uma amostra de 2%. Quantas pessoas na amostra?', a: 160, ph: 'pessoas', hint: '2% de 8 000.', sol: '<p>$160$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Estatística: Conceitos e Variáveis', accent: 'primary', icon: 'bars',
  aulas: [['Aulas 77–78', 'Estatística e pesquisa estatística', 'aula-1-conceito-e-pesquisa.html'], ['Aulas 79–80', 'População, amostra e variáveis', 'aula-2-populacao-amostra-e-variaveis.html']],
  enem: 'Estatística: conceitos e variáveis no estilo ENEM', cria: 'Classifique as variáveis', pratica: 'Estatística: conceitos e variáveis: trilha de desafios'
}, pages };
