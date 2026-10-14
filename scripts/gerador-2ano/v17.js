// Unidade v17 — Lei dos cossenos (aulas 37 e 38 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'lei-dos-cossenos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v17', BRAND = 'Lei dos cossenos';

// ===================== AULA 37: terceiro lado e ângulos =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 37', h1: 'Lei dos cossenos: <span style="color:var(--primary);">Pitágoras para qualquer triângulo</span>',
  sub: 'Uma impressora 3D Delta só sabe medir ângulos nos seus motores, mas precisa saber distâncias. A ponte entre os dois é a trigonometria: a lei dos senos e, agora, a lei dos cossenos.',
  badges: [['a² = b² + c² − 2bc cos A'], ['dois lados e o ângulo', 'growth'], ['três lados', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da fórmula ao ângulo e ao lado.', [
  ['Por que outra lei', 'quando a lei dos senos não basta', 'bulb'],
  ['A fórmula', 'a² = b² + c² − 2bc · cos A', 'target'],
  ['Achar um lado', 'dois lados e o ângulo entre eles', 'chart'],
  ['Achar um ângulo', 'os três lados conhecidos', 'link'],
  ['Caso particular', 'com 90° vira Pitágoras', 'scale']
]));
a.push(objetivosSlide([
  'Enunciar a <strong>lei dos cossenos</strong> e identificar o <strong>ângulo oposto</strong> ao lado isolado.',
  'Calcular o <strong>terceiro lado</strong> de um triângulo dados dois lados e o ângulo entre eles.',
  'Calcular um <strong>ângulo</strong> conhecendo os três lados, inclusive <strong>ângulos obtusos</strong> (cosseno negativo).',
  'Reconhecer o <strong>teorema de Pitágoras</strong> como caso particular.'
], 'Dica', 'Você <strong>não precisa decorar as três fórmulas</strong>: basta uma, desde que o <strong>ângulo seja oposto ao lado isolado</strong> do primeiro membro.', 'primary'));

