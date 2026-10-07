// Biblioteca de geração: decks, infográficos e atividades de Educação Financeira (2ª série)
// Reaproveita o CSS/JS dos arquivos-modelo já publicados (3ª série) para manter o padrão visual idêntico.
const fs = require('fs'), path = require('path');
const SITE = process.env.SITE || 'C:/Users/eduar/OneDrive/Documentos/Aulas/site';
const T3 = SITE + '/educacao-financeira/3-ano/3-tri/jogos-de-azar/';
const rd = f => fs.readFileSync(f, 'utf8');

const tplDeck = rd(T3 + 'aula.html');
const tplInfo = rd(T3 + 'infografico.html');
const tplEnem = rd(T3 + 'atividade-enem.html');

const iCapa = tplDeck.indexOf('      <!-- 0 CAPA -->');
const iTail = tplDeck.indexOf('\n    </div>\n\n    <div class="navbar">');
if (iCapa < 0 || iTail < 0) throw new Error('modelo de deck mudou');
const DECK_HEAD = tplDeck.slice(0, iCapa);
const DECK_TAIL = tplDeck.slice(iTail);

const iSheet = tplInfo.indexOf('<div class="sheet">');
const iInfoScr = tplInfo.indexOf('</div>\n\n<script>', iSheet);
const INFO_HEAD = tplInfo.slice(0, iSheet);
const INFO_TAIL = tplInfo.slice(iInfoScr + '</div>\n\n'.length);

const iApp = tplEnem.indexOf('<div class="app">');
const ACT_HEAD = tplEnem.slice(0, iApp);

