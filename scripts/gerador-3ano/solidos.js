// Figuras de sólidos geométricos (SVG estático, projeção oblíqua) para as unidades de geometria espacial da 3ª série
const K = require('./kit.js');
const { svg, ln, ci, dot, txu } = K;
const f1 = v => +v.toFixed(1);
const COR = 'var(--primary)', SOFT = 'var(--primary-soft)', LEVE = 'var(--surface)', MED = 'var(--decay)', OCULTA = 'var(--ink-faint)';
const poly = (pts, cor = COR, fill = SOFT, w = 2.4) => `<polygon points="${pts.map(q => f1(q[0]) + ',' + f1(q[1])).join(' ')}" fill="${fill}" stroke="${cor}" stroke-width="${w}" stroke-linejoin="round"/>`;
const seg = (a, b, cor = COR, w = 2.4, tracejado = false) => ln(f1(a[0]), f1(a[1]), f1(b[0]), f1(b[1]), cor, w, tracejado ? 'stroke-dasharray="5 4"' : '');
const elip = (cx, cy, rx, ry, cor = COR, fill = 'none', w = 2.4, tracejado = false) => `<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${fill}" stroke="${cor}" stroke-width="${w}"${tracejado ? ' stroke-dasharray="5 4"' : ''}/>`;
// meia elipse: 'baixo' (arco visível da base) ou 'cima' (arco oculto)
const meia = (cx, cy, rx, ry, lado, cor = COR, w = 2.4, tracejado = false) => `<path d="M${f1(cx - rx)},${f1(cy)} A${f1(rx)},${f1(ry)} 0 0 ${lado === 'baixo' ? 0 : 1} ${f1(cx + rx)},${f1(cy)}" fill="none" stroke="${cor}" stroke-width="${w}"${tracejado ? ' stroke-dasharray="5 4"' : ''}/>`;
const rot = (x, y, t, anc = 'middle', cor = MED, sz = 13) => txu(f1(x), f1(y), t, cor, sz, anc);
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const retoMarca = (v, ux, uy, s = 8) => `<path d="M${f1(v[0] + ux * s)},${f1(v[1] + uy * s)} L${f1(v[0] + (ux - uy) * s)},${f1(v[1] + (uy + ux) * s)} L${f1(v[0] - uy * s)},${f1(v[1] + ux * s)}" fill="none" stroke="var(--ink)" stroke-width="1.4"/>`;

/** Paralelepípedo (ou cubo) com rótulos nas três dimensões. A, B, D em pixels (comprimento, altura, profundidade). */
function bloco({ A = 120, B = 75, D = 70, la = '', lb = '', lc = '', w = 260, h = 180, fill = SOFT } = {}) {
  const dx = D * 0.62, dy = -D * 0.42, x0 = (w - A - dx) / 2, y1 = h - 26;
  const F0 = [x0, y1], F1 = [x0 + A, y1], F2 = [x0 + A, y1 - B], F3 = [x0, y1 - B];
  const B0 = [F0[0] + dx, F0[1] + dy], B1 = [F1[0] + dx, F1[1] + dy], B2 = [F2[0] + dx, F2[1] + dy], B3 = [F3[0] + dx, F3[1] + dy];
  let s = seg(B0, B1, OCULTA, 2, true) + seg(B0, F0, OCULTA, 2, true) + seg(B0, B3, OCULTA, 2, true);
  s += poly([F0, F1, F2, F3], COR, fill) + poly([F3, F2, B2, B3], COR, LEVE) + poly([F1, B1, B2, F2], COR, fill);
  if (la) s += rot((F0[0] + F1[0]) / 2, F0[1] + 17, la);
  if (lb) s += rot(F0[0] - 8, (F0[1] + F3[1]) / 2 + 4, lb, 'end');
  if (lc) s += rot((F1[0] + B1[0]) / 2 + 10, (F1[1] + B1[1]) / 2 + 12, lc, 'start');
  return svg(w, h, s, w + 'px');
}

