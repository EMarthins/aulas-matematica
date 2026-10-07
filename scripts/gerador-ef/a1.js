// Atividades "ENEM" (5) — questões no estilo ENEM, originais, a partir dos temas das aulas
const R = v => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const P = (t) => `<p>${t}</p>`;
const hint = t => `<p class="hint">${t}</p>`;
const dir = '/educacao-financeira/2-ano/3-tri/'.slice(1);
const mk = (o) => ({ kind: 'enem', ...o });

const a = mk({
  out: dir + 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-enem.html', key: 'inv1-enem',
  title: 'Investir e renda fixa no ENEM — Atividade', brand: 'Investimentos e Renda Fixa', cls: '',
  eyebrow: 'Estilo ENEM · H21 e Hd06 · aulas 36–38',
  h1: 'Investir e renda fixa <span style="color:var(--primary);">no ENEM</span>',
  subtitle: 'Quatro questões no estilo do ENEM — rendimento líquido, inflação, comparação de aplicações e juros compostos — para treinar o raciocínio que a prova cobra e que você usa na vida.',
  introT: 'Antes de começar', introP: 'São questões originais, escritas no formato e no nível do ENEM a partir do conteúdo das aulas 36 a 38. Resolva no caderno e só depois escolha a alternativa — a resolução aparece após a resposta.',
  final: 'Em todas, o segredo foi o mesmo: olhar o valor líquido, o poder de compra real e o efeito do tempo — não só a taxa que aparece no anúncio.',
  questions: [
    { badge: 'Estilo ENEM · rendimento líquido', text: 'Um investidor aplicou <strong>R$ 5.000</strong> em um CDB que rendeu <strong>4%</strong> (bruto) em um ano. Sobre o rendimento incide Imposto de Renda de <strong>20%</strong>.', cmd: 'O montante líquido que o investidor tem ao final de um ano é:', opts: ['R$ 5.200,00', 'R$ 5.160,00', 'R$ 5.000,00', 'R$ 5.040,00', 'R$ 4.960,00'], a: 1,
      sol: P('Rendimento bruto: 4% de 5.000 = <strong>R$ 200</strong>.') + P('IR: 20% de 200 = R$ 40 → rendimento líquido <strong>R$ 160</strong>.') + P('Montante líquido = 5.000 + 160 = <strong>R$ 5.160,00</strong>.') + hint('O imposto incide <strong>só sobre o lucro</strong>, nunca sobre o capital investido.') },
    { badge: 'Estilo ENEM · inflação e poder de compra', text: 'Uma pessoa deixou <strong>R$ 2.000</strong> em uma aplicação que rendeu <strong>4% ao ano</strong>, em um ano em que a inflação foi de <strong>5%</strong>.', cmd: 'Ao final do ano, o poder de compra desse dinheiro, em relação ao início:', opts: ['aumentou cerca de 1%', 'permaneceu o mesmo', 'diminuiu cerca de 0,95%', 'diminuiu exatamente 1%', 'aumentou 9%'], a: 2,
      sol: P('Fator de rendimento: 1,04. Fator de inflação: 1,05.') + P('Poder de compra: 1,04 ÷ 1,05 ≈ <strong>0,9905</strong> → queda de cerca de <strong>0,95%</strong>.') + hint('Armadilha comum: subtrair (4% − 5% = −1%). Taxas de crescimento se <strong>dividem</strong>, não se subtraem. Mesmo "rendendo", o dinheiro perdeu valor real.') },
    { badge: 'Estilo ENEM · CDB x LCI', text: 'Com <strong>R$ 10.000</strong> para aplicar por um ano, um investidor compara: <strong>CDB</strong> de 12% ao ano (bruto), com IR de 15% sobre o ganho; e <strong>LCI</strong> de 10,5% ao ano, isenta de IR.', cmd: 'A aplicação mais vantajosa, e o ganho líquido, são:', opts: ['CDB, com ganho líquido de R$ 1.020', 'CDB, com ganho líquido de R$ 1.200', 'LCI, com ganho líquido de R$ 1.050', 'LCI, com ganho líquido de R$ 1.020', 'As duas rendem o mesmo valor'], a: 2,
      sol: P('CDB: ganho bruto 12% de 10.000 = R$ 1.200; IR 15% = R$ 180 → ganho líquido <strong>R$ 1.020</strong>.') + P('LCI: ganho de 10,5% = <strong>R$ 1.050</strong> (sem IR).') + P('A LCI deixa R$ 30 a mais no bolso.') + hint('Taxa maior não significa lucro maior: compare o <strong>líquido</strong>.') },
    { badge: 'Estilo ENEM · juros compostos', text: 'Um capital de <strong>R$ 2.000</strong> é aplicado a juros compostos de <strong>2% ao mês</strong>. Considere que 1,02³ = 1,061208.', cmd: 'O montante após 3 meses é, em reais, aproximadamente:', opts: ['2.120,00', '2.122,42', '2.060,00', '2.240,00', '2.061,21'], a: 1,
      sol: P('M = C·(1 + i)<sup>n</sup> = 2.000 · (1,02)³ = 2.000 · 1,061208 ≈ <strong>R$ 2.122,42</strong>.') + hint('Em juros simples seriam R$ 2.120 (2.000 + 3·40). A diferença de R$ 2,42 são os "juros sobre juros".') }
  ]
});

