// Unidade v20 — Cilindro: volume e problemas de área total e volume (aulas 54 a 56 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'cilindro-volume', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v20', BRAND = 'Cilindro: Volume', CAP = 'Aulas 54 a 56';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: volume =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 54 e 55', h1: 'Volume do cilindro: <span style="color:var(--primary);">área da base vezes a altura</span>',
  sub: 'Quanto de líquido cabe em uma lata, em uma caixa-d’água ou em um tubo? O cilindro obedece à mesma regra do prisma: o volume é a área da base multiplicada pela altura.',
  badges: [['V = πr²h'], ['mesma regra do prisma', 'growth'], ['1 dm³ = 1 L', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do prisma ao cilindro.', [
  ['Cavalieri', 'cilindro e prisma de mesma base e altura', 'bulb'],
  ['Fórmula', 'V = πr²h', 'target'],
  ['Capacidade', 'litros e mililitros', 'chart'],
  ['Escala', 'dobrar r ou h', 'link'],
  ['Aplicações', 'latas, reservatórios e tubos', 'scale']
]));
a.push(objetivosSlide([
  'Usar o <strong>princípio de Cavalieri</strong> para justificar $V_{cil} = A_B · h$.',
  'Calcular <strong>$V = π r^{2} h$</strong> e converter para <strong>litros</strong>.',
  'Prever o efeito de <strong>dobrar o raio ou a altura</strong>.',
  'Resolver problemas de <strong>capacidade</strong> de recipientes cilíndricos.'
], 'Dica', 'Raio ao <strong>quadrado</strong>: um erro frequente é esquecer de elevar o raio ao quadrado ou usar o diâmetro no lugar do raio.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A luminária de líquido', `
          ${lede('Leonor produz uma luminária com um compartimento cilíndrico de <strong>8 cm de diâmetro</strong> e <strong>20 cm de altura</strong>, cheio de líquido colorido. Quanto líquido cabe? (Use $π = 3$.)')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Passo', 'Cálculo'], [['Raio', '$r = 8 ÷ 2 = 4$ cm'], ['Área da base', '$3 · 4^{2} = 48$ cm²'], ['Volume', '$48 · 20 = 960$ cm³']])}
            ${mini('A capacidade do compartimento, em mL, é:', ['480', '640', '960', '1 920'], 2, '$V = πr^{2}h = 3 · 16 · 20 = 960$ cm³ $= 960$ mL (1 cm³ = 1 mL).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · volume do cilindro', 'V = πr²h', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Cavalieri:</strong> o cilindro e o prisma de mesma altura e bases de mesma área têm o mesmo volume.</li>
                <li><strong>$V = A_B · h = π r^{2} h$.</strong></li>
                <li><strong>Unidades:</strong> 1 cm³ $= 1$ mL · 1 dm³ $= 1$ L · 1 m³ $= 1\\ 000$ L.</li>
                <li><strong>Escala:</strong> $r$ dobra ⇒ $V$ <strong>×4</strong>; $h$ dobra ⇒ $V$ <strong>×2</strong>.</li>
                <li><strong>Altura do líquido:</strong> $h = V ÷ (πr^{2})$.</li>
              </ul>
            </div>
            ${W.box('Volume do cilindro (π = 3,14)', W.row(W.nm('vc-r', 'raio r', 3, 'any', 'min="0"'), W.nm('vc-h', 'altura h', 12, 'any', 'min="0"')) + W.txt('vc-b', 'Área da base = ') + W.txt('vc-v', 'Volume = ') + W.txt('vc-l', 'Capacidade (se r, h em cm): ') + W.hint('vc-hh'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Cilindro × prisma', `
          <div class="grid2">
            <div>${S.cilindro({ lr: 'r', lh: 'h', w: 240, h: 190 })}</div>
            <div>
              ${tbl(['Sólido', 'Volume'], [['Prisma', '$A_B · h$'], ['Cilindro', '$πr^{2} · h$'], ['Pirâmide', '$A_B · h ÷ 3$'], ['Cone (próxima aula)', '$πr^{2} · h ÷ 3$']])}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A luminária', 'Qual o volume do compartimento cilíndrico de 8 cm de diâmetro e 20 cm de altura? (Use $π = 3$.)', [
  ['Raio', '$r = 4$ cm.'],
  ['Volume', '$V = 3 · 4^{2} · 20 = 960$ cm³.']
], '$V = 960$ cm³ $= 0,96$ L.'));
a.push(exemplo('Exemplo resolvido', 'Caixa-d’água cilíndrica', 'Uma caixa-d’água cilíndrica tem raio 1 m e altura 1,5 m. Qual a capacidade em litros? (Use $π = 3$.)', [
  ['Volume', '$V = 3 · 1^{2} · 1,5 = 4,5$ m³.'],
  ['Litros', '$4,5 · 1\\ 000 = 4\\ 500$ L.']
], '<strong>4 500 L</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Lata de refrigerante', 'Uma lata tem raio 3 cm e altura 12 cm. Estime o volume. (Use $π = 3,14$.)', [
  ['Volume', '$V = 3,14 · 3^{2} · 12 = 339,12$ cm³.'],
  ['Em mL', '$≈ 339$ mL.']
], 'Cerca de <strong>339 mL</strong> (uma lata de 350 mL tem um pouco menos de líquido que o volume interno).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Efeito da escala', 'Um cilindro tem volume $V$. Qual o volume se o raio dobrar? E se a altura dobrar?', [
  ['Raio dobrado', '$π (2r)^{2} h = 4 π r^{2} h$ ⇒ <strong>$4V$</strong>.'],
  ['Altura dobrada', '$π r^{2} (2h) = 2V$.']
], '$4V$ e $2V$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Altura da água', 'Um tanque cilíndrico de raio 2 m recebe 12 560 L de água. Qual a altura da água? (Use $π = 3,14$.)', [
  ['Volume', '$12\\ 560$ L $= 12,56$ m³.'],
  ['Área da base', '$π r^{2} = 3,14 · 4 = 12,56$ m².'],
  ['Altura', '$h = 12,56 ÷ 12,56 = 1$ m.']
], 'A água atinge <strong>1 m</strong>.', 'growth'));

