// Módulo 9 · Matemática · 3ª série · 3º trimestre — Circunferência trigonométrica (aulas 94, 95, 96 e 97 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w95 = Wd.ciclo('ct95');
const w96 = Wd.ciclo('ct96');
const w97 = Wd.ciclo('ct97');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/circunferencia-trigonometrica/',
  titulo: 'Circunferência trigonométrica', accent: 'decay', icon: 'wave', key: 'm3x09', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 94 a 97 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Revisão: plano cartesiano, medida de arcos em graus e radianos, quadrantes.'],
  aulas: [
    // ------------------------------------------------------------ aula 94
    {
      slug: 'circunferencia-trigonometrica-arcos-congruos', titulo: 'Circunferência trigonométrica: arcos côngruos',
      h1: `Circunferência ${co('decay')}trigonométrica:</span> arcos côngruos`,
      sub: 'Na circunferência trigonométrica (raio 1), cada arco leva a um ponto. Dar voltas completas não muda o ponto: arcos que diferem de múltiplos de 360° (ou 2π) são côngruos.',
      badges: [['côngruos'], ['x + k·360°', 'growth'], ['1ª determinação', 'decay']], color: 'decay',
      roteiro: ['Voltas e determinação principal.', [['Circunferência de raio 1', 'ciclo trigonométrico', 'target'], ['Origem e sentido', 'anti-horário positivo', 'scale'], ['Côngruos', 'mesmo ponto', 'bulb'], ['Expressão geral', 'x + k·360°', 'book'], ['1ª determinação', 'entre 0° e 360°', 'chart']]],
      objetivos: ['Localizar um arco na <strong>circunferência trigonométrica</strong>.', 'Reconhecer <strong>arcos côngruos</strong> e escrever a <strong>expressão geral</strong>.', 'Determinar a <strong>1ª determinação positiva</strong> de um arco.'],
      dica: 'Arcos côngruos: $x$ e $x + k · 360°$ (ou $x + 2kπ$), com $k$ inteiro. Para a 1ª determinação, <strong>subtraia voltas</strong> até ficar entre $0°$ e $360°$.',
      gancho: { titulo: 'A roda-gigante', texto: 'Uma cabine de roda-gigante parte do ponto mais à direita e gira no sentido anti-horário. Depois de $100°$ ou de $460°$ ($= 100° + 360°$) ela está <strong>no mesmo ponto</strong>. Arcos de $100°$ e $460°$ são côngruos.', mini: ['O arco de $400°$ é côngruo a:', ['$40°$', '$80°$', '$140°$', '$400°$ somente'], 0, '$400° − 360° = 40°$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · ciclo trigonométrico', 'Definições', g2(`<div>
              ${checks(['<strong>Circunferência trigonométrica:</strong> circunferência de raio $1$ com centro na origem do plano cartesiano.', '<strong>Origem dos arcos:</strong> ponto $A = (1, 0)$. <strong>Sentido positivo:</strong> anti-horário.', 'Cada arco $x$ determina um ponto $P$ da circunferência.', 'Os eixos dividem o círculo em <strong>4 quadrantes</strong>.'], '.95rem')}
            </div>`, card(`<strong>Quadrantes</strong>
              ${tbl(['Quadrante', 'Arco (graus)'], [['1º', '$0° < x < 90°$'], ['2º', '$90° < x < 180°$'], ['3º', '$180° < x < 270°$'], ['4º', '$270° < x < 360°$']])}`, 'primary'))],
        ['Teoria · côngruos', 'Expressão geral e 1ª determinação', g2(`<div>
              ${checks(['<strong>Côngruos:</strong> arcos com a mesma extremidade; diferem de voltas inteiras.', '<strong>Expressão geral:</strong> $x + k · 360°$, $k ∈ ℤ$ (ou $x + 2kπ$ em radianos).', '<strong>1ª determinação positiva:</strong> o arco côngruo entre $0°$ e $360°$.', 'Exemplo: $1 000°$: $1000 − 2 · 360 = 280°$.'], '.95rem')}
            </div>`, callout('Negativos', 'Arco negativo gira no sentido <strong>horário</strong>: $−60° ≡ 300°$ (some $360°$).', 'decay'))]
      ],
      exemplos: [
        ['1ª determinação', 'Qual a 1ª determinação positiva de $1 140°$?', [['Voltas', '$1140 ÷ 360 = 3$ voltas e resto $60$.'], ['Subtraia', '$1140 − 3 · 360 = 60$.']], 'A 1ª determinação é <strong>60°</strong>.'],
        ['Em radianos', 'Escreva a expressão geral dos arcos côngruos a ${π|3}$.', [['Radianos', 'Volta completa $= 2π$.']], '$x = {π|3} + 2kπ$, com $k ∈ ℤ$.']
      ],
      widget: { titulo: 'Girando na circunferência', html: w95.html, js: w95.js },
      pratique: [
        ['Côngruo', 'Qual arco é côngruo a $30°$?', ['$330°$', '$390°$', '$210°$', '$150°$'], 1, '$30° + 360° = 390°$. <strong>Alternativa B.</strong>'],
        ['1ª determinação', 'A 1ª determinação positiva de $780°$ é:', ['$60°$', '$120°$', '$240°$', '$420°$'], 0, '$780 − 720 = 60$. <strong>Alternativa A.</strong>'],
        ['Negativo', 'O arco de $−90°$ é côngruo a:', ['$90°$', '$180°$', '$270°$', '$360°$'], 2, '$−90 + 360 = 270$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A engrenagem', 'Uma engrenagem gira $1 230°$ no sentido anti-horário. Em qual posição angular ela fica, entre $0°$ e $360°$?', ['$30°$', '$90°$', '$150°$', '$210°$', '$330°$'], 2, '$3 · 360° = 1080°$ e $1230° − 1080° = 150°$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer o sentido', 'Anti-horário é positivo.'], ['Subtrair voltas erradas', 'Use $360°$ por volta (ou $2π$).'], ['Radianos × graus', 'Não misture $360$ com $2π$.'], ['Quadrante', 'Confira em qual quadrante está o arco.']],
      quiz: [
        { q: 'Arcos côngruos têm:', o: ['a mesma extremidade', 'o mesmo comprimento', 'sentidos opostos', 'raios diferentes'], a: 0 },
        { q: '$420°$ é côngruo a:', o: ['$30°$', '$60°$', '$120°$', '$420°$ apenas'], a: 1 },
        { q: 'O raio da circunferência trigonométrica é:', o: ['$0$', '$1$', '$2$', '$π$'], a: 1 },
        { q: 'O sentido positivo é:', o: ['horário', 'anti-horário', 'vertical', 'indefinido'], a: 1 }
      ],
      sintese: [['Côngruos', 'x + k·360° (ou 2kπ).'], ['1ª determinação', 'Subtraia voltas até 0° ≤ x < 360°.'], ['Quadrantes', 'Quatro regiões do plano.']],
      msg: 'Na próxima aula: o seno de um arco.'
    },
    // ------------------------------------------------------------ aula 95
    {
      slug: 'circunferencia-trigonometrica-seno-de-um-arco', titulo: 'Circunferência trigonométrica: seno de um arco',
      h1: `Circunferência trigonométrica: o ${co('decay')}seno de um arco</span>`,
      sub: 'Na circunferência de raio 1, o seno de um arco é a ordenada (coordenada y) do ponto correspondente. Assim, o seno vale para qualquer arco, não só para ângulos agudos.',
      badges: [['sen x = y'], ['eixo vertical', 'growth'], ['−1 ≤ sen x ≤ 1', 'decay']], color: 'decay',
      roteiro: ['Seno como altura.', [['Ponto P', '(cos x ; sen x)', 'target'], ['Seno = ordenada', 'altura do ponto', 'chart'], ['Sinais', 'por quadrante', 'scale'], ['Valores notáveis', '0, 30, 45, 60, 90…', 'book'], ['Limites', '−1 a 1', 'bulb']]],
      objetivos: ['Definir o <strong>seno de um arco</strong> na circunferência trigonométrica.', 'Determinar o <strong>sinal</strong> do seno em cada quadrante.', 'Conhecer o seno de arcos <strong>notáveis</strong> (múltiplos de $30°$ e $45°$).'],
      dica: 'O seno é a <strong>altura</strong> do ponto $P$: positivo acima do eixo $x$, negativo abaixo. Varia de $−1$ a $1$.',
      gancho: { titulo: 'A altura da cabine', texto: 'Em uma roda-gigante de raio $1$ (unidade), a altura da cabine em relação ao centro é exatamente $sen x$: sobe até $1$, desce até $−1$. A roda-gigante “desenha” a função seno.', mini: ['O maior valor de $sen x$ é:', ['$0$', '$1$', '$π$', '$∞$'], 1, 'No ponto mais alto da circunferência, $y = 1$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · seno de um arco', 'Ordenada do ponto', g2(`<div>
              ${checks(['O arco $x$ determina o ponto $P = (cos x ; sen x)$ na circunferência de raio $1$.', '<strong>$sen x$ é a ordenada de $P$</strong> (coordenada $y$).', '<strong>Sinais:</strong> positivo no 1º e 2º quadrantes; negativo no 3º e 4º.', '<strong>Limites:</strong> $−1 ≤ sen x ≤ 1$. $sen 90° = 1$, $sen 270° = −1$, $sen 0° = sen 180° = 0$.'], '.95rem')}
            </div>`, card(`<strong>Valores notáveis</strong>
              ${tbl(['$x$', '$0°$', '$30°$', '$45°$', '$60°$', '$90°$', '$180°$', '$270°$'], [['$sen x$', '$0$', '${1|2}$', '${√{2}|2}$', '${√{3}|2}$', '$1$', '$0$', '$−1$']])}`, 'primary'))],
        ['Teoria · simulador', 'Veja o seno mudar', g2(`<div>
              ${checks(['No simulador, arraste o arco de $0°$ a $360°$ e observe $sen x$ (altura do ponto).', 'No 1º e 2º quadrantes o ponto está acima do eixo: seno positivo.', 'No 3º e 4º, abaixo: seno negativo.', 'Em $90°$ o seno é máximo ($1$); em $270°$, mínimo ($−1$).'], '.95rem')}
            </div>`, callout('Simetrias', '$sen(180° − x) = sen x$ e $sen(180° + x) = −sen x$.', 'decay'))]
      ],
      exemplos: [
        ['Sinal', 'Qual o sinal de $sen 200°$?', [['Quadrante', '$200°$ está no 3º quadrante ($180° < 200° < 270°$).'], ['Seno', 'Ordenada negativa.']], '$sen 200° < 0$.'],
        ['Valor', 'Calcule $sen 150°$.', [['Simetria', '$sen(180° − 30°) = sen 30°$.']], '$sen 150° = {1|2}$.']
      ],
      widget: { titulo: 'Seno como altura do ponto', html: w95.html, js: w95.js },
      pratique: [
        ['Valor', '$sen 90°$ vale:', ['$0$', '${1|2}$', '$1$', '$−1$'], 2, 'Ponto $(0, 1)$. <strong>Alternativa C.</strong>'],
        ['Sinal', '$sen 300°$ é:', ['positivo', 'negativo', 'zero', 'maior que 1'], 1, '4º quadrante. <strong>Alternativa B.</strong>'],
        ['Simetria', '$sen 135°$ vale:', ['$−{√{2}|2}$', '${√{2}|2}$', '${1|2}$', '$0$'], 1, '$sen(180° − 45°) = sen 45°$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O pêndulo', 'A posição vertical de um ponto que gira numa circunferência de raio $1$ é $sen x$. O menor valor que essa posição pode assumir é:', ['$−1$', '$0$', '$1$', '$−π$', '$π$'], 0, 'Ponto mais baixo: $y = −1$. <strong>Alternativa A.</strong>'],
      cuidados: [['Seno × cosseno', 'Seno é a ordenada ($y$); cosseno é a abscissa ($x$).'], ['Sinais por quadrante', 'Seno: $+ + − −$ nos quadrantes 1 a 4.'], ['Valores acima de 1', 'O seno nunca passa de $1$.'], ['Radianos × graus', 'Cuide da unidade na calculadora.']],
      quiz: [
        { q: 'O seno é a:', o: ['abscissa do ponto', 'ordenada do ponto', 'distância à origem', 'tangente'], a: 1 },
        { q: '$sen 270°$ vale:', o: ['$0$', '$1$', '$−1$', '${1|2}$'], a: 2 },
        { q: '$sen 210°$ é:', o: ['positivo', 'negativo', 'zero', 'infinito'], a: 1 },
        { q: 'O conjunto de valores do seno é:', o: ['$[0, 1]$', '$[−1, 1]$', '$ℝ$', '$[0, 2]$'], a: 1 }
      ],
      sintese: [['Seno', 'Ordenada de P na circunferência de raio 1.'], ['Sinais', '+ + − −.'], ['Limites', '−1 ≤ sen x ≤ 1.']],
      msg: 'Na próxima aula: o cosseno de um arco.'
    },
    // ------------------------------------------------------------ aula 96
    {
      slug: 'circunferencia-trigonometrica-cosseno-de-um-arco', titulo: 'Circunferência trigonométrica: cosseno de um arco',
      h1: `Circunferência trigonométrica: o ${co('decay')}cosseno de um arco</span>`,
      sub: 'O cosseno de um arco é a abscissa (coordenada x) do ponto da circunferência de raio 1. Positivo à direita do eixo y, negativo à esquerda.',
      badges: [['cos x = x'], ['eixo horizontal', 'growth'], ['−1 ≤ cos x ≤ 1', 'decay']], color: 'decay',
      roteiro: ['Cosseno como posição horizontal.', [['Ponto P', '(cos x ; sen x)', 'target'], ['Cosseno = abscissa', 'posição horizontal', 'chart'], ['Sinais', 'por quadrante', 'scale'], ['Valores notáveis', '0, 30, 45, 60, 90…', 'book'], ['Simetrias', 'cos(−x) = cos x', 'bulb']]],
      objetivos: ['Definir o <strong>cosseno de um arco</strong> na circunferência trigonométrica.', 'Determinar o <strong>sinal</strong> do cosseno por quadrante.', 'Reconhecer a <strong>paridade</strong>: $cos(−x) = cos x$.'],
      dica: 'O cosseno é a <strong>abscissa</strong> do ponto $P$: positivo à direita do eixo $y$ (1º e 4º quadrantes), negativo à esquerda (2º e 3º).',
      gancho: { titulo: 'A sombra no chão', texto: 'A sombra de uma cabine da roda-gigante projetada no chão, quando a luz vem de cima, move-se para a direita e para a esquerda: é o $cos x$. Em $0°$ a sombra está no ponto mais à direita ($1$); em $180°$, no mais à esquerda ($−1$).', mini: ['$cos 180°$ vale:', ['$−1$', '$0$', '$1$', '${1|2}$'], 0, 'Ponto $(−1, 0)$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · cosseno de um arco', 'Abscissa do ponto', g2(`<div>
              ${checks(['O ponto $P = (cos x ; sen x)$.', '<strong>$cos x$ é a abscissa de $P$</strong> (coordenada $x$).', '<strong>Sinais:</strong> positivo no 1º e 4º quadrantes; negativo no 2º e 3º.', '<strong>Valores:</strong> $cos 0° = 1$, $cos 90° = 0$, $cos 180° = −1$, $cos 270° = 0$, $cos 360° = 1$.'], '.95rem')}
            </div>`, card(`<strong>Valores notáveis</strong>
              ${tbl(['$x$', '$0°$', '$30°$', '$45°$', '$60°$', '$90°$', '$180°$', '$270°$'], [['$cos x$', '$1$', '${√{3}|2}$', '${√{2}|2}$', '${1|2}$', '$0$', '$−1$', '$0$']])}`, 'primary'))],
        ['Teoria · simetrias', 'Quadrantes e paridade', g2(`<div>
              ${checks(['<strong>Simetria em relação ao eixo $y$:</strong> $cos(180° − x) = −cos x$.', '<strong>Paridade:</strong> $cos(−x) = cos x$ (o cosseno é função <strong>par</strong>).', 'Para o seno: $sen(−x) = −sen x$ (função <strong>ímpar</strong>).', 'Exemplo: $cos 120° = −cos 60° = −{1|2}$.'], '.95rem')}
            </div>`, callout('Resumo de sinais', 'Seno: $+ + − −$; Cosseno: $+ − − +$ (nos quadrantes 1, 2, 3, 4).', 'decay'))]
      ],
      exemplos: [
        ['Sinal', 'Qual o sinal de $cos 100°$?', [['Quadrante', '$100°$ está no 2º quadrante.'], ['Cosseno', 'Abscissa negativa.']], '$cos 100° < 0$.'],
        ['Valor', 'Calcule $cos 135°$.', [['Simetria', '$cos(180° − 45°) = −cos 45°$.']], '$cos 135° = −{√{2}|2}$.']
      ],
      widget: { titulo: 'Cosseno como posição horizontal', html: w96.html, js: w96.js },
      pratique: [
        ['Valor', '$cos 0°$ vale:', ['$0$', '$1$', '$−1$', '${1|2}$'], 1, 'Ponto $(1, 0)$. <strong>Alternativa B.</strong>'],
        ['Sinal', '$cos 250°$ é:', ['positivo', 'negativo', 'zero', 'maior que 1'], 1, '3º quadrante. <strong>Alternativa B.</strong>'],
        ['Paridade', '$cos(−60°)$ vale:', ['${1|2}$', '$−{1|2}$', '$0$', '$1$'], 0, 'Função par: $cos 60°$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A sombra da roda', 'A posição horizontal de um ponto numa circunferência de raio $1$ é $cos x$. Em que arco (entre $0°$ e $360°$) essa posição vale $−1$?', ['$0°$', '$90°$', '$180°$', '$270°$', '$360°$'], 2, 'Ponto $(−1, 0)$. <strong>Alternativa C.</strong>'],
      cuidados: [['Seno × cosseno', 'Cosseno é a abscissa ($x$).'], ['Sinais por quadrante', 'Cosseno: $+ − − +$.'], ['Paridade', 'Cosseno é par; seno é ímpar.'], ['Valores maiores que 1', 'O cosseno nunca passa de $1$.']],
      quiz: [
        { q: 'O cosseno é a:', o: ['abscissa do ponto', 'ordenada do ponto', 'altura', 'tangente'], a: 0 },
        { q: '$cos 90°$ vale:', o: ['$1$', '$0$', '$−1$', '${1|2}$'], a: 1 },
        { q: '$cos 300°$ é:', o: ['positivo', 'negativo', 'zero', 'infinito'], a: 0 },
        { q: 'O cosseno é função:', o: ['par', 'ímpar', 'constante', 'nenhuma dessas'], a: 0 }
      ],
      sintese: [['Cosseno', 'Abscissa de P.'], ['Sinais', '+ − − +.'], ['Paridade', 'cos(−x) = cos x.']],
      msg: 'Na próxima aula: redução ao 1º quadrante.'
    },
    // ------------------------------------------------------------ aula 97
    {
      slug: 'circunferencia-trigonometrica-reducao-ao-primeiro-quadrante', titulo: 'Circunferência trigonométrica: seno e cosseno de um arco — redução ao 1º quadrante',
      h1: `Redução ao ${co('decay')}1º quadrante:</span> seno e cosseno de qualquer arco`,
      sub: 'Com as simetrias da circunferência, qualquer seno ou cosseno se reduz a um valor do 1º quadrante, trocando apenas o sinal. Com isso calculamos sen 210°, cos 300°, sen 315° etc.',
      badges: [['simetrias'], ['arco de referência', 'growth'], ['sinais', 'decay']], color: 'decay',
      roteiro: ['Quatro quadrantes, um só valor.', [['Arco de referência', 'ângulo agudo associado', 'target'], ['2º quadrante', '180° − x', 'scale'], ['3º quadrante', 'x − 180°', 'chart'], ['4º quadrante', '360° − x', 'book'], ['Sinal', 'regras por quadrante', 'bulb']]],
      objetivos: ['Reduzir um arco ao <strong>1º quadrante</strong> usando simetrias.', 'Calcular <strong>seno e cosseno</strong> de arcos notáveis nos 4 quadrantes.', 'Aplicar as regras de <strong>sinal</strong> por quadrante.'],
      dica: 'Procedimento: ache o <strong>arco de referência</strong> (agudo), calcule seno/cosseno dele e <strong>coloque o sinal</strong> do quadrante.',
      gancho: { titulo: 'O mesmo valor, outro sinal', texto: 'Em $30°$, $150°$, $210°$ e $330°$ os senos têm o mesmo valor absoluto, ${1|2}$, mas sinais diferentes: $+, +, −, −$. O arco de referência é sempre $30°$.', mini: ['O arco de referência de $150°$ é:', ['$30°$', '$60°$', '$150°$', '$210°$'], 0, '$180° − 150° = 30°$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · redução', 'Arco de referência', g2(`<div>
              ${tbl(['Quadrante', 'Arco de referência', 'sen', 'cos'], [['1º ($x$)', '$x$', '$+$', '$+$'], ['2º', '$180° − x$', '$+$', '$−$'], ['3º', '$x − 180°$', '$−$', '$−$'], ['4º', '$360° − x$', '$−$', '$+$']])}
            </div>`, callout('Regra', 'O valor absoluto vem do arco de referência; o sinal vem do quadrante do arco original.', 'decay'))],
        ['Teoria · exemplos', 'Calculando', g2(`<div>
              ${checks(['$sen 210°$: 3º quadrante; referência $30°$ ⇒ $−sen 30° = −{1|2}$.', '$cos 300°$: 4º quadrante; referência $60°$ ⇒ $+cos 60° = {1|2}$.', '$sen 315°$: 4º; referência $45°$ ⇒ $−{√{2}|2}$.', '$cos 120°$: 2º; referência $60°$ ⇒ $−{1|2}$.'], '.95rem')}
            </div>`, card(`<strong>Combinações úteis</strong>
              <p style="font-size:.92rem;margin-top:8px;">Em radianos: $sen {5π|6} = sen {π|6} = {1|2}$; $cos {4π|3} = −cos {π|3} = −{1|2}$.</p>`, 'primary'))]
      ],
      exemplos: [
        ['Redução', 'Calcule $sen 240°$.', [['Quadrante', '3º ($180° < 240° < 270°$).'], ['Referência', '$240° − 180° = 60°$.'], ['Sinal', 'Seno negativo no 3º quadrante.']], '$sen 240° = −sen 60° = −{√{3}|2}$.'],
        ['Cosseno', 'Calcule $cos 330°$.', [['Quadrante', '4º.'], ['Referência', '$360° − 330° = 30°$.'], ['Sinal', 'Cosseno positivo.']], '$cos 330° = cos 30° = {√{3}|2}$.']
      ],
      widget: { titulo: 'Arco, quadrante e valores', html: w97.html, js: w97.js },
      pratique: [
        ['Seno', '$sen 150°$ vale:', ['${1|2}$', '$−{1|2}$', '${√{3}|2}$', '$−{√{3}|2}$'], 0, 'Referência $30°$, 2º quadrante: positivo. <strong>Alternativa A.</strong>'],
        ['Cosseno', '$cos 225°$ vale:', ['${√{2}|2}$', '$−{√{2}|2}$', '${1|2}$', '$−{1|2}$'], 1, 'Referência $45°$, 3º quadrante: negativo. <strong>Alternativa B.</strong>'],
        ['Soma', '$sen 210° + cos 120°$ vale:', ['$−1$', '$0$', '$1$', '${1|2}$'], 0, '$−{1|2} + (−{1|2}) = −1$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A posição no ciclo', 'Um ponto gira $330°$ numa circunferência de raio $1$. A coordenada vertical dele (seno) é:', ['$−{1|2}$', '${1|2}$', '$−{√{3}|2}$', '${√{3}|2}$', '$0$'], 0, 'Referência $30°$, 4º quadrante: seno negativo. <strong>Alternativa A.</strong>'],
      cuidados: [['Referência errada', 'Use $180° − x$, $x − 180°$ ou $360° − x$ conforme o quadrante.'], ['Sinal esquecido', 'Atribua o sinal do quadrante ao final.'], ['Trocar seno e cosseno', 'Sinais: seno $+ + − −$; cosseno $+ − − +$.'], ['Arcos maiores que 360°', 'Reduza antes à 1ª determinação.']],
      quiz: [
        { q: '$sen 330°$ vale:', o: ['${1|2}$', '$−{1|2}$', '${√{3}|2}$', '$−{√{3}|2}$'], a: 1 },
        { q: '$cos 120°$ vale:', o: ['${1|2}$', '$−{1|2}$', '${√{3}|2}$', '$−{√{3}|2}$'], a: 1 },
        { q: 'No 3º quadrante, seno e cosseno são:', o: ['positivos', 'negativos', 'um + e outro −', 'zero'], a: 1 },
        { q: 'O arco de referência de $300°$ é:', o: ['$30°$', '$60°$', '$120°$', '$240°$'], a: 1 }
      ],
      sintese: [['Arco de referência', 'Ângulo agudo associado ao arco.'], ['Sinal', 'Do quadrante original.'], ['Reduzir', 'Sempre à 1ª determinação antes.']],
      msg: 'Na próxima aula: as funções trigonométricas e seus gráficos.'
    }
  ]
});
