// Unidade 4 — Razões entre grandezas: energia, densidade, IMC, densidade demográfica e velocidade média (aulas 10 a 13)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { p, wl, call, li } = G, tb = G.T;
const TRI = 1, DIR = 'razoes-entre-grandezas', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u04', BRAND = 'Razões entre Grandezas', CAP = 'Aulas 10 a 13';
const pages = [];

// ===================== AULA 1: energia, densidade e IMC =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 10 e 11', h1: 'Energia, densidade e IMC: <span style="color:var(--primary);">grandezas que são razões</span>',
  sub: 'A conta de luz em kWh, a densidade de um material em g/cm³ e o IMC em kg/m²: três situações em que uma grandeza nasce da divisão ou da multiplicação de outras.',
  badges: [['kWh = kW · h'], ['d = m ÷ V', 'growth'], ['IMC = m ÷ h²', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Como as unidades se combinam para formar novas grandezas.', [
  ['Energia elétrica', 'quilowatt-hora: potência × tempo', 'bulb'],
  ['Densidade', 'massa ÷ volume e o salto de g/cm³ para kg/m³', 'scale'],
  ['IMC', 'massa ÷ altura ao quadrado', 'chart'],
  ['Problemas', 'conta de luz, bloco de gelo e peso de uma pessoa', 'target']
]));
a.push(objetivosSlide([
  'Calcular o <strong>consumo em kWh</strong> e o custo na conta de energia.',
  'Calcular <strong>densidade</strong> e converter entre <strong>g/cm³</strong> e <strong>kg/m³</strong>.',
  'Usar a fórmula do <strong>IMC</strong> para achar a massa, a altura ou o próprio IMC.',
  'Escolher a <strong>unidade</strong> certa para cada grandeza e converter antes de calcular.'
], 'Dica', 'Quando tiver dúvida sobre a unidade do resultado, escreva as unidades junto com os números e <strong>simplifique</strong>: a unidade que sobra é a da resposta.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O que um relógio, uma balança e um multímetro têm em comum?', `
          ${lede('Todos servem para <strong>medir</strong> uma grandeza: tempo, massa, corrente e tensão elétrica. Algumas grandezas são medidas diretamente; outras são calculadas a partir de duas ou mais — como a energia que consumimos em casa.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Na conta de luz, a unidade de consumo é o quilowatt-hora (kWh). Ela mede:', ['potência', 'tempo', 'energia', 'tensão elétrica'], 2, 'O kWh é uma unidade de <strong>energia</strong>: é a energia gasta por um aparelho de 1 kW de potência ligado por 1 hora.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Grandeza derivada = combinação de outras. <strong>Energia = potência × tempo</strong>; <strong>densidade = massa ÷ volume</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · energia elétrica', 'Quilowatt-hora: potência × tempo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Potência</strong> mede o ritmo de uso de energia: unidade watt (W). <strong>1 kW = 1 000 W</strong>.</li>
                <li><strong>1 kWh</strong> é a energia de um aparelho de <strong>1 kW</strong> ligado por <strong>1 h</strong>.</li>
                <li>Consumo (kWh) = potência (<strong>kW</strong>) × tempo (<strong>h</strong>). Converta watts em quilowatts <strong>antes</strong> de multiplicar.</li>
                <li>Valor da conta = consumo × tarifa (reais por kWh).</li>
              </ul>
            </div>
            ${W.box('Calculadora da conta de luz', W.row(W.nm('e1-p', 'Potência (W)', 250, 'any'), W.nm('e1-h', 'Horas por dia', 5, 'any')) + W.row(W.nm('e1-d', 'Dias', 30, 'any'), W.nm('e1-t', 'Tarifa (reais por kWh)', 0.65, 'any')) + W.txt('e1-k', 'Consumo: ') + W.txt('e1-r', 'Custo no mês: ') + W.hint('e1-n'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O equipamento novo de Abigail', 'Abigail comprou um equipamento de <strong>250 W</strong> que fica ligado <strong>5 h por dia</strong> durante 30 dias. A tarifa é de <strong>R$ 0,65 por kWh</strong>. Quanto o aparelho acrescenta à conta?', [
  ['Passe a potência para kW', '250 W ÷ 1 000 = 0,25 kW.'],
  ['Calcule o tempo total', '5 h × 30 dias = 150 h.'],
  ['Consumo em kWh', '0,25 kW × 150 h = 37,5 kWh.'],
  ['Multiplique pela tarifa', '37,5 × 0,65 = R$ 24,375 ≈ R$ 24,38.']
], 'O equipamento acrescenta cerca de <strong>R$ 24,38</strong> à conta do mês.'));

a.push(sl('Teoria · densidade', 'Massa em cada unidade de volume', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Densidade = massa ÷ volume</strong>. No SI: <strong>kg/m³</strong>. Também se usa <strong>g/cm³</strong> (ou g/mL).</li>
                <li><strong>1 g/cm³ = 1 000 kg/m³</strong> (e 1 kg/m³ = 0,001 g/cm³).</li>
                <li>Água líquida: <strong>1,0 g/cm³</strong> = 1 000 kg/m³. Gelo: <strong>0,92 g/cm³</strong> = 920 kg/m³ — por isso o gelo flutua.</li>
                <li>Massa = densidade × volume; volume = massa ÷ densidade.</li>
              </ul>
            </div>
            ${W.box('Calculadora de densidade', W.row(W.nm('d1-m', 'Massa (g)', 896, 'any'), W.nm('d1-v', 'Volume (cm³ ou mL)', 200, 'any')) + W.txt('d1-g', 'Densidade: ') + W.txt('d1-k', 'No SI: ') + W.hint('d1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Um bloco de gelo de 2 m³', 'Qual é a massa de um bloco de gelo de <strong>2 m³</strong>, sabendo que a densidade do gelo é <strong>0,92 g/cm³</strong>?', [
  ['Converta a densidade para o SI', '0,92 g/cm³ = 0,92 × 1 000 = 920 kg/m³.'],
  ['Use massa = densidade × volume', '920 kg/m³ × 2 m³.'],
  ['Simplifique as unidades', 'kg/m³ × m³ = kg.']
], 'A massa do bloco é de <strong>1 840 kg</strong>.'));

a.push(sl('Teoria · IMC', 'Índice de Massa Corporal', `
          <div class="grid2">
            <div>
              ${lede('O IMC relaciona a <strong>massa</strong> (kg) com o <strong>quadrado da altura</strong> (m). É uma ferramenta de triagem: sozinho, não diagnostica nada.')}
              ${p('IMC = massa ÷ altura²   (kg/m²)')}
              ${callout('Exemplo', '93 kg e 1,82 m: altura² = 3,3124; IMC = 93 ÷ 3,3124 ≈ <strong>28,1</strong>.', 'success')}
            </div>
            <div>
              ${tbl(['IMC', 'Situação'], [['abaixo de 17', 'muito abaixo do peso'], ['17 a 18,49', 'abaixo do peso'], ['18,5 a 24,99', 'peso normal'], ['25 a 29,99', 'acima do peso'], ['30 a 34,99', 'obesidade I'], ['35 a 39,99', 'obesidade II'], ['40 ou mais', 'obesidade III']])}
              ${W.box('Calculadora de IMC', W.row(W.nm('i1-m', 'Massa (kg)', 63, 'any'), W.nm('i1-a', 'Altura (m)', 1.5, 'any')) + W.txt('i1-r', 'IMC: ') + W.hint('i1-h'))}
            </div>
          </div>`, { cls: '' }));

a.push(pratique('A massa de Renata', 'Renata tem 1,50 m de altura e IMC igual a 28 (sobrepeso). Qual é, aproximadamente, a massa dela?',
  ['63 kg', '68 kg', '72 kg', '76 kg', '80 kg'], 0,
  'IMC $= m ÷ h^{2}$, então $m = \\text{IMC} · h^{2}$. Com $h^{2} = 1,5^{2} = 2,25$: $m = 28 · 2,25 = 63$ kg. <strong>Alternativa A.</strong> Sempre dá para achar uma das três informações conhecendo as outras duas.'.replace('\\text{IMC}', '"IMC"')));
a.push(pratique('O mercúrio do garimpeiro', 'A densidade do mercúrio é de cerca de 13 g/cm³. Qual a massa necessária para encher um frasco de meio litro?',
  ['0,65 kg', '6,5 kg', '65 kg', '26 kg', '650 g'], 1,
  'Meio litro $= 500$ mL $= 500$ cm³. Massa $= 13 · 500 = 6\\ 500$ g $= 6,5$ kg. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('O chuveiro elétrico', 'Um chuveiro de 5 400 W é usado 20 minutos por dia, durante 30 dias. A tarifa é de R$ 0,70 por kWh. O custo mensal do chuveiro é:',
  ['R$ 18,90', 'R$ 37,80', 'R$ 56,70', 'R$ 113,40', 'R$ 378,00'], 1,
  '$5\\ 400$ W $= 5,4$ kW. Tempo: $20$ min × $30$ dias $= 600$ min $= 10$ h. Consumo: $5,4 · 10 = 54$ kWh. Custo: $54 · 0,70 = 37,80$ reais. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as razões enganam', [
  ['Usar watts em vez de quilowatts', 'kWh pede kW: 250 W = 0,25 kW. Esquecer a conversão multiplica o consumo por 1 000.'],
  ['Trocar g/cm³ por kg/m³', '1 g/cm³ = <strong>1 000</strong> kg/m³ (e não 100 nem 10).'],
  ['Esquecer o quadrado no IMC', 'Divida pela altura <strong>ao quadrado</strong>: 1,50 m dá 2,25, não 1,50.'],
  ['Tempo em minutos', '20 min = 1/3 h, não 0,20 h. Converta antes de multiplicar.']
]));
a.push(quiz([
  { q: 'Um aparelho de 2 000 W ligado por 3 h consome:', o: ['6 kWh', '0,6 kWh', '60 kWh', '6 000 kWh'], a: 0 },
  { q: '0,92 g/cm³ equivalem a:', o: ['92 kg/m³', '920 kg/m³', '9 200 kg/m³', '0,92 kg/m³'], a: 1 },
  { q: 'IMC de uma pessoa com 80 kg e 2,0 m de altura:', o: ['40', '20', '16', '10'], a: 1 },
  { q: 'A massa de 3 m³ de um material de densidade 800 kg/m³ é:', o: ['240 kg', '2 400 kg', '800 kg', '266 kg'], a: 1 }
]));
a.push(fechamento([
  ['Energia', 'kWh = kW × h; custo = kWh × tarifa.'],
  ['Densidade', 'd = m ÷ V; 1 g/cm³ = 1 000 kg/m³.'],
  ['IMC', 'IMC = m ÷ h² (kg/m²).']
], 'Converta as unidades primeiro, depois calcule a razão.'));

pages.push({ out: BASE + 'aula-1-energia-densidade-imc.html', html: K.deck({
  title: 'Energia, densidade e IMC — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 10 e 11 · Energia, densidade e IMC', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: d == null ? 0 : d, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['e1-p', 'e1-h', 'e1-d', 'e1-t'], function(){ var P = +$('e1-p').value, h = +$('e1-h').value, d = +$('e1-d').value, t = +$('e1-t').value;
    if(![P, h, d, t].every(isFinite)){ $('e1-k').textContent = '—'; return; }
    var kwh = P / 1000 * h * d; $('e1-k').textContent = pt(kwh, 2) + ' kWh (' + pt(P / 1000, 3) + ' kW × ' + pt(h * d, 2) + ' h)'; $('e1-r').textContent = 'R$ ' + pt(kwh * t, 2);
    $('e1-n').textContent = 'Primeiro watts → quilowatts (÷ 1 000), depois × horas, depois × tarifa.'; });
  bind(['d1-m', 'd1-v'], function(){ var m = +$('d1-m').value, v = +$('d1-v').value; if(!isFinite(m) || !isFinite(v) || v <= 0){ $('d1-g').textContent = '—'; $('d1-k').textContent = ''; return; }
    var d = m / v; $('d1-g').textContent = pt(d, 3) + ' g/cm³'; $('d1-k').textContent = pt(d * 1000, 1) + ' kg/m³';
    $('d1-h').textContent = d < 1 ? 'Menor que 1 g/cm³: flutuaria na água.' : d === 1 ? 'Igual à água.' : 'Maior que 1 g/cm³: afundaria na água.'; });
  bind(['i1-m', 'i1-a'], function(){ var m = +$('i1-m').value, a = +$('i1-a').value; if(!isFinite(m) || !isFinite(a) || a <= 0){ $('i1-r').textContent = '—'; return; }
    var i = m / (a * a), s = i < 17 ? 'muito abaixo do peso' : i < 18.5 ? 'abaixo do peso' : i < 25 ? 'peso normal' : i < 30 ? 'acima do peso' : i < 35 ? 'obesidade I' : i < 40 ? 'obesidade II' : 'obesidade III';
    $('i1-r').textContent = pt(i, 1) + ' kg/m² — ' + s; $('i1-h').textContent = 'IMC é só uma triagem: não substitui avaliação profissional.'; });`
}) });

