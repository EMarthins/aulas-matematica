// Deck 1 — Investir e renda fixa (aulas 36, 37, 38)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;

const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 2ª série · Trimestre 3',
  h1: 'Investir é fazer o dinheiro <span style="color:var(--primary);">trabalhar</span> por você',
  sub: 'Do primeiro porquê até a renda fixa: Tesouro Direto, CDB, LCI e LCA, os três riscos e como comparar o que rende de verdade no seu bolso.',
  badges: [['AULAS 36, 37, 38'], ['Renda fixa e riscos', 'growth'], ['Rendimento líquido x bruto', 'decay']],
  color: 'primary', curve: 'M40,210 C 200,205 340,185 480,140 C 620,95 740,55 840,28', end: [840, 28]
}));

slides.push(roteiroSlide('Sete paradas para sair do "guardar" e entrar no "investir" com segurança.', [
  ['O que é investir — e o que não é', 'poupar x investir, inflação e a diferença para a aposta', 'coin'],
  ['Por que investir', 'sonhos, reserva de emergência, aposentadoria e liberdade', 'target'],
  ['Renda fixa: o conceito', 'emprestar dinheiro em troca de juros previsíveis', 'building'],
  ['Tesouro Direto, CDB, LCI e LCA', 'quem recebe o seu dinheiro e quem paga imposto', 'shield'],
  ['Comparar pelo valor líquido', 'o que fica no bolso depois do Imposto de Renda', 'scale'],
  ['O tripé: rentabilidade, liquidez e risco', 'por que não dá para ter os três no máximo', 'chart'],
  ['Os riscos da renda fixa e o juro composto', 'crédito, mercado, liquidez — e a fórmula do montante', 'clock']
]));

slides.push(objetivosSlide([
  'Compreender o <strong>significado de investir</strong> e por que investir é diferente de guardar e de apostar.',
  'Conhecer os tipos de <strong>renda fixa</strong>: Tesouro Direto, CDB, LCI e LCA.',
  'Comparar investimentos pelo <strong>rendimento líquido</strong> e pela <strong>liquidez</strong>.',
  'Analisar os <strong>riscos</strong> da renda fixa e calcular a rentabilidade com juros compostos.'
], 'Habilidade em foco', 'Analisar modalidades de investimentos, juros e/ou riscos envolvidos (Hd06) e resolver situações-problema que envolvam conhecimentos algébricos (H21 do ENEM).', 'primary', 'primary'));

