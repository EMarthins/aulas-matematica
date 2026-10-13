// Unidade v12 — Progressão aritmética: soma dos termos (aulas 26 e 27 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'pa-soma', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v12', BRAND = 'Progressão Aritmética: Soma', CAP = 'Aulas 26 e 27';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 26 e 27', h1: 'Soma dos termos de uma PA: <span style="color:var(--primary);">o truque do jovem Gauss</span>',
  sub: 'Dizem que o jovem Gauss somou de 1 a 100 em segundos: pareou o primeiro com o último, o segundo com o penúltimo… e cada par somava 101. É a ideia da soma dos termos de qualquer PA.',
  badges: [['Sₙ = (a₁ + aₙ)·n ÷ 2'], ['pares com mesma soma', 'growth'], ['1 + 2 + … + n', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do pareamento à fórmula.', [
  ['Truque de Gauss', 'pares somando o mesmo valor', 'bulb'],
  ['Fórmula', 'Sₙ = (a₁ + aₙ) · n ÷ 2', 'target'],
  ['Variantes', 'sem aₙ, com a razão', 'chart'],
  ['Casos famosos', '1 a n, ímpares, múltiplos', 'link'],
  ['Aplicações', 'poupança, arquibancada, pilha', 'scale']
]));
a.push(objetivosSlide([
  'Deduzir a soma dos $n$ primeiros termos de uma PA pelo <strong>pareamento</strong> de termos equidistantes.',
  'Aplicar <strong>$S_n = {(a_1 + a_n) · n|2}$</strong> e a variante $S_n = {[2a_1 + (n − 1) r] · n|2}$.',
  'Calcular somas como $1 + 2 + … + n$, dos <strong>ímpares</strong> e de <strong>múltiplos</strong>.',
  'Resolver problemas de <strong>poupança</strong>, <strong>pilhas</strong> e <strong>arquibancadas</strong>.'
], 'Dica', 'Antes de somar, descubra $a_n$ (o último termo) e $n$ (quantos termos). Só depois use a fórmula.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'De 1 a 100 em segundos', `
          ${lede('Somar $1 + 2 + 3 + … + 100$ termo a termo seria longo. Pareie: $1 + 100 = 101$, $2 + 99 = 101$, $3 + 98 = 101$, … São <strong>50 pares</strong> de soma $101$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Par', 'Soma'], [['1 + 100', '101'], ['2 + 99', '101'], ['3 + 98', '101'], ['…', '…'], ['50 + 51', '101']])}
            ${mini('A soma $1 + 2 + … + 100$ vale:', ['4 950', '5 000', '5 050', '10 100'], 2, '$50 · 101 = 5\\ 050$. É a fórmula $S_n = (a_1 + a_n) · n ÷ 2 = (1 + 100) · 100 ÷ 2$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · soma dos termos', 'Fórmula da soma da PA', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em uma PA <strong>finita</strong>, termos <strong>equidistantes dos extremos</strong> têm a mesma soma $a_1 + a_n$.</li>
                <li><strong>$S_n = {(a_1 + a_n) · n|2}$</strong>.</li>
                <li>Sem $a_n$: <strong>$S_n = {[2a_1 + (n − 1) r] · n|2}$</strong>.</li>
                <li>Casos: $1 + 2 + … + n = {n(n + 1)|2}$ · soma dos $n$ primeiros ímpares $= n^{2}$.</li>
              </ul>
            </div>
            ${W.box('Soma da PA', W.row(W.nm('sp-a', 'a₁', 5, 'any'), W.nm('sp-r', 'razão r', 4, 'any'), W.nm('sp-n', 'n', 20, '1', 'min="1"')) + W.txt('sp-an', 'Último termo aₙ = ') + W.txt('sp-s', 'Soma Sₙ = ') + W.hint('sp-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Somas famosas', `
          ${tbl(['Soma', 'Fórmula', 'Exemplo'], [['$1 + 2 + … + n$', '${n(n + 1)|2}$', '$n = 100$: $5\\ 050$'], ['ímpares $1 + 3 + … + (2n − 1)$', '$n^{2}$', '$n = 10$: $100$'], ['pares $2 + 4 + … + 2n$', '$n(n + 1)$', '$n = 10$: $110$'], ['múltiplos de 3 até 99', '${(3 + 99) · 33|2}$', '$1\\ 683$']])}`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Soma dos 20 primeiros termos', 'Calcule a soma dos 20 primeiros termos da PA $(5, 9, 13, …)$.', [
  ['Último termo', '$a_{20} = 5 + 19 · 4 = 81$.'],
  ['Soma', '$S_{20} = {(5 + 81) · 20|2} = 860$.']
], '$S_{20} = 860$.'));
a.push(exemplo('Exemplo resolvido', 'Múltiplos de 3', 'Qual a soma dos múltiplos de 3 entre 1 e 100?', [
  ['Termos', '$3, 6, …, 99$: PA de razão 3 com $n = 99 ÷ 3 = 33$.'],
  ['Soma', '$S = {(3 + 99) · 33|2} = 1\\ 683$.']
], '<strong>1 683</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Poupança crescente', 'Uma pessoa poupa R$ 10 no 1º mês e, em cada mês seguinte, R$ 5 a mais que no anterior. Quanto terá poupado em 12 meses?', [
  ['Último depósito', '$a_{12} = 10 + 11 · 5 = 65$.'],
  ['Soma', '$S_{12} = {(10 + 65) · 12|2} = 450$.']
], 'Terá poupado <strong>R$ 450</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Soma dos ímpares', 'Qual a soma dos 10 primeiros números ímpares?', [
  ['PA', '$1, 3, 5, …, 19$ ($r = 2$, $n = 10$).'],
  ['Soma', '${(1 + 19) · 10|2} = 100 = 10^{2}$.']
], '$100$ — a soma dos $n$ primeiros ímpares é sempre $n^{2}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Pilha de toras', 'Uma pilha tem 20 toras na base e 1 tora a menos em cada camada acima, até 1 tora no topo. Quantas toras no total?', [
  ['PA', '$20, 19, …, 1$: $n = 20$.'],
  ['Soma', '${(20 + 1) · 20|2} = 210$.']
], '<strong>210 toras</strong>.', 'growth'));

a.push(pratique('Soma de 1 a 100', 'A soma $1 + 2 + 3 + … + 100$ é:',
  ['4 950', '5 000', '5 050', '5 150', '10 100'], 2,
  '$(1 + 100) · 100 ÷ 2 = 5\\ 050$. <strong>Alternativa C.</strong>'));
a.push(pratique('Soma dos 20 primeiros', 'A soma dos 20 primeiros termos de $(5, 9, 13, …)$ é:',
  ['420', '640', '860', '1 020', '1 720'], 2,
  '$a_{20} = 81$; $(5 + 81) · 10 = 860$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Poupança', 'Uma pessoa poupa R$ 10 no primeiro mês e, a cada mês, R$ 5 a mais que no mês anterior. Em 12 meses, o total poupado, em reais, é:',
  ['390', '420', '450', '480', '780'], 2,
  '$a_{12} = 65$; $S_{12} = (10 + 65) · 6 = 450$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a soma da PA engana', [
  ['Esquecer o ÷ 2', '$(a_1 + a_n) · n$ é o dobro da soma.'],
  ['Errar o número de termos', 'Múltiplos de 3 até 99: $99 ÷ 3 = 33$ termos (e não 99).'],
  ['Usar $a_n$ sem calcular', 'Se o enunciado dá só $a_1$ e $r$, calcule $a_n$ primeiro (ou use a variante).'],
  ['PA decrescente', 'A fórmula vale igual; atenção ao sinal de $r$.']
]));
a.push(quiz([
  { q: 'A soma de $1 + 2 + … + 10$ é:', o: ['45', '50', '55', '100'], a: 2 },
  { q: 'A soma dos 5 primeiros ímpares ($1 + 3 + 5 + 7 + 9$) é:', o: ['20', '25', '30', '36'], a: 1 },
  { q: 'Em $S_n = (a_1 + a_n) · n ÷ 2$, $n$ é:', o: ['a razão', 'o número de termos', 'o último termo', 'o primeiro termo'], a: 1 },
  { q: 'A soma de $(2, 4, 6, …, 20)$ é:', o: ['100', '110', '120', '220'], a: 1 }
]));
a.push(fechamento([
  ['Gauss', 'Pares equidistantes somam $a_1 + a_n$.'],
  ['Fórmula', '$S_n = (a_1 + a_n) · n ÷ 2$.'],
  ['Famosas', '$n(n + 1) ÷ 2$ e $n^{2}$ (ímpares).']
], 'Último termo, número de termos e a fórmula de Gauss.'));

pages.push({ out: BASE + 'aula-1-soma-dos-termos-da-pa.html', html: K.deck({
  title: 'Soma dos termos de uma PA — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 26 e 27 · Soma dos termos da PA', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['sp-a', 'sp-r', 'sp-n'], function(){ var a1 = +$('sp-a').value, r = +$('sp-r').value, n = Math.round(+$('sp-n').value);
    if(![a1, r].every(isFinite) || !isFinite(n) || n < 1){ $('sp-an').textContent = '—'; $('sp-s').textContent = '—'; $('sp-h').textContent = 'Use n ≥ 1.'; return; }
    var an = a1 + (n - 1) * r, S = (a1 + an) * n / 2;
    $('sp-an').textContent = pt(an, 4); $('sp-s').textContent = pt(S, 4);
    $('sp-h').textContent = 'Sₙ = (a₁ + aₙ)·n ÷ 2 = (' + pt(a1) + ' + ' + pt(an) + ')·' + n + ' ÷ 2.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Soma dos termos de uma PA: <span>o pareamento de Gauss</span>',
  lede: 'Termos equidistantes dos extremos somam a₁ + aₙ; com n termos há n ÷ 2 pares: Sₙ = (a₁ + aₙ)·n ÷ 2. Somas famosas: 1 a n, ímpares, múltiplos.',
  badges: ['Sₙ = (a₁ + aₙ)n/2', '1+2+…+n', 'ímpares: n²'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Gauss', 'Pareamento', 'chart', 'primary', p('1 + 100 = 101; 50 pares.') + call('Resultado', '5 050.', 'success')],
    ['Fórmula', 'Sₙ', 'target', 'growth', p('$(a_1 + a_n) · n ÷ 2$') + call('Exemplo', '$S_{20} = 860$.', 'success')],
    ['Variante', 'Sem aₙ', 'scale', 'decay', p('$[2a_1 + (n − 1) r] · n ÷ 2$') + call('Uso', 'Dados $a_1$, $r$ e $n$.', 'success')],
    ['Ímpares', 'n²', 'link', 'success', p('1 + 3 + … + (2n − 1) = n².') + call('n = 10', '100.', 'success')],
    ['Múltiplos', 'Contar n', 'up', 'primary', p('3 a 99: n = 33.') + call('Soma', '1 683.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Calculou aₙ?', 'n está certo?', 'Dividiu por 2?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o ÷ 2.', 'Errar n.', 'Usar a₁ no lugar de aₙ.', 'Esquecer que a razão pode ser negativa.', 'Confundir soma e termo.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Soma da PA <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: soma de 1 a 100, soma de 20 termos, poupança, múltiplos e pilha.',
  final: 'Último termo, número de termos e (a₁ + aₙ)·n ÷ 2.',
  questions: [
    { badge: 'Estilo ENEM · soma de 1 a 100', text: 'Considere a soma $1 + 2 + 3 + … + 100$.', cmd: 'Seu valor é:', opts: ['4 950', '5 000', '5 050', '5 150', '10 100'], a: 2,
      sol: '<p>$(1 + 100) · 100 ÷ 2 = 5\\ 050$.</p>' },
    { badge: 'Estilo ENEM · soma de 20 termos', text: 'Considere a PA $(5, 9, 13, …)$.', cmd: 'A soma dos 20 primeiros termos é:', opts: ['420', '640', '860', '1 020', '1 720'], a: 2,
      sol: '<p>$a_{20} = 81$; $S_{20} = (5 + 81) · 10 = 860$.</p>' },
    { badge: 'Estilo ENEM · poupança', text: 'Uma pessoa poupa R$ 10 no 1º mês e, a cada mês, R$ 5 a mais que no anterior.', cmd: 'O total poupado em 12 meses, em reais, é:', opts: ['390', '420', '450', '480', '780'], a: 2,
      sol: '<p>$a_{12} = 65$; $S_{12} = 75 · 6 = 450$.</p>' },
    { badge: 'Estilo ENEM · múltiplos', text: 'Considere os múltiplos de 3 entre 1 e 100.', cmd: 'A soma deles é:', opts: ['1 485', '1 683', '1 782', '1 584', '2 000'], a: 1,
      sol: '<p>$3, …, 99$: $n = 33$; $S = (3 + 99) · 33 ÷ 2 = 1\\ 683$.</p>' },
    { badge: 'Estilo ENEM · pilha', text: 'Uma pilha de toras tem 20 toras na base e uma a menos em cada camada acima, até 1 no topo.', cmd: 'O total de toras é:', opts: ['190', '200', '210', '220', '400'], a: 2,
      sol: '<p>$(20 + 1) · 20 ÷ 2 = 210$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória das <span style="color:var(--growth);">somas</span>',
  subtitle: 'Ligue cada soma ao seu valor.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se a soma combinar com o valor, o par fica aberto.',
    final: 'Em todas: (a₁ + aₙ) · n ÷ 2.',
    pares: [['1 + 2 + … + 100', '5 050'], ['1 + 2 + … + 10', '55'], ['10 primeiros ímpares', '100'], ['2 + 4 + … + 20', '110'], ['3 + 6 + … + 99', '1 683'], ['20 primeiros de (5, 9, 13, …)', '860']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Soma da PA: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: soma de 1 a 100, último termo, soma de 20 termos, poupança e pilha. Digite o número pedido.',
  final: 'Você percorreu a trilha: pares de Gauss e somas.',
  problems: [
    { tag: 'Gauss', q: 'Qual a soma $1 + 2 + … + 100$?', a: 5050, ph: 'S', hint: '50 pares de 101.', sol: '<p>$5\\ 050$.</p>' },
    { tag: 'Último termo', q: 'Na PA $(5, 9, 13, …)$, qual o vigésimo termo?', a: 81, ph: 'a₂₀', hint: '5 + 19 · 4.', sol: '<p>$81$.</p>' },
    { tag: 'Soma de 20', q: 'Qual a soma dos 20 primeiros termos dessa PA?', a: 860, ph: 'S₂₀', hint: '(5 + 81) · 10.', sol: '<p>$860$.</p>' },
    { tag: 'Poupança', q: 'R$ 10 no 1º mês e +R$ 5 a cada mês: quanto em 12 meses?', a: 450, ph: 'reais', hint: 'a₁₂ = 65.', sol: '<p>$450$.</p>' },
    { tag: 'Pilha', q: 'Pilha com 20, 19, …, 1 toras por camada: quantas toras?', a: 210, ph: 'toras', hint: '(20 + 1) · 20 ÷ 2.', sol: '<p>$210$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Progressão Aritmética: Soma', accent: 'growth', icon: 'stairs',
  aulas: [['Aulas 26–27', 'Soma dos termos de uma PA', 'aula-1-soma-dos-termos-da-pa.html']],
  enem: 'Soma da PA no estilo ENEM', cria: 'Memória das somas', pratica: 'Soma da PA: trilha de desafios'
}, pages };
