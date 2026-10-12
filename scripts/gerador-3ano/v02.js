// Unidade v02 — Função exponencial: definição e lei de formação (aulas 4 e 5 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-exponencial', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v02', BRAND = 'Função Exponencial', CAP = 'Aulas 4 e 5';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 4 e 5', h1: 'Função exponencial: <span style="color:var(--primary);">a variável no expoente</span>',
  sub: 'Uma fábrica produz 60 000 unidades e planeja crescer 30% ao ano. A produção de cada ano é a do ano anterior vezes 1,3: uma potência de t.',
  badges: [['f(x) = aˣ'], ['a > 0 e a ≠ 1', 'growth'], ['f(x) = k·aˣ', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da tabela à lei de formação.', [
  ['Situação', 'produção que cresce 30% ao ano', 'bulb'],
  ['Definição', 'f(x) = aˣ com a > 0 e a ≠ 1', 'target'],
  ['Forma geral', 'f(x) = k · aˣ', 'chart'],
  ['Taxa e base', 'a = 1 + i ou a = 1 − i', 'link'],
  ['Parâmetros', 'descobrir k, a ou m', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a <strong>lei de formação</strong> de uma função exponencial: $f(x) = a^{x}$ com $a > 0$ e $a ≠ 1$.',
  'Calcular <strong>valores numéricos</strong>, inclusive com expoente negativo e fracionário.',
  'Relacionar uma <strong>taxa percentual</strong> à base: $a = 1 + i$ (crescimento) ou $a = 1 − i$ (decaimento).',
  'Determinar <strong>$k$ e $a$</strong> a partir de dois valores da função.'
], 'Dica', 'Para taxa de <strong>aumento</strong> de $i$, multiplique por $(1 + i)$; para <strong>queda</strong> de $i$, multiplique por $(1 − i)$. Ex.: $+30\\%$ ⇒ $1,3$; $−20\\%$ ⇒ $0,8$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Uma produção que cresce 30% ao ano', `
          ${lede('A empresa fechou 2025 com <strong>60 000 unidades</strong> e projeta crescer <strong>30% ao ano</strong>. Cada ano, a produção é a do ano anterior multiplicada por $1,3$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Anos depois (t)', 'Produção P(t)'], [['0', '60 000'], ['1', '78 000'], ['2', '101 400'], ['3', '131 820'], ['t', '$60\\ 000 · 1,3^{t}$']])}
            ${mini('A produção daqui a 2 anos será:', ['90 000', '96 000', '101 400', '120 000'], 2, '$60\\ 000 · 1,3^{2} = 60\\ 000 · 1,69 = 101\\ 400$. O tempo $t$ está no <strong>expoente</strong>.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'Função exponencial', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Função exponencial</strong>: $f(x) = a^{x}$, com $a > 0$ e $a ≠ 1$ (domínio $ℝ$).</li>
                <li>Forma geral usada em problemas: <strong>$f(x) = k · a^{x}$</strong>, em que $k = f(0)$ é o valor inicial.</li>
                <li><strong>$a > 1$</strong>: função <strong>crescente</strong>. <strong>$0 < a < 1$</strong>: <strong>decrescente</strong>.</li>
                <li>Por que $a > 0$ e $a ≠ 1$? Base negativa não define $a^{x}$ para todo $x$ real; $a = 1$ dá função constante.</li>
                <li>Taxa $i$ por período: $a = 1 + i$ (aumento) ou $a = 1 − i$ (redução).</li>
              </ul>
            </div>
            ${W.box('Calcule f(x) = k · aˣ', W.row(W.nm('f1-k', 'k', 60000, 'any'), W.nm('f1-a', 'base a', 1.3, 'any'), W.nm('f1-x', 'x', 3, 'any')) + W.txt('f1-e', 'Lei: ') + W.txt('f1-v', 'Valor: ') + W.hint('f1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Da taxa para a base', `
          ${tbl(['Situação', 'Fator por período (a)', 'Tipo'], [['Aumento de 30% ao ano', '$1 + 0,30 = 1,3$', 'crescente'], ['Aumento de 5% ao mês', '$1,05$', 'crescente'], ['Queda de 20% ao ano', '$1 − 0,20 = 0,8$', 'decrescente'], ['Dobra a cada período', '$2$', 'crescente'], ['Cai pela metade a cada período', '${1|2}$ ou $0,5$', 'decrescente']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Leitura da lei', 'Em $P(t) = 60\\ 000 · 1,3^{t}$: <strong>60 000</strong> é o valor inicial e <strong>1,3</strong> é o fator de crescimento.', 'success')}
            ${callout('Valor inicial', '$f(0) = k · a^{0} = k$: o valor da função em $x = 0$ é sempre o coeficiente $k$.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valores numéricos', 'Para $f(x) = 2^{x}$, calcule $f(3)$, $f(0)$, $f(−2)$ e $f(1 ÷ 2)$.', [
  ['Expoente positivo', '$f(3) = 2^{3} = 8$.'],
  ['Expoente zero', '$f(0) = 2^{0} = 1$.'],
  ['Expoente negativo', '$f(−2) = 2^{−2} = {1|2^{2}} = {1|4}$.'],
  ['Expoente fracionário', '$f(1 ÷ 2) = 2^{1 ÷ 2} = √{2}$.']
], '$f(3) = 8$, $f(0) = 1$, $f(−2) = {1|4}$ e $f(1 ÷ 2) = √{2} ≈ 1,41$.'));
a.push(exemplo('Exemplo resolvido', 'Lei por dois valores', 'Uma função $f(x) = k · a^{x}$ tem $f(0) = 3$ e $f(1) = 12$. Determine $f(3)$.', [
  ['Valor inicial', '$f(0) = k = 3$.'],
  ['Base', '$f(1) = 3a = 12$ ⇒ $a = 4$.'],
  ['Lei e valor', '$f(x) = 3 · 4^{x}$ ⇒ $f(3) = 3 · 64 = 192$.']
], '$f(x) = 3 · 4^{x}$ e $f(3) = 192$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Decaimento por taxa', 'Um carro de R$ 30 000 desvaloriza 10% ao ano. Escreva a lei do valor $V$ e calcule o valor após 2 anos.', [
  ['Fator por ano', 'Queda de 10%: $a = 1 − 0,10 = 0,9$.'],
  ['Lei', '$V(t) = 30\\ 000 · 0,9^{t}$.'],
  ['Após 2 anos', '$30\\ 000 · 0,9^{2} = 30\\ 000 · 0,81 = 24\\ 300$.']
], 'O carro vale <strong>R$ 24 300</strong> depois de 2 anos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Condição sobre a base', 'Para que valores de $m$ a função $f(x) = (m − 3)^{x}$ é exponencial crescente?', [
  ['Base de função exponencial', '$m − 3 > 0$ e $m − 3 ≠ 1$.'],
  ['Crescente', 'Base maior que 1: $m − 3 > 1$.'],
  ['Resolva', '$m > 4$.']
], 'É crescente para $m > 4$ (e decrescente para $3 < m < 4$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A meta da empresa', 'Com $P(t) = 60\\ 000 · 1,3^{t}$, em qual ano a produção ultrapassa 500 000 unidades?', [
  ['Calcule ano a ano', '$1,3^{7} ≈ 6,27$ ⇒ $P(7) ≈ 376\\ 500$; $1,3^{8} ≈ 8,16$ ⇒ $P(8) ≈ 489\\ 400$.'],
  ['Compare com a meta', '$P(8) < 500\\ 000$: ainda não chegou.'],
  ['Próximo ano', '$1,3^{9} ≈ 10,60$ ⇒ $P(9) ≈ 636\\ 300 > 500\\ 000$.']
], 'Em <strong>9 anos</strong> (2034) a meta é ultrapassada. Para achar o tempo exato sem tabela será preciso usar logaritmos.', 'growth'));

a.push(pratique('Expoente negativo', 'Se $f(x) = 3^{x}$, então $f(−1)$ vale:',
  ['−3', '−1', '${1|3}$', '1', '3'], 2,
  '$3^{−1} = {1|3}$. <strong>Alternativa C.</strong>'));
a.push(pratique('Lei por dois valores', 'Uma função $f(x) = k · a^{x}$ tem $f(0) = 5$ e $f(1) = 10$. Então $f(4)$ vale:',
  ['40', '80', '160', '20', '50'], 1,
  '$k = 5$ e $5a = 10$ ⇒ $a = 2$. $f(4) = 5 · 2^{4} = 80$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Valor de um aparelho', 'Um aparelho custa R$ 2 500 e perde 20% do valor a cada ano. Seu valor, em reais, após 3 anos, é:',
  ['1 000', '1 280', '1 500', '1 600', '2 000'], 1,
  '$V(t) = 2\\ 500 · 0,8^{t}$ ⇒ $V(3) = 2\\ 500 · 0,512 = 1\\ 280$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a função exponencial engana', [
  ['Confundir com potência de x', '$x^{2}$ tem a variável na <strong>base</strong>; $2^{x}$ tem a variável no <strong>expoente</strong>.'],
  ['Usar 30% como base', 'Aumento de 30% dá base $1,3$ (e não $0,3$ nem $30$).'],
  ['Esquecer a condição da base', 'Base $1$ ou negativa não define função exponencial.'],
  ['Trocar k por a', 'Em $f(x) = k · a^{x}$: $k$ é o valor em $x = 0$ e $a$ é o fator de cada passo.']
]));
a.push(quiz([
  { q: 'Qual destas é função exponencial?', o: ['$f(x) = x^{3}$', '$f(x) = 3^{x}$', '$f(x) = 3x$', '$f(x) = √{x}$'], a: 1 },
  { q: 'Um aumento de 5% por período corresponde à base:', o: ['0,05', '0,95', '1,05', '5'], a: 2 },
  { q: 'Se $f(x) = 4 · 3^{x}$, então $f(0)$ vale:', o: ['0', '3', '4', '12'], a: 2 },
  { q: 'A função $f(x) = 0,6^{x}$ é:', o: ['crescente', 'decrescente', 'constante', 'não é exponencial'], a: 1 }
]));
a.push(fechamento([
  ['Definição', '$f(x) = a^{x}$ com $a > 0$ e $a ≠ 1$.'],
  ['Forma geral', '$f(x) = k · a^{x}$, com $k = f(0)$.'],
  ['Taxa', '$a = 1 ± i$ conforme aumenta ou diminui.']
], 'Valor inicial e fator de crescimento: duas informações que escrevem a lei.'));

pages.push({ out: BASE + 'aula-1-lei-de-formacao.html', html: K.deck({
  title: 'Função exponencial: lei de formação — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 4 e 5 · Lei de formação', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['f1-k', 'f1-a', 'f1-x'], function(){ var k = +$('f1-k').value, a = +$('f1-a').value, x = +$('f1-x').value;
    if(![k, a, x].every(isFinite) || a <= 0 || a === 1){ $('f1-e').textContent = 'base inválida: a > 0 e a ≠ 1'; $('f1-v').textContent = '—'; $('f1-h').textContent = ''; return; }
    var v = k * Math.pow(a, x);
    $('f1-e').textContent = 'f(x) = ' + pt(k) + ' · ' + pt(a) + '^x';
    $('f1-v').textContent = 'f(' + pt(x) + ') = ' + pt(v, 4);
    $('f1-h').textContent = (a > 1 ? 'a > 1: função crescente' : 'a entre 0 e 1: função decrescente') + (k === 0 ? ' (k = 0 anula a função)' : '') + '. Valor inicial f(0) = ' + pt(k) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função exponencial: <span>definição e lei de formação</span>',
  lede: 'A variável no expoente, base positiva e diferente de 1. O coeficiente k é o valor inicial e a base é o fator de cada passo (1 ± taxa).',
  badges: ['f(x) = aˣ', 'f(x) = k·aˣ', 'a = 1 ± i'],
  curve: 'M20,165 C 120,160 200,135 280,95 C 360,55 420,35 480,18',
  sections: [
    ['Definição', 'a > 0 e a ≠ 1', 'chart', 'primary', p('$f(x) = a^{x}$ definida para todo $x$ real.') + call('Lembrete', 'Base 1 daria função constante.', 'success')],
    ['Forma geral', 'f(x) = k · aˣ', 'target', 'growth', li(['$k = f(0)$: valor inicial.', '$a$: fator de cada passo.', 'Use dois pontos para achar $k$ e $a$.'])],
    ['Crescente ou decrescente', 'Comparar a com 1', 'up', 'decay', p('$a > 1$: cresce · $0 < a < 1$: decresce') + call('Exemplo', '$0,6^{x}$ decresce.', 'success')],
    ['Taxa e base', 'Do percentual ao fator', 'scale', 'success', p('$+30\\% ⇒ 1,3$ · $−20\\% ⇒ 0,8$') + call('Fórmula', '$a = 1 ± i$.', 'success')],
    ['Valores', 'Expoentes especiais', 'link', 'primary', li(['$a^{0} = 1$.', '$a^{−n} = 1 ÷ a^{n}$.', '$a^{1÷2} = √{a}$.'])],
    ['Parâmetros', 'Descobrir m, k ou a', 'check', 'growth', li(['Base $m − 3 > 1$ ⇒ crescente.', 'Dois pontos: razão $f(1) ÷ f(0) = a$.', 'Confira com um terceiro ponto.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir $x^{2}$ com $2^{x}$.', 'Usar 0,3 em vez de 1,3 no aumento de 30%.', 'Aceitar base 1 ou negativa.', 'Trocar $k$ por $a$.', 'Esquecer que $f(0) = k$.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Função exponencial <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: produção, desvalorização, dois pontos, condição da base e bactérias.',
  final: 'Valor inicial e fator de crescimento escrevem a lei: o resto é cálculo.',
  questions: [
    { badge: 'Estilo ENEM · crescimento', text: 'Uma fábrica produz hoje 60 000 unidades e cresce 30% ao ano: $P(t) = 60\\ 000 · 1,3^{t}$.', cmd: 'A produção daqui a 2 anos será de:', opts: ['78 000', '90 000', '101 400', '120 000', '131 820'], a: 2,
      sol: '<p>$1,3^{2} = 1,69$ ⇒ $60\\ 000 · 1,69 = 101\\ 400$.</p>' },
    { badge: 'Estilo ENEM · desvalorização', text: 'Um carro de R$ 40 000 desvaloriza 10% ao ano.', cmd: 'O valor do carro após 3 anos, em reais, é:', opts: ['29 160', '28 000', '30 000', '32 400', '36 000'], a: 0,
      sol: '<p>$V(3) = 40\\ 000 · 0,9^{3} = 40\\ 000 · 0,729 = 29\\ 160$.</p>' },
    { badge: 'Estilo ENEM · dois pontos', text: 'Uma função $f(x) = k · a^{x}$, com $a > 0$, tem $f(0) = 4$ e $f(2) = 36$.', cmd: 'O valor de $f(3)$ é:', opts: ['72', '96', '108', '120', '144'], a: 2,
      sol: '<p>$k = 4$; $4a^{2} = 36$ ⇒ $a = 3$. $f(3) = 4 · 27 = 108$.</p>' },
    { badge: 'Estilo ENEM · condição da base', text: 'A função $f(x) = (2m − 5)^{x}$ é exponencial e decrescente.', cmd: 'Os valores de $m$ satisfazem:', opts: ['$m > 3$', '$2,5 < m < 3$', '$m < 2,5$', '$m > 2,5$', '$m = 3$'], a: 1,
      sol: '<p>Decrescente: $0 < 2m − 5 < 1$ ⇒ $5 < 2m < 6$ ⇒ $2,5 < m < 3$.</p>' },
    { badge: 'Estilo ENEM · bactérias', text: 'Uma cultura começa com 500 bactérias, que dobram a cada hora: $N(t) = 500 · 2^{t}$.', cmd: 'Depois de 4 horas, a cultura terá:', opts: ['2 000', '4 000', '6 000', '8 000', '16 000'], a: 3,
      sol: '<p>$500 · 2^{4} = 500 · 16 = 8\\ 000$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'É função <span style="color:var(--growth);">exponencial</span>?',
  subtitle: 'Crescente, decrescente ou nem é exponencial? Observe a base e onde está a variável.',
  tpl: cClassificar({
    cats: ['Exponencial crescente', 'Exponencial decrescente', 'Não é exponencial'],
    intro: 'Cada cartão traz uma lei. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Variável no expoente, base positiva e diferente de 1: depois, compare a base com 1.',
    itens: [
      ['$f(x) = 2^{x}$', 0, 'Base $2 > 1$.'],
      ['$f(x) = ({1|3})^{x}$', 1, 'Base $1 ÷ 3$ está entre 0 e 1.'],
      ['$f(x) = x^{2}$', 2, 'A variável está na <strong>base</strong>: é função quadrática.'],
      ['$f(x) = 5 · 1,1^{x}$', 0, 'Base $1,1 > 1$ (crescimento de 10% por passo).'],
      ['$f(x) = 100 · 0,5^{x}$', 1, 'Base $0,5$: metade a cada passo.'],
      ['$f(x) = 3x$', 2, 'Função afim: variável sem expoente.'],
      ['$f(x) = 1^{x}$', 2, 'Base 1: a função vale sempre 1 (constante).'],
      ['$f(x) = (−2)^{x}$', 2, 'Base negativa: $(−2)^{1÷2}$ não é real; não é exponencial.'],
      ['$f(x) = 0,9^{x}$', 1, 'Base $0,9$: queda de 10% por passo.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Função exponencial: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valor, expoente negativo, lei, taxa e meta. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: valores, lei, taxa e meta.',
  problems: [
    { tag: 'Valor', q: 'Se $f(x) = 2^{x}$, qual o valor de $f(5)$?', a: 32, ph: 'f(5)', hint: '2 · 2 · 2 · 2 · 2.', sol: '<p>$2^{5} = 32$.</p>' },
    { tag: 'Expoente negativo', q: 'Se $f(x) = 2^{x}$, qual o valor de $f(−3)$? (decimal)', a: 0.125, ph: 'f(−3)', hint: '1 ÷ 2³.', sol: '<p>$2^{−3} = 1 ÷ 8 = 0,125$.</p>' },
    { tag: 'Lei', q: 'Uma função $f(x) = k · a^{x}$ tem $f(0) = 3$ e $f(1) = 12$. Qual o valor de $f(2)$?', a: 48, ph: 'f(2)', hint: 'k = 3 e a = 4.', sol: '<p>$3 · 4^{2} = 48$.</p>' },
    { tag: 'Taxa', q: 'A produção de 60 000 unidades cresce 30% ao ano. Qual a produção após 1 ano?', a: 78000, ph: 'unidades', hint: 'Multiplique por 1,3.', sol: '<p>$60\\ 000 · 1,3 = 78\\ 000$.</p>' },
    { tag: 'Meta', q: 'Com $P(t) = 60\\ 000 · 1,3^{t}$, em quantos anos a produção ultrapassa 500 000 pela primeira vez?', a: 9, ph: 'anos', hint: 'P(8) ≈ 489 400.', sol: '<p>$P(8) ≈ 489\\ 400$ e $P(9) ≈ 636\\ 300$: são 9 anos.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Exponencial', accent: 'growth', icon: 'parabola',
  aulas: [['Aulas 4–5', 'Função exponencial: lei de formação', 'aula-1-lei-de-formacao.html']],
  enem: 'Função exponencial no estilo ENEM', cria: 'É função exponencial?', pratica: 'Função exponencial: trilha de desafios'
}, pages };
