// Unidade v14 — Progressão geométrica: soma dos termos de uma PG finita (aulas 31 e 32 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'pg-soma', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v14', BRAND = 'Progressão Geométrica: Soma', CAP = 'Aulas 31 e 32';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 31 e 32', h1: 'Soma dos termos de uma PG finita: <span style="color:var(--primary);">de grão em grão</span>',
  sub: 'Na lenda do xadrez, o inventor pediu 1 grão na primeira casa, 2 na segunda, 4 na terceira… A soma de uma PG finita responde a quantos grãos, correntes de mensagens e depósitos dobrando.',
  badges: [['Sₙ = a₁(qⁿ − 1)/(q − 1)'], ['q = 1: n·a₁', 'growth'], ['1 + 2 + … + 2ⁿ⁻¹ = 2ⁿ − 1', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da dedução à fórmula.', [
  ['Soma por truque', 'multiplicar por q e subtrair', 'bulb'],
  ['Fórmula', 'Sₙ = a₁(qⁿ − 1) ÷ (q − 1)', 'target'],
  ['Caso q = 1', 'Sₙ = n · a₁', 'chart'],
  ['Casos famosos', '1 + 2 + 4 + … e correntes', 'link'],
  ['Aplicações', 'xadrez, mensagens e depósitos', 'scale']
]));
a.push(objetivosSlide([
  'Compreender a <strong>dedução</strong> de $S_n$: $S_n − q · S_n = a_1 − a_1 q^{n}$.',
  'Aplicar <strong>$S_n = {a_1 (q^{n} − 1)|q − 1}$</strong> (para $q ≠ 1$) e $S_n = n · a_1$ (para $q = 1$).',
  'Calcular somas como $1 + 2 + 4 + … + 2^{n−1} = 2^{n} − 1$.',
  'Resolver problemas de <strong>correntes</strong>, <strong>capitalização</strong> e <strong>contagem</strong> de termos.'
], 'Dica', 'Primeiro identifique $a_1$, $q$ e $n$; depois calcule $q^{n}$ com cuidado. Para $0 < q < 1$, vale a mesma fórmula (use $1 − q^{n}$ e $1 − q$ para evitar sinais negativos).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A lenda do xadrez', `
          ${lede('Um inventor pediu como pagamento <strong>1 grão de trigo na 1ª casa</strong> do tabuleiro, <strong>2 na 2ª</strong>, <strong>4 na 3ª</strong>, e assim dobrando até a 64ª. Quantos grãos? A soma é <strong>$2^{64} − 1$</strong>: um número com 20 algarismos (≈ 1,8 · 10¹⁹).')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Casas', 'Soma dos grãos'], [['1', '1'], ['2', '3'], ['3', '7'], ['4', '15'], ['10', '1 023'], ['n', '$2^{n} − 1$']])}
            ${mini('A soma dos grãos nas 10 primeiras casas é:', ['1 000', '1 023', '1 024', '2 047'], 1, '$1 + 2 + … + 2^{9} = 2^{10} − 1 = 1\\ 023$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · soma da PG finita', 'Dedução e fórmula', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$S_n = a_1 + a_1 q + a_1 q^{2} + … + a_1 q^{n−1}$.</li>
                <li>Multiplicando por $q$ e subtraindo: $S_n − q S_n = a_1 − a_1 q^{n}$.</li>
                <li><strong>$S_n = {a_1 (q^{n} − 1)|q − 1}$</strong>, para $q ≠ 1$.</li>
                <li>Se $q = 1$: <strong>$S_n = n · a_1$</strong>.</li>
                <li>Caso importante: $1 + 2 + 4 + … + 2^{n−1} = 2^{n} − 1$.</li>
              </ul>
            </div>
            ${W.box('Soma da PG finita', W.row(W.nm('sg-a', 'a₁', 3, 'any'), W.nm('sg-q', 'razão q', 2, 'any'), W.nm('sg-n', 'n', 5, '1', 'min="1"')) + W.txt('sg-an', 'Último termo aₙ = ') + W.txt('sg-s', 'Soma Sₙ = ') + W.hint('sg-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Exemplos de somas', `
          ${tbl(['PG', 'n', 'Soma'], [['$(3, 6, 12, 24, 48)$', '5', '$3(2^{5} − 1) = 93$'], ['$(1, 2, 4, …, 512)$', '10', '$2^{10} − 1 = 1\\ 023$'], ['$(8, 4, 2, 1, 0,5)$', '5', '$15,5$'], ['$(1, 3, 9, 27, 81)$', '5', '${3^{5} − 1|2} = 121$']])}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Soma dos 5 primeiros termos', 'Calcule a soma dos 5 primeiros termos de $(3, 6, 12, …)$.', [
  ['Dados', '$a_1 = 3$, $q = 2$, $n = 5$.'],
  ['Fórmula', '$S_5 = {3(2^{5} − 1)|2 − 1} = 3 · 31 = 93$.'],
  ['Conferência', '$3 + 6 + 12 + 24 + 48 = 93$ ✓.']
], '$S_5 = 93$.'));
a.push(exemplo('Exemplo resolvido', 'Razão menor que 1', 'Calcule a soma dos 5 primeiros termos de $(8, 4, 2, …)$.', [
  ['Dados', '$a_1 = 8$, $q = {1|2}$, $n = 5$.'],
  ['Fórmula', '$S_5 = {8(1 − ({1|2})^{5})|1 − {1|2}} = {8 · {31|32}|{1|2}} = 15,5$.'],
  ['Conferência', '$8 + 4 + 2 + 1 + 0,5 = 15,5$ ✓.']
], '$S_5 = 15,5$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Corrente de mensagens', 'Uma pessoa envia uma mensagem a 3 pessoas, cada uma delas envia a outras 3, e assim por 4 etapas. Quantas pessoas, contando quem iniciou, receberam ou enviaram?', [
  ['PG', '$1, 3, 9, 27, 81$: $a_1 = 1$, $q = 3$, $n = 5$.'],
  ['Soma', '$S_5 = {3^{5} − 1|3 − 1} = {242|2} = 121$.']
], '<strong>121 pessoas</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quantos termos?', 'Quantos termos tem a PG $(1, 2, 4, …)$ para que a soma seja 255?', [
  ['Soma', '$2^{n} − 1 = 255$ ⇒ $2^{n} = 256$.'],
  ['Expoente', '$256 = 2^{8}$ ⇒ $n = 8$.']
], '<strong>8 termos</strong> ($1 + 2 + … + 128 = 255$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Depósitos que dobram', 'Alguém deposita R$ 1 no 1º dia e dobra o valor a cada dia, por 10 dias. Quanto depositou no total?', [
  ['PG', '$a_1 = 1$, $q = 2$, $n = 10$.'],
  ['Soma', '$2^{10} − 1 = 1\\ 023$.']
], 'Total de <strong>R$ 1 023</strong> (o último depósito é R$ 512).', 'growth'));

