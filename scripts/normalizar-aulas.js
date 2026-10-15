// Troca, nas aulas, a numeração herdada do RCO ("Aula 33", "Aulas 44, 45") pela posição no módulo: "Módulo 02 · Aula 1".
//   node scripts/normalizar-aulas.js           (idempotente; roda no preparar.js depois de gerar/atualizar páginas)
// Onde mexe: a barra do topo da aula (<div>Aula 33 · Título</div>), o eyebrow "Matemática · 2ª série · Aula 33" e, nas decks
// de Educação Financeira, os eyebrows de seção "Aula 44 · teoria" (decks de várias aulas viram "Parte 1/2 · teoria").
// A posição vem do catálogo (app/catalog.js): módulo = nº da unidade no trimestre; aula = ordem das aulas dentro do módulo.
const fs = require('fs'), path = require('path'), { pathToFileURL } = require('url');
const R = path.resolve(__dirname, '..') + path.sep;
const RANGE = '\\d+(?:\\s*(?:e|a|,|–|-)\\s*\\d+)*';
const pad = n => String(n).padStart(2, '0');
const numeros = txt => { // "44, 45" · "44–46" · "44 a 46" · "44 e 45" → [44,45,46]
  const out = [], partes = txt.split(/\s*(?:,|e)\s*/);
  for (const p of partes) { const m = p.match(/^(\d+)\s*(?:–|-|a)\s*(\d+)$/); if (m) for (let i = +m[1]; i <= +m[2]; i++) out.push(i); else if (/^\d+$/.test(p.trim())) out.push(+p); }
  return out;
};
(async () => {
  const cat = await import(pathToFileURL(R + 'app/catalog.js').href);
  let tocadas = 0, total = 0;
  for (const m of cat.MATERIAS) {
    if (m.oculta || !m.CATALOG) continue;
    for (const a of m.CATALOG) for (const t of a.trimestres) t.unidades.forEach((u, ui) => {
      let k = 0;
      for (const it of u.itens || []) {
        if (!/^Aula/.test(it.tipo)) continue;
        k++; total++;
        const f = R + it.arquivo; if (!fs.existsSync(f)) continue;
        let h = fs.readFileSync(f, 'utf8'), o = h;
        const label = 'Módulo ' + pad(ui + 1) + ' · Aula ' + k;
        // 1) barra do topo: <div>Aula 33 · Título</div>  /  <div>Aulas 44, 45 · 1ª Série…</div>
        let nums = [];
        h = h.replace(new RegExp('(^[ \\t]*<div>)(?<![Mm]ódulo \\d\\d · )Aulas? (' + RANGE + ')( · )', 'm'), (_, a1, r, a3) => { nums = numeros(r); return a1 + label + a3; });
        // 2) eyebrow "Matemática · 2ª série · Aula 33" (Aulas 33 e 34…)
        h = h.replace(new RegExp('(class="eyebrow[^"]*">[^<]*?· )(?<![Mm]ódulo \\d\\d · )Aulas? ' + RANGE + '(?=\\s*<)', 'g'), (_, a1) => a1 + label);
        // 3) eyebrows de seção "Aula 44 · teoria" (EF): decks de várias aulas viram "Parte 1/2"
        h = h.replace(new RegExp('(class="eyebrow[^"]*">)Aula (\\d+)( · )', 'g'), (s0, a1, n, a3) => { const i = nums.indexOf(+n); if (!nums.length) return s0; return a1 + (nums.length > 1 ? 'Parte ' + (i + 1) : 'Aula ' + k) + a3; });
        if (h !== o) { fs.writeFileSync(f, h); tocadas++; }
      }
    });
  }
  console.log('aulas verificadas:', total, '· páginas ajustadas:', tocadas);
})();
