// Liga as aulas já geradas (por matéria) aos módulos do plano (scripts/plano/dados) e escreve app/catalog-plano-itens.js,
// lido por app/catalog-rco.js: o módulo "em breve" com o MESMO título ganha as aulas e continua mostrando as previstas.
//   node scripts/plano/itens.js [raiz]
// Para registrar uma matéria nova: acrescente { materia, dir } em GERADORES (o dir tem um todos.js que devolve os módulos gerados).
const fs = require('fs'), path = require('path');
const raiz = path.resolve(process.argv[2] || '.');
const GERADORES = [{ materia: 'fisica', dir: '../gerador-fisica' }];
const txt = fs.readFileSync(path.join(raiz, 'app/catalog-plano-dados.js'), 'utf8');
const PLANO = JSON.parse(txt.slice(txt.indexOf('{', txt.indexOf('export const PLANO')), txt.lastIndexOf('}') + 1));
const itens = {}, erros = []; let nm = 0, na = 0;
for (const g of GERADORES) {
  const todos = fs.existsSync(path.join(__dirname, g.dir, 'todos.js')) ? require(path.join(__dirname, g.dir, 'todos.js'))() : [];
  const vistos = new Set();
  for (const { meta } of todos) {
    const nomeTri = meta.tri + '° Trimestre', plano = (((PLANO[meta.materia] || {})[meta.ano] || {})[nomeTri] || []).find(m => m.t === meta.titulo);
    const rot = meta.materia + ' ' + meta.ano + ' ' + nomeTri + ' · ' + meta.titulo;
    if (!plano) { erros.push('módulo fora do plano: ' + rot); continue; }
    if (vistos.has(rot)) { erros.push('módulo duplicado: ' + rot); continue; } vistos.add(rot);
    const previstas = plano.p.map(p => p[1]), geradas = meta.aulas.filter(a => a[0] !== 'Guia' && !/^(ENEM|Criativa|Prática)/.test(a[0])).map(a => a[1]);
    geradas.forEach((t, i) => { if (t !== previstas[i]) erros.push(rot + ': aula ' + (i + 1) + ' difere do plano — "' + t + '" × "' + (previstas[i] || '(não prevista)') + '"'); });
    if (geradas.length !== previstas.length) erros.push(rot + ': ' + geradas.length + ' aulas geradas × ' + previstas.length + ' previstas');
    ((((itens[meta.materia] = itens[meta.materia] || {})[meta.ano] = itens[meta.materia][meta.ano] || {})[nomeTri] = itens[meta.materia][meta.ano][nomeTri] || {})[meta.titulo]) =
      meta.aulas.map(a => ({ tipo: a[0], titulo: a[1], arquivo: meta.pasta + a[2] }));
    nm++; na += meta.aulas.length;
  }
}
if (erros.length) { console.log('ERROS na ligação das aulas ao plano:\n' + erros.join('\n')); process.exit(1); }
const cab = '// GERADO por scripts/plano/itens.js (não edite à mão): aulas já geradas das matérias do plano, por módulo.\n// ITENS[matéria][ano][trimestre][título do módulo] = [{ tipo, titulo, arquivo }]\n';
fs.writeFileSync(path.join(raiz, 'app/catalog-plano-itens.js'), cab + 'export const ITENS = ' + JSON.stringify(itens) + ';\n');
console.log('Aulas do plano geradas: ' + nm + ' módulos, ' + na + ' itens');