// ---------- ícones ----------
const P = {
  check: '<path d="M5 12l5 5L20 7"/>',
  warn: '<path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M9 15c.6.7 1.7 1 3 1s2.7-.6 2.7-1.7c0-1-1-1.4-3-1.8s-3-.9-3-1.9C8.7 9.6 10.2 9 12 9s2.4.3 3 1"/>',
  chart: '<path d="M4 19V9M10 19V5M16 19v-7M4 19h16"/>',
  shield: '<path d="M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bulb: '<path d="M9.5 3a5.5 5.5 0 0 0-4 9.3c.8.8 1.5 1.6 1.5 3.2V17h6v-1.5c0-1.6.7-2.4 1.5-3.2A5.5 5.5 0 0 0 9.5 3Z"/><path d="M7 21h5"/>',
  up: '<path d="M4 19 10 12l4 4 6-9"/><path d="M15 7h5v5"/>',
  down: '<path d="M4 5 10 12l4-4 6 9"/><path d="M15 17h5v-5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  building: '<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h6v12h-6M8 7h2M8 11h2M8 15h2"/>',
  scale: '<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7ZM19 7l-3 7a3 3 0 0 0 6 0l-3-7Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  phone: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.2c3 .2 5 2.2 5 5.8"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-14 0 9-5 15-13 15"/><path d="M5 19l8-8"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>'
};
const ic = (k, cls = '', s = 20) => `<svg class="${cls}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k] || P.check}</svg>`;
const icb = (k, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${P[k] || P.check}</svg>`;

// ---------- componentes de slide ----------
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const sl = (eb, title, body, o = {}) => `
      <section class="slide">
        <div class="slide-inner"${o.center ? ' style="display:flex;flex-direction:column;justify-content:center;"' : ''}>
          <div class="eyebrow${o.cls ? ' ' + o.cls : ''}">${eb}</div>
          <h2 class="title">${title}</h2>
          ${body}
        </div>
      </section>
`;
const lede = t => `<p class="lede">${t}</p>`;
const card = (h, cls = '', st = '') => `<div class="card${cls ? ' ' + cls : ''}"${st ? ` style="${st}"` : ''}>${h}</div>`;
const cardT = (title, text, cls = '', tc = '') => card(`<strong${tc ? ` style="color:${tc};"` : ''}>${title}</strong><p style="margin-top:8px;font-size:.92rem;">${text}</p>`, cls);
const callout = (h, p, cls = '') => `<div class="callout${cls ? ' ' + cls : ''}"><h4>${h}</h4><p>${p}</p></div>`;
const formula = (t, big = false, st = '') => `<p class="formula${big ? ' big' : ''}"${st ? ` style="${st}"` : ''}>${t}</p>`;
const g2 = (a, b, st = 'margin-top:14px;') => `<div class="grid2" style="${st}">${a}${b ? `\n${b}` : ''}</div>`;
const g3 = (...c) => `<div class="grid3" style="margin-top:12px;">${c.join('\n')}</div>`;
const g4 = (...c) => `<div class="grid4" style="margin-top:12px;">${c.join('\n')}</div>`;
const tbl = (heads, rows, left = true) => `<table class="tbl">
  <tr>${heads.map(h => `<th>${h}</th>`).join('')}</tr>
  ${rows.map(r => `<tr>${r.map((c, i) => `<td${left && i === 0 ? ' style="text-align:left;"' : ''}>${c}</td>`).join('')}</tr>`).join('\n  ')}
</table>`;
const reveal = (label, html) => `<button class="reveal" onclick="toggleAnswer(this)">${label}</button>\n<div class="answer">${html}</div>`;
const checks = (items, s = '.9rem') => `<ul class="plain">${items.map(t => `<li>${ic('check', '', 18)}<span style="font-size:${s};">${t}</span></li>`).join('')}</ul>`;
const stat = (n, l, bg = '') => `<div class="stat"${bg ? ` style="background:var(--${bg}-soft);"` : ''}><span class="num"${bg ? ` style="color:var(--${bg});"` : ''}>${n}</span><span class="lbl">${l}</span></div>`;
const badge = (t, c = '') => `<span class="badge"${c ? ` style="color:var(--${c});background:var(--${c}-soft);border-color:transparent;"` : ''}>${t}</span>`;
const vf = (t, ok, why) => `<button class="choice vf" data-ok="${ok ? 1 : 0}" data-why="${esc(why)}">${t}</button>`;
const mini = (q, opts, a, why) => `<div class="mq" data-a="${a}"><p style="font-weight:700;font-size:.92rem;margin:0 0 8px;">${q}</p>${opts.map((o, i) => `<button class="choice mqo" data-i="${i}">${o}</button>`).join('')}<div class="fb"></div><div class="answer"><p>${why}</p></div></div>`;
const qblock = (n, q, opts, a) => `<div>
              <p style="font-weight:700;font-size:.9rem;">${n}. ${q}</p>
              <div class="qz" data-q="${n}">
                ${opts.map((o, i) => `<button class="choice qopt" data-ok="${i === a ? 1 : 0}">${o}</button>`).join('\n                ')}
              </div>
            </div>`;
const quizSlide = qs => `
      <section class="slide">
        <div class="slide-inner" style="position:relative;">
          <div class="score-pill">Pontos: <span id="scoreVal">0</span>/${qs.length}</div>
          <div class="eyebrow">Desafio final</div>
          <h2 class="title">Quiz interativo</h2>
          <div class="grid2" style="margin-top:8px;">
            ${qs.map((x, i) => qblock(i + 1, x.q, x.o, x.a)).join('\n            ')}
          </div>
        </div>
      </section>
`;
const sintese = (cards, msg, title = 'A ideia central') => sl('Síntese', title, `
          <div class="grid3" style="margin-top:10px;">
            ${cards.map(([b, t]) => `<div class="card"><span class="badge">${b}</span><p style="font-size:.85rem;margin-top:8px;">${t}</p></div>`).join('\n            ')}
          </div>
          <div class="callout success" style="margin-top:18px;">
            <h4>A mensagem central</h4>
            <p class="formula big" style="display:block;text-align:center;margin-top:8px;">${msg}</p>
          </div>`);
const refsSlide = (list, eb = 'Para continuar', title = 'Referências e próximos passos', texto = '') => `
      <section class="slide">
        <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
          <div class="eyebrow">${eb}</div>
          <h2 class="title">${title}</h2>
          ${texto ? `<p class="lede">${texto}</p>` : ''}
          <div class="card" style="margin-top:16px;">
            <strong style="font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-soft);">Referências</strong>
            <p style="font-size:.8rem;color:var(--ink-soft);margin-top:8px;line-height:1.6;">${list.join('<br>\n              ')}</p>
          </div>
        </div>
      </section>
`;
const roteiroSlide = (txt, items) => sl('Roteiro', 'A trilha de hoje', `${lede(txt)}
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;">
            ${items.map(([t, h, k], i) => `<div class="step-row"><span class="badge">${String(i + 1).padStart(2, '0')}</span>${icb(k || 'check')}<div><strong>${t}</strong><div class="hint">${h}</div></div></div>`).join('\n            ')}
          </div>`);
const objetivosSlide = (list, ctitle, ctext, ccls = 'growth', tc = 'growth-ink') => sl('Objetivos da aula', 'O que você vai saber fazer', `
          <div class="grid2" style="margin-top:18px;">
            ${checks(list)}
            <div class="card ${ccls}">
              <h4 class="disp" style="margin:0 0 10px;font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;color:var(--${tc});">${ctitle}</h4>
              <p style="font-size:.9rem;margin:0;">${ctext}</p>
            </div>
          </div>`);
const coverSlide = ({ eyebrow, h1, sub, badges, color = 'primary', curve, end }) => `
      <!-- CAPA -->
      <section class="slide active">
        <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;position:relative;">
          <svg viewBox="0 0 900 260" style="position:absolute;right:-30px;bottom:6px;width:min(62%,560px);height:auto;opacity:.9;pointer-events:none;" aria-hidden="true" class="cover-curve">
            <line x1="40" y1="220" x2="860" y2="220" stroke="var(--line-strong)" stroke-width="2"/>
            <line x1="40" y1="220" x2="40" y2="20" stroke="var(--line-strong)" stroke-width="2"/>
            <path d="${curve || 'M40,210 C 200,205 340,180 480,130 C 620,80 740,50 840,30'}" fill="none" stroke="var(--${color})" stroke-width="6" stroke-linecap="round"/>
            <circle cx="${(end || [840, 30])[0]}" cy="${(end || [840, 30])[1]}" r="8" fill="var(--${color})"/>
          </svg>
          <div class="eyebrow">${eyebrow}</div>
          <h1 class="disp" style="font-size:clamp(2.1rem,5.6vw,3.9rem);font-weight:900;line-height:1.0;margin:0 0 10px;max-width:15ch;">${h1}</h1>
          <p class="subtitle" style="font-size:clamp(1rem,1.8vw,1.22rem);max-width:52ch;">${sub}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">
            ${badges.map(([t, c]) => badge(t, c)).join('\n            ')}
          </div>
          <button class="reveal" style="margin-top:22px;width:fit-content;" onclick="goTo(1)">Começar a aula →</button>
        </div>
      </section>
`;

// script comum às decks: mini-quizzes (.mq) — não entram na nota do quiz final
const COMMON_EXTRA = `
<script>
(function(){
  document.querySelectorAll('.mq').forEach(function(box){
    var a = parseInt(box.dataset.a, 10);
    box.querySelectorAll('.mqo').forEach(function(b){
      b.addEventListener('click', function(){
        if(box.dataset.done) return; box.dataset.done = '1';
        var ok = parseInt(b.dataset.i, 10) === a;
        box.querySelectorAll('.mqo').forEach(function(x){ x.disabled = true; if(parseInt(x.dataset.i,10) === a) x.classList.add('correct'); });
        if(!ok) b.classList.add('wrong');
        var fb = box.querySelector('.fb'); fb.textContent = ok ? '✔ Isso mesmo!' : '✘ Quase — veja o porquê:'; fb.className = 'fb ' + (ok ? 'ok' : 'no');
        box.querySelector('.answer').classList.add('open');
      });
    });
  });
})();
</script>
`;
const CSS_EXTRA = `<style>
  .mq{ margin-top:12px; }
  .wid{ background:var(--surface-2); border:1px solid var(--line); border-radius:16px; padding:14px 16px; }
  .wid label{ display:block; font-size:.78rem; font-weight:700; color:var(--ink-soft); margin:8px 0 2px; font-family:'Archivo',sans-serif; }
  .wid input[type=range]{ width:100%; accent-color:var(--primary); }
  .wid input[type=number], .wid select{ font:inherit; font-size:.95rem; width:100%; padding:.4em .6em; border-radius:10px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); }
  .wid .out{ font-family:'JetBrains Mono',monospace; font-weight:700; font-size:1.2rem; color:var(--primary); }
  .wid .row{ display:flex; gap:12px; flex-wrap:wrap; } .wid .row > div{ flex:1 1 130px; }
  .bar{ height:14px; border-radius:99px; background:var(--line); overflow:hidden; display:flex; }
  .bar > span{ display:block; height:100%; transition:width .3s ease; }
  .chip{ display:inline-flex; align-items:center; gap:.4em; padding:.35em .8em; border-radius:99px; border:1.5px solid var(--line-strong); background:var(--surface); cursor:pointer; font-weight:700; font-size:.82rem; color:var(--ink); }
  .chip.on{ background:var(--primary); color:var(--primary-ink); border-color:var(--primary); }
  .small{ font-size:.82rem; }
