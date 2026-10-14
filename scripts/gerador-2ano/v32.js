// Unidade v32 — Ladrilhamento do plano (aula 68 da 2ª série, 2º trimestre) — só a aula; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'ladrilhamento-do-plano', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v32', BRAND = 'Ladrilhamento do plano';
const reg = (n, R = 1, rot = Math.PI / 2) => Array.from({ length: n }, (_, i) => { const t = rot + 2 * Math.PI * i / n; return [R * Math.cos(t), R * Math.sin(t)]; });

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 68', h1: 'Ladrilhamento do plano: <span style="color:var(--primary);">cobrir sem sobrar nem sobrepor</span>',
  sub: 'M. C. Escher, artista holandês, encheu o plano de peixes, pássaros e lagartos que se encaixam sem deixar vazios. Na matemática, o preenchimento do plano com polígonos, sem sobreposição e sem lacunas, chama-se ladrilhamento.',
  badges: [['soma 360° no vértice'], ['ângulo interno', 'growth'], ['mosaicos', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do vértice ao mosaico.', [
  ['O que é', 'plano coberto sem lacunas e sem sobreposição', 'bulb'],
  ['A regra', 'em cada vértice, os ângulos somam 360°', 'target'],
  ['Ângulo interno', '180° · (n − 2) ÷ n', 'chart'],
  ['Regulares puros', 'triângulo, quadrado e hexágono', 'link'],
  ['Mosaicos', 'combinando polígonos de mesmo lado', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer a <strong>condição de ladrilhamento</strong>: em cada vértice, a soma dos ângulos dos polígonos é $360°$.',
  'Calcular o <strong>ângulo interno</strong> de polígonos regulares e decidir se um polígono <strong>ladrilha sozinho</strong>.',
  'Resolver problemas de <strong>mosaicos</strong> com dois ou três tipos de polígono e de peças não regulares (losangos, por exemplo).'
], 'Dica', 'O único teste de ladrilhamento em um vértice é a <strong>soma dos ângulos igual a $360°$</strong>. Calcule o ângulo interno de cada peça e some.', 'primary'));

