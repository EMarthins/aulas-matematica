// Unidade 15 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cMemoria } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/15-topicos-complementares/', key = 'c15', brand = 'Tópicos Complementares', cap = 'Capítulo 15';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Tópicos extras: <span>plano B da prova</span>',
  lede: 'Não caíram diretamente em 2025/2026, mas pertencem à matemática básica do exame e ajudam a resolver “por outro caminho”: coordenadas, exponencial, logaritmo, polinômios, complexos, matrizes, financeira e dízimas.',
  badges: ['EXTRA', 'd = √(Δx²+Δy²)', 'logₐb = x ⇔ aˣ = b', 'P(a) = resto'],
  curve: 'M20,150 C 100,150 180,60 260,80 C 340,100 400,50 480,28',
  sections: [
    ['Analítica', 'Pontos e retas', 'chart', 'primary', fx('d = √{Δx^2 + Δy^2}   M = ({x_1+x_2|2}, {y_1+y_2|2})') + p('Reta $y = mx + n$; perpendiculares $m_1m_2 = −1$. Distância ponto–reta: $|ax_0+by_0+c|/√{a^2+b^2}$.')],
    ['Analítica', 'Circunferência', 'planet', 'growth', fx('(x−a)^2 + (y−b)^2 = r^2') + p('Geral → reduzida: complete quadrados. Centro $(−D/2, −E/2)$.')],
    ['Exponencial', 'Equações', 'curve-up', 'decay', p('$a^x = a^y ⇔ x = y$. Base $> 1$ mantém o sentido; $0 < a < 1$ inverte.') + call('Exemplo', '$2^{x+1} + 2^x = 24 ⇒ x = 3$.', 'success')],
    ['Logaritmo', 'Propriedades', 'curve-log', 'success', fx('log_a(bc) = log_a b + log_a c   log_a b^k = k log_a b') + p('Mudança de base: $log_a b = log_c b / log_c a$. Condições: $a > 0, a ≠ 1, b > 0$.')],
    ['Polinômios', 'Resto e Girard', 'sigma', 'primary', p('Resto de $P(x) ÷ (x − a)$ é $P(a)$. Cúbica: soma das raízes $−b/a$, produto $−d/a$.')],
    ['Complexos', 'i e módulo', 'planet', 'growth', fx('i^2 = −1   z z̄ = |z|^2') + p('$i^n$ repete a cada 4. Quociente: multiplique pelo conjugado.')],
    ['Matrizes', 'Determinante', 'grid', 'decay', fx('det = ad − bc') + p('Inversa 2×2; $det(AB) = det A · det B$; Cramer.')],
    ['Financeira', 'Juros', 'coin', 'success', fx('M = C(1 + i)^t') + p('Simples $M = C(1 + it)$. Taxa e tempo na mesma unidade. Dízima: geratriz $= (ab − a)/90$ etc.')]
  ],
  wide: [
    ['Demonstrações', 'Técnicas', 'bulb', 'growth', `    <p class="lede-s">Indução (base + passo), absurdo (suponha o contrário), casa dos pombos ($n + 1$ objetos em $n$ caixas) e invariantes (o que não muda). Médias: $MH ≤ MG ≤ MA$, igualdade só com $a = b$.</p>`],
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o módulo na distância ponto–reta.', 'Briot–Ruffini com coeficiente zero omitido.', 'Base entre 0 e 1 inverte o sentido.', 'Taxa mensal com tempo em anos.', 'Antiperíodo na geratriz da dízima.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Tópicos extras <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: distância ponto–reta, circunferência, logaritmo, teorema do resto e potência de i.',
  final: 'Cada bloco extra resolve uma família de questões “por outro caminho”.',
  questions: [
    { badge: 'Estilo ENA · distância ponto–reta', text: 'Considere o ponto $P = (3, 4)$ e a reta $3x + 4y − 5 = 0$.', cmd: 'A distância de $P$ à reta é:', opts: ['2', '3', '4', '5', '6'], a: 2,
      sol: '<p>$d = {∣9 + 16 − 5∣|√{9 + 16}} = {20|5} = 4$.</p>' },
    { badge: 'Estilo ENA · circunferência', text: 'Considere a circunferência $x^2 + y^2 − 6x + 8y = 0$.', cmd: 'Seu raio mede:', opts: ['3', '4', '5', '10', '25'], a: 2,
      sol: '<p>$(x − 3)^2 + (y + 4)^2 = 9 + 16 = 25$: centro $(3, −4)$ e raio $5$.</p>' },
    { badge: 'Estilo ENA · logaritmo', text: 'Considere a expressão $log_3 81 + log_2 {1|8}$.', cmd: 'Seu valor é:', opts: ['−1', '0', '1', '2', '3'], a: 2,
      sol: '<p>$log_3 81 = 4$ e $log_2 {1|8} = −3$. Soma $= 1$.</p>' },
    { badge: 'Estilo ENA · teorema do resto', text: 'Seja $P(x) = x^3 − 3x^2 + x − 7$.', cmd: 'O resto da divisão de $P(x)$ por $x − 3$ é:', opts: ['−7', '−4', '0', '4', '7'], a: 1,
      sol: '<p>$P(3) = 27 − 27 + 3 − 7 = −4$.</p>' },
    { badge: 'Estilo ENA · complexos', text: 'Considere $z = i^{2027} + i^{2028}$.', cmd: 'O valor de $z$ é:', opts: ['$1 + i$', '$1 − i$', '$−1 + i$', '$−1 − i$', '0'], a: 1,
      sol: '<p>$2027 = 4·506 + 3$ ⇒ $i^{2027} = i^3 = −i$. $2028 = 4·507$ ⇒ $i^{2028} = 1$. Soma $= 1 − i$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">tópicos extras</span>',
  subtitle: 'Vire duas cartas: junte cada <strong>expressão</strong> ao seu <strong>valor ou fórmula</strong>.',
  tpl: cMemoria({
    intro: 'Clique em duas cartas. Se formarem um par, ficam verdes.',
    final: 'Esses oito pares cobrem as ideias mais rápidas dos tópicos extras.',
    pares: [
      ['$i^4$', '$1$'], ['$∣3 + 4i∣$', '$5$'], ['$log_a 1$', '$0$'], ['$a^{log_a b}$', '$b$'],
      ['Média geométrica de 4 e 9', '$6$'], ['$0,333…$', '$1/3$'], ['Juros compostos', '$M = C(1 + i)^t$'], ['Distância de $(3, 4)$ à origem', '$5$']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Tópicos extras: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas rápidas, com decimal onde indicado.',
  final: 'Cada ferramenta extra economiza minutos na prova.',
  problems: [
    { tag: 'Distância', q: 'Qual a distância entre $(0, 0)$ e $(5, 12)$?', a: 13, hint: 'Terno 5-12-13.', sol: '<p>$√{25 + 144} = 13$.</p>' },
    { tag: 'Exponencial', q: 'Resolva $2^{x+1} + 2^x = 24$. Qual o valor de $x$?', a: 3, hint: '$3·2^x = 24$.', sol: '<p>$2^x = 8 ⇒ x = 3$.</p>' },
    { tag: 'Logaritmo', q: 'Qual o valor de $log_2 8 + log_2 {1|2}$?', a: 2, hint: '$3 + (−1)$.', sol: '<p>$3 − 1 = 2$.</p>' },
    { tag: 'Resto', q: 'Qual o resto de $x^3 − 2x + 5$ por $x − 2$?', a: 9, hint: '$P(2)$.', sol: '<p>$8 − 4 + 5 = 9$.</p>' },
    { tag: 'Financeira', q: 'R$ 1000 a juros compostos de 10% ao mês por 2 meses: qual o montante?', a: 1210, hint: '$1000·1,1^2$.', sol: '<p>$1000 · 1,21 = 1210$.</p>' },
    { tag: 'Dízima', q: 'Qual o valor decimal da fração geratriz de $0,3636…$ (use 4 casas)?', a: 0.3636, tol: 0.001, hint: '$36/99 = 4/11$.', sol: '<p>$4/11 ≈ 0,3636$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