</style>`;

// ---------- montagem de deck ----------
function deck(c) {
  let h = DECK_HEAD;
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${c.title}</title>`);
  h = h.replace('Educação Financeira · Jogos de Azar', 'Educação Financeira · ' + c.brand);
  h = h.replace('3ª Série do Ensino Médio · Trimestre 3', c.aulas + ' · ' + (c.serie || '2ª Série') + ' do Ensino Médio · Trimestre 3');
  h = h.replace('</head>', '</head>');
  h = h.replace('<link rel="preconnect" href="https://fonts.googleapis.com">', CSS_EXTRA + '\n<link rel="preconnect" href="https://fonts.googleapis.com">');
  const slides = c.slides.join('\n');
  const n = c.slides.length;
  let t = DECK_TAIL.replace(/1 \/ \d+<\/div>/, `1 / ${n}</div>`).replace('theme-pref-ef-jogos', 'theme-pref-ef2-' + c.key);
  const extra = (c.extra ? `\n<script>\n(function(){\n${c.extra}\n})();\n</script>\n` : '') + COMMON_EXTRA;
  t = t.replace('<script id="layout-v2-js">', extra + '\n<script id="layout-v2-js">');
  // pontuação máxima do quiz é informada pelo próprio slide; o JS de progresso conta os .qz
  return h + slides + t;
}