/** Prisma triangular reto (bases triangulares na frente e atrás). */
function prismaTri({ A = 110, B = 70, D = 80, la = '', lb = '', lc = '', w = 260, h = 170 } = {}) {
  const dx = D * 0.62, dy = -D * 0.42, x0 = (w - A - dx) / 2, y1 = h - 28 - (-dy) * 0.0;
  const T0 = [x0, y1], T1 = [x0 + A, y1], T2 = [x0 + A * 0.35, y1 - B];
  const U0 = [T0[0] + dx, T0[1] + dy], U1 = [T1[0] + dx, T1[1] + dy], U2 = [T2[0] + dx, T2[1] + dy];
  let s = seg(U0, U1, OCULTA, 2, true) + seg(T0, U0, OCULTA, 2, true);
  s += poly([T0, T2, U2, U0], COR, LEVE) + poly([T1, U1, U2, T2], COR, SOFT) + poly([T0, T1, T2], COR, SOFT);
  if (la) s += rot((T0[0] + T1[0]) / 2, T0[1] + 17, la);
  if (lb) s += rot(T2[0] - 10, (T2[1] + T0[1]) / 2, lb, 'end');
  if (lc) s += rot((T1[0] + U1[0]) / 2 + 10, (T1[1] + U1[1]) / 2 + 12, lc, 'start');
  return svg(w, h, s, w + 'px');
}

/** Pirâmide de base quadrada (ou retangular) com altura e, opcionalmente, apótema da pirâmide. */
function piramide({ A = 110, D = 80, H = 100, lh = '', la = '', lm = '', apotema = false, w = 260, h = 190 } = {}) {
  const dx = D * 0.62, dy = -D * 0.42, x0 = (w - A - dx) / 2, y1 = h - 30;
  const A0 = [x0, y1], A1 = [x0 + A, y1], A2 = [A1[0] + dx, A1[1] + dy], A3 = [A0[0] + dx, A0[1] + dy];
  const O = [(A0[0] + A2[0]) / 2, (A0[1] + A2[1]) / 2], V = [O[0], O[1] - H];
  let s = seg(A0, A3, OCULTA, 2, true) + seg(A3, A2, OCULTA, 2, true) + seg(V, A3, OCULTA, 2, true);
  s += poly([A0, A1, V], COR, SOFT) + poly([A1, A2, V], COR, LEVE) + seg(V, A0) + seg(V, A1) + seg(V, A2);
  s += seg(V, O, MED, 2, true) + dot(f1(O[0]), f1(O[1]), MED, 3);
  if (apotema) { const M = mid(A0, A1); s += seg(V, M, 'var(--growth)', 2.2, true); if (lm) s += rot((V[0] + M[0]) / 2 - 8, (V[1] + M[1]) / 2 + 6, lm, 'end', 'var(--growth)'); }
  if (lh) s += rot(O[0] + 8, (V[1] + O[1]) / 2, lh, 'start');
  if (la) s += rot((A0[0] + A1[0]) / 2, A0[1] + 17, la);
  return svg(w, h, s, w + 'px');
}

/** Cilindro reto. */
function cilindro({ R = 48, Ry = 15, H = 95, lr = '', lh = '', lg = '', w = 250, h = 190 } = {}) {
  const cx = w / 2 - 10, top = 30 + Ry, bot = top + H;
  let s = elip(cx, top, R, Ry, COR, SOFT) + seg([cx - R, top], [cx - R, bot]) + seg([cx + R, top], [cx + R, bot]);
  s += meia(cx, bot, R, Ry, 'cima', OCULTA, 2, true) + meia(cx, bot, R, Ry, 'baixo');
  s += seg([cx, top], [cx + R, top], MED, 2, true) + dot(cx, top, MED, 3);
  if (lr) s += rot(cx + R / 2, top - 5, lr);
  if (lh) { s += seg([cx + R + 14, top], [cx + R + 14, bot], MED, 1.6); s += rot(cx + R + 22, (top + bot) / 2 + 4, lh, 'start'); }
  if (lg) s += rot(cx - R - 8, (top + bot) / 2 + 4, lg, 'end', 'var(--growth)');
  return svg(w, h, s, w + 'px');
}

