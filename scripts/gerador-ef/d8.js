// 1ª série — Deck C: cartão de crédito, CPF, SPC/Serasa e score (aulas 39, 43)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Cartão de crédito, <span style="color:var(--danger);">nome limpo</span> e score',
  sub: 'Por que limite não é renda, como uma fatura paga pela metade vira bola de neve e como o SPC e o Serasa medem se você é bom pagador.',
  badges: [['AULAS 39, 43'], ['Pagar o mínimo custa caro', 'danger'], ['Score de 0 a 1.000', 'primary']],
  color: 'danger', curve: 'M40,60 C 160,70 260,130 400,160 C 560,190 700,150 840,80', end: [840, 80]
}));

slides.push(roteiroSlide('Do "tenho limite" ao score de crédito.', [
  ['Como funciona o cartão', 'compra agora, fatura depois — e parcelar não barateia', 'coin'],
  ['Limite não é renda', 'o que você realmente pode gastar', 'scale'],
  ['A fatura paga pela metade', 'saldo + juros + fatura do mês = nova fatura', 'down'],
  ['ENEM 2013 PPL', 'pagando só o mínimo: quanto se deve em 3 meses?', 'target'],
  ['Regras atuais do cartão', 'o teto de 100% para os juros do rotativo', 'shield'],
  ['CPF, SPC e Serasa', 'quem é "negativado" e por quê', 'people'],
  ['O score de crédito', 'o que sobe, o que desce e como interpretar', 'chart']
]));

slides.push(objetivosSlide([
  'Compreender como funciona o <strong>cartão de crédito</strong> e o que significa comprar no crédito.',
  'Analisar como uma <strong>dívida evolui</strong> quando só parte da fatura é paga.',
  'Entender as funções dos <strong>serviços de proteção ao crédito</strong> (SPC e Serasa) e o papel do CPF.',
  'Interpretar o <strong>score</strong> e relacioná-lo a comportamentos de pagamento.'
], 'Habilidades do ENEM', 'MT H16 — variação de grandezas · MT H20 — gráfico cartesiano que relaciona grandezas (o gráfico do saldo devedor).', 'danger', 'danger'));

