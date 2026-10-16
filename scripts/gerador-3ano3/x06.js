// Módulo 6 · Matemática · 3ª série · 3º trimestre — Triângulo retângulo: relações métricas e seno (aulas 85, 86 e 87 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w86 = Wd.triret('tr86');

// triângulo retângulo com a altura h relativa à hipotenusa: A(0,0)=ângulo reto
const metr = svg(280, 170, `<polygon points="20,140 260,140 80,40" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/><line x1="80" y1="40" x2="80" y2="140" stroke="var(--decay)" stroke-width="2.5" stroke-dasharray="5 4"/><rect x="80" y="128" width="12" height="12" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="48" y="156" font-size="12" fill="var(--ink)">m</text><text x="168" y="156" font-size="12" fill="var(--ink)">n</text><text x="84" y="92" font-size="12" fill="var(--decay)">h</text><text x="40" y="82" font-size="12" fill="var(--ink)">b</text><text x="176" y="84" font-size="12" fill="var(--ink)">c</text><text x="120" y="170" font-size="12" fill="var(--ink)">a = m + n (hipotenusa)</text>`, '320px');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/triangulo-retangulo-metricas-e-seno/',
  titulo: 'Triângulo retângulo: relações métricas e seno', accent: 'decay', icon: 'triangle', key: 'm3x06', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 85 a 87 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Habilidade H8 da Matriz de Referência do ENEM: utilizar conhecimentos geométricos para resolver problemas.'],
  aulas: [
    // ------------------------------------------------------------ aula 85
    {
      slug: 'relacoes-metricas-no-triangulo-retangulo', titulo: 'Relações métricas no triângulo retângulo',
      h1: `Relações ${co('decay')}métricas:</span> a altura divide o triângulo retângulo`,
      sub: 'Traçando a altura relativa à hipotenusa, o triângulo retângulo se divide em dois triângulos semelhantes a ele. A semelhança gera cinco relações métricas, que incluem o teorema de Pitágoras.',
      badges: [['semelhança AA'], ['h² = m·n', 'growth'], ['b² = a·m', 'decay']], color: 'decay',
      roteiro: ['Da semelhança às cinco relações.', [['Elementos', 'a, b, c, h, m, n', 'bulb'], ['Três triângulos', 'semelhantes entre si', 'target'], ['As relações', 'b², c², h², bc = ah', 'book'], ['Pitágoras', 'a² = b² + c²', 'scale'], ['Aplicar', 'medidas desconhecidas', 'chart']]],
      objetivos: ['Identificar os <strong>elementos</strong> do triângulo retângulo ($a$, $b$, $c$, $h$, $m$, $n$).', 'Obter as relações métricas pela <strong>semelhança de triângulos</strong>.', 'Aplicar as relações para calcular <strong>medidas desconhecidas</strong>.'],
      dica: 'Relações: $b² = a · m$, $c² = a · n$, $h² = m · n$, $b · c = a · h$ e $a² = b² + c²$ (com $a = m + n$).',
      gancho: { titulo: 'A rampa e a altura', texto: 'Uma rampa em forma de triângulo retângulo tem catetos de $6$ m e $8$ m e hipotenusa de $10$ m. A altura baixada do ângulo reto até a hipotenusa mede $h = {6 · 8|10} = 4,8$ m. É a relação $b · c = a · h$.', mini: ['Se $m = 4$ e $n = 9$, então $h$ vale:', ['$5$', '$6$', '$13$', '$36$'], 1, '$h² = 4 · 9 = 36$ ⇒ $h = 6$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · elementos e relações', 'As cinco relações', g2(`<div>
              ${checks(['<strong>$a$:</strong> hipotenusa; <strong>$b$, $c$:</strong> catetos; <strong>$h$:</strong> altura; <strong>$m$, $n$:</strong> projeções dos catetos sobre a hipotenusa ($a = m + n$).', '<strong>$b² = a · m$</strong> e <strong>$c² = a · n$</strong> (cateto ao quadrado = hipotenusa × projeção).', '<strong>$h² = m · n$</strong> (altura ao quadrado = produto das projeções).', '<strong>$b · c = a · h$</strong> e <strong>$a² = b² + c²$</strong> (Pitágoras).'], '.95rem')}
            </div>`, `<div>${metr}</div>`)],
        ['Teoria · de onde vêm', 'Semelhança de triângulos', g2(`<div>
              ${checks(['Os triângulos $ABC$ (grande), $HBA$ e $HAC$ têm os mesmos ângulos (caso <strong>AA</strong>) ⇒ são semelhantes.', 'Da semelhança: ${b|a} = {m|b}$ ⇒ $b² = a m$.', 'E ${h|m} = {n|h}$ ⇒ $h² = m n$.', 'Somando $b² + c² = a m + a n = a(m + n) = a²$: Pitágoras!'], '.95rem')}
            </div>`, callout('Pitágoras é consequência', 'O teorema de Pitágoras sai das relações $b² = a m$ e $c² = a n$ somadas.', 'decay'))]
      ],
      exemplos: [
        ['Achando a altura', 'Em um triângulo retângulo as projeções dos catetos medem $m = 9$ e $n = 16$. Calcule $h$, $a$, $b$ e $c$.', [['Altura', '$h² = 9 · 16 = 144$ ⇒ $h = 12$.'], ['Hipotenusa', '$a = 9 + 16 = 25$.'], ['Catetos', '$b² = 25 · 9 = 225$ ⇒ $b = 15$; $c² = 25 · 16 = 400$ ⇒ $c = 20$.']], '$h = 12$, $a = 25$, $b = 15$ e $c = 20$.'],
        ['Altura pela outra relação', 'Os catetos medem $5$ e $12$. Qual a altura relativa à hipotenusa?', [['Hipotenusa', '$a = √{25 + 144} = 13$.'], ['Relação', '$b · c = a · h$ ⇒ $60 = 13h$.']], '$h = {60|13} ≈ 4,62$.']
      ],
      pratique: [
        ['Altura', 'Se $m = 2$ e $n = 8$, a altura $h$ vale:', ['$4$', '$5$', '$10$', '$16$'], 0, '$h² = 16$. <strong>Alternativa A.</strong>'],
        ['Cateto', 'Com $a = 20$ e $m = 5$, o cateto $b$ vale:', ['$5$', '$10$', '$15$', '$100$'], 1, '$b² = 20 · 5 = 100$. <strong>Alternativa B.</strong>'],
        ['Altura pelos catetos', 'Catetos $3$ e $4$: a altura relativa à hipotenusa vale:', ['$1,2$', '$2,4$', '$3,5$', '$5$'], 1, '${3 · 4|5} = 2,4$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A escada e a viga', 'Em um telhado triangular retângulo, a viga vertical que desce do ângulo reto até a hipotenusa divide esta em segmentos de $1,8$ m e $3,2$ m. O comprimento da viga é:', ['$2,0$ m', '$2,4$ m', '$2,5$ m', '$5,0$ m', '$5,76$ m'], 1, '$h² = 1,8 · 3,2 = 5,76$ ⇒ $h = 2,4$. <strong>Alternativa B.</strong>'],
      cuidados: [['Projeções erradas', '$m$ é a projeção do cateto $b$ (o que “encosta” em $m$).'], ['Altura como cateto', 'A altura é perpendicular à <strong>hipotenusa</strong>, não a um cateto.'], ['Somar sem elevar', '$b² = a m$ (não $b = a m$).'], ['Esquecer $a = m + n$', 'A hipotenusa é a soma das projeções.']],
      quiz: [
        { q: '$h²$ é igual a:', o: ['$m + n$', '$m · n$', '$a · m$', '$b · c$'], a: 1 },
        { q: '$b · c$ é igual a:', o: ['$a · h$', '$m · n$', '$a²$', '$h²$'], a: 0 },
        { q: 'Com $m = 3$ e $n = 12$, $a$ vale:', o: ['$9$', '$15$', '$36$', '$6$'], a: 1 },
        { q: 'As relações métricas vêm da:', o: ['semelhança de triângulos', 'divisão de ângulos', 'raiz cúbica', 'proporção áurea'], a: 0 }
      ],
      sintese: [['Relações', 'b² = a·m, c² = a·n, h² = m·n, bc = ah, a² = b² + c².'], ['Origem', 'Semelhança AA dos três triângulos.'], ['Hipotenusa', 'a = m + n.']],
      msg: 'Na próxima aula: a razão trigonométrica seno.'
    },
    // ------------------------------------------------------------ aula 86
    {
      slug: 'razoes-trigonometricas-seno-i', titulo: 'Razões trigonométricas no triângulo retângulo: seno I',
      h1: `Razões trigonométricas: o ${co('decay')}seno</span> de um ângulo`,
      sub: 'A razão entre o cateto oposto a um ângulo e a hipotenusa depende só do ângulo, não do tamanho do triângulo. Essa razão é o seno e permite medir alturas e distâncias inacessíveis.',
      badges: [['sen θ'], ['oposto ÷ hipotenusa', 'growth'], ['H8', 'decay']], color: 'decay',
      roteiro: ['Elementos, definição e primeiros valores.', [['Elementos', 'hipotenusa, cateto oposto, adjacente', 'bulb'], ['Seno', 'oposto ÷ hipotenusa', 'target'], ['Triângulos semelhantes', 'a razão não muda', 'scale'], ['Ângulos notáveis', '30°, 45°, 60°', 'chart'], ['Usar o seno', 'achar um lado', 'book']]],
      objetivos: ['Identificar <strong>cateto oposto</strong>, <strong>adjacente</strong> e <strong>hipotenusa</strong> em relação a um ângulo.', 'Definir o <strong>seno</strong> de um ângulo agudo.', 'Calcular o seno e usar o seno para obter <strong>medidas de lados</strong>.'],
      dica: '$sen θ = {"cateto oposto"|"hipotenusa"}$. O cateto oposto é o que “fica de frente” para o ângulo $θ$.',
      gancho: { titulo: 'A altura da árvore', texto: 'Uma pessoa vê o topo de uma árvore sob um ângulo de $30°$ e está a $20$ m do pé dela (hipotenusa da linha de visada: $23,1$ m). Sem escalar a árvore, ela calcula a altura usando razões trigonométricas.', mini: ['O seno de um ângulo é a razão entre:', ['cateto oposto e hipotenusa', 'cateto adjacente e hipotenusa', 'os dois catetos', 'hipotenusa e cateto oposto'], 0, 'Seno = oposto ÷ hipotenusa. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Seno de um ângulo agudo', g2(`<div>
              ${checks(['No triângulo retângulo, em relação a um ângulo agudo $θ$: <strong>hipotenusa</strong> (lado oposto ao ângulo reto), <strong>cateto oposto</strong> (fica de frente a $θ$) e <strong>cateto adjacente</strong> (encosta em $θ$).', '<strong>$sen θ = {"oposto"|"hipotenusa"}$</strong>.', 'Como todos os triângulos retângulos com o mesmo ângulo $θ$ são semelhantes, a razão não depende do tamanho.', 'O seno de um ângulo agudo está sempre entre $0$ e $1$.'], '.95rem')}
            </div>`, card(`<strong>Valores notáveis</strong>
              ${tbl(['$θ$', '$30°$', '$45°$', '$60°$'], [['$sen θ$', '${1|2}$', '${√{2}|2}$', '${√{3}|2}$']])}`, 'primary'))],
        ['Teoria · simulador', 'Experimente', g2(`<div>
              ${checks(['No simulador, mude o ângulo e a hipotenusa e veja $sen θ$, $cos θ$ e $tg θ$.', 'Dobre a hipotenusa: o seno <strong>não muda</strong>.', 'Com $θ$ pequeno o seno é próximo de $0$; com $θ$ próximo de $90°$, próximo de $1$.', 'Calculadora: use o modo “graus” (DEG).'], '.95rem')}
            </div>`, callout('Usando o seno', 'Se $sen θ = {co|h}$ e você conhece $θ$ e $h$: $co = h · sen θ$. Se conhece $co$ e $θ$: $h = {co|sen θ}$.', 'decay'))]
      ],
      exemplos: [
        ['Calculando o seno', 'Em um triângulo retângulo, o cateto oposto a $θ$ mede $6$ e a hipotenusa $10$. Calcule $sen θ$.', [['Fórmula', '$sen θ = {6|10}$.'], ['Simplifique', '${3|5} = 0,6$.']], '$sen θ = 0,6$.'],
        ['Achando um lado', 'Uma escada de $8$ m forma $30°$ com o solo. A que altura está seu topo?', [['Oposto ao ângulo', 'É a altura $h$.'], ['Relação', '$sen 30° = {h|8}$ ⇒ $h = 8 · {1|2}$.']], '$h = 4$ m.']
      ],
      widget: { titulo: 'Seno, cosseno e tangente', html: w86.html, js: w86.js },
      pratique: [
        ['Valor', '$sen 30°$ vale:', ['${1|2}$', '${√{3}|2}$', '${√{2}|2}$', '$1$'], 0, '$sen 30° = {1|2}$. <strong>Alternativa A.</strong>'],
        ['Razão', 'Cateto oposto $5$ e hipotenusa $13$: $sen θ$ vale:', ['${5|13}$', '${12|13}$', '${13|5}$', '${5|12}$'], 0, 'Oposto ÷ hipotenusa. <strong>Alternativa A.</strong>'],
        ['Lado', 'Hipotenusa $20$ e $θ = 30°$: o cateto oposto mede:', ['$5$', '$10$', '$20√{3}$', '$40$'], 1, '$20 · {1|2} = 10$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O teleférico', 'Um cabo de teleférico de $200$ m de comprimento sobe formando $30°$ com a horizontal. A altura atingida é:', ['$50$ m', '$100$ m', '$100√{3}$ m', '$173$ m', '$200$ m'], 1, '$200 · sen 30° = 100$. <strong>Alternativa B.</strong>'],
      cuidados: [['Oposto × adjacente', 'Depende do ângulo escolhido: troque o ângulo e trocam os papéis dos catetos.'], ['Seno maior que 1', 'Nunca: o cateto é menor que a hipotenusa.'], ['Calculadora em radianos', 'Use graus (DEG) para estes problemas.'], ['Hipotenusa trocada', 'A hipotenusa é o maior lado, oposto ao ângulo reto.']],
      quiz: [
        { q: '$sen θ$ é:', o: ['oposto ÷ hipotenusa', 'adjacente ÷ hipotenusa', 'oposto ÷ adjacente', 'hipotenusa ÷ oposto'], a: 0 },
        { q: '$sen 30°$ vale:', o: ['${1|2}$', '${√{3}|2}$', '${√{2}|2}$', '$1$'], a: 0 },
        { q: 'O seno de um ângulo agudo está entre:', o: ['$−1$ e $0$', '$0$ e $1$', '$1$ e $2$', '$0$ e $2$'], a: 1 },
        { q: 'Dobrando os lados do triângulo, o seno do ângulo:', o: ['dobra', 'não muda', 'fica metade', 'quadruplica'], a: 1 }
      ],
      sintese: [['Seno', 'Oposto ÷ hipotenusa.'], ['Semelhança', 'A razão depende só do ângulo.'], ['Aplicação', 'Achar lados e alturas inacessíveis.']],
      msg: 'Na próxima aula: mais aplicações do seno e a tabela dos ângulos notáveis.'
    },
    // ------------------------------------------------------------ aula 87
    {
      slug: 'razoes-trigonometricas-seno-ii', titulo: 'Razões trigonométricas no triângulo retângulo: seno II',
      h1: `Razões trigonométricas: ${co('decay')}seno em problemas</span>`,
      sub: 'Alturas de prédios, inclinação de rampas e distâncias em rios: o seno resolve problemas em que se conhecem um ângulo e a hipotenusa (ou o cateto oposto). Vamos praticar.',
      badges: [['rampas'], ['alturas', 'growth'], ['ângulos notáveis', 'decay']], color: 'decay',
      roteiro: ['Problemas com seno.', [['Ler e desenhar', 'o triângulo retângulo', 'book'], ['Escolher o seno', 'oposto e hipotenusa', 'target'], ['Equação', 'sen θ = co ÷ h', 'scale'], ['Calcular', 'valores notáveis', 'chart'], ['Conferir', 'razoabilidade', 'bulb']]],
      objetivos: ['<strong>Modelar</strong> problemas com triângulo retângulo e usar o <strong>seno</strong>.', 'Utilizar os <strong>ângulos notáveis</strong> ($30°$, $45°$, $60°$).', 'Calcular a <strong>hipotenusa</strong> ou o <strong>cateto oposto</strong> a partir do seno.'],
      dica: 'Desenhe o triângulo, marque o ângulo, o lado conhecido e o desconhecido. Se forem <strong>oposto e hipotenusa</strong>, use o seno.',
      gancho: { titulo: 'A rampa de acessibilidade', texto: 'Uma rampa deve ter inclinação de $6°$ com o chão para subir $0,5$ m. Qual o comprimento da rampa? A altura é o cateto oposto; o comprimento é a hipotenusa: $c = {0,5|sen 6°}$.', mini: ['Se $sen θ = {3|5}$ e a hipotenusa mede $20$, o cateto oposto mede:', ['$6$', '$12$', '$15$', '$33,3$'], 1, '$20 · {3|5} = 12$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · estratégia', 'Do desenho à equação', g2(`<div>
              ${checks(['<strong>1.</strong> Desenhe o triângulo retângulo e marque o ângulo $θ$.', '<strong>2.</strong> Identifique o lado dado e o pedido (oposto, adjacente, hipotenusa).', '<strong>3.</strong> Escolha a razão (seno se são oposto e hipotenusa).', '<strong>4.</strong> Monte e resolva: $sen θ = {"oposto"|"hipotenusa"}$.'], '.95rem')}
            </div>`, card(`<strong>Tabela de senos</strong>
              ${tbl(['$θ$', '$sen θ$ (aprox.)'], [['$15°$', '$0,26$'], ['$30°$', '$0,50$'], ['$45°$', '$0,71$'], ['$60°$', '$0,87$'], ['$75°$', '$0,97$']])}`, 'primary'))],
        ['Teoria · usos', 'Alturas e distâncias', g2(`<div>
              ${checks(['<strong>Altura de um prédio</strong> visto sob $θ$ a partir de um ponto: use tangente se conhece a distância horizontal; use seno se conhece a linha de visada.', '<strong>Rampa:</strong> altura $= comprimento · sen θ$.', '<strong>Rio:</strong> largura $= distância · sen θ$ (com a medição inclinada).', '<strong>Ângulo de elevação</strong> e de <strong>depressão</strong> são medidos com a horizontal.'], '.95rem')}
            </div>`, callout('Aproximações', 'Para $45°$ use $sen ≈ 0,71$ e para $60°$, $0,87$ (ou ${√{3}|2}$).', 'decay'))]
      ],
      exemplos: [
        ['Altura da pipa', 'Uma pipa está presa a um fio esticado de $60$ m, formando $30°$ com o chão. A que altura está a pipa?', [['Oposto ao ângulo', 'A altura $h$.'], ['Seno', '$h = 60 · sen 30° = 60 · {1|2}$.']], '$h = 30$ m.'],
        ['Rampa', 'Uma rampa sobe $1,2$ m e faz $30°$ com o chão. Qual o comprimento?', [['Seno', '$sen 30° = {1,2|c}$.'], ['Isole', '$c = {1,2|0,5}$.']], '$c = 2,4$ m.']
      ],
      pratique: [
        ['Altura', 'Um fio de $50$ m forma $30°$ com o solo. A altura do ponto presa é:', ['$25$ m', '$30$ m', '$43,3$ m', '$100$ m'], 0, '$50 · {1|2}$. <strong>Alternativa A.</strong>'],
        ['Hipotenusa', 'Cateto oposto $15$ e $θ = 30°$: a hipotenusa mede:', ['$7,5$', '$15$', '$30$', '$26$'], 2, '$c = {15|0,5} = 30$. <strong>Alternativa C.</strong>'],
        ['Ângulo', 'Se $sen θ = {1|2}$, então $θ$ (agudo) vale:', ['$30°$', '$45°$', '$60°$', '$90°$'], 0, '$sen 30° = {1|2}$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A escada do bombeiro', 'Uma escada de $10$ m, apoiada numa parede, forma $60°$ com o chão. Com $sen 60° = 0,87$, a altura atingida é:', ['$5,0$ m', '$6,0$ m', '$8,7$ m', '$10,0$ m', '$11,5$ m'], 2, '$10 · 0,87 = 8,7$. <strong>Alternativa C.</strong>'],
      cuidados: [['Usar seno com o cateto adjacente', 'Seno envolve o <strong>oposto</strong>; com o adjacente use cosseno.'], ['Hipotenusa pequena', 'A hipotenusa deve ser o maior lado; confira.'], ['Ângulo em radianos', 'Use graus.'], ['Aproximações misturadas', 'Mantenha as casas decimais pedidas.']],
      quiz: [
        { q: 'Escada de $12$ m a $30°$ do chão: altura:', o: ['$6$ m', '$10,4$ m', '$12$ m', '$24$ m'], a: 0 },
        { q: 'Se $sen θ = 0,5$, $θ$ agudo vale:', o: ['$30°$', '$45°$', '$60°$', '$90°$'], a: 0 },
        { q: 'O seno é útil quando temos:', o: ['oposto e hipotenusa', 'adjacente e oposto', 'só ângulos', 'três ângulos'], a: 0 },
        { q: 'Rampa de $4$ m a $30°$: altura:', o: ['$1$ m', '$2$ m', '$3$ m', '$4$ m'], a: 1 }
      ],
      sintese: [['Estratégia', 'Desenhar, identificar lados, escolher a razão.'], ['Ângulos notáveis', 'sen 30° = 1/2; 45° ≈ 0,71; 60° ≈ 0,87.'], ['Aplicações', 'Rampas, alturas, escadas.']],
      msg: 'Na próxima aula: o cosseno.'
    }
  ]
});
