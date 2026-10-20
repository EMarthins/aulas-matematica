// Análise automática das imagens: acha a FIGURA (o que sobra depois de apagar o texto reconhecido pelo OCR) e monta a transcrição
// das questões que são só texto. O que for matemática/fórmula ou tiver figura ambígua NÃO é aceito sozinho: vai para revisão visual.
//   node scripts/banco-provas/transcrever/analisar.js <filtro-de-id|--todas> [--escrever]
// Saída: transcrever/auto-<filtro>.jsonl (aceitas) e transcrever/revisar.json { id: motivo } (precisam de olho humano)
const fs = require('fs'), path = require('path');
const raiz = path.resolve(__dirname, '../../..');
const { createCanvas, loadImage } = require(path.join(raiz, '../fontes-nre/tools/node_modules/@napi-rs/canvas'));
const { rascunho, limpa, embaralhado, estruturar } = require('./rascunho.js');
const j = JSON.parse(fs.readFileSync(path.join(raiz, 'app/banco-provas.json'), 'utf8'));
const OCR = JSON.parse(fs.readFileSync(path.join(__dirname, 'ocr.json'), 'utf8'));
const feitos = new Set(), manter = new Set();
fs.readdirSync(__dirname).filter(f => /^lote-.*\.jsonl$/.test(f) && !/^lote-auto-/.test(f)).forEach(f => fs.readFileSync(path.join(__dirname, f), 'utf8').split(/\r?\n/).filter(Boolean).forEach(l => { try { feitos.add(JSON.parse(l).id); } catch (e) {} }));
if (fs.existsSync(path.join(__dirname, 'manter.txt'))) fs.readFileSync(path.join(__dirname, 'manter.txt'), 'utf8').split(/\r?\n/).forEach(l => { if (l.trim()) manter.add(l.split('|')[0].trim()); });
const filtro = process.argv[2] || '--todas';

const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');

/** componentes de "tinta" fora das caixas de texto do OCR → caixa da figura (px da imagem) */
async function figura(id, im, linhas) {
  const W = im.width, H = im.height, c = createCanvas(W, H), g = c.getContext('2d'); g.drawImage(im, 0, 0);
  const d = g.getImageData(0, 0, W, H).data;
  const CELL = 4, gw = Math.ceil(W / CELL), gh = Math.ceil(H / CELL), grade = new Uint16Array(gw * gh);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const k = (y * W + x) * 4; if ((d[k] + d[k + 1] + d[k + 2]) / 3 < 150) grade[((y / CELL) | 0) * gw + ((x / CELL) | 0)]++; }
  const tinta = new Uint8Array(gw * gh); for (let i = 0; i < tinta.length; i++) tinta[i] = grade[i] >= 3 ? 1 : 0;
  // apaga: margem, caixas do OCR (+folga), letras ⓐ…ⓔ (blocos pequenos à esquerda das alternativas são removidos pelo filtro de tamanho)
  const apaga = (x0, y0, x1, y1) => { for (let gy = Math.max(0, (y0 / CELL) | 0); gy <= Math.min(gh - 1, (y1 / CELL) | 0); gy++) for (let gx = Math.max(0, (x0 / CELL) | 0); gx <= Math.min(gw - 1, (x1 / CELL) | 0); gx++) tinta[gy * gw + gx] = 0; };
  apaga(0, 0, W, 10); apaga(0, H - 10, W, H); apaga(0, 0, 10, H); apaga(W - 14, 0, W, H);
  linhas.forEach(l => { if (l.w) apaga(l.x - 8, l.y - 6, l.x + l.w + 8, l.y + l.h + 6); });
  // dilata 2 células e rotula componentes
  const dil = new Uint8Array(gw * gh); for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) if (tinta[y * gw + x]) for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const yy = y + dy, xx = x + dx; if (yy >= 0 && yy < gh && xx >= 0 && xx < gw) dil[yy * gw + xx] = 1; }
  const rot = new Int32Array(gw * gh).fill(-1), comps = [];
  for (let s = 0; s < dil.length; s++) {
    if (!dil[s] || rot[s] >= 0) continue;
    const pilha = [s]; rot[s] = comps.length; let x0 = gw, y0 = gh, x1 = 0, y1 = 0, n = 0;
    while (pilha.length) { const p = pilha.pop(), py = (p / gw) | 0, px = p % gw; if (tinta[p]) { n++; x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py); }
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const yy = py + dy, xx = px + dx; if (yy < 0 || yy >= gh || xx < 0 || xx >= gw) continue; const q = yy * gw + xx; if (dil[q] && rot[q] < 0) { rot[q] = comps.length; pilha.push(q); } } }
    if (n) comps.push({ x0: x0 * CELL, y0: y0 * CELL, x1: (x1 + 1) * CELL, y1: (y1 + 1) * CELL, n });
  }
  // figura = componentes grandes (maiores que uma letra ⓐ ≈ 40 px) e com tinta relevante
  const grandes = comps.filter(k => (k.x1 - k.x0) >= 56 && (k.y1 - k.y0) >= 40 && k.n >= 30);
  if (!grandes.length) return { tem: false, tinta: comps.reduce((a, k) => a + k.n, 0) };
  grandes.sort((a, b) => a.y0 - b.y0);
  // agrupa em blocos verticais (separados por ≥ 2 linhas de texto)
  const blocos = []; grandes.forEach(k => { const b = blocos[blocos.length - 1]; if (b && k.y0 - b.y1 < 60) { b.x0 = Math.min(b.x0, k.x0); b.x1 = Math.max(b.x1, k.x1); b.y1 = Math.max(b.y1, k.y1); } else blocos.push({ x0: k.x0, y0: k.y0, x1: k.x1, y1: k.y1 }); });
  return { tem: true, blocos, W, H };
}

