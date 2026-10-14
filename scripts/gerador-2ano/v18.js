// Unidade v18 — Arcos, graus e radianos (aulas 39 e 40 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'arcos-graus-radianos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v18', BRAND = 'Arcos, graus e radianos';
const gcdJS = String.raw`
  function gcd(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ var t = b; b = a % b; a = t; } return a; }
  function fracPi(deg){ var g = gcd(deg, 180); if(deg === 0) return '0'; var n = deg / g, d = 180 / g; return (n === 1 ? '' : n) + 'π' + (d === 1 ? '' : '/' + d); }
`;

// ===================== AULA 39: arcos e unidades =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 39', h1: 'Arcos de circunferência: <span style="color:var(--primary);">graus, radianos e comprimento</span>',
  sub: 'Ponteiros de relógio, marés, rodas-gigantes: tudo o que se repete em ciclos cabe em uma circunferência. Para estudá-los precisamos medir arcos e saber passar de graus para radianos.',
  badges: [['360° = 2π rad'], ['ℓ = α · r', 'growth'], ['1 rad ≈ 57,3°', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do arco ao seu comprimento.', [
  ['Arco e ângulo central', 'uma parte da circunferência', 'bulb'],
  ['Grau', '1° é 1/360 da volta', 'target'],
  ['Radiano', 'arco do tamanho do raio', 'chart'],
  ['Conversão', 'π rad = 180°', 'link'],
  ['Comprimento', 'C = 2πr e ℓ = α · r', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer <strong>arco</strong> e <strong>ângulo central</strong> e a relação entre eles.',
  'Definir <strong>grau</strong> e <strong>radiano</strong> e <strong>converter</strong> entre as duas unidades.',
  'Calcular o <strong>comprimento de uma circunferência</strong> e de um <strong>arco</strong>.'
], 'Dica', 'Guarde uma única ideia: <strong>meia volta é $180°$ ou $π$ rad</strong>. Todo o resto sai de regra de três com essa igualdade.', 'primary'));

