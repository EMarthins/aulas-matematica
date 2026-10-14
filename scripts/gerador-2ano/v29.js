// Unidade v29 — Problemas de área com círculos e figuras compostas (aulas 61, 62 e 63 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W } = K;
const G2 = require('./geom.js');
const TRI = 2, DIR = 'problemas-de-area-com-circulos', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v29', BRAND = 'Problemas de área com círculos';
const UTIL = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 2 : d}).replace('-', '−'); }
`;

// ===================== AULA 61: coroa e corda tangente =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 61', h1: 'Problemas com círculos: <span style="color:var(--primary);">nem sempre precisamos de todos os dados</span>',
  sub: 'Por volta de 240 a.C., Eratóstenes calculou a circunferência da Terra com uma estaca, uma sombra e a distância entre duas cidades. Nesta aula, problemas de círculos e coroas em que um truque de geometria dispensa dados.',
  badges: [['coroa por Pitágoras'], ['corda tangente', 'growth'], ['Eratóstenes', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Dos conceitos básicos à coroa sem medir os raios.', [
  ['Eratóstenes', 'um arco de 7,2° mede a Terra', 'bulb'],
  ['Revisão', 'disco, coroa, setor e segmento', 'target'],
  ['A calçada do prédio', 'raio maior por Pitágoras', 'chart'],
  ['A corda tangente', 'R² − r² = (corda ÷ 2)²', 'link'],
  ['Problemas', 'piscinas, pneus e passeios', 'scale']
]));
a.push(objetivosSlide([
  'Resolver problemas com <strong>disco, coroa, setor e segmento</strong> circulares.',
  'Usar o <strong>teorema de Pitágoras</strong> para obter $R^{2} − r^{2}$ sem conhecer os raios.',
  'Reconhecer quando <strong>faltam dados mas a resposta ainda existe</strong>.'
], 'Dica', 'Em uma coroa, a fórmula pede $R^{2} − r^{2}$. Se uma corda tangente à circunferência menor mede $c$, o triângulo retângulo dá $R^{2} − r^{2} = ({c|2})^{2}$.', 'primary'));

a.push(sl('Para início de conversa', 'Como Eratóstenes mediu a Terra', `
          ${lede('Em Siena, ao meio-dia, os raios do Sol iluminavam o fundo de um poço (chegavam na vertical). No mesmo instante, em Alexandria, uma estaca projetava sombra com ângulo de aproximadamente $7,2°$, que é $1 ÷ 50$ de volta. A distância entre as cidades era de cerca de $800$ km.')}
          <div class="grid2" style="margin-top:6px;">
            ${callout('A conta', 'Se $7,2°$ correspondem a $800$ km, a volta inteira ($360°$) vale $50 · 800 = 40000$ km.', 'success')}
            ${mini('Se o arco entre duas cidades de $9°$ mede $1000$ km, a circunferência da Terra seria:', ['$9000$ km', '$20000$ km', '$40000$ km', '$80000$ km'], 2, '$9°$ é $1 ÷ 40$ de volta: $40 · 1000 = 40000$ km.')}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'As quatro figuras circulares', `
          ${tbl(['Figura', 'Área'], [['Disco', '$πr^{2}$'], ['Coroa circular', '$π(R^{2} − r^{2})$'], ['Setor circular', '${θ|360} · πr^{2}$'.replace('${', '$ {')], ['Segmento circular', '${r^{2}|2}(α − sen α)$'.replace('${', '$ {')]])}
          <p class="hint" style="margin-top:8px;">Em setor e segmento o ângulo $α$ da fórmula com $α − sen α$ está em <strong>radianos</strong>.</p>`, { cls: '' }));

