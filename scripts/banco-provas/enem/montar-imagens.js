// Acrescenta ao banco (app/banco-provas.json) as questões do ENEM que entram como imagem (todas as áreas).
//   node scripts/banco-provas/enem/montar-imagens.js
// Entradas: imagens-AAAA.json (recortes já salvos em app/img-questoes/), rotulos.js (disciplina e tópico).
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const rot = { ...require('./rotulos.js') };
const ANOS = ['2018', '2020', '2021', '2022', '2023', '2024', '2025'];
for (const ano of ANOS) { const f = path.join(__dirname, `rotulos-${ano}.js`); if (!fs.existsSync(f)) continue;
  require(f).trim().split(String.fromCharCode(10)).forEach(l => { const [k, d, tp] = l.split('|').map(x => x.trim()); rot[ano.slice(2) + '-' + k] = [d, tp]; }); }
const AREA = n => n <= 45 ? 'Linguagens' : n <= 90 ? 'Ciências Humanas' : n <= 135 ? 'Ciências da Natureza' : 'Matemática';
const MM = 25.4 / 72;
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
j.questoes = j.questoes.filter(q => !q.soImagem);
let n = 0, semRotulo = [];
for (const ano of ANOS) {
  const pj = path.join(__dirname, `imagens-${ano}.json`); if (!fs.existsSync(pj)) continue;
  const D = JSON.parse(fs.readFileSync(pj, 'utf8'));
  for (const it of D.itens) {
    const k = ano.slice(2) + '-' + it.id.replace(/^enem\d+-/, '');
    const r = rot[k]; if (!r) { semRotulo.push(k); continue; }
    const letras = 'ABCDE', anulada = it.gab === 'ANULADA', semGab = !it.gab;
    const q = {
      id: it.id, tipo: 'mc', soImagem: true, materia: AREA(it.n), serie: 'ENEM', unidade: `${r[0]} · ${r[1]}`,
      topicos: [r[0], r[1], 'ENEM ' + ano], dificuldade: 2, fonte: `ENEM ${ano} (INEP)`, pontos: 1,
      enunciado: '', busca: it.busca, imagens: ['img:' + it.img], larguraMm: Math.round(it.largPt * MM * 10) / 10,
      alternativas: letras.split('').map(L => ({ t: L, ok: !anulada && !semGab && it.gab === L })), resolucao: ''
    };
    if (anulada) q.anulada = true;
    if (semGab) q.semGabarito = true;
    if (it.base) q.base = { id: 'enem' + ano + '-' + it.base.id, src: 'img:' + it.base.img, larguraMm: Math.round(it.base.largPt * MM * 10) / 10 };
    if (it.lang) q.unidade = `${r[0]} · ${r[1]}`;
    j.questoes.push(q); n++;
  }
}
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('questões ENEM em imagem:', n, '· total no banco autoral:', j.questoes.length, semRotulo.length ? '· SEM ROTULO: ' + semRotulo.join(',') : '');
