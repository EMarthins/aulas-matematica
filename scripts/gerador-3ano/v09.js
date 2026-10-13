// Unidade v09 — Propriedades operatórias do logaritmo (aulas 19 a 23 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'logaritmo-propriedades', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v09', BRAND = 'Propriedades Operatórias do Logaritmo', CAP = 'Aulas 19 a 23';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== AULA 1: produto, quociente e potência =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 19 a 21', h1: 'Produto, quociente e potência: <span style="color:var(--primary);">o logaritmo como tradutor</span>',
  sub: 'Navegadores e astrônomos dos séculos XVI e XVII gastavam dias em multiplicações enormes. Os logaritmos transformam multiplicação em soma, divisão em subtração e potência em produto.',
  badges: [['log (b·c) = log b + log c'], ['log (b÷c) = log b − log c', 'growth'], ['log bᵐ = m · log b', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Três propriedades.', [
  ['Um pouco de história', 'cálculo antes da calculadora', 'bulb'],
  ['Produto', 'vira soma', 'target'],
  ['Quociente', 'vira subtração', 'chart'],
  ['Potência', 'o expoente “desce”', 'link'],
  ['Usar e condensar', 'expandir e juntar logaritmos', 'scale']
]));
a.push(objetivosSlide([
  'Aplicar as propriedades do <strong>produto</strong>, do <strong>quociente</strong> e da <strong>potência</strong>.',
  'Calcular logaritmos de números fatorando e usando valores dados ($log\\ 2 = 0,30$ e $log\\ 3 = 0,48$).',
  '<strong>Expandir</strong> e <strong>condensar</strong> expressões logarítmicas.',
  'Reconhecer o erro clássico: $log\\ (b + c) ≠ log\\ b + log\\ c$.'
], 'Dica', 'Fatore o número em primos (ou potências de 10) e use as três propriedades. Para $log\\ 5$, escreva $5 = 10 ÷ 2$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Multiplicar sem multiplicar', `
          ${lede('Logaritmos surgiram no início do século XVII para <strong>facilitar cálculos</strong>: somar é bem mais simples que multiplicar. Veja com potências de 2: $4 · 8 = 2^{2} · 2^{3} = 2^{2+3}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Número', 'Expoente de 2 (log₂)'], [['$4$', '2'], ['$8$', '3'], ['$4 · 8 = 32$', '2 + 3 = 5']])}
            ${mini('Então $log_{2}(4 · 8)$ é igual a:', ['$2 · 3$', '$2 + 3$', '$3 − 2$', '$4 + 8$'], 1, 'O logaritmo de um produto é a <strong>soma</strong> dos logaritmos: $log_{2} 4 + log_{2} 8 = 2 + 3 = 5$ (e $2^{5} = 32$).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · propriedades', 'As três propriedades operatórias', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com $a > 0$, $a ≠ 1$, $b > 0$ e $c > 0$:</li>
                <li><strong>P1 (produto):</strong> $log_{a}(b · c) = log_{a} b + log_{a} c$.</li>
                <li><strong>P2 (quociente):</strong> $log_{a}(b ÷ c) = log_{a} b − log_{a} c$.</li>
                <li><strong>P3 (potência):</strong> $log_{a} b^{m} = m · log_{a} b$.</li>
                <li>Nenhuma delas vale para soma: $log_{a}(b + c) ≠ log_{a} b + log_{a} c$.</li>
              </ul>
            </div>
            ${W.box('Confira as propriedades', W.row(W.nm('w1-a', 'base a', 2, 'any'), W.nm('w1-b', 'b', 12, 'any'), W.nm('w1-c', 'c', 3, 'any'), W.nm('w1-m', 'm', 3, 'any')) + W.txt('w1-p', 'P1: ') + W.txt('w1-q', 'P2: ') + W.txt('w1-t', 'P3: ') + W.hint('w1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Valores para calcular de cabeça', `
          ${tbl(['Dados', 'Valor'], [['$log\\ 2$', '$0,30$'], ['$log\\ 3$', '$0,48$'], ['$log\\ 10$', '$1$']])}
          ${tbl(['Número', 'Fatoração', 'Logaritmo'], [['$6$', '$2 · 3$', '$0,30 + 0,48 = 0,78$'], ['$12$', '$2^{2} · 3$', '$2 · 0,30 + 0,48 = 1,08$'], ['$5$', '$10 ÷ 2$', '$1 − 0,30 = 0,70$'], ['$1,5$', '$3 ÷ 2$', '$0,48 − 0,30 = 0,18$'], ['$8$', '$2^{3}$', '$3 · 0,30 = 0,90$']])}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Produto', 'Calcule $log\\ 6$ e $log_{2}(4 · 8)$, dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', [
  ['Fatore', '$6 = 2 · 3$.'],
  ['P1', '$log\\ 6 = log\\ 2 + log\\ 3 = 0,30 + 0,48 = 0,78$.'],
  ['Outro', '$log_{2}(4 · 8) = log_{2} 4 + log_{2} 8 = 2 + 3 = 5$.']
], '$log\\ 6 = 0,78$ e $log_{2} 32 = 5$.'));
a.push(exemplo('Exemplo resolvido', 'Quociente', 'Calcule $log\\ 5$ e $log\\ 1,5$ com os mesmos dados.', [
  ['Cinco', '$5 = 10 ÷ 2$ ⇒ $log\\ 5 = log\\ 10 − log\\ 2 = 1 − 0,30 = 0,70$.'],
  ['Um e meio', '$1,5 = 3 ÷ 2$ ⇒ $log\\ 1,5 = 0,48 − 0,30 = 0,18$.']
], '$log\\ 5 = 0,70$ e $log\\ 1,5 = 0,18$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Potência', 'Calcule $log\\ 8$, $log\\ 12$ e $log\\ 0,5$.', [
  ['Oito', '$8 = 2^{3}$ ⇒ $log\\ 8 = 3 · 0,30 = 0,90$.'],
  ['Doze', '$12 = 2^{2} · 3$ ⇒ $2 · 0,30 + 0,48 = 1,08$.'],
  ['Meio', '$0,5 = 1 ÷ 2$ ⇒ $log\\ 0,5 = 0 − 0,30 = −0,30$.']
], '$0,90$, $1,08$ e $−0,30$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Expandir', 'Desenvolva $log_{2} {8x|y^{2}}$ (com $x, y > 0$).', [
  ['Quociente', '$log_{2}(8x) − log_{2} y^{2}$.'],
  ['Produto e potência', '$log_{2} 8 + log_{2} x − 2 · log_{2} y$.'],
  ['Calcule $log_{2} 8$', '$= 3$.']
], '$3 + log_{2} x − 2 · log_{2} y$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Condensar', 'Escreva $2 · log_{3} 6 − log_{3} 4$ como um único logaritmo e calcule.', [
  ['Coeficiente vira expoente', '$2 · log_{3} 6 = log_{3} 6^{2} = log_{3} 36$.'],
  ['Quociente', '$log_{3} 36 − log_{3} 4 = log_{3}(36 ÷ 4) = log_{3} 9$.'],
  ['Valor', '$3^{2} = 9$ ⇒ $log_{3} 9 = 2$.']
], '$log_{3} 9 = 2$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O erro clássico', 'Verifique se $log\\ (2 + 3) = log\\ 2 + log\\ 3$.', [
  ['Lado esquerdo', '$log\\ 5 = 0,70$.'],
  ['Lado direito', '$log\\ 2 + log\\ 3 = 0,78$.'],
  ['Comparação', '$0,70 ≠ 0,78$. O logaritmo de uma <strong>soma</strong> não é a soma dos logaritmos.']
], 'A propriedade vale para <strong>produto</strong> ($log\\ 2 + log\\ 3 = log\\ 6$), não para soma.', 'growth'));

