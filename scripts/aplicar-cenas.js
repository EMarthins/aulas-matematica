// Troca a figura de abertura GENÉRICA das aulas por uma cena específica e interativa (app/cenas.js, cenas2.js, cenas3.js).
// 1) MAPA: as aulas grátis (mais usadas), uma cena escolhida a dedo por módulo.
// 2) REGRAS: os demais módulos de Matemática recebem a cena do TEMA (função afim, logaritmo, PA/PG, ciclo trigonométrico, áreas, volumes…) pelo nome da pasta.
// Idempotente: marca o <figure> com data-cena="<id>" e liga o script uma única vez.
//
//   node scripts/aplicar-cenas.js .
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
// pasta do módulo -> id da cena (a aula é a "aula-1-*.html" dessa pasta)
const MAPA = {
  '1-ano/1-tri/notacao-cientifica': 'notacao', '1-ano/2-tri/funcao-quadratica-definicao': 'quad-def', '1-ano/3-tri/estatistica-conceitos-e-variaveis': 'estat-var',
  '2-ano/1-tri/funcao-quadratica': 'quad-graf', '2-ano/2-tri/trigonometria-introducao': 'trig', '2-ano/3-tri/equacao-e-funcao-exponencial': 'bacterias',
  '3-ano/1-tri/equacao-exponencial': 'balanca-exp', '3-ano/2-tri/perimetro-figuras-planas': 'perimetro', '3-ano/3-tri/sequencias-numericas': 'palitos',
  '6-ano/2-tri/fracoes': 'pizza', '6-ano/3-tri/numeros-inteiros': 'elevador', '7-ano/1-tri/inteiros-propriedades-e-potenciacao': 'fichas',
  '7-ano/2-tri/equacoes-e-inequacoes': 'balanca-eq', '7-ano/3-tri/angulos-e-poligonos': 'opv', '8-ano/1-tri/numeros-reais-e-irracionais': 'conjuntos',
  '8-ano/2-tri/triangulos-e-poligonos': 'triangulo', '8-ano/3-tri/juros-simples-e-proporcionalidade': 'juros', '9-ano/1-tri/equacoes-do-2-grau': 'bhaskara',
  '9-ano/1-tri/operacoes-com-inteiros': 'reta-soma', '9-ano/2-tri/poligonos': 'poligonos', '9-ano/2-tri/semelhanca-pitagoras-e-trigonometria': 'semelhanca',
  '9-ano/3-tri/comprimento-e-perimetro': 'unidades', '9-ano/3-tri/funcoes-afim-e-quadratica': 'taxi',
  'arte/6-ano/1-tri/artes-visuais': 'arte', 'biologia/1-ano/1-tri/citologia-e-genetica': 'celula', 'ciencias/6-ano/1-tri/vida-e-evolucao': 'vivos',
  'educacao-fisica/6-ano/1-tri/esportes': 'esportes', 'filosofia/1-ano/1-tri/introducao-a-filosofia': 'mito', 'fisica/1-ano/1-tri/mecanica': 'referencial',
  'geografia/6-ano/1-tri/espaco-e-cartografia': 'bussola', 'historia/6-ano/1-tri/antiguidade-e-idade-media': 'fontes', 'ingles/6-ano/1-tri/vocabulario-e-comunicacao': 'greetings',
  'quimica/1-ano/1-tri/materia-e-estrutura-atomica': 'misturas', 'sociologia/1-ano/1-tri/cultura-e-sociedade': 'iceberg'
};
// Regras por tema (nome da pasta do módulo de Matemática; a primeira que casar vale)
const REGRAS = [
  [/^retomada-funcoes-e-sistemas|equacoes-e-sistemas|matrizes-e-sistemas/, 'sistema'],
  [/probabilidade/, 'probabilidade'], [/analise-combinatoria/, 'combinatoria'], [/amostra/, 'amostra'],
  [/matematica-financeira|financiamentos/, 'juros-comp'], [/porcentagem/, 'porcent'],
  [/logaritm/, 'logaritmo'], [/funcao-exponencial/, 'exp-graf'],
  [/lei-dos-/, 'leis'], [/pitagoras/, 'pitagoras'], [/^semelhanca$/, 'semelhanca'], [/congruencia|propriedades-dos-triangulos/, 'triangulo'], [/triangulos-existencia/, 'tri-existe'],
  [/funcao-seno|funcao-cosseno|funcoes-trigonometricas/, 'onda'],
  [/arcos|circunferencia-trigonometrica|trigonometria-ciclo|seno-e-cosseno-de-um-arco|tangente-de-um-arco|relacao-fundamental/, 'ciclo'],
  [/razoes-trigonometricas|triangulo-retangulo|trigonometria-triangulo/, 'trig'],
  [/zeros-da-funcao-quadratica|zeros-soma-produto|retomada-equacao-do-2-grau/, 'bhaskara'],
  [/quadratica|vertice|maximo-minimo|funcoes-do-2-grau|funcao-quadratica|sinais-e-graficos/, 'quad-graf'],
  [/funcao-afim|taxa-de-variacao/, 'afim'],
  [/funcoes-definicao|grafico-de-uma-funcao|^funcoes$|propriedades-das-funcoes|funcao-composta|funcao-inversa|funcoes-definidas|funcao-modular/, 'maquina'],
  [/(^|-)pa(-|$)|progressao-aritmetica/, 'pa'], [/(^|-)pg(-|$)|progressao-geometrica/, 'pg'], [/sequencias/, 'palitos'],
  [/distribuicao-de-frequencia|histograma|media-moda|medidas-de-dispersao|quartis|ramos-e-folhas|tendencia-central|graficos-setores|tabelas-e-graficos|contagem-e-estatistica/, 'estat-dados'],
  [/area-do-circulo|problemas-de-area-com-circulos|circulo-e-circunferencia|circunferencia-e-circulo/, 'circulo'],
  [/poligonos-regulares|propriedades-dos-poligonos|ladrilhamento|poligonos-e-circunferencia/, 'poligonos'],
  [/prisma|cilindro|cone|piramide|esfera|poliedros|volume/, 'volume'],
  [/^reta-numerica$|^adicao-e-subtracao/, 'reta-soma'],
  [/area-de-poligonos|area-e-perimetro|perimetro-e-area|area-de-figuras|areas-irregulares|variacao-do-perimetro|areas-e-volumes/, 'areas'],
  [/quadrilateros/, 'quadrilateros'], [/angulos-na-circunferencia/, 'angulo-inscrito'], [/geometria-e-angulos/, 'opv'], [/geometria-analitica|vetores/, 'plano-pontos'], [/conicas/, 'conicas'],
  [/numeros-decimais|operacoes-com-decimais|sistema-de-numeracao/, 'decimal'], [/mmc-e-mdc/, 'mmcmdc'], [/multiplos-divisores/, 'divisores'],
  [/fracoes|numeros-racionais|operacoes-com-racionais/, 'pizza'], [/potenciacao|potencias-e-raizes|radicais-e-potencias/, 'potencia'],
  [/calculo-algebrico|expressoes-algebricas|polinomios/, 'algebra'], [/razoes-entre-grandezas|proporcao|grandezas-proporcionais/, 'proporcao'], [/sistema-internacional/, 'unidades']
];
const SERIES = /^(1|2|3|6|7|8|9)-ano$/;
const MARK = 'id="cenas-esp"';
let novas = 0, ja = 0, semFig = 0; const faltou = [], porCena = {};

