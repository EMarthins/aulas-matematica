// 1ª série — atividades "ENEM" (estilo ENEM, originais) — 7 páginas (apostas reaproveita a da 2ª série em a6.js)
const P = t => `<p>${t}</p>`;
const hint = t => `<p class="hint">${t}</p>`;
const dir = 'educacao-financeira/1-ano/3-tri/';
const mk = o => ({ kind: 'enem', ...o });
const intro = 'Questões originais, escritas no formato e no nível do ENEM a partir do conteúdo das aulas. Resolva no caderno e só depois escolha a alternativa — a resolução aparece após a resposta.';

const c1 = mk({
  out: dir + 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-enem.html', key: 'c1-enem',
  title: 'Crédito e juros compostos no ENEM — Atividade', brand: 'Crédito e Juros Compostos', cls: 'danger',
  eyebrow: 'Estilo ENEM · H16 e H22 · aulas 36 e 37', h1: 'Crédito e juros compostos <span style="color:var(--danger);">no ENEM</span>',
  subtitle: 'Juros compostos, dívida que cresce, cheque especial x atraso e prazo com logaritmo: o raciocínio que a prova cobra e que protege o seu bolso.',
  introT: 'Antes de começar', introP: intro, final: 'Juros sobre juros fazem a dívida (e o prazo para ela dobrar) mudarem de ritmo: calcule antes de contratar.',
  questions: [
    { badge: 'Estilo ENEM · juros compostos', text: 'Um capital de <strong>R$ 3.000</strong> é aplicado a juros compostos de <strong>2% ao mês</strong>.', cmd: 'O montante após <strong>2 meses</strong> é:', opts: ['R$ 3.120,00', 'R$ 3.121,20', 'R$ 3.060,00', 'R$ 3.240,00', 'R$ 3.100,00'], a: 1,
      sol: P('M = 3.000 · (1,02)² = 3.000 · 1,0404 = <strong>R$ 3.121,20</strong>.') + hint('Em juros simples seriam R$ 3.120: a diferença de R$ 1,20 são os "juros sobre juros".') },
    { badge: 'Estilo ENEM · dívida no cheque especial', text: 'Uma pessoa ficou com uma dívida de <strong>R$ 500</strong> no cheque especial, que cobra <strong>10% ao mês</strong> (juros compostos), e não pagou nada por <strong>2 meses</strong>.', cmd: 'Ao final dos 2 meses, a dívida é de:', opts: ['R$ 600,00', 'R$ 605,00', 'R$ 550,00', 'R$ 610,00', 'R$ 660,00'], a: 1,
      sol: P('Mês 1: 500 · 1,10 = 550. Mês 2: 550 · 1,10 = <strong>R$ 605,00</strong>.') + hint('Somar 10% + 10% (= 20% → R$ 600) é a pegadinha do juro simples.') },
    { badge: 'Estilo ENEM · atraso x cheque especial', text: 'Para pagar uma conta de <strong>R$ 800</strong>, uma pessoa pode atrasar o pagamento (juros de <strong>1% ao mês</strong>) ou usar o cheque especial (juros de <strong>9% ao mês</strong>). Considere 1 mês.', cmd: 'Usar o cheque especial, em vez de atrasar a conta, custa a mais:', opts: ['R$ 8,00', 'R$ 64,00', 'R$ 72,00', 'R$ 80,00', 'R$ 6,40'], a: 1,
      sol: P('Atraso: 1% de 800 = R$ 8. Cheque especial: 9% de 800 = R$ 72.') + P('Diferença: 72 − 8 = <strong>R$ 64,00</strong>.') + hint('Comparar o custo de cada opção é a base da decisão de crédito: a "mais fácil" nem sempre é a mais barata.') },
    { badge: 'Estilo ENEM · logaritmo e prazo', text: 'Uma dívida cresce <strong>10% ao mês</strong> a juros compostos. Considere log 2 = 0,30 e log 1,1 = 0,04.', cmd: 'O menor número inteiro de meses para a dívida <strong>dobrar</strong> é:', opts: ['5', '6', '7', '8', '10'], a: 3,
      sol: P('2 = (1,1)<sup>n</sup> → log 2 = n · log 1,1 → 0,30 = n · 0,04 → n = <strong>7,5</strong>.') + P('O menor inteiro que garante a duplicação é <strong>8 meses</strong>.') + hint('Em 7 meses ainda não dobrou: (1,1)⁷ ≈ 1,95.') }
  ]
});

