// Unidade v19 — Circunferência trigonométrica e arcos côngruos (aulas 41 e 42 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'arcos-congruos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v19', BRAND = 'Circunferência trigonométrica e arcos côngruos';
const UTIL = String.raw`
  function gcd(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ var t = b; b = a % b; a = t; } return a; }
  function fracPi(deg){ var g = gcd(deg, 180); if(deg === 0) return '0'; var n = deg / g, d = 180 / g; return (n === 1 ? '' : n) + 'π' + (d === 1 ? '' : '/' + d); }
  function quadrante(d){ if(d === 0) return 'sobre o eixo x (0°)'; if(d === 90) return 'sobre o eixo y (90°)'; if(d === 180) return 'sobre o eixo x (180°)'; if(d === 270) return 'sobre o eixo y (270°)'; return d < 90 ? '1º quadrante' : d < 180 ? '2º quadrante' : d < 270 ? '3º quadrante' : '4º quadrante'; }
`;

// ===================== AULA 41: circunferência trigonométrica e arcos côngruos =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 41', h1: 'A circunferência trigonométrica: <span style="color:var(--primary);">voltas que levam ao mesmo lugar</span>',
  sub: 'Na roda-gigante, dar uma volta a mais não muda o ponto onde você para. Para estudar esse tipo de movimento criamos um modelo: a circunferência de raio 1, com origem dos arcos em A e sentido anti-horário positivo.',
  badges: [['raio = 1'], ['4 quadrantes', 'growth'], ['α + k · 360°', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do modelo à família de arcos côngruos.', [
  ['O modelo', 'circunferência de raio 1 no plano cartesiano', 'bulb'],
  ['Convenções', 'origem em A e sentido anti-horário positivo', 'target'],
  ['Quadrantes', 'I, II, III e IV', 'chart'],
  ['Arcos côngruos', 'mesma extremidade, voltas diferentes', 'link'],
  ['1ª determinação', 'o arco entre 0° e 360°', 'scale']
]));
a.push(objetivosSlide([
  'Descrever a <strong>circunferência trigonométrica</strong>: raio $1$, origem dos arcos em $A(1, 0)$, sentido anti-horário positivo.',
  'Localizar arcos nos <strong>quadrantes</strong> e converter entre <strong>graus e radianos</strong>.',
  'Reconhecer <strong>arcos côngruos</strong> e escrever sua <strong>expressão geral</strong> ($α + k · 360°$ ou $α + 2kπ$).'
], 'Dica', 'Para saber onde um arco termina, <strong>divida por $360°$ e fique com o resto</strong>: o resto é a primeira determinação positiva.', 'primary'));

a.push(sl('Para início de conversa', 'A roda-gigante e a posição final', `
          ${lede('Você entra em uma cabine da roda-gigante e dá <strong>uma volta completa</strong>: volta ao mesmo ponto. Dá mais uma volta: mesmo ponto de novo. E meia volta? Muda. Muitas voltas diferentes levam ao <strong>mesmo lugar</strong>, e é isso que a circunferência trigonométrica descreve.')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figCirc({ deg: 60, w: 280, h: 250, mostra: [], quadrantes: true })}
            ${mini('Depois de duas voltas e mais $60°$, a cabine está em qual ponto?', ['no ponto de partida', 'no ponto de $60°$', 'no ponto de $120°$', 'no ponto de $780°$ e outro diferente'], 1, 'Duas voltas ($720°$) não mudam a posição: $780° = 720° + 60°$ termina no mesmo ponto de $60°$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · o modelo', 'Circunferência trigonométrica', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Circunferência de <strong>raio $1$</strong>, centro $O$ na origem do plano cartesiano.</li>
                <li><strong>Origem dos arcos:</strong> o ponto $A(1, 0)$, que marca $0°$.</li>
                <li><strong>Sentido positivo:</strong> anti-horário; sentido horário dá medidas negativas.</li>
                <li><strong>Quadrantes:</strong> I ($0°$ a $90°$), II ($90°$ a $180°$), III ($180°$ a $270°$), IV ($270°$ a $360°$).</li>
                <li>Pontos dos eixos: $0° = 0$, $90° = {π|2}$, $180° = π$, $270° = {3π|2}$, $360° = 2π$.</li>
              </ul>
            </div>
            ${W.box('Giro do arco', W.row(W.rg('e41-g', 'Arco', -1080, 1080, 15, 420, '°')) + W.svg('e41-s', '0 0 340 230', '320px') + W.txt('e41-v', 'Voltas completas: ') + W.txt('e41-d', '1ª determinação positiva: ') + W.txt('e41-q', 'Extremidade: ') + W.hint('e41-h'))}
          </div>`.replace('${π|2}', '$ {π|2}').replace('${3π|2}', '$ {3π|2}'), { cls: '' }));

