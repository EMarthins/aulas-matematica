// Unidade v16 — Lei dos senos (aulas 35 e 36 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'lei-dos-senos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v16', BRAND = 'Lei dos senos';

// JS comum dos dois decks: resolve o triângulo quando se conhece um lado e dois ângulos
const SENW = String.raw`
  function resolveAAL(a, A, B){ var C = 180 - A - B; if(!(a > 0 && A > 0 && B > 0 && C > 0)) return null;
    var k = a / Math.sin(rad(A)); return {a: a, b: k * Math.sin(rad(B)), c: k * Math.sin(rad(C)), A: A, B: B, C: C, R: k / 2}; }
`;

// ===================== AULA 35: enunciado, lados e ângulos =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 35', h1: 'Lei dos senos: <span style="color:var(--primary);">triângulos que não são retângulos</span>',
  sub: 'O vento empurra o avião para o lado e o piloto precisa “caranguejar” para seguir reto. O ângulo de correção sai de uma relação que vale em qualquer triângulo: a lei dos senos.',
  badges: [['a ÷ sen A = b ÷ sen B'], ['= 2R', 'growth'], ['qualquer triângulo', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do ângulo de deriva ao raio da circunferência.', [
  ['O problema', 'avião e vento formam um triângulo', 'bulb'],
  ['A lei', 'lado ÷ seno do ângulo oposto é constante', 'target'],
  ['Achar um lado', 'um lado e dois ângulos', 'chart'],
  ['Achar um ângulo', 'dois lados e um ângulo', 'link'],
  ['Raio circunscrito', 'a constante vale 2R', 'scale']
]));
a.push(objetivosSlide([
  'Enunciar a <strong>lei dos senos</strong> e reconhecer <strong>lado e ângulo opostos</strong>.',
  'Calcular <strong>lados</strong> e <strong>ângulos</strong> de um triângulo qualquer com a lei dos senos.',
  'Relacionar a razão da lei dos senos ao <strong>raio da circunferência circunscrita</strong>.',
  'Resolver problemas de <strong>navegação, topografia e construção</strong>.'
], 'Dica', 'Antes de usar a lei, <strong>escreva os pares</strong> “lado — ângulo oposto”: $a$ com $A$, $b$ com $B$, $c$ com $C$. Use dois pares completos e uma incógnita.', 'primary'));