const b = mk({
  out: dir + 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-enem.html', key: 'inv2-enem',
  title: 'Juros compostos e carteira no ENEM — Atividade', brand: 'Juros Compostos e Carteira', cls: 'success',
  eyebrow: 'Estilo ENEM · H21 · aulas 39–41',
  h1: 'Juros compostos e carteira <span style="color:var(--growth);">no ENEM</span>',
  subtitle: 'Logaritmo para achar o tempo, função exponencial, porcentagem em carteiras e comparação entre aplicações: a matemática financeira que mais aparece na prova.',
  introT: 'Antes de começar', introP: 'Questões originais, no estilo do ENEM, construídas com o mesmo raciocínio das aulas 39 a 41. Quando a questão fornecer valores de logaritmos, use-os — é assim que a prova cobra.',
  final: 'O fio condutor: o tempo é o expoente, e a porcentagem de cada classe diz muito sobre o risco da carteira.',
  questions: [
    { badge: 'Estilo ENEM · logaritmo e tempo', text: 'Uma aplicação rende <strong>4% ao mês</strong> a juros compostos. Deseja-se <strong>duplicar</strong> o capital. Considere log 2 = 0,30 e log 1,04 = 0,017.', cmd: 'O menor número inteiro de meses para duplicar o capital é:', opts: ['12', '15', '18', '24', '30'], a: 2,
      sol: P('2C = C·(1,04)<sup>n</sup> → 2 = (1,04)<sup>n</sup>.') + P('log 2 = n·log 1,04 → 0,30 = n · 0,017 → n ≈ <strong>17,6</strong> meses.') + P('O menor inteiro que garante a duplicação é <strong>18 meses</strong>.') + hint('Como 17,6 não é inteiro, "arredonda para cima": em 17 meses ainda não dobrou.') },
    { badge: 'Estilo ENEM · função exponencial', text: 'O salário de um funcionário, em função do tempo de serviço <em>t</em> (em anos), é dado por <strong>s(t) = 2.000 · (1,05)<sup>t</sup></strong>. Considere 1,05³ = 1,157625.', cmd: 'Com 3 anos de serviço, o salário, em reais, é:', opts: ['2.300,00', '2.315,25', '2.310,00', '2.150,00', '2.431,01'], a: 1,
      sol: P('s(3) = 2.000 · (1,05)³ = 2.000 · 1,157625 = <strong>R$ 2.315,25</strong>.') + hint('A taxa de correção é de 5% ao ano (1,05 = 100% + 5%). Quem somasse 3 × 5% (= 15% → R$ 2.300) estaria tratando como juro simples.') },
    { badge: 'Estilo ENEM · porcentagem na carteira', text: 'Uma carteira de <strong>R$ 8.000</strong> está assim dividida: <strong>45%</strong> em renda fixa, <strong>30%</strong> em ações, <strong>15%</strong> em fundos imobiliários e <strong>10%</strong> em criptomoedas.', cmd: 'O valor investido em <strong>renda variável</strong> (ações, fundos imobiliários e criptomoedas) é:', opts: ['R$ 3.600,00', 'R$ 4.400,00', 'R$ 2.400,00', 'R$ 4.000,00', 'R$ 5.200,00'], a: 1,
      sol: P('Renda variável: 30% + 15% + 10% = <strong>55%</strong> da carteira.') + P('55% de 8.000 = 0,55 × 8.000 = <strong>R$ 4.400,00</strong>.') + hint('Os R$ 3.600 são a renda fixa (45%). Para um perfil moderado, 55% em variável é um pouco arriscado: a aula sugeria algo perto de 45% em renda fixa.') },
    { badge: 'Estilo ENEM · poupança x CDB', text: 'Um investidor aplica <strong>R$ 1.000</strong> por um mês. Na <strong>poupança</strong> rende 0,5% ao mês, isento de IR. No <strong>CDB</strong> rende 0,8% ao mês, com IR de 20% sobre o ganho.', cmd: 'Ao final do mês, a aplicação mais vantajosa e o montante são:', opts: ['Poupança, R$ 1.005,00', 'CDB, R$ 1.008,00', 'CDB, R$ 1.006,40', 'Poupança, R$ 1.006,40', 'CDB, R$ 1.001,60'], a: 2,
      sol: P('Poupança: 0,5% de 1.000 = R$ 5 → <strong>R$ 1.005,00</strong>.') + P('CDB: 0,8% de 1.000 = R$ 8; IR de 20% = R$ 1,60 → ganho líquido R$ 6,40 → <strong>R$ 1.006,40</strong>.') + hint('Mesmo pagando imposto, o CDB superou a poupança. Em questões assim, o imposto incide <strong>só sobre o ganho</strong>.') }
  ]
});

