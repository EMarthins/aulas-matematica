/* Calculadora científica flutuante para as aulas (carregada sob demanda por app/quadro.js e app/ferramentas.js; tecla K).
   Frações decimais com vírgula, parênteses, ^, √, sin/cos/tan (graus ou radianos), log, ln, π e multiplicação implícita (2π, 3(4+1)).
   Calcula com um interpretador próprio (sem eval). Funciona com teclado, mouse e toque. Nada sai do aparelho. */
(function(){
  if(window.EduCalc) return;
  var D = document, W = window, R = D.documentElement;
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }

  // ---------- cálculo ----------
  function tokens(s){
    s = String(s).replace(/×/g, '*').replace(/÷/g, '/').replace(/[−–]/g, '-').replace(/,/g, '.').replace(/π/g, ' pi ').replace(/√/g, ' sqrt ').replace(/\s+/g, '');
    var out = [], i = 0, m;
    while(i < s.length){
      m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i)); if(m){ out.push({ n: parseFloat(m[1]) }); i += m[1].length; continue; }
      m = /^([a-z]+)/.exec(s.slice(i)); if(m){ out.push({ f: m[1] }); i += m[1].length; continue; }
      if('+-*/^()%!'.indexOf(s[i]) >= 0){ out.push({ o: s[i] }); i++; continue; }
      throw new Error('símbolo');
    }
    return out;
  }
  var FUN = { sin: 1, cos: 1, tan: 1, asin: 1, acos: 1, atan: 1, log: 1, ln: 1, sqrt: 1, abs: 1 }, CONST = { pi: Math.PI, e: Math.E };
  function avalia(txt, graus){
    var t = tokens(txt), p = 0;
    function pk(){ return t[p]; }
    function op(c){ return t[p] && t[p].o === c; }
    function expr(){ var v = termo(); while(op('+') || op('-')){ var o = t[p++].o, w = termo(); v = o === '+' ? v + w : v - w; } return v; }
    function inicioPrimario(x){ return x && (x.n !== undefined || x.f !== undefined || x.o === '('); }
    function termo(){ var v = unario(); for(;;){ if(op('*')){ p++; v *= unario(); } else if(op('/')){ p++; v /= unario(); } else if(inicioPrimario(pk())){ v *= unario(); } else break; } return v; }
    function unario(){ if(op('-')){ p++; return -unario(); } if(op('+')){ p++; return unario(); } return potencia(); }
    function potencia(){ var b = posfixo(); if(op('^')){ p++; return Math.pow(b, unario()); } return b; }
    function posfixo(){ var v = primario(); while(op('%') || op('!')){ if(t[p++].o === '%') v /= 100; else { if(v < 0 || v !== Math.floor(v) || v > 170) throw new Error('fatorial'); var f = 1; for(var k = 2; k <= v; k++) f *= k; v = f; } } return v; }
    function primario(){
      var x = t[p++]; if(!x) throw new Error('fim');
      if(x.n !== undefined) return x.n;
      if(x.o === '('){ var v = expr(); if(op(')')) p++; return v; }
      if(x.f !== undefined){
        if(CONST[x.f] !== undefined) return CONST[x.f];
        if(!FUN[x.f]) throw new Error('função');
        var a = op('(') ? (p++, (function(){ var r = expr(); if(op(')')) p++; return r; })()) : unario();
        var r1 = graus && /^(sin|cos|tan)$/.test(x.f) ? a * Math.PI / 180 : a, y;
        switch(x.f){
          case 'sin': y = Math.sin(r1); if(Math.abs(y) < 1e-15) y = 0; return y;
          case 'cos': y = Math.cos(r1); if(Math.abs(y) < 1e-15) y = 0; return y;
          case 'tan': y = Math.tan(r1); if(graus && Math.abs(Math.cos(r1)) < 1e-12) throw new Error('tan'); return Math.abs(y) < 1e-15 ? 0 : y;
          case 'asin': y = Math.asin(a); return graus ? y * 180 / Math.PI : y;
          case 'acos': y = Math.acos(a); return graus ? y * 180 / Math.PI : y;
          case 'atan': y = Math.atan(a); return graus ? y * 180 / Math.PI : y;
          case 'log': return Math.log10(a);
          case 'ln': return Math.log(a);
          case 'sqrt': return Math.sqrt(a);
          case 'abs': return Math.abs(a);
        }
      }
      throw new Error('sintaxe');
    }
    var v = expr(); if(p < t.length) throw new Error('sobra'); if(!isFinite(v) || isNaN(v)) throw new Error('inválido'); return v;
  }
  function fmt(v){
    if(v === 0) return '0'; var a = Math.abs(v);
    if(a >= 1e12 || a < 1e-9) return v.toExponential(6).replace(/\.?0+e/, 'e').replace('.', ',').replace('e+', ' × 10^').replace('e-', ' × 10^−').replace('e', ' × 10^');
    return String(parseFloat(v.toPrecision(12))).replace('.', ',');
  }

  // ---------- janela ----------
  var css = '.cl-w{position:fixed;z-index:99989;right:16px;bottom:96px;width:min(18.5rem,calc(100vw - 24px));background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:18px;box-shadow:0 26px 54px -18px var(--shadow,rgba(0,0,0,.5));font-family:Archivo,Arial,sans-serif;display:none;user-select:none;-webkit-user-select:none;outline:none}' +
    '.cl-w.on{display:block}.cl-h{display:flex;align-items:center;gap:6px;padding:8px 10px;cursor:grab;touch-action:none;font-weight:800;font-size:.82rem}.cl-h span{flex:1}' +
    '.cl-h button{border:1px solid var(--line,#ddd);background:var(--surface-2,#f5f5f8);color:inherit;border-radius:8px;font:800 .72rem Archivo,Arial,sans-serif;padding:.3em .6em;cursor:pointer}' +
    '.cl-d{margin:0 10px 8px;background:var(--surface-2,#f5f5f8);border-radius:12px;padding:8px 12px;text-align:right;min-height:4.1rem;overflow:hidden}' +
    '.cl-e{font:600 1rem "JetBrains Mono",Consolas,monospace;color:var(--ink-faint,#666);min-height:1.4em;word-break:break-all}.cl-r{font:800 1.9rem "JetBrains Mono",Consolas,monospace;min-height:1.2em;word-break:break-all}' +
    '.cl-g{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:0 10px 10px}' +
    '.cl-g button{height:44px;border-radius:12px;border:1px solid var(--line,#ddd);background:var(--surface,#fff);color:inherit;font:800 1.02rem Archivo,Arial,sans-serif;cursor:pointer}' +
    '.cl-g button:hover{border-color:var(--primary,#382EAE)}.cl-g .op{background:var(--primary-soft,#eef);color:var(--primary,#382EAE)}.cl-g .fn{background:var(--surface-2,#f5f5f8);font-size:.88rem}' +
    '.cl-g .eq{background:var(--primary,#382EAE);border-color:var(--primary,#382EAE);color:var(--primary-ink,#fff)}.cl-g .ac{color:var(--danger,#c0392b)}' +
    '@media print{.cl-w{display:none!important}}';
  var st = el('style'); st.textContent = css; (D.head || R).appendChild(st);

  var w = el('div', 'cl-w'); w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', 'Calculadora científica'); w.tabIndex = 0;
  w.innerHTML = '<div class="cl-h"><span>🧮 Calculadora</span><button type="button" data-a="ang" title="Graus ou radianos">DEG</button><button type="button" data-a="x" aria-label="Fechar">✕</button></div>' +
    '<div class="cl-d"><div class="cl-e" aria-live="off"></div><div class="cl-r" aria-live="polite"></div></div><div class="cl-g"></div>';
  var visE = w.querySelector('.cl-e'), visR = w.querySelector('.cl-r'), grade = w.querySelector('.cl-g'), bAng = w.querySelector('[data-a=ang]');
  var graus = true, expr = '', recem = false;
  var LAY = [['C', 'ac'], ['⌫', 'fn'], ['(', 'fn'], [')', 'fn'], ['sin', 'fn'], ['cos', 'fn'], ['tan', 'fn'], ['÷', 'op'], ['log', 'fn'], ['ln', 'fn'], ['√', 'fn'], ['×', 'op'],
    ['7'], ['8'], ['9'], ['−', 'op'], ['4'], ['5'], ['6'], ['+', 'op'], ['1'], ['2'], ['3'], ['^', 'op'], ['0'], [','], ['π', 'fn'], ['=', 'eq']];
  LAY.forEach(function(k){ var b = el('button', k[1] || '', k[0]); b.type = 'button'; b.dataset.k = k[0]; grade.appendChild(b); });

  function pinta(){
    visE.textContent = expr.replace(/\*/g, '×') || ' ';
    var r = ''; if(expr && !recem){ try{ var v = avalia(expr.replace(/\(+$/, ''), graus); r = fmt(v); }catch(e){ r = ''; } }
    if(recem) r = visR.textContent; visR.textContent = r;
  }
  function insere(s){
    if(recem){ if(/^[0-9,πsclt√(]/.test(s) && !/^[+\-×÷−^]/.test(s)) expr = ''; recem = false; }
    expr += s; pinta();
  }
  function igual(){
    if(!expr) return; var a = expr, aberto = (a.match(/\(/g) || []).length - (a.match(/\)/g) || []).length; while(aberto-- > 0) a += ')';
    try{ var v = avalia(a, graus), s = fmt(v); visE.textContent = a.replace(/\*/g, '×') + ' ='; visR.textContent = s; expr = String(parseFloat(v.toPrecision(12))).replace('.', ','); recem = true; }
    catch(e){ visR.textContent = 'Erro'; recem = false; }
  }
  function apaga(){ if(recem){ expr = ''; recem = false; pinta(); return; } expr = expr.replace(/(sin\(|cos\(|tan\(|log\(|ln\(|√\(|.)$/, ''); pinta(); }
  function tecla(k){
    if(k === 'C'){ expr = ''; recem = false; visR.textContent = ''; pinta(); return; }
    if(k === '⌫'){ apaga(); return; }
    if(k === '='){ igual(); return; }
    if(/^(sin|cos|tan|log|ln)$/.test(k)){ insere(k + '('); return; }
    if(k === '√'){ insere('√('); return; }
    insere(k);
  }
  grade.addEventListener('click', function(e){ var b = e.target.closest('button'); if(b) tecla(b.dataset.k); });
  w.addEventListener('keydown', function(e){
    e.stopPropagation(); var k = e.key, m;
    if(k === 'Escape'){ alterna(); return; }
    if(e.ctrlKey || e.metaKey || e.altKey) return;
    if(k === 'Enter' || k === '='){ e.preventDefault(); igual(); return; }
    if(k === 'Backspace'){ e.preventDefault(); apaga(); return; }
    if(k === 'Delete'){ e.preventDefault(); tecla('C'); return; }
    if(/^[0-9]$/.test(k) || k === '(' || k === ')' || k === '^' || k === '+'){ e.preventDefault(); tecla(k); return; }
    if(k === ',' || k === '.'){ e.preventDefault(); tecla(','); return; }
    if(k === '-'){ e.preventDefault(); tecla('−'); return; }
    if(k === '*'){ e.preventDefault(); tecla('×'); return; }
    if(k === '/'){ e.preventDefault(); tecla('÷'); return; }
    if(k === 'p'){ e.preventDefault(); tecla('π'); return; }
    if(k === '%'){ e.preventDefault(); insere('%'); return; }
    m = { s: 'sin', c: 'cos', t: 'tan', l: 'log', n: 'ln', r: '√' }[k.toLowerCase()]; if(m){ e.preventDefault(); tecla(m); }
  });
  w.addEventListener('keyup', function(e){ e.stopPropagation(); });
  w.querySelector('.cl-h').addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b) return;
    if(b.dataset.a === 'x') alterna(); else { graus = !graus; bAng.textContent = graus ? 'DEG' : 'RAD'; pinta(); }
  });
  (function(){ // arrastar pelo cabeçalho
    var h = w.querySelector('.cl-h'), arr = null;
    h.addEventListener('pointerdown', function(e){ if(e.target.closest('button')) return; var r = w.getBoundingClientRect(); arr = { dx: e.clientX - r.left, dy: e.clientY - r.top }; h.setPointerCapture(e.pointerId); h.style.cursor = 'grabbing'; });
    h.addEventListener('pointermove', function(e){ if(!arr) return; w.style.left = Math.max(0, Math.min(W.innerWidth - 80, e.clientX - arr.dx)) + 'px'; w.style.top = Math.max(0, Math.min(W.innerHeight - 60, e.clientY - arr.dy)) + 'px'; w.style.right = 'auto'; w.style.bottom = 'auto'; });
    h.addEventListener('pointerup', function(){ arr = null; h.style.cursor = ''; });
  })();

  function alterna(){ if(!w.parentNode) (D.body || R).appendChild(w); var on = w.classList.toggle('on'); if(on) setTimeout(function(){ try{ w.focus(); }catch(e){} }, 10); }
  W.EduCalc = { alternar: alterna, calcular: function(s){ return avalia(s, graus); } };
})();
