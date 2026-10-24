// Reúne todos os módulos de Física gerados (arquivos fNN-*.js, cada um exporta um array de módulos).
const fs = require('fs');
module.exports = () => fs.readdirSync(__dirname).filter(f => /^f\d\d[\w-]*\.js$/.test(f)).sort()
  .reduce((a, f) => a.concat([].concat(require('./' + f)).map(m => Object.assign(m, { arquivoFonte: f }))), []);