a.push(sl('Para início de conversa', 'Quando a lei dos senos não resolve', `
          ${lede('Em um terreno triangular conhecemos <strong>dois lados</strong> e o <strong>ângulo entre eles</strong>: $12$ m, $8$ m e $60°$. Falta o terceiro lado. Há <strong>um único ângulo</strong> conhecido e nenhum par “lado — ângulo oposto” completo, então a lei dos senos não ajuda.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figTri({ a: 12, b: 8, c: 10.58, w: 290, h: 150, rotulos: ['A', 'B', 'C'], lados: { a: '12', b: '8', c: 'x' }, angulos: { C: '60°' } })}
            ${mini('Por que a lei dos senos não resolve este caso?', ['porque o triângulo é obtuso', 'falta um par lado — ângulo oposto conhecido', 'porque só vale em triângulos retângulos', 'ela resolve, sem problemas'], 1, 'A lei dos senos precisa de um <strong>par completo</strong> (lado e ângulo oposto). Aqui o ângulo conhecido fica entre os dois lados dados, e usamos a lei dos cossenos.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · a lei dos cossenos', 'Pitágoras com um termo de correção', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em <strong>qualquer</strong> triângulo $ABC$:</li>
              </ul>
              <p class="formula big" style="margin:6px 0;">$a^{2} = b^{2} + c^{2} − 2 · b · c · cos A$</p>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O lado do primeiro membro é <strong>oposto</strong> ao ângulo do cosseno. Do mesmo modo: $b^{2} = a^{2} + c^{2} − 2ac · cos B$ e $c^{2} = a^{2} + b^{2} − 2ab · cos C$.</li>
                <li>Se $A = 90°$, $cos A = 0$ e sobra <strong>Pitágoras</strong>: $a^{2} = b^{2} + c^{2}$.</li>
                <li>Se $A > 90°$, $cos A < 0$ e o lado $a$ fica <strong>maior</strong> que na soma pitagórica.</li>
              </ul>
            </div>
            ${W.box('Dois lados e o ângulo entre eles', W.row(W.nm('c1-b', 'Lado b (cm)', 12, 'any', 'min="0.1"'), W.nm('c1-c', 'Lado c (cm)', 8, 'any', 'min="0.1"'), W.rg('c1-A', 'Ângulo A', 5, 175, 1, 60, '°')) + W.svg('c1-s', '0 0 340 200', '340px') + W.txt('c1-r', 'Lado a · ângulos B e C: ') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Qual ângulo vai no cosseno?', `
          <div class="grid2">
            ${T.figTri({ a: 5.64, b: 4.6, c: 5.2, w: 300, h: 180, lados: { a: 'a', b: 'b', c: 'c' }, angulos: { A: 'A', B: 'B', C: 'C' } })}
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.65;">
                <li><strong>Isolou $a$?</strong> O cosseno é o de $A$, o ângulo em frente a $a$.</li>
                <li><strong>Isolou $b$?</strong> Use $cos B$. <strong>Isolou $c$?</strong> Use $cos C$.</li>
                <li>Os outros dois lados entram ao quadrado e no produto $2 · (lado)(lado)$.</li>
                <li>Para achar o <strong>ângulo</strong>: $cos A = {b^{2} + c^{2} − a^{2}|2bc}$.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O terceiro lado do terreno', 'Dois lados de um terreno triangular medem $12$ m e $8$ m e formam $60°$. Qual a medida do terceiro lado?', [
  ['Fórmula', '$x^{2} = 12^{2} + 8^{2} − 2 · 12 · 8 · cos 60°$.'],
  ['Conta', '$x^{2} = 144 + 64 − 192 · 0,5 = 208 − 96 = 112$.'],
  ['Raiz', '$x = √{112} = 4√{7} ≈ 10,6$ m.']
], 'O terceiro lado mede $4√{7} ≈ 10,6$ m.'));
a.push(exemplo('Exemplo resolvido', 'O lado procurado não é o oposto', 'Em um triângulo, um lado mede $5$, o lado oposto a $60°$ mede $7$ e o terceiro lado é $x$. Calcule $x$.', [
  ['Isole o 7', 'O ângulo de $60°$ é oposto ao lado $7$: $7^{2} = x^{2} + 5^{2} − 2 · x · 5 · cos 60°$.'],
  ['Equação', '$49 = x^{2} + 25 − 5x$ ⇒ $x^{2} − 5x − 24 = 0$.'],
  ['Raízes', '$x = 8$ ou $x = −3$; só serve $x = 8$.']
], '$x = 8$ (o triângulo $5$, $7$, $8$ tem um ângulo de $60°$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ângulo obtuso', 'Dois lados de $6$ cm e $10$ cm formam um ângulo de $120°$. Quanto mede o terceiro lado?', [
  ['Cosseno', '$cos 120° = −cos 60° = −0,5$.'],
  ['Fórmula', '$x^{2} = 36 + 100 − 2 · 6 · 10 · (−0,5) = 136 + 60 = 196$.'],
  ['Raiz', '$x = 14$ cm.']
], 'O terceiro lado mede $14$ cm: o cosseno negativo <strong>aumenta</strong> o lado.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Um ângulo a partir dos lados', 'Os lados de um triângulo medem $7$, $8$ e $13$. Qual o maior ângulo?', [
  ['Oposto ao maior lado', 'O maior ângulo é oposto a $13$: $cos θ = {7^{2} + 8^{2} − 13^{2}|2 · 7 · 8}$.'],
  ['Conta', '$cos θ = {49 + 64 − 169|112} = {−56|112} = −0,5$.'],
  ['Ângulo', '$θ = 120°$.']
], 'O maior ângulo mede $120°$.', 'decay'));
a.push(exemplo('Exemplo resolvido', 'Diagonais de um paralelogramo', 'Um paralelogramo tem lados $5$ e $3$ e um ângulo de $60°$. Calcule as duas diagonais.', [
  ['Diagonal menor', 'Oposta ao ângulo de $60°$: $d^{2} = 25 + 9 − 2 · 5 · 3 · 0,5 = 19$ ⇒ $d = √{19} ≈ 4,4$.'],
  ['Diagonal maior', 'O ângulo adjacente é $120°$ (suplementar): $D^{2} = 25 + 9 + 15 = 49$ ⇒ $D = 7$.']
], 'Diagonais: $√{19} ≈ 4,4$ e $7$.', 'growth'));

a.push(pratique('Terceiro lado', 'Em um triângulo, $a = 16$, $b = 10$ e o ângulo entre eles é $60°$. O lado $c$ mede:',
  ['$12$', '$13$', '$14$', '$15$'], 2, '$c^{2} = 256 + 100 − 2 · 16 · 10 · 0,5 = 196$ ⇒ $c = 14$. <strong>Alternativa C.</strong>'));
