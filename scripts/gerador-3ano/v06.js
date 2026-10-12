// Unidade v06 — Logaritmo: consequências da definição (aulas 13 e 14 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'logaritmo-consequencias', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v06', BRAND = 'Logaritmo: Consequências da Definição', CAP = 'Aulas 13 e 14';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 13 e 14', h1: 'Consequências da definição: <span style="color:var(--growth);">cinco regras de graça</span>',
  sub: 'Da definição de logaritmo saem cinco propriedades imediatas. Elas resolvem expressões inteiras de cabeça e explicam o pH de uma solução.',
  badges: [['log_a 1 = 0'], ['log_a a = 1', 'growth'], ['a^(log_a b) = b', 'decay']], color: 'growth'
}));
a.push(roteiroSlide('Cinco consequências.', [
  ['pH', 'o logaritmo na Química', 'bulb'],
  ['Zero e um', 'log_a 1 = 0 e log_a a = 1', 'target'],
  ['Potência da base', 'log_a aᵐ = m', 'chart'],
  ['Inverso', 'a^(log_a b) = b', 'link'],
  ['Igualdade', 'log_a b = log_a c ⇒ b = c', 'scale']
]));
a.push(objetivosSlide([
  'Deduzir da definição que $log_{a} 1 = 0$ e $log_{a} a = 1$.',
  'Usar $log_{a} a^{m} = m$ e $a^{log_{a} b} = b$ para simplificar expressões.',
  'Aplicar $log_{a} b = log_{a} c ⇒ b = c$ em equações simples.',
  'Calcular o <strong>pH</strong> de soluções com potências de 10.'
], 'Dica', 'Cada regra é a definição disfarçada: pergunte “a base elevada a quanto?”. Se o número já é <strong>potência da base</strong>, a resposta é o expoente.', 'growth', 'growth-ink'));

a.push(sl('Para início de conversa', 'O pH de uma solução', `
          ${lede('O pH mede acidez: <strong>$pH = −log\\ H^{+}$</strong>, em que $H^{+}$ é a concentração de íons de hidrogênio (mol/L). Água pura tem $H^{+} = 10^{−7}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['$H^{+}$ (mol/L)', 'pH'], [['$10^{−3}$', '3 (ácida)'], ['$10^{−7}$', '7 (neutra)'], ['$10^{−9}$', '9 (básica)']])}
            ${mini('Se $H^{+} = 10^{−5}$ mol/L, o pH vale:', ['−5', '5', '10', '0,00001'], 1, '$pH = −log\\ 10^{−5} = −(−5) = 5$. Aqui o fato usado é $log\\ 10^{m} = m$.')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · consequências', 'As cinco consequências da definição', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> $log_{a} 1 = 0$, pois $a^{0} = 1$.</li>
                <li><strong>2.</strong> $log_{a} a = 1$, pois $a^{1} = a$.</li>
                <li><strong>3.</strong> $log_{a} a^{m} = m$, pois $a^{m} = a^{m}$.</li>
                <li><strong>4.</strong> $a^{log_{a} b} = b$ (a base elevada ao logaritmo devolve o logaritmando).</li>
                <li><strong>5.</strong> $log_{a} b = log_{a} c ⇔ b = c$ (logaritmos de mesma base iguais ⇒ logaritmandos iguais).</li>
              </ul>
            </div>
            ${W.box('Teste as consequências', W.row(W.nm('c1-a', 'base a', 2, 'any'), W.nm('c1-m', 'expoente m', 5, 'any'), W.nm('c1-b', 'número b', 7, 'any')) + W.txt('c1-1', '1 e 2: ') + W.txt('c1-3', '3: ') + W.txt('c1-4', '4: ') + W.hint('c1-h'))}
          </div>`, { cls: 'growth' }));

a.push(sl('Resumo visual', 'Qual regra usar?', `
          ${tbl(['Se você vê…', 'Use', 'Resultado'], [['$log_{7} 1$', 'regra 1', '$0$'], ['$log_{7} 7$', 'regra 2', '$1$'], ['$log_{3} 3^{5}$', 'regra 3', '$5$'], ['$5^{log_{5} 12}$', 'regra 4', '$12$'], ['$log_{3}(2x+1) = log_{3} 7$', 'regra 5', '$2x + 1 = 7$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Base 10', '$log\\ 10^{m} = m$: por isso $log\\ 1\\ 000 = 3$ e $log\\ 0,01 = −2$.', 'success')}
            ${callout('Condição', 'Na regra 5, confira depois se os logaritmandos são <strong>positivos</strong>.', 'success')}
          </div>`, { cls: 'growth' }));

