// Unidade v21 — Cone: características, planificação e área da superfície (aulas 57 a 59 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'cone-area', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v21', BRAND = 'Cone: Características e Área', CAP = 'Aulas 57 a 59';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: características =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 57', h1: 'Cone: <span style="color:var(--primary);">características e planificação</span>',
  sub: 'Chapéus de festa, casquinhas de sorvete e funis: o cone liga todos os pontos de um círculo a um vértice fora do seu plano. Uma relação de Pitágoras amarra raio, altura e geratriz.',
  badges: [['g² = h² + r²'], ['vértice + base circular', 'growth'], ['planificação: setor + círculo', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do chapéu ao sólido.', [
  ['Definição', 'segmentos do vértice ao círculo', 'bulb'],
  ['Elementos', 'raio, altura, geratriz e eixo', 'target'],
  ['Pitágoras', 'g² = h² + r²', 'chart'],
  ['Cone equilátero', 'g = 2r', 'link'],
  ['Planificação', 'setor circular e círculo', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer os <strong>elementos</strong> do cone: base, vértice, raio $r$, altura $h$, geratriz $g$ e eixo.',
  'Aplicar <strong>$g^{2} = h^{2} + r^{2}$</strong> no cone reto.',
  'Identificar o cone <strong>equilátero</strong> ($g = 2r$).',
  'Reconhecer a <strong>planificação</strong>: um círculo (base) e um <strong>setor circular</strong> de raio $g$.'
], 'Dica', 'A <strong>geratriz</strong> é o raio do setor circular da planificação; o <strong>arco</strong> do setor tem o mesmo comprimento da circunferência da base ($2πr$).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Isto é um cone?', `
          ${lede('O cone de trânsito, o rolamento cônico e o colar elisabetano <strong>parecem</strong> cones, mas nenhum chega até o vértice: são <strong>troncos de cone</strong>. Um cone verdadeiro é formado por <strong>todos os segmentos</strong> que ligam um ponto $V$ (vértice) aos pontos de um círculo.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.cone({ lr: 'r', lh: 'h', lg: 'g', w: 240, h: 190 })}</div>
            ${mini('Em um cone reto de raio 3 e altura 4, a geratriz mede:', ['5', '7', '12', '25'], 0, '$g^{2} = 4^{2} + 3^{2} = 25$ ⇒ $g = 5$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · elementos', 'Elementos do cone', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Base:</strong> o círculo de raio $r$. <strong>Vértice $V$:</strong> ponto fora do plano da base.</li>
                <li><strong>Altura $h$:</strong> distância de $V$ ao plano da base. <strong>Eixo:</strong> reta que liga $V$ ao centro da base.</li>
                <li><strong>Geratriz $g$:</strong> segmento do vértice a um ponto da circunferência.</li>
                <li><strong>Cone reto:</strong> eixo perpendicular à base; vale <strong>$g^{2} = h^{2} + r^{2}$</strong>.</li>
                <li><strong>Equilátero:</strong> $g = 2r$ (a seção meridiana é um triângulo equilátero).</li>
              </ul>
            </div>
            ${W.box('Cone reto: ache a geratriz', W.row(W.nm('co-r', 'raio r', 3, 'any', 'min="0"'), W.nm('co-h', 'altura h', 4, 'any', 'min="0"')) + W.txt('co-g', 'Geratriz g = ') + W.txt('co-e', 'Equilátero? ') + W.txt('co-t', 'Ângulo do setor (planificação): ') + W.hint('co-hh'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Planificação do cone', `
          <div class="grid2">
            <div>${S.redeCone({ lg: 'g', lr: 'r', w: 250, h: 200 })}</div>
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um <strong>círculo</strong> de raio $r$ (a base).</li>
                <li>Um <strong>setor circular</strong> de raio $g$ (a superfície lateral).</li>
                <li>Comprimento do arco do setor $= 2πr$; ângulo do setor: <strong>$θ = 360° · {r|g}$</strong>.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Geratriz', 'Em um cone reto de raio 3 cm e altura 4 cm, qual a geratriz?', [
  ['Pitágoras', '$g^{2} = 4^{2} + 3^{2} = 16 + 9 = 25$.'],
  ['Raiz', '$g = 5$ cm.']
], '$g = 5$ cm (triângulo 3-4-5).'));
a.push(exemplo('Exemplo resolvido', 'Cone equilátero', 'Um cone equilátero tem raio 5 cm. Quanto medem a geratriz e a altura?', [
  ['Geratriz', '$g = 2r = 10$ cm.'],
  ['Altura', '$h^{2} = g^{2} − r^{2} = 100 − 25 = 75$ ⇒ $h = 5√{3} ≈ 8,65$ cm.']
], '$g = 10$ cm e $h = 5√{3}$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ângulo do setor', 'Um cone reto tem raio 3 cm e geratriz 5 cm. Qual o ângulo do setor circular da planificação?', [
  ['Comprimento do arco', '$2πr = 6π$ (a circunferência da base).'],
  ['Circunferência do setor completo', '$2πg = 10π$.'],
  ['Fração', '$θ = 360° · {6π|10π} = 360° · 0,6 = 216°$.']
], '$θ = 216°$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Qual sólido planificado?', 'Uma planificação tem 1 círculo e 1 setor circular. Que sólido é esse?', [
  ['Base', 'Um círculo ⇒ base circular.'],
  ['Lateral', 'Um setor ⇒ superfície que converge a um vértice.']
], 'Um <strong>cone</strong>.', 'growth'));

