// Unidade v24 — Porcentagem em área, perímetro e volume de prismas (aulas 65 e 66 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'porcentagem-area-perimetro', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v24', BRAND = 'Porcentagem em Área e Perímetro', CAP = 'Aulas 65 e 66';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 65 e 66', h1: 'Porcentagem em prismas: <span style="color:var(--primary);">fatores em cascata</span>',
  sub: 'Se uma medida sobe 10% e outra desce 10%, a área continua a mesma? Não: a conta é por multiplicação de fatores, e não por soma de porcentagens.',
  badges: [['aumento: 1 + i'], ['redução: 1 − i', 'growth'], ['fatores se multiplicam', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da porcentagem ao fator.', [
  ['Fatores', '1,10 e 0,90', 'bulb'],
  ['Área da base', 'produto de dimensões', 'target'],
  ['Área lateral', 'perímetro × altura', 'chart'],
  ['Volume', 'três fatores', 'link'],
  ['Conferir', 'variação percentual final', 'scale']
]));
a.push(objetivosSlide([
  'Transformar porcentagens em <strong>fatores</strong>: aumento de $i$ ⇒ $1 + i$; redução de $i$ ⇒ $1 − i$.',
  'Calcular a variação da <strong>área da base</strong>, da <strong>área lateral</strong> e do <strong>volume</strong> de prismas quando as medidas mudam em porcentagem.',
  'Perceber que variações <strong>sucessivas ou simultâneas</strong> se multiplicam.',
  'Resolver problemas de <strong>embalagens</strong>, <strong>colunas</strong> e <strong>caixas</strong>.'
], 'Dica', 'A grandeza final é o produto dos fatores das medidas envolvidas: área da base $= a · b$ (2 fatores); volume $= a · b · c$ (3 fatores).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A caixinha de suco', `
          ${lede('Uma fábrica de sucos reduz em <strong>10%</strong> a <strong>largura</strong> da base da caixa e aumenta em <strong>10%</strong> o <strong>comprimento</strong>. A área da base continua exatamente a mesma?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Medida', 'Fator'], [['Largura −10%', '$1 − 0,10 = 0,90$'], ['Comprimento +10%', '$1 + 0,10 = 1,10$'], ['Área da base', '$0,90 · 1,10 = 0,99$ (−1%)']])}
            ${mini('A área da base da caixa:', ['continua igual', 'diminui 1%', 'aumenta 1%', 'diminui 20%'], 1, '$1,10 · 0,90 = 0,99$: a área cai 1%, e não 0%. Não se somam porcentagens.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · variações em cascata', 'Fatores multiplicam-se', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Aumento de $i$:</strong> fator $1 + i$. <strong>Redução de $i$:</strong> fator $1 − i$.</li>
                <li><strong>Área da base</strong> ($a · b$): fator $= f_a · f_b$. Quadrado ou círculo: $f^{2}$.</li>
                <li><strong>Área lateral</strong> ($P · h$): fator $= f_P · f_h$ (o perímetro varia como o lado).</li>
                <li><strong>Volume</strong> ($a · b · c$): fator $= f_a · f_b · f_c$.</li>
                <li><strong>Variação percentual:</strong> (fator − 1) · 100%.</li>
              </ul>
            </div>
            ${W.box('Caixa a × b × c com variações', W.row(W.nm('pc-a', 'a', 10, 'any', 'min="0"'), W.nm('pc-b', 'b', 8, 'any', 'min="0"'), W.nm('pc-c', 'c', 5, 'any', 'min="0"')) + W.row(W.nm('pc-pa', 'Δa (%)', 10, 'any'), W.nm('pc-pb', 'Δb (%)', -10, 'any'), W.nm('pc-pc', 'Δc (%)', 20, 'any')) + W.txt('pc-v', 'Volume: ') + W.txt('pc-t', 'Área total: ') + W.txt('pc-ab', 'Área da base a·b: ') + W.hint('pc-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Quadro de fatores', `
          ${tbl(['Variação', 'Fator', 'Efeito na grandeza'], [['+10% e −10% em duas dimensões', '$1,10 · 0,90 = 0,99$', 'área −1%'], ['+25% e −20%', '$1,25 · 0,80 = 1,00$', 'área igual'], ['lado de um quadrado +10%', '$1,10^{2} = 1,21$', 'área +21%'], ['aresta de um cubo +10%', '$1,10^{3} = 1,331$', 'volume +33,1%'], ['altura +20% e lado −20% (lateral)', '$1,20 · 0,80 = 0,96$', 'área lateral −4%']])}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Colunas do salão', 'As 4 colunas de um salão são prismas de base quadrada, de lado 40 cm e altura 300 cm. As colunas ficam 20% mais altas e o lado da base diminui 20%. A quantidade de papel de parede para cobri-las aumenta ou diminui?', [
  ['Área lateral', '$A_L = 4 · ℓ · h = 4 · 40 · 300 = 48\\ 000$ cm².'],
  ['Novos valores', '$ℓ = 32$ e $h = 360$: $A_L = 4 · 32 · 360 = 46\\ 080$ cm².'],
  ['Pelos fatores', '$0,80 · 1,20 = 0,96$ ⇒ $−4\\%$.']
], 'O gasto de papel <strong>diminui 4%</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Cubo com 10% a mais', 'A aresta de um cubo aumenta 10%. Em quanto aumentam a área total e o volume?', [
  ['Área', '$6a^{2}$: fator $1,10^{2} = 1,21$ ⇒ $+21\\%$.'],
  ['Volume', '$a^{3}$: fator $1,10^{3} = 1,331$ ⇒ $+33,1\\%$.']
], 'Área <strong>+21%</strong> e volume <strong>+33,1%</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Compensação perfeita', 'O comprimento de um retângulo aumenta 25% e a largura diminui 20%. O que acontece com a área?', [
  ['Fatores', '$1,25 · 0,80 = 1,00$.']
], 'A área <strong>não muda</strong>: $+25\\%$ e $−20\\%$ se compensam (mas o perímetro muda!).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Perímetro × área', 'O lado de um quadrado aumenta 10%. Qual a variação do perímetro e da área?', [
  ['Perímetro', '$4ℓ$: fator $1,10$ ⇒ $+10\\%$.'],
  ['Área', '$ℓ^{2}$: fator $1,10^{2} = 1,21$ ⇒ $+21\\%$.']
], 'Perímetro <strong>+10%</strong>; área <strong>+21%</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'De volta ao lado', 'A área de um quadrado diminui 36%. Em quanto diminui o lado?', [
  ['Fator da área', '$1 − 0,36 = 0,64$.'],
  ['Fator do lado', '$√{0,64} = 0,8$ ⇒ $−20\\%$.']
], 'O lado diminui <strong>20%</strong>.', 'growth'));