a.push(sl('Para início de conversa', 'Quem foi Escher?', `
          ${lede('Maurits Cornelis Escher (1898–1972) criou obras que cobrem o plano com figuras iguais que se encaixam perfeitamente, como peixes, aves e lagartos. Por trás de cada obra há matemática: os <strong>vértices</strong> onde as peças se encontram precisam <strong>fechar uma volta de $360°$</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: reg(4, 1.0, Math.PI / 4), fill: 'var(--primary-soft)' }, { pts: reg(4, 1.0, Math.PI / 4).map(p => [p[0] + 1.414, p[1]]), fill: 'var(--growth-soft)', stroke: 'var(--growth)' }, { pts: reg(4, 1.0, Math.PI / 4).map(p => [p[0], p[1] + 1.414]), fill: 'var(--growth-soft)', stroke: 'var(--growth)' }, { pts: reg(4, 1.0, Math.PI / 4).map(p => [p[0] + 1.414, p[1] + 1.414]), fill: 'var(--primary-soft)' }], [], { w: 220, h: 170 })}
            ${mini('Em um piso de quadrados, quantos quadrados se encontram em cada vértice?', ['$3$', '$4$', '$5$', '$6$'], 1, 'Cada quadrado tem ângulo $90°$ e $4 · 90° = 360°$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · a condição', 'Em cada vértice, 360°', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Ladrilhamento (pavimentação) do plano:</strong> preenchimento do plano com polígonos <strong>sem sobreposição e sem espaços vazios</strong>.</li>
                <li><strong>Condição:</strong> em cada vértice, a soma dos ângulos internos das peças que ali se encontram é $360°$.</li>
                <li><strong>Ângulo interno</strong> do polígono regular de $n$ lados: $β = {180° · (n − 2)|n}$ (triângulo $60°$, quadrado $90°$, pentágono $108°$, hexágono $120°$, octógono $135°$, dodecágono $150°$).</li>
                <li><strong>Sozinho:</strong> um polígono regular ladrilha se $360° ÷ β$ for <strong>inteiro</strong>: triângulo ($6$), quadrado ($4$) e hexágono ($3$).</li>
              </ul>
            </div>
            ${W.box('Teste um vértice', W.row(W.nm('l68-a', 'Polígono 1 (lados)', 12, 1, 'min="0" max="20"'), W.nm('l68-b', 'Polígono 2 (lados)', 6, 1, 'min="0" max="20"'), W.nm('l68-c', 'Polígono 3 (lados)', 4, 1, 'min="0" max="20"')) + W.svg('l68-s', '0 0 340 220', '300px') + W.txt('l68-r', 'Soma dos ângulos: ') + W.hint('l68-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Ângulos internos e o teste de 360°', `
          <div class="grid2">
            ${tbl(['Polígono', 'n', 'Interno', '360° ÷ interno'], [['Triângulo', '$3$', '$60°$', '$6$ ✔'], ['Quadrado', '$4$', '$90°$', '$4$ ✔'], ['Pentágono', '$5$', '$108°$', '$3,33$ ✘'], ['Hexágono', '$6$', '$120°$', '$3$ ✔'], ['Octógono', '$8$', '$135°$', '$2,67$ ✘'], ['Dodecágono', '$12$', '$150°$', '$2,4$ ✘']])}
            <div>
              ${tbl(['Mosaico (em cada vértice)', 'Soma'], [['Quadrado + 2 octógonos', '$90° + 2 · 135° = 360°$'], ['Dodecágono + hexágono + quadrado', '$150° + 120° + 90° = 360°$'], ['2 dodecágonos + triângulo', '$2 · 150° + 60° = 360°$']])}
              <p class="hint" style="margin-top:8px;">Pentágonos e octógonos <strong>sozinhos</strong> não fecham $360°$, mas combinados com outros polígonos de <strong>mesmo lado</strong> podem fechar.</p>
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'O octógono sozinho falha', 'Podemos ladrilhar o plano só com octógonos regulares?', [
  ['Ângulo interno', '$β = {180° · 6|8} = 135°$.'],
  ['Teste', '$360° ÷ 135° ≈ 2,67$: com $2$ octógonos sobram $90°$; com $3$ passam de $360°$.'],
  ['Conclusão', 'Não fecha. Os $90°$ que sobram são o ângulo do <strong>quadrado</strong>: octógonos e quadrados fecham o plano.']
].map(r => [r[0], r[1].replace('${', '$ {')]), 'Octógonos sozinhos não ladrilham, mas octógonos com quadrados sim.'));
a.push(exemplo('Exemplo resolvido', 'O terceiro polígono do mosaico', 'Em um mosaico, em cada vértice se encontram exatamente 1 dodecágono, 1 hexágono e 1 peça de um terceiro polígono regular (todos de mesmo lado). Qual é o terceiro polígono?', [
  ['Dodecágono', 'Ângulo externo $360° ÷ 12 = 30°$ ⇒ interno $180° − 30° = 150°$.'],
  ['Hexágono', 'Interno $120°$.'],
  ['Terceiro ângulo', '$360° − 150° − 120° = 90°$.']
], 'O polígono de ângulo interno $90°$ é o <strong>quadrado</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Pedras em forma de losango', 'Uma praça será calçada com pedras em forma de losango de ângulos $60°$ e $120°$. Em um ponto focal só os vértices de $60°$ se encontram. Quantas pedras fecham o plano em torno dele?', [
  ['Condição', 'Cada pedra contribui com $60°$ no ponto focal.'],
  ['Quantidade', '$360° ÷ 60° = 6$ pedras.']
], 'São necessárias $6$ pedras.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A lacuna do pentágono', 'Um artista une $3$ pentágonos regulares em um vértice e sobra uma lacuna. Que ângulo ela tem? Qual losango a preenche?', [
  ['Soma dos pentágonos', '$3 · 108° = 324°$.'],
  ['Lacuna', '$360° − 324° = 36°$.'],
  ['Losango', 'Ângulos opostos iguais e consecutivos suplementares: $36°$ e $180° − 36° = 144°$.']
], 'A lacuna é de $36°$; o losango tem ângulos de $36°$ e $144°$.', 'decay'));

a.push(pratique('Ângulo interno', 'O ângulo interno do decágono regular é:',
  ['$120°$', '$135°$', '$144°$', '$150°$'], 2, '$180° · 8 ÷ 10 = 144°$. <strong>Alternativa C.</strong>'));
