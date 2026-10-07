// Deck 5 — Criptoativos (aulas 48, 49, 50)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 2ª série · Trimestre 3',
  h1: 'Criptoativos: <span style="color:var(--primary);">tecnologia</span>, volatilidade e escolhas responsáveis',
  sub: 'Como funcionam o Bitcoin e a blockchain, por que os preços oscilam tanto, como calcular risco e variação e como se proteger de golpes.',
  badges: [['AULAS 48, 49, 50'], ['Blockchain', 'growth'], ['Volatilidade e risco', 'danger']],
  color: 'primary', curve: 'M40,200 C 120,190 150,120 220,150 C 290,180 330,60 420,100 C 510,140 540,40 640,80 C 720,112 780,60 840,28', end: [840, 28]
}));

slides.push(roteiroSlide('Do gráfico do ENEM ao seu celular: um passeio pelo mundo cripto — com os pés no chão.', [
  ['Moeda de game x dinheiro real', 'o que dá valor a uma moeda: a confiança', 'coin'],
  ['Bitcoin e blockchain', 'Satoshi, P2P, 21 milhões e a corrente de blocos', 'link'],
  ['Mineradores e consenso', 'quem valida as transações e por que fraudar é inviável', 'lock'],
  ['O mercado e a volatilidade', 'corretoras, carteiras, frações e preço 24h por dia', 'chart'],
  ['Medir o risco', 'leitura de gráfico, desvio padrão e variação percentual sucessiva', 'scale'],
  ['Proteção e responsabilidade', 'DCA, HODL, stop-loss e diversificação', 'shield'],
  ['Golpes e regras de ouro', 'promessas absurdas, custos, taxas e checklist', 'warn']
]));

slides.push(objetivosSlide([
  'Compreender <strong>criptoativos e blockchain</strong> e explicar o funcionamento do mercado de criptomoedas.',
  'Analisar a <strong>volatilidade</strong> e comparar oscilações com outros ativos (desvio padrão e variações percentuais).',
  'Calcular <strong>rendimento líquido</strong> considerando taxas e custos.',
  'Fazer <strong>escolhas responsáveis</strong>: avaliar prós e contras e reconhecer golpes.'
], 'Habilidade em foco', 'Interpretar gráficos cartesianos, usar estatística (média, variância e desvio padrão) e porcentagem em decisões de investimento — e sempre comparar custos e riscos.', 'primary', 'primary'));

slides.push(sl('Aula 48 · gancho', 'Moeda de game x dinheiro real: qual a diferença?', `
          <div class="grid2">
            ${card('<strong>V-Bucks, Robux e afins</strong><p style="font-size:.92rem;margin-top:8px;">Servem <strong>apenas dentro do jogo</strong>. A empresa controla quantas moedas existem e pode alterar as regras a qualquer momento, sem aviso.</p>', 'danger')}
            ${card('<strong>O que dá valor real a uma moeda?</strong><p style="font-size:.92rem;margin-top:8px;">As pessoas precisam <strong>confiar</strong> nela e aceitá-la em troca de produtos e serviços. As criptomoedas trouxeram essa confiança ao mundo digital <strong>sem depender de um banco</strong>.</p>', 'success')}
          </div>
          ${mini('O que dá valor real a uma moeda?', ['Ter um desenho bonito', 'A confiança e a aceitação das pessoas em trocas', 'Ser emitida por um jogo', 'Ter sido criada recentemente'], 1, 'Valor vem de <strong>confiança e aceitação</strong>. Uma moeda de jogo só vale dentro do jogo e pode mudar de regra a qualquer momento.')}`, { cls: 'primary' }));

slides.push(sl('Aula 48 · teoria', 'Criptoativos e a origem do Bitcoin', `
          ${lede('<strong>Criptoativo</strong>: ativo virtual protegido por <strong>criptografia</strong> que roda em uma rede digital. O <strong>Bitcoin (BTC)</strong> foi lançado em 31/10/2008 por <strong>Satoshi Nakamoto</strong> como um sistema ponto a ponto (P2P).')}
          <div class="grid3">
            ${card('<strong>Sem intermediários</strong><p style="font-size:.88rem;margin-top:8px;">Transferência de valor direta de pessoa para pessoa, sem banco ou governo no meio.</p>', 'primary')}
            ${card('<strong>Escassez programada</strong><p style="font-size:.88rem;margin-top:8px;">No máximo <strong>21 milhões</strong> de bitcoins até 2140, para evitar a inflação.</p>', 'growth')}
            ${card('<strong>Rede descentralizada</strong><p style="font-size:.88rem;margin-top:8px;">Milhares de computadores guardam o mesmo registro: não existe um "dono" central.</p>', 'decay')}
          </div>
          ${callout('Atenção', 'Ter oferta limitada <strong>não garante preço estável</strong>: o valor continua variando conforme a procura. É isso que veremos adiante.')}`, { cls: 'primary' }));

