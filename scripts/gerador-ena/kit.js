// Kit do ENA / PROFMAT: mini-linguagem de matemática ($...$), figuras SVG, padrões de slide e modelos de atividade.
// Reaproveita a biblioteca do gerador de Educação Financeira (scripts/gerador-ef/lib.js) para manter o mesmo visual.
const L = require('../gerador-ef/lib.js');

// ------------------------------------------------------------------
// 1) Matemática em texto:  $x^2 + {a|b}$  → HTML com frações, raízes, expoentes e itálico nas variáveis
//    {num|den} fração · √{x} √x ∛{x} √[n]{x} raiz · x^2 x^{n-1} expoente · a_n a_{n+1} índice
//    -  vira −  ·  *  vira ·  ·  <=  >=  !=  =>  <=>  ->  +-  ~=  viram símbolos · "texto" fica reto
// ------------------------------------------------------------------
const KEEP = new Set(['sen', 'cos', 'tg', 'tan', 'sin', 'log', 'ln', 'mmc', 'mdc', 'mod', 'min', 'max', 'det', 'lim', 'sec', 'csc', 'cot', 'cotg', 'rad']);
const esc1 = c => c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c;
function matching(s, i) { let d = 0; for (let j = i; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}') { d--; if (d === 0) return j; } } return s.length - 1; }
function topBar(s) { let d = 0; for (let j = 0; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}') d--; else if (s[j] === '|' && d === 0) return j; } return -1; }
function atom(s, i) { // átomo depois de ^ ou _
  if (s[i] === '{') { const j = matching(s, i); return [s.slice(i + 1, j), j + 1]; }
  let j = i; if (s[j] === '−' || s[j] === '+' || s[j] === '-') j++;
  if (/[0-9]/.test(s[j] || '')) { while (/[0-9]/.test(s[j] || '')) j++; return [s.slice(i, j), j]; }
  if (/[A-Za-zα-ωΑ-Ω]/.test(s[j] || '')) return [s.slice(i, j + 1), j + 1];
  return [s.slice(i, j + 1), j + 1];
}
function conv(s) {
  let o = '', i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '{') { const j = matching(s, i); const inner = s.slice(i + 1, j); const b = topBar(inner); o += b >= 0 ? `<span class="fr"><span>${conv(inner.slice(0, b))}</span><span>${conv(inner.slice(b + 1))}</span></span>` : conv(inner); i = j + 1; continue; }
    if (c === '√' || c === '∛') {
      let idx = c === '∛' ? '3' : ''; i++;
      if (s[i] === '[') { const j = s.indexOf(']', i); idx = s.slice(i + 1, j); i = j + 1; }
      const [a, ni] = atom(s, i); i = ni;
      o += `<span class="rt">${idx ? `<sup class="sq">${conv(idx)}</sup>` : ''}√<span class="rr">${conv(a)}</span></span>`; continue;
    }
    if (c === '^' || c === '_') { const [a, ni] = atom(s, i + 1); i = ni; o += c === '^' ? `<sup>${conv(a)}</sup>` : `<sub>${conv(a)}</sub>`; continue; }
    if (c === '\u0001' || c === '\u0002') { o += c === '\u0001' ? '{' : '}'; i++; continue; }
    if (c === '"') { const j = s.indexOf('"', i + 1); o += s.slice(i + 1, j < 0 ? s.length : j).replace(/[&<>]/g, esc1); i = (j < 0 ? s.length : j) + 1; continue; }
    if (/[A-Za-z]/.test(c)) {
      let j = i; while (/[A-Za-z]/.test(s[j] || '')) j++;
      const w = s.slice(i, j);
      if (KEEP.has(w) || (w.length >= 2 && w === w.toUpperCase())) o += w; else o += `<i>${w}</i>`;
      i = j; continue;
    }
    o += esc1(c); i++;
  }
  return o;
}
function prep(s) { // tokens ASCII -> símbolos, fora das aspas
  return s.split('"').map((p, k) => k % 2 ? '"' + p + '"' : p
    .replace(/<=>/g, '⇔').replace(/=>/g, '⇒').replace(/<=/g, '≤').replace(/>=/g, '≥').replace(/!=/g, '≠').replace(/\+-/g, '±').replace(/~=/g, '≈').replace(/->/g, '→')
    .replace(/\*/g, '·').replace(/-/g, '−').replace(/\\\{/g, '\u0001').replace(/\\\}/g, '\u0002').replace(/\\ /g, ' ')).join('');
}
const m = s => conv(prep(s));
const fm = s => `<span class="tex">${m(s)}</span>`;
// substitui $...$ em qualquer string de HTML (ignora <script> e <style>)
function T(html) {
  const res = T0(html);
  const livre = res.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/).filter(p => !/^<(script|style)/.test(p)).join('');
  const at = livre.match(/="[^"<>]*<(span|i|sup|sub)[ >]/);
  if (at) throw new Error('matemática dentro de atributo HTML (use texto simples em data-*): …' + livre.slice(Math.max(0, at.index - 40), at.index + 90) + '…');
  const i = livre.indexOf('$');
  if (i >= 0) throw new Error('"$" sem par no HTML gerado: …' + livre.slice(Math.max(0, i - 60), i + 60).replace(/\s+/g, ' ') + '…');
  return res;
}
function T0(html) {
  return String(html).split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/).map(part => /^<(script|style)/.test(part) ? part : part.replace(/(^|[^A-Za-z$])R\$(?= ?\d)/g, '$1R&#36;').replace(/\$([^$]+?)\$/g, (_, e) => fm(e))).join('');
}
const F = (e, big = false) => `<p class="formula${big ? ' big' : ''}">${fm(e)}</p>`;

