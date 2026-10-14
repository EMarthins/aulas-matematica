// Unidade v27 — Polígonos irregulares e problemas de área (aulas 57 e 58 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'areas-irregulares-e-problemas', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v27', BRAND = 'Áreas irregulares e problemas';

// ===================== AULA 57: decompor, subtrair e contar =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 57', h1: 'Áreas de polígonos irregulares: <span style="color:var(--primary);">decompor, subtrair e contar</span>',
  sub: 'O terreno de uma cidade raramente é um retângulo perfeito. A ideia é antiga e poderosa: cortar a figura em pedaços que já sabemos medir e somar, ou completar a figura e subtrair o que sobrou.',
  badges: [['decompor'], ['subtrair', 'growth'], ['malha quadriculada', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('De uma figura estranha a contas conhecidas.', [
  ['Decompor', 'triângulos, retângulos e trapézios', 'bulb'],
  ['Somar', 'as áreas das partes', 'target'],
  ['Subtrair', 'completar o retângulo e tirar o que sobra', 'chart'],
  ['Malha', 'contar quadradinhos inteiros e metades', 'link'],
  ['Octógono', 'um polígono regular por subtração', 'scale']
]));
a.push(objetivosSlide([
  'Calcular a área de um <strong>polígono irregular</strong> por <strong>decomposição</strong> em figuras conhecidas.',
  'Usar a <strong>subtração de áreas</strong> (figura completada menos o que sobra).',
  'Estimar áreas por <strong>contagem na malha quadriculada</strong> (inteiros e metades).'
], 'Dica', 'Desenhe os <strong>cortes</strong> sobre a figura e <strong>nomeie cada parte</strong> (A₁, A₂, A₃…) antes de calcular: o erro mais comum é esquecer uma parte ou contar uma duas vezes.', 'primary'));

a.push(sl('Para início de conversa', 'Como medir um terreno irregular?', `
          ${lede('Observe um recorte de bairro: os terrenos não têm formas “de livro”. Como calcular a área aproximada de um deles? A estratégia é <strong>dividir em polígonos que já conhecemos</strong> (retângulos, triângulos, trapézios) e somar as áreas.')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: [[0, 0], [8, 0], [8, 3], [5, 6], [2, 3], [0, 3]], fill: 'var(--primary-soft)' }], [[4, 0, '8 m', null, 'middle', 0, 16], [8, 1.5, '3 m', null, 'start', 8, 4]], { w: 280, h: 180 }, [{ de: [0, 3], para: [8, 3] }])}
            ${mini('A linha tracejada divide o terreno em um retângulo e em um triângulo. Para somar as áreas, o que precisamos?', ['só o perímetro', 'as medidas de cada parte (base e altura)', 'o ângulo reto apenas', 'nada: é impossível'], 1, 'Cada parte tem fórmula própria: precisamos de <strong>base e altura</strong> do retângulo e do triângulo.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · três estratégias', 'Decompor, subtrair e contar', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Decompor e somar:</strong> divida em figuras conhecidas e some: $A = A_{1} + A_{2} + …$</li>
                <li><strong>Completar e subtrair:</strong> imagine a figura dentro de um retângulo e subtraia o que sobra: $A = A_{retângulo} − A_{sobras}$.</li>
                <li><strong>Contar na malha:</strong> cada quadradinho vale $1$ u²; quadradinhos <strong>inteiros</strong> contam $1$ e os <strong>metades</strong> contam $0,5$.</li>
                <li>Com vértices em pontos da malha vale o <strong>teorema de Pick</strong>: $A = I + {B|2} − 1$ ($I$ pontos internos e $B$ pontos do contorno).</li>
              </ul>
            </div>
            ${W.box('Polígono na malha', W.sel('m57-f', 'Figura', ['Letra L', 'Triângulo', 'Pentágono', 'Trapézio'], 0) + W.svg('m57-s', '0 0 340 220', '340px') + W.txt('m57-r', 'Área (pontos): ') + W.txt('m57-a', 'Área (coordenadas): ') + W.hint('m57-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Decompor em retângulos', 'Um terreno em “L” é formado por um retângulo de $6$ m por $2$ m e outro de $3$ m por $3$ m encostado nele. Qual a área?', [
  ['Parte 1', '$A_{1} = 6 · 2 = 12$ m².'],
  ['Parte 2', '$A_{2} = 3 · 3 = 9$ m².'],
  ['Soma', '$A = 12 + 9 = 21$ m².']
], 'A área do terreno é $21$ m².'));
a.push(exemplo('Exemplo resolvido', 'Dois triângulos e um retângulo', 'Um polígono é formado por um retângulo de $4$ cm por $3$ cm, um triângulo de base $4$ cm e altura $2$ cm em cima e outro de base $3$ cm e altura $3$ cm ao lado. Calcule a área total.', [
  ['Retângulo', '$4 · 3 = 12$.'],
  ['Triângulo 1', '${4 · 2|2} = 4$.'.replace('${', '$ {')],
  ['Triângulo 2', '${3 · 3|2} = 4,5$.'.replace('${', '$ {')],
  ['Soma', '$12 + 4 + 4,5 = 20,5$ cm².']
], 'A área é $20,5$ cm².', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Salão com canto recortado', 'Um salão retangular de $10$ m por $8$ m tem um canto de $3$ m por $2$ m ocupado por um pilar maciço. Qual a área livre?', [
  ['Retângulo completo', '$10 · 8 = 80$ m².'],
  ['Recorte', '$3 · 2 = 6$ m².'],
  ['Subtrair', '$80 − 6 = 74$ m².']
], 'A área livre é $74$ m².', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Contar na malha', 'Em uma malha de quadradinhos de $1$ cm², uma figura cobre $13$ quadradinhos inteiros e $6$ metades. Qual a área?', [
  ['Inteiros', '$13$ cm².'],
  ['Metades', '$6 · 0,5 = 3$ cm².'],
  ['Total', '$13 + 3 = 16$ cm².']
], 'A área é aproximadamente $16$ cm².', 'decay'));
a.push(exemplo('Exemplo resolvido', 'Octógono regular por subtração', 'Um octógono regular de lado $a$ é obtido cortando os quatro cantos de um quadrado. Deduza sua área.', [
  ['Cateto do canto', 'Cada canto é um triângulo retângulo isósceles de hipotenusa $a$ e catetos $x = {a|√{2}}$.'.replace('${', '$ {')],
  ['Lado do quadrado', '$ℓ = a + 2x = a + a√{2} = a(1 + √{2})$.'],
  ['Subtrair', '$A = ℓ^{2} − 4 · {x^{2}|2} = a^{2}(1 + √{2})^{2} − a^{2} = a^{2}(2 + 2√{2})$.'.replace('${', '$ {')]
], '$A = 2(1 + √{2}) · a^{2} ≈ 4,83 · a^{2}$.', 'decay'));

a.push(pratique('Soma de partes', 'Um polígono é formado por um retângulo de $6 × 5$ e um triângulo de base $6$ e altura $4$ sobre um dos lados. A área é:',
  ['$30$', '$36$', '$42$', '$54$'], 2, '$30 + {6 · 4|2} = 30 + 12 = 42$. <strong>Alternativa C.</strong>'.replace('${', '$ {')));
a.push(pratique('Subtração', 'Uma praça quadrada de lado $20$ m tem um canteiro retangular de $5$ m por $4$ m no centro. A área livre é:',
  ['$380$ m²', '$400$ m²', '$420$ m²', '$20$ m²'], 0, '$400 − 20 = 380$ m². <strong>Alternativa A.</strong>', '', 'growth'));
a.push(pratique('Malha', 'Uma figura cobre $16$ quadradinhos de $1$ cm² inteiros e $8$ metades. Sua área é:',
  ['$20$ cm²', '$24$ cm²', '$28$ cm²', '$32$ cm²'], 0, '$16 + 8 · 0,5 = 20$ cm². <strong>Alternativa A.</strong>', '', 'decay'));
a.push(estiloEnem('Planta de loja', 'A planta de uma loja tem a forma de um retângulo de $12$ m por $9$ m, do qual foi retirado um canto retangular de $4$ m por $3$ m. A área da loja é, em m²:',
  ['$96$', '$100$', '$108$', '$120$', '$144$'], 0, '$12 · 9 − 4 · 3 = 108 − 12 = 96$ m². <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os polígonos irregulares enganam', [
  ['Esquecer uma parte', 'Nomeie cada parte e confira no final se todas entraram na soma.'],
  ['Contar a parte comum duas vezes', 'Cortes devem <strong>não se sobrepor</strong>.'],
  ['Altura que não é medida na vertical', 'Cada figura usa a <strong>sua</strong> altura, perpendicular à sua base.'],
  ['Metades como inteiros', 'Quadradinhos pela metade valem $0,5$.']
]));
a.push(quiz([
  { q: 'Para calcular a área de uma figura irregular, uma boa estratégia é:', o: ['usar só o perímetro', 'decompor em figuras conhecidas', 'medir apenas um lado', 'multiplicar os lados'], a: 1 },
  { q: 'Um retângulo $10 × 6$ sem um recorte de $2 × 3$ tem área:', o: ['$60$', '$54$', '$66$', '$48$'], a: 1 },
  { q: 'Na malha, um quadradinho pela metade conta:', o: ['$0$', '$0,5$', '$1$', '$2$'], a: 1 },
  { q: 'Os cortes de uma decomposição devem:', o: ['se sobrepor', 'não se sobrepor', 'ser iguais', 'ser sempre triângulos'], a: 1 }
]));
a.push(fechamento([
  ['Decompor', 'Some as áreas das partes: $A = A_{1} + A_{2} + …$'],
  ['Completar', 'Retângulo completo menos as sobras.'],
  ['Malha', 'Inteiros $+$ metades $÷ 2$ (e Pick, se os vértices estão na malha).']
], 'Quando a figura é complicada, divida-a: as fórmulas simples resolvem o resto. Próxima aula: problemas variados de área.'));

// ===================== AULA 58: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 58', h1: 'Problemas de área: <span style="color:var(--primary);">tangram, molduras e terrenos</span>',
  sub: 'O tangram é um quebra-cabeça de sete peças que escondem frações do quadrado. Hoje resolvemos problemas com várias estratégias: decompor, proporção, subtração e equações.',
  badges: [['frações da área'], ['moldura', 'growth'], ['equação do 2º grau', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('De problemas simples a problemas com equações.', [
  ['Tangram', 'cada peça é uma fração do quadrado', 'bulb'],
  ['Moldura', 'figura externa menos figura interna', 'target'],
  ['Razão entre áreas', 'semelhança e proporção', 'chart'],
  ['Equações', 'lados desconhecidos', 'link'],
  ['Estilo ENEM', 'terrenos de mesma área', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer <strong>frações de uma área</strong> em figuras compostas, como o tangram.',
  'Resolver problemas de <strong>molduras, calçadas e áreas livres</strong> por subtração.',
  'Montar <strong>equações</strong> quando um lado é desconhecido.'
], 'Dica', 'Em problemas de comparação de áreas, <strong>escreva a área de cada figura com o desconhecido</strong> e iguale: a equação aparece sozinha.', 'primary'));

b.push(sl('Para início de conversa', 'O tangram e suas frações', `
          ${lede('O tangram tem $7$ peças que formam um quadrado: $2$ triângulos grandes, $1$ médio, $2$ pequenos, $1$ quadrado e $1$ paralelogramo. Se o quadrado inteiro tem $144$ cm², qual a área de cada peça? Dividimos em triângulos pequenos congruentes.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Peça', 'Fração do quadrado', 'Área'], [['Triângulo grande (×2)', '$ {1|4}$ cada', '$36$ cm²'], ['Triângulo médio', '$ {1|8}$', '$18$ cm²'], ['Quadrado pequeno', '$ {1|8}$', '$18$ cm²'], ['Paralelogramo', '$ {1|8}$', '$18$ cm²'], ['Triângulo pequeno (×2)', '$ {1|16}$ cada', '$9$ cm²']])}
            ${mini('Os $7$ triângulos pequenos que cabem no quadrado: quantos formam o triângulo grande?', ['$2$', '$4$', '$8$', '$16$'], 1, 'O quadrado tem $16$ triângulos pequenos; o grande ocupa $1 ÷ 4$, ou seja, $4$ deles.')}
          </div>`.replace('${', '$ {'), { cls: '' }));

b.push(sl('Teoria · moldura e subtração', 'Área de uma moldura', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Uma <strong>moldura</strong> (calçada, borda, passeio) é a região entre dois retângulos: $A_{moldura} = A_{externo} − A_{interno}$.</li>
                <li>Se a moldura tem <strong>largura uniforme</strong> $x$ em volta de um retângulo $c × ℓ$: $A_{externo} = (c + 2x)(ℓ + 2x)$.</li>
                <li>Para <strong>comparar áreas</strong> (terrenos de mesma área), escreva as duas áreas e iguale.</li>
                <li>Se a área depende de um lado desconhecido, resolva a <strong>equação do 2º grau</strong> que aparecer.</li>
              </ul>
            </div>
            ${W.box('Calçada ao redor do jardim', W.row(W.nm('b58-c', 'Jardim: comprimento (m)', 20, 'any', 'min="1"'), W.nm('b58-l', 'largura (m)', 12, 'any', 'min="1"'), W.rg('b58-x', 'Largura da calçada', 0.5, 5, 0.5, 2, ' m')) + W.svg('b58-s', '0 0 340 220', '340px') + W.txt('b58-r', 'Área da calçada: ') + W.hint('b58-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'A moldura de um quadro', 'Um quadro de $50$ cm por $40$ cm tem moldura de $4$ cm de largura em volta de uma foto. Qual a área da moldura?', [
  ['Foto', '$(50 − 8) × (40 − 8) = 42 · 32 = 1344$ cm².'],
  ['Quadro', '$50 · 40 = 2000$ cm².'],
  ['Moldura', '$2000 − 1344 = 656$ cm².']
], 'A moldura ocupa $656$ cm².'));
b.push(exemplo('Exemplo resolvido', 'Calçada em volta do jardim', 'Um jardim retangular de $20$ m por $12$ m será cercado por uma calçada de $2$ m de largura. Qual a área da calçada?', [
  ['Retângulo externo', '$(20 + 4)(12 + 4) = 24 · 16 = 384$ m².'],
  ['Jardim', '$20 · 12 = 240$ m².'],
  ['Calçada', '$384 − 240 = 144$ m².']
], 'A calçada tem $144$ m².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Terrenos de mesma área', 'O terreno de um filho, irregular, tem $120$ m². O terreno do outro filho deve ser retangular, com comprimento $7$ m maior que a largura, e a mesma área. Quais as medidas?', [
  ['Equação', 'Largura $x$, comprimento $x + 7$: $x(x + 7) = 120$ ⇒ $x^{2} + 7x − 120 = 0$.'],
  ['Raízes', '$Δ = 49 + 480 = 529$ e $√{529} = 23$: $x = {−7 + 23|2} = 8$ (a outra raiz é negativa).'.replace('${', '$ {')],
  ['Medidas', 'Largura $8$ m e comprimento $15$ m ($8 · 15 = 120$ ✓).']
], 'O terreno retangular mede $8$ m por $15$ m.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Razão entre áreas', 'Em um tangram de $144$ cm², a peça quadrada tem área $18$ cm². Que fração do tangram ela representa e qual o seu lado?', [
  ['Fração', '$18 ÷ 144 = {1|8}$.'.replace('${', '$ {')],
  ['Lado', '$ℓ^{2} = 18$ ⇒ $ℓ = √{18} = 3√{2} ≈ 4,2$ cm.']
], 'A peça é $ {1|8}$ do tangram e tem lado $3√{2} ≈ 4,2$ cm.'.replace('${', '$ {'), 'decay'));

b.push(pratique('Tangram', 'Em um tangram de $200$ cm², a área do triângulo grande é:',
  ['$25$ cm²', '$50$ cm²', '$100$ cm²', '$12,5$ cm²'], 1, 'O triângulo grande é $ {1|4}$ do quadrado: $200 ÷ 4 = 50$. <strong>Alternativa B.</strong>'.replace('${', '$ {')));
b.push(pratique('Calçada', 'Uma piscina de $10$ m por $6$ m terá uma borda de $1$ m em volta. A área da borda é:',
  ['$16$ m²', '$32$ m²', '$36$ m²', '$60$ m²'], 2, 'Externo: $12 · 8 = 96$; interno: $10 · 6 = 60$; borda: $96 − 60 = 36$ m². <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Mesma área', 'Um retângulo tem largura $x$ e comprimento $x + 3$ e área $40$ m². O menor lado mede:',
  ['$4$ m', '$5$ m', '$6$ m', '$8$ m'], 1, '$x^{2} + 3x − 40 = 0$ ⇒ $x = 5$ (e $5 · 8 = 40$). <strong>Alternativa B.</strong>', '', 'decay'));
b.push(estiloEnem('Terreno do filho mais novo', 'Um terreno irregular tem área de $120$ m². Deseja-se comprar um terreno retangular de mesma área, com comprimento $7$ m maior que a largura. As medidas, em metros, são:',
  ['$7,5$ e $14,5$', '$8,0$ e $15,0$', '$9,0$ e $16,0$', '$10,0$ e $17,0$', '$12,0$ e $19,0$'], 1, '$x(x + 7) = 120$ ⇒ $x = 8$ e comprimento $15$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de área enganam', [
  ['Largura da moldura contada uma vez', 'A moldura soma <strong>duas vezes</strong> sua largura em cada dimensão: $c + 2x$.'],
  ['Perímetro no lugar da área', 'Confira se o enunciado pede m (comprimento) ou m² (área).'],
  ['Raiz negativa', 'Em lados e larguras, descarte a raiz negativa da equação do 2º grau.'],
  ['Frações da área', 'Antes de calcular, verifique se as frações das peças somam $1$.']
]));
b.push(quiz([
  { q: 'Em um tangram de $160$ cm², o triângulo pequeno mede (fração $1 ÷ 16$):', o: ['$5$ cm²', '$10$ cm²', '$20$ cm²', '$40$ cm²'], a: 1 },
  { q: 'A área de uma moldura é:', o: ['externo + interno', 'externo − interno', 'externo × interno', 'perímetro externo'], a: 1 },
  { q: 'Um retângulo de lados $x$ e $x + 2$ com área $15$ tem $x$ igual a:', o: ['$3$', '$5$', '$7$', '$13$'], a: 0 },
  { q: 'Uma calçada de $1$ m em volta de um retângulo $c × ℓ$ forma um retângulo externo de:', o: ['$(c + 1)(ℓ + 1)$', '$(c + 2)(ℓ + 2)$', '$c ℓ + 2$', '$2c + 2ℓ$'], a: 1 }
]));
b.push(fechamento([
  ['Frações', 'Uma figura composta divide-se em partes proporcionais (tangram).'],
  ['Moldura', '$A = A_{externo} − A_{interno}$, com largura somada duas vezes.'],
  ['Equações', 'Iguale as áreas e resolva; descarte raízes negativas.']
], 'Decompor, subtrair e equacionar resolve a maioria dos problemas de área plana. Próxima unidade: a área do círculo e de suas partes.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-poligonos-irregulares.html', html: K.deck({
  title: 'Áreas de polígonos irregulares — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 57 · Polígonos irregulares', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}).replace('-', '−'); }
  function gcd(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ var t = b; b = a % b; a = t; } return a; }
  var FIG = [[[0, 0], [6, 0], [6, 2], [3, 2], [3, 5], [0, 5]], [[0, 0], [6, 0], [2, 4]], [[1, 0], [5, 0], [6, 3], [3, 5], [0, 3]], [[0, 0], [8, 0], [6, 3], [2, 3]]];
  function area2(p){ var s = 0; for(var i = 0; i < p.length; i++){ var q = p[(i + 1) % p.length]; s += p[i][0] * q[1] - q[0] * p[i][1]; } return Math.abs(s); }
  bind(['m57-f'], function(){ var P = FIG[+$('m57-f').value], svg = $('m57-s'), W = 340, H = 220, c = 22, pad = 18, mx = 0, my = 0; P.forEach(function(p){ mx = Math.max(mx, p[0]); my = Math.max(my, p[1]); });
    c = Math.min(c, (W - 2 * pad) / mx, (H - 2 * pad) / my); var ox = (W - mx * c) / 2, oy = (H + my * c) / 2, X = function(x){ return ox + x * c; }, Y = function(y){ return oy - y * c; };
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    for(var x = 0; x <= mx; x++) el('line', {x1: X(x), y1: Y(0), x2: X(x), y2: Y(my), stroke: 'var(--line)', 'stroke-width': 1}, svg);
    for(var y = 0; y <= my; y++) el('line', {x1: X(0), y1: Y(y), x2: X(mx), y2: Y(y), stroke: 'var(--line)', 'stroke-width': 1}, svg);
    el('polygon', {points: P.map(function(p){ return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.6, 'stroke-linejoin': 'round'}, svg);
    P.forEach(function(p){ el('circle', {cx: X(p[0]), cy: Y(p[1]), r: 3.6, fill: 'var(--growth)'}, svg); });
    var A = area2(P) / 2, B = 0; for(var i = 0; i < P.length; i++){ var q = P[(i + 1) % P.length]; B += gcd(q[0] - P[i][0], q[1] - P[i][1]); } var I = A - B / 2 + 1;
    $('m57-r').textContent = 'I = ' + pt(I, 0) + ', B = ' + B + ' ⇒ A = I + B/2 − 1 = ' + pt(I + B / 2 - 1); $('m57-a').textContent = pt(A) + ' u²'; $('m57-h').textContent = 'Os dois métodos coincidem: o teorema de Pick vale para polígonos com vértices nos pontos da malha.'; });`
}) });
pages.push({ out: BASE + 'aula-2-problemas-de-area.html', html: K.deck({
  title: 'Problemas de área: tangram, molduras e terrenos — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 58 · Problemas de área', slides: b,
  extra: WJS + BIND + G2.GJS + String.raw`
  bind(['b58-c', 'b58-l', 'b58-x'], function(){ var c = +$('b58-c').value, l = +$('b58-l').value, x = +$('b58-x').value; $('b58-xv').textContent = pt(x, 1);
    if(!(c > 0 && l > 0)){ $('b58-s').innerHTML = ''; $('b58-r').textContent = '—'; return; }
    var svg = $('b58-s'), P = polS(svg, [[-x, -x], [c + x, -x], [c + x, l + x], [-x, l + x]], []);
    el('polygon', {points: [[0, 0], [c, 0], [c, l], [0, l]].map(function(p){ return P.X(p[0]).toFixed(1) + ',' + P.Y(p[1]).toFixed(1); }).join(' '), fill: 'var(--success-soft)', stroke: 'var(--success)', 'stroke-width': 2.2}, svg);
    var ext = (c + 2 * x) * (l + 2 * x), inn = c * l; $('b58-r').textContent = pt(ext - inn, 2) + ' m²';
    $('b58-h').textContent = 'Externo: ' + pt(c + 2 * x, 2) + ' × ' + pt(l + 2 * x, 2) + ' = ' + pt(ext, 2) + ' m²; jardim: ' + pt(inn, 2) + ' m²; calçada = diferença.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Áreas irregulares e problemas', accent: 'growth', icon: 'polygon',
  aulas: [['Aula 57', 'Áreas de polígonos irregulares: decompor, subtrair e contar', 'aula-1-poligonos-irregulares.html'], ['Aula 58', 'Problemas de área: tangram, molduras e terrenos', 'aula-2-problemas-de-area.html']],
  pendente: true
}, pages };