a.push(sl('Teoria · a corda tangente', 'Coroa sem os raios', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Uma <strong>corda</strong> do círculo maior, <strong>tangente</strong> ao menor, tem seu ponto médio no ponto de tangência.</li>
                <li>O raio $r$ do círculo menor é <strong>perpendicular</strong> à corda no ponto de tangência.</li>
                <li>Pelo triângulo retângulo de catetos $r$ e $ {c|2}$ e hipotenusa $R$: $R^{2} = r^{2} + ({c|2})^{2}$, logo $R^{2} − r^{2} = ({c|2})^{2}$.</li>
                <li><strong>Resultado:</strong> $A_{coroa} = π · ({c|2})^{2}$: depende só da corda!</li>
              </ul>
            </div>
            ${W.box('Corda tangente', W.row(W.nm('c61-c', 'Corda c (m)', 16, 'any', 'min="0.1"'), W.nm('c61-r', 'Raio interno r (só para o desenho)', 6, 'any', 'min="0.5"')) + W.svg('c61-s', '0 0 340 220', '320px') + W.txt('c61-a', 'Área da coroa: ') + W.hint('c61-h'))}
          </div>`.replace('${c|2}', '$ {c|2}'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'A calçada do prédio redondo', 'Uma calçada circular contorna um prédio redondo de $16$ m de diâmetro. Uma barra de ferro de $6$ m, encostada na parede (tangente), vai da parede até a borda externa da calçada. Qual a área da calçada? (use $π = 3$)', [
  ['Raio menor', '$r = 16 ÷ 2 = 8$ m.'],
  ['Raio maior (Pitágoras)', '$R^{2} = 8^{2} + 6^{2} = 100$ ⇒ $R = 10$ m.'.replace('${', '$ {')],
  ['Coroa', '$A = 3 · (100 − 64) = 3 · 36 = 108$ m².']
], 'A calçada tem $108$ m².'));
a.push(exemplo('Exemplo resolvido', 'Sem conhecer os raios', 'Um passeio circular contorna um chafariz concêntrico. Uma trena tangente ao chafariz mede $20$ m entre dois pontos da borda externa do passeio. Qual a área do passeio?', [
  ['Corda tangente', 'Metade da corda: $20 ÷ 2 = 10$ m.'],
  ['Diferença dos quadrados', '$R^{2} − r^{2} = 10^{2} = 100$.'],
  ['Área', '$A = π · 100 = 100π$ m².']
], 'O passeio tem $100π ≈ 314$ m², sem precisar dos raios.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Piscina de três setores', 'Uma piscina é formada por três setores circulares idênticos de $60°$ e raio $R$ (natural). Ela deve ocupar menos que o retângulo existente de $50$ m × $12$ m. Qual o maior $R$? (use $π = 3$)', [
  ['Área da piscina', 'Três setores de $60°$ somam $180°$: $ {1|2} · π R^{2} = 1,5 R^{2}$.'.replace('${', '$ {')],
  ['Condição', '$1,5 R^{2} < 600$ ⇒ $R^{2} < 400$ ⇒ $R < 20$.'],
  ['R natural', 'O maior natural é $R = 19$.']
], 'O maior raio possível é $19$ m.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'A faixa dos pneus', 'Um fazendeiro pinta, só por fora, os $4$ pneus de um trator: cada pneu tem raio $0,5$ m e $30$ cm de largura. A tinta custa R$ 5,00 por m². Qual o gasto? (use $π = 3,1$)', [
  ['Faixa de um pneu', 'Abrindo a faixa, é um retângulo de comprimento $2πr$ e largura $0,3$: $2 · 3,1 · 0,5 · 0,3 = 0,93$ m².'],
  ['Quatro pneus', '$4 · 0,93 = 3,72$ m².'],
  ['Custo', '$3,72 · 5 = 18,60$: R$ 18,60.']
], 'O gasto é de R$ 18,60.', 'decay'));

a.push(pratique('Eratóstenes', 'Se um arco de $12°$ mede $500$ km, a circunferência do planeta seria:',
  ['$6000$ km', '$15000$ km', '$30000$ km', '$42000$ km'], 1, '$360° ÷ 12° = 30$ arcos iguais: $30 · 500 = 15000$ km. <strong>Alternativa B.</strong>', '', 'primary'));
a.push(pratique('Coroa pela corda', 'Em uma coroa circular, uma corda de $12$ m tangente ao círculo menor tem extremos no círculo maior. A área da coroa é: (use $π = 3$)',
  ['$36$ m²', '$108$ m²', '$144$ m²', '$432$ m²'], 1, 'Metade da corda: $6$. $A = π · 6^{2} = 3 · 36 = 108$ m². <strong>Alternativa B.</strong>', '', 'growth'));
a.push(pratique('Calçada', 'Um canteiro circular de $6$ m de raio é cercado por uma calçada de $2$ m de largura. A área da calçada é: (use $π = 3$)',
  ['$48$ m²', '$84$ m²', '$96$ m²', '$192$ m²'], 1, '$R = 6 + 2 = 8$: $3 · (64 − 36) = 3 · 28 = 84$ m². <strong>Alternativa B.</strong>', '', 'decay'));
a.push(estiloEnem('Pátio circular', 'Um pátio tem a forma de uma coroa circular. Uma corda de $30$ m, tangente ao círculo interno, liga dois pontos do contorno externo. Usando $π = 3$, a área do pátio, em m², é:',
  ['$225$', '$450$', '$675$', '$900$', '$2700$'], 2, 'Metade da corda: $15$; $A = 3 · 225 = 675$ m². <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as coroas e cordas enganam', [
  ['Usar a corda inteira', 'No triângulo, o cateto é <strong>metade</strong> da corda.'],
  ['Subtrair os raios em vez dos quadrados', 'A coroa é $π(R^{2} − r^{2})$, não $π(R − r)^{2}$.'],
  ['Achar que faltam dados', 'Muitas vezes só $R^{2} − r^{2}$ importa, e ele aparece pelo teorema de Pitágoras.'],
  ['Tangência', 'A tangente é <strong>perpendicular</strong> ao raio no ponto de contato.']
]));
a.push(quiz([
  { q: 'A corda tangente ao círculo menor de uma coroa mede $2c$. A coroa tem área:', o: ['$πc$', '$πc^{2}$', '$2πc$', '$4πc^{2}$'], a: 1 },
  { q: 'A distância da Terra em que $1 ÷ 50$ de volta mede $800$ km indica circunferência de:', o: ['$16000$ km', '$40000$ km', '$80000$ km', '$4000$ km'], a: 1 },
  { q: 'Três setores idênticos de $60°$ formam:', o: ['um quarto do disco', 'meio disco', 'o disco inteiro', 'um terço do disco'], a: 1 },
  { q: 'A área da coroa depende dos raios por:', o: ['$R − r$', '$R^{2} − r^{2}$', '$R + r$', '$R · r$'], a: 1 }
]));
a.push(fechamento([
  ['Corda tangente', '$A_{coroa} = π · ({c|2})^{2}$.'.replace('${', '$ {')],
  ['Pitágoras', '$R^{2} = r^{2} + ({c|2})^{2}$ dá a diferença dos quadrados.'.replace('${', '$ {')],
  ['Estratégia', 'Escolha as figuras, marque os dados e confira a unidade.']
], 'Alguns problemas dispensam dados que parecem essenciais. Próxima aula: figuras compostas por círculos e polígonos.'));

// ===================== AULA 62: compor e subtrair =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 62', h1: 'Dividir para conquistar: <span style="color:var(--primary);">figuras compostas com círculos</span>',
  sub: 'Em uma estampa de azulejo, círculos e quadrados se encontram. Para calcular a área colorida, dividimos a figura em partes conhecidas e somamos ou subtraímos.',
  badges: [['quadrado − setores'], ['lente = 2 segmentos', 'growth'], ['somar ou subtrair', 'decay']], color: 'primary'
}));
b.push(roteiroSlide('Do desenho às partes conhecidas.', [
  ['Identificar', 'quais figuras formam o desenho', 'bulb'],
  ['Marcar raios', 'ligar centros e pontos de contato', 'target'],
  ['Subtrair', 'quadrado menos setores', 'chart'],
  ['Lente', 'dois segmentos circulares', 'link'],
  ['Conferir', 'a área faz sentido?', 'scale']
]));
b.push(objetivosSlide([
  '<strong>Decompor</strong> uma figura composta em polígonos, setores e segmentos.',
  'Calcular áreas por <strong>subtração</strong> (quadrado menos partes circulares).',
  'Calcular a área da <strong>lente</strong> (interseção de dois círculos).'
], 'Dica', 'Marque os <strong>raios</strong> e os <strong>centros</strong> no desenho: muitas vezes eles formam triângulos equiláteros ou retângulos que revelam os ângulos.', 'primary'));

b.push(sl('Para início de conversa', 'A estampa do azulejo', `
          ${lede('Uma estampa de azulejo é um quadrado de $12$ cm de lado, com um quarto de círculo de raio $6$ cm em cada vértice. A região central que sobra será pintada de dourado. Qual a área dourada?')}
          <div class="grid2" style="margin-top:6px;">
            <svg viewBox="0 0 240 240" style="width:100%;max-width:230px;height:auto;display:block;margin:6px auto;" role="img" aria-hidden="true"><rect x="20" y="20" width="200" height="200" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="2.4"/><path d="M20,20 L20,120 A100,100 0 0 0 120,20 Z" fill="none"/><g fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.2"><path d="M20,20 L120,20 A100,100 0 0 1 20,120 Z"/><path d="M220,20 L220,120 A100,100 0 0 1 120,20 Z"/><path d="M220,220 L120,220 A100,100 0 0 1 220,120 Z"/><path d="M20,220 L20,120 A100,100 0 0 1 120,220 Z"/></g></svg>
            ${mini('Os $4$ quartos de círculo, juntos, equivalem a:', ['meio círculo', 'um círculo inteiro', 'dois círculos', 'um quarto de círculo'], 1, 'Quatro quartos de círculo de mesmo raio formam <strong>um círculo inteiro</strong> de raio $6$.')}
          </div>`, { cls: '' }));

b.push(sl('Teoria · estratégia', 'Subtrair as partes do quadrado', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1. Áreas dos setores:</strong> quatro setores de $90°$ e raio $6$ somam $4 · {1|4} · π · 6^{2} = 36π$.</li>
                <li><strong>2. Área do quadrado:</strong> $12^{2} = 144$.</li>
                <li><strong>3. Região central:</strong> $144 − 36π$ (com $π = 3,14$: $144 − 113,04 = 30,96$ cm²).</li>
                <li>Na <strong>lente</strong> (dois círculos de raio $r$ com o centro de cada um sobre a borda do outro), os centros e os pontos de interseção formam <strong>dois triângulos equiláteros</strong>: cada segmento tem ângulo $120°$.</li>
                <li>Área da lente: $2 · {r^{2}|2}({2π|3} − sen 120°) = r^{2}({2π|3} − {√{3}|2})$.</li>
              </ul>
            </div>
            ${W.box('Lente de dois círculos', W.row(W.nm('l62-r', 'Raio r (cm)', 4, 'any', 'min="0.1"')) + W.svg('l62-s', '0 0 340 200', '320px') + W.txt('l62-a', 'Área da lente: ') + W.hint('l62-h'))}
          </div>`.replace('${r^{2}|2}', '$ {r^{2}|2}'), { cls: '' }));

