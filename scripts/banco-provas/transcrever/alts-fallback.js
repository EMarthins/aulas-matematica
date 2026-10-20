// Último recurso para achar as 5 alternativas nas linhas do OCR quando os marcadores (bolinhas) não foram lidos:
// cada alternativa termina numa linha "curta" (não chega à margem direita); a última linha do enunciado também é curta.
module.exports = function altsPorLinhaCurta(L, limpa) {
  const largas = L.filter(l => l.w > 300); if (largas.length < 4) return null;
  const dir = Math.max(...largas.map(l => l.x + l.w));
  const solo = l => l.t.trim().length <= 2 && l.w < 40;
  const curta = l => l.x + l.w < dir - 55;
  const M = L.filter(l => !solo(l));
  const MARC = /^(?:OQ|O|Q|@|©|®|0)\s+(?=\S)/;
  for (let i0 = M.length - 5; i0 >= 2; i0--) {
    if (!curta(M[i0 - 1]) && !/[.?!:]\s*$/.test(M[i0 - 1].t)) continue; // a linha anterior (fim do enunciado) é curta ou fecha frase
    const bl = M.slice(i0), gr = [[bl[0]]];
    for (let k = 1; k < bl.length; k++) { if (curta(bl[k - 1])) gr.push([bl[k]]); else gr[gr.length - 1].push(bl[k]); }
    if (gr.length < 5) continue;
    if (gr.length > 5) return null;
    const alts = gr.map(g => limpa(g.map(l => l.t.trim()).join(' ').replace(MARC, '')));
    if (alts.some(t => t.length < 3 || t.length > 450)) return null;
    const stemLines = L.filter(l => l.y < M[i0].y - 1 && !(MARC.test(l.t.trim()) && l.y >= M[i0].y - 40));
    return { alts, stemLines, stem: stemLines.map(l => l.t.trim()).join(' ').split(/\s+/).join(' ') };
  }
  return null;
};
