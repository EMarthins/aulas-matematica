// Lista as questões abertas do CD ainda SEM gabarito e sem resolução (para escrevermos as respostas).
//   node scripts/banco-provas/listas/pendentes.js <inicio> <quantidade>     (ordem estável por id)
const j = require('../../../app/banco-provas.json');
const ini = +process.argv[2] || 0, n = +process.argv[3] || 60;
const sem = j.questoes.filter(x => /^cdb-l-/.test(x.id) && x.tipo === 'aberta' && !x.gabarito && !x.resolucaoImg && !x.resolucao).sort((a, b) => a.id.localeCompare(b.id));
console.log('pendentes:', sem.length, '| mostrando', ini, '–', Math.min(sem.length, ini + n));
sem.slice(ini, ini + n).forEach(x => console.log(x.id.replace('cdb-l-', ''), '|', x.serie, '|', String(x.busca || '').replace(/\s+/g, ' ').slice(0, 420)));
