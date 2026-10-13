// Unidade v15 — Prisma: características, planificações e área da superfície (aulas 39 a 41 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'prisma-area', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v15', BRAND = 'Prisma: Características e Área', CAP = 'Aulas 39 a 41';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: características e planificações =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 39', h1: 'Prisma: <span style="color:var(--primary);">características e planificações</span>',
  sub: 'A barraca de camping, a caixa de sapatos e o calendário de mesa lembram o mesmo sólido: o prisma. Duas bases iguais e paralelas, ligadas por faces laterais.',
  badges: [['2 bases paralelas'], ['faces laterais', 'growth'], ['planificação', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do objeto ao sólido.', [
  ['Reconhecer', 'barraca, caixa e calendário', 'bulb'],
  ['Definição', 'bases paralelas e congruentes', 'target'],
  ['Elementos', 'bases, faces laterais e altura', 'chart'],
  ['Classificação', 'reto ou oblíquo; regular', 'link'],
  ['Planificação', 'prisma aberto no plano', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer um <strong>prisma</strong> e seus elementos: bases, faces laterais, arestas e altura.',
  'Classificar prismas em <strong>retos ou oblíquos</strong> e em <strong>regulares</strong>; dar o nome pela base.',
  'Contar <strong>vértices, faces e arestas</strong> de um prisma de base com $n$ lados.',
  'Reconhecer a <strong>planificação</strong> de um prisma.'
], 'Dica', 'Nomeie o prisma pela <strong>base</strong>: base triangular ⇒ prisma triangular; base hexagonal ⇒ prisma hexagonal. As faces laterais de um prisma <strong>reto</strong> são retângulos.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Que sólido é esse?', `
          ${lede('A <strong>barraca</strong> de camping tem um formato que lembra um <strong>prisma triangular reto</strong>. As bases (as duas “cabeceiras” triangulares) são <strong>paralelas e congruentes</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.prismaTri({ la: 'b', lb: 'h', lc: 'H', w: 240, h: 160 })}</div>
            ${mini('Qual polígono forma as bases dessa “barraca” (prisma triangular)?', ['quadrado', 'triângulo', 'retângulo', 'círculo'], 1, 'As bases são triângulos, paralelos e congruentes; as faces laterais são retângulos.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição e elementos', 'O que é um prisma', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Prisma:</strong> poliedro com <strong>duas bases</strong> (polígonos congruentes em planos paralelos) e <strong>faces laterais</strong> que são paralelogramos.</li>
                <li><strong>Altura:</strong> distância entre os planos das bases.</li>
                <li><strong>Reto:</strong> arestas laterais perpendiculares às bases (faces laterais retangulares). <strong>Oblíquo:</strong> arestas inclinadas.</li>
                <li><strong>Regular:</strong> prisma reto cujas bases são polígonos regulares.</li>
                <li>Base com $n$ lados: <strong>$F = n + 2$</strong>, <strong>$V = 2n$</strong> e <strong>$A = 3n$</strong>.</li>
              </ul>
            </div>
            ${W.box('Elementos de um prisma', W.row(W.nm('pz-n', 'lados da base n', 6, '1', 'min="3" max="20"')) + W.txt('pz-nm', 'Nome: ') + W.txt('pz-f', 'Faces F = n + 2: ') + W.txt('pz-v', 'Vértices V = 2n: ') + W.txt('pz-a', 'Arestas A = 3n: ') + W.hint('pz-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Planificações', `
          <div class="grid2">
            <div>${S.redeCubo({ w: 230, h: 150 })}<p class="hint" style="margin-top:6px;">Cubo (prisma de base quadrada): 6 quadrados.</p></div>
            <div>
              ${tbl(['Prisma', 'Planificação (bases + laterais)'], [['triangular reto', '2 triângulos + 3 retângulos'], ['retangular (bloco)', '6 retângulos'], ['pentagonal reto', '2 pentágonos + 5 retângulos'], ['hexagonal reto', '2 hexágonos + 6 retângulos']])}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Elementos do prisma hexagonal', 'Determine $F$, $V$ e $A$ de um prisma hexagonal.', [
  ['Faces', '$n = 6$: $F = 6 + 2 = 8$ (2 hexágonos e 6 retângulos).'],
  ['Vértices', '$V = 2 · 6 = 12$.'],
  ['Arestas', '$A = 3 · 6 = 18$.']
], '$F = 8$, $V = 12$, $A = 18$. Euler: $12 − 18 + 8 = 2$ ✓.'));
a.push(exemplo('Exemplo resolvido', 'Qual sólido tem esta planificação?', 'A planificação de um sólido tem 2 hexágonos regulares e 6 retângulos iguais. Que sólido é esse?', [
  ['Bases', 'Dois hexágonos congruentes ⇒ bases hexagonais.'],
  ['Laterais', 'Seis retângulos ⇒ prisma <strong>reto</strong>.']
], 'Um <strong>prisma hexagonal reto</strong> (regular, se o hexágono é regular).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Prisma reto ou oblíquo?', 'Um prisma tem as arestas laterais inclinadas em relação às bases. Como são suas faces laterais?', [
  ['Arestas inclinadas', 'O prisma é <strong>oblíquo</strong>.'],
  ['Faces laterais', 'São paralelogramos (não retângulos).']
], 'Paralelogramos: nos oblíquos, a altura é menor que a aresta lateral.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Nome pela base', 'Um prisma tem 10 faces. Qual o polígono da base?', [
  ['Relação', '$F = n + 2$.'],
  ['Resolva', '$10 = n + 2$ ⇒ $n = 8$.']
], 'A base é um <strong>octógono</strong> (prisma octogonal).', 'growth'));