a.push(sl('Teoria · arcos côngruos', 'Mesma extremidade, medidas diferentes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um mesmo ponto $B$ da circunferência é extremidade de <strong>infinitos arcos</strong>: um para cada número de voltas.</li>
                <li>Esses arcos são <strong>côngruos</strong>. Se um deles mede $α$, todos valem:</li>
              </ul>
              <p class="formula big" style="margin:6px 0;">$α + k · 360°$ &nbsp; ou &nbsp; $α + k · 2π$ &nbsp; ($k ∈ ℤ$)</p>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$k > 0$: voltas no sentido anti-horário; $k < 0$: no horário.</li>
                <li>Arco entre $0°$ e $360°$: <strong>1ª determinação positiva</strong>.</li>
              </ul>
            </div>
            ${tbl(['Volta', 'Arco', 'Côngruo'], [['1ª', '$60°$', '$α$'], ['2ª', '$60° + 360° = 420°$', '$α + 1 · 360°$'], ['3ª', '$60° + 720° = 780°$', '$α + 2 · 360°$'], ['4ª', '$60° + 1080° = 1140°$', '$α + 3 · 360°$']])}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Verificar se dois arcos são côngruos', 'Os arcos $1110°$ e $−330°$ são côngruos?', [
  ['1ª determinação de 1110°', '$1110 ÷ 360 = 3$, resto $30$: $1110° = 30° + 3 · 360°$.'],
  ['1ª determinação de −330°', '$−330° + 360° = 30°$: $−330° = 30° − 1 · 360°$.'],
  ['Conclusão', 'Os dois têm a primeira determinação $30°$: terminam no mesmo ponto.']
], 'Sim: são côngruos ($α = 30°$, com $k = 3$ e $k = −1$).'));
a.push(exemplo('Exemplo resolvido', 'Côngruos em radianos', 'Mostre que $ {19π|3}$ e $ {−5π|3}$ são côngruos.', [
  ['Separar as voltas', '$ {19π|3} = {π|3} + {18π|3} = {π|3} + 6π = {π|3} + 3 · 2π$.'],
  ['O outro arco', '$ {−5π|3} = {π|3} − {6π|3} = {π|3} − 2π$.'],
  ['Conclusão', 'Ambos são $ {π|3}$ mais um número inteiro de voltas.']
], 'São côngruos, e a 1ª determinação positiva é $ {π|3}$ ($60°$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Arcos negativos', 'Em que quadrante termina o arco de $−100°$ e qual é a sua 1ª determinação positiva?', [
  ['Sentido horário', '$−100°$ gira $100°$ no sentido horário a partir de $A$.'],
  ['Somar uma volta', '$−100° + 360° = 260°$.'],
  ['Quadrante', '$260°$ está entre $180°$ e $270°$: 3º quadrante.']
], '1ª determinação: $260°$, no 3º quadrante.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Expressão geral', 'Escreva a expressão geral dos arcos côngruos a $45°$, em graus e em radianos.', [
  ['Em graus', '$45° + k · 360°$, com $k ∈ ℤ$.'],
  ['Em radianos', '$45° = {π|4}$ rad: $ {π|4} + 2kπ$, com $k ∈ ℤ$.']
], '$45° + k · 360°$ ou $ {π|4} + 2kπ$.', 'decay'));

a.push(pratique('Em que quadrante?', 'O arco de $500°$ termina no:',
  ['1º quadrante', '2º quadrante', '3º quadrante', '4º quadrante'], 1, '$500° = 360° + 140°$ e $140°$ está entre $90°$ e $180°$: 2º quadrante. <strong>Alternativa B.</strong>'));
