// Módulo 1 · Matemática · 3ª série · 3º trimestre — Sequências numéricas (aulas 69, 70, 71 e 72 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo ("log x", sem vírgula nem barra). Em math, "${a|b}" só dentro de aspas simples.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('../gerador-9ano/wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w70 = Wd.sequencia('sq70');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/sequencias-numericas/',
  titulo: 'Sequências numéricas', accent: 'growth', icon: 'stairs', key: 'm3x01', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 69 a 72 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 69
    {
      slug: 'sequencias-numericas-i', titulo: 'Sequências numéricas I: padrões e a ideia de função',
      h1: `Sequências ${co('growth')}numéricas:</span> padrões e funções`,
      sub: 'Uma sequência é uma lista ordenada de números. Cada termo ocupa uma posição, e podemos ver a sequência como uma função que leva a posição ao valor do termo.',
      badges: [['sequência'], ['posição n', 'growth'], ['função de ℕ*', 'decay']], color: 'growth',
      roteiro: ['Da lista à função.', [['Sequência', 'termos ordenados', 'bulb'], ['Notação', 'a₁, a₂, a₃, …', 'book'], ['Padrões', 'a regra da lista', 'target'], ['Função', 'posição → termo', 'chart'], ['Finita ou infinita', 'tipos', 'scale']]],
      objetivos: ['Reconhecer <strong>padrões</strong> em sequências numéricas.', 'Usar a notação $a_{1}, a_{2}, …, a_{n}$.', 'Entender a sequência como <strong>função</strong> da posição $n$.'],
      dica: 'A <strong>posição</strong> $n$ é a entrada; o <strong>termo</strong> $a_{n}$ é a saída. Descobrir o padrão é descobrir a regra dessa função.',
      gancho: { titulo: 'A fila do ônibus', texto: 'Numa fila, a 1ª pessoa tem a senha $5$, a 2ª tem $8$, a 3ª tem $11$, a 4ª tem $14$… Qual senha terá a 10ª pessoa? Se você descobrir como a senha depende da posição, não precisa listar todas.', mini: ['O padrão de $5, 8, 11, 14, …$ é somar:', ['$2$', '$3$', '$4$', '$5$'], 1, 'De cada termo ao seguinte soma-se $3$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · sequência', 'Termos, posições e notação', g2(`<div>
              ${checks(['<strong>Sequência numérica:</strong> lista ordenada de números $(a_{1}, a_{2}, a_{3}, …)$.', '<strong>$a_{n}$</strong> é o termo da posição $n$; $a_{1}$ é o primeiro termo.', '<strong>Finita</strong> (termina em $a_{n}$) ou <strong>infinita</strong> (reticências).', 'Exemplos: $(2, 4, 6, 8, …)$ (pares); $(1, 4, 9, 16, …)$ (quadrados); $(1, 1, 2, 3, 5, …)$ (Fibonacci).'], '.95rem')}
            </div>`, card(`<strong>Função de posição</strong>
              ${tbl(['$n$', '$1$', '$2$', '$3$', '$4$', '$5$'], [['$a_{n}$', '$5$', '$8$', '$11$', '$14$', '$17$']])}
              <p class="hint" style="margin-top:6px;">Cada $n$ tem um único $a_{n}$: é uma função de $ℕ^{*}$ em $ℝ$.</p>`, 'primary'))],
        ['Teoria · padrões', 'Como descobrir a regra', g2(`<div>
              ${checks(['Calcule as <strong>diferenças</strong> entre termos consecutivos: se forem iguais, soma-se um valor fixo.', 'Calcule os <strong>quocientes</strong>: se forem iguais, multiplica-se por um valor fixo.', 'Compare com sequências conhecidas: $n$, $n²$, $2^{n}$, $2n + 1$.', 'Teste a regra em <strong>todos</strong> os termos dados antes de confiar nela.'], '.95rem')}
            </div>`, callout('Exemplo', '$(3, 7, 11, 15, …)$: diferença $4$ ⇒ $a_{n} = 3 + 4(n − 1) = 4n − 1$.', 'growth'))]
      ],
      exemplos: [
        ['Próximos termos', 'Continue $(2, 5, 10, 17, 26, …)$.', [['Diferenças', '$3, 5, 7, 9$ (aumentam $2$ a cada passo).'], ['Próxima diferença', '$11$.'], ['Termos', '$26 + 11 = 37$ e $37 + 13 = 50$.']], 'Próximos: <strong>37, 50, …</strong> (é $n² + 1$).'],
        ['Termo qualquer', 'Em $a_{n} = 3n + 2$, calcule $a_{1}$, $a_{4}$ e $a_{20}$.', [['$a_{1}$', '$3 + 2 = 5$.'], ['$a_{4}$', '$14$.'], ['$a_{20}$', '$62$.']], '$a_{1} = 5$, $a_{4} = 14$ e $a_{20} = 62$.']
      ],
      pratique: [
        ['Padrão', 'A sequência $(10, 7, 4, 1, …)$ tem próximo termo:', ['$−1$', '$−2$', '$−3$', '$0$'], 1, 'Subtrai-se $3$: $1 − 3 = −2$. <strong>Alternativa B.</strong>'],
        ['Termo', 'Se $a_{n} = n² − 1$, então $a_{5}$ vale:', ['$4$', '$16$', '$24$', '$26$'], 2, '$25 − 1 = 24$. <strong>Alternativa C.</strong>'],
        ['Notação', 'Na sequência $(4, 9, 14, 19)$, o termo $a_{3}$ é:', ['$4$', '$9$', '$14$', '$19$'], 2, 'Terceiro termo. <strong>Alternativa C.</strong>']
      ],
      enem: ['Os degraus da escada', 'Uma escada tem $1$ bloco no 1º degrau, $3$ blocos no 2º, $5$ no 3º, e assim por diante (números ímpares). Quantos blocos terá o 8º degrau?', ['$13$', '$15$', '$17$', '$16$', '$8$'], 1, '$a_{n} = 2n − 1$; $a_{8} = 15$. <strong>Alternativa B.</strong>'],
      cuidados: [['Padrão só por dois termos', 'Confira a regra em todos os termos dados.'], ['Posição × valor', '$n$ é a posição; $a_{n}$ é o valor.'], ['Contar errado', '$a_{n}$ com $n = 1$ é o primeiro termo, não o zero-ésimo.'], ['Padrões diferentes, mesmos termos', 'Vários padrões podem gerar os mesmos primeiros termos; o enunciado indica o correto.']],
      quiz: [
        { q: 'Em $(6, 11, 16, 21, …)$ a diferença é:', o: ['$4$', '$5$', '$6$', '$10$'], a: 1 },
        { q: 'Em $a_{n} = 2n + 1$, $a_{3}$ vale:', o: ['$5$', '$6$', '$7$', '$9$'], a: 2 },
        { q: 'Uma sequência pode ser vista como função de:', o: ['$ℝ$ em $ℝ$', 'posições inteiras positivas em números', 'só pares', 'nenhuma função'], a: 1 },
        { q: 'A sequência dos quadrados $(1, 4, 9, 16, …)$ tem termo geral:', o: ['$2n$', '$n + 3$', '$n²$', '$2^{n}$'], a: 2 }
      ],
      sintese: [['Sequência', 'Lista ordenada; aₙ é o termo da posição n.'], ['Padrão', 'Diferenças ou quocientes constantes.'], ['Função', 'Posição n → termo aₙ.']],
      msg: 'Na próxima aula você escreve o termo geral e usa o simulador de sequências.'
    },
    // ------------------------------------------------------------ aula 70
    {
      slug: 'sequencias-numericas-ii', titulo: 'Sequências numéricas II: lei de formação e termo geral',
      h1: `Sequências ${co('growth')}numéricas:</span> o termo geral`,
      sub: 'O termo geral a_n é uma fórmula que dá qualquer termo a partir da posição n. Com ele calculamos o termo 100 sem escrever os 99 anteriores.',
      badges: [['termo geral'], ['aₙ = f(n)', 'growth'], ['lei de formação', 'decay']], color: 'growth',
      roteiro: ['Da tabela à fórmula.', [['Termo geral', 'aₙ = f(n)', 'target'], ['Achar a fórmula', 'a partir da tabela', 'scale'], ['Usar a fórmula', 'termos distantes', 'chart'], ['Qual posição?', 'resolver equação', 'book'], ['Pertence?', 'testar um número', 'bulb']]],
      objetivos: ['Escrever o <strong>termo geral</strong> de sequências simples.', 'Calcular termos <strong>distantes</strong> e a <strong>posição</strong> de um termo.', 'Decidir se um número <strong>pertence</strong> à sequência.'],
      dica: 'Para saber se $k$ é termo de $a_{n} = f(n)$, resolva $f(n) = k$: precisa dar $n$ <strong>inteiro positivo</strong>.',
      gancho: { titulo: 'A senha do cofre', texto: 'Um cofre usa a sequência $a_{n} = 3n + 1$ para gerar códigos: $4, 7, 10, 13, …$ O código $100$ aparece? Em qual posição? Basta resolver $3n + 1 = 100$.', mini: ['Se $a_{n} = 3n + 1$, o termo $a_{10}$ é:', ['$30$', '$31$', '$33$', '$13$'], 1, '$3 · 10 + 1 = 31$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · termo geral', 'Como encontrar', g2(`<div>
              ${checks(['<strong>Termo geral:</strong> expressão em $n$ que fornece $a_{n}$.', '$(5, 8, 11, 14, …)$: soma $3$; começa em $5$ ⇒ $a_{n} = 3n + 2$ (confira: $a_{1} = 5$ ✓).', '$(2, 4, 8, 16, …)$: dobra; $a_{n} = 2^{n}$.', '$(1, 4, 9, 16, …)$: quadrados; $a_{n} = n²$.'], '.95rem')}
            </div>`, card(`<strong>Roteiro</strong>
              <p style="font-size:.92rem;margin-top:8px;">1) Monte a tabela $n$ × $a_{n}$.</p>
              <p style="font-size:.92rem;">2) Veja se há diferença ou razão constante.</p>
              <p style="font-size:.92rem;">3) Ajuste a fórmula e teste em dois ou três termos.</p>`, 'primary'))],
        ['Teoria · usando', 'Posição e pertencimento', g2(`<div>
              ${checks(['<strong>Qual posição?</strong> $a_{n} = 4n − 3 = 85$ ⇒ $4n = 88$ ⇒ $n = 22$.', '<strong>Pertence?</strong> $4n − 3 = 50$ ⇒ $n = {53|4}$ (não inteiro) ⇒ $50$ <strong>não</strong> pertence.', '<strong>Termo distante:</strong> $a_{100} = 4 · 100 − 3 = 397$.', 'Simule no widget: mude o primeiro termo e a razão e veja a tabela.'], '.95rem')}
            </div>`, callout('Teste final', 'A posição $n$ precisa ser inteira e positiva. Se der fracionária ou negativa, o número não faz parte da sequência.', 'growth'))]
      ],
      exemplos: [
        ['Achar a fórmula', 'Escreva o termo geral de $(7, 11, 15, 19, …)$ e calcule $a_{30}$.', [['Diferença', '$4$.'], ['Fórmula', '$a_{n} = 7 + 4(n − 1) = 4n + 3$.'], ['$a_{30}$', '$4 · 30 + 3 = 123$.']], '$a_{n} = 4n + 3$ e $a_{30} = 123$.'],
        ['Pertence?', 'O número $203$ é termo de $a_{n} = 5n + 3$?', [['Equação', '$5n + 3 = 203$.'], ['Resolva', '$n = 40$.']], 'Sim, é o termo da posição <strong>40</strong>.']
      ],
      widget: { titulo: 'Gerador de sequências', html: w70.html, js: w70.js },
      pratique: [
        ['Fórmula', 'O termo geral de $(1, 3, 5, 7, …)$ é:', ['$n + 2$', '$2n − 1$', '$2n + 1$', '$n²$'], 1, '$a_{1} = 1$, diferença $2$. <strong>Alternativa B.</strong>'],
        ['Posição', 'Em $a_{n} = 6n − 2$, o termo $58$ está na posição:', ['$8$', '$9$', '$10$', '$11$'], 2, '$6n = 60$. <strong>Alternativa C.</strong>'],
        ['Pertence?', '$a_{n} = 3n + 1$: qual número pertence à sequência?', ['$20$', '$25$', '$31$', '$33$'], 2, '$3n + 1 = 31$ ⇒ $n = 10$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A fila de cadeiras', 'Na 1ª fileira de um auditório há $12$ cadeiras e cada fileira seguinte tem $3$ a mais. Quantas cadeiras tem a fileira $15$?', ['$45$', '$54$', '$57$', '$60$', '$63$'], 1, '$a_{n} = 12 + 3(n − 1)$; $a_{15} = 12 + 42 = 54$. <strong>Alternativa B.</strong>'],
      cuidados: [['$n$ em vez de $n − 1$', 'De $a_{1}$ a $a_{n}$ são $n − 1$ passos.'], ['Posição fracionária', 'Se $n$ não é inteiro, o valor não pertence.'], ['Fórmula só testada em $a_{1}$', 'Teste em pelo menos dois termos.'], ['Mesmo padrão para tudo', 'Soma constante é diferente de razão constante.']],
      quiz: [
        { q: 'Termo geral de $(4, 6, 8, 10, …)$:', o: ['$2n + 2$', '$2n$', '$n + 3$', '$4n$'], a: 0 },
        { q: 'Em $a_{n} = 2n − 5$, $a_{20}$ vale:', o: ['$35$', '$40$', '$45$', '$25$'], a: 0 },
        { q: 'O número $50$ pertence a $a_{n} = 4n − 3$?', o: ['sim, posição $13$', 'não', 'sim, posição $12$', 'sim, posição $14$'], a: 1 },
        { q: 'A posição $n$ deve ser:', o: ['qualquer real', 'inteira positiva', 'negativa', 'fracionária'], a: 1 }
      ],
      sintese: [['Termo geral', 'Fórmula de aₙ em função de n.'], ['Posição', 'Resolva f(n) = k; n inteiro positivo.'], ['Cuidado', 'Passos entre a₁ e aₙ são n − 1.']],
      msg: 'Na próxima aula: sequências definidas por recorrência.'
    },
    // ------------------------------------------------------------ aula 71
    {
      slug: 'sequencias-numericas-iii', titulo: 'Sequências numéricas III: recorrência',
      h1: `Sequências ${co('growth')}numéricas:</span> definidas por recorrência`,
      sub: 'Em uma recorrência, cada termo é calculado a partir do anterior (ou dos anteriores). A sequência de Fibonacci e as dívidas com juros são exemplos clássicos.',
      badges: [['recorrência'], ['aₙ₊₁ = f(aₙ)', 'growth'], ['Fibonacci', 'decay']], color: 'growth',
      roteiro: ['De termo em termo.', [['Recorrência', 'termo a partir do anterior', 'target'], ['Termo inicial', 'a₁ dado', 'bulb'], ['Calcular', 'passo a passo', 'chart'], ['Fibonacci', 'soma dos dois anteriores', 'book'], ['Fórmula fechada', 'sem recursão', 'scale']]],
      objetivos: ['Calcular termos de uma sequência <strong>definida por recorrência</strong>.', 'Reconhecer a <strong>sequência de Fibonacci</strong>.', 'Passar de recorrência a <strong>termo geral</strong> em casos simples (PA e PG).'],
      dica: 'Recorrência = <strong>regra</strong> ($a_{n+1}$ em função de $a_{n}$) + <strong>termo inicial</strong> ($a_{1}$). Sem o inicial, a sequência não fica definida.',
      gancho: { titulo: 'O saldo que rende', texto: 'Um saldo de R$ 1.000 rende $10%$ ao mês: cada mês é $1,1$ vezes o anterior. Os saldos são $1000$, $1100$, $1210$, $1331$… A regra é $a_{n+1} = 1,1 · a_{n}$, com $a_{1} = 1000$.', mini: ['Com $a_{1} = 2$ e $a_{n+1} = 3 · a_{n}$, o terceiro termo é:', ['$6$', '$12$', '$18$', '$27$'], 2, '$a_{2} = 6$ e $a_{3} = 18$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · recorrência', 'Regra e termo inicial', g2(`<div>
              ${checks(['<strong>Definição recursiva:</strong> $a_{1}$ dado e $a_{n+1} = f(a_{n})$.', '$a_{1} = 5$ e $a_{n+1} = a_{n} + 3$: $5, 8, 11, 14, …$ (<strong>PA</strong>).', '$a_{1} = 2$ e $a_{n+1} = 2 · a_{n}$: $2, 4, 8, 16, …$ (<strong>PG</strong>).', '<strong>Fibonacci:</strong> $a_{1} = a_{2} = 1$ e $a_{n+2} = a_{n+1} + a_{n}$: $1, 1, 2, 3, 5, 8, 13, …$'], '.95rem')}
            </div>`, card(`<strong>Fibonacci na natureza</strong>
              <p style="font-size:.92rem;margin-top:8px;">Número de pétalas, espirais de girassol e conchas seguem (aproximadamente) termos de Fibonacci: $5, 8, 13, 21, 34$…</p>`, 'primary'))],
        ['Teoria · da recorrência à fórmula', 'Quando é possível', g2(`<div>
              ${checks(['$a_{n+1} = a_{n} + r$ ⇒ $a_{n} = a_{1} + (n − 1) r$.', '$a_{n+1} = q · a_{n}$ ⇒ $a_{n} = a_{1} · q^{n−1}$.', '$a_{n+1} = a_{n} + n$: some as diferenças: $a_{n} = a_{1} + {n(n − 1)|2}$.', 'Para Fibonacci existe fórmula fechada (Binet), mas é mais comum calcular os termos um a um.'], '.95rem')}
            </div>`, callout('Dica', 'Se pedirem o termo $a_{50}$ e a recorrência é de PA ou PG, use o <strong>termo geral</strong> em vez de calcular $50$ termos.', 'growth'))]
      ],
      exemplos: [
        ['Calculando', 'Seja $a_{1} = 3$ e $a_{n+1} = 2 · a_{n} − 1$. Calcule $a_{2}$, $a_{3}$ e $a_{4}$.', [['$a_{2}$', '$2 · 3 − 1 = 5$.'], ['$a_{3}$', '$2 · 5 − 1 = 9$.'], ['$a_{4}$', '$2 · 9 − 1 = 17$.']], '$a_{2} = 5$, $a_{3} = 9$ e $a_{4} = 17$.'],
        ['Fibonacci', 'Calcule o 9º termo de Fibonacci ($1, 1, 2, 3, …$).', [['Continue', '$1, 1, 2, 3, 5, 8, 13, 21, 34$.']], 'O 9º termo é <strong>34</strong>.']
      ],
      pratique: [
        ['Recorrência', 'Com $a_{1} = 4$ e $a_{n+1} = a_{n} + 5$, $a_{4}$ vale:', ['$14$', '$19$', '$24$', '$29$'], 1, '$4, 9, 14, 19$. <strong>Alternativa B.</strong>'],
        ['PG', 'Com $a_{1} = 3$ e $a_{n+1} = 2a_{n}$, $a_{5}$ vale:', ['$24$', '$48$', '$96$', '$15$'], 1, '$3 · 2^{4} = 48$. <strong>Alternativa B.</strong>'],
        ['Fibonacci', 'Em $1, 1, 2, 3, 5, 8, …$ o termo seguinte é:', ['$11$', '$12$', '$13$', '$16$'], 2, '$5 + 8 = 13$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A criação de coelhos', 'Num modelo simplificado, o número de casais de coelhos em cada mês segue Fibonacci: $1, 1, 2, 3, 5, …$ Quantos casais há no 8º mês?', ['$13$', '$21$', '$34$', '$8$', '$16$'], 1, '$1, 1, 2, 3, 5, 8, 13, 21$. <strong>Alternativa B.</strong>'],
      cuidados: [['Esquecer o termo inicial', 'A recorrência sozinha não define a sequência.'], ['Trocar $a_{n}$ por $a_{n+1}$', '$a_{n+1}$ é o <strong>próximo</strong> termo.'], ['Fibonacci com dois iniciais', 'Precisa de $a_{1}$ e $a_{2}$.'], ['Calcular 100 termos', 'Em PA/PG use o termo geral.']],
      quiz: [
        { q: '$a_{1} = 1$ e $a_{n+1} = a_{n} + 2$ gera:', o: ['$1, 3, 5, 7, …$', '$1, 2, 4, 8, …$', '$1, 1, 2, 3, …$', '$2, 4, 6, …$'], a: 0 },
        { q: 'O 6º termo de Fibonacci ($1, 1, 2, …$) é:', o: ['$5$', '$8$', '$13$', '$6$'], a: 1 },
        { q: '$a_{n+1} = q · a_{n}$ define uma:', o: ['PA', 'PG', 'sequência constante apenas', 'função afim'], a: 1 },
        { q: 'Uma recorrência precisa de:', o: ['só a regra', 'regra e termo(s) inicial(is)', 'só o termo inicial', 'nada'], a: 1 }
      ],
      sintese: [['Recorrência', 'Regra + termo inicial.'], ['PA e PG', 'Têm recorrência simples e termo geral.'], ['Fibonacci', 'Cada termo é a soma dos dois anteriores.']],
      msg: 'Na próxima aula: classificação das sequências e problemas.'
    },
    // ------------------------------------------------------------ aula 72
    {
      slug: 'sequencias-numericas-iv', titulo: 'Sequências numéricas IV: classificação e problemas',
      h1: `Sequências ${co('growth')}numéricas:</span> classificação e problemas`,
      sub: 'Sequências podem ser crescentes, decrescentes, constantes ou oscilantes. Fechamos o módulo classificando e resolvendo problemas que usam termo geral e recorrência.',
      badges: [['crescente'], ['decrescente', 'growth'], ['oscilante', 'decay']], color: 'growth',
      roteiro: ['Comportamento e aplicações.', [['Crescente', 'aₙ₊₁ > aₙ', 'chart'], ['Decrescente', 'aₙ₊₁ < aₙ', 'target'], ['Constante e oscilante', 'casos especiais', 'scale'], ['Gráfico', 'pontos soltos', 'bulb'], ['Problemas', 'misturados', 'book']]],
      objetivos: ['<strong>Classificar</strong> sequências em crescente, decrescente, constante ou oscilante.', 'Representar uma sequência por <strong>gráfico de pontos</strong>.', 'Resolver <strong>problemas</strong> com termo geral e recorrência.'],
      dica: 'Compare $a_{n+1}$ com $a_{n}$: $a_{n+1} − a_{n} > 0$ (crescente), $< 0$ (decrescente), $= 0$ (constante). Se o sinal alterna, é oscilante.',
      gancho: { titulo: 'Subindo, descendo, oscilando', texto: 'Compare: $(1, 2, 3, 4, …)$ sobe; $(10, 8, 6, 4, …)$ desce; $(5, 5, 5, …)$ fica parada; $(1, −1, 1, −1, …)$ oscila. Cada tipo aparece em situações reais.', mini: ['$(1, −2, 4, −8, …)$ é:', ['crescente', 'decrescente', 'oscilante', 'constante'], 2, 'Os sinais alternam. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · classificação', 'Quatro comportamentos', g2(`<div>
              ${tbl(['Tipo', 'Condição', 'Exemplo'], [['crescente', '$a_{n+1} > a_{n}$', '$(2, 5, 8, …)$'], ['decrescente', '$a_{n+1} < a_{n}$', '$(9, 6, 3, …)$'], ['constante', '$a_{n+1} = a_{n}$', '$(4, 4, 4, …)$'], ['oscilante', 'sinal da diferença alterna', '$(1, −1, 1, …)$']])}
            </div>`, callout('Gráfico', 'O gráfico de uma sequência é um conjunto de pontos isolados $(n, a_{n})$, não uma linha contínua.', 'growth'))],
        ['Teoria · exemplos', 'Pelo termo geral', g2(`<div>
              ${checks(['$a_{n} = 3n − 1$: diferença $+3$ ⇒ crescente.', '$a_{n} = 10 − 2n$: diferença $−2$ ⇒ decrescente.', '$a_{n} = (−1)^{n}$: $−1, 1, −1, …$ ⇒ oscilante.', '$a_{n} = {1|n}$: $1, {1|2}, {1|3}, …$ ⇒ decrescente (tende a $0$).'], '.95rem')}
            </div>`, card(`<strong>Limitada?</strong>
              <p style="font-size:.92rem;margin-top:8px;">$a_{n} = {1|n}$ nunca passa de $1$ nem fica abaixo de $0$: é <strong>limitada</strong>.</p>`, 'primary'))]
      ],
      exemplos: [
        ['Classificando', 'Classifique $a_{n} = n² − 6n$ para $n = 1, 2, 3, 4, 5$.', [['Termos', '$−5, −8, −9, −8, −5$.'], ['Diferenças', '$−3, −1, +1, +3$.']], 'Primeiro <strong>decresce</strong>, depois <strong>cresce</strong>: não é monótona em todo o conjunto.'],
        ['Problema', 'A população de uma cidade segue $P_{n+1} = P_{n} + 500$, com $P_{1} = 12 000$. Em que ano a população passa de $15 000$?', [['Termo geral', '$P_{n} = 12000 + 500(n − 1)$.'], ['Condição', '$12000 + 500(n − 1) > 15000$ ⇒ $n − 1 > 6$.'], ['$n$', '$n ≥ 8$.']], 'A partir do <strong>8º ano</strong>.']
      ],
      pratique: [
        ['Classificação', '$(20, 17, 14, 11, …)$ é:', ['crescente', 'decrescente', 'constante', 'oscilante'], 1, 'Diferença $−3$. <strong>Alternativa B.</strong>'],
        ['Termo geral', '$a_{n} = 4n − 9$ é uma sequência:', ['crescente', 'decrescente', 'constante', 'oscilante'], 0, 'Diferença $+4$. <strong>Alternativa A.</strong>'],
        ['Problema', 'Uma planta mede $8$ cm e cresce $3$ cm por semana. Após $n$ semanas ela mede $8 + 3n$. Em quantas semanas passa de $50$ cm?', ['$13$', '$14$', '$15$', '$16$'], 2, '$8 + 3n > 50$ ⇒ $3n > 42$ ⇒ $n > 14$, ou seja, $n = 15$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O estoque que diminui', 'Um estoque tem $400$ itens e perde $25$ por dia: $E_{n} = 400 − 25n$. Em que dia o estoque se esgota?', ['$14$', '$15$', '$16$', '$17$', '$18$'], 2, '$400 − 25n = 0$ ⇒ $n = 16$. <strong>Alternativa C.</strong>'],
      cuidados: [['Confundir oscilante com decrescente', 'Oscilante alterna sinal/diferença; decrescente só desce.'], ['Gráfico contínuo', 'O gráfico de uma sequência é de pontos isolados.'], ['Teste com poucos termos', 'Use a diferença geral $a_{n+1} − a_{n}$.'], ['Desigualdade estrita × não estrita', 'Constante não é crescente.']],
      quiz: [
        { q: '$(7, 7, 7, 7, …)$ é:', o: ['crescente', 'decrescente', 'constante', 'oscilante'], a: 2 },
        { q: '$a_{n} = (−2)^{n}$ é:', o: ['crescente', 'oscilante', 'constante', 'decrescente'], a: 1 },
        { q: 'O gráfico de uma sequência é formado por:', o: ['uma reta contínua', 'pontos isolados', 'uma parábola', 'um círculo'], a: 1 },
        { q: '$a_{n} = 5 − n$ é:', o: ['crescente', 'decrescente', 'constante', 'oscilante'], a: 1 }
      ],
      sintese: [['Classificar', 'Pelo sinal de aₙ₊₁ − aₙ.'], ['Gráfico', 'Pontos isolados (n, aₙ).'], ['Problemas', 'Termo geral + desigualdade.']],
      msg: 'Na próxima aula você começa a Progressão Aritmética.'
    }
  ]
});
