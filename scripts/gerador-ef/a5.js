// 1ª série — atividades "Prática" (trilhas de problemas numéricos) — 7 páginas
const R = v => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const N = (v, d = 2) => v.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
const P = t => `<p>${t}</p>`;
const dir = 'educacao-financeira/1-ano/3-tri/';
const pmt = (pv, i, n) => pv * i / (1 - Math.pow(1 + i, -n));
const pvf = (p, i, n) => p * (1 - Math.pow(1 + i, -n)) / i;
const mk = o => ({ kind: 'trilha', ...o });
const pr = (tag, q, a, tol, unit, hint, sol) => ({ tag, q, a, tol, unit, hint, sol });

const t1 = mk({
  out: dir + 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-pratica.html', key: 'c1-pratica',
  title: 'Prática: a bola de neve da dívida — Trilha', brand: 'Crédito e Juros Compostos', cls: 'danger',
  eyebrow: 'Prática progressiva · aulas 36 e 37', h1: 'A bola de neve <span style="color:var(--danger);">da dívida</span>',
  subtitle: 'Seis etapas sobre juros compostos, taxa diária, cheque especial e prazo para a dívida dobrar. Duas tentativas por etapa.',
  final: 'Juros compostos, taxas equivalentes e comparação de custos: a base para decidir antes de usar crédito.',
  problems: [
    pr('Juros compostos', '<strong>R$ 2.000</strong> a <strong>3% ao mês</strong>, juros compostos, por <strong>4 meses</strong>. Qual o montante, em reais?', 2000 * 1.03 ** 4, 0.05, 'R$', 'M = C · (1 + i)ⁿ = 2.000 · 1,03⁴.', P(`1,03⁴ ≈ 1,12551 → <strong>${R(2000 * 1.03 ** 4)}</strong>.`)),
    pr('Taxa diária', 'A taxa do cheque especial é <strong>9,78% ao mês</strong>. Qual a taxa equivalente <strong>diária</strong>, em % (duas casas decimais)? Use mês de 30 dias.', (Math.pow(1.0978, 1 / 30) - 1) * 100, 0.006, '% ao dia', 'i<sub>d</sub> = (1 + 0,0978)<sup>1/30</sup> − 1.', P(`(1,0978)<sup>1/30</sup> − 1 ≈ <strong>${N((Math.pow(1.0978, 1 / 30) - 1) * 100, 4)}%</strong> ao dia (≈ 0,31%).`)),
    pr('Cheque especial', 'Você usou <strong>R$ 1.000</strong> do cheque especial por <strong>20 dias</strong>, com taxa de <strong>0,31% ao dia</strong>. Qual o valor da dívida, em reais?', 1000 * 1.0031 ** 20, 0.1, 'R$', 'FV = 1.000 · (1,0031)²⁰.', P(`1,0031²⁰ ≈ 1,06386 → <strong>${R(1000 * 1.0031 ** 20)}</strong>.`)),
    pr('Comparando custos', 'Pagar as mesmas contas em atraso custaria <strong>R$ 15,75</strong> de juros. Quanto <strong>a mais</strong> custou o cheque especial da etapa anterior (juros do cheque − R$ 15,75), em reais?', 1000 * 1.0031 ** 20 - 1000 - 15.75, 0.1, 'R$', 'Juros do cheque = dívida − 1.000. Depois subtraia 15,75.', P(`Juros do cheque: ${R(1000 * 1.0031 ** 20 - 1000)}; menos 15,75 = <strong>${R(1000 * 1.0031 ** 20 - 1000 - 15.75)}</strong> a mais.`)),
    pr('Cartão de crédito', 'Uma compra de <strong>R$ 800</strong> no cartão, sem pagar nada por <strong>4 meses</strong>, com juros de <strong>16% ao mês</strong>. Qual a dívida, em reais?', 800 * 1.16 ** 4, 0.1, 'R$', '800 · (1,16)⁴; 1,16⁴ ≈ 1,81064.', P(`800 · 1,81064 ≈ <strong>${R(800 * 1.16 ** 4)}</strong> — quase o dobro.`)),
    pr('Logaritmo', 'Com 16% ao mês, em quantos <strong>meses inteiros</strong> uma dívida dobra? (log 2 = 0,30 e log 1,16 = 0,064)', 5, 0.01, 'meses', '2 = 1,16ⁿ → n = 0,30 ÷ 0,064 ≈ 4,7 → arredonde para cima.', P('n = 0,30 ÷ 0,064 ≈ 4,69 → <strong>5 meses</strong> (em 4 ainda não dobrou: 1,16⁴ ≈ 1,81).'))
  ]
});

