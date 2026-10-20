// Decifra o texto embaralhado do ENEM 2018 (fonte com glifos deslocados: letras +29; acentos em códigos altos).
const ACENTO = { 105: 'á', 106: 'à', 107: 'â', 109: 'ã', 111: 'ç', 112: 'é', 114: 'ê', 116: 'í', 121: 'ó', 123: 'ô', 125: 'õ', 126: 'ú' };
function palavraCifrada(w) { if (/^[A-E]$/.test(w)) return false; if (w.length <= 3 && !/[\u0001-\u001f]/.test(w)) return false; const L = [...w].filter(c => /[A-Za-z\u0001-\u001f]/.test(c)); if (!L.length) return /[\u0001-\u001f]/.test(w); const cif = [...w].filter(c => { const k = c.charCodeAt(0); return (k >= 68 && k <= 93) || (k >= 1 && k <= 31) || ACENTO[k] !== undefined && k > 100 && /[A-Z\u0001-\u001f]/.test(w); }).length; return cif / L.length >= 0.5 && /[D-Z\[\\\]\u0001-\u001f]/.test(w); }
function char(c) {
  const k = c.charCodeAt(0);
  if (k === 3) return ' ';
  if (k >= 1 && k <= 31) return String.fromCharCode(k + 29);                 // dígitos e pontuação
  if (k >= 36 && k <= 61) return String.fromCharCode(k + 29);                // maiúsculas
  if (k >= 68 && k <= 93) return String.fromCharCode(k + 29);                // minúsculas
  if (ACENTO[k]) return ACENTO[k];
  return c;
}
function decifra(txt) {
  const partes = String(txt).split(/(\s+)/);
  return partes.map(p => (/\S/.test(p) && palavraCifrada(p) ? [...p].map(char).join('') : p)).join('');
}
module.exports = { decifra };

// segunda passada: tokens curtos (maiúscula isolada, "Um", "Na", "(", números) herdam o regime do vizinho cifrado
function decifra2(txt) {
  const partes = String(txt).split(/(\s+)/), pal = partes.map((p, i) => ({ p, i })).filter(x => /\S/.test(x.p));
  const cif = pal.map(x => palavraCifrada(x.p));
  pal.forEach((x, k) => {
    if (cif[k]) return;
    const w = x.p, viz = (cif[k - 1] || cif[k + 1]);
    const suspeita = [...w].some(c => { const k2 = c.charCodeAt(0); return (k2 >= 36 && k2 <= 61 && !/[.,;:()"'%$&\/-]/.test(c)) || (k2 >= 1 && k2 <= 31); });
    if (viz && w.length <= 4 && suspeita && !/^[a-z]+$/.test(w) && !/[a-z]{2}/.test(w)) cif[k] = true;
  });
  pal.forEach((x, k) => { if (cif[k]) partes[x.i] = [...x.p].map(char).join(''); });
  return partes.join('').replace(/¿/g, 'fi').replace(/\s{2,}/g, ' ').replace(/ƒ/g, 'fl');
}
module.exports.decifra = decifra2;
if (require.main === module && true) { const bk = JSON.parse(require('fs').readFileSync(__dirname + '/busca-2018.json', 'utf8')); for (const id of process.argv.slice(2)) console.log(id + '\n' + decifra2(bk[id]) + '\n'); }
