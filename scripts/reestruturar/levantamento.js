// Levanta quantas aulas (decks de slides) existem e quais já estão no padrão novo.  node scripts/reestruturar/levantamento.js
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../../aulas');
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const todos = walk(raiz).filter(f => f.endsWith('.html'));
const ehAula = f => /^aula/.test(path.basename(f)) && !/atividade|infografico/.test(f);
const aulas = todos.filter(ehAula);
let padrao = 0, semSecao = 0; const por = {}, tally = {};
for (const f of aulas) {
  const h = fs.readFileSync(f, 'utf8');
  if (h.includes('data-rv')) { padrao++; continue; }
  const secs = h.match(/<section class="slide[^"]*">[\s\S]*?<\/section>/g) || [];
  if (!secs.length) { semSecao++; console.log('SEM SEÇÕES:', path.relative(raiz, f)); continue; }
  const top = path.relative(raiz, f).split(path.sep).slice(0, 2).join('/'); por[top] = (por[top] || 0) + 1;
  secs.forEach((s, i) => {
    let eb = (s.match(/class="eyebrow[^"]*"[^>]*>([^<]*)</) || [])[1];
    eb = i === 0 ? '[CAPA]' : (eb || '[sem]').replace(/\s*[·:–-].*$/, '').replace(/\d+/g, 'N').trim();
    const k = eb + (s.includes('class="mq') ? ' +mq' : '') + (s.includes('class="qz') ? ' +qz' : '');
    tally[k] = (tally[k] || 0) + 1;
  });
}
console.log('arquivos de aula:', aulas.length, '| já no padrão:', padrao, '| sem seções:', semSecao);
console.log(por);
Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([k, v]) => console.log(String(v).padStart(5), k));