const t2 = mk({
  out: dir + 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-pratica.html', key: 'c2-pratica',
  title: 'Prática: parcelas e taxas — Trilha', brand: 'Financiamento e Calculadora Financeira', cls: '',
  eyebrow: 'Prática progressiva · aulas 38 e 40', h1: 'Parcelas, taxas e <span style="color:var(--primary);">prazos</span>',
  subtitle: 'Seis etapas: taxas equivalentes, prestação, total pago, preço à vista e prazo. Pode conferir no simulador da aula. Duas tentativas por etapa.',
  final: 'Taxa equivalente, prestação, preço à vista e prazo: as quatro faces da mesma fórmula do financiamento.',
  problems: [
    pr('Taxa equivalente', 'Qual a taxa mensal equivalente a <strong>12% ao ano</strong>, em juros compostos? (em %, quatro casas decimais)', (Math.pow(1.12, 1 / 12) - 1) * 100, 0.0006, '% ao mês', '(1,12)<sup>1/12</sup> − 1; use a tecla xʸ com expoente 1 ÷ 12.', P(`(1,12)<sup>1/12</sup> − 1 ≈ <strong>${N((Math.pow(1.12, 1 / 12) - 1) * 100, 4)}%</strong> ao mês.`)),
    pr('Taxa anual', 'Qual a taxa <strong>anual</strong> equivalente a <strong>1% ao mês</strong>? (em %, duas casas decimais)', (Math.pow(1.01, 12) - 1) * 100, 0.006, '% ao ano', '(1,01)¹² − 1.', P(`1,01¹² ≈ 1,126825 → <strong>${N((Math.pow(1.01, 12) - 1) * 100)}%</strong> ao ano (e não 12%!).`)),
    pr('Prestação', 'Um empréstimo de <strong>R$ 3.000</strong> a <strong>1% ao mês</strong> em <strong>12 prestações</strong>. Qual a prestação, em reais?', pmt(3000, 0.01, 12), 0.05, 'R$', 'PMT = PV · i ÷ [1 − (1 + i)<sup>−n</sup>]; (1,01)<sup>−12</sup> ≈ 0,887449.', P(`3.000 · 0,01 ÷ (1 − 0,887449) ≈ <strong>${R(pmt(3000, 0.01, 12))}</strong>.`)),
    pr('Juros pagos', 'Quanto o cliente paga de <strong>juros</strong> no total (prestações − R$ 3.000), em reais?', pmt(3000, 0.01, 12) * 12 - 3000, 0.5, 'R$', 'Total = 12 × prestação.', P(`12 × ${N(pmt(3000, 0.01, 12))} − 3.000 ≈ <strong>${R(pmt(3000, 0.01, 12) * 12 - 3000)}</strong>.`)),
    pr('Preço à vista', 'Um celular é vendido em <strong>6 parcelas de R$ 300</strong> com juros de <strong>2% ao mês</strong>. Qual o preço à vista, em reais?', pvf(300, 0.02, 6), 0.1, 'R$', 'PV = PMT · [1 − (1 + i)<sup>−n</sup>] ÷ i; 1,02<sup>−6</sup> ≈ 0,887971.', P(`300 · (1 − 0,887971) ÷ 0,02 ≈ <strong>${R(pvf(300, 0.02, 6))}</strong>; o cliente paga R$ 1.800 no total.`)),
    pr('Prazo', 'Uma geladeira de <strong>R$ 2.000</strong> será paga com prestações de <strong>R$ 250</strong> e juros de <strong>1,5% ao mês</strong>. Quantas prestações (inteiro, arredondando para cima)?', Math.ceil(-Math.log(1 - 2000 * 0.015 / 250) / Math.log(1.015)), 0.01, 'prestações', 'n = −ln(1 − PV·i ÷ PMT) ÷ ln(1 + i); ou use o simulador da aula.', P(`n ≈ ${N(-Math.log(1 - 2000 * 0.015 / 250) / Math.log(1.015))} → <strong>${Math.ceil(-Math.log(1 - 2000 * 0.015 / 250) / Math.log(1.015))} prestações</strong>.`))
  ]
});

