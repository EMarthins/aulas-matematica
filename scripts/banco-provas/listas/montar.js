// Acrescenta ao banco (app/banco-provas.json) as questões das listas de exercícios do CD (pasta EXER: Ensino Médio e anos finais do EF).
//   node scripts/banco-provas/listas/montar.js
// Entradas: itens.json (gerado por fontes-nre/tools/importar-listas.mjs: recortes do enunciado e da resolução) e os .jpg em app/img-questoes/ (cdb-l-<lista>-NN[-r].jpg).
// Tipos: mc quando a lista traz alternativas e o gabarito foi lido (letra); aberta nos demais casos (com a resolução em imagem quando a lista tem).
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '../../..'), arq = path.join(raiz, 'app/banco-provas.json');
const MM = 25.4 / 72;
const D = JSON.parse(fs.readFileSync(path.join(__dirname, 'itens.json'), 'utf8'));
const CORR = fs.existsSync(path.join(__dirname, 'correcoes.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'correcoes.json'), 'utf8')) : {};
// título da lista → [série, conteúdo]  (primeira regra que casar)
const REGRAS = [
  [/determinante|cramer/i, ['2º Ano', 'Determinantes e sistemas lineares']], [/matriz|matrizes/i, ['2º Ano', 'Matrizes']],
  [/anagrama|arranjo|combina|permuta|fatorial|principio fundamental|princípio fundamental/i, ['2º Ano', 'Análise combinatória']],
  [/binomi|binômio|binômio/i, ['2º Ano', 'Binômio de Newton']],
  [/probabilidade|eventos independentes|gen[ée]tica/i, ['2º Ano', 'Probabilidade']],
  [/venn|conjuntos/i, ['1º Ano', 'Conjuntos']], [/estat[ií]stica|m[ée]dia/i, ['2º Ano', 'Estatística']],
  [/price|sac\b|amortiza|financiamento|compras|juros compostos|juros e porcent|matem[aá]tica financeira/i, ['2º Ano', 'Matemática financeira']],
  [/juros simples/i, ['1º Ano', 'Juros simples']], [/porcentagem|porcentagens/i, ['1º Ano', 'Porcentagem']],
  [/logar[ií]tm|logaritmo/i, ['2º Ano', 'Logaritmos']], [/exponencial/i, ['2º Ano', 'Função exponencial']],
  [/trigonom|seno|cosseno|arco|rela[cç][oõ]es derivadas|transforma[cç][oõ]es/i, ['2º Ano', 'Trigonometria']],
  [/geometria anal[ií]tica|ponto e reta|alinhamento|retas perpendiculares|posi[cç][oõ]es relativas|equa[cç][aã]o normal da circunfer|estudo da reta|lugar geom/i, ['3º Ano', 'Geometria analítica']],
  [/circunfer[eê]ncia/i, ['3º Ano', 'Geometria analítica: circunferência']],
  [/cilindro|cone|prisma|pir[aâ]mide|diedro|euler|poliedro/i, ['2º Ano', 'Geometria espacial']],
  [/polin[oô]mi|girard|equa[cç][aã]o polinomial|equa[cç][aã]o alg[eé]brica/i, ['3º Ano', 'Polinômios']],
  [/complexo/i, ['3º Ano', 'Números complexos']], [/progress[oõ]/i, ['1º Ano', 'Progressões']],
  [/modular|m[oó]dulo/i, ['1º Ano', 'Função modular']],
  [/fun[cç][aã]o de 2|gr[aá]fico da fun[cç][aã]o de 2|m[aá]ximo e m[ií]nimo|funções do 2|fun[cç][oõ]es do 2|polinomial do segundo/i, ['1º Ano', 'Função quadrática']],
  [/fun[cç][aã]o de 1|fun[cç][oõ]es de 1|fun[cç][aã]o do 1|polinomial do primeiro/i, ['1º Ano', 'Função afim']],
  [/introdu[cç][aã]o [àa] fun|fun[cç][oõ]es\b/i, ['1º Ano', 'Funções']],
  [/equa[cç][aã]o do 2|raiz de uma equa[cç][aã]o do 2/i, ['9º Ano', 'Equações do 2º grau']],
  [/tales|pit[aá]goras|[aâ]ngulos|comprimento e [aá]rea|diagonais|geometria/i, ['9º Ano', 'Geometria plana']],
  [/equa[cç][aã]o|inequa[cç][aã]o|sistema|express[aã]o alg[eé]brica|problemas envolvendo o uso|elementar|fatora/i, ['9º Ano', 'Equações e inequações']],
  [/fra[cç][aã]o|fracion|racionais|decimal|raz[aã]o|regra de tr[eê]s|sociedade|c[aá]lculo num[eé]rico|potencia|numera/i, ['8º Ano', 'Números racionais e proporção']],
  [/l[oó]gica/i, ['1º Ano', 'Lógica']]
];
const classifica = t => { for (const [re, v] of REGRAS) if (re.test(t)) return v; return ['1º Ano', 'Questões variadas']; };
const limpa = s => String(s || '').replace(/\s+/g, ' ').trim();
const SUPD = { '0': '⁰', '1': '¹', '2': '²', '3': '³' };
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
j.questoes = j.questoes.filter(q => !/^cdb-l-/.test(q.id));
const cont = { mc: 0, aberta: 0, semGab: 0, comRes: 0, listas: 0 };
const faltaImg = [];
for (const [rel, L] of Object.entries(D.listas)) {
  const titulo = L.titulo.replace(/^Exerc[ií]cios\s+(sobre\s+|de\s+)?/i, '').replace(/\.docx?$/i, '').trim();
  const sub = rel.split('/')[0];
  let [serie, unidade] = classifica(titulo);
  if (/6°ano/i.test(sub)) serie = '6º Ano'; else if (/7°ano/i.test(sub)) serie = '7º Ano'; else if (/8°ano/i.test(sub)) serie = '8º Ano'; else if (/9°ano/i.test(sub)) serie = '9º Ano';
  const nome = 'Lista: ' + titulo.charAt(0).toUpperCase() + titulo.slice(1);
  cont.listas++;
  for (const it of L.itens) {
    const id = 'cdb-' + it.id;
    if (!fs.existsSync(path.join(raiz, 'app/img-questoes', id + '.jpg'))) { faltaImg.push(id); continue; }
    const cor = CORR[id] || {};
    const q = {
      id, soImagem: true, imgPrevia: true, materia: 'Matemática', serie: cor.serie || serie, unidade: cor.unidade || unidade,
      topicos: [cor.unidade || unidade, titulo].concat(it.tag ? [it.tag] : []), dificuldade: 2, fonte: 'Listas de exercícios (CD)', pontos: 1,
      enunciado: '', busca: limpa(it.busca), imagens: ['img:' + id + '.jpg'], larguraMm: Math.round(it.larguraPt * MM * 10) / 10, resolucao: ''
    };
    // série/ano da instituição vira origem; lista vira tópico
    if (it.res && fs.existsSync(path.join(raiz, 'app/img-questoes', id + '-r.jpg'))) { q.resolucaoImg = { src: 'img:' + id + '-r.jpg', larguraMm: Math.min(150, Math.round(it.res.larguraPt * MM * 10) / 10) }; cont.comRes++; }
    // gabarito
    let letra = cor.gab || '';
    if (!letra) {
      if (L.tipo === 'B') { const g = limpa(it.gab); if (/^[A-Ea-e]$/.test(g)) letra = g.toUpperCase(); else if (/^[A-Ea-e]\b/.test(g) && it.alts.length >= 2 && g.length <= 3) letra = g[0].toUpperCase(); else q.gabarito = g.slice(0, 160); }
      else { const m = limpa(it.respTxt).match(/(?:item|alternativa|letra|resposta correta)\s*\(?([a-e])\)?/i); if (m) letra = m[1].toUpperCase(); }
    }
    if ((letra && it.alts.length >= 2) || (it.alts.length >= 4 && !q.gabarito)) { // a), b) soltos = partes de uma questão aberta
      const n = Math.max(it.alts.length, letra ? 'ABCDE'.indexOf(letra) + 1 : 0);
      q.tipo = 'mc'; q.alternativas = Array.from({ length: n }, (_, k) => ({ t: 'ABCDE'[k], ok: letra === 'ABCDE'[k] }));
      if (!letra) { q.semGabarito = true; cont.semGab++; }
      cont.mc++;
    } else {
      q.tipo = 'aberta'; q.resposta = { modo: 'branco', altura: 45 };
      if (letra) q.gabarito = letra;
      cont.aberta++;
    }
    j.questoes.push(q);
  }
}
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('questões das listas:', cont, '· total no banco autoral:', j.questoes.length, faltaImg.length ? '· sem imagem: ' + faltaImg.slice(0, 5).join(',') + '…(' + faltaImg.length + ')' : '');