a.push(pratique('Produto', 'Sabendo que $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, o valor de $log\\ 12$ é:',
  ['0,78', '0,90', '1,08', '1,26', '1,44'], 2,
  '$12 = 2^{2} · 3$: $2 · 0,30 + 0,48 = 1,08$. <strong>Alternativa C.</strong>'));
a.push(pratique('Condensar', 'O valor de $log_{3} 12 + log_{3} 6 − log_{3} 8$ é:',
  ['1', '2', '3', '4', '5'], 1,
  '$log_{3} {12 · 6|8} = log_{3} 9 = 2$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Calculando sem calculadora', 'Dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, o valor de $log\\ 5$ é:',
  ['0,20', '0,50', '0,60', '0,70', '0,80'], 3,
  '$5 = 10 ÷ 2$: $log\\ 5 = 1 − 0,30 = 0,70$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as propriedades enganam', [
  ['Log da soma', '$log\\ (b + c) ≠ log\\ b + log\\ c$. A propriedade é do <strong>produto</strong>.'],
  ['Potência de log', '$log\\ b^{m} = m · log\\ b$, mas $(log\\ b)^{m}$ é outra coisa.'],
  ['Quociente de logs', '$log\\ b − log\\ c = log\\ (b ÷ c)$, e não $log\\ b ÷ log\\ c$ (isso é mudança de base).'],
  ['Esquecer a existência', 'Ao condensar ou expandir, confirme $b > 0$ e $c > 0$.']
]));
a.push(quiz([
  { q: '$log_{2} 3 + log_{2} 5$ é igual a:', o: ['$log_{2} 8$', '$log_{2} 15$', '$log_{2} 2$', '$log_{2} 35$'], a: 1 },
  { q: '$log\\ 100 − log\\ 5$ é igual a:', o: ['$log\\ 95$', '$log\\ 20$', '$log\\ 500$', '$log\\ 5\\ 000$'], a: 1 },
  { q: '$log\\ 3^{4}$ é igual a:', o: ['$4 + log\\ 3$', '$4 · log\\ 3$', '$log\\ 12$', '$log\\ 7$'], a: 1 },
  { q: 'Qual igualdade é <strong>falsa</strong>?', o: ['$log\\ 6 = log\\ 2 + log\\ 3$', '$log\\ 4 = 2 · log\\ 2$', '$log\\ 5 = log\\ 2 + log\\ 3$', '$log\\ 1,5 = log\\ 3 − log\\ 2$'], a: 2 }
]));
a.push(fechamento([
  ['Produto', 'Soma dos logaritmos.'],
  ['Quociente', 'Diferença dos logaritmos.'],
  ['Potência', 'O expoente multiplica o logaritmo.']
], 'Fatore, aplique as propriedades e confira: o log é a ponte entre operações.'));