a.push(pratique('Pode ladrilhar?', 'Qual polígono regular, <strong>sozinho</strong>, ladrilha o plano?',
  ['pentágono', 'octógono', 'hexágono', 'decágono'], 2, 'O hexágono tem $120°$ e $360° ÷ 120° = 3$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Mosaico quadrado + triângulos', 'Em um mosaico, em cada vértice há $2$ quadrados e $x$ triângulos equiláteros. Quantos triângulos?',
  ['$1$', '$2$', '$3$', '$4$'], 2, '$2 · 90° + x · 60° = 360°$ ⇒ $x = 3$. <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Piso de cozinha', 'Um piso usa quadrados e octógonos regulares de mesmo lado. Em cada vértice há $1$ quadrado e $2$ octógonos. A soma dos ângulos em torno do vértice é:',
  ['$270°$', '$315°$', '$360°$', '$405°$', '$450°$'], 2, '$90° + 2 · 135° = 360°$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o ladrilhamento engana', [
  ['Usar o ângulo central no lugar do interno', 'O que importa no vértice é o <strong>ângulo interno</strong> da peça.'],
  ['Misturar lados diferentes', 'Para encaixar, as peças precisam ter <strong>lados de mesma medida</strong>.'],
  ['Só testar uma soma', 'Em um mosaico, <strong>todos os vértices</strong> precisam fechar $360°$.'],
  ['Supor que pentágono ladrilha', '$360° ÷ 108°$ não é inteiro: o pentágono regular <strong>não</strong> ladrilha sozinho.']
]));
a.push(quiz([
  { q: 'Em cada vértice de um ladrilhamento, a soma dos ângulos é:', o: ['$180°$', '$270°$', '$360°$', '$540°$'], a: 2 },
  { q: 'O ângulo interno do hexágono regular é:', o: ['$60°$', '$90°$', '$108°$', '$120°$'], a: 3 },
  { q: 'Qual combinação fecha $360°$ em um vértice?', o: ['$2$ pentágonos', '$1$ quadrado e $2$ octógonos', '$3$ octógonos', '$2$ hexágonos e $1$ pentágono'], a: 1 },
  { q: 'Quantos triângulos equiláteros se encontram em um vértice de um piso só de triângulos?', o: ['$4$', '$5$', '$6$', '$8$'], a: 2 }
]));
a.push(fechamento([
  ['Regra', 'Em cada vértice, a soma dos ângulos internos é $360°$.'],
  ['Ângulo interno', '$180° · (n − 2) ÷ n$; sozinho ladrilha o que dá $360° ÷ β$ inteiro (triângulo, quadrado, hexágono).'],
  ['Mosaicos', 'Combine polígonos de mesmo lado cujos ângulos somem $360°$.']
], 'Fechamos a geometria plana do trimestre com os mosaicos. Falta a retomada de álgebra e progressões.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-ladrilhamento.html', html: K.deck({
  title: 'Ladrilhamento do plano — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 68 · Ladrilhamento do plano', slides: a,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}).replace('-', '−'); }
  var COR = ['var(--primary)', 'var(--growth)', 'var(--decay)'];
  bind(['l68-a', 'l68-b', 'l68-c'], function(){ var ns = [+$('l68-a').value, +$('l68-b').value, +$('l68-c').value].map(function(n){ return n >= 3 ? Math.round(n) : 0; }), svg = $('l68-s'), W = 340, H = 220, cx = W / 2, cy = H / 2, R = 88; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var ang = ns.map(function(n){ return n ? 180 * (n - 2) / n : 0; }), soma = ang.reduce(function(s, a){ return s + a; }, 0), t0 = -90, i;
    el('circle', {cx: cx, cy: cy, r: R, fill: 'var(--surface)', stroke: 'var(--line-strong)', 'stroke-width': 1.4}, svg);
    for(i = 0; i < 3; i++){ if(!ang[i]) continue; var a0 = t0 * Math.PI / 180, a1 = (t0 + Math.min(ang[i], 360 - (t0 + 90))) * Math.PI / 180, big = (a1 - a0) > Math.PI ? 1 : 0;
      el('path', {d: 'M' + cx + ',' + cy + ' L' + (cx + R * Math.cos(a0)) + ',' + (cy + R * Math.sin(a0)) + ' A' + R + ',' + R + ' 0 ' + big + ' 1 ' + (cx + R * Math.cos(a1)) + ',' + (cy + R * Math.sin(a1)) + ' Z', fill: COR[i], 'fill-opacity': 0.28, stroke: COR[i], 'stroke-width': 2}, svg);
      var am = (a0 + a1) / 2, tx = el('text', {x: cx + R * 0.62 * Math.cos(am), y: cy + R * 0.62 * Math.sin(am) + 4, fill: 'var(--ink)', 'font-size': 12, 'font-weight': 700, 'text-anchor': 'middle'}, svg); tx.textContent = ns[i] + ' lados: ' + pt(ang[i], 1) + '°'; t0 += ang[i]; }
    $('l68-r').textContent = pt(soma, 2) + '°'; var d = 360 - soma;
    $('l68-h').textContent = Math.abs(d) < 1e-6 ? 'Fecha exatamente 360°: é possível formar um vértice de ladrilhamento.' : d > 0 ? 'Faltam ' + pt(d, 2) + '° para fechar a volta (sobra um espaço vazio).' : 'Passa ' + pt(-d, 2) + '° de 360°: as peças se sobreporiam.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Ladrilhamento do plano', accent: 'decay', icon: 'grid',
  aulas: [['Aula 68', 'Ladrilhamento do plano: mosaicos e a regra dos 360°', 'aula-1-ladrilhamento.html']],
  pendente: true
}, pages };
