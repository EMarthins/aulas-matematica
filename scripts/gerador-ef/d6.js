// 1ª série — Deck A: cheque especial e juros compostos (aulas 36, 37)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const f2 = v => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Crédito, cheque especial e <span style="color:var(--danger);">juros compostos</span>',
  sub: 'Por que o cheque especial vira bola de neve, como funcionam os juros sobre juros e como a matemática ajuda a decidir se vale a pena usar crédito.',
  badges: [['AULAS 36, 37'], ['Cheque especial: 9,78% a.m.', 'danger'], ['FV = PV·(1+i)ⁿ', 'growth']],
  color: 'danger', curve: 'M40,200 C 200,196 340,180 480,140 C 620,100 740,60 840,24', end: [840, 24]
}));

slides.push(roteiroSlide('Do jantar da Alane ao cálculo exato do que o crédito custa.', [
  ['O jantar no cheque especial', 'o que acontece quando "só se vive uma vez"', 'warn'],
  ['Investimento líquido no ENEM', 'rendimento bruto − taxa = líquido (Enem Digital 2020)', 'scale'],
  ['O que é o cheque especial', 'um empréstimo automático e caríssimo', 'building'],
  ['Estudo de caso: Paloma', 'juros de atraso x juros do cheque especial', 'chart'],
  ['Juros compostos', 'juros sobre juros: a fórmula FV = PV·(1+i)ⁿ', 'up'],
  ['Cartão: 16% ao mês', 'a dívida de R$ 1.000 que dobra em 6 meses', 'down'],
  ['ENEM: quando o capital dobra?', 'logaritmo e prazo de carência (ENEM 2019 PPL)', 'target']
]));

slides.push(objetivosSlide([
  'Tomar <strong>decisões responsáveis</strong> sobre o uso do crédito, evitando o endividamento.',
  'Compreender os <strong>custos</strong> do crédito disponível no mercado (cheque especial e cartão).',
  'Conhecer o conceito de <strong>juros compostos</strong> e suas taxas.',
  'Calcular montantes com <strong>FV = PV·(1 + i)<sup>n</sup></strong> e usar logaritmos para achar o prazo.'
], 'Habilidades do ENEM', 'MT H16 — variação de grandezas · MT H22 — conhecimentos algébricos como recurso para argumentar. Vamos nos preparar desde agora!', 'danger', 'danger'));