slides.push(sl('Aula 39 · para início de conversa', '"Tenho limite. Então posso comprar?"', `
          <div class="grid2">
            <div>
              ${lede('É o que pensa Ana: ela recebe <strong>R$ 2.500</strong> por mês, mas seu cartão tem limite de <strong>R$ 4.000</strong>. Qual é a chance de ela gastar mais do que pode, já que o limite é alto?')}
              ${stat('R$ 4.000', 'limite do cartão da Ana (maior que a renda de R$ 2.500)', 'danger')}
            </div>
            <div>
              ${mini('Ana gastou R$ 3.200 no cartão. Isso significa que:', ['Ela tem R$ 3.200 a mais para gastar', 'Ela assumiu o compromisso de pagar R$ 3.200 (mais que a renda do mês) na fatura', 'O banco pagou a conta sem custo', 'Ela ganhou R$ 3.200 de desconto'], 1, 'No crédito a compra é só <strong>adiada</strong>: vira dívida na fatura. R$ 3.200 é mais que a renda mensal dela.')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 39 · teoria', 'Afinal, como funciona o cartão de crédito?', `
          ${lede('Ele permite fazer uma compra <strong>agora</strong> e pagar <strong>depois</strong>, por meio de uma <strong>fatura</strong>. No débito, o dinheiro sai da conta na hora; no crédito, a compra é registrada e cobrada na fatura.')}
          <div class="grid4" style="margin-top:8px;">
            ${card('<span class="badge">1</span><p style="font-size:.86rem;margin-top:8px;"><strong>Compra</strong> no cartão.</p>')}
            ${card('<span class="badge">2</span><p style="font-size:.86rem;margin-top:8px;"><strong>Fechamento</strong> da fatura no mês.</p>')}
            ${card('<span class="badge">3</span><p style="font-size:.86rem;margin-top:8px;"><strong>Vencimento</strong>: dia de pagar.</p>')}
            ${card('<span class="badge">4</span><p style="font-size:.86rem;margin-top:8px;"><strong>Pagamento</strong> total — ou juros!</p>', 'danger')}
          </div>
          ${callout('Parcelar não é pagar menos', 'Um tênis de <strong>R$ 300</strong> parcelado em 3 vezes continua custando R$ 300: o pagamento só foi <strong>distribuído no tempo</strong>. Se houver juros, custa mais.')}`, { cls: 'danger' }));

slides.push(sl('Aula 39 · teoria', 'Limite não é renda!', `
          <div class="grid2">
            <div>
              ${lede('O limite do cartão <strong>não é dinheiro que você possui</strong>: é o máximo de crédito que a instituição disponibiliza, de acordo com as regras dela.')}
              ${callout('Exemplo', 'Renda de <strong>R$ 2.000</strong> e limite de <strong>R$ 5.000</strong>. Isso <strong>não</strong> significa que a pessoa tenha R$ 7.000 para gastar.', 'danger')}
            </div>
            <div class="wid">
              <p style="margin:0 0 8px;font-weight:700;">Complete: "Meu limite é <b id="lr-l"></b>, mas minha renda é <b id="lr-r"></b>. Portanto, preciso planejar considerando principalmente a minha <b>renda</b>."</p>
              <label>Seu limite: R$ <b id="lr-lv">5.000</b></label><input type="range" id="lr-li" min="500" max="10000" step="500" value="5000">
              <label>Sua renda: R$ <b id="lr-rv">2.000</b></label><input type="range" id="lr-ri" min="500" max="6000" step="250" value="2000">
              <p class="small" id="lr-t" style="margin:10px 0 0;font-weight:700;"></p>
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 39 · e se eu não pagar tudo?', 'A fatura paga pela metade vira bola de neve', `
          ${lede('O valor que fica para trás volta no mês seguinte <strong>com juros</strong> e ainda se soma à fatura do mês. Regra: <strong>Fatura − pagamento = saldo</strong>; <strong>saldo + juros + fatura do mês = nova fatura</strong>.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Fatura (R$)</label><input type="number" id="fa-f" value="1200" step="100"></div><div><label>Você paga (R$)</label><input type="number" id="fa-p" value="200" step="50"></div></div>
              <div class="row"><div><label>Juros sobre o saldo (% a.m.)</label><input type="number" id="fa-j" value="12" step="1"></div><div><label>Fatura do mês seguinte (R$)</label><input type="number" id="fa-n" value="1000" step="100"></div></div>
              <p class="small" style="margin:12px 0 0;">Saldo que ficou: <b id="fa-s" class="mono"></b> · juros: <b id="fa-jj" class="mono"></b></p>
              <p class="small" style="margin:6px 0 0;">Próxima fatura</p><div class="out" id="fa-r" style="font-size:1.8rem;color:var(--danger);"></div>
            </div>
            <div>
              ${callout('Exemplo da aula', 'Fatura de R$ 1.200, paga só R$ 200 → saldo R$ 1.000; juros de 12% = R$ 120; próxima fatura do mês R$ 1.000 → <strong>R$ 2.120</strong>. (O slide original mistura 12% e 15%; com 15% seriam R$ 2.150.)', 'danger')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('ENEM 2013 PPL · questão 171', 'Pagando só o mínimo, quanto se deve em 3 meses?', `
          ${lede('Um consumidor tem fatura de <strong>R$ 1.000</strong> em 01/03/2012. Ele paga sempre apenas o <strong>mínimo de 20% da fatura</strong>; o saldo restante recebe <strong>10% de juros</strong> ao mês. Qual será a dívida em <strong>01/05/2012</strong>?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['R$ 600,00', 'R$ 640,00', 'R$ 722,50', 'R$ 774,40', 'R$ 874,22'], 3, '<strong>R$ 774,40</strong> (alternativa D). As outras vêm de erros clássicos: ignorar os juros (A e B) ou usar 15% de mínimo (E).')}</div>
            <div>${tbl(['data', 'fatura', 'paga (20%)', 'saldo'], [['01/03', 'R$ 1.000', 'R$ 200', 'R$ 800'], ['01/04', '800 × 1,1 = R$ 880', 'R$ 176', 'R$ 704'], ['01/05', '704 × 1,1 = <b>R$ 774,40</b>', '—', '—']])}</div>
          </div>
          <div class="grid2" style="margin-top:8px;">
            ${callout('Quem paga só o mínimo...', 'Em dois meses pagou R$ 376 e <strong>ainda deve R$ 774,40</strong> — mais do que 3/4 da fatura original.', 'danger')}
            ${reveal('Por que as outras estão erradas?', '<p><b>R$ 600:</b> três pagamentos de R$ 200, sem juros. <b>R$ 640:</b> 1.000 − 200 − 160, sem juros. <b>R$ 722,50:</b> valor abaixo do correto. <b>R$ 874,22:</b> usou mínimo de 15%.</p>')}
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 39 · atualidades', 'E atualmente, como funciona?', `
          ${lede('Uma informação importante para não confundir a questão histórica do ENEM com as regras de hoje:')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Pagamento mínimo</strong><p style="font-size:.9rem;margin-top:8px;">Hoje <strong>não existe mais</strong> regra nacional de mínimo de 20%: o percentual é definido por cada instituição, em contrato.</p>')}
            ${card('<strong>Teto dos juros</strong><p style="font-size:.9rem;margin-top:8px;">Desde <strong>3 de janeiro de 2024</strong>, juros e encargos do <strong>rotativo</strong> e do parcelamento de cartão <strong>não podem exceder 100%</strong> do valor original da dívida.</p>', 'success')}
          </div>
          ${callout('Mas a ideia continua atual', 'Não pagar a fatura integralmente significa usar uma modalidade de crédito de <strong>altíssimo custo</strong>.', 'danger')}`, { cls: 'primary' }));

slides.push(sl('Aula 39 · atividade', 'Usar com responsabilidade: João, Maria e Pedro', `
          <p class="lede">Todos recebem <strong>R$ 2.500</strong>. Veja as três situações e responda:</p>
          <div class="grid3">
            ${card('<span class="badge">Situação A · João</span><p style="font-size:.88rem;margin-top:8px;">Fatura de <strong>R$ 650</strong>. Já separou o dinheiro para pagar <strong>integralmente</strong>.</p>', 'success')}
            ${card('<span class="badge">Situação B · Maria</span><p style="font-size:.88rem;margin-top:8px;">Fatura de <strong>R$ 2.400</strong>. Pretende pagar <strong>só o mínimo</strong> e continuar usando o cartão.</p>', 'danger')}
            ${card('<span class="badge">Situação C · Pedro</span><p style="font-size:.88rem;margin-top:8px;">Fatura de <strong>R$ 1.200</strong>. Vê que não pagará tudo: <strong>para de comprar</strong> e busca alternativa de crédito mais barata.</p>', 'growth')}
          </div>
          ${mini('Qual situação apresenta o MAIOR risco de endividamento?', ['A (João)', 'B (Maria)', 'C (Pedro)', 'Nenhuma'], 1, '<strong>Maria</strong>: a fatura quase consome a renda, ela paga só o mínimo e ainda continua gastando. João planejou; Pedro reagiu a tempo. <em>Maria deveria parar de usar o cartão e reorganizar o orçamento antes de continuar.</em>')}`, { cls: 'danger' }));

slides.push(sl('Aula 43 · CPF', 'Meu CPF — meu score — minha vida', `
          <div class="grid2">
            <div>
              ${lede('O <strong>CPF</strong> (Cadastro de Pessoa Física) é emitido pela Receita Federal e identifica o cidadão <strong>pela vida toda</strong>: abrir contas, pedir empréstimos, acessar serviços públicos...')}
              ${card('<strong>O 9º dígito</strong><p style="font-size:.88rem;margin-top:6px;">O nono dígito indica a <strong>Região Fiscal</strong> do endereço do cadastro inicial. O Paraná e o Rio Grande do Sul são a <strong>9ª região</strong> — por isso muitos de vocês têm o 9º dígito igual a 9.</p>')}
            </div>
            <div>
              ${tbl(['situação do CPF', 'significado'], [['Regular', 'sem pendências na Receita'], ['Pendente de regularização', 'declarações de IR não entregues'], ['Suspenso', 'informação faltando ou incorreta'], ['Cancelado', 'erro na geração do documento'], ['Falecido', 'pertence a pessoa falecida']])}
              <p class="hint" style="margin-top:6px;">A situação pode ser consultada no site da Receita Federal.</p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 43 · teoria', 'SPC, Serasa e o "nome sujo"', `
          ${lede('Pelo número do CPF, órgãos como o <strong>SPC</strong> e o <strong>Serasa</strong> montam listas de quem tem <strong>dívidas em atraso</strong> com bancos e empresas. Estar nessa lista é estar com o CPF <strong>negativado</strong>.')}
          <div class="grid3" style="margin-top:8px;">
            ${card('<strong>Termos do dia a dia</strong><p style="font-size:.88rem;margin-top:8px;">"Ter o nome sujo", "estar no SPC", "ser negativado" e, antigamente, "ser seprocado".</p>')}
            ${card('<strong>Riscos de emprestar o cartão</strong><p style="font-size:.88rem;margin-top:8px;">Se um amigo "sujo" usa seu cartão e não paga, <strong>a dívida é sua</strong> — e quem fica negativado é você.</p>', 'danger')}
            ${card('<strong>Score de crédito</strong><p style="font-size:.88rem;margin-top:8px;">Pontuação que mede o quanto alguém é <strong>bom ou mau pagador</strong>. O que mais pesa: pagar em dia.</p>', 'primary')}
          </div>
          ${mini('Seu amigo está com o nome sujo e pede seu cartão para comprar uma geladeira. O que você faz?', ['Empresto: amigo é amigo', 'Não empresto: se ele não pagar, a dívida e o risco de negativação são meus', 'Empresto metade', 'Empresto e peço o cartão dele em troca'], 1, 'Não empreste o cartão: <strong>a responsabilidade pela fatura é sua</strong>. Ajude de outras formas (orçamento, renegociação).')}`, { cls: 'primary' }));

slides.push(sl('Aula 43 · score de crédito', 'O score, na prática: simule o seu histórico', `
          ${lede('Todos começam com <strong>1.000 pontos</strong>. Clique nos eventos para ver como o score muda:')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              <div id="sc-ev" style="display:flex;flex-direction:column;gap:6px;"></div>
              <button class="reveal" id="sc-rs" type="button" style="margin-top:10px;">Zerar eventos</button>
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Seu score</p><div class="out" id="sc-v" style="font-size:2.4rem;">1000</div>
              <div class="bar" style="height:18px;margin:8px 0;"><span id="sc-b" style="background:var(--success);width:100%"></span></div>
              <p id="sc-c" style="margin:0;font-weight:700;"></p>
              <p class="hint" style="margin:8px 0 0;">Faixas: 0–300 muito baixo · 301–500 baixo · 501–700 bom · 701–1000 excelente.</p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 43 · atividade', 'Qual o score dessa cliente?', `
          ${lede('A cliente (começa em 1.000): <strong>atrasou a conta de telefone 30 dias</strong>; <strong>atrasou uma conta no comércio por 7 dias</strong>; tem <strong>dívida com a companhia de luz há mais de um ano</strong>; e <strong>renegociou</strong> uma dívida atrasada há mais de um ano.')}
          ${tbl(['evento', 'efeito'], [['Atraso de até 5 dias', '−5'], ['Atraso de 6 a 29 dias', '−20'], ['Atraso ≥ 30 dias', '−50 a cada 30 dias'], ['Atraso de mais de 1 ano', '−100 (tabela da aula)'], ['Renegociação até 29 dias', '+15'], ['Renegociação com mais de 30 dias', '+25']])}
          ${reveal('Resolução da aula', '<p>1.000 − 50 (telefone) − 20 (comércio) − 600 (luz, 12 × 50) + 25 (renegociação) = <strong>355 pontos</strong> → faixa <b>baixa</b> (301–500): risco médio de inadimplência.</p><p class="hint">Nota: a resolução da aula trata a dívida de mais de 1 ano como 12 atrasos de 30 dias (−50 × 12). Se usássemos o −100 da tabela para "mais de 1 ano", o resultado seria 855 — vale combinar com a turma qual regra adotar. Os pesos reais do Serasa não são públicos: tudo aqui é didático.</p>')}`, { cls: 'primary' }));

slides.push(sl('ENEM · gráfico cartesiano (H20)', 'O saldo devedor de quem fica 6 meses sem pagar', `
          ${lede('Um trabalhador demitido não paga as faturas do cartão por 6 meses, com juros e encargos incidindo. O gráfico mostra a evolução do saldo devedor: <strong>R$ 500</strong> no mês 0, ≈ <strong>R$ 560</strong> no mês 1, ≈ <strong>R$ 630</strong> no mês 2...')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid" style="padding:8px;"><svg id="gr-svg" viewBox="0 0 400 220" style="width:100%;height:auto;display:block;"></svg></div>
            <div>
              ${tbl(['mês', 'saldo', 'aumento', '% sobre o mês anterior'], [['0', 'R$ 500', '—', '—'], ['1', 'R$ 560', 'R$ 60', '12,0%'], ['2', 'R$ 630', 'R$ 70', '12,5%']])}
              ${mini('Saldo inicial, tipo de acréscimo e taxa são:', ['R$ 500; constante e inferior a 10% a.m.', 'R$ 560; variável e inferior a 10%', 'R$ 500; variável e superior a 10% a.m.', 'R$ 560; constante e superior a 10%', 'R$ 500; variável e inferior a 10%'], 2, '<strong>R$ 500; variável e superior a 10% ao mês</strong> (alternativa C): o aumento em reais cresce (60, 70, 80...) e a taxa passa de 10% — é juro composto.')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sintese([
  ['Cartão', 'Compra agora, paga depois. Limite não é renda; parcelar não barateia; pagar o mínimo gera bola de neve.'],
  ['Nome limpo', 'O CPF identifica você; SPC e Serasa listam quem deve. Nome sujo fecha portas — e emprestar o cartão é arriscado.'],
  ['Score', 'Começa em 1.000. Atrasos tiram pontos; pagar em dia e renegociar ajudam. Consulte o seu e cuide dele.']
], '"Planeje o pagamento antes de comprar: caiba no orçamento, não só no limite."'));

slides.push(quizSlide([
  { q: 'O limite do cartão de crédito representa:', o: ['Dinheiro que você possui', 'O valor máximo de crédito disponibilizado pela instituição', 'Sua renda mensal', 'Um desconto'], a: 1 },
  { q: 'Fatura de R$ 1.200, paga R$ 200 e saldo com 12% de juros; próxima fatura do mês: R$ 1.000. A nova fatura é:', o: ['R$ 2.000', 'R$ 2.120', 'R$ 1.120', 'R$ 2.400'], a: 1 },
  { q: 'Desde janeiro de 2024, os juros do rotativo do cartão:', o: ['Não têm limite', 'Não podem exceder 100% do valor original da dívida', 'São sempre de 5%', 'Foram extintos'], a: 1 },
  { q: 'Todo cidadão começa no score com:', o: ['0 pontos', '500 pontos', '1.000 pontos', '100 pontos'], a: 2 },
  { q: 'Emprestar o cartão a um amigo "negativado" é arriscado porque:', o: ['Ele ganha pontos', 'Se ele não pagar, a dívida e a negativação ficam para você', 'O banco cancela o cartão sempre', 'Não há risco'], a: 1 }
]));

slides.push(refsSlide([
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>. Maceió: [s.n.], 2024 (p. 161 e 165).',
  'BANCO CENTRAL DO BRASIL. Regras do rotativo e do parcelamento do cartão de crédito (a partir de 3/1/2024). bcb.gov.br.',
  'RECEITA FEDERAL. <em>Consulta de situação cadastral do CPF</em>. · SERASA. <em>Consultar meu CPF e score</em>. serasa.com.br.',
  'INEP. <em>Provas do ENEM</em> (ENEM 2013 PPL, questão 171).'
], 'Para continuar', 'Consulte seu CPF e seu score', 'Verifique a situação do seu CPF e o seu score nos canais oficiais, com a ajuda de um responsável.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function lrUp(){ var l = +$('lr-li').value, r = +$('lr-ri').value; $('lr-lv').textContent = l.toLocaleString('pt-BR'); $('lr-rv').textContent = r.toLocaleString('pt-BR'); $('lr-l').textContent = 'R$ ' + l.toLocaleString('pt-BR'); $('lr-r').textContent = 'R$ ' + r.toLocaleString('pt-BR');
    $('lr-t').textContent = l > r ? 'O limite é ' + (l / r).toFixed(1).replace('.', ',') + '× a renda: cuidado para não gastar mais do que ganha.' : 'Limite menor ou igual à renda: ainda assim, planeje pelo que cabe no orçamento.'; $('lr-t').style.color = l > r ? 'var(--danger)' : 'var(--success)'; }
  ['lr-li','lr-ri'].forEach(function(i){ $(i).addEventListener('input', lrUp); }); lrUp();
  function faUp(){ var f = +$('fa-f').value || 0, p = +$('fa-p').value || 0, j = (+$('fa-j').value || 0) / 100, n = +$('fa-n').value || 0, s = Math.max(0, f - p), jj = s * j;
    $('fa-s').textContent = brl(s); $('fa-jj').textContent = brl(jj); $('fa-r').textContent = brl(s + jj + n); }
  ['fa-f','fa-p','fa-j','fa-n'].forEach(function(i){ $(i).addEventListener('input', faUp); }); faUp();
  var EV = [['Pagamento atrasado em até 5 dias', -5], ['Atraso entre 6 e 29 dias', -20], ['Atraso de 30 dias (a cada 30 dias)', -50], ['Dívida com mais de 1 ano (a cada mês)', -50], ['Renegociação em até 29 dias', 15], ['Renegociação com mais de 30 dias', 25]];
  var cnt = EV.map(function(){ return 0; }), box = $('sc-ev');
  EV.forEach(function(e, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.style.cssText = 'margin:0;display:flex;justify-content:space-between;gap:10px;'; b.innerHTML = '<span>' + e[0] + '</span><b style="color:' + (e[1] < 0 ? 'var(--danger)' : 'var(--success)') + ';">' + (e[1] > 0 ? '+' : '') + e[1] + ' <span class="mono" data-n="' + k + '"></span></b>'; b.addEventListener('click', function(){ cnt[k]++; scUp(); }); box.appendChild(b); });
  function scUp(){ var s = 1000; EV.forEach(function(e, k){ s += e[1] * cnt[k]; box.querySelector('[data-n="' + k + '"]').textContent = cnt[k] ? '×' + cnt[k] : ''; }); s = Math.max(0, Math.min(1000, s));
    $('sc-v').textContent = s; $('sc-b').style.width = (s / 10) + '%';
    var c = s <= 300 ? ['Muito baixo — alto risco de inadimplência', 'var(--danger)'] : s <= 500 ? ['Baixo — risco médio de inadimplência', 'var(--growth)'] : s <= 700 ? ['Bom — baixo risco de inadimplência', 'var(--decay)'] : ['Excelente — muito baixo risco de inadimplência', 'var(--success)'];
    $('sc-c').textContent = c[0]; $('sc-c').style.color = c[1]; $('sc-b').style.background = c[1]; }
  $('sc-rs').addEventListener('click', function(){ cnt = EV.map(function(){ return 0; }); scUp(); }); scUp();
  (function(){ var W = 400, H = 220, p = 30, pts = [[0,500],[1,560],[2,630],[3,710],[4,800],[5,900],[6,1010]], X = function(m){ return p + (W - 2*p) * m / 6; }, Y = function(v){ return H - p - (H - 2*p) * (v - 400) / 700; };
    var s = '<line x1="'+p+'" y1="'+(H-p)+'" x2="'+(W-p/2)+'" y2="'+(H-p)+'" stroke="var(--line-strong)" stroke-width="2"/><line x1="'+p+'" y1="'+(H-p)+'" x2="'+p+'" y2="'+(p/2)+'" stroke="var(--line-strong)" stroke-width="2"/>';
    s += '<polyline fill="none" stroke="var(--danger)" stroke-width="3" points="' + pts.map(function(q){ return X(q[0]) + ',' + Y(q[1]); }).join(' ') + '"/>';
    pts.forEach(function(q){ s += '<circle cx="'+X(q[0])+'" cy="'+Y(q[1])+'" r="4" fill="var(--danger)"/><text x="'+X(q[0])+'" y="'+(H-p+14)+'" font-size="10" text-anchor="middle" fill="var(--ink-faint)">'+q[0]+'</text>'; });
    s += '<text x="'+(p+4)+'" y="'+(Y(500)-6)+'" font-size="10" fill="var(--ink-soft)">R$ 500</text><text x="'+(W-p)+'" y="'+(H-6)+'" font-size="10" text-anchor="end" fill="var(--ink-faint)">meses</text>';
    $('gr-svg').innerHTML = s; })();
`;

module.exports = { title: 'Cartão de Crédito, Nome Limpo e Score', brand: 'Cartão de Crédito e Score', aulas: 'Aulas 39, 43', serie: '1ª Série', key: 'cred3', slides, extra, out: 'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score.html' };
