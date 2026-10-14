// Unidade v25 — Funções seno e cosseno: modelagem e problemas (aulas 52, 53 e 54 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const T = require('./trig.js');
const { graf, amostra } = require('./graf.js');
const TRI = 2, DIR = 'funcoes-trigonometricas-problemas', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v25', BRAND = 'Funções trigonométricas: problemas';

// ===================== AULA 52: modelando com cosseno =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 52', h1: 'Modelando com o cosseno: <span style="color:var(--primary);">pêndulo, pressão e batimentos</span>',
  sub: 'O pêndulo de um relógio antigo balança sempre no mesmo ritmo: o ângulo que ele faz com a vertical em função do tempo é uma cossenóide. Aprender a ler seus coeficientes é aprender a modelar o mundo.',
  badges: [['P(t) = A + B · cos(kt)'], ['centro, amplitude, período', 'growth'], ['seno ≡ cosseno', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do gráfico ao modelo.', [
  ['Ler o gráfico', 'extremos, centro e período', 'bulb'],
  ['A, B e k', 'o que cada constante controla', 'target'],
  ['Seno ou cosseno', 'a mesma curva, deslocada π/2', 'chart'],
  ['Unidades', 'batimentos por minuto e segundos', 'link'],
  ['Montar a lei', 'com máximo, mínimo e frequência', 'scale']
]));
a.push(objetivosSlide([
  'Determinar $A$, $B$ e $k$ em $P(t) = A + B · cos (kt)$ a partir de <strong>máximo, mínimo e período</strong>.',
  'Converter <strong>frequência</strong> (por minuto) em <strong>período</strong> (em segundos).',
  'Reconhecer que <strong>seno e cosseno</strong> descrevem a mesma curva com um deslocamento.'
], 'Dica', 'Receita: <strong>$A = {máx + mín|2}$</strong> (centro), <strong>$B = {máx − mín|2}$</strong> (amplitude), <strong>$k = {2π|período}$</strong>.', 'primary'));

