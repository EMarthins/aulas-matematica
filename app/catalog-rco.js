// Estrutura da Matemática do 6º ao 9º ano (Ensino Fundamental) na divisão do RCO/NRE 2026: módulos por trimestre, na ordem das aulas.
// Os módulos que já têm aulas no site (mesmo título em `ex`) moram dentro do módulo do RCO; os demais aparecem como "em breve" com a lista das
// aulas previstas (`previstas`), para as aulas entrarem aos poucos sem mexer na organização. Dados em app/catalog-rco-dados.js (gerado).
import { RCO } from './catalog-rco-dados.js';

const ACC = ['primary', 'growth', 'decay', 'success'];

export function aplicarRCO(MATERIAS) {
  const mat = MATERIAS.find(m => m.id === 'matematica'); if (!mat) return;
  for (const [ano, tris] of Object.entries(RCO)) {
    const a = mat.CATALOG.find(x => x.ano === ano); if (!a) continue;
    const exist = new Map(); a.trimestres.forEach(t => t.unidades.forEach(u => { if (!exist.has(u.titulo)) exist.set(u.titulo, u); }));
    const usados = new Set();
    const novos = {};
    for (const [nomeTri, mods] of Object.entries(tris)) {
      novos[nomeTri] = mods.map((m, i) => {
        const u = { titulo: m.t, accent: ACC[i % 4], icon: 'grid', itens: [], vazio: true, previstas: m.p, rco: true };
        if (m.prov) u.provisorio = true; if (m.comp) u.complemento = true;
        (m.ex || []).forEach((tit, k) => {
          const e = exist.get(tit); if (!e || usados.has(tit)) return; usados.add(tit);
          if (k === 0) { u.accent = e.accent || u.accent; u.icon = e.icon || u.icon; if (e.revisado) u.revisado = e.revisado; }
          u.itens = u.itens.concat(e.itens); if (e.pendente) u.pendente = true; u.vazio = false;
        });
        return u;
      });
    }
    a.trimestres.forEach(t => {
      const sobras = t.unidades.filter(u => !usados.has(u.titulo) && !(novos[t.nome] || []).some(n => n.titulo === u.titulo));
      t.unidades = (novos[t.nome] || []).concat(sobras.map(u => Object.assign(u, { complemento: true })));
    });
    // trimestres que o RCO define e o site ainda não tinha
    Object.keys(novos).forEach(nome => { if (!a.trimestres.some(t => t.nome === nome)) a.trimestres.push({ nome, unidades: novos[nome] }); });
    a.trimestres.sort((x, y) => x.nome.localeCompare(y.nome));
  }
}
