// Módulo 7 · Matemática · 2ª série · 3º trimestre — Equações logarítmicas e função logarítmica (aulas 85 e 86 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo (escreva "log 2", sem vírgula nem barra).
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w86 = Wd.logf('lg86');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/equacoes-logaritmicas-e-funcao-logaritmica/',
  titulo: 'Equações logarítmicas e função logarítmica', accent: 'decay', icon: 'curve-log', key: 'm2w07', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 85 e 86 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 85
    {
      slug: 'equacoes-logaritmicas', titulo: 'Equações logarítmicas',
      h1: `Equações ${co('decay')}logarítmicas:</span> a incógnita no logaritmo`,
      sub: 'Equação logarítmica é aquela em que a incógnita aparece no logaritmando ou na base de um logaritmo. Resolvemos usando a definição, as propriedades e sempre conferindo a condição de existência.',
      badges: [['definição'], ['propriedades', 'growth'], ['existência', 'decay']], color: 'decay',
      roteiro: ['Quatro tipos de equação.', [['Condição de existência', 'primeiro passo', 'target'], ['Pela definição', 'log = número', 'bulb'], ['Mesma base', 'log b = log c ⇒ b = c', 'scale'], ['Propriedades', 'produto e quociente', 'chart'], ['Verificar', 'descartar raízes', 'book']]],
      objetivos: ['Resolver <strong>equações logarítmicas</strong> pela definição e pelas propriedades.', 'Aplicar a <strong>condição de existência</strong> e descartar raízes inválidas.', 'Usar <strong>substituição de variável</strong> em casos de segundo grau.'],
      dica: 'Roteiro: <strong>1)</strong> condição de existência; <strong>2)</strong> reduza a $log = log$ ou a $log = número$; <strong>3)</strong> resolva; <strong>4)</strong> confira as raízes.',
      gancho: { titulo: 'Qual valor de x?', texto: 'Se $log_{2}(x + 1) = 4$, o logaritmando $x + 1$ vale $2^{4} = 16$. Logo $x = 15$. Basta voltar à definição!', mini: ['Se $log_{3} x = 2$, então $x$ vale:', ['$6$', '$8$', '$9$', '$1,5$'], 2, '$x = 3^{2} = 9$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · tipos', 'Como resolver', g2(`<div>
              ${checks(['<strong>Tipo 1 — pela definição:</strong> $log_{a}(f(x)) = k$ ⇒ $f(x) = a^{k}$.', '<strong>Tipo 2 — mesma base:</strong> $log_{a}(f(x)) = log_{a}(g(x))$ ⇒ $f(x) = g(x)$.', '<strong>Tipo 3 — propriedades:</strong> reduza a soma/diferença a um único logaritmo.', '<strong>Tipo 4 — substituição:</strong> $(log x)² − 3 log x + 2 = 0$, com $y = log x$.'], '.95rem')}
            </div>`, card(`<strong>Condição de existência</strong>
              <p style="font-size:.92rem;margin-top:8px;">Todo logaritmando &gt; 0 e toda base &gt; 0, ≠ 1. Resolva essas inequações <strong>antes</strong> e use o conjunto para filtrar as raízes.</p>`, 'primary'))],
        ['Teoria · exemplos de cada tipo', 'Resolvendo', g2(`<div>
              ${checks(['$log_{5}(2x − 1) = 2$ ⇒ $2x − 1 = 25$ ⇒ $x = 13$ (e $2 · 13 − 1 > 0$ ✓).', '$log_{2}(x + 3) = log_{2}(2x − 1)$ ⇒ $x + 3 = 2x − 1$ ⇒ $x = 4$ ✓.', '$log x + log(x − 3) = 1$ ⇒ $x(x − 3) = 10$ ⇒ $x² − 3x − 10 = 0$ ⇒ $x = 5$ ou $x = −2$; só $x = 5$ serve ($x > 3$).', '$(log x)² − 3 log x + 2 = 0$: $y² − 3y + 2 = 0$ ⇒ $y = 1$ ou $y = 2$ ⇒ $x = 10$ ou $x = 100$.'], '.95rem')}
            </div>`, callout('Armadilha', 'Raízes que tornam algum logaritmando $≤ 0$ <strong>devem ser descartadas</strong>.', 'decay'))]
      ],
      exemplos: [
        ['Pela definição', 'Resolva $log_{3}(x − 2) = 3$.', [['Condição', '$x > 2$.'], ['Definição', '$x − 2 = 27$ ⇒ $x = 29$.'], ['Confira', '$29 > 2$ ✓.']], '$S = \\{29\\}$.'],
        ['Com propriedade', 'Resolva $log_{2}(x + 1) + log_{2}(x − 1) = 3$.', [['Condição', '$x > 1$.'], ['Produto', '$log_{2}[(x + 1)(x − 1)] = 3$ ⇒ $x² − 1 = 8$.'], ['Raízes', '$x = 3$ ou $x = −3$; só $x = 3$ serve.']], '$S = \\{3\\}$.']
      ],
      pratique: [
        ['Definição', 'A solução de $log_{2}(x + 4) = 5$ é:', ['$x = 1$', '$x = 14$', '$x = 28$', '$x = 36$'], 2, '$x + 4 = 32$ ⇒ $x = 28$. <strong>Alternativa C.</strong>'],
        ['Mesma base', 'A solução de $log_{3}(2x) = log_{3}(x + 5)$ é:', ['$x = 1$', '$x = 5$', '$x = 10$', '$x = −5$'], 1, '$2x = x + 5$ ⇒ $x = 5$. <strong>Alternativa B.</strong>'],
        ['Descartar raiz', '$log_{2} x + log_{2}(x − 2) = 3$ tem solução:', ['$x = 4$', '$x = −2$', '$x = 4$ e $x = −2$', 'nenhuma'], 0, '$x² − 2x = 8$ ⇒ $x = 4$ ou $x = −2$; descarte $−2$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Intensidade e decibéis', 'Um aparelho emite som de $N = 10 · log {I|I_{0}}$ dB. Se $N = 70$, a razão ${I|I_{0}}$ é:', ['$7$', '$70$', '$10^{7}$', '$10^{70}$', '$700$'], 2, '$log {I|I_{0}} = 7$ ⇒ razão $= 10^{7}$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer a condição', 'Sempre confira se as raízes tornam os logaritmandos positivos.'], ['Cancelar log com expressões', 'Só cancele $log = log$ quando as bases forem iguais.'], ['Somar em vez de multiplicar', '$log a + log b = log(a · b)$.'], ['Perder raízes', 'Em equações do 2º grau, teste as duas raízes.']],
      quiz: [
        { q: '$log_{2} x = 3$ ⇒ $x$ vale:', o: ['$6$', '$8$', '$9$', '$1,5$'], a: 1 },
        { q: '$log x = log 4$ ⇒ $x$ vale:', o: ['$2$', '$4$', '$16$', '$0,4$'], a: 1 },
        { q: 'Antes de resolver, determinamos:', o: ['a derivada', 'a condição de existência', 'a integral', 'o gráfico'], a: 1 },
        { q: '$log_{5} x = −1$ ⇒ $x$ vale:', o: ['$−5$', '${1|5}$', '$5$', '$−{1|5}$'], a: 1 }
      ],
      sintese: [['Definição', 'log_a f = k ⇒ f = aᵏ.'], ['Mesma base', 'log f = log g ⇒ f = g.'], ['Conferir', 'Descarte raízes inválidas.']],
      msg: 'Na próxima aula você define a função logarítmica.'
    },
    // ------------------------------------------------------------ aula 86
    {
      slug: 'funcao-logaritmica-definicao', titulo: 'Função logarítmica: definição',
      h1: `Função ${co('decay')}logarítmica:</span> f(x) = logₐ x`,
      sub: 'A função logarítmica f(x) = log_a x é a inversa da exponencial. Ela transforma multiplicações em adições e aparece em escalas, juros e tempos.',
      badges: [['f(x) = logₐ x'], ['inversa de aˣ', 'growth'], ['x > 0', 'decay']], color: 'decay',
      roteiro: ['Da definição ao gráfico.', [['Definição', 'f(x) = logₐ x', 'target'], ['Domínio', 'x > 0', 'scale'], ['Imagem', 'todos os reais', 'chart'], ['Valores', 'tabela', 'book'], ['Gráfico', 'passa por (1, 0)', 'bulb']]],
      objetivos: ['Definir <strong>função logarítmica</strong> $f(x) = log_{a} x$ ($a > 0$, $a ≠ 1$).', 'Determinar <strong>domínio e imagem</strong>.', 'Calcular <strong>valores numéricos</strong> e interpretar o gráfico.'],
      dica: 'Domínio: $x > 0$. Imagem: todos os reais. Ponto fixo: $(1, 0)$ porque $log_{a} 1 = 0$.',
      gancho: { titulo: 'Intensidade e sensação', texto: 'Nosso ouvido percebe o volume de forma “logarítmica”: dobrar a intensidade do som não dobra a sensação. A relação $β = 10 · log {I|I_{0}}$ é uma função logarítmica.', mini: ['O domínio de $f(x) = log_{2} x$ é:', ['$ℝ$', 'reais positivos', 'reais negativos', '$ℤ$'], 1, 'O logaritmando deve ser positivo. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Domínio, imagem e valores', g2(`<div>
              ${checks(['<strong>Função logarítmica:</strong> $f: ℝ_{>0} → ℝ$, $f(x) = log_{a} x$, com $a > 0$ e $a ≠ 1$.', '<strong>Domínio:</strong> $x > 0$. <strong>Imagem:</strong> $ℝ$.', '$f(1) = 0$; $f(a) = 1$; $f(a^{n}) = n$.', 'Exemplo: $f(x) = log_{2} x$: $f({1|4}) = −2$, $f(1) = 0$, $f(8) = 3$.'], '.95rem')}
            </div>`, card(`<strong>Tabela de $log_{2} x$</strong>
              ${tbl(['$x$', '${1|4}$', '${1|2}$', '$1$', '$2$', '$4$', '$8$'], [['$log_{2} x$', '$−2$', '$−1$', '$0$', '$1$', '$2$', '$3$']])}`, 'primary'))],
        ['Teoria · relação com a exponencial', 'Funções inversas', g2(`<div>
              ${checks(['$y = log_{a} x ⇔ x = a^{y}$: a logarítmica é a <strong>inversa</strong> da exponencial.', 'Os gráficos de $a^{x}$ e $log_{a} x$ são <strong>simétricos em relação à reta $y = x$</strong>.', 'Assíntota vertical: o eixo $y$ ($x = 0$).', 'Crescente se $a > 1$; decrescente se $0 < a < 1$ (próximas aulas).'], '.95rem')}
            </div>`, callout('Resumo', 'Exponencial: $x → a^{x}$ (“eleva”). Logarítmica: $x → log_{a} x$ (“desfaz”).', 'decay'))]
      ],
      exemplos: [
        ['Valor numérico', 'Para $f(x) = log_{3} x$, calcule $f(81)$, $f(1)$ e $f({1|9})$.', [['$f(81)$', '$log_{3} 81 = 4$.'], ['$f(1)$', '$0$.'], ['$f({1|9})$', '$log_{3} 3^{−2} = −2$.']], '$f(81) = 4$, $f(1) = 0$ e $f({1|9}) = −2$.'],
        ['Domínio', 'Qual o domínio de $g(x) = log_{2}(x − 5)$?', [['Condição', '$x − 5 > 0$.'], ['Resolva', '$x > 5$.']], '$D = \\{ x ∈ ℝ | x > 5 \\}$.']
      ],
      widget: { titulo: 'Gráfico de logₐ x', html: w86.html, js: w86.js },
      pratique: [
        ['Valor', 'Se $f(x) = log_{5} x$, então $f(125)$ vale:', ['$3$', '$5$', '$25$', '$125$'], 0, '$5^{3} = 125$. <strong>Alternativa A.</strong>'],
        ['Domínio', 'O domínio de $f(x) = log_{3}(2x + 6)$ é:', ['$x > −3$', '$x > 3$', '$x < −3$', '$x ≥ −3$'], 0, '$2x + 6 > 0$ ⇒ $x > −3$. <strong>Alternativa A.</strong>'],
        ['Ponto fixo', 'O gráfico de $log_{a} x$ passa sempre por:', ['$(0, 1)$', '$(1, 0)$', '$(0, 0)$', '$(1, 1)$'], 1, '$log_{a} 1 = 0$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O terremoto', 'A magnitude de um terremoto é dada por $M = {2|3} log {E|E_{0}}$. Para que $M$ esteja definida, é necessário que:', ['${E|E_{0}} < 0$', '${E|E_{0}} > 0$', '${E|E_{0}} = 0$', '$E < 0$', '$E_{0} < 0$'], 1, 'Logaritmando positivo. <strong>Alternativa B.</strong>'],
      cuidados: [['Domínio incluindo zero', '$x = 0$ não pertence ao domínio.'], ['Imagem restrita', 'A imagem é <strong>todos os reais</strong>, positivos e negativos.'], ['Confundir com a exponencial', 'Elas são inversas, não iguais.'], ['Base inválida', 'Base positiva e diferente de $1$.']],
      quiz: [
        { q: 'A imagem de $f(x) = log_{a} x$ é:', o: ['$ℝ_{>0}$', '$ℝ$', '$[0, +∞)$', '$ℤ$'], a: 1 },
        { q: '$f(x) = log_{2} x$: $f(16)$ vale:', o: ['$2$', '$4$', '$8$', '$16$'], a: 1 },
        { q: 'O domínio de $log_{2}(x − 1)$ é:', o: ['$x > 1$', '$x < 1$', '$x ≠ 1$', '$ℝ$'], a: 0 },
        { q: 'A inversa de $a^{x}$ é:', o: ['$x^{a}$', '$log_{a} x$', '${1|a^{x}}$', '$−a^{x}$'], a: 1 }
      ],
      sintese: [['Definição', 'f(x) = log_a x, a > 0, a ≠ 1.'], ['Domínio e imagem', 'x > 0; todos os reais.'], ['Inversa', 'Simétrica de aˣ em relação a y = x.']],
      msg: 'Na próxima aula: funções logarítmicas crescente e decrescente.'
    }
  ]
});
