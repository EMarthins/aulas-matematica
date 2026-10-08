// Unidade 6 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/06-equacoes-inequacoes-sistemas/', key = 'c6', brand = 'Equações, Inequações e Sistemas', cap = 'Capítulo 6';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'growth',
  h1: 'Equações e inequações: <span>método e conferência</span>',
  lede: 'Seis questões em 60, cada uma com sua pegadinha: condição de existência, sinal ou raiz estranha. O método de cada tipo e a conferência final.',
  badges: ['6× nas provas 2025–26', 'S = −b/a · P = c/a', 'Testar raízes', 'Tabela de sinais'],
  curve: 'M20,160 C 90,150 150,100 230,100 C 310,100 380,50 480,26',
  sections: [
    ['2º grau', 'Δ e Girard', 'scale', 'primary', fx('Δ = b^2 − 4ac   x = {−b ± √Δ|2a}') + fx('S = −{b|a}   P = {c|a}') + fx('x_1^2 + x_2^2 = S^2 − 2P') + call('Tangência', 'Reta × parábola com um ponto: $Δ = 0$.', 'success')],
    ['2º grau', 'Sinal da quadrática', 'chart', 'growth', tb(['Caso', 'Sinal'], [['$a > 0$', '$f > 0$ fora; $f < 0$ entre as raízes'], ['$a < 0$', 'o contrário'], ['$Δ < 0$', 'sinal de $a$']]) + call('ENA 2026 Q5', '$(x−2)(x+8) < 0 ⇔ −8 < x < 2$ → 9 inteiros.', 'success')],
    ['Inequações', 'Quociente', 'warn', 'danger', p('${f|g} > 0 ⇔ f·g > 0$ e $g ≠ 0$. Passe tudo para um lado, fatore e use a <strong>tabela de sinais</strong>.') + call('Nunca', 'Multiplicar “em cruz” sem saber o sinal do denominador.', 'danger')],
    ['Fracionária', 'Condição de existência', 'link', 'decay', p('Escreva $x ≠ …$, multiplique pelo MMC, resolva e <strong>descarte</strong> raízes que anulam denominador.') + call('ENA 2026 Q15', '$x^2 + 8x − 1 = 0$; $S^2 − 2P = 66$.', 'success')],
    ['Modular', '|f| = g', 'check', 'primary', fx('∣f∣ = g ⇔ g ≥ 0 "e" (f = g "ou" f = −g)') + call('ENA 2026 Q9', 'Soma de parcelas $≥ 0$ igual a 0 ⇒ cada uma é 0 → $x = 1$.', 'success')],
    ['Irracional', 'Isole, eleve, teste', 'target', 'success', p('Condição: radicando $≥ 0$ e lado oposto $≥ 0$. Elevar ao quadrado cria raízes estranhas.') + call('ENA 2026 Q28', '$√{x+3} = x−3$: $x = 1$ ✗, $x = 6$ ✓.', 'success')],
    ['Outras', 'Biquadrada e fatoração', 'bulb', 'growth', p('$ax^4 + bx^2 + c = 0$: $t = x^2$ ($t ≥ 0$). Produto nulo: $x^3 − x = x(x−1)(x+1)$.')],
    ['Sistemas', 'Adição, substituição e Cramer', 'coin', 'decay', fx('D = a_1b_2 − a_2b_1   x = {D_x|D}   y = {D_y|D}') + p('$D ≠ 0$: solução única; $D = 0$: sem solução ou infinitas.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer a condição de existência e a conferência da raiz.', 'Ler errado o sinal da parábola (com $a < 0$, $f > 0$ entre as raízes).', 'Multiplicar inequação por expressão de sinal desconhecido.', 'Aceitar raiz estranha em equação irracional ou modular.', 'Intervalo aberto × fechado nas alternativas ($(2,8)$ contém 6; $(1,6)$ não).'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Equações e inequações <span style="color:var(--growth);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: Girard, sinal da quadrática, equação fracionária, raiz estranha e identidades em sistemas.',
  final: 'Girard, sinal e conferência da raiz: as três ferramentas do capítulo.',
  questions: [
    { badge: 'Estilo ENA · Girard', text: 'Considere a equação $x^2 − 6x + 4 = 0$.', cmd: 'A soma dos quadrados das raízes é:', opts: ['20', '24', '28', '32', '36'], a: 2,
      sol: '<p>$S = 6$ e $P = 4$. $x_1^2 + x_2^2 = S^2 − 2P = 36 − 8 = 28$.</p><p class="hint">$Δ = 36 − 16 = 20 > 0$: as raízes são reais ($3 ± √5$).</p>' },
    { badge: 'Estilo ENA · sinal da quadrática', text: 'Seja $A = \\{x ∈ Z ∣ x^2 − 4x − 12 < 0\\}$.', cmd: 'Quantos elementos tem $A$?', opts: ['5', '6', '7', '8', '9'], a: 2,
      sol: '<p>$x^2 − 4x − 12 = (x + 2)(x − 6) < 0 ⇔ −2 < x < 6$. Inteiros: $−1, 0, 1, 2, 3, 4, 5$ → <strong>7</strong>.</p>' },
    { badge: 'Estilo ENA · equação fracionária', text: 'Considere ${3|x + 1} + {2|x − 2} = 1$, com $x ≠ −1$ e $x ≠ 2$.', cmd: 'A soma das raízes dessa equação é:', opts: ['4', '5', '6', '7', '8'], a: 2,
      sol: '<p>Multiplicando por $(x + 1)(x − 2)$: $3(x − 2) + 2(x + 1) = (x + 1)(x − 2) ⇒ 5x − 4 = x^2 − x − 2 ⇒ x^2 − 6x + 2 = 0$. $Δ = 28 > 0$ e as raízes ($3 ± √7$) não são $−1$ nem $2$. Soma $= 6$.</p>' },
    { badge: 'Estilo ENA · raiz estranha', text: 'Considere a equação $√{2x + 3} = x$.', cmd: 'O número de soluções reais é:', opts: ['0', '1', '2', '3', '4'], a: 1,
      sol: '<p>Elevando ao quadrado: $2x + 3 = x^2 ⇒ x^2 − 2x − 3 = 0 ⇒ x = 3$ ou $x = −1$. Teste: $x = 3$: $√9 = 3$ ✓. $x = −1$: $√1 = 1 ≠ −1$ ✗ (raiz estranha). <strong>Uma</strong> solução.</p>' },
    { badge: 'Estilo ENA · sistema com identidade', text: 'Os números reais $x$ e $y$ satisfazem $x + y = 10$ e $x^2 + y^2 = 58$.', cmd: 'O valor de $xy$ é:', opts: ['15', '18', '21', '24', '29'], a: 2,
      sol: '<p>$(x + y)^2 = x^2 + y^2 + 2xy ⇒ 100 = 58 + 2xy ⇒ xy = 21$ (por exemplo, $x = 7$ e $y = 3$).</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Qual método <span style="color:var(--growth);">resolve?</span>',
  subtitle: 'Cada problema pede um método diferente. Classifique: Girard, fatoração, “elevar e testar” ou tabela de sinais.',
  tpl: cClassificar({
    cats: ['Girard', 'Fatoração', 'Elevar e testar', 'Tabela de sinais'],
    intro: 'Escolha o método mais eficiente para cada problema e clique em <strong>Conferir</strong>.',
    final: 'Reconhecer o método é metade do caminho para resolver rápido.',
    itens: [
      ['Soma dos quadrados das raízes de $x^2 − 5x + 3 = 0$', 0, 'Pede só soma e produto: $S^2 − 2P$, sem resolver.'],
      ['Resolver $x^3 − x = 0$', 1, 'Fator comum: $x(x − 1)(x + 1) = 0$.'],
      ['Resolver $√{x + 3} = x − 3$', 2, 'Isole a raiz, eleve ao quadrado e teste as candidatas.'],
      ['Resolver ${x + 1|x − 2} ≥ 0$', 3, 'Quociente: estude o sinal de numerador e denominador numa reta.'],
      ['Produto das raízes de $2x^2 + 4x − 6 = 0$', 0, '$P = c/a = −3$.'],
      ['Resolver $∣x − 1∣^3 + 5∣x − 1∣^2 + 6∣x − 1∣ = 0$', 1, 'Fatore $∣x − 1∣$: o parêntese é sempre positivo.'],
      ['Resolver $x^2 − 7x + 10 > 0$', 3, 'Sinal da quadrática: positiva fora das raízes 2 e 5.'],
      ['Resolver $√{2x + 3} = x$', 2, 'Eleve ao quadrado e descarte a raiz que torna o lado direito negativo.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Equações: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas: Girard, sinal, equações irracionais e discriminante. Responda com número; duas tentativas e dica por etapa.',
  final: 'Girard, sinal e conferência: o trio que resolve o capítulo.',
  problems: [
    { tag: 'Girard · soma', q: 'Qual a <strong>soma</strong> das raízes de $2x^2 − 6x + 4 = 0$?', a: 3, hint: '$S = −b/a$.', sol: '<p>$S = −{−6|2} = 3$.</p>' },
    { tag: 'Girard · produto', q: 'Qual o <strong>produto</strong> das raízes de $2x^2 − 6x + 4 = 0$?', a: 2, hint: '$P = c/a$.', sol: '<p>$P = 4/2 = 2$.</p>' },
    { tag: 'Girard · soma dos quadrados', q: 'Qual a soma dos <strong>quadrados</strong> das raízes de $2x^2 − 6x + 4 = 0$?', a: 5, hint: '$S^2 − 2P$.', sol: '<p>$9 − 4 = 5$ (raízes 1 e 2: $1 + 4 = 5$).</p>' },
    { tag: 'Sinal', q: 'Quantos inteiros satisfazem $x^2 + 6x − 16 < 0$?', a: 9, hint: 'Fatore: $(x − 2)(x + 8)$; a quadrática é negativa entre as raízes.', sol: '<p>$−8 < x < 2$: inteiros de $−7$ a $1$ → 9.</p>' },
    { tag: 'Equação irracional', q: 'Qual é a <strong>única raiz válida</strong> de $√{x + 3} = x − 3$?', a: 6, hint: 'Eleve ao quadrado: $x^2 − 7x + 6 = 0$. Teste $x = 1$ e $x = 6$.', sol: '<p>$x = 1$ ✗ ($2 ≠ −2$); $x = 6$ ✓.</p>' },
    { tag: 'Discriminante', q: 'Para que $x^2 + kx + 9 = 0$ tenha raiz dupla, qual o valor <strong>positivo</strong> de $k$?', a: 6, hint: '$Δ = k^2 − 36 = 0$.', sol: '<p>$k^2 = 36 ⇒ k = ±6$; o positivo é <strong>6</strong>.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
