// Unidade 2 — Sistema Internacional de Unidades e prefixos (aulas 04 a 07)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar, cMemoria } = K;
const { p, wl, call, tb = G.T, li } = { ...G, tb: G.T };
const TRI = 1, DIR = 'sistema-internacional', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u02', BRAND = 'Sistema Internacional de Unidades', CAP = 'Aulas 04 a 07';
const pages = [];

// ===================== AULA 1: SI e grandezas derivadas (aulas 04 e 05) =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 04 e 05', h1: 'Sistema Internacional de Unidades: <span style="color:var(--primary);">medir é comparar com um padrão</span>',
  sub: 'Por que o mundo precisou padronizar as medidas, quais são as unidades de base do SI e como converter velocidades e outras grandezas derivadas.',
  badges: [['metro · quilograma · segundo'], ['1 m/s = 3,6 km/h', 'growth'], ['grandezas derivadas', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da polegada do rei ao padrão mundial.', [
  ['Medir é comparar', 'palmo, pé, jarda… e o problema de não ter padrão', 'book'],
  ['O SI', 'sete unidades de base reconhecidas no mundo todo', 'chart'],
  ['Milhas e quilômetros', 'convertendo entre sistemas diferentes', 'link'],
  ['Grandezas derivadas', 'velocidade, área, volume… obtidas das de base', 'scale'],
  ['Praticar', 'km/h ↔ m/s com o falcão-peregrino e Usain Bolt', 'target']
]));
a.push(objetivosSlide([
  'Explicar por que é preciso <strong>padronizar</strong> as unidades de medida.',
  'Citar as <strong>unidades de base</strong> do SI (metro, quilograma, segundo, kelvin, mol, ampere, candela).',
  'Converter <strong>milhas ↔ quilômetros</strong> e <strong>km/h ↔ m/s</strong>.',
  'Entender uma <strong>grandeza derivada</strong> como combinação de grandezas de base.'
], 'Para lembrar', 'Para passar de <strong>m/s para km/h</strong>, multiplique por <strong>3,6</strong>. Para voltar, divida por 3,6.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O sapato 42 serve nos Estados Unidos?', `
          ${lede('As numerações de roupas e sapatos mudam de país para país. Mas todo fabricante consegue indicar o comprimento do pé em <strong>centímetros</strong>. Por que o centímetro funciona em qualquer lugar?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O que um “padrão de medida” precisa ter?', ['Ser definido por uma pessoa importante', 'Ser o mesmo em todos os lugares e épocas', 'Mudar conforme o país', 'Usar sempre partes do corpo'], 1, 'Um padrão só funciona se for <strong>igual para todos</strong>, estável e reproduzível. O corpo do rei (palmo, pé, passo) mudava de rei para rei — e de país para país.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Medir é <strong>comparar</strong> uma grandeza com uma unidade-padrão. Sem padrão, duas pessoas medem “a mesma coisa” e chegam a números diferentes.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Um pouco de história', 'Da polegada ao Sistema Métrico Decimal', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Antigamente, cada região usava unidades próprias baseadas no corpo: <strong>polegada, pé, palmo, jarda, passo</strong>.</li>
                <li>A partir do século XV, com o crescimento do comércio, a imprecisão de unidades sem correspondência entre si virou um problema sério.</li>
                <li>Em <strong>1789</strong> nasceu o <strong>Sistema Métrico Decimal</strong>, depois substituído pelo <strong>Sistema Internacional de Unidades (SI)</strong>, usado pela maioria dos países, inclusive o Brasil.</li>
                <li>No SI, cada grandeza recebe <strong>uma única</strong> unidade-base.</li>
              </ul>
            </div>
            ${tbl(['Grandeza de base', 'Unidade (símbolo)'], [
              ['Comprimento', 'metro (m)'], ['Massa', 'quilograma (kg)'], ['Tempo', 'segundo (s)'],
              ['Temperatura termodinâmica', 'kelvin (K)'], ['Quantidade de matéria', 'mol (mol)'], ['Corrente elétrica', 'ampere (A)'], ['Intensidade luminosa', 'candela (cd)']
            ])}
          </div>`, { cls: '' }));

