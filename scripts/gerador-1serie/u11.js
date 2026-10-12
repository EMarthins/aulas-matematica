// Unidade 11 — Crescimento, decrescimento e sinal da função afim (aulas 32, 34 e 35)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { graf, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'crescimento-e-sinal-da-funcao-afim', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u11', BRAND = 'Crescimento e Sinal da Função Afim', CAP = 'Aulas 32, 34 e 35';
const pages = [];

const LEI = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lei(a, b){ var s = 'y = '; if(Math.abs(a) < 1e-12) return s + pt(b); s += a === 1 ? '' : a === -1 ? '−' : pt(a); s += 'x'; if(b > 1e-12) s += ' + ' + pt(b); else if(b < -1e-12) s += ' − ' + pt(-b); return s; }
`;

// ===================== AULA 1: crescente e decrescente =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 32 e 34', h1: 'Crescente ou decrescente? <span style="color:var(--primary);">O sinal de a responde</span>',
  sub: 'Caminhar em subida, ver a bateria cair, aquecer um forno: situações com variação constante, cujo gráfico é uma reta que sobe ou desce conforme o sinal do coeficiente angular.',
  badges: [['a > 0: crescente'], ['a < 0: decrescente', 'decay'], ['x₁ < x₂ ⇒ comparar f']], color: 'primary'
}));
a.push(roteiroSlide('Da caminhada à definição.', [
  ['Situações que sobem', 'altitude, temperatura e preço', 'bulb'],
  ['Situações que descem', 'bateria e combustível', 'chart'],
  ['Definição', 'comparar f(x₁) e f(x₂) quando x₁ < x₂', 'scale'],
  ['O sinal de a', 'e as condições sobre parâmetros', 'link'],
  ['Problemas', 'forno, trilha e valores de m', 'target']
]));
a.push(objetivosSlide([
  'Definir <strong>função crescente</strong> e <strong>decrescente</strong> comparando valores.',
  'Ligar o <strong>sinal de $a$</strong> ao crescimento da função afim.',
  'Construir o gráfico de funções afins <strong>crescentes e decrescentes</strong>.',
  'Achar os valores de um <strong>parâmetro</strong> que tornam a função crescente ou decrescente.'
], 'Dica', 'Quando $x$ aumenta, olhe para $y$: <strong>aumenta?</strong> crescente. <strong>Diminui?</strong> decrescente. Em $y = ax + b$, só o <strong>sinal de $a$</strong> decide.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Uma trilha em subida e uma bateria em queda', `
          <div class="grid2">
            ${card('<strong>Trilha de montanha</strong><p style="font-size:.92rem;margin-top:8px;">Parte de 800 m de altitude e <strong>sobe 200 m a cada km</strong>. A altitude é $A = 200x + 800$: <strong>crescente</strong>.</p>', 'primary')}
            ${card('<strong>Bateria do celular</strong><p style="font-size:.92rem;margin-top:8px;">Começa com 100% e <strong>perde 8% a cada hora</strong>. A carga é $C = −8x + 100$: <strong>decrescente</strong>.</p>', 'decay')}
          </div>
          <div style="margin-top:10px;">${mini('Depois de 5 horas ouvindo música, a carga da bateria é de:', ['40%', '50%', '60%', '92%'], 2, '$C(5) = −8 · 5 + 100 = 60$. A bateria cai a uma taxa constante de 8% por hora.')}</div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'Crescente e decrescente', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$f$ é <strong>crescente</strong> em um intervalo quando, para $x_1 < x_2$ nesse intervalo, vale $f(x_1) < f(x_2)$ (o gráfico <strong>sobe</strong>).</li>
                <li>$f$ é <strong>decrescente</strong> quando $x_1 < x_2$ implica $f(x_1) > f(x_2)$ (o gráfico <strong>desce</strong>).</li>
                <li>Na função afim $f(x) = ax + b$: <strong>$a > 0$</strong> ⇒ crescente; <strong>$a < 0$</strong> ⇒ decrescente.</li>
                <li>A função <strong>constante</strong> ($a = 0$) não é crescente nem decrescente.</li>
                <li>Como o domínio é $ℝ$, a função afim cresce (ou decresce) em <strong>todo</strong> o domínio.</li>
              </ul>
            </div>
            ${W.box('Comparando dois valores', W.row(W.nm('c1-a', 'a', 2, 'any'), W.nm('c1-b', 'b', 1, 'any')) + W.row(W.nm('c1-x1', 'x₁', 1, 'any'), W.nm('c1-x2', 'x₂', 3, 'any')) + W.txt('c1-f', 'f(x₁) e f(x₂): ') + W.txt('c1-v', 'Conclusão: ') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Esboço de uma função decrescente', 'Construa o gráfico de $g(x) = −x + 4$ e diga se é crescente ou decrescente.', [
  ['Tabela com dois valores', '$x = 1 → y = 3$ · $x = 4 → y = 0$.'],
  ['Marque os pontos e trace a reta', 'Pontos $(1, 3)$ e $(4, 0)$; prolongue nos dois sentidos.'],
  ['Classifique', '$a = −1 < 0$: a reta <strong>desce</strong> da esquerda para a direita.']
], 'Função <strong>decrescente</strong>; corta o eixo $y$ em $4$ e o eixo $x$ em $4$.'));
a.push(sl('Figura', 'A reta y = −x + 4', `
          <div class="grid2">
            ${graf({ xmin: -2, xmax: 7, ymin: -3, ymax: 6, px: 1, py: 1, series: [{ pts: [[-1, 5], [6, -2]] }], marcas: [[1, 3, '(1, 3)', 10, -6], [4, 0, '(4, 0)', 8, -10]], max: '380px' })}
            <div>
              ${callout('Lendo o desenho', 'Da esquerda para a direita a reta <strong>desce</strong>: quanto maior o $x$, menor o $y$.', 'success')}
              ${callout('Compare', 'Em $y = x + 4$ (mesmo $b$) a reta sobe. Só o <strong>sinal de a</strong> muda o sentido.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(sl('Explore · parâmetros', 'Para que valores de m a função cresce?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Se o coeficiente de $x$ depende de um parâmetro $m$, impomos a condição sobre ele.</li>
                <li><strong>Crescente</strong>: coeficiente $> 0$. <strong>Decrescente</strong>: coeficiente $< 0$.</li>
                <li>Exemplo: $y = (2m − 4)x + 5$ é crescente se $2m − 4 > 0$ ⇒ $m > 2$.</li>
                <li>Ao dividir por número <strong>negativo</strong>, inverta o sentido da desigualdade.</li>
              </ul>
            </div>
            ${W.box('Coeficiente k·m − c', W.row(W.nm('c2-k', 'k', 2, 'any'), W.nm('c2-c', 'c', 4, 'any')) + W.txt('c2-e', 'Função: ') + W.txt('c2-u', 'Crescente se: ') + W.txt('c2-d', 'Decrescente se: ') + W.hint('c2-h'))}
          </div>`, { cls: '' }));

