// Unidade v15 — Trigonometria: introdução (aulas 33 e 34 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'trigonometria-introducao', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v15', BRAND = 'Trigonometria: introdução';
const pages = [];

// ===================== AULA 33: ângulos do triângulo e Pitágoras =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 33', h1: 'Trigonometria: <span style="color:var(--primary);">medir sem alcançar</span>',
  sub: 'Antes do GPS, navegadores descobriam onde estavam medindo ângulos. Esta aula revisa as duas ferramentas do triângulo que sustentam toda a trigonometria: a soma dos ângulos e o teorema de Pitágoras.',
  badges: [['180°'], ['a² + b² = c²', 'growth'], ['triângulo retângulo', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da soma dos ângulos à escada encostada na parede.', [
  ['Soma dos ângulos', 'sempre 180° em um triângulo', 'bulb'],
  ['Ângulo externo', 'soma dos dois internos opostos', 'target'],
  ['Triângulo retângulo', 'catetos e hipotenusa', 'chart'],
  ['Pitágoras', 'a² + b² = c²', 'link'],
  ['Problemas', 'escadas, rampas e diagonais', 'scale']
]));
a.push(objetivosSlide([
  'Calcular o <strong>terceiro ângulo</strong> de um triângulo e usar o <strong>ângulo externo</strong>.',
  'Reconhecer <strong>catetos</strong> e <strong>hipotenusa</strong> em um triângulo retângulo.',
  'Aplicar o <strong>teorema de Pitágoras</strong> em problemas com escadas, rampas e diagonais.'
], 'Dica', 'Antes de calcular, <strong>faça um esboço</strong> e marque o que é dado e o que se pede: metade dos erros em problemas de triângulo vem de um desenho que não existe.', 'primary'));