function liga(dir, id) {
  const arq = fs.readdirSync(dir).filter(n => /^aula-1-.*\.html$/.test(n))[0];
  if (!arq) return false;
  const f = path.join(dir, arq); let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/<figure class="fig-ctx"([^>]*)>/);
  if (!m) { semFig++; return false; }
  let mudou = false;
  if (!/data-cena=/.test(m[0])) { h = h.replace(m[0], `<figure class="fig-ctx" data-cena="${id}"${m[1]}>`); mudou = true; }
  else if (!m[0].includes(`data-cena="${id}"`)) { h = h.replace(m[0], m[0].replace(/data-cena="[^"]*"/, `data-cena="${id}"`)); mudou = true; }
  if (!h.includes(MARK)) {
    const rel = path.relative(path.dirname(f), path.join(root, 'app', 'cenas.js')).split(path.sep).join('/');
    h = h.replace(/\s*$/, '\n') + `<script src="${rel}" ${MARK} defer></script>\n`; mudou = true;
  }
  porCena[id] = (porCena[id] || 0) + 1;
  if (mudou) { fs.writeFileSync(f, h, 'utf8'); novas++; } else ja++;
  return true;
}
for (const [pasta, id] of Object.entries(MAPA)) {
  const dir = path.join(root, 'aulas', pasta);
  if (!fs.existsSync(dir) || !liga(dir, id)) faltou.push(pasta);
}
// regras por tema nos demais módulos de Matemática
const aulasDir = path.join(root, 'aulas');
for (const serie of fs.readdirSync(aulasDir).filter(n => SERIES.test(n))) {
  for (const tri of fs.readdirSync(path.join(aulasDir, serie))) {
    const dt = path.join(aulasDir, serie, tri); if (!fs.statSync(dt).isDirectory()) continue;
    for (const mod of fs.readdirSync(dt)) {
      const dm = path.join(dt, mod); if (!fs.statSync(dm).isDirectory() || MAPA[serie + '/' + tri + '/' + mod]) continue;
      const r = REGRAS.find(x => x[0].test(mod)); if (r) liga(dm, r[1]);
    }
  }
}
console.log('cenas ligadas:', novas, '| já tinham:', ja, '| módulos sem figura de abertura:', semFig, '| cenas distintas:', Object.keys(porCena).length + (faltou.length ? ' | não achei: ' + faltou.join('; ') : ''));
