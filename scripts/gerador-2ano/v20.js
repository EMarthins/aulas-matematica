// Unidade v20 — Seno e cosseno de um arco (aulas 43 e 44 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'seno-e-cosseno-de-um-arco', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v20', BRAND = 'Seno e cosseno de um arco';
const EXATO = String.raw`
  function exato(v, tg){ var s = v < 0 ? '−' : '', a = Math.abs(v), L = tg ? [[0, '0'], [Math.sqrt(3) / 3, '√3/3'], [1, '1'], [Math.sqrt(3), '√3']] : [[0, '0'], [0.5, '1/2'], [Math.SQRT1_2, '√2/2'], [Math.sqrt(3) / 2, '√3/2'], [1, '1']];
    for(var i = 0; i < L.length; i++){ if(Math.abs(a - L[i][0]) < 1e-9) return (a === 0 ? '' : s) + L[i][1]; } return null; }
  function valor(v, tg){ var e = exato(v, tg); return (e ? e + ' ≈ ' : '') + pt(v, 3); }
  function reduz(d, f){ d = ((d % 360) + 360) % 360; if(d <= 90) return {r: d, q: 1, t: 'já está no 1º quadrante'}; if(d <= 180) return {r: 180 - d, q: 2, t: '180° − ' + pt(d) + '° = ' + pt(180 - d) + '°'};
    if(d <= 270) return {r: d - 180, q: 3, t: pt(d) + '° − 180° = ' + pt(d - 180) + '°'}; return {r: 360 - d, q: 4, t: '360° − ' + pt(d) + '° = ' + pt(360 - d) + '°'}; }
`;

// ===================== AULA 43: seno =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 43', h1: 'O seno de um arco: <span style="color:var(--primary);">a altura do ponto na circunferência</span>',
  sub: 'Em um dado, as faces opostas sempre somam sete: a simetria organiza o jogo. Na circunferência trigonométrica a simetria faz algo parecido, e permite calcular o seno de qualquer arco a partir do primeiro quadrante.',
  badges: [['sen α = ordenada'], ['de −1 a 1', 'growth'], ['simetrias', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da definição à redução ao primeiro quadrante.', [
  ['Definição', 'seno é a ordenada do ponto', 'bulb'],
  ['Eixo dos senos', 'o eixo vertical', 'target'],
  ['Sinais', 'positivo em I e II, negativo em III e IV', 'chart'],
  ['Redução', 'levar o arco ao 1º quadrante', 'link'],
  ['Valores notáveis', '30°, 45° e 60° e seus simétricos', 'scale']
]));
a.push(objetivosSlide([
  'Definir o <strong>seno de um arco</strong> como a <strong>ordenada</strong> do ponto da circunferência trigonométrica.',
  'Determinar o <strong>sinal</strong> do seno em cada quadrante.',
  'Calcular senos de arcos de qualquer quadrante por <strong>redução ao 1º quadrante</strong>.'
], 'Dica', 'Faça sempre o mesmo caminho: <strong>1) descubra o quadrante; 2) reduza ao 1º; 3) ponha o sinal do seno</strong> daquele quadrante.', 'primary'));