a.push(sl('Para início de conversa', 'Como achar a posição sem GPS?', `
          ${lede('Navegadores usavam o <strong>sextante</strong>, que mede <strong>ângulos</strong> entre o horizonte e um astro. Com ângulos e uma medida conhecida, o triângulo formado revela as outras distâncias. Antes de chegar lá, precisamos dominar o triângulo.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figTri({ a: 5.64, b: 4.6, c: 5.2, w: 280, h: 170, angulos: { A: '70°', B: '50°', C: '60°' } })}
            ${mini('Em um triângulo, dois ângulos medem 50° e 60°. O terceiro mede:', ['50°', '60°', '70°', '80°'], 2, 'Os três somam 180°: $180° − 50° − 60° = 70°$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · soma dos ângulos', 'A soma dos ângulos internos é 180°', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Recorte os três cantos de qualquer triângulo e encoste-os: formam um <strong>ângulo raso (180°)</strong>.</li>
                <li>Outra prova: cada ângulo <strong>externo</strong> é suplementar do interno vizinho; os três externos completam uma volta de <strong>360°</strong>. Logo, os internos somam $3 · 180° − 360° = 180°$.</li>
                <li>O <strong>ângulo externo</strong> vale a <strong>soma dos dois internos não adjacentes</strong>.</li>
                <li>Por isso, um triângulo tem no máximo um ângulo reto ou obtuso.</li>
              </ul>
            </div>
            ${W.box('Terceiro ângulo', W.row(W.nm('t1-a', 'Ângulo A (°)', 50, 1, 'min="1" max="178"'), W.nm('t1-b', 'Ângulo B (°)', 60, 1, 'min="1" max="178"')) + W.svg('t1-s', '0 0 340 200', '340px') + W.txt('t1-c', 'Ângulo C: ') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Ângulos desconhecidos', 'Os ângulos de um triângulo medem $x$, $2x$ e $3x$. Quanto mede o maior?', [
  ['Equação', '$x + 2x + 3x = 180°$ ⇒ $6x = 180°$.'],
  ['Valor de x', '$x = 30°$.'],
  ['Maior ângulo', '$3x = 90°$: o triângulo é retângulo.']
], 'O maior ângulo mede $90°$.'));
a.push(exemplo('Exemplo resolvido', 'Ângulo externo', 'Em um triângulo, dois ângulos internos medem $35°$ e $75°$. Quanto mede o ângulo externo ao terceiro vértice?', [
  ['Terceiro interno', '$180° − 35° − 75° = 70°$.'],
  ['Externo', 'É suplementar de $70°$: $180° − 70° = 110°$.'],
  ['Conferência', 'Também é a soma dos outros dois: $35° + 75° = 110°$ ✓.']
], 'O ângulo externo mede $110°$.', 'growth'));

a.push(sl('Teoria · Pitágoras', 'Triângulo retângulo e o teorema de Pitágoras', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>No triângulo retângulo, os lados do ângulo reto são os <strong>catetos</strong> e o lado oposto a ele é a <strong>hipotenusa</strong> (o maior).</li>
                <li><strong>Teorema de Pitágoras:</strong> o quadrado da hipotenusa é a soma dos quadrados dos catetos: $a^{2} + b^{2} = c^{2}$.</li>
                <li>Também vale ao contrário: se $a^{2} + b^{2} = c^{2}$, o triângulo é retângulo (ex.: $3, 4, 5$).</li>
                <li>Para achar um cateto: $b^{2} = c^{2} − a^{2}$.</li>
              </ul>
            </div>
            ${W.box('Hipotenusa a partir dos catetos', W.row(W.nm('p1-a', 'Cateto (m)', 4, 'any', 'min="0.1"'), W.nm('p1-b', 'Cateto (m)', 6, 'any', 'min="0.1"')) + W.svg('p1-s', '0 0 340 200', '340px') + W.txt('p1-c', 'Hipotenusa: ') + W.hint('p1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A escada e o poste', 'Uma escada deve alcançar 6 m de altura em um poste e sua base ficará a 4 m dele. Qual o comprimento da escada?', [
  ['Esboço', 'Poste vertical (6 m), chão (4 m) e a escada como hipotenusa $x$.'],
  ['Pitágoras', '$x^{2} = 4^{2} + 6^{2} = 16 + 36 = 52$.'],
  ['Raiz', '$x = √{52} = 2√{13} ≈ 7,2$ m.']
], 'A escada mede aproximadamente $7,2$ m.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Achar um cateto', 'Uma rampa de 13 m de comprimento sobe até uma plataforma a 5 m de altura. Qual a distância horizontal percorrida?', [
  ['Hipotenusa', 'A rampa é a hipotenusa: $13$ m. Um cateto é a altura: $5$ m.'],
  ['Pitágoras', '$d^{2} = 13^{2} − 5^{2} = 169 − 25 = 144$.'],
  ['Raiz', '$d = 12$ m.']
], 'A distância horizontal é de $12$ m (terno pitagórico $5, 12, 13$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Diagonal do retângulo', 'Uma tela retangular mede 40 cm por 30 cm. Quanto mede a diagonal?', [
  ['Triângulo', 'A diagonal divide o retângulo em dois triângulos retângulos de catetos $40$ e $30$.'],
  ['Pitágoras', '$d^{2} = 1600 + 900 = 2500$.'],
  ['Raiz', '$d = 50$ cm.']
], 'A diagonal mede $50$ cm (múltiplo do terno $3, 4, 5$).', 'growth'));

a.push(pratique('Ângulos', 'Os ângulos de um triângulo medem $100°$, $x$ e $36°$. O valor de $x$ é:',
  ['34°', '40°', '44°', '54°', '64°'], 2, '$180° − 100° − 36° = 44°$. <strong>Alternativa C.</strong>'));
a.push(pratique('Suporte de painel solar', 'Um suporte tem base de $0,8$ m e altura de $1,5$ m. O comprimento da aba inclinada (hipotenusa) é:',
  ['$1,7$ m', '$1,9$ m', '$2,3$ m', '$3,1$ m'], 0, '$0,8^{2} + 1,5^{2} = 0,64 + 2,25 = 2,89$ e $√{2,89} = 1,7$. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(pratique('Sombra do farol', 'Do topo de um farol de $7$ m parte um feixe de luz de $25$ m até o fim da sombra no mar. O comprimento da sombra é:',
  ['18 m', '24 m', '32 m', '67,4 m'], 1, '$s^{2} = 25^{2} − 7^{2} = 625 − 49 = 576$ ⇒ $s = 24$ m. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Rampa de acessibilidade', 'Uma rampa liga o chão a uma entrada situada $1,2$ m acima, e sua projeção horizontal no chão mede $1,6$ m. O comprimento da rampa é:',
  ['1,4 m', '2,0 m', '2,2 m', '2,8 m', '4,0 m'], 1, '$1,2^{2} + 1,6^{2} = 1,44 + 2,56 = 4$ ⇒ $2$ m. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o triângulo engana', [
  ['Hipotenusa no lugar errado', 'A hipotenusa é <strong>sempre</strong> o lado oposto ao ângulo reto e o maior: $c^{2} = a^{2} + b^{2}$, nunca o contrário.'],
  ['Somar em vez de elevar ao quadrado', '$3 + 4 ≠ 5$ e $√{9 + 16} = 5$: eleve primeiro, some, depois extraia a raiz.'],
  ['Ângulo externo igual ao interno', 'O externo é <strong>suplementar</strong> do interno vizinho (soma 180°).'],
  ['Aplicar Pitágoras fora do retângulo', 'O teorema só vale com <strong>ângulo reto</strong>; em outros triângulos ele não funciona.']
]));
a.push(quiz([
  { q: 'Dois ângulos de um triângulo medem 90° e 25°. O terceiro mede:', o: ['55°', '65°', '75°', '90°'], a: 1 },
  { q: 'Em um triângulo retângulo de catetos 6 e 8, a hipotenusa mede:', o: ['10', '12', '14', '$√{14}$'], a: 0 },
  { q: 'A soma dos três ângulos externos de um triângulo é:', o: ['180°', '270°', '360°', '540°'], a: 2 },
  { q: 'Em um triângulo retângulo com hipotenusa 17 e um cateto 8, o outro cateto mede:', o: ['9', '12', '15', '$√{353}$'], a: 2 }
]));
a.push(fechamento([
  ['Soma dos ângulos', 'Os internos de um triângulo somam $180°$; o externo é a soma dos dois internos opostos.'],
  ['Pitágoras', '$a^{2} + b^{2} = c^{2}$ com $c$ a hipotenusa.'],
  ['Método', 'Esboço, dados no desenho, equação, conferência.']
], 'Com os ângulos e Pitágoras você já mede o que não alcança. Próxima aula: o seno, o cosseno e a tangente.'));

pages.push({ out: BASE + 'aula-1-angulos-do-triangulo-e-pitagoras.html', html: K.deck({
  title: 'Trigonometria: ângulos do triângulo e Pitágoras — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 33 · Ângulos do triângulo e Pitágoras', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['t1-a', 't1-b'], function(){ var A = +$('t1-a').value, B = +$('t1-b').value, C = 180 - A - B;
    if(!(A > 0 && B > 0 && C > 0)){ $('t1-s').innerHTML = ''; $('t1-c').textContent = '—'; $('t1-h').textContent = 'A soma de A e B precisa ser menor que 180°.'; return; }
    var s = [Math.sin(rad(A)), Math.sin(rad(B)), Math.sin(rad(C))]; triW($('t1-s'), s[0], s[1], s[2], {A: 'A = ' + pt(A) + '°', B: 'B = ' + pt(B) + '°', C: 'C = ' + pt(C) + '°', a: '', b: '', c: ''});
    $('t1-c').textContent = pt(C) + '°'; var mx = Math.max(A, B, C);
    $('t1-h').textContent = 'C = 180° − A − B. Triângulo ' + (mx > 90 ? 'obtusângulo' : mx === 90 ? 'retângulo' : 'acutângulo') + '.'; });
  bind(['p1-a', 'p1-b'], function(){ var a = +$('p1-a').value, b = +$('p1-b').value;
    if(!(a > 0 && b > 0)){ $('p1-s').innerHTML = ''; $('p1-c').textContent = '—'; return; }
    var c = Math.sqrt(a * a + b * b); triW($('p1-s'), b, c, a, {A: '', B: '', C: '', a: pt(b, 2) + ' m', b: pt(c, 2) + ' m', c: pt(a, 2) + ' m'});
    $('p1-c').textContent = pt(c, 2) + ' m'; $('p1-h').textContent = pt(a, 2) + '² + ' + pt(b, 2) + '² = ' + pt(a * a + b * b, 2) + ' = ' + pt(c, 2) + '².'; });`
}) });

