// Unidade 5 — Armazenamento de dados: bit, byte, múltiplos, nuvem e taxa de transferência (aulas 14 e 15)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'armazenamento-de-dados', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u05', BRAND = 'Armazenamento de Dados', CAP = 'Aulas 14 e 15';
const pages = [];

// ===================== AULA 1: bit, byte e múltiplos =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 14', h1: 'Bit, byte e seus múltiplos: <span style="color:var(--primary);">quanto cabe no seu aparelho?</span>',
  sub: 'Pen drive, SSD, cartão de memória: toda capacidade é medida em bytes. E aqui o “quilo” não vale 1 000 — vale 1 024.',
  badges: [['1 B = 8 bits'], ['1 kB = 1 024 B', 'growth'], ['potências de 2', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do menor sinal digital até o terabyte.', [
  ['Bit e byte', 'o 0 ou 1 e o grupo de 8', 'bulb'],
  ['Múltiplos', 'kB, MB, GB, TB: cada um 1 024 vezes o anterior', 'scale'],
  ['Por que 1 024?', 'sistema binário e potências de 2', 'link'],
  ['Conversões', 'multiplicar ou dividir por 1 024', 'chart'],
  ['Problemas', 'músicas, fotos, memória e backup', 'target']
]));
a.push(objetivosSlide([
  'Conhecer o <strong>bit</strong>, o <strong>byte</strong> e os múltiplos <strong>kB, MB, GB e TB</strong>.',
  'Converter entre as unidades usando o fator <strong>1 024</strong>.',
  'Resolver problemas de <strong>capacidade</strong>: quantos arquivos cabem em um dispositivo.',
  'Diferenciar o prefixo “quilo” do <strong>sistema métrico</strong> (1 000) do usado em <strong>dados</strong> (1 024).'
], 'Dica', 'Ao subir na escala (B → kB → MB → GB), <strong>divida</strong> por 1 024. Ao descer, <strong>multiplique</strong>. Pense: o mesmo dado vira um número menor numa unidade maior.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Um quilo de chumbo ou um de algodão?', `
          ${lede('Os dois têm a mesma massa: o prefixo <strong>quilo</strong> vale sempre 1 000 no sistema métrico (1 kg = 1 000 g). Já em informática, o <strong>quilobyte</strong> não vale 1 000 bytes, e sim <strong>1 024</strong>. A razão está em como o computador guarda a informação: em potências de 2.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantos bytes tem, na convenção usada em computação, 1 quilobyte (kB)?', ['1 000 bytes', '1 024 bytes', '1 048 bytes', '100 bytes'], 1, '$1\\ "kB" = 2^{10}\\ "B" = 1\\ 024\\ "B"$. A potência de 2 mais próxima de 1 000 é $2^{10}$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em dados, cada unidade vale <strong>1 024 = 2<sup>10</sup></strong> vezes a anterior. O que muda é só o fator de conversão.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · bit e byte', 'O menor sinal e o grupo de oito', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O <strong>bit</strong> é o menor pedaço de informação digital: vale <strong>0</strong> ou <strong>1</strong>.</li>
                <li>Para representar uma letra, um número ou um símbolo, o computador agrupa bits: <strong>1 byte (B) = 8 bits</strong>.</li>
                <li>Com 8 bits há $2^{8} = 256$ combinações diferentes — o bastante para as letras, os dígitos e muitos símbolos.</li>
                <li>Um texto simples gasta cerca de 1 byte por caractere: um bilhete de 200 letras ocupa uns 200 B.</li>
              </ul>
            </div>
            ${callout('Cuidado com a escrita', 'Bit se escreve “bit” (minúsculo, símbolo igual ao nome). Byte usa <strong>B</strong> maiúsculo. Por isso <strong>Mb</strong> (megabit) e <strong>MB</strong> (megabyte) são unidades <strong>diferentes</strong>: 1 MB = 8 Mb.', 'danger')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · múltiplos do byte', 'De 1 024 em 1 024', `
          <div class="grid2">
            <div>
              ${tbl(['Unidade', 'Em bytes', 'Em potência de 2'], [['1 byte (B)', '1', '$2^{0}$'], ['1 quilobyte (kB)', '1 024', '$2^{10}$'], ['1 megabyte (MB)', '1 048 576', '$2^{20}$'], ['1 gigabyte (GB)', '1 073 741 824', '$2^{30}$'], ['1 terabyte (TB)', '1 099 511 627 776', '$2^{40}$']])}
              <p style="font-size:.88rem;margin-top:8px;"><strong>Cada degrau vale 1 024:</strong> 1 GB = 1 024 MB = 1 024 × 1 024 kB.</p>
            </div>
            ${W.box('Conversor de armazenamento', W.row(W.nm('a1-v', 'Valor', 8, 'any'), W.sel('a1-a', 'De', ['bit', 'B', 'kB', 'MB', 'GB', 'TB'], 4)) + W.sel('a1-b', 'Para', ['bit', 'B', 'kB', 'MB', 'GB', 'TB'], 3) + W.txt('a1-r', 'Resultado: ') + W.hint('a1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Curiosidade', 'Por que 1 024 e não 1 000?', `
          ${lede('Os computadores contam em <strong>base 2</strong>. A potência de 2 mais próxima de 1 000 é $2^{10} = 1\\ 024$; por isso cada prefixo (quilo, mega, giga…) sobe um degrau de $2^{10}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Sistema métrico</strong><p style="font-size:.92rem;margin-top:8px;">1 km = 1 000 m<br>1 kg = 1 000 g<br>degrau de 1 000 = 10<sup>3</sup></p>', 'primary')}
            ${card('<strong>Dados digitais</strong><p style="font-size:.92rem;margin-top:8px;">1 kB = 1 024 B<br>1 MB = 1 024 kB<br>degrau de 1 024 = 2<sup>10</sup></p>', 'growth')}
          </div>
          ${callout('Atenção', 'Fabricantes de disco costumam anunciar com degraus de 1 000. Por isso o espaço que o sistema mostra pode parecer menor que o anunciado — as duas contas estão certas, mas com fatores diferentes.', 'danger')}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Quantas músicas cabem num pen drive?', 'Um pen drive tem <strong>8 GB</strong> e cada música ocupa, em média, <strong>3 MB</strong>. Quantas músicas inteiras cabem?', [
  ['Converta a capacidade para MB', '8 GB = 8 × 1 024 MB = 8 192 MB.'],
  ['Divida pelo tamanho de uma música', '8 192 ÷ 3 ≈ 2 730,7.'],
  ['Só contam músicas inteiras', 'Fique com a parte inteira: 2 730.']
], 'Cabem <strong>2 730 músicas</strong> (sobra um pedacinho de espaço).'));

a.push(pratique('Bits num disco', 'Em um disco rígido de 1 GB cabem cerca de 8,6 bilhões de bits. Quantos bits cabem em um disco de 2,5 GB?',
  ['2,15 bilhões', '21,5 bilhões', '34,4 bilhões', '8,6 bilhões', '215 bilhões'], 1,
  'Multiplique pela capacidade: $2,5 · 8,6 = 21,5$ bilhões de bits. <strong>Alternativa B.</strong>', '', 'primary'));
a.push(pratique('Memória de hoje e de ontem', 'Um celular tem 8 GB de memória RAM e um chip antigo tinha 1 kB. Quantas vezes a memória do celular é maior?',
  ['8 000', '8 192', '8 388 608', '8 589 934 592', '1 024'], 2,
  '$8\\ "GB" = 8 · 1\\ 024 · 1\\ 024\\ "kB" = 8\\ 388\\ 608\\ "kB"$. Como o chip tinha 1 kB, o celular tem 8 388 608 vezes mais. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('O cartão de fotos', 'Um cartão de memória tem 32 GB e cada foto ocupa em média 4 MB. Quantas fotos cabem no cartão?',
  ['8 000', '8 192', '32 768', '128', '1 024'], 1,
  '$32\\ "GB" = 32 · 1\\ 024 = 32\\ 768\\ "MB"$. Fotos: $32\\ 768 ÷ 4 = 8\\ 192$. <strong>Alternativa B.</strong> (O 8 000 vem de usar 1 000 no lugar de 1 024.)'));

a.push(armadilhas('Cuidados', 'Onde a escala de dados engana', [
  ['Usar 1 000 no lugar de 1 024', 'Em dados cada degrau vale 1 024. Usar 1 000 dá respostas próximas, mas erradas.'],
  ['Multiplicar quando devia dividir', 'De unidade menor para maior (MB → GB) <strong>divide</strong>; de maior para menor (GB → MB) <strong>multiplica</strong>.'],
  ['Confundir bit com byte', '1 B = <strong>8</strong> bits. Mb (bit) e MB (byte) não são a mesma coisa.'],
  ['Esquecer que só cabem arquivos inteiros', 'Em “quantos cabem”, fique com a parte inteira do quociente.']
]));
a.push(quiz([
  { q: 'Quantos bits tem 1 byte?', o: ['1', '8', '10', '1 024'], a: 1 },
  { q: '2 048 bytes equivalem a quantos bits?', o: ['2 048', '8 192', '16 384', '256'], a: 2 },
  { q: '5 GB são quantos MB?', o: ['5 000', '5 120', '500', '51 200'], a: 1 },
  { q: '1 TB é quantos GB?', o: ['1 000', '1 024', '100', '1 048 576'], a: 1 }
]));
a.push(fechamento([
  ['Bit e byte', '1 B = 8 bits; o bit vale 0 ou 1.'],
  ['Escala', 'kB, MB, GB, TB: cada um vale 1 024 vezes o anterior.'],
  ['Conversão', 'Para unidade menor, multiplique; para a maior, divida por 1 024.']
], 'Em dados, o degrau é 1 024 (2 elevado a 10).'));

pages.push({ out: BASE + 'aula-1-bit-byte-e-multiplos.html', html: K.deck({
  title: 'Bit, byte e múltiplos — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 14 · Bit, byte e seus múltiplos', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 4 : d}); }
  var BITS = [1, 8, 8 * 1024, 8 * 1048576, 8 * 1073741824, 8 * 1099511627776], UN = ['bit', 'B', 'kB', 'MB', 'GB', 'TB'];
  bind(['a1-v', 'a1-a', 'a1-b'], function(){ var v = +$('a1-v').value, x = +$('a1-a').value, y = +$('a1-b').value;
    if(!isFinite(v)){ $('a1-r').textContent = '—'; return; }
    var r = v * BITS[x] / BITS[y]; $('a1-r').textContent = pt(v) + ' ' + UN[x] + ' = ' + pt(r, 6) + ' ' + UN[y];
    var d = y - x; $('a1-h').textContent = d === 0 ? 'Mesma unidade: nada muda.' : x === 0 || y === 0 ? 'O bit é 1/8 do byte: de byte para bit multiplique por 8.' : Math.abs(d) + (Math.abs(d) === 1 ? ' degrau' : ' degraus') + ' ' + (d > 0 ? 'para cima: divida' : 'para baixo: multiplique') + ' por 1 024 a cada degrau.'; });`
}) });

// ===================== AULA 2: nuvem e taxa de transferência =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 15', h1: 'Nuvem e velocidade da internet: <span style="color:var(--growth);">armazenar e transferir dados</span>',
  sub: 'Quantas fotos cabem no plano gratuito? Quanto tempo leva para baixar um jogo? Duas contas com a mesma ideia: converter as unidades antes de dividir.',
  badges: [['nuvem'], ['Mbps ÷ 8 = MB/s', 'growth'], ['tempo = tamanho ÷ taxa', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do arquivo guardado à velocidade do download.', [
  ['Armazenamento em nuvem', 'servidores, vantagens e limites', 'bulb'],
  ['Capacidade do plano', 'quantos arquivos cabem', 'scale'],
  ['Taxa de transferência', 'megabits por segundo (Mbps)', 'link'],
  ['Tempo de download', 'tamanho ÷ taxa, com unidades iguais', 'chart'],
  ['Problemas', 'câmeras, áudios, jogos e filmes', 'target']
]));
b.push(objetivosSlide([
  'Entender o que é <strong>armazenamento em nuvem</strong> e seus limites.',
  'Calcular a <strong>quantidade de arquivos</strong> que cabem em um plano.',
  'Diferenciar <strong>Mbps</strong> (megabits por segundo) de <strong>MB/s</strong> (megabytes por segundo).',
  'Calcular o <strong>tempo de download</strong> com unidades compatíveis.'
], 'Dica', 'Antes de dividir tamanho por velocidade, coloque os dois na <strong>mesma unidade</strong>: ou tudo em megabytes, ou tudo em megabits.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O que é “a nuvem”?', `
          ${lede('A palavra <em>nuvem</em> tem vários sentidos. Na informática, é um jeito de guardar arquivos <strong>fora do seu aparelho</strong>: em computadores potentes de empresas, os <strong>servidores</strong>, acessados pela internet com uma conta.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Guardar uma foto “na nuvem” significa que ela fica:', ['só na memória RAM do celular', 'em servidores de uma empresa, acessíveis pela internet', 'dentro de um CD', 'apenas no pen drive'], 1, 'Os arquivos ficam em <strong>servidores</strong> remotos. Assim, se o aparelho quebrar ou for perdido, os arquivos continuam acessíveis.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A nuvem tem <strong>limite de espaço</strong> (o plano). Calcular quanto cabe é converter unidades e dividir.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · nuvem', 'Vantagens e cuidados', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Acesso de qualquer lugar</strong>, em vários aparelhos, com a mesma conta.</li>
                <li><strong>Cópia de segurança</strong>: se o aparelho quebrar ou for roubado, os arquivos não se perdem.</li>
                <li><strong>Compartilhar e editar</strong> com outras pessoas.</li>
                <li>Cuidados: precisa de <strong>internet</strong>, os planos têm <strong>limite</strong> e vale proteger a conta com senha forte.</li>
              </ul>
            </div>
            ${W.box('Quantos arquivos cabem no plano?', W.row(W.nm('n1-c', 'Plano (GB)', 15, 'any'), W.nm('n1-u', 'Já usado (MB)', 3072, 'any')) + W.nm('n1-t', 'Tamanho de cada arquivo (MB)', 12, 'any') + W.txt('n1-l', 'Espaço livre: ') + W.txt('n1-q', 'Cabem: ') + W.hint('n1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Gravações de câmeras na nuvem', 'Uma loja guarda na nuvem as gravações de <strong>8 câmeras</strong>, que filmam <strong>24 h por dia</strong>, durante <strong>7 dias</strong>. Cada hora de uma câmera ocupa em média <strong>120 MB</strong>. Um plano de <strong>150 GB</strong> é suficiente?', [
  ['Conte as horas de gravação', '8 câmeras × 24 h × 7 dias = 1 344 h.'],
  ['Calcule o espaço em MB', '1 344 × 120 = 161 280 MB.'],
  ['Converta para GB', '161 280 ÷ 1 024 = 157,5 GB.'],
  ['Compare com o plano', '157,5 GB > 150 GB.']
], 'O plano de 150 GB <strong>não é suficiente</strong>: faltam 7,5 GB.', 'growth'));

b.push(pratique('Faixas de uma banda', 'Uma banda grava faixas de 12 MB cada e usa um plano gratuito de 2 GB, vazio no início. Quantas faixas cabem, no máximo?',
  ['160', '170', '171', '204', '240'], 1,
  '$2\\ "GB" = 2\\ 048\\ "MB"$. $2\\ 048 ÷ 12 ≈ 170,67$. Só cabem faixas inteiras: <strong>170</strong>. <strong>Alternativa B.</strong> (A 171ª não cabe inteira.)', '', 'growth'));

b.push(sl('Teoria · taxa de transferência', 'Megabits por segundo (Mbps)', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>A <strong>taxa de transferência</strong> diz quantos dados passam por segundo. Planos de internet usam <strong>Mbps</strong> (megabits por segundo).</li>
                <li>Arquivos são medidos em <strong>bytes</strong> (MB, GB). Como 1 B = 8 bits: <strong>Mbps ÷ 8 = MB/s</strong>.</li>
                <li>Tempo = tamanho ÷ taxa, com as <strong>duas grandezas na mesma unidade</strong>.</li>
                <li>Plano de 100 Mbps: 100 ÷ 8 = <strong>12,5 MB/s</strong>.</li>
              </ul>
            </div>
            ${W.box('Calculadora de download', W.row(W.nm('t1-g', 'Tamanho (GB)', 6, 'any'), W.nm('t1-m', 'Plano (Mbps)', 100, 'any')) + W.txt('t1-v', 'Velocidade em MB/s: ') + W.txt('t1-t', 'Tempo: ') + W.hint('t1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Baixando um jogo de 6 GB', 'Qual o tempo para baixar um jogo de <strong>6 GB</strong> com um plano de <strong>100 Mbps</strong>?', [
  ['Converta o tamanho para megabits', '6 GB = 6 × 1 024 MB = 6 144 MB; × 8 = 49 152 megabits.'],
  ['Divida pela taxa', '49 152 ÷ 100 = 491,52 s.'],
  ['Passe para minutos', '491,52 ÷ 60 ≈ 8,2 min.']
], 'O download leva cerca de <strong>8 minutos e 12 segundos</strong>.', 'growth'));

b.push(pratique('Arquivo grande, link médio', 'Um arquivo de 3 GB é baixado a 16 MB/s (megabytes por segundo). O tempo do download é:',
  ['1 min 12 s', '2 min', '3 min 12 s', '4 min 30 s', '48 min'], 2,
  '$3\\ "GB" = 3\\ 072\\ "MB"$. Tempo $= 3\\ 072 ÷ 16 = 192$ s $= 3$ min $12$ s. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('O filme da noite', 'Um plano de 200 Mbps é usado para baixar um filme de 2,5 GB. Desprezando oscilações, o tempo do download é, aproximadamente:',
  ['12 s', '51 s', '1 min 42 s', '13 min 40 s', '17 min 4 s'], 2,
  '$200$ Mbps $= 200 ÷ 8 = 25$ MB/s. Filme: $2,5 · 1\\ 024 = 2\\ 560$ MB. Tempo: $2\\ 560 ÷ 25 = 102,4$ s ≈ 1 min 42 s. <strong>Alternativa C.</strong> (Os 12 s vêm de esquecer o ÷ 8.)'));

b.push(armadilhas('Cuidados', 'Onde a transferência engana', [
  ['Mbps não é MB/s', 'Plano em <strong>megabits</strong>, arquivo em <strong>megabytes</strong>: divida os Mbps por 8 (ou multiplique o arquivo por 8).'],
  ['Misturar unidades na divisão', 'Tamanho em GB e taxa em MB/s não se dividem direto. Converta primeiro.'],
  ['Segundos viram minutos', 'O resultado vem em segundos; divida por 60 para minutos.'],
  ['Esquecer o limite do plano', 'Se o plano é de 150 GB e o necessário é 157,5 GB, “quase” não basta.']
]));
b.push(quiz([
  { q: 'Um plano de 100 Mbps tem velocidade, em MB/s, de:', o: ['100', '12,5', '800', '1,25'], a: 1 },
  { q: '2 GB em megabytes:', o: ['2 000', '2 048', '200', '20 480'], a: 1 },
  { q: 'Quantas músicas de 16 MB cabem em 640 MB?', o: ['40', '64', '100', '10'], a: 0 },
  { q: 'Uma vantagem da nuvem é:', o: ['acessar os arquivos de vários aparelhos, com internet', 'dispensar qualquer senha', 'ter espaço ilimitado e grátis', 'funcionar sem servidores'], a: 0 }
]));
b.push(fechamento([
  ['Capacidade', 'Converta para a mesma unidade e divida: ficam só arquivos inteiros.'],
  ['Mbps e MB/s', 'MB/s = Mbps ÷ 8.'],
  ['Tempo', 'tamanho ÷ taxa, com unidades iguais; passe segundos para minutos se precisar.']
], 'Confira sempre se tamanho e taxa estão na mesma unidade.'));

pages.push({ out: BASE + 'aula-2-nuvem-e-taxa-de-transferencia.html', html: K.deck({
  title: 'Nuvem e taxa de transferência — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 15 · Nuvem e taxa de transferência', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['n1-c', 'n1-u', 'n1-t'], function(){ var c = +$('n1-c').value, u = +$('n1-u').value, t = +$('n1-t').value;
    if(![c, u, t].every(isFinite) || t <= 0){ $('n1-l').textContent = '—'; $('n1-q').textContent = ''; return; }
    var livre = c * 1024 - u; if(livre < 0) livre = 0; $('n1-l').textContent = pt(livre) + ' MB (' + pt(livre / 1024, 3) + ' GB)'; $('n1-q').textContent = pt(Math.floor(livre / t), 0) + ' arquivos';
    $('n1-h').textContent = 'Plano em GB × 1 024 = MB; divida o espaço livre pelo tamanho e fique com a parte inteira.'; });
  bind(['t1-g', 't1-m'], function(){ var g = +$('t1-g').value, m = +$('t1-m').value;
    if(!isFinite(g) || !isFinite(m) || m <= 0 || g < 0){ $('t1-v').textContent = '—'; $('t1-t').textContent = ''; return; }
    var s = g * 1024 * 8 / m, min = Math.floor(s / 60), seg = Math.round(s - min * 60); if(seg === 60){ min++; seg = 0; }
    $('t1-v').textContent = pt(m / 8, 3) + ' MB/s'; $('t1-t').textContent = pt(s, 1) + ' s = ' + (min >= 60 ? Math.floor(min / 60) + ' h ' + (min % 60) + ' min ' : min ? min + ' min ' : '') + seg + ' s';
    $('t1-h').textContent = pt(g, 3) + ' GB = ' + pt(g * 1024 * 8, 1) + ' megabits; dividido por ' + pt(m) + ' Mbps.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Armazenamento de dados: <span>bytes, nuvem e velocidade</span>',
  lede: 'Bit, byte e múltiplos de 1 024, capacidade de planos na nuvem e tempo de download com Mbps: o que converter, quando dividir e onde mora o erro mais comum.',
  badges: ['1 B = 8 bits', '1 kB = 1 024 B', 'Mbps ÷ 8 = MB/s'],
  curve: 'M20,150 C 100,148 180,130 250,96 C 330,56 410,30 480,16',
  sections: [
    ['Bit e byte', 'A base', 'chart', 'primary', p('1 byte = 8 bits. Um bit vale 0 ou 1.') + call('Cuidado', 'Mb (megabit) ≠ MB (megabyte): 1 MB = 8 Mb.', 'danger')],
    ['Múltiplos', 'Degraus de 1 024', 'scale', 'growth', p('$1\\ "kB" = 1\\ 024\\ "B"$ · $1\\ "MB" = 1\\ 024\\ "kB"$ · $1\\ "GB" = 1\\ 024\\ "MB"$') + call('Regra', 'Unidade maior: divida. Unidade menor: multiplique.', 'success')],
    ['Capacidade', 'Quantos cabem', 'link', 'decay', p('Converta o plano para a unidade do arquivo e divida. Fique com a parte inteira.') + call('Exemplo', '32 GB ÷ 4 MB = 32 768 ÷ 4 = 8 192 fotos.', 'success')],
    ['Nuvem', 'Servidores remotos', 'target', 'success', li(['Acesso em vários aparelhos.', 'Cópia de segurança.', 'Limite de espaço no plano.'])],
    ['Taxa de transferência', 'Mbps e MB/s', 'up', 'primary', p('MB/s = Mbps ÷ 8. Tempo = tamanho ÷ taxa.') + call('Exemplo', '6 GB a 100 Mbps: 49 152 ÷ 100 ≈ 8 min 12 s.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Tamanho e taxa na mesma unidade?', 'Dividi ou multipliquei pelo fator certo (1 024 ou 8)?', 'Só arquivos inteiros?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar 1 000 em vez de 1 024.', 'Confundir Mbps com MB/s.', 'Multiplicar quando devia dividir (ou o contrário).', 'Contar arquivo pela metade em “quantos cabem”.', 'Dividir GB por MB/s sem converter.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Armazenamento de dados <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: bits, capacidade, comparação de memórias, backup e tempo de download.',
  final: 'Converter com 1 024, lembrar que 1 B = 8 bits e comparar Mbps com MB/s resolve quase tudo.',
  questions: [
    { badge: 'Estilo ENEM · bits', text: 'Um arquivo de texto tem exatamente 512 bytes.', cmd: 'Quantos bits de informação ele contém?', opts: ['512', '1 024', '4 096', '8 192', '64'], a: 2,
      sol: '<p>$1$ B $= 8$ bits. Então $512 · 8 = 4\\ 096$ bits.</p>' },
    { badge: 'Estilo ENEM · capacidade', text: 'Um pen drive de 64 GB será usado para guardar vídeos de 800 MB cada.', cmd: 'O maior número de vídeos inteiros que cabem é:', opts: ['80', '81', '82', '64', '65 536'], a: 1,
      sol: '<p>$64\\ "GB" = 64 · 1\\ 024 = 65\\ 536\\ "MB"$. $65\\ 536 ÷ 800 = 81,92$. Só cabem vídeos inteiros: <strong>81</strong>. (O 80 vem de usar 1 000.)</p>' },
    { badge: 'Estilo ENEM · comparação', text: 'Um computador tem 4 GB de memória RAM e outro, mais antigo, tem 512 MB.', cmd: 'A memória do mais novo é quantas vezes a do mais antigo?', opts: ['4', '8', '80', '1 024', '512'], a: 1,
      sol: '<p>$4\\ "GB" = 4 · 1\\ 024 = 4\\ 096\\ "MB"$. $4\\ 096 ÷ 512 = 8$ vezes.</p>' },
    { badge: 'Estilo ENEM · backup', text: 'Um escritório faz uma cópia de segurança de 20 GB por dia, durante 30 dias, e guarda todas na nuvem. Os planos disponíveis são os listados abaixo.', cmd: 'O menor plano que comporta todas as cópias é:', opts: ['500 GB', '512 GB', '640 GB', '1 TB', '2 TB'], a: 2,
      sol: '<p>$20 · 30 = 600$ GB. Os planos de 500 GB e 512 GB não bastam; o menor que comporta 600 GB é o de <strong>640 GB</strong>.</p>' },
    { badge: 'Estilo ENEM · download', text: 'Um plano de internet de 36 Mbps (megabits por segundo) é usado para baixar um arquivo de 4,5 GB.', cmd: 'O tempo do download é de:', opts: ['1 min 4 s', '2 min 8 s', '8 min 32 s', '17 min 4 s', '2 h 16 min'], a: 3,
      sol: '<p>$4,5\\ "GB" = 4,5 · 1\\ 024 = 4\\ 608$ MB; em megabits: $4\\ 608 · 8 = 36\\ 864$. Tempo: $36\\ 864 ÷ 36 = 1\\ 024$ s $= 17$ min $4$ s. (Os 2 min 8 s vêm de esquecer o fator 8.)</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">solução</span>',
  subtitle: 'Cada problema tem os passos embaralhados. Toque na ordem certa.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Em todos os problemas de dados, o primeiro passo é converter para a mesma unidade.',
    problemas: [
      { titulo: 'Fotos no cartão', enunciado: 'Quantas fotos de 4 MB cabem em um cartão de 2 GB?', passos: ['Converta o espaço para MB: $2\\ "GB" = 2 · 1\\ 024 = 2\\ 048$ MB.', 'Divida o espaço pelo tamanho de cada foto: $2\\ 048 ÷ 4$.', 'Calcule o quociente: $2\\ 048 ÷ 4 = 512$.', 'Responda: cabem 512 fotos.'] },
      { titulo: 'Tempo de download', enunciado: 'Quanto tempo leva baixar 1 GB com um plano de 64 Mbps?', passos: ['Converta o arquivo para megabytes: $1\\ "GB" = 1\\ 024$ MB.', 'Passe para megabits (1 B = 8 bits): $1\\ 024 · 8 = 8\\ 192$ megabits.', 'Divida pela taxa: $8\\ 192 ÷ 64 = 128$ s.', 'Converta para minutos: 128 s = 2 min 8 s.'] },
      { titulo: 'Câmeras no backup', enunciado: '4 câmeras gravam 24 h por dia durante 10 dias, 100 MB por hora cada. Quantos GB são necessários?', passos: ['Conte as horas de uma câmera: $24 · 10 = 240$ h.', 'Some as 4 câmeras: $4 · 240 = 960$ h de gravação.', 'Multiplique pelo consumo: $960 · 100 = 96\\ 000$ MB.', 'Converta para GB: $96\\ 000 ÷ 1\\ 024 = 93,75$ GB.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Armazenamento de dados: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas, de bits a tempo de download. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: bits, conversão, capacidade, Mbps e tempo de download.',
  problems: [
    { tag: 'Bits', q: 'Quantos <strong>bits</strong> há em um arquivo de <strong>3 kB</strong>?', a: 24576, ph: 'bits', hint: '3 kB = 3 × 1 024 B; cada byte tem 8 bits.', sol: '<p>$3 · 1\\ 024 = 3\\ 072$ B; $3\\ 072 · 8 = 24\\ 576$ bits.</p>' },
    { tag: 'Conversão', q: '6 GB equivalem a quantos <strong>MB</strong>?', a: 6144, ph: 'MB', hint: 'De GB para MB multiplica-se por 1 024.', sol: '<p>$6 · 1\\ 024 = 6\\ 144$ MB.</p>' },
    { tag: 'Capacidade', q: 'Quantas fotos de <strong>2,5 MB</strong> cabem em um cartão de <strong>2 GB</strong>? (só fotos inteiras)', a: 819, ph: 'fotos', hint: '2 GB = 2 048 MB; divida e fique com a parte inteira.', sol: '<p>$2\\ 048 ÷ 2,5 = 819,2$; cabem <strong>819</strong> fotos inteiras.</p>' },
    { tag: 'Mbps', q: 'Um plano de <strong>80 Mbps</strong> tem velocidade de quantos <strong>MB/s</strong>?', a: 10, ph: 'MB/s', hint: 'Divida os megabits por 8.', sol: '<p>$80 ÷ 8 = 10$ MB/s.</p>' },
    { tag: 'Download', q: 'Quantos <strong>segundos</strong> leva baixar <strong>1,5 GB</strong> com um plano de <strong>24 Mbps</strong>?', a: 512, ph: 's', hint: '1,5 GB em megabits: 1,5 × 1 024 × 8. Depois divida por 24.', sol: '<p>$1,5 · 1\\ 024 · 8 = 12\\ 288$ megabits. $12\\ 288 ÷ 24 = 512$ s.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Armazenamento de Dados', accent: 'growth', icon: 'grid',
  aulas: [['Aula 14', 'Bit, byte e seus múltiplos', 'aula-1-bit-byte-e-multiplos.html'], ['Aula 15', 'Nuvem e taxa de transferência', 'aula-2-nuvem-e-taxa-de-transferencia.html']],
  enem: 'Armazenamento de dados no estilo ENEM', cria: 'Ordene a solução', pratica: 'Armazenamento de dados: trilha de desafios'
}, pages };
