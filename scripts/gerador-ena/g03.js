// Unidade 3 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cMemoria } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/03-conjuntos-contagem/', key = 'c3', brand = 'Conjuntos e Contagem', cap = 'Capítulo 3';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'decay',
  h1: 'Conjuntos: <span>contar sem repetir</span>',
  lede: 'Notação, inclusão–exclusão, número de termos, múltiplos em intervalos e subconjuntos: a conta é curta; o perigo está nas extremidades.',
  badges: ['3× nas provas 2025–26', '|A∪B| = |A|+|B|−|A∩B|', '2ⁿ subconjuntos', '(b−a)/r + 1'],
  curve: 'M20,150 C 100,150 160,110 240,100 C 320,90 400,50 480,30',
  sections: [
    ['Notação', 'A linguagem', 'book', 'decay', tb(['Símbolo', 'Lê-se'], [['$x ∈ A$', 'pertence'], ['$A ⊂ B$', 'contido'], ['$A ∪ B$', 'A <strong>ou</strong> B'], ['$A ∩ B$', 'A <strong>e</strong> B'], ['$A ∖ B$', 'em A, não em B']])],
    ['Fórmulas', 'Inclusão–exclusão', 'scale', 'primary', fx('|A∪B| = |A| + |B| − |A∩B|') + fx('|A∪B∪C| = ∑|A| − ∑|A∩B| + |A∩B∩C|') + call('Nenhum dos dois', '$"nenhum" = U − |A∪B|$.', 'success')],
    ['Contagem', 'Número de termos', 'chart', 'growth', fx('"termos" = {último − primeiro|razão} + 1') + call('Múltiplos de k em [m, n]', '$⌊n/k⌋ − ⌈m/k⌉ + 1$. Ex.: múltiplos de 7 de 100 a 500 → 57.', 'success')],
    ['Contagem', 'Intervalos de inteiros', 'target', 'success', tb(['Intervalo', 'Quantidade'], [['$[a, b]$', '$b − a + 1$'], ['$(a, b)$', '$b − a − 1$'], ['$[a, b)$ / $(a, b]$', '$b − a$']])],
    ['Contagem', 'Múltiplos comuns', 'link', 'primary', p('Múltiplo de $a$ <strong>e</strong> de $b$ = múltiplo do <strong>MMC</strong>.') + call('ENA 2026 Q19', 'múltiplos de 10 ou 15 de 30 a 2025: $200 + 134 − 67 = 267$.', 'success')],
    ['Subconjuntos', 'Cada elemento entra ou não', 'coin', 'decay', prop([['2ⁿ', 'todos os subconjuntos'], ['2ⁿ − 1', 'não vazios / próprios']]) + fx('C(n,k) = {n!|k!(n−k)!}') + call('ENA 2025 Q30', '$2^7 = 128 < 198 ≤ 256 = 2^8$ → $n = 8$.', 'success')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o “+1” ao contar termos de um intervalo.', 'Usar o primeiro/último múltiplo <strong>fora</strong> do intervalo (primeiro múltiplo de 8 a partir de 33 é 40; último até 999 é 992).', 'Confundir $(a,b)$ com $[a,b]$: extremos abertos não entram.', 'Interseção de múltiplos: é o <strong>MMC</strong>, não o produto.', 'Somar $|A| + |B|$ sem tirar a interseção.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Conjuntos <span style="color:var(--decay);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: pesquisa com dois grupos, múltiplos em intervalos, união de múltiplos, subconjuntos e o menor n que comporta uma lista.',
  final: 'Inclusão–exclusão, extremidades e potências de 2: três ideias que cobrem o capítulo.',
  questions: [
    { badge: 'Estilo ENA · inclusão–exclusão', text: 'Em um grupo de <strong>60 pessoas</strong>, 35 falam inglês, 28 falam espanhol e 10 não falam nenhum dos dois idiomas.', cmd: 'Quantas pessoas falam os dois idiomas?', opts: ['8', '10', '13', '15', '18'], a: 2,
      sol: '<p>Falam pelo menos um: $60 − 10 = 50$. Então $35 + 28 − x = 50 ⇒ x = 13$.</p>' },
    { badge: 'Estilo ENA · múltiplos de 12 ou 18', text: 'Considere os inteiros de <strong>100 a 500</strong>, inclusive.', cmd: 'Quantos deles são múltiplos de 12 <strong>ou</strong> de 18?', opts: ['40', '42', '44', '46', '55'], a: 2,
      sol: '<p>Múltiplos de 12: $⌊500/12⌋ − ⌈100/12⌉ + 1 = 41 − 9 + 1 = 33$. De 18: $27 − 6 + 1 = 22$. De $mmc = 36$: $13 − 3 + 1 = 11$.</p><p>$33 + 22 − 11 = 44$.</p>' },
    { badge: 'Estilo ENA · união de múltiplos', text: '$X = \\{n ∈ Z ∣ 10 ≤ n ≤ 500\\}$, $A$ = múltiplos de 7 de $X$ e $B$ = múltiplos de 11 de $X$.', cmd: 'O número de elementos de $A ∪ B$ é:', opts: ['100', '104', '109', '115', '121'], a: 2,
      sol: '<p>$|A| = 71 − 2 + 1 = 70$ (14, …, 497). $|B| = 45 − 1 + 1 = 45$ (11, …, 495). $A ∩ B$ = múltiplos de 77: $6 − 1 + 1 = 6$ (77, …, 462).</p><p>$70 + 45 − 6 = 109$.</p>' },
    { badge: 'Estilo ENA · subconjuntos', text: 'Um conjunto tem <strong>6 elementos</strong>.', cmd: 'Quantos subconjuntos <strong>não vazios</strong> com <strong>no máximo 2 elementos</strong> ele possui?', opts: ['15', '20', '21', '22', '63'], a: 2,
      sol: '<p>Com 1 elemento: $C(6,1) = 6$. Com 2: $C(6,2) = 15$. Total: $6 + 15 = 21$.</p>' },
    { badge: 'Estilo ENA · potências de 2', text: 'Um aluno escreveu corretamente, sem repetição, <strong>1000 subconjuntos</strong> distintos de um conjunto com $n$ elementos.', cmd: 'O menor valor possível de $n$ é:', opts: ['8', '9', '10', '11', '12'], a: 2,
      sol: '<p>Precisamos $2^n ≥ 1000$. Como $2^9 = 512 < 1000 ≤ 1024 = 2^{10}$, o menor é $n = 10$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'success',
  h1: 'Memória dos <span style="color:var(--decay);">conjuntos</span>',
  subtitle: 'Vire duas cartas por vez e junte cada <strong>expressão</strong> com o seu <strong>significado</strong>. Fixa o vocabulário e as fórmulas do capítulo.',
  tpl: cMemoria({
    intro: 'Clique em duas cartas. Se formarem um par (expressão + significado), elas ficam verdes. Ache os 8 pares.',
    final: 'Essas oito ideias resolvem qualquer contagem de elementos do ENA.',
    pares: [
      ['$|A ∪ B|$', '$|A| + |B| − |A ∩ B|$'], ['Subconjuntos de um conjunto de $n$ elementos', '$2^n$'], ['Número de termos de uma lista', '$(b − a)/r + 1$'],
      ['Inteiros em $[a, b]$', '$b − a + 1$'], ['Inteiros em $(a, b)$', '$b − a − 1$'], ['Múltiplos de 10 e 15 ao mesmo tempo', 'Múltiplos de 30'],
      ['$A ∖ B$', 'Elementos de $A$ que não estão em $B$'], ['Nenhum dos dois', 'Total − $|A ∪ B|$']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Contagem: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de inclusão–exclusão, intervalos e subconjuntos. Responda com número; duas tentativas por etapa e dica disponível.',
  final: 'Contar com cuidado nas pontas e subtrair a interseção: com isso o capítulo está dominado.',
  problems: [
    { tag: 'Inclusão–exclusão', q: 'Em 100 pessoas, 60 gostam de A, 50 gostam de B e 20 não gostam de nenhum. Quantas gostam dos dois?', a: 30, hint: 'Pelo menos um: $100 − 20 = 80$.', sol: '<p>$60 + 50 − x = 80 ⇒ x = 30$.</p>' },
    { tag: 'Múltiplos', q: 'Quantos inteiros de 1 a 100 são múltiplos de 4 <strong>ou</strong> de 6?', a: 33, hint: 'Interseção = múltiplos de $mmc(4,6) = 12$.', sol: '<p>$25 + 16 − 8 = 33$.</p>' },
    { tag: 'Subconjuntos', q: 'Quantos subconjuntos não vazios tem um conjunto de 5 elementos?', a: 31, hint: '$2^n − 1$.', sol: '<p>$2^5 − 1 = 31$.</p>' },
    { tag: 'Intervalo fechado', q: 'Quantos inteiros há em $[−3, 10]$?', a: 14, hint: '$b − a + 1$.', sol: '<p>$10 − (−3) + 1 = 14$.</p>' },
    { tag: 'Intervalo aberto', q: 'Quantos inteiros há em $(−3, 10)$?', a: 12, hint: '$b − a − 1$.', sol: '<p>$10 − (−3) − 1 = 12$.</p>' },
    { tag: 'Múltiplos em intervalo', q: 'Quantos múltiplos de 7 existem de 100 a 500, inclusive?', a: 57, hint: 'Primeiro $105 = 7·15$, último $497 = 7·71$.', sol: '<p>$71 − 15 + 1 = 57$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