// ===================== AULA 34: razões trigonométricas e ângulos notáveis =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 34', h1: 'Seno, cosseno e tangente: <span style="color:var(--primary);">razões que não mudam</span>',
  sub: 'Em triângulos semelhantes, a razão entre dois lados é sempre a mesma. É essa constância que permite calcular distâncias inacessíveis apenas com um ângulo e uma medida.',
  badges: [['sen · cos · tg'], ['30° · 45° · 60°', 'growth'], ['ângulos obtusos', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do ângulo medido à distância calculada.', [
  ['Os lados', 'oposto, adjacente e hipotenusa', 'bulb'],
  ['As razões', 'seno, cosseno e tangente', 'target'],
  ['Ângulos notáveis', '30°, 45° e 60°', 'chart'],
  ['Problemas', 'achar lados e alturas', 'link'],
  ['Obtusos', 'seno e cosseno de 90° a 180°', 'scale']
]));
b.push(objetivosSlide([
  'Identificar <strong>cateto oposto</strong>, <strong>cateto adjacente</strong> e <strong>hipotenusa</strong> em relação a um ângulo.',
  'Definir e calcular <strong>seno, cosseno e tangente</strong> de um ângulo agudo.',
  'Usar os valores dos <strong>ângulos notáveis</strong> ($30°$, $45°$, $60°$) para achar lados.',
  'Relacionar o seno e o cosseno de ângulos <strong>suplementares</strong> (obtusos).'
], 'Dica', 'Decore o mnemônico <strong>SOH-CAH-TOA</strong> em português: <strong>S</strong>eno = <strong>O</strong>posto÷<strong>H</strong>ipotenusa, <strong>C</strong>osseno = <strong>A</strong>djacente÷<strong>H</strong>ipotenusa, <strong>T</strong>angente = <strong>O</strong>posto÷<strong>A</strong>djacente.', 'primary'));

