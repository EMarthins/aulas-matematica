// Módulo 7 · Matemática · 3ª série · 3º trimestre — Triângulo retângulo: cosseno e tangente (aulas 88, 89, 90 e 91 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w88 = Wd.triret('tr88');
const w90 = Wd.triret('tr90');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/triangulo-retangulo-cosseno-e-tangente/',
  titulo: 'Triângulo retângulo: cosseno e tangente', accent: 'decay', icon: 'triangle', key: 'm3x07', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 88 a 91 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Valores usados: sen 30° = 0,5; cos 30° = 0,87; tg 30° = 0,58; sen 45° = cos 45° = 0,71; tg 45° = 1; sen 60° = 0,87; cos 60° = 0,5; tg 60° = 1,73.'],
  aulas: [
    // ------------------------------------------------------------ aula 88
    {
      slug: 'razoes-trigonometricas-cosseno-i', titulo: 'Razões trigonométricas no triângulo retângulo: cosseno I',
      h1: `Razões trigonométricas: o ${co('decay')}cosseno</span>`,
      sub: 'O cosseno de um ângulo agudo é a razão entre o cateto adjacente e a hipotenusa. Como o seno, depende só do ângulo, e os dois se completam: o cosseno de um ângulo é o seno do complementar.',
      badges: [['cos θ'], ['adjacente ÷ hipotenusa', 'growth'], ['cos θ = sen(90° − θ)', 'decay']], color: 'decay',
      roteiro: ['Definição e valores.', [['Cateto adjacente', 'o que encosta no ângulo', 'bulb'], ['Cosseno', 'adjacente ÷ hipotenusa', 'target'], ['Ângulos notáveis', '30°, 45°, 60°', 'chart'], ['Complementares', 'seno e cosseno', 'scale'], ['Aplicar', 'achar lados', 'book']]],
      objetivos: ['Definir o <strong>cosseno</strong> de um ângulo agudo.', 'Conhecer os valores para <strong>30°, 45° e 60°</strong>.', 'Relacionar <strong>seno e cosseno de ângulos complementares</strong>.'],
      dica: '$cos θ = {"cateto adjacente"|"hipotenusa"}$. O adjacente é o cateto que <strong>encosta</strong> no ângulo $θ$ (e não é a hipotenusa).',
      gancho: { titulo: 'A sombra do poste', texto: 'Uma rampa de $10$ m de comprimento forma $30°$ com o chão. A projeção horizontal da rampa (quanto ela “avança” no chão) é o cateto adjacente: $10 · cos 30° = 8,7$ m.', mini: ['O cosseno é a razão entre:', ['cateto adjacente e hipotenusa', 'cateto oposto e hipotenusa', 'os dois catetos', 'hipotenusa e adjacente'], 0, 'Cosseno = adjacente ÷ hipotenusa. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Cosseno de um ângulo agudo', g2(`<div>
              ${checks(['<strong>$cos θ = {"adjacente"|"hipotenusa"}$</strong>; está entre $0$ e $1$.', '<strong>Valores notáveis:</strong> $cos 30° = {√{3}|2}$, $cos 45° = {√{2}|2}$, $cos 60° = {1|2}$.', '<strong>Complementares:</strong> $cos θ = sen(90° − θ)$. Ex.: $cos 60° = sen 30° = {1|2}$.', 'No triângulo de ângulos $θ$ e $90° − θ$, o oposto de um é o adjacente do outro.'], '.95rem')}
            </div>`, card(`<strong>Valores</strong>
              ${tbl(['$θ$', '$30°$', '$45°$', '$60°$'], [['$sen θ$', '${1|2}$', '${√{2}|2}$', '${√{3}|2}$'], ['$cos θ$', '${√{3}|2}$', '${√{2}|2}$', '${1|2}$']])}`, 'primary'))],
        ['Teoria · usando o cosseno', 'Achar adjacente e hipotenusa', g2(`<div>
              ${checks(['Dados $θ$ e a hipotenusa $h$: <strong>adjacente $= h · cos θ$</strong>.', 'Dados $θ$ e o adjacente $a$: <strong>hipotenusa $= {a|cos θ}$</strong>.', 'Exemplo: $h = 20$, $θ = 60°$: adjacente $= 20 · 0,5 = 10$.', 'Experimente no simulador: veja o cosseno crescer quando $θ$ diminui.'], '.95rem')}
            </div>`, callout('Relação fundamental (prévia)', '$sen² θ + cos² θ = 1$ (aula 92).', 'decay'))]
      ],
      exemplos: [
        ['Cosseno de um ângulo', 'Em um triângulo retângulo, o cateto adjacente a $θ$ mede $8$ e a hipotenusa $10$. Calcule $cos θ$.', [['Fórmula', '$cos θ = {8|10}$.']], '$cos θ = 0,8$.'],
        ['Rampa', 'Uma rampa de $12$ m forma $60°$ com o chão. Qual a projeção horizontal?', [['Cosseno', '$cos 60° = {a|12}$.'], ['Calcule', '$a = 12 · 0,5 = 6$.']], 'A projeção é de <strong>6 m</strong>.']
      ],
      widget: { titulo: 'Triângulo retângulo interativo', html: w88.html, js: w88.js },
      pratique: [
        ['Valor', '$cos 60°$ vale:', ['${1|2}$', '${√{3}|2}$', '${√{2}|2}$', '$1$'], 0, '$cos 60° = {1|2}$. <strong>Alternativa A.</strong>'],
        ['Razão', 'Adjacente $12$ e hipotenusa $13$: $cos θ$ vale:', ['${5|13}$', '${12|13}$', '${13|12}$', '${5|12}$'], 1, 'Adjacente ÷ hipotenusa. <strong>Alternativa B.</strong>'],
        ['Lado', 'Hipotenusa $40$ e $θ = 30°$ ($cos 30° = 0,87$): o adjacente mede:', ['$20$', '$34,8$', '$40$', '$46$'], 1, '$40 · 0,87 = 34,8$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O cabo do poste', 'Um cabo de $10$ m prende o topo de um poste ao chão, formando $60°$ com o solo. A distância do pé do poste ao ponto onde o cabo toca o chão é:', ['$5$ m', '$7,1$ m', '$8,7$ m', '$10$ m', '$17,3$ m'], 0, '$10 · cos 60° = 5$. <strong>Alternativa A.</strong>'],
      cuidados: [['Trocar seno e cosseno', 'Seno: oposto; cosseno: adjacente.'], ['Adjacente × hipotenusa', 'A hipotenusa não é cateto adjacente.'], ['Ângulo errado', 'O adjacente depende do ângulo escolhido.'], ['Cosseno maior que 1', 'Nunca: o cateto é menor que a hipotenusa.']],
      quiz: [
        { q: '$cos θ$ é:', o: ['adjacente ÷ hipotenusa', 'oposto ÷ hipotenusa', 'oposto ÷ adjacente', 'hipotenusa ÷ adjacente'], a: 0 },
        { q: '$cos 30°$ vale:', o: ['${1|2}$', '${√{3}|2}$', '${√{2}|2}$', '$0$'], a: 1 },
        { q: '$cos 70° =$', o: ['$sen 20°$', '$sen 70°$', '$tg 20°$', '$1$'], a: 0 },
        { q: 'Com hipotenusa $20$ e $cos θ = 0,6$, o adjacente mede:', o: ['$6$', '$12$', '$20$', '$33$'], a: 1 }
      ],
      sintese: [['Cosseno', 'Adjacente ÷ hipotenusa.'], ['Notáveis', 'cos 30° = √3/2; 45° = √2/2; 60° = 1/2.'], ['Complementares', 'cos θ = sen(90° − θ).']],
      msg: 'Na próxima aula: cosseno em problemas.'
    },
    // ------------------------------------------------------------ aula 89
    {
      slug: 'razoes-trigonometricas-cosseno-ii', titulo: 'Razões trigonométricas no triângulo retângulo: cosseno II',
      h1: `Razões trigonométricas: ${co('decay')}cosseno em problemas</span>`,
      sub: 'Usamos o cosseno para achar distâncias horizontais, comprimentos de cabos e inclinações. Misturamos seno e cosseno e aprendemos a escolher a razão certa.',
      badges: [['distâncias'], ['cabos', 'growth'], ['seno ou cosseno?', 'decay']], color: 'decay',
      roteiro: ['Escolher a razão.', [['Desenhar', 'triângulo retângulo', 'book'], ['Identificar lados', 'dados e incógnita', 'target'], ['Seno ou cosseno', 'qual usar', 'scale'], ['Calcular', 'com valores notáveis', 'chart'], ['Conferir', 'razoabilidade', 'bulb']]],
      objetivos: ['<strong>Escolher</strong> entre seno e cosseno em um problema.', 'Calcular <strong>distâncias horizontais</strong> e comprimentos usando o cosseno.', 'Resolver problemas <strong>combinando</strong> seno e cosseno.'],
      dica: 'Pergunte: o lado conhecido e o pedido são <strong>oposto/hipotenusa</strong> (seno) ou <strong>adjacente/hipotenusa</strong> (cosseno)?',
      gancho: { titulo: 'O avião na descida', texto: 'Um avião desce em linha reta de $2000$ m de trajetória, com $3°$ com a horizontal. Qual a distância horizontal percorrida? É o cateto adjacente: $2000 · cos 3° ≈ 1997$ m. Quase igual à trajetória: o cosseno de ângulos pequenos é próximo de $1$.', mini: ['Com hipotenusa $50$ e $θ = 60°$, o adjacente mede:', ['$25$', '$43,3$', '$50$', '$100$'], 0, '$50 · 0,5 = 25$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · escolha', 'Seno × cosseno', g2(`<div>
              ${tbl(['Lado conhecido', 'Lado pedido', 'Razão'], [['hipotenusa', 'oposto', 'seno'], ['hipotenusa', 'adjacente', 'cosseno'], ['oposto', 'hipotenusa', 'seno'], ['adjacente', 'hipotenusa', 'cosseno']])}
            </div>`, callout('Truque', 'S-O-H, C-A-H: <strong>S</strong>eno = <strong>O</strong>posto/<strong>H</strong>ipotenusa; <strong>C</strong>osseno = <strong>A</strong>djacente/<strong>H</strong>ipotenusa.', 'decay'))],
        ['Teoria · problemas combinados', 'Dois lados de uma vez', g2(`<div>
              ${checks(['Com hipotenusa $h$ e ângulo $θ$: oposto $= h · sen θ$ e adjacente $= h · cos θ$.', 'Exemplo: $h = 30$, $θ = 30°$: oposto $15$; adjacente $≈ 26$.', 'Confira com Pitágoras: $15² + 26² ≈ 901 ≈ 30²$ ✓.', 'Ângulos complementares trocam seno e cosseno.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Um barco vai $100$ m em linha reta a $30°$ do norte para o leste: avança $50$ m para o leste e $87$ m para o norte (aprox.).</p>`, 'primary'))]
      ],
      exemplos: [
        ['Distância horizontal', 'Um cabo de $16$ m liga o topo de uma torre ao chão e forma $60°$ com o solo. Qual a distância do pé da torre ao ponto de fixação?', [['Adjacente', 'Distância ao pé da torre.'], ['Cosseno', '$16 · cos 60° = 16 · 0,5$.']], 'A distância é de <strong>8 m</strong>.'],
        ['Seno e cosseno', 'Um barco navega $40$ km em direção $30°$ ao norte do leste. Quanto avança para o leste e para o norte? ($sen 30° = 0,5$; $cos 30° = 0,87$)', [['Leste (adjacente)', '$40 · 0,87 = 34,8$.'], ['Norte (oposto)', '$40 · 0,5 = 20$.']], '<strong>34,8 km</strong> para o leste e <strong>20 km</strong> para o norte.']
      ],
      pratique: [
        ['Cabo', 'Cabo de $20$ m a $60°$ do chão: a distância horizontal ao ponto de fixação é:', ['$10$ m', '$17,4$ m', '$20$ m', '$40$ m'], 0, '$20 · 0,5 = 10$. <strong>Alternativa A.</strong>'],
        ['Escolha', 'Dados: hipotenusa e ângulo; pedido: cateto adjacente. Usa-se:', ['seno', 'cosseno', 'Pitágoras apenas', 'nenhuma'], 1, 'Adjacente/hipotenusa. <strong>Alternativa B.</strong>'],
        ['Complementar', '$cos 20° = sen$ de:', ['$20°$', '$70°$', '$80°$', '$160°$'], 1, '$sen(90° − 20°)$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A estrada inclinada', 'Uma estrada em subida percorre $500$ m com inclinação de $30°$. Qual o avanço horizontal? ($cos 30° = 0,87$)', ['$250$ m', '$385$ m', '$435$ m', '$500$ m', '$580$ m'], 2, '$500 · 0,87 = 435$. <strong>Alternativa C.</strong>'],
      cuidados: [['Seno no lugar do cosseno', 'Para o lado que “encosta” no ângulo, use cosseno.'], ['Hipotenusa menor que catetos', 'Se isso ocorrer, troque as razões.'], ['Ângulos complementares', 'Troque seno e cosseno ao passar para o outro ângulo agudo.'], ['Aproximações', 'Use os valores dados pelo problema.']],
      quiz: [
        { q: 'S-O-H, C-A-H significa:', o: ['seno = oposto/hipotenusa; cosseno = adjacente/hipotenusa', 'seno = adjacente/hipotenusa', 'tudo igual', 'só tangente'], a: 0 },
        { q: 'Hipotenusa $10$, $θ = 30°$: adjacente $≈$ ($cos 30° = 0,87$):', o: ['$5$', '$8,7$', '$10$', '$17$'], a: 1 },
        { q: '$cos 60° + sen 30°$ vale:', o: ['$0,5$', '$1$', '$1,5$', '$0$'], a: 1 },
        { q: 'O cosseno de ângulos pequenos é próximo de:', o: ['$0$', '$0,5$', '$1$', '$2$'], a: 2 }
      ],
      sintese: [['Escolha', 'Oposto: seno; adjacente: cosseno.'], ['Dois lados', 'oposto = h·sen; adjacente = h·cos.'], ['Conferir', 'Pitágoras valida os resultados.']],
      msg: 'Na próxima aula: a tangente.'
    },
    // ------------------------------------------------------------ aula 90
    {
      slug: 'razoes-trigonometricas-tangente-i', titulo: 'Razões trigonométricas no triângulo retângulo: tangente I',
      h1: `Razões trigonométricas: a ${co('decay')}tangente</span>`,
      sub: 'A tangente relaciona os dois catetos: oposto dividido por adjacente. Ela mede a inclinação e é a razão ideal quando não conhecemos a hipotenusa.',
      badges: [['tg θ'], ['oposto ÷ adjacente', 'growth'], ['inclinação', 'decay']], color: 'decay',
      roteiro: ['Definição e uso.', [['Tangente', 'oposto ÷ adjacente', 'target'], ['Relação com sen e cos', 'tg = sen ÷ cos', 'scale'], ['Valores notáveis', '30°, 45°, 60°', 'chart'], ['Inclinação', 'rampas e ladeiras', 'book'], ['Aplicar', 'sem a hipotenusa', 'bulb']]],
      objetivos: ['Definir a <strong>tangente</strong> de um ângulo agudo.', 'Relacionar $tg θ = {sen θ|cos θ}$.', 'Usar a tangente quando <strong>não se conhece a hipotenusa</strong>.'],
      dica: '$tg θ = {"cateto oposto"|"cateto adjacente"}$. A tangente <strong>pode ser maior que 1</strong> (ao contrário do seno e do cosseno).',
      gancho: { titulo: 'A inclinação da ladeira', texto: 'Uma ladeira sobe $3$ m a cada $10$ m na horizontal: $tg θ = {3|10} = 0,3$. A tangente mede a “subida por avanço”, chamada declividade. É a razão mais usada em topografia.', mini: ['A tangente é a razão entre:', ['oposto e adjacente', 'oposto e hipotenusa', 'adjacente e hipotenusa', 'hipotenusa e oposto'], 0, 'Tangente = oposto ÷ adjacente. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Tangente de um ângulo agudo', g2(`<div>
              ${checks(['<strong>$tg θ = {"oposto"|"adjacente"}$</strong>.', '<strong>$tg θ = {sen θ|cos θ}$</strong> (divida o oposto/hipotenusa por adjacente/hipotenusa).', '<strong>Notáveis:</strong> $tg 30° = {√{3}|3}$, $tg 45° = 1$, $tg 60° = √{3}$.', 'Para $θ$ próximo de $90°$, a tangente é muito grande.'], '.95rem')}
            </div>`, card(`<strong>Tabela</strong>
              ${tbl(['$θ$', '$30°$', '$45°$', '$60°$'], [['$tg θ$', '${√{3}|3} ≈ 0,58$', '$1$', '$√{3} ≈ 1,73$']])}`, 'primary'))],
        ['Teoria · usando', 'Alturas e distâncias', g2(`<div>
              ${checks(['Dados $θ$ e o adjacente $a$: <strong>oposto $= a · tg θ$</strong>.', 'Dados $θ$ e o oposto $o$: <strong>adjacente $= {o|tg θ}$</strong>.', 'Exemplo: a $30$ m de um prédio vê-se o topo a $60°$: altura $= 30 · 1,73 ≈ 52$ m.', '$tg 45° = 1$: oposto e adjacente iguais (triângulo isósceles).'], '.95rem')}
            </div>`, callout('Quando usar', 'Se os dados e a incógnita são os <strong>dois catetos</strong>, use a tangente.', 'decay'))]
      ],
      exemplos: [
        ['Calculando', 'Cateto oposto $9$ e adjacente $12$. Calcule $tg θ$.', [['Fórmula', '$tg θ = {9|12}$.']], '$tg θ = 0,75$.'],
        ['Altura do prédio', 'A $40$ m de um prédio, uma pessoa vê o topo sob $45°$. Qual a altura (desprezando a altura da pessoa)?', [['Tangente', '$tg 45° = {h|40}$.'], ['Isole', '$h = 40 · 1$.']], 'A altura é de <strong>40 m</strong>.']
      ],
      widget: { titulo: 'Triângulo e tangente', html: w90.html, js: w90.js },
      pratique: [
        ['Valor', '$tg 45°$ vale:', ['$0$', '$1$', '${√{3}|3}$', '$√{3}$'], 1, '$tg 45° = 1$. <strong>Alternativa B.</strong>'],
        ['Razão', 'Oposto $5$ e adjacente $10$: $tg θ$ vale:', ['$0,5$', '$2$', '$5$', '$0,2$'], 0, '${5|10}$. <strong>Alternativa A.</strong>'],
        ['Altura', 'A $20$ m de uma torre, vê-se o topo a $60°$ ($tg 60° = 1,73$). A altura é:', ['$11,6$ m', '$20$ m', '$34,6$ m', '$40$ m'], 2, '$20 · 1,73 = 34,6$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A altura da árvore', 'Uma pessoa a $15$ m de uma árvore vê o topo sob $30°$ ($tg 30° = 0,58$). A altura da árvore (sem contar a pessoa) é:', ['$7,5$ m', '$8,7$ m', '$15$ m', '$26$ m', '$30$ m'], 1, '$15 · 0,58 = 8,7$. <strong>Alternativa B.</strong>'],
      cuidados: [['Tangente com a hipotenusa', 'A tangente usa só catetos.'], ['Inverter oposto e adjacente', '$tg$ = oposto ÷ adjacente.'], ['Ângulo errado', 'Oposto e adjacente dependem do ângulo.'], ['Tangente limitada', 'A tangente pode ser maior que $1$.']],
      quiz: [
        { q: '$tg 60°$ vale:', o: ['$1$', '$√{3}$', '${√{3}|3}$', '$0,5$'], a: 1 },
        { q: '$tg θ = $', o: ['${sen θ|cos θ}$', '${cos θ|sen θ}$', '$sen θ · cos θ$', '$1$'], a: 0 },
        { q: 'Oposto $6$ e adjacente $6$: o ângulo vale:', o: ['$30°$', '$45°$', '$60°$', '$90°$'], a: 1 },
        { q: 'A tangente é a razão entre:', o: ['os dois catetos', 'cateto e hipotenusa', 'os dois ângulos', 'dois lados iguais'], a: 0 }
      ],
      sintese: [['Tangente', 'Oposto ÷ adjacente = sen ÷ cos.'], ['Notáveis', '√3/3, 1, √3.'], ['Uso', 'Quando os dados e a incógnita são os catetos.']],
      msg: 'Na próxima aula: tangente em problemas.'
    },
    // ------------------------------------------------------------ aula 91
    {
      slug: 'razoes-trigonometricas-tangente-ii', titulo: 'Razões trigonométricas no triângulo retângulo: tangente II',
      h1: `Razões trigonométricas: ${co('decay')}tangente em problemas</span>`,
      sub: 'Ângulos de elevação e depressão, alturas de morros, inclinação de telhados. Com a tangente medimos distâncias que não podemos percorrer.',
      badges: [['elevação'], ['depressão', 'growth'], ['declividade', 'decay']], color: 'decay',
      roteiro: ['Medir sem alcançar.', [['Ângulo de elevação', 'olhar para cima', 'target'], ['Ângulo de depressão', 'olhar para baixo', 'scale'], ['Declividade', 'tg da inclinação', 'chart'], ['Duas medidas', 'duas posições', 'book'], ['Conferir', 'razoabilidade', 'bulb']]],
      objetivos: ['Reconhecer <strong>ângulos de elevação e depressão</strong>.', 'Calcular <strong>alturas e distâncias</strong> com a tangente.', 'Resolver problemas de <strong>duas observações</strong>.'],
      dica: 'Ângulo de elevação e de depressão são medidos <strong>com a horizontal</strong>. Somar a altura do observador (olhos) ao resultado.',
      gancho: { titulo: 'O drone e o prédio', texto: 'Um drone a $50$ m de altura vê a base de um prédio, a $80$ m de distância horizontal, sob um ângulo de depressão de $θ$ com $tg θ = {50|80} = 0,625$ (cerca de $32°$).', mini: ['Um ângulo de elevação é medido a partir:', ['da horizontal para cima', 'da vertical', 'do chão para baixo', 'da hipotenusa'], 0, 'Partindo da horizontal, olhando para cima. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · elevação e depressão', 'Definições', g2(`<div>
              ${checks(['<strong>Ângulo de elevação:</strong> entre a horizontal e a linha de visada <strong>para cima</strong>.', '<strong>Ângulo de depressão:</strong> entre a horizontal e a linha de visada <strong>para baixo</strong>.', 'Os dois são <strong>iguais</strong> (ângulos alternos internos) para observadores nos dois extremos da mesma linha.', '<strong>Declividade</strong> $= tg$ do ângulo de inclinação (altura/avanço horizontal).'], '.95rem')}
            </div>`, card(`<strong>Altura total</strong>
              <p style="font-size:.92rem;margin-top:8px;">Altura $=$ $d · tg θ$ $+$ altura dos olhos do observador.</p>`, 'primary'))],
        ['Teoria · duas observações', 'Quando a distância é desconhecida', g2(`<div>
              ${checks(['Se de dois pontos alinhados à base vemos o topo sob $θ_{1}$ e $θ_{2}$, resolva um sistema com a mesma altura $h$.', 'Ex.: $h = x · tg 60°$ e $h = (x + 20) · tg 30°$ ⇒ $x · 1,73 = (x + 20) · 0,58$ ⇒ $x ≈ 10$ e $h ≈ 17,3$.', 'Com $tg 45° = 1$ a altura é igual à distância.', 'Sempre confira o desenho e a coerência do resultado.'], '.95rem')}
            </div>`, callout('Dica', 'Com dois ângulos e a distância entre as observações, a incógnita $x$ (distância ao prédio) sai de uma equação do 1º grau.', 'decay'))]
      ],
      exemplos: [
        ['Altura do morro', 'De um ponto a $100$ m da base de um morro, vê-se o topo sob $30°$ ($tg 30° = 0,58$). A altura do morro é:', [['Tangente', '$tg 30° = {h|100}$.'], ['Calcule', '$h = 58$.']], 'O morro tem <strong>58 m</strong>.'],
        ['Ângulo de depressão', 'Do alto de um farol de $40$ m, vê-se um barco sob ângulo de depressão de $45°$. A que distância da base do farol está o barco?', [['Tangente', '$tg 45° = {40|d}$.'], ['Isole', '$d = 40$.']], 'O barco está a <strong>40 m</strong> da base.']
      ],
      pratique: [
        ['Altura', 'A $30$ m de uma torre vê-se o topo a $45°$. A altura da torre é:', ['$15$ m', '$30$ m', '$42$ m', '$52$ m'], 1, '$tg 45° = 1$. <strong>Alternativa B.</strong>'],
        ['Depressão', 'De um prédio de $60$ m, vê-se um carro sob depressão de $60°$ ($tg 60° = 1,73$). A distância do carro à base é:', ['$34,6$ m', '$60$ m', '$103,8$ m', '$20,8$ m'], 0, '$d = {60|1,73} ≈ 34,7$. <strong>Alternativa A.</strong>'],
        ['Declividade', 'Uma rampa sobe $2$ m a cada $10$ m na horizontal. A tangente do ângulo é:', ['$0,2$', '$0,5$', '$2$', '$5$'], 0, '${2|10}$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A torre de TV', 'A $50$ m da base de uma torre, vê-se o topo sob $60°$ ($tg 60° = 1,73$). Considerando os olhos a $1,6$ m do chão, a altura aproximada da torre é:', ['$26,0$ m', '$50,0$ m', '$86,5$ m', '$88,1$ m', '$100$ m'], 3, '$50 · 1,73 = 86,5$; $+ 1,6 = 88,1$. <strong>Alternativa D.</strong>'],
      cuidados: [['Esquecer a altura dos olhos', 'A altura total soma a do observador.'], ['Tangente × seno', 'Com os dois catetos, use a tangente.'], ['Elevação × depressão', 'Ambos são medidos com a horizontal.'], ['Unidades misturadas', 'Use a mesma unidade para altura e distância.']],
      quiz: [
        { q: 'Ângulos de elevação e depressão são medidos com:', o: ['a vertical', 'a horizontal', 'a hipotenusa', 'o eixo y'], a: 1 },
        { q: 'A $20$ m de um poste, o topo é visto a $45°$: altura:', o: ['$10$ m', '$20$ m', '$28$ m', '$40$ m'], a: 1 },
        { q: '$tg 30° ≈$', o: ['$0,58$', '$1$', '$1,73$', '$0,87$'], a: 0 },
        { q: 'Altura total $=$ $d · tg θ$ $+$:', o: ['nada', 'a altura do observador', 'a distância', 'a hipotenusa'], a: 1 }
      ],
      sintese: [['Elevação e depressão', 'Medidos com a horizontal.'], ['Altura', 'd·tg θ + altura dos olhos.'], ['Duas observações', 'Sistema com a mesma altura.']],
      msg: 'Na próxima aula: a relação fundamental da trigonometria.'
    }
  ]
});