a.push(sl('Milhas, quilômetros e outros sistemas', 'Convertendo com um fator', `
          <div class="grid2">
            <div>
              ${lede('Nos Estados Unidos e na Inglaterra ainda se usa a <strong>milha</strong>, vinda do <em>mille passus</em> romano (mil passos). Em filmes americanos, as distâncias aparecem em milhas.')}
              ${callout('Fator de conversão', '1 milha terrestre ≈ <strong>1,6 km</strong>. Milhas → km: <strong>multiplique</strong> por 1,6. Km → milhas: <strong>divida</strong> por 1,6.', 'success')}
            </div>
            ${W.box('Conversor milhas ↔ quilômetros', W.row(W.nm('s1-v', 'Valor', 4542, 'any'), W.sel('s1-d', 'Converter', ['milhas → km', 'km → milhas'], 0)) + W.txt('s1-r', 'Resultado: ') + W.hint('s1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Grandezas derivadas', 'Velocidade, área, volume… vêm das de base', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>São as grandezas obtidas por <strong>operações</strong> entre as de base.</li>
                <li><strong>Velocidade</strong> = comprimento ÷ tempo → unidade do SI: <strong>m/s</strong>.</li>
                <li><strong>Área</strong> = comprimento × comprimento → <strong>m²</strong>. <strong>Volume</strong> → <strong>m³</strong>.</li>
                <li><strong>Densidade</strong> = massa ÷ volume → <strong>kg/m³</strong>.</li>
                <li>Na vida cotidiana usamos <strong>km/h</strong>; no SI, m/s.</li>
              </ul>
            </div>
            ${W.box('Conversor de velocidade', W.row(W.nm('s2-v', 'Valor', 320, 'any'), W.sel('s2-d', 'Converter', ['km/h → m/s', 'm/s → km/h'], 0)) + W.txt('s2-r', 'Resultado: ') + W.hint('s2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Por que 1 m/s = 3,6 km/h?', 'Quantos quilômetros por hora equivalem a <strong>1 m/s</strong>?', [
  ['Interprete', '1 m/s significa percorrer 1 metro a cada 1 segundo.'],
  ['Passe para uma hora', 'Uma hora tem 3 600 s; em 3 600 s o objeto percorre 3 600 m.'],
  ['Converta metros em quilômetros', '3 600 m = 3,6 km.']
], '<strong>1 m/s = 3,6 km/h</strong>. Para usar: m/s → km/h, <strong>× 3,6</strong>; km/h → m/s, <strong>÷ 3,6</strong>.'));

a.push(pratique('O falcão-peregrino', 'O falcão-peregrino atinge 320 km/h em voo. Quanto isso vale, aproximadamente, em m/s?',
  ['89,6 m/s', '94,4 m/s', '76,5 m/s', '88,9 m/s', '78,4 m/s'], 3,
  'km/h → m/s: <strong>divida por 3,6</strong>. $320 ÷ 3,6 ≈ 88,9$ m/s. <strong>Alternativa D.</strong>'));
a.push(pratique('Percurso de ônibus', 'Um motorista fez um percurso em 1 h 30 min com velocidade constante de 100 km/h. Que distância percorreu?',
  ['100 km', '130 km', '150 km', '200 km'], 2,
  '$1 h 30 min = 1,5$ h. Distância = velocidade × tempo $= 100 · 1,5 = 150$ km. <strong>Alternativa C.</strong> Cuidado: 1 h 30 min <em>não</em> é 1,30 h.', '', 'growth'));
a.push(estiloEnem('Milhas até o Brasil', 'Em um site americano, a distância entre o centro geográfico do Brasil e o dos Estados Unidos aparece como 4 542 milhas terrestres. Sabendo que 1 milha ≈ 1,6 km, essa distância vale, aproximadamente:',
  ['2 839 km', '4 542 km', '7 267 km', '8 412 km', '9 084 km'], 2,
  'Milhas → km: multiplicar por 1,6. $4\\ 542 · 1,6 = 7\\ 267,2$ km. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as conversões escorregam', [
  ['Multiplicar quando é para dividir', 'km/h → m/s <strong>divide</strong> por 3,6. Uma velocidade em m/s é sempre um número menor que em km/h.'],
  ['Tempo em formato de relógio', '1 h 30 min é <strong>1,5 h</strong> (30 min = 0,5 h), não 1,30 h.'],
  ['Misturar unidades', 'Não some “14 km” com “300 m” sem converter antes: 14 000 m + 300 m.'],
  ['Esquecer que milha ≠ quilômetro', '1 milha ≈ 1,6 km: o número em milhas é <strong>menor</strong> que em km.']
]));
a.push(quiz([
  { q: '72 km/h correspondem a:', o: ['20 m/s', '72 m/s', '259,2 m/s', '12 m/s'], a: 0 },
  { q: 'Qual é a unidade de base do SI para o comprimento?', o: ['quilômetro', 'metro', 'centímetro', 'milha'], a: 1 },
  { q: 'Em 1 h 15 min a 80 km/h percorremos:', o: ['80 km', '100 km', '120 km', '96 km'], a: 1 },
  { q: '10 m/s equivalem a:', o: ['2,8 km/h', '10 km/h', '36 km/h', '60 km/h'], a: 2 }
]));
a.push(fechamento([
  ['SI', 'Padrão mundial: metro, quilograma, segundo… uma unidade-base para cada grandeza.'],
  ['m/s e km/h', '× 3,6 de m/s para km/h; ÷ 3,6 de km/h para m/s.'],
  ['Milha', '1 milha ≈ 1,6 km (multiplica para ir a km).']
], 'Medir bem é escolher o padrão e converter com o fator certo.'));

pages.push({ out: BASE + 'aula-1-si-e-grandezas-derivadas.html', html: K.deck({
  title: 'Sistema Internacional de Unidades e grandezas derivadas — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 04 e 05 · Sistema Internacional', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v){ return (Math.round(v * 1000) / 1000).toLocaleString('pt-BR', {maximumFractionDigits: 3}); }
  bind(['s1-v', 's1-d'], function(){ var v = +$('s1-v').value, d = +$('s1-d').value; if(!isFinite(v)){ $('s1-r').textContent = '—'; return; }
    $('s1-r').textContent = d === 0 ? pt(v) + ' milhas = ' + pt(v * 1.6) + ' km' : pt(v) + ' km = ' + pt(v / 1.6) + ' milhas';
    $('s1-h').textContent = d === 0 ? 'Milhas → km: multiplique por 1,6.' : 'Km → milhas: divida por 1,6.'; });
  bind(['s2-v', 's2-d'], function(){ var v = +$('s2-v').value, d = +$('s2-d').value; if(!isFinite(v)){ $('s2-r').textContent = '—'; return; }
    $('s2-r').textContent = d === 0 ? pt(v) + ' km/h = ' + pt(v / 3.6) + ' m/s' : pt(v) + ' m/s = ' + pt(v * 3.6) + ' km/h';
    $('s2-h').textContent = d === 0 ? 'km/h → m/s: divida por 3,6.' : 'm/s → km/h: multiplique por 3,6.'; });`
}) });