a.push(pratique('Geratriz', 'Em um cone reto de raio 3 e altura 4, a geratriz mede:',
  ['3', '4', '5', '6', '7'], 2,
  '$g = √{16 + 9} = 5$. <strong>Alternativa C.</strong>'));
a.push(pratique('Planificação', 'A planificação de um cone é formada por:',
  ['1 círculo e 1 retângulo', '1 círculo e 1 setor circular', '2 círculos', '1 triângulo e 1 círculo', '2 setores'], 1,
  'Um círculo (base) e um setor circular (lateral). <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Ângulo do chapéu', 'Um chapéu de festa cônico tem raio da base 3 cm e geratriz 5 cm. O setor circular de papel para fazê-lo tem ângulo de:',
  ['108°', '144°', '216°', '252°', '288°'], 2,
  '$θ = 360° · 3 ÷ 5 = 216°$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o cone engana', [
  ['Confundir altura e geratriz', '$g > h$ sempre (a geratriz é a hipotenusa).'],
  ['Achar que tronco é cone', 'O cone vai até o vértice; o tronco é cortado por um plano.'],
  ['Raio do setor', 'O raio do setor da planificação é a <strong>geratriz</strong>, e não o raio da base.'],
  ['Pitágoras trocado', '$g^{2} = h^{2} + r^{2}$ (soma dos quadrados dos catetos).']
]));
a.push(quiz([
  { q: 'Em um cone reto com $r = 5$ e $h = 12$, a geratriz é:', o: ['7', '13', '17', '60'], a: 1 },
  { q: 'A geratriz de um cone equilátero de raio $r$ mede:', o: ['$r$', '$2r$', '$3r$', '$r√{2}$'], a: 1 },
  { q: 'O raio do setor circular da planificação é:', o: ['$r$', '$h$', '$g$', '$2πr$'], a: 2 },
  { q: 'Um cone tem quantas bases?', o: ['0', '1', '2', '3'], a: 1 }
]));
a.push(fechamento([
  ['Elementos', 'Raio, altura, geratriz, vértice e eixo.'],
  ['Pitágoras', '$g^{2} = h^{2} + r^{2}$.'],
  ['Planificação', 'Círculo e setor de raio $g$.']
], 'Geratriz é hipotenusa: do raio e da altura sai o resto.'));

