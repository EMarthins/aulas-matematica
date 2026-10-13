// Unidade v19 — Cilindro: características, planificação e área da superfície (aulas 51 a 53 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'cilindro-area', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v19', BRAND = 'Cilindro: Características e Área', CAP = 'Aulas 51 a 53';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: características =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 51', h1: 'Cilindro: <span style="color:var(--primary);">características e planificação</span>',
  sub: 'Latas, canos, tambores e copos têm “formato cilíndrico”. O cilindro reto nasce de um retângulo que gira em torno de um de seus lados.',
  badges: [['2 bases circulares'], ['geratriz = altura', 'growth'], ['planificação: retângulo + 2 círculos', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da lata ao sólido.', [
  ['Reconhecer', 'objetos cilíndricos', 'bulb'],
  ['Definição', 'bases circulares paralelas', 'target'],
  ['Elementos', 'raio, altura e geratriz', 'chart'],
  ['Classificação', 'reto ou oblíquo', 'link'],
  ['Planificação', 'retângulo 2πr × h', 'scale']
]));
a.push(objetivosSlide([
  'Identificar os <strong>elementos</strong> do cilindro: bases, raio $r$, altura $h$ e geratriz $g$.',
  'Distinguir cilindro <strong>reto</strong> (de revolução) de <strong>oblíquo</strong>.',
  'Entender o cilindro reto como o sólido gerado pela <strong>rotação de um retângulo</strong>.',
  'Reconhecer a <strong>planificação</strong>: um retângulo de lados $2πr$ e $h$ e dois círculos.'
], 'Dica', 'No cilindro <strong>reto</strong>, a geratriz é igual à altura: $g = h$. O retângulo da planificação tem <strong>um lado igual ao comprimento da circunferência da base</strong> ($2πr$).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Tudo tem formato cilíndrico?', `
          ${lede('Lata de refrigerante, rolo de papel, cano de PVC: o que têm em comum? O <strong>formato cilíndrico</strong>. Mas, pela definição, nem todos são cilindros (o rolo é oco, a lata tem tampa abaulada).')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.cilindro({ lr: 'r', lh: 'h', lg: 'g', w: 240, h: 190 })}</div>
            ${mini('Um cilindro reto pode ser obtido girando um retângulo em torno de:', ['uma diagonal', 'um de seus lados', 'seu centro', 'um vértice'], 1, 'A rotação completa de um retângulo em torno de um de seus lados gera um cilindro reto.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · elementos', 'Cilindro reto e oblíquo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Bases:</strong> dois círculos congruentes em planos paralelos; <strong>raio</strong> $r$.</li>
                <li><strong>Altura $h$:</strong> distância entre os planos das bases.</li>
                <li><strong>Geratriz $g$:</strong> segmento que gera a superfície lateral.</li>
                <li><strong>Reto:</strong> geratrizes perpendiculares às bases ($g = h$). <strong>Oblíquo:</strong> geratrizes inclinadas.</li>
                <li><strong>Equilátero:</strong> cilindro reto com $h = 2r$ (seção meridiana quadrada).</li>
              </ul>
            </div>
            ${W.box('Planificação do cilindro reto', W.row(W.nm('ci-r', 'raio r', 3, 'any', 'min="0"'), W.nm('ci-h', 'altura h', 10, 'any', 'min="0"')) + W.txt('ci-c', 'Comprimento da base 2πr = ') + W.txt('ci-ret', 'Retângulo da lateral: ') + W.txt('ci-e', 'Equilátero? ') + W.hint('ci-hh'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Planificação', `
          <div class="grid2">
            <div>${S.redeCilindro({ lr: 'r', l1: '2πr × h', w: 250, h: 200 })}</div>
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>2 círculos de raio $r$ (as bases).</li>
                <li>1 retângulo de <strong>base $2πr$</strong> e <strong>altura $h$</strong> (a superfície lateral aberta).</li>
                <li>O comprimento do retângulo é o <strong>perímetro da base</strong>.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Dimensões do retângulo da lateral', 'Um cilindro reto tem raio 3 cm e altura 10 cm. Quais as dimensões do retângulo da superfície lateral planificada? (Use $π = 3$.)', [
  ['Comprimento', 'É o perímetro da base: $2πr = 2 · 3 · 3 = 18$ cm.'],
  ['Altura', '$h = 10$ cm.']
], 'Retângulo de <strong>18 cm por 10 cm</strong> (com $π = 3$).'));
a.push(exemplo('Exemplo resolvido', 'Cilindro equilátero', 'Um cilindro reto tem raio 4 cm. Para que seja equilátero, quanto deve medir a altura?', [
  ['Definição', 'Equilátero: seção meridiana quadrada ⇒ $h = 2r$.'],
  ['Cálculo', '$h = 2 · 4 = 8$ cm.']
], '$h = 8$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Reto ou oblíquo?', 'Em um cilindro, a geratriz mede 13 cm e a altura 12 cm. O cilindro é reto?', [
  ['Comparar', 'No reto, $g = h$.'],
  ['Aqui', '$g = 13 ≠ 12 = h$.']
], 'É um cilindro <strong>oblíquo</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Rotação de retângulo', 'Girando um retângulo de 5 cm por 8 cm em torno do lado de 8 cm, qual o cilindro obtido?', [
  ['O lado fixo', 'O lado de 8 cm vira o <strong>eixo</strong> e a <strong>altura</strong>.'],
  ['O outro lado', 'O lado de 5 cm vira o <strong>raio</strong>.']
], 'Cilindro reto com $r = 5$ cm e $h = 8$ cm.', 'growth'));

