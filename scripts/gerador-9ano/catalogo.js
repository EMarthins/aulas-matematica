// Integra a matéria "Recomposição Matemática" (9º ano, 1º ao 3º trimestre) ao app/catalog.js (idempotente):  node scripts/gerador-9ano/catalogo.js
// A matéria é um bloco próprio (// >>> recomp-mat … // <<< recomp-mat), logo depois de Matemática. Módulos `pendente: true` trazem só as aulas.
// Também acompanha o módulo compacto original (6 aulas + guia + atividades), mantido em legado-itens.txt.
// Na primeira execução remove o bloco antigo // >>> mat-9ano (Recomposição dentro de Matemática · 9º ano).
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
// módulo compacto original (guia + atividades), no 2º trimestre
const legado = fs.readFileSync(path.join(__dirname, 'legado-itens.txt'), 'utf8').replace(/\r\n/g, '\n').split('\n').filter(x => x.trim()).map(x => x.replace(/,\s*$/, '')).join(',\n');
const unitLegado = `              {
                titulo: 'Recomposição Matemática · versão compacta',
                accent: 'primary',
                icon: 'polygon',
                itens: [
${legado}
                ]
              }`;
const tris = [1, 2, 3];
const bloco = `  // >>> recomp-mat
  {
    id: 'recomposicao-matematica',
    nome: 'Recomposição Matemática',
    icon: 'stairs',
    lede: 'Aulas de Recomposição de Aprendizagem em Matemática para o 9º ano — 1º, 2º e 3º trimestres, uma aula por aula do plano, com slides navegáveis, exemplos resolvidos, atividades e quiz.',
    CATALOG: [
      {
        ano: '9° Ano',
        trimestres: [
${tris.map(n => `          {
            nome: '${n}° Trimestre',
            unidades: [
${unidades.filter(u => u.tri === n).map(unit).concat(n === 2 ? [unitLegado] : []).join(',\n')}
            ]
          }`).join(',\n')}
        ]
      }
    ]
  },
  // <<< recomp-mat
`;
// 1) remove o bloco antigo dentro de Matemática
const a0 = s.indexOf('      // >>> mat-9ano\n');
if (a0 >= 0) { const b0 = s.indexOf('      // <<< mat-9ano\n') + '      // <<< mat-9ano\n'.length; s = s.slice(0, a0) + s.slice(b0); }
// 2) insere/atualiza o bloco da nova matéria
const a = s.indexOf('  // >>> recomp-mat\n');
if (a >= 0) {
  const b = s.indexOf('  // <<< recomp-mat\n') + '  // <<< recomp-mat\n'.length;
  s = s.slice(0, a) + bloco + s.slice(b);
} else {
  const alvo = s.indexOf("  {\n    id: 'educacao-financeira'");
  if (alvo < 0) throw new Error('ponto de inserção não encontrado');
  s = s.slice(0, alvo) + bloco + s.slice(alvo);
}
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('Recomposição Matemática atualizada:', unidades.length, 'módulos novos,', unidades.reduce((c, u) => c + u.aulas.length, 0), 'aulas (+ módulo compacto original)');