a.push(exemplo('Exemplo resolvido', 'Zero e um', 'Calcule $log_{5} 1 + log_{7} 7$.', [
  ['Regra 1', '$log_{5} 1 = 0$.'],
  ['Regra 2', '$log_{7} 7 = 1$.']
], '$0 + 1 = 1$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Potência da base', 'Calcule $log_{3} 3^{5}$, $log_{2} √{2}$ e $log\\ 10^{−4}$.', [
  ['Regra 3', '$log_{3} 3^{5} = 5$.'],
  ['Raiz como potência', '$√{2} = 2^{1 ÷ 2}$ ⇒ $log_{2} √{2} = 1 ÷ 2$.'],
  ['Base 10', '$log\\ 10^{−4} = −4$.']
], '$5$, $1 ÷ 2$ e $−4$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A base elevada ao logaritmo', 'Calcule $5^{log_{5} 12}$ e $2^{log_{2} 3 + 1}$.', [
  ['Regra 4', '$5^{log_{5} 12} = 12$.'],
  ['Separe a soma', '$2^{log_{2} 3 + 1} = 2^{log_{2} 3} · 2^{1}$.'],
  ['Regra 4 e produto', '$3 · 2 = 6$.']
], '$12$ e $6$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'pH', 'Uma solução tem $H^{+} = 10^{−8}$ mol/L. Qual o seu pH? E quanto vale $H^{+}$ quando o pH cai de 7 para 5?', [
  ['pH', '$pH = −log\\ 10^{−8} = 8$ (levemente básica).'],
  ['pH 7 → 5', '$H^{+}$ passa de $10^{−7}$ para $10^{−5}$.'],
  ['Razão', '$10^{−5} ÷ 10^{−7} = 10^{2} = 100$.']
], 'pH $= 8$; ao cair 2 unidades de pH, a concentração de $H^{+}$ fica <strong>100 vezes maior</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Equação com mesma base', 'Resolva $log_{3}(2x + 1) = log_{3} 7$.', [
  ['Regra 5', '$2x + 1 = 7$.'],
  ['Resolva', '$2x = 6$ ⇒ $x = 3$.'],
  ['Condição', '$2 · 3 + 1 = 7 > 0$ ✓.']
], '$x = 3$.', 'growth'));

a.push(pratique('Expressão', 'O valor de $log_{2} 8 + log_{3} 1 − log_{5} 5$ é:',
  ['1', '2', '3', '4', '5'], 1,
  '$3 + 0 − 1 = 2$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('A base elevada ao logaritmo', 'O valor de $7^{log_{7} 11}$ é:',
  ['7', '11', '18', '77', '$log_{7} 11$'], 1,
  'Regra 4: $a^{log_{a} b} = b$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('pH da água do mar', 'O pH é dado por $pH = −log\\ H^{+}$. A água do mar tem $H^{+} = 10^{−8}$ mol/L. Seu pH é:',
  ['−8', '−0,8', '0,8', '8', '$10^{8}$'], 3,
  '$pH = −log\\ 10^{−8} = −(−8) = 8$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as consequências enganam', [
  ['Logaritmo de 1', '$log_{a} 1 = 0$ (e não 1): é o expoente que zera a potência.'],
  ['Confundir regras 2 e 3', '$log_{a} a = 1$; já $log_{a} a^{m} = m$.'],
  ['Somar em vez de multiplicar', '$2^{log_{2} 5 + 1} = 5 · 2 = 10$, e não $5 + 2$.'],
  ['Esquecer o sinal do pH', '$pH = −log\\ H^{+}$: o sinal de menos transforma $−7$ em $7$.']
]));
a.push(quiz([
  { q: '$log_{9} 1$ vale:', o: ['0', '1', '9', 'não existe'], a: 0 },
  { q: '$log_{4} 4^{3}$ vale:', o: ['1', '3', '4', '64'], a: 1 },
  { q: '$10^{log\\ 5}$ vale:', o: ['2', '5', '10', '50'], a: 1 },
  { q: 'Se $log_{2} x = log_{2} 9$, então:', o: ['$x = 2$', '$x = 3$', '$x = 9$', '$x = 18$'], a: 2 }
]));
a.push(fechamento([
  ['Zero e um', '$log_{a} 1 = 0$ e $log_{a} a = 1$.'],
  ['Inversas', '$log_{a} a^{m} = m$ e $a^{log_{a} b} = b$.'],
  ['Igualdade', 'Mesma base ⇒ iguale os logaritmandos.']
], 'Cinco regras que nascem da definição: não precisam ser decoradas, só entendidas.'));

