// Unidade v04 — Função exponencial: resolução de problemas (aulas 10 e 11 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'funcao-exponencial-problemas', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v04', BRAND = 'Função Exponencial: Problemas', CAP = 'Aulas 10 e 11';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 10 e 11', h1: 'Função exponencial em problemas: <span style="color:var(--primary);">modelar o mundo</span>',
  sub: 'Populações, juros, desvalorização, meia-vida: todo fenômeno que cresce ou decai por um fator fixo a cada período é uma função exponencial.',
  badges: [['N(t) = N₀ · bᵗ'], ['b = 1 ± i', 'growth'], ['dobra a cada T: 2^(t/T)', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do enunciado à resposta.', [
  ['Modelo', 'N(t) = N₀ · bᵗ', 'bulb'],
  ['Identificar', 'valor inicial, fator e período', 'target'],
  ['Calcular', 'substituir t e interpretar', 'chart'],
  ['Equação', 'dado N, achar t', 'link'],
  ['Conferir', 'unidade, sentido e ordem de grandeza', 'scale']
]));
a.push(objetivosSlide([
  'Identificar em um enunciado o <strong>valor inicial</strong> $N_0$, o <strong>fator</strong> $b$ e a <strong>unidade de tempo</strong>.',
  'Escrever a lei $N(t) = N_0 · b^{t}$ (ou $N_0 · 2^{t ÷ T}$ quando dobra a cada $T$).',
  'Calcular <strong>valores</strong> e resolver <strong>equações exponenciais simples</strong> de problemas.',
  'Interpretar a <strong>variação percentual acumulada</strong> ($b^{t} − 1$).'
], 'Dica', 'Antes de calcular, responda: <strong>o que é um “período”?</strong> A taxa e o tempo precisam estar na <strong>mesma unidade</strong> (ao mês ↔ meses).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O quanto uma população pode crescer?', `
          ${lede('Um biólogo acompanha uma espécie rara: a população inicial é de <strong>100 indivíduos</strong> e cresce <strong>5% ao ano</strong>. Como estimar a população daqui a 10 anos?')}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Passo a passo</strong><p style="font-size:.92rem;margin-top:8px;">$N_0 = 100$ · fator $b = 1 + 0,05 = 1,05$ · lei $N(t) = 100 · 1,05^{t}$.</p>', 'primary')}
            ${mini('Usando $1,05^{10} ≈ 1,63$, a população em 10 anos é de cerca de:', ['150', '163', '200', '500'], 1, '$N(10) = 100 · 1,05^{10} ≈ 100 · 1,63 = 163$ indivíduos.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · modelagem', 'Como resolver um problema exponencial', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> Encontre o <strong>valor inicial</strong> $N_0$ (o que existe em $t = 0$).</li>
                <li><strong>2.</strong> Encontre o <strong>fator</strong> $b$: $1 + i$ (aumento), $1 − i$ (redução), $2$ (dobra) ou $1 ÷ 2$ (metade).</li>
                <li><strong>3.</strong> Escreva $N(t) = N_0 · b^{t}$; se o período for $T$, use $N_0 · b^{t ÷ T}$.</li>
                <li><strong>4.</strong> Substitua o dado e <strong>calcule</strong> (ou resolva a equação exponencial).</li>
                <li><strong>5.</strong> <strong>Interprete</strong>: unidade, arredondamento e variação acumulada $(b^{t} − 1) · 100\\%$.</li>
              </ul>
            </div>
            ${W.box('Calculadora de crescimento e decaimento', W.row(W.nm('p1-n', 'N₀', 100, 'any'), W.nm('p1-i', 'taxa i (%)', 5, 'any'), W.nm('p1-t', 'períodos t', 10, 'any'), W.sel('p1-m', 'tipo', ['crescimento', 'decaimento'], 0)) + W.txt('p1-e', 'Lei: ') + W.txt('p1-v', 'N(t) = ') + W.txt('p1-d', 'Variação total: ') + W.hint('p1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Palavras do enunciado ⇒ fator', `
          ${tbl(['O enunciado diz…', 'Fator b', 'Lei'], [['aumenta 5% ao ano', '$1,05$', '$N_0 · 1,05^{t}$'], ['perde 20% ao ano', '$0,8$', '$N_0 · 0,8^{t}$'], ['dobra a cada 3 horas', '$2$ por 3 h', '$N_0 · 2^{t ÷ 3}$'], ['cai pela metade a cada 4 dias', '${1|2}$ por 4 dias', '$N_0 · ({1|2})^{t ÷ 4}$'], ['triplica a cada mês', '$3$', '$N_0 · 3^{t}$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Variações sucessivas', 'Dois aumentos de 10% não dão 20%: $1,1^{2} = 1,21$ ⇒ <strong>+21%</strong>.', 'success')}
            ${callout('Juros compostos', '$M = C · (1 + i)^{t}$: é a mesma função exponencial com $N_0 = C$ e $b = 1 + i$.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Dobra a cada 3 horas', 'Uma cultura tem 500 bactérias e dobra a cada 3 horas. Quantas haverá após 12 horas?', [
  ['Lei', '$N(t) = 500 · 2^{t ÷ 3}$.'],
  ['Substitua', '$N(12) = 500 · 2^{12 ÷ 3} = 500 · 2^{4}$.'],
  ['Calcule', '$500 · 16 = 8\\ 000$.']
], 'Haverá <strong>8 000 bactérias</strong>.'));
a.push(exemplo('Exemplo resolvido', 'Quando atinge?', 'Com $N(t) = 500 · 2^{t}$ ($t$ em horas), em que instante a cultura atinge 32 000 bactérias?', [
  ['Equação', '$500 · 2^{t} = 32\\ 000$.'],
  ['Isole a potência', '$2^{t} = 64$.'],
  ['Mesma base', '$64 = 2^{6}$ ⇒ $t = 6$.']
], 'Em <strong>6 horas</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Desvalorização', 'Uma máquina de R$ 50 000 perde 20% do valor por ano. Qual o valor após 2 anos e qual a perda percentual total?', [
  ['Fator', '$b = 1 − 0,20 = 0,8$.'],
  ['Valor', '$50\\ 000 · 0,8^{2} = 50\\ 000 · 0,64 = 32\\ 000$.'],
  ['Variação total', '$0,64 − 1 = −0,36$: perda de <strong>36%</strong> (e não 40%).']
], 'Vale <strong>R$ 32 000</strong>, uma perda total de 36% em 2 anos.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Juros compostos × simples', 'Um capital de R$ 2 000 rende 10% ao mês por 2 meses. Compare os juros compostos com os simples.', [
  ['Compostos', '$M = 2\\ 000 · 1,1^{2} = 2\\ 000 · 1,21 = 2\\ 420$.'],
  ['Simples', '$M = 2\\ 000 + 2 · 200 = 2\\ 400$.'],
  ['Diferença', '$2\\ 420 − 2\\ 400 = 20$: os juros do segundo mês incidem sobre os juros do primeiro.']
], 'Compostos: <strong>R$ 2 420</strong>; simples: <strong>R$ 2 400</strong> — diferença de R$ 20.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Meia-vida de um poluente', 'A concentração de um poluente cai pela metade a cada 4 dias. De 64 mg/L, em quantos dias chega a 8 mg/L?', [
  ['Lei', '$C(t) = 64 · ({1|2})^{t ÷ 4}$.'],
  ['Equação', '$64 · ({1|2})^{t ÷ 4} = 8$ ⇒ $({1|2})^{t ÷ 4} = {1|8} = ({1|2})^{3}$.'],
  ['Expoentes', '$t ÷ 4 = 3$ ⇒ $t = 12$.']
], 'Em <strong>12 dias</strong> ($64 → 32 → 16 → 8$, três meias-vidas).', 'growth'));

a.push(pratique('Crescimento anual', 'Uma população de 200 peixes cresce 10% ao ano. Sabendo que $1,1^{2} = 1,21$, a população daqui a 2 anos será de:',
  ['220', '240', '242', '400'], 2,
  '$N(2) = 200 · 1,1^{2} = 200 · 1,21 = 242$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Variação total', 'Um preço sobe 10% ao mês durante 2 meses seguidos. O aumento total foi de:',
  ['10%', '20%', '21%', '22%'], 2,
  '$1,1^{2} = 1,21$: aumento de 21%. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Contaminação de um lago', 'A concentração de um poluente em um lago cai pela metade a cada 4 dias. Se hoje é de 64 mg/L, em quantos dias ela chegará a 8 mg/L?',
  ['6', '8', '10', '12', '16'], 3,
  '$({1|2})^{t ÷ 4} = {8|64} = {1|8}$ ⇒ $t ÷ 4 = 3$ ⇒ $t = 12$ dias. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os problemas exponenciais enganam', [
  ['Taxa e tempo em unidades diferentes', 'Taxa mensal exige $t$ em meses. “10% ao mês por 1 ano” significa $t = 12$.'],
  ['Somar taxas', 'Dois aumentos de 10% valem $1,1^{2} − 1 = 21\\%$, não 20%.'],
  ['Trocar fator e taxa', 'Aumento de 5% ⇒ $b = 1,05$ (e não $0,05$ ou $5$).'],
  ['Confundir meia-vida com tempo total', 'A cada período $T$ o valor é <strong>dividido por 2</strong>; após $n$ períodos, dividido por $2^{n}$.']
]));
a.push(quiz([
  { q: 'Um valor cresce 8% ao mês. O fator mensal é:', o: ['0,08', '0,92', '1,08', '8'], a: 2 },
  { q: 'Se algo dobra a cada 5 dias, depois de 15 dias foi multiplicado por:', o: ['3', '6', '8', '15'], a: 2 },
  { q: 'Uma queda de 50% por período equivale ao fator:', o: ['0,05', '0,5', '1,5', '5'], a: 1 },
  { q: 'Dois aumentos sucessivos de 20% equivalem a um único aumento de:', o: ['40%', '42%', '44%', '48%'], a: 2 }
]));
a.push(fechamento([
  ['Modelo', '$N(t) = N_0 · b^{t}$ com $b = 1 ± i$.'],
  ['Período', 'Taxa e tempo na mesma unidade; $2^{t ÷ T}$ para “dobra a cada $T$”.'],
  ['Conferir', 'Unidade, sentido e variação acumulada.']
], 'Fator por período, número de períodos: a leitura correta do enunciado vale metade da questão.'));

pages.push({ out: BASE + 'aula-1-problemas-com-exponencial.html', html: K.deck({
  title: 'Função exponencial: problemas — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 10 e 11 · Problemas com exponencial', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['p1-n', 'p1-i', 'p1-t', 'p1-m'], function(){ var n = +$('p1-n').value, i = +$('p1-i').value, t = +$('p1-t').value, m = +$('p1-m').value;
    if(![n, i, t].every(isFinite) || (m === 1 && i >= 100)){ $('p1-e').textContent = '—'; $('p1-v').textContent = '—'; $('p1-d').textContent = '—'; $('p1-h').textContent = m === 1 && i >= 100 ? 'No decaimento, a taxa deve ser menor que 100%.' : ''; return; }
    var b = m === 0 ? 1 + i / 100 : 1 - i / 100, v = n * Math.pow(b, t), d = (Math.pow(b, t) - 1) * 100;
    $('p1-e').textContent = 'N(t) = ' + pt(n) + ' · ' + pt(b, 4) + '^t';
    $('p1-v').textContent = pt(v, 3);
    $('p1-d').textContent = (d >= 0 ? '+' : '') + pt(d, 2) + '%';
    $('p1-h').textContent = 'Fator por período: ' + pt(b, 4) + '. Em ' + pt(t) + ' períodos o valor é multiplicado por ' + pt(Math.pow(b, t), 4) + '. Dois aumentos de 10% dão +21%, não +20%.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Função exponencial em problemas: <span>modelar, calcular, interpretar</span>',
  lede: 'Valor inicial, fator por período e número de períodos: três informações que resolvem populações, juros, desvalorização e meia-vida.',
  badges: ['N = N₀ · bᵗ', 'b = 1 ± i', 'dobra: 2^(t/T)'],
  curve: 'M20,165 C 120,160 200,135 280,95 C 360,55 420,35 480,18',
  sections: [
    ['Modelo', 'N(t) = N₀ · bᵗ', 'chart', 'primary', p('$N_0$ é o valor em $t = 0$ e $b$ é o fator por período.') + call('Exemplo', '$100 · 1,05^{t}$: +5% ao ano.', 'success')],
    ['Fator', 'Do enunciado ao b', 'target', 'growth', li(['Aumenta $i$: $b = 1 + i$.', 'Perde $i$: $b = 1 − i$.', 'Dobra: $b = 2$; metade: $b = 1 ÷ 2$.'])],
    ['Período T', 'Dobra a cada T', 'scale', 'decay', p('$N(t) = N_0 · 2^{t ÷ T}$') + call('Exemplo', 'Dobra a cada 3 h: $500 · 2^{t ÷ 3}$.', 'success')],
    ['Equação', 'Dado N, achar t', 'link', 'success', p('Isole a potência e iguale as bases.') + call('Exemplo', '$500 · 2^{t} = 32\\ 000$ ⇒ $t = 6$.', 'success')],
    ['Variação total', '(bᵗ − 1) · 100%', 'up', 'primary', li(['Dois aumentos de 10%: +21%.', 'Perda de 20% por 2 anos: −36%.', 'Não some taxas.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Unidade de tempo e da taxa iguais.', 'O resultado faz sentido?', 'Arredonde só no final.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Somar taxas sucessivas.', 'Usar 0,05 como fator de aumento de 5%.', 'Misturar taxa mensal com tempo em anos.', 'Esquecer o $t ÷ T$ quando o período não é 1.', 'Arredondar no meio da conta.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Problemas com exponencial <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: população, bactérias, desvalorização, juros e meia-vida.',
  final: 'Fator por período e número de períodos: o resto é substituição.',
  questions: [
    { badge: 'Estilo ENEM · população', text: 'Uma população de 200 peixes cresce 10% ao ano. Considere $1,1^{2} = 1,21$.', cmd: 'Daqui a 2 anos haverá:', opts: ['220 peixes', '240 peixes', '242 peixes', '400 peixes', '440 peixes'], a: 2,
      sol: '<p>$200 · 1,1^{2} = 200 · 1,21 = 242$.</p>' },
    { badge: 'Estilo ENEM · bactérias', text: 'Uma cultura com 500 bactérias dobra a cada 3 horas: $N(t) = 500 · 2^{t ÷ 3}$.', cmd: 'O número de bactérias após 12 horas é:', opts: ['2 000', '4 000', '6 000', '8 000', '16 000'], a: 3,
      sol: '<p>$12 ÷ 3 = 4$ períodos: $500 · 2^{4} = 8\\ 000$.</p>' },
    { badge: 'Estilo ENEM · desvalorização', text: 'Uma máquina de R$ 50 000 perde 20% do valor por ano.', cmd: 'Após 2 anos, seu valor, em reais, é:', opts: ['30 000', '32 000', '35 000', '40 000', '45 000'], a: 1,
      sol: '<p>$50\\ 000 · 0,8^{2} = 50\\ 000 · 0,64 = 32\\ 000$.</p>' },
    { badge: 'Estilo ENEM · juros compostos', text: 'Um capital de R$ 2 000 rende 10% ao mês, a juros compostos.', cmd: 'O montante após 2 meses, em reais, é:', opts: ['2 200', '2 400', '2 420', '2 440', '2 600'], a: 2,
      sol: '<p>$2\\ 000 · 1,1^{2} = 2\\ 000 · 1,21 = 2\\ 420$.</p>' },
    { badge: 'Estilo ENEM · meia-vida', text: 'A concentração de um poluente cai pela metade a cada 4 dias e hoje é de 64 mg/L.', cmd: 'Em quantos dias ela chegará a 8 mg/L?', opts: ['6', '8', '10', '12', '16'], a: 3,
      sol: '<p>${8|64} = {1|8} = ({1|2})^{3}$: 3 períodos de 4 dias ⇒ 12 dias.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">resolução</span>',
  subtitle: 'Cada problema tem os passos embaralhados: coloque-os na ordem certa.',
  tpl: cOrdenar({
    intro: 'Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de ordem são rejeitados.',
    final: 'Em todo problema exponencial: valor inicial, fator, lei e só depois a substituição.',
    problemas: [
      { titulo: 'Peixes no lago', enunciado: 'Um lago tem 200 peixes e a população cresce 10% ao ano. Quantos haverá em 2 anos? ($1,1^{2} = 1,21$)', passos: ['Identifique o valor inicial e a taxa: $N_0 = 200$ e $i = 10\\%$ ao ano.', 'Calcule o fator por período: $b = 1 + 0,10 = 1,1$.', 'Escreva a lei: $N(t) = 200 · 1,1^{t}$.', 'Substitua $t = 2$: $N(2) = 200 · 1,21 = 242$ peixes.'] },
      { titulo: 'Bactérias que dobram', enunciado: 'Uma cultura de 500 bactérias dobra a cada 3 horas. Quantas haverá após 12 horas?', passos: ['Valor inicial: $N_0 = 500$.', 'Fator por período: dobra ⇒ $b = 2$, com $T = 3$ h.', 'Conte os períodos: $12 ÷ 3 = 4$.', 'Calcule: $N = 500 · 2^{4} = 8\\ 000$ bactérias.'] },
      { titulo: 'Poluente do lago', enunciado: 'A concentração de um poluente cai pela metade a cada 4 dias. De 64 mg/L, em quantos dias chega a 8 mg/L?', passos: ['Monte a lei: $C(t) = 64 · ({1|2})^{t ÷ 4}$.', 'Substitua $C = 8$: $64 · ({1|2})^{t ÷ 4} = 8$.', 'Isole a potência: $({1|2})^{t ÷ 4} = {1|8} = ({1|2})^{3}$.', 'Iguale os expoentes: $t ÷ 4 = 3$ ⇒ $t = 12$ dias.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Problemas com exponencial: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: população, bactérias, valor da máquina, variação total e meia-vida. Digite o número pedido.',
  final: 'Você percorreu a trilha: população, cultura, desvalorização, taxa acumulada e meia-vida.',
  problems: [
    { tag: 'População', q: 'Uma população de 200 peixes cresce 10% ao ano. Quantos haverá em 2 anos?', a: 242, ph: 'peixes', hint: '200 · 1,21.', sol: '<p>$200 · 1,1^{2} = 242$.</p>' },
    { tag: 'Bactérias', q: '500 bactérias dobram a cada 3 h. Quantas haverá em 12 h?', a: 8000, ph: 'bactérias', hint: '12 h são 4 períodos.', sol: '<p>$500 · 2^{4} = 8\\ 000$.</p>' },
    { tag: 'Máquina', q: 'Uma máquina de R$ 50 000 perde 20% ao ano. Qual seu valor, em reais, após 2 anos?', a: 32000, ph: 'reais', hint: '0,8² = 0,64.', sol: '<p>$50\\ 000 · 0,64 = 32\\ 000$.</p>' },
    { tag: 'Variação total', q: 'Um preço sobe 10% ao mês durante 2 meses. Qual o aumento percentual total?', a: 21, ph: '%', hint: '1,1² − 1.', sol: '<p>$1,21 − 1 = 0,21$ ⇒ 21%.</p>' },
    { tag: 'Meia-vida', q: 'Um poluente cai pela metade a cada 4 dias. De 64 para 8 mg/L passam quantos dias?', a: 12, ph: 'dias', hint: '64 → 32 → 16 → 8.', sol: '<p>3 meias-vidas · 4 dias = 12 dias.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Função Exponencial: Problemas', accent: 'primary', icon: 'bars',
  aulas: [['Aulas 10–11', 'Problemas com função exponencial', 'aula-1-problemas-com-exponencial.html']],
  enem: 'Problemas com exponencial no estilo ENEM', cria: 'Ordene a resolução', pratica: 'Problemas com exponencial: trilha de desafios'
}, pages };
