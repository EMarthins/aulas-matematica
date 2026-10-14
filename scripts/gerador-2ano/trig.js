// Figuras (SVG estático, lado Node) e JS de página (widgets) de trigonometria para a Matemática · 2ª série (2º tri).
// uso:  const T = require('./trig.js');   T.figTri({...}), T.figRet({...}), T.figCirc({...}), T.figOnda({...}),  e TJS dentro do `extra` do deck.
const K = require('./kit.js');
const { svg, ln, pg, ci, dot, tx, txu } = K;
const f1 = v => +(+v).toFixed(1);
const pt = v => String(+(+v).toFixed(2)).replace('.', ',').replace('-', '−');
const rad = d => d * Math.PI / 180;

/** Triângulo qualquer a partir dos três lados (a oposto a A, b a B, c a C). Vértices A, B, C rotulados; medidas opcionais em `rot`. */
function figTri({ a, b, c, w = 300, h = 170, rotulos = ['A', 'B', 'C'], lados = null, angulos = null, cor = 'var(--primary)', fill = 'var(--primary-soft)', max = '' }) {
  // B na origem, C em (a, 0), A acima
  const x = (a * a + c * c - b * b) / (2 * a), y = Math.sqrt(Math.max(0, c * c - x * x));
  const pts = { A: [x, y], B: [0, 0], C: [a, 0] };
  const xs = [x, 0, a], minx = Math.min(...xs), maxx = Math.max(...xs), pad = 34;
  const k = Math.min((w - 2 * pad) / (maxx - minx || 1), (h - 2 * pad) / (y || 1));
  const P = n => [f1(pad + (pts[n][0] - minx) * k + ((w - 2 * pad) - (maxx - minx) * k) / 2), f1(h - pad - pts[n][1] * k + ((h - 2 * pad) - y * k) / 2 * 0)];
  const A = P('A'), B = P('B'), C = P('C');
  let s = pg([A, B, C], fill, cor, 2.4);
  const ctr = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  const fora = (p, d = 15) => { const dx = p[0] - ctr[0], dy = p[1] - ctr[1], n = Math.hypot(dx, dy) || 1; return [f1(p[0] + dx / n * d), f1(p[1] + dy / n * d + 5)]; };
  const nome = (p, t) => { const q = fora(p); return tx(q[0], q[1], t, 'var(--ink)', 15); };
  s += nome(A, rotulos[0]) + nome(B, rotulos[1]) + nome(C, rotulos[2]);
  const meio = (p, q, t, d = 14) => { const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], dx = m[0] - ctr[0], dy = m[1] - ctr[1], n = Math.hypot(dx, dy) || 1; return txu(f1(m[0] + dx / n * d), f1(m[1] + dy / n * d + 4), t, 'var(--decay)', 12); };
  if (lados) { // lados: {a:'texto', b:'texto', c:'texto'}
    if (lados.a) s += meio(B, C, lados.a); if (lados.b) s += meio(A, C, lados.b); if (lados.c) s += meio(A, B, lados.c);
  }
  if (angulos) { // angulos: {A:'texto', B:..., C:...} dentro do vértice
    const dentro = (p, t) => { const dx = ctr[0] - p[0], dy = ctr[1] - p[1], n = Math.hypot(dx, dy) || 1; return txu(f1(p[0] + dx / n * 26), f1(p[1] + dy / n * 26 + 4), t, 'var(--growth)', 12); };
    if (angulos.A) s += dentro(A, angulos.A); if (angulos.B) s += dentro(B, angulos.B); if (angulos.C) s += dentro(C, angulos.C);
  }
  return svg(w, h, s, max || w + 'px');
}

