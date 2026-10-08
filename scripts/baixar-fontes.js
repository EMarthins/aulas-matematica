// Baixa as fontes do Google Fonts para assets/fonts e gera assets/fonts.css (as páginas passam a não depender
// do Google). Rode uma vez (ou quando mudar as famílias):  node scripts/baixar-fontes.js
const fs = require('fs'), path = require('path'), https = require('https');
const root = path.resolve(__dirname, '..');
const URL_CSS = 'https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,500&family=JetBrains+Mono:wght@400;500;700&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const get = (u) => new Promise((res, rej) => https.get(u, { headers: { 'User-Agent': UA } }, r => { if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return res(get(r.headers.location)); const b = []; r.on('data', c => b.push(c)); r.on('end', () => res(Buffer.concat(b))); }).on('error', rej));
(async () => {
  const css = (await get(URL_CSS)).toString('utf8');
  fs.mkdirSync(path.join(root, 'assets/fonts'), { recursive: true });
  const mapa = {}; let n = 0;
  const blocos = css.split(/(?=\/\* [a-z-]+ \*\/)/).filter(b => b.includes('@font-face'));
  const saida = [];
  for (const b of blocos) {
    const sub = (b.match(/\/\* ([a-z-]+) \*\//) || [])[1];
    if (sub !== 'latin' && sub !== 'latin-ext') continue; // português usa latin; latin-ext cobre símbolos matemáticos
    const url = (b.match(/url\((https:[^)]+)\)/) || [])[1]; if (!url) continue;
    if (!mapa[url]) { const nome = 'f' + (++n) + '-' + sub + '.woff2'; fs.writeFileSync(path.join(root, 'assets/fonts', nome), await get(url)); mapa[url] = nome; }
    saida.push(b.replace(url, '../assets/fonts/' + mapa[url]).replace(/^\/\*[^*]*\*\/\s*/, '/* ' + sub + ' */\n'));
  }
  // o CSS fica em assets/fonts.css → caminhos relativos a assets/
  fs.writeFileSync(path.join(root, 'assets/fonts.css'), '/* Fontes locais (Archivo, Source Serif 4, JetBrains Mono) — geradas por scripts/baixar-fontes.js. Licença OFL. */\n' + saida.join('\n').split('../assets/fonts/').join('fonts/'));
  console.log('arquivos:', n, '| blocos:', saida.length);
})().catch(e => { console.error(e); process.exit(1); });
