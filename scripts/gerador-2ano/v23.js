// Unidade v23 — Função seno: parâmetros c e d e resolução de problemas (aulas 48 e 49 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const TRI = 2, DIR = 'funcao-seno-periodo-e-problemas', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v23', BRAND = 'Função seno: período e problemas';

// ===================== AULA 48: parâmetros c e d =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 48', h1: 'Parâmetros c e d: <span style="color:var(--primary);">período e deslocamento da senóide</span>',
  sub: 'No rádio AM, a onda varia de altura (amplitude); no FM, varia a frequência, isto é, o período. Em y = a + b · sen(cx + d), o parâmetro c controla o período e d desloca a onda para a esquerda ou para a direita.',
  badges: [['período = 2π ÷ |c|'], ['deslocamento = −d ÷ c', 'growth'], ['a, b, c, d', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('De c e d ao gráfico completo.', [
  ['Relembrar a e b', 'centro e amplitude', 'bulb'],
  ['Parâmetro c', 'quanto maior, menor o período', 'target'],
  ['Parâmetro d', 'início do período deslocado', 'chart'],
  ['Montar o gráfico', 'os quatro parâmetros juntos', 'link'],
  ['Ler o gráfico', 'descobrir a, b, c e d', 'scale']
]));
a.push(objetivosSlide([
  'Calcular o <strong>período</strong> de $y = a + b · sen(cx + d)$ por $ {2π||c|}$.',
  'Interpretar $d$ como <strong>deslocamento horizontal</strong>: o período começa em $x = −d ÷ c$.',
  'Escrever e interpretar a <strong>lei completa</strong> a partir de um gráfico.'
], 'Dica', 'Para achar onde um período começa, <strong>resolva $cx + d = 0$</strong>; para achar onde termina, resolva $cx + d = 2π$.', 'primary'));

a.push(sl('Para início de conversa', 'AM e FM: amplitude e frequência', `
          ${lede('No rádio <strong>AM</strong>, a mensagem altera a <strong>amplitude</strong> da onda (parâmetro $b$). No <strong>FM</strong>, altera a <strong>frequência</strong>: a onda fica mais “apertada” ou mais “esticada”, isto é, muda o <strong>período</strong> (parâmetro $c$).')}
          <div class="grid2" style="margin-top:6px;">
            ${T.figOnda({ f: x => Math.sin(2 * x), xmin: 0, xmax: 2 * Math.PI, w: 330, h: 150, ymin: -1.4, ymax: 1.4 })}
            ${mini('O gráfico mostra $y = sen (2x)$: em $[0, 2π]$ ele faz <strong>duas</strong> ondas completas. Seu período é:', ['$4π$', '$2π$', '$π$', '$π ÷ 2$'], 2, 'Duas ondas em $2π$: cada uma tem comprimento $π$. É a fórmula $2π ÷ c = 2π ÷ 2 = π$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · parâmetro c', 'Quanto maior c, mais curto o período', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em $y = a + b · sen (cx + d)$: <strong>período $p = {2π||c|}$</strong>.</li>
                <li>$c = 1$: período $2π$ (a senóide-base). $c = 2$: período $π$ (onda “apertada”). $c = ½$: período $4π$ (onda “esticada”).</li>
                <li>$c$ e o período são <strong>inversamente proporcionais</strong>.</li>
                <li>$c$ não altera a imagem (que depende só de $a$ e $b$).</li>
              </ul>
            </div>
            ${W.box('Mude c', W.row(W.rg('p48-c', 'c', 0.25, 4, 0.25, 2, '')) + W.svg('p48-s', '0 0 380 220', '380px') + W.txt('p48-p', 'Período: ') + W.hint('p48-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · parâmetro d', 'Deslocar a onda: o início do período', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>O parâmetro $d$ <strong>translada</strong> o gráfico horizontalmente e muda onde um período começa.</li>
                <li>O período começa onde $cx + d = 0$, isto é, em $x = −{d|c}$.</li>
                <li>$d > 0$: o gráfico vai para a <strong>esquerda</strong>. $d < 0$: vai para a <strong>direita</strong>.</li>
                <li>Exemplo: $y = sen (x − {π|2})$ começa em $x = {π|2}$ (deslocada $π ÷ 2$ para a direita).</li>
              </ul>
            </div>
            ${W.box('Mude d', W.row(W.rg('p48-d', 'd (em π/4)', -8, 8, 1, -2, '')) + W.svg('p48-t', '0 0 380 220', '380px') + W.txt('p48-q', 'Início do período em x = ') + W.hint('p48-i'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Período de uma função', 'Qual o período de $f(x) = 3 · sen (4x)$?', [
  ['Parâmetros', '$a = 0$, $b = 3$, $c = 4$ e $d = 0$.'],
  ['Período', '$p = {2π|4} = {π|2}$.']
], 'O período é $ {π|2}$.'.replace('${', '$ {')));
a.push(exemplo('Exemplo resolvido', 'Com c fracionário', 'Determine o período e a imagem de $y = 2 · sen ({x|4})$.', [
  ['Parâmetro c', '$c = {1|4}$ ⇒ período $p = 2π ÷ {1|4} = 8π$.'],
  ['Imagem', '$a = 0$ e $|b| = 2$: $[−2, 2]$.']
], 'Período $8π$ e imagem $[−2, 2]$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Deslocamento', 'Onde começa um período de $y = sen (x + {π|3})$ e qual é o período?', [
  ['Resolver cx + d = 0', '$x + {π|3} = 0$ ⇒ $x = −{π|3}$.'],
  ['Período', '$c = 1$ ⇒ $2π$: o período vai de $−{π|3}$ a $ {5π|3}$.']
], 'O período começa em $−{π|3}$ (gráfico deslocado para a esquerda) e vale $2π$.'.replace('${', '$ {'), 'growth'));
a.push(exemplo('Exemplo resolvido', 'Lei completa', 'Dê o período, o início do período e a imagem de $y = 1 + 2 · sen (2x − {π|2})$.', [
  ['Período', '$p = 2π ÷ 2 = π$.'],
  ['Início', '$2x − {π|2} = 0$ ⇒ $x = {π|4}$.'],
  ['Imagem', '$a = 1$, $|b| = 2$: $[−1, 3]$.']
], 'Período $π$, início em $ {π|4}$ e imagem $[−1, 3]$.'.replace('${', '$ {'), 'decay'));

a.push(pratique('Período', 'O período de $y = sen (3x)$ é:',
  ['$ {π|3}$', '$ {2π|3}$', '$π$', '$6π$'].map(t => t), 1, '$p = 2π ÷ 3 = {2π|3}$. <strong>Alternativa B.</strong>'.replace('${', '$ {')));
a.push(pratique('Mais períodos', 'Em $[0, 2π]$, o gráfico de $y = sen (4x)$ completa quantas ondas?',
  ['$1$', '$2$', '$4$', '$8$'], 2, 'Período $2π ÷ 4 = π ÷ 2$, então cabem $4$ ondas em $2π$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Início do período', 'O período de $y = sen (2x − π)$ começa em:',
  ['$x = 0$', '$x = {π|2}$', '$x = π$', '$x = 2π$'], 1, '$2x − π = 0$ ⇒ $x = π ÷ 2$. <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Frequência', 'Um sinal é dado por $y = 5 · sen (6πt)$, com $t$ em segundos. O período do sinal, em segundos, é:',
  ['$ {1|6}$', '$ {1|3}$', '$ {1|2}$', '$1$', '$2$'].map(t => t), 1, '$p = 2π ÷ 6π = 1 ÷ 3$ s. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde c e d enganam', [
  ['Multiplicar em vez de dividir', 'O período é $2π ÷ |c|$: <strong>dividir</strong>, nunca multiplicar.'],
  ['Esquecer que d é dividido por c', 'O deslocamento é $−d ÷ c$, não $−d$.'],
  ['Sinal do deslocamento', '$sen (x − π)$ vai para a <strong>direita</strong>; $sen (x + π)$, para a <strong>esquerda</strong>.'],
  ['Achar que c muda a imagem', 'A imagem só depende de $a$ e $b$.']
]));
a.push(quiz([
  { q: 'O período de $y = sen (x ÷ 2)$ é:', o: ['$π$', '$2π$', '$4π$', '$8π$'], a: 2 },
  { q: 'Aumentar $c$ faz o período:', o: ['aumentar', 'diminuir', 'ficar igual', 'virar zero'], a: 1 },
  { q: 'O gráfico de $sen (x − {π|2})$ em relação a $sen x$ está deslocado:', o: ['$π ÷ 2$ para a direita', '$π ÷ 2$ para a esquerda', '$π ÷ 2$ para cima', '$π ÷ 2$ para baixo'], a: 0 },
  { q: 'A imagem de $y = 3 + 2 · sen (5x)$ é:', o: ['$[1, 5]$', '$[−2, 2]$', '$[3, 5]$', '$[0, 10]$'], a: 0 }
]));
a.push(fechamento([
  ['Período', '$p = {2π||c|}$.'],
  ['Deslocamento', 'O período começa em $x = −d ÷ c$.'],
  ['Função completa', '$a$: centro; $b$: amplitude; $c$: período; $d$: deslocamento.']
], 'Já conhecemos todos os parâmetros. Próxima aula: aplicá-los em problemas de roda-gigante, luz solar e potência.'));

// ===================== AULA 49: problemas =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 49', h1: 'A função seno na vida real: <span style="color:var(--primary);">roda-gigante, luz e energia</span>',
  sub: 'Uma cadeira de roda-gigante sobe e desce; a luz do Sol sobre um lago depende do ângulo; a produção de energia solar varia no dia. Todos esses fenômenos são senóides com a, b, c e d bem definidos.',
  badges: [['modelar'], ['ler gráficos', 'growth'], ['a, b, c, d', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Da situação à lei da função.', [
  ['Ler a situação', 'o que se repete e a cada quanto', 'bulb'],
  ['Achar a e b', 'centro e amplitude', 'target'],
  ['Achar c e d', 'período e início', 'chart'],
  ['Resolver', 'usar a lei para responder', 'link'],
  ['Interpretar', 'o que a resposta significa', 'scale']
]));
b.push(objetivosSlide([
  '<strong>Modelar</strong> fenômenos periódicos com $y = a + b · sen(cx + d)$.',
  'Determinar $a$, $b$, $c$ e $d$ a partir de <strong>informações do enunciado ou de um gráfico</strong>.',
  'Usar o modelo para <strong>calcular valores</strong> e <strong>interpretar resultados</strong>.'
], 'Dica', 'Procedimento: <strong>$a$ = (máximo + mínimo) ÷ 2</strong>; <strong>$|b|$ = (máximo − mínimo) ÷ 2</strong>; <strong>$c = 2π ÷ período$</strong>; $d$ pelo ponto onde a onda começa.', 'primary'));

b.push(sl('Para início de conversa', 'A roda-gigante como função', `
          ${lede('Uma roda-gigante tem raio de $30$ m e seu centro está a $35$ m do solo; completa uma volta em $12$ minutos. Começando com a cadeira à altura do centro e subindo, a altura em função do tempo é uma <strong>senóide</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Roda-gigante', W.row(W.rg('r49-t', 'Tempo t', 0, 24, 0.5, 2, ' min')) + W.svg('r49-s', '0 0 380 230', '380px') + W.txt('r49-h', 'Altura: ') + W.hint('r49-i'))}
            ${mini('O ponto mais alto e o mais baixo da cadeira são, respectivamente:', ['$65$ m e $5$ m', '$30$ m e $0$ m', '$35$ m e $5$ m', '$70$ m e $0$ m'], 0, '$35 + 30 = 65$ m (topo) e $35 − 30 = 5$ m (base).')}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Lei da altura na roda-gigante', 'Com a roda do início ($35$ m do centro ao solo, raio $30$ m, volta em $12$ min), escreva $h(t)$.', [
  ['Centro e amplitude', '$a = 35$ e $b = 30$ (raio).'],
  ['Período', '$12$ min ⇒ $c = 2π ÷ 12 = {π|6}$.'],
  ['Deslocamento', 'A cadeira parte da altura do centro e sobe: $d = 0$.']
], '$h(t) = 35 + 30 · sen ({πt|6})$, com $t$ em minutos.'.replace('${', '$ {')));
b.push(exemplo('Exemplo resolvido', 'Usar a lei', 'Na roda-gigante, qual a altura da cadeira em $t = 2$ min e em $t = 9$ min?', [
  ['t = 2', '$h(2) = 35 + 30 · sen ({π|3}) = 35 + 30 · {√{3}|2} ≈ 35 + 26 = 61$ m.'],
  ['t = 9', '$h(9) = 35 + 30 · sen ({3π|2}) = 35 − 30 = 5$ m (ponto mais baixo).']
], 'A cadeira está a cerca de $61$ m em $2$ min e a $5$ m em $9$ min.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Intensidade da luz no lago', 'A intensidade da luz que atinge um lago com raios formando um ângulo $x$ com a superfície é $I(x) = k · sen x$, com $0° < x < 90°$. Quando $x = 30°$, a intensidade é que porcentagem do valor máximo?', [
  ['Máximo', 'O seno máximo é $1$ (em $x = 90°$), então $I_{máx} = k$.'],
  ['x = 30°', '$I(30°) = k · sen 30° = k · {1|2}$.'],
  ['Porcentagem', '$ {1|2} = 0,5$, ou seja, 50% do máximo.']
], 'A intensidade cai para 50% do máximo.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Lei a partir do máximo e do mínimo', 'A temperatura de um forno oscila entre $160$ °C e $200$ °C e repete o ciclo a cada $10$ min, partindo da média e subindo. Escreva $T(t)$.', [
  ['Centro', '$a = (200 + 160) ÷ 2 = 180$.'],
  ['Amplitude', '$b = (200 − 160) ÷ 2 = 20$.'],
  ['Período', '$c = 2π ÷ 10 = {π|5}$; $d = 0$.']
], '$T(t) = 180 + 20 · sen ({πt|5})$.'.replace('${', '$ {'), 'decay'));
b.push(exemplo('Exemplo resolvido', 'Quando acontece o máximo', 'Com $T(t) = 180 + 20 · sen ({πt|5})$, em que instante (no 1º ciclo) a temperatura é máxima?', [
  ['Seno máximo', '$sen θ = 1$ para $θ = {π|2}$.'],
  ['Resolver', '${πt|5} = {π|2}$ ⇒ $t = 2,5$ min.'.replace('${', '$ {')]
], 'A temperatura atinge $200$ °C em $t = 2,5$ min.', 'decay'));

