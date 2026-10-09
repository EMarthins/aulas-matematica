// ============================================================
// Figuras do banco de questões: tudo vira HTML/SVG em preto e branco (bom para impressão).
//
//   { tipo:'svg',    svg:'<svg viewBox="0 0 200 120">…</svg>', largura:'60%' }
//   { tipo:'img',    src:'data:image/png;base64,…' | 'imagens/x.png', alt:'…', largura:'50%' }
//   { tipo:'funcao', fs:['x^2-4x+3', {e:'2x-1', rotulo:'g', tracejado:true}],
//                    x:[-1,5], y:[-2,4], pontos:[{x:2,y:-1,rotulo:'V'}], grade:true, largura:'70%' }
//   { tipo:'barras', titulo:'Vendas', rotulos:['Jan','Fev'], valores:[20,30], unidade:'mil' }
//   { tipo:'tabela', cab:['x','f(x)'], linhas:[['0','3'],['1','0']] }
//   (qualquer figura aceita  legenda:'Figura 1 — …')
//
// Módulo puro (sem DOM): roda no navegador e no Node.
// ============================================================
import { mat } from './matematica.js';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** Remove scripts, manipuladores on*= e URLs javascript: de um trecho de HTML/SVG. */
export function limpar(html) {
  return String(html == null ? '' : html)
    .replace(/<\s*(script|iframe|object|embed|link|meta|style)[\s\S]*?(<\/\s*\1\s*>|$)/gi, '')
    .replace(/<\s*(script|iframe|object|embed|link|meta)[^>]*>/gi, '')
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(href|src|xlink:href)\s*=\s*("|')\s*javascript:[^"']*\2/gi, '$1=$2#$2');
}

// ---------- avaliador seguro de expressões f(x) ----------
const FN = { sen: Math.sin, sin: Math.sin, cos: Math.cos, tg: Math.tan, tan: Math.tan, sqrt: Math.sqrt, raiz: Math.sqrt, abs: Math.abs, ln: Math.log, log: Math.log10, exp: Math.exp, floor: Math.floor, ceil: Math.ceil };
export function compilar(src) {
  const s = String(src).replace(/\s+/g, '').replace(/,/g, '.').replace(/−/g, '-').replace(/·|×/g, '*').replace(/÷/g, '/').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/\[/g, '(').replace(/\]/g, ')');
  let p = 0;
  const peek = () => s[p];
  const isNum = c => c !== undefined && /[0-9.]/.test(c);
  const isId = c => c !== undefined && /[a-z]/i.test(c);
  function expr() { let v = term(); while (peek() === '+' || peek() === '-') { const o = s[p++]; const r = term(); const l = v; v = o === '+' ? x => l(x) + r(x) : x => l(x) - r(x); } return v; }
  function term() {
    let v = unary();
    for (;;) {
      const c = peek();
      if (c === '*' || c === '/') { p++; const r = unary(), l = v; v = c === '*' ? x => l(x) * r(x) : x => l(x) / r(x); }
      else if (isNum(c) || isId(c) || c === '(') { const r = unary(), l = v; v = x => l(x) * r(x); } // multiplicação implícita: 2x, 3(x+1)
      else return v;
    }
  }
  function unary() { if (peek() === '-') { p++; const v = unary(); return x => -v(x); } if (peek() === '+') { p++; return unary(); } return power(); }
  function power() { const b = atomo(); if (peek() === '^') { p++; const e = unary(); return x => Math.pow(b(x), e(x)); } return b; }
  function atomo() {
    const c = peek();
    if (c === '(') { p++; const v = expr(); if (peek() !== ')') throw new Error('falta )'); p++; return v; }
    if (isNum(c)) { let q = p; while (isNum(s[q])) q++; const n = parseFloat(s.slice(p, q)); p = q; return () => n; }
    if (isId(c)) {
      let q = p; while (isId(s[q])) q++;
      const id = s.slice(p, q).toLowerCase(); p = q;
      if (id === 'x') return x => x;
      if (id === 'pi') return () => Math.PI;
      if (id === 'e') return () => Math.E;
      if (FN[id]) { if (peek() !== '(') throw new Error('use ' + id + '(…)'); p++; const a = expr(); if (peek() !== ')') throw new Error('falta )'); p++; const f = FN[id]; return x => f(a(x)); }
      throw new Error('símbolo desconhecido: ' + id);
    }
    throw new Error('expressão inválida perto de "' + s.slice(p, p + 6) + '"');
  }
  const f = expr();
  if (p < s.length) throw new Error('sobrou "' + s.slice(p, p + 6) + '"');
  return f;
}

function nice(range, n) {
  const raw = range / Math.max(1, n), mag = Math.pow(10, Math.floor(Math.log10(raw))), r = raw / mag;
  return (r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10) * mag;
}
const fmt = v => (Math.abs(v) < 1e-9 ? 0 : +v.toFixed(6)).toString().replace('.', ',').replace('-', '−');
const TXT = 'font-family="Archivo,Arial,sans-serif" font-size="11" fill="#111"';