const c2 = mk({
  out: dir + 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-enem.html', key: 'c2-enem',
  title: 'Financiamento e prestações no ENEM — Atividade', brand: 'Financiamento e Calculadora Financeira', cls: '',
  eyebrow: 'Estilo ENEM · H3 · aulas 38 e 40', h1: 'Financiamento e prestações <span style="color:var(--primary);">no ENEM</span>',
  subtitle: 'Taxa equivalente, comparação de propostas, total pago e juros de um parcelamento — quatro contas que decidem se o crediário vale a pena.',
  introT: 'Antes de começar', introP: intro, final: 'Comparar o total pago com o preço à vista é a conta que revela o custo real do parcelamento.',
  questions: [
    { badge: 'Estilo ENEM · taxa equivalente', text: 'Uma financeira cobra <strong>10% ao mês</strong> em juros compostos.', cmd: 'A taxa equivalente para um período de <strong>2 meses</strong> é:', opts: ['20%', '21%', '22%', '10,5%', '19%'], a: 1,
      sol: P('1 + i<sub>2</sub> = (1,10)² = 1,21 → i<sub>2</sub> = <strong>21%</strong>.') + hint('Taxas em juros compostos não se somam: 10% + 10% = 20% é o erro clássico.') },
    { badge: 'Estilo ENEM · comparação de propostas', text: 'Um produto custa <strong>R$ 1.000</strong> à vista. A loja A oferece <strong>3 parcelas de R$ 360</strong>, sem entrada. A loja B oferece <strong>entrada de R$ 300 + 2 parcelas de R$ 400</strong>.', cmd: 'A proposta de menor valor total e quanto ela custa a mais que o preço à vista são:', opts: ['A, R$ 80', 'B, R$ 100', 'A, R$ 100', 'B, R$ 80', 'A, R$ 0'], a: 0,
      sol: P('Loja A: 3 × 360 = <strong>R$ 1.080</strong> → R$ 80 a mais que o à vista.') + P('Loja B: 300 + 2 × 400 = <strong>R$ 1.100</strong> → R$ 100 a mais.') + hint('A menor prestação (A, R$ 360) e o menor total coincidiram aqui — mas isso nem sempre acontece: some tudo.') },
    { badge: 'Estilo ENEM · juros do parcelamento', text: 'Uma geladeira custa <strong>R$ 2.500</strong> à vista e pode ser paga em <strong>12 prestações de R$ 220,00</strong>.', cmd: 'O total de juros pagos no parcelamento é:', opts: ['R$ 120,00', 'R$ 140,00', 'R$ 220,00', 'R$ 2.640,00', 'R$ 160,00'], a: 1,
      sol: P('Total pago: 12 × 220 = R$ 2.640. Juros: 2.640 − 2.500 = <strong>R$ 140,00</strong>.') + hint('R$ 2.640 é o total, não os juros: leia o que a pergunta pede.') },
    { badge: 'Estilo ENEM · entrada com carro usado', text: 'Para comprar um carro novo de <strong>R$ 30.000</strong>, um cliente dá o carro usado, avaliado em <strong>R$ 12.000</strong>, como entrada, e financia o restante por um ano com juros de <strong>15%</strong> sobre o valor financiado (modelo da questão).', cmd: 'O valor final do financiamento, em reais, é:', opts: ['18.000', '20.700', '30.000', '22.700', '19.800'], a: 1,
      sol: P('Valor financiado: 30.000 − 12.000 = R$ 18.000.') + P('Com juros: 18.000 × 1,15 = <strong>R$ 20.700</strong>.') + hint('Os juros incidem sobre o que foi <em>financiado</em>, não sobre o preço total do carro.') }
  ]
});