a.push(pratique('Planificação', 'A planificação do cilindro reto é formada por:',
  ['1 retângulo e 1 círculo', '1 retângulo e 2 círculos', '2 retângulos e 2 círculos', '1 setor e 1 círculo', '2 círculos e 1 triângulo'], 1,
  'Uma lateral retangular e duas bases circulares. <strong>Alternativa B.</strong>'));
a.push(pratique('Equilátero', 'Um cilindro equilátero tem raio 5 cm. Sua altura é:',
  ['5 cm', '7,5 cm', '10 cm', '15 cm', '25 cm'], 2,
  '$h = 2r = 10$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Rótulo de uma lata', 'O rótulo que envolve toda a lateral de uma lata cilíndrica de raio 3 cm e altura 10 cm é um retângulo. Com $π = 3$, o comprimento desse retângulo (a parte que dá a volta na lata) é:',
  ['9 cm', '12 cm', '18 cm', '30 cm', '54 cm'], 2,
  '$2πr = 2 · 3 · 3 = 18$ cm. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o cilindro engana', [
  ['Todo objeto “redondo” é cilindro?', 'Cilindro tem duas bases circulares paralelas e lateral reta; latas com tampa abaulada e canos ocos são aproximações.'],
  ['Confundir geratriz e altura', 'Só no cilindro <strong>reto</strong> vale $g = h$.'],
  ['Usar o diâmetro como raio', '$2πr = π · d$.'],
  ['Esquecer as bases', 'A planificação tem <strong>2 círculos</strong> além do retângulo.']
]));
a.push(quiz([
  { q: 'Quantas bases tem um cilindro?', o: ['0', '1', '2', '3'], a: 2 },
  { q: 'O comprimento do retângulo da planificação é:', o: ['$r$', '$πr$', '$2πr$', '$πr^{2}$'], a: 2 },
  { q: 'No cilindro reto, a geratriz é:', o: ['maior que a altura', 'igual à altura', 'igual ao raio', 'igual ao diâmetro'], a: 1 },
  { q: 'Um cilindro equilátero tem altura igual a:', o: ['$r$', '$2r$', '$3r$', '$πr$'], a: 1 }
]));
a.push(fechamento([
  ['Elementos', 'Raio, altura e geratriz.'],
  ['Reto', '$g = h$; gerado por rotação de retângulo.'],
  ['Planificação', 'Retângulo $2πr × h$ e dois círculos.']
], 'Abrir o cilindro: um retângulo e dois discos.'));

