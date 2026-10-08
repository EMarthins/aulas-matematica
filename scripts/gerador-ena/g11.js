// Unidade 11 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cDetetive } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/11-estatistica/', key = 'c11', brand = 'Estatística Descritiva', cap = 'Capítulo 11';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'growth',
  h1: 'Estatística: <span>resumindo dados</span>',
  lede: 'Duas questões em 60 e pontos baratos: média, mediana e moda, tabela de frequências, variância, desvio padrão e o efeito das transformações.',
  badges: ['2× nas provas 2025–26', 'Ordene antes da mediana', 'Média ponderada', 'σ: +c não muda'],
  curve: 'M20,150 C 90,140 150,90 220,100 C 290,110 360,50 480,28',
  sections: [
    ['Posição', 'Média, mediana, moda', 'chart', 'growth', fx('x̄ = {∑x|n}   "ponderada:" {∑ f x|∑ f}') + p('Mediana: <strong>ordene</strong>; $n$ ímpar → termo central; $n$ par → média dos dois centrais. Moda: mais frequente.')],
    ['Tabela', 'Mediana por posições', 'book', 'primary', p('Some as frequências, ache as posições centrais e acumule.') + call('ENA 2025 Q10', '$n = 14$: 7ª e 8ª valem 7 e 8 → $x = 3$ e $y = 2$.', 'success')],
    ['2026', 'Idades de 11 pessoas', 'target', 'success', p('Soma 275 → média 25; mediana é o 6º termo (22); moda 21 (3 vezes).') + call('ENA 2026 Q24', 'Todas as afirmações corretas (I, II e III).', 'success')],
    ['Dispersão', 'Variância e desvio padrão', 'scale', 'decay', fx('σ^2 = {∑(x − x̄)^2|n}   σ = √{σ^2}') + p('Amplitude = máximo − mínimo. A soma dos desvios é sempre 0.')],
    ['Transformações', 'Somar c, multiplicar por k', 'link', 'growth', tb(['Operação', 'Média', 'Mediana', 'σ'], [['somar $c$', '$+c$', '$+c$', 'igual'], ['multiplicar por $k$', '$×k$', '$×k$', '$×∣k∣$']])],
    ['Cuidados', 'Valor extremo', 'warn', 'danger', p('Um <em>outlier</em> altera muito a média e pouco a mediana. Escolha a medida certa para a pergunta.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Mediana sem ordenar os dados.', 'Confundir média, mediana e moda.', 'Média ponderada sem multiplicar pela frequência.', 'Variância como média dos desvios (que soma 0): use os quadrados.', 'Esquecer que somar uma constante <strong>não</strong> muda o desvio padrão.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Estatística <span style="color:var(--growth);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: média com acréscimo, mediana de lista desordenada, média de tabela, variância e transformação do desvio padrão.',
  final: 'Ordenar, ponderar e transformar: os três gestos da estatística descritiva.',
  questions: [
    { badge: 'Estilo ENA · média com acréscimo', text: 'A média de <strong>6 números</strong> é 8. Acrescenta-se o número 22.', cmd: 'A nova média é:', opts: ['9', '10', '11', '12', '15'], a: 1,
      sol: '<p>Soma antiga: $6 · 8 = 48$. Nova soma: $48 + 22 = 70$ com 7 números: $70/7 = 10$.</p>' },
    { badge: 'Estilo ENA · mediana', text: 'Considere os dados (fora de ordem): 4, 8, 3, 9, 5, 7.', cmd: 'A mediana é:', opts: ['5', '5,5', '6', '6,5', '7'], a: 2,
      sol: '<p>Ordenados: $3, 4, 5, 7, 8, 9$ ($n = 6$, par). Mediana = média dos termos 3º e 4º: ${5 + 7|2} = 6$.</p>' },
    { badge: 'Estilo ENA · tabela de frequências', text: 'Valor 1 aparece 4 vezes, valor 2 aparece 6 vezes e valor 3 aparece 10 vezes.', cmd: 'A média desses 20 dados é:', opts: ['2', '2,1', '2,3', '2,5', '3'], a: 2,
      sol: '<p>$x̄ = {1·4 + 2·6 + 3·10|20} = {4 + 12 + 30|20} = {46|20} = 2,3$.</p>' },
    { badge: 'Estilo ENA · variância', text: 'Considere os dados 2, 4, 6 e 8.', cmd: 'A variância (populacional) é:', opts: ['4', '5', '6', '8', '20'], a: 1,
      sol: '<p>Média $= 5$; desvios $−3, −1, 1, 3$; quadrados $9, 1, 1, 9$; soma $20$; $σ^2 = 20/4 = 5$.</p><p class="hint">20 é a soma dos quadrados dos desvios; falta dividir por $n$.</p>' },
    { badge: 'Estilo ENA · transformação', text: 'O desvio padrão de um conjunto de dados é 3. Todos os valores são multiplicados por $−2$ e, em seguida, somam-se 5 a cada um.', cmd: 'O novo desvio padrão é:', opts: ['$−6$', '3', '6', '9', '11'], a: 2,
      sol: '<p>Somar 5 não muda o desvio. Multiplicar por $−2$ multiplica o desvio por $∣−2∣ = 2$ (desvio é sempre não negativo): $2 · 3 = 6$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Detetive de <span style="color:var(--growth);">estatística</span>',
  subtitle: 'Cinco resoluções com <strong>uma linha errada</strong> cada: mediana sem ordenar, média sem frequência, variância e transformações. Ache o erro!',
  tpl: cDetetive({
    intro: 'Clique na primeira linha que contém o erro. Duas tentativas por caso.',
    final: 'Ordenar, ponderar, elevar ao quadrado e separar “somar” de “multiplicar”.',
    casos: [
      { titulo: 'Caso 1 · mediana', enunciado: 'Qual a mediana de 7, 3, 9, 1, 5?', linhas: ['Há 5 números; a mediana é o 3º termo.', 'O 3º termo da lista dada (7, 3, 9, 1, 5) é 9.', 'Logo a mediana é 9.'], erro: 1,
        porque: 'É preciso <strong>ordenar</strong> antes: 1, 3, 5, 7, 9. O 3º termo é 5, então a mediana é <strong>5</strong>.' },
      { titulo: 'Caso 2 · média ponderada', enunciado: 'Valor 2 aparece 3 vezes, valor 4 aparece 1 vez e valor 6 aparece 1 vez. Qual a média?', linhas: ['Somo os valores distintos: $2 + 4 + 6 = 12$.', 'Divido por 3 valores distintos: $12/3 = 4$.', 'A média é 4.'], erro: 0,
        porque: 'A média é <strong>ponderada</strong>: $x̄ = {2·3 + 4 + 6|5} = {16|5} = 3,2$. Os valores devem ser multiplicados pelas frequências.' },
      { titulo: 'Caso 3 · variância', enunciado: 'Calcule a variância de 2, 4 e 6.', linhas: ['A média é $4$.', 'Os desvios são $−2$, $0$ e $2$.', 'Variância $= {−2 + 0 + 2|3} = 0$.'], erro: 2,
        porque: 'A soma dos desvios é sempre 0. A variância usa os <strong>quadrados</strong>: ${4 + 0 + 4|3} = {8|3}$.' },
      { titulo: 'Caso 4 · mediana de n par', enunciado: 'Qual a mediana de 3, 5, 5, 7, 10, 12 (já ordenados)?', linhas: ['$n = 6$ é par: a mediana é a média dos dois termos centrais.', 'Os centrais são os termos 2º e 3º: 5 e 5.', 'Logo a mediana é 5.'], erro: 1,
        porque: 'Os termos centrais de $n = 6$ são o <strong>3º e o 4º</strong> (posições $n/2$ e $n/2 + 1$): 5 e 7. Mediana $= {5 + 7|2} = 6$.' },
      { titulo: 'Caso 5 · transformação', enunciado: 'Os dados são multiplicados por 2 e somam-se 3. O desvio padrão original é σ. Qual o novo?', linhas: ['Somar uma constante não altera o desvio padrão.', 'Multiplicar por 2 dobra o desvio padrão.', 'Logo o novo desvio padrão é $2σ + 3$.'], erro: 2,
        porque: 'O “+3” <strong>não</strong> entra no desvio: o novo desvio é apenas $2σ$.' }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Estatística: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de média, mediana, moda, variância e transformações. Responda com número (decimal onde indicado).',
  final: 'Ordene, pondere e transforme: com isso, estatística no ENA é ponto garantido.',
  problems: [
    { tag: 'Média', q: 'A média de 5 números é 12. Ao incluir o número 18, qual a nova média?', a: 13, hint: 'Soma antiga $= 60$.', sol: '<p>$(60 + 18)/6 = 13$.</p>' },
    { tag: 'Mediana', q: 'Qual a mediana de $3, 5, 5, 7, 10, 12$?', a: 6, hint: 'Média dos dois termos centrais.', sol: '<p>${5 + 7|2} = 6$.</p>' },
    { tag: 'Variância', q: 'Qual a variância (decimal) de $2, 4, 6$?', a: 2.6667, tol: 0.01, hint: 'Desvios: $−2, 0, 2$.', sol: '<p>$σ^2 = {4 + 0 + 4|3} = {8|3} ≈ 2,667$.</p>' },
    { tag: 'Média ponderada', q: 'Valor 1 (3 vezes), 2 (4 vezes), 3 (5 vezes). Qual a média (decimal)?', a: 2.1667, tol: 0.01, hint: '$n = 12$; soma $= 3 + 8 + 15$.', sol: '<p>${26|12} = {13|6} ≈ 2,167$.</p>' },
    { tag: 'Moda', q: 'Qual a moda dos dados $18, 20, 21, 21, 21, 22, 23$?', a: 21, hint: 'O valor mais frequente.', sol: '<p>O 21 aparece 3 vezes: moda $= 21$.</p>' },
    { tag: 'Transformação', q: 'A média inicial é 10. Todos os dados aumentam em 5 e depois dobram. Qual a nova média?', a: 30, hint: '$2(x̄ + 5)$.', sol: '<p>$2(10 + 5) = 30$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
