// Rascunho automático da transcrição: separa enunciado / alternativas / afirmações a partir do texto (campo "busca") que veio do PDF.
// Serve só de PONTO DE PARTIDA: cada questão é conferida contra a imagem e, se preciso, corrigida no lote-*.jsonl (campos e, p, a, af sobrescrevem o rascunho).
// Matemática (frações, expoentes, índices) NÃO vem no texto do PDF: onde há, a correção manual em $…$ é obrigatória.
const limpa = t => String(t || '').normalize('NFC')
  .replace(/[\u0000-\u0008\u000b-\u001f]/g, ' ').replace(/­/g, '')
  .replace(/(\p{L})- (\p{Ll})/gu, '$1$2')            // proprie- dade → propriedade
  .replace(/\s+/g, ' ').trim();

const ORDEM = 'ABCDE';
/** acha a sequência A B C D (E) no fim do texto; devolve { corpo, alts } ou null */
function acharAlternativas(t) {
  // formato (A) … (B) …  |  a) … b) …  |  A … B … (letra solta, às vezes repetida: "A A 50 B B 60")
  const tentativas = [
    { re: l => new RegExp('(?:^|\\s)\\(' + l + '\\)\\s', 'g'), baixa: false },
    { re: l => new RegExp('(?:^|\\s)[' + l.toLowerCase() + l + ']\\s?\\)\\s', 'g'), baixa: true },
    { re: l => new RegExp('(?:^|\\s)' + l + '[).]?\\s', 'g'), baixa: false, solta: true }
  ];
  for (const tent of tentativas) {
    for (const n of [5, 4]) {
      // posições candidatas de cada letra; escolhe a cadeia mais à direita com ordem crescente
      const pos = [...ORDEM.slice(0, n)].map(l => { const ps = []; const re = tent.re(l); let m; while ((m = re.exec(t))) ps.push({ i: m.index + (m[0].startsWith(' ') ? 1 : 0), fim: m.index + m[0].length }); return ps; });
      if (pos.some(p => !p.length)) continue;
      let melhor = null;
      const busca = (k, ant, cadeia) => {
        if (k === n) { melhor = melhor && melhor[0].i >= cadeia[0].i ? melhor : cadeia.slice(); return; }
        for (const p of pos[k]) if (p.i > ant) { cadeia.push(p); busca(k + 1, p.fim, cadeia); cadeia.pop(); if (!tent.solta) break; }
      };
      // começa pelas posições de A de trás para frente para preferir a cadeia final
      for (let a = pos[0].length - 1; a >= 0 && !melhor; a--) { const cad = [pos[0][a]]; busca(1, pos[0][a].fim, cad); }
      if (!melhor) continue;
      const alts = melhor.map((p, k) => t.slice(p.fim, k + 1 < melhor.length ? melhor[k + 1].i : t.length).trim());
      // "A A 50": a letra se repete no começo do texto da alternativa
      const rep = alts.every((a, k) => new RegExp('^' + ORDEM[k] + '\\s').test(a));
      const lim = alts.map((a, k) => (rep ? a.replace(new RegExp('^' + ORDEM[k] + '\\s'), '') : a).trim());
      if (lim.some(a => !a || a.length > 400)) continue;
      return { corpo: t.slice(0, melhor[0].i).trim(), alts: lim };
    }
  }
  return null;
}

function afirmacoes(t, tipo) {
  if (tipo === 'soma') {
    const re = /(?:^|\s)(\d{2})\.\s/g, ms = []; let m; while ((m = re.exec(t))) ms.push({ n: m[1], i: m.index, fim: m.index + m[0].length });
    const seq = []; let esp = 1; ms.forEach(x => { if (+x.n === esp) { seq.push(x); esp *= 2; } });
    if (seq.length >= 2) return { corpo: t.slice(0, seq[0].i).trim(), af: seq.map((x, k) => t.slice(x.fim, k + 1 < seq.length ? seq[k + 1].i : t.length).trim()) };
  }
  const re = /\(\s*\)\s*/g, ps = []; let m; while ((m = re.exec(t))) ps.push({ i: m.index, fim: m.index + m[0].length });
  if (ps.length >= 2) return { corpo: t.slice(0, ps[0].i).trim(), af: ps.map((x, k) => t.slice(x.fim, k + 1 < ps.length ? ps[k + 1].i : t.length).trim()) };
  const rom = /(?:^|\s)(I{1,3}|IV|V)\.\s/g, rs = []; while ((m = rom.exec(t))) rs.push({ i: m.index, fim: m.index + m[0].length });
  if (rs.length >= 2) return { corpo: t.slice(0, rs[0].i).trim(), af: rs.map((x, k) => t.slice(x.fim, k + 1 < rs.length ? rs[k + 1].i : t.length).trim()) };
  return null;
}