b.push(pratique('Identificar a e b', 'Uma grandeza oscila entre $2$ e $10$ seguindo $y = a + b · sen x$ ($b > 0$). Os valores de $a$ e $b$ são:',
  ['$a = 6$ e $b = 4$', '$a = 4$ e $b = 6$', '$a = 2$ e $b = 10$', '$a = 8$ e $b = 2$'], 0, '$a = (10 + 2) ÷ 2 = 6$ e $b = (10 − 2) ÷ 2 = 4$. <strong>Alternativa A.</strong>'));
b.push(pratique('Intensidade a 60°', 'Na função $I(x) = k · sen x$, a porcentagem aproximada da intensidade máxima em $x = 60°$ é: (use $√{3} ≈ 1,73$)',
  ['50%', '71%', '87%', '100%'], 2, '$sen 60° = {√{3}|2} ≈ 0,865$, isto é, 87%. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Potência solar', 'A potência de painéis solares é $P(t) = 400 + 400 · sen ({π(t − 6)|12})$, com $t$ em horas. Em qual horário (de $0$ a $24$) ela é máxima?',
  ['$6$ h', '$12$ h', '$18$ h', '$24$ h'], 1, 'O máximo ocorre quando $ {π(t − 6)|12} = {π|2}$ ⇒ $t − 6 = 6$ ⇒ $t = 12$ h. <strong>Alternativa B.</strong>'.replace('${', '$ {'), '', 'decay'));
