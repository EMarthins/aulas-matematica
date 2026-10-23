// Ajudantes das aulas do 6º ano (HTML simples, sem barras invertidas): reta numérica desenhada com marcas.
// linha(['0','1','2'], { dest: [1] }) → reta com uma marca por rótulo; os índices em `dest` ficam destacados.
const linha = (rot, opt = {}) => {
  const dest = opt.dest || [], cor = opt.cor || 'primary';
  const marca = (t, i) => {
    const d = dest.includes(i);
    return `<div style="display:flex;flex-direction:column;align-items:center;min-width:0;"><span style="width:3px;height:${d ? 20 : 12}px;background:${d ? 'var(--' + cor + ')' : 'var(--ink-faint)'};"></span><span style="margin-top:6px;font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:${d ? 800 : 600};color:${d ? 'var(--' + cor + ')' : 'var(--ink)'};">${t}</span></div>`;
  };
  return `<div style="position:relative;margin:16px 4px 6px;"><div style="position:absolute;left:0;right:0;top:0;height:3px;background:var(--ink-faint);border-radius:2px;"></div><div style="display:flex;justify-content:space-between;position:relative;">${rot.map(marca).join('')}</div></div>`;
};
const co = c => `<span style="color:var(--${c});">`;
module.exports = { linha, co };