const t3 = mk({
  out: dir + 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-pratica.html', key: 'c3-pratica',
  title: 'Prática: fatura, limite e score — Trilha', brand: 'Cartão de Crédito e Score', cls: 'danger',
  eyebrow: 'Prática progressiva · aulas 39 e 43', h1: 'Fatura, limite e <span style="color:var(--danger);">score</span>',
  subtitle: 'Seis etapas: fatura paga só em parte, relação limite/renda, score, juros do rotativo, teto de 100% e parcelamento. Duas tentativas por etapa.',
  final: 'Pagar a fatura inteira, respeitar a renda e cuidar do score: o tripé do cartão sem dor de cabeça.',
  problems: [
    pr('Pagando o mínimo', 'Fatura de <strong>R$ 1.000</strong>. Você paga <strong>20%</strong> todo mês e o saldo recebe <strong>10% de juros</strong>. Qual a dívida após <strong>2 meses</strong>? (como na questão do ENEM 2013 PPL)', ((1000 - 200) * 1.1 - 0.2 * ((1000 - 200) * 1.1)) * 1.1, 0.01, 'R$', 'Mês 1: saldo 800 → × 1,1 = 880. Pague 20% (176) → 704. Mês 2: 704 × 1,1.', P('800 → 880 → paga 176 → 704 → 704 × 1,1 = <strong>R$ 774,40</strong>.')),
    pr('Limite x renda', 'Limite de <strong>R$ 5.000</strong> e renda de <strong>R$ 2.000</strong>. O limite é quantas vezes a renda?', 2.5, 0.01, 'vezes', 'Divida o limite pela renda.', P('5.000 ÷ 2.000 = <strong>2,5 vezes</strong> — mas só a renda paga a fatura.')),
    pr('Score', 'Score inicial 1.000. Um atraso de 30 dias (−50), um de 7 dias (−20), outro de 3 dias (−5) e uma renegociação de 20 dias (+15). Qual o score final?', 1000 - 50 - 20 - 5 + 15, 0.01, 'pontos', '1.000 − 50 − 20 − 5 + 15.', P('1.000 − 50 − 20 − 5 + 15 = <strong>940</strong> pontos (faixa excelente, 701–1.000).')),
    pr('Rotativo', 'Saldo de <strong>R$ 1.200</strong> não pago, juros de <strong>16% ao mês</strong>. Qual o valor dos juros do mês, em reais?', 192, 0.01, 'R$', '16% de 1.200.', P('0,16 × 1.200 = <strong>R$ 192,00</strong>.')),
    pr('Teto de 100%', 'Pela regra de 2024, juros e encargos do rotativo não podem exceder <strong>100%</strong> do valor original. Para uma dívida original de <strong>R$ 1.000</strong>, qual o valor <strong>total máximo</strong> a pagar (dívida + encargos), em reais?', 2000, 0.01, 'R$', 'Dívida mais, no máximo, outros 100% dela.', P('1.000 + 100% de 1.000 = <strong>R$ 2.000,00</strong>.')),
    pr('Parcelando', 'Uma compra de <strong>R$ 1.200</strong> será parcelada em <strong>4 vezes</strong> com juros de <strong>3% ao mês</strong>. Qual a parcela, em reais?', pmt(1200, 0.03, 4), 0.05, 'R$', 'PMT = PV · i ÷ [1 − (1 + i)<sup>−n</sup>].', P(`1.200 · 0,03 ÷ (1 − 1,03<sup>−4</sup>) ≈ <strong>${R(pmt(1200, 0.03, 4))}</strong>. Sem juros seria R$ 300.`))
  ]
});

