/* Cenas interativas de abertura — Matemática (temas): função afim, funções, exponencial e logaritmo, PA e PG, trigonometria,
   Pitágoras, estatística, amostra, áreas, círculo, volumes, porcentagem, valor posicional, MMC/MDC, divisores, potências,
   produtos notáveis, sistemas, proporção, geometria (ângulo inscrito, triângulos, quadriláteros, plano, cônicas),
   contagem, probabilidade e juros compostos. Carregado por app/cenas.js só quando uma aula pede a cena. */
(function(){
  var C = window.EduCenas; if(!C || C.REG.afim) return;
  var u = C.util, svg = u.svg, tx = u.tx, ln = u.ln, num = u.num, sg = u.sg, clk = u.clk, plot = u.plot, rad = u.rad, c = u.cores, reg = C.reg;
  var P = c.P, G = c.G, X = c.X, INK = c.INK, F = c.F, S2 = c.S2, L = c.L, SF = c.SF;
  function cs(v){ return (v < 0 ? '−' : '') + String(Math.round(Math.abs(v) * 1000) / 1000).replace('.', ','); }
  function pol(pts, fill, stroke, w, fo){ return '<polygon points="' + pts.map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" fill="' + (fill || 'none') + '"' + (fo != null ? ' fill-opacity="' + fo + '"' : '') + ' stroke="' + (stroke || INK) + '" stroke-width="' + (w || 1.5) + '" stroke-linejoin="round"/>'; }
  function cir(x, y, r, fill, stroke, w, fo){ return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="' + (fill || 'none') + '"' + (fo != null ? ' fill-opacity="' + fo + '"' : '') + (stroke ? ' stroke="' + stroke + '" stroke-width="' + (w || 1.5) + '"' : '') + '/>'; }
  function rc(x, y, w, h, fill, stroke, fo, r){ return '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="' + (r || 0) + '" fill="' + (fill || 'none') + '"' + (fo != null ? ' fill-opacity="' + fo + '"' : '') + (stroke ? ' stroke="' + stroke + '" stroke-width="1.5"' : '') + '/>'; }
  function seq(n, f){ var o = [], i; for(i = 0; i < n; i++) o.push(f(i)); return o; }
  var DASH = 'stroke-dasharray="4 3"';

  // ---------- função afim ----------
  reg('afim', { alt: 'Reta f(x) = ax + b com a e b ajustáveis', leg: 'Mude a e b: a reta gira (taxa de variação) e sobe ou desce (valor inicial).', est: { a: 1, b: 1 },
    ctl: [{ r: 'a', rot: 'a', min: -3, max: 3, passo: .5, fmt: cs }, { r: 'b', rot: 'b', min: -4, max: 4, fmt: cs }],
    svg: function(e){ var p = plot(320, 190, -5, 5, -6, 8), f = function(x){ return e.a * x + e.b; }, s = p.eixos() + p.curva(f, e.a === 0 ? X : P), z = e.a ? -e.b / e.a : null;
      s += cir(p.X(0), p.Y(e.b), 5, G) + tx(p.X(0) + 8, p.Y(e.b) - 7, '(0 ; ' + cs(e.b) + ')', { z: 10, c: G, a: 'start' });
      if(z !== null && Math.abs(z) <= 5) s += cir(p.X(z), p.Y(0), 5, X) + tx(p.X(z), p.Y(0) + 16, 'zero', { z: 10, c: X });
      s += ln(p.X(1), p.Y(f(1)), p.X(2), p.Y(f(1)), F, 1.8, DASH) + ln(p.X(2), p.Y(f(1)), p.X(2), p.Y(f(2)), G, 2.6) + tx(p.X(2) + 8, p.Y((f(1) + f(2)) / 2) + 4, 'Δy = ' + cs(e.a), { z: 10, c: G, a: 'start' });
      return svg(320, 190, s); },
    lei: function(e){ var t = e.a === 0 ? cs(e.b) : (e.a === 1 ? '' : e.a === -1 ? '−' : cs(e.a)) + 'x' + (e.b === 0 ? '' : e.b < 0 ? ' − ' + cs(-e.b) : ' + ' + cs(e.b));
      return 'f(x) = <b>' + t + '</b> · ' + (e.a > 0 ? 'crescente' : e.a < 0 ? 'decrescente' : 'constante') + ' · taxa de variação = <b>' + cs(e.a) + '</b> · ' + (e.a ? 'zero: x = ' + cs(Math.round(-e.b / e.a * 100) / 100) : 'não tem zero'); } });

  // ---------- funções: máquina de entrada e saída ----------
  var MAQ = { dobro: ['2x + 1', function(x){ return 2 * x + 1; }, null], quad: ['x²', function(x){ return x * x; }, null], mod: ['|x|', Math.abs, null], raiz: ['√x', function(x){ return x < 0 ? NaN : Math.sqrt(x); }, 'x ≥ 0'], inv: ['1/x', function(x){ return x === 0 ? NaN : 1 / x; }, 'x ≠ 0'], partes: ['x + 2 se x < 0; 2 se x ≥ 0', function(x){ return x < 0 ? x + 2 : 2; }, null] };
  reg('maquina', { alt: 'Máquina que recebe x e devolve f(x), com o gráfico do ponto', leg: 'Escolha uma regra e um valor de entrada: cada x tem uma única saída f(x).', est: { f: 'dobro', x: 2 },
    ctl: [{ o: 'f', ops: Object.keys(MAQ).map(function(k){ return [k, MAQ[k][0].split(' se')[0]]; }) }, { r: 'x', rot: 'x', min: -4, max: 4, passo: .5, fmt: cs }],
    svg: function(e){ var m = MAQ[e.f], y = m[1](e.x), ok = isFinite(y), p = plot(150, 130, -4, 4, -4, 6, 14), s = '';
      s += rc(8, 24, 52, 34, SF, P, 1, 8) + tx(34, 45, 'x = ' + cs(e.x), { z: 12, w: 800, c: P }) + ln(60, 41, 92, 41, F, 2) + '<polygon points="92,35 102,41 92,47" fill="' + F + '"/>';
      s += rc(104, 18, 76, 46, S2, L, 1, 10) + tx(142, 38, 'f(x) = ', { z: 10, c: F }) + tx(142, 54, m[0].split(' se')[0], { z: 11, w: 800 });
      s += ln(180, 41, 206, 41, F, 2) + '<polygon points="206,35 216,41 206,47" fill="' + F + '"/>' + rc(218, 24, 92, 34, ok ? SF : S2, ok ? G : X, 1, 8) + tx(264, 45, ok ? 'f = ' + cs(Math.round(y * 100) / 100) : 'sem saída', { z: 12, w: 800, c: ok ? G : X });
      var g = '<g transform="translate(85 66)">' + p.eixos() + p.curva(function(x){ var v = m[1](x); return isFinite(v) ? v : 99; }, P);
      if(ok) g += cir(p.X(e.x), p.Y(y), 5, G);
      s += g + '</g>'; return svg(320, 200, s); },
    lei: function(e){ var m = MAQ[e.f], y = m[1](e.x); return isFinite(y) ? 'Entrada <b>x = ' + cs(e.x) + '</b> → saída <b>f(x) = ' + cs(Math.round(y * 100) / 100) + '</b>. Para cada x, uma só saída.' : '<b>x = ' + cs(e.x) + '</b> está fora do <b>domínio</b> (' + m[2] + '): a máquina não responde.'; } });

  // ---------- exponencial ----------
  reg('exp-graf', { alt: 'Gráfico de f(x) = b elevado a x com a base ajustável', leg: 'Troque a base: com b > 1 a curva cresce; com 0 < b < 1, decresce. Todas passam por (0 ; 1).', est: { b: 2, x: 2 },
    ctl: [{ o: 'b', ops: [[.5, '1/2'], [1.5, '1,5'], [2, '2'], [3, '3'], [4, '4']] }, { r: 'x', rot: 'x', min: -3, max: 3, passo: .5, fmt: cs }],
    svg: function(e){ var p = plot(320, 190, -4, 4, -1, 9), f = function(x){ return Math.pow(e.b, x); }, y = f(e.x);
      var s = p.eixos() + ln(p.X(-4), p.Y(0), p.X(4), p.Y(0), X, 2, DASH) + p.curva(f, e.b < 1 ? X : P) + cir(p.X(0), p.Y(1), 4.5, G) + cir(p.X(e.x), p.Y(Math.min(y, 8.8)), 5.5, INK);
      s += ln(p.X(e.x), p.Y(0), p.X(e.x), p.Y(Math.min(y, 8.8)), G, 1.8, DASH) + tx(p.X(0) + 8, p.Y(1) - 8, '(0 ; 1)', { z: 10, c: G, a: 'start' }) + tx(p.X(3.2), p.Y(0) - 6, 'y = 0 (assíntota)', { z: 9, c: X });
      return svg(320, 190, s); },
    lei: function(e){ var y = Math.pow(e.b, e.x); return 'f(x) = <b>' + cs(e.b) + '<sup>x</sup></b> · f(' + cs(e.x) + ') = <b>' + cs(Math.round(y * 1000) / 1000) + '</b> · ' + (e.b > 1 ? 'crescente' : 'decrescente') + ' · imagem: y &gt; 0'; } });

  // ---------- logaritmo ----------
  reg('logaritmo', { alt: 'Logaritmo como expoente: b elevado a y é igual a x, com o gráfico de log e exponencial', leg: 'Logaritmo é o expoente: log_b(x) = y quer dizer b^y = x. Mude a base e o expoente.', est: { b: 2, y: 3 },
    ctl: [{ o: 'b', ops: [[2, 'base 2'], [3, 'base 3'], [10, 'base 10']] }, { r: 'y', rot: 'y', min: -2, max: 3, passo: .5, fmt: cs }],
    svg: function(e){ var p = plot(320, 190, -3, 8, -3, 5, 20), x = Math.pow(e.b, e.y), inside = x <= 8.2;
      var s = p.eixos() + ln(p.X(-3), p.Y(-3), p.X(5), p.Y(5), F, 1.4, DASH) + p.curva(function(t){ return Math.pow(e.b, t); }, L) + p.curva(function(t){ return t > 0 ? Math.log(t) / Math.log(e.b) : -99; }, P, .02, 8);
      if(inside){ s += cir(p.X(x), p.Y(e.y), 5.5, G) + ln(p.X(x), p.Y(0), p.X(x), p.Y(e.y), G, 1.6, DASH) + ln(p.X(0), p.Y(e.y), p.X(x), p.Y(e.y), G, 1.6, DASH) + tx(p.X(x) + (x > 5.5 ? -7 : 7), p.Y(e.y) - 8, '(' + cs(Math.round(x * 100) / 100) + ' ; ' + cs(e.y) + ')', { z: 10, c: G, a: x > 5.5 ? 'end' : 'start' }); }
      return svg(320, 190, s + tx(70, 16, 'y = log' + cs(e.b === 10 ? 10 : e.b) + ' x', { z: 10, c: P, w: 800 }) + tx(250, 22, 'y = ' + cs(e.b) + 'ˣ', { z: 10, c: F, w: 800 }) + tx(130, 186, 'a reta pontilhada y = x é o espelho', { z: 9, c: F })); },
    lei: function(e){ var x = Math.pow(e.b, e.y); return '<b>log<sub>' + e.b + '</sub>(' + cs(Math.round(x * 1000) / 1000) + ') = ' + cs(e.y) + '</b> ⟺ ' + e.b + '<sup>' + cs(e.y) + '</sup> = ' + cs(Math.round(x * 1000) / 1000) + '. O logaritmo é o expoente que se procura.'; } });

  // ---------- PA e PG ----------
  reg('pa', { alt: 'Barras de uma progressão aritmética com primeiro termo, razão e número de termos ajustáveis', leg: 'Em uma PA cada termo soma a mesma razão r ao anterior. Ajuste a₁, r e n.', est: { a1: 2, r: 3, n: 6 },
    ctl: [{ r: 'a1', rot: 'a₁', min: -4, max: 8, fmt: cs }, { r: 'r', rot: 'razão r', min: -3, max: 5, fmt: cs }, { r: 'n', rot: 'n (termos)', min: 3, max: 10 }],
    svg: function(e){ var v = seq(e.n, function(i){ return e.a1 + i * e.r; }), mx = Math.max(10, Math.max.apply(null, v.map(Math.abs))), s = ln(16, 100, 304, 100, F, 1.5), bw = Math.min(28, 270 / e.n - 4), i, x, h;
      for(i = 0; i < e.n; i++){ x = 24 + i * (272 / e.n); h = v[i] / mx * 78; s += rc(x, h >= 0 ? 100 - h : 100, bw, Math.abs(h), i === 0 || i === e.n - 1 ? P : G, null, .85, 3) + tx(x + bw / 2, h >= 0 ? 100 - h - 4 : 100 + Math.abs(h) + 11, cs(v[i]), { z: 10, w: 700 }); if(i) s += tx(x - 2, 176, '+' + cs(e.r), { z: 8, c: F }); }
      return svg(320, 190, s + tx(160, 14, 'a₁ = ' + cs(e.a1) + ' · razão = ' + cs(e.r), { z: 10, c: F })); },
    lei: function(e){ var an = e.a1 + (e.n - 1) * e.r, sn = e.n * (e.a1 + an) / 2; return 'a<sub>n</sub> = a₁ + (n − 1)·r = <b>' + cs(an) + '</b> · soma S<sub>n</sub> = n(a₁ + a<sub>n</sub>)/2 = <b>' + cs(sn) + '</b> (os extremos somam ' + cs(e.a1 + an) + ', n/2 pares).'; } });
  reg('pg', { alt: 'Barras de uma progressão geométrica com primeiro termo, razão e número de termos ajustáveis', leg: 'Em uma PG cada termo é o anterior multiplicado pela razão q. Veja o crescimento.', est: { a1: 1, q: 2, n: 6 },
    ctl: [{ r: 'a1', rot: 'a₁', min: 1, max: 5 }, { o: 'q', ops: [[.5, 'q = 1/2'], [2, 'q = 2'], [3, 'q = 3'], [-2, 'q = −2']] }, { r: 'n', rot: 'n (termos)', min: 3, max: 8 }],
    svg: function(e){ var v = seq(e.n, function(i){ return e.a1 * Math.pow(e.q, i); }), mx = Math.max.apply(null, v.map(Math.abs)), s = ln(16, 104, 304, 104, F, 1.5), bw = Math.min(30, 270 / e.n - 5), i, x, h;
      for(i = 0; i < e.n; i++){ x = 24 + i * (272 / e.n); h = v[i] / mx * 76; s += rc(x, h >= 0 ? 104 - h : 104, bw, Math.max(1.5, Math.abs(h)), i === 0 ? P : X, null, .85, 3) + tx(x + bw / 2, h >= 0 ? 104 - h - 4 : 104 + Math.abs(h) + 11, cs(Math.round(v[i] * 100) / 100), { z: 9, w: 700 }); if(i) s += tx(x - 3, 178, '×' + cs(e.q), { z: 8, c: F }); }
      return svg(320, 190, s + tx(160, 14, 'a₁ = ' + e.a1 + ' · razão q = ' + cs(e.q), { z: 10, c: F })); },
    lei: function(e){ var an = e.a1 * Math.pow(e.q, e.n - 1), sn = e.a1 * (Math.pow(e.q, e.n) - 1) / (e.q - 1); return 'a<sub>n</sub> = a₁·q<sup>n−1</sup> = <b>' + cs(Math.round(an * 1000) / 1000) + '</b> · S<sub>n</sub> = a₁(q<sup>n</sup> − 1)/(q − 1) = <b>' + cs(Math.round(sn * 1000) / 1000) + '</b>' + (Math.abs(e.q) < 1 ? ' · com |q| &lt; 1 os termos diminuem (a soma tende a ' + cs(e.a1 / (1 - e.q)) + ').' : '.'); } });

  // ---------- trigonometria: ciclo e onda ----------
  function fracPi(g){ var k = Math.round(g / 15), t = { 0: '0', 1: 'π/12', 2: 'π/6', 3: 'π/4', 4: 'π/3', 5: '5π/12', 6: 'π/2', 7: '7π/12', 8: '2π/3', 9: '3π/4', 10: '5π/6', 11: '11π/12', 12: 'π', 13: '13π/12', 14: '7π/6', 15: '5π/4', 16: '4π/3', 17: '17π/12', 18: '3π/2', 19: '19π/12', 20: '5π/3', 21: '7π/4', 22: '11π/6', 23: '23π/12', 24: '2π' }; return t[k]; }
  reg('ciclo', { alt: 'Círculo trigonométrico com o ângulo ajustável e os segmentos de seno, cosseno e tangente', leg: 'Gire o ponto no ciclo: o seno é a altura, o cosseno é o deslocamento horizontal.', est: { g: 30 },
    ctl: [{ r: 'g', rot: 'ângulo', min: 0, max: 360, passo: 15, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var cx0 = 120, cy0 = 96, R = 70, t = rad(e.g), px = cx0 + R * Math.cos(t), py = cy0 - R * Math.sin(t), s = '', tg = Math.tan(t);
      s += ln(cx0 - 90, cy0, cx0 + 92, cy0, F, 1.3) + ln(cx0, cy0 - 84, cx0, cy0 + 84, F, 1.3) + cir(cx0, cy0, R, 'none', L, 1.8);
      if(Math.abs(Math.cos(t)) > .05) s += ln(cx0 + R, cy0 - 84, cx0 + R, cy0 + 84, F, 1, DASH) + ln(cx0 + R, cy0, cx0 + R, cy0 - Math.max(-84, Math.min(84, R * tg)), X, 3);
      s += ln(cx0, cy0, px, py, INK, 2) + ln(px, py, px, cy0, G, 3.4) + ln(cx0, cy0, px, cy0, P, 3.4) + cir(px, py, 5.5, INK);
      s += '<path d="M' + (cx0 + 20) + ' ' + cy0 + ' A20 20 0 ' + (e.g > 180 ? 1 : 0) + ' 0 ' + (cx0 + 20 * Math.cos(t)).toFixed(1) + ' ' + (cy0 - 20 * Math.sin(t)).toFixed(1) + '" fill="none" stroke="' + INK + '" stroke-width="1.5"/>';
      s += tx(cx0 + 98, cy0 + 4, 'cos', { z: 10, c: P, a: 'start' }) + tx(cx0 + 4, cy0 - 88, 'sen', { z: 10, c: G, a: 'start' }) + tx(300, 40, 'sen = ' + cs(Math.round(Math.sin(t) * 1000) / 1000), { z: 10, c: G, a: 'end', w: 800 }) + tx(300, 56, 'cos = ' + cs(Math.round(Math.cos(t) * 1000) / 1000), { z: 10, c: P, a: 'end', w: 800 }) + tx(300, 72, Math.abs(Math.cos(t)) > .05 ? 'tg = ' + cs(Math.round(tg * 1000) / 1000) : 'tg não existe', { z: 10, c: X, a: 'end', w: 800 });
      return svg(320, 190, s); },
    lei: function(e){ var q = e.g === 0 ? '' : e.g < 90 ? '1º quadrante (+, +)' : e.g === 90 ? 'eixo vertical' : e.g < 180 ? '2º quadrante (sen +, cos −)' : e.g === 180 ? 'eixo horizontal' : e.g < 270 ? '3º quadrante (−, −)' : e.g === 270 ? 'eixo vertical' : e.g < 360 ? '4º quadrante (sen −, cos +)' : 'volta completa';
      return '<b>' + e.g + '° = ' + fracPi(e.g) + ' rad</b> · ' + (q || 'início') + ' · sen² + cos² = 1.'; } });
  reg('onda', { alt: 'Gráfico de seno ou cosseno com amplitude e período ajustáveis', leg: 'Mude a amplitude A e a frequência B: o gráfico estica na vertical e comprime na horizontal.', est: { f: 'sen', A: 1, B: 1 },
    ctl: [{ o: 'f', ops: [['sen', 'seno'], ['cos', 'cosseno']] }, { r: 'A', rot: 'A (amplitude)', min: .5, max: 3, passo: .5, fmt: cs }, { r: 'B', rot: 'B (frequência)', min: 1, max: 4, passo: 1 }],
    svg: function(e){ var p = plot(320, 190, -7, 7, -3.4, 3.4, 18), fn = e.f === 'sen' ? Math.sin : Math.cos, f = function(x){ return e.A * fn(e.B * x); }, s = p.eixos() + p.curva(f, P), i;
      for(i = -2; i <= 2; i++) if(i) s += tx(p.X(i * Math.PI), p.Y(0) + 13, (i === 1 ? '' : i === -1 ? '−' : i) + 'π', { z: 8, c: F });
      var T = 2 * Math.PI / e.B; s += ln(p.X(0), p.Y(-e.A) + 0, p.X(T), p.Y(-e.A), X, 2.4) + tx(p.X(T / 2), p.Y(-e.A) + 13, 'período', { z: 9, c: X });
      return svg(320, 190, s); },
    lei: function(e){ return 'f(x) = <b>' + (e.A === 1 ? '' : cs(e.A)) + (e.f === 'sen' ? 'sen' : 'cos') + '(' + (e.B === 1 ? '' : e.B) + 'x)</b> · amplitude <b>' + cs(e.A) + '</b> · período = 2π/B = <b>' + (e.B === 1 ? '2π' : '2π/' + e.B) + '</b> · imagem [−' + cs(e.A) + ' ; ' + cs(e.A) + ']'; } });

  // ---------- leis dos senos e dos cossenos ----------
  reg('leis', { alt: 'Triângulo com dois lados e o ângulo entre eles ajustáveis, mostrando o terceiro lado e as razões da lei dos senos', leg: 'Dois lados e o ângulo entre eles determinam o triângulo: o 3º lado vem da lei dos cossenos.', est: { a: 6, b: 5, C: 60 },
    ctl: [{ r: 'a', rot: 'lado a', min: 3, max: 9 }, { r: 'b', rot: 'lado b', min: 3, max: 9 }, { r: 'C', rot: 'ângulo C', min: 20, max: 160, passo: 5, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var t = rad(e.C), cc = Math.sqrt(e.a * e.a + e.b * e.b - 2 * e.a * e.b * Math.cos(t)), k = 12, C0 = [150, 150], B0 = [150 + e.a * k, 150], A0 = [150 + e.b * k * Math.cos(t), 150 - e.b * k * Math.sin(t)], dx = 40 - Math.min(C0[0], A0[0]), dy = -Math.max(0, Math.min(40, A0[1] - 24));
      function m(p){ return [p[0] + dx, p[1] + dy - 20]; } var c2 = m(C0), b2 = m(B0), a2 = m(A0);
      var s = pol([c2, b2, a2], P, INK, 2.2, .14) + tx(c2[0] - 10, c2[1] + 4, 'C', { z: 12, w: 800 }) + tx(b2[0] + 10, b2[1] + 4, 'B', { z: 12, w: 800 }) + tx(a2[0], a2[1] - 8, 'A', { z: 12, w: 800 }) + tx((c2[0] + b2[0]) / 2, c2[1] + 15, 'a = ' + e.a, { z: 10, c: P, w: 800 }) + tx((c2[0] + a2[0]) / 2 - 16, (c2[1] + a2[1]) / 2, 'b = ' + e.b, { z: 10, c: P, w: 800 }) + tx((b2[0] + a2[0]) / 2 + 24, (b2[1] + a2[1]) / 2, 'c = ' + cs(Math.round(cc * 100) / 100), { z: 10, c: X, w: 800 });
      return svg(320, 190, s + tx(c2[0] + 30, c2[1] - 6, e.C + '°', { z: 9, c: G })); },
    lei: function(e){ var t = rad(e.C), cc = Math.sqrt(e.a * e.a + e.b * e.b - 2 * e.a * e.b * Math.cos(t));
      return 'c² = a² + b² − 2ab·cos C → <b>c = ' + cs(Math.round(cc * 100) / 100) + '</b> · lei dos senos: a/sen A = b/sen B = c/sen C = <b>' + cs(Math.round(cc / Math.sin(t) * 100) / 100) + '</b> (= 2R).'; } });

  // ---------- Pitágoras ----------
  reg('pitagoras', { alt: 'Triângulo retângulo com quadrados sobre os três lados', leg: 'Mude os catetos: a área do quadrado da hipotenusa é sempre a soma das áreas dos outros dois.', est: { a: 3, b: 4 },
    ctl: [{ r: 'a', rot: 'cateto a', min: 1, max: 6 }, { r: 'b', rot: 'cateto b', min: 1, max: 6 }],
    svg: function(e){ var k = 14, x0 = 112, y0 = 120, A = [x0, y0], B = [x0 + e.b * k, y0], Cc = [x0, y0 - e.a * k], s = '';
      s += pol([A, B, [B[0], B[1] + e.b * k], [A[0], A[1] + e.b * k]], G, G, 1.5, .25) + pol([A, Cc, [Cc[0] - e.a * k, Cc[1]], [A[0] - e.a * k, A[1]]], P, P, 1.5, .22);
      var dx = B[0] - Cc[0], dy = B[1] - Cc[1], hl = Math.hypot(dx, dy), nx = dy / hl, ny = -dx / hl; s += pol([Cc, B, [B[0] + nx * hl, B[1] + ny * hl], [Cc[0] + nx * hl, Cc[1] + ny * hl]], X, X, 1.5, .2) + pol([A, B, Cc], 'none', INK, 2.4);
      s += tx(A[0] - e.a * k / 2, A[1] - e.a * k / 2 + 4, 'a² = ' + e.a * e.a, { z: 11, w: 800, c: P }) + tx(A[0] + e.b * k / 2, A[1] + e.b * k / 2 + 4, 'b² = ' + e.b * e.b, { z: 11, w: 800, c: G }) + tx((Cc[0] + B[0]) / 2 + nx * hl / 2, (Cc[1] + B[1]) / 2 + ny * hl / 2 + 4, 'c² = ' + (e.a * e.a + e.b * e.b), { z: 11, w: 800, c: X });
      return svg(320, 190, s); },
    lei: function(e){ var c2 = e.a * e.a + e.b * e.b, c = Math.sqrt(c2); return 'a² + b² = c² → ' + e.a * e.a + ' + ' + e.b * e.b + ' = <b>' + c2 + '</b> · hipotenusa <b>c = ' + (Number.isInteger(c) ? c + ' (terno pitagórico!)' : '√' + c2 + ' ≈ ' + cs(Math.round(c * 100) / 100)) + '</b>'; } });

  // ---------- estatística ----------
  reg('estat-dados', { alt: 'Gráfico de pontos com média, mediana e moda de um conjunto de dados que o aluno altera', leg: 'Adicione ou remova valores e veja média, mediana e moda se mexerem (a média é puxada por valores extremos).', est: { v: 7, d: [4, 6, 6, 7, 8, 9] },
    ctl: [{ r: 'v', rot: 'novo valor', min: 0, max: 15 }, { b: '＋ Adicionar o valor', fn: function(e){ if(e.d.length < 16) e.d.push(e.v); } }, { b: '− Remover o último', fn: function(e){ if(e.d.length > 1) e.d.pop(); } }, { b: '⟲ Valor extremo (15)', fn: function(e){ e.d = e.d.concat([15]).slice(-16); } }],
    svg: function(e){ var d = e.d.slice().sort(function(a, b){ return a - b; }), n = d.length, med = n % 2 ? d[(n - 1) / 2] : (d[n / 2 - 1] + d[n / 2]) / 2, mean = d.reduce(function(a, b){ return a + b; }, 0) / n, cnt = {}, mo = 0, i, s = ln(20, 140, 300, 140, F, 1.6);
      d.forEach(function(v){ cnt[v] = (cnt[v] || 0) + 1; if(cnt[v] > mo) mo = cnt[v]; });
      for(i = 0; i <= 15; i++) s += tx(20 + i * 18.6, 156, i, { z: 9, c: F }) + ln(20 + i * 18.6, 140, 20 + i * 18.6, 144, F, 1);
      Object.keys(cnt).forEach(function(k){ for(var j = 0; j < cnt[k]; j++) s += cir(20 + k * 18.6, 132 - j * 13, 6, +cnt[k] === mo && mo > 1 ? X : P, null, 0, .9); });
      s += ln(20 + med * 18.6, 24, 20 + med * 18.6, 140, G, 2.2, DASH) + tx(20 + med * 18.6, 18, 'mediana ' + cs(med), { z: 10, c: G, w: 800 }) + '<polygon points="' + (20 + mean * 18.6 - 7) + ',166 ' + (20 + mean * 18.6 + 7) + ',166 ' + (20 + mean * 18.6) + ',152" fill="' + INK + '"/>' + tx(20 + mean * 18.6, 182, 'média ' + cs(Math.round(mean * 100) / 100), { z: 10, w: 800 });
      return svg(320, 190, s); },
    lei: function(e){ var d = e.d.slice().sort(function(a, b){ return a - b; }), n = d.length, med = n % 2 ? d[(n - 1) / 2] : (d[n / 2 - 1] + d[n / 2]) / 2, mean = d.reduce(function(a, b){ return a + b; }, 0) / n, cnt = {}, mo = 0, modas = [];
      d.forEach(function(v){ cnt[v] = (cnt[v] || 0) + 1; mo = Math.max(mo, cnt[v]); }); Object.keys(cnt).forEach(function(k){ if(cnt[k] === mo && mo > 1) modas.push(k); });
      var dp = Math.sqrt(d.reduce(function(a, b){ return a + (b - mean) * (b - mean); }, 0) / n);
      return n + ' valores · <b>média ' + cs(Math.round(mean * 100) / 100) + '</b> · <b>mediana ' + cs(med) + '</b> · <b>moda ' + (modas.length ? modas.join(' e ') : 'não há') + '</b> · amplitude ' + (d[n - 1] - d[0]) + ' · desvio padrão ≈ ' + cs(Math.round(dp * 100) / 100); } });
  var POP = seq(100, function(i){ return (i * 37 + 11) % 100 < 30 ? 1 : 0; });
  reg('amostra', { alt: 'População de cem pontos e uma amostra sorteada', leg: 'Sorteie amostras de tamanhos diferentes: amostras maiores costumam se aproximar melhor da população.', est: { n: 10, s: [] },
    ctl: [{ r: 'n', rot: 'tamanho da amostra', min: 5, max: 60, passo: 5, ao: function(e){ e.s = []; } }, { b: '🎲 Sortear amostra', fn: function(e){ var idx = seq(100, function(i){ return i; }), o = [], k; while(o.length < e.n){ k = Math.floor(Math.random() * idx.length); o.push(idx.splice(k, 1)[0]); } e.s = o; } }],
    svg: function(e){ var s = '', i, x, y, sel = {}; e.s.forEach(function(k){ sel[k] = 1; });
      for(i = 0; i < 100; i++){ x = 40 + (i % 10) * 24; y = 22 + Math.floor(i / 10) * 17; s += cir(x, y, 6.5, POP[i] ? X : P, sel[i] ? INK : null, 2.4, sel[i] ? 1 : .35); }
      return svg(320, 200, s + tx(274, 60, '● 30%', { z: 10, c: X, a: 'start', w: 800 }) + tx(274, 76, '● 70%', { z: 10, c: P, a: 'start', w: 800 })); },
    lei: function(e){ if(!e.s.length) return 'População: 100 pontos, <b>30% vermelhos</b>. Sorteie uma amostra de ' + e.n + ' e compare.'; var v = e.s.filter(function(k){ return POP[k]; }).length; return 'Amostra de ' + e.s.length + ': <b>' + v + ' vermelhos = ' + cs(Math.round(v / e.s.length * 1000) / 10) + '%</b> (população: 30%). Sorteie de novo e veja a variação.'; } });

  // ---------- áreas e círculo ----------
  var AREA = { ret: 'retângulo', tri: 'triângulo', par: 'paralelogramo', tra: 'trapézio' };
  reg('areas', { alt: 'Figura plana sobre uma malha de quadradinhos com base e altura ajustáveis', leg: 'Escolha a figura e mude as medidas: a área é quanto cabe de quadradinhos 1 × 1.', est: { f: 'ret', b: 6, h: 4, b2: 3 },
    ctl: [{ o: 'f', ops: Object.keys(AREA).map(function(k){ return [k, AREA[k]]; }) }, { r: 'b', rot: 'base', min: 2, max: 9 }, { r: 'h', rot: 'altura', min: 1, max: 6 }, { r: 'b2', rot: 'base menor', min: 1, max: 9, max2: function(){ return 9; } }],
    svg: function(e){ var k = 24, x0 = 30, y0 = 150, i, s = '', b = e.b, h = e.h, b2 = Math.min(e.b2, b), off = e.f === 'tri' ? b / 2 : e.f === 'par' ? 1.5 : e.f === 'tra' ? (b - b2) / 2 : 0, pts;
      for(i = 0; i <= 11; i++) s += ln(x0 + i * k, y0, x0 + i * k, y0 - 6 * k, S2, 1) + (i <= 6 ? ln(x0, y0 - i * k, x0 + 11 * k, y0 - i * k, S2, 1) : '');
      pts = e.f === 'ret' ? [[0, 0], [b, 0], [b, h], [0, h]] : e.f === 'tri' ? [[0, 0], [b, 0], [b / 2, h]] : e.f === 'par' ? [[0, 0], [b, 0], [b + 1.5, h], [1.5, h]] : [[0, 0], [b, 0], [off + b2, h], [off, h]];
      s += pol(pts.map(function(p){ return [x0 + p[0] * k, y0 - p[1] * k]; }), P, P, 2.4, .3) + ln(x0 + off * k, y0, x0 + off * k, y0 - h * k, X, 2, DASH) + tx(x0 + b * k / 2, y0 + 14, 'b = ' + b, { z: 10, c: P, w: 800 }) + tx(x0 + off * k - 4, y0 - h * k / 2, 'h = ' + h, { z: 10, c: X, w: 800, a: 'end' });
      return svg(320, 176, s); },
    lei: function(e){ var b2 = Math.min(e.b2, e.b), A = e.f === 'ret' ? e.b * e.h : e.f === 'tri' ? e.b * e.h / 2 : e.f === 'par' ? e.b * e.h : (e.b + b2) * e.h / 2, fm = { ret: 'b · h', tri: 'b · h / 2', par: 'b · h', tra: '(B + b) · h / 2' }[e.f];
      return '<b>' + AREA[e.f] + '</b>: A = ' + fm + ' = <b>' + cs(A) + ' unidades de área</b>' + (e.f === 'tra' ? ' (B = ' + e.b + ', b = ' + b2 + ')' : '') + '.'; } });
  reg('circulo', { alt: 'Círculo de raio ajustável com a circunferência desenrolada em diâmetros', leg: 'Mude o raio e desenrole a circunferência: ela mede sempre π diâmetros, um pouco mais de 3.', est: { r: 3, m: 'c' },
    ctl: [{ r: 'r', rot: 'raio', min: 1, max: 5, passo: .5, fmt: cs }, { o: 'm', ops: [['c', 'círculo'], ['d', 'desenrolar']] }],
    svg: function(e){ var k = 17, r = e.r * k, s = '';
      if(e.m === 'c'){ s += cir(110, 90, r, P, P, 2.4, .2) + ln(110, 90, 110 + r, 90, X, 2.6) + cir(110, 90, 3, INK) + tx(110 + r / 2, 82, 'r = ' + cs(e.r), { z: 10, c: X, w: 800 }) + tx(250, 70, 'C = 2πr', { z: 12, w: 800, c: P }) + tx(250, 92, '= ' + cs(Math.round(2 * Math.PI * e.r * 100) / 100), { z: 12 }) + tx(250, 120, 'A = πr²', { z: 12, w: 800, c: G }) + tx(250, 142, '= ' + cs(Math.round(Math.PI * e.r * e.r * 100) / 100), { z: 12 }); }
      else { var C0 = 2 * Math.PI * r, sc = Math.min(1, 280 / C0), d = 2 * r * sc, i; s += cir(40 + r * sc, 54, r * sc, P, P, 2, .2) + ln(20, 120, 20 + C0 * sc, 120, P, 4);
        for(i = 0; i < 4; i++){ var x1 = 20 + i * d, x2 = Math.min(20 + (i + 1) * d, 20 + C0 * sc); if(x2 > x1) s += ln(x1, 132, x2, 132, i < 3 ? G : X, 5) + tx((x1 + x2) / 2, 148, i < 3 ? 'd' : (C0 / (2 * r) - 3 > .01 ? '0,14 d' : ''), { z: 10, c: i < 3 ? G : X, w: 800 }); }
        s += tx(160, 18, 'circunferência desenrolada: 3 diâmetros e mais 0,14 de um', { z: 10, c: F }); }
      return svg(320, 170, s); },
    lei: function(e){ return 'r = ' + cs(e.r) + ' → diâmetro ' + cs(2 * e.r) + ' · <b>C = 2πr ≈ ' + cs(Math.round(2 * Math.PI * e.r * 100) / 100) + '</b> = π · diâmetro (π ≈ 3,14) · <b>A = πr² ≈ ' + cs(Math.round(Math.PI * e.r * e.r * 100) / 100) + '</b>'; } });

  // ---------- volumes ----------
  var SOL = { cubo: 'cubo', prisma: 'prisma', cil: 'cilindro', cone: 'cone', pir: 'pirâmide', esf: 'esfera' };
  reg('volume', { alt: 'Sólido geométrico com as medidas ajustáveis e o cálculo do volume', leg: 'Escolha o sólido e mude as medidas: o volume mostra quanto cabe dentro dele.', est: { s: 'cil', r: 2, h: 4 },
    ctl: [{ o: 's', ops: Object.keys(SOL).map(function(k){ return [k, SOL[k]]; }) }, { r: 'r', rot: 'medida da base / raio', min: 1, max: 4 }, { r: 'h', rot: 'altura', min: 1, max: 6 }],
    svg: function(e){ var k = 17, cx0 = 160, y0 = 150, r = e.r * k, h = e.h * k, s = '', a = e.r * k * 1.4, d = a * .45;
      if(e.s === 'cubo'){ var q = e.r * k * 1.6; s += pol([[cx0 - q / 2, y0], [cx0 + q / 2, y0], [cx0 + q / 2, y0 - q], [cx0 - q / 2, y0 - q]], P, INK, 2, .2) + pol([[cx0 - q / 2, y0 - q], [cx0 + q / 2, y0 - q], [cx0 + q / 2 + q * .35, y0 - q - q * .3], [cx0 - q / 2 + q * .35, y0 - q - q * .3]], P, INK, 2, .35) + pol([[cx0 + q / 2, y0], [cx0 + q / 2 + q * .35, y0 - q * .3], [cx0 + q / 2 + q * .35, y0 - q - q * .3], [cx0 + q / 2, y0 - q]], P, INK, 2, .45); }
      else if(e.s === 'prisma'){ s += pol([[cx0 - a / 2, y0], [cx0 + a / 2, y0], [cx0 + a / 2, y0 - h], [cx0 - a / 2, y0 - h]], P, INK, 2, .2) + pol([[cx0 - a / 2, y0 - h], [cx0 + a / 2, y0 - h], [cx0 + a / 2 + d, y0 - h - d * .7], [cx0 - a / 2 + d, y0 - h - d * .7]], P, INK, 2, .35) + pol([[cx0 + a / 2, y0], [cx0 + a / 2 + d, y0 - d * .7], [cx0 + a / 2 + d, y0 - h - d * .7], [cx0 + a / 2, y0 - h]], P, INK, 2, .45); }
      else if(e.s === 'cil'){ s += rc(cx0 - r, y0 - h, 2 * r, h, P, null, .2) + '<ellipse cx="' + cx0 + '" cy="' + y0 + '" rx="' + r + '" ry="' + r * .32 + '" fill="' + P + '" fill-opacity=".3" stroke="' + INK + '" stroke-width="2"/>' + ln(cx0 - r, y0, cx0 - r, y0 - h, INK, 2) + ln(cx0 + r, y0, cx0 + r, y0 - h, INK, 2) + '<ellipse cx="' + cx0 + '" cy="' + (y0 - h) + '" rx="' + r + '" ry="' + r * .32 + '" fill="' + P + '" fill-opacity=".45" stroke="' + INK + '" stroke-width="2"/>'; }
      else if(e.s === 'cone'){ s += pol([[cx0 - r, y0], [cx0, y0 - h], [cx0 + r, y0]], P, INK, 2, .2) + '<ellipse cx="' + cx0 + '" cy="' + y0 + '" rx="' + r + '" ry="' + r * .32 + '" fill="' + P + '" fill-opacity=".35" stroke="' + INK + '" stroke-width="2"/>' + ln(cx0, y0, cx0, y0 - h, X, 2, DASH); }
      else if(e.s === 'pir'){ s += pol([[cx0 - a / 2, y0], [cx0 + a / 2, y0], [cx0 + a / 2 + d, y0 - d * .7], [cx0 - a / 2 + d, y0 - d * .7]], P, INK, 2, .25) + pol([[cx0 - a / 2, y0], [cx0 + a / 2, y0], [cx0 + d / 2, y0 - h]], P, INK, 2, .2) + pol([[cx0 + a / 2, y0], [cx0 + a / 2 + d, y0 - d * .7], [cx0 + d / 2, y0 - h]], P, INK, 2, .4) + ln(cx0 + d / 2, y0 - h, cx0 + d / 2, y0 - d * .35, X, 2, DASH); }
      else { var rr = e.r * k * 1.3; s += cir(cx0, y0 - rr, rr, P, INK, 2, .25) + '<ellipse cx="' + cx0 + '" cy="' + (y0 - rr) + '" rx="' + rr + '" ry="' + rr * .3 + '" fill="none" stroke="' + INK + '" stroke-width="1.4" stroke-dasharray="4 3"/>' + ln(cx0, y0 - rr, cx0 + rr, y0 - rr, X, 2.2); }
      return svg(320, 170, s); },
    lei: function(e){ var r = e.r, h = e.h, pi = Math.PI, o = {
        cubo: ['a³', Math.pow(r, 3), '6a²', 6 * r * r], prisma: ['a² · h (base quadrada de lado ' + r + ')', r * r * h, '2a² + 4ah', 2 * r * r + 4 * r * h], cil: ['π r² h', pi * r * r * h, '2πr(r + h)', 2 * pi * r * (r + h)],
        cone: ['π r² h / 3', pi * r * r * h / 3, 'πr(r + g)', pi * r * (r + Math.sqrt(r * r + h * h))], pir: ['a² · h / 3 (base quadrada de lado ' + r + ')', r * r * h / 3, 'a² + 2a·ap', r * r + 2 * r * Math.sqrt(h * h + r * r / 4)], esf: ['4π r³ / 3', 4 * pi * Math.pow(r * 1.0, 3) / 3, '4π r²', 4 * pi * r * r] }[e.s];
      return '<b>' + SOL[e.s] + '</b> · V = ' + o[0] + ' = <b>' + cs(Math.round(o[1] * 10) / 10) + '</b> · área total = ' + o[2] + ' ≈ ' + cs(Math.round(o[3] * 10) / 10) + (e.s === 'cubo' || e.s === 'esf' ? ' (a altura não é usada)' : ''); } });

  // ---------- porcentagem ----------
  reg('porcent', { alt: 'Grade de cem quadradinhos pintada conforme a porcentagem', leg: 'Porcentagem é “por cem”: pinte p quadradinhos de 100 e calcule p% de um valor.', est: { p: 25, B: 80, m: 'parte' },
    ctl: [{ r: 'p', rot: 'porcentagem', min: 0, max: 100, passo: 5, fmt: function(v){ return v + '%'; } }, { o: 'B', ops: [[80, 'valor 80'], [200, 'valor 200'], [50, 'valor 50']] }, { o: 'm', ops: [['parte', 'p% de B'], ['desc', 'desconto'], ['acr', 'acréscimo']] }],
    svg: function(e){ var s = '', i, x, y; for(i = 0; i < 100; i++){ x = 70 + (i % 10) * 15; y = 14 + Math.floor(i / 10) * 15; s += rc(x, y, 13, 13, i < e.p ? (e.m === 'desc' ? X : e.m === 'acr' ? G : P) : S2, null, 1, 2); }
      return svg(320, 176, s + tx(250, 70, e.p + '%', { z: 24, w: 900, c: P }) + tx(250, 92, '= ' + e.p + '/100', { z: 11, c: F }) + tx(250, 108, '= ' + cs(e.p / 100), { z: 11, c: F })); },
    lei: function(e){ var v = e.B * e.p / 100; return e.m === 'parte' ? e.p + '% de ' + e.B + ' = ' + e.B + ' × ' + cs(e.p / 100) + ' = <b>' + cs(v) + '</b>' : e.m === 'desc' ? 'Desconto de ' + e.p + '% em R$ ' + e.B + ': paga ' + e.B + ' × ' + cs(1 - e.p / 100) + ' = <b>R$ ' + cs(e.B - v) + '</b> (economiza R$ ' + cs(v) + ')' : 'Acréscimo de ' + e.p + '% em R$ ' + e.B + ': ' + e.B + ' × ' + cs(1 + e.p / 100) + ' = <b>R$ ' + cs(e.B + v) + '</b>'; } });

  // ---------- valor posicional, MMC/MDC, divisores, potências ----------
  reg('decimal', { alt: 'Quadro de ordens com centenas, dezenas, unidades, décimos e centésimos', leg: 'Mude o número e veja cada algarismo no seu lugar: cada casa vale 10 vezes a da direita.', est: { v: 2435 },
    ctl: [{ r: 'v', rot: 'número', min: 0, max: 99999, passo: 5, fmt: function(v){ return cs(v / 100); } }],
    svg: function(e){ var t = ('00000' + e.v).slice(-5), nome = ['centenas', 'dezenas', 'unidades', 'décimos', 'centésimos'], val = [100, 10, 1, .1, .01], s = '', i, x;
      for(i = 0; i < 5; i++){ x = 24 + i * 56 + (i > 2 ? 14 : 0); s += rc(x, 40, 48, 54, i > 2 ? S2 : SF, i > 2 ? X : P, 1, 8) + tx(x + 24, 78, t[i], { z: 30, w: 900, c: i > 2 ? X : P }) + tx(x + 24, 32, nome[i], { z: 8.5, c: F }) + tx(x + 24, 112, '×' + cs(val[i]), { z: 9, c: F }); if(i === 2) s += tx(x + 56 + 3, 80, ',', { z: 34, w: 900 }); }
      return svg(320, 130, s); },
    lei: function(e){ var t = ('00000' + e.v).slice(-5), v = e.v / 100; return '<b>' + cs(v) + '</b> = ' + [[0, 100], [1, 10], [2, 1], [3, .1], [4, .01]].filter(function(p){ return t[p[0]] !== '0'; }).map(function(p){ return t[p[0]] + '×' + cs(p[1]); }).join(' + ') + (v === 0 ? '0' : ''); } });
  function fatora(n){ var o = [], d = 2; while(n > 1 && d <= n){ while(n % d === 0){ o.push(d); n /= d; } d++; } return o; }
  function mdc(a, b){ return b ? mdc(b, a % b) : a; }
  reg('mmcmdc', { alt: 'Dois números decompostos em fatores primos com o MDC e o MMC', leg: 'Decomponha dois números em primos: o MDC fica com os fatores comuns; o MMC, com todos (o maior expoente).', est: { a: 12, b: 18 },
    ctl: [{ r: 'a', rot: 'número A', min: 2, max: 48 }, { r: 'b', rot: 'número B', min: 2, max: 48 }],
    svg: function(e){ var fa = fatora(e.a), fb = fatora(e.b), com = [], rest = fb.slice();
      fa.forEach(function(p){ var i = rest.indexOf(p); if(i >= 0){ com.push(p); rest.splice(i, 1); } });
      function linha(f, y, cor, rot){ var o = tx(12, y + 19, rot + ' =', { z: 12, a: 'start', w: 800 }), pool = com.slice(), i, k, isC; for(i = 0; i < f.length; i++){ k = pool.indexOf(f[i]); isC = k >= 0; if(isC) pool.splice(k, 1); o += rc(64 + i * 38, y, 32, 28, isC ? G : SF, cor, isC ? .25 : 1, 8) + tx(80 + i * 38, y + 19, f[i], { z: 14, w: 800, c: cor }); } return o; }
      return svg(320, 150, linha(fa, 22, P, e.a) + linha(fb, 72, X, e.b) + tx(160, 130, 'verde = fatores comuns (MDC)', { z: 9.5, c: G, w: 800 })); },
    lei: function(e){ var g = mdc(e.a, e.b), l = e.a * e.b / g; return 'MDC(' + e.a + ', ' + e.b + ') = <b>' + g + '</b> (maior divisor comum) · MMC(' + e.a + ', ' + e.b + ') = <b>' + l + '</b> (menor múltiplo comum) · MDC × MMC = ' + e.a + ' × ' + e.b + ' = ' + e.a * e.b + (g === 1 ? ' · são primos entre si!' : ''); } });
  reg('divisores', { alt: 'Retângulos de pontos mostrando todas as formas de organizar um número', leg: 'Arrume n pontos em retângulos: cada jeito é um par de divisores. Primos só têm um jeito (1 × n).', est: { n: 12 },
    ctl: [{ r: 'n', rot: 'número', min: 2, max: 36 }],
    svg: function(e){ var n = e.n, ds = [], d, s = '', y = 6, x; for(d = 1; d * d <= n; d++) if(n % d === 0) ds.push(d);
      var rows = 0; ds.forEach(function(a, k){ var b = n / a, sz = Math.min(11, 34 / Math.max(a, 1), 120 / b), i, j; x = k < 3 ? 14 : 170; y = k < 3 ? 18 + k * 56 : 18 + (k - 3) * 56; for(i = 0; i < a; i++) for(j = 0; j < b; j++) s += cir(x + j * (sz + 2) + sz / 2, y + i * (sz + 2) + sz / 2, sz / 2, P, null, 0, .85); s += tx(x + 2, y - 5, a + ' × ' + b, { z: 10, c: F, a: 'start', w: 800 }); });
      return svg(320, 190, s); },
    lei: function(e){ var n = e.n, dv = [], i; for(i = 1; i <= n; i++) if(n % i === 0) dv.push(i); return '<b>' + n + '</b> tem ' + dv.length + ' divisores: ' + dv.join(', ') + ' · ' + (dv.length === 2 ? '<b>número primo</b> (só 1 e ele mesmo)' : 'número composto: ' + fatora(n).join(' × ')); } });
  reg('potencia', { alt: 'Potência como área de um quadrado ou volume de um cubo', leg: 'Elevar ao quadrado é a área de um quadrado; ao cubo, o volume de um cubo. Mude a base e o expoente.', est: { a: 3, n: 2 },
    ctl: [{ r: 'a', rot: 'base a', min: 2, max: 5 }, { o: 'n', ops: [[0, 'a⁰'], [1, 'a¹'], [2, 'a²'], [3, 'a³'], [4, 'a⁴']] }],
    svg: function(e){ var s = '', a = e.a, n = e.n, i, j, k, sz = 18, x;
      if(n === 0) s += rc(146, 40, sz, sz, G, null, .8, 3) + tx(160, 82, 'só 1, sempre!', { z: 11, c: G, w: 800 });
      else if(n === 1) for(i = 0; i < a; i++) s += rc(160 - a * 11 + i * (sz + 3), 40, sz, sz, P, null, .85, 3);
      else if(n === 2) for(i = 0; i < a; i++) for(j = 0; j < a; j++) s += rc(160 - a * 10.5 + j * (sz + 3), 8 + i * (sz + 3) * .8, sz, sz * .8, P, null, .85, 3);
      else if(n === 3){ for(k = 0; k < a; k++) for(i = 0; i < a; i++) for(j = 0; j < a; j++) s += rc(160 - a * (a * 8 + 8) / 2 + k * (a * 8 + 8) + j * 8, 10 + i * 8, 6.5, 6.5, k % 2 ? G : P, null, .85, 1.5); s += tx(160, 70, a + ' camadas de ' + a + ' × ' + a, { z: 10, c: F }); }
      else s += tx(160, 50, a + ' × ' + a + ' × ' + a + ' × ' + a, { z: 18, w: 800, c: P }) + tx(160, 72, '= ' + Math.pow(a, 4), { z: 20, w: 900, c: G });
      for(i = 0; i <= 4; i++){ x = 40 + i * 60; s += rc(x - 26, 110, 52, 40, i === n ? P : SF, P, i === n ? .18 : 1, 8) + tx(x, 126, a + '' + ['⁰', '¹', '²', '³', '⁴'][i], { z: 11, c: F }) + tx(x, 143, Math.pow(a, i), { z: 12, w: 800, c: i === n ? P : INK }); }
      return svg(320, 160, s); },
    lei: function(e){ var v = Math.pow(e.a, e.n), t = e.n === 0 ? '1' : seq(e.n, function(){ return e.a; }).join(' × '); return '<b>' + e.a + '<sup>' + e.n + '</sup> = ' + t + ' = ' + v + '</b>' + (e.n === 2 ? ' · a raiz quadrada desfaz: √' + v + ' = ' + e.a : e.n === 3 ? ' · a raiz cúbica desfaz: ∛' + v + ' = ' + e.a : e.n === 0 ? ' · qualquer número (≠ 0) elevado a 0 vale 1' : ''); } });

  // ---------- álgebra: produtos notáveis ----------
  reg('algebra', { alt: 'Quadrado dividido em áreas que mostram um produto notável', leg: 'Os produtos notáveis são áreas: o quadrado da soma tem dois quadrados e dois retângulos.', est: { a: 4, b: 2, m: 'soma' },
    ctl: [{ o: 'm', ops: [['soma', '(a + b)²'], ['dif', '(a − b)²'], ['prod', '(a + b)(a − b)']] }, { r: 'a', rot: 'a', min: 2, max: 6 }, { r: 'b', rot: 'b', min: 1, max: 5 }],
    svg: function(e){ var k = 20, a = e.a, b = Math.min(e.b, a - 1), x0 = 70, y0 = 12, s = '';
      if(e.m === 'soma'){ s += rc(x0, y0, a * k, a * k, P, P, .3) + rc(x0 + a * k, y0, b * k, a * k, G, G, .3) + rc(x0, y0 + a * k, a * k, b * k, G, G, .3) + rc(x0 + a * k, y0 + a * k, b * k, b * k, X, X, .3) + tx(x0 + a * k / 2, y0 + a * k / 2 + 4, 'a²', { z: 14, w: 800, c: P }) + tx(x0 + a * k + b * k / 2, y0 + a * k / 2 + 4, 'ab', { z: 12, w: 800, c: G }) + tx(x0 + a * k / 2, y0 + a * k + b * k / 2 + 4, 'ab', { z: 12, w: 800, c: G }) + tx(x0 + a * k + b * k / 2, y0 + a * k + b * k / 2 + 4, 'b²', { z: 11, w: 800, c: X }); }
      else if(e.m === 'dif'){ s += rc(x0, y0, a * k, a * k, X, X, .2) + rc(x0, y0, (a - b) * k, (a - b) * k, P, P, .45) + tx(x0 + (a - b) * k / 2, y0 + (a - b) * k / 2 + 4, '(a−b)²', { z: 11, w: 800 }) + tx(x0 + a * k / 2, y0 + a * k + 15, 'quadrado de lado a menos 2ab + b²', { z: 9, c: F }); }
      else { s += rc(x0, y0, (a + b) * k, (a - b) * k, P, P, .3) + ln(x0 + a * k, y0, x0 + a * k, y0 + (a - b) * k, INK, 1.5) + tx(x0 + a * k / 2, y0 + (a - b) * k / 2 + 4, 'a(a−b)', { z: 11, w: 800 }) + tx(x0 + a * k + b * k / 2, y0 + (a - b) * k / 2 + 4, 'b', { z: 11, w: 800 }) + tx(x0 + (a + b) * k / 2, y0 + (a - b) * k + 16, 'largura a + b · altura a − b', { z: 9, c: F }); }
      return svg(320, 190, s); },
    lei: function(e){ var a = e.a, b = Math.min(e.b, a - 1); return e.m === 'soma' ? '(a + b)² = a² + 2ab + b² → (' + a + ' + ' + b + ')² = ' + (a + b) * (a + b) + ' = ' + a * a + ' + ' + 2 * a * b + ' + ' + b * b : e.m === 'dif' ? '(a − b)² = a² − 2ab + b² → (' + a + ' − ' + b + ')² = ' + (a - b) * (a - b) + ' = ' + a * a + ' − ' + 2 * a * b + ' + ' + b * b : '(a + b)(a − b) = a² − b² → ' + (a + b) + ' × ' + (a - b) + ' = ' + (a + b) * (a - b) + ' = ' + a * a + ' − ' + b * b; } });

  // ---------- sistemas, proporção ----------
  reg('sistema', { alt: 'Duas retas no plano cartesiano e o ponto onde se cruzam', leg: 'A solução de um sistema é o ponto onde as retas se cruzam. Mude os coeficientes e veja os casos.', est: { m1: 1, c1: 0, m2: -1, c2: 4 },
    ctl: [{ r: 'm1', rot: 'reta 1: inclinação', min: -3, max: 3, passo: .5, fmt: cs }, { r: 'c1', rot: 'reta 1: corte em y', min: -4, max: 6, fmt: cs }, { r: 'm2', rot: 'reta 2: inclinação', min: -3, max: 3, passo: .5, fmt: cs }, { r: 'c2', rot: 'reta 2: corte em y', min: -4, max: 6, fmt: cs }],
    svg: function(e){ var p = plot(320, 190, -6, 6, -5, 9, 18), s = p.eixos() + p.curva(function(x){ return e.m1 * x + e.c1; }, P) + p.curva(function(x){ return e.m2 * x + e.c2; }, X);
      if(e.m1 !== e.m2){ var x = (e.c2 - e.c1) / (e.m1 - e.m2), y = e.m1 * x + e.c1; if(Math.abs(x) <= 6 && y >= -5 && y <= 9) s += cir(p.X(x), p.Y(y), 6, G, SF, 2) + tx(p.X(x) + 9, p.Y(y) - 8, '(' + cs(Math.round(x * 100) / 100) + ' ; ' + cs(Math.round(y * 100) / 100) + ')', { z: 10, c: G, a: 'start', w: 800 }); }
      return svg(320, 190, s); },
    lei: function(e){ if(e.m1 === e.m2) return e.c1 === e.c2 ? 'As retas são a <b>mesma</b>: infinitas soluções (sistema indeterminado).' : 'Mesma inclinação, cortes diferentes: retas <b>paralelas</b>, sem solução (sistema impossível).'; var x = (e.c2 - e.c1) / (e.m1 - e.m2); return 'y = ' + cs(e.m1) + 'x ' + (e.c1 < 0 ? '− ' + cs(-e.c1) : '+ ' + e.c1) + ' e y = ' + cs(e.m2) + 'x ' + (e.c2 < 0 ? '− ' + cs(-e.c2) : '+ ' + e.c2) + ' → solução única <b>x = ' + cs(Math.round(x * 100) / 100) + ', y = ' + cs(Math.round((e.m1 * x + e.c1) * 100) / 100) + '</b>'; } });
  reg('proporcao', { alt: 'Duas grandezas lado a lado, em proporção direta ou inversa', leg: 'Direta: dobrando uma, a outra dobra. Inversa: dobrando uma, a outra cai pela metade.', est: { t: 'dir', k: 2 },
    ctl: [{ o: 't', ops: [['dir', 'direta (cadernos × preço)'], ['inv', 'inversa (operários × dias)']] }, { r: 'k', rot: 'multiplicar por', min: 1, max: 6 }],
    svg: function(e){ var s = '', a0 = e.t === 'dir' ? 2 : 6, b0 = e.t === 'dir' ? 10 : 12, a1 = a0 * e.k, b1 = e.t === 'dir' ? b0 * e.k : b0 / e.k, i, mx = Math.max(a1, a0, 6), my = Math.max(b0, b1);
      var lab = e.t === 'dir' ? ['cadernos', 'preço (R$)'] : ['operários', 'dias'];
      s += tx(80, 18, lab[0], { z: 11, w: 800, c: P }) + tx(240, 18, lab[1], { z: 11, w: 800, c: X });
      s += rc(30, 150 - a0 * 14, 24, a0 * 14, P, null, .35, 3) + rc(62, 150 - Math.min(a1, 10) * 14, 24, Math.min(a1, 10) * 14, P, null, .9, 3) + tx(42, 164, a0, { z: 11 }) + tx(74, 164, a1, { z: 11, w: 800 });
      var sc = 120 / Math.max(b0, b1, 1); s += rc(190, 150 - b0 * sc, 24, b0 * sc, X, null, .35, 3) + rc(222, 150 - b1 * sc, 24, Math.max(2, b1 * sc), X, null, .9, 3) + tx(202, 164, cs(b0), { z: 11 }) + tx(234, 164, cs(Math.round(b1 * 100) / 100), { z: 11, w: 800 });
      return svg(320, 176, s + tx(150, 100, '×' + e.k, { z: 16, w: 900, c: F }) + tx(268, 100, e.t === 'dir' ? '×' + e.k : '÷' + e.k, { z: 16, w: 900, c: F })); },
    lei: function(e){ return e.t === 'dir' ? '2 cadernos = R$ 10 → <b>' + 2 * e.k + ' cadernos = R$ ' + 10 * e.k + '</b> · a razão preço/cadernos é constante (5).' : '6 operários = 12 dias → <b>' + 6 * e.k + ' operários = ' + cs(Math.round(12 / e.k * 100) / 100) + ' dias</b> · o produto operários × dias é constante (72).'; } });

  // ---------- geometria ----------
  reg('angulo-inscrito', { alt: 'Circunferência com um ângulo central e um ângulo inscrito no mesmo arco', leg: 'O ângulo inscrito mede a metade do ângulo central que enxerga o mesmo arco.', est: { c: 100, p: 250 },
    ctl: [{ r: 'c', rot: 'ângulo central', min: 40, max: 160, passo: 10, fmt: function(v){ return v + '°'; } }, { r: 'p', rot: 'posição do vértice', min: 200, max: 340, passo: 10, fmt: function(v){ return v + '°'; } }],
    svg: function(e){ var O = [110, 96], R = 74, a1 = rad(90 - e.c / 2), a2 = rad(90 + e.c / 2), A = [O[0] + R * Math.cos(a1), O[1] - R * Math.sin(a1)], B = [O[0] + R * Math.cos(a2), O[1] - R * Math.sin(a2)], pp = rad(e.p), V = [O[0] + R * Math.cos(pp), O[1] - R * Math.sin(pp)];
      var s = cir(O[0], O[1], R, 'none', L, 2) + '<path d="M' + A[0].toFixed(1) + ' ' + A[1].toFixed(1) + ' A' + R + ' ' + R + ' 0 0 0 ' + B[0].toFixed(1) + ' ' + B[1].toFixed(1) + '" fill="none" stroke="' + X + '" stroke-width="5" stroke-linecap="round"/>' + ln(O[0], O[1], A[0], A[1], P, 2.4) + ln(O[0], O[1], B[0], B[1], P, 2.4) + ln(V[0], V[1], A[0], A[1], G, 2.4) + ln(V[0], V[1], B[0], B[1], G, 2.4) + cir(O[0], O[1], 3, INK) + cir(V[0], V[1], 5, G) + cir(A[0], A[1], 4, INK) + cir(B[0], B[1], 4, INK);
      return svg(320, 190, s + tx(250, 70, 'central = ' + e.c + '°', { z: 12, w: 800, c: P }) + tx(250, 94, 'inscrito = ' + e.c / 2 + '°', { z: 12, w: 800, c: G }) + tx(250, 120, 'arco = ' + e.c + '°', { z: 12, w: 800, c: X })); },
    lei: function(e){ return 'Ângulo central = arco = <b>' + e.c + '°</b> · ângulo inscrito = arco ÷ 2 = <b>' + e.c / 2 + '°</b>. Mexa no vértice: o inscrito <b>não muda</b> enquanto enxergar o mesmo arco.'; } });
  reg('tri-existe', { alt: 'Triângulo com três lados ajustáveis, que só existe se a desigualdade triangular valer', leg: 'Um lado precisa ser menor que a soma dos outros dois. Teste medidas e veja a classificação.', est: { a: 4, b: 5, c: 6 },
    ctl: [{ r: 'a', rot: 'lado a', min: 1, max: 10 }, { r: 'b', rot: 'lado b', min: 1, max: 10 }, { r: 'c', rot: 'lado c', min: 1, max: 10 }],
    svg: function(e){ var a = e.a, b = e.b, c2 = e.c, ok = a < b + c2 && b < a + c2 && c2 < a + b, k = 15, s;
      if(ok){ var x = (a * a + c2 * c2 - b * b) / (2 * c2), y = Math.sqrt(Math.max(0, a * a - x * x)), A = [40, 150], B = [40 + c2 * k, 150], Cc = [40 + x * k, 150 - y * k]; s = pol([A, B, Cc], P, INK, 2.4, .2) + tx((A[0] + B[0]) / 2, 166, 'c = ' + c2, { z: 10, c: P, w: 800 }) + tx((B[0] + Cc[0]) / 2 + 12, (B[1] + Cc[1]) / 2, 'a = ' + a, { z: 10, c: P, w: 800 }) + tx((A[0] + Cc[0]) / 2 - 12, (A[1] + Cc[1]) / 2, 'b = ' + b, { z: 10, c: P, w: 800 }); }
      else s = rc(20, 60, 280, 60, S2, X, 1, 12) + tx(160, 96, 'não forma triângulo', { z: 14, w: 800, c: X });
      return svg(320, 180, s); },
    lei: function(e){ var a = e.a, b = e.b, c = e.c, ok = a < b + c && b < a + c && c < a + b; if(!ok){ var m = Math.max(a, b, c), r = a + b + c - m; return '<b>Não existe:</b> o maior lado (' + m + ') não é menor que a soma dos outros dois (' + r + ').'; } var l = [a, b, c].sort(function(x, y){ return x - y; }), q = l[0] * l[0] + l[1] * l[1], z = l[2] * l[2];
      return 'Existe ✔ (cada lado &lt; soma dos outros) · <b>' + (a === b && b === c ? 'equilátero' : a === b || b === c || a === c ? 'isósceles' : 'escaleno') + '</b> · <b>' + (q === z ? 'retângulo' : q > z ? 'acutângulo' : 'obtusângulo') + '</b>'; } });
  var QUA = { quadrado: ['quadrado', 'quatro lados iguais e quatro ângulos retos; diagonais iguais, perpendiculares, no ponto médio.'], retangulo: ['retângulo', 'quatro ângulos retos; lados opostos iguais; diagonais iguais.'], paralelogramo: ['paralelogramo', 'lados opostos paralelos e iguais; diagonais se cortam no ponto médio.'], losango: ['losango', 'quatro lados iguais; diagonais perpendiculares e bissetrizes dos ângulos.'], trapezio: ['trapézio', 'um par de lados paralelos (as bases).'], pipa: ['pipa (papagaio)', 'dois pares de lados consecutivos iguais; diagonais perpendiculares.'] };
  reg('quadrilateros', { alt: 'Seis quadriláteros com as diagonais desenhadas', leg: 'Escolha um quadrilátero e observe lados, ângulos e diagonais.', est: { q: 'quadrado' },
    ctl: [{ o: 'q', ops: Object.keys(QUA).map(function(k){ return [k, QUA[k][0].split(' ')[0]]; }) }],
    svg: function(e){ var f = { quadrado: [[110, 30], [210, 30], [210, 130], [110, 130]], retangulo: [[90, 40], [230, 40], [230, 120], [90, 120]], paralelogramo: [[80, 120], [190, 120], [240, 40], [130, 40]], losango: [[160, 20], [230, 80], [160, 140], [90, 80]], trapezio: [[90, 120], [230, 120], [200, 40], [120, 40]], pipa: [[160, 14], [220, 70], [160, 146], [100, 70]] }[e.q];
      return svg(320, 160, pol(f, P, INK, 2.4, .18) + ln(f[0][0], f[0][1], f[2][0], f[2][1], X, 1.8, DASH) + ln(f[1][0], f[1][1], f[3][0], f[3][1], G, 1.8, DASH)); },
    lei: function(e){ return '<b>' + QUA[e.q][0] + '</b>: ' + QUA[e.q][1]; } });
  reg('plano-pontos', { alt: 'Dois pontos no plano cartesiano com a distância, o ponto médio e a inclinação', leg: 'Mova os pontos A e B: veja a distância, o ponto médio e a inclinação da reta.', est: { x1: 1, y1: 1, x2: 5, y2: 4 },
    ctl: [{ r: 'x1', rot: 'A: x', min: -4, max: 6, fmt: cs }, { r: 'y1', rot: 'A: y', min: -3, max: 6, fmt: cs }, { r: 'x2', rot: 'B: x', min: -4, max: 6, fmt: cs }, { r: 'y2', rot: 'B: y', min: -3, max: 6, fmt: cs }],
    svg: function(e){ var p = plot(320, 190, -5, 7, -4, 7, 18), mx = (e.x1 + e.x2) / 2, my = (e.y1 + e.y2) / 2, s = p.eixos() + ln(p.X(e.x1), p.Y(e.y1), p.X(e.x2), p.Y(e.y2), P, 2.6) + ln(p.X(e.x1), p.Y(e.y1), p.X(e.x2), p.Y(e.y1), F, 1.4, DASH) + ln(p.X(e.x2), p.Y(e.y1), p.X(e.x2), p.Y(e.y2), F, 1.4, DASH);
      s += cir(p.X(e.x1), p.Y(e.y1), 5.5, P) + tx(p.X(e.x1) - 8, p.Y(e.y1) - 8, 'A', { z: 11, w: 800 }) + cir(p.X(e.x2), p.Y(e.y2), 5.5, P) + tx(p.X(e.x2) + 9, p.Y(e.y2) - 8, 'B', { z: 11, w: 800 }) + cir(p.X(mx), p.Y(my), 4.5, G) + tx(p.X(mx) + 8, p.Y(my) + 14, 'M', { z: 10, c: G, w: 800 });
      return svg(320, 190, s); },
    lei: function(e){ var dx = e.x2 - e.x1, dy = e.y2 - e.y1, d = Math.hypot(dx, dy); return 'd(A,B) = √(' + dx + '² + ' + dy + '²) = <b>' + (Number.isInteger(d) ? d : '√' + (dx * dx + dy * dy) + ' ≈ ' + cs(Math.round(d * 100) / 100)) + '</b> · ponto médio M = <b>(' + cs((e.x1 + e.x2) / 2) + ' ; ' + cs((e.y1 + e.y2) / 2) + ')</b> · inclinação ' + (dx === 0 ? 'não existe (reta vertical)' : '<b>' + cs(Math.round(dy / dx * 100) / 100) + '</b>'); } });
  reg('conicas', { alt: 'Elipse, parábola, hipérbole ou circunferência com focos', leg: 'As cônicas aparecem ao cortar um cone. Escolha a curva e mude os parâmetros.', est: { t: 'el', a: 4, b: 3 },
    ctl: [{ o: 't', ops: [['ci', 'circunferência'], ['el', 'elipse'], ['pa', 'parábola'], ['hi', 'hipérbole']] }, { r: 'a', rot: 'a', min: 2, max: 5 }, { r: 'b', rot: 'b', min: 1, max: 4 }],
    svg: function(e){ var p = plot(320, 190, -7, 7, -5, 5, 16), s = p.eixos(), a = e.a, b = e.t === 'ci' ? e.a : e.b, i, d;
      if(e.t === 'ci' || e.t === 'el'){ d = ''; for(i = 0; i <= 90; i++){ d += (i ? 'L' : 'M') + p.X(a * Math.cos(i * Math.PI / 45)).toFixed(1) + ' ' + p.Y(b * Math.sin(i * Math.PI / 45)).toFixed(1); } s += '<path d="' + d + 'Z" fill="none" stroke="' + P + '" stroke-width="3"/>'; var cc = Math.sqrt(Math.abs(a * a - b * b)); if(e.t === 'el') s += cir(p.X(a >= b ? cc : 0), p.Y(a >= b ? 0 : cc), 4.5, X) + cir(p.X(a >= b ? -cc : 0), p.Y(a >= b ? 0 : -cc), 4.5, X); else s += cir(p.X(0), p.Y(0), 4.5, X); }
      else if(e.t === 'pa'){ s += p.curva(function(x){ return x * x / (4 * (e.b / 2 + .5)); }, P) + cir(p.X(0), p.Y(e.b / 2 + .5), 4.5, X) + ln(p.X(-7), p.Y(-(e.b / 2 + .5)), p.X(7), p.Y(-(e.b / 2 + .5)), X, 1.6, DASH); }
      else { var d1 = '', d2 = '', y; for(i = -40; i <= 40; i++){ y = i / 10 * b / 2; d1 += (i > -40 ? 'L' : 'M') + p.X(a * Math.sqrt(1 + y * y / (b * b))).toFixed(1) + ' ' + p.Y(y).toFixed(1); d2 += (i > -40 ? 'L' : 'M') + p.X(-a * Math.sqrt(1 + y * y / (b * b))).toFixed(1) + ' ' + p.Y(y).toFixed(1); } s += '<path d="' + d1 + '" fill="none" stroke="' + P + '" stroke-width="3"/><path d="' + d2 + '" fill="none" stroke="' + P + '" stroke-width="3"/>' + cir(p.X(Math.sqrt(a * a + b * b)), p.Y(0), 4.5, X) + cir(p.X(-Math.sqrt(a * a + b * b)), p.Y(0), 4.5, X); }
      return svg(320, 190, s); },
    lei: function(e){ var a = e.a, b = e.t === 'ci' ? e.a : e.b; return e.t === 'ci' ? 'Circunferência: x² + y² = ' + a * a + ' · todos os pontos a ' + a + ' do centro (o foco).' : e.t === 'el' ? 'Elipse: x²/' + a * a + ' + y²/' + b * b + ' = 1 · a soma das distâncias aos <b>dois focos</b> é constante (2·' + Math.max(a, b) + ').' : e.t === 'pa' ? 'Parábola: pontos à mesma distância do <b>foco</b> e da <b>reta diretriz</b> (pontilhada).' : 'Hipérbole: x²/' + a * a + ' − y²/' + b * b + ' = 1 · a diferença das distâncias aos focos é constante.'; } });

  // ---------- contagem, probabilidade, juros ----------
  reg('combinatoria', { alt: 'Diagrama de árvore com camisetas e calças', leg: 'Princípio multiplicativo: cada escolha da 1ª etapa se combina com todas as da 2ª.', est: { m: 2, n: 3 },
    ctl: [{ r: 'm', rot: 'camisetas', min: 1, max: 4 }, { r: 'n', rot: 'calças', min: 1, max: 4 }],
    svg: function(e){ var s = '', i, j, cor = ['#2563eb', '#dc2626', '#16a34a', '#ea580c'], tot = e.m * e.n, passo = tot > 1 ? 150 / (tot - 1) : 0, y0 = tot > 1 ? 20 : 95, yr = 95;
      s += cir(26, yr, 5, INK) + tx(26, yr + 18, 'início', { z: 9, c: F });
      for(i = 0; i < e.m; i++){ var ys = y0 + (i * e.n + (e.n - 1) / 2) * passo; s += ln(26, yr, 112, ys, cor[i], 2) + cir(112, ys, 4, cor[i]) + tx(104, ys - 8, '👕' + (i + 1), { z: 11, a: 'end' });
        for(j = 0; j < e.n; j++){ var yj = y0 + (i * e.n + j) * passo; s += ln(112, ys, 222, yj, cor[i], 1.4) + cir(222, yj, 3.5, cor[i]) + tx(232, yj + 3, '👕' + (i + 1) + ' 👖' + (j + 1), { z: 9, a: 'start' }); } }
      return svg(320, 190, s); },
    lei: function(e){ return e.m + ' camisetas × ' + e.n + ' calças = <b>' + e.m * e.n + ' conjuntos diferentes</b> (princípio multiplicativo).'; } });
  reg('probabilidade', { alt: 'Frequência relativa de resultados de lançamentos de moeda ou dado', leg: 'Lance muitas vezes: a frequência observada se aproxima da probabilidade teórica (lei dos grandes números).', est: { o: 'moeda', c: {} , n: 0 },
    ctl: [{ o: 'o', ops: [['moeda', '🪙 moeda'], ['dado', '🎲 dado']], }, { b: 'Lançar 1×', fn: function(e){ lanca(e, 1); } }, { b: 'Lançar 10×', fn: function(e){ lanca(e, 10); } }, { b: 'Lançar 500×', fn: function(e){ lanca(e, 500); } }, { b: 'Zerar', fn: function(e){ e.c = {}; e.n = 0; } }],
    svg: function(e){ var N = e.ult === e.o ? e.n : 0, CC = N ? e.c : {}, k = e.o === 'moeda' ? 2 : 6, s = ln(24, 140, 300, 140, F, 1.5), th = 1 / k, i, bw = 270 / k - 8, x, h, f, lab = e.o === 'moeda' ? ['cara', 'coroa'] : ['1', '2', '3', '4', '5', '6'];
      s += ln(24, 140 - th * 200, 300, 140 - th * 200, X, 1.8, DASH) + tx(298, 140 - th * 200 - 5, 'teórica ' + cs(Math.round(th * 1000) / 10) + '%', { z: 9, c: X, a: 'end', w: 800 });
      for(i = 0; i < k; i++){ x = 28 + i * (276 / k); f = N ? (CC[i] || 0) / N : 0; h = f * 200; s += rc(x, 140 - h, bw, h, P, null, .85, 3) + tx(x + bw / 2, 156, lab[i], { z: 11 }) + (N ? tx(x + bw / 2, 140 - h - 4, cs(Math.round(f * 1000) / 10) + '%', { z: 9, w: 700 }) : ''); }
      return svg(320, 170, s); },
    lei: function(e){ return e.ult === e.o && e.n ? '<b>' + e.n + ' lançamentos</b>: as barras se aproximam da linha tracejada (' + (e.o === 'moeda' ? '50%' : '16,7%') + ') quanto mais você lança.' : 'Probabilidade teórica de cada resultado: <b>' + (e.o === 'moeda' ? '1/2 = 50%' : '1/6 ≈ 16,7%') + '</b>. Lance e compare.'; } });
  function lanca(e, n){ var k = e.o === 'moeda' ? 2 : 6, i; if(e.ult !== e.o || !e.c){ e.c = {}; e.n = 0; e.ult = e.o; } for(i = 0; i < n; i++){ var r = Math.floor(Math.random() * k); e.c[r] = (e.c[r] || 0) + 1; } e.n = (e.n || 0) + n; }
  reg('juros-comp', { alt: 'Comparação entre juros simples e compostos ao longo dos meses', leg: 'Juros compostos rendem “juros sobre juros”: com o tempo, ganham dos simples.', est: { t: 12, i: 3 },
    ctl: [{ r: 't', rot: 'meses', min: 1, max: 36 }, { r: 'i', rot: 'taxa ao mês', min: 1, max: 8, fmt: function(v){ return v + '%'; } }],
    svg: function(e){ var simples = function(t){ return 1000 * (1 + e.i / 100 * t); }, comp = function(t){ return 1000 * Math.pow(1 + e.i / 100, t); }, my = Math.max(comp(36), simples(36)), p = plot(320, 190, 0, 36, 900, Math.min(my, 4200), 24), s = ln(p.X(0), p.Y(900), p.X(36), p.Y(900), F, 1.5) + ln(p.X(0), p.Y(900), p.X(0), p.Y(Math.min(my, 4200)), F, 1.5) + tx(p.X(36), p.Y(900) + 14, 'meses', { z: 9, c: F, a: 'end' }) + tx(p.X(0) + 4, p.Y(Math.min(my, 4200)) + 4, 'R$', { z: 9, c: F, a: 'start' });
      s += p.curva(simples, P) + p.curva(comp, X) + cir(p.X(e.t), p.Y(Math.min(simples(e.t), 4200)), 5, P) + cir(p.X(e.t), p.Y(Math.min(comp(e.t), 4200)), 5, X) + tx(60, 18, 'simples', { z: 10, c: P, w: 800 }) + tx(130, 18, 'compostos', { z: 10, c: X, w: 800 });
      return svg(320, 190, s); },
    lei: function(e){ var a = 1000 * (1 + e.i / 100 * e.t), b = 1000 * Math.pow(1 + e.i / 100, e.t); return 'R$ 1.000 a ' + e.i + '% ao mês por ' + e.t + ' meses · <b>simples: R$ ' + cs(Math.round(a * 100) / 100) + '</b> (M = C(1 + i·t)) · <b>compostos: R$ ' + cs(Math.round(b * 100) / 100) + '</b> (M = C(1 + i)<sup>t</sup>) · diferença R$ ' + cs(Math.round((b - a) * 100) / 100); } });
})();
