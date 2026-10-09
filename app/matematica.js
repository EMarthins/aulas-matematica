// ============================================================
// Mini-linguagem de matemática para o banco de questões e o Proveiro.
// Mesma sintaxe usada pelo gerador de aulas (scripts/gerador-ena/kit.js):
//
//   $ ... $            tudo entre cifrões vira matemática formatada
//   {a|b}              fração           √{x}  √x  ∛{x}  √[n]{x}   raízes
//   x^2  x^{n-1}       expoente         a_n  a_{n+1}                índice
//   <=  >=  !=  =>  <=>  ->  +-  ~=     viram ≤ ≥ ≠ ⇒ ⇔ → ± ≈
//   -  vira −   ·   *  vira ·           "texto reto"  fica sem itálico
//   \{  \}  chaves literais              \␠  espaço largo
//
// Fora dos cifrões o texto é HTML normal (use &lt; para "<").
// "R$ 100" (cifrão seguido de número) é tratado como dinheiro, não como matemática.
// Módulo puro (sem DOM): roda no navegador e no Node.
// ============================================================
const KEEP = new Set(['sen', 'cos', 'tg', 'tan', 'sin', 'log', 'ln', 'mmc', 'mdc', 'mod', 'min', 'max', 'det', 'lim', 'sec', 'csc', 'cot', 'cotg', 'rad']);
const esc1 = c => c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c;
function matching(s, i) { let d = 0; for (let j = i; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}') { d--; if (d === 0) return j; } } return s.length - 1; }
function topBar(s) { let d = 0; for (let j = 0; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}') d--; else if (s[j] === '|' && d === 0) return j; } return -1; }
function atom(s, i) {
  if (s[i] === '{') { const j = matching(s, i); return [s.slice(i + 1, j), j + 1]; }
  let j = i; if (s[j] === '−' || s[j] === '+' || s[j] === '-') j++;
  if (/[0-9]/.test(s[j] || '')) { while (/[0-9]/.test(s[j] || '')) j++; return [s.slice(i, j), j]; }
  if (/[A-Za-zα-ωΑ-Ω]/.test(s[j] || '')) return [s.slice(i, j + 1), j + 1];
  return [s.slice(i, j + 1), j + 1];
}
function conv(s) {
  let o = '', i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '{') { const j = matching(s, i); const inner = s.slice(i + 1, j); const b = topBar(inner); o += b >= 0 ? `<span class="fr"><span>${conv(inner.slice(0, b))}</span><span>${conv(inner.slice(b + 1))}</span></span>` : conv(inner); i = j + 1; continue; }
    if (c === '√' || c === '∛') {
      let idx = c === '∛' ? '3' : ''; i++;
      if (s[i] === '[') { const j = s.indexOf(']', i); idx = s.slice(i + 1, j); i = j + 1; }
      const [a, ni] = atom(s, i); i = ni;
      o += `<span class="rt">${idx ? `<sup class="sq">${conv(idx)}</sup>` : ''}√<span class="rr">${conv(a)}</span></span>`; continue;
    }
    if (c === '^' || c === '_') { const [a, ni] = atom(s, i + 1); i = ni; o += c === '^' ? `<sup>${conv(a)}</sup>` : `<sub>${conv(a)}</sub>`; continue; }
    if (c === '\u0001' || c === '\u0002') { o += c === '\u0001' ? '{' : '}'; i++; continue; }
    if (c === '"') { const j = s.indexOf('"', i + 1); o += s.slice(i + 1, j < 0 ? s.length : j).replace(/[&<>]/g, esc1); i = (j < 0 ? s.length : j) + 1; continue; }
    if (/[A-Za-z]/.test(c)) {
      let j = i; while (/[A-Za-z]/.test(s[j] || '')) j++;
      const w = s.slice(i, j);
      if (KEEP.has(w) || (w.length >= 2 && w === w.toUpperCase())) o += w; else o += `<i>${w}</i>`;
      i = j; continue;
    }
    o += esc1(c); i++;
  }
  return o;
}
function prep(s) {
  return s.split('"').map((p, k) => k % 2 ? '"' + p + '"' : p
    .replace(/<=>/g, '⇔').replace(/=>/g, '⇒').replace(/<=/g, '≤').replace(/>=/g, '≥').replace(/!=/g, '≠').replace(/\+-/g, '±').replace(/~=/g, '≈').replace(/->/g, '→')
    .replace(/\*/g, '·').replace(/-/g, '−').replace(/\\\{/g, '\u0001').replace(/\\\}/g, '\u0002').replace(/\\ /g, ' ')).join('');
}

/** Converte uma expressão (sem os cifrões) em HTML de matemática. */
export const expr = s => `<span class="tex">${conv(prep(String(s)))}</span>`;

/** Substitui todos os $...$ de um trecho de HTML por matemática formatada. */
export function mat(html) {
  return String(html == null ? '' : html)
    .replace(/(^|[^A-Za-z$])R\$(?= ?\d)/g, '$1R&#36;')
    .replace(/\$([^$]+?)\$/g, (_, e) => expr(e));
}

/** CSS mínimo da matemática (frações, raízes, expoentes) — o Proveiro já o inclui em prova.css. */
export const MATH_CSS = `
.fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.15;margin:0 .12em;font-size:.92em}
.fr>span:first-child{border-bottom:1.5px solid currentColor;padding:0 .2em .06em}
.fr>span:last-child{padding:.06em .2em 0}
.rt{white-space:nowrap}.rt .rr{border-top:1.5px solid currentColor;padding:0 .12em;margin-left:.02em}
sup.sq{font-size:.7em}`;