// ===================== AULA 2: densidade demográfica e velocidade média =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 12 e 13', h1: 'Densidade demográfica e velocidade média: <span style="color:var(--growth);">razões que descrevem o mundo</span>',
  sub: 'Quantas pessoas por quilômetro quadrado? Quantos quilômetros por hora? Duas razões — e a regra de ouro: converta as unidades antes de dividir.',
  badges: [['hab/km²'], ['v = d ÷ t', 'growth'], ['unidade do resultado', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Duas razões do cotidiano, uma estratégia.', [
  ['Contar uma multidão', 'área de amostra × proporção', 'bulb'],
  ['Densidade demográfica', 'habitantes ÷ área em km²', 'chart'],
  ['Velocidade média', 'distância ÷ tempo, em km/h ou m/s', 'link'],
  ['Conversões', 'min → h, m → km, km/h ↔ m/s', 'scale'],
  ['Problemas', 'Altamira, Paraná, corridas e carros', 'target']
]));
b.push(objetivosSlide([
  'Calcular a <strong>densidade demográfica</strong> e, a partir dela, a população ou a área.',
  'Calcular <strong>velocidade média</strong>, distância e tempo, escolhendo a unidade certa.',
  '<strong>Converter</strong> unidades (minutos em horas, metros em quilômetros) antes de dividir.',
  'Usar as <strong>unidades</strong> para conferir o resultado.'
], 'Dica', 'Escreva as unidades na conta: se aparece hab/km² × km², sobra hab. As unidades <strong>corrigem</strong> você.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quantas pessoas há na multidão?', `
          ${lede('Um método simples: escolha uma <strong>área pequena</strong> da foto, conte as pessoas nela e multiplique pela quantidade de áreas iguais que cabem na multidão toda. É uma <strong>densidade</strong> (pessoas por área) usada para estimar o total.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Em 10 m² cabem 30 pessoas. Em uma praça de 2 000 m² com a mesma densidade, haveria:', ['600 pessoas', '6 000 pessoas', '60 000 pessoas', '66 pessoas'], 1, 'Densidade: $30 ÷ 10 = 3$ pessoas por m². População: $3 · 2\\ 000 = 6\\ 000$ pessoas.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Densidade é uma <strong>razão</strong>: quantidade por unidade de área (ou de volume). Conhecida a densidade, a área dá o total e o total dá a área.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · densidade demográfica', 'Habitantes por quilômetro quadrado', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Densidade demográfica = habitantes ÷ área</strong>, normalmente em <strong>hab/km²</strong>.</li>
                <li>Habitantes = densidade × área; área = habitantes ÷ densidade.</li>
                <li>Se a área vier em m² ou hm², converta para km² antes (1 km² = 1 000 000 m²).</li>
                <li>Altamira (PA), o maior município do Brasil, tem 159 533,306 km² e tinha 126 279 habitantes (Censo 2022): densidade $≈ 0,79$ hab/km².</li>
              </ul>
            </div>
            ${W.box('Densidade demográfica', W.row(W.nm('p1-h', 'Habitantes', 126279, 'any'), W.nm('p1-a', 'Área (km²)', 159533.306, 'any')) + W.txt('p1-d', 'Densidade: ') + W.hint('p1-n'))}
          </div>`, { cls: 'growth' }));