b.push(exemplo('Exemplo resolvido', 'A região dourada', 'No azulejo do início ($12$ cm de lado, quartos de círculo de raio $6$ cm nos vértices), qual a área dourada? (use $π = 3,14$)', [
  ['Os quatro setores', '$4 · {1|4} · 3,14 · 36 = 113,04$ cm².'.replace('${', '$ {')],
  ['O quadrado', '$12 · 12 = 144$ cm².'],
  ['Região central', '$144 − 113,04 = 30,96$ cm².']
], 'A região dourada tem $30,96$ cm².'));
b.push(exemplo('Exemplo resolvido', 'A lente', 'Dois círculos de raio $4$ cm têm o centro de cada um sobre a borda do outro. Qual a área da região comum (lente)? (use $π = 3$ e $√{3} = 1,7$)', [
  ['Triângulos', 'Os centros e as interseções formam dois triângulos equiláteros de lado $4$: cada segmento tem ângulo $120°$.'],
  ['Um segmento', '${4^{2}|2}({2π|3} − {√{3}|2}) = 8 · (2 − 0,85) = 9,2$.'.replace('${', '$ {')],
  ['Lente', '$2 · 9,2 = 18,4$ cm².']
], 'A lente tem cerca de $18,4$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Placa com semicírculo', 'Uma placa tem a forma de um quadrado de $30$ cm de lado com um semicírculo de diâmetro $30$ cm sobre um dos lados. Qual a área? (use $π = 3,14$)', [
  ['Quadrado', '$30 · 30 = 900$ cm².'],
  ['Semicírculo', 'Raio $15$: ${π · 225|2} = 353,25$ cm².'.replace('${', '$ {')],
  ['Total', '$900 + 353,25 = 1253,25$ cm².']
], 'A área da placa é $1253,25$ cm².', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Dez placas', 'Qual a área total de $8$ placas como a anterior, para pintar? (use o resultado: $1253,25$ cm² cada)', [
  ['Multiplicar', '$8 · 1253,25 = 10026$ cm².']
], 'São $10026$ cm² (cerca de $1$ m²).', 'decay'));

