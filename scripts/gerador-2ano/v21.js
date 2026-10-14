// Unidade v21 — Tangente de um arco (aula 45 da 2ª série, 2º trimestre) — só a aula; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'tangente-de-um-arco', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v21', BRAND = 'Tangente de um arco';
const EXATO = String.raw`
  function exato(v, tg){ var s = v < 0 ? '−' : '', a = Math.abs(v), L = [[0, '0'], [Math.sqrt(3) / 3, '√3/3'], [1, '1'], [Math.sqrt(3), '√3']];
    for(var i = 0; i < L.length; i++){ if(Math.abs(a - L[i][0]) < 1e-9) return (a === 0 ? '' : s) + L[i][1]; } return null; }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 45', h1: 'A tangente de um arco: <span style="color:var(--primary);">a inclinação do raio</span>',
  sub: 'Quando uma estrada sobe uma montanha, medimos a inclinação pela razão entre o quanto sobe e o quanto avança na horizontal. Essa razão é a tangente, e a circunferência trigonométrica a mostra como um segmento sobre uma reta.',
  badges: [['tg α = sen α ÷ cos α'], ['reta tangente em A', 'growth'], ['90° não tem tangente', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da inclinação ao eixo das tangentes.', [
  ['Inclinação', 'subir ÷ avançar', 'bulb'],
  ['O eixo das tangentes', 'a reta tangente por A', 'target'],
  ['Sinais', 'positiva em I e III, negativa em II e IV', 'chart'],
  ['tg = sen ÷ cos', 'por semelhança de triângulos', 'link'],
  ['Problemas', 'rampas e ladeiras', 'scale']
]));
a.push(objetivosSlide([
  'Definir a <strong>tangente de um arco</strong> como a medida de um segmento na <strong>reta tangente</strong> à circunferência em $A$.',
  'Determinar o <strong>sinal da tangente</strong> em cada quadrante e reconhecer onde ela <strong>não existe</strong>.',
  'Usar $tg α = {sen α|cos α}$ e resolver problemas de <strong>inclinação de rampas</strong>.'
], 'Dica', 'Associe: <strong>seno = vertical</strong>, <strong>cosseno = horizontal</strong>, <strong>tangente = inclinação</strong> (vertical ÷ horizontal).', 'primary'));

a.push(sl('Para início de conversa', 'Qual rampa é mais inclinada?', `
          ${lede('Uma rampa sobe $1$ metro a cada $2$ metros percorridos na horizontal; outra sobe $2$ metros a cada $2$ metros. A inclinação depende da <strong>razão entre o que sobe e o que avança</strong>. Existe uma forma de ligar essa razão ao <strong>ângulo</strong> da rampa: a tangente.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figRet({ co: 1, ca: 2, w: 260, h: 150, ang: 'α', rotCO: '1 m', rotCA: '2 m', rotH: '' })}
            ${mini('As razões “sobe ÷ avança” das duas rampas são:', ['$0,5$ e $1$', '$2$ e $1$', '$1$ e $2$', 'as duas iguais a $1$'], 0, '$1 ÷ 2 = 0,5$ e $2 ÷ 2 = 1$. A segunda é mais inclinada: sua razão (tangente) é maior.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · tangente na circunferência', 'A tangente é um segmento sobre a reta t', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Por $A(1, 0)$ traçamos a reta $t$, <strong>tangente</strong> à circunferência (vertical): o <strong>eixo das tangentes</strong>.</li>
                <li>O prolongamento do raio $OM$ encontra $t$ em $T$. A <strong>tangente do arco</strong> $AM$ é a <strong>ordenada de $T$</strong>, ou seja, o comprimento (com sinal) de $AT$.</li>
                <li>Por semelhança dos triângulos $OAT$ e $OM'M$: $tg α = {sen α|cos α}$.</li>
                <li>Em $90°$ e $270°$ o prolongamento de $OM$ não encontra $t$: a tangente <strong>não existe</strong> ($cos α = 0$).</li>
              </ul>
            </div>
            ${W.box('Reta tangente e o ponto T', W.row(W.rg('t45-g', 'Arco', 0, 360, 5, 35, '°')) + W.svg('t45-s', '0 0 300 270', '300px') + W.txt('t45-v', 'tg α = ') + W.txt('t45-q', 'sen ÷ cos: ') + W.hint('t45-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Sinais e valores da tangente', `
          <div class="grid2">
            ${tbl(['Quadrante', 'I', 'II', 'III', 'IV'], [['sen', '$+$', '$+$', '$−$', '$−$'], ['cos', '$+$', '$−$', '$−$', '$+$'], ['tg', '$+$', '$−$', '$+$', '$−$']])}
            ${tbl(['Arco', '30°', '45°', '60°'], [['tg', '$ {√{3}|3}$', '$1$', '$√{3}$']])}
          </div>
          <p class="hint" style="margin-top:8px;">Redução ao 1º quadrante: $tg (180° − α) = −tg α$; $tg (180° + α) = tg α$; $tg (360° − α) = −tg α$. A tangente repete a cada $180°$.</p>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Tangentes por redução', 'Calcule $tg 150°$, $tg 225°$ e $tg 300°$.', [
  ['150°', '2º quadrante: $tg 150° = −tg 30° = −{√{3}|3}$.'],
  ['225°', '3º quadrante: $tg 225° = tg 45° = 1$.'],
  ['300°', '4º quadrante: $tg 300° = −tg 60° = −√{3}$.']
], '$−{√{3}|3}$, $1$ e $−√{3}$.'.replace('${', '$ {')));
a.push(exemplo('Exemplo resolvido', 'Tangente a partir de seno e cosseno', 'Se $sen α = {3|5}$ e $cos α = −{4|5}$, qual o valor de $tg α$ e em que quadrante está $α$?', [
  ['Quociente', '$tg α = {3|5} ÷ (−{4|5}) = −{3|4}$.'],
  ['Quadrante', 'Seno positivo e cosseno negativo: 2º quadrante, onde a tangente é negativa ✓.']
], '$tg α = −{3|4} = −0,75$, no 2º quadrante.'.replace('${', '$ {'), 'growth'));
a.push(exemplo('Exemplo resolvido', 'Onde a tangente não existe', 'Para quais arcos de $0°$ a $360°$ a tangente não é definida?', [
  ['Condição', '$tg α = {sen α|cos α}$ exige $cos α ≠ 0$.'],
  ['Cosseno zero', '$cos α = 0$ em $90°$ e $270°$.']
], 'A tangente não existe em $90°$ e $270°$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A rampa de acesso', 'Uma rampa de acessibilidade deve ter inclinação de $10°$ e vencer um desnível de $1,2$ m. Qual o comprimento horizontal necessário? (use $tg 10° ≈ 0,18$)', [
  ['Razão', 'Desnível é o cateto oposto; o comprimento horizontal $x$ é o adjacente: $tg 10° = {1,2|x}$.'],
  ['Cálculo', '$x = 1,2 ÷ 0,18 ≈ 6,7$ m.']
], 'São necessários cerca de $6,7$ m na horizontal.', 'decay'));

a.push(pratique('Sinal da tangente', 'A tangente de $200°$ é:',
  ['positiva', 'negativa', 'zero', 'não existe'], 0, '$200°$ está no 3º quadrante, onde seno e cosseno são negativos: o quociente é positivo. <strong>Alternativa A.</strong>'));
a.push(pratique('Valor notável', 'O valor de $tg 135°$ é:',
  ['$−√{3}$', '$−1$', '$1$', '$√{3}$'], 1, '$180° − 135° = 45°$; no 2º quadrante a tangente é negativa: $tg 135° = −tg 45° = −1$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Tangente indefinida', 'Qual destes arcos <strong>não</strong> tem tangente definida?',
  ['$60°$', '$120°$', '$270°$', '$315°$'], 2, 'Em $270°$ o cosseno é $0$ e $tg = sen ÷ cos$ fica indefinida. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Ladeira', 'Uma ladeira tem inclinação de 20% (sobe $20$ cm a cada $100$ cm percorridos na horizontal). Para vencer uma altura de $1,2$ m, o deslocamento horizontal necessário é de:',
  ['$2,4$ m', '$4,0$ m', '$5,0$ m', '$6,0$ m', '$24$ m'], 3, 'A tangente do ângulo é $20 ÷ 100 = 0,2$; $x = 1,2 ÷ 0,2 = 6$ m. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a tangente engana', [
  ['Tangente em 90° e 270°', 'Não existe. Não escreva “infinito” como valor: apenas “não definida”.'],
  ['Sinais trocados', 'Tangente: $+$ em I e III; $−$ em II e IV (inverso do que muita gente supõe).'],
  ['Confundir com seno ou cosseno', 'A tangente <strong>pode ser maior que $1$</strong>; seno e cosseno nunca passam de $1$.'],
  ['Esquecer o quociente', '$tg α = {sen α|cos α}$: divida o seno pelo cosseno, não o contrário.']
]));
a.push(quiz([
  { q: '$tg α$ é igual a:', o: ['$cos α ÷ sen α$', '$sen α ÷ cos α$', '$sen α · cos α$', '$sen α + cos α$'], a: 1 },
  { q: 'A tangente é negativa no:', o: ['1º e 3º quadrantes', '2º e 4º quadrantes', '1º e 2º quadrantes', '3º e 4º quadrantes'], a: 1 },
  { q: '$tg 45°$ vale:', o: ['$0$', '${1|2}$', '$1$', '$√{3}$'].map(t => t.replace('${', '$ {')), a: 2 },
  { q: 'Em quais arcos de $0°$ a $360°$ a tangente não existe?', o: ['$0°$ e $180°$', '$90°$ e $270°$', '$45°$ e $225°$', 'em nenhum'], a: 1 }
]));
a.push(fechamento([
  ['Definição', '$tg α$ é a ordenada do ponto $T$ na reta tangente por $A$; $tg α = {sen α|cos α}$.'],
  ['Sinais', '$+$ no 1º e 3º quadrantes; $−$ no 2º e 4º.'],
  ['Limites', 'Não existe em $90°$ e $270°$; pode assumir qualquer valor real.']
], 'Com seno, cosseno e tangente da circunferência, passamos aos gráficos. Próxima aula: a função seno.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-tangente-de-um-arco.html', html: K.deck({
  title: 'Tangente de um arco — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 45 · Tangente de um arco', slides: a,
  extra: WJS + BIND + T.TJS + EXATO + String.raw`
  bind(['t45-g'], function(){ var g = +$('t45-g').value; $('t45-gv').textContent = g; var r = circW($('t45-s'), g, {tan: true}), nd = Math.abs(r.c) < 1e-9;
    if(nd){ $('t45-v').textContent = 'não definida'; $('t45-q').textContent = 'cos α = 0'; $('t45-h').textContent = 'O prolongamento do raio é paralelo à reta t: não há ponto T.'; return; }
    var e = exato(r.t); $('t45-v').textContent = (e ? e + ' ≈ ' : '') + pt(r.t, 3); $('t45-q').textContent = pt(r.s, 3) + ' ÷ ' + pt(r.c, 3);
    $('t45-h').textContent = Math.abs(r.t) > 1.6 ? 'T está fora da janela do desenho: a tangente cresce rápido perto de 90° e 270°.' : (r.t > 0 ? 'T acima do eixo x: tangente positiva.' : r.t < 0 ? 'T abaixo do eixo x: tangente negativa.' : 'T em A: tangente 0.'); });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Tangente de um arco', accent: 'decay', icon: 'wave',
  aulas: [['Aula 45', 'Tangente de um arco: eixo das tangentes e sinais', 'aula-1-tangente-de-um-arco.html']],
  pendente: true
}, pages };