const c3 = mk({
  out: dir + 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-enem.html', key: 'c3-enem',
  title: 'Cartão de crédito e score no ENEM — Atividade', brand: 'Cartão de Crédito e Score', cls: 'danger',
  eyebrow: 'Estilo ENEM · H16 e H20 · aulas 39 e 43', h1: 'Cartão de crédito e score <span style="color:var(--danger);">no ENEM</span>',
  subtitle: 'Pagamento parcial da fatura, relação entre limite e renda, pontuação de score e crescimento de dívida: contas do dia a dia do consumidor.',
  introT: 'Antes de começar', introP: intro, final: 'Pagar só parte da fatura, confundir limite com renda e atrasar contas são os atalhos para a bola de neve.',
  questions: [
    { badge: 'Estilo ENEM · pagamento parcial', text: 'Uma fatura de <strong>R$ 800</strong> é paga apenas em <strong>20%</strong>. O saldo restante recebe <strong>10% de juros</strong> no mês seguinte, e não há novas compras.', cmd: 'A dívida no mês seguinte é de:', opts: ['R$ 640,00', 'R$ 704,00', 'R$ 720,00', 'R$ 784,00', 'R$ 800,00'], a: 1,
      sol: P('Pago: 20% de 800 = R$ 160 → saldo R$ 640.') + P('Com juros: 640 × 1,10 = <strong>R$ 704,00</strong>.') + hint('Os R$ 640 ignoram os juros; os R$ 784 aplicam os juros sobre a fatura inteira, sem descontar o pagamento.') },
    { badge: 'Estilo ENEM · limite x renda', text: 'Uma pessoa recebe <strong>R$ 3.000</strong> por mês e tem cartão com limite de <strong>R$ 6.000</strong>. Em um mês, usa <strong>80% do limite</strong>.', cmd: 'A fatura equivale a quantas vezes a renda mensal?', opts: ['0,8', '1,6', '2,0', '0,6', '1,2'], a: 1,
      sol: P('80% de 6.000 = R$ 4.800.') + P('4.800 ÷ 3.000 = <strong>1,6 vez</strong> a renda.') + hint('Limite não é renda: a fatura passou da renda em 60%.') },
    { badge: 'Estilo ENEM · pontuação (score)', text: 'Um cliente começa com <strong>1.000 pontos</strong>. Perde <strong>20</strong> por um atraso de 15 dias, perde <strong>50</strong> por um atraso de 30 dias e ganha <strong>25</strong> ao renegociar uma dívida com mais de 30 dias.', cmd: 'A pontuação final é:', opts: ['955', '905', '970', '1.005', '945'], a: 0,
      sol: P('1.000 − 20 − 50 + 25 = <strong>955</strong> pontos.') + hint('Tabela didática, como a da aula; os pesos reais do score não são públicos.') },
    { badge: 'Estilo ENEM · crescimento da dívida', text: 'Uma dívida de <strong>R$ 1.000</strong> cresce <strong>12% ao mês</strong> a juros compostos. Considere 1,12³ ≈ 1,4049.', cmd: 'Após 3 meses, a dívida é de, aproximadamente:', opts: ['R$ 1.360,00', 'R$ 1.404,90', 'R$ 1.120,00', 'R$ 1.500,00', 'R$ 1.440,00'], a: 1,
      sol: P('M = 1.000 · (1,12)³ ≈ 1.000 · 1,4049 = <strong>R$ 1.404,90</strong>.') + hint('Juros simples dariam R$ 1.360 (3 × 12% = 36%).') }
  ]
});

