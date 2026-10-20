// pega as palavras suspeitas dos revisar-*.json, pergunta ao corretor do Word e acrescenta as aceitas (6+ letras) a vocab-extra.json
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const dir = __dirname, extra = path.join(dir, 'vocab-extra.json');
const ja = new Set(fs.existsSync(extra) ? JSON.parse(fs.readFileSync(extra, 'utf8')) : []), set = new Set();
for (const f of fs.readdirSync(dir).filter(f => /^revisar-.*\.json$/.test(f))) { const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); for (const k in r) { const m = String(r[k]).match(/palavras suspeitas: ([^;]*)/); if (m) m[1].split(',').forEach(w => { if (w.length >= 6 && !ja.has(w)) set.add(w); }); } }
if (!set.size) { console.log('nada novo'); process.exit(0); }
const tmp = process.env.TEMP, ent = path.join(tmp, 'unk.txt'), sai = path.join(tmp, 'unk-ok.txt');
fs.writeFileSync(ent, [...set].join('\n'));
execSync(`powershell -ExecutionPolicy Bypass -File "${path.join(dir, 'spell.ps1')}" "${ent}" "${sai}"`, { stdio: 'inherit' });
const ok = fs.readFileSync(sai, 'utf8').replace(/^﻿/, '').split(/\r?\n/).filter(w => w.length >= 6);
ok.forEach(w => ja.add(w)); fs.writeFileSync(extra, JSON.stringify([...ja]));
console.log('candidatas', set.size, '· aceitas', ok.length, '· total', ja.size);