/** Triângulo retângulo com o ângulo θ em B (esquerda) e o ângulo reto em C. */
function figRet({ co = 3, ca = 4, w = 280, h = 170, ang = 'θ', rotCO = 'cateto oposto', rotCA = 'cateto adjacente', rotH = 'hipotenusa', cor = 'var(--primary)', fill = 'var(--primary-soft)', max = '' }) {
  const pad = 36, k = Math.min((w - 2 * pad) / ca, (h - 2 * pad) / co);
  const B = [f1(pad + ((w - 2 * pad) - ca * k) / 2), f1(h - pad)], C = [f1(B[0] + ca * k), B[1]], A = [C[0], f1(B[1] - co * k)];
  let s = pg([A, B, C], fill, cor, 2.4);
  s += `<path d="M${C[0] - 11},${C[1]} L${C[0] - 11},${C[1] - 11} L${C[0]},${C[1] - 11}" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`;
  s += tx(f1(B[0] + 34), f1(B[1] - 7), ang, 'var(--growth)', 17);
  s += txu(f1(C[0] + 8), f1((A[1] + C[1]) / 2 + 4), rotCO, 'var(--decay)', 11, 'start');
  s += txu(f1((B[0] + C[0]) / 2), f1(B[1] + 17), rotCA, 'var(--success)', 11);
  s += txu(f1((A[0] + B[0]) / 2 - 10), f1((A[1] + B[1]) / 2 - 8), rotH, 'var(--primary)', 11, 'end');
  return svg(w, h, s, max || w + 'px');
}

/** Circunferência trigonométrica com um arco de `deg` graus. mostra: lista de 'sen' | 'cos' | 'tan'. */
function figCirc({ deg = 50, w = 280, h = 250, mostra = ['sen', 'cos'], quadrantes = false, max = '' }) {
  const cx = w / 2, cy = h / 2 + 2, R = Math.min(w, h) / 2 - 36, a = rad(deg);
  const X = v => f1(cx + v * R), Y = v => f1(cy - v * R);
  let s = ci(cx, cy, R, 'var(--surface)', 'var(--ink-soft)', 1.6);
  s += ln(cx - R - 14, cy, cx + R + 14, cy, 'var(--ink-soft)', 1.4) + ln(cx, cy - R - 14, cx, cy + R + 14, 'var(--ink-soft)', 1.4);
  if (quadrantes) s += txu(X(.55), Y(.55), '1º', 'var(--ink-faint)', 12) + txu(X(-.55), Y(.55), '2º', 'var(--ink-faint)', 12) + txu(X(-.55), Y(-.6), '3º', 'var(--ink-faint)', 12) + txu(X(.55), Y(-.6), '4º', 'var(--ink-faint)', 12);
  const c = Math.cos(a), sn = Math.sin(a);
  if (mostra.includes('tan') && Math.abs(c) > 0.08) {
    s += ln(X(1), Y(-1.3), X(1), Y(1.3), 'var(--line-strong)', 1.2);
    const t = Math.tan(a); if (Math.abs(t) <= 1.3) { s += ln(cx, cy, X(1), Y(t), 'var(--success)', 2, 'stroke-dasharray="4 3"') + ln(X(1), Y(0), X(1), Y(t), 'var(--success)', 3.2) + dot(X(1), Y(t), 'var(--success)', 4); }
  }
  s += ln(cx, cy, X(c), Y(sn), 'var(--primary)', 2.8);
  if (mostra.includes('sen')) s += ln(X(c), Y(0), X(c), Y(sn), 'var(--decay)', 3.4);
  if (mostra.includes('cos')) s += ln(cx, Y(0), X(c), Y(0), 'var(--growth)', 3.4);
  s += dot(X(c), Y(sn), 'var(--primary)', 5);
  // arco do ângulo
  const r2 = 22, n = Math.max(4, Math.round(Math.abs(deg) / 10)), pts = [];
  for (let i = 0; i <= n; i++) { const t = a * i / n; pts.push(f1(cx + r2 * Math.cos(t)) + ',' + f1(cy - r2 * Math.sin(t))); }
  s += `<polyline points="${pts.join(' ')}" fill="none" stroke="var(--growth)" stroke-width="2"/>`;
  s += tx(f1(cx + 38 * Math.cos(a / 2)), f1(cy - 38 * Math.sin(a / 2) + 5), 'α', 'var(--growth)', 15);
  s += txu(f1(cx + R + 14), f1(cy + 15), '1', 'var(--ink-faint)', 11) + txu(f1(cx - R - 4), f1(cy + 15), '−1', 'var(--ink-faint)', 11) + txu(f1(cx + 12), f1(cy - R - 4), '1', 'var(--ink-faint)', 11, 'start') + txu(f1(cx + 12), f1(cy + R + 12), '−1', 'var(--ink-faint)', 11, 'start');
  return svg(w, h, s, max || w + 'px');
}

