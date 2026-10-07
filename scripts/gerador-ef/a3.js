// Atividades "Criativas" (5) — formatos diferentes do padrão: memória, quebra-cabeça de carteira, pregão, detector de anúncios, golpe ou não golpe
const dir = 'educacao-financeira/2-ano/3-tri/';
const mk = o => ({ kind: 'free', ...o });
const COMMON_CSS = `<style>
  .gm{ display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-top:14px; }
  @media (max-width:520px){ .gm{ grid-template-columns:repeat(3,1fr); } }
  .mc{ aspect-ratio:1/.8; border-radius:14px; border:1.5px solid var(--line-strong); background:var(--surface); cursor:pointer; padding:6px; display:flex; align-items:center; justify-content:center; text-align:center; font-family:'Archivo',sans-serif; font-weight:800; font-size:.82rem; line-height:1.15; color:var(--ink); transition:transform .25s, background .2s; }
  .mc.back{ background:linear-gradient(135deg,var(--primary),var(--decay)); color:transparent; font-size:1.6rem; }
  .mc.back::after{ content:'?'; color:var(--primary-ink); }
  .mc.open{ background:var(--primary-soft); }
  .mc.ok{ background:var(--success-soft); border-color:var(--success); cursor:default; }
  .mc.term{ color:var(--primary); } .mc.def{ font-weight:600; font-family:'Source Serif 4',serif; font-size:.78rem; }
  .row2{ display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; }
  .bubble{ max-width:min(34rem,100%); background:var(--surface-2); border:1px solid var(--line); border-radius:4px 18px 18px 18px; padding:12px 16px; margin:6px 0 10px; font-size:.95rem; line-height:1.45; }
  .bubble small{ display:block; color:var(--ink-faint); font-size:.72rem; margin-bottom:4px; font-family:'JetBrains Mono',monospace; }
  .sp{ display:inline; padding:.05em .3em; margin:.05em .08em; border-radius:6px; border:1.5px dashed transparent; cursor:pointer; background:transparent; font:inherit; color:inherit; }
  .sp:hover{ background:var(--primary-soft); }
  .sp.mk{ background:var(--growth-soft); border-color:var(--growth); }
  .sp.hit{ background:var(--success-soft); border-color:var(--success); }
  .sp.miss{ background:var(--danger-soft); border-color:var(--danger); text-decoration:underline wavy; }
  .sp.fp{ background:var(--danger-soft); border-color:var(--danger); text-decoration:line-through; }
  .ad{ border:1.5px solid var(--line-strong); border-radius:16px; padding:14px 16px; margin-bottom:14px; background:var(--surface); }
  .ad-t{ font-family:'Archivo',sans-serif; font-weight:800; font-size:1.05rem; line-height:1.6; }
  .asset{ border:1.5px solid var(--line-strong); border-radius:14px; padding:10px 12px; background:var(--surface); }
  .asset h4{ margin:0 0 4px; font-family:'Archivo',sans-serif; }
  .mini-btn{ font-family:'Archivo',sans-serif; font-weight:700; font-size:.8rem; border-radius:8px; border:1.5px solid var(--primary); background:var(--surface); color:var(--primary); padding:.35em .8em; cursor:pointer; }
  .mini-btn:disabled{ opacity:.35; cursor:default; }
  .mini-btn.sell{ border-color:var(--danger); color:var(--danger); }
  .alloc{ display:grid; grid-template-columns:1fr 6rem; gap:8px 12px; align-items:center; margin-top:8px; }
  .alloc input[type=number]{ font:inherit; width:100%; padding:.35em .5em; border-radius:10px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); }
  .crit{ list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:4px; font-size:.88rem; }
  .crit li.ok{ color:var(--success); } .crit li.no{ color:var(--danger); }
</style>`;