// ---------- infográfico ----------
function info(c) {
  let h = INFO_HEAD.replace(/<title>[^<]*<\/title>/, `<title>${c.title}</title>`);
  const body = `<div class="sheet">

  <div class="masthead">
    <svg class="mast-curve" viewBox="0 0 500 200" aria-hidden="true">
      <line x1="20" y1="170" x2="480" y2="170" stroke="var(--line-strong)" stroke-width="2"/>
      <line x1="20" y1="170" x2="20" y2="16" stroke="var(--line-strong)" stroke-width="2"/>
      <path d="${c.curve || 'M20,160 C 120,150 200,120 280,90 C 360,60 420,40 480,24'}" fill="none" stroke="var(--${c.color || 'primary'})" stroke-width="5" stroke-linecap="round"/>
      <circle cx="480" cy="${(((c.curve || '').match(/(\d+(?:\.\d+)?)\s*$/) || [0, 24])[1])}" r="6" fill="var(--${c.color || 'primary'})"/>
    </svg>
    <div class="eyebrow">Educação Financeira · 2ª série · ${c.aulas}</div>
    <h1>${c.h1}</h1>
    <p class="lede">${c.lede}</p>
    <div class="badges">
      ${c.badges.map(b => `<span class="badge">${b}</span>`).join('\n      ')}
    </div>
  </div>

  <div class="body-grid">
${c.sections.join('\n')}
  </div>
${(c.wide || []).join('\n')}

  <div class="footer">
    <p>Educação Financeira · 2ª série do Ensino Médio · ${c.aulas} · ${c.brand}</p>
    <p>${c.fontes}</p>
  </div>

</div>

`;
  let t = INFO_TAIL.replace('theme-pref-ef-jogos-info', 'theme-pref-ef2-info-' + c.key);
  h = h.replace(/\.masthead h1 span\{ color:var\(--danger\); \}/, `.masthead h1 span{ color:var(--${c.color || 'primary'}); }`);
  return h + body + t;
}
const sec = (tag, title, icon, body, ic2 = 'primary') => `    <div class="section">
      <div class="tag">${tag}</div>
      <h2>${icb(icon, ic2)}${title}</h2>
${body}
    </div>`;
const wideSec = (tag, title, icon, body, ic2 = 'primary') => `  <div class="section wide" style="border-right:none;">
    <div class="tag">${tag}</div>
    <h2>${icb(icon, ic2)}${title}</h2>
${body}
  </div>`;

