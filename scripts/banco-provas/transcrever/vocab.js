// vocabulário (palavras vistas no texto extraído dos PDFs) para desconfiar de erros do OCR
const fs = require('fs'), path = require('path');
const banco = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../app/banco-provas.json'), 'utf8'));
const W = new Map();
const palavras = s => (String(s || '').normalize('NFC').toLowerCase().match(/[a-zà-ú]{3,}/g) || []);
for (const q of banco.questoes) {
  const b = q.busca; if (!b || /[\u0000-\u0008\u000b-\u001f]/.test(b)) continue;
  for (const w of palavras(b)) W.set(w, (W.get(w) || 0) + 1);
}
// textos já conferidos à mão também valem
for (const q of banco.questoes) if (q.transcrita) {
  const t = [q.enunciado, q.pergunta, ...(q.alternativas || []).map(a => a.t)].join(' ').replace(/<[^>]+>/g, ' ');
  for (const w of palavras(t)) W.set(w, (W.get(w) || 0) + 0.01);
}
// palavras aprovadas pelo corretor do Word (spell.ps1), só as com 6+ letras (fragmentos curtos de OCR continuam suspeitos)
const EXTRA = path.join(__dirname, 'vocab-extra.json');
if (fs.existsSync(EXTRA)) for (const w of JSON.parse(fs.readFileSync(EXTRA, 'utf8'))) W.set(w, 1);
const conhecida = w => (W.get(w) || 0) >= 1;
/** palavras do texto que não aparecem em nenhum PDF do banco */
function desconhecidas(texto) { return [...new Set(palavras(String(texto).replace(/<[^>]+>/g, ' ')).filter(w => w.length >= 4 && !conhecida(w)))]; }
module.exports = { desconhecidas, conhecida, tamanho: W.size };