a.push(sl('Para início de conversa', 'O pêndulo do relógio', `
          ${lede('Um pêndulo oscila entre $+30°$ e $−30°$ em relação à vertical e leva $3$ s para ir e voltar ao ponto de partida. Quando ele parte do extremo, a cossenóide é o modelo natural: <strong>amplitude $30°$</strong>, <strong>período $3$ s</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${graf({ w: 360, h: 170, xmin: 0, xmax: 6, ymin: -36, ymax: 36, px: 1.5, py: 30, series: [{ pts: amostra(x => 30 * Math.cos(2 * Math.PI * x / 3), 0, 6, 120) }] })}
            ${mini('Se o ângulo do pêndulo é $θ(t) = 30 · cos ({2πt|3})$, qual é $θ(0)$?', ['$0°$', '$15°$', '$30°$', '$−30°$'], 2, '$cos 0 = 1$: $θ(0) = 30°$. O pêndulo parte do extremo direito.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · ler os coeficientes', 'Em P(t) = A + B · cos (kt), quem é quem?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>$A$ (centro):</strong> ponto médio entre máximo e mínimo.</li>
                <li><strong>$B$ (amplitude):</strong> distância do centro ao máximo; com $B > 0$ a onda parte do máximo.</li>
                <li><strong>$k$:</strong> determina o período, $T = {2π|k}$, logo $k = {2π|T}$.</li>
                <li>Um <strong>batimento</strong> (ou ciclo) é um <strong>período</strong> entre duas pressões máximas sucessivas.</li>
                <li>Frequência $f$ ciclos/minuto $⇒$ período em segundos $T = {60|f}$.</li>
              </ul>
            </div>
            ${W.box('Monte o modelo', W.row(W.nm('m52-mx', 'Máximo', 110, 'any'), W.nm('m52-mn', 'Mínimo', 70, 'any'), W.nm('m52-f', 'Ciclos por minuto', 75, 'any', 'min="1"')) + W.svg('m52-s', '0 0 380 220', '380px') + W.txt('m52-r', 'A · B · período: ') + W.hint('m52-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Seno e cosseno: a mesma curva', `
          <div class="grid2">
            ${T.figOnda({ f: x => Math.sin(x + Math.PI / 2), xmin: 0, xmax: 2 * Math.PI, w: 330, h: 170, cor: 'var(--decay)' })}
            <ul class="plain" style="font-size:.93rem;line-height:1.65;">
              <li>$cos x = sen (x + {π|2})$ e $sen x = cos (x − {π|2})$.</li>
              <li>Rotacionando o ciclo trigonométrico em $90°$ ($π ÷ 2$) o eixo do seno vira o eixo do cosseno.</li>
              <li>Por isso o parâmetro $d$ <strong>não é necessário</strong> no cosseno quando a onda parte do máximo: o seno precisaria dele.</li>
              <li>Escolha o modelo que simplifica: parte do <strong>máximo</strong> → cosseno; parte do <strong>centro subindo</strong> → seno.</li>
            </ul>
          </div>`.replace('${', '$ {'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Pressão arterial', 'A pressão arterial de uma pessoa segue $P(t) = A + B · cos (kt)$, com $t$ em segundos. Pressão mínima $70$, máxima $110$ e $75$ batimentos por minuto. Determine $A$, $B$ e $k$.', [
  ['Centro', '$A = (110 + 70) ÷ 2 = 90$.'],
  ['Amplitude', '$B = 110 − 90 = 20$.'],
  ['Período', '$75$ batimentos em $60$ s ⇒ $T = 60 ÷ 75 = 0,8$ s.'],
  ['Parâmetro k', '$k = 2π ÷ 0,8 = {5π|2}$.']
], '$P(t) = 90 + 20 · cos ({5πt|2})$.'.replace('${', '$ {')));
a.push(exemplo('Exemplo resolvido', 'Escolher o modelo', 'Um fenômeno parte do máximo $8$, desce até o mínimo $2$ e volta em $5$ s. Escreva uma função cosseno para ele.', [
  ['Centro e amplitude', '$A = (8 + 2) ÷ 2 = 5$; $B = 8 − 5 = 3$.'],
  ['Período', '$T = 5$ ⇒ $k = {2π|5}$.']
], '$y(t) = 5 + 3 · cos ({2πt|5})$.'.replace('${', '$ {'), 'growth'));
a.push(exemplo('Exemplo resolvido', 'Do seno ao cosseno', 'Escreva $y = 3 · sen (x + {π|2})$ usando só cosseno.', [
  ['Identidade', '$sen (x + {π|2}) = cos x$.'],
  ['Substituir', '$y = 3 · cos x$.']
], '$y = 3 · cos x$.'.replace('${', '$ {'), 'growth'));
a.push(exemplo('Exemplo resolvido', 'Ritmo do pêndulo', 'Com $θ(t) = 30 · cos ({2πt|3})$, em que instantes (de $0$ a $3$ s) o pêndulo passa pela vertical ($θ = 0$)?', [
  ['Equação', '$cos ({2πt|3}) = 0$ ⇒ ${2πt|3} = {π|2}$ ou ${3π|2}$.'.replace('${', '$ {').replace('${', '$ {')],
  ['Resolver', '$t = 0,75$ s ou $t = 2,25$ s.']
], 'Passa pela vertical em $t = 0,75$ s e $t = 2,25$ s.', 'decay'));

a.push(pratique('Período', 'A função $f(x) = 2 − 3 · cos ({x|5})$ tem período:',
  ['$2π$', '$5π$', '$10π$', '$ {2π|5}$'], 2, '$c = {1|5}$ ⇒ $p = 2π ÷ {1|5} = 10π$. <strong>Alternativa C.</strong>'.replace('${', '$ {')));

a.push(pratique('Máximo e mínimo', 'O gráfico de $f(x) = a + b · cos x$, com $b > 0$, tem máximo $5$ e mínimo $1$. Os valores de $a$ e $b$ são:',
  ['$a = 2$ e $b = 3$', '$a = 3$ e $b = 2$', '$a = 1$ e $b = 4$', '$a = 4$ e $b = 1$'], 1, '$a = (5 + 1) ÷ 2 = 3$ e $b = 5 − 3 = 2$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Batimentos', 'Um modelo da pressão é $P(t) = 80 + 40 · cos (kt)$, com $t$ em segundos. Se a pessoa tem $60$ batimentos por minuto, o valor de $k$ é:',
  ['$ {π|2}$', '$π$', '$2π$', '$3π$', '$60π$'], 2, '$60$ batimentos por minuto = $1$ por segundo: período $1$ s e $k = 2π ÷ 1 = 2π$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a modelagem engana', [
  ['Unidades misturadas', 'Frequência em batimentos por <strong>minuto</strong>, tempo em <strong>segundos</strong>: converta antes de calcular $k$.'],
  ['Período confundido com frequência', 'Período $T$ = tempo de um ciclo; frequência = ciclos por unidade de tempo; $T = 1 ÷ f$.'],
  ['Escolher o modelo errado', 'Parte do máximo: cosseno. Parte do centro subindo: seno.'],
  ['Amplitude pelo máximo', '$B$ é o máximo menos o <strong>centro</strong>, não o máximo sozinho.']
]));
a.push(quiz([
  { q: 'Em $P(t) = A + B · cos (kt)$, o centro da onda é:', o: ['$A$', '$B$', '$k$', '$A + B$'], a: 0 },
  { q: 'Com período $T = 0,5$ s, $k$ vale:', o: ['$π$', '$2π$', '$4π$', '$0,5π$'], a: 2 },
  { q: '$cos x$ é igual a:', o: ['$sen (x − π ÷ 2)$', '$sen (x + π ÷ 2)$', '$−sen x$', '$sen (π − x)$'], a: 1 },
  { q: 'Em um gráfico que parte do máximo, um batimento corresponde a:', o: ['meio período', 'um período', 'dois períodos', 'a amplitude'], a: 1 }
]));
a.push(fechamento([
  ['Receita', '$A = {máx + mín|2}$, $B = {máx − mín|2}$, $k = {2π|T}$.'],
  ['Unidades', 'Converta batimentos por minuto em período em segundos: $T = 60 ÷ f$.'],
  ['Seno ou cosseno', 'A mesma curva, deslocada em $π ÷ 2$.']
].map(c => [c[0], c[1].replace('${', '$ {')]), 'Montar o modelo a partir dos dados é a habilidade-chave. Próxima aula: máximos e mínimos em marés, batimentos e luz.'));

// ===================== AULA 53: máximos e mínimos =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 53', h1: 'Máximos e mínimos com o cosseno: <span style="color:var(--primary);">marés, coração e luz</span>',
  sub: 'Quando o navio pode entrar no porto? Qual a frequência cardíaca máxima? Qual o brilho mínimo de um painel? Com os valores extremos do cosseno ($1$ e $−1$), todas essas respostas saem de uma conta curta.',
  badges: [['cos = 1 → máximo'], ['cos = −1 → mínimo', 'growth'], ['interpretar', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Dos extremos do cosseno à resposta no contexto.', [
  ['Extremos', 'cos t entre −1 e 1', 'bulb'],
  ['Máximo', 'substituir cos t = 1', 'target'],
  ['Mínimo', 'substituir cos t = −1', 'chart'],
  ['Quando ocorre', 'resolver a equação do ângulo', 'link'],
  ['Interpretar', 'unidades e contexto', 'scale']
]));
b.push(objetivosSlide([
  'Calcular o <strong>valor máximo e mínimo</strong> de $f(t) = c + A · cos (kt)$ substituindo $cos = ±1$.',
  'Determinar <strong>em que instantes</strong> acontecem os extremos.',
  'Interpretar os resultados em <strong>contextos reais</strong>: marés, frequência cardíaca, roda-gigante e luz.'
], 'Dica', 'Como $−1 ≤ cos ≤ 1$: <strong>máximo $= c + |A|$</strong> e <strong>mínimo $= c − |A|$</strong>. Para saber <strong>quando</strong>, resolva $cos (kt) = 1$ ou $cos (kt) = −1$.', 'primary'));

b.push(sl('Para início de conversa', 'A maré e o navio', `
          ${lede('A altura da maré em um porto é $h(t) = 3 + 1,2 · cos ({πt|6})$ (metros, $t$ em horas). Um navio grande só entra quando a maré está <strong>mais alta</strong>. Em que horários isso ocorre?')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('A maré ao longo do dia', W.row(W.rg('t53-t', 'Hora t', 0, 24, 0.5, 6, ' h')) + W.svg('t53-s', '0 0 380 230', '380px') + W.txt('t53-h', 'Altura: ') + W.hint('t53-i'))}
            ${mini('A altura máxima da maré é:', ['$1,2$ m', '$3$ m', '$4,2$ m', '$6$ m'], 2, '$cos = 1$: $h = 3 + 1,2 = 4,2$ m.')}
          </div>`.replace('${', '$ {'), { cls: '' }));

b.push(sl('Resumo visual', 'Passo a passo para extremos', `
          <div class="grid2">
            ${tbl(['Passo', 'O que fazer'], [['1', 'Identificar centro $c$ e amplitude $|A|$'], ['2', 'Máximo: $c + |A|$ (com $cos = 1$)'], ['3', 'Mínimo: $c − |A|$ (com $cos = −1$)'], ['4', 'Instantes: resolver $kt = 2nπ$ (máx.) ou $kt = π + 2nπ$ (mín.)']])}
            ${callout('Na maré', '$h(t) = 3 + 1,2 · cos ({πt|6})$: máximo $4,2$ m quando ${πt|6} = 0, 2π, 4π$, isto é, $t = 0, 12, 24$ h; mínimo $1,8$ m quando $t = 6$ e $18$ h.'.replace('${', '$ {'), 'success')}
          </div>`, { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Horários da maré alta', 'Com $h(t) = 3 + 1,2 · cos ({πt|6})$, em quais horários (de $0$ a $24$ h) a maré está mais alta?', [
  ['Condição', '$cos ({πt|6}) = 1$ ⇒ ${πt|6} = 0, 2π, 4π…$'.replace('${', '$ {')],
  ['Resolver', '$t = 0$, $12$ e $24$ h.']
], 'A maré fica mais alta às $0$ h, $12$ h e $24$ h (altura $4,2$ m).'));
b.push(exemplo('Exemplo resolvido', 'Frequência cardíaca', 'A frequência cardíaca (bpm) de um paciente é $f(t) = 80 + 20 · cos t$. Quais as frequências máxima e mínima?', [
  ['Máxima', '$cos t = 1$: $f = 80 + 20 = 100$ bpm.'],
  ['Mínima', '$cos t = −1$: $f = 80 − 20 = 60$ bpm.']
], 'Máxima de $100$ bpm e mínima de $60$ bpm.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Roda-gigante', 'Uma roda-gigante tem altura $h(t) = 30 + 20 · cos t$ (metros). Quais as alturas máxima e mínima da cabine?', [
  ['Máxima', '$30 + 20 · 1 = 50$ m.'],
  ['Mínima', '$30 + 20 · (−1) = 10$ m.']
], 'A cabine vai de $10$ m a $50$ m.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Intensidade da luz', 'A intensidade de um painel é $L(t) = 100 + 25 · cos t$. Qual a intensidade mínima?', [
  ['Mínima', '$cos t = −1$: $L = 100 − 25 = 75$.'],
  ['Interpretação', 'A intensidade nunca fica abaixo de $75$ nem acima de $125$.']
], 'A intensidade mínima é $75$.', 'decay'));

b.push(pratique('Máximo', 'O valor máximo de $h(t) = 20 + 15 · cos (t)$ é:',
  ['$5$', '$15$', '$20$', '$35$'], 3, '$20 + 15 = 35$. <strong>Alternativa D.</strong>'));
b.push(pratique('Mínimo', 'O valor mínimo de $L(t) = 90 + 30 · cos t$ é:',
  ['$30$', '$60$', '$90$', '$120$'], 1, '$90 − 30 = 60$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Maré baixa', 'Com $h(t) = 3 + 1,2 · cos ({πt|6})$, a maré fica mais baixa, no 1º ciclo, em $t =$',
  ['$0$ h', '$3$ h', '$6$ h', '$12$ h'].map(t => t), 2, '$cos = −1$ ⇒ ${πt|6} = π$ ⇒ $t = 6$ h. <strong>Alternativa C.</strong>'.replace('${', '$ {'), '', 'decay'));
b.push(estiloEnem('Painel publicitário', 'A intensidade luminosa de um painel é $L(t) = 100 + 25 · cos t$. A diferença entre a intensidade máxima e a mínima é:',
  ['$25$', '$50$', '$75$', '$100$', '$125$'], 1, 'Máxima $125$; mínima $75$; diferença $50$ ($= 2 · 25$). <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde os extremos enganam', [
  ['Usar o ângulo errado', 'Para o <strong>valor</strong> do máximo basta $cos = 1$; para o <strong>instante</strong>, resolva a equação do argumento.'],
  ['Esquecer o centro', 'O máximo é $c + |A|$, não só $|A|$.'],
  ['Parar no 1º ciclo', 'O extremo se repete a cada período: liste todos os instantes pedidos no intervalo.'],
  ['Trocar máximo por mínimo', 'Com $A < 0$, o máximo ocorre quando $cos = −1$.']
]));
b.push(quiz([
  { q: 'O máximo de $y = 5 + 2 · cos t$ é:', o: ['$3$', '$5$', '$7$', '$10$'], a: 2 },
  { q: 'O mínimo de $y = 10 − 4 · cos t$ é:', o: ['$6$', '$10$', '$14$', '$4$'], a: 0 },
  { q: '$h = 3 + 1,2 · cos ({πt|6})$ atinge o máximo em:', o: ['$t = 0$', '$t = 3$', '$t = 6$', '$t = 9$'], a: 0 },
  { q: 'Entre o máximo e o mínimo, a diferença vale:', o: ['$|A|$', '$2|A|$', '$c$', '$2c$'], a: 1 }
].map(q => ({ ...q, q: q.q.replace('${', '$ {') }))));
b.push(fechamento([
  ['Extremos', 'Máximo $c + |A|$ e mínimo $c − |A|$.'],
  ['Instantes', 'Resolva $cos (kt) = ±1$.'],
  ['Contexto', 'Interprete com unidades: metros, bpm, luminosidade, horas.']
], 'Com os extremos do cosseno, vários problemas “de vida real” viram uma conta curta. Última aula do bloco: problemas gerais de seno e cosseno.'));

// ===================== AULA 54: problemas gerais =====================
const c = [];
c.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 54', h1: 'Problemas de seno e cosseno: <span style="color:var(--primary);">custo, temperatura e ENEM</span>',
  sub: 'Por que estudamos só alguns tipos de função no Ensino Médio? Porque eles são “comportados”: seus gráficos são previsíveis e modelam bem o que é periódico. Nesta aula juntamos tudo em problemas.',
  badges: [['seno e cosseno'], ['máx. e mín.', 'growth'], ['calibrar parâmetros', 'decay']], color: 'primary'
}));
c.push(roteiroSlide('Do modelo básico ao problema completo.', [
  ['Modelos básicos', 'sen e cos: extremos ±1, período 2π', 'bulb'],
  ['Extremos', 'substituir ±1 na lei', 'target'],
  ['Calibrar parâmetros', 'dados pedem a e b', 'chart'],
  ['Restrições', 'tarde menor que manhã etc.', 'link'],
  ['Conferir', 'testar a lei no contexto', 'scale']
]));
c.push(objetivosSlide([
  'Resolver problemas que envolvem <strong>máximo e mínimo</strong> de funções seno e cosseno.',
  '<strong>Calibrar os parâmetros</strong> de um modelo a partir de condições do enunciado.',
  'Escolher entre <strong>seno e cosseno</strong> conforme o ponto de partida.'
], 'Dica', 'Antes de calcular: <strong>1) a função é seno ou cosseno? 2) qual o centro e a amplitude? 3) o que o enunciado pede: valor, instante ou parâmetro?</strong>', 'primary'));

c.push(sl('Para início de conversa', 'Modelos básicos de referência', `
          <div class="grid2">
            ${T.figOnda({ f: Math.sin, xmin: 0, xmax: 2 * Math.PI, w: 300, h: 150 })}
            ${T.figOnda({ f: Math.cos, xmin: 0, xmax: 2 * Math.PI, w: 300, h: 150, cor: 'var(--decay)' })}
          </div>
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>sen x</strong><p style="font-size:.9rem;margin:6px 0 0;">Máximo $1$, mínimo $−1$, período $2π$. Parte do centro, subindo.</p>', 'primary')}
            ${card('<strong>cos x</strong><p style="font-size:.9rem;margin:6px 0 0;">Máximo $1$, mínimo $−1$, período $2π$. Parte do máximo.</p>', 'decay')}
          </div>`, { cls: '' }));

c.push(sl('Teoria · estratégia', 'Resolver problemas de seno e cosseno', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Extremos:</strong> $c ± |A|$, substituindo $sen$ ou $cos$ por $±1$.</li>
                <li><strong>Calibrar:</strong> com máximo $M$ e mínimo $m$: $a = {M + m|2}$ e $|b| = {M − m|2}$.</li>
                <li><strong>Período:</strong> $T = 2π ÷ |c|$; dado $T$, $c = 2π ÷ T$.</li>
                <li><strong>Restrições do enunciado:</strong> escolha o sinal de $b$ ou o valor de $d$ que as satisfaça (ex.: “máxima à tarde”).</li>
              </ul>
            </div>
            ${W.box('Temperatura do escritório', W.row(W.nm('g54-mx', 'Máxima (°C)', 26, 'any'), W.nm('g54-mn', 'Mínima (°C)', 18, 'any'), W.rg('g54-h', 'Hora da máxima', 0, 24, 1, 14, ' h')) + W.svg('g54-s', '0 0 380 230', '380px') + W.txt('g54-r', 'T(h) = ') + W.hint('g54-i'))}
          </div>`, { cls: '' }));