const t4 = mk({
  out: dir + 'direitos-do-consumidor/atividade-pratica.html', key: 'dc-pratica',
  title: 'Prática: contas do consumidor — Trilha', brand: 'Direitos do Consumidor', cls: '',
  eyebrow: 'Prática progressiva · aula 42', h1: 'Contas de quem <span style="color:var(--success);">conhece seus direitos</span>',
  subtitle: 'Seis etapas: preço por quilo, aumento percentual, multa abusiva, percentuais sucessivos, reputação e desconto. Duas tentativas por etapa.',
  final: 'Etiqueta, fatura, multa e reputação: matemática é uma ferramenta de defesa do consumidor.',
  problems: [
    pr('Preço por kg', 'Um produto de <strong>380 g</strong> custa <strong>R$ 5,70</strong>. Qual o preço por <strong>kg</strong>, em reais?', 15, 0.01, 'R$/kg', 'Regra de três: 380 g — 5,70; 1.000 g — x.', P('5,70 ÷ 0,38 = <strong>R$ 15,00/kg</strong>.')),
    pr('Aumento', 'Um plano contratado por <strong>R$ 99</strong> chegou a <strong>R$ 129</strong>. Qual o aumento percentual, em % (uma casa decimal)?', (129 / 99 - 1) * 100, 0.06, '%', '(129 − 99) ÷ 99 × 100.', P(`30 ÷ 99 ≈ <strong>${N((129 / 99 - 1) * 100, 1)}%</strong>.`)),
    pr('Multa da comanda', 'A multa de extravio da comanda é de <strong>R$ 200</strong> e o consumo médio é de <strong>R$ 45</strong>. A multa equivale a quantas vezes o consumo? (duas casas)', 200 / 45, 0.006, 'vezes', 'Divida 200 por 45.', P(`200 ÷ 45 ≈ <strong>${N(200 / 45)} vezes</strong> — vantagem manifestamente excessiva (art. 39, V, do CDC).`)),
    pr('+10% −2%', 'Uma geladeira de <strong>R$ 1.000</strong> sobe <strong>10%</strong> e, no cartão da loja, tem <strong>2% de desconto</strong>. Qual o preço, em reais?', 1078, 0.01, 'R$', '1.000 × 1,10 × 0,98.', P('1.100 − 2% (R$ 22) = <strong>R$ 1.078,00</strong> (e não 1.080).')),
    pr('Reputação', 'Uma empresa recebeu <strong>2.500</strong> reclamações; <strong>86%</strong> foram solucionadas. Quantas <strong>não foram</strong> solucionadas?', 350, 0.01, 'reclamações', '14% de 2.500.', P('0,14 × 2.500 = <strong>350 reclamações</strong>.')),
    pr('Desconto', 'Um item de <strong>R$ 250</strong> tem <strong>12% de desconto</strong>. Qual o preço final, em reais?', 220, 0.01, 'R$', '250 × 0,88.', P('250 × 0,88 = <strong>R$ 220,00</strong>.'))
  ]
});

