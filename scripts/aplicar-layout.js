// Aplica o layout "v2" (legível em qualquer tela, zoom ou projetor) às páginas do site.
// Idempotente: pode rodar sempre que criar páginas novas — pula as que já têm o bloco.
//
//   node scripts/aplicar-layout.js .
//
// O que faz, por tipo de página:
//  - todas as páginas "fragmento" (começam em <title>, sem <head>): garante <meta viewport> e charset
//    (sem o viewport, celulares renderizam a página "encolhida", com letra minúscula);
//  - decks de slides: palco em tela cheia, fonte fluida que cresce com a tela, barra de navegação
//    fora do conteúdo (antes ela ficava por cima do texto) e trilha de progresso reta no lugar das
//    bolinhas em curva exponencial; ajuste automático para o slide caber sem rolar;
//  - demais páginas (atividades, infográficos, aulas do 9º ano): fonte fluida e contêiner mais largo.
const fs = require('fs'), path = require('path');
const root = process.argv[2] || '.';
const MARK = 'id="layout-v2"';

const META = '\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">';

const FONT_FLUIDA = `
/* fonte base fluida: ~16px em celular, ~19px em notebook, ~23px em projetor Full HD, ~29px em 2K */
html{ font-size:calc(var(--fit, 1) * var(--zoom, 1) * clamp(16px, calc(8px + .5vw + .55vh), 40px)); }
sup, sub{ font-size:.8em !important; line-height:0; }`;

const CSS_DECK = `<style ${MARK}>
/* ===== layout v2 (slides): tela cheia, texto grande, nada por cima do conteúdo ===== */
:root{ --fit:1; }${FONT_FLUIDA}
html, body{ height:100%; }
body{ margin:0 !important; padding:0 !important; overflow:hidden; }
.app{ max-width:none !important; width:100%; height:100vh; height:100dvh; margin:0 !important;
  padding:clamp(6px,1vw,18px) clamp(8px,1.6vw,34px) clamp(6px,.8vw,14px);
  display:flex; flex-direction:column; }
.topbar{ flex:none; padding:.1rem 3.6rem .55rem .25rem !important; font-size:.82rem !important; }
.stage{ flex:1 1 0; min-height:0 !important; height:auto !important; display:flex; flex-direction:column;
  border-radius:clamp(12px,1.2vw,26px) !important; }
.slides{ position:relative !important; inset:auto !important; flex:1 1 0; min-height:0; }
.slide-inner{ padding:clamp(14px,2.2vw,3rem) clamp(16px,3.2vw,4.5rem) 1.1rem !important; }

/* barra de navegação: agora FORA do conteúdo (antes ficava sobreposta e cobria o texto) */
.navbar{ position:static !important; flex:none; padding:.55rem 1.1rem !important; gap:.9rem !important;
  background:var(--surface) !important; border-top:1px solid var(--line); }
.navbtn{ width:2.5rem !important; height:2.5rem !important; }
.navbtn svg{ width:1.1rem; height:1.1rem; }
.rail{ height:auto !important; min-height:2rem; display:flex; align-items:center; }
.rail > svg{ display:none !important; }
.rail-count{ font-size:.9rem !important; }
.seg-track{ display:flex; gap:.2rem; width:100%; align-items:center; }
.seg{ flex:1 1 0; min-width:5px; height:2rem; padding:0; border:0; background:transparent; cursor:pointer; position:relative; }
.seg::before{ content:''; position:absolute; left:0; right:0; top:50%; height:.4rem; margin-top:-.2rem; border-radius:999px;
  background:var(--line-strong); transition:background .2s, height .2s, margin .2s, opacity .2s; }
.seg.done::before{ background:var(--primary); opacity:.5; }
.seg.now::before{ background:var(--primary); opacity:1; height:.7rem; margin-top:-.35rem; }
.seg:hover::before{ background:var(--primary); opacity:1; }
.seg:focus-visible{ outline:2px solid var(--primary); outline-offset:2px; border-radius:6px; }
.app > p{ flex:none; font-size:.8rem !important; margin:.45rem 0 0 !important; }

/* componentes: espaçamentos em rem para acompanhar o tamanho do texto */
.card{ padding:1.1rem 1.3rem !important; }
.callout{ padding:.9rem 1.2rem !important; margin:.9rem 0 !important; }
.formula{ padding:.8rem 1.1rem !important; }
.formula.big{ padding:1.1rem 1.5rem !important; }
.choice{ padding:.65rem 1rem !important; margin-bottom:.5rem !important; }
.grid2{ gap:1.6rem !important; } .grid3{ gap:1.1rem !important; }
.slide-inner{ overflow-x:hidden; }
/* figuras (círculo trigonométrico, gráficos): não podem ficar mais altas que o espaço do slide */
.slide-inner svg:not(.cover-curve){ max-height:min(26rem, 52vh); max-height:min(26rem, 52dvh); }
/* telas largas: listas de perguntas/cartões ocupam 3 colunas em vez de empilhar e rolar */
@media (min-width:900px){ .grid2{ grid-template-columns:repeat(auto-fit, minmax(min(21rem,100%), 1fr)); } }
ul.plain{ gap:.7rem !important; }
.icon{ width:1.9rem !important; height:1.9rem !important; }
table.tbl th, table.tbl td{ padding:.45rem .7rem !important; }
.cover-curve{ opacity:.4 !important; }

@media (max-width:640px){ .app{ padding:6px 6px 4px; } .stage{ border-radius:14px !important; } .navbar{ padding:.4rem .6rem !important; gap:.5rem !important; } }
@media (max-height:800px){ .app > p{ display:none; } .slide-inner{ padding-top:1rem !important; padding-bottom:.6rem !important; } .navbar{ padding:.35rem 1rem !important; } .topbar{ padding-bottom:.3rem !important; } }
@media (max-height:520px){ .app > p{ display:none; } .topbar{ display:none; } }
@media print{
  :root:root:root{ --bg:#fff; --surface:#fff; --surface-2:#f4f5fb; --ink:#111; --ink-soft:#444; --ink-faint:#666; --line:#ddd; --line-strong:#bbb; --primary:#382EAE; --primary-soft:#e7e4fb; --growth:#D9531A; --growth-soft:#fbe5d8; --decay:#0B7C82; --decay-soft:#d9f1ef; --success:#1C8A52; --success-soft:#dcf3e6; --danger:#C23B3B; --danger-soft:#fbe1e1; --shadow:transparent; --shadow-soft:transparent; }
  html{ font-size:10.5pt !important; }
  html, body{ height:auto !important; overflow:visible !important; background:#fff !important; background-image:none !important; }
  .app{ height:auto !important; display:block !important; padding:0 !important; }
  .topbar, .navbar, .app > p, .theme-toggle{ display:none !important; }
  .stage{ height:auto !important; display:block !important; border:0 !important; box-shadow:none !important; overflow:visible !important; background:#fff !important; }
  .slides{ position:static !important; display:block !important; }
  .slide{ position:relative !important; inset:auto !important; opacity:1 !important; transform:none !important; pointer-events:auto !important; display:block !important; overflow:visible !important; break-inside:avoid; page-break-inside:avoid; border:1px solid #ccc; border-radius:10px; margin:0 0 7mm; }
  .slide-inner{ overflow:visible !important; max-height:none !important; padding:6mm 8mm !important; }
  .cover-curve{ display:none !important; }
  *{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
}
</style>`;

