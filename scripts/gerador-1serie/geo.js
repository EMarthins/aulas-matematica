// Figuras geométricas (SVG estático) compartilhadas pelas unidades de geometria da 1ª série
const K = require('./kit.js');
const { svg, ln, pg, ci, dot, tx, txu } = K;

const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const cen = pts => [pts.reduce((s, q) => s + q[0], 0) / pts.length, pts.reduce((s, q) => s + q[1], 0) / pts.length];
const f1 = v => +v.toFixed(1);

/** Polígono com contorno e preenchimento suave */
const poli = (pts, cor = 'var(--primary)', fill = 'var(--primary-soft)', w = 2.4) => pg(pts.map(q => [f1(q[0]), f1(q[1])]), fill, cor, w);

/** Nome de vértice, afastado do centroide `c` em `d` pixels */
const vert = (p, nome, c, d = 14, cor = 'var(--ink)') => {
  const vx = p[0] - c[0], vy = p[1] - c[1], n = Math.hypot(vx, vy) || 1;
  return txu(f1(p[0] + vx / n * d), f1(p[1] + vy / n * d + 4), nome, cor, 13);
};

/** Medida junto a um lado: texto afastado do centroide `c` em `d` pixels */
const medida = (a, b, texto, c, d = 14, cor = 'var(--decay)') => {
  const m = mid(a, b), vx = m[0] - c[0], vy = m[1] - c[1], n = Math.hypot(vx, vy) || 1;
  return txu(f1(m[0] + vx / n * d), f1(m[1] + vy / n * d + 4), texto, cor, 12);
};

/** Marca de ângulo reto no vértice v, entre as direções de p1 e p2 */
const reto = (v, p1, p2, s = 10) => {
  const u1 = [p1[0] - v[0], p1[1] - v[1]], u2 = [p2[0] - v[0], p2[1] - v[1]], n1 = Math.hypot(...u1), n2 = Math.hypot(...u2);
  const a = [v[0] + u1[0] / n1 * s, v[1] + u1[1] / n1 * s], b = [v[0] + u2[0] / n2 * s, v[1] + u2[1] / n2 * s], c = [a[0] + u2[0] / n2 * s, a[1] + u2[1] / n2 * s];
  return `<path d="M${f1(a[0])},${f1(a[1])} L${f1(c[0])},${f1(c[1])} L${f1(b[0])},${f1(b[1])}" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`;
};

/** Arco de ângulo no vértice v entre p1 e p2, com rótulo opcional */
const arco = (v, p1, p2, texto = '', r = 20, cor = 'var(--growth)') => {
  const a1 = Math.atan2(p1[1] - v[1], p1[0] - v[0]), a2 = Math.atan2(p2[1] - v[1], p2[0] - v[0]);
  let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
  const s = [v[0] + r * Math.cos(a1), v[1] + r * Math.sin(a1)], e = [v[0] + r * Math.cos(a2), v[1] + r * Math.sin(a2)], sweep = d > 0 ? 1 : 0;
  const am = a1 + d / 2, t = texto ? txu(f1(v[0] + (r + 12) * Math.cos(am)), f1(v[1] + (r + 12) * Math.sin(am) + 4), texto, cor, 11) : '';
  return `<path d="M${f1(s[0])},${f1(s[1])} A${r},${r} 0 0 ${sweep} ${f1(e[0])},${f1(e[1])}" fill="none" stroke="${cor}" stroke-width="2"/>` + t;
};

/** Pequena marca de “lados iguais” (tracinhos) no meio do segmento a-b */
const igual = (a, b, n = 1, cor = 'var(--decay)') => {
  const m = mid(a, b), vx = b[0] - a[0], vy = b[1] - a[1], L = Math.hypot(vx, vy) || 1, nx = -vy / L, ny = vx / L, tx0 = vx / L, ty0 = vy / L;
  let s = '';
  for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 5; s += ln(f1(m[0] + tx0 * o - nx * 5), f1(m[1] + ty0 * o - ny * 5), f1(m[0] + tx0 * o + nx * 5), f1(m[1] + ty0 * o + ny * 5), cor, 2); }
  return s;
};

module.exports = { svg, ln, pg, ci, dot, tx, txu, mid, cen, poli, vert, medida, reto, arco, igual };
