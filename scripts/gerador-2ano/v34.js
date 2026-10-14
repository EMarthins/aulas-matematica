// Unidade v34 — Retomada: comportamento de funções e sistemas lineares (aulas R11 e R12 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { W, WJS, BIND } = K;
const R = require('./rev.js');
const TRI = 2, DIR = 'retomada-funcoes-e-sistemas', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v34', BRAND = 'Retomada: funções e sistemas';
const UT = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== R11: comportamento de funções =====================
const a = R.build({
  eb: 'Matemática · 2ª série · Retomada R11', h1: 'Retomada: <span style="color:var(--primary);">como uma função se comporta</span>',
  sub: 'Uma função relaciona duas grandezas. Olhando o gráfico ou a tabela, dizemos se ela cresce ou decresce, onde vale zero e em que intervalo varia mais depressa: é a taxa média de variação.',
  badges: [['crescente · decrescente'], ['zeros', 'growth'], ['taxa média Δy ÷ Δx', 'decay']],
  roteiro: ['Do gráfico à taxa de variação.', [['Ler o gráfico', 'crescente, decrescente ou constante', 'bulb'], ['Zeros', 'onde cruza o eixo x', 'target'], ['Pontos da tabela', 'valores de x e de y', 'chart'], ['Taxa média', 'Δy ÷ Δx em um intervalo', 'link'], ['Comparar intervalos', 'maior variação em módulo', 'scale']]],
  objetivos: ['Classificar uma função como <strong>crescente, decrescente</strong> ou constante em um intervalo.', 'Identificar os <strong>zeros</strong> de uma função a partir do gráfico ou da lei.', 'Calcular a <strong>taxa média de variação</strong> $Δy ÷ Δx$ e compará-la entre intervalos.'],
  dica: 'A <strong>taxa média</strong> entre dois pontos é a <strong>inclinação do segmento</strong> que os liga: $ {y_{2} − y_{1}|x_{2} − x_{1}}$. Em módulo, a maior é a mais “íngreme”.',
  abertura: { titulo: 'O café esfriando', texto: 'A temperatura de um café esfria ao longo do tempo. A tabela mostra os pontos medidos. Como saber em qual intervalo ele esfriou <strong>mais rápido</strong>? Comparando as <strong>taxas médias de variação</strong>.',
    extra: W.box('Taxa média entre dois instantes', W.row(W.sel('t11-i', 'De', ['0 min', '2 min', '4 min', '6 min', '8 min'], 0), W.sel('t11-j', 'Até', ['0 min', '2 min', '4 min', '6 min', '8 min'], 1)) + W.svg('t11-s', '0 0 360 220', '340px') + W.txt('t11-r', 'Taxa média: ') + W.hint('t11-h')),
    mini: ['A temperatura vai de $80$ °C a $62$ °C em $2$ minutos. A taxa média é:', ['$−9$ °C/min', '$−18$ °C/min', '$9$ °C/min', '$−2$ °C/min'], 0, '$Δy ÷ Δx = (62 − 80) ÷ 2 = −9$ °C/min (negativa: a função decresce).'] },
  teoria: [
    { eb: 'Teoria · comportamento', titulo: 'Crescimento, zeros e taxa média', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Crescente</strong> em um intervalo: quando $x$ aumenta, $y$ aumenta. <strong>Decrescente</strong>: $y$ diminui. <strong>Constante</strong>: $y$ não muda.</li>
                <li><strong>Zero</strong> da função: valor de $x$ com $f(x) = 0$ (o gráfico cruza o eixo $x$).</li>
                <li><strong>Taxa média de variação</strong> entre $x_{1}$ e $x_{2}$: $ {f(x_{2}) − f(x_{1})|x_{2} − x_{1}}$.</li>
                <li>Taxa <strong>positiva</strong>: função cresce no intervalo; <strong>negativa</strong>: decresce. Para comparar o “ritmo”, use o <strong>módulo</strong>.</li>
              </ul>
            </div>
            <div><p class="hint">Na tabela do café, o ritmo de resfriamento <strong>diminui</strong> com o tempo: as taxas em módulo são $9$, $6$, $3$ e $1$ °C/min.</p></div>
          </div>`.replace('$ {f(x_{2})', '$ {f(x_{2})') }
  ],
  exemplos: [
    ['Taxas em cada intervalo', 'Um líquido em resfriamento tem $(0; 80)$, $(2; 62)$, $(4; 50)$, $(6; 44)$ e $(8; 42)$ (minutos; °C). Em qual intervalo de $2$ min a taxa média, em módulo, é maior?', [['0 a 2', '$|62 − 80| ÷ 2 = 9$.'], ['2 a 4', '$|50 − 62| ÷ 2 = 6$.'], ['4 a 6', '$|44 − 50| ÷ 2 = 3$.'], ['6 a 8', '$|42 − 44| ÷ 2 = 1$.']], 'A maior taxa é entre $0$ e $2$ min: $9$ °C/min.'],
    ['Taxa em um intervalo longo', 'Com os mesmos dados, qual a taxa média entre $0$ e $8$ minutos?', [['Variação', '$42 − 80 = −38$ °C em $8$ min.'], ['Taxa', '$−38 ÷ 8 = −4,75$ °C/min.']], 'A taxa média é $−4,75$ °C/min (decresce).'],
    ['Zero e comportamento', 'Para $f(x) = 2x − 6$, qual o zero e como a função se comporta?', [['Zero', '$2x − 6 = 0$ ⇒ $x = 3$.'], ['Comportamento', '$a = 2 > 0$: crescente em todo o domínio.']], 'Zero em $x = 3$; função crescente.'],
    ['Crescente ou decrescente pela tabela', 'Uma função tem $f(0) = 5$, $f(1) = 3$, $f(2) = 1$, $f(3) = −1$. Que tipo de função parece ser?', [['Variações', 'A cada $+1$ em $x$, $y$ diminui $2$ (taxa constante $−2$).']], 'Decrescente e afim: $f(x) = −2x + 5$ (zero em $x = 2,5$).']
  ],
  pratique: [
    ['Intervalo de maior variação', 'Temperatura (°C) nos minutos $0, 4, 8, 12, 16$: $24, 23, 21, 15, 0$. Entre quais minutos a variação, em módulo, é maior?', ['0 a 4', '4 a 8', '8 a 12', '12 a 16'], 3, 'Variações em módulo: $1$, $2$, $6$ e $15$ °C em $4$ min cada: a maior é de $12$ a $16$. <strong>Alternativa D.</strong>'],
    ['Taxa média', 'Entre $x = 1$ e $x = 4$, uma função passa de $5$ a $14$. A taxa média é:', ['$2$', '$3$', '$9$', '$19$'], 1, '$(14 − 5) ÷ (4 − 1) = 3$. <strong>Alternativa B.</strong>'],
    ['Zero', 'O zero de $f(x) = 3x + 9$ é:', ['$3$', '$−3$', '$9$', '$−9$'], 1, '$3x + 9 = 0$ ⇒ $x = −3$. <strong>Alternativa B.</strong>']
  ],
  enem: ['Nível do reservatório', 'O nível (m) de um reservatório nos dias $0, 2, 4, 6$ foi $10, 8, 5, 1$. A taxa média de variação entre os dias $2$ e $6$ foi:', ['$−1$ m/dia', '$−1,75$ m/dia', '$−2$ m/dia', '$−2,25$ m/dia', '$−9$ m/dia'], 2, '$(1 − 8) ÷ (6 − 2) = −7 ÷ 4 = −1,75$. <strong>Alternativa B.</strong>'],
  cuidados: [['Ignorar o sinal', 'Taxa negativa quer dizer que a função decresce.'], ['Comparar intervalos de tamanhos diferentes', 'Use a taxa por unidade (Δy ÷ Δx), não só a variação Δy.'], ['Confundir zero com valor inicial', 'Zero é onde $f(x) = 0$; valor inicial é $f(0)$.'], ['Módulo na comparação', 'Para ver qual variou <strong>mais rápido</strong> use o módulo da taxa.']],
  quiz: [{ q: 'Se a taxa média é negativa em um intervalo, a função:', o: ['cresce', 'decresce', 'é constante', 'não existe'], a: 1 }, { q: 'O zero de $f(x) = x − 7$ é:', o: ['$0$', '$−7$', '$7$', '$1$'], a: 2 }, { q: 'Taxa média entre $(2, 3)$ e $(6, 11)$:', o: ['$1$', '$2$', '$4$', '$8$'], a: 1 }, { q: 'A taxa média é a inclinação:', o: ['da curva em um ponto', 'do segmento entre dois pontos', 'do eixo x', 'da parábola'], a: 1 }],
  fecha: { cards: [['Comportamento', 'Crescente, decrescente ou constante em cada intervalo.'], ['Zero', '$f(x) = 0$: onde o gráfico cruza o eixo $x$.'], ['Taxa média', '$ {Δy|Δx}$, em módulo para comparar ritmos.']], msg: 'Ler gráficos e tabelas é a base da análise de funções. Próxima retomada: sistemas lineares.' }
});

// ===================== R12: sistemas lineares =====================
const b = R.build({
  eb: 'Matemática · 2ª série · Retomada R12', h1: 'Retomada: <span style="color:var(--primary);">sistemas lineares e matrizes</span>',
  sub: 'Dois preços desconhecidos, duas compras diferentes: um sistema de equações descobre cada preço. A mesma informação pode ser escrita em forma de matriz e resolvida pelo método da adição.',
  badges: [['sistema 2 × 2'], ['método da adição', 'growth'], ['matriz do sistema', 'decay']],
  roteiro: ['Do problema à solução.', [['Equacionar', 'uma equação para cada informação', 'bulb'], ['Sistema', 'mesmos x e y nas duas equações', 'target'], ['Matriz', 'coeficientes e termos independentes', 'chart'], ['Adição', 'eliminar uma incógnita', 'link'], ['Conferir', 'substituir nas duas equações', 'scale']]],
  objetivos: ['Montar um <strong>sistema linear</strong> a partir de um problema.', 'Escrever o sistema na <strong>forma matricial</strong> $A · X = B$.', 'Resolver pelo <strong>método da adição</strong> e <strong>conferir</strong> a solução.'],
  dica: 'No método da adição, <strong>multiplique uma equação</strong> para que os coeficientes de uma incógnita fiquem <strong>opostos</strong>; some as equações e a incógnita some.',
  abertura: { titulo: 'O combo do cinema', texto: 'Dois combos de cinema têm preços promocionais: $2$ pipocas e $3$ sucos custam R$ 30; $1$ pipoca e $4$ sucos custam R$ 25. Qual o preço de cada item? Cada incógnita tem o mesmo valor nas duas equações.',
    extra: W.box('Resolva o sistema', W.row(W.nm('s12-a1', 'a₁', 2, 'any'), W.nm('s12-b1', 'b₁', 3, 'any'), W.nm('s12-c1', 'c₁', 30, 'any')) + W.row(W.nm('s12-a2', 'a₂', 1, 'any'), W.nm('s12-b2', 'b₂', 4, 'any'), W.nm('s12-c2', 'c₂', 25, 'any')) + W.svg('s12-s', '0 0 360 220', '340px') + W.txt('s12-r', 'Solução: ') + W.hint('s12-h')),
    mini: ['Chamando a pipoca de $x$ e o suco de $y$, a primeira informação é:', ['$x + y = 30$', '$2x + 3y = 30$', '$3x + 2y = 30$', '$2x = 30$'], 1, '$2$ pipocas e $3$ sucos: $2x + 3y = 30$.'] },
  teoria: [
    { eb: 'Teoria · sistemas', titulo: 'Sistema, matriz e método da adição', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Sistema:</strong> $a_{1}x + b_{1}y = c_{1}$ e $a_{2}x + b_{2}y = c_{2}$.</li>
                <li><strong>Matriz:</strong> a matriz $A$ dos coeficientes tem as linhas $(a_{1}, b_{1})$ e $(a_{2}, b_{2})$; $X = (x, y)$ e $B = (c_{1}, c_{2})$: $A · X = B$.</li>
                <li><strong>Método da adição:</strong> multiplique as equações para opor os coeficientes de $x$ (ou $y$), some e resolva; depois substitua na outra equação.</li>
                <li><strong>Gráfico:</strong> cada equação é uma reta; a solução é o <strong>ponto de encontro</strong> (retas paralelas: sem solução; retas coincidentes: infinitas).</li>
              </ul>
            </div>
            <div><p class="hint">No widget, mude os coeficientes e veja o ponto de interseção das retas; com retas paralelas ($a_{1}b_{2} = a_{2}b_{1}$) não há solução única.</p></div>
          </div>` }
  ],
  exemplos: [
    ['O combo de cinema', 'Resolva $2x + 3y = 30$ e $x + 4y = 25$ (em reais, por pipoca e por suco).', [['Multiplicar', 'Multiplique a 2ª por $−2$: $−2x − 8y = −50$.'], ['Somar', '$2x + 3y = 30$ somada a $−2x − 8y = −50$ dá $−5y = −20$ ⇒ $y = 4$.'], ['Substituir', '$x + 4 · 4 = 25$ ⇒ $x = 9$.']], 'Pipoca R$ 9,00 e suco R$ 4,00.'],
    ['Soja e milho', 'Um produtor vendeu, em um ano, $2$ t de soja e $3$ t de milho por R$ 10.500; em outro, $4$ t de soja e $3$ t de milho por R$ 15.300. Qual o preço da tonelada de cada um?', [['Sistema', '$2x + 3y = 10500$ e $4x + 3y = 15300$.'], ['Subtrair', '$(4x + 3y) − (2x + 3y) = 15300 − 10500$ ⇒ $2x = 4800$ ⇒ $x = 2400$.'], ['y', '$3y = 10500 − 4800 = 5700$ ⇒ $y = 1900$.']], 'Soja: R$ 2.400,00 por tonelada; milho: R$ 1.900,00.'],
    ['Na forma matricial', 'Escreva o sistema do produtor em forma de matriz e confira a solução.', [['Matriz', 'A matriz dos coeficientes tem as linhas $(2, 3)$ e $(4, 3)$; $X = (x, y)$ e $B = (10500, 15300)$.'], ['Conferir', '$2 · 2400 + 3 · 1900 = 10500$ e $4 · 2400 + 3 · 1900 = 15300$ ✓.']], 'A solução $x = 2400$, $y = 1900$ satisfaz as duas equações.'],
    ['Sem solução única', 'O sistema $x + 2y = 4$ e $2x + 4y = 7$ tem solução?', [['Comparar', 'Multiplicando a 1ª por $2$: $2x + 4y = 8$, mas a 2ª diz $2x + 4y = 7$.']], 'Não tem solução: as retas são paralelas.']
  ],
  pratique: [
    ['Resolver', 'A solução de $x + y = 10$ e $x − y = 2$ é:', ['$x = 4$ e $y = 6$', '$x = 6$ e $y = 4$', '$x = 8$ e $y = 2$', '$x = 5$ e $y = 5$'], 1, 'Somando: $2x = 12$ ⇒ $x = 6$ e $y = 4$. <strong>Alternativa B.</strong>'],
    ['Ingressos', 'Dois ingressos adultos e um infantil custam R$ 40; um adulto e dois infantis custam R$ 35. O ingresso infantil custa:', ['R$ 10', 'R$ 12', 'R$ 15', 'R$ 18'], 0, 'Multiplicando a 2ª equação por $−2$ e somando: $(2a + c) + (−2a − 4c) = 40 − 70$ ⇒ $−3c = −30$ ⇒ $c = 10$. <strong>Alternativa A.</strong>'],
    ['Matriz', 'A matriz dos coeficientes do sistema $3x + 2y = 7$ e $x − y = 1$ tem as linhas:', ['$(3, 2)$ e $(1, −1)$', '$(3, 1)$ e $(2, −1)$', '$(7, 1)$ apenas', '$(3, 2)$ e $(7, 1)$'], 0, 'Cada linha traz os coeficientes de uma equação: $(3, 2)$ e $(1, −1)$. <strong>Alternativa A.</strong>']
  ],
  enem: ['Duas compras', 'Em uma lanchonete, $3$ salgados e $2$ sucos custam R$ 31; $1$ salgado e $3$ sucos custam R$ 22. Quanto custa um salgado?', ['R$ 5,00', 'R$ 6,00', 'R$ 7,00', 'R$ 8,00', 'R$ 9,00'], 2, '$s = 22 − 3c$: $3(22 − 3c) + 2c = 31$ ⇒ $66 − 7c = 31$ ⇒ $c = 5$ e $s = 7$. <strong>Alternativa C.</strong>'],
  cuidados: [['Trocar as incógnitas', 'Defina antes quem é $x$ e quem é $y$ e mantenha em todas as equações.'], ['Esquecer de multiplicar toda a equação', 'Ao multiplicar uma equação por um número, multiplique <strong>os dois lados</strong>.'], ['Não conferir', 'Substitua $x$ e $y$ nas <strong>duas</strong> equações originais.'], ['Pensar que sempre há solução', 'Retas paralelas: sem solução; coincidentes: infinitas.']],
  quiz: [{ q: 'No sistema $x + y = 7$ e $x − y = 1$, o valor de $x$ é:', o: ['$3$', '$4$', '$6$', '$8$'], a: 1 }, { q: 'Geometricamente, a solução de um sistema $2 × 2$ é:', o: ['o ponto de encontro das duas retas', 'a soma dos coeficientes', 'o coeficiente angular', 'a origem'], a: 0 }, { q: 'Multiplicar uma equação por $−2$ serve para:', o: ['mudar a solução', 'opor coeficientes e eliminar uma incógnita', 'dobrar $x$', 'nada'], a: 1 }, { q: 'Retas paralelas no sistema significam:', o: ['uma solução', 'duas soluções', 'nenhuma solução', 'infinitas soluções'], a: 2 }],
  fecha: { cards: [['Montar', 'Defina $x$ e $y$ e escreva uma equação por informação.'], ['Resolver', 'Adição: oponha coeficientes, some e substitua.'], ['Conferir', 'Verifique nas duas equações; leia o gráfico (interseção).']], msg: 'Sistemas lineares resolvem problemas de preços, misturas e produção. Próxima retomada: progressões aritméticas.' }
});

