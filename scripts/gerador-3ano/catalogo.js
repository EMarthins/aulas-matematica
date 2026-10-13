// Integra a Matemática · 3ª série (1° e 2° trimestres) ao app/catalog.js (idempotente):  node scripts/gerador-3ano/catalogo.js
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^v\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const I = (tipo, titulo, arq, sub) => `                  { tipo:'${tipo}',${sub ? ` sub:'${sub}',` : ''} titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => { const d = 'aulas/3-ano/' + u.tri + '-tri/' + u.dir + '/'; return `              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',
                itens: [
${[
    ...u.aulas.map(a => I(a[0], a[1], d + a[2])),
    I('Guia', 'Guia visual — ' + u.titulo, d + 'infografico.html'),
    I('Atividade', u.enem, d + 'atividade-enem.html', 'ENEM'),
    I('Atividade', u.cria, d + 'atividade-criativa.html', 'Criativa'),
    I('Atividade', u.pratica, d + 'atividade-pratica.html', 'Prática')
  ].join(',\n')}
                ]
              }`; };
const nomes = { 1: '1° Trimestre', 2: '2° Trimestre' };
const bloco = tri => `          // >>> mat-3ano-${tri}tri
          {
            nome: '${nomes[tri]}',
            unidades: [
${unidades.filter(u => u.tri === tri).map(unit).join(',\n')}
            ]
          },
          // <<< mat-3ano-${tri}tri
`;
const marca = tri => new RegExp('          // >>> mat-3ano-' + tri + 'tri\\n[\\s\\S]*?          // <<< mat-3ano-' + tri + 'tri\\n');
const inicio = '        trimestres: [\n';
for (const tri of [1, 2]) {
  if (!unidades.some(u => u.tri === tri)) continue;
  if (marca(tri).test(s)) { s = s.replace(marca(tri), () => bloco(tri)); continue; }
  let k;
  if (tri > 1 && marca(tri - 1).test(s)) { const m = s.match(marca(tri - 1)); k = m.index + m[0].length; }
  else {
    const a = s.indexOf("ano: '3° Ano'"), j = s.indexOf(inicio, a);
    if (a < 0 || j < 0) throw new Error('bloco do 3° Ano da matemática não encontrado');
    k = j + inicio.length;
  }
  s = s.slice(0, k) + bloco(tri) + s.slice(k);
}
fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s);
console.log('catálogo da Matemática 3° Ano atualizado:', unidades.length, 'unidades,', unidades.reduce((t, u) => t + u.aulas.length, 0), 'decks.');