a.push(sl('Para início de conversa', 'A ponta do ponteiro percorre um arco', `
          ${lede('O ponteiro dos minutos de um relógio mede $12$ cm. Em $20$ minutos, sua ponta percorre <strong>uma parte</strong> da circunferência: um <strong>arco</strong>. A volta inteira leva $60$ minutos e corresponde a $360°$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Arco AB', W.svg('i39-s', '0 0 340 220', '300px'))}
            ${mini('Em 20 minutos, o ponteiro gira quantos graus?', ['$60°$', '$90°$', '$120°$', '$180°$'], 2, '$20$ min é $20 ÷ 60 = 1 ÷ 3$ da volta: $360° ÷ 3 = 120°$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · grau e radiano', 'Duas unidades para o mesmo arco', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O <strong>arco</strong> $AB$ é a parte da circunferência entre $A$ e $B$; o <strong>ângulo central</strong> $α$ o enxerga a partir do centro. A medida angular do arco é a de $α$.</li>
                <li><strong>Grau:</strong> $1°$ é o arco de $1 ÷ 360$ da circunferência.</li>
                <li><strong>Radiano:</strong> $1$ rad é o arco cujo comprimento é igual ao do <strong>raio</strong>.</li>
                <li>A circunferência tem $360°$ ou $2π$ rad; logo $π$ rad $= 180°$.</li>
                <li>Conversão: $graus ÷ 180 = radianos ÷ π$.</li>
              </ul>
            </div>
            ${W.box('Arco, raio e comprimento', W.row(W.rg('a39-g', 'Ângulo central', 0, 360, 1, 120, '°'), W.nm('a39-r', 'Raio (cm)', 12, 'any', 'min="0.1"')) + W.svg('a39-s', '0 0 340 220', '300px') + W.txt('a39-d', 'Em radianos: ') + W.txt('a39-l', 'Comprimento do arco: ') + W.hint('a39-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Arcos notáveis em graus e em radianos', `
          <div class="grid2">
            ${tbl(['Graus', '0°', '30°', '45°', '60°', '90°'], [['Radianos', '0', '$ {π|6}$', '$ {π|4}$', '$ {π|3}$', '$ {π|2}$']])}
            ${tbl(['Graus', '180°', '270°', '360°'], [['Radianos', '$π$', '$ {3π|2}$', '$2π$']])}
          </div>
          <p class="hint" style="margin-top:8px;">Para converter qualquer ângulo: multiplique os graus por $π ÷ 180$ (para radianos) ou os radianos por $180 ÷ π$ (para graus).</p>`, { cls: '' }));

a.push(sl('Teoria · comprimentos', 'Circunferência e arco', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Circunferência:</strong> $C = 2πr = πd$, com $r$ o raio e $d$ o diâmetro. Unidade: a mesma do raio.</li>
                <li><strong>Arco de $θ$ graus:</strong> $ℓ = {θ|360} · 2πr$.</li>
                <li><strong>Arco de $α$ radianos:</strong> $ℓ = α · r$ (direto, sem $π$ extra).</li>
                <li>O ângulo em radianos é a <strong>razão</strong> $α = ℓ ÷ r$: por isso o radiano não tem unidade.</li>
              </ul>
            </div>
            ${callout('Exemplo rápido', 'Em um círculo de raio $5$ cm, um arco de $2$ rad mede $2 · 5 = 10$ cm, sem precisar de $π$.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'De graus para radianos', 'Expresse $250°$ em radianos.', [
  ['Regra de três', '$250° → x$ e $180° → π$ rad.'],
  ['Cálculo', '$x = {250π|180} = {25π|18}$.']
], '$250° = {25π|18}$ rad ($≈ 4,36$ rad).'));
a.push(exemplo('Exemplo resolvido', 'A roda-gigante', 'Uma roda-gigante tem $20$ m de raio e gira $72°$. Quanto uma cabine percorre? (use $π ≈ 3,14$)', [
  ['Fração da volta', '$72° ÷ 360° = 1 ÷ 5$ da circunferência.'],
  ['Circunferência', '$C = 2 · 3,14 · 20 = 125,6$ m.'],
  ['Arco', '$ℓ = 125,6 ÷ 5 = 25,12$ m.']
], 'A cabine percorre cerca de $25,1$ m.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O ponteiro dos minutos', 'A ponta de um ponteiro de $12$ cm percorre quanto em $20$ minutos? (use $π ≈ 3,14$)', [
  ['Ângulo', '$20$ min correspondem a $120°$ (um terço da volta).'],
  ['Arco', '$ℓ = {120|360} · 2 · 3,14 · 12 = {1|3} · 75,36$.'],
  ['Resultado', '$ℓ ≈ 25,1$ cm.']
], 'A ponta percorre cerca de $25,1$ cm.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Achar o raio', 'Um arco de $94,2$ cm corresponde a um ângulo central de $54°$. Qual o raio? (use $π ≈ 3,14$)', [
  ['Equação', '$94,2 = {54|360} · 2 · 3,14 · r = 0,942 · r$.'],
  ['Isolar r', '$r = 94,2 ÷ 0,942 = 100$.']
], 'O raio mede $100$ cm.', 'decay'));

a.push(pratique('Em radianos', 'O ângulo de $210°$ vale, em radianos:',
  ['${5π|6}$', '${7π|6}$', '${4π|3}$', '${3π|2}$'].map(t => t.replace('${', '$ {')), 1, '$210 ÷ 180 = 7 ÷ 6$, logo $7π ÷ 6$. <strong>Alternativa B.</strong>'));
a.push(pratique('Em graus', 'O arco de $5π ÷ 6$ rad mede, em graus:',
  ['$120°$', '$135°$', '$150°$', '$210°$'], 2, '$5 · 180 ÷ 6 = 150°$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Arco em radianos', 'Em um círculo de raio $5$ cm, um arco de $2$ rad mede:',
  ['$2,5$ cm', '$7$ cm', '$10$ cm', '$10π$ cm'], 2, '$ℓ = α · r = 2 · 5 = 10$ cm. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Pista circular', 'Um atleta corre em uma pista circular de raio $50$ m e percorre um arco de $150°$. Usando $π ≈ 3,14$, a distância percorrida é, aproximadamente:',
  ['$65$ m', '$131$ m', '$157$ m', '$262$ m', '$314$ m'], 1, '$ℓ = {150|360} · 2 · 3,14 · 50 = {5|12} · 314 ≈ 130,8$ m. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde graus e radianos confundem', [
  ['Trocar $π$ por $180$ na conta', '$π$ rad vale $180°$, mas $π ≈ 3,14$ como número: não misture as duas leituras.'],
  ['Usar $ℓ = α · r$ com $α$ em graus', 'A fórmula direta exige radianos; com graus use $ℓ = {θ|360} · 2πr$.'],
  ['Calculadora na unidade errada', 'Funções trigonométricas: DEG para graus, RAD para radianos.'],
  ['Unidade do comprimento', 'O arco sai na <strong>mesma unidade do raio</strong>.']
]));
a.push(quiz([
  { q: 'A circunferência inteira mede, em radianos:', o: ['$π$', '$2π$', '$π ÷ 2$', '$360$'], a: 1 },
  { q: '$90°$ valem, em radianos:', o: ['$π ÷ 4$', '$π ÷ 3$', '$π ÷ 2$', '$π$'], a: 2 },
  { q: 'Um arco com o comprimento do raio mede:', o: ['$1°$', '$1$ rad', '$π$ rad', '$2π$ rad'], a: 1 },
  { q: 'O comprimento de uma circunferência de raio $r$ é:', o: ['$πr$', '$2πr$', '$πr^{2}$', '$2r$'], a: 1 }
]));
a.push(fechamento([
  ['Duas unidades', 'Volta inteira: $360°$ ou $2π$ rad; $π$ rad $= 180°$.'],
  ['Conversão', 'Regra de três com $π ↔ 180$.'],
  ['Comprimentos', '$C = 2πr$; arco $ℓ = α · r$ ($α$ em rad) ou $ℓ = {θ|360} · 2πr$.']
], 'Medir arcos em graus ou radianos abre a porta da circunferência trigonométrica. Próxima aula: conversões e problemas.'));

// ===================== AULA 40: conversões e problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 40', h1: 'Radianos na prática: <span style="color:var(--primary);">converter e resolver problemas</span>',
  sub: 'A matemática é a linguagem que as ciências da natureza têm em comum. Nesta aula você aprende a “traduzir” ângulos entre graus e radianos com rapidez e a usar isso em problemas de arcos e setores.',
  badges: [['x° ↔ y rad'], ['regra de três', 'growth'], ['setor circular', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Da regra de três ao perímetro de um setor.', [
  ['Relembrar', 'volta inteira e meia volta', 'bulb'],
  ['Converter', 'graus e radianos, de dois jeitos', 'target'],
  ['Simplificar', 'frações de π', 'chart'],
  ['Aproximar', 'π ≈ 3,14 em problemas numéricos', 'link'],
  ['Setor circular', 'perímetro de uma “pizza”', 'scale']
]));
b.push(objetivosSlide([
  '<strong>Converter</strong> ângulos entre graus e radianos, pela regra de três e por fração de $π$.',
  'Resolver problemas com <strong>valores aproximados</strong> de $π$.',
  'Calcular o <strong>perímetro de um setor circular</strong> usando o radiano.'
], 'Dica', 'Simplifique <strong>antes de multiplicar</strong>: $x° → {x|180}π$ rad. Corte os fatores comuns, como em $225° → {225|180}π = {5|4}π$.', 'primary'));

b.push(sl('Para início de conversa', 'Quantas “línguas” fala um círculo?', `
          ${lede('A circunferência “fala” graus (de $0°$ a $360°$) e radianos (de $0$ a $2π$). As duas descrevem o mesmo giro, e precisamos <strong>traduzir</strong> de uma para a outra o tempo todo: no GPS, em engrenagens, em satélites.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Tradutor', W.row(W.nm('i40-g', 'Graus', 135, 'any')) + W.txt('i40-r', 'Em radianos (fração de π): ') + W.txt('i40-d', 'Em radianos (decimal): '))}
            ${mini('$135°$ valem, em radianos:', ['$ {π|4}$', '$ {π|2}$', '$ {3π|4}$', '$ {5π|4}$'], 2, '$135 ÷ 180 = 3 ÷ 4$: $ {3π|4}$ rad.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · conversão', 'Regra de três ou fórmula direta', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Regra de três:</strong> $360° ↔ 2π$ rad, ou simplificando, $180° ↔ π$ rad.</li>
                <li><strong>Graus → radianos:</strong> $α_{rad} = {θ°|180} · π$.</li>
                <li><strong>Radianos → graus:</strong> $θ° = {α_{rad}|π} · 180$. Se $α$ vem com $π$, basta trocar $π$ por $180°$: $ {3π|4} → 3 · 180° ÷ 4 = 135°$.</li>
                <li>Para valores sem $π$, use $π ≈ 3,14$: $1$ rad $≈ 180 ÷ 3,14 ≈ 57,3°$.</li>
              </ul>
            </div>
            ${W.box('Radianos para graus', W.row(W.nm('i40-x', 'Radianos', 1, 'any')) + W.txt('i40-y', 'Em graus: ') + W.hint('i40-h'))}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Para radianos, simplificando', 'Converta $120°$, $225°$ e $300°$ para radianos.', [
  ['120°', '$ {120|180} = {2|3}$ ⇒ $ {2π|3}$ rad.'],
  ['225°', '$ {225|180} = {5|4}$ ⇒ $ {5π|4}$ rad.'],
  ['300°', '$ {300|180} = {5|3}$ ⇒ $ {5π|3}$ rad.']
], '$ {2π|3}$, $ {5π|4}$ e $ {5π|3}$ rad.'));
b.push(exemplo('Exemplo resolvido', 'Para graus', 'Converta $ {7π|4}$ rad e $ {π|12}$ rad para graus.', [
  ['$7π ÷ 4$', 'Troque $π$ por $180°$: $7 · 180° ÷ 4 = 315°$.'],
  ['$π ÷ 12$', '$180° ÷ 12 = 15°$.']
], '$315°$ e $15°$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Radianos sem π', 'Quantos graus mede, aproximadamente, um ângulo de $0,21$ rad? (use $π ≈ 3,14$)', [
  ['Regra de três', '$π$ rad $↔ 180°$ ⇒ $0,21$ rad $↔ x$.'],
  ['Cálculo', '$x = {0,21 · 180|3,14} = {37,8|3,14} ≈ 12,04°$.']
], 'Cerca de $12°$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Perímetro de um setor circular', 'Um jogo eletrônico tem um personagem em forma de setor circular de raio $3$ cm, com uma “boca” de abertura $2$ rad. Qual o perímetro dele? (use $π ≈ 3,14$)', [
  ['Arco restante', 'A circunferência inteira tem $2π$ rad; sobram $2π − 2$ rad: $ℓ = 3 · (2π − 2) = 6π − 6$.'],
  ['Mais os dois raios', 'A boca cria dois segmentos de $3$ cm: $+ 6$.'],
  ['Perímetro', '$P = 6π − 6 + 6 = 6π ≈ 18,84$ cm.']
], 'O perímetro é $6π ≈ 18,8$ cm.', 'decay'));

b.push(pratique('Para radianos', 'O ângulo de $300°$ vale, em radianos:',
  ['$ {3π|2}$', '$ {5π|4}$', '$ {5π|3}$', '$ {11π|6}$'], 2, '$300 ÷ 180 = 5 ÷ 3$: $5π ÷ 3$. <strong>Alternativa C.</strong>'));
b.push(pratique('Para graus', 'O ângulo de $ {7π|6}$ rad mede, em graus:',
  ['$150°$', '$180°$', '$210°$', '$240°$'], 2, '$7 · 180 ÷ 6 = 210°$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Radiano sem π', 'Um ângulo de $0,105$ rad mede, aproximadamente: (use $π ≈ 3,14$)',
  ['$2°$', '$4°$', '$6°$', '$8°$'], 2, '$0,105 · 180 ÷ 3,14 ≈ 6,0°$. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(estiloEnem('Roleta de gincana', 'Uma roleta é dividida em $12$ setores iguais, a partir de uma linha inicial. Ao girá-la $1850°$ no sentido anti-horário, em qual setor (numerado a partir de $1$ no sentido do giro) ela para?',
  ['setor 1', 'setor 2', 'setor 3', 'setor 6', 'setor 8'], 1, '$1850 = 5 · 360 + 50$: sobram $50°$. Cada setor mede $30°$: $50 ÷ 30 ≈ 1,7$, logo está no <strong>2º setor</strong>. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as conversões erram', [
  ['Frações sem simplificar', '$ {225π|180}$ está certo, mas $ {5π|4}$ é a resposta final esperada.'],
  ['Trocar o sentido da conversão', 'Graus → radianos multiplica por $ {π|180}$; radianos → graus multiplica por $ {180|π}$.'],
  ['Misturar π simbólico e decimal', 'Em problemas numéricos, escolha uma versão e use sempre ela.'],
  ['Esquecer os raios no perímetro', 'O perímetro de um setor soma o <strong>arco mais os dois raios</strong>.']
]));
b.push(quiz([
  { q: '$ {π|3}$ rad equivalem a:', o: ['$30°$', '$45°$', '$60°$', '$90°$'], a: 2 },
  { q: '$315°$ valem, em radianos:', o: ['$ {5π|4}$', '$ {7π|4}$', '$ {3π|2}$', '$ {11π|6}$'], a: 1 },
  { q: '$1$ rad é, aproximadamente:', o: ['$3,14°$', '$57,3°$', '$90°$', '$180°$'], a: 1 },
  { q: 'O perímetro de um setor de raio $r$ e ângulo $α$ rad é:', o: ['$α · r$', '$α · r + 2r$', '$πr^{2}$', '$2πr$'], a: 1 }
]));
b.push(fechamento([
  ['Converter', 'Graus → rad: $ {θ|180}π$; rad → graus: troque $π$ por $180°$.'],
  ['Aproximar', '$1$ rad $≈ 57,3°$; $π ≈ 3,14$ em problemas numéricos.'],
  ['Setor', 'Perímetro $= α · r + 2r$ (arco mais dois raios).']
], 'Graus e radianos falam a mesma língua. Próxima aula: a circunferência trigonométrica e os arcos côngruos.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-arcos-comprimento.html', html: K.deck({
  title: 'Arcos de circunferência: graus, radianos e comprimento — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 39 · Arcos, graus e radianos', slides: a,
  extra: WJS + BIND + T.TJS + gcdJS + String.raw`
  arcoW($('i39-s'), 120);
  bind(['a39-g', 'a39-r'], function(){ var g = +$('a39-g').value, r = +$('a39-r').value; $('a39-gv').textContent = g;
    arcoW($('a39-s'), g); if(!(r > 0)){ $('a39-d').textContent = '—'; $('a39-l').textContent = '—'; return; }
    var rd = g * Math.PI / 180, l = rd * r; $('a39-d').textContent = pt(g) + '° = ' + fracPi(Math.round(g)) + ' rad ≈ ' + pt(rd, 3) + ' rad';
    $('a39-l').textContent = pt(l, 2) + ' cm'; $('a39-h').textContent = 'ℓ = α · r = ' + pt(rd, 3) + ' · ' + pt(r, 1) + '; circunferência inteira: ' + pt(2 * Math.PI * r, 2) + ' cm.'; });`
}) });
pages.push({ out: BASE + 'aula-2-conversoes-e-problemas.html', html: K.deck({
  title: 'Graus e radianos: conversões e problemas — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 40 · Conversões e problemas', slides: b,
  extra: WJS + BIND + T.TJS + gcdJS + String.raw`
  bind(['i40-g'], function(){ var g = +$('i40-g').value; if(!isFinite(g)){ $('i40-r').textContent = '—'; $('i40-d').textContent = ''; return; }
    var gi = Math.round(g * 1000) / 1000; $('i40-r').textContent = Number.isInteger(gi) ? fracPi(gi) + ' rad' : '(não inteiro)'; $('i40-d').textContent = pt(g * Math.PI / 180, 4) + ' rad'; });
  bind(['i40-x'], function(){ var x = +$('i40-x').value; if(!isFinite(x)){ $('i40-y').textContent = '—'; return; }
    $('i40-y').textContent = pt(x * 180 / Math.PI, 2) + '°'; $('i40-h').textContent = pt(x) + ' rad · 180 ÷ π ≈ ' + pt(x * 180 / Math.PI, 2) + '°. Um radiano é cerca de 57,3°.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Arcos, graus e radianos', accent: 'success', icon: 'curve-up',
  aulas: [['Aula 39', 'Arcos de circunferência: graus, radianos e comprimento', 'aula-1-arcos-comprimento.html'], ['Aula 40', 'Conversões entre graus e radianos', 'aula-2-conversoes-e-problemas.html']],
  pendente: true
}, pages };
