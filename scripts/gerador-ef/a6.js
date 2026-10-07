// 1ª série — atividades "Criativas" (7 novas + 3 de apostas reaproveitadas da 2ª série)
const a3 = require('./a3.js'), a1 = require('./a1.js'), a2 = require('./a2.js');
const CSS = a3.CSS;
const dir = 'educacao-financeira/1-ano/3-tri/';
const mk = o => ({ kind: 'free', ...o });

/* 1 · Quem eu pago primeiro? */
const c1 = mk({
  out: dir + 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-criativa.html', key: 'c1-criativa',
  title: 'Quem eu pago primeiro? Jogo das dívidas', brand: 'Crédito e Juros Compostos', cls: 'danger',
  eyebrow: 'Atividade criativa · jogo de decisão · aulas 36 e 37', pill: 'Conquistas: <span id="scoreVal">0</span>/3',
  h1: 'Quem eu pago <span style="color:var(--danger);">primeiro</span>?',
  subtitle: 'Você tem <strong>3 dívidas</strong> e só <strong>R$ 400 por mês</strong> para pagar. A cada mês, distribua o dinheiro em fatias de R$ 100 e depois feche o mês: os juros aplicam sobre o que sobrou. Atravesse <strong>6 meses</strong> e cumpra as 3 conquistas.',
  body: CSS + `
  <div class="callout danger"><h4>Simulação sem dinheiro real</h4><p>Taxas das aulas: cheque especial 9,78% ao mês, cartão 16% ao mês e financiamento da moto 3% ao mês. Pague com sabedoria: cada real parado cresce em ritmo diferente.</p></div>
  <div class="card"><div class="row2" style="margin:0;justify-content:space-between;"><span class="badge">Mês <b id="mm">1</b>/6</span><span class="badge">Dinheiro do mês: <b id="pool">R$ 400</b></span><span class="badge">Dívida total: <b id="tot"></b></span></div></div>
  <div class="grid3" id="ds" style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));gap:12px;"></div>
  <div class="row2"><button class="btn" id="fc" type="button">Fechar o mês ▶</button><button class="btn ghost" id="rs" type="button">Recomeçar</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Seis meses depois…</h4><div id="fm"></div></div>`,
  script: `
  var D0 = [['Cheque especial', 600, 0.0978, 'var(--growth)'], ['Cartão (rotativo)', 900, 0.16, 'var(--danger)'], ['Financiamento da moto', 1500, 0.03, 'var(--primary)']];
  var debt, pool, month, hist, ds = document.getElementById('ds');
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
  function total(a){ return a.reduce(function(s, x){ return s + x; }, 0); }
  function optimal(){ var d = D0.map(function(x){ return x[1]; }), order = [1, 0, 2]; for(var m = 0; m < 6; m++){ var p = 400; order.forEach(function(k){ var pay = Math.min(p, d[k]); d[k] -= pay; p -= pay; }); d = d.map(function(x, k){ return x * (1 + D0[k][2]); }); } return d; }
  function render(){
    ds.innerHTML = '';
    D0.forEach(function(x, k){ var el = document.createElement('div'); el.className = 'asset'; el.innerHTML = '<h4 style="color:' + x[3] + ';">' + x[0] + '</h4><div class="small">juros: ' + (x[2] * 100).toFixed(2).replace('.', ',') + '% a.m.</div><div class="out" style="font-size:1.3rem;color:var(--ink);">' + brl(debt[k]) + '</div><div class="row2" style="margin:8px 0 0;"><button class="mini-btn" type="button">Pagar até R$ 100</button></div>';
      var b = el.querySelector('button'); b.disabled = pool < 0.005 || debt[k] <= 0.005 || month > 6; b.addEventListener('click', function(){ var pay = Math.min(100, debt[k], pool); debt[k] -= pay; pool -= pay; render(); }); ds.appendChild(el); });
    document.getElementById('mm').textContent = Math.min(month, 6); document.getElementById('pool').textContent = brl(pool); document.getElementById('tot').textContent = brl(total(debt)); document.getElementById('fc').disabled = month > 6;
  }
  function end(){
    var opt = total(optimal()), fin = total(debt), start = total(D0.map(function(x){ return x[1]; }));
    var g1 = fin <= opt * 1.02, g2 = debt[1] <= 0.005, g3 = fin < start, sc = (g1 ? 1 : 0) + (g2 ? 1 : 0) + (g3 ? 1 : 0);
    document.getElementById('scoreVal').textContent = sc;
    document.getElementById('fm').innerHTML = '<p>Dívida total: <b>' + brl(fin) + '</b> (começou em ' + brl(start) + '). A melhor estratégia possível teria terminado em <b>' + brl(opt) + '</b>.</p><ul class="crit"><li class="' + (g1 ? 'ok' : 'no') + '">' + (g1 ? '✔' : '✘') + ' Estratégia quase ótima (até 2% acima do melhor resultado)</li><li class="' + (g2 ? 'ok' : 'no') + '">' + (g2 ? '✔' : '✘') + ' Cartão quitado (a dívida mais cara)</li><li class="' + (g3 ? 'ok' : 'no') + '">' + (g3 ? '✔' : '✘') + ' Dívida total menor que a de partida</li></ul><p class="hint">Regra de ouro: quando não dá para pagar tudo, pague primeiro a dívida de <b>maior taxa</b> (cartão, depois cheque especial) e mantenha as outras em dia no mínimo.</p>';
    document.getElementById('fin').style.display = 'block';
    try{ window.reportarConclusao(sc, 3); }catch(e){}
  }
  function init(){ debt = D0.map(function(x){ return x[1]; }); pool = 400; month = 1; document.getElementById('fin').style.display = 'none'; document.getElementById('scoreVal').textContent = 0; render(); }
  document.getElementById('fc').addEventListener('click', function(){ debt = debt.map(function(x, k){ return x * (1 + D0[k][2]); }); month++; pool = 400; if(month > 6){ render(); end(); } else { render(); } });
  document.getElementById('rs').addEventListener('click', init); init();`
});