slides.push(sl('Aula 48 · blockchain na prática', 'A corrente de blocos que ninguém consegue falsificar', `
          ${lede('Cada <strong>bloco</strong> reúne transações e recebe uma <strong>hash</strong> — uma impressão digital única. Cada bloco carrega a hash do anterior, formando um elo. <strong>Altere um texto abaixo</strong> e veja a corrente quebrar:')}
          <div id="bc-box" style="display:flex;flex-direction:column;gap:10px;margin-top:8px;"></div>
          <p class="hint" style="margin-top:8px;">Hash simplificada para demonstração (na vida real usa-se SHA-256). Um bloco é "válido" quando a hash começa com "00". O botão <b>Minerar</b> procura um <i>nonce</i> que satisfaz a regra — um trabalho que consome energia e é a "prova de esforço" da rede.</p>`, { cls: 'primary' }));

slides.push(sl('Aula 48 · teoria e desafio', 'Mineradores, consenso e o hacker', `
          <div class="grid2">
            <div>
              ${checks(['<strong>Computadores de alta performance</strong> competem para resolver cálculos complexos.', '<strong>Validam as regras</strong>: saldo legítimo do remetente e proteção contra o "gasto duplo".', '<strong>Recompensa em BTC</strong> para o primeiro que valida o bloco.', '<strong>Consenso:</strong> a transação só entra na blockchain quando a maioria dos nós concorda.'], '.9rem')}
            </div>
            <div>
              ${card('<strong>Desafio de segurança</strong><p style="font-size:.9rem;margin-top:6px;">Um hacker invade o computador de um minerador e tenta <strong>alterar uma transação antiga</strong> para colocar dinheiro na própria conta. O que acontece quando milhares de computadores verificam esse bloco adulterado?</p>', 'danger')}
              ${reveal('Resposta', '<p>Os outros computadores comparam o bloco adulterado com o histórico que já têm. Como a alteração <strong>não é validada pela maioria</strong> (e as hashes não conferem com os blocos seguintes), a transação é rejeitada e o hacker não coloca dinheiro algum na conta.</p>')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 48 · mercado', 'Como se negocia — e por que o preço muda o tempo todo', `
          <div class="grid2">
            <div>
              <p style="font-weight:700;margin:0 0 8px;">Como se negocia?</p>
              ${checks(['Abrir conta em uma <strong>corretora (exchange)</strong> ou negociar via P2P.', 'Transferir saldo em reais.', 'Comprar moedas inteiras ou <strong>frações</strong> (ex.: 0,001 BTC).', 'Guardar numa <strong>carteira digital (wallet)</strong> segura.'], '.9rem')}
            </div>
            <div>
              ${card('<strong>Volatilidade</strong><p style="font-size:.9rem;margin-top:6px;">Variação rápida e brusca do preço. Em 2010, 1 BTC valia menos de US$ 1; já superou US$ 50.000. O preço oscila <strong>24 horas por dia, 7 dias por semana</strong>, baseado em oferta e demanda.</p>', 'growth')}
              ${reveal('O que faz o preço subir ou despencar?', '<p>Oferta e procura. <strong>Notícias, mudanças nas regras, especulação, confiança</strong> e grandes compras ou vendas fazem muita gente comprar ou vender ao mesmo tempo, causando altas e quedas extremas.</p>')}
            </div>
          </div>`, { cls: 'growth' }));

const AB = [[9, 3, 0.5], [10, 2, 2], [11, 4, 4], [12, 5.5, 3], [13, 6, 1.5], [14, 3.5, 2], [15, 2.5, 4], [16, 1, 5], [17, 0.5, 3.5]];
slides.push(sl('Aula 48 · ENEM · gráfico cartesiano', 'Em quantos instantes A esteve mais valorizada que B?', `
          ${lede('No plano cartesiano, cada ponto <strong>(A, B)</strong> mostra o valor das criptomoedas A (eixo x) e B (eixo y), em R$ mil, em 9 horários (9h às 17h). Clique nos horários — e conte os instantes com <strong>A &gt; B</strong>:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid" style="padding:8px;"><svg id="ab-svg" viewBox="0 0 400 260" style="width:100%;height:auto;display:block;"></svg></div>
            <div>
              <div id="ab-chips" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;"></div>
              <p id="ab-t" style="margin:0 0 8px;font-weight:700;"></p>
              <p class="small" id="ab-c" style="margin:0 0 8px;"></p>
              ${reveal('Gabarito', '<p>A &gt; B às <strong>9h, 12h, 13h e 14h</strong> → <strong>4 instantes</strong> (alternativa B). Às 10h e 11h eles são <b>iguais</b>; a partir das 15h, B é maior.</p><p class="hint">Dica: A &gt; B quando o ponto está <b>abaixo</b> da reta y = x.</p>')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 48 · atividade', 'Quantas cotas do ETF de criptoativos?', `
          ${lede('Sandra investiu <strong>R$ 2.842,12</strong> em um fundo de índice de criptoativos regulamentado na B3. No dia, cada cota custava <strong>R$ 34,66</strong>. Quantas cotas ela comprou?')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Valor investido (R$)</label><input type="number" id="et-v" value="2842.12" step="0.01"></div><div><label>Preço da cota (R$)</label><input type="number" id="et-p" value="34.66" step="0.01"></div></div>
              <p class="small" style="margin:12px 0 0;">Cotas inteiras</p><div class="out" id="et-c" style="font-size:1.8rem;">82 cotas</div>
              <p class="small" id="et-s" style="margin:4px 0 0;">Sobra: R$ 0,00</p>
            </div>
            <div>
              ${callout('Resolução', '2.842,12 ÷ 34,66 → eliminando a vírgula (×100): 284.212 ÷ 3.466 = <strong>82</strong>. Conferência: 82 × 34,66 = R$ 2.842,12 ✔', 'success')}
              <p class="hint">Em fundos de índice (ETFs) a compra é feita em cotas: você divide o valor disponível pelo preço da cota.</p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 49 · ENEM · risco e desvio padrão', 'Medindo o risco: o desvio padrão', `
          ${lede('<strong>Desvio padrão (dp)</strong> mede o quanto os retornos variam em torno da média: <strong>quanto maior o dp, maior a volatilidade (risco)</strong>. Altere os retornos mensais e veja o dp:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <p class="small" style="margin:0 0 6px;">Retornos mensais (%), 5 meses</p>
              <div style="display:flex;gap:6px;flex-wrap:wrap;" id="dp-in"></div>
              <p class="small" style="margin:12px 0 0;">Média: <b id="dp-m" class="mono"></b> · Variância: <b id="dp-v" class="mono"></b></p>
              <p class="small" style="margin:6px 0 0;">Desvio padrão</p><div class="out" id="dp-d" style="font-size:1.8rem;"></div>
              <p class="small" id="dp-r" style="margin:4px 0 0;font-weight:700;"></p>
            </div>
            <div>
              ${callout('A questão', 'Retornos de <strong>3%, 15%, 6%, 9% e 12%</strong>. Calcule o desvio padrão e classifique o risco (dp &lt; 5% = muito baixo).')}
              ${reveal('Resolução', '<p>Média = (3+15+6+9+12) ÷ 5 = <strong>9%</strong>.</p><p>Variância = [(−6)² + 6² + (−3)² + 0² + 3²] ÷ 5 = 90 ÷ 5 = <strong>18</strong>.</p><p>dp = √18 ≈ <strong>4,24%</strong> &lt; 5% → risco <strong>muito baixo</strong> (alternativa A).</p>')}
              <p class="hint">No mercado tradicional, dp de 4,24% indica previsibilidade. Nos criptoativos a volatilidade chega a patamares extremos.</p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 49 · comparando ativos', 'Por que as criptomoedas são tão voláteis?', `
          <div class="grid3">
            ${card('<strong>Mercado 24/7</strong><p style="font-size:.88rem;margin-top:8px;">Negocia-se sem pausa, 24 horas por dia, 7 dias por semana.</p>', 'primary')}
            ${card('<strong>Especulação e notícias</strong><p style="font-size:.88rem;margin-top:8px;">Muito sensível a postagens em redes, rumores e declarações de figuras públicas.</p>', 'danger')}
            ${card('<strong>Liquidez e regulação</strong><p style="font-size:.88rem;margin-top:8px;">Mudanças de regras em grandes países geram incerteza e movimentos fortes.</p>', 'growth')}
          </div>
          <div class="grid2" style="margin-top:12px;">
            <div>
              ${tbl(['classe de ativo', 'oscilação típica / ano', 'risco'], [['Bitcoin (cripto)', '18% a 150%', '<b style="color:var(--danger);">Muito alto</b>'], ['Ibovespa (ações)', '10% a 40%', '<b style="color:var(--growth);">Alto/moderado</b>'], ['Dólar (moeda)', '5% a 30%', '<b style="color:var(--decay);">Baixo</b>']])}
            </div>
            <div>
              ${callout('BTC x SOL', 'Comparando o histórico de variação, a <strong>Solana (SOL)</strong> teve volatilidade percentual superior à do Bitcoin. O Bitcoin é mais consolidado; as <strong>altcoins têm risco ainda maior</strong>.', 'danger')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 49 · emoções x investimentos', 'FOMO, manada e a cabeça do investidor', `
          <div class="grid2">
            <div>
              ${card('<strong>Reações emocionais</strong><p style="font-size:.9rem;margin-top:6px;">A alta volatilidade desperta <strong>medo ou ganância</strong>: compra na alta e venda na baixa por impulso.</p>', 'danger')}
              ${card('<strong>Efeito de manada (FOMO)</strong><p style="font-size:.9rem;margin-top:6px;"><i>Fear Of Missing Out</i>: o medo de ficar de fora faz seguir a maioria sem analisar os fundamentos.</p>', 'growth')}
            </div>
            <div>
              ${callout('Alerta de risco', 'Decisões tomadas na empolgação ou no pânico são a principal causa de <strong>perdas financeiras irreversíveis</strong>.', 'danger')}
              ${reveal('Como evitar comprar no topo quando "todo mundo" fala de recorde?', '<p>Ter um <strong>plano financeiro claro</strong>, uma estratégia definida <strong>com antecedência</strong> e não agir por impulso, ganância ou influência de terceiros nas redes sociais.</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 49 · cálculo', 'Alta de 20% e queda de 25%: você ganha, perde ou empata?', `
          ${lede('Bitcoin: janeiro <strong>R$ 250.000</strong> → março <strong>R$ 300.000</strong> → maio <strong>R$ 225.000</strong>. Calcule a variação em cada período e o impacto em <strong>R$ 1.000</strong> investidos. Mexa nos preços:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Janeiro (R$)</label><input type="number" id="vp-1" value="250000" step="5000"></div><div><label>Março (R$)</label><input type="number" id="vp-2" value="300000" step="5000"></div><div><label>Maio (R$)</label><input type="number" id="vp-3" value="225000" step="5000"></div></div>
              <div class="row"><div><label>Investido (R$)</label><input type="number" id="vp-i" value="1000" step="100"></div></div>
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Jan → Mar: <b id="vp-a" class="mono"></b> &nbsp; → &nbsp; <b id="vp-ai" class="mono"></b></p>
              <p class="small" style="margin:6px 0 0;">Mar → Mai: <b id="vp-b" class="mono"></b> &nbsp; → &nbsp; <b id="vp-bi" class="mono"></b></p>
              <p class="small" style="margin:10px 0 0;">Resultado acumulado</p><div class="out" id="vp-r" style="font-size:1.6rem;"></div>
            </div>
          </div>
          ${callout('A pegadinha', 'Uma alta de 20% seguida de queda de 25% <strong>não zera</strong>: 1,20 × 0,75 = 0,90 → <strong>perda de 10%</strong> (−R$ 100). Variações percentuais sucessivas <strong>se multiplicam</strong>, não se somam.', 'danger')}`, { cls: 'danger' }));

slides.push(sl('Aula 49 · proteção', 'Como se proteger no mercado cripto', `
          <div class="grid2">
            ${card('<strong>DCA (Dollar-Cost Averaging)</strong><p style="font-size:.9rem;margin-top:6px;">Compras <strong>fracionadas e recorrentes</strong> ao longo do tempo, para diluir a volatilidade no preço médio.</p>', 'success')}
            ${card('<strong>Visão de longo prazo (HODL)</strong><p style="font-size:.9rem;margin-top:6px;">Foco na tese tecnológica e nos fundamentos, sem pavor com oscilações diárias.</p>', 'decay')}
            ${card('<strong>Stop-loss</strong><p style="font-size:.9rem;margin-top:6px;">Definir antes o <strong>limite máximo de perda</strong> aceitável em cada operação.</p>', 'growth')}
            ${card('<strong>Diversificação</strong><p style="font-size:.9rem;margin-top:6px;">Dividir o capital entre classes (renda fixa, ações, cripto) para reduzir a exposição.</p>', 'primary')}
          </div>
          <div class="wid" style="margin-top:10px;">
            <p class="small" style="margin:0 0 6px;"><b>Exemplo de DCA:</b> você investe R$ 100 por mês e o preço de uma moeda é: <span class="mono">R$ 10 · R$ 5 · R$ 20 · R$ 10</span></p>
            <p class="small" style="margin:0;">Quantidade comprada: 10 + 20 + 5 + 10 = <b>45 unidades</b> por R$ 400 → preço médio <b id="dc-p" class="mono"></b> (a média simples dos preços seria R$ 11,25).</p>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 50 · ENEM · custos e taxas', 'A maior taxa bruta nem sempre rende mais', `
          ${lede('Duas aplicações de <strong>R$ 10.000</strong>. <strong>Básica:</strong> 0,542% ao mês com taxa fixa de R$ 0,30. <strong>Pessoal:</strong> 0,560% ao mês com taxa de administração de 3,8% do rendimento. Qual rende mais <strong>líquido</strong> no mês?')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <p class="small" style="margin:0;">Básica</p><div class="out" id="tx-a" style="font-size:1.4rem;"></div>
              <p class="small" style="margin:8px 0 0;">Pessoal</p><div class="out" id="tx-b" style="font-size:1.4rem;color:var(--danger);"></div>
              <p class="small" id="tx-r" style="margin:8px 0 0;font-weight:700;"></p>
            </div>
            <div>
              ${reveal('Resolução', '<p><strong>Básica:</strong> 0,00542 × 10.000 = R$ 54,20 − R$ 0,30 = <strong>R$ 53,90</strong>.</p><p><strong>Pessoal:</strong> 0,00560 × 10.000 = R$ 56,00; taxa 3,8% × 56 ≈ R$ 2,13 → <strong>R$ 53,87</strong>.</p><p>Gabarito: <strong>alternativa A — aplicação Básica (R$ 53,90)</strong>.</p>')}
              ${callout('Ilusão do rendimento bruto', 'A aplicação "Pessoal" tinha a maior taxa bruta, mas a taxa percentual corroeu o lucro. <strong>Desconte todos os custos e impostos</strong> antes de avaliar a rentabilidade real. Em cripto entram ainda <strong>taxas de rede (gás)</strong> e corretagem.', 'danger')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 50 · estudo de caso', 'O caso das duas pizzas — e os preços de 2020 a 2022', `
          <div class="grid2">
            <div>
              ${card('<strong>🍕 A pizza de R$ 3 bilhões?</strong><p style="font-size:.9rem;margin-top:8px;">Em 2010, um programador comprou <strong>2 pizzas com 10.000 bitcoins</strong>, que valiam cerca de R$ 69. Hoje, esses bitcoins valem bilhões de reais.</p>', 'growth')}
              <p class="hint" style="margin-top:8px;">Fonte da série: Mercado Bitcoin (mb.com.br).</p>
            </div>
            <div>
              ${tbl(['ativo', 'mar/2020', 'mar/2021', 'mar/2022'], [['Bitcoin (BTC)', 'US$ 6.319,20', 'US$ 59.021,72', 'US$ 45.525'], ['Ethereum (ETH)', 'US$ 132,48', 'US$ 1.914,15', 'US$ 3.275,79']])}
              <p class="small" style="margin-top:8px;">Variação do ETH em 2 anos: (3.275,79 ÷ 132,48 − 1) × 100 ≈ <b>+2.373%</b>.</p>
            </div>
          </div>
          ${callout('Ponto de reflexão', 'Apesar da alta expressiva, o mercado teve <strong>quedas intermediárias severas</strong> (o BTC caiu de US$ 59 mil para US$ 45 mil). <strong>Rendimentos passados não garantem lucros futuros.</strong>', 'danger')}`, { cls: 'growth' }));

slides.push(sl('Aula 50 · prós e contras', 'Oportunidades e perigos', `
          <div class="grid2">
            <div>
              <p style="font-weight:700;margin:0 0 8px;color:var(--success);">Prós</p>
              ${card('<strong>Inovação tecnológica</strong><p style="font-size:.86rem;margin-top:6px;">Contratos inteligentes e finanças descentralizadas (DeFi), sem intermediação bancária tradicional.</p>', 'success', 'margin-bottom:8px;')}
              ${card('<strong>Acessibilidade global</strong><p style="font-size:.86rem;margin-top:6px;">Funciona 24/7 e é acessível a qualquer pessoa com internet.</p>', 'success', 'margin-bottom:8px;')}
              ${card('<strong>Diversificação potencial</strong><p style="font-size:.86rem;margin-top:6px;">Exposição controlada à nova economia Web3, em frações da carteira.</p>', 'success')}
            </div>
            <div>
              <p style="font-weight:700;margin:0 0 8px;color:var(--danger);">Contras e riscos</p>
              ${card('<strong>Sem garantias (sem FGC)</strong><p style="font-size:.86rem;margin-top:6px;">Sem proteção em caso de falência de corretoras ou desvalorização extrema.</p>', 'danger', 'margin-bottom:8px;')}
              ${card('<strong>Golpes e pirâmides</strong><p style="font-size:.86rem;margin-top:6px;">Promessas de rentabilidade fixa garantida são usadas por criminosos.</p>', 'danger', 'margin-bottom:8px;')}
              ${card('<strong>Irreversibilidade e custódia</strong><p style="font-size:.86rem;margin-top:6px;">Perdeu a chave ou a senha da carteira? O ativo se perde de forma irreversível.</p>', 'danger')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 50 · atividade', 'Esse "robô" paga 3% ao dia: é golpe?', `
          ${lede('Um influenciador promete <strong>3% de lucro diário garantido</strong> por meio de um robô de operações. Veja o que isso significaria:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Dias: <b id="gp-d">30</b></label><input type="range" id="gp-di" min="1" max="365" value="30">
              <label>Depósito inicial (R$)</label><input type="number" id="gp-c" value="1000" step="100">
              <p class="small" style="margin:12px 0 0;">Valor prometido ao final</p><div class="out" id="gp-v" style="font-size:1.5rem;color:var(--danger);"></div>
              <p class="small" id="gp-x" style="margin:4px 0 0;"></p>
            </div>
            <div>
              ${mini('Qual a decisão correta?', ['Investir rápido antes que a oportunidade acabe', 'Indicar aos amigos para ganhar comissão', 'Recusar: rentabilidade alta e garantida num mercado volátil é indício de golpe/pirâmide', 'Investir tudo, afinal é "garantido"'], 2, 'Rentabilidade <strong>alta e garantida</strong> em mercado volátil é o principal indício de <strong>fraude ou pirâmide</strong>. 3% ao dia equivaleriam a 1,03<sup>30</sup> ≈ 2,43 vezes em um mês!')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 50 · gestão de risco', 'Regras de ouro e o caso do Lucas', `
          <div class="grid3">
            ${card('<span class="badge">01</span><strong style="display:block;margin-top:8px;">Proteção primeiro</strong><p style="font-size:.86rem;margin-top:6px;">Reserva de emergência em <strong>renda fixa de alta liquidez</strong> antes de qualquer mercado volátil.</p>', 'success')}
            ${card('<span class="badge">02</span><strong style="display:block;margin-top:8px;">Alocação residual</strong><p style="font-size:.86rem;margin-top:6px;">Exposição <strong>limitada (1% a 5%</strong> do patrimônio) para não comprometer o orçamento básico.</p>', 'growth')}
            ${card('<span class="badge">03</span><strong style="display:block;margin-top:8px;">Estude o projeto</strong><p style="font-size:.86rem;margin-top:6px;">Nunca invista em ativos cujos <strong>fundamentos e utilidade</strong> você desconhece.</p>', 'decay')}
          </div>
          ${card('<strong>Caso do Lucas</strong><p style="font-size:.9rem;margin-top:6px;">Economizou <strong>R$ 1.000 para a formatura em 6 meses</strong>. Deve investir em Bitcoin para tentar multiplicar?</p>' + reveal('Resposta recomendada', '<p><strong>Não.</strong> Com prazo fixo e finalidade essencial de curto prazo, a volatilidade pode comprometer o capital no momento do resgate. O valor deve ficar em <strong>renda fixa com alta liquidez</strong> e segurança.</p>'), '', 'margin-top:12px;')}`, { cls: 'success' }));

slides.push(sl('Retomada · checklist interativo', 'Passo a passo antes de investir', `
          ${lede('Clique para marcar o que você já faria. Só depois do último item, pense em colocar dinheiro:')}
          <div id="ck-box" style="display:flex;flex-direction:column;gap:8px;margin-top:10px;"></div>
          <div class="bar" style="margin-top:12px;"><span id="ck-b" style="background:var(--success);width:0%"></span></div>
          <p class="small" id="ck-t" style="margin-top:6px;font-weight:700;"></p>`, { cls: 'success' }));

slides.push(sintese([
  ['Descentralização', 'Sem banco ou governo no meio; a blockchain registra tudo em blocos encadeados por hash.'],
  ['Volatilidade', 'O preço varia 24h por dia por oferta e demanda; o dp e a variação percentual medem o risco.'],
  ['Responsabilidade', 'Sem FGC e com golpes por toda parte: proteção primeiro, exposição pequena e estudo antes de investir.']
], '"Promessa de ganho alto e garantido, em mercado volátil, é sinal de golpe."'));

slides.push(quizSlide([
  { q: 'Qual a função dos mineradores na blockchain?', o: ['Emitir dinheiro livremente', 'Validar transações e proteger a rede', 'Vender bitcoins para bancos', 'Cobrar impostos'], a: 1 },
  { q: 'Alta de 20% seguida de queda de 25% resulta em:', o: ['Variação zero', 'Perda de 5%', 'Perda de 10%', 'Ganho de 5%'], a: 2 },
  { q: 'Quanto MAIOR o desvio padrão dos retornos, em geral:', o: ['Menor a volatilidade', 'Maior a volatilidade (risco)', 'Maior o lucro garantido', 'Nenhuma relação'], a: 1 },
  { q: 'O que NÃO existe nos criptoativos, ao contrário de um CDB?', o: ['Preço que oscila', 'Proteção do FGC', 'Mercado aberto 24h', 'Possibilidade de lucro'], a: 1 },
  { q: 'Um robô que promete 3% de lucro garantido por dia é, provavelmente:', o: ['Uma boa oportunidade', 'Um golpe ou pirâmide', 'Investimento de renda fixa', 'Um ETF'], a: 1 }
]));

slides.push(refsSlide([
  'BANCO CENTRAL DO BRASIL. <em>Cidadania Financeira</em>. bcb.gov.br/cidadaniafinanceira.',
  'COMISSÃO DE VALORES MOBILIÁRIOS (CVM). <em>Portal do Investidor</em>. investidor.gov.br.',
  'MERCADO BITCOIN. <em>Séries históricas de preços</em>. mb.com.br.',
  'NAKAMOTO, S. <em>Bitcoin: a peer-to-peer electronic cash system</em>, 2008.',
  'INEP. <em>Matriz de Referência do ENEM</em> e provas e gabaritos.'
], 'Para continuar', 'Escolhas responsáveis começam pelo conhecimento', 'Utilize só corretoras oficiais, ative a autenticação em dois fatores (2FA), pesquise a equipe e o projeto, evite decisões por impulso e desconfie de promessas de enriquecimento rápido.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  // ---- blockchain ----
  function hash(s){ var h = 2166136261; for(var i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } h = h >>> 0; return ('00000000' + h.toString(16)).slice(-8); }
  var blocks = [{d: 'Ana paga R$ 10 a Bia', n: 0}, {d: 'Bia paga R$ 4 a Caio', n: 0}, {d: 'Caio paga R$ 2 a Dani', n: 0}];
  var box = $('bc-box');
  function calc(){ var prev = '00000000'; blocks.forEach(function(b, i){ b.prev = prev; b.h = hash((i+1) + '|' + b.d + '|' + prev + '|' + b.n); b.ok = b.h.indexOf('00') === 0; prev = b.h; }); }
  function mine(i){ var b = blocks[i], n = 0, p = i ? blocks[i-1].h : '00000000'; while(n < 500000){ if(hash((i+1) + '|' + b.d + '|' + p + '|' + n).indexOf('00') === 0) break; n++; } b.n = n; }
  (function init(){ for(var i = 0; i < blocks.length; i++){ calc(); mine(i); } })();
  function render(keepFocus){
    calc();
    blocks.forEach(function(b, i){
      var el = box.children[i];
      if(!el){
        el = document.createElement('div'); el.className = 'card'; el.style.margin = '0';
        el.innerHTML = '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;"><span class="badge">Bloco ' + (i+1) + '</span><input type="text" class="bc-d" style="flex:1 1 200px;font:inherit;padding:.4em .6em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);"><button class="reveal bc-m" style="margin:0;">Minerar</button></div><p class="small mono bc-i" style="margin:8px 0 0;word-break:break-all;"></p>';
        el.querySelector('.bc-d').value = b.d;
        el.querySelector('.bc-d').addEventListener('input', function(){ blocks[i].d = this.value; render(); });
        el.querySelector('.bc-m').addEventListener('click', function(){ mine(i); render(); });
        box.appendChild(el);
      }
      el.className = 'card ' + (b.ok ? 'success' : 'danger');
      el.querySelector('.bc-i').innerHTML = 'hash anterior: <b>' + b.prev + '</b> · nonce: <b>' + b.n + '</b> · hash: <b>' + b.h + '</b> · ' + (b.ok ? '✔ válido' : '✘ inválido (a hash precisa começar com 00)');
    });
  }
  render();
  // ---- A x B ----
  var AB = ${JSON.stringify(AB)};
  var svg = $('ab-svg'), abc = $('ab-chips'), sel = 0;
  function abDraw(){
    var W = 400, H = 260, p = 34, mx = 7, X = function(v){ return p + (W - 2*p) * v / mx; }, Y = function(v){ return H - p - (H - 2*p) * v / mx; };
    var s = '<line x1="'+p+'" y1="'+(H-p)+'" x2="'+(W-p/2)+'" y2="'+(H-p)+'" stroke="var(--line-strong)" stroke-width="2"/><line x1="'+p+'" y1="'+(H-p)+'" x2="'+p+'" y2="'+(p/2)+'" stroke="var(--line-strong)" stroke-width="2"/><line x1="'+X(0)+'" y1="'+Y(0)+'" x2="'+X(mx)+'" y2="'+Y(mx)+'" stroke="var(--ink-faint)" stroke-dasharray="5 5"/><text x="'+(W-p)+'" y="'+(H-8)+'" font-size="11" text-anchor="end" fill="var(--ink-faint)">A (R$ mil)</text><text x="6" y="14" font-size="11" fill="var(--ink-faint)">B (R$ mil)</text>';
    AB.forEach(function(t, k){ var ok = t[1] > t[2]; s += '<circle cx="'+X(t[1])+'" cy="'+Y(t[2])+'" r="'+(k === sel ? 9 : 6)+'" fill="'+(ok ? 'var(--success)' : 'var(--danger)')+'" opacity="'+(k === sel ? 1 : .75)+'"/><text x="'+(X(t[1])+8)+'" y="'+(Y(t[2])-8)+'" font-size="10" fill="var(--ink-soft)">'+t[0]+'h</text>'; });
    svg.innerHTML = s;
    var t = AB[sel], ok = t[1] > t[2], eq = t[1] === t[2];
    $('ab-t').innerHTML = t[0] + 'h: (A, B) = (' + String(t[1]).replace('.', ',') + ' ; ' + String(t[2]).replace('.', ',') + ') → ' + (ok ? '<span style="color:var(--success);">A > B ✔</span>' : eq ? '<span style="color:var(--ink-soft);">A = B (não conta)</span>' : '<span style="color:var(--danger);">A < B</span>');
    var cnt = 0; for(var k = 0; k <= sel; k++){ if(AB[k][1] > AB[k][2]) cnt++; }
    $('ab-c').textContent = 'Instantes com A > B até aqui: ' + cnt + (sel === AB.length - 1 ? ' → total: 4 (alternativa B)' : '');
  }
  AB.forEach(function(t, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = t[0] + 'h'; b.addEventListener('click', function(){ abc.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); sel = k; abDraw(); }); abc.appendChild(b); });
  abDraw();
  // ---- ETF ----
  function etUp(){ var v = +$('et-v').value || 0, p = +$('et-p').value || 0; if(p <= 0){ return; } var c = Math.floor(v / p + 1e-9); $('et-c').textContent = c + (c === 1 ? ' cota' : ' cotas'); $('et-s').textContent = 'Sobra: ' + brl(v - c * p); }
  ['et-v','et-p'].forEach(function(id){ $(id).addEventListener('input', etUp); }); etUp();
  // ---- desvio padrão ----
  var R = [3, 15, 6, 9, 12], inw = $('dp-in');
  R.forEach(function(v, k){ var i = document.createElement('input'); i.type = 'number'; i.value = v; i.style.cssText = 'width:4.2em;font:inherit;padding:.35em .4em;border-radius:8px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);'; i.addEventListener('input', function(){ R[k] = +this.value || 0; dp(); }); inw.appendChild(i); });
  function dp(){ var m = R.reduce(function(a, b){ return a + b; }, 0) / R.length, v = R.reduce(function(a, b){ return a + (b - m) * (b - m); }, 0) / R.length, d = Math.sqrt(v);
    var f = function(x){ return x.toFixed(2).replace('.', ','); }; $('dp-m').textContent = f(m) + '%'; $('dp-v').textContent = f(v); $('dp-d').textContent = f(d) + '%';
    $('dp-r').textContent = d < 5 ? 'Risco: muito baixo (dp < 5%)' : d < 10 ? 'Risco: moderado' : 'Risco: alto'; $('dp-r').style.color = d < 5 ? 'var(--success)' : d < 10 ? 'var(--growth)' : 'var(--danger)'; }
  dp();
  // ---- variações sucessivas ----
  function vpUp(){ var a = +$('vp-1').value, b = +$('vp-2').value, c = +$('vp-3').value, i = +$('vp-i').value || 0; if(!a || !b){ return; }
    var v1 = (b - a) / a * 100, v2 = (c - b) / b * 100, f = function(x){ return (x >= 0 ? '+' : '') + x.toFixed(1).replace('.', ',') + '%'; };
    $('vp-a').textContent = f(v1); $('vp-ai').textContent = brl(i * b / a); $('vp-b').textContent = f(v2); $('vp-bi').textContent = brl(i * c / a);
    var fin = i * c / a, tot = (c - a) / a * 100, r = $('vp-r'); r.textContent = brl(fin) + ' (' + f(tot) + ')'; r.style.color = fin >= i ? 'var(--success)' : 'var(--danger)'; }
  ['vp-1','vp-2','vp-3','vp-i'].forEach(function(id){ $(id).addEventListener('input', vpUp); }); vpUp();
  // ---- DCA ----
  $('dc-p').textContent = brl(400 / 45);
  // ---- taxas ----
  var ba = 10000 * 0.00542 - 0.30, bb = 10000 * 0.0056 - 0.038 * 10000 * 0.0056;
  $('tx-a').textContent = 'Básica: ' + brl(ba); $('tx-b').textContent = 'Pessoal: ' + brl(bb);
  $('tx-r').textContent = 'A Básica rende ' + brl(ba - bb) + ' a mais, mesmo com taxa bruta menor.';
  // ---- golpe ----
  function gpUp(){ var d = +$('gp-di').value, c = +$('gp-c').value || 0; $('gp-d').textContent = d; var v = c * Math.pow(1.03, d); $('gp-v').textContent = v > 1e15 ? 'absurdo' : brl(v); $('gp-x').textContent = 'Seria ' + (Math.pow(1.03, d) >= 1e6 ? 'mais de um milhão de vezes' : Math.pow(1.03, d).toFixed(2).replace('.', ',') + ' vezes') + ' o valor depositado. Nenhum investimento legítimo garante isso.'; }
  ['gp-di','gp-c'].forEach(function(id){ $(id).addEventListener('input', gpUp); }); gpUp();
  // ---- checklist ----
  var CK = ['Usar apenas corretoras (exchanges) oficiais e registradas', 'Ativar a autenticação de dois fatores (2FA)', 'Pesquisar reputação, equipe e histórico do projeto', 'Ter reserva de emergência em renda fixa antes de investir', 'Limitar a exposição (1% a 5% do patrimônio)', 'Desconfiar de promessas de lucro rápido e garantido'];
  var cb = $('ck-box'), done = 0;
  CK.forEach(function(t){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.textContent = '☐  ' + t; b.addEventListener('click', function(){ if(b.dataset.on){ return; } b.dataset.on = 1; b.classList.add('correct'); b.textContent = '☑  ' + t; done++; $('ck-b').style.width = (done / CK.length * 100) + '%'; $('ck-t').textContent = done === CK.length ? '✔ Checklist completo: agora sim, pense no valor — pequeno e planejado.' : done + ' de ' + CK.length + ' itens'; }); cb.appendChild(b); });
`;

module.exports = { title: 'Criptoativos: Tecnologia, Volatilidade e Escolhas Responsáveis', brand: 'Criptoativos', aulas: 'Aulas 48–50', key: 'cripto', slides, extra, out: 'educacao-financeira/2-ano/3-tri/criptoativos/aula.html' };
