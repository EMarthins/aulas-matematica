// Aplica ao banco (app/banco-provas.json) os gabaritos CRIADOS por nós para questões do CD que vieram sem resposta.
//   node scripts/banco-provas/aplicar-gabaritos.js         (rodar DEPOIS de listas/montar.js, uno/montar.js e simulados/montar.js — eles refazem os lotes do zero)
// Fontes (pasta listas/):
//   gab-*.txt       "<id> <letra>"            múltipla escolha: marca a alternativa correta e tira o aviso "sem gabarito"
//   abertas-*.txt   "<id> | <resposta>"       a questão vira (ou continua) aberta, com a resposta no gabarito do professor (aceita $…$ da mini-linguagem)
//   excluir-*.txt   "<id> | <motivo>"         recorte defeituoso: sai do banco
//   resolucoes-*.txt "<id> | <resolução>"     texto de resolução (aparece junto do gabarito)
const fs = require('fs'), path = require('path');
const raiz = path.resolve(__dirname, '../..'), arq = path.join(raiz, 'app/banco-provas.json');
const dir = path.join(__dirname, 'listas');
const ler = padrao => fs.readdirSync(dir).filter(f => padrao.test(f)).sort().flatMap(f => fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#')));
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
const por = Object.fromEntries(j.questoes.map(q => [q.id, q]));
const cont = { letra: 0, aberta: 0, excluida: 0, resolucao: 0, ausentes: [] };

for (const l of ler(/^gab.*\.txt$/)) {
  const [id, letra] = l.trim().split(/\s+/); const q = por[id];
  if (!q) { cont.ausentes.push(id); continue; }
  if (q.tipo !== 'mc' || !q.alternativas) { cont.ausentes.push(id + ' (não é mc)'); continue; }
  const i = 'ABCDE'.indexOf(letra); if (i < 0 || i >= q.alternativas.length) { cont.ausentes.push(id + ' letra ' + letra); continue; }
  q.alternativas.forEach((a, k) => { a.ok = k === i; }); delete q.semGabarito; cont.letra++;
}
for (const l of ler(/^abertas.*\.txt$/)) {
  const k = l.indexOf('|'); const id = l.slice(0, k).trim(), txt = l.slice(k + 1).trim(); const q = por[id];
  if (!q) { cont.ausentes.push(id); continue; }
  q.tipo = 'aberta'; delete q.alternativas; delete q.semGabarito; q.gabarito = txt;
  if (!q.resposta) q.resposta = { modo: 'branco', altura: 45 };
  cont.aberta++;
}
for (const l of ler(/^resolucoes.*\.txt$/)) {
  const k = l.indexOf('|'); const id = l.slice(0, k).trim(), txt = l.slice(k + 1).trim(); const q = por[id];
  if (!q) { cont.ausentes.push(id); continue; } q.resolucao = txt; cont.resolucao++;
}
const fora = new Set(ler(/^excluir.*\.txt$/).map(l => l.split('|')[0].trim()));
const antes = j.questoes.length; j.questoes = j.questoes.filter(q => !fora.has(q.id)); cont.excluida = antes - j.questoes.length;
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
const sem = j.questoes.filter(q => q.tipo === 'mc' && q.semGabarito).length;
console.log('gabaritos aplicados:', { letras: cont.letra, abertas: cont.aberta, resolucoes: cont.resolucao, excluidas: cont.excluida }, '· mc ainda sem gabarito:', sem, cont.ausentes.length ? '· ids não encontrados: ' + cont.ausentes.slice(0, 12).join(', ') : '');