/** Gráfico de uma função trigonométrica (f recebe radianos). Eixo x em múltiplos de π/2. */
function figOnda({ f, xmin = 0, xmax = 2 * Math.PI, ymin = -1.4, ymax = 1.4, w = 340, h = 190, cor = 'var(--primary)', passoY = 1, passoX = Math.PI / 2, marcas = [], max = '', tracejadas = [] }) {
  const L = 34, R = 12, T = 12, B = 26;
  const X = x => f1(L + (x - xmin) / (xmax - xmin) * (w - L - R)), Y = y => f1(h - B - (y - ymin) / (ymax - ymin) * (h - T - B));
  let s = '';
  const rot = k => { // rótulo em π
    const n = Math.round(k * 2); // múltiplos de π/2
    if (n === 0) return '0'; const sg = n < 0 ? '−' : ''; const m = Math.abs(n);
    if (m === 1) return sg + 'π/2'; if (m === 2) return sg + 'π'; if (m % 2 === 0) return sg + (m / 2 === 1 ? '' : m / 2) + 'π'; return sg + m + 'π/2';
  };
  const k0 = Math.ceil(xmin / passoX - 1e-9), k1 = Math.floor(xmax / passoX + 1e-9);
  for (let k = k0; k <= k1; k++) { const x = k * passoX; s += ln(X(x), Y(ymin), X(x), Y(ymax), 'var(--line)', 1); if (Math.abs(x) > 1e-9) s += txu(X(x), Y(0) + 14, rot(x / Math.PI), 'var(--ink-faint)', 10); }
  for (let y = Math.ceil(ymin / passoY - 1e-9); y <= Math.floor(ymax / passoY + 1e-9); y++) { const v = y * passoY; s += ln(X(xmin), Y(v), X(xmax), Y(v), 'var(--line)', 1); if (Math.abs(v) > 1e-9) s += txu(X(0) - 5, Y(v) + 4, pt(v), 'var(--ink-faint)', 10, 'end'); }
  s += ln(X(xmin), Y(0), X(xmax), Y(0), 'var(--ink-soft)', 1.6) + ln(X(Math.min(Math.max(0, xmin), xmax)), Y(ymin), X(Math.min(Math.max(0, xmin), xmax)), Y(ymax), 'var(--ink-soft)', 1.6);
  tracejadas.forEach(([yy, cc]) => { s += ln(X(xmin), Y(yy), X(xmax), Y(yy), cc || 'var(--growth)', 1.6, 'stroke-dasharray="5 4"'); });
  const pts = []; for (let i = 0; i <= 200; i++) { const x = xmin + (xmax - xmin) * i / 200, y = f(x); if (isFinite(y) && y >= ymin - 0.5 && y <= ymax + 0.5) pts.push(X(x) + ',' + Y(y)); }
  s += `<polyline points="${pts.join(' ')}" fill="none" stroke="${cor}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
  marcas.forEach(([x, y, t, dx = 8, dy = -8]) => { s += dot(X(x), Y(y), 'var(--decay)', 4.5) + (t ? txu(X(x) + dx, Y(y) + dy, t, 'var(--decay)', 11, dx < 0 ? 'end' : 'start') : ''); });
  return svg(w, h, s, max || w + 'px');
}

// ---------------------------------------------------------------- JS de página (widgets) ----------------------------------------------------------------
const TJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
  function rad(d){ return d * Math.PI / 180; }
  function grau(r){ return r * 180 / Math.PI; }
  function linhaS(svg, x1, y1, x2, y2, cor, w, tr){ return el('line', {x1: x1, y1: y1, x2: x2, y2: y2, stroke: cor, 'stroke-width': w || 2, 'stroke-linecap': 'round', 'stroke-dasharray': tr || ''}, svg); }
  function textoS(svg, x, y, t, cor, tam, anc){ var e = el('text', {x: x, y: y, fill: cor || 'var(--ink)', 'font-size': tam || 13, 'font-weight': 700, 'text-anchor': anc || 'middle'}, svg); e.textContent = t; return e; }
  // circunferência trigonométrica interativa (deg em graus); mostra seno (vertical), cosseno (horizontal) e tangente
  function circW(svg, deg, opc){
    opc = opc || {}; var W = 300, H = 270, cx = W / 2, cy = H / 2 + 2, R = 100, a = rad(deg), c = Math.cos(a), s = Math.sin(a);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var X = function(v){ return cx + v * R; }, Y = function(v){ return cy - v * R; };
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    linhaS(svg, cx - R - 16, cy, cx + R + 16, cy, 'var(--ink-soft)', 1.4); linhaS(svg, cx, cy - R - 16, cx, cy + R + 16, 'var(--ink-soft)', 1.4);
    [0, 90, 180, 270].forEach(function(g){ var q = rad(g); textoS(svg, X(1.2 * Math.cos(q)) + (g === 0 ? 6 : g === 180 ? -6 : 0), Y(1.2 * Math.sin(q)) + (g === 90 ? -2 : g === 270 ? 12 : 4), g + '°', 'var(--ink-faint)', 10); });
    if(opc.tan && Math.abs(c) > 0.02){ linhaS(svg, X(1), cy - R * 1.6, X(1), cy + R * 1.6, 'var(--line-strong)', 1.2); var t = s / c; if(Math.abs(t) <= 1.6){ linhaS(svg, cx, cy, X(1), Y(t), 'var(--success)', 1.6, '4 3'); linhaS(svg, X(1), cy, X(1), Y(t), 'var(--success)', 3.4); } }
    linhaS(svg, cx, cy, X(c), Y(s), 'var(--primary)', 2.8);
    linhaS(svg, X(c), cy, X(c), Y(s), 'var(--decay)', 3.6); linhaS(svg, cx, cy, X(c), cy, 'var(--growth)', 3.6);
    el('circle', {cx: X(c), cy: Y(s), r: 5.5, fill: 'var(--primary)'}, svg);
    var pts = [], n = Math.max(3, Math.round(Math.abs(deg) / 8)); for(var i = 0; i <= n; i++){ var tt = a * i / n; pts.push((cx + 22 * Math.cos(tt)).toFixed(1) + ',' + (cy - 22 * Math.sin(tt)).toFixed(1)); }
    el('polyline', {points: pts.join(' '), fill: 'none', stroke: 'var(--growth)', 'stroke-width': 2}, svg);
    textoS(svg, X(c) + (c >= 0 ? 8 : -8), Y(s) + (s >= 0 ? -8 : 15), '(' + pt(c, 2) + '; ' + pt(s, 2) + ')', 'var(--primary)', 11, c >= 0 ? 'start' : 'end');
    return {c: c, s: s, t: Math.abs(c) < 1e-9 ? NaN : s / c};
  }
  // gráfico de y = k + A·f(B·x + D) (f = Math.sin ou Math.cos) em radianos, eixo x em múltiplos de π/2
  function ondaW(svg, f, A, B, D, k, xmin, xmax){
    var W = 380, H = 220, L = 34, R = 12, T = 12, Bt = 26, ymin = k - Math.abs(A) - 0.6, ymax = k + Math.abs(A) + 0.6; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var X = function(x){ return L + (x - xmin) / (xmax - xmin) * (W - L - R); }, Y = function(y){ return H - Bt - (y - ymin) / (ymax - ymin) * (H - T - Bt); };
    var step = Math.PI / 2, i;
    for(i = Math.ceil(xmin / step - 1e-9); i <= Math.floor(xmax / step + 1e-9); i++){ var x = i * step; linhaS(svg, X(x), Y(ymin), X(x), Y(ymax), 'var(--line)', 1); if(i !== 0){ var m = i % 2 === 0 ? (i / 2 === 1 ? '' : (i / 2 === -1 ? '−' : i / 2)) + 'π' : (i === 1 ? '' : i === -1 ? '−' : i) + 'π/2'; if(i % 2 === 0 && i / 2 === -1) m = '−π'; textoS(svg, X(x), Y(Math.max(ymin, Math.min(0, ymax))) + 14, m, 'var(--ink-faint)', 10); } }
    var ys = Math.max(1, Math.round((ymax - ymin) / 6)); for(i = Math.ceil(ymin / ys); i <= Math.floor(ymax / ys); i++){ var y = i * ys; linhaS(svg, X(xmin), Y(y), X(xmax), Y(y), 'var(--line)', 1); if(i !== 0) textoS(svg, X(0) - 5, Y(y) + 4, pt(y, 1), 'var(--ink-faint)', 10, 'end'); }
    linhaS(svg, X(xmin), Y(0), X(xmax), Y(0), 'var(--ink-soft)', 1.6); linhaS(svg, X(0), Y(ymin), X(0), Y(ymax), 'var(--ink-soft)', 1.6);
    if(k !== 0) linhaS(svg, X(xmin), Y(k), X(xmax), Y(k), 'var(--growth)', 1.5, '5 4');
    var pts = []; for(i = 0; i <= 240; i++){ var xx = xmin + (xmax - xmin) * i / 240; pts.push(X(xx).toFixed(1) + ',' + Y(k + A * f(B * xx + D)).toFixed(1)); }
    el('polyline', {points: pts.join(' '), fill: 'none', stroke: 'var(--primary)', 'stroke-width': 3, 'stroke-linejoin': 'round'}, svg);
    return {ymin: ymin, ymax: ymax, X: X, Y: Y};
  }

  // arco de circunferência de raio r (só para escala do desenho) e ângulo central deg (0–360): setor + arco destacado
  function arcoW(svg, deg){
    var W = 340, H = 220, cx = W / 2, cy = H / 2 + 4, R = 84; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    linhaS(svg, cx - R - 12, cy, cx + R + 12, cy, 'var(--line-strong)', 1.2); linhaS(svg, cx, cy - R - 12, cx, cy + R + 12, 'var(--line-strong)', 1.2);
    var a = rad(deg), pts = [[cx, cy]], n = Math.max(2, Math.round(deg / 4)); for(var i = 0; i <= n; i++){ var t = a * i / n; pts.push([cx + R * Math.cos(t), cy - R * Math.sin(t)]); }
    el('polygon', {points: pts.map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'none'}, svg);
    el('polyline', {points: pts.slice(1).map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'none', stroke: 'var(--primary)', 'stroke-width': 4.4, 'stroke-linecap': 'round'}, svg);
    linhaS(svg, cx, cy, cx + R, cy, 'var(--ink)', 1.8); linhaS(svg, cx, cy, cx + R * Math.cos(a), cy - R * Math.sin(a), 'var(--ink)', 1.8);
    el('circle', {cx: cx + R, cy: cy, r: 4, fill: 'var(--growth)'}, svg); el('circle', {cx: cx + R * Math.cos(a), cy: cy - R * Math.sin(a), r: 4.5, fill: 'var(--decay)'}, svg);
    textoS(svg, cx + R + 8, cy + 14, 'A', 'var(--growth)', 13, 'start'); textoS(svg, cx + (R + 14) * Math.cos(a), cy - (R + 14) * Math.sin(a) + 4, 'B', 'var(--decay)', 13);
    if(deg > 8) textoS(svg, cx + 26 * Math.cos(a / 2), cy - 26 * Math.sin(a / 2) + 5, 'α', 'var(--growth)', 15);
  }
  // espiral de deg graus (positivo: anti-horário; negativo: horário) terminando na extremidade do arco
  function espiralW(svg, deg){
    var W = 340, H = 230, cx = W / 2, cy = H / 2 + 4, R = 92; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.6}, svg);
    linhaS(svg, cx - R - 14, cy, cx + R + 14, cy, 'var(--ink-soft)', 1.3); linhaS(svg, cx, cy - R - 14, cx, cy + R + 14, 'var(--ink-soft)', 1.3);
    [['I', 1, -1], ['II', -1, -1], ['III', -1, 1], ['IV', 1, 1]].forEach(function(q){ textoS(svg, cx + q[1] * 48, cy + q[2] * 48 + 5, q[0], 'var(--ink-faint)', 12); });
    var tot = Math.abs(deg), sg = deg < 0 ? -1 : 1, pts = [], n = Math.max(2, Math.round(tot / 5));
    for(var i = 0; i <= n; i++){ var g = tot * i / n, r = 18 + (R - 6 - 18) * (tot ? g / tot : 1), t = sg * rad(g); pts.push((cx + r * Math.cos(t)).toFixed(1) + ',' + (cy - r * Math.sin(t)).toFixed(1)); }
    el('polyline', {points: pts.join(' '), fill: 'none', stroke: 'var(--primary)', 'stroke-width': 2.6, 'stroke-linejoin': 'round'}, svg);
    var det = ((deg % 360) + 360) % 360, d = rad(det);
    linhaS(svg, cx, cy, cx + R * Math.cos(d), cy - R * Math.sin(d), 'var(--decay)', 2.6); el('circle', {cx: cx + R * Math.cos(d), cy: cy - R * Math.sin(d), r: 5, fill: 'var(--decay)'}, svg);
    el('circle', {cx: cx + R, cy: cy, r: 4, fill: 'var(--growth)'}, svg); textoS(svg, cx + R + 8, cy + 15, 'A (0°)', 'var(--growth)', 11, 'start');
    return det;
  }
  // triângulo de lados a, b, c (a oposto a A…) com rótulos
  function triW(svg, a, b, c, lab){
    lab = lab || {};
    var W = 340, H = 200; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    if(!(a > 0 && b > 0 && c > 0) || a + b <= c || a + c <= b || b + c <= a){ textoS(svg, W / 2, H / 2, 'Esses lados não formam um triângulo', 'var(--danger)', 14); return false; }
    var x = (a * a + c * c - b * b) / (2 * a), y = Math.sqrt(Math.max(0, c * c - x * x)), minx = Math.min(0, x), maxx = Math.max(a, x), pad = 40;
    var k = Math.min((W - 2 * pad) / (maxx - minx), (H - 2 * pad) / y), ox = (W - (maxx - minx) * k) / 2 - minx * k, oy = (H + y * k) / 2;
    var A = [ox + x * k, oy - y * k], B = [ox, oy], C = [ox + a * k, oy];
    el('polygon', {points: [A, B, C].map(function(p){ return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '), fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4, 'stroke-linejoin': 'round'}, svg);
    var g = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
    function fora(p, d){ var dx = p[0] - g[0], dy = p[1] - g[1], n = Math.hypot(dx, dy) || 1; return [p[0] + dx / n * d, p[1] + dy / n * d]; }
    var pa = fora(A, 14), pb = fora(B, 14), pc = fora(C, 14);
    textoS(svg, pa[0], pa[1] + 5, lab.A || 'A', 'var(--ink)', 15); textoS(svg, pb[0], pb[1] + 5, lab.B || 'B', 'var(--ink)', 15); textoS(svg, pc[0], pc[1] + 5, lab.C || 'C', 'var(--ink)', 15);
    function lado(p, q, t){ var m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], r = fora(m, 13); textoS(svg, r[0], r[1] + 4, t, 'var(--decay)', 12); }
    lado(B, C, lab.a != null ? lab.a : 'a = ' + pt(a, 2)); lado(A, C, lab.b != null ? lab.b : 'b = ' + pt(b, 2)); lado(A, B, lab.c != null ? lab.c : 'c = ' + pt(c, 2));
    return true;
  }
`;

module.exports = { figTri, figRet, figCirc, figOnda, TJS, pt, rad };
