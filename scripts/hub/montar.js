// Monta home.html (o hub depois do login: busca grande, atalhos e matérias) a partir de scripts/hub/home.tpl.html.  node scripts/hub/montar.js
const fs = require('fs'), path = require('path');
const d = __dirname, p = n => fs.readFileSync(path.join(d, '..', 'home', 'partes', n), 'utf8').replace(/\n$/, '');
let s = fs.readFileSync(path.join(d, 'home.tpl.html'), 'utf8');
s = s.replace('<!--ICON-->', () => p('icon.html')).replace('<!--THEMEICONS-->', () => p('themeicons.html'));
fs.writeFileSync(path.join(d, '../../home.html'), s);
console.log('home.html montado:', s.length, 'bytes');