a.push(sl('Para início de conversa', 'Simetria: o dado e a circunferência', `
          ${lede('As faces opostas de um dado somam sempre $7$: são <strong>simétricas</strong>. Na circunferência trigonométrica, pontos simétricos em relação aos eixos têm alturas iguais ou opostas. Se $sen 30° = 0,5$, quanto vale $sen 150°$?')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figCirc({ deg: 150, w: 290, h: 250, mostra: ['sen'] })}
            ${mini('Sabendo que $sen 30° = 0,5$, quanto vale $sen 150°$?', ['$−0,5$', '$0,5$', '$0,87$', '$1$'], 1, '$150° = 180° − 30°$: o ponto de $150°$ é o simétrico do de $30°$ em relação ao eixo $y$, com a <strong>mesma altura</strong>.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · seno na circunferência', 'Seno é a ordenada', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Na circunferência de <strong>raio $1$</strong>, o ponto $P$ da extremidade do arco $α$ tem coordenadas $(cos α, sen α)$.</li>
                <li>O <strong>eixo vertical</strong> é o <strong>eixo dos senos</strong>: $sen α$ é a <strong>ordenada</strong> de $P$.</li>
                <li>Como o raio é $1$, $−1 ≤ sen α ≤ 1$.</li>
                <li><strong>Sinais:</strong> $+$ no 1º e 2º quadrantes (acima do eixo $x$); $−$ no 3º e 4º.</li>
                <li>$sen 0° = 0$, $sen 90° = 1$, $sen 180° = 0$, $sen 270° = −1$.</li>
              </ul>
            </div>
            ${W.box('Ponto P e o seno', W.row(W.rg('s43-g', 'Arco', 0, 360, 5, 150, '°')) + W.svg('s43-s', '0 0 300 270', '300px') + W.txt('s43-v', 'sen α = ') + W.txt('s43-r', 'Redução ao 1º quadrante: ') + W.hint('s43-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · redução ao 1º quadrante', 'Quanto falta e quanto passou', `
          <div class="grid2">
            <div>
              ${tbl(['Quadrante', 'Redução', 'Sinal do seno'], [['2º', '$α → 180° − α$', '$+$'], ['3º', '$α → α − 180°$', '$−$'], ['4º', '$α → 360° − α$', '$−$']])}
              <p class="hint" style="margin-top:8px;">Exemplos: $sen 110° = sen 70°$; $sen 200° = −sen 20°$; $sen 333° = −sen 27°$.</p>
            </div>
            <ul class="plain" style="font-size:.93rem;line-height:1.65;">
              <li><strong>2º quadrante:</strong> “quanto falta para $180°$”.</li>
              <li><strong>3º quadrante:</strong> “quanto passou de $180°$”.</li>
              <li><strong>4º quadrante:</strong> “quanto falta para $360°$”.</li>
              <li>O seno de arcos <strong>côngruos</strong> é o mesmo: $sen (α + k · 360°) = sen α$.</li>
            </ul>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Dado um seno, achar os simétricos', 'Sabendo que $sen 40° ≈ 0,64$, calcule $sen 140°$, $sen 220°$ e $sen 320°$.', [
  ['140°', 'Falta $40°$ para $180°$ (2º quadrante): $sen 140° = sen 40° = 0,64$.'],
  ['220°', 'Passou $40°$ de $180°$ (3º quadrante): $sen 220° = −sen 40° = −0,64$.'],
  ['320°', 'Falta $40°$ para $360°$ (4º quadrante): $sen 320° = −sen 40° = −0,64$.']
], '$0,64$, $−0,64$ e $−0,64$.'));
a.push(exemplo('Exemplo resolvido', 'Valores notáveis', 'Calcule $sen 150°$, $sen 225°$ e $sen 300°$.', [
  ['150°', '$180° − 150° = 30°$ (2º quadrante, $+$): $sen 150° = {1|2}$.'],
  ['225°', '$225° − 180° = 45°$ (3º quadrante, $−$): $sen 225° = −{√{2}|2}$.'],
  ['300°', '$360° − 300° = 60°$ (4º quadrante, $−$): $sen 300° = −{√{3}|2}$.']
], '$ {1|2}$, $−{√{2}|2}$ e $−{√{3}|2}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Arco maior que uma volta', 'Calcule $sen 1 110°$.'.split(' ').join(''), [
  ['1ª determinação', '$1110 = 3 · 360 + 30$: $1110°$ é côngruo a $30°$.'],
  ['Seno', '$sen 1110° = sen 30° = {1|2}$.']
], '$sen 1110° = {1|2}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Seno em radianos', 'Calcule $sen {7π|6}$.', [
  ['Em graus', '$ {7π|6} = 210°$ (3º quadrante).'],
  ['Redução', '$210° − 180° = 30°$, e no 3º quadrante o seno é negativo.']
], '$sen {7π|6} = −{1|2}$.'.replace('${', '$ {'), 'decay'));

a.push(pratique('Sinal do seno', 'O seno de $250°$ é:',
  ['positivo e igual a $sen 70°$', 'negativo e igual a $−sen 70°$', 'positivo e igual a $sen 20°$', 'negativo e igual a $−sen 20°$'], 1, '$250°$ está no 3º quadrante ($250° − 180° = 70°$), onde o seno é negativo: $sen 250° = −sen 70°$. <strong>Alternativa B.</strong>'));
