// Unidade 32 — Medidas de dispersão: amplitude, desvio médio, variância e desvio padrão (aulas 94 e 95)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'medidas-de-dispersao', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u32', BRAND = 'Medidas de Dispersão', CAP = 'Aulas 94 e 95';
const pages = [];

const DJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function disp(d){ var n = d.length, m = d.reduce(function(s, v){ return s + v; }, 0) / n, des = d.map(function(v){ return v - m; }), dm = des.reduce(function(s, v){ return s + Math.abs(v); }, 0) / n, va = des.reduce(function(s, v){ return s + v * v; }, 0) / n;
    return {n: n, media: m, des: des, dm: dm, va: va, dp: Math.sqrt(va), amp: Math.max.apply(null, d) - Math.min.apply(null, d)}; }
`;

// ===================== AULA 1: amplitude e desvio médio =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 94', h1: 'Medidas de dispersão: <span style="color:var(--primary);">o quanto os dados se espalham</span>',
  sub: 'Em média, cada pessoa comeu dois pedaços de bolo — mas todos comeram dois? A média não diz como os dados se distribuem. Para isso existem a amplitude, o desvio médio, a variância e o desvio padrão.',
  badges: [['amplitude'], ['desvio médio', 'growth'], ['sozinha, a média engana', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Quão longe da média ficam os dados?', [
  ['Por que não basta a média', 'mesmo valor, espalhamentos diferentes', 'bulb'],
  ['Amplitude', 'maior − menor', 'target'],
  ['Desvios', 'cada dado menos a média', 'chart'],
  ['Desvio médio', 'média dos módulos dos desvios', 'link'],
  ['Interpretação', 'regularidade e controle de qualidade', 'scale']
]));
a.push(objetivosSlide([
  'Explicar por que a <strong>média sozinha</strong> não descreve um conjunto de dados.',
  'Calcular a <strong>amplitude</strong> e os <strong>desvios</strong> em relação à média.',
  'Calcular o <strong>desvio médio</strong>.',
  'Usar as medidas para <strong>comparar a regularidade</strong> de dois conjuntos.'
], 'Dica', 'A soma dos desvios em relação à média é <strong>sempre zero</strong> (positivos e negativos se anulam). Por isso usamos <strong>módulos</strong> (desvio médio) ou <strong>quadrados</strong> (variância).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O celular e o bolo', `
          ${lede('Uma manchete diz que o brasileiro usa o celular, em média, 4,82 horas por dia; outra diz que passa “mais de 5 horas”. As duas podem estar certas — a primeira cita a <strong>média</strong>. Mas a média não mostra quanto os valores <strong>variam</strong> de pessoa para pessoa. Em uma festa, “em média, cada pessoa comeu dois pedaços de bolo” não significa que <strong>todos</strong> comeram dois.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Dois grupos têm média 10. O grupo A tem valores 9, 10, 11 e o grupo B, 1, 10, 19. Qual é mais disperso?', ['A', 'B', 'iguais', 'não dá para saber'], 1, 'Os valores de B ficam <strong>muito mais longe</strong> da média (9 de distância contra 1). B tem maior dispersão: amplitude $18$ contra $2$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Média = <strong>centro</strong>. Dispersão = <strong>espalhamento</strong> em torno do centro. Conjuntos com a mesma média podem ser bem diferentes.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · amplitude e desvio médio', 'Duas formas de medir o espalhamento', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Amplitude</strong> $A = x_{máx} − x_{mín}$: faixa de variação dos dados.</li>
                <li><strong>Desvio</strong> de um dado: $d_i = x_i − "média"$. A soma dos desvios é <strong>zero</strong>.</li>
                <li><strong>Desvio médio</strong>: média dos <strong>módulos</strong> dos desvios, $D_m = {∑ ∣x_i − "média"∣|n}$.</li>
                <li>Quanto <strong>menor</strong> o desvio médio, mais próximos da média os dados.</li>
                <li>A amplitude olha só <strong>dois</strong> dados (os extremos); o desvio médio olha <strong>todos</strong>.</li>
              </ul>
            </div>
            ${W.box('Amplitude e desvio médio', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="d1-d" value="4; 8; 10; 12; 16" inputmode="decimal"></div>' + W.txt('d1-a', 'Média e amplitude: ') + W.txt('d1-b', 'Desvios: ') + W.txt('d1-c', 'Desvio médio: ') + W.hint('d1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Amplitude de dois lotes', 'O comprimento (mm) de cinco parafusos de cada lote: A: 50, 52, 51, 50, 52; B: 48, 55, 50, 52, 49. Calcule a amplitude de cada lote e compare.', [
  ['Lote A', '$52 − 50 = 2$ mm.'],
  ['Lote B', '$55 − 48 = 7$ mm.'],
  ['Comparação', 'O lote A tem <strong>menor variação</strong> de medidas: é mais regular.']
], 'Amplitude: A $= 2$ mm e B $= 7$ mm.'));
a.push(exemplo('Exemplo resolvido', 'Desvio médio das vendas', 'Uma loja vendeu 4, 8, 10, 12 e 16 peças em cinco dias. Calcule a média, os desvios e o desvio médio.', [
  ['Média', '$(4 + 8 + 10 + 12 + 16) ÷ 5 = 50 ÷ 5 = 10$.'],
  ['Desvios', '$4 − 10 = −6$ · $8 − 10 = −2$ · $0$ · $+2$ · $+6$ (soma $= 0$ ✓).'],
  ['Desvio médio', '$(6 + 2 + 0 + 2 + 6) ÷ 5 = 16 ÷ 5 = 3,2$.']
], 'Em média, os dias se afastam <strong>3,2 peças</strong> da média de 10.', 'growth'));

a.push(pratique('Amplitude', 'As temperaturas máximas de uma semana foram 21, 25, 19, 30, 27, 22 e 24 °C. A amplitude térmica é:',
  ['6 °C', '9 °C', '11 °C', '14 °C', '30 °C'], 2,
  '$30 − 19 = 11$ °C. <strong>Alternativa C.</strong>'));
a.push(pratique('Desvio médio', 'Para os dados 4, 8, 10, 12 e 16 (média 10), o desvio médio é:',
  ['2', '3,2', '4', '6', '16'], 1,
  'Módulos dos desvios: $6, 2, 0, 2, 6$ (soma $16$). $16 ÷ 5 = 3,2$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Qual lote descartar?', 'Cinco parafusos de cada lote foram medidos (mm): lote A: 50, 52, 51, 50, 52; lote B: 48, 55, 50, 52, 49; lote C: 51, 51, 52, 51, 51. O critério é descartar o lote de <strong>maior amplitude</strong>. O lote descartado é:',
  ['A', 'B', 'C', 'A e C', 'nenhum'], 1,
  'Amplitudes: A $= 2$; B $= 7$; C $= 1$. A maior é a do lote B. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a dispersão engana', [
  ['Soma dos desvios', 'Sempre zero: não serve para medir espalhamento. Use módulos ou quadrados.'],
  ['Amplitude “enganada” por extremos', 'Um único dado muito alto ou baixo muda a amplitude; ela ignora o resto.'],
  ['Média igual, dispersão igual?', 'Não: dois grupos de mesma média podem ter dispersões muito diferentes.'],
  ['Esquecer o módulo', 'No desvio médio, tire o <strong>módulo</strong> de cada desvio antes de somar.']
]));
a.push(quiz([
  { q: 'A amplitude de 7, 12, 3, 9 é:', o: ['4', '9', '12', '31'], a: 1 },
  { q: 'A soma dos desvios em relação à média é:', o: ['zero', 'a média', 'a amplitude', 'a variância'], a: 0 },
  { q: 'Dados 2, 4, 6 (média 4): o desvio médio é:', o: ['0', '4/3', '2', '6'], a: 1 },
  { q: 'Quanto menor a dispersão, os dados são:', o: ['mais espalhados', 'mais próximos da média', 'sempre iguais', 'negativos'], a: 1 }
]));
a.push(fechamento([
  ['Amplitude', 'máx − mín.'],
  ['Desvios', 'xᵢ − média; somam zero.'],
  ['Desvio médio', 'média dos módulos dos desvios.']
], 'Centro e espalhamento: duas informações, uma visão completa.'));

pages.push({ out: BASE + 'aula-1-amplitude-e-desvio-medio.html', html: K.deck({
  title: 'Amplitude e desvio médio — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 94 · Amplitude e desvio médio', slides: a,
  extra: WJS + BIND + DJS + String.raw`
  bind(['d1-d'], function(){ var d = lista($('d1-d').value); if(d.length < 2 || !d.every(isFinite) || d.length > 40){ $('d1-a').textContent = 'informe de 2 a 40 números'; $('d1-b').textContent = ''; $('d1-c').textContent = ''; return; }
    var r = disp(d); $('d1-a').textContent = 'média ' + pt(r.media, 3) + ' · amplitude ' + pt(r.amp, 3); $('d1-b').textContent = r.des.map(function(v){ return (v >= 0 ? '+' : '') + pt(v, 2); }).join(' · ') + ' (soma ' + pt(r.des.reduce(function(s, v){ return s + v; }, 0), 6) + ')';
    $('d1-c').textContent = r.des.map(function(v){ return pt(Math.abs(v), 2); }).join(' + ') + ' ÷ ' + r.n + ' = ' + pt(r.dm, 3); $('d1-h').textContent = 'Os desvios somam zero; por isso o desvio médio usa os módulos.'; });`
}) });

// ===================== AULA 2: variância e desvio padrão =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 95', h1: 'Variância e desvio padrão: <span style="color:var(--growth);">a régua da regularidade</span>',
  sub: 'Dois fones têm nota média 4. O A recebeu quase só notas 4; o B, muitas notas 5 e muitas notas 1. Em qual você confia mais? O desvio padrão mede exatamente essa diferença.',
  badges: [['variância'], ['desvio padrão σ', 'growth'], ['menor σ: mais regular', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Dos quadrados dos desvios ao desvio padrão.', [
  ['Variância', 'média dos quadrados dos desvios', 'bulb'],
  ['Desvio padrão', 'raiz quadrada da variância', 'target'],
  ['Cálculo passo a passo', 'média, desvios, quadrados', 'chart'],
  ['Interpretação', 'maior σ = mais espalhado', 'link'],
  ['Aplicações', 'regularidade de atletas e turmas', 'scale']
]));
b.push(objetivosSlide([
  'Calcular a <strong>variância</strong> e o <strong>desvio padrão</strong> de um conjunto de dados.',
  'Explicar por que o desvio padrão tem a <strong>mesma unidade</strong> dos dados (e a variância, não).',
  '<strong>Comparar</strong> a regularidade de dois conjuntos pelo desvio padrão.',
  'Resolver problemas que pedem <strong>“o mais regular”</strong> ou <strong>“o mais disperso”</strong>.'
], 'Dica', 'Ordem do cálculo: <strong>1)</strong> média; <strong>2)</strong> desvios; <strong>3)</strong> quadrados dos desvios; <strong>4)</strong> média dos quadrados (variância); <strong>5)</strong> raiz (desvio padrão).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Dois fones, a mesma nota média', `
          ${lede('Você quer comprar um fone e dois modelos têm nota média <strong>4 estrelas</strong>. O fone A recebeu quase só notas 4. O fone B recebeu várias notas 5 (gente amando) e várias notas 1 (quebrou na primeira semana). A experiência dos compradores é a mesma? Em qual a compra é mais <strong>segura</strong>? A média sozinha esconde o quanto as opiniões estão <strong>divididas</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O desvio padrão do fone A é pequeno e o do B é grande. Isso indica que:', ['o A é mais previsível e confiável', 'o B tem notas mais próximas da média', 'os dois são iguais', 'o B é sempre melhor'], 0, 'Desvio padrão <strong>pequeno</strong> = notas concentradas perto da média (o A). Desvio padrão <strong>grande</strong> = notas espalhadas (o B).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;"><strong>Menor desvio padrão = dados mais concentrados em torno da média</strong> (mais regulares). Maior = mais espalhados.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · variância e desvio padrão', 'Os quadrados dos desvios', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Variância</strong>: média dos <strong>quadrados</strong> dos desvios: $V = {∑ (x_i − "média")^{2}|n}$.</li>
                <li><strong>Desvio padrão</strong>: $σ = √{V}$ (volta à unidade dos dados).</li>
                <li>A variância fica em <strong>unidade ao quadrado</strong> (m², kg²…); o desvio padrão, na <strong>mesma</strong> unidade dos dados.</li>
                <li>$σ = 0$ só quando todos os dados são iguais.</li>
                <li>Aqui dividimos por $n$ (dados completos); em amostras costuma-se dividir por $n − 1$.</li>
              </ul>
            </div>
            ${W.box('Compare dois conjuntos', '<div><label>Conjunto A</label><input type="text" id="v1-a" value="15; 16; 16; 16; 17" inputmode="decimal"></div><div><label>Conjunto B</label><input type="text" id="v1-b" value="13; 15; 16; 17; 19" inputmode="decimal"></div>' + W.txt('v1-m', 'Médias: ') + W.txt('v1-v', 'Variâncias: ') + W.txt('v1-s', 'Desvios padrão: ') + W.hint('v1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Variância e desvio padrão das vendas', 'Com as vendas $4, 8, 10, 12, 16$ (média $10$), calcule a variância e o desvio padrão.', [
  ['Desvios', '$−6, −2, 0, 2, 6$.'],
  ['Quadrados', '$36, 4, 0, 4, 36$ (soma $80$).'],
  ['Variância e σ', '$V = 80 ÷ 5 = 16$; $σ = √{16} = 4$.']
], 'Variância $16$ (peças²) e desvio padrão <strong>4 peças</strong>.'));
b.push(exemplo('Exemplo resolvido', 'Duas turmas, mesma média de idade', 'Idades (anos): turma X: 15, 16, 16, 16, 17; turma Y: 13, 15, 16, 17, 19. As duas têm média 16. Qual é mais homogênea?', [
  ['Turma X', 'Desvios $−1, 0, 0, 0, 1$; quadrados $1, 0, 0, 0, 1$; $V = 2 ÷ 5 = 0,4$; $σ ≈ 0,63$.'],
  ['Turma Y', 'Desvios $−3, −1, 0, 1, 3$; quadrados $9, 1, 0, 1, 9$; $V = 20 ÷ 5 = 4$; $σ = 2$.'],
  ['Comparação', '$0,63 < 2$: a turma X tem idades mais concentradas em torno de 16.']
], 'A turma <strong>X</strong> é mais homogênea; a Y é mais dispersa.', 'growth'));

b.push(pratique('Variância', 'Para os dados 4, 8, 10, 12 e 16 (média 10), a variância é:',
  ['4', '8', '16', '80', '10'], 2,
  'Quadrados dos desvios: $36 + 4 + 0 + 4 + 36 = 80$; $80 ÷ 5 = 16$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Desvio padrão', 'Um conjunto de dados tem variância 36. O desvio padrão é:',
  ['3', '6', '12', '18', '36'], 1,
  '$σ = √{36} = 6$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('O atleta mais regular', 'Quatro atletas passaram por três pesagens. Os desvios padrão dos pesos foram: I: 4,90; II: 8,49; III: 4,08; IV: 7,87. Qual atleta teve o peso <strong>mais regular</strong>?',
  ['I', 'II', 'III', 'IV', 'não dá para saber'], 2,
  'Menor desvio padrão $= 4,08$ (atleta III): pesos mais próximos da média. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde variância e desvio padrão enganam', [
  ['Esquecer a raiz', 'Variância e desvio padrão são diferentes: $σ = √{V}$.'],
  ['Unidades', 'A variância está em unidade ao quadrado; só o desvio padrão tem a unidade original.'],
  ['“Maior desvio é melhor”', 'Depende: em controle de qualidade, desvio pequeno é desejável; em investimentos, pode indicar mais risco.'],
  ['Média igual, dispersão igual', 'Mesma média não significa mesmo espalhamento.']
]));
b.push(quiz([
  { q: 'O desvio padrão é:', o: ['o quadrado da variância', 'a raiz quadrada da variância', 'a média dos dados', 'a amplitude'], a: 1 },
  { q: 'Dados 2, 4, 6 (média 4): a variância é:', o: ['2', '8/3', '4', '6'], a: 1 },
  { q: 'Se $σ = 0$, os dados são:', o: ['todos iguais', 'muito espalhados', 'negativos', 'inexistentes'], a: 0 },
  { q: 'Qual grupo é mais regular?', o: ['σ = 0,5', 'σ = 2', 'σ = 8', 'σ = 15'], a: 0 }
]));
b.push(fechamento([
  ['Variância', 'Média dos quadrados dos desvios.'],
  ['Desvio padrão', 'Raiz da variância; mesma unidade dos dados.'],
  ['Interpretação', 'Menor σ: mais regular; maior σ: mais espalhado.']
], 'Média e desvio padrão juntos descrevem um conjunto.'));

pages.push({ out: BASE + 'aula-2-variancia-e-desvio-padrao.html', html: K.deck({
  title: 'Variância e desvio padrão — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 95 · Variância e desvio padrão', slides: b,
  extra: WJS + BIND + DJS + String.raw`
  bind(['v1-a', 'v1-b'], function(){ var A = lista($('v1-a').value), B = lista($('v1-b').value); if(A.length < 2 || B.length < 2 || !A.every(isFinite) || !B.every(isFinite) || A.length > 40 || B.length > 40){ $('v1-m').textContent = 'informe de 2 a 40 números em cada conjunto'; $('v1-v').textContent = ''; $('v1-s').textContent = ''; return; }
    var a = disp(A), b = disp(B); $('v1-m').textContent = 'A: ' + pt(a.media, 3) + ' · B: ' + pt(b.media, 3); $('v1-v').textContent = 'A: ' + pt(a.va, 3) + ' · B: ' + pt(b.va, 3); $('v1-s').textContent = 'A: ' + pt(a.dp, 3) + ' · B: ' + pt(b.dp, 3);
    $('v1-h').textContent = a.dp < b.dp ? 'O conjunto A é mais regular (menor desvio padrão).' : a.dp > b.dp ? 'O conjunto B é mais regular (menor desvio padrão).' : 'Os dois têm o mesmo desvio padrão.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Medidas de dispersão: <span>amplitude, desvio médio, variância e desvio padrão</span>',
  lede: 'A média diz o centro; as medidas de dispersão dizem o espalhamento. Quanto menores, mais regulares os dados.',
  badges: ['A = máx − mín', 'Dm = Σ|dᵢ| ÷ n', 'σ = √V'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Amplitude', 'Faixa de variação', 'chart', 'primary', p('$A = x_{máx} − x_{mín}$') + call('Exemplo', '30 − 19 = 11.', 'success')],
    ['Desvio', 'xᵢ − média', 'target', 'growth', p('A soma dos desvios é zero.') + call('Atenção', 'Use módulos ou quadrados.', 'danger')],
    ['Desvio médio', 'Σ |dᵢ| ÷ n', 'link', 'decay', p('4, 8, 10, 12, 16: 16 ÷ 5 = 3,2.')],
    ['Variância', 'Σ dᵢ² ÷ n', 'scale', 'success', p('Mesmos dados: 80 ÷ 5 = 16.')],
    ['Desvio padrão', '√variância', 'up', 'primary', p('$σ = √{16} = 4$ (mesma unidade).')],
    ['Interpretação', 'Regularidade', 'check', 'growth', li(['Menor σ: mais concentrado.', 'Mesma média ≠ mesma dispersão.', 'Compare com a média.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Somar os desvios sem módulo.', 'Esquecer a raiz no desvio padrão.', 'Confundir variância e desvio padrão.', 'Achar que a média basta.', 'Esquecer a unidade ao quadrado.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Medidas de dispersão <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: amplitude, desvio médio, variância, desvio padrão e regularidade.',
  final: 'Média, desvios, quadrados e raiz: o roteiro de toda dispersão.',
  questions: [
    { badge: 'Estilo ENEM · amplitude', text: 'Cinco parafusos de cada lote foram medidos (mm): A: 50, 52, 51, 50, 52; B: 48, 55, 50, 52, 49; C: 51, 51, 52, 51, 51. Descarta-se o lote de maior amplitude.', cmd: 'O lote descartado é:', opts: ['A', 'B', 'C', 'A e C', 'nenhum'], a: 1,
      sol: '<p>Amplitudes: A $= 2$, B $= 7$, C $= 1$.</p>' },
    { badge: 'Estilo ENEM · desvio médio', text: 'Uma loja vendeu 4, 8, 10, 12 e 16 peças em cinco dias.', cmd: 'O desvio médio é:', opts: ['2', '3,2', '4', '6', '16'], a: 1,
      sol: '<p>Média $10$; módulos $6, 2, 0, 2, 6$ (soma $16$); $16 ÷ 5 = 3,2$.</p>' },
    { badge: 'Estilo ENEM · variância', text: 'Mesmos dados: 4, 8, 10, 12 e 16.', cmd: 'A variância é:', opts: ['4', '8', '16', '80', '10'], a: 2,
      sol: '<p>$(36 + 4 + 0 + 4 + 36) ÷ 5 = 16$.</p>' },
    { badge: 'Estilo ENEM · desvio padrão', text: 'Um conjunto de dados tem variância 36.', cmd: 'O desvio padrão é:', opts: ['3', '6', '12', '18', '36'], a: 1,
      sol: '<p>$σ = √{36} = 6$.</p>' },
    { badge: 'Estilo ENEM · regularidade', text: 'Os desvios padrão dos pesos de quatro atletas foram: I: 4,90; II: 8,49; III: 4,08; IV: 7,87.', cmd: 'O atleta de peso mais regular é:', opts: ['I', 'II', 'III', 'IV', 'não dá para saber'], a: 2,
      sol: '<p>Menor desvio padrão: $4,08$ (III).</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'primary',
  h1: 'Verdadeiro ou falso: <span style="color:var(--primary);">dispersão</span>',
  subtitle: 'Julgue as afirmações sobre medidas de dispersão.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Centro (média) e espalhamento (dispersão) são informações diferentes.',
    afirmacoes: [
      ['Duas turmas com a mesma média têm sempre a mesma dispersão.', false, 'Falsa: a média só informa o centro; as dispersões podem ser bem diferentes.'],
      ['O desvio padrão é a raiz quadrada da variância.', true, 'Verdadeira: $σ = √{V}$.'],
      ['A soma dos desvios em relação à média é sempre zero.', true, 'Verdadeira: desvios positivos e negativos se compensam.'],
      ['A amplitude é a diferença entre o maior e o menor valor.', true, 'Verdadeira: $A = x_{máx} − x_{mín}$.'],
      ['Quanto maior o desvio padrão, mais concentrados os dados em torno da média.', false, 'Falsa: maior desvio padrão = dados mais <strong>espalhados</strong>.'],
      ['O desvio padrão pode ser negativo.', false, 'Falsa: é uma raiz quadrada de um número não negativo.'],
      ['A variância é a média dos quadrados dos desvios.', true, 'Verdadeira: $V = {∑ (x_i − "média")^{2}|n}$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Medidas de dispersão: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo de dispersão. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: amplitude, média, desvio médio, variância e desvio padrão.',
  problems: [
    { tag: 'Amplitude', q: 'Lote B: 48, 55, 50, 52, 49 (mm). Qual a amplitude?', a: 7, ph: 'mm', hint: '55 − 48.', sol: '<p>$7$.</p>' },
    { tag: 'Média', q: 'Dados 4, 8, 10, 12 e 16. Qual a média?', a: 10, ph: 'média', hint: '50 ÷ 5.', sol: '<p>$10$.</p>' },
    { tag: 'Desvio médio', q: 'Mesmos dados: qual o desvio médio?', a: 3.2, ph: 'Dm', hint: '(6 + 2 + 0 + 2 + 6) ÷ 5.', sol: '<p>$3,2$.</p>' },
    { tag: 'Variância', q: 'Mesmos dados: qual a variância?', a: 16, ph: 'V', hint: '(36 + 4 + 0 + 4 + 36) ÷ 5.', sol: '<p>$16$.</p>' },
    { tag: 'Desvio padrão', q: 'Qual o desvio padrão desses dados?', a: 4, ph: 'σ', hint: '√16.', sol: '<p>$4$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Medidas de Dispersão', accent: 'growth', icon: 'sigma',
  aulas: [['Aula 94', 'Amplitude e desvio médio', 'aula-1-amplitude-e-desvio-medio.html'], ['Aula 95', 'Variância e desvio padrão', 'aula-2-variancia-e-desvio-padrao.html']],
  enem: 'Medidas de dispersão no estilo ENEM', cria: 'Verdadeiro ou falso: dispersão', pratica: 'Medidas de dispersão: trilha de desafios'
}, pages };
