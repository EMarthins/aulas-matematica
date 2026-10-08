// Unidade 17 — Conjuntos numéricos, intervalos e reta real (edital: item l)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, vfBlock } = K;
const DIR = 'ena-profmat/17-conjuntos-numericos/';
const out = [];

// ====================== AULA 1: N, Z, Q, R ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Conjuntos numéricos · Aula 1', h1: 'Naturais, inteiros, racionais e <span style="color:var(--primary);">reais</span>',
  sub: 'A hierarquia N ⊂ Z ⊂ Q ⊂ R, frações e dízimas, números irracionais, operações com frações e como comparar números com raízes sem calculadora.',
  badges: [['Edital: conjuntos numéricos'], ['N ⊂ Z ⊂ Q ⊂ R', 'growth'], ['racional ⇔ dízima periódica', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do contar ao medir: cada conjunto resolve um problema que o anterior não resolvia.', [
  ['Os conjuntos numéricos', 'N, Z, Q, I e R: quem está dentro de quem', 'sigma'],
  ['Racionais', 'fração, decimal finito e dízima periódica; geratriz', 'numbers'],
  ['Irracionais', '√2, π e a prova por absurdo', 'bulb'],
  ['Operações com frações', 'soma, produto, divisão e simplificação', 'scale'],
  ['Comparando e aproximando', 'quadrados, raízes entre inteiros', 'chart'],
  ['Fechamento', 'quando a operação fica dentro do conjunto', 'link']
]));
a.push(objetivosSlide([
  'Classificar qualquer número nos conjuntos <strong>N, Z, Q, I e R</strong>.',
  'Converter <strong>fração ↔ decimal ↔ dízima</strong> e achar a geratriz.',
  'Justificar por que $√2$ é <strong>irracional</strong> e reconhecer irracionais comuns.',
  '<strong>Comparar e ordenar</strong> números com raízes, e localizar uma raiz entre dois inteiros.'
], 'No edital', 'Item “l — conjuntos numéricos”: é a base de tudo. Erros aqui contaminam álgebra, funções e geometria.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Cada conjunto nasceu de uma necessidade', `
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>N — naturais</strong><p style="font-size:.88rem;margin-top:8px;">$0, 1, 2, 3, …$ Contar. Falta: $3 − 5$.</p>', 'primary')}
            ${card('<strong>Z — inteiros</strong><p style="font-size:.88rem;margin-top:8px;">$… −2, −1, 0, 1, 2 …$ Subtrair sempre. Falta: $1 ÷ 3$.</p>', 'growth')}
            ${card('<strong>Q — racionais</strong><p style="font-size:.88rem;margin-top:8px;">${p|q}$ com $p, q ∈ Z$, $q ≠ 0$. Dividir sempre. Falta: $√2$.</p>', 'decay')}
            ${card('<strong>R — reais</strong><p style="font-size:.88rem;margin-top:8px;">Racionais e <strong>irracionais</strong> (I). Completa a reta: cada ponto é um número.</p>', 'success')}
          </div>
          ${mini('Qual cadeia de inclusões está correta?', ['$Z ⊂ N ⊂ Q ⊂ R$', '$N ⊂ Z ⊂ Q ⊂ R$', '$N ⊂ Q ⊂ Z ⊂ R$', '$Q ⊂ Z ⊂ N ⊂ R$'], 1, 'Todo natural é inteiro, todo inteiro é racional ($n = n/1$) e todo racional é real: $N ⊂ Z ⊂ Q ⊂ R$. Os irracionais $I$ são os reais que <strong>não</strong> são racionais: $R = Q ∪ I$.')}`, { cls: '' }));