b.push(pratique('População do Paraná', 'O Paraná tem densidade demográfica de 57,42 hab/km² e área de 199 307,922 km². A população do estado é, aproximadamente:',
  ['11 444 261', '14 411 357', '11 721 456', '14 114 776'], 0,
  'Habitantes $=$ densidade $·$ área $= 57,42 · 199\\ 307,922 ≈ 11\\ 444\\ 261$. As unidades confirmam: hab/km² × km² = hab. <strong>Alternativa A.</strong>', '', 'growth'));
b.push(pratique('Iporanga (SP)', 'A densidade demográfica de Iporanga é 3,5 hab/km² e a área do município é de 1 150 km². Quantos habitantes tem?',
  ['329', '401', '3 286', '4 025', '40 250'], 3,
  '$3,5 · 1\\ 150 = 4\\ 025$ habitantes. <strong>Alternativa D.</strong>', '', 'growth'));

b.push(sl('Teoria · velocidade média', 'Distância ÷ tempo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Velocidade instantânea</strong>: a que o velocímetro mostra naquele momento.</li>
                <li><strong>Velocidade média = distância ÷ tempo</strong>. Daí: distância = v · t e tempo = distância ÷ v.</li>
                <li>Unidades: <strong>m/s</strong> (SI) ou <strong>km/h</strong>. <strong>km/h ÷ 3,6 = m/s</strong>.</li>
                <li>Converta o tempo (min → h) e a distância (m → km) <strong>antes</strong> de dividir.</li>
              </ul>
            </div>
            ${W.box('Velocidade média', W.row(W.nm('v1-d', 'Distância (m)', 1200, 'any'), W.nm('v1-t', 'Tempo (min)', 20, 'any')) + W.txt('v1-k', 'Em km/h: ') + W.txt('v1-m', 'Em m/s: ') + W.hint('v1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Caminhada de 1 200 m em 20 min', 'Qual é a velocidade média, em <strong>km/h</strong>, de uma pessoa que anda 1 200 m em 20 min?', [
  ['Converta a distância', '1 200 m = 1,2 km.'],
  ['Converta o tempo', '20 min = 20/60 h = 1/3 h.'],
  ['Divida', '1,2 km ÷ (1/3 h) = 1,2 × 3 = 3,6 km/h.']
], 'A velocidade média é <strong>3,6 km/h</strong> (ou 1 m/s).', 'growth'));

b.push(pratique('Corrida de 4 km', 'Uma pessoa corre 4,0 km com velocidade média de 12 km/h. Quanto tempo leva?',
  ['3,0 min', '8,0 min', '20 min', '30 min', '33 min'], 2,
  'Tempo $=$ distância $÷$ velocidade $= 4 ÷ 12 = 1/3$ h $= 20$ min. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('A viagem de ônibus', 'Um ônibus mantém velocidade média de 90 km/h durante 2 h 20 min. Qual a distância percorrida?',
  ['180 km', '200 km', '210 km', '225 km', '240 km'], 2,
  '$2$ h $20$ min $= 2 + 20/60 = 7/3$ h. Distância: $90 · 7/3 = 210$ km. <strong>Alternativa C.</strong> (Não é $2,20$ h!)'));

b.push(armadilhas('Cuidados', 'Onde as razões escorregam', [
  ['Área em unidade errada', 'Densidade demográfica pede <strong>km²</strong>. Se a área vier em m², converta antes.'],
  ['Minutos como decimal', '20 min = 1/3 h ≈ 0,33 h, não 0,20 h.'],
  ['Trocar a operação', 'Densidade × área = habitantes; população ÷ densidade = área.'],
  ['Esquecer o ÷ 3,6', 'km/h → m/s divide por 3,6; m/s → km/h multiplica.']
]));
b.push(quiz([
  { q: '600 000 hab. em 200 km² → densidade:', o: ['30 hab/km²', '300 hab/km²', '3 000 hab/km²', '120 hab/km²'], a: 2 },
  { q: '36 km/h em m/s:', o: ['3,6', '10', '100', '129,6'], a: 1 },
  { q: '180 km em 2 h 30 min → velocidade média:', o: ['60 km/h', '72 km/h', '90 km/h', '75 km/h'], a: 1 },
  { q: 'Densidade 25 hab/km², área 8 000 km²: população:', o: ['32', '320', '20 000', '200 000'], a: 3 }
]));
b.push(fechamento([
  ['Densidade demográfica', 'hab/km²: habitantes ÷ área, com a área em km².'],
  ['Velocidade média', 'v = d ÷ t; converta min → h e m → km antes.'],
  ['Unidades', 'Escreva-as na conta: a unidade que sobra é a do resultado.']
], 'Uma razão só faz sentido com as unidades certas — confira-as sempre.'));

pages.push({ out: BASE + 'aula-2-densidade-demografica-e-velocidade.html', html: K.deck({
  title: 'Densidade demográfica e velocidade média — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 12 e 13 · Densidade demográfica e velocidade média', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['p1-h', 'p1-a'], function(){ var h = +$('p1-h').value, a = +$('p1-a').value; if(!isFinite(h) || !isFinite(a) || a <= 0){ $('p1-d').textContent = '—'; return; }
    $('p1-d').textContent = pt(h / a, 2) + ' hab/km²'; $('p1-n').textContent = 'Densidade = habitantes ÷ área (km²).'; });
  bind(['v1-d', 'v1-t'], function(){ var d = +$('v1-d').value, t = +$('v1-t').value; if(!isFinite(d) || !isFinite(t) || t <= 0){ $('v1-k').textContent = '—'; $('v1-m').textContent = ''; return; }
    var kmh = (d / 1000) / (t / 60); $('v1-k').textContent = pt(kmh, 2) + ' km/h'; $('v1-m').textContent = pt(kmh / 3.6, 2) + ' m/s';
    $('v1-h').textContent = 'Convertido: ' + pt(d / 1000, 3) + ' km em ' + pt(t / 60, 3) + ' h.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Razões entre grandezas: <span>fórmulas e unidades</span>',
  lede: 'Energia (kWh), densidade (g/cm³ e kg/m³), IMC, densidade demográfica e velocidade média — cada uma é uma razão, e a unidade é parte da resposta.',
  badges: ['kWh = kW · h', 'd = m/V', 'IMC = m/h²', 'v = d/t'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Energia', 'Consumo e custo', 'chart', 'primary', p('Consumo (kWh) = potência (kW) × tempo (h). Custo = kWh × tarifa.') + call('Exemplo', '250 W, 5 h/dia, 30 dias: 0,25 × 150 = 37,5 kWh.', 'success')],
    ['Densidade', 'Massa por volume', 'scale', 'growth', p('$d = {m|V}$ · $1\\ "g/cm"^3 = 1\\ 000\\ "kg/m"^3$') + call('Gelo', '0,92 g/cm³ = 920 kg/m³; 2 m³ → 1 840 kg.', 'success')],
    ['IMC', 'Massa e altura', 'link', 'decay', p('IMC = massa ÷ altura². Faixa normal: 18,5 a 24,99.') + call('Exemplo', '1,50 m e IMC 28 → massa 63 kg.', 'success')],
    ['Densidade demográfica', 'hab/km²', 'target', 'success', p('Habitantes = densidade × área (em km²).') + call('Altamira', '126 279 ÷ 159 533 ≈ 0,79 hab/km².', 'success')],
    ['Velocidade média', 'Distância ÷ tempo', 'up', 'primary', p('km/h ÷ 3,6 = m/s. Converta min → h antes de dividir.') + call('Exemplo', '1 200 m em 20 min = 1,2 km ÷ (1/3 h) = 3,6 km/h.', 'success')],
    ['Unidades', 'Como não errar', 'check', 'growth', li(['Escreva as unidades na conta.', 'A unidade que sobra é a da resposta.', 'Converta antes de calcular.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar watts na fórmula do kWh sem converter.', 'Trocar g/cm³ por kg/m³ com fator errado.', 'Esquecer o quadrado da altura no IMC.', 'Usar minutos como decimais de hora.', 'Deixar a área em m² na densidade demográfica.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Razões entre grandezas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: energia, densidade, IMC, densidade demográfica e velocidade média.',
  final: 'Converter as unidades antes de dividir e conferir a unidade do resultado resolve quase tudo.',
  questions: [
    { badge: 'Estilo ENEM · energia', text: 'Um ferro de passar de 1 200 W é usado 2 horas por semana. Em 4 semanas, a tarifa sendo R$ 0,80 por kWh:', cmd: 'O custo do uso do ferro nesse período é:', opts: ['R$ 2,40', 'R$ 7,68', 'R$ 7,68 por semana', 'R$ 76,80', 'R$ 192,00'], a: 1,
      sol: '<p>$1\\ 200$ W $= 1,2$ kW. Tempo: $2 · 4 = 8$ h. Consumo: $1,2 · 8 = 9,6$ kWh. Custo: $9,6 · 0,80 = $ R$ 7,68.</p>' },
    { badge: 'Estilo ENEM · densidade', text: 'Um bloco de madeira tem massa de 4,5 kg e volume de 6 000 cm³.', cmd: 'A densidade da madeira, em g/cm³, é:', opts: ['0,075', '0,75', '7,5', '750', '1,33'], a: 1,
      sol: '<p>Massa em gramas: $4,5$ kg $= 4\\ 500$ g. $d = 4\\ 500 ÷ 6\\ 000 = 0,75$ g/cm³ (menor que 1: flutua na água).</p>' },
    { badge: 'Estilo ENEM · IMC', text: 'Um adolescente tem 1,60 m de altura. Para ficar na faixa normal, seu IMC deve ser, no máximo, 24,99 (use 25).', cmd: 'A massa máxima dele, em kg, é:', opts: ['40', '55', '64', '72', '80'], a: 2,
      sol: '<p>Massa $=$ IMC $·$ altura$^{2} = 25 · 1,6^{2} = 25 · 2,56 = 64$ kg.</p>' },
    { badge: 'Estilo ENEM · densidade demográfica', text: 'Uma cidade tem 240 000 habitantes e área de 800 km².', cmd: 'Sua densidade demográfica é:', opts: ['30 hab/km²', '300 hab/km²', '3 000 hab/km²', '192 hab/km²', '0,3 hab/km²'], a: 1,
      sol: '<p>$240\\ 000 ÷ 800 = 300$ hab/km².</p>' },
    { badge: 'Estilo ENEM · velocidade média', text: 'Uma ciclista percorreu 27 km em 1 h 30 min.', cmd: 'Sua velocidade média, em m/s, foi de:', opts: ['5 m/s', '18 m/s', '10 m/s', '3,6 m/s', '0,3 m/s'], a: 0,
      sol: '<p>$1$ h $30$ min $= 1,5$ h. $v = 27 ÷ 1,5 = 18$ km/h. Em m/s: $18 ÷ 3,6 = 5$ m/s.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória das <span style="color:var(--growth);">razões e unidades</span>',
  subtitle: 'Encontre os pares: cada grandeza com a sua unidade ou fórmula.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se formarem um par (grandeza e unidade ou fórmula), elas ficam abertas.',
    final: 'Cada razão tem a sua unidade — saber o par é a metade da solução.',
    pares: [['Energia elétrica', 'kWh'], ['Densidade (SI)', 'kg/m³'], ['Densidade demográfica', 'hab/km²'], ['IMC', 'kg/m²'], ['Velocidade média', 'distância ÷ tempo'], ['1 g/cm³', '1 000 kg/m³']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Razões entre grandezas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas, da energia à velocidade média. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: energia, densidade, IMC, densidade demográfica e velocidade.',
  problems: [
    { tag: 'Energia', q: 'Um aparelho de <strong>500 W</strong> fica ligado 4 h por dia durante 30 dias. Qual o consumo em <strong>kWh</strong>?', a: 60, ph: 'kWh', hint: '500 W = 0,5 kW; tempo = 4 × 30 = 120 h.', sol: '<p>$0,5 · 120 = 60$ kWh.</p>' },
    { tag: 'Densidade', q: 'Um material tem densidade de 2,7 g/cm³. Qual a massa, em <strong>gramas</strong>, de 50 cm³ desse material?', a: 135, ph: 'g', hint: 'massa = densidade × volume.', sol: '<p>$2,7 · 50 = 135$ g.</p>' },
    { tag: 'IMC', q: 'Uma pessoa de 70 kg tem 1,75 m. Qual o IMC (arredonde para 1 casa decimal)?', a: 22.9, tol: 0.06, ph: 'IMC', hint: 'altura² = 1,75 × 1,75 = 3,0625.', sol: '<p>$70 ÷ 3,0625 ≈ 22,86 ≈ 22,9$ (peso normal).</p>' },
    { tag: 'Dens. demográfica', q: 'Uma ilha tem 12 000 habitantes e 48 km². Qual a densidade demográfica em hab/km²?', a: 250, ph: 'hab/km²', hint: 'Divida os habitantes pela área.', sol: '<p>$12\\ 000 ÷ 48 = 250$ hab/km².</p>' },
    { tag: 'Velocidade média', q: 'Um trem percorre 150 km em 1 h 15 min. Qual a velocidade média em <strong>km/h</strong>?', a: 120, ph: 'km/h', hint: '1 h 15 min = 1,25 h.', sol: '<p>$150 ÷ 1,25 = 120$ km/h.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Razões entre Grandezas', accent: 'success', icon: 'bars',
  aulas: [['Aulas 10–11', 'Energia, densidade e IMC', 'aula-1-energia-densidade-imc.html'], ['Aulas 12–13', 'Densidade demográfica e velocidade média', 'aula-2-densidade-demografica-e-velocidade.html']],
  enem: 'Razões entre grandezas no estilo ENEM', cria: 'Memória das razões e unidades', pratica: 'Razões entre grandezas: trilha de desafios'
}, pages };
