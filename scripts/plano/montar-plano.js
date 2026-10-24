// Estrutura (módulos e aulas previstas) das matérias que ainda não têm aulas: Português, Inglês, Arte, Educação Física, Ciências, História,
// Geografia, Física, Química, Biologia, Filosofia e Sociologia — do 6º ano à 3ª série.
// Lê scripts/plano/dados/<matéria>.js e gera:
//   - app/catalog-plano-dados.js  (lido por app/catalog-rco.js → aplicarPlano: módulos "em breve" com a lista das aulas previstas)
//   - docs/plano-materias.md      (a listagem completa, com a pasta onde cada módulo vai morar)
//   node scripts/plano/montar-plano.js [raiz]
// Cada arquivo de dados: { '6° Ano': [ trimestre1[], trimestre2[], trimestre3[] ], … } e cada módulo = [título, 'aula | aula | …', [módulos do site que moram aqui]?]
// Quando as aulas de um módulo forem criadas (gerador da matéria), o módulo deve ter EXATAMENTE o mesmo título daqui (ou ser listado no 3º item).
const fs = require('fs'), path = require('path');
const raiz = path.resolve(process.argv[2] || '.');
const MATERIAS = [
  ['portugues', 'Língua Portuguesa'], ['ingles', 'Língua Inglesa'], ['arte', 'Arte'], ['educacao-fisica', 'Educação Física'], ['ciencias', 'Ciências'],
  ['historia', 'História'], ['geografia', 'Geografia'], ['fisica', 'Física'], ['quimica', 'Química'], ['biologia', 'Biologia'], ['filosofia', 'Filosofia'], ['sociologia', 'Sociologia']
];
const ANOS_EF = ['6° Ano', '7° Ano', '8° Ano', '9° Ano'], ANOS_EM = ['1° Ano', '2° Ano', '3° Ano'];
const SO_EM = ['fisica', 'quimica', 'biologia', 'filosofia', 'sociologia'], SO_EF = ['ciencias'];
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);
const serie = ano => /^\d/.test(ano) && +ano[0] >= 6 ? ano[0] + 'º ano' : ano[0] + 'ª série';

const dados = {}, erros = []; let nMod = 0, nAula = 0;
const md = ['# Plano de módulos e aulas — demais matérias (6º ano à 3ª série)', '',
  'Rascunho montado a partir do currículo (BNCC / Referencial Curricular do Paraná), **sem aulas ainda**: serve para organizar o site. No catálogo cada módulo aparece como "em breve" com a lista das aulas previstas.',
  'Para revisar: edite `scripts/plano/dados/<matéria>.js` e rode `node scripts/plano/montar-plano.js` (o `preparar.js` também roda). Ao criar as aulas de um módulo, use **o mesmo título** daqui e a pasta indicada.', ''];
const resumo = [];
for (const [id, nome] of MATERIAS) {
  const f = path.join(__dirname, 'dados', id + '.js');
  if (!fs.existsSync(f)) { erros.push('falta ' + id + '.js'); continue; }
  const d = require(f); dados[id] = {};
  const anos = SO_EM.includes(id) ? ANOS_EM : SO_EF.includes(id) ? ANOS_EF : ANOS_EF.concat(ANOS_EM);
  let mM = 0, mA = 0;
  md.push('## ' + nome, '');
  for (const ano of anos) {
    const tris = d[ano];
    if (!tris || tris.length !== 3) { erros.push(id + ' ' + ano + ': precisa de 3 trimestres'); continue; }
    dados[id][ano] = {}; md.push('### ' + nome + ' · ' + serie(ano), '');
    const titulos = new Set();
    tris.forEach((mods, t) => {
      const nomeTri = (t + 1) + '° Trimestre';
      if (!mods.length) erros.push(id + ' ' + ano + ' ' + nomeTri + ': sem módulos');
      let aulasTri = 0;
      mods.forEach(m => { // título repetido no mesmo ano → "… II", "… III" (o catálogo identifica o módulo pelo título)
        const base = m[0]; let n = 1; while (titulos.has(m[0])) m[0] = base + ' ' + ['', 'II', 'III', 'IV', 'V'][++n - 1]; titulos.add(m[0]);
      });
      dados[id][ano][nomeTri] = mods.map(([titulo, aulas, ex]) => {
        const lista = aulas.split('|').map(s => s.trim()).filter(Boolean);
        if (!lista.length) erros.push(id + ' ' + ano + ' ' + titulo + ': sem aulas');
        if (new Set(lista).size !== lista.length) erros.push(id + ' ' + ano + ' ' + titulo + ': aula repetida no módulo');
        lista.forEach(a => { if (/[<>]|R\$|\\/.test(a)) erros.push(id + ' ' + ano + ' ' + titulo + ': caractere proibido em "' + a + '"'); });
        aulasTri += lista.length; mM++; mA += lista.length;
        const o = { t: titulo, p: lista.map((a, k) => [String(k + 1), a]) }; if (ex && ex.length) o.ex = ex; return o;
      });
      md.push('**' + nomeTri + '** · ' + mods.length + ' módulos · ' + aulasTri + ' aulas', '');
      mods.forEach(([titulo, aulas], k) => {
        const lista = aulas.split('|').map(s => s.trim()).filter(Boolean);
        md.push((k + 1) + '. **' + titulo + '** — `aulas/' + id + '/' + ano[0] + '-ano/' + (t + 1) + '-tri/' + slug(titulo) + '/`');
        lista.forEach((a, j) => md.push('   - Aula ' + (j + 1) + ' · ' + a));
      });
      md.push('');
    });
  }
  nMod += mM; nAula += mA; resumo.push('| ' + nome + ' | ' + mM + ' | ' + mA + ' |');
}
md.splice(4, 0, '**Total: ' + nMod + ' módulos e ' + nAula + ' aulas previstas.**', '', '| Matéria | Módulos | Aulas |', '|---|---|---|', ...resumo, '');
if (erros.length) { console.log('ERROS no plano das matérias:\n' + erros.join('\n')); process.exit(1); }
const cab = '// GERADO por scripts/plano/montar-plano.js (não edite à mão): módulos e aulas previstas das demais matérias, do 6º ano à 3ª série.\n// t = módulo · p = aulas previstas [nº, título] · ex = módulos do site que moram aqui\n';
fs.writeFileSync(path.join(raiz, 'app/catalog-plano-dados.js'), cab + 'export const PLANO = ' + JSON.stringify(dados) + ';\n');
fs.mkdirSync(path.join(raiz, 'docs'), { recursive: true });
fs.writeFileSync(path.join(raiz, 'docs/plano-materias.md'), md.join('\n') + '\n');
console.log('Plano das demais matérias: ' + nMod + ' módulos, ' + nAula + ' aulas previstas (' + MATERIAS.length + ' matérias)');