a.push(pratique('Côngruo a 70°', 'Qual destes arcos é côngruo a $70°$?',
  ['$430°$', '$110°$', '$−70°$', '$250°$'], 0, '$430° = 70° + 360°$. <strong>Alternativa A.</strong>', '', 'growth'));
a.push(pratique('Primeira determinação', 'A 1ª determinação positiva de $−1 110°$ é:'.replace(' ', ''),
  ['$30°$', '$210°$', '$330°$', '$150°$'], 2, '$−1110° + 4 · 360° = −1110° + 1440° = 330°$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Carrossel', 'Um carrossel gira $2 570°$ a partir da posição inicial no sentido anti-horário. Seu giro equivale a quantas voltas completas e a que ângulo adicional?'.split(' ').join(''),
  ['6 voltas e $50°$', '7 voltas e $40°$', '7 voltas e $50°$', '7 voltas e $60°$', '8 voltas e $50°$'], 2, '$2570 ÷ 360 = 7$ com resto $50$: $7 · 360 = 2520$ e $2570 − 2520 = 50$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os arcos côngruos enganam', [
  ['Sentido errado', 'Arcos negativos giram no sentido <strong>horário</strong>. Para voltar ao intervalo $[0°, 360°)$, some voltas.'],
  ['Resto da divisão', 'A 1ª determinação é o <strong>resto</strong> da divisão por $360$, não o quociente.'],
  ['Misturar unidades', 'Em radianos some $2π$ (não $360$) a cada volta.'],
  ['Quadrante do resto', 'Classifique o <strong>resto</strong> (a 1ª determinação), não o arco original.']
]));
a.push(quiz([
  { q: 'O sentido positivo na circunferência trigonométrica é:', o: ['horário', 'anti-horário', 'vertical', 'qualquer um'], a: 1 },
  { q: 'O arco de $360°$ equivale a:', o: ['$π$', '$2π$', '$π ÷ 2$', '$4π$'], a: 1 },
  { q: 'O arco de $780°$ é côngruo a:', o: ['$60°$', '$120°$', '$300°$', '$780°$ é a 1ª determinação'], a: 0 },
  { q: 'A expressão geral dos arcos côngruos a $α$ (em graus) é:', o: ['$α + k$', '$α · 360°$', '$α + k · 360°$', '$α + 180°$'], a: 2 }
]));
a.push(fechamento([
  ['O modelo', 'Raio $1$, origem em $A$, anti-horário positivo, quatro quadrantes.'],
  ['Côngruos', 'Mesma extremidade: $α + k · 360°$ ou $α + 2kπ$.'],
  ['1ª determinação', 'O resto da divisão por $360°$ (ou por $2π$).']
], 'A circunferência trigonométrica organiza todos os giros possíveis. Próxima aula: problemas com arcos côngruos.'));

