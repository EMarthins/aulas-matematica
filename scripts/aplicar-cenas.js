// Troca a figura de abertura GENÉRICA das aulas mais usadas (as aulas grátis) por uma cena específica e interativa (app/cenas.js).
// Idempotente: marca o <figure> com data-cena="<id>" e liga o script uma única vez. As cenas ficam em app/cenas.js / app/cenas2.js.
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
const MARK = 'id="cenas-esp"';
let novas = 0, ja = 0, faltou = [];
for (const [pasta, id] of Object.entries(MAPA)) {
  const dir = path.join(root, 'aulas', pasta);
  if (!fs.existsSync(dir)) { faltou.push(pasta); continue; }
  const arq = fs.readdirSync(dir).filter(n => /^aula-1-.*\.html$/.test(n))[0];
  if (!arq) { faltou.push(pasta); continue; }
  const f = path.join(dir, arq); let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/<figure class="fig-ctx"([^>]*)>/);
  if (!m) { faltou.push(pasta + ' (sem figura de abertura)'); continue; }
  let mudou = false;
  if (!/data-cena=/.test(m[0])) { h = h.replace(m[0], `<figure class="fig-ctx" data-cena="${id}"${m[1]}>`); mudou = true; }
  else if (!m[0].includes(`data-cena="${id}"`)) { h = h.replace(m[0], m[0].replace(/data-cena="[^"]*"/, `data-cena="${id}"`)); mudou = true; }
  if (!h.includes(MARK)) {
    const rel = path.relative(path.dirname(f), path.join(root, 'app', 'cenas.js')).split(path.sep).join('/');
    h = h.replace(/\s*$/, '\n') + `<script src="${rel}" ${MARK} defer></script>\n`; mudou = true;
  }
  if (mudou) { fs.writeFileSync(f, h, 'utf8'); novas++; } else ja++;
}
console.log('cenas ligadas:', novas, '| já tinham:', ja + (faltou.length ? ' | não achei: ' + faltou.join('; ') : ''));
