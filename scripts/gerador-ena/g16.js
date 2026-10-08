// Unidade 16 — Folha de fórmulas (guia visual) e atividades de estratégia
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/16-estrategia-de-prova/', key = 'c16', brand = 'Estratégia e Folha de Fórmulas', cap = 'Capítulo 16';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Folha de fórmulas: <span>tudo numa página</span>',
  lede: 'Para imprimir e levar na véspera: as fórmulas de cada capítulo, as tabelas de cabeça e o plano. Cada item é explicado no capítulo correspondente.',
  badges: ['Véspera da prova', 'Imprima (Ctrl+P)', 'Tabelas de cabeça', '3 passadas'],
  curve: 'M20,160 C 100,150 160,100 240,100 C 320,100 400,50 480,24',
  sections: [
    ['Cap. 1', 'Porcentagem e taxas', 'chart', 'growth', fx('"aumento" ×(1 + {p|100})   "desconto" ×(1 − {p|100})') + p('Sucessivos: multiplique. Desfazer aumento de $p%$: desconto $p/(100+p)$. Taxas: tempo juntos $ab/(a+b)$.')],
    ['Cap. 2–3', 'Inteiros e conjuntos', 'numbers', 'primary', fx('n = dq + r   mmc·mdc = a·b   d(n) = ∏(α+1)') + fx('|A∪B| = |A| + |B| − |A∩B|   2^n "subconjuntos"') + p('$abc − cba = 99(a − c)$; soma de 10 consecutivos $= 10a + 45$.')],
    ['Cap. 5', 'Produtos notáveis', 'algebra', 'decay', fx('(a±b)^2 = a^2 ± 2ab + b^2   (a+b)(a−b) = a^2 − b^2') + fx('(a±b)^3 = a^3 ± 3a^2b + 3ab^2 ± b^3') + fx('a^2 + b^2 = (a+b)^2 − 2ab')],
    ['Cap. 6', 'Equação do 2º grau', 'parabola', 'success', fx('x = {−b ± √Δ|2a}   Δ = b^2 − 4ac') + fx('S = −{b|a}   P = {c|a}   x_1^2 + x_2^2 = S^2 − 2P') + p('$Δ > 0$: 2 raízes · $Δ = 0$: 1 · $Δ < 0$: nenhuma.')],
    ['Cap. 7', 'Funções', 'parabola', 'primary', fx('f(0) = c   x_v = −{b|2a}   y_v = −{Δ|4a}') + p('Afim: $y = ax + b$, $a = Δy/Δx$, raiz $−b/a$. Região abaixo da reta: $y ≤ ax + b$ (teste um ponto). Tangente: $Δ = 0$.')],
    ['Cap. 5', 'Módulo e radicais', 'algebra', 'growth', fx('√{a^2} = ∣a∣   ∛{a^3} = a   a^{m/n} = √[n]{a^m}') + p('$∣x∣ < k ⇔ −k < x < k$; $∣x∣ > k ⇔ x < −k$ ou $x > k$.')],
    ['Cap. 8', 'PA e PG', 'stairs', 'decay', fx('a_n = a_1 + (n−1)r   S_n = {n(a_1 + a_n)|2}') + fx('a_n = a_1 q^{n−1}   S_n = a_1{q^n − 1|q − 1}   S_∞ = {a_1|1 − q}') + p('$a_n = S_n − S_{n−1}$; termo médio $b = (a + c)/2$ (PA), $b^2 = ac$ (PG).')],
    ['Cap. 9–10', 'Contagem e probabilidade', 'combo', 'success', fx('P_n = n!   A_{n,k} = {n!|(n−k)!}   C_{n,k} = {n!|k!(n−k)!}') + p('Anagramas $n!/(a!b!)$; circular $(n − 1)!$; complementar. $P = fav/pos$; $P(Ā) = 1 − P$; independentes $P(A)P(B)$.')],
    ['Cap. 11', 'Estatística', 'bars', 'primary', fx('x̄ = {∑ f x|∑ f}   σ^2 = {∑(x − x̄)^2|n}') + p('Mediana: ordene! Moda: mais frequente. $+c$: média e mediana $+c$, $σ$ igual; $×k$: tudo $×k$, $σ$ $×|k|$.')],
    ['Cap. 12', 'Triângulos e áreas', 'triangle', 'growth', fx('a^2 = b^2 + c^2   h^2 = mn   bc = ah') + p('30-60-90: $x, x√3, 2x$ · 45-45-90: $x, x, x√2$. Equilátero: $h = l√3/2$, $A = l^2√3/4$. Semelhança $k$: áreas $k^2$, volumes $k^3$.')],
    ['Cap. 12', 'Quadriláteros e círculo', 'polygon', 'decay', p('Retângulo $ab$, diag. $√{a^2+b^2}$ · Quadrado $l^2$, diag. $l√2$ · Trapézio $(B+b)h/2$ · Losango $Dd/2$ · Círculo $πr^2$, compr. $2πr$. Triângulo retângulo inscrito: hipotenusa = diâmetro.')],
    ['Cap. 13', 'Trigonometria', 'wave', 'success', fx('sen^2 x + cos^2 x = 1   1 + tg^2 x = {1|cos^2 x}') + tb(['', '30°', '45°', '60°'], [['sen', '$1/2$', '$√2/2$', '$√3/2$'], ['cos', '$√3/2$', '$√2/2$', '$1/2$'], ['tg', '$√3/3$', '1', '$√3$']])],
    ['Cap. 14', 'Geometria espacial', 'cube', 'primary', fx('"prisma" A_b h   "pirâmide/cone" ⅓A_b h') + p('Cubo: diag. $a√3$ · caixa $√{a^2+b^2+c^2}$ · cilindro $πr^2h$ · esfera $⁴⁄₃πr^3$, $4πr^2$ · cone $g^2 = r^2 + h^2$ · $1\\ dm^3 = 1\\ L$.')]
  ],
  wide: [
    ['Tabelas de cabeça', 'Para ter na ponta da língua', 'book', 'growth', `    ${K.tbl(['Tabela', 'Valores'], [['Quadrados', '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400'], ['Cubos', '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000'], ['Potências de 2', '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096'], ['Raízes', '$√2 ≈ 1,414$ · $√3 ≈ 1,732$ · $√5 ≈ 2,236$ · $√6 ≈ 2,449$ · $√7 ≈ 2,646$'], ['Primos até 50', '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47'], ['Frações', '$1/2 = 0,5$ · $1/3 = 0,3…$ · $1/4 = 0,25$ · $1/5 = 0,2$ · $1/6 = 0,16…$ · $1/8 = 0,125$ · $1/16 = 0,0625$'], ['Ternos', '3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, 9-40-41']])}`],
    ['Lembretes', 'Antes de entregar', 'warn', 'danger', wl(['Condições de existência, raiz estranha e unidades.', 'Marque e volte: 3 passadas.', 'Pergunte: a resposta é plausível?', 'Erre no simulado, não na prova.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Simulado relâmpago <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais de capítulos diferentes — porcentagem, geometria, inteiros, probabilidade e funções — para treinar a troca de assunto.',
  intro: 'Mini-simulado: marque o tempo (≈ 3 minutos por questão) e resolva no papel. A resolução aparece depois da resposta.',
  final: 'Classificar o tema em 5 segundos e escolher a ferramenta curta é o que separa as colocações.',
  questions: [
    { badge: 'Estilo ENA · porcentagem', text: 'Um preço sofre aumento de <strong>40%</strong> e, depois, desconto de <strong>40%</strong> sobre o novo preço.', cmd: 'Em relação ao preço original, o preço final é:', opts: ['igual', '16% menor', '16% maior', '20% menor', '4% menor'], a: 1,
      sol: '<p>$1,4 × 0,6 = 0,84$: o preço fica <strong>16% menor</strong>.</p>' },
    { badge: 'Estilo ENA · geometria', text: 'Um retângulo tem área 48 e perímetro 28.', cmd: 'Sua diagonal mede:', opts: ['8', '9', '10', '11', '12'], a: 2,
      sol: '<p>$a + b = 14$; $d^2 = (a + b)^2 − 2ab = 196 − 96 = 100 ⇒ d = 10$.</p>' },
    { badge: 'Estilo ENA · inteiros', text: 'A soma de <strong>cinco inteiros consecutivos</strong> é 85.', cmd: 'O maior deles é:', opts: ['17', '18', '19', '20', '21'], a: 2,
      sol: '<p>$5a + 10 = 85 ⇒ a = 15$: os números são 15 a 19. O maior é 19.</p>' },
    { badge: 'Estilo ENA · probabilidade', text: 'Dois dados honestos são lançados.', cmd: 'A probabilidade de a soma ser <strong>9</strong> é:', opts: ['1/12', '1/9', '1/8', '1/6', '5/36'], a: 1,
      sol: '<p>Pares com soma 9: $(3,6), (4,5), (5,4), (6,3)$ → ${4|36} = {1|9}$.</p>' },
    { badge: 'Estilo ENA · funções', text: 'A função $f(x) = x^2 − 8x + k$ tem valor <strong>mínimo</strong> igual a 3.', cmd: 'O valor de $k$ é:', opts: ['11', '16', '19', '20', '24'], a: 2,
      sol: '<p>$x_v = 4$ e $f(4) = 16 − 32 + k = k − 16 = 3 ⇒ k = 19$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Em qual <span style="color:var(--growth);">capítulo cai?</span>',
  subtitle: 'Classifique cada questão-tipo na área correta em 5 segundos — o primeiro passo do método.',
  tpl: cClassificar({
    cats: ['Aritmética e lógica', 'Álgebra e funções', 'Contagem e dados', 'Geometria'],
    intro: 'Escolha a grande área de cada problema e clique em <strong>Conferir</strong>.',
    final: 'Classificar rápido é o passo 2 do método de cinco passos.',
    itens: [
      ['Quantos divisores positivos tem 360?', 0, 'Capítulo 2 (números inteiros): fatoração.'],
      ['Soma dos quadrados das raízes de $x^2 − 6x + 4 = 0$', 1, 'Capítulo 6 (equações): Girard.'],
      ['Anagramas da palavra MATEMATICA', 2, 'Capítulo 9 (análise combinatória).'],
      ['Razão entre as áreas de triângulos semelhantes', 3, 'Capítulo 12 (geometria plana).'],
      ['Mediana de uma tabela de frequências', 2, 'Capítulo 11 (estatística).'],
      ['Negação de “todos os alunos foram aprovados”', 0, 'Capítulo 4 (lógica).'],
      ['Vértice e valor mínimo de uma parábola', 1, 'Capítulo 7 (funções).'],
      ['Volume do tetraedro dentro do paralelepípedo', 3, 'Capítulo 14 (geometria espacial).']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Trilha mista: <span style="color:var(--decay);">um pouco de tudo</span>',
  subtitle: 'Seis etapas de capítulos diferentes. Responda com número; duas tentativas e dica por etapa.',
  final: 'Misturar temas é como a prova é: treine a troca de ferramenta.',
  problems: [
    { tag: 'Porcentagem', q: 'Aumento de 40% seguido de desconto de 40%: o preço final é quantos % do original?', a: 84, hint: '$1,4 × 0,6$.', sol: '<p>$0,84$ → 84%.</p>' },
    { tag: 'Equações', q: 'Qual a soma dos quadrados das raízes de $x^2 − 5x + 6 = 0$?', a: 13, hint: '$S = 5$, $P = 6$.', sol: '<p>$25 − 12 = 13$ (raízes 2 e 3).</p>' },
    { tag: 'Sequências', q: 'Em uma PA com $a_1 = 2$ e $r = 5$, qual o valor de $a_{10}$?', a: 47, hint: '$2 + 9·5$.', sol: '<p>$a_{10} = 47$.</p>' },
    { tag: 'Contagem', q: 'De quantas formas se escolhem 2 pessoas entre 6?', a: 15, hint: '$C(6, 2)$.', sol: '<p>${6·5|2} = 15$.</p>' },
    { tag: 'Estatística', q: 'Qual a mediana de $1, 3, 3, 6, 7, 8, 9$?', a: 6, hint: '7 termos: o 4º.', sol: '<p>O 4º termo é 6.</p>' },
    { tag: 'Geometria', q: 'Catetos 9 e 12: quanto mede a hipotenusa?', a: 15, hint: 'Terno 3-4-5 vezes 3.', sol: '<p>$√{81 + 144} = 15$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
