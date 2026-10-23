// Gera docs/sequencia-matematica.md: a sequência de módulos e aulas de cada turma (6º ano ao 3º ano do Médio) e a avaliação da progressão.
//   node scripts/rco/sequencia-doc.js [raiz]
const fs = require('fs'), path = require('path');
const raiz = path.resolve(process.argv[2] || '.');
const faixa = p => { if (!p || !p.length) return '—'; const c = p.map(x => x[0]).filter(x => x !== '—'); if (!c.length) return 'a definir'; return c.length === 1 ? 'aula ' + c[0] : c[0] + ' → ' + c[c.length - 1]; };
(async () => {
  const cat = await import('file:///' + path.join(raiz, 'app/catalog.js').split(path.sep).join('/'));
  const mat = cat.MATERIAS.find(m => m.id === 'matematica');
  const L = ['# Matemática · sequência de módulos e aulas por turma (6º ano ao 3º ano do Médio)', '',
    'Gerado por `scripts/rco/sequencia-doc.js` (roda no `preparar.js`). A ordem dos módulos segue a ordem das aulas do **RCO/NRE 2026**; a divisão em módulos está em `scripts/rco/estrutura-spec.js`. "Aulas RCO" = numeração do plano do NRE (N = nivelamento, R = retomada da Prova Paraná).', ''];
  for (const a of mat.CATALOG.slice().sort((x, y) => { const n = s => { const v = +/\d+/.exec(s)[0]; return v >= 6 ? v : v + 10; }; return n(x.ano) - n(y.ano); })) {
    const ef = /^[6-9]/.test(a.ano); L.push('## ' + a.ano + (ef ? '' : ' (Ensino Médio — 1ª, 2ª e 3ª série)'), '');
    for (const t of a.trimestres) {
      L.push('### ' + t.nome, '', ef ? '| # | Módulo | Aulas RCO | Previstas | No site |' : '| # | Módulo | Aulas no site |', ef ? '|---:|---|---|---:|---:|' : '|---:|---|---:|');
      t.unidades.forEach((u, i) => {
        const site = u.itens.filter(x => /^Aula/.test(x.tipo)).length;
        L.push(ef ? `| ${i + 1} | ${u.titulo}${u.provisorio ? ' *(provisório)*' : ''}${u.complemento ? ' *(complemento)*' : ''} | ${faixa(u.previstas)} | ${(u.previstas || []).length || '—'} | ${site} |` : `| ${i + 1} | ${u.titulo} | ${site} |`);
      });
      L.push('');
    }
  }
  L.push(fs.readFileSync(path.join(__dirname, 'avaliacao.md'), 'utf8'));
  fs.writeFileSync(path.join(raiz, 'docs/sequencia-matematica.md'), L.join('\n') + '\n');
  console.log('docs/sequencia-matematica.md gerado');
})();
