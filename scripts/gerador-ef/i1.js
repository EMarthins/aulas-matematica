// Infográficos (guias visuais) da 2ª série — 4 unidades
const L = require('./lib.js');
const { sec, wideSec, tbl, ic } = L;
const li = arr => `      <ul class="props">${arr.map(t => `<li>${t}</li>`).join('')}</ul>`;
const wl = (arr, cls = 'danger') => `      <ul class="warn-list">${arr.map(t => `<li>${ic('warn', 'icon ' + cls, 14)}${t}</li>`).join('')}</ul>`;
const p = t => `      <p class="lede-s">${t}</p>`;
const call = (h, t, c = '') => `      <div class="callout ${c}"><strong>${h}</strong><p>${t}</p></div>`;
const f = t => `      <p class="formula">${t}</p>`;
const prop = (arr, cols = 2) => `      <div class="prop-grid" style="grid-template-columns:repeat(${cols},1fr);">${arr.map(([n, l]) => `<div class="prop-card"><span class="num">${n}</span><span class="lbl">${l}</span></div>`).join('')}</div>`;
const steps = arr => `      <ol class="steps">${arr.map(t => `<li>${t}</li>`).join('')}</ol>`;
const T = (h, r) => '      ' + tbl(h, r);
const chips = arr => `      <div class="app-row">${arr.map(t => `<div class="app-chip">${t}</div>`).join('')}</div>`;
const versus = (a, b) => `      <div class="versus"><div class="vcard danger"><strong style="color:var(--danger);">${a[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${a[1]}</p></div><div class="vcard success"><strong style="color:var(--success);">${b[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${b[1]}</p></div></div>`;

const base = '/educacao-financeira/2-ano/3-tri/';