a.push(pratique('O forno', 'Um forno é aquecido de 20 °C a 220 °C em 10 minutos, com variação constante. A temperatura após 4 minutos é de:',
  ['80 °C', '100 °C', '120 °C', '140 °C', '160 °C'], 1,
  'A taxa é $(220 − 20) ÷ 10 = 20$ °C por minuto. $T(4) = 20 + 20 · 4 = 100$ °C. <strong>Alternativa B.</strong> A função é crescente ($a = 20 > 0$).'));
a.push(pratique('Quem decresce?', 'Entre as funções abaixo, a <strong>decrescente</strong> é:',
  ['y = x − 2', 'y = 2 + 3x', 'y = 5 − 2x', 'y = 7x', 'y = x ÷ 2'], 2,
  'Reescreva na forma $ax + b$: $5 − 2x = −2x + 5$, com $a = −2 < 0$: decrescente. As demais têm $a > 0$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Condição sobre o parâmetro', 'A função real $f(x) = (5 − 2k)x + 1$ é crescente quando:',
  ['k > 5/2', 'k < 5/2', 'k < 5', 'k > 5', 'k = 5/2'], 1,
  'Crescente: $5 − 2k > 0$ ⇒ $−2k > −5$. Dividindo por $−2$ o sentido inverte: $k < 5/2$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde crescimento e decrescimento enganam', [
  ['Olhar para b', 'O sinal de $b$ não diz se a função sobe ou desce; só o sinal de $a$.'],
  ['Esquecer de reordenar', 'Em $y = 5 − 2x$, o coeficiente de $x$ é $−2$ (e não $5$).'],
  ['Dividir por negativo', 'Ao dividir os dois lados de uma desigualdade por número negativo, <strong>inverta</strong> o sinal.'],
  ['Constante', '$y = 4$ não é crescente nem decrescente.']
]));
a.push(quiz([
  { q: 'Em $f(x) = ax + b$ com $a < 0$, a função é:', o: ['crescente', 'decrescente', 'constante', 'nula'], a: 1 },
  { q: 'Se $f(x) = 3x − 1$ e $x_1 < x_2$, então:', o: ['f(x₁) < f(x₂)', 'f(x₁) > f(x₂)', 'f(x₁) = f(x₂)', 'não dá para saber'], a: 0 },
  { q: '$y = (m − 3)x + 2$ é crescente se:', o: ['m > 3', 'm < 3', 'm > −3', 'm = 3'], a: 0 },
  { q: 'Qual função é decrescente?', o: ['y = 4x', 'y = −x + 10', 'y = 2', 'y = x + 1'], a: 1 }
]));
a.push(fechamento([
  ['Crescente', 'x₁ < x₂ ⇒ f(x₁) < f(x₂); na afim, a > 0.'],
  ['Decrescente', 'x₁ < x₂ ⇒ f(x₁) > f(x₂); na afim, a < 0.'],
  ['Parâmetros', 'Imponha o sinal do coeficiente e resolva a desigualdade.']
], 'O sinal de a manda no sentido do gráfico.'));