a.push(pratique('Cosseno do maior ângulo', 'Um triângulo tem lados $3$, $5$ e $7$. O cosseno do maior ângulo é:',
  ['$−{1|2}$', '$−{1|7}$', '${1|2}$', '${3|7}$'], 0, '$cos θ = {9 + 25 − 49|30} = {−15|30} = −{1|2}$ ($θ = 120°$). <strong>Alternativa A.</strong>', '', 'growth'));
a.push(pratique('Caso particular', 'Dois lados de $9$ e $12$ formam um ângulo reto. O terceiro lado mede:',
  ['$13$', '$15$', '$18$', '$21$'], 1, 'Com $90°$, $cos 90° = 0$: Pitágoras, $81 + 144 = 225$ e $x = 15$. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Cabos de uma antena', 'Dois cabos de aço, de $20$ m e $30$ m, prendem o topo de uma antena a dois pontos do chão. Visto de cima, o ângulo entre os cabos é de $60°$. A distância entre os pontos de fixação é, aproximadamente: (use $√{7} ≈ 2,65$)',
  ['$10$ m', '$26,5$ m', '$35$ m', '$44,5$ m', '$50$ m'], 1, '$d^{2} = 400 + 900 − 2 · 20 · 30 · 0,5 = 700$ ⇒ $d = 10√{7} ≈ 26,5$ m. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a lei dos cossenos engana', [
  ['Ângulo que não é o oposto', 'O ângulo do cosseno <strong>precisa ser o oposto</strong> ao lado isolado.'],
  ['Esquecer o sinal do cosseno', 'Em ângulos obtusos $cos x < 0$: o termo $−2bc · cos A$ passa a <strong>somar</strong>.'],
  ['Tirar a raiz antes da hora', 'Calcule $a^{2}$ completo e só depois extraia a raiz.'],
  ['Confundir os usos', 'Dois lados e o ângulo <strong>entre</strong> eles, ou três lados: lei dos cossenos. Par lado — ângulo oposto: lei dos senos.']
]));
a.push(quiz([
  { q: 'Em $a^{2} = b^{2} + c^{2} − 2bc · cos A$, o ângulo $A$ é oposto ao lado:', o: ['$a$', '$b$', '$c$', 'nenhum deles'], a: 0 },
  { q: 'Quando o ângulo $A$ mede $90°$, a lei dos cossenos se reduz a:', o: ['$a = b + c$', '$a^{2} = b^{2} + c^{2}$', '$a^{2} = b^{2} − c^{2}$', '$a = 2bc$'], a: 1 },
  { q: 'Se $A = 120°$, $cos A$ vale:', o: ['$−0,5$', '$0,5$', '$−0,87$', '$0,87$'], a: 0 },
  { q: 'Para achar um ângulo conhecendo os três lados usamos:', o: ['só a lei dos senos', 'a lei dos cossenos', 'só Pitágoras', 'é impossível'], a: 1 }
]));
a.push(fechamento([
  ['A lei', '$a^{2} = b^{2} + c^{2} − 2bc · cos A$, com $A$ oposto a $a$.'],
  ['Usos', 'Dois lados e o ângulo entre eles (acha o terceiro lado) ou três lados (acha o ângulo).'],
  ['Caso particular', 'Com $90°$, vira o teorema de Pitágoras.']
], 'Com os senos e os cossenos, qualquer triângulo pode ser resolvido. Próxima aula: problemas de lagos, navios e terrenos.'));

// ===================== AULA 38: aplicações =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 38', h1: 'Lei dos cossenos na prática: <span style="color:var(--primary);">lagos, navios e terrenos</span>',
  sub: 'Há mais de 2 200 anos, Eratóstenes mediu o raio da Terra e Hiparco, a distância até a Lua, com triângulos. Hoje usamos as mesmas ideias para medir lagos, rotas e terrenos que não dá para atravessar.',
  badges: [['LAL ou LLL'], ['topografia', 'growth'], ['navegação', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Qual lei usar, e como conferir.', [
  ['Identificar os dados', 'o que se tem e o que se pede', 'bulb'],
  ['Escolher a lei', 'senos ou cossenos', 'target'],
  ['Calcular', 'lado ou ângulo', 'chart'],
  ['Resolver o triângulo', 'combinando as duas leis', 'link'],
  ['Aplicações', 'lago, rota de navios, terreno', 'scale']
]));
b.push(objetivosSlide([
  'Escolher entre a <strong>lei dos senos</strong> e a <strong>lei dos cossenos</strong> conforme os dados.',
  'Resolver problemas de <strong>topografia e navegação</strong> com a lei dos cossenos.',
  '<strong>Resolver um triângulo completo</strong> combinando as duas leis.'
], 'Dica', 'Procure o <strong>par lado — ângulo oposto</strong>: se existe, lei dos senos; se o ângulo dado fica <strong>entre</strong> os dois lados (ou os três lados são dados), lei dos cossenos.', 'primary'));

