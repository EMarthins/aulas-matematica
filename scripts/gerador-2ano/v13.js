// Unidade v13 — Progressão geométrica: termo geral (aulas 28 a 30 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'pg-termo-geral', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v13', BRAND = 'Progressão Geométrica: Termo Geral', CAP = 'Aulas 28 a 30';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 28 a 30', h1: 'Progressão geométrica: <span style="color:var(--primary);">multiplicar sempre pelo mesmo valor</span>',
  sub: 'Bactérias que dobram, juros compostos, depreciação: quando cada termo é o anterior vezes uma constante, a sequência é uma PG, e cresce (ou decai) muito rápido.',
  badges: [['razão q'], ['aₙ = a₁ · qⁿ⁻¹', 'growth'], ['termo médio: b² = ac', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da razão ao termo geral.', [
  ['Definição', 'aₙ₊₁ = aₙ · q', 'bulb'],
  ['Classificação', 'crescente, decrescente, oscilante', 'target'],
  ['Termo geral', 'aₙ = a₁ · qⁿ⁻¹', 'chart'],
  ['Termo médio', 'b² = a · c', 'link'],
  ['Aplicações', 'bactérias, juros e depreciação', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer uma <strong>PG</strong> e calcular sua <strong>razão</strong> $q = a_{n+1} ÷ a_n$.',
  'Classificar a PG: <strong>crescente</strong>, <strong>decrescente</strong>, <strong>oscilante</strong> ($q < 0$) ou <strong>constante</strong> ($q = 1$).',
  'Usar o <strong>termo geral</strong> $a_n = a_1 · q^{n−1}$ e $a_n = a_k · q^{n−k}$.',
  'Aplicar o <strong>termo médio</strong> ($b^{2} = a · c$) e a <strong>interpolação geométrica</strong>.'
], 'Dica', 'Em uma PG, de $a_1$ até $a_n$ há $n − 1$ multiplicações por $q$: o expoente é <strong>$n − 1$</strong>.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Uma cultura que dobra', `
          ${lede('Uma cultura começa com <strong>100 bactérias</strong> e o número <strong>dobra a cada hora</strong>: $100, 200, 400, 800, …$ Cada termo é o anterior vezes $2$: uma <strong>progressão geométrica</strong> de razão $q = 2$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Hora', 'Bactérias'], [['0', '100'], ['1', '200'], ['2', '400'], ['3', '800'], ['6', '$100 · 2^{6} = 6\\ 400$']])}
            ${mini('Depois de 6 horas há quantas bactérias?', ['1 200', '3 200', '6 400', '12 800'], 2, '$100 · 2^{6} = 100 · 64 = 6\\ 400$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · PG', 'Definição, razão e termo geral', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>PG:</strong> cada termo (a partir do 2º) é o anterior vezes uma constante $q$: <strong>$q = {a_{n+1}|a_n}$</strong>.</li>
                <li>$q > 1$ e $a_1 > 0$: crescente. $0 < q < 1$ e $a_1 > 0$: decrescente. $q < 0$: <strong>oscilante</strong>. $q = 1$: constante.</li>
                <li><strong>Termo geral:</strong> <strong>$a_n = a_1 · q^{n−1}$</strong>; ou <strong>$a_n = a_k · q^{n−k}$</strong>.</li>
                <li><strong>Termo médio</strong> (positivos): <strong>$b^{2} = a · c$</strong>.</li>
                <li><strong>Interpolação:</strong> inserir $m$ termos entre $a$ e $b$: $q^{m+1} = {b|a}$.</li>
              </ul>
            </div>
            ${W.box('Termo geral da PG', W.row(W.nm('pg-a', 'a₁', 3, 'any'), W.nm('pg-q', 'razão q', 2, 'any'), W.nm('pg-n', 'n', 8, '1', 'min="1"')) + W.txt('pg-t', 'aₙ = ') + W.txt('pg-c', 'Tipo: ') + W.hint('pg-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Quatro comportamentos', `
          ${tbl(['PG', 'a₁', 'q', 'Tipo'], [['$(2, 4, 8, 16, …)$', '2', '2', 'crescente'], ['$(64, 32, 16, 8, …)$', '64', '$1 ÷ 2$', 'decrescente'], ['$(3, −6, 12, −24, …)$', '3', '−2', 'oscilante'], ['$(5, 5, 5, 5, …)$', '5', '1', 'constante']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Crescimento rápido', 'PGs com $q > 1$ crescem muito mais depressa que PAs: são os modelos de juros compostos e populações.', 'success')}
            ${callout('Cuidado com a1 < 0', 'Com $a_1 < 0$ e $q > 1$ a PG é <strong>decrescente</strong> (os termos ficam mais negativos).', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Oitavo termo', 'Na PG $(3, 6, 12, …)$, calcule $a_8$.', [
  ['Razão', '$q = 6 ÷ 3 = 2$.'],
  ['Termo geral', '$a_8 = 3 · 2^{7} = 3 · 128 = 384$.']
], '$a_8 = 384$.'));
a.push(exemplo('Exemplo resolvido', 'PG decrescente', 'Na PG $(81, 27, 9, …)$, qual a razão e o sexto termo?', [
  ['Razão', '$q = 27 ÷ 81 = {1|3}$.'],
  ['Sexto termo', '$a_6 = 81 · ({1|3})^{5} = {81|243} = {1|3}$.']
], '$q = {1|3}$ e $a_6 = {1|3}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Termo médio', 'Determine $x$ para que $(2, x, 18)$ seja uma PG.', [
  ['Termo médio', '$x^{2} = 2 · 18 = 36$.'],
  ['Resolva', '$x = 6$ ou $x = −6$.'],
  ['Confira', '$(2, 6, 18)$: razão 3. $(2, −6, 18)$: razão $−3$.']
], '$x = 6$ ou $x = −6$ (as duas formam PG).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Interpolação geométrica', 'Insira 3 termos em PG entre 2 e 162.', [
  ['Razão', '$q^{4} = {162|2} = 81$ ⇒ $q = 3$ (ou $−3$).'],
  ['Termos', '$2, 6, 18, 54, 162$.']
], 'Os meios geométricos são $6, 18$ e $54$ (com $q = 3$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Depreciação', 'Um equipamento de R$ 1 000 perde 20% do valor por ano. Qual o valor após 3 anos?', [
  ['PG', '$q = 1 − 0,20 = 0,8$: $1\\ 000, 800, 640, 512, …$'],
  ['Valor', '$a_4 = 1\\ 000 · 0,8^{3} = 512$ (início + 3 anos).']
], '<strong>R$ 512</strong>.', 'growth'));

a.push(pratique('Termo geral', 'Na PG $(3, 6, 12, …)$, o oitavo termo é:',
  ['192', '256', '384', '768', '1 536'], 2,
  '$3 · 2^{7} = 384$. <strong>Alternativa C.</strong>'));
a.push(pratique('Termo médio', 'Se $(2, x, 18)$ é uma PG de termos positivos, $x$ vale:',
  ['4', '6', '8', '9', '10'], 1,
  '$x^{2} = 36$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Bactérias', 'Uma cultura de 100 bactérias dobra a cada hora. Depois de 6 horas, o número de bactérias é:',
  ['600', '1 200', '3 200', '6 400', '12 800'], 3,
  '$100 · 2^{6} = 6\\ 400$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a PG engana', [
  ['Expoente n em vez de n − 1', '$a_n = a_1 q^{n−1}$: o primeiro termo usa $q^{0}$.'],
  ['Somar em vez de multiplicar', 'PA soma $r$; PG multiplica por $q$.'],
  ['Termo médio com sinal', '$b^{2} = ac$ dá $±$; confira quais sinais fazem a PG.'],
  ['Classificação com a₁ negativo', 'Com $a_1 < 0$ os papéis de crescente e decrescente se invertem.']
]));
a.push(quiz([
  { q: 'A razão da PG $(81, 27, 9, …)$ é:', o: ['3', '${1|3}$', '−3', '54'], a: 1 },
  { q: 'Em $a_n = 5 · 2^{n−1}$, o termo $a_4$ é:', o: ['20', '40', '80', '160'], a: 1 },
  { q: 'A PG $(1, −2, 4, −8, …)$ é:', o: ['crescente', 'decrescente', 'oscilante', 'constante'], a: 2 },
  { q: 'Inserindo 2 termos em PG entre 1 e 8, a razão é:', o: ['2', '3', '4', '7'], a: 0 }
]));
a.push(fechamento([
  ['Razão', '$q = a_{n+1} ÷ a_n$.'],
  ['Termo geral', '$a_n = a_1 · q^{n−1}$.'],
  ['Termo médio', '$b^{2} = a · c$.']
], 'n − 1 multiplicações por q: a PG inteira em uma fórmula.'));

pages.push({ out: BASE + 'aula-1-termo-geral-da-pg.html', html: K.deck({
  title: 'Progressão geométrica: termo geral — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 28 a 30 · Termo geral da PG', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pg-a', 'pg-q', 'pg-n'], function(){ var a1 = +$('pg-a').value, q = +$('pg-q').value, n = Math.round(+$('pg-n').value);
    if(![a1, q].every(isFinite) || !isFinite(n) || n < 1){ $('pg-t').textContent = '—'; $('pg-c').textContent = '—'; $('pg-h').textContent = 'Use n ≥ 1.'; return; }
    var an = a1 * Math.pow(q, n - 1), tipo;
    if(a1 === 0 || q === 0) tipo = 'degenerada (termos nulos)'; else if(q === 1) tipo = 'constante'; else if(q < 0) tipo = 'oscilante'; else if((q > 1) === (a1 > 0)) tipo = 'crescente'; else tipo = 'decrescente';
    $('pg-t').textContent = pt(an, 4); $('pg-c').textContent = tipo;
    $('pg-h').textContent = 'aₙ = a₁·q^(n−1) = ' + pt(a1) + ' · ' + pt(q) + '^' + (n - 1) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Progressão geométrica: <span>razão, termo geral e termo médio</span>',
  lede: 'Cada termo é o anterior vezes a razão q. O termo geral é aₙ = a₁·qⁿ⁻¹; o termo médio satisfaz b² = a·c; a interpolação usa q elevado a m + 1.',
  badges: ['q = aₙ₊₁/aₙ', 'aₙ = a₁qⁿ⁻¹', 'b² = ac'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Razão', 'Quociente', 'chart', 'primary', li(['q > 1: cresce (a₁ > 0).', '0 < q < 1: decresce.', 'q < 0: oscila.'])],
    ['Termo geral', 'a₁ · qⁿ⁻¹', 'target', 'growth', p('Ou $a_k q^{n−k}$.') + call('Exemplo', '$3 · 2^{7} = 384$.', 'success')],
    ['Termo médio', 'b² = ac', 'scale', 'decay', p('$(2, x, 18)$: $x = ±6$.') + call('Atenção', 'Confira os sinais.', 'success')],
    ['Interpolação', 'q^(m+1) = b/a', 'link', 'success', p('3 meios entre 2 e 162: $q = 3$.') + call('Termos', '2, 6, 18, 54, 162.', 'success')],
    ['Aplicações', 'Juros e populações', 'up', 'primary', p('100 bactérias dobrando: 6 400.') + call('Depreciação', 'q = 0,8.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['n − 1 no expoente.', 'Sinal da razão.', 'Teste com um termo conhecido.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar n no expoente.', 'Somar onde se multiplica.', 'Esquecer o sinal negativo da razão.', 'Classificar errado com a₁ negativo.', 'Dividir por m em vez de usar a raiz (m + 1).'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'PG: termo geral <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: termo geral, razão fracionária, termo médio, bactérias e depreciação.',
  final: 'q elevado a n − 1: o resto é multiplicação.',
  questions: [
    { badge: 'Estilo ENEM · termo geral', text: 'Considere a PG $(3, 6, 12, …)$.', cmd: 'O oitavo termo é:', opts: ['384', '192', '256', '768', '1 536'], a: 0,
      sol: '<p>$3 · 2^{7} = 384$.</p>' },
    { badge: 'Estilo ENEM · razão fracionária', text: 'Considere a PG $(81, 27, 9, …)$.', cmd: 'O sexto termo é:', opts: ['${1|9}$', '${1|3}$', '${1|27}$', '3', '9'], a: 1,
      sol: '<p>$81 · ({1|3})^{5} = {81|243} = {1|3}$.</p>' },
    { badge: 'Estilo ENEM · termo médio', text: 'Os números $2$, $x$ e $18$, com $x > 0$, estão em PG, nessa ordem.', cmd: 'O valor de $x$ é:', opts: ['4', '8', '6', '9', '10'], a: 2,
      sol: '<p>$x^{2} = 36$ ⇒ $x = 6$.</p>' },
    { badge: 'Estilo ENEM · bactérias', text: 'Uma cultura de 100 bactérias dobra a cada hora.', cmd: 'Depois de 6 horas, o número de bactérias é:', opts: ['600', '1 200', '3 200', '6 400', '12 800'], a: 3,
      sol: '<p>$100 · 2^{6} = 6\\ 400$.</p>' },
    { badge: 'Estilo ENEM · depreciação', text: 'Um equipamento de R$ 1 000 perde 20% do valor a cada ano.', cmd: 'Após 3 anos, seu valor, em reais, é:', opts: ['400', '488', '512', '600', '640'], a: 2,
      sol: '<p>$1\\ 000 · 0,8^{3} = 512$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual o <span style="color:var(--growth);">tipo</span> da PG?',
  subtitle: 'Crescente, decrescente, oscilante ou constante?',
  tpl: cClassificar({
    cats: ['Crescente', 'Decrescente', 'Oscilante', 'Constante'],
    intro: 'Cada cartão traz os primeiros termos de uma PG. Descubra a razão, compare com 1 e olhe o sinal de $a_1$. Clique em <strong>Conferir</strong>.',
    final: 'Razão negativa: oscila; razão 1: constante; senão, compare os termos.',
    itens: [
      ['$(2, 4, 8, 16, …)$', 0, '$q = 2 > 1$, $a_1 > 0$.'],
      ['$(64, 32, 16, 8, …)$', 1, '$q = 1 ÷ 2$, $a_1 > 0$.'],
      ['$(3, −6, 12, −24, …)$', 2, '$q = −2 < 0$.'],
      ['$(5, 5, 5, 5, …)$', 3, '$q = 1$.'],
      ['$(−2, −4, −8, …)$', 1, '$a_1 < 0$ e $q = 2$: os termos diminuem.'],
      ['$(1, −1, 1, −1, …)$', 2, '$q = −1$.'],
      ['$(−81, −27, −9, −3, …)$', 0, '$a_1 < 0$ e $q = 1 ÷ 3$: os termos aumentam (tendem a 0).'],
      ['$(10; 5; 2,5; 1,25; …)$', 1, '$q = 1 ÷ 2$.'],
      ['$(1, 3, 9, 27, …)$', 0, '$q = 3$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'PG: termo geral <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: razão, oitavo termo, razão decimal, bactérias e depreciação. Digite o número pedido.',
  final: 'Você percorreu a trilha: razão, termo geral e aplicações.',
  problems: [
    { tag: 'Razão', q: 'Qual a razão da PG $(3, 6, 12, …)$?', a: 2, ph: 'q', hint: '6 ÷ 3.', sol: '<p>$2$.</p>' },
    { tag: 'Termo geral', q: 'Qual o oitavo termo dessa PG?', a: 384, ph: 'a₈', hint: '3 · 2⁷.', sol: '<p>$384$.</p>' },
    { tag: 'Razão decimal', q: 'Qual a razão (decimal) da PG $(16, 8, 4, …)$?', a: 0.5, ph: 'q', hint: '8 ÷ 16.', sol: '<p>$0,5$.</p>' },
    { tag: 'Bactérias', q: '100 bactérias que dobram a cada hora: quantas após 6 horas?', a: 6400, ph: 'bactérias', hint: '100 · 2⁶.', sol: '<p>$6\\ 400$.</p>' },
    { tag: 'Depreciação', q: 'R$ 1 000 com perda de 20% ao ano: quanto vale após 3 anos?', a: 512, ph: 'reais', hint: '1 000 · 0,8³.', sol: '<p>$512$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Progressão Geométrica: Termo Geral', accent: 'primary', icon: 'candles',
  aulas: [['Aulas 28–30', 'Progressão geométrica: termo geral', 'aula-1-termo-geral-da-pg.html']],
  enem: 'PG: termo geral no estilo ENEM', cria: 'Qual o tipo da PG?', pratica: 'PG: termo geral — trilha de desafios'
}, pages };
