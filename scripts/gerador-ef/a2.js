// Atividades "Prática" (5) — trilhas de problemas com resposta numérica, dicas e 2 tentativas
const R = v => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const N = (v, d = 2) => v.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
const P = t => `<p>${t}</p>`;
const dir = 'educacao-financeira/2-ano/3-tri/';
const fv = (a, i, n) => a * (Math.pow(1 + i, n) - 1) / i;
const mk = o => ({ kind: 'trilha', ...o });

const t1 = mk({
  out: dir + 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-pratica.html', key: 'inv1-pratica',
  title: 'Prática: do colchão à LCI — Trilha de problemas', brand: 'Investimentos e Renda Fixa', cls: '',
  eyebrow: 'Prática progressiva · aulas 36–38', h1: 'Do colchão <span style="color:var(--primary);">à LCI</span>',
  subtitle: 'Seis etapas, da inflação ao juro composto. Resolva no caderno, digite o resultado e use a dica se travar — você tem duas tentativas por etapa.',
  final: 'Você percorreu a trilha inteira: inflação, imposto, comparação líquida, juros e reserva de emergência.',
  problems: [
    { tag: 'Inflação', q: 'Você guardou <strong>R$ 500</strong> em casa por um ano em que a inflação foi de <strong>8%</strong>. Quanto esse dinheiro vale em poder de compra de hoje (em reais)?', a: 500 / 1.08, tol: 0.05, unit: 'R$', hint: 'Poder de compra = valor ÷ (1 + inflação). Divida por 1,08.', sol: P(`500 ÷ 1,08 ≈ <strong>${R(500 / 1.08)}</strong>. O dinheiro parado perdeu cerca de R$ ${N(500 - 500 / 1.08)}.`) },
    { tag: 'Imposto', q: 'Um CDB rendeu <strong>R$ 300</strong> de lucro bruto. O Imposto de Renda é de <strong>20%</strong> sobre o lucro. Qual é o lucro líquido, em reais?', a: 240, tol: 0.01, unit: 'R$', hint: 'IR = 20% de 300 = 60. Lucro líquido = bruto − IR.', sol: P('IR = 0,20 × 300 = R$ 60 → líquido = 300 − 60 = <strong>R$ 240,00</strong>.') },
    { tag: 'Comparação', q: 'CDB com lucro bruto de <strong>R$ 250</strong> (IR de <strong>17,5%</strong>) ou LCI com lucro de <strong>R$ 210</strong> (isenta). Quantos reais a mais a melhor opção deixa no bolso?', a: 210 - 250 * 0.825, tol: 0.01, unit: 'R$', hint: 'Calcule o líquido do CDB: 250 × (1 − 0,175). Depois compare com 210.', sol: P(`CDB líquido: 250 × 0,825 = R$ ${N(250 * 0.825)}. LCI: R$ 210. A LCI deixa <strong>${R(210 - 250 * 0.825)}</strong> a mais.`) },
    { tag: 'Juros compostos', q: '<strong>R$ 1.500</strong> aplicados a <strong>2% ao mês</strong>, juros compostos, por <strong>3 meses</strong>. Qual o montante, em reais?', a: 1500 * Math.pow(1.02, 3), tol: 0.05, unit: 'R$', hint: 'M = C · (1 + i)ⁿ = 1.500 · 1,02³. Use 1,02³ = 1,061208.', sol: P(`1.500 · 1,061208 = <strong>${R(1500 * Math.pow(1.02, 3))}</strong>.`) },
    { tag: 'Reserva de emergência', q: 'Seu custo de vida é de <strong>R$ 2.400 por mês</strong>. Uma reserva de emergência de <strong>6 meses</strong> deve ter quantos reais?', a: 14400, tol: 0.01, unit: 'R$', hint: 'Multiplique o custo mensal pelo número de meses.', sol: P('6 × 2.400 = <strong>R$ 14.400,00</strong>, em aplicação com liquidez diária (Tesouro Selic ou CDB com resgate diário).') },
    { tag: 'Planejamento', q: 'Para juntar esses <strong>R$ 14.400</strong> guardando <strong>R$ 800 por mês</strong> (sem contar rendimentos), em quantos meses você chega lá?', a: 18, tol: 0.01, unit: 'meses', hint: 'Divida a meta pelo valor guardado a cada mês.', sol: P('14.400 ÷ 800 = <strong>18 meses</strong>. Com rendimento, chegaria um pouco antes.') }
  ]
});

