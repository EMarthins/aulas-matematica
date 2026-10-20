// Rascunho 100% a partir das linhas do OCR (ocr.json): enunciado em parágrafos, pergunta e alternativas.
// Uso: const { ocrCompleto } = require('./ocr-rascunho.js'); ocrCompleto(q, caixaDaFigura?) → { e, p, a, avisos }
// A conferência com a imagem é feita por quem transcreve; erros do OCR entram em "avisos" (palavras fora do vocabulário).
const fs = require('fs'), path = require('path');
const { altsDoOcr, juntaPartidas } = require('./rascunho.js');
const V = require('./vocab.js');
const OCR = fs.existsSync(path.join(__dirname, 'ocr.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'ocr.json'), 'utf8')) : {};
const FUNC = new Set(['que','com','para','dos','das','nos','nas','uma','por','não','mas','aos','ele','ela','seu','sua','como','mais','pela','pelo','ser','são','foi','tem','está','suas','seus','esse','essa','este','esta','entre','sobre','numa','num','nem','ou','de','do','da','em','no','na','ao','as','os','um','se','é']);
const FIM = /[.?!:”"»)]\s*$/;
const CITA = /(Dispon[ií]vel em|Acesso em|\(adaptado\)|\(fragmento\)|\bp\.\s?\d|\b(19|20)\d\d\.?\s*$)/;
const med = a => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)] || 0; };
const aspas = t => { let abre = true, out = ''; for (let k = 0; k < t.length; k++) { const c = t[k]; if (c === '"' || c === '“' || c === '”') { const ant = k ? t[k - 1] : ' '; const op = /[\s(\[—–-]/.test(ant) || k === 0; out += op ? '“' : '”'; } else out += c; } return out; };

function paragrafos(L, W) {
  if (!L.length) return [];
  const passos = L.slice(1).map((l, i) => l.y - L[i].y).filter(v => v > 0), passo = med(passos) || 30, mh = med(L.map(l => l.h)) || 20, xs = L.map(l => l.x).sort((a, b) => a - b), left = xs[Math.floor(xs.length * 0.2)];
  const dir = Math.max(...L.map(l => l.x + l.w));
  const ehCita = l => l.x > left + 0.12 * (dir - left) && l.x + l.w >= dir - 6 && l.w < 0.8 * (dir - left);
  const P = []; let atual = null, prev = null;
  for (const l of L) {
    const t = l.t.trim(); if (!t) continue;
    const cita = ehCita(l);
    let novo = !atual;
    if (atual && prev) {
      const gap = l.y - (prev.y + prev.h), recuo = l.x > left + 0.025 * (dir - left) && !cita;
      if (l.y - prev.y > 1.45 * passo) novo = true;
      else if (cita !== atual.cita) novo = true;
      else if (recuo && FIM.test(prev.t)) novo = true;
      else if (/^(TEXTO\s+[IVX]+|Texto\s+[IVX]+)\s*$/.test(t) || /^(TEXTO\s+[IVX]+)\s*$/.test(prev.t.trim())) novo = true;
    }
    if (novo) { atual = { linhas: [], cita }; P.push(atual); }
    atual.linhas.push(l); prev = l;
  }
  return P.map(p => {
    const ls = p.linhas, limite = dir - 0.12 * (dir - left);
    const curtas = ls.filter(l => l.x + l.w < limite).length;
    const verso = ls.length >= 3 && curtas / ls.length > 0.7 && !p.cita;
    const texto = ls.map(l => l.t.trim()).join(verso ? '\n' : ' ').replace(/\s+/g, verso ? ' ' : ' ');
    return { t: texto, cita: p.cita || (CITA.test(texto) && texto.length < 320 && ls.length <= 4) };
  });
}

function ocrCompleto(q, caixa) {
  const o = OCR[q.id]; if (!o || !o.l) return null;
  const d = altsDoOcr(q);
  let L = o.l.filter(l => l.t && l.t.trim() && l.w);
  if (Array.isArray(caixa)) { const [x0, y0, x1, y1] = caixa; L = L.filter(l => { const cy = (l.y + l.h / 2) / o.h, cx = (l.x + l.w / 2) / o.w; return !(cy >= y0 - 0.005 && cy <= y1 + 0.005 && cx >= x0 - 0.01 && cx <= x1 + 0.01); }); }
  L.sort((a, b) => a.y - b.y || a.x - b.x);
  let stem = L, alts = null;
  if (d) { const ids = new Set(d.stemLines.map(l => l.y + '|' + l.x)); stem = L.filter(l => ids.has(l.y + '|' + l.x)); alts = d.alts; }
  const P = paragrafos(stem, o.w);
  let e = '', p = '';
  if (P.length >= 2) {
    let k = -1; for (let i = P.length - 1; i >= 0; i--) if (P[i].cita) { k = i; break; }
    if (k >= 0 && k < P.length - 1) { e = P.slice(0, k + 1).map(x => x.t).join('\n\n'); p = P.slice(k + 1).map(x => x.t).join('\n\n'); }
    else if (k < 0 && P[P.length - 1].t.length < 320) { e = P.slice(0, -1).map(x => x.t).join('\n\n'); p = P[P.length - 1].t; }
    else e = P.map(x => x.t).join('\n\n');
  } else e = P.map(x => x.t).join('\n\n');
  const B = String.fromCharCode(92);
  const solta = t => t.replace(new RegExp('[' + 'a-zà-ú' + ']{6,}', 'gi'), w => { const lw = w.toLowerCase(); if (V.conhecida(lw)) return w; for (let i = 3; i <= w.length - 2; i++) { if ((V.conhecida(lw.slice(0, i)) || FUNC.has(lw.slice(0, i))) && (V.conhecida(lw.slice(i)) || FUNC.has(lw.slice(i))) && lw.slice(0, i).length >= 3) return w.slice(0, i) + ' ' + w.slice(i); } return w; });
  const fix = t => solta(juntaPartidas(aspas(t))).replace(/(https?:\/\/)gl\.globo/g, '$1g1.globo').replace(/\b(?:wvvw|vmw|wwvv)\./g, 'www.').replace(/\s+([,.;:!?])/g, '$1');
  const r = { e: fix(e), p: fix(p) };
  if (alts) r.a = alts.map(fix);
  const todo = [r.e, r.p, ...(r.a || [])].join(' ');
  r.avisos = V.desconhecidas(todo);
  return r;
}
module.exports = { ocrCompleto };
