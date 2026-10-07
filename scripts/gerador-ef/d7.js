// 1ª série — Deck B: calculadora financeira, taxas equivalentes e prestações (aulas 38, 40)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Financiamento, prestações e a <span style="color:var(--primary);">calculadora financeira</span>',
  sub: 'Taxas equivalentes, o cálculo da prestação de um crediário e como a HP 12C (e um simulador) resolvem juros, prazo e parcelas em segundos.',
  badges: [['AULAS 38, 40'], ['PV · PMT · n · i · FV', 'growth'], ['Taxa equivalente', 'decay']],
  color: 'primary', curve: 'M40,205 C 160,200 280,170 400,130 C 520,90 700,50 840,26', end: [840, 26]
}));

slides.push(roteiroSlide('Da geladeira que estragou até a conta exata da prestação.', [
  ['O crediário e as financeiras', 'quem financia e por que os juros são altos', 'building'],
  ['Taxas equivalentes', '12% ao ano não é 1% ao mês — converta certo', 'scale'],
  ['ENEM: comparando financiamentos', 'qual loja custa menos ao final de um ano?', 'target'],
  ['A prestação (PMT)', 'dona Angelina, a geladeira e o sofá', 'coin'],
  ['A calculadora financeira', 'PV, PMT, n, i e FV — e por que a HP 12C não tem "="', 'chart'],
  ['Mão na massa', 'taxa do notebook, prestação do empréstimo, preço à vista e prazo da geladeira', 'bulb']
]));

slides.push(objetivosSlide([
  'Compreender <strong>financiamentos e crediários</strong>, suas taxas e demais serviços.',
  'Converter <strong>taxas equivalentes</strong> (diária, mensal e anual) em juros compostos.',
  'Calcular o valor da <strong>prestação</strong> e o <strong>total pago</strong> em um parcelamento.',
  'Usar a <strong>calculadora financeira</strong> (HP 12C ou simulador) para achar taxa, prazo, preço à vista ou prestação.'
], 'Habilidades do ENEM', 'MT H3 — resolver situação-problema envolvendo conhecimentos numéricos · MT H22 — conhecimentos algébricos como recurso na argumentação.', 'primary', 'primary'));