const c = mk({
  out: dir + 'renda-variavel-bolsa/atividade-enem.html', key: 'rv-enem',
  title: 'Renda variável e Bolsa no ENEM — Atividade', brand: 'Renda Variável e Bolsa', cls: 'success',
  eyebrow: 'Estilo ENEM · H21 · aulas 43–45',
  h1: 'Renda variável e Bolsa <span style="color:var(--growth);">no ENEM</span>',
  subtitle: 'Dividendos, variações percentuais, custos de corretagem e média ponderada de retornos: o tipo de conta que decide se a carteira realmente ganhou ou perdeu.',
  introT: 'Antes de começar', introP: 'Questões originais no estilo do ENEM, baseadas nas aulas 43 a 45. Fique atento às pegadinhas de porcentagem: variações sucessivas se multiplicam.',
  final: 'Porcentagem sobre porcentagem, custo fixo + variável e médias ponderadas: três ideias que aparecem sempre que se fala de mercado.',
  questions: [
    { badge: 'Estilo ENEM · dividendos', text: 'Um investidor possui <strong>250 cotas</strong> de um fundo imobiliário que paga <strong>R$ 0,90 por cota</strong> todo mês.', cmd: 'Sem reinvestir, o total recebido em <strong>12 meses</strong> é:', opts: ['R$ 225,00', 'R$ 2.250,00', 'R$ 2.700,00', 'R$ 270,00', 'R$ 3.000,00'], a: 2,
      sol: P('Por mês: 250 × 0,90 = R$ 225.') + P('Em 12 meses: 12 × 225 = <strong>R$ 2.700,00</strong>.') + hint('Reinvestindo os dividendos, o valor seria maior (juros compostos na prática).') },
    { badge: 'Estilo ENEM · variações sucessivas', text: 'Uma ação valia <strong>R$ 40,00</strong>. Em uma semana subiu <strong>25%</strong>; na semana seguinte caiu <strong>20%</strong>.', cmd: 'O preço da ação ao final das duas semanas é:', opts: ['R$ 42,00', 'R$ 38,00', 'R$ 40,00', 'R$ 45,00', 'R$ 36,00'], a: 2,
      sol: P('Após a alta: 40 × 1,25 = R$ 50,00.') + P('Após a queda: 50 × 0,80 = <strong>R$ 40,00</strong>.') + hint('Curiosidade: +25% e −20% se anulam (1,25 × 0,80 = 1). Já +20% e −25% dariam 0,90 — uma perda de 10%. A ordem e a base de cálculo importam.') },
    { badge: 'Estilo ENEM · função afim', text: 'Uma corretora cobra, em cada compra de ações, uma <strong>taxa fixa de R$ 5,00</strong> mais <strong>0,3%</strong> do valor da operação.', cmd: 'O custo de uma compra de <strong>R$ 2.000,00</strong> é:', opts: ['R$ 6,00', 'R$ 11,00', 'R$ 605,00', 'R$ 8,00', 'R$ 17,00'], a: 1,
      sol: P('Parte variável: 0,3% de 2.000 = 0,003 × 2.000 = R$ 6,00.') + P('Custo total: 5 + 6 = <strong>R$ 11,00</strong>. Função: C(v) = 5 + 0,003·v.') + hint('Mesma estrutura da corrida de aplicativo: parte fixa + parte variável.') },
    { badge: 'Estilo ENEM · média ponderada', text: 'Uma carteira tem <strong>60%</strong> aplicados em um ativo A, que rendeu <strong>2%</strong> no mês, e <strong>40%</strong> em um ativo B, que teve retorno de <strong>−1%</strong>.', cmd: 'O retorno da carteira no mês foi de:', opts: ['1,0%', '0,8%', '0,5%', '1,5%', '0,6%'], a: 1,
      sol: P('Retorno = 0,60 × 2% + 0,40 × (−1%) = 1,2% − 0,4% = <strong>0,8%</strong>.') + hint('A média simples (2% e −1% → 0,5%) ignoraria os pesos. Diversificar é isso: um ativo amortece o outro.') }
  ]
});