a.push(pratique('Valor notável', 'O valor de $sen 120°$ é:',
  ['$−{√{3}|2}$', '$−{1|2}$', '${1|2}$', '${√{3}|2}$'].map(t => t.replace('${', '$ {')), 3, '$180° − 120° = 60°$ e o seno é positivo no 2º quadrante: ${√{3}|2}$. <strong>Alternativa D.</strong>'.replace('${', '$ {').replace('√{3}|2}$.', '√{3}|2}$.'), '', 'growth'));
a.push(pratique('Quantos arcos?', 'No intervalo $[0°, 360°]$, quantos arcos têm seno igual a $ {1|2}$?',
  ['um', 'dois', 'três', 'quatro'], 1, '$30°$ e $150°$ ($180° − 30°$). <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Maré', 'A altura da maré em um porto, em metros, pode ser modelada por $h(t) = 2 + sen α$, com $α$ em graus. Quando $α = 210°$, a altura é:',
  ['1,0 m', '1,5 m', '2,0 m', '2,5 m', '3,0 m'], 1, '$sen 210° = −sen 30° = −0,5$; $h = 2 − 0,5 = 1,5$ m. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o seno engana', [
  ['Trocar abscissa por ordenada', 'O seno é a <strong>ordenada</strong> (eixo vertical); a abscissa é o cosseno.'],
  ['Esquecer o sinal', 'Reduzir ao 1º quadrante dá o <strong>módulo</strong>; o sinal vem do quadrante original.'],
  ['Reduzir errado no 3º e 4º', '3º quadrante: $α − 180°$; 4º: $360° − α$.'],
  ['Valores fora de $[−1, 1]$', 'Se o seno deu $1,5$, há erro: o seno nunca passa de $1$ em módulo.']
]));
a.push(quiz([
  { q: 'O seno é a __ do ponto da circunferência trigonométrica:', o: ['abscissa', 'ordenada', 'distância à origem', 'inclinação'], a: 1 },
  { q: 'O seno é negativo no:', o: ['1º e 2º quadrantes', '2º e 3º quadrantes', '3º e 4º quadrantes', '1º e 4º quadrantes'], a: 2 },
  { q: '$sen 150°$ é igual a:', o: ['$sen 30°$', '$−sen 30°$', '$sen 60°$', '$−sen 60°$'], a: 0 },
  { q: 'O menor valor possível do seno é:', o: ['$0$', '$−1$', '$−π$', '$−2$'], a: 1 }
]));
a.push(fechamento([
  ['Definição', '$sen α$ é a ordenada do ponto de extremidade do arco $α$.'],
  ['Sinais', '$+$ no 1º e 2º quadrantes; $−$ no 3º e 4º.'],
  ['Redução', '2º: $180° − α$; 3º: $α − 180°$; 4º: $360° − α$.']
], 'Com a simetria, o seno de qualquer arco sai do primeiro quadrante. Próxima aula: o cosseno, a abscissa do ponto.'));

// ===================== AULA 44: cosseno e relação fundamental =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 44', h1: 'O cosseno de um arco: <span style="color:var(--primary);">a projeção do ponto no eixo x</span>',
  sub: 'No motor de um Fusca ou de uma Kombi, os pistões se movem na horizontal enquanto o eixo gira: o movimento do pistão é a projeção do giro, e a projeção horizontal é o cosseno.',
  badges: [['cos α = abscissa'], ['sen² + cos² = 1', 'growth'], ['sinais por quadrante', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Da abscissa à relação fundamental.', [
  ['Definição', 'cosseno é a abscissa do ponto', 'bulb'],
  ['Eixo dos cossenos', 'o eixo horizontal', 'target'],
  ['Sinais', 'positivo em I e IV, negativo em II e III', 'chart'],
  ['Redução', 'levar o arco ao 1º quadrante', 'link'],
  ['Relação fundamental', 'sen² α + cos² α = 1', 'scale']
]));
b.push(objetivosSlide([
  'Definir o <strong>cosseno</strong> como a <strong>abscissa</strong> do ponto e determinar seu <strong>sinal</strong> em cada quadrante.',
  'Calcular cossenos de arcos de qualquer quadrante por <strong>redução ao 1º quadrante</strong>.',
  'Usar a <strong>relação fundamental</strong> $sen^{2} α + cos^{2} α = 1$.'
], 'Dica', 'No cosseno a regra dos sinais é a das <strong>abscissas</strong>: positivo à direita do eixo $y$ (1º e 4º quadrantes) e negativo à esquerda (2º e 3º).', 'primary'));

