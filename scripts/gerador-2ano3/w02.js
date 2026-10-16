// Módulo 2 · Matemática · 2ª série · 3º trimestre — Função exponencial: problemas e gráficos (aulas 72, 73 e 74 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w73 = Wd.expo('ex73');
const w74 = Wd.expo('ex74');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/funcao-exponencial-problemas-e-graficos/',
  titulo: 'Função exponencial: problemas e gráficos', accent: 'growth', icon: 'curve-up', key: 'm2w02', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 72 a 74 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 72
    {
      slug: 'funcao-exponencial-resolucao-de-problemas', titulo: 'Função exponencial: resolução de problemas',
      h1: `Função exponencial: ${co('growth')}problemas do dia a dia</span>`,
      sub: 'Populações, juros compostos, datação por carbono e resfriamento seguem modelos exponenciais. Aprender a montar f(t) = k · aᵗ resolve boa parte dos problemas.',
      badges: [['modelar'], ['juros compostos', 'growth'], ['decaimento', 'decay']], color: 'growth',
      roteiro: ['Da situação à função.', [['Ler', 'o que cresce ou decai', 'book'], ['Valor inicial k', 'f(0)', 'target'], ['Fator a', '1 ± taxa', 'scale'], ['Calcular', 'substituir t', 'chart'], ['Interpretar', 'o resultado faz sentido?', 'bulb']]],
      objetivos: ['<strong>Modelar</strong> crescimento e decaimento por $f(t) = k · a^{t}$.', 'Calcular o fator $a = 1 ± i$ a partir da <strong>taxa</strong>.', 'Resolver problemas de <strong>juros compostos</strong> e <strong>população</strong>.'],
      dica: 'Aumento de $10%$ por período ⇒ $a = 1,1$. Redução de $20%$ ⇒ $a = 0,8$. Valor inicial ⇒ $k$.',
      gancho: { titulo: 'Rendimento da poupança', texto: 'Um capital de R$ 1.000 rende $10%$ ao mês <strong>no regime composto</strong>: a cada mês o saldo é multiplicado por $1,1$. Qual é o saldo após $2$ meses?', mini: ['O saldo após $2$ meses é:', ['R$ 1.200', 'R$ 1.210', 'R$ 1.100', 'R$ 1.020'], 1, '$1000 · 1,1² = 1000 · 1,21 = 1210$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · modelagem', 'Montando f(t) = k · aᵗ', g2(`<div>
              ${checks(['<strong>k</strong> é o valor inicial ($t = 0$).', '<strong>a</strong> é o fator por período: aumento de taxa $i$ ⇒ $a = 1 + i$; redução ⇒ $a = 1 − i$.', '<strong>Juros compostos:</strong> $M = C · (1 + i)^{t}$.', '<strong>Meia-vida:</strong> $N(t) = N_{0} · ({1|2})^{t / T}$, com $T$ o período de meia-vida.'], '.95rem')}
            </div>`, card(`<strong>Tabela de fatores</strong>
              ${tbl(['Variação por período', 'Fator $a$'], [['aumento de $5%$', '$1,05$'], ['aumento de $20%$', '$1,2$'], ['redução de $10%$', '$0,9$'], ['dobra', '$2$'], ['cai pela metade', '$0,5$']])}`, 'primary'))],
        ['Teoria · roteiro', 'Passo a passo', g2(`<div>
              ${checks(['<strong>1.</strong> Identifique o valor inicial $k$ e o período.', '<strong>2.</strong> Determine o fator $a$ ($1 ± taxa$).', '<strong>3.</strong> Escreva $f(t) = k · a^{t}$ e substitua $t$.', '<strong>4.</strong> Se pedirem o tempo, resolva a equação exponencial (ou use logaritmos, nas próximas aulas).'], '.95rem')}
            </div>`, callout('Cuidado com a unidade', 'Taxa e tempo devem estar na <strong>mesma unidade</strong> (mês e mês, ano e ano).', 'growth'))]
      ],
      exemplos: [
        ['Juros compostos', 'R$ 2.000 são aplicados a $5%$ ao mês, juros compostos. Qual o montante após $3$ meses?', [['Fator', '$a = 1,05$.'], ['Montante', '$M = 2000 · 1,05^{3} = 2000 · 1,157625$.'], ['Calcular', '$M ≈ 2315,25$.']], 'O montante é de <strong>R$ 2.315,25</strong>.'],
        ['Decaimento', 'Uma substância tem $80$ g e perde metade da massa a cada $3$ horas. Qual a massa após $9$ horas?', [['Períodos', '$9 ÷ 3 = 3$ meias-vidas.'], ['Massa', '$80 · ({1|2})^{3} = 80 · {1|8} = 10$.']], 'Restam <strong>10 g</strong>.']
      ],
      pratique: [
        ['População', 'Uma população de $500$ indivíduos dobra a cada $2$ anos. Em $6$ anos há:', ['$1 500$', '$2 000$', '$4 000$', '$3 000$'], 2, '$3$ períodos: $500 · 2^{3} = 4000$. <strong>Alternativa C.</strong>'],
        ['Desvalorização', 'Um carro de R$ 40.000 perde $10%$ do valor por ano. Após $2$ anos vale:', ['R$ 32.000', 'R$ 32.400', 'R$ 36.000', 'R$ 30.000'], 1, '$40000 · 0,9² = 32400$. <strong>Alternativa B.</strong>'],
        ['Fator', 'Um aumento de $25%$ por período corresponde ao fator:', ['$0,25$', '$1,25$', '$2,5$', '$0,75$'], 1, '$1 + 0,25$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O contágio', 'Uma doença se espalha de modo que o número de casos triplica a cada semana. Se há $10$ casos hoje, quantos haverá em $3$ semanas?', ['$30$', '$90$', '$270$', '$300$', '$810$'], 2, '$10 · 3^{3} = 270$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar em vez de multiplicar', 'Juros compostos multiplicam o saldo; não é $k + i · t$ (isso é juros simples).'], ['Fator da redução', 'Redução de $10%$ é $0,9$, não $0,1$.'], ['Unidades de tempo', 'Taxa mensal exige $t$ em meses.'], ['Arredondar cedo', 'Guarde casas decimais até o fim.']],
      quiz: [
        { q: 'R$ 100 a $10%$ ao mês composto, em $2$ meses:', o: ['R$ 120', 'R$ 121', 'R$ 110', 'R$ 200'], a: 1 },
        { q: 'Meia-vida de $T$: após $2T$ resta:', o: ['${1|2}$', '${1|4}$', '${1|8}$', '$0$'], a: 1 },
        { q: 'Queda de $30%$ por período corresponde a $a =$:', o: ['$0,3$', '$0,7$', '$1,3$', '$3$'], a: 1 },
        { q: 'Uma população que triplica tem fator:', o: ['$1,3$', '$2$', '$3$', '$0,3$'], a: 2 }
      ],
      sintese: [['Modelo', 'f(t) = k·aᵗ; k inicial, a = 1 ± taxa.'], ['Juros compostos', 'M = C·(1 + i)ᵗ.'], ['Decaimento', 'Fator entre 0 e 1; meia-vida usa 1/2.']],
      msg: 'Na próxima aula você estuda a função exponencial crescente.'
    },
    // ------------------------------------------------------------ aula 73
    {
      slug: 'funcao-exponencial-crescente', titulo: 'Função exponencial crescente: representação gráfica',
      h1: `Função exponencial ${co('growth')}crescente</span>`,
      sub: 'Quando a base é maior que 1, a função exponencial cresce: quanto maior x, maior f(x), e o ritmo de crescimento só aumenta. O gráfico revela essas características.',
      badges: [['a > 1'], ['crescente', 'growth'], ['x → −∞: f → 0', 'decay']], color: 'growth',
      roteiro: ['Gráfico e propriedades de a > 1.', [['Condição', 'a > 1', 'target'], ['Gráfico', 'curva que sobe', 'chart'], ['Comparar bases', '2ˣ, 3ˣ, 10ˣ', 'scale'], ['Desigualdades', 'a^m < a^n ⇔ m < n', 'book'], ['Aplicações', 'crescimento rápido', 'bulb']]],
      objetivos: ['Reconhecer, <strong>algébrica e graficamente</strong>, a função exponencial crescente.', 'Comparar potências de mesma base com <strong>desigualdades</strong>.', 'Comparar o <strong>ritmo</strong> de crescimento de bases diferentes.'],
      dica: 'Base maior que $1$: <strong>mantém o sentido</strong> da desigualdade nos expoentes: $a^{m} < a^{n} ⇔ m < n$.',
      gancho: { titulo: 'Quem cresce mais?', texto: 'Compare $f(x) = 2^{x}$ e $g(x) = 3^{x}$. Em $x = 4$: $f = 16$ e $g = 81$. As duas crescem, mas a de base maior cresce <strong>muito mais depressa</strong>.', mini: ['Entre $2^{5}$ e $3^{5}$, o maior é:', ['$2^{5} = 32$', '$3^{5} = 243$', 'são iguais', 'não dá para saber'], 1, 'Mesmo expoente positivo, base maior ⇒ potência maior. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · base maior que 1', 'Propriedades', g2(`<div>
              ${checks(['<strong>Crescente:</strong> $x_{1} < x_{2} ⇒ a^{x_{1}} < a^{x_{2}}$.', 'Gráfico passa por $(0, 1)$ e $(1, a)$; para $x → −∞$ aproxima-se do eixo $x$.', 'Para $x > 0$: $f(x) > 1$; para $x < 0$: $0 < f(x) < 1$.', '<strong>Inequação:</strong> $2^{x} > 8$ ⇒ $2^{x} > 2^{3}$ ⇒ $x > 3$ (sentido mantido).'], '.95rem')}
            </div>`, card(`<strong>Valores</strong>
              ${tbl(['$x$', '$−1$', '$0$', '$1$', '$2$', '$3$'], [['$2^{x}$', '${1|2}$', '$1$', '$2$', '$4$', '$8$'], ['$3^{x}$', '${1|3}$', '$1$', '$3$', '$9$', '$27$']])}`, 'primary'))],
        ['Teoria · gráfico', 'Experimente', g2(`<div>
              ${checks(['No simulador, escolha $a > 1$ (por exemplo, $2$, $3$ ou $4$) e veja a curva subir.', 'Mude $k$: o gráfico sobe ou desce, sempre cortando o eixo $y$ em $(0, k)$.', 'Quanto maior a base, mais <strong>íngreme</strong> a curva à direita da origem.', 'À esquerda, todas se achatam sobre o eixo $x$.'], '.95rem')}
            </div>`, callout('Resumo', 'Crescente, imagem positiva, passa por $(0, k)$, assíntota $y = 0$.', 'growth'))]
      ],
      exemplos: [
        ['Comparando potências', 'Compare $5^{−1}$ e $5^{−2}$.', [['Base maior que 1', 'A função $5^{x}$ é crescente.'], ['Expoentes', '$−1 > −2$.']], '$5^{−1} > 5^{−2}$ (isto é, ${1|5} > {1|25}$).'],
        ['Inequação', 'Resolva $3^{x} < 81$.', [['Mesma base', '$3^{x} < 3^{4}$.'], ['Base > 1', 'Mantém o sentido: $x < 4$.']], '$S = \\{ x ∈ ℝ | x < 4 \\}$.']
      ],
      widget: { titulo: 'Explorando a > 1', html: w73.html, js: w73.js },
      pratique: [
        ['Crescente?', 'Qual função é crescente?', ['$f(x) = ({1|2})^{x}$', '$f(x) = 4^{x}$', '$f(x) = 0,5^{x}$', '$f(x) = 1^{x}$'], 1, 'Base $4 > 1$. <strong>Alternativa B.</strong>'],
        ['Inequação', 'A solução de $2^{x} ≥ 16$ é:', ['$x ≤ 4$', '$x ≥ 4$', '$x ≥ 8$', '$x ≤ 8$'], 1, '$2^{x} ≥ 2^{4}$ ⇒ $x ≥ 4$. <strong>Alternativa B.</strong>'],
        ['Maior valor', 'Qual é o maior?', ['$2^{0,5}$', '$2^{1}$', '$2^{−1}$', '$2^{0}$'], 1, 'Base $> 1$: maior expoente, maior valor. <strong>Alternativa B.</strong>']
      ],
      enem: ['Uma aplicação crescente', 'O valor de uma aplicação é $V(t) = 1000 · 1,2^{t}$ (reais, $t$ em anos). Pode-se concluir que:', ['$V$ é decrescente', '$V$ é constante', '$V$ é crescente', '$V(0) = 1,2$', '$V$ pode ser negativo'], 2, 'Base $1,2 > 1$: crescente. <strong>Alternativa C.</strong>'],
      cuidados: [['Inverter o sinal da desigualdade', 'Com $a > 1$ o sentido <strong>não</strong> muda.'], ['Base entre 0 e 1', 'Essa é a decrescente (próxima aula).'], ['Imagem zero', 'A função nunca vale $0$.'], ['Comparar bases', 'Para $x > 0$, base maior dá valor maior; para $x < 0$ é o contrário.']],
      quiz: [
        { q: 'A função $a^{x}$ é crescente quando:', o: ['$0 < a < 1$', '$a > 1$', '$a < 0$', '$a = 1$'], a: 1 },
        { q: '$2^{x} < 32$ ⇒', o: ['$x < 5$', '$x > 5$', '$x < 16$', '$x > 16$'], a: 0 },
        { q: 'Para $x > 0$ e $a > 1$, $a^{x}$ é:', o: ['menor que 1', 'igual a 1', 'maior que 1', 'negativo'], a: 2 },
        { q: 'O gráfico de $3^{x}$ corta o eixo $y$ em:', o: ['$(0, 3)$', '$(0, 1)$', '$(1, 0)$', '$(0, 0)$'], a: 1 }
      ],
      sintese: [['Crescente', 'a > 1: x maior ⇒ f maior.'], ['Inequações', 'Mesma base > 1 mantém o sentido.'], ['Gráfico', 'Por (0,k), sobe cada vez mais rápido.']],
      msg: 'Na próxima aula: a função exponencial decrescente.'
    },
    // ------------------------------------------------------------ aula 74
    {
      slug: 'funcao-exponencial-decrescente', titulo: 'Função exponencial decrescente: representação gráfica',
      h1: `Função exponencial ${co('growth')}decrescente</span>`,
      sub: 'Quando a base está entre 0 e 1, a função exponencial decresce: o valor encolhe a cada passo, aproximando-se de zero sem nunca alcançá-lo. É o modelo do decaimento.',
      badges: [['0 < a < 1'], ['decrescente', 'growth'], ['→ 0', 'decay']], color: 'growth',
      roteiro: ['Gráfico e propriedades de 0 < a < 1.', [['Condição', '0 < a < 1', 'target'], ['Gráfico', 'curva que desce', 'chart'], ['Simetria', 'aˣ e (1/a)ˣ', 'scale'], ['Desigualdades', 'sentido invertido', 'book'], ['Aplicações', 'decaimento', 'bulb']]],
      objetivos: ['Reconhecer a função exponencial <strong>decrescente</strong> (base entre $0$ e $1$).', 'Resolver <strong>inequações</strong> invertendo o sentido.', 'Relacionar $a^{x}$ e $({1|a})^{x}$ (simetria em relação ao eixo $y$).'],
      dica: 'Base entre $0$ e $1$: o sentido da desigualdade <strong>se inverte</strong> ao passar para os expoentes.',
      gancho: { titulo: 'A xícara de café esfria', texto: 'A diferença de temperatura entre o café e o ambiente cai $10%$ a cada minuto. O fator é $0,9$: depois de $1$ min a diferença é $0,9$ do que era; depois de $2$ min, $0,81$… cada vez mais perto de zero.', mini: ['Em $f(x) = 0,5^{x}$, $f(1)$ vale:', ['$0,25$', '$0,5$', '$1$', '$2$'], 1, '$0,5^{1} = 0,5$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · base entre 0 e 1', 'Propriedades', g2(`<div>
              ${checks(['<strong>Decrescente:</strong> $x_{1} < x_{2} ⇒ a^{x_{1}} > a^{x_{2}}$.', 'Passa por $(0, 1)$ e $(1, a)$; para $x → +∞$ aproxima-se de $0$.', 'Para $x > 0$: $0 < f(x) < 1$; para $x < 0$: $f(x) > 1$.', '<strong>Inequação:</strong> $({1|2})^{x} > {1|8}$ ⇒ $({1|2})^{x} > ({1|2})^{3}$ ⇒ $x < 3$ (<strong>sentido invertido</strong>).'], '.95rem')}
            </div>`, card(`<strong>Simetria</strong>
              <p style="font-size:.92rem;margin-top:8px;">$({1|2})^{x} = 2^{−x}$: o gráfico de $({1|2})^{x}$ é o de $2^{x}$ <strong>refletido no eixo $y$</strong>.</p>`, 'primary'))],
        ['Teoria · comparando com a crescente', 'Resumo lado a lado', g2(`<div>
              ${tbl(['', 'a > 1', '0 < a < 1'], [['monotonia', 'crescente', 'decrescente'], ['x → +∞', 'f → +∞', 'f → 0'], ['x → −∞', 'f → 0', 'f → +∞'], ['desigualdade nos expoentes', 'mantém', 'inverte'], ['ponto comum', '$(0, 1)$', '$(0, 1)$']])}
            </div>`, callout('Dica', 'Se tiver dúvida sobre o sentido, teste dois valores: $({1|2})^{1} = 0,5$ e $({1|2})^{2} = 0,25$: aumentou o expoente, diminuiu o valor.', 'growth'))]
      ],
      exemplos: [
        ['Comparar', 'Compare $0,2^{3}$ e $0,2^{4}$.', [['Base entre 0 e 1', 'Função decrescente.'], ['Expoentes', '$3 < 4$ ⇒ $0,2^{3} > 0,2^{4}$.']], '$0,008 > 0,0016$.'],
        ['Inequação', 'Resolva $({1|3})^{x} < {1|27}$.', [['Mesma base', '${1|27} = ({1|3})^{3}$.'], ['Base < 1', 'Inverte o sentido.']], '$({1|3})^{x} < ({1|3})^{3}$ ⇒ $x > 3$.']
      ],
      widget: { titulo: 'Explorando 0 < a < 1', html: w74.html, js: w74.js },
      pratique: [
        ['Decrescente?', 'Qual função é decrescente?', ['$f(x) = 3^{x}$', '$f(x) = ({2|3})^{x}$', '$f(x) = 10^{x}$', '$f(x) = x^{2}$'], 1, 'Base ${2|3}$ entre $0$ e $1$. <strong>Alternativa B.</strong>'],
        ['Inequação', 'A solução de $({1|2})^{x} ≥ {1|4}$ é:', ['$x ≥ 2$', '$x ≤ 2$', '$x ≥ 4$', '$x ≤ 4$'], 1, '$({1|2})^{x} ≥ ({1|2})^{2}$ ⇒ $x ≤ 2$. <strong>Alternativa B.</strong>'],
        ['Simetria', '$({1|2})^{x}$ é igual a:', ['$2^{x}$', '$2^{−x}$', '$−2^{x}$', '$x^{2}$'], 1, '$({1|2})^{x} = 2^{−x}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A droga no sangue', 'A quantidade de um remédio no sangue é $Q(t) = 80 · 0,5^{t}$ (mg, $t$ em horas). A função é:', ['crescente', 'constante', 'decrescente', 'periódica', 'de domínio positivo apenas'], 2, 'Base $0,5 ∈ (0, 1)$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer de inverter', 'Com $0 < a < 1$, a desigualdade inverte.'], ['Confundir assíntota', 'Aqui a curva se aproxima do eixo $x$ quando $x → +∞$.'], ['Base negativa ou zero', 'Não há função exponencial com essas bases.'], ['Imagem', 'Continua sendo positiva: $f(x) > 0$.']],
      quiz: [
        { q: 'A função $a^{x}$ é decrescente quando:', o: ['$a > 1$', '$0 < a < 1$', '$a < 0$', '$a = 1$'], a: 1 },
        { q: '$0,5^{x} < 0,25$ ⇒', o: ['$x < 2$', '$x > 2$', '$x < 4$', '$x > 4$'], a: 1 },
        { q: 'Para $x → +∞$, $0,9^{x}$ tende a:', o: ['$+∞$', '$1$', '$0$', '$−∞$'], a: 2 },
        { q: 'Os gráficos de $2^{x}$ e $({1|2})^{x}$ são simétricos em relação ao:', o: ['eixo $x$', 'eixo $y$', 'ponto $(1, 1)$', 'origem'], a: 1 }
      ],
      sintese: [['Decrescente', '0 < a < 1: x maior ⇒ f menor.'], ['Inequações', 'Inverte o sentido.'], ['Simetria', '(1/a)ˣ é o espelho de aˣ no eixo y.']],
      msg: 'Na próxima aula você conhece o logaritmo, a operação inversa da exponencial.'
    }
  ]
});