const pages = [];
pages.push({ out: BASE + 'aula-1-retomada-comportamento-de-funcoes.html', html: K.deck({
  title: 'Retomada: comportamento de funções reais — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Retomada R11 · Comportamento de funções', slides: a,
  extra: WJS + BIND + UT + String.raw`
  var TT = [0, 2, 4, 6, 8], TY = [80, 62, 50, 44, 42];
  bind(['t11-i', 't11-j'], function(){ var i = +$('t11-i').value, j = +$('t11-j').value, svg = $('t11-s'), P = plano(svg, 0, 9, 30, 90, 360, 220, 0); var pts = TT.map(function(x, k){ return [x, TY[k]]; });
    el('polyline', {points: pts.map(function(p){ return P.sx(p[0]).toFixed(1) + ',' + P.sy(p[1]).toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg);
    pts.forEach(function(p){ ponto(svg, P, p[0], p[1], 'var(--primary)', ''); });
    if(i === j){ $('t11-r').textContent = '—'; $('t11-h').textContent = 'Escolha dois instantes diferentes.'; return; }
    var a = Math.min(i, j), b = Math.max(i, j); el('line', {x1: P.sx(TT[a]), y1: P.sy(TY[a]), x2: P.sx(TT[b]), y2: P.sy(TY[b]), stroke: 'var(--growth)', 'stroke-width': 3}, svg); ponto(svg, P, TT[a], TY[a], 'var(--growth)', ''); ponto(svg, P, TT[b], TY[b], 'var(--growth)', '');
    var t = (TY[b] - TY[a]) / (TT[b] - TT[a]); $('t11-r').textContent = pt(t, 3) + ' °C/min'; $('t11-h').textContent = 'Δy ÷ Δx = (' + TY[b] + ' − ' + TY[a] + ') ÷ (' + TT[b] + ' − ' + TT[a] + ') = ' + pt(t, 3) + '. ' + (t < 0 ? 'Decrescente no intervalo.' : t > 0 ? 'Crescente no intervalo.' : 'Constante.'); });`
}) });
pages.push({ out: BASE + 'aula-2-retomada-sistema-linear.html', html: K.deck({
  title: 'Retomada: sistemas lineares — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Retomada R12 · Sistema linear', slides: b,
  extra: WJS + BIND + UT + String.raw`
  bind(['s12-a1', 's12-b1', 's12-c1', 's12-a2', 's12-b2', 's12-c2'], function(){ var a1 = +$('s12-a1').value, b1 = +$('s12-b1').value, c1 = +$('s12-c1').value, a2 = +$('s12-a2').value, b2 = +$('s12-b2').value, c2 = +$('s12-c2').value, svg = $('s12-s'), D = a1 * b2 - a2 * b1;
    var xs = D !== 0 ? (c1 * b2 - c2 * b1) / D : 0, ys = D !== 0 ? (a1 * c2 - a2 * c1) / D : 0, cx = isFinite(xs) ? xs : 0, cy = isFinite(ys) ? ys : 0, r = Math.max(6, Math.abs(cx) * 1.8, Math.abs(cy) * 1.8), xmn = Math.floor(cx - r), xmx = Math.ceil(cx + r), ymn = Math.floor(cy - r), ymx = Math.ceil(cy + r);
    var P = plano(svg, xmn, xmx, ymn, ymx, 360, 220, 0), f1 = function(x){ return b1 !== 0 ? (c1 - a1 * x) / b1 : NaN; }, f2 = function(x){ return b2 !== 0 ? (c2 - a2 * x) / b2 : NaN; };
    if(b1 !== 0) curva(svg, P, f1, xmn, xmx, ymn, ymx, 'var(--primary)'); if(b2 !== 0) curva(svg, P, f2, xmn, xmx, ymn, ymx, 'var(--decay)');
    if(D === 0){ $('s12-r').textContent = 'sem solução única'; $('s12-h').textContent = 'a₁b₂ − a₂b₁ = 0: retas paralelas (sem solução) ou coincidentes (infinitas).'; return; }
    ponto(svg, P, xs, ys, 'var(--growth)', ''); $('s12-r').textContent = 'x = ' + pt(xs, 3) + ' e y = ' + pt(ys, 3); $('s12-h').textContent = 'Interseção das duas retas. Confira: ' + pt(a1 * xs + b1 * ys, 3) + ' = ' + pt(c1, 3) + ' e ' + pt(a2 * xs + b2 * ys, 3) + ' = ' + pt(c2, 3) + '.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Retomada: comportamento de funções e sistemas lineares', accent: 'growth', icon: 'algebra',
  aulas: [['Aula R11', 'Retomada: comportamento de funções reais', 'aula-1-retomada-comportamento-de-funcoes.html'], ['Aula R12', 'Retomada: sistema linear e matrizes', 'aula-2-retomada-sistema-linear.html']],
  pendente: true
}, pages };