b.push(sl('Para início de conversa', 'Medir um morro sem subir nele', `
          ${lede('Um <strong>teodolito</strong> só mede ângulos, mas topógrafos desenham mapas inteiros com ele. O segredo: no triângulo retângulo, conhecer <strong>um ângulo e um lado</strong> basta para descobrir todos os outros. A ferramenta é a <strong>trigonometria</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figRet({ co: 3, ca: 4, w: 290, h: 175 })}
            ${mini('Qual cateto fica “de frente” (oposto) ao ângulo θ?', ['o horizontal, junto ao ângulo', 'o vertical, do outro lado', 'a hipotenusa', 'nenhum deles'], 1, 'O <strong>oposto</strong> é o cateto que não toca o ângulo θ; o <strong>adjacente</strong> é o que toca, e a hipotenusa fica de frente para o ângulo reto.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · as três razões', 'Seno, cosseno e tangente', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$sen θ = {"cateto oposto"|"hipotenusa"}$</li>
                <li>$cos θ = {"cateto adjacente"|"hipotenusa"}$</li>
                <li>$tg θ = {"cateto oposto"|"cateto adjacente"} = {sen θ|cos θ}$</li>
                <li>Os catetos dependem do ângulo escolhido: o oposto a $θ$ é o adjacente ao outro ângulo agudo.</li>
                <li>Por semelhança, as razões <strong>não dependem do tamanho</strong> do triângulo, só do ângulo.</li>
              </ul>
            </div>
            ${W.box('Triângulo retângulo com ângulo θ', W.row(W.rg('r1-t', 'Ângulo θ', 5, 85, 1, 35, '°'), W.nm('r1-h', 'Hipotenusa (cm)', 10, 'any', 'min="1"')) + W.svg('r1-s', '0 0 340 200', '340px') + W.txt('r1-v', 'sen · cos · tg: ') + W.hint('r1-d'))}
          </div>`, { cls: '' }));

