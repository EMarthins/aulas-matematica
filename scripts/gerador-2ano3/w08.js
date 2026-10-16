// Módulo 8 · Matemática · 2ª série · 3º trimestre — Função logarítmica: gráficos e problemas (aulas 87, 88 e 89 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo (escreva "log 2", sem vírgula nem barra).
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w87 = Wd.logf('lg87');
const w88 = Wd.logf('lg88');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/funcao-logaritmica-graficos-e-problemas/',
  titulo: 'Função logarítmica: gráficos e problemas', accent: 'decay', icon: 'curve-log', key: 'm2w08', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 87 a 89 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 87
    {
      slug: 'funcao-logaritmica-crescente', titulo: 'Função logarítmica crescente: representação gráfica',
      h1: `Função logarítmica ${co('decay')}crescente</span>`,
      sub: 'Para base maior que 1, a função logarítmica cresce devagar: depois de um aumento inicial, é preciso multiplicar x para ganhar uma unidade em y. Seu gráfico é o da exponencial “espelhado”.',
      badges: [['a > 1'], ['crescente', 'growth'], ['passa por (1, 0)', 'decay']], color: 'decay',
      roteiro: ['Gráfico e propriedades da log crescente.', [['Condição', 'a > 1', 'target'], ['Gráfico', 'curva que sobe devagar', 'chart'], ['Sinal', 'log < 0 para x < 1', 'scale'], ['Desigualdades', 'mantêm o sentido', 'book'], ['Comparar', 'duas bases', 'bulb']]],
      objetivos: ['Reconhecer o gráfico da função logarítmica <strong>crescente</strong>.', 'Estudar o <strong>sinal</strong> de $log_{a} x$ para $a > 1$.', 'Resolver <strong>inequações logarítmicas</strong> com base $> 1$.'],
      dica: 'Com $a > 1$: $x_{1} < x_{2} ⇔ log_{a} x_{1} < log_{a} x_{2}$ (sentido mantido).',
      gancho: { titulo: 'Crescimento lento', texto: 'Em $f(x) = log_{2} x$: $f(2) = 1$, $f(4) = 2$, $f(8) = 3$, $f(16) = 4$. Para ganhar <strong>uma unidade</strong> em $y$ é preciso <strong>dobrar</strong> $x$. A função cresce, mas muito devagar.', mini: ['Em $log_{2} x$, $f(32)$ vale:', ['$4$', '$5$', '$6$', '$16$'], 1, '$2^{5} = 32$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · base maior que 1', 'Propriedades', g2(`<div>
              ${checks(['<strong>Crescente:</strong> $0 < x_{1} < x_{2} ⇒ log_{a} x_{1} < log_{a} x_{2}$.', '<strong>Sinal:</strong> $x > 1 ⇒ log_{a} x > 0$; $0 < x < 1 ⇒ log_{a} x < 0$.', 'Para $x → 0^{+}$, $log_{a} x → −∞$ (assíntota vertical $x = 0$).', '<strong>Inequação:</strong> $log_{2} x > 3$ ⇒ $x > 2^{3} = 8$ (e $x > 0$).'], '.95rem')}
            </div>`, card(`<strong>Valores de $log_{2} x$ e $log_{3} x$</strong>
              ${tbl(['$x$', '${1|3}$', '$1$', '$3$', '$9$', '$27$'], [['$log_{3} x$', '$−1$', '$0$', '$1$', '$2$', '$3$']])}`, 'primary'))],
        ['Teoria · experimente', 'Gráfico interativo', g2(`<div>
              ${checks(['Use $a > 1$ (por exemplo, $2$, $3$ ou $10$).', 'Mude $x$ para ver o ponto marcado sobre a curva.', 'Quanto <strong>maior a base</strong>, mais “achatada” a curva à direita.', 'A curva nunca toca o eixo $y$.'], '.95rem')}
            </div>`, callout('Compare', 'Exponencial: cresce cada vez mais rápido. Logarítmica: cresce cada vez mais devagar.', 'decay'))]
      ],
      exemplos: [
        ['Inequação', 'Resolva $log_{2}(x − 1) < 3$.', [['Condição', '$x − 1 > 0$ ⇒ $x > 1$.'], ['Inequação', 'Base $> 1$: $x − 1 < 2^{3} = 8$ ⇒ $x < 9$.'], ['Intersecção', '$1 < x < 9$.']], '$S = \\{ x ∈ ℝ | 1 < x < 9 \\}$.'],
        ['Sinal', 'Qual o sinal de $log_{5} 0,2$?', [['Base $> 1$', '$0 < 0,2 < 1$.'], ['Logo', 'O log é negativo.']], '$log_{5} 0,2 = −1 < 0$.']
      ],
      widget: { titulo: 'Explorando a > 1', html: w87.html, js: w87.js },
      pratique: [
        ['Inequação', 'A solução de $log_{3} x ≥ 2$ é:', ['$x ≥ 6$', '$x ≥ 9$', '$0 < x ≤ 9$', '$x ≤ 9$'], 1, '$x ≥ 3^{2} = 9$. <strong>Alternativa B.</strong>'],
        ['Sinal', 'Qual logaritmo é negativo?', ['$log_{2} 8$', '$log_{2} 1$', '$log_{2} {1|4}$', '$log_{2} 2$'], 2, '$0 < {1|4} < 1$. <strong>Alternativa C.</strong>'],
        ['Comparar', 'Qual é maior?', ['$log_{2} 5$', '$log_{2} 7$', 'iguais', 'não dá'], 1, 'Base $> 1$ e $7 > 5$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Escala logarítmica', 'Em uma escala, a nota $N = log_{2} I$ (com $I$ a intensidade). Se a intensidade passa de $8$ para $64$, a nota aumenta:', ['$3$ unidades', '$56$ unidades', '$8$ unidades', '$2$ unidades', '$6$ unidades'], 0, 'De $3$ para $6$: $+3$. <strong>Alternativa A.</strong>'],
      cuidados: [['Inverter o sinal', 'Com $a > 1$ <strong>não inverte</strong>.'], ['Esquecer $x > 0$', 'A solução precisa estar no domínio.'], ['Confundir com a exponencial', 'Em $log_{a} x$ o $x$ é o logaritmando.'], ['Esperar o log chegar a zero', '$log_{a} x = 0$ só em $x = 1$.']],
      quiz: [
        { q: 'A função $log_{a} x$ é crescente se:', o: ['$a > 1$', '$0 < a < 1$', '$a < 0$', '$a = 1$'], a: 0 },
        { q: '$log_{2} x > 0$ para:', o: ['$x > 1$', '$x > 0$', '$x < 1$', '$x = 1$'], a: 0 },
        { q: 'Para $x → 0^{+}$, $log_{2} x$ tende a:', o: ['$+∞$', '$0$', '$−∞$', '$1$'], a: 2 },
        { q: '$log_{10} x < 2$ ⇒', o: ['$x < 100$', '$x < 20$', '$0 < x < 100$', '$x > 100$'], a: 2 }
      ],
      sintese: [['Crescente', 'a > 1: sentido mantido.'], ['Sinal', 'log > 0 para x > 1; < 0 para 0 < x < 1.'], ['Gráfico', 'Por (1,0), sobe devagar, assíntota x = 0.']],
      msg: 'Na próxima aula: função logarítmica decrescente.'
    },
    // ------------------------------------------------------------ aula 88
    {
      slug: 'funcao-logaritmica-decrescente', titulo: 'Função logarítmica decrescente: representação gráfica',
      h1: `Função logarítmica ${co('decay')}decrescente</span>`,
      sub: 'Quando a base está entre 0 e 1, a função logarítmica decresce. O gráfico é o espelho, em relação ao eixo x, do gráfico de base maior que 1.',
      badges: [['0 < a < 1'], ['decrescente', 'growth'], ['inverte', 'decay']], color: 'decay',
      roteiro: ['Gráfico e propriedades de 0 < a < 1.', [['Condição', '0 < a < 1', 'target'], ['Gráfico', 'curva que desce', 'chart'], ['Espelho', 'log_(1/a) x = −log_a x', 'scale'], ['Desigualdades', 'inverte o sentido', 'book'], ['Comparar', 'sinal do log', 'bulb']]],
      objetivos: ['Reconhecer a função logarítmica <strong>decrescente</strong>.', 'Relacionar $log_{{1|a}} x = −log_{a} x$.', 'Resolver <strong>inequações</strong> com base entre $0$ e $1$ (invertendo o sentido).'],
      dica: 'Base entre $0$ e $1$: o sentido da desigualdade <strong>inverte</strong> ao passar do $log$ para o logaritmando.',
      gancho: { titulo: 'Log de base 1/2', texto: 'Em $f(x) = log_{{1|2}} x$: $f(2) = −1$, $f(1) = 0$, $f({1|2}) = 1$, $f({1|4}) = 2$. Quanto <strong>menor</strong> o $x$, <strong>maior</strong> o valor da função.', mini: ['$log_{{1|2}} 8$ vale:', ['$3$', '$−3$', '${1|3}$', '$−{1|3}$'], 1, '$({1|2})^{−3} = 8$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · base entre 0 e 1', 'Propriedades', g2(`<div>
              ${checks(['<strong>Decrescente:</strong> $0 < x_{1} < x_{2} ⇒ log_{a} x_{1} > log_{a} x_{2}$.', '<strong>Sinal:</strong> $0 < x < 1 ⇒ log_{a} x > 0$; $x > 1 ⇒ log_{a} x < 0$.', '<strong>Espelho:</strong> $log_{{1|a}} x = −log_{a} x$.', '<strong>Inequação:</strong> $log_{{1|2}} x > 2$ ⇒ $0 < x < ({1|2})^{2} = {1|4}$ (sentido invertido).'], '.95rem')}
            </div>`, card(`<strong>Comparando crescente e decrescente</strong>
              ${tbl(['', 'a > 1', '0 < a < 1'], [['monotonia', 'crescente', 'decrescente'], ['$x > 1$', '$log > 0$', '$log < 0$'], ['$0 < x < 1$', '$log < 0$', '$log > 0$'], ['desigualdade', 'mantém', 'inverte']])}`, 'primary'))],
        ['Teoria · experimente', 'Gráfico interativo', g2(`<div>
              ${checks(['No simulador, use base $0,5$ ou $0,25$ e veja a curva descer.', 'Altere $x$ e veja o valor do logaritmo mudar de sinal em $x = 1$.', 'O gráfico passa sempre por $(1, 0)$.', 'Os gráficos de $log_{a} x$ e $log_{{1|a}} x$ são simétricos em relação ao eixo $x$.'], '.95rem')}
            </div>`, callout('Dica', 'Se tiver dúvida, converta: $log_{0,5} x = −log_{2} x$ e raciocine com a base $2$.', 'decay'))]
      ],
      exemplos: [
        ['Inequação', 'Resolva $log_{0,5}(x) ≥ −3$.', [['Condição', '$x > 0$.'], ['Base entre 0 e 1', 'Inverte: $x ≤ 0,5^{−3} = 8$.'], ['Intersecção', '$0 < x ≤ 8$.']], '$S = \\{ x ∈ ℝ | 0 < x ≤ 8 \\}$.'],
        ['Valor', 'Calcule $log_{{1|3}} 27$.', [['Mudança', '$log_{{1|3}} 27 = −log_{3} 27$.'], ['Resultado', '$−3$.']], '$log_{{1|3}} 27 = −3$.']
      ],
      widget: { titulo: 'Explorando 0 < a < 1', html: w88.html, js: w88.js },
      pratique: [
        ['Decrescente?', 'Qual função é decrescente?', ['$log_{2} x$', '$log_{{1|2}} x$', '$log_{10} x$', '$log_{3} x$'], 1, 'Base entre $0$ e $1$. <strong>Alternativa B.</strong>'],
        ['Inequação', 'A solução de $log_{{1|2}} x > 1$ é:', ['$x > {1|2}$', '$0 < x < {1|2}$', '$x < 2$', '$x > 2$'], 1, 'Inverte: $x < ({1|2})^{1}$ e $x > 0$. <strong>Alternativa B.</strong>'],
        ['Valor', '$log_{0,1} 100$ vale:', ['$−2$', '$2$', '$−10$', '$10$'], 0, '$0,1^{−2} = 100$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Intensidade decrescente', 'Em um modelo, a nota é $N = log_{0,5} I$. Quanto maior a intensidade $I$, a nota:', ['aumenta', 'fica constante', 'diminui', 'dobra', 'é sempre positiva'], 2, 'Base entre $0$ e $1$: decrescente. <strong>Alternativa C.</strong>'],
      cuidados: [['Não inverter', 'Com base $< 1$, a desigualdade inverte.'], ['Sinal trocado', 'Para $x > 1$, o log é <strong>negativo</strong>.'], ['Esquecer o domínio', 'Continue exigindo $x > 0$.'], ['Confundir as bases', 'Escreva a base como fração para não errar.']],
      quiz: [
        { q: 'A função $log_{a} x$ é decrescente se:', o: ['$a > 1$', '$0 < a < 1$', '$a < 0$', '$a = 1$'], a: 1 },
        { q: '$log_{0,5} 4$ vale:', o: ['$2$', '$−2$', '$0,5$', '$−0,5$'], a: 1 },
        { q: 'Para $0 < a < 1$ e $x > 1$, $log_{a} x$ é:', o: ['positivo', 'negativo', 'zero', 'indefinido'], a: 1 },
        { q: '$log_{{1|a}} x$ é igual a:', o: ['$log_{a} x$', '$−log_{a} x$', '${1|log_{a} x}$', '$a · log x$'], a: 1 }
      ],
      sintese: [['Decrescente', '0 < a < 1: inverte o sentido.'], ['Espelho', 'log_(1/a) x = −log_a x.'], ['Ponto fixo', 'Passa por (1, 0).']],
      msg: 'Na próxima aula: problemas com a função logarítmica.'
    },
    // ------------------------------------------------------------ aula 89
    {
      slug: 'funcao-logaritmica-situacoes-problema', titulo: 'Função logarítmica: resolução de situações-problema',
      h1: `Função logarítmica ${co('decay')}na prática</span>`,
      sub: 'Terremotos, som, acidez e juros usam funções logarítmicas. Aprender a montar a função, calcular valores e inverter a pergunta é a chave para resolver esses problemas.',
      badges: [['modelar'], ['interpretar', 'growth'], ['tempo', 'decay']], color: 'decay',
      roteiro: ['Modelar, calcular e interpretar.', [['Modelo', 'f(x) = k·log x', 'bulb'], ['Calcular f(x)', 'substituir', 'chart'], ['Achar x', 'voltar à exponencial', 'scale'], ['Juros compostos', 'tempo de aplicação', 'coin'], ['Interpretar', 'o resultado faz sentido?', 'book']]],
      objetivos: ['<strong>Modelar</strong> situações por funções logarítmicas.', 'Calcular valores e <strong>inverter</strong> a pergunta (achar $x$).', 'Resolver problemas de <strong>juros compostos e escalas</strong>.'],
      dica: 'Para achar $x$ a partir de $f(x)$, <strong>desfaça o logaritmo com a exponencial</strong>: $log_{a} x = y ⇔ x = a^{y}$.',
      gancho: { titulo: 'O tempo do investimento', texto: 'Um capital de R$ 1.000 rende $10%$ ao mês no regime composto. O tempo para atingir um montante $M$ é $t = log_{1,1} {M|1000}$. Quanto tempo para chegar a R$ 1.210?', mini: ['O tempo é de:', ['$1$ mês', '$2$ meses', '$3$ meses', '$10$ meses'], 1, '${1210|1000} = 1,21 = 1,1^{2}$ ⇒ $t = 2$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · tipos de problema', 'Modelos logarítmicos', g2(`<div>
              ${checks(['<strong>Juros:</strong> $t = log_{1+i} {M|C}$ (tempo para atingir $M$).', '<strong>Escalas:</strong> $N = log {I|I_{0}}$ (intensidade relativa).', '<strong>Meia-vida:</strong> $t = T · log_{{1|2}} {N|N_{0}}$.', '<strong>Aprendizagem/tamanho:</strong> modelos do tipo $f(x) = a + b · log x$.'], '.95rem')}
            </div>`, card(`<strong>Dois sentidos</strong>
              <p style="font-size:.92rem;margin-top:8px;">Dado $x$, calcule $f(x)$ (substituir). Dado $f(x)$, ache $x$ (passar para exponencial).</p>`, 'primary'))],
        ['Teoria · exemplo completo', 'Passo a passo', g2(`<div>
              ${checks(['Modelo: $P(x) = 20 + 30 · log_{2} x$ (pontos de um jogo após $x$ horas de treino).', 'Para $x = 8$: $P = 20 + 30 · 3 = 110$.', 'Para $P = 80$: $30 · log_{2} x = 60$ ⇒ $log_{2} x = 2$ ⇒ $x = 4$ horas.', 'Interprete: dobrar o treino só soma $30$ pontos.'], '.95rem')}
            </div>`, callout('Interpretação', 'Em modelos logarítmicos, cada multiplicação do $x$ por uma constante soma uma quantidade fixa em $f$.', 'decay'))]
      ],
      exemplos: [
        ['Valor da função', 'A magnitude de um terremoto é $M = {2|3} · log {E|E_{0}}$. Se ${E|E_{0}} = 10^{6}$, qual a magnitude?', [['Log', '$log 10^{6} = 6$.'], ['Multiplique', '${2|3} · 6 = 4$.']], 'A magnitude é <strong>4</strong>.'],
        ['Achar x', 'Em $P(x) = 20 + 30 · log_{2} x$, para qual $x$ tem-se $P = 110$?', [['Isole', '$30 · log_{2} x = 90$ ⇒ $log_{2} x = 3$.'], ['Exponencial', '$x = 2^{3} = 8$.']], '$x = 8$ horas.']
      ],
      pratique: [
        ['Valor', 'Se $f(x) = 5 · log_{2} x$, então $f(16)$ vale:', ['$4$', '$20$', '$80$', '$10$'], 1, '$5 · 4 = 20$. <strong>Alternativa B.</strong>'],
        ['Inverter', 'Se $f(x) = log_{3} x + 2 = 5$, então $x$ vale:', ['$3$', '$9$', '$27$', '$125$'], 2, '$log_{3} x = 3$ ⇒ $x = 27$. <strong>Alternativa C.</strong>'],
        ['Escala', 'Se $N = log {I|I_{0}} = 4$, então ${I|I_{0}}$ vale:', ['$4$', '$40$', '$10 000$', '$100$'], 2, '$10^{4}$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A aplicação financeira', 'Uma aplicação rende $10%$ ao ano (juros compostos). O tempo, em anos, para o capital triplicar é $t = log_{1,1} 3$. Com $log 3 = 0,48$ e $log 1,1 = 0,04$, vale:', ['$6$', '$8$', '$10$', '$12$', '$14$'], 3, '$t = {0,48|0,04} = 12$. <strong>Alternativa D.</strong>'],
      cuidados: [['Arredondar o tempo', 'Verifique se o problema pede o tempo exato ou o inteiro seguinte.'], ['Trocar o sentido', 'Para achar $x$, passe para a exponencial.'], ['Unidade do tempo', 'Taxa mensal ⇒ resultado em meses.'], ['Escala sem base', 'Sem base escrita, é $10$.']],
      quiz: [
        { q: 'Para achar $x$ em $log_{2} x = 5$:', o: ['$x = 10$', '$x = 25$', '$x = 32$', '$x = 5^{2}$'], a: 2 },
        { q: 'Dobrando o $x$ em $f(x) = 30 · log_{2} x$, $f$ aumenta:', o: ['$15$', '$30$', '$60$', '$2$'], a: 1 },
        { q: 'O tempo para dobrar com taxa $i$ é:', o: ['$log_{1+i} 2$', '$2 · i$', '$i^{2}$', '$log_{2} i$'], a: 0 },
        { q: '${E|E_{0}}$ precisa ser:', o: ['negativo', 'zero', 'positivo', 'inteiro'], a: 2 }
      ],
      sintese: [['Calcular f(x)', 'Substitua x e use o logaritmo.'], ['Achar x', 'Passe à forma exponencial.'], ['Aplicações', 'Juros, escalas, meia-vida.']],
      msg: 'Na próxima aula você começa as funções definidas por mais de uma sentença.'
    }
  ]
});