// ---------- atividades ----------
function actHead(c) {
  let h = ACT_HEAD.replace(/<title>[^<]*<\/title>/, `<title>${c.title}</title>`);
  h = h.replace('Educação Financeira · Jogos de Azar · Atividade extra', 'Educação Financeira · ' + c.brand + ' · Atividade extra');
  h = h.replace('Acertos: <span id="scoreVal">0</span>/4', c.pill || 'Acertos: <span id="scoreVal">0</span>/' + (c.questions ? c.questions.length : 0));
  h = h.replace('<link rel="preconnect" href="https://fonts.googleapis.com">', CSS_EXTRA + ACT_CSS + '\n<link rel="preconnect" href="https://fonts.googleapis.com">');
  return h;
}
const ACT_CSS = `<style>
  .tr-step{ border:1.5px solid var(--line-strong); border-radius:16px; padding:16px 18px; margin-bottom:14px; background:var(--surface); }
  .tr-step.locked{ opacity:.45; pointer-events:none; filter:grayscale(.6); }
  .tr-step.done{ border-color:var(--success); background:var(--success-soft); }
  .tr-row{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-top:8px; }
  .tr-row input{ font:inherit; font-family:'JetBrains Mono',monospace; padding:.45em .7em; border-radius:10px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); width:min(14rem,100%); }
  .btn{ font-family:'Archivo',sans-serif; font-weight:700; font-size:.85rem; border-radius:10px; padding:.55em 1.1em; border:1.5px solid var(--primary); background:var(--primary); color:var(--primary-ink); cursor:pointer; }
  .btn.ghost{ background:var(--surface); color:var(--primary); }
  .btn:disabled{ opacity:.4; cursor:default; }
  .track{ height:10px; background:var(--line); border-radius:99px; overflow:hidden; margin:6px 0 18px; }
  .track > span{ display:block; height:100%; width:0; background:var(--primary); transition:width .4s ease; }
  .hintbox{ display:none; margin-top:8px; font-size:.88rem; color:var(--ink-soft); border-left:3px solid var(--decay); padding-left:10px; }
  .hintbox.show{ display:block; }
</style>`;
const THEME_JS = key => `<script>
(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if(!btn) return;
  var sunIcon = btn.querySelector('.i-sun');
  var moonIcon = btn.querySelector('.i-moon');
  var KEY = 'theme-pref-ef2-${key}';
  function systemTheme(){ try{ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }catch(e){ return 'dark'; } }
  function getStored(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function setStored(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
  function apply(theme){
    root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark';
    if(isDark){ sunIcon.removeAttribute("hidden"); moonIcon.setAttribute("hidden",""); }
    else{ sunIcon.setAttribute("hidden",""); moonIcon.removeAttribute("hidden"); }
    btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro (ideal para projetor)' : 'Mudar para modo escuro');
    btn.title = isDark ? 'Modo claro — ideal para sala iluminada / projetor' : 'Modo escuro';
  }
  apply(getStored() || systemTheme());
  btn.addEventListener('click', function(){
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next); setStored(next);
  });
})();
</script>`;
const HOOK_JS = `<script>
(function(){
  try{ window.parent.postMessage({type:'lesson-progress', event:'opened'}, '*'); }catch(e){}
  window.reportarConclusao = function(score, total){
    try{ window.parent.postMessage({type:'lesson-progress', event:'quiz-completed', score:score, total:total}, '*'); }catch(e){}
  };
})();
</script>`;

