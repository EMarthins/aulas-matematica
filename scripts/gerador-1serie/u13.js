// Unidade 13 — Problemas com função afim: comparar planos, depreciação, comissão e gráficos (aulas 36 e 37)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { graf, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'problemas-com-funcao-afim', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u13', BRAND = 'Problemas com Função Afim', CAP = 'Aulas 36 e 37';
const pages = [];

const LEI = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lei(a, b){ var s = 'y = '; if(Math.abs(a) < 1e-12) return s + pt(b); s += a === 1 ? '' : a === -1 ? '−' : pt(a); s += 'x'; if(b > 1e-12) s += ' + ' + pt(b); else if(b < -1e-12) s += ' − ' + pt(-b); return s; }
  function passo(r){ return r <= 10 ? 1 : r <= 20 ? 2 : r <= 50 ? 5 : r <= 100 ? 10 : r <= 200 ? 20 : r <= 500 ? 50 : r <= 1000 ? 100 : r <= 5000 ? 500 : 1000; }
`;

// ===================== AULA 1: modelar e comparar =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 36', h1: 'Resolvendo problemas: <span style="color:var(--primary);">do texto à função afim</span>',
  sub: 'Aluguel de carros, desvalorização de equipamentos e salários com comissão têm algo em comum: um valor fixo e uma parte que muda de forma constante. Traduzir isso em y = ax + b resolve o problema.',
  badges: [['fixo + variável'], ['comparar duas opções', 'growth'], ['interpretar o resultado', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do enunciado à resposta em quatro passos.', [
  ['Identificar variáveis', 'o que é x e o que é y', 'bulb'],
  ['Fixo e variável', 'b e a no texto', 'link'],
  ['Montar a lei', 'y = ax + b', 'chart'],
  ['Comparar opções', 'igualar duas funções', 'scale'],
  ['Conferir e responder', 'unidades e sentido', 'target']
]));
a.push(objetivosSlide([
  'Traduzir um problema em <strong>$y = ax + b$</strong>, identificando fixo e variável.',
  'Modelar <strong>desvalorização linear</strong> (a negativo) e <strong>comissões</strong> (a positivo).',
  'Comparar <strong>duas funções afins</strong> e achar o ponto em que se igualam.',
  'Conferir <strong>unidades</strong> antes de substituir (por exemplo, m² e não m).'
], 'Dica', 'Sublinhe no texto <strong>o que é pago uma só vez</strong> (b) e <strong>o que muda a cada unidade</strong> (a). Defina $x$ e $y$ com unidades antes de montar a lei.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Duas locadoras, qual escolher?', `
          ${lede('A locadora <strong>X</strong> cobra 100 reais de diária fixa mais 1,30 real por km. A locadora <strong>Y</strong> cobra 70 reais fixos mais 1,50 real por km. Qual é mais barata? <strong>Depende da distância</strong>: Y começa mais barata, mas cresce mais depressa.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Para rodar 100 km em um dia, a locadora Y cobra:', ['170 reais', '200 reais', '220 reais', '230 reais'], 2, '$g(x) = 1,5x + 70$; $g(100) = 150 + 70 = 220$ reais. Já a locadora X cobra $1,3 · 100 + 100 = 230$: em 100 km, Y é mais barata.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Duas funções afins se <strong>igualam</strong> em um único ponto (se tiverem taxas diferentes). Antes dele uma é melhor; depois, a outra.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Explore · comparador de planos', 'Quando as duas opções custam o mesmo?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Plano 1: $y_1 = F_1 + p_1 · x$ · Plano 2: $y_2 = F_2 + p_2 · x$.</li>
                <li><strong>Ponto de igualdade</strong>: $F_1 + p_1 x = F_2 + p_2 x$ ⇒ $x = {F_2 − F_1|p_1 − p_2}$.</li>
                <li>Antes do ponto, vale a opção de <strong>menor fixo</strong>; depois, a de <strong>menor taxa</strong>.</li>
                <li>Se $p_1 = p_2$, as retas são paralelas e nunca se igualam.</li>
              </ul>
            </div>
            ${W.box('Planos 1 e 2', W.row(W.nm('k1-f1', 'Fixo 1', 100, 'any'), W.nm('k1-p1', 'Taxa 1', 1.3, 'any')) + W.row(W.nm('k1-f2', 'Fixo 2', 70, 'any'), W.nm('k1-p2', 'Taxa 2', 1.5, 'any')) + W.nm('k1-x', 'Uso x', 100, 'any') + W.svg('k1-s', '0 0 360 230', '380px') + W.txt('k1-r', 'Mesmo custo em: ') + W.txt('k1-c', 'No uso escolhido: ') + W.hint('k1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Onde as locadoras se igualam', 'X: $f(x) = 1,30x + 100$ e Y: $g(x) = 1,50x + 70$ ($x$ em km). Para que distância os valores são iguais?', [
  ['Iguale as funções', '$1,30x + 100 = 1,50x + 70$.'],
  ['Isole x', '$100 − 70 = 1,50x − 1,30x$ ⇒ $30 = 0,20x$ ⇒ $x = 150$ km.'],
  ['Calcule o valor comum', '$f(150) = 195 + 100 = 295$ reais.']
], 'Em <strong>150 km</strong> as duas cobram <strong>295 reais</strong>. Abaixo disso, Y é mais barata; acima, X.'));

a.push(exemplo('Exemplo resolvido', 'Desvalorização linear', 'Um equipamento custava 90 000 reais novo e, com 4 anos de uso, vale 66 000. A desvalorização é linear. Qual o valor com 7 anos?', [
  ['Variáveis', '$x$ = anos de uso; $V$ = valor. Valor inicial: $b = 90\\ 000$.'],
  ['Taxa', '$a = {66\\ 000 − 90\\ 000|4 − 0} = −6\\ 000$ por ano (negativa: perde valor).'],
  ['Lei e resposta', '$V(x) = −6\\ 000x + 90\\ 000$ e $V(7) = −42\\ 000 + 90\\ 000 = 48\\ 000$.']
], 'Com 7 anos vale <strong>48 000 reais</strong>. O zero da função ($x = 15$) é quando o valor chega a zero.', 'growth'));

a.push(exemplo('Exemplo resolvido', 'Salário com comissão e a unidade certa', 'Um vendedor recebe 400 reais fixos mais 0,60 real por <strong>m²</strong> de tecido vendido. Ele vendeu 500 m de tecido de 1,40 m de largura. Qual o salário?', [
  ['Calcule a área em m²', '$A = 500 · 1,40 = 700$ m².'],
  ['Monte a lei', '$S = 0,60 · A + 400$.'],
  ['Substitua', '$S = 0,60 · 700 + 400 = 420 + 400 = 820$.']
], 'Salário de <strong>820 reais</strong>. Armadilha: usar 500 (metros) no lugar de 700 (m²) daria 700.', 'growth'));

a.push(pratique('Dois táxis', 'O táxi A cobra 5 reais fixos mais 2,50 por km; o táxi B, 8 reais fixos mais 2 por km. Para qual distância os dois cobram o mesmo valor?',
  ['3 km', '5 km', '6 km', '8 km', '12 km'], 2,
  '$5 + 2,5x = 8 + 2x$ ⇒ $0,5x = 3$ ⇒ $x = 6$ km. (Valor: $5 + 15 = 20$ reais.) Acima de 6 km, B é mais barato. <strong>Alternativa C.</strong>'));
a.push(pratique('Equipamento que perde valor', 'Com $V(x) = 90\\ 000 − 6\\ 000x$ (reais, $x$ em anos), o valor do equipamento chega a zero após:',
  ['10 anos', '12 anos', '15 anos', '18 anos', '20 anos'], 2,
  '$90\\ 000 − 6\\ 000x = 0$ ⇒ $x = 15$ anos. <strong>Alternativa C.</strong> (É o zero da função.)', '', 'growth'));
a.push(estiloEnem('Duas máquinas', 'Um fabricante tem duas máquinas. A máquina A custa 800 reais por mês fixos mais 2 reais por peça; a máquina B, 500 reais fixos mais 5 reais por peça. A partir de quantas peças por mês a máquina A passa a ser <strong>mais barata</strong> que a B?',
  ['mais de 50', 'mais de 100', 'mais de 150', 'mais de 200', 'mais de 300'], 1,
  'Igualdade: $800 + 2x = 500 + 5x$ ⇒ $300 = 3x$ ⇒ $x = 100$. A tem fixo maior e taxa menor: é mais barata <strong>acima</strong> de 100 peças. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a modelagem engana', [
  ['Multiplicar o valor fixo', 'O fixo é pago <strong>uma vez</strong>. Só a parte variável é multiplicada por $x$.'],
  ['Sinal da taxa', 'Perda de valor ou consumo: $a$ <strong>negativo</strong>.'],
  ['Unidade diferente', 'Se a taxa é por m², converta metros em m² antes de substituir.'],
  ['Escolher a opção sem comparar', 'A melhor opção depende do uso: ache o ponto de igualdade.']
]));
a.push(quiz([
  { q: 'Fixo de 30 reais e 45 reais por hora. Para 3 horas o total é:', o: ['135 reais', '165 reais', '225 reais', '75 reais'], a: 1 },
  { q: 'Uma máquina perde 6 000 reais por ano. Na lei $V = a x + b$, o coeficiente $a$ é:', o: ['6 000', '−6 000', '0,6', '−0,6'], a: 1 },
  { q: '$5 + 2,5x = 8 + 2x$ tem solução:', o: ['x = 3', 'x = 6', 'x = 1,5', 'x = 13'], a: 1 },
  { q: 'Se duas funções afins têm a mesma taxa e fixos diferentes, elas:', o: ['se igualam em x = 0', 'se igualam em um ponto', 'nunca se igualam', 'são a mesma função'], a: 2 }
]));
a.push(fechamento([
  ['Modelagem', 'Fixo é b; o que muda por unidade é a.'],
  ['Comparação', 'Iguale as leis e ache x; confira antes e depois.'],
  ['Conferência', 'Unidades certas e sentido do resultado.']
], 'Problema de função afim: variáveis, lei, conta e interpretação.'));

pages.push({ out: BASE + 'aula-1-modelando-e-comparando.html', html: K.deck({
  title: 'Problemas com função afim: modelar e comparar — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 36 · Modelar e comparar', slides: a,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['k1-f1', 'k1-p1', 'k1-f2', 'k1-p2', 'k1-x'], function(){ var F1 = +$('k1-f1').value, p1 = +$('k1-p1').value, F2 = +$('k1-f2').value, p2 = +$('k1-p2').value, x = +$('k1-x').value;
    if(![F1, p1, F2, p2, x].every(isFinite) || x < 0){ $('k1-r').textContent = '—'; $('k1-c').textContent = ''; return; }
    var xs = p1 !== p2 ? (F2 - F1) / (p1 - p2) : null, xmax = Math.max(xs !== null && xs > 0 ? xs * 1.6 : 10, x * 1.2, 10);
    var ymax = Math.max(F1 + p1 * xmax, F2 + p2 * xmax, F1, F2) * 1.05, P = plano2($('k1-s'), 0, xmax, 0, ymax, 360, 230, passo(xmax / 6) , passo(ymax / 6));
    linha($('k1-s'), P, [[0, F1], [xmax, F1 + p1 * xmax]], 'var(--primary)'); linha($('k1-s'), P, [[0, F2], [xmax, F2 + p2 * xmax]], 'var(--growth)');
    if(xs !== null && xs > 0) bola($('k1-s'), P, xs, F1 + p1 * xs, false, 'var(--decay)');
    var c1 = F1 + p1 * x, c2 = F2 + p2 * x; $('k1-c').textContent = 'plano 1 = ' + pt(c1, 2) + ' · plano 2 = ' + pt(c2, 2) + (c1 === c2 ? ' (iguais)' : c1 < c2 ? ' → plano 1 é mais barato' : ' → plano 2 é mais barato');
    if(xs === null){ $('k1-r').textContent = F1 === F2 ? 'as duas retas coincidem' : 'nunca (retas paralelas)'; $('k1-h').textContent = 'Taxas iguais: só o fixo diferencia.'; }
    else if(xs < 0){ $('k1-r').textContent = 'x = ' + pt(xs, 2) + ' (fora do uso real)'; $('k1-h').textContent = 'O cruzamento fica em x negativo: uma opção é sempre melhor no uso real.'; }
    else { $('k1-r').textContent = 'x = ' + pt(xs, 2) + ' e valor ' + pt(F1 + p1 * xs, 2); $('k1-h').textContent = 'Ponto laranja: onde os dois planos custam o mesmo (azul = plano 1, verde = plano 2).'; } });`
}) });

// ===================== AULA 2: ler dados em gráficos =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 37', h1: 'Gráficos de problemas: <span style="color:var(--growth);">projeção, fatura e interseção</span>',
  sub: 'Muitos problemas já vêm com o gráfico: uma projeção de população, uma fatura de gás, uma reta que cruza o eixo. Basta ler dois pontos e escrever a lei.',
  badges: [['dois pontos'], ['valor inicial b', 'growth'], ['zero = eixo x', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do gráfico ao resultado.', [
  ['Ler dois pontos', 'coordenadas no gráfico', 'bulb'],
  ['Taxa e valor inicial', 'a = Δy ÷ Δx, b onde corta y', 'chart'],
  ['Projeção', 'valor em um x não desenhado', 'link'],
  ['Zero da função', 'onde a reta corta o eixo x', 'target'],
  ['Duas retas', 'cruzamento e comparação', 'scale']
]));
b.push(objetivosSlide([
  'Obter a <strong>lei</strong> de uma função afim a partir de dois pontos de um <strong>gráfico</strong>.',
  'Fazer <strong>projeções</strong> para valores de $x$ fora do desenhado.',
  'Encontrar o <strong>ponto em que a reta corta o eixo $x$</strong> (zero).',
  'Resolver problemas com <strong>duas retas</strong> (igualdade de volumes, por exemplo).'
], 'Dica', 'Leia no gráfico <strong>dois pontos bem marcados</strong> (de preferência um deles com $x = 0$). Se o gráfico corta o eixo $y$, aquele ponto já dá o $b$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quanto custa o gás?', `
          ${lede('A conta de gás de uma residência tem uma <strong>taxa fixa</strong> e um valor proporcional ao consumo em m³. O gráfico é uma reta que passa por $(0, 12)$ e $(5, 42)$.')}
          <div class="grid2" style="margin-top:6px;">
            ${graf({ xmin: 0, xmax: 12, ymin: 0, ymax: 80, px: 2, py: 20, series: [{ pts: [[0, 12], [5, 42]], bolas: [[0, false], [1, false]] }], marcas: [[0, 12, '(0, 12)', 10, -6], [5, 42, '(5, 42)', 8, 18]], max: '340px' })}
            ${mini('A taxa por m³ e o valor da fatura para 9 m³ são, respectivamente:', ['6 reais por m³ e 66 reais', '5 reais por m³ e 57 reais', '6 reais por m³ e 54 reais', '12 reais por m³ e 120 reais'], 0, '$a = {42 − 12|5 − 0} = 6$ reais por m³ e $b = 12$ (taxa fixa). $y = 6x + 12$; para $x = 9$: $54 + 12 = 66$ reais.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Explore · leitor de reta', 'Dois pontos, uma lei, uma previsão', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Informe dois pontos lidos no gráfico e o $x$ da previsão.</li>
                <li>A taxa é $a = Δy ÷ Δx$, o valor inicial é $b = y_1 − a · x_1$.</li>
                <li>O <strong>zero</strong> é $x = −b ÷ a$: onde a reta corta o eixo $x$.</li>
                <li>Pontos fora do desenho continuam na mesma reta: a lei vale para todos.</li>
              </ul>
            </div>
            ${W.box('Leitor de reta', W.row(W.nm('v1-x1', 'x₁', 0, 'any'), W.nm('v1-y1', 'y₁', 12, 'any')) + W.row(W.nm('v1-x2', 'x₂', 5, 'any'), W.nm('v1-y2', 'y₂', 42, 'any')) + W.nm('v1-x', 'Previsão para x', 9, 'any') + W.svg('v1-s', '0 0 360 230', '380px') + W.txt('v1-l', 'Lei: ') + W.txt('v1-r', 'Valor previsto: ') + W.txt('v1-z', 'Zero da função: ') + W.hint('v1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Projeção de população', 'O gráfico de uma projeção é uma reta que passa por $(0, 12\\ 000)$ e $(10, 15\\ 000)$, com $x$ em anos. Qual a população prevista para 25 anos?', [
  ['Taxa', '$a = {15\\ 000 − 12\\ 000|10 − 0} = 300$ habitantes por ano.'],
  ['Lei', '$b = 12\\ 000$ (ponto em $x = 0$): $P(x) = 300x + 12\\ 000$.'],
  ['Projete', '$P(25) = 7\\ 500 + 12\\ 000 = 19\\ 500$.']
], 'Em 25 anos: <strong>19 500 habitantes</strong>.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Onde a reta corta o eixo x', 'Uma reta $r$ passa pelos pontos $(4, 5)$ e $(0, −3)$ e intersecta o eixo das abscissas em $P$. Qual a abscissa de $P$?', [
  ['Coeficiente linear', 'A reta corta o eixo $y$ em $(0, −3)$: $b = −3$.'],
  ['Taxa', '$a = {5 − (−3)|4 − 0} = 2$. Lei: $y = 2x − 3$.'],
  ['P tem y = 0', '$2x − 3 = 0$ ⇒ $x = 1,5$.']
], '$P = (1,5; 0)$: a abscissa de $P$ é <strong>1,5</strong>.', 'growth'));
b.push(sl('Figura', 'A reta r e o ponto P', `
          <div class="grid2">
            ${graf({ xmin: -2, xmax: 6, ymin: -5, ymax: 7, px: 1, py: 1, series: [{ pts: [[-1, -5], [5, 7]] }], marcas: [[0, -3, '(0, −3)', 8, 16], [4, 5, '(4, 5)', -8, -6], [1.5, 0, 'P', 8, -8]], max: '360px' })}
            <div>
              ${callout('Zero da função', 'O ponto $P$ é onde $y = 0$: a <strong>raiz</strong> $x = 1,5$.', 'success')}
              ${callout('Conferência', '$2 · 4 − 3 = 5$ ✓ e $2 · 0 − 3 = −3$ ✓: a lei passa pelos dois pontos dados.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(pratique('Serviço técnico', 'Um técnico cobra uma taxa fixa de visita mais um valor por hora. Por 2 horas cobra 120 reais e por 5 horas, 255 reais. Quanto cobra por 8 horas?',
  ['330 reais', '360 reais', '375 reais', '390 reais', '420 reais'], 3,
  '$a = {255 − 120|5 − 2} = 45$ por hora. $120 = 45 · 2 + b$ ⇒ $b = 30$. Para 8 h: $45 · 8 + 30 = 390$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(pratique('Os dois reservatórios', 'O reservatório A tem $V_A = 300 + 4t$ litros (enchendo) e o B tem $V_B = 2\\ 100 − 2t$ litros (esvaziando), com $t$ em minutos. Os volumes são iguais em:',
  ['t = 200 min', 't = 250 min', 't = 300 min', 't = 350 min', 't = 400 min'], 2,
  '$300 + 4t = 2\\ 100 − 2t$ ⇒ $6t = 1\\ 800$ ⇒ $t = 300$ min. O volume comum é $300 + 1\\ 200 = 1\\ 500$ litros. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(estiloEnem('Projeção de vendas no gráfico', 'O gráfico de vendas (milhares de itens) de uma loja é uma reta que passa por $(1, 25)$ e $(5, 65)$, em que $x$ é o ano. Mantida a tendência, a projeção para o ano 7 é:',
  ['75 mil', '80 mil', '85 mil', '90 mil', '95 mil'], 2,
  '$a = {65 − 25|5 − 1} = 10$; $25 = 10 · 1 + b$ ⇒ $b = 15$. $V(7) = 70 + 15 = 85$ mil. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a leitura de gráfico engana', [
  ['Ler pontos “no olho”', 'Use pontos <strong>bem marcados</strong> (coordenadas inteiras) e confira um terceiro.'],
  ['Trocar x e y na previsão', 'Para “o valor em $x = 9$”, substitua <strong>x</strong>; para “quando vale 66”, resolva <strong>y = 66</strong>.'],
  ['Esquecer a unidade no eixo', 'Milhares, minutos ou anos? A resposta herda a unidade do eixo.'],
  ['Zero no lugar do corte em y', 'Corte em $y$: $f(0)$. Corte em $x$: $f(x) = 0$.']
]));
b.push(quiz([
  { q: 'Uma reta passa por $(0, 12)$ e $(5, 42)$. Seu coeficiente angular é:', o: ['5', '6', '30', '12'], a: 1 },
  { q: 'Em $y = 2x − 3$, o ponto em que a reta corta o eixo $x$ tem abscissa:', o: ['−3', '1,5', '3', '−1,5'], a: 1 },
  { q: 'Se $V_A = 300 + 4t$ e $V_B = 2\\ 100 − 2t$, os volumes são iguais quando:', o: ['t = 100', 't = 300', 't = 500', 't = 1 800'], a: 1 },
  { q: 'A lei de uma reta por $(0, 3)$ e $(2, 7)$ é:', o: ['y = 2x + 3', 'y = 3x + 2', 'y = 4x + 3', 'y = x + 5'], a: 0 }
]));
b.push(fechamento([
  ['Do gráfico à lei', 'Dois pontos dão a e b; o corte em y já é b.'],
  ['Projeção', 'Substitua x na lei; para achar x, resolva a equação.'],
  ['Duas retas', 'Iguale as leis para achar o cruzamento.']
], 'Leia, calcule a lei, projete e confira.'));

pages.push({ out: BASE + 'aula-2-problemas-com-graficos.html', html: K.deck({
  title: 'Problemas com gráficos de função afim — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 37 · Problemas com gráficos', slides: b,
  extra: WJS + BIND + PL + LEI + String.raw`
  bind(['v1-x1', 'v1-y1', 'v1-x2', 'v1-y2', 'v1-x'], function(){ var x1 = +$('v1-x1').value, y1 = +$('v1-y1').value, x2 = +$('v1-x2').value, y2 = +$('v1-y2').value, x = +$('v1-x').value;
    if(![x1, y1, x2, y2, x].every(isFinite)){ $('v1-l').textContent = '—'; return; }
    if(x1 === x2){ $('v1-l').textContent = 'x₁ e x₂ iguais: reta vertical, não é função'; $('v1-r').textContent = ''; $('v1-z').textContent = ''; return; }
    var a = (y2 - y1) / (x2 - x1), b = y1 - a * x1, z = a !== 0 ? -b / a : null;
    var xs = [x1, x2, x, 0].concat(z !== null ? [z] : []), ys = [y1, y2, a * x + b, 0, b], xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs), ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys);
    var dx = (xmax - xmin) * 0.1 + 1, dy = (ymax - ymin) * 0.1 + 1; xmin -= dx; xmax += dx; ymin -= dy; ymax += dy;
    var P = plano2($('v1-s'), xmin, xmax, ymin, ymax, 360, 230, passo((xmax - xmin) / 6), passo((ymax - ymin) / 6));
    linha($('v1-s'), P, [[xmin, a * xmin + b], [xmax, a * xmax + b]]); bola($('v1-s'), P, x1, y1, false, 'var(--decay)'); bola($('v1-s'), P, x2, y2, false, 'var(--decay)'); bola($('v1-s'), P, x, a * x + b, false, 'var(--danger)'); if(z !== null) bola($('v1-s'), P, z, 0, false, 'var(--growth)');
    $('v1-l').textContent = lei(a, b); $('v1-r').textContent = 'y(' + pt(x) + ') = ' + pt(a * x + b, 3); $('v1-z').textContent = z === null ? 'sem zero (a = 0)' : 'x = ' + pt(z, 3);
    $('v1-h').textContent = 'Pontos laranja: os dados. Vermelho: a previsão. Verde: o zero (onde corta o eixo x).'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Problemas com função afim: <span>modelar, comparar e ler gráficos</span>',
  lede: 'Fixo e variável, desvalorização, comissão, comparação de planos e leitura de gráficos: como transformar cada situação em y = ax + b e responder.',
  badges: ['fixo = b', 'taxa = a', 'igualar para comparar'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Modelagem', 'Texto → lei', 'chart', 'primary', li(['Defina x e y (com unidades).', 'Fixo é b; por unidade é a.', 'Monte y = ax + b.'])],
    ['Desvalorização', 'a negativo', 'link', 'decay', p('$V(x) = −6\\ 000x + 90\\ 000$') + call('Zero', 'x = 15: valor chega a zero.', 'success')],
    ['Comissão', 'Fixo + por unidade', 'target', 'growth', p('$S = 0,60 · A + 400$') + call('Atenção', 'Converta m em m² antes.', 'danger')],
    ['Comparar planos', 'Igualar leis', 'scale', 'success', p('$x = {F_2 − F_1|p_1 − p_2}$') + call('Exemplo', '1,3x + 100 = 1,5x + 70: x = 150.', 'success')],
    ['Gráfico → lei', 'Dois pontos', 'up', 'primary', p('$a = Δy ÷ Δx$ · $b = f(0)$') + call('Exemplo', '(0,12) e (5,42): y = 6x + 12.', 'success')],
    ['Zero e cruzamentos', 'f(x) = 0 e f = g', 'check', 'growth', li(['Zero: resolva ax + b = 0.', 'Cruzamento: iguale as leis.', 'Interprete na unidade do problema.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Multiplicar o valor fixo.', 'Esquecer o sinal negativo na perda.', 'Usar metros onde pede m².', 'Escolher a opção sem comparar.', 'Ler pontos do gráfico sem conferir.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const gq4 = graf({ xmin: 0, xmax: 12, ymin: 0, ymax: 80, px: 2, py: 20, series: [{ pts: [[0, 12], [5, 42]], bolas: [[0, false], [1, false]] }], marcas: [[0, 12, '(0, 12)', 10, -6], [5, 42, '(5, 42)', 8, 18]], max: '320px' });
const gq5 = graf({ xmin: -2, xmax: 6, ymin: -5, ymax: 7, px: 1, py: 1, series: [{ pts: [[-1, -5], [5, 7]] }], marcas: [[0, -3, '(0, −3)', 8, 16], [4, 5, '(4, 5)', -8, -6]], max: '320px' });
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Problemas com função afim <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: locadoras, depreciação, comissão, gráfico de gás e reta no plano.',
  final: 'Defina as variáveis, monte a lei, confira a unidade e interprete o resultado.',
  questions: [
    { badge: 'Estilo ENEM · locadoras', text: 'A locadora X cobra 90 reais de diária fixa mais 1,10 real por km. A locadora Y cobra 60 reais fixos mais 1,40 real por km.', cmd: 'Para qual distância diária as duas cobram o mesmo valor?', opts: ['75 km', '100 km', '120 km', '150 km', '200 km'], a: 1,
      sol: '<p>$90 + 1,1x = 60 + 1,4x$ ⇒ $30 = 0,3x$ ⇒ $x = 100$ km (valor $200$ reais).</p>' },
    { badge: 'Estilo ENEM · depreciação', text: 'Uma máquina de 60 000 reais perde valor de forma linear e vale 36 000 reais após 4 anos.', cmd: 'O valor da máquina após 7 anos é:', opts: ['12 000', '15 000', '18 000', '20 000', '24 000'], a: 2,
      sol: '<p>$a = {36\\ 000 − 60\\ 000|4} = −6\\ 000$ por ano. $V(x) = 60\\ 000 − 6\\ 000x$; $V(7) = 60\\ 000 − 42\\ 000 = 18\\ 000$ reais.</p>' },
    { badge: 'Estilo ENEM · comissão', text: 'Um vendedor recebe 500 reais fixos mais 0,40 real por metro quadrado de tecido vendido. Ele vendeu 800 m de tecido com 1,5 m de largura.', cmd: 'O salário dele foi, em reais:', opts: ['500', '800', '980', '1 140', '1 700'], a: 2,
      sol: '<p>Área: $800 · 1,5 = 1\\ 200$ m². Salário: $500 + 0,4 · 1\\ 200 = 500 + 480 = 980$ reais.</p>' },
    { badge: 'Estilo ENEM · gráfico', text: 'O gráfico mostra a fatura de gás (reais) em função do consumo (m³): uma reta que passa por $(0, 12)$ e $(5, 42)$.' + gq4, cmd: 'Um consumo de 9 m³ gera uma fatura de:', opts: ['54 reais', '60 reais', '66 reais', '72 reais', '78 reais'], a: 2,
      sol: '<p>$a = {42 − 12|5} = 6$ reais por m³; $b = 12$. $y = 6 · 9 + 12 = 66$ reais.</p>' },
    { badge: 'Estilo ENEM · eixo x', text: 'A reta $r$ passa pelos pontos $(4, 5)$ e $(0, −3)$.' + gq5, cmd: 'A abscissa do ponto em que $r$ corta o eixo $x$ é:', opts: ['1', '1,5', '2', '2,5', '3'], a: 1,
      sol: '<p>$a = {5 + 3|4} = 2$, $b = −3$: $y = 2x − 3$. Em $y = 0$: $x = 1,5$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive de <span style="color:var(--decay);">problemas</span>',
  subtitle: 'Cada resolução esconde um erro de modelagem. Ache a linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Fixo é pago uma vez, a unidade tem que casar, perda tem a negativo e igualdade se resolve dividindo corretamente.',
    casos: [
      { titulo: 'Fixo multiplicado', enunciado: 'Um serviço cobra 30 reais fixos mais 45 reais por hora. Quanto custa um serviço de 3 horas?', linhas: ['O valor fixo é pago uma vez: 30 reais.', 'A parte variável é 45 · 3 = 135 reais.', 'O total seria 30 + 135 = 165 reais.', 'Como são 3 horas, multiplico o fixo também: 30 · 3 + 135 = 225 reais.'], erro: 3, porque: 'O valor <strong>fixo é pago uma só vez</strong>: o total é $30 + 135 = 165$ reais.' },
      { titulo: 'Metros e m²', enunciado: 'Salário = 400 reais fixos mais 0,60 por m² vendido. Foram vendidos 500 m de tecido de 1,40 m de largura.', linhas: ['A área é comprimento × largura.', 'A = 500 · 1,40 = 700 m².', 'Salário = 400 + 0,60 · 500 = 700 reais.', 'Logo o vendedor recebeu 700 reais.'], erro: 2, porque: 'A taxa é por <strong>m²</strong>: use $700$, não $500$. Salário: $400 + 0,60 · 700 = 820$ reais.' },
      { titulo: 'Igualando táxis', enunciado: 'O táxi A cobra 5 + 2,5x e o táxi B, 8 + 2x. Para qual distância custam o mesmo?', linhas: ['Igualamos: 5 + 2,5x = 8 + 2x.', 'Passamos os termos: 2,5x − 2x = 8 − 5.', 'Simplificando: 0,5x = 3.', 'Então x = 3 · 0,5 = 1,5 km.'], erro: 3, porque: 'Para isolar $x$ em $0,5x = 3$ <strong>divida</strong> por $0,5$: $x = 3 ÷ 0,5 = 6$ km.' },
      { titulo: 'Sinal da taxa', enunciado: 'Um equipamento de 90 000 reais perde 6 000 reais por ano. Qual o valor com 7 anos?', linhas: ['O valor inicial, 90 000, é o termo b.', 'O valor diminui 6 000 por ano: a = 6 000.', 'A lei é V(x) = 6 000x + 90 000.', 'Em x = 7: V(7) = 42 000 + 90 000 = 132 000.'], erro: 1, porque: 'Se o valor <strong>diminui</strong>, $a = −6\\ 000$. Lei: $V = −6\\ 000x + 90\\ 000$ e $V(7) = 48\\ 000$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Problemas com função afim: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de modelagem e cálculo. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: custo, igualdade, depreciação, comissão e zero.',
  problems: [
    { tag: 'Custo', q: 'A locadora A cobra $100 + 1,30x$ reais ($x$ em km). Quanto custam 200 km (em reais)?', a: 360, ph: 'reais', hint: '1,3 · 200 + 100.', sol: '<p>$260 + 100 = 360$ reais.</p>' },
    { tag: 'Igualdade', q: 'O táxi A cobra $5 + 2,5x$ e o B, $8 + 2x$. Em quantos km os valores são iguais?', a: 6, ph: 'km', hint: 'Resolva 5 + 2,5x = 8 + 2x.', sol: '<p>$0,5x = 3$ ⇒ $x = 6$ km.</p>' },
    { tag: 'Depreciação', q: 'Um equipamento vale $V = 90\\ 000 − 6\\ 000x$ (reais, $x$ em anos). Quanto vale com 7 anos?', a: 48000, ph: 'reais', hint: 'Substitua x = 7.', sol: '<p>$90\\ 000 − 42\\ 000 = 48\\ 000$.</p>' },
    { tag: 'Comissão', q: 'Salário de 400 reais fixos mais 0,60 por m². Foram vendidos 500 m de tecido de 1,40 m de largura. Qual o salário (reais)?', a: 820, ph: 'reais', hint: 'Área = 500 · 1,40.', sol: '<p>$A = 700$ m²; $400 + 0,6 · 700 = 820$.</p>' },
    { tag: 'Zero', q: 'Uma reta passa por $(4, 5)$ e $(0, −3)$. Qual a abscissa do ponto em que ela corta o eixo $x$?', a: 1.5, ph: 'x', hint: 'Lei: y = 2x − 3.', sol: '<p>$2x − 3 = 0$ ⇒ $x = 1,5$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Problemas com Função Afim', accent: 'primary', icon: 'briefcase',
  aulas: [['Aula 36', 'Modelar e comparar', 'aula-1-modelando-e-comparando.html'], ['Aula 37', 'Problemas com gráficos', 'aula-2-problemas-com-graficos.html']],
  enem: 'Problemas com função afim no estilo ENEM', cria: 'Detetive de problemas', pratica: 'Problemas com função afim: trilha de desafios'
}, pages };
