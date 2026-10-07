// 1ª série — Deck F: compras no supermercado e promoções (aulas 46, 47)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Compras inteligentes: do supermercado à <span style="color:var(--success);">Black Friday</span>',
  sub: 'Quando comprar, como evitar o desperdício, a "pegadinha" dos percentuais e como descobrir se uma promoção é de verdade.',
  badges: [['AULAS 46, 47'], ['Lista + teto de gasto', 'success'], ['Histórico de preços', 'primary']],
  color: 'success', curve: 'M40,190 C 160,180 260,120 380,130 C 500,140 560,70 680,70 C 760,70 800,50 840,34', end: [840, 34]
}));

slides.push(roteiroSlide('Do carrinho do mercado até o preço-alvo da Black Friday.', [
  ['O melhor dia para ir ao mercado', 'pagamento no 5º dia útil e preços', 'clock'],
  ['O preço subiu: e agora?', 'teto de gasto e substituições', 'scale'],
  ['Cardápio e lista semanal', 'ir com a lista e ser fiel a ela', 'book'],
  ['Desperdício custa dinheiro', 'o pão, o ENEM 2020 e como armazenar', 'leaf'],
  ['A pegadinha dos percentuais', '+10% e −2% não é +8%', 'warn'],
  ['"Super promoção" de verdade?', 'TV, chuveiros e o kit "compre 2, leve 3"', 'target'],
  ['Black Friday e histórico de preços', 'o preço-alvo para comprar bem', 'chart']
]));

slides.push(objetivosSlide([
  'Diferenciar <strong>necessidades essenciais</strong> de desejos em situações do dia a dia e analisar o impacto no orçamento.',
  'Elaborar <strong>estratégias</strong> de consumo consciente e planejado (lista, cardápio, teto de gasto).',
  '<strong>Comparar preços</strong> e identificar quando uma promoção é, ou não, vantajosa.',
  'Usar a matemática dos <strong>percentuais</strong> e do histórico de preços para decidir.'
], 'Descritor e habilidade', 'Hd01 — compreender formas de consumo · ENEM MT H4 — avaliar a razoabilidade de um resultado numérico na construção de argumentos sobre afirmações quantitativas.', 'success', 'success'));