pages.push({ out: BASE + 'aula-1-crescente-e-decrescente.html', html: K.deck({
  title: 'Função afim crescente e decrescente — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 32 e 34 · Crescente e decrescente', slides: a,
  extra: WJS + BIND + LEI + String.raw`
  bind(['c1-a', 'c1-b', 'c1-x1', 'c1-x2'], function(){ var a = +$('c1-a').value, b = +$('c1-b').value, x1 = +$('c1-x1').value, x2 = +$('c1-x2').value;
    if(![a, b, x1, x2].every(isFinite) || x1 === x2){ $('c1-f').textContent = '—'; $('c1-v').textContent = ''; $('c1-h').textContent = 'Use x₁ ≠ x₂.'; return; }
    if(x1 > x2){ var t = x1; x1 = x2; x2 = t; }
    var f1 = a * x1 + b, f2 = a * x2 + b; $('c1-f').textContent = 'f(' + pt(x1) + ') = ' + pt(f1) + ' e f(' + pt(x2) + ') = ' + pt(f2);
    $('c1-v').textContent = f1 < f2 ? 'x₁ < x₂ e f(x₁) < f(x₂): crescente' : f1 > f2 ? 'x₁ < x₂ e f(x₁) > f(x₂): decrescente' : 'f(x₁) = f(x₂): constante';
    $('c1-h').textContent = lei(a, b) + ' — o sinal de a (' + pt(a) + ') decide.'; });
  bind(['c2-k', 'c2-c'], function(){ var k = +$('c2-k').value, c = +$('c2-c').value; if(!isFinite(k) || !isFinite(c)){ $('c2-e').textContent = '—'; return; }
    $('c2-e').textContent = 'y = (' + (k === 1 ? '' : k === -1 ? '−' : pt(k)) + 'm ' + (c >= 0 ? '− ' + pt(c) : '+ ' + pt(-c)) + ')x + 5';
    if(k === 0){ $('c2-u').textContent = -c > 0 ? 'qualquer m' : 'nenhum m'; $('c2-d').textContent = -c < 0 ? 'qualquer m' : 'nenhum m'; $('c2-h').textContent = 'Sem m no coeficiente, a condição não depende de m.'; return; }
    var r = c / k, rs = pt(r, 3); $('c2-u').textContent = k > 0 ? 'm > ' + rs : 'm < ' + rs; $('c2-d').textContent = k > 0 ? 'm < ' + rs : 'm > ' + rs;
    $('c2-h').textContent = 'Coeficiente ' + (k > 0 ? '> 0 ⇒ m > ' : '> 0 ⇒ (divisão por negativo inverte) m < ') + rs + (k > 0 ? '.' : '.'); });`
}) });