const t2 = mk({
  out: dir + 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-pratica.html', key: 'inv2-pratica',
  title: 'Prática: o tempo trabalha por você — Trilha de problemas', brand: 'Juros Compostos e Carteira', cls: 'success',
  eyebrow: 'Prática progressiva · aulas 39–41', h1: 'O tempo <span style="color:var(--growth);">trabalha</span> por você',
  subtitle: 'Seis etapas sobre juros compostos, logaritmos, aportes mensais e carteira. Use a calculadora e o caderno. Duas tentativas por etapa.',
  final: 'Juros sobre juros, o tempo no expoente e a diversificação: a base de qualquer planejamento financeiro.',
  problems: [
    { tag: 'Juros compostos', q: '<strong>R$ 2.000</strong> a <strong>10% ao ano</strong>, juros compostos, por <strong>2 anos</strong>. Qual o montante, em reais?', a: 2420, tol: 0.01, unit: 'R$', hint: '2.000 · 1,10 · 1,10.', sol: P('Ano 1: 2.200. Ano 2: 2.200 × 1,10 = <strong>R$ 2.420,00</strong>.') },
    { tag: 'Função exponencial', q: 'Um salário de <strong>R$ 3.000</strong> recebe reajuste de <strong>5% ao ano</strong>. Qual será o salário após <strong>3 anos</strong>, em reais? (use 1,05³ = 1,157625)', a: 3000 * 1.157625, tol: 0.05, unit: 'R$', hint: 's(t) = 3.000 · (1,05)ᵗ.', sol: P(`3.000 · 1,157625 = <strong>${R(3000 * 1.157625)}</strong>.`) },
    { tag: 'Logaritmo', q: 'Um capital rende <strong>5% ao mês</strong>. Em quantos meses ele dobra? Use log 2 = 0,30 e log 1,05 = 0,02.', a: 15, tol: 0.01, unit: 'meses', hint: '2 = 1,05ᵗ → log 2 = t · log 1,05 → t = 0,30 ÷ 0,02.', sol: P('t = 0,30 ÷ 0,02 = <strong>15 meses</strong>.') },
    { tag: 'Aportes mensais', q: 'Você investe <strong>R$ 150 por mês</strong> durante <strong>12 meses</strong>, a <strong>1% ao mês</strong> (aportes no fim de cada mês). Qual o valor acumulado, em reais?', a: fv(150, 0.01, 12), tol: 0.1, unit: 'R$', hint: 'F = A · [(1 + i)ⁿ − 1] ÷ i, com A = 150, i = 0,01 e n = 12 (1,01¹² ≈ 1,126825).', sol: P(`150 · (1,126825 − 1) ÷ 0,01 ≈ <strong>${R(fv(150, 0.01, 12))}</strong>. Você aportou R$ 1.800; os juros somaram ${R(fv(150, 0.01, 12) - 1800)}.`) },
    { tag: 'Carteira', q: 'Uma carteira de <strong>R$ 12.000</strong> destina <strong>40%</strong> à renda fixa. Quantos reais isso representa?', a: 4800, tol: 0.01, unit: 'R$', hint: '40% de 12.000 = 0,40 × 12.000.', sol: P('0,40 × 12.000 = <strong>R$ 4.800,00</strong> (e R$ 7.200 em renda variável).') },
    { tag: 'Comparação', q: 'Com <strong>R$ 800</strong> por um mês: poupança a 0,5% (isenta) ou CDB a 0,8% com IR de 15% sobre o ganho. Quantos reais a mais o CDB deixa no bolso?', a: 800 * 0.008 * 0.85 - 800 * 0.005, tol: 0.01, unit: 'R$', hint: 'Poupança: 4,00. CDB: 6,40 menos 15% de 6,40.', sol: P(`Poupança: R$ 4,00. CDB: 6,40 × 0,85 = R$ ${N(6.4 * 0.85)}. Diferença: <strong>${R(6.4 * 0.85 - 4)}</strong> a favor do CDB.`) }
  ]
});