a.push(pratique('Volume', 'O volume de um cilindro de raio 4 cm e altura 20 cm, com $π = 3$, é:',
  ['480 cm³', '640 cm³', '960 cm³', '1 920 cm³', '3 840 cm³'], 2,
  '$3 · 16 · 20 = 960$. <strong>Alternativa C.</strong>'));
a.push(pratique('Capacidade', 'Uma caixa-d’água cilíndrica de raio 1 m e altura 1,5 m ($π = 3$) tem capacidade de:',
  ['450 L', '1 500 L', '4 500 L', '9 000 L', '13 500 L'], 2,
  '$4,5$ m³ $= 4\\ 500$ L. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Dobrando o raio', 'O raio da base de um cilindro é dobrado e a altura é mantida. O volume fica multiplicado por:',
  ['2', '4', '3', '6', '8'], 1,
  '$V = πr^{2}h$: com $2r$, o fator é $2^{2} = 4$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o volume do cilindro engana', [
  ['Esquecer o quadrado do raio', '$V = π r^{2} h$, e não $π r h$.'],
  ['Usar o diâmetro', 'Se o dado é o diâmetro, divida por 2 antes.'],
  ['Unidades', '1 cm³ $= 1$ mL; 1 m³ $= 1\\ 000$ L.'],
  ['Altura errada', '$h$ é a altura do cilindro (perpendicular às bases).']
]));
a.push(quiz([
  { q: 'O volume de um cilindro é:', o: ['$2πrh$', '$πr^{2}h$', '$πrh$', '$πr^{2}h ÷ 3$'], a: 1 },
  { q: 'Com $r = 2$, $h = 5$ e $π = 3$, o volume é:', o: ['30', '60', '120', '300'], a: 1 },
  { q: 'Dobrando o raio, o volume:', o: ['dobra', 'triplica', 'quadruplica', 'não muda'], a: 2 },
  { q: '1 dm³ equivale a:', o: ['1 mL', '1 L', '10 L', '100 L'], a: 1 }
]));
a.push(fechamento([
  ['Fórmula', '$V = πr^{2}h$.'],
  ['Escala', '$r$ ×2 ⇒ ×4; $h$ ×2 ⇒ ×2.'],
  ['Litros', '1 dm³ $= 1$ L.']
], 'Área do círculo vezes a altura: o cilindro cheio.'));