slides.push(sl('Início de conversa · renda passiva', 'Seu dinheiro pode trabalhar enquanto você dorme?', `
          <div class="grid2">
            <div>
              ${lede('Renda passiva é o dinheiro que <strong>o capital gera</strong>, mesmo quando você não está ali trabalhando.')}
              ${g3(
                card(`<span class="badge">Dividendos</span><p style="font-size:.85rem;margin-top:8px;">Parte do lucro de empresas.</p>`),
                card(`<span class="badge">Aluguéis</span><p style="font-size:.85rem;margin-top:8px;">Rendimento de imóveis.</p>`),
                card(`<span class="badge">Juros</span><p style="font-size:.85rem;margin-top:8px;">Pagamento por emprestar dinheiro.</p>`)
              )}
            </div>
            <div>
              ${callout('Liberdade de escolha', 'O objetivo final é fazer com que os <strong>rendimentos cubram o custo de vida</strong> — e você trabalhe por escolha, não por necessidade.')}
              ${reveal('Pergunta para a turma', '<p>Se seus rendimentos pagassem suas contas, o que você faria com o tempo livre? Quanto você precisaria acumular para isso?</p>')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 36 · teoria', 'O que é investimento?', `
          ${lede('<strong>Investir</strong> é aplicar o dinheiro hoje com a expectativa de receber um valor <strong>maior no futuro</strong>.')}
          <div class="grid2" style="margin-top:14px;">
            ${cardT('Poupar', 'É apenas <strong>guardar</strong> o dinheiro: acumular. O valor fica parado e a inflação vai corroendo o poder de compra.', '')}
            ${cardT('Investir', 'É fazer o dinheiro <strong>trabalhar para você</strong>: multiplicar. Todo investimento busca superar a inflação e gerar lucro real.', 'success', 'var(--success)')}
          </div>
          ${formula('Investir = plantar hoje para colher amanhã', false, 'margin-top:14px;')}
          ${mini('Qual é a principal diferença entre poupar e investir?', ['Poupar rende sempre mais que investir', 'Poupar acumula; investir busca multiplicar e vencer a inflação', 'Não há diferença', 'Investir é guardar dinheiro em casa'], 1, 'Poupar é acumular. Investir é aplicar o dinheiro para que ele <strong>cresça</strong> — idealmente acima da inflação.')}`));

slides.push(sl('Atividade · no quadro · inflação', 'O dinheiro "debaixo do colchão"', `
          ${lede('Você guardou <strong>R$ 100</strong> sem investir por um ano. A inflação do período foi de <strong>10%</strong>. Quanto esse dinheiro compra hoje? Mexa nos controles:')}
          <div class="grid2" style="margin-top:12px;">
            <div class="wid">
              <label>Valor guardado: <b id="co-v">R$ 100</b></label><input type="range" id="co-vi" min="50" max="1000" step="50" value="100">
              <label>Inflação ao ano: <b id="co-i">10%</b></label><input type="range" id="co-ii" min="1" max="20" step="1" value="10">
              <label>Anos parado: <b id="co-a">1</b></label><input type="range" id="co-ai" min="1" max="10" step="1" value="1">
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Poder de compra hoje</p>
              <div class="out" id="co-out" style="font-size:1.8rem;">R$ 90,91</div>
              <div class="bar" style="margin:10px 0;"><span id="co-b1" style="background:var(--success);width:91%"></span><span id="co-b2" style="background:var(--danger);width:9%"></span></div>
              <p class="small" id="co-txt" style="margin:0;">Sem gastar nada, você "perdeu" cerca de R$ 9,09 em poder de compra.</p>
            </div>
          </div>
          ${callout('Conclusão', 'Pela conta exata, R$ 100 com inflação de 10% valem <strong>100 ÷ 1,10 ≈ R$ 90,91</strong> em poder de compra (aproximadamente R$ 90). O dinheiro parado perde valor — por isso investir é proteger o patrimônio.', 'danger')}`, { cls: 'danger' }));

slides.push(sl('Aula 36 · teoria', 'Por que investir?', `
          ${lede('Investir não é só sobre ficar rico: é sobre <strong>liberdade e segurança</strong> para o seu futuro.')}
          <div class="grid2" style="margin-top:14px;">
            ${card(`<div style="display:flex;gap:10px;align-items:center;">${ic('target', 'icon', 28)}<strong>Realizar sonhos</strong></div><p style="margin-top:8px;font-size:.9rem;">Viagem, curso, casa própria: o investimento acelera suas conquistas.</p>`)}
            ${card(`<div style="display:flex;gap:10px;align-items:center;">${ic('shield', 'icon success', 28)}<strong>Reserva de emergência</strong></div><p style="margin-top:8px;font-size:.9rem;">Um "colchão de segurança" para imprevistos evita dívidas e empréstimos caros — e precisa render e estar disponível rápido.</p>`, 'success')}
            ${card(`<div style="display:flex;gap:10px;align-items:center;">${ic('up', 'icon growth', 28)}<strong>Vencer a inflação</strong></div><p style="margin-top:8px;font-size:.9rem;">Dinheiro parado perde valor. Investir mantém ou aumenta o poder de compra.</p>`, 'growth')}
            ${card(`<div style="display:flex;gap:10px;align-items:center;">${ic('clock', 'icon decay', 28)}<strong>Aposentadoria e futuro</strong></div><p style="margin-top:8px;font-size:.9rem;">Quanto mais cedo começa, mais o tempo trabalha a seu favor. <strong>Independência financeira</strong>: os rendimentos cobrem seus custos.</p>`, 'decay')}
          </div>`));

slides.push(sl('Do item do ENEM para a nossa vida', 'Independência financeira é liberdade', `
          <div class="grid2">
            <div>
              ${lede('A questão do ENEM (Linguagens) analisou uma campanha contra a <strong>violência à mulher</strong> e um agravante silencioso: a <strong>dependência financeira</strong> do agressor.')}
              ${callout('A violência também é patrimonial', 'O controle econômico opera como "correntes invisíveis" que impedem a ruptura do ciclo de abusos. Renda própria e reserva de emergência reduzem essa dependência e viabilizam buscar proteção e um novo recomeço.', 'danger')}
            </div>
            <div>
              ${card('<strong>Investir vai além de acumular riqueza</strong><p style="margin-top:8px;font-size:.92rem;">É conquistar <strong>liberdade de escolha</strong>, construir autonomia e garantir segurança para momentos de incerteza.</p>', 'success')}
              ${card(`<strong style="color:var(--danger);">Precisa de ajuda?</strong><p style="margin-top:6px;font-size:.88rem;">Ligue <strong>180</strong> (Central de Atendimento à Mulher) — gratuito, 24 horas. Em risco imediato, ligue <strong>190</strong>.</p>`, 'danger', 'margin-top:12px;')}
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 36 · teoria', 'Investimento não é aposta', `
          ${lede('Muita gente confunde as duas coisas. Marque <strong>V ou F</strong> e veja a explicação:')}
          <div class="grid2" style="margin-top:12px;">
            <div>
              ${vf('"Investimento é baseado em análise e geração de valor; o risco é controlado."', true, 'Verdadeira — o objetivo é o crescimento sustentável, com risco conhecido e escolhido.')}
              ${vf('"A aposta gera valor real e tem risco pequeno."', false, 'Falsa — a aposta depende da sorte, não gera valor real e o risco de perda total é altíssimo.')}
            </div>
            <div>
              ${vf('"Promessa de ganho fácil e garantido é sinal de alerta."', true, 'Verdadeira — rentabilidade alta e garantida, ao mesmo tempo, quase sempre é golpe ou aposta disfarçada.')}
              ${vf('"Quanto antes eu começo a investir, menos esforço mensal preciso fazer."', true, 'Verdadeira — o tempo é o maior aliado: os juros rendem sobre juros.')}
            </div>
          </div>
          ${callout('O multiplicador silencioso', 'Os <strong>juros compostos</strong> fazem o dinheiro render sobre o lucro acumulado. A paciência transforma pequenos aportes numa bola de neve — mais na próxima aula.')}`));

slides.push(sl('Aula 37 · teoria', 'Renda fixa: emprestar para receber juros', `
          ${lede('Investir em renda fixa é <strong>emprestar seu dinheiro</strong> a uma instituição (banco ou governo) em troca de <strong>juros</strong> por um tempo determinado. Você é o <strong>credor</strong>.')}
          <div class="grid3">
            ${card('<span class="badge">Prefixada</span><p style="font-size:.88rem;margin-top:8px;">A taxa é definida <strong>na hora da compra</strong>: você sabe exatamente quanto vai receber.</p>')}
            ${card('<span class="badge">Pós-fixada</span><p style="font-size:.88rem;margin-top:8px;">Acompanha um indicador, como a <strong>Selic</strong> ou o <strong>CDI</strong>.</p>')}
            ${card('<span class="badge">Híbrida</span><p style="font-size:.88rem;margin-top:8px;">Parte fixa + inflação (ex.: <strong>IPCA + 6%</strong> ao ano).</p>')}
          </div>
          ${callout('Segurança e previsibilidade', 'Na renda fixa você sabe <strong>como o rendimento será calculado</strong> desde o início. É a base de qualquer carteira.', 'success')}`, { cls: 'growth' }));

slides.push(sl('Aula 37 · teoria', 'Tesouro Direto: emprestando ao Governo', `
          ${lede('Você empresta ao <strong>Governo Federal</strong> para financiar obras, saúde e educação. É o investimento de <strong>menor risco do país</strong>: o Governo arrecada impostos e controla a emissão de moeda.')}
          <div class="grid3">
            ${card('<strong>Tesouro Selic</strong><p style="font-size:.88rem;margin-top:8px;">Acompanha a taxa básica de juros. Ideal para a <strong>reserva de emergência</strong> (liquidez diária).</p>', 'success')}
            ${card('<strong>Tesouro IPCA+</strong><p style="font-size:.88rem;margin-top:8px;"><strong>Protege contra a inflação</strong>: paga inflação mais uma taxa fixa. Bom para objetivos de longo prazo.</p>', 'growth')}
            ${card('<strong>Tesouro Prefixado</strong><p style="font-size:.88rem;margin-top:8px;">Taxa <strong>fixa garantida</strong> na compra. Você sabe o valor final se levar até o vencimento.</p>', 'decay')}
          </div>
          ${reveal('Por que o Governo é considerado o pagador mais seguro, mais que os grandes bancos?', '<p>Porque pode <strong>arrecadar impostos</strong> e <strong>emitir moeda</strong> para honrar suas dívidas. Por isso o Tesouro é o "porto seguro" do investidor iniciante.</p>')}`));

slides.push(sl('Aula 37 · teoria', 'CDB: financiando os bancos', `
          ${lede('O <strong>Certificado de Depósito Bancário</strong> é um título emitido por bancos para captar recursos. Na prática, você empresta dinheiro para o banco crescer.')}
          <div class="grid3">
            ${stat('até R$ 250 mil', 'protegidos pelo FGC, por CPF e por instituição', 'success')}
            ${stat('% do CDI', 'rentabilidade geralmente atrelada ao CDI', 'primary')}
            ${stat('Tabela regressiva', 'quanto mais tempo investido, menor o IR sobre o lucro', 'growth')}
          </div>
          ${callout('Tabela regressiva do IR', 'O imposto incide <strong>só sobre o lucro</strong> (não sobre o capital), com alíquota que cai com o tempo: de 22,5% (até 180 dias) até 15% (acima de 720 dias).')}
          ${mini('No CDB, o Imposto de Renda é cobrado sobre:', ['Todo o valor investido', 'Apenas o lucro (rendimento)', 'Apenas o capital inicial', 'Nada: CDB é isento'], 1, 'O IR incide <strong>somente sobre o rendimento</strong>. E, pela tabela regressiva, quanto mais tempo o dinheiro fica, menor a alíquota.')}`));

slides.push(sl('Aula 37 · teoria', 'LCI e LCA: o crédito com isenção', `
          <div class="grid2">
            ${card('<strong>LCI</strong> — Letra de Crédito Imobiliário<p style="font-size:.9rem;margin-top:8px;">Você empresta ao banco para <strong>financiar casas e prédios</strong>.</p>')}
            ${card('<strong>LCA</strong> — Letra de Crédito do Agronegócio<p style="font-size:.9rem;margin-top:8px;">O dinheiro financia a <strong>produção, máquinas e tecnologia no campo</strong>.</p>')}
          </div>
          <div class="callout success" style="margin-top:14px;"><h4>Isenção total de Imposto de Renda (para pessoa física)</h4><p>Todo o lucro vai direto para o seu bolso — por isso, às vezes rendem <strong>mais que o CDB</strong>, mesmo com taxa bruta menor.</p></div>
          ${tbl(['produto', 'quem recebe o dinheiro', 'IR', 'proteção FGC'], [['Tesouro Direto', 'Governo Federal', 'Tributado (regressivo)', 'não precisa: garantia do Governo'], ['CDB', 'Banco', 'Tributado (regressivo)', 'sim, até R$ 250 mil'], ['LCI / LCA', 'Banco (imobiliário / agro)', 'Isento', 'sim, até R$ 250 mil']])}`, { cls: 'success' }));

slides.push(sl('Atividade · calculadora', 'CDB x LCI: qual deixa mais no bolso?', `
          ${lede('Você tem duas opções por 1 ano: <strong>CDB com R$ 100 de lucro bruto (IR 17,5%)</strong> ou <strong>LCI com R$ 85 de lucro (isenta)</strong>. Teste outros números:')}
          <div class="grid2" style="margin-top:10px;">
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>CDB</b></p>
              <div class="row"><div><label>Lucro bruto (R$)</label><input type="number" id="cl-b" value="100" min="0" step="1"></div><div><label>Alíquota do IR (%)</label><input type="number" id="cl-ir" value="17.5" min="0" max="22.5" step="0.5"></div></div>
              <p class="small" style="margin:12px 0 4px;"><b>LCI / LCA (isenta)</b></p>
              <div class="row"><div><label>Lucro (R$)</label><input type="number" id="cl-l" value="85" min="0" step="1"></div></div>
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">CDB líquido: <span class="out" id="cl-o1">R$ 82,50</span></p>
              <p class="small" style="margin:6px 0;">LCI líquida: <span class="out" id="cl-o2">R$ 85,00</span></p>
              <p id="cl-r" style="font-weight:700;margin:10px 0 0;color:var(--success);">A LCI deixa R$ 2,50 a mais no bolso.</p>
              <p class="hint">Resolução da aula: CDB = 100 − 17,50 = R$ 82,50; LCI = R$ 85. <strong>Compare sempre o valor líquido!</strong></p>
            </div>
          </div>`, { cls: 'growth' }));

const liq = [['I', 900, 12], ['II', 700, 9], ['III', 300, 20], ['IV', 500, 10], ['V', 1000, 22]];
slides.push(sl('Aula 37 · ENEM · rendimento líquido', 'Qual investimento deixa mais dinheiro no bolso?', `
          ${lede('Cinco aplicações tiveram rendimento bruto e alíquota de Imposto de Renda diferentes. Qual tem o <strong>maior rendimento líquido</strong>?')}
          ${tbl(['investimento', 'rendimento bruto', 'alíquota do IR', 'IR (R$)', 'líquido (R$)'], liq.map(([n, b, a]) => [n, 'R$ ' + b, a + '%', '???', '???']))}
          ${reveal('Ver gabarito e cálculo', tbl(['investimento', 'cálculo do IR', 'líquido'], liq.map(([n, b, a]) => [n, `${b} × ${(a / 100).toFixed(2).replace('.', ',')} = ${b * a / 100}`, '<strong>R$ ' + (b - b * a / 100) + '</strong>'])) + '<p style="margin-top:8px;"><strong>Gabarito: Investimento I (R$ 792).</strong> Dica de prova: nem sempre o maior rendimento bruto (V: R$ 1.000) deixa o maior lucro no bolso — a alíquota faz toda a diferença!</p>')}`, { cls: 'primary' }));

slides.push(sl('Aula 37 · teoria', 'Liquidez e carência', `
          <div class="grid2">
            ${card('<strong>Liquidez diária</strong><p style="font-size:.92rem;margin-top:8px;">Você pode resgatar o dinheiro <strong>a qualquer momento</strong>. Essencial para a <strong>reserva de emergência</strong>.</p>', 'success')}
            ${card('<strong>Vencimento / carência</strong><p style="font-size:.92rem;margin-top:8px;">O dinheiro fica "preso" até uma data. Em troca, costuma pagar <strong>taxas maiores</strong>.</p>', 'growth')}
          </div>
          ${callout('Regra de ouro', 'Nunca invista, em títulos com carência longa, o dinheiro que você pode precisar amanhã.', 'danger')}
          <div class="card" style="margin-top:6px;">
            <strong>Atividade — Mariana, 17 anos</strong>
            <p style="font-size:.9rem;margin-top:6px;">Tem R$ 500 para a <strong>reserva de emergência</strong> e R$ 500 para um <strong>notebook daqui a 2 anos</strong>. Que títulos você recomendaria para cada objetivo?</p>
            ${reveal('Recomendação do especialista', '<p><strong>Reserva:</strong> Tesouro Selic ou CDB com liquidez diária (precisa de acesso imediato).</p><p><strong>Notebook (2 anos):</strong> CDB prefixado ou LCI/LCA com vencimento em 2 anos — pode abrir mão da liquidez por uma taxa melhor.</p>')}
          </div>`));

slides.push(sl('Aula 38 · teoria', 'O tripé dos investimentos', `
          ${lede('Escolha um investimento e veja como ele se posiciona nos três eixos. <strong>É impossível ter os três no máximo ao mesmo tempo!</strong>')}
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;" id="tp-chips"></div>
          <div class="grid3">
            <div class="wid"><p class="small" style="margin:0 0 6px;"><b>Rentabilidade</b> — o quanto cresce</p><div class="bar"><span id="tp-r" style="background:var(--growth);width:30%"></span></div></div>
            <div class="wid"><p class="small" style="margin:0 0 6px;"><b>Liquidez</b> — rapidez para resgatar</p><div class="bar"><span id="tp-l" style="background:var(--decay);width:80%"></span></div></div>
            <div class="wid"><p class="small" style="margin:0 0 6px;"><b>Risco</b> — chance de ser diferente do esperado</p><div class="bar"><span id="tp-k" style="background:var(--danger);width:10%"></span></div></div>
          </div>
          <p class="small" id="tp-t" style="margin-top:10px;"></p>`, { cls: 'primary' }));

slides.push(sl('Aula 38 · teoria', 'Os três riscos da renda fixa', `
          <div class="grid3">
            ${card('<strong>Risco de crédito</strong><p style="font-size:.88rem;margin-top:8px;">O famoso "calote": a instituição que pegou seu dinheiro <strong>não consegue pagar de volta</strong>.</p>', 'danger')}
            ${card('<strong>Risco de mercado</strong><p style="font-size:.88rem;margin-top:8px;">As taxas de juros (Selic/IPCA) oscilam e o <strong>valor do título pode mudar</strong> antes do vencimento.</p>', 'growth')}
            ${card('<strong>Risco de liquidez</strong><p style="font-size:.88rem;margin-top:8px;">Precisar do dinheiro hoje e só poder sacar <strong>daqui a meses ou anos</strong>.</p>', 'decay')}
          </div>
          ${callout('Dica de ouro', 'Procure investimentos protegidos pelo <strong>FGC</strong> (Fundo Garantidor de Créditos) — cobre até R$ 250 mil por CPF e por instituição.', 'success')}
          ${mini('Um banco quebra e não consegue devolver o dinheiro dos clientes. Qual risco se concretizou?', ['Risco de mercado', 'Risco de liquidez', 'Risco de crédito', 'Risco cambial'], 2, 'É o <strong>risco de crédito</strong> (calote). Em CDBs, o FGC cobre até R$ 250 mil por CPF e por instituição.')}`));

slides.push(sl('Atividades · segurança x rentabilidade', 'Qual você escolheria — e por quê?', `
          <div class="grid2">
            <div>
              <p style="font-weight:700;font-size:.92rem;">1. Opção A: <strong>10% ao ano</strong> com garantia total. Opção B: pode render <strong>30%</strong>, mas com risco de perder <strong>35%</strong>.</p>
              ${reveal('Ver comentário', '<p>Não há resposta única: depende do <strong>perfil</strong> (conservador x arrojado). Para objetivos de <strong>curto prazo</strong>, a segurança (Opção A) costuma ser priorizada.</p>')}
            </div>
            <div>
              ${mini('2. Você quer comprar um celular em <strong>6 meses</strong>. X rende 100% do CDI com liquidez diária; Y rende 120% do CDI, mas fica "preso" por 3 anos. Qual é melhor?', ['Y, porque rende mais', 'X, porque a liquidez atende ao prazo curto', 'Tanto faz', 'Nenhum dos dois'], 1, 'O Investimento <strong>X</strong>: apesar de render menos, oferece a <strong>liquidez</strong> necessária. O Y traz risco de liquidez para um objetivo de 6 meses.')}
            </div>
          </div>`));

slides.push(sl('Aula 38 · cálculo', 'Quanto rende? O montante com juros compostos', `
          <div class="grid2">
            <div>
              ${formula('F = C · (1 + i)<sup>n</sup>', true)}
              <p class="small"><b>F</b> montante · <b>C</b> capital · <b>i</b> taxa · <b>n</b> períodos</p>
              ${callout('Atividade', 'Um CDB rende <strong>1% ao mês</strong> em juros compostos. Investindo <strong>R$ 1.000</strong>, qual o valor bruto após <strong>2 meses</strong>?')}
              ${reveal('Resolução', '<p>F = 1000 · (1 + 0,01)<sup>2</sup> = 1000 · 1,0201 = <strong>R$ 1.020,10</strong></p>')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Simule você</b></p>
              <div class="row"><div><label>Capital C (R$)</label><input type="number" id="mc-c" value="1000" min="0" step="100"></div><div><label>Taxa i (% ao mês)</label><input type="number" id="mc-i" value="1" min="0" step="0.1"></div><div><label>Meses n</label><input type="number" id="mc-n" value="2" min="0" step="1"></div></div>
              <p class="small" style="margin:12px 0 0;">Montante F</p><div class="out" id="mc-f" style="font-size:1.7rem;">R$ 1.020,10</div>
              <p class="small" id="mc-j" style="margin:4px 0 0;">Juros ganhos: R$ 20,10</p>
            </div>
          </div>
          ${callout('E se eu quiser descobrir o tempo?', 'Quando a incógnita é o <strong>n</strong> (o expoente), usamos o <strong>logaritmo</strong> — assunto da próxima aula, onde descobrimos em quanto tempo o dinheiro dobra.', '')}`, { cls: 'decay' }));

slides.push(sintese([
  ['Investir', 'É fazer o dinheiro trabalhar: vence a inflação, realiza sonhos e traz liberdade. Não é aposta.'],
  ['Renda fixa', 'Você empresta e recebe juros: Tesouro (Governo); CDB, LCI e LCA (bancos). LCI e LCA são isentas de IR.'],
  ['Escolher bem', 'Compare o valor <strong>líquido</strong>, a <strong>liquidez</strong> e os três riscos: crédito, mercado e liquidez.']
], '"Não existe investimento perfeito: existe o que combina com o seu objetivo e o seu prazo."'));

slides.push(quizSlide([
  { q: 'Qual a diferença entre poupar e investir?', o: ['Poupar acumula; investir busca multiplicar e vencer a inflação', 'Poupar sempre rende mais', 'Investir é guardar em casa', 'São a mesma coisa'], a: 0 },
  { q: 'Qual título de renda fixa é isento de IR para pessoa física?', o: ['CDB', 'Tesouro Prefixado', 'LCI', 'Tesouro Selic'], a: 2 },
  { q: 'CDB: lucro bruto de R$ 100 com IR de 17,5%. Qual o lucro líquido?', o: ['R$ 100,00', 'R$ 82,50', 'R$ 17,50', 'R$ 117,50'], a: 1 },
  { q: 'Para a reserva de emergência, a melhor característica é:', o: ['Carência de 5 anos', 'Liquidez diária', 'Alto risco', 'Taxa prefixada longa'], a: 1 },
  { q: 'R$ 1.000 a 1% ao mês em juros compostos, após 2 meses, valem:', o: ['R$ 1.020,00', 'R$ 1.020,10', 'R$ 1.200,00', 'R$ 1.002,01'], a: 1 }
]));

slides.push(refsSlide([
  'TESOURO DIRETO. <em>Portal oficial</em>. tesourodireto.com.br.',
  'B3 — Brasil, Bolsa, Balcão. <em>Bora Investir</em>: Tesouro Direto e renda fixa.',
  'COMISSÃO DE VALORES MOBILIÁRIOS (CVM). <em>Portal do Investidor</em>. investidor.gov.br.',
  'BANCO CENTRAL DO BRASIL. <em>Cidadania Financeira</em>. bcb.gov.br/cidadaniafinanceira.',
  'CERBASI, G. <em>Investimentos inteligentes</em>. Sextante, 2008. · HOUSEL, M. <em>A psicologia financeira</em>. HarperCollins, 2021.',
  'INEP. <em>Matriz de Referência do ENEM</em> e provas e gabaritos.'
], 'Para continuar', 'Comece pequeno, comece hoje', 'O primeiro passo para investir é o conhecimento. Na próxima aula: juros compostos, o poder do tempo e como montar uma carteira.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  // inflação
  function coUp(){
    var v = +$('co-vi').value, i = +$('co-ii').value, a = +$('co-ai').value;
    $('co-v').textContent = 'R$ ' + v; $('co-i').textContent = i + '%'; $('co-a').textContent = a;
    var pc = v / Math.pow(1 + i/100, a); var perda = v - pc;
    $('co-out').textContent = brl(pc);
    $('co-b1').style.width = (pc / v * 100) + '%'; $('co-b2').style.width = (perda / v * 100) + '%';
    $('co-txt').textContent = 'Sem gastar nada, você "perdeu" cerca de ' + brl(perda) + ' em poder de compra (' + (perda / v * 100).toFixed(1).replace('.',',') + '%).';
  }
  ['co-vi','co-ii','co-ai'].forEach(function(id){ $(id).addEventListener('input', coUp); }); coUp();
  // CDB x LCI
  function clUp(){
    var b = +$('cl-b').value || 0, ir = +$('cl-ir').value || 0, l = +$('cl-l').value || 0;
    var n1 = b * (1 - ir/100);
    $('cl-o1').textContent = brl(n1); $('cl-o2').textContent = brl(l);
    var r = $('cl-r'), d = Math.abs(n1 - l);
    if(Math.abs(n1 - l) < 0.005){ r.textContent = 'Empate: os dois deixam o mesmo valor no bolso.'; r.style.color = 'var(--ink)'; }
    else if(l > n1){ r.textContent = 'A LCI deixa ' + brl(d) + ' a mais no bolso.'; r.style.color = 'var(--success)'; }
    else { r.textContent = 'O CDB deixa ' + brl(d) + ' a mais no bolso.'; r.style.color = 'var(--growth)'; }
  }
  ['cl-b','cl-ir','cl-l'].forEach(function(id){ $(id).addEventListener('input', clUp); }); clUp();
  // montante
  function mcUp(){
    var c = +$('mc-c').value || 0, i = (+$('mc-i').value || 0)/100, n = +$('mc-n').value || 0;
    var f = c * Math.pow(1 + i, n); $('mc-f').textContent = brl(f); $('mc-j').textContent = 'Juros ganhos: ' + brl(f - c);
  }
  ['mc-c','mc-i','mc-n'].forEach(function(id){ $(id).addEventListener('input', mcUp); }); mcUp();
  // tripé
  var TP = [
    ['Poupança', 25, 100, 5, 'Liquidez imediata e risco baixo, mas rentabilidade modesta (e muitas vezes abaixo de outras opções de renda fixa).'],
    ['Tesouro Selic', 45, 90, 8, 'Boa liquidez e risco muito baixo (garantia do Governo): ideal para a reserva de emergência.'],
    ['CDB prefixado', 60, 35, 15, 'Rende mais, mas a liquidez costuma ser menor (carência) e o risco de crédito é do banco (FGC até R$ 250 mil).'],
    ['LCI / LCA', 65, 30, 15, 'Isentas de IR, rendem bem, mas costumam ter carência: liquidez menor.'],
    ['Ações', 90, 70, 85, 'Potencial de retorno alto, porém risco alto e preço oscilando todo dia (renda variável).']
  ];
  var box = $('tp-chips');
  TP.forEach(function(t, k){
    var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 1 ? ' on' : ''); b.textContent = t[0];
    b.addEventListener('click', function(){ box.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); sel(k); });
    box.appendChild(b);
  });
  function sel(k){ var t = TP[k]; $('tp-r').style.width = t[1] + '%'; $('tp-l').style.width = t[2] + '%'; $('tp-k').style.width = t[3] + '%'; $('tp-t').innerHTML = '<strong>' + t[0] + ':</strong> ' + t[4] + ' <span class="hint">(posições ilustrativas, para comparar)</span>'; }
  sel(1);
`;

module.exports = { title: 'Investir e Renda Fixa: o Dinheiro Trabalhando por Você', brand: 'Investimentos e Renda Fixa', aulas: 'Aulas 36–38', key: 'invest1', slides, extra, out: 'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-1-investir-renda-fixa.html' };
