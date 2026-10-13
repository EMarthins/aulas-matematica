// Unidade v14 — Poliedros: elementos, regulares, Platão e relação de Euler (aulas 35 a 38 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'poliedros', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v14', BRAND = 'Poliedros', CAP = 'Aulas 35 a 38';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: elementos, convexos e regulares =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 35 e 36', h1: 'Poliedros: <span style="color:var(--primary);">vértices, arestas e faces</span>',
  sub: '“Poli” é muitos e “edro” é face: poliedro é o sólido limitado por polígonos. Contar seus elementos e reconhecer os cinco regulares abre a porta para áreas e volumes.',
  badges: [['V · A · F'], ['convexo ou não', 'growth'], ['5 regulares', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do sólido aos elementos.', [
  ['Poliedro', 'sólido limitado por polígonos', 'bulb'],
  ['Elementos', 'vértices, arestas e faces', 'target'],
  ['Nomes', 'tetraedro, hexaedro, octaedro…', 'chart'],
  ['Convexos', 'sem reentrâncias', 'link'],
  ['Regulares', 'os cinco poliedros regulares', 'scale']
]));
a.push(objetivosSlide([
  'Identificar e contar <strong>vértices ($V$), arestas ($A$) e faces ($F$)</strong> de um poliedro.',
  'Dar o <strong>nome</strong> do poliedro pelo número de faces.',
  'Diferenciar poliedros <strong>convexos</strong> de <strong>não convexos</strong>.',
  'Reconhecer os <strong>cinco poliedros regulares</strong> e seus elementos; relacionar arestas e faces.'
], 'Dica', 'Cada aresta pertence a <strong>duas</strong> faces: somando os lados de todas as faces e <strong>dividindo por 2</strong> você obtém o número de arestas.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Poli… de muitos!', `
          ${lede('<em>Polissílabas</em> têm muitas sílabas; <em>polifonia</em>, muitos sons; <em>polinômio</em>, muitos termos. E <strong>poliedro</strong>? Muitas <strong>faces</strong>: é o sólido geométrico cuja superfície é formada só por <strong>polígonos</strong>, e cada lado de um polígono é lado de exatamente <strong>outro</strong> polígono.')}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Elementos de um poliedro</strong><ul style="font-size:.92rem;margin-top:8px;line-height:1.6;padding-left:18px;"><li><strong>Faces:</strong> polígonos que formam o sólido.</li><li><strong>Arestas:</strong> encontro de duas faces (lado dos polígonos).</li><li><strong>Vértices:</strong> pontos onde as arestas se encontram.</li></ul>', 'primary')}
            ${mini('Um cubo tem quantas faces, arestas e vértices?', ['6, 12 e 8', '8, 12 e 6', '6, 8 e 12', '12, 6 e 8'], 0, 'Faces: 6 quadrados. Arestas: 12. Vértices: 8. (Lembre: $F = 6$, $A = 12$, $V = 8$.)')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · elementos e nomes', 'Nome pelo número de faces', `
          <div class="grid2">
            <div>
              ${tbl(['Faces', 'Nome'], [['4', 'tetraedro'], ['5', 'pentaedro'], ['6', 'hexaedro'], ['7', 'heptaedro'], ['8', 'octaedro'], ['12', 'dodecaedro'], ['20', 'icosaedro']])}
              <p class="hint" style="margin-top:6px;">O nome vem do número de <strong>faces</strong> (poli = várias, edro = face).</p>
            </div>
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Convexo:</strong> qualquer reta (não paralela a uma face) corta o poliedro em <strong>no máximo dois pontos</strong>; não há reentrâncias.</li>
                <li><strong>Não convexo:</strong> existe reta que o corta em <strong>mais de dois pontos</strong>.</li>
                <li><strong>Arestas pelas faces:</strong> $A = {n_1 F_1 + n_2 F_2 + …|2}$, em que $F_i$ faces têm $n_i$ lados.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Os cinco poliedros regulares', `
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;">
            <div style="width:150px;">${S.tetraedro()}</div>
            <div style="width:150px;">${S.bloco({ A: 70, B: 70, D: 60, w: 200, h: 160 })}</div>
            <div style="width:150px;">${S.octaedro()}</div>
          </div>
          ${tbl(['Poliedro regular', 'Face', 'F', 'V', 'A'], [['Tetraedro', 'triângulo', '4', '4', '6'], ['Hexaedro (cubo)', 'quadrado', '6', '8', '12'], ['Octaedro', 'triângulo', '8', '6', '12'], ['Dodecaedro', 'pentágono', '12', '20', '30'], ['Icosaedro', 'triângulo', '20', '12', '30']])}`, { cls: '' }));

a.push(sl('Teoria · poliedros regulares', 'Explorando os regulares', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Todas as faces são <strong>polígonos regulares congruentes</strong>.</li>
                <li>Em <strong>todos os vértices</strong> concorre o mesmo número de arestas.</li>
                <li>Existem <strong>apenas cinco</strong> poliedros regulares.</li>
                <li>Conferência: $V − A + F = 2$ em todos (veremos a relação de Euler na próxima aula).</li>
              </ul>
            </div>
            ${W.box('Elementos de um poliedro regular', W.row(W.sel('pr-t', 'poliedro', ['tetraedro', 'hexaedro (cubo)', 'octaedro', 'dodecaedro', 'icosaedro'], 1)) + W.txt('pr-f', 'Faces F: ') + W.txt('pr-v', 'Vértices V: ') + W.txt('pr-a', 'Arestas A: ') + W.hint('pr-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Contando elementos', 'Determine $V$, $F$ e $A$ de um prisma pentagonal e de uma pirâmide hexagonal.', [
  ['Prisma pentagonal', 'Faces: 2 pentágonos + 5 retângulos ⇒ $F = 7$. Vértices: $5 + 5 = 10$. Arestas: $5 + 5 + 5 = 15$.'],
  ['Pirâmide hexagonal', 'Faces: 1 hexágono + 6 triângulos ⇒ $F = 7$. Vértices: $6 + 1 = 7$. Arestas: $6 + 6 = 12$.']
], 'Prisma: $V = 10$, $F = 7$, $A = 15$. Pirâmide: $V = 7$, $F = 7$, $A = 12$.'));
a.push(exemplo('Exemplo resolvido', 'Arestas pelas faces', 'Um poliedro tem 8 faces triangulares. Quantas arestas ele tem?', [
  ['Soma dos lados', '$8 · 3 = 24$ lados no total.'],
  ['Cada aresta conta duas vezes', 'Dois lados de faces formam uma aresta: $A = 24 ÷ 2 = 12$.']
], '$A = 12$ arestas (é o octaedro).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Convexo ou não convexo?', 'Um poliedro tem uma “reentrância” (como um prisma com um buraco em forma de cunha). Ele é convexo?', [
  ['Teste da reta', 'Uma reta passando pela reentrância corta o sólido em <strong>mais de dois pontos</strong>.'],
  ['Conclusão', 'Existe reta que corta o poliedro em mais de 2 pontos.']
], 'O poliedro é <strong>não convexo</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Nome pelo número de faces', 'Qual o nome de um poliedro com 7 faces? E de um com 12 faces?', [
  ['7 faces', 'heptaedro.'],
  ['12 faces', 'dodecaedro.']
], 'Heptaedro e dodecaedro. O nome depende só do número de faces, não da forma delas.', 'growth'));

a.push(pratique('Elementos', 'Um prisma pentagonal tem quantas arestas?',
  ['10', '12', '15', '17', '20'], 2,
  '$5$ da base superior $+ 5$ da base inferior $+ 5$ laterais $= 15$. <strong>Alternativa C.</strong>'));
a.push(pratique('Arestas pelas faces', 'Um poliedro tem 8 faces triangulares. O número de arestas é:',
  ['6', '12', '16', '24', '8'], 1,
  '$8 · 3 ÷ 2 = 12$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Poliedro de faces triangulares', 'Um poliedro convexo tem 8 faces, todas triangulares (como o octaedro). O número de vértices é:',
  ['6', '4', '5', '8', '12'], 0,
  '$A = 8 · 3 ÷ 2 = 12$; Euler: $V = A − F + 2 = 12 − 8 + 2 = 6$. <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os poliedros enganam', [
  ['Contar cada aresta duas vezes', 'Ao somar os lados das faces, cada aresta aparece duas vezes: divida por 2.'],
  ['Confundir nome e forma', 'Todo poliedro de 6 faces é hexaedro, mas só o <strong>cubo</strong> é regular.'],
  ['Achar que todo poliedro é convexo', 'Poliedros com “reentrâncias” são não convexos.'],
  ['Esquecer as faces escondidas', 'Ao contar em um desenho, não deixe de contar a base e os vértices atrás.']
]));
a.push(quiz([
  { q: 'O número de vértices de um cubo é:', o: ['6', '8', '12', '4'], a: 1 },
  { q: 'Um poliedro com 20 faces chama-se:', o: ['octaedro', 'dodecaedro', 'icosaedro', 'decaedro'], a: 2 },
  { q: 'O poliedro regular com 4 faces triangulares é o:', o: ['cubo', 'octaedro', 'tetraedro', 'icosaedro'], a: 2 },
  { q: 'O número de arestas do dodecaedro regular (12 pentágonos) é:', o: ['20', '30', '60', '12'], a: 1 }
]));
a.push(fechamento([
  ['Elementos', 'Vértices, arestas e faces.'],
  ['Convexo', 'Reta corta em no máximo 2 pontos.'],
  ['Regulares', 'Só cinco: 4, 6, 8, 12 e 20 faces.']
], 'Conte com método: faces primeiro, arestas pela divisão por 2.'));

pages.push({ out: BASE + 'aula-1-elementos-e-regulares.html', html: K.deck({
  title: 'Poliedros: elementos e regulares — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 35 e 36 · Elementos e regulares', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  var DAD = [[4, 4, 6, 'triângulos'], [6, 8, 12, 'quadrados'], [8, 6, 12, 'triângulos'], [12, 20, 30, 'pentágonos'], [20, 12, 30, 'triângulos']];
  bind(['pr-t'], function(){ var d = DAD[+$('pr-t').value];
    $('pr-f').textContent = d[0] + ' faces (' + d[3] + ')'; $('pr-v').textContent = pt(d[1]); $('pr-a').textContent = pt(d[2]);
    $('pr-h').textContent = 'Conferência: V − A + F = ' + d[1] + ' − ' + d[2] + ' + ' + d[0] + ' = ' + (d[1] - d[2] + d[0]) + '.'; });`
}) });