b.push(estiloEnem('A roda do parque', 'A altura de uma cadeira de roda-gigante é $h(t) = 20 + 15 · sen ({πt|10})$ (em metros, com $t$ em segundos). Quanto tempo leva uma volta completa?',
  ['$5$ s', '$10$ s', '$20$ s', '$35$ s', '$60$ s'], 2, 'Período: $2π ÷ {π|10} = 20$ s. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a modelagem engana', [
  ['Confundir amplitude com altura máxima', 'A amplitude é $|b|$ (raio da roda); a altura máxima é $a + |b|$.'],
  ['Tempo em minutos, período em segundos', 'Use a <strong>mesma unidade</strong> do enunciado ao calcular $c$.'],
  ['Domínio restrito', 'Na intensidade da luz, $x$ vai de $0°$ a $90°$: a função só cobre o 1º quadrante.'],
  ['Esquecer o início do ciclo', 'Se a cadeira não parte do nível do centro, aparece um $d ≠ 0$ (ou um cosseno).']
]));
b.push(quiz([
  { q: 'Uma grandeza oscila entre $10$ e $30$: o centro $a$ vale:', o: ['$10$', '$20$', '$30$', '$40$'], a: 1 },
  { q: 'Período de $12$ min corresponde a $c =$', o: ['$12$', '$2π ÷ 12$', '$12 ÷ 2π$', '$π$'], a: 1 },
  { q: 'Em $I = k · sen x$, o máximo ocorre em:', o: ['$0°$', '$30°$', '$90°$', '$180°$'], a: 2 },
  { q: 'Com $a = 35$ e $b = 30$, a altura mínima é:', o: ['$5$', '$30$', '$35$', '$65$'], a: 0 }
]));
b.push(fechamento([
  ['Centro e amplitude', '$a = {máx + mín|2}$ e $|b| = {máx − mín|2}$.'],
  ['Período', '$c = 2π ÷ período$ (mesma unidade do tempo).'],
  ['Usar o modelo', 'Substitua o tempo e confira com o contexto.']
], 'A senóide modela fenômenos periódicos de vários tipos. Próxima aula: a função cosseno, a “prima” do seno.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-parametros-c-e-d.html', html: K.deck({
  title: 'Função seno: parâmetros c e d — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 48 · Parâmetros c e d', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['p48-c'], function(){ var c = +$('p48-c').value; $('p48-cv').textContent = pt(c, 2); ondaW($('p48-s'), Math.sin, 1, c, 0, 0, 0, 2 * Math.PI);
    var p = 2 * Math.PI / c, n = 2 * Math.PI / p; $('p48-p').textContent = (Math.abs(p - Math.PI) < 1e-9 ? 'π' : Math.abs(p - 2 * Math.PI) < 1e-9 ? '2π' : pt(p / Math.PI, 3) + 'π') + ' ≈ ' + pt(p, 2);
    $('p48-h').textContent = 'p = 2π ÷ ' + pt(c, 2) + '. Em [0, 2π] cabem ' + pt(n, 2) + ' ondas.'; });
  bind(['p48-d'], function(){ var k = +$('p48-d').value, d = k * Math.PI / 4; $('p48-dv').textContent = k; ondaW($('p48-t'), Math.sin, 1, 1, d, 0, -Math.PI, 2 * Math.PI);
    var x0 = -d; $('p48-q').textContent = (k === 0 ? '0' : pt(-k / 4, 2) + 'π') + ' ≈ ' + pt(x0, 2);
    $('p48-i').textContent = k === 0 ? 'Sem deslocamento: gráfico-base.' : (k > 0 ? 'd > 0: o gráfico foi deslocado para a esquerda.' : 'd < 0: o gráfico foi deslocado para a direita.') + ' Deslocamento ' + pt(Math.abs(k) / 4, 2) + 'π.'; });`
}) });
pages.push({ out: BASE + 'aula-2-funcao-seno-problemas.html', html: K.deck({
  title: 'Função seno: resolução de problemas — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 49 · Problemas com a função seno', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['r49-t'], function(){ var t = +$('r49-t').value; $('r49-tv').textContent = pt(t, 1); var svg = $('r49-s'), P = plano(svg, 0, 24, 0, 70, 380, 230, 6), f = function(x){ return 35 + 30 * Math.sin(Math.PI * x / 6); };
    curva(svg, P, f, 0, 24, 0, 70, 'var(--primary)'); el('line', {x1: P.sx(t), y1: P.sy(0), x2: P.sx(t), y2: P.sy(f(t)), stroke: 'var(--decay)', 'stroke-width': 2.4, 'stroke-dasharray': '4 3'}, svg); ponto(svg, P, t, f(t), 'var(--growth)', '');
    $('r49-h').textContent = pt(f(t), 1) + ' m'; $('r49-i').textContent = 'h(t) = 35 + 30 · sen(π t ÷ 6): período 12 min, entre 5 m e 65 m.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função seno: período, deslocamento e problemas', accent: 'growth', icon: 'wave',
  aulas: [['Aula 48', 'Parâmetros c e d: período e deslocamento', 'aula-1-parametros-c-e-d.html'], ['Aula 49', 'Função seno: roda-gigante, luz e energia', 'aula-2-funcao-seno-problemas.html']],
  pendente: true
}, pages };