/** Cone reto. */
function cone({ R = 48, Ry = 15, H = 105, lr = '', lh = '', lg = '', w = 250, h = 190 } = {}) {
  const cx = w / 2 - 10, base = h - 30 - Ry, V = [cx, base - H];
  let s = poly([[cx - R, base], V, [cx + R, base]], COR, SOFT) + meia(cx, base, R, Ry, 'cima', OCULTA, 2, true) + `<path d="M${f1(cx - R)},${f1(base)} A${f1(R)},${f1(Ry)} 0 0 0 ${f1(cx + R)},${f1(base)}" fill="${SOFT}" stroke="${COR}" stroke-width="2.4"/>`;
  s += seg(V, [cx, base], MED, 2, true) + seg([cx, base], [cx + R, base], MED, 2, true) + dot(cx, base, MED, 3);
  if (lh) s += rot(cx + 7, base - H / 2, lh, 'start');
  if (lr) s += rot(cx + R / 2, base + 15, lr);
  if (lg) s += rot((V[0] + cx + R) / 2 + 9, (V[1] + base) / 2, lg, 'start', 'var(--growth)');
  return svg(w, h, s, w + 'px');
}

/** Esfera com equador e raio. */
function esfera({ R = 62, lr = '', w = 220, h = 170 } = {}) {
  const cx = w / 2, cy = h / 2;
  let s = ci(cx, cy, R, SOFT, COR, 2.4) + meia(cx, cy, R, R * 0.28, 'cima', OCULTA, 1.8, true) + meia(cx, cy, R, R * 0.28, 'baixo', COR, 1.8);
  s += seg([cx, cy], [cx + R, cy], MED, 2.2) + dot(cx, cy, MED, 3.5);
  if (lr) s += rot(cx + R / 2, cy - 7, lr);
  return svg(w, h, s, w + 'px');
}

/** Tetraedro (4 faces triangulares). */
function tetraedro({ w = 200, h = 160 } = {}) {
  const A = [30, 128], B = [168, 128], C = [118, 104], V = [92, 22];
  let s = poly([A, B, V], COR, SOFT) + seg(A, C, OCULTA, 2, true) + seg(C, B, OCULTA, 2, true) + seg(C, V, OCULTA, 2, true);
  return svg(w, h, s, w + 'px');
}

/** Octaedro regular (8 faces triangulares). */
function octaedro({ w = 200, h = 170 } = {}) {
  const cx = 100, cy = 85, rx = 62, ry = 18, T = [cx, 14], Bm = [cx, 156];
  const L = [cx - rx, cy], Rr = [cx + rx, cy], F = [cx, cy + ry], Bk = [cx, cy - ry];
  let s = seg(L, Bk, OCULTA, 2, true) + seg(Bk, Rr, OCULTA, 2, true) + seg(T, Bk, OCULTA, 2, true) + seg(Bm, Bk, OCULTA, 2, true);
  s += poly([L, T, Rr, F], COR, SOFT) + poly([L, Bm, Rr, F], COR, LEVE) + seg(T, F) + seg(L, Rr, COR, 1.2, true).replace('stroke-dasharray="5 4"', '') + seg(L, F) + seg(Rr, F);
  return svg(w, h, s, w + 'px');
}

/** Planificação do cubo (cruz de 6 quadrados). */
function redeCubo({ s: lado = 34, rotulos = false, w = 220, h = 170 } = {}) {
  const x0 = (w - 4 * lado) / 2, y0 = (h - 3 * lado) / 2, pos = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]];
  let out = pos.map(([i, j], k) => poly([[x0 + i * lado, y0 + j * lado], [x0 + (i + 1) * lado, y0 + j * lado], [x0 + (i + 1) * lado, y0 + (j + 1) * lado], [x0 + i * lado, y0 + (j + 1) * lado]], COR, k % 2 ? SOFT : LEVE)).join('');
  if (rotulos) out += pos.map(([i, j], k) => rot(x0 + (i + 0.5) * lado, y0 + (j + 0.5) * lado + 5, String(k + 1), 'middle', 'var(--ink-soft)')).join('');
  return svg(w, h, out, w + 'px');
}

