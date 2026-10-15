// ============================================================
// EduMath Provas — exportar a prova para Word (.docx).
// Gerador próprio, sem bibliotecas: monta o pacote OOXML + zip. Roda no navegador (offline) e no Node (testes).
//
//   gerarDocx(modelo, io) -> Promise<Uint8Array>     modelo = { nome, versao, cab, layout, gab, lista:[{q,num,ordem,omitirBase,valor}], total }
//   baixarDocx(modelo, 'arquivo.docx')               (só no navegador)
//
// - Frações e raízes viram EQUAÇÕES do Word (OMML); expoentes e índices simples viram texto sobrescrito/subscrito.
// - Figuras SVG (gráficos, barras) viram imagens PNG; imagens (ENEM etc.) são embutidas.
// - Colunas, cabeçalho, rodapé "Página X de Y" e gabarito seguem a configuração da prova.
// `io` fornece: carregarImagem(src) -> {bytes,tipo}|null  e  rasterizarSvg(svg, w, h) -> {bytes}|null.
// ============================================================
import { mat } from './matematica.js';
import { figuraHtml } from './figuras.js';
import { gabaritoDe, SOMA_VALORES, fmtPt, altClasse } from './questoes.js';

const TW = 56.6929, tw = mm => Math.round(mm * TW), EMU = 36000;
const F_TXT = 'Cambria', F_UI = 'Arial', F_MAT = 'Cambria';
const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
const CTRL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g;
const X = s => String(s == null ? '' : s).replace(CTRL, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const enc = new TextEncoder();

// ---------- zip (sem compressão) ----------
const CRC_T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b) { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC_T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
export function zip(arquivos) {
  const partes = [], central = []; let pos = 0;
  const d = new Date(), hora = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), data = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  for (const f of arquivos) {
    const nome = enc.encode(f.nome), dados = typeof f.dados === 'string' ? enc.encode(f.dados) : f.dados, crc = crc32(dados);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true); lh.setUint16(10, hora, true); lh.setUint16(12, data, true);
    lh.setUint32(14, crc, true); lh.setUint32(18, dados.length, true); lh.setUint32(22, dados.length, true); lh.setUint16(26, nome.length, true); lh.setUint16(28, 0, true);
    partes.push(new Uint8Array(lh.buffer), nome, dados);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true); ch.setUint16(12, hora, true); ch.setUint16(14, data, true);
    ch.setUint32(16, crc, true); ch.setUint32(20, dados.length, true); ch.setUint32(24, dados.length, true); ch.setUint16(28, nome.length, true); ch.setUint32(42, pos, true);
    central.push(new Uint8Array(ch.buffer), nome);
    pos += 30 + nome.length + dados.length;
  }
  const tc = central.reduce((t, p) => t + p.length, 0);
  const fim = new DataView(new ArrayBuffer(22));
  fim.setUint32(0, 0x06054b50, true); fim.setUint16(8, arquivos.length, true); fim.setUint16(10, arquivos.length, true); fim.setUint32(12, tc, true); fim.setUint32(16, pos, true);
  const todos = [...partes, ...central, new Uint8Array(fim.buffer)], out = new Uint8Array(todos.reduce((t, p) => t + p.length, 0));
  let o = 0; for (const p of todos) { out.set(p, o); o += p.length; }
  return out;
}