const d = mk({
  out: dir + 'apostas-bets-cassino/atividade-enem.html', key: 'ap-enem',
  title: 'Apostas e probabilidade no ENEM — Atividade', brand: 'Apostas, Bets e Cassino', cls: 'danger',
  eyebrow: 'Estilo ENEM · probabilidade · aulas 35, 42, 47',
  h1: 'A matemática das apostas <span style="color:var(--danger);">no ENEM</span>',
  subtitle: 'Probabilidade, RTP, valor esperado e probabilidade complementar: as contas que mostram, com números, por que a casa sempre sai ganhando.',
  introT: 'Antes de começar', introP: 'Questões originais no estilo do ENEM sobre jogos de aposta. Elas ensinam a reconhecer a vantagem matemática da casa — não a "vencê-la": ela não pode ser vencida no longo prazo.',
  final: 'Em todas as contas, o padrão se repete: as chances reais são minúsculas, o retorno esperado é menor que o que se aposta e o "quase" não conta.',
  questions: [
    { badge: 'Estilo ENEM · probabilidade', text: 'Em uma máquina de caça-níquel virtual há <strong>3 rolos</strong>, e cada um sorteia, de forma independente e equiprovável, um entre <strong>10 símbolos</strong>. O prêmio máximo sai quando os três rolos mostram o símbolo "7".', cmd: 'A probabilidade de ganhar o prêmio máximo em uma única jogada é:', opts: ['0,3%', '1%', '0,1%', '3%', '0,01%'], a: 2,
      sol: P('Há 10 × 10 × 10 = 1.000 resultados possíveis; só um é "7-7-7".') + P('P = 1/1.000 = 0,001 = <strong>0,1%</strong>.') + hint('Cada rolo tem 1/10 de chance de dar "7": (1/10)³ = 1/1.000.') },
    { badge: 'Estilo ENEM · porcentagem (RTP)', text: 'Uma plataforma de apostas recebeu <strong>R$ 50.000</strong> em apostas em uma noite e informa um <strong>RTP de 92%</strong> (percentual devolvido aos jogadores).', cmd: 'O lucro bruto da plataforma nessa noite foi de:', opts: ['R$ 4.000,00', 'R$ 46.000,00', 'R$ 8.000,00', 'R$ 400,00', 'R$ 42.000,00'], a: 0,
      sol: P('Devolvido: 92% de 50.000 = R$ 46.000.') + P('Ficou com a plataforma: 50.000 − 46.000 = <strong>R$ 4.000</strong> (8%).') + hint('Parece pouco, mas se repete em <strong>toda</strong> rodada, de <strong>todos</strong> os jogadores, <strong>todos</strong> os dias.') },
    { badge: 'Estilo ENEM · valor esperado', text: 'Em uma roleta com <strong>37 números</strong> (0 a 36), um jogador aposta <strong>R$ 10</strong> em um único número. Se acertar, a banca paga <strong>R$ 360</strong> no total (os R$ 10 apostados mais o prêmio); se errar, perde a aposta.', cmd: 'Em média, por aposta de R$ 10, o jogador:', opts: ['ganha R$ 0,27', 'perde R$ 0,27', 'perde R$ 10,00', 'não ganha nem perde', 'ganha R$ 350,00'], a: 1,
      sol: P('Retorno esperado = (1/37) · 360 + (36/37) · 0 = 360/37 ≈ R$ 9,73.') + P('Como apostou R$ 10: 9,73 − 10 = <strong>−R$ 0,27</strong> por aposta.') + hint('Uma perda média pequena por aposta, mas certa. Apostando milhares de vezes, o prejuízo é quase determinístico — é o lucro da casa.') },
    { badge: 'Estilo ENEM · probabilidade complementar', text: 'Uma pessoa faz <strong>3 apostas independentes</strong> em um jogo em que cada aposta tem <strong>10% de chance</strong> de ser premiada.', cmd: 'A probabilidade de ser premiada em <strong>pelo menos uma</strong> das três apostas é, aproximadamente:', opts: ['30%', '27,1%', '10%', '33%', '72,9%'], a: 1,
      sol: P('Complementar: não ser premiada em nenhuma = 0,9 · 0,9 · 0,9 = 0,729.') + P('Pelo menos uma: 1 − 0,729 = <strong>0,271 → 27,1%</strong>.') + hint('Somar 10% + 10% + 10% = 30% é a pegadinha: os eventos podem ocorrer juntos. E repare: apostar 3 vezes <strong>não</strong> triplica a chance — mas triplica o gasto.') }
  ]
});

