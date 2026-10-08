// Unidade 13 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cMemoria } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/13-trigonometria/', key = 'c13', brand = 'Trigonometria', cap = 'Capítulo 13';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'decay',
  h1: 'Trigonometria: <span>o essencial sem calculadora</span>',
  lede: 'Três questões em 60: razões no triângulo retângulo, identidades e ângulos notáveis. Mais a lei dos senos/cossenos, radianos e arco duplo.',
  badges: ['3× nas provas 2025–26', 'sen²+cos² = 1', '30°, 45°, 60°', 'Desenhe o triângulo'],
  curve: 'M20,100 C 60,20 110,20 150,100 C 190,180 240,180 280,100 C 320,20 370,20 410,100 C 440,150 460,120 480,90',
  sections: [
    ['Razões', 'Seno, cosseno, tangente', 'chart', 'primary', fx('sen α = {"op"|"hip"}   cos α = {"adj"|"hip"}   tg α = {"op"|"adj"}') + p('Complementares: $sen(90^∘ − α) = cos α$.')],
    ['Tabela', 'Notáveis', 'target', 'growth', tb(['', '30°', '45°', '60°'], [['sen', '$1/2$', '$√2/2$', '$√3/2$'], ['cos', '$√3/2$', '$√2/2$', '$1/2$'], ['tg', '$√3/3$', '1', '$√3$']])],
    ['Identidades', 'Fundamentais', 'scale', 'decay', fx('sen^2 x + cos^2 x = 1') + fx('1 + tg^2 x = {1|cos^2 x}') + fx('(sen x + cos x)^2 = 1 + sen 2x')],
    ['Dada a tg', 'Desenhe o triângulo', 'bulb', 'success', p('$tg α = t$: oposto $t$, adjacente 1, hipotenusa $√{1 + t^2}$.') + call('ENA 2026 Q4', '$tg α = 2$ → $(sen α + cos α)^2 = 9/5$.', 'success')],
    ['30°', 'Cateto oposto', 'triangle', 'primary', p('Cateto oposto a $30^∘$ = <strong>metade</strong> da hipotenusa.') + call('ENA 2025 Q5', 'cateto $ℓ$ oposto a $30^∘$ → área $ℓ^2√3/2$.', 'success')],
    ['Triângulo qualquer', 'Senos e cossenos', 'link', 'growth', fx('a^2 = b^2 + c^2 − 2bc·cos A   {a|sen A} = 2R') + p('Área $= ½bc·sen A$.')],
    ['Radianos', 'Conversão', 'coin', 'decay', fx('π\\ rad = 180^∘   s = rθ') + p('Redução: $sen(180^∘ − x) = sen x$; $cos(180^∘ − x) = −cos x$.')],
    ['Fórmulas', 'Adição e arco duplo', 'up', 'success', fx('sen(a ± b) = sen a cos b ± cos a sen b') + fx('sen 2a = 2 sen a cos a')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar oposto e adjacente (dependem do ângulo escolhido).', '$sen(a + b) ≠ sen a + sen b$.', 'Esquecer o sinal na redução ao 1º quadrante.', 'Misturar graus e radianos.', 'Tirar raiz e esquecer que, em ângulo agudo, seno e cosseno são positivos.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Trigonometria <span style="color:var(--decay);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: tangente dada, escada, cateto oposto, lei dos cossenos e arco duplo.',
  final: 'Desenhe o triângulo e use os notáveis: quase toda trigonometria do ENA cabe aí.',
  questions: [
    { badge: 'Estilo ENA · dada a tangente', text: 'Se $α$ é um ângulo agudo com $tg α = 3$.', cmd: 'O valor de $(sen α + cos α)^2$ é:', opts: ['6/5', '7/5', '8/5', '9/5', '2'], a: 2,
      sol: '<p>$(sen α + cos α)^2 = 1 + 2 sen α cos α = 1 + {2t|1 + t^2} = 1 + {6|10} = {8|5}$.</p>' },
    { badge: 'Estilo ENA · escada', text: 'Uma escada de 8 m forma 30° com o chão.', cmd: 'A altura que ela alcança na parede é:', opts: ['2 m', '4 m', '$4√3$ m', '$8√3$ m', '8 m'], a: 1,
      sol: '<p>A altura é o cateto oposto a $30^∘$: $8·sen 30^∘ = 8 · {1|2} = 4$ m.</p>' },
    { badge: 'Estilo ENA · lei dos cossenos', text: 'Um triângulo tem lados 3 e 5 formando um ângulo de 120°.', cmd: 'O terceiro lado mede:', opts: ['$√{19}$', '7', '$√{34}$', '8', '$√{49}$'], a: 1,
      sol: '<p>$a^2 = 9 + 25 − 2·3·5·cos 120^∘ = 34 + 15 = 49 ⇒ a = 7$ (pois $cos 120^∘ = −1/2$).</p>' },
    { badge: 'Estilo ENA · área com seno', text: 'Dois lados de um triângulo medem 10 e 12 e formam um ângulo de 30°.', cmd: 'A área do triângulo é:', opts: ['15', '30', '$30√3$', '60', '$60√3$'], a: 1,
      sol: '<p>$A = ½ · 10 · 12 · sen 30^∘ = 60 · ½ = 30$.</p>' },
    { badge: 'Estilo ENA · arco duplo', text: 'Sabe-se que $sen x + cos x = {6|5}$.', cmd: 'O valor de $sen 2x$ é:', opts: ['1/5', '11/25', '1/25', '12/25', '36/25'], a: 1,
      sol: '<p>$(sen x + cos x)^2 = 1 + sen 2x ⇒ {36|25} = 1 + sen 2x ⇒ sen 2x = {11|25}$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: '',
  h1: 'Memória da <span style="color:var(--primary);">trigonometria</span>',
  subtitle: 'Vire duas cartas: junte cada <strong>expressão</strong> ao seu <strong>valor</strong>. Os notáveis precisam sair de memória.',
  tpl: cMemoria({
    intro: 'Clique em duas cartas. Se formarem um par (expressão + valor), ficam verdes.',
    final: 'Com esses valores e as identidades, você resolve sem calculadora.',
    pares: [
      ['$sen 30^∘$', '$1/2$'], ['$cos 45^∘$', '$√2/2$'], ['$tg 60^∘$', '$√3$'], ['$cos 120^∘$', '$−1/2$'],
      ['$sen^2 x + cos^2 x$', '$1$'], ['$180^∘$ em radianos', '$π$'], ['$sen 2a$', '$2 sen a cos a$'], ['$tg 45^∘$', '$1$']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Trigonometria: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas, com decimais onde indicado.',
  final: 'Notáveis, identidades e fórmulas: o kit completo de trigonometria.',
  problems: [
    { tag: 'Razão', q: '$sen α = 3/5$ (agudo). Qual o valor (decimal) de $cos α$?', a: 0.8, tol: 0.001, hint: '$cos^2 = 1 − 9/25$.', sol: '<p>$cos α = 4/5 = 0,8$.</p>' },
    { tag: 'Tangente', q: 'Com $sen α = 3/5$, qual o valor (decimal) de $tg α$?', a: 0.75, tol: 0.001, hint: '$sen/cos$.', sol: '<p>$3/4 = 0,75$.</p>' },
    { tag: 'Escada', q: 'Uma escada de 6 m forma 30° com o chão. Qual a altura (em metros) na parede?', a: 3, hint: 'Cateto oposto a 30°.', sol: '<p>$6 · 1/2 = 3$ m.</p>' },
    { tag: 'Área', q: 'Lados 7 e 8 formando 30°: qual a área?', a: 14, hint: '$½·7·8·sen 30^∘$.', sol: '<p>$28 · ½ = 14$.</p>' },
    { tag: 'Lei dos cossenos', q: 'Lados 5 e 8 com ângulo de 60° entre eles: qual o terceiro lado?', a: 7, hint: '$25 + 64 − 40$.', sol: '<p>$a^2 = 49 ⇒ a = 7$.</p>' },
    { tag: 'Identidade', q: 'Se $sen x + cos x = 7/5$, qual o valor (decimal) de $sen x · cos x$?', a: 0.48, tol: 0.001, hint: 'Eleve ao quadrado.', sol: '<p>$49/25 = 1 + 2sc ⇒ sc = 12/25 = 0,48$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
