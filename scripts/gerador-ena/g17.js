// Unidade 17 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/17-conjuntos-numericos/', key = 'c17', brand = 'Conjuntos Numéricos', cap = 'Conjuntos numéricos';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Conjuntos numéricos: <span>quem é quem na reta</span>',
  lede: 'Item “l” do edital. N, Z, Q, I e R, frações e dízimas, irracionais, comparação de números e intervalos da reta real.',
  badges: ['Edital: item l', 'N ⊂ Z ⊂ Q ⊂ R', 'Geratriz', 'Intervalos'],
  curve: 'M20,150 C 100,150 160,110 240,100 C 320,90 400,50 480,28',
  sections: [
    ['Hierarquia', 'Os conjuntos', 'sigma', 'primary', fx('N ⊂ Z ⊂ Q ⊂ R   R = Q ∪ I') + p('Naturais (com 0), inteiros, racionais $p/q$, reais. Irracionais: $√n$ ($n$ não quadrado perfeito), $π$, decimais infinitos sem período.')],
    ['Racionais', 'Fração e dízima', 'numbers', 'growth', fx('0,aaa… = {a|9}   0,abab… = {ab|99}   0,abbb… = {ab − a|90}') + call('Exemplos', '$0,1666… = 1/6$; $0,36… = 4/11$; $0,999… = 1$.', 'success')],
    ['Irracionais', '√2 e propriedades', 'bulb', 'decay', p('Prova por absurdo: $p^2 = 2q^2$ ⇒ $p$ e $q$ pares. Racional não nulo × irracional = irracional; irracional ± irracional pode ser racional.')],
    ['Operações', 'Frações', 'scale', 'success', fx('{a|b} ± {c|d} = {ad ± bc|bd}   {a|b} ÷ {c|d} = {ad|bc}')],
    ['Comparar', 'Quadrados e inteiros consecutivos', 'chart', 'primary', p('Positivos: compare $x^2$ e $y^2$. $n^2 < m < (n+1)^2 ⇒ n < √m < n + 1$.') + call('Exemplo', '$3√2 = √{18} > 2√3 = √{12}$; $7 < √{50} < 8$.', 'success')],
    ['Intervalos', 'Notação', 'link', 'growth', tb(['Notação', 'Condição'], [['$[a, b]$', '$a ≤ x ≤ b$'], ['$(a, b)$', '$a < x < b$'], ['$[a, +∞)$', '$x ≥ a$']]) + p('Infinito é sempre aberto. Inteiros: $[a,b]$ → $b − a + 1$; $(a,b)$ → $b − a − 1$.')],
    ['Operações', 'União, interseção, diferença', 'venn', 'decay', p('“e” → interseção; “ou” → união; $A ∖ B$: em $A$ e não em $B$ (extremo de $B$ que pertence a $B$ sai de $A$).')],
    ['Módulo', 'Distância', 'target', 'success', fx('∣x − c∣ < r ⇔ c − r < x < c + r') + p('$∣x − c∣ > r ⇔ x < c − r$ ou $x > c + r$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Achar que toda raiz é irracional ($√{16} = 4$).', 'Dízima × decimal infinito sem período.', 'Antiperíodo na geratriz ($0,1666… = 15/90$).', 'Colchete no infinito.', 'Esquecer de inverter a desigualdade ao dividir por negativo.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Conjuntos numéricos <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: classificação, geratriz, intervalos, raiz entre inteiros e comparação de números.',
  final: 'Classificar bem e escrever o intervalo com precisão resolvem este item do edital.',
  questions: [
    { badge: 'Estilo ENA · irracionais', text: 'Considere os números abaixo.', cmd: 'Qual deles é <strong>irracional</strong>?', opts: ['$√{81}$', '$√{0,25}$', '$√{12}$', '$1,2121…$', '$−{7|3}$'], a: 2,
      sol: '<p>$√{81} = 9$ e $√{0,25} = 0,5$ são racionais; $1,2121…$ é dízima periódica (racional); $−7/3$ é fração. $√{12} = 2√3$ não é raiz exata: irracional.</p>' },
    { badge: 'Estilo ENA · geratriz', text: 'Considere a dízima periódica $0,1888…$ (o 8 se repete).', cmd: 'Sua fração geratriz é:', opts: ['${9|50}$', '${17|90}$', '${19|100}$', '${2|11}$', '${1|5}$'], a: 1,
      sol: '<p>Antiperíodo 1, período 8: $0,1888… = {18 − 1|90} = {17|90}$.</p>' },
    { badge: 'Estilo ENA · intervalos', text: 'Sejam $A = [−4, 1)$ e $B = (−1, 6]$.', cmd: 'Quantos números inteiros pertencem a $A ∪ B$?', opts: ['9', '10', '11', '12', '13'], a: 2,
      sol: '<p>$A ∪ B = [−4, 6]$ (pois $A$ vai até 1, exclusive, mas $B$ começa em $−1$, exclusive: juntos cobrem tudo). Inteiros: $−4$ a $6$ → $6 − (−4) + 1 = 11$.</p>' },
    { badge: 'Estilo ENA · raiz entre inteiros', text: 'O número $√{115}$ está entre dois inteiros consecutivos.', cmd: 'Quais são eles?', opts: ['9 e 10', '10 e 11', '11 e 12', '12 e 13', '8 e 9'], a: 1,
      sol: '<p>$10^2 = 100 < 115 < 121 = 11^2$, então $10 < √{115} < 11$.</p>' },
    { badge: 'Estilo ENA · comparação', text: 'Considere os números $5√2$, $7$, $4√3$, $√{51}$ e $3√6$.', cmd: 'Qual deles é o <strong>menor</strong>?', opts: ['$5√2$', '$7$', '$4√3$', '$√{51}$', '$3√6$'], a: 2,
      sol: '<p>Elevando ao quadrado: $50$, $49$, $48$, $51$, $54$. O menor quadrado é $48$: logo o menor número é $4√3$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Que tipo de <span style="color:var(--growth);">número é?</span>',
  subtitle: 'Classifique cada número na categoria mais específica: natural, inteiro negativo, racional não inteiro ou irracional.',
  tpl: cClassificar({
    cats: ['Natural', 'Inteiro negativo', 'Racional não inteiro', 'Irracional'],
    intro: 'Escolha a categoria <strong>mais específica</strong> de cada número e clique em <strong>Conferir</strong>.',
    final: 'Antes de operar, saiba onde o número mora.',
    itens: [
      ['$7$', 0, '7 é natural.'], ['$−5$', 1, 'Inteiro negativo.'], ['${3|4}$', 2, 'Fração: racional não inteiro.'], ['$√2$', 3, 'Raiz não exata: irracional.'],
      ['$√{25}$', 0, '$√{25} = 5$: natural.'], ['$0,444…$', 2, 'Dízima periódica $= 4/9$: racional não inteiro.'], ['$π$', 3, 'Irracional.'], ['$−√{16}$', 1, '$−√{16} = −4$: inteiro negativo.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Conjuntos numéricos: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas rápidas, com decimais onde indicado.',
  final: 'Geratriz, intervalos e aproximações: o essencial deste item do edital.',
  problems: [
    { tag: 'Intervalo', q: 'Quantos inteiros pertencem a $(−4, 7]$?', a: 11, hint: 'O $−4$ não entra; o 7 entra.', sol: '<p>De $−3$ a $7$: $11$ inteiros.</p>' },
    { tag: 'Raiz', q: '$√{50}$ está entre $n$ e $n + 1$. Qual o valor de $n$?', a: 7, hint: '$49 < 50 < 64$.', sol: '<p>$7 < √{50} < 8$ → $n = 7$.</p>' },
    { tag: 'Frações', q: 'Calcule $({1|2} + {1|3}) ÷ {5|6}$.', a: 1, hint: '${1|2} + {1|3} = {5|6}$.', sol: '<p>${5|6} ÷ {5|6} = 1$.</p>' },
    { tag: 'Decimal', q: 'Qual o valor decimal de $7/8$?', a: 0.875, tol: 0.001, hint: '$7 ÷ 8$.', sol: '<p>$0,875$ (denominador só com fator 2).</p>' },
    { tag: 'Dízima', q: 'Qual o valor de $0,999…$?', a: 1, hint: 'Geratriz $9/9$.', sol: '<p>$0,999… = 1$.</p>' },
    { tag: 'Módulo', q: 'Quantos inteiros satisfazem $∣x − 3∣ ≤ 2$?', a: 5, hint: '$[1, 5]$.', sol: '<p>$1, 2, 3, 4, 5$: <strong>5</strong> inteiros.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
