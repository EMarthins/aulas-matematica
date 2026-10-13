// Unidade v12 — Função logarítmica: resolução de problemas (aulas 31 e 32 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-logaritmica-problemas', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v12', BRAND = 'Função Logarítmica: Problemas', CAP = 'Aulas 31 e 32';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 31 e 32', h1: 'Logaritmos em problemas: <span style="color:var(--primary);">do enunciado ao tempo</span>',
  sub: 'Quanto tempo leva para triplicar um capital? Qual a acidez de uma solução? Quantos dígitos tem um número gigante? O logaritmo responde, usando tudo o que estudamos.',
  badges: [['juros e crescimento'], ['escalas: pH, dB, Richter', 'growth'], ['log 2 = 0,30 · log 3 = 0,48', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Modelar e interpretar.', [
  ['Revisão', 'definição e propriedades', 'bulb'],
  ['Tempo de crescimento', 'equação exponencial resolvida com log', 'target'],
  ['Escalas', 'pH, decibéis e Richter', 'chart'],
  ['Ordem de grandeza', 'dígitos de um número', 'link'],
  ['Interpretar', 'unidade e coerência do resultado', 'scale']
]));
a.push(objetivosSlide([
  'Modelar situações com funções logarítmicas e exponenciais.',
  'Resolver <strong>equações exponenciais</strong> em que as bases não coincidem usando <strong>logaritmos</strong>.',
  'Usar $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$ para calcular <strong>tempos, pH e número de dígitos</strong>.',
  '<strong>Interpretar</strong> o resultado: unidade, aproximação e sentido.'
], 'Dica', 'Quando o tempo está no expoente e não dá para igualar as bases, aplique $log$ nos dois lados: $b^{t} = N ⇒ t · log\\ b = log\\ N$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O que têm em comum?', `
          ${lede('Juros compostos, terremotos e medidores de decibéis: todos usam <strong>logaritmos</strong>. Resumo do que já aprendemos:')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Ferramenta', 'Regra'], [['Definição', '$log_{a} b = x ⇔ a^{x} = b$'], ['Produto', '$log_{a}(bc) = log_{a} b + log_{a} c$'], ['Quociente', '$log_{a}(b ÷ c) = log_{a} b − log_{a} c$'], ['Potência', '$log_{a} b^{m} = m · log_{a} b$'], ['Mudança de base', '$log_{a} b = log\\ b ÷ log\\ a$']])}
            ${mini('Dados $log\\ 2 = 0,30$, o valor de $log\\ 1\\ 000 ÷ log\\ 2$ é:', ['3', '10', '30', '300'], 1, '$log\\ 1\\ 000 = 3$: $3 ÷ 0,30 = 10$. Esse tipo de razão aparece em “quantas vezes dobrar até chegar a 1 000”.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · modelagem', 'Resolvendo b^t = N com logaritmos', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Modelo exponencial: $N(t) = N_0 · b^{t}$ (fator $b$ por período).</li>
                <li>Para achar $t$ quando $N$ é dado: $b^{t} = {N|N_0}$.</li>
                <li>Aplique $log$ nos dois lados: <strong>$t = {log\\ (N ÷ N_0)|log\\ b}$</strong>.</li>
                <li>Use as propriedades e os valores dados para calcular.</li>
                <li>Escalas logarítmicas: $pH = −log\\ H^{+}$, $β = 10 · log (I ÷ I_0)$, $M = log (A ÷ A_0)$.</li>
              </ul>
            </div>
            ${W.box('Em quanto tempo N0 vira N?', W.row(W.nm('t1-n0', 'N₀', 1000, 'any'), W.nm('t1-n', 'N', 1000000, 'any'), W.nm('t1-i', 'taxa por período (%)', 100, 'any')) + W.txt('t1-f', 'Fator b: ') + W.txt('t1-t', 'Tempo t: ') + W.hint('t1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Valores úteis (aproximados)', `
          ${tbl(['Valor', '$log$'], [['$2$', '$0,30$'], ['$3$', '$0,48$'], ['$5$', '$0,70$ ($1 − 0,30$)'], ['$6$', '$0,78$'], ['$1,2$', '$0,08$ ($log\\ 12 − 1$)'], ['$0,5$', '$−0,30$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Aproximações', 'Os resultados com $log\\ 2 = 0,30$ são aproximações: use-os com “cerca de”.', 'success')}
            ${callout('Cuidado com a unidade', 'Se a taxa é por mês, o tempo $t$ vem em meses.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Bactérias até um milhão', 'Uma cultura com 1 000 bactérias dobra a cada hora. Quanto tempo leva para chegar a 1 000 000? (Use $log\\ 2 = 0,30$.)', [
  ['Equação', '$1\\ 000 · 2^{t} = 10^{6}$ ⇒ $2^{t} = 1\\ 000$.'],
  ['Log nos dois lados', '$t · log\\ 2 = log\\ 1\\ 000 = 3$.'],
  ['Resolva', '$t = 3 ÷ 0,30 = 10$.']
], 'Cerca de <strong>10 horas</strong> (confira: $2^{10} = 1\\ 024 ≈ 1\\ 000$).'));
a.push(exemplo('Exemplo resolvido', 'Triplicar um capital', 'A que tempo um capital triplica com juros compostos de 20% ao ano? (Use $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.)', [
  ['Equação', '$1,2^{t} = 3$ ⇒ $t = {log\\ 3|log\\ 1,2}$.'],
  ['Calcule $log\\ 1,2$', '$1,2 = 12 ÷ 10$ ⇒ $log\\ 12 − 1 = (2 · 0,30 + 0,48) − 1 = 0,08$.'],
  ['Divida', '$t = 0,48 ÷ 0,08 = 6$.']
], 'Cerca de <strong>6 anos</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'pH', 'Uma solução tem $H^{+} = 2 · 10^{−5}$ mol/L. Qual o pH? (Use $log\\ 2 = 0,30$.)', [
  ['Fórmula', '$pH = −log\\ H^{+} = −log\\ (2 · 10^{−5})$.'],
  ['Produto', '$log\\ (2 · 10^{−5}) = log\\ 2 − 5 = 0,30 − 5 = −4,70$.'],
  ['Sinal', '$pH = 4,70$.']
], 'pH $≈ 4,7$ (solução ácida).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Variação de magnitude', 'Se a amplitude de um abalo <strong>dobra</strong>, quanto a magnitude aumenta? ($M = log (A ÷ A_0)$)', [
  ['Magnitudes', '$M_{1} = log {A|A_0}$ e $M_{2} = log {2A|A_0}$.'],
  ['Diferença', '$M_{2} − M_{1} = log\\ 2 = 0,30$ (quociente: $log\\ (2A) − log\\ A$).']
], 'A magnitude aumenta <strong>0,30</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Dígitos de um número', 'Quantos algarismos tem $3^{20}$? (Use $log\\ 3 = 0,48$.)', [
  ['Logaritmo', '$log\\ 3^{20} = 20 · 0,48 = 9,6$.'],
  ['Característica', 'A característica é $9$.'],
  ['Algarismos', '$9 + 1 = 10$.']
], '$3^{20}$ tem <strong>10 algarismos</strong> ($3^{20} = 3\\ 486\\ 784\\ 401$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Som de uma sala', 'Um som de 90 dB tem intensidade $I$, com $β = 10 · log (I ÷ I_0)$ e $I_0 = 10^{−12}$ W/m². Determine $I$.', [
  ['Isole o log', '$90 = 10 · log {I|I_0}$ ⇒ $log {I|I_0} = 9$.'],
  ['Definição', '${I|I_0} = 10^{9}$.'],
  ['Calcule', '$I = 10^{9} · 10^{−12} = 10^{−3}$ W/m².']
], '$I = 10^{−3}$ W/m² (um milésimo de watt por metro quadrado).', 'growth'));

a.push(pratique('Tempo para o dobro', 'Com $log\\ 2 = 0,30$, uma cultura que dobra a cada hora vai de 1 000 a 1 000 000 em quantas horas?',
  ['5', '8', '10', '12', '20'], 2,
  '$2^{t} = 1\\ 000$ ⇒ $t = 3 ÷ 0,30 = 10$. <strong>Alternativa C.</strong>'));
a.push(pratique('Triplicar', 'Com $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, um capital rende 20% ao ano. Para triplicar, são necessários cerca de:',
  ['3 anos', '4 anos', '5 anos', '6 anos', '8 anos'], 3,
  '$t = {0,48|0,08} = 6$. <strong>Alternativa D.</strong>', '', 'growth'));
a.push(estiloEnem('pH de uma solução', 'Uma solução tem $H^{+} = 2 · 10^{−5}$ mol/L. Com $log\\ 2 = 0,30$ e $pH = −log\\ H^{+}$, o pH vale aproximadamente:',
  ['4,3', '4,7', '5,3', '5,7', '−4,7'], 1,
  '$log\\ (2 · 10^{−5}) = 0,30 − 5 = −4,7$ ⇒ $pH = 4,7$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os problemas com logaritmo enganam', [
  ['Esquecer o sinal do pH', '$pH = −log\\ H^{+}$: $log\\ (2 · 10^{−5}) = −4,7$, então $pH = +4,7$.'],
  ['Tempo em unidade errada', 'A taxa por ano gera $t$ em anos; converta se o enunciado pedir meses.'],
  ['Arredondar cedo demais', 'Use os valores dados até o fim; arredonde só o resultado.'],
  ['Separar mal o log da divisão', '$t = log\\ 3 ÷ log\\ 1,2$ é uma razão, e não $log\\ (3 ÷ 1,2)$.']
]));
a.push(quiz([
  { q: 'Se $2^{t} = 1\\ 000$ e $log\\ 2 = 0,30$, então $t$ é aproximadamente:', o: ['3', '10', '30', '300'], a: 1 },
  { q: 'Se $H^{+} = 10^{−3}$, o pH vale:', o: ['−3', '3', '0,3', '10'], a: 1 },
  { q: 'Se a amplitude de um terremoto <strong>dobra</strong>, a magnitude aumenta:', o: ['0,30', '1', '2', '10'], a: 0 },
  { q: 'Um número com $log\\ N = 9,6$ tem quantos algarismos?', o: ['9', '10', '11', '96'], a: 1 }
]));
a.push(fechamento([
  ['Tempo', '$t = log\\ (N ÷ N_0) ÷ log\\ b$.'],
  ['Escalas', 'pH, dB e Richter são logarítmicas.'],
  ['Dígitos', 'Característica $+ 1$.']
], 'Modelar, aplicar logaritmo e interpretar: a rotina de todo problema logarítmico.'));

pages.push({ out: BASE + 'aula-1-problemas-com-logaritmos.html', html: K.deck({
  title: 'Logaritmos em problemas — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 31 e 32 · Problemas com logaritmos', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['t1-n0', 't1-n', 't1-i'], function(){ var n0 = +$('t1-n0').value, n = +$('t1-n').value, i = +$('t1-i').value;
    if(![n0, n, i].every(isFinite) || n0 <= 0 || n <= 0 || i <= -100 || i === 0){ ['t1-f', 't1-t'].forEach(function(k){ $(k).textContent = '—'; }); $('t1-h').textContent = 'Use N₀ > 0, N > 0 e uma taxa diferente de 0 e maior que −100%.'; return; }
    var b = 1 + i / 100, t = Math.log(n / n0) / Math.log(b);
    $('t1-f').textContent = pt(b, 4);
    $('t1-t').textContent = t >= 0 ? pt(t, 3) + ' períodos' : 'tempo negativo (' + pt(t, 3) + '): o valor nunca chega lá nesse sentido';
    $('t1-h').textContent = 't = log(N ÷ N₀) ÷ log b. Conferência: ' + pt(n0) + ' · ' + pt(b, 4) + '^' + pt(t, 3) + ' = ' + pt(n0 * Math.pow(b, t), 4) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Logaritmos em problemas: <span>tempo, escalas e ordem de grandeza</span>',
  lede: 'Quando o tempo está no expoente e as bases não coincidem, o logaritmo resolve: t = log(N ÷ N₀) ÷ log b. Escalas de pH, decibéis e Richter são logarítmicas.',
  badges: ['t = log(N/N₀) ÷ log b', 'pH, dB, Richter', 'dígitos = característica + 1'],
  curve: 'M20,160 C 100,110 180,70 260,50 C 340,34 420,26 480,22',
  sections: [
    ['Tempo', 'b^t = N', 'chart', 'primary', p('$t = log (N ÷ N_0) ÷ log\\ b$') + call('Exemplo', '$2^{t} = 1\\ 000$ ⇒ $t = 10$.', 'success')],
    ['Juros', 'Triplicar um capital', 'target', 'growth', p('$1,2^{t} = 3$') + call('Resultado', '$t = 0,48 ÷ 0,08 = 6$ anos.', 'success')],
    ['pH', 'Acidez', 'scale', 'decay', p('$pH = −log\\ H^{+}$') + call('Exemplo', '$H^{+} = 2 · 10^{−5}$ ⇒ pH $= 4,7$.', 'success')],
    ['Richter', 'Magnitude', 'link', 'success', p('Amplitude dobra ⇒ $M$ sobe $0,30$.') + call('Escala', '+1 em $M$ = amplitude ×10.', 'success')],
    ['Dígitos', 'Ordem de grandeza', 'up', 'primary', p('$log\\ 3^{20} = 9,6$ ⇒ 10 algarismos.') + call('Regra', 'Característica $+ 1$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['A unidade do tempo está certa?', 'Substituir $t$ devolve $N$?', 'O sinal do pH está certo?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o sinal do pH.', 'Misturar unidade da taxa e do tempo.', 'Arredondar no meio da conta.', 'Confundir $log\\ a ÷ log\\ b$ com $log\\ (a ÷ b)$.', 'Esquecer o $+ 1$ nos algarismos.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Problemas com logaritmos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: cultura, juros, pH, algarismos e terremoto. Use log 2 = 0,30 e log 3 = 0,48.',
  final: 'Modele, aplique o logaritmo e interprete o resultado.',
  questions: [
    { badge: 'Estilo ENEM · cultura de bactérias', text: 'Uma cultura de 1 000 bactérias dobra a cada hora. Considere $log\\ 2 = 0,30$.', cmd: 'O tempo, em horas, para chegar a 1 000 000 é:', opts: ['5', '8', '10', '12', '20'], a: 2,
      sol: '<p>$2^{t} = 1\\ 000$ ⇒ $t = 3 ÷ 0,30 = 10$.</p>' },
    { badge: 'Estilo ENEM · juros compostos', text: 'Um capital rende 20% ao ano. Considere $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$.', cmd: 'O tempo para triplicar é de cerca de:', opts: ['3 anos', '4 anos', '5 anos', '6 anos', '8 anos'], a: 3,
      sol: '<p>$1,2^{t} = 3$ ⇒ $t = {0,48|0,08} = 6$ ($log\\ 1,2 = log\\ 12 − 1 = 0,08$).</p>' },
    { badge: 'Estilo ENEM · pH', text: 'Uma solução tem $H^{+} = 2 · 10^{−5}$ mol/L. Considere $log\\ 2 = 0,30$ e $pH = −log\\ H^{+}$.', cmd: 'O pH é aproximadamente:', opts: ['4,3', '4,7', '5,3', '5,7', '−4,7'], a: 1,
      sol: '<p>$log\\ H^{+} = 0,30 − 5 = −4,7$ ⇒ $pH = 4,7$.</p>' },
    { badge: 'Estilo ENEM · algarismos', text: 'Considere o número $3^{20}$ e $log\\ 3 = 0,48$.', cmd: 'Quantos algarismos ele tem?', opts: ['10', '9', '11', '8', '20'], a: 0,
      sol: '<p>$log\\ 3^{20} = 9,6$: característica 9, logo 10 algarismos.</p>' },
    { badge: 'Estilo ENEM · terremoto', text: 'A magnitude é $M = log (A ÷ A_0)$ e a amplitude $A$ de um abalo dobrou. Considere $log\\ 2 = 0,30$.', cmd: 'O aumento da magnitude foi de:', opts: ['0,15', '0,30', '0,60', '1,00', '2,00'], a: 1,
      sol: '<p>$M_{2} − M_{1} = log\\ 2 = 0,30$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória: <span style="color:var(--growth);">problema e resposta</span>',
  subtitle: 'Ligue cada situação ao seu resultado.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se a situação combinar com o resultado, o par fica aberto.',
    final: 'Em cada par, o logaritmo transformou o problema em uma conta simples.',
    pares: [['1 000 → 1 000 000 dobrando (log 2 = 0,30)', '10 h'], ['Triplicar a 20% ao ano', '6 anos'], ['pH com H⁺ = 2 · 10⁻⁵', '4,7'], ['Algarismos de 3²⁰', '10'], ['Amplitude dobra: aumento de M', '0,30'], ['90 dB: razão I ÷ I₀', '10⁹']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Problemas com logaritmos: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: tempo, log 1,2, pH, algarismos e decibéis. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: tempo, juros, pH, algarismos e som.',
  problems: [
    { tag: 'Tempo', q: 'Com $log\\ 2 = 0,30$, em quantas horas $1\\ 000 · 2^{t} = 10^{6}$?', a: 10, ph: 'horas', hint: '2ᵗ = 1 000 ⇒ t = 3 ÷ 0,30.', sol: '<p>$t = 10$.</p>' },
    { tag: 'Juros', q: 'Com $log\\ 2 = 0,30$ e $log\\ 3 = 0,48$, quanto vale $log\\ 1,2$?', a: 0.08, ph: 'valor', hint: '1,2 = 12 ÷ 10.', sol: '<p>$log\\ 12 = 2 · 0,30 + 0,48 = 1,08$ ⇒ $log\\ 1,2 = 1,08 − 1 = 0,08$.</p>' },
    { tag: 'pH', q: 'Com $log\\ 2 = 0,30$, qual o pH de $H^{+} = 2 · 10^{−5}$?', a: 4.7, ph: 'pH', hint: 'pH = −(0,30 − 5).', sol: '<p>$pH = 4,7$.</p>' },
    { tag: 'Algarismos', q: 'Com $log\\ 3 = 0,48$, quantos algarismos tem $3^{20}$?', a: 10, ph: 'algarismos', hint: '20 · 0,48 = 9,6.', sol: '<p>$9 + 1 = 10$.</p>' },
    { tag: 'Decibéis', q: 'Um som de 90 dB tem $I ÷ I_0 = 10^{x}$. Qual o valor de $x$?', a: 9, ph: 'x', hint: '90 = 10 · x.', sol: '<p>$x = 9$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Logarítmica: Problemas', accent: 'primary', icon: 'bars',
  aulas: [['Aulas 31–32', 'Problemas com logaritmos', 'aula-1-problemas-com-logaritmos.html']],
  enem: 'Problemas com logaritmos no estilo ENEM', cria: 'Memória: problema e resposta', pratica: 'Problemas com logaritmos: trilha de desafios'
}, pages };
