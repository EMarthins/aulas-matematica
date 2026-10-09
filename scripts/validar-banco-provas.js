// Valida app/banco-provas.json (banco autoral do fazedor de prova) e confere se as figuras compilam.
//   node scripts/validar-banco-provas.js            → valida app/banco-provas.json
//   node scripts/validar-banco-provas.js outro.json → valida outro pacote de questões
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const a2 = process.argv[2];
const arq = path.resolve(a2 && /\.json$/i.test(a2) ? a2 : path.join(root, 'app/banco-provas.json'));
const url = f => 'file:///' + path.join(root, f).split(path.sep).join('/');

(async () => {
  const Q = await import(url('app/questoes.js'));
  const Fig = await import(url('app/figuras.js'));
  const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
  const lista = Array.isArray(j) ? j : j.questoes;
  if (!Array.isArray(lista)) { console.error('✗ não encontrei a lista "questoes" em', arq); process.exit(1); }
  const ids = new Set(); let ruins = 0; const porTipo = {};
  lista.forEach((b, n) => {
    const q = Q.normalizar(b), rot = `#${n + 1} ${q.id}`;
    const erros = Q.validar(q);
    if (ids.has(q.id)) erros.push('id repetido'); ids.add(q.id);
    const figs = [].concat(q.figura || [], q.figuras || []).filter(Boolean);
    figs.forEach(f => { if (/fig-erro/.test(Fig.figuraHtml(f))) erros.push('figura inválida (' + f.tipo + ')'); });
    if (!q.resolucao && q.tipo !== 'aberta' && !/INEP/.test(q.fonte || '')) erros.push('aviso: sem resolução');
    const graves = erros.filter(e => !/^aviso/.test(e));
    if (graves.length) { ruins++; console.log('✗', rot, '—', erros.join('; ')); } else if (erros.length) console.log('•', rot, '—', erros.join('; '));
    porTipo[q.tipo] = (porTipo[q.tipo] || 0) + 1;
  });
  console.log(`${lista.length - ruins}/${lista.length} questões válidas`, JSON.stringify(porTipo));
  process.exit(ruins ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