b.push(pratique('Quadrado e setores', 'Em um quadrado de lado $10$ cm há um quarto de círculo de raio $10$ cm com centro em um vértice. A área do quadrado fora do setor é: (use $π = 3,14$)',
  ['$21,5$ cm²', '$78,5$ cm²', '$100$ cm²', '$178,5$ cm²'], 0, '$100 − {1|4} · 3,14 · 100 = 100 − 78,5 = 21,5$ cm². <strong>Alternativa A.</strong>'.replace('${', '$ {')));
b.push(pratique('Semicírculo', 'Um semicírculo tem diâmetro $20$ cm. Sua área é: (use $π = 3,14$)',
  ['$31,4$ cm²', '$157$ cm²', '$314$ cm²', '$628$ cm²'], 1, '$r = 10$: ${3,14 · 100|2} = 157$ cm². <strong>Alternativa B.</strong>'.replace('${', '$ {'), '', 'growth'));
b.push(pratique('Triângulos na lente', 'Na lente de dois círculos de raio $r$ (centro de cada um na borda do outro), o ângulo central de cada segmento é:',
  ['$60°$', '$90°$', '$120°$', '$180°$'], 2, 'Os centros e as interseções formam dois triângulos equiláteros: $60° + 60° = 120°$. <strong>Alternativa C.</strong>', '', 'decay'));
