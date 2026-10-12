// Unidade 6 — Funções: definição, domínio e imagem (aulas 16 e 17)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcoes-definicao-dominio-imagem', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u06', BRAND = 'Funções: Definição, Domínio e Imagem', CAP = 'Aulas 16 e 17';
const pages = [];

// ===================== AULA 1: definição de função =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 16', h1: 'O que é uma função? <span style="color:var(--primary);">Dependência entre duas variáveis</span>',
  sub: 'A conta de luz depende do consumo; o preço da corrida depende dos quilômetros. Função é a regra que liga cada valor de uma variável a um único valor da outra.',
  badges: [['x → y'], ['um e apenas um', 'growth'], ['lei de formação', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da dependência do dia a dia à linguagem dos conjuntos.', [
  ['Dependência', 'uma grandeza que muda quando a outra muda', 'link'],
  ['Definição', 'cada x tem um e apenas um y', 'bulb'],
  ['Domínio, contradomínio e imagem', 'os três conjuntos de uma função', 'scale'],
  ['Lei de formação', 'descobrir a regra a partir de uma tabela', 'chart'],
  ['Problemas', 'conta de luz, corrida de táxi e tabelas', 'target']
]));
a.push(objetivosSlide([
  'Reconhecer, em um diagrama ou lista de pares, se uma relação <strong>é ou não uma função</strong>.',
  'Identificar <strong>domínio, contradomínio e conjunto imagem</strong>.',
  'Calcular valores de $f(x)$ e montar a <strong>tabela</strong> de uma função.',
  'Descobrir a <strong>lei de formação</strong> a partir de uma tabela.'
], 'Dica', 'Duas perguntas resolvem tudo: <strong>todo x do domínio tem seta?</strong> E <strong>tem só uma?</strong> Se as duas respostas forem “sim”, é função.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Como se calcula a conta de luz?', `
          ${lede('A fatura de energia tem uma <strong>parte fixa</strong> de 30 reais (iluminação pública) e uma <strong>parte variável</strong> de 0,80 real para cada quilowatt-hora consumido. Quanto maior o consumo, maior o valor: o valor <strong>depende</strong> do consumo.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Com um consumo de 100 kWh, o valor da fatura (fixa + variável) é de:', ['80 reais', '110 reais', '130 reais', '30 reais'], 1, 'Parte variável: $0,80 · 100 = 80$. Somando a parte fixa: $30 + 80 = 110$ reais.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Valor $= 30 + 0,80 · x$, em que $x$ é o consumo. Para cada $x$ há <strong>um único</strong> valor: isso é uma função.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'Cada x com um e apenas um y', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Sejam $A$ e $B$ conjuntos não vazios. Uma relação de $A$ em $B$ é uma <strong>função</strong> quando <strong>cada $x$ de $A$</strong> está associado a <strong>um e apenas um $y$</strong> de $B$.</li>
                <li><strong>Domínio</strong> $D(f)$: o conjunto $A$, dos valores de $x$.</li>
                <li><strong>Contradomínio</strong> $CD(f)$: o conjunto $B$, onde os $y$ podem estar.</li>
                <li><strong>Imagem</strong> $Im(f)$: só os valores de $B$ que <strong>realmente recebem</strong> seta. Vale $Im(f) ⊂ CD(f)$.</li>
                <li>Notação: $y = f(x)$ (lê-se “f de x”).</li>
              </ul>
            </div>
            ${card('<strong>Dois testes rápidos</strong><p style="font-size:.92rem;margin-top:8px;"><strong>1.</strong> Algum x ficou sem seta? Então <strong>não</strong> é função.<br><strong>2.</strong> Algum x tem duas setas? Então <strong>não</strong> é função.<br><strong>3.</strong> Dois x chegando no mesmo y? <strong>Pode</strong>: ainda é função.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Explore · é função?', 'Teste quatro relações de A = {1, 2, 3} em B = {2, 4, 6, 8}', `
          <div class="grid2">
            ${W.box('Diagrama de flechas', W.sel('r1-q', 'Relação', ['Relação 1', 'Relação 2', 'Relação 3', 'Relação 4'], 0) + W.svg('r1-s', '0 0 360 210', '380px') + W.txt('r1-v', 'Veredito: ') + W.hint('r1-h'))}
            <div>
              ${callout('O que observar', 'Em cada relação, siga as setas que saem de <strong>1, 2 e 3</strong>. Conte quantas setas saem de cada um. Depois veja se mais de um x pode chegar no mesmo y.', 'success')}
              ${callout('Atenção', 'Sobrar elemento de B <strong>sem</strong> seta não impede de ser função (ele só não está na imagem). O que não pode é sobrar elemento de A.', 'danger')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Domínio, contradomínio e imagem', 'Seja $f: A → B$ dada por $f(x) = 2x + 3$, com $A = \\{-1, 0, 2, 5\\}$ e $B = \\{0, 1, 3, 5, 7, 9, 13\\}$. Determine $D(f)$, $CD(f)$ e $Im(f)$.', [
  ['Domínio e contradomínio', '$D(f) = A = \\{-1, 0, 2, 5\\}$ e $CD(f) = B$.'],
  ['Calcule f(x) para cada x do domínio', '$f(-1) = 1$ · $f(0) = 3$ · $f(2) = 7$ · $f(5) = 13$.'],
  ['Monte a imagem', 'São só os valores obtidos: $Im(f) = \\{1, 3, 7, 13\\}$.']
], 'Os elementos 0, 5 e 9 de $B$ ficam sem seta: estão no contradomínio, mas <strong>não</strong> na imagem.'));