b.push(sl('Para início de conversa', 'O pistão que vai e volta', `
          ${lede('Nos motores boxer, os pistões trabalham na <strong>horizontal</strong>. O eixo gira, mas o pistão só anda para a frente e para trás: sua posição é a <strong>projeção horizontal</strong> do ponto que gira, a abscissa. A razão trigonométrica que a descreve é o <strong>cosseno</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figCirc({ deg: 120, w: 290, h: 250, mostra: ['cos'] })}
            ${mini('Na figura, o ponto de $120°$ está à esquerda do eixo $y$. Seu cosseno é:', ['positivo', 'negativo', 'zero', 'não existe'], 1, 'À esquerda do eixo $y$ a abscissa é negativa: $cos 120° = −0,5$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · cosseno na circunferência', 'Cosseno é a abscissa', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O <strong>eixo horizontal</strong> é o <strong>eixo dos cossenos</strong>: $cos α$ é a <strong>abscissa</strong> do ponto $P$.</li>
                <li>Também vale $−1 ≤ cos α ≤ 1$.</li>
                <li><strong>Sinais:</strong> $+$ no 1º e 4º quadrantes; $−$ no 2º e 3º.</li>
                <li>$cos 0° = 1$, $cos 90° = 0$, $cos 180° = −1$, $cos 270° = 0$, $cos 360° = 1$.</li>
                <li><strong>Redução:</strong> 2º quadrante: $cos α = −cos (180° − α)$; 3º: $cos α = −cos (α − 180°)$; 4º: $cos α = cos (360° − α)$.</li>
              </ul>
            </div>
            ${W.box('Ponto P e o cosseno', W.row(W.rg('c44-g', 'Arco', 0, 360, 5, 120, '°')) + W.svg('c44-s', '0 0 300 270', '300px') + W.txt('c44-v', 'cos α = ') + W.txt('c44-r', 'sen α = ') + W.hint('c44-h'))}
          </div>`, { cls: '' }));

b.push(sl('Resumo visual', 'Sinais e valores notáveis', `
          <div class="grid2">
            ${tbl(['Quadrante', 'I', 'II', 'III', 'IV'], [['sen', '$+$', '$+$', '$−$', '$−$'], ['cos', '$+$', '$−$', '$−$', '$+$']])}
            ${tbl(['Arco', '30°', '45°', '60°', '120°', '135°', '150°'], [['cos', '$ {√{3}|2}$', '$ {√{2}|2}$', '$ {1|2}$', '$−{1|2}$', '$−{√{2}|2}$', '$−{√{3}|2}$']])}
          </div>
          <p class="hint" style="margin-top:8px;">O cosseno de arcos côngruos é o mesmo, e $cos (360° − α) = cos α$: arcos simétricos em relação ao eixo $x$ têm o mesmo cosseno.</p>`, { cls: '' }));

