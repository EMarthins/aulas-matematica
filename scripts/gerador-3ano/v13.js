// Unidade v13 — Perímetro de figuras planas (aulas 33 e 34 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar, svg } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'perimetro-figuras-planas', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v13', BRAND = 'Perímetro de Figuras Planas', CAP = 'Aulas 33 e 34';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// figura da pista: retângulo + dois semicírculos
const pista = svg(300, 130, S.poly([[70, 28], [230, 28], [230, 98], [70, 98]], 'var(--primary)', 'var(--primary-soft)', 2.4)
  + '<path d="M230,28 A35,35 0 0 1 230,98" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.4"/><path d="M70,98 A35,35 0 0 1 70,28" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.4"/>'
  + S.rot(150, 68, '100 m') + S.rot(150, 20, 'lados retos', 'middle', 'var(--ink-soft)') + S.rot(268, 68, '60 m', 'start') + S.seg([240, 28], [240, 98], 'var(--decay)', 1.4, true), '300px');

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 33 e 34', h1: 'Perímetro de figuras planas: <span style="color:var(--primary);">medir o contorno</span>',
  sub: 'Cercar um jardim, colocar rodapé em uma sala, emoldurar uma janela: sempre que falamos em contorno, falamos de perímetro. Medir com precisão evita desperdício e gasto à toa.',
  badges: [['P = soma dos lados'], ['P = n · L (regular)', 'growth'], ['C = 2πr', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do contorno à conta.', [
  ['O que é perímetro', 'medida do contorno', 'bulb'],
  ['Polígonos', 'soma dos lados e polígono regular', 'target'],
  ['Circunferência', 'C = 2πr e arcos', 'chart'],
  ['Composição', 'lados em contato somem', 'link'],
  ['Problemas', 'pistas, praças e janelas', 'scale']
]));
a.push(objetivosSlide([
  'Distinguir <strong>perímetro</strong> (contorno) de <strong>área</strong> (superfície).',
  'Calcular o perímetro de <strong>polígonos</strong> (soma dos lados) e de <strong>polígonos regulares</strong> ($P = n · L$).',
  'Calcular o <strong>comprimento da circunferência</strong>: $C = 2 · π · r$.',
  'Resolver problemas de <strong>composição e decomposição</strong>, em que lados em contato deixam de contar.'
], 'Dica', 'Antes de somar, converta tudo para a <strong>mesma unidade</strong> e pergunte: <strong>quais lados são realmente contorno</strong> da figura final?', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Cercar, contornar, emoldurar', `
          ${lede('Um jardim retangular de <strong>12 m por 8 m</strong> será cercado com arame. O arame percorre o <strong>contorno</strong> do jardim: é o seu <strong>perímetro</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Situação', 'Grandeza'], [['Cercar o jardim', 'perímetro (comprimento do contorno)'], ['Plantar grama no jardim', 'área (superfície)'], ['Rodapé de uma sala', 'perímetro'], ['Piso da sala', 'área']])}
            ${mini('O comprimento de arame para dar uma volta no jardim de 12 m por 8 m é:', ['20 m', '40 m', '96 m', '48 m'], 1, '$P = 12 + 8 + 12 + 8 = 40$ m. Os $96$ m² seriam a <strong>área</strong> ($12 · 8$), outra grandeza.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · perímetro', 'Soma dos lados, regulares e circunferência', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Perímetro:</strong> medida do <strong>contorno</strong> da figura, na unidade de comprimento (m, cm…).</li>
                <li><strong>Polígono:</strong> soma das medidas de todos os lados. Retângulo: $2(a + b)$.</li>
                <li><strong>Polígono regular</strong> de $n$ lados iguais a $L$: $P = n · L$.</li>
                <li><strong>Circunferência</strong> de raio $r$: $C = 2 · π · r$ (com $π ≈ 3,14$).</li>
                <li><strong>Composição:</strong> quando duas figuras se tocam, o trecho em contato <strong>sai</strong> do contorno.</li>
              </ul>
            </div>
            ${W.box('Calcule o perímetro', W.row(W.sel('pe-t', 'figura', ['retângulo (a, b)', 'polígono regular (n, L)', 'circunferência (r, —)', 'pista (reto a, largura d)'], 0), W.nm('pe-a', 'valor 1', 12, 'any', 'min="0"'), W.nm('pe-b', 'valor 2', 8, 'any', 'min="0"')) + W.txt('pe-f', 'Fórmula: ') + W.txt('pe-p', 'Perímetro = ') + W.hint('pe-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Pista de atletismo: retas e semicírculos', `
          <div class="grid2">
            <div>${pista}<p class="hint" style="margin-top:6px;">Campo de 100 m por 60 m, com um semicírculo em cada cabeceira.</p></div>
            <div>
              ${tbl(['Parte', 'Contribuição ao contorno'], [['Dois lados retos', '$100 + 100 = 200$ m'], ['Dois semicírculos de diâmetro 60 m', 'uma circunferência: $2 · π · 30$'], ['Total ($π = 3,14$)', '$200 + 188,4 = 388,4$ m']])}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Polígono regular', 'Calcule o perímetro de um hexágono regular de lado 5 cm e de um retângulo de 12 m por 8 m.', [
  ['Hexágono regular', '$n = 6$ e $L = 5$ ⇒ $P = 6 · 5 = 30$ cm.'],
  ['Retângulo', '$P = 2(12 + 8) = 40$ m.']
], '$30$ cm e $40$ m.'));
a.push(exemplo('Exemplo resolvido', 'A pista de caminhada', 'Um campo retangular de 100 m por 60 m tem semicírculos nas cabeceiras. Qual o comprimento de uma volta completa? ($π = 3,14$)', [
  ['Lados retos', '$100 + 100 = 200$ m.'],
  ['Semicírculos', 'Juntos formam uma circunferência de diâmetro 60 m, raio 30 m: $C = 2 · 3,14 · 30 = 188,4$ m.'],
  ['Total', '$200 + 188,4 = 388,4$ m.']
], 'Uma volta tem <strong>388,4 m</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Composição de figuras', 'Dois quadrados de lado 5 cm são colados por um lado. Qual o perímetro da figura formada?', [
  ['Separados', 'Cada quadrado tem perímetro $20$ cm: $40$ cm no total.'],
  ['Lados colados', 'O lado de 5 cm de cada quadrado deixa de ser contorno: $−5 − 5 = −10$.'],
  ['Figura formada', '$40 − 10 = 30$ cm (um retângulo de 10 por 5: $2(10 + 5) = 30$ ✓).']
], '<strong>30 cm</strong>: o perímetro <strong>diminui</strong> quando as figuras se juntam.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Recortando um canto', 'De um retângulo de 10 m por 8 m recorta-se um canto de 4 m por 3 m (formando um “L”). O perímetro muda?', [
  ['Retângulo', '$P = 2(10 + 8) = 36$ m.'],
  ['O recorte', 'Os trechos de 4 m e 3 m do canto saem do contorno, mas dois trechos iguais (3 m e 4 m) entram no lugar.'],
  ['Conferência', 'Percorrendo o “L”: $10 + 5 + 4 + 3 + 6 + 8 = 36$ m.']
], 'O perímetro continua <strong>36 m</strong>; só a <strong>área</strong> diminui ($80 − 12 = 68$ m²).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Moldura de uma janela em arco', 'Uma janela tem 1,2 m de largura e 2 m de altura nas laterais, com um semicírculo no topo. Quantos metros de moldura (todo o contorno) são necessários? ($π = 3,14$)', [
  ['Trechos retos', 'Duas laterais de 2 m e a base de 1,2 m: $2 + 2 + 1,2 = 5,2$ m.'],
  ['Arco', 'Semicírculo de diâmetro 1,2 m (raio 0,6): metade de $2 · 3,14 · 0,6$ = $1,884$ m.'],
  ['Total', '$5,2 + 1,884 = 7,084$ m.']
], 'Cerca de <strong>7,08 m</strong> de moldura.', 'growth'));

a.push(pratique('Soma dos lados', 'Um terreno tem lados de 12 m, 15 m, 9 m e 20 m. Seu perímetro é:',
  ['46 m', '52 m', '56 m', '60 m', '180 m'], 2,
  '$12 + 15 + 9 + 20 = 56$ m. <strong>Alternativa C.</strong>'));
a.push(pratique('Circunferência', 'Uma roda tem raio de 30 cm. O comprimento de sua circunferência, com $π = 3,14$, é:',
  ['94,2 cm', '141,3 cm', '188,4 cm', '282,6 cm', '2 826 cm'], 2,
  '$C = 2 · 3,14 · 30 = 188,4$ cm. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Praça e rolos de tela', 'Uma praça circular tem 20 m de raio e será cercada com tela vendida em rolos de 20 m. Com $π = 3,14$, quantos rolos inteiros são necessários para dar uma volta completa?',
  ['7', '6', '8', '5', '9'], 0,
  '$C = 2 · 3,14 · 20 = 125,6$ m; $125,6 ÷ 20 = 6,28$: são precisos <strong>7</strong> rolos inteiros. <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o perímetro engana', [
  ['Confundir perímetro e área', 'Perímetro é comprimento (m); área é superfície (m²). Cercar é perímetro; ladrilhar é área.'],
  ['Contar lados que sumiram', 'Ao juntar figuras, o lado em contato deixa de ser contorno.'],
  ['Usar o diâmetro como raio', '$C = 2πr = πd$: confira se o dado é raio ou diâmetro.'],
  ['Misturar unidades', 'Converta para a mesma unidade antes de somar (cm, m).']
]));
a.push(quiz([
  { q: 'O perímetro de um quadrado de lado 7 cm é:', o: ['14 cm', '28 cm', '49 cm', '21 cm'], a: 1 },
  { q: 'A circunferência de raio 10 cm mede (com $π = 3,14$):', o: ['31,4 cm', '62,8 cm', '314 cm', '6,28 cm'], a: 1 },
  { q: 'Ao colar dois quadrados por um lado, o perímetro total:', o: ['dobra', 'diminui', 'não muda', 'quadruplica'], a: 1 },
  { q: 'Um octógono regular de lado 5 cm tem perímetro:', o: ['25 cm', '30 cm', '40 cm', '45 cm'], a: 2 }
]));
a.push(fechamento([
  ['Perímetro', 'Comprimento do contorno.'],
  ['Fórmulas', '$P = n · L$ e $C = 2 · π · r$.'],
  ['Composição', 'Lados em contato saem do contorno.']
], 'Meça só o que é contorno: o resto é soma.'));

pages.push({ out: BASE + 'aula-1-perimetro-de-figuras-planas.html', html: K.deck({
  title: 'Perímetro de figuras planas — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 33 e 34 · Perímetro de figuras planas', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  var NOM = [['a (largura)', 'b (altura)'], ['n (nº de lados)', 'L (lado)'], ['r (raio)', '—'], ['a (trecho reto)', 'd (largura)']];
  bind(['pe-t', 'pe-a', 'pe-b'], function(){ var t = +$('pe-t').value, a = +$('pe-a').value, b = +$('pe-b').value, PI = 3.14, v, f;
    if(![a, b].every(isFinite) || a < 0 || b < 0){ $('pe-f').textContent = '—'; $('pe-p').textContent = '—'; $('pe-h').textContent = 'Use valores positivos.'; return; }
    if(t === 0){ v = 2 * (a + b); f = '2 · (a + b)'; }
    else if(t === 1){ v = a * b; f = 'n · L'; }
    else if(t === 2){ v = 2 * PI * a; f = '2 · π · r (π = 3,14)'; }
    else { v = 2 * a + PI * b; f = '2 · a + π · d (π = 3,14)'; }
    $('pe-f').textContent = f; $('pe-p').textContent = pt(v, 3);
    $('pe-h').textContent = 'Valor 1 = ' + NOM[t][0] + (t === 2 ? '.' : ', valor 2 = ' + NOM[t][1] + '.') + (t === 3 ? ' Com 100 m e 60 m: 2 · 100 + 3,14 · 60 = 388,4 m.' : ''); });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Perímetro de figuras planas: <span>soma, regularidade e circunferência</span>',
  lede: 'Perímetro é o comprimento do contorno: soma dos lados em polígonos, n · L em polígonos regulares, 2πr em circunferências, com cuidado nas composições.',
  badges: ['P = soma dos lados', 'P = n · L', 'C = 2πr'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Definição', 'Contorno', 'chart', 'primary', p('Comprimento da linha que limita a figura.') + call('Unidade', 'm, cm, mm — não m².', 'success')],
    ['Polígonos', 'Soma dos lados', 'target', 'growth', p('Retângulo: $2(a + b)$.') + call('Regular', '$P = n · L$.', 'success')],
    ['Circunferência', 'C = 2πr', 'scale', 'decay', p('$C = 2 · π · r = π · d$') + call('Exemplo', 'r = 30 cm: $C = 188,4$ cm.', 'success')],
    ['Composição', 'Juntar figuras', 'link', 'success', p('O lado em contato some do contorno.') + call('Exemplo', 'Dois quadrados de 5 cm: 30 cm.', 'success')],
    ['Pista', 'Retas + semicírculos', 'up', 'primary', p('$2a + π · d$') + call('Exemplo', '$200 + 188,4 = 388,4$ m.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Mesma unidade?', 'Raio ou diâmetro?', 'Todos os lados contam?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir perímetro e área.', 'Contar lados que ficaram no interior.', 'Trocar raio por diâmetro.', 'Misturar unidades.', 'Esquecer metade do arco no semicírculo.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Perímetro de figuras planas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: pista, composição, praça circular, hexágono regular e canto recortado.',
  final: 'Perímetro é contorno: some só o que contorna.',
  questions: [
    { badge: 'Estilo ENEM · pista', text: 'Uma pista de caminhada tem 80 m de comprimento por 50 m de largura, com um semicírculo em cada cabeceira (diâmetro 50 m). Use $π = 3,14$.', cmd: 'Uma volta completa mede, em metros:', opts: ['210,0', '267,0', '317,0', '367,0', '417,0'], a: 2,
      sol: '<p>Retas: $2 · 80 = 160$ m. Semicírculos: $3,14 · 50 = 157$ m. Total: $317$ m.</p>' },
    { badge: 'Estilo ENEM · composição', text: 'Dois quadrados de lado 5 cm são colados por um lado, formando um retângulo.', cmd: 'O perímetro desse retângulo, em cm, é:', opts: ['20', '30', '40', '25', '35'], a: 1,
      sol: '<p>O retângulo mede $10$ por $5$: $2(10 + 5) = 30$ cm.</p>' },
    { badge: 'Estilo ENEM · circunferência', text: 'Uma praça circular tem 20 m de raio e será cercada com tela vendida em rolos de 20 m. Use $π = 3,14$.', cmd: 'Quantos rolos inteiros são necessários?', opts: ['7', '6', '8', '5', '9'], a: 0,
      sol: '<p>$C = 2 · 3,14 · 20 = 125,6$ m; $125,6 ÷ 20 = 6,28$ ⇒ 7 rolos.</p>' },
    { badge: 'Estilo ENEM · polígono regular', text: 'Um hexágono regular tem lado de 12 cm.', cmd: 'Seu perímetro, em cm, é:', opts: ['60', '72', '84', '48', '96'], a: 1,
      sol: '<p>$6 · 12 = 72$ cm.</p>' },
    { badge: 'Estilo ENEM · canto recortado', text: 'De um retângulo de 10 m por 8 m recorta-se um canto de 4 m por 3 m, formando um “L”.', cmd: 'O perímetro do “L”, em metros, é:', opts: ['36', '30', '33', '39', '42'], a: 0,
      sol: '<p>Os trechos que saem (4 e 3) são repostos por trechos iguais: o perímetro continua $2(10 + 8) = 36$ m.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">fórmula</span> usar?',
  subtitle: 'Soma dos lados, n · L, circunferência ou composição? Decida antes de calcular.',
  tpl: cClassificar({
    cats: ['Soma dos lados', 'P = n · L (regular)', 'C = 2πr', 'Composição (lados somem)'],
    intro: 'Cada cartão descreve uma situação. Escolha a ideia principal e clique em <strong>Conferir</strong>.',
    final: 'Reconhecer a figura é metade do perímetro.',
    itens: [
      ['Triângulo de lados 3, 4 e 6 cm', 0, 'Lados diferentes: some os três.'],
      ['Octógono regular de lado 5 cm', 1, 'Regular: $P = 8 · 5 = 40$ cm.'],
      ['Contorno de uma moeda de raio 1,2 cm', 2, 'Circunferência: $C = 2 · π · 1,2$.'],
      ['Dois quadrados de 4 cm colados por um lado', 3, 'O lado colado sai do contorno: $32 − 8 = 24$ cm.'],
      ['Hexágono regular de lado 7 cm', 1, '$P = 6 · 7 = 42$ cm.'],
      ['Aro de uma cesta de basquete, raio 22 cm', 2, '$C = 2 · π · 22$.'],
      ['Terreno com lados 12, 15, 9 e 20 m', 0, 'Quadrilátero qualquer: $12 + 15 + 9 + 20 = 56$ m.'],
      ['Dois retângulos de 2 por 3 colados pelo lado de 3', 3, 'Separados: $10 + 10 = 20$; colados: retângulo $4 × 3$ de perímetro $14$.'],
      ['Quadrado de lado 9 m', 1, 'Polígono regular de 4 lados: $4 · 9 = 36$ m.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Perímetro de figuras planas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: retângulo, hexágono, circunferência, pista e “L”. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: contorno, regularidade, circunferência e composição.',
  problems: [
    { tag: 'Retângulo', q: 'Qual o perímetro, em metros, de um retângulo de 12 m por 8 m?', a: 40, ph: 'm', hint: '2 · (12 + 8).', sol: '<p>$40$ m.</p>' },
    { tag: 'Regular', q: 'Qual o perímetro, em cm, de um hexágono regular de lado 5 cm?', a: 30, ph: 'cm', hint: '6 · 5.', sol: '<p>$30$ cm.</p>' },
    { tag: 'Circunferência', q: 'Qual o comprimento, em cm, de uma circunferência de raio 30 cm? ($π = 3,14$)', a: 188.4, ph: 'cm', hint: '2 · 3,14 · 30.', sol: '<p>$188,4$ cm.</p>' },
    { tag: 'Pista', q: 'Campo de 100 m por 60 m com semicírculos nas cabeceiras: quanto mede uma volta, em metros? ($π = 3,14$)', a: 388.4, ph: 'm', hint: '200 + 188,4.', sol: '<p>$388,4$ m.</p>' },
    { tag: 'Canto recortado', q: 'Retângulo de 10 m por 8 m com um canto de 4 m por 3 m recortado: qual o perímetro, em metros?', a: 36, ph: 'm', hint: 'O perímetro não muda.', sol: '<p>$36$ m.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Perímetro de Figuras Planas', accent: 'primary', icon: 'triangle',
  aulas: [['Aulas 33–34', 'Perímetro de figuras planas: resolução de problemas', 'aula-1-perimetro-de-figuras-planas.html']],
  enem: 'Perímetro de figuras planas no estilo ENEM', cria: 'Qual fórmula usar?', pratica: 'Perímetro de figuras planas: trilha de desafios'
}, pages };