a.push(sl('Explore · tabela de uma função', 'Monte a tabela de y = a · x + b', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Uma função pode ser dada por <strong>lei de formação</strong> (fórmula), <strong>tabela</strong>, <strong>diagrama</strong> ou <strong>gráfico</strong>.</li>
                <li>Para montar a tabela, substitua cada $x$ do domínio na lei.</li>
                <li>A coluna dos $y$ obtidos é o <strong>conjunto imagem</strong> (sem repetir valores).</li>
              </ul>
            </div>
            ${W.box('Tabela e imagem', W.row(W.nm('f1-a', 'a', 2, 'any'), W.nm('f1-b', 'b', 3, 'any')) + '<div><label>Domínio (separe por ponto e vírgula)</label><input type="text" id="f1-d" value="-1; 0; 2; 5" inputmode="decimal"></div>' + W.txt('f1-t', 'Pares (x, y): ') + W.txt('f1-i', 'Imagem: ') + W.hint('f1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Lei de formação', 'Descobrindo a regra a partir de uma tabela', `
          <div class="grid2">
            <div>
              ${tbl(['x', '1', '2', '3', '4'], [['y', '3', '5', '7', '9']])}
              <ul class="plain" style="font-size:.95rem;line-height:1.7;margin-top:10px;">
                <li>Quando $x$ sobe 1, $y$ sobe 2: o coeficiente de $x$ é <strong>2</strong>.</li>
                <li>Para $x = 1$, $2 · 1 = 2$, mas $y = 3$: faltam <strong>+1</strong>.</li>
                <li>Lei: <strong>$y = 2x + 1$</strong>. Confira em outros pontos: $x = 4 → 2 · 4 + 1 = 9$ ✓.</li>
              </ul>
            </div>
            ${callout('Truque da conferência', 'Descoberta a lei, <strong>teste em dois pontos da tabela</strong> que você não usou para achá-la. Se os dois conferem, a lei está certa. Funciona também testando as alternativas de um exercício.', 'success')}
          </div>`, { cls: '' }));

a.push(pratique('Imagem de uma função', 'Seja $f(x) = x^{2} − 3$ com domínio $A = \\{−2, −1, 0, 1\\}$. O conjunto imagem de $f$ é:',
  ['{1, −2, −3, −2}', '{−3, −2, 1}', '{−3, 1}', '{−2, −1, 0, 1}', '{1, 2, 3}'], 1,
  '$f(−2) = 1$ · $f(−1) = −2$ · $f(0) = −3$ · $f(1) = −2$. Sem repetir: $Im(f) = \\{−3, −2, 1\\}$. <strong>Alternativa B.</strong> (Conjunto não repete elemento.)'));
a.push(pratique('Qual é a lei?', 'Uma tabela traz: $x = 0, 1, 2, 3$ com $y = 4, 7, 10, 13$. A lei de formação é:',
  ['y = 4x + 3', 'y = x + 4', 'y = 3x + 4', 'y = 3x + 1', 'y = 7x − 3'], 2,
  'De um termo para o seguinte, $y$ sobe 3: coeficiente 3. Em $x = 0$, $y = 4$: termo constante 4. Lei: $y = 3x + 4$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Corrida de táxi', 'O preço de uma corrida de táxi depende da distância: 2 km custam 11 reais, 4 km custam 17 reais e 6 km custam 23 reais. A lei que relaciona o preço $y$ à distância $x$ (em km) é:',
  ['y = 3x', 'y = 5x + 1', 'y = 3x + 5', 'y = 5,5x', 'y = 2x + 7'], 2,
  'A cada 2 km o preço sobe 6 reais, ou seja, 3 reais por km: coeficiente 3. Em $x = 2$: $3 · 2 = 6$ e $y = 11$, faltam 5 (valor fixo, a bandeirada). Lei: $y = 3x + 5$. Teste: $x = 6 → 18 + 5 = 23$ ✓. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a ideia de função confunde', [
  ['Esquecer o “um e apenas um”', 'Dois y para o mesmo x desmancha a função; <strong>dois x para o mesmo y</strong> não.'],
  ['Trocar imagem por contradomínio', 'O contradomínio é o conjunto de chegada; a imagem tem só os valores que recebem seta.'],
  ['Repetir elementos na imagem', 'Em conjunto, cada elemento aparece uma vez: $\\{−3, −2, 1\\}$, não $\\{1, −2, −3, −2\\}$.'],
  ['Achar a lei só com um ponto', 'Teste sempre em outro ponto da tabela antes de concluir.']
]));
a.push(quiz([
  { q: 'Em uma função, cada elemento do domínio tem:', o: ['nenhuma imagem', 'exatamente uma imagem', 'pelo menos duas imagens', 'a mesma imagem que todos os outros'], a: 1 },
  { q: 'Se $f(x) = 2x − 1$, então $f(4)$ vale:', o: ['7', '8', '9', '3'], a: 0 },
  { q: 'Se $f(x) = x^{2}$ e o domínio é $\\{1, 2, 3\\}$, a imagem é:', o: ['{1, 4, 9}', '{1, 2, 3}', '{2, 4, 6}', '{1, 4, 6}'], a: 0 },
  { q: 'Em $y = x + 5$ com $x ∈ \\{0, 5, 15\\}$, a imagem é:', o: ['{5, 10, 20}', '{0, 5, 15}', '{5, 10, 15}', '{0, 5, 10, 15, 20, 25}'], a: 0 }
]));
a.push(fechamento([
  ['Função', 'Cada x do domínio tem um e apenas um y.'],
  ['Três conjuntos', 'Domínio (x), contradomínio (onde y pode estar) e imagem (y que aparecem).'],
  ['Lei de formação', 'Descubra o coeficiente pela variação de y e o termo constante pelo valor em x = 0.']
], 'Função é uma regra: dado x, o resultado é único.'));

pages.push({ out: BASE + 'aula-1-definicao-de-funcao.html', html: K.deck({
  title: 'Definição de função — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 16 · Definição de função', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  var A = [1, 2, 3], B = [2, 4, 6, 8];
  var REL = [ [[1,2],[2,4],[3,6]], [[1,2],[2,4],[3,4]], [[1,2],[1,4],[2,6],[3,8]], [[1,2],[2,4]] ];
  function relacao(){ var r = REL[+$('r1-q').value], s = $('r1-s'); s.innerHTML = '';
    var ya = function(i){ return 40 + i * 60; }, yb = function(i){ return 30 + i * 50; };
    r.forEach(function(pr){ el('line', {x1: 100, y1: ya(A.indexOf(pr[0])), x2: 260, y2: yb(B.indexOf(pr[1])), stroke: 'var(--primary)', 'stroke-width': 2.4}, s); });
    A.forEach(function(v, i){ el('circle', {cx: 100, cy: ya(i), r: 13, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s); var t = el('text', {x: 100, y: ya(i) + 5, 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = v; });
    B.forEach(function(v, i){ el('circle', {cx: 260, cy: yb(i), r: 13, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, s); var t = el('text', {x: 260, y: yb(i) + 5, 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, fill: 'var(--ink)'}, s); t.textContent = v; });
    var ta = el('text', {x: 100, y: 14, 'text-anchor': 'middle', 'font-size': 12, fill: 'var(--ink-faint)', 'font-weight': 700}, s); ta.textContent = 'A (domínio)';
    var tb = el('text', {x: 260, y: 14, 'text-anchor': 'middle', 'font-size': 12, fill: 'var(--ink-faint)', 'font-weight': 700}, s); tb.textContent = 'B (contradomínio)';
    var msg = '', ok = true;
    A.forEach(function(x){ var n = r.filter(function(pr){ return pr[0] === x; }).length; if(ok && n === 0){ ok = false; msg = 'Não é função: o elemento ' + x + ' de A não tem seta.'; } else if(ok && n > 1){ ok = false; msg = 'Não é função: o elemento ' + x + ' tem ' + n + ' setas.'; } });
    var im = []; r.forEach(function(pr){ if(im.indexOf(pr[1]) < 0) im.push(pr[1]); }); im.sort(function(a, b){ return a - b; });
    $('r1-v').textContent = ok ? 'É função.' : msg;
    $('r1-h').textContent = ok ? 'Imagem = {' + im.join(', ') + '}; os elementos de B sem seta ficam fora da imagem.' : 'Falha em “cada x tem um e apenas um y”.'; }
  $('r1-q').addEventListener('change', relacao); relacao();
  bind(['f1-a', 'f1-b', 'f1-d'], function(){ var a = +$('f1-a').value, b = +$('f1-b').value;
    var xs = $('f1-d').value.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number);
    if(!isFinite(a) || !isFinite(b) || !xs.length || !xs.every(isFinite)){ $('f1-t').textContent = '—'; $('f1-i').textContent = ''; return; }
    var ys = xs.map(function(x){ return a * x + b; }), im = [];
    ys.forEach(function(y){ y = Math.round(y * 1e9) / 1e9; if(im.indexOf(y) < 0) im.push(y); });
    $('f1-t').textContent = xs.map(function(x, i){ return '(' + pt(x) + ', ' + pt(ys[i]) + ')'; }).join('  ');
    $('f1-i').textContent = '{' + im.sort(function(p, q){ return p - q; }).map(function(v){ return pt(v); }).join('; ') + '}';
    $('f1-h').textContent = 'y = ' + pt(a) + ' · x + ' + pt(b) + '. Cada x do domínio gera um único y.'; });`
}) });

// ===================== AULA 2: domínio e imagem =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 17', h1: 'Domínio e imagem: <span style="color:var(--growth);">que valores fazem sentido?</span>',
  sub: 'Não dá para comprar 2,5 pasteis nem dividir por zero. Descobrir o domínio é separar os valores que a regra aceita dos que ela recusa.',
  badges: [['denominador ≠ 0'], ['radicando ≥ 0', 'growth'], ['contexto', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Quem pode entrar e o que pode sair.', [
  ['Domínio no contexto', 'quantidades que fazem sentido', 'bulb'],
  ['Domínio de uma lei', 'denominador diferente de zero e radicando não negativo', 'scale'],
  ['Imagem', 'os valores que realmente saem', 'chart'],
  ['Problemas', 'palitos, ingressos e restrições', 'target']
]));
b.push(objetivosSlide([
  'Determinar o <strong>domínio</strong> pelo contexto do problema.',
  'Determinar o domínio de funções com <strong>fração</strong> e com <strong>raiz quadrada</strong>.',
  'Escrever o domínio com <strong>notação de conjunto</strong>.',
  'Obter o <strong>conjunto imagem</strong> a partir do domínio.'
], 'Dica', 'Para achar o domínio, pergunte: <strong>que valor de x quebra a conta?</strong> Esses valores saem; os demais ficam.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quantos pastéis posso comprar?', `
          ${lede('Uma lanchonete vende pastel a 6 reais cada. O valor total é $y = 6x$, em que $x$ é a quantidade. Faz sentido comprar 1, 2 ou 3 pastéis. Mas 2,5 pastéis? Ou −1?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quais valores de $x$ fazem sentido nesse contexto?', ['qualquer número real', 'inteiros não negativos: 0, 1, 2, 3…', 'só números negativos', 'frações como 2,5'], 1, 'Quantidade de unidades inteiras e não negativas: $D = \\{0, 1, 2, 3, ...\\}$. A <strong>imagem</strong> são os valores totais possíveis: 0, 6, 12, 18…')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">O <strong>domínio</strong> são os valores de $x$ permitidos pela situação (ou pela matemática). A <strong>imagem</strong> são os $y$ que sobram dessa escolha.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · restrições', 'Quando não se escolhe o domínio', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Sem domínio informado, entende-se $f: ℝ → ℝ$ — <strong>mas</strong> tiram-se do domínio os valores em que a conta não existe.</li>
                <li><strong>Denominador ≠ 0</strong>: não se divide por zero.</li>
                <li><strong>Radicando ≥ 0</strong> em raiz quadrada: não há raiz real de número negativo.</li>
                <li>Raiz <strong>no denominador</strong>: radicando <strong>&gt; 0</strong> (nem zero, nem negativo).</li>
                <li>Se aparecerem várias restrições, vale <strong>a interseção</strong>: todas ao mesmo tempo.</li>
              </ul>
            </div>
            ${W.box('Domínio automático', W.row(W.sel('d1-f', 'Função', ['1 ÷ (x − c)', '√(x − c)', '1 ÷ √(x − c)', '√(c − x)'], 0), W.nm('d1-c', 'c', 3, 'any')) + W.nm('d1-t', 'Teste um x', 5, 'any') + W.txt('d1-d', 'Domínio: ') + W.txt('d1-r', 'O x testado: ') + W.hint('d1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Duas restrições ao mesmo tempo', 'Determine o domínio de $g(x) = {√{2x − 6}|x − 5}$.', [
  ['Raiz no numerador', 'Radicando não negativo: $2x − 6 ≥ 0$, ou seja, $x ≥ 3$.'],
  ['Fração', 'Denominador diferente de zero: $x − 5 ≠ 0$, ou seja, $x ≠ 5$.'],
  ['Interseção', 'Os dois ao mesmo tempo: $x ≥ 3$ e $x ≠ 5$.']
], '$D(g) = \\{x ∈ ℝ | x ≥ 3 "e" x ≠ 5\\}$.', 'growth'));

b.push(exemplo('Exemplo resolvido', 'Ingressos de um cinema', 'Um cinema com <strong>80 lugares</strong> vende ingressos a <strong>12 reais</strong>. A arrecadação é $V = 12n$, com $n$ ingressos vendidos. Qual o domínio, e qual a arrecadação com 45 ingressos?', [
  ['Domínio pelo contexto', '$n$ é quantidade inteira entre 0 e a lotação: $D = \\{0, 1, 2, ..., 80\\}$.'],
  ['Imagem', '$V$ vai de 0 a $12 · 80 = 960$, de 12 em 12: $Im = \\{0, 12, 24, ..., 960\\}$.'],
  ['Valor com 45 ingressos', '$V(45) = 12 · 45 = 540$.']
], 'Arrecadação de <strong>540 reais</strong>. Note que 45,5 ingressos não está no domínio.', 'growth'));

b.push(pratique('Fração', 'O domínio de $f(x) = {5|x + 2}$ é:',
  ['ℝ − {2}', 'ℝ − {−2}', 'ℝ', 'ℝ − {5}', 'x ≥ −2'], 1,
  'Denominador diferente de zero: $x + 2 ≠ 0$, logo $x ≠ −2$. $D = ℝ − \\{−2\\}$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Raiz quadrada', 'O domínio de $f(x) = √{x − 7}$ é:',
  ['x > 7', 'x ≥ 7', 'x ≤ 7', 'x ≠ 7', 'ℝ'], 1,
  'Radicando não negativo: $x − 7 ≥ 0$, então $x ≥ 7$ (o 7 entra: $√{0} = 0$). <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Quadrados de palitos', 'Com palitos formam-se quadrados enfileirados, um ao lado do outro: 1 quadrado usa 4 palitos, 2 quadrados usam 7, 3 quadrados usam 10. Mantido o padrão, quantos palitos são necessários para 15 quadrados?',
  ['45', '46', '48', '60', '61'], 1,
  'A cada quadrado novo entram 3 palitos. Lei: $y = 3x + 1$ ($x$ = número de quadrados). Para $x = 15$: $y = 45 + 1 = 46$. O domínio é formado pelos inteiros positivos. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o domínio escorrega', [
  ['Esquecer o denominador', 'Toda fração pede “denominador diferente de zero”. Resolva essa condição antes de qualquer outra.'],
  ['Trocar &gt; por ≥ nas raízes', 'Raiz no numerador: $≥ 0$. Raiz no denominador: $> 0$.'],
  ['Domínio de contexto', 'Quantidade de pessoas ou objetos é inteira e não negativa: nada de 2,5 ingressos.'],
  ['Misturar imagem e domínio', 'Domínio são os $x$; imagem são os $y$ que resultam.']
]));
b.push(quiz([
  { q: 'O domínio de $1 ÷ (x − 4)$ é:', o: ['ℝ − {4}', 'ℝ − {−4}', 'x > 4', 'ℝ'], a: 0 },
  { q: 'O domínio de $√{x + 3}$ é:', o: ['x ≥ −3', 'x ≥ 3', 'x ≤ −3', 'x > −3'], a: 0 },
  { q: 'Se $f(x) = x − 1$ e o domínio é $\\{2, 5\\}$, a imagem é:', o: ['{1, 4}', '{2, 5}', '{3, 6}', '{1, 2, 5}'], a: 0 },
  { q: 'Em $1 ÷ √{x}$, o domínio é:', o: ['x > 0', 'x ≥ 0', 'x ≠ 0', 'ℝ'], a: 0 }
]));
b.push(fechamento([
  ['Domínio', 'Valores de x permitidos pelo contexto ou pela conta.'],
  ['Restrições', 'Denominador ≠ 0; radicando ≥ 0; raiz no denominador &gt; 0.'],
  ['Imagem', 'Valores de y obtidos ao percorrer o domínio.']
], 'Antes de calcular, pergunte quais valores de x quebram a conta.'));

pages.push({ out: BASE + 'aula-2-dominio-e-imagem.html', html: K.deck({
  title: 'Domínio e imagem — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 17 · Domínio e conjunto imagem', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  bind(['d1-f', 'd1-c', 'd1-t'], function(){ var f = +$('d1-f').value, c = +$('d1-c').value, t = +$('d1-t').value;
    if(!isFinite(c) || !isFinite(t)){ $('d1-d').textContent = '—'; $('d1-r').textContent = ''; return; }
    var cs = pt(c), txt = ['x ≠ ' + cs + '  (ℝ − {' + cs + '})', 'x ≥ ' + cs, 'x > ' + cs, 'x ≤ ' + cs][f];
    var ok = [t !== c, t >= c, t > c, t <= c][f];
    $('d1-d').textContent = txt; $('d1-r').textContent = ok ? 'pertence ao domínio ✓' : 'não pertence ao domínio ✗';
    $('d1-h').textContent = ['Denominador x − c não pode ser zero.', 'Radicando x − c precisa ser ≥ 0.', 'Radicando no denominador: precisa ser > 0.', 'Radicando c − x precisa ser ≥ 0, logo x ≤ c.'][f]; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Funções: <span>definição, domínio e imagem</span>',
  lede: 'Cada x com um e apenas um y; domínio, contradomínio e imagem; lei de formação; e como descobrir o domínio olhando para a fórmula.',
  badges: ['y = f(x)', 'D, CD, Im', 'denominador ≠ 0'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Definição', 'Um e apenas um', 'link', 'primary', p('Cada $x ∈ A$ tem exatamente um $y ∈ B$.') + call('Teste', 'Sobrou x sem seta? Não é função. Dois y para um x? Não é função.', 'danger')],
    ['Conjuntos', 'D, CD e Im', 'scale', 'growth', p('$D(f)$ = x · $CD(f)$ = conjunto de chegada · $Im(f) ⊂ CD(f)$') + call('Exemplo', 'f(x) = 2x + 3, x ∈ {−1,0,2,5} → Im = {1,3,7,13}.', 'success')],
    ['Lei de formação', 'Da tabela à fórmula', 'chart', 'decay', li(['Veja quanto y varia quando x sobe 1.', 'Ache o valor de y em x = 0.', 'Teste em outro ponto.'])],
    ['Domínio de uma fração', 'Denominador ≠ 0', 'target', 'success', p('$f(x) = {5|x + 2}$ → $x ≠ −2$') + call('Regra', 'Resolva “denominador = 0” e exclua a solução.', 'success')],
    ['Domínio de uma raiz', 'Radicando ≥ 0', 'up', 'primary', p('$√{x − 7}$ → $x ≥ 7$') + call('Raiz embaixo', '$1 ÷ √{x}$ pede $x > 0$.', 'success')],
    ['Contexto', 'Faz sentido?', 'check', 'growth', li(['Quantidades de objetos: inteiras e não negativas.', 'Limite físico (lotação, estoque) restringe o domínio.', 'A imagem vem do domínio.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Achar que dois x com o mesmo y quebram a função.', 'Confundir contradomínio com imagem.', 'Esquecer a condição do denominador.', 'Usar &gt; no lugar de ≥ na raiz do numerador.', 'Repetir elementos ao escrever a imagem.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Funções <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: definição, lei de formação, domínio, imagem e contexto.',
  final: 'Teste “um e apenas um”, descubra a lei pelas variações e confira o domínio pelas restrições.',
  questions: [
    { badge: 'Estilo ENEM · definição', text: 'Considere $A = \\{1, 2, 3\\}$ e relações de $A$ em $B = \\{4, 5, 6, 7\\}$ dadas pelos pares $(x, y)$ abaixo.', cmd: 'Qual das relações é uma função de A em B?', opts: ['{(1,4), (1,5), (2,6), (3,7)}', '{(1,4), (2,4), (3,5)}', '{(1,4), (2,5)}', '{(2,4), (3,5), (3,6)}', '{(1,4), (2,5), (3,6), (3,7)}'], a: 1,
      sol: '<p>Na segunda, cada elemento de $A$ tem exatamente um par (1→4, 2→4, 3→5); repetir o 4 é permitido. Na primeira, 1 tem duas imagens; na terceira, falta o 3; na quarta, falta o 1 e 3 tem duas imagens; na quinta, 3 tem duas imagens.</p>' },
    { badge: 'Estilo ENEM · lei de formação', text: 'Uma lan house cobra uma taxa fixa mais um valor por hora de uso. Uma pessoa pagou 7 reais por 2 horas e 10 reais por 4 horas.', cmd: 'Mantida essa regra, o valor pago por 10 horas é de:', opts: ['15 reais', '19 reais', '25 reais', '55 reais', '21 reais'], a: 1,
      sol: '<p>De 2 h para 4 h, o valor sobe 3 reais: $1,5$ real por hora. Em $x = 2$: $1,5 · 2 = 3$, e o pago foi 7, então a taxa fixa é 4. Lei: $y = 1,5x + 4$. Para $x = 10$: $15 + 4 = 19$ reais.</p>' },
    { badge: 'Estilo ENEM · domínio', text: 'Seja $f(x) = {√{x − 5}|x − 8}$ uma função real.', cmd: 'O domínio de f é o conjunto dos x reais tais que:', opts: ['x ≥ 5', 'x ≥ 5 e x ≠ 8', 'x > 5 e x ≠ 8', 'x ≠ 8', 'x ≤ 5 ou x = 8'], a: 1,
      sol: '<p>Radicando: $x − 5 ≥ 0 → x ≥ 5$. Denominador: $x − 8 ≠ 0 → x ≠ 8$. As duas condições valem ao mesmo tempo: $x ≥ 5$ e $x ≠ 8$.</p>' },
    { badge: 'Estilo ENEM · imagem', text: 'A função $f(x) = x^{2} − 4x$ tem domínio $A = \\{0, 1, 2, 3\\}$.', cmd: 'O conjunto imagem de f é:', opts: ['{0, −3, −4, −3}', '{−4, −3, 0}', '{−4, 0}', '{0, 1, 2, 3}', '{−3, 0, 4}'], a: 1,
      sol: '<p>$f(0) = 0$ · $f(1) = −3$ · $f(2) = −4$ · $f(3) = −3$. Sem repetir: $\\{−4, −3, 0\\}$.</p>' },
    { badge: 'Estilo ENEM · contexto', text: 'Um cinema de 120 lugares cobra 15 reais por ingresso. A arrecadação de uma sessão é função do número $n$ de ingressos vendidos.', cmd: 'A maior arrecadação possível em uma sessão, em reais, é:', opts: ['1 200', '1 500', '1 800', '2 000', '120'], a: 2,
      sol: '<p>O domínio é $\\{0, 1, ..., 120\\}$. A arrecadação é $V = 15n$, máxima com $n = 120$: $15 · 120 = 1\\ 800$ reais.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Verdadeiro ou falso: <span style="color:var(--growth);">funções</span>',
  subtitle: 'Julgue as afirmações e leia a explicação de cada uma.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Função = um e apenas um y para cada x. O resto é cuidado com domínio e imagem.',
    afirmacoes: [
      ['Em uma função, dois valores diferentes de $x$ podem ter a mesma imagem.', true, 'Verdadeira: por exemplo, em $f(x) = x^2$, $f(2) = f(−2) = 4$. O que não pode é um mesmo $x$ com dois $y$.'],
      ['Em uma função, um mesmo $x$ pode ter duas imagens diferentes.', false, 'Falsa: cada $x$ tem <strong>um e apenas um</strong> $y$.'],
      ['O conjunto imagem é sempre igual ao contradomínio.', false, 'Falsa: a imagem é uma parte (ou todo) do contradomínio. Elementos do contradomínio sem seta ficam fora da imagem.'],
      ['O domínio de $f(x) = 1 ÷ (x − 3)$ é $ℝ − \\{3\\}$.', true, 'Verdadeira: o denominador não pode ser zero, logo $x ≠ 3$.'],
      ['O domínio de $√{x − 3}$ é $x > 3$.', false, 'Falsa: $x = 3$ dá $√{0} = 0$, que existe. O domínio é $x ≥ 3$.'],
      ['Se $f(x) = 2x + 1$, então $f(3) = 7$.', true, 'Verdadeira: $2 · 3 + 1 = 7$.'],
      ['Na arrecadação $V = 12n$ de um cinema, $n = 2,5$ pertence ao domínio.', false, 'Falsa: o número de ingressos é inteiro; 2,5 ingressos não faz sentido no contexto.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Funções: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: calcular f(x), imagem, domínio e uma situação do dia a dia. Digite o número pedido.',
  final: 'Você percorreu a trilha: valor numérico, conjunto imagem, domínio e problema de contexto.',
  problems: [
    { tag: 'Valor numérico', q: 'Se $f(x) = 3x − 2$, quanto vale $f(5)$?', a: 13, ph: 'f(5)', hint: 'Troque x por 5.', sol: '<p>$3 · 5 − 2 = 13$.</p>' },
    { tag: 'Valor numérico', q: 'Se $f(x) = x^{2} + 1$, quanto vale $f(−3)$?', a: 10, ph: 'f(−3)', hint: '(−3)² = 9.', sol: '<p>$(−3)^{2} + 1 = 9 + 1 = 10$.</p>' },
    { tag: 'Imagem', q: 'Para $f(x) = x^{2}$ com domínio $\\{−2, −1, 0, 1, 2\\}$, quantos elementos tem o <strong>conjunto imagem</strong>?', a: 3, ph: 'elementos', hint: 'Calcule e retire repetidos.', sol: '<p>Valores: 4, 1, 0, 1, 4. Imagem $\\{0, 1, 4\\}$, com <strong>3</strong> elementos.</p>' },
    { tag: 'Domínio', q: 'Qual é o menor número <strong>inteiro</strong> do domínio de $f(x) = √{2x − 9}$?', a: 5, ph: 'inteiro', hint: 'Resolva 2x − 9 ≥ 0.', sol: '<p>$2x ≥ 9 → x ≥ 4,5$. O menor inteiro é <strong>5</strong>.</p>' },
    { tag: 'Contexto', q: 'Uma corrida de táxi custa $y = 5 + 3x$ reais ($x$ em km). Se o valor foi 41 reais, quantos <strong>km</strong> foram percorridos?', a: 12, ph: 'km', hint: 'Resolva 5 + 3x = 41.', sol: '<p>$3x = 36 → x = 12$ km.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Funções: Definição, Domínio e Imagem', accent: 'primary', icon: 'curve-up',
  aulas: [['Aula 16', 'Definição de função', 'aula-1-definicao-de-funcao.html'], ['Aula 17', 'Domínio e imagem', 'aula-2-dominio-e-imagem.html']],
  enem: 'Funções no estilo ENEM', cria: 'Verdadeiro ou falso: funções', pratica: 'Funções: trilha de desafios'
}, pages };
