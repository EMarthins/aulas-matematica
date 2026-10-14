// Unidade v31 — Variação do perímetro e da área (aulas 66 e 67 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const { graf, amostra } = require('./graf.js');
const TRI = 2, DIR = 'variacao-do-perimetro-e-da-area', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v31', BRAND = 'Variação do perímetro e da área';

// ===================== AULA 66: perímetro linear, área quadrática =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 66', h1: 'Perímetro e área: <span style="color:var(--primary);">linear contra quadrática</span>',
  sub: 'Galileu notou que, quando uma forma cresce, seu volume aumenta mais depressa que sua superfície. O mesmo princípio vale no plano: ao ampliar uma figura, o perímetro cresce de um jeito e a área de outro.',
  badges: [['perímetro ∝ k'], ['área ∝ k²', 'growth'], ['razão de semelhança', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do chiqueiro à razão de semelhança.', [
  ['Um paradoxo', '1/4 da área não é 1/4 do perímetro', 'bulb'],
  ['Tabela', 'lado, perímetro e área', 'target'],
  ['Razão k', 'figuras semelhantes', 'chart'],
  ['Gráficos', 'reta para P e parábola para S', 'link'],
  ['Problemas', 'identificar o polígono e a escala', 'scale']
]));
a.push(objetivosSlide([
  'Investigar como <strong>perímetro</strong> e <strong>área</strong> de um polígono regular variam quando o <strong>lado</strong> muda.',
  'Aplicar a <strong>razão de semelhança</strong> $k$: medidas lineares na razão $k$ e áreas na razão $k^{2}$.',
  'Representar $P(x)$ e $S(x)$ em gráficos e identificar o <strong>polígono</strong> pela função.'
], 'Dica', 'Se uma figura é ampliada na razão $k$: <strong>comprimentos × $k$</strong>, <strong>áreas × $k^{2}$</strong>. Dobrar o lado quadruplica a área.', 'primary'));

a.push(sl('Para início de conversa', 'Metade da tela, um quarto da área', `
          ${lede('Um produtor tem $48$ m de tela para um <strong>chiqueiro quadrado</strong> e quer um galinheiro quadrado com <strong>um quarto da área</strong> dele. Será que basta um quarto da tela ($12$ m)? Calculemos: chiqueiro com lado $12$ m tem área $144$ m²; o galinheiro, com $36$ m², tem lado $6$ m e perímetro $24$ m.')}
          <div class="grid2" style="margin-top:6px;">
            ${G2.plot([{ pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: 'var(--growth-soft)', stroke: 'var(--growth)' }, { pts: [[14, 0], [20, 0], [20, 6], [14, 6]], fill: 'var(--primary-soft)' }], [[6, 6, '144 m²', 'var(--growth)', 'middle', 0, 4], [17, 3, '36 m²', 'var(--primary)', 'middle', 0, 4]], { w: 300, h: 150 })}
            ${mini('Reduzindo a <strong>área</strong> a $1 ÷ 4$, o perímetro do quadrado fica multiplicado por:', ['$1 ÷ 4$', '$1 ÷ 2$', '$1 ÷ 8$', 'não muda'], 1, 'Lado $12 → 6$ (metade): perímetro $48 → 24$. A área cai com o <strong>quadrado</strong> do fator; o perímetro, com o próprio fator.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · linear e quadrática', 'Comprimentos com k, áreas com k²', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em figuras <strong>semelhantes</strong> de razão $k$: lados, alturas, apótemas e <strong>perímetros</strong> mudam na razão $k$ (variação <strong>linear</strong>).</li>
                <li>As <strong>áreas</strong> mudam na razão $k^{2}$ (variação <strong>quadrática</strong>).</li>
                <li>Hexágono regular de lado $ℓ$: $P = 6ℓ$ e $S = {3ℓ^{2}√{3}|2}$: $P$ é função do 1º grau e $S$ do 2º grau em $ℓ$.</li>
                <li>Dobrou o lado ($k = 2$): perímetro $×2$ e área $×4$. Metade ($k = {1|2}$): perímetro $×{1|2}$ e área $×{1|4}$.</li>
              </ul>
            </div>
            ${W.box('Fator de escala k', W.row(W.rg('k66-k', 'Fator k', 0.25, 4, 0.25, 2, '×')) + W.svg('k66-s', '0 0 340 220', '320px') + W.txt('k66-r', 'Lado · perímetro · área: ') + W.hint('k66-h'))}
          </div>`.split('${3ℓ').join('$ {3ℓ'), { cls: '' }));