a.push(pratique('Soma de 5 termos', 'A soma dos 5 primeiros termos de $(3, 6, 12, …)$ é:',
  ['48', '93', '96', '189', '192'], 1,
  '$3 · 31 = 93$. <strong>Alternativa B.</strong>'));
a.push(pratique('Soma de potências de 2', 'A soma $1 + 2 + 4 + … + 512$ é:',
  ['1 000', '1 024', '1 023', '2 047', '2 048'], 2,
  '10 termos: $2^{10} − 1 = 1\\ 023$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Corrente de mensagens', 'Uma pessoa envia uma mensagem a 3 pessoas; cada uma envia a outras 3, e assim por 4 etapas. O total de pessoas envolvidas (incluindo quem começou) é:',
  ['120', '121', '81', '243', '364'], 1,
  '$1 + 3 + 9 + 27 + 81 = 121$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a soma da PG engana', [
  ['Esquecer o −1', '$S_n = a_1 (q^{n} − 1) ÷ (q − 1)$; sem o $−1$ você calcula $a_1 q^{n}$.'],
  ['Errar a potência', '$3^{5} = 243$ (e não 125).'],
  ['q = 1', 'A fórmula não vale (divisão por zero): use $S_n = n a_1$.'],
  ['Contar n errado', 'Em $1, 3, 9, 27, 81$ há $n = 5$ termos (a potência $3^{4}$ é o último).']
]));
a.push(quiz([
  { q: 'Para $q = 1$, a soma de $n$ termos é:', o: ['$a_1 q^{n}$', '$n · a_1$', '$a_1 ÷ n$', '$0$'], a: 1 },
  { q: '$1 + 2 + 4 + 8 + 16$ é igual a:', o: ['30', '31', '32', '63'], a: 1 },
  { q: 'Na fórmula, o expoente de $q$ é:', o: ['$n − 1$', '$n$', '$n + 1$', '$2n$'], a: 1 },
  { q: '$1 + 3 + 9 + 27 + 81 =$', o: ['100', '121', '125', '243'], a: 1 }
]));
a.push(fechamento([
  ['Fórmula', '$S_n = a_1 (q^{n} − 1) ÷ (q − 1)$.'],
  ['q = 1', '$S_n = n · a_1$.'],
  ['Famosa', '$1 + 2 + … + 2^{n−1} = 2^{n} − 1$.']
], 'a₁, q e n: três dados e a soma da PG inteira.'));

