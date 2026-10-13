// Unidade v07 — Logaritmo de base 10 (aulas 15 e 16 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'logaritmo-base-10', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v07', BRAND = 'Logaritmo de Base 10', CAP = 'Aulas 15 e 16';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 15 e 16', h1: 'Logaritmo decimal: <span style="color:var(--decay);">a régua das potências de 10</span>',
  sub: 'Seguidores, decibéis, terremotos e pH usam a base 10. O logaritmo decimal transforma números gigantes em números pequenos e comparáveis.',
  badges: [['log x = log₁₀ x'], ['característica e mantissa', 'growth'], ['bases 10, 2 e e', 'decay']], color: 'decay'
}));
a.push(roteiroSlide('A régua logarítmica.', [
  ['Base 10', 'log x sem base escrita', 'bulb'],
  ['Potências de 10', 'log 10ᵏ = k', 'target'],
  ['Característica e mantissa', 'parte inteira e parte decimal', 'chart'],
  ['Aplicações', 'redes sociais, som e dígitos', 'link'],
  ['Outras bases', 'base 2 e base e', 'scale']
]));
a.push(objetivosSlide([
  'Calcular <strong>logaritmos decimais</strong> de potências de 10 e estimar os de outros números.',
  'Identificar a <strong>característica</strong> (parte inteira) e a <strong>mantissa</strong> (parte decimal).',
  'Usar $log$ para comparar grandezas que variam em <strong>ordens de grandeza</strong>.',
  'Conhecer outras bases usuais: <strong>2</strong> (computação) e <strong>$e$</strong> (natural).'
], 'Dica', 'Para estimar $log\\ x$ sem calculadora, encontre as duas potências de 10 que prendem $x$: $log\\ 500$ está entre $log\\ 100 = 2$ e $log\\ 1\\ 000 = 3$.', 'decay', 'decay'));

a.push(sl('Para início de conversa', 'Uma criadora de conteúdo', `
          ${lede('Lia tinha <strong>10 000 seguidores</strong> e, após um vídeo viralizar, chegou a <strong>10 000 000</strong>. A plataforma mede o alcance por $N = log\\ (seguidores)$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Seguidores', 'N = log (seguidores)'], [['$10\\ 000 = 10^{4}$', '4'], ['$100\\ 000 = 10^{5}$', '5'], ['$1\\ 000\\ 000 = 10^{6}$', '6'], ['$10\\ 000\\ 000 = 10^{7}$', '7']])}
            ${mini('Quando N aumenta 1 unidade, o número de seguidores:', ['soma 10', 'soma 1 000', 'é multiplicado por 10', 'dobra'], 2, '$log\\ 10^{k+1} = k + 1$: cada unidade em $N$ multiplica os seguidores por 10. Do exemplo: $N$ passou de 4 a 7, ou seja, os seguidores ficaram $10^{3} = 1\\ 000$ vezes maiores.')}
          </div>`, { cls: 'decay' }));

