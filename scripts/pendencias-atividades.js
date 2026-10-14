// Gera docs/pendencias-atividades.md: lista os módulos do catálogo marcados com `pendente: true`
// (só aulas publicadas; guia visual e atividades ENEM/criativa/prática ainda por fazer).   node scripts/pendencias-atividades.js
const fs = require('fs'), path = require('path'), { pathToFileURL } = require('url');
const raiz = path.resolve(__dirname, '..');
(async () => {
  const { MATERIAS } = await import(pathToFileURL(path.join(raiz, 'app/catalog.js')).href);
  const linhas = []; let total = 0, aulas = 0;
  for (const m of MATERIAS) for (const a of (m.CATALOG || [])) for (const t of a.trimestres) {
    const us = t.unidades.filter(u => u.pendente);
    if (!us.length) continue;
    linhas.push('', '### ' + m.nome + ' · ' + a.ano + ' · ' + t.nome + ' (' + us.length + ' módulos)', '');
    for (const u of us) { total++; aulas += u.itens.length; linhas.push('- [ ] **' + u.titulo + '** — ' + u.itens.length + (u.itens.length === 1 ? ' aula' : ' aulas') + ' (`' + path.posix.dirname(u.itens[0].arquivo) + '/`)'); }
  }
  const md = ['# Pendências: guia visual e atividades', '',
    'Estes módulos foram publicados **só com as aulas**. No catálogo aparece o aviso "Guia visual e atividades · em breve".',
    'Para cada um falta: **guia visual** (infográfico) e **3 atividades** (ENEM de 5 questões, criativa e trilha prática), no mesmo padrão dos módulos completos.',
    'Ao concluir um módulo, remova `pendente: true` (no `meta` do gerador) e inclua guia e atividades nas `pages`; depois rode o `catalogo.js` do gerador e `node scripts/preparar.js`.',
    '', '**Total: ' + total + ' módulos (' + aulas + ' aulas) aguardando atividades.**', ...linhas, ''].join('\n');
  fs.writeFileSync(path.join(raiz, 'docs', 'pendencias-atividades.md'), md);
  console.log('docs/pendencias-atividades.md:', total, 'módulos pendentes,', aulas, 'aulas');
})();
