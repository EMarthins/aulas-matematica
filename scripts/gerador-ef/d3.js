// Deck 3 — Renda variável e Bolsa de Valores (aulas 43, 44, 45)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 2ª série · Trimestre 3',
  h1: 'Ser sócio: <span style="color:var(--growth);">renda variável</span> e a Bolsa',
  sub: 'Ações, fundos imobiliários e ETFs; como o preço nasce da oferta e da demanda; quais são os riscos e como proteger o patrimônio quando o mercado oscila.',
  badges: [['AULAS 43, 44, 45'], ['Ações · FIIs · ETFs', 'growth'], ['Volatilidade e mitigação de riscos', 'danger']],
  color: 'growth', curve: 'M40,200 C 120,150 170,190 250,140 C 330,90 380,170 470,120 C 560,70 620,130 700,80 C 760,45 800,60 840,26', end: [840, 26]
}));

slides.push(roteiroSlide('De credor a sócio: o mapa da renda variável.', [
  ['Fixo x variável', 'o que a corrida de aplicativo ensina sobre previsibilidade', 'scale'],
  ['Ações, FIIs e ETFs', 'sócio de empresas, "aluguel" sem imóvel e a cesta de ativos', 'building'],
  ['Volatilidade', 'o sobe e desce — e por que não é para a reserva de emergência', 'chart'],
  ['A Bolsa por dentro', 'B3, corretora, home broker e a lei da oferta e da demanda', 'coin'],
  ['Ibovespa, horários e regras', 'o termômetro da economia e o xerife (CVM)', 'target'],
  ['Mapa dos riscos', 'mercado, crédito, liquidez e operacional — e a crise de 2008', 'warn'],
  ['Mitigar ≠ eliminar', 'diversificar, ter prazo e alocar entre fixa e variável', 'shield']
]));

slides.push(objetivosSlide([
  'Conhecer os tipos de <strong>renda variável</strong> (ações, FIIs e ETFs) e diferenciá-los da renda fixa.',
  'Compreender o <strong>funcionamento da Bolsa</strong> (B3) e a dinâmica de oferta e demanda.',
  'Analisar os <strong>riscos</strong> da renda variável e os fatores que movem os preços.',
  'Identificar <strong>estratégias de mitigação</strong>: diversificação, prazo e alocação.'
], 'Habilidade em foco', 'Matemática e decisões financeiras no ENEM: funções com parte fixa e variável (aula 43), leitura de operações no tempo (aula 44) e juros compostos com logaritmo (aula 45).', 'growth', 'growth-ink'));