// ------------------------------------------------------------------
// 2) Figuras SVG
// ------------------------------------------------------------------
const ink = 'var(--ink)', soft = 'var(--ink-soft)', pri = 'var(--primary)', gro = 'var(--growth)', dec = 'var(--decay)', suc = 'var(--success)', dan = 'var(--danger)';
const svg = (w, h, inner, st = '') => `<svg viewBox="0 0 ${w} ${h}" style="width:100%;max-width:${st || w + 'px'};height:auto;display:block;margin:6px auto;" role="img" aria-hidden="true">${inner}</svg>`;
const ln = (x1, y1, x2, y2, c = ink, w = 2, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
const pg = (pts, fill = 'none', c = ink, w = 2) => `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const ci = (x, y, r, fill = 'none', c = ink, w = 2, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${w}" ${extra}/>`;
const dot = (x, y, c = ink, r = 3.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const tx = (x, y, t, c = ink, sz = 14, anc = 'middle', extra = '') => `<text x="${x}" y="${y}" fill="${c}" font-size="${sz}" font-family="Source Serif 4, serif" font-style="italic" text-anchor="${anc}" ${extra}>${t}</text>`;
const txu = (x, y, t, c = ink, sz = 13, anc = 'middle') => `<text x="${x}" y="${y}" fill="${c}" font-size="${sz}" font-family="Archivo, sans-serif" font-weight="700" text-anchor="${anc}">${t}</text>`;
const rect = (x, y, w, h, fill = 'none', c = ink, sw = 2, r = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`;
const rightMark = (x, y, dx, dy, s = 10) => `<path d="M${x + dx * s},${y} L${x + dx * s},${y + dy * s} L${x},${y + dy * s}" fill="none" stroke="${ink}" stroke-width="1.5"/>`;

// ------------------------------------------------------------------
// 3) Padrões de slide
// ------------------------------------------------------------------
const { sl, lede, card, cardT, callout, formula, g2, g3, g4, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const FONTE = ['Guia completo ENA · PROFMAT (material de estudo), capítulos de teoria, fórmulas e questões comentadas.',
  'Provas ENA 2025 e ENA 2026 (Exame Nacional de Acesso ao PROFMAT) — SBM/PROFMAT. Enunciados resumidos para estudo.'];
// questão que já caiu: enunciado + alternativas de treino + resolução
const ja = (ev, titulo, enunciado, opts, a, sol, nota = 'Enunciado resumido; alternativas de treino.') => sl(`Já caiu · ${ev}`, titulo, `
          ${lede(enunciado)}
          ${mini('Escolha a alternativa:', opts, a, sol)}
          <p class="hint" style="margin-top:6px;">${nota}</p>`, { cls: 'growth' });
// exemplo resolvido passo a passo
const exemplo = (eb, titulo, enunciado, passos, fecho = '', cls = 'primary') => sl(eb, titulo, `
          ${lede(enunciado)}
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">
            ${passos.map(([t, h], i) => `<div class="step-row"><span class="badge">${i + 1}</span><div><strong>${t}</strong>${h ? `<div class="hint">${h}</div>` : ''}</div></div>`).join('\n            ')}
          </div>
          ${fecho ? callout('Resultado', fecho, 'success') : ''}`, { cls });
const armadilhas = (eb, titulo, lista, cls = 'danger') => sl(eb, titulo, `
          <div class="grid2" style="margin-top:8px;">
            ${lista.map(([t, h]) => card(`<strong>${ic('warn', '', 18)} ${t}</strong><p style="font-size:.9rem;margin-top:8px;">${h}</p>`, 'danger')).join('\n            ')}
          </div>`, { cls });
const teoria = (eb, titulo, corpo, cls = 'primary') => sl(eb, titulo, corpo, { cls });
// verdadeiro/falso (usa .vf do template)
const vfBlock = (itens, titulo = 'Verdadeiro ou falso?') => `<div class="grid2" style="margin-top:8px;">${itens.map(([t, ok, why]) => vf(t, ok, String(why).replace(/<[^>]+>/g, '').replace(/\$/g, ''))).join('\n')}</div>`;
const quiz = qs => quizSlide(qs);
const fechamento = (cards, msg, refs = FONTE) => sintese(cards, msg) + refsSlide(refs, 'Para continuar', 'Referências e próximos passos', 'Refaça sozinho as questões que já caíram, sem olhar a resolução, e anote os erros no caderno de erros do guia.');

// ------------------------------------------------------------------
// 4) Widgets (JS que vai dentro do `extra` do deck) — texto cru, sem interpolação
// ------------------------------------------------------------------
const WJS = String.raw`
function $(i){ return document.getElementById(i); }
function nf(v, d){ if(d == null) d = 2; return (Math.round(v * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d}); }
var NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs, parent){ var e = document.createElementNS(NS, tag); for(var k in attrs) e.setAttribute(k, attrs[k]); if(parent) parent.appendChild(e); return e; }
// plano cartesiano: devolve {sx, sy, g} com conversão de coordenadas
function plano(svg, xmin, xmax, ymin, ymax, W, H, grade){
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
  var sx = function(x){ return 30 + (x - xmin) / (xmax - xmin) * (W - 40); }, sy = function(y){ return H - 24 - (y - ymin) / (ymax - ymin) * (H - 40); };
  for(var x = Math.ceil(xmin); x <= xmax; x++){ el('line', {x1: sx(x), y1: sy(ymin), x2: sx(x), y2: sy(ymax), stroke: 'var(--line)', 'stroke-width': x === 0 ? 0 : 1}, svg); if(grade && x !== 0 && (x % grade === 0)){ var t = el('text', {x: sx(x), y: sy(0) + 14, 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--ink-faint)'}, svg); t.textContent = x; } }
  for(var y = Math.ceil(ymin); y <= ymax; y++){ el('line', {x1: sx(xmin), y1: sy(y), x2: sx(xmax), y2: sy(y), stroke: 'var(--line)', 'stroke-width': y === 0 ? 0 : 1}, svg); if(grade && y !== 0 && (y % grade === 0)){ var u = el('text', {x: sx(0) - 5, y: sy(y) + 4, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--ink-faint)'}, svg); u.textContent = y; } }
  el('line', {x1: sx(xmin), y1: sy(0), x2: sx(xmax), y2: sy(0), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
  el('line', {x1: sx(0), y1: sy(ymin), x2: sx(0), y2: sy(ymax), stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
  return {sx: sx, sy: sy};
}
function curva(svg, P, f, xmin, xmax, ymin, ymax, cor){
  var pts = [], n = 160, up = false;
  for(var i = 0; i <= n; i++){ var x = xmin + (xmax - xmin) * i / n, y = f(x); if(isFinite(y) && y >= ymin - 40 && y <= ymax + 40) pts.push(P.sx(x).toFixed(1) + ',' + P.sy(Math.max(ymin - 40, Math.min(ymax + 40, y))).toFixed(1)); }
  el('polyline', {points: pts.join(' '), fill: 'none', stroke: cor || 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round'}, svg);
}
function ponto(svg, P, x, y, cor, rotulo){ el('circle', {cx: P.sx(x), cy: P.sy(y), r: 5, fill: cor || 'var(--growth)'}, svg); if(rotulo){ var t = el('text', {x: P.sx(x) + 8, y: P.sy(y) - 8, 'font-size': 12, fill: cor || 'var(--growth)', 'font-weight': 700}, svg); t.textContent = rotulo; } }
function fmtN(v){ return (Math.round(v * 100) / 100).toLocaleString('pt-BR'); }
function sgn(v){ return v < 0 ? '−' + fmtN(-v) : fmtN(v); }
function shuffle(a){ for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
`;

// ------------------------------------------------------------------
// 5) Modelos de atividade criativa  (freePage: {pill, body, script})
// ------------------------------------------------------------------
const CRIA_CSS = `<style>
  .bk{ display:flex; flex-direction:column; gap:10px; margin-top:12px; }
  .it{ border:1.5px solid var(--line-strong); border-radius:14px; padding:12px 14px; background:var(--surface); }
  .it.ok{ border-color:var(--success); background:var(--success-soft); } .it.no{ border-color:var(--danger); background:var(--danger-soft); }
  .it .cats{ display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
  .cb{ font-family:'Archivo',sans-serif; font-weight:700; font-size:.82rem; border-radius:99px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); padding:.35em .9em; cursor:pointer; }
  .cb.sel{ background:var(--primary); color:var(--primary-ink); border-color:var(--primary); }
  .cb:disabled{ cursor:default; opacity:.7; }
  .pool, .seq{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; min-height:46px; padding:10px; border:1.5px dashed var(--line-strong); border-radius:14px; }
  .seq{ flex-direction:column; border-style:solid; }
  .tk{ border:1.5px solid var(--line-strong); background:var(--surface); border-radius:10px; padding:.45em .8em; cursor:pointer; font-size:.92rem; color:var(--ink); text-align:left; font-family:inherit; }
  .tk:hover{ border-color:var(--primary); } .tk.used{ opacity:.25; pointer-events:none; }
  .tk.wrong{ border-color:var(--danger); background:var(--danger-soft); }
  .sl{ display:flex; gap:10px; align-items:center; border:1.5px solid var(--line-strong); border-radius:10px; padding:.45em .8em; background:var(--surface); font-size:.92rem; }
  .sl.ok{ border-color:var(--success); background:var(--success-soft); } .sl.no{ border-color:var(--danger); background:var(--danger-soft); }
  .sl b{ font-family:'JetBrains Mono',monospace; color:var(--primary); }
  .ln{ display:block; width:100%; text-align:left; border:1.5px solid var(--line-strong); background:var(--surface); border-radius:10px; padding:.55em .8em; margin-top:6px; cursor:pointer; font:inherit; font-size:.95rem; color:var(--ink); }
  .ln:hover{ border-color:var(--primary); } .ln.ok{ border-color:var(--success); background:var(--success-soft); } .ln.no{ border-color:var(--danger); background:var(--danger-soft); }
  .ln:disabled{ cursor:default; }
  .gm{ display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-top:14px; }
  @media (max-width:560px){ .gm{ grid-template-columns:repeat(2,1fr); } }
  .mc{ min-height:84px; border-radius:14px; border:1.5px solid var(--line-strong); background:var(--surface); cursor:pointer; padding:8px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:.9rem; line-height:1.25; color:var(--ink); }
  .mc.back{ background:linear-gradient(135deg,var(--primary),var(--decay)); color:transparent; font-size:1.6rem; }
  .mc.back::after{ content:'?'; color:var(--primary-ink); }
  .mc.open{ background:var(--primary-soft); } .mc.ok{ background:var(--success-soft); border-color:var(--success); cursor:default; }
  .row2{ display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; align-items:center; }
  .qs{ font-size:1.02rem; line-height:1.5; }
</style>`;
// retorno comum: texto final e reportarConclusao
const FIM = (id, msg) => `<div class="card success" id="${id}" style="display:none;margin-top:14px;"><h4 class="disp" style="margin:0 0 6px;">Atividade concluída!</h4><p id="${id}m" style="margin:0;">${msg || ''}</p></div>`;

// 5a) Classificar: cada cartão vai para uma categoria; "Conferir" corrige tudo
function cClassificar({ cats, itens, intro, final }) {
  const data = JSON.stringify({ cats: cats.map(T), itens: itens.map(([t, c, why]) => [T(t), c, T(why)]) });
  return {
    pill: `Acertos: <span id="scoreVal">0</span>/${itens.length}`,
    body: CRIA_CSS + `<div class="callout"><h4>Como jogar</h4><p>${intro}</p></div><div class="bk" id="bk"></div><div class="row2"><button class="btn" id="conf" type="button">Conferir</button><span class="small" id="msg"></span></div>${FIM('fin', '')}`,
    script: String.raw`
  var D = ${data}, bk = document.getElementById('bk'), sel = [], done = false;
  D.itens.forEach(function(it, i){
    var d = document.createElement('div'); d.className = 'it'; d.innerHTML = '<div class="qs">' + it[0] + '</div><div class="cats"></div><div class="hint" style="display:none;margin-top:8px;"></div>';
    var cs = d.querySelector('.cats');
    D.cats.forEach(function(c, j){ var b = document.createElement('button'); b.type = 'button'; b.className = 'cb'; b.innerHTML = c; b.addEventListener('click', function(){ if(done) return; sel[i] = j; cs.querySelectorAll('.cb').forEach(function(x){ x.classList.remove('sel'); }); b.classList.add('sel'); }); cs.appendChild(b); });
    bk.appendChild(d);
  });
  document.getElementById('conf').addEventListener('click', function(){
    if(done) return;
    for(var i = 0; i < D.itens.length; i++) if(sel[i] == null){ document.getElementById('msg').textContent = 'Classifique todos os cartões antes de conferir (falta o ' + (i + 1) + ').'; return; }
    done = true; var acertos = 0;
    bk.querySelectorAll('.it').forEach(function(d, i){
      var ok = sel[i] === D.itens[i][1]; if(ok) acertos++; d.classList.add(ok ? 'ok' : 'no');
      var h = d.querySelector('.hint'); h.style.display = 'block'; h.innerHTML = (ok ? '✔ ' : '✘ Era: <b>' + D.cats[D.itens[i][1]] + '</b>. ') + D.itens[i][2];
      d.querySelectorAll('.cb').forEach(function(b){ b.disabled = true; });
    });
    document.getElementById('scoreVal').textContent = acertos;
    document.getElementById('fin').style.display = 'block'; document.getElementById('finm').textContent = 'Você classificou corretamente ' + acertos + ' de ' + D.itens.length + '. ' + ${JSON.stringify(final)};
    try{ window.reportarConclusao(acertos, D.itens.length); }catch(e){}
  });`
  };
}

// 5b) Ordenar os passos de uma resolução (clique na ordem certa)
function cOrdenar({ problemas, intro, final }) { // problemas: [{titulo, enunciado, passos:[...] (em ordem certa)}]
  const data = JSON.stringify(problemas.map(p => ({ t: T(p.titulo), e: T(p.enunciado), p: p.passos.map(T) })));
  return {
    pill: `Problemas: <span id="scoreVal">0</span>/${problemas.length}`,
    body: CRIA_CSS + `<div class="callout"><h4>Como jogar</h4><p>${intro}</p></div><div id="box"></div>${FIM('fin', '')}`,
    script: String.raw`
  var D = ${data}, box = document.getElementById('box'), feitos = 0, perfeitos = 0;
  D.forEach(function(pr, k){
    var card = document.createElement('div'); card.className = 'card'; card.style.marginTop = '14px';
    card.innerHTML = '<span class="badge">' + pr.t + '</span><p class="qs" style="margin-top:10px;">' + pr.e + '</p><p class="small" style="margin:8px 0 0;">Toque nos passos <b>na ordem certa</b> da resolução:</p><div class="pool"></div><div class="seq"></div><div class="fb"></div>';
    var pool = card.querySelector('.pool'), seq = card.querySelector('.seq'), fb = card.querySelector('.fb'), erros = 0, prox = 0;
    var ordem = shuffle(pr.p.map(function(t, i){ return {t: t, i: i}; }));
    ordem.forEach(function(o){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'tk'; b.innerHTML = o.t;
      b.addEventListener('click', function(){
        if(o.i === prox){ b.classList.add('used'); var l = document.createElement('div'); l.className = 'sl ok'; l.innerHTML = '<b>' + (prox + 1) + '</b><span>' + o.t + '</span>'; seq.appendChild(l); prox++;
          if(prox === pr.p.length){ fb.textContent = erros === 0 ? '✔ Sequência perfeita!' : '✔ Sequência montada (' + erros + ' tentativa(s) fora de ordem).'; fb.className = 'fb ok'; feitos++; if(erros === 0) perfeitos++; document.getElementById('scoreVal').textContent = feitos;
            if(feitos === D.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('finm').textContent = 'Você montou as ' + D.length + ' resoluções (' + perfeitos + ' sem nenhum erro de ordem). ' + ${JSON.stringify(final)}; try{ window.reportarConclusao(D.length, D.length); }catch(e){} } }
        } else { erros++; b.classList.add('wrong'); setTimeout(function(){ b.classList.remove('wrong'); }, 500); fb.textContent = '✘ Esse passo ainda não — pense no que precisa vir antes.'; fb.className = 'fb no'; }
      });
      pool.appendChild(b);
    });
    box.appendChild(card);
  });`
  };
}

// 5c) Detetive de erros: uma resolução com um passo errado; clique no passo errado
function cDetetive({ casos, intro, final }) { // casos: [{titulo, enunciado, linhas:[...], erro:idx, porque}]
  const data = JSON.stringify(casos.map(c => ({ t: T(c.titulo), e: T(c.enunciado), l: c.linhas.map(T), x: c.erro, w: T(c.porque) })));
  return {
    pill: `Erros achados: <span id="scoreVal">0</span>/${casos.length}`,
    body: CRIA_CSS + `<div class="callout"><h4>Como jogar</h4><p>${intro}</p></div><div id="box"></div>${FIM('fin', '')}`,
    script: String.raw`
  var D = ${data}, box = document.getElementById('box'), feitos = 0, certos = 0;
  D.forEach(function(c){
    var card = document.createElement('div'); card.className = 'card'; card.style.marginTop = '14px';
    card.innerHTML = '<span class="badge">' + c.t + '</span><p class="qs" style="margin-top:10px;">' + c.e + '</p><p class="small" style="margin:8px 0 0;">Uma linha desta resolução tem um erro. Clique nela:</p><div class="lns"></div><div class="fb"></div><div class="answer"></div>';
    var lns = card.querySelector('.lns'), fb = card.querySelector('.fb'), an = card.querySelector('.answer'), tent = 0, fim = false;
    c.l.forEach(function(t, i){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'ln'; b.innerHTML = '<b style="color:var(--primary);font-family:JetBrains Mono,monospace;">' + (i + 1) + '.</b> ' + t;
      b.addEventListener('click', function(){
        if(fim) return; tent++;
        if(i === c.x){ fim = true; b.classList.add('ok'); fb.textContent = tent === 1 ? '✔ Achou de primeira!' : '✔ Achou o erro (tentativa ' + tent + ').'; fb.className = 'fb ok'; if(tent === 1) certos++; }
        else if(tent >= 2){ fim = true; b.classList.add('no'); lns.children[c.x].classList.add('ok'); fb.textContent = '✘ O erro estava na linha ' + (c.x + 1) + '.'; fb.className = 'fb no'; }
        else { b.classList.add('no'); b.disabled = true; fb.textContent = '✘ Essa linha está correta. Tente de novo (resta uma tentativa).'; fb.className = 'fb no'; return; }
        an.innerHTML = '<p>' + c.w + '</p>'; an.classList.add('open'); feitos++; document.getElementById('scoreVal').textContent = feitos;
        lns.querySelectorAll('.ln').forEach(function(x){ x.disabled = true; });
        if(feitos === D.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('finm').textContent = 'Você analisou os ' + D.length + ' casos (' + certos + ' de primeira). ' + ${JSON.stringify(final)}; try{ window.reportarConclusao(D.length, D.length); }catch(e){} }
      });
      lns.appendChild(b);
    });
    box.appendChild(card);
  });`
  };
}

// 5d) Verdadeiro ou falso em sequência, com justificativa
function cVF({ afirmacoes, intro, final }) { // [[texto, verdadeiro?, justificativa]]
  const data = JSON.stringify(afirmacoes.map(([t, v, w]) => [T(t), v ? 1 : 0, T(w)]));
  return {
    pill: `Acertos: <span id="scoreVal">0</span>/${afirmacoes.length}`,
    body: CRIA_CSS + `<div class="callout"><h4>Como jogar</h4><p>${intro}</p></div><div id="box"></div>${FIM('fin', '')}`,
    script: String.raw`
  var D = ${data}, box = document.getElementById('box'), feitos = 0, acertos = 0;
  D.forEach(function(a, i){
    var d = document.createElement('div'); d.className = 'card'; d.style.marginTop = '12px';
    d.innerHTML = '<span class="badge">Afirmação ' + (i + 1) + '</span><p class="qs" style="margin-top:10px;">' + a[0] + '</p><div class="cats row2"><button class="cb" type="button" data-v="1">Verdadeira</button><button class="cb" type="button" data-v="0">Falsa</button></div><div class="fb"></div><div class="answer"></div>';
    d.querySelectorAll('.cb').forEach(function(b){
      b.addEventListener('click', function(){
        if(d.dataset.done) return; d.dataset.done = '1'; var ok = (b.dataset.v === '1') === (a[1] === 1); if(ok) acertos++; feitos++;
        d.querySelectorAll('.cb').forEach(function(x){ x.disabled = true; if((x.dataset.v === '1') === (a[1] === 1)) x.classList.add('sel'); });
        var fb = d.querySelector('.fb'); fb.textContent = ok ? '✔ Isso mesmo!' : '✘ Não é bem assim — veja o porquê:'; fb.className = 'fb ' + (ok ? 'ok' : 'no');
        var an = d.querySelector('.answer'); an.innerHTML = '<p>' + a[2] + '</p>'; an.classList.add('open'); document.getElementById('scoreVal').textContent = acertos;
        if(feitos === D.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('finm').textContent = 'Você acertou ' + acertos + ' de ' + D.length + '. ' + ${JSON.stringify(final)}; try{ window.reportarConclusao(acertos, D.length); }catch(e){} }
      });
    });
    box.appendChild(d);
  });`
  };
}

// 5e) Memória: termo/fórmula x significado
function cMemoria({ pares, intro, final }) {
  const data = JSON.stringify(pares.map(p => [T(p[0]), T(p[1])]));
  return {
    pill: `Pares: <span id="scoreVal">0</span>/${pares.length}`,
    body: CRIA_CSS + `<div class="callout"><h4>Como jogar</h4><p>${intro}</p></div><div class="gm" id="gm"></div><div class="row2"><span class="badge">Jogadas: <b id="mv">0</b></span><span class="badge">Erros: <b id="er">0</b></span><button class="btn ghost" id="rs" type="button">Embaralhar de novo</button></div>${FIM('fin', '')}`,
    script: String.raw`
  var PAIRS = ${data}, gm = document.getElementById('gm'), mv = 0, er = 0, found = 0, first = null, lock = false;
  function build(){
    gm.innerHTML = ''; mv = 0; er = 0; found = 0; first = null; lock = false;
    document.getElementById('mv').textContent = 0; document.getElementById('er').textContent = 0; document.getElementById('scoreVal').textContent = 0; document.getElementById('fin').style.display = 'none';
    var cards = []; PAIRS.forEach(function(p, i){ cards.push({id: i, t: p[0], k: 'a'}); cards.push({id: i, t: p[1], k: 'b'}); });
    shuffle(cards).forEach(function(c){ var b = document.createElement('button'); b.type = 'button'; b.className = 'mc back'; b.dataset.id = c.id; b.dataset.k = c.k; b.dataset.t = c.t; b.setAttribute('aria-label', 'Carta virada'); b.addEventListener('click', function(){ flip(b); }); gm.appendChild(b); });
  }
  function show(b){ b.classList.remove('back'); b.classList.add('open'); b.innerHTML = b.dataset.t; }
  function hide(b){ b.classList.add('back'); b.classList.remove('open'); b.innerHTML = ''; }
  function flip(b){
    if(lock || b.classList.contains('ok') || b === first || !b.classList.contains('back')) return;
    show(b); if(!first){ first = b; return; }
    mv++; document.getElementById('mv').textContent = mv;
    if(first.dataset.id === b.dataset.id && first.dataset.k !== b.dataset.k){
      first.classList.add('ok'); b.classList.add('ok'); first.classList.remove('open'); b.classList.remove('open'); first = null; found++; document.getElementById('scoreVal').textContent = found;
      if(found === PAIRS.length){ document.getElementById('fin').style.display = 'block'; document.getElementById('finm').textContent = 'Você achou os ' + PAIRS.length + ' pares em ' + mv + ' jogadas, com ' + er + ' erro(s). ' + ${JSON.stringify(final)}; try{ window.reportarConclusao(found, PAIRS.length); }catch(e){} }
    } else { er++; document.getElementById('er').textContent = er; lock = true; var a = first, c = b; first = null; setTimeout(function(){ hide(a); hide(c); lock = false; }, 900); }
  }
  document.getElementById('rs').addEventListener('click', build); build();`
  };
}

// ------------------------------------------------------------------
// 6) Montagem (T aplicado no resultado)
// ------------------------------------------------------------------
const BASE = { area: 'ENA · PROFMAT', keyp: 'ena' };
const deck = c => T(L.deck({ ...BASE, ...c }));
const info = c => T(L.info({ ...BASE, ...c }));
const enem = c => T(L.enemPage({ ...BASE, ...c }));
const trilha = c => T(L.trilhaPage({ ...BASE, ...c }));
const free = c => T(L.freePage({ ...BASE, ...c }));
// remove os trechos de progresso/ferramentas herdados do modelo: os "aplicadores" do site os reinserem já com as regras novas
const limpa = h => h.replace(/\s*<script id="progresso-local">[\s\S]*?<\/script>/g, '').replace(/\s*<script src="[^"]*" id="ferramentas"><\/script>/g, '');
const writeP = (rel, html) => L.write(rel, limpa(html));

module.exports = { L, m, fm, T, F, svg, ln, pg, ci, dot, tx, txu, rect, rightMark, ink, soft, pri, gro, dec, suc, dan,
  sl, lede, card, cardT, callout, formula, g2, g3, g4, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic,
  FONTE, ja, exemplo, armadilhas, teoria, vfBlock, quiz, fechamento, WJS,
  cClassificar, cOrdenar, cDetetive, cVF, cMemoria, CRIA_CSS, deck, info, enem, trilha, free, writeP, BASE };

// ------------------------------------------------------------------
// 7) Atalhos para guia (infográfico) e atividades de cada unidade
// ------------------------------------------------------------------
const G = {
  p: t => `      <p class="lede-s">${t}</p>`,
  li: arr => `      <ul class="props">${arr.map(t => `<li>${t}</li>`).join('')}</ul>`,
  wl: (arr, cls = 'danger') => `      <ul class="warn-list">${arr.map(t => `<li>${ic('warn', 'icon ' + cls, 14)}${t}</li>`).join('')}</ul>`,
  call: (h, t, c = '') => `      <div class="callout ${c}"><strong>${h}</strong><p>${t}</p></div>`,
  f: t => `      <p class="formula">${t}</p>`,
  prop: (arr, cols = 2) => `      <div class="prop-grid" style="grid-template-columns:repeat(${cols},1fr);">${arr.map(([n, l]) => `<div class="prop-card"><span class="num">${n}</span><span class="lbl">${l}</span></div>`).join('')}</div>`,
  steps: arr => `      <ol class="steps">${arr.map(t => `<li>${t}</li>`).join('')}</ol>`,
  T: (h, r) => '      ' + tbl(h, r),
  chips: arr => `      <div class="app-row">${arr.map(t => `<div class="app-chip">${t}</div>`).join('')}</div>`,
  versus: (a, b) => `      <div class="versus"><div class="vcard danger"><strong style="color:var(--danger);">${a[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${a[1]}</p></div><div class="vcard success"><strong style="color:var(--success);">${b[0]}</strong><p style="font-size:.78rem;margin:4px 0 0;">${b[1]}</p></div></div>`
};
const { sec, wideSec } = L;
// seções do guia: [tag, título, ícone, cor, corpo]
const S = (a) => sec(a[0], a[1], a[2], a[4], a[3] || 'primary');
const W = (a) => wideSec(a[0], a[1], a[2], a[4], a[3] || 'primary');
function guia(c) {
  return { out: c.dir + 'infografico.html', html: info({
    title: 'Guia visual — ' + c.brand + ' (ENA · PROFMAT)', brand: c.brand, key: c.key + '-g', aulas: c.cap, color: c.color || 'primary',
    eyebrowTop: 'ENA · PROFMAT · ' + c.cap, footerTop: 'ENA · PROFMAT · ' + c.cap + ' · ' + c.brand,
    h1: c.h1, lede: c.lede, badges: c.badges, curve: c.curve || 'M20,160 C 120,150 200,120 280,90 C 360,60 420,40 480,24',
    sections: c.sections.map(x => S([x[0], x[1], x[2], x[3], x[4]])), wide: (c.wide || []).map(x => W([x[0], x[1], x[2], x[3], x[4]])),
    fontes: c.fontes || 'Guia completo ENA · PROFMAT · Provas ENA 2025 e 2026 (SBM/PROFMAT)'
  }) };
}
function atvEna(c) {
  return { out: c.dir + 'atividade-ena.html', html: enem({
    key: c.key + '-ena', title: c.h1.replace(/<[^>]+>/g, '') + ' — Atividade ENA', brand: c.brand, cls: c.cls || '',
    eyebrow: 'Estilo ENA · ' + c.cap, h1: c.h1, subtitle: c.subtitle,
    introT: 'Antes de começar', introP: c.intro || 'Questões originais, no formato do ENA (múltipla escolha A–E) e no nível da prova. Resolva no papel primeiro e só depois marque — a resolução aparece depois da resposta.',
    final: c.final, questions: c.questions
  }) };
}
function atvPratica(c) {
  return { out: c.dir + 'atividade-pratica.html', html: trilha({
    key: c.key + '-pr', title: c.h1.replace(/<[^>]+>/g, '') + ' — Prática', brand: c.brand, cls: c.cls || '',
    eyebrow: 'Prática progressiva · ' + c.cap, h1: c.h1, subtitle: c.subtitle, final: c.final, problems: c.problems
  }) };
}
function atvCria(c) {
  const t = c.tpl;
  return { out: c.dir + 'atividade-criativa.html', html: free({
    key: c.key + '-cr', title: c.h1.replace(/<[^>]+>/g, ''), brand: c.brand, cls: c.cls || '',
    eyebrow: 'Atividade criativa · ' + c.cap, h1: c.h1, subtitle: c.subtitle, pill: t.pill, body: t.body, script: t.script
  }) };
}
Object.assign(module.exports, { G, guia, atvEna, atvPratica, atvCria });

// ------------------------------------------------------------------
// 8) Atalhos de widget (HTML)
// ------------------------------------------------------------------
const W_ = {
  box: (title, inner) => `<div class="wid"><p class="small" style="margin:0 0 4px;"><b>${title}</b></p>${inner}</div>`,
  rg: (id, label, min, max, step, val, suf = '') => `<label>${label}: <b id="${id}v">${val}</b>${suf}</label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}">`,
  nm: (id, label, val, step = 1, extra = '') => `<div><label>${label}</label><input type="number" id="${id}" value="${val}" step="${step}" ${extra}></div>`,
  row: (...c) => `<div class="row">${c.join('')}</div>`,
  out: (id, size = '1.6rem', cor = '') => `<div class="out" id="${id}" style="font-size:${size};${cor ? 'color:' + cor + ';' : ''}"></div>`,
  txt: (id, label = '') => `<p class="small" style="margin:8px 0 0;">${label}<b class="mono" id="${id}"></b></p>`,
  hint: id => `<p class="hint" id="${id}" style="margin-top:6px;"></p>`,
  sel: (id, label, opts, val = 0) => `<div><label>${label}</label><select id="${id}">${opts.map((o, i) => `<option value="${i}"${i === val ? ' selected' : ''}>${o}</option>`).join('')}</select></div>`,
  svg: (id, vb = '0 0 360 220', mw = '') => `<svg id="${id}" viewBox="${vb}" style="width:100%;${mw ? 'max-width:' + mw + ';margin-inline:auto;' : ''}height:auto;display:block;margin-top:6px;background:var(--surface);border:1px solid var(--line);border-radius:12px;" role="img" aria-hidden="true"></svg>`
};
// liga entradas a uma função e a executa uma vez (texto JS)
const BIND = String.raw`
function bind(ids, f){ ids.forEach(function(i){ var e = $(i); if(e) e.addEventListener('input', f); }); f(); }
function mdc(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ var t = b; b = a % b; a = t; } return a; }
function fatora(n){ var r = [], d = 2; while(n > 1 && d * d <= n){ var e = 0; while(n % d === 0){ n /= d; e++; } if(e) r.push([d, e]); d++; } if(n > 1) r.push([n, 1]); return r; }
function sup(n){ return String(n).split('').map(function(c){ return '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]; }).join(''); }
function pot(f){ return f.map(function(x){ return x[0] + (x[1] > 1 ? sup(x[1]) : ''); }).join(' · '); }
`;
Object.assign(module.exports, { W: W_, BIND });
