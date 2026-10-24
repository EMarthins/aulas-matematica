// Integra os módulos mNN (Matemática 6º–9º ano) ao app/catalog.js (idempotente):  node scripts/gerador-6ano/catalogo.js
// Cada ano recebe um bloco "mat-Nano-novas" no início do 1° Trimestre; app/catalog-rco.js encaixa cada módulo no trimestre certo pelo título.
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const metas = []; fs.readdirSync(__dirname).filter(n => /^m\d\d[\w-]*\.js$/.test(n)).sort().forEach(n => [].concat(require('./' + n)).forEach(mod => metas.push(mod.meta)));
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
let total = 0;
for (const ano of ['6', '7', '8', '9']) {
  const us = metas.filter(m => m.ano === ano + '° Ano'); if (!us.length) continue;
  const ini = `              // >>> mat-${ano}ano-novas\n`, fim = `              // <<< mat-${ano}ano-novas\n`, bloco = ini + us.map(unit).join('') + fim;
  const a = s.indexOf(ini);
  if (a >= 0) { const b = s.indexOf(fim) + fim.length; s = s.slice(0, a) + bloco + s.slice(b); }
  else {
    const m0 = s.indexOf(`// >>> mat-${ano}ano\n`); if (m0 < 0) throw new Error(`bloco mat-${ano}ano não encontrado`);
    const tag = "nome: '1° Trimestre',\n            unidades: [\n", j = s.indexOf(tag, m0); if (j < 0) throw new Error(`1° Trimestre do ${ano}° ano não encontrado`);
    const k = j + tag.length; s = s.slice(0, k) + bloco + s.slice(k);
  }
  total += us.length;
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('Matemática 6º–9º ano:', total, 'módulos novos,', metas.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