// ===================== AULA 2: sinal da função =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 35', h1: 'Estudo do sinal: <span style="color:var(--growth);">quando f(x) é positiva, nula ou negativa</span>',
  sub: 'Quando o lucro passa a ser positivo? A partir de que horas a temperatura fica abaixo de zero? É o estudo do sinal: saber onde o gráfico está acima, sobre ou abaixo do eixo x.',
  badges: [['f(x) > 0: acima'], ['f(x) = 0: sobre', 'growth'], ['f(x) < 0: abaixo', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Três regiões separadas pelo zero.', [
  ['Sinal da função', 'positiva, nula ou negativa', 'bulb'],
  ['A raiz', 'o ponto de mudança de sinal', 'target'],
  ['Efeito de a', 'a > 0 e a < 0', 'scale'],
  ['Em contexto', 'lucro e temperatura', 'chart'],
  ['Problemas', 'desigualdades do 1º grau', 'link']
]));
b.push(objetivosSlide([
  'Dizer onde $f(x) > 0$, $f(x) = 0$ e $f(x) < 0$ para uma função afim.',
  'Usar a <strong>raiz</strong> $x = −b ÷ a$ e o <strong>sinal de $a$</strong> para montar o estudo do sinal.',
  'Resolver <strong>desigualdades</strong> do 1º grau lembrando de inverter o sinal.',
  'Interpretar o sinal em <strong>lucro, temperatura</strong> e outros contextos.'
], 'Dica', 'Passo a passo: <strong>1)</strong> ache a raiz; <strong>2)</strong> veja o sinal de $a$; <strong>3)</strong> com $a > 0$, positiva à direita da raiz; com $a < 0$, positiva à esquerda.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Subir ou descer de nível?', `
          ${lede('Estudar o sinal de uma função é encontrar os valores de $x$ para os quais ela é <strong>positiva</strong> (gráfico acima do eixo $x$), <strong>negativa</strong> (abaixo) ou <strong>nula</strong> (sobre o eixo, na raiz).')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Se a reta é crescente e a raiz é $x = 2$, então $f(x) > 0$ para:', ['x > 2', 'x < 2', 'x > 0', 'todos os x'], 0, 'Crescente: a reta sobe da esquerda para a direita. À direita da raiz o gráfico está acima do eixo: $x > 2$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A raiz <strong>separa</strong> os dois sinais. O sinal de $a$ diz de que lado fica o positivo.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · estudo do sinal', 'A raiz e o sinal de a', `
          <div class="grid2">
            <div>
              ${tbl(['Caso', 'f(x) > 0', 'f(x) = 0', 'f(x) < 0'], [['a > 0', 'x > −b/a', 'x = −b/a', 'x < −b/a'], ['a < 0', 'x < −b/a', 'x = −b/a', 'x > −b/a']])}
              <ul class="plain" style="font-size:.93rem;line-height:1.7;margin-top:10px;">
                <li>Raiz: $f(x) = 0$ ⇒ $x = −b ÷ a$.</li>
                <li>$a > 0$: a reta sobe, é negativa antes da raiz e positiva depois.</li>
                <li>$a < 0$: a reta desce, é positiva antes da raiz e negativa depois.</li>
              </ul>
            </div>
            ${W.box('Estudo do sinal', W.row(W.nm('q1-a', 'a', 3, 'any'), W.nm('q1-b', 'b', -6, 'any')) + W.nm('q1-x', 'Teste um x', 5, 'any') + W.svg('q1-s', '0 0 360 220', '380px') + W.txt('q1-r', 'Raiz: ') + W.txt('q1-p', 'f(x) > 0 se: ') + W.txt('q1-n', 'f(x) < 0 se: ') + W.txt('q1-t', 'No x testado: ') + W.hint('q1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Sinal de f(x) = 3x − 6', 'Para quais valores de $x$ vale (a) $f(x) > 0$, (b) $f(x) = 0$ e (c) $f(x) < 0$?', [
  ['Ache a raiz', '$3x − 6 = 0$ ⇒ $x = 2$.'],
  ['Sinal de a', '$a = 3 > 0$: crescente. Positiva à direita da raiz.'],
  ['Conclua', '$f(x) > 0$ se $x > 2$ · $f(x) = 0$ se $x = 2$ · $f(x) < 0$ se $x < 2$.']
], 'Teste: $f(5) = 9 > 0$ ✓ e $f(0) = −6 < 0$ ✓.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Quando o lucro fica positivo?', 'Uma barraca tem lucro $L(x) = 5x − 300$ reais ao vender $x$ unidades. A partir de quantas unidades o lucro é positivo?', [
  ['Condição', '$L(x) > 0$ ⇒ $5x − 300 > 0$.'],
  ['Resolva a desigualdade', '$5x > 300$ ⇒ $x > 60$ (dividir por 5, positivo, não inverte).'],
  ['Leia no contexto', 'Em $x = 60$ o lucro é zero; é positivo a partir de 61 unidades.']
], 'O lucro é positivo a partir da <strong>61ª unidade</strong>.', 'growth'));

b.push(pratique('Sinal com a negativo', 'Para $f(x) = −4x + 12$, o valor de $x$ para o qual $f(x) > 0$ é:',
  ['x > 3', 'x < 3', 'x > −3', 'x < −3', 'x > 12'], 1,
  'Raiz: $x = 3$. $a = −4 < 0$: a reta desce, positiva <strong>antes</strong> da raiz: $x < 3$. Pela desigualdade: $−4x > −12$ ⇒ (inverte) $x < 3$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Temperatura que cai', 'A temperatura de um local ao longo do dia é $t(h) = −2h + 20$ (°C, $h$ em horas). A temperatura fica negativa depois de:',
  ['8 h', '9 h', '10 h', '20 h', '40 h'], 2,
  '$t(h) < 0$ ⇒ $−2h + 20 < 0$ ⇒ $−2h < −20$ ⇒ (inverte) $h > 10$. Negativa depois de $10$ h. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Lucro por hora de funcionamento', 'O lucro diário de um site depende do tempo de funcionamento $s$ (em horas) segundo $L(s) = 40s − 120$ (reais). O lucro é positivo quando:',
  ['s < 3', 's = 3', 's > 3', 's > 120', 's < 120'], 2,
  '$40s − 120 > 0$ ⇒ $40s > 120$ ⇒ $s > 3$. Em $s = 3$ o lucro é zero (é a raiz); só passa de 3 horas ele é positivo. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde o sinal escorrega', [
  ['Não inverter a desigualdade', 'Ao multiplicar ou dividir por número <strong>negativo</strong>, o sentido do $>$ ou $<$ se inverte.'],
  ['Incluir a raiz', 'Em “$f(x) > 0$” a raiz <strong>não</strong> entra (ali $f$ é zero).'],
  ['Trocar os lados', 'Com $a < 0$ a função é positiva à <strong>esquerda</strong> da raiz.'],
  ['Esquecer o teste', 'Teste um valor de cada lado da raiz para conferir o sinal.']
]));
b.push(quiz([
  { q: 'Em $f(x) = 2x − 8$, $f(x) < 0$ quando:', o: ['x < 4', 'x > 4', 'x < −4', 'x > −4'], a: 0 },
  { q: 'Em $f(x) = −x + 5$, $f(x) > 0$ quando:', o: ['x > 5', 'x < 5', 'x > −5', 'x < −5'], a: 1 },
  { q: 'A raiz de $f(x) = 3x − 6$ é:', o: ['−2', '2', '6', '−6'], a: 1 },
  { q: 'Para $a < 0$, o gráfico fica acima do eixo $x$:', o: ['à esquerda da raiz', 'à direita da raiz', 'em todo o domínio', 'em nenhum ponto'], a: 0 }
]));
b.push(fechamento([
  ['Raiz', 'x = −b ÷ a separa os dois sinais.'],
  ['Sinal de a', 'a > 0: positiva à direita; a < 0: positiva à esquerda.'],
  ['Desigualdade', 'Multiplicou ou dividiu por negativo? Inverta o sinal.']
], 'Raiz, sinal de a e um teste: três passos para estudar o sinal.'));

pages.push({ out: BASE + 'aula-2-estudo-do-sinal.html', html: K.deck({
  title: 'Estudo do sinal da função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 35 · Estudo do sinal', slides: b,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['q1-a', 'q1-b', 'q1-x'], function(){ var a = +$('q1-a').value, b = +$('q1-b').value, x = +$('q1-x').value;
    if(!isFinite(a) || !isFinite(b) || a === 0){ $('q1-r').textContent = a === 0 ? 'a = 0: constante' : '—'; $('q1-p').textContent = ''; $('q1-n').textContent = ''; $('q1-t').textContent = ''; return; }
    var r = -b / a, xmin = Math.min(-6, r - 3), xmax = Math.max(6, r + 3), P = plano2($('q1-s'), xmin, xmax, -8, 8, 360, 220, passo(xmax - xmin), 2);
    function passo(v){ return v <= 12 ? 1 : v <= 24 ? 2 : 5; }
    linha($('q1-s'), P, [[xmin, a * xmin + b], [xmax, a * xmax + b]]); bola($('q1-s'), P, r, 0, false, 'var(--growth)');
    var rs = pt(r, 3); $('q1-r').textContent = 'x = ' + rs + '  (' + lei(a, b) + ')';
    $('q1-p').textContent = a > 0 ? 'x > ' + rs : 'x < ' + rs; $('q1-n').textContent = a > 0 ? 'x < ' + rs : 'x > ' + rs;
    if(isFinite(x)){ var f = a * x + b; $('q1-t').textContent = 'f(' + pt(x) + ') = ' + pt(f) + (f > 0 ? ' (positiva)' : f < 0 ? ' (negativa)' : ' (nula)'); }
    $('q1-h').textContent = a > 0 ? 'a > 0: reta crescente — negativa à esquerda da raiz e positiva à direita.' : 'a < 0: reta decrescente — positiva à esquerda da raiz e negativa à direita.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Crescimento e sinal da função afim: <span>sobe, desce e muda de sinal</span>',
  lede: 'O sinal de a decide se a função cresce ou decresce; a raiz decide onde ela muda de sinal; e as duas informações resolvem problemas de lucro, temperatura e parâmetros.',
  badges: ['a > 0: cresce', 'a < 0: decresce', 'raiz x = −b/a'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Crescente', 'a > 0', 'up', 'primary', p('$x_1 < x_2$ ⇒ $f(x_1) < f(x_2)$') + call('Exemplo', 'Trilha: A = 200x + 800.', 'success')],
    ['Decrescente', 'a < 0', 'chart', 'decay', p('$x_1 < x_2$ ⇒ $f(x_1) > f(x_2)$') + call('Exemplo', 'Bateria: C = −8x + 100.', 'success')],
    ['Parâmetro', 'Condição sobre m', 'link', 'growth', p('$(2m − 4)x + 5$ crescente ⇒ $2m − 4 > 0$ ⇒ $m > 2$') + call('Cuidado', 'Dividiu por negativo? Inverta o sinal.', 'danger')],
    ['Raiz', 'f(x) = 0', 'target', 'success', p('$x = −b ÷ a$') + call('Exemplo', '3x − 6: raiz 2.', 'success')],
    ['Estudo do sinal', 'Dois lados da raiz', 'scale', 'primary', li(['a > 0: negativa antes, positiva depois.', 'a < 0: positiva antes, negativa depois.', 'Raiz: nula.'])],
    ['Em contexto', 'Lucro e temperatura', 'check', 'growth', li(['Lucro > 0: desigualdade.', 'Raiz = ponto de equilíbrio.', 'Interprete com a unidade.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Julgar o crescimento pelo sinal de b.', 'Esquecer de inverter a desigualdade com divisão por negativo.', 'Incluir a raiz em “maior que”.', 'Trocar os lados quando a é negativo.', 'Não reescrever 5 − 2x como −2x + 5.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const gq5 = graf({ xmin: -2, xmax: 6, ymin: -9, ymax: 4, px: 1, py: 1, series: [{ pts: [[-1, -8], [4, 2]] }], marcas: [[0, -6, '(0, −6)', 10, -6], [3, 0, '(3, 0)', 6, -10]], max: '300px' });
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Crescimento e sinal da função afim <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: trilha, bateria, parâmetro, desigualdade e sinal pelo gráfico.',
  final: 'O sinal de a dá o sentido; a raiz dá o ponto de mudança; desigualdade por negativo inverte.',
  questions: [
    { badge: 'Estilo ENEM · trilha', text: 'A altitude de uma trilha começa em 600 m e sobe 150 m a cada quilômetro percorrido.', cmd: 'A altitude atinge 1 500 m após quantos quilômetros?', opts: ['4', '5', '6', '7', '10'], a: 2,
      sol: '<p>$A = 150x + 600$. $150x + 600 = 1\\ 500$ ⇒ $150x = 900$ ⇒ $x = 6$ km.</p>' },
    { badge: 'Estilo ENEM · bateria', text: 'A carga de uma bateria é $C = 100 − 8x$ (porcentagem, $x$ em horas).', cmd: 'Em quantas horas a carga chega a 20%?', opts: ['10', '12,5', '8', '9', '15'], a: 0,
      sol: '<p>$100 − 8x = 20$ ⇒ $8x = 80$ ⇒ $x = 10$ horas.</p>' },
    { badge: 'Estilo ENEM · parâmetro', text: 'A função $f(x) = (2 − 3m)x + 4$ é <strong>decrescente</strong>.', cmd: 'Isso ocorre quando:', opts: ['m < 2/3', 'm > 2/3', 'm > 3/2', 'm < 3/2', 'm = 2/3'], a: 1,
      sol: '<p>Decrescente: $2 − 3m < 0$ ⇒ $−3m < −2$ ⇒ (inverte) $m > 2/3$.</p>' },
    { badge: 'Estilo ENEM · desigualdade', text: 'Considere $f(x) = −3x + 9$.', cmd: '$f(x) < 0$ quando:', opts: ['x < 3', 'x > 3', 'x < −3', 'x > −3', 'x > 9'], a: 1,
      sol: '<p>$−3x + 9 < 0$ ⇒ $−3x < −9$ ⇒ (inverte) $x > 3$. (Raiz $x = 3$; $a < 0$: negativa à direita.)</p>' },
    { badge: 'Estilo ENEM · sinal no gráfico', text: 'A reta da figura passa por $(0, −6)$ e $(3, 0)$.' + gq5, cmd: 'A função é positiva para:', opts: ['x > 0', 'x > 3', 'x < 3', 'x > −6', 'x < −6'], a: 1,
      sol: '<p>A reta sobe e cruza o eixo $x$ em $x = 3$. À direita da raiz está acima do eixo: $f(x) > 0$ para $x > 3$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'primary',
  h1: 'Ordene a <span style="color:var(--primary);">solução</span>',
  subtitle: 'Passos embaralhados de problemas de parâmetro e de sinal: toque na ordem certa.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Todo problema de crescimento e sinal vira uma desigualdade do 1º grau — e dividir por negativo inverte o sinal.',
    problemas: [
      { titulo: 'Valores de m', enunciado: 'Para que valores de $m$ a função $y = (2m − 4)x + 5$ é crescente?', passos: ['Função afim crescente exige coeficiente angular positivo.', 'O coeficiente angular é $2m − 4$.', 'Monte a desigualdade: $2m − 4 > 0$.', 'Resolva: $2m > 4$, logo $m > 2$.'] },
      { titulo: 'Lucro positivo', enunciado: 'Quando $L(x) = 5x − 300$ é positivo?', passos: ['Lucro positivo significa $L(x) > 0$.', 'Escreva: $5x − 300 > 0$.', 'Some 300 aos dois lados: $5x > 300$.', 'Divida por 5 (positivo, o sentido não muda): $x > 60$.'] },
      { titulo: 'Sinal com a negativo', enunciado: 'Para que $x$ vale $f(x) = −4x + 12 > 0$?', passos: ['Queremos $−4x + 12 > 0$.', 'Subtraia 12 dos dois lados: $−4x > −12$.', 'Divida por $−4$ e <strong>inverta</strong> o sinal: $x < 3$.', 'Confira: $x = 0$ dá $f(0) = 12 > 0$ ✓.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Crescimento e sinal da função afim: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valores, parâmetro e sinal. Digite o número pedido.',
  final: 'Você percorreu a trilha: altitude, bateria, parâmetro, lucro e temperatura.',
  problems: [
    { tag: 'Trilha', q: 'A altitude é $A = 200x + 800$ ($x$ em km). Qual a altitude (em metros) após 6 km?', a: 2000, ph: 'm', hint: 'Substitua x = 6.', sol: '<p>$200 · 6 + 800 = 2\\ 000$ m.</p>' },
    { tag: 'Bateria', q: 'A carga é $C = 100 − 8x$ (%, $x$ em horas). Qual a carga depois de 5 horas?', a: 60, ph: '%', hint: '100 − 8 · 5.', sol: '<p>$100 − 40 = 60$%.</p>' },
    { tag: 'Parâmetro', q: 'Qual é o <strong>menor inteiro</strong> $m$ para o qual $y = (2m − 4)x + 5$ é crescente?', a: 3, ph: 'm', hint: 'Resolva 2m − 4 > 0.', sol: '<p>$m > 2$: o menor inteiro é $3$.</p>' },
    { tag: 'Lucro', q: 'O lucro é $L(x) = 5x − 300$. Qual o <strong>menor</strong> número inteiro de unidades para o lucro ser positivo?', a: 61, ph: 'unidades', hint: 'Resolva 5x − 300 > 0.', sol: '<p>$x > 60$: o menor inteiro é $61$.</p>' },
    { tag: 'Temperatura', q: 'A temperatura é $t(h) = −2h + 20$. A partir de qual hora <strong>inteira</strong> ela é negativa?', a: 11, ph: 'h', hint: 'Resolva −2h + 20 < 0.', sol: '<p>$h > 10$: a primeira hora inteira é $11$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Crescimento e Sinal da Função Afim', accent: 'growth', icon: 'stairs',
  aulas: [['Aulas 32 e 34', 'Crescente e decrescente', 'aula-1-crescente-e-decrescente.html'], ['Aula 35', 'Estudo do sinal', 'aula-2-estudo-do-sinal.html']],
  enem: 'Crescimento e sinal da função afim no estilo ENEM', cria: 'Ordene a solução', pratica: 'Crescimento e sinal da função afim: trilha de desafios'
}, pages };