// ===================== AULA 42: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 42', h1: 'Arcos côngruos em ação: <span style="color:var(--primary);">giros, roletas e manobras</span>',
  sub: 'Um skatista curitibano completou manobras de 900° e de 1080° no ar. Quantas voltas são? Onde ele termina? Resolver problemas assim é aplicar arcos côngruos.',
  badges: [['voltas completas'], ['1ª determinação', 'growth'], ['quadrante', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('De um giro qualquer ao ponto de chegada.', [
  ['Informações', 'o que é dado e o que se pede', 'bulb'],
  ['Divisão por 360°', 'quociente = voltas, resto = ponto final', 'target'],
  ['Quadrante', 'onde o arco termina', 'chart'],
  ['Radianos', 'o mesmo arco em outra unidade', 'link'],
  ['Situações', 'roleta, manobra, ponteiro', 'scale']
]));
b.push(objetivosSlide([
  'Calcular o <strong>número de voltas</strong> e a <strong>1ª determinação positiva</strong> de um arco.',
  'Indicar o <strong>quadrante</strong> em que um giro termina e escrever o arco em <strong>radianos</strong>.',
  'Resolver <strong>situações-problema</strong> de giros (roletas, manobras, engrenagens).'
], 'Dica', 'Todo problema de giro resolve-se com <strong>uma divisão por $360$</strong>: o quociente conta as voltas e o resto diz onde o ponto para.', 'primary'));

b.push(sl('Para início de conversa', 'Quantas voltas tem uma manobra de 900°?', `
          ${lede('Em manobras de skate no ar, fala-se em $900°$ e até $1080°$. Quantas voltas são? $900° = 2 · 360° + 180°$: <strong>duas voltas e meia</strong>. $1080° = 3 · 360°$: <strong>três voltas</strong> exatas.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Giro livre', W.row(W.nm('p42-g', 'Arco (°)', 1690, 1)) + W.svg('p42-s', '0 0 340 230', '320px') + W.txt('p42-v', 'Voltas completas: ') + W.txt('p42-d', '1ª determinação: ') + W.txt('p42-q', 'Termina em: ') + W.txt('p42-r', 'Em radianos: '))}
            ${mini('Uma manobra de $1080°$ termina em relação ao ponto de partida:', ['no mesmo ponto', 'a meia-volta dele', 'a um quarto de volta', 'a três quartos de volta'], 0, '$1080° = 3 · 360°$: três voltas completas, de volta ao ponto de partida.')}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Um móvel em uma pista circular', 'Um móvel percorre um arco de $1690°$ na circunferência trigonométrica, partindo de $A$. Quantas voltas completas dá, em que quadrante para e qual o arco em radianos?', [
  ['Informações', 'Arco de $1690°$; pedem-se voltas, quadrante e radianos.'],
  ['Divisão', '$1690 ÷ 360 = 4$, resto $250$: $1690° = 250° + 4 · 360°$.'],
  ['Quadrante', '$250°$ está entre $180°$ e $270°$: 3º quadrante.'],
  ['Radianos', '$ {1690|180}π = {169π|18}$ rad.']
], '4 voltas completas, 3º quadrante e $ {169π|18}$ rad.'));
b.push(exemplo('Exemplo resolvido', 'Arco negativo grande', 'Qual a 1ª determinação positiva de $−1110°$ e em que quadrante ela termina?', [
  ['Quantas voltas somar', '$1110 ÷ 360 = 3,08…$: some $4$ voltas ($1440°$).'],
  ['Cálculo', '$−1110° + 1440° = 330°$.'],
  ['Quadrante', '$330°$ está entre $270°$ e $360°$: 4º quadrante.']
], '$330°$, no 4º quadrante.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Roleta com doze setores', 'Uma roleta com $12$ setores iguais (de $30°$) tem o primeiro setor entre $0°$ e $30°$. Em qual setor ela para se girar $2 350°$ no sentido anti-horário?'.split(' ').join(''), [
  ['1ª determinação', '$2350 ÷ 360 = 6$, resto $190$: $2350° = 190° + 6 · 360°$.'],
  ['Setor', '$190 ÷ 30 ≈ 6,3$: está no <strong>7º setor</strong> ($180°$ a $210°$).']
], 'A roleta para no 7º setor.', 'decay'));
b.push(exemplo('Exemplo resolvido', 'Expressão geral em radianos', 'Escreva a expressão geral dos arcos côngruos a $ {7π|3}$ e dê a 1ª determinação positiva.', [
  ['Retirar voltas', '$ {7π|3} = {π|3} + {6π|3} = {π|3} + 2π$.'],
  ['1ª determinação', '$ {π|3}$ (que é $60°$).'],
  ['Expressão geral', '$ {π|3} + 2kπ$, com $k ∈ ℤ$.']
], '$ {π|3} + 2kπ$, com 1ª determinação $ {π|3}$.', 'growth'));

b.push(pratique('Voltas e resto', 'O arco de $3500°$ equivale a:',
  ['8 voltas e $350°$', '9 voltas e $260°$', '8 voltas e $260°$', '9 voltas e $350°$'], 1, '$3500 ÷ 360 = 9$ com resto $3500 − 3240 = 260$. <strong>Alternativa B.</strong>'));
b.push(pratique('Expressão geral', 'A expressão geral dos arcos côngruos a $ {π|6}$ é:',
  ['$ {π|6} + kπ$', '$ {π|6} + 2kπ$', '$ {π|6} + 360k$', '$ {π|6} · k$'], 1, 'Em radianos, cada volta soma $2π$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Quadrante', 'O arco de $−45°$ termina no:',
  ['1º quadrante', '2º quadrante', '3º quadrante', '4º quadrante'], 3, '$−45° + 360° = 315°$, entre $270°$ e $360°$: 4º quadrante. <strong>Alternativa D.</strong>', '', 'decay'));
b.push(estiloEnem('Engrenagem', 'Uma engrenagem gira $1 980°$. Ao final, em relação à posição inicial, ela está deslocada de quantos graus (1ª determinação positiva)?'.split(' ').join(''),
  ['$60°$', '$120°$', '$180°$', '$240°$', '$300°$'], 2, '$1980 = 5 · 360 + 180$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de giro enganam', [
  ['Contar a última volta incompleta', 'Voltas <strong>completas</strong> são só o quociente da divisão; o resto não é uma volta.'],
  ['Girar no sentido errado', 'Arcos negativos vão no sentido horário; confira o sinal antes de somar voltas.'],
  ['Setor ou quadrante errado', 'Use a 1ª determinação e compare com os limites $90°$, $180°$, $270°$.'],
  ['Radianos incompletos', 'Para dar o arco em radianos use $ {θ|180}π$ no arco <strong>original</strong>.']
]));
b.push(quiz([
  { q: 'A manobra de $900°$ tem quantas voltas completas?', o: ['1', '2', '2,5', '3'], a: 1 },
  { q: 'A 1ª determinação positiva de $−90°$ é:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 2 },
  { q: 'O arco de $1500°$ termina no quadrante:', o: ['1º', '2º', '3º', '4º'], a: 0 },
  { q: 'Dois arcos são côngruos quando:', o: ['têm o mesmo seno', 'têm a mesma extremidade', 'têm o mesmo comprimento', 'somam $360°$'], a: 1 }
]));
b.push(fechamento([
  ['Divisão por 360°', 'Quociente = voltas completas; resto = 1ª determinação positiva.'],
  ['Quadrante', 'Compare o resto com $90°$, $180°$ e $270°$.'],
  ['Radianos', 'Arco $= {θ|180}π$; côngruos somam $2kπ$.']
], 'Com os arcos côngruos organizados, vamos calcular seno e cosseno de qualquer arco. Próxima aula: o seno na circunferência trigonométrica.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-circunferencia-trigonometrica.html', html: K.deck({
  title: 'Circunferência trigonométrica e arcos côngruos — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 41 · Circunferência trigonométrica', slides: a,
  extra: WJS + BIND + T.TJS + UTIL + String.raw`
  bind(['e41-g'], function(){ var g = +$('e41-g').value; $('e41-gv').textContent = g; var det = espiralW($('e41-s'), g);
    var tot = Math.abs(g), v = Math.floor(tot / 360);
    $('e41-v').textContent = v + (g < 0 ? ' (sentido horário)' : ''); $('e41-d').textContent = pt(det) + '° = ' + fracPi(det) + ' rad'; $('e41-q').textContent = quadrante(det);
    $('e41-h').textContent = 'Arco ' + pt(g) + '° = ' + pt(det) + '° + k · 360°, com k = ' + Math.round((g - det) / 360) + '.'; });`
}) });
pages.push({ out: BASE + 'aula-2-arcos-congruos-problemas.html', html: K.deck({
  title: 'Arcos côngruos: problemas — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 42 · Problemas com arcos côngruos', slides: b,
  extra: WJS + BIND + T.TJS + UTIL + String.raw`
  bind(['p42-g'], function(){ var g = Math.round(+$('p42-g').value); if(!isFinite(g)){ $('p42-s').innerHTML = ''; return; } var det = espiralW($('p42-s'), g), tot = Math.abs(g);
    $('p42-v').textContent = Math.floor(tot / 360) + (g < 0 ? ' (sentido horário)' : ''); $('p42-d').textContent = pt(det) + '°'; $('p42-q').textContent = quadrante(det);
    var g2 = gcd(g, 180); $('p42-r').textContent = (g === 0 ? '0' : (g / g2 === 1 ? '' : g / g2 === -1 ? '−' : pt(g / g2)) + 'π' + (180 / g2 === 1 ? '' : '/' + (180 / g2))) + ' rad'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Circunferência trigonométrica e arcos côngruos', accent: 'primary', icon: 'wave',
  aulas: [['Aula 41', 'Circunferência trigonométrica e arcos côngruos', 'aula-1-circunferencia-trigonometrica.html'], ['Aula 42', 'Arcos côngruos: giros, roletas e manobras', 'aula-2-arcos-congruos-problemas.html']],
  pendente: true
}, pages };
