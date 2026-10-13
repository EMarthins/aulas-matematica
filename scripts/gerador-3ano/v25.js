// Unidade v25 — Relação entre área e perímetro (aulas 67 e 68 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'area-e-perimetro', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v25', BRAND = 'Relação entre Área e Perímetro', CAP = 'Aulas 67 e 68';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 67 e 68', h1: 'Área e perímetro: <span style="color:var(--primary);">quando o zoom muda tudo</span>',
  sub: 'Ao dar zoom em uma foto, a moldura dobra, mas o espaço ocupado quadruplica. Perímetro e área não crescem do mesmo jeito: a razão de semelhança k é a chave.',
  badges: [['P ∝ k'], ['A ∝ k²', 'growth'], ['V ∝ k³', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da foto aos números.', [
  ['Razão de semelhança', 'o fator k', 'bulb'],
  ['Perímetro', 'acompanha k', 'target'],
  ['Área', 'acompanha k²', 'chart'],
  ['Perímetro fixo', 'qual forma tem a maior área?', 'link'],
  ['Aplicações', 'escalas, cercas e molduras', 'scale']
]));
a.push(objetivosSlide([
  'Relacionar as <strong>dimensões lineares</strong> de figuras semelhantes com <strong>perímetro</strong> ($P ∝ k$) e <strong>área</strong> ($A ∝ k^{2}$).',
  'Estender a ideia ao <strong>volume</strong> ($V ∝ k^{3}$).',
  'Comparar retângulos de <strong>mesmo perímetro</strong> e descobrir o de maior área.',
  'Resolver problemas de <strong>escala</strong>, <strong>cercas</strong> e <strong>molduras</strong>.'
], 'Dica', 'Se as dimensões lineares são multiplicadas por $k$: comprimentos ×$k$, áreas ×$k^{2}$, volumes ×$k^{3}$. Pensar em “quantos quadradinhos” ajuda a lembrar do $k^{2}$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O zoom na foto', `
          ${lede('Um quadrado de lado 1 m (um jardim) pede <strong>4 m de arame</strong> e <strong>1 ladrilho</strong> de 1 m × 1 m. Dobrando o lado para 2 m: o arame passa a ser <strong>8 m</strong> (dobra), mas os ladrilhos passam a ser <strong>4</strong> (quadruplicam).')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Lado', 'Perímetro (arame)', 'Área (ladrilhos)'], [['1 m', '4 m', '1'], ['2 m', '8 m', '4'], ['3 m', '12 m', '9'], ['k · 1 m', '4k m', '$k^{2}$']])}
            ${mini('Ao dobrar todas as medidas de um retângulo, a área fica multiplicada por:', ['2', '3', '4', '8'], 2, '$k = 2$: perímetro ×2 e área ×$2^{2} = 4$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · razão de semelhança', 'Perímetro ∝ k e área ∝ k²', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Razão de semelhança $k$:</strong> fator pelo qual multiplicamos as dimensões lineares.</li>
                <li><strong>Perímetro:</strong> $P' = k · P$ (acompanha $k$).</li>
                <li><strong>Área:</strong> $A' = k^{2} · A$ (acompanha $k^{2}$).</li>
                <li><strong>Volume:</strong> $V' = k^{3} · V$.</li>
                <li><strong>Perímetro fixo:</strong> entre retângulos de mesmo perímetro, o <strong>quadrado</strong> tem a maior área. <strong>Área fixa:</strong> o quadrado tem o menor perímetro.</li>
              </ul>
            </div>
            ${W.box('Perímetro fixo: qual a área?', W.row(W.nm('pa-p', 'perímetro P', 24, 'any', 'min="0"'), W.nm('pa-b', 'base b', 4, 'any', 'min="0"')) + W.txt('pa-h', 'Altura = P ÷ 2 − b = ') + W.txt('pa-a', 'Área = ') + W.txt('pa-m', 'Área máxima (quadrado) = ') + W.hint('pa-hh'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Retângulos de perímetro 24', `
          ${tbl(['Base', 'Altura', 'Área'], [['1', '11', '11'], ['2', '10', '20'], ['3', '9', '27'], ['4', '8', '32'], ['5', '7', '35'], ['6', '6', '36 (quadrado)']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Perímetro igual, áreas diferentes', 'Mesmo contorno, espaços diferentes: a forma “mais redonda” (quadrado) é a que mais aproveita.', 'success')}
            ${callout('Área igual, perímetros diferentes', 'Para 36 m²: $1 × 36$ pede 74 m de cerca; $6 × 6$ pede apenas 24 m.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Ampliando uma foto', 'Uma foto de 20 cm por 30 cm é ampliada com razão $k = 1,5$. Qual o novo perímetro e a nova área?', [
  ['Original', '$P = 2(20 + 30) = 100$ cm; $A = 20 · 30 = 600$ cm².'],
  ['Perímetro', '$P\' = 1,5 · 100 = 150$ cm.'],
  ['Área', '$A\' = 1,5^{2} · 600 = 2,25 · 600 = 1\\ 350$ cm² (conferindo: $30 · 45 = 1\\ 350$ ✓).']
], 'Perímetro $150$ cm e área $1\\ 350$ cm² (a área ficou 2,25 vezes maior).'));
a.push(exemplo('Exemplo resolvido', 'Mesmo perímetro, qual a maior área?', 'Entre os retângulos de perímetro 24 m e lados inteiros, qual tem a maior área?', [
  ['Semiperímetro', '$b + h = 12$.'],
  ['Teste', 'Áreas: $11, 20, 27, 32, 35, 36$.'],
  ['Máximo', '$b = h = 6$ (quadrado): $A = 36$ m².']
], 'O quadrado de lado 6 m, com <strong>36 m²</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Cerca ao lado de um rio', 'Um fazendeiro tem 40 m de cerca para fechar um pasto retangular em um dos lados do qual passa um rio (não precisa de cerca). Qual a maior área?', [
  ['Lados', 'Dois lados de medida $x$ e um de $40 − 2x$ (paralelo ao rio).'],
  ['Área', '$A(x) = x(40 − 2x)$: com $x = 5, 10, 15$: $175, 200, 150$.'],
  ['Máximo', '$x = 10$: lados $10$ e $20$, $A = 200$ m².']
], '<strong>200 m²</strong>, com lados de 10 m e 20 m.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Escala de mapa', 'Em uma planta na escala 1:100, uma sala tem 4 cm² de área no desenho. Qual a área real?', [
  ['Razão linear', '$k = 100$.'],
  ['Razão de áreas', '$k^{2} = 10\\ 000$.'],
  ['Área real', '$4 · 10\\ 000 = 40\\ 000$ cm² $= 4$ m².']
], '<strong>4 m²</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O losango', 'Um losango tem diagonais de 12 cm e 8 cm. Qual a área? E se as diagonais dobrarem?', [
  ['Área', '$A = {d_1 · d_2|2} = {12 · 8|2} = 48$ cm².'],
  ['Com $k = 2$', '$A\' = 2^{2} · 48 = 192$ cm² (conferindo: ${24 · 16|2} = 192$ ✓).']
], '$48$ cm², e $192$ cm² ao dobrar as diagonais.', 'growth'));

a.push(pratique('Dobrando as medidas', 'Dobrando todas as dimensões de um retângulo, o perímetro e a área ficam multiplicados, respectivamente, por:',
  ['2 e 2', '2 e 4', '4 e 2', '4 e 4', '2 e 8'], 1,
  '$P ∝ k = 2$ e $A ∝ k^{2} = 4$. <strong>Alternativa B.</strong>'));
a.push(pratique('Foto ampliada', 'Uma foto de 20 cm × 30 cm é ampliada 1,5 vez em cada dimensão. A nova área, em cm², é:',
  ['900', '1 000', '1 350', '1 500', '2 700'], 2,
  '$600 · 1,5^{2} = 1\\ 350$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Cerca com rio', 'Um fazendeiro dispõe de 40 m de cerca para fechar um pasto retangular que já tem um dos lados protegido por um rio. A maior área possível, em m², é:',
  ['100', '150', '200', '300', '400'], 2,
  '$A(x) = x(40 − 2x)$, máximo em $x = 10$: $200$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a relação entre área e perímetro engana', [
  ['Achar que a área acompanha k', 'Dobrar as medidas dobra o perímetro, mas <strong>quadruplica</strong> a área.'],
  ['Misturar escalas lineares e de área', 'Escala 1:100 vale para comprimentos; para áreas, 1:10 000.'],
  ['Perímetro igual ⇒ área igual', 'Retângulos de mesmo perímetro têm áreas diferentes.'],
  ['Esquecer o lado do rio', 'Na cerca com rio, só três lados precisam de cerca.']
]));
a.push(quiz([
  { q: 'Triplicando todas as dimensões de uma figura, a área fica multiplicada por:', o: ['3', '6', '9', '27'], a: 2 },
  { q: 'Dobrando todas as arestas de um cubo, o volume fica multiplicado por:', o: ['2', '4', '6', '8'], a: 3 },
  { q: 'Entre os retângulos de mesmo perímetro, tem maior área:', o: ['o mais comprido', 'o mais estreito', 'o quadrado', 'todos têm a mesma'], a: 2 },
  { q: 'Metade das dimensões ($k = 1 ÷ 2$): a área fica:', o: ['pela metade', 'um quarto', 'um terço', 'um oitavo'], a: 1 }
]));
a.push(fechamento([
  ['Razão k', 'Perímetro ×k, área ×k², volume ×k³.'],
  ['Perímetro fixo', 'Quadrado: maior área.'],
  ['Escalas', 'Linear $k$; de área $k^{2}$.']
], 'Linear, quadrado, cubo: a regra do zoom para qualquer figura.'));

pages.push({ out: BASE + 'aula-1-razao-de-semelhanca.html', html: K.deck({
  title: 'Relação entre área e perímetro — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 67 e 68 · Relação entre área e perímetro', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pa-p', 'pa-b'], function(){ var P = +$('pa-p').value, b = +$('pa-b').value;
    if(![P, b].every(isFinite) || P <= 0 || b <= 0 || b >= P / 2){ ['pa-h', 'pa-a', 'pa-m'].forEach(function(i){ $(i).textContent = '—'; }); $('pa-hh').textContent = 'Use P > 0 e 0 < b < P ÷ 2.'; return; }
    var h = P / 2 - b, A = b * h, M = Math.pow(P / 4, 2);
    $('pa-h').textContent = pt(h, 3); $('pa-a').textContent = pt(A, 3); $('pa-m').textContent = pt(M, 3) + ' (b = h = ' + pt(P / 4, 3) + ')';
    $('pa-hh').textContent = A >= M - 1e-9 ? 'Quadrado: é a maior área possível para esse perímetro.' : 'A área é ' + pt(M - A, 3) + ' menor que a do quadrado de mesmo perímetro.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Área e perímetro: <span>razão de semelhança</span>',
  lede: 'Com razão de semelhança k: perímetro ×k, área ×k², volume ×k³. Entre retângulos de mesmo perímetro, o quadrado tem a maior área.',
  badges: ['P ×k', 'A ×k²', 'V ×k³'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Razão k', 'Fator linear', 'chart', 'primary', p('Multiplica comprimentos.') + call('Exemplo', 'Zoom de 2 vezes: k = 2.', 'success')],
    ['Perímetro', '×k', 'target', 'growth', p('Acompanha a razão.') + call('Exemplo', '4 m ⇒ 8 m.', 'success')],
    ['Área', '×k²', 'scale', 'decay', p('Quadradinhos: $k · k$.') + call('Exemplo', '1 ⇒ 4 ladrilhos.', 'success')],
    ['Volume', '×k³', 'link', 'success', p('Cubo de aresta 2k: ×8.') + call('Exemplo', 'k = 10: ×1 000.', 'success')],
    ['Perímetro fixo', 'Quadrado ganha', 'up', 'primary', p('P = 24: máxima área 36.') + call('Rio', '40 m: máxima área 200.', 'success')],
    ['Escalas', 'Mapas e plantas', 'check', 'growth', li(['1:100 linear.', '1:10 000 em área.', 'Converta unidades.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Achar que a área dobra quando as medidas dobram.', 'Escala linear usada em área.', 'Perímetro igual ⇒ área igual.', 'Esquecer o lado do rio na cerca.', 'Esquecer o cubo nos volumes.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Área e perímetro <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: dobrando medidas, foto ampliada, perímetro fixo, cerca com rio e escala de planta.',
  final: 'Perímetro acompanha k; área, k².',
  questions: [
    { badge: 'Estilo ENEM · dobrando', text: 'Todas as medidas lineares de um retângulo são dobradas.', cmd: 'A área fica multiplicada por:', opts: ['2', '3', '4', '6', '8'], a: 2,
      sol: '<p>$k = 2$ ⇒ área ×$k^{2} = 4$.</p>' },
    { badge: 'Estilo ENEM · foto', text: 'Uma foto de 20 cm × 30 cm é ampliada 1,5 vez em cada dimensão.', cmd: 'A nova área, em cm², é:', opts: ['1 350', '900', '1 000', '1 500', '2 700'], a: 0,
      sol: '<p>$600 · 2,25 = 1\\ 350$.</p>' },
    { badge: 'Estilo ENEM · perímetro fixo', text: 'Um retângulo de lados inteiros tem perímetro 24 m.', cmd: 'A maior área possível, em m², é:', opts: ['32', '36', '35', '40', '48'], a: 1,
      sol: '<p>O quadrado de lado 6: $36$.</p>' },
    { badge: 'Estilo ENEM · cerca com rio', text: 'Com 40 m de cerca fecha-se um pasto retangular em um dos lados do qual passa um rio.', cmd: 'A maior área, em m², é:', opts: ['100', '150', '200', '300', '400'], a: 2,
      sol: '<p>$A(x) = x(40 − 2x)$, máximo $200$ em $x = 10$.</p>' },
    { badge: 'Estilo ENEM · planta', text: 'Em uma planta na escala 1:100, uma sala tem 4 cm² de área no desenho.', cmd: 'A área real, em m², é:', opts: ['0,4', '4', '40', '400', '4 000'], a: 1,
      sol: '<p>$4 · 10\\ 000 = 40\\ 000$ cm² $= 4$ m².</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória da <span style="color:var(--growth);">razão de semelhança</span>',
  subtitle: 'Ligue cada razão à grandeza que ela multiplica.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se a situação combinar com o fator, o par fica aberto.',
    final: 'Perímetro ×k, área ×k², volume ×k³.',
    pares: [['k = 2: perímetro', '×2'], ['k = 2: área', '×4'], ['k = 3: área', '×9'], ['k = 2: volume', '×8'], ['k = 1/2: área', '×1/4'], ['k = 10: volume', '×1 000']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Área e perímetro: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: área ×9, foto, perímetro fixo, cerca com rio e planta. Digite o número pedido.',
  final: 'Você percorreu a trilha: razão de semelhança e otimização simples.',
  problems: [
    { tag: 'Razão', q: 'Triplicando todas as dimensões, por quanto fica multiplicada a área?', a: 9, ph: 'fator', hint: '3².', sol: '<p>$9$.</p>' },
    { tag: 'Foto', q: 'Foto 20 × 30 cm ampliada 1,5 vez em cada dimensão: qual a nova área, em cm²?', a: 1350, ph: 'cm²', hint: '600 · 2,25.', sol: '<p>$1\\ 350$.</p>' },
    { tag: 'Perímetro fixo', q: 'Retângulo de perímetro 24 m: qual a maior área, em m²?', a: 36, ph: 'm²', hint: 'Quadrado 6 × 6.', sol: '<p>$36$.</p>' },
    { tag: 'Cerca com rio', q: '40 m de cerca, um lado é rio: qual a maior área, em m²?', a: 200, ph: 'm²', hint: 'x(40 − 2x), x = 10.', sol: '<p>$200$.</p>' },
    { tag: 'Planta', q: 'Escala 1:100: 4 cm² no desenho. Qual a área real, em m²?', a: 4, ph: 'm²', hint: '4 · 10 000 cm².', sol: '<p>$4$ m².</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Relação entre Área e Perímetro', accent: 'primary', icon: 'grid',
  aulas: [['Aulas 67–68', 'Relação entre as grandezas de área e de perímetro', 'aula-1-razao-de-semelhanca.html']],
  enem: 'Área e perímetro no estilo ENEM', cria: 'Memória da razão de semelhança', pratica: 'Área e perímetro: trilha de desafios'
}, pages };