/* 2 · Ranking de ofertas */
const c2 = mk({
  out: dir + 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-criativa.html', key: 'c2-criativa',
  title: 'Ranking das ofertas de parcelamento', brand: 'Financiamento e Calculadora Financeira', cls: '',
  eyebrow: 'Atividade criativa · ranking · aulas 38 e 40', pill: 'Posições certas: <span id="scoreVal">0</span>/4',
  h1: 'Qual oferta é a <span style="color:var(--primary);">mais barata</span>?',
  subtitle: 'Uma TV custa <strong>R$ 1.000 à vista</strong>. Quatro lojas oferecem parcelamentos diferentes. <strong>Clique nas ofertas na ordem, da MAIS BARATA para a MAIS CARA</strong> (total pago). Faça as contas antes — só vale clicar quando tiver certeza!',
  body: CSS + `
  <div class="callout"><h4>Dica</h4><p>Total pago = entrada + prestações. Compare com os R$ 1.000 à vista: a diferença é o custo do crédito. Depois do 4º clique, os totais são revelados.</p></div>
  <div class="grid2" id="of" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));gap:12px;"></div>
  <p class="small" id="ord" style="margin-top:10px;font-weight:700;"></p>
  <div class="row2"><button class="btn ghost" id="rs" type="button">Recomeçar</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Resultado</h4><div id="fm"></div></div>`,
  script: `
  var O = [['Loja Alfa', '10 prestações de R$ 108,00', 1080], ['Loja Beta', 'entrada de R$ 200 + 4 prestações de R$ 215', 1060], ['Loja Gama', '12 prestações de R$ 95,00', 1140], ['Loja Delta', '6 prestações de R$ 175,00', 1050]];
  var rank = O.map(function(o, i){ return {i: i, t: o[2]}; }).sort(function(a, b){ return a.t - b.t; }).map(function(x){ return x.i; });
  var pos, ok, box = document.getElementById('of');
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
  function init(){ pos = []; ok = 0; document.getElementById('scoreVal').textContent = 0; document.getElementById('fin').style.display = 'none'; document.getElementById('ord').textContent = ''; box.innerHTML = '';
    O.forEach(function(o, i){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.style.margin = '0'; b.innerHTML = '<strong>' + o[0] + '</strong><br>' + o[1] + '<span class="small tt" style="display:none;"></span>'; b.addEventListener('click', function(){ if(b.dataset.done) return; b.dataset.done = 1; var k = pos.length; pos.push(i); var good = rank[k] === i; if(good) ok++; b.classList.add(good ? 'correct' : 'wrong'); b.insertAdjacentHTML('afterbegin', '<span class="badge" style="margin-right:6px;">' + (k + 1) + 'º</span>'); document.getElementById('scoreVal').textContent = ok; if(pos.length === O.length) fim(); else document.getElementById('ord').textContent = 'Escolhidas: ' + pos.length + ' de 4'; }); box.appendChild(b); }); }
  function fim(){
    var btns = box.querySelectorAll('.choice'); O.forEach(function(o, i){ var t = btns[i].querySelector('.tt'); t.style.display = 'block'; t.innerHTML = '<b>Total: ' + brl(o[2]) + '</b> · custo do crédito: ' + brl(o[2] - 1000) + ' (' + ((o[2] / 1000 - 1) * 100).toFixed(1).replace('.', ',') + '%)'; });
    document.getElementById('fm').innerHTML = '<p>Ordem correta (da mais barata para a mais cara): <b>' + rank.map(function(i){ return O[i][0] + ' (' + brl(O[i][2]) + ')'; }).join(' → ') + '</b>.</p><p>Você acertou <b>' + ok + '</b> posições. Repare: a <b>menor prestação</b> (Loja Gama, R$ 95) é a oferta <b>mais cara</b> no total. Olhar só a parcela cabe no orçamento do mês — e pode custar R$ 140 de juros.</p>';
    document.getElementById('fin').style.display = 'block'; try{ window.reportarConclusao(ok, 4); }catch(e){}
  }
  document.getElementById('rs').addEventListener('click', init); init();`
});

