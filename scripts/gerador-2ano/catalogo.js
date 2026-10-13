// Integra a Matemática · 2ª série (1° trimestre) ao app/catalog.js (idempotente):  node scripts/gerador-2ano/catalogo.js
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^v\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const I = (tipo, titulo, arq, sub) => `                  { tipo:'${tipo}',${sub ? ` sub:'${sub}',` : ''} titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => { const d = 'aulas/2-ano/' + u.tri + '-tri/' + u.dir + '/'; return `              {
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
const bloco = `          // >>> mat-2ano-1tri
          {
            nome: '1° Trimestre',
            unidades: [
${unidades.filter(u => u.tri === 1).map(unit).join(',\n')}
            ]
          },
          // <<< mat-2ano-1tri
`;
const re = /          \/\/ >>> mat-2ano-1tri\n[\s\S]*?          \/\/ <<< mat-2ano-1tri\n/;
if (re.test(s)) s = s.replace(re, () => bloco);
else {
  const i = s.indexOf("ano: '2° Ano'"), j = s.indexOf('        trimestres: [\n', i);
  if (i < 0 || j < 0) throw new Error('bloco do 2° Ano da matemática não encontrado');
  const k = j + '        trimestres: [\n'.length; s = s.slice(0, k) + bloco + s.slice(k);
}
fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s);
console.log('catálogo da Matemática 2° Ano (1° tri) atualizado:', unidades.length, 'unidades,', unidades.reduce((t, u) => t + u.aulas.length, 0), 'decks.');
