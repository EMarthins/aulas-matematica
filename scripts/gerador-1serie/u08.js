// Unidade 8 — Função afim: lei de formação por pontos e função linear (aulas 21 a 23)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-afim-lei-de-formacao', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u08', BRAND = 'Função Afim: Lei de Formação', CAP = 'Aulas 21 a 23';
const pages = [];

const LEI = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lei(a, b){ var s = 'y = '; if(Math.abs(a) < 1e-12) return s + pt(b); s += a === 1 ? '' : a === -1 ? '−' : pt(a); s += 'x'; if(b > 1e-12) s += ' + ' + pt(b); else if(b < -1e-12) s += ' − ' + pt(-b); return s; }
`;

// ===================== AULA 1: lei de formação a partir de pontos =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 21 e 22', h1: 'Função afim: <span style="color:var(--primary);">descobrindo a lei a partir de dois pontos</span>',
  sub: 'Duas informações bastam para definir uma reta. Com elas montamos um sistema, achamos a taxa e o valor inicial e escrevemos y = ax + b.',
  badges: [['f(x) = ax + b'], ['2 pontos → a e b', 'growth'], ['sistema ou fórmula', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da situação à lei, em três passos.', [
  ['Função afim', 'taxa de variação e valor inicial', 'bulb'],
  ['Dois pontos', 'a = Δy ÷ Δx e b = y − a·x', 'link'],
  ['Sistema', 'o caminho algébrico equivalente', 'scale'],
  ['Tabelas e textos', 'ler duas linhas e escrever a lei', 'chart'],
  ['Problemas', 'combustível, planos e reservatórios', 'target']
]));
a.push(objetivosSlide([
  'Identificar <strong>a</strong> (taxa) e <strong>b</strong> (valor inicial) em $f(x) = ax + b$.',
  'Determinar a lei a partir de <strong>dois pontos</strong> do gráfico, por sistema ou por fórmula.',
  'Escrever a lei a partir de uma <strong>tabela</strong> ou de um <strong>texto</strong>.',
  'Calcular valores como $f(10)$ depois de achar a lei.'
], 'Dica', 'Antes de montar o sistema, pergunte: <strong>quanto y varia quando x sobe 1?</strong> Essa resposta é o a. O b vem de um ponto qualquer.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Carro emprestado ou aplicativo?', `
          ${lede('Um carro emprestado sai “de graça”, mas você paga a <strong>gasolina</strong> (por quilômetro rodado) e uma <strong>taxa fixa</strong> de manutenção no mês. Esse tipo de custo — uma parte fixa mais uma parte que cresce com o uso — é o que a <strong>função afim</strong> descreve.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Com taxa fixa de 80 reais e gasolina a 0,50 real por km, o custo de 200 km no mês é de:', ['100 reais', '180 reais', '280 reais', '130 reais'], 1, 'Parte variável: $0,50 · 200 = 100$. Mais a parte fixa: $100 + 80 = 180$ reais. Lei: $y = 0,5x + 80$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$f(x) = ax + b$: <strong>a</strong> é quanto $y$ muda a cada 1 de $x$; <strong>b</strong> é o valor de $y$ quando $x = 0$.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · função afim', 'f(x) = ax + b, com a ≠ 0', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Função <strong>afim</strong> (ou polinomial do 1º grau): $f(x) = ax + b$ com $a, b ∈ ℝ$ e $a ≠ 0$.</li>
                <li><strong>a</strong> é o <strong>coeficiente angular</strong> (taxa de variação): $y$ muda $a$ a cada 1 de $x$.</li>
                <li><strong>b</strong> é o <strong>coeficiente linear</strong> (valor inicial): $f(0) = b$.</li>
                <li>Numa tabela, $x$ em progressão ($0, 1, 2, ...$) faz $y$ variar sempre pelo mesmo valor $a$.</li>
                <li>O gráfico é uma <strong>reta</strong>.</li>
              </ul>
            </div>
            ${W.box('Máquina da função afim', W.row(W.nm('l1-a', 'a', 2, 'any'), W.nm('l1-b', 'b', 3, 'any')) + W.nm('l1-x', 'x', 4, 'any') + W.txt('l1-y', 'f(x): ') + W.txt('l1-t', 'Tabela: ') + W.hint('l1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · dois pontos', 'Como achar a e b conhecendo dois pontos', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Pontos $(x_1, y_1)$ e $(x_2, y_2)$ na reta $y = ax + b$.</li>
                <li><strong>Taxa:</strong> $a = {y_2 − y_1|x_2 − x_1}$ (variação de $y$ ÷ variação de $x$).</li>
                <li><strong>Valor inicial:</strong> $b = y_1 − a · x_1$ (substitua um ponto na lei).</li>
                <li>Pelo <strong>sistema</strong>: substitua os dois pontos em $y = ax + b$ e subtraia as equações para eliminar $b$.</li>
                <li>Confira com o outro ponto antes de concluir.</li>
              </ul>
            </div>
            ${W.box('Dois pontos → lei', W.row(W.nm('q1-x1', 'x₁', 1, 'any'), W.nm('q1-y1', 'y₁', 5, 'any')) + W.row(W.nm('q1-x2', 'x₂', -2, 'any'), W.nm('q1-y2', 'y₂', -4, 'any')) + W.txt('q1-a', 'a = ') + W.txt('q1-b', 'b = ') + W.txt('q1-l', 'Lei: ') + W.hint('q1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A reta que passa por (1, 5) e (−2, −4)', 'Determine a lei da função afim cujo gráfico passa pelos pontos $(1, 5)$ e $(−2, −4)$.', [
  ['Calcule a taxa', '$a = {−4 − 5|−2 − 1} = {−9|−3} = 3$.'],
  ['Ache b com um dos pontos', '$5 = 3 · 1 + b$, logo $b = 2$.'],
  ['Escreva e confira', '$y = 3x + 2$. Em $x = −2$: $3 · (−2) + 2 = −4$ ✓.']
], 'A lei é $y = 3x + 2$.'));
a.push(exemplo('Exemplo resolvido', 'Achando f(10)', 'Uma função afim $f$ tem $f(2) = 7$ e $f(5) = 16$. Quanto vale $f(10)$?', [
  ['Calcule a', '$a = {16 − 7|5 − 2} = {9|3} = 3$.'],
  ['Calcule b', '$7 = 3 · 2 + b$, logo $b = 1$.'],
  ['Use a lei', '$f(10) = 3 · 10 + 1 = 31$.']
], '$f(10) = 31$.', 'growth'));

a.push(pratique('Reservatório', 'A tabela relaciona o volume $V$ de um reservatório (em litros) ao tempo $t$ (em minutos): $t = 4 → V = 130$ e $t = 8 → V = 230$. A lei que relaciona $V$ e $t$ é:',
  ['V = 25t', 'V = 30t + 25', 'V = 25t + 30', 'V = 130t', 'V = 25t + 130'], 2,
  '$a = {230 − 130|8 − 4} = 25$. Em $t = 4$: $130 = 25 · 4 + b$, então $b = 30$. Lei: $V = 25t + 30$. <strong>Alternativa C.</strong>'));
a.push(pratique('Plano de internet', 'Um plano cobra $v$ reais para $n$ GB: com 3 GB paga-se 31 reais e, com 5 GB, 39 reais. A expressão de $v$ em função de $n$ é:',
  ['v = 19n + 4', 'v = 10n + 1', 'v = 4n + 31', 'v = 4n + 19', 'v = 8n + 7'], 3,
  '$a = {39 − 31|5 − 3} = 4$. Em $n = 3$: $31 = 4 · 3 + b$, logo $b = 19$. Lei: $v = 4n + 19$. <strong>Alternativa D.</strong> Teste: $n = 5 → 20 + 19 = 39$ ✓.', '', 'growth'));
a.push(estiloEnem('O tanque do carro', 'Às 9 h, o tanque de um carro tinha 40 litros de combustível; às 13 h, 28 litros. O consumo é constante. A expressão do combustível $F$ (em litros) em função da hora $H$ é:',
  ['F = 3H + 13', 'F = −3H + 67', 'F = −3H + 40', 'F = −13H + 28', 'F = −3H + 28'], 1,
  'Em 4 horas o nível caiu 12 litros: $a = {28 − 40|13 − 9} = −3$. Com $H = 9$: $40 = −27 + b$, então $b = 67$. Lei: $F = −3H + 67$. Teste: $H = 13 → −39 + 67 = 28$ ✓. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a lei escorrega', [
  ['Subtrair em ordens diferentes', 'Em $a = {y_2 − y_1|x_2 − x_1}$, use a <strong>mesma ordem</strong> no numerador e no denominador.'],
  ['Esquecer de achar o b', 'Depois de $a$, ainda falta o valor inicial: substitua um ponto.'],
  ['Sinal de a em quedas', 'Se $y$ diminui quando $x$ aumenta, $a$ é <strong>negativo</strong>.'],
  ['Não conferir', 'Teste o ponto que não foi usado para achar $b$.']
]));
a.push(quiz([
  { q: 'Para os pontos $(1, 5)$ e $(2, 8)$, o coeficiente angular é:', o: ['2', '3', '5', '8'], a: 1 },
  { q: 'Se $f(x) = 5x − 2$, então $f(0)$ vale:', o: ['−2', '2', '5', '0'], a: 0 },
  { q: 'A reta que passa por $(0, 1)$ e $(1, 3)$ tem lei:', o: ['y = x + 2', 'y = 2x + 1', 'y = 3x', 'y = 2x − 1'], a: 1 },
  { q: 'Se $f(2) = 10$ e $f(8) = 40$ e $f$ é afim, o coeficiente $a$ é:', o: ['4', '5', '6', '30'], a: 1 }
]));
a.push(fechamento([
  ['Função afim', 'f(x) = ax + b; a é a taxa; b é f(0).'],
  ['Dois pontos', 'a = Δy ÷ Δx; b = y₁ − a·x₁.'],
  ['Conferência', 'Teste a lei no ponto que sobrou.']
], 'Taxa primeiro, valor inicial depois, conferência por último.'));

pages.push({ out: BASE + 'aula-1-lei-por-dois-pontos.html', html: K.deck({
  title: 'Função afim: lei por dois pontos — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 21 e 22 · Lei de formação a partir de pontos', slides: a,
  extra: WJS + BIND + LEI + String.raw`
  bind(['l1-a', 'l1-b', 'l1-x'], function(){ var a = +$('l1-a').value, b = +$('l1-b').value, x = +$('l1-x').value;
    if(![a, b, x].every(isFinite)){ $('l1-y').textContent = '—'; $('l1-t').textContent = ''; return; }
    $('l1-y').textContent = pt(a * x + b) + '  (' + lei(a, b) + ')'; var t = []; for(var i = 0; i <= 4; i++) t.push(i + ' → ' + pt(a * i + b)); $('l1-t').textContent = t.join('   ');
    $('l1-h').textContent = a === 0 ? 'Com a = 0 a função é constante: não é afim.' : 'A cada +1 em x, y varia ' + pt(a) + '. Em x = 0 vale ' + pt(b) + '.'; });
  bind(['q1-x1', 'q1-y1', 'q1-x2', 'q1-y2'], function(){ var x1 = +$('q1-x1').value, y1 = +$('q1-y1').value, x2 = +$('q1-x2').value, y2 = +$('q1-y2').value;
    if(![x1, y1, x2, y2].every(isFinite)){ $('q1-a').textContent = '—'; return; }
    if(x1 === x2){ $('q1-a').textContent = '—'; $('q1-b').textContent = ''; $('q1-l').textContent = 'Não define função: x₁ = x₂ (reta vertical).'; $('q1-h').textContent = ''; return; }
    var a = (y2 - y1) / (x2 - x1), b = y1 - a * x1;
    $('q1-a').textContent = '(' + pt(y2) + ' − ' + pt(y1) + ') ÷ (' + pt(x2) + ' − ' + pt(x1) + ') = ' + pt(a); $('q1-b').textContent = pt(y1) + ' − ' + pt(a) + ' · ' + pt(x1) + ' = ' + pt(b); $('q1-l').textContent = lei(a, b);
    $('q1-h').textContent = Math.abs(a) < 1e-12 ? 'a = 0: função constante, não afim.' : 'Confira: nos dois pontos a lei devolve ' + pt(a * x1 + b) + ' e ' + pt(a * x2 + b) + '.'; });`
}) });

// ===================== AULA 2: função linear =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 23', h1: 'Função linear: <span style="color:var(--growth);">a afim que passa pela origem</span>',
  sub: 'Quando o valor inicial é zero, o preço é proporcional à quantidade: dobrou a quantidade, dobrou o preço. É a função linear, f(x) = ax.',
  badges: [['f(x) = ax'], ['b = 0', 'growth'], ['proporcionalidade', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Quando o fixo some, sobra a proporção.', [
  ['Preço proporcional', 'pacotes de dados iguais', 'bulb'],
  ['Função linear', 'b = 0 e a constante de proporcionalidade', 'scale'],
  ['Afim × linear', 'um teste com duas razões', 'link'],
  ['Problemas', 'achar f(x) usando apenas um ponto', 'target']
]));
b.push(objetivosSlide([
  'Reconhecer a <strong>função linear</strong> como caso particular da afim ($b = 0$).',
  'Relacionar a função linear à <strong>proporcionalidade direta</strong>.',
  'Usar <strong>um único ponto</strong> para achar $a$ numa função linear.',
  'Decidir se uma tabela é de função <strong>linear</strong> ou <strong>afim</strong>.'
], 'Dica', 'Divida $y$ por $x$ em cada ponto: se o quociente é <strong>sempre o mesmo</strong>, a função é linear e esse quociente é o $a$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Pacotes extras de internet', `
          ${lede('Uma operadora vende pacotes extras de dados e <strong>cada pacote custa 5 reais</strong>. Um pacote: 5. Dois pacotes: 10. Três pacotes: 15. O aumento é sempre o mesmo e não há taxa fixa: a regra é $y = 5x$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Se a quantidade de pacotes <strong>dobra</strong>, o valor a pagar:', ['dobra', 'fica igual', 'cai pela metade', 'aumenta 5 reais'], 0, 'Em $y = 5x$, trocar $x$ por $2x$ dá $y = 5 · 2x = 2 · (5x)$: o valor dobra. Esse é o sinal da <strong>proporcionalidade direta</strong>.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Função linear: $f(x) = ax$. Sem termo constante, o gráfico passa pela <strong>origem</strong> e $y ÷ x = a$ em todo ponto.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · função linear', 'Afim com b = 0', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Função linear</strong>: $f(x) = a x$, com $a ≠ 0$ — é a afim com $b = 0$.</li>
                <li>Seu gráfico é uma reta que passa pela <strong>origem</strong> $(0, 0)$.</li>
                <li>Quando $x$ é multiplicado por $k$, $y$ também: $f(kx) = k · f(x)$ — <strong>proporcionalidade direta</strong>.</li>
                <li>A razão $y ÷ x = a$ é constante (a <strong>constante de proporcionalidade</strong>).</li>
                <li>Todo exemplo de “preço por unidade, sem taxa fixa” é linear.</li>
              </ul>
            </div>
            ${W.box('É linear ou só afim?', W.row(W.nm('k1-x1', 'x₁', 2, 'any'), W.nm('k1-y1', 'y₁', 10, 'any')) + W.row(W.nm('k1-x2', 'x₂', 8, 'any'), W.nm('k1-y2', 'y₂', 40, 'any')) + W.txt('k1-r', 'Razões y ÷ x: ') + W.txt('k1-v', 'Conclusão: ') + W.txt('k1-l', 'Lei: ') + W.hint('k1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Um ponto basta na função linear', 'Se $f$ é uma função <strong>linear</strong> e $f(4) = 18$, quanto vale $f(10)$?', [
  ['Use f(x) = ax', '$18 = a · 4$, logo $a = 4,5$.'],
  ['Calcule f(10)', '$f(10) = 4,5 · 10 = 45$.'],
  ['Pela proporção', '$10 = 2,5 · 4$, então $f(10) = 2,5 · 18 = 45$ ✓.']
], '$f(10) = 45$. <strong>Atenção:</strong> sem saber que $f$ é linear, um ponto só <em>não</em> determina $a$ e $b$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Linear ou afim?', 'Decida, para cada tabela, se pode ser função linear: (I) $(1, 4)$ e $(3, 12)$; (II) $(1, 3)$ e $(2, 5)$.', [
  ['Tabela I', '$4 ÷ 1 = 4$ e $12 ÷ 3 = 4$: razões iguais → linear, $y = 4x$.'],
  ['Tabela II', '$3 ÷ 1 = 3$ mas $5 ÷ 2 = 2,5$: razões diferentes → não é linear.'],
  ['Qual é a lei da II?', '$a = {5 − 3|2 − 1} = 2$ e $b = 3 − 2 = 1$: afim, $y = 2x + 1$.']
], 'I é linear ($y = 4x$); II é afim com $b = 1 ≠ 0$ ($y = 2x + 1$).', 'growth'));

b.push(pratique('Queijo no peso', 'Duzentos e cinquenta gramas de um queijo custam 9 reais. O preço $P$ em função da massa $x$ (em quilogramas) é, mantido o preço por quilo:',
  ['P = 0,036x', 'P = 36x', 'P = 9x', 'P = 250x', 'P = 3,6x'], 1,
  '$250$ g $= 0,25$ kg. Preço por quilo: $9 ÷ 0,25 = 36$ reais. Função linear: $P = 36x$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Quem é linear?', 'Entre as funções abaixo, a única <strong>linear</strong> é:',
  ['f(x) = 3x + 2', 'g(x) = 0,25x', 'h(x) = −5x + 1', 'k(x) = x²', 'm(x) = 4'], 1,
  'Linear: $f(x) = ax$, sem termo constante. $f$ e $h$ têm $b ≠ 0$; $k$ não é de 1º grau; $m$ é constante. Só $g(x) = 0,25x$ serve. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Constante de proporcionalidade', 'Uma função linear $f$ satisfaz $f(6) = 21$. Então $f(10)$ vale:',
  ['25', '28', '30', '35', '36'], 3,
  '$a = 21 ÷ 6 = 3,5$. $f(10) = 3,5 · 10 = 35$. <strong>Alternativa D.</strong> (Proporção: $10 ÷ 6 · 21 = 35$.)'));

b.push(armadilhas('Cuidados', 'Onde linear e afim se confundem', [
  ['Achar que toda afim é linear', 'Linear exige $b = 0$. $f(x) = 3x + 2$ é afim, não linear.'],
  ['Usar um ponto numa afim', 'Para achar $a$ e $b$ de uma afim comum, são precisos <strong>dois pontos</strong>.'],
  ['Razões diferentes', 'Se $y ÷ x$ muda de um ponto para outro, a função <strong>não</strong> é linear.'],
  ['Esquecer a unidade', 'Em “250 g custam 9 reais”, converta para kg antes de achar o preço por quilo.']
]));
b.push(quiz([
  { q: 'Qual função é linear?', o: ['f(x) = 2x + 1', 'f(x) = 5x', 'f(x) = x² ', 'f(x) = 7'], a: 1 },
  { q: 'O gráfico de uma função linear passa por:', o: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'], a: 0 },
  { q: 'Se $f$ é linear e $f(3) = 12$, então $f(9)$ é:', o: ['24', '36', '48', '108'], a: 1 },
  { q: 'Os pontos $(1, 3)$ e $(2, 5)$ pertencem a uma função:', o: ['linear', 'afim com b ≠ 0', 'constante', 'quadrática'], a: 1 }
]));
b.push(fechamento([
  ['Função linear', 'f(x) = ax: afim com b = 0, gráfico pela origem.'],
  ['Proporção', 'y ÷ x = a em todos os pontos; dobrou x, dobrou y.'],
  ['Teste', 'Compare as razões y ÷ x de dois pontos.']
], 'Sem valor fixo, o preço é proporcional à quantidade.'));

pages.push({ out: BASE + 'aula-2-funcao-linear.html', html: K.deck({
  title: 'Função linear — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 23 · Função linear', slides: b,
  extra: WJS + BIND + LEI + String.raw`
  bind(['k1-x1', 'k1-y1', 'k1-x2', 'k1-y2'], function(){ var x1 = +$('k1-x1').value, y1 = +$('k1-y1').value, x2 = +$('k1-x2').value, y2 = +$('k1-y2').value;
    if(![x1, y1, x2, y2].every(isFinite) || x1 === 0 || x2 === 0 || x1 === x2){ $('k1-r').textContent = '—'; $('k1-v').textContent = ''; $('k1-l').textContent = ''; $('k1-h').textContent = 'Use x₁ e x₂ diferentes e diferentes de zero.'; return; }
    var r1 = y1 / x1, r2 = y2 / x2, a = (y2 - y1) / (x2 - x1), b = y1 - a * x1, igual = Math.abs(r1 - r2) < 1e-9;
    $('k1-r').textContent = pt(r1) + ' e ' + pt(r2);
    if(igual){ $('k1-v').textContent = 'razões iguais: pode ser linear'; $('k1-l').textContent = lei(r1, 0); $('k1-h').textContent = 'Com razões iguais, y = ' + pt(r1) + ' · x passa pela origem e pelos dois pontos.'; }
    else { $('k1-v').textContent = 'razões diferentes: não é linear'; $('k1-l').textContent = Math.abs(a) < 1e-12 ? lei(0, b) + ' (constante)' : lei(a, b) + ' (afim, b = ' + pt(b) + ')'; $('k1-h').textContent = 'A reta pelos dois pontos não passa pela origem (b ≠ 0).'; } });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função afim: <span>lei por dois pontos e função linear</span>',
  lede: 'Como escrever y = ax + b a partir de dois pontos, de uma tabela ou de um texto, e quando a função é linear (proporcional).',
  badges: ['a = Δy/Δx', 'b = y − a·x', 'linear: b = 0'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Função afim', 'f(x) = ax + b', 'chart', 'primary', p('$a ≠ 0$. Gráfico: reta. $f(0) = b$.') + call('Exemplo', '0,50 por km + 80 de taxa: y = 0,5x + 80.', 'success')],
    ['Taxa a', 'Variação de y por x', 'link', 'growth', p('$a = {y_2 − y_1|x_2 − x_1}$') + call('Cuidado', 'Mesma ordem em cima e embaixo.', 'danger')],
    ['Valor inicial b', 'Substitua um ponto', 'target', 'decay', p('$b = y_1 − a · x_1$') + call('Exemplo', '(1, 5) e (−2, −4): a = 3, b = 2.', 'success')],
    ['Tabelas e textos', 'Duas linhas bastam', 'scale', 'success', li(['Ache a pela variação.', 'Ache b com um ponto.', 'Teste num terceiro ponto.'])],
    ['Função linear', 'b = 0', 'up', 'primary', p('$f(x) = ax$ · $y ÷ x = a$ · gráfico pela origem') + call('Proporção', 'Dobrou x? Dobrou y.', 'success')],
    ['Teste linear ou afim', 'Razões y ÷ x', 'check', 'growth', li(['Calcule y ÷ x em dois pontos.', 'Iguais: linear.', 'Diferentes: afim com b ≠ 0.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Subtrair em ordens diferentes no cálculo de a.', 'Esquecer de achar o b.', 'Trocar o sinal de a em quedas.', 'Chamar de linear uma afim com b ≠ 0.', 'Usar só um ponto para uma afim comum.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Função afim <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: lei por dois pontos, tabela, aluguel, função linear e escolha de tabela.',
  final: 'Achar a taxa, depois o valor inicial, e conferir: esse roteiro serve para quase toda questão de função afim.',
  questions: [
    { badge: 'Estilo ENEM · dois pontos', text: 'Uma função afim $f$ é tal que $f(1) = 5$ e $f(4) = 14$.', cmd: 'O valor de $f(10)$ é:', opts: ['30', '32', '35', '38', '47'], a: 1,
      sol: '<p>$a = {14 − 5|4 − 1} = 3$. De $f(1) = 5$: $5 = 3 + b$, $b = 2$. $f(10) = 3 · 10 + 2 = 32$.</p>' },
    { badge: 'Estilo ENEM · tabela', text: 'A tabela mostra valores de uma função afim: $x = 0, 1, 2, 3$ e $y = 7, 5, 3, 1$.', cmd: 'A lei que a representa é:', opts: ['y = 2x + 7', 'y = −2x + 7', 'y = −2x + 5', 'y = 7x − 2', 'y = −7x + 2'], a: 1,
      sol: '<p>Quando $x$ sobe 1, $y$ cai 2: $a = −2$. Em $x = 0$, $y = 7$: $b = 7$. Lei: $y = −2x + 7$.</p>' },
    { badge: 'Estilo ENEM · aluguel', text: 'Uma locadora cobra 90 reais fixos mais 0,60 real por quilômetro rodado. Um cliente pagou 168 reais.', cmd: 'Quantos quilômetros ele rodou?', opts: ['100', '130', '140', '260', '280'], a: 1,
      sol: '<p>Lei: $y = 0,6x + 90$. Com $y = 168$: $0,6x = 78$, logo $x = 130$ km.</p>' },
    { badge: 'Estilo ENEM · função linear', text: 'Uma função linear $f$ tem $f(2) = 7$.', cmd: 'O valor de $f(8)$ é:', opts: ['21', '24', '28', '31,5', '33'], a: 2,
      sol: '<p>Linear: $a = 7 ÷ 2 = 3,5$. $f(8) = 3,5 · 8 = 28$. (Como $8 = 4 · 2$, $f(8) = 4 · 7 = 28$.)</p>' },
    { badge: 'Estilo ENEM · escolha da tabela', text: 'Quatro tabelas relacionam $x$ e $y$ com os pares abaixo.', cmd: 'Qual delas é de uma função linear?', opts: ['(1, 3), (2, 5), (3, 7)', '(1, 5), (2, 6), (3, 7)', '(1, 4), (2, 8), (3, 12)', '(1, 2), (2, 3), (3, 5)', '(1, 6), (2, 6), (3, 6)'], a: 2,
      sol: '<p>Linear exige $y ÷ x$ constante. Em $(1, 4), (2, 8), (3, 12)$ a razão é sempre 4. As primeiras (razões 3 e 2,5; 5 e 3; ...) são afins com $b ≠ 0$ ou nem afins; a última é constante.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Classifique as <span style="color:var(--growth);">funções</span>',
  subtitle: 'Linear, afim (não linear) ou nenhuma das duas?',
  tpl: cClassificar({
    cats: ['Afim (não linear)', 'Linear', 'Não é afim'],
    intro: 'Cada cartão traz uma função. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Afim: ax + b com a ≠ 0. Linear: afim com b = 0. Constante, quadrática e inversa não são afins.',
    itens: [
      ['$f(x) = 3x + 2$', 0, 'a = 3 e b = 2 ≠ 0: afim, não linear.'],
      ['$g(x) = 0,25x$', 1, 'b = 0: função linear.'],
      ['$h(x) = −5x + 1$', 0, 'a = −5 e b = 1: afim decrescente.'],
      ['$k(x) = x^{2} + 1$', 2, 'Tem $x^2$: é do 2º grau.'],
      ['$m(x) = 7x$', 1, 'b = 0: linear.'],
      ['$n(x) = {1|x}$', 2, 'Tem $x$ no denominador: não é afim.'],
      ['$p(x) = 4$', 2, 'a = 0: função constante, não é de 1º grau.'],
      ['$q(x) = −x$', 1, 'a = −1 e b = 0: linear.'],
      ['$r(x) = 2(x + 3)$', 0, 'Distribuindo: $2x + 6$ — afim com b = 6.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Função afim: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas, de f(x) a função linear. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: valor numérico, taxa, valor inicial, aplicação e função linear.',
  problems: [
    { tag: 'Valor numérico', q: 'Se $f(x) = 4x − 7$, quanto vale $f(6)$?', a: 17, ph: 'f(6)', hint: 'Troque x por 6.', sol: '<p>$4 · 6 − 7 = 17$.</p>' },
    { tag: 'Taxa', q: 'Uma reta passa por $(2, 9)$ e $(5, 21)$. Qual o coeficiente angular $a$?', a: 4, ph: 'a', hint: '(21 − 9) ÷ (5 − 2).', sol: '<p>$a = 12 ÷ 3 = 4$.</p>' },
    { tag: 'Valor inicial', q: 'A reta que passa por $(1, 5)$ e $(−2, −4)$ tem lei $y = ax + b$. Qual o valor de $b$?', a: 2, ph: 'b', hint: 'a = 3; use um dos pontos.', sol: '<p>$a = 3$; $5 = 3 · 1 + b$, $b = 2$.</p>' },
    { tag: 'Aplicação', q: 'Uma locadora cobra 90 reais fixos mais 0,60 real por km. Com 168 reais pagos, quantos <strong>km</strong> foram rodados?', a: 130, ph: 'km', hint: 'Resolva 0,6x + 90 = 168.', sol: '<p>$0,6x = 78$, $x = 130$ km.</p>' },
    { tag: 'Linear', q: 'Se $f$ é <strong>linear</strong> e $f(6) = 21$, quanto vale $f(10)$?', a: 35, ph: 'f(10)', hint: 'a = 21 ÷ 6.', sol: '<p>$a = 3,5$; $f(10) = 35$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Afim: Lei de Formação', accent: 'primary', icon: 'algebra',
  aulas: [['Aulas 21–22', 'Lei por dois pontos', 'aula-1-lei-por-dois-pontos.html'], ['Aula 23', 'Função linear', 'aula-2-funcao-linear.html']],
  enem: 'Função afim no estilo ENEM', cria: 'Classifique as funções', pratica: 'Função afim: trilha de desafios'
}, pages };