/* ---------- C1: jogo da memória ---------- */
const c1 = mk({
  out: dir + 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-criativa.html', key: 'inv1-criativa',
  title: 'Jogo da memória da renda fixa', brand: 'Investimentos e Renda Fixa', cls: '',
  eyebrow: 'Atividade criativa · jogo da memória · aulas 36–38', pill: 'Pares: <span id="scoreVal">0</span>/8',
  h1: 'Memória da <span style="color:var(--primary);">renda fixa</span>',
  subtitle: 'Vire duas cartas por vez e junte cada <strong>termo</strong> com o seu <strong>significado</strong>. Quanto menos tentativas, melhor — mas o que importa é fixar o vocabulário do investidor.',
  body: COMMON_CSS + `
  <div class="callout"><h4>Como jogar</h4><p>Clique em duas cartas. Se formarem um par (termo + definição), elas ficam verdes. Ache os 8 pares. As cartas ficam embaralhadas a cada partida.</p></div>
  <div class="gm" id="gm"></div>
  <div class="row2"><span class="badge">Jogadas: <b id="mv">0</b></span><span class="badge">Erros: <b id="er">0</b></span><button class="btn ghost" id="rs" type="button">Embaralhar de novo</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Memória afiada!</h4><p id="fm" style="margin:0;"></p></div>`,
  script: `
  var PAIRS = [['Renda fixa', 'Você empresta dinheiro e recebe juros previsíveis'], ['Tesouro Selic', 'Título do Governo ideal para a reserva de emergência'], ['CDB', 'Título de banco, protegido pelo FGC até R$ 250 mil'], ['LCI / LCA', 'Letras de crédito isentas de Imposto de Renda'], ['Liquidez', 'Facilidade de transformar o investimento em dinheiro'], ['Inflação', 'Aumento de preços que corrói o poder de compra'], ['Risco de crédito', 'O "calote": quem pegou o dinheiro não paga'], ['Juros compostos', 'Juros que rendem sobre os juros já ganhos']];
  var gm = document.getElementById('gm'), mv = 0, er = 0, found = 0, first = null, lock = false;
  function shuffle(a){ for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function build(){
    gm.innerHTML = ''; mv = 0; er = 0; found = 0; first = null; lock = false;
    document.getElementById('mv').textContent = 0; document.getElementById('er').textContent = 0; document.getElementById('scoreVal').textContent = 0; document.getElementById('fin').style.display = 'none';
    var cards = []; PAIRS.forEach(function(p, i){ cards.push({id: i, t: p[0], k: 'term'}); cards.push({id: i, t: p[1], k: 'def'}); });
    shuffle(cards).forEach(function(c){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'mc back'; b.dataset.id = c.id; b.dataset.t = c.t; b.dataset.k = c.k; b.setAttribute('aria-label', 'Carta virada');
      b.addEventListener('click', function(){ flip(b); }); gm.appendChild(b);
    });
  }
  function show(b){ b.classList.remove('back'); b.classList.add('open', b.dataset.k); b.textContent = b.dataset.t; }
  function hide(b){ b.classList.add('back'); b.classList.remove('open', 'term', 'def'); b.textContent = ''; }
  function flip(b){
    if(lock || b.classList.contains('ok') || b === first || !b.classList.contains('back')) return;
    show(b);
    if(!first){ first = b; return; }
    mv++; document.getElementById('mv').textContent = mv;
    if(first.dataset.id === b.dataset.id && first.dataset.k !== b.dataset.k){
      first.classList.add('ok'); b.classList.add('ok'); first.classList.remove('open'); b.classList.remove('open'); first = null; found++; document.getElementById('scoreVal').textContent = found;
      if(found === PAIRS.length){
        document.getElementById('fin').style.display = 'block';
        document.getElementById('fm').textContent = 'Você achou os 8 pares em ' + mv + ' jogadas, com ' + er + ' erro(s). Termos como liquidez, risco de crédito e juros compostos agora fazem parte do seu vocabulário de investidor.';
        try{ window.reportarConclusao(found, PAIRS.length); }catch(e){}
      }
    } else {
      er++; document.getElementById('er').textContent = er; lock = true; var a = first, c = b; first = null;
      setTimeout(function(){ hide(a); hide(c); lock = false; }, 900);
    }
  }
  document.getElementById('rs').addEventListener('click', build); build();`
});

