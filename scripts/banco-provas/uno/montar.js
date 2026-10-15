// Acrescenta ao banco (app/banco-provas.json) as questões do "Banco de Questões de Matemática" (vestibulares) do CD.
//   node scripts/banco-provas/uno/montar.js
// Entradas: recortes.json (gerado por fontes-nre/tools/uno-recortar.mjs: um recorte por questão + gabarito lido do próprio banco)
//           e os recortes .jpg já copiados para app/img-questoes/ (ids cdb-cNN-NNN).
// Cada questão entra "só em imagem" (como as do ENEM): mc (gabarito A–E), vf, soma ou aberta, conforme o gabarito do banco.
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const MM = 25.4 / 72;
// capítulo → série, conteúdo
const CAP = {
  'Conceitos básicos e conjuntos': ['1º Ano', 'Conjuntos e conceitos básicos'],
  'Equações e inequações': ['1º Ano', 'Equações e inequações'],
  'Problemas': ['1º Ano', 'Problemas variados'],
  'Funções e funções compostas': ['1º Ano', 'Funções e funções compostas'],
  'Exponencial e logaritmo': ['2º Ano', 'Exponencial e logaritmo'],
  'Princípio fundamental da contagem, permutações, arranjos e combinatória': ['2º Ano', 'Análise combinatória'],
  'Matrizes, determinantes e sistemas lineares': ['2º Ano', 'Matrizes, determinantes e sistemas lineares'],
  'Números complexos': ['3º Ano', 'Números complexos'],
  'Trigonometria': ['2º Ano', 'Trigonometria'],
  'Juros e porcentagens': ['1º Ano', 'Juros e porcentagem'],
  'Quadriláteros e polígonos': ['2º Ano', 'Quadriláteros e polígonos'],
  'Triângulos, área de triângulos, polígonos e círculos': ['2º Ano', 'Geometria plana: triângulos, áreas e círculos'],
  'Prismas e cilindros': ['2º Ano', 'Geometria espacial: prismas e cilindros'],
  'Pirâmides e cones': ['2º Ano', 'Geometria espacial: pirâmides e cones'],
  'Funções (2ª parte)': ['1º Ano', 'Funções (aprofundamento)'],
  'Binômio de Newton e probabilidade': ['2º Ano', 'Binômio de Newton e probabilidade'],
  'Retas': ['3º Ano', 'Geometria analítica: retas'],
  'Circunferência': ['3º Ano', 'Geometria analítica: circunferência'],
  'Parábola, elipse e hipérbole': ['3º Ano', 'Cônicas'],
  'Poliedros, esferas, sólidos semelhantes e troncos': ['2º Ano', 'Geometria espacial: poliedros, esferas e troncos'],
  'Trigonometria (2ª parte)': ['2º Ano', 'Trigonometria (aprofundamento)'],
  'Seqüências': ['1º Ano', 'Sequências, PA e PG'],
  'Matrizes, determinantes e sistemas lineares (2ª parte)': ['2º Ano', 'Matrizes e sistemas (aprofundamento)'],
  'Polinômios': ['3º Ano', 'Polinômios'],
  'Estatística': ['3º Ano', 'Estatística'],
  'Geometria espacial e geometria analítica': ['3º Ano', 'Geometria espacial e analítica (revisão)']
};
const FONTE = 'Vestibulares (banco do CD)';
const R = JSON.parse(fs.readFileSync(path.join(__dirname, 'recortes.json'), 'utf8'));
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
j.questoes = j.questoes.filter(q => !/^cdb-/.test(q.id));
const limpa = s => String(s || '').replace(/\s+/g, ' ').trim();
const cont = { mc: 0, vf: 0, soma: 0, aberta: 0, semGab: 0 };
const semCap = [];
for (const it of R.itens) {
  const c = CAP[it.cap]; if (!c) { semCap.push(it.cap); continue; }
  const gab = limpa(it.gab), letras = 'abcde';
  const nAlts = it.alts ? Math.max(...it.alts.split('').map(l => letras.indexOf(l) + 1)) : 0;
  const q = {
    id: it.id, soImagem: true, materia: 'Matemática', serie: c[0], unidade: c[1],
    topicos: [c[1], 'vestibular'].concat(it.tag ? [it.tag] : []), dificuldade: 2, fonte: FONTE, pontos: 1,
    enunciado: '', busca: limpa(it.busca), imgPrevia: true, imagens: ['img:' + it.id + '.jpg'], larguraMm: Math.round(it.larguraPt * MM * 10) / 10, resolucao: ''
  };
  const ehLetra = /^[A-E]$/.test(gab), ehVF = /^[VF]( ?[-–] ?[VF])+$/.test(gab), ehSoma = /\d\d\s*(\+\s*\d\d\s*)*=\s*\d+/.test(gab) || (/^\d{2}$/.test(gab) && /soma/i.test(it.busca));
  if (ehLetra || (!gab && nAlts >= 2)) {
    const n = Math.max(nAlts, ehLetra ? 'ABCDE'.indexOf(gab) + 1 : 0, nAlts ? 0 : 5);
    q.tipo = 'mc'; q.alternativas = Array.from({ length: n }, (_, k) => ({ t: 'ABCDE'[k], ok: ehLetra && gab === 'ABCDE'[k] }));
    if (!ehLetra) { q.semGabarito = true; cont.semGab++; }
    cont.mc++;
  } else if (ehVF) { q.tipo = 'vf'; q.gabarito = gab.replace(/ ?[-–] ?/g, ' – '); cont.vf++; }
  else if (ehSoma) { q.tipo = 'soma'; q.gabarito = (gab.match(/=\s*(\d+)\s*$/) || [0, gab])[1].padStart(2, '0'); cont.soma++; }
  else { q.tipo = 'aberta'; q.gabarito = gab.slice(0, 200); q.resposta = { modo: 'branco', altura: 45 }; if (!gab) { q.semGabarito = true; cont.semGab++; } cont.aberta++; }
  if (it.baseId) { const b = R.bases[it.baseId]; if (b) q.base = { id: it.baseId, src: 'img:' + it.baseId + '.jpg', larguraMm: Math.round(b.larguraPt * MM * 10) / 10 }; }
  j.questoes.push(q);
}
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('questões do banco de vestibulares:', R.itens.length - semCap.length, cont, '· total no banco autoral:', j.questoes.length, semCap.length ? '· SEM CAPÍTULO: ' + [...new Set(semCap)].join(',') : '');
