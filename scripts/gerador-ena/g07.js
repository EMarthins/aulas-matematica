// Unidade 7 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cVF } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/07-funcoes-afim-quadratica/', key = 'c7', brand = 'Funções Afim e Quadrática', cap = 'Capítulo 7';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Funções: <span>retas e parábolas</span>',
  lede: 'Cinco questões em 60: leitura de gráfico, coeficientes, vértice, interseções, regiões do plano e otimização — a ficha da afim e da quadrática em uma página.',
  badges: ['5× nas provas 2025–26', 'y = ax + b', 'x_v = −b/2a', 'Δ = 0 ⇒ tangência'],
  curve: 'M20,150 C 110,60 190,170 280,90 C 350,30 420,60 480,28',
  sections: [
    ['Afim', 'y = ax + b', 'chart', 'primary', fx('a = {Δy|Δx}   b = y_1 − a·x_1   "raiz" x = −{b|a}') + p('$a > 0$ cresce; $a < 0$ decresce. Paralelas: mesmo $a$; perpendiculares: $a_1a_2 = −1$.')],
    ['Afim', 'Região do plano', 'target', 'success', p('“Abaixo” (incluindo): $y ≤ ax + b$; “acima”: $y ≥ ax + b$. <strong>Substitua</strong> cada ponto.') + call('ENA 2025 Q18', 'reta por $(0, 1/3)$ e $(5/3, 0)$: $y = −x/5 + 1/3$; $(7, −1)$ fica <strong>acima</strong>.', 'success')],
    ['Quadrática', 'Ficha da parábola', 'scale', 'growth', fx('c = f(0)   f(1) = a + b + c   f(−1) = a − b + c') + fx('x_v = −{b|2a}   y_v = −{Δ|4a}') + p('$a > 0$: mínimo; $a < 0$: máximo. $S = −b/a$, $P = c/a$.')],
    ['Quadrática', 'Formas e lei', 'link', 'decay', fx('f(x) = a(x − x_1)(x − x_2)   a(x − x_v)^2 + y_v') + call('Treino 7.6', 'raízes −1 e 3, passa por (0, −3) → $x^2 − 2x − 3$.', 'success')],
    ['Quadrática', 'Mínimo com n inteiro', 'warn', 'danger', p('Se $x_v = 12,5$, os inteiros $12$ e $13$ empatam. Se $x_v$ é inteiro, é ele.') + call('ENA 2025 Q16', '$n^2 − 25n$: mínimo $−156$.', 'success')],
    ['Reta × parábola', 'Igualar', 'check', 'primary', p('Iguale → equação do 2º grau: $Δ > 0$ (2 pontos), $Δ = 0$ (1 ponto, tangência), $Δ < 0$ (nenhum).') + call('ENA 2026 Q14', '$x^2 − mx + 3 = 0$ → $m = 2√3$; $g$ corta $x$ em $2√3/3$.', 'success')],
    ['Otimização', 'Vértice resolve', 'up', 'growth', p('Soma fixa → produto máximo em $x = y = S/2$. Perímetro fixo → quadrado tem área máxima. “Lucro/área/altura” quadrática: vértice.')],
    ['Revisão', 'Conceitos de função', 'book', 'success', p('Domínio: denominador ≠ 0, radicando par ≥ 0, logaritmando > 0. $(f∘g)(x) = f(g(x))$. Inversa: troque $x ↔ y$. Par: $f(−x) = f(x)$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Julgar por inspeção se um ponto está acima ou abaixo de uma reta decrescente.', 'Usar o vértice real quando $n$ tem de ser inteiro.', 'Confundir $c = f(0)$ com as raízes.', 'Esquecer a restrição $m > 0$ em $m^2 = 12$.', 'Trocar a ordem dos pontos no cálculo de $a$.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Funções <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: região abaixo de uma reta, vértice, mínimo inteiro, tangência e lei por raízes.',
  final: 'Substituir, usar o vértice e igualar para achar o Δ: tudo o que a prova pede de funções.',
  questions: [
    { badge: 'Estilo ENA · região do plano', text: 'A região $R$ do plano está <strong>abaixo</strong> (incluindo a reta) da reta que passa por $(0, 2)$ e $(4, 0)$.', cmd: 'Qual dos pontos abaixo <strong>NÃO</strong> pertence a $R$?', opts: ['$(0, 2)$', '$(2, 1)$', '$(4, 1)$', '$(−2, 3)$', '$(6, −2)$'], a: 2,
      sol: '<p>A reta é $y = −{x|2} + 2$. Em $x = 4$ ela vale $0$; o ponto $(4, 1)$ tem $y = 1 > 0$: fica <strong>acima</strong>. Os demais: $(0,2)$, $(2,1)$ e $(−2,3)$ estão sobre a reta; $(6, −2)$: a reta vale $−1$ e $−2 ≤ −1$ ✓.</p>' },
    { badge: 'Estilo ENA · vértice', text: 'Considere a função $f(x) = −x^2 + 4x + 5$.', cmd: 'O valor máximo de $f$ é:', opts: ['5', '7', '9', '11', '13'], a: 2,
      sol: '<p>$x_v = −{4|−2} = 2$ e $f(2) = −4 + 8 + 5 = 9$. Como $a < 0$, é um <strong>máximo</strong>. (Ou: $y_v = −{Δ|4a} = −{36|−4} = 9$.)</p>' },
    { badge: 'Estilo ENA · mínimo com inteiros', text: 'Seja $S = \\{n^2 − 11n ∣ n$ inteiro$\\}$.', cmd: 'O menor elemento de $S$ é:', opts: ['$−36$', '$−31$', '$−30$', '$−28$', '$−25$'], a: 2,
      sol: '<p>Vértice em $n = 5,5$. Os inteiros vizinhos: $f(5) = 25 − 55 = −30$ e $f(6) = 36 − 66 = −30$. Mínimo: <strong>−30</strong> (o mínimo real, $−30,25$, não é atingido).</p>' },
    { badge: 'Estilo ENA · tangência', text: 'A reta $y = x + k$ é <strong>tangente</strong> à parábola $y = x^2 − 3$.', cmd: 'O valor de $k$ é:', opts: ['$−3$', '$−{13|4}$', '$−{9|4}$', '${13|4}$', '$3$'], a: 1,
      sol: '<p>Igualando: $x^2 − 3 = x + k ⇒ x^2 − x − 3 − k = 0$. Tangência: $Δ = 1 + 4(3 + k) = 13 + 4k = 0 ⇒ k = −{13|4}$.</p>' },
    { badge: 'Estilo ENA · lei por raízes', text: 'Uma parábola tem raízes $−2$ e $4$ e passa pelo ponto $(0, −8)$.', cmd: 'O valor dessa função em $x = 1$ é:', opts: ['$−9$', '$−8$', '$−7$', '$−6$', '$−5$'], a: 0,
      sol: '<p>$f(x) = a(x + 2)(x − 4)$; $f(0) = a·2·(−4) = −8a = −8 ⇒ a = 1$. Então $f(x) = x^2 − 2x − 8$ e $f(1) = 1 − 2 − 8 = −9$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">funções</span>',
  subtitle: 'Seis afirmações sobre retas e parábolas. Decida e leia a justificativa — erros típicos de prova aparecem disfarçados.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Cada item reúne um erro típico: vértice com inteiros, perpendiculares, tangência e sinal de a.',
    afirmacoes: [
      ['O vértice da parábola $y = ax^2 + bx + c$ tem abscissa $−b/(2a)$.', true, 'Verdadeira: é a média das raízes e o ponto do eixo de simetria.'],
      ['Se $Δ < 0$ e $a > 0$, a parábola fica inteiramente acima do eixo $x$.', true, 'Verdadeira: sem raízes reais, $f$ tem sempre o sinal de $a$.'],
      ['Duas retas perpendiculares têm coeficientes angulares iguais.', false, 'Falsa: perpendiculares têm $a_1 · a_2 = −1$; iguais são as paralelas.'],
      ['O menor valor de $n^2 − 25n$ com $n$ inteiro ocorre em $n = 12,5$.', false, 'Falsa: $12,5$ não é inteiro. O mínimo inteiro ocorre em $n = 12$ e $n = 13$ (valor $−156$).'],
      ['A reta $y = mx − 4$ toca a parábola $y = x^2 − 1$ em um único ponto quando $m^2 = 12$.', true, 'Verdadeira: igualando, $x^2 − mx + 3 = 0$ e $Δ = m^2 − 12 = 0$ (tangência).'],
      ['Entre os retângulos de mesmo perímetro, o de maior área é o quadrado.', true, 'Verdadeira: a área $x(P/2 − x)$ é uma parábola com máximo em $x = P/4$.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Funções: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de vértice, extremos, reta por dois pontos e tangência. Responda com número; duas tentativas e dica por etapa.',
  final: 'Vértice, extremos e Δ = 0: três ferramentas para toda quadrática.',
  problems: [
    { tag: 'Valor mínimo', q: 'Qual o valor mínimo de $f(x) = x^2 − 6x + 5$?', a: -4, hint: '$x_v = −b/2a = 3$.', sol: '<p>$f(3) = 9 − 18 + 5 = −4$.</p>' },
    { tag: 'Valor máximo', q: 'Qual o valor máximo de $g(x) = −x^2 + 4x + 1$?', a: 5, hint: '$x_v = 2$.', sol: '<p>$g(2) = −4 + 8 + 1 = 5$.</p>' },
    { tag: 'Reta por dois pontos', q: 'A reta que passa por $(1, 3)$ e $(3, 7)$ é $y = ax + b$. Qual o valor de $b$?', a: 1, hint: '$a = (7 − 3)/(3 − 1) = 2$.', sol: '<p>$3 = 2·1 + b ⇒ b = 1$ (reta $y = 2x + 1$).</p>' },
    { tag: 'Soma fixa', q: 'Dois números somam 20. Qual o maior produto possível?', a: 100, hint: '$x(20 − x)$ tem máximo em $x = 10$.', sol: '<p>$10 · 10 = 100$.</p>' },
    { tag: 'Mínimo inteiro', q: 'Qual o menor valor de $n^2 − 9n$ com $n$ inteiro?', a: -20, hint: 'Vértice em 4,5: teste $n = 4$ e $n = 5$.', sol: '<p>$16 − 36 = −20$ e $25 − 45 = −20$.</p>' },
    { tag: 'Tangência', q: 'A reta $y = x + k$ é tangente à parábola $y = x^2$. Qual o valor de $k$? (use decimal)', a: -0.25, tol: 0.001, hint: '$x^2 − x − k = 0$ com $Δ = 0$.', sol: '<p>$Δ = 1 + 4k = 0 ⇒ k = −1/4 = −0,25$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
