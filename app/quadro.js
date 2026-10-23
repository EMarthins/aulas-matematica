/* Caneta e quadro para as aulas em slides (carregado sob demanda por app/ferramentas.js: menu ⋯ → "Caneta e quadro" ou tecla D).
   - Desenha por cima do slide (caneta, marca-texto, borracha, texto, reta, seta, retângulo, círculo, triângulo, ângulo com medida, malha).
   - Laser, holofote e "cobrir" (esconde uma área até clicar) para apresentar.
   - Instrumentos: régua (cm/mm), esquadros 45° e 60°, transferidor — arrastar, girar (alça ↻ / roda do mouse / [ ]) e riscar junto à borda (a caneta "gruda" e fica reta).
   - Compasso (círculo por centro e raio, com o raio em cm), medidor de segmentos, carimbos (✔ ✘ ★ ? !), mover traços, tracejado, malha sobre o slide (com eixos numerados).
   - Quadro lateral: o slide encolhe para um lado e libera 1/4 da largura para escrever (esquerda ou direita); lousa cheia (▣) e lousa escura (🌑).
   - Calculadora científica flutuante (app/calculadora.js).
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
  var estado = { aberto: false, ferr: 'mao', cor: 'auto', esp: 3, lado: null, fundo: 0, dados: {}, desfeitos: {}, refeitos: {}, sel: null, inst: [], ult: null, tracejado: 0, malha: 0, escura: 0, carimbo: 0 };
  var SRC = (D.currentScript || {}).src || '';
  var FUNDOS = ['Branco', 'Quadriculado', 'Pontilhado', 'Eixos cartesianos', 'Pautado'];
  var chave = 'qd:' + (W.location.pathname || '');
  try{ var salvo = JSON.parse(W.sessionStorage.getItem(chave) || 'null'); if(salvo && salvo.dados) estado.dados = salvo.dados; }catch(e){}
  function salvar(){ try{ W.sessionStorage.setItem(chave, JSON.stringify({ dados: estado.dados })); }catch(e){} }

  function idx(){ for(var i = 0; i < slides.length; i++) if(slides[i].classList.contains('active')) return i; return 0; }
  function dado(i){ return estado.dados[i] || (estado.dados[i] = []); }
  function und(i){ return estado.desfeitos[i] || (estado.desfeitos[i] = []); }       // pilha de estados anteriores (JSON) para desfazer
  function red(i){ return estado.refeitos[i] || (estado.refeitos[i] = []); }         // estados desfeitos, para refazer
  function marca(){ var i = idx(), p = und(i); p.push(JSON.stringify(dado(i))); if(p.length > 60) p.shift(); estado.refeitos[i] = []; } // chamar ANTES de alterar os traços do slide

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
  '.qd-bar{position:fixed;z-index:99990;left:10px;top:50%;transform:translateY(-50%);width:134px;max-height:calc(100vh - 20px);overflow:auto;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.45));padding:6px;font-family:Archivo,Arial,sans-serif;display:none;user-select:none;-webkit-user-select:none}' +
  '.qd-bar.on{display:block}' +
  '.qd-grip{cursor:grab;text-align:center;font-size:.7rem;color:var(--ink-faint,#777);letter-spacing:.2em;padding:0 0 4px;touch-action:none}' +
  '.qd-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px}' +
  '.qd-bar .qd-gt{grid-column:1/-1;font:800 .6rem Archivo,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint,#777);padding:5px 2px 0}' +
  '.qd-bar button{font:inherit;border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:inherit;border-radius:9px;height:38px;min-width:0;cursor:pointer;font-size:1.05rem;line-height:1;display:flex;align-items:center;justify-content:center;padding:0}' +
  '.qd-bar button:hover{border-color:var(--primary,#382EAE)}' +
  '.qd-bar button.sel{background:var(--primary,#382EAE);border-color:var(--primary,#382EAE);color:var(--primary-ink,#fff)}' +
  '.qd-bar button:disabled{opacity:.4;cursor:default}' +
  '.qd-bar .qd-sep{grid-column:1/-1;height:1px;background:var(--line,#ddd);margin:3px 0}' +
  '.qd-bar .qd-cor{height:26px;border-radius:50%;border:2px solid var(--surface,#fff);box-shadow:0 0 0 1px var(--line-strong,#bbb)}' +
  '.qd-bar .qd-cor.sel{box-shadow:0 0 0 3px var(--primary,#382EAE)}' +
  '.qd-bar .qd-esp i{display:block;background:currentColor;border-radius:99px;width:70%}' +
  '.qd-sel{position:absolute;z-index:47;display:none;gap:4px;flex-wrap:wrap;max-width:96%;background:var(--surface,#fff);border:1px solid var(--line-strong,#bbb);border-radius:12px;padding:4px;box-shadow:0 14px 30px -14px var(--shadow,rgba(0,0,0,.5))}' +
  '.qd-sel button{font:700 .8rem Archivo,Arial,sans-serif;border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:var(--ink,#111);border-radius:8px;padding:.45em .75em;cursor:pointer;white-space:nowrap}.qd-sel button:hover{border-color:var(--primary,#382EAE)}' +
  '.qd-txt{position:absolute;z-index:45;font:600 20px Archivo,Arial,sans-serif;border:2px dashed var(--primary,#382EAE);background:var(--surface,#fff);color:var(--ink,#111);border-radius:6px;padding:2px 6px;min-width:6em;outline:none}' +
  '.qd-tip{position:fixed;z-index:99991;bottom:18px;left:50%;transform:translateX(-50%);background:var(--ink,#111);color:var(--surface,#fff);font:700 .82rem Archivo,Arial,sans-serif;border-radius:99px;padding:.5em 1.1em;pointer-events:none;opacity:0;transition:opacity .25s}' +
  '.qd-tip.on{opacity:.94}' +
  '.qd-voto{position:fixed;z-index:99992;right:14px;bottom:70px;width:min(19rem,calc(100vw - 28px));background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:16px;padding:10px 12px;box-shadow:0 24px 50px -18px var(--shadow,rgba(0,0,0,.45));font-family:Archivo,Arial,sans-serif}' +
  '.qd-vh{display:flex;align-items:center;gap:8px;margin-bottom:8px}.qd-vh span{margin-left:auto;font-size:.78rem;color:var(--ink-faint,#777)}.qd-vh button{border:0;background:transparent;color:inherit;cursor:pointer;font-size:1rem}' +
  '.qd-vl{display:flex;align-items:center;gap:8px;margin:5px 0}.qd-vl button{width:38px;height:38px;border-radius:10px;border:1.5px solid var(--primary,#382EAE);background:var(--primary-soft,#eef);color:var(--primary,#382EAE);font:800 1.05rem Archivo,Arial,sans-serif;cursor:pointer}' +
  '.qd-vb{flex:1;height:14px;border-radius:99px;background:var(--surface-2,#f1f1f5);overflow:hidden}.qd-vb i{display:block;height:100%;background:var(--primary,#382EAE);border-radius:99px;transition:width .25s}.qd-vl span{min-width:4.6em;font-size:.76rem;text-align:right;color:var(--ink-faint,#777)}' +
  '.qd-vf{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}.qd-vf button{font:inherit;font-size:.78rem;font-weight:700;border:1px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:inherit;border-radius:8px;padding:.35em .8em;cursor:pointer}' +
  '@media (max-width:900px){.qd-bar{left:50%;top:auto;bottom:6px;transform:translateX(-50%);width:min(96vw,640px);max-height:none}.qd-grid{grid-template-columns:repeat(12,1fr)}.qd-bar .qd-sep,.qd-bar .qd-gt{display:none}}' +
  'html.qd-pad body{padding-left:146px!important;box-sizing:border-box}' +
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

  function corReal(c, cam){ if(c === 'auto'){ if(cam && cam.id === 'b' && estado.escura) return '#f1f5f9'; var v = ''; try{ v = getComputedStyle(R).getPropertyValue('--ink').trim(); }catch(e){} return v || '#111'; } return c; }

  // ---------- geometria dos traços ----------
  function P(c, p){ return [p[0] * c.w, p[1] * c.h]; }
  function amostras(c, s){ // pontos (px) ao longo do traço, para a borracha
    var o = [], i, a, b, n, k, t;
    function seg(p, q){ n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / 8)); for(k = 0; k <= n; k++) o.push([p[0] + (q[0] - p[0]) * k / n, p[1] + (q[1] - p[1]) * k / n]); }
    if(s.t === 'p' || s.t === 'q'){ for(i = 0; i < s.pts.length; i++){ o.push(P(c, s.pts[i])); if(i) seg(P(c, s.pts[i - 1]), P(c, s.pts[i])); } }
    else if(s.t === 'l' || s.t === 'a' || s.t === 'm'){ seg(P(c, s.p[0]), P(c, s.p[1])); }
    else if(s.t === 'k'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var rk = Math.hypot(b[0] - a[0], b[1] - a[1]); for(t = 0; t < 6.3; t += .1) o.push([a[0] + rk * Math.cos(t), a[1] + rk * Math.sin(t)]); }
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
    var cor = corReal(s.c, c); cx.strokeStyle = cor; cx.fillStyle = cor; cx.lineWidth = s.w || 3; cx.globalAlpha = s.al || 1;
    if(s.d && s.t !== 'x' && s.t !== 'c') cx.setLineDash([(s.w || 3) * 3 + 4, (s.w || 3) * 2 + 4]);
    var a, b;
    if(s.t === 'm'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var dm = Math.hypot(b[0] - a[0], b[1] - a[1]), an2 = Math.atan2(b[1] - a[1], b[0] - a[0]), nx = -Math.sin(an2), ny = Math.cos(an2);
      cx.beginPath(); cx.moveTo(a[0], a[1]); cx.lineTo(b[0], b[1]); cx.moveTo(a[0] - nx * 8, a[1] - ny * 8); cx.lineTo(a[0] + nx * 8, a[1] + ny * 8); cx.moveTo(b[0] - nx * 8, b[1] - ny * 8); cx.lineTo(b[0] + nx * 8, b[1] + ny * 8); cx.stroke();
      if(dm > 14){ cx.setLineDash([]); var tx = (a[0] + b[0]) / 2 + nx * 16, ty = (a[1] + b[1]) / 2 + ny * 16; if(ty > (a[1] + b[1]) / 2 + 1 && Math.abs(Math.sin(an2)) < .3){ tx = (a[0] + b[0]) / 2 - nx * 16; ty = (a[1] + b[1]) / 2 - ny * 16; }
        cx.font = '800 15px Archivo,Arial,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.globalAlpha = 1; var tt = (dm / uC(c)).toFixed(1).replace('.', ',') + ' cm'; cx.lineWidth = 4; cx.strokeStyle = c.id === 'b' && estado.escura ? '#1e3a2f' : (getComputedStyle(R).getPropertyValue('--surface').trim() || '#fff'); cx.strokeText(tt, tx, ty); cx.fillText(tt, tx, ty); } }
    else if(s.t === 'q'){ cx.beginPath(); s.pts.forEach(function(q, n){ var z = P(c, q); if(n) cx.lineTo(z[0], z[1]); else cx.moveTo(z[0], z[1]); }); if(s.f){ cx.save(); cx.globalAlpha = 1; cx.fillStyle = s.f; cx.fill(); cx.restore(); } cx.stroke(); }
    else if(s.t === 'k'){ a = P(c, s.p[0]); b = P(c, s.p[1]); var rk = Math.hypot(b[0] - a[0], b[1] - a[1]);
      cx.beginPath(); cx.arc(a[0], a[1], rk, 0, 6.2832); cx.stroke(); cx.setLineDash([]); cx.beginPath(); cx.arc(a[0], a[1], 3.5, 0, 6.2832); cx.fill();
      if(rk > 12){ cx.globalAlpha = .75; cx.setLineDash([6, 5]); cx.lineWidth = Math.max(1.5, (s.w || 3) * .6); cx.beginPath(); cx.moveTo(a[0], a[1]); cx.lineTo(b[0], b[1]); cx.stroke(); cx.setLineDash([]); cx.globalAlpha = 1;
        var rt = 'r = ' + (rk / uC(c)).toFixed(1).replace('.', ',') + ' cm'; cx.font = '800 14px Archivo,Arial,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'bottom'; cx.lineWidth = 4; cx.strokeStyle = c.id === 'b' && estado.escura ? '#1e3a2f' : (getComputedStyle(R).getPropertyValue('--surface').trim() || '#fff'); cx.strokeText(rt, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - 4); cx.fillText(rt, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - 4); } }
    else
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
  function fundoQuadro(c, f){
    var cx = c.cx, w = c.w, h = c.h, x, y, esc = c.id === 'b' && estado.escura;
    cx.save(); cx.strokeStyle = esc ? 'rgba(226,232,240,.28)' : 'rgba(100,116,139,.35)'; cx.fillStyle = esc ? 'rgba(226,232,240,.5)' : 'rgba(100,116,139,.55)'; cx.lineWidth = 1;
    if(f === 1){ cx.beginPath(); for(x = 0; x < w; x += 28){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, h); } for(y = 0; y < h; y += 28){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke(); }
    else if(f === 2){ for(x = 14; x < w; x += 28) for(y = 14; y < h; y += 28){ cx.beginPath(); cx.arc(x, y, 1.4, 0, 6.3); cx.fill(); } }
    else if(f === 3){ cx.beginPath(); for(x = w / 2 % 28; x < w; x += 28){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, h); } for(y = h / 2 % 28; y < h; y += 28){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke();
      cx.strokeStyle = corReal('auto', c); cx.lineWidth = 2; cx.beginPath(); cx.moveTo(0, h / 2); cx.lineTo(w, h / 2); cx.moveTo(w / 2, 0); cx.lineTo(w / 2, h); cx.stroke(); cx.font = '700 13px Archivo,Arial'; cx.fillStyle = corReal('auto', c); cx.fillText('x', w - 14, h / 2 - 8); cx.fillText('y', w / 2 + 8, 14);
      cx.font = '600 10px Archivo,Arial'; cx.globalAlpha = .8; cx.textAlign = 'center'; var n;
      for(n = 1; n * 28 < w / 2 - 6; n++){ cx.fillText(String(n), w / 2 + n * 28, h / 2 + 14); cx.fillText(String(-n), w / 2 - n * 28, h / 2 + 14); }
      cx.textAlign = 'right'; for(n = 1; n * 28 < h / 2 - 6; n++){ cx.fillText(String(n), w / 2 - 6, h / 2 - n * 28 + 4); cx.fillText(String(-n), w / 2 - 6, h / 2 + n * 28 + 4); } }
    else if(f === 4){ cx.beginPath(); for(y = 44; y < h; y += 34){ cx.moveTo(0, y + .5); cx.lineTo(w, y + .5); } cx.stroke(); }
    cx.restore();
  }
  function render(c){
    if(!c) return; c.ajusta(); c.cx.clearRect(0, 0, c.w, c.h);
    if(c.id === 'b') fundoQuadro(c, estado.fundo); else if(estado.malha && estado.aberto) fundoQuadro(c, estado.malha);
    var lista = dado(idx());
    for(var i = 0; i < lista.length; i++) if(lista[i].l === c.id) traco(c, lista[i]);
    if(c.prev) traco(c, c.prev);
    if(estado.aberto) estado.inst.forEach(function(it){ if(it.l === c.id) desenhaInst(c, it); });
    if(estado.aberto && estado.ferr === 'selec') desenhaSel(c);
    if(c.fx) c.fx(c);
  }
  function renderTudo(){ camadas.forEach(render); }

  // ---------- instrumentos: régua, esquadros e transferidor (desenhados no canvas, com "ímã" nas bordas) ----------
  var CINST = { regua: ['rgba(250,204,21,.58)', '#92400e', 'Régua'], esq45: ['rgba(56,189,248,.42)', '#075985', 'Esquadro 45°'], esq60: ['rgba(52,211,153,.42)', '#065f46', 'Esquadro 60°'], transf: ['rgba(167,139,250,.4)', '#4c1d95', 'Transferidor'] };
  var POS0 = { regua: [.5, .62], esq45: [.34, .5], esq60: [.64, .5], transf: [.5, .5] };
  function uC(c){ return 37.8 * Math.max(.55, Math.min(1.6, Math.min(c.w / 1100, c.h / 650))); } // 1 cm na tela
  function forma(it, c){
    var u = uC(c), a, s, h, n, R, poly, d, t;
    if(it.id === 'regua'){ var L = 15 * u, H = 2.8 * u; return { u: u, L: L, H: H, poly: [[-L / 2, -H / 2], [L / 2, -H / 2], [L / 2, H / 2], [-L / 2, H / 2]], ed: [[[-L / 2, -H / 2], [L / 2, -H / 2]], [[-L / 2, H / 2], [L / 2, H / 2]]], hd: [L / 2 + 20, 0] }; }
    if(it.id === 'esq45'){ a = 10 * u; return { u: u, a: a, poly: [[-a / 2, a / 2], [a / 2, a / 2], [-a / 2, -a / 2]], ed: [[[-a / 2, a / 2], [a / 2, a / 2]], [[-a / 2, a / 2], [-a / 2, -a / 2]], [[a / 2, a / 2], [-a / 2, -a / 2]]], hd: [22, -22] }; }
    if(it.id === 'esq60'){ s = 7 * u; h = s * Math.sqrt(3); return { u: u, s: s, h: h, poly: [[-s / 2, h / 2], [s / 2, h / 2], [-s / 2, -h / 2]], ed: [[[-s / 2, h / 2], [s / 2, h / 2]], [[-s / 2, h / 2], [-s / 2, -h / 2]], [[s / 2, h / 2], [-s / 2, -h / 2]]], hd: [26, -15] }; }
    R = 6 * u; poly = [[R + .3 * u, R / 2], [R + .3 * u, R / 2 + .5 * u], [-R - .3 * u, R / 2 + .5 * u], [-R - .3 * u, R / 2]];
    for(d = 180; d >= 0; d -= 6){ t = d * Math.PI / 180; poly.push([R * Math.cos(t), R / 2 - R * Math.sin(t)]); }
    return { u: u, R: R, poly: poly, ed: [[[-R - .3 * u, R / 2], [R + .3 * u, R / 2]]], hd: [0, R / 2 + .5 * u + 24], ctr: [0, R / 2] };
  }
  function aMundo(it, c, p){ var co = Math.cos(it.a), si = Math.sin(it.a); return [it.x * c.w + p[0] * co - p[1] * si, it.y * c.h + p[0] * si + p[1] * co]; }
  function aLocal(it, c, p){ var co = Math.cos(it.a), si = Math.sin(it.a), dx = p[0] - it.x * c.w, dy = p[1] - it.y * c.h; return [dx * co + dy * si, -dx * si + dy * co]; }
  function dentroPoly(poly, p){ var d = false, i, j; for(i = 0, j = poly.length - 1; i < poly.length; j = i++){ if(((poly[i][1] > p[1]) !== (poly[j][1] > p[1])) && (p[0] < (poly[j][0] - poly[i][0]) * (p[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])) d = !d; } return d; }
  function reguaLinha(cx, u, v0, dir, nrm, mm, paso){
    var m, l, px, py; cx.beginPath();
    for(m = 0; m <= mm; m++){ l = (m % 10 === 0 ? .5 : m % 5 === 0 ? .36 : .2) * u; px = v0[0] + dir[0] * m * u / 10; py = v0[1] + dir[1] * m * u / 10; cx.moveTo(px, py); cx.lineTo(px + nrm[0] * l, py + nrm[1] * l); }
    cx.stroke();
    if(paso){ cx.textAlign = 'center'; cx.textBaseline = 'middle'; for(m = paso; m <= mm; m += paso){ px = v0[0] + dir[0] * m * u / 10 + nrm[0] * .85 * u; py = v0[1] + dir[1] * m * u / 10 + nrm[1] * .85 * u; cx.fillText(String(m / 10), px, py); } }
  }
  function desenhaInst(c, it){
    var f = forma(it, c), cx = c.cx, u = f.u, cor = CINST[it.id], k, t, r, d, x, y;
    cx.save(); cx.translate(it.x * c.w, it.y * c.h); cx.rotate(it.a); cx.lineJoin = 'round';
    cx.beginPath(); f.poly.forEach(function(p, i){ if(i) cx.lineTo(p[0], p[1]); else cx.moveTo(p[0], p[1]); }); cx.closePath(); cx.fillStyle = cor[0]; cx.fill(); cx.strokeStyle = cor[1]; cx.lineWidth = 2; cx.stroke();
    cx.strokeStyle = '#1f2937'; cx.fillStyle = '#1f2937'; cx.lineWidth = 1; cx.font = '700 ' + Math.max(9, Math.round(u * .3)) + 'px Archivo,Arial,sans-serif';
    if(it.id === 'regua'){ reguaLinha(cx, u, [-f.L / 2, -f.H / 2], [1, 0], [0, 1], 150, 10); reguaLinha(cx, u, [-f.L / 2, f.H / 2], [1, 0], [0, -1], 150, 0); cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('cm', 0, f.H / 2 - 1.05 * u); }
    else if(it.id === 'esq45'){ var a = f.a; reguaLinha(cx, u, [-a / 2, a / 2], [1, 0], [0, -1], 100, 20); reguaLinha(cx, u, [-a / 2, a / 2], [0, -1], [1, 0], 100, 0);
      cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('90°', -a / 2 + 1.5 * u, a / 2 - 1.5 * u); cx.fillText('45°', a / 2 - 2.6 * u, a / 2 - .9 * u); cx.fillText('45°', -a / 2 + .9 * u, -a / 2 + 2.6 * u); }
    else if(it.id === 'esq60'){ reguaLinha(cx, u, [-f.s / 2, f.h / 2], [1, 0], [0, -1], 70, 20); reguaLinha(cx, u, [-f.s / 2, f.h / 2], [0, -1], [1, 0], Math.floor(f.h / u * 10), 20);
      cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('90°', -f.s / 2 + 1.5 * u, f.h / 2 - 1.5 * u); cx.fillText('60°', f.s / 2 - 2.3 * u, f.h / 2 - .9 * u); cx.fillText('30°', -f.s / 2 + .9 * u, -f.h / 2 + 2.6 * u); }
    else { var R = f.R, cy = R / 2; cx.beginPath();
      for(d = 0; d <= 180; d++){ t = d * Math.PI / 180; r = d % 10 === 0 ? .5 * u : d % 5 === 0 ? .36 * u : .2 * u; cx.moveTo(R * Math.cos(t), cy - R * Math.sin(t)); cx.lineTo((R - r) * Math.cos(t), cy - (R - r) * Math.sin(t)); }
      cx.moveTo(-.4 * u, cy); cx.lineTo(.4 * u, cy); cx.moveTo(0, cy - .4 * u); cx.lineTo(0, cy + .4 * u); cx.stroke();
      cx.textAlign = 'center'; cx.textBaseline = 'middle';
      for(d = 0; d <= 180; d += 10){ t = d * Math.PI / 180; cx.fillStyle = '#1f2937'; cx.fillText(String(d), (R - .95 * u) * Math.cos(t), cy - (R - .95 * u) * Math.sin(t)); cx.fillStyle = '#6d28d9'; cx.fillText(String(180 - d), (R - 1.6 * u) * Math.cos(t), cy - (R - 1.6 * u) * Math.sin(t)); }
      cx.fillStyle = '#dc2626'; cx.beginPath(); cx.arc(0, cy, 3, 0, 6.3); cx.fill(); }
    cx.restore();
    var hp = aMundo(it, c, f.hd); cx.save(); cx.beginPath(); cx.arc(hp[0], hp[1], 13, 0, 6.3); cx.fillStyle = '#fff'; cx.fill(); cx.lineWidth = 2; cx.strokeStyle = cor[1]; cx.stroke(); cx.fillStyle = cor[1]; cx.font = '800 16px Arial'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('↻', hp[0], hp[1] + 1); cx.restore();
  }
  function toNorm(c, q){ return [q[0] / c.w, q[1] / c.h]; }
  function pegaHandle(c, p){ for(var i = estado.inst.length - 1; i >= 0; i--){ var it = estado.inst[i]; if(it.l !== c.id) continue; var h = aMundo(it, c, forma(it, c).hd); if(Math.hypot(h[0] - p[0], h[1] - p[1]) < 16) return it; } return null; }
  function pegaCorpo(c, p){ for(var i = estado.inst.length - 1; i >= 0; i--){ var it = estado.inst[i]; if(it.l !== c.id) continue; if(dentroPoly(forma(it, c).poly, aLocal(it, c, p))) return it; } return null; }
  function acharBorda(c, p, max){
    var best = null; estado.inst.forEach(function(it){ if(it.l !== c.id) return;
      forma(it, c).ed.forEach(function(e){ var a = aMundo(it, c, e[0]), b = aMundo(it, c, e[1]), vx = b[0] - a[0], vy = b[1] - a[1], L2 = vx * vx + vy * vy, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * vx + (p[1] - a[1]) * vy) / L2)), q = [a[0] + vx * t, a[1] + vy * t], d = Math.hypot(q[0] - p[0], q[1] - p[1]); if(d < max && (!best || d < best.d)) best = { d: d, a: a, b: b, q: q }; }); });
    return best;
  }
  function projBorda(b, p){ var vx = b.b[0] - b.a[0], vy = b.b[1] - b.a[1], t = Math.max(0, Math.min(1, ((p[0] - b.a[0]) * vx + (p[1] - b.a[1]) * vy) / (vx * vx + vy * vy))); return [b.a[0] + vx * t, b.a[1] + vy * t]; }
  function acharCentro(c, p){ for(var i = estado.inst.length - 1; i >= 0; i--){ var it = estado.inst[i]; if(it.l !== c.id || it.id !== 'transf') continue; var q = aMundo(it, c, forma(it, c).ctr); if(Math.hypot(q[0] - p[0], q[1] - p[1]) < 16) return q; } return null; }
  function alternaInst(id){
    var i = -1, k; for(k = 0; k < estado.inst.length; k++) if(estado.inst[k].id === id) i = k;
    if(i >= 0){ estado.inst.splice(i, 1); } else { var p = POS0[id]; estado.inst.push({ id: id, l: estado.lado === 'tudo' ? 'b' : 's', x: p[0], y: p[1], a: 0 }); estado.ult = estado.inst[estado.inst.length - 1];
      if(['mao', 'laser', 'foco', 'borracha', 'cobrir', 'texto'].indexOf(estado.ferr) >= 0) ferr('caneta'); dica(CINST[id][2] + ': arraste pelo corpo · gire pela alça ↻ ou com a roda · risque junto à borda'); }
    renderTudo(); atualizaBotoes();
  }

  // ---------- interação ----------
  var isDark = function(){ return /dark|escuro/.test(R.getAttribute('data-theme') || ''); };
  var FORMAS = { reta: 'l', seta: 'a', ret: 'r', circ: 'o', tri: 'u', compasso: 'k', medir: 'm' };
  var SNAP = { caneta: 1, marca: 1, reta: 1, seta: 1, medir: 1 }, GRAB = { caneta: 1, marca: 1, reta: 1, seta: 1, medir: 1, selec: 1 };
  var CAR = ['✔', '✘', '★', '?', '!'], CARCOR = { '✔': '#16a34a', '✘': '#dc2626', '★': '#facc15', '?': '#1d4ed8', '!': '#ea580c' };
  var arrasto = null;
  var ativoPtr = null, ultimoPen = 0, rastro = [], laserRaf = 0, foco = null, angPts = null;
  function norm(c, e){ var r = c.cv.getBoundingClientRect(); return [Math.min(1.5, Math.max(-.5, (e.clientX - r.left) / r.width)), Math.min(1.5, Math.max(-.5, (e.clientY - r.top) / r.height))]; }
  function pxy(c, e){ var r = c.cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }

  function novoTraco(c, extra){
    var s = { l: c.id, c: estado.cor, w: estado.esp, d: estado.tracejado }; for(var k in extra) s[k] = extra[k]; return s;
  }
  function nrmS(c, e){ var ct = acharCentro(c, pxy(c, e)); return ct ? toNorm(c, ct) : norm(c, e); } // gruda no centro do transferidor
  function achaTraco(c, p){
    var lista = dado(idx());
    for(var k = lista.length - 1; k >= 0; k--){ var s = lista[k]; if(s.l !== c.id) continue; var am = amostras(c, s); for(var j = 0; j < am.length; j++) if(Math.hypot(am[j][0] - p[0], am[j][1] - p[1]) < 12) return s; }
    return null;
  }
  function desloca(s, dx, dy){ (s.pts || []).forEach(function(p){ p[0] += dx; p[1] += dy; }); (s.p || []).forEach(function(p){ p[0] += dx; p[1] += dy; }); }
  function iniciaArrasto(c, e, it){
    var pp = pxy(c, e), i = estado.inst.indexOf(it); estado.inst.push(estado.inst.splice(i, 1)[0]); estado.ult = it;
    arrasto = { id: e.pointerId, c: c, it: it, modo: null, off: [pp[0] - it.x * c.w, pp[1] - it.y * c.h] };
  }
  function moveArrasto(c, e){
    var pp = pxy(c, e), it = arrasto.it;
    if(arrasto.modo === 'rot'){ var f = forma(it, c), a = Math.atan2(pp[1] - it.y * c.h, pp[0] - it.x * c.w) - Math.atan2(f.hd[1], f.hd[0]), q = Math.PI / 2, r = Math.round(a / q) * q;
      if(e.shiftKey){ var q2 = Math.PI / 12; a = Math.round(a / q2) * q2; } else if(Math.abs(a - r) < .04) a = r; it.a = a; }
    else { it.x = Math.max(0, Math.min(1, (pp[0] - arrasto.off[0]) / c.w)); it.y = Math.max(0, Math.min(1, (pp[1] - arrasto.off[1]) / c.h)); }
    render(c);
  }
  function confirma(c, s){ var i = idx(); marca(); dado(i).push(s); c.prev = null; render(c); salvar(); atualizaBotoes(); }

  function apagaEm(c, e){
    var p = pxy(c, e), i = idx(), lista = dado(i), r = 10 + estado.esp * 2, acha = [];
    for(var k = lista.length - 1; k >= 0; k--){
      var s = lista[k]; if(s.l !== c.id) continue;
      var am = amostras(c, s);
      for(var j = 0; j < am.length; j++){ if(Math.hypot(am[j][0] - p[0], am[j][1] - p[1]) < r){ acha.push(k); break; } }
    }
    if(acha.length){ if(ativoPtr && !ativoPtr.marcou){ marca(); ativoPtr.marcou = true; } acha.forEach(function(k){ lista.splice(k, 1); }); render(c); salvar(); atualizaBotoes(); }
  }

  // ---------- seleção: mover, redimensionar, girar, endireitar, curvar ----------
  var gest = null, curv = null, animando = false, chips = el('div', 'qd-sel');
  var TXTR = { 1: '1 rad', 1.5707963: 'π/2 rad = 90°', 3.1415926: 'π rad = 180°', 4.7123889: '3π/2 rad = 270°', 6.2831853: '2π rad = 360°' };
  function clone(o){ return o ? JSON.parse(JSON.stringify(o)) : o; }
  function caixa(c, it){
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    it.forEach(function(s){ var am = amostras(c, s); if(s.t === 'x'){ var a = P(c, s.p[0]); am.push([a[0], a[1] - s.z], [a[0], a[1] + s.z * .25]); }
      am.forEach(function(q){ if(q[0] < x0) x0 = q[0]; if(q[0] > x1) x1 = q[0]; if(q[1] < y0) y0 = q[1]; if(q[1] > y1) y1 = q[1]; }); });
    return { x0: x0 - 8, y0: y0 - 8, x1: x1 + 8, y1: y1 + 8 };
  }
  function alcasDe(b){ var mx = (b.x0 + b.x1) / 2, my = (b.y0 + b.y1) / 2; return { nw: [b.x0, b.y0], n: [mx, b.y0], ne: [b.x1, b.y0], e: [b.x1, my], se: [b.x1, b.y1], s: [mx, b.y1], sw: [b.x0, b.y1], w: [b.x0, my], rot: [mx, b.y0 - 28] }; }
  function pegaAlca(b, p){ var h = alcasDe(b), k; for(k in h) if(Math.hypot(h[k][0] - p[0], h[k][1] - p[1]) < 11) return k; return null; }
  function desmarca(){ estado.sel = null; curv = null; gest = null; escondeChips(); }
  function elipsePts(x, y, rx, ry){ var o = [], n = 120, j, t; for(j = 0; j <= n; j++){ t = 1.5 * Math.PI + j / n * 2 * Math.PI; o.push([x + rx * Math.cos(t), y - ry * Math.sin(t)]); } return o; }
  function polilinha(c, s){ // pontos (px) ao longo do traço, na ordem em que seria "desenrolado"
    var a, b;
    if(s.t === 'p' || s.t === 'q') return s.pts.map(function(q){ return [q[0] * c.w, q[1] * c.h]; });
    if(s.t === 'l' || s.t === 'a' || s.t === 'm') return [P(c, s.p[0]), P(c, s.p[1])];
    if(!s.p || !s.p[0] || !s.p[1]) return null; // texto, carimbo etc.: nada para desenrolar
    a = P(c, s.p[0]); b = P(c, s.p[1]);
    if(s.t === 'r') return [a, [b[0], a[1]], b, [a[0], b[1]], a];
    if(s.t === 'u'){ var top = [(a[0] + b[0]) / 2, Math.min(a[1], b[1])], bl = [Math.min(a[0], b[0]), Math.max(a[1], b[1])], br = [Math.max(a[0], b[0]), Math.max(a[1], b[1])]; return [top, bl, br, top]; }
    if(s.t === 'o') return elipsePts((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, Math.abs(b[0] - a[0]) / 2, Math.abs(b[1] - a[1]) / 2);
    if(s.t === 'k'){ var rr = Math.hypot(b[0] - a[0], b[1] - a[1]); return elipsePts(a[0], a[1], rr, rr); }
    return null;
  }
  function comprimento(pl){ var L = 0, i; for(i = 1; i < pl.length; i++) L += Math.hypot(pl[i][0] - pl[i - 1][0], pl[i][1] - pl[i - 1][1]); return L; }
  function reamostra(pl, n){ // n pontos igualmente espaçados ao longo do comprimento
    var d = [0], i, L = 0, out = [], j = 1, k, t, u;
    for(i = 1; i < pl.length; i++){ L += Math.hypot(pl[i][0] - pl[i - 1][0], pl[i][1] - pl[i - 1][1]); d.push(L); }
    for(k = 0; k < n; k++){ t = L * k / (n - 1); while(j < pl.length - 1 && d[j] < t) j++; u = d[j] - d[j - 1] ? (t - d[j - 1]) / (d[j] - d[j - 1]) : 0; out.push([pl[j - 1][0] + (pl[j][0] - pl[j - 1][0]) * u, pl[j - 1][1] + (pl[j][1] - pl[j - 1][1]) * u]); }
    return { pts: out, L: L };
  }
  function paraPoli(c, s){ if(s.t === 'r' || s.t === 'o' || s.t === 'u'){ var pl = polilinha(c, s); s.t = 'q'; s.pts = pl.map(function(q){ return toNorm(c, q); }); delete s.p; } }
  function fmtN(v, d){ return v.toFixed(d).replace('.', ','); }

  function limpaChips(){ chips.style.display = 'none'; }
  function escondeChips(){ chips.style.display = 'none'; }
  function mostraChips(){
    var S = estado.sel; if(!S || !estado.aberto || estado.ferr !== 'selec' || animando || (gest && gest.modo !== 'marq')){ escondeChips(); return; }
    var bt = [], one = S.it.length === 1 ? S.it[0] : null;
    if(curv){ bt = [['✔ Pronto', fimCurv, 'Terminar de curvar'], ['↺ Reta', function(){ curvAplica(0); mostraChips(); }, 'Voltar a ser reta']]; }
    else {
      if(S.it.some(function(s){ return ['p', 'q', 'r', 'o', 'u', 'k'].indexOf(s.t) >= 0; })) bt.push(['↔ Endireitar', function(){ endireitar(S.c, S.it); }, 'Desenrola o traço numa reta do mesmo comprimento']);
      if(one && ['l', 'a', 'm', 'p', 'q'].indexOf(one.t) >= 0) bt.push(['⌒ Curvar', function(){ iniciaCurv(S.c, one); }, 'Dobra a reta em arco, mantendo o comprimento (mostra o ângulo em rad)']);
      if(one && one.t === 'k') bt.push(['1 rad', function(){ umRad(S.c, one); }, 'Marca o arco de comprimento igual ao raio']);
      bt.push(['⧉ Duplicar', duplicar, 'Copiar a seleção'], ['🗑 Excluir', excluir, 'Apagar a seleção (Delete)']);
    }
    chips.innerHTML = ''; bt.forEach(function(b){ var x = el('button', '', b[0]); x.type = 'button'; x.title = b[2] || ''; x.addEventListener('pointerdown', function(ev){ ev.stopPropagation(); }); x.addEventListener('click', function(ev){ ev.stopPropagation(); b[1](); }); chips.appendChild(x); });
    var c = S.c, host = c.host; if(chips.parentNode !== host) host.appendChild(chips);
    chips.style.display = 'flex'; var w = chips.offsetWidth, h = chips.offsetHeight, b0 = S.box, hr = host.getBoundingClientRect(), cr = c.cv.getBoundingClientRect();
    var ox = cr.left - hr.left, oy = cr.top - hr.top, x = Math.max(4, Math.min(c.w - w - 4, (b0.x0 + b0.x1) / 2 - w / 2)), y = b0.y1 + 12;
    if(y + h > c.h - 4) y = Math.max(4, b0.y0 - 28 - h - 10);
    chips.style.left = (ox + x) + 'px'; chips.style.top = (oy + y) + 'px';
  }
  function selecionaTudo(c, it){ estado.sel = { c: c, it: it, box: caixa(c, it) }; render(c); mostraChips(); }
  function selecPress(c, e, pp){
    var S = estado.sel;
    if(curv){ if(Math.hypot(pp[0] - curv.end[0], pp[1] - curv.end[1]) < 20){ gest = { id: e.pointerId, c: c, modo: 'curv' }; escondeChips(); } return; }
    if(S && S.c === c){
      var h = pegaAlca(S.box, pp); if(h){ gest = { id: e.pointerId, c: c, modo: h, p0: pp, box: clone(S.box), items: S.it, snap: null, marcado: false }; escondeChips(); return; }
      if(pp[0] >= S.box.x0 && pp[0] <= S.box.x1 && pp[1] >= S.box.y0 && pp[1] <= S.box.y1){ gest = { id: e.pointerId, c: c, modo: 'mov', p0: pp, box: clone(S.box), items: S.it, snap: null, marcado: false }; escondeChips(); return; }
    }
    var tr = achaTraco(c, pp);
    if(tr){
      var it = e.shiftKey && S && S.c === c ? (S.it.indexOf(tr) >= 0 ? S.it.filter(function(s){ return s !== tr; }) : S.it.concat([tr])) : [tr];
      if(!it.length){ desmarca(); render(c); return; }
      estado.sel = { c: c, it: it, box: caixa(c, it) }; gest = { id: e.pointerId, c: c, modo: 'mov', p0: pp, box: clone(estado.sel.box), items: it, snap: null, marcado: false }; escondeChips(); render(c); return;
    }
    desmarca(); gest = { id: e.pointerId, c: c, modo: 'marq', ini: pp, cur: pp }; render(c);
  }
  function aplicaT(c, g, T, fs){
    g.items.forEach(function(s, i){ var o = g.snap[i];
      if(o.p) s.p = o.p.map(function(q){ return toNorm(c, T([q[0] * c.w, q[1] * c.h])); });
      if(o.pts) s.pts = o.pts.map(function(q){ return toNorm(c, T([q[0] * c.w, q[1] * c.h])); });
      if(s.t === 'x' && o.z) s.z = Math.max(8, o.z * fs); });
    estado.sel.box = caixa(c, g.items); render(c);
  }
  function selecMove(c, e){
    var g = gest, pp = pxy(c, e), m = g.modo;
    if(m === 'marq'){ g.cur = pp; render(c); return; }
    if(m === 'curv'){ curvMove(c, pp); return; }
    if(!g.marcado){ if(Math.hypot(pp[0] - g.p0[0], pp[1] - g.p0[1]) < 3) return; marca(); g.marcado = true; if(m === 'rot') g.items.forEach(function(s){ paraPoli(c, s); }); g.snap = g.items.map(function(s){ return { p: clone(s.p), pts: clone(s.pts), z: s.z }; }); }
    var b = g.box, mx = (b.x0 + b.x1) / 2, my = (b.y0 + b.y1) / 2, T, fs = 1;
    if(m === 'mov'){ var dx = pp[0] - g.p0[0], dy = pp[1] - g.p0[1]; T = function(q){ return [q[0] + dx, q[1] + dy]; }; }
    else if(m === 'rot'){ var a = Math.atan2(pp[1] - my, pp[0] - mx) - Math.atan2(g.p0[1] - my, g.p0[0] - mx), st = Math.PI / 12; if(e.shiftKey) a = Math.round(a / st) * st; var co = Math.cos(a), si = Math.sin(a); T = function(q){ var x = q[0] - mx, y = q[1] - my; return [mx + x * co - y * si, my + x * si + y * co]; }; }
    else {
      var H = alcasDe(b), h0 = H[m], ph = { nw: H.se, ne: H.sw, se: H.nw, sw: H.ne, n: H.s, s: H.n, e: H.w, w: H.e }[m], sx = 1, sy = 1, vx = h0[0] - ph[0], vy = h0[1] - ph[1];
      if(m.length === 2){ var f = Math.max(.05, ((pp[0] - ph[0]) * vx + (pp[1] - ph[1]) * vy) / (vx * vx + vy * vy)); sx = sy = f; if(e.altKey){ sx = Math.max(.05, (pp[0] - ph[0]) / vx); sy = Math.max(.05, (pp[1] - ph[1]) / vy); } }
      else if(m === 'n' || m === 's') sy = Math.max(.05, (pp[1] - ph[1]) / vy); else sx = Math.max(.05, (pp[0] - ph[0]) / vx);
      fs = Math.sqrt(sx * sy); T = function(q){ return [ph[0] + (q[0] - ph[0]) * sx, ph[1] + (q[1] - ph[1]) * sy]; };
    }
    aplicaT(c, g, T, fs);
  }
  function selecUp(c, e){
    var g = gest; gest = null; if(!g) return;
    if(g.modo === 'marq'){
      var x0 = Math.min(g.ini[0], g.cur[0]), x1 = Math.max(g.ini[0], g.cur[0]), y0 = Math.min(g.ini[1], g.cur[1]), y1 = Math.max(g.ini[1], g.cur[1]);
      if(x1 - x0 > 6 || y1 - y0 > 6){ var ach = dado(idx()).filter(function(s){ return s.l === c.id && amostras(c, s).some(function(q){ return q[0] >= x0 && q[0] <= x1 && q[1] >= y0 && q[1] <= y1; }); }); if(ach.length){ selecionaTudo(c, ach); return; } }
      render(c); return;
    }
    if(g.modo === 'curv' || g.marcado) salvar(); atualizaBotoes(); mostraChips(); render(c);
  }
  function duplicar(){ var S = estado.sel; if(!S) return; marca(); var l = dado(idx()), cp = S.it.map(function(s){ var n = clone(s); desloca(n, .02, .02); l.push(n); return n; }); salvar(); selecionaTudo(S.c, cp); atualizaBotoes(); }
  function excluir(){ var S = estado.sel; if(!S) return; marca(); var l = dado(idx()); S.it.forEach(function(s){ var k = l.indexOf(s); if(k >= 0) l.splice(k, 1); }); var c = S.c; desmarca(); render(c); salvar(); atualizaBotoes(); }

  // endireitar: desenrola o traço mantendo o comprimento (cada trecho vira reta aos poucos)
  function endireitar(c, items){
    var lista = items.filter(function(s){ return s.t !== 'l' && s.t !== 'a' && s.t !== 'm' && polilinha(c, s); });
    if(!lista.length){ dica('Selecione um traço curvo, um círculo ou um polígono'); return; }
    marca(); animando = true; escondeChips();
    var dados = lista.map(function(s){
      var pl = polilinha(c, s), n = Math.max(40, Math.min(260, Math.round(comprimento(pl) / 3))), r = reamostra(pl, n), fi = [], i, h, ant = 0;
      for(i = 0; i < n - 1; i++){ h = Math.atan2(r.pts[i + 1][1] - r.pts[i][1], r.pts[i + 1][0] - r.pts[i][0]); if(i){ while(h - ant > Math.PI) h -= 2 * Math.PI; while(h - ant < -Math.PI) h += 2 * Math.PI; } fi.push(h); ant = h; }
      var raio = s.t === 'k' ? Math.hypot(P(c, s.p[1])[0] - P(c, s.p[0])[0], P(c, s.p[1])[1] - P(c, s.p[0])[1]) : (s.rad ? s.rad * c.w : 0);
      delete s.p; s.t = 'p'; return { s: s, P0: r.pts[0], fi: fi, l: r.L / (n - 1), L: r.L, raio: raio };
    });
    var t0 = performance.now(), S = estado.sel;
    (function passo(agora){
      var t = Math.min(1, (agora - t0) / 1200), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      dados.forEach(function(d){ var x = d.P0[0], y = d.P0[1], pts = [toNorm(c, [x, y])], i, h; for(i = 0; i < d.fi.length; i++){ h = d.fi[0] + (1 - e) * (d.fi[i] - d.fi[0]); x += d.l * Math.cos(h); y += d.l * Math.sin(h); pts.push(toNorm(c, [x, y])); } d.s.pts = pts; });
      if(S) S.box = caixa(c, S.it); render(c);
      if(t < 1){ requestAnimationFrame(passo); return; }
      dados.forEach(function(d){ var s = d.s, a = s.pts[0], b = s.pts[s.pts.length - 1]; s.t = 'l'; s.p = [a, b]; delete s.pts; });
      animando = false; if(S) S.box = caixa(c, S.it); salvar(); atualizaBotoes(); render(c); mostraChips();
      var d0 = dados[0], msg = 'Mesmo comprimento: ' + fmtN(d0.L / uC(c), 1) + ' cm'; if(d0.raio) msg += ' = ' + fmtN(d0.L / d0.raio, 2) + ' × o raio' + (Math.abs(d0.L / d0.raio - 6.2832) < .05 ? ' (2π)' : '');
      dica(msg);
    })(t0);
  }
  // curvar: dobra uma reta em arco (comprimento constante) e mostra o ângulo central em rad
  function iniciaCurv(c, s){
    var pl = polilinha(c, s); if(!pl) return; var r = reamostra(pl, 120), L = r.L, a = r.pts[0], b = r.pts[119], ch = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if(L < 20) return; if(ch / L < .95){ dica('Endireite primeiro (↔) e depois curve'); return; }
    curv = { s: s, c: c, P0: a, L: L, phi: Math.atan2(b[1] - a[1], b[0] - a[0]), k: 0, end: b, rot: '', marcado: false, ang: 0 };
    mostraChips(); dica('Arraste a bolinha laranja: a linha dobra sem mudar de tamanho'); render(c);
  }
  function curvFim(cv, k){ if(Math.abs(k) < 1e-9) return [cv.P0[0] + Math.cos(cv.phi) * cv.L, cv.P0[1] + Math.sin(cv.phi) * cv.L]; return [cv.P0[0] + (Math.sin(cv.phi + k * cv.L) - Math.sin(cv.phi)) / k, cv.P0[1] + (-Math.cos(cv.phi + k * cv.L) + Math.cos(cv.phi)) / k]; }
  function curvAplica(k){
    var cv = curv, N = 120, pts = [], j, sj, x, y; if(!cv) return;
    if(!cv.marcado && k !== 0){ marca(); cv.marcado = true; }
    for(j = 0; j <= N; j++){ sj = cv.L * j / N; if(Math.abs(k) < 1e-9){ x = cv.P0[0] + Math.cos(cv.phi) * sj; y = cv.P0[1] + Math.sin(cv.phi) * sj; } else { x = cv.P0[0] + (Math.sin(cv.phi + k * sj) - Math.sin(cv.phi)) / k; y = cv.P0[1] + (-Math.cos(cv.phi + k * sj) + Math.cos(cv.phi)) / k; } pts.push(toNorm(cv.c, [x, y])); }
    var s = cv.s; s.t = 'p'; delete s.p; s.pts = pts; cv.k = k; cv.end = curvFim(cv, k); cv.rot = '';
    var th = Math.abs(k) * cv.L; Object.keys(TXTR).forEach(function(t){ if(Math.abs(th - +t) < .002) cv.rot = TXTR[t]; });
    estado.sel.box = caixa(cv.c, estado.sel.it); render(cv.c);
  }
  function curvMove(c, pp){
    var cv = curv, K = 2 * Math.PI / cv.L, N = 480, best = 0, bd = 1e18, j, k, E, d;
    for(j = -N; j <= N; j++){ k = K * j / N; E = curvFim(cv, k); d = Math.hypot(E[0] - pp[0], E[1] - pp[1]); if(d < bd){ bd = d; best = k; } }
    var th = Math.abs(best) * cv.L, sg = best < 0 ? -1 : 1;
    Object.keys(TXTR).forEach(function(t){ if(Math.abs(th - +t) < .05) best = sg * (+t) / cv.L; });
    curvAplica(best);
  }
  function fimCurv(){ curv = null; var S = estado.sel; if(S){ S.box = caixa(S.c, S.it); render(S.c); } salvar(); atualizaBotoes(); mostraChips(); }
  function umRad(c, k){
    marca(); var a = P(c, k.p[0]), b = P(c, k.p[1]), r = Math.hypot(b[0] - a[0], b[1] - a[1]), t0 = Math.atan2(b[1] - a[1], b[0] - a[0]), n = 36, pts = [], j, cor = '#dc2626', l = dado(idx()), esp = estado.esp, tm = t0 - .5;
    for(j = 0; j <= n; j++){ var t = t0 - j / n; pts.push(toNorm(c, [a[0] + r * Math.cos(t), a[1] + r * Math.sin(t)])); }
    var arco = { l: c.id, t: 'p', c: cor, w: esp + 2, d: 0, pts: pts, rad: r / c.w };
    function raio(t){ return { l: c.id, t: 'l', c: cor, w: Math.max(2, esp), d: 0, p: [toNorm(c, a), toNorm(c, [a[0] + r * Math.cos(t), a[1] + r * Math.sin(t)])] }; }
    function txt(s, rr, z){ return { l: c.id, t: 'x', c: cor, w: 2, d: 0, s: s, z: z, p: [toNorm(c, [a[0] + rr * Math.cos(tm) - s.length * z * .28, a[1] + rr * Math.sin(tm) + z * .35])] }; }
    l.push(raio(t0), raio(t0 - 1), arco, txt('1 rad', r * .5, 20), txt('arco = raio', r * 1.18, 16));
    salvar(); atualizaBotoes(); selecionaTudo(c, [arco]); dica('Agora ↔ Endireitar: o arco vira uma reta do tamanho do raio');
  }
  function desenhaSel(c){
    var S = estado.sel, cx = c.cx, g = gest, i;
    cx.save();
    if(S && S.c === c){
      var b = S.box, H = alcasDe(b), k; cx.strokeStyle = '#2563eb'; cx.lineWidth = 1.5; cx.setLineDash([6, 4]); cx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0); cx.setLineDash([]);
      if(!curv && !animando){ cx.beginPath(); cx.moveTo(H.n[0], H.n[1]); cx.lineTo(H.rot[0], H.rot[1]); cx.stroke();
        for(k in H){ cx.beginPath(); if(k === 'rot') cx.arc(H[k][0], H[k][1], 8, 0, 6.3); else cx.rect(H[k][0] - 5, H[k][1] - 5, 10, 10); cx.fillStyle = '#fff'; cx.fill(); cx.stroke(); }
        cx.fillStyle = '#2563eb'; cx.font = '800 11px Arial'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('↻', H.rot[0], H.rot[1] + 1); }
    }
    if(g && g.modo === 'marq' && g.c === c){ cx.fillStyle = 'rgba(37,99,235,.10)'; cx.strokeStyle = '#2563eb'; cx.setLineDash([5, 4]); cx.lineWidth = 1.5; cx.fillRect(g.ini[0], g.ini[1], g.cur[0] - g.ini[0], g.cur[1] - g.ini[1]); cx.strokeRect(g.ini[0], g.ini[1], g.cur[0] - g.ini[0], g.cur[1] - g.ini[1]); cx.setLineDash([]); }
    if(curv && curv.c === c){
      var e = curv.end; cx.beginPath(); cx.arc(e[0], e[1], 10, 0, 6.3); cx.fillStyle = '#f97316'; cx.fill(); cx.strokeStyle = '#fff'; cx.lineWidth = 2.5; cx.stroke();
      var th = Math.abs(curv.k) * curv.L, lin = th < 1e-6 ? ['reta (θ = 0)'] : ['θ = ' + fmtN(th, 2) + ' rad ≈ ' + fmtN(th * 180 / Math.PI, 1) + '°' + (curv.rot ? '  ✔ ' + curv.rot : ''), 'arco = R · θ  ·  R = ' + fmtN(1 / Math.abs(curv.k) / uC(c), 1) + ' cm  ·  arco = ' + fmtN(curv.L / uC(c), 1) + ' cm'];
      var tx0 = Math.max(150, Math.min(c.w - 150, e[0])), ty0 = e[1] > c.h - 70 ? e[1] - 56 : e[1] + 26; cx.font = '800 14px Archivo,Arial,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.lineWidth = 4; cx.strokeStyle = c.id === 'b' && estado.escura ? '#1e3a2f' : (getComputedStyle(R).getPropertyValue('--surface').trim() || '#fff'); cx.fillStyle = corReal('auto', c);
      for(i = 0; i < lin.length; i++){ cx.strokeText(lin[i], tx0, ty0 + i * 20); cx.fillText(lin[i], tx0, ty0 + i * 20); }
    }
    cx.restore();
  }

  function aoPressionar(c, e){
    if(animando) return;
    if(e.pointerType === 'touch' && Date.now() - ultimoPen < 1500) return; // rejeição de palma
    if(e.pointerType === 'pen') ultimoPen = Date.now();
    var f = estado.ferr; if(f === 'mao') return;
    if(f === 'laser' || f === 'foco') return;
    if(e.button > 0) return;
    try{ c.cv.setPointerCapture(e.pointerId); }catch(x){}
    e.preventDefault();
    var pp = pxy(c, e), hd = pegaHandle(c, pp), lock = null, ini = null;
    if(hd){ iniciaArrasto(c, e, hd); arrasto.modo = 'rot'; return; }
    if(SNAP[f]) lock = acharBorda(c, pp, 12);
    if(!lock && GRAB[f]){ var cp = pegaCorpo(c, pp); if(cp){ iniciaArrasto(c, e, cp); arrasto.modo = 'move'; renderTudo(); return; } }
    if(lock) ini = toNorm(c, lock.q); else if(f === 'compasso' || f === 'angulo') ini = nrmS(c, e); else ini = norm(c, e);
    ativoPtr = { c: c, id: e.pointerId, ini: ini, f: f, pts: [ini], lock: lock };
    if(f === 'borracha'){ apagaEm(c, e); return; }
    if(f === 'texto'){ ativoPtr = null; criaTexto(c, e); return; }
    if(f === 'carimbo'){ ativoPtr = null; var sm = CAR[estado.carimbo % CAR.length], z = 28 + estado.esp * 4; confirma(c, novoTraco(c, { t: 'x', c: estado.cor === 'auto' ? CARCOR[sm] : estado.cor, p: [[norm(c, e)[0] - z * .4 / c.w, norm(c, e)[1] + z * .35 / c.h]], s: sm, z: z })); return; }
    if(f === 'selec'){ ativoPtr = null; selecPress(c, e, pp); return; }
    if(f === 'angulo'){
      if(!angPts){ angPts = [nrmS(c, e)]; } else { angPts.push(nrmS(c, e)); }
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
    if(arrasto && arrasto.id === e.pointerId){ moveArrasto(arrasto.c, e); return; }
    if(gest && gest.id === e.pointerId){ selecMove(gest.c, e); return; }
    if(f === 'angulo' && angPts && angPts.length >= 1){ var tmp = angPts.concat([norm(c, e)]); if(tmp.length === 2) tmp.push(tmp[1]); c.prev = novoTraco(c, { t: 'g', p: tmp.slice(0, 3) }); if(angPts.length === 1){ c.prev = novoTraco(c, { t: 'l', p: [angPts[0], norm(c, e)] }); } render(c); return; }
    if(!ativoPtr || ativoPtr.id !== e.pointerId || ativoPtr.c !== c) return;
    var q = ativoPtr.lock ? toNorm(c, projBorda(ativoPtr.lock, pxy(c, e))) : norm(c, e);
    if(f === 'borracha'){ apagaEm(c, e); return; }
    if(f === 'caneta' || f === 'marca'){
      var u = ativoPtr.pts[ativoPtr.pts.length - 1]; if(Math.hypot((q[0] - u[0]) * c.w, (q[1] - u[1]) * c.h) < 1.2) return;
      ativoPtr.pts.push(q); render(c); return;
    }
    if(FORMAS[f]){
      var ini = ativoPtr.ini, fim = q;
      if(e.shiftKey && (f === 'ret' || f === 'circ' || f === 'tri')){ var dx = (fim[0] - ini[0]) * c.w, dy = (fim[1] - ini[1]) * c.h, m = Math.max(Math.abs(dx), Math.abs(dy)); fim = [ini[0] + Math.sign(dx || 1) * m / c.w, ini[1] + Math.sign(dy || 1) * m / c.h]; }
      if(e.shiftKey && !ativoPtr.lock && (f === 'reta' || f === 'seta' || f === 'medir')){ var ddx = (fim[0] - ini[0]) * c.w, ddy = (fim[1] - ini[1]) * c.h; if(Math.abs(ddx) > Math.abs(ddy)) fim = [fim[0], ini[1]]; else fim = [ini[0], fim[1]]; }
      c.prev = novoTraco(c, { t: FORMAS[f], p: [ini, fim] }); render(c);
    }
    if(f === 'cobrir'){ c.prev = { l: c.id, t: 'c', c: '#1f2937', w: 1, p: [ativoPtr.ini, q] }; render(c); }
  }
  function aoSoltar(c, e){
    if(arrasto && arrasto.id === e.pointerId){ arrasto = null; return; }
    if(gest && gest.id === e.pointerId){ selecUp(gest.c, e); return; }
    if(!ativoPtr || ativoPtr.id !== e.pointerId) return;
    var f = ativoPtr.f, ap = ativoPtr; ativoPtr = null;
    if(f === 'caneta' || f === 'marca'){ var s = c.prev; c.prev = null; if(s) confirma(c, s); }
    else if(FORMAS[f] || f === 'cobrir'){ var t = c.prev; c.prev = null; if(t){ var p = t.p, dx = Math.abs(p[1][0] - p[0][0]) * c.w, dy = Math.abs(p[1][1] - p[0][1]) * c.h; if(dx + dy > 4) confirma(c, t); else render(c); } }
  }

  // texto
  function criaTexto(c, e){
    var r = c.cv.getBoundingClientRect(), host = c.host, hr = host.getBoundingClientRect();
    var ent = el('textarea', 'qd-txt'); ent.rows = 1; ent.style.left = (e.clientX - hr.left) + 'px'; ent.style.top = (e.clientY - hr.top - 14) + 'px';
    ent.style.color = corReal(estado.cor, c); ent.setAttribute('aria-label', 'Texto na lousa'); ent.placeholder = 'digite…';
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
    cv.addEventListener('wheel', function(e){ // roda do mouse sobre um instrumento = girar (Shift = fino)
      if(!estado.aberto || estado.ferr === 'mao' || !estado.inst.length) return; var pp = pxy(c, e), it = pegaHandle(c, pp) || pegaCorpo(c, pp); if(!it) return;
      e.preventDefault(); it.a += (e.deltaY > 0 ? 1 : -1) * (e.shiftKey ? 1 : 5) * Math.PI / 180; estado.ult = it; render(c);
    }, { passive: false });
  }
  camadas.forEach(liga);

  // ---------- quadro lateral ----------
  function posicionaQuadro(){
    if(!estado.lado || !app){ return; }
    if(estado.lado === 'tudo'){ board.style.zIndex = 60; board.style.left = stage.offsetLeft + 'px'; board.style.right = 'auto'; board.style.top = stage.offsetTop + 'px'; board.style.width = stage.offsetWidth + 'px'; board.style.height = Math.max(120, stage.offsetHeight - 64) + 'px'; return; }
    board.style.zIndex = '';
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
    if(lado === 'tudo'){ stage.style.width = ''; stage.style.marginLeft = ''; stage.style.marginRight = ''; }
    else { stage.style.width = '75%'; stage.style.marginLeft = lado === 'esq' ? 'auto' : '0'; stage.style.marginRight = lado === 'dir' ? 'auto' : '0'; }
    aplicaEscura();
    posicionaQuadro(); setTimeout(function(){ posicionaQuadro(); renderTudo(); }, 380);
    if(W.ResizeObserver && !abreQuadro.ro){ abreQuadro.ro = new ResizeObserver(function(){ posicionaQuadro(); renderTudo(); }); abreQuadro.ro.observe(stage); }
    atualizaBotoes(); renderTudo();
  }
  function fechaQuadro(){
    estado.lado = null; board.classList.remove('on'); stage.style.width = ''; stage.style.marginLeft = ''; stage.style.marginRight = '';
    setTimeout(function(){ stage.classList.remove('qd-stage-anim'); renderTudo(); }, 380); atualizaBotoes(); renderTudo();
  }
  function alternaLado(l){ if(estado.lado === l) fechaQuadro(); else abreQuadro(l); }
  function aplicaEscura(){ board.style.background = estado.escura ? '#1e3a2f' : ''; board.style.borderColor = estado.escura ? '#0f2a20' : ''; var lb = board.querySelector('.qd-lbl'); if(lb) lb.style.color = estado.escura ? '#b7d3c4' : ''; }
  function carregaMod(glob, arq, nome){ // módulos opcionais carregados só quando usados
    if(W[glob]){ W[glob].alternar(); return; }
    var s = D.createElement('script'); s.src = (SRC || (D.getElementById('ferramentas') || {}).src || '').replace(/(quadro|ferramentas)\.js.*$/, arq); s.onload = function(){ if(W[glob]) W[glob].alternar(); }; s.onerror = function(){ dica('Não foi possível abrir ' + nome + ' agora.'); };
    (D.head || R).appendChild(s);
  }
  function inserir(lista){ // insere traços prontos (coordenadas em unidades, centradas) no centro da camada e os seleciona
    if(!estado.aberto) abre();
    var c = estado.lado === 'tudo' ? cb : cs, k = Math.max(.55, Math.min(1.6, Math.min(c.w / 1100, c.h / 650))) * 1.2, ox = c.w / 2, oy = c.h / 2, novos = [], l;
    function cv(p){ return [(ox + p[0] * k) / c.w, (oy + p[1] * k) / c.h]; }
    marca(); l = dado(idx());
    lista.forEach(function(d){ var s = { l: c.id, c: d.c || estado.cor, w: d.w || estado.esp, d: d.d ? 1 : 0, t: d.t }; if(d.f) s.f = d.f; if(d.p) s.p = d.p.map(cv); if(d.pts) s.pts = d.pts.map(cv); if(d.t === 'x'){ s.s = d.s; s.z = Math.round(d.z * k); } l.push(s); novos.push(s); });
    salvar(); ferr('selec'); selecionaTudo(c, novos); atualizaBotoes(); dica('Figura inserida: arraste, redimensione ou gire; escreva por cima');
  }
  function carregaFig(){ carregaMod('EduFiguras', 'figuras-apoio.js', 'as figuras'); }
  function carregaCalc(){ carregaMod('EduCalc', 'calculadora.js', 'a calculadora'); }
  function carregaGraf(){ carregaMod('EduGraficos', 'graficos.js', 'os gráficos'); }

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
  function grupo(t){ grade.appendChild(el('div', 'qd-gt', t)); }
  function ferrBtn(f){ btn(f[0], f[1], f[2], function(){ ferr(f[0]); }); }
  grupo('Desenhar');
  [['mao', '🖱', 'Interagir com o slide (as anotações ficam visíveis) — 0'], ['caneta', '✏️', 'Caneta — 1 (junto a uma régua/esquadro, risca reto)'], ['marca', '🖍', 'Marca-texto — 2'],
   ['borracha', '🧽', 'Borracha (apaga o traço tocado) — 3'], ['texto', '𝗧', 'Texto — 4']].forEach(ferrBtn);
  btn('carimbo', CAR[0], 'Carimbo ✔ ✘ ★ ? ! (clique de novo para trocar o símbolo) — 8', function(){ if(estado.ferr === 'carimbo'){ estado.carimbo = (estado.carimbo + 1) % CAR.length; botoes.carimbo.textContent = CAR[estado.carimbo]; dica('Carimbo: ' + CAR[estado.carimbo]); } else ferr('carimbo'); });
  ferrBtn(['selec', '⬚', 'Selecionar: mover, redimensionar, girar, endireitar curvas e curvar retas — V']);
  grupo('Formas');
  [['reta', '╱', 'Reta (Shift = horizontal/vertical)'], ['seta', '➚', 'Seta'], ['ret', '▭', 'Retângulo (Shift = quadrado)'], ['circ', '◯', 'Círculo/elipse (Shift = círculo)'], ['tri', '△', 'Triângulo'],
   ['angulo', '∠', 'Ângulo: 3 cliques (vértice, 1ª e 2ª semirreta) — mostra a medida (gruda no centro do transferidor)'], ['compasso', '⊙', 'Compasso: centro e raio (mostra o raio em cm) — 9'], ['medir', '↔', 'Medir um segmento: mostra o comprimento em cm']].forEach(ferrBtn);
  btn('tracejado', '┅', 'Traço tracejado (liga/desliga)', function(){ estado.tracejado = estado.tracejado ? 0 : 1; atualizaBotoes(); dica(estado.tracejado ? 'Traço tracejado ligado' : 'Traço contínuo'); });
  grupo('Instrumentos');
  [['regua', '📏', 'Régua de 15 cm (arraste, gire pela alça ↻ ou roda do mouse; risque junto à borda) — R'], ['esq45', '◺', 'Esquadro 45° (90°-45°-45°)'], ['esq60', '◿', 'Esquadro 60° (90°-60°-30°)'], ['transf', '◔', 'Transferidor 180° (o centro vermelho gruda o vértice do ângulo)']].forEach(function(f){ btn('i-' + f[0], f[1], f[2], function(){ alternaInst(f[0]); }); });
  btn('malha', '#', 'Malha sobre o slide: quadriculada → pontilhada → eixos numerados → nenhuma', function(){ estado.malha = (estado.malha + 1) % 4; dica('Malha: ' + ['nenhuma', 'quadriculada', 'pontilhada', 'eixos cartesianos numerados'][estado.malha]); renderTudo(); atualizaBotoes(); });
  btn('calc', '🧮', 'Calculadora científica — K', function(){ carregaCalc(); });
  btn('fig', '🧩', 'Figuras de apoio: sólidos, círculo trigonométrico, reta numérica, plano cartesiano… — I', function(){ carregaFig(); });
  btn('graf', 'ƒ', 'Gráficos de funções: digite y = x² − 4x + 3, use a, b, c deslizantes — G', function(){ carregaGraf(); });
  grupo('Apresentar');
  [['laser', '🔴', 'Laser — 5'], ['foco', '🔦', 'Holofote — 6'], ['cobrir', '⬛', 'Cobrir uma área (revele com a borracha) — 7']].forEach(ferrBtn);
  grupo('Cor e espessura');
  Object.keys(COR).forEach(function(k){ var b = btn('c-' + k, '', 'Cor: ' + k, function(){ estado.cor = k; if(['mao', 'laser', 'foco', 'borracha', 'cobrir', 'selec'].indexOf(estado.ferr) >= 0) ferr('caneta'); atualizaBotoes(); }, 'qd-cor'); b.style.background = k === 'auto' ? 'linear-gradient(135deg,#111 50%,#fff 50%)' : COR[k]; });
  [2, 4, 8].forEach(function(n){ var b = btn('e-' + n, '<i style="height:' + n + 'px"></i>', 'Espessura ' + n, function(){ estado.esp = n; atualizaBotoes(); }, 'qd-esp'); });
  grupo('Ações');
  btn('desfazer', '↶', 'Desfazer (Ctrl+Z)', function(){ desfazer(); });
  btn('refazer', '↷', 'Refazer (Ctrl+Y)', function(){ refazer(); });
  btn('limpar', '🗑', 'Limpar este slide (anotações e quadro)', function(){ limpar(); });
  btn('voto', '📊', 'Votação rápida A–E (conte as mãos levantadas)', function(){ votacao(); });
  btn('png', '💾', 'Salvar as anotações como imagem', function(){ salvaPng(); });
  grupo('Quadro');
  btn('qesq', '◧', 'Quadro lateral à esquerda (1/4 da largura)', function(){ alternaLado('esq'); });
  btn('qdir', '◨', 'Quadro lateral à direita (1/4 da largura)', function(){ alternaLado('dir'); });
  btn('lousa', '▣', 'Lousa cheia: um quadro em branco no lugar do slide (volte pelo mesmo botão)', function(){ alternaLado('tudo'); });
  btn('escura', '🌑', 'Lousa escura (giz): liga/desliga', function(){ estado.escura = estado.escura ? 0 : 1; aplicaEscura(); renderTudo(); atualizaBotoes(); if(!estado.lado) abreQuadro('tudo'); });
  btn('fundo', '▦', 'Fundo do quadro (branco, quadriculado, pontilhado, eixos, pautado)', function(){ estado.fundo = (estado.fundo + 1) % FUNDOS.length; dica('Fundo do quadro: ' + FUNDOS[estado.fundo]); renderTudo(); if(!estado.lado) abreQuadro('dir'); });
  btn('fechar', '✕', 'Fechar a caneta (as anotações ficam guardadas) — D', function(){ fecha(); });

  function atualizaBotoes(){
    Object.keys(botoes).forEach(function(k){
      var b = botoes[k], on = false;
      if(k === estado.ferr) on = true;
      if(k.indexOf('c-') === 0 && k.slice(2) === estado.cor) on = true;
      if(k.indexOf('e-') === 0 && k !== 'e-x' && +k.slice(2) === estado.esp) on = true;
      if(k === 'qesq' && estado.lado === 'esq') on = true; if(k === 'qdir' && estado.lado === 'dir') on = true; if(k === 'lousa' && estado.lado === 'tudo') on = true;
      if(k.indexOf('i-') === 0) on = estado.inst.some(function(it){ return it.id === k.slice(2); });
      if(k === 'tracejado') on = !!estado.tracejado; if(k === 'malha') on = !!estado.malha; if(k === 'escura') on = !!estado.escura;
      b.classList.toggle('sel', on);
    });
    var i = idx(); botoes.desfazer.disabled = !und(i).length; botoes.refazer.disabled = !red(i).length;
  }
  function ferr(f){
    estado.ferr = f; angPts = null; foco = null; if(f !== 'selec') desmarca(); camadas.forEach(function(c){ c.prev = null; c.fx = f === 'foco' ? fxFoco : null; });
    camadas.forEach(function(c){ c.cv.classList.toggle('mao', f === 'mao'); c.cv.classList.toggle('ativo', f !== 'mao'); c.cv.classList.toggle('sem-cursor', f === 'laser' || f === 'foco'); });
    atualizaBotoes(); renderTudo();
    if(f === 'foco') dica('Holofote: mova o ponteiro'); else if(f === 'laser') dica('Laser: mova o ponteiro'); else if(f === 'angulo') dica('Clique no vértice do ângulo'); else if(f === 'compasso') dica('Compasso: clique no centro e arraste até o raio'); else if(f === 'medir') dica('Medir: arraste entre dois pontos (mostra cm)'); else if(f === 'selec') dica('Selecionar: clique num traço ou arraste uma caixa; use as alças para redimensionar e girar'); else if(f === 'carimbo') dica('Carimbo ' + CAR[estado.carimbo % CAR.length] + ' — clique de novo no botão para trocar');
  }
  function desfazer(){ var i = idx(), p = und(i); if(!p.length || animando) return; red(i).push(JSON.stringify(dado(i))); estado.dados[i] = JSON.parse(p.pop()); desmarca(); renderTudo(); salvar(); atualizaBotoes(); }
  function refazer(){ var i = idx(), p = red(i); if(!p.length || animando) return; und(i).push(JSON.stringify(dado(i))); estado.dados[i] = JSON.parse(p.pop()); desmarca(); renderTudo(); salvar(); atualizaBotoes(); }
  function limpar(){ var i = idx(); if(!dado(i).length){ dica('Este slide já está limpo'); return; } marca(); estado.dados[i] = []; desmarca(); renderTudo(); salvar(); atualizaBotoes(); dica('Slide limpo — use ↷ para voltar'); }
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
    var mapa = { '0': 'mao', '1': 'caneta', '2': 'marca', '3': 'borracha', '4': 'texto', '5': 'laser', '6': 'foco', '7': 'cobrir', '8': 'carimbo', '9': 'compasso', 'v': 'selec' };
    if(mapa[k]){ e.preventDefault(); e.stopPropagation(); ferr(mapa[k]); return; }
    if(k === 'r'){ e.preventDefault(); e.stopPropagation(); alternaInst('regua'); return; }
    if(k === 'k'){ e.preventDefault(); e.stopPropagation(); carregaCalc(); return; }
    if(k === 'g'){ e.preventDefault(); e.stopPropagation(); carregaGraf(); return; }
    if(k === 'i'){ e.preventDefault(); e.stopPropagation(); carregaFig(); return; }
    if((k === '[' || k === ']') && estado.inst.length){ e.preventDefault(); e.stopPropagation(); var iu = estado.ult && estado.inst.indexOf(estado.ult) >= 0 ? estado.ult : estado.inst[estado.inst.length - 1]; iu.a += (k === ']' ? 1 : -1) * (e.shiftKey ? 1 : 5) * Math.PI / 180; renderTudo(); return; }
    if(k === 'd'){ e.preventDefault(); e.stopPropagation(); fecha(); return; }
    if((k === 'delete' || k === 'backspace') && estado.ferr === 'selec' && estado.sel && !curv){ e.preventDefault(); e.stopPropagation(); excluir(); return; }
    if(k === 'escape'){ if(curv){ fimCurv(); return; } if(estado.sel){ var cc = estado.sel.c; desmarca(); render(cc); return; } ferr('mao'); }
  }, true);

  var ultimo = -1;
  setInterval(function(){ var i = idx(); if(i !== ultimo){ ultimo = i; angPts = null; foco = null; if(estado.sel || curv) desmarca(); camadas.forEach(function(c){ c.prev = null; }); renderTudo(); if(estado.aberto) atualizaBotoes(); } }, 200);
  W.addEventListener('resize', function(){ posicionaQuadro(); renderTudo(); });
  new MutationObserver(function(){ renderTudo(); }).observe(R, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  ferr('mao'); camadas.forEach(function(c){ c.cv.classList.add('mao'); }); setTimeout(renderTudo, 50);

  W.EduQuadro = { inserir: inserir, abrir: abre, fechar: fecha, alternar: alterna, aberto: function(){ return estado.aberto; } };
})();
