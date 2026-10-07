// Guias visuais (infográficos) da 1ª série — 5 unidades
const L = require('./lib.js');
const { sec, wideSec, tbl, ic } = L;
const li = arr => `      <ul class="props">${arr.map(t => `<li>${t}</li>`).join('')}</ul>`;
const wl = arr => `      <ul class="warn-list">${arr.map(t => `<li>${ic('warn', 'icon danger', 14)}${t}</li>`).join('')}</ul>`;
const p = t => `      <p class="lede-s">${t}</p>`;
const call = (h, t, c = '') => `      <div class="callout ${c}"><strong>${h}</strong><p>${t}</p></div>`;
const f = t => `      <p class="formula">${t}</p>`;
const prop = (arr, cols = 2) => `      <div class="prop-grid" style="grid-template-columns:repeat(${cols},1fr);">${arr.map(([n, l]) => `<div class="prop-card"><span class="num">${n}</span><span class="lbl">${l}</span></div>`).join('')}</div>`;
const steps = arr => `      <ol class="steps">${arr.map(t => `<li>${t}</li>`).join('')}</ol>`;
const T = (h, r) => '      ' + tbl(h, r);
const versus = (a, b) => `    <div class="versus"><div class="vcard danger"><strong style="color:var(--danger);">${a[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${a[1]}</p></div><div class="vcard success"><strong style="color:var(--success);">${b[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${b[1]}</p></div></div>`;
const msg = (t, c = 'success') => `    <div class="callout ${c}" style="margin:0;"><strong style="font-size:.95rem;">Mensagem final</strong><p style="font-size:1rem;font-weight:700;margin-top:4px;">${t}</p></div>`;
const dir = 'educacao-financeira/1-ano/3-tri/';

