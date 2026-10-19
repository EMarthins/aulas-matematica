// Integra as aulas na ESTRUTURA PADRÃO ao app/catalog.js (idempotente):  node scripts/gerador-padrao/catalogo.js
// - Matemática · 6º ao 9º ano: blocos  // >>> mat-6ano … mat-9ano  no início do CATALOG de Matemática (ano com preencher:true → módulos que faltam entram como "em breve").
// - Matemática · Ensino Médio: módulos com `destino: 'mat-2ano-1tri'` (etc.) entram logo depois do bloco já existente daquele trimestre, entre  // >>> cd-<destino> … // <<< cd-<destino>.
// - Língua Portuguesa: bloco próprio  // >>> padrao-portugues … // <<< padrao-portugues  no fim de MATERIAS (os demais anos/módulos são completados por catalog-extra.js).
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
const unidades = fs.readdirSync(__dirname).filter(n => /^[ph]\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const NL = '\n', BS = String.fromCharCode(92);
const q = t => String(t).split(BS).join(BS + BS).split("'").join(BS + "'");
const unit = (u, ind) => `${ind}{
${ind}  titulo: '${q(u.titulo)}',
${ind}  accent: '${u.accent}',
${ind}  icon: '${u.icon}',
${ind}  pendente: true,
${ind}  itens: [
${u.aulas.map(a => `${ind}    { tipo:'${a[0]}', titulo:'${q(a[1])}', arquivo:'${u.pasta}${a[2]}' }`).join(',' + NL)}
${ind}  ]
${ind}}`;
const trimestres = us => [1, 2, 3].filter(n => us.some(u => u.tri === n)).map(n => `          {
            nome: '${n}° Trimestre',
            unidades: [
${us.filter(u => u.tri === n).map(u => unit(u, '              ')).join(',' + NL)}
            ]
          }`).join(',' + NL);
const troca = (ini, fim, bloco, ancora) => {
  const a = s.indexOf(ini);
  if (a >= 0) { const b = s.indexOf(fim) + fim.length; s = s.slice(0, a) + bloco + s.slice(b); return; }
  const k = ancora(); if (k < 0) throw new Error('ponto de inserção não encontrado para ' + ini.trim());
  s = s.slice(0, k) + bloco + s.slice(k);
};

// ---- Matemática · 6º ao 9º ano
for (const ano of ['6° Ano', '7° Ano', '8° Ano', '9° Ano']) {
  const us = unidades.filter(u => u.materia === 'matematica' && u.ano === ano && !u.destino);
  if (!us.length) continue;
  const tag = 'mat-' + ano[0] + 'ano';
  const ini = '      // >>> ' + tag + NL, fim = '      // <<< ' + tag + NL;
  const bloco = ini + `      {
        ano: '${ano}',
        preencher: true,
        trimestres: [
${trimestres(us)}
        ]
      },
` + fim;
  troca(ini, fim, bloco, () => { const i = s.indexOf("    id: 'matematica',"); const j = s.indexOf('    CATALOG: [' + NL, i); return j < 0 ? -1 : j + ('    CATALOG: [' + NL).length; });
}

// ---- Matemática · Ensino Médio (módulos novos dentro de trimestres que já existem)
{
  const grupos = {};
  unidades.filter(u => u.materia === 'matematica' && u.destino).forEach(u => (grupos[u.destino] = grupos[u.destino] || []).push(u));
  for (const [dest, us] of Object.entries(grupos)) {
    const fimDest = '// <<< ' + dest + NL, k = s.indexOf(fimDest); if (k < 0) throw new Error('marcador não encontrado: ' + dest);
    const ls = s.lastIndexOf(NL, k) + 1, ind = s.slice(ls, k);
    const ini = ind + '// >>> cd-' + dest + NL, fimB = ind + '// <<< cd-' + dest + NL;
    const bloco = ini + us.map(u => unit(u, ind) + ',' + NL).join('') + fimB;
    const a1 = s.indexOf(ini);
    if (a1 >= 0) { const b1 = s.indexOf(fimB) + fimB.length; s = s.slice(0, a1) + bloco + s.slice(b1); }
    else { const pos = k + fimDest.length; s = s.slice(0, pos) + bloco + s.slice(pos); }
  }
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
      }`).join(',' + NL)}
    ]
  },
  // <<< padrao-portugues
`;
  const ini = '  // >>> padrao-portugues' + NL, fim = '  // <<< padrao-portugues' + NL;
  // garante vírgula no último bloco existente antes de inserir
  s = s.split('  }' + NL + '  // <<< ena-profmat' + NL).join('  },' + NL + '  // <<< ena-profmat' + NL);
  troca(ini, fim, bloco, () => s.lastIndexOf(NL + '];' + NL, s.indexOf('export const ICONS')) + 1);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('estrutura padrão no catálogo:', unidades.length, 'módulos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas');
