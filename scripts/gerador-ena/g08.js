// Unidade 8 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cMemoria } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/08-sequencias-pa-pg/', key = 'c8', brand = 'Sequências: PA e PG', cap = 'Capítulo 8';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'growth',
  h1: 'Sequências: <span>PA, PG e somas</span>',
  lede: 'Quatro questões em 60 (e uma de geometria que usa PA): soma que vira termo, soma geométrica, PG de termos positivos e sequências recursivas.',
  badges: ['4× nas provas 2025–26', 'aₙ = Sₙ − Sₙ₋₁', 'S = a₁(qⁿ−1)/(q−1)', 'Calcule os primeiros termos'],
  curve: 'M20,165 C 100,160 170,140 240,100 C 320,55 400,40 480,20',
  sections: [
    ['PA', 'Termo e soma', 'scale', 'primary', fx('a_n = a_1 + (n−1)r   S_n = {n(a_1 + a_n)|2}') + p('Extremos equidistantes somam igual. Três termos: $x − r, x, x + r$.')],
    ['PA', 'De Sₙ para aₙ', 'bulb', 'success', fx('a_1 = S_1   a_n = S_n − S_{n−1}') + call('ENA 2026 Q16', '$S_n = 3n^2 + 4n$ → $a_n = 6n + 1$ → $a_{10} = 61$.', 'success')],
    ['PA', 'Somas notáveis', 'chart', 'growth', fx('1 + ⋯ + n = {n(n+1)|2}') + p('Ímpares: $n^2$ · pares: $n(n+1)$ · quadrados: $n(n+1)(2n+1)/6$ · cubos: $(n(n+1)/2)^2$.')],
    ['PG', 'Termo e soma', 'link', 'decay', fx('a_n = a_1 q^{n−1}   S_n = a_1{q^n − 1|q − 1}') + p('Termo médio $b^2 = ac$. Três termos: $x/q, x, xq$.')],
    ['PG', 'Soma infinita', 'target', 'primary', fx('S_∞ = {a_1|1 − q}   ∣q∣ < 1') + call('Exemplo', '$1 + 1/2 + 1/4 + ⋯ = 2$; $1 + 1/3 + 1/9 + ⋯ = 3/2$.', 'success')],
    ['PG', 'Soma “nua”', 'clock', 'growth', fx('1 + q + ⋯ + q^{n−1} = {q^n − 1|q − 1}') + call('ENA 2026 Q23', 'primeiro termo $1/2$, razão 5: $S_n = (5^n − 1)/8$.', 'success')],
    ['Recursivas', 'Calcule antes de generalizar', 'warn', 'danger', p('Calcule 6–8 termos e procure o padrão (período, dobro, potência de 2).') + call('ENA 2026 Q29', '$S_{2k+1} = (2^k, 2^k)$ → $S_{11} = (32, 32)$.', 'success')],
    ['Geometria', 'Lados em PA', 'coin', 'primary', p('Triângulo retângulo com lados em PA: lados $3r, 4r, 5r$.') + call('ENA 2025 Q15', '$cos α + cos β = 3/5 + 4/5 = 7/5$.', 'success')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir $S_n$ com $a_n$ (pedem o termo, dão a soma).', 'Contar mal $n$: de 3 a 99 de 3 em 3 são 33 termos.', 'Aceitar razão negativa em PG de termos positivos.', 'Usar $S_∞$ sem $∣q∣ < 1$.', 'Generalizar uma recursiva sem calcular os primeiros termos.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Sequências <span style="color:var(--growth);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: de Sₙ para aₙ, soma de PA, três termos em PA, soma de PG e série geométrica infinita.',
  final: 'Diferença de somas, extremos que somam igual e soma geométrica: o kit completo de sequências.',
  questions: [
    { badge: 'Estilo ENA · de Sₙ para aₙ', text: 'A soma dos $n$ primeiros termos de uma sequência é $S_n = 2n^2 + 3n$.', cmd: 'O oitavo termo é:', opts: ['29', '31', '33', '35', '152'], a: 2,
      sol: '<p>$a_8 = S_8 − S_7 = (128 + 24) − (98 + 21) = 152 − 119 = 33$. Pela fórmula: $a_n = 2(2n − 1) + 3 = 4n + 1$ → $a_8 = 33$.</p><p class="hint">152 é a soma dos 8 primeiros, não o oitavo termo.</p>' },
    { badge: 'Estilo ENA · soma de PA', text: 'Uma PA tem 31 termos, com $a_1 = 4$ e $a_{31} = 94$.', cmd: 'A soma de todos os termos é:', opts: ['1450', '1519', '1530', '1581', '3038'], a: 1,
      sol: '<p>$S = {31(4 + 94)|2} = 31 · 49 = 1519$.</p>' },
    { badge: 'Estilo ENA · três termos em PA', text: 'Três números em PA têm soma $24$ e produto $440$.', cmd: 'O maior deles é:', opts: ['9', '10', '11', '12', '13'], a: 2,
      sol: '<p>Seja $x − r, x, x + r$: $3x = 24 ⇒ x = 8$. Produto: $8(64 − r^2) = 440 ⇒ r^2 = 9 ⇒ r = ±3$. Os números são $5, 8, 11$: o maior é <strong>11</strong>.</p>' },
    { badge: 'Estilo ENA · PG de termos positivos', text: 'Uma PG de termos positivos tem $a_1 = 3$ e $a_3 = 27$.', cmd: 'A soma dos quatro primeiros termos é:', opts: ['81', '90', '120', '121', '160'], a: 2,
      sol: '<p>$q^2 = 27/3 = 9 ⇒ q = 3$ (termos positivos). Termos: $3, 9, 27, 81$; soma $= 120$. (Fórmula: $3·{3^4 − 1|2} = 120$.)</p>' },
    { badge: 'Estilo ENA · soma infinita', text: 'Considere a soma infinita $0,3 + 0,03 + 0,003 + ⋯$.', cmd: 'Seu valor é:', opts: ['${3|10}$', '${1|3}$', '${1|4}$', '${1|2}$', '${2|3}$'], a: 1,
      sol: '<p>PG com $a_1 = 0,3$ e $q = 0,1$: $S = {0,3|1 − 0,1} = {0,3|0,9} = {1|3}$ (é a dízima $0,333…$).</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: '',
  h1: 'Memória das <span style="color:var(--primary);">fórmulas de sequências</span>',
  subtitle: 'Vire duas cartas por vez: junte cada <strong>nome</strong> à sua <strong>fórmula</strong>. Oito pares para a prova.',
  tpl: cMemoria({
    intro: 'Clique em duas cartas. Se formarem um par (nome + fórmula), ficam verdes.',
    final: 'Com essas oito fórmulas e a ideia de calcular os primeiros termos, o capítulo está fechado.',
    pares: [
      ['Termo geral da PA', '$a_n = a_1 + (n − 1)r$'], ['Soma dos termos da PA', '$S_n = n(a_1 + a_n)/2$'], ['Termo geral da PG', '$a_n = a_1 q^{n−1}$'],
      ['Soma de $n$ termos da PG ($q ≠ 1$)', '$a_1(q^n − 1)/(q − 1)$'], ['Soma infinita ($∣q∣ < 1$)', '$a_1/(1 − q)$'], ['$1 + 2 + ⋯ + n$', '$n(n + 1)/2$'],
      ['Soma dos $n$ primeiros ímpares', '$n^2$'], ['Termo a partir da soma', '$a_n = S_n − S_{n−1}$']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Sequências: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de PA, PG e somas. Responda com número; duas tentativas por etapa e dica disponível.',
  final: 'Termo, soma e padrão: os três verbos das sequências.',
  problems: [
    { tag: 'PA · termo', q: 'Em uma PA com $a_1 = 5$ e $r = 3$, qual o valor de $a_{20}$?', a: 62, hint: '$a_{20} = a_1 + 19r$.', sol: '<p>$5 + 19·3 = 62$.</p>' },
    { tag: 'PA · soma', q: 'Na mesma PA ($a_1 = 5$, $r = 3$), qual a soma dos 20 primeiros termos?', a: 670, hint: '$S = 20(5 + 62)/2$.', sol: '<p>$20 · 67 / 2 = 670$.</p>' },
    { tag: 'De Sₙ para aₙ', q: 'Se $S_n = n^2 + 2n$, quanto vale $a_5$?', a: 11, hint: '$a_5 = S_5 − S_4$.', sol: '<p>$S_5 = 35$ e $S_4 = 24$: $a_5 = 11$.</p>' },
    { tag: 'Soma notável', q: 'Qual a soma dos múltiplos de 3 de 1 a 100?', a: 1683, hint: 'São $3, 6, …, 99$: 33 termos.', sol: '<p>$S = 33(3 + 99)/2 = 1683$.</p>' },
    { tag: 'PG · soma', q: 'Qual a soma dos 6 primeiros termos da PG $2, 6, 18, …$?', a: 728, hint: '$q = 3$: $S = 2(3^6 − 1)/2$.', sol: '<p>$S = 2·(729 − 1)/2 = 728$.</p>' },
    { tag: 'PG · soma infinita', q: 'Qual o valor de $1 + {1|3} + {1|9} + ⋯$? (decimal)', a: 1.5, tol: 0.001, hint: '$a_1/(1 − q)$ com $q = 1/3$.', sol: '<p>$1/(1 − 1/3) = 3/2 = 1,5$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