slides.push(sl('Aula 46 · para início de conversa', 'Qual é o melhor dia para fazer compras no mercado?', `
          <div class="grid2">
            <div>
              ${lede('Grande parte das empresas paga os funcionários no <strong>5º dia útil</strong> do mês. Perto dessa data, alguns supermercados <strong>alteram os preços</strong>. Por isso é importante pesquisar e comprar no período certo.')}
              ${stat('últimos 10 dias', 'do mês: em geral os melhores dias para fazer as compras', 'success')}
            </div>
            <div>
              ${mini('Por que os últimos 10 dias do mês costumam ser melhores?', ['Porque o mercado fecha', 'Porque o aumento da demanda do início do mês (pós-pagamento) já passou e os preços ficam mais estáveis', 'Porque os produtos estragam', 'Porque o governo tabela os preços'], 1, 'Perto do 5º dia útil há <strong>mais gente com dinheiro e mais demanda</strong>; alguns mercados ajustam preços. Depois, o movimento cai. Mesmo assim, confira: pesquise!')}
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 46 · teoria', 'O preço aumentou! Devemos parar de consumir?', `
          <div class="grid2">
            <div>
              ${lede('Não! Mas devemos estabelecer um <strong>teto de gasto</strong> no mercado e nos manter fiéis a ele, fazendo <strong>substituições</strong> quando preciso.')}
              ${callout('Exemplo', 'Se você come morango todo dia e o preço disparou, troque por outra fruta em alguns dias da semana: você <strong>continua comendo bem</strong> e diminui só a <strong>frequência</strong>.', 'success')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Meu teto de gasto semanal</b></p>
              <div class="row"><div><label>Teto (R$)</label><input type="number" id="tg-t" value="250" step="10"></div><div><label>Itens da lista (R$)</label><input type="number" id="tg-l" value="212" step="5"></div><div><label>Impulso no caminho (R$)</label><input type="number" id="tg-i" value="55" step="5"></div></div>
              <p class="small" style="margin:10px 0 0;">Total: <b id="tg-s" class="mono"></b> · <span id="tg-r" style="font-weight:700;"></span></p>
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 46 · teoria', 'Faça compras semanais — com lista', `
          ${lede('Uma boa forma de economizar é criar <strong>cardápios semanais</strong>:')}
          <div class="grid3" style="margin-top:8px;">
            ${card('<span class="badge">1</span><p style="font-size:.9rem;margin-top:8px;">Liste tudo o que pretende <strong>preparar</strong> na semana.</p>')}
            ${card('<span class="badge">2</span><p style="font-size:.9rem;margin-top:8px;">Monte a <strong>lista de compras</strong> necessária — inclusive limpeza e higiene.</p>')}
            ${card('<span class="badge">3</span><p style="font-size:.9rem;margin-top:8px;">Vá ao mercado <strong>com a lista e seja fiel a ela</strong>.</p>', 'success')}
          </div>
          ${callout('Prática (grupos de até 4)', 'Criem um cardápio semanal (café da manhã, almoço e jantar), façam a lista de ingredientes e organizem em uma <strong>planilha eletrônica</strong>. Há aplicativos que ajudam a organizar a lista de compras.')}`, { cls: 'success' }));

slides.push(sl('Aula 46 · cálculo', 'O pão que vai para o lixo', `
          ${lede('Um pacote de <strong>400 g</strong> custa <strong>R$ 8,33</strong> e traz cerca de <strong>20 fatias</strong>. Algumas pessoas jogam fora a <strong>primeira e a última fatia</strong> (as casquinhas). Qual o desperdício em um mês, consumindo um pacote por dia?')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Preço do pacote (R$)</label><input type="number" id="pa-p" value="8.33" step="0.1"></div><div><label>Fatias no pacote</label><input type="number" id="pa-f" value="20"></div></div>
              <div class="row"><div><label>Fatias descartadas por pacote</label><input type="number" id="pa-d" value="2"></div><div><label>Dias</label><input type="number" id="pa-n" value="30"></div></div>
              <p class="small" style="margin:12px 0 0;">Custo de cada fatia: <b id="pa-c" class="mono"></b></p>
              <p class="small" style="margin:4px 0 0;">Desperdício no período</p><div class="out" id="pa-r" style="font-size:1.8rem;color:var(--danger);"></div>
            </div>
            <div>
              ${reveal('Resolução da aula', '<p>Custo de cada fatia: 8,33 ÷ 20 ≈ <strong>R$ 0,42</strong>. Desperdício por pão: 0,42 × 2 = <strong>R$ 0,84</strong>. Em um mês: 0,84 × 30 ≈ <strong>R$ 25,20</strong> (com o valor exato da fatia, R$ 24,99 — a calculadora ao lado mostra o exato).</p><p>É muito dinheiro jogado fora! As cascas podem virar torrada ou farofa.</p>')}
              ${callout('Evitar o desperdício', 'Pão amanhecido vira torrada; arroz de ontem vira bolinho; sobras de churrasco viram farofa. Basta <strong>criatividade</strong>.', 'success')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('ENEM 2020 · Linguagens · questão 19', 'Evitar o desperdício e a economia do consumidor', `
          ${lede('Um texto sobre o desperdício de alimentos afirma que a comida "perde-se no caminho" até o mercado e em casa, e mostra que evitar o desperdício gera economia. Qual é a ideia que o texto defende?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas (resumo)', ['Mostra ações governamentais já em andamento', 'O desperdício ocorre apenas no campo', 'A expressão "perde-se no caminho" incentiva a mudar hábitos', 'Evitar o desperdício gera economia e incentiva o consumidor a mudar seus hábitos', 'A distribuição melhor é tarefa direta do consumidor'], 3, '<strong>D</strong>: o texto mostra que evitar o desperdício <strong>economiza dinheiro</strong> e incentiva o consumidor a mudar hábitos. As demais atribuem ações a governos/campo ou trocam o foco.')}</div>
            <div>${callout('Da questão para a vida', 'O desperdício é <strong>custoso do ponto de vista ambiental, social e econômico</strong>. Cozinhar com o que já se tem e guardar bem os alimentos é economia direta.', 'success')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 46 · teoria', 'Como armazenar para durar mais', `
          <div class="grid2">
            ${card('<strong>Raízes</strong> (batata, mandioca, beterraba, batata-doce)<p style="font-size:.86rem;margin-top:6px;">Conserve <strong>longe da luz</strong> para durarem mais.</p>', 'growth')}
            ${card('<strong>Frutas climatéricas</strong> (banana, manga, mamão, tomate, maçã)<p style="font-size:.86rem;margin-top:6px;">Continuam amadurecendo e liberam <strong>etileno</strong>, que acelera as vizinhas. Guarde com espaço e escolha algumas maduras e outras verdes.</p>', 'danger')}
            ${card('<strong>Queijos</strong><p style="font-size:.86rem;margin-top:6px;">Na geladeira, embrulhados em <strong>pano úmido</strong>, saquinho ou papel filme.</p>', 'decay')}
            ${card('<strong>Folhas</strong><p style="font-size:.86rem;margin-top:6px;">Lave, <strong>seque bem</strong> com papel-toalha e guarde em potes; um papel-toalha dentro absorve a umidade. Secas, ficam crocantes.</p>', 'success')}
          </div>
          ${mini('Em duplas: produto perto da data de vencimento, bem mais barato. Você compraria?', ['Sim, sempre', 'Só se for consumir logo; se não, a economia pode virar perda', 'Nunca', 'Só se estiver vencido'], 1, 'Se for <strong>consumir rápido</strong>, a economia costuma girar em torno de 50%. Se não, atente à data para não perder o produto — e o dinheiro.')}`, { cls: 'success' }));

slides.push(sl('Aula 47 · para início de conversa', 'A pegadinha da matemática das promoções', `
          ${lede('Uma loja anuncia uma geladeira por <strong>R$ 1.000</strong> em dinheiro. Fora da promoção (preço normal), ela custa <strong>10% a mais</strong>. No cartão da loja há <strong>2% de desconto sobre o preço normal</strong>. A cliente pensou: "+10% −2% = +8%, então R$ 1.080". Mas no caixa foi outro valor!')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Preço promocional (R$)</label><input type="number" id="pg-p" value="1000" step="50"></div><div><label>Aumento (%)</label><input type="number" id="pg-a" value="10"></div><div><label>Desconto (%)</label><input type="number" id="pg-d" value="2"></div></div>
              <p class="small" style="margin:10px 0 0;">Preço normal: <b id="pg-n" class="mono"></b> · Preço real no cartão: <b id="pg-r" class="mono" style="color:var(--success);"></b></p>
              <p class="small" style="margin:4px 0 0;">Cálculo "errado" (a − d): <b id="pg-e" class="mono" style="color:var(--danger);"></b> · diferença: <b id="pg-df" class="mono"></b></p>
            </div>
            <div>
              ${callout('Qual é o erro?', '<strong>Percentuais aplicados sobre bases diferentes não se somam nem se subtraem diretamente!</strong> Os +10% são sobre R$ 1.000; os −2% são sobre R$ 1.100.', 'danger')}
              ${tbl(['conta', 'resultado'], [['R$ 1.000 + 10%', 'R$ 1.100'], ['R$ 1.100 − 2% (R$ 22)', '<b>R$ 1.078</b>'], ['Conta da cliente (+8% de 1.000)', 'R$ 1.080']])}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('ENEM 2022 · H4', 'Avaliar a razoabilidade de um resultado', `
          ${lede('Esse raciocínio foi cobrado no <strong>ENEM 2022 (MT, H4)</strong>: avaliar a razoabilidade de um resultado numérico ao construir argumentos sobre afirmações quantitativas. Aplicando à geladeira:')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Valor da loja</strong><div class="out" style="font-size:1.6rem;">R$ 1.078,00</div>', 'success')}
            ${card('<strong>Valor calculado pela cliente</strong><div class="out" style="font-size:1.6rem;color:var(--danger);">R$ 1.080,00</div>', 'danger')}
          </div>
          ${callout('Conclusão', 'O valor cobrado pela loja foi <strong>R$ 2 menor</strong> do que o da cliente. Percebe como a interpretação matemática do cotidiano é fundamental? Antes de acreditar numa conta rápida, <strong>teste se o resultado faz sentido</strong>.')}
          ${mini('Um produto de R$ 200 sobe 20% e depois cai 20%. O preço final é:', ['R$ 200', 'R$ 192', 'R$ 208', 'R$ 180'], 1, '200 × 1,20 = 240; 240 × 0,80 = <strong>R$ 192</strong>. +20% e −20% <em>não</em> se anulam: as bases são diferentes.')}`, { cls: 'primary' }));

slides.push(sl('Aula 47 · estudo de caso', 'A "super promoção" da Smart TV da Manuela', `
          ${lede('Manuela já tem uma TV que funciona bem, mas quer uma Smart de 32". O anúncio dá <strong>10% de desconto só à vista</strong>; no parcelado "não há juros", mas <strong>perde-se o desconto</strong>. Na prática, o juro está <strong>embutido no preço à vista</strong>.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Preço parcelado (R$)</label><input type="number" id="tv-p" value="1271" step="10"></div><div><label>Desconto à vista (%)</label><input type="number" id="tv-d" value="10"></div><div><label>Parcelas</label><input type="number" id="tv-n" value="10"></div></div>
              <p class="small" style="margin:10px 0 0;">À vista: <b id="tv-v" class="mono"></b> · parcela: <b id="tv-m" class="mono"></b> · a "economia" de pagar à vista: <b id="tv-e" class="mono"></b></p>
            </div>
            <div>
              ${callout('Pense antes', 'Será que se trata de uma promoção? Manuela deve aproveitar? <strong>O dinheiro deve realizar desejos com consciência</strong>: planeje a compra e avalie se a promoção é vantajosa.')}
              ${reveal('O que o histórico de preços mostra', '<p>No histórico, a TV custava <strong>R$ 800 em 10/08/2025</strong> e o preço médio atual é <strong>R$ 853</strong>, bem abaixo dos <strong>R$ 1.271</strong> da suposta "superpromoção": <strong>o desconto não era desconto</strong>.</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 47 · atividade 1', 'Compre 2, leve 3', `
          <div class="grid2">
            <div>
              ${callout('Caso do Pedro', 'Tem apenas <strong>um banheiro</strong>, mas, para aproveitar a promoção, comprou dois chuveiros e levou <strong>3</strong> para casa! Só compensa comprar 2 ou 3 se houver <strong>utilidade real e imediata</strong> (ex.: construindo uma casa com 2 ou 3 banheiros).', 'danger')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>O kit é mesmo vantajoso?</b></p>
              <div class="row"><div><label>Preço unitário (R$)</label><input type="number" id="kt-u" value="116.90" step="0.1"></div><div><label>Preço do kit (R$)</label><input type="number" id="kt-k" value="285.95" step="0.1"></div></div>
              <div class="row"><div><label>Pague (unid.)</label><input type="number" id="kt-a" value="2"></div><div><label>Leve (unid.)</label><input type="number" id="kt-b" value="3"></div></div>
              <p class="small" style="margin:10px 0 0;">Preço justo (pague × unitário): <b id="kt-j" class="mono"></b> · diferença: <b id="kt-d" class="mono"></b> · por unidade no kit: <b id="kt-pu" class="mono"></b></p>
              <p id="kt-t" style="margin:4px 0 0;font-weight:700;"></p>
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 47 · atividade 2', 'Black Friday: o preço-alvo para comprar', `
          ${lede('Na Black Friday, uma simples <strong>pesquisa de histórico de preços</strong> (Buscapé e similares) protege contra fraudes. Estratégia da aula: projetar o preço com <strong>20% de desconto</strong> sobre (a) o menor preço dos últimos 40 dias e (b) o preço atual; o <strong>preço-alvo</strong> é a média dos dois.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Produto</label><input type="text" id="bf-n" value="Cafeteira Mini C30"></div></div>
              <div class="row"><div><label>Preço atual (R$)</label><input type="number" id="bf-a" value="418" step="1"></div><div><label>Menor preço (R$)</label><input type="number" id="bf-m" value="360" step="1"></div><div><label>Desconto esperado (%)</label><input type="number" id="bf-d" value="20"></div></div>
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Melhor preço na Black Friday (desconto sobre o menor): <b id="bf-b" class="mono" style="color:var(--success);"></b></p>
              <p class="small" style="margin:4px 0;">Pior preço (desconto sobre o atual): <b id="bf-p" class="mono" style="color:var(--danger);"></b></p>
              <p class="small" style="margin:8px 0 0;">Preço-alvo para compra</p><div class="out" id="bf-t" style="font-size:1.8rem;"></div>
              <p class="hint" id="bf-h" style="margin:6px 0 0;"></p>
            </div>
          </div>
          ${reveal('Exemplo da aula (Cafeteira Mini C30, pesquisa de 20/08/2025)', '<p>Preço atual R$ 418 (20/08, o pior preço). Melhor data: 20/07, R$ 360. Black Friday: 20% sobre R$ 360 = <strong>R$ 288</strong>; 20% sobre R$ 418 = <strong>R$ 334,40</strong>. Preço-alvo (média): <strong>R$ 311,20</strong>.</p><p class="hint">Se na Black Friday o item estiver abaixo de R$ 334,40, é vantagem; o ideal era ter comprado em julho.</p>')}`, { cls: 'success' }));

slides.push(sintese([
  ['No mercado', 'Pesquise, vá com cardápio e lista, fixe um teto de gasto, substitua o que subiu e não desperdice (o pão custa!).'],
  ['Percentuais', 'Não se somam nem se subtraem quando as bases são diferentes: +10% e −2% não é +8%.'],
  ['Promoção de verdade', 'Compare com o histórico de preços, calcule o preço justo do kit e defina um preço-alvo antes da Black Friday.']
], '"Nem sempre o que está em promoção deve ser comprado."'));

slides.push(quizSlide([
  { q: 'Para economizar no mercado, o ideal é:', o: ['Ir sem lista para ver as ofertas', 'Fazer cardápio, lista de compras e seguir um teto de gasto', 'Comprar tudo em dobro', 'Ir com fome'], a: 1 },
  { q: 'Um pacote de pão de R$ 8,33 com 20 fatias: cada fatia custa aproximadamente:', o: ['R$ 0,42', 'R$ 0,83', 'R$ 4,17', 'R$ 0,04'], a: 0 },
  { q: 'Uma geladeira de R$ 1.000 sobe 10% e depois recebe 2% de desconto. O preço final é:', o: ['R$ 1.080', 'R$ 1.078', 'R$ 1.020', 'R$ 1.100'], a: 1 },
  { q: 'O preço-alvo de compra na Black Friday é calculado a partir de:', o: ['Do preço que a loja anuncia', 'Do menor preço dos últimos dias e do preço atual', 'Só do preço de ontem', 'Do preço da concorrente mais cara'], a: 1 },
  { q: 'Em "compre 2, leve 3", o preço justo do kit é:', o: ['Preço de 3 unidades', 'Preço de 2 unidades', 'Metade do preço', 'Preço de 1 unidade'], a: 1 }
]));

slides.push(refsSlide([
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>. Maceió: [s.n.], 2024.',
  'INEP. <em>Provas do ENEM</em> (ENEM 2020, Linguagens, questão 19; ENEM 2022, MT, H4).',
  'Sites de histórico de preços (ex.: Buscapé) para pesquisa; dados citados na aula, coletados em 20/08/2025.'
], 'Para continuar', 'Pesquise, compare, decida', 'Antes da próxima promoção, anote o preço do produto por algumas semanas: o histórico é a sua melhor defesa.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function tgUp(){ var t = +$('tg-t').value || 0, s = (+$('tg-l').value || 0) + (+$('tg-i').value || 0); $('tg-s').textContent = brl(s); var r = $('tg-r'); if(s <= t){ r.textContent = '✔ Dentro do teto (sobram ' + brl(t - s) + ').'; r.style.color = 'var(--success)'; } else { r.textContent = '✘ Estourou o teto em ' + brl(s - t) + ': tire itens ou substitua.'; r.style.color = 'var(--danger)'; } }
  ['tg-t','tg-l','tg-i'].forEach(function(i){ $(i).addEventListener('input', tgUp); }); tgUp();
  function paUp(){ var p = +$('pa-p').value || 0, f = +$('pa-f').value || 1, d = +$('pa-d').value || 0, n = +$('pa-n').value || 0, c = p / f; $('pa-c').textContent = brl(c); $('pa-r').textContent = brl(c * d * n) + ' em ' + n + ' dias'; }
  ['pa-p','pa-f','pa-d','pa-n'].forEach(function(i){ $(i).addEventListener('input', paUp); }); paUp();
  function pgUp(){ var p = +$('pg-p').value || 0, a = +$('pg-a').value || 0, d = +$('pg-d').value || 0, nor = p * (1 + a / 100), real = nor * (1 - d / 100), err = p * (1 + (a - d) / 100);
    $('pg-n').textContent = brl(nor); $('pg-r').textContent = brl(real); $('pg-e').textContent = brl(err); $('pg-df').textContent = brl(Math.abs(err - real)); }
  ['pg-p','pg-a','pg-d'].forEach(function(i){ $(i).addEventListener('input', pgUp); }); pgUp();
  function tvUp(){ var p = +$('tv-p').value || 0, d = (+$('tv-d').value || 0) / 100, n = Math.max(1, +$('tv-n').value || 1); $('tv-v').textContent = brl(p * (1 - d)); $('tv-m').textContent = n + '× ' + brl(p / n); $('tv-e').textContent = brl(p * d); }
  ['tv-p','tv-d','tv-n'].forEach(function(i){ $(i).addEventListener('input', tvUp); }); tvUp();
  function ktUp(){ var u = +$('kt-u').value || 0, k = +$('kt-k').value || 0, a = +$('kt-a').value || 1, b = +$('kt-b').value || 1, j = u * a;
    $('kt-j').textContent = brl(j); $('kt-d').textContent = brl(k - j); $('kt-pu').textContent = brl(k / b); var t = $('kt-t');
    if(Math.abs(k - j) < 0.005){ t.textContent = '✔ Kit honesto: o preço é o de ' + a + ' unidades.'; t.style.color = 'var(--success)'; } else if(k > j){ t.textContent = '⚠ O kit custa ' + brl(k - j) + ' a mais do que deveria: a promoção não é o que anuncia.'; t.style.color = 'var(--danger)'; } else { t.textContent = '✔ O kit custa ' + brl(j - k) + ' a menos que o preço de ' + a + ' unidades.'; t.style.color = 'var(--success)'; } }
  ['kt-u','kt-k','kt-a','kt-b'].forEach(function(i){ $(i).addEventListener('input', ktUp); }); ktUp();
  function bfUp(){ var a = +$('bf-a').value || 0, m = +$('bf-m').value || 0, d = (+$('bf-d').value || 0) / 100, b = m * (1 - d), p = a * (1 - d), t = (b + p) / 2;
    $('bf-b').textContent = brl(b); $('bf-p').textContent = brl(p); $('bf-t').textContent = brl(t); $('bf-h').textContent = 'Se na Black Friday "' + ($('bf-n').value || 'o produto') + '" estiver abaixo de ' + brl(p) + ', é vantagem; abaixo de ' + brl(t) + ', é ótima compra.'; }
  ['bf-n','bf-a','bf-m','bf-d'].forEach(function(i){ $(i).addEventListener('input', bfUp); }); bfUp();
`;

module.exports = { title: 'Compras Inteligentes: Supermercado e Promoções', brand: 'Compras e Promoções', aulas: 'Aulas 46, 47', serie: '1ª Série', key: 'consumo2', slides, extra, out: 'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes.html' };
