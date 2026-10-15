// Monta trilhas.html (trilhas de estudo por turma) a partir de scripts/trilhas/trilhas.tpl.html.  node scripts/trilhas/montar.js
const fs = require('fs'), path = require('path');
const d = __dirname, p = n => fs.readFileSync(path.join(d, '..', 'home', 'partes', n), 'utf8').replace(/\n$/, '');
let s = fs.readFileSync(path.join(d, 'trilhas.tpl.html'), 'utf8');
s = s.replace('<!--ICON-->', () => p('icon.html')).replace('<!--THEMEICONS-->', () => p('themeicons.html'));
fs.writeFileSync(path.join(d, '../../trilhas.html'), s);
console.log('trilhas.html montado:', s.length, 'bytes');