a.push(pratique('Área da base', 'O comprimento de um retângulo aumenta 10% e a largura diminui 10%. A área:',
  ['não muda', 'diminui 1%', 'aumenta 1%', 'diminui 20%', 'aumenta 20%'], 1,
  '$1,10 · 0,90 = 0,99$. <strong>Alternativa B.</strong>'));
a.push(pratique('Cubo', 'A aresta de um cubo aumenta 10%. O volume aumenta:',
  ['10%', '21%', '30%', '33,1%', '36%'], 3,
  '$1,10^{3} = 1,331$. <strong>Alternativa D.</strong>', '', 'growth'));
a.push(estiloEnem('Colunas mais altas', 'Uma coluna de base quadrada tem a altura aumentada em 20% e o lado da base reduzido em 20%. A área lateral (a ser revestida) sofre variação de:',
  ['−4%', '0%', '+4%', '−20%', '+20%'], 0,
  '$A_L = 4ℓh$: $0,80 · 1,20 = 0,96$ ⇒ $−4\\%$. <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a porcentagem engana', [
  ['Somar porcentagens', '+10% e −10% não dão 0%: dão $−1\\%$ (produto dos fatores).'],
  ['Perímetro e área são diferentes', 'Lado +10%: perímetro +10%, área +21%.'],
  ['Usar a porcentagem como fator', 'Aumento de 10% ⇒ fator $1,10$ (e não $0,10$).'],
  ['Esquecer o expoente', 'Quadrado: $f^{2}$; cubo: $f^{3}$.']
]));
a.push(quiz([
  { q: 'Uma redução de 20% corresponde ao fator:', o: ['0,20', '0,80', '1,20', '0,02'], a: 1 },
  { q: 'Lado de um quadrado +20%: a área aumenta:', o: ['20%', '40%', '44%', '48%'], a: 2 },
  { q: 'Altura +10% e base inalterada: o volume de um prisma:', o: ['aumenta 10%', 'aumenta 1%', 'aumenta 20%', 'não muda'], a: 0 },
  { q: '+50% e −50% em duas dimensões: a área:', o: ['não muda', 'diminui 25%', 'diminui 50%', 'aumenta 25%'], a: 1 }
]));
a.push(fechamento([
  ['Fator', 'Aumento: $1 + i$; redução: $1 − i$.'],
  ['Cascata', 'Multiplique os fatores das medidas.'],
  ['Variação', '(fator − 1) · 100%.']
], 'Multiplique fatores; nunca some porcentagens de dimensões diferentes.'));

