// Monta index.html a partir de scripts/home/index.tpl.html + partes reaproveitadas.  node scripts/home/montar.js
const fs = require('fs'), path = require('path');
const d = __dirname, p = n => fs.readFileSync(path.join(d, 'partes', n), 'utf8').replace(/\n$/, '');
let s = fs.readFileSync(path.join(d, 'index.tpl.html'), 'utf8');
s = s.replace('<!--ICON-->', () => p('icon.html')).replace('<!--THEMEICONS-->', () => p('themeicons.html')).replace('<!--KEEPHTML-->', () => p('keephtml.html'))
     .replace('/*KEEP1*/', () => p('keep1.js')).replace('/*KEEP2*/', () => p('keep2.js'));
fs.writeFileSync(path.join(d, '../../index.html'), s);
console.log('index.html montado:', s.length, 'bytes');