pages.push({ out: BASE + 'aula-1-soma-da-pg-finita.html', html: K.deck({
  title: 'Soma dos termos de uma PG finita — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 31 e 32 · Soma da PG finita', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['sg-a', 'sg-q', 'sg-n'], function(){ var a1 = +$('sg-a').value, q = +$('sg-q').value, n = Math.round(+$('sg-n').value);
    if(![a1, q].every(isFinite) || !isFinite(n) || n < 1 || n > 60){ $('sg-an').textContent = '—'; $('sg-s').textContent = '—'; $('sg-h').textContent = 'Use 1 ≤ n ≤ 60.'; return; }
    var an = a1 * Math.pow(q, n - 1), S = q === 1 ? n * a1 : a1 * (Math.pow(q, n) - 1) / (q - 1);
    $('sg-an').textContent = pt(an, 4); $('sg-s').textContent = pt(S, 4);
    $('sg-h').textContent = q === 1 ? 'q = 1: Sₙ = n·a₁.' : 'Sₙ = a₁(qⁿ − 1) ÷ (q − 1) = ' + pt(a1) + '·(' + pt(Math.pow(q, n), 4) + ' − 1) ÷ (' + pt(q) + ' − 1).'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Soma da PG finita: <span>Sₙ = a₁(qⁿ − 1)/(q − 1)</span>',
  lede: 'Para q ≠ 1, Sₙ = a₁(qⁿ − 1) ÷ (q − 1); para q = 1, Sₙ = n·a₁. A soma 1 + 2 + … + 2ⁿ⁻¹ vale 2ⁿ − 1, base da lenda do xadrez e das correntes.',
  badges: ['Sₙ', 'q = 1: n·a₁', '2ⁿ − 1'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Dedução', 'Sₙ − q·Sₙ', 'chart', 'primary', p('$S_n (1 − q) = a_1 (1 − q^{n})$') + call('Resultado', 'Fórmula de Sₙ.', 'success')],
    ['Fórmula', 'q ≠ 1', 'target', 'growth', p('$a_1 (q^{n} − 1) ÷ (q − 1)$') + call('Exemplo', '$3 · 31 = 93$.', 'success')],
    ['q < 1', 'Razão fracionária', 'scale', 'decay', p('8, 4, 2, 1, 0,5: 15,5.') + call('Dica', 'Use 1 − qⁿ e 1 − q.', 'success')],
    ['Xadrez', '2ⁿ − 1', 'link', 'success', p('10 casas: 1 023.') + call('64 casas', '≈ 1,8·10¹⁹.', 'success')],
    ['Correntes', '1 + 3 + 9 + …', 'up', 'primary', p('5 etapas: 121.') + call('q', '3.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['n é o número de termos.', 'Calcule qⁿ com cuidado.', 'Teste somando os termos.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o −1.', 'Errar a potência.', 'Usar a fórmula com q = 1.', 'Contar n errado.', 'Esquecer que 3⁵ = 243.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Soma da PG finita <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: soma de 5 termos, potências de 2, razão fracionária, corrente e número de termos.',
  final: 'a₁, q e n: três dados e a soma.',
  questions: [
    { badge: 'Estilo ENEM · soma de 5 termos', text: 'Considere a PG $(3, 6, 12, …)$.', cmd: 'A soma dos 5 primeiros termos é:', opts: ['48', '93', '96', '189', '192'], a: 1,
      sol: '<p>$S_5 = 3(2^{5} − 1) = 93$.</p>' },
    { badge: 'Estilo ENEM · potências de 2', text: 'Considere a soma $1 + 2 + 4 + 8 + … + 512$.', cmd: 'Seu valor é:', opts: ['1 000', '1 024', '1 023', '2 047', '2 048'], a: 2,
      sol: '<p>10 termos: $2^{10} − 1 = 1\\ 023$.</p>' },
    { badge: 'Estilo ENEM · razão fracionária', text: 'Considere a PG $(8, 4, 2, …)$.', cmd: 'A soma dos 5 primeiros termos é:', opts: ['15', '15,5', '16', '31', '32'], a: 1,
      sol: '<p>$8 + 4 + 2 + 1 + 0,5 = 15,5$.</p>' },
    { badge: 'Estilo ENEM · corrente', text: 'Uma pessoa envia mensagem a 3 pessoas; cada uma envia a outras 3, por 4 etapas.', cmd: 'O total de pessoas envolvidas (incluindo quem começou) é:', opts: ['120', '121', '81', '243', '364'], a: 1,
      sol: '<p>$1 + 3 + 9 + 27 + 81 = 121$.</p>' },
    { badge: 'Estilo ENEM · número de termos', text: 'A soma dos termos de $(1, 2, 4, …)$ é 255.', cmd: 'O número de termos é:', opts: ['6', '7', '8', '9', '10'], a: 2,
      sol: '<p>$2^{n} − 1 = 255$ ⇒ $n = 8$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive: onde está o <span style="color:var(--decay);">erro</span>?',
  subtitle: 'Cada resolução de soma de PG tem uma linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Erros típicos: potência errada, razão menor que 1 mal tratada e contagem dos termos.',
    casos: [
      { titulo: 'Soma de 5 termos', enunciado: 'Calcule a soma dos 5 primeiros termos de $(3, 6, 12, …)$.', linhas: ['$a_1 = 3$, $q = 2$ e $n = 5$.', '$S_n = a_1 (q^{n} − 1) ÷ (q − 1)$.', '$S_5 = 3 · (2^{5} − 1) ÷ 1 = 3 · 32 = 96$.', 'Resposta: 96.'], erro: 2, porque: '$2^{5} − 1 = 31$ (e não 32). $S_5 = 3 · 31 = 93$.' },
      { titulo: 'Razão fracionária', enunciado: 'Calcule a soma dos 5 primeiros termos de $(8, 4, 2, …)$.', linhas: ['$a_1 = 8$, $q = 1 ÷ 2$, $n = 5$.', '$S_5 = 8 (1 − (1 ÷ 2)^{5}) ÷ (1 − 1 ÷ 2)$.', '$(1 ÷ 2)^{5} = 1 ÷ 32$, logo $1 − 1 ÷ 32 = 31 ÷ 32$.', '$S_5 = 8 · (31 ÷ 32) = 7,75$.'], erro: 3, porque: 'Faltou dividir por $1 − 1 ÷ 2 = 1 ÷ 2$, isto é, multiplicar por 2: $7,75 · 2 = 15,5$.' },
      { titulo: 'Corrente de mensagens', enunciado: 'Calcule $1 + 3 + 9 + 27 + 81$ pela fórmula.', linhas: ['$a_1 = 1$, $q = 3$, $n = 5$.', '$S_5 = (3^{5} − 1) ÷ (3 − 1)$.', '$3^{5} = 125$.', 'Logo $S_5 = 124 ÷ 2 = 62$.'], erro: 2, porque: '$3^{5} = 243$. Então $S_5 = 242 ÷ 2 = 121$.' },
      { titulo: 'Número de termos', enunciado: 'Quantos termos de $(1, 2, 4, …)$ somam 255?', linhas: ['$S_n = 2^{n} − 1 = 255$.', '$2^{n} = 256$.', '$256 = 2^{7}$.', 'Logo $n = 7$.'], erro: 2, porque: '$2^{8} = 256$ (e $2^{7} = 128$). Logo $n = 8$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Soma da PG finita: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: soma de 5 termos, potências de 2, razão decimal, corrente e número de termos. Digite o número pedido.',
  final: 'Você percorreu a trilha: fórmula, potências e contagem.',
  problems: [
    { tag: 'Soma de 5', q: 'Qual a soma dos 5 primeiros termos de $(3, 6, 12, …)$?', a: 93, ph: 'S₅', hint: '3 · 31.', sol: '<p>$93$.</p>' },
    { tag: 'Potências de 2', q: 'Qual a soma $1 + 2 + 4 + … + 512$ (10 termos)?', a: 1023, ph: 'S', hint: '2¹⁰ − 1.', sol: '<p>$1\\ 023$.</p>' },
    { tag: 'Razão decimal', q: 'Qual a soma dos 5 primeiros termos de $(8, 4, 2, …)$? (use ponto ou vírgula)', a: 15.5, ph: 'S₅', hint: '8 + 4 + 2 + 1 + 0,5.', sol: '<p>$15,5$.</p>' },
    { tag: 'Corrente', q: 'Quanto vale $1 + 3 + 9 + 27 + 81$?', a: 121, ph: 'S', hint: '(3⁵ − 1) ÷ 2.', sol: '<p>$121$.</p>' },
    { tag: 'Número de termos', q: 'Quantos termos de $(1, 2, 4, …)$ somam 255?', a: 8, ph: 'n', hint: '2ⁿ = 256.', sol: '<p>$8$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Progressão Geométrica: Soma', accent: 'growth', icon: 'candles',
  aulas: [['Aulas 31–32', 'Soma dos termos de uma PG finita', 'aula-1-soma-da-pg-finita.html']],
  enem: 'Soma da PG finita no estilo ENEM', cria: 'Detetive: onde está o erro?', pratica: 'Soma da PG finita: trilha de desafios'
}, pages };