// ===================== AULA 2: múltiplos e submúltiplos (aulas 06 e 07) =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 06 e 07', h1: 'Múltiplos e submúltiplos: <span style="color:var(--growth);">converter unidades sem errar a vírgula</span>',
  sub: 'Prefixos como quilo, mili, micro; capacidade e volume; tempo; áreas rurais — e a regra de quanto vale “um degrau” da escada de unidades.',
  badges: [['quilo · mili · micro'], ['1 m³ = 1 000 L', 'growth'], ['1 ha = 10 000 m²', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Cada prefixo é uma potência de 10.', [
  ['Prefixos do SI', 'mili é a milésima parte; quilo, mil vezes', 'book'],
  ['A escada das unidades', 'comprimento: ×10 por degrau; área: ×100; volume: ×1 000', 'chart'],
  ['Capacidade e volume', '1 m³ = 1 000 litros', 'scale'],
  ['Tempo', 'horas, minutos e segundos (base 60)', 'bulb'],
  ['Medidas agrárias', 'are, hectare e alqueire', 'target']
]));
b.push(objetivosSlide([
  'Usar os <strong>prefixos</strong> (quilo, hecto, deca, deci, centi, mili, micro, nano) como potências de 10.',
  'Converter unidades de <strong>comprimento, área, volume e capacidade</strong>.',
  'Converter <strong>tempo</strong> (base 60) e resolver problemas com horas e minutos.',
  'Usar as <strong>medidas agrárias</strong> (are, hectare) em situações reais.'
], 'Atenção', 'Na <strong>área</strong>, cada degrau da escada vale <strong>100</strong> (10²); no <strong>volume</strong>, <strong>1 000</strong> (10³). No comprimento, 10.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Conversa de maluco: o que está errado?', `
          ${lede('“Esperei <em>litros</em> até você chegar.” · “Cheguei a tomar duas <em>horas</em> de café.” · “Paguei 1 <em>m²</em> para assistir ao cinema.” Cada frase usa uma unidade que <strong>não combina</strong> com a grandeza.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Para medir o <strong>tempo</strong> de espera, a unidade correta seria:', ['litro', 'metro quadrado', 'minuto', 'quilograma'], 2, 'Tempo se mede em segundos, minutos, horas. Litro mede <strong>capacidade</strong>; m², <strong>área</strong>. Cada grandeza tem suas unidades.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Antes de converter, identifique a <strong>grandeza</strong> (comprimento, área, volume, capacidade, massa, tempo) — a regra de conversão depende dela.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Prefixos do SI', 'Cada prefixo é uma potência de 10', `
          <div class="grid2">
            ${tbl(['Prefixo', 'Símbolo', 'Fator'], [
              ['quilo', 'k', '$10^{3}$ = 1 000'], ['hecto', 'h', '$10^{2}$ = 100'], ['deca', 'da', '$10^{1}$ = 10'],
              ['(unidade)', '—', '$10^{0}$ = 1'],
              ['deci', 'd', '$10^{-1}$ = 0,1'], ['centi', 'c', '$10^{-2}$ = 0,01'], ['mili', 'm', '$10^{-3}$ = 0,001'], ['micro', 'µ', '$10^{-6}$']
            ])}
            <div>
              ${callout('Aplicando', 'Uma dose de vacina de <strong>0,5 mL</strong> é meio mililitro: a milésima parte do litro, ou $0,5 · 10^{-3}$ L $= 5 · 10^{-4}$ L.', 'success')}
              ${callout('Outro exemplo', '$400\\ "µg"$ de flúor $= 400 · 10^{-6}$ g $= 4 · 10^{-4}$ g.')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(sl('A escada das unidades', 'Quanto vale um degrau?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Comprimento</strong> (km, hm, dam, m, dm, cm, mm): cada degrau vale <strong>10</strong>.</li>
                <li><strong>Área</strong> (km², hm², …, mm²): cada degrau vale <strong>100</strong>, porque é comprimento × comprimento.</li>
                <li><strong>Volume</strong> (km³, …): cada degrau vale <strong>1 000</strong>.</li>
                <li>Descendo a escada (para unidades menores) o número <strong>aumenta</strong>: multiplique. Subindo, <strong>diminui</strong>: divida.</li>
              </ul>
            </div>
            ${W.box('Conversor de unidades', W.row(W.nm('s3-v', 'Valor', 3.45, 'any'), W.sel('s3-g', 'Grandeza', ['comprimento (m)', 'área (m²)', 'volume (m³)'], 0)) + W.row(W.sel('s3-a', 'De', ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], 3), W.sel('s3-b', 'Para', ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], 5)) + W.txt('s3-r', 'Resultado: ') + W.hint('s3-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Capacidade, volume e tempo', '1 m³ = 1 000 litros · 1 h = 60 min', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Volume e capacidade:</strong> $1\\ "m"^3 = 1\\ 000$ L; $1$ L $= 1\\ 000$ mL $= 1$ dm³.</li>
                <li><strong>Tempo</strong> não é decimal: $1$ h $= 60$ min $= 3\\ 600$ s. Para somar “1 h 49 min”, converta: $49$ min $= 49/60$ h.</li>
                <li>Mês comercial: <strong>30 dias</strong> (a menos que o problema diga o contrário).</li>
              </ul>
            </div>
            ${callout('Consumo de água', 'ONU: no máximo 180 L por pessoa por dia. Família de 4 pessoas, 30 dias: $180 · 4 · 30 = 21\\ 600$ L $= 21,6$ m³.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Tempo de vídeo em um mês', 'Um usuário assiste, em média, <strong>1 h 49 min</strong> de vídeo por dia. Quanto tempo assiste em 30 dias?', [
  ['Separe horas e minutos', '1 h × 30 = 30 h e 49 min × 30 = 1 470 min.'],
  ['Converta minutos em horas', '1 470 ÷ 60 = 24,5 h.'],
  ['Some', '30 h + 24,5 h = 54,5 h.']
], '<strong>54,5 horas</strong> por mês (2 dias, 6 horas e 30 minutos).', 'growth'));

b.push(sl('Medidas agrárias', 'Are, hectare e alqueire', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1 are (a)</strong> = 1 dam² = <strong>100 m²</strong>.</li>
                <li><strong>1 hectare (ha)</strong> = 1 hm² = <strong>10 000 m²</strong>.</li>
                <li><strong>1 centiare</strong> = 1 m².</li>
                <li>Alqueires variam por região: <strong>paulista</strong> 24 200 m² (2,42 ha); <strong>mineiro</strong> 48 400 m² (4,84 ha); do Norte 27 225 m².</li>
              </ul>
            </div>
            ${callout('Sítio à venda', '22,5 ha = 22,5 hm² = 225 000 m². A R$ 10,00 o m², o preço é <strong>R$ 2 250 000,00</strong>.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(pratique('Um cômodo na planta', 'Na planta de uma casa, um cômodo tem área de 120 000 cm². Essa área, em m², vale:',
  ['12 m²', '120 m²', '1 200 m²', '0,12 m²', '12 000 m²'], 0,
  'Área: cada degrau vale 100. De cm² para m² são 2 degraus (cm² → dm² → m²): divida por $100 · 100 = 10\\ 000$. $120\\ 000 ÷ 10\\ 000 = 12$ m². <strong>Alternativa A.</strong>', '', 'growth'));
b.push(estiloEnem('Reservatório de chuva', 'Uma família de 10 pessoas quer um reservatório para abastecê-la por 20 dias com água da chuva. Cada pessoa consome 0,08 m³ por dia. A capacidade mínima do reservatório, em litros, deve ser:',
  ['16', '800', '1 600', '8 000', '16 000'], 4,
  'Consumo total: $10 · 20 · 0,08 = 16$ m³. Como $1$ m³ $= 1\\ 000$ L, são $16\\ 000$ L. <strong>Alternativa E.</strong>'));
b.push(estiloEnem('A torneira que pinga', 'Uma torneira pingou durante 6 horas, uma gota a cada 3 segundos, cada gota com 0,2 mL. O volume desperdiçado, em litros, foi aproximadamente:',
  ['0,2', '1,2', '1,4', '12,9', '64,8'], 2,
  '6 h $= 21\\ 600$ s; gotas: $21\\ 600 ÷ 3 = 7\\ 200$. Volume: $7\\ 200 · 0,2 = 1\\ 440$ mL $= 1,44$ L. O valor mais próximo é $1,4$ L. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Erros de conversão mais comuns', [
  ['Usar 10 na área', 'Na área, cada degrau vale <strong>100</strong>; no volume, <strong>1 000</strong>. 1 ha são 10 000 m² (2 degraus de 100).'],
  ['Trocar a direção', 'Para unidade <strong>menor</strong> o número fica <strong>maior</strong> (3,45 m = 345 cm).'],
  ['Tempo como decimal', '1 h 49 min ≠ 1,49 h. Converta 49 min em 49/60 h.'],
  ['Confundir capacidade e volume', '1 m³ = 1 000 L, mas 1 cm³ = 1 mL.']
]));
b.push(quiz([
  { q: '3,45 m em centímetros:', o: ['34,5 cm', '345 cm', '3 450 cm', '0,345 cm'], a: 1 },
  { q: '5 ha correspondem a:', o: ['500 m²', '5 000 m²', '50 000 m²', '500 000 m²'], a: 2 },
  { q: '8 m³ de água têm quantos litros?', o: ['80', '800', '8 000', '80 000'], a: 2 },
  { q: '2,5 h em minutos:', o: ['25 min', '150 min', '250 min', '90 min'], a: 1 }
]));
b.push(fechamento([
  ['Prefixos', 'quilo $10^{3}$, centi $10^{-2}$, mili $10^{-3}$, micro $10^{-6}$…'],
  ['A escada', 'Comprimento ×10 · área ×100 · volume ×1 000 por degrau.'],
  ['Casos especiais', '1 m³ = 1 000 L; 1 ha = 10 000 m²; 1 h = 60 min.']
], 'Identifique a grandeza, conte os degraus e aplique o fator certo.'));

pages.push({ out: BASE + 'aula-2-multiplos-e-submultiplos.html', html: K.deck({
  title: 'Múltiplos e submúltiplos das unidades de medida — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 06 e 07 · Múltiplos e submúltiplos', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v){ return (Math.round(v * 1e9) / 1e9).toLocaleString('pt-BR', {maximumFractionDigits: 9}); }
  bind(['s3-v', 's3-g', 's3-a', 's3-b'], function(){
    var v = +$('s3-v').value, g = +$('s3-g').value + 1, a = +$('s3-a').value, b = +$('s3-b').value, uni = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], suf = g === 1 ? '' : g === 2 ? '²' : '³';
    if(!isFinite(v)){ $('s3-r').textContent = '—'; return; }
    var passos = b - a, f = Math.pow(Math.pow(10, g), passos);
    $('s3-r').textContent = pt(v) + ' ' + uni[a] + suf + ' = ' + pt(v * f) + ' ' + uni[b] + suf;
    $('s3-h').textContent = passos === 0 ? 'Mesma unidade: nada muda.' : Math.abs(passos) + (Math.abs(passos) === 1 ? ' degrau' : ' degraus') + ' para ' + (passos > 0 ? 'baixo (unidade menor): multiplique' : 'cima (unidade maior): divida') + ' por ' + pt(Math.pow(10, g)) + ' a cada degrau (fator total ' + pt(Math.pow(Math.pow(10, g), Math.abs(passos))) + ').';
  });`
}) });

// ===================== GUIA =====================
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'SI e unidades: <span>padronizar e converter</span>',
  lede: 'Unidades de base e derivadas, prefixos, a escada de conversão (×10, ×100, ×1 000) e os casos que mais caem: km/h ↔ m/s, litros, hectares e tempo.',
  badges: ['SI', '1 m/s = 3,6 km/h', 'área ×100', 'volume ×1 000'],
  curve: 'M20,150 C 100,150 160,110 240,80 C 320,52 400,34 480,22',
  sections: [
    ['Base', 'Sete unidades do SI', 'scale', 'primary', tb(['Grandeza', 'Unidade'], [['comprimento', 'metro (m)'], ['massa', 'quilograma (kg)'], ['tempo', 'segundo (s)'], ['temperatura', 'kelvin (K)'], ['quant. de matéria', 'mol'], ['corrente elétrica', 'ampere (A)'], ['intens. luminosa', 'candela (cd)']])],
    ['Derivadas', 'Obtidas das de base', 'chart', 'growth', li(['Velocidade: m/s', 'Área: m² · Volume: m³', 'Densidade: kg/m³']) + fx('1 "m/s" = 3,6 "km/h"')],
    ['Prefixos', 'Potências de 10', 'link', 'decay', tb(['Prefixo', 'Fator'], [['quilo (k)', '$10^{3}$'], ['hecto (h)', '$10^{2}$'], ['deci (d)', '$10^{-1}$'], ['centi (c)', '$10^{-2}$'], ['mili (m)', '$10^{-3}$'], ['micro (µ)', '$10^{-6}$']])],
    ['Escada', 'Fator por degrau', 'target', 'success', tb(['Grandeza', 'Cada degrau'], [['comprimento', '× 10'], ['área', '× 100'], ['volume', '× 1 000']]) + p('Para unidade menor, multiplique; para maior, divida.')],
    ['Casos clássicos', 'Para decorar', 'check', 'primary', li(['$1\\ "m"^3 = 1\\ 000$ L · 1 L = 1 000 mL', '1 ha = 1 hm² = 10 000 m² · 1 are = 100 m²', '1 h = 60 min = 3 600 s', '1 milha ≈ 1,6 km'])],
    ['Tempo', 'Base 60', 'bulb', 'growth', p('1 h 30 min = <strong>1,5 h</strong>. Some horas com horas e minutos com minutos; depois converta (49 min = 49/60 h).') + call('Exemplo', '1 h 49 min × 30 dias = 30 h + 1 470 min = 54,5 h.', 'success')]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Multiplicar por 3,6 quando é para dividir (km/h → m/s).', 'Usar 10 por degrau na área em vez de 100.', 'Tratar 1 h 30 min como 1,30 h.', 'Somar quilômetros com metros sem converter.', 'Esquecer que 1 m³ são 1 000 L.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Unidades de medida <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: velocidade, capacidade, área, tempo e escala de unidades.',
  final: 'Identifique a grandeza, escolha o fator (3,6; 10; 100; 1 000; 60) e converta com cuidado.',
  questions: [
    { badge: 'Estilo ENEM · velocidade', text: 'Um guepardo pode chegar a 108 km/h em velocidade máxima.', cmd: 'Em metros por segundo, essa velocidade é:', opts: ['3 m/s', '30 m/s', '300 m/s', '388,8 m/s', '1,8 m/s'], a: 1,
      sol: '<p>km/h → m/s: divida por 3,6. $108 ÷ 3,6 = 30$ m/s.</p>' },
    { badge: 'Estilo ENEM · capacidade', text: 'Uma caixa-d’água tem forma de bloco retangular com 2 m de comprimento, 1,5 m de largura e 1 m de altura.', cmd: 'Sua capacidade, em litros, é:', opts: ['300', '3 000', '30 000', '3', '0,3'], a: 1,
      sol: '<p>Volume: $2 · 1,5 · 1 = 3$ m³. Como $1$ m³ $= 1\\ 000$ L, são $3\\ 000$ L.</p>' },
    { badge: 'Estilo ENEM · área', text: 'Um terreno retangular mede 400 m por 250 m.', cmd: 'Sua área em hectares é:', opts: ['1 ha', '10 ha', '100 ha', '1 000 ha', '0,1 ha'], a: 1,
      sol: '<p>Área: $400 · 250 = 100\\ 000$ m². Como $1$ ha $= 10\\ 000$ m², são $10$ ha.</p>' },
    { badge: 'Estilo ENEM · tempo', text: 'Um filme dura 2 h 18 min e uma série tem 8 episódios de 45 min cada.', cmd: 'O tempo total de filme e série, em horas, é:', opts: ['6,3 h', '8,3 h', '8,18 h', '7,98 h', '9 h'], a: 1,
      sol: '<p>Série: $8 · 45 = 360$ min $= 6$ h. Filme: $2$ h $18$ min $= 2,3$ h. Total: $6 + 2,3 = 8,3$ h.</p>' },
    { badge: 'Estilo ENEM · unidades pequenas', text: 'Uma dose de medicamento tem 250 µg de princípio ativo.', cmd: 'Quantos gramas isso representa?', opts: ['$2,5 · 10^{-2}$ g', '$2,5 · 10^{-3}$ g', '$2,5 · 10^{-4}$ g', '$2,5 · 10^{-6}$ g', '$2,5 · 10^{2}$ g'], a: 2,
      sol: '<p>$1\\ µg = 10^{-6}$ g. $250 · 10^{-6} = 2,5 · 10^{2} · 10^{-6} = 2,5 · 10^{-4}$ g.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual é o <span style="color:var(--growth);">fator de conversão?</span>',
  subtitle: 'Classifique cada conversão: multiplica ou divide, e por quanto.',
  tpl: cClassificar({
    cats: ['× 10 ou ÷ 10', '× 100 ou ÷ 100', '× 1 000 ou ÷ 1 000', '× 3,6 ou ÷ 3,6', '× 60 ou ÷ 60'],
    intro: 'Cada cartão pede uma conversão. Escolha o <strong>fator</strong> que ela usa e clique em <strong>Conferir</strong>.',
    final: 'Reconhecer o fator (10, 100, 1 000, 3,6 ou 60) é metade da conversão.',
    itens: [
      ['De m para dm (comprimento).', 0, '1 degrau na escada de comprimento: fator 10.'],
      ['De m² para dm² (área).', 1, '1 degrau na área: fator 100.'],
      ['De m³ para litros (capacidade).', 2, '1 m³ = 1 000 L.'],
      ['De km/h para m/s.', 3, 'Divide-se por 3,6.'],
      ['De horas para minutos.', 4, '1 h = 60 min.'],
      ['De km² para hm² (área, um degrau).', 1, 'Na área, cada degrau vale 100.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Unidades de medida: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de conversões do cotidiano. Digite o número pedido.',
  final: 'Você percorreu a trilha: velocidade, tempo, área, volume e prefixos.',
  problems: [
    { tag: 'Velocidade', q: 'Converta <strong>54 km/h</strong> para m/s.', a: 15, ph: 'm/s', hint: 'km/h → m/s: divida por 3,6.', sol: '<p>$54 ÷ 3,6 = 15$ m/s.</p>' },
    { tag: 'Tempo', q: 'Quantos <strong>minutos</strong> há em 2,25 horas?', a: 135, ph: 'min', hint: '2,25 h = 2 h + 0,25 h; 0,25 h = 15 min.', sol: '<p>$2,25 · 60 = 135$ min.</p>' },
    { tag: 'Área', q: 'Um terreno tem 3 hectares. Quantos <strong>metros quadrados</strong>?', a: 30000, tol: 1, ph: 'm²', hint: '1 ha = 10 000 m².', sol: '<p>$3 · 10\\ 000 = 30\\ 000$ m².</p>' },
    { tag: 'Volume', q: 'Uma piscina tem 12 m³ de água. Quantos <strong>litros</strong>?', a: 12000, tol: 1, ph: 'L', hint: '1 m³ = 1 000 litros.', sol: '<p>$12 · 1\\ 000 = 12\\ 000$ L.</p>' },
    { tag: 'Prefixos', q: 'Uma gota tem 0,05 mL. Quantas gotas formam <strong>1 litro</strong>?', a: 20000, tol: 1, ph: 'gotas', hint: '1 L = 1 000 mL; divida por 0,05.', sol: '<p>$1\\ 000 ÷ 0,05 = 20\\ 000$ gotas.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Sistema Internacional e Unidades', accent: 'growth', icon: 'cube',
  aulas: [['Aulas 4–5', 'SI e grandezas derivadas', 'aula-1-si-e-grandezas-derivadas.html'], ['Aulas 6–7', 'Múltiplos e submúltiplos', 'aula-2-multiplos-e-submultiplos.html']],
  enem: 'Unidades de medida no estilo ENEM', cria: 'Qual é o fator de conversão?', pratica: 'Unidades de medida: trilha de desafios'
}, pages };
