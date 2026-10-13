// Unidade v23 — Esfera: área, volume e problemas (aulas 62 a 64 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'esfera', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v23', BRAND = 'Esfera: Área e Volume', CAP = 'Aulas 62 a 64';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: área e volume =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 62 e 63', h1: 'Esfera: <span style="color:var(--primary);">área e volume</span>',
  sub: 'A bola, o globo e a bolha de sabão têm o formato de esfera. Duas fórmulas resolvem quase tudo: a superfície vale 4πR² e o volume, 4/3 de πR³.',
  badges: [['A = 4πR²'], ['V = 4πR³ ÷ 3', 'growth'], ['semiesfera: metade', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da bola às fórmulas.', [
  ['Elementos', 'centro, raio, diâmetro e círculo máximo', 'bulb'],
  ['Superfície', 'A = 4πR²', 'target'],
  ['Volume', 'V = 4πR³ ÷ 3', 'chart'],
  ['Semiesfera', 'metade da esfera', 'link'],
  ['Escala', 'dobrar R: ×4 e ×8', 'scale']
]));
a.push(objetivosSlide([
  'Identificar os <strong>elementos</strong> da esfera: centro, raio $R$, diâmetro e círculo máximo.',
  'Calcular a <strong>área da superfície</strong> $A = 4πR^{2}$.',
  'Calcular o <strong>volume</strong> $V = {4πR^{3}|3}$ (e com $π = 3$, $V = 4R^{3}$).',
  'Resolver problemas com <strong>semiesferas</strong> e prever o efeito de <strong>dobrar o raio</strong>.'
], 'Dica', 'A área da esfera é igual à <strong>área lateral do cilindro circunscrito</strong>: $2πR · 2R = 4πR^{2}$. Já o volume é <strong>dois terços</strong> do volume desse cilindro.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Embrulhar uma bola', `
          ${lede('Para presentear uma criança com uma bola, você tem <strong>papel suficiente para cobrir a lateral de uma caixa cilíndrica</strong> onde a bola cabe justinha. Será que o papel dá para embrulhar a bola toda? Por mais incrível que pareça, <strong>sim</strong>: a área da esfera é igual à área lateral do cilindro que a envolve.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.esfera({ lr: 'R', w: 220, h: 160 })}</div>
            ${mini('A bola tem raio $R$. A caixa cilíndrica que a envolve tem altura $2R$ e raio $R$. A área lateral dessa caixa é:', ['$2πR^{2}$', '$4πR^{2}$', '$πR^{2}$', '$8πR^{2}$'], 1, '$A_L = 2πR · 2R = 4πR^{2}$: exatamente a área da esfera.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · esfera', 'Área da superfície e volume', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Esfera:</strong> conjunto dos pontos do espaço a uma mesma distância $R$ (raio) de um ponto (centro).</li>
                <li><strong>Círculo máximo:</strong> seção que passa pelo centro, de raio $R$.</li>
                <li><strong>Área da superfície:</strong> <strong>$A = 4πR^{2}$</strong> (4 vezes a área do círculo máximo).</li>
                <li><strong>Volume:</strong> <strong>$V = {4|3} π R^{3}$</strong>. Com $π = 3$: $V = 4R^{3}$.</li>
                <li><strong>Semiesfera:</strong> volume $= {2|3} π R^{3}$; superfície curva $= 2πR^{2}$ (mais $πR^{2}$ da tampa, se fechada).</li>
                <li><strong>Escala:</strong> $R$ dobra ⇒ $A$ ×4 e $V$ ×8.</li>
              </ul>
            </div>
            ${W.box('Esfera (π = 3,14)', W.row(W.nm('es-r', 'raio R', 3, 'any', 'min="0"')) + W.txt('es-a', 'Área da superfície = ') + W.txt('es-v', 'Volume = ') + W.txt('es-s', 'Semiesfera (volume) = ') + W.hint('es-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Esfera, cilindro e cone', `
          ${tbl(['Relação (Arquimedes)', 'Valor'], [['Área da esfera × área lateral do cilindro circunscrito', 'iguais: $4πR^{2}$'], ['Volume da esfera × volume do cilindro circunscrito', '$2 ÷ 3$'], ['Cone : esfera : cilindro (mesmo $R$ e altura $2R$)', '$1 : 2 : 3$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Cilindro circunscrito', 'Raio $R$ e altura $2R$: $V_{cil} = 2πR^{3}$ e $V_{esf} = {4|3}πR^{3}$, razão $2 ÷ 3$.', 'success')}
            ${callout('Com π = 3', '$A = 12R^{2}$ e $V = 4R^{3}$: contas rápidas.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Área da esfera', 'Calcule a área da superfície de uma esfera de raio 3 cm. (Use $π = 3$.)', [
  ['Fórmula', '$A = 4πR^{2}$.'],
  ['Cálculo', '$A = 4 · 3 · 9 = 108$ cm².']
], '$A = 108$ cm².'));
a.push(exemplo('Exemplo resolvido', 'Volume da esfera', 'Calcule o volume de uma esfera de raio 6 cm. (Use $π = 3$.)', [
  ['Fórmula', '$V = {4|3}πR^{3} = 4R^{3}$ (com $π = 3$).'],
  ['Cálculo', '$V = 4 · 216 = 864$ cm³.']
], '$V = 864$ cm³.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Reservatório hemisférico', 'Um reservatório tem a forma de uma semiesfera de diâmetro 18 m. Qual o volume máximo de água, em litros? (Use $π = 3$.)', [
  ['Raio', '$R = 9$ m.'],
  ['Volume', '$V = {2|3}πR^{3} = {2|3} · 3 · 729 = 1\\ 458$ m³.'],
  ['Litros', '$1\\ 458 · 1\\ 000 = 1\\ 458\\ 000$ L.']
], '<strong>1 458 000 L</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Esfera no cubo', 'Uma esfera de raio 5 cm está inscrita em um cubo de aresta 10 cm. Qual a fração do cubo ocupada pela esfera? (Use $π = 3$.)', [
  ['Esfera', '$V = 4 · 125 = 500$ cm³.'],
  ['Cubo', '$10^{3} = 1\\ 000$ cm³.'],
  ['Fração', '$500 ÷ 1\\ 000 = 50\\%$ (com $π = 3,14$: ${π|6} ≈ 52,4\\%$).']
], 'Cerca de <strong>50%</strong> do cubo.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Efeito da escala', 'O raio de uma esfera dobra. Por quanto ficam multiplicadas a área e o volume?', [
  ['Área', '$4π(2R)^{2} = 4 · 4πR^{2}$ ⇒ ×4.'],
  ['Volume', '${4|3}π(2R)^{3} = 8 · {4|3}πR^{3}$ ⇒ ×8.']
], 'Área ×4 e volume ×8.', 'growth'));

a.push(pratique('Área', 'A área da superfície de uma esfera de raio 3 cm, com $π = 3$, é:',
  ['36 cm²', '54 cm²', '108 cm²', '324 cm²', '432 cm²'], 2,
  '$4 · 3 · 9 = 108$. <strong>Alternativa C.</strong>'));
a.push(pratique('Volume', 'O volume de uma esfera de raio 6 cm, com $π = 3$, é:',
  ['288 cm³', '432 cm³', '864 cm³', '1 296 cm³', '3 456 cm³'], 2,
  '$4 · 6^{3} = 864$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Escala', 'O raio de uma esfera é dobrado. O volume fica multiplicado por:',
  ['2', '4', '6', '8', '16'], 3,
  '$(2R)^{3} = 8R^{3}$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a esfera engana', [
  ['Confundir com o círculo', 'A área do círculo máximo é $πR^{2}$; a da esfera é <strong>4 vezes</strong> isso.'],
  ['Cubo do raio', 'No volume o raio vai ao <strong>cubo</strong>: $R^{3}$.'],
  ['Semiesfera', 'O volume é a <strong>metade</strong>; a área total inclui a tampa plana $πR^{2}$.'],
  ['Diâmetro', 'Divida o diâmetro por 2 antes de calcular.']
]));
a.push(quiz([
  { q: 'A área da superfície esférica é:', o: ['$πR^{2}$', '$2πR^{2}$', '$4πR^{2}$', '$4πR^{3} ÷ 3$'], a: 2 },
  { q: 'Com $π = 3$ e $R = 2$, o volume é:', o: ['8', '16', '32', '96'], a: 2 },
  { q: 'O volume de uma semiesfera de raio $R$ é:', o: ['$4πR^{3} ÷ 3$', '$2πR^{3} ÷ 3$', '$πR^{3}$', '$πR^{2}$'], a: 1 },
  { q: 'Dobrando o raio, o volume da esfera:', o: ['dobra', 'quadruplica', 'fica ×8', 'fica ×16'], a: 2 }
]));
a.push(fechamento([
  ['Área', '$A = 4πR^{2}$.'],
  ['Volume', '$V = 4πR^{3} ÷ 3$.'],
  ['Escala', '$R$ ×2 ⇒ área ×4 e volume ×8.']
], 'Raio ao quadrado para a superfície, ao cubo para o volume.'));

pages.push({ out: BASE + 'aula-1-area-e-volume-da-esfera.html', html: K.deck({
  title: 'Esfera: área e volume — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 62 e 63 · Área e volume da esfera', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['es-r'], function(){ var r = +$('es-r').value, PI = 3.14;
    if(!isFinite(r) || r <= 0){ ['es-a', 'es-v', 'es-s'].forEach(function(i){ $(i).textContent = '—'; }); $('es-h').textContent = 'Use R > 0.'; return; }
    var A = 4 * PI * r * r, V = 4 * PI * r * r * r / 3;
    $('es-a').textContent = pt(A, 3); $('es-v').textContent = pt(V, 3); $('es-s').textContent = pt(V / 2, 3);
    $('es-h').textContent = 'A = 4πR²; V = 4πR³ ÷ 3 (π = 3,14). Dobrando R: área ×4 e volume ×8.'; });`
}) });

// ===================== AULA 2: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 64', h1: 'Esfera: <span style="color:var(--growth);">situações-problema</span>',
  sub: 'Uma bola de sorvete cabe na casquinha? Quantas bolinhas cabem em uma caixa? Quantos rolamentos saem de uma peça derretida? Os problemas de esfera combinam tudo o que vimos.',
  badges: [['bolinhas na caixa'], ['derreter e refazer', 'growth'], ['sorvete na casquinha', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do enunciado ao volume.', [
  ['Organizar', 'o que muda de forma, o que conserva', 'bulb'],
  ['Empacotar', 'bolinhas em fileiras e camadas', 'target'],
  ['Conservar volume', 'derreter e refazer', 'chart'],
  ['Comparar', 'cone, cilindro e esfera', 'link'],
  ['Conferir', 'unidades e ordem de grandeza', 'scale']
]));
b.push(objetivosSlide([
  'Usar a <strong>conservação do volume</strong> quando um sólido é derretido e refeito em esferas.',
  'Contar <strong>esferas em uma caixa</strong> em fileiras e camadas alinhadas.',
  'Comparar o volume de uma <strong>esfera</strong> com o de um <strong>cone</strong> ou <strong>cilindro</strong>.',
  'Resolver problemas com <strong>semiesferas</strong> e unidades de capacidade.'
], 'Dica', 'Em problemas de “derreter e refazer”, o volume total se conserva: $V_{peça} = n · V_{esfera}$ e o $π$ costuma <strong>se cancelar</strong>.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quantas bolinhas cabem?', `
          ${lede('Uma caixa <strong>cúbica</strong> tem 1 dm de aresta interna. Querem-se colocar nela bolinhas rígidas de <strong>raio 1 cm</strong>, em fileiras e camadas alinhadas. Quantas cabem?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Passo', 'Cálculo'], [['Aresta da caixa', '1 dm $= 10$ cm'], ['Diâmetro de cada bolinha', '2 cm'], ['Por fileira, por camada e camadas', '$10 ÷ 2 = 5$ em cada direção ⇒ $5 · 5 · 5 = 125$']])}
            ${mini('Quantas bolinhas de raio 1 cm cabem em uma caixa cúbica de aresta 10 cm (alinhadas)?', ['25', '64', '125', '500'], 2, 'O diâmetro é 2 cm: $10 ÷ 2 = 5$ bolinhas em cada direção, $5^{3} = 125$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estratégias', 'Conservar, empacotar e comparar', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Empacotar:</strong> divida cada dimensão da caixa pelo <strong>diâmetro</strong>; o produto dá o número de esferas alinhadas.</li>
                <li><strong>Derreter:</strong> $V_{peça} = n · V_{esfera}$ ⇒ $n = V_{peça} ÷ V_{esfera}$.</li>
                <li><strong>Sorvete:</strong> compare $V_{esfera}$ com $V_{casquinha}$ (cone).</li>
                <li>Quando $π$ aparece nos dois volumes, ele <strong>se cancela</strong>.</li>
              </ul>
            </div>
            ${W.box('Peça cilíndrica derretida em esferas', W.row(W.nm('dr-r', 'raio do cilindro', 4, 'any', 'min="0"'), W.nm('dr-h', 'altura do cilindro', 50, 'any', 'min="0"'), W.nm('dr-d', 'diâmetro da esfera', 1, 'any', 'min="0"')) + W.txt('dr-n', 'Quantidade de esferas = ') + W.hint('dr-hh'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Peça derretida', 'Uma peça maciça cilíndrica, de raio 4 cm e altura 50 cm, é derretida para fabricar esferas de 1 cm de diâmetro (sem perda de material). Quantas esferas?', [
  ['Volume da peça', '$π · 4^{2} · 50 = 800π$ cm³.'],
  ['Volume de cada esfera', 'Raio $0,5$: ${4|3}π · 0,125 = {π|6}$ cm³.'],
  ['Quantidade', '$800π ÷ {π|6} = 800 · 6 = 4\\ 800$.']
], '<strong>4 800 esferas</strong> (o $π$ se cancela).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Sorvete que derrete', 'Uma bola de sorvete de raio 3 cm derrete dentro de uma casquinha cônica de raio 3 cm e altura 10 cm. A casquinha comporta o sorvete derretido? (Use $π = 3$.)', [
  ['Sorvete', '$V = 4 · 27 = 108$ cm³.'],
  ['Casquinha', '$V = {3 · 9 · 10|3} = 90$ cm³.'],
  ['Conclusão', '$108 > 90$.']
], 'Não: sobram <strong>18 cm³</strong> de sorvete derretido para fora da casquinha.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Esfera no cilindro', 'Uma bola de raio 3 cm cabe justa em um cilindro de altura 6 cm. Qual a fração do cilindro ocupada pela bola? (Use $π = 3$.)', [
  ['Bola', '$V = 4 · 27 = 108$ cm³.'],
  ['Cilindro', '$V = 3 · 9 · 6 = 162$ cm³.'],
  ['Fração', '$108 ÷ 162 = {2|3}$.']
], '<strong>2/3</strong> (Arquimedes).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Gotas e esferas', 'Uma esfera de raio 6 cm é derretida e transformada em esferas de raio 3 cm. Quantas esferas menores?', [
  ['Razão dos raios', '$6 ÷ 3 = 2$.'],
  ['Razão dos volumes', '$2^{3} = 8$.']
], '<strong>8 esferas</strong>.', 'growth'));

b.push(pratique('Bolinhas na caixa', 'Quantas bolinhas de raio 1 cm cabem, alinhadas, em uma caixa cúbica de aresta 10 cm?',
  ['500', '800', '125', '1 000', '1 728'], 2,
  '$5 · 5 · 5 = 125$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Gotas', 'Uma esfera de raio 6 cm é derretida e vira esferas de raio 3 cm. Quantas?',
  ['2', '4', '6', '8', '16'], 3,
  '$(6 ÷ 3)^{3} = 8$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(estiloEnem('Rolamentos', 'Uma peça maciça cilíndrica de raio 4 cm e altura 50 cm será derretida para fabricar esferas maciças de diâmetro 1 cm, sem perda de material. A quantidade de esferas é:',
  ['800', '2 400', '4 800', '9 600', '19 200'], 2,
  '$800π ÷ {π|6} = 4\\ 800$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de esfera enganam', [
  ['Contar pelo volume', 'Bolinhas alinhadas em caixa: conte por <strong>dimensão</strong> (aresta ÷ diâmetro), e não por volume da caixa ÷ volume da bola.'],
  ['Diâmetro e raio', 'Esfera de “1 cm de diâmetro” tem raio 0,5 cm.'],
  ['Semelhança', 'Razão $k$ de raios ⇒ volumes em razão $k^{3}$.'],
  ['Unidades', 'Converta tudo para a mesma unidade antes de comparar.']
]));
b.push(quiz([
  { q: 'Em uma caixa de aresta 6 cm cabem quantas esferas de diâmetro 2 cm alinhadas?', o: ['9', '18', '27', '36'], a: 2 },
  { q: 'Uma esfera de raio 2R tem volume quantas vezes maior que a de raio R?', o: ['2', '4', '6', '8'], a: 3 },
  { q: 'A esfera inscrita em um cilindro ocupa que fração dele?', o: ['1/2', '2/3', '3/4', '1/3'], a: 1 },
  { q: 'Em “derreter e refazer”, o que se conserva?', o: ['a área', 'o raio', 'o volume', 'a forma'], a: 2 }
]));
b.push(fechamento([
  ['Empacotar', 'Aresta ÷ diâmetro em cada direção.'],
  ['Derreter', 'Volume se conserva; π cancela.'],
  ['Comparar', 'Esfera = 2/3 do cilindro circunscrito.']
], 'Esfera em problemas: conserve o volume e confira diâmetro e raio.'));

pages.push({ out: BASE + 'aula-2-situacoes-problema.html', html: K.deck({
  title: 'Esfera: situações-problema — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 64 · Situações-problema', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['dr-r', 'dr-h', 'dr-d'], function(){ var r = +$('dr-r').value, h = +$('dr-h').value, d = +$('dr-d').value;
    if(![r, h, d].every(isFinite) || r <= 0 || h <= 0 || d <= 0){ $('dr-n').textContent = '—'; $('dr-hh').textContent = 'Use valores positivos.'; return; }
    var n = r * r * h / (4 / 3 * Math.pow(d / 2, 3));
    $('dr-n').textContent = pt(n, 2);
    $('dr-hh').textContent = 'n = (π·r²·h) ÷ (4/3·π·(d/2)³): o π se cancela. Em problemas de “sem perda de material”, o resultado é o número de esferas.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Esfera: <span>área, volume e problemas</span>',
  lede: 'A = 4πR² e V = 4πR³ ÷ 3. Dobrar o raio quadruplica a área e multiplica o volume por 8. Em derreter e refazer, o volume se conserva.',
  badges: ['A = 4πR²', 'V = 4πR³ ÷ 3', 'R ×2 ⇒ V ×8'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Elementos', 'Centro e raio', 'chart', 'primary', p('Círculo máximo: raio $R$.') + call('Diâmetro', '$2R$.', 'success')],
    ['Área', '4πR²', 'target', 'growth', p('Igual à lateral do cilindro circunscrito.') + call('Exemplo', 'R = 3, π = 3: 108.', 'success')],
    ['Volume', '4πR³ ÷ 3', 'scale', 'decay', p('Com π = 3: $V = 4R^{3}$.') + call('Exemplo', 'R = 6: 864.', 'success')],
    ['Semiesfera', 'Metade', 'link', 'success', p('$V = 2πR^{3} ÷ 3$') + call('Reservatório', 'D = 18 m: 1 458 000 L.', 'success')],
    ['Escala', 'Dobrar R', 'up', 'primary', li(['Área ×4.', 'Volume ×8.', 'Raio ×k ⇒ volume ×k³.'])],
    ['Problemas', 'Derreter e empacotar', 'check', 'growth', li(['Conserve o volume.', 'Empacote por dimensão.', 'π costuma cancelar.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar $R^{2}$ no volume.', 'Confundir diâmetro e raio.', 'Contar bolinhas pelo volume da caixa.', 'Esquecer que a semiesfera é a metade.', 'Achar que dobrar R dobra o volume.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Esfera <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: área, volume, reservatório, bolinhas e escala.',
  final: 'Raio ao quadrado na área, ao cubo no volume.',
  questions: [
    { badge: 'Estilo ENEM · área', text: 'Uma esfera tem raio 3 cm. Use $π = 3$.', cmd: 'A área da superfície, em cm², é:', opts: ['108', '36', '54', '324', '432'], a: 0,
      sol: '<p>$4 · 3 · 9 = 108$.</p>' },
    { badge: 'Estilo ENEM · volume', text: 'Uma esfera tem raio 6 cm. Use $π = 3$.', cmd: 'O volume, em cm³, é:', opts: ['288', '432', '864', '1 296', '3 456'], a: 2,
      sol: '<p>$V = 4R^{3} = 4 · 216 = 864$.</p>' },
    { badge: 'Estilo ENEM · reservatório', text: 'Um reservatório tem a forma de uma semiesfera de diâmetro 18 m. Use $π = 3$.', cmd: 'O volume máximo de água, em litros, é:', opts: ['1 458 000', '729 000', '486 000', '2 916 000', '5 832 000'], a: 0,
      sol: '<p>$R = 9$; $V = {2|3} · 3 · 729 = 1\\ 458$ m³ $= 1\\ 458\\ 000$ L.</p>' },
    { badge: 'Estilo ENEM · bolinhas', text: 'Uma caixa cúbica tem 1 dm de aresta interna e será preenchida com bolinhas rígidas de 1 cm de raio, alinhadas em fileiras e camadas.', cmd: 'O número de bolinhas é:', opts: ['500', '800', '125', '1 000', '1 728'], a: 2,
      sol: '<p>Diâmetro 2 cm: $10 ÷ 2 = 5$ por direção; $5^{3} = 125$.</p>' },
    { badge: 'Estilo ENEM · escala', text: 'O raio de uma esfera é dobrado.', cmd: 'O volume fica multiplicado por:', opts: ['2', '4', '6', '8', '16'], a: 3,
      sol: '<p>$(2R)^{3} = 8R^{3}$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">esfera</span>',
  subtitle: 'Julgue cada afirmação sobre a esfera.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Esfera: 4πR² de superfície, 4πR³/3 de volume, e 2/3 do cilindro circunscrito.',
    afirmacoes: [
      ['A área da superfície esférica é $4πR^{2}$.', true, 'Verdadeira: 4 vezes a área do círculo máximo.'],
      ['O volume da esfera é $4πR^{2} ÷ 3$.', false, 'Falsa: o raio vai ao <strong>cubo</strong>: $4πR^{3} ÷ 3$.'],
      ['Dobrando o raio, a área quadruplica.', true, 'Verdadeira: $(2R)^{2} = 4R^{2}$.'],
      ['Dobrando o raio, o volume dobra.', false, 'Falsa: o volume fica ×8.'],
      ['O volume de uma semiesfera é $2πR^{3} ÷ 3$.', true, 'Verdadeira: metade do volume da esfera.'],
      ['A esfera inscrita em um cilindro ocupa 2/3 dele.', true, 'Verdadeira (Arquimedes): $V_{esf} = {2|3} V_{cil}$.'],
      ['A área da esfera é igual à área lateral do cilindro circunscrito.', true, 'Verdadeira: $2πR · 2R = 4πR^{2}$.'],
      ['Uma esfera de diâmetro 1 cm tem raio 1 cm.', false, 'Falsa: o raio é 0,5 cm.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Esfera: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: área, volume, semiesfera, bolinhas e derretimento. Digite o número pedido.',
  final: 'Você percorreu a trilha: área, volume, escala e problemas.',
  problems: [
    { tag: 'Área', q: 'Esfera de raio 3 cm, π = 3: qual a área da superfície, em cm²?', a: 108, ph: 'cm²', hint: '4 · 3 · 9.', sol: '<p>$108$.</p>' },
    { tag: 'Volume', q: 'Esfera de raio 6 cm, π = 3: qual o volume, em cm³?', a: 864, ph: 'cm³', hint: '4 · 216.', sol: '<p>$864$.</p>' },
    { tag: 'Semiesfera', q: 'Semiesfera de diâmetro 18 m, π = 3: quantos litros cabem?', a: 1458000, ph: 'L', hint: '2/3 · 3 · 729 m³.', sol: '<p>$1\\ 458\\ 000$.</p>' },
    { tag: 'Bolinhas', q: 'Quantas bolinhas de raio 1 cm cabem, alinhadas, em uma caixa cúbica de 10 cm de aresta?', a: 125, ph: 'bolinhas', hint: '5 · 5 · 5.', sol: '<p>$125$.</p>' },
    { tag: 'Derreter', q: 'Peça cilíndrica de raio 4 e altura 50, derretida em esferas de 1 de diâmetro: quantas esferas?', a: 4800, ph: 'esferas', hint: '800π ÷ (π/6).', sol: '<p>$4\\ 800$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Esfera: Área e Volume', accent: 'primary', icon: 'sigma',
  aulas: [['Aulas 62–63', 'Esfera: área e volume', 'aula-1-area-e-volume-da-esfera.html'], ['Aula 64', 'Esfera: situações-problema', 'aula-2-situacoes-problema.html']],
  enem: 'Esfera no estilo ENEM', cria: 'Verdadeiro ou falso: esfera', pratica: 'Esfera: trilha de desafios'
}, pages };