pages.push({ out: BASE + 'aula-1-volume-do-cilindro.html', html: K.deck({
  title: 'Volume do cilindro — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 54 e 55 · Volume do cilindro', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['vc-r', 'vc-h'], function(){ var r = +$('vc-r').value, h = +$('vc-h').value, PI = 3.14;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['vc-b', 'vc-v', 'vc-l'].forEach(function(i){ $(i).textContent = '—'; }); $('vc-hh').textContent = 'Use valores positivos.'; return; }
    var ab = PI * r * r, v = ab * h;
    $('vc-b').textContent = pt(ab, 3); $('vc-v').textContent = pt(v, 3); $('vc-l').textContent = pt(v / 1000, 4) + ' L';
    $('vc-hh').textContent = 'V = π·r²·h. Se r e h estão em cm, o volume está em cm³ (1 000 cm³ = 1 L).'; });`
}) });

// ===================== AULA 2: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 56', h1: 'Cilindro: <span style="color:var(--growth);">área total e volume em problemas</span>',
  sub: 'Latas, tanques e rolos: o enunciado pede material (área) ou capacidade (volume). Aqui juntamos as duas ferramentas.',
  badges: [['A_T = 2πr(h + r)'], ['V = πr²h', 'growth'], ['cobrir × encher', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Cobrir ou encher?', [
  ['Ler', 'o que pede o problema', 'bulb'],
  ['Medidas', 'raio, altura e π', 'target'],
  ['Calcular', 'A_T ou V', 'chart'],
  ['Converter', 'cm³, m³ e litros', 'link'],
  ['Comparar', 'cilindro × cubo', 'scale']
]));
b.push(objetivosSlide([
  'Escolher entre <strong>área</strong> (cobrir) e <strong>volume</strong> (encher).',
  'Resolver problemas que combinam $A_T$ e $V$ de um <strong>mesmo cilindro</strong>.',
  'Calcular <strong>altura do líquido</strong> e <strong>tempo de enchimento</strong>.',
  'Comparar o cilindro com o <strong>cubo que o contém</strong>.'
], 'Dica', 'Cilindro dentro de um cubo: o cubo tem aresta $a$; o cilindro inscrito tem $r = a ÷ 2$ e $h = a$. Compare os volumes!', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Embalagem e conteúdo', `
          ${lede('Uma lata fechada tem <strong>raio 4 cm</strong> e <strong>altura 10 cm</strong> ($π = 3$). A <strong>área total</strong> diz quanto de metal; o <strong>volume</strong> diz quanto de conteúdo.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Grandeza', 'Cálculo', 'Valor'], [['Área total', '$2 · 3 · 4 · (10 + 4)$', '336 cm²'], ['Volume', '$3 · 4^{2} · 10$', '480 cm³ $= 0,48$ L']])}
            ${mini('Para saber a quantidade de líquido que a lata comporta, calcula-se:', ['a área lateral', 'a área total', 'o volume', 'o perímetro da base'], 2, 'Comportar = <strong>encher</strong> = volume: $480$ cm³ $= 0,48$ L.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estratégia', 'Altura do líquido e tempo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Altura do líquido:</strong> $h = V ÷ (π r^{2})$.</li>
                <li><strong>Tempo de enchimento:</strong> $t = V ÷ vazão$ (com $V$ em litros e vazão em L/min).</li>
                <li><strong>Cilindro no cubo:</strong> $V_{cil} = π (a ÷ 2)^{2} a = {π a^{3}|4}$ e $V_{cubo} = a^{3}$: razão $π ÷ 4$ (≈ 78,5%).</li>
                <li>Se o enunciado dá $π = 3$, o resultado é $3 ÷ 4 = 75\\%$.</li>
              </ul>
            </div>
            ${W.box('Tempo para encher um tanque', W.row(W.nm('tc-r', 'raio r (m)', 1, 'any', 'min="0"'), W.nm('tc-h', 'altura h (m)', 2, 'any', 'min="0"'), W.nm('tc-q', 'vazão (L/min)', 50, 'any', 'min="0"')) + W.txt('tc-v', 'Capacidade (L) = ') + W.txt('tc-t', 'Tempo para encher = ') + W.hint('tc-hh'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Cilindro inscrito em um cubo', 'Um cilindro está inscrito em um cubo de aresta 10 cm (raio 5 cm, altura 10 cm). Qual a fração do cubo ocupada pelo cilindro? (Use $π = 3$.)', [
  ['Cilindro', '$V = 3 · 5^{2} · 10 = 750$ cm³.'],
  ['Cubo', '$10^{3} = 1\\ 000$ cm³.'],
  ['Fração', '$750 ÷ 1\\ 000 = 75\\%$.']
], 'O cilindro ocupa <strong>75%</strong> do cubo (com π = 3,14: cerca de 78,5%).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Tempo de enchimento', 'Um tanque cilíndrico tem raio 1 m e altura 2 m. Com vazão de 50 L/min, quanto tempo leva para encher? (Use $π = 3$.)', [
  ['Volume', '$3 · 1^{2} · 2 = 6$ m³ $= 6\\ 000$ L.'],
  ['Tempo', '$6\\ 000 ÷ 50 = 120$ min $= 2$ h.']
], '<strong>2 horas</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Material e conteúdo', 'Uma lata fechada tem raio 4 cm e altura 10 cm (π = 3). Quanto metal usa e quantos mL comporta? Se o metal custa R$ 0,02 por cm², qual o custo do metal?', [
  ['Área total', '$A_T = 336$ cm².'],
  ['Volume', '$V = 480$ cm³ $= 480$ mL.'],
  ['Custo', '$336 · 0,02 = 6,72$ reais.']
], '336 cm² de metal, 480 mL de capacidade e <strong>R$ 6,72</strong> de custo do metal.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Derretendo um cilindro', 'Um cilindro maciço de raio 4 cm e altura 50 cm é derretido para fazer esferas de 1 cm de diâmetro (volume de cada esfera ${π|6}$ cm³). Quantas esferas, aproximadamente?', [
  ['Volume do cilindro', '$V = π · 16 · 50 = 800π$ cm³.'],
  ['Cada esfera', '${π|6}$ cm³.'],
  ['Quantidade', '$800π ÷ {π|6} = 800 · 6 = 4\\ 800$.']
], '<strong>4 800 esferas</strong> (o $π$ se cancela).', 'growth'));

b.push(pratique('Altura do líquido', 'Um tanque cilíndrico de raio 2 m recebe 12 560 L de água (π = 3,14). A altura da água é:',
  ['0,5 m', '1 m', '2 m', '4 m', '12,56 m'], 1,
  '$12,56 ÷ (3,14 · 4) = 1$ m. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Tempo', 'Um tanque de 6 000 L é enchido com vazão de 50 L/min. O tempo é:',
  ['60 min', '90 min', '120 min', '180 min', '300 min'], 2,
  '$6\\ 000 ÷ 50 = 120$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Cilindro no cubo', 'Um cilindro de raio 5 cm e altura 10 cm está inscrito em um cubo de aresta 10 cm. Com $π = 3$, o volume do cilindro, em cm³, é:',
  ['500', '600', '750', '900', '1 000'], 2,
  '$3 · 25 · 10 = 750$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de cilindro enganam', [
  ['Trocar área e volume', 'Cobrir ⇒ cm²; encher ⇒ cm³.'],
  ['Conversão de unidades', 'm³ para litros: ×1 000; cm³ para litros: ÷ 1 000.'],
  ['Esfera e π', 'Quando $π$ aparece nos dois volumes, ele se cancela na razão.'],
  ['Altura do líquido', '$h = V ÷ (πr^{2})$, e não $V ÷ r$.']
]));
b.push(quiz([
  { q: 'Para saber quanto líquido cabe em uma lata, calcula-se:', o: ['a área lateral', 'a área total', 'o volume', 'o raio'], a: 2 },
  { q: 'Um tanque de 600 L enche com vazão de 20 L/min em:', o: ['10 min', '20 min', '30 min', '60 min'], a: 2 },
  { q: 'Um cilindro inscrito em um cubo ocupa cerca de:', o: ['50%', '65%', '78,5%', '100%'], a: 2 },
  { q: '4,5 m³ equivalem a:', o: ['45 L', '450 L', '4 500 L', '45 000 L'], a: 2 }
]));
b.push(fechamento([
  ['Cobrir', 'Área total ou lateral.'],
  ['Encher', 'Volume, litros, vazão e altura.'],
  ['Comparar', 'Cilindro no cubo: ≈ 78,5%.']
], 'Decida primeiro: cobrir ou encher. A conta vem depois.'));

pages.push({ out: BASE + 'aula-2-problemas-de-area-e-volume.html', html: K.deck({
  title: 'Cilindro: área total e volume — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 56 · Área total e volume', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['tc-r', 'tc-h', 'tc-q'], function(){ var r = +$('tc-r').value, h = +$('tc-h').value, q = +$('tc-q').value, PI = 3.14;
    if(![r, h, q].every(isFinite) || r <= 0 || h <= 0 || q <= 0){ $('tc-v').textContent = '—'; $('tc-t').textContent = '—'; $('tc-hh').textContent = 'Use valores positivos.'; return; }
    var L = PI * r * r * h * 1000, t = L / q;
    $('tc-v').textContent = pt(L, 1); $('tc-t').textContent = pt(t, 1) + ' min = ' + pt(t / 60, 2) + ' h';
    $('tc-hh').textContent = 'V = π·r²·h em m³ (π = 3,14); ×1 000 dá litros; tempo = litros ÷ vazão.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Cilindro: <span>volume e problemas</span>',
  lede: 'V = πr²h: área da base vezes altura. Cobrir pede área; encher pede volume, com conversão de unidades e atenção ao raio ao quadrado.',
  badges: ['V = πr²h', 'r ×2 ⇒ V ×4', 'cobrir × encher'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Fórmula', 'V = πr²h', 'chart', 'primary', p('Como o prisma: $A_B · h$.') + call('Exemplo', 'r = 4, h = 20, π = 3: 960 cm³.', 'success')],
    ['Escala', 'Dobrar medidas', 'target', 'growth', li(['$r$ ×2 ⇒ $V$ ×4.', '$h$ ×2 ⇒ $V$ ×2.', 'Ambos ×2 ⇒ $V$ ×8.'])],
    ['Unidades', 'Litros', 'scale', 'decay', li(['1 cm³ = 1 mL.', '1 dm³ = 1 L.', '1 m³ = 1 000 L.'])],
    ['Altura do líquido', 'V ÷ πr²', 'link', 'success', p('Tanque r = 2 m, 12 560 L: 1 m.') + call('Dica', 'Passe tudo a m³ antes.', 'success')],
    ['Tempo', 'Volume ÷ vazão', 'up', 'primary', p('6 000 L a 50 L/min: 2 h.') + call('Cuidado', 'Litros e L/min.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Raio ao quadrado.', 'Raio ou diâmetro?', 'Mesma unidade?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o quadrado do raio.', 'Usar o diâmetro.', 'Errar litros × cm³.', 'Trocar área por volume.', 'Dobrar r e achar que V dobra.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Volume do cilindro <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: luminária, caixa-d’água, escala, altura da água e cilindro inscrito.',
  final: 'Raio ao quadrado, altura e a unidade certa.',
  questions: [
    { badge: 'Estilo ENEM · luminária', text: 'Um compartimento cilíndrico tem 8 cm de diâmetro e 20 cm de altura. Use $π = 3$.', cmd: 'Seu volume, em cm³, é:', opts: ['480', '640', '960', '1 920', '3 840'], a: 2,
      sol: '<p>$r = 4$: $3 · 16 · 20 = 960$.</p>' },
    { badge: 'Estilo ENEM · caixa-d’água', text: 'Uma caixa-d’água cilíndrica tem raio 1 m e altura 1,5 m. Use $π = 3$.', cmd: 'Sua capacidade, em litros, é:', opts: ['4 500', '450', '1 500', '9 000', '13 500'], a: 0,
      sol: '<p>$3 · 1 · 1,5 = 4,5$ m³ $= 4\\ 500$ L.</p>' },
    { badge: 'Estilo ENEM · escala', text: 'O raio da base de um cilindro é dobrado e a altura é mantida.', cmd: 'O volume fica multiplicado por:', opts: ['2', '4', '3', '6', '8'], a: 1,
      sol: '<p>$V$ é proporcional a $r^{2}$: $2^{2} = 4$.</p>' },
    { badge: 'Estilo ENEM · altura da água', text: 'Um tanque cilíndrico de raio 2 m recebe 12 560 L de água. Use $π = 3,14$.', cmd: 'A altura da água, em metros, é:', opts: ['1', '0,5', '2', '4', '12,56'], a: 0,
      sol: '<p>$12,56 ÷ (3,14 · 4) = 1$ m.</p>' },
    { badge: 'Estilo ENEM · cilindro inscrito', text: 'Um cilindro de raio 5 cm e altura 10 cm está inscrito em um cubo de aresta 10 cm. Use $π = 3$.', cmd: 'O volume do cilindro, em cm³, é:', opts: ['500', '600', '750', '900', '1 000'], a: 2,
      sol: '<p>$3 · 25 · 10 = 750$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">volumes</span>',
  subtitle: 'Ligue cada cilindro ao seu volume.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se as medidas combinarem com o volume, o par fica aberto.',
    final: 'Em todos: V = π · r² · h, com o π dado.',
    pares: [['r = 4, h = 20, π = 3', '960 cm³'], ['r = 1, h = 1,5, π = 3', '4,5 m³'], ['r = 3, h = 12, π = 3,14', '339,12 cm³'], ['r = 2, h = 5, π = 3,14', '62,8 m³'], ['r = 5, h = 10, π = 3', '750 cm³'], ['r = 10, h = 3, π = 3', '900 cm³']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Volume do cilindro: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: luminária, caixa-d’água, escala, altura e cilindro inscrito. Digite o número pedido.',
  final: 'Você percorreu a trilha: volume, litros, escala e comparação.',
  problems: [
    { tag: 'Luminária', q: 'Raio 4 cm, altura 20 cm, π = 3: qual o volume, em cm³?', a: 960, ph: 'cm³', hint: '3 · 16 · 20.', sol: '<p>$960$.</p>' },
    { tag: 'Caixa-d’água', q: 'Raio 1 m, altura 1,5 m, π = 3: quantos litros cabem?', a: 4500, ph: 'L', hint: '4,5 m³.', sol: '<p>$4\\ 500$.</p>' },
    { tag: 'Escala', q: 'Dobrando o raio de um cilindro (altura fixa), por quanto fica multiplicado o volume?', a: 4, ph: 'fator', hint: '2².', sol: '<p>$4$.</p>' },
    { tag: 'Altura', q: 'Raio 2 m e 12 560 L de água (π = 3,14): qual a altura da água, em m?', a: 1, ph: 'm', hint: '12,56 ÷ 12,56.', sol: '<p>$1$ m.</p>' },
    { tag: 'Cilindro inscrito', q: 'Cilindro r = 5, h = 10 em um cubo de aresta 10 (π = 3): qual o volume, em cm³?', a: 750, ph: 'cm³', hint: '3 · 25 · 10.', sol: '<p>$750$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Cilindro: Volume', accent: 'growth', icon: 'cube',
  aulas: [['Aulas 54–55', 'Volume do cilindro', 'aula-1-volume-do-cilindro.html'], ['Aula 56', 'Cilindro: área total e volume em problemas', 'aula-2-problemas-de-area-e-volume.html']],
  enem: 'Volume do cilindro no estilo ENEM', cria: 'Memória dos volumes', pratica: 'Volume do cilindro: trilha de desafios'
}, pages };