// ---------- mini analisador de HTML ----------
const VOID = new Set(['br', 'img', 'hr', 'input', 'meta', 'link', 'svgraw']);
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…', deg: '°', times: '×', divide: '÷', minus: '−', middot: '·', plusmn: '±', le: '≤', ge: '≥', ne: '≠', asymp: '≈', pi: 'π', laquo: '«', raquo: '»', ordm: 'º', ordf: 'ª', sup2: '²', sup3: '³', frac12: '½', copy: '©', rarr: '→', larr: '←', harr: '↔' };
const dec = s => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (m, e) => {
  if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : +e.slice(1); try { return String.fromCodePoint(n); } catch (_) { return ''; } }
  return ENT[e.toLowerCase()] !== undefined ? ENT[e.toLowerCase()] : m;
});
export function parse(html) {
  const svgs = [];
  html = String(html == null ? '' : html).replace(/<svg\b[\s\S]*?<\/svg>/gi, m => { svgs.push(m); return `<svgraw n="${svgs.length - 1}"/>`; });
  const root = { t: 'root', a: {}, c: [] }, pilha = [root];
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>|([^<]+)|</g;
  let m;
  while ((m = re.exec(html))) {
    if (m[5] != null) { pilha[pilha.length - 1].c.push({ t: '#', s: dec(m[5]) }); continue; }
    if (m[2] == null) { if (m[0] === '<') pilha[pilha.length - 1].c.push({ t: '#', s: '<' }); continue; }
    const tag = m[2].toLowerCase();
    if (m[1]) { for (let k = pilha.length - 1; k > 0; k--) if (pilha[k].t === tag) { pilha.length = k; break; } continue; }
    const a = {}; m[3].replace(/([^\s=\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, (_, k, v1, v2, v3) => { a[k.toLowerCase()] = dec(v1 !== undefined ? v1 : v2 !== undefined ? v2 : v3 !== undefined ? v3 : ''); return ''; });
    const n = { t: tag, a, c: [] };
    pilha[pilha.length - 1].c.push(n);
    if (!m[4] && !VOID.has(tag)) pilha.push(n);
  }
  return { c: root.c, svgs };
}
const txt = n => n.t === '#' ? n.s : (n.c || []).map(txt).join('');
const cls = (n, c) => !!(n.a && n.a.class && new RegExp('(^|\\s)' + c + '(\\s|$)').test(n.a.class));
const colapsa = s => s.replace(/ /g, '').replace(/\s+/g, ' ').replace(//g, ' ');

// ---------- equações (OMML) ----------
const mrun = (s, itl) => `<m:r>${itl ? '' : '<m:rPr><m:sty m:val="p"/></m:rPr>'}<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr><m:t xml:space="preserve">${X(s)}</m:t></m:r>`;
function popBase(it) {
  if (!it.length) return '';
  const ult = it[it.length - 1];
  if (ult.s === ')') {
    let d = 0, k = it.length - 1;
    for (; k >= 0; k--) { if (it[k].s === ')') d++; else if (it[k].s === '(') { d--; if (d === 0) break; } }
    if (k >= 0) return it.splice(k).map(i => i.x).join('');
  }
  if (ult.s === ' ') return '';
  return it.pop().x;
}
function ommlItens(nodes, it) {
  const texto = (s, itl) => { for (const p of s.match(/\d+(?:[.,]\d+)?|[A-Za-zÀ-ÿΑ-Ωα-ω]+|\s|[\s\S]/g) || []) it.push({ x: mrun(p, itl), s: p }); };
  for (const n of nodes) {
    if (n.t === '#') { texto(n.s.replace(/\s+/g, ' '), false); continue; }
    if (n.t === 'i' || n.t === 'em') { texto(txt(n).replace(/\s+/g, ' '), true); continue; }
    if (n.t === 'span' && cls(n, 'fr')) { const ch = n.c.filter(c => c.t !== '#'); it.push({ x: `<m:f><m:num>${omml(ch[0] ? ch[0].c : [])}</m:num><m:den>${omml(ch[1] ? ch[1].c : [])}</m:den></m:f>`, s: '' }); continue; }
    if (n.t === 'span' && cls(n, 'rt')) {
      const idx = n.c.find(c => c.t === 'sup'), rad = n.c.find(c => c.t === 'span' && cls(c, 'rr'));
      it.push({ x: `<m:rad>${idx ? '' : '<m:radPr><m:degHide m:val="1"/></m:radPr>'}<m:deg>${idx ? omml(idx.c) : ''}</m:deg><m:e>${omml(rad ? rad.c : [])}</m:e></m:rad>`, s: '' }); continue;
    }
    if (n.t === 'sup' || n.t === 'sub') {
      const base = popBase(it);
      it.push({ x: n.t === 'sup' ? `<m:sSup><m:e>${base}</m:e><m:sup>${omml(n.c)}</m:sup></m:sSup>` : `<m:sSub><m:e>${base}</m:e><m:sub>${omml(n.c)}</m:sub></m:sSub>`, s: '' }); continue;
    }
    ommlItens(n.c || [], it);
  }
  return it;
}
function omml(nodes) {
  const it = ommlItens(nodes, []);
  while (it.length && it[0].s === ' ') it.shift();
  while (it.length && it[it.length - 1].s === ' ') it.pop();
  return it.map(i => i.x).join('');
}
const temEstrutura = nodes => nodes.some(n => (n.t === 'span' && (cls(n, 'fr') || cls(n, 'rt'))) || (n.c && temEstrutura(n.c)));

// ---------- texto formatado ----------
const rPr = st => {
  let x = '';
  if (st.font) x += `<w:rFonts w:ascii="${st.font}" w:hAnsi="${st.font}" w:cs="${st.font}"/>`;
  if (st.b) x += '<w:b/><w:bCs/>';
  if (st.i) x += '<w:i/><w:iCs/>';
  if (st.caps) x += '<w:caps/>';
  if (st.color) x += `<w:color w:val="${st.color}"/>`;
  if (st.sz) x += `<w:sz w:val="${st.sz}"/><w:szCs w:val="${st.sz}"/>`;
  if (st.u) x += '<w:u w:val="single"/>';
  if (st.bdr) x += '<w:bdr w:val="single" w:sz="8" w:space="2" w:color="111111"/>';
  if (st.va) x += `<w:vertAlign w:val="${st.va}"/>`;
  return x ? `<w:rPr>${x}</w:rPr>` : '';
};
const run = (s, st = {}) => s ? `<w:r>${rPr(st)}<w:t xml:space="preserve">${X(s)}</w:t></w:r>` : '';
const tabRun = '<w:r><w:tab/></w:r>';

function limpaItens(it) {
  while (it.length && it[0].k === 't') { it[0].s = it[0].s.replace(/^ +/, ''); if (it[0].s) break; it.shift(); }
  while (it.length && it[it.length - 1].k === 't') { const u = it[it.length - 1]; u.s = u.s.replace(/ +$/, ''); if (u.s) break; it.pop(); }
  for (let i = 0; i < it.length; i++) {
    if (it[i].k === 'br') { if (i > 0 && it[i - 1].k === 't') it[i - 1].s = it[i - 1].s.replace(/ +$/, ''); if (it[i + 1] && it[i + 1].k === 't') it[i + 1].s = it[i + 1].s.replace(/^ +/, ''); }
    else if (it[i].k === 't' && it[i - 1] && it[i - 1].k === 't' && /\s$/.test(it[i - 1].s) && /^ /.test(it[i].s)) it[i].s = it[i].s.slice(1);
  }
  return it.filter(i => i.k !== 't' || i.s);
}
const runsXml = it => limpaItens(it).map(i => i.k === 't' ? run(i.s, i.st) : i.k === 'br' ? '<w:r><w:br/></w:r>' : i.xml).join('');

function estiloCss(a, prop) { const m = new RegExp('(?:^|;)\\s*' + prop + '\\s*:\\s*([\\d.]+)\\s*(%|mm|px|cm|em)?', 'i').exec((a && a.style) || ''); return m ? { v: +m[1], u: (m[2] || 'px').toLowerCase() } : null; }
function largMm(spec, cw, natMm) {
  if (!spec) return Math.min(natMm || cw, cw);
  const mm = spec.u === '%' ? cw * spec.v / 100 : spec.u === 'mm' ? spec.v : spec.u === 'cm' ? spec.v * 10 : spec.u === 'px' ? spec.v * 25.4 / 96 : natMm || cw;
  return Math.min(mm, cw);
}

async function inl(nodes, st, ctx, out) {
  for (const n of nodes) {
    if (n.t === '#') { out.push({ k: 't', s: colapsa(n.s), st }); continue; }
    switch (n.t) {
      case 'br': out.push({ k: 'br' }); break;
      case 'b': case 'strong': await inl(n.c, Object.assign({}, st, { b: true }), ctx, out); break;
      case 'i': case 'em': await inl(n.c, Object.assign({}, st, { i: true }), ctx, out); break;
      case 'u': await inl(n.c, Object.assign({}, st, { u: true }), ctx, out); break;
      case 'sup': await inl(n.c, Object.assign({}, st, { va: 'superscript' }), ctx, out); break;
      case 'sub': await inl(n.c, Object.assign({}, st, { va: 'subscript' }), ctx, out); break;
      case 'small': await inl(n.c, Object.assign({}, st, { sz: Math.round(ctx.hp * .86) }), ctx, out); break;
      case 'img': { const x = await ctx.img(n.a.src || '', estiloCss(n.a, 'width'), n.a.alt, ctx.cw); if (x) out.push({ k: 'x', xml: x }); else out.push({ k: 't', s: '[imagem]', st }); break; }
      case 'svgraw': { const x = await ctx.svg(ctx.svgs[+n.a.n], null, ctx.cw); if (x) out.push({ k: 'x', xml: x }); else out.push({ k: 't', s: '[figura]', st }); break; }
      case 'script': case 'style': case 'button': break;
      case 'span':
        if (cls(n, 'tex')) {
          if (temEstrutura(n.c)) out.push({ k: 'x', xml: `<m:oMath>${omml(n.c)}</m:oMath>` });
          else await inl(n.c, Object.assign({}, st, { font: F_MAT }), ctx, out);
        } else if (cls(n, 'q-pts')) await inl(n.c, Object.assign({}, st, { font: F_UI, b: true, sz: Math.round(ctx.hp * .8) }), ctx, out);
        else await inl(n.c, st, ctx, out);
        break;
      case 'p': case 'div': case 'li': case 'figure': case 'figcaption': case 'h1': case 'h2': case 'h3': case 'h4':
        if (out.length) out.push({ k: 'br' });
        await inl(n.c, st, ctx, out); break;
      default: await inl(n.c || [], st, ctx, out);
    }
  }
}

// ---------- parágrafos e tabelas ----------
function par(inner, o = {}) {
  let p = '';
  if (o.keepNext) p += '<w:keepNext/>';
  if (o.keepLines !== false) p += '<w:keepLines/>';
  if (o.pbdr) p += o.pbdr;
  if (o.shd) p += `<w:shd w:val="clear" w:color="auto" w:fill="${o.shd}"/>`;
  if (o.tabs) p += `<w:tabs>${o.tabs.map(t => `<w:tab w:val="${t.v}" w:pos="${t.p}"/>`).join('')}</w:tabs>`;
  p += `<w:spacing w:before="${o.before || 0}" w:after="${o.after || 0}"${o.line ? ` w:line="${o.line}" w:lineRule="${o.rule || 'auto'}"` : ''}/>`;
  if (o.left || o.hanging || o.right) p += `<w:ind w:left="${o.left || 0}"${o.right ? ` w:right="${o.right}"` : ''}${o.hanging ? ` w:hanging="${o.hanging}"` : ''}/>`;
  if (o.jc) p += `<w:jc w:val="${o.jc}"/>`;
  if (o.sect) p += o.sect;
  return `<w:p><w:pPr>${p}</w:pPr>${inner}</w:p>`;
}
const bd = (lado, sz, cor = '111111') => `<w:${lado} w:val="${sz ? 'single' : 'nil'}"${sz ? ` w:sz="${sz}" w:space="0" w:color="${cor}"` : ''}/>`;

/** Converte nós HTML em blocos (parágrafos/tabelas). o = { left, hanging, prefix, keepNext, jc, st, cw } */
async function blk(nodes, ctx, o = {}) {
  const out = []; let buf = [], primeiro = true;
  const st0 = o.st || {};
  const cria = async (final) => {
    const it = []; await inl(buf, st0, ctx, it); buf = [];
    const temConteudo = limpaItens(it.slice()).length > 0;
    if (!temConteudo && !(final && primeiro && o.prefix && !o.soSeTexto)) return;
    const pre = primeiro && o.prefix ? o.prefix : '';
    out.push(par(pre + runsXml(it), { left: o.left, hanging: primeiro && o.prefix ? o.hanging : 0, jc: o.jc, keepNext: o.keepNext, line: o.line, rule: o.rule, before: o.before, after: o.after }));
    primeiro = false;
  };
  for (const n of nodes) {
    const t = n.t;
    const bloco = t === 'p' || t === 'div' || t === 'ul' || t === 'ol' || t === 'li' || t === 'table' || t === 'figure' || t === 'figcaption' || /^h[1-6]$/.test(t) || t === 'article' || t === 'section' || t === 'hr';
    if (!bloco) { buf.push(n); continue; }
    await cria();
    if (t === 'hr') continue;
    if (t === 'table') { out.push(await tabela(n, ctx, o)); primeiro = false; continue; }
    if (t === 'ul' || t === 'ol') {
      let k = 0;
      for (const li of n.c.filter(c => c.t === 'li')) {
        k++; const marca = t === 'ul' ? '•' : k + '.';
        out.push(...await blk(li.c, ctx, { left: (o.left || 0) + tw(5), hanging: tw(5), prefix: run(marca, { font: F_UI }) + tabRun, keepNext: o.keepNext, st: st0, cw: ctx.cw }));
      }
      primeiro = false; continue;
    }
    if (t === 'figure') { out.push(...await blk(n.c, ctx, { left: o.left, jc: 'center', keepNext: true, st: st0, before: tw(1.5), after: tw(1.5) })); primeiro = false; continue; }
    if (t === 'figcaption') { out.push(...await blk(n.c, ctx, { left: o.left, jc: 'center', keepNext: o.keepNext, st: Object.assign({}, st0, { font: F_UI, b: true, sz: Math.round(ctx.hp * .78) }) })); primeiro = false; continue; }
    if (/^h[1-6]$/.test(t)) { out.push(...await blk(n.c, ctx, { left: o.left, keepNext: true, st: Object.assign({}, st0, { b: true }) })); primeiro = false; continue; }
    // p, div, article, section: filhos como blocos; o prefixo vai para o primeiro parágrafo
    let sub = o, cwLocal = ctx.cw;
    if (t === 'div' && cls(n, 'fig-svgw')) { const w = estiloCss(n.a, 'width'); if (w && w.u === '%') cwLocal = ctx.cw * w.v / 100; }
    const ctx2 = cwLocal === ctx.cw ? ctx : Object.assign({}, ctx, { cw: cwLocal });
    const r = await blk(n.c, ctx2, Object.assign({}, sub, { prefix: primeiro ? o.prefix : null, soSeTexto: true }));
    if (r.length) { out.push(...r); primeiro = false; }
  }
  await cria(true);
  return out;
}

async function tabela(n, ctx, o = {}) {
  const linhas = [];
  const colhe = nodes => { for (const x of nodes) { if (x.t === 'tr') linhas.push(x.c.filter(c => c.t === 'td' || c.t === 'th')); else if (x.c) colhe(x.c); } };
  colhe(n.c);
  const nc = Math.max(1, ...linhas.map(l => l.length)), cw = ctx.cw - (o.left ? o.left / TW : 0), larg = estiloCss(n.a, 'width');
  const nat = Array.from({ length: nc }, (_, k) => Math.min(80, Math.max(14, Math.max(...linhas.map(l => l[k] ? txt(l[k]).trim().length : 0)) * 2.1 + 7)));
  const somaNat = nat.reduce((a, b) => a + b, 0), alvo = larg && larg.u === '%' ? Math.min(somaNat, cw * larg.v / 100) : Math.min(somaNat, cw);
  // cada coluna precisa caber a maior palavra (o HTML nunca parte uma palavra); depois ajusta ao espaço disponível
  const mn = Array.from({ length: nc }, (_, k) => Math.min(60, Math.max(9, Math.max(0, ...linhas.map(l => l[k] ? Math.max(0, ...txt(l[k]).split(/\s+/).map(w => w.length)) : 0)) * 2.4 + 5)));
  let mm = nat.map((v, k) => Math.max(mn[k], v * alvo / somaNat)); const s0 = mm.reduce((a, b) => a + b, 0); if (s0 > cw) mm = mm.map(v => v * cw / s0);
  const cols = mm.map(tw), tot = cols.reduce((a, b) => a + b, 0);
  const ctxC = Object.assign({}, ctx, { cw: Math.min(...cols) / TW - 2 });
  let x = `<w:tbl><w:tblPr><w:tblW w:w="${tot}" w:type="dxa"/><w:jc w:val="center"/><w:tblBorders>${bd('top', 4)}${bd('left', 4)}${bd('bottom', 4)}${bd('right', 4)}${bd('insideH', 4)}${bd('insideV', 4)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="28" w:type="dxa"/><w:left w:w="85" w:type="dxa"/><w:bottom w:w="28" w:type="dxa"/><w:right w:w="85" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${cols.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>`;
  for (const l of linhas) {
    x += '<w:tr><w:trPr><w:cantSplit/></w:trPr>';
    for (let k = 0; k < nc; k++) {
      const c = l[k];
      const ps = c ? await blk(c.c, ctxC, { jc: 'center', st: c.t === 'th' ? { b: true, font: F_UI, sz: Math.round(ctx.hp * .9) } : {} }) : [];
      x += `<w:tc><w:tcPr><w:tcW w:w="${cols[k]}" w:type="dxa"/>${c && c.t === 'th' ? '<w:shd w:val="clear" w:color="auto" w:fill="EEEEEE"/>' : ''}<w:vAlign w:val="center"/></w:tcPr>${ps.length ? ps.join('') : '<w:p/>'}</w:tc>`;
    }
    x += '</w:tr>';
  }
  return x + '</w:tbl>';
}

// ---------- imagens ----------
function dimsImagem(b, tipo) {
  try {
    if (tipo === 'png') return { w: ((b[16] << 24) | (b[17] << 16) | (b[18] << 8) | b[19]) >>> 0, h: ((b[20] << 24) | (b[21] << 16) | (b[22] << 8) | b[23]) >>> 0 };
    if (tipo === 'gif') return { w: b[6] | (b[7] << 8), h: b[8] | (b[9] << 8) };
    if (tipo === 'jpeg') {
      let i = 2;
      while (i < b.length) {
        if (b[i] !== 0xFF) { i++; continue; }
        const mk = b[i + 1];
        if (mk >= 0xC0 && mk <= 0xCF && mk !== 0xC4 && mk !== 0xC8 && mk !== 0xCC) return { h: (b[i + 5] << 8) | b[i + 6], w: (b[i + 7] << 8) | b[i + 8] };
        i += 2 + ((b[i + 2] << 8) | b[i + 3]);
      }
    }
  } catch (_) { /* segue */ }
  return null;
}
export function tipoImagem(b) {
  if (b.length > 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4E && b[3] === 0x47) return 'png';
  if (b.length > 3 && b[0] === 0xFF && b[1] === 0xD8) return 'jpeg';
  if (b.length > 6 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return 'gif';
  return null;
}
const MAPA_VAR = { surface: '#ffffff', bg: '#ffffff', 'surface-2': '#f2f2f2', primary: '#222222', 'primary-soft': '#dddddd', ink: '#222222', 'ink-soft': '#444444', 'ink-faint': '#777777', decay: '#555555', growth: '#333333' };
export function prepararSvg(raw, wPx, hPx) {
  let s = String(raw).replace(/var\(\s*--([a-z0-9-]+)\s*(?:,\s*([^)]+))?\)/gi, (_, v, d) => MAPA_VAR[v] || (d ? d.trim() : '#888888')).replace(/currentColor/gi, '#111111');
  // atributo repetido é aceito pelo HTML (vale o primeiro) mas é inválido em SVG/XML: mantém só o primeiro de cada tag
  s = s.replace(/<([a-zA-Z][\w:-]*)((?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'))?)+)\s*(\/?)>/g, (m, tag, at, fe) => {
    const vistos = new Set();
    at = at.replace(/\s+([^\s=>\/]+)(\s*=\s*(?:"[^"]*"|'[^']*'))?/g, (x, k) => { k = k.toLowerCase(); if (vistos.has(k)) return ''; vistos.add(k); return x; });
    return `<${tag}${at}${fe}>`;
  });
  s = s.replace(/^<svg\b([^>]*)>/i, (m, at) => {
    at = at.replace(/\s(width|height)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '').replace(/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi, '');
    if (!/xmlns\s*=/.test(at)) at += ' xmlns="http://www.w3.org/2000/svg"';
    return `<svg${at} width="${wPx}" height="${hPx}">`;
  });
  return s;
}
function svgDims(raw) {
  const tag = (/^<svg\b[^>]*>/i.exec(raw) || [''])[0];
  const vb = /viewBox\s*=\s*"([^"]+)"/i.exec(tag);
  if (vb) { const p = vb[1].trim().split(/[\s,]+/).map(Number); if (p.length === 4 && p[2] > 0 && p[3] > 0) return { w: p[2], h: p[3] }; }
  const w = /\swidth\s*=\s*"?([\d.]+)/i.exec(tag), h = /\sheight\s*=\s*"?([\d.]+)/i.exec(tag);
  return w && h ? { w: +w[1], h: +h[1] } : { w: 300, h: 200 };
}
const pxMm = px => px * 25.4 / 96;

function criarContexto(io, hp, cw) {
  const ctx = {
    io, hp, cw, svgs: [], midia: [], porSrc: new Map(), idDoc: 0,
    desenho(rId, wMm, hMm, descr, nome) {
      const cx = Math.round(wMm * EMU), cy = Math.round(hMm * EMU), id = ++ctx.idDoc;
      return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="Imagem ${id}" descr="${X(descr || '')}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="${X(nome)}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
    },
    registra(bytes, tipo) { const n = ctx.midia.length + 1, nome = `image${n}.${tipo === 'jpeg' ? 'jpeg' : tipo}`; ctx.midia.push({ nome, bytes, tipo }); return { rId: 'rIdImg' + n, nome }; },
    async img(src, spec, alt, cw) {
      if (!src) return '';
      let d = ctx.porSrc.get(src);
      if (d === undefined) {
        d = null;
        try {
          const r = await io.carregarImagem(src);
          if (r && r.bytes && r.tipo) { const dm = dimsImagem(r.bytes, r.tipo) || { w: 600, h: 400 }; d = Object.assign(ctx.registra(r.bytes, r.tipo), { dm }); }
        } catch (_) { d = null; }
        ctx.porSrc.set(src, d);
      }
      if (!d) return '';
      const nat = pxMm(d.dm.w), w = largMm(spec, cw || ctx.cw, nat), h = Math.min(w * d.dm.h / d.dm.w, 250), w2 = h < w * d.dm.h / d.dm.w ? h * d.dm.w / d.dm.h : w;
      return ctx.desenho(d.rId, w2, h, alt, d.nome);
    },
    async svg(raw, spec, cw) {
      if (!raw) return '';
      const dm = svgDims(raw), estilo = estiloCss({ style: (/^<svg\b[^>]*\sstyle\s*=\s*"([^"]*)"/i.exec(raw) || [])[1] || '' }, 'width');
      const w = largMm(spec || estilo, cw || ctx.cw, pxMm(dm.w)), h = Math.min(w * dm.h / dm.w, 250), w2 = h < w * dm.h / dm.w ? h * dm.w / dm.h : w;
      const pxW = Math.round(w2 * 96 / 25.4 * 2), pxH = Math.round(h * 96 / 25.4 * 2);
      const chave = 'svg:' + raw + '|' + pxW;
      let d = ctx.porSrc.get(chave);
      if (d === undefined) {
        d = null;
        try { const r = await io.rasterizarSvg(prepararSvg(raw, pxW, pxH), pxW, pxH); if (r && r.bytes) d = ctx.registra(r.bytes, 'png'); } catch (_) { d = null; }
        ctx.porSrc.set(chave, d);
      }
      return d ? ctx.desenho(d.rId, w2, h, 'figura', d.nome) : '';
    }
  };
  return ctx;
}

// ---------- questões ----------
const ROTULO_UI = hp => ({ font: F_UI, b: true, sz: Math.round(hp * .92) });

async function questao(x, L, ctx) {
  const q = x.q, hp = ctx.hp, ponto = L.num !== 'questao';
  const pts = L.pontos && x.valor ? `(${fmtPt(x.valor)} ${x.valor === 1 ? 'ponto' : 'pontos'})` : '';
  const esq = ponto ? tw(8) : 0;
  const rot = ponto ? `${x.num}.` : `Questão ${x.num}`;
  const prefixo = ponto ? run(rot, ROTULO_UI(hp)) + tabRun + (pts ? run(pts + ' ', { font: F_UI, b: true, sz: Math.round(hp * .78) }) : '') : '';
  const cab = ponto ? null : par(run(rot, ROTULO_UI(hp)) + (pts ? run('  ' + pts, { font: F_UI, b: true, sz: Math.round(hp * .78) }) : ''), { keepNext: true });
  const blocos = [];
  if (cab) blocos.push(cab);
  const cwQ = ctx.cw - esq / TW;
  const cq = Object.assign({}, ctx, { cw: cwQ });
  const M = s => q.legado ? String(s || '') : mat(s || '');
  const H = async (html, o) => { const p = parse(html); const c2 = Object.assign({}, cq, { svgs: p.svgs }); return blk(p.c, c2, Object.assign({ left: esq, keepNext: true, after: tw(.9) }, o)); };

  if (q.soImagem) {
    const lab = ponto ? [par(prefixo.replace(tabRun, run(' ')), { keepNext: true })] : [];
    blocos.push(...lab);
    const imgs = [];
    if (q.base && !x.omitirBase) imgs.push([q.base.src, q.base.larguraMm]);
    (q.imagens || []).forEach(s => imgs.push([s, q.larguraMm]));
    for (let k = 0; k < imgs.length; k++) {
      const xml = await ctx.img(imgs[k][0], imgs[k][1] ? { v: imgs[k][1], u: 'mm' } : null, 'Questão', ctx.cw);
      blocos.push(par(xml || run('[imagem da questão não pôde ser carregada]', { i: true }), { keepNext: k < imgs.length - 1 }));
    }
    if (q.tipo === 'soma') blocos.push(par(run('Soma: ', { font: F_UI, b: true, sz: Math.round(hp * .9) }) + run('[    ] [    ]', { font: F_UI, sz: Math.round(hp * .9) }), { left: esq, jc: 'right', before: tw(2), keepNext: false }));
    else if (q.tipo === 'aberta' && !(q.resposta && q.resposta.modo === 'nenhum')) blocos.push(par('', { left: esq, line: tw(+(q.resposta && q.resposta.altura) || 40), rule: 'exact' }));
    return fechaQuestao(blocos, L);
  }

  const enun = parse(M(q.enunciado));
  blocos.push(...await blk(enun.c, Object.assign({}, cq, { svgs: enun.svgs }), { left: esq, hanging: ponto ? esq : 0, prefix: ponto ? prefixo : '', keepNext: true, after: tw(.9) }));
  if (ponto && !blocos.length) blocos.push(par(prefixo, { left: esq, hanging: esq, keepNext: true }));
  const figs = [].concat(q.figura || [], q.figuras || []).filter(Boolean);
  for (const f of figs) blocos.push(...await H(figuraHtml(f), { keepNext: true }));
  if (q.pergunta) blocos.push(...await H(`<div>${M(q.pergunta)}</div>`, { before: tw(1.4), keepNext: true }));

  const L_ = 'abcdefghij';
  const alt = async (marca, html, o) => {
    const p = parse(html), c2 = Object.assign({}, o.ctx || cq, { svgs: p.svgs }); c2.cw = Math.max(15, c2.cw - (o.hanging || 0) / TW - 1);
    return blk(p.c, c2, { left: o.left, hanging: o.hanging, prefix: run(marca, { font: F_UI, b: true, sz: Math.round(hp * .9) }) + (o.semTab ? run(' ') : tabRun), keepNext: o.keepNext, after: tw(.8) });
  };
  if (q.tipo === 'mc') {
    const ord = x.ordem || q.alternativas.map((_, i) => i);
    const textos = ord.map(i => M(q.alternativas[i].t));
    const modo = altClasse(textos, (!L.alt || L.alt === 'auto') && q.layoutAlt ? q.layoutAlt : L.alt);
    const e2 = esq + tw(7);
    if (modo === 'alt-2') {
      const ncol = 2, wTot = tw(cwQ), wc = Math.floor(wTot / ncol), cc = Object.assign({}, cq, { cw: wc / TW - 6 });
      let t = `<w:tbl><w:tblPr><w:tblW w:w="${wc * ncol}" w:type="dxa"/><w:tblInd w:w="${esq}" w:type="dxa"/><w:tblBorders>${bd('top', 0)}${bd('left', 0)}${bd('bottom', 0)}${bd('right', 0)}${bd('insideH', 0)}${bd('insideV', 0)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="113" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${Array(ncol).fill(`<w:gridCol w:w="${wc}"/>`).join('')}</w:tblGrid>`;
      for (let r = 0; r < textos.length; r += ncol) {
        t += '<w:tr><w:trPr><w:cantSplit/></w:trPr>';
        for (let c = 0; c < ncol; c++) {
          const k = r + c;
          const ps = k < textos.length ? await alt(L_[k] + ')', textos[k], { left: tw(7), hanging: tw(7), ctx: cc, keepNext: false }) : [];
          t += `<w:tc><w:tcPr><w:tcW w:w="${wc}" w:type="dxa"/></w:tcPr>${ps.length ? ps.join('') : '<w:p/>'}</w:tc>`;
        }
        t += '</w:tr>';
      }
      blocos.push(t + '</w:tbl>');
    } else if (modo === 'alt-linha') {
      const it = [];
      for (let k = 0; k < textos.length; k++) {
        const p = parse(textos[k]);
        it.push({ k: 't', s: L_[k] + ') ', st: { font: F_UI, b: true, sz: Math.round(hp * .9) } });
        await inl(p.c, {}, Object.assign({}, cq, { svgs: p.svgs }), it);
        if (k < textos.length - 1) it.push({ k: 't', s: '  ', st: {} });
      }
      blocos.push(par(runsXml(it), { left: esq, before: tw(1.2), keepNext: false }));
    } else {
      for (let k = 0; k < textos.length; k++) blocos.push(...await alt(L_[k] + ')', textos[k], { left: e2, hanging: tw(7), keepNext: k < textos.length - 1 }));
    }
  } else if (q.tipo === 'vf') {
    for (let k = 0; k < q.afirmacoes.length; k++) blocos.push(...await alt('(    )', M(q.afirmacoes[k].t), { left: esq + tw(11), hanging: tw(11), keepNext: true }));
  } else if (q.tipo === 'soma') {
    for (let k = 0; k < q.afirmacoes.length; k++) blocos.push(...await alt(String(SOMA_VALORES[k]).padStart(2, '0'), M(q.afirmacoes[k].t), { left: esq + tw(9), hanging: tw(9), keepNext: true }));
    blocos.push(par(run('Soma: ', { font: F_UI, b: true, sz: Math.round(hp * .9) }) + run('[    ] [    ]', { font: F_UI, sz: Math.round(hp * .9) }), { left: esq, jc: 'right', before: tw(2), keepNext: false }));
  } else if (q.tipo === 'assoc') {
    const wTot = tw(cwQ), wc = Math.floor(wTot / 2), cc = Object.assign({}, cq, { cw: wc / TW - 4 });
    let t = `<w:tbl><w:tblPr><w:tblW w:w="${wc * 2}" w:type="dxa"/><w:tblInd w:w="${esq}" w:type="dxa"/><w:tblBorders>${bd('top', 0)}${bd('left', 0)}${bd('bottom', 0)}${bd('right', 0)}${bd('insideH', 0)}${bd('insideV', 0)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="113" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="${wc}"/><w:gridCol w:w="${wc}"/></w:tblGrid>`;
    const nl = Math.max(q.colunaA.length, q.colunaB.length);
    for (let k = 0; k < nl; k++) {
      const a = k < q.colunaA.length ? await alt('(    )', M(q.colunaA[k]), { left: tw(10), hanging: tw(10), ctx: cc }) : [];
      const b = k < q.colunaB.length ? await alt(L_[k] + ')', M(q.colunaB[k]), { left: tw(7), hanging: tw(7), ctx: cc }) : [];
      t += `<w:tr><w:trPr><w:cantSplit/></w:trPr><w:tc><w:tcPr><w:tcW w:w="${wc}" w:type="dxa"/></w:tcPr>${a.length ? a.join('') : '<w:p/>'}</w:tc><w:tc><w:tcPr><w:tcW w:w="${wc}" w:type="dxa"/></w:tcPr>${b.length ? b.join('') : '<w:p/>'}</w:tc></w:tr>`;
    }
    blocos.push(t + '</w:tbl>');
  } else {
    const r = q.resposta || { modo: 'linhas', n: 4 };
    if (r.modo === 'linhas') {
      const w = tw(cwQ), n = +r.n || 4;
      blocos.push(`<w:tbl><w:tblPr><w:tblW w:w="${w}" w:type="dxa"/><w:tblInd w:w="${esq}" w:type="dxa"/><w:tblBorders>${bd('top', 0)}${bd('left', 0)}${bd('bottom', 0)}${bd('right', 0)}${bd('insideH', 0)}${bd('insideV', 0)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="${w}"/></w:tblGrid>${Array(n).fill(`<w:tr><w:trPr><w:cantSplit/><w:trHeight w:val="${tw(7.5)}" w:hRule="exact"/></w:trPr><w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/><w:tcBorders>${bd('bottom', 4, '777777')}</w:tcBorders></w:tcPr><w:p/></w:tc></w:tr>`).join('')}</w:tbl>`);
    }
    else if (r.modo === 'branco') blocos.push(par('', { left: esq, line: tw(+r.altura || 40), rule: 'exact' }));
    else if (r.modo === 'quadriculado') {
      const w = tw(cwQ);
      blocos.push(`<w:tbl><w:tblPr><w:tblW w:w="${w}" w:type="dxa"/><w:tblInd w:w="${esq}" w:type="dxa"/><w:tblBorders>${bd('top', 6, '444444')}${bd('left', 6, '444444')}${bd('bottom', 6, '444444')}${bd('right', 6, '444444')}</w:tblBorders><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid><w:gridCol w:w="${w}"/></w:tblGrid><w:tr><w:trPr><w:cantSplit/><w:trHeight w:val="${tw(+r.altura || 60)}" w:hRule="exact"/></w:trPr><w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p/></w:tc></w:tr></w:tbl>`);
    }
  }
  return fechaQuestao(blocos, L);
}
function fechaQuestao(blocos, L) {
  if (!blocos.length) return blocos;
  const gap = tw(L.gapq != null ? L.gapq : 5), k = blocos.length - 1;
  if (blocos[k].startsWith('<w:p>')) blocos[k] = blocos[k].replace('<w:keepNext/>', '').replace(/(<w:spacing [^>]*?w:after=")(\d+)(")/, (m, a, b, c) => a + (+b + gap) + c);
  else blocos.push(par('', { line: gap, rule: 'exact', keepLines: false }));
  return blocos;
}

// ---------- cabeçalho ----------
const CEL = { nome: ['Nome', 5], num: ['Nº', 1], turma: ['Turma', 1.3], data: ['Data', 2.6], escola: ['Escola', 4], professor: ['Professor(a)', 4], nota: ['Nota', 1.6], trimestre: ['Trimestre', 1.7] };
function valorCampo(k, c, total) {
  if (k === 'data') { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(c.data || ''); return m ? `${m[3]} / ${m[2]} / ${m[1]}` : '        /        /           '; }
  if (k === 'nota') return c.totalNota ? '/ ' + fmtPt(total || 10) : '';
  return c[k] || '';
}
async function cabecalho(M, ctx) {
  const c = M.cab, hp = ctx.hp, W = tw(210 - 2 * M.layout.margem), out = [];
  if (!c || c.modelo === 'nenhum') return out;
  const mostrar = c.mostrar || {}, vis = ks => ks.filter(k => mostrar[k] !== false);
  const titulo = (c.titulo || ('Avaliação de ' + (c.disciplina || 'Matemática'))).trim();
  const tit = [par(run(titulo, { font: F_UI, b: true, caps: true, sz: 27 }) + (M.versao && M.versao !== 'A' ? tabRun + run(' Versão ' + M.versao + ' ', { font: F_UI, b: true, sz: 28, bdr: true }) : ''), { keepNext: true, tabs: [{ v: 'right', p: W }], after: c.subtitulo ? 0 : tw(2.4) })];
  if (c.subtitulo) tit.push(par(run(c.subtitulo, { font: F_UI, b: true, sz: 17, color: '444444' }), { keepNext: true, after: tw(2.4) }));
  if (c.logo) {
    const lg = await ctx.img(c.logo, { v: 28, u: 'mm' }, 'Logo', 28);
    if (lg) {
      const wl = tw(32), wt = W - wl;
      out.push(`<w:tbl><w:tblPr><w:tblW w:w="${W}" w:type="dxa"/><w:tblBorders>${bd('top', 0)}${bd('left', 0)}${bd('bottom', 0)}${bd('right', 0)}${bd('insideH', 0)}${bd('insideV', 0)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="${wl}"/><w:gridCol w:w="${wt}"/></w:tblGrid><w:tr><w:tc><w:tcPr><w:tcW w:w="${wl}" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>${par(lg)}</w:tc><w:tc><w:tcPr><w:tcW w:w="${wt}" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>${tit.join('')}</w:tc></w:tr></w:tbl>`);
      out.push(par('', { line: tw(1.5), rule: 'exact', keepLines: false }));
    } else out.push(...tit);
  } else out.push(...tit);

  const celula = (k, modo) => {
    const [lb] = CEL[k], v = valorCampo(k, c, M.total);
    if (modo === 'caixas') return par(run(lb, { font: F_UI, b: true, caps: true, sz: 14 }), { keepNext: true }) + par(run(v, { font: F_UI, b: true, sz: 18, color: k === 'nota' ? '888888' : undefined }), { before: tw(1), line: tw(5.5), rule: 'atLeast' });
    return par(run(lb + ': ', { font: F_UI, b: true, sz: 19 }) + run(v, { font: F_UI, sz: 19, color: k === 'nota' ? '888888' : undefined }), { pbdr: `<w:pBdr>${bd('bottom', 4, '111111')}</w:pBdr>`, line: tw(6.5), rule: 'atLeast', after: tw(.5) });
  };
  const tabelaCampos = (linhas, modo) => {
    const bordas = modo === 'caixas' ? `${bd('top', 12)}${bd('left', 12)}${bd('bottom', 12)}${bd('right', 12)}${bd('insideH', 4)}${bd('insideV', 4)}` : `${bd('top', 0)}${bd('left', 0)}${bd('bottom', 0)}${bd('right', 0)}${bd('insideH', 0)}${bd('insideV', 0)}`;
    const mar = modo === 'caixas' ? 'w:w="85"' : 'w:w="57"';
    let t = `<w:tbl><w:tblPr><w:tblW w:w="${W}" w:type="dxa"/><w:tblBorders>${bordas}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="${modo === 'caixas' ? 28 : 0}" w:type="dxa"/><w:left ${mar} w:type="dxa"/><w:bottom w:w="${modo === 'caixas' ? 28 : 0}" w:type="dxa"/><w:right ${mar} w:type="dxa"/></w:tblCellMar></w:tblPr>`;
    const lim = linhas.map(l => { const soma = l.reduce((a, k) => a + CEL[k][1], 0); let ac = 0; return l.map((k, i) => { ac += CEL[k][1]; return i === l.length - 1 ? W : Math.round(W * ac / soma); }); });
    const xs = [...new Set([0, W, ...lim.flat()])].sort((a, b) => a - b), grade = xs.slice(1).map((v, i) => v - xs[i]);
    t += `<w:tblGrid>${grade.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>`;
    linhas.forEach((l, r) => {
      t += '<w:tr><w:trPr><w:cantSplit/></w:trPr>';
      l.forEach((k, i) => {
        const a = i ? lim[r][i - 1] : 0, b = lim[r][i], n = xs.indexOf(b) - xs.indexOf(a);
        t += `<w:tc><w:tcPr><w:tcW w:w="${b - a}" w:type="dxa"/>${n > 1 ? `<w:gridSpan w:val="${n}"/>` : ''}</w:tcPr>${celula(k, modo)}</w:tc>`;
      });
      t += '</w:tr>';
    });
    return t + '</w:tbl>';
  };
  if (c.modelo === 'linhas') {
    const ks = vis(['nome', 'num', 'turma', 'data', 'escola', 'professor', 'trimestre', 'nota']), linhas = [];
    for (let i = 0; i < ks.length; i += 3) linhas.push(ks.slice(i, i + 3));
    if (linhas.length) out.push(tabelaCampos(linhas, 'linhas'));
  } else if (c.modelo === 'compacto') {
    const ks = vis(['nome', 'turma', 'data', 'nota']); if (ks.length) out.push(tabelaCampos([ks], 'linhas'));
  } else {
    const l1 = vis(['nome', 'num', 'turma', 'data']), l2 = vis(['escola', 'professor', 'nota', 'trimestre']);
    const linhas = [l1, l2].filter(l => l.length); if (linhas.length) out.push(tabelaCampos(linhas, 'caixas'));
  }
  if (c.instrucoes) {
    const it = []; String(c.instrucoes).split('\n').forEach((ln, i) => { if (i) it.push({ k: 'br' }); it.push({ k: 't', s: ln, st: { font: F_UI, i: true, sz: 17 } }); });
    out.push(par(runsXml(it), { before: tw(2), pbdr: `<w:pBdr>${bd('top', 4)}${bd('left', 4)}${bd('bottom', 4)}${bd('right', 4)}</w:pBdr>`, left: 57, right: 57 }));
  }
  out.push(par('', { line: tw(3), rule: 'exact', keepLines: false }));
  void hp;
  return out;
}

// ---------- gabarito ----------
async function gabaritoBlocos(M, ctx) {
  const hp = ctx.hp, W = tw(210 - 2 * M.layout.margem), out = [];
  out.push(par(run(' SOMENTE PROFESSOR ', { font: F_UI, b: true, sz: 14, color: 'FFFFFF' }), { left: W - tw(34), shd: '111111', after: tw(2) }));
  out.push(par(run(`Gabarito — ${M.nome}${M.versao && M.versao !== 'A' ? ' · Versão ' + M.versao : ''}`, { font: F_UI, b: true, sz: 24 }), { keepNext: true, after: tw(2) }));
  const lista = M.lista, por = 10, wc = Math.floor(W / por);
  let t = `<w:tbl><w:tblPr><w:tblW w:w="${wc * por}" w:type="dxa"/><w:tblBorders>${bd('top', 6)}${bd('left', 6)}${bd('bottom', 6)}${bd('right', 6)}${bd('insideH', 4)}${bd('insideV', 4)}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="28" w:type="dxa"/><w:left w:w="57" w:type="dxa"/><w:bottom w:w="28" w:type="dxa"/><w:right w:w="57" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${Array(por).fill(`<w:gridCol w:w="${wc}"/>`).join('')}</w:tblGrid>`;
  for (let i = 0; i < lista.length; i += por) {
    const fatia = lista.slice(i, i + por);
    t += '<w:tr><w:trPr><w:cantSplit/></w:trPr>';
    for (let k = 0; k < por; k++) t += `<w:tc><w:tcPr><w:tcW w:w="${wc}" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="EEEEEE"/></w:tcPr>${par(fatia[k] ? run(String(fatia[k].num), { font: F_UI, b: true, sz: 18 }) : '', { jc: 'center' })}</w:tc>`;
    t += '</w:tr><w:tr><w:trPr><w:cantSplit/></w:trPr>';
    for (let k = 0; k < por; k++) {
      let conteudo = '';
      if (fatia[k]) { const p = parse(gabaritoDe(fatia[k].q, fatia[k].ordem).curto), it = []; await inl(p.c, { font: F_UI, b: true, sz: 18 }, Object.assign({}, ctx, { svgs: p.svgs, cw: wc / TW - 2 }), it); conteudo = runsXml(it); }
      t += `<w:tc><w:tcPr><w:tcW w:w="${wc}" w:type="dxa"/></w:tcPr>${par(conteudo, { jc: 'center' })}</w:tc>`;
    }
    t += '</w:tr>';
  }
  out.push(t + '</w:tbl>');
  if (M.gab && M.gab.res) {
    for (const x of lista) {
      const q = x.q, g = gabaritoDe(q, x.ordem), Mf = s => q.legado ? String(s || '') : mat(s || '');
      const cab = g.curto === 'ver resolução' ? '' : 'Gabarito: ' + '';
      const partes = [];
      const pre = run(`${x.num}.`, { font: F_UI, b: true, sz: Math.round(hp * .95) }) + tabRun + (cab ? run(cab, { font: F_UI, b: true, sz: Math.round(hp * .95) }) : '');
      const hg = parse(cab ? g.curto : ''); const itc = []; await inl(hg.c, { font: F_UI, b: true, sz: Math.round(hp * .95) }, Object.assign({}, ctx, { svgs: hg.svgs, cw: ctx.cw }), itc);
      partes.push(par(pre + runsXml(itc), { left: tw(8), hanging: tw(8), before: tw(2.4), keepNext: true }));
      if (g.longo && q.tipo === 'mc') { const p = parse(g.longo); partes.push(...await blk(p.c, Object.assign({}, ctx, { svgs: p.svgs, cw: /<img|<svg/i.test(g.longo) ? 45 : ctx.cw }), { left: tw(8), keepNext: !!q.resolucao })); }
      if (q.resolucao) { const p = parse(Mf(q.resolucao)); partes.push(...await blk(p.c, Object.assign({}, ctx, { svgs: p.svgs }), { left: tw(8), prefix: run('Resolução: ', { font: F_UI, b: true, sz: Math.round(hp * .9) }), hanging: 0 })); }
      if (q.resolucaoImg && q.resolucaoImg.src) { const xml = await ctx.img(q.resolucaoImg.src, q.resolucaoImg.larguraMm ? { v: q.resolucaoImg.larguraMm, u: 'mm' } : null, 'Resolução', ctx.cw); if (xml) partes.push(par(xml, { left: tw(8), keepNext: false })); }
      out.push(...partes);
    }
  }
  out.push(par('', { keepLines: false }));
  return out;
}

// ---------- montagem do pacote ----------
const sectXml = (M, cols, tipo, comRodape) => {
  const m = tw(M.layout.margem), gap = tw(M.layout.gap != null ? M.layout.gap : 8), sep = M.layout.sep && cols > 1;
  return `<w:sectPr>${comRodape ? '<w:footerReference w:type="default" r:id="rIdFooter"/>' : ''}${tipo ? `<w:type w:val="${tipo}"/>` : ''}<w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="${m}" w:right="${m}" w:bottom="${m}" w:left="${m}" w:header="${tw(5)}" w:footer="${tw(Math.max(3.2, M.layout.margem * .38))}" w:gutter="0"/>${cols > 1 ? `<w:cols w:num="${cols}" w:space="${gap}"${sep ? ' w:sep="1"' : ''} w:equalWidth="1"/>` : '<w:cols w:space="720"/>'}</w:sectPr>`;
};
const CT = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

export async function gerarDocx(M, io) {
  const L = Object.assign({ colunas: 2, fonte: 11, margem: 12, gapq: 5, gap: 8, num: 'ponto', alt: 'auto', sep: true, rodape: true, pontos: true }, M.layout || {});
  M = Object.assign({}, M, { layout: L, nome: M.nome || 'Avaliação', lista: M.lista || [], cab: M.cab || { modelo: 'nenhum' } });
  const N = Math.min(3, Math.max(1, +L.colunas || 1)), gap = L.gap != null ? L.gap : 8;
  const larg = 210 - 2 * L.margem, colW = (larg - (N - 1) * gap) / N;
  const hp = Math.round((+L.fonte || 11) * 2);
  const ctx = criarContexto(io, hp, colW);
  // as mídias/contadores ficam no contexto base (os métodos o usam por fechamento); as cópias só mudam a largura
  const blocosCab = await cabecalho(M, Object.assign({}, ctx, { cw: larg, svgs: [] }));
  const blocosQ = [];
  for (const x of M.lista) blocosQ.push(...await questao(x, L, ctx));
  if (!blocosQ.length) blocosQ.push(par(run('Nenhuma questão na prova.', { i: true })));
  const comGab = !!(M.gab && M.gab.anexar && M.lista.length);
  const rod = L.rodape !== false;
  const corpo = [];
  if (blocosCab.length && N > 1) { corpo.push(...blocosCab, par('', { line: 20, rule: 'exact', keepLines: false, sect: sectXml(M, 1, null, rod) })); }
  else corpo.push(...blocosCab);
  corpo.push(...blocosQ);
  let final;
  if (comGab) {
    const g = await gabaritoBlocos(M, Object.assign({}, ctx, { cw: larg, svgs: [] }));
    corpo.push(par('', { line: 20, rule: 'exact', keepLines: false, sect: sectXml(M, N, blocosCab.length && N > 1 ? 'continuous' : null, rod) }));
    corpo.push(...g);
    final = sectXml(M, 1, 'nextPage', rod);
  } else final = sectXml(M, N, blocosCab.length && N > 1 ? 'continuous' : null, rod);
  if (corpo[corpo.length - 1].startsWith('<w:tbl>')) corpo.push(par('', { keepLines: false }));
  // duas tabelas coladas viram uma só no Word: um parágrafo mínimo as separa
  const corpoSep = corpo.flatMap((b, i) => b.startsWith('<w:tbl>') && corpo[i + 1] && corpo[i + 1].startsWith('<w:tbl>') ? [b, par('', { line: 20, rule: 'exact', keepLines: false })] : [b]);
  const documento = `${CT}<w:document ${NS}><w:body>${corpoSep.join('')}${final}</w:body></w:document>`;

  const fonteTxt = Math.round((+L.fonte || 11) * 2);
  const estilos = `${CT}<w:styles ${NS}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="${F_TXT}" w:hAnsi="${F_TXT}" w:eastAsia="${F_TXT}" w:cs="${F_TXT}"/><w:sz w:val="${fonteTxt}"/><w:szCs w:val="${fonteTxt}"/><w:lang w:val="pt-BR" w:eastAsia="pt-BR" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="290" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="character" w:default="1" w:styleId="DefaultParagraphFont"><w:name w:val="Default Paragraph Font"/><w:uiPriority w:val="1"/><w:semiHidden/></w:style><w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>`;
  const configuracoes = `${CT}<w:settings ${NS}><w:zoom w:percent="100"/><w:defaultTabStop w:val="${tw(8)}"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;
  const nomeRod = X(M.nome + (M.versao && M.versao !== 'A' ? ' · Versão ' + M.versao : ''));
  const rodape = `${CT}<w:ftr ${NS}><w:p><w:pPr><w:tabs><w:tab w:val="right" w:pos="${tw(larg)}"/></w:tabs><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="${F_UI}" w:hAnsi="${F_UI}"/><w:b/><w:color w:val="555555"/><w:sz w:val="15"/></w:rPr><w:t xml:space="preserve">${nomeRod}</w:t></w:r><w:r><w:tab/></w:r><w:r><w:rPr><w:rFonts w:ascii="${F_UI}" w:hAnsi="${F_UI}"/><w:b/><w:color w:val="555555"/><w:sz w:val="15"/></w:rPr><w:t xml:space="preserve">Página </w:t></w:r><w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:rFonts w:ascii="${F_UI}" w:hAnsi="${F_UI}"/><w:b/><w:color w:val="555555"/><w:sz w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple><w:r><w:rPr><w:rFonts w:ascii="${F_UI}" w:hAnsi="${F_UI}"/><w:b/><w:color w:val="555555"/><w:sz w:val="15"/></w:rPr><w:t xml:space="preserve"> de </w:t></w:r><w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:rFonts w:ascii="${F_UI}" w:hAnsi="${F_UI}"/><w:b/><w:color w:val="555555"/><w:sz w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>`;
  const exts = [...new Set(ctx.midia.map(m => m.tipo === 'jpeg' ? 'jpeg' : m.tipo))];
  const tipos = `${CT}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${exts.map(e => `<Default Extension="${e}" ContentType="image/${e}"/>`).join('')}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>${rod ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : ''}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`;
  const relsRaiz = `${CT}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`;
  const relsDoc = `${CT}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rIdSettings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>${rod ? '<Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' : ''}${ctx.midia.map((m, i) => `<Relationship Id="rIdImg${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${m.nome}"/>`).join('')}</Relationships>`;
  const agora = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const core = `${CT}<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${X(M.nome)}</dc:title><dc:creator>EduMath Provas</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${agora}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${agora}</dcterms:modified></cp:coreProperties>`;
  const arquivos = [
    { nome: '[Content_Types].xml', dados: tipos }, { nome: '_rels/.rels', dados: relsRaiz }, { nome: 'docProps/core.xml', dados: core },
    { nome: 'word/document.xml', dados: documento }, { nome: 'word/styles.xml', dados: estilos }, { nome: 'word/settings.xml', dados: configuracoes },
    { nome: 'word/_rels/document.xml.rels', dados: relsDoc }
  ];
  if (rod) arquivos.push({ nome: 'word/footer1.xml', dados: rodape });
  ctx.midia.forEach(m => arquivos.push({ nome: 'word/media/' + m.nome, dados: m.bytes }));
  return zip(arquivos);
}

// ---------- só no navegador ----------
export function ioNavegador() {
  const pngDe = canvas => new Promise(r => canvas.toBlob(async b => r(b ? new Uint8Array(await b.arrayBuffer()) : null), 'image/png'));
  return {
    async carregarImagem(src) {
      const r = await fetch(/^data:/i.test(src) ? src : new URL(src, document.baseURI).href);
      if (!r.ok) return null;
      const bytes = new Uint8Array(await r.arrayBuffer()), tipo = tipoImagem(bytes);
      if (tipo) return { bytes, tipo };
      const bmp = await createImageBitmap(new Blob([bytes])); // webp, avif, svg… → PNG (o Word não lê esses formatos)
      const cv = document.createElement('canvas'); cv.width = bmp.width; cv.height = bmp.height; cv.getContext('2d').drawImage(bmp, 0, 0);
      const png = await pngDe(cv); return png ? { bytes: png, tipo: 'png' } : null;
    },
    async rasterizarSvg(svg, w, h) {
      const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
      try {
        const img = new Image(); img.decoding = 'sync';
        await new Promise((ok, no) => { img.onload = ok; img.onerror = () => no(new Error('SVG inválido')); img.src = url; });
        const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
        const c = cv.getContext('2d'); c.fillStyle = '#fff'; c.fillRect(0, 0, w, h); c.drawImage(img, 0, 0, w, h);
        const bytes = await pngDe(cv); return bytes ? { bytes } : null;
      } finally { URL.revokeObjectURL(url); }
    }
  };
}
export async function baixarDocx(modelo, arquivo) {
  const bytes = await gerarDocx(modelo, ioNavegador());
  const blob = new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = arquivo || 'prova.docx';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  return bytes.length;
}