a.push(sl('Para início de conversa', 'O avião, o vento e o ângulo de deriva', `
          ${lede('Um avião aponta para o norte a $400$ km/h, mas um vento de $80$ km/h sopra a $30°$ da rota e o desvia. Para <strong>voar reto</strong>, o piloto aponta o nariz um pouco para o lado: é o <strong>ângulo de deriva</strong>. Ele aparece em um triângulo que <strong>não é retângulo</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figTri({ a: 467.3, b: 400, c: 80, w: 300, h: 130, rotulos: ['V', 'O', 'G'], lados: { a: '', b: '400 (avião)', c: '80 (vento)' }, angulos: { B: '30°', C: 'δ' } })}
            ${mini('A lei dos senos dará $sen δ = 80 · sen 30° ÷ 400$. Quanto vale $sen δ$?', ['$0,05$', '$0,1$', '$0,2$', '$0,5$'], 1, '$sen δ = 80 · 0,5 ÷ 400 = 40 ÷ 400 = 0,1$ e $δ ≈ 5,7°$: bastam uns 6° de correção.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · a lei dos senos', 'Lado dividido pelo seno do ângulo oposto', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em <strong>qualquer</strong> triângulo $ABC$ (acutângulo, retângulo ou obtusângulo):</li>
              </ul>
              <p class="formula big" style="margin:6px 0;">$ {a|sen A} = {b|sen B} = {c|sen C} = 2R$</p>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$R$ é o raio da <strong>circunferência circunscrita</strong> (que passa pelos três vértices).</li>
                <li>Cada lado se liga ao seno do <strong>ângulo oposto</strong> a ele.</li>
                <li>Serve quando conhecemos <strong>dois ângulos e um lado</strong> (ou dois lados e o ângulo oposto a um deles).</li>
              </ul>
            </div>
            ${W.box('Um lado e dois ângulos', W.row(W.nm('s1-a', 'Lado a (cm)', 10, 'any', 'min="0.1"'), W.nm('s1-A', 'Ângulo A (°)', 40, 1, 'min="1" max="178"'), W.nm('s1-B', 'Ângulo B (°)', 60, 1, 'min="1" max="178"')) + W.svg('s1-s', '0 0 340 200', '340px') + W.txt('s1-r', 'b · c · C · R: ') + W.hint('s1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Lados e ângulos opostos', `
          <div class="grid2">
            ${T.figTri({ a: 5.64, b: 4.6, c: 5.2, w: 300, h: 180, lados: { a: 'a', b: 'b', c: 'c' }, angulos: { A: 'A', B: 'B', C: 'C' } })}
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.65;">
                <li>$a$ fica <strong>em frente</strong> ao vértice $A$; $b$ em frente a $B$; $c$ em frente a $C$.</li>
                <li>O <strong>maior lado</strong> está oposto ao <strong>maior ângulo</strong>.</li>
                <li>Um ângulo obtuso também tem seno positivo: $sen x = sen (180° − x)$.</li>
                <li>Como a soma dos ângulos é $180°$, com dois ângulos já se conhece o terceiro.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Achar lados', 'Em um triângulo $ABC$, $a = 10$ cm, $A = 40°$ e $B = 60°$. Calcule $b$ e $c$. (use $sen 40° ≈ 0,64$; $sen 60° ≈ 0,87$; $sen 80° ≈ 0,98$)', [
  ['Terceiro ângulo', '$C = 180° − 40° − 60° = 80°$.'],
  ['Lado b', '${b|sen 60°} = {10|sen 40°}$ ⇒ $b = 10 · 0,87 ÷ 0,64 ≈ 13,6$ cm.'.replace('${', '$ {')],
  ['Lado c', '${c|sen 80°} = {10|sen 40°}$ ⇒ $c = 10 · 0,98 ÷ 0,64 ≈ 15,3$ cm.'.replace('${', '$ {')]
], '$b ≈ 13,6$ cm e $c ≈ 15,3$ cm.'));
a.push(exemplo('Exemplo resolvido', 'Achar um ângulo', 'Em um triângulo, $a = 12$ cm, $b = 8$ cm e $A = 50°$. Qual o ângulo $B$? (use $sen 50° ≈ 0,77$)', [
  ['Lei dos senos', '${8|sen B} = {12|sen 50°}$ ⇒ $sen B = 8 · 0,77 ÷ 12 ≈ 0,51$.'.replace('${', '$ {')],
  ['Ângulo agudo', '$B ≈ 30,7°$ (a outra solução, $149,3°$, somada a $50°$ passaria de $180°$: descartada).']
], '$B ≈ 31°$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ângulo de deriva do avião', 'Um avião a $400$ km/h sofre um vento de $80$ km/h que forma $30°$ com a rota. Qual o ângulo de deriva $δ$?', [
  ['Triângulo', 'O lado de $80$ é oposto a $δ$ e o de $400$ é oposto ao ângulo de $30°$.'],
  ['Lei dos senos', '${80|sen δ} = {400|sen 30°}$ ⇒ $sen δ = 80 · 0,5 ÷ 400 = 0,1$.'.replace('${', '$ {')],
  ['Ângulo', '$δ ≈ 5,7°$.']
], 'O piloto corrige a proa em cerca de $5,7°$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Raio da circunferência circunscrita', 'Um triângulo tem o lado $a = 10$ cm oposto a um ângulo $A = 30°$. Qual o raio da circunferência que passa pelos três vértices?', [
  ['A constante', '${a|sen A} = 2R$ ⇒ $2R = 10 ÷ sen 30° = 10 ÷ 0,5 = 20$.'.replace('${', '$ {')],
  ['Raio', '$R = 10$ cm.']
], 'O raio circunscrito mede $10$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Triângulo equilátero inscrito', 'Um triângulo equilátero está inscrito em uma circunferência de raio $R = 2$ cm. Quanto mede cada lado?', [
  ['Ângulo', 'No equilátero, cada ângulo mede $60°$.'],
  ['Lei dos senos', '${ℓ|sen 60°} = 2R = 4$ ⇒ $ℓ = 4 · {√{3}|2}$.'.replace('${', '$ {')],
  ['Lado', '$ℓ = 2√{3} ≈ 3,46$ cm.']
], 'Cada lado mede $2√{3}$ cm (≈ 3,46 cm).', 'growth'));

a.push(pratique('Achar um lado', 'No triângulo $ABC$, $a = 12$, $A = 30°$ e $B = 45°$. O lado $b$ mede:',
  ['$6√{2}$', '$12$', '$12√{2}$', '$24$'], 2, '$b = 12 · sen 45° ÷ sen 30° = 12 · {√{2}|2} ÷ {1|2} = 12√{2}$. <strong>Alternativa C.</strong>'));