/* ---------- C2: carteira quebra-cabeça ---------- */
const c2 = mk({
  out: dir + 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-criativa.html', key: 'inv2-criativa',
  title: 'Quebra-cabeça da carteira de investimentos', brand: 'Juros Compostos e Carteira', cls: 'success',
  eyebrow: 'Atividade criativa · quebra-cabeça · aulas 39–41', pill: 'Missões: <span id="scoreVal">0</span>/3',
  h1: 'Monte a carteira <span style="color:var(--growth);">certa</span>',
  subtitle: 'Três pessoas, três perfis. Distribua <strong>100%</strong> entre cinco tipos de investimento e cumpra todos os critérios de cada missão. Não há uma única resposta: existem várias carteiras corretas!',
  body: COMMON_CSS + `
  <div class="card" style="margin-bottom:14px;"><strong>Missão:</strong> <span id="ms-t"></span>
    <ul class="crit" id="ms-c"></ul>
    <div class="row2" id="ms-tabs"></div></div>
  <div class="card"><div class="alloc" id="al"></div>
    <div class="bar" style="height:20px;margin-top:12px;" id="al-bar"></div>
    <p class="small" style="margin:8px 0 0;">Total alocado: <b id="al-tot">0</b>% · <span id="al-r">faltam 100%</span></p>
    <div class="row2"><button class="btn" id="al-ok" type="button">Verificar missão</button><button class="btn ghost" id="al-clr" type="button">Limpar</button></div>
    <ul class="crit" id="al-res"></ul></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Carteiras montadas!</h4><p id="fm" style="margin:0;"></p></div>`,
  script: `
  var CL = [['Tesouro Selic', 'var(--decay)'], ['CDB / LCI / LCA', '#2D7FB0'], ['Ações / ETFs', 'var(--growth)'], ['Fundos imobiliários', 'var(--primary)'], ['Criptomoedas', 'var(--danger)']];
  var MS = [
    {t: 'Bia, 17 anos, juntando para a faculdade que começa em 2 anos. Perfil conservador.', c: [['Renda fixa (Selic + CDB/LCI/LCA) ≥ 80%', function(v){ return v[0] + v[1] >= 80; }], ['Tesouro Selic ≥ 30% (liquidez para imprevistos)', function(v){ return v[0] >= 30; }], ['Criptomoedas ≤ 2%', function(v){ return v[4] <= 2; }]]},
    {t: 'Caio, 25 anos, quer crescer o patrimônio sem sustos. Perfil moderado.', c: [['Renda fixa entre 40% e 55%', function(v){ var r = v[0] + v[1]; return r >= 40 && r <= 55; }], ['Ações / ETFs ≥ 20%', function(v){ return v[2] >= 20; }], ['Criptomoedas ≤ 5%', function(v){ return v[4] <= 5; }], ['Nenhum ativo isolado acima de 35%', function(v){ return Math.max.apply(null, v) <= 35; }]]},
    {t: 'Dani, 20 anos, pensa na aposentadoria (40 anos). Perfil arrojado, mas com cabeça.', c: [['Renda variável (ações + FIIs + cripto) ≥ 60%', function(v){ return v[2] + v[3] + v[4] >= 60; }], ['Criptomoedas ≤ 10%', function(v){ return v[4] <= 10; }], ['Tesouro Selic ≥ 10% (reserva)', function(v){ return v[0] >= 10; }]]}
  ];
  var cur = 0, done = [false, false, false], score = 0, vals = [0, 0, 0, 0, 0], ins = [];
  var al = document.getElementById('al'), bar = document.getElementById('al-bar');
  CL.forEach(function(c, i){ var l = document.createElement('label'); l.textContent = c[0]; l.style.cssText = 'font-weight:700;font-size:.9rem;'; var inp = document.createElement('input'); inp.type = 'number'; inp.min = 0; inp.max = 100; inp.step = 5; inp.value = 0; inp.addEventListener('input', upd); al.appendChild(l); al.appendChild(inp); ins.push(inp); });
  function upd(){ vals = ins.map(function(x){ return Math.max(0, Math.min(100, +x.value || 0)); }); var t = vals.reduce(function(a, b){ return a + b; }, 0);
    document.getElementById('al-tot').textContent = t; document.getElementById('al-r').textContent = t === 100 ? 'perfeito: 100%' : t < 100 ? 'faltam ' + (100 - t) + '%' : 'passou ' + (t - 100) + '%';
    bar.innerHTML = vals.map(function(v, i){ return '<span style="background:' + CL[i][1] + ';width:' + Math.min(100, v) + '%"></span>'; }).join(''); }
  function mission(k){ cur = k; document.getElementById('ms-t').textContent = MS[k].t; document.getElementById('ms-c').innerHTML = MS[k].c.map(function(c){ return '<li>• ' + c[0] + '</li>'; }).join(''); document.getElementById('al-res').innerHTML = '';
    document.querySelectorAll('#ms-tabs .chip').forEach(function(b, i){ b.classList.toggle('on', i === k); }); }
  var tabs = document.getElementById('ms-tabs'); MS.forEach(function(m, i){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.textContent = 'Missão ' + (i + 1) + (i === 0 ? ' · Bia' : i === 1 ? ' · Caio' : ' · Dani'); b.addEventListener('click', function(){ mission(i); }); tabs.appendChild(b); });
  document.getElementById('al-clr').addEventListener('click', function(){ ins.forEach(function(x){ x.value = 0; }); upd(); document.getElementById('al-res').innerHTML = ''; });
  document.getElementById('al-ok').addEventListener('click', function(){
    var tot = vals.reduce(function(a, b){ return a + b; }, 0), res = document.getElementById('al-res'), all = true; res.innerHTML = '';
    var li0 = document.createElement('li'); li0.className = tot === 100 ? 'ok' : 'no'; li0.textContent = (tot === 100 ? '✔' : '✘') + ' A soma é 100% (agora: ' + tot + '%)'; res.appendChild(li0); if(tot !== 100) all = false;
    MS[cur].c.forEach(function(c){ var ok = c[1](vals), li = document.createElement('li'); li.className = ok ? 'ok' : 'no'; li.textContent = (ok ? '✔ ' : '✘ ') + c[0]; res.appendChild(li); if(!ok) all = false; });
    if(all && !done[cur]){ done[cur] = true; score++; document.getElementById('scoreVal').textContent = score; var f = document.createElement('li'); f.className = 'ok'; f.innerHTML = '<b>🎉 Missão cumprida!</b>'; res.appendChild(f);
      if(score === 3){ document.getElementById('fin').style.display = 'block'; document.getElementById('fm').textContent = 'Você montou carteiras coerentes para três perfis diferentes. A lição: a carteira certa depende do perfil, do prazo e do objetivo — e quase sempre mistura renda fixa e variável.'; try{ window.reportarConclusao(score, 3); }catch(e){} } }
    else if(all){ var g = document.createElement('li'); g.className = 'ok'; g.textContent = 'Esta missão já estava cumprida: experimente outra!'; res.appendChild(g); }
  });
  mission(0); upd();`
});