const t5 = mk({
  out: dir + 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-pratica.html', key: 'cc1-pratica',
  title: 'Prática: as contas por trás das armadilhas — Trilha', brand: 'Consumo Consciente', cls: '',
  eyebrow: 'Prática progressiva · aulas 44 e 45', h1: 'As contas por trás das <span style="color:var(--growth);">armadilhas</span>',
  subtitle: 'Seis etapas: preço psicológico, marca, desconto fantasma, economia, alternativas e impulso acumulado. Duas tentativas por etapa.',
  final: 'Pequenas diferenças repetidas e percentuais mal lidos custam caro: faça a conta antes de comprar.',
  problems: [
    pr('Fator 9', 'Você faz <strong>20 compras</strong> por mês de itens a <strong>R$ 49,99</strong>. Qual a diferença total, em reais, entre pagar R$ 50,00 e R$ 49,99 nessas 20 compras?', 0.2, 0.001, 'R$', '(50 − 49,99) × 20.', P('0,01 × 20 = <strong>R$ 0,20</strong>. A ilusão é de "49 reais": o efeito psicológico é muito maior que o ganho real.')),
    pr('Marca', 'Casaco sem marca: R$ 100; com logotipo: R$ 500. Que percentual do preço de R$ 500 é só pelo logotipo?', 80, 0.01, '%', '(500 − 100) ÷ 500 × 100.', P('400 ÷ 500 = <strong>80%</strong> do preço.')),
    pr('Desconto fantasma', 'Preço de <strong>R$ 200</strong> subiu para <strong>R$ 300</strong> e depois recebeu <strong>30% de desconto</strong>. Qual o preço anunciado, em reais?', 210, 0.01, 'R$', '300 × 0,70.', P('300 × 0,70 = <strong>R$ 210,00</strong> — mais caro que os R$ 200 originais.')),
    pr('Variação real', 'Em relação aos R$ 200 originais, o preço de R$ 210 é quantos % maior?', 5, 0.01, '%', '(210 − 200) ÷ 200 × 100.', P('10 ÷ 200 = <strong>5%</strong> maior.')),
    pr('Alugar x comprar', 'Figurino novo: <strong>R$ 300</strong>; alugado: <strong>R$ 80</strong>. Qual a economia ao alugar, em % do preço novo? (duas casas)', (300 - 80) / 300 * 100, 0.006, '%', '(300 − 80) ÷ 300 × 100.', P(`220 ÷ 300 ≈ <strong>${N(220 / 3)}%</strong> de economia.`)),
    pr('Impulso acumulado', 'Se você gasta <strong>R$ 45</strong> por semana, <strong>3 vezes</strong>, em compras por impulso, quanto são em <strong>52 semanas</strong>, em reais?', 45 * 3 * 52, 0.01, 'R$', '45 × 3 × 52.', P('45 × 3 = 135 por semana; × 52 = <strong>R$ 7.020,00</strong> por ano — um bom começo de reserva de emergência!'))
  ]
});

const t6 = mk({
  out: dir + 'consumo-consciente/aula-2-supermercado-promocoes-atividade-pratica.html', key: 'cc2-pratica',
  title: 'Prática: promoção de verdade? — Trilha', brand: 'Compras e Promoções', cls: '',
  eyebrow: 'Prática progressiva · aulas 46 e 47', h1: 'Promoção <span style="color:var(--success);">de verdade?</span>',
  subtitle: 'Seis etapas: desperdício, percentuais, kit, ágio, preço-alvo e teto de gasto. Duas tentativas por etapa.',
  final: 'Desperdício, percentuais e histórico de preços: as três chaves para comprar bem.',
  problems: [
    pr('Desperdício do pão', 'Pacote de <strong>R$ 8,33</strong> com <strong>20 fatias</strong>; joga fora <strong>2</strong> por dia. Qual o desperdício em <strong>30 dias</strong>, em reais (aceite aproximação de até R$ 0,25)?', 8.33 / 20 * 2 * 30, 0.25, 'R$', 'Custo da fatia × 2 × 30.', P(`8,33 ÷ 20 ≈ 0,42 por fatia; × 2 × 30 ≈ <strong>R$ 25,00</strong> (25,20 com a fatia arredondada).`)),
    pr('+10% −2%', 'Geladeira de R$ 1.000: preço normal +10%; no cartão, −2% sobre o normal. Quanto ela custa no cartão, em reais?', 1078, 0.01, 'R$', '1.100 × 0,98.', P('<strong>R$ 1.078,00</strong>: percentuais de bases diferentes não se subtraem.')),
    pr('Kit', 'Chuveiro: R$ 116,90 cada. O kit "compre 2, leve 3" custa R$ 285,95. Quanto o kit custa <strong>a mais</strong> que o preço de duas unidades, em reais?', 285.95 - 2 * 116.9, 0.01, 'R$', '285,95 − 2 × 116,90.', P(`2 × 116,90 = 233,80; diferença: <strong>${R(285.95 - 233.8)}</strong>. A promoção não é o que anuncia.`)),
    pr('Ágio da TV', 'Smart TV "em promoção" por <strong>R$ 1.271</strong>; o preço médio atual é <strong>R$ 853</strong>. A "promoção" está quantos % acima do preço médio? (uma casa)', (1271 / 853 - 1) * 100, 0.06, '%', '(1.271 ÷ 853 − 1) × 100.', P(`1.271 ÷ 853 ≈ 1,49 → <strong>${N((1271 / 853 - 1) * 100, 1)}%</strong> acima.`)),
    pr('Preço-alvo', 'Preço atual R$ 418, menor preço R$ 360. Preço-alvo = média entre 20% de desconto sobre cada um. Qual o valor, em reais?', 311.2, 0.01, 'R$', '20% de desconto: 288 e 334,40. Média dos dois.', P('(288 + 334,40) ÷ 2 = <strong>R$ 311,20</strong>.')),
    pr('Teto de gasto', 'Teto semanal de <strong>R$ 280</strong>; lista de <strong>R$ 231</strong>; impulso de <strong>R$ 62</strong> no caminho. Quanto passou do teto, em reais?', 231 + 62 - 280, 0.01, 'R$', '(231 + 62) − 280.', P('293 − 280 = <strong>R$ 13,00</strong> acima do teto: tire um item ou substitua.'))
  ]
});