a.push(sl('Teoria · logaritmo decimal', 'log x = log₁₀ x', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Logaritmo decimal:</strong> base 10, escrito $log\\ x$ (sem base).</li>
                <li>$log\\ 10^{k} = k$: $log\\ 1 = 0$, $log\\ 10 = 1$, $log\\ 100 = 2$, $log\\ 0,1 = −1$.</li>
                <li>$log\\ x$ <strong>cresce com $x$</strong> e é negativo se $0 < x < 1$.</li>
                <li><strong>Característica:</strong> parte inteira de $log\\ x$; <strong>mantissa:</strong> parte decimal (entre 0 e 1).</li>
                <li>Se $x ≥ 1$, o número de <strong>algarismos da parte inteira</strong> de $x$ é a característica $+ 1$.</li>
              </ul>
            </div>
            ${W.box('Logaritmo decimal de x', W.row(W.nm('d1-x', 'x', 5000, 'any', 'min="0"')) + W.txt('d1-l', 'log x = ') + W.txt('d1-c', 'Característica e mantissa: ') + W.txt('d1-n', 'Algarismos da parte inteira: ') + W.hint('d1-h'))}
          </div>`, { cls: 'decay' }));

a.push(sl('Resumo visual', 'Régua de potências de 10', `
          ${tbl(['x', '$0,001$', '$0,01$', '$0,1$', '$1$', '$10$', '$100$', '$1\\ 000$'], [['log x', '−3', '−2', '−1', '0', '1', '2', '3']])}
          ${tbl(['x', '2', '3', '5', '7'], [['log x (aprox.)', '0,301', '0,477', '0,699', '0,845']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Deslocar a vírgula', 'Multiplicar $x$ por 10 <strong>soma 1</strong> ao logaritmo: $log\\ 5 ≈ 0,70$ e $log\\ 50 ≈ 1,70$, $log\\ 5\\ 000 ≈ 3,70$. A mantissa não muda.', 'success')}
            ${callout('Estimar', '$x$ entre $10^{k}$ e $10^{k+1}$ ⇒ $k < log\\ x < k + 1$.', 'success')}
          </div>`, { cls: 'decay' }));

a.push(exemplo('Exemplo resolvido', 'Potências de 10', 'Calcule $log\\ 1\\ 000$, $log\\ 0,001$ e $log\\ √{10}$.', [
  ['Primeiro', '$1\\ 000 = 10^{3}$ ⇒ $log\\ 1\\ 000 = 3$.'],
  ['Segundo', '$0,001 = 10^{−3}$ ⇒ $log\\ 0,001 = −3$.'],
  ['Terceiro', '$√{10} = 10^{1 ÷ 2}$ ⇒ $log\\ √{10} = 1 ÷ 2 = 0,5$.']
], '$3$, $−3$ e $0,5$.', 'decay'));
a.push(exemplo('Exemplo resolvido', 'Característica e mantissa', 'Sabendo que $log\\ 5 ≈ 0,699$, estime $log\\ 5\\ 000$ e conte os algarismos de 5 000.', [
  ['Desloque a vírgula', '$5\\ 000 = 5 · 10^{3}$: o logaritmo soma 3 ao de 5.'],
  ['Valor', '$log\\ 5\\ 000 ≈ 3 + 0,699 = 3,699$.'],
  ['Partes', 'Característica $= 3$; mantissa $= 0,699$; algarismos: $3 + 1 = 4$.']
], '$log\\ 5\\ 000 ≈ 3,699$ — e 5 000 tem 4 algarismos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Redes sociais', 'Lia passou de 10 000 para 10 000 000 seguidores, com $N = log\\ S$. Quanto variou $N$ e por quanto foram multiplicados os seguidores?', [
  ['N antes e depois', '$N = log\\ 10^{4} = 4$ e $N = log\\ 10^{7} = 7$.'],
  ['Variação de N', '$7 − 4 = 3$ unidades.'],
  ['Seguidores', '$10\\ 000\\ 000 ÷ 10\\ 000 = 1\\ 000 = 10^{3}$.']
], '$N$ subiu 3 unidades e os seguidores ficaram <strong>1 000 vezes</strong> maiores.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Intensidade sonora', 'O nível sonoro, em decibéis, é $β = 10 · log {I|I_0}$, em que $I_0$ é a menor intensidade audível. Qual o nível de um som com $I = 10^{6} · I_0$?', [
  ['Razão', '${I|I_0} = 10^{6}$.'],
  ['Logaritmo', '$log\\ 10^{6} = 6$.'],
  ['Nível', '$β = 10 · 6 = 60$ dB.']
], '$60$ dB. Cada +10 dB multiplica a intensidade por 10.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Outras bases', 'Quantos bits são necessários para distinguir 1 024 valores?', [
  ['Pergunta', 'Quantos bits $n$ cumprem $2^{n} = 1\\ 024$?'],
  ['Em logaritmo', '$n = log_{2} 1\\ 024$.'],
  ['Potência de 2', '$1\\ 024 = 2^{10}$ ⇒ $n = 10$.']
], '<strong>10 bits</strong>. Os logaritmos de base 2 são usados em computação; os de base $e ≈ 2,718$ (naturais, $ln$), em ciências.', 'growth'));

a.push(pratique('Potência de 10', 'O valor de $log\\ 0,0001$ é:',
  ['−4', '−3', '3', '4', '0,0001'], 0,
  '$0,0001 = 10^{−4}$ ⇒ $log\\ 0,0001 = −4$. <strong>Alternativa A.</strong>', '', 'decay'));
a.push(pratique('Entre quais inteiros', 'O valor de $log\\ 500$ está entre:',
  ['0 e 1', '1 e 2', '2 e 3', '3 e 4', '4 e 5'], 2,
  '$100 < 500 < 1\\ 000$ ⇒ $2 < log\\ 500 < 3$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Alcance de uma publicação', 'O alcance de uma página é $N = log\\ S$, em que $S$ é o número de seguidores. Se $N$ passou de 3 para 6, o número de seguidores foi multiplicado por:',
  ['3', '30', '100', '1 000', '10 000'], 3,
  '$S = 10^{N}$: de $10^{3}$ a $10^{6}$ é uma multiplicação por $10^{3} = 1\\ 000$. <strong>Alternativa D.</strong>', 'decay'));

a.push(armadilhas('Cuidados', 'Onde o logaritmo decimal engana', [
  ['Esquecer que sem base é base 10', '$log\\ 100 = 2$ e não $log_{2} 100$.'],
  ['Achar que log é proporcional', 'Dobrar o número <strong>não</strong> dobra o logaritmo: $log\\ 20 ≈ 1,30$ e $log\\ 10 = 1$.'],
  ['Sinal para números menores que 1', '$log\\ 0,1 = −1$: logaritmo negativo, mas o número existe.'],
  ['Contar algarismos errado', 'Algarismos da parte inteira $=$ característica $+ 1$ (5 000 tem característica 3 e 4 algarismos).']
]));
a.push(quiz([
  { q: '$log\\ 10\\ 000$ vale:', o: ['3', '4', '5', '10 000'], a: 1 },
  { q: 'Se $0 < x < 1$, então $log\\ x$ é:', o: ['positivo', 'zero', 'negativo', 'indefinido'], a: 2 },
  { q: 'A característica de $log\\ 5\\ 000 ≈ 3,699$ é:', o: ['3', '0,699', '4', '699'], a: 0 },
  { q: 'Um som com $I = 100 · I_0$ tem, em dB, $β = 10 · log\\ 100 =$', o: ['2', '20', '100', '1 000'], a: 1 }
]));
a.push(fechamento([
  ['Potências de 10', '$log\\ 10^{k} = k$.'],
  ['Partes', 'Característica (inteira) e mantissa (decimal).'],
  ['Uso', 'Compara ordens de grandeza: seguidores, dB, pH.']
], 'O logaritmo decimal conta zeros: cada unidade a mais é um fator 10.'));

pages.push({ out: BASE + 'aula-1-logaritmo-decimal.html', html: K.deck({
  title: 'Logaritmo de base 10 — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 15 e 16 · Logaritmo decimal', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['d1-x'], function(){ var x = +$('d1-x').value;
    if(!isFinite(x) || x <= 0){ $('d1-l').textContent = '—'; $('d1-c').textContent = '—'; $('d1-n').textContent = '—'; $('d1-h').textContent = 'Use x > 0: o logaritmo de zero ou de negativo não existe.'; return; }
    var l = Math.log10(x), c = Math.floor(l + 1e-12), m = l - c;
    $('d1-l').textContent = pt(l, 4);
    $('d1-c').textContent = 'característica ' + pt(c) + ' · mantissa ' + pt(m, 4);
    $('d1-n').textContent = x >= 1 ? pt(Math.floor(x).toString().length) : 'x < 1: não há parte inteira significativa';
    $('d1-h').textContent = 'Entre 10^' + pt(c) + ' e 10^' + pt(c + 1) + ': ' + pt(Math.pow(10, c), 6) + ' ≤ x < ' + pt(Math.pow(10, c + 1), 6) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'decay',
  h1: 'Logaritmo de base 10: <span>a régua das potências de 10</span>',
  lede: 'log x é o logaritmo na base 10. Ele transforma multiplicações por 10 em somas de 1, e por isso mede som, acidez, terremotos e alcance de redes.',
  badges: ['log 10ᵏ = k', 'característica + mantissa', 'dB, pH, Richter'],
  curve: 'M20,160 C 100,110 180,70 260,50 C 340,34 420,26 480,22',
  sections: [
    ['Definição', 'Base 10', 'chart', 'primary', p('$log\\ x = log_{10} x$') + call('Exemplo', '$log\\ 1\\ 000 = 3$.', 'success')],
    ['Régua', 'Potências de 10', 'target', 'growth', li(['$log\\ 1 = 0$.', '$log\\ 0,01 = −2$.', '$log\\ 10^{k} = k$.'])],
    ['Partes', 'Característica e mantissa', 'scale', 'decay', p('$log\\ 5\\ 000 ≈ 3,699$') + call('Leitura', 'Característica 3, mantissa 0,699.', 'success')],
    ['Algarismos', 'Característica + 1', 'link', 'success', p('5 000 tem 4 algarismos.') + call('Regra', 'Vale para $x ≥ 1$.', 'success')],
    ['Aplicações', 'Ordens de grandeza', 'up', 'primary', li(['Seguidores: $N = log\\ S$.', 'Som: $β = 10 · log (I ÷ I_0)$.', 'pH: $−log\\ H^{+}$.'])],
    ['Outras bases', '2 e e', 'check', 'growth', li(['Base 2: computação (bits).', 'Base $e ≈ 2,718$: $ln$.', 'Base 10: decimal.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer que sem base é base 10.', 'Achar que dobrar o número dobra o log.', 'Ignorar o sinal para $x < 1$.', 'Contar algarismos sem somar 1.', 'Misturar $log$ com $ln$.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: 'decay',
  h1: 'Logaritmo decimal <span style="color:var(--decay);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: potência de 10, seguidores, decibéis, mantissa e bits.',
  final: 'Cada unidade no logaritmo decimal é um fator 10.',
  questions: [
    { badge: 'Estilo ENEM · potência de 10', text: 'Considere $log\\ 0,001$.', cmd: 'Seu valor é:', opts: ['−3', '−2', '0,001', '3', '${1|3}$'], a: 0,
      sol: '<p>$0,001 = 10^{−3}$ ⇒ $log\\ 0,001 = −3$.</p>' },
    { badge: 'Estilo ENEM · seguidores', text: 'Uma plataforma mede o alcance por $N = log\\ S$. Lia passou de 10 000 para 10 000 000 seguidores.', cmd: 'O número de seguidores foi multiplicado por:', opts: ['3', '30', '100', '1 000', '10 000'], a: 3,
      sol: '<p>$N$ foi de 4 a 7: três unidades, ou seja, fator $10^{3} = 1\\ 000$.</p>' },
    { badge: 'Estilo ENEM · decibéis', text: 'O nível sonoro é $β = 10 · log {I|I_0}$. Um som tem $I = 10^{8} · I_0$.', cmd: 'Seu nível sonoro é:', opts: ['8 dB', '10 dB', '80 dB', '800 dB', '$10^{8}$ dB'], a: 2,
      sol: '<p>$β = 10 · log\\ 10^{8} = 10 · 8 = 80$ dB.</p>' },
    { badge: 'Estilo ENEM · mantissa', text: 'Sabendo que $log\\ 5 ≈ 0,70$ e que $5\\ 000 = 5 · 10^{3}$, o valor aproximado de $log\\ 5\\ 000$ é:', cmd: 'Escolha o valor:', opts: ['0,70', '2,70', '3,70', '4,70', '5 000'], a: 2,
      sol: '<p>Multiplicar por $10^{3}$ soma 3 ao logaritmo: $0,70 + 3 = 3,70$.</p>' },
    { badge: 'Estilo ENEM · bits', text: 'Para distinguir $2^{n}$ valores são necessários $n$ bits.', cmd: 'Quantos bits distinguem 1 024 valores?', opts: ['10', '5', '8', '16', '1 024'], a: 0,
      sol: '<p>$n = log_{2} 1\\ 024 = 10$, pois $2^{10} = 1\\ 024$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Em que <span style="color:var(--growth);">faixa</span> está o logaritmo?',
  subtitle: 'Sem calculadora: prenda o número entre duas potências de 10.',
  tpl: cClassificar({
    cats: ['Entre 0 e 1', 'Entre 1 e 2', 'Entre 2 e 3', 'Negativo'],
    intro: 'Cada cartão traz um $log\\ x$. Estime a faixa do valor e clique em <strong>Conferir</strong>.',
    final: 'Número entre $10^{k}$ e $10^{k+1}$ tem logaritmo entre $k$ e $k + 1$.',
    itens: [
      ['$log\\ 5$', 0, '$1 < 5 < 10$ ⇒ entre 0 e 1 (≈ 0,70).'],
      ['$log\\ 50$', 1, '$10 < 50 < 100$ ⇒ entre 1 e 2 (≈ 1,70).'],
      ['$log\\ 500$', 2, '$100 < 500 < 1\\ 000$ ⇒ entre 2 e 3 (≈ 2,70).'],
      ['$log\\ 0,5$', 3, '$0,5 < 1$ ⇒ logaritmo negativo (≈ −0,30).'],
      ['$log\\ 8$', 0, '$1 < 8 < 10$ ⇒ entre 0 e 1 (≈ 0,90).'],
      ['$log\\ 80$', 1, '$10 < 80 < 100$ ⇒ entre 1 e 2 (≈ 1,90).'],
      ['$log\\ 300$', 2, '$100 < 300 < 1\\ 000$ ⇒ entre 2 e 3 (≈ 2,48).'],
      ['$log\\ 0,02$', 3, '$0,02 < 1$ ⇒ negativo (≈ −1,70).'],
      ['$log\\ 15$', 1, '$10 < 15 < 100$ ⇒ entre 1 e 2 (≈ 1,18).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Logaritmo decimal: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: potência, negativo, seguidores, decibéis e algarismos. Digite o número pedido.',
  final: 'Você percorreu a trilha: potências, redes, som e algarismos.',
  problems: [
    { tag: 'Potência', q: 'Calcule $log\\ 100\\ 000$.', a: 5, ph: 'valor', hint: '10⁵.', sol: '<p>$5$.</p>' },
    { tag: 'Negativo', q: 'Calcule $log\\ 0,0001$.', a: -4, ph: 'valor', hint: '10⁻⁴.', sol: '<p>$−4$.</p>' },
    { tag: 'Seguidores', q: 'Com $N = log\\ S$, em quantas unidades $N$ aumenta quando $S$ passa de 10 000 para 10 000 000?', a: 3, ph: 'unidades', hint: '4 → 7.', sol: '<p>$7 − 4 = 3$.</p>' },
    { tag: 'Decibéis', q: 'Qual o nível, em dB, de um som com $I = 10^{6} · I_0$ ($β = 10 · log (I ÷ I_0)$)?', a: 60, ph: 'dB', hint: '10 · 6.', sol: '<p>$60$ dB.</p>' },
    { tag: 'Algarismos', q: 'Quantos algarismos tem o número 5 000 (característica de log 5000 é 3)?', a: 4, ph: 'algarismos', hint: 'característica + 1.', sol: '<p>$3 + 1 = 4$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Logaritmo de Base 10', accent: 'decay', icon: 'sigma',
  aulas: [['Aulas 15–16', 'Logaritmo decimal', 'aula-1-logaritmo-decimal.html']],
  enem: 'Logaritmo decimal no estilo ENEM', cria: 'Em que faixa está o logaritmo?', pratica: 'Logaritmo decimal: trilha de desafios'
}, pages };