b.push(estiloEnem('Logotipo', 'Um logotipo é um quadrado de $20$ cm de lado com um círculo inscrito. A área do quadrado que fica fora do círculo é, em cm²: (use $π = 3$)',
  ['$25$', '$100$', '$300$', '$400$', '$100π$'], 1, 'Quadrado: $400$; círculo de raio $10$: $3 · 100 = 300$; diferença $100$ cm². <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as figuras compostas enganam', [
  ['Esquecer uma parte', 'Nomeie cada parte e confirme que todas entraram na soma ou na subtração.'],
  ['Subtrair a figura errada', 'Defina bem a região pedida: o que é “dentro” e o que é “fora”.'],
  ['Setor com ângulo errado', 'Quarto de círculo é $90°$; semicírculo é $180°$.'],
  ['Segmento sem radianos', '$α − sen α$ exige $α$ em radianos: $120° = {2π|3}$.'.replace('${', '$ {')]
]));
b.push(quiz([
  { q: 'Quatro quartos de círculo de raio $r$ somam:', o: ['$πr^{2} ÷ 4$', '$πr^{2}$', '$2πr^{2}$', '$4πr^{2}$'], a: 1 },
  { q: 'A área do semicírculo de raio $r$ é:', o: ['$πr^{2}$', '$πr^{2} ÷ 2$', '$2πr$', '$πr$'], a: 1 },
  { q: 'Na lente, o ângulo central de cada segmento é:', o: ['$60°$', '$90°$', '$120°$', '$180°$'], a: 2 },
  { q: 'Para achar a área colorida de um quadrado com setores, calculamos:', o: ['quadrado + setores', 'quadrado − setores', 'quadrado × setores', 'perímetro'], a: 1 }
]));
b.push(fechamento([
  ['Subtração', 'Área pedida = figura grande − partes retiradas.'],
  ['Lente', 'Dois segmentos de $120°$: $r^{2}({2π|3} − {√{3}|2})$.'.replace('${', '$ {')],
  ['Dividir', 'Decomponha em figuras conhecidas e confira as partes.']
], 'Dividir a figura em partes conhecidas resolve a maior parte dos problemas. Próxima aula: situações no estilo ENEM.'));

// ===================== AULA 63: estilo ENEM =====================
const c = [];
c.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aula 63', h1: 'Geometria também é arte: <span style="color:var(--primary);">problemas de área no estilo ENEM</span>',
  sub: 'A arte geométrica compõe quadrados, círculos e triângulos. Nesta aula, problemas de pavimentação, sinalização e símbolos, com figuras compostas e comparação de áreas.',
  badges: [['ampliar uma área'], ['placas', 'growth'], ['círculo no setor', 'decay']], color: 'primary'
}));
c.push(roteiroSlide('Do enunciado à decisão.', [
  ['Resumir', 'o que existe e o que muda', 'bulb'],
  ['Figura', 'qual área calcular', 'target'],
  ['Calcular', 'coroa, composta ou diferença', 'chart'],
  ['Comparar', 'com o material disponível', 'link'],
  ['Concluir', 'responder ao que foi perguntado', 'scale']
]));
c.push(objetivosSlide([
  'Resolver problemas <strong>contextualizados</strong> de área com círculos, coroas e figuras compostas.',
  '<strong>Comparar</strong> a área obtida com um <strong>valor disponível</strong> (suficiente ou não).',
  'Interpretar a conclusão <strong>no contexto</strong> do problema.'
], 'Dica', 'Resuma o problema em <strong>três linhas</strong>: situação inicial, o que muda e o que se pergunta. Depois desenhe.', 'primary'));

c.push(sl('Para início de conversa', 'A área que vai crescer', `
          ${lede('Uma área pavimentada circular, de $10$ m de diâmetro, é cercada por grama. A administração quer <strong>ampliá-la</strong>, mantendo a forma circular e <strong>aumentando o diâmetro em $6$ m</strong>. Há material para pavimentar mais $100$ m². Será suficiente?')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Ampliando a praça', W.row(W.nm('a63-d', 'Diâmetro atual (m)', 10, 'any', 'min="1"'), W.nm('a63-m', 'Aumento (m)', 6, 'any', 'min="0.5"'), W.nm('a63-e', 'Material (m²)', 100, 'any', 'min="1"')) + W.svg('a63-s', '0 0 340 220', '320px') + W.txt('a63-r', 'Área nova a pavimentar: ') + W.hint('a63-h'))}
            ${mini('A região a pavimentar é:', ['um disco', 'uma coroa circular', 'um setor', 'um segmento'], 1, 'A área nova é a <strong>coroa</strong> entre o círculo antigo (raio $5$) e o novo (raio $8$).')}
          </div>`, { cls: '' }));

