// Procura, no texto extraído do CD (fontes-nre/cd-texto), o bloco "GABARITO"/"Resolução" de cada lista cujas questões de múltipla escolha ficaram sem gabarito
// e grava as letras encontradas em correcoes-auto.json (id → {gab}).   node scripts/banco-provas/listas/gabaritos-do-texto.js [--ver]
// Só aceita a letra quando o número da questão no gabarito coincide com o número impresso no começo do enunciado (campo busca) e a letra existe nas alternativas.
const fs = require('fs'), path = require('path');
const raiz = path.resolve(__dirname, '../../..');
const fontes = path.resolve(raiz, '../fontes-nre');
const banco = JSON.parse(fs.readFileSync(path.join(raiz, 'app/banco-provas.json'), 'utf8'));
const itens = JSON.parse(fs.readFileSync(path.join(__dirname, 'itens.json'), 'utf8'));
const ver = process.argv.includes('--ver');
const sem = new Set(banco.questoes.filter(q => /^cdb-l-/.test(q.id) && q.tipo === 'mc' && q.semGabarito).map(q => q.id));
const out = {}; let achou = 0, tentou = 0; const relatorio = [];
const normaliza = t => t.replace(/\r/g, '').replace(/[ \t]+/g, ' ');

function lerGabarito(txt) {
  // devolve { numero: letra }
  const t = normaliza(txt);
  const i = t.search(/GABARITO|RESOLU[CÇ][AÃ]O|RESPOSTAS?\b|Gabarito/);
  if (i < 0) return {};
  const bloco = t.slice(i);
  const m = {};
  // "1: Alternativa-E", "1. e", "1) C", "1 - b", "01. B", "1:Alternativa 'b'"
  const re = /(?:^|\n|\s)(\d{1,2})\s*[:.\-–)]\s*(?:alternativa|letra|alt\.?|item)?[\s\-–:]*[('"]?\s*([a-eA-E])\s*[)'".,]?(?=\s|$|\n|[,.;])/g;
  let r;
  while ((r = re.exec(bloco))) { const n = +r[1]; if (!(n in m)) m[n] = r[2].toUpperCase(); }
  return m;
}

for (const [rel, L] of Object.entries(itens.listas)) {
  const alvo = L.itens.filter(it => sem.has('cdb-' + it.id));
  if (!alvo.length) continue;
  const arq = path.join(fontes, 'cd-texto', 'EXER', 'Exercícios & Provas', rel.replace(/\.pdf$/i, '') + '.txt');
  if (!fs.existsSync(arq)) { relatorio.push('sem texto: ' + rel); continue; }
  const gab = lerGabarito(fs.readFileSync(arq, 'utf8'));
  if (!Object.keys(gab).length) { relatorio.push('sem bloco de gabarito: ' + rel + ' (' + alvo.length + ' questões)'); continue; }
  for (const it of alvo) {
    tentou++;
    const num = (String(it.busca || '').match(/^\s*(?:quest[ãa]o\s*)?(\d{1,2})\b/i) || [])[1];
    const letra = num && gab[+num];
    const q = banco.questoes.find(x => x.id === 'cdb-' + it.id);
    const nAlt = q && q.alternativas ? q.alternativas.length : 0;
    if (letra && 'ABCDE'.indexOf(letra) < nAlt) { out['cdb-' + it.id] = { gab: letra }; achou++; if (ver) relatorio.push(`  ${it.id}: nº ${num} → ${letra}`); }
    else relatorio.push(`  sem par: ${it.id} (nº ${num || '?'}) em ${rel}`);
  }
}
fs.writeFileSync(path.join(__dirname, 'correcoes-auto.json'), JSON.stringify(out, null, 1));
console.log(`gabaritos achados no texto: ${achou} de ${tentou} questões tentadas (${sem.size} sem gabarito no total)`);
console.log(relatorio.slice(0, 80).join('\n'));
