// 1ª série — Deck E: armadilhas de consumo e consumismo (aulas 44, 45)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Armadilhas de consumo e o <span style="color:var(--growth);">consumismo</span>',
  sub: 'Os truques que levam você a comprar sem precisar, a diferença entre consumo e consumismo e as três perguntas que protegem o seu bolso — e o planeta.',
  badges: [['AULAS 44, 45'], ['Quero? Preciso? Posso?', 'growth'], ['Preço terminado em 9', 'danger']],
  color: 'growth', curve: 'M40,60 C 180,70 260,160 400,150 C 540,140 660,60 840,40', end: [840, 40]
}));

slides.push(roteiroSlide('Do "só hoje!" à compra consciente.', [
  ['A oferta relâmpago', 'o que mais vai embora com o seu dinheiro?', 'bulb'],
  ['As armadilhas do consumo', 'grátis, "adeus cifrão", 10 por 10, urgência, preço em 9, limite por cliente', 'warn'],
  ['O que o CDC proíbe', 'venda casada, consumação mínima, limitação sem justificativa', 'shield'],
  ['Consumo x consumismo', 'o casaco de R$ 100 e o de R$ 500', 'scale'],
  ['O custo para o planeta', 'lixo, poluição e recursos finitos', 'leaf'],
  ['Quero? Preciso? Posso?', 'o filtro das três perguntas', 'target'],
  ['Estudo de caso', 'o figurino da peça de teatro', 'people']
]));

slides.push(objetivosSlide([
  'Conhecer as <strong>armadilhas do consumo</strong> para evitá-las.',
  'Compreender e diferenciar <strong>consumo de consumismo</strong>.',
  'Analisar as <strong>consequências</strong> do consumo e do consumismo (para o bolso, para as relações e para o ambiente).',
  'Adotar o filtro <strong>Quero? Preciso? Posso?</strong> antes de comprar.'
], 'Descritores', 'Hd01 — compreender formas de consumo · d02 — analisar consequências do consumo e/ou consumismo.', 'growth', 'growth-ink'));