pages.push({ out: BASE + 'aula-1-produto-quociente-potencia.html', html: K.deck({
  title: 'Produto, quociente e potência do logaritmo — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 19 a 21 · Produto, quociente e potência', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['w1-a', 'w1-b', 'w1-c', 'w1-m'], function(){ var a = +$('w1-a').value, b = +$('w1-b').value, c = +$('w1-c').value, m = +$('w1-m').value;
    if(![a, b, c, m].every(isFinite) || a <= 0 || a === 1 || b <= 0 || c <= 0){ ['w1-p', 'w1-q', 'w1-t'].forEach(function(i){ $(i).textContent = '—'; }); $('w1-h').textContent = 'Use a > 0, a ≠ 1, b > 0 e c > 0.'; return; }
    var L = function(v){ return Math.log(v) / Math.log(a); }, A = pt(a);
    $('w1-p').textContent = 'log_' + A + '(' + pt(b) + '·' + pt(c) + ') = ' + pt(L(b * c), 4) + '  e  log ' + pt(b) + ' + log ' + pt(c) + ' = ' + pt(L(b) + L(c), 4);
    $('w1-q').textContent = 'log_' + A + '(' + pt(b) + '÷' + pt(c) + ') = ' + pt(L(b / c), 4) + '  e  log ' + pt(b) + ' − log ' + pt(c) + ' = ' + pt(L(b) - L(c), 4);
    $('w1-t').textContent = 'log_' + A + ' ' + pt(b) + '^' + pt(m) + ' = ' + pt(L(Math.pow(b, m)), 4) + '  e  ' + pt(m) + '·log ' + pt(b) + ' = ' + pt(m * L(b), 4);
    $('w1-h').textContent = 'Os pares de valores coincidem. Já log(' + pt(b) + '+' + pt(c) + ') = ' + pt(L(b + c), 4) + ' não é ' + pt(L(b) + L(c), 4) + '.'; });`
}) });

// ===================== AULA 2: mudança de base =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 22 e 23', h1: 'Mudança de base: <span style="color:var(--growth);">o dicionário dos logaritmos</span>',
  sub: 'A calculadora só calcula logaritmos em algumas bases. A mudança de base traduz qualquer logaritmo para uma base conhecida.',
  badges: [['log_a b = log b ÷ log a'], ['log_a b = 1 ÷ log_b a', 'growth'], ['log_{aⁿ} bᵐ = (m/n) log_a b', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Traduzir entre bases.', [
  ['O problema', 'bases diferentes não se combinam', 'bulb'],
  ['Fórmula', 'log_a b = log_c b ÷ log_c a', 'target'],
  ['Consequências', 'inverso e potências na base', 'chart'],
  ['Usos', 'calcular e simplificar produtos', 'link'],
  ['Cuidados', 'bases e condições', 'scale']
]));
b.push(objetivosSlide([
  'Usar a <strong>fórmula de mudança de base</strong>: $log_{a} b = {log_{c} b|log_{c} a}$.',
  'Aplicar as consequências: $log_{a} b = {1|log_{b} a}$ e $log_{a^{n}} b^{m} = {m|n} · log_{a} b$.',
  'Calcular logaritmos com valores dados de $log\\ 2$ e $log\\ 3$.',
  'Simplificar produtos como $log_{2} 3 · log_{3} 4$.'
], 'Dica', 'Escolha a <strong>nova base</strong> que torne os números mais simples: base 10 (para usar $log\\ 2$ e $log\\ 3$) ou a menor base comum (4 e 8 viram base 2).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O manual em outra língua', `
          ${lede('Sua calculadora só entende logaritmos na <strong>base 10</strong> (e $e$), mas o problema pede $log_{2} 3$. A mudança de base é o <strong>dicionário</strong>: $log_{2} 3 = {log\\ 3|log\\ 2}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Dado', 'Valor'], [['$log\\ 3$', '$0,48$'], ['$log\\ 2$', '$0,30$'], ['$log_{2} 3$', '$0,48 ÷ 0,30 = 1,6$']])}
            ${mini('Conferindo: $2^{1,6}$ é aproximadamente:', ['2,5', '3', '3,5', '4'], 1, '$2^{1,6} ≈ 3,03$: coerente com $log_{2} 3 = 1,6$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · mudança de base', 'log_a b = log_c b ÷ log_c a', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Mudança de base:</strong> $log_{a} b = {log_{c} b|log_{c} a}$, para qualquer base $c > 0$, $c ≠ 1$.</li>
                <li><strong>Inverso:</strong> $log_{a} b = {1|log_{b} a}$ e $log_{a} b · log_{b} a = 1$.</li>
                <li><strong>Potências na base e no logaritmando:</strong> $log_{a^{n}} b^{m} = {m|n} · log_{a} b$.</li>
                <li>Por exemplo, $log_{4} 8 = {3|2} · log_{2} 2 = {3|2}$ (pois $4 = 2^{2}$ e $8 = 2^{3}$).</li>
              </ul>
            </div>
            ${W.box('Mude a base de log_a b', W.row(W.nm('w2-a', 'a', 2, 'any'), W.nm('w2-b', 'b', 3, 'any'), W.nm('w2-c', 'nova base c', 10, 'any')) + W.txt('w2-n', 'Numerador log_c b: ') + W.txt('w2-d', 'Denominador log_c a: ') + W.txt('w2-r', 'Razão: ') + W.hint('w2-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Resumo visual', 'Qual base escolher?', `
          ${tbl(['Situação', 'Nova base', 'Exemplo'], [['Há $log\\ 2$ e $log\\ 3$ como dados', '10', '$log_{2} 3 = {log\\ 3|log\\ 2} = 1,6$'], ['Bases que são potências da mesma base', 'a menor delas', '$log_{4} 8 = {log_{2} 8|log_{2} 4} = {3|2}$'], ['Produto de logaritmos “encadeados”', 'qualquer', '$log_{2} 3 · log_{3} 4 = {log\\ 3|log\\ 2} · {log\\ 4|log\\ 3} = 2$'], ['Inverso', '—', '$log_{5} 2 = {1|log_{2} 5}$']])}`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Calculando log₂ 3', 'Dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, calcule $log_{2} 3$ e $log_{2} 5$.', [
  ['Primeiro', '$log_{2} 3 = {log\\ 3|log\\ 2} = {0,48|0,30} = 1,6$.'],
  ['Segundo', '$log\\ 5 = 1 − 0,30 = 0,70$ ⇒ $log_{2} 5 = {0,70|0,30} = {7|3} ≈ 2,33$.']
], '$log_{2} 3 = 1,6$ e $log_{2} 5 ≈ 2,33$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Bases que são potências', 'Calcule $log_{4} 8$ e $log_{9} 27$.', [
  ['Para $log_{4} 8$', 'Base 2: ${log_{2} 8|log_{2} 4} = {3|2}$.'],
  ['Para $log_{9} 27$', 'Base 3: ${log_{3} 27|log_{3} 9} = {3|2}$.']
], 'Ambos valem ${3|2} = 1,5$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Produto encadeado', 'Calcule $log_{2} 3 · log_{3} 4$.', [
  ['Base 10', '$log_{2} 3 = {log\\ 3|log\\ 2}$ e $log_{3} 4 = {log\\ 4|log\\ 3}$.'],
  ['Cancele', '${log\\ 3|log\\ 2} · {log\\ 4|log\\ 3} = {log\\ 4|log\\ 2}$.'],
  ['Simplifique', '$log\\ 4 = 2 · log\\ 2$ ⇒ razão $= 2$.']
], '$log_{2} 3 · log_{3} 4 = 2$ (é $log_{2} 4$).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Inverso', 'Se $log_{2} 5 = {7|3}$, quanto vale $log_{5} 2$?', [
  ['Propriedade', '$log_{5} 2 = {1|log_{2} 5}$.'],
  ['Substitua', '$= 1 ÷ {7|3} = {3|7}$.']
], '$log_{5} 2 = {3|7} ≈ 0,43$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Dobrando um capital', 'Com juros de 10% ao ano, em quanto tempo um capital dobra? Dados $log\\ 2 = 0,30$ e $log\\ 1,1 = 0,041$.', [
  ['Equação', '$C · 1,1^{t} = 2C$ ⇒ $1,1^{t} = 2$.'],
  ['Logaritmo', '$t = log_{1,1} 2 = {log\\ 2|log\\ 1,1}$.'],
  ['Valor', '$t = {0,30|0,041} ≈ 7,3$.']
], 'Cerca de <strong>7,3 anos</strong> (isto é, um pouco mais de 7 anos).', 'growth'));

b.push(pratique('Mudança de base', 'Dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, o valor de $log_{2} 3$ é:',
  ['0,18', '0,62', '1,2', '1,6', '2,4'], 3,
  '${0,48|0,30} = 1,6$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(pratique('Bases potências', 'O valor de $log_{9} 27$ é:',
  ['${2|3}$', '1', '${3|2}$', '2', '3'], 2,
  'Base 3: ${3|2}$. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Tempo para dobrar', 'Um capital rende 10% ao ano e dobra em $t$ anos, com $1,1^{t} = 2$. Dados $log\\ 2 ≈ 0,30$ e $log\\ 1,1 ≈ 0,04$, o valor aproximado de $t$ é:',
  ['3,0', '5,0', '7,5', '9,0', '12,0'], 2,
  '$t = {log\\ 2|log\\ 1,1} = {0,30|0,04} = 7,5$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a mudança de base engana', [
  ['Inverter a fração', '$log_{a} b = {log\\ b|log\\ a}$: o logaritmando fica em cima.'],
  ['Cortar o log', '${log\\ b|log\\ a}$ <strong>não</strong> é $log\\ (b ÷ a)$.'],
  ['Escolher base ruim', 'Se os dados são $log\\ 2$ e $log\\ 3$, mude para a base 10.'],
  ['Confundir com a propriedade do quociente', '$log\\ b − log\\ a = log\\ (b ÷ a)$, e $log\\ b ÷ log\\ a = log_{a} b$.']
]));
b.push(quiz([
  { q: '$log_{a} b$ é igual a:', o: ['$log\\ a ÷ log\\ b$', '$log\\ b ÷ log\\ a$', '$log\\ b − log\\ a$', '$log\\ b · log\\ a$'], a: 1 },
  { q: '$log_{3} 2 · log_{2} 3$ vale:', o: ['0', '1', '6', '5'], a: 1 },
  { q: '$log_{4} 8$ vale:', o: ['2', '${3|2}$', '${2|3}$', '4'], a: 1 },
  { q: 'Se $log_{2} 5 = {7|3}$, então $log_{5} 2$ vale:', o: ['${7|3}$', '${3|7}$', '${10|3}$', '${3|10}$'], a: 1 }
]));
b.push(fechamento([
  ['Fórmula', '$log_{a} b = {log_{c} b|log_{c} a}$.'],
  ['Inverso', '$log_{a} b · log_{b} a = 1$.'],
  ['Potências', '$log_{a^{n}} b^{m} = {m|n} · log_{a} b$.']
], 'Escolha a base que simplifica o problema e traduza.'));

pages.push({ out: BASE + 'aula-2-mudanca-de-base.html', html: K.deck({
  title: 'Mudança de base — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 22 e 23 · Mudança de base', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['w2-a', 'w2-b', 'w2-c'], function(){ var a = +$('w2-a').value, b = +$('w2-b').value, c = +$('w2-c').value;
    if(![a, b, c].every(isFinite) || a <= 0 || a === 1 || b <= 0 || c <= 0 || c === 1){ ['w2-n', 'w2-d', 'w2-r'].forEach(function(i){ $(i).textContent = '—'; }); $('w2-h').textContent = 'Use a, c > 0 com a, c ≠ 1 e b > 0.'; return; }
    var n = Math.log(b) / Math.log(c), d = Math.log(a) / Math.log(c), direto = Math.log(b) / Math.log(a);
    $('w2-n').textContent = 'log_' + pt(c) + ' ' + pt(b) + ' = ' + pt(n, 4);
    $('w2-d').textContent = 'log_' + pt(c) + ' ' + pt(a) + ' = ' + pt(d, 4);
    $('w2-r').textContent = pt(n, 4) + ' ÷ ' + pt(d, 4) + ' = ' + pt(n / d, 4);
    $('w2-h').textContent = 'A razão não depende da nova base c: log_' + pt(a) + ' ' + pt(b) + ' = ' + pt(direto, 4) + '. Troque c e confira.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Propriedades operatórias: <span>produto, quociente, potência e mudança de base</span>',
  lede: 'O logaritmo transforma produto em soma, quociente em subtração e potência em produto. A mudança de base traduz entre bases para calcular e simplificar.',
  badges: ['P1: soma', 'P2: diferença', 'P3: expoente desce', 'mudança de base'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Produto', 'Vira soma', 'chart', 'primary', p('$log_{a}(b · c) = log_{a} b + log_{a} c$') + call('Exemplo', '$log\\ 6 = 0,30 + 0,48 = 0,78$.', 'success')],
    ['Quociente', 'Vira subtração', 'target', 'growth', p('$log_{a}(b ÷ c) = log_{a} b − log_{a} c$') + call('Exemplo', '$log\\ 5 = 1 − 0,30 = 0,70$.', 'success')],
    ['Potência', 'Expoente desce', 'scale', 'decay', p('$log_{a} b^{m} = m · log_{a} b$') + call('Exemplo', '$log\\ 8 = 3 · 0,30 = 0,90$.', 'success')],
    ['Mudança de base', 'O dicionário', 'link', 'success', p('$log_{a} b = {log_{c} b|log_{c} a}$') + call('Exemplo', '$log_{2} 3 = 0,48 ÷ 0,30 = 1,6$.', 'success')],
    ['Inverso e potências', 'Consequências', 'up', 'primary', li(['$log_{a} b = 1 ÷ log_{b} a$.', '$log_{a^{n}} b^{m} = (m ÷ n) · log_{a} b$.', '$log_{2} 3 · log_{3} 4 = 2$.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Fatore em primos ou potências de 10.', 'Confirme $b, c > 0$.', 'Teste com números pequenos.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar $log\\ (b + c) = log\\ b + log\\ c$.', 'Trocar numerador e denominador na mudança de base.', 'Confundir $log\\ b ÷ log\\ a$ com $log\\ (b ÷ a)$.', 'Escolher base que complica a conta.', 'Esquecer as condições de existência.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Propriedades dos logaritmos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: produto, condensação, quociente, mudança de base e potências na base.',
  final: 'Fatore, aplique as propriedades e traduza a base: o resto é aritmética.',
  questions: [
    { badge: 'Estilo ENEM · produto', text: 'São dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', cmd: 'O valor de $log\\ 12$ é:', opts: ['0,78', '0,90', '1,08', '1,26', '1,44'], a: 2,
      sol: '<p>$12 = 2^{2} · 3$: $2 · 0,30 + 0,48 = 1,08$.</p>' },
    { badge: 'Estilo ENEM · condensar', text: 'Considere a expressão $log_{3} 12 + log_{3} 6 − log_{3} 8$.', cmd: 'Seu valor é:', opts: ['1', '2', '3', '4', '5'], a: 1,
      sol: '<p>$log_{3} {12 · 6|8} = log_{3} 9 = 2$.</p>' },
    { badge: 'Estilo ENEM · quociente', text: 'São dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', cmd: 'O valor de $log\\ 5$ é:', opts: ['0,20', '0,50', '0,60', '0,70', '0,80'], a: 3,
      sol: '<p>$5 = 10 ÷ 2$: $1 − 0,30 = 0,70$.</p>' },
    { badge: 'Estilo ENEM · mudança de base', text: 'São dados $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', cmd: 'O valor de $log_{2} 3$ é:', opts: ['0,18', '0,62', '1,2', '1,6', '2,4'], a: 3,
      sol: '<p>${log\\ 3|log\\ 2} = {0,48|0,30} = 1,6$.</p>' },
    { badge: 'Estilo ENEM · potências na base', text: 'Considere $log_{9} 27$.', cmd: 'Seu valor é:', opts: ['${2|3}$', '1', '${3|2}$', '2', '3'], a: 2,
      sol: '<p>Base 3: ${log_{3} 27|log_{3} 9} = {3|2}$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">resolução</span>',
  subtitle: 'Coloque os passos de cada cálculo na ordem certa.',
  tpl: cOrdenar({
    intro: 'Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante.',
    final: 'Fatorar, usar as propriedades e só depois substituir os valores dados.',
    problemas: [
      { titulo: 'log 12', enunciado: 'Calcule $log\\ 12$, com $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', passos: ['Fatore: $12 = 4 · 3 = 2^{2} · 3$.', 'Aplique o produto: $log\\ 12 = log\\ 2^{2} + log\\ 3$.', 'Aplique a potência: $log\\ 2^{2} = 2 · log\\ 2$.', 'Substitua: $2 · 0,30 + 0,48 = 1,08$.'] },
      { titulo: 'log 5', enunciado: 'Calcule $log\\ 5$, com $log\\ 2 = 0,30$.', passos: ['Escreva $5$ como quociente: $5 = 10 ÷ 2$.', 'Aplique o quociente: $log\\ 5 = log\\ 10 − log\\ 2$.', 'Use $log\\ 10 = 1$ e $log\\ 2 = 0,30$.', 'Calcule: $1 − 0,30 = 0,70$.'] },
      { titulo: 'log₂ 3', enunciado: 'Calcule $log_{2} 3$, com $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', passos: ['Escolha uma base conhecida: a base 10.', 'Mude a base: $log_{2} 3 = log\\ 3 ÷ log\\ 2$.', 'Substitua os valores dados: $0,48 ÷ 0,30$.', 'Calcule: $1,6$.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Propriedades dos logaritmos: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: produto, soma de logs, quociente, potência e mudança de base. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: as três propriedades e a mudança de base.',
  problems: [
    { tag: 'Produto', q: 'Calcule $log_{2}(4 · 8)$.', a: 5, ph: 'valor', hint: '2 + 3.', sol: '<p>$log_{2} 32 = 5$.</p>' },
    { tag: 'Soma de logs', q: 'Com $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, quanto vale $log\\ 6$?', a: 0.78, ph: 'valor', hint: '6 = 2 · 3.', sol: '<p>$0,78$.</p>' },
    { tag: 'Quociente', q: 'Com $log\\ 2 = 0,30$, quanto vale $log\\ 5$?', a: 0.7, ph: 'valor', hint: '5 = 10 ÷ 2.', sol: '<p>$1 − 0,30 = 0,70$.</p>' },
    { tag: 'Potência', q: 'Com $log\\ 2 = 0,30$, quanto vale $log\\ 8$?', a: 0.9, ph: 'valor', hint: '8 = 2³.', sol: '<p>$3 · 0,30 = 0,90$.</p>' },
    { tag: 'Mudança de base', q: 'Qual o valor de $log_{4} 8$ (decimal)?', a: 1.5, ph: 'valor', hint: 'Base 2: 3 ÷ 2.', sol: '<p>$3 ÷ 2 = 1,5$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Propriedades Operatórias do Logaritmo', accent: 'primary', icon: 'sigma',
  aulas: [['Aulas 19–21', 'Produto, quociente e potência', 'aula-1-produto-quociente-potencia.html'], ['Aulas 22–23', 'Mudança de base', 'aula-2-mudanca-de-base.html']],
  enem: 'Propriedades dos logaritmos no estilo ENEM', cria: 'Ordene a resolução', pratica: 'Propriedades dos logaritmos: trilha de desafios'
}, pages };