b.push(sl('Resumo visual', 'Ângulos notáveis', `
          <div class="grid2">
            <div>
              ${tbl(['', '30°', '45°', '60°'], [['sen', '$ {1|2}$', '$ {√{2}|2}$', '$ {√{3}|2}$'], ['cos', '$ {√{3}|2}$', '$ {√{2}|2}$', '$ {1|2}$'], ['tg', '$ {√{3}|3}$', '1', '$√{3}$']])}
              <p class="hint" style="margin-top:8px;">Valores aproximados: $√{2} ≈ 1,41$ e $√{3} ≈ 1,73$.</p>
            </div>
            <div>
              <ul class="plain" style="font-size:.92rem;line-height:1.65;">
                <li><strong>45°:</strong> vem da diagonal de um quadrado de lado 1 (catetos iguais, hipotenusa $√{2}$).</li>
                <li><strong>30° e 60°:</strong> vêm da altura de um triângulo equilátero de lado 1 (metade da base $1 ÷ 2$, altura $√{3} ÷ 2$).</li>
                <li>O seno de um ângulo é o cosseno do <strong>complementar</strong>: $sen 30° = cos 60°$.</li>
              </ul>
            </div>
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Altura de uma árvore', 'A $20$ m do pé de uma árvore, o ângulo de elevação do topo é $60°$. Qual a altura da árvore? (use $√{3} ≈ 1,73$)', [
  ['Esboço', 'Cateto adjacente $20$ m (distância), cateto oposto $h$ (altura), ângulo $60°$.'],
  ['Razão certa', 'Oposto e adjacente: a <strong>tangente</strong>. $tg 60° = {h|20}$.'],
  ['Cálculo', '$h = 20 · √{3} ≈ 20 · 1,73 = 34,6$ m.']
], 'A árvore tem cerca de $34,6$ m.'));
b.push(exemplo('Exemplo resolvido', 'Comprimento de uma rampa', 'Uma rampa forma $30°$ com o chão e sobe $3$ m. Qual o comprimento da rampa?', [
  ['Esboço', 'Altura é o cateto oposto ($3$ m); a rampa é a hipotenusa $x$.'],
  ['Razão certa', 'Oposto e hipotenusa: o <strong>seno</strong>. $sen 30° = {3|x}$.'],
  ['Cálculo', '${1|2} = {3|x}$ ⇒ $x = 6$ m.'.replace('${', '$ {')]
], 'A rampa mede $6$ m.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Triângulo retângulo isósceles', 'A diagonal de um quadrado de lado $8$ cm forma com um lado um ângulo de $45°$. Calcule a diagonal.', [
  ['Razão certa', 'Lado (adjacente) e diagonal (hipotenusa): o <strong>cosseno</strong>. $cos 45° = {8|d}$.'],
  ['Cálculo', '${√{2}|2} = {8|d}$ ⇒ $d = {16|√{2}} = 8√{2} ≈ 11,3$ cm.'.replace('${', '$ {')]
], 'A diagonal mede $8√{2} ≈ 11,3$ cm.', 'growth'));

b.push(sl('Teoria · ângulos obtusos', 'Seno e cosseno de ângulos suplementares', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Para ângulos de $90°$ a $180°$ usamos o <strong>suplemento</strong> ($180° − x$).</li>
                <li><strong>Seno:</strong> $sen x = sen (180° − x)$. Ex.: $sen 120° = sen 60° = {√{3}|2}$.</li>
                <li><strong>Cosseno:</strong> $cos x = −cos (180° − x)$. Ex.: $cos 120° = −cos 60° = −{1|2}$.</li>
                <li>No intervalo $90° < x < 180°$, o cosseno é <strong>negativo</strong> e o seno é positivo.</li>
              </ul>
            </div>
            ${W.box('Suplementares', W.row(W.rg('o1-x', 'Ângulo x', 0, 180, 1, 120, '°')) + W.txt('o1-a', 'x e 180° − x: ') + W.txt('o1-s', 'sen x · sen (180° − x): ') + W.txt('o1-c', 'cos x · cos (180° − x): ') + W.hint('o1-h'))}
          </div>`, { cls: '' }));

b.push(pratique('Altura do poste', 'Um fio esticado do topo de um poste ao chão forma $30°$ com o solo e mede $12$ m. A altura do poste é:',
  ['4 m', '6 m', '$6√{3}$ m', '12 m'], 1, 'Altura é o oposto e o fio, a hipotenusa: $sen 30° = h ÷ 12$ ⇒ $h = 12 · {1|2} = 6$ m. <strong>Alternativa B.</strong>'));
b.push(pratique('Sombra', 'Quando o ângulo de elevação do Sol é $45°$, uma estaca de $2$ m projeta uma sombra de:',
  ['1 m', '$√{2}$ m', '2 m', '4 m'], 2, '$tg 45° = 1 = 2 ÷ s$ ⇒ $s = 2$ m. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Obtusos', 'O valor de $cos 150°$ é:',
  ['$−{√{3}|2}$', '$−{1|2}$', '${1|2}$', '${√{3}|2}$'], 0, '$cos 150° = −cos 30° = −{√{3}|2}$. <strong>Alternativa A.</strong>', '', 'decay'));