slides.push(sl('Aula 44 · para início de conversa', 'A "oferta relâmpago" do fone', `
          <div class="grid2">
            <div>
              ${lede('Você já tem um fone funcionando, mas vê uma <strong>"Oferta Relâmpago"</strong> com contagem regressiva, "só hoje" e "últimas unidades". Quais estratégias visuais tentam convencer seu cérebro de que você precisa comprar <strong>agora</strong>?')}
              <div style="border:2px dashed var(--danger);border-radius:16px;padding:16px;text-align:center;background:var(--danger-soft);">
                <div class="mono" style="color:var(--danger);font-weight:700;">⚡ OFERTA RELÂMPAGO ⚡ <span id="tm">05:00</span></div>
                <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:1.6rem;margin:6px 0;">Fone Bluetooth <s style="color:var(--ink-faint);font-size:1rem;">R$ 299,90</s> <span style="color:var(--danger);">R$ 99,90</span></div>
                <div class="small">⚠ Restam apenas <b>3</b> unidades · 47 pessoas olhando agora</div>
              </div>
            </div>
            <div>
              ${callout('A publicidade vende estilos de vida e urgência', 'Cronômetro, riscado do preço antigo, estoque "quase acabando" e "outras pessoas olhando" disparam a pressa. <strong>Pressa é inimiga de quem compra bem.</strong>', 'danger')}
              ${reveal('E o que mais "vai embora" com o dinheiro?', '<p>Além do valor da etiqueta, a <strong>compra por impulso</strong> custa: dinheiro que faria falta, <strong>espaço e lixo</strong> quando o produto é descartado, <strong>recursos naturais</strong> usados para fabricar e transportar. Consumo não consciente afeta o seu bolso <em>e</em> o planeta.</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 44 · ENEM 2016 (Linguagens)', 'Consumo consciente em uma campanha', `
          ${lede('A questão analisa uma campanha publicitária sobre <strong>consumo de água</strong> e pergunta qual é o objetivo central do texto. Ela mostra que compramos por necessidade, mas também por influência social, publicidade, desejo de pertencimento e status.')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Qual foi o objetivo da campanha?', ['Incentivar a economia de água e o consumo consciente', 'Ensinar a higienizar produtos', 'Combater a exportação indireta de água', 'Divulgar vestuário reciclável', 'Mostrar custos aos produtores rurais'], 0, '<strong>Alternativa A</strong>: a campanha incentiva a economia de água e o consumo consciente. As demais desviam o foco (higiene, exportação, vestuário, produtores).')}</div>
            <div>${callout('Da questão para a nossa vida', 'Na Educação Financeira, essa reflexão ajuda a: <strong>diferenciar necessidade de desejo</strong>, reconhecer a persuasão da publicidade, evitar compras impulsivas, avaliar consequências e criar hábitos de consumo consciente.')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 44 · teoria', 'Armadilhas do consumo (parte 1)', `
          ${lede('São <strong>mecanismos do marketing de varejo</strong> que induzem as pessoas a comprar itens que, muitas vezes, nem precisam. Clique em cada armadilha:')}
          <div id="ar-chips" style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;"></div>
          <div class="wid"><p id="ar-t" style="margin:0 0 8px;font-weight:700;font-size:1.05rem;"></p><p id="ar-d" style="margin:0 0 8px;"></p><p id="ar-s" style="margin:0;font-weight:700;color:var(--success);"></p></div>`, { cls: 'danger' }));

slides.push(sl('Armadilha do "fator 9"', 'Por que R$ 7,99 parece mais barato que R$ 8,00?', `
          ${lede('Preços terminados em <strong>9, 99 ou 95</strong> são "preços psicológicos". Em leitura rápida, o cérebro "lê" <b>7,99</b> como <b>7</b>, e não como 8. Digite um preço e veja a diferença real:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Preço anunciado (R$)</label><input type="number" id="f9-p" value="7.99" step="0.01">
              <label>Quantidade comprada por mês</label><input type="number" id="f9-q" value="10" step="1">
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Você "lê" mentalmente</p><div class="out" id="f9-l" style="font-size:1.8rem;"></div>
              <p class="small" style="margin:6px 0 0;">Diferença real para o inteiro seguinte: <b id="f9-d" class="mono"></b></p>
              <p class="small" id="f9-t" style="margin:6px 0 0;"></p>
            </div>
          </div>
          ${callout('Pense', 'Quando todo preço da loja termina em 9, a loja ganha centavos <strong>e</strong> a sensação de pechincha. Compare preços pelo valor real, por unidade.', 'danger')}`, { cls: 'danger' }));

slides.push(sl('Aula 44 · e a lei?', 'Muitas armadilhas são ilegais', `
          ${lede('Segundo o <strong>art. 39 do CDC</strong>, é proibido ao fornecedor, entre outras práticas abusivas:')}
          <div class="grid3" style="margin-top:8px;">
            ${card('<strong>🚫 Venda casada</strong><p style="font-size:.88rem;margin-top:8px;">Condicionar a compra de um produto à compra de outro.</p>', 'danger')}
            ${card('<strong>🚫 Consumação mínima</strong><p style="font-size:.88rem;margin-top:8px;">Exigir gasto mínimo para permitir a permanência no estabelecimento.</p>', 'danger')}
            ${card('<strong>🚫 Limitação sem justificativa</strong><p style="font-size:.88rem;margin-top:8px;">Recusar atendimento ou impor limites de compra sem motivo justo.</p>', 'danger')}
          </div>
          <div class="grid2" style="margin-top:12px;">
            ${vf('"Só vendemos o notebook se você levar também o seguro."', false, 'Falsa (ilegal) — é <strong>venda casada</strong>: condicionar um produto à compra de outro.')}
            ${vf('"Limite de 3 unidades por cliente" com a justificativa de estoque limitado em uma promoção.', true, 'Pode ser legítimo quando há <strong>justificativa</strong> (estoque, promoção por tempo) e o limite está informado de forma clara. O problema é limitar <em>sem motivo justo</em>.')}
          </div>`, { cls: 'danger' }));

slides.push(sl('Atividade em duplas · 3 min', 'Esta oferta é uma armadilha?', `
          ${lede('Você e o colega já têm um fone, mas viram a "Oferta Relâmpago" e ficaram empolgados. Conversem sobre a frase: <strong>"Comprar para aproveitar a oferta!"</strong> Como saber se é uma armadilha?')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <p class="small" style="margin:0 0 6px;"><b>Detector de oferta</b></p>
              <div class="row"><div><label>Preço "de" (R$)</label><input type="number" id="of-a" value="299.90" step="1"></div><div><label>Preço "por" (R$)</label><input type="number" id="of-b" value="99.90" step="1"></div></div>
              <div class="row"><div><label>Preço médio dos últimos 3 meses (R$)</label><input type="number" id="of-m" value="109.90" step="1"></div></div>
              <p class="small" style="margin:10px 0 0;">Desconto anunciado: <b id="of-da" class="mono"></b> · Desconto real sobre o preço médio: <b id="of-dr" class="mono"></b></p>
              <p id="of-t" style="margin:6px 0 0;font-weight:700;"></p>
            </div>
            <div>
              ${reveal('Sugestão de resposta', '<p>Se o <strong>percentual de desconto anunciado não for verdadeiro</strong> (o "preço de" estava inflado), é armadilha — cilada!</p><p>Um produto só deve ser comprado <strong>se for necessário</strong>; caso contrário, será mero consumismo.</p>')}
              ${callout('Regra prática', 'Compare com o <strong>histórico de preços</strong>, não com o "preço de" da etiqueta. E espere 24 horas antes de decidir.', 'success')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 45 · para início de conversa', 'O casaco de R$ 100 e o de R$ 500', `
          <div class="grid2">
            ${card('<strong>Casaco sem marca — R$ 100</strong><p style="font-size:.9rem;margin-top:8px;">Mesmo tecido, mesma capacidade de aquecer. Resolve 100% do problema do frio.</p>', 'success')}
            ${card('<strong>Casaco com logotipo famoso — R$ 500</strong><p style="font-size:.9rem;margin-top:8px;">Mesmo tecido e aquecimento. A diferença de <strong>R$ 400</strong> paga o logotipo.</p>', 'danger')}
          </div>
          <div class="wid" style="margin-top:10px;">
            <div class="row"><div><label>Preço sem marca (R$)</label><input type="number" id="cs-a" value="100" step="10"></div><div><label>Preço com marca (R$)</label><input type="number" id="cs-b" value="500" step="10"></div></div>
            <p class="small" style="margin:10px 0 0;">Diferença: <b id="cs-d" class="mono"></b> · da conta, <b id="cs-p" class="mono"></b> vai só para a marca</p>
          </div>
          ${reveal('Muitas pessoas escolhem o mais caro. Por quê?', '<p>Quando o foco é <strong>se aquecer</strong>, o casaco de R$ 100 basta: é <strong>consumo</strong>, guiado pela necessidade. Pagar R$ 400 a mais pelo logotipo, para mostrar uma marca ou se sentir parte de um grupo, é <strong>consumismo</strong>: guiado por desejo, status e pertencimento.</p>')}`, { cls: 'growth' }));

slides.push(sl('Aula 45 · teoria', 'Consumo x consumismo', `
          ${tbl(['Consumo', 'Consumismo'], [['Necessidade e utilidade real', 'Desejo, status ou impulso emocional'], ['Decisão racional e planejada', 'Decisão emocional e precipitada'], ['Foco no uso contínuo do objeto', 'Foco na sensação imediata da compra']])}
          <p style="font-weight:700;margin:12px 0 8px;">Classifique as situações:</p>
          <div class="grid2">
            <div>${mini('Comprar um tênis novo porque o único par furou:', ['Consumo', 'Consumismo'], 0, '<strong>Consumo</strong>: há necessidade real e utilidade contínua.')}</div>
            <div>${mini('Comprar o 5º tênis só porque virou tendência na rede social:', ['Consumo', 'Consumismo'], 1, '<strong>Consumismo</strong>: decisão por desejo e pertencimento, não por necessidade.')}</div>
          </div>
          ${callout('Consumo por impulso', 'Gastar sem pensar porque "achou legal", "estava na promoção" ou "alguém influenciou" é consumir <strong>por impulso</strong> — a porta de entrada do consumismo.', 'danger')}`, { cls: 'growth' }));

slides.push(sl('ENEM 2016 · Linguagens', 'O que o consumismo mudou na nossa convivência?', `
          ${lede('Dois textos mostram que o consumismo fez uma "troca" na nossa cabeça: as coisas materiais ganharam valor demais e as <strong>pessoas passaram a ser julgadas pelo que compram</strong>. De acordo com os autores, o que o consumismo acabou mudando?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('A resposta correta (alternativa B) é:', ['A ascensão social é a causa principal do consumismo', 'O consumismo transforma valores, relações e comportamentos sociais', 'A publicidade é a única origem do consumismo', 'A busca da felicidade é a causa natural do consumo', 'As datas comemorativas são a origem do consumismo'], 1, '<strong>B</strong>: o consumismo transforma valores, relações e comportamentos sociais. Ascensão social, publicidade, felicidade e datas comemorativas são contextos que o intensificam, não a origem.')}</div>
            <div>${callout('Lembra do casaco?', 'Comprar o casaco de R$ 500 "para ser visto de certa forma" é exatamente o que esses textos descrevem — e a mesma reflexão caiu no ENEM.')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sl('Aula 45 · consequências', 'O que acontece quando compramos demais?', `
          <div class="grid2">
            <div>
              ${checks(['Criamos muito <strong>lixo</strong>.', 'Aumentamos a <strong>poluição</strong> do ar, da água e do solo.', 'Gastamos <strong>recursos naturais</strong> que não são infinitos.', 'Contribuímos para o <strong>aquecimento global</strong> e as mudanças climáticas.'], '.95rem')}
              ${callout('Consumir de forma consciente', 'É comprar o <strong>essencial</strong>, priorizando empresas <strong>socialmente responsáveis</strong>. Mudar hábitos é cuidar do planeta e do seu futuro.', 'success')}
            </div>
            <div>
              ${card('<strong>Influência do ambiente</strong><p style="font-size:.9rem;margin-top:8px;">Amigos e mídias empurram o consumo; os <strong>influencers</strong> ganham dinheiro influenciando as pessoas a comprar. Como o ambiente em que você está inserido pode levar você a comprar o que não precisa?</p>', 'growth')}
              ${reveal('Como combater o consumismo prejudicial ao meio ambiente?', '<p>Consumindo <strong>menos</strong> e de forma <strong>consciente</strong>: reaproveitar, consertar, alugar, comprar usado e só levar o que será usado.</p>')}
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 45 · o filtro', 'Quero? Preciso? Posso?', `
          ${lede('Antes de comprar, passe o item pelas três perguntas. Escolha um cenário e responda:')}
          <div id="qp-chips" style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;"></div>
          <div class="wid">
            <p id="qp-d" style="margin:0 0 10px;font-weight:700;"></p>
            <div class="row" id="qp-qs"></div>
            <p id="qp-r" style="margin:12px 0 0;font-weight:700;"></p>
          </div>
          <p class="hint" style="margin-top:6px;">1. Eu realmente <b>QUERO</b>? 2. Eu realmente <b>PRECISO</b> (necessidade ou impulso)? 3. Eu <b>POSSO</b> (a compra não vai custar mais caro lá na frente)?</p>`, { cls: 'growth' }));

slides.push(sl('Estudo de caso · 3 min', 'O figurino da princesa', `
          ${lede('<strong>Paloma</strong> vai atuar como princesa na peça final do curso de teatro e precisa de uma roupa perfeita. Um figurino importado novo custa, em média, <strong>R$ 300</strong>. Que estratégias permitem usar o figurino <strong>consumindo de forma consciente</strong>?')}
          <div class="grid2" style="margin-top:8px;">
            ${reveal('Sugestões de resposta', '<p>• <strong>Alugar</strong> a roupa.</p><p>• <strong>Improvisar</strong> com algo que ela já tem em casa.</p><p>• <strong>Produzir</strong> ela mesma ou pedir a uma costureira (avaliando se compensa).</p><p>• Comprar <strong>peças usadas</strong> em brechós.</p>')}
            ${callout('Você sabia?', 'O <strong>aluguel de roupas casuais</strong> é uma tendência crescente: startups como a "Não Tenho Roupa" incentivam valorizar peças que já existem, com escolhas mais conscientes, criativas e sustentáveis.', 'success')}
          </div>
          <div class="wid" style="margin-top:10px;">
            <div class="row"><div><label>Comprar novo (R$)</label><input type="number" id="fg-n" value="300" step="10"></div><div><label>Alugar (R$)</label><input type="number" id="fg-a" value="80" step="5"></div><div><label>Brechó (R$)</label><input type="number" id="fg-b" value="60" step="5"></div></div>
            <p class="small" style="margin:8px 0 0;">Economia alugando: <b id="fg-ea" class="mono"></b> · no brechó: <b id="fg-eb" class="mono"></b></p>
          </div>`, { cls: 'success' }));

slides.push(sintese([
  ['Armadilhas', 'Grátis, urgência, preço em 9 e "10 por 10" usam a psicologia a favor da loja. Algumas práticas são ilegais (CDC, art. 39).'],
  ['Consumo x consumismo', 'Consumo é necessidade e planejamento; consumismo é impulso, status e pertencimento — e custa ao bolso, às relações e ao planeta.'],
  ['O filtro', 'Quero? Preciso? Posso? Se a resposta a "preciso" ou "posso" for não, espere, pesquise e, se possível, escolha alternativas (alugar, usar, consertar).']
], '"Não é sobre deixar de comprar: é sobre comprar com consciência."'));

slides.push(quizSlide([
  { q: 'Preços terminados em 9 ou 99 são chamados de:', o: ['Preços psicológicos', 'Preços de custo', 'Preços tabelados', 'Preços de atacado'], a: 0 },
  { q: 'Condicionar a venda de um produto à compra de outro é:', o: ['Venda casada (prática abusiva)', 'Desconto progressivo', 'Garantia estendida', 'Cashback'], a: 0 },
  { q: 'Pagar R$ 500 em vez de R$ 100 só pelo logotipo, com o mesmo agasalho, é um exemplo de:', o: ['Consumo consciente', 'Consumismo', 'Poupança', 'Investimento'], a: 1 },
  { q: 'As três perguntas do consumo consciente são:', o: ['Quero? Preciso? Posso?', 'Onde? Quando? Quanto?', 'Barato? Bonito? Famoso?', 'Hoje? Amanhã? Sempre?'], a: 0 },
  { q: 'Qual destas é uma consequência ambiental do consumismo?', o: ['Menos lixo', 'Aumento do lixo e gasto de recursos naturais', 'Menos poluição', 'Mais recursos infinitos'], a: 1 }
]));

slides.push(refsSlide([
  'BRASIL. <em>Lei nº 8.078/1990</em> — Código de Defesa do Consumidor, art. 39.',
  'INEP. <em>Provas do ENEM 2016</em> — Linguagens, Códigos e suas Tecnologias (questões 103 e 105).',
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>. Maceió: [s.n.], 2024.'
], 'Para continuar', 'Comprar com consciência é um hábito', 'Na próxima aula: como fazer compras inteligentes no supermercado e como reconhecer promoções de verdade.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  (function(){ var s = 300; var el = $('tm'); if(!el) return; setInterval(function(){ s = s > 0 ? s - 1 : 300; el.textContent = ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + (s % 60)).slice(-2); }, 1000); })();
  var AR = [['O produto grátis', 'Oferecer algo de graça para atrair o consumidor para dentro da loja (ou do site), onde ele pode comprar outras coisas. Em Nova York, alguns bares davam "almoço grátis" a quem consumisse a cerveja caríssima que vendiam.', 'Defesa: pergunte quanto custa o que você vai comprar <em>para ganhar</em> o grátis.'], ['Adeus, cifrão', 'Estudos mostram que as pessoas gastam mais quando o símbolo R$ some do cardápio. Cardápios minimalistas, com valores exatos, fazem o cliente focar no alimento e não no preço.', 'Defesa: some os valores antes de pedir; defina um teto.'], ['10 por 10', 'Placas como "10 por R$ 10" fazem a pessoa achar que precisa comprar 3, 5 ou 10 unidades para "aproveitar". Muitas vezes o cliente não queria tantos.', 'Defesa: pergunte quanto custa <em>1</em> unidade e se o preço unitário caiu mesmo.'], ['Senso de urgência', '"Por tempo limitado" cria pressa: o consumidor compra rápido, sem pesquisar antes.', 'Defesa: durma uma noite. Ofertas boas costumam voltar.'], ['Fator 9', 'Preços que terminam em 9, 99 ou 95 são "preços psicológicos": o cérebro associa a desconto. Em leitura rápida, 7,99 vira 7 e não 8.', 'Defesa: arredonde para cima mentalmente.'], ['Limite por cliente', '"Limite de 2 por cliente" sugere escassez: "eu preciso muito deste produto tão raro!". Será mesmo?', 'Defesa: pergunte se a escassez é real e se você precisa do produto.']];
  var cb = $('ar-chips');
  AR.forEach(function(a, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = a[0]; b.addEventListener('click', function(){ cb.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); ar(k); }); cb.appendChild(b); });
  function ar(k){ $('ar-t').textContent = AR[k][0]; $('ar-d').textContent = AR[k][1]; $('ar-s').innerHTML = AR[k][2]; } ar(0);
  function f9Up(){ var p = +$('f9-p').value || 0, q = +$('f9-q').value || 0, lido = Math.floor(p), d = Math.ceil(p) - p;
    $('f9-l').textContent = 'R$ ' + lido + ',xx'; $('f9-d').textContent = brl(d); $('f9-t').textContent = d > 0 ? 'Em ' + q + ' compras por mês, a "ilusão" custa ' + brl(d * q) + ' a mais do que o seu cérebro registrou.' : 'Preço redondo: sem efeito psicológico.'; }
  ['f9-p','f9-q'].forEach(function(i){ $(i).addEventListener('input', f9Up); }); f9Up();
  function ofUp(){ var a = +$('of-a').value || 0, b = +$('of-b').value || 0, m = +$('of-m').value || 0; var da = a ? (1 - b / a) * 100 : 0, dr = m ? (1 - b / m) * 100 : 0;
    $('of-da').textContent = da.toFixed(0) + '%'; $('of-dr').textContent = dr.toFixed(0) + '%'; var t = $('of-t');
    if(dr < da - 15){ t.textContent = '⚠ O desconto real é bem menor que o anunciado: o "preço de" estava inflado. Cuidado!'; t.style.color = 'var(--danger)'; } else if(dr <= 0){ t.textContent = '✘ Não é promoção: custa o mesmo ou mais que o preço médio.'; t.style.color = 'var(--danger)'; } else { t.textContent = '✔ O desconto é próximo do real. Ainda assim: você precisa do produto?'; t.style.color = 'var(--success)'; } }
  ['of-a','of-b','of-m'].forEach(function(i){ $(i).addEventListener('input', ofUp); }); ofUp();
  function csUp(){ var a = +$('cs-a').value || 0, b = +$('cs-b').value || 0, d = b - a; $('cs-d').textContent = brl(d); $('cs-p').textContent = (b ? d / b * 100 : 0).toFixed(0) + '% do preço'; }
  ['cs-a','cs-b'].forEach(function(i){ $(i).addEventListener('input', csUp); }); csUp();
  function fgUp(){ var n = +$('fg-n').value || 0, a = +$('fg-a').value || 0, b = +$('fg-b').value || 0; $('fg-ea').textContent = brl(n - a); $('fg-eb').textContent = brl(n - b); }
  ['fg-n','fg-a','fg-b'].forEach(function(i){ $(i).addEventListener('input', fgUp); }); fgUp();
  var QP = [['Um videogame de R$ 4.500 que um influenciador mostrou. Você ainda paga o celular novo em 10 parcelas.', 1, 0, 0], ['Um tênis novo: o único par furou e você usa todo dia. Cabe no orçamento do mês.', 1, 1, 1], ['A 3ª jaqueta preta da loja, "só hoje", que você não tem onde usar.', 1, 0, 1], ['Um caderno para a escola, na lista de material, no valor planejado.', 1, 1, 1]];
  var qc = $('qp-chips'), cur = 0, ans = [null, null, null];
  QP.forEach(function(c, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = 'Cenário ' + (k + 1); b.addEventListener('click', function(){ qc.querySelectorAll('.chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); qp(k); }); qc.appendChild(b); });
  function qp(k){ cur = k; ans = [null, null, null]; $('qp-d').textContent = QP[k][0]; $('qp-r').textContent = ''; var h = ''; ['QUERO?', 'PRECISO?', 'POSSO?'].forEach(function(q, i){ h += '<div><p class="small" style="margin:0 0 4px;"><b>' + q + '</b></p><button class="chip" data-q="' + i + '" data-v="1" type="button">Sim</button> <button class="chip" data-q="' + i + '" data-v="0" type="button">Não</button></div>'; }); $('qp-qs').innerHTML = h;
    $('qp-qs').querySelectorAll('.chip').forEach(function(b){ b.addEventListener('click', function(){ var i = +b.dataset.q; ans[i] = +b.dataset.v; $('qp-qs').querySelectorAll('[data-q="' + i + '"]').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); fin(); }); }); }
  function fin(){ if(ans.indexOf(null) >= 0){ return; } var c = QP[cur], ok = ans[0] === c[1] && ans[1] === c[2] && ans[2] === c[3], r = $('qp-r');
    var dec = (c[1] && c[2] && c[3]) ? 'Pode comprar com consciência.' : 'Espere: algum dos três "sim" falta.'; r.textContent = (ok ? '✔ Seu raciocínio bate com o da aula. ' : '↻ Releia o cenário: a sugestão é "quero ' + (c[1] ? 'sim' : 'não') + ' · preciso ' + (c[2] ? 'sim' : 'não') + ' · posso ' + (c[3] ? 'sim' : 'não') + '". ') + dec; r.style.color = ok ? 'var(--success)' : 'var(--growth)'; }
  qp(0);
`;

module.exports = { title: 'Armadilhas de Consumo e Consumismo', brand: 'Consumo Consciente', aulas: 'Aulas 44, 45', serie: '1ª Série', key: 'consumo1', slides, extra, out: 'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo.html' };
