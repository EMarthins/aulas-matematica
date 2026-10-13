// Unidade v16 — Prisma: volume e problemas de área total e volume (aulas 42 a 44 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'prisma-volume', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v16', BRAND = 'Prisma: Volume', CAP = 'Aulas 42 a 44';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: volume =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 42 e 43', h1: 'Volume do prisma: <span style="color:var(--primary);">área da base vezes a altura</span>',
  sub: 'Quanta água cabe em uma caixa-d’água? Quantas caixinhas cabem em um caminhão? O volume mede o espaço ocupado por um sólido, e no prisma é a área da base multiplicada pela altura.',
  badges: [['V = A_B · h'], ['V = a · b · c', 'growth'], ['1 m³ = 1 000 L', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do cubinho ao litro.', [
  ['Contar cubinhos', 'o volume em unidades', 'bulb'],
  ['Cavalieri', 'mesma base e altura, mesmo volume', 'target'],
  ['Fórmula', 'V = A_B · h', 'chart'],
  ['Unidades', 'm³, dm³, cm³ e litros', 'link'],
  ['Aplicações', 'caixas, piscinas e tanques', 'scale']
]));
a.push(objetivosSlide([
  'Entender o volume como <strong>quantidade de cubinhos unitários</strong> que preenchem o sólido.',
  'Aplicar o <strong>princípio de Cavalieri</strong> e calcular $V = A_B · h$.',
  'Usar $V = a · b · c$ (bloco) e $V = a^{3}$ (cubo).',
  '<strong>Converter</strong> unidades: 1 m³ $= 1\\ 000$ L, 1 dm³ $= 1$ L e 1 cm³ $= 1$ mL.'
], 'Dica', 'Antes de calcular, passe todas as medidas para a <strong>mesma unidade</strong>. Para litros, o caminho mais curto é: medidas em <strong>dm</strong> ⇒ volume em dm³ $=$ litros.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Contando cubinhos', `
          ${lede('O volume de um sólido é o número de <strong>cubinhos unitários</strong> que o preenchem. No bloco abaixo há $4$ cubinhos de comprimento, $3$ de largura e $2$ de altura.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${S.empilha({ x: 4, y: 3, z: 2, u: 24, w: 260, h: 170 })}</div>
            ${mini('O número de cubinhos (volume em unidades) desse bloco é:', ['9', '12', '24', '36'], 2, '$4 · 3 · 2 = 24$: a base tem $4 · 3 = 12$ cubinhos e há 2 camadas.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · volume do prisma', 'V = A_B · h (Cavalieri)', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Princípio de Cavalieri:</strong> dois sólidos de mesma altura, cujos cortes por planos paralelos às bases têm sempre áreas iguais, têm o <strong>mesmo volume</strong>.</li>
                <li>Prisma (reto ou oblíquo): <strong>$V = A_B · h$</strong> (área da base vezes a altura).</li>
                <li>Bloco $a × b × c$: <strong>$V = a · b · c$</strong>. Cubo: <strong>$V = a^{3}$</strong>.</li>
                <li><strong>Unidades:</strong> 1 m³ $= 1\\ 000$ L · 1 dm³ $= 1$ L · 1 cm³ $= 1$ mL.</li>
              </ul>
            </div>
            ${W.box('Volume do bloco e capacidade', W.row(W.nm('vo-a', 'a (m)', 1.2, 'any', 'min="0"'), W.nm('vo-b', 'b (m)', 1, 'any', 'min="0"'), W.nm('vo-c', 'c (m)', 0.7, 'any', 'min="0"')) + W.txt('vo-v', 'Volume (m³) = ') + W.txt('vo-l', 'Capacidade (litros) = ') + W.hint('vo-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Conversões de volume e capacidade', `
          ${tbl(['Volume', 'Capacidade', 'Em palavras'], [['1 cm³', '1 mL', 'um cubinho de 1 cm de aresta'], ['1 dm³', '1 L', 'um cubo de 10 cm de aresta'], ['1 m³', '1 000 L', 'um cubo de 1 m de aresta'], ['1 m³', '1 000 dm³', '$1\\ 000$ cubos de 1 dm']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('De m³ para litros', 'Multiplique por 1 000: $0,84$ m³ $= 840$ L.', 'success')}
            ${callout('De cm³ para litros', 'Divida por 1 000: $6\\ 000$ cm³ $= 6$ L.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Caixa-d’água', 'As medidas internas de uma caixa-d’água em forma de bloco são 1,2 m, 1 m e 0,7 m. Qual a sua capacidade em litros?', [
  ['Volume', '$V = 1,2 · 1 · 0,7 = 0,84$ m³.'],
  ['Converta', '1 m³ $= 1\\ 000$ L ⇒ $0,84 · 1\\ 000 = 840$ L.']
], 'A capacidade é <strong>840 L</strong>.'));
a.push(exemplo('Exemplo resolvido', 'Prisma triangular', 'A base de um prisma é um triângulo de base 6 cm e altura 4 cm. A altura do prisma é 10 cm. Qual o volume?', [
  ['Área da base', '$A_B = 6 · 4 ÷ 2 = 12$ cm².'],
  ['Volume', '$V = A_B · h = 12 · 10 = 120$ cm³.']
], '$V = 120$ cm³.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Piscina', 'Uma piscina em forma de bloco mede 8 m por 4 m e tem 1,5 m de profundidade. Quantos litros de água cabem?', [
  ['Volume', '$V = 8 · 4 · 1,5 = 48$ m³.'],
  ['Litros', '$48 · 1\\ 000 = 48\\ 000$ L.']
], '<strong>48 000 L</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Cubinhos em uma caixa', 'Quantos cubinhos de 2 cm de aresta cabem em uma caixa de 10 cm × 6 cm × 4 cm?', [
  ['Por dimensão', '$10 ÷ 2 = 5$, $6 ÷ 2 = 3$ e $4 ÷ 2 = 2$.'],
  ['Total', '$5 · 3 · 2 = 30$ cubinhos.'],
  ['Conferência', 'Volume da caixa $240$ ÷ volume do cubinho $8$ $= 30$ ✓.']
], '<strong>30 cubinhos</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Prisma hexagonal', 'Qual o volume de um prisma hexagonal regular de lado 2 cm e altura 5 cm? (Use $√{3} = 1,73$.)', [
  ['Área da base', '$A_B = 3 · 2^{2} · √{3} ÷ 2 = 6√{3} ≈ 10,38$ cm².'],
  ['Volume', '$V = 10,38 · 5 = 51,9$ cm³.']
], '$V ≈ 51,9$ cm³.', 'growth'));

a.push(pratique('Capacidade', 'Uma caixa-d’água de 1,2 m × 1 m × 0,7 m tem capacidade de:',
  ['84 L', '840 L', '8 400 L', '8,4 L', '0,84 L'], 1,
  '$0,84$ m³ $= 840$ L. <strong>Alternativa B.</strong>'));
a.push(pratique('Prisma triangular', 'O volume de um prisma de altura 10 cm, cuja base é um triângulo de base 6 cm e altura 4 cm, é:',
  ['60 cm³', '100 cm³', '120 cm³', '240 cm³', '24 cm³'], 2,
  '$12 · 10 = 120$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Escala do cubo', 'A aresta de um cubo é dobrada. O volume do novo cubo é, em relação ao original, multiplicado por:',
  ['2', '4', '6', '8', '16'], 3,
  '$(2a)^{3} = 8a^{3}$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o volume engana', [
  ['Misturar unidades', 'Converta antes de multiplicar: 1 m $= 10$ dm $= 100$ cm.'],
  ['Errar a conversão para litros', '1 m³ $= 1\\ 000$ L (e não 100 L).'],
  ['Usar a área lateral', 'O volume usa a área da <strong>base</strong>, não a lateral.'],
  ['Esquecer o ÷ 2 do triângulo', 'A área da base triangular é $b · h ÷ 2$.']
]));
a.push(quiz([
  { q: 'O volume de um cubo de aresta 3 cm é:', o: ['9 cm³', '18 cm³', '27 cm³', '81 cm³'], a: 2 },
  { q: '1 dm³ equivale a:', o: ['1 mL', '1 L', '10 L', '100 L'], a: 1 },
  { q: 'Em um prisma, o volume é:', o: ['$A_L · h$', '$A_B · h$', '$P · h$', '$A_T · h$'], a: 1 },
  { q: '5 000 cm³ correspondem a:', o: ['5 mL', '50 L', '5 L', '500 L'], a: 2 }
]));
a.push(fechamento([
  ['Fórmula', '$V = A_B · h$.'],
  ['Bloco e cubo', '$a · b · c$ e $a^{3}$.'],
  ['Unidades', '1 m³ $= 1\\ 000$ L; 1 dm³ $= 1$ L.']
], 'Mesma unidade, área da base, altura: o volume está pronto.'));

pages.push({ out: BASE + 'aula-1-volume-do-prisma.html', html: K.deck({
  title: 'Volume do prisma — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 42 e 43 · Volume do prisma', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['vo-a', 'vo-b', 'vo-c'], function(){ var a = +$('vo-a').value, b = +$('vo-b').value, c = +$('vo-c').value;
    if(![a, b, c].every(isFinite) || a <= 0 || b <= 0 || c <= 0){ $('vo-v').textContent = '—'; $('vo-l').textContent = '—'; $('vo-h').textContent = 'Use medidas positivas.'; return; }
    var v = a * b * c;
    $('vo-v').textContent = pt(v, 4); $('vo-l').textContent = pt(v * 1000, 2);
    $('vo-h').textContent = 'V = a · b · c (área da base a·b = ' + pt(a * b, 4) + ' vezes a altura c). Como 1 m³ = 1 000 L, multiplique por 1 000.'; });`
}) });

// ===================== AULA 2: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 44', h1: 'Prisma: <span style="color:var(--growth);">área total e volume em problemas</span>',
  sub: 'Embalar, encher, revestir: os problemas reais combinam área total (material) e volume (capacidade). Aqui juntamos tudo.',
  badges: [['A_T e V'], ['mesmo volume, menos material', 'growth'], ['vazão e tempo', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Escolher a grandeza certa.', [
  ['Material gasto', 'área total', 'bulb'],
  ['Capacidade', 'volume', 'target'],
  ['Comparar formas', 'mesmo volume, áreas diferentes', 'chart'],
  ['Tempo de enchimento', 'volume ÷ vazão', 'link'],
  ['Conferir', 'unidades e ordem de grandeza', 'scale']
]));
b.push(objetivosSlide([
  'Decidir se o problema pede <strong>área</strong> (revestir, pintar, embalar) ou <strong>volume</strong> (encher, armazenar).',
  'Resolver problemas que combinam $A_T$ e $V$ no <strong>mesmo prisma</strong>.',
  'Comparar sólidos de <strong>mesmo volume</strong> e áreas totais diferentes.',
  'Calcular <strong>tempo de enchimento</strong> a partir de volume e vazão.'
], 'Dica', 'Pergunte: <strong>“eu preencho ou eu cubro?”</strong> Preencher é volume (m³, L); cobrir é área (m²).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Eficiência: gastar menos material', `
          ${lede('Uma indústria precisa embalar <strong>8 cm³</strong> de produto. Pode usar um cubo de $2 × 2 × 2$ ou uma barra de $1 × 1 × 8$. Os dois têm o mesmo volume. Qual gasta <strong>menos embalagem</strong>?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Forma', 'Volume', 'Área total'], [['Cubo $2 × 2 × 2$', '8 cm³', '$2(4 + 4 + 4) = 24$ cm²'], ['Barra $1 × 1 × 8$', '8 cm³', '$2(1 + 8 + 8) = 34$ cm²']])}
            ${mini('Para o mesmo volume, o cubo gasta:', ['mais embalagem', 'menos embalagem', 'a mesma embalagem', 'não dá para saber'], 1, 'O cubo tem 24 cm² e a barra 34 cm²: formas mais “compactas” gastam menos material.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estratégia', 'Área ou volume?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Cobrir, pintar, forrar, embalar:</strong> área $A_T$ (m², cm²).</li>
                <li><strong>Encher, armazenar, medir capacidade:</strong> volume $V$ (m³, L).</li>
                <li><strong>Tempo para encher:</strong> $t = V ÷ vazão$, com $V$ em litros e vazão em L/min.</li>
                <li><strong>Altura do líquido</strong> em um recipiente: $h = V ÷ A_B$.</li>
              </ul>
            </div>
            ${W.box('Tempo para encher', W.row(W.nm('pb-a', 'a (m)', 2, 'any', 'min="0"'), W.nm('pb-b', 'b (m)', 3, 'any', 'min="0"'), W.nm('pb-c', 'c (m)', 1.5, 'any', 'min="0"'), W.nm('pb-q', 'vazão (L/min)', 30, 'any', 'min="0"')) + W.txt('pb-v', 'Capacidade (L) = ') + W.txt('pb-t', 'Tempo para encher = ') + W.hint('pb-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Caixa de bombons', 'Uma caixa de bombons mede 30 cm × 20 cm × 10 cm. Calcule o volume em litros e a área de papelão, sabendo que há 10% de sobra no corte.', [
  ['Volume', '$V = 30 · 20 · 10 = 6\\ 000$ cm³ $= 6$ L.'],
  ['Área total', '$A_T = 2(600 + 300 + 200) = 2\\ 200$ cm².'],
  ['Com 10% de sobra', '$2\\ 200 · 1,10 = 2\\ 420$ cm².']
], '<strong>6 L</strong> de volume e <strong>2 420 cm²</strong> de papelão a comprar.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Aquário', 'Um aquário mede 60 cm × 30 cm × 40 cm. Quantos litros cabem se ele for cheio até $3 ÷ 4$ da altura? Qual a altura da água?', [
  ['Volume total', '$60 · 30 · 40 = 72\\ 000$ cm³ $= 72$ L.'],
  ['Três quartos', '$72 · 3 ÷ 4 = 54$ L.'],
  ['Altura da água', '$3 ÷ 4 · 40 = 30$ cm (confira: $54\\ 000 ÷ (60 · 30) = 30$ ✓).']
], '<strong>54 L</strong>, com <strong>30 cm</strong> de água.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Tempo para encher um tanque', 'Um reservatório de 2 m × 3 m × 1,5 m é enchido com vazão de 30 L/min. Quanto tempo leva para encher?', [
  ['Volume', '$2 · 3 · 1,5 = 9$ m³ $= 9\\ 000$ L.'],
  ['Tempo', '$9\\ 000 ÷ 30 = 300$ minutos.'],
  ['Em horas', '$300 ÷ 60 = 5$ h.']
], '<strong>5 horas</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Calha em trapézio', 'Uma calha tem seção em forma de trapézio de bases 8 cm e 12 cm e altura 5 cm, e comprimento 300 cm. Qual o volume, em litros?', [
  ['Área da seção', '$A_B = (8 + 12) · 5 ÷ 2 = 50$ cm².'],
  ['Volume', '$V = 50 · 300 = 15\\ 000$ cm³.'],
  ['Litros', '$15\\ 000 ÷ 1\\ 000 = 15$ L.']
], '<strong>15 L</strong>.', 'growth'));

b.push(pratique('Mesmo volume', 'Dos blocos de volume 8 cm³ abaixo, qual tem a menor área total?',
  ['1 × 1 × 8', '1 × 2 × 4', '2 × 2 × 2', 'todos iguais', 'não dá para saber'], 2,
  'O cubo $2 × 2 × 2$ tem $A_T = 24$; $1 × 2 × 4$ tem $28$; $1 × 1 × 8$ tem $34$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Tempo de enchimento', 'Um tanque de 9 m³ é enchido com vazão de 30 L/min. O tempo é de:',
  ['3 h', '4 h', '5 h', '6 h', '9 h'], 2,
  '$9\\ 000 ÷ 30 = 300$ min $= 5$ h. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Altura da água', 'Um aquário de base retangular 60 cm × 30 cm recebe 54 litros de água. A altura da água, em cm, é:',
  ['20', '25', '30', '35', '40'], 2,
  '$54\\ 000 ÷ (60 · 30) = 30$ cm. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de prisma enganam', [
  ['Trocar área e volume', 'Cobrir ⇒ cm²; encher ⇒ cm³. Ao ler “revestir”, calcule área.'],
  ['Conversão de unidades', 'Vazão em L/min exige volume em litros.'],
  ['Ignorar a sobra', 'Se o enunciado dá percentual de perda, multiplique pelo fator (1,10 para 10%).'],
  ['Altura do líquido', 'A altura da água depende só da área da <strong>base</strong>: $h = V ÷ A_B$.']
]));
b.push(quiz([
  { q: 'Para saber quanto papel de parede cobre uma coluna prismática, calcula-se:', o: ['o volume', 'a área lateral', 'o perímetro', 'a diagonal'], a: 1 },
  { q: 'Mesmo volume: a forma que, em geral, gasta menos material é:', o: ['a mais alongada', 'a mais “compacta” (cubo)', 'a mais achatada', 'tanto faz'], a: 1 },
  { q: 'Um tanque de 600 L enche com vazão de 20 L/min em:', o: ['10 min', '20 min', '30 min', '120 min'], a: 2 },
  { q: 'A altura da água é $V ÷ $:', o: ['$A_L$', '$A_B$', '$A_T$', '$P$'], a: 1 }
]));
b.push(fechamento([
  ['Cobrir', 'Área total.'],
  ['Encher', 'Volume, capacidade e vazão.'],
  ['Comparar', 'Mesmo volume, formas diferentes.']
], 'Preencher é volume, cobrir é área: a primeira decisão de todo problema.'));

pages.push({ out: BASE + 'aula-2-area-total-e-volume.html', html: K.deck({
  title: 'Prisma: área total e volume — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 44 · Área total e volume', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pb-a', 'pb-b', 'pb-c', 'pb-q'], function(){ var a = +$('pb-a').value, b = +$('pb-b').value, c = +$('pb-c').value, q = +$('pb-q').value;
    if(![a, b, c, q].every(isFinite) || a <= 0 || b <= 0 || c <= 0 || q <= 0){ $('pb-v').textContent = '—'; $('pb-t').textContent = '—'; $('pb-h').textContent = 'Use valores positivos.'; return; }
    var L = a * b * c * 1000, t = L / q;
    $('pb-v').textContent = pt(L, 1); $('pb-t').textContent = pt(t, 1) + ' min = ' + pt(t / 60, 2) + ' h';
    $('pb-h').textContent = 'Volume em m³ = ' + pt(a * b * c, 3) + '; em litros ×1 000; tempo = litros ÷ vazão.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Prisma: <span>volume e problemas</span>',
  lede: 'V = A_B · h vale para qualquer prisma. Cobrir pede área; encher pede volume. Converta sempre: 1 m³ = 1 000 L.',
  badges: ['V = A_B · h', '1 m³ = 1 000 L', 'cobrir × encher'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Cubinhos', 'Contar unidades', 'chart', 'primary', p('Volume = nº de cubinhos que preenchem.') + call('Exemplo', '4 · 3 · 2 = 24.', 'success')],
    ['Cavalieri', 'Mesma base e altura', 'target', 'growth', p('Cortes de áreas iguais ⇒ mesmo volume.') + call('Vale', 'Para prismas retos e oblíquos.', 'success')],
    ['Fórmula', 'V = A_B · h', 'scale', 'decay', p('Bloco: $a · b · c$. Cubo: $a^{3}$.') + call('Exemplo', '1,2 · 1 · 0,7 = 0,84 m³.', 'success')],
    ['Unidades', 'Litros', 'link', 'success', li(['1 m³ = 1 000 L.', '1 dm³ = 1 L.', '1 cm³ = 1 mL.'])],
    ['Problemas', 'Cobrir × encher', 'up', 'primary', p('Mesmo volume: cubo gasta menos.') + call('Tempo', '$t = V ÷ vazão$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Mesma unidade?', 'Área ou volume?', 'Altura da água = V ÷ A_B.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Misturar cm e m.', '1 m³ = 100 L (errado).', 'Usar a área lateral no volume.', 'Esquecer ÷ 2 na base triangular.', 'Trocar área e volume.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Volume do prisma <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: caixa-d’água, piscina, prisma triangular, cubinhos e escala.',
  final: 'Mesma unidade, área da base, altura: volume pronto.',
  questions: [
    { badge: 'Estilo ENEM · capacidade', text: 'As medidas internas de uma caixa-d’água em forma de bloco são 1,2 m, 1 m e 0,7 m.', cmd: 'Sua capacidade, em litros, é:', opts: ['84', '840', '8 400', '8,4', '0,84'], a: 1,
      sol: '<p>$1,2 · 1 · 0,7 = 0,84$ m³ $= 840$ L.</p>' },
    { badge: 'Estilo ENEM · piscina', text: 'Uma piscina em forma de bloco mede 8 m por 4 m e tem 1,5 m de profundidade.', cmd: 'Ela comporta, em litros:', opts: ['4 800', '32 000', '48 000', '480 000', '48'], a: 2,
      sol: '<p>$8 · 4 · 1,5 = 48$ m³ $= 48\\ 000$ L.</p>' },
    { badge: 'Estilo ENEM · prisma triangular', text: 'A base de um prisma é um triângulo de base 6 cm e altura 4 cm; a altura do prisma é 10 cm.', cmd: 'O volume, em cm³, é:', opts: ['120', '60', '100', '240', '24'], a: 0,
      sol: '<p>$A_B = 12$; $V = 12 · 10 = 120$.</p>' },
    { badge: 'Estilo ENEM · cubinhos', text: 'Uma caixa de 10 cm × 6 cm × 4 cm será preenchida com cubinhos de 2 cm de aresta.', cmd: 'O número máximo de cubinhos é:', opts: ['24', '30', '15', '60', '240'], a: 1,
      sol: '<p>$5 · 3 · 2 = 30$ cubinhos.</p>' },
    { badge: 'Estilo ENEM · escala', text: 'A aresta de um cubo é dobrada.', cmd: 'O volume fica multiplicado por:', opts: ['2', '4', '6', '8', '16'], a: 3,
      sol: '<p>$(2a)^{3} = 8a^{3}$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive: onde está o <span style="color:var(--decay);">erro</span>?',
  subtitle: 'Cada resolução de volume tem uma linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Os erros típicos: conversão de unidades, ÷ 2 esquecido e cubo mal calculado.',
    casos: [
      { titulo: 'Caixa-d’água', enunciado: 'Qual a capacidade, em litros, de uma caixa de 1,2 m × 1 m × 0,7 m?', linhas: ['Dimensões: 1,2 m, 1 m e 0,7 m.', '$V = 1,2 · 1 · 0,7 = 0,84$ m³.', 'Como 1 m³ = 100 L, $V = 84$ L.', 'Resposta: 84 L.'], erro: 2, porque: '1 m³ equivale a <strong>1 000 L</strong>: $0,84 · 1\\ 000 = 840$ L.' },
      { titulo: 'Cubo', enunciado: 'Qual a capacidade, em litros, de um cubo de aresta 5 dm?', linhas: ['Cubo: $V = a^{3}$.', '$V = 5^{3}$.', '$V = 15$ dm³.', 'Como 1 dm³ = 1 L, $V = 15$ L.'], erro: 2, porque: '$5^{3} = 5 · 5 · 5 = 125$ (e não $5 · 3$). A capacidade é 125 L.' },
      { titulo: 'Prisma triangular', enunciado: 'Qual o volume de um prisma de altura 10 cm, com base triangular de base 6 cm e altura 4 cm?', linhas: ['Área da base do triângulo: $6 · 4 = 24$ cm².', 'Volume: $V = A_B · h$.', '$V = 24 · 10 = 240$ cm³.', 'Resposta: 240 cm³.'], erro: 0, porque: 'A área do triângulo é $6 · 4 ÷ 2 = 12$ cm². O volume é $12 · 10 = 120$ cm³.' },
      { titulo: 'Cubinhos', enunciado: 'Quantos cubinhos de 2 cm cabem em uma caixa de 10 cm × 6 cm × 4 cm?', linhas: ['Volume da caixa: $10 · 6 · 4 = 240$ cm³.', 'Volume de cada cubinho: $2 · 2 · 2 = 8$ cm³.', 'Número de cubinhos: $240 ÷ 8 = 30$.', 'Resposta: $240 ÷ 2 = 120$ cubinhos.'], erro: 3, porque: 'A resposta deve ser os $30$ cubinhos da linha anterior; dividir por 2 mistura aresta com volume.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Volume do prisma: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: caixa-d’água, piscina, prisma triangular, cubinhos e aquário. Digite o número pedido.',
  final: 'Você percorreu a trilha: capacidade, base triangular, cubinhos e litros.',
  problems: [
    { tag: 'Caixa-d’água', q: 'Qual a capacidade, em litros, de uma caixa de 1,2 m × 1 m × 0,7 m?', a: 840, ph: 'L', hint: '0,84 m³ · 1 000.', sol: '<p>$840$ L.</p>' },
    { tag: 'Piscina', q: 'Quantos litros cabem em uma piscina de 8 m × 4 m × 1,5 m?', a: 48000, ph: 'L', hint: '48 m³.', sol: '<p>$48\\ 000$ L.</p>' },
    { tag: 'Prisma triangular', q: 'Base triangular de base 6 cm e altura 4 cm; altura do prisma 10 cm. Qual o volume, em cm³?', a: 120, ph: 'cm³', hint: '12 · 10.', sol: '<p>$120$.</p>' },
    { tag: 'Cubinhos', q: 'Quantos cubinhos de 2 cm cabem em uma caixa de 10 cm × 6 cm × 4 cm?', a: 30, ph: 'cubinhos', hint: '5 · 3 · 2.', sol: '<p>$30$.</p>' },
    { tag: 'Aquário', q: 'Um aquário de 60 cm × 30 cm × 40 cm tem capacidade de quantos litros?', a: 72, ph: 'L', hint: '72 000 cm³.', sol: '<p>$72$ L.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Prisma: Volume', accent: 'growth', icon: 'cube',
  aulas: [['Aulas 42–43', 'Volume do prisma', 'aula-1-volume-do-prisma.html'], ['Aula 44', 'Prisma: área total e volume em problemas', 'aula-2-area-total-e-volume.html']],
  enem: 'Volume do prisma no estilo ENEM', cria: 'Detetive: onde está o erro?', pratica: 'Volume do prisma: trilha de desafios'
}, pages };