b.push(estiloEnem('Escada e ângulo', 'Uma escada de $10$ m apoiada em uma parede forma $60°$ com o chão. A altura que ela alcança na parede é, em metros, aproximadamente (use $√{3} ≈ 1,7$):',
  ['5,0', '7,1', '8,5', '10,0', '17,0'], 2, 'Altura é o cateto oposto: $sen 60° = {√{3}|2}$ ⇒ $h = 10 · 0,85 = 8,5$ m. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as razões enganam', [
  ['Trocar oposto e adjacente', 'Eles dependem do ângulo escolhido: sempre localize o ângulo <strong>primeiro</strong>.'],
  ['Escolher a razão errada', 'Oposto e hipotenusa: seno; adjacente e hipotenusa: cosseno; oposto e adjacente: tangente.'],
  ['Calculadora em radianos', 'Com ângulos em graus, a calculadora precisa estar em <strong>DEG</strong>.'],
  ['Cosseno obtuso positivo', 'Entre $90°$ e $180°$ o cosseno é <strong>negativo</strong>.']
]));
b.push(quiz([
  { q: 'O seno de um ângulo agudo é a razão entre:', o: ['oposto e adjacente', 'oposto e hipotenusa', 'adjacente e hipotenusa', 'hipotenusa e oposto'], a: 1 },
  { q: '$sen 30°$ vale:', o: ['${√{3}|2}$', '${√{2}|2}$', '${1|2}$', '$1$'], a: 2 },
  { q: '$tg 45°$ vale:', o: ['$0$', '${1|2}$', '$1$', '$√{3}$'], a: 2 },
  { q: '$sen 110°$ é igual a:', o: ['$sen 70°$', '$−sen 70°$', '$cos 70°$', '$−cos 70°$'], a: 0 }
].map(q => ({ ...q, o: q.o.map(t => t.replace('${', '$ {')) }))));
b.push(fechamento([
  ['Razões', '$sen θ = {"oposto"|"hipotenusa"}$, $cos θ = {"adjacente"|"hipotenusa"}$, $tg θ = {"oposto"|"adjacente"}$.'],
  ['Notáveis', '$30°$, $45°$ e $60°$ têm valores exatos, com $√{2}$ e $√{3}$.'],
  ['Obtusos', '$sen x = sen (180° − x)$ e $cos x = −cos (180° − x)$.']
], 'Com um ângulo e um lado, o triângulo retângulo entrega todo o resto. Na próxima aula: triângulos quaisquer, com a lei dos senos.'));

pages.push({ out: BASE + 'aula-2-razoes-trigonometricas.html', html: K.deck({
  title: 'Razões trigonométricas e ângulos notáveis — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 34 · Seno, cosseno e tangente', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['r1-t', 'r1-h'], function(){ var t = +$('r1-t').value, h = +$('r1-h').value; $('r1-tv').textContent = t;
    if(!(h > 0)){ $('r1-s').innerHTML = ''; $('r1-v').textContent = '—'; return; }
    var co = h * Math.sin(rad(t)), ca = h * Math.cos(rad(t)); triW($('r1-s'), ca, h, co, {A: '', B: '', C: 'θ = ' + t + '°', a: 'adjacente ' + pt(ca, 2), b: 'hipotenusa ' + pt(h, 2), c: 'oposto ' + pt(co, 2)});
    $('r1-v').textContent = pt(Math.sin(rad(t)), 3) + ' · ' + pt(Math.cos(rad(t)), 3) + ' · ' + pt(Math.tan(rad(t)), 3);
    $('r1-d').textContent = 'Oposto = ' + pt(h, 1) + ' · sen ' + t + '° = ' + pt(co, 2) + ' cm; adjacente = ' + pt(h, 1) + ' · cos ' + t + '° = ' + pt(ca, 2) + ' cm.'; });
  bind(['o1-x'], function(){ var x = +$('o1-x').value; $('o1-xv').textContent = x;
    $('o1-a').textContent = x + '° e ' + (180 - x) + '°';
    $('o1-s').textContent = pt(Math.sin(rad(x)), 3) + ' · ' + pt(Math.sin(rad(180 - x)), 3);
    $('o1-c').textContent = pt(Math.cos(rad(x)), 3) + ' · ' + pt(Math.cos(rad(180 - x)), 3);
    $('o1-h').textContent = x > 90 ? 'Obtuso: mesmo seno e cossenos opostos.' : x < 90 ? 'Agudo: o suplemento é obtuso.' : 'Em 90°, o cosseno é 0 e o seno é 1.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Trigonometria: introdução', accent: 'primary', icon: 'triangle',
  aulas: [['Aula 33', 'Ângulos do triângulo e teorema de Pitágoras', 'aula-1-angulos-do-triangulo-e-pitagoras.html'], ['Aula 34', 'Seno, cosseno e tangente: ângulos notáveis', 'aula-2-razoes-trigonometricas.html']],
  pendente: true
}, pages };