a.push(pratique('Raio circunscrito', 'Em um triângulo, um lado de $12$ cm é oposto a um ângulo de $30°$. O raio da circunferência circunscrita é:',
  ['6 cm', '12 cm', '18 cm', '24 cm'], 1, '$2R = 12 ÷ sen 30° = 24$ ⇒ $R = 12$ cm. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Triângulo isósceles', 'Em um triângulo isósceles de base $AC$, o ângulo $B$ mede $120°$ e $b = 14$ cm. Os lados $a$ e $c$ medem aproximadamente:',
  ['7,0 cm', '8,1 cm', '12,1 cm', '16,2 cm'], 1, '$A = C = 30°$. $a = 14 · sen 30° ÷ sen 120° = 7 ÷ 0,866 ≈ 8,1$ cm. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Rota corrigida', 'Um avião a $300$ km/h sofre vento de $60$ km/h que forma $30°$ com a rota desejada. O ângulo de deriva $δ$ satisfaz $sen δ = 60 · sen 30° ÷ 300$. Esse ângulo é, aproximadamente:',
  ['$0,1°$', '$5,7°$', '$11,5°$', '$30°$', '$60°$'], 1, '$sen δ = 30 ÷ 300 = 0,1$ e $δ ≈ 5,7°$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a lei dos senos engana', [
  ['Ângulo errado no par', 'Cada lado pareia com o ângulo <strong>oposto</strong>, nunca com um dos adjacentes.'],
  ['Esquecer o terceiro ângulo', 'Com dois ângulos, calcule o terceiro ($180° − A − B$) antes de começar.'],
  ['Duas soluções', 'Dados dois lados e o ângulo oposto a um deles, $sen B$ pode servir a um ângulo agudo e ao seu suplemento: confira se a soma dos ângulos passa de $180°$.'],
  ['Calculadora em radianos', 'Mantenha a calculadora em <strong>graus (DEG)</strong>.']
]));
a.push(quiz([
  { q: 'Na lei dos senos, o lado $b$ se liga ao seno do ângulo:', o: ['$A$', '$B$', '$C$', 'qualquer um'], a: 1 },
  { q: 'Se $a = 8$ e $A = 30°$, a razão $a ÷ sen A$ vale:', o: ['$4$', '$8$', '$16$', '$32$'], a: 2 },
  { q: 'O raio da circunferência circunscrita é igual a:', o: ['$a ÷ sen A$', '$a ÷ (2 sen A)$', '$2a ÷ sen A$', '$a · sen A$'], a: 1 },
  { q: 'No maior lado do triângulo, o ângulo oposto é:', o: ['o menor', 'o maior', 'sempre reto', 'sempre 60°'], a: 1 }
]));
a.push(fechamento([
  ['A lei', '${a|sen A} = {b|sen B} = {c|sen C} = 2R$.'.replace('${', '$ {')],
  ['Quando usar', 'Dois ângulos e um lado, ou dois lados e o ângulo oposto a um deles.'],
  ['Cuidado', 'Pares “lado — ângulo oposto”; terceiro ângulo; possível segunda solução.']
], 'Triângulo qualquer, lei dos senos: ângulos e lados se encontram pelo seno. Próxima aula: problemas de rampa, torre e rio.'));