slides.push(sl('Aula 43 · ENEM · parte fixa + parte variável', 'Quanto custa a corrida de aplicativo?', `
          ${lede('O valor de uma corrida tem uma <strong>tarifa base de R$ 2</strong> (fixa), mais <strong>R$ 0,26 por minuto (T)</strong> e <strong>R$ 1,40 por quilômetro (D)</strong>. Qual expressão dá o valor total V?')}
          <div class="grid2" style="margin-top:8px;">
            <div>${mini('Alternativas', ['V = 2,26T + 1,40D', 'V = 2 + 0,26T + 1,40D', 'V = 2 + 1,66(T + D)', 'V = 2·(0,26T + 1,40D)', 'V = 3,66 + T + D'], 1, '<strong>V = 2 + 0,26T + 1,40D</strong> (alternativa B): parte fixa + parte variável pelo tempo + parte variável pela distância.')}</div>
            <div>
              ${tbl(['elemento do aplicativo', 'equivalente no investimento'], [['Tarifa base fixa', 'Renda fixa: previsibilidade'], ['Tempo e distância (variam)', 'Renda variável: fatores externos'], ['Trânsito muda o preço', 'O mercado muda a cotação']])}
              ${callout('Ponte para a aula', 'Assim como o trânsito afeta a corrida, <strong>o mercado afeta a renda variável</strong>: o retorno depende do desempenho da empresa, dos dividendos e do "humor" dos investidores.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 43 · gancho', 'Credor ou sócio?', `
          <div class="grid2">
            ${card('<strong>Na renda fixa você é credor</strong><p style="margin-top:8px;font-size:.92rem;">Empresta dinheiro para o banco ou o governo e recebe <strong>juros</strong> combinados.</p>', 'decay')}
            ${card('<strong>Na renda variável você é sócio</strong><p style="margin-top:8px;font-size:.92rem;">Ao comprar ações você é <strong>dono de um pedacinho</strong> do negócio e participa dos <strong>lucros</strong>.</p>', 'growth')}
          </div>
          ${callout('Pergunta', 'Você prefere emprestar dinheiro para o banco ou ser "dono" de um pedacinho dele? Qual a diferença entre receber <strong>juros</strong> e receber <strong>lucros</strong>?')}
          ${reveal('Pensando juntos', '<p><strong>Juros</strong> são combinados antes e não dependem do desempenho do banco. <strong>Lucros</strong> dependem do resultado da empresa: podem ser maiores — ou não existir. Mais retorno potencial, mais risco.</p>')}`, { cls: 'growth' }));

slides.push(sl('Aula 43 · teoria', 'O que é renda variável?', `
          ${lede('É a classe de ativos em que a <strong>rentabilidade não é garantida nem conhecida</strong> no momento da compra. O preço "varia" conforme o mercado.')}
          <div class="grid3">
            ${card('<span class="badge">RISCO</span><p style="font-size:.88rem;margin-top:8px;">Maior: o preço pode cair e você pode perder parte do capital.</p>', 'danger')}
            ${card('<span class="badge">RETORNO</span><p style="font-size:.88rem;margin-top:8px;">Potencialmente maior no longo prazo: <strong>valorização do preço</strong> + <strong>proventos (dividendos)</strong>.</p>', 'success')}
            ${card('<span class="badge">LIQUIDEZ</span><p style="font-size:.88rem;margin-top:8px;">Em geral boa (dá para vender em dias de pregão), mas o preço de venda pode ser menor que o de compra.</p>', 'decay')}
          </div>
          ${callout('Destaque', 'Na renda variável aceitamos <strong>mais risco</strong> em busca de um <strong>retorno potencialmente maior</strong> no longo prazo.')}`, { cls: 'growth' }));

slides.push(sl('Aula 43 · teoria', 'Ações: sócio das empresas', `
          <div class="grid2">
            <div>
              ${lede('Uma <strong>ação</strong> é a menor parte de uma empresa. Ao comprá-la você vira <strong>acionista</strong> (sócio). Ganhos possíveis:')}
              ${checks(['<strong>Valorização</strong> do preço da ação.', '<strong>Dividendos</strong>: sua parte no lucro distribuído aos sócios — "dinheiro pingando na conta".', 'Ser "sócio" de marcas como Apple, Vale ou Petrobras.'])}
            </div>
            <div>
              ${card('<strong>Atividade</strong><p style="font-size:.9rem;margin-top:6px;">De qual empresa que você usa todo dia gostaria de ser sócio (rede social, streaming, vestuário)? Por que ela continuará lucrando em 10 anos? <strong>O que pode dar errado?</strong></p>', 'growth')}
              ${reveal('Sugestão de resposta', '<p>Ser sócio exige análise. Uma empresa lucra quando <strong>resolve problemas das pessoas de forma eficiente</strong>. Os riscos: concorrência e mudanças no comportamento do consumidor. Pensar como dono é olhar para o <strong>futuro do negócio</strong>, não só para o preço de hoje.</p>')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 43 · FIIs', '"Aluguel" sem ter imóvel', `
          <div class="grid2">
            <div>
              ${lede('Os <strong>Fundos de Investimento Imobiliário</strong> permitem investir em shoppings, galpões e prédios <strong>sem comprar o imóvel inteiro</strong>.')}
              ${checks(['Receba <strong>aluguéis mensais</strong> direto na conta.', 'Comece com pouco (R$ 10 a R$ 100 por cota).', '<strong>Gestão profissional</strong> cuida de tudo.'])}
              ${callout('Dica', 'FIIs são ótimos para quem busca <strong>renda passiva mensal</strong> e quer diversificar além da renda fixa.', 'success')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Quanto vou receber?</b></p>
              <div class="row"><div><label>Cotas</label><input type="number" id="fi-n" value="100" min="0" step="10"></div><div><label>Dividendo por cota (R$)</label><input type="number" id="fi-d" value="1.10" min="0" step="0.05"></div></div>
              <p class="small" style="margin:12px 0 0;">Recebimento neste mês</p><div class="out" id="fi-r" style="font-size:1.8rem;">R$ 110,00</div>
              <p class="small" id="fi-t" style="margin:6px 0 0;"></p>
              <p class="hint">Reinvestindo os dividendos você compra mais cotas e o efeito "bola de neve" começa.</p>
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 43 · ETFs', 'ETFs: a cesta de investimentos', `
          ${lede('<strong>Exchange Traded Funds</strong> são fundos que <strong>replicam um índice</strong> (como o Ibovespa): uma cesta que já vem com várias empresas dentro.')}
          <div class="grid3">
            ${card('<strong>Diversificação instantânea</strong><p style="font-size:.88rem;margin-top:8px;">Com uma cota você tem exposição a muitas empresas.</p>', 'success')}
            ${card('<strong>Praticidade</strong><p style="font-size:.88rem;margin-top:8px;">Não precisa escolher empresa por empresa.</p>', 'decay')}
            ${card('<strong>Baixo custo</strong><p style="font-size:.88rem;margin-top:8px;">Taxa de administração geralmente menor.</p>', 'growth')}
          </div>
          ${tbl(['ativo', 'o que é', 'como ganha'], [['Ação', 'parte de uma empresa', 'valorização + dividendos'], ['FII', 'cota de fundo de imóveis', 'valorização + aluguéis mensais'], ['ETF', 'cesta que replica um índice', 'valorização do índice + proventos']])}`, { cls: 'growth' }));

slides.push(sl('Aula 43 · risco e volatilidade', 'O sobe e desce do mercado', `
          ${lede('<strong>Volatilidade</strong> é a oscilação de preços: um dia a ação sobe 2%, no outro cai 3%. É o comportamento normal da renda variável. Simule 30 dias (dados fictícios):')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <button class="btn-sim reveal" id="vo-b" style="margin-top:0;">Simular 30 dias</button>
              <p class="small" style="margin:10px 0 0;">Preço final: <span class="out" id="vo-f">—</span></p>
              <p class="small" id="vo-t" style="margin:4px 0 0;">Variação: —</p>
              <svg id="vo-svg" viewBox="0 0 400 150" style="width:100%;height:auto;display:block;margin-top:8px;"></svg>
            </div>
            <div>
              ${callout('Atenção', 'Renda variável <strong>NÃO é para o dinheiro da reserva de emergência</strong>: você pode precisar do dinheiro justamente num dia de queda.', 'danger')}
              ${checks(['Notícias e economia.', 'Desempenho da empresa.', 'Humor dos investidores.'], '.88rem')}
              ${mini('Lucas (17) tem R$ 200/mês para uma <strong>viagem no fim do ano</strong> e R$ 200/mês para a <strong>independência financeira em 20 anos</strong>. Onde a renda variável se encaixa melhor?', ['Na viagem (curto prazo)', 'Na independência financeira (longo prazo)', 'Nos dois igualmente', 'Em nenhum'], 1, 'No <strong>longo prazo</strong>: o tempo longo permite suportar as oscilações e aproveitar crescimento e dividendos. A viagem pede renda fixa (Tesouro Selic/CDB).')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 44 · teoria', 'Bolsa de valores: o "shopping" dos investimentos', `
          <div class="grid2">
            <div>
              ${lede('É um mercado <strong>organizado e 100% digital</strong> em que compradores e vendedores se encontram para negociar ativos com segurança. As regras são iguais para todos.')}
              ${checks(['<strong>B3</strong>: a bolsa oficial do Brasil, garantindo transparência.', '<strong>Crescimento</strong>: ajuda empresas a captar recursos para investir.', '<strong>Democracia</strong>: permite que qualquer pessoa seja investidora.'])}
            </div>
            <div>
              <p style="font-weight:700;margin:0 0 8px;">O fluxo de uma ordem:</p>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="step-row"><span class="badge">1</span><div><strong>Você envia a ordem</strong><div class="hint">pelo home broker (app ou site)</div></div></div>
                <div class="step-row"><span class="badge">2</span><div><strong>A corretora valida</strong><div class="hint">ponte de acesso à Bolsa</div></div></div>
                <div class="step-row"><span class="badge">3</span><div><strong>A B3 executa</strong><div class="hint">no pregão eletrônico</div></div></div>
                <div class="step-row"><span class="badge">4</span><div><strong>O ativo é seu!</strong><div class="hint">em sua custódia</div></div></div>
              </div>
            </div>
          </div>
          ${reveal('Debate: tecnologia torna o mercado mais justo ou mais perigoso?', '<p>Democratizou o acesso: com um celular e R$ 50 qualquer jovem envia uma ordem. Mas a facilidade exige <strong>mais responsabilidade e estudo</strong>: perder dinheiro por impulso ficou a "um clique de distância".</p>')}`, { cls: 'growth' }));

slides.push(sl('Aula 44 · teoria', 'Oferta e demanda: quem define o preço?', `
          ${lede('A bolsa <strong>não é um cassino</strong>: é um leilão gigante, com regras claras. O preço nasce do equilíbrio entre quem quer comprar e quem quer vender.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Compradores querendo comprar: <b id="od-d">50</b></label><input type="range" id="od-di" min="10" max="90" value="50">
              <label>Vendedores querendo vender: <b id="od-o">50</b></label><input type="range" id="od-oi" min="10" max="90" value="50">
              <p class="small" style="margin:12px 0 0;">Preço da ação (R$ 20,00 no equilíbrio)</p><div class="out" id="od-p" style="font-size:1.8rem;">R$ 20,00</div>
              <p id="od-t" class="small" style="margin:4px 0 0;font-weight:700;"></p>
            </div>
            <div>
              ${tbl(['situação', 'o que acontece com o preço'], [['demanda > oferta', 'sobe'], ['oferta > demanda', 'cai'], ['oferta = demanda', 'preço de equilíbrio']])}
              ${callout('Exemplo da bateria', 'Uma empresa anuncia uma bateria que dura 10 vezes mais. Investidores esperam lucros maiores → <strong>a demanda dispara</strong>, o volume de negociações aumenta e o preço sobe até um novo equilíbrio.', 'success')}
              ${reveal('Livro de ofertas: e se alguém comprar mais do que existe a R$ 20?', '<p>1.000 ações à venda a R$ 20 e uma ordem de compra "a mercado" de 1.500: as 1.000 saem a R$ 20 e as 500 restantes buscam vendedores <strong>mais caros</strong> (R$ 20,05, R$ 20,10…): <strong>o preço sobe</strong>.</p>')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 44 · teoria', 'Ibovespa, horários e o "xerife" do mercado', `
          <div class="grid3">
            ${card('<strong>Ibovespa</strong><p style="font-size:.88rem;margin-top:8px;">O principal indicador da B3: uma <strong>carteira das maiores empresas</strong> (Vale, Petrobras, Itaú…). É o "termômetro" da economia.</p>', 'growth')}
            ${card('<strong>Horário e leilões</strong><p style="font-size:.88rem;margin-top:8px;">Pregão geralmente das <strong>10h às 17h ou 18h</strong>. Leilões de abertura e fechamento garantem preços justos.</p>', 'decay')}
            ${card('<strong>CVM</strong><p style="font-size:.88rem;margin-top:8px;">O "xerife" que <strong>fiscaliza e protege o investidor</strong>, evitando manipulações.</p>', 'success')}
          </div>
          ${callout('Significado', 'Quando dizem que "<strong>a bolsa subiu</strong>", significa que, na média, as ações que compõem o índice valorizaram.')}
          ${mini('"Quem define os preços das ações" na Bolsa?', ['A CVM, todos os dias', 'A B3 por decreto', 'A lei da oferta e da demanda entre compradores e vendedores', 'O Banco Central'], 2, 'A <strong>oferta e a demanda</strong>. Já os valores de referência de uma estratégia (como Vi, Vm e Vo na questão do ENEM) são definidos pelo <strong>próprio investidor</strong>, conforme metas e gestão de risco.')}`, { cls: 'growth' }));

slides.push(sl('Aula 44 · ENEM · leitura de operações', 'Quantas operações o investidor faz no dia?', `
          ${lede('Na questão, um investidor segue regras sobre três valores de referência: <strong>mínimo (Vm)</strong>, <strong>ideal (Vi)</strong> e <strong>ótimo (Vo)</strong>. Acompanhe a resolução hora a hora:')}
          <div class="wid" style="margin-top:8px;">
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;" id="en-chips"></div>
            <p id="en-t" style="margin:0;font-size:.95rem;"></p>
            <div class="bar" style="margin-top:10px;height:12px;"><span id="en-b" style="background:var(--growth);width:0%"></span></div>
            <p class="small" id="en-c" style="margin:6px 0 0;"></p>
          </div>
          <p class="hint" style="margin-top:8px;">Resolução resumida da aula: (1) entre 10h e 11h, o preço cruza <b>para cima de Vi</b> → vende 50%; (2) próximo às 12h, cai <b>abaixo de Vm</b> → compra quantidade igual à atual; (3) entre 12h e 13h, cruza <b>para cima de Vi</b> → vende 50%; (4) às 13h30, cruza <b>para cima de Vo</b> → vende 100%. <strong>Total: 4 operações → alternativa B.</strong></p>`, { cls: 'primary' }));

slides.push(sl('Aula 45 · ENEM · juros compostos e carência', 'Em quanto tempo o dinheiro dobra a 5% ao mês?', `
          ${lede('Uma aplicação rende <strong>5% ao mês</strong> (juros compostos). O objetivo é <strong>duplicar o capital</strong>. Dados: <span class="mono">log 2 = 0,30</span> e <span class="mono">log 1,05 = 0,02</span>. Qual carência mínima do plano?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Planos de carência', ['A) 10 meses', 'B) 15 meses', 'C) 20 meses', 'D) 25 meses', 'E) 30 meses'], 1, 'O plano de <strong>15 meses</strong> (B): é o menor prazo em que o capital duplica.')}</div>
            <div>${reveal('Resolução', `<p>M = 2C → 2 = (1,05)<sup>t</sup></p><p>log 2 = t · log 1,05 → 0,30 = t · 0,02 → <strong>t = 15 meses</strong>.</p><p>Plano A (10 meses): o valor <strong>não</strong> duplica (t &lt; 15). Planos C, D e E: ultrapassam a menor carência necessária.</p><p class="hint">Na renda fixa, taxa e tempo jogam com previsibilidade total. E na renda variável? A taxa muda todo dia — por isso a volatilidade exige novas ferramentas.</p>`)}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 45 · teoria', 'Mapa dos riscos da renda variável', `
          ${lede('Por que as pessoas perdem dinheiro na Bolsa? Entender os riscos é o primeiro passo para <strong>controlá-los</strong>.')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Risco de mercado</strong><p style="font-size:.88rem;margin-top:8px;">Mudanças econômicas e políticas alteram a cotação de todos os ativos.</p>', 'danger')}
            ${card('<strong>Risco de crédito</strong><p style="font-size:.88rem;margin-top:8px;">A empresa não pagar suas dívidas ou entrar em falência.</p>', 'growth')}
            ${card('<strong>Risco de liquidez</strong><p style="font-size:.88rem;margin-top:8px;">Dificuldade de transformar o ativo em dinheiro rápido sem perder valor.</p>', 'decay')}
            ${card('<strong>Risco operacional</strong><p style="font-size:.88rem;margin-top:8px;">Erros de sistema, fraudes ou falhas humanas nas empresas.</p>')}
          </div>
          ${vf('"Quem investe em renda variável consegue evitar completamente os riscos."', false, 'Falsa — o risco é uma constante inevitável; o que se faz é mitigar (reduzir impactos), não eliminar.')}`, { cls: 'danger' }));

slides.push(sl('Aula 45 · estudo de caso', 'A crise de 2008: mercados conectados', `
          <div class="grid2">
            <div>
              ${lede('A <strong>Crise do Subprime</strong> nasceu nos EUA, quando bancos ofereceram hipotecas de alto risco a quem tinha baixo histórico de crédito.')}
              <div class="grid2" style="margin-top:8px;">
                ${stat('−40%', 'queda aproximada do Ibovespa', 'danger')}
                ${stat('−50%', 'desvalorização da Bolsa americana (Dow Jones)', 'danger')}
              </div>
            </div>
            <div>
              ${callout('A lição', '<strong>Mercados globais estão conectados.</strong> Ficar atento ao cenário mundial é vital para antecipar quedas bruscas.', 'danger')}
              ${reveal('Fatores que se somam', '<p>Condições econômicas, política e regulação, desempenho das empresas e sentimento do mercado <strong>interagem</strong> e podem ter efeitos amplificados quando ocorrem juntos, como em 2008.</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 45 · teoria', 'O que move os preços?', `
          <div class="grid2">
            ${card('<strong>Condições econômicas</strong><p style="font-size:.88rem;margin-top:8px;">Juros, inflação, PIB: com a economia forte, as ações tendem a valorizar.</p>', 'success')}
            ${card('<strong>Política e regulação</strong><p style="font-size:.88rem;margin-top:8px;">Instabilidade, leis e decisões sobre impostos e juros geram incerteza.</p>', 'decay')}
            ${card('<strong>Desempenho das empresas</strong><p style="font-size:.88rem;margin-top:8px;">Lucros, prejuízos, novos produtos, escândalos e resultados trimestrais.</p>', 'growth')}
            ${card('<strong>Sentimento do mercado</strong><p style="font-size:.88rem;margin-top:8px;">Medo e ganância movem o curto prazo, amplificados por notícias.</p>', 'danger')}
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 45 · mitigação', 'Proteja seu patrimônio: mitigar não é eliminar', `
          ${lede('No mercado de renda variável o risco é <strong>inevitável</strong>. Mitigar é adotar estratégias para <strong>controlar o tamanho dos prejuízos</strong> e sobreviver no longo prazo.')}
          <div class="grid3">
            ${card('<strong>Diversificação</strong><p style="font-size:.88rem;margin-top:8px;">Não colocar todo o dinheiro em uma única ação.</p>', 'success')}
            ${card('<strong>Prazo</strong><p style="font-size:.88rem;margin-top:8px;">Investimentos de longo prazo reduzem o peso da volatilidade.</p>', 'decay')}
            ${card('<strong>Alocação</strong><p style="font-size:.88rem;margin-top:8px;">Combinar renda fixa e renda variável.</p>', 'growth')}
          </div>
          ${mini('Sua ação caiu <strong>20%</strong> numa crise. A empresa continua com bons fundamentos. O que fazer para mitigar o prejuízo?', ['Vender tudo na hora para parar de perder', 'Rebalancear a carteira e/ou aguardar a recuperação com foco no longo prazo', 'Colocar todo o dinheiro que sobrou na mesma ação', 'Fechar os olhos para o mercado'], 1, 'Vender no pânico "tranca" o prejuízo de 20%. Se os <strong>fundamentos</strong> seguem bons, a crise cria oportunidades de comprar mais barato ou simplesmente esperar a recuperação — inteligência emocional e estratégica.')}`, { cls: 'success' }));

slides.push(sl('Aula 45 · atividade', 'Cenários A, B e C: onde está o risco?', `
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px;" id="ce-chips"></div>
          <div class="wid">
            <p id="ce-d" style="margin:0 0 8px;font-weight:700;"></p>
            <p id="ce-r" style="margin:0 0 6px;"></p>
            <p id="ce-e" style="margin:0 0 6px;"></p>
            <p id="ce-v" style="margin:0;"></p>
          </div>
          <p class="hint" style="margin-top:8px;">Discuta: em qual cenário a renda variável teria maior risco? Que estratégias um investidor jovem poderia adotar em cada um? Como a diversificação ajudaria?</p>`, { cls: 'primary' }));

slides.push(sl('Aula 45 · atividade em grupo', 'A carteira da Maria', `
          ${lede('Maria, <strong>17 anos</strong>, recebeu <strong>R$ 5.000</strong> de herança e quer investir em renda variável. Perfil <strong>moderado</strong>; vai usar o dinheiro na <strong>faculdade em 3 anos</strong>. Ajuste a distribuição:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Renda fixa: <b id="ma-p">70</b>%</label><input type="range" id="ma-pi" min="0" max="100" step="5" value="70">
              <div class="bar" style="height:22px;margin:10px 0;"><span id="ma-b1" style="background:var(--decay);width:70%"></span><span id="ma-b2" style="background:var(--growth);width:30%"></span></div>
              <p class="small" style="margin:0;"><b style="color:var(--decay);">● Renda fixa:</b> <span id="ma-rf" class="mono"></span><br><b style="color:var(--growth);">● Renda variável:</b> <span id="ma-rv" class="mono"></span></p>
              <p class="small" id="ma-t" style="margin:8px 0 0;font-weight:700;"></p>
            </div>
            <div>
              ${callout('Sugestão de resposta', 'Perfil moderado e prazo curto (3 anos) pedem <strong>priorizar a segurança</strong>: <strong>70% em renda fixa (R$ 3.500)</strong>, que garante a faculdade, e <strong>30% em renda variável (R$ 1.500)</strong>, que busca retornos maiores com risco controlado.', 'success')}
              <p class="hint">Atividade em grupo (5 min): criem uma carteira para Maria, justifiquem considerando os riscos e apresentem à turma.</p>
            </div>
          </div>`, { cls: 'success' }));

slides.push(sintese([
  ['Sócio, não credor', 'Ações, FIIs e ETFs: você participa dos resultados — com preço oscilando todo dia.'],
  ['Preço = oferta x demanda', 'Na B3, quem define o preço é o mercado; a CVM fiscaliza e protege o investidor.'],
  ['Mitigar riscos', 'Diversificação, prazo e alocação entre fixa e variável; nunca use a reserva de emergência.']
], '"Na renda variável, o maior ativo é a paciência: foque no longo prazo e diversifique."'));

slides.push(quizSlide([
  { q: 'Ao comprar uma ação, você se torna:', o: ['Credor da empresa', 'Sócio da empresa', 'Fiador da empresa', 'Funcionário da empresa'], a: 1 },
  { q: 'Quando a demanda por uma ação supera a oferta, o preço tende a:', o: ['Cair', 'Subir', 'Ficar igual sempre', 'Ser zerado'], a: 1 },
  { q: '100 cotas de um FII que paga R$ 1,10 por cota. Quanto será recebido no mês?', o: ['R$ 11,00', 'R$ 110,00', 'R$ 1.100,00', 'R$ 1,10'], a: 1 },
  { q: 'Por que a renda variável não deve ser usada na reserva de emergência?', o: ['Porque é proibida', 'Porque o preço pode estar em queda justamente quando você precisar', 'Porque não rende nada', 'Porque exige milhões'], a: 1 },
  { q: 'Mitigar riscos significa:', o: ['Eliminar todo o risco', 'Reduzir impactos e controlar o tamanho de prejuízos possíveis', 'Apostar tudo em uma ação', 'Ignorar o mercado'], a: 1 }
]));

slides.push(refsSlide([
  'B3 — Brasil, Bolsa, Balcão. <em>Bora Investir</em>. borainvestir.b3.com.br.',
  'COMISSÃO DE VALORES MOBILIÁRIOS (CVM). <em>Portal do Investidor</em>. investidor.gov.br.',
  'BARROS, Josi Gomes. <em>Educação Financeira Sustentável — 2ª série do Ensino Médio</em>. Apostila do estudante, p. 211–216: O mercado de ações e suas oscilações.',
  'INEP. <em>Matriz de Referência do ENEM</em> e provas e gabaritos.'
], 'Para continuar', 'O primeiro passo é o conhecimento', 'Comece a estudar antes de investir: renda variável pede paciência, diversificação e foco no longo prazo.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  // FII
  function fiUp(){ var n = +$('fi-n').value || 0, d = +$('fi-d').value || 0, r = n * d; $('fi-r').textContent = brl(r); $('fi-t').textContent = 'Se reinvestir tudo numa cota de R$ 10: +' + Math.floor(r / 10) + ' cota(s) no mês seguinte.'; }
  ['fi-n','fi-d'].forEach(function(id){ $(id).addEventListener('input', fiUp); }); fiUp();
  // volatilidade
  $('vo-b').addEventListener('click', function(){
    var p = 100, pts = [p];
    for(var k = 0; k < 30; k++){ var r = (Math.random() - 0.48) * 0.07; p = Math.max(10, p * (1 + r)); pts.push(p); }
    var mx = Math.max.apply(null, pts), mn = Math.min.apply(null, pts), W = 400, H = 150, pad = 12;
    var d = pts.map(function(v, k){ return (pad + (W - 2*pad) * k / 30).toFixed(1) + ',' + (H - pad - (H - 2*pad) * (v - mn) / (mx - mn || 1)).toFixed(1); }).join(' ');
    $('vo-svg').innerHTML = '<polyline fill="none" stroke="var(--growth)" stroke-width="3" points="' + d + '"/>';
    var f = pts[30]; $('vo-f').textContent = brl(f);
    var v = (f / 100 - 1) * 100; $('vo-t').innerHTML = 'Variação: <b style="color:' + (v >= 0 ? 'var(--success)' : 'var(--danger)') + ';">' + (v >= 0 ? '+' : '') + v.toFixed(1).replace('.', ',') + '%</b> · mínima ' + brl(mn) + ' · máxima ' + brl(mx);
  });
  // oferta e demanda
  function odUp(){
    var d = +$('od-di').value, o = +$('od-oi').value; $('od-d').textContent = d; $('od-o').textContent = o;
    var p = 20 * (1 + (d - o) / 100); $('od-p').textContent = brl(p);
    var t = $('od-t'); if(d > o){ t.textContent = '↑ Demanda maior que a oferta: o preço sobe.'; t.style.color = 'var(--success)'; } else if(d < o){ t.textContent = '↓ Oferta maior que a demanda: o preço cai.'; t.style.color = 'var(--danger)'; } else { t.textContent = '= Equilíbrio: o preço se mantém.'; t.style.color = 'var(--ink)'; }
  }
  ['od-di','od-oi'].forEach(function(id){ $(id).addEventListener('input', odUp); }); odUp();
  // operações ENEM
  var EN = [['10h–11h', 'O preço cruza para cima de Vi.', 'Vende 50% das ações', 1], ['≈ 12h', 'O preço cai abaixo de Vm.', 'Compra uma quantidade igual à atual', 2], ['12h–13h', 'O preço cruza de novo para cima de Vi.', 'Vende 50% das ações', 3], ['≈ 13h30', 'O preço cruza para cima de Vo.', 'Vende 100% (zera o estoque)', 4], ['depois', 'Oscilações restantes do gráfico.', 'Nenhuma operação: o estoque de ações é zero', 4]];
  var ec = $('en-chips');
  EN.forEach(function(e, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = e[0]; b.addEventListener('click', function(){ ec.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); en(k); }); ec.appendChild(b); });
  function en(k){ var e = EN[k]; $('en-t').innerHTML = '<strong>' + e[1] + '</strong> → ' + e[2] + '.'; $('en-b').style.width = (e[3] / 4 * 100) + '%'; $('en-c').textContent = 'Operações realizadas até aqui: ' + e[3] + (k === 4 ? ' → gabarito: alternativa B (4 operações).' : ''); }
  en(0);
  // cenários
  var CE = [['A · Crise econômica', 'O país entra em recessão, o desemprego aumenta, as empresas reduzem lucros e o governo aumenta impostos.', 'Risco: ALTO — empresas vendem menos e as ações podem cair muito.', 'Estratégia: manter cautela, mais renda fixa e aproveitar oportunidades de ações baratas.', 'Diversificação: a renda fixa amortece as perdas das ações.'], ['B · Crescimento econômico', 'A economia cresce, o desemprego diminui, as empresas lucram mais e há otimismo no mercado.', 'Risco: MENOR — a tendência é de lucros maiores e bolsa em alta.', 'Estratégia: aumentar a exposição em renda variável, aproveitando o otimismo.', 'Diversificação: garante ganhos na bolsa sem arriscar todo o capital.'], ['C · Instabilidade política', 'Mudanças frequentes no governo, incertezas sobre as políticas econômicas e tensões sociais.', 'Risco: ALTO — incertezas sobre regras e impostos geram insegurança e oscilação.', 'Estratégia: reduzir riscos, manter parte em renda fixa e diversificar em ativos externos.', 'Diversificação: manter parte em dólar ou no exterior reduz a exposição ao país.']];
  var cc = $('ce-chips');
  CE.forEach(function(e, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = e[0]; b.addEventListener('click', function(){ cc.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); ce(k); }); cc.appendChild(b); });
  function ce(k){ var e = CE[k]; $('ce-d').textContent = e[1]; $('ce-r').innerHTML = '<strong>' + e[2] + '</strong>'; $('ce-e').textContent = e[3]; $('ce-v').textContent = e[4]; }
  ce(0);
  // Maria
  function maUp(){
    var p = +$('ma-pi').value; $('ma-p').textContent = p; $('ma-b1').style.width = p + '%'; $('ma-b2').style.width = (100 - p) + '%';
    $('ma-rf').textContent = brl(5000 * p / 100); $('ma-rv').textContent = brl(5000 * (100 - p) / 100);
    var t = $('ma-t');
    if(p >= 60 && p <= 80){ t.textContent = '✔ Equilibrado para perfil moderado e prazo de 3 anos.'; t.style.color = 'var(--success)'; }
    else if(p > 80){ t.textContent = 'Muito conservador: segura, mas pode render pouco.'; t.style.color = 'var(--decay)'; }
    else { t.textContent = '⚠ Arriscado demais para um objetivo em 3 anos.'; t.style.color = 'var(--danger)'; }
  }
  $('ma-pi').addEventListener('input', maUp); maUp();
`;

module.exports = { title: 'Renda Variável e Bolsa de Valores: Ser Sócio', brand: 'Renda Variável e Bolsa', aulas: 'Aulas 43–45', key: 'rendavar', slides, extra, out: 'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/aula.html' };
