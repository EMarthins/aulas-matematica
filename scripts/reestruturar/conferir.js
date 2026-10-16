// Confere a estrutura de todas as aulas já reestruturadas (sem navegador): seções e <div> balanceadas, 1 slide ativo, ordem das etapas, contador.
//   node scripts/reestruturar/conferir.js
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../..');
const walk = d => fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]) : [];
const arq = ['aulas', 'educacao-financeira', 'ena-profmat'].flatMap(d => walk(path.join(raiz, d)))
  .filter(f => f.endsWith('.html') && /^aula/.test(path.basename(f)) && !/atividade|infografico/.test(f.replace(/\\/g, '/')));
const txt = h => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
let ok = 0, nao = 0, sem = 0; const problemas = [], avisos = [];
const ordemEsperada = ['Conhecimentos prévios', 'Objetivos', 'Prática independente', 'Correção comentada', 'Síntese', 'Exit ticket', 'Questão de saída'];
for (const f of arq) {
  const h = fs.readFileSync(f, 'utf8');
  if (!h.includes('id="padrao-js"') && !h.includes('data-rv')) { sem++; continue; }
  const rel = path.relative(raiz, f); const erros = [];
  const secs = h.match(/<section class="slide[^"]*">[\s\S]*?<\/section>/g) || [];
  if ((h.match(/<section\b/g) || []).length !== secs.length || (h.match(/<\/section>/g) || []).length !== secs.length) erros.push('seções desbalanceadas');
  secs.forEach((s, i) => { const a = (s.match(/<div\b/g) || []).length, b = (s.match(/<\/div>/g) || []).length; if (a !== b) erros.push(`div desbalanceada no slide ${i + 1} (${a}/${b})`); });
  if ((h.match(/<section class="slide active"/g) || []).length !== 1) erros.push('slide ativo ≠ 1');
  const m = h.match(/id="railCount">1 \/ (\d+)</); if (h.includes('id="padrao-js"') && m && +m[1] !== secs.length) erros.push(`contador ${m[1]} ≠ ${secs.length}`);
  const ebs = secs.map(s => txt((s.match(/<div class="eyebrow[^"]*">([\s\S]*?)<\/div>/) || [, ''])[1]));
  let pos = -1; const faltam = [];
  for (const e of ordemEsperada) { const i = ebs.findIndex((x, k) => k > pos && x.startsWith(e)); if (i < 0) { if (!/Conhecimentos|Objetivos|Prática independente|Correção/.test(e)) faltam.push(e); } else pos = i; }
  if (faltam.length) erros.push('ordem/itens: falta ' + faltam.join(', '));
  if (!/Prática (guiada|independente)|Atividade|Pratique/.test(ebs.join('|'))) avisos.push(rel + ' (prática só dentro do quiz)');
  if (/class="mq"/.test(ebs.length ? secs.filter((s, i) => /^Prática independente|^Correção/.test(ebs[i])).join('') : '')) erros.push('resposta visível na prática independente');
  if (!/<figure class="fig-ctx"/.test(secs[0])) erros.push('capa sem imagem de contexto');
  if (erros.length) { nao++; problemas.push(rel + ': ' + erros.join('; ')); } else ok++;
}
console.log(`aulas reestruturadas OK: ${ok} · com problema: ${nao} · ainda no formato antigo: ${sem}`);
problemas.slice(0, 40).forEach(p => console.log('  ✘', p));
if (avisos.length) console.log('  aviso: ' + avisos.length + ' aulas têm a prática dentro do quiz/atividades (sem slides de prática próprios).');
process.exit(nao ? 1 : 0);
