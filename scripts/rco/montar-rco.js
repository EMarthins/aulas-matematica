// Gera app/catalog-rco-dados.js: a divisão em módulos da Matemática do 6º ao 9º ano (ordem das aulas do RCO/NRE 2026),
// a partir de scripts/rco/estrutura-spec.js (divisão em módulos) + scripts/rco/rco-aulas.json (aulas do RCO: código e título).
//   node scripts/rco/montar-rco.js [raiz]
const fs = require('fs'), path = require('path');
const raiz = path.resolve(process.argv[2] || '.');
const spec = require('./estrutura-spec.js');
const aulas = JSON.parse(fs.readFileSync(path.join(__dirname, 'rco-aulas.json'), 'utf8'));
const chaveSerie = ano => 'EF' + /\d+/.exec(ano)[0];
const triNum = nome => /\d/.exec(nome)[0];
const casa = (cod, tok) => { // tok: '01-04' · 'N1-N8' · 'R9-R16' · '33'
  const [a, b] = tok.split('-'); const pre = /^[NR]/.test(a) ? a[0] : '', n = s => parseInt(s.replace(/^[NR]/, ''), 10);
  const cp = /^[NR]/.test(cod) ? cod[0] : '', cn = n(cod);
  return cp === pre && cn >= n(a) && cn <= n(b || a);
};
const dados = {}; const avisos = []; let atribuidas = 0, previstas = 0;
for (const [ano, tris] of Object.entries(spec)) {
  const serie = aulas[chaveSerie(ano)] || {}; dados[ano] = {};
  for (const [tri, mods] of Object.entries(tris)) {
    const lista = serie[triNum(tri)] || [], usadas = new Set();
    dados[ano][tri] = mods.map(m => {
      const p = [];
      (m.r || []).forEach(tok => lista.forEach((x, i) => { if (casa(x.c, tok)) { p.push([x.c, x.t]); usadas.add(i); } }));
      (m.l || []).forEach(t => p.push(['—', t]));
      atribuidas += (m.r || []).length ? p.length : 0; previstas += p.length;
      const o = { t: m.t, p }; if (m.ex && m.ex.length) o.ex = m.ex; if (m.prov) o.prov = 1; if (m.comp) o.comp = 1; return o;
    });
    lista.forEach((x, i) => { if (!usadas.has(i)) avisos.push(`${ano} ${tri}: aula do RCO sem módulo → ${x.c} ${x.t}`); });
    const cont = {}; lista.forEach((x, i) => { if (usadas.has(i)) cont[x.c] = (cont[x.c] || 0) + 1; });
  }
}
const cab = '// GERADO por scripts/rco/montar-rco.js (não edite à mão): divisão da Matemática do 6º ao 9º ano em módulos, na ordem das aulas do RCO/NRE 2026.\n// t = módulo · p = aulas previstas [código, título] · ex = módulos do site que moram aqui · prov = divisão provisória · comp = complemento do site\n';
fs.writeFileSync(path.join(raiz, 'app/catalog-rco-dados.js'), cab + 'export const RCO = ' + JSON.stringify(dados) + ';\n');
console.log('RCO: ' + Object.values(dados).reduce((c, t) => c + Object.values(t).reduce((k, m) => k + m.length, 0), 0) + ' módulos, ' + previstas + ' aulas previstas' + (avisos.length ? ' | SEM MÓDULO: ' + avisos.length + '\n' + avisos.slice(0, 40).join('\n') : ' | todas as aulas do RCO foram distribuídas'));
