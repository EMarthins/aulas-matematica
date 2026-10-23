/* Figuras de apoio prontas para a caneta (carregado sob demanda por app/quadro.js: botão 🧩 ou tecla I).
   Cada figura é gerada como traços da própria caneta — depois de inserida fica selecionada e pode ser movida,
   redimensionada, girada, duplicada ou apagada, e dá para escrever por cima. Nada sai do aparelho. */
(function(){
  if(window.EduFiguras) return;
  var D = document, W = window, R = D.documentElement;
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }

  // ---------- construtores (unidades: ~±150 em torno do centro; y para baixo) ----------
  function L(x1, y1, x2, y2, o){ o = o || {}; return { t: o.seta ? 'a' : 'l', p: [[x1, y1], [x2, y2]], d: o.d, c: o.c, w: o.w }; }
  function Q(pts, o){ o = o || {}; var p = pts.slice(); if(o.fecha) p.push(pts[0]); return { t: 'q', pts: p, d: o.d, c: o.c, w: o.w, f: o.f }; }
  function Arco(cx, cy, rx, ry, a0, a1, o){ var n = Math.max(8, Math.round(Math.abs(a1 - a0) / 6)), p = [], i, t; for(i = 0; i <= n; i++){ t = (a0 + (a1 - a0) * i / n) * Math.PI / 180; p.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]); } return Q(p, o); }
  function Circ(cx, cy, r, o){ o = o || {}; return { t: 'o', p: [[cx - r, cy - r], [cx + r, cy + r]], c: o.c, w: o.w, d: o.d }; }
  function Ret(x0, y0, x1, y1, o){ o = o || {}; return { t: 'r', p: [[x0, y0], [x1, y1]], c: o.c, w: o.w, d: o.d }; }
  function Txt(s, x, y, z, o){ o = o || {}; return { t: 'x', s: s, z: z || 16, p: [[x - String(s).length * (z || 16) * .3, y + (z || 16) * .33]], c: o.c }; }
  var AZUL = 'rgba(37,99,235,.32)', LARANJA = 'rgba(234,88,12,.32)', VERDE = 'rgba(22,163,74,.30)';

  function caixa(w, h, dx, dy){ // paralelepípedo em perspectiva cavaleira
    var x0 = -w / 2 - dx / 2, y0 = -h / 2 - dy / 2 + 12, x1 = x0 + w, y1 = y0 + h, a = [x0, y0], b = [x1, y0], c = [x1, y1], d = [x0, y1], A = [x0 + dx, y0 + dy], B = [x1 + dx, y0 + dy], C = [x1 + dx, y1 + dy], Dd = [x0 + dx, y1 + dy];
    return [Q([a, b, c, d], { fecha: 1 }), Q([a, A, B, b]), Q([b, B, C, c]), L(d[0], d[1], Dd[0], Dd[1], { d: 1 }), L(Dd[0], Dd[1], C[0], C[1], { d: 1 }), L(A[0], A[1], Dd[0], Dd[1], { d: 1 })];
  }
  function baseElipse(cy, rx, ry){ return [Arco(0, cy, rx, ry, 0, 180), Arco(0, cy, rx, ry, 180, 360, { d: 1 })]; }

  var FIG = [
    { g: 'Sólidos', id: 'cubo', n: 'Cubo', e: '🧊', f: function(){ return caixa(110, 110, 46, -40).concat([Txt('a', -2, 88, 16), Txt('a', 60, 38, 16), Txt('V = a³', -6, -92, 17)]); } },
    { g: 'Sólidos', id: 'para', n: 'Paralelepípedo', e: '📦', f: function(){ return caixa(150, 80, 50, -38).concat([Txt('a', -2, 72, 16), Txt('b', 108, 38, 16), Txt('c', 75, 4, 16), Txt('V = a · b · c', -6, -86, 16)]); } },
    { g: 'Sólidos', id: 'prisma', n: 'Prisma triangular', e: '🔺', f: function(){
      var A = [-60, 50], B = [60, 50], C = [0, -40], dx = 46, dy = -34, A2 = [A[0] + dx, A[1] + dy], B2 = [B[0] + dx, B[1] + dy], C2 = [C[0] + dx, C[1] + dy];
      return [Q([A, B, C], { fecha: 1 }), L(C[0], C[1], C2[0], C2[1]), L(B[0], B[1], B2[0], B2[1]), L(C2[0], C2[1], B2[0], B2[1]), L(A[0], A[1], A2[0], A2[1], { d: 1 }), L(A2[0], A2[1], B2[0], B2[1], { d: 1 }), L(A2[0], A2[1], C2[0], C2[1], { d: 1 })]; } },
    { g: 'Sólidos', id: 'piramide', n: 'Pirâmide', e: '🛖', f: function(){
      var A = [-70, 50], B = [40, 50], C = [80, 10], Dd = [-30, 10], V = [5, -75];
      return [Q([A, B, C]), Q([A, V, B]), L(V[0], V[1], C[0], C[1]), L(B[0], B[1], V[0], V[1]), L(A[0], A[1], Dd[0], Dd[1], { d: 1 }), L(Dd[0], Dd[1], C[0], C[1], { d: 1 }), L(V[0], V[1], Dd[0], Dd[1], { d: 1 }), L(V[0], V[1], 5, 30, { d: 1 }), Txt('h', 16, -22, 16)]; } },
    { g: 'Sólidos', id: 'cilindro', n: 'Cilindro', e: '🥫', f: function(){
      return [{ t: 'o', p: [[-60, -78], [60, -42]] }].concat(baseElipse(60, 60, 18), [L(-60, -60, -60, 60), L(60, -60, 60, 60), L(0, -60, 60, -60, { d: 1 }), L(0, -60, 0, 60, { d: 1 }), Txt('r', 30, -70, 16), Txt('h', -14, 0, 16), Txt('V = π r² h', 0, 100, 16)]); } },
    { g: 'Sólidos', id: 'cone', n: 'Cone', e: '🍦', f: function(){
      return baseElipse(60, 60, 18).concat([L(0, -80, -60, 60), L(0, -80, 60, 60), L(0, -80, 0, 60, { d: 1 }), L(0, 60, 60, 60, { d: 1 }), Txt('h', -12, -10, 16), Txt('r', 30, 74, 16), Txt('g', 44, -12, 16), Txt('V = π r² h / 3', 0, 104, 16)]); } },
    { g: 'Sólidos', id: 'esfera', n: 'Esfera', e: '⚽', f: function(){
      return [Circ(0, 0, 75)].concat(baseElipse(0, 75, 22), [L(0, 0, 75, 0, { d: 1 }), Txt('r', 38, -10, 16), Txt('V = 4π r³ / 3', 0, 108, 16)]); } },

    { g: 'Geometria plana', id: 'tri-ret', n: 'Triângulo retângulo', e: '📐', f: function(){
      var A = [-80, 60], B = [80, 60], C = [-80, -60];
      return [Q([A, B, C], { fecha: 1 }), Q([[A[0], A[1] - 14], [A[0] + 14, A[1] - 14], [A[0] + 14, A[1]]]), Txt('b', 0, 78, 17), Txt('c', -100, 0, 17), Txt('a', 20, -14, 17), Txt('a² = b² + c²', 0, 108, 17)]; } },
    { g: 'Geometria plana', id: 'tri-qq', n: 'Triângulo qualquer', e: '🔻', f: function(){
      var A = [-90, 50], B = [80, 50], C = [-20, -62];
      return [Q([A, B, C], { fecha: 1 }), Txt('A', -104, 62, 18), Txt('B', 96, 62, 18), Txt('C', -20, -82, 18), Txt('c', -4, 70, 16), Txt('a', 38, -16, 16), Txt('b', -64, -10, 16), Txt('Â + B̂ + Ĉ = 180°', -4, 104, 16)]; } },
    { g: 'Geometria plana', id: 'ret', n: 'Retângulo (área e perímetro)', e: '▭', f: function(){
      return [Ret(-80, -45, 80, 45), Txt('b', 0, 64, 17), Txt('h', 98, 0, 17), Txt('A = b · h', 0, 100, 17), Txt('P = 2(b + h)', 0, 128, 17)]; } },
    { g: 'Geometria plana', id: 'circulo', n: 'Círculo (r, d, C, A)', e: '⭕', f: function(){
      return [Circ(0, 0, 75), L(0, 0, 75, 0), L(-75, 0, 0, 0, { d: 1 }), Circ(0, 0, 2.5), Txt('r', 38, -12, 17), Txt('d', -38, -12, 17), Txt('C = 2π r', 0, 108, 17), Txt('A = π r²', 0, 136, 17)]; } },
    { g: 'Geometria plana', id: 'paralelas', n: 'Paralelas e transversal', e: '≡', f: function(){
      var s = [L(-135, -35, 135, -35), L(-135, 35, 135, 35), L(-40, -100, 40, 100), Txt('r', 148, -35, 16), Txt('s', 148, 35, 16), Txt('t', 52, 100, 16)];
      [[-34, -50], [8, -52], [-30, -20], [16, -20], [-6, 24], [36, 22], [-8, 52], [42, 52]].forEach(function(p, i){ s.push(Txt(String(i + 1), p[0], p[1], 15)); }); return s; } },
    { g: 'Geometria plana', id: 'venn', n: 'Diagrama de Venn (A, B)', e: '⚭', f: function(){
      return [Ret(-140, -90, 140, 90), Circ(-35, 0, 62), Circ(35, 0, 62), Txt('A', -70, -4, 20), Txt('B', 70, -4, 20), Txt('A ∩ B', 0, -4, 14), Txt('U', 124, -74, 16)]; } },
    { g: 'Geometria plana', id: 'barra', n: 'Barra de frações (3/4)', e: '▤', f: function(){
      var s = [Q([[-120, -25], [60, -25], [60, 25], [-120, 25]], { fecha: 1, f: AZUL })]; for(var i = 0; i < 4; i++) s.push(Ret(-120 + i * 60, -25, -60 + i * 60, 25)); s.push(Txt('3/4', 0, 56, 18)); return s; } },
    { g: 'Geometria plana', id: 'pizza', n: 'Pizza de frações (3/8)', e: '🍕', f: function(){
      var s = [Q([[0, 0]].concat(Arco(0, 0, 80, 80, -90, -90 + 135).pts, [[0, 0]]), { f: LARANJA }), Circ(0, 0, 80)], i; for(i = 0; i < 8; i++){ var t = (i * 45 - 90) * Math.PI / 180; s.push(L(0, 0, 80 * Math.cos(t), 80 * Math.sin(t))); } s.push(Txt('3/8', 0, 112, 18)); return s; } },

    { g: 'Números e trigonometria', id: 'reta', n: 'Reta numérica', e: '↔️', f: function(){
      var s = [L(-140, 0, 140, 0, { seta: 1 }), L(140, 0, -140, 0, { seta: 1 })], i; for(i = -5; i <= 5; i++){ s.push(L(i * 25, i ? -6 : -10, i * 25, i ? 6 : 10)); s.push(Txt(String(i).replace('-', '−'), i * 25, 26, 14)); } return s; } },
    { g: 'Números e trigonometria', id: 'plano', n: 'Plano cartesiano', e: '➕', f: function(){
      var s = [L(-150, 0, 150, 0, { seta: 1 }), L(0, 150, 0, -150, { seta: 1 }), Txt('x', 146, 16, 16), Txt('y', 12, -142, 16), Txt('O', -10, 12, 12)], i; for(i = -4; i <= 4; i++){ if(!i) continue; s.push(L(i * 30, -4, i * 30, 4)); s.push(Txt(String(i).replace('-', '−'), i * 30, 17, 11)); s.push(L(-4, -i * 30, 4, -i * 30)); s.push(Txt(String(i).replace('-', '−'), -14, -i * 30, 11)); } return s; } },
    { g: 'Números e trigonometria', id: 'trigo', n: 'Círculo trigonométrico', e: '🕒', f: function(){
      var Rr = 105, s = [Circ(0, 0, Rr), L(-132, 0, 132, 0, { seta: 1 }), L(0, 132, 0, -132, { seta: 1 }), Txt('cos', 128, 14, 12), Txt('sen', 18, -126, 12)], RAD = { 0: '0', 30: 'π/6', 45: 'π/4', 60: 'π/3', 90: 'π/2', 120: '2π/3', 135: '3π/4', 150: '5π/6', 180: 'π', 210: '7π/6', 225: '5π/4', 240: '4π/3', 270: '3π/2', 300: '5π/3', 315: '7π/4', 330: '11π/6' };
      Object.keys(RAD).forEach(function(k){ var t = -k * Math.PI / 180, c = Math.cos(t), sn = Math.sin(t); s.push(L((Rr - 5) * c, (Rr - 5) * sn, (Rr + 5) * c, (Rr + 5) * sn)); if(+k % 90) s.push(Txt(RAD[k], (Rr + 24) * c, (Rr + 24) * sn, 11)); s.push(Txt(k + '°', (Rr - 20) * c, (Rr - 20) * sn, 9)); });
      s.push(Txt('0 = 2π', 150, -12, 10), Txt('π/2', 0, -148, 11), Txt('π', -148, 14, 11), Txt('3π/2', 0, 150, 11)); return s; } },
    { g: 'Outros', id: 'tabela', n: 'Tabela 3 × 4', e: '▦', f: function(){
      var s = [], i; for(i = 0; i <= 4; i++) s.push(L(-105, -68 + i * 34, 105, -68 + i * 34)); for(i = 0; i <= 3; i++) s.push(L(-105 + i * 70, -68, -105 + i * 70, 68)); return s; } },
    { g: 'Outros', id: 'tempo', n: 'Linha do tempo', e: '⏳', f: function(){
      var s = [L(-150, 0, 150, 0, { seta: 1 })], i; for(i = 0; i < 5; i++){ var x = -110 + i * 55, cima = i % 2 === 0; s.push(Circ(x, 0, 5)); s.push(L(x, cima ? -6 : 6, x, cima ? -24 : 24)); s.push(Ret(x - 30, cima ? -52 : 24, x + 30, cima ? -24 : 52)); } return s; } },
    { g: 'Outros', id: 'mapa', n: 'Mapa mental', e: '🧠', f: function(){
      var s = [{ t: 'o', p: [[-55, -26], [55, 26]] }], pos = [[-110, -80], [110, -80], [-110, 80], [110, 80]];
      pos.forEach(function(p){ var sx = p[0] < 0 ? -1 : 1, sy = p[1] < 0 ? -1 : 1; s.push(L(sx * 40, sy * 20, p[0] - sx * 34, p[1] - sy * -4)); s.push({ t: 'o', p: [[p[0] - 40, p[1] - 20], [p[0] + 40, p[1] + 20]] }); }); return s; } }
  ];

  // ---------- janela de escolha ----------
  var css = '.fg-w{position:fixed;z-index:99988;left:50%;top:50%;transform:translate(-50%,-50%);width:min(34rem,calc(100vw - 24px));max-height:calc(100vh - 40px);overflow:auto;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:18px;box-shadow:0 26px 54px -18px var(--shadow,rgba(0,0,0,.5));font-family:Archivo,Arial,sans-serif;display:none;padding:12px 14px 14px}' +
    '.fg-w.on{display:block}.fg-h{display:flex;align-items:center;font-weight:800;margin-bottom:6px}.fg-h span{flex:1}.fg-h button{border:0;background:transparent;color:inherit;font-size:1.1rem;cursor:pointer}' +
    '.fg-w h4{margin:10px 0 5px;font-size:.66rem;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-faint,#777)}.fg-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(8.4rem,1fr));gap:6px}' +
    '.fg-g button{display:flex;align-items:center;gap:7px;border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:inherit;border-radius:10px;padding:.5em .6em;cursor:pointer;font:700 .78rem Archivo,Arial,sans-serif;text-align:left}.fg-g button:hover{border-color:var(--primary,#382EAE);background:var(--primary-soft,#eef)}.fg-g b{font-size:1.15rem;font-weight:400}' +
    '.fg-n{font-size:.74rem;color:var(--ink-faint,#777);margin-top:8px}@media print{.fg-w{display:none!important}}';
  var st = el('style'); st.textContent = css; (D.head || R).appendChild(st);
  var w = el('div', 'fg-w'); w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', 'Figuras de apoio'); w.tabIndex = 0;
  w.innerHTML = '<div class="fg-h"><span>🧩 Figuras de apoio</span><button type="button" aria-label="Fechar">✕</button></div>';
  var grupos = {}; FIG.forEach(function(f){ if(!grupos[f.g]){ grupos[f.g] = el('div', 'fg-g'); w.appendChild(el('h4', '', f.g)); w.appendChild(grupos[f.g]); } var b = el('button', '', '<b>' + f.e + '</b><span>' + f.n + '</span>'); b.type = 'button'; b.addEventListener('click', function(){ insere(f); }); grupos[f.g].appendChild(b); });
  w.appendChild(el('div', 'fg-n', 'A figura entra no centro, já selecionada: arraste, redimensione, gire (↻) ou escreva por cima. Usa a cor e a espessura escolhidas.'));
  w.querySelector('.fg-h button').addEventListener('click', function(){ alterna(); });
  w.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Escape') alterna(); });

  function insere(f){
    if(!W.EduQuadro || !W.EduQuadro.inserir){ return; }
    var lista = f.f().filter(Boolean); W.EduQuadro.inserir(lista); alterna();
  }
  function alterna(){ if(!w.parentNode) (D.body || R).appendChild(w); var on = w.classList.toggle('on'); if(on) setTimeout(function(){ try{ w.focus(); }catch(e){} }, 10); }
  W.EduFiguras = { alternar: alterna, lista: FIG };
})();