const credito = {
  kind: 'info', out: dir + 'credito-juros-financiamento/infografico.html', key: 'credito1',
  title: 'Guia visual — Crédito, Juros e Financiamento', brand: 'Crédito, Juros e Financiamento', aulas: 'Aulas 36–40 e 43', color: 'danger',
  h1: 'Crédito, juros e <span>financiamento</span>',
  lede: 'Cheque especial, juros compostos, taxas equivalentes, prestações, cartão de crédito e score — o que você precisa lembrar antes de pedir crédito.',
  badges: ['FV = PV·(1+i)ⁿ', 'Cheque especial 9,78% a.m.', 'Limite ≠ renda', 'Score de 0 a 1.000'],
  curve: 'M20,160 C 120,155 220,140 300,100 C 380,60 430,40 480,24',
  sections: [
    sec('Aula 36', 'Cheque especial', 'warn', p('Empréstimo <strong>automático</strong> e caríssimo: juros entre os mais altos do mercado.') + call('Exemplo', 'R$ 1.000 por 20 dias a 9,78% a.m. ≈ R$ 63,86 de juros (contas em atraso: R$ 15,75).', 'danger'), 'danger'),
    sec('Aula 37', 'Juros compostos', 'up', f('FV = PV · (1 + i)<sup>n</sup>') + p('Juros sobre juros: a dívida (e o investimento) crescem em curva.') + prop([['R$ 2.436,40', 'R$ 1.000 a 16% a.m. por 6 meses'], ['15 meses', 'dobrar a 5% a.m. (log)']]), 'growth'),
    sec('Aula 40', 'Taxa equivalente', 'scale', f('i<sub>m</sub> = (1 + i<sub>a</sub>)<sup>1/12</sup> − 1') + li(['12% a.a. ≈ 0,949% a.m. (não 1%)', 'diária ↔ mensal: expoente 30', 'não divida taxas em juros compostos']), 'primary'),
    sec('Aula 40', 'Prestação (PMT)', 'coin', f('PMT = PV·i ÷ [1 − (1+i)<sup>−n</sup>]') + li(['R$ 2.500 em 12× a 0,85% a.m. = R$ 220,02', 'Total pago = PMT × n', 'compare com o preço à vista']), 'primary'),
    sec('Aula 38', 'Calculadora financeira', 'chart', li(['n · i · PV · PMT · FV', 'com 3 dados você obtém o 4º', 'PV e PMT/FV têm sinais opostos: use [CHS]', 'HP 12C não tem [=] (Notação Polonesa Reversa)', 'zere a memória: [f] [CLX]']), 'primary'),
    sec('Aula 39', 'Cartão de crédito', 'shield', li(['Compra agora, paga na fatura', 'Parcelar não barateia', 'Limite não é renda', 'Pagar só o mínimo = rotativo caro']) + call('Hoje', 'Juros do rotativo limitados a 100% da dívida original (desde jan/2024).', 'success'), 'danger'),
    sec('Aula 39', 'A fatura paga pela metade', 'down', T(['passo', 'valor'], [['Fatura R$ 1.000', 'paga 20% = R$ 200'], ['Saldo × 1,10', 'R$ 880'], ['Paga 20% de 880', 'R$ 704'], ['Mês 3: 704 × 1,10', '<b>R$ 774,40</b>']]), 'danger'),
    sec('Aula 43', 'CPF, SPC e Serasa', 'people', li(['CPF identifica o cidadão para a vida toda', 'Nome sujo = CPF negativado', 'Não empreste o cartão a quem está negativado', '9º dígito: região fiscal (PR e RS = 9)']), 'primary'),
    sec('Aula 43', 'Score', 'target', T(['faixa', 'risco'], [['0–300', 'muito alto'], ['301–500', 'médio'], ['501–700', 'baixo'], ['701–1.000', 'muito baixo']]), 'success')
  ],
  wide: [
    wideSec('Para decidir bem', 'Antes de usar crédito', 'bulb', `    <div class="callout success"><strong>Roteiro</strong><p>1) Preciso mesmo agora? · 2) Cabe na <b>renda</b> (não só no limite)? · 3) Qual é a <b>taxa</b> e o <b>total pago</b>? · 4) Há alternativa mais barata (juntar, renegociar, pagar à vista)? · 5) Se atrasar, qual é o custo? Pague primeiro a dívida de maior taxa.</p></div>`, 'success'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', msg('"Antes de usar crédito, calcule o que ele custa."', 'danger'), 'danger')
  ],
  fontes: 'Barros (2024) · Banco Central do Brasil · Receita Federal · Serasa · ENEM (2013 PPL, 2018 PPL, 2019 PPL, Enem Digital 2020)'
};

const consumidor = {
  kind: 'info', out: dir + 'direitos-do-consumidor/infografico.html', key: 'consumidor1',
  title: 'Guia visual — Direitos do Consumidor', brand: 'Direitos do Consumidor', aulas: 'Aula 42', color: 'success',
  h1: 'Direitos do <span>consumidor</span>: CDC e PROCON',
  lede: 'O que a Lei 8.078/1990 garante, quando reclamar, onde reclamar e como a matemática ajuda a conferir etiquetas e cobranças.',
  badges: ['Lei 8.078/1990', 'Vício: 30 dias', 'Arrependimento: 7 dias', 'consumidor.gov.br'],
  curve: 'M20,160 C 120,150 220,110 300,80 C 380,52 430,36 480,22',
  sections: [
    sec('Aula 42', 'O CDC', 'book', p('Lei nº 8.078, de <strong>11/9/1990</strong>: regula a relação entre fornecedores e consumidores.') + li(['Direito à vida, saúde e segurança', 'Informação clara e adequada', 'Revisão de cláusulas', 'Acesso à justiça', 'Crédito responsável e prevenção do superendividamento']), 'success'),
    sec('Aula 42', 'Práticas abusivas (art. 39)', 'warn', wl(['Vantagem manifestamente excessiva (multa da comanda)', 'Venda casada', 'Consumação mínima', 'Recusar atendimento sem justificativa']), 'danger'),
    sec('Aula 42', 'Cobrança vexatória (art. 71)', 'lock', p('Ameaça, coação ou constrangimento na cobrança é crime.') + call('Pena', 'Detenção de 3 meses a 1 ano e multa.', 'danger'), 'danger'),
    sec('Aula 42', 'Produto com problema', 'shield', li(['Vício: 30 dias para sanar; depois troca, abatimento ou devolução', 'Compra fora da loja: arrependimento em 7 dias', 'Guarde nota, prints e conversas']), 'primary'),
    sec('Aula 42', 'Preço por unidade', 'scale', p('Etiqueta deve trazer o preço por kg, litro ou metro.') + T(['conta', 'resultado'], [['510 g por R$ 7,39', 'R$ 14,49/kg'], ['regra de três', 'x = 7,39 × 1000 ÷ 510']]), 'success'),
    sec('Aula 42', 'PROCON', 'building', li(['Órgão estadual: orienta, educa, protege e defende', 'consumidor.gov.br: reclame e veja a reputação', 'Sem cadastro na plataforma? Vá ao PROCON ou ao site do PROCON/PR']), 'primary'),
    sec('Aula 42', 'Caso da Sandra', 'chart', prop([['R$ 99', 'contratado'], ['R$ 129', 'cobrado (+30,3%)']]) + p('Provas + reclamação no PROCON → boleto refeito, pagou só R$ 99.'), 'success'),
    sec('Aula 42', 'Reputação da empresa', 'people', li(['3.078 reclamações', '86,9% solucionadas', 'Satisfação 3,3 de 5', 'Prazo médio de 6,4 dias']), 'primary'),
    sec('Aula 42', 'Deveres do consumidor', 'check', li(['Ler o contrato', 'Conhecer a própria condição financeira', 'Usar o produto corretamente', 'Pagar em dia', 'Conhecer os direitos']), 'success')
  ],
  wide: [
    wideSec('ENEM · H12', 'Direitos e deveres andam juntos', 'bulb', versus(['Sem informação', 'Cai em multas abusivas, cobranças vexatórias e promoções enganosas.'], ['Com informação', 'Exige o que é seu, usa os canais certos e cumpre o que assina.']), 'success'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', msg('"Quem conhece os próprios direitos não paga o que não deve."'), 'success')
  ],
  fontes: 'Lei 8.078/1990 (CDC) · consumidor.gov.br · PROCON-PR · Barros (2024)'
};

const consumo = {
  kind: 'info', out: dir + 'consumo-consciente/infografico.html', key: 'consumo1',
  title: 'Guia visual — Consumo Consciente', brand: 'Consumo Consciente', aulas: 'Aulas 44–47', color: 'growth',
  h1: 'Consumo <span>consciente</span>: armadilhas, supermercado e promoções',
  lede: 'Os truques do marketing, a diferença entre consumo e consumismo e as contas para comprar bem — do mercado à Black Friday.',
  badges: ['Quero? Preciso? Posso?', '+10% −2% ≠ +8%', 'Preço-alvo', 'Lista + teto de gasto'],
  curve: 'M20,70 C 100,90 160,150 240,120 C 320,90 400,60 480,26',
  sections: [
    sec('Aula 44', 'Armadilhas do consumo', 'warn', li(['Produto grátis (isca)', 'Adeus, cifrão (cardápio sem R$)', '10 por 10', 'Urgência ("por tempo limitado")', 'Fator 9 (7,99 parece 7)', 'Limite por cliente']), 'danger'),
    sec('Aula 44', 'O que o CDC proíbe', 'shield', li(['Venda casada', 'Consumação mínima', 'Limitar sem justificativa']), 'success'),
    sec('Aula 45', 'Consumo x consumismo', 'scale', T(['consumo', 'consumismo'], [['necessidade', 'desejo/status'], ['planejado', 'impulsivo'], ['uso contínuo', 'sensação imediata']]), 'growth'),
    sec('Aula 45', 'O custo do consumismo', 'leaf', li(['Lixo e poluição', 'Recursos naturais finitos', 'Aquecimento global', 'Pessoas julgadas pelo que compram']), 'success'),
    sec('Aula 45', 'Quero? Preciso? Posso?', 'target', steps(['Eu realmente <b>quero</b>?', 'Eu realmente <b>preciso</b>?', 'Eu <b>posso</b> (não vai custar mais caro depois)?']) + p('Alternativas: alugar, usar o que tem, brechó, produzir.'), 'primary'),
    sec('Aula 46', 'No supermercado', 'clock', li(['Últimos 10 dias do mês costumam ser melhores', 'Cardápio e lista semanais', 'Teto de gasto + substituições', 'Evitar desperdício: pão = R$ 25/mês jogados fora']), 'success'),
    sec('Aula 46', 'Armazenar bem', 'leaf', li(['Raízes longe da luz', 'Frutas climatéricas separadas (etileno)', 'Queijo em pano úmido ou filme', 'Folhas lavadas e bem secas']), 'success'),
    sec('Aula 47', 'A pegadinha dos percentuais', 'down', f('+10% e −2% ≠ +8%') + p('R$ 1.000 → R$ 1.100 → R$ 1.078 (e não 1.080): bases diferentes.'), 'danger'),
    sec('Aula 47', 'Kit e Black Friday', 'chart', li(['"Compre 2, leve 3": confira se o kit = preço de 2', 'Pesquise o histórico de preços', 'Preço-alvo = média dos preços com 20% de desconto sobre o atual e sobre o menor']) + prop([['R$ 311,20', 'preço-alvo da cafeteira (exemplo)']], 1), 'primary')
  ],
  wide: [
    wideSec('Resumo', 'Antes de comprar', 'bulb', `    <div class="callout success"><strong>Checklist</strong><p>Esperei 24 horas? · Está na lista? · Cabe no teto? · Comparei com o histórico de preços? · Vale o preço por unidade? · Passa no "quero, preciso, posso"?</p></div>`, 'success'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', msg('"Nem sempre o que está em promoção deve ser comprado."'), 'success')
  ],
  fontes: 'Barros (2024) · CDC art. 39 · ENEM 2016 (Linguagens) e 2020 · ENEM 2022 (H4)'
};

const apostas = {
  kind: 'info', out: dir + 'apostas-bets-cassino/infografico.html', key: 'apostas1',
  title: 'Guia visual — Apostas, Bets e Cassino', brand: 'Apostas, Bets e Cassino', aulas: 'Aulas 35, 41, 50', color: 'danger',
  h1: 'A ilusão do <span>dinheiro fácil</span>',
  lede: 'RTP, psicologia do vício, sinais de alerta e a matemática do caça-níquel: por que a única forma garantida de ganhar nas bets é não jogando.',
  badges: ['RTP = % que volta ao jogador', '12,8 mi em risco', 'R$ 62,5 bi perdidos em 2025', 'CVV 188'],
  curve: 'M20,40 C 110,50 180,110 260,130 C 350,152 420,120 480,60',
  sections: [
    sec('Aula 41', 'Como funciona o RTP', 'coin', p('Parte do dinheiro apostado <strong>sempre</strong> fica com a plataforma.') + T(['passo', 'valor'], [['20.000 × R$ 5', 'R$ 100.000'], ['RTP 85% devolvido', 'R$ 85.000'], ['lucro da casa', 'R$ 15.000']]), 'danger'),
    sec('Aula 35', 'Impacto em números', 'chart', `      <div class="app-row"><div class="app-chip">R$ 62,5 bi perdidos em 2025</div><div class="app-chip">7,5 mi endividados</div><div class="app-chip">60% cortam alimentação</div><div class="app-chip">34% dos jovens adiam a faculdade</div></div>`, 'danger'),
    sec('Aula 35', 'Por que não consegue parar', 'bulb', li(['Pequenas vitórias que mascaram a perda', 'Cores e sons que induzem ao transe', 'Pix fácil: o dinheiro não passa pela mão', 'Dopamina e ilusão de controle']), 'danger'),
    sec('Aula 41', 'O ciclo das perdas', 'down', steps(['Pequena perda — vontade de recuperar', 'Aposta maior — mais risco', 'Endividamento', 'Arrependimento — saúde afetada']), 'danger'),
    sec('Aula 35', 'Sinais de alerta', 'warn', wl(['Dificuldade de parar mesmo perdendo', 'Esconder apostas da família', 'Cancelar compromissos para jogar', 'Jogo como fuga dos problemas']), 'danger'),
    sec('Aula 35', 'Onde buscar ajuda', 'shield', li(['Jogadores Anônimos — jogadoresanonimos.com.br', 'UBS, CAPS e app Meu SUS Digital', 'CVV — ligue 188 (24 horas)']), 'success'),
    sec('Aula 50', 'Caça-níquel por dentro', 'dice', p('3 rolos × 12 símbolos → 12<sup>3</sup> = 1.728 combinações.') + prop([['0,057%', 'chance de ganhar'], ['99,943%', 'chance de perder']]), 'danger'),
    sec('Aula 50', 'Máquina de 5 rolos', 'dice', p('15<sup>5</sup> = <strong>759.375</strong> combinações. Gastar R$ 759.374 para receber R$ 500 mil = prejuízo de R$ 259.374.'), 'danger'),
    sec('Aula 50', 'Tigrinho e influenciadores', 'phone', p('Software sem auditoria externa, reprogramável. Influenciadores lucram com um percentual do que os seguidores <strong>depositam</strong>.'), 'danger')
  ],
  wide: [
    wideSec('Aula 50 · o caminho real', 'Aposta não é investimento', 'leaf', versus(['Aposta', 'Baseada no acaso. Sem retorno garantido. Média de R$ 164/mês apostados.'], ['Investimento', 'Tem lastro e juros. R$ 100/mês por 20 anos = R$ 98.925,54. R$ 200/mês = R$ 197.851,07.']), 'success'),
    wideSec('Mensagem final', 'A mensagem central', 'bulb', msg('"A única forma garantida de ganhar nas bets é não jogando."', 'danger'), 'danger')
  ],
  fontes: 'Nunes Maciel & Azevedo Junior (2026, Zenodo) · SEED-PR Orientação 011/2023 · Jogadores Anônimos · CVV'
};

const empreendedor = {
  kind: 'info', out: dir + 'perfil-empreendedor/infografico.html', key: 'emp1',
  title: 'Guia visual — Perfil Empreendedor', brand: 'Perfil Empreendedor', aulas: 'Aula 48', color: 'growth',
  h1: 'Perfil <span>empreendedor</span>: ideias em ação',
  lede: 'O que é empreender, quais traços ajudam, os riscos, o Círculo Dourado (o quê, como, por quê) e as contas básicas de um pequeno negócio.',
  badges: ['Atitude que se aprende', 'Sem salário garantido', 'Círculo Dourado', 'Ponto de equilíbrio'],
  curve: 'M20,160 C 100,150 160,110 240,100 C 320,90 400,50 480,26',
  sections: [
    sec('Aula 48', 'O que é empreender', 'target', p('Transformar <strong>ideias</strong> em algo <strong>novo e útil</strong>: é um modo de pensar que se aprende e se pratica (Rosa, 2015).'), 'growth'),
    sec('Aula 48', 'Onde se empreende', 'people', li(['Na própria empresa', 'Crescendo a empresa em que trabalha', 'Em projetos do bairro, da escola, da cidade']), 'primary'),
    sec('Aula 48', 'Dois perfis', 'scale', p('Quem não se conforma e começa de novo (Legião Urbana) e quem faz bem o seu papel e é grato (Zeca Pagodinho). Não há certo ou errado: é personalidade.'), 'primary'),
    sec('Aula 48', 'Características', 'check', li(['Organização', 'Inconformismo construtivo', 'Disposição para o risco', 'Persistência', 'Olho para oportunidades']), 'success'),
    sec('Aula 48', 'Os riscos', 'warn', wl(['Sem segurança de salário mensal', 'Não há garantia de que dará certo', 'É preciso trabalhar duro']), 'danger'),
    sec('Aula 48', '"8 é…?"', 'bulb', p('Na escola, a pergunta tem resposta certa. Para o empreendedor, é como "8 é…?": 5+3, 10−2, 23… não há resposta pronta (SEBRAE).'), 'primary'),
    sec('Aula 48', 'Círculo Dourado', 'coin', steps(['<b>O quê</b>: o desafio que você resolve', '<b>Como</b>: o que te diferencia', '<b>Por quê</b>: sua causa, sua motivação']), 'growth'),
    sec('Contas de um pequeno negócio', 'Ponto de equilíbrio', 'chart', f('PE = custo fixo ÷ (preço − custo variável)') + prop([['100', 'unidades: R$ 600 fixos, preço R$ 10, custo R$ 4'], ['60%', 'margem sobre o preço']]), 'growth'),
    sec('ENEM · H23', 'Empreendedor de palco', 'book', p('O texto identifica o "empreendedor de palco" pela <strong>linguagem</strong>: jargões, estrangeirismos e clichês persuasivos — não pela qualidade do que vende.'), 'primary')
  ],
  wide: [
    wideSec('Para começar', 'Do sonho ao plano', 'bulb', `    <div class="callout success"><strong>Primeiros passos</strong><p>1) Escolha um problema real · 2) Preencha o Círculo Dourado · 3) Calcule custos e ponto de equilíbrio · 4) Teste em pequena escala · 5) Ajuste e persista. É normal não dar certo na 1ª, 2ª ou 3ª tentativa.</p></div>`, 'success'),
    wideSec('Mensagem final', 'O que levar para a vida', 'bulb', msg('"Empreender é estar apaixonado por uma ideia e correr atrás."'), 'success')
  ],
  fontes: 'Rosa (2015) · SEBRAE, Guia Essencial para Novos Empreendedores · Barros (2024) · ENEM 2020 (Linguagens, H23)'
};

module.exports = [credito, consumidor, consumo, apostas, empreendedor];