const d = mk({
  out: dir + 'direitos-do-consumidor/atividade-enem.html', key: 'dc-enem',
  title: 'Direitos do consumidor no ENEM — Atividade', brand: 'Direitos do Consumidor', cls: '',
  eyebrow: 'Estilo ENEM · H3 · aula 42', h1: 'Consumidor e matemática <span style="color:var(--success);">no ENEM</span>',
  subtitle: 'Preço por unidade, variação percentual, desconto sobre base diferente e comparação de embalagens: a matemática dos direitos do consumidor.',
  introT: 'Antes de começar', introP: intro, final: 'Preço por quilo, percentuais corretos e comparação de embalagens: é assim que você se defende na etiqueta.',
  questions: [
    { badge: 'Estilo ENEM · preço por quilo', text: 'Uma embalagem de <strong>450 g</strong> custa <strong>R$ 6,30</strong>.', cmd: 'O preço por <strong>quilograma</strong> é:', opts: ['R$ 14,00', 'R$ 12,60', 'R$ 7,00', 'R$ 63,00', 'R$ 1,40'], a: 0,
      sol: P('Regra de três: 450 g — 6,30; 1.000 g — x → x = 6,30 · 1.000 ÷ 450 = <strong>R$ 14,00</strong>.') + hint('O CDC garante o direito de ver o preço por unidade de medida: é essa conta que a etiqueta deve trazer.') },
    { badge: 'Estilo ENEM · variação percentual', text: 'Um plano de internet contratado por <strong>R$ 99,00</strong> foi cobrado, na primeira fatura, por <strong>R$ 129,00</strong>.', cmd: 'O aumento percentual em relação ao contratado foi de, aproximadamente:', opts: ['30%', '30,3%', '23,3%', '33,3%', '25%'], a: 1,
      sol: P('Aumento: 129 − 99 = R$ 30. Percentual: 30 ÷ 99 ≈ 0,303 → <strong>30,3%</strong>.') + hint('Os 23,3% (30 ÷ 129) calculam sobre o valor errado: a base é o valor contratado.') },
    { badge: 'Estilo ENEM · acréscimo e desconto', text: 'O preço normal de um produto é <strong>R$ 1.000 mais 10%</strong>. No cartão da loja há um desconto de <strong>5% sobre o preço normal</strong>.', cmd: 'O valor pago no cartão da loja é:', opts: ['R$ 1.050,00', 'R$ 1.045,00', 'R$ 1.005,00', 'R$ 1.095,00', 'R$ 1.100,00'], a: 1,
      sol: P('Preço normal: 1.000 × 1,10 = R$ 1.100. Desconto de 5%: 1.100 × 0,95 = <strong>R$ 1.045,00</strong>.') + hint('+10% e −5% <strong>não</strong> dão +5%: as bases são diferentes (1.000 e 1.100).') },
    { badge: 'Estilo ENEM · comparação de embalagens', text: 'O produto A vem em embalagem de <strong>500 g por R$ 8,00</strong>; o produto B, em <strong>750 g por R$ 11,25</strong>.', cmd: 'Qual compensa mais, e qual o preço por quilo dele?', opts: ['A, R$ 16,00/kg', 'B, R$ 15,00/kg', 'A, R$ 15,00/kg', 'B, R$ 16,00/kg', 'Dão o mesmo preço por kg'], a: 1,
      sol: P('A: 8,00 ÷ 0,5 = R$ 16,00/kg. B: 11,25 ÷ 0,75 = <strong>R$ 15,00/kg</strong>.') + hint('A embalagem maior costuma ser mais barata por quilo, mas confira: nem sempre é.') }
  ]
});

const e1 = mk({
  out: dir + 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-enem.html', key: 'cc1-enem',
  title: 'Armadilhas de consumo no ENEM — Atividade', brand: 'Consumo Consciente', cls: '',
  eyebrow: 'Estilo ENEM · H3 e H4 · aulas 44 e 45', h1: 'Armadilhas de consumo <span style="color:var(--growth);">no ENEM</span>',
  subtitle: 'Promoção "3 por R$ 10", casaco com logotipo, desconto fantasma e à vista x parcelado: matemática para desmontar as armadilhas.',
  introT: 'Antes de começar', introP: intro, final: 'Calcular o custo real, comparar com o preço de referência e perguntar "preciso?" desarma a maioria das armadilhas.',
  questions: [
    { badge: 'Estilo ENEM · promoção "3 por R$ 10"', text: 'Um supermercado anuncia: <strong>"3 por R$ 10"</strong>. O preço normal de cada unidade é <strong>R$ 3,50</strong>. Uma pessoa só precisava de <strong>1 unidade</strong>, mas levou as 3 "para aproveitar".', cmd: 'Ela gastou, a mais do que gastaria comprando só 1 unidade:', opts: ['R$ 0,50', 'R$ 6,50', 'R$ 3,50', 'R$ 10,00', 'R$ 7,00'], a: 1,
      sol: P('Gasto com a promoção: R$ 10,00. Gasto necessário: R$ 3,50.') + P('Diferença: 10 − 3,50 = <strong>R$ 6,50</strong>.') + hint('Mesmo com desconto por unidade (R$ 3,33), levar o que não precisa é gastar mais. Os R$ 0,50 são a economia só <em>se</em> ela fosse comprar as 3.') },
    { badge: 'Estilo ENEM · consumo x consumismo', text: 'Dois casacos têm o mesmo tecido e aquecem igual: um custa <strong>R$ 100</strong>, sem marca; o outro, <strong>R$ 500</strong>, com logotipo famoso.', cmd: 'O casaco com logotipo custa, em relação ao outro, quantos por cento a mais?', opts: ['80%', '400%', '500%', '25%', '100%'], a: 1,
      sol: P('Diferença: 500 − 100 = R$ 400. Percentual sobre o de R$ 100: 400 ÷ 100 = <strong>400%</strong>.') + hint('Os 80% representam quanto do preço de R$ 500 vai só para a marca (400 ÷ 500): outra leitura do mesmo dado.') },
    { badge: 'Estilo ENEM · desconto fantasma', text: 'Um produto custava <strong>R$ 200</strong>. A loja aumentou o preço para <strong>R$ 300</strong> e, depois, anunciou "<strong>30% de desconto</strong>".', cmd: 'Em relação ao preço original de R$ 200, o preço anunciado é:', opts: ['30% menor', 'igual', '5% maior', '10% maior', '30% maior'], a: 2,
      sol: P('30% de desconto sobre 300: 300 × 0,70 = R$ 210.') + P('210 ÷ 200 = 1,05 → <strong>5% maior</strong> que o original.') + hint('O "desconto" apagou o aumento só em parte: o produto ficou mais caro que antes. Compare com o histórico de preços!') },
    { badge: 'Estilo ENEM · à vista x parcelado', text: 'Um item pode ser pago em <strong>6 parcelas de R$ 50</strong> ou <strong>à vista por R$ 270</strong>.', cmd: 'O desconto percentual para pagar à vista é:', opts: ['5%', '10%', '15%', '30%', '20%'], a: 1,
      sol: P('Parcelado: 6 × 50 = R$ 300. À vista: R$ 270. Desconto: 30 ÷ 300 = 0,10 → <strong>10%</strong>.') + hint('O "sem juros" do parcelado pode embutir o desconto não dado à vista: o parcelado custa 11% mais que o à vista.') }
  ]
});