const t3 = mk({
  out: dir + 'renda-variavel-bolsa/atividade-pratica.html', key: 'rv-pratica',
  title: 'Prática: a Bolsa na ponta do lápis — Trilha de problemas', brand: 'Renda Variável e Bolsa', cls: 'success',
  eyebrow: 'Prática progressiva · aulas 43–45', h1: 'A Bolsa na <span style="color:var(--growth);">ponta do lápis</span>',
  subtitle: 'Seis etapas: dividendos, valorização, equilíbrio de mercado, perdas, custos e recuperação. Duas tentativas por etapa.',
  final: 'Dividendos, preço de equilíbrio, taxas e a matemática da recuperação: tudo conta quando se investe em renda variável.',
  problems: [
    { tag: 'Dividendos', q: 'Você tem <strong>320 cotas</strong> de um FII que paga <strong>R$ 0,85</strong> por cota no mês. Quanto recebe, em reais?', a: 272, tol: 0.01, unit: 'R$', hint: 'Cotas × dividendo por cota.', sol: P('320 × 0,85 = <strong>R$ 272,00</strong>.') },
    { tag: 'Valorização', q: 'Uma ação passou de <strong>R$ 25</strong> para <strong>R$ 31</strong>. Qual foi a valorização, em %?', a: 24, tol: 0.01, unit: '%', hint: 'Variação = (final − inicial) ÷ inicial × 100.', sol: P('(31 − 25) ÷ 25 = 6 ÷ 25 = 0,24 → <strong>24%</strong>.') },
    { tag: 'Oferta e demanda', q: 'A demanda por uma ação é Qd = 120 − 2p e a oferta é Qs = 3p − 30 (p em reais). Qual é o <strong>preço de equilíbrio</strong>, em reais?', a: 30, tol: 0.01, unit: 'R$', hint: 'No equilíbrio, Qd = Qs: 120 − 2p = 3p − 30.', sol: P('120 + 30 = 3p + 2p → 150 = 5p → <strong>p = R$ 30,00</strong>. Quantidade negociada: 120 − 60 = 60 ações.') },
    { tag: 'Perda', q: 'Você comprou <strong>1.000 ações a R$ 20</strong>. O preço caiu <strong>20%</strong>. Qual foi o prejuízo, em reais, no papel?', a: 4000, tol: 0.01, unit: 'R$', hint: 'Valor investido = 20.000. Queda de 20% de 20.000.', sol: P('20% de 20.000 = <strong>R$ 4.000,00</strong> (o preço foi a R$ 16). O prejuízo só se concretiza se você vender.') },
    { tag: 'Custos', q: 'A corretora cobra <strong>R$ 5 fixos + 0,25%</strong> do valor da operação. Qual o custo de uma compra de <strong>R$ 4.000</strong>, em reais?', a: 15, tol: 0.01, unit: 'R$', hint: '0,25% de 4.000 = 0,0025 × 4.000.', sol: P('0,0025 × 4.000 = R$ 10; mais os R$ 5 fixos = <strong>R$ 15,00</strong>.') },
    { tag: 'Recuperação', q: 'Um ativo caiu <strong>20%</strong>. De quantos por cento ele precisa subir, depois, para voltar ao preço original?', a: 25, tol: 0.01, unit: '%', hint: 'Se valia 100 e foi a 80, quanto falta de 80 até 100?', sol: P('De 80 para 100: 20 ÷ 80 = 0,25 → <strong>25%</strong>. Perdas exigem ganhos maiores para serem recuperadas — mais um motivo para controlar o risco.') }
  ]
});

