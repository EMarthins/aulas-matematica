// Unidade v18 — Pirâmide: volume e problemas de área total e volume (aulas 48 a 50 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'piramide-volume', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v18', BRAND = 'Pirâmide: Volume', CAP = 'Aulas 48 a 50';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: volume =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 48 e 49', h1: 'Volume da pirâmide: <span style="color:var(--primary);">um terço do prisma</span>',
  sub: 'Uma pirâmide inscrita em um cubo, com a mesma base e a mesma altura, ocupa exatamente um terço dele. Esse fator 1/3 é a chave do volume de qualquer pirâmide.',
  badges: [['V = A_B · h ÷ 3'], ['⅓ do prisma', 'growth'], ['mesma base e altura', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da comparação à fórmula.', [
  ['Pirâmide no cubo', 'mesma base e altura', 'bulb'],
  ['Fórmula', 'V = A_B · h ÷ 3', 'target'],
  ['Áreas das bases', 'polígonos regulares', 'chart'],
  ['Escala', 'dobrar h ou ℓ', 'link'],
  ['Aplicações', 'pirâmides, telhados e embalagens', 'scale']
]));
a.push(objetivosSlide([
  'Relacionar o volume da pirâmide ao do <strong>prisma de mesma base e altura</strong>: $V_{pir} = {1|3} V_{pri}$.',
  'Aplicar <strong>$V = {A_B · h|3}$</strong> com bases quadradas, triangulares e hexagonais.',
  'Prever o efeito de <strong>dobrar a altura ou o lado da base</strong>.',
  'Calcular <strong>capacidades em litros</strong> de recipientes piramidais.'
], 'Dica', 'Antes de dividir por 3, <strong>calcule a área da base</strong> corretamente: quadrado $ℓ^{2}$, triângulo $b · h ÷ 2$, hexágono regular $3ℓ^{2}√{3} ÷ 2$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A pirâmide dentro do cubo', `
          ${lede('Uma pirâmide está <strong>inscrita em um cubo</strong>: sua base é uma face do cubo e seu vértice está na face oposta. Têm, portanto, a <strong>mesma base</strong> e a <strong>mesma altura</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Sólido', 'Volume'], [['Cubo', '600 cm³'], ['Pirâmide inscrita', '$600 ÷ 3 = 200$ cm³'], ['Três pirâmides assim preenchem o cubo', '$3 · 200 = 600$ cm³']])}
            ${mini('Uma pirâmide e um prisma têm a mesma base e a mesma altura. O volume da pirâmide é:', ['igual ao do prisma', 'metade', 'um terço', 'um quarto'], 2, 'O volume da pirâmide é $1 ÷ 3$ do volume do prisma: $V = {A_B · h|3}$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · volume da pirâmide', 'V = A_B · h ÷ 3', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Volume da pirâmide:</strong> $V = {1|3} · A_B · h$.</li>
                <li>Vale para <strong>qualquer</strong> pirâmide (reta ou oblíqua), de qualquer base.</li>
                <li>Base quadrada de lado $ℓ$: $V = {ℓ^{2} · h|3}$.</li>
                <li><strong>Escala:</strong> dobrando $h$, o volume <strong>dobra</strong>; dobrando $ℓ$, o volume <strong>quadruplica</strong>; dobrando ambos, <strong>8 vezes</strong>.</li>
                <li>Capacidade: 1 m³ $= 1\\ 000$ L; 1 dm³ $= 1$ L.</li>
              </ul>
            </div>
            ${W.box('Pirâmide de base quadrada', W.row(W.nm('vp-l', 'lado ℓ', 6, 'any', 'min="0"'), W.nm('vp-h', 'altura h', 4, 'any', 'min="0"')) + W.txt('vp-b', 'Área da base = ') + W.txt('vp-v', 'Volume = ') + W.txt('vp-p', 'Prisma de mesma base e altura = ') + W.hint('vp-h2'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Áreas de base e volume', `
          ${tbl(['Base', 'Área $A_B$', 'Volume $V$'], [['quadrado de lado $ℓ$', '$ℓ^{2}$', '$ℓ^{2}h ÷ 3$'], ['retângulo $a × b$', '$a · b$', '$a · b · h ÷ 3$'], ['triângulo (base $b$, altura $t$)', '$b · t ÷ 2$', '$b · t · h ÷ 6$'], ['hexágono regular de lado $ℓ$', '$3ℓ^{2}√{3} ÷ 2$', '$ℓ^{2}h√{3} ÷ 2$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Pirâmide e prisma', '3 pirâmides com a mesma base e altura preenchem um prisma: $V_{pirâmide} = V_{prisma} ÷ 3$.', 'success')}
            ${callout('Cuidado', 'Use a altura <strong>do sólido</strong> $h$ (perpendicular à base), e não o apótema da pirâmide.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Pirâmide quadrangular', 'Calcule o volume de uma pirâmide de base quadrada de lado 6 cm e altura 4 cm.', [
  ['Área da base', '$A_B = 6^{2} = 36$ cm².'],
  ['Volume', '$V = {36 · 4|3} = 48$ cm³.']
], '$V = 48$ cm³.'));
a.push(exemplo('Exemplo resolvido', 'Pirâmide dentro do cubo', 'Um cubo de volume 600 cm³ contém uma pirâmide com a mesma base e altura. Qual o volume da pirâmide?', [
  ['Relação', 'Mesma base e altura ⇒ $V_{pir} = V_{cubo} ÷ 3$.'],
  ['Cálculo', '$600 ÷ 3 = 200$.']
], '$200$ cm³.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Pirâmide hexagonal', 'Uma pirâmide hexagonal regular tem lado da base 4 cm e altura 6 cm. Calcule o volume (use $√{3} = 1,73$).', [
  ['Área da base', '$A_B = {3 · 4^{2}√{3}|2} = 24√{3} ≈ 41,52$ cm².'],
  ['Volume', '$V = {41,52 · 6|3} = 83,04$ cm³.']
], '$V ≈ 83,04$ cm³.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A grande pirâmide', 'A pirâmide de Quéops tem base quadrada de 230 m de lado e altura de 147 m. Qual o volume aproximado?', [
  ['Base', '$A_B = 230^{2} = 52\\ 900$ m².'],
  ['Volume', '$V = {52\\ 900 · 147|3} = 52\\ 900 · 49 = 2\\ 592\\ 100$ m³.']
], 'Cerca de <strong>2,6 milhões de m³</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Efeito da escala', 'Uma pirâmide tem volume $V$. Qual o volume se a altura dobrar? E se o lado da base dobrar?', [
  ['Altura dobrada', '$V ∝ h$ ⇒ volume <strong>dobra</strong>: $2V$.'],
  ['Lado dobrado', '$V ∝ ℓ^{2}$ ⇒ $(2ℓ)^{2} = 4ℓ^{2}$ ⇒ volume <strong>quadruplica</strong>: $4V$.']
], '$2V$ e $4V$ (dobrando as duas medidas, $8V$).', 'growth'));

a.push(pratique('Volume', 'O volume de uma pirâmide de base quadrada de lado 6 cm e altura 4 cm é:',
  ['24 cm³', '48 cm³', '72 cm³', '144 cm³', '36 cm³'], 1,
  '$V = 36 · 4 ÷ 3 = 48$. <strong>Alternativa B.</strong>'));
a.push(pratique('Cubo e pirâmide', 'Um cubo de 600 cm³ contém uma pirâmide com a mesma base e altura. O volume da pirâmide é:',
  ['100 cm³', '150 cm³', '200 cm³', '300 cm³', '400 cm³'], 2,
  '$600 ÷ 3 = 200$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Dobrando as medidas', 'Em uma pirâmide de base quadrada, o lado da base é dobrado e a altura é mantida. O volume fica multiplicado por:',
  ['2', '3', '4', '6', '8'], 2,
  '$V = {ℓ^{2}h|3}$: com $2ℓ$, o fator é $2^{2} = 4$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o volume da pirâmide engana', [
  ['Esquecer o ÷ 3', 'Sem o fator $1 ÷ 3$ você calcula o volume do <strong>prisma</strong>.'],
  ['Usar o apótema como altura', 'A altura $h$ é perpendicular à base; o apótema $m$ está na face lateral.'],
  ['Errar a escala', 'Dobrar o lado da base multiplica o volume por 4, e não por 2.'],
  ['Unidades', 'Cuidado com cm³ × m³ e litros: 1 m³ $= 1\\ 000$ L.']
]));
a.push(quiz([
  { q: 'O volume de uma pirâmide de base 12 cm² e altura 9 cm é:', o: ['36 cm³', '54 cm³', '108 cm³', '324 cm³'], a: 0 },
  { q: 'Se dobramos a altura de uma pirâmide, o volume:', o: ['dobra', 'triplica', 'quadruplica', 'não muda'], a: 0 },
  { q: 'Três pirâmides iguais, de mesma base e altura de um prisma, preenchem:', o: ['metade do prisma', 'o prisma', 'o dobro do prisma', 'um terço do prisma'], a: 1 },
  { q: 'A altura usada em $V = {A_B · h|3}$ é:', o: ['do apótema', 'perpendicular à base', 'da aresta lateral', 'da diagonal'], a: 1 }
]));
a.push(fechamento([
  ['Fórmula', '$V = A_B · h ÷ 3$.'],
  ['Relação', 'Um terço do prisma de mesma base e altura.'],
  ['Escala', 'Altura ×2 ⇒ ×2; lado ×2 ⇒ ×4.']
], 'Calcule o prisma e divida por 3: a pirâmide fica pronta.'));

pages.push({ out: BASE + 'aula-1-volume-da-piramide.html', html: K.deck({
  title: 'Volume da pirâmide — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 48 e 49 · Volume da pirâmide', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['vp-l', 'vp-h'], function(){ var l = +$('vp-l').value, h = +$('vp-h').value;
    if(![l, h].every(isFinite) || l <= 0 || h <= 0){ ['vp-b', 'vp-v', 'vp-p'].forEach(function(i){ $(i).textContent = '—'; }); $('vp-h2').textContent = 'Use valores positivos.'; return; }
    var ab = l * l;
    $('vp-b').textContent = pt(ab, 4); $('vp-v').textContent = pt(ab * h / 3, 4); $('vp-p').textContent = pt(ab * h, 4);
    $('vp-h2').textContent = 'V = A_B · h ÷ 3. O prisma de mesma base e altura tem ' + pt(ab * h, 3) + ': a pirâmide tem exatamente um terço.'; });`
}) });

// ===================== AULA 2: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 50', h1: 'Pirâmide: <span style="color:var(--growth);">área total e volume em problemas</span>',
  sub: 'Vidros em forma de pirâmide, silos, telhados e embalagens: o enunciado decide se precisamos da área (cobrir) ou do volume (encher).',
  badges: [['A_T = A_B + A_L'], ['V = A_B · h ÷ 3', 'growth'], ['cobrir × encher', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do enunciado ao cálculo.', [
  ['Ler', 'o que a pergunta pede', 'bulb'],
  ['Medidas', 'h, ℓ, m e a', 'target'],
  ['Pitágoras', 'ligar h, a e m', 'chart'],
  ['Calcular', 'área e volume', 'link'],
  ['Conferir', 'unidade e ordem de grandeza', 'scale']
]));
b.push(objetivosSlide([
  'Combinar <strong>área total</strong> e <strong>volume</strong> em problemas com pirâmides.',
  'Usar <strong>Pitágoras</strong> para obter $m$ (apótema) a partir de $h$.',
  'Converter para <strong>litros</strong> quando o problema pede capacidade.',
  'Comparar <strong>pirâmide e prisma</strong> de mesma base e altura.'
], 'Dica', 'Desenhe o triângulo retângulo $h$–$a$–$m$: ele aparece em quase todo problema de pirâmide regular.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O vidro piramidal', `
          ${lede('Uma peça de vidro tem a forma de pirâmide quadrangular regular de lado 6 cm e altura 4 cm. A <strong>área</strong> diz quanto de papel de embrulho cobre a peça; o <strong>volume</strong>, quanto de vidro foi usado.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Grandeza', 'Cálculo', 'Valor'], [['Apótema $m$', '$√{16 + 9}$', '5 cm'], ['Área total', '$36 + 4 · 6 · 5 ÷ 2$', '96 cm²'], ['Volume', '$36 · 4 ÷ 3$', '48 cm³']])}
            ${mini('Para embrulhar totalmente a peça, calcula-se:', ['o volume', 'a área total', 'o perímetro da base', 'a altura'], 1, 'Embrulhar é <strong>cobrir</strong>: área total, $96$ cm².')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estratégia', 'Checklist de um problema de pirâmide', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>1. O que pede: <strong>área</strong> (cobrir) ou <strong>volume</strong> (encher)?</li>
                <li>2. Quais medidas foram dadas: $ℓ$, $h$, $m$, aresta lateral?</li>
                <li>3. Falta alguma? Use <strong>Pitágoras</strong>: $m^{2} = h^{2} + a^{2}$.</li>
                <li>4. Aplique $A_T = A_B + A_L$ ou $V = A_B · h ÷ 3$.</li>
                <li>5. Converta unidades (1 m³ $= 1\\ 000$ L) e confira.</li>
              </ul>
            </div>
            ${W.box('Capacidade em litros', W.row(W.nm('pb2-l', 'lado ℓ (m)', 2, 'any', 'min="0"'), W.nm('pb2-h', 'altura h (m)', 3, 'any', 'min="0"')) + W.txt('pb2-v', 'Volume (m³) = ') + W.txt('pb2-L', 'Capacidade (L) = ') + W.hint('pb2-hh'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Área e volume juntos', 'Uma pirâmide quadrangular regular tem lado da base 6 cm e altura 4 cm. Calcule a área total e o volume.', [
  ['Apótema', '$m = √{4^{2} + 3^{2}} = 5$ cm.'],
  ['Área total', '$A_T = 36 + 4 · {6 · 5|2} = 36 + 60 = 96$ cm².'],
  ['Volume', '$V = {36 · 4|3} = 48$ cm³.']
], '$A_T = 96$ cm² e $V = 48$ cm³.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Um monte de areia', 'Um monte de areia tem a forma de pirâmide de base quadrada de lado 2 m e altura 3 m. Quantos litros de areia há (considere sem vazios)?', [
  ['Volume', '$V = {2^{2} · 3|3} = 4$ m³.'],
  ['Litros', '$4 · 1\\ 000 = 4\\ 000$ L.']
], '<strong>4 000 L</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Cubo com pirâmide', 'Um cubo de aresta 6 dm contém uma pirâmide de mesma base e altura. Quantos litros ocupa a pirâmide e quantos faltam para completar o cubo?', [
  ['Volume do cubo', '$6^{3} = 216$ dm³ $= 216$ L.'],
  ['Pirâmide', '$216 ÷ 3 = 72$ L.'],
  ['Restante', '$216 − 72 = 144$ L.']
], 'A pirâmide ocupa <strong>72 L</strong>; faltam <strong>144 L</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Telhado piramidal', 'Um telhado tem a forma de pirâmide quadrangular regular de lado 8 m e altura 3 m. Qual a área a cobrir com telhas?', [
  ['Apótema', '$a = 4$; $m = √{3^{2} + 4^{2}} = 5$ m.'],
  ['Área lateral', '$A_L = 4 · {8 · 5|2} = 80$ m².']
], '<strong>80 m²</strong> (o telhado não tem base).', 'growth'));

b.push(pratique('Área e volume', 'A pirâmide quadrangular regular de lado 6 e altura 4 tem volume:',
  ['24', '48', '96', '144', '72'], 1,
  '$36 · 4 ÷ 3 = 48$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Litros', 'Um monte de areia piramidal de base 2 m × 2 m e altura 3 m tem quantos litros?',
  ['400', '1 200', '4 000', '12 000', '1 333'], 2,
  '$V = 2 · 2 · 3 ÷ 3 = 4$ m³ $= 4\\ 000$ L. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Telhado', 'Um telhado tem a forma de pirâmide quadrangular regular, com lado da base 8 m e altura 3 m. A área a cobrir com telhas, em m², é:',
  ['40', '60', '80', '96', '120'], 2,
  '$m = 5$; $A_L = 4 · 8 · 5 ÷ 2 = 80$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os problemas de pirâmide enganam', [
  ['Misturar h e m', 'Volume usa $h$; área lateral usa $m$.'],
  ['Telhado e base', 'Cobertura: só $A_L$. Embalagem fechada: $A_T$.'],
  ['Cubo e pirâmide', 'Mesma base e altura: pirâmide $= 1 ÷ 3$ do cubo; sobram $2 ÷ 3$.'],
  ['Litros', '1 m³ $= 1\\ 000$ L; 1 dm³ $= 1$ L.']
]));
b.push(quiz([
  { q: 'Cobrir um telhado piramidal sem base pede:', o: ['volume', 'área lateral', 'área total', 'perímetro'], a: 1 },
  { q: 'Um cubo de 216 L contém uma pirâmide de mesma base e altura. O volume restante é:', o: ['72 L', '108 L', '144 L', '216 L'], a: 2 },
  { q: 'Para achar $m$ conhecendo $h$ e $ℓ$ (base quadrada) usa-se:', o: ['$m = h + ℓ$', '$m^{2} = h^{2} + (ℓ ÷ 2)^{2}$', '$m = ℓ ÷ h$', '$m^{2} = h^{2} − ℓ^{2}$'], a: 1 },
  { q: '4 m³ equivalem a:', o: ['40 L', '400 L', '4 000 L', '40 000 L'], a: 2 }
]));
b.push(fechamento([
  ['Cobrir', 'Área total ou lateral.'],
  ['Encher', 'Volume (÷ 3) e litros.'],
  ['Apoio', 'Pitágoras liga $h$, $a$ e $m$.']
], 'Cobrir ou encher? A resposta decide a fórmula.'));

pages.push({ out: BASE + 'aula-2-problemas-de-area-e-volume.html', html: K.deck({
  title: 'Pirâmide: área total e volume — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 50 · Área total e volume', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pb2-l', 'pb2-h'], function(){ var l = +$('pb2-l').value, h = +$('pb2-h').value;
    if(![l, h].every(isFinite) || l <= 0 || h <= 0){ $('pb2-v').textContent = '—'; $('pb2-L').textContent = '—'; $('pb2-hh').textContent = 'Use valores positivos.'; return; }
    var v = l * l * h / 3;
    $('pb2-v').textContent = pt(v, 4); $('pb2-L').textContent = pt(v * 1000, 1);
    $('pb2-hh').textContent = 'V = ℓ² · h ÷ 3; multiplique por 1 000 para obter litros.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Pirâmide: <span>volume e problemas</span>',
  lede: 'V = A_B · h ÷ 3: um terço do prisma de mesma base e altura. Cobrir pede área; encher pede volume.',
  badges: ['V = A_B · h ÷ 3', '⅓ do prisma', 'cobrir × encher'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Fórmula', 'V = A_B · h ÷ 3', 'chart', 'primary', p('Qualquer pirâmide, qualquer base.') + call('Exemplo', 'ℓ = 6, h = 4 ⇒ $V = 48$.', 'success')],
    ['Prisma × pirâmide', 'Fator 1/3', 'target', 'growth', p('Mesma base e altura.') + call('Cubo 600', 'Pirâmide 200.', 'success')],
    ['Escala', 'Dobrar medidas', 'scale', 'decay', li(['$h$ ×2 ⇒ $V$ ×2.', 'ℓ ×2 ⇒ $V$ ×4.', 'Ambos ×2 ⇒ $V$ ×8.'])],
    ['Bases', 'Área da base', 'link', 'success', p('Quadrado $ℓ^{2}$; triângulo $bt ÷ 2$.') + call('Hexágono', '$3ℓ^{2}√{3} ÷ 2$.', 'success')],
    ['Problemas', 'Cobrir × encher', 'up', 'primary', p('Telhado: só $A_L$.') + call('Litros', '1 m³ = 1 000 L.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['h do sólido, não m.', 'Dividiu por 3?', 'Unidades iguais?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o ÷ 3.', 'Usar o apótema como altura.', 'Dobrar o lado e achar que o volume dobra.', 'Trocar cobrir por encher.', 'Errar a conversão para litros.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Volume da pirâmide <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: volume, cubo e pirâmide, escala, litros e telhado.',
  final: 'Base, altura, dividir por 3: o volume da pirâmide.',
  questions: [
    { badge: 'Estilo ENEM · volume', text: 'Uma pirâmide tem base quadrada de lado 6 cm e altura 4 cm.', cmd: 'Seu volume, em cm³, é:', opts: ['24', '48', '72', '144', '36'], a: 1,
      sol: '<p>$V = 36 · 4 ÷ 3 = 48$.</p>' },
    { badge: 'Estilo ENEM · cubo e pirâmide', text: 'Um cubo de volume 600 cm³ contém uma pirâmide de mesma base e altura.', cmd: 'O volume da pirâmide, em cm³, é:', opts: ['100', '150', '200', '300', '400'], a: 2,
      sol: '<p>$600 ÷ 3 = 200$.</p>' },
    { badge: 'Estilo ENEM · altura dobrada', text: 'Em uma pirâmide, a altura é dobrada e a base é mantida.', cmd: 'O volume fica multiplicado por:', opts: ['1', '2', '3', '4', '8'], a: 1,
      sol: '<p>$V$ é proporcional a $h$: dobra.</p>' },
    { badge: 'Estilo ENEM · lado dobrado', text: 'Em uma pirâmide de base quadrada, o lado da base é dobrado e a altura é mantida.', cmd: 'O volume fica multiplicado por:', opts: ['1', '2', '3', '4', '8'], a: 3,
      sol: '<p>$V$ é proporcional a $ℓ^{2}$: $2^{2} = 4$.</p>' },
    { badge: 'Estilo ENEM · litros', text: 'Um monte de areia tem a forma de uma pirâmide de base quadrada de lado 2 m e altura 3 m.', cmd: 'O volume de areia, em litros, é:', opts: ['400', '1 200', '4 000', '12 000', '1 333'], a: 2,
      sol: '<p>$V = 4 · 3 ÷ 3 = 4$ m³ $= 4\\ 000$ L.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">pirâmides</span>',
  subtitle: 'Julgue cada afirmação sobre área e volume da pirâmide.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Pirâmide: um terço do prisma, apótema na face, altura perpendicular à base.',
    afirmacoes: [
      ['Uma pirâmide e um prisma de mesma base e altura têm o mesmo volume.', false, 'Falsa: a pirâmide tem um terço do volume do prisma.'],
      ['O volume da pirâmide é $A_B · h ÷ 3$.', true, 'Verdadeira.'],
      ['Dobrar a altura de uma pirâmide dobra seu volume.', true, 'Verdadeira: $V$ é proporcional a $h$.'],
      ['Dobrar o lado da base quadrada dobra o volume.', false, 'Falsa: $V$ é proporcional a $ℓ^{2}$; o volume quadruplica.'],
      ['O apótema da pirâmide é a altura do sólido.', false, 'Falsa: o apótema é a altura de uma face lateral; a altura do sólido é perpendicular à base.'],
      ['Uma pirâmide de base com $n$ lados tem $n + 1$ faces.', true, 'Verdadeira: $n$ laterais e a base.'],
      ['Em pirâmide regular, as faces laterais são triângulos congruentes.', true, 'Verdadeira.'],
      ['Para cobrir um telhado piramidal sem base, usa-se a área total.', false, 'Falsa: usa-se só a área lateral.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Volume da pirâmide: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: volume, cubo, base dada, litros e escala. Digite o número pedido.',
  final: 'Você percorreu a trilha: ÷ 3, base e unidades.',
  problems: [
    { tag: 'Volume', q: 'Qual o volume, em cm³, de uma pirâmide de base quadrada de lado 6 cm e altura 4 cm?', a: 48, ph: 'cm³', hint: '36 · 4 ÷ 3.', sol: '<p>$48$.</p>' },
    { tag: 'Cubo', q: 'Um cubo de 600 cm³ contém uma pirâmide de mesma base e altura. Qual o volume da pirâmide, em cm³?', a: 200, ph: 'cm³', hint: '600 ÷ 3.', sol: '<p>$200$.</p>' },
    { tag: 'Base dada', q: 'Uma pirâmide tem base de 12 cm² e altura 9 cm. Qual o volume, em cm³?', a: 36, ph: 'cm³', hint: '12 · 9 ÷ 3.', sol: '<p>$36$.</p>' },
    { tag: 'Litros', q: 'Um monte piramidal de base 2 m × 2 m e altura 3 m tem quantos litros?', a: 4000, ph: 'L', hint: '4 m³ · 1 000.', sol: '<p>$4\\ 000$ L.</p>' },
    { tag: 'Escala', q: 'Se o lado da base quadrada dobra (altura fixa), por quanto o volume fica multiplicado?', a: 4, ph: 'fator', hint: '2².', sol: '<p>$4$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Pirâmide: Volume', accent: 'growth', icon: 'triangle',
  aulas: [['Aulas 48–49', 'Volume da pirâmide', 'aula-1-volume-da-piramide.html'], ['Aula 50', 'Pirâmide: área total e volume em problemas', 'aula-2-problemas-de-area-e-volume.html']],
  enem: 'Volume da pirâmide no estilo ENEM', cria: 'Verdadeiro ou falso: pirâmides', pratica: 'Volume da pirâmide: trilha de desafios'
}, pages };
