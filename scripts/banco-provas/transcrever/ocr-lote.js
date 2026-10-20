// OCR (Windows, pt-BR) das imagens do banco. Guarda em transcrever/ocr.json { id: { w, h, l:[{t,x,y,w,h}] } } (caixas em px da imagem original).
//   node scripts/banco-provas/transcrever/ocr-lote.js <id> <id> …        (ou  --todas-pendentes)
const fs = require('fs'), path = require('path'), os = require('os'), { spawnSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..'), arqOcr = path.join(__dirname, 'ocr.json');
const j = JSON.parse(fs.readFileSync(path.join(raiz, 'app/banco-provas.json'), 'utf8'));
const cache = fs.existsSync(arqOcr) ? JSON.parse(fs.readFileSync(arqOcr, 'utf8')) : {};
let ids = process.argv.slice(2);
if (ids[0] === '--todas-pendentes') ids = j.questoes.filter(q => q.soImagem).map(q => q.id);
ids = ids.filter(id => !(cache[id] && cache[id].l));
if (!ids.length) { console.log('ocr: nada a fazer'); process.exit(0); }
const LOTE = 150;
for (let a = 0; a < ids.length; a += LOTE) {
  const tmp = path.join(os.tmpdir(), 'ocr-transc'); fs.rmSync(tmp, { recursive: true, force: true }); fs.mkdirSync(tmp, { recursive: true });
  const lista = [];
  for (const id of ids.slice(a, a + LOTE)) {
    const q = j.questoes.find(x => x.id === id); const im = q && (q.imagens || [])[0]; if (!im) continue;
    const dst = path.join(tmp, id + '.jpg'); fs.copyFileSync(path.join(raiz, 'app/img-questoes', im.replace(/^img:/, '')), dst); lista.push(dst);
  }
  fs.writeFileSync(path.join(tmp, 'lista.txt'), lista.join('\n'));
  spawnSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(raiz, '../fontes-nre/tools/ocr.ps1'), '-Lista', path.join(tmp, 'lista.txt')], { encoding: 'utf8', maxBuffer: 1 << 28 });
  for (const f of lista) {
    const o = f.replace(/\.jpg$/, '.ocr.json'); if (!fs.existsSync(o)) continue;
    const d = JSON.parse(fs.readFileSync(o, 'utf8').replace(/^﻿/, ''));
    cache[path.basename(f, '.jpg')] = { w: d.w, h: d.h, l: (d.linhas || []).map(l => { const p = l.p || []; if (!p.length) return { t: l.t, x: 0, y: 0, w: 0, h: 0 }; const x0 = Math.min(...p.map(w => w.x)), y0 = Math.min(...p.map(w => w.y)), x1 = Math.max(...p.map(w => w.x + w.w)), y1 = Math.max(...p.map(w => w.y + w.h)); return { t: l.t, x: Math.round(x0), y: Math.round(y0), w: Math.round(x1 - x0), h: Math.round(y1 - y0) }; }) };
  }
  fs.writeFileSync(arqOcr, JSON.stringify(cache));
  console.log('ocr:', Object.keys(cache).length, 'questões no cache');
}
