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
const embaralhado = t => /[\u0000-\u0008\u000b-\u001f]/.test(t || '') || ((String(t || '').match(/\b[B-DF-HJ-NP-TV-Z]{5,}\b/g) || []).length > 2);
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
  for (const l of L) {
    const full = [...l.t].map(normC).join(''); if (full.length < 6) continue;
    let k = -1, usado = 0; // o OCR erra letras (l→I, o→0): tenta o início e, se falhar, trechos do meio da linha
    for (const [off, len] of [[0, 14], [0, 9], [4, 9], [8, 8], [12, 8]]) { if (off + len > full.length && off > 0) continue; const pre = full.slice(off, off + len); if (pre.length < 6) continue; const f = N.indexOf(pre, pos); if (f >= 0 && f - off - pos <= 400 && f >= pos) { k = Math.max(pos, f - off); usado = off + pre.length; break; } }
    if (k < 0) continue; ach.push({ l, ini: k }); pos = k + Math.min(usado, 6);
  }
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
    if (poema ? gap > 1.0 * med : (gap > 0.55 * med && curta)) q = '\n\n';
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

// ---------- busca truncada em 1800 caracteres: completa com o final do texto lido pelo OCR ----------
const rascunho6 = module.exports.rascunho;
function completaBusca(q) {
  const b = String(q.busca || ''); if (b.length < 1790) return null;
  const o = ocrDe(q.id); if (!o) return null;
  const txt = o.map(l => l.t).join(' ').replace(/\s+/g, ' '), idx = [], N = []; for (let i = 0; i < txt.length; i++) { const c = normC(txt[i]); if (c) { N.push(c); idx.push(i); } }
  const NS = N.join(''), nb = [...b].map(normC).join('');
  for (const len of [30, 20, 14, 9, 7]) { const a = nb.slice(-len); const k = NS.lastIndexOf(a); if (k >= 0) { const ini = idx[k + len - 1] + 1; return b + ' ' + txt.slice(ini).trim(); } }
  return null;
}
module.exports.rascunho = function (q) { const nb = completaBusca(q); return rascunho6(nb ? Object.assign({}, q, { busca: nb }) : q); };
module.exports.completaBusca = completaBusca;