pages.push({ out: BASE + 'aula-1-caracteristicas-do-cilindro.html', html: K.deck({
  title: 'Cilindro: características — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 51 · Características do cilindro', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['ci-r', 'ci-h'], function(){ var r = +$('ci-r').value, h = +$('ci-h').value;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['ci-c', 'ci-ret', 'ci-e'].forEach(function(i){ $(i).textContent = '—'; }); $('ci-hh').textContent = 'Use valores positivos.'; return; }
    var c = 2 * 3.14 * r;
    $('ci-c').textContent = pt(c, 3) + ' (π = 3,14)'; $('ci-ret').textContent = pt(c, 2) + ' × ' + pt(h, 2); $('ci-e').textContent = Math.abs(h - 2 * r) < 1e-9 ? 'sim (h = 2r)' : 'não (h ≠ 2r)';
    $('ci-hh').textContent = 'A lateral planificada é um retângulo de base 2πr e altura h.'; });`
}) });

// ===================== AULA 2: área =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 52 e 53', h1: 'Área da superfície do cilindro: <span style="color:var(--growth);">retângulo mais dois discos</span>',
  sub: 'Quanto de lata para fazer uma lata? Quanto de tinta para pintar um reservatório? A área total do cilindro é a lateral planificada somada às duas bases.',
  badges: [['A_L = 2πrh'], ['A_B = πr²', 'growth'], ['A_T = 2πr(h + r)', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Da lata ao material.', [
  ['Planificar', 'retângulo + 2 círculos', 'bulb'],
  ['Área lateral', '2πr · h', 'target'],
  ['Área da base', 'πr²', 'chart'],
  ['Área total', 'A_L + 2A_B', 'link'],
  ['Aplicações', 'latas, tanques e tubos', 'scale']
]));
b.push(objetivosSlide([
  'Deduzir e aplicar <strong>$A_L = 2πrh$</strong>, <strong>$A_B = πr^{2}$</strong> e <strong>$A_T = 2πr(h + r)$</strong>.',
  'Calcular a <strong>quantidade de material</strong> para fabricar ou revestir cilindros.',
  'Diferenciar cilindro <strong>fechado</strong> (com tampa) e <strong>aberto</strong>.',
  'Resolver problemas com $π$ dado e conversão de unidades.'
], 'Dica', 'Planifique: um retângulo de comprimento $2πr$ e altura $h$ (área $2πrh$) e dois discos de área $πr^{2}$ cada.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quanto de folha-de-flandres?', `
          ${lede('Uma indústria fabrica latas cilíndricas de raio $r = 4$ cm e altura $h = 10$ cm. Quanto de metal é necessário para cada lata, se ela é <strong>fechada</strong>?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Parte', 'Cálculo ($π = 3$)'], [['Lateral', '$2 · 3 · 4 · 10 = 240$ cm²'], ['2 bases', '$2 · 3 · 4^{2} = 96$ cm²'], ['Total', '$240 + 96 = 336$ cm²']])}
            ${mini('Para fabricar a lata fechada são necessários:', ['240 cm²', '288 cm²', '336 cm²', '480 cm²'], 2, '$A_T = 2πr(h + r) = 2 · 3 · 4 · (10 + 4) = 336$ cm².')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · área do cilindro', 'A_L, A_B e A_T', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Área lateral:</strong> retângulo $2πr × h$ ⇒ <strong>$A_L = 2πrh$</strong>.</li>
                <li><strong>Área da base:</strong> <strong>$A_B = πr^{2}$</strong> (são duas bases).</li>
                <li><strong>Área total:</strong> <strong>$A_T = A_L + 2A_B = 2πrh + 2πr^{2} = 2πr(h + r)$</strong>.</li>
                <li><strong>Aberto</strong> (sem uma tampa): $A = A_L + A_B$.</li>
                <li><strong>Equilátero</strong> ($h = 2r$): $A_T = 6πr^{2}$.</li>
              </ul>
            </div>
            ${W.box('Área do cilindro (π = 3,14)', W.row(W.nm('ac-r', 'raio r', 4, 'any', 'min="0"'), W.nm('ac-h', 'altura h', 10, 'any', 'min="0"')) + W.txt('ac-l', 'Área lateral = ') + W.txt('ac-b', 'Área de uma base = ') + W.txt('ac-t', 'Área total = ') + W.hint('ac-hh'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Fórmulas e aplicações', `
          ${tbl(['Situação', 'Fórmula'], [['Lateral (rótulo, tinta na parede)', '$A_L = 2πrh$'], ['Uma base (tampa ou fundo)', '$A_B = πr^{2}$'], ['Lata fechada', '$A_T = 2πr(h + r)$'], ['Lata aberta (sem tampa)', '$A = 2πrh + πr^{2}$'], ['Cilindro equilátero ($h = 2r$)', '$A_T = 6πr^{2}$']])}`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Lata fechada', 'Calcule a área total de um cilindro de raio 4 cm e altura 10 cm. (Use $π = 3$.)', [
  ['Lateral', '$A_L = 2 · 3 · 4 · 10 = 240$ cm².'],
  ['Bases', '$2A_B = 2 · 3 · 4^{2} = 96$ cm².'],
  ['Total', '$A_T = 336$ cm².']
], '$A_T = 336$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Rótulo de uma lata', 'Qual a área do rótulo que cobre a lateral de uma lata de raio 3 cm e altura 10 cm? (Use $π = 3,14$.)', [
  ['Lateral', '$A_L = 2πrh = 2 · 3,14 · 3 · 10$.'],
  ['Cálculo', '$= 188,4$ cm².']
], '<strong>188,4 cm²</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Pintando um tanque aberto', 'Um tanque cilíndrico aberto em cima tem raio 2 m e altura 5 m. Qual a área a pintar (fundo e lateral)? (Use $π = 3,14$.)', [
  ['Lateral', '$2 · 3,14 · 2 · 5 = 62,8$ m².'],
  ['Fundo', '$3,14 · 2^{2} = 12,56$ m².'],
  ['Total', '$62,8 + 12,56 = 75,36$ m².']
], '<strong>75,36 m²</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Cilindro equilátero', 'Qual a área total de um cilindro equilátero de raio 5 cm? (Use $π = 3,14$.)', [
  ['Altura', '$h = 2r = 10$ cm.'],
  ['Total', '$A_T = 2πr(h + r) = 2 · 3,14 · 5 · 15 = 471$ cm².'],
  ['Pela fórmula curta', '$6πr^{2} = 6 · 3,14 · 25 = 471$ cm² ✓.']
], '$A_T = 471$ cm².', 'growth'));

b.push(pratique('Área lateral', 'A área lateral de um cilindro de raio 3 cm e altura 10 cm, com $π = 3$, é:',
  ['60 cm²', '90 cm²', '180 cm²', '270 cm²', '540 cm²'], 2,
  '$A_L = 2 · 3 · 3 · 10 = 180$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Área total', 'A área total de um cilindro de raio 4 cm e altura 10 cm, com $π = 3$, é:',
  ['240 cm²', '288 cm²', '336 cm²', '480 cm²', '672 cm²'], 2,
  '$2 · 3 · 4 · 14 = 336$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Tanque aberto', 'Um tanque cilíndrico, aberto em cima, tem raio 2 m e altura 5 m. A área de chapa necessária, em m², com $π = 3,14$, é:',
  ['62,8', '75,36', '87,92', '100,48', '125,6'], 1,
  '$62,8 + 12,56 = 75,36$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a área do cilindro engana', [
  ['Esquecer as bases', 'Lata fechada: $A_T = A_L + 2A_B$. Aberta: só uma base.'],
  ['Usar o diâmetro como raio', '$2πr = πd$: confira qual dado foi dado.'],
  ['Trocar π', 'Use o $π$ do enunciado (3; 3,14).'],
  ['Escala', 'Dobrando $r$ e $h$, a área <strong>quadruplica</strong>.']
]));
b.push(quiz([
  { q: 'A área lateral do cilindro é:', o: ['$πr^{2}h$', '$2πrh$', '$πrh$', '$2πr^{2}$'], a: 1 },
  { q: 'Um cilindro aberto tem área:', o: ['$A_L$', '$A_L + A_B$', '$A_L + 2A_B$', '$2A_B$'], a: 1 },
  { q: 'Com $r = 1$ e $h = 1$, $π = 3$, a área total é:', o: ['6', '9', '12', '18'], a: 2 },
  { q: 'Dobrando $r$ e $h$, a área total fica multiplicada por:', o: ['2', '4', '6', '8'], a: 1 }
]));
b.push(fechamento([
  ['Lateral', '$A_L = 2πrh$.'],
  ['Total', '$A_T = 2πr(h + r)$.'],
  ['Aberto', '$A_L + A_B$.']
], 'Retângulo mais discos: a área do cilindro se calcula em partes.'));

pages.push({ out: BASE + 'aula-2-area-do-cilindro.html', html: K.deck({
  title: 'Cilindro: área da superfície — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 52 e 53 · Área do cilindro', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['ac-r', 'ac-h'], function(){ var r = +$('ac-r').value, h = +$('ac-h').value, PI = 3.14;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['ac-l', 'ac-b', 'ac-t'].forEach(function(i){ $(i).textContent = '—'; }); $('ac-hh').textContent = 'Use valores positivos.'; return; }
    var al = 2 * PI * r * h, ab = PI * r * r;
    $('ac-l').textContent = pt(al, 3); $('ac-b').textContent = pt(ab, 3); $('ac-t').textContent = pt(al + 2 * ab, 3);
    $('ac-hh').textContent = 'A_T = A_L + 2·A_B = 2πr(h + r). Sem tampa: ' + pt(al + ab, 3) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Cilindro: <span>características e área</span>',
  lede: 'Duas bases circulares, geratriz igual à altura no cilindro reto. Planificação: retângulo 2πr × h e dois discos. A_T = 2πr(h + r).',
  badges: ['A_L = 2πrh', 'A_B = πr²', 'A_T = 2πr(h + r)'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Elementos', 'r, h e g', 'chart', 'primary', p('Reto: $g = h$; gerado por rotação de retângulo.') + call('Equilátero', '$h = 2r$.', 'success')],
    ['Planificação', 'Retângulo + 2 discos', 'target', 'growth', p('Lado do retângulo = $2πr$.') + call('Exemplo', '$r = 3$, $π = 3$ ⇒ 18 cm.', 'success')],
    ['Área lateral', '2πrh', 'scale', 'decay', p('Rótulo e tinta na parede.') + call('Exemplo', '$r = 3$, $h = 10$: 188,4 cm².', 'success')],
    ['Área total', '2πr(h + r)', 'link', 'success', p('Lata fechada.') + call('Exemplo', '$r = 4$, $h = 10$: 336 cm².', 'success')],
    ['Aberto', 'Uma base só', 'up', 'primary', p('$2πrh + πr^{2}$') + call('Tanque', '75,36 m².', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Raio ou diâmetro?', 'Que π usar?', 'Com ou sem tampa?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer uma das bases.', 'Usar d como r.', 'Trocar π.', 'Confundir g e h no oblíquo.', 'Esquecer que dobrar r e h quadruplica a área.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Cilindro: características e área <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: rótulo, equilátero, lata fechada, tanque aberto e planificação.',
  final: 'Retângulo 2πr × h mais dois discos: a área do cilindro.',
  questions: [
    { badge: 'Estilo ENEM · rótulo', text: 'O rótulo de uma lata cilíndrica de raio 3 cm e altura 10 cm cobre toda a lateral. Use $π = 3$.', cmd: 'A área do rótulo, em cm², é:', opts: ['60', '90', '180', '270', '540'], a: 2,
      sol: '<p>$A_L = 2 · 3 · 3 · 10 = 180$.</p>' },
    { badge: 'Estilo ENEM · equilátero', text: 'Um cilindro equilátero tem raio 5 cm. Use $π = 3,14$.', cmd: 'Sua área total, em cm², é:', opts: ['157', '314', '471', '628', '785'], a: 2,
      sol: '<p>$6πr^{2} = 6 · 3,14 · 25 = 471$.</p>' },
    { badge: 'Estilo ENEM · lata fechada', text: 'Uma lata fechada tem raio 4 cm e altura 10 cm. Use $π = 3$.', cmd: 'A área de metal, em cm², é:', opts: ['240', '288', '336', '480', '672'], a: 2,
      sol: '<p>$2 · 3 · 4 · (10 + 4) = 336$.</p>' },
    { badge: 'Estilo ENEM · tanque aberto', text: 'Um tanque cilíndrico aberto em cima tem raio 2 m e altura 5 m. Use $π = 3,14$.', cmd: 'A área de chapa, em m², é:', opts: ['62,8', '75,36', '87,92', '100,48', '125,6'], a: 1,
      sol: '<p>$62,8 + 12,56 = 75,36$.</p>' },
    { badge: 'Estilo ENEM · planificação', text: 'O retângulo da lateral planificada de um cilindro de raio 3 cm tem um lado de 18 cm (use $π = 3$).', cmd: 'Esse lado corresponde a:', opts: ['ao raio', 'ao diâmetro', 'à altura', 'ao perímetro da base', 'à área da base'], a: 3,
      sol: '<p>$2πr = 2 · 3 · 3 = 18$: perímetro da base.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Que <span style="color:var(--growth);">fórmula</span> do cilindro?',
  subtitle: 'Lateral, uma base, total ou lata aberta?',
  tpl: cClassificar({
    cats: ['Área lateral', 'Área de uma base', 'Área total (fechado)', 'Aberto (sem uma tampa)'],
    intro: 'Cada cartão descreve uma situação. Escolha a área a calcular e clique em <strong>Conferir</strong>.',
    final: 'Pergunte: o que será coberto — a lateral, as bases ou tudo?',
    itens: [
      ['Rótulo de uma lata', 0, 'Só a lateral: $2πrh$.'],
      ['Tampa circular de uma lata', 1, 'Uma base: $πr^{2}$.'],
      ['Chapa para fabricar uma lata fechada', 2, 'Lateral mais as duas bases.'],
      ['Tinta para a parede externa de um silo', 0, 'Lateral.'],
      ['Chapa de um tanque sem tampa', 3, 'Lateral mais uma base.'],
      ['Fundo de um balde cilíndrico', 1, 'Uma base.'],
      ['Embalagem fechada de leite em pó', 2, 'Lateral e as duas bases.'],
      ['Balde (sem tampa) a ser pintado por inteiro', 3, 'Lateral mais o fundo.'],
      ['Papel que envolve um tubo (sem as pontas)', 0, 'Só a lateral.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Cilindro: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: comprimento da base, lateral, base, total e aberto. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: retângulo, discos e áreas.',
  problems: [
    { tag: 'Planificação', q: 'Raio 3 cm e π = 3: quanto mede o lado do retângulo que dá a volta (2πr)?', a: 18, ph: 'cm', hint: '2 · 3 · 3.', sol: '<p>$18$ cm.</p>' },
    { tag: 'Lateral', q: 'Raio 3 cm, altura 10 cm, π = 3: qual a área lateral, em cm²?', a: 180, ph: 'cm²', hint: '2πrh.', sol: '<p>$180$.</p>' },
    { tag: 'Base', q: 'Raio 4 cm, π = 3: qual a área de uma base, em cm²?', a: 48, ph: 'cm²', hint: 'πr².', sol: '<p>$3 · 16 = 48$.</p>' },
    { tag: 'Total', q: 'Raio 4 cm, altura 10 cm, π = 3: qual a área total, em cm²?', a: 336, ph: 'cm²', hint: '240 + 96.', sol: '<p>$336$.</p>' },
    { tag: 'Aberto', q: 'Tanque aberto: r = 2 m, h = 5 m, π = 3,14. Qual a área, em m²?', a: 75.36, ph: 'm²', hint: '62,8 + 12,56.', sol: '<p>$75,36$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Cilindro: Características e Área', accent: 'primary', icon: 'cube',
  aulas: [['Aula 51', 'Cilindro: características e planificação', 'aula-1-caracteristicas-do-cilindro.html'], ['Aulas 52–53', 'Cilindro: área da superfície', 'aula-2-area-do-cilindro.html']],
  enem: 'Cilindro: características e área no estilo ENEM', cria: 'Que fórmula do cilindro?', pratica: 'Cilindro: trilha de desafios'
}, pages };
