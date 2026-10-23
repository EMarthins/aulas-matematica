/* Gráficos de funções para as aulas (carregado sob demanda por app/quadro.js e app/ferramentas.js; tecla G).
   Digite y = x^2 − 4x + 3 (ou a x^2 + b x + c com controles deslizantes a, b, c, d), pontos como (2; 3) e retas verticais x = 3.
   Mostra raízes, intercepto, máximos/mínimos e interseções; arrastar move, roda do mouse dá zoom; eixo em π para trigonometria; tabela de valores.
   Interpretador próprio (sem eval). Nada sai do aparelho. */
(function(){
  if(window.EduGraficos) return;
  var D = document, W = window, R = D.documentElement;
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }

  // ---------- interpretador ----------
  var FUNS = ['asin', 'acos', 'atan', 'sqrt', 'sin', 'cos', 'tan', 'log', 'ln', 'abs', 'exp'], VARS = 'xabcd';
  function tokens(s){
    s = String(s).replace(/[−–]/g, '-').replace(/[×·]/g, '*').replace(/÷/g, '/').replace(/²/g, '^2').replace(/³/g, '^3').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/,/g, '.').replace(/\s+/g, '').toLowerCase()
      .replace(/sen/g, 'sin').replace(/tg/g, 'tan').replace(/raiz/g, 'sqrt');
    var out = [], i = 0, m, k, f;
    while(i < s.length){
      m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i)); if(m){ out.push({ n: parseFloat(m[1]) }); i += m[1].length; continue; }
      if(s.substr(i, 2) === 'pi'){ out.push({ n: Math.PI }); i += 2; continue; }
      f = null; for(k = 0; k < FUNS.length; k++) if(s.substr(i, FUNS[k].length) === FUNS[k]){ f = FUNS[k]; break; }
      if(f){ out.push({ f: f }); i += f.length; continue; }
      if(s[i] === 'e'){ out.push({ n: Math.E }); i++; continue; }
      if(VARS.indexOf(s[i]) >= 0){ out.push({ v: s[i] }); i++; continue; }
      if('+-*/^()'.indexOf(s[i]) >= 0){ out.push({ o: s[i] }); i++; continue; }
      throw new Error('símbolo');
    }
    return out;
  }
  function compila(txt){
    var t = tokens(txt), p = 0, usa = {};
    function op(c){ return t[p] && t[p].o === c; }
    function ini(x){ return x && (x.n !== undefined || x.v !== undefined || x.f !== undefined || x.o === '('); }
    function expr(){ var a = termo(); while(op('+') || op('-')){ var o = t[p++].o, b = termo(); a = (function(a, b, o){ return o === '+' ? function(e){ return a(e) + b(e); } : function(e){ return a(e) - b(e); }; })(a, b, o); } return a; }
    function termo(){ var a = unario(); for(;;){ if(op('*')){ p++; a = mul(a, unario()); } else if(op('/')){ p++; a = div(a, unario()); } else if(ini(t[p])){ a = mul(a, unario()); } else break; } return a; }
    function mul(a, b){ return function(e){ return a(e) * b(e); }; }
    function div(a, b){ return function(e){ return a(e) / b(e); }; }
    function unario(){ if(op('-')){ p++; var a = unario(); return function(e){ return -a(e); }; } if(op('+')){ p++; return unario(); } return pot(); }
    function pot(){ var b = prim(); if(op('^')){ p++; var x = unario(); return function(e){ return Math.pow(b(e), x(e)); }; } return b; }
    function prim(){
      var x = t[p++]; if(!x) throw new Error('fim');
      if(x.n !== undefined){ var n = x.n; return function(){ return n; }; }
      if(x.v !== undefined){ var v = x.v; usa[v] = 1; return function(e){ return e[v]; }; }
      if(x.o === '('){ var a = expr(); if(op(')')) p++; return a; }
      if(x.f !== undefined){
        var arg = op('(') ? (p++, (function(){ var r = expr(); if(op(')')) p++; return r; })()) : unario(), fn = x.f;
        return function(e){ var y = arg(e); switch(fn){ case 'sin': return Math.sin(y); case 'cos': return Math.cos(y); case 'tan': return Math.tan(y); case 'asin': return Math.asin(y); case 'acos': return Math.acos(y); case 'atan': return Math.atan(y); case 'log': return Math.log10(y); case 'ln': return Math.log(y); case 'sqrt': return Math.sqrt(y); case 'abs': return Math.abs(y); case 'exp': return Math.exp(y); } return NaN; };
      }
      throw new Error('sintaxe');
    }
    var f = expr(); if(p < t.length) throw new Error('sobra'); f.usa = usa; return f;
  }
  // linha de entrada -> {tipo:'f'|'v'|'p', f, usa} ou null
  function analisa(raw){
    var s = String(raw).trim(); if(!s) return null;
    s = s.replace(/^\s*(y|f\(x\)|f)\s*=\s*/i, '');
    var m = /^\(\s*([^;]+?)\s*;\s*([^)]+?)\s*\)$/.exec(s) || /^\(\s*([^,;]+?)\s*,\s*([^)]+?)\s*\)$/.exec(s);
    if(m){ var fx = compila(m[1]), fy = compila(m[2]); return { tipo: 'p', fx: fx, fy: fy, usa: Object.assign({}, fx.usa, fy.usa) }; }
    m = /^x\s*=\s*(.+)$/i.exec(s); if(m){ var fv = compila(m[1]); return { tipo: 'v', f: fv, usa: fv.usa }; }
    var f = compila(s); return { tipo: 'f', f: f, usa: f.usa };
  }

  // ---------- números ----------
  function nfmt(v){ if(!isFinite(v)) return '∞'; var r = Math.round(v * 1000) / 1000; if(Object.is(r, -0)) r = 0; return String(r).replace('.', ','); }
  function piFmt(k){ // k múltiplo de π/12 (inteiro): texto
    if(k === 0) return '0'; var n = k, d = 12, g = (function gcd(a, b){ return b ? gcd(b, a % b) : Math.abs(a); })(n, d); n /= g; d /= g;
    var sg = n < 0 ? '−' : '', an = Math.abs(n); if(d === 1) return sg + (an === 1 ? '' : an) + 'π'; return sg + (an === 1 ? '' : an) + 'π/' + d;
  }
  function xf(x){ if(ehPi){ var k = x / (Math.PI / 12); if(Math.abs(k - Math.round(k)) < 1e-3) return piFmt(Math.round(k)); } return nfmt(x); }
  function passoNice(span, alvo){ var raw = span / alvo, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p; return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p; }

  // ---------- estilos ----------
  var css = '.gf-w{position:fixed;z-index:99987;right:16px;top:64px;width:min(580px,calc(100vw - 24px));height:min(560px,calc(100vh - 80px));min-width:320px;min-height:360px;max-width:100vw;max-height:100vh;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:18px;box-shadow:0 26px 54px -18px var(--shadow,rgba(0,0,0,.5));font-family:Archivo,Arial,sans-serif;display:none;flex-direction:column;overflow:hidden;resize:both;user-select:none;-webkit-user-select:none;outline:none}' +
    '.gf-w.on{display:flex}.gf-w.max{left:8px!important;top:8px!important;right:8px!important;bottom:8px!important;width:auto!important;height:auto!important;resize:none}' +
    '.gf-h{display:flex;align-items:center;gap:6px;padding:8px 10px;cursor:grab;touch-action:none;font-weight:800;font-size:.84rem;flex:0 0 auto}.gf-h span{flex:1}' +
    '.gf-w button{font:inherit}.gf-h button,.gf-tools button,.gf-add{border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:inherit;border-radius:8px;font:700 .74rem Archivo,Arial,sans-serif;padding:.32em .65em;cursor:pointer}' +
    '.gf-h button:hover,.gf-tools button:hover,.gf-add:hover{border-color:var(--primary,#382EAE)}.gf-tools button.on{background:var(--primary,#382EAE);border-color:var(--primary,#382EAE);color:var(--primary-ink,#fff)}' +
    '.gf-cv{position:relative;flex:1 1 auto;min-height:160px;margin:0 10px;border:1px solid var(--line,#ddd);border-radius:12px;overflow:hidden;background:var(--surface,#fff);touch-action:none}.gf-cv canvas{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair;display:block}' +
    '.gf-tip{position:absolute;left:8px;top:6px;font:700 .74rem "JetBrains Mono",Consolas,monospace;color:var(--ink-faint,#555);pointer-events:none;background:color-mix(in srgb,var(--surface,#fff) 85%,transparent);border-radius:6px;padding:1px 6px}' +
    '.gf-tools{display:flex;gap:6px;flex-wrap:wrap;padding:7px 10px 0;flex:0 0 auto}' +
    '.gf-in{flex:0 1 auto;max-height:34%;overflow:auto;padding:6px 10px 10px}.gf-row{display:flex;align-items:center;gap:6px;margin:4px 0}.gf-row i{width:16px;height:16px;border-radius:50%;flex:0 0 auto;cursor:pointer;border:2px solid var(--surface,#fff);box-shadow:0 0 0 1px var(--line-strong,#bbb)}.gf-row i.off{opacity:.25}' +
    '.gf-row input[type=text]{flex:1;min-width:0;font:600 .95rem "JetBrains Mono",Consolas,monospace;border:1px solid var(--line-strong,#bbb);border-radius:8px;padding:.38em .6em;background:var(--surface,#fff);color:inherit;user-select:text;-webkit-user-select:text}.gf-row input.err{border-color:var(--danger,#c0392b)}' +
    '.gf-row button{border:0;background:transparent;color:var(--ink-faint,#777);cursor:pointer;font-size:1rem}' +
    '.gf-par{display:flex;align-items:center;gap:8px;margin:3px 0;font:700 .8rem "JetBrains Mono",Consolas,monospace}.gf-par input[type=range]{flex:1;accent-color:var(--primary,#382EAE)}.gf-par output{min-width:3.6em;text-align:right}' +
    '.gf-ex{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}.gf-ex button{border:1px dashed var(--line-strong,#bbb);background:transparent;color:var(--ink-faint,#666);border-radius:99px;font:700 .7rem Archivo,Arial,sans-serif;padding:.25em .7em;cursor:pointer}.gf-ex button:hover{color:var(--primary,#382EAE);border-color:var(--primary,#382EAE)}' +
    '.gf-tab{margin:0 10px 6px;font:600 .78rem "JetBrains Mono",Consolas,monospace;border:1px solid var(--line,#ddd);border-radius:10px;padding:6px 8px;max-height:30%;overflow:auto;flex:0 0 auto}.gf-tab table{border-collapse:collapse;width:100%}.gf-tab td,.gf-tab th{border:1px solid var(--line,#ddd);padding:2px 8px;text-align:center}.gf-tab input{width:4.2em;font:inherit;border:1px solid var(--line-strong,#bbb);border-radius:6px;padding:1px 4px;background:var(--surface,#fff);color:inherit;user-select:text}' +
    '@media print{.gf-w{display:none!important}}';
  var st = el('style'); st.textContent = css; (D.head || R).appendChild(st);

  // ---------- janela ----------
  var CORES = ['#2563eb', '#dc2626', '#16a34a', '#ea580c'];
  var EXEMPLOS = [['y = x²', 'x^2'], ['a·x² + b·x + c', 'a x^2 + b x + c'], ['reta × reta', 'x + 1|-x + 5'], ['seno', 'sin(x)'], ['2ˣ', '2^x'], ['|x|', 'abs(x)'], ['1/x', '1/x'], ['x² − 4x + 3', 'x^2 - 4x + 3']];
  var w = el('div', 'gf-w'); w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', 'Gráficos de funções'); w.tabIndex = 0;
  w.innerHTML = '<div class="gf-h"><span>ƒ Gráficos de funções</span><button type="button" data-a="tab" title="Tabela de valores">Tabela</button><button type="button" data-a="max" title="Tela cheia da janela">⛶</button><button type="button" data-a="x" aria-label="Fechar">✕</button></div>' +
    '<div class="gf-cv"><canvas></canvas><div class="gf-tip"></div></div>' +
    '<div class="gf-tools"><button type="button" data-a="pts" class="on" title="Mostrar raízes, intercepto, máximos/mínimos e interseções">Pontos notáveis</button><button type="button" data-a="pi" title="Eixo x em múltiplos de π">Eixo em π</button><button type="button" data-a="mais" title="Aproximar">＋</button><button type="button" data-a="menos" title="Afastar">－</button><button type="button" data-a="home" title="Voltar à vista inicial (duplo clique no gráfico)">⌂</button></div>' +
    '<div class="gf-tab" hidden></div><div class="gf-in"><div class="gf-rows"></div><button type="button" class="gf-add">＋ função</button><div class="gf-par-box"></div><div class="gf-ex"></div></div>';
  var cv = w.querySelector('canvas'), cx = cv.getContext('2d'), tip = w.querySelector('.gf-tip'), rows = w.querySelector('.gf-rows'), parBox = w.querySelector('.gf-par-box'), tabBox = w.querySelector('.gf-tab');
  var vista = { x: 0, y: 0, s: 40 }, ehPi = false, pts = true, mostraTab = false, tabIni = -3, tabPasso = 1;
  var par = { a: 1, b: 0, c: 0, d: 0 }, itens = [], dpr = 1, cw = 100, ch = 100, mouse = null;

  function novoItem(txt){ var it = { txt: txt || '', cor: CORES[itens.length % CORES.length], on: true, an: null, erro: false }; itens.push(it); return it; }
  function desenhaLinhas(){
    rows.innerHTML = '';
    itens.forEach(function(it, i){
      var r = el('div', 'gf-row'), dot = el('i', it.on ? '' : 'off'); dot.style.background = it.cor; dot.title = 'Mostrar/ocultar'; dot.addEventListener('click', function(){ it.on = !it.on; dot.classList.toggle('off', !it.on); desenha(); });
      var inp = el('input'); inp.type = 'text'; inp.value = it.txt; inp.placeholder = i ? 'outra função, ponto (2; 3) ou x = 3' : 'y = x^2 − 4x + 3'; inp.setAttribute('aria-label', 'Função ' + (i + 1)); inp.autocomplete = 'off'; inp.spellcheck = false;
      inp.addEventListener('input', function(){ it.txt = inp.value; atualiza(it); inp.classList.toggle('err', it.erro); montaPar(); desenha(); });
      var x = el('button', '', '✕'); x.type = 'button'; x.title = 'Remover'; x.addEventListener('click', function(){ itens.splice(itens.indexOf(it), 1); if(!itens.length) novoItem(''); desenhaLinhas(); montaPar(); desenha(); });
      r.appendChild(dot); r.appendChild(inp); r.appendChild(x); rows.appendChild(r); atualiza(it); inp.classList.toggle('err', it.erro);
    });
  }
  function atualiza(it){ try{ it.an = analisa(it.txt); it.erro = false; }catch(e){ it.an = null; it.erro = !!it.txt.trim(); } }
  function montaPar(){
    var usados = {}; itens.forEach(function(it){ if(it.an) Object.keys(it.an.usa || {}).forEach(function(k){ if(k !== 'x') usados[k] = 1; }); });
    var ks = Object.keys(usados).sort(), atual = [].map.call(parBox.querySelectorAll('input'), function(i){ return i.dataset.k; }).join();
    if(ks.join() === atual) return; parBox.innerHTML = '';
    ks.forEach(function(k){ var l = el('label', 'gf-par'), t = el('span', '', k + ' ='), inp = el('input'), o = el('output', '', nfmt(par[k])); inp.type = 'range'; inp.min = -10; inp.max = 10; inp.step = .1; inp.value = par[k]; inp.dataset.k = k; inp.setAttribute('aria-label', 'Parâmetro ' + k);
      inp.addEventListener('input', function(){ par[k] = +inp.value; o.textContent = nfmt(par[k]); desenha(); }); inp.addEventListener('dblclick', function(){ par[k] = k === 'a' ? 1 : 0; inp.value = par[k]; o.textContent = nfmt(par[k]); desenha(); }); l.appendChild(t); l.appendChild(inp); l.appendChild(o); parBox.appendChild(l); });
  }
  EXEMPLOS.forEach(function(e){ var b = el('button', '', e[0]); b.type = 'button'; b.addEventListener('click', function(){ itens = []; e[1].split('|').forEach(function(t){ novoItem(t); }); desenhaLinhas(); montaPar(); inicio(); desenha(); }); w.querySelector('.gf-ex').appendChild(b); });
  w.querySelector('.gf-add').addEventListener('click', function(){ if(itens.length >= 4) return; novoItem(''); desenhaLinhas(); var ins = rows.querySelectorAll('input[type=text]'); ins[ins.length - 1].focus(); });

  // ---------- desenho ----------
  var X = function(x){ return cw / 2 + (x - vista.x) * vista.s; }, Y = function(y){ return ch / 2 - (y - vista.y) * vista.s; }, ux = function(px){ return vista.x + (px - cw / 2) / vista.s; }, uy = function(py){ return vista.y - (py - ch / 2) / vista.s; };
  function env(x){ return { x: x, a: par.a, b: par.b, c: par.c, d: par.d }; }
  function val(f, x){ var v = f(env(x)); return typeof v === 'number' ? v : NaN; }
  function cor(n, fb){ var v = ''; try{ v = getComputedStyle(w).getPropertyValue(n).trim(); }catch(e){} return v || fb; }
  function grade(){
    var ink = cor('--ink', '#111'), faint = cor('--ink-faint', '#777'), line = cor('--line-strong', '#ccc'), fundo = cor('--surface', '#fff');
    cx.fillStyle = fundo; cx.fillRect(0, 0, cw, ch);
    var span = cw / vista.s, sx = passoNice(span, 9), sy = passoNice(ch / vista.s, 7), x0 = ux(0), x1 = ux(cw), y0 = uy(ch), y1 = uy(0), k, v, t;
    if(ehPi){ var cand = [1, 2, 3, 4, 6, 12, 24], pxPi12 = Math.PI / 12 * vista.s; sx = Math.PI / 12 * (cand.filter(function(c){ return c * pxPi12 >= 56; })[0] || 24); }
    cx.lineWidth = 1; cx.font = '600 11px Archivo,Arial,sans-serif';
    cx.strokeStyle = line; cx.globalAlpha = .45; cx.beginPath();
    for(v = Math.ceil(x0 / sx) * sx; v <= x1; v += sx){ var px = Math.round(X(v)) + .5; cx.moveTo(px, 0); cx.lineTo(px, ch); }
    for(v = Math.ceil(y0 / sy) * sy; v <= y1; v += sy){ var py = Math.round(Y(v)) + .5; cx.moveTo(0, py); cx.lineTo(cw, py); }
    cx.stroke(); cx.globalAlpha = 1;
    var ox = Math.min(cw - 1, Math.max(0, X(0))), oy = Math.min(ch - 1, Math.max(0, Y(0)));
    cx.strokeStyle = ink; cx.lineWidth = 1.6; cx.beginPath(); cx.moveTo(0, oy); cx.lineTo(cw, oy); cx.moveTo(ox, 0); cx.lineTo(ox, ch); cx.stroke();
    cx.fillStyle = faint; cx.textAlign = 'center'; cx.textBaseline = 'top';
    var ty = oy > ch - 18 ? oy - 16 : oy + 4;
    for(v = Math.ceil(x0 / sx) * sx; v <= x1; v += sx){ if(Math.abs(v) < sx / 1000) continue; t = ehPi ? piFmt(Math.round(v / (Math.PI / 12))) : nfmt(Math.round(v / sx) * sx); cx.fillText(t, X(v), ty); }
    cx.textAlign = ox < 30 ? 'left' : 'right'; cx.textBaseline = 'middle'; var tx = ox < 30 ? ox + 5 : ox - 5;
    for(v = Math.ceil(y0 / sy) * sy; v <= y1; v += sy){ if(Math.abs(v) < sy / 1000) continue; cx.fillText(nfmt(Math.round(v / sy) * sy), tx, Y(v)); }
    cx.fillStyle = ink; cx.textAlign = 'left'; cx.textBaseline = 'alphabetic'; cx.font = '800 12px Archivo,Arial,sans-serif'; cx.fillText('x', cw - 12, Math.max(14, oy - 6)); cx.fillText('y', Math.min(cw - 12, ox + 7), 13);
  }
  function curva(it){
    var f = it.an.f, n = Math.ceil(cw / 1.5), i, x, y, ant = null, penUp = true;
    cx.strokeStyle = it.cor; cx.lineWidth = 2.6; cx.lineJoin = 'round'; cx.beginPath();
    for(i = 0; i <= n; i++){ x = ux(i * cw / n); y = val(f, x); if(!isFinite(y) || Math.abs(Y(y)) > 4e4){ penUp = true; ant = null; continue; }
      var py = Y(y); if(ant !== null && Math.abs(py - ant) > ch * 1.5){ penUp = true; }
      if(penUp){ cx.moveTo(i * cw / n, py); penUp = false; } else cx.lineTo(i * cw / n, py); ant = py; }
    cx.stroke();
  }
  function raiz(f, a, b){ var fa = val(f, a), fb = val(f, b), m, fm, k; if(!(isFinite(fa) && isFinite(fb))) return null; for(k = 0; k < 50; k++){ m = (a + b) / 2; fm = val(f, m); if(!isFinite(fm)) return null; if(fa * fm <= 0){ b = m; fb = fm; } else { a = m; fa = fm; } } m = (a + b) / 2; return Math.abs(val(f, m)) < 1e-4 * (1 + Math.abs(a)) ? m : null; }
  function notaveis(lista){
    var out = [], x0 = ux(0), x1 = ux(cw), N = 700, h = (x1 - x0) / N, i, j;
    function add(x, y, rot, c){ if(!isFinite(x) || !isFinite(y)) return; for(var k = 0; k < out.length; k++) if(Math.abs(out[k].x - x) < h * 3 && Math.abs(out[k].y - y) < h * 3) return; out.push({ x: x, y: y, rot: rot, c: c }); }
    lista.forEach(function(it){ var f = it.an.f, a = x0, fa = val(f, a), k, fb, x, xr, d0, d1, dd;
      for(k = 1; k <= N; k++){ x = x0 + k * h; fb = val(f, x); if(isFinite(fa) && isFinite(fb) && (fa === 0 || fa * fb < 0)){ xr = fa === 0 ? a : raiz(f, a, x); if(xr !== null) add(xr, 0, 'raiz', it.cor); } a = x; fa = fb; }
      var y0 = val(f, 0); if(isFinite(y0) && 0 >= x0 && 0 <= x1) add(0, y0, 'y', it.cor);
      var dv = function(x){ return (val(f, x + h / 2) - val(f, x - h / 2)) / h; }, dp = dv(x0);
      for(k = 1; k <= N; k++){ x = x0 + k * h; d1 = dv(x); if(isFinite(dp) && isFinite(d1) && dp * d1 < 0){ var lo = x - h, hi = x, m, dm; for(j = 0; j < 40; j++){ m = (lo + hi) / 2; dm = dv(m); if(dp * dm <= 0) hi = m; else lo = m; } m = (lo + hi) / 2; var ym = val(f, m); if(isFinite(ym) && Math.abs(Y(ym)) < ch * 3) add(m, ym, dp > 0 ? 'máx' : 'mín', it.cor); } dp = d1; }
    });
    for(i = 0; i < lista.length; i++) for(j = i + 1; j < lista.length; j++){ var f1 = lista[i].an.f, f2 = lista[j].an.f, g = function(x){ return val(f1, x) - val(f2, x); }, xa = x0, ga = g(xa), xb, gb;
      for(var k = 1; k <= N; k++){ xb = x0 + k * h; gb = g(xb); if(isFinite(ga) && isFinite(gb) && ga * gb < 0){ var lo2 = xa, hi2 = xb, m2, gm, ga2 = ga; for(var q = 0; q < 50; q++){ m2 = (lo2 + hi2) / 2; gm = g(m2); if(ga2 * gm <= 0) hi2 = m2; else { lo2 = m2; ga2 = gm; } } m2 = (lo2 + hi2) / 2; if(Math.abs(g(m2)) < 1e-4) add(m2, val(f1, m2), 'cruza', '#7c3aed'); } xa = xb; ga = gb; } }
    return out.slice(0, 28);
  }
  function rotulo(t, x, y, c){
    cx.font = '800 11.5px Archivo,Arial,sans-serif'; var wd = cx.measureText(t).width + 8, bx = Math.min(cw - wd - 2, Math.max(2, x + 8)), by = y < 26 ? y + 12 : y - 24;
    cx.fillStyle = cor('--surface', '#fff'); cx.globalAlpha = .88; cx.fillRect(bx, by, wd, 17); cx.globalAlpha = 1; cx.strokeStyle = c; cx.lineWidth = 1; cx.strokeRect(bx + .5, by + .5, wd - 1, 16); cx.fillStyle = cor('--ink', '#111'); cx.textAlign = 'left'; cx.textBaseline = 'middle'; cx.fillText(t, bx + 4, by + 9);
  }
  function desenha(){
    if(!w.classList.contains('on')) return; cx.setTransform(dpr, 0, 0, dpr, 0, 0); grade();
    var fs = itens.filter(function(it){ return it.on && it.an && it.an.tipo === 'f'; });
    itens.forEach(function(it){ if(!it.on || !it.an) return;
      if(it.an.tipo === 'f') curva(it);
      else if(it.an.tipo === 'v'){ var vx = val(it.an.f, 0), px = X(vx); cx.strokeStyle = it.cor; cx.lineWidth = 2.6; cx.setLineDash([]); cx.beginPath(); cx.moveTo(px, 0); cx.lineTo(px, ch); cx.stroke(); }
      else { var qx = it.an.fx(env(0)), qy = it.an.fy(env(0)); if(isFinite(qx) && isFinite(qy)){ cx.fillStyle = it.cor; cx.beginPath(); cx.arc(X(qx), Y(qy), 5.5, 0, 6.3); cx.fill(); rotulo('(' + nfmt(qx) + '; ' + nfmt(qy) + ')', X(qx), Y(qy), it.cor); } } });
    if(pts && fs.length){ notaveis(fs).forEach(function(p){ var px = X(p.x), py = Y(p.y); if(px < -5 || px > cw + 5 || py < -5 || py > ch + 5) return; cx.fillStyle = cor('--surface', '#fff'); cx.strokeStyle = p.c; cx.lineWidth = 2.4; cx.beginPath(); cx.arc(px, py, 5, 0, 6.3); cx.fill(); cx.stroke();
      rotulo(p.rot === 'raiz' ? 'raiz ' + xf(p.x) : p.rot === 'y' ? '(0; ' + nfmt(p.y) + ')' : (p.rot === 'cruza' ? '' : p.rot + ' ') + '(' + xf(p.x) + '; ' + nfmt(p.y) + ')', px, py, p.c); }); }
    if(mostraTab){ var f0 = fs[0]; if(f0) for(var k = 0; k < 7; k++){ var tx = tabIni + k * tabPasso, ty = val(f0.an.f, tx); if(isFinite(ty)){ cx.fillStyle = f0.cor; cx.beginPath(); cx.arc(X(tx), Y(ty), 4.5, 0, 6.3); cx.fill(); } } }
    if(mouse && fs.length){ var mx = ux(mouse[0]), best = null; fs.forEach(function(it){ var y = val(it.an.f, mx); if(isFinite(y)){ var d = Math.abs(Y(y) - mouse[1]); if(d < 24 && (!best || d < best.d)) best = { d: d, y: y, c: it.cor }; } });
      if(best){ cx.fillStyle = best.c; cx.beginPath(); cx.arc(mouse[0], Y(best.y), 5, 0, 6.3); cx.fill(); tip.textContent = 'x = ' + xf(mx) + '   y = ' + nfmt(best.y); } else tip.textContent = 'x = ' + nfmt(mx) + '   y = ' + nfmt(uy(mouse[1])); }
    else tip.textContent = '';
  }
  function ajusta(){ var r = cv.parentNode.getBoundingClientRect(); dpr = Math.min(W.devicePixelRatio || 1, 2); var nw = Math.max(50, Math.round(r.width)), nh = Math.max(50, Math.round(r.height)); if(nw !== cw || nh !== ch || cv.width !== Math.round(nw * dpr)){ cw = nw; ch = nh; cv.width = Math.round(nw * dpr); cv.height = Math.round(nh * dpr); } desenha(); }
  function inicio(){ vista.x = 0; vista.y = 0; vista.s = Math.min(cw, ch * 1.4) / 16; if(vista.s < 14) vista.s = 14; }
  function zoom(f, px, py){ var ax = ux(px), ay = uy(py); vista.s = Math.max(2, Math.min(4000, vista.s * f)); vista.x = ax - (px - cw / 2) / vista.s; vista.y = ay + (py - ch / 2) / vista.s; desenha(); }

  // ---------- interação ----------
  var arr = null, ptrs = {}, pinch = null;
  cv.addEventListener('pointerdown', function(e){ cv.setPointerCapture(e.pointerId); var r = cv.getBoundingClientRect(); ptrs[e.pointerId] = [e.clientX - r.left, e.clientY - r.top]; var ks = Object.keys(ptrs);
    if(ks.length === 2){ var a = ptrs[ks[0]], b = ptrs[ks[1]]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) }; arr = null; } else arr = { x: e.clientX, y: e.clientY, vx: vista.x, vy: vista.y }; });
  cv.addEventListener('pointermove', function(e){ var r = cv.getBoundingClientRect(), p = [e.clientX - r.left, e.clientY - r.top]; if(ptrs[e.pointerId]) ptrs[e.pointerId] = p; var ks = Object.keys(ptrs);
    if(pinch && ks.length === 2){ var a = ptrs[ks[0]], b = ptrs[ks[1]], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if(pinch.d > 0) zoom(d / pinch.d, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); pinch.d = d; return; }
    if(arr && ks.length === 1){ vista.x = arr.vx - (e.clientX - arr.x) / vista.s; vista.y = arr.vy + (e.clientY - arr.y) / vista.s; mouse = p; desenha(); return; }
    mouse = p; desenha(); });
  function solta(e){ delete ptrs[e.pointerId]; if(Object.keys(ptrs).length < 2) pinch = null; if(!Object.keys(ptrs).length) arr = null; }
  cv.addEventListener('pointerup', solta); cv.addEventListener('pointercancel', solta); cv.addEventListener('pointerleave', function(){ mouse = null; desenha(); });
  cv.addEventListener('wheel', function(e){ e.preventDefault(); var r = cv.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top); }, { passive: false });
  cv.addEventListener('dblclick', function(){ inicio(); desenha(); });

  function montaTab(){
    tabBox.hidden = !mostraTab; if(!mostraTab){ desenha(); return; }
    var it = itens.filter(function(i){ return i.on && i.an && i.an.tipo === 'f'; })[0], h = '<div style="margin-bottom:4px">x começa em <input type="text" data-t="i" value="' + nfmt(tabIni) + '"> passo <input type="text" data-t="p" value="' + nfmt(tabPasso) + '"></div>';
    if(!it){ tabBox.innerHTML = h + 'Digite uma função para ver a tabela.'; } else { var xs = '<tr><th>x</th>', ys = '<tr><th>y</th>'; for(var k = 0; k < 7; k++){ var x = tabIni + k * tabPasso; xs += '<td>' + nfmt(x) + '</td>'; var y = val(it.an.f, x); ys += '<td>' + (isFinite(y) ? nfmt(y) : '—') + '</td>'; } tabBox.innerHTML = h + '<table>' + xs + '</tr>' + ys + '</tr></table>'; }
    [].forEach.call(tabBox.querySelectorAll('input'), function(inp){ inp.addEventListener('keydown', function(e){ e.stopPropagation(); }); inp.addEventListener('change', function(){ var v = parseFloat(String(inp.value).replace(',', '.')); if(isFinite(v)){ if(inp.dataset.t === 'i') tabIni = v; else if(v !== 0) tabPasso = v; } montaTab(); }); });
    desenha();
  }
  w.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Escape'){ alterna(); } });
  w.addEventListener('keyup', function(e){ e.stopPropagation(); });
  w.addEventListener('click', function(e){
    var b = e.target.closest('button[data-a]'); if(!b) return; var a = b.dataset.a;
    if(a === 'x') alterna(); else if(a === 'max'){ w.classList.toggle('max'); setTimeout(ajusta, 30); }
    else if(a === 'tab'){ mostraTab = !mostraTab; b.classList.toggle('on', mostraTab); montaTab(); }
    else if(a === 'pts'){ pts = !pts; b.classList.toggle('on', pts); desenha(); }
    else if(a === 'pi'){ ehPi = !ehPi; b.classList.toggle('on', ehPi); if(ehPi){ vista.s = Math.min(cw / 14, 60); vista.x = Math.PI; vista.y = 0; } desenha(); }
    else if(a === 'mais') zoom(1.4, cw / 2, ch / 2); else if(a === 'menos') zoom(1 / 1.4, cw / 2, ch / 2);
    else if(a === 'home'){ inicio(); desenha(); }
  });
  (function(){ // mover a janela pelo cabeçalho
    var h = w.querySelector('.gf-h'), a = null;
    h.addEventListener('pointerdown', function(e){ if(e.target.closest('button') || w.classList.contains('max')) return; var r = w.getBoundingClientRect(); a = { dx: e.clientX - r.left, dy: e.clientY - r.top }; h.setPointerCapture(e.pointerId); h.style.cursor = 'grabbing'; });
    h.addEventListener('pointermove', function(e){ if(!a) return; w.style.left = Math.max(0, Math.min(W.innerWidth - 120, e.clientX - a.dx)) + 'px'; w.style.top = Math.max(0, Math.min(W.innerHeight - 60, e.clientY - a.dy)) + 'px'; w.style.right = 'auto'; });
    h.addEventListener('pointerup', function(){ a = null; h.style.cursor = ''; });
  })();
  var ro = W.ResizeObserver ? new ResizeObserver(function(){ ajusta(); }) : null; if(ro) ro.observe(cv.parentNode);

  function alterna(){
    if(!w.parentNode){ (D.body || R).appendChild(w); novoItem('x^2 - 4x + 3'); desenhaLinhas(); montaPar(); }
    var on = w.classList.toggle('on'); if(on){ setTimeout(function(){ ajusta(); if(!ajusta.ini){ ajusta.ini = 1; inicio(); desenha(); } w.focus(); }, 20); }
  }
  W.EduGraficos = { alternar: alterna, definir: function(txts){ if(!w.parentNode) alterna(); itens = []; [].concat(txts).forEach(function(t){ novoItem(t); }); desenhaLinhas(); montaPar(); inicio(); desenha(); }, avalia: function(txt, x){ var a = analisa(txt); return a && a.f ? val(a.f, x) : NaN; } };
})();
