// Deck 2 — Juros compostos, planejamento e carteira (aulas 39, 40, 41)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const f2 = v => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 2ª série · Trimestre 3',
  h1: 'O poder do tempo e dos <span style="color:var(--growth);">juros compostos</span>',
  sub: 'Por que começar cedo muda tudo, como o dinheiro cresce em curva (e não em reta) e como montar uma carteira que combine com o seu perfil.',
  badges: [['AULAS 39, 40, 41'], ['Juros sobre juros', 'growth'], ['Diversificação e perfil', 'decay']],
  color: 'growth', curve: 'M40,212 C 260,208 420,196 560,160 C 690,126 770,70 840,22', end: [840, 22]
}));

slides.push(roteiroSlide('Da pergunta do ENEM até a sua primeira carteira de investimentos.', [
  ['Em quanto tempo o dinheiro dobra?', 'uma questão do ENEM que usa logaritmo', 'target'],
  ['Juros simples x juros compostos', 'reta contra curva — e a fórmula M = C·(1+i)^t', 'up'],
  ['O poder do tempo e dos aportes', 'começar cedo e investir todo mês', 'clock'],
  ['Crescimento percentual na prática', 'aumento fixo x reajuste de 10% e a função do ENEM', 'chart'],
  ['Carteira e diversificação', 'nunca todos os ovos na mesma cesta', 'shield'],
  ['Perfis de investidor', 'conservador, moderado e arrojado', 'people'],
  ['Comparar e planejar', 'poupança x CDB, prazos e quando atingir a meta', 'scale']
]));

slides.push(objetivosSlide([
  'Compreender os <strong>juros compostos</strong> e aplicá-los para simular o crescimento do dinheiro.',
  'Usar o <strong>logaritmo</strong> para descobrir o tempo necessário para atingir um valor.',
  '<strong>Comparar investimentos</strong> de renda fixa considerando impostos e prazos.',
  'Montar uma <strong>carteira diversificada</strong> de acordo com o perfil e o objetivo.'
], 'Habilidade em foco', 'Hd06 — Analisar modalidades de investimentos, juros e/ou riscos envolvidos. No ENEM, a H21 (resolver situação-problema com conhecimentos algébricos) aparece em quase toda questão de juros.', 'growth', 'growth-ink'));