// página de questões no estilo ENEM
function enemPage(c) {
  const qs = c.questions;
  const cards = qs.map((q, i) => `
  <div class="card qcard" data-qid="${i + 1}">
    <span class="badge">${q.badge}</span>
    <p style="margin-top:10px;"><span class="qnum">${i + 1}.</span> ${q.text}</p>
    ${q.extra || ''}
    <p>${q.cmd}</p>
    <div class="qz" data-q="${i + 1}">
      ${q.opts.map((o, j) => `<button class="choice qopt" data-ok="${j === q.a ? 1 : 0}">${'abcde'[j]}) ${o}</button>`).join('\n      ')}
    </div>
    <div class="fb"></div>
    <div class="answer">
      ${q.sol}
    </div>
  </div>`).join('\n');
  const body = `
<div class="app">
  <div class="topbar">
    <div class="brand"><span class="dot"></span> Educação Financeira · ${c.brand} · Atividade extra</div>
    <div class="score-pill">Acertos: <span id="scoreVal">0</span>/${qs.length}</div>
  </div>

  <div class="eyebrow ${c.cls || ''}">${c.eyebrow}</div>
  <h1 class="title">${c.h1}</h1>
  <p class="subtitle">${c.subtitle}</p>

  <div class="callout ${c.cls || ''}">
    <h4>${c.introT}</h4>
    <p>${c.introP}</p>
  </div>
${cards}

  <div class="card success" id="finalCard" style="display:none;">
    <h4 class="disp" style="margin:0 0 6px;">Atividade concluída!</h4>
    <p id="finalMsg" style="margin:0;"></p>
  </div>
</div>

${THEME_JS(c.key)}

<script>
(function(){
  var TOTAL = ${qs.length};
  var scoreEl = document.getElementById('scoreVal');
  var score = 0, answered = 0;
  var finalCard = document.getElementById('finalCard');
  var finalMsg = document.getElementById('finalMsg');
  document.querySelectorAll('.qz').forEach(function(group){
    group.querySelectorAll('.qopt').forEach(function(optBtn){
      optBtn.addEventListener('click', function(){
        if(group.dataset.done) return;
        group.dataset.done = '1';
        var card = group.closest('.qcard');
        var fb = card.querySelector('.fb');
        var ans = card.querySelector('.answer');
        var ok = optBtn.dataset.ok === '1';
        group.querySelectorAll('.qopt').forEach(function(b){ b.disabled = true; if(b.dataset.ok === '1') b.classList.add('correct'); });
        if(!ok) optBtn.classList.add('wrong');
        fb.textContent = ok ? '✔ Resposta correta! Veja a resolução:' : '✘ Não é essa — veja a resolução completa:';
        fb.className = 'fb ' + (ok ? 'ok' : 'no');
        ans.classList.add('open');
        answered++;
        if(ok){ score++; scoreEl.textContent = score; }
        if(answered === TOTAL){
          finalCard.style.display = 'block';
          finalMsg.textContent = 'Você acertou ' + score + ' de ' + TOTAL + ' questões. ' + ${JSON.stringify(c.final)};
          finalCard.scrollIntoView({behavior:'smooth', block:'center'});
          try{ window.reportarConclusao(score, TOTAL); }catch(e){}
        }
      });
    });
  });
})();
</script>

${HOOK_JS}
`;
  return actHead({ ...c, pill: 'x' }).replace(/<div class="score-pill">[^<]*<\/div>/, '') + body;
}

