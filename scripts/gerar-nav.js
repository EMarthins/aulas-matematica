// Gera app/nav-data.js: versão enxuta do catálogo usada pela barra lateral (matérias, anos e arquivos, para o progresso).
//   node scripts/gerar-nav.js [raiz]
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
(async () => {
  const cat = await import('file:///' + path.join(root, 'app/catalog.js').split(path.sep).join('/'));
  const ordem = a => { const n = /(\d+)/.exec(a.ano); return n ? (/Parte/.test(a.ano) || +n[1] >= 6 ? +n[1] : +n[1] + 10) : 99; };
  const materias = cat.MATERIAS.map(m => ({
    id: m.id, nome: m.nome, icon: cat.ICONS[m.icon] || cat.ICONS.grid, emBreve: !!m.emBreve,
    anos: m.CATALOG.slice().sort((a, b) => ordem(a) - ordem(b)).map(a => ({
      ano: a.ano, arquivos: [].concat(...a.trimestres.map(t => [].concat(...t.unidades.map(u => u.itens.map(i => i.arquivo)))))
    }))
  }));
  const js = '// GERADO por scripts/gerar-nav.js — não edite à mão.\nexport const NAV = ' + JSON.stringify(materias) + ';\n';
  fs.writeFileSync(path.join(root, 'app/nav-data.js'), js);
  console.log('app/nav-data.js:', materias.length, 'matérias,', js.length, 'bytes');
})();
