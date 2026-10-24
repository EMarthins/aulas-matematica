// Estrutura das matérias na divisão em módulos e aulas previstas.
//  · Matemática 6º–9º ano: divisão do RCO/NRE 2026 (app/catalog-rco-dados.js).
//  · Demais matérias (Português, Inglês, Arte, Ed. Física, Ciências, História, Geografia, Física, Química, Biologia, Filosofia e Sociologia):
//    plano de módulos e aulas montado pelo currículo (app/catalog-plano-dados.js, gerado por scripts/plano/montar-plano.js).
// Os módulos que já têm aulas no site (mesmo título em `ex`) moram dentro do módulo do plano; os demais aparecem como "em breve" com a lista das
// aulas previstas (`previstas`), para as aulas entrarem aos poucos sem mexer na organização.
import { RCO } from './catalog-rco-dados.js';
import { PLANO } from './catalog-plano-dados.js';
import { ITENS } from './catalog-plano-itens.js';

const ACC = ['primary', 'growth', 'decay', 'success'];
const ICONE_MATERIA = { portugues: 'm-port', ingles: 'm-ing', arte: 'm-arte', 'educacao-fisica': 'm-edf', ciencias: 'm-cien', historia: 'm-hist', geografia: 'm-geo', fisica: 'm-fis', quimica: 'm-qui', biologia: 'm-bio', filosofia: 'm-fil', sociologia: 'm-soc' };

// plano: true → módulos do plano pelo currículo (divisão provisória; descarta os módulos genéricos ainda vazios)
function aplicarEstrutura(mat, dados, plano) {
  for (const [ano, tris] of Object.entries(dados)) {
    const a = mat.CATALOG.find(x => x.ano === ano); if (!a) continue;
    const exist = new Map(); a.trimestres.forEach(t => t.unidades.forEach(u => { if (!exist.has(u.titulo)) exist.set(u.titulo, u); }));
    const usados = new Set();
    const novos = {};
    for (const [nomeTri, mods] of Object.entries(tris)) {
      novos[nomeTri] = mods.map((m, i) => {
        const u = { titulo: m.t, accent: ACC[i % 4], icon: plano ? (ICONE_MATERIA[mat.id] || 'grid') : 'grid', itens: [], vazio: true, previstas: m.p };
        if (plano) { u.plano = true; u.provisorio = true; } else u.rco = true;
        if (m.prov) u.provisorio = true; if (m.comp) u.complemento = true;
        [m.t].concat(m.ex || []).forEach((tit, k) => { // módulo com o mesmo título do plano (ex.: aulas novas) entra sozinho
          const e = exist.get(tit); if (!e || usados.has(tit)) return; usados.add(tit);
          if (k === 0) { u.accent = e.accent || u.accent; u.icon = e.icon || u.icon; if (e.revisado) u.revisado = e.revisado; }
          u.itens = u.itens.concat(e.itens); if (e.pendente) u.pendente = true; u.vazio = false;
        });
        // aulas já geradas para este módulo do plano (scripts/plano/itens.js)
        const gen = plano && (((ITENS[mat.id] || {})[ano] || {})[nomeTri] || {})[m.t];
        if (gen && gen.length) { const tem = new Set(u.itens.map(i => i.arquivo)); u.itens = u.itens.concat(gen.filter(i => !tem.has(i.arquivo))); u.vazio = false; u.pendente = true; u.revisado = u.revisado || '2026-10-24'; }
        return u;
      });
    }
    a.trimestres.forEach(t => {
      let sobras = t.unidades.filter(u => !usados.has(u.titulo) && !(novos[t.nome] || []).some(n => n.titulo === u.titulo));
      if (plano) sobras = sobras.filter(u => u.itens.length); // módulo genérico vazio sai; módulo com aulas reais fica como complemento
      t.unidades = (novos[t.nome] || []).concat(sobras.map(u => Object.assign(u, { complemento: true })));
    });
    // trimestres que o plano define e o site ainda não tinha
    Object.keys(novos).forEach(nome => { if (!a.trimestres.some(t => t.nome === nome)) a.trimestres.push({ nome, unidades: novos[nome] }); });
    a.trimestres.sort((x, y) => x.nome.localeCompare(y.nome));
  }
}

export function aplicarRCO(MATERIAS) {
  const mat = MATERIAS.find(m => m.id === 'matematica'); if (mat) aplicarEstrutura(mat, RCO, false);
  for (const [id, dados] of Object.entries(PLANO)) {
    const m = MATERIAS.find(x => x.id === id); if (!m) continue;
    aplicarEstrutura(m, dados, true);
    if (m.CATALOG.some(a => a.trimestres.some(t => t.unidades.some(u => u.itens.length)))) m.emBreve = false; // já tem aulas: sai do grupo "em breve" da barra lateral
  }
}