const area = q => q.materia || '';
const tri = s => { const n = norm(s), m = new Map(); for (let i = 0; i + 3 <= n.length; i++) { const k = n.slice(i, i + 3); m.set(k, (m.get(k) || 0) + 1); } return m; };
const cobertura = (a, b) => { let tot = 0, ok = 0; for (const [k, v] of a) { tot += v; ok += Math.min(v, b.get(k) || 0); } return tot ? ok / tot : 1; };
const perigoFormula = t => /[=+×÷^√π²³∑∫≤≥∆Δ°%]|\b\d+\s*[\/]\s*\d+|\bkJ|\bmol\b|\b[A-Z][a-z]?\s?\d\b|\bm\s?s\s?[-−]|\b10\s?[-−]?\d|\bx\b|\bf\s*\(|\bsen\b|\blog\b/.test(t);

const rb0 = q => rascunho(q);
// matemática "simples": sem fração/expoente/símbolo perdido (nenhuma linha OCR empilhada, nenhuma linha minúscula, sem símbolos especiais no texto do PDF)
const empilhadas = l => { let n = 0; for (let a = 0; a < l.length; a++) for (let b = a + 1; b < l.length; b++) { const A = l[a], B = l[b]; if (!A.w || !B.w) continue; const oy = Math.min(A.y + A.h, B.y + B.h) - Math.max(A.y, B.y), ox = Math.min(A.x + A.w, B.x + B.w) - Math.max(A.x, B.x); if (oy > 0.3 * Math.min(A.h, B.h) && ox > 0.3 * Math.min(A.w, B.w)) n++; } return n; };
const curtaSolta = l => { for (const s of l) { if (!s.w || s.t.trim().length > 6 || s.x < 25) continue; for (const L of l) { if (L === s || !L.w || L.w < 3 * s.w) continue; if (s.x >= L.x - 4 && s.x + s.w <= L.x + L.w + 4 && s.y > L.y - 0.8 * L.h && s.y < L.y + L.h * 2.2 && s.y !== L.y) return true; } } return false; };
const simples = (q, o) => { const med = o.l.map(l => l.h).filter(Boolean).sort((a, b) => a - b)[Math.floor(o.l.length / 2)] || 20; const peq = o.l.filter(l => l.w && l.h < 0.6 * med && l.t.length < 6).length; const t = String(q.busca || '').replace(/\b\d{1,3}( \d{3})+\b/g, 'N'); return empilhadas(o.l) === 0 && !curtaSolta(o.l) && !o.l.some(l => /^[—–_-]+$/.test(l.t.trim())) && peq <= 1 && !/(?<![\d,.])\d+ \d+(?![\d,])/.test(t); };

(async () => {
  const aceitas = [], revisar = {}, FIGS = {}; const stat = {};
  const alvo = j.questoes.filter(q => q.soImagem && !feitos.has(q.id) && !manter.has(q.id) && OCR[q.id] && OCR[q.id].l && (filtro === '--todas' || q.id.includes(filtro)));
  for (const q of alvo) {
    const o = OCR[q.id], im = await loadImage(fs.readFileSync(path.join(raiz, 'app/img-questoes', q.imagens[0].replace(/^img:/, ''))));
    const motivos = [];
    if (q.tipo === 'vf' || q.tipo === 'soma') { if (!(rb0(q).af && rb0(q).af.length >= 2)) motivos.push('afirmações não detectadas'); }
    const rb = rascunho(q);
    const textoBase = limpa(q.busca);
    if (!simples(q, o)) motivos.push(area(q) === 'Matemática' ? 'matemática' : 'fórmula/unidade');
    if (embaralhado(q.busca)) motivos.push('texto do PDF embaralhado (OCR)');
    if (/\p{L} [çãõ]\s?\p{L}|\p{L} [çãõ]$/u.test(textoBase)) motivos.push('acentos quebrados no texto do PDF');
    if (/\b(planos?|ângulos?|retas?)\s+[a-zθφ]\b(?!\.)/i.test(textoBase) && /(plano|espaço|diedro|poliedro)/i.test(textoBase)) motivos.push('letra grega possivelmente trocada');
    if (q.tipo === 'mc' && !(rb.a && rb.a.length >= 4)) motivos.push('alternativas não detectadas');
    const tOcr = tri(o.l.map(l => l.t).join(' ')), tPdf = tri(textoBase);
    const c1 = cobertura(tOcr, tPdf), c2 = cobertura(tPdf, tOcr);
    if (!embaralhado(q.busca) && (c1 < 0.93 || c2 < 0.9)) motivos.push('texto do PDF diverge do OCR (' + c1.toFixed(2) + '/' + c2.toFixed(2) + ')');
    if (q.tipo === 'mc' && rb.a && rb.a.length !== 5 && /^enem/.test(q.id)) motivos.push('alternativas != 5');
    const f = await figura(q.id, im, o.l);
    let fig = null;
    if (f.tem) {
      motivos.push('tem figura');
      if (false) {
      } else { const b = f.blocos[0]; if ((b.y1 - b.y0) > 0.85 * f.H) motivos.push('figura ocupa a imagem toda (alternativas gráficas?)'); fig = b; }
    }
    // alternativas em figura? (alternativas detectadas como texto mas tinta grande abaixo do último texto)
    if (fig) FIGS[q.id] = [fig.x0 / f.W, fig.y0 / f.H, fig.x1 / f.W, fig.y1 / f.H].map(v => +v.toFixed(4));
    if (motivos.length) { revisar[q.id] = motivos.join('; '); stat[motivos[0]] = (stat[motivos[0]] || 0) + 1; continue; }
    // monta e/p separados pela figura
    let e = rb.e, p;
    if (fig) {
      const abaixo = o.l.filter(l => l.y >= fig.y1 - 4 && l.w).map(l => l.t.trim());
      const ancora = norm(abaixo.find(t => norm(t).length >= 14) || '').slice(0, 24);
      const ne = norm(e); const pos = ancora ? ne.indexOf(ancora) : -1;
      if (pos > 0) { // volta ao texto original: acha o índice em e correspondente ao n-ésimo caractere normalizado
        let cnt = 0, idx = 0; for (; idx < e.length && cnt < pos; idx++) if (norm(e[idx]).length) cnt++;
        p = e.slice(idx).trim(); e = e.slice(0, idx).trim();
      } else { revisar[q.id] = 'figura no meio: não achei onde dividir o texto'; continue; }
    }
    const lin = { id: q.id, e: estruturar(e, o.l), a: rb.a, auto: 1 }; if (p) lin.p = p;
    if (fig) { lin.fig = [fig.x0 / f.W, fig.y0 / f.H, fig.x1 / f.W, fig.y1 / f.H].map(v => +v.toFixed(4)); lin.alt = 'Figura da questão'; }
    aceitas.push(lin);
  }
  const nome = filtro === '--todas' ? 'todas' : filtro.replace(/[^\w-]/g, '');
  if (filtro === '--todas') fs.writeFileSync(path.join(__dirname, 'figuras-auto.json'), JSON.stringify(FIGS));
  fs.writeFileSync(path.join(__dirname, 'lote-auto-' + nome + '.jsonl'), aceitas.map(x => JSON.stringify(x)).join('\n') + (aceitas.length ? '\n' : ''));
  fs.writeFileSync(path.join(__dirname, 'revisar-' + nome + '.json'), JSON.stringify(revisar, null, 1));
  console.log('analisadas:', alvo.length, '· aceitas automaticamente:', aceitas.length, '· para revisar:', Object.keys(revisar).length);
  console.log(JSON.stringify(stat));
})();
