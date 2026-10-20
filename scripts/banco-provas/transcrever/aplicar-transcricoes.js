// Aplica ao banco (app/banco-provas.json) as TRANSCRIÇÕES de questões que estavam só em imagem.
//   node scripts/banco-provas/transcrever/aplicar-transcricoes.js      (rodar DEPOIS de todos os montar.js e aplicar-gabaritos.js)
// Entrada: lote-*.jsonl, uma linha por questão:
//   { id, e:"enunciado", p:"pergunta depois da figura", a:["alt A", …] | af:["afirmação 1", …], fig:[x0,y0,x1,y1] (frações 0–1 da imagem original) | null, alt:"descrição da figura" }
//   Texto: $…$ para matemática ({a|b}, √{x}, ^, _), linha em branco = novo parágrafo, quebra simples = <br>.
// manter.txt: "id | motivo" — questões que ficam como imagem (alternativas gráficas etc.).
const fs = require('fs'), path = require('path'), { rascunho } = require('./rascunho.js');
const raiz = path.resolve(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json'), imgDir = path.join(raiz, 'app/img-questoes');
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
const por = Object.fromEntries(j.questoes.map(q => [q.id, q]));
let canvas = null;
try { canvas = require(path.join(raiz, '../fontes-nre/tools/node_modules/@napi-rs/canvas')); } catch (e) { console.log('aviso: sem @napi-rs/canvas — figuras não serão recortadas'); }
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// escapa HTML só fora de $…$ (dentro, a matemática já escapa sozinha); depois converte quebras de linha
const html = t => String(t == null ? '' : t).split(/(\$[^$]*\$)/).map((p, i) => i % 2 ? p : esc(p)).join('')
  .replace(/&lt;(\/?)(sub|sup|i|b|u)&gt;/g, '<$1$2>') // permite subscrito/sobrescrito/itálico/negrito/sublinhado
  .replace(/\n\n+/g, '<br><span class="pb"></span>').replace(/\n/g, '<br>');
const SOMA = [1, 2, 4, 8, 16, 32, 64];
const FIGAUTO = fs.existsSync(path.join(__dirname, 'figuras-auto.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'figuras-auto.json'), 'utf8')) : {};
const normc = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const cont = { ok: 0, ausentes: [], figuras: 0, avisos: [] };
(async () => {
  const linhas = [];
  fs.readdirSync(__dirname).filter(f => /^lote-.*\.jsonl$/.test(f)).sort().forEach(f => fs.readFileSync(path.join(__dirname, f), 'utf8').split(/\r?\n/).filter(l => l.trim()).forEach((l, i) => { try { linhas.push(JSON.parse(l)); } catch (e) { cont.avisos.push(f + ':' + (i + 1) + ' JSON inválido'); } }));
  for (const r0 of linhas) {
    const q = por[r0.id]; if (!q) { cont.ausentes.push(r0.id); continue; }
    if (!q.soImagem) continue; // já é texto (idempotente: depois da 1ª aplicação o soImagem sai)
    const base0 = r0.ocr ? require('./ocr-rascunho.js').ocrCompleto(q, Array.isArray(r0.fig) ? r0.fig : (r0.fig === 'auto' ? FIGAUTO[r0.id] : null)) || rascunho(q) : rascunho(q);
    const r = Object.assign({}, base0, r0); // rascunho automático + correções manuais
    if (r.fig === 'auto') r.fig = FIGAUTO[r.id] || null;
    if (r0.tudo && base0 && base0.p) { r.e = base0.e + String.fromCharCode(10,10) +base0.p; if (r0.p === undefined) r.p = ''; } // tudo: junta e+p do rascunho (o corte é feito por e_ate / p_de)
    if ((r.e_ate || r.p_de) && r.e) { // e_ate: o enunciado termina nesta frase (descarta rótulos da figura que vieram no texto); p_de: a pergunta começa nesta frase
      const idx = [], ne = []; for (let i = 0; i < r.e.length; i++) { const c = normc(r.e[i]); if (c) { ne.push(c); idx.push(i); } }
      const N = ne.join(''), achar = f => { const k = N.indexOf(normc(f)); if (k < 0) return null; let fim = idx[k + normc(f).length - 1] + 1; while (fim < r.e.length && /[).”"»]/.test(r.e[fim])) fim++; return [idx[k], fim]; };
      const orig = r.e;
      if (r.p_de) { const z = achar(r.p_de); if (z) r.p = orig.slice(z[0]).trim(); else cont.avisos.push(r.id + ': p_de não achado: ' + r.p_de); }
      if (r.e_ate) { const z = achar(r.e_ate); if (z) r.e = orig.slice(0, z[1]).trim(); else cont.avisos.push(r.id + ': e_ate não achado: ' + r.e_ate); }
      else if (r.p_de && r.p) { const z = achar(r.p_de); if (z) r.e = orig.slice(0, z[0]).trim(); }
    }
    if (r.corte && r.e) { // divide o enunciado onde começa a frase indicada (o que vem antes fica em e, o resto em p)
      const idx = [], ne = []; for (let i = 0; i < r.e.length; i++) { const c = normc(r.e[i]); if (c) { ne.push(c); idx.push(i); } }
      const k = ne.join('').indexOf(normc(r.corte).slice(0, 30));
      if (k > 0) { const cut = idx[k]; r.p = (r.e.slice(cut).trim() + (r.p ? ' ' + r.p : '')).trim(); r.e = r.e.slice(0, cut).trim(); } else cont.avisos.push(r.id + ': corte não achado: ' + r.corte);
    }
    if (r.sub) { // substituições pontuais no texto (ex.: ["N 12", "$ {N|12} $"]) — o texto do PDF perde frações, expoentes e símbolos
      const camp = [['e'], ['p']].concat((r.a || []).map((_, i) => ['a', i])).concat((r.af || []).map((_, i) => ['af', i]));
      for (const [de, para] of r.sub) {
        let achou = false;
        for (const c of camp) { const get = () => (c[1] === undefined ? r[c[0]] : r[c[0]][c[1]]); const v = get(); if (typeof v !== 'string' || !v.includes(de)) continue; achou = true; const nv = v.split(de).join(para); if (c[1] === undefined) r[c[0]] = nv; else r[c[0]][c[1]] = nv; }
        if (!achou) cont.avisos.push(r.id + ': substituição não achada: ' + de);
      }
    }
    if (r0.fig && r0.p === undefined && !r.corte && r.e) { const ps = r.e.split(/(?<=[.!?:])\s+/); const u = ps[ps.length - 1]; if (ps.length > 1 && u.length > 12 && /[?:.]$/.test(u)) { r.p = u; r.e = ps.slice(0, -1).join(' '); } }
    const orig = (q.imagens || [])[0] ? path.join(imgDir, q.imagens[0].replace(/^img:/, '')) : null;
    const larg0 = q.larguraMm || 90;
    if (r.base) { // texto/figura de apoio compartilhado por um grupo de questões (antes numa imagem "base")
      if (r.base.txt) r.e = r.base.txt + (r.e ? '\n\n' + r.e : '');
    }
    q.enunciado = html(r.e); if (r.p) q.pergunta = html(r.p); else delete q.pergunta;
    if (q.tipo === 'mc') {
      const velho = q.alternativas || [];
      if (!Array.isArray(r.a) || r.a.length < 2) { cont.avisos.push(r.id + ': mc sem alternativas'); continue; }
      if (velho.length && velho.length !== r.a.length) cont.avisos.push(r.id + ': ' + velho.length + ' alternativas no banco x ' + r.a.length + ' transcritas');
      q.alternativas = r.a.map((t, i) => ({ t: html(t), ok: !!(velho[i] && velho[i].ok) }));
    } else if (q.tipo === 'soma') {
      const soma = parseInt(q.gabarito, 10); q.afirmacoes = (r.af || []).map((t, i) => ({ t: html(t), ok: !isNaN(soma) && (soma & SOMA[i]) !== 0 }));
      if (isNaN(soma)) cont.avisos.push(r.id + ': soma sem gabarito numérico');
    } else if (q.tipo === 'vf') {
      const g = String(q.gabarito || '').split(/[^VFvf]+/).filter(Boolean).map(x => x.toUpperCase() === 'V');
      q.afirmacoes = (r.af || []).map((t, i) => ({ t: html(t), ok: !!g[i] }));
      if (g.length !== q.afirmacoes.length) cont.avisos.push(r.id + ': ' + g.length + ' V/F no gabarito x ' + q.afirmacoes.length + ' afirmações');
    }
    delete q.figura;
    if (Array.isArray(r.tabs)) q.figuras = r.tabs.map(t => ({ tipo: 'tabela', cab: t.cab, linhas: t.linhas, largura: t.largura || '90%', ...(t.legenda ? { legenda: t.legenda } : {}) }));
    if (r.tab) q.figura = { tipo: 'tabela', cab: r.tab.cab, linhas: r.tab.linhas, largura: r.tab.largura || '90%', ...(r.tab.legenda ? { legenda: r.tab.legenda } : {}) };
    if (Array.isArray(r.figs) && orig && canvas && fs.existsSync(orig)) { // várias figuras: q.figuras
      const im = await canvas.loadImage(fs.readFileSync(orig)); q.figuras = [];
      for (let n = 0; n < r.figs.length; n++) {
        const pad = 0.006, [a, b, c, d] = r.figs[n], x0 = Math.max(0, a - pad), y0 = Math.max(0, b - pad), x1 = Math.min(1, c + pad), y1 = Math.min(1, d + pad);
        const sx = Math.round(x0 * im.width), sy = Math.round(y0 * im.height), w = Math.round((x1 - x0) * im.width), h = Math.round((y1 - y0) * im.height);
        const cv = canvas.createCanvas(w, h), g = cv.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.drawImage(im, sx, sy, w, h, 0, 0, w, h);
        const nome = r.id + '-fig' + (n + 1) + '.jpg'; fs.writeFileSync(path.join(imgDir, nome), cv.toBuffer('image/jpeg', 90));
        q.figuras.push({ tipo: 'img', src: 'img:' + nome, alt: (r.alts && r.alts[n]) || 'Figura da questão', largura: Math.max(25, Math.min(170, Math.round(larg0 * (x1 - x0)))) + 'mm' }); cont.figuras++;
      }
    } else if (r.fig && orig && canvas && fs.existsSync(orig)) {
      const im = await canvas.loadImage(fs.readFileSync(orig));
      const pad = 0.006, [a, b, c, d] = r.fig, x0 = Math.max(0, a - pad), y0 = Math.max(0, b - pad), x1 = Math.min(1, c + pad), y1 = Math.min(1, d + pad);
      const sx = Math.round(x0 * im.width), sy = Math.round(y0 * im.height), w = Math.round((x1 - x0) * im.width), h = Math.round((y1 - y0) * im.height);
      const cv = canvas.createCanvas(w, h), g = cv.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.drawImage(im, sx, sy, w, h, 0, 0, w, h);
      const nome = r.id + '-fig.jpg'; fs.writeFileSync(path.join(imgDir, nome), cv.toBuffer('image/jpeg', 90));
      const mm = Math.max(25, Math.min(170, Math.round(larg0 * (x1 - x0))));
      q.figura = { tipo: 'img', src: 'img:' + nome, alt: r.alt || 'Figura da questão', largura: mm + 'mm', ...(r.legenda ? { legenda: r.legenda } : {}) }; cont.figuras++;
    }
    if (r.base) { // figuras de apoio (imagem inteira da base, recorte ou tabelas) vêm antes das figuras da própria questão
      const extra = [];
      if (q.base && q.base.src) {
        const bf = path.join(imgDir, q.base.src.replace(/^img:/, ''));
        if (r.base.img === 'inteira') extra.push({ tipo: 'img', src: q.base.src, alt: 'Texto de apoio', largura: Math.min(170, Math.round(q.base.larguraMm || 170)) + 'mm' });
        else if (Array.isArray(r.base.img) && canvas && fs.existsSync(bf)) {
          const im = await canvas.loadImage(fs.readFileSync(bf)), [a, b, c, d] = r.base.img, sx = Math.round(a * im.width), sy = Math.round(b * im.height), w = Math.round((c - a) * im.width), h = Math.round((d - b) * im.height);
          const cv = canvas.createCanvas(w, h), g = cv.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.drawImage(im, sx, sy, w, h, 0, 0, w, h);
          const nome = r.id + '-base.jpg'; fs.writeFileSync(path.join(imgDir, nome), cv.toBuffer('image/jpeg', 90));
          extra.push({ tipo: 'img', src: 'img:' + nome, alt: r.base.alt || 'Figura de apoio', largura: Math.max(25, Math.min(170, Math.round((q.base.larguraMm || 120) * (c - a)))) + 'mm' });
        }
      }
      (r.base.tabs || []).forEach(t => extra.push({ tipo: 'tabela', cab: t.cab, linhas: t.linhas, largura: t.largura || '90%', ...(t.legenda ? { legenda: t.legenda } : {}) }));
      const proprias = [].concat(q.figura || [], q.figuras || []).filter(Boolean);
      delete q.figura; q.figuras = extra.concat(proprias); delete q.base;
    }
    delete q.base; delete q.soImagem; delete q.imagens; delete q.imgPrevia; delete q.larguraMm; delete q.busca; q.transcrita = true;
    cont.ok++;
  }
  j.gerado = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(arq, JSON.stringify(j, null, 1));
  console.log('transcrições aplicadas:', cont.ok, '· figuras recortadas:', cont.figuras, cont.ausentes.length ? '· ids ausentes: ' + cont.ausentes.join(', ') : '');
  cont.avisos.slice(0, 30).forEach(a => console.log('  aviso:', a)); if (cont.avisos.length > 30) console.log('  … +' + (cont.avisos.length - 30) + ' avisos');
})();