const i1 = {
  kind: 'info', out: 'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/infografico.html', key: 'invest',
  title: 'Guia visual — Investimentos e Renda Fixa', brand: 'Investimentos e Renda Fixa', aulas: 'Aulas 36–41', color: 'primary',
  h1: 'Investir: o dinheiro <span>trabalhando</span> por você',
  lede: 'De "por que investir?" à renda fixa, do rendimento líquido aos juros compostos e à primeira carteira — tudo o que você precisa lembrar, numa página só.',
  badges: ['Poupar ≠ investir', 'IR só sobre o lucro', 'M = C·(1+i)^t', 'Diversifique'],
  curve: 'M20,160 C 120,150 200,125 280,90 C 360,55 420,40 480,22',
  sections: [
    sec('Aulas 36 · 41', 'Poupar x investir', 'coin', p('<strong>Poupar</strong> é guardar (acumular). <strong>Investir</strong> é aplicar para multiplicar e <strong>vencer a inflação</strong>.') + call('Colchão', 'R$ 100 com inflação de 10% valem ≈ R$ 90,91 em um ano.', 'danger'), 'danger'),
    sec('Aula 36', 'Por que investir', 'target', li(['Realizar sonhos', 'Reserva de emergência (liquidez)', 'Vencer a inflação', 'Aposentadoria e independência financeira']), 'success'),
    sec('Aula 36', 'Investir ≠ apostar', 'warn', wl(['Aposta: sorte, sem valor real', 'Risco de perda total', 'Promessa de ganho fácil = alerta']) + call('Investimento', 'Análise, geração de valor e risco controlado.', 'success'), 'danger'),
    sec('Aula 37', 'Renda fixa: o conceito', 'building', p('Você <strong>empresta</strong> para banco ou governo e recebe <strong>juros</strong>.') + li(['Prefixada: taxa definida na compra', 'Pós-fixada: Selic / CDI', 'Híbrida: IPCA + taxa']), 'primary'),
    sec('Aula 37', 'Rendimento líquido', 'scale', p('Compare sempre o que sobra <strong>depois do IR</strong>.') + T(['produto', 'IR'], [['Tesouro Direto', 'regressivo'], ['CDB', 'regressivo'], ['LCI / LCA', 'isento']]) + call('Exemplo', 'CDB: 100 − 17,5% = R$ 82,50 · LCI: R$ 85.', 'success'), 'primary'),
    sec('Aula 38', 'O tripé', 'chart', p('<strong>Rentabilidade · Liquidez · Risco</strong>: é impossível ter os três no máximo.') + li(['Mais risco → maior retorno esperado', 'Reserva → liquidez diária', 'Meta distante → pode aceitar carência']), 'growth'),
    sec('Aula 38', 'Riscos da renda fixa', 'shield', li(['Crédito: o "calote"', 'Mercado: taxas de juros oscilam', 'Liquidez: dinheiro "preso"']) + call('FGC', 'Protege até R$ 250 mil por CPF e instituição (CDB, LCI/LCA).', 'success'), 'danger'),
    sec('Aulas 38 · 39', 'Juros compostos', 'clock', f('F = C · (1 + i)<sup>n</sup>') + prop([['R$ 1.020,10', 'R$ 1.000 a 1% a.m. por 2 meses'], ['100 meses', 'dobrar a 0,8% a.m. (log)']]), 'growth'),
    sec('Aulas 39 · 40', 'O poder do tempo', 'up', p('R$ 1.000 a 10% a.a.:') + prop([['R$ 1.610', 'após 5 anos'], ['R$ 6.727', 'após 20 anos']]) + call('Aportes', 'R$ 100/mês a 1% a.m. por 20 anos ≈ R$ 98.925,54.', 'success'), 'success')
  ],
  wide: [
    wideSec('Aulas 40 · 41', 'Carteira, perfil e prazo', 'people', `    <div class="versus" style="grid-template-columns:repeat(3,1fr);">
      <div class="vcard success"><strong style="color:var(--success);">Conservador</strong><p style="font-size:.78rem;margin:4px 0 0;">Prioriza segurança: CDB, Tesouro Selic, IPCA+.</p></div>
      <div class="vcard" style="background:var(--primary-soft);"><strong style="color:var(--primary);">Moderado</strong><p style="font-size:.78rem;margin:4px 0 0;">Equilíbrio: protege com renda fixa e aceita parte em variável.</p></div>
      <div class="vcard danger"><strong style="color:var(--danger);">Arrojado</strong><p style="font-size:.78rem;margin:4px 0 0;">Aceita mais volatilidade por retorno maior no longo prazo.</p></div>
    </div>
    <div class="callout success" style="margin-top:10px;"><strong>Como montar</strong><p>1) perfil · 2) objetivo e prazo · 3) distribuição · 4) diversificar dentro de cada classe · 5) revisar de tempos em tempos. Curto prazo: liquidez (Selic). Médio: CDB/LCI/IPCA+. Longo: espaço para renda variável.</p></div>`, 'primary'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', `    <div class="callout success" style="margin:0;"><strong style="font-size:.95rem;">Investir é uma jornada</strong><p style="font-size:1rem;font-weight:700;margin-top:4px;">"Comece pequeno, mas comece hoje: o tempo é o seu maior aliado."</p></div>`, 'success')
  ],
  fontes: 'Tesouro Direto · B3 Bora Investir · CVM · Banco Central · Barros (2023) · Matriz de Referência do ENEM'
};

const i2 = {
  kind: 'info', out: 'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/infografico.html', key: 'rendavar',
  title: 'Guia visual — Renda Variável e Bolsa de Valores', brand: 'Renda Variável e Bolsa', aulas: 'Aulas 43–45', color: 'growth',
  h1: 'Renda variável: ser <span>sócio</span> e mitigar riscos',
  lede: 'Ações, FIIs e ETFs, a lógica da Bolsa, a volatilidade e as ferramentas para proteger o patrimônio — numa página só.',
  badges: ['Credor x sócio', 'Preço = oferta x demanda', 'Reserva ≠ renda variável', 'Diversifique'],
  curve: 'M20,150 C 70,100 110,140 170,100 C 230,60 270,120 340,80 C 400,48 440,60 480,26',
  sections: [
    sec('Aula 43', 'Fixo x variável', 'scale', p('Como a corrida de app: tarifa base fixa + partes variáveis.') + f('V = 2 + 0,26T + 1,40D') + call('Na renda variável', 'O retorno <strong>não é garantido</strong>: depende da empresa e do mercado.', ''), 'primary'),
    sec('Aula 43', 'Credor x sócio', 'people', li(['Renda fixa: você empresta e recebe juros', 'Renda variável: você é dono de uma parte e recebe lucros']), 'growth'),
    sec('Aula 43', 'Ações', 'building', p('A menor parte de uma empresa. Ganhos: <strong>valorização</strong> + <strong>dividendos</strong>.'), 'success'),
    sec('Aula 43', 'FIIs e ETFs', 'link', li(['FII: "aluguel" sem ter imóvel', 'Cotas a partir de ~R$ 10', '100 cotas × R$ 1,10 = R$ 110/mês', 'ETF: cesta que replica um índice']), 'primary'),
    sec('Aula 43', 'Volatilidade', 'chart', p('O preço sobe e desce todo dia.') + call('Atenção', 'Renda variável <strong>não é</strong> para a reserva de emergência.', 'danger'), 'danger'),
    sec('Aula 44', 'Como funciona a Bolsa', 'coin', steps(['Você envia a ordem (home broker)', 'A corretora valida', 'A B3 executa no pregão', 'O ativo é seu']), 'primary'),
    sec('Aula 44', 'Oferta e demanda', 'up', T(['situação', 'preço'], [['demanda > oferta', '↑ sobe'], ['oferta > demanda', '↓ cai'], ['iguais', '= equilíbrio']]), 'growth'),
    sec('Aula 44', 'Ibovespa e regras', 'target', li(['Carteira das maiores empresas da B3', 'Pregão ~10h às 17h/18h', 'CVM fiscaliza e protege']), 'success'),
    sec('Aula 45', 'Mapa dos riscos', 'warn', li(['Mercado', 'Crédito', 'Liquidez', 'Operacional']) + call('2008', 'Ibovespa −40% e Dow Jones −50%: mercados conectados.', 'danger'), 'danger')
  ],
  wide: [
    wideSec('Aula 45', 'Mitigar não é eliminar', 'shield', `    <div class="versus" style="grid-template-columns:repeat(3,1fr);">
      <div class="vcard success"><strong style="color:var(--success);">Diversificação</strong><p style="font-size:.78rem;margin:4px 0 0;">Não colocar tudo numa única ação.</p></div>
      <div class="vcard" style="background:var(--decay-soft);"><strong style="color:var(--decay);">Prazo</strong><p style="font-size:.78rem;margin:4px 0 0;">Longo prazo reduz o peso da volatilidade.</p></div>
      <div class="vcard" style="background:var(--growth-soft);"><strong style="color:var(--growth);">Alocação</strong><p style="font-size:.78rem;margin:4px 0 0;">Combinar renda fixa e variável (ex.: 70/30 para a faculdade em 3 anos).</p></div>
    </div>
    <div class="callout danger" style="margin-top:10px;"><strong>Na crise (−20%)</strong><p>Vender no pânico "tranca" o prejuízo. Se os fundamentos seguem bons, rebalancear ou esperar a recuperação é mais inteligente.</p></div>`, 'success'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', `    <div class="callout success" style="margin:0;"><strong style="font-size:.95rem;">Paciência vale mais que pressa</strong><p style="font-size:1rem;font-weight:700;margin-top:4px;">"Na renda variável, foque no longo prazo e diversifique."</p></div>`, 'success')
  ],
  fontes: 'B3 Bora Investir · CVM · Barros (2023), p. 211–216 · Matriz de Referência do ENEM'
};

const i3 = {
  kind: 'info', out: 'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/infografico.html', key: 'apostas',
  title: 'Guia visual — Apostas, Bets e Cassino', brand: 'Apostas, Bets e Cassino', aulas: 'Aulas 35, 42, 47', color: 'danger',
  h1: 'A ilusão do <span>dinheiro fácil</span>',
  lede: 'RTP, psicologia do vício, sinais de alerta e a matemática do caça-níquel: por que a única forma garantida de ganhar nas bets é não jogando.',
  badges: ['RTP = % que volta ao jogador', '12,8 mi em risco', 'R$ 62,5 bi perdidos em 2025', 'CVV 188'],
  curve: 'M20,40 C 110,50 180,110 260,130 C 350,152 420,120 480,60',
  sections: [
    sec('Aula 42', 'Como funciona o RTP', 'coin', p('Parte do dinheiro apostado <strong>sempre</strong> fica com a plataforma.') + T(['passo', 'valor'], [['20.000 × R$ 5', 'R$ 100.000'], ['RTP 85% devolvido', 'R$ 85.000'], ['lucro da casa', 'R$ 15.000']]), 'danger'),
    sec('Aula 35', 'Impacto em números', 'chart', chips(['R$ 62,5 bi perdidos em 2025', '7,5 mi endividados', '60% cortam alimentação', '34% dos jovens adiam a faculdade']), 'danger'),
    sec('Aula 35', 'Por que não consegue parar', 'bulb', li(['Pequenas vitórias que mascaram a perda', 'Cores e sons que induzem ao transe', 'Pix fácil: o dinheiro não passa pela mão', 'Dopamina e ilusão de controle']), 'danger'),
    sec('Aula 42', 'O ciclo das perdas', 'down', steps(['Pequena perda — vontade de recuperar', 'Aposta maior — mais risco', 'Endividamento', 'Arrependimento — saúde afetada']), 'danger'),
    sec('Aula 35', 'Sinais de alerta', 'warn', wl(['Dificuldade de parar mesmo perdendo', 'Esconder apostas da família', 'Cancelar compromissos para jogar', 'Jogo como fuga dos problemas']), 'danger'),
    sec('Aula 35', 'Onde buscar ajuda', 'shield', li(['Jogadores Anônimos — jogadoresanonimos.com.br', 'UBS, CAPS e app Meu SUS Digital', 'CVV — ligue 188 (24 horas)']), 'success'),
    sec('Aula 47', 'Caça-níquel por dentro', 'dice', p('3 rolos × 12 símbolos → 12<sup>3</sup> = 1.728 combinações.') + prop([['0,057%', 'chance de ganhar'], ['99,943%', 'chance de perder']]), 'danger'),
    sec('Aula 47', 'Máquina de 5 rolos', 'dice', p('15 símbolos, 5 rolos → 15<sup>5</sup> = <strong>759.375</strong> combinações. Gastar R$ 759.374 para receber R$ 500 mil = prejuízo de R$ 259.374.'), 'danger'),
    sec('Aula 47', 'Tigrinho e influenciadores', 'phone', p('Software sem auditoria externa, reprogramável. Influenciadores lucram com um percentual do que os seguidores <strong>depositam</strong>.'), 'danger')
  ],
  wide: [
    wideSec('Aula 47 · o caminho real', 'Aposta não é investimento', 'leaf', versus(['Aposta', 'Baseada no acaso. Sem retorno garantido. Média de R$ 164/mês apostados.'], ['Investimento', 'Tem lastro e juros. R$ 100/mês por 20 anos = R$ 98.925,54. R$ 200/mês = R$ 197.851,07.']) + call('O segredo', 'Manter o hábito de investir: o resultado depende de disciplina, não de sorte.', 'success'), 'success'),
    wideSec('Mensagem final', 'A mensagem central', 'bulb', `    <div class="callout danger" style="margin:0;"><strong style="font-size:.95rem;">A mensagem central</strong><p style="font-size:1rem;font-weight:700;margin-top:4px;">"A única forma garantida de ganhar nas bets é não jogando."</p></div>`, 'danger')
  ],
  fontes: 'Nunes Maciel & Azevedo Junior (2026, Zenodo) · SEED-PR Orientação 011/2023 · Jogadores Anônimos · CVV'
};

const i4 = {
  kind: 'info', out: 'educacao-financeira/2-ano/3-tri/criptoativos/infografico.html', key: 'cripto',
  title: 'Guia visual — Criptoativos', brand: 'Criptoativos', aulas: 'Aulas 48–50', color: 'primary',
  h1: 'Criptoativos: tecnologia, <span>volatilidade</span> e responsabilidade',
  lede: 'Bitcoin, blockchain, desvio padrão, variações percentuais sucessivas, taxas e golpes — o essencial numa página só.',
  badges: ['Sem FGC', 'Preço 24/7', '+20% e −25% = −10%', 'Promessa garantida = golpe'],
  curve: 'M20,150 C 70,140 90,80 140,100 C 190,120 210,40 270,64 C 330,88 350,30 410,52 C 440,64 460,40 480,26',
  sections: [
    sec('Aula 48', 'Bitcoin em 4 fatos', 'coin', li(['Criado em 2008 por Satoshi Nakamoto', 'Rede ponto a ponto (P2P)', 'Máximo de 21 milhões até 2140', 'Sem banco ou governo no meio']), 'primary'),
    sec('Aula 48', 'Blockchain', 'link', steps(['Transação enviada', 'Agrupada em bloco', 'Bloco recebe uma hash (impressão digital)', 'Cada bloco guarda a hash do anterior']), 'primary'),
    sec('Aula 48', 'Mineradores e consenso', 'lock', p('Computadores validam transações, evitam o <strong>gasto duplo</strong> e recebem BTC. Um bloco adulterado é rejeitado pela maioria.'), 'success'),
    sec('Aula 48', 'Mercado cripto', 'chart', li(['Exchange ou P2P + carteira (wallet)', 'Frações: 0,001 BTC', 'Preço varia 24h por dia', '2010: < US$ 1 · já passou de US$ 50 mil']), 'growth'),
    sec('Aula 49', 'Medir o risco', 'scale', p('<strong>Desvio padrão</strong>: maior dp = maior volatilidade.') + prop([['4,24%', 'dp de 3, 15, 6, 9 e 12'], ['< 5%', 'risco muito baixo']]), 'primary'),
    sec('Aula 49', 'Comparando ativos', 'up', T(['ativo', 'oscilação/ano'], [['Bitcoin', '18% a 150%'], ['Ibovespa', '10% a 40%'], ['Dólar', '5% a 30%']]), 'growth'),
    sec('Aula 49', 'Variações sucessivas', 'down', call('Pegadinha', '+20% e depois −25%: 1,20 × 0,75 = 0,90 → <strong>perda de 10%</strong>. Percentuais se multiplicam.', 'danger'), 'danger'),
    sec('Aula 49', 'Proteção', 'shield', li(['DCA: compras fracionadas e recorrentes', 'HODL: visão de longo prazo', 'Stop-loss: limite de perda definido antes', 'Diversificação entre classes']), 'success'),
    sec('Aula 50', 'Custos e taxas', 'coin', p('Maior taxa bruta ≠ maior lucro: Básica R$ 53,90 x Pessoal R$ 53,87.') + call('Em cripto', 'Há ainda taxa de rede (gás) e corretagem.', ''), 'primary')
  ],
  wide: [
    wideSec('Aula 50', 'Prós, contras e regras de ouro', 'warn', `    <div class="versus">
      <div class="vcard success"><strong style="color:var(--success);">Prós</strong><p style="font-size:.78rem;margin:4px 0 0;">Inovação (DeFi, contratos inteligentes) · acesso global 24/7 · diversificação em fração da carteira.</p></div>
      <div class="vcard danger"><strong style="color:var(--danger);">Contras</strong><p style="font-size:.78rem;margin:4px 0 0;">Sem FGC · golpes e pirâmides · perda irreversível de chaves · volatilidade extrema.</p></div>
    </div>
    <div class="callout success" style="margin-top:10px;"><strong>Regras de ouro</strong><p>1) Reserva de emergência primeiro · 2) máximo de 1% a 5% do patrimônio · 3) estude o projeto · 4) exchange oficial + 2FA · 5) desconfie de lucro alto e garantido (3% ao dia ≈ 2,43× em 30 dias).</p></div>`, 'danger'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', `    <div class="callout success" style="margin:0;"><strong style="font-size:.95rem;">Escolha responsável</strong><p style="font-size:1rem;font-weight:700;margin-top:4px;">"Lucro alto e garantido num mercado volátil é sinal de golpe."</p></div>`, 'success')
  ],
  fontes: 'Banco Central · CVM · Mercado Bitcoin · Nakamoto (2008) · Matriz de Referência do ENEM'
};

module.exports = [i1, i2, i3, i4];
