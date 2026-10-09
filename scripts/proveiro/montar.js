// Monta professor/prova.html (Proveiro) a partir do modelo + diálogos.  node scripts/proveiro/montar.js
const fs = require('fs'), path = require('path');
const d = __dirname;
const t = fs.readFileSync(path.join(d, 'prova.tpl.html'), 'utf8').replace('<!--DIALOGOS-->', () => fs.readFileSync(path.join(d, 'partes/dialogos.html'), 'utf8').trimEnd());
fs.writeFileSync(path.join(d, '../../professor/prova.html'), t);
console.log('professor/prova.html montado:', t.length, 'bytes');