pages.push({ out: BASE + 'aula-1-consequencias-da-definicao.html', html: K.deck({
  title: 'Logaritmo: consequências da definição — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 13 e 14 · Consequências da definição', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['c1-a', 'c1-m', 'c1-b'], function(){ var a = +$('c1-a').value, m = +$('c1-m').value, b = +$('c1-b').value;
    if(![a, m, b].every(isFinite) || a <= 0 || a === 1 || b <= 0){ $('c1-1').textContent = '—'; $('c1-3').textContent = '—'; $('c1-4').textContent = '—'; $('c1-h').textContent = b <= 0 && a > 0 && a !== 1 ? 'b deve ser positivo.' : 'Base inválida: a > 0 e a ≠ 1.'; return; }
    var am = Math.pow(a, m), lg = Math.log(am) / Math.log(a), lb = Math.log(b) / Math.log(a);
    $('c1-1').textContent = 'log_' + pt(a) + ' 1 = 0 e log_' + pt(a) + ' ' + pt(a) + ' = 1';
    $('c1-3').textContent = 'log_' + pt(a) + ' ' + pt(am, 4) + ' = ' + pt(Math.round(lg * 1e6) / 1e6, 4) + ' (= m)';
    $('c1-4').textContent = pt(a) + '^(log_' + pt(a) + ' ' + pt(b) + ') = ' + pt(Math.pow(a, lb), 4) + ' (= b)';
    $('c1-h').textContent = 'log_' + pt(a) + ' ' + pt(b) + ' ≈ ' + pt(lb, 4) + '. Elevar a base a esse número devolve ' + pt(b) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'growth',
  h1: 'Logaritmo: <span>consequências da definição</span>',
  lede: 'Cinco regras que saem direto de log_a b = x ⇔ a^x = b: log 1 = 0, log da base = 1, log de potência da base, a elevado ao log e igualdade de logaritmos.',
  badges: ['log_a 1 = 0', 'log_a a = 1', 'a^(log_a b) = b'],
  curve: 'M20,165 C 120,160 200,135 280,95 C 360,55 420,35 480,18',
  sections: [
    ['Regra 1 e 2', 'Zero e um', 'chart', 'primary', p('$log_{a} 1 = 0$ e $log_{a} a = 1$') + call('Exemplo', '$log_{5} 1 + log_{7} 7 = 1$.', 'success')],
    ['Regra 3', 'Potência da base', 'target', 'growth', p('$log_{a} a^{m} = m$') + call('Exemplo', '$log_{3} 3^{5} = 5$ e $log\\ 10^{−4} = −4$.', 'success')],
    ['Regra 4', 'A base elevada ao log', 'link', 'decay', p('$a^{log_{a} b} = b$') + call('Exemplo', '$5^{log_{5} 12} = 12$.', 'success')],
    ['Regra 5', 'Igualdade', 'scale', 'success', p('$log_{a} b = log_{a} c ⇔ b = c$') + call('Atenção', 'Confira $b > 0$ e $c > 0$.', 'success')],
    ['pH', 'Aplicação na Química', 'up', 'primary', p('$pH = −log\\ H^{+}$') + call('Exemplo', '$H^{+} = 10^{−8}$ ⇒ pH $= 8$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['O número é potência da base?', 'Elevei a base ao resultado?', 'O sinal do pH está certo?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Dizer que $log_{a} 1 = 1$.', 'Confundir $log_{a} a$ com $log_{a} a^{m}$.', 'Somar onde se deve multiplicar em $2^{log_{2} 5 + 1}$.', 'Esquecer o sinal de menos do pH.', 'Não conferir a condição de existência na regra 5.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'growth',
  h1: 'Consequências da definição <span style="color:var(--growth);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: soma de logaritmos, base elevada ao log, pH, razão de concentrações e equação.',
  final: 'Reconheça a regra pela forma da expressão e a conta some.',
  questions: [
    { badge: 'Estilo ENEM · soma', text: 'Considere a expressão $log_{4} 1 + log_{4} 4 + log_{4} 4^{3}$.', cmd: 'Seu valor é:', opts: ['1', '3', '4', '5', '7'], a: 2,
      sol: '<p>$0 + 1 + 3 = 4$.</p>' },
    { badge: 'Estilo ENEM · base elevada ao log', text: 'Considere a expressão $3^{log_{3} 20} − log_{2} 2^{10}$.', cmd: 'Seu valor é:', opts: ['10', '17', '20', '30', '−10'], a: 0,
      sol: '<p>$20 − 10 = 10$.</p>' },
    { badge: 'Estilo ENEM · pH', text: 'O pH é dado por $pH = −log\\ H^{+}$. A água do mar tem $H^{+} = 10^{−8}$ mol/L.', cmd: 'O pH da água do mar é:', opts: ['−8', '−0,8', '0,8', '8', '$10^{8}$'], a: 3,
      sol: '<p>$pH = −log\\ 10^{−8} = 8$.</p>' },
    { badge: 'Estilo ENEM · razão de concentrações', text: 'O pH de uma solução cai de 7 para 5.', cmd: 'A concentração de $H^{+}$ ficou:', opts: ['2 vezes maior', '20 vezes maior', '100 vezes maior', '10 vezes maior', '100 vezes menor'], a: 2,
      sol: '<p>$H^{+}$ vai de $10^{−7}$ a $10^{−5}$: $10^{−5} ÷ 10^{−7} = 100$.</p>' },
    { badge: 'Estilo ENEM · equação', text: 'O número real $x$ satisfaz $log_{2}(x + 1) = log_{2} 9$.', cmd: 'O valor de $x$ é:', opts: ['7', '8', '9', '10', '4'], a: 1,
      sol: '<p>$x + 1 = 9$ ⇒ $x = 8$ (e $8 + 1 = 9 > 0$).</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive: onde está o <span style="color:var(--decay);">erro</span>?',
  subtitle: 'Cada resolução tem uma linha errada. Ache-a.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Quase todos os erros vêm de confundir $log_{a} 1 = 0$, $log_{a} a = 1$ e o sinal dos expoentes.',
    casos: [
      { titulo: 'Zero e um', enunciado: 'Calcule $log_{3} 27 + log_{5} 1$.', linhas: ['$log_{3} 27 = 3$, pois $3^{3} = 27$.', '$log_{5} 1 = 1$.', 'Some: $3 + 1 = 4$.', 'Resposta: 4.'], erro: 1, porque: '$log_{5} 1 = 0$, pois $5^{0} = 1$ (em qualquer base). A soma correta é $3 + 0 = 3$.' },
      { titulo: 'A base elevada ao log', enunciado: 'Calcule $2^{log_{2} 5 + 1}$.', linhas: ['Use $a^{m+n} = a^{m} · a^{n}$: $2^{log_{2} 5 + 1} = 2^{log_{2} 5} · 2^{1}$.', 'Como $2^{log_{2} 5} = 5$, fica $5 · 2$.', 'Logo, o valor é $5 + 2 = 7$.', 'Resposta: 7.'], erro: 2, porque: 'A linha anterior indica <strong>produto</strong>: $5 · 2 = 10$. A resposta é 10.' },
      { titulo: 'Logaritmo de fração', enunciado: 'Calcule $log_{2} (1 ÷ 8)$.', linhas: ['Escreva $1 ÷ 8$ como potência de 2.', '$1 ÷ 8 = 2^{3}$.', 'Logo, $log_{2} (1 ÷ 8) = 3$.', 'Resposta: 3.'], erro: 1, porque: '$2^{3} = 8$, e não $1 ÷ 8$. Correto: $1 ÷ 8 = 2^{−3}$, logo o logaritmo é $−3$.' },
      { titulo: 'pH', enunciado: 'Uma solução tem $H^{+} = 10^{−6}$ mol/L. Qual o pH?', linhas: ['$pH = −log\\ H^{+}$.', '$pH = −log\\ 10^{−6}$.', '$log\\ 10^{−6} = 6$.', 'Resposta: pH $= −6$.'], erro: 2, porque: '$log\\ 10^{−6} = −6$ (o expoente, com o sinal). Então $pH = −(−6) = 6$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Consequências da definição: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: zero e um, potência da base, base elevada ao log, pH e equação. Digite o número pedido.',
  final: 'Você percorreu a trilha: as cinco regras em ação.',
  problems: [
    { tag: 'Zero e um', q: 'Calcule $log_{5} 1 + log_{7} 7$.', a: 1, ph: 'valor', hint: '0 + 1.', sol: '<p>$0 + 1 = 1$.</p>' },
    { tag: 'Potência da base', q: 'Calcule $log_{3} 3^{5}$.', a: 5, ph: 'valor', hint: 'log_a a^m = m.', sol: '<p>$5$.</p>' },
    { tag: 'Base elevada ao log', q: 'Calcule $5^{log_{5} 12}$.', a: 12, ph: 'valor', hint: 'a^(log_a b) = b.', sol: '<p>$12$.</p>' },
    { tag: 'pH', q: 'Qual o pH de uma solução com $H^{+} = 10^{−7}$ mol/L?', a: 7, ph: 'pH', hint: 'pH = −log H⁺.', sol: '<p>$−(−7) = 7$.</p>' },
    { tag: 'Equação', q: 'Resolva $log_{3}(2x + 1) = log_{3} 7$.', a: 3, ph: 'x', hint: '2x + 1 = 7.', sol: '<p>$x = 3$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Logaritmo: Consequências da Definição', accent: 'growth', icon: 'sigma',
  aulas: [['Aulas 13–14', 'Consequências da definição', 'aula-1-consequencias-da-definicao.html']],
  enem: 'Consequências da definição no estilo ENEM', cria: 'Detetive: onde está o erro?', pratica: 'Consequências da definição: trilha de desafios'
}, pages };