const e = mk({
  out: dir + 'criptoativos/atividade-enem.html', key: 'cr-enem',
  title: 'Criptoativos no ENEM — Atividade', brand: 'Criptoativos', cls: '',
  eyebrow: 'Estilo ENEM · estatística e porcentagem · aulas 48–50',
  h1: 'Criptoativos <span style="color:var(--primary);">no ENEM</span>',
  subtitle: 'Variação percentual, desvio padrão, preço médio e custo de taxas: as ferramentas que o ENEM usa para falar de risco e de dinheiro digital.',
  introT: 'Antes de começar', introP: 'Questões originais no estilo do ENEM, construídas a partir das aulas 48 a 50. O desvio padrão mede a dispersão; a variação percentual sucessiva se multiplica; taxas corroem o lucro.',
  final: 'Risco se mede (desvio padrão), variações se multiplicam e custos descontam do resultado: antes de se empolgar, faça a conta.',
  questions: [
    { badge: 'Estilo ENEM · variação percentual', text: 'Uma criptomoeda valia <strong>R$ 200</strong>, subiu para <strong>R$ 260</strong> e depois caiu para <strong>R$ 195</strong>.', cmd: 'A variação percentual total, do valor inicial até o final, foi de:', opts: ['+30%', '−2,5%', '−25%', '−5%', '0%'], a: 1,
      sol: P('Alta: 200 → 260 = +30%. Queda: 260 → 195 = −25%.') + P('Total: (195 − 200) ÷ 200 = −5 ÷ 200 = <strong>−2,5%</strong>.') + hint('Conferindo pelos fatores: 1,30 × 0,75 = 0,975 → −2,5%. Percentuais sucessivos se multiplicam.') },
    { badge: 'Estilo ENEM · desvio padrão', text: 'Os retornos mensais (em %) de um ativo foram: <strong>2, 4, 4, 4, 5, 5, 7, 9</strong>.', cmd: 'O desvio padrão desses retornos é:', opts: ['1', '2', '4', '5', '3'], a: 1,
      sol: P('Média = (2+4+4+4+5+5+7+9) ÷ 8 = 40 ÷ 8 = 5.') + P('Desvios ao quadrado: 9, 1, 1, 1, 0, 0, 4, 16 → soma 32; variância = 32 ÷ 8 = 4.') + P('Desvio padrão = √4 = <strong>2</strong>.') + hint('Quanto maior o desvio padrão, maior a volatilidade — e o risco.') },
    { badge: 'Estilo ENEM · preço médio (DCA)', text: 'Um investidor compra criptomoedas em dois meses: no primeiro, <strong>R$ 100</strong> a <strong>R$ 5</strong> a unidade; no segundo, <strong>R$ 100</strong> a <strong>R$ 20</strong> a unidade.', cmd: 'O preço médio por unidade, considerando as duas compras, é:', opts: ['R$ 12,50', 'R$ 8,00', 'R$ 10,00', 'R$ 7,50', 'R$ 15,00'], a: 1,
      sol: P('Quantidades: 100 ÷ 5 = 20 unidades e 100 ÷ 20 = 5 unidades → 25 unidades.') + P('Gasto total: R$ 200. Preço médio = 200 ÷ 25 = <strong>R$ 8,00</strong>.') + hint('A média simples dos preços seria R$ 12,50. Comprar um valor fixo todo mês (DCA) compra <strong>mais</strong> quando está barato — o preço médio fica abaixo da média simples.') },
    { badge: 'Estilo ENEM · taxas de corretagem', text: 'Uma corretora cobra <strong>0,5%</strong> sobre o valor de cada compra e <strong>0,5%</strong> sobre o valor de cada venda. Uma pessoa comprou <strong>R$ 2.000</strong> em criptoativos e, depois, vendeu tudo por <strong>R$ 2.200</strong>.', cmd: 'O lucro líquido, descontadas as duas taxas, foi de:', opts: ['R$ 200,00', 'R$ 189,00', 'R$ 179,00', 'R$ 190,00', 'R$ 169,00'], a: 2,
      sol: P('Taxa na compra: 0,5% de 2.000 = R$ 10. Taxa na venda: 0,5% de 2.200 = R$ 11.') + P('Lucro bruto: 2.200 − 2.000 = R$ 200. Líquido: 200 − 10 − 11 = <strong>R$ 179,00</strong>.') + hint('As taxas "comeram" mais de 10% do lucro. Em operações frequentes, os custos pesam ainda mais.') }
  ]
});

module.exports = [a, b, c, d, e];
