// Acrescenta ao banco (app/banco-provas.json) as questões dos simulados em imagem do CD (B1–B8 e Atividade 01–03, 169 questões de múltipla escolha).
//   node scripts/banco-provas/simulados/montar.js
// Entradas: recortes.json (gerado por fontes-nre/tools/simulado-segmentar.mjs, com texto OCR de busca) e gabaritos.json (letras; vazio = sem gabarito).
// Os recortes .jpg já ficam em app/img-questoes/ com o id da questão (cdb-sim-…).
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const R = JSON.parse(fs.readFileSync(path.join(__dirname, 'recortes.json'), 'utf8'));
const G = JSON.parse(fs.readFileSync(path.join(__dirname, 'gabaritos.json'), 'utf8'));
const PX_MM = 25.4 / 2 / 96 * 1.0; // largura do recorte (px em página de 1400 px = A4) → mm aproximados: 210 mm / 1400 px
const MM = 210 / 1400;
const NOME = { B1: 'Simulado B1', B2: 'Simulado B2', B3: 'Simulado B3', B4: 'Simulado B4', B5: 'Simulado B5', B6: 'Simulado B6', B7: 'Simulado B7', B8: 'Simulado B8', A01: 'Atividade 01', A02: 'Atividade 02', A03: 'Atividade 03' };
const SEM = new Set(['B7-08', 'B7-11']); // alternativas encobertas por uma figura no original
// conteúdo pelo texto OCR da questão
const REGRAS = [
  [/probabilidade|sorteio|sortead/i, 'Probabilidade'], [/gráfico de barras|gráfico de setores|média aritm|mediana|moda\b|frequência|pesquisa/i, 'Estatística e gráficos'],
  [/logaritm|log ?\d|log\(/i, 'Logaritmos'], [/exponencial|bactérias|2\^|potências? de/i, 'Função exponencial'],
  [/seno|cosseno|tangente|trigonom/i, 'Trigonometria'], [/progress[ãa]o|termo geral|sequência/i, 'Sequências e progressões'],
  [/função|f\(x\)|y ?= ?[0-9x]|gráfico/i, 'Funções'], [/equação|inequação|sistema|incógnita/i, 'Equações e inequações'],
  [/triângulo|polígono|área|perímetro|ângulo|circunferência|círculo|pitágoras|hipotenusa|retângulo/i, 'Geometria plana'],
  [/volume|prisma|cilindro|cubo|pirâmide|cone|esfera|faces|arestas|vértices/i, 'Geometria espacial'],
  [/porcentagem|%|juros|desconto|aumento|salário|reais|R\$/i, 'Porcentagem e matemática financeira'],
  [/fração|decimal|dízima|número inteiro|racional|raiz|potência|expressão/i, 'Números e operações'],
  [/razão|proporção|regra de três|escala|velocidade|diretamente|inversamente/i, 'Razão e proporção']
];
const nAlt = (grupo, num, gab) => (grupo === 'B4' && num <= 6 ? 4 : 5); // só as questões 1–6 do B4 têm 4 alternativas (a–d)
const unidade = t => { for (const [re, u] of REGRAS) if (re.test(t)) return u; return 'Questões variadas'; };
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
j.questoes = j.questoes.filter(q => !/^cdb-sim-/.test(q.id));
let n = 0, semG = 0;
for (const it of R) {
  const [grupo, num] = it.id.split('-'); if (SEM.has(it.id)) continue;
  const id = 'cdb-sim-' + grupo.toLowerCase() + '-' + num, gab = (G[grupo] || {})[+num] || '';
  const u = unidade(it.busca || '');
  const q = {
    id, tipo: 'mc', soImagem: true, imgPrevia: true, materia: 'Matemática', serie: 'Simulados', unidade: u,
    topicos: [u, NOME[grupo], 'simulado'], dificuldade: 2, fonte: NOME[grupo] + ' (CD)', pontos: 1,
    enunciado: '', busca: String(it.busca || '').replace(/\s+/g, ' ').trim(), imagens: ['img:' + id + '.jpg'], larguraMm: Math.round(it.w * MM * 10) / 10,
    alternativas: 'ABCDE'.slice(0, nAlt(grupo, +num, gab)).split('').map(L => ({ t: L, ok: gab === L })), resolucao: ''
  };
  if (!gab) { q.semGabarito = true; semG++; }
  j.questoes.push(q); n++;
}
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('questões de simulados:', n, '· sem gabarito:', semG, '· total no banco autoral:', j.questoes.length);