a.push(sl('Resumo visual', 'Tabela do hexágono regular', `
          <div class="grid2">
            ${tbl(['Lado ℓ', 'Perímetro P = 6ℓ', 'Área S = 3ℓ²√3 ÷ 2 (√3 = 1,7)'], [['1', '6', '2,55'], ['2', '12', '10,2'], ['3', '18', '22,95'], ['4', '24', '40,8']])}
            ${tbl(['Fator k', 'Lados e perímetro', 'Área'], [['$2$', '$×2$', '$×4$'], ['$3$', '$×3$', '$×9$'], ['$10$', '$×10$', '$×100$'], ['$0,5$', '$×0,5$', '$×0,25$']])}
          </div>
          <p class="hint" style="margin-top:8px;">Na tabela do hexágono, passar do lado $1$ para o $2$ dobra $P$ ($6 → 12$) e quadruplica $S$ ($2,55 → 10,2$).</p>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Gráficos de P(x) e S(x) do quadrado', 'Para um quadrado de lado $x$ (até $6$ m), construa a tabela de $P(x) = 4x$ e $S(x) = x^{2}$ e descreva os gráficos.', [
  ['Tabela', '$x = 1, 2, 3, 4, 5, 6$: $P = 4, 8, 12, 16, 20, 24$; $S = 1, 4, 9, 16, 25, 36$.'],
  ['Gráfico de P', 'Pontos alinhados: uma <strong>reta</strong> pela origem.'],
  ['Gráfico de S', 'Pontos sobre uma <strong>parábola</strong>: cresce cada vez mais depressa.']
], 'Em $x = 4$ as duas coincidem ($16$); para $x > 4$ a área passa o perímetro.'));
a.push(exemplo('Exemplo resolvido', 'Pentágono ampliado e reduzido', 'A área de um pentágono regular de lado $10$ cm é cerca de $172$ cm². Qual a área aproximada de um pentágono regular de lado $5$ cm?', [
  ['Fator', '$k = 5 ÷ 10 = {1|2}$.'.replace('${', '$ {')],
  ['Área', 'Multiplica por $k^{2} = {1|4}$: $172 ÷ 4 = 43$.'.replace('${', '$ {')]
], 'A área do pentágono menor é cerca de $43$ cm².', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quanto de tela?', 'Com $24$ m de tela se cerca um jardim quadrado. Com o <strong>dobro</strong> de tela, a área cercada é quantas vezes maior?', [
  ['Lado', 'Com $24$ m, lado $6$; com $48$ m, lado $12$ ($k = 2$).'],
  ['Área', '$36$ m² e $144$ m²: razão $4 = k^{2}$.']
], 'A área fica <strong>4 vezes</strong> maior.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Qual é o polígono?', 'Um polígono regular tem lado $4$ cm e perímetro $32$ cm. Quantos lados ele tem?', [
  ['Perímetro', '$P = n · ℓ$ ⇒ $32 = n · 4$.'],
  ['Lados', '$n = 8$: octógono.']
], 'É um octógono regular.', 'decay'));

a.push(pratique('Dobrando o lado', 'Dobrando o lado de um quadrado, a área:',
  ['dobra', 'triplica', 'quadruplica', 'fica igual'], 2, '$k = 2$ ⇒ área $× k^{2} = 4$. <strong>Alternativa C.</strong>'));
a.push(pratique('Triplicando', 'Um polígono é ampliado na razão $3$. Seu perímetro e sua área ficam multiplicados por:',
  ['$3$ e $3$', '$3$ e $6$', '$3$ e $9$', '$9$ e $9$'], 2, 'Perímetro $× k = 3$; área $× k^{2} = 9$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(pratique('Pentágono', 'A área de um pentágono regular de lado $10$ cm é $172$ cm². A de lado $20$ cm é aproximadamente:',
  ['$344$ cm²', '$516$ cm²', '$688$ cm²', '$1720$ cm²'], 2, '$k = 2$: área $× 4$: $172 · 4 = 688$ cm². <strong>Alternativa C.</strong>', '', 'decay'));
a.push(estiloEnem('Cerca e área', 'Um fazendeiro tem tela para cercar um terreno quadrado de $100$ m². Se ele conseguir o triplo de tela, a nova área quadrada cercada será de:',
  ['$300$ m²', '$600$ m²', '$900$ m²', '$1000$ m²', '$3000$ m²'], 2, 'Lado $10$ ⇒ $30$ ($k = 3$): área $900$ m² (ou $100 · 3^{2}$). <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a variação enganam', [
  ['Área proporcional ao lado', 'A área é proporcional ao <strong>quadrado</strong> do lado, não ao lado.'],
  ['Perímetro quadrático', 'O perímetro varia <strong>linearmente</strong> com $k$.'],
  ['Fatores diferentes por direção', 'Só vale $k^{2}$ se <strong>todas</strong> as medidas lineares mudam na mesma razão (figuras semelhantes).'],
  ['“Metade do perímetro, metade da área”', 'Metade do perímetro dá <strong>um quarto</strong> da área.']
]));
a.push(quiz([
  { q: 'Triplicando o lado de um quadrado, a área fica multiplicada por:', o: ['$3$', '$6$', '$9$', '$27$'], a: 2 },
  { q: 'Reduzindo à metade todas as medidas de uma figura, a área fica:', o: ['na metade', 'em um quarto', 'em um oitavo', 'igual'], a: 1 },
  { q: 'O gráfico de $P(x) = 4x$ é:', o: ['uma parábola', 'uma reta', 'uma hipérbole', 'uma circunferência'], a: 1 },
  { q: 'O gráfico de $S(x) = x^{2}$ é:', o: ['uma reta', 'uma parábola', 'uma senóide', 'constante'], a: 1 }
]));
a.push(fechamento([
  ['Linear', 'Lados, alturas, apótemas e perímetros na razão $k$.'],
  ['Quadrática', 'Áreas na razão $k^{2}$.'],
  ['Gráficos', '$P$ é reta e $S$ é parábola, em função do lado.']
], 'Perímetro e área não crescem juntos. Próxima aula: relacionar as duas variações em problemas.'));

// ===================== AULA 67: relacionar variações e escala =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 67', h1: 'Relacionando perímetro e área: <span style="color:var(--primary);">campos, plantas e escalas</span>',
  sub: 'As regras de futebol permitem campos de tamanhos diferentes. Comparar o menor e o maior revela, nos números, a diferença entre variação linear e variação quadrática. E o ENEM cobra essa ideia em plantas e escalas.',
  badges: [['razão dos perímetros'], ['razão das áreas', 'growth'], ['escala 1 : k', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do campo de futebol à planta baixa.', [
  ['Menor × maior', 'campos de dimensões diferentes', 'bulb'],
  ['Razões', 'perímetros e áreas', 'target'],
  ['Conclusão', 'k e k²', 'chart'],
  ['Escala', 'razão linear entre planta e realidade', 'link'],
  ['ENEM', 'achar a escala pela área', 'scale']
]));
b.push(objetivosSlide([
  'Calcular e comparar <strong>razões de perímetros e de áreas</strong> de figuras semelhantes.',
  'Interpretar a <strong>escala</strong> como razão linear e usar $k^{2}$ para áreas.',
  'Resolver problemas de <strong>planta baixa, mapa e maquete</strong>.'
], 'Dica', 'Em escala <strong>1 : k</strong>, comprimentos na planta são $1 ÷ k$ dos reais, mas <strong>áreas</strong> na planta são $1 ÷ k^{2}$ das reais.', 'primary'));

b.push(sl('Para início de conversa', 'O tamanho do campo de futebol', `
          ${lede('Para jogos amadores, o comprimento do campo pode ir de $90$ a $120$ m e a largura de $45$ a $90$ m. Imagine campos formados por <strong>dois quadrados lado a lado</strong>: o menor mede $90 × 45$ m e o maior, $120 × 60$ m. Comparemos perímetros e áreas.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['', 'Menor', 'Maior', 'Razão maior ÷ menor'], [['Dimensões', '$90 × 45$', '$120 × 60$', '${120|90} = {4|3}$'], ['Perímetro', '$270$ m', '$360$ m', '${360|270} = {4|3}$'], ['Área', '$4050$ m²', '$7200$ m²', '${7200|4050} = {16|9}$']].map(r => r.map(c => c.replace('${', '$ {'))))}
            ${mini('A razão de semelhança dos dois campos é $ {4|3}$. A razão entre as áreas é:'.replace('${', '$ {'), ['$ {4|3}$', '$ {8|6}$', '$ {16|9}$', '$ {12|9}$'].map(t => t), 2, 'Áreas na razão $k^{2} = ({4|3})^{2} = {16|9}$.'.replace('${', '$ {'))}
          </div>`, { cls: '' }));

b.push(sl('Teoria · escala', 'A escala é linear, a área é quadrática', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Escala 1 : k</strong> significa que $1$ unidade na planta representa $k$ unidades reais (razão linear).</li>
                <li>Áreas reais $= k^{2} ×$ áreas na planta. Para descobrir $k$ pela área: $k = √{{A_{real}|A_{planta}}}$.</li>
                <li>Cuidado com unidades: coloque planta e realidade na <strong>mesma unidade</strong> antes de dividir.</li>
              </ul>
            </div>
            ${W.box('Escala pela área', W.row(W.nm('e67-a', 'Área real (m²)', 48, 'any', 'min="0.1"'), W.nm('e67-w', 'Planta: largura (m)', 0.08, 'any', 'min="0.001"'), W.nm('e67-h', 'Planta: altura (m)', 0.06, 'any', 'min="0.001"')) + W.txt('e67-r', 'Área na planta: ') + W.txt('e67-k', 'Escala: ') + W.hint('e67-i'))}
          </div>`.replace('{{A_{real}|A_{planta}}}', '{ {A_{real}|A_{planta}} }'), { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'Planta baixa', 'Na planta de uma casa, uma sala de $48$ m² é desenhada como um retângulo de $0,08$ m por $0,06$ m. Qual a escala?', [
  ['Área na planta', '$0,08 · 0,06 = 0,0048$ m².'],
  ['Razão das áreas', '$48 ÷ 0,0048 = 10000 = k^{2}$.'],
  ['Escala', '$k = √{10000} = 100$.']
], 'A escala é $1 : 100$.'));
b.push(exemplo('Exemplo resolvido', 'Dobrar o perímetro', 'Um terreno quadrado tem $16$ m de perímetro. Qual o perímetro e qual a área de um terreno quadrado semelhante com o <strong>triplo</strong> do perímetro?', [
  ['Perímetro', '$3 · 16 = 48$ m ($k = 3$).'],
  ['Áreas', 'Original: lado $4$, área $16$. Novo: lado $12$, área $144 = 16 · 3^{2}$.']
], 'Perímetro $48$ m e área $144$ m² (nove vezes maior).', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Qual o polígono pela tabela?', 'Uma tabela dá o lado e o perímetro de um polígono regular: lado $5$ cm, perímetro $40$ cm. Qual o polígono?', [
  ['Equação', '$40 = n · 5$.'],
  ['Valor de n', '$n = 8$.']
], 'É um octógono regular.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Maquete', 'Uma maquete de um prédio está na escala $1 : 50$. A fachada real tem $200$ m². Qual a área da fachada na maquete?', [
  ['Razão das áreas', '$k^{2} = 50^{2} = 2500$.'],
  ['Maquete', '$200 ÷ 2500 = 0,08$ m².']
], 'A fachada na maquete tem $0,08$ m² ($800$ cm²).', 'decay'));

b.push(pratique('Razão das áreas', 'Dois campos semelhantes têm perímetros $270$ m e $360$ m. A razão entre suas áreas (maior ÷ menor) é:',
  ['$ {4|3}$', '$ {8|6}$', '$ {16|9}$', '$ {3|4}$'].map(t => t), 2, '$k = {360|270} = {4|3}$ e áreas $k^{2} = {16|9}$. <strong>Alternativa C.</strong>'.replace('${', '$ {')));
b.push(pratique('Escala', 'Uma sala de $24$ m² é desenhada com área de $0,015$ m². A escala é:',
  ['$1 : 24$', '$1 : 40$', '$1 : 60$', '$1 : 1600$'], 1, '$24 ÷ 0,015 = 1600 = k^{2}$ ⇒ $k = 40$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Polígono pela tabela', 'Um polígono regular tem lado $6$ cm e perímetro $54$ cm. Ele é um:',
  ['heptágono', 'octógono', 'eneágono', 'decágono'], 2, '$54 ÷ 6 = 9$ lados. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(estiloEnem('Planta de apartamento', 'Em uma planta, um quarto de $20$ m² aparece com $0,008$ m² de área. A escala dessa planta é:',
  ['$1 : 25$', '$1 : 50$', '$1 : 250$', '$1 : 500$', '$1 : 2500$'], 1, '$20 ÷ 0,008 = 2500 = k^{2}$ ⇒ $k = 50$: escala $1 : 50$. <strong>Alternativa B.</strong>', '', 'growth'));

b.push(armadilhas('Cuidados', 'Onde escalas e áreas enganam', [
  ['Usar a razão das áreas como escala', 'A escala é a raiz quadrada da razão das áreas: $k = √{A_{real} ÷ A_{planta}}$.'],
  ['Unidades diferentes', 'Converta cm, m e km para a <strong>mesma unidade</strong> antes de dividir.'],
  ['Escala invertida', '$1 : 50$ significa que o real é $50$ vezes maior que a planta.'],
  ['Figuras não semelhantes', '$k^{2}$ só vale quando a figura é ampliada <strong>por igual</strong> em todas as direções.']
]));
b.push(quiz([
  { q: 'Em escala $1 : 100$, uma área de $1$ m² na planta representa na realidade:', o: ['$100$ m²', '$1000$ m²', '$10000$ m²', '$100000$ m²'], a: 2 },
  { q: 'A razão entre os perímetros de duas figuras semelhantes é $3$. A das áreas é:', o: ['$3$', '$6$', '$9$', '$27$'], a: 2 },
  { q: 'Se a razão das áreas é $25$, a razão linear é:', o: ['$5$', '$12,5$', '$25$', '$625$'], a: 0 },
  { q: 'Escala $1 : k$ é uma razão:', o: ['linear', 'quadrática', 'cúbica', 'nenhuma'], a: 0 }
]));
b.push(fechamento([
  ['Linear e quadrática', 'Perímetros em $k$, áreas em $k^{2}$.'],
  ['Escala', '$1 : k$ é linear; a razão das áreas é $k^{2}$.'],
  ['Cuidado', 'Mesma unidade; figuras semelhantes.']
], 'Entender como medidas lineares e áreas variam evita muitos erros. Última aula da unidade: ladrilhamento do plano.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-linear-e-quadratica.html', html: K.deck({
  title: 'Perímetro e área: variação linear e quadrática — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 66 · Variação do perímetro e da área', slides: a,
  extra: WJS + BIND + G2.GJS + String.raw`
  bind(['k66-k'], function(){ var k = +$('k66-k').value; $('k66-kv').textContent = pt(k, 2); var l = 2 * k, svg = $('k66-s'), W = 340, H = 220; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    var f = 40, ox = 40, oy = H - 30, base = 2 * f; el('rect', {x: ox, y: oy - base, width: base, height: base, fill: 'var(--growth-soft)', stroke: 'var(--growth)', 'stroke-width': 2}, svg);
    var s = Math.min(l * f, 170); el('rect', {x: ox + base + 40, y: oy - s, width: s, height: s, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg);
    var t1 = el('text', {x: ox + base / 2, y: oy + 16, fill: 'var(--growth)', 'font-size': 12, 'font-weight': 700, 'text-anchor': 'middle'}, svg); t1.textContent = 'ℓ = 2';
    var t2 = el('text', {x: ox + base + 40 + s / 2, y: oy + 16, fill: 'var(--primary)', 'font-size': 12, 'font-weight': 700, 'text-anchor': 'middle'}, svg); t2.textContent = 'ℓ = ' + pt(l, 2);
    $('k66-r').textContent = pt(l, 2) + ' · ' + pt(4 * l, 2) + ' · ' + pt(l * l, 2); $('k66-h').textContent = 'Quadrado de lado 2 (P = 8, S = 4) ampliado em ' + pt(k, 2) + '×: perímetro ×' + pt(k, 2) + ' (= ' + pt(4 * l, 2) + ') e área ×' + pt(k * k, 3) + ' (= ' + pt(l * l, 2) + ').'; });`
}) });
pages.push({ out: BASE + 'aula-2-campos-plantas-e-escalas.html', html: K.deck({
  title: 'Perímetro, área e escala — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 67 · Campos, plantas e escalas', slides: b,
  extra: WJS + BIND + String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 4 : d}).replace('-', '−'); }
  bind(['e67-a', 'e67-w', 'e67-h'], function(){ var A = +$('e67-a').value, w = +$('e67-w').value, h = +$('e67-h').value; if(!(A > 0 && w > 0 && h > 0)){ $('e67-r').textContent = '—'; $('e67-k').textContent = '—'; return; }
    var Ap = w * h, k = Math.sqrt(A / Ap); $('e67-r').textContent = pt(Ap, 6) + ' m²'; $('e67-k').textContent = '1 : ' + pt(k, 2); $('e67-i').textContent = 'k² = ' + pt(A, 2) + ' ÷ ' + pt(Ap, 6) + ' = ' + pt(A / Ap, 2) + ' ⇒ k = ' + pt(k, 2) + '.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Variação do perímetro e da área', accent: 'growth', icon: 'bars',
  aulas: [['Aula 66', 'Perímetro e área: variação linear e quadrática', 'aula-1-linear-e-quadratica.html'], ['Aula 67', 'Campos, plantas e escalas', 'aula-2-campos-plantas-e-escalas.html']],
  pendente: true
}, pages };
