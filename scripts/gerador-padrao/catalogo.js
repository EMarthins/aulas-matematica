// Integra as aulas na ESTRUTURA PADRÃO ao app/catalog.js (idempotente):  node scripts/gerador-padrao/catalogo.js
// - Matemática · 6º ano: bloco  // >>> mat-6ano … // <<< mat-6ano  no início do CATALOG de Matemática (ano com preencher:true → módulos que faltam entram como "em breve").
// - Língua Portuguesa: bloco próprio  // >>> padrao-portugues … // <<< padrao-portugues  no fim de MATERIAS (os demais anos/módulos são completados por catalog-extra.js).
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^[ph]\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const unit = (u, ind) => `${ind}{
${ind}  titulo: '${q(u.titulo)}',
${ind}  accent: '${u.accent}',
${ind}  icon: '${u.icon}',
${ind}  pendente: true,
${ind}  itens: [
${u.aulas.map(a => `${ind}    { tipo:'${a[0]}', titulo:'${q(a[1])}', arquivo:'${u.pasta}${a[2]}' }`).join(',\n')}
${ind}  ]
${ind}}`;
const trimestres = us => [1, 2, 3].filter(n => us.some(u => u.tri === n)).map(n => `          {
            nome: '${n}° Trimestre',
            unidades: [
${us.filter(u => u.tri === n).map(u => unit(u, '              ')).join(',\n')}
            ]
          }`).join(',\n');
const troca = (ini, fim, bloco, ancora) => {
  const a = s.indexOf(ini);
  if (a >= 0) { const b = s.indexOf(fim) + fim.length; s = s.slice(0, a) + bloco + s.slice(b); return; }
  const k = ancora(); if (k < 0) throw new Error('ponto de inserção não encontrado para ' + ini.trim());
  s = s.slice(0, k) + bloco + s.slice(k);
};

// ---- Matemática · 6º ano
const mat6 = unidades.filter(u => u.materia === 'matematica' && u.ano === '6° Ano');
if (mat6.length) {
  const bloco = `      // >>> mat-6ano
      {
        ano: '6° Ano',
        preencher: true,
        trimestres: [
${trimestres(mat6)}
        ]
      },
      // <<< mat-6ano
`;
  troca('      // >>> mat-6ano\n', '      // <<< mat-6ano\n', bloco, () => { const i = s.indexOf("    id: 'matematica',"); const j = s.indexOf('    CATALOG: [\n', i); return j < 0 ? -1 : j + '    CATALOG: [\n'.length; });
}

// ---- Língua Portuguesa
const ex = fs.readFileSync(path.join(__dirname, '../../app/catalog-extra.js'), 'utf8').replace(/\r\n/g, '\n');
const FUND = [], MEDIO = [], TODOS = [];
const NOVAS = eval(ex.slice(ex.indexOf('const NOVAS = [') + 'const NOVAS = '.length, ex.indexOf('\n];', ex.indexOf('const NOVAS = [')) + 3));
const pt = unidades.filter(u => u.materia === 'portugues');
if (pt.length) {
  const n = NOVAS.find(x => x.id === 'portugues');
  const anos = [...new Set(pt.map(u => u.ano))];
  const bloco = `  // >>> padrao-portugues
  {
    id: 'portugues',
    nome: '${q(n.nome)}',
    icon: '${n.icon}',
    lede: '${q(n.lede)}',
    CATALOG: [
${anos.map(ano => `      {
        ano: '${ano}',
        trimestres: [
${trimestres(pt.filter(u => u.ano === ano))}
        ]
      }`).join(',\n')}
    ]
  },
  // <<< padrao-portugues
`;
  const ini = '  // >>> padrao-portugues\n', fim = '  // <<< padrao-portugues\n';
  // garante vírgula no último bloco existente antes de inserir
  s = s.split('  }\n  // <<< ena-profmat\n').join('  },\n  // <<< ena-profmat\n');
  troca(ini, fim, bloco, () => s.lastIndexOf(String.fromCharCode(10) + '];' + String.fromCharCode(10), s.indexOf('export const ICONS')) + 1);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('estrutura padrão no catálogo:', unidades.length, 'módulos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
