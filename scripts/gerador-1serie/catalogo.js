// Integra a Matemática · 1ª série ao app/catalog.js (idempotente):  node scripts/gerador-1serie/catalogo.js
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^u\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const I = (tipo, titulo, arq, sub) => `                  { tipo:'${tipo}',${sub ? ` sub:'${sub}',` : ''} titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => `              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',
                itens: [
${[
    ...u.aulas.map(a => I(a[0], a[1], 'aulas/1-ano/' + u.tri + '-tri/' + u.dir + '/' + a[2])),
    I('Guia', 'Guia visual — ' + u.titulo, 'aulas/1-ano/' + u.tri + '-tri/' + u.dir + '/infografico.html'),
    I('Atividade', u.enem, 'aulas/1-ano/' + u.tri + '-tri/' + u.dir + '/atividade-enem.html', 'ENEM'),
    I('Atividade', u.cria, 'aulas/1-ano/' + u.tri + '-tri/' + u.dir + '/atividade-criativa.html', 'Criativa'),
    I('Atividade', u.pratica, 'aulas/1-ano/' + u.tri + '-tri/' + u.dir + '/atividade-pratica.html', 'Prática')
  ].join(',\n')}
                ]
              }`;
const tri = n => `          {
            nome: '${n}° Trimestre',
            unidades: [
${unidades.filter(u => u.tri === n).map(unit).join(',\n')}
            ]
          }`;
const tris = [1, 2, 3].filter(n => unidades.some(u => u.tri === n));
const bloco = `      // >>> mat-1ano
      {
        ano: '1° Ano',
        trimestres: [
${tris.map(tri).join(',\n')}
        ]
      },
      // <<< mat-1ano
`;
const re = /      \/\/ >>> mat-1ano\n[\s\S]*?      \/\/ <<< mat-1ano\n/;
if (re.test(s)) s = s.replace(re, () => bloco);
else {
  const i = s.indexOf("id: 'matematica'"), j = s.indexOf('    CATALOG: [\n', i);
  if (i < 0 || j < 0) throw new Error('CATALOG da matemática não encontrado');
  const k = j + '    CATALOG: [\n'.length; s = s.slice(0, k) + bloco + s.slice(k);
}
fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s);
console.log('catálogo da Matemática 1° Ano atualizado:', unidades.length, 'unidades,', unidades.reduce((t, u) => t + u.aulas.length, 0), 'decks.');
