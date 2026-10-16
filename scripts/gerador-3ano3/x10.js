// Módulo 10 · Matemática · 3ª série · 3º trimestre — Funções trigonométricas (aulas 98, 99 e 100 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w98 = Wd.trigf('tf98');
const w99 = Wd.trigf('tf99');
const w100 = Wd.trigf('tf100');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/funcoes-trigonometricas/',
  titulo: 'Funções trigonométricas', accent: 'decay', icon: 'wave', key: 'm3x10', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 98 a 100 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Revisão: plano cartesiano; domínio, contradomínio e imagem de uma função.'],
  aulas: [
    // ------------------------------------------------------------ aula 98
    {
      slug: 'funcoes-trigonometricas-funcao-seno', titulo: 'Funções trigonométricas: função seno',
      h1: `Função ${co('decay')}seno:</span> f(x) = sen x`,
      sub: 'A função seno leva cada número real x ao seno do arco de x radianos. Seu gráfico, a senoide, repete-se a cada 2π e descreve fenômenos periódicos: ondas, marés, correntes alternadas.',
      badges: [['f(x) = sen x'], ['período 2π', 'growth'], ['imagem [−1, 1]', 'decay']], color: 'decay',
      roteiro: ['Do ciclo ao gráfico.', [['Definição', 'f(x) = sen x', 'target'], ['Gráfico', 'a senoide', 'chart'], ['Período', '2π', 'scale'], ['Domínio e imagem', 'ℝ e [−1, 1]', 'book'], ['Amplitude e período', 'a + b·sen(cx + d)', 'bulb']]],
      objetivos: ['Construir e interpretar o <strong>gráfico da função seno</strong>.', 'Identificar <strong>domínio, imagem, período e sinal</strong>.', 'Reconhecer o efeito de <strong>$a$, $b$, $c$, $d$</strong> em $f(x) = a + b · sen(c x + d)$.'],
      dica: 'Função seno: <strong>período $2π$</strong>, imagem $[−1, 1]$, passa pela origem, é <strong>ímpar</strong>. Em $f(x) = a + b · sen(c x + d)$: amplitude $|b|$, período ${2π|c}$, deslocamento vertical $a$.',
      gancho: { titulo: 'A maré do porto', texto: 'A altura da maré em um porto varia como $h(t) = 2 + 1,5 · sen({π t|6})$ metros ($t$ em horas). A maré sobe e desce de forma periódica: máxima $3,5$ m, mínima $0,5$ m, ciclo de $12$ horas.', mini: ['O período de $f(x) = sen x$ é:', ['$π$', '$2π$', '$4π$', '$1$'], 1, 'A função se repete a cada $2π$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · gráfico e propriedades', 'A senoide', g2(`<div>
              ${checks(['<strong>Função seno:</strong> $f: ℝ → ℝ$, $f(x) = sen x$ ($x$ em radianos).', '<strong>Imagem:</strong> $[−1, 1]$. <strong>Período:</strong> $2π$.', 'Zeros: $x = kπ$. Máximo $1$ em $x = {π|2} + 2kπ$; mínimo $−1$ em $x = {3π|2} + 2kπ$.', 'É <strong>ímpar</strong>: $sen(−x) = −sen x$ (gráfico simétrico em relação à origem).'], '.95rem')}
            </div>`, card(`<strong>Pontos-chave de 0 a 2π</strong>
              ${tbl(['$x$', '$0$', '${π|2}$', '$π$', '${3π|2}$', '$2π$'], [['$sen x$', '$0$', '$1$', '$0$', '$−1$', '$0$']])}`, 'primary'))],
        ['Teoria · parâmetros', 'f(x) = a + b·sen(c·x + d)', g2(`<div>
              ${checks(['<strong>$a$:</strong> deslocamento vertical (o “centro” da onda).', '<strong>$b$:</strong> amplitude $|b|$ (altura da onda); se $b < 0$, a onda é refletida.', '<strong>$c$:</strong> período $= {2π|c}$.', '<strong>$d$:</strong> deslocamento horizontal (fase): a onda desloca ${−d|c}$.'], '.95rem')}
            </div>`, callout('Experimente', 'No simulador, escolha “seno” e varie $a$, $b$, $c$ e $d$. A imagem é $[a − |b|, a + |b|]$.', 'decay'))]
      ],
      widget: { titulo: 'Funções trigonométricas', html: w98.html, js: w98.js },
      exemplos: [
        ['Imagem e período', 'Para $f(x) = 3 + 2 · sen(4x)$, determine a imagem e o período.', [['Imagem', '$[3 − 2, 3 + 2] = [1, 5]$.'], ['Período', '${2π|4} = {π|2}$.']], 'Imagem $[1, 5]$ e período ${π|2}$.'],
        ['Valor numérico', 'Calcule $f({π|6})$ para $f(x) = 2 · sen x$.', [['Seno', '$sen {π|6} = {1|2}$.'], ['Multiplique', '$2 · {1|2} = 1$.']], '$f({π|6}) = 1$.']
      ],
      pratique: [
        ['Imagem', 'A imagem de $f(x) = 2 · sen x$ é:', ['$[−1, 1]$', '$[−2, 2]$', '$[0, 2]$', '$ℝ$'], 1, 'Amplitude $2$. <strong>Alternativa B.</strong>'],
        ['Período', 'O período de $f(x) = sen(2x)$ é:', ['$π$', '$2π$', '${π|2}$', '$4π$'], 0, '${2π|2} = π$. <strong>Alternativa A.</strong>'],
        ['Deslocamento', 'A imagem de $f(x) = 1 + sen x$ é:', ['$[−1, 1]$', '$[0, 2]$', '$[1, 2]$', '$[0, 1]$'], 1, '$[1 − 1, 1 + 1]$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A maré', 'A altura da maré é $h(t) = 3 + 1 · sen({π t|6})$ metros. A altura máxima é:', ['$2$ m', '$3$ m', '$4$ m', '$6$ m', '$12$ m'], 2, '$3 + 1 = 4$. <strong>Alternativa C.</strong>'],
      cuidados: [['Período $2π$ para todo $c$', 'O período é ${2π|c}$.'], ['Amplitude com sinal', 'Use $|b|$ para a amplitude.'], ['Graus × radianos', 'Na função, $x$ é em radianos.'], ['Imagem sem deslocamento', 'Some $a$ aos extremos.']],
      quiz: [
        { q: 'A imagem de $sen x$ é:', o: ['$[0, 1]$', '$[−1, 1]$', '$ℝ$', '$[0, 2π]$'], a: 1 },
        { q: 'O período de $sen x$ é:', o: ['$π$', '$2π$', '$1$', '$4$'], a: 1 },
        { q: '$f(x) = 5 sen x$ tem amplitude:', o: ['$1$', '$5$', '$10$', '$2π$'], a: 1 },
        { q: 'A função seno é:', o: ['par', 'ímpar', 'constante', 'nem par nem ímpar'], a: 1 }
      ],
      sintese: [['Seno', 'Período 2π; imagem [−1, 1]; ímpar.'], ['Parâmetros', 'a desloca, |b| amplitude, c muda o período.'], ['Aplicações', 'Marés, ondas, corrente alternada.']],
      msg: 'Na próxima aula: a função cosseno.'
    },
    // ------------------------------------------------------------ aula 99
    {
      slug: 'funcoes-trigonometricas-funcao-cosseno', titulo: 'Funções trigonométricas: função cosseno',
      h1: `Função ${co('decay')}cosseno:</span> f(x) = cos x`,
      sub: 'A função cosseno tem o mesmo formato da senoide, deslocada de π/2 para a esquerda: começa no máximo, em x = 0. É par, de período 2π e imagem [−1, 1].',
      badges: [['f(x) = cos x'], ['período 2π', 'growth'], ['par', 'decay']], color: 'decay',
      roteiro: ['Gráfico e propriedades.', [['Definição', 'f(x) = cos x', 'target'], ['Gráfico', 'a cossenoide', 'chart'], ['Propriedades', 'período, imagem, paridade', 'scale'], ['Relação com o seno', 'cos x = sen(x + π/2)', 'book'], ['Aplicações', 'oscilações', 'bulb']]],
      objetivos: ['Construir e interpretar o <strong>gráfico da função cosseno</strong>.', 'Identificar <strong>domínio, imagem, período e paridade</strong>.', 'Relacionar o cosseno ao seno por um <strong>deslocamento</strong>.'],
      dica: 'Função cosseno: <strong>par</strong>, período $2π$, imagem $[−1, 1]$, valor $1$ em $x = 0$. $cos x = sen(x + {π|2})$.',
      gancho: { titulo: 'A mola', texto: 'Uma massa presa a uma mola é puxada $4$ cm e solta: sua posição é $x(t) = 4 · cos(2t)$ cm. Em $t = 0$ ela está no ponto mais afastado ($4$ cm) e oscila entre $−4$ e $4$.', mini: ['$cos 0$ vale:', ['$0$', '$1$', '$−1$', '${1|2}$'], 1, 'Máximo da função. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · gráfico e propriedades', 'A cossenoide', g2(`<div>
              ${checks(['<strong>Função cosseno:</strong> $f(x) = cos x$; domínio $ℝ$; imagem $[−1, 1]$; período $2π$.', 'Zeros: $x = {π|2} + kπ$. Máximo $1$ em $x = 2kπ$; mínimo $−1$ em $x = π + 2kπ$.', 'É <strong>par</strong>: $cos(−x) = cos x$ (gráfico simétrico em relação ao eixo $y$).', '$cos x = sen(x + {π|2})$: é a senoide deslocada.'], '.95rem')}
            </div>`, card(`<strong>Pontos-chave de 0 a 2π</strong>
              ${tbl(['$x$', '$0$', '${π|2}$', '$π$', '${3π|2}$', '$2π$'], [['$cos x$', '$1$', '$0$', '$−1$', '$0$', '$1$']])}`, 'primary'))],
        ['Teoria · parâmetros', 'f(x) = a + b·cos(c·x + d)', g2(`<div>
              ${checks(['<strong>$a$:</strong> deslocamento vertical.', '<strong>$|b|$:</strong> amplitude; $b < 0$ inverte a onda.', '<strong>$c$:</strong> período ${2π|c}$.', '<strong>Imagem:</strong> $[a − |b|, a + |b|]$.'], '.95rem')}
            </div>`, callout('Experimente', 'No simulador, escolha “cosseno” e compare com o seno: a curva começa no máximo.', 'decay'))]
      ],
      widget: { titulo: 'Funções trigonométricas', html: w99.html, js: w99.js },
      exemplos: [
        ['Período e imagem', 'Para $f(x) = 1 + 3 · cos(2x)$, determine imagem e período.', [['Imagem', '$[1 − 3, 1 + 3] = [−2, 4]$.'], ['Período', '${2π|2} = π$.']], 'Imagem $[−2, 4]$ e período $π$.'],
        ['Valor', 'Calcule $f({π|3})$ para $f(x) = 4 · cos x$.', [['Cosseno', '$cos {π|3} = {1|2}$.'], ['Multiplique', '$4 · {1|2} = 2$.']], '$f({π|3}) = 2$.']
      ],
      pratique: [
        ['Valor', '$cos π$ vale:', ['$0$', '$1$', '$−1$', '${1|2}$'], 2, 'Ponto $(−1, 0)$. <strong>Alternativa C.</strong>'],
        ['Imagem', 'A imagem de $f(x) = 3 · cos x$ é:', ['$[−1, 1]$', '$[−3, 3]$', '$[0, 3]$', '$ℝ$'], 1, 'Amplitude $3$. <strong>Alternativa B.</strong>'],
        ['Paridade', '$cos(−{π|4})$ vale:', ['$−{√{2}|2}$', '${√{2}|2}$', '$0$', '$1$'], 1, 'Par: $cos {π|4}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A oscilação da mola', 'A posição de uma mola é $x(t) = 5 · cos(3t)$ cm. A maior distância que ela atinge em relação ao ponto de equilíbrio é:', ['$3$ cm', '$5$ cm', '$8$ cm', '$15$ cm', '$2π$ cm'], 1, 'Amplitude $5$. <strong>Alternativa B.</strong>'],
      cuidados: [['Confundir seno e cosseno', 'O cosseno começa no máximo ($x = 0$).'], ['Paridade', 'Cosseno é par; seno é ímpar.'], ['Amplitude com sinal', 'Use $|b|$.'], ['Radianos', 'Use radianos para $x$.']],
      quiz: [
        { q: 'A função cosseno é:', o: ['par', 'ímpar', 'constante', 'nenhuma'], a: 0 },
        { q: '$cos x$ vale $1$ em:', o: ['$x = 0$', '$x = {π|2}$', '$x = π$', '$x = {3π|2}$'], a: 0 },
        { q: 'O período de $cos(4x)$ é:', o: ['$2π$', '$π$', '${π|2}$', '$4π$'], a: 2 },
        { q: '$cos x = sen(x +$', o: ['$π)$', '${π|2})$', '$2π)$', '${π|4})$'], a: 1 }
      ],
      sintese: [['Cosseno', 'Par; período 2π; imagem [−1, 1].'], ['Relação', 'cos x = sen(x + π/2).'], ['Parâmetros', 'Mesmos do seno.']],
      msg: 'Na próxima aula: a função tangente.'
    },
    // ------------------------------------------------------------ aula 100
    {
      slug: 'funcoes-trigonometricas-funcao-tangente', titulo: 'Funções trigonométricas: função tangente',
      h1: `Função ${co('decay')}tangente:</span> f(x) = tg x`,
      sub: 'A tangente tem gráfico diferente: é periódica com período π, não tem máximo nem mínimo (imagem é todo ℝ) e possui assíntotas verticais onde o cosseno se anula.',
      badges: [['f(x) = tg x'], ['período π', 'growth'], ['assíntotas', 'decay']], color: 'decay',
      roteiro: ['Gráfico e propriedades da tangente.', [['Definição', 'tg x = sen x ÷ cos x', 'target'], ['Domínio', 'cos x ≠ 0', 'scale'], ['Gráfico', 'ramos com assíntotas', 'chart'], ['Período', 'π', 'book'], ['Ímpar', 'tg(−x) = −tg x', 'bulb']]],
      objetivos: ['Definir a <strong>função tangente</strong> $f(x) = tg x = {sen x|cos x}$.', 'Determinar <strong>domínio, imagem e período</strong>.', 'Reconhecer as <strong>assíntotas verticais</strong> e interpretar o gráfico.'],
      dica: 'Domínio: $x ≠ {π|2} + kπ$ (onde $cos x = 0$). Imagem: $ℝ$. Período: $π$. É <strong>ímpar</strong>.',
      gancho: { titulo: 'A inclinação da rampa', texto: 'A tangente do ângulo de uma rampa é sua declividade: quanto maior o ângulo, mais íngreme. Perto de $90°$ a rampa fica quase vertical e a tangente “explode”: não existe $tg 90°$.', mini: ['Quando $cos x = 0$, a tangente:', ['vale $0$', 'vale $1$', 'não existe', 'vale $−1$'], 2, 'Divisão por zero. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · gráfico e propriedades', 'A tangentoide', g2(`<div>
              ${checks(['<strong>Função tangente:</strong> $f(x) = tg x = {sen x|cos x}$.', '<strong>Domínio:</strong> $ℝ − \\{ {π|2} + kπ \\}$. <strong>Imagem:</strong> $ℝ$.', '<strong>Período:</strong> $π$. Zeros: $x = kπ$.', '<strong>Assíntotas verticais:</strong> $x = {π|2} + kπ$. É <strong>ímpar</strong>.'], '.95rem')}
            </div>`, card(`<strong>Valores notáveis</strong>
              ${tbl(['$x$', '$0$', '${π|6}$', '${π|4}$', '${π|3}$'], [['$tg x$', '$0$', '${√{3}|3}$', '$1$', '$√{3}$']])}`, 'primary'))],
        ['Teoria · sinais e parâmetros', 'Por quadrante', g2(`<div>
              ${checks(['<strong>Sinais da tangente:</strong> $+ − + −$ nos quadrantes 1, 2, 3, 4.', '<strong>Crescente</strong> em cada ramo.', 'Em $f(x) = a + b · tg(c x + d)$: período ${π|c}$.', 'No simulador, escolha “tangente” e veja as assíntotas.'], '.95rem')}
            </div>`, callout('Comparando', 'Seno e cosseno: limitados ($[−1, 1]$). Tangente: ilimitada ($ℝ$).', 'decay'))]
      ],
      widget: { titulo: 'Funções trigonométricas', html: w100.html, js: w100.js },
      exemplos: [
        ['Domínio', 'Qual o domínio de $f(x) = tg(2x)$?', [['Condição', '$2x ≠ {π|2} + kπ$.'], ['Isole', '$x ≠ {π|4} + {kπ|2}$.']], '$x ≠ {π|4} + {kπ|2}$, com $k ∈ ℤ$.'],
        ['Período', 'Qual o período de $f(x) = tg(3x)$?', [['Fórmula', '${π|c}$ com $c = 3$.']], 'O período é ${π|3}$.']
      ],
      pratique: [
        ['Valor', '$tg {π|4}$ vale:', ['$0$', '$1$', '$√{3}$', 'não existe'], 1, '$tg 45° = 1$. <strong>Alternativa B.</strong>'],
        ['Período', 'O período de $tg x$ é:', ['$π$', '$2π$', '${π|2}$', '$1$'], 0, 'Período $π$. <strong>Alternativa A.</strong>'],
        ['Existência', 'Qual valor está fora do domínio da tangente?', ['$0$', '${π|4}$', '${π|2}$', '$π$'], 2, '$cos {π|2} = 0$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A tangente da rampa', 'Uma rampa tem declividade $tg θ = 0,5$. Isso significa que a cada $10$ m na horizontal, a rampa sobe:', ['$0,5$ m', '$2$ m', '$5$ m', '$10$ m', '$20$ m'], 2, '$10 · 0,5 = 5$. <strong>Alternativa C.</strong>'],
      cuidados: [['Período $2π$ para a tangente', 'É $π$.'], ['Incluir $90°$ no domínio', 'Não existe $tg 90°$.'], ['Imagem limitada', 'A imagem é todo $ℝ$.'], ['Sinais', 'Tangente: $+ − + −$.']],
      quiz: [
        { q: 'A imagem de $tg x$ é:', o: ['$[−1, 1]$', '$ℝ$', '$[0, +∞)$', '$[0, 1]$'], a: 1 },
        { q: 'O período de $tg x$ é:', o: ['$π$', '$2π$', '${π|2}$', '$4π$'], a: 0 },
        { q: 'A tangente não existe em:', o: ['$0$', '$π$', '${π|2}$', '${π|4}$'], a: 2 },
        { q: '$tg(−x) =$', o: ['$tg x$', '$−tg x$', '$1 − tg x$', '${1|tg x}$'], a: 1 }
      ],
      sintese: [['Tangente', 'tg x = sen x ÷ cos x; período π.'], ['Domínio', 'x ≠ π/2 + kπ.'], ['Imagem', 'Todos os reais; assíntotas verticais.']],
      msg: 'Fechamos as funções trigonométricas. Na sequência, as retomadas do trimestre.'
    }
  ]
});