/* 3 · Vida financeira: 6 decisões */
const c3 = mk({
  out: dir + 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-criativa.html', key: 'c3-criativa',
  title: 'Score Quest: 6 decisões que mexem no seu score', brand: 'Cartão de Crédito e Score', cls: 'danger',
  eyebrow: 'Atividade criativa · jogo de decisões · aulas 39 e 43', pill: 'Melhores escolhas: <span id="scoreVal">0</span>/6',
  h1: 'Score <span style="color:var(--primary);">Quest</span>',
  subtitle: 'Você começa com <strong>1.000 pontos</strong>. Em cada situação, escolha o que faria. O score muda na hora — e no fim você descobre sua faixa e quais foram as melhores escolhas. (Pontuação didática, como a da aula.)',
  body: CSS + `
  <div class="card"><div class="row2" style="margin:0;justify-content:space-between;"><span class="badge">Situação <b id="st">1</b>/6</span><span class="badge">Score: <b id="sc">1000</b></span></div><div class="bar" style="height:16px;margin-top:10px;"><span id="sb" style="background:var(--success);width:100%"></span></div><p class="small" id="sf" style="margin:6px 0 0;font-weight:700;"></p></div>
  <div class="card" id="q" style="margin-top:12px;"></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Resultado final</h4><div id="fm"></div></div>`,
  script: `
  var S = [
    ['A fatura de R$ 900 vence hoje e você tem os R$ 900.', [['Pago a fatura inteira', 10, 1, 'Pagar integralmente evita juros e mostra bom pagador.'], ['Pago só o mínimo e uso o resto', -20, 0, 'Pagar o mínimo gera juros altíssimos do rotativo.'], ['Deixo vencer para pagar depois', -50, 0, 'Atraso derruba o score e gera multa e juros.']]],
    ['Um amigo "com nome sujo" pede seu cartão para comprar uma geladeira.', [['Recuso e ajudo de outro jeito', 0, 1, 'A dívida seria sua: recusar protege seu nome.'], ['Empresto: amigo é amigo', -50, 0, 'Se ele não pagar, você é negativado.'], ['Empresto, mas ele "me paga depois"', -30, 0, 'Sem garantia, o risco continua com você.']]],
    ['A conta de luz está atrasada há 3 dias.', [['Pago hoje, mesmo com o juro pequeno', -5, 1, 'Atraso curto custa pouco: resolva já.'], ['Deixo mais um mês', -50, 0, 'Atrasos de 30 dias pesam bem mais.'], ['Esqueço, depois vejo', -50, 0, 'Esquecer é o caminho para a negativação.']]],
    ['Você tem uma dívida antiga (mais de 1 ano) que cresceu.', [['Renegocio e pago agora', 25, 1, 'Renegociar melhora o histórico.'], ['Ignoro: um dia prescreve', -60, 0, 'Dívida ignorada mantém o nome sujo e os juros correndo.'], ['Pego outro empréstimo para pagar', -20, 0, 'Trocar uma dívida cara por outra pode piorar.']]],
    ['Promoção "sem juros" e seu limite ainda tem espaço.', [['Compro só o que preciso e cabe na renda', 0, 1, 'Limite não é renda: planeje pelo orçamento.'], ['Uso todo o limite', -40, 0, 'Comprometer o limite inteiro leva a atrasos.'], ['Peço aumento de limite para comprar mais', -60, 0, 'Mais limite sem mais renda aumenta o risco.']]],
    ['Aparece um anúncio: "Limpamos seu nome por R$ 300, garantido!"', [['Consulto meu score e CPF nos canais oficiais', 10, 1, 'Consultar o score é gratuito nos canais oficiais.'], ['Ignoro e não olho o score', 0, 0, 'Ignorar não ajuda: acompanhe o seu score.'], ['Pago os R$ 300 para limpar', -80, 0, 'Golpe: ninguém "limpa nome" por taxa. Renegocie direto com o credor.']]]
  ];
  var i, sc, best, box = document.getElementById('q');
  function show(){
    var s = S[i]; document.getElementById('st').textContent = i + 1; box.innerHTML = '<p style="font-weight:700;margin:0 0 10px;">' + s[0] + '</p>';
    s[1].forEach(function(o){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.textContent = o[0]; b.addEventListener('click', function(){ choose(o, b); }); box.appendChild(b); });
  }
  function band(v){ return v <= 300 ? 'Muito baixo' : v <= 500 ? 'Baixo' : v <= 700 ? 'Bom' : 'Excelente'; }
  function choose(o, btn){
    box.querySelectorAll('.choice').forEach(function(b){ b.disabled = true; }); btn.classList.add(o[2] ? 'correct' : 'wrong'); sc = Math.max(0, Math.min(1000, sc + o[1])); if(o[2]) best++;
    document.getElementById('sc').textContent = sc; document.getElementById('sb').style.width = (sc / 10) + '%'; document.getElementById('scoreVal').textContent = best;
    var d = document.createElement('p'); d.className = 'fb ' + (o[2] ? 'ok' : 'no'); d.textContent = (o[1] >= 0 ? '+' : '') + o[1] + ' pontos — ' + o[3]; box.appendChild(d);
    var nx = document.createElement('button'); nx.type = 'button'; nx.className = 'btn'; nx.textContent = i === S.length - 1 ? 'Ver resultado' : 'Próxima situação'; nx.style.marginTop = '10px'; nx.addEventListener('click', function(){ i++; if(i < S.length) show(); else fim(); }); box.appendChild(nx);
  }
  function fim(){ box.style.display = 'none'; document.getElementById('sf').textContent = 'Faixa: ' + band(sc);
    document.getElementById('fm').innerHTML = '<p>Score final: <b>' + sc + '</b> (faixa <b>' + band(sc) + '</b>). Você fez a melhor escolha em <b>' + best + '</b> de ' + S.length + ' situações.</p><p class="hint">Pagar em dia, não emprestar o cartão, renegociar dívidas e consultar o score por canais oficiais constroem um bom histórico.</p>';
    document.getElementById('fin').style.display = 'block'; try{ window.reportarConclusao(best, S.length); }catch(e){} }
  i = 0; sc = 1000; best = 0; show();`
});