/** Planificação do cilindro: retângulo (2πr × h) e dois círculos. */
function redeCilindro({ r = 22, H = 52, lr = '', l1 = '', l2 = '', w = 260, h = 190 } = {}) {
  const largura = 2 * Math.PI * r, x0 = (w - largura) / 2, y0 = 8 + 2 * r + 2, cx = x0 + largura / 2 - r * 0.0;
  let s = ci(f1(cx), f1(y0 - r), r, SOFT, COR, 2.4) + `<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(largura)}" height="${f1(H)}" fill="${LEVE}" stroke="${COR}" stroke-width="2.4"/>` + ci(f1(cx), f1(y0 + H + r), r, SOFT, COR, 2.4);
  if (lr) s += rot(cx + r + 12, y0 - r + 4, lr, 'start');
  if (l1) s += rot(cx, y0 + H / 2 + 5, l1, 'middle', 'var(--ink-soft)');
  if (l2) s += rot(x0 + largura / 2, y0 + H + 2 * r + 20, l2);
  return svg(w, h, s, w + 'px');
}

/** Planificação do cone: setor circular (geratriz g) e círculo da base. */
function redeCone({ g = 78, r = 30, lg = '', lr = '', w = 260, h = 200 } = {}) {
  const th = (r / g) * 2 * Math.PI, cx = w / 2, y0 = 14, a1 = Math.PI / 2 - th / 2, a2 = Math.PI / 2 + th / 2;
  const p1 = [cx + g * Math.cos(a1), y0 + g * Math.sin(a1)], p2 = [cx + g * Math.cos(a2), y0 + g * Math.sin(a2)];
  let s = `<path d="M${f1(cx)},${f1(y0)} L${f1(p1[0])},${f1(p1[1])} A${g},${g} 0 ${th > Math.PI ? 1 : 0} 1 ${f1(p2[0])},${f1(p2[1])} Z" fill="${SOFT}" stroke="${COR}" stroke-width="2.4"/>`;
  s += ci(f1(cx), f1(y0 + g + r), r, LEVE, COR, 2.4);
  if (lg) s += rot(cx + 22, y0 + g / 2 + 4, lg, 'start', 'var(--growth)');
  if (lr) s += rot(cx + r + 8, y0 + g + r + 5, lr, 'start');
  return svg(w, h, s, w + 'px');
}

/** Sólido escalonado por cubinhos (contagem de volume): grade de cubos unitários. */
function empilha({ x = 3, y = 2, z = 2, u = 26, w = 260, h = 190 } = {}) {
  const dx = u * 0.62, dy = -u * 0.42; let s = '';
  const ox = 24, oy = h - 24;
  for (let j = y - 1; j >= 0; j--) for (let k = 0; k < z; k++) for (let i = 0; i < x; i++) {
    const X = ox + i * u + j * dx, Y = oy - k * u + j * dy;
    s += poly([[X, Y], [X + u, Y], [X + u, Y - u], [X, Y - u]], COR, SOFT, 1.4) + poly([[X, Y - u], [X + u, Y - u], [X + u + dx, Y - u + dy], [X + dx, Y - u + dy]], COR, LEVE, 1.4) + poly([[X + u, Y], [X + u + dx, Y + dy], [X + u + dx, Y - u + dy], [X + u, Y - u]], COR, SOFT, 1.4);
  }
  return svg(w, h, s, w + 'px');
}

module.exports = { bloco, prismaTri, piramide, cilindro, cone, esfera, tetraedro, octaedro, redeCubo, redeCilindro, redeCone, empilha, rot, seg, poly, elip, meia, mid };