// as letras circuladas das alternativas aparecem no OCR como @, O, © ou ®: troca pela letra certa (continuando de onde a busca parou)
const completaBusca0 = module.exports.completaBusca;
function completaBusca2(q) {
  const b = String(q.busca || ''); if (b.length < 1790) return null;
  const o = ocrDe(q.id); if (!o) return null;
  const base = completaBusca0(q); if (!base) return null;
  const tail = base.slice(b.length).trim(); if (!tail) return base;
  const ult = [...b.slice(-600).matchAll(/(?:^|\s)([A-E])\s(?=\S)/g)].map(m => m[1]); const last = ult.length ? ult[ult.length - 1] : null;
  let prox = last ? 'ABCDE'.indexOf(last) + 1 : 0, out = tail;
  out = out.replace(/(^|\s)([@O©®])\s(?=[A-Za-zÀ-ú0-9"“(])/g, (m, pre, mk) => { if (prox > 4) return m; return pre + 'ABCDE'[prox++] + ' '; });
  return b + ' ' + out;
}
module.exports.completaBusca = completaBusca2;
module.exports.rascunho = function (q) { const nb = completaBusca2(q); return rascunho6(nb ? Object.assign({}, q, { busca: nb }) : q); };

// ---------- formatos extras de alternativas: letras dobradas ("A A texto"), bolinhas "OQ", e busca sem as alternativas (completa pelo OCR) ----------
const rascunho7 = module.exports.rascunho;
function completaForcada(q) {
  const o = ocrDe(q.id); if (!o) return null;
  const b = String(q.busca || '');
  const txt = o.map(l => l.t).join(' ').replace(/\s+/g, ' '), idx = [], N = []; for (let i = 0; i < txt.length; i++) { const c = normC(txt[i]); if (c) { N.push(c); idx.push(i); } }
  const NS = N.join(''), nb = [...b].map(normC).join('');
  for (const len of [30, 20, 14, 9]) { const a = nb.slice(-len); if (a.length < len) continue; const k = NS.lastIndexOf(a); if (k >= 0 && k > NS.length * 0.3) { const ini = idx[k + len - 1] + 1; let tail = txt.slice(ini).trim(); if (tail.length < 20) return null;
      const ult = [...b.slice(-600).matchAll(/(?:^|\s)([A-E])\s(?=\S)/g)].map(m => m[1]); let prox = ult.length ? 'ABCDE'.indexOf(ult[ult.length - 1]) + 1 : 0;
      tail = tail.replace(/(^|\s)(?:OQ|O|Q|@|©|®)\s(?=[A-Za-zÀ-ú0-9"“(])/g, (m, pre) => (prox > 4 ? m : pre + 'ABCDE'[prox++] + ' '));
      return b + ' ' + tail; } }
  return null;
}
module.exports.rascunho = function (q) {
  let q2 = q;
  if (q.tipo === 'mc' && q.busca) {
    let b = q.busca.replace(/(^|\s)([A-E]) \2(?=\s)/g, '$1$2');
    b = b.replace(/(?:^|\s)(?:OQ|Q)\s(?=[a-zà-ú])/g, ' O ');            // "OQ ironizar" → bolinha O
    if (b !== q.busca) q2 = Object.assign({}, q, { busca: b });
    const r0 = rascunho7(q2);
    if (!(r0.a && r0.a.length >= 4)) { const c = completaForcada(q2); if (c) { const r1 = rascunho7(Object.assign({}, q2, { busca: c })); if (r1.a && r1.a.length >= 4) return r1; } }
    return r0;
  }
  return rascunho7(q2);
};

// ---------- alternativas lidas das linhas do OCR (marcador "O"/"@"/"©"/"®" na margem, continuação recuada) ----------
const rascunho8 = module.exports.rascunho;
const MARC = /^(?:OQ|O|Q|@|©|®|0|\(\s?[A-E]\s?\)|[A-E][).])\s+(?=\S)/;
const nzA = t => String(t || '').replace(/<[^>]+>/g, ' ').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9,]/g, '');
const tolA = t => nzA(t).replace(/[ilo01]/g, '*');
/** alternativas lidas do PDF x do OCR: iguais (tolerando l/I/0/O), uma prefixo da outra (truncada) → sem conflito */
function altsEmConflito(pdf, ocr) {
  if (pdf.length !== ocr.length) return true;
  return pdf.some((p, i) => { const x = tolA(p), y = tolA(ocr[i]); if (x === y) return false; return !(x.length > 6 && y.length > 6 && (x.startsWith(y) || y.startsWith(x)) && false); });
}
const MK1 = /\s(?:OQ|O|Q|@|©|®)\s(?=\S)/g;
/** tira do fim do enunciado as alternativas coladas (bolinhas O/@): corta no primeiro dos últimos 5 marcadores */
function cortaMarcadores(e) {
  const ps = []; let m; MK1.lastIndex = 0; while ((m = MK1.exec(e))) ps.push(m.index);
  if (ps.length < 4) return e;
  const u = ps.slice(-5), c = e.slice(u[0]);
  return c.length < 900 ? e.slice(0, u[0]).trim() : e;
}
const subseq = (a, b) => { let i = 0; for (const c of b) if (c === a[i]) i++; return i === a.length; }; // a é subsequência de b
/** escolhe, alternativa por alternativa, entre o texto do PDF e o do OCR */
function melhorAlt(pdf, ocr) {
  const V = require('./vocab.js'), x = tolA(ocr), y = tolA(pdf);
  if (x === y) return pdf;
  const susP = V.desconhecidas(pdf).length, susO = V.desconhecidas(ocr).length;
  if (x.length > 3 && y.length > 3 && subseq(x, y) && !susP) return pdf;      // o OCR perdeu letras/palavras
  if (susP && !susO) return ocr;
  if (y.length > 3 && subseq(y, x) && !susO) return ocr;                      // o PDF perdeu o final / caracteres
  return susO <= susP ? ocr : pdf;
}
/** junta pedaços de palavra separados pelo OCR ("antropológi cos", "fu tu ro") quando a união é palavra conhecida */
function juntaPartidas(t) {
  const V = require('./vocab.js');
  const R1 = new RegExp('(\\p{L}{2,}) ([a-zà-ú]{2,5})(?= |[.,;:!?)”"]|$)', 'gu'), R2 = new RegExp('(\\p{L}{4,}) (s)(?= |[.,;:!?)”"]|$)', 'gu');
  return String(t).replace(R1, (m, a, b) => { const j = (a + b).toLowerCase(); if (V.conhecida(j) && !(V.conhecida(a.toLowerCase()) && V.conhecida(b.toLowerCase()))) return a + b; if (!V.conhecida(a.toLowerCase()) && (a + b).length >= 8 && a.length >= 5 && V.desconhecidas(a).length) return a + b; return m; }).replace(R2, '$1$2');
}
/** separa as linhas em exatamente 5 grupos pelos maiores espaços verticais (alternativas) */
function agrupa5(ls) {
  if (ls.length < 5) return null;
  const gaps = ls.slice(1).map((l, i) => l.y - ls[i].y);
  const idx = gaps.map((g, i) => [g, i]).sort((a, b) => b[0] - a[0]).slice(0, 4).map(x => x[1]).sort((a, b) => a - b);
  const menorEscolhido = Math.min(...idx.map(i => gaps[i])), maiorNaoEscolhido = Math.max(0, ...gaps.filter((g, i) => !idx.includes(i)));
  if (menorEscolhido <= maiorNaoEscolhido) return null; // sem separação clara
  const gr = []; let ini = 0; idx.forEach(i => { gr.push(ls.slice(ini, i + 1)); ini = i + 1; }); gr.push(ls.slice(ini));
  return gr;
}
function altsDoOcr0(q) {
  const o = ocrDe(q.id); if (!o) return null;
  const L = o.filter(l => l.t && l.t.trim()).sort((a, b) => a.y - b.y || a.x - b.x);
  const mk = []; L.forEach((l, i) => { if (MARC.test(l.t.trim())) mk.push(i); });
  if (mk.length < 5) {
    // marcadores soltos ("O" sozinhos em linhas seguidas) e as alternativas recuadas logo abaixo
    const so = []; L.forEach((l, i) => { if (/^[O@©®0Q]$/.test(l.t.trim())) so.push(i); });
    let ult, xm, resto;
    if (so.length >= 2) { // marcadores soltos (alguns o OCR não leu): pega o bloco recuado logo depois do último
      const k0 = so[so.length - 1], k1 = so[Math.max(0, so.length - 5)]; xm = L[k0].x; resto = L.slice(k1).filter(l => l.x >= xm + 25 && !/^[O@©®0Q]$/.test(l.t.trim())); ult = [k1, 0, 0, 0, k0];
    } else return null;
    if (resto.length < 5) return null;
    if (resto.length === 5) resto.forEach(l => (l.__um = 1));
    const gaps = resto.slice(1).map((l, i) => l.y - resto[i].y), base = [...gaps].sort((p, q) => p - q)[Math.floor(gaps.length / 2)] || 1;
    let grupos = [[resto[0]]]; resto.slice(1).forEach((l, i) => { if (gaps[i] > base * 1.25) grupos.push([l]); else grupos[grupos.length - 1].push(l); });
    if (resto.length === 5) grupos = resto.map(l => [l]);
    if (grupos.length !== 5) grupos = agrupa5(resto) || grupos;
    if (grupos.length !== 5) return null;
    const alts = grupos.map(g => limpa(g.map(l => l.t.trim()).join(' ')));
    if (alts.some(t => t.length < 3 || t.length > 450)) return null;
    const stemLines = L.slice(0, ult[0]);
    return { alts, stemLines, stem: stemLines.map(l => l.t.trim()).join(' ').replace(/\s+/g, ' ') };
  }
  const u = mk.slice(-5), x0 = L[u[0]].x;
  if (u.some(i => Math.abs(L[i].x - x0) > 14)) return null;
  const fim = L.length, alts = [];
  for (let k = 0; k < 5; k++) {
    const a = u[k], b = k < 4 ? u[k + 1] : fim, bl = L.slice(a, b);
    if (bl.some((l, j) => j > 0 && (l.x > x0 + 110 || l.x < x0 - 6))) return null;
    alts.push(limpa(bl.map(l => l.t.trim()).join(' ').replace(MARC, '')));
  }
  if (alts.some(t => t.length < 3 || t.length > 450)) return null;
  const stemLines = L.slice(0, u[0]);
  return { alts, stemLines, stem: stemLines.map(l => l.t.trim()).join(' ').replace(/\s+/g, ' ') };
}
module.exports.rascunho = function (q) {
  const r = rascunho8(q);
  if (q.tipo !== 'mc' || !q.busca) return r;
  const d = altsDoOcr(q); if (!d) return r;
  if (r.a && r.a.length >= 4 && !altsEmConflito(r.a, d.alts)) return r;
  let b = limpa(q.busca).replace(/^\d{1,3}\.\s+/, '').replace(/^Quest[ãa]o\s*\d+\s*/i, '');
  const nb = [...b].map(normC), idx = []; nb.forEach((c, i) => { if (c) idx.push(i); });
  const NB = nb.filter(Boolean).join('');
  const pre = [...d.alts[0]].map(normC).join('').slice(0, 14);
  let e = null;
  const f = pre.length >= 8 ? NB.indexOf(pre) : -1;
  if (f > 0) { e = b.slice(0, idx[f]).replace(/\s+(?:OQ|O|Q|@|©|®|[A-E])\s*$/, '').trim(); }
  else {
    const S = d.stem, sN = [], sI = []; for (let i = 0; i < S.length; i++) { const c = normC(S[i]); if (c) { sN.push(c); sI.push(i); } }
    const NS = sN.join('');
    for (const len of [30, 20, 14, 9]) { const a = NB.slice(-len); if (a.length < len) continue; const k = NS.lastIndexOf(a); if (k >= 0) { e = (b + ' ' + S.slice(sI[k + len - 1] + 1).trim()).trim(); break; } }
    if (e === null && NB.length > 200) e = b;
  }
  if (e === null) return r;
  e = cortaMarcadores(e.replace(/\s+(?:OQ|O|Q|@|©|®)\s*$/, '').trim()).replace(/\s+(?:OQ|O|Q|@|©|®)\s*$/, '').trim();
  const rr = Object.assign({}, r, { e: juntaPartidas(fixU(estruturar(e, o2(q.id)))), a: d.alts.map((x, i) => juntaPartidas(fixU(r.a && r.a.length === d.alts.length ? melhorAlt(r.a[i], x) : x))) });
  const sus = require('./vocab.js').desconhecidas([rr.e, ...rr.a].join(' ')); if (sus.length) rr.avisos = sus;
  return rr;
};
function o2(id) { return ocrDe(id) || []; }

module.exports.altsEmConflito = altsEmConflito;

module.exports.altsDoOcr = altsDoOcr; module.exports.altsEmConflito = altsEmConflito; module.exports.juntaPartidas = juntaPartidas;

// fallback: só alguns marcadores foram lidos pelo OCR; as alternativas são separadas pelo espaçamento vertical entre as linhas
const MARC0 = /^(?:OQ|O|Q|@|©|®|0)(?:s+|$)/;
function altsDoOcr(q) {
  const r = altsDoOcr0(q); if (r) return r;
  const o = ocrDe(q.id); if (!o) return null;
  const L = o.filter(l => l.t && l.t.trim() && l.w).sort((a, b) => a.y - b.y || a.x - b.x);
  if (L.length < 8) return null;
  const ps = L.slice(1).map((l, i) => l.y - L[i].y).filter(v => v > 0).sort((a, b) => a - b), pitch = ps[Math.floor(ps.length / 3)] || 28;
  const cand = []; L.forEach((l, i) => { if (i > 1 && MARC0.test(l.t.trim())) cand.push(i); });
  for (let c = cand.length - 1; c >= 0; c--) {
    const i0 = cand[c], bl = L.slice(i0), gr = [[bl[0]]];
    for (let k = 1; k < bl.length; k++) { if (MARC0.test(bl[k].t.trim()) || bl[k].y - bl[k - 1].y > 1.3 * pitch) gr.push([bl[k]]); else gr[gr.length - 1].push(bl[k]); }
    if (gr.length < 5) continue;
    if (gr.length > 5) break;
    const alts = gr.map(g => limpa(g.map(l => l.t.trim()).join(' ').replace(MARC0, '')));
    if (alts.some(t => t.length < 3 || t.length > 450)) continue;
    const stemLines = L.slice(0, i0);
    return { alts, stemLines, stem: stemLines.map(l => l.t.trim()).join(' ').replace(/\s+/g, ' ') };
  }
  return require('./alts-fallback.js')(L, limpa);
}
module.exports.altsDoOcr = altsDoOcr;
