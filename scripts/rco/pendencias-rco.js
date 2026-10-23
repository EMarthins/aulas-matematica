// Gera docs/pendencias-rco.md: o que falta fazer na Matemática do 6º ao 9º ano (Fundamental), módulo a módulo, na ordem do RCO.
//   node scripts/rco/pendencias-rco.js [raiz]
const fs = require('fs'), path = require('path');
const raiz = path.resolve(process.argv[2] || '.');
(async () => {
  const cat = await import('file:///' + path.join(raiz, 'app/catalog.js').split(path.sep).join('/'));
  const mat = cat.MATERIAS.find(m => m.id === 'matematica');
  const L = ['# Pendências da Matemática 6º–9º ano (divisão do RCO) — PRIORIDADE', '',
    'Gerado por `scripts/rco/pendencias-rco.js` (roda no `preparar.js`). A divisão em módulos já está definida no catálogo (`scripts/rco/estrutura-spec.js`); o que falta é **colocar as aulas** de cada módulo, na ordem abaixo (por série e trimestre). "Previstas" = aulas do RCO/NRE 2026 do módulo; "no site" = aulas que já existem.', ''];
  let totP = 0, totS = 0, semAula = 0;
  const resumo = [];
  for (const a of mat.CATALOG.filter(x => /^[6-9]/.test(x.ano))) {
    L.push('## ' + a.ano, '');
    let pa = 0, sa = 0;
    for (const t of a.trimestres) {
      L.push('### ' + t.nome, '', '| Módulo | Previstas (RCO) | No site | Situação |', '|---|---:|---:|---|');
      t.unidades.forEach((u, i) => {
        const prev = (u.previstas || []).length, site = u.itens.filter(x => /^Aula/.test(x.tipo)).length;
        pa += prev; sa += site; totP += prev; totS += site;
        const sit = u.complemento ? 'complemento do site' : !site ? '**fazer**' + (u.provisorio ? ' (divisão provisória: RCO sem slides)' : '') : site < prev ? 'parcial' : 'ok';
        if (!site && !u.complemento) semAula++;
        L.push(`| ${String(i + 1).padStart(2, '0')} · ${u.titulo} | ${prev || '—'} | ${site} | ${sit} |`);
      });
      L.push('');
    }
    resumo.push(`- **${a.ano}**: ${pa} aulas previstas no RCO · ${sa} aulas no site`);
    L.splice(4, 0, ''); L.splice(4, 1);
  }
  L.splice(4, 0, ...resumo, '', `Total: **${totP}** aulas previstas, **${totS}** no site, **${semAula} módulos ainda sem nenhuma aula**.`, '', '> 8º ano 2º e 3º trimestre: o RCO ainda não publicou as aulas de Matemática (só Educação Financeira e o projeto "Investigação no Mundo Invertido"); a divisão desses trimestres é provisória (BNCC + temas dos planos).', '');
  fs.writeFileSync(path.join(raiz, 'docs/pendencias-rco.md'), L.join('\n') + '\n');
  console.log(`docs/pendencias-rco.md: ${totP} previstas · ${totS} no site · ${semAula} módulos sem aula`);
})();