c.push(exemplo('Exemplo resolvido', 'Custo unitário', 'O custo unitário (reais) de um produto é $C(t) = 150 + 90 · sen ({πt|4})$, com $t$ em horas de trabalho. Quais os custos máximo e mínimo?', [
  ['Seno', '$−1 ≤ sen ({πt|4}) ≤ 1$.'],
  ['Máximo', '$150 + 90 · 1 = 240$.'],
  ['Mínimo', '$150 − 90 = 60$.']
], 'Custo máximo: 240 reais; custo mínimo: 60 reais.', 'primary'));
c.push(exemplo('Exemplo resolvido', 'Calibrar o termostato', 'A temperatura de um escritório (°C) é $T(h) = a + b · cos ({π(h − 14)|12})$, com $h$ em horas. Os funcionários querem máxima de $26$ °C (às $14$ h) e mínima de $18$ °C. Quais $a$ e $b$?', [
  ['Centro', '$a = (26 + 18) ÷ 2 = 22$.'],
  ['Amplitude', '$b = 26 − 22 = 4$ (positivo, para o máximo ocorrer quando o cosseno vale $1$, em $h = 14$).'],
  ['Verificação', '$T(14) = 22 + 4 = 26$; $T(2) = 22 + 4 · cos (−π) = 18$.']
], '$a = 22$ e $b = 4$.', 'growth'));
c.push(exemplo('Exemplo resolvido', 'Quando é máxima?', 'No problema anterior, $T(h) = 22 + 4 · cos ({π(h − 14)|12})$. Em que horário a temperatura é mínima (de $0$ a $24$ h)?', [
  ['Cosseno −1', '${π(h − 14)|12} = ±π$ ⇒ $h − 14 = ±12$.'.replace('${', '$ {')],
  ['Soluções em [0, 24]', '$h = 2$ (pois $14 − 12 = 2$); $h = 26$ está fora do intervalo.']
], 'A temperatura mínima ($18$ °C) ocorre às $2$ h.', 'growth'));
c.push(exemplo('Exemplo resolvido', 'Escolher seno ou cosseno', 'A altura (m) de uma cadeira de roda-gigante parte do ponto mais alto, $60$ m, desce até $4$ m e volta em $10$ min. Escreva $h(t)$.', [
  ['Parte do máximo', 'Use cosseno com $b > 0$.'],
  ['Centro e amplitude', '$a = (60 + 4) ÷ 2 = 32$; $b = 60 − 32 = 28$.'],
  ['Período', '$c = 2π ÷ 10 = {π|5}$.']
], '$h(t) = 32 + 28 · cos ({πt|5})$.'.replace('${', '$ {'), 'decay'));

