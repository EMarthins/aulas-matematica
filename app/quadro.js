/* Caneta e quadro para as aulas em slides (carregado sob demanda por app/ferramentas.js: menu ⋯ → "Caneta e quadro" ou tecla D).
   - Desenha por cima do slide (caneta, marca-texto, borracha, texto, reta, seta, retângulo, círculo, triângulo, ângulo com medida, malha).
   - Laser, holofote e "cobrir" (esconde uma área até clicar) para apresentar.
   - Quadro lateral: o slide encolhe para um lado e libera 1/4 da largura para escrever (esquerda ou direita).
   - Cada slide guarda as próprias anotações (na sessão); desfazer/refazer; salvar PNG; funciona com mouse, toque e caneta.
   Nada sai do aparelho. */
(function(){
  if(window.EduQuadro) return;
  var D = document, W = window, R = D.documentElement;
  var stage = D.getElementById('stage'), app = D.querySelector('.app');
  if(!stage) return;
  var slides = [].slice.call(D.querySelectorAll('.slide'));

  function lsGet(k){ try{ return W.localStorage.getItem(k); }catch(e){ return null; } }
  function lsSet(k, v){ try{ W.localStorage.setItem(k, v); }catch(e){} }
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }

  // ---------- estado ----------
  var COR = { auto: 'auto', azul: '#1d4ed8', vermelho: '#dc2626', verde: '#16a34a', laranja: '#ea580c', roxo: '#7c3aed', amarelo: '#facc15', rosa: '#f472b6' };
  var estado = { aberto: false, ferr: 'mao', cor: 'auto', esp: 3, lado: null, fundo: 0, dados: {}, desfeitos: {} };
  var FUNDOS = ['Branco', 'Quadriculado', 'Pontilhado', 'Eixos cartesianos', 'Pautado'];
  var chave = 'qd:' + (W.location.pathname || '');
  try{ var salvo = JSON.parse(W.sessionStorage.getItem(chave) || 'null'); if(salvo && salvo.dados) estado.dados = salvo.dados; }catch(e){}
  function salvar(){ try{ W.sessionStorage.setItem(chave, JSON.stringify({ dados: estado.dados })); }catch(e){} }

  function idx(){ for(var i = 0; i < slides.length; i++) if(slides[i].classList.contains('active')) return i; return 0; }
  function dado(i){ return estado.dados[i] || (estado.dados[i] = []); }
  function desf(i){ return estado.desfeitos[i] || (estado.desfeitos[i] = []); }

  // ---------- estilos ----------
  var css = '' +
  '.qd-cv{position:absolute;left:0;top:0;width:100%;height:100%;touch-action:none;z-index:40;display:block}' +
  '.qd-cv.slide-cv{height:calc(100% - 64px)}' +
  '.qd-cv.mao{pointer-events:none}' +
  '.qd-cv.ativo{cursor:crosshair}' +
  '.qd-cv.sem-cursor{cursor:none}' +
  '.qd-board{position:absolute;z-index:6;background:var(--surface,#fff);border:1px solid var(--line-strong,#bbb);border-radius:18px;box-shadow:0 20px 44px -22px var(--shadow,rgba(0,0,0,.4));overflow:hidden;display:none}' +
  '.qd-board.on{display:block}' +
  '.qd-board .qd-lbl{position:absolute;left:10px;top:6px;font:700 .68rem Archivo,Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint,#777);pointer-events:none;z-index:2}' +
  '.qd-stage-anim{transition:width .35s ease,margin .35s ease}' +
  '.qd-bar{position:fixed;z-index:99990;left:10px;top:50%;transform:translateY(-50%);width:92px;max-height:calc(100vh - 20px);overflow:auto;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.45));padding:6px;font-family:Archivo,Arial,sans-serif;display:none;user-select:none;-webkit-user-select:none}' +
  '.qd-bar.on{display:block}' +
  '.qd-grip{cursor:grab;text-align:center;font-size:.7rem;color:var(--ink-faint,#777);letter-spacing:.2em;padding:0 0 4px;touch-action:none}' +
  '.qd-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px}' +
  '.qd-bar button{font:inherit;border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:inherit;border-radius:9px;height:38px;min-width:0;cursor:pointer;font-size:1.05rem;line-height:1;display:flex;align-items:center;justify-content:center;padding:0}' +
  '.qd-bar button:hover{border-color:var(--primary,#382EAE)}' +
  '.qd-bar button.sel{background:var(--primary,#382EAE);border-color:var(--primary,#382EAE);color:var(--primary-ink,#fff)}' +
  '.qd-bar button:disabled{opacity:.4;cursor:default}' +
  '.qd-bar .qd-sep{grid-column:1/-1;height:1px;background:var(--line,#ddd);margin:3px 0}' +
  '.qd-bar .qd-cor{height:26px;border-radius:50%;border:2px solid var(--surface,#fff);box-shadow:0 0 0 1px var(--line-strong,#bbb)}' +
  '.qd-bar .qd-cor.sel{box-shadow:0 0 0 3px var(--primary,#382EAE)}' +
  '.qd-bar .qd-esp i{display:block;background:currentColor;border-radius:99px;width:70%}' +
  '.qd-txt{position:absolute;z-index:45;font:600 20px Archivo,Arial,sans-serif;border:2px dashed var(--primary,#382EAE);background:var(--surface,#fff);color:var(--ink,#111);border-radius:6px;padding:2px 6px;min-width:6em;outline:none}' +
  '.qd-tip{position:fixed;z-index:99991;bottom:18px;left:50%;transform:translateX(-50%);background:var(--ink,#111);color:var(--surface,#fff);font:700 .82rem Archivo,Arial,sans-serif;border-radius:99px;padding:.5em 1.1em;pointer-events:none;opacity:0;transition:opacity .25s}' +
  '.qd-tip.on{opacity:.94}' +
  '.qd-voto{position:fixed;z-index:99992;right:14px;bottom:70px;width:min(19rem,calc(100vw - 28px));background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;padding:10px 12px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.45));font-family:Archivo,Arial,sans-serif}' +
  '.qd-vh{display:flex;align-items:center;gap:8px;margin-bottom:8px}.qd-vh span{margin-left:auto;font-size:.78rem;color:var(--ink-faint,#777)}.qd-vh button{border:0;background:transparent;color:inherit;cursor:pointer;font-size:1rem}' +
  '.qd-vl{display:flex;align-items:center;gap:8px;margin:5px 0}.qd-vl button{width:38px;height:38px;border-radius:10px;border:1.5px solid var(--primary,#382EAE);background:var(--primary-soft,#eef);color:var(--primary,#382EAE);font:800 1.05rem Archivo,Arial,sans-serif;cursor:pointer}' +
  '.qd-vb{flex:1;height:14px;border-radius:99px;background:var(--surface-2,#f1f1f5);overflow:hidden}.qd-vb i{display:block;height:100%;background:var(--primary,#382EAE);border-radius:99px;transition:width .25s}.qd-vl span{min-width:4.6em;font-size:.76rem;text-align:right;color:var(--ink-faint,#777)}' +
  '.qd-vf{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}.qd-vf button{font:inherit;font-size:.78rem;font-weight:700;border:1px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:inherit;border-radius:8px;padding:.35em .8em;cursor:pointer}' +
  '@media (max-width:900px){.qd-bar{left:50%;top:auto;bottom:6px;transform:translateX(-50%);width:min(96vw,640px);max-height:none}.qd-grid{grid-template-columns:repeat(10,1fr)}.qd-bar .qd-sep{display:none}}' +
  'html.qd-pad body{padding-left:104px!important;box-sizing:border-box}' +
  '@media print{.qd-cv,.qd-board,.qd-bar,.qd-voto,.qd-tip,.qd-txt{display:none!important}}';
  var st = el('style'); st.id = 'qd-css'; st.textContent = css; (D.head || R).appendChild(st);

  // ---------- camadas (canvas) ----------
  function Camada(id, host, cls){
    this.id = id; this.cv = el('canvas', 'qd-cv ' + (cls || '')); this.cx = this.cv.getContext('2d'); this.host = host; host.appendChild(this.cv);
    this.w = 1; this.h = 1; this.prev = null; this.fx = null;
  }
  Camada.prototype.ajusta = function(){
    var r = this.cv.getBoundingClientRect(), dpr = Math.min(W.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    if(this.w !== w || this.h !== h || this.cv.width !== Math.round(w * dpr)){ this.w = w; this.h = h; this.cv.width = Math.round(w * dpr); this.cv.height = Math.round(h * dpr); }
    this.cx.setTransform(this.cv.width / w, 0, 0, this.cv.height / h, 0, 0);
  };
  var cs = new Camada('s', stage, 'slide-cv');
  var board = el('div', 'qd-board'); board.appendChild(el('div', 'qd-lbl', 'Quadro'));
  var cb = new Camada('b', board);
  var camadas = [cs, cb];

  function corReal(c){ if(c === 'auto'){ var v = ''; try{ v = getComputedStyle(R).getPropertyValue('--ink').trim(); }catch(e){} return v || '#111'; } return c; }

  // ---------- geometria dos traços ----------
  function P(c, p){ return [p[0] * c.w, p[1] * c.h]; }
  function amostras(c, s){ // pontos (px) ao longo do traço, para a borracha
    var o = [], i, a, b, n, k, t;
    function seg(p, q){ n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / 8)); for(k = 0; k <= n; k++) o.push([p[0] + (q[0] - p[0]) * k / n, p[1] + (q[1] - p[1]) * k / n]); }
    if(s.t === 'p'){ for(i = 0; i < s.pts.length; i++){ o.push(P(c, s.pts[i])); if(i) seg(P(c, s.pts[i - 1]), P(c, s.pts[i])); } }
    else if(s.t === 'l' || s.t === 'a'){ seg(P(c, s.p[0]), P(c, s.p[1])); }
    else if(s.t === 'r'){ a = P(c, s.p[0]); b = P(c, s.p[1]); seg(a, [b[0], a[1]]); seg([b[0], a[1]], b); seg(b, [a[0], b[1]]); seg([a[0], b[1]], a); }
    else if(s.t === 'o'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2, rx = Math.abs(b[0] - a[0]) / 2, ry = Math.abs(b[1] - a[1]) / 2; for(t = 0; t < 6.3; t += .12) o.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]); }
    else if(s.t === 'u'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var top = [(a[0] + b[0]) / 2, Math.min(a[1], b[1])], bl = [Math.min(a[0], b[0]), Math.max(a[1], b[1])], br = [Math.max(a[0], b[0]), Math.max(a[1], b[1])]; seg(top, bl); seg(bl, br); seg(br, top); }
    else if(s.t === 'g'){ var v = P(c, s.p[0]), p1 = P(c, s.p[1]), p2 = P(c, s.p[2]); seg(v, p1); seg(v, p2); }
    else if(s.t === 'x'){ a = P(c, s.p[0]); var wd = (s.s || '').length * s.z * .6; for(k = 0; k <= wd; k += 8){ o.push([a[0] + k, a[1] - s.z * .3]); } }
    else if(s.t === 'c'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var x0 = Math.min(a[0], b[0]), x1 = Math.max(a[0], b[0]), y0 = Math.min(a[1], b[1]), y1 = Math.max(a[1], b[1]); for(var xx = x0; xx <= x1; xx += 10) for(var yy = y0; yy <= y1; yy += 10) o.push([xx, yy]); }
    return o;
  }

  // ---------- desenho ----------
  function pathSuave(cx, pts, c){
    if(!pts.length) return; var p = P(c, pts[0]); cx.moveTo(p[0], p[1]);
    if(pts.length === 1){ cx.lineTo(p[0] + .01, p[1]); return; }
    for(var i = 1; i < pts.length - 1; i++){ var a = P(c, pts[i]), b = P(c, pts[i + 1]); cx.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
    var u = P(c, pts[pts.length - 1]); cx.lineTo(u[0], u[1]);
  }
  function rotuloAngulo(s, c){
    var v = P(c, s.p[0]), a = P(c, s.p[1]), b = P(c, s.p[2]);
    var a1 = Math.atan2(a[1] - v[1], a[0] - v[0]), a2 = Math.atan2(b[1] - v[1], b[0] - v[0]);
    var d = a2 - a1; while(d > Math.PI) d -= 2 * Math.PI; while(d < -Math.PI) d += 2 * Math.PI;
    return { v: v, a1: a1, d: d, graus: Math.round(Math.abs(d) * 180 / Math.PI) };
  }
  function traco(c, s){
    var cx = c.cx; cx.save(); cx.lineCap = 'round'; cx.lineJoin = 'round';
    var cor = corReal(s.c); cx.strokeStyle = cor; cx.fillStyle = cor; cx.lineWidth = s.w || 3; cx.globalAlpha = s.al || 1;
    var a, b;
    if(s.t === 'p'){ cx.beginPath(); pathSuave(cx, s.pts, c); cx.stroke(); }
    else if(s.t === 'l' || s.t === 'a'){ a = P(c, s.p[0]); b = P(c, s.p[1]); cx.beginPath(); cx.moveTo(a[0], a[1]); cx.lineTo(b[0], b[1]); cx.stroke();
      if(s.t === 'a'){ var an = Math.atan2(b[1] - a[1], b[0] - a[0]), h = 10 + s.w * 2; cx.beginPath(); cx.moveTo(b[0], b[1]); cx.lineTo(b[0] - h * Math.cos(an - .45), b[1] - h * Math.sin(an - .45)); cx.moveTo(b[0], b[1]); cx.lineTo(b[0] - h * Math.cos(an + .45), b[1] - h * Math.sin(an + .45)); cx.stroke(); } }
    else if(s.t === 'r'){ a = P(c, s.p[0]); b = P(c, s.p[1]); cx.strokeRect(a[0], a[1], b[0] - a[0], b[1] - a[1]); }
    else if(s.t === 'o'){ a = P(c, s.p[0]); b = P(c, s.p[1]); cx.beginPath(); cx.ellipse((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, Math.abs(b[0] - a[0]) / 2 || .5, Math.abs(b[1] - a[1]) / 2 || .5, 0, 0, 6.2832); cx.stroke(); }
    else if(s.t === 'u'){ a = P(c, s.p[0]); b = P(c, s.p[1]); cx.beginPath(); cx.moveTo((a[0] + b[0]) / 2, Math.min(a[1], b[1])); cx.lineTo(Math.min(a[0], b[0]), Math.max(a[1], b[1])); cx.lineTo(Math.max(a[0], b[0]), Math.max(a[1], b[1])); cx.closePath(); cx.stroke(); }
    else if(s.t === 'g'){ var q = rotuloAngulo(s, c), pa = P(c, s.p[1]), pb = P(c, s.p[2]); cx.beginPath(); cx.moveTo(pa[0], pa[1]); cx.lineTo(q.v[0], q.v[1]); cx.lineTo(pb[0], pb[1]); cx.stroke();
      var rr = Math.min(34, Math.hypot(pa[0] - q.v[0], pa[1] - q.v[1]) * .5, Math.hypot(pb[0] - q.v[0], pb[1] - q.v[1]) * .5); cx.beginPath(); cx.arc(q.v[0], q.v[1], rr, q.a1, q.a1 + q.d, q.d < 0); cx.stroke();
      var mid = q.a1 + q.d / 2; cx.font = '700 15px Archivo,Arial,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.globalAlpha = 1; cx.fillText(q.graus + '°', q.v[0] + (rr + 20) * Math.cos(mid), q.v[1] + (rr + 20) * Math.sin(mid)); }
    else if(s.t === 'x'){ a = P(c, s.p[0]); cx.font = '700 ' + s.z + 'px Archivo,Arial,sans-serif'; cx.textBaseline = 'alphabetic'; cx.textAlign = 'left'; s.s.split('\n').forEach(function(ln, i){ cx.fillText(ln, a[0], a[1] + i * s.z * 1.2); }); }
    else if(s.t === 'c'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var x0 = Math.min(a[0], b[0]), y0 = Math.min(a[1], b[1]), ww = Math.abs(b[0] - a[0]), hh = Math.abs(b[1] - a[1]);
      cx.globalAlpha = 1; cx.fillStyle = '#1f2937'; cx.fillRect(x0, y0, ww, hh); cx.fillStyle = '#e5e7eb'; cx.font = '700 14px Archivo,Arial,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; if(ww > 150 && hh > 30) cx.fillText('toque com a borracha para revelar', x0 + ww / 2, y0 + hh / 2); }
    cx.restore();
  }
  function fundoQuadro(c){
    var cx = c.cx, w = c.w, h = c.h, f = estado.fundo, x, y;
    cx.save(); cx.strokeStyle = 'rgba(100,116,139,.35)'; cx.fillStyle = 'rgba(100,116,139,.55)'; cx.lineWidth = 1;
    if(f === 1){ cx.beginPath(); for(x = 0; x < w; x += 28){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, h); } for(y = 0; y < h; y += 28){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke(); }
    else if(f === 2){ for(x = 14; x < w; x += 28) for(y = 14; y < h; y += 28){ cx.beginPath(); cx.arc(x, y, 1.4, 0, 6.3); cx.fill(); } }
    else if(f === 3){ cx.beginPath(); for(x = w / 2 % 28; x < w; x += 28){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, h); } for(y = h / 2 % 28; y < h; y += 28){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke();
      cx.strokeStyle = corReal('auto'); cx.lineWidth = 2; cx.beginPath(); cx.moveTo(0, h / 2); cx.lineTo(w, h / 2); cx.moveTo(w / 2, 0); cx.lineTo(w / 2, h); cx.stroke(); cx.font = '700 13px Archivo,Arial'; cx.fillStyle = corReal('auto'); cx.fillText('x', w - 14, h / 2 - 8); cx.fillText('y', w / 2 + 8, 14); }
    else if(f === 4){ cx.beginPath(); for(y = 44; y < h; y += 34){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke(); }
    cx.restore();
  }
  function render(c){
    if(!c) return; c.ajusta(); c.cx.clearRect(0, 0, c.w, c.h);
    if(c.id === 'b') fundoQuadro(c);
    var lista = dado(idx());
    for(var i = 0; i < lista.length; i++) if(lista[i].l === c.id) traco(c, lista[i]);
    if(c.prev) traco(c, c.prev);
    if(c.fx) c.fx(c);
  }
  function renderTudo(){ camadas.forEach(render); }

  // ---------- interação ----------
  var isDark = function(){ return /dark|escuro/.test(R.getAttribute('data-theme') || ''); };
  var FORMAS = { reta: 'l', seta: 'a', ret: 'r', circ: 'o', tri: 'u' };
  var ativoPtr = null, ultimoPen = 0, rastro = [], laserRaf = 0, foco = null, angPts = null;
  function norm(c, e){ var r = c.cv.getBoundingClientRect(); return [Math.min(1.5, Math.max(-.5, (e.clientX - r.left) / r.width)), Math.min(1.5, Math.max(-.5, (e.clientY - r.top) / r.height))]; }
  function pxy(c, e){ var r = c.cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }

  function novoTraco(c, extra){
    var s = { l: c.id, c: estado.cor, w: estado.esp }; for(var k in extra) s[k] = extra[k]; return s;
  }
  function confirma(c, s){ var i = idx(); dado(i).push(s); estado.desfeitos[i] = []; c.prev = null; render(c); salvar(); atualizaBotoes(); }

  function apagaEm(c, e){
    var p = pxy(c, e), i = idx(), lista = dado(i), r = 10 + estado.esp * 2, mudou = false;
    for(var k = lista.length - 1; k >= 0; k--){
      var s = lista[k]; if(s.l !== c.id) continue;
      var am = amostras(c, s), ach = false;
      for(var j = 0; j < am.length; j++){ if(Math.hypot(am[j][0] - p[0], am[j][1] - p[1]) < r){ ach = true; break; } }
      if(ach){ lista.splice(k, 1); (estado.desfeitos[i] = estado.desfeitos[i] || []).push(s); mudou = true; }
    }
    if(mudou){ render(c); salvar(); atualizaBotoes(); }
  }

  function aoPressionar(c, e){
    if(e.pointerType === 'touch' && Date.now() - ultimoPen < 1500) return; // rejeição de palma
    if(e.pointerType === 'pen') ultimoPen = Date.now();
    var f = estado.ferr; if(f === 'mao') return;
    if(f === 'laser' || f === 'foco') return;
    if(e.button > 0) return;
    try{ c.cv.setPointerCapture(e.pointerId); }catch(x){}
    e.preventDefault(); ativoPtr = { c: c, id: e.pointerId, ini: norm(c, e), f: f, pts: [norm(c, e)] };
    if(f === 'borracha'){ apagaEm(c, e); return; }
    if(f === 'texto'){ ativoPtr = null; criaTexto(c, e); return; }
    if(f === 'angulo'){
      if(!angPts){ angPts = [norm(c, e)]; } else { angPts.push(norm(c, e)); }
      c.prev = angPts.length >= 3 ? novoTraco(c, { t: 'g', p: angPts.slice(0, 3) }) : null;
      if(angPts.length >= 3){ var s = c.prev; angPts = null; confirma(c, s); } else dica(angPts.length === 1 ? 'Clique no fim da 1ª semirreta' : 'Clique no fim da 2ª semirreta (mostra a medida)');
      ativoPtr = null; return;
    }
    if(f === 'caneta' || f === 'marca'){
      var hl = f === 'marca', esp = hl ? Math.max(14, estado.esp * 5) : estado.esp, cor = estado.cor;
      if(hl && cor === 'auto') cor = '#facc15';
      c.prev = { l: c.id, t: 'p', c: cor, w: esp, al: hl ? .38 : 1, pts: ativoPtr.pts }; render(c);
    }
  }
  function aoMover(c, e){
    var f = estado.ferr;
    if(f === 'laser'){ var p = pxy(c, e); rastro.push([c, p[0], p[1], performance.now()]); rodaLaser(); return; }
    if(f === 'foco'){ foco = [c, pxy(c, e)]; renderTudo(); return; }
    if(f === 'angulo' && angPts && angPts.length >= 1){ var tmp = angPts.concat([norm(c, e)]); if(tmp.length === 2) tmp.push(tmp[1]); c.prev = novoTraco(c, { t: 'g', p: tmp.slice(0, 3) }); if(angPts.length === 1){ c.prev = novoTraco(c, { t: 'l', p: [angPts[0], norm(c, e)] }); } render(c); return; }
    if(!ativoPtr || ativoPtr.id !== e.pointerId || ativoPtr.c !== c) return;
    var q = norm(c, e);
    if(f === 'borracha'){ apagaEm(c, e); return; }
    if(f === 'caneta' || f === 'marca'){
      var u = ativoPtr.pts[ativoPtr.pts.length - 1]; if(Math.hypot((q[0] - u[0]) * c.w, (q[1] - u[1]) * c.h) < 1.2) return;
      ativoPtr.pts.push(q); render(c); return;
    }
    if(FORMAS[f]){
      var ini = ativoPtr.ini, fim = q;
      if(e.shiftKey && (f === 'ret' || f === 'circ' || f === 'tri')){ var dx = (fim[0] - ini[0]) * c.w, dy = (fim[1] - ini[1]) * c.h, m = Math.max(Math.abs(dx), Math.abs(dy)); fim = [ini[0] + Math.sign(dx || 1) * m / c.w, ini[1] + Math.sign(dy || 1) * m / c.h]; }
      if(e.shiftKey && (f === 'reta' || f === 'seta')){ var ddx = (fim[0] - ini[0]) * c.w, ddy = (fim[1] - ini[1]) * c.h; if(Math.abs(ddx) > Math.abs(ddy)) fim = [fim[0], ini[1]]; else fim = [ini[0], fim[1]]; }
      c.prev = novoTraco(c, { t: FORMAS[f], p: [ini, fim] }); render(c);
    }
    if(f === 'cobrir'){ c.prev = { l: c.id, t: 'c', c: '#1f2937', w: 1, p: [ativoPtr.ini, q] }; render(c); }
  }
  function aoSoltar(c, e){
    if(!ativoPtr || ativoPtr.id !== e.pointerId) return;
    var f = ativoPtr.f, ap = ativoPtr; ativoPtr = null;
    if(f === 'caneta' || f === 'marca'){ var s = c.prev; c.prev = null; if(s) confirma(c, s); }
    else if(FORMAS[f] || f === 'cobrir'){ var t = c.prev; c.prev = null; if(t){ var p = t.p, dx = Math.abs(p[1][0] - p[0][0]) * c.w, dy = Math.abs(p[1][1] - p[0][1]) * c.h; if(dx + dy > 4) confirma(c, t); else render(c); } }
  }

  // texto
  function criaTexto(c, e){
    var r = c.cv.getBoundingClientRect(), host = c.host, hr = host.getBoundingClientRect();
    var ent = el('textarea', 'qd-txt'); ent.rows = 1; ent.style.left = (e.clientX - hr.left) + 'px'; ent.style.top = (e.clientY - hr.top - 14) + 'px';
    ent.style.color = corReal(estado.cor); ent.setAttribute('aria-label', 'Texto na lousa'); ent.placeholder = 'digite…';
    var tam = 16 + estado.esp * 3; ent.style.fontSize = tam + 'px';
    host.appendChild(ent); setTimeout(function(){ ent.focus(); }, 10);
    var pos = norm(c, e), feito = false;
    function fim(ok){ if(feito) return; feito = true; var v = ent.value.replace(/\s+$/, ''); ent.remove(); if(ok && v){ confirma(c, novoTraco(c, { t: 'x', p: [pos], s: v, z: tam })); } }
    ent.addEventListener('keydown', function(ev){ ev.stopPropagation(); if(ev.key === 'Enter' && !ev.shiftKey){ ev.preventDefault(); fim(true); } else if(ev.key === 'Escape'){ fim(false); } });
    ent.addEventListener('blur', function(){ fim(true); });
  }

  // laser e holofote
  function rodaLaser(){
    if(laserRaf) return;
    (function loop(){
      var agora = performance.now(); rastro = rastro.filter(function(p){ return agora - p[3] < 650; });
      camadas.forEach(function(c){
        c.fx = estado.ferr === 'laser' ? function(cc){
          var cx = cc.cx; cx.save();
          for(var i = 0; i < rastro.length; i++){ var p = rastro[i]; if(p[0] !== cc) continue; var t = 1 - (agora - p[3]) / 650; cx.globalAlpha = t * .9; cx.fillStyle = '#ff2d2d'; cx.beginPath(); cx.arc(p[1], p[2], 3 + 7 * t, 0, 6.3); cx.fill(); }
          cx.restore();
        } : null; render(c);
      });
      if(rastro.length && estado.ferr === 'laser') laserRaf = requestAnimationFrame(loop); else { laserRaf = 0; camadas.forEach(function(c){ c.fx = null; render(c); }); }
    })();
  }
  function fxFoco(c){
    if(!foco || foco[0] !== c) return; var cx = c.cx; cx.save(); cx.fillStyle = 'rgba(0,0,0,.62)'; cx.beginPath(); cx.rect(0, 0, c.w, c.h); cx.arc(foco[1][0], foco[1][1], 90, 0, 6.3, true); cx.fill('evenodd'); cx.restore();
  }

  function liga(c){
    var cv = c.cv;
    cv.addEventListener('pointerdown', function(e){ aoPressionar(c, e); });
    cv.addEventListener('pointermove', function(e){ if(estado.ferr === 'foco'){ foco = [c, pxy(c, e)]; c.fx = fxFoco; camadas.forEach(function(o){ if(o !== c){ o.fx = null; render(o); } }); render(c); return; } aoMover(c, e); });
    cv.addEventListener('pointerup', function(e){ aoSoltar(c, e); });
    cv.addEventListener('pointercancel', function(e){ aoSoltar(c, e); });
    cv.addEventListener('pointerleave', function(){ if(estado.ferr === 'foco'){ foco = null; c.fx = null; render(c); } });
    cv.addEventListener('contextmenu', function(e){ if(estado.ferr !== 'mao') e.preventDefault(); });
  }
  camadas.forEach(liga);

  // ---------- quadro lateral ----------
  function posicionaQuadro(){
    if(!estado.lado || !app){ return; }
    var sr = stage.getBoundingClientRect(), ar = app.getBoundingClientRect();
    var abaixo = estado.lado === 'dir' ? 56 : 0; board.style.top = (stage.offsetTop + abaixo) + 'px'; board.style.height = (sr.height - abaixo) + 'px';
    board.style.width = 'calc(25% - 10px)'; board.style[estado.lado === 'esq' ? 'left' : 'right'] = '0'; board.style[estado.lado === 'esq' ? 'right' : 'left'] = 'auto';
  }
  function abreQuadro(lado){
    if(!app){ dica('Esta página não tem área para o quadro.'); return; }
    if(W.innerWidth < 760){ dica('Tela estreita demais para o quadro lateral.'); return; }
    if(getComputedStyle(app).position === 'static') app.style.position = 'relative';
    if(!board.parentNode) app.appendChild(board);
    stage.classList.add('qd-stage-anim');
    estado.lado = lado; board.classList.add('on');
    stage.style.width = '75%'; stage.style.marginLeft = lado === 'esq' ? 'auto' : '0'; stage.style.marginRight = lado === 'dir' ? 'auto' : '0';
    if(lado === 'esq') stage.style.marginLeft = 'auto';
    posicionaQuadro(); setTimeout(function(){ posicionaQuadro(); renderTudo(); }, 380);
    if(W.ResizeObserver && !abreQuadro.ro){ abreQuadro.ro = new ResizeObserver(function(){ posicionaQuadro(); renderTudo(); }); abreQuadro.ro.observe(stage); }
    atualizaBotoes(); renderTudo();
  }
  function fechaQuadro(){
    estado.lado = null; board.classList.remove('on'); stage.style.width = ''; stage.style.marginLeft = ''; stage.style.marginRight = '';
    setTimeout(function(){ stage.classList.remove('qd-stage-anim'); renderTudo(); }, 380); atualizaBotoes(); renderTudo();
  }
  function alternaLado(l){ if(estado.lado === l) fechaQuadro(); else abreQuadro(l); }

  // ---------- votação rápida (A–E): o professor toca na letra a cada mão levantada ----------
  var voto = null, cont = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  function votacao(){
    if(voto){ voto.remove(); voto = null; return; }
    voto = el('div', 'qd-voto'); voto.setAttribute('role', 'dialog'); voto.setAttribute('aria-label', 'Votação rápida');
    function pinta(){
      var tot = 0, mx = 1; Object.keys(cont).forEach(function(k){ tot += cont[k]; mx = Math.max(mx, cont[k]); });
      voto.innerHTML = '<div class="qd-vh"><b>📊 Votação rápida</b><span>' + tot + ' voto' + (tot === 1 ? '' : 's') + '</span><button type="button" data-x aria-label="Fechar">✕</button></div>' +
        Object.keys(cont).map(function(k){ var p = tot ? Math.round(cont[k] * 100 / tot) : 0; return '<div class="qd-vl"><button type="button" data-k="' + k + '" aria-label="Voto em ' + k + '">' + k + '</button><div class="qd-vb"><i style="width:' + (cont[k] / mx * 100) + '%"></i></div><span>' + cont[k] + ' · ' + p + '%</span></div>'; }).join('') +
        '<div class="qd-vf"><button type="button" data-z>Zerar</button><button type="button" data-u>Desfazer último</button></div>';
    }
    var hist = [];
    voto.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      if(b.dataset.k){ cont[b.dataset.k]++; hist.push(b.dataset.k); }
      else if(b.hasAttribute('data-z')){ Object.keys(cont).forEach(function(k){ cont[k] = 0; }); hist = []; }
      else if(b.hasAttribute('data-u')){ var u = hist.pop(); if(u) cont[u]--; }
      else if(b.hasAttribute('data-x')){ voto.remove(); voto = null; return; }
      pinta();
    });
    pinta(); (D.body || R).appendChild(voto);
  }

  // ---------- barra de ferramentas ----------
  var bar = el('div', 'qd-bar'); bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', 'Caneta e quadro');
  var grip = el('div', 'qd-grip', '⠿⠿⠿'); grip.title = 'Arraste para mover'; bar.appendChild(grip);
  var grade = el('div', 'qd-grid'); bar.appendChild(grade);
  var tip = el('div', 'qd-tip'); tip.setAttribute('role', 'status'); var tipT = 0;
  function dica(t){ tip.textContent = t; tip.classList.add('on'); clearTimeout(tipT); tipT = setTimeout(function(){ tip.classList.remove('on'); }, 2200); }

  var botoes = {};
  function btn(id, rot, tit, fn, cls){ var b = el('button', cls || '', rot); b.type = 'button'; b.title = tit; b.setAttribute('aria-label', tit); b.addEventListener('click', fn); grade.appendChild(b); botoes[id] = b; return b; }
  function sep(){ grade.appendChild(el('div', 'qd-sep')); }
  var FERR = [
    ['mao', '🖱', 'Interagir com o slide (as anotações ficam visíveis) — 0'],
    ['caneta', '✏️', 'Caneta — 1'], ['marca', '🖍', 'Marca-texto — 2'], ['borracha', '🧽', 'Borracha (apaga o traço tocado) — 3'],
    ['texto', '𝗧', 'Texto — 4'], ['laser', '🔴', 'Laser — 5'], ['foco', '🔦', 'Holofote — 6'], ['cobrir', '⬛', 'Cobrir uma área (revele com a borracha) — 7']
  ];
  var FORM = [['reta', '╱', 'Reta (Shift = horizontal/vertical)'], ['seta', '➚', 'Seta'], ['ret', '▭', 'Retângulo (Shift = quadrado)'], ['circ', '◯', 'Círculo/elipse (Shift = círculo)'], ['tri', '△', 'Triângulo'], ['angulo', '∠', 'Ângulo: 3 cliques (vértice, 1ª e 2ª semirreta) — mostra a medida']];
  FERR.forEach(function(f){ btn(f[0], f[1], f[2], function(){ ferr(f[0]); }); });
  sep(); FORM.forEach(function(f){ btn(f[0], f[1], f[2], function(){ ferr(f[0]); }); });
  sep();
  Object.keys(COR).forEach(function(k){ var b = btn('c-' + k, '', 'Cor: ' + k, function(){ estado.cor = k; if(['mao', 'laser', 'foco', 'borracha', 'cobrir'].indexOf(estado.ferr) >= 0) ferr('caneta'); atualizaBotoes(); }, 'qd-cor'); b.style.background = k === 'auto' ? 'linear-gradient(135deg,#111 50%,#fff 50%)' : COR[k]; });
  sep();
  [2, 4, 8].forEach(function(n){ var b = btn('e-' + n, '<i style="height:' + n + 'px"></i>', 'Espessura ' + n, function(){ estado.esp = n; atualizaBotoes(); }, 'qd-esp'); });
  sep();
  btn('desfazer', '↶', 'Desfazer (Ctrl+Z)', function(){ desfazer(); });
  btn('refazer', '↷', 'Refazer (Ctrl+Y)', function(){ refazer(); });
  btn('limpar', '🗑', 'Limpar este slide (anotações e quadro)', function(){ limpar(); });
  btn('voto', '📊', 'Votação rápida A–E (conte as mãos levantadas)', function(){ votacao(); });
  btn('png', '💾', 'Salvar as anotações como imagem', function(){ salvaPng(); });
  sep();
  btn('qesq', '◧', 'Quadro lateral à esquerda (1/4 da largura)', function(){ alternaLado('esq'); });
  btn('qdir', '◨', 'Quadro lateral à direita (1/4 da largura)', function(){ alternaLado('dir'); });
  btn('fundo', '▦', 'Fundo do quadro (branco, quadriculado, pontilhado, eixos, pautado)', function(){ estado.fundo = (estado.fundo + 1) % FUNDOS.length; dica('Fundo do quadro: ' + FUNDOS[estado.fundo]); renderTudo(); if(!estado.lado) abreQuadro('dir'); });
  btn('fechar', '✕', 'Fechar a caneta (as anotações ficam guardadas) — D', function(){ fecha(); });

  function atualizaBotoes(){
    Object.keys(botoes).forEach(function(k){
      var b = botoes[k], on = false;
      if(k === estado.ferr) on = true;
      if(k.indexOf('c-') === 0 && k.slice(2) === estado.cor) on = true;
      if(k.indexOf('e-') === 0 && k !== 'e-x' && +k.slice(2) === estado.esp) on = true;
      if(k === 'qesq' && estado.lado === 'esq') on = true; if(k === 'qdir' && estado.lado === 'dir') on = true;
      b.classList.toggle('sel', on);
    });
    var i = idx(); botoes.desfazer.disabled = !dado(i).length; botoes.refazer.disabled = !desf(i).length;
  }
  function ferr(f){
    estado.ferr = f; angPts = null; foco = null; camadas.forEach(function(c){ c.prev = null; c.fx = f === 'foco' ? fxFoco : null; });
    camadas.forEach(function(c){ c.cv.classList.toggle('mao', f === 'mao'); c.cv.classList.toggle('ativo', f !== 'mao'); c.cv.classList.toggle('sem-cursor', f === 'laser' || f === 'foco'); });
    atualizaBotoes(); renderTudo();
    if(f === 'foco') dica('Holofote: mova o ponteiro'); else if(f === 'laser') dica('Laser: mova o ponteiro'); else if(f === 'angulo') dica('Clique no vértice do ângulo');
  }
  function desfazer(){ var i = idx(), l = dado(i); if(!l.length) return; desf(i).push(l.pop()); renderTudo(); salvar(); atualizaBotoes(); }
  function refazer(){ var i = idx(), d = desf(i); if(!d.length) return; dado(i).push(d.pop()); renderTudo(); salvar(); atualizaBotoes(); }
  function limpar(){ var i = idx(); if(!dado(i).length){ dica('Este slide já está limpo'); return; } estado.desfeitos[i] = dado(i).slice().reverse(); estado.dados[i] = []; renderTudo(); salvar(); atualizaBotoes(); dica('Slide limpo — use ↷ para voltar'); }
  function salvaPng(){
    var c = estado.lado ? cb : cs, out = D.createElement('canvas'); out.width = c.cv.width; out.height = c.cv.height; var x = out.getContext('2d');
    x.fillStyle = estado.lado ? '#ffffff' : 'rgba(0,0,0,0)'; if(estado.lado){ x.fillRect(0, 0, out.width, out.height); } x.drawImage(c.cv, 0, 0);
    var a = D.createElement('a'); a.download = 'anotacoes-slide-' + (idx() + 1) + '.png'; a.href = out.toDataURL('image/png'); D.body.appendChild(a); a.click(); a.remove();
  }

  // arrastar a barra
  (function(){
    var arr = null; var pos = null; try{ pos = JSON.parse(lsGet('qd:pos') || 'null'); }catch(e){}
    function aplica(p){ bar.style.left = p.x + 'px'; bar.style.top = p.y + 'px'; bar.style.transform = 'none'; }
    if(pos && pos.x >= 0 && pos.y >= 0 && pos.x < W.innerWidth - 60 && pos.y < W.innerHeight - 60 && W.innerWidth > 900) aplica(pos);
    grip.addEventListener('pointerdown', function(e){ var r = bar.getBoundingClientRect(); arr = { dx: e.clientX - r.left, dy: e.clientY - r.top }; grip.setPointerCapture(e.pointerId); grip.style.cursor = 'grabbing'; });
    grip.addEventListener('pointermove', function(e){ if(!arr) return; aplica({ x: Math.max(0, Math.min(W.innerWidth - 60, e.clientX - arr.dx)), y: Math.max(0, Math.min(W.innerHeight - 60, e.clientY - arr.dy)) }); });
    grip.addEventListener('pointerup', function(){ if(!arr) return; arr = null; grip.style.cursor = ''; var r = bar.getBoundingClientRect(); lsSet('qd:pos', JSON.stringify({ x: Math.round(r.left), y: Math.round(r.top) })); });
  })();

  // ---------- abrir/fechar, teclas, troca de slide ----------
  function monta(){ var b = D.body || R; if(!bar.parentNode){ b.appendChild(bar); b.appendChild(tip); } }
  function abre(){ monta(); estado.aberto = true; bar.classList.add('on'); if(W.innerWidth > 900 && !lsGet('qd:pos')) R.classList.add('qd-pad'); if(estado.ferr === 'mao') ferr('caneta'); else ferr(estado.ferr); renderTudo(); dica('Caneta ligada — D fecha; 0 = interagir com o slide'); }
  function fecha(){ estado.aberto = false; bar.classList.remove('on'); R.classList.remove('qd-pad'); ferr('mao'); if(estado.lado) fechaQuadro(); camadas.forEach(function(c){ c.cv.classList.add('mao'); c.cv.classList.remove('ativo'); }); }
  function alterna(){ if(estado.aberto) fecha(); else abre(); }

  D.addEventListener('keydown', function(e){
    if(!estado.aberto) return;
    var t = e.target && e.target.tagName; if(t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
    var k = (e.key || '').toLowerCase();
    if((e.ctrlKey || e.metaKey) && k === 'z'){ e.preventDefault(); e.stopPropagation(); e.shiftKey ? refazer() : desfazer(); return; }
    if((e.ctrlKey || e.metaKey) && k === 'y'){ e.preventDefault(); e.stopPropagation(); refazer(); return; }
    if(e.ctrlKey || e.metaKey || e.altKey) return;
    var mapa = { '0': 'mao', '1': 'caneta', '2': 'marca', '3': 'borracha', '4': 'texto', '5': 'laser', '6': 'foco', '7': 'cobrir' };
    if(mapa[k]){ e.preventDefault(); e.stopPropagation(); ferr(mapa[k]); return; }
    if(k === 'd'){ e.preventDefault(); e.stopPropagation(); fecha(); return; }
    if(k === 'escape'){ ferr('mao'); }
  }, true);

  var ultimo = -1;
  setInterval(function(){ var i = idx(); if(i !== ultimo){ ultimo = i; angPts = null; foco = null; camadas.forEach(function(c){ c.prev = null; }); renderTudo(); if(estado.aberto) atualizaBotoes(); } }, 200);
  W.addEventListener('resize', function(){ posicionaQuadro(); renderTudo(); });
  new MutationObserver(function(){ renderTudo(); }).observe(R, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  ferr('mao'); camadas.forEach(function(c){ c.cv.classList.add('mao'); }); setTimeout(renderTudo, 50);

  W.EduQuadro = { abrir: abre, fechar: fecha, alternar: alterna, aberto: function(){ return estado.aberto; } };
})();