/* 4 · Júri do consumidor */
const d = mk({
  out: dir + 'direitos-do-consumidor/atividade-criativa.html', key: 'dc-criativa',
  title: 'Júri do consumidor: qual direito vale?', brand: 'Direitos do Consumidor', cls: '',
  eyebrow: 'Atividade criativa · júri · aula 42', pill: 'Casos julgados: <span id="scoreVal">0</span>/6',
  h1: 'Júri do <span style="color:var(--success);">consumidor</span>',
  subtitle: 'Seis casos chegaram ao PROCON. Em cada um, escolha <strong>qual direito ou regra do CDC se aplica</strong> — e leia a sentença.',
  body: CSS + `<div id="cs"></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Júri encerrado!</h4><p id="fm" style="margin:0;"></p></div>`,
  script: `
  var C = [
    ['O fone comprado em loja física parou de funcionar 10 dias depois.', ['O fornecedor tem 30 dias para sanar o defeito; depois, você escolhe troca, abatimento ou devolução', 'Nada: só vale na loja virtual', 'Só se a embalagem estiver lacrada', 'O consumidor paga uma taxa para o conserto'], 0, 'Vício do produto (art. 18): 30 dias para o fornecedor sanar; se não resolver, troca, abatimento do preço ou devolução do dinheiro.'],
    ['Você comprou uma jaqueta pela internet e, no 5º dia depois de receber, decidiu devolver.', ['Direito de arrependimento em 7 dias, sem justificar', 'Não pode devolver nunca', 'Só com defeito', 'Só em 30 dias com nota'], 0, 'Compra fora do estabelecimento: arrependimento em até 7 dias após o recebimento (art. 49), com devolução do valor.'],
    ['O restaurante exige que cada cliente consuma no mínimo R$ 80 para ficar na mesa.', ['Prática abusiva: consumação mínima', 'É permitido sempre', 'É um direito do dono', 'Só é proibido aos domingos'], 0, 'Exigir gasto mínimo para permanência é prática abusiva (art. 39 do CDC).'],
    ['A loja só vende o celular se você comprar também um seguro.', ['Venda casada (prática abusiva)', 'Desconto progressivo', 'Garantia estendida obrigatória', 'Promoção válida'], 0, 'Condicionar a compra de um produto à compra de outro é venda casada (art. 39, I).'],
    ['A empresa cobra uma dívida ligando para o seu trabalho e expondo você a ridículo.', ['Cobrança abusiva: art. 71 do CDC (constrangimento)', 'Direito normal do credor', 'Dever do consumidor', 'Regra da Receita Federal'], 0, 'Usar ameaça, coação ou constrangimento na cobrança é crime (art. 71): detenção de 3 meses a 1 ano e multa.'],
    ['A etiqueta do iogurte mostra só "R$ 7,39", sem o preço por quilo.', ['Direito à informação, inclusive do preço por unidade de medida', 'Não há direito nenhum', 'Só valem os preços de farmácia', 'A loja decide'], 0, 'O CDC garante informação clara e o preço por unidade de medida (kg, litro, metro).']
  ];
  var box = document.getElementById('cs'), score = 0, done = 0;
  C.forEach(function(c, k){
    var el = document.createElement('div'); el.className = 'card'; el.style.marginBottom = '12px';
    var idx = [0, 1, 2, 3].sort(function(){ return Math.random() - .5; });
    el.innerHTML = '<span class="badge">Caso ' + (k + 1) + '</span><p style="margin:10px 0;font-weight:700;">' + c[0] + '</p>' + idx.map(function(j){ return '<button class="choice" type="button" data-j="' + j + '">' + c[1][j] + '</button>'; }).join('') + '<div class="fb"></div><div class="answer"><p>' + c[3] + '</p></div>';
    el.querySelectorAll('.choice').forEach(function(b){ b.addEventListener('click', function(){ if(el.dataset.done) return; el.dataset.done = 1; var ok = +b.dataset.j === c[2]; el.querySelectorAll('.choice').forEach(function(x){ x.disabled = true; if(+x.dataset.j === c[2]) x.classList.add('correct'); }); if(!ok) b.classList.add('wrong'); var fb = el.querySelector('.fb'); fb.textContent = ok ? '✔ Sentença acertada!' : '✘ Não era esse o direito:'; fb.className = 'fb ' + (ok ? 'ok' : 'no'); el.querySelector('.answer').classList.add('open'); done++; if(ok){ score++; document.getElementById('scoreVal').textContent = score; }
      if(done === C.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('fm').textContent = 'Você acertou ' + score + ' de ' + C.length + ' casos. Guarde: prazo de 30 dias para vícios, 7 dias de arrependimento fora da loja, nada de consumação mínima, venda casada ou cobrança vexatória.'; try{ window.reportarConclusao(score, C.length); }catch(e){} } }); });
    box.appendChild(el);
  });`
});