// ===================== AULA 36: aplicações =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 36', h1: 'Lei dos senos na prática: <span style="color:var(--primary);">rampas, torres e rios</span>',
  sub: 'Como construir uma rampa de skate em um terreno inclinado? Como medir a largura de um rio sem atravessá-lo? Montando o triângulo e aplicando a lei dos senos.',
  badges: [['3 ângulos e 1 lado'], ['topografia', 'growth'], ['construção', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('De problema real a triângulo, e de triângulo a resposta.', [
  ['Desenhar', 'transformar a situação em um triângulo', 'bulb'],
  ['Marcar ângulos', 'complementos, suplementos e soma 180°', 'target'],
  ['Aplicar a lei', 'pares lado — ângulo oposto', 'chart'],
  ['Conferir', 'ordem de grandeza e unidades', 'link'],
  ['Praticar', 'rampa, incêndio, rio', 'scale']
]));
b.push(objetivosSlide([
  'Montar o <strong>triângulo</strong> de uma situação e <strong>deduzir ângulos</strong> a partir de horizontais, verticais e inclinações.',
  'Aplicar a <strong>lei dos senos</strong> em problemas de rampa, observação a distância e largura de rio.',
  'Reconhecer quando é possível usar a lei: <strong>um lado conhecido e ângulos suficientes</strong>.'
], 'Dica', 'Quando faltam ângulos, procure <strong>retas paralelas, ângulos retos e a soma $180°$</strong>: quase todo triângulo de problema esconde um ângulo que se descobre assim.', 'primary'));

b.push(sl('Para início de conversa', 'A rampa de skate em um terreno inclinado', `
          ${lede('Uma rampa de $4$ m de comprimento deve formar $23°$ com a <strong>horizontal</strong>, mas o terreno onde ela será apoiada tem inclinação de $8°$. Duas peças fecham o triângulo: uma <strong>viga vertical</strong> e uma <strong>longarina</strong> sobre o terreno. Quanto mede cada uma?')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figTri({ a: 4, b: 1.05, c: 3.72, w: 300, h: 150, rotulos: ['A', 'B', 'C'], lados: { a: 'rampa', b: 'viga', c: 'longarina' }, angulos: { A: '98°', B: '15°', C: '67°' } })}
            ${mini('Entre a rampa ($23°$) e a longarina sobre o terreno ($8°$), o ângulo do triângulo é:', ['$8°$', '$15°$', '$23°$', '$31°$'], 1, 'É a diferença das inclinações: $23° − 8° = 15°$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · montar o triângulo', 'Descobrindo os ângulos do triângulo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Viga × longarina:</strong> a viga é vertical e o terreno tem inclinação $α$: o ângulo entre elas é $90° + α$.</li>
                <li><strong>Rampa × longarina:</strong> inclinações $β$ (rampa) e $α$ (terreno): $β − α$.</li>
                <li><strong>Rampa × viga:</strong> o que falta para $180°$: $90° − β$.</li>
                <li>Cada peça fica oposta a um desses ângulos: a rampa ao de $90° + α$, a longarina ao de $90° − β$ e a viga ao de $β − α$.</li>
              </ul>
            </div>
            ${W.box('Projeto da rampa', W.row(W.rg('k1-al', 'Terreno α', 0, 20, 1, 8, '°'), W.rg('k1-be', 'Rampa β', 10, 40, 1, 23, '°'), W.nm('k1-r', 'Rampa (m)', 4, 'any', 'min="0.5"')) + W.svg('k1-s', '0 0 340 200', '340px') + W.txt('k1-o', 'Longarina · viga: ') + W.hint('k1-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'A rampa do início da aula', 'Rampa de $4$ m a $23°$ da horizontal, em terreno de $8°$. Ângulos do triângulo: $98°$ (oposto à rampa), $15°$ (oposto à viga) e $67°$ (oposto à longarina). Calcule viga e longarina. (use $sen 98° ≈ 0,99$; $sen 15° ≈ 0,26$; $sen 67° ≈ 0,92$)', [
  ['Constante', '${4|sen 98°} = {4|0,99} ≈ 4,04$.'.replace('${', '$ {')],
  ['Viga', '$v = 4,04 · sen 15° ≈ 4,04 · 0,26 ≈ 1,05$ m.'],
  ['Longarina', '$l = 4,04 · sen 67° ≈ 4,04 · 0,92 ≈ 3,72$ m.']
], 'Viga de cerca de $1,05$ m e longarina de cerca de $3,72$ m.'));
b.push(exemplo('Exemplo resolvido', 'Focos de incêndio', 'Duas torres de vigilância, $A$ e $B$, distam $12$ km. Os ângulos de visada do foco $F$ são $50°$ em $A$ e $70°$ em $B$. A que distância o foco está de cada torre? (use $sen 50° ≈ 0,77$; $sen 60° ≈ 0,87$; $sen 70° ≈ 0,94$)', [
  ['Ângulo do foco', '$F = 180° − 50° − 70° = 60°$.'],
  ['Constante', '${12|sen 60°} = {12|0,87} ≈ 13,8$.'.replace('${', '$ {')],
  ['De A até F', 'É o lado oposto a $B$: $13,8 · sen 70° ≈ 13,8 · 0,94 ≈ 13,0$ km.'],
  ['De B até F', 'É o lado oposto a $A$: $13,8 · sen 50° ≈ 13,8 · 0,77 ≈ 10,6$ km.']
], 'O foco está a cerca de $13,0$ km da torre $A$ e $10,6$ km da torre $B$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Largura de um rio', 'Para medir a largura de um rio, um topógrafo marca $A$ e $B$ na margem, a $60$ m um do outro, e mira uma árvore $C$ na outra margem: $70°$ em $A$ e $50°$ em $B$. Qual a largura do rio? (use $sen 50° ≈ 0,77$; $sen 60° ≈ 0,87$; $sen 70° ≈ 0,94$)', [
  ['Ângulo em C', '$C = 180° − 70° − 50° = 60°$.'],
  ['Distância AC', '${AC|sen 50°} = {60|sen 60°}$ ⇒ $AC = 60 · 0,77 ÷ 0,87 ≈ 53,1$ m.'.replace('${', '$ {')],
  ['Largura', 'É a altura de $C$ em relação à margem: $h = AC · sen 70° ≈ 53,1 · 0,94 ≈ 50$ m.']
], 'O rio tem cerca de $50$ m de largura.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Seno de um ângulo', 'No triângulo $ABC$, $AC = 5$ m, $BC = 4$ m e $β = 60°$. Calcule $sen α$.', [
  ['Pares', '$BC$ é oposto a $α$ e $AC$ é oposto a $β$.'],
  ['Lei dos senos', '${4|sen α} = {5|sen 60°}$ ⇒ $sen α = 4 · {√{3}|2} ÷ 5$.'.replace('${', '$ {')],
  ['Valor', '$sen α = {2√{3}|5} ≈ 0,69$.']
], '$sen α = 2√{3} ÷ 5 ≈ 0,69$.', 'decay'));

b.push(pratique('Barco entre duas boias', 'Dois observadores, $A$ e $B$, distantes $10$ km, veem um barco $C$ sob ângulos de $30°$ em cada um. A distância de $A$ ao barco é, aproximadamente:',
  ['5,0 km', '5,8 km', '8,7 km', '10,0 km'], 1, '$C = 120°$. $AC = 10 · sen 30° ÷ sen 120° = 5 ÷ 0,866 ≈ 5,8$ km. <strong>Alternativa B.</strong>'));
b.push(pratique('Seno desconhecido', 'No triângulo $ABC$, $AC = 6$, $BC = 4$ e $β = 30°$. O valor de $sen α$ é:',
  ['$ {1|6}$', '$ {1|3}$', '$ {1|2}$', '$ {2|3}$'], 1, '$4 ÷ sen α = 6 ÷ sen 30°$ ⇒ $sen α = 4 · 0,5 ÷ 6 = {1|3}$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Ângulo obtuso', 'Em um triângulo, $a = 10$, $A = 100°$ e $B = 40°$. O lado $b$ vale, aproximadamente: (use $sen 40° ≈ 0,64$ e $sen 100° = sen 80° ≈ 0,98$)',
  ['$6,5$', '$7,3$', '$9,8$', '$15,3$'], 0, '$b = 10 · 0,64 ÷ 0,98 ≈ 6,5$. Lembre: $sen 100° = sen 80°$. <strong>Alternativa A.</strong>', '', 'decay'));
b.push(estiloEnem('Distância a um navio', 'Os pontos $A$ e $B$ da costa distam $200$ m. Daí se vê um navio $N$: o ângulo em $A$ mede $45°$ e o ângulo em $B$ mede $105°$, de modo que o ângulo em $N$ mede $30°$. A distância $AN$ é, aproximadamente: (use $sen 105° ≈ 0,97$)',
  ['$≈ 100$ m', '$≈ 141$ m', '$≈ 282$ m', '$≈ 388$ m', '$≈ 776$ m'], 3, '$AN ÷ sen 105° = AB ÷ sen 30°$ ⇒ $AN = 200 · 0,97 ÷ 0,5 = 388$ m. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as aplicações enganam', [
  ['Desenho sem escala mental', 'Se a resposta passar de uma ordem de grandeza razoável, revise o triângulo.'],
  ['Ângulo de inclinação errado', 'A inclinação é medida em relação à <strong>horizontal</strong>; confira se você usou o complemento certo.'],
  ['Usar lado e ângulo não opostos', 'Cada seno acompanha o lado <strong>em frente</strong> ao ângulo.'],
  ['Largura = lado do triângulo', 'A largura do rio é a <strong>altura</strong> até a margem, não o lado inclinado.']
]));
b.push(quiz([
  { q: 'Em um triângulo com ângulos $30°$, $45°$ e $105°$, o maior lado é oposto ao de:', o: ['$30°$', '$45°$', '$105°$', 'todos iguais'], a: 2 },
  { q: 'Um terreno de $10°$ e uma rampa de $25°$ com a horizontal formam um ângulo de:', o: ['$10°$', '$15°$', '$25°$', '$35°$'], a: 1 },
  { q: 'Para aplicar a lei dos senos precisamos ao menos de:', o: ['um lado e dois ângulos', 'dois ângulos', 'três ângulos', 'um ângulo'], a: 0 },
  { q: 'Para medir a largura do rio, depois de calcular $AC$ usamos:', o: ['$AC · sen A$', '$AC ÷ sen A$', '$AC + AB$', '$AB − AC$'], a: 0 }
]));
b.push(fechamento([
  ['Montar o triângulo', 'Use horizontais, verticais, retas paralelas e a soma $180°$.'],
  ['Calcular', 'Constante $k = lado ÷ sen (ângulo oposto)$ e depois lado $= k · sen (ângulo)$.'],
  ['Conferir', 'Ordem de grandeza, unidade e se o maior lado está oposto ao maior ângulo.']
], 'Com a lei dos senos, um lado e os ângulos descrevem o triângulo todo. Próximo assunto: a lei dos cossenos.'));

const pages = [];
const wid = String.raw`
  bind(['s1-a', 's1-A', 's1-B'], function(){ var r = resolveAAL(+$('s1-a').value, +$('s1-A').value, +$('s1-B').value);
    if(!r){ $('s1-s').innerHTML = ''; $('s1-r').textContent = '—'; $('s1-h').textContent = 'Use A + B < 180° e lado positivo.'; return; }
    triW($('s1-s'), r.a, r.b, r.c, {A: 'A = ' + pt(r.A) + '°', B: 'B = ' + pt(r.B) + '°', C: 'C = ' + pt(r.C) + '°'});
    $('s1-r').textContent = pt(r.b, 2) + ' · ' + pt(r.c, 2) + ' · ' + pt(r.C) + '° · ' + pt(r.R, 2);
    $('s1-h').textContent = 'a ÷ sen A = ' + pt(r.a / Math.sin(rad(r.A)), 2) + ' = 2R.'; });`;
pages.push({ out: BASE + 'aula-1-lei-dos-senos.html', html: K.deck({
  title: 'Lei dos senos — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 35 · Lei dos senos', slides: a,
  extra: WJS + BIND + T.TJS + SENW + wid
}) });
pages.push({ out: BASE + 'aula-2-lei-dos-senos-aplicacoes.html', html: K.deck({
  title: 'Lei dos senos: aplicações — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 36 · Aplicações da lei dos senos', slides: b,
  extra: WJS + BIND + T.TJS + SENW + String.raw`
  bind(['k1-al', 'k1-be', 'k1-r'], function(){ var al = +$('k1-al').value, be = +$('k1-be').value, r = +$('k1-r').value; $('k1-alv').textContent = al; $('k1-bev').textContent = be;
    if(!(r > 0 && be > al)){ $('k1-s').innerHTML = ''; $('k1-o').textContent = '—'; $('k1-h').textContent = 'A rampa precisa ser mais inclinada que o terreno (β > α).'; return; }
    var Ar = 90 + al, Av = be - al, Al = 90 - be, k = r / Math.sin(rad(Ar)), v = k * Math.sin(rad(Av)), l = k * Math.sin(rad(Al));
    triW($('k1-s'), r, l, v, {A: pt(Ar) + '°', B: pt(Al) + '°', C: pt(Av) + '°', a: 'rampa ' + pt(r, 2), b: 'longarina ' + pt(l, 2), c: 'viga ' + pt(v, 2)});
    $('k1-o').textContent = pt(l, 2) + ' m · ' + pt(v, 2) + ' m';
    $('k1-h').textContent = 'Ângulos: ' + pt(Ar) + '° (oposto à rampa), ' + pt(Av) + '° (oposto à viga) e ' + pt(Al) + '° (oposto à longarina).'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Lei dos senos', accent: 'growth', icon: 'triangle',
  aulas: [['Aula 35', 'Lei dos senos: lados, ângulos e raio circunscrito', 'aula-1-lei-dos-senos.html'], ['Aula 36', 'Lei dos senos: rampa, torres e rio', 'aula-2-lei-dos-senos-aplicacoes.html']],
  pendente: true
}, pages };
