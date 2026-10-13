// Unidade v08 — Tipos de amostra e características da pesquisa amostral (aulas 18 e 19 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'tipos-de-amostra', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v08', BRAND = 'Tipos de Amostra', CAP = 'Aulas 18 e 19';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 18 e 19', h1: 'Tipos de amostra: <span style="color:var(--primary);">como escolher quem entra na pesquisa</span>',
  sub: 'Amostras grátis no mercado, amostra de sangue no laboratório: pegar uma parte para conhecer o todo. Em estatística há três técnicas principais de escolher essa parte.',
  badges: [['casual simples'], ['sistemática', 'growth'], ['estratificada', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Três técnicas.', [
  ['Por que amostrar', 'custo, tempo e acesso', 'bulb'],
  ['Casual simples', 'sorteio: todos com a mesma chance', 'target'],
  ['Sistemática', 'de k em k', 'chart'],
  ['Estratificada', 'por grupos, em proporção', 'link'],
  ['Coincidências', 'o paradoxo do aniversário', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a amostra <strong>casual simples</strong>, a <strong>sistemática</strong> e a <strong>estratificada</strong>.',
  'Calcular o <strong>intervalo</strong> $k = N ÷ n$ da sistemática e a <strong>alocação proporcional</strong> da estratificada.',
  'Escolher a técnica mais adequada a uma situação.',
  'Entender como <strong>coincidências</strong> se tornam comuns quando há muitos elementos (paradoxo do aniversário).'
], 'Dica', 'Casual simples: <strong>todo</strong> elemento tem a <strong>mesma probabilidade</strong>. Estratificada: a população tem <strong>grupos</strong> diferentes e cada grupo é representado na proporção do seu tamanho.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O que as amostras têm em comum?', `
          ${lede('Um salgadinho grátis no mercado, uma amostra de medicamento, uma fruta provada na feira, uma gota de sangue no laboratório: em todas se examina uma <strong>pequena parte</strong> para julgar o todo. Em pesquisas, isso é mais barato, mais rápido e, às vezes, a única opção.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Técnica', 'Ideia'], [['Casual simples', 'sorteio: todos têm a mesma chance'], ['Sistemática', 'de $k$ em $k$ em uma lista ordenada'], ['Estratificada', 'sorteio dentro de cada grupo (estrato)']])}
            ${mini('Sortear 50 de 1 000 alunos numerados com urna é amostragem:', ['sistemática', 'estratificada', 'casual simples', 'censitária'], 2, 'Sorteio em que todos têm a mesma probabilidade ($50 ÷ 1\\ 000 = 5\\%$): casual simples.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · tipos de amostra', 'Como cada técnica funciona', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Casual simples:</strong> a escolha depende só do acaso; nenhum elemento tem preferência.</li>
                <li><strong>Sistemática:</strong> população ordenada; calcula-se $k = N ÷ n$, sorteia-se o primeiro ($r ≤ k$) e tomam-se $r, r + k, r + 2k, …$.</li>
                <li><strong>Estratificada:</strong> divide-se a população em <strong>estratos</strong> e sorteia-se em cada um, em proporção: $n_i = n · {N_i|N}$.</li>
                <li>Todas exigem <strong>aleatoriedade</strong> para evitar viés.</li>
              </ul>
            </div>
            ${W.box('Amostra estratificada proporcional', W.row(W.nm('es-1', 'estrato 1', 240, 'any', 'min="0"'), W.nm('es-2', 'estrato 2', 200, 'any', 'min="0"'), W.nm('es-3', 'estrato 3', 160, 'any', 'min="0"'), W.nm('es-n', 'amostra n', 60, 'any', 'min="1"')) + W.txt('es-t', 'População N = ') + W.txt('es-a', 'Amostra por estrato: ') + W.txt('es-k', 'Intervalo da sistemática k = N ÷ n: ') + W.hint('es-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Escolhendo a técnica', `
          ${tbl(['Situação', 'Técnica', 'Por quê'], [['Rifa com todos os números em uma urna', 'casual simples', 'todos têm a mesma chance'], ['Fila numerada de uma lista de matrículas', 'sistemática', 'prática: de $k$ em $k$'], ['Escola com 3 séries de tamanhos diferentes', 'estratificada', 'garante cada série na proporção']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Vantagem comum', 'As três são mais baratas e rápidas que um censo.', 'success')}
            ${callout('Cuidado', 'Uma lista com <strong>padrão periódico</strong> pode viciar a sistemática (ex.: tomar sempre a posição 7 de cada semana).', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Amostra sistemática', 'Uma lista tem 1 000 alunos numerados. Quer-se uma amostra de 50 por amostragem sistemática, com início sorteado no 7. Quais os primeiros números e qual o último?', [
  ['Intervalo', '$k = 1\\ 000 ÷ 50 = 20$.'],
  ['Sequência', '$7, 27, 47, 67, …$'],
  ['Último', '$7 + 49 · 20 = 987$.']
], '$k = 20$; elementos $7, 27, 47, …, 987$.'));
a.push(exemplo('Exemplo resolvido', 'Amostra estratificada', 'Uma escola tem 600 alunos: 240 na 1ª série, 200 na 2ª e 160 na 3ª. Para uma amostra de 60 alunos, estratificada proporcional, quantos de cada série?', [
  ['Fração', '$60 ÷ 600 = 10\\%$.'],
  ['Por série', '$24$ da 1ª, $20$ da 2ª e $16$ da 3ª.'],
  ['Conferência', '$24 + 20 + 16 = 60$ ✓.']
], '<strong>24, 20 e 16</strong> alunos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Qual técnica usar?', 'Para ouvir moradores de uma cidade com 3 bairros de tamanhos muito diferentes, garantindo representação de cada bairro, qual a técnica mais indicada?', [
  ['Grupos', 'Há subgrupos (bairros) distintos.'],
  ['Necessidade', 'Representar cada bairro na proporção do seu tamanho.']
], '<strong>Amostragem estratificada</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Probabilidade de ser sorteado', 'Em um sorteio casual simples de 50 entre 1 000 alunos, qual a probabilidade de um aluno específico ser sorteado?', [
  ['Casos favoráveis ÷ possíveis', '$50 ÷ 1\\ 000 = 0,05$.']
], '<strong>5%</strong> para cada aluno (todos têm a mesma chance).', 'growth'));

a.push(pratique('Intervalo', 'Em uma amostra sistemática de 40 elementos de uma população de 800, o intervalo é:',
  ['10', '15', '20', '40', '100'], 2,
  '$800 ÷ 40 = 20$. <strong>Alternativa C.</strong>'));
a.push(pratique('Estratificada', 'Em uma escola de 600 alunos (240, 200 e 160 por série), a amostra proporcional de 60 inclui da 3ª série:',
  ['10', '14', '16', '20', '24'], 2,
  '$160 · 10\\% = 16$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Tipo de amostra', 'De uma lista numerada com todos os clientes de um banco, escolhe-se o 5º cliente e, depois, a cada 10 clientes, o seguinte. Essa técnica é:',
  ['casual simples', 'estratificada', 'sistemática', 'censitária', 'por conveniência'], 2,
  'Escolha periódica ($k = 10$) a partir de um início: sistemática. <strong>Alternativa C.</strong>'));

// ---- Aula 19: paradoxo do aniversário ----
a.push(sl('Para início de conversa', 'O paradoxo do aniversário', `
          ${lede('Quantas pessoas são necessárias para haver <strong>95% de chance</strong> de duas delas fazerem aniversário no mesmo dia? (Ignore anos bissextos.) Para ter 100% de certeza são 366 pessoas, mas <strong>muito antes</strong> a chance já é alta. Com <strong>23</strong> pessoas passa de 50%; com <strong>47</strong>, chega a cerca de 95%!')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Pessoas', 'Duplas possíveis', 'Chance de coincidência'], [['10', '45', '≈ 11,7%'], ['23', '253', '≈ 50,7%'], ['30', '435', '≈ 70,6%'], ['47', '1 081', '≈ 95,5%'], ['57', '1 596', '≈ 99%']])}
            ${mini('O número de duplas que se formam com 23 pessoas é:', ['23', '46', '253', '506'], 2, '$C(23, 2) = {23 · 22|2} = 253$. Com tantas duplas, a coincidência fica provável.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · coincidências', 'Por que a chance cresce tão rápido?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com $n$ pessoas formam-se $n(n − 1) ÷ 2$ duplas — o número cresce <strong>quase com $n^{2}$</strong>.</li>
                <li>Mais fácil calcular o <strong>complemento</strong>: chance de <strong>todos</strong> terem datas diferentes $= (365 ÷ 365) · (364 ÷ 365) · (363 ÷ 365) · …$.</li>
                <li>Chance de haver coincidência $= 1 − $ essa probabilidade.</li>
                <li>Moral: com muitos elementos, <strong>coincidências deixam de ser exceção</strong>; por isso, “coincidência” sozinha raramente prova algo.</li>
              </ul>
            </div>
            ${W.box('Paradoxo do aniversário', W.row(W.nm('ab-n', 'número de pessoas n', 23, '1', 'min="2" max="365"')) + W.txt('ab-d', 'Duplas possíveis = ') + W.txt('ab-p', 'Chance de ao menos 1 coincidência: ') + W.hint('ab-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Contando as duplas', 'Quantas duplas diferentes se formam com 47 pessoas?', [
  ['Fórmula', '$C(n, 2) = {n(n − 1)|2}$.'],
  ['Cálculo', '${47 · 46|2} = 1\\ 081$.']
], '<strong>1 081 duplas</strong> (cada uma é uma “chance” de coincidência).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Primeiras fatias do cálculo', 'Qual a chance de que, entre 3 pessoas, todas façam aniversário em dias diferentes?', [
  ['Segunda pessoa', 'Difere da primeira com chance ${364|365}$.'],
  ['Terceira pessoa', 'Difere das duas com chance ${363|365}$.'],
  ['Produto', '${364|365} · {363|365} ≈ 0,992$.']
], 'Cerca de <strong>99,2%</strong> (e 0,8% de coincidência).', 'growth'));

a.push(armadilhas('Cuidados', 'Onde os tipos de amostra enganam', [
  ['Amostra por conveniência', 'Entrevistar quem está por perto <strong>não é aleatório</strong> e vicia o resultado.'],
  ['Estratos mal proporcionais', 'Cada estrato deve entrar na proporção do seu tamanho.'],
  ['Padrão na lista', 'Se a lista tem periodicidade igual a $k$, a sistemática falha.'],
  ['Achar que coincidência é rara', 'Com 23 pessoas, a chance de aniversário repetido já passa de 50%.']
]));
a.push(quiz([
  { q: 'Amostra em que cada elemento tem a mesma chance de ser escolhido por sorteio:', o: ['estratificada', 'sistemática', 'casual simples', 'censitária'], a: 2 },
  { q: 'População de 1 000 e amostra de 50: o intervalo da sistemática é:', o: ['10', '20', '50', '100'], a: 1 },
  { q: 'A estratificada é indicada quando a população:', o: ['é homogênea', 'tem grupos distintos', 'é pequena', 'não pode ser ordenada'], a: 1 },
  { q: 'Com 23 pessoas, a chance de duas fazerem aniversário no mesmo dia é:', o: ['cerca de 6%', 'cerca de 23%', 'cerca de 50%', '100%'], a: 2 }
]));
a.push(fechamento([
  ['Casual simples', 'Sorteio, mesma chance para todos.'],
  ['Sistemática', 'De $k$ em $k$, com $k = N ÷ n$.'],
  ['Estratificada', 'Grupos na proporção do tamanho.']
], 'Escolha a técnica pela estrutura da população: sorteio, lista ou grupos.'));

pages.push({ out: BASE + 'aula-1-tipos-de-amostra.html', html: K.deck({
  title: 'Tipos de amostra — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 18 e 19 · Tipos de amostra', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['es-1', 'es-2', 'es-3', 'es-n'], function(){ var v = [+$('es-1').value, +$('es-2').value, +$('es-3').value], n = +$('es-n').value, N = v[0] + v[1] + v[2];
    if(!v.every(isFinite) || !isFinite(n) || N <= 0 || n <= 0 || n > N || v.some(function(x){ return x < 0; })){ ['es-t', 'es-a', 'es-k'].forEach(function(i){ $(i).textContent = '—'; }); $('es-h').textContent = 'Use estratos não negativos e 0 < n ≤ N.'; return; }
    var al = v.map(function(x){ return n * x / N; });
    $('es-t').textContent = pt(N); $('es-a').textContent = al.map(function(x){ return pt(x, 2); }).join(' · '); $('es-k').textContent = pt(N / n, 2);
    $('es-h').textContent = 'n_i = n · N_i ÷ N. A soma dos arredondados deve dar ' + pt(n) + '. Para a sistemática, k = N ÷ n.'; });
  bind(['ab-n'], function(){ var n = Math.round(+$('ab-n').value);
    if(!isFinite(n) || n < 2 || n > 365){ $('ab-d').textContent = '—'; $('ab-p').textContent = '—'; $('ab-h').textContent = 'Use 2 ≤ n ≤ 365.'; return; }
    var q = 1; for(var i = 0; i < n; i++) q *= (365 - i) / 365;
    $('ab-d').textContent = pt(n * (n - 1) / 2); $('ab-p').textContent = pt((1 - q) * 100, 2) + '%';
    $('ab-h').textContent = 'Chance de todos diferentes = ' + pt(q * 100, 2) + '%; coincidência = 1 − isso.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Tipos de amostra: <span>casual, sistemática e estratificada</span>',
  lede: 'Casual simples: sorteio. Sistemática: de k em k. Estratificada: grupos na proporção. Todas pedem aleatoriedade, e coincidências são comuns com muitos elementos.',
  badges: ['casual simples', 'k = N/n', 'proporcional'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Casual simples', 'Sorteio', 'chart', 'primary', p('Mesma probabilidade para todos.') + call('Exemplo', '50 de 1 000: 5%.', 'success')],
    ['Sistemática', 'De k em k', 'target', 'growth', p('$k = N ÷ n$; início sorteado.') + call('Exemplo', '1 000 e 50: k = 20.', 'success')],
    ['Estratificada', 'Por grupos', 'scale', 'decay', p('$n_i = n · N_i ÷ N$') + call('Exemplo', '24, 20, 16.', 'success')],
    ['Escolha', 'Qual técnica?', 'link', 'success', li(['Urna: casual.', 'Lista: sistemática.', 'Grupos distintos: estratificada.'])],
    ['Coincidências', 'Aniversário', 'up', 'primary', p('23 pessoas: 50,7%.') + call('Duplas', '$n(n − 1) ÷ 2$.', 'success')],
    ['Cuidado', 'Viés', 'check', 'growth', li(['Evite conveniência.', 'Cuide dos padrões na lista.', 'Estratos proporcionais.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Amostra por conveniência.', 'Estratos mal proporcionais.', 'Lista periódica.', 'Achar coincidência rara.', 'Confundir k com n.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Tipos de amostra <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: probabilidade no sorteio, intervalo, estratos, tipo e duplas.',
  final: 'Sorteio, lista ou grupos: a técnica segue a estrutura da população.',
  questions: [
    { badge: 'Estilo ENEM · sorteio', text: 'Sorteiam-se 50 alunos entre 1 000 (amostra casual simples).', cmd: 'A probabilidade de um aluno específico ser sorteado é:', opts: ['0,5%', '2%', '5%', '10%', '50%'], a: 2,
      sol: '<p>$50 ÷ 1\\ 000 = 5\\%$.</p>' },
    { badge: 'Estilo ENEM · intervalo', text: 'Uma amostra sistemática de 40 elementos será retirada de uma população de 800.', cmd: 'O intervalo entre elementos é:', opts: ['10', '15', '20', '40', '100'], a: 2,
      sol: '<p>$k = 800 ÷ 40 = 20$.</p>' },
    { badge: 'Estilo ENEM · estratos', text: 'Uma escola tem 600 alunos: 240 na 1ª série, 200 na 2ª e 160 na 3ª. Amostra estratificada proporcional de 60.', cmd: 'O número de alunos da 3ª série na amostra é:', opts: ['10', '14', '16', '20', '24'], a: 2,
      sol: '<p>$160 · 60 ÷ 600 = 16$.</p>' },
    { badge: 'Estilo ENEM · tipo de amostra', text: 'De uma lista numerada de clientes escolhe-se o 5º e, depois, um a cada 10.', cmd: 'A técnica usada é:', opts: ['casual simples', 'estratificada', 'sistemática', 'censitária', 'por conveniência'], a: 2,
      sol: '<p>Intervalo fixo: sistemática.</p>' },
    { badge: 'Estilo ENEM · duplas', text: 'Em um grupo de 23 pessoas formam-se duplas.', cmd: 'O número de duplas diferentes é:', opts: ['23', '46', '253', '506', '529'], a: 2,
      sol: '<p>${23 · 22|2} = 253$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">técnica</span> de amostragem?',
  subtitle: 'Casual simples, sistemática ou estratificada?',
  tpl: cClassificar({
    cats: ['Casual simples', 'Sistemática', 'Estratificada'],
    intro: 'Cada cartão descreve como a amostra foi escolhida. Escolha a técnica e clique em <strong>Conferir</strong>.',
    final: 'Sorteio puro, passo fixo ou grupos na proporção.',
    itens: [
      ['Todos os números em uma urna; sorteiam-se 30', 0, 'Todos com a mesma chance: casual simples.'],
      ['Em uma fila numerada, escolhe-se o 4º e depois um a cada 8', 1, 'Intervalo fixo: sistemática.'],
      ['Escolhem-se 10% dos homens e 10% das mulheres, sorteando em cada grupo', 2, 'Grupos na proporção: estratificada.'],
      ['Gerador aleatório escolhe 100 CPFs de uma base', 0, 'Acaso puro.'],
      ['Entrevistar um a cada 5 clientes que entram na loja', 1, 'Passo fixo: sistemática.'],
      ['Sorteiam-se alunos separadamente em cada série, em proporção ao número de alunos', 2, 'Estratos = séries.'],
      ['Tirar bolinhas numeradas de um saco', 0, 'Sorteio.'],
      ['Pegar o 3º, 13º, 23º, 33º… registros de uma planilha', 1, 'k = 10.'],
      ['População dividida em faixas etárias, com amostra em cada faixa', 2, 'Estratos = faixas etárias.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Tipos de amostra: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: intervalo, último elemento, estrato, duplas pequenas e duplas grandes. Digite o número pedido.',
  final: 'Você percorreu a trilha: k, estratos e duplas.',
  problems: [
    { tag: 'Intervalo', q: 'População de 1 000 e amostra sistemática de 50: qual o intervalo k?', a: 20, ph: 'k', hint: '1 000 ÷ 50.', sol: '<p>$20$.</p>' },
    { tag: 'Último elemento', q: 'Com início 7 e k = 20, qual o 50º elemento da amostra?', a: 987, ph: 'n°', hint: '7 + 49 · 20.', sol: '<p>$987$.</p>' },
    { tag: 'Estrato', q: 'Escola de 600 alunos; a 3ª série tem 160. Em uma amostra proporcional de 60, quantos da 3ª série?', a: 16, ph: 'alunos', hint: '10% de 160.', sol: '<p>$16$.</p>' },
    { tag: 'Duplas (10)', q: 'Quantas duplas diferentes se formam com 10 pessoas?', a: 45, ph: 'duplas', hint: '10 · 9 ÷ 2.', sol: '<p>$45$.</p>' },
    { tag: 'Duplas (47)', q: 'Quantas duplas diferentes se formam com 47 pessoas?', a: 1081, ph: 'duplas', hint: '47 · 46 ÷ 2.', sol: '<p>$1\\ 081$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Tipos de Amostra', accent: 'growth', icon: 'bars',
  aulas: [['Aulas 18–19', 'Tipos de amostra e paradoxo do aniversário', 'aula-1-tipos-de-amostra.html']],
  enem: 'Tipos de amostra no estilo ENEM', cria: 'Qual técnica de amostragem?', pratica: 'Tipos de amostra: trilha de desafios'
}, pages };
