// Integra a Matemática · 9º ano · Recomposição (1º, 2º e 3º trimestres) ao app/catalog.js (idempotente):  node scripts/gerador-9ano/catalogo.js
// Substitui o bloco do 9° Ano (marcado com // >>> mat-9ano … // <<< mat-9ano). Unidades `pendente: true` trazem só as aulas; o catálogo mostra "em breve" para guia e atividades.
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^u\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const I = (tipo, titulo, arq) => `                  { tipo:'${tipo}', titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => { const d = 'aulas/9-ano/' + u.tri + '-tri/' + u.dir + '/'; return `              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',${u.pendente ? '\n                pendente: true,' : ''}
                itens: [
${u.aulas.map(a => I(a[0], a[1], d + a[2])).join(',\n')}
                ]
              }`; };
const tris = [1, 2, 3].filter(n => unidades.some(u => u.tri === n));
const bloco = `      // >>> mat-9ano
      {
        ano: '9° Ano',
        trimestres: [
${tris.map(n => `          {
            nome: '${n}° Trimestre',
            unidades: [
${unidades.filter(u => u.tri === n).map(unit).join(',\n')}
            ]
          }`).join(',\n')}
        ]
      }
      // <<< mat-9ano
`;
const a = s.indexOf('      // >>> mat-9ano\n');
if (a >= 0) {
  const b = s.indexOf('      // <<< mat-9ano\n') + '      // <<< mat-9ano\n'.length;
  s = s.slice(0, a) + bloco + s.slice(b);
} else {
  const i0 = s.indexOf("      {\n        ano: '9° Ano',");
  const fim = s.indexOf("    ]\n  },\n  {\n    id: 'educacao-financeira'", i0);
  if (i0 < 0 || fim < 0) throw new Error('bloco do 9° Ano não encontrado');
  s = s.slice(0, i0) + bloco + s.slice(fim);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('catálogo do 9° Ano atualizado:', unidades.length, 'módulos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
