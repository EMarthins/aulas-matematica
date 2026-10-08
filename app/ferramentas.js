/* Ferramentas do site (aulas, guias e atividades) — carregado por scripts/aplicar-ferramentas.js
   Menu "⋯": mapa de slides, notas, cronômetro e sorteio, copiar link do slide, leitura em voz alta,
   fonte maior/menor, alto contraste, imprimir. Também: retomar de onde parou, glossário clicável,
   pesquisa "como foi a aula?", registro de erros para revisão espaçada e sequência de dias de estudo.
   Tudo funciona offline e sem login; nada sai do aparelho (exceto a pesquisa dentro do player da plataforma). */
(function(){
  if(window.__ferramentas) return; window.__ferramentas = true;
  var D = document, W = window, R = D.documentElement;
  var SRC = (D.currentScript && D.currentScript.src) || '';

  // ---------- util ----------
  function lsGet(k){ try{ return W.localStorage.getItem(k); }catch(e){ return null; } }
  function lsSet(k, v){ try{ W.localStorage.setItem(k, v); }catch(e){} }
  function jget(k, d){ try{ var v = JSON.parse(lsGet(k)); return v == null ? d : v; }catch(e){ return d; } }
  function jset(k, v){ lsSet(k, JSON.stringify(v)); }
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }
  var P = W.location.pathname, ix = P.indexOf('/aulas/'); if(ix < 0) ix = P.indexOf('/educacao-financeira/');
  var KEY = ix < 0 ? null : P.slice(ix + 1);
  var slides = [].slice.call(D.querySelectorAll('.slide'));
  var isDeck = !!(D.getElementById('stage') && slides.length);
  var emPlayer = false; try{ emPlayer = W.parent !== W; }catch(e){ emPlayer = true; }
  var pageTitle = (D.title || '').trim();

  // ---------- registros: último acesso e dias de estudo ----------
  if(KEY){
    try{
      var hoje = new Date(); var dia = hoje.getFullYear() + '-' + ('0' + (hoje.getMonth() + 1)).slice(-2) + '-' + ('0' + hoje.getDate()).slice(-2);
      var dias = jget('prog:dias', []); if(dias.indexOf(dia) < 0){ dias.push(dia); jset('prog:dias', dias.slice(-120)); }
      jset('prog:ultimo', { a: KEY, t: pageTitle, d: Date.now(), s: jget('prog:ultimo', {}).a === KEY ? jget('prog:ultimo', {}).s : 0 });
    }catch(e){}
  }

  // ---------- estilos ----------
  var css = '' +
  '.ft-dock{position:fixed;top:calc(64px + env(safe-area-inset-top,0px));right:calc(14px + env(safe-area-inset-right,0px));z-index:9998;font-family:Archivo,Arial,sans-serif}' +
  '.ft-btn{width:44px;height:44px;border-radius:50%;border:1px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:var(--ink,#111);cursor:pointer;font-size:1.3rem;line-height:1;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px -10px var(--shadow,rgba(0,0,0,.3))}' +
  '.ft-btn:hover{transform:scale(1.07)}' +
  '.ft-panel{position:absolute;top:52px;right:0;width:min(17rem,calc(100vw - 28px));background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;padding:8px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.4));display:none}' +
  '.ft-panel.on{display:block}' +
  '.ft-panel button{display:flex;align-items:center;gap:.6em;width:100%;text-align:left;font:inherit;font-size:.82rem;font-weight:700;border:0;background:transparent;color:inherit;border-radius:10px;padding:.55em .7em;cursor:pointer}' +
  '.ft-panel button:hover{background:var(--primary-soft,#eef)}' +
  '.ft-panel .k{margin-left:auto;font-family:"JetBrains Mono",monospace;font-size:.68rem;color:var(--ink-faint,#777);border:1px solid var(--line-strong,#bbb);border-radius:6px;padding:0 .4em}' +
  '.ft-panel hr{border:0;border-top:1px solid var(--line,#ddd);margin:6px 0}' +
  '.ft-overlay{position:fixed;inset:0;z-index:9997;background:color-mix(in srgb,var(--bg,#fff) 88%,transparent);backdrop-filter:blur(6px);overflow:auto;padding:clamp(14px,3vw,36px);display:none}' +
  '.ft-overlay.on{display:block}' +
  '.ft-overlay h3{font-family:Archivo,Arial,sans-serif;margin:0 0 14px;color:var(--ink,#111)}' +
  '.ft-map{display:grid;grid-template-columns:repeat(auto-fill,minmax(12.5rem,1fr));gap:10px}' +
  '.ft-map button{position:relative;text-align:left;font:inherit;font-size:.82rem;font-weight:700;line-height:1.25;background:var(--surface,#fff);color:var(--ink,#111);border:1.5px solid var(--line-strong,#bbb);border-radius:12px;padding:.7em .8em .7em 2.7em;cursor:pointer;min-height:4rem}' +
  '.ft-map button:hover,.ft-map button.cur{border-color:var(--primary,#382EAE)}' +
  '.ft-map button.cur{background:var(--primary-soft,#eef)}' +
  '.ft-map b{position:absolute;left:.6em;top:.6em;font-family:"JetBrains Mono",monospace;font-size:.72rem;color:var(--primary,#382EAE)}' +
  '.ft-map em{display:block;font-style:normal;font-weight:600;font-size:.68rem;color:var(--ink-faint,#777);margin-top:.2em}' +
  '.ft-float{position:fixed;z-index:9996;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;padding:12px 14px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.4));font-family:"Source Serif 4",Georgia,serif;display:none;width:min(21rem,calc(100vw - 24px))}' +
  '.ft-float.on{display:block}' +
  '.ft-float h4{margin:0 0 8px;font-family:Archivo,Arial,sans-serif;font-size:.9rem;display:flex;justify-content:space-between;align-items:center}' +
  '.ft-float textarea,.ft-float input[type=number]{width:100%;font:inherit;font-size:.9rem;padding:.5em;border-radius:10px;border:1.5px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:var(--ink,#111)}' +
  '.ft-x{border:0;background:transparent;color:var(--ink-faint,#777);cursor:pointer;font-size:1.1rem}' +
  '.ft-row{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0}' +
  '.ft-chip{font:inherit;font-family:Archivo,Arial,sans-serif;font-weight:700;font-size:.78rem;border:1.5px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:var(--ink,#111);border-radius:99px;padding:.35em .85em;cursor:pointer}' +
  '.ft-chip.on{background:var(--primary,#382EAE);color:var(--primary-ink,#fff);border-color:var(--primary,#382EAE)}' +
  '.ft-big{font-family:"JetBrains Mono",monospace;font-weight:800;font-size:2.6rem;text-align:center;margin:4px 0}' +
  '.ft-toast{position:fixed;left:50%;bottom:clamp(70px,9vh,110px);transform:translateX(-50%);z-index:9999;background:var(--ink,#111);color:var(--bg,#fff);border-radius:99px;padding:.6em 1.1em;font-family:Archivo,Arial,sans-serif;font-size:.85rem;font-weight:700;box-shadow:0 12px 30px -10px rgba(0,0,0,.5);display:none;max-width:calc(100vw - 24px)}' +
  '.ft-toast.on{display:flex;gap:.8em;align-items:center}' +
  '.ft-toast button{font:inherit;font-weight:800;border:0;background:transparent;color:inherit;text-decoration:underline;cursor:pointer}' +
  'abbr.ft-g{text-decoration:underline dotted var(--primary,#382EAE);text-underline-offset:3px;cursor:help}' +
  '.ft-tip{position:fixed;z-index:9999;max-width:min(20rem,calc(100vw - 24px));background:var(--ink,#111);color:var(--bg,#fff);border-radius:12px;padding:.7em .9em;font-family:"Source Serif 4",Georgia,serif;font-size:.85rem;line-height:1.4;box-shadow:0 14px 30px -10px rgba(0,0,0,.5);display:none}' +
  '.ft-tip b{font-family:Archivo,Arial,sans-serif}' +
  '.ft-poll{position:fixed;left:50%;transform:translateX(-50%);bottom:clamp(76px,10vh,120px);z-index:9995;text-align:center}' +
  '.ft-poll button{font-size:1.5rem;border:1.5px solid var(--line-strong,#bbb);background:var(--surface,#fff);border-radius:14px;padding:.2em .5em;cursor:pointer;margin:0 3px}' +
  '.ft-poll button:hover{border-color:var(--primary,#382EAE)}' +
  'html.ft-hc:root:root{--bg:#fff;--surface:#fff;--surface-2:#f0f0f0;--ink:#000;--ink-soft:#111;--ink-faint:#222;--line:#000;--line-strong:#000;--primary:#1a0f8a;--primary-soft:#e4e1ff;--growth:#8a2e00;--decay:#00545a;--success:#0b5a2e;--danger:#9b0000}' +
  'html.ft-hc[data-theme="dark"]:root:root{--bg:#000;--surface:#000;--surface-2:#141414;--ink:#fff;--ink-soft:#f2f2f2;--ink-faint:#ddd;--line:#fff;--line-strong:#fff;--primary:#b9b3ff;--primary-soft:#1d1a52;--growth:#ffb08a;--decay:#7ff3ea;--success:#7dffb0;--danger:#ff9a9a}' +
  '@media print{.ft-dock,.ft-overlay,.ft-float,.ft-toast,.ft-poll,.ft-tip{display:none!important}}';
  var st = el('style'); st.id = 'ft-css'; st.textContent = css; D.head ? D.head.appendChild(st) : D.documentElement.appendChild(st);

  // ---------- acessibilidade: zoom e contraste (aplicados já) ----------
  var zoom = parseFloat(lsGet('ft:zoom')) || 1;
  function aplicaZoom(){ R.style.setProperty('--zoom', zoom); }
  function aplicaHC(){ R.classList.toggle('ft-hc', lsGet('ft:hc') === '1'); }
  aplicaZoom(); aplicaHC();

  // ---------- toast ----------
  var toast = el('div', 'ft-toast'); toast.setAttribute('role', 'status');
  function aviso(txt, acao, cb, ms){ toast.innerHTML = ''; toast.appendChild(el('span', null, txt)); if(acao){ var b = el('button', null, acao); b.type = 'button'; b.addEventListener('click', function(){ toast.classList.remove('on'); cb && cb(); }); toast.appendChild(b); } toast.classList.add('on'); clearTimeout(aviso.t); aviso.t = setTimeout(function(){ toast.classList.remove('on'); }, ms || 4500); }

  // ---------- navegação em decks ----------
  function atual(){ var rc = D.getElementById('railCount'); var m = rc && rc.textContent.match(/(\d+)\s*\/\s*(\d+)/); return m ? +m[1] - 1 : 0; }
  function total(){ return slides.length; }
  function ir(i){ if(typeof W.goTo === 'function') W.goTo(i); }
  function tituloSlide(s){ var h = s.querySelector('h1,h2.title,h2'); if(h) return h.textContent.trim().replace(/\s+/g, ' '); var e = s.querySelector('.eyebrow'); return e ? e.textContent.trim() : 'Slide'; }

  // ---------- painel ----------
  var dock = el('div', 'ft-dock'), btn = el('button', 'ft-btn', '⋯'), panel = el('div', 'ft-panel');
  btn.type = 'button'; btn.setAttribute('aria-label', 'Ferramentas da aula'); btn.setAttribute('aria-haspopup', 'true'); btn.title = 'Ferramentas';
  var acoes = [];
  function acao(rotulo, tecla, fn, soDeck){ if(soDeck && !isDeck) return; var b = el('button', null, rotulo + (tecla ? '<span class="k">' + tecla + '</span>' : '')); b.type = 'button'; b.addEventListener('click', function(){ panel.classList.remove('on'); fn(); }); panel.appendChild(b); }
  function sep(){ panel.appendChild(el('hr')); }

  // mapa
  var mapa = el('div', 'ft-overlay'); mapa.setAttribute('role', 'dialog'); mapa.setAttribute('aria-label', 'Mapa dos slides');
  function abrirMapa(){
    if(!isDeck) return; mapa.innerHTML = ''; var h = el('h3', null, 'Mapa dos slides — clique para ir <button class="ft-x" type="button" aria-label="Fechar" style="float:right">✕</button>'); mapa.appendChild(h); h.querySelector('button').addEventListener('click', fechar);
    var g = el('div', 'ft-map'), cur = atual();
    slides.forEach(function(s, i){ var b = el('button', i === cur ? 'cur' : '', '<b>' + (i + 1) + '</b>' + tituloSlide(s).slice(0, 80) + (s.querySelector('.qz') ? '<em>Quiz</em>' : s.querySelector('.wid') ? '<em>Simulador</em>' : s.querySelector('.reveal') ? '<em>Atividade</em>' : '')); b.type = 'button'; b.addEventListener('click', function(){ fechar(); ir(i); }); g.appendChild(b); });
    mapa.appendChild(g); mapa.classList.add('on'); var c = g.querySelector('.cur'); c && c.scrollIntoView({ block: 'center' });
  }
  function fechar(){ mapa.classList.remove('on'); }

  // notas
  var notas = el('div', 'ft-float'); notas.style.cssText = 'left:14px;bottom:78px';
  notas.innerHTML = '<h4><span>Notas do professor <small style="font-weight:600;color:var(--ink-faint)">· só neste aparelho</small></span><button class="ft-x" type="button" aria-label="Fechar">✕</button></h4><textarea rows="6" placeholder="Anotações para este slide (exemplos, perguntas, tempo…)"></textarea><div class="ft-row" style="margin-bottom:0"><small id="ft-nl" style="color:var(--ink-faint)"></small></div>';
  var nta = notas.querySelector('textarea'), nKey = 'ft:notas:' + (KEY || P);
  function notasLer(){ var o = jget(nKey, {}); nta.value = o[atual()] || ''; notas.querySelector('#ft-nl').textContent = 'Slide ' + (atual() + 1) + ' de ' + total(); }
  nta.addEventListener('input', function(){ var o = jget(nKey, {}); o[atual()] = nta.value; if(!nta.value) delete o[atual()]; jset(nKey, o); });
  notas.querySelector('.ft-x').addEventListener('click', function(){ notas.classList.remove('on'); });
  function alternaNotas(){ notas.classList.toggle('on'); tempo.classList.remove('on'); if(notas.classList.contains('on')){ notasLer(); nta.focus(); } }

  // cronômetro e sorteio
  var tempo = el('div', 'ft-float'); tempo.style.cssText = 'right:14px;bottom:78px';
  tempo.innerHTML = '<h4><span>Cronômetro e sorteio</span><button class="ft-x" type="button" aria-label="Fechar">✕</button></h4>' +
    '<div class="ft-row"><button class="ft-chip on" data-m="c" type="button">Cronômetro</button><button class="ft-chip" data-m="s" type="button">Sorteio</button></div>' +
    '<div data-p="c"><div class="ft-big" id="ft-t">02:00</div><div class="ft-row" id="ft-pre"></div><div class="ft-row"><button class="ft-chip on" id="ft-go" type="button">Iniciar</button><button class="ft-chip" id="ft-rs" type="button">Zerar</button></div></div>' +
    '<div data-p="s" style="display:none"><textarea id="ft-nm" rows="5" placeholder="Um nome por linha"></textarea><div class="ft-big" id="ft-sorteado" style="font-family:Archivo,Arial,sans-serif;font-size:1.7rem;min-height:2.2rem">—</div><div class="ft-row"><button class="ft-chip on" id="ft-sort" type="button">Sortear</button><label style="font-size:.78rem;display:flex;gap:.3em;align-items:center"><input type="checkbox" id="ft-rm"> tirar da lista</label></div></div>';
  var seg = 120, rest = 120, rod = null;
  function fmt(s){ return ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + (s % 60)).slice(-2); }
  function bip(){ try{ var a = new (W.AudioContext || W.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain(); o.connect(g); g.connect(a.destination); o.frequency.value = 880; g.gain.value = .15; o.start(); setTimeout(function(){ o.stop(); a.close(); }, 700); }catch(e){} }
  function pintaT(){ tempo.querySelector('#ft-t').textContent = fmt(rest); tempo.querySelector('#ft-t').style.color = rest === 0 ? 'var(--danger,#c00)' : ''; }
  [1, 2, 3, 5, 10].forEach(function(m){ var b = el('button', 'ft-chip', m + ' min'); b.type = 'button'; b.addEventListener('click', function(){ clearInterval(rod); rod = null; seg = rest = m * 60; tempo.querySelector('#ft-go').textContent = 'Iniciar'; pintaT(); }); tempo.querySelector('#ft-pre').appendChild(b); });
  tempo.querySelector('#ft-go').addEventListener('click', function(){ var b = this; if(rod){ clearInterval(rod); rod = null; b.textContent = 'Continuar'; return; } if(rest <= 0) rest = seg; b.textContent = 'Pausar';
    rod = setInterval(function(){ rest--; pintaT(); if(rest <= 0){ clearInterval(rod); rod = null; b.textContent = 'Iniciar'; bip(); aviso('⏰ Tempo esgotado!'); } }, 1000); pintaT(); });
  tempo.querySelector('#ft-rs').addEventListener('click', function(){ clearInterval(rod); rod = null; rest = seg; tempo.querySelector('#ft-go').textContent = 'Iniciar'; pintaT(); });
  [].forEach.call(tempo.querySelectorAll('[data-m]'), function(b){ b.addEventListener('click', function(){ [].forEach.call(tempo.querySelectorAll('[data-m]'), function(x){ x.classList.toggle('on', x === b); }); [].forEach.call(tempo.querySelectorAll('[data-p]'), function(p){ p.style.display = p.dataset.p === b.dataset.m ? '' : 'none'; }); }); });
  var nm = tempo.querySelector('#ft-nm'); nm.value = lsGet('ft:nomes') || ''; nm.addEventListener('input', function(){ lsSet('ft:nomes', nm.value); });
  tempo.querySelector('#ft-sort').addEventListener('click', function(){ var lista = nm.value.split('\n').map(function(x){ return x.trim(); }).filter(Boolean); var out = tempo.querySelector('#ft-sorteado');
    if(!lista.length){ out.textContent = 'Digite os nomes'; return; } var n = 0, tmr = setInterval(function(){ out.textContent = lista[Math.floor(Math.random() * lista.length)]; if(++n > 14){ clearInterval(tmr); var v = lista[Math.floor(Math.random() * lista.length)]; out.textContent = '🎉 ' + v; if(tempo.querySelector('#ft-rm').checked){ lista.splice(lista.indexOf(v), 1); nm.value = lista.join('\n'); lsSet('ft:nomes', nm.value); } } }, 70); });
  tempo.querySelector('.ft-x').addEventListener('click', function(){ tempo.classList.remove('on'); });
  function alternaTempo(){ tempo.classList.toggle('on'); notas.classList.remove('on'); }

  // copiar link
  function copiarLink(){
    var url = W.location.origin + W.location.pathname + (isDeck ? '#s=' + (atual() + 1) : '');
    var ok = function(){ aviso('🔗 Link copiado' + (isDeck ? ' (abre no slide ' + (atual() + 1) + ')' : '')); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(url).then(ok, function(){ W.prompt('Copie o link:', url); }); } else W.prompt('Copie o link:', url);
  }

  // leitura em voz alta
  var falando = false;
  function textoParaLer(){ var base = isDeck ? D.querySelector('.slide.active .slide-inner') : (D.querySelector('.app') || D.querySelector('.sheet') || D.body); if(!base) return ''; var c = base.cloneNode(true); [].forEach.call(c.querySelectorAll('script,style,svg,button.reveal,.ft-tip,input,textarea,select'), function(n){ n.remove(); }); return c.textContent.replace(/\s+/g, ' ').trim(); }
  function pararVoz(){ try{ W.speechSynthesis.cancel(); }catch(e){} falando = false; }
  function ouvir(){
    if(!('speechSynthesis' in W)){ aviso('Seu navegador não tem leitura em voz alta.'); return; }
    if(falando){ pararVoz(); aviso('Leitura interrompida'); return; }
    var t = textoParaLer(); if(!t){ return; } var u = new W.SpeechSynthesisUtterance(t.slice(0, 4000)); u.lang = 'pt-BR'; u.rate = .98;
    var v = W.speechSynthesis.getVoices().filter(function(x){ return /pt[-_]BR/i.test(x.lang); })[0]; if(v) u.voice = v; u.onend = u.onerror = function(){ falando = false; }; falando = true; W.speechSynthesis.speak(u); aviso('🔊 Lendo… (clique em "Ouvir" de novo para parar)');
  }

  // fonte e contraste
  function ajustaZoom(d){ zoom = Math.max(.8, Math.min(1.6, Math.round((zoom + d) * 100) / 100)); lsSet('ft:zoom', zoom); aplicaZoom(); aviso('Tamanho do texto: ' + Math.round(zoom * 100) + '%'); if(isDeck) W.dispatchEvent(new Event('resize')); }
  function alternaHC(){ lsSet('ft:hc', lsGet('ft:hc') === '1' ? '0' : '1'); aplicaHC(); aviso(lsGet('ft:hc') === '1' ? 'Alto contraste ligado' : 'Alto contraste desligado'); }

  if(isDeck){ acao('🗺 Mapa dos slides', 'M', abrirMapa); acao('📝 Notas do professor', 'N', alternaNotas); acao('⏱ Cronômetro e sorteio', 'T', alternaTempo); acao('↺ Recomeçar do slide 1', '', function(){ ir(0); }); sep(); }
  acao('🔗 Copiar link' + (isDeck ? ' deste slide' : ''), 'L', copiarLink); acao('🔊 Ouvir (voz alta)', 'O', ouvir); sep();
  acao('A+  Texto maior', '+', function(){ ajustaZoom(.1); }); acao('A−  Texto menor', '−', function(){ ajustaZoom(-.1); }); acao('◐ Alto contraste', 'H', alternaHC); acao('🖨 Imprimir', '', function(){ W.print(); });
  dock.appendChild(btn); dock.appendChild(panel);
  btn.addEventListener('click', function(e){ e.stopPropagation(); panel.classList.toggle('on'); });
  D.addEventListener('click', function(e){ if(!dock.contains(e.target)) panel.classList.remove('on'); });

  function montar(){ var b = D.body || R; [dock, mapa, notas, tempo, toast].forEach(function(n){ b.appendChild(n); }); }
  if(D.body) montar(); else D.addEventListener('DOMContentLoaded', montar);

  // atalhos
  D.addEventListener('keydown', function(e){
    var t = e.target && e.target.tagName; if(t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    if(e.key === 'Escape'){ fechar(); panel.classList.remove('on'); notas.classList.remove('on'); tempo.classList.remove('on'); return; }
    if(k === 'm' && isDeck){ mapa.classList.contains('on') ? fechar() : abrirMapa(); }
    else if(k === 'n' && isDeck){ alternaNotas(); e.preventDefault(); }
    else if(k === 't' && isDeck){ alternaTempo(); }
    else if(k === 'l'){ copiarLink(); }
    else if(k === 'o'){ ouvir(); }
    else if(k === 'h'){ alternaHC(); }
    else if(e.key === '+' || e.key === '='){ ajustaZoom(.1); }
    else if(e.key === '-'){ ajustaZoom(-.1); }
  });

  // ---------- retomar de onde parou + hash #s=N + salvar posição ----------
  function pollFim(i){
    if(!isDeck || emPlayer && false) return; var ultimo = i === total() - 1, ja = lsGet('ft:fb:' + KEY);
    var box = D.getElementById('ft-poll'); if(!ultimo || ja){ box && box.remove(); return; } if(box) return;
    box = el('div', 'ft-poll'); box.id = 'ft-poll'; box.innerHTML = '<div style="font-family:Archivo,Arial,sans-serif;font-weight:800;font-size:.85rem;margin-bottom:4px;color:var(--ink)">Como foi entender esta aula?</div><button data-v="nao" title="Não entendi" type="button">😕</button><button data-v="meio" title="Mais ou menos" type="button">😐</button><button data-v="sim" title="Entendi!" type="button">🙂</button>';
    [].forEach.call(box.querySelectorAll('button'), function(b){ b.addEventListener('click', function(){ lsSet('ft:fb:' + KEY, b.dataset.v); box.remove(); aviso('Obrigado! Isso ajuda o(a) professor(a) a planejar a próxima aula.'); try{ W.parent.postMessage({ type: 'lesson-progress', event: 'feedback', value: b.dataset.v }, '*'); }catch(e){} }); });
    (D.body || R).appendChild(box);
  }
  function observa(){
    var rc = D.getElementById('railCount'); if(!rc) return;
    new MutationObserver(function(){ var i = atual(); if(KEY){ var u = jget('prog:ultimo', {}); if(u.a === KEY){ u.s = i; jset('prog:ultimo', u); } lsSet('ft:slide:' + KEY, i); } pollFim(i); if(notas.classList.contains('on')) notasLer(); if(falando) pararVoz(); }).observe(rc, { childList: true, characterData: true, subtree: true });
    pollFim(atual());
  }
  function retomar(){
    if(!isDeck) return;
    var m = W.location.hash.match(/s=(\d+)/); var alvo = m ? Math.min(total(), Math.max(1, +m[1])) - 1 : -1;
    if(alvo > 0){ ir(alvo); return; }
    var salvo = parseInt(lsGet('ft:slide:' + KEY), 10); if(salvo > 0 && salvo < total() - 0 && !emPlayer){ ir(salvo); aviso('Retomando do slide ' + (salvo + 1), 'Começar do início', function(){ ir(0); }); }
  }

  // ---------- glossário ----------
  var GL = [
    ['juros compostos', 'Juros calculados sobre o capital mais os juros já acumulados ("juros sobre juros"): FV = PV·(1+i)ⁿ.'],
    ['juros simples', 'Juros calculados sempre sobre o capital inicial; o valor cresce em linha reta.'],
    ['inflação', 'Aumento geral e contínuo dos preços: com o tempo, a mesma quantia compra menos.'],
    ['FGC', 'Fundo Garantidor de Créditos: protege depósitos e aplicações em bancos até R$ 250 mil por CPF e por instituição.'],
    ['Selic', 'Taxa básica de juros da economia brasileira, definida pelo Banco Central; referência para a renda fixa.'],
    ['CDI', 'Taxa de referência dos empréstimos entre bancos, muito próxima da Selic; usada para remunerar CDBs.'],
    ['CDB', 'Certificado de Depósito Bancário: você empresta dinheiro ao banco e recebe juros; protegido pelo FGC.'],
    ['LCI', 'Letra de Crédito Imobiliário: título bancário ligado ao financiamento de imóveis; isento de IR para pessoa física.'],
    ['LCA', 'Letra de Crédito do Agronegócio: título bancário ligado ao agro; isento de IR para pessoa física.'],
    ['Tesouro Direto', 'Programa em que o investidor empresta dinheiro ao Governo Federal comprando títulos públicos.'],
    ['renda fixa', 'Investimentos cuja forma de remuneração é conhecida na hora da compra (prefixada, pós-fixada ou híbrida).'],
    ['renda variável', 'Investimentos sem retorno garantido: o preço varia com o mercado (ações, FIIs, ETFs).'],
    ['liquidez', 'Rapidez com que um ativo vira dinheiro sem perder valor.'],
    ['dividendos', 'Parte do lucro de uma empresa distribuída aos acionistas.'],
    ['FIIs', 'Fundos de Investimento Imobiliário: cotas de fundos que investem em imóveis e pagam rendimentos (aluguéis).'],
    ['ETFs', 'Fundos que replicam um índice (como o Ibovespa) e são negociados na Bolsa como ações.'],
    ['Ibovespa', 'Principal índice da Bolsa brasileira: média do desempenho das ações de maior negociação.'],
    ['B3', 'A Bolsa de valores do Brasil, onde ações e outros ativos são negociados.'],
    ['CVM', 'Comissão de Valores Mobiliários: órgão que fiscaliza o mercado de capitais e protege o investidor.'],
    ['volatilidade', 'Intensidade e rapidez das variações de preço de um ativo; quanto maior, mais arriscado.'],
    ['diversificação', 'Distribuir o dinheiro em ativos diferentes para reduzir o risco ("não colocar os ovos na mesma cesta").'],
    ['RTP', 'Return to Player: percentual do dinheiro apostado que a plataforma devolve aos jogadores; o resto é da casa.'],
    ['score', 'Pontuação (0 a 1.000) que estima o risco de um consumidor não pagar suas dívidas.'],
    ['SPC', 'Serviço de Proteção ao Crédito: cadastro de pessoas com dívidas em atraso.'],
    ['Serasa', 'Empresa de análise de crédito que mantém cadastro de inadimplentes e calcula o score.'],
    ['negativado', 'Pessoa com o CPF registrado em cadastro de devedores (SPC/Serasa) por dívida em atraso.'],
    ['cheque especial', 'Limite de crédito automático na conta corrente, com juros muito altos.'],
    ['rotativo', 'Crédito do cartão quando a fatura não é paga por inteiro: o saldo restante recebe juros altíssimos.'],
    ['taxa equivalente', 'Taxas em períodos diferentes que produzem o mesmo rendimento ou custo (ex.: 12% a.a. ≈ 0,949% a.m. em juros compostos).'],
    ['crediário', 'Compra parcelada financiada pela loja ou por uma financeira, geralmente com carnê.'],
    ['PROCON', 'Órgão de defesa do consumidor que orienta, recebe reclamações e fiscaliza abusos.'],
    ['venda casada', 'Prática abusiva: condicionar a compra de um produto à compra de outro.'],
    ['consumismo', 'Consumo movido por impulso, status ou pressão social, e não por necessidade.'],
    ['blockchain', 'Registro digital em blocos encadeados por hash, copiado em muitos computadores, difícil de adulterar.'],
    ['hash', 'Impressão digital de um dado: muda totalmente se qualquer parte do dado mudar.'],
    ['criptoativos', 'Ativos digitais protegidos por criptografia, como o Bitcoin, negociados em redes descentralizadas.'],
    ['DCA', 'Dollar-Cost Averaging: comprar um valor fixo em intervalos regulares para diluir a oscilação do preço.'],
    ['stop-loss', 'Limite de perda definido antes: ao atingi-lo, a posição é encerrada para evitar prejuízo maior.'],
    ['desvio padrão', 'Medida de quanto os valores se afastam da média; quanto maior, mais dispersos (mais arriscado).'],
    ['ponto de equilíbrio', 'Quantidade vendida em que receita e custos se igualam: lucro zero.'],
    ['montante', 'Valor final de uma aplicação ou dívida: capital mais juros.'],
    ['logaritmo', 'Expoente a que se eleva uma base para obter um número: log₂ 8 = 3, pois 2³ = 8.'],
    ['progressão aritmética', 'Sequência em que cada termo é o anterior somado a uma constante (a razão).'],
    ['progressão geométrica', 'Sequência em que cada termo é o anterior multiplicado por uma constante (a razão).'],
    ['função exponencial', 'Função da forma f(x) = aˣ ou k·aˣ, em que a variável aparece no expoente.'],
    ['função composta', 'Função obtida aplicando uma função ao resultado de outra: (f∘g)(x) = f(g(x)).'],
    ['função inversa', 'Função que "desfaz" a original: se f(a) = b, então f⁻¹(b) = a.'],
    ['radiano', 'Unidade de medida de arco: 1 rad é o arco de comprimento igual ao raio; 180° = π rad.'],
    ['ciclo trigonométrico', 'Circunferência de raio 1 usada para definir seno, cosseno e tangente de qualquer arco.']
  ];
  var tip = el('div', 'ft-tip'); tip.setAttribute('role', 'tooltip');
  function mostraTip(a){ tip.innerHTML = '<b>' + a.textContent + '</b> — ' + a.dataset.d; tip.style.display = 'block'; var r = a.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight; var l = Math.max(8, Math.min(W.innerWidth - w - 8, r.left)); var t = r.bottom + 8; if(t + h > W.innerHeight - 8) t = Math.max(8, r.top - h - 8); tip.style.left = l + 'px'; tip.style.top = t + 'px'; }
  D.addEventListener('click', function(e){ var a = e.target.closest && e.target.closest('abbr.ft-g'); if(a){ e.preventDefault(); e.stopPropagation(); mostraTip(a); } else tip.style.display = 'none'; }, true);
  D.addEventListener('keydown', function(e){ if((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('ft-g')){ e.preventDefault(); mostraTip(e.target); } });
  var rx = GL.map(function(g){ return [new RegExp('(^|[^A-Za-zÀ-ÿ0-9])(' + g[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![A-Za-zÀ-ÿ0-9])', 'i'), g[1]]; });
  var PROIBIDO = /^(A|BUTTON|INPUT|TEXTAREA|SELECT|SCRIPT|STYLE|SVG|ABBR|H1|OPTION|CODE|PRE|TABLE|LABEL|SUMMARY)$/;
  function glosarEm(raiz){
    var usados = {}, w = D.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null), alvos = [], n;
    while((n = w.nextNode())){ var p = n.parentElement; if(!p || !n.nodeValue.trim()) continue; var ok = true; for(var q = p; q && q !== raiz.parentNode; q = q.parentElement){ if(PROIBIDO.test(q.tagName) || q.classList && (q.classList.contains('eyebrow') || q.classList.contains('badge') || q.classList.contains('formula') || q.classList.contains('choice') || q.classList.contains('mono') || q.classList.contains('title') || q.classList.contains('ft-tip'))){ ok = false; break; } } if(ok) alvos.push(n); }
    alvos.forEach(function(no){
      var txt = no.nodeValue, achou = null;
      rx.forEach(function(r, k){ if(usados[k]) return; var m = r[0].exec(txt); if(m && (!achou || m.index + m[1].length < achou.i)) achou = { k: k, i: m.index + m[1].length, len: m[2].length }; });
      if(!achou) return; usados[achou.k] = 1;
      var a = el('abbr', 'ft-g'); a.tabIndex = 0; a.title = 'Clique para ver o significado'; a.dataset.d = rx[achou.k][1]; a.textContent = txt.substr(achou.i, achou.len);
      var depois = D.createTextNode(txt.slice(achou.i + achou.len)); no.nodeValue = txt.slice(0, achou.i); no.parentNode.insertBefore(a, no.nextSibling); no.parentNode.insertBefore(depois, a.nextSibling);
    });
  }
  function glossario(){
    try{ if(isDeck) slides.forEach(function(s){ var i = s.querySelector('.slide-inner'); i && glosarEm(i); }); else glosarEm(D.querySelector('.app') || D.querySelector('.sheet') || D.body); }catch(e){}
  }

  // ---------- erros → revisão espaçada ----------
  function hashStr(s){ var h = 5381; for(var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function limpa(h){ return String(h || '').replace(/<abbr class="ft-g"[^>]*>([^<]*)<\/abbr>/g, '$1').replace(/\s+/g, ' ').trim(); }
  function salvaErro(qHtml, opts, sol, lbl){
    if(!KEY) return; var q = limpa(qHtml); sol = limpa(sol); if(!q || opts.length < 2) return; var id = hashStr(KEY + '|' + q); var lista = jget('rev:itens', []);
    var f = lista.filter(function(x){ return x.id === id; })[0];
    if(f){ f.n = 0; f.due = Date.now() + 864e5; f.e = (f.e || 1) + 1; }
    else lista.push({ id: id, k: KEY, t: pageTitle, q: q, o: opts, sol: (sol || '').replace(/\s+/g, ' ').trim(), n: 0, due: Date.now() + 864e5, e: 1, a: Date.now() });
    jset('rev:itens', lista.slice(-250));
  }
  D.addEventListener('click', function(e){
    try{
      var b = e.target.closest && e.target.closest('.qopt, .mqo'); if(!b) return;
      var grupo = b.closest('.qz, .mq'); if(!grupo || grupo.dataset.ftReg) return;
      var certo = b.classList.contains('qopt') ? b.dataset.ok === '1' : +b.dataset.i === +grupo.dataset.a;
      grupo.dataset.ftReg = '1'; if(certo) return;
      var bs = [].slice.call(grupo.querySelectorAll(b.classList.contains('qopt') ? '.qopt' : '.mqo')).map(function(x){ return { t: x.textContent.trim(), ok: x.classList.contains('qopt') ? x.dataset.ok === '1' : +x.dataset.i === +grupo.dataset.a }; });
      var card = grupo.closest('.qcard'), q, sol = '';
      if(card){ var c = card.cloneNode(true); [].forEach.call(c.querySelectorAll('.qz,.fb,.answer,.badge'), function(n){ n.remove(); }); q = c.innerHTML; var an = card.querySelector('.answer'); sol = an ? an.innerHTML : ''; }
      else { var p = grupo.previousElementSibling; q = p ? p.innerHTML : (grupo.querySelector('p') ? grupo.querySelector('p').innerHTML : ''); var an2 = grupo.querySelector('.answer'); sol = an2 ? an2.innerHTML : ''; }
      salvaErro(q, bs, sol);
    }catch(x){}
  }, true);

  // ---------- partida ----------
  function iniciar(){ glossario(); observa(); retomar(); }
  if(D.readyState === 'complete') setTimeout(iniciar, 60); else W.addEventListener('load', function(){ setTimeout(iniciar, 60); });
  (D.body || R).appendChild && D.addEventListener('DOMContentLoaded', function(){ (D.body).appendChild(tip); });
  if(D.body) D.body.appendChild(tip);
  W.addEventListener('pagehide', pararVoz);
  // modo offline: registra o service worker da raiz do site
  try{ if('serviceWorker' in navigator && SRC && !emPlayer) navigator.serviceWorker.register(SRC.split('app/ferramentas.js')[0] + 'sw.js').catch(function(){}); }catch(e){}
  W.__ferramentasApi = { abrirMapa: abrirMapa, ouvir: ouvir };
})();