function wrapSvg(w, h, inner, largura) {
  return `<svg class="fig-svg" viewBox="0 0 ${w} ${h}" style="width:${esc(largura || '70%')};max-width:100%;height:auto" role="img" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

let _cp = 0;
function grafico(f) {
  const cid = "cp" + (++_cp);
  const fs = (f.fs || (f.e ? [f.e] : [])).map(x => typeof x === 'string' ? { e: x } : x);
  const [x0, x1] = f.x || [-5, 5];
  const W = 360, H = f.altura || 260, ml = 30, mr = 14, mt = 12, mb = 22;
  const pw = W - ml - mr, ph = H - mt - mb;
  const N = 240, fns = fs.map(o => ({ o, fn: compilar(o.e) }));
  let y0, y1;
  if (f.y) [y0, y1] = f.y;
  else {
    let lo = Infinity, hi = -Infinity;
    fns.forEach(({ fn }) => { for (let i = 0; i <= N; i++) { const v = fn(x0 + (x1 - x0) * i / N); if (isFinite(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); } } });
    (f.pontos || []).forEach(q => { lo = Math.min(lo, q.y); hi = Math.max(hi, q.y); });
    if (!isFinite(lo)) { lo = -5; hi = 5; }
    const pad = (hi - lo || 2) * .12; y0 = Math.min(lo - pad, 0 - pad * .2); y1 = Math.max(hi + pad, 0 + pad * .2);
  }
  const X = x => ml + (x - x0) / (x1 - x0) * pw, Y = y => mt + (y1 - y) / (y1 - y0) * ph;
  const sx = nice(x1 - x0, 8), sy = nice(y1 - y0, 6);
  let g = '', ax = '', tk = '';
  if (f.grade !== false) {
    for (let v = Math.ceil(x0 / sx) * sx; v <= x1 + 1e-9; v += sx) g += `<line x1="${X(v)}" y1="${mt}" x2="${X(v)}" y2="${mt + ph}" stroke="#d4d4d4" stroke-width=".6"/>`;
    for (let v = Math.ceil(y0 / sy) * sy; v <= y1 + 1e-9; v += sy) g += `<line x1="${ml}" y1="${Y(v)}" x2="${ml + pw}" y2="${Y(v)}" stroke="#d4d4d4" stroke-width=".6"/>`;
  }
  const ex = x0 <= 0 && x1 >= 0 ? X(0) : ml, ey = y0 <= 0 && y1 >= 0 ? Y(0) : mt + ph;
  ax += `<line x1="${ml}" y1="${ey}" x2="${ml + pw + 6}" y2="${ey}" stroke="#111" stroke-width="1.2"/><path d="M${ml + pw + 8} ${ey} l-6 -3 v6z" fill="#111"/>`;
  ax += `<line x1="${ex}" y1="${mt + ph}" x2="${ex}" y2="${mt - 6}" stroke="#111" stroke-width="1.2"/><path d="M${ex} ${mt - 8} l-3 6 h6z" fill="#111"/>`;
  for (let v = Math.ceil(x0 / sx) * sx; v <= x1 + 1e-9; v += sx) if (Math.abs(v) > 1e-9) tk += `<line x1="${X(v)}" y1="${ey - 3}" x2="${X(v)}" y2="${ey + 3}" stroke="#111"/><text x="${X(v)}" y="${Math.min(ey + 14, H - 6)}" text-anchor="middle" ${TXT}>${fmt(v)}</text>`;
  for (let v = Math.ceil(y0 / sy) * sy; v <= y1 + 1e-9; v += sy) if (Math.abs(v) > 1e-9) tk += `<line x1="${ex - 3}" y1="${Y(v)}" x2="${ex + 3}" y2="${Y(v)}" stroke="#111"/><text x="${ex - 6}" y="${Y(v) + 4}" text-anchor="end" ${TXT}>${fmt(v)}</text>`;
  tk += `<text x="${ex - 6}" y="${ey + 13}" text-anchor="end" ${TXT}>0</text>`;
  let cv = '';
  const dashes = ['', '6 4', '2 3', '8 3 2 3'];
  fns.forEach(({ o, fn }, k) => {
    let d = '', pen = false;
    for (let i = 0; i <= N; i++) {
      const x = x0 + (x1 - x0) * i / N, v = fn(x);
      if (!isFinite(v) || v < y0 - (y1 - y0) || v > y1 + (y1 - y0)) { pen = false; continue; }
      d += (pen ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(v).toFixed(1); pen = true;
    }
    const da = o.tracejado ? '6 4' : dashes[k % dashes.length];
    cv += `<path d="${d}" fill="none" stroke="#111" stroke-width="1.8" ${da ? `stroke-dasharray="${da}"` : ''} clip-path="url(#${cid})"/>`;
    if (o.rotulo) {
      const xr = x0 + (x1 - x0) * (.82 - k * .12), vr = fn(xr);
      if (isFinite(vr)) cv += `<text x="${X(xr) + 4}" y="${Y(vr) - 5}" ${TXT} font-style="italic">${esc(o.rotulo)}</text>`;
    }
  });
  (f.pontos || []).forEach(q => {
    cv += `<circle cx="${X(q.x)}" cy="${Y(q.y)}" r="3" fill="${q.vazio ? '#fff' : '#111'}" stroke="#111" stroke-width="1.3"/>`;
    if (q.rotulo) cv += `<text x="${X(q.x) + 6}" y="${Y(q.y) - 6}" ${TXT}>${esc(q.rotulo)}</text>`;
  });
  const eixos = `<text x="${ml + pw + 8}" y="${ey + 14}" text-anchor="end" ${TXT} font-style="italic">${esc(f.rx || 'x')}</text><text x="${ex + 8}" y="${mt - 2}" ${TXT} font-style="italic">${esc(f.ry || 'y')}</text>`;
  return wrapSvg(W, H, `<defs><clipPath id="${cid}"><rect x="${ml}" y="${mt - 4}" width="${pw}" height="${ph + 8}"/></clipPath></defs>${g}${ax}${tk}${cv}${eixos}`, f.largura);
}

function barras(f) {
  const rot = f.rotulos || [], val = (f.valores || []).map(Number);
  const W = 360, H = 240, ml = 36, mr = 10, mt = f.titulo ? 28 : 14, mb = 28;
  const pw = W - ml - mr, ph = H - mt - mb, max = Math.max(...val, 1) * 1.1, st = nice(max, 5);
  const top = Math.ceil(max / st) * st, Y = v => mt + ph - v / top * ph;
  let o = '';
  if (f.titulo) o += `<text x="${W / 2}" y="14" text-anchor="middle" ${TXT} font-weight="700">${esc(f.titulo)}</text>`;
  for (let v = 0; v <= top + 1e-9; v += st) o += `<line x1="${ml}" y1="${Y(v)}" x2="${ml + pw}" y2="${Y(v)}" stroke="#d4d4d4" stroke-width=".6"/><text x="${ml - 5}" y="${Y(v) + 4}" text-anchor="end" ${TXT}>${fmt(v)}</text>`;
  const bw = pw / Math.max(1, val.length);
  val.forEach((v, i) => {
    const x = ml + i * bw + bw * .18, w = bw * .64;
    o += `<rect x="${x}" y="${Y(v)}" width="${w}" height="${mt + ph - Y(v)}" fill="${f.preto ? '#111' : '#bdbdbd'}" stroke="#111" stroke-width="1"/>`;
    o += `<text x="${x + w / 2}" y="${Y(v) - 4}" text-anchor="middle" ${TXT}>${fmt(v)}</text>`;
    o += `<text x="${x + w / 2}" y="${H - 10}" text-anchor="middle" ${TXT}>${esc(rot[i] ?? '')}</text>`;
  });
  o += `<line x1="${ml}" y1="${mt + ph}" x2="${ml + pw}" y2="${mt + ph}" stroke="#111" stroke-width="1.2"/><line x1="${ml}" y1="${mt}" x2="${ml}" y2="${mt + ph}" stroke="#111" stroke-width="1.2"/>`;
  if (f.unidade) o += `<text x="2" y="${mt - 4}" ${TXT} font-size="9">${esc(f.unidade)}</text>`;
  return wrapSvg(W, H, o, f.largura);
}

function tabela(f) {
  const cab = f.cab || [], ln = f.linhas || [];
  return `<table class="fig-tab" style="${f.largura ? `width:${esc(f.largura)}` : ''}">${cab.length ? `<thead><tr>${cab.map(c => `<th>${mat(c)}</th>`).join('')}</tr></thead>` : ''}<tbody>${ln.map(r => `<tr>${r.map(c => `<td>${mat(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

/** Gera o HTML de uma figura (ou '' se não houver). */
export function figuraHtml(f) {
  if (!f || !f.tipo) return '';
  let corpo = '';
  try {
    if (f.tipo === 'svg') {
      const s = limpar(f.svg || '');
      corpo = f.largura ? `<div style="width:${esc(f.largura)};max-width:100%;margin:0 auto" class="fig-svgw">${s}</div>` : `<div class="fig-svgw">${s}</div>`;
    }
    else if (f.tipo === 'img') corpo = `<img class="fig-img" src="${esc(f.src || '')}" alt="${esc(f.alt || '')}" style="width:${esc(f.largura || '60%')};max-width:100%;height:auto">`;
    else if (f.tipo === 'funcao') corpo = grafico(f);
    else if (f.tipo === 'barras') corpo = barras(f);
    else if (f.tipo === 'tabela') corpo = tabela(f);
    else return '';
  } catch (e) { corpo = `<div class="fig-erro">Figura inválida: ${esc(e.message)}</div>`; }
  return `<figure class="q-fig">${corpo}${f.legenda ? `<figcaption>${mat(f.legenda)}</figcaption>` : ''}</figure>`;
}