pages.push({ out: BASE + 'aula-1-caracteristicas-do-cone.html', html: K.deck({
  title: 'Cone: características — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 57 · Características do cone', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['co-r', 'co-h'], function(){ var r = +$('co-r').value, h = +$('co-h').value;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['co-g', 'co-e', 'co-t'].forEach(function(i){ $(i).textContent = '—'; }); $('co-hh').textContent = 'Use valores positivos.'; return; }
    var g = Math.sqrt(r * r + h * h), th = 360 * r / g;
    $('co-g').textContent = pt(g, 4); $('co-e').textContent = Math.abs(g - 2 * r) < 1e-6 ? 'sim (g = 2r)' : 'não (g ≠ 2r)'; $('co-t').textContent = pt(th, 2) + '°';
    $('co-hh').textContent = 'g² = h² + r² = ' + pt(h * h + r * r, 4) + '; θ = 360° · r ÷ g.'; });`
}) });

// ===================== AULA 2: área =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 58 e 59', h1: 'Área da superfície do cone: <span style="color:var(--growth);">um setor e um círculo</span>',
  sub: 'Que recorte fazer na folha para montar chapéus de festa? A superfície lateral do cone planificada é um setor circular, e sua área sai da regra de três com a área do círculo de raio g.',
  badges: [['A_L = πrg'], ['A_B = πr²', 'growth'], ['A_T = πr(r + g)', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do setor à fórmula.', [
  ['Planificar', 'círculo e setor', 'bulb'],
  ['Área lateral', 'π · r · g', 'target'],
  ['Área da base', 'πr²', 'chart'],
  ['Área total', 'πr(r + g)', 'link'],
  ['Aplicações', 'chapéus, funis e telhados', 'scale']
]));
b.push(objetivosSlide([
  'Deduzir e aplicar <strong>$A_L = π r g$</strong>, <strong>$A_B = π r^{2}$</strong> e <strong>$A_T = π r (r + g)$</strong>.',
  'Usar $g^{2} = h^{2} + r^{2}$ para obter $g$ quando falta.',
  'Distinguir <strong>cone fechado</strong> de <strong>cone sem base</strong> (chapéu).',
  'Resolver problemas de <strong>gasto de material</strong> com o $π$ dado.'
], 'Dica', 'O setor tem raio $g$ e arco $2πr$: a área é $A_L = {arco · g|2} = {2πr · g|2} = π r g$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Chapéus de festa', `
          ${lede('Para fazer um <strong>chapéu de festa</strong> cônico (sem base), com raio da base $6$ cm e geratriz $10$ cm, que recorte devemos fazer na folha? A superfície lateral planificada é um <strong>setor circular</strong> de raio $g = 10$ cm.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Parte', 'Cálculo ($π = 3,14$)'], [['Ângulo do setor', '$360° · 6 ÷ 10 = 216°$'], ['Área lateral', '$3,14 · 6 · 10 = 188,4$ cm²']])}
            ${mini('A área de papel do chapéu (só a lateral), com $π = 3,14$, é:', ['94,2 cm²', '188,4 cm²', '301,4 cm²', '376,8 cm²'], 1, '$A_L = π r g = 3,14 · 6 · 10 = 188,4$ cm².')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · área do cone', 'A_L, A_B e A_T', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Área lateral:</strong> <strong>$A_L = π r g$</strong> (setor de raio $g$ e arco $2πr$).</li>
                <li><strong>Área da base:</strong> <strong>$A_B = π r^{2}$</strong>.</li>
                <li><strong>Área total:</strong> <strong>$A_T = π r^{2} + π r g = π r (r + g)$</strong>.</li>
                <li><strong>Geratriz:</strong> $g = √{h^{2} + r^{2}}$.</li>
                <li>No cone equilátero ($g = 2r$): $A_L = 2π r^{2}$ e $A_T = 3π r^{2}$.</li>
              </ul>
            </div>
            ${W.box('Área do cone (π = 3,14)', W.row(W.nm('ao-r', 'raio r', 3, 'any', 'min="0"'), W.nm('ao-h', 'altura h', 4, 'any', 'min="0"')) + W.txt('ao-g', 'Geratriz g = ') + W.txt('ao-l', 'Área lateral = ') + W.txt('ao-t', 'Área total = ') + W.hint('ao-hh'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Passo a passo', `
          ${tbl(['Passo', 'O que fazer', 'Cone r = 3, h = 4, π = 3,14'], [['1', 'Geratriz: $g = √{h^{2} + r^{2}}$', '$g = 5$'], ['2', 'Área lateral: $π r g$', '$3,14 · 3 · 5 = 47,1$'], ['3', 'Área da base: $π r^{2}$', '$3,14 · 9 = 28,26$'], ['4', 'Área total', '$47,1 + 28,26 = 75,36$']])}`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Cone completo', 'Calcule a área total de um cone reto de raio 3 cm e altura 4 cm. (Use $π = 3,14$.)', [
  ['Geratriz', '$g = 5$ cm.'],
  ['Lateral', '$A_L = 3,14 · 3 · 5 = 47,1$ cm².'],
  ['Base', '$A_B = 3,14 · 9 = 28,26$ cm².'],
  ['Total', '$A_T = 47,1 + 28,26 = 75,36$ cm².']
], '$A_T = 75,36$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Chapéu de festa', 'Raio da base 6 cm e geratriz 10 cm: qual a área de papel do chapéu (sem base) e o ângulo do setor? ($π = 3,14$.)', [
  ['Área lateral', '$A_L = 3,14 · 6 · 10 = 188,4$ cm².'],
  ['Ângulo', '$θ = 360° · {6|10} = 216°$.']
], '<strong>188,4 cm²</strong> de papel, em um setor de <strong>216°</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Cone equilátero', 'Um cone equilátero tem raio 5 cm. Qual a área total? ($π = 3$.)', [
  ['Geratriz', '$g = 10$ cm.'],
  ['Total', '$A_T = π r (r + g) = 3 · 5 · 15 = 225$ cm².'],
  ['Fórmula curta', '$3πr^{2} = 3 · 3 · 25 = 225$ ✓.']
], '$A_T = 225$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Telhado cônico', 'O telhado de uma torre tem forma cônica de raio 2 m e altura 1,5 m. Qual a área a cobrir com telhas? ($π = 3,14$.)', [
  ['Geratriz', '$g = √{1,5^{2} + 2^{2}} = √{6,25} = 2,5$ m.'],
  ['Lateral', '$A_L = 3,14 · 2 · 2,5 = 15,7$ m².']
], '<strong>15,7 m²</strong> (telhado sem base).', 'growth'));

b.push(pratique('Área lateral', 'Um cone reto tem raio 3 cm e altura 4 cm. Com $π = 3,14$, sua área lateral é:',
  ['28,26 cm²', '47,1 cm²', '56,52 cm²', '75,36 cm²', '94,2 cm²'], 1,
  '$g = 5$; $A_L = 3,14 · 3 · 5 = 47,1$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Área total', 'Para o mesmo cone ($r = 3$, $h = 4$, $π = 3,14$), a área total é:',
  ['47,1 cm²', '56,52 cm²', '75,36 cm²', '94,2 cm²', '150,72 cm²'], 2,
  '$47,1 + 28,26 = 75,36$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Chapéu de festa', 'Um chapéu de festa cônico, sem base, tem raio 6 cm e geratriz 10 cm. Com $π = 3,14$, a área de papel, em cm², é:',
  ['113,04', '188,4', '301,44', '376,8', '565,2'], 1,
  '$A_L = π r g = 3,14 · 6 · 10 = 188,4$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a área do cone engana', [
  ['Usar h no lugar de g', 'A lateral usa a <strong>geratriz</strong>: $A_L = π r g$.'],
  ['Esquecer a base', 'Cone fechado: $A_T = A_L + A_B$. Chapéu sem base: só $A_L$.'],
  ['Dividir por 2', 'Já está na dedução: $A_L = π r g$ (e não $π r g ÷ 2$).'],
  ['Pitágoras', '$g^{2} = h^{2} + r^{2}$: some os quadrados, depois extraia a raiz.']
]));
b.push(quiz([
  { q: 'A área lateral do cone é:', o: ['$π r h$', '$π r g$', '$2π r g$', '$π r^{2}$'], a: 1 },
  { q: 'A área total do cone é:', o: ['$π r g$', '$π r^{2}$', '$π r (r + g)$', '$2 π r g$'], a: 2 },
  { q: 'Em um cone equilátero ($g = 2r$), $A_L$ é:', o: ['$π r^{2}$', '$2π r^{2}$', '$3π r^{2}$', '$4π r^{2}$'], a: 1 },
  { q: 'Cone com $r = 6$, $g = 10$ e $π = 3$: $A_L$ vale:', o: ['60', '120', '180', '360'], a: 2 }
]));
b.push(fechamento([
  ['Lateral', '$A_L = π r g$.'],
  ['Total', '$A_T = π r (r + g)$.'],
  ['Geratriz', '$g^{2} = h^{2} + r^{2}$.']
], 'Geratriz primeiro; depois lateral, base e soma.'));

pages.push({ out: BASE + 'aula-2-area-do-cone.html', html: K.deck({
  title: 'Cone: área da superfície — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 58 e 59 · Área do cone', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['ao-r', 'ao-h'], function(){ var r = +$('ao-r').value, h = +$('ao-h').value, PI = 3.14;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['ao-g', 'ao-l', 'ao-t'].forEach(function(i){ $(i).textContent = '—'; }); $('ao-hh').textContent = 'Use valores positivos.'; return; }
    var g = Math.sqrt(r * r + h * h), al = PI * r * g, ab = PI * r * r;
    $('ao-g').textContent = pt(g, 4); $('ao-l').textContent = pt(al, 3); $('ao-t').textContent = pt(al + ab, 3);
    $('ao-hh').textContent = 'A_L = π·r·g; A_B = π·r² = ' + pt(ab, 3) + '; A_T = A_L + A_B. Sem a base (chapéu): ' + pt(al, 3) + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Cone: <span>características e área</span>',
  lede: 'Vértice, base circular, raio, altura e geratriz com g² = h² + r². Planificação: círculo e setor de raio g. A_L = πrg e A_T = πr(r + g).',
  badges: ['g² = h² + r²', 'A_L = πrg', 'A_T = πr(r + g)'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Elementos', 'r, h, g e eixo', 'chart', 'primary', p('Reto: eixo perpendicular à base.') + call('Equilátero', '$g = 2r$.', 'success')],
    ['Pitágoras', 'g² = h² + r²', 'target', 'growth', p('Geratriz é hipotenusa.') + call('Exemplo', 'r = 3, h = 4 ⇒ g = 5.', 'success')],
    ['Planificação', 'Círculo + setor', 'scale', 'decay', p('Setor de raio $g$, arco $2πr$.') + call('Ângulo', '$θ = 360° · r ÷ g$.', 'success')],
    ['Área lateral', 'πrg', 'link', 'success', p('Setor circular.') + call('Chapéu', '6 e 10: 188,4 cm².', 'success')],
    ['Área total', 'πr(r + g)', 'up', 'primary', p('Base mais lateral.') + call('Exemplo', '75,36 cm².', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['g e não h na lateral.', 'Base entra no total.', 'π do enunciado.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar h no lugar de g.', 'Esquecer a base.', 'Dividir por 2 sem necessidade.', 'Confundir tronco com cone.', 'Errar Pitágoras.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Cone: características e área <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: geratriz, planificação, chapéu, área total e ângulo do setor.',
  final: 'Geratriz, lateral πrg e soma da base.',
  questions: [
    { badge: 'Estilo ENEM · geratriz', text: 'Em um cone reto, o raio da base mede 3 cm e a altura 4 cm.', cmd: 'A geratriz mede, em cm:', opts: ['3', '4', '5', '6', '7'], a: 2,
      sol: '<p>$g = √{16 + 9} = 5$.</p>' },
    { badge: 'Estilo ENEM · planificação', text: 'Uma folha de papel é recortada para formar um cone.', cmd: 'A planificação do cone é formada por:', opts: ['1 círculo e 1 retângulo', '1 círculo e 1 setor circular', '2 círculos', '1 triângulo e 1 círculo', '1 setor e 1 retângulo'], a: 1,
      sol: '<p>Base circular e lateral em setor circular.</p>' },
    { badge: 'Estilo ENEM · chapéu', text: 'Um chapéu de festa cônico, sem base, tem raio 6 cm e geratriz 10 cm. Use $π = 3,14$.', cmd: 'A área de papel, em cm², é:', opts: ['113,04', '188,4', '301,44', '376,8', '565,2'], a: 1,
      sol: '<p>$π r g = 3,14 · 6 · 10 = 188,4$.</p>' },
    { badge: 'Estilo ENEM · área total', text: 'Um cone reto tem raio 3 cm e altura 4 cm. Use $π = 3,14$.', cmd: 'A área total, em cm², é:', opts: ['75,36', '47,1', '56,52', '94,2', '150,72'], a: 0,
      sol: '<p>$47,1 + 28,26 = 75,36$.</p>' },
    { badge: 'Estilo ENEM · ângulo do setor', text: 'Um cone tem raio 3 cm e geratriz 5 cm.', cmd: 'O setor circular da planificação tem ângulo de:', opts: ['108°', '144°', '216°', '252°', '288°'], a: 2,
      sol: '<p>$360° · 3 ÷ 5 = 216°$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Que <span style="color:var(--growth);">sólido</span> é?',
  subtitle: 'Cone, cilindro, pirâmide ou esfera?',
  tpl: cClassificar({
    cats: ['Cone', 'Cilindro', 'Pirâmide', 'Esfera'],
    intro: 'Cada cartão descreve um objeto. Escolha o sólido mais parecido e clique em <strong>Conferir</strong>.',
    final: 'Cone: base circular e um vértice; cilindro: duas bases circulares.',
    itens: [
      ['Chapéu de festa', 0, 'Base circular e vértice: cone.'],
      ['Lata de refrigerante', 1, 'Duas bases circulares: cilindro.'],
      ['Bola de futebol', 3, 'Esfera.'],
      ['Tenda de base quadrada', 2, 'Base poligonal e vértice: pirâmide.'],
      ['Casquinha de sorvete', 0, 'Cone.'],
      ['Cano de PVC maciço', 1, 'Cilindro.'],
      ['Pirâmide de Quéops', 2, 'Base quadrada: pirâmide.'],
      ['Globo terrestre', 3, 'Esfera.'],
      ['Chapéu de bruxa', 0, 'Cone.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Cone: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: geratriz, lateral, total, ângulo e cone equilátero. Digite o número pedido.',
  final: 'Você percorreu a trilha: geratriz, áreas e planificação.',
  problems: [
    { tag: 'Geratriz', q: 'Cone reto de raio 3 e altura 4: qual a geratriz?', a: 5, ph: 'g', hint: '√(16 + 9).', sol: '<p>$5$.</p>' },
    { tag: 'Lateral', q: 'Com r = 3, g = 5 e π = 3,14, qual a área lateral?', a: 47.1, ph: 'área', hint: 'π · r · g.', sol: '<p>$47,1$.</p>' },
    { tag: 'Total', q: 'Com r = 3, h = 4 e π = 3,14, qual a área total?', a: 75.36, ph: 'área', hint: '47,1 + 28,26.', sol: '<p>$75,36$.</p>' },
    { tag: 'Ângulo', q: 'Com r = 3 e g = 5, qual o ângulo (em graus) do setor da planificação?', a: 216, ph: 'graus', hint: '360 · 3 ÷ 5.', sol: '<p>$216$.</p>' },
    { tag: 'Equilátero', q: 'Cone equilátero de raio 5 e π = 3: qual a área total?', a: 225, ph: 'área', hint: '3πr².', sol: '<p>$225$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Cone: Características e Área', accent: 'primary', icon: 'triangle',
  aulas: [['Aula 57', 'Cone: características e planificação', 'aula-1-caracteristicas-do-cone.html'], ['Aulas 58–59', 'Cone: área da superfície', 'aula-2-area-do-cone.html']],
  enem: 'Cone: características e área no estilo ENEM', cria: 'Que sólido é?', pratica: 'Cone: trilha de desafios'
}, pages };