/* ---------- C3: pregão ao vivo ---------- */
const c3 = mk({
  out: dir + 'renda-variavel-bolsa/atividade-criativa.html', key: 'rv-criativa',
  title: 'Pregão ao vivo: 12 dias na Bolsa', brand: 'Renda Variável e Bolsa', cls: 'success',
  eyebrow: 'Atividade criativa · simulador · aulas 43–45', pill: 'Conquistas: <span id="scoreVal">0</span>/3',
  h1: 'Pregão <span style="color:var(--growth);">ao vivo</span>: 12 dias na Bolsa',
  subtitle: 'Você tem <strong>R$ 1.000 fictícios</strong> e três ativos. Compre, venda e atravesse 12 pregões — incluindo uma crise surpresa. Ganhe as 3 conquistas: <strong>diversificar</strong>, <strong>manter a calma</strong> e <strong>terminar no azul</strong>.',
  body: COMMON_CSS + `
  <div class="callout"><h4>Simulação sem dinheiro real</h4><p>Os preços são fictícios. Cada ativo é negociado em unidades inteiras. Use "Avançar um dia" quando terminar suas ordens do dia.</p></div>
  <div class="card"><div class="row2" style="margin:0;justify-content:space-between;"><span class="badge">Dia <b id="dy">1</b>/12</span><span class="badge">Caixa: <b id="cx">R$ 1.000,00</b></span><span class="badge">Patrimônio: <b id="pt">R$ 1.000,00</b></span></div>
    <p id="nw" style="margin:10px 0 0;font-weight:700;"></p></div>
  <div class="grid3" style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));gap:12px;" id="as"></div>
  <svg id="ch" viewBox="0 0 400 130" style="width:100%;height:auto;display:block;margin-top:12px;background:var(--surface-2);border-radius:14px;"></svg>
  <div class="row2"><button class="btn" id="nx" type="button">Avançar um dia ▶</button><button class="btn ghost" id="rs" type="button">Recomeçar</button></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Pregão encerrado!</h4><div id="fm"></div></div>`,
  script: `
  var AS = [['TechX (ações de tecnologia)', [100,104,98,110,115,120,92,90,101,109,118,126], 'var(--growth)'], ['Banco Sul (ações)', [100,101,102,101,103,104,95,94,96,98,100,102], 'var(--primary)'], ['FII Galpões (fundo imobiliário)', [100,100.5,101,101.5,101,102,97,97.5,98.5,99.5,100.5,101.5], 'var(--decay)']];
  var NEWS = ['Abertura do mercado: dia tranquilo.', 'Boa expectativa para o setor de tecnologia.', 'Notícia fraca: TechX recua.', 'Resultados fortes: TechX dispara.', 'Juros estáveis: mercado calmo.', 'Mercado otimista, bolsa em alta.', '🚨 CRISE: notícias ruins no exterior derrubam toda a bolsa!', 'Mercado ainda nervoso, mas sem novas notícias ruins.', 'Investidores voltam a comprar: recuperação.', 'Balanços do trimestre melhores que o esperado.', 'Clima de otimismo volta ao pregão.', 'Último pregão: resultado final da sua estratégia.'];
  var CRASH = 6, d, cash, qty, sellsCrash, divAt, rows = [];
  var as = document.getElementById('as');
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
  function pat(){ var t = cash; AS.forEach(function(a, i){ t += qty[i] * a[1][d]; }); return t; }
  function render(){
    as.innerHTML = '';
    AS.forEach(function(a, i){ var p = a[1][d], prev = d ? a[1][d - 1] : p, v = (p / prev - 1) * 100;
      var el = document.createElement('div'); el.className = 'asset'; el.innerHTML = '<h4 style="color:' + a[2] + ';">' + a[0] + '</h4><div class="out" style="font-size:1.2rem;color:var(--ink);">' + brl(p) + ' <small style="font-size:.7rem;color:' + (v >= 0 ? 'var(--success)' : 'var(--danger)') + ';">' + (v >= 0 ? '+' : '') + v.toFixed(1).replace('.', ',') + '%</small></div><p class="small" style="margin:4px 0 8px;">Você tem <b>' + qty[i] + '</b> un. (' + brl(qty[i] * p) + ')</p><div class="row2" style="margin:0;"><button class="mini-btn buy" type="button">Comprar 1</button><button class="mini-btn sell" type="button">Vender 1</button></div>';
      el.querySelector('.buy').disabled = cash < p || d >= 11; el.querySelector('.sell').disabled = qty[i] < 1 || d >= 11;
      el.querySelector('.buy').addEventListener('click', function(){ cash -= p; qty[i]++; render(); });
      el.querySelector('.sell').addEventListener('click', function(){ cash += p; qty[i]--; if(d === CRASH) sellsCrash++; render(); });
      as.appendChild(el); });
    document.getElementById('dy').textContent = d + 1; document.getElementById('cx').textContent = brl(cash); document.getElementById('pt').textContent = brl(pat()); document.getElementById('nw').textContent = NEWS[d];
    document.getElementById('nx').disabled = d >= 11;
    var W = 400, H = 130, pad = 12, mn = 80, mx = 130, s = '';
    AS.forEach(function(a){ var pts = a[1].slice(0, d + 1).map(function(v, k){ return (pad + (W - 2*pad) * k / 11).toFixed(1) + ',' + (H - pad - (H - 2*pad) * (v - mn) / (mx - mn)).toFixed(1); }).join(' '); s += '<polyline fill="none" stroke="' + a[2] + '" stroke-width="2.5" points="' + pts + '"/>'; });
    if(d >= CRASH){ var cx = pad + (W - 2*pad) * CRASH / 11; s += '<line x1="' + cx + '" y1="6" x2="' + cx + '" y2="' + (H - 6) + '" stroke="var(--danger)" stroke-dasharray="3 3"/><text x="' + (cx + 4) + '" y="16" font-size="9" fill="var(--danger)">crise</text>'; }
    document.getElementById('ch').innerHTML = s;
  }
  function end(){
    var final = pat(), held = qty.filter(function(q){ return q > 0; }).length, div = rows.some(function(r){ return r >= 2; });
    var a1 = div, a2 = sellsCrash <= 1, a3 = final >= 1000, score = (a1 ? 1 : 0) + (a2 ? 1 : 0) + (a3 ? 1 : 0);
    var ref = AS.reduce(function(s, a){ return s + (1000 / 3) / a[1][0] * a[1][11]; }, 0);
    document.getElementById('scoreVal').textContent = score;
    document.getElementById('fm').innerHTML = '<p>Patrimônio final: <b>' + brl(final) + '</b> (início: R$ 1.000,00). Quem dividisse igualmente entre os três ativos e não mexesse em nada teria <b>' + brl(ref) + '</b>.</p><ul class="crit"><li class="' + (a1 ? 'ok' : 'no') + '">' + (a1 ? '✔' : '✘') + ' Diversificar: ter pelo menos 2 ativos diferentes ao mesmo tempo</li><li class="' + (a2 ? 'ok' : 'no') + '">' + (a2 ? '✔' : '✘') + ' Manter a calma: vender no máximo 1 unidade no dia da crise (você vendeu ' + sellsCrash + ')</li><li class="' + (a3 ? 'ok' : 'no') + '">' + (a3 ? '✔' : '✘') + ' Terminar no azul: patrimônio final ≥ R$ 1.000</li></ul><p class="hint">Lição: a crise fez todos os ativos caírem de uma vez — quem vendeu em pânico "trancou" o prejuízo; quem diversificou e esperou, recuperou. Se não deu desta vez, recomece e tente outra estratégia.</p>';
    document.getElementById('fin').style.display = 'block';
    try{ window.reportarConclusao(score, 3); }catch(e){}
  }
  function init(){ d = 0; cash = 1000; qty = [0, 0, 0]; sellsCrash = 0; rows = []; document.getElementById('fin').style.display = 'none'; document.getElementById('scoreVal').textContent = 0; render(); }
  document.getElementById('nx').addEventListener('click', function(){ rows.push(qty.filter(function(q){ return q > 0; }).length); d++; if(d >= 11){ render(); rows.push(qty.filter(function(q){ return q > 0; }).length); end(); } else { render(); } });
  document.getElementById('rs').addEventListener('click', init); init();`
});