b.push(sl('Teoria · relação fundamental', 'Pitágoras dentro da circunferência', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O ponto $P(cos α, sen α)$ está a distância $1$ da origem (o raio).</li>
                <li>Pelo teorema de Pitágoras no triângulo retângulo formado:</li>
              </ul>
              <p class="formula big" style="margin:6px 0;">$sen^{2} α + cos^{2} α = 1$</p>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com ela, conhecido um valor, calcula-se o outro: $cos α = ±√{1 − sen^{2} α}$, e o sinal vem do <strong>quadrante</strong>.</li>
              </ul>
            </div>
            ${callout('Exemplo', 'Se $sen α = {3|5}$ e $α$ está no 2º quadrante: $cos^{2} α = 1 − {9|25} = {16|25}$, então $cos α = −{4|5}$ (negativo no 2º quadrante).', 'success')}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Cossenos por redução', 'Calcule $cos 120°$, $cos 225°$ e $cos 300°$.', [
  ['120°', '2º quadrante: $180° − 120° = 60°$, sinal $−$: $cos 120° = −{1|2}$.'],
  ['225°', '3º quadrante: $225° − 180° = 45°$, sinal $−$: $cos 225° = −{√{2}|2}$.'],
  ['300°', '4º quadrante: $360° − 300° = 60°$, sinal $+$: $cos 300° = {1|2}$.']
], '$−{1|2}$, $−{√{2}|2}$ e ${1|2}$.'.replace('${', '$ {')));
b.push(exemplo('Exemplo resolvido', 'O ciclista na pista circular', 'Um ciclista percorre $ {13|6}$ de volta em uma pista circular. Quanto vale o cosseno do arco percorrido?', [
  ['Em graus', '$ {13|6} · 360° = 780°$.'],
  ['1ª determinação', '$780° = 2 · 360° + 60°$: côngruo a $60°$ (1º quadrante).'],
  ['Cosseno', '$cos 780° = cos 60° = {1|2}$.']
], '$cos 780° = {1|2}$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Cosseno em radianos', 'Calcule $cos {5π|6}$.', [
  ['Em graus', '$ {5π|6} = 150°$ (2º quadrante).'],
  ['Redução', '$180° − 150° = 30°$, com sinal negativo.']
], '$cos {5π|6} = −{√{3}|2}$.'.replace('${', '$ {'), 'growth'));
b.push(exemplo('Exemplo resolvido', 'Relação fundamental', 'Sabendo que $cos α = −{5|13}$ e que $α$ está no 3º quadrante, calcule $sen α$.', [
  ['Equação', '$sen^{2} α = 1 − cos^{2} α = 1 − {25|169} = {144|169}$.'],
  ['Raiz', '$sen α = ±{12|13}$.'],
  ['Sinal', 'No 3º quadrante o seno é negativo.']
], '$sen α = −{12|13}$.'.replace('${', '$ {'), 'decay'));

b.push(pratique('Sinal do cosseno', 'O cosseno de $200°$ é:',
  ['positivo', 'negativo', 'zero', 'maior que $1$'], 1, '$200°$ está no 3º quadrante, à esquerda do eixo $y$: cosseno negativo. <strong>Alternativa B.</strong>'));
b.push(pratique('Valor notável', 'O valor de $cos 330°$ é:',
  ['$−{√{3}|2}$', '$−{1|2}$', '${1|2}$', '${√{3}|2}$'].map(t => t.replace('${', '$ {')), 3, '$360° − 330° = 30°$, no 4º quadrante o cosseno é positivo: $ {√{3}|2}$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(pratique('Relação fundamental', 'Se $sen α = {3|5}$ e $α$ está no 1º quadrante, $cos α$ vale:',
  ['${3|5}$', '${4|5}$', '${5|4}$', '${2|5}$'].map(t => t.replace('${', '$ {')), 1, '$cos^{2} α = 1 − {9|25} = {16|25}$ e no 1º quadrante $cos α = {4|5}$. <strong>Alternativa B.</strong>', '', 'decay'));