const apBetsMes = 164, apAnos = 5;
const t4 = mk({
  out: dir + 'apostas-bets-cassino/atividade-pratica.html', key: 'ap-pratica',
  title: 'Prática: a matemática da casa — Trilha de problemas', brand: 'Apostas, Bets e Cassino', cls: 'danger',
  eyebrow: 'Prática progressiva · aulas 35, 42, 47', h1: 'A matemática <span style="color:var(--danger);">da casa</span>',
  subtitle: 'Seis etapas para calcular o lucro da plataforma, as combinações do caça-níquel e o que seria possível fazendo investimentos em vez de apostas. Duas tentativas por etapa.',
  final: 'Contas feitas, a conclusão é a mesma: a vantagem é sempre da casa — e o mesmo dinheiro, investido, constrói patrimônio.',
  problems: [
    { tag: 'RTP', q: 'Uma plataforma recebeu <strong>40.000 apostas de R$ 10</strong> com <strong>RTP de 90%</strong>. Qual foi o lucro bruto da plataforma, em reais?', a: 40000, tol: 0.01, unit: 'R$', hint: 'Faturamento = 40.000 × 10. A plataforma fica com 10%.', sol: P('Faturamento: R$ 400.000. Devolvido (90%): R$ 360.000. Lucro: <strong>R$ 40.000,00</strong>.') },
    { tag: 'Combinações', q: 'Uma máquina tem <strong>4 rolos</strong> com <strong>9 símbolos</strong> cada. Quantas combinações são possíveis?', a: 6561, tol: 0.01, unit: 'combinações', hint: '9 × 9 × 9 × 9 = 9⁴.', sol: P('9⁴ = <strong>6.561</strong> combinações.') },
    { tag: 'Probabilidade', q: 'Com essas 6.561 combinações e <strong>uma única combinação premiada</strong>, qual a chance de ganhar em uma jogada, em % (quatro casas decimais)?', a: 100 / 6561, tol: 0.0006, unit: '%', hint: '1 ÷ 6.561 × 100. É um número bem pequeno!', sol: P(`1 ÷ 6.561 ≈ 0,000152 → <strong>${N(100 / 6561, 4)}%</strong>. Ou seja, ${N(100 - 100 / 6561, 4)}% de chance de perder.`) },
    { tag: 'Gasto acumulado', q: `Um apostador gasta em média <strong>R$ ${apBetsMes} por mês</strong>. Quanto gasta em <strong>${apAnos} anos</strong>, em reais?`, a: apBetsMes * 12 * apAnos, tol: 0.01, unit: 'R$', hint: 'Meses = 12 × 5 = 60. Multiplique pelo gasto mensal.', sol: P(`60 × ${apBetsMes} = <strong>${R(apBetsMes * 60)}</strong> — dinheiro que, em média, se vai.`) },
    { tag: 'E se investisse?', q: `Se esses R$ ${apBetsMes} mensais fossem <strong>investidos a 1% ao mês</strong> por ${apAnos} anos (aportes no fim do mês), quanto haveria, em reais?`, a: fv(apBetsMes, 0.01, 60), tol: 0.5, unit: 'R$', hint: 'F = A · [(1 + i)ⁿ − 1] ÷ i, com n = 60 e 1,01⁶⁰ ≈ 1,816697.', sol: P(`164 · (1,816697 − 1) ÷ 0,01 ≈ <strong>${R(fv(apBetsMes, 0.01, 60))}</strong>.`) },
    { tag: 'Juros ganhos', q: 'Qual seria o valor dos <strong>juros</strong> (acumulado menos o total depositado), em reais?', a: fv(apBetsMes, 0.01, 60) - apBetsMes * 60, tol: 0.5, unit: 'R$', hint: 'Subtraia os R$ 9.840 depositados do valor acumulado da etapa anterior.', sol: P(`${R(fv(apBetsMes, 0.01, 60))} − ${R(apBetsMes * 60)} = <strong>${R(fv(apBetsMes, 0.01, 60) - apBetsMes * 60)}</strong> de juros. Constância e tempo: sem depender de sorte.`) }
  ]
});