slides.push(sl('Aula 39 · ENEM · juros compostos e logaritmo', 'Em quanto tempo o dinheiro dobra?', `
          ${lede('Um casal aplica <strong>R$ 100.000</strong> a <strong>0,8% ao mês</strong> (juros compostos) e quer <strong>duplicar</strong> o capital, sem novos aportes. Dados: <span class="mono">log 2 = 0,30</span> e <span class="mono">log 1,008 = 0,003</span>. Em quantos meses?')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              ${formula('F = C · (1 + i)<sup>n</sup>', false)}
              <p class="small">F = 2C = R$ 200.000 · C = R$ 100.000 · i = 0,8% = 0,008</p>
              ${mini('Alternativas', ['80 meses', '90 meses', '100 meses', '110 meses', '120 meses'], 2, 'Resposta: <strong>100 meses</strong> (alternativa C). Veja a resolução ao lado.')}
            </div>
            <div>
              ${reveal('Resolução passo a passo', `<p>2C = C·(1,008)<sup>n</sup> → <strong>2 = (1,008)<sup>n</sup></strong></p>
                <p>Aplicando log: <span class="mono">log 2 = n · log 1,008</span></p>
                <p>0,30 = n · 0,003 → n = 0,30 ÷ 0,003 = <strong>100 meses</strong></p>
                <p class="hint">Mais de 8 anos! O logaritmo é a "lanterna" que traz o expoente n para baixo. (Atenção: o enunciado fornece valores <em>aproximados</em>; com uma calculadora, log 1,008 ≈ 0,00346 e n ≈ 87 meses. No ENEM, use os dados da questão.)</p>`)}
              ${callout('Do ENEM para a vida', 'O dinheiro dobrou <strong>sem novos aportes</strong>: só deixando o tempo agir. O expoente <b>n</b> é o motor que transforma taxas pequenas em montantes grandes.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 39 · gancho', 'R$ 1.000 hoje ou 1 centavo que dobra todo dia?', `
          ${lede('A "lógica de Einstein": os juros compostos seriam a <strong>oitava maravilha do mundo</strong>. Mova o controle e veja o centavo crescer:')}
          <div class="grid2" style="margin-top:10px;">
            <div class="wid">
              <label>Dia: <b id="cd-d">10</b> (o dia 1 vale R$ 0,01)</label><input type="range" id="cd-di" min="1" max="30" value="10">
              <p class="small" style="margin:12px 0 0;">Valor do centavo que dobra todo dia</p>
              <div class="out" id="cd-v" style="font-size:1.8rem;">R$ 5,12</div>
              <div class="bar" style="margin-top:10px;"><span id="cd-b" style="background:var(--growth);width:2%"></span></div>
              <p class="hint" style="margin:6px 0 0;">A barra mostra o valor em relação ao total do dia 30.</p>
            </div>
            <div>
              ${callout('Resultado em 30 dias', 'Começando com R$ 0,01 no dia 1 e dobrando todo dia (taxa de 100% ao dia; a 1ª duplicação acontece no 2º dia), no dia 30 você tem 0,01 × 2<sup>29</sup> ≈ <strong>R$ 5,37 milhões</strong> — muito mais que os R$ 1.000.', 'success')}
              ${reveal('Como isso se relaciona com os juros compostos?', '<p>A taxa é de <strong>100% ao dia</strong> (fator 2). No início o valor parece pouco; com o tempo, <strong>os juros incidem sobre um montante cada vez maior</strong> e a curva decola.</p>')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 39 · teoria', 'Juros simples x juros compostos', `
          ${lede('No <strong>simples</strong>, o rendimento é sempre calculado sobre o valor inicial (linha reta). No <strong>composto</strong>, sobre o valor inicial <strong>mais os juros já ganhos</strong> (curva que acelera).')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Capital: R$ <b id="js-c">1.000</b></label><input type="range" id="js-ci" min="500" max="5000" step="100" value="1000">
              <label>Taxa: <b id="js-i">10</b>% ao ano</label><input type="range" id="js-ii" min="2" max="20" step="1" value="10">
              <label>Tempo: <b id="js-t">20</b> anos</label><input type="range" id="js-ti" min="2" max="40" step="1" value="20">
              <p class="small" style="margin:10px 0 0;"><span style="color:var(--decay);font-weight:700;">● Simples:</span> <span id="js-s" class="mono"></span><br><span style="color:var(--growth);font-weight:700;">● Composto:</span> <span id="js-m" class="mono"></span></p>
            </div>
            <div class="wid" style="padding:8px;"><svg id="js-svg" viewBox="0 0 400 240" style="width:100%;height:auto;display:block;"></svg></div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 39 · teoria', 'A fórmula da riqueza', `
          ${formula('M = C × (1 + i)<sup>t</sup>', true)}
          <div class="grid4" style="margin-top:12px;">
            ${card('<span class="badge">M</span><p style="font-size:.88rem;margin-top:8px;"><strong>Montante</strong>: valor final que você terá.</p>')}
            ${card('<span class="badge">C</span><p style="font-size:.88rem;margin-top:8px;"><strong>Capital</strong>: dinheiro aplicado no início.</p>')}
            ${card('<span class="badge">i</span><p style="font-size:.88rem;margin-top:8px;"><strong>Taxa</strong>: % de rendimento (ex.: 1% ao mês).</p>')}
            ${card('<span class="badge">t</span><p style="font-size:.88rem;margin-top:8px;"><strong>Tempo</strong>: períodos em que o dinheiro rendeu.</p>')}
          </div>
          ${callout('Repare', 'O <strong>tempo (t) é o expoente</strong>: ele não só soma, ele <strong>potencializa</strong> o crescimento. No começo o ganho parece pequeno; depois a curva fica quase vertical.')}
          ${mini('Dois investidores aplicam R$ 1.000 a 10% ao ano. A deixa por 5 anos; B, por 20. Por que B terá <strong>mais que o quádruplo</strong> de A?', ['Porque B investiu mais dinheiro', 'Porque o crescimento é exponencial: nos últimos anos os juros incidem sobre um montante enorme', 'Porque a taxa de B é maior', 'Porque os juros são simples'], 1, `A: 1000·1,1<sup>5</sup> ≈ R$ ${f2(1000 * Math.pow(1.1, 5))}. B: 1000·1,1<sup>20</sup> ≈ <strong>R$ ${f2(1000 * Math.pow(1.1, 20))}</strong> — mais de 4 vezes. O <strong>tempo</strong> é o multiplicador mais potente.`)}`, { cls: 'growth' }));

slides.push(sl('Aula 39 · teoria', 'Aportes mensais: o combustível do motor', `
          ${lede('Os juros compostos são o <strong>motor</strong>; os <strong>aportes mensais</strong> são o combustível. Investir pouco <strong>todo mês</strong> vale mais que investir muito uma vez só.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Aporte mensal: R$ <b id="ap-a">100</b></label><input type="range" id="ap-ai" min="25" max="500" step="25" value="100">
              <label>Taxa: <b id="ap-i">1,0</b>% ao mês</label><input type="range" id="ap-ii" min="0.3" max="1.5" step="0.1" value="1">
              <label>Tempo: <b id="ap-t">20</b> anos</label><input type="range" id="ap-ti" min="1" max="40" step="1" value="20">
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Você aportou</p><div class="out" id="ap-p" style="color:var(--ink-soft);">R$ 24.000,00</div>
              <p class="small" style="margin:8px 0 0;">Valor acumulado</p><div class="out" id="ap-f" style="font-size:1.8rem;">R$ 98.925,54</div>
              <div class="bar" style="margin:10px 0;"><span id="ap-b1" style="background:var(--primary);width:24%"></span><span id="ap-b2" style="background:var(--growth);width:76%"></span></div>
              <p class="small" id="ap-t2" style="margin:0;">Os juros produziram mais que o triplo do que você colocou.</p>
            </div>
          </div>
          ${callout('A força do hábito', 'Disciplina financeira dá controle sobre seus recursos e crescimento constante do patrimônio. <span class="hint">(valores: R$ 100/mês a 1% ao mês por 20 anos ≈ R$ 98.925,54)</span>', 'success')}`, { cls: 'growth' }));

slides.push(sl('Atividade · no quadro', 'Juros em dois anos', `
          ${lede('Você investe <strong>R$ 100</strong> hoje em um título que rende <strong>10% ao ano</strong>. Quanto terá após 2 anos? Qual o juro do 1º ano? E do 2º?')}
          <div class="grid2" style="margin-top:12px;">
            <div>${reveal('Juros do 1º ano', '<p>10% de R$ 100 = <strong>R$ 10</strong> → saldo R$ 110.</p>')}</div>
            <div>${reveal('Juros do 2º ano e total', '<p>10% de R$ 110 = <strong>R$ 11</strong> → saldo <strong>R$ 121,00</strong>.</p><p class="hint">No 2º ano o juro foi maior porque incidiu sobre o valor <strong>já crescido</strong>. Pela fórmula: 100·1,1² = 121.</p>')}</div>
          </div>
          ${tbl(['ano', 'saldo inicial', 'juros (10%)', 'saldo final'], [['1', 'R$ 100,00', 'R$ 10,00', 'R$ 110,00'], ['2', 'R$ 110,00', 'R$ 11,00', 'R$ 121,00'], ['3', 'R$ 121,00', 'R$ 12,10', 'R$ 133,10']])}`, { cls: 'growth' }));

slides.push(sl('Aula 40 · gancho', 'Aumento fixo ou reajuste percentual?', `
          ${lede('Salário de <strong>R$ 2.500</strong>. Situação 1: aumento fixo de <strong>R$ 250 por ano</strong>. Situação 2: reajuste de <strong>10% por ano</strong>. Qual escolher?')}
          ${tbl(['ano', 'Situação 1 · fixo (+R$ 250)', 'Situação 2 · +10% ao ano'], [['1', 'R$ 2.500', 'R$ 2.500'], ['2', 'R$ 2.750', 'R$ 2.750 (+250)'], ['3', 'R$ 3.000', 'R$ 3.025 (+275)'], ['4', 'R$ 3.250', 'R$ 3.327 (+302)']])}
          <div class="grid2" style="margin-top:12px;">
            ${callout('Por que a 2 é mais vantajosa?', 'Porque é <strong>juros sobre juros</strong>: o reajuste incide sobre o salário já reajustado. O fator é 1,10 (100% + 10%).', 'success')}
            <div class="card"><strong>Fórmula geral</strong><p style="margin-top:6px;font-size:.92rem;">Valor(t) = 2.500 × (1,10)<sup>t</sup></p><p class="hint">Ano 3: 2.500 × 1,10² = 3.025 · Ano 4: 2.500 × 1,10³ = 3.327,50</p></div>
          </div>`, { cls: 'primary' }));

const st = t => 1800 * Math.pow(1.03, t);
slides.push(sl('Aula 40 · ENEM 2015 · H21', 'O sindicato e a função exponencial', `
          ${lede('Um sindicato propõe piso de <strong>R$ 1.800,00</strong> com aumento percentual fixo por ano de serviço: <span class="mono">s(t) = 1.800 · (1,03)<sup>t</sup></span>. O salário com <strong>2 anos</strong> de serviço será:')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['R$ 7.416,00', 'R$ 3.819,24', 'R$ 3.709,62', 'R$ 3.708,00', 'R$ 1.909,62'], 4, `s(2) = 1.800 · (1,03)² = 1.800 · 1,0609 = <strong>R$ 1.909,62</strong> (alternativa E). A taxa de correção é <strong>3% ao ano</strong> (1,03 = 100% + 3%).`)}</div>
            <div>${tbl(['t (anos)', 's(t) = 1.800·(1,03)<sup>t</sup>'], [1, 2, 3, 5, 8, 10, 20].map(t => [t, 'R$ ' + f2(st(t))]))}
              <p class="hint" style="margin-top:6px;">Mesma lógica de investimentos prefixados ou indexados à inflação: <strong>correção percentual todo período</strong>. R$ 1.000 a 14% ao ano por 20 anos: R$ ${f2(1000 * Math.pow(1.14, 20))}.</p></div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 40 · carteira de investimentos', 'Nunca todos os ovos na mesma cesta', `
          ${lede('<strong>Carteira de investimentos</strong> é o conjunto de todas as aplicações de uma pessoa: renda fixa, ações, títulos do governo, fundos. <strong>Diversificar</strong> é espalhar o dinheiro.')}
          <div class="grid3" style="margin-top:8px;">
            ${card('<strong>Proteção contra oscilações</strong><p style="font-size:.88rem;margin-top:8px;">Uma queda em um setor não compromete todo o patrimônio.</p>', 'success')}
            ${card('<strong>Redução de riscos</strong><p style="font-size:.88rem;margin-top:8px;">Ativos diferentes reagem de maneiras distintas ao mercado: criam equilíbrio.</p>', 'decay')}
            ${card('<strong>Melhor retorno no longo prazo</strong><p style="font-size:.88rem;margin-top:8px;">Em momentos diferentes, ativos diferentes se destacam: você aproveita mais oportunidades.</p>', 'growth')}
          </div>
          <div class="grid2" style="margin-top:12px;">
            ${card('<strong>Renda fixa</strong><p style="font-size:.86rem;margin-top:6px;">Tesouro Direto, CDB, LCI, LCA. Mais segurança, menor risco e retorno, mais previsível.</p>')}
            ${card('<strong>Renda variável</strong><p style="font-size:.86rem;margin-top:6px;">Ações e fundos imobiliários (FIIs). Maior potencial de ganho, maior risco e volatilidade.</p>')}
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 40 · perfis de investidor', 'Qual é o seu perfil?', `
          ${lede('Cada pessoa tem uma relação diferente com o risco. Escolha um perfil e veja uma <strong>distribuição de referência</strong>:')}
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;" id="pf-chips"></div>
          <div class="wid">
            <div class="bar" style="height:22px;"><span id="pf-rf" style="background:var(--decay);width:80%"></span><span id="pf-rv" style="background:var(--growth);width:20%"></span></div>
            <p class="small" style="margin:8px 0 0;"><span style="color:var(--decay);font-weight:700;">● Renda fixa <b id="pf-rft">80%</b></span> &nbsp; <span style="color:var(--growth);font-weight:700;">● Renda variável <b id="pf-rvt">20%</b></span></p>
            <p id="pf-t" style="margin:8px 0 0;font-size:.92rem;"></p>
          </div>
          <p class="hint" style="margin-top:8px;">Mais renda fixa = mais segurança e menos rentabilidade (conservador). Mais renda variável = menos segurança e mais rentabilidade (arrojado). Percentuais ilustrativos.</p>`, { cls: 'decay' }));

slides.push(sl('Aula 40 · estudo de caso', 'Bianca, 25 anos: o que você mudaria?', `
          ${lede('Renda mensal de R$ 3.800. Com <strong>R$ 20.000</strong>, Bianca investiu: 20% em renda fixa, 40% em ações, 15% em fundos imobiliários, 15% em criptomoedas e 10% em multimercado. Ela tem <strong>perfil moderado</strong>.')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              ${tbl(['classe', 'antes', 'sugestão'], [['Renda fixa', '20%', '<strong>45%</strong> (+25)'], ['Ações', '40%', '35% (−5)'], ['Fundos imobiliários', '15%', '12% (−3)'], ['Criptomoedas', '15%', '3% (−12)'], ['Multimercado', '10%', '5% (−5)']])}
            </div>
            <div>
              ${callout('Diagnóstico', 'Para um perfil moderado a alocação está <strong>desequilibrada</strong>: 80% em renda variável. Uma possibilidade é levar a renda fixa para cerca de <strong>45%</strong> da carteira.', 'danger')}
              ${reveal('E se Bianca investisse R$ 5.000 no modelo original?', '<p>Renda fixa 20%: <strong>R$ 1.000</strong> · Ações 40%: <strong>R$ 2.000</strong> · FIIs 15%: <strong>R$ 750</strong> · Cripto 15%: <strong>R$ 750</strong> · Multimercado 10%: <strong>R$ 500</strong> (soma R$ 5.000).</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 40 · passo a passo', 'Montando a sua carteira', `
          <div class="grid2">
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div class="step-row"><span class="badge">1</span><div><strong>Defina seu perfil</strong><div class="hint">conservador, moderado ou arrojado?</div></div></div>
              <div class="step-row"><span class="badge">2</span><div><strong>Estabeleça seus objetivos</strong><div class="hint">curto, médio ou longo prazo?</div></div></div>
              <div class="step-row"><span class="badge">3</span><div><strong>Escolha a distribuição</strong><div class="hint">quanto para cada tipo de investimento?</div></div></div>
              <div class="step-row"><span class="badge">4</span><div><strong>Diversifique dentro de cada classe</strong><div class="hint">não concentre em um único ativo</div></div></div>
            </div>
            <div>
              ${callout('Dica importante', 'Comece com valores pequenos e aumente aos poucos. <strong>Revise a carteira periodicamente.</strong>', 'success')}
              ${card('<strong>Desafio em grupo (7 min)</strong><p style="font-size:.9rem;margin-top:6px;">Jovem de <strong>17 anos</strong>, <strong>R$ 2.000</strong>, perfil <strong>moderado</strong>, objetivo: <strong>comprar uma moto em 2 anos</strong>. 1) Definam os percentuais. 2) Calculem os valores. 3) Justifiquem. 4) Apresentem à turma.</p>', 'growth')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 41 · ENEM · poupança x CDB', 'Qual aplicação rende mais em 1 mês?', `
          ${lede('Um jovem investidor aplica <strong>R$ 500,00</strong>. Rendimento mensal: <strong>poupança 0,560%</strong> (isenta de IR); <strong>CDB 0,876%</strong>, com <strong>IR de 4% sobre o ganho</strong>. Qual é a aplicação mais vantajosa?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['Poupança, montante de R$ 502,80', 'Poupança, montante de R$ 500,56', 'CDB, montante de R$ 504,38', 'CDB, montante de R$ 504,21', 'CDB, montante de R$ 500,87'], 3, 'O <strong>CDB, R$ 504,21</strong>. Veja o cálculo ao lado: o imposto de 4% incide <strong>só sobre o lucro</strong>, não sobre os R$ 500.')}</div>
            <div>${reveal('Resolução', `<p><strong>Poupança:</strong> 500 × 0,0056 = R$ 2,80 → montante <strong>R$ 502,80</strong> (isento).</p>
              <p><strong>CDB:</strong> 500 × 0,00876 = R$ 4,38; IR = 4% de 4,38 = R$ 0,1752; ganho líquido = R$ 4,2048 → montante ≈ <strong>R$ 504,21</strong>.</p>
              <p class="hint">Mesmo pagando imposto, o CDB superou a poupança. Não basta olhar a taxa bruta: é preciso calcular o retorno <strong>líquido</strong>.</p>`)}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 41 · teoria', 'Qual investimento para qual objetivo?', `
          <div class="grid3">
            ${card('<strong>Reserva de emergência</strong><p style="font-size:.86rem;margin-top:8px;"><strong>Curto prazo (até 1 ano)</strong>: foco em liquidez rápida. Ex.: Tesouro Selic ou CDB com resgate diário.</p>', 'success')}
            ${card('<strong>Médio prazo</strong><p style="font-size:.86rem;margin-top:8px;"><strong>2 a 5 anos</strong>: proteger contra a inflação e render. Ex.: CDB, LCI/LCA ou Tesouro IPCA+.</p>', 'growth')}
            ${card('<strong>Longo prazo</strong><p style="font-size:.86rem;margin-top:8px;"><strong>Mais de 5 anos</strong>: rentabilidade acumulada ao longo dos anos — espaço para renda variável.</p>', 'decay')}
          </div>
          ${callout('Colchão x poupança x Tesouro Selic', 'Guardar no colchão perde para a inflação. A poupança nem sempre entrega o melhor rendimento. Para R$ 100 por mês, <strong>aprender a comparar taxas e prazos</strong> faz o dinheiro render mais.')}
          ${vf('"Deixar 80% do dinheiro na poupança é uma boa carteira para quem tem 17 anos e horizonte de longo prazo."', false, 'Falsa — com horizonte longo, concentrar no baixo rendimento desperdiça o potencial de crescimento (e a inflação corrói).')}`));

slides.push(sl('Aula 41 · estudo de caso', 'Ana quer R$ 5.000 para a viagem de formatura', `
          ${lede('Ana, 17 anos, tem <strong>R$ 300</strong> guardados e pode aplicar <strong>R$ 200 por mês</strong> no Tesouro Selic, que rende <strong>0,8% ao mês</strong>. Em quantos meses atinge R$ 5.000?')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Meta (R$)</label><input type="number" id="an-m" value="5000" step="500"></div><div><label>Inicial (R$)</label><input type="number" id="an-i" value="300" step="100"></div></div>
              <div class="row"><div><label>Aporte mensal (R$)</label><input type="number" id="an-a" value="200" step="50"></div><div><label>Taxa (% ao mês)</label><input type="number" id="an-t" value="0.8" step="0.1"></div></div>
              <p class="small" style="margin:12px 0 0;">Meses até a meta</p><div class="out" id="an-r" style="font-size:1.8rem;">22 meses</div>
              <p class="small" id="an-s" style="margin:4px 0 0;">Saldo final: R$ 5.147,56</p>
            </div>
            <div>
              ${callout('Como calcular, mês a mês', '<strong>Saldo = (saldo anterior × 1,008) + 200</strong><br>Mês 1: 300 × 1,008 + 200 = R$ 502,40<br>Mês 2: 502,40 × 1,008 + 200 = R$ 706,42<br>Mês 3: 706,42 × 1,008 + 200 = R$ 912,07')}
              <p class="hint">Continuando mês a mês, no mês 21 o saldo é R$ 4.908,30 (ainda abaixo) e <strong>no mês 22 Ana chega à meta</strong>, com R$ 5.147,56. <em>(O slide original da aula cita 21 meses e R$ 5.039,62; refazendo a conta com a mesma fórmula, o resultado correto é 22 meses.)</em></p>
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Aula 41 · atividade', 'Carteira de R$ 1.000 para um jovem de 17 anos', `
          ${lede('Opções: <strong>Tesouro Selic</strong>, <strong>CDB de banco grande</strong>, <strong>ETF de índice (BOVA11)</strong>, <strong>Fundo Imobiliário</strong>, <strong>ETF Internacional</strong>. Uma sugestão de resposta:')}
          <div class="wid" style="margin-top:8px;">
            <div class="bar" style="height:26px;"><span style="background:var(--decay);width:30%"></span><span style="background:#2D7FB0;width:10%"></span><span style="background:var(--growth);width:30%"></span><span style="background:var(--primary);width:15%"></span><span style="background:var(--success);width:15%"></span></div>
            <p class="small" style="margin:8px 0 0;line-height:1.7;">
              <b style="color:var(--decay);">● Tesouro Selic 30% (R$ 300)</b> — base segura e líquida para emergências ·
              <b style="color:#2D7FB0;">● CDB 10% (R$ 100)</b> — diversifica na renda fixa, com FGC ·
              <b style="color:var(--growth);">● ETF BOVA11 30% (R$ 300)</b> — mercado de ações brasileiro ·
              <b style="color:var(--primary);">● Fundo imobiliário 15% (R$ 150)</b> — setor imobiliário ·
              <b style="color:var(--success);">● ETF internacional 15% (R$ 150)</b> — mercado global
            </p>
          </div>
          ${callout('Resumo', 'Renda fixa <strong>40% (R$ 400)</strong> + renda variável <strong>60% (R$ 600)</strong> = R$ 1.000 ✔. Ter pouca idade significa ter <strong>o tempo a seu favor</strong>. Uma carteira inteligente equilibra <strong>liquidez</strong> (imprevistos) e <strong>rentabilidade</strong> (metas de médio e longo prazo).', 'success')}`, { cls: 'success' }));

slides.push(sintese([
  ['Juros compostos', 'M = C·(1+i)^t. O tempo é o expoente: começar cedo e aportar todo mês faz a curva decolar.'],
  ['Logaritmo', 'Quando a incógnita é o tempo, o log "traz o expoente para baixo": 2 = 1,008^n → n = 100 meses.'],
  ['Carteira', 'Diversifique entre renda fixa e variável conforme o <strong>perfil</strong>, o <strong>prazo</strong> e o <strong>objetivo</strong>; compare sempre o valor líquido.']
], '"Investir é uma jornada. Comece pequeno, mas comece hoje."'));

slides.push(quizSlide([
  { q: 'Em juros compostos, o rendimento de cada período incide sobre:', o: ['Apenas o capital inicial', 'O capital mais os juros acumulados', 'Somente os aportes', 'O imposto pago'], a: 1 },
  { q: 'R$ 100 a 10% ao ano, em juros compostos, valem após 2 anos:', o: ['R$ 120,00', 'R$ 121,00', 'R$ 110,00', 'R$ 111,00'], a: 1 },
  { q: 'Para descobrir o tempo n em 2 = (1,008)ⁿ, usamos:', o: ['Raiz quadrada', 'Logaritmo', 'Regra de três simples', 'Porcentagem direta'], a: 1 },
  { q: 'Qual é a principal vantagem de diversificar a carteira?', o: ['Garantir lucro todo mês', 'Reduzir riscos e se proteger de oscilações', 'Pagar menos imposto sempre', 'Eliminar a inflação'], a: 1 },
  { q: 'Um perfil moderado com 80% em renda variável está:', o: ['Bem alinhado', 'Desequilibrado: exposto demais ao risco', 'Seguro demais', 'Isento de riscos'], a: 1 }
]));

slides.push(refsSlide([
  'BARROS, Josi Gomes. <em>Educação Financeira Sustentável — 2ª série do Ensino Médio</em>. Apostila do estudante, 2023.',
  'BANCO CENTRAL DO BRASIL. <em>Cidadania Financeira</em>. bcb.gov.br/cidadaniafinanceira.',
  'COMISSÃO DE VALORES MOBILIÁRIOS (CVM). <em>Portal do Investidor</em>. investidor.gov.br.',
  'TESOURO DIRETO. <em>Portal oficial</em>. · B3. <em>Bora Investir</em>.',
  'INEP. <em>Matriz de Referência do ENEM</em> e provas e gabaritos (H21).'
], 'Para continuar', 'O tempo é o seu maior patrimônio', 'Use-o com sabedoria e comece a investir no seu futuro hoje mesmo. Na próxima unidade: renda variável e a Bolsa de Valores.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  // centavo que dobra
  function cdUp(){
    var d = +$('cd-di').value; $('cd-d').textContent = d;
    var v = 0.01 * Math.pow(2, d - 1); $('cd-v').textContent = brl(v);
    $('cd-b').style.width = Math.max(1.5, v / (0.01 * Math.pow(2,29)) * 100) + '%';
  }
  $('cd-di').addEventListener('input', cdUp); cdUp();
  // simples x composto
  function jsUp(){
    var c = +$('js-ci').value, i = +$('js-ii').value / 100, t = +$('js-ti').value;
    $('js-c').textContent = c.toLocaleString('pt-BR'); $('js-i').textContent = Math.round(i*100); $('js-t').textContent = t;
    var S = function(k){ return c * (1 + i * k); }, M = function(k){ return c * Math.pow(1 + i, k); };
    $('js-s').textContent = brl(S(t)); $('js-m').textContent = brl(M(t));
    var W = 400, H = 240, pad = 22, max = M(t), pts1 = [], pts2 = [];
    for(var k = 0; k <= t; k++){ var x = pad + (W - 2*pad) * k / t; pts1.push(x.toFixed(1) + ',' + (H - pad - (H - 2*pad) * S(k) / max).toFixed(1)); pts2.push(x.toFixed(1) + ',' + (H - pad - (H - 2*pad) * M(k) / max).toFixed(1)); }
    $('js-svg').innerHTML = '<line x1="'+pad+'" y1="'+(H-pad)+'" x2="'+(W-pad)+'" y2="'+(H-pad)+'" stroke="var(--line-strong)" stroke-width="2"/><line x1="'+pad+'" y1="'+(H-pad)+'" x2="'+pad+'" y2="'+pad+'" stroke="var(--line-strong)" stroke-width="2"/>' +
      '<polyline fill="none" stroke="var(--decay)" stroke-width="3" points="'+pts1.join(' ')+'"/><polyline fill="none" stroke="var(--growth)" stroke-width="3.5" points="'+pts2.join(' ')+'"/>' +
      '<text x="'+(W-pad)+'" y="'+(H-pad+14)+'" font-size="11" text-anchor="end" fill="var(--ink-faint)">anos</text>';
  }
  ['js-ci','js-ii','js-ti'].forEach(function(id){ $(id).addEventListener('input', jsUp); }); jsUp();
  // aportes
  function apUp(){
    var a = +$('ap-ai').value, i = +$('ap-ii').value / 100, t = +$('ap-ti').value; $('ap-a').textContent = a; $('ap-i').textContent = (i*100).toFixed(1).replace('.',','); $('ap-t').textContent = t;
    var n = t * 12, f = a * (Math.pow(1 + i, n) - 1) / i, p = a * n;
    $('ap-p').textContent = brl(p); $('ap-f').textContent = brl(f);
    $('ap-b1').style.width = (p / f * 100) + '%'; $('ap-b2').style.width = (100 - p / f * 100) + '%';
    var r = f / p; $('ap-t2').textContent = r >= 1.01 ? 'Os juros produziram ' + brl(f - p) + ' — ' + r.toFixed(1).replace('.',',') + ' vezes o que você colocou.' : 'Prazo curto: os juros ainda são pequenos. Dê tempo ao tempo.';
  }
  ['ap-ai','ap-ii','ap-ti'].forEach(function(id){ $(id).addEventListener('input', apUp); }); apUp();
  // perfis
  var PF = [['Conservador', 80, 'Prioriza a segurança do capital: CDB, Tesouro Selic, IPCA+. Aceita retornos menores em troca de previsibilidade.'], ['Moderado', 50, 'Busca equilíbrio: protege a carteira com renda fixa, mas investe uma parte em renda variável (riscos calculados).'], ['Arrojado', 20, 'Aceita mais volatilidade em busca de retornos maiores no longo prazo; concentra em renda variável.']];
  var pb = $('pf-chips');
  PF.forEach(function(p, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 1 ? ' on' : ''); b.textContent = p[0]; b.addEventListener('click', function(){ pb.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); pf(k); }); pb.appendChild(b); });
  function pf(k){ var p = PF[k]; $('pf-rf').style.width = p[1] + '%'; $('pf-rv').style.width = (100 - p[1]) + '%'; $('pf-rft').textContent = p[1] + '%'; $('pf-rvt').textContent = (100 - p[1]) + '%'; $('pf-t').innerHTML = '<strong>' + p[0] + ':</strong> ' + p[2]; }
  pf(1);
  // Ana
  function anUp(){
    var m = +$('an-m').value, s0 = +$('an-i').value, a = +$('an-a').value, i = (+$('an-t').value) / 100, s = s0, n = 0;
    if(s >= m){ $('an-r').textContent = '0 meses'; $('an-s').textContent = 'Você já tem a meta.'; return; }
    while(s < m && n < 1200){ s = s * (1 + i) + a; n++; }
    if(n >= 1200){ $('an-r').textContent = 'Não chega'; $('an-s').textContent = 'Aumente o aporte ou a taxa.'; return; }
    $('an-r').textContent = n + (n === 1 ? ' mês' : ' meses') + (n >= 12 ? ' (' + (n/12).toFixed(1).replace('.',',') + ' anos)' : '');
    $('an-s').textContent = 'Saldo final: ' + brl(s);
  }
  ['an-m','an-i','an-a','an-t'].forEach(function(id){ $(id).addEventListener('input', anUp); }); anUp();
`;

module.exports = { title: 'Juros Compostos, Tempo e Carteira de Investimentos', brand: 'Juros Compostos e Carteira', aulas: 'Aulas 39–41', key: 'invest2', slides, extra, out: 'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-2-juros-compostos-carteira.html' };