const JS_DECK = `
<script ${MARK.replace('layout-v2', 'layout-v2-js')}>
(function(){
  var root = document.documentElement;
  var rail = document.getElementById('rail'), railCount = document.getElementById('railCount');
  var slides = document.querySelectorAll('.slide');
  if(!rail || !railCount || !slides.length) return;

  // larguras máximas em px dentro dos slides viram rem, para crescerem junto com o texto
  document.querySelectorAll('.slide-inner [style]').forEach(function(el){
    var mw = el.style.maxWidth;
    if(mw && /px$/.test(mw)) el.style.maxWidth = (parseFloat(mw) / 16) + 'rem';
  });

  // trilha de progresso reta (substitui as bolinhas em curva exponencial)
  var segs = [], track = document.createElement('div');
  track.className = 'seg-track';
  for(var i = 0; i < slides.length; i++){
    (function(i){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'seg';
      b.setAttribute('aria-label', 'Ir para o slide ' + (i + 1)); b.title = 'Slide ' + (i + 1);
      b.addEventListener('click', function(){ if(window.goTo) window.goTo(i); });
      track.appendChild(b); segs.push(b);
    })(i);
  }
  rail.appendChild(track);
  function atual(){ var m = railCount.textContent.match(/(\\d+)\\s*\\/\\s*(\\d+)/); return m ? (+m[1] - 1) : 0; }
  function pintar(){
    var c = atual();
    segs.forEach(function(b, i){
      b.classList.toggle('done', i < c); b.classList.toggle('now', i === c);
      if(i === c) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
  }

  // ajuste automático: reduz o texto só o necessário para o slide caber sem rolar
  function ajustar(){
    var inner = document.querySelector('.slide.active .slide-inner');
    if(!inner) return;
    root.style.setProperty('--fit', '1');
    var base = parseFloat(getComputedStyle(root).fontSize) || 16;
    var minimo = Math.max(0.6, Math.min(1, 14 / base)), f = 1, n = 0;
    while(inner.scrollHeight > inner.clientHeight + 2 && f > minimo && n < 14){
      f = Math.max(minimo, f * 0.95); root.style.setProperty('--fit', f.toFixed(3)); n++;
    }
  }
  var agendado = false;
  function agendar(){ if(agendado) return; agendado = true; requestAnimationFrame(function(){ agendado = false; ajustar(); }); }

  new MutationObserver(function(){ pintar(); ajustar(); }).observe(railCount, { childList: true, characterData: true, subtree: true });
  window.addEventListener('resize', agendar);
  window.addEventListener('orientationchange', agendar);
  // modo apresentação: F = tela cheia, B = tela preta (qualquer tecla ou clique volta)
  var preto = null;
  function pretoOff(){ if(preto){ preto.remove(); preto = null; } }
  document.addEventListener('keydown', function(e){
    var t = e.target && e.target.tagName; if(t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || e.ctrlKey || e.metaKey || e.altKey) return;
    if(preto){ pretoOff(); e.preventDefault(); return; }
    var k = (e.key || '').toLowerCase();
    if(k === 'f'){ try{ if(document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); }catch(x){} }
    else if(k === 'b' || k === '.'){ preto = document.createElement('div'); preto.style.cssText = 'position:fixed;inset:0;background:#000;z-index:99999;cursor:none'; preto.addEventListener('click', pretoOff); document.body.appendChild(preto); }
  });
  var dica = document.querySelector('.app > p'); if(dica && dica.textContent.indexOf('tela cheia') < 0) dica.textContent = dica.textContent.replace(/[. ]+$/, '') + ' · F: tela cheia · B: tela preta.';
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(agendar);
  pintar(); ajustar();
})();
</script>`;