/* ---------- C4: detector de anúncios ---------- */
const c4 = mk({
  out: dir + 'apostas-bets-cassino/atividade-criativa.html', key: 'ap-criativa',
  title: 'Detector de anúncios enganosos de apostas', brand: 'Apostas, Bets e Cassino', cls: 'danger',
  eyebrow: 'Atividade criativa · detetive de anúncios · aulas 35, 42, 47', pill: 'Anúncios: <span id="scoreVal">0</span>/5',
  h1: 'Detector de <span style="color:var(--danger);">anúncios enganosos</span>',
  subtitle: 'Cinco anúncios fictícios de bets. Clique nas <strong>expressões que manipulam</strong> (promessas, urgência, isca) e depois em "Conferir". Cuidado: nem toda frase é enganosa — marcar o que é neutro também conta como erro.',
  body: COMMON_CSS + `
  <div class="callout danger"><h4>Aviso</h4><p>Anúncios inventados para esta atividade. O objetivo é treinar o olhar crítico: a publicidade de apostas é feita para normalizar o hábito e esconder a matemática da casa.</p></div>
  <div id="ads"></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Detetive de anúncios!</h4><p id="fm" style="margin:0;"></p></div>`,
  script: `
  var ADS = [
    {h: 'Anúncio 1 · "o influenciador"', p: [['Eu ganhei R$ 8.400 ontem', 1, 'Mostra só quem ganha (às vezes versão de demonstração) e esconde a maioria que perde.'], [' e ', 0, ''], ['você também pode!', 1, 'Promessa de resultado: não existe essa garantia em jogo de azar.'], [' ', 0, ''], ['Link na bio.', 0, 'Chamada comum — o problema não é o link, mas o que ele promete (e comissões por depósito).']]},
    {h: 'Anúncio 2 · "o patrocinador do clube"', p: [['Torça pelo seu time', 0, 'Frase neutra de torcida.'], [' e ', 0, ''], ['ainda lucre', 1, 'Associa apostar a lucro, como se fosse um complemento natural do esporte.'], [' com o ', 0, ''], ['palpite certo!', 1, 'Palpite certo é sorte: não há método que garanta acertar sempre.']]},
    {h: 'Anúncio 3 · "a recuperação"', p: [['Perdeu? ', 0, ''], ['Recupere suas perdas', 1, 'É o gatilho clássico do ciclo das perdas: apostar mais para voltar ao zero.'], [' agora: ', 0, ''], ['dobre sua aposta', 1, 'Dobrar a aposta aumenta o risco e acelera o endividamento.'], [' e volte ao jogo.', 0, '']]},
    {h: 'Anúncio 4 · "o Pix fácil"', p: [['Faça seu Pix agora: ', 0, 'Chamada ao depósito — neutra sozinha, mas o foco é facilitar o gasto.'], ['depósito mínimo de R$ 1.', 1, 'Barateia a entrada e esconde que o valor total gasto cresce rápido.'], [' ', 0, ''], ['Fácil e rápido!', 1, 'Dinheiro que não passa pela sua mão: fica mais difícil perceber quanto gasta.']]},
    {h: 'Anúncio 5 · "o cassino 24h"', p: [['Cassino ao vivo ', 0, ''], ['24 horas por dia.', 1, 'Disponibilidade sem pausa estimula o jogo compulsivo e a perda da noção do tempo.'], [' ', 0, ''], ['Giros grátis', 1, 'Isca para começar a jogar; o objetivo é fazer você depositar depois.'], [' para ', 0, ''], ['novos jogadores.', 0, 'Informação de público-alvo — neutra.']]}
  ];
  var box = document.getElementById('ads'), score = 0, doneN = 0;
  ADS.forEach(function(ad, ai){
    var el = document.createElement('div'); el.className = 'ad';
    el.innerHTML = '<span class="badge">' + ad.h + '</span><p class="ad-t" style="margin:10px 0;"></p><div class="row2"><button class="btn chk" type="button">Conferir</button></div><div class="fb"></div><div class="answer"></div>';
    var t = el.querySelector('.ad-t');
    ad.p.forEach(function(p){ var s = document.createElement('button'); s.type = 'button'; s.className = 'sp'; s.textContent = p[0]; s.dataset.bad = p[1]; s.dataset.why = p[2]; if(!p[2] && !p[1]){ s.disabled = true; s.style.cursor = 'default'; } s.addEventListener('click', function(){ if(el.dataset.done) return; s.classList.toggle('mk'); }); t.appendChild(s); });
    el.querySelector('.chk').addEventListener('click', function(){
      if(el.dataset.done) return; el.dataset.done = 1; var perfect = true, why = '';
      t.querySelectorAll('.sp').forEach(function(s){ var bad = s.dataset.bad === '1', mk = s.classList.contains('mk'); s.classList.remove('mk');
        if(bad && mk){ s.classList.add('hit'); } else if(bad && !mk){ s.classList.add('miss'); perfect = false; } else if(!bad && mk){ s.classList.add('fp'); perfect = false; }
        if(s.dataset.why && s.dataset.bad === '1') why += '<p><b>“' + s.textContent.trim() + '”</b> — ' + s.dataset.why + '</p>'; });
      var fb = el.querySelector('.fb'); fb.textContent = perfect ? '✔ Olhar de detetive: você achou tudo e não acusou o que era neutro.' : '✘ Quase: verde = acertou; sublinhado vermelho = manipulação que passou batida; riscado = frase que era neutra.'; fb.className = 'fb ' + (perfect ? 'ok' : 'no');
      var an = el.querySelector('.answer'); an.innerHTML = why; an.classList.add('open'); el.querySelector('.chk').disabled = true;
      doneN++; if(perfect){ score++; document.getElementById('scoreVal').textContent = score; }
      if(doneN === ADS.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('fm').textContent = 'Você identificou corretamente ' + score + ' de ' + ADS.length + ' anúncios. Promessa de ganho, urgência, facilitar o depósito e "recuperar perdas" são as armas da publicidade de apostas — agora você as reconhece.'; try{ window.reportarConclusao(score, ADS.length); }catch(e){} }
    });
    box.appendChild(el);
  });`
});

