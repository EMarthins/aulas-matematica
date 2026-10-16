// Módulo 3 · Matemática · 2ª série · 3º trimestre — Logaritmo: definição e consequências (aulas 75, 76 e 77 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/logaritmo-definicao-e-consequencias/',
  titulo: 'Logaritmo: definição e consequências', accent: 'decay', icon: 'curve-log', key: 'm2w03', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 75 a 77 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 75
    {
      slug: 'logaritmo-definicao', titulo: 'Logaritmo: definição',
      h1: `${co('decay')}Logaritmo:</span> o expoente que procuramos`,
      sub: 'O logaritmo responde à pergunta: a que expoente devo elevar a base para obter este número? É a operação inversa da potenciação, criada para simplificar contas enormes.',
      badges: [['logₐ b = x'], ['aˣ = b', 'growth'], ['expoente', 'decay']], color: 'decay',
      roteiro: ['Da pergunta ao símbolo log.', [['A pergunta', '2 elevado a quanto dá 8?', 'bulb'], ['Definição', 'logₐ b = x ⇔ aˣ = b', 'target'], ['Elementos', 'base, logaritmando, logaritmo', 'book'], ['Calcular', 'passar para exponencial', 'scale'], ['Aplicações', 'escalas e crescimento', 'chart']]],
      objetivos: ['Compreender a <strong>definição</strong> de logaritmo.', 'Identificar <strong>base, logaritmando e logaritmo</strong>.', 'Calcular logaritmos simples <strong>convertendo para potência</strong>.'],
      dica: '$log_{a} b = x$ lê-se “logaritmo de $b$ na base $a$ é $x$” e significa $a^{x} = b$. O <strong>logaritmo é um expoente</strong>.',
      gancho: { titulo: 'Quantas dobras?', texto: 'Dobrando uma folha de papel várias vezes, o número de camadas é $2, 4, 8, 16, …$ Quantas dobras são necessárias para ter $32$ camadas? É o mesmo que perguntar: <strong>2 elevado a quanto dá 32?</strong>', mini: ['O valor de $log_{2} 32$ é:', ['$4$', '$5$', '$6$', '$16$'], 1, '$2^{5} = 32$, logo $log_{2} 32 = 5$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Logaritmo e potência', g2(`<div>
              ${checks(['<strong>Definição:</strong> $log_{a} b = x ⇔ a^{x} = b$, com $a > 0$, $a ≠ 1$ e $b > 0$.', '<strong>$a$</strong> é a base; <strong>$b$</strong> é o logaritmando; <strong>$x$</strong> é o logaritmo.', '$log_{3} 81 = 4$, pois $3^{4} = 81$.', '$log_{5} {1|25} = −2$, pois $5^{−2} = {1|25}$.'], '.95rem')}
            </div>`, card(`<strong>Traduzindo</strong>
              ${tbl(['Logaritmo', 'Potência'], [['$log_{2} 8 = 3$', '$2^{3} = 8$'], ['$log_{10} 1000 = 3$', '$10^{3} = 1000$'], ['$log_{4} 2 = {1|2}$', '$4^{{1|2}} = 2$'], ['$log_{7} 1 = 0$', '$7^{0} = 1$']])}`, 'primary'))],
        ['Teoria · como calcular', 'Passe para exponencial', g2(`<div>
              ${checks(['Para calcular $log_{a} b$, chame o valor de $x$ e escreva $a^{x} = b$.', 'Resolva a equação exponencial: reduza à mesma base.', 'Exemplo: $log_{8} 4 = x$ ⇒ $8^{x} = 4$ ⇒ $2^{3x} = 2^{2}$ ⇒ $x = {2|3}$.', 'Para achar a <strong>base</strong>: $log_{x} 49 = 2$ ⇒ $x² = 49$ ⇒ $x = 7$ (a base é positiva).'], '.95rem')}
            </div>`, callout('Memorize', 'O logaritmo é o <strong>expoente</strong>. Se disseram $log_{2} 8 = 3$, o $3$ é o expoente de $2$ que dá $8$.', 'decay'))]
      ],
      exemplos: [
        ['Calculando', 'Calcule $log_{2} 64$.', [['Defina $x$', '$log_{2} 64 = x ⇔ 2^{x} = 64$.'], ['Fatore', '$64 = 2^{6}$.'], ['Conclua', '$x = 6$.']], '$log_{2} 64 = 6$.'],
        ['Achando a base', 'Determine $x$ em $log_{x} 125 = 3$.', [['Definição', '$x^{3} = 125$.'], ['Raiz cúbica', '$x = 5$.']], '$x = 5$ (base positiva e diferente de $1$).']
      ],
      pratique: [
        ['Calcular', '$log_{3} 27$ vale:', ['$2$', '$3$', '$9$', '$81$'], 1, '$3^{3} = 27$. <strong>Alternativa B.</strong>'],
        ['Fração', '$log_{2} {1|8}$ vale:', ['$−3$', '$−8$', '$3$', '${1|3}$'], 0, '$2^{−3} = {1|8}$. <strong>Alternativa A.</strong>'],
        ['Base', 'Se $log_{x} 16 = 4$, então $x$ vale:', ['$2$', '$4$', '$8$', '$16$'], 0, '$x^{4} = 16$ ⇒ $x = 2$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Dobras e camadas', 'Uma folha é dobrada ao meio sucessivamente. Após $x$ dobras há $2^{x}$ camadas. Para obter $1 024$ camadas são necessárias:', ['$8$ dobras', '$9$ dobras', '$10$ dobras', '$11$ dobras', '$512$ dobras'], 2, '$log_{2} 1024 = 10$, pois $2^{10} = 1024$. <strong>Alternativa C.</strong>'],
      cuidados: [['Logaritmo como multiplicação', '$log_{2} 8$ <strong>não</strong> é $2 · 8$: é o expoente $3$.'], ['Base e logaritmando trocados', '$log_{2} 8 = 3$, mas $log_{8} 2 = {1|3}$.'], ['Base inválida', 'Base deve ser positiva e diferente de $1$.'], ['Logaritmando negativo', '$log_{2} (−4)$ não existe nos reais.']],
      quiz: [
        { q: '$log_{5} 25$ vale:', o: ['$2$', '$5$', '$20$', '$125$'], a: 0 },
        { q: '$log_{10} 100$ vale:', o: ['$1$', '$2$', '$10$', '$100$'], a: 1 },
        { q: '$log_{a} b = x$ equivale a:', o: ['$x^{a} = b$', '$a^{x} = b$', '$b^{x} = a$', '$a · x = b$'], a: 1 },
        { q: 'O logaritmo é um:', o: ['expoente', 'coeficiente', 'raiz quadrada', 'quociente'], a: 0 }
      ],
      sintese: [['Definição', 'log_a b = x ⇔ aˣ = b.'], ['Elementos', 'Base a, logaritmando b, logaritmo x.'], ['Cálculo', 'Passe para exponencial e use a mesma base.']],
      msg: 'Na próxima aula você vê as consequências imediatas da definição.'
    },
    // ------------------------------------------------------------ aula 76
    {
      slug: 'logaritmo-consequencias-da-definicao-i', titulo: 'Logaritmo: consequências da definição I',
      h1: `Logaritmo: ${co('decay')}consequências da definição</span> I`,
      sub: 'Da própria definição saem quatro resultados muito usados: log de 1, log da base, log de uma potência da base e a identidade a elevado ao log.',
      badges: [['logₐ 1 = 0'], ['logₐ a = 1', 'growth'], ['logₐ aⁿ = n', 'decay']], color: 'decay',
      roteiro: ['Quatro consequências diretas.', [['Log de 1', 'sempre zero', 'target'], ['Log da base', 'sempre um', 'bulb'], ['Log da potência', 'o expoente', 'chart'], ['Identidade', 'a^(log b) = b', 'scale'], ['Aplicar', 'simplificar expressões', 'book']]],
      objetivos: ['Aplicar a <strong>definição</strong> para deduzir as consequências.', 'Simplificar expressões usando $log_{a} 1 = 0$, $log_{a} a = 1$ e $log_{a} a^{n} = n$.', 'Usar a identidade $a^{log_{a} b} = b$.'],
      dica: 'Todas as consequências decorrem de $log_{a} b = x ⇔ a^{x} = b$. Se esquecer uma, <strong>deduza</strong>.',
      gancho: { titulo: 'Quanto é log de 1?', texto: 'Qualquer número (positivo, diferente de $1$) elevado a $0$ dá $1$: $2^{0} = 1$, $5^{0} = 1$, $10^{0} = 1$. Então, em qualquer base, o logaritmo de $1$ é o expoente <strong>0</strong>.', mini: ['$log_{7} 1$ vale:', ['$0$', '$1$', '$7$', 'não existe'], 0, '$7^{0} = 1$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · consequências', 'As quatro identidades', g2(`<div>
              ${tbl(['Consequência', 'Motivo', 'Exemplo'], [['$log_{a} 1 = 0$', '$a^{0} = 1$', '$log_{9} 1 = 0$'], ['$log_{a} a = 1$', '$a^{1} = a$', '$log_{5} 5 = 1$'], ['$log_{a} a^{n} = n$', '$a^{n} = a^{n}$', '$log_{3} 3^{7} = 7$'], ['$a^{log_{a} b} = b$', 'definição', '$2^{log_{2} 5} = 5$']])}
            </div>`, callout('Como lembrar', 'Logaritmo e potência de mesma base “se desfazem”: $log_{a}(a^{n}) = n$ e $a^{log_{a} b} = b$.', 'decay'))],
        ['Teoria · usando', 'Simplificar expressões', g2(`<div>
              ${checks(['$log_{2} 16 + log_{3} 1 = 4 + 0 = 4$.', '$log_{5} 5 + log_{10} 100 = 1 + 2 = 3$.', '$3^{log_{3} 7} = 7$ e $10^{log_{10} 0,01} = 0,01$.', '$log_{2} 2^{9} = 9$, sem calcular $2^{9}$.'], '.95rem')}
            </div>`, card(`<strong>Logaritmos iguais</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log_{a} b = log_{a} c ⇔ b = c$ (se existirem).</p>`, 'primary'))]
      ],
      exemplos: [
        ['Simplificando', 'Calcule $log_{3} 1 + log_{3} 3 + log_{3} 9$.', [['$log_{3} 1$', '$0$.'], ['$log_{3} 3$', '$1$.'], ['$log_{3} 9$', '$2$.']], 'A soma é <strong>3</strong>.'],
        ['Identidade', 'Calcule $5^{log_{5} 12} + 2^{log_{2} 3}$.', [['Primeiro', '$12$.'], ['Segundo', '$3$.']], 'A soma é <strong>15</strong>.']
      ],
      pratique: [
        ['Log da base', '$log_{8} 8$ vale:', ['$0$', '$1$', '$8$', '$64$'], 1, '$log_{a} a = 1$. <strong>Alternativa B.</strong>'],
        ['Log da potência', '$log_{2} 2^{10}$ vale:', ['$2$', '$10$', '$20$', '$1 024$'], 1, '$log_{a} a^{n} = n$. <strong>Alternativa B.</strong>'],
        ['Identidade', '$7^{log_{7} 9}$ vale:', ['$7$', '$9$', '$16$', '$63$'], 1, '$a^{log_{a} b} = b$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Simplificação', 'O valor de $log_{4} 1 + log_{4} 4 + log_{4} 16$ é:', ['$1$', '$2$', '$3$', '$4$', '$21$'], 2, '$0 + 1 + 2 = 3$. <strong>Alternativa C.</strong>'],
      cuidados: [['$log_{a} a = 0$?', 'Não: $log_{a} a = 1$ ($a^{1} = a$).'], ['$log_{a} 0$', 'Não existe: nenhuma potência de base positiva dá $0$.'], ['Misturar bases', 'As consequências valem quando <strong>a base é a mesma</strong>.'], ['Esquecer a identidade', '$a^{log_{a} b} = b$ elimina o logaritmo.']],
      quiz: [
        { q: '$log_{6} 1$ vale:', o: ['$0$', '$1$', '$6$', '$−1$'], a: 0 },
        { q: '$log_{5} 5^{3}$ vale:', o: ['$3$', '$5$', '$15$', '$125$'], a: 0 },
        { q: '$10^{log_{10} 4}$ vale:', o: ['$4$', '$10$', '$40$', '$2$'], a: 0 },
        { q: '$log_{a} a$ vale:', o: ['$0$', '$1$', '$a$', 'depende'], a: 1 }
      ],
      sintese: [['Identidades', 'log 1 = 0; log a = 1; log aⁿ = n; a^(log b) = b.'], ['Origem', 'Todas vêm da definição.'], ['Base igual', 'Valem para a mesma base.']],
      msg: 'Na próxima aula você pratica as consequências em exercícios variados.'
    },
    // ------------------------------------------------------------ aula 77
    {
      slug: 'logaritmo-consequencias-da-definicao-ii', titulo: 'Logaritmo: consequências da definição II',
      h1: `Logaritmo: ${co('decay')}consequências da definição</span> II`,
      sub: 'Hora de aplicar as consequências em equações simples: achar a base, o logaritmando ou o logaritmo, e comparar logaritmos de mesma base.',
      badges: [['achar a base'], ['achar b', 'growth'], ['comparar', 'decay']], color: 'decay',
      roteiro: ['Resolver incógnitas em log.', [['Achar o logaritmo', 'x = logₐ b', 'target'], ['Achar o logaritmando', 'b = aˣ', 'scale'], ['Achar a base', 'a = b^(1/x)', 'chart'], ['Logaritmos iguais', 'b = c', 'bulb'], ['Estimar', 'entre dois inteiros', 'book']]],
      objetivos: ['Resolver <strong>equações logarítmicas simples</strong> pela definição.', 'Estimar logaritmos entre <strong>dois inteiros consecutivos</strong>.', 'Usar $log_{a} b = log_{a} c ⇒ b = c$.'],
      dica: 'Para resolver, <strong>volte à potência</strong>: $log_{a} b = x ⇔ a^{x} = b$.',
      gancho: { titulo: 'Entre quais números?', texto: 'Sabemos que $2^{3} = 8$ e $2^{4} = 16$. Então $log_{2} 10$ está entre $3$ e $4$. Dá para estimar sem calculadora usando potências conhecidas.', mini: ['$log_{2} 10$ está entre:', ['$2$ e $3$', '$3$ e $4$', '$4$ e $5$', '$10$ e $11$'], 1, '$8 < 10 < 16$ ⇒ $3 < log_{2} 10 < 4$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · três incógnitas', 'Logaritmo, logaritmando e base', g2(`<div>
              ${checks(['<strong>Logaritmo desconhecido:</strong> $log_{2} 32 = x$ ⇒ $2^{x} = 32$ ⇒ $x = 5$.', '<strong>Logaritmando desconhecido:</strong> $log_{3} x = 4$ ⇒ $x = 3^{4} = 81$.', '<strong>Base desconhecida:</strong> $log_{x} 9 = 2$ ⇒ $x² = 9$ ⇒ $x = 3$ (base positiva).', '<strong>Igualdade:</strong> $log_{5} (2x + 1) = log_{5} 11$ ⇒ $2x + 1 = 11$ ⇒ $x = 5$.'], '.95rem')}
            </div>`, card(`<strong>Estimando</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log_{3} 50$: $3^{3} = 27$ e $3^{4} = 81$ ⇒ entre $3$ e $4$.</p>`, 'primary'))],
        ['Teoria · comparar', 'Logaritmos de mesma base', g2(`<div>
              ${checks(['Base $> 1$: $b < c ⇒ log_{a} b < log_{a} c$ (mantém).', 'Base entre $0$ e $1$: $b < c ⇒ log_{a} b > log_{a} c$ (inverte).', 'Exemplo: $log_{2} 5 < log_{2} 7$ (base $2 > 1$).', 'Exemplo: $log_{0,5} 5 > log_{0,5} 7$ (base $< 1$).'], '.95rem')}
            </div>`, callout('Cuidado', 'Sempre verifique se o logaritmando ficou <strong>positivo</strong> ao final.', 'decay'))]
      ],
      exemplos: [
        ['Logaritmando', 'Resolva $log_{2} (x − 1) = 3$.', [['Definição', '$x − 1 = 2^{3} = 8$.'], ['Resolva', '$x = 9$.'], ['Condição', '$x − 1 = 8 > 0$ ✓.']], '$x = 9$.'],
        ['Estimativa', 'Entre quais inteiros consecutivos está $log_{5} 100$?', [['Potências de 5', '$5^{2} = 25$ e $5^{3} = 125$.'], ['Comparar', '$25 < 100 < 125$.']], '$2 < log_{5} 100 < 3$.']
      ],
      pratique: [
        ['Logaritmando', 'Se $log_{4} x = 3$, então $x$ vale:', ['$12$', '$16$', '$64$', '$81$'], 2, '$x = 4^{3} = 64$. <strong>Alternativa C.</strong>'],
        ['Base', 'Se $log_{x} 81 = 4$, então $x$ vale:', ['$2$', '$3$', '$9$', '$27$'], 1, '$x^{4} = 81$ ⇒ $x = 3$. <strong>Alternativa B.</strong>'],
        ['Estimar', '$log_{2} 20$ está entre:', ['$3$ e $4$', '$4$ e $5$', '$5$ e $6$', '$20$ e $21$'], 1, '$16 < 20 < 32$ ⇒ entre $4$ e $5$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Escala de intensidade', 'Em uma escala, um fenômeno de intensidade $I$ recebe a nota $N = log_{10} I$. Se $N = 5$, a intensidade $I$ é:', ['$50$', '$500$', '$5 000$', '$100 000$', '$10^{−5}$'], 3, '$I = 10^{5} = 100 000$. <strong>Alternativa D.</strong>'],
      cuidados: [['Esquecer a condição de existência', 'Depois de resolver, confira se o logaritmando e a base são válidos.'], ['Raiz negativa da base', 'Em $x² = 9$, a base só pode ser $3$.'], ['Trocar base e logaritmando', '$log_{x} 9 = 2$ é diferente de $log_{9} x = 2$.'], ['Estimar com bases diferentes', 'Compare potências da mesma base.']],
      quiz: [
        { q: '$log_{2} x = 6$ ⇒ $x$ vale:', o: ['$12$', '$32$', '$64$', '$128$'], a: 2 },
        { q: '$log_{x} 16 = 2$ ⇒ $x$ vale:', o: ['$2$', '$4$', '$8$', '$−4$'], a: 1 },
        { q: '$log_{3} (x + 2) = log_{3} 7$ ⇒ $x$ vale:', o: ['$3$', '$5$', '$7$', '$9$'], a: 1 },
        { q: '$log_{2} 6$ está entre:', o: ['$1$ e $2$', '$2$ e $3$', '$3$ e $4$', '$6$ e $7$'], a: 1 }
      ],
      sintese: [['Resolver', 'Voltar à potência: log_a b = x ⇔ aˣ = b.'], ['Estimar', 'Entre potências consecutivas da base.'], ['Conferir', 'Base e logaritmando devem ser válidos.']],
      msg: 'Na próxima aula: logaritmos decimais e a condição de existência.'
    }
  ]
});
