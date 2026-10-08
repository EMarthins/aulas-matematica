// Unidade 2 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cDetetive } = K;
const { p, li, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/02-numeros-inteiros/', key = 'c2', brand = 'Números Inteiros', cap = 'Capítulo 2';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Números inteiros: <span>restos, MMC e paridade</span>',
  lede: 'Cinco questões em 60: “truques limpos” de divisibilidade, restos, MMC/MDC, paridade, algarismos e somas de consecutivos — tudo em uma página.',
  badges: ['n = d·q + r', 'MMC × MDC = a·b', 'abc − cba = 99(a−c)', 'S = 10a + 45'],
  sections: [
    ['Aula 1', 'Divisão euclidiana', 'scale', 'primary', fx('n = d·q + r,   0 ≤ r < d') + p('$n$ é múltiplo de $d$ ⇔ $r = 0$. O resto é <strong>sempre menor</strong> que o divisor.')],
    ['Aula 1', 'Macete dos restos', 'link', 'growth', p('Se $D$ é múltiplo de $d$ e $n = Dq + r$, então $n$ e $r$ deixam o <strong>mesmo resto</strong> por $d$.') + call('ENA 2026 Q17', '$451 = 11·41$; $n = 451q + 220$; $220 = 5·41 + 15$ → resto <strong>15</strong>.', 'success')],
    ['Aula 1', 'Congruências', 'chart', 'decay', p('$a ≡ b$ (mod $m$) ⇒ pode somar, multiplicar e elevar.') + call('Exemplo', '$3^{100} = 9^{50} ≡ 1^{50} = 1$ (mod 4).', 'success')],
    ['Aula 1', 'Critérios de divisibilidade', 'check', 'primary', tb(['Por', 'Critério'], [['2, 5, 10', 'último algarismo'], ['3, 9', 'soma dos algarismos'], ['4, 8', '2 / 3 últimos algarismos'], ['6', 'por 2 <strong>e</strong> por 3'], ['11', 'soma alternada']])],
    ['Aula 1', 'MMC e MDC', 'clock', 'growth', p('<strong>MMC</strong>: eventos que se repetem. <strong>MDC</strong>: grupos iguais, maior pedaço.') + fx('mmc(a,b) · mdc(a,b) = a · b') + call('Fatoração', 'MMC: maior expoente · MDC: menor expoente dos fatores comuns.', '')],
    ['Aula 1', 'Número de divisores', 'chart', 'success', fx('n = p^α·q^β ⋯ ⇒ d(n) = (α+1)(β+1)⋯') + call('360 = 2³·3²·5', '$(3+1)(2+1)(1+1) = 24$ divisores.', 'success')],
    ['Aula 2', 'Paridade', 'scale', 'decay', tb(['Operação', 'Resultado'], [['par ± par · ímpar ± ímpar', 'par'], ['par ± ímpar', 'ímpar'], ['par × qualquer', 'par'], ['ímpar × ímpar', 'ímpar']]) + p('$n^2$ tem a paridade de $n$. Escreva $2k$ e $2k+1$ e fatore o 2.')],
    ['Aula 2', 'Algarismos', 'target', 'primary', fx('abc = 100a + 10b + c') + fx('abc − cba = 99(a − c)') + p('A diferença com o invertido é múltipla de <strong>99</strong> (3 alg.) ou 9 (2 alg.).')],
    ['Aula 2', 'Último algarismo e consecutivos', 'up', 'growth', p('Ciclos de período 4: $7^n$: 7, 9, 3, 1 · $2^n$: 2, 4, 8, 6.') + fx('S = n·a + {n(n−1)|2}') + call('n = 10', '$S = 10a + 45$ termina em 5.', 'success')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Resto ≥ divisor: reduza de novo (220 = 5·41 + 15).', 'Trocar MMC por MDC: repetição → MMC; grupos iguais → MDC.', 'Contar o instante 0 em “quantas vezes mais?” (ENA 2026 Q8: 24 h e 48 h, só 2 vezes).', 'Número de divisores = <strong>produto</strong> de (expoente + 1), não a soma.', 'Esquecer restrições dos algarismos ($a > 4$, centenas ≠ 0).'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Números inteiros <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: resto por divisor menor, MMC com três eventos, número de divisores, soma de consecutivos e algarismos invertidos.',
  final: 'Resto, MMC e fatoração resolvem quase tudo — o resto é atenção às restrições.',
  questions: [
    { badge: 'Estilo ENA · restos', text: 'Um inteiro positivo $n$ deixa resto <strong>17</strong> na divisão por <strong>35</strong>.', cmd: 'O resto da divisão de $n$ por <strong>7</strong> é:', opts: ['0', '1', '2', '3', '5'], a: 3,
      sol: '<p>$n = 35q + 17$ e $35 = 5 · 7$, então $35q$ é múltiplo de 7. O resto de $n$ por 7 é o de $17$: $17 = 2·7 + 3$ → <strong>3</strong>.</p><p class="hint">É o macete dos restos: o divisor menor (7) divide o maior (35).</p>' },
    { badge: 'Estilo ENA · MMC com três eventos', text: 'Três luzes piscam de <strong>6 em 6</strong> segundos, de <strong>8 em 8</strong> e de <strong>12 em 12</strong>. Neste instante piscam juntas.', cmd: 'Nos próximos <strong>100 segundos</strong>, quantas vezes (contando só instantes futuros) elas piscarão juntas?', opts: ['3', '4', '5', '6', '8'], a: 1,
      sol: '<p>$mmc(6, 8, 12) = 24$ s. Coincidências em 24, 48, 72 e 96 s (120 > 100). São <strong>4</strong> vezes.</p><p class="hint">$⌊100/24⌋ = 4$.</p>' },
    { badge: 'Estilo ENA · número de divisores', text: 'Considere o número $252 = 2^2 · 3^2 · 7$.', cmd: 'Quantos divisores positivos ele tem?', opts: ['12', '15', '16', '18', '24'], a: 3,
      sol: '<p>$(2+1)(2+1)(1+1) = 3 · 3 · 2 = 18$.</p><p class="hint">Somar expoentes (5) ou multiplicá-los (4) são erros típicos; é o produto de (expoente + 1).</p>' },
    { badge: 'Estilo ENA · consecutivos', text: 'A soma de <strong>8 inteiros consecutivos</strong> pode ser igual a qual dos números abaixo?', cmd: 'Assinale a alternativa correta:', opts: ['2018', '2020', '2022', '2024', '2026'], a: 1,
      sol: '<p>$S = 8a + (0 + 1 + ⋯ + 7) = 8a + 28$. Então $S − 28$ deve ser múltiplo de 8. $2020 − 28 = 1992 = 8 · 249$ ✓. Nos outros casos, $S − 28 = 1990, 1994, 1996, 1998$ não é múltiplo de 8.</p><p class="hint">Para $n$ par, $S$ nunca é múltiplo de $n$: $S = na + n(n−1)/2$ deixa resto $n/2$ quando $n$ é par.</p>' },
    { badge: 'Estilo ENA · algarismos', text: 'Sejam $M = abc$ e $N = cba$ números de <strong>três algarismos</strong> (com $a ≠ 0$ e $c ≠ 0$), onde $a > c$ e $M − N = 297$.', cmd: 'Quantos valores possíveis tem $M$?', opts: ['30', '50', '60', '70', '90'], a: 2,
      sol: '<p>$M − N = 99(a − c) = 297 ⇒ a − c = 3$. Como $c ≥ 1$ e $a ≤ 9$: $c ∈ \\{1, …, 6\\}$ e $a = c + 3$ → <strong>6 pares</strong> $(a, c)$. O algarismo $b$ é livre: 10 opções. Total: $6 × 10 = 60$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: '',
  h1: 'Detetive de <span style="color:var(--primary);">resoluções erradas</span>',
  subtitle: 'Cada resolução abaixo tem <strong>uma linha com erro</strong>. Ache-a! Treinar o olho para o erro é o melhor antídoto contra os seus próprios erros.',
  tpl: cDetetive({
    intro: 'Leia o enunciado e clique na linha que contém o <strong>primeiro erro</strong>. Você tem duas tentativas por caso.',
    final: 'Resto menor que o divisor, MMC para repetição, produto de (expoente + 1) e conta correta ao desenvolver $(2k+1)^2$.',
    casos: [
      { titulo: 'Caso 1 · resto', enunciado: 'Qual o resto de $n = 451q + 220$ na divisão por 41?', linhas: ['$451 = 11 · 41$, logo $451q$ é múltiplo de 41.', 'Então $n$ deixa o mesmo resto que 220 por 41.', '$220 = 4 · 41 + 56$.', 'Logo o resto é 56.'], erro: 2,
        porque: '$4 · 41 = 164$ e $220 − 164 = 56$ é <strong>maior que o divisor</strong> — a divisão não terminou. Correto: $220 = 5 · 41 + 15$, resto <strong>15</strong>.' },
      { titulo: 'Caso 2 · consecutivos', enunciado: '4121 pode ser a soma de 10 inteiros consecutivos?', linhas: ['Sejam $a, a+1, …, a+9$.', 'A soma é $10a + (0 + 1 + ⋯ + 9) = 10a + 45$.', 'Se $S = 4121$: $10a = 4121 − 45 = 4076$.', 'Então $a = 407,6$, que é um inteiro.', 'Logo 4121 pode ser a soma.'], erro: 3,
        porque: '$407,6$ <strong>não é inteiro</strong>. Como $S = 10a + 45$ termina em 5, 4121 (que termina em 1) é impossível.' },
      { titulo: 'Caso 3 · paridade', enunciado: 'Mostre que o quadrado de um ímpar é ímpar.', linhas: ['Seja $n = 2k + 1$.', '$n^2 = 4k^2 + 2k + 1$.', '$= 2(2k^2 + k) + 1$.', 'Portanto $n^2$ é ímpar.'], erro: 1,
        porque: '$(2k + 1)^2 = 4k^2 + 4k + 1$ (produto notável: o termo do meio é $2 · 2k · 1 = 4k$). A conclusão está certa, mas a expansão da linha 2 está errada.' },
      { titulo: 'Caso 4 · divisores', enunciado: 'Quantos divisores positivos tem 360?', linhas: ['$360 = 2^3 · 3^2 · 5$.', 'O número de divisores é a soma dos expoentes: $3 + 2 + 1 = 6$.', 'Logo 360 tem 6 divisores.'], erro: 1,
        porque: 'O número de divisores é o <strong>produto</strong> de $("expoente" + 1)$: $(3+1)(2+1)(1+1) = 24$.' },
      { titulo: 'Caso 5 · MMC × MDC', enunciado: 'Dois sinais piscam a cada 12 s e 18 s e piscaram juntos agora. Quando piscarão juntos de novo?', linhas: ['Eventos que se repetem pedem o <strong>MDC</strong>.', '$mdc(12, 18) = 6$.', 'Eles piscam juntos de novo em 6 s.'], erro: 0,
        porque: 'Eventos que se <strong>repetem</strong> pedem o <strong>MMC</strong>: $mmc(12, 18) = 36$ s. Em 6 s o sinal de 12 s nem terminou o primeiro ciclo.' }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Inteiros: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas de restos, MMC, MDC, divisores, ciclos e somas. Responda com número; você tem duas tentativas por etapa e pode pedir dica.',
  final: 'Resto + fatoração + ciclo: três ferramentas que resolvem quase tudo na aritmética do ENA.',
  problems: [
    { tag: 'Resto', q: 'Qual o resto da divisão de <strong>1234</strong> por <strong>11</strong>?', a: 2, hint: 'Critério do 11: some os algarismos de posições alternadas (da direita) e subtraia.', sol: '<p>$(4 + 2) − (3 + 1) = 2$, então o resto é <strong>2</strong>. Conferência: $1234 = 11 · 112 + 2$.</p>' },
    { tag: 'MMC', q: 'Calcule o <strong>MMC</strong> de 18 e 24.', a: 72, hint: 'Fatore: $18 = 2·3^2$ e $24 = 2^3·3$. Maior expoente de cada fator.', sol: '<p>$mmc = 2^3 · 3^2 = 72$.</p>' },
    { tag: 'MDC', q: 'Calcule o <strong>MDC</strong> de 84 e 126.', a: 42, hint: '$84 = 2^2·3·7$ e $126 = 2·3^2·7$. Menor expoente dos fatores comuns.', sol: '<p>$mdc = 2 · 3 · 7 = 42$.</p>' },
    { tag: 'Divisores', q: 'Quantos divisores positivos tem <strong>360</strong>?', a: 24, hint: '$360 = 2^3·3^2·5$.', sol: '<p>$(3+1)(2+1)(1+1) = 24$.</p>' },
    { tag: 'Ciclo', q: 'Qual o último algarismo de $7^{2026}$?', a: 9, hint: 'O ciclo de $7^n$ é 7, 9, 3, 1. Veja o resto de 2026 por 4.', sol: '<p>$2026 = 4·506 + 2$ → mesma posição de $7^2 = 49$ → último algarismo <strong>9</strong>.</p>' },
    { tag: 'Consecutivos', q: 'A soma de <strong>5 inteiros consecutivos</strong> é 105. Qual o menor deles?', a: 19, hint: '$S = 5a + 10$.', sol: '<p>$5a + 10 = 105 ⇒ a = 19$ (19, 20, 21, 22, 23).</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