a.push(pratique('Planificação', 'Uma planificação formada por 2 triângulos e 3 retângulos corresponde a:',
  ['pirâmide triangular', 'prisma triangular', 'prisma retangular', 'cilindro', 'tetraedro'], 1,
  'Duas bases triangulares e três faces laterais: prisma triangular. <strong>Alternativa B.</strong>'));
a.push(pratique('Contagem', 'Um prisma octogonal tem quantas faces?',
  ['8', '9', '10', '16', '24'], 2,
  '$F = 8 + 2 = 10$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Planificação de uma embalagem', 'A planificação de uma embalagem tem 2 hexágonos regulares e 6 retângulos iguais. Esse sólido é um:',
  ['pirâmide hexagonal', 'prisma hexagonal', 'cilindro', 'prisma octogonal', 'dodecaedro'], 1,
  'Duas bases hexagonais e seis faces laterais retangulares: prisma hexagonal reto. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o prisma engana', [
  ['Confundir base e face lateral', 'Em um prisma deitado, as <strong>bases</strong> são os polígonos congruentes e paralelos, e não necessariamente o “fundo”.'],
  ['Contar faces demais', '$F = n + 2$ (e não $2n$).'],
  ['Achar que todo prisma é reto', 'Em prismas oblíquos as faces laterais são paralelogramos.'],
  ['Esquecer arestas escondidas', '$A = 3n$ inclui as arestas de trás.']
]));
a.push(quiz([
  { q: 'Um prisma de base triangular tem quantos vértices?', o: ['3', '5', '6', '9'], a: 2 },
  { q: 'As faces laterais de um prisma reto são:', o: ['triângulos', 'retângulos', 'círculos', 'trapézios'], a: 1 },
  { q: 'Um prisma pentagonal tem quantas arestas?', o: ['10', '12', '15', '17'], a: 2 },
  { q: 'Qual sólido <strong>não</strong> é prisma?', o: ['cubo', 'bloco retangular', 'pirâmide', 'prisma hexagonal'], a: 2 }
]));
a.push(fechamento([
  ['Definição', 'Duas bases paralelas e congruentes + faces laterais.'],
  ['Contagem', '$F = n + 2$, $V = 2n$, $A = 3n$.'],
  ['Planificação', '2 bases + $n$ faces laterais.']
], 'Base com n lados: o prisma inteiro se conta com n.'));

