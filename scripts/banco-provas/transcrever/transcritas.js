// Guarda/restaura as questões já TRANSCRITAS (texto no lugar da imagem). Os montar.js/publicar refazem as questões do CD a partir das imagens;
// depois de rodá-los, use "restaurar" para recolocar o texto.
//   node scripts/banco-provas/transcrever/transcritas.js salvar      (grava transcritas.json com todas as questões transcrita:true)
//   node scripts/banco-provas/transcrever/transcritas.js restaurar   (troca, no banco, a versão em imagem pela transcrita, id a id)
const fs = require('fs'), path = require('path');
const arq = path.resolve(__dirname, '../../../app/banco-provas.json'), bk = path.join(__dirname, 'transcritas.json');
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
if (process.argv[2] === 'salvar') {
  const t = j.questoes.filter(q => q.transcrita); fs.writeFileSync(bk, JSON.stringify(t));
  console.log('salvas', t.length, 'questões transcritas');
} else if (process.argv[2] === 'restaurar') {
  const t = JSON.parse(fs.readFileSync(bk, 'utf8')), por = Object.fromEntries(t.map(q => [q.id, q])); let n = 0;
  j.questoes = j.questoes.map(q => { if (por[q.id] && !q.transcrita) { n++; return por[q.id]; } return q; });
  fs.writeFileSync(arq, JSON.stringify(j, null, 1)); console.log('restauradas', n);
} else console.log('uso: salvar | restaurar');