/** { e, p?, a?, af? } — rascunho para uma questão do banco (usa q.busca, q.tipo) */
function rascunho(q) {
  const t = limpa(q.busca);
  const r = { e: t };
  if (q.tipo === 'mc') { const x = acharAlternativas(t); if (x) { r.e = x.corpo; r.a = x.alts; } }
  else if (q.tipo === 'vf' || q.tipo === 'soma') { const x = afirmacoes(t, q.tipo); if (x) { r.e = x.corpo; r.af = x.af; } }
  r.e = r.e.replace(/^\d{1,3}\.\s+(?=\S)/, '').replace(/^\(?\d{1,3}\)\s+/, '').replace(/^Quest[ãa]o\s*\d+\s*/i, '');
  return r;
}
module.exports = { rascunho, limpa };

// ---------- texto embaralhado (fonte trocada no PDF): usa o OCR das linhas ----------
const embaralhado = t => /[\u0000-\u001f]/.test(t || '') || ((String(t || '').match(/\b[A-Z]{5,}\b/g) || []).length > 6);
const fs = require('fs'), path = require('path');
let OCR = null;
const ocrDe = id => { if (!OCR) { const a = path.join(__dirname, 'ocr.json'); OCR = fs.existsSync(a) ? JSON.parse(fs.readFileSync(a, 'utf8')) : {}; } return OCR[id] && OCR[id].l; };
function daOcr(linhas, tipo) {
  const L = linhas.filter(l => l.t && l.t.trim());
  const texto = L.map(l => l.t.trim()).join(' ').replace(/\s+/g, ' ');
  const r = { e: limpa(texto) };
  if (tipo !== 'mc' || L.length < 7) return r;
  const xs = L.slice(0, Math.ceil(L.length / 2)).map(l => l.x).sort((a, b) => a - b), med = xs[Math.floor(xs.length / 2)];
  let k = L.length; while (k > 0 && L[k - 1].x > med + 30) k--;           // bloco final recuado = alternativas
  const bloco = L.slice(k); if (bloco.length < 5) return r;
  const gaps = bloco.slice(1).map((l, i) => l.y - bloco[i].y), base = [...gaps].sort((a, b) => a - b)[Math.floor(gaps.length / 2)] || 1;
  const grupos = [[bloco[0]]]; bloco.slice(1).forEach((l, i) => { if (gaps[i] > base * 1.3 && grupos.length < 9) grupos.push([l]); else grupos[grupos.length - 1].push(l); });
  const alts = grupos.map(g => limpa(g.map(l => l.t).join(' ')).replace(/^[A-EOQ©®(][).]?\s+(?=[a-zà-ú0-9$])/, ''));
  if (alts.length === 5 || alts.length === 4) { r.e = limpa(L.slice(0, k).map(l => l.t).join(' ')); r.a = alts; }
  return r;
}
const rascunhoBase = rascunho;
function rascunho2(q) {
  if (q.busca && embaralhado(q.busca)) { const o = ocrDe(q.id); if (o) return daOcr(o, q.tipo); }
  return rascunhoBase(q);
}
module.exports = { rascunho: rascunho2, limpa, embaralhado };

// ---------- alternativas marcadas por "bolinha" (O/Q) no texto do PDF ----------
const rascunho3 = module.exports.rascunho;
module.exports.rascunho = function (q) {
  const r = rascunho3(q);
  if (q.tipo === 'mc' && !r.a && !embaralhado(q.busca)) {
    const t = limpa(q.busca), re = /\sO\s(?=\S)/g, ps = []; let m; while ((m = re.exec(t))) ps.push({ i: m.index, fim: m.index + m[0].length });
    if (ps.length >= 5) { const u = ps.slice(-5); const alts = u.map((x, k) => t.slice(x.fim, k + 1 < 5 ? u[k + 1].i : t.length).trim()); if (alts.every(a => a.length > 2 && a.length < 400)) return Object.assign({}, r, { e: t.slice(0, u[0].i).trim().replace(/^\d{1,3}\.\s+/, '').replace(/^Quest[ãa]o\s*\d+\s*/i, ''), a: alts }); }
  }
  return r;
};