b.push(sl('Para início de conversa', 'Dois navios saem do mesmo porto', `
          ${lede('Dois navios deixam o mesmo porto em rotas que formam $50°$. O primeiro navega a $20$ km/h e o segundo a $30$ km/h. Depois de $2$ horas, qual a distância entre eles? Os caminhos percorridos são <strong>dois lados</strong> e o ângulo entre eles é conhecido.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figTri({ a: 46.1, b: 40, c: 60, w: 300, h: 150, rotulos: ['P', 'N1', 'N2'], lados: { a: 'd', b: '', c: '' }, angulos: { A: '50°' } })}
            ${mini('Os lados do triângulo, depois de 2 h, valem:', ['20 e 30', '40 e 60', '10 e 15', '50 e 50'], 1, 'Distância = velocidade × tempo: $20 · 2 = 40$ km e $30 · 2 = 60$ km.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · qual lei usar?', 'Dados do triângulo e a lei adequada', `
          <div class="grid2">
            <div>
              ${tbl(['Dados', 'Pede-se', 'Lei'], [['2 lados e o ângulo entre eles', 'o terceiro lado', 'cossenos'], ['3 lados', 'um ângulo', 'cossenos'], ['1 lado e 2 ângulos', 'os outros lados', 'senos'], ['2 lados e ângulo oposto a um', 'outro ângulo', 'senos (2 soluções?)']])}
              <p class="hint" style="margin-top:8px;">Para <strong>resolver o triângulo todo</strong>, comece pela lei dos cossenos (acha um lado) e continue com a dos senos (acha os ângulos).</p>
            </div>
            ${W.box('Distância entre dois navios', W.row(W.nm('n1-v1', 'Navio 1 (km/h)', 20, 'any', 'min="1"'), W.nm('n1-v2', 'Navio 2 (km/h)', 30, 'any', 'min="1"'), W.nm('n1-t', 'Tempo (h)', 2, 'any', 'min="0.1"'), W.rg('n1-g', 'Ângulo entre rotas', 10, 170, 1, 50, '°')) + W.svg('n1-s', '0 0 340 200', '340px') + W.txt('n1-r', 'Distância: ') + W.hint('n1-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Medir um lago', 'Para medir um lago, um técnico mede, a partir de um ponto $T$ na margem, $TA = 40$ m e $TB = 25$ m até dois pontos opostos do lago, e o ângulo $∠ATB = 120°$. Qual a distância $AB$?', [
  ['Fórmula', '$AB^{2} = 40^{2} + 25^{2} − 2 · 40 · 25 · cos 120°$.'],
  ['Conta', '$AB^{2} = 1600 + 625 − 2000 · (−0,5) = 2225 + 1000 = 3225$.'],
  ['Raiz', '$AB = √{3225} ≈ 56,8$ m.']
], 'O lago tem cerca de $56,8$ m de uma margem à outra.'));
b.push(exemplo('Exemplo resolvido', 'A distância entre os navios', 'Com os dados do início ($40$ km, $60$ km e $50°$), calcule a distância entre os navios. (use $cos 50° ≈ 0,64$)', [
  ['Fórmula', '$d^{2} = 40^{2} + 60^{2} − 2 · 40 · 60 · cos 50°$.'],
  ['Conta', '$d^{2} = 1600 + 3600 − 4800 · 0,64 = 5200 − 3072 = 2128$.'],
  ['Raiz', '$d = √{2128} ≈ 46,1$ km.']
], 'Os navios estão a cerca de $46$ km um do outro.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Resolvendo o triângulo completo', 'Em um triângulo, dois lados medem $5$ e $8$ e formam $60°$. Calcule o terceiro lado e o ângulo oposto ao lado $5$. (use $sen 60° ≈ 0,87$)', [
  ['Lei dos cossenos', '$x^{2} = 25 + 64 − 2 · 5 · 8 · 0,5 = 49$ ⇒ $x = 7$.'],
  ['Lei dos senos', 'O ângulo $A$ oposto a $5$: ${5|sen A} = {7|sen 60°}$ ⇒ $sen A = 5 · 0,87 ÷ 7 ≈ 0,62$.'.replace('${', '$ {')],
  ['Ângulo', '$A ≈ 38,2°$ (o outro ângulo, $180° − 60° − 38,2° = 81,8°$).']
], 'Terceiro lado $7$; ângulos de $60°$, $≈ 38,2°$ e $≈ 81,8°$.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'O ângulo de um terreno', 'Um terreno triangular tem lados de $20$ m, $30$ m e $40$ m. Qual o maior ângulo do terreno? (com a calculadora, $cos^{−1}(−0,25) ≈ 104,5°$)', [
  ['Maior ângulo', 'É oposto ao maior lado ($40$): $cos θ = {20^{2} + 30^{2} − 40^{2}|2 · 20 · 30}$.'],
  ['Conta', '$cos θ = {400 + 900 − 1600|1200} = {−300|1200} = −0,25$.'],
  ['Ângulo', '$θ ≈ 104,5°$ (obtuso, como o cosseno negativo indicava).']
], 'O maior ângulo do terreno mede cerca de $104,5°$.', 'growth'));

b.push(pratique('Lago', 'De um ponto $T$, $TA = 30$ m e $TB = 20$ m, com $∠ATB = 60°$. A distância $AB$ é, aproximadamente:',
  ['$10$ m', '$22,4$ m', '$26,5$ m', '$50$ m'], 2, '$AB^{2} = 900 + 400 − 2 · 30 · 20 · 0,5 = 700$ ⇒ $AB = 10√{7} ≈ 26,5$ m. <strong>Alternativa C.</strong>'));
b.push(pratique('Navios em rotas perpendiculares', 'Dois barcos partem do mesmo ponto em rotas perpendiculares e percorrem $30$ km e $40$ km. A distância entre eles é:',
  ['$35$ km', '$50$ km', '$60$ km', '$70$ km'], 1, 'Com $90°$ a lei dos cossenos vira Pitágoras: $30^{2} + 40^{2} = 2500$ ⇒ $50$ km. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Ângulo do triângulo 5, 7, 8', 'Em um triângulo de lados $5$, $7$ e $8$, o ângulo oposto ao lado $7$ mede:',
  ['$30°$', '$45°$', '$60°$', '$90°$'], 2, '$cos θ = {25 + 64 − 49|80} = {40|80} = 0,5$ ⇒ $θ = 60°$. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(estiloEnem('Campo triangular', 'Um campo triangular tem dois lados de $60$ m e $80$ m que formam um ângulo de $120°$. Para cercá-lo, o terceiro lado, em metros, é de aproximadamente: (use $√{37} ≈ 6,08$)',
  ['$≈ 72$', '$≈ 100$', '$≈ 104$', '$≈ 122$', '$≈ 140$'], 3, '$x^{2} = 3600 + 6400 + 4800 = 14800$ ⇒ $x = 20√{37} ≈ 121,6$ m. <strong>Alternativa D.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as aplicações enganam', [
  ['Usar a lei errada', 'Dois lados e o ângulo <strong>entre</strong> eles: cossenos. Se houver par lado — ângulo oposto: senos.'],
  ['Cosseno obtuso', 'Para $120°$, $cos = −0,5$: o termo $−2bc · cos A$ <strong>soma</strong> $bc$.'],
  ['Esquecer o tempo', 'Em problemas de rota, primeiro transforme velocidade e tempo em <strong>distância</strong>.'],
  ['Ângulo errado entre as rotas', 'Desenhe o triângulo: o ângulo é o que está entre os <strong>dois caminhos</strong> que saem do mesmo ponto.']
]));
b.push(quiz([
  { q: 'Dois lados de $30$ e $40$ com ângulo reto entre eles: o terceiro lado é:', o: ['$35$', '$50$', '$70$', '$√{700}$'], a: 1 },
  { q: 'Dados três lados, a lei usada para achar um ângulo é:', o: ['senos', 'cossenos', 'nenhuma', 'só Pitágoras'], a: 1 },
  { q: 'O maior ângulo de um triângulo é oposto:', o: ['ao menor lado', 'ao maior lado', 'a qualquer lado', 'ao lado médio'], a: 1 },
  { q: 'Navio a $20$ km/h durante $3$ h percorre:', o: ['$23$ km', '$60$ km', '$6,7$ km', '$17$ km'], a: 1 }
]));
b.push(fechamento([
  ['Escolha da lei', 'Par lado — ângulo oposto: senos. Dois lados e ângulo entre eles, ou três lados: cossenos.'],
  ['Triângulo completo', 'Cossenos para um lado e senos para os ângulos restantes.'],
  ['Conferência', 'O maior lado fica oposto ao maior ângulo; o cosseno de um obtuso é negativo.']
], 'Com as duas leis, qualquer triângulo pode ser calculado. Próximo assunto: a circunferência trigonométrica e seus arcos.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-lei-dos-cossenos.html', html: K.deck({
  title: 'Lei dos cossenos — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 37 · Lei dos cossenos', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['c1-b', 'c1-c', 'c1-A'], function(){ var bb = +$('c1-b').value, cc = +$('c1-c').value, A = +$('c1-A').value; $('c1-Av').textContent = A;
    if(!(bb > 0 && cc > 0)){ $('c1-s').innerHTML = ''; $('c1-r').textContent = '—'; return; }
    var a2 = bb * bb + cc * cc - 2 * bb * cc * Math.cos(rad(A)), aa = Math.sqrt(a2);
    var cosB = (aa * aa + cc * cc - bb * bb) / (2 * aa * cc), cosC = (aa * aa + bb * bb - cc * cc) / (2 * aa * bb), B = grau(Math.acos(Math.max(-1, Math.min(1, cosB)))), C = 180 - A - B;
    triW($('c1-s'), aa, bb, cc, {A: 'A = ' + pt(A) + '°', B: 'B ≈ ' + pt(B, 1) + '°', C: 'C ≈ ' + pt(C, 1) + '°', a: 'a = ' + pt(aa, 2), b: 'b = ' + pt(bb, 2), c: 'c = ' + pt(cc, 2)});
    $('c1-r').textContent = pt(aa, 2) + ' · ' + pt(B, 1) + '° e ' + pt(C, 1) + '°';
    $('c1-h').textContent = 'a² = ' + pt(bb, 1) + '² + ' + pt(cc, 1) + '² − 2 · ' + pt(bb, 1) + ' · ' + pt(cc, 1) + ' · cos ' + A + '° = ' + pt(a2, 2) + (A > 90 ? '  (cosseno negativo: o lado aumenta).' : A === 90 ? '  (Pitágoras).' : '.'); });`
}) });
pages.push({ out: BASE + 'aula-2-lei-dos-cossenos-aplicacoes.html', html: K.deck({
  title: 'Lei dos cossenos: aplicações — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 38 · Aplicações da lei dos cossenos', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['n1-v1', 'n1-v2', 'n1-t', 'n1-g'], function(){ var v1 = +$('n1-v1').value, v2 = +$('n1-v2').value, t = +$('n1-t').value, g = +$('n1-g').value; $('n1-gv').textContent = g;
    if(!(v1 > 0 && v2 > 0 && t > 0)){ $('n1-s').innerHTML = ''; $('n1-r').textContent = '—'; return; }
    var d1 = v1 * t, d2 = v2 * t, d = Math.sqrt(d1 * d1 + d2 * d2 - 2 * d1 * d2 * Math.cos(rad(g)));
    triW($('n1-s'), d, d2, d1, {A: 'porto ' + g + '°', B: 'N1', C: 'N2', a: 'd = ' + pt(d, 1) + ' km', b: pt(d2, 1) + ' km', c: pt(d1, 1) + ' km'});
    $('n1-r').textContent = pt(d, 2) + ' km';
    $('n1-h').textContent = 'd² = ' + pt(d1, 1) + '² + ' + pt(d2, 1) + '² − 2 · ' + pt(d1, 1) + ' · ' + pt(d2, 1) + ' · cos ' + g + '°.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Lei dos cossenos', accent: 'decay', icon: 'triangle',
  aulas: [['Aula 37', 'Lei dos cossenos: terceiro lado e ângulos', 'aula-1-lei-dos-cossenos.html'], ['Aula 38', 'Lei dos cossenos: lago, navios e terreno', 'aula-2-lei-dos-cossenos-aplicacoes.html']],
  pendente: true
}, pages };