/* 5 · Armadilhas na loja virtual */
const e1 = mk({
  out: dir + 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-criativa.html', key: 'cc1-criativa',
  title: 'Caça às armadilhas na loja virtual', brand: 'Consumo Consciente', cls: 'danger',
  eyebrow: 'Atividade criativa · caça às armadilhas · aulas 44 e 45', pill: 'Armadilhas: <span id="scoreVal">0</span>/7',
  h1: 'Caça às <span style="color:var(--danger);">armadilhas</span>',
  subtitle: 'Esta é uma <strong>loja virtual fictícia</strong>. Clique nos elementos que são <strong>armadilhas de consumo</strong> para marcá-los. Depois clique em "Conferir": cada armadilha achada vale 1 ponto, e marcar o que é neutro desconta 1.',
  body: CSS + `
  <div style="border:2px solid var(--line-strong);border-radius:18px;padding:16px;background:var(--surface);">
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;"><b>🛍 SuperLoja.com</b><span id="sp0"></span></div>
    <hr class="hairline" style="height:1px;background:var(--line);border:0;margin:10px 0;">
    <div class="grid2" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start;">
      <div style="aspect-ratio:1;border-radius:14px;background:linear-gradient(135deg,#9089F5,#44D8CF);display:flex;align-items:center;justify-content:center;font-size:4rem;">🎧</div>
      <div id="pg" style="line-height:2.1;"></div>
    </div>
  </div>
  <div class="row2"><button class="btn" id="cf" type="button">Conferir</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Resultado</h4><div id="fm"></div></div>`,
  script: `
  var EL = [['Fone Bluetooth Pro X2', 0, 'Nome do produto: neutro.'], ['⚡ OFERTA RELÂMPAGO: termina em 04:59', 1, 'Senso de urgência: pressa para você não pesquisar.'], ['De R$ 299,90 por', 1, 'Preço de referência inflado: o desconto pode ser fantasma. Compare com o histórico.'], ['R$ 99,99', 1, 'Fator 9: preços terminados em 9 parecem menores do que são.'], ['Restam apenas 2 unidades!', 1, 'Escassez: sugere que você precisa decidir já.'], ['47 pessoas estão vendo este produto agora', 1, 'Pressão social: faz você temer perder para outros.'], ['Frete grátis acima de R$ 150: adicione mais itens!', 1, 'Incentivo a comprar mais do que precisa só para "ganhar" o frete.'], ['Descrição técnica e dimensões', 0, 'Informação do produto: neutra e útil.'], ['Avaliações de clientes (4,3/5)', 0, 'Informação útil (leia as críticas, não só a nota).'], ['Política de troca em 7 dias', 0, 'Informação legítima: direito do consumidor.']];
  var pg = document.getElementById('pg'), score = 0, done = false;
  EL.forEach(function(e, k){ var d = document.createElement('div'); var b = document.createElement('button'); b.type = 'button'; b.className = 'sp'; b.textContent = e[0]; b.dataset.k = k; b.addEventListener('click', function(){ if(done) return; b.classList.toggle('mk'); }); d.appendChild(b); pg.appendChild(d); });
  document.getElementById('cf').addEventListener('click', function(){
    if(done) return; done = true; var found = 0, fp = 0, miss = [], why = '';
    pg.querySelectorAll('.sp').forEach(function(s){ var e = EL[+s.dataset.k], mk = s.classList.contains('mk'); s.classList.remove('mk'); if(e[1] && mk){ found++; s.classList.add('hit'); } else if(e[1] && !mk){ s.classList.add('miss'); miss.push(e); } else if(!e[1] && mk){ fp++; s.classList.add('fp'); } if(e[1]) why += '<p><b>“' + e[0] + '”</b> — ' + e[2] + '</p>'; });
    score = Math.max(0, found - fp); document.getElementById('scoreVal').textContent = score;
    document.getElementById('fm').innerHTML = '<p>Você achou <b>' + found + '</b> de 7 armadilhas e marcou <b>' + fp + '</b> elemento(s) neutro(s). Pontuação: <b>' + score + '</b>/7.</p>' + why + '<p class="hint">Verde: achada · sublinhado vermelho: passou batida · riscado: era neutro. Defesa: espere 24 horas, compare com o histórico e pergunte "quero? preciso? posso?".</p>';
    document.getElementById('fin').style.display = 'block'; try{ window.reportarConclusao(score, 7); }catch(e){} });`
});

