// Unidade 18 — Equações, inequações e sistemas do 1º grau (edital: item b)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/18-primeiro-grau-sistemas/';
const out = [];

// ====================== AULA 1 ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · 1º grau · Aula 1', h1: 'Equações e inequações do <span style="color:var(--primary);">1º grau</span>',
  sub: 'Resolver, classificar (uma solução, nenhuma, infinitas), equações com frações e literais, problemas de texto, inequações, sistemas de inequações e sinais de fatores do 1º grau.',
  badges: [['Edital: item b'], ['ax + b = 0 ⇒ x = −b/a', 'growth'], ['× por negativo inverte', 'danger']], color: 'primary'
}));
a.push(roteiroSlide('Parece simples — e por isso os erros são de atenção, não de conhecimento.', [
  ['Equação do 1º grau', 'x = −b/a e os casos especiais', 'algebra'],
  ['Equações com frações e literais', 'MMC; isolar uma letra', 'scale'],
  ['Problemas de texto', 'traduzir para equação (idades, dinheiro, desconto)', 'book'],
  ['Inequações do 1º grau', 'inverter ao multiplicar por negativo', 'warn'],
  ['Sistemas de inequações e dupla desigualdade', 'interseção de intervalos', 'venn'],
  ['Sinal de produtos e quocientes', 'tabela de sinais com fatores do 1º grau', 'chart']
]));
a.push(objetivosSlide([
  'Resolver e <strong>classificar</strong> equações do 1º grau (uma solução, impossível, indeterminada).',
  '<strong>Traduzir</strong> problemas de texto em equações e conferir a resposta.',
  'Resolver <strong>inequações</strong> e sistemas de inequações, escrevendo a solução em intervalo.',
  'Estudar o <strong>sinal</strong> de produtos e quocientes de fatores do 1º grau.'
], 'No edital', 'Item “b — equações e inequações do 1º grau”: é a base das inequações do 2º grau, racionais e modulares (itens c e n).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A idade do pai e do filho', `
          ${lede('Hoje o pai tem o <strong>triplo</strong> da idade do filho. Daqui a 10 anos, terá o <strong>dobro</strong>. Qual a idade atual do filho?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A idade atual do filho é:', ['5 anos', '8 anos', '10 anos', '12 anos'], 2, 'Seja $x$ a idade do filho: o pai tem $3x$. Daqui a 10 anos: $3x + 10 = 2(x + 10) ⇒ 3x + 10 = 2x + 20 ⇒ x = 10$. O pai tem 30 anos hoje (e 40 daqui a 10: o dobro de 20 ✓).')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Escolha a <strong>incógnita</strong> (o que se pede), escreva cada frase como expressão em $x$, monte a igualdade e <strong>confira</strong> no enunciado.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · equação', 'ax + b = cx + d: três possibilidades', `
          <div class="grid2">
            <div>
              ${F('(a − c)x = d − b', true)}
              ${tbl(['Caso', 'Resultado'], [['$a ≠ c$', 'uma solução: $x = {d − b|a − c}$'], ['$a = c$ e $b ≠ d$', 'nenhuma solução (impossível): $0x = $ número ≠ 0'], ['$a = c$ e $b = d$', 'infinitas soluções (identidade): $0x = 0$']])}
              ${callout('Exemplos', '$2x + 3 = 2x − 1$ → $3 = −1$ ✘: <strong>sem solução</strong>. $3(x − 1) = 3x − 3$ → $0 = 0$ ✔: <strong>todo real</strong> é solução.', 'success')}
            </div>
            ${W.box('Resolva ax + b = cx + d', W.row(W.nm('e1-a', 'a', 3), W.nm('e1-b', 'b', -6), W.nm('e1-c', 'c', 2), W.nm('e1-d', 'd', 5)) + W.txt('e1-r', '') + W.hint('e1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · frações e literais', 'Equações com frações e fórmulas', `
          <div class="grid2">
            <div>
              ${callout('Com frações', '${x|2} + {x|3} = 10$: multiplique pelo <strong>MMC</strong> (6): $3x + 2x = 60 ⇒ x = 12$. Confira: $6 + 4 = 10$ ✓.', 'success')}
              ${callout('Equação literal', 'Isole uma letra tratando as outras como números. Ex.: $v = v_0 + at ⇒ t = {v − v_0|a}$ (com $a ≠ 0$); $S = {n(a_1 + a_n)|2} ⇒ a_n = {2S|n} − a_1$.')}
              ${callout('Cuidado', 'Passar termo de lado troca o sinal; passar fator que multiplica vira divisão — e só vale se for <strong>diferente de zero</strong>.', 'danger')}
            </div>
            ${W.box('Isole t em v = v₀ + a·t', W.row(W.nm('e2-v', 'v', 30), W.nm('e2-v0', 'v₀', 10), W.nm('e2-a', 'a', 4)) + W.txt('e2-t', 't = (v − v₀)/a = ') + W.hint('e2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Problema de texto', 'A sala e a proporção (Treino 1.3)', 'Uma sala tem 40 pessoas, 25% são mulheres. Quantos homens devem sair para que as mulheres sejam 40%?', [
  ['Grupo que não muda', 'Mulheres: $0,25 · 40 = 10$ (ficam)'],
  ['Incógnita', '$x$ = homens que saem; sobram $40 − x$ pessoas'],
  ['Equação', '$10 = 0,4(40 − x) ⇒ 40 − x = 25 ⇒ x = 15$'],
  ['Confira', '10 mulheres entre 25 pessoas = 40% ✓']
], 'Devem sair <strong>15</strong> homens.', 'primary'));

a.push(sl('Teoria · inequação', 'Inequação do 1º grau: a regra do sinal', `
          <div class="grid2">
            <div>
              ${lede('Resolve-se como equação, <strong>com uma exceção</strong>: ao multiplicar ou dividir por número <strong>negativo</strong>, o sentido da desigualdade <strong>inverte</strong>.')}
              ${tbl(['Inequação', 'Solução'], [['$3x − 5 > 7$', '$x > 4$ → $(4, +∞)$'], ['$−2x + 6 ≥ 0$', '$x ≤ 3$ → $(−∞, 3]$'], ['$1 < 2x + 1 ≤ 7$', '$0 < x ≤ 3$ → $(0, 3]$']])}
            </div>
            ${W.box('Resolva ax + b (op) c', W.row(W.nm('e3-a', 'a', -2), W.nm('e3-b', 'b', 6), W.sel('e3-o', 'sinal', ['>', '≥', '<', '≤'], 1), W.nm('e3-c', 'c', 0)) + W.svg('e3-s', '0 0 340 80') + W.txt('e3-r', 'Solução: ') + W.hint('e3-h'))}
          </div>`, { cls: '' }));

a.push(sl('Sistemas de inequações', 'Interseção das soluções', `
          ${lede('Em um sistema, a solução é a <strong>interseção</strong> (“e”) das soluções. Em uma dupla desigualdade ($a < f(x) < b$) vale o mesmo.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('Exemplo', '$\\{ 2x − 5 < 7 ;\\ x ≥ 1 \\}$: $x < 6$ <strong>e</strong> $x ≥ 1$ → $[1, 6)$. Para $3 ≤ x + 1 < 8$: subtraia 1 de todos os lados → $[2, 7)$.', 'success')}
            ${mini('A solução do sistema $2x − 5 < 7$ e $x ≥ 1$ é:', ['$(−∞, 6)$', '$[1, 6)$', '$[1, +∞)$', '$(1, 6]$'], 1, 'Da primeira: $x < 6$. A segunda: $x ≥ 1$. A interseção é $[1, 6)$ (1 entra; 6 não).')}
          </div>`, { cls: '' }));

a.push(sl('Sinal de fatores', 'Produto e quociente de fatores do 1º grau', `
          ${lede('O sinal de $ax + b$ muda na raiz $x = −b/a$: com $a > 0$ é negativo à esquerda e positivo à direita (o contrário se $a < 0$). Para produtos e quocientes, <strong>multiplique os sinais</strong> numa só reta.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('(x − p)(x − q) com condição', W.row(W.nm('e4-p', 'p', -1), W.nm('e4-q', 'q', 3), W.sel('e4-o', 'condição', ['> 0', '≥ 0', '< 0', '≤ 0'], 2)) + W.svg('e4-s', '0 0 340 80') + W.txt('e4-r', 'Solução: ') + W.hint('e4-h'))}
            ${callout('Tabela de sinais', 'Raízes dividem a reta em regiões; em cada uma, o sinal do produto é o produto dos sinais dos fatores. Em quociente, a raiz do <strong>denominador</strong> nunca entra.', 'success')}
          </div>`, { cls: '' }));

a.push(ja('Revisando ENA 2026 · Q1', 'Carolina e a meta de caminhada',
  'Após caminhar $20\\%$ do que havia planejado, Carolina caminhou mais $2$ km e alcançou ${1|3}$ da meta. Quantos km ela planejou caminhar?',
  ['10 km', '12 km', '13,5 km', '15 km', '18 km'], 3,
  'Seja $x$ a meta: $0,2x + 2 = {x|3}$. Então ${x|3} − {x|5} = 2 ⇒ {2x|15} = 2 ⇒ x = 15$. <strong>Alternativa D.</strong> É uma equação do 1º grau com frações: MMC 15.', 'Já vista no capítulo 1; aqui como exemplo de equação do 1º grau.'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto no 1º grau', [
  ['Esquecer de inverter', 'Multiplicar ou dividir por número negativo inverte o sentido: $−2x ≥ −4 ⇒ x ≤ 2$.'],
  ['Cancelar $x$ sem pensar', 'Em $x(x − 1) = x$, dividir por $x$ perde a solução $x = 0$. Passe tudo para um lado e fatore.'],
  ['Equação sem solução ou identidade', '$0x = 5$ é impossível; $0x = 0$ vale para todo real. Não force uma solução.'],
  ['Traduzir mal o texto', '“A é o triplo de B” → $A = 3B$. Teste com números (A = 3, B = 1).']
]));

a.push(quiz([
  { q: 'A solução de $3(x − 2) = 2x + 5$ é:', o: ['$x = 1$', '$x = 7$', '$x = 11$', '$x = −11$'], a: 2 },
  { q: 'A equação $2x + 3 = 2x − 1$ tem:', o: ['uma solução', 'nenhuma solução', 'infinitas soluções', 'duas soluções'], a: 1 },
  { q: 'A solução do sistema $2x − 5 < 7$ e $x ≥ 1$ é:', o: ['$(−∞, 6)$', '$[1, 6)$', '$[1, +∞)$', '$(1, 6]$'], a: 1 },
  { q: 'O pai tem 30 anos e o filho 10. Daqui a quantos anos o pai terá o dobro da idade do filho?', o: ['5', '8', '10', '20'], a: 2 }
]));
a.push(fechamento([
  ['Equação', '$(a − c)x = d − b$: uma solução, nenhuma ou infinitas.'],
  ['Inequação', 'Igual à equação, mas multiplicar/dividir por negativo <strong>inverte</strong> o sentido.'],
  ['Problemas', 'Incógnita, tradução, equação e conferência no enunciado.']
], 'No 1º grau, o erro mora no sinal e na tradução.'));

out.push({ out: DIR + 'aula-1-equacoes-inequacoes-primeiro-grau.html', html: K.deck({
  title: 'Equações e inequações do 1º grau — ENA · PROFMAT', brand: 'Primeiro Grau', key: 'c18a1', meta: '1º grau · Aula 1 · Equações e inequações', slides: a,
  extra: WJS + BIND + String.raw`
  function fr(n, d){ var g = mdc(n, d) || 1; n /= g; d /= g; if(d < 0){ n = -n; d = -d; } return d === 1 ? String(n) : n + '/' + d; }
  bind(['e1-a', 'e1-b', 'e1-c', 'e1-d'], function(){ var a = +$('e1-a').value, b = +$('e1-b').value, c = +$('e1-c').value, d = +$('e1-d').value, k = a - c, m = d - b; if(k === 0){ $('e1-r').textContent = m === 0 ? 'Infinitas soluções (identidade 0 = 0)' : 'Nenhuma solução (0x = ' + m + ')'; $('e1-h').textContent = 'a = c: o x desaparece.'; return; } $('e1-r').textContent = 'x = ' + fr(m, k) + ' = ' + nf(m / k, 4); $('e1-h').textContent = '(' + a + ' − ' + c + ')x = ' + d + ' − (' + b + ') → ' + k + 'x = ' + m + '. Teste: ' + nf(a * m / k + b, 4) + ' = ' + nf(c * m / k + d, 4) + '.'; });
  bind(['e2-v', 'e2-v0', 'e2-a'], function(){ var v = +$('e2-v').value, v0 = +$('e2-v0').value, a = +$('e2-a').value; $('e2-t').textContent = a ? nf((v - v0) / a, 4) : 'a não pode ser 0'; $('e2-h').textContent = 'Para v = 30, v₀ = 10, a = 4: t = 5.'; });
  bind(['e3-a', 'e3-b', 'e3-o', 'e3-c'], function(){ var a = +$('e3-a').value, b = +$('e3-b').value, c = +$('e3-c').value, o = +$('e3-o').value, ops = ['>', '≥', '<', '≤'], svg = $('e3-s'); svg.innerHTML = ''; var k = c - b; if(!a){ var ok = o === 0 ? b > c : o === 1 ? b >= c : o === 2 ? b < c : b <= c; $('e3-r').textContent = ok ? 'todo real (sempre verdadeira)' : 'nenhum real (nunca verdadeira)'; $('e3-h').textContent = 'Com a = 0 a expressão é constante.'; return; } var x0 = k / a, inv = a < 0, op = o; if(inv) op = [2, 3, 0, 1][o]; var strict = op === 0 || op === 2, maior = op === 0 || op === 1; var txt = maior ? (strict ? '(' : '[') + nf(x0, 3) + ', +∞)' : '(−∞, ' + nf(x0, 3) + (strict ? ')' : ']'); $('e3-r').textContent = txt; function sx(x){ return 20 + (Math.max(-12, Math.min(12, x)) + 12) / 24 * 300; } el('line', {x1: sx(-12), y1: 40, x2: sx(12), y2: 40, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); if(maior) el('rect', {x: sx(x0), y: 33, width: sx(12) - sx(x0), height: 14, fill: 'var(--primary)', 'fill-opacity': .45}, svg); else el('rect', {x: sx(-12), y: 33, width: sx(x0) - sx(-12), height: 14, fill: 'var(--primary)', 'fill-opacity': .45}, svg); el('circle', {cx: sx(x0), cy: 40, r: 5, fill: strict ? 'var(--bg)' : 'var(--primary)', stroke: 'var(--primary)', 'stroke-width': 2}, svg); $('e3-h').textContent = a + 'x + ' + b + ' ' + ops[o] + ' ' + c + ' → ' + a + 'x ' + ops[o] + ' ' + k + (inv ? ' → dividir por ' + a + ' (negativo) inverte o sentido' : '') + ' → x ' + ['>', '≥', '<', '≤'][op] + ' ' + nf(x0, 3); });
  bind(['e4-p', 'e4-q', 'e4-o'], function(){ var p = +$('e4-p').value, q = +$('e4-q').value, o = +$('e4-o').value, lo = Math.min(p, q), hi = Math.max(p, q), svg = $('e4-s'); svg.innerHTML = ''; var pos = o === 0 || o === 1, incl = o === 1 || o === 3; function sx(x){ return 20 + (Math.max(-12, Math.min(12, x)) + 12) / 24 * 300; } el('line', {x1: sx(-12), y1: 40, x2: sx(12), y2: 40, stroke: 'var(--ink-soft)', 'stroke-width': 2}, svg); if(lo === hi){ $('e4-r').textContent = 'p = q: (x − p)² ' + ['> 0 → x ≠ p', '≥ 0 → todo real', '< 0 → nenhum', '≤ 0 → x = p'][o]; $('e4-h').textContent = ''; return; } function R(a, b){ el('rect', {x: sx(a), y: 33, width: sx(b) - sx(a), height: 14, fill: 'var(--primary)', 'fill-opacity': .45}, svg); } if(pos){ R(-12, lo); R(hi, 12); } else R(lo, hi); [lo, hi].forEach(function(v){ el('circle', {cx: sx(v), cy: 40, r: 5, fill: incl ? 'var(--primary)' : 'var(--bg)', stroke: 'var(--primary)', 'stroke-width': 2}, svg); }); var c = incl ? ['[', ']'] : ['(', ')']; $('e4-r').textContent = pos ? '(−∞, ' + lo + (incl ? ']' : ')') + ' ∪ ' + (incl ? '[' : '(') + hi + ', +∞)' : c[0] + lo + ', ' + hi + c[1]; $('e4-h').textContent = 'Fora das raízes o produto tem o sinal do coeficiente de x² (positivo); entre elas, o contrário.'; });`
}) });

// ====================== AULA 2 ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · 1º grau · Aula 2', h1: 'Sistemas <span style="color:var(--growth);">lineares</span> e problemas',
  sub: 'Substituição, adição, interpretação geométrica, classificação (determinado, indeterminado, impossível), sistemas 3×3 por escalonamento e problemas clássicos.',
  badges: [['Edital: item b'], ['SPD · SPI · SI', 'growth'], ['escalonamento', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Quantas incógnitas, tantas equações — e uma classificação.', [
  ['Sistemas 2×2', 'substituição e adição', 'algebra'],
  ['Interpretação geométrica', 'duas retas: cruzam, coincidem ou são paralelas', 'chart'],
  ['Classificação', 'SPD, SPI e SI', 'scale'],
  ['Problemas clássicos', 'moedas, idades, misturas, velocidades', 'book'],
  ['Sistemas 3×3', 'escalonamento', 'cube'],
  ['Retomando o ENA 2026 Q29', 'o sistema que alimenta a recursão', 'target']
]));
b.push(objetivosSlide([
  'Resolver sistemas $2 × 2$ por <strong>substituição</strong> e <strong>adição</strong>.',
  '<strong>Classificar</strong> um sistema em possível determinado, possível indeterminado ou impossível.',
  'Resolver <strong>problemas de texto</strong> com duas ou três incógnitas.',
  'Resolver sistemas $3 × 3$ por <strong>escalonamento</strong>.'
], 'No edital', 'Sistemas lineares ligam o 1º grau às matrizes e à regra de Cramer (unidade 20).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Moedas de 25 e de 50 centavos', `
          ${lede('Em um cofre há <strong>20 moedas</strong>, de R$ 0,25 e R$ 0,50, totalizando <strong>R$ 7,00</strong>. Quantas são de R$ 0,50?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Moedas de R$ 0,50:', ['8', '10', '12', '14'], 0, 'Sejam $x$ moedas de 0,25 e $y$ de 0,50: $x + y = 20$ e $0,25x + 0,50y = 7$. Da primeira, $x = 20 − y$: $0,25(20 − y) + 0,5y = 7 ⇒ 5 + 0,25y = 7 ⇒ y = 8$. Confira: $12·0,25 + 8·0,50 = 3 + 4 = 7$ ✓.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Duas incógnitas pedem <strong>duas equações</strong> independentes. Use a que isola uma letra com facilidade (substituição) ou some/subtraia para eliminar (adição).</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · 2×2', 'Substituição, adição e as duas retas', `
          <div class="grid2">
            <div>
              ${callout('Adição', '$\\{ x + y = 10 ;\\ x − y = 4 \\}$: somando, $2x = 14 ⇒ x = 7$; subtraindo, $2y = 6 ⇒ y = 3$.', 'success')}
              ${tbl(['Retas', 'Sistema'], [['cruzam-se em um ponto', 'possível e <strong>determinado</strong> (SPD)'], ['coincidem', 'possível e <strong>indeterminado</strong> (SPI): infinitas soluções'], ['paralelas distintas', '<strong>impossível</strong> (SI)']])}
            </div>
            ${W.box('Duas retas', W.row(W.nm('s1-a1', 'a₁', 1), W.nm('s1-b1', 'b₁', 1), W.nm('s1-c1', 'c₁', 10)) + W.row(W.nm('s1-a2', 'a₂', 1), W.nm('s1-b2', 'b₂', -1), W.nm('s1-c2', 'c₂', 4)) + W.svg('s1-s', '0 0 300 190') + W.txt('s1-r', '') + W.hint('s1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Classificação', 'Pelas razões dos coeficientes', `
          ${lede('Para $a_1x + b_1y = c_1$ e $a_2x + b_2y = c_2$ (com coeficientes não nulos):')}
          ${tbl(['Condição', 'Classificação'], [['${a_1|a_2} ≠ {b_1|b_2}$', 'SPD — uma solução'], ['${a_1|a_2} = {b_1|b_2} = {c_1|c_2}$', 'SPI — infinitas soluções'], ['${a_1|a_2} = {b_1|b_2} ≠ {c_1|c_2}$', 'SI — nenhuma solução']])}
          <div class="grid2" style="margin-top:8px;">
            ${mini('O sistema $2x + 3y = 12$ e $4x + 6y = 24$ é:', ['impossível', 'possível e determinado', 'possível e indeterminado', 'tem exatamente 2 soluções'], 2, 'A segunda equação é o dobro da primeira: as retas <strong>coincidem</strong> — infinitas soluções (SPI). Se fosse $4x + 6y = 20$, seria impossível.')}
            ${callout('Com o determinante', '$D = a_1b_2 − a_2b_1$: $D ≠ 0$ ⇒ SPD. Se $D = 0$, olhe $D_x$ e $D_y$ (unidade 20).')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Problema clássico', 'Cédulas de R$ 2 e R$ 5', 'Vinte cédulas, de R$ 2 e de R$ 5, somam R$ 70. Quantas são de R$ 5?', [
  ['Incógnitas', '$a$ cédulas de 2 e $b$ de 5'],
  ['Sistema', '$a + b = 20$ e $2a + 5b = 70$'],
  ['Substituição', '$a = 20 − b$: $40 − 2b + 5b = 70 ⇒ 3b = 30 ⇒ b = 10$'],
  ['Confira', '$10·2 + 10·5 = 70$ ✓ e $10 + 10 = 20$ ✓']
], 'São <strong>10</strong> cédulas de R$ 5 (e 10 de R$ 2).', 'growth'));

b.push(exemplo('Problema clássico', 'Misturas e velocidades', 'Um barco percorre 36 km a favor da correnteza em 2 h e volta em 3 h. Qual a velocidade do barco e a da correnteza?', [
  ['Incógnitas', '$b$ = velocidade do barco; $c$ = da correnteza'],
  ['Sistema', '$b + c = {36|2} = 18$ e $b − c = {36|3} = 12$'],
  ['Adição/subtração', '$2b = 30 ⇒ b = 15$; $2c = 6 ⇒ c = 3$']
], 'Barco: <strong>15 km/h</strong>; correnteza: <strong>3 km/h</strong>.', 'growth'));

b.push(sl('Sistemas 3×3', 'Escalonamento: elimine uma incógnita por vez', `
          ${lede('Use a 1ª equação para eliminar $x$ das outras duas; depois use a 2ª para eliminar $y$ da 3ª. Resolva de baixo para cima.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Sistema 3×3', '<div class="row"><div><label>x</label></div><div><label>y</label></div><div><label>z</label></div><div><label>=</label></div></div>' + [[1, 1, 1, 6], [1, -1, 0, 1], [0, 1, -1, 1]].map(function (r, i) { return W.row(...r.map((v, j) => W.nm(`s2-${i}${j}`, '', v))); }).join('') + W.txt('s2-r', '') + W.txt('s2-k', 'Classificação: ') + W.hint('s2-h'))}
            ${callout('Exemplo', '$x + y + z = 6$ · $x − y = 1$ · $y − z = 1$: de $x = y + 1$ e $z = y − 1$, $3y = 6 ⇒ y = 2$, $x = 3$, $z = 1$. Confira na 1ª: $3 + 2 + 1 = 6$ ✓.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('Revisando ENA 2026 · Q29', 'O sistema que gera a sequência',
  'No sistema ${1|2}x − {1|2}y = b$, ${1|2}x + {1|2}y = a$, a solução é $x = a + b$ e $y = a − b$. Se $(a, b) = (1, 0)$, qual a solução?',
  ['$(0, 1)$', '$(1, 1)$', '$(1, 0)$', '$(2, 0)$', '$(0, 2)$'], 1,
  'Somando as duas equações: $x = a + b = 1 + 0 = 1$. Subtraindo (2ª − 1ª): $y = a − b = 1$. Solução $(1, 1)$. <strong>Alternativa B.</strong> O enunciado completo (11º sistema) está no capítulo 8.', 'Primeiro passo da ENA 2026 Q29, que usa este sistema repetidamente.'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em sistemas', [
  ['Responder só uma incógnita', 'Releia o que é pedido: pode ser $x$, $y$, $x + y$ ou $xy$.'],
  ['Sistema impossível “resolvido”', 'Se aparece $0 = 5$, não há solução; não invente valores.'],
  ['Erro de sinal na subtração', 'Ao subtrair equações, troque o sinal de <strong>todos</strong> os termos da segunda.'],
  ['Esquecer a conferência', 'Substitua nas <strong>duas</strong> equações originais.']
]));

b.push(quiz([
  { q: 'Em $x + y = 12$ e $x − y = 4$, o valor de $x$ é:', o: ['4', '6', '8', '10'], a: 2 },
  { q: 'O sistema $2x + 3y = 12$ e $4x + 6y = 24$ é:', o: ['impossível', 'possível e determinado', 'possível e indeterminado', 'sem classificação'], a: 2 },
  { q: 'Vinte cédulas de R$ 2 e R$ 5 somam R$ 70. Quantas são de R$ 5?', o: ['8', '10', '12', '14'], a: 1 },
  { q: 'Em $x + y + z = 6$, $x − y = 1$, $y − z = 1$, o valor de $z$ é:', o: ['0', '1', '2', '3'], a: 1 }
]));
b.push(fechamento([
  ['Métodos', 'Substituição e adição; escalonamento no 3×3.'],
  ['Classificação', 'Retas cruzam (SPD), coincidem (SPI) ou são paralelas (SI).'],
  ['Problemas', 'Defina incógnitas, monte o sistema e confira nas duas equações.']
], 'Cada equação do sistema é uma informação do enunciado: use todas.'));

out.push({ out: DIR + 'aula-2-sistemas-lineares-problemas.html', html: K.deck({
  title: 'Sistemas lineares e problemas — ENA · PROFMAT', brand: 'Primeiro Grau', key: 'c18a2', meta: '1º grau · Aula 2 · Sistemas lineares', slides: b,
  extra: WJS + BIND + String.raw`
  bind(['s1-a1', 's1-b1', 's1-c1', 's1-a2', 's1-b2', 's1-c2'], function(){ var a1 = +$('s1-a1').value, b1 = +$('s1-b1').value, c1 = +$('s1-c1').value, a2 = +$('s1-a2').value, b2 = +$('s1-b2').value, c2 = +$('s1-c2').value, D = a1 * b2 - a2 * b1, Dx = c1 * b2 - c2 * b1, Dy = a1 * c2 - a2 * c1, svg = $('s1-s'), P = plano(svg, -10, 10, -10, 10, 300, 190, 5);
    function reta(a, b, c, cor){ if(b !== 0) curva(svg, P, function(x){ return (c - a * x) / b; }, -10, 10, -10, 10, cor); else if(a !== 0) el('line', {x1: P.sx(c / a), y1: P.sy(-10), x2: P.sx(c / a), y2: P.sy(10), stroke: cor, 'stroke-width': 3}, svg); }
    reta(a1, b1, c1, 'var(--primary)'); reta(a2, b2, c2, 'var(--growth)'); if(D !== 0){ var x = Dx / D, y = Dy / D; $('s1-r').textContent = 'SPD: x = ' + nf(x, 4) + ' · y = ' + nf(y, 4); ponto(svg, P, x, y, 'var(--success)', '(' + nf(x, 2) + '; ' + nf(y, 2) + ')'); $('s1-h').textContent = 'D = ' + D + ' ≠ 0: as retas se cruzam em um ponto.'; } else { $('s1-r').textContent = (Dx === 0 && Dy === 0) ? 'SPI: infinitas soluções (retas coincidentes)' : 'SI: nenhuma solução (retas paralelas)'; $('s1-h').textContent = 'D = 0.'; } });
  var ids3 = []; for(var i = 0; i < 3; i++) for(var j = 0; j < 4; j++) ids3.push('s2-' + i + j);
  bind(ids3, function(){ var M = []; for(var i = 0; i < 3; i++){ M.push([]); for(var j = 0; j < 4; j++) M[i].push(+$('s2-' + i + j).value); } var A = M.map(function(r){ return r.slice(); }), r = 0, piv = []; for(var c = 0; c < 3 && r < 3; c++){ var p = r; for(var i = r + 1; i < 3; i++) if(Math.abs(A[i][c]) > Math.abs(A[p][c])) p = i; if(Math.abs(A[p][c]) < 1e-9) continue; var t = A[p]; A[p] = A[r]; A[r] = t; for(var i = 0; i < 3; i++) if(i !== r){ var f = A[i][c] / A[r][c]; for(var j = c; j < 4; j++) A[i][j] -= f * A[r][j]; } piv.push(c); r++; } var incons = false; for(var i = r; i < 3; i++) if(Math.abs(A[i][3]) > 1e-9) incons = true;
    if(incons){ $('s2-r').textContent = '—'; $('s2-k').textContent = 'Sistema impossível (SI)'; } else if(r < 3){ $('s2-r').textContent = '—'; $('s2-k').textContent = 'Possível e indeterminado (SPI): infinitas soluções (posto ' + r + ' < 3)'; } else { var s = [0, 1, 2].map(function(i){ return A[i][3] / A[i][i]; }); $('s2-r').textContent = 'x = ' + nf(s[0], 4) + ' · y = ' + nf(s[1], 4) + ' · z = ' + nf(s[2], 4); $('s2-k').textContent = 'Possível e determinado (SPD)'; } $('s2-h').textContent = 'Padrão: x + y + z = 6, x − y = 1, y − z = 1 → (3, 2, 1).'; });`
}) });

module.exports = out;
