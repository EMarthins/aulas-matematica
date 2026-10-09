// Copia os recortes gerados (scratchpad) para os arquivos de entrada do montar-imagens.js.
//   node scripts/banco-provas/enem/preparar-staging.js <pasta-out> 2018 2020 ...
const fs = require('fs'), path = require('path');
const [, , out, ...anos] = process.argv;
for (const ano of anos) {
  const itens = [];
  for (const dia of ['D1', 'D2']) {
    const p = path.join(out, `imgq-${ano}-${dia}.json`); if (!fs.existsSync(p)) continue;
    for (const i of JSON.parse(fs.readFileSync(p, 'utf8')).itens)
      itens.push({ id: i.id, n: i.n, lang: i.lang, gab: i.gab || null, img: i.img, largPt: i.largPt, altPt: i.altPt, base: i.base, busca: i.texto });
  }
  fs.writeFileSync(path.join(__dirname, `imagens-${ano}.json`), JSON.stringify({ ano, itens }, null, 1));
  console.log(ano, itens.length);
}