c.push(sl('Resumo visual', 'Roteiro para problemas no estilo ENEM', `
          ${tbl(['Passo', 'O que fazer'], [['1', 'Resumir: situação inicial, mudança e pergunta'], ['2', 'Desenhar e identificar as figuras (disco, coroa, semicírculo…)'], ['3', 'Converter diâmetros em raios e unidades em comum'], ['4', 'Calcular as áreas parciais e compor (somar ou subtrair)'], ['5', 'Comparar com o dado do enunciado e responder']])}`, { cls: '' }));

c.push(exemplo('Exemplo resolvido', 'Material suficiente?', 'Uma praça circular pavimentada tem $10$ m de diâmetro e será ampliada em $6$ m de diâmetro. Há material para $100$ m². Use $π = 3$. Será suficiente?', [
  ['Raios', 'Antigo: $r = 5$. Novo diâmetro: $10 + 6 = 16$ ⇒ $R = 8$.'],
  ['Coroa', '$A = 3 · (8^{2} − 5^{2}) = 3 · (64 − 25) = 3 · 39 = 117$ m².'],
  ['Comparação', '$117 > 100$: faltam $17$ m².']
], 'Não será suficiente: a área nova mede $117$ m².'));
c.push(exemplo('Exemplo resolvido', 'Placas de sinalização', 'Cada placa tem a forma de um retângulo com um semicírculo em cima, de largura $d = 30$ cm e altura total $h = 45$ cm. Qual a área de $8$ placas? (use $π = 3,14$)', [
  ['Semicírculo', 'Raio $15$: ${3,14 · 225|2} = 353,25$ cm².'.replace('${', '$ {')],
  ['Retângulo', 'Altura $45 − 15 = 30$: $30 · 30 = 900$ cm².'],
  ['Uma placa', '$900 + 353,25 = 1253,25$ cm².'],
  ['Oito placas', '$8 · 1253,25 = 10026$ cm².']
], 'As $8$ placas somam $10026$ cm².', 'growth'));
c.push(exemplo('Exemplo resolvido', 'Círculo inscrito em um setor', 'Em um setor circular de $60°$ e raio $12$ cm está inscrito um círculo de raio $4$ cm. Qual a área do setor que não é ocupada pelo círculo? (use $π = 3,14$)', [
  ['Setor', '${60|360} · 3,14 · 144 = 75,36$ cm².'.replace('${', '$ {')],
  ['Círculo', '$3,14 · 16 = 50,24$ cm².'],
  ['Diferença', '$75,36 − 50,24 = 25,12$ cm².']
], 'Sobram $25,12$ cm².', 'growth'));
c.push(exemplo('Exemplo resolvido', 'Símbolo com dois setores', 'Um símbolo é formado por um setor de $90°$ de raio $R$ do qual foi retirado um setor de $90°$ de raio ${R|2}$. Se $R = 20$ m e $π = 3$, qual a área pintada?'.replace('${R|2}', '$ {R|2}'), [
  ['Setor grande', '${1|4} · 3 · 400 = 300$ m².'.replace('${', '$ {')],
  ['Setor pequeno', '${1|4} · 3 · 100 = 75$ m².'.replace('${', '$ {')],
  ['Pintada', '$300 − 75 = 225$ m².']
], 'A área pintada é $225$ m².', 'decay'));

c.push(pratique('Ampliação', 'Um jardim circular de raio $4$ m passa a ter raio $6$ m. A área acrescentada é: (use $π = 3$)',
  ['$30$ m²', '$60$ m²', '$120$ m²', '$180$ m²'], 1, '$3 · (36 − 16) = 60$ m². <strong>Alternativa B.</strong>'));
c.push(pratique('Retângulo e semicírculo', 'Uma placa tem um retângulo de $20 × 10$ cm com um semicírculo de diâmetro $20$ cm sobre o lado de $20$ cm. A área é: (use $π = 3$)',
  ['$350$ cm²', '$500$ cm²', '$600$ cm²', '$800$ cm²'], 1, '$200 + {3 · 100|2} = 200 + 150 = 350$ cm². <strong>Alternativa A.</strong>'.replace('${', '$ {'), '', 'growth'));
