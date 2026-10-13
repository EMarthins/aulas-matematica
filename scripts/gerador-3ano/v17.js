// Unidade v17 — Pirâmide: características, planificações e área da superfície (aulas 45 a 47 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar, cClassificar } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'piramide-area', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v17', BRAND = 'Pirâmide: Características e Área', CAP = 'Aulas 45 a 47';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: características =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 45', h1: 'Pirâmide: <span style="color:var(--primary);">características e planificações</span>',
  sub: 'Quéops, Quéfren e Miquerinos: as pirâmides do Egito são o exemplo mais famoso. Uma base poligonal e um vértice ligado a todos os seus pontos formam o sólido.',
  badges: [['base + vértice'], ['faces laterais triangulares', 'growth'], ['altura e apótemas', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da pirâmide do Egito ao modelo.', [
  ['Elementos', 'base, vértice, faces e arestas', 'bulb'],
  ['Nome', 'pelo polígono da base', 'target'],
  ['Regular', 'base regular e pé da altura no centro', 'chart'],
  ['Apótemas', 'da base e da pirâmide', 'link'],
  ['Planificação', 'base + triângulos', 'scale']
]));
a.push(objetivosSlide([
  'Identificar os <strong>elementos</strong> da pirâmide: base, vértice, faces laterais, arestas da base e laterais, altura.',
  'Dar o <strong>nome</strong> da pirâmide pela base; contar $V$, $F$ e $A$ com $n$ lados na base.',
  'Reconhecer a pirâmide <strong>regular</strong> e os <strong>apótemas</strong> (da base e da pirâmide).',
  'Reconhecer a <strong>planificação</strong> de uma pirâmide.'
], 'Dica', 'Uma pirâmide de base com $n$ lados tem $F = n + 1$, $V = n + 1$ e $A = 2n$: <strong>sempre</strong> $V = F$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'As pirâmides do Egito', `
          ${lede('<strong>Quéops, Quéfren e Miquerinos</strong> são as maiores pirâmides do Egito. Todas têm <strong>base quadrada</strong> e <strong>quatro faces triangulares</strong> que se encontram em um único ponto, o vértice.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.piramide({ lh: 'h', la: 'ℓ', lm: 'm', apotema: true, w: 250, h: 180 })}</div>
            ${mini('Uma pirâmide de base quadrada tem quantas faces (incluindo a base)?', ['4', '5', '6', '8'], 1, '1 base quadrada + 4 faces laterais triangulares: $F = 5$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · elementos', 'Elementos e classificação', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Base:</strong> polígono convexo. <strong>Vértice:</strong> ponto $V$ fora do plano da base.</li>
                <li><strong>Faces laterais:</strong> triângulos que ligam cada lado da base ao vértice.</li>
                <li><strong>Altura $h$:</strong> distância do vértice ao plano da base.</li>
                <li><strong>Regular:</strong> base regular e pé da altura no centro da base; as faces laterais são triângulos isósceles congruentes.</li>
                <li><strong>Apótema da pirâmide $m$:</strong> altura de uma face lateral. <strong>Apótema da base $a$:</strong> do centro da base ao meio de um lado.</li>
                <li><strong>Contagem</strong> (base de $n$ lados): $F = n + 1$, $V = n + 1$, $A = 2n$.</li>
              </ul>
            </div>
            ${W.box('Elementos de uma pirâmide', W.row(W.nm('pi-n', 'lados da base n', 5, '1', 'min="3" max="20"')) + W.txt('pi-nm', 'Nome: ') + W.txt('pi-f', 'Faces: ') + W.txt('pi-v', 'Vértices: ') + W.txt('pi-a', 'Arestas: ') + W.hint('pi-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Planificação e relação de Pitágoras', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Planificação: <strong>1 base</strong> + <strong>$n$ triângulos</strong> (isósceles, na regular).</li>
                <li>Pitágoras na pirâmide regular: <strong>$m^{2} = h^{2} + a^{2}$</strong> (apótemas e altura).</li>
                <li>Aresta lateral $c$: $c^{2} = m^{2} + (ℓ ÷ 2)^{2}$.</li>
              </ul>
            </div>
            ${tbl(['Pirâmide', 'Base', 'F', 'V', 'A'], [['triangular', 'triângulo', '4', '4', '6'], ['quadrangular', 'quadrado', '5', '5', '8'], ['pentagonal', 'pentágono', '6', '6', '10'], ['hexagonal', 'hexágono', '7', '7', '12']])}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Contando', 'Determine $F$, $V$ e $A$ de uma pirâmide hexagonal.', [
  ['Faces', '1 base + 6 laterais ⇒ $F = 7$.'],
  ['Vértices', '6 da base + 1 do topo ⇒ $V = 7$.'],
  ['Arestas', '6 da base + 6 laterais ⇒ $A = 12$.']
], '$F = 7$, $V = 7$, $A = 12$. Euler: $7 − 12 + 7 = 2$ ✓.'));
a.push(exemplo('Exemplo resolvido', 'Pitágoras na pirâmide', 'Em uma pirâmide quadrangular regular de lado da base 6 m e altura 4 m, determine o apótema da pirâmide $m$.', [
  ['Apótema da base', '$a = 6 ÷ 2 = 3$ m.'],
  ['Pitágoras', '$m^{2} = h^{2} + a^{2} = 16 + 9 = 25$.'],
  ['Resolva', '$m = 5$ m.']
], '$m = 5$ m (triângulo retângulo 3-4-5).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Qual sólido planificado?', 'Uma planificação tem 1 pentágono e 5 triângulos isósceles. Que sólido é esse?', [
  ['Base', 'Um pentágono ⇒ base pentagonal.'],
  ['Laterais', 'Cinco triângulos ⇒ uma face por lado da base.']
], 'Uma <strong>pirâmide pentagonal</strong> (regular, se o pentágono é regular).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Pelo número de faces', 'Uma pirâmide tem 8 faces. Qual o polígono da base?', [
  ['Relação', '$F = n + 1$.'],
  ['Resolva', '$8 = n + 1$ ⇒ $n = 7$.']
], 'A base é um <strong>heptágono</strong>.', 'growth'));

a.push(pratique('Faces', 'Uma pirâmide pentagonal tem quantas faces?',
  ['5', '6', '7', '10', '11'], 1,
  '$F = 5 + 1 = 6$. <strong>Alternativa B.</strong>'));
a.push(pratique('Arestas', 'Uma pirâmide hexagonal tem quantas arestas?',
  ['7', '10', '12', '13', '18'], 2,
  '$A = 2 · 6 = 12$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Apótema da pirâmide', 'Uma pirâmide quadrangular regular tem lado da base 6 m e altura 4 m. O apótema da pirâmide mede:',
  ['3 m', '4 m', '5 m', '6 m', '7 m'], 2,
  '$m = √{4^{2} + 3^{2}} = 5$ m. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a pirâmide engana', [
  ['Confundir altura e apótema', 'A <strong>altura</strong> $h$ é perpendicular à base; o <strong>apótema</strong> $m$ é a altura de uma face lateral ($m > h$).'],
  ['Contar a base como lateral', '$F = n + 1$: $n$ laterais mais a base.'],
  ['Usar o lado da base na Pitágoras', 'No triângulo $h$-$a$-$m$ o cateto horizontal é $a = ℓ ÷ 2$, e não $ℓ$.'],
  ['Achar que toda pirâmide é regular', 'A regular exige base regular e pé da altura no centro.']
]));
a.push(quiz([
  { q: 'Uma pirâmide de base triangular tem quantas arestas?', o: ['3', '4', '6', '9'], a: 2 },
  { q: 'Em toda pirâmide, o número de vértices é:', o: ['igual ao de arestas', 'igual ao de faces', 'o dobro das faces', 'n'], a: 1 },
  { q: 'A planificação de uma pirâmide quadrangular tem:', o: ['2 quadrados e 4 triângulos', '1 quadrado e 4 triângulos', '1 quadrado e 4 retângulos', '5 quadrados'], a: 1 },
  { q: 'O apótema da pirâmide é:', o: ['a altura do sólido', 'a altura de uma face lateral', 'o lado da base', 'a diagonal da base'], a: 1 }
]));
a.push(fechamento([
  ['Contagem', '$F = V = n + 1$ e $A = 2n$.'],
  ['Regular', 'Faces laterais congruentes.'],
  ['Pitágoras', '$m^{2} = h^{2} + a^{2}$.']
], 'Base com n lados: a pirâmide se conta com n + 1.'));

pages.push({ out: BASE + 'aula-1-caracteristicas-da-piramide.html', html: K.deck({
  title: 'Pirâmide: características — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 45 · Características da pirâmide', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  var NOM = {3: 'triangular', 4: 'quadrangular', 5: 'pentagonal', 6: 'hexagonal', 7: 'heptagonal', 8: 'octogonal'};
  bind(['pi-n'], function(){ var n = Math.round(+$('pi-n').value);
    if(!isFinite(n) || n < 3){ ['pi-nm', 'pi-f', 'pi-v', 'pi-a'].forEach(function(i){ $(i).textContent = '—'; }); $('pi-h').textContent = 'A base precisa de pelo menos 3 lados.'; return; }
    $('pi-nm').textContent = 'pirâmide ' + (NOM[n] || 'de base com ' + n + ' lados');
    $('pi-f').textContent = (n + 1) + ' (1 base + ' + n + ' laterais)'; $('pi-v').textContent = n + 1; $('pi-a').textContent = 2 * n;
    $('pi-h').textContent = 'Euler: V − A + F = ' + (n + 1) + ' − ' + 2 * n + ' + ' + (n + 1) + ' = ' + ((n + 1) - 2 * n + (n + 1)) + '.'; });`
}) });

// ===================== AULA 2: área =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 46 e 47', h1: 'Área da superfície da pirâmide: <span style="color:var(--growth);">base mais triângulos</span>',
  sub: 'Quanto de tecido para uma tenda em forma de pirâmide? Quanto de revestimento para um telhado piramidal? A área total soma a base com as faces laterais triangulares.',
  badges: [['A_T = A_B + A_L'], ['A_L = n · ℓ·m/2', 'growth'], ['m² = h² + a²', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Da planificação à área.', [
  ['Planificar', 'base + triângulos', 'bulb'],
  ['Face lateral', 'triângulo de base ℓ e altura m', 'target'],
  ['Área lateral', 'n faces iguais', 'chart'],
  ['Área total', 'base + lateral', 'link'],
  ['Pitágoras', 'achar m a partir de h', 'scale']
]));
b.push(objetivosSlide([
  'Calcular $A_B$, $A_L$ e $A_T$ de pirâmides regulares: $A_T = A_B + A_L$.',
  'Usar $A_L = n · {ℓ · m|2}$ (soma das áreas das $n$ faces triangulares).',
  'Obter o apótema $m$ pela <strong>relação de Pitágoras</strong> $m^{2} = h^{2} + a^{2}$.',
  'Resolver problemas de <strong>gasto de material</strong> (tendas, telhados, embalagens).'
], 'Dica', 'Cada face lateral é um <strong>triângulo</strong>: área $= {ℓ · m|2}$, com $m$ a altura <strong>da face</strong> (e não a altura da pirâmide).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A tenda piramidal', `
          ${lede('Uma barraca tem a forma de uma <strong>pirâmide quadrangular regular</strong> sem fundo: o tecido cobre só as <strong>4 faces laterais</strong>. O lado da base mede $3$ m e o apótema da pirâmide, $2,5$ m.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Parte', 'Cálculo'], [['uma face triangular', '$3 · 2,5 ÷ 2 = 3,75$ m²'], ['4 faces', '$4 · 3,75 = 15$ m²']])}
            ${mini('A quantidade de tecido para a barraca (apenas faces laterais) é:', ['7,5 m²', '10 m²', '15 m²', '30 m²'], 2, '$A_L = 4 · {3 · 2,5|2} = 15$ m².')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · área da pirâmide regular', 'A_T = A_B + A_L', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$A_B$:</strong> área da base (polígono regular de lado $ℓ$).</li>
                <li><strong>$A_L = n · {ℓ · m|2}$:</strong> $n$ triângulos de base $ℓ$ e altura $m$.</li>
                <li><strong>$A_T = A_B + A_L$.</strong></li>
                <li><strong>Pitágoras:</strong> $m^{2} = h^{2} + a^{2}$, em que $a$ é o apótema da base ($a = ℓ ÷ 2$ no quadrado).</li>
              </ul>
            </div>
            ${W.box('Pirâmide quadrangular regular', W.row(W.nm('qa-l', 'lado da base ℓ', 6, 'any', 'min="0"'), W.nm('qa-h', 'altura h', 4, 'any', 'min="0"')) + W.txt('qa-m', 'Apótema m = ') + W.txt('qa-al', 'Área lateral = ') + W.txt('qa-at', 'Área total = ') + W.hint('qa-hh'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Passo a passo', `
          ${tbl(['Passo', 'O que fazer', 'Pirâmide ℓ = 6, h = 4'], [['1', 'Apótema da base $a$', '$a = 3$'], ['2', 'Apótema da pirâmide $m$ (Pitágoras)', '$m = √{16 + 9} = 5$'], ['3', 'Área lateral $A_L = n · ℓ · m ÷ 2$', '$4 · 6 · 5 ÷ 2 = 60$'], ['4', 'Área da base', '$6^{2} = 36$'], ['5', 'Área total', '$36 + 60 = 96$']])}`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Pirâmide quadrangular regular', 'Calcule a área total de uma pirâmide quadrangular regular de lado da base 6 m e altura 4 m.', [
  ['Apótema', '$m = √{4^{2} + 3^{2}} = 5$ m.'],
  ['Lateral', '$A_L = 4 · {6 · 5|2} = 60$ m².'],
  ['Base', '$A_B = 6^{2} = 36$ m².'],
  ['Total', '$A_T = 36 + 60 = 96$ m².']
], '$A_T = 96$ m².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Tetraedro regular', 'Qual a área total de um tetraedro regular de aresta 4 cm? (Use $√{3} = 1,73$.)', [
  ['Uma face', 'Triângulo equilátero de lado 4: ${4^{2} · √{3}|4} = 4√{3}$.'],
  ['Quatro faces', '$A_T = 4 · 4√{3} = 16√{3}$.'],
  ['Valor', '$16 · 1,73 = 27,68$ cm².']
], '$A_T ≈ 27,68$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Pirâmide hexagonal regular', 'Uma pirâmide hexagonal regular tem lado da base 4 cm e apótema da pirâmide 5 cm. Calcule $A_T$ (use $√{3} = 1,73$).', [
  ['Lateral', '$A_L = 6 · {4 · 5|2} = 60$ cm².'],
  ['Base', '$A_B = {3√{3}|2} · 4^{2} = 24√{3} ≈ 41,52$ cm².'],
  ['Total', '$A_T ≈ 60 + 41,52 = 101,52$ cm².']
], '$A_T ≈ 101,5$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'A tenda', 'Qual o tecido necessário para cobrir as 4 faces laterais de uma tenda piramidal de lado 3 m e apótema 2,5 m?', [
  ['Uma face', '$3 · 2,5 ÷ 2 = 3,75$ m².'],
  ['Quatro faces', '$4 · 3,75 = 15$ m².']
], '<strong>15 m²</strong> de tecido.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'A pirâmide de Quéops', 'A base de Quéops é um quadrado de aproximadamente 230 m de lado e a altura é cerca de 147 m. Estime a área lateral. (Use $√{34\\ 834} ≈ 187$.)', [
  ['Apótema', '$m = √{147^{2} + 115^{2}} = √{34\\ 834} ≈ 187$ m.'],
  ['Lateral', '$A_L = 4 · {230 · 187|2} ≈ 86\\ 020$ m².']
], 'Cerca de <strong>86 mil m²</strong> de superfície lateral.', 'growth'));

b.push(pratique('Área total', 'A área total de uma pirâmide quadrangular regular de lado da base 6 m e altura 4 m é:',
  ['60 m²', '72 m²', '96 m²', '120 m²', '144 m²'], 2,
  '$m = 5$; $A_L = 60$; $A_B = 36$; $A_T = 96$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Tecido da tenda', 'Uma tenda piramidal tem lado da base 3 m e apótema 2,5 m. A área das faces laterais é:',
  ['7,5 m²', '10 m²', '15 m²', '22,5 m²', '30 m²'], 2,
  '$4 · {3 · 2,5|2} = 15$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Tetraedro regular', 'Um tetraedro regular tem aresta de 4 cm. Sua área total, em cm², com $√{3} = 1,73$, é aproximadamente:',
  ['16,0', '24,0', '27,7', '32,0', '48,0'], 2,
  'Quatro triângulos equiláteros: $4 · 4√{3} = 16√{3} ≈ 27,7$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a área da pirâmide engana', [
  ['Usar a altura h no lugar do apótema m', 'A face lateral tem altura $m$; $h$ é a altura do sólido.'],
  ['Esquecer a base', '$A_T = A_B + A_L$: some a base (se a tenda não tem fundo, não some).'],
  ['Errar o cateto', 'Em $m^{2} = h^{2} + a^{2}$, $a = ℓ ÷ 2$ para base quadrada.'],
  ['Contar faces demais', 'São $n$ faces laterais iguais.']
]));
b.push(quiz([
  { q: 'A área de cada face lateral (triângulo) é:', o: ['$ℓ · m$', '$ℓ · m ÷ 2$', '$ℓ · h ÷ 2$', '$m · h$'], a: 1 },
  { q: 'Em uma pirâmide quadrangular regular com $h = 12$ e $a = 5$, o apótema $m$ vale:', o: ['7', '13', '17', '60'], a: 1 },
  { q: 'A área total é:', o: ['$A_L$', '$A_B$', '$A_B + A_L$', '$2A_B + A_L$'], a: 2 },
  { q: 'Um tetraedro regular tem quantas faces triangulares iguais?', o: ['3', '4', '6', '8'], a: 1 }
]));
b.push(fechamento([
  ['Total', '$A_T = A_B + A_L$.'],
  ['Lateral', '$A_L = n · ℓ · m ÷ 2$.'],
  ['Pitágoras', '$m^{2} = h^{2} + a^{2}$.']
], 'Achar m é meio caminho: o resto é soma de triângulos.'));

pages.push({ out: BASE + 'aula-2-area-da-piramide.html', html: K.deck({
  title: 'Pirâmide: área da superfície — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 46 e 47 · Área da pirâmide', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['qa-l', 'qa-h'], function(){ var l = +$('qa-l').value, h = +$('qa-h').value;
    if(![l, h].every(isFinite) || l <= 0 || h <= 0){ ['qa-m', 'qa-al', 'qa-at'].forEach(function(i){ $(i).textContent = '—'; }); $('qa-hh').textContent = 'Use valores positivos.'; return; }
    var a = l / 2, m = Math.sqrt(h * h + a * a), AL = 4 * l * m / 2, AB = l * l;
    $('qa-m').textContent = pt(m, 4); $('qa-al').textContent = pt(AL, 4); $('qa-at').textContent = pt(AL + AB, 4);
    $('qa-hh').textContent = 'a = ℓ ÷ 2 = ' + pt(a, 3) + '; m² = h² + a² = ' + pt(h * h + a * a, 3) + '; A_L = 4·ℓ·m ÷ 2; A_T = A_L + ℓ² (' + pt(AB, 3) + ').'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Pirâmide: <span>características e área da superfície</span>',
  lede: 'Base com n lados, F = V = n + 1 e A = 2n. Na regular, as faces laterais são triângulos iguais: A_L = n·ℓ·m/2 e m² = h² + a².',
  badges: ['F = V = n + 1', 'A_T = A_B + A_L', 'm² = h² + a²'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Elementos', 'Base, vértice e faces', 'chart', 'primary', p('Faces laterais triangulares.') + call('Altura', 'Do vértice ao plano da base.', 'success')],
    ['Contagem', 'Base de n lados', 'target', 'growth', li(['$F = n + 1$.', '$V = n + 1$.', '$A = 2n$.'])],
    ['Regular', 'Faces congruentes', 'scale', 'decay', p('Base regular, altura no centro.') + call('Planificação', '1 base + $n$ triângulos.', 'success')],
    ['Pitágoras', 'Achar o apótema', 'link', 'success', p('$m^{2} = h^{2} + a^{2}$') + call('Exemplo', '$h = 4$, $a = 3$ ⇒ $m = 5$.', 'success')],
    ['Área', 'Lateral e total', 'up', 'primary', p('$A_L = n · ℓ · m ÷ 2$') + call('Exemplo', 'ℓ = 6, h = 4 ⇒ $A_T = 96$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['m é altura da face, não do sólido.', 'Base entra na área total.', 'Tenda sem fundo: só $A_L$.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar $h$ no lugar de $m$.', 'Esquecer a base na área total.', 'Usar ℓ em vez de ℓ ÷ 2 em Pitágoras.', 'Contar $2n$ faces.', 'Confundir apótema da base e da pirâmide.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Pirâmide: características e área <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: faces, arestas, área total, tenda e tetraedro.',
  final: 'Ache o apótema m, calcule os triângulos e some a base.',
  questions: [
    { badge: 'Estilo ENEM · faces', text: 'Uma pirâmide tem como base um pentágono.', cmd: 'O número de faces (incluindo a base) é:', opts: ['5', '6', '7', '10', '11'], a: 1,
      sol: '<p>$F = 5 + 1 = 6$.</p>' },
    { badge: 'Estilo ENEM · arestas', text: 'Uma pirâmide tem como base um hexágono.', cmd: 'O número de arestas é:', opts: ['7', '10', '12', '13', '18'], a: 2,
      sol: '<p>$A = 2 · 6 = 12$.</p>' },
    { badge: 'Estilo ENEM · área total', text: 'Uma pirâmide quadrangular regular tem lado da base 6 m e altura 4 m.', cmd: 'Sua área total, em m², é:', opts: ['96', '60', '72', '120', '144'], a: 0,
      sol: '<p>$m = 5$; $A_L = 4 · 6 · 5 ÷ 2 = 60$; $A_B = 36$; $A_T = 96$.</p>' },
    { badge: 'Estilo ENEM · tenda', text: 'Uma tenda em forma de pirâmide quadrangular regular, sem fundo, tem lado da base 3 m e apótema 2,5 m.', cmd: 'A área de tecido, em m², é:', opts: ['10', '15', '7,5', '22,5', '30'], a: 1,
      sol: '<p>$4 · 3 · 2,5 ÷ 2 = 15$.</p>' },
    { badge: 'Estilo ENEM · tetraedro', text: 'Um tetraedro regular tem aresta 4 cm. Use $√{3} = 1,73$.', cmd: 'A área total, em cm², é aproximadamente:', opts: ['16,0', '24,0', '27,7', '32,0', '48,0'], a: 2,
      sol: '<p>$4 · 4√{3} = 16√{3} ≈ 27,7$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">resolução</span>',
  subtitle: 'Coloque os passos do cálculo da área na ordem certa.',
  tpl: cOrdenar({
    intro: 'Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante.',
    final: 'Primeiro o apótema, depois as áreas das partes, por fim a soma.',
    problemas: [
      { titulo: 'Pirâmide quadrangular', enunciado: 'Área total de uma pirâmide quadrangular regular, com lado da base 6 m e altura 4 m.', passos: ['Apótema da base: $a = 6 ÷ 2 = 3$ m.', 'Apótema da pirâmide: $m = √{4^{2} + 3^{2}} = 5$ m.', 'Área lateral: $A_L = 4 · 6 · 5 ÷ 2 = 60$ m².', 'Área total: $A_T = 36 + 60 = 96$ m².'] },
      { titulo: 'Tetraedro regular', enunciado: 'Área total de um tetraedro regular de aresta 4 cm ($√{3} = 1,73$).', passos: ['As 4 faces são triângulos equiláteros de lado 4.', 'Área de uma face: $4^{2} · √{3} ÷ 4 = 4√{3}$.', 'Área total: $4 · 4√{3} = 16√{3}$.', 'Com $√{3} = 1,73$: $A_T ≈ 27,68$ cm².'] },
      { titulo: 'Pirâmide hexagonal', enunciado: 'Área total de uma pirâmide hexagonal regular com lado da base 4 cm e apótema da pirâmide 5 cm ($√{3} = 1,73$).', passos: ['Área da base: $3 · 4^{2} · √{3} ÷ 2 = 24√{3} ≈ 41,52$.', 'Área de uma face lateral: $4 · 5 ÷ 2 = 10$.', 'Área lateral: $6 · 10 = 60$.', 'Área total: $41,52 + 60 = 101,52$ cm².'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Pirâmide: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: faces, arestas, apótema, área lateral e área total. Digite o número pedido.',
  final: 'Você percorreu a trilha: contagem, Pitágoras e áreas.',
  problems: [
    { tag: 'Faces', q: 'Quantas faces tem uma pirâmide pentagonal?', a: 6, ph: 'faces', hint: 'n + 1.', sol: '<p>$6$.</p>' },
    { tag: 'Arestas', q: 'Quantas arestas tem uma pirâmide hexagonal?', a: 12, ph: 'arestas', hint: '2n.', sol: '<p>$12$.</p>' },
    { tag: 'Apótema', q: 'Pirâmide quadrangular regular, lado 6 e altura 4: qual o apótema da pirâmide?', a: 5, ph: 'm', hint: 'Pitágoras com 3 e 4.', sol: '<p>$5$.</p>' },
    { tag: 'Área lateral', q: 'Com lado da base 6 e apótema 5, qual a área lateral?', a: 60, ph: 'área', hint: '4 · 6 · 5 ÷ 2.', sol: '<p>$60$.</p>' },
    { tag: 'Área total', q: 'Qual a área total dessa pirâmide (base 6 × 6)?', a: 96, ph: 'área', hint: '36 + 60.', sol: '<p>$96$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Pirâmide: Características e Área', accent: 'primary', icon: 'triangle',
  aulas: [['Aula 45', 'Pirâmide: características e planificações', 'aula-1-caracteristicas-da-piramide.html'], ['Aulas 46–47', 'Pirâmide: área da superfície', 'aula-2-area-da-piramide.html']],
  enem: 'Pirâmide: características e área no estilo ENEM', cria: 'Ordene a resolução', pratica: 'Pirâmide: trilha de desafios'
}, pages };
