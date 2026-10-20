// Mostra o rascunho feito só pelo OCR dos ids de %TEMP%\transc\ids.json (ou dos ids passados). Atualiza o vocabulário pelo corretor do Word.
//   node scripts/banco-provas/transcrever/ver.js [id …]
const fs = require('fs'), path = require('path'), os = require('os'), { spawnSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..');
const j = JSON.parse(fs.readFileSync(path.join(raiz, 'app/banco-provas.json'), 'utf8'));
let ids = process.argv.slice(2); if (!ids.length) ids = JSON.parse(fs.readFileSync(path.join(os.tmpdir(), 'transc', 'ids.json'), 'utf8'));
const falta = ids.filter(id => { const o = require('./ocr.json'); return !o[id]; });
if (falta.length) spawnSync(process.execPath, [path.join(__dirname, 'ocr-lote.js'), ...falta], { stdio: 'inherit' });
const FA = fs.existsSync(path.join(__dirname, 'figuras-auto.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'figuras-auto.json'), 'utf8')) : {};
function rodar() {
  Object.keys(require.cache).filter(k => /ocr-rascunho|vocab\.js|rascunho\.js|ocr\.json/.test(k)).forEach(k => delete require.cache[k]);
  const { ocrCompleto } = require('./ocr-rascunho.js');
  return ids.map(id => { const q = j.questoes.find(x => x.id === id); return { id, q, r: ocrCompleto(q, FA[id]) }; });
}
let res = rodar();
const extra = path.join(__dirname, 'vocab-extra.json'), ja = new Set(fs.existsSync(extra) ? JSON.parse(fs.readFileSync(extra, 'utf8')) : []);
const novas = new Set(); res.forEach(x => x.r && x.r.avisos.forEach(w => { if (w.length >= 6 && !ja.has(w)) novas.add(w); if (w.length >= 8) for (let i = 4; i <= w.length - 2; i++) { const a = w.slice(0, i); if (a.length >= 4 && !ja.has(a)) novas.add(a); } }));
if (novas.size) {
  const ent = path.join(os.tmpdir(), 'unk.txt'), sai = path.join(os.tmpdir(), 'unk-ok.txt'); fs.writeFileSync(ent, [...novas].join('\n')); try { fs.unlinkSync(sai); } catch (e) {}
  spawnSync('powershell', ['-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'spell.ps1'), ent, sai], { stdio: 'ignore' });
  if (fs.existsSync(sai)) { fs.readFileSync(sai, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/).filter(w => w.length >= 6).forEach(w => ja.add(w)); fs.writeFileSync(extra, JSON.stringify([...ja])); res = rodar(); }
}
for (const { id, q, r } of res) {
  console.log('\n=== ' + id + ' [' + q.tipo + (q.gabarito ? ' g=' + q.gabarito : '') + '] ' + (FA[id] ? 'FIGauto=' + FA[id].join(',') : ''));
  if (!r) { console.log('(sem OCR)'); continue; }
  const cur = (s, a, b) => (s.length > a + b + 20 ? s.slice(0, a) + ' […' + (s.length - a - b) + ' car…] ' + s.slice(-b) : s);
  console.log('E: ' + cur(r.e, 90, 150).split(String.fromCharCode(10)).join('⏎'));
  if (r.p) console.log('P: ' + cur(r.p, 100, 170).split(String.fromCharCode(10)).join('⏎'));
  if (r.a) r.a.forEach((a, k) => console.log('  ' + 'ABCDE'[k] + ') ' + (a.length > 70 ? a.slice(0, 40) + '…' + a.slice(-25) : a))); else if (q.tipo === 'mc') console.log('  (sem alternativas detectadas)');
  if (r.avisos.length) console.log('  ?? ' + r.avisos.join(' '));
  { const tudo = [r.e, r.p, ...(r.a || [])].join(' '); const re = new RegExp('\\S*[A-Za-z]\\d\\S*|\\S*\\d[A-Za-z]\\S*|\\S*[-−]\\d\\S*|\\S*[^\\s\\wà-úÀ-Ú.,;:()“”‘’—–%/ºª°$?!-]\\S*', 'g'); const t = [...new Set((tudo.match(re) || []).filter(x => !/^(19|20)\\d\\d\\W*$/.test(x)))].slice(0, 14); if (t.length) console.log('  FORM: ' + t.join(' | ')); }
}