const e2 = mk({
  out: dir + 'consumo-consciente/aula-2-supermercado-promocoes-atividade-enem.html', key: 'cc2-enem',
  title: 'Supermercado e promoções no ENEM — Atividade', brand: 'Compras e Promoções', cls: '',
  eyebrow: 'Estilo ENEM · H4 · aulas 46 e 47', h1: 'Supermercado e promoções <span style="color:var(--success);">no ENEM</span>',
  subtitle: 'Percentuais sucessivos, "compre 2, leve 3", desperdício e preço-alvo: razoabilidade dos resultados numéricos (H4).',
  introT: 'Antes de começar', introP: intro, final: 'Percentuais sobre bases diferentes e preços de referência decidem se a promoção é de verdade.',
  questions: [
    { badge: 'Estilo ENEM · percentuais sucessivos', text: 'Um produto sofreu <strong>aumento de 20%</strong> e, depois, <strong>desconto de 20%</strong>.', cmd: 'Em relação ao preço inicial, o preço final ficou:', opts: ['igual', '4% menor', '4% maior', '2% menor', '20% menor'], a: 1,
      sol: P('Fator: 1,20 × 0,80 = 0,96 → <strong>4% menor</strong>.') + hint('Os 20% de cada etapa incidem sobre bases diferentes: não se anulam.') },
    { badge: 'Estilo ENEM · "compre 2, leve 3"', text: 'Uma promoção diz: "<strong>compre 2, leve 3</strong>", com cada unidade a <strong>R$ 40</strong> (pague R$ 80 e leve 3).', cmd: 'O desconto percentual em relação a pagar as 3 unidades ao preço normal é de, aproximadamente:', opts: ['20%', '25%', '33,3%', '40%', '50%'], a: 2,
      sol: P('Normal: 3 × 40 = R$ 120. Promoção: R$ 80.') + P('Desconto: 40 ÷ 120 ≈ <strong>33,3%</strong> — uma unidade grátis em três.') + hint('Só vale a pena se você realmente usaria as 3 unidades — senão é a armadilha do "chuveiro extra".') },
    { badge: 'Estilo ENEM · desperdício', text: 'Uma família gasta <strong>R$ 800</strong> por mês em alimentos e desperdiça <strong>15%</strong> do que compra.', cmd: 'O desperdício em <strong>um ano</strong>, em reais, é:', opts: ['120', '1.440', '960', '12.000', '144'], a: 1,
      sol: P('Por mês: 15% de 800 = R$ 120. Em 12 meses: 12 × 120 = <strong>R$ 1.440</strong>.') + hint('R$ 120 é o desperdício de um mês; a pergunta pede o ano.') },
    { badge: 'Estilo ENEM · preço-alvo', text: 'Um produto custa hoje <strong>R$ 500</strong>; o menor preço dos últimos 40 dias foi <strong>R$ 400</strong>. Para a Black Friday, o consumidor define o preço-alvo como a <strong>média</strong> entre os preços com <strong>20% de desconto</strong> sobre o preço atual e sobre o menor preço.', cmd: 'O preço-alvo, em reais, é:', opts: ['320', '360', '400', '380', '340'], a: 1,
      sol: P('20% de desconto sobre 500: R$ 400. Sobre 400: R$ 320.') + P('Média: (400 + 320) ÷ 2 = <strong>R$ 360</strong>.') + hint('Pesquisar o histórico é o que dá base para dizer se a "promoção" é mesmo vantajosa.') }
  ]
});