const t5 = mk({
  out: dir + 'criptoativos/atividade-pratica.html', key: 'cr-pratica',
  title: 'Prática: contas de cripto — Trilha de problemas', brand: 'Criptoativos', cls: '',
  eyebrow: 'Prática progressiva · aulas 48–50', h1: 'Contas de <span style="color:var(--primary);">cripto</span>',
  subtitle: 'Seis etapas: cotas, variação percentual, perdas sucessivas, desvio padrão, a ilusão do "3% ao dia" e a regra da exposição máxima. Duas tentativas por etapa.',
  final: 'Cotas, porcentagens que se multiplicam, risco medido por desvio padrão e limites de exposição: o raciocínio por trás de qualquer decisão responsável.',
  problems: [
    { tag: 'Cotas de ETF', q: 'Com <strong>R$ 1.500</strong>, quantas <strong>cotas inteiras</strong> de um ETF de criptoativos a <strong>R$ 27,50</strong> cada você compra?', a: 54, tol: 0.01, unit: 'cotas', hint: '1.500 ÷ 27,50 ≈ 54,5; só vale a parte inteira.', sol: P('1.500 ÷ 27,50 = 54,54… → <strong>54 cotas</strong> (sobram R$ 15,00).') },
    { tag: 'Variação', q: 'Uma criptomoeda passou de <strong>R$ 120</strong> para <strong>R$ 150</strong>. Qual foi a variação, em %?', a: 25, tol: 0.01, unit: '%', hint: '(150 − 120) ÷ 120 × 100.', sol: P('30 ÷ 120 = 0,25 → <strong>25%</strong>.') },
    { tag: 'Variações sucessivas', q: 'O preço <strong>subiu 50%</strong> e, depois, <strong>caiu 40%</strong>. Qual a variação total, em % (use sinal: negativo se perdeu)?', a: -10, tol: 0.01, unit: '%', hint: 'Fatores: 1,50 × 0,60.', sol: P('1,50 × 0,60 = 0,90 → <strong>−10%</strong>. Um ganho de 50% seguido de perda de 40% ainda resulta em prejuízo.') },
    { tag: 'Desvio padrão', q: 'Retornos mensais (%): <strong>4, 8, 6, 10, 12</strong>. Calcule o desvio padrão (duas casas decimais).', a: Math.sqrt(8), tol: 0.01, unit: '%', hint: 'Média = 8. Desvios: −4, 0, −2, 2, 4. Variância = soma dos quadrados ÷ 5. Depois a raiz.', sol: P('Média = 8. Quadrados dos desvios: 16, 0, 4, 4, 16 → soma 40 → variância 8 → dp = √8 ≈ <strong>2,83%</strong>.') },
    { tag: 'Promessa irreal', q: 'Um "robô" promete <strong>3% ao dia garantidos</strong>. Quanto R$ 1.000 virariam em <strong>10 dias</strong>, em reais? (1,03¹⁰ ≈ 1,343916)', a: 1000 * Math.pow(1.03, 10), tol: 0.5, unit: 'R$', hint: 'M = 1.000 · 1,03¹⁰.', sol: P(`1.000 · 1,343916 ≈ <strong>${R(1000 * Math.pow(1.03, 10))}</strong> em 10 dias — e em 1 ano seria um número astronômico. Promessas assim são sinal de golpe.`) },
    { tag: 'Exposição máxima', q: 'Regra de ouro: no máximo <strong>5%</strong> do patrimônio em criptoativos. Qual o limite, em reais, para quem tem <strong>R$ 18.000</strong>?', a: 900, tol: 0.01, unit: 'R$', hint: '5% de 18.000.', sol: P('0,05 × 18.000 = <strong>R$ 900,00</strong>. O resto fica em reserva e investimentos mais seguros.') }
  ]
});

module.exports = [t1, t2, t3, t4, t5];