slides.push(sl('Para início de conversa', 'O jantar da Alane', `
          <div class="grid2">
            <div>
              ${lede('Alane está sem dinheiro, mas aceitou jantar com os amigos e pediu o <strong>prato mais caro</strong>. Quando perguntaram como pagaria, ela respondeu:')}
              ${callout('"Não tem problema! Vou usar o cheque especial. Só se vive uma vez e eu adoro camarão!"', '', 'danger')}
            </div>
            <div>
              ${card('<strong>Pense e responda</strong><p style="font-size:.92rem;margin-top:8px;">O que você entende por <strong>cheque especial</strong>? No lugar da Alane, o que você faria?</p>', 'growth')}
              ${mini('Alane usou o cheque especial para jantar. Foi uma boa ideia?', ['Sim: é dinheiro do banco, sem custo', 'Não: os juros do cheque especial estão entre os mais altos do mercado', 'Sim, desde que ela pague só no fim do ano', 'Tanto faz'], 1, 'O cheque especial "empresta" na hora, mas <strong>os juros são altíssimos</strong>. Usá-lo por alguns dias já pode virar uma bola de neve.')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('ENEM Digital 2020 · rendimento líquido', 'Antes do crédito, revisitando investimentos', `
          ${lede('Um investidor aplica <strong>R$ 10 mil</strong> por um mês. A aplicação <strong>Básica</strong> rende 0,542% e cobra taxa administrativa fixa de <strong>R$ 0,30</strong>. A <strong>Pessoal</strong> rende 0,560% e cobra <strong>3,8% sobre o rendimento bruto</strong>. Qual dá maior rendimento líquido e de quanto?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['Básica, R$ 53,90', 'Básica, R$ 54,50', 'Pessoal, R$ 56,00', 'Pessoal, R$ 58,12', 'Pessoal, R$ 59,80'], 0, 'Básica, <strong>R$ 53,90</strong> (alternativa A).')}</div>
            <div>${reveal('Resolução', `<p><strong>Básica:</strong> 10.000 × 0,00542 = R$ 54,20; menos R$ 0,30 → <strong>R$ 53,90</strong>.</p>
              <p><strong>Pessoal:</strong> 10.000 × 0,0056 = R$ 56,00; taxa 3,8% × 56 = R$ 2,128 → <strong>R$ 53,872</strong>.</p>
              <p class="hint">Rendimento líquido = bruto − taxa. A "maior taxa" nem sempre rende mais: foi o que vimos na unidade de investimentos. Agora, o outro lado da moeda: o crédito.</p>`)}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 36 · teoria', 'O cheque especial', `
          <div class="grid2">
            ${card('<strong>O que é</strong><p style="font-size:.92rem;margin-top:8px;">Uma quantia que fica <strong>automaticamente disponível</strong> na conta corrente. Quando o dinheiro acaba, o banco "empresta" na hora, sem precisar pedir.</p>')}
            ${card('<strong>O problema</strong><p style="font-size:.92rem;margin-top:8px;">Esse favor sai <strong>muito caro</strong>: os juros estão entre os mais altos do mercado. Poucos dias podem virar uma <strong>bola de neve</strong>.</p>', 'danger')}
          </div>
          ${callout('O ideal', 'Deixar o recurso bloqueado ou usar só em <strong>emergências absolutas</strong> e devolver o dinheiro o mais rápido possível.', 'success')}
          <div class="wid" style="margin-top:10px;">
            <p class="small" style="margin:0 0 4px;"><b>Quanto custa usar o cheque especial?</b></p>
            <div class="row"><div><label>Valor usado (R$)</label><input type="number" id="ce-v" value="1000" step="100"></div><div><label>Taxa (% ao mês)</label><input type="number" id="ce-i" value="9.78" step="0.1"></div><div><label>Dias de uso</label><input type="number" id="ce-d" value="20" step="1"></div></div>
            <p class="small" style="margin:10px 0 0;">Taxa equivalente diária: <b id="ce-td" class="mono"></b> · Dívida: <span class="out" id="ce-f"></span> · Juros: <b id="ce-j" class="mono" style="color:var(--danger);"></b></p>
          </div>`, { cls: 'danger' }));

slides.push(sl('Estudo de caso · Paloma', 'Pagar atrasado ou usar o cheque especial?', `
          ${lede('Paloma ganha <strong>R$ 1.500</strong>. Em março, usou o cheque especial por <strong>20 dias</strong> para pagar R$ 1.000 em contas. A taxa do cheque especial é <strong>9,78% ao mês</strong> — muito maior que as taxas de atraso das contas dela.')}
          <div class="grid2" style="margin-top:8px;">
            <div>${tbl(['despesa', 'valor', 'juros de atraso', 'juros (1 mês)'], [['Aluguel', 'R$ 600', '1% a.m.', 'R$ 6,00'], ['Luz', 'R$ 70', '0,5% a.m.', 'R$ 0,35'], ['Internet', 'R$ 50', '2% a.m.', 'R$ 1,00'], ['Financiamento da moto', 'R$ 280', '3% a.m.', 'R$ 8,40'], ['<b>Total</b>', '<b>R$ 1.000</b>', '', '<b>R$ 15,75</b>']])}</div>
            <div>
              ${callout('Convertendo a taxa', '9,78% ao mês ≈ <strong>0,31% ao dia</strong> (a conversão é feita com a fórmula de taxas equivalentes). FV = 1.000 · (1,0031)<sup>20</sup> ≈ <strong>R$ 1.063,86</strong>.', 'danger')}
              ${reveal('Conclusão', '<p>Pagando as contas com atraso, Paloma teria <strong>R$ 15,75</strong> de juros. Com o cheque especial, pagou <strong>R$ 63,86</strong> — mais de 4 vezes mais. Não foi uma boa ideia!</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Atividade · Jorge e o show de rock', 'Quanto custou o ingresso?', `
          ${lede('Jorge estava sem dinheiro, mas foi a um show: ingresso <strong>R$ 110</strong> + <strong>R$ 85</strong> de transporte e alimentação, tudo no <strong>cheque especial</strong>. Demorou <strong>45 dias</strong> para cobrir. Taxa: <strong>9,5% ao mês</strong>. Quanto pagou de juros?')}
          <div class="grid2" style="margin-top:8px;">
            ${reveal('Resolução', '<p>Dívida: 110 + 85 = <strong>R$ 195</strong>. Taxa diária equivalente: (1,095)<sup>1/30</sup> − 1 ≈ <strong>0,303% ao dia</strong>.</p><p>FV = 195 · (1,00303)<sup>45</sup> ≈ <strong>R$ 223,44</strong> → juros de <strong>R$ 28,44</strong>.</p>')}
            ${callout('Planejamento', 'Para evitar o cheque especial: orçamento <strong>equilibrado</strong> (despesas ≤ receitas) e a pergunta: "isso é uma <strong>urgência</strong> ou pode esperar e ser planejado?"', 'success')}
          </div>
          ${mini('Qual é o principal modo de evitar o cheque especial e o endividamento?', ['Ter um orçamento pessoal bem controlado e equilibrado', 'Pagar sempre o valor mínimo', 'Pedir mais um empréstimo', 'Ignorar os juros'], 0, 'Um <strong>orçamento controlado</strong> (despesas não maiores que a receita) e a análise de urgência antes de gastar.')}`, { cls: 'danger' }));

slides.push(sl('Aula 37 · para início de conversa', 'O carro que "custou dois carros"', `
          <div class="grid2">
            <div>
              ${lede('Lucas financiou um carro de <strong>R$ 55.000</strong> e saiu com um carnê de <strong>96 páginas</strong>: cada uma, uma prestação de <strong>R$ 1.080,78</strong>. Ao final dos 96 meses, o total pago quase compra <strong>dois carros</strong>.')}
              ${stat('R$ 103.754,88', '96 × R$ 1.080,78: o que Lucas pagará no total', 'danger')}
            </div>
            <div>
              ${callout('Por que isso acontece?', 'Os juros de financiamento de carro usado são altíssimos e fazem o valor <strong>crescer exponencialmente</strong>. O nome disso: <strong>juros compostos</strong>.', 'danger')}
              ${reveal('Quanto Lucas pagou a mais?', '<p>103.754,88 − 55.000 = <strong>R$ 48.754,88</strong> só de juros: quase 89% sobre o valor do carro.</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 37 · teoria', 'Juros compostos: o poder da bola de neve', `
          ${lede('Maria investe <strong>R$ 100</strong> e aplica mais <strong>R$ 100 todo mês</strong>, a <strong>1% ao mês</strong>. Mês 1: 100 + 1% = 101. Mês 2: 101 + 1% = 102,01, mais 100. Mês 3: 202,01 + 1% = 204,03, mais 100… Estime o valor em 20 anos!')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Aporte mensal: R$ <b id="jc-a">100</b></label><input type="range" id="jc-ai" min="50" max="500" step="50" value="100">
              <label>Taxa: <b id="jc-i">1,0</b>% ao mês</label><input type="range" id="jc-ii" min="0.5" max="2" step="0.1" value="1">
              <label>Anos: <b id="jc-t">20</b></label><input type="range" id="jc-ti" min="1" max="30" value="20">
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Sem juros (só somando)</p><div class="out" id="jc-s" style="color:var(--ink-soft);">R$ 24.000,00</div>
              <p class="small" style="margin:8px 0 0;">Com juros compostos</p><div class="out" id="jc-f" style="font-size:1.8rem;">R$ 99.914,79</div>
              <div class="bar" style="margin-top:10px;"><span id="jc-b1" style="background:var(--primary);width:24%"></span><span id="jc-b2" style="background:var(--growth);width:76%"></span></div>
            </div>
          </div>
          <p class="hint" style="margin-top:6px;">Resposta da aula: R$ 99.914,79 (aportes no início de cada mês). Sem juros, apenas R$ 24 mil.</p>`, { cls: 'growth' }));

slides.push(sl('Aula 37 · fórmula', 'Cálculo dos juros compostos', `
          ${formula('FV = PV · (1 + i)<sup>n</sup>', true)}
          <div class="grid4" style="margin-top:12px;">
            ${card('<span class="badge">FV</span><p style="font-size:.88rem;margin-top:8px;"><strong>Montante</strong> (valor futuro, já com juros).</p>')}
            ${card('<span class="badge">PV</span><p style="font-size:.88rem;margin-top:8px;"><strong>Capital</strong> (valor presente).</p>')}
            ${card('<span class="badge">i</span><p style="font-size:.88rem;margin-top:8px;"><strong>Taxa</strong> de juros, na forma decimal.</p>')}
            ${card('<span class="badge">n</span><p style="font-size:.88rem;margin-top:8px;"><strong>Períodos</strong> (mesma unidade da taxa).</p>')}
          </div>
          <div class="grid2" style="margin-top:12px;">
            ${callout('Exemplo', 'Pedro aplica <strong>R$ 1.500</strong> a <strong>7% ao ano</strong>. Em 24 meses (2 anos): FV = 1.500 · (1,07)<sup>2</sup> = <strong>R$ 1.717,35</strong>; juros de R$ 217,35.')}
            ${card('<strong>Dica: calculadora do celular</strong><p style="font-size:.88rem;margin-top:6px;">Digite <span class="mono">1500 × 1,07 ^ 2</span> (botão xʸ em algumas calculadoras) = 1.717,35.</p>')}
          </div>`, { cls: 'growth' }));

slides.push(sl('Atividade · cartão de crédito', 'A dívida de Conceição', `
          ${lede('Conceição fez uma compra de <strong>R$ 1.000</strong> no cartão e <strong>não pagou nada por 6 meses</strong>. A taxa do cartão é <strong>16% ao mês</strong>. Qual é o valor atual da dívida? Simule:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Dívida (R$)</label><input type="number" id="cc-v" value="1000" step="100"></div><div><label>Taxa (% ao mês)</label><input type="number" id="cc-i" value="16" step="1"></div><div><label>Meses</label><input type="number" id="cc-n" value="6" step="1" min="0" max="36"></div></div>
              <p class="small" style="margin:12px 0 0;">Dívida atual</p><div class="out" id="cc-f" style="font-size:1.8rem;color:var(--danger);">R$ 2.436,40</div>
              <p class="small" id="cc-j" style="margin:4px 0 0;"></p>
            </div>
            <div>
              ${callout('Resolução da aula', 'FV = 1.000 · (1 + 0,16)<sup>6</sup> = 1.000 · (1,16)<sup>6</sup> ≈ <strong>R$ 2.436,40</strong>. A dívida <strong>mais que dobrou</strong>: aumentou R$ 1.436,40 sem Conceição comprar nada de novo.', 'danger')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('ENEM 2019 PPL · juros compostos e logaritmo', 'Em quanto tempo o capital dobra?', `
          ${lede('Uma pessoa investe <strong>R$ 200</strong> a <strong>5% ao mês</strong> e quer <strong>duplicar</strong> o valor (R$ 400) ainda dentro do prazo de carência. Há planos com carências de 10, 15, 20, 28 e 40 meses. Qual escolher? Use log 2 = 0,30 e log 1,05 = 0,02.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Qual plano atende com a menor carência?', ['Plano A — 10 meses', 'Plano B — 15 meses', 'Plano C — 20 meses', 'Plano D — 28 meses', 'Plano E — 40 meses'], 1, '<strong>Plano B — 15 meses</strong>: é a menor carência em que o capital já dobrou.')}</div>
            <div>${reveal('Resolução', '<p>400 = 200·(1,05)<sup>n</sup> → 2 = 1,05<sup>n</sup>.</p><p>log 2 = n · log 1,05 → 0,30 = n · 0,02 → <strong>n = 15 meses</strong>.</p><p>A (10 meses) é pouco; C, D e E servem, mas têm carência maior que a necessária.</p>')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Quanto vale cada taxa?', 'Compare o custo de cada tipo de crédito', `
          ${lede('Simule a mesma dívida em cada modalidade. Escolha o valor e o prazo:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Valor da dívida (R$): <b id="cm-v">1.000</b></label><input type="range" id="cm-vi" min="200" max="5000" step="100" value="1000">
              <label>Meses sem pagar: <b id="cm-n">3</b></label><input type="range" id="cm-ni" min="1" max="12" value="3">
              <p class="hint" style="margin-top:8px;">Taxas usadas nas aulas: contas em atraso ~1% a.m.; cheque especial 9,78% a.m.; cartão (rotativo) 16% a.m.</p>
            </div>
            <div class="wid" id="cm-out"></div>
          </div>`, { cls: 'danger' }));

slides.push(sintese([
  ['Cheque especial', 'Crédito automático, caro e perigoso: usar só em emergência real e quitar rápido.'],
  ['Juros compostos', 'FV = PV·(1+i)ⁿ: juros sobre juros fazem a dívida (e o investimento) crescer em curva.'],
  ['Decidir bem', 'Compare custos, planeje o orçamento e lembre: o tempo trabalha a favor de quem investe — e contra quem deve.']
], '"Antes de usar crédito, calcule o que ele custa."'));

slides.push(quizSlide([
  { q: 'Por que o cheque especial é considerado um crédito perigoso?', o: ['Porque tem juros dos mais altos do mercado', 'Porque exige garantia de imóvel', 'Porque só existe para empresas', 'Porque não tem juros'], a: 0 },
  { q: 'Na fórmula FV = PV·(1 + i)ⁿ, o n representa:', o: ['A taxa', 'O capital', 'O número de períodos', 'O imposto'], a: 2 },
  { q: 'R$ 1.500 a 7% ao ano, em juros compostos, valem após 2 anos:', o: ['R$ 1.710,00', 'R$ 1.717,35', 'R$ 1.605,00', 'R$ 1.800,00'], a: 1 },
  { q: 'Uma dívida de R$ 1.000 a 16% ao mês, sem pagamentos por 6 meses, fica:', o: ['R$ 1.960,00', 'R$ 2.436,40', 'R$ 1.160,00', 'R$ 3.000,00'], a: 1 },
  { q: 'Para achar o prazo n em 2 = 1,05ⁿ usamos:', o: ['Logaritmo', 'Raiz quadrada', 'Porcentagem simples', 'Média'], a: 0 }
]));

slides.push(refsSlide([
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>. Maceió: [s.n.], 2024.',
  'BANCO CENTRAL DO BRASIL. <em>Cidadania Financeira</em> e <em>Calculadora do Cidadão</em>. bcb.gov.br.',
  'INEP. <em>Matriz de Referência do ENEM</em> e provas (Enem Digital 2020; ENEM 2019 PPL).'
], 'Para continuar', 'Crédito é ferramenta, não renda', 'Na próxima aula: calculadora financeira, taxas equivalentes e o cálculo das prestações de um financiamento.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function ceUp(){
    var v = +$('ce-v').value || 0, im = (+$('ce-i').value || 0) / 100, d = +$('ce-d').value || 0;
    var id = Math.pow(1 + im, 1/30) - 1, f = v * Math.pow(1 + id, d);
    $('ce-td').textContent = (id*100).toFixed(3).replace('.', ',') + '% a.d.'; $('ce-f').textContent = brl(f); $('ce-j').textContent = brl(f - v);
  }
  ['ce-v','ce-i','ce-d'].forEach(function(i){ $(i).addEventListener('input', ceUp); }); ceUp();
  function jcUp(){
    var a = +$('jc-ai').value, i = +$('jc-ii').value / 100, t = +$('jc-ti').value, n = t * 12;
    $('jc-a').textContent = a; $('jc-i').textContent = (i*100).toFixed(1).replace('.', ','); $('jc-t').textContent = t;
    var f = a * ((Math.pow(1 + i, n) - 1) / i) * (1 + i), s = a * n;
    $('jc-s').textContent = brl(s); $('jc-f').textContent = brl(f); $('jc-b1').style.width = (s / f * 100) + '%'; $('jc-b2').style.width = (100 - s / f * 100) + '%';
  }
  ['jc-ai','jc-ii','jc-ti'].forEach(function(i){ $(i).addEventListener('input', jcUp); }); jcUp();
  function ccUp(){
    var v = +$('cc-v').value || 0, i = (+$('cc-i').value || 0) / 100, n = +$('cc-n').value || 0, f = v * Math.pow(1 + i, n);
    $('cc-f').textContent = brl(f); $('cc-j').textContent = 'Juros acumulados: ' + brl(f - v) + (f >= 2 * v ? ' — a dívida mais que dobrou!' : '');
  }
  ['cc-v','cc-i','cc-n'].forEach(function(i){ $(i).addEventListener('input', ccUp); }); ccUp();
  function cmUp(){
    var v = +$('cm-vi').value, n = +$('cm-ni').value; $('cm-v').textContent = v.toLocaleString('pt-BR'); $('cm-n').textContent = n;
    var T = [['Contas em atraso (1% a.m.)', 0.01, 'var(--decay)'], ['Cheque especial (9,78% a.m.)', 0.0978, 'var(--growth)'], ['Cartão rotativo (16% a.m.)', 0.16, 'var(--danger)']];
    var mx = v * Math.pow(1.16, n) - v, h = '';
    T.forEach(function(t){ var j = v * Math.pow(1 + t[1], n) - v; h += '<p class="small" style="margin:6px 0 2px;"><b style="color:' + t[2] + ';">' + t[0] + '</b> — juros: <span class="mono">' + brl(j) + '</span></p><div class="bar"><span style="background:' + t[2] + ';width:' + Math.max(2, j / mx * 100) + '%"></span></div>'; });
    $('cm-out').innerHTML = h;
  }
  ['cm-vi','cm-ni'].forEach(function(i){ $(i).addEventListener('input', cmUp); }); cmUp();
`;

module.exports = { title: 'Crédito, Cheque Especial e Juros Compostos', brand: 'Crédito e Juros Compostos', aulas: 'Aulas 36, 37', serie: '1ª Série', key: 'cred1', slides, extra, out: 'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-1-cheque-especial-juros-compostos.html' };