/* 6 · Carrinho com teto */
const e2 = mk({
  out: dir + 'consumo-consciente/aula-2-supermercado-promocoes-atividade-criativa.html', key: 'cc2-criativa',
  title: 'Monte o carrinho com teto de gasto', brand: 'Compras e Promoções', cls: '',
  eyebrow: 'Atividade criativa · carrinho do mercado · aulas 46 e 47', pill: 'Metas: <span id="scoreVal">0</span>/3',
  h1: 'O carrinho do <span style="color:var(--success);">mercado</span>',
  subtitle: 'Sua família tem um <strong>teto de R$ 250</strong> para a semana. Clique nos produtos para colocar ou tirar do carrinho e cumpra as <strong>3 metas</strong>: não estourar o teto, levar <strong>todos os essenciais</strong> e no máximo <strong>1 item de impulso</strong>.',
  body: CSS + `
  <div class="card"><div class="row2" style="margin:0;justify-content:space-between;"><span class="badge">Teto: R$ 250,00</span><span class="badge">No carrinho: <b id="tt">R$ 0,00</b></span><span class="badge">Sobra: <b id="sb">R$ 250,00</b></span></div><div class="bar" style="height:16px;margin-top:10px;"><span id="bb" style="background:var(--success);width:0%"></span></div></div>
  <div class="grid3" id="pd" style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));gap:10px;"></div>
  <ul class="crit" id="mt" style="margin-top:12px;"></ul>
  <div class="row2"><button class="btn" id="fc" type="button">Fechar a compra</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Compra fechada!</h4><div id="fm"></div></div>`,
  script: `
  var P = [['Arroz 5 kg', 28.9, 'E', '🍚'], ['Feijão 1 kg', 9.5, 'E', '🫘'], ['Frango 1,2 kg', 24, 'E', '🍗'], ['Verduras e legumes', 18, 'E', '🥬'], ['Leite (caixa com 12)', 36, 'E', '🥛'], ['Detergente e sabão', 9, 'E', '🧼'], ['Pão de forma (promoção!)', 8.33, 'O', '🍞'], ['Suco em caixa', 11, 'O', '🧃'], ['Refrigerante 3 L "−30%"', 14, 'I', '🥤'], ['Biscoito recheado (3 por 12)', 12, 'I', '🍪'], ['Sorvete 2 L "só hoje"', 16, 'I', '🍨'], ['Chocolate importado', 22, 'I', '🍫']];
  var sel = P.map(function(){ return false; }), box = document.getElementById('pd'), TT = 250;
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
  var tag = {E: ['essencial', 'var(--success)'], O: ['ocasional', 'var(--decay)'], I: ['impulso?', 'var(--danger)']};
  function metas(){ var t = 0, ess = 0, imp = 0, ne = P.filter(function(p){ return p[2] === 'E'; }).length; P.forEach(function(p, k){ if(sel[k]){ t += p[1]; if(p[2] === 'E') ess++; if(p[2] === 'I') imp++; } }); return {t: t, g1: t <= TT + 1e-9, g2: ess === ne, g3: imp <= 1, ne: ne, ess: ess, imp: imp}; }
  function upd(){ var m = metas(); document.getElementById('tt').textContent = brl(m.t); document.getElementById('sb').textContent = brl(TT - m.t); var bb = document.getElementById('bb'); bb.style.width = Math.min(100, m.t / TT * 100) + '%'; bb.style.background = m.g1 ? 'var(--success)' : 'var(--danger)';
    document.getElementById('mt').innerHTML = '<li class="' + (m.g1 ? 'ok' : 'no') + '">' + (m.g1 ? '✔' : '✘') + ' Dentro do teto de R$ 250</li><li class="' + (m.g2 ? 'ok' : 'no') + '">' + (m.g2 ? '✔' : '✘') + ' Todos os essenciais no carrinho (' + m.ess + '/' + m.ne + ')</li><li class="' + (m.g3 ? 'ok' : 'no') + '">' + (m.g3 ? '✔' : '✘') + ' No máximo 1 item de impulso (' + m.imp + ')</li>'; }
  P.forEach(function(p, k){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.style.margin = '0'; b.innerHTML = '<span style="font-size:1.4rem;">' + p[3] + '</span> <strong>' + p[0] + '</strong><br><span class="mono">' + brl(p[1]) + '</span> · <span style="color:' + tag[p[2]][1] + ';font-weight:700;">' + tag[p[2]][0] + '</span>'; b.addEventListener('click', function(){ sel[k] = !sel[k]; b.classList.toggle('correct', sel[k]); upd(); }); box.appendChild(b); });
  document.getElementById('fc').addEventListener('click', function(){ var m = metas(), sc = (m.g1 ? 1 : 0) + (m.g2 ? 1 : 0) + (m.g3 ? 1 : 0); document.getElementById('scoreVal').textContent = sc;
    document.getElementById('fm').innerHTML = '<p>Total: <b>' + brl(m.t) + '</b> · metas cumpridas: <b>' + sc + '/3</b>.</p><p class="hint">Dica da aula: lista fechada, teto de gasto e substituição. Itens "em promoção" que não estavam na lista são os primeiros a sair do carrinho.</p>'; document.getElementById('fin').style.display = 'block'; try{ window.reportarConclusao(sc, 3); }catch(e){} });
  upd();`
});

