// Unidade 10 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cVF } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/10-probabilidade/', key = 'c10', brand = 'Probabilidade', cap = 'Capítulo 10';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'decay',
  h1: 'Probabilidade: <span>contar e dividir</span>',
  lede: 'Três questões em 60, todas equiprováveis: a conta é contagem + fração. Complementar, união, condicional, sorteios com e sem reposição.',
  badges: ['3× nas provas 2025–26', 'P = fav/pos', '1 − P(nenhum)', 'Sem reposição: denominador cai'],
  curve: 'M20,150 C 80,110 130,160 190,110 C 250,60 310,120 370,80 C 420,50 450,40 480,24',
  sections: [
    ['Regras', 'Definição', 'scale', 'decay', fx('P = {"favoráveis"|"possíveis"}') + fx('P(Ā) = 1 − P(A)   P(A∪B) = P(A) + P(B) − P(A∩B)') + p('Independentes: $P(A∩B) = P(A)P(B)$. Condicional: $P(A|B) = P(A∩B)/P(B)$.')],
    ['Dados', 'Soma de dois dados', 'dice', 'growth', tb(['Soma', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], [['Formas (de 36)', '1', '2', '3', '4', '5', '6', '5', '4', '3', '2', '1']]) + call('ENA 2025 Q25', 'Soma 7: $6/36 = 1/6$.', 'success')],
    ['Moedas', 'Pelo menos uma cara', 'coin', 'primary', fx('"pelo menos uma" = 1 − (1/2)^n') + p('Exatamente $k$ caras: $C(n,k)/2^n$. 3 lançamentos, 2 caras: $3/8$.')],
    ['Sorteios', 'Com e sem reposição', 'chart', 'decay', p('<strong>Com</strong>: denominadores iguais. <strong>Sem</strong>: o denominador cai.') + call('ENA 2026 Q6', '$8/15 · 7/14 · 6/13 = 8/65$ ou $C(8,3)/C(15,3)$.', 'success')],
    ['Cubo', 'Três faces', 'target', 'success', p('$C(6,3) = 20$ ternas; 8 concorrem num vértice.') + call('ENA 2026 Q26', '$1 − 8/20 = 3/5$.', 'success')],
    ['Extras', 'Binomial e geométrica', 'bulb', 'growth', fx('P(k) = C(n,k)p^k(1−p)^{n−k}') + p('Probabilidade geométrica: razão entre áreas ou comprimentos.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Contar (1,6) e (6,1) como o mesmo resultado nos dois dados.', 'Confundir “pelo menos um” (complementar) com “exatamente um”.', 'Esquecer de diminuir o denominador sem reposição.', 'Misturar ternas não ordenadas no numerador com sequências ordenadas no denominador.', 'Não simplificar no meio do caminho ($7/14 = 1/2$).'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Probabilidade <span style="color:var(--decay);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: moeda com “pelo menos”, urna sem reposição, soma prima em dois dados, múltiplos em um intervalo e filas.',
  final: 'Complementar, contar com cuidado e simplificar: o essencial da probabilidade do ENA.',
  questions: [
    { badge: 'Estilo ENA · moeda', text: 'Uma moeda honesta é lançada <strong>5 vezes</strong>.', cmd: 'A probabilidade de obter <strong>pelo menos duas caras</strong> é:', opts: ['1/2', '5/8', '3/4', '13/16', '15/16'], a: 3,
      sol: '<p>Complementar: $1 − P(0\\ caras) − P(1\\ cara) = 1 − {1|32} − {5|32} = {26|32} = {13|16}$.</p>' },
    { badge: 'Estilo ENA · sem reposição', text: 'Uma urna tem <strong>4 bolas brancas</strong> e <strong>6 pretas</strong>. Duas bolas são retiradas sem reposição.', cmd: 'A probabilidade de as duas serem de cores <strong>diferentes</strong> é:', opts: ['12/25', '8/15', '1/2', '6/11', '3/5'], a: 1,
      sol: '<p>Branca depois preta: ${4|10}·{6|9}$; preta depois branca: ${6|10}·{4|9}$. Soma: $2 · {24|90} = {48|90} = {8|15}$. (Por combinação: ${4·6|C(10,2)} = {24|45} = {8|15}$.)</p>' },
    { badge: 'Estilo ENA · dois dados', text: 'Dois dados honestos são lançados.', cmd: 'A probabilidade de a soma ser um <strong>número primo</strong> é:', opts: ['1/3', '5/12', '1/2', '7/18', '11/36'], a: 1,
      sol: '<p>Somas primas: 2 (1 forma), 3 (2), 5 (4), 7 (6) e 11 (2) → $1 + 2 + 4 + 6 + 2 = 15$ casos em 36: ${15|36} = {5|12}$.</p>' },
    { badge: 'Estilo ENA · união', text: 'Sorteia-se um inteiro de <strong>1 a 30</strong>.', cmd: 'A probabilidade de ser múltiplo de 4 <strong>ou</strong> de 6 é:', opts: ['1/4', '3/10', '1/3', '7/20', '2/5'], a: 2,
      sol: '<p>Múltiplos de 4: $⌊30/4⌋ = 7$. De 6: $5$. De $mmc = 12$: $2$. $7 + 5 − 2 = 10$ → ${10|30} = {1|3}$.</p>' },
    { badge: 'Estilo ENA · fila', text: 'Cinco pessoas (A, B, C, D e E) formam uma fila ao acaso.', cmd: 'A probabilidade de A e B ficarem <strong>juntas</strong> é:', opts: ['1/5', '1/4', '2/5', '1/2', '3/5'], a: 2,
      sol: '<p>Total: $5! = 120$. Juntas: bloco AB (2 ordens) + 3 pessoas = 4 elementos → $2 · 4! = 48$. $P = {48|120} = {2|5}$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Verdadeiro ou falso: <span style="color:var(--decay);">probabilidade</span>',
  subtitle: 'Seis afirmações sobre dados, moedas e sorteios. Decida e leia a justificativa — as armadilhas do capítulo aparecem disfarçadas.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Resultados ordenados, complementar, denominador que cai e independência: as quatro ideias.',
    afirmacoes: [
      ['Ao lançar dois dados, os resultados $(1, 6)$ e $(6, 1)$ contam como um único resultado.', false, 'Falsa: são resultados diferentes (dados distintos). O espaço amostral tem 36 pares, não 21.'],
      ['A probabilidade de “pelo menos uma cara” em 4 lançamentos de moeda é $1 − (1/2)^4$.', true, 'Verdadeira: complementar de “nenhuma cara” (todas coroas, probabilidade $1/16$).'],
      ['Em sorteio <strong>sem reposição</strong>, o denominador não muda de uma retirada para outra.', false, 'Falsa: a cada retirada sobra uma bola a menos; o denominador diminui ($8/15 · 7/14 · 6/13$).'],
      ['Se $A$ e $B$ são independentes, então $P(A ∩ B) = P(A) · P(B)$.', true, 'Verdadeira: é a definição de independência.'],
      ['Ao lançar dois dados, a soma 7 é a mais provável.', true, 'Verdadeira: há 6 formas de obter 7 (e no máximo 5 para as outras somas).'],
      ['Uma probabilidade pode valer 1,2 se o evento for muito provável.', false, 'Falsa: toda probabilidade está entre 0 e 1.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Probabilidade: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Seis etapas de contagem e probabilidade. Responda com número (decimal onde indicado); duas tentativas e dica por etapa.',
  final: 'Contagem organizada e complementar: o mesmo kit, em contextos diferentes.',
  problems: [
    { tag: 'Dois dados', q: 'Quantos resultados dos <strong>dois dados</strong> (entre os 36) têm soma 9?', a: 4, hint: 'Liste: (3,6), …', sol: '<p>$(3,6), (4,5), (5,4), (6,3)$ → <strong>4</strong>.</p>' },
    { tag: 'Moeda', q: 'Em 3 lançamentos, quantos dos 8 resultados têm <strong>exatamente 2 caras</strong>?', a: 3, hint: '$C(3, 2)$.', sol: '<p>$C(3, 2) = 3$ (CCK, CKC, KCC).</p>' },
    { tag: 'Urna', q: 'Urna com 5 bolas vermelhas e 3 azuis; 2 retiradas sem reposição. Probabilidade (decimal) de <strong>ambas vermelhas</strong>?', a: 0.3571, tol: 0.001, hint: '${5|8}·{4|7}$.', sol: '<p>${20|56} = {5|14} ≈ 0,357$.</p>' },
    { tag: 'Complementar', q: 'Em 4 lançamentos de moeda, a probabilidade (decimal) de <strong>pelo menos uma cara</strong>?', a: 0.9375, tol: 0.001, hint: '$1 − (1/2)^4$.', sol: '<p>$1 − {1|16} = {15|16} = 0,9375$.</p>' },
    { tag: 'Combinação', q: 'Nas pedras de 1 a 15 há 8 ímpares. De quantas maneiras se escolhem <strong>3 pedras ímpares</strong> (sem ordem)?', a: 56, hint: '$C(8, 3)$.', sol: '<p>$C(8, 3) = {8·7·6|6} = 56$.</p>' },
    { tag: 'ENA 2026 Q6', q: 'Qual a probabilidade (decimal) de os três números serem ímpares, retirando 3 das 15 pedras sem devolver?', a: 0.1231, tol: 0.001, hint: '$C(8,3)/C(15,3) = 56/455$.', sol: '<p>${56|455} = {8|65} ≈ 0,1231$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