// ---------- quebras de verso/parágrafo a partir da posição das linhas do OCR ----------
const normC = c => c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
/** insere \n / \n\n no texto limpo do PDF conforme o layout das linhas OCR; linhas que não estão no texto (alternativas, figura) são ignoradas */
function estruturar(e, linhas) {
  const idx = [], ne = []; for (let i = 0; i < e.length; i++) { const c = normC(e[i]); if (c) { ne.push(c); idx.push(i); } }
  const N = ne.join('');
  const L = linhas.filter(l => l.w && l.t && normC(l.t).length >= 4);
  const ach = []; let pos = 0;
  for (const l of L) { const pre = [...l.t].map(normC).join('').slice(0, 14); if (pre.length < 6) continue; const k = N.indexOf(pre, pos); if (k < 0 || k - pos > 400) continue; ach.push({ l, ini: k }); pos = k + pre.length; }
  if (ach.length < 3) return e;
  const ls = ach.map(a => a.l), esq = Math.min(...ls.map(l => l.x)), dir = Math.max(...ls.map(l => l.x + l.w));
  const curtas = ls.filter(l => l.x + l.w < esq + 0.78 * (dir - esq)).length / ls.length;
  const ehCurta = l => l.x + l.w < esq + 0.8 * (dir - esq);
  const med = ls.map(l => l.h).sort((a, b) => a - b)[Math.floor(ls.length / 2)] || 20;
  const quebras = []; // [índice no texto original, '\n' | '\n\n']
  for (let k = 1; k < ach.length; k++) {
    const a = ach[k - 1].l, b = ach[k].l, gap = b.y - (a.y + a.h), curta = a.x + a.w < esq + 0.82 * (dir - esq);
    const jan = ach.slice(Math.max(0, k - 2), k + 3).map(z => z.l), poema = jan.filter(ehCurta).length / jan.length > 0.6 && ehCurta(a);
    let q = null;
    if (gap > 0.55 * med && (curta || poema)) q = '\n\n';
    else if (poema) q = '\n';
    else if (curta && b.x > esq + 12) q = '\n\n';
    else if (curta && gap > 0.25 * med) q = '\n\n';
    if (q) { let pos2 = idx[ach[k].ini]; while (pos2 > 0 && /[“"‘'(\[«—–-]/.test(e[pos2 - 1])) pos2--; quebras.push([pos2, q]); } // abre-aspas/travessão ficam junto da linha que começa
  }
  let out = '', ult = 0;
  for (const [i, q] of quebras) { out += e.slice(ult, i).replace(/\s+$/, '') + q; ult = i; }
  return (out + e.slice(ult)).trim();
}
module.exports.estruturar = estruturar;

// ---------- unidades com expoente perdido: "km 3" → km³ (sobrescrito) ----------
const fixU = s => String(s).replace(/(^|[^\p{L}])(km|hm|dam|dm|cm|mm|m)\s?([23])(?![\d,.\p{L}])/gu, '$1$2<sup>$3</sup>');
const rascunho4 = module.exports.rascunho;
module.exports.rascunho = function (q) { const r = rascunho4(q); if (r.e) r.e = fixU(r.e); if (r.p) r.p = fixU(r.p); if (r.a) r.a = r.a.map(fixU); if (r.af) r.af = r.af.map(fixU); return r; };

// ---------- ENEM 2018: texto embaralhado → decifra (glifos deslocados) em vez de OCR ruim ----------
const { decifra } = require('./decifra2018.js');
const rascunho5 = module.exports.rascunho;
module.exports.rascunho = function (q) {
  if (/^enem2018-/.test(q.id) && q.busca && embaralhado(q.busca)) {
    const txt = decifra(q.busca), fake = { id: q.id, tipo: q.tipo, busca: txt, gabarito: q.gabarito };
    const r = rascunho5(fake);
    return r;
  }
  return rascunho5(q);
};