/* 7 · Simulador da barraca */
const f = mk({
  out: dir + 'perfil-empreendedor/atividade-criativa.html', key: 'em-criativa',
  title: 'Simulador da barraca de sanduíches', brand: 'Perfil Empreendedor', cls: '',
  eyebrow: 'Atividade criativa · simulador de negócio · aula 48', pill: 'Metas: <span id="scoreVal">0</span>/3',
  h1: 'Você é o dono da <span style="color:var(--growth);">barraca</span>',
  subtitle: 'Escolha o <strong>preço</strong> e o <strong>custo do recheio</strong> (um recheio melhor atrai mais clientes, mas custa mais). Veja o ponto de equilíbrio e feche o mês. <strong>Metas:</strong> lucro positivo, margem de pelo menos 40% e vendas 20% acima do ponto de equilíbrio.',
  body: CSS + `
  <div class="grid2" style="margin-top:6px;">
    <div class="wid">
      <label>Preço de venda: <b id="pv">10</b> reais</label><input type="range" id="pri" min="5" max="18" step="0.5" value="10">
      <label>Custo do sanduíche (pão + recheio + embalagem): <b id="cv">4</b> reais</label><input type="range" id="cri" min="2" max="8" step="0.5" value="4">
      <p class="small" style="margin:10px 0 0;">Custo fixo mensal (aluguel da barraca, gás, licença): <b>R$ 600</b></p>
      <p class="hint">Clientes por mês = 460 − 30 × preço + 15 × (custo − 2). Modelo didático.</p>
    </div>
    <div class="wid">
      <p class="small" style="margin:0;">Vendas no mês: <b id="un" class="mono"></b> sanduíches</p>
      <p class="small" style="margin:4px 0;">Ponto de equilíbrio: <b id="pe" class="mono"></b> sanduíches</p>
      <p class="small" style="margin:4px 0;">Margem: <b id="mg" class="mono"></b></p>
      <p class="small" style="margin:8px 0 0;">Lucro do mês</p><div class="out" id="lc" style="font-size:1.8rem;"></div>
    </div>
  </div>
  <svg id="ch" viewBox="0 0 400 150" style="width:100%;height:auto;display:block;margin-top:12px;background:var(--surface-2);border-radius:14px;"></svg>
  <div class="row2"><button class="btn" id="fc" type="button">Fechar o mês</button></div>
  <ul class="crit" id="mt"></ul>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Mês fechado!</h4><div id="fm"></div></div>`,
  script: `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
  var FX = 600;
  function calc(){ var p = +$('pri').value, c = +$('cri').value, u = Math.max(0, Math.round(460 - 30 * p + 15 * (c - 2))), mg = p > 0 ? (p - c) / p : 0, pe = p > c ? Math.ceil(FX / (p - c)) : Infinity, lc = u * (p - c) - FX; return {p: p, c: c, u: u, mg: mg, pe: pe, lc: lc, g1: lc > 0, g2: mg >= 0.4, g3: pe !== Infinity && u >= pe * 1.2}; }
  function upd(){ var r = calc(); $('pv').textContent = r.p; $('cv').textContent = r.c; $('un').textContent = r.u; $('pe').textContent = r.pe === Infinity ? '— (preço ≤ custo)' : r.pe; $('mg').textContent = (r.mg * 100).toFixed(0) + '%'; var l = $('lc'); l.textContent = brl(r.lc); l.style.color = r.lc >= 0 ? 'var(--success)' : 'var(--danger)';
    var W = 400, H = 150, pad = 14, mx = 500, X = function(q){ return pad + (W - 2*pad) * q / mx; }, Y = function(v){ return H - pad - (H - 2*pad) * Math.max(0, Math.min(1, v / 5000)); };
    var s = '<line x1="'+pad+'" y1="'+(H-pad)+'" x2="'+(W-pad)+'" y2="'+(H-pad)+'" stroke="var(--line-strong)"/>';
    s += '<polyline fill="none" stroke="var(--danger)" stroke-width="2.5" points="' + X(0) + ',' + Y(FX) + ' ' + X(mx) + ',' + Y(FX + mx * r.c) + '"/><polyline fill="none" stroke="var(--success)" stroke-width="2.5" points="' + X(0) + ',' + Y(0) + ' ' + X(mx) + ',' + Y(mx * r.p) + '"/>';
    if(r.pe !== Infinity && r.pe <= mx) s += '<circle cx="'+X(r.pe)+'" cy="'+Y(r.pe * r.p)+'" r="5" fill="var(--growth)"/><text x="'+(X(r.pe)+6)+'" y="'+(Y(r.pe * r.p)-6)+'" font-size="10" fill="var(--ink-soft)">equilíbrio</text>';
    s += '<circle cx="'+X(Math.min(mx, r.u))+'" cy="'+(H - pad + 0)+'" r="4" fill="var(--primary)"/><text x="'+(W-pad)+'" y="12" font-size="10" text-anchor="end" fill="var(--ink-faint)">verde: receita · vermelho: custo total · roxo: suas vendas</text>';
    $('ch').innerHTML = s; }
  ['pri','cri'].forEach(function(i){ $(i).addEventListener('input', upd); }); upd();
  $('fc').addEventListener('click', function(){ var r = calc(), sc = (r.g1 ? 1 : 0) + (r.g2 ? 1 : 0) + (r.g3 ? 1 : 0); $('scoreVal').textContent = sc;
    $('mt').innerHTML = '<li class="' + (r.g1 ? 'ok' : 'no') + '">' + (r.g1 ? '✔' : '✘') + ' Lucro positivo (' + brl(r.lc) + ')</li><li class="' + (r.g2 ? 'ok' : 'no') + '">' + (r.g2 ? '✔' : '✘') + ' Margem de pelo menos 40% (' + (r.mg * 100).toFixed(0) + '%)</li><li class="' + (r.g3 ? 'ok' : 'no') + '">' + (r.g3 ? '✔' : '✘') + ' Vendas 20% acima do ponto de equilíbrio</li>';
    $('fm').innerHTML = '<p>Metas cumpridas: <b>' + sc + '/3</b>. Experimente outras combinações de preço e custo: preço alto demais afasta clientes; custo alto demais corrói a margem. Empreender é testar, medir e ajustar.</p>'; $('fin').style.display = 'block'; try{ window.reportarConclusao(sc, 3); }catch(e){} });`
});

// apostas: reaproveita as 3 atividades da 2ª série com os rótulos da 1ª
const fix = s => String(s).replace(/aulas 35, 42, 47/g, 'aulas 35, 41, 50');
const reuse = (o, nome) => ({ ...o, out: dir + 'apostas-bets-cassino/' + nome, key: o.key + '-1', eyebrow: fix(o.eyebrow) });
const ap = [reuse(a1[3], 'atividade-enem.html'), reuse(a2[3], 'atividade-pratica.html'), reuse(a3[3], 'atividade-criativa.html')];

module.exports = [c1, c2, c3, d, e1, e2, f, ...ap];