const CSS_LITE = `<style ${MARK}>
/* ===== layout v2: texto que cresce com a tela e contêiner mais largo ===== */
:root{ --fit:1; }${FONT_FLUIDA}
.app{ max-width:min(60rem, 100%) !important; }
.sheet{ max-width:min(78rem, 100%) !important; }
@media print{
  :root:root:root{ --bg:#fff; --surface:#fff; --surface-2:#f4f5fb; --ink:#111; --ink-soft:#444; --ink-faint:#666; --line:#ddd; --line-strong:#bbb; --primary:#382EAE; --primary-soft:#e7e4fb; --growth:#D9531A; --growth-soft:#fbe5d8; --decay:#0B7C82; --decay-soft:#d9f1ef; --success:#1C8A52; --success-soft:#dcf3e6; --danger:#C23B3B; --danger-soft:#fbe1e1; --shadow:transparent; --shadow-soft:transparent; }
  html{ font-size:11pt !important; }
  body{ background:#fff !important; background-image:none !important; padding:0 !important; }
  .theme-toggle{ display:none !important; }
  .app, .sheet{ max-width:none !important; box-shadow:none !important; border-radius:0 !important; }
  *{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .card, .qcard, .section, .tr-step, .callout{ break-inside:avoid; }
  button.reveal, .btn, .tr-row, .hnt{ display:none !important; }
}
</style>`;

function* walk(d){ for(const n of fs.readdirSync(d)){ const p = path.join(d, n); const s = fs.statSync(p);
  if(s.isDirectory()) yield* walk(p); else if(n.endsWith('.html')) yield p; } }

const cont = { meta: 0, deck: 0, lite: 0, atualizou: 0, pulou: 0 };
for(const sub of ['aulas', 'educacao-financeira']){
  const base = path.join(root, sub); if(!fs.existsSync(base)) continue;
  for(const f of walk(base)){
    let html = fs.readFileSync(f, 'utf8'), mudou = false;
    const fragmento = /^\s*<title>/.test(html);
    if(fragmento && !/name="viewport"/.test(html)){
      html = html.replace(/<\/title>/, '</title>' + META); cont.meta++; mudou = true;
    }
    const ehDeck = /id="stage"/.test(html) && /class="slide/.test(html);
    const css = ehDeck ? CSS_DECK : CSS_LITE;
    if(html.includes(MARK)){
      // já aplicado: atualiza o bloco com a versão atual deste script
      const novo = html.replace(/<style id="layout-v2">[\s\S]*?<\/style>/, () => css)
        .replace(/<script id="layout-v2-js">[\s\S]*?<\/script>/, () => JS_DECK.trim());
      if(novo !== html){ html = novo; cont.atualizou++; mudou = true; } else cont.pulou++;
    } else {
      const fim = html.indexOf('</style>');
      if(fim < 0){ cont.pulou++; }
      else {
        html = html.slice(0, fim + 8) + '\n' + css + html.slice(fim + 8);
        if(ehDeck){ html = html.replace(/\s*$/, '\n') + JS_DECK + '\n'; cont.deck++; } else cont.lite++;
        mudou = true;
      }
    }
    if(mudou) fs.writeFileSync(f, html, 'utf8');
  }
}
console.log('meta viewport adicionado:', cont.meta, '| decks:', cont.deck, '| paginas leves:', cont.lite, '| atualizadas:', cont.atualizou, '| inalteradas:', cont.pulou);