// trilha de problemas: respostas numéricas com dicas e 2 tentativas
function trilhaPage(c) {
  const ps = c.problems;
  const steps = ps.map((p, i) => `
  <div class="tr-step${i ? ' locked' : ''}" data-i="${i}">
    <span class="badge">Etapa ${i + 1} de ${ps.length} · ${p.tag}</span>
    <p style="margin-top:10px;">${p.q}</p>
    <div class="tr-row">
      <input type="text" inputmode="decimal" placeholder="${p.ph || 'sua resposta'}" aria-label="Resposta da etapa ${i + 1}">
      <span class="small">${p.unit || ''}</span>
      <button class="btn chk">Verificar</button>
      <button class="btn ghost hnt">Dica</button>
    </div>
    <div class="hintbox">${p.hint}</div>
    <div class="fb"></div>
    <div class="answer">${p.sol}</div>
  </div>`).join('\n');
  const data = JSON.stringify(ps.map(p => ({ a: p.a, tol: p.tol == null ? 0.01 : p.tol })));
  const body = `
<div class="app">
  <div class="topbar">
    <div class="brand"><span class="dot"></span> Educação Financeira · ${c.brand} · Atividade extra</div>
    <div class="score-pill">Etapas: <span id="scoreVal">0</span>/${ps.length}</div>
  </div>

  <div class="eyebrow ${c.cls || ''}">${c.eyebrow}</div>
  <h1 class="title">${c.h1}</h1>
  <p class="subtitle">${c.subtitle}</p>
  <div class="track"><span id="trk"></span></div>
${steps}

  <div class="card success" id="finalCard" style="display:none;">
    <h4 class="disp" style="margin:0 0 6px;">Trilha concluída!</h4>
    <p id="finalMsg" style="margin:0;"></p>
  </div>
</div>

${THEME_JS(c.key)}

<script>
(function(){
  var DATA = ${data};
  var TOTAL = DATA.length, score = 0, done = 0;
  var scoreEl = document.getElementById('scoreVal'), trk = document.getElementById('trk');
  var finalCard = document.getElementById('finalCard'), finalMsg = document.getElementById('finalMsg');
  function num(s){ s = String(s).trim().replace(/R\\$/g,'').replace(/%/g,'').replace(/\\s/g,''); if(/,/.test(s)) s = s.replace(/\\./g,'').replace(',', '.'); return parseFloat(s); }
  document.querySelectorAll('.tr-step').forEach(function(st){
    var i = parseInt(st.dataset.i, 10), tries = 0;
    var inp = st.querySelector('input'), chk = st.querySelector('.chk'), hnt = st.querySelector('.hnt');
    var fb = st.querySelector('.fb'), ans = st.querySelector('.answer'), hb = st.querySelector('.hintbox');
    hnt.addEventListener('click', function(){ hb.classList.toggle('show'); });
    function finish(ok, firstTry){
      st.classList.add('done'); chk.disabled = true; inp.disabled = true; ans.classList.add('open');
      done++; if(ok){ score++; scoreEl.textContent = score; }
      trk.style.width = Math.round(done / TOTAL * 100) + '%';
      var nxt = document.querySelector('.tr-step[data-i="' + (i + 1) + '"]');
      if(nxt){ nxt.classList.remove('locked'); setTimeout(function(){ nxt.scrollIntoView({behavior:'smooth', block:'center'}); }, 250); }
      if(done === TOTAL){
        finalCard.style.display = 'block';
        finalMsg.textContent = 'Você resolveu ' + score + ' de ' + TOTAL + ' etapas corretamente. ' + ${JSON.stringify(c.final)};
        setTimeout(function(){ finalCard.scrollIntoView({behavior:'smooth', block:'center'}); }, 300);
        try{ window.reportarConclusao(score, TOTAL); }catch(e){}
      }
    }
    function verificar(){
      var v = num(inp.value);
      if(isNaN(v)){ fb.textContent = 'Digite um número (use vírgula ou ponto).'; fb.className = 'fb no'; return; }
      tries++;
      var ok = Math.abs(v - DATA[i].a) <= DATA[i].tol;
      if(ok){ fb.textContent = '✔ Correto!' + (tries === 1 ? '' : ' (na ' + tries + 'ª tentativa)'); fb.className = 'fb ok'; finish(true); }
      else if(tries >= 2){ fb.textContent = '✘ Não foi dessa vez — veja a resolução e siga em frente.'; fb.className = 'fb no'; finish(false); }
      else { fb.textContent = '✘ Ainda não. Tente de novo (você tem mais uma tentativa) — use a dica!'; fb.className = 'fb no'; hb.classList.add('show'); }
    }
    chk.addEventListener('click', verificar);
    inp.addEventListener('keydown', function(e){ if(e.key === 'Enter') verificar(); });
  });
})();
</script>

${HOOK_JS}
`;
  return actHead({ ...c, pill: 'x' }).replace(/<div class="score-pill">[^<]*<\/div>/, '') + body;
}

// atividade criativa: corpo e script livres (precisa chamar window.reportarConclusao)
function freePage(c) {
  const body = `
<div class="app">
  <div class="topbar">
    <div class="brand"><span class="dot"></span> Educação Financeira · ${c.brand} · Atividade extra</div>
    <div class="score-pill">${c.pill}</div>
  </div>

  <div class="eyebrow ${c.cls || ''}">${c.eyebrow}</div>
  <h1 class="title">${c.h1}</h1>
  <p class="subtitle">${c.subtitle}</p>
${c.body}
</div>

${THEME_JS(c.key)}

<script>
(function(){
${c.script}
})();
</script>

${HOOK_JS}
`;
  return actHead({ ...c, pill: 'x' }).replace(/<div class="score-pill">[^<]*<\/div>/, '') + body;
}

function write(rel, content) {
  const f = path.join(SITE, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content, 'utf8');
  console.log('  +', rel, (content.length / 1024).toFixed(1) + 'KB');
}

module.exports = { SITE, ic, icb, P, esc, sl, lede, card, cardT, callout, formula, g2, g3, g4, tbl, reveal, checks, stat, badge, vf, mini, qblock, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, deck, info, sec, wideSec, enemPage, trilhaPage, freePage, write };
