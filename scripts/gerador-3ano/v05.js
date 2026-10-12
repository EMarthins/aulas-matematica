// Unidade v05 — Logaritmo: definição (aula 12 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'logaritmo-definicao', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v05', BRAND = 'Logaritmo: Definição', CAP = 'Aula 12';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 12', h1: 'Logaritmo: <span style="color:var(--primary);">a pergunta pelo expoente</span>',
  sub: 'A escala Richter mede terremotos com logaritmos. Para entender a fórmula, comece pela pergunta: a que expoente devo elevar a base para obter este número?',
  badges: [['log_a b = x'], ['aˣ = b', 'growth'], ['a > 0, a ≠ 1, b > 0', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da escala Richter ao expoente.', [
  ['Terremotos', 'M = log A − log A₀', 'bulb'],
  ['Definição', 'log_a b = x ⇔ aˣ = b', 'target'],
  ['Nomes', 'base, logaritmando e logaritmo', 'chart'],
  ['Calcular', 'escrever o número como potência', 'link'],
  ['Equações simples', 'achar a base ou o logaritmando', 'scale']
]));
a.push(objetivosSlide([
  'Compreender a <strong>definição</strong>: $log_{a} b = x$ significa $a^{x} = b$.',
  'Identificar <strong>base</strong>, <strong>logaritmando</strong> e <strong>logaritmo</strong>.',
  'Calcular logaritmos escrevendo o logaritmando como <strong>potência da base</strong>.',
  'Resolver equações simples como $log_{x} 25 = 2$ e $log_{3} x = 4$.'
], 'Dica', 'Leia $log_{a} b$ como a pergunta: <strong>“a base $a$ elevada a quanto dá $b$?”</strong>. A resposta é o logaritmo.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A escala Richter', `
          ${lede('Sismógrafos medem a <strong>amplitude</strong> $A$ do abalo. A magnitude é $M = log A − log A_0 = log {A|A_0}$, em que $A_0$ é uma amplitude de referência. Aqui $log$ sem base indica <strong>base 10</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['A ÷ A₀', 'Magnitude M'], [['10', '1'], ['100', '2'], ['1 000', '3'], ['1 000 000', '6']])}
            ${mini('Um terremoto com amplitude $100\\ 000$ vezes a de referência tem magnitude:', ['2', '5', '10', '100 000'], 1, '$M = log\\ 100\\ 000 = 5$, pois $10^{5} = 100\\ 000$. Cada unidade a mais de magnitude multiplica a amplitude por 10.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'log_a b = x quando aˣ = b', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Definição:</strong> para $a > 0$, $a ≠ 1$ e $b > 0$: <strong>$log_{a} b = x ⇔ a^{x} = b$</strong>.</li>
                <li>$a$ é a <strong>base</strong>, $b$ é o <strong>logaritmando</strong> e $x$ é o <strong>logaritmo</strong>.</li>
                <li>O logaritmo é um <strong>expoente</strong>: $log_{2} 8 = 3$ porque $2^{3} = 8$.</li>
                <li>Sem base escrita, $log$ é <strong>base 10</strong> (logaritmo decimal).</li>
                <li>Logaritmo e exponencial são operações <strong>inversas</strong>.</li>
              </ul>
            </div>
            ${W.box('Calcule log_a b', W.row(W.nm('l1-a', 'base a', 2, 'any'), W.nm('l1-b', 'logaritmando b', 8, 'any')) + W.txt('l1-x', 'Logaritmo: ') + W.txt('l1-c', 'Conferência: ') + W.hint('l1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Logaritmos para decorar', `
          ${tbl(['Logaritmo', 'Pergunta', 'Valor'], [['$log_{2} 8$', '2 elevado a quanto dá 8?', '$3$'], ['$log_{3} 81$', '3 elevado a quanto dá 81?', '$4$'], ['$log_{10} 0,001$', '10 elevado a quanto dá 0,001?', '$−3$'], ['$log_{5} {1|25}$', '5 elevado a quanto dá 1/25?', '$−2$'], ['$log_{4} 2$', '4 elevado a quanto dá 2?', '$1 ÷ 2$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Forma logarítmica ⇄ exponencial', '$log_{2} 8 = 3$ ⇔ $2^{3} = 8$. Sempre dá para trocar de forma.', 'success')}
            ${callout('Logaritmo pode ser negativo', 'Se o logaritmando é menor que 1 (e a base maior que 1), o expoente é negativo.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Potência da base', 'Calcule $log_{2} 32$ e $log_{3} {1|27}$.', [
  ['Primeiro', '$2^{x} = 32 = 2^{5}$ ⇒ $x = 5$.'],
  ['Segundo', '$3^{x} = {1|27} = 3^{−3}$ ⇒ $x = −3$.']
], '$log_{2} 32 = 5$ e $log_{3} {1|27} = −3$.'));
a.push(exemplo('Exemplo resolvido', 'Expoente fracionário', 'Calcule $log_{4} 8$.', [
  ['Equação', '$4^{x} = 8$.'],
  ['Base 2', '$(2^{2})^{x} = 2^{3}$ ⇒ $2^{2x} = 2^{3}$.'],
  ['Expoentes', '$2x = 3$ ⇒ $x = {3|2}$.']
], '$log_{4} 8 = {3|2} = 1,5$. Conferindo: $4^{1,5} = 2^{3} = 8$ ✓.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Base entre 0 e 1', 'Calcule $log_{1÷2} 16$.', [
  ['Equação', '$({1|2})^{x} = 16$.'],
  ['Base 2', '$2^{−x} = 2^{4}$.'],
  ['Expoentes', '$−x = 4$ ⇒ $x = −4$.']
], '$log_{1÷2} 16 = −4$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Achar a base ou o logaritmando', 'Resolva $log_{x} 25 = 2$ e $log_{3} x = 4$.', [
  ['Primeira', '$x^{2} = 25$ ⇒ $x = 5$ ou $x = −5$; a base precisa ser positiva: $x = 5$.'],
  ['Segunda', '$3^{4} = x$ ⇒ $x = 81$.'],
  ['Conferência', '$5^{2} = 25$ ✓ e $3^{4} = 81$ ✓.']
], '$x = 5$ e $x = 81$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Magnitude de um terremoto', 'Um abalo tem amplitude $10^{7}$ vezes a de referência. Qual a magnitude?', [
  ['Fórmula', '$M = log {A|A_0}$.'],
  ['Substitua', '$M = log\\ 10^{7}$.'],
  ['Definição', '$10^{x} = 10^{7}$ ⇒ $x = 7$.']
], 'Magnitude <strong>7</strong>. Um abalo de magnitude 7 tem amplitude 100 vezes a de um de magnitude 5.', 'growth'));

a.push(pratique('Calcule', 'O valor de $log_{2} 64$ é:',
  ['5', '6', '7', '8', '32'], 1,
  '$2^{6} = 64$ ⇒ $log_{2} 64 = 6$. <strong>Alternativa B.</strong>'));
a.push(pratique('Logaritmo negativo', 'O valor de $log_{5} {1|5}$ é:',
  ['−5', '−1', '0', '1', '5'], 1,
  '$5^{−1} = {1|5}$ ⇒ $log_{5} {1|5} = −1$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Terremotos', 'A magnitude de um terremoto é $M = log {A|A_0}$. Um terremoto de magnitude 6 tem amplitude $A$ igual a quantas vezes $A_0$?',
  ['6', '60', '10 000', '1 000 000', '6 000 000'], 3,
  '$6 = log {A|A_0}$ ⇒ ${A|A_0} = 10^{6} = 1\\ 000\\ 000$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o logaritmo engana', [
  ['Confundir base e logaritmando', 'Em $log_{2} 8$, a base é 2 e o logaritmando é 8: a resposta é <strong>3</strong>, e não $2^{8}$ nem $8^{2}$.'],
  ['Esquecer que o resultado é expoente', 'O logaritmo é o expoente da base; verifique elevando a base a ele.'],
  ['Aceitar base negativa', 'Em $log_{x} 25 = 2$, $x = −5$ não serve: a base deve ser positiva.'],
  ['Achar que log 1000 = 1000', '$log\\ 1\\ 000 = 3$, pois $10^{3} = 1\\ 000$.']
]));
a.push(quiz([
  { q: '$log_{3} 9 = x$ equivale a:', o: ['$x^{3} = 9$', '$3^{x} = 9$', '$9^{x} = 3$', '$3 · x = 9$'], a: 1 },
  { q: 'Na expressão $log_{5} 125 = 3$, o logaritmando é:', o: ['5', '125', '3', '15'], a: 1 },
  { q: '$log\\ 100$ (base 10) vale:', o: ['1', '2', '10', '100'], a: 1 },
  { q: '$log_{2} 1$ vale:', o: ['0', '1', '2', 'não existe'], a: 0 }
]));
a.push(fechamento([
  ['Definição', '$log_{a} b = x ⇔ a^{x} = b$.'],
  ['Papéis', 'Base $a$, logaritmando $b$, logaritmo $x$.'],
  ['Método', 'Escreva $b$ como potência de $a$.']
], 'O logaritmo é um expoente: pergunte sempre “a base elevada a quanto?”.'));

pages.push({ out: BASE + 'aula-1-definicao-de-logaritmo.html', html: K.deck({
  title: 'Logaritmo: definição — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 12 · Definição de logaritmo', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['l1-a', 'l1-b'], function(){ var a = +$('l1-a').value, b = +$('l1-b').value;
    if(![a, b].every(isFinite) || a <= 0 || a === 1 || b <= 0){ $('l1-x').textContent = '—'; $('l1-c').textContent = '—'; $('l1-h').textContent = (a <= 0 || a === 1) ? 'Base inválida: a > 0 e a ≠ 1.' : 'Logaritmando inválido: b > 0.'; return; }
    var x = Math.log(b) / Math.log(a), xr = Math.round(x * 1e6) / 1e6;
    $('l1-x').textContent = 'log_' + pt(a) + ' ' + pt(b) + ' = ' + pt(xr, 4);
    $('l1-c').textContent = pt(a) + '^' + pt(xr, 4) + ' = ' + pt(Math.pow(a, xr), 4);
    $('l1-h').textContent = Math.abs(xr - Math.round(xr)) < 1e-9 ? 'Resultado inteiro: ' + pt(b) + ' é a potência ' + pt(Math.round(xr)) + ' da base.' : 'Resultado não inteiro: ' + pt(b) + ' não é potência inteira de ' + pt(a) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Logaritmo: <span>a definição como expoente</span>',
  lede: 'log_a b = x quando a^x = b. O logaritmo responde a que expoente devemos elevar a base para obter o logaritmando; é a operação inversa da potenciação.',
  badges: ['log_a b = x', 'aˣ = b', 'sem base: base 10'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Definição', 'Forma logarítmica', 'chart', 'primary', p('$log_{a} b = x ⇔ a^{x} = b$') + call('Exemplo', '$log_{2} 8 = 3$ ⇔ $2^{3} = 8$.', 'success')],
    ['Nomes', 'Base, logaritmando, logaritmo', 'target', 'growth', li(['$a$: base ($a > 0$, $a ≠ 1$).', '$b$: logaritmando ($b > 0$).', '$x$: logaritmo (expoente).'])],
    ['Como calcular', 'Potência da base', 'link', 'decay', p('Escreva $b = a^{x}$ e leia $x$.') + call('Exemplo', '$log_{3} {1|27} = −3$.', 'success')],
    ['Base 10', 'Logaritmo decimal', 'scale', 'success', p('$log\\ 1\\ 000 = 3$ e $log\\ 0,01 = −2$') + call('Uso', 'Escala Richter, pH, decibéis.', 'success')],
    ['Equações simples', 'Base ou logaritmando', 'up', 'primary', li(['$log_{x} 25 = 2$ ⇒ $x^{2} = 25$ ⇒ $x = 5$.', '$log_{3} x = 4$ ⇒ $x = 81$.', 'Descarte base negativa.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Eleve a base ao resultado.', 'Recupera o logaritmando?', 'Condições: $a > 0$, $a ≠ 1$, $b > 0$.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar base e logaritmando.', 'Aceitar base negativa.', 'Dizer que $log\\ 1\\ 000 = 1\\ 000$.', 'Esquecer que logaritmo é expoente.', 'Esquecer que sem base escrita é base 10.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Definição de logaritmo <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: cálculo direto, base fracionária, equação, escala Richter e expoente fracionário.',
  final: 'Escreva o logaritmando como potência da base: o expoente é a resposta.',
  questions: [
    { badge: 'Estilo ENEM · cálculo', text: 'Considere o logaritmo $log_{2} 128$.', cmd: 'Seu valor é:', opts: ['5', '6', '7', '8', '64'], a: 2,
      sol: '<p>$2^{7} = 128$.</p>' },
    { badge: 'Estilo ENEM · base fracionária', text: 'Considere o logaritmo $log_{1÷3} 9$.', cmd: 'Seu valor é:', opts: ['−3', '−2', '2', '3', '${1|2}$'], a: 1,
      sol: '<p>$({1|3})^{x} = 9 = 3^{2}$ ⇒ $3^{−x} = 3^{2}$ ⇒ $x = −2$.</p>' },
    { badge: 'Estilo ENEM · equação', text: 'O número real positivo $x$ satisfaz $log_{x} 49 = 2$.', cmd: 'O valor de $x$ é:', opts: ['7', '−7', '14', '24,5', '49'], a: 0,
      sol: '<p>$x^{2} = 49$ ⇒ $x = 7$ (a base deve ser positiva).</p>' },
    { badge: 'Estilo ENEM · escala Richter', text: 'A magnitude de um terremoto é $M = log {A|A_0}$ e um terremoto teve magnitude 6.', cmd: 'A amplitude $A$ foi quantas vezes a de referência $A_0$?', opts: ['6', '60', '10 000', '1 000 000', '6 000 000'], a: 3,
      sol: '<p>${A|A_0} = 10^{6} = 1\\ 000\\ 000$.</p>' },
    { badge: 'Estilo ENEM · expoente fracionário', text: 'Considere $log_{8} 4$.', cmd: 'Seu valor é:', opts: ['${3|2}$', '${1|2}$', '2', '3', '${2|3}$'], a: 4,
      sol: '<p>$8^{x} = 4$ ⇒ $2^{3x} = 2^{2}$ ⇒ $x = {2|3}$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória dos <span style="color:var(--growth);">logaritmos</span>',
  subtitle: 'Ligue cada logaritmo ao seu valor.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se o logaritmo combinar com o valor, o par fica aberto.',
    final: 'Cada logaritmo é um expoente: confira sempre elevando a base.',
    pares: [['log₂ 8', '3'], ['log₃ 81', '4'], ['log₅ 1', '0'], ['log₁₀ 0,01', '−2'], ['log₂ (1/2)', '−1'], ['log₄ 2', '1/2']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Definição de logaritmo: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: potência, negativo, fração, base desconhecida e escala Richter. Digite o número pedido.',
  final: 'Você percorreu a trilha: potência, expoente negativo, fração, base e Richter.',
  problems: [
    { tag: 'Potência', q: 'Calcule $log_{2} 32$.', a: 5, ph: 'x', hint: '2 elevado a quanto dá 32?', sol: '<p>$2^{5} = 32$.</p>' },
    { tag: 'Negativo', q: 'Calcule $log_{3} {1|9}$.', a: -2, ph: 'x', hint: '3⁻² = 1/9.', sol: '<p>$3^{−2} = {1|9}$.</p>' },
    { tag: 'Fração', q: 'Calcule $log_{4} 8$ (decimal).', a: 1.5, ph: 'x', hint: '4ˣ = 8 ⇒ 2²ˣ = 2³.', sol: '<p>$2x = 3$ ⇒ $x = 1,5$.</p>' },
    { tag: 'Base', q: 'Qual a base positiva $x$ em $log_{x} 25 = 2$?', a: 5, ph: 'x', hint: 'x² = 25.', sol: '<p>$x = 5$.</p>' },
    { tag: 'Richter', q: 'Um abalo com $A = 10^{7} · A_0$ tem qual magnitude $M = log (A ÷ A_0)$?', a: 7, ph: 'M', hint: 'log 10⁷.', sol: '<p>$M = 7$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Logaritmo: Definição', accent: 'primary', icon: 'sigma',
  aulas: [['Aula 12', 'Definição de logaritmo', 'aula-1-definicao-de-logaritmo.html']],
  enem: 'Definição de logaritmo no estilo ENEM', cria: 'Memória dos logaritmos', pratica: 'Definição de logaritmo: trilha de desafios'
}, pages };