const f = mk({
  out: dir + 'perfil-empreendedor/atividade-enem.html', key: 'em-enem',
  title: 'Empreendedorismo no ENEM — Atividade', brand: 'Perfil Empreendedor', cls: '',
  eyebrow: 'Estilo ENEM · H3 · aula 48', h1: 'Números do empreendedor <span style="color:var(--growth);">no ENEM</span>',
  subtitle: 'Ponto de equilíbrio, lucro, margem e prazo de retorno: a matemática de quem transforma ideia em negócio.',
  introT: 'Antes de começar', introP: intro, final: 'Antes de empreender, a conta do ponto de equilíbrio e do retorno mostra se a ideia fica de pé.',
  questions: [
    { badge: 'Estilo ENEM · ponto de equilíbrio', text: 'Um empreendedor vende sanduíches a <strong>R$ 10</strong> cada. O custo variável é de <strong>R$ 4</strong> por sanduíche e o custo fixo mensal é de <strong>R$ 600</strong>.', cmd: 'Quantos sanduíches precisa vender por mês para <strong>cobrir os custos</strong> (lucro zero)?', opts: ['60', '100', '150', '200', '600'], a: 1,
      sol: P('Margem por unidade: 10 − 4 = R$ 6.') + P('Ponto de equilíbrio: 600 ÷ 6 = <strong>100 sanduíches</strong>.') + hint('Vender menos que isso dá prejuízo; a partir daí, cada sanduíche gera R$ 6 de lucro.') },
    { badge: 'Estilo ENEM · lucro', text: 'No mês seguinte, o mesmo empreendedor vendeu <strong>250 sanduíches</strong> (mesmos preços e custos).', cmd: 'O lucro do mês foi de:', opts: ['R$ 900,00', 'R$ 1.900,00', 'R$ 1.500,00', 'R$ 600,00', 'R$ 2.500,00'], a: 0,
      sol: P('Receita: 250 × 10 = 2.500. Custo variável: 250 × 4 = 1.000. Custo fixo: 600.') + P('Lucro: 2.500 − 1.000 − 600 = <strong>R$ 900,00</strong>.') + hint('Os R$ 1.500 são a receita menos só o custo variável: faltou descontar o custo fixo.') },
    { badge: 'Estilo ENEM · margem', text: 'Cada sanduíche é vendido a <strong>R$ 10</strong> e tem custo variável de <strong>R$ 4</strong>.', cmd: 'A margem de contribuição, em percentual do preço de venda, é:', opts: ['40%', '60%', '150%', '6%', '25%'], a: 1,
      sol: P('Margem: 10 − 4 = R$ 6. Percentual: 6 ÷ 10 = <strong>60%</strong>.') + hint('Os 150% seriam o lucro sobre o custo (6 ÷ 4): outra medida; aqui a base é o preço de venda.') },
    { badge: 'Estilo ENEM · prazo de retorno', text: 'Para abrir uma barraca, um empreendedor investe <strong>R$ 3.000</strong> e espera um retorno líquido de <strong>R$ 500 por mês</strong>.', cmd: 'Em quantos meses o investimento será recuperado?', opts: ['5', '6', '7', '8', '10'], a: 1,
      sol: P('3.000 ÷ 500 = <strong>6 meses</strong>.') + hint('Esse prazo de retorno é o "payback": quanto menor, menor o risco de perder o dinheiro investido.') }
  ]
});

module.exports = [c1, c2, c3, d, e1, e2, f];