c.push(pratique('Círculo no quadrado', 'Um círculo de raio $5$ está inscrito em um quadrado. A área do quadrado fora do círculo é: (use $π = 3$)',
  ['$25$', '$50$', '$75$', '$100$'], 0, 'Quadrado: $10^{2} = 100$; círculo: $3 · 25 = 75$; diferença $25$. <strong>Alternativa A.</strong>', '', 'decay'));
c.push(estiloEnem('Pavimentação', 'Uma área circular de $4$ m de diâmetro será ampliada em $6$ m no diâmetro e há material para $100$ m². Usando $π = 3$, a conclusão correta é:',
  ['suficiente: a nova região mede $21$ m²', 'suficiente: a nova região mede $63$ m²', 'suficiente: a nova região mede $48$ m²', 'insuficiente: a nova região mede $84$ m²', 'insuficiente: a nova região mede $108$ m²'], 1, 'Raios: $r = 2$ e $R = 5$. $A = 3 · (25 − 4) = 63$ m², menor que $100$ m²: suficiente. <strong>Alternativa B.</strong>', '', 'growth'));

c.push(armadilhas('Cuidados', 'Onde os problemas ENEM enganam', [
  ['Diâmetro como raio', 'Converta antes de calcular. Diâmetro $6$ é raio $3$.'],
  ['“Aumentar em 8 m” é aumento do diâmetro', 'Leia se o aumento é no raio ou no diâmetro: o raio cresce a <strong>metade</strong>.'],
  ['Calcular a área total em vez da nova', 'Se o enunciado pede a área <strong>acrescentada</strong>, faça a coroa.'],
  ['Conclusão sem comparar', 'Responda “suficiente” ou “insuficiente” <strong>comparando</strong> com o valor disponível.']
]));
c.push(quiz([
  { q: 'Um círculo de raio $3$ passa a ter raio $5$. A área acrescentada é ($π = 3$):', o: ['$48$', '$75$', '$27$', '$54$'], a: 0 },
  { q: 'Se o diâmetro aumenta $6$ m, o raio aumenta:', o: ['$6$ m', '$3$ m', '$12$ m', '$9$ m'], a: 1 },
  { q: 'Área da placa = retângulo + semicírculo, quando o semicírculo está:', o: ['em cima do retângulo', 'dentro do retângulo', 'só no desenho', 'nunca'], a: 0 },
  { q: 'Para saber se o material basta, devemos:', o: ['somar os raios', 'comparar a área nova com o material', 'dobrar a área', 'medir o perímetro'], a: 1 }
]));
c.push(fechamento([
  ['Ampliação', 'Área acrescentada = coroa entre o raio antigo e o novo.'],
  ['Composição', 'Retângulo + semicírculo; círculo menos setor etc.'],
  ['Decisão', 'Compare com o dado e responda ao que foi perguntado.']
], 'Com círculos e figuras compostas fechamos a parte de áreas planas. Próxima unidade: polígonos regulares.'));