const t7 = mk({
  out: dir + 'perfil-empreendedor/atividade-pratica.html', key: 'em-pratica',
  title: 'Prática: contas da barraca — Trilha', brand: 'Perfil Empreendedor', cls: '',
  eyebrow: 'Prática progressiva · aula 48', h1: 'As contas da <span style="color:var(--growth);">barraca</span>',
  subtitle: 'Seis etapas: custo, ponto de equilíbrio, lucro, preço, margem e retorno de uma barraca de sanduíches. Duas tentativas por etapa.',
  final: 'Custos, equilíbrio, margem e retorno: antes de abrir, o empreendedor faz a conta.',
  problems: [
    pr('Custo variável', 'Um sanduíche leva R$ 1,50 de pão, R$ 1,80 de recheio e R$ 0,70 de embalagem. Qual o custo variável por sanduíche, em reais?', 4, 0.01, 'R$', 'Some os três itens.', P('1,50 + 1,80 + 0,70 = <strong>R$ 4,00</strong>.')),
    pr('Ponto de equilíbrio', 'Preço R$ 10, custo variável R$ 4, custo fixo mensal R$ 600. Quantos sanduíches para o lucro ser zero?', 100, 0.01, 'unidades', 'Custo fixo ÷ (preço − custo variável).', P('600 ÷ 6 = <strong>100 unidades</strong>.')),
    pr('Lucro', 'Vendendo <strong>250</strong> sanduíches no mês, qual o lucro, em reais?', 250 * 6 - 600, 0.01, 'R$', '250 × 6 − 600.', P('250 × 6 = 1.500 − 600 = <strong>R$ 900,00</strong>.')),
    pr('Preço para a margem', 'Para ter <strong>margem de 50%</strong> sobre o preço (lucro por unidade = 50% do preço), com custo variável de R$ 4, qual deve ser o preço, em reais?', 8, 0.01, 'R$', 'preço − 4 = 0,50 × preço.', P('p − 4 = 0,5p → 0,5p = 4 → <strong>p = R$ 8,00</strong>.')),
    pr('Retorno', 'Você investiu <strong>R$ 3.000</strong> e lucra <strong>R$ 500 por mês</strong>. Em quantos meses recupera o investimento?', 6, 0.01, 'meses', 'Investimento ÷ lucro mensal.', P('3.000 ÷ 500 = <strong>6 meses</strong>.')),
    pr('Sócios', 'O lucro de R$ 900 será dividido igualmente entre <strong>3 sócios</strong>. Quanto recebe cada um, em reais?', 300, 0.01, 'R$', '900 ÷ 3.', P('<strong>R$ 300,00</strong> para cada um. Combinar a divisão antes evita brigas depois.'))
  ]
});

module.exports = [t1, t2, t3, t4, t5, t6, t7];