c.push(pratique('Custo', 'Se $C(t) = 200 + 120 · sen ({π · t|4})$, os custos máximo e mínimo são:',
  ['$320$ e $200$', '$200$ e $120$', '$200$ e $80$', '$320$ e $80$'].map(t => t), 3, '$200 + 120 = 320$ e $200 − 120 = 80$. <strong>Alternativa D.</strong>'));
c.push(pratique('Calibrar', 'Uma temperatura oscila entre $18$ °C e $26$ °C segundo $T = a + b · cos t$, $b > 0$. O valor de $a$ é:',
  ['$18$', '$20$', '$22$', '$26$'], 2, '$a = (18 + 26) ÷ 2 = 22$. <strong>Alternativa C.</strong>', '', 'growth'));
c.push(pratique('Seno ou cosseno?', 'Uma onda parte do ponto mais alto e é modelada com a função:',
  ['seno, sem deslocamento', 'cosseno, sem deslocamento', 'tangente', 'função afim'], 1, 'O cosseno parte do máximo: $cos 0 = 1$. <strong>Alternativa B.</strong>', '', 'decay'));
c.push(estiloEnem('Termostato', 'A temperatura de um ambiente é $T(h) = A + B · cos ({πh|12})$ (°C, $h$ de $0$ a $24$). Para que a máxima seja $28$ °C e a mínima $20$ °C, com a máxima à meia-noite, os valores de $A$ e $B$ são:',
  ['$A = 24$ e $B = 4$', '$A = 28$ e $B = 20$', '$A = 20$ e $B = 8$', '$A = 4$ e $B = 24$', '$A = 24$ e $B = 8$'], 0, '$A = (28 + 20) ÷ 2 = 24$ e $B = 28 − 24 = 4$ (a máxima em $h = 0$ pede cosseno positivo). <strong>Alternativa A.</strong>'));