const pages = [];
pages.push({ out: BASE + 'aula-1-coroa-e-corda-tangente.html', html: K.deck({
  title: 'Problemas com círculos: coroa e corda tangente — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 61 · Coroa e corda tangente', slides: a,
  extra: WJS + BIND + UTIL + String.raw`
  bind(['c61-c', 'c61-r'], function(){ var c = +$('c61-c').value, r = +$('c61-r').value; if(!(c > 0 && r > 0)){ $('c61-s').innerHTML = ''; $('c61-a').textContent = '—'; return; }
    var svg = $('c61-s'), W = 340, H = 220, cx = W / 2, cy = H / 2, R = Math.sqrt(r * r + c * c / 4), f = 90 / R, ri = r * f, Ro = 90, h = c / 2 * f; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    el('circle', {cx: cx, cy: cy, r: Ro, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg); el('circle', {cx: cx, cy: cy, r: ri, fill: 'var(--surface)', stroke: 'var(--ink-soft)', 'stroke-width': 1.8}, svg);
    el('line', {x1: cx - h, y1: cy - ri, x2: cx + h, y2: cy - ri, stroke: 'var(--growth)', 'stroke-width': 2.8}, svg); el('line', {x1: cx, y1: cy, x2: cx, y2: cy - ri, stroke: 'var(--ink)', 'stroke-width': 1.6}, svg); el('line', {x1: cx, y1: cy, x2: cx + h, y2: cy - ri, stroke: 'var(--decay)', 'stroke-width': 1.8, 'stroke-dasharray': '4 3'}, svg); el('circle', {cx: cx, cy: cy, r: 3.4, fill: 'var(--ink)'}, svg);
    var t = el('text', {x: cx, y: cy - ri - 8, fill: 'var(--growth)', 'font-size': 12, 'font-weight': 700, 'text-anchor': 'middle'}, svg); t.textContent = 'corda ' + pt(c, 1) + ' m';
    var A = Math.PI * c * c / 4; $('c61-a').textContent = pt(A, 2) + ' m²'; $('c61-h').textContent = 'R² − r² = (c ÷ 2)² = ' + pt(c * c / 4, 2) + ' ⇒ A = π · ' + pt(c * c / 4, 2) + '. O raio interno só muda o desenho.'; });`
}) });
pages.push({ out: BASE + 'aula-2-figuras-compostas.html', html: K.deck({
  title: 'Figuras compostas com círculos — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 62 · Dividir para conquistar', slides: b,
  extra: WJS + BIND + UTIL + String.raw`
  bind(['l62-r'], function(){ var r = +$('l62-r').value; if(!(r > 0)){ $('l62-s').innerHTML = ''; $('l62-a').textContent = '—'; return; }
    var svg = $('l62-s'), W = 340, H = 200, f = 80 / r, cx1 = W / 2 - r * f / 2, cx2 = W / 2 + r * f / 2, cy = H / 2; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    el('circle', {cx: cx1, cy: cy, r: r * f, fill: 'var(--primary)', 'fill-opacity': 0.22, stroke: 'var(--primary)', 'stroke-width': 2.2}, svg); el('circle', {cx: cx2, cy: cy, r: r * f, fill: 'var(--growth)', 'fill-opacity': 0.22, stroke: 'var(--growth)', 'stroke-width': 2.2}, svg);
    el('circle', {cx: cx1, cy: cy, r: 3.2, fill: 'var(--ink)'}, svg); el('circle', {cx: cx2, cy: cy, r: 3.2, fill: 'var(--ink)'}, svg);
    var A = r * r * (2 * Math.PI / 3 - Math.sqrt(3) / 2); $('l62-a').textContent = pt(A, 2) + ' cm²'; $('l62-h').textContent = 'A = r²(2π/3 − √3/2) = ' + pt(r * r, 2) + ' · ' + pt(2 * Math.PI / 3 - Math.sqrt(3) / 2, 4) + ' (dois segmentos de 120°). Cada círculo tem área ' + pt(Math.PI * r * r, 2) + ' cm².'; });`
}) });
pages.push({ out: BASE + 'aula-3-problemas-estilo-enem.html', html: K.deck({
  title: 'Problemas de área no estilo ENEM — Matemática 2ª série', brand: BRAND, key: KEY + 'a3', meta: 'Aula 63 · Geometria e arte', slides: c,
  extra: WJS + BIND + UTIL + String.raw`
  bind(['a63-d', 'a63-m', 'a63-e'], function(){ var d = +$('a63-d').value, m = +$('a63-m').value, e = +$('a63-e').value; if(!(d > 0 && m > 0)){ $('a63-s').innerHTML = ''; $('a63-r').textContent = '—'; return; }
    var r = d / 2, R = (d + m) / 2, A = 3 * (R * R - r * r); var svg = $('a63-s'), W = 340, H = 220, cx = W / 2, cy = H / 2, f = 95 / R; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = '';
    el('circle', {cx: cx, cy: cy, r: R * f, fill: 'var(--growth-soft)', stroke: 'var(--growth)', 'stroke-width': 2.4}, svg); el('circle', {cx: cx, cy: cy, r: r * f, fill: 'var(--primary-soft)', stroke: 'var(--primary)', 'stroke-width': 2.4}, svg);
    $('a63-r').textContent = pt(A, 2) + ' m² (com π = 3)'; $('a63-h').textContent = 'Coroa entre r = ' + pt(r, 2) + ' e R = ' + pt(R, 2) + ': ' + (A <= e ? 'o material (' + pt(e, 0) + ' m²) é suficiente.' : 'o material (' + pt(e, 0) + ' m²) NÃO é suficiente: faltam ' + pt(A - e, 2) + ' m².'); });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Problemas de área com círculos e figuras compostas', accent: 'success', icon: 'dots',
  aulas: [['Aula 61', 'Problemas com círculos: coroa e corda tangente', 'aula-1-coroa-e-corda-tangente.html'], ['Aula 62', 'Figuras compostas: dividir para conquistar', 'aula-2-figuras-compostas.html'], ['Aula 63', 'Problemas de área no estilo ENEM', 'aula-3-problemas-estilo-enem.html']],
  pendente: true
}, pages };