b.push(estiloEnem('Pistão', 'A posição horizontal de um pistão, em centímetros, é $x = 5 · cos α$, com $α$ em graus. Quando $α = 150°$, a posição do pistão é, aproximadamente: (use $√{3} ≈ 1,73$)',
  ['$−4,3$ cm', '$−2,5$ cm', '$2,5$ cm', '$4,3$ cm', '$5$ cm'], 0, '$cos 150° = −cos 30° = −0,865$; $x = 5 · (−0,865) ≈ −4,3$ cm. <strong>Alternativa A.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o cosseno engana', [
  ['Sinal esquecido', 'No 2º e 3º quadrantes o cosseno é <strong>negativo</strong>.'],
  ['Trocar seno e cosseno', 'Abscissa é cosseno; ordenada é seno. Os sinais mudam entre os dois.'],
  ['Cosseno do 4º quadrante', '$cos (360° − α) = cos α$ (<strong>sem</strong> troca de sinal).'],
  ['Raiz sem sinal', 'Ao usar $sen^{2} + cos^{2} = 1$, o sinal da raiz vem do <strong>quadrante</strong>.']
]));
b.push(quiz([
  { q: 'O cosseno é a __ do ponto da circunferência trigonométrica:', o: ['abscissa', 'ordenada', 'área', 'inclinação'], a: 0 },
  { q: 'O cosseno é positivo no:', o: ['1º e 2º quadrantes', '1º e 4º quadrantes', '2º e 3º quadrantes', '3º e 4º quadrantes'], a: 1 },
  { q: '$cos 135°$ vale:', o: ['${√{2}|2}$', '$−{√{2}|2}$', '${1|2}$', '$−{1|2}$'].map(t => t.replace('${', '$ {')), a: 1 },
  { q: 'Para qualquer arco, $sen^{2} α + cos^{2} α$ vale:', o: ['$0$', '$1$', '$2$', 'depende do arco'], a: 1 }
].map(q => ({ ...q, o: q.o.map(t => t.replace('${', '$ {')) }))));
b.push(fechamento([
  ['Definição', '$cos α$ é a abscissa do ponto de extremidade do arco $α$.'],
  ['Sinais', '$+$ no 1º e 4º quadrantes; $−$ no 2º e 3º.'],
  ['Relação fundamental', '$sen^{2} α + cos^{2} α = 1$.']
], 'Seno e cosseno juntos descrevem o ponto da circunferência. Próxima aula: a tangente de um arco.'));

const pages = [];
const W1 = String.raw`
  function figSC(svg, g, tan){ return circW(svg, g, {tan: !!tan}); }`;
pages.push({ out: BASE + 'aula-1-seno-de-um-arco.html', html: K.deck({
  title: 'Seno de um arco na circunferência trigonométrica — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 43 · Seno de um arco', slides: a,
  extra: WJS + BIND + T.TJS + EXATO + W1 + String.raw`
  bind(['s43-g'], function(){ var g = +$('s43-g').value; $('s43-gv').textContent = g; var r = circW($('s43-s'), g, {});
    $('s43-v').textContent = valor(Math.abs(r.s) < 1e-12 ? 0 : r.s); var rd = reduz(g); $('s43-r').textContent = (rd.q === 1 ? rd.t : rd.t + ' → sen ' + pt(rd.r) + '°');
    $('s43-h').textContent = g === 0 || g === 180 || g === 360 ? 'Sobre o eixo x: o seno vale 0.' : g === 90 ? 'Ponto mais alto: seno 1.' : g === 270 ? 'Ponto mais baixo: seno −1.' : (r.s > 0 ? 'Acima do eixo x: seno positivo' : 'Abaixo do eixo x: seno negativo') + ' (' + rd.q + 'º quadrante).'; });`
}) });
pages.push({ out: BASE + 'aula-2-cosseno-de-um-arco.html', html: K.deck({
  title: 'Cosseno de um arco e relação fundamental — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 44 · Cosseno de um arco', slides: b,
  extra: WJS + BIND + T.TJS + EXATO + String.raw`
  bind(['c44-g'], function(){ var g = +$('c44-g').value; $('c44-gv').textContent = g; var r = circW($('c44-s'), g, {});
    $('c44-v').textContent = valor(Math.abs(r.c) < 1e-12 ? 0 : r.c); $('c44-r').textContent = valor(Math.abs(r.s) < 1e-12 ? 0 : r.s);
    var rd = reduz(g); $('c44-h').textContent = g === 90 || g === 270 ? 'Sobre o eixo y: o cosseno vale 0.' : g === 0 || g === 360 ? 'Cosseno 1 (ponto A).' : g === 180 ? 'Cosseno −1.' : (r.c > 0 ? 'À direita do eixo y: cosseno positivo' : 'À esquerda do eixo y: cosseno negativo') + ' (' + rd.q + 'º quadrante). sen² + cos² = ' + pt(r.s * r.s + r.c * r.c, 2) + '.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Seno e cosseno de um arco', accent: 'growth', icon: 'wave',
  aulas: [['Aula 43', 'Seno de um arco: redução ao 1º quadrante', 'aula-1-seno-de-um-arco.html'], ['Aula 44', 'Cosseno de um arco e relação fundamental', 'aula-2-cosseno-de-um-arco.html']],
  pendente: true
}, pages };