c.push(armadilhas('Cuidados', 'Onde os problemas gerais enganam', [
  ['Misturar custo com parâmetro', '$a$ é o valor central; os extremos são $a ± |b|$.'],
  ['Restrição ignorada', 'Se o enunciado diz “máxima à tarde”, o sinal de $b$ ou o $d$ precisa respeitar isso.'],
  ['Calculadora em graus', 'Nas funções $f(x)$ o argumento é em <strong>radianos</strong>.'],
  ['Parar na lei', 'Depois de montar a função, <strong>teste</strong> um valor conhecido (o máximo, por exemplo).']
]));
c.push(quiz([
  { q: 'O custo $C = 150 + 90 · sen x$ varia entre:', o: ['$60$ e $240$', '$90$ e $150$', '$150$ e $240$', '$0$ e $150$'], a: 0 },
  { q: 'Máxima $30$ e mínima $10$ dão centro:', o: ['$10$', '$20$', '$30$', '$40$'], a: 1 },
  { q: 'A função que parte do máximo é:', o: ['$sen x$', '$cos x$', '$tg x$', '$x^{2}$'], a: 1 },
  { q: 'A amplitude de $y = 4 + 3 · cos x$ é:', o: ['$3$', '$4$', '$7$', '$1$'], a: 0 }
]));
c.push(fechamento([
  ['Modelos', 'Seno parte do centro; cosseno parte do máximo; extremos $±1$.'],
  ['Calibrar', '$a = {M + m|2}$ e $|b| = {M − m|2}$; $c = 2π ÷ T$.'],
  ['Conferir', 'Teste a lei em um ponto conhecido do enunciado.']
], 'Com as funções trigonométricas fechadas, passamos ao estudo das áreas de figuras planas. Próxima unidade: área de polígonos.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-modelando-com-o-cosseno.html', html: K.deck({
  title: 'Modelando com o cosseno — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 52 · Modelando com o cosseno', slides: a,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['m52-mx', 'm52-mn', 'm52-f'], function(){ var M = +$('m52-mx').value, m = +$('m52-mn').value, f = +$('m52-f').value;
    if(!(f > 0) || !(M > m)){ $('m52-s').innerHTML = ''; $('m52-r').textContent = '—'; $('m52-h').textContent = 'Use máximo maior que o mínimo e frequência positiva.'; return; }
    var A = (M + m) / 2, B = (M - m) / 2, T = 60 / f, k = 2 * Math.PI / T, svg = $('m52-s'), P = plano(svg, 0, 3 * T, Math.floor(m - B * 0.3), Math.ceil(M + B * 0.3), 380, 220, 0);
    curva(svg, P, function(x){ return A + B * Math.cos(k * x); }, 0, 3 * T, Math.floor(m - B * 0.3), Math.ceil(M + B * 0.3), 'var(--primary)');
    $('m52-r').textContent = pt(A, 2) + ' · ' + pt(B, 2) + ' · ' + pt(T, 3) + ' s'; $('m52-h').textContent = 'P(t) = ' + pt(A, 2) + ' + ' + pt(B, 2) + ' · cos(' + pt(k / Math.PI, 3) + 'π t); período T = 60 ÷ ' + pt(f, 1) + ' = ' + pt(T, 3) + ' s (3 ciclos no desenho).'; });`
}) });
pages.push({ out: BASE + 'aula-2-maximos-e-minimos-do-cosseno.html', html: K.deck({
  title: 'Máximos e mínimos com o cosseno — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 53 · Máximos e mínimos', slides: b,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['t53-t'], function(){ var t = +$('t53-t').value; $('t53-tv').textContent = pt(t, 1); var svg = $('t53-s'), P = plano(svg, 0, 24, 0, 5, 380, 230, 6), f = function(x){ return 3 + 1.2 * Math.cos(Math.PI * x / 6); };
    curva(svg, P, f, 0, 24, 0, 5, 'var(--primary)'); el('line', {x1: P.sx(t), y1: P.sy(0), x2: P.sx(t), y2: P.sy(f(t)), stroke: 'var(--decay)', 'stroke-width': 2.4, 'stroke-dasharray': '4 3'}, svg); ponto(svg, P, t, f(t), 'var(--growth)', '');
    $('t53-h').textContent = pt(f(t), 2) + ' m'; $('t53-i').textContent = Math.abs(f(t) - 4.2) < 1e-6 ? 'Maré alta: 4,2 m.' : Math.abs(f(t) - 1.8) < 1e-6 ? 'Maré baixa: 1,8 m.' : 'h(t) = 3 + 1,2 · cos(πt ÷ 6): máxima 4,2 m (0, 12 e 24 h); mínima 1,8 m (6 e 18 h).'; });`
}) });
pages.push({ out: BASE + 'aula-3-problemas-de-seno-e-cosseno.html', html: K.deck({
  title: 'Problemas de seno e cosseno — Matemática 2ª série', brand: BRAND, key: KEY + 'a3', meta: 'Aula 54 · Problemas com funções trigonométricas', slides: c,
  extra: WJS + BIND + T.TJS + String.raw`
  bind(['g54-mx', 'g54-mn', 'g54-h'], function(){ var M = +$('g54-mx').value, m = +$('g54-mn').value, h0 = +$('g54-h').value; $('g54-hv').textContent = h0;
    if(!(M > m)){ $('g54-s').innerHTML = ''; $('g54-r').textContent = '—'; $('g54-i').textContent = 'A máxima precisa ser maior que a mínima.'; return; }
    var a = (M + m) / 2, b = (M - m) / 2, svg = $('g54-s'), lo = Math.floor(m - 2), hi = Math.ceil(M + 2), P = plano(svg, 0, 24, lo, hi, 380, 230, 6), f = function(x){ return a + b * Math.cos(Math.PI * (x - h0) / 12); };
    curva(svg, P, f, 0, 24, lo, hi, 'var(--primary)'); ponto(svg, P, h0, M, 'var(--growth)', 'máx.');
    $('g54-r').textContent = pt(a, 1) + ' + ' + pt(b, 1) + ' · cos(π(h − ' + h0 + ') ÷ 12)'; $('g54-i').textContent = 'a = (máx + mín) ÷ 2 = ' + pt(a, 1) + '; b = (máx − mín) ÷ 2 = ' + pt(b, 1) + '; máxima às ' + h0 + ' h e mínima 12 h depois (ou antes).'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Funções seno e cosseno: modelagem e problemas', accent: 'success', icon: 'wave',
  aulas: [['Aula 52', 'Modelando fenômenos com o cosseno', 'aula-1-modelando-com-o-cosseno.html'], ['Aula 53', 'Máximos e mínimos: marés, coração e luz', 'aula-2-maximos-e-minimos-do-cosseno.html'], ['Aula 54', 'Problemas de seno e cosseno', 'aula-3-problemas-de-seno-e-cosseno.html']],
  pendente: true
}, pages };
