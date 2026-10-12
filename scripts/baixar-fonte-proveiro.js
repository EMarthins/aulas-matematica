// Baixa a fonte arredondada da interface do Proveiro (Nunito, licença OFL) para assets/fonts e gera assets/fonts-proveiro.css.
//   node scripts/baixar-fonte-proveiro.js
const fs = require('fs'), path = require('path'), https = require('https');
const root = path.resolve(__dirname, '..');
const URL_CSS = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400..900&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const get = (u) => new Promise((res, rej) => https.get(u, { headers: { 'User-Agent': UA } }, r => {
  if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return res(get(r.headers.location));
  const b = []; r.on('data', d => b.push(d)); r.on('end', () => res(Buffer.concat(b))); }).on('error', rej));
(async () => {
  const css = (await get(URL_CSS)).toString('utf8');
  const blocos = css.split(/(?=\/\* [a-z-]+ \*\/)/).filter(b => b.includes('@font-face'));
  const saida = [];
  for (const b of blocos) {
    const sub = (b.match(/\/\* ([a-z-]+) \*\//) || [])[1];
    if (sub !== 'latin' && sub !== 'latin-ext') continue;
    const url = (b.match(/url\((https:[^)]+)\)/) || [])[1]; if (!url) continue;
    const nome = 'nunito-' + sub + '.woff2';
    fs.writeFileSync(path.join(root, 'assets/fonts', nome), await get(url));
    saida.push('/* ' + sub + ' */\n' + b.replace(/^\/\*[^*]*\*\/\s*/, '').replace(url, 'fonts/' + nome));
  }
  fs.writeFileSync(path.join(root, 'assets/fonts-proveiro.css'), '/* Nunito (fonte arredondada da interface do Proveiro) — gerada por scripts/baixar-fonte-proveiro.js. Licença OFL. */\n' + saida.join('\n'));
  console.log('blocos:', saida.length);
})().catch(e => { console.error(e); process.exit(1); });