a.push(sl('Teoria · classificação', 'Em quais conjuntos mora cada número?', `
          <div class="grid2">
            <div>
              ${tbl(['Número', 'N', 'Z', 'Q', 'I', 'R'], [['$7$', '✔', '✔', '✔', '', '✔'], ['$−3$', '', '✔', '✔', '', '✔'], ['${2|5}$', '', '', '✔', '', '✔'], ['$√2$', '', '', '', '✔', '✔'], ['$√{16} = 4$', '✔', '✔', '✔', '', '✔'], ['$π$', '', '', '', '✔', '✔']])}
              ${callout('Atenção', '$√{16}$ <strong>não</strong> é irracional (vale 4). E $0,333…$ é racional: $= 1/3$.', 'success')}
            </div>
            ${W.box('Classifique', W.sel('n1-s', 'Número', ['7', '−3', '2/5', '0,333… (dízima)', '√2', '√9', 'π', '0,1010010001… (sem padrão periódico)', '−√16', '22/7', '0'], 4) + '<div id="n1-r" style="margin-top:8px;font-size:.92rem;line-height:1.8;"></div>' + W.hint('n1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · racionais', 'Fração, decimal finito e dízima periódica', `
          <div class="grid2">
            <div>
              ${lede('Todo racional tem representação decimal <strong>finita</strong> ou <strong>periódica</strong> — e vice-versa. A fração que gera a dízima é a <strong>geratriz</strong>:')}
              ${F('0,aaa… = {a|9} \u2003 0,ababab… = {ab|99} \u2003 0,abbb… = {ab − a|90}', false)}
              ${callout('Exemplos', '$0,777… = {7|9}$ · $0,36… = {36|99} = {4|11}$ · $0,1666… = {16 − 1|90} = {1|6}$ · $0,999… = 1$.', 'success')}
              ${callout('Quando é decimal finito?', 'A fração irredutível $p/q$ dá decimal finito se, e só se, $q$ tem apenas os fatores 2 e 5 (ex.: $3/8 = 0,375$; $1/6 = 0,1666…$).')}
            </div>
            ${W.box('Geratriz de uma dízima', W.row(W.nm('n2-a', 'antiperíodo (dígitos)', '2', 1, 'min="0"'), W.nm('n2-p', 'período (dígitos)', '7', 1, 'min="0"')) + W.txt('n2-f', '') + W.hint('n2-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · irracionais', '√2 não é fração: a prova por absurdo', `
          ${lede('Suponha $√2 = {p|q}$ com $p, q$ inteiros e a fração <strong>irredutível</strong>. Então $p^2 = 2q^2$.')}
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
            <div class="step-row"><span class="badge">1</span><div><strong>$p^2$ é par</strong>, logo $p$ é par: $p = 2k$.</div></div>
            <div class="step-row"><span class="badge">2</span><div>Então $4k^2 = 2q^2$, isto é, $q^2 = 2k^2$: <strong>$q$ também é par</strong>.</div></div>
            <div class="step-row"><span class="badge">3</span><div>$p$ e $q$ pares contradizem “fração irredutível”. <strong>Absurdo!</strong> Logo $√2 ∉ Q$.</div></div>
          </div>
          ${callout('Irracionais comuns', '$√n$ com $n$ <strong>não quadrado perfeito</strong>, $π$, $e$, e decimais infinitos <strong>sem</strong> período (ex.: $0,1010010001…$). Soma/produto de racionais é racional; racional não nulo × irracional é irracional; irracional ± irracional pode ser racional ($√2 + (−√2) = 0$).', 'success')}`, { cls: 'growth' }));

a.push(sl('Operações', 'Frações: somar, multiplicar, dividir', `
          <div class="grid2">
            <div>
              ${F('{a|b} ± {c|d} = {ad ± bc|bd}   {a|b}·{c|d} = {ac|bd}   {a|b} ÷ {c|d} = {ad|bc}', false)}
              ${callout('Dica', 'Para somar, use o <strong>MMC</strong> dos denominadores (menos contas). Simplifique antes de multiplicar. Dividir por uma fração é multiplicar pelo <strong>inverso</strong>.', 'success')}
            </div>
            ${W.box('Calculadora de frações', W.row(W.nm('n3-a', 'a', 1), W.nm('n3-b', 'b', 2), W.sel('n3-o', 'op', ['+', '−', '×', '÷'], 0), W.nm('n3-c', 'c', 1), W.nm('n3-d', 'd', 3)) + W.txt('n3-r', '') + W.hint('n3-h'))}
          </div>`, { cls: '' }));

a.push(sl('Comparando', 'Qual é maior? Elevar ao quadrado e aproximar', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.7;">
                <li>Números positivos: $x < y ⇔ x^2 < y^2$. Compare <strong>os quadrados</strong>: $3√2$ × $2√3$ → $18$ × $12$ → $3√2$ é maior.</li>
                <li>Entre dois inteiros: $n^2 ≤ m < (n+1)^2 ⇒ n ≤ √m < n + 1$. Ex.: $49 < 50 < 64$ ⇒ $7 < √{50} < 8$.</li>
                <li>Frações: reduza ao mesmo denominador ou compare produtos em cruz ($a/b < c/d ⇔ ad < bc$, com $b, d > 0$).</li>
                <li>$√a + √b ≠ √{a+b}$: compare $(√a + √b)^2 = a + b + 2√{ab}$ com $a + b$.</li>
              </ul>
            </div>
            ${W.box('Compare dois números', W.sel('n4-s', 'Comparação', ['3√2 × 2√3', '√2 + √3 × √10', '√50 entre quais inteiros?', '∛30 entre quais inteiros?', '5/7 × 7/10', '0,333… × 0,33'], 0) + '<div id="n4-r" style="margin-top:8px;font-size:.92rem;line-height:1.7;"></div>' + W.hint('n4-h'))}
          </div>`, { cls: '' }));

a.push(sl('Verdadeiro ou falso?', 'Teste rápido de conceitos', `
          ${vfBlock([
  ['Todo número racional é real, mas nem todo real é racional.', true, 'Verdadeiro: $Q ⊂ R$ e os irracionais são reais que não são racionais.'],
  ['$0,999… < 1$, pois sempre falta um pouquinho.', false, 'Falso: $0,999… = 1$ (geratriz $9/9$).'],
  ['A soma de dois irracionais é sempre irracional.', false, 'Falso: $√2 + (−√2) = 0$.'],
  ['$√{25}$ é um número irracional.', false, 'Falso: $√{25} = 5$ é natural.'],
  ['O produto de um racional não nulo por um irracional é irracional.', true, 'Verdadeiro: se fosse racional, o irracional seria quociente de racionais.'],
  ['$0$ é um número natural (na convenção do ENA/PROFMAT e do Ensino Médio brasileiro).', true, 'Verdadeiro: N = {0, 1, 2, …} (alguns livros excluem o zero — confira o enunciado).']
])}`, { cls: 'growth' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto com conjuntos numéricos', [
  ['Achar que toda raiz é irracional', '$√{16} = 4$ e $√{0,25} = 0,5$ são racionais. Só $√n$ com $n$ não quadrado perfeito (e racionais não quadrados) é irracional.'],
  ['Dízima × decimal infinito', 'Decimal infinito <strong>periódico</strong> é racional; infinito <strong>sem</strong> período é irracional.'],
  ['Geratriz com antiperíodo', '$0,1666…$ é ${16 − 1|90}$, não ${16|99}$.'],
  ['Somar raízes', '$√a + √b ≠ √{a + b}$ — e $√{a^2} = ∣a∣$.']
]));

a.push(quiz([
  { q: 'Qual dos números abaixo é irracional?', o: ['$√{16}$', '$0,25$', '$√{20}$', '${22|7}$'], a: 2 },
  { q: 'A fração geratriz de $0,2777…$ é:', o: ['7/25', '5/18', '3/10', '2/9'], a: 1 },
  { q: '$√{70}$ está entre os inteiros:', o: ['7 e 8', '8 e 9', '9 e 10', '6 e 7'], a: 1 },
  { q: 'Qual é maior?', o: ['$3√2$', '$2√3$', '$√{17}$', '$4$'], a: 0 }
]));
a.push(fechamento([
  ['Hierarquia', '$N ⊂ Z ⊂ Q ⊂ R$ e $R = Q ∪ I$.'],
  ['Racionais', 'Decimal finito ou dízima periódica; geratriz $= (ab − a)/90$ etc.'],
  ['Comparar', 'Eleve ao quadrado (positivos) ou localize entre inteiros consecutivos.']
], 'Antes de operar, classifique: o conjunto diz quais regras valem.'));

out.push({ out: DIR + 'aula-1-naturais-inteiros-racionais-reais.html', html: K.deck({
  title: 'Naturais, inteiros, racionais e reais — ENA · PROFMAT', brand: 'Conjuntos Numéricos', key: 'c17a1', meta: 'Conjuntos numéricos · Aula 1 · N, Z, Q e R', slides: a,
  extra: WJS + BIND + String.raw`
  var CL = {'7': [1, 1, 1, 0], '−3': [0, 1, 1, 0], '2/5': [0, 0, 1, 0], '0,333… (dízima)': [0, 0, 1, 0], '√2': [0, 0, 0, 1], '√9': [1, 1, 1, 0], 'π': [0, 0, 0, 1], '0,1010010001… (sem padrão periódico)': [0, 0, 0, 1], '−√16': [0, 1, 1, 0], '22/7': [0, 0, 1, 0], '0': [1, 1, 1, 0]};
  var NOTA = {'√9': '√9 = 3: natural.', '−√16': '−√16 = −4: inteiro negativo.', '22/7': '22/7 é uma fração (racional); π apenas se aproxima de 22/7.', '0,333… (dízima)': 'Dízima periódica: = 1/3.', '0,1010010001… (sem padrão periódico)': 'Decimal infinito sem período: irracional.', '0': 'Na convenção brasileira, 0 é natural.'};
  bind(['n1-s'], function(){ var k = $('n1-s').options[$('n1-s').selectedIndex].text, c = CL[k], nm = ['N', 'Z', 'Q', 'I']; $('n1-r').innerHTML = nm.map(function(n, i){ return '<b style="color:' + (c[i] ? 'var(--success)' : 'var(--danger)') + ';">' + (c[i] ? '✔' : '✘') + ' ' + n + '</b>'; }).join(' · ') + ' · <b style="color:var(--success);">✔ R</b>'; $('n1-h').textContent = NOTA[k] || 'Todo número aqui é real: R = Q ∪ I.'; });
  bind(['n2-a', 'n2-p'], function(){ var A = ($('n2-a').value || '').replace(/\D/g, ''), P = ($('n2-p').value || '').replace(/\D/g, ''); if(!P){ $('n2-f').textContent = 'Informe o período.'; return; } var num = parseInt(A + P, 10) - parseInt(A || '0', 10), den = (Math.pow(10, P.length) - 1) * Math.pow(10, A.length), g = mdc(num, den) || 1; $('n2-f').textContent = '0,' + A + P + P + P + '… = ' + (num / g) + '/' + (den / g) + '  (' + num + '/' + den + ' antes de simplificar)'; $('n2-h').textContent = 'Antiperíodo 2 e período 7: 0,2777… = 25/90 = 5/18.'; });
  bind(['n3-a', 'n3-b', 'n3-o', 'n3-c', 'n3-d'], function(){ var a = Math.round(+$('n3-a').value), b = Math.round(+$('n3-b').value), c = Math.round(+$('n3-c').value), d = Math.round(+$('n3-d').value), o = +$('n3-o').value; if(!b || !d){ $('n3-r').textContent = 'Denominador não pode ser 0.'; return; } var n, m; if(o === 0){ n = a * d + c * b; m = b * d; } else if(o === 1){ n = a * d - c * b; m = b * d; } else if(o === 2){ n = a * c; m = b * d; } else { if(!c){ $('n3-r').textContent = 'Divisão por 0.'; return; } n = a * d; m = b * c; } if(m < 0){ n = -n; m = -m; } var g = mdc(n, m) || 1; $('n3-r').textContent = (n / g) + (m / g === 1 ? '' : '/' + (m / g)) + '  ≈ ' + nf(n / m, 5); $('n3-h').textContent = 'Antes de simplificar: ' + n + '/' + m + '. MMC dos denominadores ' + (b / mdc(b, d) * d) + '.'; });
  bind(['n4-s'], function(){ var k = +$('n4-s').value, t = ''; if(k === 0) t = '(3√2)² = 18 e (2√3)² = 12 ⇒ 3√2 > 2√3 (4,243 > 3,464).'; else if(k === 1) t = '√2 + √3 ≈ ' + nf(Math.SQRT2 + Math.sqrt(3), 4) + ' e √10 ≈ ' + nf(Math.sqrt(10), 4) + ' ⇒ √10 é maior. Prova: (√2+√3)² = 5 + 2√6 ≈ 9,899 < 10.'; else if(k === 2) t = '49 < 50 < 64 ⇒ 7 < √50 < 8 (√50 ≈ ' + nf(Math.sqrt(50), 4) + ').'; else if(k === 3) t = '27 < 30 < 64 ⇒ 3 < ∛30 < 4 (∛30 ≈ ' + nf(Math.cbrt(30), 4) + ').'; else if(k === 4) t = 'Produtos em cruz: 5·10 = 50 e 7·7 = 49 ⇒ 5/7 > 7/10.'; else t = '0,333… = 1/3 ≈ 0,3333 > 0,33 (diferença 1/300).'; $('n4-r').textContent = t; $('n4-h').textContent = 'Positivos: compare os quadrados; frações: produtos em cruz.'; });`
}) });

// ====================== AULA 2: intervalos e reta real ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Conjuntos numéricos · Aula 2', h1: 'Reta real, intervalos e <span style="color:var(--growth);">operações</span>',
  sub: 'Notação de intervalos, união, interseção e diferença de intervalos, distância na reta e solução de inequações em notação de intervalo.',
  badges: [['Edital: conjuntos numéricos'], ['[a, b) ∪ (c, d]', 'growth'], ['|x − c| < r', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Escrever a resposta com precisão vale ponto: aberto ou fechado?', [
  ['A reta real', 'a ordem dos números é a ordem dos pontos', 'chart'],
  ['Intervalos', '[a, b], (a, b), [a, b), (a, b], semirretas', 'link'],
  ['União, interseção e diferença', 'e a representação na reta', 'venn'],
  ['Distância e módulo', '|x − c| < r é o intervalo (c − r, c + r)', 'scale'],
  ['Inequações em notação de intervalo', 'escrever e interpretar respostas', 'target'],
  ['Contagem de inteiros', 'de volta ao capítulo 3', 'dots']
]));
b.push(objetivosSlide([
  'Representar <strong>intervalos</strong> na reta e em notação de colchetes.',
  'Calcular <strong>união, interseção e diferença</strong> de intervalos.',
  'Traduzir <strong>$∣x − c∣ < r$</strong> e <strong>$∣x − c∣ > r$</strong> em intervalos.',
  'Contar os <strong>inteiros</strong> de um intervalo (sem erro nas pontas).'
], 'No edital', 'Respostas do ENA vêm em notação de intervalo. Confundir “[” com “(” muda a alternativa — e a nota.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Aberto ou fechado?', `
          ${lede('“Números reais maiores que 2 e menores ou iguais a 7”. Como escrever?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A notação correta é:', ['$[2, 7]$', '$(2, 7]$', '$[2, 7)$', '$(2, 7)$'], 1, 'O 2 <strong>não</strong> entra (maior que 2 → aberto: “(”). O 7 entra (menor <em>ou igual</em> → fechado: “]”). Resposta: $(2, 7]$.')}
            ${card('<strong>Regra</strong><p style="font-size:.9rem;margin-top:8px;">Bolinha <strong>cheia</strong> / colchete <strong>[</strong> ou <strong>]</strong>: o extremo <em>pertence</em> (≤, ≥). Bolinha <strong>vazia</strong> / parêntese: o extremo <em>não</em> pertence (&lt;, &gt;). O infinito é <strong>sempre</strong> aberto.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · intervalos', 'Os tipos de intervalo', `
          ${tbl(['Notação', 'Conjunto', 'Na reta'], [['$[a, b]$', '$\\{x ∈ R ∣ a ≤ x ≤ b\\}$', 'fechado'], ['$(a, b)$', '$\\{x ∣ a < x < b\\}$', 'aberto'], ['$[a, b)$', '$\\{x ∣ a ≤ x < b\\}$', 'fechado à esquerda'], ['$(a, b]$', '$\\{x ∣ a < x ≤ b\\}$', 'fechado à direita'], ['$[a, +∞)$', '$\\{x ∣ x ≥ a\\}$', 'semirreta'], ['$(−∞, b)$', '$\\{x ∣ x < b\\}$', 'semirreta aberta']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Contagem de inteiros', 'Em $[a, b]$: $b − a + 1$ · em $(a, b)$: $b − a − 1$ · em $[a, b)$ ou $(a, b]$: $b − a$.', 'success')}
            ${callout('Ordem', 'Se $a < b$ então $a$ fica à esquerda de $b$ na reta. $R = (−∞, +∞)$.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Operações', 'União, interseção e diferença de intervalos', `
          ${lede('Escolha dois intervalos e uma operação: veja a resposta em notação e na reta.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('A op B', W.row(W.nm('i1-a', 'A: de', -3), W.sel('i1-ac', '', ['[', '('], 0), W.nm('i1-b', 'até', 2), W.sel('i1-bc', '', [']', ')'], 1)) + W.row(W.nm('i1-c', 'B: de', 0), W.sel('i1-cc', '', ['[', '('], 1), W.nm('i1-d', 'até', 5), W.sel('i1-dc', '', [']', ')'], 0)) + W.sel('i1-o', 'Operação', ['A ∪ B (união)', 'A ∩ B (interseção)', 'A ∖ B (diferença)', 'B ∖ A'], 1) + W.svg('i1-s', '0 0 340 90') + W.txt('i1-r', 'Resultado: ') + W.hint('i1-h'))}
            ${callout('Exemplo', '$A = [−3, 2)$ e $B = (0, 5]$: $A ∩ B = (0, 2)$ · $A ∪ B = [−3, 5]$ · $A ∖ B = [−3, 0]$ (o 0 fica em $A$ porque não está em $B$).', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Distância e módulo', '|x − c| < r é um intervalo centrado em c', `
          <div class="grid2">
            <div>
              ${F('∣x − c∣ < r ⇔ c − r < x < c + r   ∣x − c∣ > r ⇔ x < c − r "ou" x > c + r', false)}
              ${callout('Interpretação', '$∣x − c∣$ é a <strong>distância</strong> entre $x$ e $c$ na reta. “$∣x − 3∣ ≤ 2$” quer dizer: $x$ está a no máximo 2 unidades de 3 → $[1, 5]$.', 'success')}
            </div>
            ${W.box('Intervalo de |x − c| ≤ r', W.row(W.nm('i2-c', 'centro c', 3), W.nm('i2-r', 'raio r', 2, 1, 'min="0"')) + W.txt('i2-a', '|x − c| ≤ r ⇔ ') + W.txt('i2-b', '|x − c| > r ⇔ ') + W.txt('i2-n', 'Inteiros no primeiro: '))}
          </div>`, { cls: 'growth' }));

b.push(sl('Inequações', 'Respondendo em notação de intervalo', `
          <div class="grid2">
            <div>
              ${tbl(['Inequação', 'Solução'], [['$2x − 3 ≤ 7$', '$x ≤ 5$ → $(−∞, 5]$'], ['$−3x < 9$', '$x > −3$ (inverteu) → $(−3, +∞)$'], ['$1 < 2x + 1 ≤ 7$', '$0 < x ≤ 3$ → $(0, 3]$'], ['$x^2 < 9$', '$−3 < x < 3$ → $(−3, 3)$'], ['$∣x∣ ≥ 2$', '$(−∞, −2] ∪ [2, +∞)$']])}
              ${callout('Conferência', 'Escolha um número dentro do intervalo e outro fora: só o de dentro deve satisfazer a inequação original.', 'success')}
            </div>
            ${mini('A solução de $−2x + 4 ≥ 0$ é:', ['$(−∞, 2]$', '$[2, +∞)$', '$(−∞, −2]$', '$(2, +∞)$'], 0, '$−2x ≥ −4$; dividindo por $−2$ o sentido <strong>inverte</strong>: $x ≤ 2$. Notação: $(−∞, 2]$ — o 2 entra (≥) e o infinito é aberto.')}
          </div>`, { cls: 'growth' }));

b.push(ja('Revisando ENA 2025 · Q13', 'Equação com raiz quadrada de quadrado',
  'Qual o conjunto-solução, em $R$, de $√{(3x − 12)^2} = 3x − 12$?',
  ['$(−∞, 4]$', '$\\{4\\}$', '$[4, +∞)$', '$R$', '$(4, +∞)$'], 2,
  '$√{u^2} = ∣u∣$: a equação vira $∣3x − 12∣ = 3x − 12$, que vale quando $3x − 12 ≥ 0 ⇔ x ≥ 4$. Em notação: $[4, +∞)$ — inclui o 4 (≥). <strong>Alternativa C.</strong>', 'Questão já vista no capítulo 5; aqui o foco é a notação do conjunto-solução.'));

b.push(exemplo('Contagem', 'Quantos inteiros há em (−4, 7]?', 'Conte os inteiros do intervalo meio aberto $(−4, 7]$.', [
  ['Primeiro inteiro', '$−4$ <strong>não</strong> entra: o primeiro é $−3$'],
  ['Último inteiro', '$7$ entra'],
  ['Conte', '$7 − (−3) + 1 = 11$ (ou $b − a = 7 − (−4) = 11$)']
], 'Há <strong>11</strong> inteiros: $−3, −2, …, 7$.', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto com intervalos', [
  ['Infinito com colchete', '$−∞$ e $+∞$ são <strong>sempre</strong> abertos: $[2, +∞)$, nunca $[2, +∞]$.'],
  ['Esquecer de inverter', 'Dividir ou multiplicar por número negativo inverte o sentido da desigualdade.'],
  ['União × interseção', '“E” (ambas as condições) → interseção; “ou” → união.'],
  ['Pontas na diferença', 'Em $A ∖ B$, se o extremo de $B$ pertence a $B$, ele <strong>sai</strong> de $A$ (vira aberto).']
]));

b.push(quiz([
  { q: 'O conjunto $\\{x ∈ R ∣ −1 < x ≤ 4\\}$ em notação de intervalo é:', o: ['$[−1, 4]$', '$(−1, 4]$', '$[−1, 4)$', '$(−1, 4)$'], a: 1 },
  { q: 'Se $A = [−3, 2)$ e $B = (0, 5]$, então $A ∩ B$ é:', o: ['$(0, 2)$', '$[0, 2]$', '$(0, 2]$', '$[−3, 5]$'], a: 0 },
  { q: 'Quantos inteiros pertencem a $[−3, 2) ∪ (0, 5]$?', o: ['7', '8', '9', '10'], a: 2 },
  { q: 'A solução de $∣x − 3∣ ≤ 2$ é:', o: ['$(1, 5)$', '$[1, 5]$', '$(−∞, 1] ∪ [5, +∞)$', '$[−1, 5]$'], a: 1 }
]));
b.push(fechamento([
  ['Notação', '“(” e “)” excluem o extremo; “[” e “]” incluem; infinito é aberto.'],
  ['Operações', 'União “ou”, interseção “e”, diferença “em A e não em B”.'],
  ['Módulo', '$∣x − c∣ < r$ é o intervalo $(c − r, c + r)$.']
], 'Cada colchete é uma decisão: o extremo pertence ou não?'));

out.push({ out: DIR + 'aula-2-intervalos-reta-real.html', html: K.deck({
  title: 'Reta real, intervalos e operações — ENA · PROFMAT', brand: 'Conjuntos Numéricos', key: 'c17a2', meta: 'Conjuntos numéricos · Aula 2 · Intervalos', slides: b,
  extra: WJS + BIND + String.raw`
  function pertence(x, I){ return (x > I.lo || (x === I.lo && I.lc)) && (x < I.hi || (x === I.hi && I.hc)); }
  function notacao(runs){ if(!runs.length) return '∅ (conjunto vazio)'; return runs.map(function(r){ var l = r.lo === -Infinity ? '(−∞' : (r.lc ? '[' : '(') + r.lo, h = r.hi === Infinity ? '+∞)' : r.hi + (r.hc ? ']' : ')'); return l + ', ' + h; }).join(' ∪ '); }
  bind(['i1-a', 'i1-ac', 'i1-b', 'i1-bc', 'i1-c', 'i1-cc', 'i1-d', 'i1-dc', 'i1-o'], function(){ var A = {lo: +$('i1-a').value, lc: +$('i1-ac').value === 0, hi: +$('i1-b').value, hc: +$('i1-bc').value === 0}, B = {lo: +$('i1-c').value, lc: +$('i1-cc').value === 0, hi: +$('i1-d').value, hc: +$('i1-dc').value === 0}, o = +$('i1-o').value;
    function em(x){ var a = pertence(x, A), b = pertence(x, B); return o === 0 ? (a || b) : o === 1 ? (a && b) : o === 2 ? (a && !b) : (b && !a); }
    var pts = []; for(var k = -24; k <= 24; k++) pts.push(k / 2); var runs = [], i = 0; while(i < pts.length){ if(em(pts[i])){ var j = i; while(j + 1 < pts.length && em(pts[j + 1])) j++; var xi = pts[i], xj = pts[j], r = {}; if(i === 0){ r.lo = -Infinity; r.lc = false; } else if(Number.isInteger(xi)){ r.lo = xi; r.lc = true; } else { r.lo = xi - 0.5; r.lc = false; } if(j === pts.length - 1){ r.hi = Infinity; r.hc = false; } else if(Number.isInteger(xj)){ r.hi = xj; r.hc = true; } else { r.hi = xj + 0.5; r.hc = false; } runs.push(r); i = j + 1; } else i++; }
    $('i1-r').textContent = notacao(runs); var svg = $('i1-s'); svg.innerHTML = ''; function sx(x){ return 20 + (x + 12) / 24 * 300; } el('line', {x1: sx(-12), y1: 45, x2: sx(12), y2: 45, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); for(var t = -10; t <= 10; t += 2){ el('line', {x1: sx(t), y1: 41, x2: sx(t), y2: 49, stroke: 'var(--ink-soft)'}, svg); var tt = el('text', {x: sx(t), y: 66, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--ink-faint)'}, svg); tt.textContent = t; }
    runs.forEach(function(r){ var x1 = r.lo === -Infinity ? sx(-12) : sx(r.lo), x2 = r.hi === Infinity ? sx(12) : sx(r.hi); el('rect', {x: x1, y: 38, width: x2 - x1, height: 14, fill: 'var(--growth)', 'fill-opacity': .45}, svg); if(r.lo !== -Infinity) el('circle', {cx: x1, cy: 45, r: 5, fill: r.lc ? 'var(--growth)' : 'var(--bg)', stroke: 'var(--growth)', 'stroke-width': 2}, svg); if(r.hi !== Infinity) el('circle', {cx: x2, cy: 45, r: 5, fill: r.hc ? 'var(--growth)' : 'var(--bg)', stroke: 'var(--growth)', 'stroke-width': 2}, svg); });
    var ints = 0; for(var q = -12; q <= 12; q++) if(em(q)) ints++; $('i1-h').textContent = 'Inteiros no resultado (entre −12 e 12): ' + ints + '. Padrão: A = [−3, 2) e B = (0, 5] → A ∩ B = (0, 2).'; });
  bind(['i2-c', 'i2-r'], function(){ var c = +$('i2-c').value, r = +$('i2-r').value; if(r < 0) return; $('i2-a').textContent = '[' + (c - r) + ', ' + (c + r) + ']'; $('i2-b').textContent = '(−∞, ' + (c - r) + ') ∪ (' + (c + r) + ', +∞)'; $('i2-n').textContent = String(2 * Math.floor(r) + (Number.isInteger(c) ? 1 : 0)) + ' (para c inteiro: 2⌊r⌋ + 1)'; });`
}) });

module.exports = out;
