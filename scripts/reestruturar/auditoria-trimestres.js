// Auditoria da divisão por trimestres: quantos módulos/aulas reais, "em breve" e possíveis duplicidades por matéria/ano/trimestre.
//   node scripts/reestruturar/auditoria-trimestres.js     → imprime e grava docs/auditoria-trimestres.md
const fs = require('fs'), path = require('path'), { pathToFileURL } = require('url');
const raiz = path.resolve(__dirname, '../..');
(async () => {
  const { MATERIAS } = await import(pathToFileURL(path.join(raiz, 'app/catalog.js')).href);
  const { completar } = await import(pathToFileURL(path.join(raiz, 'app/catalog-extra.js')).href);
  completar(MATERIAS);
  const norm = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const linhas = [], achados = [];
  let totAulas = 0;
  for (const m of MATERIAS) {
    if (m.oculta) { linhas.push(`\n## ${m.nome} _(oculta)_\n`); continue; }
    linhas.push(`\n## ${m.nome}\n`, '| Ano | Trimestre | Módulos com aulas | "Em breve" | Aulas | Observações |', '|---|---|---:|---:|---:|---|');
    for (const a of (m.CATALOG || [])) {
      const tris = a.trimestres || [];
      for (const t of tris) {
        const us = t.unidades || [], reais = us.filter(u => (u.itens || []).length), vazios = us.filter(u => !(u.itens || []).length);
        const aulas = reais.reduce((c, u) => c + u.itens.length, 0); totAulas += aulas;
        const obs = [];
        const legados = reais.filter(u => (u.itens || []).some(i => /\/aula\.html$/.test(i.arquivo || '') || (/\/aula-[a-z]/.test(i.arquivo || '') && !/\/aula-\d/.test(i.arquivo || ''))));
        if (legados.length) obs.push(`${legados.length} módulo(s) em arquivo único (aula.html com várias aulas dentro)`);
        const vistos = new Map();
        for (const u of reais) { const k = norm(u.titulo).split(' ').slice(0, 2).join(' '); (vistos.get(k) || vistos.set(k, []).get(k)).push(u.titulo); }
        for (const [, v] of vistos) if (v.length > 1) obs.push('títulos parecidos: ' + v.join(' / '));
        if (!reais.length && vazios.length) obs.push('trimestre só com “em breve”');
        if (reais.length && vazios.length) obs.push(`${vazios.length} “em breve”`);
        linhas.push(`| ${a.ano} | ${t.nome} | ${reais.length} | ${vazios.length} | ${aulas} | ${obs.join('; ')} |`);
        if (obs.length && (legados.length || obs.some(o => o.startsWith('títulos')))) achados.push(`${m.nome} · ${a.ano} · ${t.nome}: ${obs.join('; ')}`);
      }
      const nomes = tris.map(t => t.nome);
      for (const n of ['1° Trimestre', '2° Trimestre', '3° Trimestre']) if (!nomes.includes(n) && a.ano !== 'Parte') achados.push(`${m.nome} · ${a.ano}: não tem o ${n}`);
    }
  }
  const md = ['# Auditoria da divisão por trimestres', '', `Gerada por \`node scripts/reestruturar/auditoria-trimestres.js\`. Total de aulas publicadas nas matérias visíveis: **${totAulas}**.`, '', '## Pontos de atenção', '', ...(achados.length ? achados.map(a => '- ' + a) : ['- nenhum']), ...linhas, ''].join('\n');
  fs.writeFileSync(path.join(raiz, 'docs', 'auditoria-trimestres.md'), md);
  console.log(md.split('\n').slice(0, 60).join('\n'));
  console.log('…\n(gravado em docs/auditoria-trimestres.md;', md.split('\n').length, 'linhas)');
})();
