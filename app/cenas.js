/* Figuras de abertura ESPECÍFICAS e interativas das aulas mais usadas (as aulas grátis de cada matéria).
   Cada <figure data-cena="id"> da abertura mostra primeiro a ilustração genérica (funciona sem JavaScript) e, ao carregar,
   este arquivo troca por uma cena do assunto da aula que o aluno/professor manipula (controles deslizantes, botões, toques).
   Ligado por scripts/aplicar-cenas.js. As cenas de Humanas/Ciências ficam em app/cenas2.js (carregado só se preciso). */
(function(){
  if(window.EduCenas) return;
  var D = document, W = window;
  var P = 'var(--primary,#382EAE)', G = 'var(--growth,#0f9d6b)', X = 'var(--decay,#d9480f)', INK = 'var(--ink,#111)', F = 'var(--ink-faint,#777)', S2 = 'var(--surface-2,#f1f1f6)', L = 'var(--line-strong,#bbb)', SF = 'var(--surface,#fff)';
  var REG = {};

  // ---------- estilos ----------
  var css = '.ce{width:100%;text-align:left;font-family:Archivo,Arial,sans-serif}' +
    '.ce-s svg{width:100%;height:auto;display:block}' +
    '.ce-s [data-s]{cursor:pointer}.ce-s [data-s]:focus-visible{outline:2px solid ' + P + ';outline-offset:2px}' +
    '.ce-c{display:grid;gap:6px;margin-top:6px}' +
    '.ce-c label{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:.78rem;font-weight:700;color:' + INK + '}' +
    '.ce-c input[type=range]{width:100%;accent-color:' + P + '}' +
    '.ce-c output{font-family:"JetBrains Mono",monospace;font-size:.74rem;min-width:3.2em;text-align:right;color:' + P + '}' +
    '.ce-o{display:flex;flex-wrap:wrap;gap:5px}' +
    '.ce-o button,.ce-b{font:inherit;font-size:.76rem;font-weight:700;border:1.5px solid ' + L + ';background:' + SF + ';color:' + INK + ';border-radius:99px;padding:.32em .8em;cursor:pointer}' +
    '.ce-o button.on{background:' + P + ';border-color:' + P + ';color:var(--primary-ink,#fff)}' +
    '.ce-b:hover,.ce-o button:hover{border-color:' + P + '}' +
    '.ce-r{margin-top:6px;font-size:.82rem;line-height:1.35;background:' + S2 + ';border-radius:10px;padding:.5em .75em;min-height:2.7em}' +
    '.ce-r sup{font-size:.7em}';
  var st = D.createElement('style'); st.textContent = css; (D.head || D.documentElement).appendChild(st);

  // ---------- utilidades ----------
  function h(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }
  function num(v, c){ c = c == null ? 0 : c; return (Math.round(v * Math.pow(10, c)) / Math.pow(10, c)).toFixed(c).replace('.', ','); }
  function sg(v){ return v < 0 ? '−' + Math.abs(v) : String(v); }
  function par(v){ return v < 0 ? '(−' + Math.abs(v) + ')' : String(v); }
  function rad(g){ return g * Math.PI / 180; }
  function svg(w, hh, inner){ return '<svg viewBox="0 0 ' + w + ' ' + hh + '" xmlns="http://www.w3.org/2000/svg" font-family="Archivo,Arial,sans-serif" aria-hidden="true">' + inner + '</svg>'; }
  function tx(x, y, s, o){ o = o || {}; return '<text x="' + x + '" y="' + y + '" font-size="' + (o.z || 12) + '" fill="' + (o.c || INK) + '" text-anchor="' + (o.a || 'middle') + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') + '>' + s + '</text>'; }
  function ln(x1, y1, x2, y2, c, w, extra){ return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || L) + '" stroke-width="' + (w || 1.5) + '" stroke-linecap="round" ' + (extra || '') + '/>'; }
  function clk(k, v, rot){ return 'data-s="' + k + ':' + v + '" role="button" tabindex="0" aria-label="' + rot + '"'; }
  function plot(W_, H_, x0, x1, y0, y1, pad){
    pad = pad == null ? 22 : pad; var sx = (W_ - 2 * pad) / (x1 - x0), sy = (H_ - 2 * pad) / (y1 - y0);
    var o = { X: function(x){ return pad + (x - x0) * sx; }, Y: function(y){ return H_ - pad - (y - y0) * sy; } };
    o.eixos = function(){
      var s = '', i;
      for(i = Math.ceil(x0); i <= x1; i++) s += ln(o.X(i), o.Y(y0), o.X(i), o.Y(y1), S2, 1);
      for(i = Math.ceil(y0); i <= y1; i++) s += ln(o.X(x0), o.Y(i), o.X(x1), o.Y(i), S2, 1);
      if(y0 <= 0 && y1 >= 0) s += ln(o.X(x0), o.Y(0), o.X(x1), o.Y(0), F, 1.5);
      if(x0 <= 0 && x1 >= 0) s += ln(o.X(0), o.Y(y0), o.X(0), o.Y(y1), F, 1.5);
      return s;
    };
    o.curva = function(f, cor, a, b){ var d = '', up = false, N = 160, i, x, y, ok; a = a == null ? x0 : a; b = b == null ? x1 : b;
      for(i = 0; i <= N; i++){ x = a + (b - a) * i / N; y = f(x); ok = y >= y0 - .5 && y <= y1 + .5; if(ok){ d += (up ? 'L' : 'M') + o.X(x).toFixed(1) + ' ' + o.Y(y).toFixed(1); up = true; } else up = false; }
      return '<path d="' + d + '" fill="none" stroke="' + cor + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'; };
    return o;
  }

  // ---------- montagem declarativa ----------
  // c = { alt, leg, est:{}, ctl:[{r:'k',rot,min,max,passo,fmt}|{b:'rótulo',fn(e)}|{o:'k',ops:[[v,rot]]}], svg(e), lei(e) }
  function monta(fig, c){
    var e = {}, k; for(k in c.est) e[k] = c.est[k];
    var box = h('div', 'ce'), sv = h('div', 'ce-s'), cl = h('div', 'ce-c'), rd = h('div', 'ce-r');
    sv.setAttribute('role', 'img'); sv.setAttribute('aria-label', c.alt); rd.setAttribute('aria-live', 'polite');
    var atualiza = [];
    function render(){ sv.innerHTML = c.svg(e); rd.innerHTML = c.lei(e); atualiza.forEach(function(f){ f(); }); }
    (c.ctl || []).forEach(function(t){
      if(t.r){
        var lab = h('label'), sp = h('span', null, t.rot), inp = h('input'), out = h('output');
        inp.type = 'range'; inp.min = t.min; inp.max = t.max; inp.step = t.passo || 1; inp.value = e[t.r]; inp.setAttribute('aria-label', t.rot);
        function fmt(){ out.textContent = t.fmt ? t.fmt(e[t.r]) : e[t.r]; }
        inp.addEventListener('input', function(){ e[t.r] = +inp.value; if(t.ao) t.ao(e); fmt(); render(); });
        atualiza.push(function(){ if(+inp.value !== e[t.r]) inp.value = e[t.r]; if(t.max2){ inp.max = t.max2(e); } fmt(); });
        lab.appendChild(sp); lab.appendChild(inp); lab.appendChild(out); cl.appendChild(lab); fmt();
      } else if(t.b){
        var b = h('button', 'ce-b', t.b); b.type = 'button'; b.addEventListener('click', function(){ t.fn(e); render(); }); cl.appendChild(b);
      } else if(t.o){
        var g = h('div', 'ce-o'), bs = [];
        t.ops.forEach(function(op){ var bb = h('button', null, op[1]); bb.type = 'button'; bb.addEventListener('click', function(){ e[t.o] = op[0]; render(); }); g.appendChild(bb); bs.push([bb, op[0]]); });
        atualiza.push(function(){ bs.forEach(function(p){ p[0].classList.toggle('on', String(p[1]) === String(e[t.o])); }); });
        cl.appendChild(g);
      }
    });
    function toque(ev){ var n = ev.target.closest && ev.target.closest('[data-s]'); if(!n) return; if(ev.type === 'keydown' && ev.key !== 'Enter' && ev.key !== ' ') return; ev.preventDefault();
      var p = n.getAttribute('data-s').split(':'), v = p[1]; e[p[0]] = /^-?\d+(\.\d+)?$/.test(v) ? +v : v; render(); }
    sv.addEventListener('click', toque); sv.addEventListener('keydown', toque);
    box.appendChild(sv); if(cl.children.length) box.appendChild(cl); box.appendChild(rd);
    var cap = fig.querySelector('figcaption'), antigo = [].slice.call(fig.children).filter(function(n){ return n !== cap; });
    antigo.forEach(function(n){ n.remove(); });
    fig.insertBefore(box, cap || null); if(cap) cap.textContent = c.leg || 'Ilustração interativa original.';
    fig.style.maxWidth = fig.style.maxWidth || '440px'; fig.style.textAlign = 'left';
    render();
  }
  function reg(id, c){ REG[id] = c; }

  // =====================================================================================================
  //                                         MATEMÁTICA
  // =====================================================================================================

  // 1ª série · notação científica
  var OBJ = [['um átomo', '0,0000000001', '1 × 10<sup>−10</sup>', -10, '⚛️'], ['um vírus', '0,0000001', '1 × 10<sup>−7</sup>', -7, '🦠'], ['um glóbulo vermelho', '0,000007', '7 × 10<sup>−6</sup>', -5.155, '🩸'],
    ['uma formiga', '0,003', '3 × 10<sup>−3</sup>', -2.523, '🐜'], ['a largura do seu dedo', '0,02', '2 × 10<sup>−2</sup>', -1.699, '☝️'], ['uma pessoa', '1,7', '1,7 × 10<sup>0</sup>', .23, '🧍'],
    ['o Monte Everest', '8 800', '8,8 × 10<sup>3</sup>', 3.944, '🏔️'], ['a Terra (diâmetro)', '12 700 000', '1,27 × 10<sup>7</sup>', 7.104, '🌍'], ['o Sol (diâmetro)', '1 400 000 000', '1,4 × 10<sup>9</sup>', 9.146, '☀️']];
  reg('notacao', { alt: 'Régua em escala de potências de 10, de 10 elevado a menos 10 metros até 10 elevado a 9 metros, com um objeto marcado', leg: 'Deslize: do átomo ao Sol, cada passo vale muitas casas decimais.',
    est: { i: 5 }, ctl: [{ r: 'i', rot: 'Objeto', min: 0, max: 8, fmt: function(v){ return OBJ[v][4]; } }],
    svg: function(e){ var o = OBJ[e.i], s = '', k, x; for(k = -10; k <= 10; k += 2){ x = 20 + (k + 10) * 14; s += ln(x, 118, x, 126, F, 1.5) + tx(x, 140, '10<tspan font-size="8" dy="-4">' + k + '</tspan>', { z: 10, c: F }); }
      x = 20 + (o[3] + 10) * 14; s = ln(20, 122, 300, 122, L, 3) + s + ln(x, 122, x, 80, P, 2) + '<circle cx="' + x + '" cy="122" r="5" fill="' + P + '"/>' + tx(Math.min(272, Math.max(48, x)), 62, o[4], { z: 38 }) + tx(Math.min(272, Math.max(48, x)), 78, o[0], { z: 11, w: 800, c: P });
      return svg(320, 150, s + tx(160, 12, 'metros (escala de potências de 10)', { z: 10, c: F })); },
    lei: function(e){ var o = OBJ[e.i]; return '<b>' + o[0] + '</b> ≈ ' + o[1] + ' m<br>= <b>' + o[2] + ' m</b> em notação científica'; } });

  // 1ª série · função quadrática (definição)
  reg('quad-def', { alt: 'Gráfico de f(x) igual a a vezes x ao quadrado mais c, com a e c ajustáveis', leg: 'Mude a e c: a parábola abre, fecha, vira e sobe. Quando a = 0, deixa de ser quadrática.',
    est: { a: 1, c: 0 }, ctl: [{ r: 'a', rot: 'a', min: -3, max: 3, passo: .5, fmt: function(v){ return sg(v); } }, { r: 'c', rot: 'c', min: -3, max: 4, fmt: function(v){ return sg(v); } }],
    svg: function(e){ var p = plot(320, 190, -4, 4, -4, 8), f = function(x){ return e.a * x * x + e.c; };
      return svg(320, 190, p.eixos() + p.curva(f, e.a === 0 ? X : P) + '<circle cx="' + p.X(0) + '" cy="' + p.Y(e.c) + '" r="5" fill="' + G + '"/>' + tx(p.X(0) + 8, p.Y(e.c) - 8, 'vértice', { z: 10, c: G, a: 'start' })); },
    lei: function(e){ if(e.a === 0) return 'f(x) = ' + sg(e.c) + ' é <b>constante</b>: com a = 0 não é função quadrática.'; return 'f(x) = <b>' + sg(e.a) + 'x² ' + (e.c < 0 ? '− ' + Math.abs(e.c) : '+ ' + e.c) + '</b> · concavidade para ' + (e.a > 0 ? 'cima ∪ (mínimo)' : 'baixo ∩ (máximo)') + ' · vértice (0 ; ' + e.c + ')'; } });

  // 1ª série · estatística: variáveis
  var VARS = { nome: ['Ana', 'Bia', 'Caio', 'Davi', 'Eva'], idade: ['12', '13', '12', '14', '13'], altura: ['1,52', '1,60', '1,47', '1,68', '1,55'], irmaos: ['1', '0', '2', '3', '1'], olhos: ['castanho', 'verde', 'castanho', 'preto', 'mel'], camiseta: ['M', 'P', 'M', 'G', 'P'] };
  var TIPO = { nome: 'qualitativa <b>nominal</b> (categorias sem ordem)', idade: 'quantitativa <b>discreta</b> (valores inteiros, contados)', altura: 'quantitativa <b>contínua</b> (medida: pode ter qualquer valor em um intervalo)', irmaos: 'quantitativa <b>discreta</b> (contagem)', olhos: 'qualitativa <b>nominal</b>', camiseta: 'qualitativa <b>ordinal</b> (P &lt; M &lt; G tem ordem)' };
  var ROT = { nome: 'nome', idade: 'idade (anos)', altura: 'altura (m)', irmaos: 'nº de irmãos', olhos: 'cor dos olhos', camiseta: 'tamanho da camiseta' };
  reg('estat-var', { alt: 'Cinco alunos, cada um com o valor da variável escolhida', leg: 'Escolha uma variável e veja como ela é classificada.', est: { v: 'idade' },
    ctl: [{ o: 'v', ops: Object.keys(ROT).map(function(k){ return [k, ROT[k]]; }) }],
    svg: function(e){ var s = '', i, x, f = ['🧒', '👧', '👦', '🧑', '👩']; for(i = 0; i < 5; i++){ x = 34 + i * 63; s += '<circle cx="' + x + '" cy="62" r="24" fill="' + S2 + '" stroke="' + L + '"/>' + tx(x, 71, f[i], { z: 26 }) + '<rect x="' + (x - 28) + '" y="102" width="56" height="28" rx="9" fill="' + SF + '" stroke="' + P + '" stroke-width="1.5"/>' + tx(x, 121, VARS[e.v][i], { z: 12, w: 800, c: P }); }
      return svg(320, 150, s + tx(160, 18, 'variável: ' + ROT[e.v], { z: 11, c: F })); },
    lei: function(e){ return '<b>' + ROT[e.v] + '</b> é uma variável ' + TIPO[e.v] + '.'; } });

  // 2ª série · função quadrática (gráfico)
  reg('quad-graf', { alt: 'Parábola de f(x) = ax² + bx + c com a, b e c ajustáveis, mostrando vértice e raízes', leg: 'Ajuste a, b e c e acompanhe vértice, raízes e o corte no eixo y.', est: { a: 1, b: 0, c: -2 },
    ctl: [{ r: 'a', rot: 'a', min: -3, max: 3, passo: .5, fmt: sg }, { r: 'b', rot: 'b', min: -6, max: 6, fmt: sg }, { r: 'c', rot: 'c', min: -6, max: 6, fmt: sg }],
    svg: function(e){ var p = plot(320, 200, -6, 6, -8, 8), f = function(x){ return e.a * x * x + e.b * x + e.c; }, s = p.eixos() + p.curva(f, e.a === 0 ? X : P);
      if(e.a !== 0){ var xv = -e.b / (2 * e.a), yv = f(xv), d = e.b * e.b - 4 * e.a * e.c; s += '<circle cx="' + p.X(xv) + '" cy="' + p.Y(yv) + '" r="5" fill="' + G + '"/>';
        if(d >= 0){ [(-e.b + Math.sqrt(d)) / (2 * e.a), (-e.b - Math.sqrt(d)) / (2 * e.a)].forEach(function(r){ s += '<circle cx="' + p.X(r) + '" cy="' + p.Y(0) + '" r="4.5" fill="' + X + '"/>'; }); } }
      s += '<circle cx="' + p.X(0) + '" cy="' + p.Y(e.c) + '" r="4" fill="' + INK + '"/>'; return svg(320, 200, s); },
    lei: function(e){ if(e.a === 0) return 'Com a = 0 vira a reta y = ' + num(e.b, 0) + 'x ' + (e.c < 0 ? '−' : '+') + ' ' + Math.abs(e.c) + ' (função afim).'; var d = e.b * e.b - 4 * e.a * e.c, xv = -e.b / (2 * e.a), yv = e.a * xv * xv + e.b * xv + e.c, r = d > 0 ? 'duas raízes: ' + num((-e.b + Math.sqrt(d)) / (2 * e.a), 2) + ' e ' + num((-e.b - Math.sqrt(d)) / (2 * e.a), 2) : d === 0 ? 'uma raiz: ' + num(xv, 2) : 'nenhuma raiz real';
      return 'Vértice <b>(' + num(xv, 2) + ' ; ' + num(yv, 2) + ')</b> · Δ = ' + num(d, 1) + ' → ' + r + ' · corta o eixo y em ' + e.c; } });

  // 2ª série · trigonometria (ângulos do triângulo e Pitágoras)
  reg('trig', { alt: 'Triângulo retângulo com hipotenusa fixa e ângulo A ajustável', leg: 'Mude o ângulo A: os três ângulos sempre somam 180° e a² + b² = c².', est: { A: 35 },
    ctl: [{ r: 'A', rot: 'ângulo A', min: 10, max: 80, passo: 5, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var K = 15, c = 10, a = c * Math.sin(rad(e.A)), b = c * Math.cos(rad(e.A)), x0 = 40, y0 = 160, xc = x0 + b * K, yb = y0 - a * K;
      return svg(320, 190, '<polygon points="' + x0 + ',' + y0 + ' ' + xc + ',' + y0 + ' ' + xc + ',' + yb + '" fill="' + S2 + '" stroke="' + P + '" stroke-width="3" stroke-linejoin="round"/><rect x="' + (xc - 12) + '" y="' + (y0 - 12) + '" width="12" height="12" fill="none" stroke="' + INK + '"/>' +
        tx(x0 + 38, y0 - 6, 'A = ' + e.A + '°', { z: 12, c: G, a: 'middle', w: 800 }) + tx(xc - 6, yb + 32, 'B = ' + (90 - e.A) + '°', { z: 12, c: X, a: 'end', w: 800 }) + tx(xc + 8, y0 - 4, '90°', { z: 11, a: 'start' }) +
        tx((x0 + xc) / 2, y0 + 20, 'b = ' + num(b, 1), { z: 11, c: F }) + tx(xc + 8, (y0 + yb) / 2, 'a = ' + num(a, 1), { z: 11, c: F, a: 'start' }) + tx((x0 + xc) / 2 - 14, (y0 + yb) / 2 - 8, 'c = 10', { z: 11, c: P, w: 800 })); },
    lei: function(e){ var a = 10 * Math.sin(rad(e.A)), b = 10 * Math.cos(rad(e.A)); return 'Ângulos: <b>' + e.A + '° + ' + (90 - e.A) + '° + 90° = 180°</b><br>Pitágoras: ' + num(a * a, 1) + ' + ' + num(b * b, 1) + ' = <b>100</b> = 10²'; } });

  // 2ª série · equação exponencial: bactérias
  reg('bacterias', { alt: 'Quadro de bactérias que dobram a cada hora', leg: 'Cada hora, cada bactéria vira duas. Veja 2 elevado a t crescer.', est: { t: 3 }, ctl: [{ r: 't', rot: 'horas', min: 0, max: 6, fmt: function(v){ return v + ' h'; } }],
    svg: function(e){ var n = Math.pow(2, e.t), s = '', i, cols = 8; for(i = 0; i < n; i++){ s += '<circle cx="' + (24 + (i % cols) * 34) + '" cy="' + (22 + Math.floor(i / cols) * 34) + '" r="11" fill="' + (e.t > 4 ? G : P) + '" opacity=".85"/><circle cx="' + (24 + (i % cols) * 34 - 3) + '" cy="' + (22 + Math.floor(i / cols) * 34 - 3) + '" r="2.5" fill="#fff"/>'; }
      return svg(300, 290, '<rect x="2" y="2" width="296" height="286" rx="14" fill="' + S2 + '" stroke="' + L + '"/>' + s); },
    lei: function(e){ return 't = ' + e.t + ' h → 2<sup>' + e.t + '</sup> = <b>' + Math.pow(2, e.t) + ' bactérias</b>. Para saber quando chega a 64, resolva 2<sup>t</sup> = 2<sup>6</sup>.'; } });

  // 3ª série · equação exponencial: balança
  reg('balanca-exp', { alt: 'Balança com 2 elevado a x de um lado e 32 do outro', leg: 'Equilibre a balança: em que x vale 2<sup>x</sup> = 32?', est: { x: 3 }, ctl: [{ r: 'x', rot: 'x', min: 0, max: 7, fmt: function(v){ return v; } }],
    svg: function(e){ var v = Math.pow(2, e.x), th = -Math.max(-1, Math.min(1, (v - 32) / 32)) * .22, cx = 160, cy = 56, L2 = 90, xl = cx - L2 * Math.cos(th), yl = cy - L2 * Math.sin(th), xr = cx + L2 * Math.cos(th), yr = cy + L2 * Math.sin(th);
      function pan(x, y, t, c){ return ln(x, y, x - 34, y + 40, F, 1.5) + ln(x, y, x + 34, y + 40, F, 1.5) + '<rect x="' + (x - 40) + '" y="' + (y + 40) + '" width="80" height="34" rx="10" fill="' + c + '" opacity=".16" stroke="' + c + '" stroke-width="2"/>' + tx(x, y + 63, t, { z: 17, w: 900, c: c }); }
      return svg(320, 170, ln(cx, cy, cx, 150, L, 6) + ln(cx - 36, 150, cx + 36, 150, L, 6) + ln(xl, yl, xr, yr, INK, 5) + '<circle cx="' + cx + '" cy="' + cy + '" r="6" fill="' + P + '"/>' + pan(xl, yl, '2<tspan font-size="11" dy="-6">' + e.x + '</tspan><tspan dy="6"> = ' + v + '</tspan>', P) + pan(xr, yr, '32', X)); },
    lei: function(e){ var v = Math.pow(2, e.x); return v === 32 ? '<b>Equilíbrio!</b> 2<sup>' + e.x + '</sup> = 32 = 2<sup>5</sup> → como as bases são iguais, <b>x = 5</b>.' : (v < 32 ? 'O lado esquerdo (' + v + ') é <b>menor</b> que 32: x é pequeno.' : 'O lado esquerdo (' + v + ') é <b>maior</b> que 32: x é grande.'); } });

  // 3ª série · perímetro
  reg('perimetro', { alt: 'Jardim retangular cercado, com largura e comprimento ajustáveis', leg: 'Estique o jardim: o perímetro é o tanto de cerca que você precisa.', est: { l: 4, c: 7 },
    ctl: [{ r: 'c', rot: 'comprimento', min: 2, max: 12, fmt: function(v){ return v + ' m'; } }, { r: 'l', rot: 'largura', min: 2, max: 8, fmt: function(v){ return v + ' m'; } }],
    svg: function(e){ var K = 22, w = e.c * K, hh = e.l * K, x0 = (320 - w) / 2, y0 = (190 - hh) / 2, s = '', i;
      s += '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + hh + '" fill="' + G + '" opacity=".22"/>';
      for(i = 0; i <= e.c; i++){ s += '<circle cx="' + (x0 + i * K) + '" cy="' + y0 + '" r="3.2" fill="' + P + '"/><circle cx="' + (x0 + i * K) + '" cy="' + (y0 + hh) + '" r="3.2" fill="' + P + '"/>'; }
      for(i = 1; i < e.l; i++){ s += '<circle cx="' + x0 + '" cy="' + (y0 + i * K) + '" r="3.2" fill="' + P + '"/><circle cx="' + (x0 + w) + '" cy="' + (y0 + i * K) + '" r="3.2" fill="' + P + '"/>'; }
      return svg(320, 190, s + '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + hh + '" fill="none" stroke="' + P + '" stroke-width="2.5"/>' + tx(160, y0 - 6, e.c + ' m', { z: 11, c: F }) + tx(x0 - 6, 100, e.l + ' m', { z: 11, c: F, a: 'end' })); },
    lei: function(e){ return 'P = 2 · (' + e.c + ' + ' + e.l + ') = <b>' + 2 * (e.c + e.l) + ' m</b> de cerca · área = ' + e.c + ' · ' + e.l + ' = ' + e.c * e.l + ' m²'; } });

  // 3ª série · sequências: palitos
  reg('palitos', { alt: 'Fileira de quadrados feitos com palitos de fósforo', leg: 'Aumente o número de quadrados e conte os palitos: que regra aparece?', est: { n: 3 }, ctl: [{ r: 'n', rot: 'quadrados', min: 1, max: 7, fmt: function(v){ return v; } }],
    svg: function(e){ var s = '', i, S = 36, x0 = 14, y0 = 70, c = [P, G, X]; for(i = 0; i < e.n; i++){ var x = x0 + i * S;
        s += ln(x, y0, x + S, y0, c[i % 3], 4) + ln(x, y0 + S, x + S, y0 + S, c[i % 3], 4) + ln(x, y0, x, y0 + S, c[(i + 1) % 3], 4); }
      s += ln(x0 + e.n * S, y0, x0 + e.n * S, y0 + S, c[(e.n + 1) % 3], 4); return svg(320, 140, s + tx(160, 122, e.n + (e.n === 1 ? ' quadrado' : ' quadrados') + ' → ' + (3 * e.n + 1) + ' palitos', { z: 13, w: 800, c: P })); },
    lei: function(e){ var t = [], i; for(i = 1; i <= 5; i++) t.push(3 * i + 1); return 'Sequência: <b>' + t.join(', ') + ', …</b> · cada quadrado novo acrescenta 3 palitos → <b>aₙ = 3n + 1</b> → a<sub>' + e.n + '</sub> = ' + (3 * e.n + 1); } });

  // 6º ano · frações: pizza
  reg('pizza', { alt: 'Pizza dividida em fatias iguais, algumas já comidas', leg: 'Mude o número de fatias e de fatias comidas — depois corte tudo ao meio e compare.', est: { n: 8, k: 3 },
    ctl: [{ r: 'n', rot: 'fatias', min: 2, max: 16, ao: function(e){ if(e.k > e.n) e.k = e.n; }, fmt: function(v){ return v; } }, { r: 'k', rot: 'comi', min: 0, max: 16, ao: function(e){ if(e.k > e.n) e.k = e.n; }, fmt: function(v){ return v; } },
      { b: '✂️ Cortar cada fatia ao meio', fn: function(e){ if(e.n <= 8){ e.n *= 2; e.k *= 2; } } }, { b: '↺ Voltar a 3/8', fn: function(e){ e.n = 8; e.k = 3; } }],
    svg: function(e){ var n = e.n, k = Math.min(e.k, n), s = '', i, a0, a1, cx = 160, cy = 92, r = 80, x1, y1, x2, y2; for(i = 0; i < n; i++){ a0 = -Math.PI / 2 + 2 * Math.PI * i / n; a1 = -Math.PI / 2 + 2 * Math.PI * (i + 1) / n;
        x1 = cx + r * Math.cos(a0); y1 = cy + r * Math.sin(a0); x2 = cx + r * Math.cos(a1); y2 = cy + r * Math.sin(a1);
        s += '<path d="M' + cx + ' ' + cy + ' L' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (n === 1 ? 1 : 0) + ' 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + ' Z" fill="' + (i < k ? 'transparent' : '#f4b942') + '" stroke="' + (i < k ? L : '#b36b12') + '" stroke-width="2"' + (i < k ? ' stroke-dasharray="4 3"' : '') + '/>'; }
      return svg(320, 184, '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r + 4) + '" fill="none" stroke="#b36b12" stroke-width="3" opacity=".35"/>' + s + tx(cx, 182, 'tracejado = já comi', { z: 10, c: F })); },
    lei: function(e){ var k = Math.min(e.k, e.n), g = (function(a, b){ while(b){ var t = a % b; a = b; b = t; } return a; })(k, e.n) || 1, sim = k === 0 ? '0' : (k / g) + '/' + (e.n / g); return 'Comi <b>' + k + '/' + e.n + '</b> da pizza (' + num(k / e.n, 3) + ')' + (k > 0 && g > 1 ? ' = <b>' + sim + '</b> (fração equivalente, mais simples)' : '') + '.'; } });

  // 6º ano · inteiros: elevador
  reg('elevador', { alt: 'Prédio com subsolos e andares, e um elevador que sobe e desce', leg: 'Use os botões do elevador: números negativos são os subsolos.', est: { a: 0 },
    ctl: [{ b: '⬆ Subir um andar', fn: function(e){ e.a = Math.min(5, e.a + 1); } }, { b: '⬇ Descer um andar', fn: function(e){ e.a = Math.max(-3, e.a - 1); } }],
    svg: function(e){ var s = '', i, y; for(i = 5; i >= -3; i--){ y = 8 + (5 - i) * 20; s += '<rect x="90" y="' + y + '" width="140" height="19" fill="' + (i < 0 ? S2 : SF) + '" stroke="' + L + '"/>' + tx(80, y + 14, sg(i), { z: 12, a: 'end', c: i < 0 ? X : (i > 0 ? G : INK), w: 800 }) + tx(238, y + 14, i === 0 ? 'térreo' : (i < 0 ? 'subsolo ' + (-i) : i + 'º andar'), { z: 9, a: 'start', c: F }); }
      y = 8 + (5 - e.a) * 20; return svg(320, 196, s + '<rect x="130" y="' + (y + 1) + '" width="60" height="17" rx="4" fill="' + P + '"/>' + tx(160, y + 14, '🛗 ' + sg(e.a), { z: 11, c: '#fff', w: 800 })); },
    lei: function(e){ return 'Andar <b>' + sg(e.a) + '</b> · a ' + Math.abs(e.a) + ' andar' + (Math.abs(e.a) === 1 ? '' : 'es') + ' do térreo · oposto de ' + sg(e.a) + ' é <b>' + sg(-e.a) + '</b>.'; } });

  // 7º ano · inteiros: fichas
  reg('fichas', { alt: 'Fichas positivas e negativas que se anulam em pares', leg: 'Cada ficha + com uma ficha − forma um par que vale zero.', est: { p: 4, n: 3 },
    ctl: [{ r: 'p', rot: 'fichas +', min: 0, max: 8, fmt: function(v){ return v; } }, { r: 'n', rot: 'fichas −', min: 0, max: 8, fmt: function(v){ return v; } }],
    svg: function(e){ var s = '', i, z = Math.min(e.p, e.n), x;
      for(i = 0; i < e.p; i++){ x = 24 + i * 34; s += '<circle cx="' + x + '" cy="46" r="14" fill="' + G + '" opacity="' + (i < z ? .35 : 1) + '"/>' + tx(x, 52, '+', { z: 18, c: '#fff', w: 900 }); }
      for(i = 0; i < e.n; i++){ x = 24 + i * 34; s += '<circle cx="' + x + '" cy="120" r="14" fill="' + X + '" opacity="' + (i < z ? .35 : 1) + '"/>' + tx(x, 126, '−', { z: 18, c: '#fff', w: 900 }); }
      for(i = 0; i < z; i++){ x = 24 + i * 34; s += ln(x, 62, x, 104, F, 1.5, 'stroke-dasharray="3 3"') + tx(x + 9, 88, '0', { z: 10, c: F, a: 'start' }); }
      return svg(300, 160, s); },
    lei: function(e){ var z = Math.min(e.p, e.n), r = e.p - e.n; return '(+' + e.p + ') + (−' + e.n + ') = <b>' + sg(r) + '</b> · ' + z + ' par' + (z === 1 ? '' : 'es') + ' se anulam (valem 0); sobram ' + Math.abs(r) + ' ficha' + (Math.abs(r) === 1 ? '' : 's') + (r === 0 ? '' : r > 0 ? ' positivas' : ' negativas') + '.'; } });

  // 7º ano · equações do 1º grau: balança
  reg('balanca-eq', { alt: 'Balança em equilíbrio com x mais 3 de um lado e 8 do outro', leg: 'Resolva x + 3 = 8 mantendo a balança em equilíbrio: faça a mesma coisa nos dois lados.', est: { p: 0 },
    ctl: [{ b: '➜ Próximo passo', fn: function(e){ e.p = Math.min(2, e.p + 1); } }, { b: '↺ Recomeçar', fn: function(e){ e.p = 0; } }],
    svg: function(e){ var s = '', i, L1 = e.p === 0 ? 3 : 0, R1 = e.p === 0 ? 8 : 5, cx = 160;
      function pesos(x0, n, y){ var o = ''; for(var j = 0; j < n; j++) o += '<rect x="' + (x0 + (j % 5) * 14) + '" y="' + (y - Math.floor(j / 5) * 14) + '" width="12" height="12" rx="2" fill="' + X + '"/>'; return o; }
      s += ln(cx, 40, cx, 140, L, 6) + ln(cx - 40, 140, cx + 40, 140, L, 6) + ln(40, 62, 280, 62, INK, 5) + '<circle cx="' + cx + '" cy="62" r="6" fill="' + P + '"/>';
      s += ln(70, 62, 30, 100, F, 1.5) + ln(70, 62, 110, 100, F, 1.5) + ln(250, 62, 210, 100, F, 1.5) + ln(250, 62, 290, 100, F, 1.5) + '<rect x="20" y="100" width="100" height="8" rx="4" fill="' + L + '"/><rect x="200" y="100" width="100" height="8" rx="4" fill="' + L + '"/>';
      s += '<rect x="26" y="72" width="30" height="26" rx="4" fill="' + P + '"/>' + tx(41, 90, e.p === 2 ? '5' : 'x', { z: 15, c: '#fff', w: 900 }) + pesos(62, L1, 86) + pesos(206, R1, 86);
      return svg(320, 150, s + tx(cx, 14, e.p === 0 ? 'x + 3 = 8' : e.p === 1 ? 'x = 8 − 3' : 'x = 5', { z: 15, w: 900, c: P })); },
    lei: function(e){ return e.p === 0 ? 'A balança está em equilíbrio: <b>x + 3 = 8</b>. Dá para tirar o mesmo peso dos dois lados?' : e.p === 1 ? 'Tirando <b>3</b> dos dois lados, sobra x de um lado e <b>5</b> do outro: x = 8 − 3.' : '<b>x = 5</b> · conferindo: 5 + 3 = 8 ✓'; } });

  // 7º ano · ângulos opostos pelo vértice
  reg('opv', { alt: 'Duas retas que se cortam formando quatro ângulos, dois a dois iguais', leg: 'Gire a reta: os ângulos opostos pelo vértice são sempre iguais.', est: { t: 60 },
    ctl: [{ r: 't', rot: 'ângulo', min: 20, max: 160, passo: 5, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var cx = 160, cy = 92, r = 30, t = e.t, s = '';
      function setor(a1, a2, c){ var p1 = [cx + r * Math.cos(rad(a1)), cy - r * Math.sin(rad(a1))], p2 = [cx + r * Math.cos(rad(a2)), cy - r * Math.sin(rad(a2))]; return '<path d="M' + cx + ' ' + cy + ' L' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + ((a2 - a1) > 180 ? 1 : 0) + ' 0 ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1) + ' Z" fill="' + c + '" opacity=".4" stroke="' + c + '"/>'; }
      function rot(a, rr, s2, c){ return tx(cx + rr * Math.cos(rad(a)), cy - rr * Math.sin(rad(a)) + 4, s2, { z: 12, w: 800, c: c }); }
      s += setor(0, t, G) + setor(180, 180 + t, G) + setor(t, 180, X) + setor(180 + t, 360, X) + ln(cx - 140, cy, cx + 140, cy, INK, 3) + ln(cx - 140 * Math.cos(rad(t)), cy + 140 * Math.sin(rad(t)), cx + 140 * Math.cos(rad(t)), cy - 140 * Math.sin(rad(t)), INK, 3);
      s += rot(t / 2, 52, t + '°', G) + rot(180 + t / 2, 52, t + '°', G) + rot((t + 180) / 2, 52, (180 - t) + '°', X) + rot(180 + (t + 180) / 2, 52, (180 - t) + '°', X);
      return svg(320, 184, s); },
    lei: function(e){ return 'Opostos pelo vértice: <b>' + e.t + '° = ' + e.t + '°</b> e <b>' + (180 - e.t) + '° = ' + (180 - e.t) + '°</b> · vizinhos somam ' + e.t + '° + ' + (180 - e.t) + '° = 180°.'; } });

  // 8º ano · conjuntos numéricos
  var NUMS = { '7': ['7', 'N'], '0': ['0', 'N'], '-3': ['−3', 'Z'], '0.5': ['½', 'Q'], '-0.75': ['−0,75', 'Q'], 'r2': ['√2', 'I'], 'pi': ['π', 'I'], 'r9': ['√9', 'N'] };
  var COMOS = { N: 'é <b>natural</b>: ∈ ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', Z: 'é <b>inteiro</b> (∈ ℤ ⊂ ℚ ⊂ ℝ), mas não é natural', Q: 'é <b>racional</b> (∈ ℚ ⊂ ℝ) — fração ou decimal que termina/repete —, mas não é inteiro', I: 'é <b>irracional</b> (∈ ℝ, mas ∉ ℚ): decimal infinito sem período' };
  reg('conjuntos', { alt: 'Diagrama de conjuntos numéricos: naturais dentro de inteiros, dentro de racionais, dentro de reais, com os irracionais ao lado', leg: 'Toque num número e veja em que conjuntos ele mora.', est: { n: '7' },
    ctl: [{ o: 'n', ops: Object.keys(NUMS).map(function(k){ return [k, NUMS[k][0]]; }) }],
    svg: function(e){ var q = NUMS[e.n][1], pos = { N: [66, 98], Z: [118, 98], Q: [176, 98], I: [256, 98] }[q];
      return svg(320, 190, '<ellipse cx="160" cy="98" rx="150" ry="82" fill="' + S2 + '" stroke="' + INK + '" stroke-width="2"/><ellipse cx="108" cy="98" rx="94" ry="62" fill="' + SF + '" stroke="' + P + '" stroke-width="2"/><ellipse cx="86" cy="98" rx="64" ry="44" fill="' + S2 + '" stroke="' + G + '" stroke-width="2"/><ellipse cx="66" cy="98" rx="36" ry="26" fill="' + SF + '" stroke="' + X + '" stroke-width="2"/>' +
        tx(66, 62, 'ℕ', { z: 12, w: 900, c: X }) + tx(112, 150, 'ℤ', { z: 12, w: 900, c: G }) + tx(180, 160, 'ℚ', { z: 12, w: 900, c: P }) + tx(256, 60, 'irracionais', { z: 10, c: F }) + tx(154, 24, 'ℝ', { z: 13, w: 900 }) +
        '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="15" fill="' + INK + '"/>' + tx(pos[0], pos[1] + 4, NUMS[e.n][0], { z: NUMS[e.n][0].length > 3 ? 9 : 12, c: SF, w: 800 })); },
    lei: function(e){ return '<b>' + NUMS[e.n][0] + '</b> ' + COMOS[NUMS[e.n][1]] + '.'; } });

  // 8º ano · soma dos ângulos de um triângulo
  reg('triangulo', { alt: 'Triângulo com dois ângulos ajustáveis; o terceiro completa 180 graus', leg: 'Mude A e B: o ângulo C se ajusta sozinho para a soma continuar em 180°.', est: { A: 50, B: 60 },
    ctl: [{ r: 'A', rot: 'ângulo A', min: 20, max: 110, passo: 5, ao: function(e){ if(180 - e.A - e.B < 10) e.B = 170 - e.A; }, fmt: function(v){ return v + '°'; } }, { r: 'B', rot: 'ângulo B', min: 20, max: 110, passo: 5, ao: function(e){ if(180 - e.A - e.B < 10) e.A = 170 - e.B; }, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var C = 180 - e.A - e.B, A = [50, 160], B = [270, 160], d = 220 * Math.sin(rad(e.B)) / Math.sin(rad(C)), Pn = [A[0] + d * Math.cos(rad(e.A)), A[1] - d * Math.sin(rad(e.A))];
      var sc = Math.min(1, 120 / (A[1] - Pn[1])); if(sc < 1){ Pn = [A[0] + (Pn[0] - A[0]) * sc, A[1] - (A[1] - Pn[1]) * sc]; B = [A[0] + 220 * sc, 160]; }
      return svg(320, 190, '<polygon points="' + A + ' ' + B + ' ' + Pn[0].toFixed(1) + ',' + Pn[1].toFixed(1) + '" fill="' + S2 + '" stroke="' + P + '" stroke-width="3" stroke-linejoin="round"/>' + tx(A[0] + 30, 154, e.A + '°', { z: 12, c: G, w: 800 }) + tx(B[0] - 30, 154, e.B + '°', { z: 12, c: X, w: 800 }) + tx(Pn[0], Math.max(16, Pn[1] - 8), C + '°', { z: 12, c: P, w: 800 })); },
    lei: function(e){ var C = 180 - e.A - e.B; return e.A + '° + ' + e.B + '° + <b>' + C + '°</b> = 180° · triângulo <b>' + ((e.A === 90 || e.B === 90 || C === 90) ? 'retângulo' : (e.A > 90 || e.B > 90 || C > 90) ? 'obtusângulo' : 'acutângulo') + '</b>.'; } });

  // 8º ano · juros simples
  reg('juros', { alt: 'Colunas do montante mês a mês: capital de mil reais com juros de dois por cento ao mês', leg: 'Capital R$ 1.000 a 2% ao mês (juros simples): os juros crescem sempre o mesmo valor.', est: { t: 6 },
    ctl: [{ r: 't', rot: 'meses', min: 0, max: 12, fmt: function(v){ return v + ' m'; } }],
    svg: function(e){ var s = '', i, base = 150, K = 110 / 240, m, x; for(i = 0; i <= 12; i++){ m = 1000 + 20 * i; x = 14 + i * 22; var hh = (m - 900) * K; if(i <= e.t){ s += '<rect x="' + x + '" y="' + (base - 100 * K) + '" width="16" height="' + 100 * K + '" fill="' + P + '"/><rect x="' + x + '" y="' + (base - hh) + '" width="16" height="' + (hh - 100 * K) + '" fill="' + G + '"/>'; } else s += '<rect x="' + x + '" y="' + (base - hh) + '" width="16" height="' + hh + '" fill="none" stroke="' + L + '" stroke-dasharray="3 3"/>'; s += tx(x + 8, 164, i, { z: 9, c: F }); }
      return svg(320, 176, s + ln(10, base, 312, base, F, 1.5) + tx(160, 14, 'azul = capital · verde = juros (eixo começa em R$ 900)', { z: 9, c: F })); },
    lei: function(e){ var j = 20 * e.t; return 'J = C · i · t = 1000 · 0,02 · ' + e.t + ' = <b>R$ ' + num(j, 2) + '</b> · montante M = <b>R$ ' + num(1000 + j, 2) + '</b>'; } });

  // 9º ano · Bhaskara
  reg('bhaskara', { alt: 'Parábola de x² + bx + c com b e c ajustáveis, mostrando quantas raízes existem', leg: 'Mexa em b e c: o sinal de Δ diz quantas vezes a parábola toca o eixo x.', est: { b: -2, c: -3 },
    ctl: [{ r: 'b', rot: 'b', min: -6, max: 6, fmt: sg }, { r: 'c', rot: 'c', min: -6, max: 8, fmt: sg }],
    svg: function(e){ var p = plot(320, 190, -7, 7, -8, 12), d = e.b * e.b - 4 * e.c, s = p.eixos() + p.curva(function(x){ return x * x + e.b * x + e.c; }, d > 0 ? G : d === 0 ? P : X);
      if(d >= 0){ [(-e.b + Math.sqrt(d)) / 2, (-e.b - Math.sqrt(d)) / 2].forEach(function(r){ s += '<circle cx="' + p.X(r) + '" cy="' + p.Y(0) + '" r="5" fill="' + INK + '"/>'; }); } return svg(320, 190, s); },
    lei: function(e){ var d = e.b * e.b - 4 * e.c; return 'Δ = b² − 4ac = ' + e.b * e.b + ' − 4·' + par(e.c) + ' = <b>' + d + '</b> → ' + (d > 0 ? 'duas raízes: x = ' + num((-e.b + Math.sqrt(d)) / 2, 2) + ' e x = ' + num((-e.b - Math.sqrt(d)) / 2, 2) : d === 0 ? 'uma raiz: x = ' + num(-e.b / 2, 2) : 'nenhuma raiz real (a parábola não toca o eixo x)'); } });

  // 9º ano · inteiros soma e subtração
  reg('reta-soma', { alt: 'Reta numérica com uma seta para o primeiro número e outra para a operação', leg: 'Escolha a operação e dois números: siga as setas na reta.', est: { op: '+', a: 3, b: -5 },
    ctl: [{ o: 'op', ops: [['+', 'Adição ( + )'], ['−', 'Subtração ( − )']] }, { r: 'a', rot: '1º número', min: -8, max: 8, fmt: sg }, { r: 'b', rot: '2º número', min: -8, max: 8, fmt: sg }],
    svg: function(e){ var X0 = 160, K = 14, r = e.op === '+' ? e.a + e.b : e.a - e.b, mv = e.op === '+' ? e.b : -e.b, s = '', i;
      for(i = -10; i <= 10; i++){ s += ln(X0 + i * K, 100, X0 + i * K, i % 5 === 0 ? 92 : 96, F, 1.5); if(i % 5 === 0) s += tx(X0 + i * K, 116, sg(i), { z: 10, c: F }); }
      function seta(x1, x2, y, c, t){ var d = x2 >= x1 ? 1 : -1; return '<path d="M' + x1 + ' ' + y + ' Q' + (x1 + x2) / 2 + ' ' + (y - 34) + ' ' + x2 + ' ' + y + '" fill="none" stroke="' + c + '" stroke-width="3"/><path d="M' + x2 + ' ' + y + ' l' + (-8 * d) + ' -6 m' + (8 * d) + ' 6 l' + (-8 * d) + ' 6" fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>' + tx((x1 + x2) / 2, y - 28, t, { z: 11, c: c, w: 800 }); }
      s += ln(20, 100, 300, 100, INK, 2) + seta(X0, X0 + e.a * K, 98, P, sg(e.a)) + (mv !== 0 ? seta(X0 + e.a * K, X0 + r * K, 98, mv > 0 ? G : X, (mv > 0 ? '+' : '−') + Math.abs(mv)) : '') + '<circle cx="' + (X0 + r * K) + '" cy="100" r="6" fill="' + INK + '"/>';
      return svg(320, 140, s); },
    lei: function(e){ var r = e.op === '+' ? e.a + e.b : e.a - e.b; return '<b>' + par(e.a) + ' ' + e.op + ' ' + par(e.b) + ' = ' + sg(r) + '</b>' + (e.op === '−' ? ' · subtrair ' + par(e.b) + ' é somar o oposto: ' + par(e.a) + ' + ' + par(-e.b) : ''); } });

  // 9º ano · polígonos
  var NOMES = ['', '', '', 'triângulo', 'quadrilátero', 'pentágono', 'hexágono', 'heptágono', 'octógono', 'eneágono', 'decágono', 'undecágono', 'dodecágono'];
  reg('poligonos', { alt: 'Polígono regular com número de lados ajustável e diagonais opcionais', leg: 'Mude o número de lados e conte ângulos e diagonais.', est: { n: 5, d: 0 },
    ctl: [{ r: 'n', rot: 'lados', min: 3, max: 12, fmt: function(v){ return v; } }, { o: 'd', ops: [[0, 'Sem diagonais'], [1, 'Mostrar diagonais']] }],
    svg: function(e){ var pts = [], i, j, s = '', cx = 160, cy = 92, r = 78; for(i = 0; i < e.n; i++) pts.push([cx + r * Math.cos(rad(-90 + 360 * i / e.n)), cy + r * Math.sin(rad(-90 + 360 * i / e.n))]);
      if(+e.d) for(i = 0; i < e.n; i++) for(j = i + 2; j < e.n; j++) if(!(i === 0 && j === e.n - 1)) s += ln(pts[i][0].toFixed(1), pts[i][1].toFixed(1), pts[j][0].toFixed(1), pts[j][1].toFixed(1), X, 1.2, 'opacity=".7"');
      return svg(320, 184, '<polygon points="' + pts.map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" fill="' + G + '" fill-opacity=".18" stroke="' + P + '" stroke-width="3" stroke-linejoin="round"/>' + s + pts.map(function(p){ return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="' + P + '"/>'; }).join('')); },
    lei: function(e){ var n = e.n; return '<b>' + NOMES[n] + '</b> · ' + n + ' lados, ' + n + ' vértices · ângulo interno = <b>' + num((n - 2) * 180 / n, 1) + '°</b> · soma = ' + (n - 2) * 180 + '° · diagonais = n(n−3)/2 = <b>' + n * (n - 3) / 2 + '</b>'; } });

  // 9º ano · semelhança
  reg('semelhanca', { alt: 'Triângulo retângulo de lados 3, 4 e 5 e sua ampliação por um fator ajustável', leg: 'Amplie o triângulo: os lados ficam proporcionais e os ângulos não mudam.', est: { k: 2 },
    ctl: [{ r: 'k', rot: 'fator k', min: 1, max: 3, passo: .5, fmt: function(v){ return '×' + num(v, 1); } }],
    svg: function(e){ var U = 20, x0 = 30, y0 = 160, a = 4 * U, b = 3 * U, A = 4 * U * e.k, B = 3 * U * e.k;
      return svg(320, 180, '<polygon points="' + x0 + ',' + y0 + ' ' + (x0 + A) + ',' + y0 + ' ' + (x0 + A) + ',' + (y0 - B) + '" fill="' + P + '" fill-opacity=".12" stroke="' + P + '" stroke-width="2.5"/><polygon points="' + x0 + ',' + y0 + ' ' + (x0 + a) + ',' + y0 + ' ' + (x0 + a) + ',' + (y0 - b) + '" fill="' + G + '" fill-opacity=".45" stroke="' + G + '" stroke-width="2.5"/><rect x="' + (x0 + A - 9) + '" y="' + (y0 - 9) + '" width="9" height="9" fill="none" stroke="' + INK + '"/>' + tx(x0 + a / 2, y0 + 14, '4', { z: 11, c: G, w: 800 }) + tx(x0 + a + 10, y0 - b / 2, '3', { z: 11, c: G, w: 800, a: 'start' }) + tx(x0 + A / 2 + 20, y0 + 14, num(4 * e.k, 1), { z: 11, c: P, w: 800 }) + tx(x0 + A + 8, y0 - B / 2, num(3 * e.k, 1), { z: 11, c: P, w: 800, a: 'start' })); },
    lei: function(e){ return 'Lados 3 · 4 · 5 → <b>' + num(3 * e.k, 1) + ' · ' + num(4 * e.k, 1) + ' · ' + num(5 * e.k, 1) + '</b> · razão de semelhança = ' + num(e.k, 1) + ' · ângulos iguais · perímetro × ' + num(e.k, 1) + ', área × ' + num(e.k * e.k, 2); } });

  // 9º ano · unidades de comprimento
  var UN = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  reg('unidades', { alt: 'Escada das unidades de comprimento, de quilômetro a milímetro, com multiplicação por 10 a cada degrau', leg: 'Cada degrau para baixo multiplica por 10; para cima, divide por 10.', est: { u: 3 },
    ctl: [{ o: 'u', ops: UN.map(function(n, i){ return [i, n]; }) }],
    svg: function(e){ var s = '', i, x, y; for(i = 0; i < 7; i++){ x = 12 + i * 42; y = 18 + i * 20; s += '<rect x="' + x + '" y="' + y + '" width="42" height="' + (150 - y) + '" fill="' + (i === +e.u ? P : S2) + '" stroke="' + L + '"/>' + tx(x + 21, y + 16, UN[i], { z: 12, w: 800, c: i === +e.u ? '#fff' : INK }); if(i < 6) s += tx(x + 42, y + 4, '×10', { z: 8, c: F }); }
      return svg(320, 160, s); },
    lei: function(e){ var d = +e.u - 3, v = d >= 0 ? Math.pow(10, d) : Math.pow(10, d); var t = d >= 0 ? String(Math.pow(10, d)) : '0,' + new Array(-d).join('0') + '1'; return '1 metro = <b>' + t + ' ' + UN[e.u] + '</b>' + (e.u > 3 ? ' (multiplicou por 10 ' + (e.u - 3) + ' vez' + (e.u - 3 > 1 ? 'es' : '') + ')' : e.u < 3 ? ' (dividiu por 10 ' + (3 - e.u) + ' vez' + (3 - e.u > 1 ? 'es' : '') + ')' : ''); } });

  // 9º ano · função afim: corrida de táxi
  reg('taxi', { alt: 'Gráfico do preço de uma corrida de táxi em função dos quilômetros', leg: 'Bandeirada de R$ 5 + R$ 2,50 por km: o gráfico é uma reta.', est: { x: 8 }, ctl: [{ r: 'x', rot: 'distância', min: 0, max: 20, fmt: function(v){ return v + ' km'; } }],
    svg: function(e){ var p = plot(320, 190, 0, 20, 0, 60, 26), y = 5 + 2.5 * e.x, s = '';
      s += p.eixos() + p.curva(function(x){ return 5 + 2.5 * x; }, P) + ln(p.X(e.x), p.Y(0), p.X(e.x), p.Y(y), G, 2, 'stroke-dasharray="4 3"') + ln(p.X(0), p.Y(y), p.X(e.x), p.Y(y), G, 2, 'stroke-dasharray="4 3"') + '<circle cx="' + p.X(e.x) + '" cy="' + p.Y(y) + '" r="6" fill="' + G + '"/>' + tx(p.X(e.x), p.Y(y) - 10, 'R$ ' + num(y, 2), { z: 11, c: G, w: 800 }) + tx(300, 182, 'km', { z: 10, c: F }) + tx(14, 12, 'R$', { z: 10, c: F });
      return svg(320, 190, s); },
    lei: function(e){ return 'f(x) = 2,5x + 5 · para ' + e.x + ' km: <b>R$ ' + num(5 + 2.5 * e.x, 2) + '</b> · a reta corta o eixo y em 5 (bandeirada) e cresce 2,5 a cada km (coeficiente angular).'; } });

  W.EduCenas = { reg: reg, monta: monta, REG: REG, util: { h: h, num: num, sg: sg, svg: svg, tx: tx, ln: ln, clk: clk, rad: rad, plot: plot, cores: { P: P, G: G, X: X, INK: INK, F: F, S2: S2, L: L, SF: SF } } };

  // ---------- partida ----------
  var SRC = (D.currentScript && D.currentScript.src) || '';
  var C2 = { arte: 1, celula: 1, vivos: 1, esportes: 1, mito: 1, referencial: 1, bussola: 1, fontes: 1, greetings: 1, misturas: 1, iceberg: 1 }; // Humanas/Ciências em cenas2.js; o resto da Matemática em cenas3.js
  function acha(id, fig, tentou){
    if(REG[id]){ monta(fig, REG[id]); return; }
    if(tentou || !SRC) return;
    var s = D.createElement('script'); s.src = SRC.replace(/cenas\.js.*$/, C2[id] ? 'cenas2.js' : 'cenas3.js'); s.onload = function(){ acha(id, fig, true); }; (D.head || D.documentElement).appendChild(s);
  }
  function iniciar(){ [].slice.call(D.querySelectorAll('figure[data-cena]')).forEach(function(f){ try{ acha(f.getAttribute('data-cena'), f); }catch(e){ if(W.console) console.warn('cena:', e); } }); }
  if(D.readyState === 'loading') D.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
