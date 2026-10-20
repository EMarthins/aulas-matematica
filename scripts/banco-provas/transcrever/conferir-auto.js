// Folhas de conferência das transcrições automáticas: imagem original com a caixa da figura em azul + o texto montado.
//   node scripts/banco-provas/transcrever/conferir-auto.js <auto-xxx.jsonl> <inicio=0> <qtd=8> [soFigura]
const fs = require('fs'), path = require('path'), os = require('os'), { spawnSync } = require('child_process');
const raiz = path.resolve(__dirname, '../../..');
const [arq, ini = '0', qtd = '8', so] = process.argv.slice(2);
let lin = fs.readFileSync(path.join(__dirname, arq), 'utf8').split('\n').filter(Boolean).map(JSON.parse);
if (so) lin = lin.filter(x => x.fig);
lin = lin.slice(+ini, +ini + +qtd);
const out = path.join(os.tmpdir(), 'conf'); fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'ids.json'), JSON.stringify(lin.map(x => x.id)));
fs.writeFileSync(path.join(out, 'caixas.json'), JSON.stringify(Object.fromEntries(lin.filter(x => x.fig).map(x => [x.id, x.fig]))));
const r = spawnSync(process.execPath, [path.join(raiz, '../fontes-nre/tools/transcricao-folhas.mjs'), path.join(out, 'ids.json'), out, '4', path.join(out, 'caixas.json')], { encoding: 'utf8' });
console.log((r.stdout || '') + (r.stderr || ''));
console.log(Object.keys(JSON.parse(fs.readFileSync(path.join(out, 'indice.json'), 'utf8'))).map(f => path.join(out, f)).join('\n'));
const cut = (s, n) => (s.length > n ? s.slice(0, Math.floor(n * 0.6)) + ' […] ' + s.slice(-Math.floor(n * 0.4)) : s);
lin.forEach(x => { console.log('\n' + x.id + (x.fig ? '  [FIG]' : '') + '\n E: ' + cut(x.e || '', 300) + (x.p ? '\n P: ' + cut(x.p, 200) : '')); (x.a || []).forEach((a, k) => console.log('   ' + 'ABCDE'[k] + ') ' + cut(a, 90))); });
