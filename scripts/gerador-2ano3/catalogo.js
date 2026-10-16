// Integra a Matemática · 2ª série · 3º trimestre (aulas 69–100 + R17) ao app/catalog.js (idempotente):  node scripts/gerador-2ano3/catalogo.js
// Os módulos novos entram no INÍCIO do 3° Trimestre do 2° Ano (marcadores mat-2ano-3tri); os módulos compactos anteriores (Exponenciais, Logaritmos, Funções) continuam logo depois.
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^w\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
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
const bloco = '              // >>> mat-2ano-3tri\n' + unidades.map(unit).join('') + '              // <<< mat-2ano-3tri\n';
const ini = '              // >>> mat-2ano-3tri\n', fim = '              // <<< mat-2ano-3tri\n';
const a = s.indexOf(ini);
if (a >= 0) { const b = s.indexOf(fim) + fim.length; s = s.slice(0, a) + bloco + s.slice(b); }
else {
  const i2 = s.indexOf('// <<< mat-2ano-2tri\n');
  if (i2 < 0) throw new Error('fim do 2º trimestre da 2ª série não encontrado');
  const tag = "nome: '3° Trimestre',\n            unidades: [\n", j = s.indexOf(tag, i2);
  if (j < 0) throw new Error('3° Trimestre da 2ª série não encontrado');
  const k = j + tag.length; s = s.slice(0, k) + bloco + s.slice(k);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('Matemática 2° Ano · 3° tri:', unidades.length, 'módulos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