pages.push({ out: BASE + 'aula-1-porcentagem-em-prismas.html', html: K.deck({
  title: 'Porcentagem em área, perímetro e volume — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 65 e 66 · Porcentagem em prismas', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pc-a', 'pc-b', 'pc-c', 'pc-pa', 'pc-pb', 'pc-pc'], function(){ var v = ['pc-a', 'pc-b', 'pc-c', 'pc-pa', 'pc-pb', 'pc-pc'].map(function(i){ return +$(i).value; }), a = v[0], b = v[1], c = v[2];
    if(!v.every(isFinite) || a <= 0 || b <= 0 || c <= 0 || v[3] <= -100 || v[4] <= -100 || v[5] <= -100){ ['pc-v', 'pc-t', 'pc-ab'].forEach(function(i){ $(i).textContent = '—'; }); $('pc-h').textContent = 'Use medidas positivas e variações maiores que −100%.'; return; }
    var a2 = a * (1 + v[3] / 100), b2 = b * (1 + v[4] / 100), c2 = c * (1 + v[5] / 100);
    var V0 = a * b * c, V1 = a2 * b2 * c2, T0 = 2 * (a * b + b * c + a * c), T1 = 2 * (a2 * b2 + b2 * c2 + a2 * c2), B0 = a * b, B1 = a2 * b2, d = function(x, y){ return (x >= y ? '+' : '') + pt((x / y - 1) * 100, 2) + '%'; };
    $('pc-v').textContent = pt(V0, 3) + ' → ' + pt(V1, 3) + ' (' + d(V1, V0) + ')'; $('pc-t').textContent = pt(T0, 3) + ' → ' + pt(T1, 3) + ' (' + d(T1, T0) + ')'; $('pc-ab').textContent = pt(B0, 3) + ' → ' + pt(B1, 3) + ' (' + d(B1, B0) + ')';
    $('pc-h').textContent = 'Fatores: ' + pt(1 + v[3] / 100, 3) + ', ' + pt(1 + v[4] / 100, 3) + ' e ' + pt(1 + v[5] / 100, 3) + '. O volume muda pelo produto dos três; a área total não é um simples produto.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Porcentagem em prismas: <span>fatores em cascata</span>',
  lede: 'Aumento de i: fator 1 + i; redução de i: fator 1 − i. Áreas e volumes mudam pelo produto dos fatores das medidas.',
  badges: ['1 + i / 1 − i', 'produto dos fatores', 'área ≠ perímetro'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Fatores', '1 ± i', 'chart', 'primary', p('+10% ⇒ 1,10 · −10% ⇒ 0,90') + call('Cuidado', 'Não é 0,10.', 'success')],
    ['Área da base', 'Produto', 'target', 'growth', p('+10% e −10%: 0,99.') + call('Resultado', 'Área −1%.', 'success')],
    ['Área lateral', 'P · h', 'scale', 'decay', p('Lado −20% e altura +20%: 0,96.') + call('Resultado', '−4%.', 'success')],
    ['Volume', 'Três fatores', 'link', 'success', p('Cubo +10%: $1,10^{3} = 1,331$.') + call('Resultado', '+33,1%.', 'success')],
    ['Perímetro', 'Como o lado', 'up', 'primary', p('Quadrado +10%: perímetro +10%, área +21%.') + call('Observe', 'Grandezas diferentes.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Fator, não porcentagem.', 'Quantos fatores?', 'Variação = fator − 1.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Somar +10% e −10%.', 'Usar 0,10 como fator.', 'Confundir variação do perímetro e da área.', 'Esquecer o quadrado ou o cubo.', 'Arredondar no meio da conta.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Porcentagem em prismas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: caixa de suco, colunas, cubo, retângulo e quadrado.',
  final: 'Fatores multiplicam-se: aumente, reduza e confira.',
  questions: [
    { badge: 'Estilo ENEM · caixa de suco', text: 'Em uma caixa de base retangular, o comprimento aumenta 10% e a largura diminui 10%.', cmd: 'A área da base:', opts: ['não muda', 'diminui 1%', 'aumenta 1%', 'diminui 20%', 'aumenta 20%'], a: 1,
      sol: '<p>$1,10 · 0,90 = 0,99$: queda de 1%.</p>' },
    { badge: 'Estilo ENEM · colunas', text: 'Uma coluna de base quadrada tem a altura aumentada em 20% e o lado da base reduzido em 20%.', cmd: 'A área lateral varia:', opts: ['−4%', '0%', '+4%', '−20%', '+20%'], a: 0,
      sol: '<p>$A_L = 4ℓh$ ⇒ $0,80 · 1,20 = 0,96$: $−4\\%$.</p>' },
    { badge: 'Estilo ENEM · cubo', text: 'A aresta de um cubo aumenta 10%.', cmd: 'O volume aumenta:', opts: ['10%', '21%', '30%', '33,1%', '36%'], a: 3,
      sol: '<p>$1,10^{3} = 1,331$.</p>' },
    { badge: 'Estilo ENEM · retângulo', text: 'O comprimento de um retângulo aumenta 25% e a largura diminui 20%.', cmd: 'A área:', opts: ['diminui 5%', 'não muda', 'aumenta 5%', 'aumenta 45%', 'diminui 45%'], a: 1,
      sol: '<p>$1,25 · 0,80 = 1$: não muda.</p>' },
    { badge: 'Estilo ENEM · quadrado', text: 'O lado de um quadrado aumenta 10%.', cmd: 'A área aumenta:', opts: ['10%', '20%', '21%', '22%', '100%'], a: 2,
      sol: '<p>$1,10^{2} = 1,21$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'A grandeza <span style="color:var(--growth);">aumenta, diminui ou não muda</span>?',
  subtitle: 'Calcule o produto dos fatores e decida.',
  tpl: cClassificar({
    cats: ['Aumenta', 'Diminui', 'Não muda'],
    intro: 'Cada cartão descreve variações em porcentagem. Calcule o fator final e clique em <strong>Conferir</strong>.',
    final: 'Fator maior que 1 aumenta; menor que 1 diminui; igual a 1 não muda.',
    itens: [
      ['Comprimento +10% e largura −10% (área do retângulo)', 1, '$1,10 · 0,90 = 0,99$: diminui 1%.'],
      ['Comprimento +25% e largura −20% (área)', 2, '$1,25 · 0,80 = 1$: não muda.'],
      ['Altura +20% e lado da base −20% (área lateral)', 1, '$1,20 · 0,80 = 0,96$: diminui 4%.'],
      ['Lado do quadrado +10% (área)', 0, '$1,10^{2} = 1,21$: aumenta 21%.'],
      ['Aresta do cubo +10% (volume)', 0, '$1,10^{3} = 1,331$: aumenta 33,1%.'],
      ['Raio da base −10% (área da base do cilindro)', 1, '$0,90^{2} = 0,81$: diminui 19%.'],
      ['Comprimento −50% e largura ×2 (área)', 2, '$0,5 · 2 = 1$: não muda.'],
      ['Altura +10%, base igual (volume do prisma)', 0, '$V = A_B · h$: ×1,10.'],
      ['Comprimento +50% e largura −50% (área)', 1, '$1,5 · 0,5 = 0,75$: diminui 25%.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Porcentagem em prismas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: fator, área da base, lateral, cubo e quadrado. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: fatores, produtos e variações.',
  problems: [
    { tag: 'Fator', q: 'Qual o fator de um aumento de 10%?', a: 1.1, ph: 'fator', hint: '1 + 0,10.', sol: '<p>$1,10$.</p>' },
    { tag: 'Área da base', q: 'Comprimento +10% e largura −10%: qual a variação percentual da área? (negativa se diminui)', a: -1, ph: '%', hint: '1,10 · 0,90 − 1.', sol: '<p>$−1\\%$.</p>' },
    { tag: 'Área lateral', q: 'Altura +20% e lado da base −20%: qual a variação percentual da área lateral?', a: -4, ph: '%', hint: '0,80 · 1,20 − 1.', sol: '<p>$−4\\%$.</p>' },
    { tag: 'Cubo', q: 'Aresta de um cubo +10%: qual o aumento percentual do volume?', a: 33.1, ph: '%', hint: '1,10³ − 1.', sol: '<p>$33,1\\%$.</p>' },
    { tag: 'Quadrado', q: 'Lado de um quadrado +10%: qual o aumento percentual da área?', a: 21, ph: '%', hint: '1,10² − 1.', sol: '<p>$21\\%$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Porcentagem em Área e Perímetro', accent: 'primary', icon: 'bars',
  aulas: [['Aulas 65–66', 'Porcentagem em área, perímetro e volume de prismas', 'aula-1-porcentagem-em-prismas.html']],
  enem: 'Porcentagem em prismas no estilo ENEM', cria: 'Aumenta, diminui ou não muda?', pratica: 'Porcentagem em prismas: trilha de desafios'
}, pages };