// ===================== AULA 2: Platão e Euler =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 37 e 38', h1: 'Poliedros de Platão e a relação de Euler: <span style="color:var(--growth);">uma conta que sempre fecha</span>',
  sub: 'Em todo poliedro convexo, vértices mais faces é igual a arestas mais dois. Essa relação descoberta por Euler permite descobrir elementos que faltam, sem ver o sólido.',
  badges: [['V − A + F = 2'], ['n · F = 2A', 'growth'], ['m · V = 2A', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do Platão ao Euler.', [
  ['Poliedros de Platão', 'convexos, faces e vértices “iguais”', 'bulb'],
  ['A relação', 'V − A + F = 2', 'target'],
  ['Arestas por face e por vértice', 'n · F = 2A e m · V = 2A', 'chart'],
  ['Quebra-cabeças', 'descobrir V, F ou A', 'link'],
  ['Aplicações', 'cristais e esculturas', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer os <strong>poliedros de Platão</strong> (convexos, mesmo número de lados por face, mesmo número de arestas por vértice).',
  'Aplicar a <strong>relação de Euler</strong>: $V − A + F = 2$ (ou $F + V = A + 2$).',
  'Usar $n · F = 2A$ e $m · V = 2A$ para <strong>achar elementos desconhecidos</strong>.',
  'Resolver problemas em que faltam faces, vértices ou arestas.'
], 'Dica', 'Faça uma tabela com <strong>quantos polígonos de cada tipo</strong> o poliedro tem: some os lados, divida por 2 para ter $A$ e use Euler para ter $V$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Contando uma escultura', `
          ${lede('Duas esculturas são formadas só por polígonos. Para saber quantas faces, vértices e arestas cada uma tem, contar no desenho é <strong>trabalhoso e fácil de errar</strong>. A relação de Euler diz que, em qualquer poliedro convexo, três contagens não são independentes.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Poliedro', 'V', 'F', 'A', 'V + F', 'A + 2'], [['Tetraedro', '4', '4', '6', '8', '8'], ['Cubo', '8', '6', '12', '14', '14'], ['Octaedro', '6', '8', '12', '14', '14']])}
            ${mini('Um poliedro convexo tem 10 faces e 16 vértices. O número de arestas é:', ['22', '24', '26', '28'], 1, '$V + F = A + 2$ ⇒ $16 + 10 = A + 2$ ⇒ $A = 24$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · Platão e Euler', 'Poliedros de Platão e a relação de Euler', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Poliedro de Platão:</strong> convexo, com $n$ lados em <strong>todas</strong> as faces e $m$ arestas em <strong>todos</strong> os vértices. Existem só cinco: tetraedro, hexaedro, octaedro, dodecaedro e icosaedro.</li>
                <li><strong>Relação de Euler</strong> (todo poliedro convexo): <strong>$V − A + F = 2$</strong>.</li>
                <li>Cada aresta liga duas faces: <strong>$n · F = 2A$</strong>. Cada aresta liga dois vértices: <strong>$m · V = 2A$</strong>.</li>
                <li>Com faces diferentes: $2A = 3F_3 + 4F_4 + 5F_5 + …$.</li>
              </ul>
            </div>
            ${W.box('Euler: ache o que falta', W.row(W.nm('eu-v', 'vértices V', 8, 'any'), W.nm('eu-f', 'faces F', 6, 'any')) + W.txt('eu-a', 'Arestas A = V + F − 2 = ') + W.txt('eu-n', 'Lados por face (média): ') + W.txt('eu-m', 'Arestas por vértice (média): ') + W.hint('eu-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Platão em uma tabela', `
          ${tbl(['Poliedro', 'n (lados/face)', 'm (arestas/vértice)', 'F', 'V', 'A'], [['Tetraedro', '3', '3', '4', '4', '6'], ['Hexaedro', '4', '3', '6', '8', '12'], ['Octaedro', '3', '4', '8', '6', '12'], ['Dodecaedro', '5', '3', '12', '20', '30'], ['Icosaedro', '3', '5', '20', '12', '30']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Checagem', 'Dodecaedro: $n · F = 5 · 12 = 60 = 2A$ ⇒ $A = 30$; $m · V = 3 · 20 = 60 = 2A$ ✓.', 'success')}
            ${callout('Euler', '$20 − 30 + 12 = 2$ ✓. A relação vale também para poliedros convexos que não são regulares.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Achar as arestas', 'Um poliedro convexo tem 10 faces e 16 vértices. Quantas arestas?', [
  ['Euler', '$V − A + F = 2$.'],
  ['Substitua', '$16 − A + 10 = 2$ ⇒ $A = 24$.']
], '$A = 24$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Faces de tipos diferentes', 'Um poliedro convexo tem 4 faces triangulares e 4 faces quadrangulares. Quantos vértices?', [
  ['Soma dos lados', '$4 · 3 + 4 · 4 = 12 + 16 = 28$ ⇒ $A = 28 ÷ 2 = 14$.'],
  ['Faces', '$F = 4 + 4 = 8$.'],
  ['Euler', '$V = A − F + 2 = 14 − 8 + 2 = 8$.']
], '$V = 8$ vértices.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Dodecaedro regular', 'O dodecaedro regular tem 12 faces pentagonais e em cada vértice concorrem 3 arestas. Quantas arestas e vértices?', [
  ['Arestas', '$n · F = 2A$ ⇒ $5 · 12 = 2A$ ⇒ $A = 30$.'],
  ['Vértices', '$m · V = 2A$ ⇒ $3V = 60$ ⇒ $V = 20$.'],
  ['Euler', '$20 − 30 + 12 = 2$ ✓.']
], '$A = 30$ e $V = 20$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Um cristal de granada', 'Um cristal tem 12 faces, todas losangos (quadriláteros). Quantas arestas e vértices tem?', [
  ['Arestas', '$12 · 4 ÷ 2 = 24$.'],
  ['Vértices', '$V = A − F + 2 = 24 − 12 + 2 = 14$.']
], '$A = 24$ e $V = 14$ (é o rombododecaedro).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Faces a partir de V e A', 'Um poliedro convexo tem 12 vértices e 30 arestas. Quantas faces?', [
  ['Euler', '$F = A − V + 2$.'],
  ['Substitua', '$F = 30 − 12 + 2 = 20$.']
], '$F = 20$ faces (é o icosaedro).', 'growth'));

b.push(pratique('Euler', 'Um poliedro convexo tem 6 faces e 8 vértices. O número de arestas é:',
  ['10', '12', '14', '16', '18'], 1,
  '$A = V + F − 2 = 8 + 6 − 2 = 12$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Vértices pelas faces', 'Um poliedro convexo tem 4 faces triangulares e 4 quadrangulares. O número de vértices é:',
  ['6', '7', '8', '9', '10'], 2,
  '$A = (12 + 16) ÷ 2 = 14$; $V = 14 − 8 + 2 = 8$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Cristal de granada', 'A granada é um mineral cujo cristal tem 12 faces, todas em forma de losango. O número de vértices desse cristal é:',
  ['12', '16', '14', '20', '24'], 2,
  '$A = 12 · 4 ÷ 2 = 24$; $V = A − F + 2 = 24 − 12 + 2 = 14$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde Euler engana', [
  ['Usar Euler em sólido não convexo', 'A relação $V − A + F = 2$ vale para poliedros convexos (e outros “sem buracos”).'],
  ['Esquecer de dividir por 2', 'A soma dos lados das faces é $2A$, e não $A$.'],
  ['Trocar V e F', '$V − A + F = 2$ é simétrica em $V$ e $F$, mas $m · V = 2A$ e $n · F = 2A$ não são: confira qual é qual.'],
  ['Achar que Platão = qualquer convexo', 'Platão exige o <strong>mesmo</strong> $n$ em todas as faces e o <strong>mesmo</strong> $m$ em todos os vértices.']
]));
b.push(quiz([
  { q: 'Pela relação de Euler, $V − A + F$ vale:', o: ['0', '1', '2', '3'], a: 2 },
  { q: 'Um poliedro convexo com 12 vértices e 30 arestas tem quantas faces?', o: ['16', '18', '20', '22'], a: 2 },
  { q: 'No icosaedro (20 faces triangulares), o número de arestas é:', o: ['20', '30', '60', '12'], a: 1 },
  { q: 'Quantos poliedros de Platão existem?', o: ['3', '4', '5', '6'], a: 2 }
]));
b.push(fechamento([
  ['Euler', '$V − A + F = 2$.'],
  ['Contagem', '$n · F = 2A$ e $m · V = 2A$.'],
  ['Platão', 'Cinco poliedros regulares convexos.']
], 'Uma relação, duas contagens e o sólido inteiro está decifrado.'));

pages.push({ out: BASE + 'aula-2-platao-e-euler.html', html: K.deck({
  title: 'Poliedros de Platão e relação de Euler — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 37 e 38 · Platão e Euler', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['eu-v', 'eu-f'], function(){ var v = +$('eu-v').value, f = +$('eu-f').value;
    if(![v, f].every(isFinite) || v < 4 || f < 4){ $('eu-a').textContent = '—'; $('eu-n').textContent = '—'; $('eu-m').textContent = '—'; $('eu-h').textContent = 'Um poliedro tem pelo menos 4 vértices e 4 faces.'; return; }
    var a = v + f - 2;
    $('eu-a').textContent = pt(a); $('eu-n').textContent = pt(2 * a / f, 2); $('eu-m').textContent = pt(2 * a / v, 2);
    $('eu-h').textContent = (a < 6 || 2 * a / f < 3 || 2 * a / v < 3) ? 'Esses valores não podem formar um poliedro: cada face tem pelo menos 3 lados e cada vértice, 3 arestas.' : 'Conferência: V − A + F = ' + pt(v) + ' − ' + pt(a) + ' + ' + pt(f) + ' = 2. Média de lados por face = 2A ÷ F.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Poliedros: <span>elementos, regulares, Platão e Euler</span>',
  lede: 'Todo poliedro tem vértices, arestas e faces. Os convexos obedecem a V − A + F = 2, e os cinco poliedros de Platão têm faces e vértices todos iguais.',
  badges: ['V − A + F = 2', 'n·F = 2A', 'só 5 regulares'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Elementos', 'V, A e F', 'chart', 'primary', p('Faces: polígonos. Arestas: encontro de faces. Vértices: encontro de arestas.') + call('Cubo', '$V = 8$, $A = 12$, $F = 6$.', 'success')],
    ['Nomes', 'Pelas faces', 'target', 'growth', li(['4: tetraedro.', '6: hexaedro.', '8: octaedro, 12: dodecaedro, 20: icosaedro.'])],
    ['Convexo', 'Teste da reta', 'scale', 'decay', p('Convexo: reta corta em até 2 pontos.') + call('Não convexo', 'Tem reentrâncias.', 'success')],
    ['Arestas pelas faces', 'Dividir por 2', 'link', 'success', p('$A = (3F_3 + 4F_4 + 5F_5 + …) ÷ 2$') + call('Exemplo', '8 triângulos ⇒ $A = 12$.', 'success')],
    ['Euler', 'V − A + F = 2', 'up', 'primary', p('Para poliedros convexos.') + call('Exemplo', '$F = 10$, $V = 16$ ⇒ $A = 24$.', 'success')],
    ['Platão', 'Os cinco', 'check', 'growth', li(['Faces regulares iguais.', 'Mesmo nº de arestas por vértice.', 'Tetra, hexa, octa, dodeca e icosaedro.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer de dividir por 2 as arestas.', 'Usar Euler em sólido não convexo.', 'Confundir hexaedro com cubo regular.', 'Trocar $V$ e $F$ nas relações $m · V = 2A$ e $n · F = 2A$.', 'Contar só as faces visíveis.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Poliedros <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: arestas de um prisma, octaedro, Euler, granada e faces triangulares e quadrangulares.',
  final: 'Conte as faces, divida por 2 para ter as arestas e feche com Euler.',
  questions: [
    { badge: 'Estilo ENEM · prisma', text: 'Considere um prisma cuja base é um pentágono.', cmd: 'O número de arestas desse prisma é:', opts: ['10', '12', '15', '17', '20'], a: 2,
      sol: '<p>$5 + 5 + 5 = 15$ (duas bases e cinco arestas laterais).</p>' },
    { badge: 'Estilo ENEM · faces triangulares', text: 'Um poliedro convexo tem 8 faces, todas triangulares.', cmd: 'O número de vértices é:', opts: ['6', '4', '5', '8', '12'], a: 0,
      sol: '<p>$A = 8 · 3 ÷ 2 = 12$; $V = A − F + 2 = 12 − 8 + 2 = 6$.</p>' },
    { badge: 'Estilo ENEM · Euler', text: 'Um poliedro convexo tem 10 faces e 16 vértices.', cmd: 'O número de arestas é:', opts: ['22', '24', '26', '28', '30'], a: 1,
      sol: '<p>$A = V + F − 2 = 24$.</p>' },
    { badge: 'Estilo ENEM · cristal', text: 'O cristal de um mineral tem 12 faces, todas em forma de losango.', cmd: 'O número de vértices desse cristal é:', opts: ['12', '16', '14', '20', '24'], a: 2,
      sol: '<p>$A = 12 · 4 ÷ 2 = 24$; $V = 24 − 12 + 2 = 14$.</p>' },
    { badge: 'Estilo ENEM · faces diferentes', text: 'Um poliedro convexo tem 4 faces triangulares e 4 faces quadrangulares.', cmd: 'O número de vértices é:', opts: ['8', '6', '7', '9', '10'], a: 0,
      sol: '<p>$A = (12 + 16) ÷ 2 = 14$; $V = 14 − 8 + 2 = 8$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">poliedros</span>',
  subtitle: 'Ligue cada poliedro aos seus elementos (V · F · A).',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se o poliedro combinar com os seus números (vértices · faces · arestas), o par fica aberto.',
    final: 'Em todos os pares: V − A + F = 2.',
    pares: [['Tetraedro', '4 · 4 · 6'], ['Hexaedro (cubo)', '8 · 6 · 12'], ['Octaedro', '6 · 8 · 12'], ['Dodecaedro', '20 · 12 · 30'], ['Icosaedro', '12 · 20 · 30'], ['Prisma triangular', '6 · 5 · 9']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Poliedros: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: prisma, faces triangulares, Euler, dodecaedro e icosaedro. Digite o número pedido.',
  final: 'Você percorreu a trilha: contagem, divisão por 2 e Euler.',
  problems: [
    { tag: 'Prisma', q: 'Quantas arestas tem um prisma pentagonal?', a: 15, ph: 'arestas', hint: '5 + 5 + 5.', sol: '<p>$15$.</p>' },
    { tag: 'Faces triangulares', q: 'Um poliedro tem 8 faces triangulares. Quantas arestas?', a: 12, ph: 'arestas', hint: '8 · 3 ÷ 2.', sol: '<p>$12$.</p>' },
    { tag: 'Euler', q: 'Um poliedro convexo tem 10 faces e 16 vértices. Quantas arestas?', a: 24, ph: 'arestas', hint: 'A = V + F − 2.', sol: '<p>$24$.</p>' },
    { tag: 'Dodecaedro', q: 'O dodecaedro regular tem 12 faces e 30 arestas. Quantos vértices?', a: 20, ph: 'vértices', hint: 'V = A − F + 2.', sol: '<p>$30 − 12 + 2 = 20$.</p>' },
    { tag: 'Icosaedro', q: 'Um poliedro convexo tem 12 vértices e 30 arestas. Quantas faces?', a: 20, ph: 'faces', hint: 'F = A − V + 2.', sol: '<p>$30 − 12 + 2 = 20$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Poliedros', accent: 'primary', icon: 'cube',
  aulas: [['Aulas 35–36', 'Poliedros: elementos e regulares', 'aula-1-elementos-e-regulares.html'], ['Aulas 37–38', 'Poliedros de Platão e relação de Euler', 'aula-2-platao-e-euler.html']],
  enem: 'Poliedros no estilo ENEM', cria: 'Memória dos poliedros', pratica: 'Poliedros: trilha de desafios'
}, pages };