pages.push({ out: BASE + 'aula-1-caracteristicas-e-planificacoes.html', html: K.deck({
  title: 'Prisma: características e planificações — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 39 · Características e planificações', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  var NOM = {3: 'triangular', 4: 'quadrangular', 5: 'pentagonal', 6: 'hexagonal', 7: 'heptagonal', 8: 'octogonal', 9: 'eneagonal', 10: 'decagonal'};
  bind(['pz-n'], function(){ var n = Math.round(+$('pz-n').value);
    if(!isFinite(n) || n < 3){ ['pz-nm', 'pz-f', 'pz-v', 'pz-a'].forEach(function(i){ $(i).textContent = '—'; }); $('pz-h').textContent = 'A base precisa de pelo menos 3 lados.'; return; }
    $('pz-nm').textContent = 'prisma ' + (NOM[n] || 'de base com ' + n + ' lados');
    $('pz-f').textContent = (n + 2) + ' (2 bases + ' + n + ' laterais)'; $('pz-v').textContent = 2 * n; $('pz-a').textContent = 3 * n;
    $('pz-h').textContent = 'Euler: V − A + F = ' + 2 * n + ' − ' + 3 * n + ' + ' + (n + 2) + ' = ' + (2 * n - 3 * n + n + 2) + '.'; });`
}) });

// ===================== AULA 2: área da superfície =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 40 e 41', h1: 'Área da superfície de um prisma: <span style="color:var(--growth);">quanto material gasto?</span>',
  sub: 'Pintar uma caixa, forrar um calendário de mesa, cobrir uma barraca: o gasto de material é a área total do prisma, soma da lateral com as duas bases.',
  badges: [['A_T = 2·A_B + A_L'], ['A_L = P_base · h', 'growth'], ['bloco: 2(ab+bc+ac)', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Da planificação à fórmula.', [
  ['Planificar', 'bases + faces laterais', 'bulb'],
  ['Área da base', 'polígonos regulares', 'target'],
  ['Área lateral', 'perímetro da base × altura', 'chart'],
  ['Área total', '2 bases + lateral', 'link'],
  ['Aplicações', 'caixas, tintas e embalagens', 'scale']
]));
b.push(objetivosSlide([
  'Calcular a <strong>área da base</strong> ($A_B$), a <strong>área lateral</strong> ($A_L$) e a <strong>área total</strong> ($A_T = 2A_B + A_L$).',
  'Usar $A_L = P · h$ (perímetro da base vezes a altura) em prismas retos.',
  'Aplicar $A_T = 2(ab + bc + ac)$ em blocos retangulares e $6a^{2}$ em cubos.',
  'Resolver problemas de <strong>gasto de material</strong> e de caixa aberta.'
], 'Dica', 'Planifique mentalmente: duas bases iguais e um retângulo (a lateral) de comprimento igual ao <strong>perímetro da base</strong> e largura igual à <strong>altura</strong>.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O calendário de mesa', `
          ${lede('Um calendário de mesa tem a forma de um prisma triangular reto. Para forrá-lo com papel, precisamos saber a <strong>área da sua superfície</strong>: as duas bases triangulares e as três faces retangulares.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.prismaTri({ la: 'b', lb: 'h', lc: 'altura H', w: 240, h: 160 })}</div>
            ${card('<strong>Definições</strong><p style="font-size:.92rem;margin-top:8px;"><strong>$A_B$</strong>: área de uma base · <strong>$A_L$</strong>: soma das áreas das faces laterais · <strong>$A_T = 2 · A_B + A_L$</strong>: área total.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · áreas do prisma', 'A_B, A_L e A_T', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$A_T = 2 · A_B + A_L$</strong>.</li>
                <li>Prisma <strong>reto</strong>: <strong>$A_L = P_{base} · h$</strong> (retângulo de lados $P$ e $h$).</li>
                <li>Bloco $a × b × c$: <strong>$A_T = 2(ab + bc + ac)$</strong>. Cubo de aresta $a$: <strong>$6a^{2}$</strong>.</li>
                <li>Base regular: quadrado $L^{2}$; triângulo equilátero $L^{2}√{3} ÷ 4$; hexágono regular $3L^{2}√{3} ÷ 2$.</li>
              </ul>
            </div>
            ${W.box('Bloco retangular a × b × c', W.row(W.nm('ar-a', 'a', 20, 'any', 'min="0"'), W.nm('ar-b', 'b', 15, 'any', 'min="0"'), W.nm('ar-c', 'c', 10, 'any', 'min="0"')) + W.txt('ar-t', 'Área total A_T = ') + W.txt('ar-l', 'Área lateral A_L = ') + W.txt('ar-v', 'Sem tampa (caixa aberta) = ') + W.hint('ar-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Áreas das bases mais comuns', `
          ${tbl(['Base', 'Área $A_B$', 'Perímetro $P$'], [['Retângulo $a × b$', '$a · b$', '$2(a + b)$'], ['Quadrado de lado $L$', '$L^{2}$', '$4L$'], ['Triângulo equilátero de lado $L$', '${√{3}|4} L^{2}$', '$3L$'], ['Triângulo retângulo (catetos $b$, $c$)', '${b · c|2}$', 'soma dos três lados'], ['Hexágono regular de lado $L$', '${3√{3}|2} L^{2}$', '$6L$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Lembrete', '$√{3} ≈ 1,73$. Em problemas de prova, use o valor dado no enunciado.', 'success')}
            ${callout('Cálculo por partes', 'Some áreas de figuras simples; não é preciso fórmula pronta para cada sólido.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Caixa de papelão', 'Uma caixa tem 20 cm de comprimento, 15 cm de largura e 10 cm de altura. Qual a área de papelão para fazê-la toda e quanto é preciso se não tiver tampa?', [
  ['Área total', '$A_T = 2(20·15 + 15·10 + 20·10) = 2(300 + 150 + 200) = 1\\ 300$ cm².'],
  ['Sem tampa', 'Tira-se uma base de $20 · 15 = 300$ cm².'],
  ['Caixa aberta', '$1\\ 300 − 300 = 1\\ 000$ cm².']
], '<strong>1 300 cm²</strong> com tampa e <strong>1 000 cm²</strong> sem tampa.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Prisma triangular reto', 'A base de um prisma reto é um triângulo retângulo de catetos 3 cm e 4 cm (hipotenusa 5 cm) e a altura do prisma é 10 cm. Calcule $A_T$.', [
  ['Área da base', '$A_B = 3 · 4 ÷ 2 = 6$ cm².'],
  ['Área lateral', '$P = 3 + 4 + 5 = 12$ ⇒ $A_L = 12 · 10 = 120$ cm².'],
  ['Total', '$A_T = 2 · 6 + 120 = 132$ cm².']
], '$A_T = 132$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Prisma hexagonal regular', 'Um prisma hexagonal regular tem lado da base 4 cm e altura 10 cm. Calcule $A_T$ (use $√{3} = 1,73$).', [
  ['Área da base', '$A_B = {3√{3}|2} · 4^{2} = 24√{3} ≈ 24 · 1,73 = 41,52$ cm².'],
  ['Área lateral', '$P = 6 · 4 = 24$ ⇒ $A_L = 24 · 10 = 240$ cm².'],
  ['Total', '$A_T = 2 · 41,52 + 240 = 323,04$ cm².']
], '$A_T ≈ 323$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Pintando um cubo', 'Quantos cm² de tinta cobrem as 6 faces de um cubo de aresta 6 cm? E se a aresta dobrar?', [
  ['Aresta 6', '$A_T = 6 · 6^{2} = 216$ cm².'],
  ['Aresta 12', '$A_T = 6 · 12^{2} = 864$ cm².'],
  ['Comparação', '$864 ÷ 216 = 4$: dobrando a aresta, a área <strong>quadruplica</strong>.']
], '$216$ cm²; com a aresta dobrada, $864$ cm² (4 vezes).', 'growth'));

b.push(pratique('Bloco', 'A área total de um bloco de 20 cm × 15 cm × 10 cm é:',
  ['650 cm²', '900 cm²', '1 300 cm²', '1 500 cm²', '3 000 cm²'], 2,
  '$2(300 + 150 + 200) = 1\\ 300$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Área lateral', 'Em um prisma reto com perímetro da base 12 cm e altura 10 cm, a área lateral é:',
  ['22 cm²', '60 cm²', '120 cm²', '240 cm²', '1 200 cm²'], 2,
  '$A_L = P · h = 12 · 10 = 120$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Caixa sem tampa', 'Uma caixa de papelão, sem tampa, tem a forma de um bloco de 20 cm × 15 cm × 10 cm (a abertura é a face de 20 cm × 15 cm). A área de papelão usada, em cm², é:',
  ['1 000', '700', '1 300', '1 150', '850'], 0,
  '$A_T = 1\\ 300$; sem a tampa de $300$: $1\\ 000$. <strong>Alternativa A.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a área do prisma engana', [
  ['Esquecer as duas bases', '$A_T = 2A_B + A_L$: são <strong>duas</strong> bases.'],
  ['Usar a área da base como lateral', '$A_L = P · h$, com $P$ o perímetro da base.'],
  ['Caixa aberta', 'Retire só a face que não existe (a tampa), não as duas bases.'],
  ['Unidades', 'Áreas em cm² ou m²; confira se todas as medidas estão na mesma unidade.']
]));
b.push(quiz([
  { q: 'A área total de um cubo de aresta 5 cm é:', o: ['25 cm²', '100 cm²', '125 cm²', '150 cm²'], a: 3 },
  { q: 'A área lateral de um prisma reto é:', o: ['$A_B · h$', '$P · h$', '$2A_B$', '$A_B + h$'], a: 1 },
  { q: 'Em $A_T = 2A_B + A_L$, o número 2 aparece porque:', o: ['há 2 faces laterais', 'há 2 bases', 'o prisma tem 2 alturas', 'por convenção'], a: 1 },
  { q: 'Se a aresta de um cubo dobra, a área total:', o: ['dobra', 'triplica', 'quadruplica', 'permanece'], a: 2 }
]));
b.push(fechamento([
  ['Total', '$A_T = 2 · A_B + A_L$.'],
  ['Lateral', '$A_L = P · h$ (prisma reto).'],
  ['Bloco', '$2(ab + bc + ac)$; cubo: $6a^{2}$.']
], 'Planifique, some as partes e confira a unidade.'));

pages.push({ out: BASE + 'aula-2-area-da-superficie.html', html: K.deck({
  title: 'Prisma: área da superfície — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 40 e 41 · Área da superfície', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['ar-a', 'ar-b', 'ar-c'], function(){ var a = +$('ar-a').value, b = +$('ar-b').value, c = +$('ar-c').value;
    if(![a, b, c].every(isFinite) || a <= 0 || b <= 0 || c <= 0){ ['ar-t', 'ar-l', 'ar-v'].forEach(function(i){ $(i).textContent = '—'; }); $('ar-h').textContent = 'Use medidas positivas.'; return; }
    var t = 2 * (a * b + b * c + a * c), l = 2 * (a + b) * c;
    $('ar-t').textContent = pt(t, 3); $('ar-l').textContent = pt(l, 3); $('ar-v').textContent = pt(t - a * b, 3);
    $('ar-h').textContent = 'A_T = 2(ab + bc + ac). Base a·b = ' + pt(a * b, 3) + '; lateral = perímetro da base (' + pt(2 * (a + b), 3) + ') · altura c. Caixa aberta: tira-se a base a·b.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Prisma: <span>características, planificação e área</span>',
  lede: 'Duas bases paralelas e congruentes, faces laterais paralelogramos. Contagem: F = n + 2, V = 2n, A = 3n. Área total: A_T = 2·A_B + A_L, com A_L = P·h no prisma reto.',
  badges: ['F = n + 2', 'A_T = 2A_B + A_L', 'A_L = P · h'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Definição', 'Bases e laterais', 'chart', 'primary', p('Bases paralelas e congruentes; laterais paralelogramos.') + call('Reto', 'Laterais retangulares.', 'success')],
    ['Contagem', 'Base com n lados', 'target', 'growth', li(['$F = n + 2$.', '$V = 2n$.', '$A = 3n$.'])],
    ['Planificação', 'Aberto no plano', 'scale', 'decay', p('2 bases + $n$ retângulos.') + call('Cubo', '6 quadrados.', 'success')],
    ['Área lateral', 'P · h', 'link', 'success', p('Retângulo de lados $P$ e $h$.') + call('Exemplo', '$P = 12$, $h = 10$ ⇒ $120$.', 'success')],
    ['Área total', '2·A_B + A_L', 'up', 'primary', p('Bloco: $2(ab + bc + ac)$.') + call('Exemplo', '20×15×10: 1 300 cm².', 'success')],
    ['Caixa aberta', 'Sem tampa', 'check', 'growth', li(['Retire a face ausente.', 'Confira unidades.', 'Escala: dobrar arestas ×4.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer uma das bases.', 'Usar $A_B$ no lugar de $P · h$.', 'Contar faces como $2n$.', 'Retirar duas bases na caixa aberta.', 'Misturar cm e m.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Prisma: características e área <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: planificação, contagem, caixa, prisma triangular e caixa aberta.',
  final: 'Planifique, calcule as áreas das partes e some.',
  questions: [
    { badge: 'Estilo ENEM · planificação', text: 'A planificação de uma embalagem tem 2 hexágonos regulares e 6 retângulos iguais.', cmd: 'O sólido correspondente é um:', opts: ['pirâmide hexagonal', 'prisma hexagonal', 'cilindro', 'prisma octogonal', 'dodecaedro'], a: 1,
      sol: '<p>Duas bases hexagonais e seis laterais retangulares: prisma hexagonal reto.</p>' },
    { badge: 'Estilo ENEM · contagem', text: 'Um prisma tem como base um octógono.', cmd: 'O número de faces desse prisma é:', opts: ['8', '9', '10', '16', '24'], a: 2,
      sol: '<p>$F = n + 2 = 8 + 2 = 10$.</p>' },
    { badge: 'Estilo ENEM · caixa', text: 'Uma caixa tem 20 cm de comprimento, 15 cm de largura e 10 cm de altura.', cmd: 'A área total de papelão, em cm², é:', opts: ['650', '900', '1 300', '1 500', '3 000'], a: 2,
      sol: '<p>$2(300 + 150 + 200) = 1\\ 300$.</p>' },
    { badge: 'Estilo ENEM · prisma triangular', text: 'Um prisma reto de altura 10 cm tem como base um triângulo retângulo de catetos 3 cm e 4 cm.', cmd: 'A área total, em cm², é:', opts: ['72', '132', '120', '144', '192'], a: 1,
      sol: '<p>$A_B = 6$; $A_L = (3 + 4 + 5) · 10 = 120$; $A_T = 12 + 120 = 132$.</p>' },
    { badge: 'Estilo ENEM · caixa aberta', text: 'A caixa de 20 cm × 15 cm × 10 cm não tem tampa (a abertura é a face de 20 cm × 15 cm).', cmd: 'A área de papelão usada, em cm², é:', opts: ['1 000', '700', '1 300', '1 150', '850'], a: 0,
      sol: '<p>$1\\ 300 − 300 = 1\\ 000$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Que sólido tem esta <span style="color:var(--growth);">planificação</span>?',
  subtitle: 'Prisma triangular, bloco, prisma hexagonal ou outro sólido?',
  tpl: cClassificar({
    cats: ['Prisma triangular', 'Prisma retangular (bloco)', 'Prisma hexagonal', 'Não é prisma'],
    intro: 'Cada cartão descreve as figuras de uma planificação. Escolha o sólido e clique em <strong>Conferir</strong>.',
    final: 'Prisma: duas bases iguais e laterais retangulares (se reto).',
    itens: [
      ['2 triângulos e 3 retângulos', 0, 'Duas bases triangulares e 3 laterais: prisma triangular.'],
      ['6 retângulos', 1, 'Bloco retangular (prisma de base retangular).'],
      ['2 hexágonos e 6 retângulos', 2, 'Prisma hexagonal reto.'],
      ['1 círculo e 1 setor circular', 3, 'É a planificação de um cone.'],
      ['2 quadrados e 4 retângulos', 1, 'Bloco de base quadrada.'],
      ['2 triângulos equiláteros e 3 retângulos iguais', 0, 'Prisma triangular regular.'],
      ['1 quadrado e 4 triângulos', 3, 'Uma só base: pirâmide, não prisma.'],
      ['2 hexágonos e 6 paralelogramos', 2, 'Prisma hexagonal oblíquo.'],
      ['2 círculos e 1 retângulo', 3, 'É a planificação de um cilindro.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Prisma: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: vértices, faces, área total, área lateral e prisma triangular. Digite o número pedido.',
  final: 'Você percorreu a trilha: contagem, planificação e áreas.',
  problems: [
    { tag: 'Vértices', q: 'Quantos vértices tem um prisma hexagonal?', a: 12, ph: 'vértices', hint: '2 · 6.', sol: '<p>$12$.</p>' },
    { tag: 'Faces', q: 'Quantas faces tem um prisma octogonal?', a: 10, ph: 'faces', hint: 'n + 2.', sol: '<p>$10$.</p>' },
    { tag: 'Área total', q: 'Qual a área total, em cm², de um bloco de 20 cm × 15 cm × 10 cm?', a: 1300, ph: 'cm²', hint: '2(ab + bc + ac).', sol: '<p>$1\\ 300$.</p>' },
    { tag: 'Área lateral', q: 'Um prisma reto tem perímetro da base 12 cm e altura 10 cm. Qual a área lateral?', a: 120, ph: 'cm²', hint: 'P · h.', sol: '<p>$120$.</p>' },
    { tag: 'Prisma triangular', q: 'Base: triângulo retângulo de catetos 3 e 4 (hipotenusa 5); altura 10. Qual a área total, em cm²?', a: 132, ph: 'cm²', hint: '2 · 6 + 12 · 10.', sol: '<p>$132$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Prisma: Características e Área', accent: 'primary', icon: 'cube',
  aulas: [['Aula 39', 'Prisma: características e planificações', 'aula-1-caracteristicas-e-planificacoes.html'], ['Aulas 40–41', 'Prisma: área da superfície', 'aula-2-area-da-superficie.html']],
  enem: 'Prisma: características e área no estilo ENEM', cria: 'Que sólido tem esta planificação?', pratica: 'Prisma: trilha de desafios'
}, pages };