/* ---------- C5: golpe ou não golpe ---------- */
const c5 = mk({
  out: dir + 'criptoativos/atividade-criativa.html', key: 'cr-criativa',
  title: 'Golpe ou não golpe? Mensagens de cripto', brand: 'Criptoativos', cls: '',
  eyebrow: 'Atividade criativa · mensagens suspeitas · aulas 48–50', pill: 'Acertos: <span id="scoreVal">0</span>/8',
  h1: '<span style="color:var(--danger);">Golpe</span> ou <span style="color:var(--success);">legítimo</span>?',
  subtitle: 'Oito mensagens chegaram no seu celular. Decida se cada uma é <strong>golpe</strong> ou <strong>comunicação legítima</strong> — e leia a explicação. Atenção: nem tudo que fala de cripto é fraude.',
  body: COMMON_CSS + `
  <div id="msgs"></div>
  <div class="card success" id="fin" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Análise concluída!</h4><p id="fm" style="margin:0;"></p></div>`,
  script: `
  var M = [
    ['Suporte da corretora', 'Sua conta será BLOQUEADA em 1 hora. Para evitar, responda esta mensagem com sua senha e o código de verificação (2FA) que chegar no seu celular.', 1, 'Golpe: corretora nenhuma pede senha ou código 2FA por mensagem. É phishing. Nunca informe esses dados.'],
    ['Grupo de "investimentos"', 'Robô de trading: 3% de lucro por dia GARANTIDO! Depósito mínimo R$ 500. Indique 3 amigos e ganhe bônus.', 1, 'Golpe: rentabilidade alta e garantida num mercado volátil é o principal indício de fraude, e a indicação por bônus é típica de pirâmide.'],
    ['App da corretora (regulamentada)', 'Seu extrato do mês já está disponível. Acesse o aplicativo oficial para conferir. Nenhuma ação é necessária.', 0, 'Legítimo: avisa sem pedir dados nem links suspeitos e remete ao aplicativo oficial. Boa prática: sempre abrir o app, não links recebidos.'],
    ['Número desconhecido', 'Parabéns! Você ganhou 0,5 BTC! Clique no link e pague a taxa de saque de R$ 200 para liberar o prêmio.', 1, 'Golpe: prêmio que você não disputou + taxa antecipada. Quem paga a taxa perde o dinheiro e não recebe nada.'],
    ['Corretora registrada', 'Ordem executada: compra de 0,001 BTC a R$ 350.000,00 por BTC. Taxa de corretagem: 0,5%. Total: R$ 351,75.', 0, 'Legítimo: confirmação de operação com valores claros e taxa explicada (0,001 × 350.000 = R$ 350 + 0,5% = R$ 351,75).'],
    ['Perfil famoso (fake)', 'Um grande empresário revelou: ESTA MOEDA VAI VALER 100 VEZES MAIS ESTA SEMANA! Compre agora antes que acabe!', 1, 'Golpe/manipulação (pump and dump): urgência, promessa de multiplicar e “dica de famoso” são feitas para você comprar no topo (FOMO).'],
    ['Central de segurança do app', 'Dica: ative a autenticação de dois fatores (2FA) nas configurações do app oficial da sua exchange. Nunca compartilhe os códigos.', 0, 'Legítimo (e muito recomendado): reforça a segurança, não pede dados e manda abrir o app oficial.'],
    ['Desconhecido no Telegram', 'Dobre seu Bitcoin em 24h! Envie 0,1 BTC para esta carteira e receba 0,2 BTC de volta. Oferta limitada!', 1, 'Golpe: transações em cripto são irreversíveis; quem envia não recebe nada em troca. "Dobrar em 24h" nunca é real.']
  ];
  var box = document.getElementById('msgs'), score = 0, doneN = 0;
  M.forEach(function(m, i){
    var el = document.createElement('div'); el.className = 'card'; el.style.marginBottom = '12px';
    el.innerHTML = '<div class="bubble"><small>' + m[0] + '</small>' + m[1] + '</div><div class="row2" style="margin:0;"><button class="choice g" type="button" style="width:auto;">🚩 É golpe</button><button class="choice l" type="button" style="width:auto;">✅ É legítimo</button></div><div class="fb"></div><div class="answer"><p>' + m[3] + '</p></div>';
    function pick(isScam, btn){ if(el.dataset.done) return; el.dataset.done = 1; var ok = (isScam === (m[2] === 1)); btn.classList.add(ok ? 'correct' : 'wrong'); el.querySelectorAll('.choice').forEach(function(b){ b.disabled = true; });
      var fb = el.querySelector('.fb'); fb.textContent = ok ? '✔ Isso mesmo!' : '✘ Não era isso — veja a explicação:'; fb.className = 'fb ' + (ok ? 'ok' : 'no'); el.querySelector('.answer').classList.add('open');
      doneN++; if(ok){ score++; document.getElementById('scoreVal').textContent = score; }
      if(doneN === M.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('fm').textContent = 'Você acertou ' + score + ' de ' + M.length + '. Regras de ouro: nunca informe senha ou 2FA, desconfie de lucro alto e garantido, de urgência e de taxa para liberar prêmio — e use sempre o aplicativo oficial.'; try{ window.reportarConclusao(score, M.length); }catch(e){} } }
    el.querySelector('.g').addEventListener('click', function(){ pick(true, this); }); el.querySelector('.l').addEventListener('click', function(){ pick(false, this); });
    box.appendChild(el);
  });`
});

module.exports = [c1, c2, c3, c4, c5]; module.exports.CSS = COMMON_CSS;
