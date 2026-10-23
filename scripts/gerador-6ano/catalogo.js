// Integra os módulos mNN do 6º ano (Matemática) ao app/catalog.js (idempotente):  node scripts/gerador-6ano/catalogo.js
// Os módulos entram no INÍCIO do 1° Trimestre do 6° Ano (marcadores mat-6ano-novas); app/catalog-rco.js os encaixa na ordem do RCO pelo título.
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^m\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const I = (tipo, titulo, arq) => `                  { tipo:'${tipo}', titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => `              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',
                pendente: true,
                itens: [
${u.aulas.map(a => I(a[0], a[1], u.pasta + a[2])).join(',\n')}
                ]
              },
`;
const ini = '              // >>> mat-6ano-novas\n', fim = '              // <<< mat-6ano-novas\n';
const bloco = ini + unidades.map(unit).join('') + fim;
const a = s.indexOf(ini);
if (a >= 0) { const b = s.indexOf(fim) + fim.length; s = s.slice(0, a) + bloco + s.slice(b); }
else {
  const m6 = s.indexOf('// >>> mat-6ano\n'); if (m6 < 0) throw new Error('bloco mat-6ano não encontrado');
  const tag = "nome: '1° Trimestre',\n            unidades: [\n", j = s.indexOf(tag, m6); if (j < 0) throw new Error('1° Trimestre do 6° ano não encontrado');
  const k = j + tag.length; s = s.slice(0, k) + bloco + s.slice(k);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('Matemática 6° Ano:', unidades.length, 'módulos novos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
