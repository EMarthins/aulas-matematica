// Unidade 1 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar, T, F } = K;
const { p, li, wl, call, f, prop, steps, T: tb, versus } = G;
const dir = 'ena-profmat/01-porcentagem-razao-proporcao/', key = 'c1', brand = 'Porcentagem, Razão e Proporção', cap = 'Capítulo 1';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`; // fórmula em modo matemático

const g = guia({
  dir, key, brand, cap, color: 'growth',
  h1: 'Porcentagem e proporção: <span>pense em fatores</span>',
  lede: 'O tema que mais cai no ENA (6 de 60 questões) e a base de todo problema de texto — fatores, sucessivos, desfazer variações, regra de três e taxas de trabalho em uma página só.',
  badges: ['6× nas provas 2025–26', '×(1 + p/100)', 'Sucessivos: multiplique', 'Taxa = 1 ÷ tempo'],
  curve: 'M20,160 C 100,158 180,140 260,100 C 340,62 420,36 480,22',
  sections: [
    ['Aula 1', 'p% e fatores', 'chart', 'growth', p('<strong>p%</strong> = $p/100$. Para aumentar ou descontar, <strong>multiplique pelo fator</strong>:') + fx('"aumento de " p% → ×(1 + {p|100})') + fx('"desconto de " p% → ×(1 − {p|100})') + call('Exemplo', 'Desconto de 20% = $×0,8$; aumento de 25% = $×1,25$.', 'success')],
    ['Aula 1', 'Variações sucessivas', 'link', 'primary', p('<strong>Multiplique</strong> os fatores — nunca some as porcentagens.') + fx('"fator total" = f_1 · f_2 · ⋯') + tb(['Sequência', 'Resultado'], [['+10% e +10%', '$1,1 × 1,1 = 1,21$ → +21%'], ['+20% e −20%', '$1,2 × 0,8 = 0,96$ → −4%'], ['+25% e −20%', '$1,25 × 0,8 = 1$ → volta']])],
    ['Aula 1', 'Desfazer uma variação', 'scale', 'success', p('Aumento de $p%$ é desfeito pelo desconto:') + fx('{p|100 + p}') + tb(['Aumento', 'Desconto que desfaz'], [['25%', '20%'], ['50%', '33,3%'], ['100%', '50%']]) + call('Inverso', 'Desconto $q%$ → aumento $q/(100 − q)$. Ex.: −20% → +25%.', '')],
    ['Aula 1', 'Variação percentual', 'up', 'primary', fx('"variação" = {"novo" − "antigo"|"antigo"} × 100%') + prop([['+25%', 'de 80 para 100'], ['−20%', 'de 100 para 80']]) + p('Divide-se sempre pelo valor <strong>antigo</strong>.')],
    ['Aula 2', 'Razão e proporção', 'scale', 'decay', fx('{a|b} = {c|d} ⇔ a·d = b·c') + p('Razão $3:5$ pode ser 30 e 50 — o <strong>valor</strong> da razão é o mesmo.') + call('Direta × inversa', 'Direta: razão constante $y = kx$. Inversa: produto constante $xy = k$ (mais operários, menos dias).', 'success')],
    ['Aula 2', 'Divisão proporcional', 'chart', 'growth', p('Dividir $N$ proporcionalmente a $a, b, c$:') + fx('k = {N|a + b + c} → "partes": ak, bk, ck') + call('Exemplo', '180 em 2 : 3 : 4 → $k = 20$ → 40, 60, 80.', 'success')],
    ['Aula 2', 'Razão que muda', 'people', 'primary', p('Só deram a razão? <strong>Invente números convenientes</strong> (30 e 50 para $3:5$). O resultado final não depende da escolha.') + call('ENA 2025 Q26', '20% de 30 saem: $24:56 = 3:7$.', '')],
    ['Aula 2', 'Taxas de trabalho', 'clock', 'decay', fx('"taxa" = {1|t} → "juntos": {1|t_A} + {1|t_B} → t = {t_A·t_B|t_A + t_B}') + call('ENA 2026 Q30', 'A: $1/6$ e B: $1/4$ por hora; 2 h juntas fazem $5/6$; A termina em +1 h → total 3 h.', 'success')]
  ],
  wide: [
    ['Dicionário', 'Traduzindo texto em equação', 'book', 'growth', `    ${K.tbl(['Texto', 'Matemática'], [['“20% do que planejou”', '$0,2x$'], ['“caminhou mais 2 km”', '$+ 2$'], ['“alcançou 1/3 da meta”', '$= {1|3}x$'], ['“k moças foram embora”', '$m → m − k$'], ['“o dobro / o quíntuplo”', '$2× / 5×$'], ['“ficou igual ao número de…”', '$=$']])}`],
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Somar porcentagens de bases diferentes (+20% e −20% não dá zero).', 'Não identificar o grupo que <strong>não muda</strong> (ENA 2025 Q23: crianças ficam, só adultos saem).', '“Pelo menos”/“não inferior” → desigualdade $≥$; “máximo” → igualdade no limite.', 'Dividir a variação pelo valor novo em vez do antigo.', 'Somar tempos em vez de <strong>taxas</strong> nas torneiras.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: 'success',
  h1: 'Porcentagem e proporção <span style="color:var(--growth);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais — sucessivos, desfazer variação, grupo que não muda, taxas de trabalho e proporção composta — no formato e no nível da prova.',
  final: 'O fio condutor: pensar em fator, escolher o grupo que não muda e somar taxas, não tempos.',
  questions: [
    { badge: 'Estilo ENA · sucessivos', text: 'Um tênis custava <strong>R$ 250</strong>. A loja aumentou o preço em <strong>20%</strong> e, na liquidação, deu <strong>20% de desconto</strong> sobre o novo preço.', cmd: 'O preço final, em reais, é:', opts: ['250', '260', '240', '230', '200'], a: 2,
      sol: '<p>Fatores: $1,2 × 0,8 = 0,96$. Preço final $= 250 × 0,96 = 240$.</p><p>Passo a passo: $250 × 1,2 = 300$ e $300 × 0,8 = 240$.</p><p class="hint">O desconto de 20% incide sobre R$ 300, não sobre R$ 250 — por isso não volta ao valor original.</p>' },
    { badge: 'Estilo ENA · desfazer variação', text: 'O preço de um produto sofreu <strong>aumento de 60%</strong>.', cmd: 'Para voltar ao preço original, o desconto necessário é de:', opts: ['60%', '40%', '37,5%', '35%', '30%'], a: 2,
      sol: '<p>Desconto $= {p|100 + p} = {60|160} = 0,375 = 37,5%$.</p><p>Conferência: $1,6 × 0,625 = 1$ ✓.</p><p class="hint">Atalho: $60% = {3|5}$, então o desconto é ${3|5} ÷ {8|5} = {3|8} = 37,5%$.</p>' },
    { badge: 'Estilo ENA · grupo que não muda', text: 'Em um auditório há <strong>120 pessoas</strong>, sendo 40% mulheres. Alguns homens saem e, com isso, as mulheres passam a ser <strong>60%</strong> das pessoas que ficaram.', cmd: 'Quantos homens saíram?', opts: ['20', '30', '40', '48', '60'], a: 2,
      sol: '<p>Mulheres: $0,4 × 120 = 48$ (não mudam). Se saem $x$ homens: $0,6(120 − x) = 48 ⇒ 120 − x = 80 ⇒ x = 40$.</p><p class="hint">Conferência: 48 mulheres em 80 pessoas = 60% ✓.</p>' },
    { badge: 'Estilo ENA · taxas', text: 'Uma máquina A produz um lote em <strong>10 horas</strong> e uma máquina B, o mesmo lote, em <strong>15 horas</strong>.', cmd: 'Trabalhando juntas, elas produzem o lote em:', opts: ['5 horas', '6 horas', '7 horas e 30 minutos', '12 horas e 30 minutos', '25 horas'], a: 1,
      sol: '<p>Taxas: ${1|10} + {1|15} = {3 + 2|30} = {1|6}$ do lote por hora. Logo $t = 6$ h.</p><p class="hint">Fórmula direta: $t = {10 · 15|10 + 15} = 6$.</p>' },
    { badge: 'Estilo ENA · proporção composta', text: '<strong>12 máquinas</strong> idênticas produzem 600 peças em 5 dias.', cmd: 'Quantos dias <strong>15 máquinas</strong> levam para produzir 900 peças?', opts: ['4', '5', '6', '7,5', '9'], a: 2,
      sol: '<p>Produção por máquina por dia: $600 / (12 · 5) = 10$ peças.</p><p>15 máquinas: $150$ peças por dia. Para 900 peças: $900 / 150 = 6$ dias.</p><p class="hint">Mais máquinas → menos dias (inversa); mais peças → mais dias (direta).</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Direta, inversa ou <span style="color:var(--growth);">nenhuma?</span>',
  subtitle: 'Classifique cada situação como grandezas <strong>diretamente</strong> proporcionais, <strong>inversamente</strong> proporcionais ou <strong>sem proporcionalidade</strong>. Treina o reflexo da regra de três.',
  tpl: cClassificar({
    cats: ['Direta', 'Inversa', 'Nenhuma'],
    intro: 'Para cada cartão, escolha a classificação e depois clique em <strong>Conferir</strong>. Dica: dobre uma grandeza e veja o que acontece com a outra.',
    final: 'Direta: razão constante. Inversa: produto constante. Se nenhum dos dois vale, não há proporcionalidade.',
    itens: [
      ['Número de pães comprados × valor total pago (preço fixo por pão)', 0, 'Dobrando os pães, dobra o valor: razão constante.'],
      ['Número de operários × dias para terminar a obra (mesmo ritmo)', 1, 'Mais operários, menos dias: o produto operários × dias é constante.'],
      ['Velocidade média × tempo gasto numa mesma viagem', 1, 'Distância fixa: $v · t$ é constante.'],
      ['Idade de uma pessoa × sua altura', 2, 'Não há regra constante: ao dobrar a idade, a altura não dobra nem cai pela metade.'],
      ['Quantidade de torneiras iguais × tempo para encher um tanque', 1, 'Mais torneiras, menos tempo: produto constante.'],
      ['Lado de um quadrado × seu perímetro', 0, 'O perímetro é $4l$: razão constante.'],
      ['Lado de um quadrado × sua área', 2, 'Área $= l^2$: dobrando o lado, a área quadruplica — não é proporcional.'],
      ['Quantidade de farinha × número de bolos iguais feitos', 0, 'Mais bolos, mais farinha, na mesma razão.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Porcentagem e taxas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas, da mais simples à mais traiçoeira. Responda com número (use vírgula ou ponto). Você tem duas tentativas por etapa e pode pedir uma dica.',
  final: 'Fatores, grupo que não muda e taxas: com esses três recursos, quase todo problema de texto de porcentagem cai em duas linhas.',
  problems: [
    { tag: 'Aumento', q: 'Um preço de <strong>R$ 150</strong> sofre aumento de <strong>12%</strong>. Qual o novo preço, em reais?', a: 168, unit: 'reais', hint: 'Fator de aumento: $1 + 12/100 = 1,12$.', sol: '<p>$150 × 1,12 = 168$. Novo preço: <strong>R$ 168</strong>.</p>' },
    { tag: 'Sucessivos', q: 'Dois reajustes seguidos: <strong>+30%</strong> e depois <strong>−10%</strong>. Qual a variação total, em %? (Dê o valor com sinal: positivo se aumento.)', a: 17, unit: '%', hint: 'Multiplique os fatores $1,3$ e $0,9$.', sol: '<p>$1,3 × 0,9 = 1,17$ → variação de <strong>+17%</strong>.</p>' },
    { tag: 'Desfazer', q: 'Qual desconto, em %, desfaz um aumento de <strong>150%</strong>?', a: 60, unit: '%', hint: 'Use $p/(100 + p)$ com $p = 150$.', sol: '<p>$150 / 250 = 0,6$ → <strong>60%</strong>.</p>' },
    { tag: 'Divisão proporcional', q: 'Divida <strong>270</strong> em partes proporcionais a <strong>2, 3 e 4</strong>. Qual a maior parte?', a: 120, hint: 'A soma das partes é 9; cada “parte” vale $270 / 9$.', sol: '<p>$k = 270/9 = 30$ → 60, 90 e 120. Maior parte: <strong>120</strong>.</p>' },
    { tag: 'Taxas', q: 'A torneira A enche um tanque em <strong>12 h</strong> e a B em <strong>4 h</strong>. Abertas juntas, em quantas horas enchem?', a: 3, unit: 'horas', hint: 'Taxas: $1/12 + 1/4$.', sol: '<p>$1/12 + 3/12 = 4/12 = 1/3$ por hora → <strong>3 h</strong>.</p>' },
    { tag: 'Sucessivos (nível ENA)', q: 'Um preço sofre <strong>aumento de 25%</strong> e, em seguida, <strong>desconto de 36%</strong>. O preço final é quantos % do original?', a: 80, unit: '%', hint: 'Fatores $1,25$ e $0,64$.', sol: '<p>$1,25 × 0,64 = 0,8$ → o preço final é <strong>80%</strong> do original.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