slides.push(sl('Aula 40 · para início de conversa', 'A geladeira estragou e não há cartão nem dinheiro', `
          <div class="grid2">
            <div>
              ${lede('A geladeira da sua casa estragou. Vocês <strong>não têm cartão de crédito</strong> nem dinheiro para comprar à vista. Qual forma de crédito é a ideal para este caso?')}
              ${callout('Para estas situações existe o crediário', 'Empresas especializadas, as <strong>financeiras</strong>, oferecem crédito para móveis, automóveis e eletrodomésticos.')}
            </div>
            <div>
              ${card('<strong>Como funciona</strong><p style="font-size:.9rem;margin-top:8px;">A financeira <strong>paga a loja</strong> e o cliente paga <strong>parcelado, em carnê/boleto, para a financeira</strong>. Como o risco de inadimplência é alto, os juros também são altos.</p>')}
              ${mini('Em juros compostos, 12% ao ano é a mesma coisa que 1% ao mês?', ['Sim, é só dividir por 12', 'Não: a taxa mensal equivalente é um pouco menor que 1%', 'Não: a taxa mensal equivalente é maior que 1%', 'Depende do banco'], 1, 'Não é dividir por 12! A taxa equivalente é (1,12)<sup>1/12</sup> − 1 ≈ <strong>0,949% ao mês</strong>. Vamos entender essa conversão.')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 40 · teoria', 'Taxa equivalente', `
          ${lede('Em <strong>juros compostos</strong>, a taxa anual não se converte dividindo: <strong>1 + i<sub>a</sub> = (1 + i<sub>m</sub>)<sup>12</sup></strong>. Logo, <strong>i<sub>m</sub> = (1 + i<sub>a</sub>)<sup>1/12</sup> − 1</strong>.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Converter de</label>
              <select id="te-de"><option value="a">ao ano</option><option value="m" selected>ao mês</option><option value="d">ao dia</option></select>
              <label>Para</label>
              <select id="te-pa"><option value="a">ao ano</option><option value="m">ao mês</option><option value="d" selected>ao dia</option></select>
              <label>Taxa (%)</label><input type="number" id="te-t" value="9.78" step="0.01">
              <p class="small" style="margin:12px 0 0;">Taxa equivalente</p><div class="out" id="te-r" style="font-size:1.6rem;"></div>
            </div>
            <div>
              ${tbl(['taxa', 'equivalente mensal'], [['12% ao ano', '≈ 0,9489% a.m.'], ['15% ao ano', '≈ 1,1715% a.m.'], ['6% ao ano', '≈ 0,4868% a.m.']])}
              ${callout('Na calculadora do celular', '1,12 → tecla <span class="mono">xʸ</span> → ( 1 ÷ 12 ) → <span class="mono">=</span> → subtrair 1 → multiplicar por 100.')}
              <p class="hint">Mês de 30 dias, ano de 12 meses (convenção da aula): mensal → diária usa o expoente 1/30; diária → mensal, o expoente 30.</p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('ENEM 2018 PPL · comparando financiamentos', 'Qual loja tem o menor valor final?', `
          ${lede('Um cliente quer trocar de carro. As três lojas aceitam o carro usado como entrada e financiam o restante por um ano, com juros (modelo da questão): <strong>valor final = (novo − usado) × fator de juros</strong>.')}
          ${tbl(['loja', 'carro novo', 'carro usado', 'a financiar', 'juros', 'valor final'], [['A', 'R$ 28.500', 'R$ 13.500', 'R$ 15.000', '18%', '<b>R$ 17.700</b>'], ['B', 'R$ 27.000', 'R$ 13.000', 'R$ 14.000', '20%', '<b>R$ 16.800</b>'], ['C', 'R$ 26.500', 'R$ 12.000', 'R$ 14.500', '19%', '<b>R$ 17.255</b>']])}
          <div class="grid2" style="margin-top:8px;">
            ${mini('Qual o menor valor final?', ['R$ 14 mil', 'R$ 15 mil', 'R$ 16.800', 'R$ 17.255', 'R$ 17.700'], 2, '<strong>R$ 16.800 (loja B)</strong>: 14.000 × 1,20. Repare: a maior taxa (20%) não é a pior oferta, porque o valor financiado também importa.')}
            ${callout('Atenção', 'Uma compra a prazo hoje é feita em condições diferentes das da questão (juros compostos). Por isso estudamos, a seguir, o parcelamento no sistema de juros compostos.', '')}
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 40 · estudo de caso', 'A geladeira da dona Angelina', `
          ${lede('Dona Angelina comprou uma geladeira de <strong>R$ 2.500</strong> em <strong>12 vezes sem entrada</strong>, com juros de <strong>0,85% ao mês</strong>. Qual o valor de cada prestação?')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              ${formula('PMT = PV · i ÷ [1 − (1 + i)<sup>−n</sup>]', true)}
              <p class="small"><b>PV</b> preço à vista · <b>n</b> nº de prestações · <b>i</b> taxa mensal · <b>PMT</b> prestação</p>
              ${reveal('Resolução', '<p>PV = 2.500 · n = 12 · i = 0,85% = 0,0085</p><p>PMT = 2.500 · 0,0085 ÷ [1 − (1,0085)<sup>−12</sup>] ≈ <strong>R$ 220,02</strong></p><p class="hint">Podem existir outras taxas e serviços embutidos. Total pago: 12 × 220,02 = R$ 2.640,24.</p>')}
            </div>
            <div class="wid">
              <div class="row"><div><label>Preço à vista (R$)</label><input type="number" id="pm-v" value="2500" step="100"></div><div><label>Taxa (% ao mês)</label><input type="number" id="pm-i" value="0.85" step="0.05"></div><div><label>Prestações</label><input type="number" id="pm-n" value="12" min="1" step="1"></div></div>
              <p class="small" style="margin:12px 0 0;">Prestação</p><div class="out" id="pm-p" style="font-size:1.8rem;"></div>
              <p class="small" id="pm-t" style="margin:4px 0 0;"></p>
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Atividade · o sofá do crediário', 'Taxa diária, mensal e prestação', `
          ${lede('Um sofá de <strong>R$ 1.800</strong> será financiado em <strong>18 meses</strong>, com juros anunciados de <strong>0,08% ao dia</strong>. Siga as etapas:')}
          <div class="grid3" style="margin-top:8px;">
            ${card('<span class="badge">1º</span><p style="font-size:.9rem;margin-top:8px;">Converta a taxa <strong>diária em mensal</strong>: (1,0008)<sup>30</sup> − 1 ≈ <strong>2,428%</strong> ao mês.</p>')}
            ${card('<span class="badge">2º</span><p style="font-size:.9rem;margin-top:8px;">Calcule a <strong>prestação</strong> com PV = 1.800, n = 18, i = 0,02428.</p>')}
            ${card('<span class="badge">3º</span><p style="font-size:.9rem;margin-top:8px;">Multiplique a prestação pelo prazo para ter o <strong>total pago</strong>.</p>')}
          </div>
          ${reveal('Resolução', '<p>PMT = 1.800 · 0,02428 ÷ [1 − (1,02428)<sup>−18</sup>] ≈ <strong>R$ 124,63</strong>.</p><p>Total: 18 × 124,63 ≈ <strong>R$ 2.243,34</strong> — cerca de R$ 443 de juros sobre os R$ 1.800.</p>')}
          ${callout('Para saber mais', 'Use o conversor de taxas do <em>Clube dos Poupadores</em> e a <strong>Calculadora do Cidadão</strong> do Banco Central (financiamento com prestações fixas) para conferir.', 'success')}`, { cls: 'growth' }));

slides.push(sl('Aula 38 · teoria', 'A calculadora financeira', `
          ${lede('As fórmulas de juros e parcelamento envolvem <strong>cinco elementos</strong>. Na calculadora financeira, cada um tem uma tecla:')}
          <div class="grid4" style="margin-top:8px;">
            ${card('<span class="badge">n</span><p style="font-size:.86rem;margin-top:8px;">Número de <strong>períodos</strong>.</p>')}
            ${card('<span class="badge">i</span><p style="font-size:.86rem;margin-top:8px;"><strong>Taxa</strong> (digite em %, sem converter para decimal).</p>')}
            ${card('<span class="badge">PV</span><p style="font-size:.86rem;margin-top:8px;"><strong>Capital</strong> / preço à vista.</p>')}
            ${card('<span class="badge">PMT</span><p style="font-size:.86rem;margin-top:8px;"><strong>Prestação</strong>.</p>')}
          </div>
          <div class="grid2" style="margin-top:10px;">
            ${callout('Regras de uso', 'Informe pelo menos <strong>3 dados</strong> para obter o quarto. <b>PV e FV/PMT têm sinais opostos</b> (um é saída e o outro entrada de caixa): use <span class="mono">[CHS]</span> para trocar o sinal. Zere a memória antes: <span class="mono">[f] [CLX]</span>.')}
            ${card('<strong>Por que a HP 12C não tem a tecla [=]?</strong><p style="font-size:.9rem;margin-top:6px;">Ela usa a <strong>Notação Polonesa Reversa</strong>: a operação é concluída pela própria tecla da operação, sem "igual". Digita-se o número, [ENTER] e depois o próximo.</p>')}
          </div>`, { cls: 'primary' }));

slides.push(sl('Simulador · calculadora financeira', 'Descubra a incógnita', `
          ${lede('Escolha o que quer descobrir, preencha os outros três dados e veja o resultado — exatamente como na HP 12C (sem [=]!).')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Quero descobrir</label>
              <select id="cf-x"><option value="pmt">PMT — a prestação</option><option value="pv">PV — o preço à vista</option><option value="n">n — o prazo (meses)</option><option value="i">i — a taxa (% ao mês)</option></select>
              <div class="row"><div><label>PV (R$)</label><input type="number" id="cf-pv" value="2000" step="100"></div><div><label>PMT (R$)</label><input type="number" id="cf-pmt" value="170" step="10"></div></div>
              <div class="row"><div><label>n (meses)</label><input type="number" id="cf-n" value="12" step="1"></div><div><label>i (% ao mês)</label><input type="number" id="cf-i" value="1.5" step="0.05"></div></div>
            </div>
            <div class="wid">
              <p class="small" id="cf-l" style="margin:0;"></p><div class="out" id="cf-r" style="font-size:2rem;"></div>
              <p class="small" id="cf-t" style="margin:6px 0 0;"></p>
              <p class="hint" id="cf-s" style="margin:10px 0 0;"></p>
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 38 · passo a passo', 'André e a promoção do notebook', `
          ${lede('Um notebook de <strong>R$ 2.000</strong> sai em <strong>12 × R$ 170</strong>. André quer saber qual a <strong>taxa de juros</strong> do financiamento para comparar com as taxas do site do Banco Central.')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="step-row"><span class="badge">1</span><div><strong>2000 [PV]</strong><div class="hint">preço à vista</div></div></div>
                <div class="step-row"><span class="badge">2</span><div><strong>12 [n]</strong><div class="hint">prazo em meses</div></div></div>
                <div class="step-row"><span class="badge">3</span><div><strong>170 [CHS] [PMT]</strong><div class="hint">prestação (saída de dinheiro = sinal negativo)</div></div></div>
                <div class="step-row"><span class="badge">4</span><div><strong>[i]</strong><div class="hint">a taxa aparece no visor</div></div></div>
              </div>
            </div>
            <div>
              ${stat('≈ 0,31%', 'taxa de juros mensal do financiamento (use [f] [4] para quatro casas decimais)', 'primary')}
              ${callout('Atenção', 'A ordem de inserção dos dados não importa. Para um novo cálculo, zere a memória: <span class="mono">[f] [CLX]</span>.')}
            </div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Atividades · mão na massa com a HP 12C', 'Três problemas de crédito', `
          <div class="grid3">
            ${card('<strong>1 · João e o empréstimo</strong><p style="font-size:.88rem;margin-top:6px;">Empréstimo de <strong>R$ 10 mil</strong> a <strong>1,5% a.m.</strong> por <strong>6 meses</strong>. Qual a prestação?</p>' + reveal('Resolver', '<p><span class="mono">10000 [CHS] [PV] · 1.5 [i] · 6 [n] · [PMT]</span></p><p>Prestação: <strong>R$ 1.755,25</strong>.</p>'))}
            ${card('<strong>2 · Camila e o celular</strong><p style="font-size:.88rem;margin-top:6px;">Comprou em <strong>5 × R$ 500</strong> com juros de <strong>2% a.m.</strong> Qual o preço à vista?</p>' + reveal('Resolver', '<p><span class="mono">500 [CHS] [PMT] · 5 [n] · 2 [i] · [PV]</span></p><p>À vista: <strong>R$ 2.356,73</strong> (ela paga R$ 2.500 no total).</p>'))}
            ${card('<strong>3 · Andréa e a geladeira</strong><p style="font-size:.88rem;margin-top:6px;">Geladeira de <strong>R$ 3.250</strong>; só cabe <strong>R$ 295/mês</strong>; juros de <strong>0,95% a.m.</strong> Em quantas prestações?</p>' + reveal('Resolver', '<p><span class="mono">3250 [CHS] [PV] · 295 [PMT] · 0.95 [i] · [n]</span></p><p>n ≈ 11,7 → <strong>12 prestações</strong> (a calculadora arredonda para cima).</p>'))}
          </div>
          <p class="hint" style="margin-top:10px;">Confira todos no simulador da slide anterior! Emulador da HP 12C online disponível no material da aula.</p>`, { cls: 'primary' }));

slides.push(sintese([
  ['Taxa equivalente', 'Em juros compostos, converta com expoente: (1,12)^(1/12) − 1 ≈ 0,949% a.m. — nunca só dividir.'],
  ['Prestação', 'PMT = PV·i ÷ [1 − (1+i)^(−n)]. O total pago é PMT × n: compare sempre com o preço à vista.'],
  ['Ferramenta', 'Calculadora financeira: com 3 dados você obtém o 4º (PV, PMT, n ou i). Atenção aos sinais e a zerar a memória.']
], '"Parcelar é pagar mais tarde — e quase sempre pagar mais."'));

slides.push(quizSlide([
  { q: 'A taxa mensal equivalente a 12% ao ano em juros compostos é:', o: ['Exatamente 1%', 'Cerca de 0,949%', 'Cerca de 1,5%', '12%'], a: 1 },
  { q: 'Na fórmula da prestação, PV representa:', o: ['O prazo', 'A taxa', 'O preço à vista', 'O total pago'], a: 2 },
  { q: 'Dona Angelina: R$ 2.500 em 12 vezes a 0,85% a.m. A prestação é aproximadamente:', o: ['R$ 208,33', 'R$ 220,02', 'R$ 250,00', 'R$ 185,00'], a: 1 },
  { q: 'Por que a HP 12C não tem a tecla [=]?', o: ['Porque é defeito', 'Porque usa Notação Polonesa Reversa', 'Porque só faz somas', 'Porque exige internet'], a: 1 },
  { q: 'Na questão do ENEM com as lojas A, B e C, qual tem o menor valor final?', o: ['Loja A', 'Loja B', 'Loja C', 'Todas iguais'], a: 1 }
]));

slides.push(refsSlide([
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>. Maceió: [s.n.], 2024 (p. 135–136).',
  'VIANNA, Renata de Moura Issa. <em>Matemática financeira</em>. Salvador: UFBA, 2018.',
  'BANCO CENTRAL DO BRASIL. <em>Calculadora do Cidadão</em> — financiamento com prestações fixas.',
  'INEP. <em>Provas do ENEM</em> (ENEM 2018 PPL, questão 145).'
], 'Para continuar', 'Antes de parcelar, calcule', 'Compare a prestação com o orçamento e o total pago com o preço à vista. Próxima aula: o cartão de crédito e o seu nome limpo.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  var UN = {a: 360, m: 30, d: 1};
  function teUp(){
    var de = $('te-de').value, pa = $('te-pa').value, t = (+$('te-t').value || 0) / 100;
    var r = Math.pow(1 + t, UN[pa] / UN[de]) - 1;
    $('te-r').textContent = (r * 100).toLocaleString('pt-BR', {maximumFractionDigits: 4}) + '% ' + (pa === 'a' ? 'ao ano' : pa === 'm' ? 'ao mês' : 'ao dia');
  }
  ['te-de','te-pa','te-t'].forEach(function(i){ $(i).addEventListener('input', teUp); }); teUp();
  function pmt(pv, i, n){ return i === 0 ? pv / n : pv * i / (1 - Math.pow(1 + i, -n)); }
  function pmUp(){
    var v = +$('pm-v').value || 0, i = (+$('pm-i').value || 0) / 100, n = Math.max(1, +$('pm-n').value || 1), p = pmt(v, i, n);
    $('pm-p').textContent = brl(p); $('pm-t').textContent = 'Total pago: ' + brl(p * n) + ' · juros: ' + brl(p * n - v);
  }
  ['pm-v','pm-i','pm-n'].forEach(function(i){ $(i).addEventListener('input', pmUp); }); pmUp();
  function cfUp(){
    var x = $('cf-x').value, pv = +$('cf-pv').value || 0, p = +$('cf-pmt').value || 0, n = +$('cf-n').value || 0, i = (+$('cf-i').value || 0) / 100;
    ['pv','pmt','n','i'].forEach(function(k){ $('cf-' + k).disabled = (k === x); $('cf-' + k).style.opacity = (k === x ? .4 : 1); });
    var r, lab, s = '';
    if(x === 'pmt'){ r = pmt(pv, i, n); lab = 'Prestação (PMT)'; $('cf-r').textContent = brl(r); s = 'Total pago: ' + brl(r * n) + ' (juros: ' + brl(r * n - pv) + ')'; $('cf-s').textContent = 'HP 12C: ' + pv + ' [CHS] [PV] · ' + (i*100) + ' [i] · ' + n + ' [n] · [PMT]'; }
    else if(x === 'pv'){ r = i === 0 ? p * n : p * (1 - Math.pow(1 + i, -n)) / i; lab = 'Preço à vista (PV)'; $('cf-r').textContent = brl(r); s = 'Total pago: ' + brl(p * n) + ' (juros: ' + brl(p * n - r) + ')'; $('cf-s').textContent = 'HP 12C: ' + p + ' [CHS] [PMT] · ' + n + ' [n] · ' + (i*100) + ' [i] · [PV]'; }
    else if(x === 'n'){ lab = 'Prazo (n)'; var q = 1 - pv * i / p; if(p <= 0 || q <= 0){ $('cf-r').textContent = 'impossível'; s = 'A prestação não cobre nem os juros mensais.'; } else { r = -Math.log(q) / Math.log(1 + i); $('cf-r').textContent = r.toFixed(2).replace('.', ',') + ' meses'; s = 'Na prática: ' + Math.ceil(r - 1e-9) + ' prestações.'; } $('cf-s').textContent = 'HP 12C: ' + pv + ' [CHS] [PV] · ' + p + ' [PMT] · ' + (i*100) + ' [i] · [n]'; }
    else { lab = 'Taxa (i)'; if(pv <= 0 || p * n <= pv){ $('cf-r').textContent = '0%'; s = 'Sem juros: a soma das prestações não supera o preço à vista.'; } else { var lo = 0, hi = 1; for(var k = 0; k < 200; k++){ var m = (lo + hi) / 2; var v = p * (1 - Math.pow(1 + m, -n)) / m; if(v > pv) lo = m; else hi = m; } r = lo; $('cf-r').textContent = (r * 100).toFixed(4).replace('.', ',') + '% a.m.'; s = 'Equivale a ' + ((Math.pow(1 + r, 12) - 1) * 100).toFixed(2).replace('.', ',') + '% ao ano.'; } $('cf-s').textContent = 'HP 12C: ' + pv + ' [PV] · ' + n + ' [n] · ' + p + ' [CHS] [PMT] · [i]'; }
    $('cf-l').textContent = lab; $('cf-t').textContent = s;
  }
  ['cf-x','cf-pv','cf-pmt','cf-n','cf-i'].forEach(function(i){ $(i).addEventListener('input', cfUp); }); cfUp();
`;

module.exports = { title: 'Financiamento, Prestações e Calculadora Financeira', brand: 'Financiamento e Calculadora Financeira', aulas: 'Aulas 38, 40', serie: '1ª Série', key: 'cred2', slides, extra, out: 'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-2-financiamento-calculadora-financeira.html' };
