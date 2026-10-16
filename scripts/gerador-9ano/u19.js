// Módulo 19 · 9º ano · Recomposição · 3º trimestre — Sequências e padrões (aulas 59 a 62 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const ws = Wd.sequencia('rq4');

// sequência figurada: quadrados em fila (n = 1, 2, 3)
const fila = svg(260, 90, [1, 2, 3].map((n, k) => { const x0 = 10 + [0, 50, 120][k]; return Array.from({ length: n }, (_, i) => `<rect x="${x0 + i * 26}" y="30" width="22" height="22" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/>`).join('') + `<text x="${x0}" y="75" font-size="12" fill="var(--ink)">fig. ${n}</text>`; }).join(''), '300px');
const palitos = svg(260, 100, [1, 2, 3].map((n, k) => { const x0 = 10 + [0, 60, 140][k]; let s = ''; for (let i = 0; i < n; i++) { const x = x0 + i * 24; s += `<polyline points="${x},56 ${x},34 ${x + 24},34 ${x + 24},56 ${x},56" fill="none" stroke="var(--growth)" stroke-width="2.4"/>`; } return s + `<text x="${x0}" y="84" font-size="12" fill="var(--ink)">fig. ${n}</text>`; }).join(''), '300px');

module.exports = unidade({
  tri: 3, dir: 'sequencias-e-padroes', titulo: 'Sequências e padrões', accent: 'decay', icon: 'dots', key: 'r3u6',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'padroes-em-sequencias-figuradas', titulo: 'Descobrindo padrões em sequências figuradas',
      h1: `Sequências ${co('decay')}figuradas:</span> o padrão nas figuras`,
      sub: 'Em uma sequência de figuras, cada nova figura segue uma regra. Descobrir o padrão permite prever a figura seguinte e até a de número 100, sem desenhá-la.',
      badges: [['figuras'], ['padrão', 'growth'], ['prever', 'decay']], color: 'decay',
      roteiro: ['Observar, contar e generalizar.', [['Observar', 'o que muda de figura a figura', 'bulb'], ['Contar', 'organizar numa tabela', 'chart'], ['Padrão', 'regra de formação', 'target'], ['Prever', 'a figura 10, a 50', 'scale'], ['Generalizar', 'expressão para n', 'book']]],
      objetivos: ['Identificar o <strong>padrão</strong> em uma sequência de figuras.', 'Organizar os dados em uma <strong>tabela</strong>.', 'Calcular termos <strong>distantes</strong> da sequência.'],
      dica: 'Monte uma <strong>tabela</strong>: número da figura × quantidade de elementos. A regra aparece nas diferenças.',
      gancho: { titulo: 'Os quadradinhos', texto: 'A figura 1 tem <strong>1 quadrado</strong>, a figura 2 tem <strong>2</strong>, a figura 3 tem <strong>3</strong>… Quantos quadrados terá a figura 10?', mini: ['A figura 10 terá:', ['$9$', '$10$', '$11$', '$20$'], 1, 'A figura $n$ tem $n$ quadrados. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · de figura a figura', 'O que se repete?', g2(`<div>
              ${checks(['Compare figuras consecutivas: <strong>quanto cresce</strong> a cada passo?', 'Fila de quadrados: $1, 2, 3, …$ ⇒ soma $1$ a cada figura.', 'Palitos em quadrados vizinhos: $4, 7, 10, …$ ⇒ soma $3$ a cada figura.', 'Anote os valores em uma <strong>tabela</strong>.'], '.95rem')}
            </div>`, `<div>${fila}${palitos}</div>`)],
        ['Teoria · prever', 'Sem desenhar', g2(`<div>
              ${checks(['Palitos: $4, 7, 10, 13, …$ (soma $3$).', 'Figura $n$: começa em $4$ e soma $3$ por $(n − 1)$ vezes: $4 + 3(n − 1)$.', 'Figura $10$: $4 + 3 · 9 = 31$ palitos.', 'Figura $20$: $4 + 3 · 19 = 61$.'], '.95rem')}
            </div>`, callout('Dica', 'Para a figura $n$, conte quantas vezes o acréscimo se repete: são $n − 1$ vezes.', 'decay'))]
      ],
      exemplos: [
        ['Palitos', 'Quadrados lado a lado, como no desenho: 1 quadrado usa $4$ palitos; 2 usam $7$; 3 usam $10$. Quantos palitos para $12$ quadrados?', [['Padrão', 'Soma $3$ a cada quadrado.'], ['Fórmula', '$4 + 3(n − 1)$.'], ['$n = 12$', '$4 + 3 · 11 = 37$.']], 'São necessários <strong>37 palitos</strong>.'],
        ['Tabela', 'A figura 1 tem $2$ bolinhas; a 2 tem $5$; a 3 tem $8$. Quantas tem a figura 6?', [['Acréscimo', '$3$ por figura.'], ['Continuar', '$11$ (4ª), $14$ (5ª), $17$ (6ª).']], 'A figura 6 tem <strong>17 bolinhas</strong>.']
      ],
      widget: { titulo: 'Termos de uma sequência', html: ws.html, js: ws.js },
      pratique: [
        ['Próxima figura', 'Figuras com $3, 6, 9, 12$ bolinhas. A 5ª terá:', ['$13$', '$14$', '$15$', '$18$'], 2, 'Soma $3$: $15$. <strong>Alternativa C.</strong>'],
        ['Figura 10', 'Figuras com $5, 8, 11, …$ (soma $3$). A figura 10 terá:', ['$30$', '$32$', '$35$', '$38$'], 1, '$5 + 3 · 9 = 32$. <strong>Alternativa B.</strong>'],
        ['Palitos', '$4, 7, 10, …$: com $5$ quadrados, quantos palitos?', ['$13$', '$16$', '$19$', '$22$'], 1, '$4 + 3 · 4 = 16$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O mosaico', 'Um mosaico é formado por fileiras: a primeira tem $3$ pastilhas, a segunda $5$, a terceira $7$, e assim por diante (soma $2$). Quantas pastilhas terá a fileira $10$?', ['$19$', '$21$', '$23$', '$25$', '$30$'], 1, '$3 + 2 · 9 = 21$. <strong>Alternativa B.</strong>'],
      cuidados: [['Padrão só pelo desenho', 'Teste a regra em <strong>mais de duas</strong> figuras.'], ['n em vez de n − 1', 'O acréscimo se repete $n − 1$ vezes até a figura $n$.'], ['Contar errado', 'Monte a tabela com cuidado e confira.'], ['Regra que não vale', 'Confira a regra nos termos já conhecidos.']],
      quiz: [
        { q: 'Figuras com $2, 4, 6, 8$: a próxima tem:', o: ['$9$', '$10$', '$12$', '$16$'], a: 1 },
        { q: 'Termos $1, 4, 7, 10$: a razão (acréscimo) é:', o: ['$1$', '$2$', '$3$', '$4$'], a: 2 },
        { q: 'Para prever a figura $50$ é útil:', o: ['desenhar até 50', 'achar a regra geral', 'adivinhar', 'contar os cantos'], a: 1 },
        { q: 'Palitos: $4 + 3(n − 1)$, para $n = 3$:', o: ['$10$', '$13$', '$7$', '$12$'], a: 0 }
      ],
      sintese: [['Observar', 'Compare figuras consecutivas.'], ['Tabela', 'Organize e ache o acréscimo.'], ['Prever', 'Use a regra para termos distantes.']],
      msg: 'Próxima aula: padrões em sequências numéricas.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'padroes-em-sequencias-numericas', titulo: 'Descobrindo padrões em sequências numéricas',
      h1: `Sequências ${co('decay')}numéricas:</span> qual é a regra?`,
      sub: 'Em uma sequência de números, buscamos a regra que gera cada termo: soma constante, multiplicação constante, quadrados, potências de dois ou outras.',
      badges: [['soma'], ['multiplicação', 'growth'], ['quadrados', 'decay']], color: 'decay',
      roteiro: ['Reconhecer regras em listas de números.', [['Diferenças', 'a cada passo', 'target'], ['Razão', 'multiplicar', 'scale'], ['Quadrados e cubos', 'padrões clássicos', 'chart'], ['Fibonacci', 'soma dos dois anteriores', 'bulb'], ['Continuar', 'achar os próximos termos', 'book']]],
      objetivos: ['Reconhecer sequências com <strong>soma constante</strong> e com <strong>multiplicação constante</strong>.', 'Identificar sequências de <strong>quadrados</strong> e de <strong>Fibonacci</strong>.', '<strong>Continuar</strong> uma sequência com a regra descoberta.'],
      dica: 'Teste dois caminhos: a <strong>diferença</strong> entre termos e o <strong>quociente</strong> entre termos.',
      gancho: { titulo: 'Qual o próximo?', texto: 'Observe: <strong>2, 4, 8, 16, …</strong>. Qual é o próximo número?', mini: ['O próximo termo é:', ['$18$', '$20$', '$24$', '$32$'], 3, 'Cada termo é o dobro do anterior: $16 · 2 = 32$. <strong>Alternativa D.</strong>'] },
      teoria: [
        ['Teoria · tipos de regra', 'Soma, produto e potências', g2(`<div>
              ${tbl(['Sequência', 'Regra'], [['$3, 7, 11, 15, …$', 'soma $4$'], ['$2, 6, 18, 54, …$', 'multiplica por $3$'], ['$1, 4, 9, 16, 25, …$', 'quadrados $n²$'], ['$1, 8, 27, 64, …$', 'cubos $n³$'], ['$1, 1, 2, 3, 5, 8, …$', 'soma dos dois anteriores']])}
            </div>`, card(`<strong>Como descobrir</strong>
              <p style="font-size:.92rem;margin-top:8px;">1) Calcule as diferenças: $b − a$, $c − b$…</p>
              <p style="font-size:.92rem;">2) Se não forem iguais, divida: ${'$'}{b|a}${'$'}, ${'$'}{c|b}${'$'}…</p>
              <p style="font-size:.92rem;">3) Compare com quadrados, cubos e potências.</p>`, 'primary'))],
        ['Teoria · segunda diferença', 'Quando a diferença também muda', g2(`<div>
              ${checks(['$1, 4, 9, 16, 25$: diferenças $3, 5, 7, 9$ (crescem de $2$ em $2$) ⇒ quadrados.', '$2, 5, 10, 17, 26$: diferenças $3, 5, 7, 9$ ⇒ $n² + 1$.', '$1, 3, 6, 10, 15$: diferenças $2, 3, 4, 5$ ⇒ números triangulares.', 'Se as diferenças formam uma sequência simples, o padrão é de grau $2$.'], '.95rem')}
            </div>`, callout('Dica', 'Sempre confira a regra em <strong>todos</strong> os termos conhecidos, não só nos dois primeiros.', 'decay'))]
      ],
      exemplos: [
        ['Soma constante', 'Complete: $5, 9, 13, 17, …$', [['Diferença', '$9 − 5 = 4$; $13 − 9 = 4$; $17 − 13 = 4$.'], ['Regra', 'Soma $4$.'], ['Próximos', '$21$, $25$.']], 'A sequência continua: <strong>21, 25, …</strong>'],
        ['Multiplicação', 'Complete: $3, 6, 12, 24, …$', [['Quocientes', '$6 ÷ 3 = 2$; $12 ÷ 6 = 2$; $24 ÷ 12 = 2$.'], ['Regra', 'Multiplica por $2$.'], ['Próximos', '$48$, $96$.']], 'Continua: <strong>48, 96, …</strong>']
      ],
      pratique: [
        ['Soma', 'Em $7, 12, 17, 22, …$ o próximo termo é:', ['$25$', '$26$', '$27$', '$29$'], 2, 'Soma $5$: $27$. <strong>Alternativa C.</strong>'],
        ['Produto', 'Em $5, 15, 45, …$ o próximo termo é:', ['$60$', '$90$', '$135$', '$225$'], 2, 'Multiplica por $3$: $135$. <strong>Alternativa C.</strong>'],
        ['Quadrados', 'Em $1, 4, 9, 16, …$ o 6º termo é:', ['$25$', '$30$', '$36$', '$49$'], 2, '$6² = 36$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O boato', 'Uma notícia falsa é compartilhada: no 1º dia, 1 pessoa; no 2º, 2; no 3º, 4; no 4º, 8, e assim por diante. Quantas pessoas no 7º dia?', ['$14$', '$32$', '$49$', '$64$', '$128$'], 3, 'Dobra todo dia: $1, 2, 4, 8, 16, 32, 64$. <strong>Alternativa D.</strong>'],
      cuidados: [['Regra pelos dois primeiros termos', 'Confira em <strong>todos</strong> os termos.'], ['Confundir soma e produto', 'Teste a diferença <strong>e</strong> o quociente.'], ['Contar o termo', 'O 7º termo é o sétimo da lista, não o valor $7$.'], ['Fibonacci', 'Cada termo é soma dos <strong>dois</strong> anteriores.']],
      quiz: [
        { q: 'A regra de $4, 8, 16, 32$ é:', o: ['soma $4$', 'multiplica por $2$', 'soma $8$', 'quadrados'], a: 1 },
        { q: 'O próximo de $1, 1, 2, 3, 5, 8$ é:', o: ['$10$', '$11$', '$13$', '$16$'], a: 2 },
        { q: 'O 5º termo de $n²$ é:', o: ['$10$', '$15$', '$25$', '$32$'], a: 2 },
        { q: '$10, 7, 4, 1, …$ tem regra:', o: ['soma $3$', 'subtrai $3$', 'multiplica por $3$', 'divide por $3$'], a: 1 }
      ],
      sintese: [['Diferenças', 'Soma ou subtração constante.'], ['Quocientes', 'Multiplicação constante.'], ['Clássicas', 'Quadrados, cubos, Fibonacci.']],
      msg: 'Próxima aula: representação algébrica de sequências.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'representacao-algebrica-de-sequencias', titulo: 'Representação algébrica de sequências',
      h1: `Sequências: ${co('decay')}a fórmula do termo geral</span>`,
      sub: 'O termo geral é uma expressão que dá qualquer termo da sequência a partir da sua posição n. Com ela calculamos o 100º termo sem listar os anteriores.',
      badges: [['termo geral'], ['posição n', 'growth'], ['fórmula', 'decay']], color: 'decay',
      roteiro: ['Da lista à fórmula.', [['Posição e valor', 'a₁, a₂, a₃…', 'bulb'], ['Soma constante', 'a_n = a₁ + (n − 1)r', 'target'], ['Achar a fórmula', 'a partir de tabela', 'scale'], ['Usar a fórmula', 'termo 50, 100', 'chart'], ['Qual posição?', 'resolver equação', 'book']]],
      objetivos: ['Escrever o <strong>termo geral</strong> de uma sequência de soma constante.', 'Calcular termos <strong>distantes</strong>.', 'Descobrir a <strong>posição</strong> de um termo dado.'],
      dica: 'Soma constante $r$: $a_n = a_1 + (n − 1) · r$. O $(n − 1)$ conta quantos passos foram dados.',
      gancho: { titulo: 'A fila de cadeiras', texto: 'Em um auditório, a 1ª fileira tem <strong>10 cadeiras</strong>, a 2ª tem <strong>13</strong>, a 3ª tem <strong>16</strong>… Quantas cadeiras tem a fileira 20?', mini: ['A 20ª fileira tem:', ['$60$', '$67$', '$70$', '$73$'], 1, 'São $19$ acréscimos de $3$: $10 + 3 · 19 = 10 + 57 = 67$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · termo geral', 'Fórmula da posição', g2(`<div>
              ${checks(['<strong>$a_n$</strong> é o termo na posição $n$; $a_1$ é o primeiro.', 'Soma constante (razão $r$): <strong>$a_n = a_1 + (n − 1) · r$</strong>.', 'Sequência $4, 7, 10, …$: $a_1 = 4$, $r = 3$ ⇒ $a_n = 4 + 3(n − 1) = 3n + 1$.', 'Com $a_n = 3n + 1$: $a_{10} = 31$ e $a_{50} = 151$.'], '.95rem')}
            </div>`, card(`<strong>Forma simplificada</strong>
              <p style="font-size:.92rem;margin-top:8px;">$a_n = a_1 + (n − 1) r = r · n + (a_1 − r)$.</p>
              <p class="hint" style="margin-top:6px;">É uma expressão do 1º grau em $n$.</p>`, 'primary'))],
        ['Teoria · qual posição?', 'Resolver uma equação', g2(`<div>
              ${checks(['Em $a_n = 3n + 1$, qual a posição do termo $67$? $3n + 1 = 67$ ⇒ $n = 22$.', 'O termo $100$ pertence à sequência? $3n + 1 = 100$ ⇒ $n = 33$ (inteiro): sim.', 'O termo $50$? $3n + 1 = 50$ ⇒ $n = {49|3}$ (não inteiro): não pertence.', 'A posição $n$ deve ser um número natural positivo.'], '.95rem')}
            </div>`, callout('Teste', 'Se $n$ não for inteiro, o número <strong>não</strong> pertence à sequência.', 'decay'))]
      ],
      exemplos: [
        ['Termo geral', 'Escreva o termo geral de $5, 9, 13, 17, …$ e calcule o $20°$ termo.', [['Razão', '$r = 4$; $a_1 = 5$.'], ['Termo geral', '$a_n = 5 + 4(n − 1) = 4n + 1$.'], ['$n = 20$', '$4 · 20 + 1 = 81$.']], '$a_n = 4n + 1$ e $a_{20} = $ <strong>81</strong>.'],
        ['Qual posição?', 'Em $a_n = 4n + 1$, o termo $97$ está em qual posição?', [['Equação', '$4n + 1 = 97$.'], ['Resolver', '$4n = 96$ ⇒ $n = 24$.']], 'É o termo da posição <strong>24</strong>.']
      ],
      pratique: [
        ['Termo geral', 'O termo geral de $2, 5, 8, 11, …$ é:', ['$a_n = 2n$', '$a_n = 3n − 1$', '$a_n = 3n + 2$', '$a_n = n + 3$'], 1, '$r = 3$ e $a_1 = 2$: $3n − 1$. <strong>Alternativa B.</strong>'],
        ['Termo distante', 'Em $a_n = 2n + 5$, o $a_{30}$ vale:', ['$35$', '$60$', '$65$', '$70$'], 2, '$2 · 30 + 5 = 65$. <strong>Alternativa C.</strong>'],
        ['Posição', 'Em $a_n = 5n − 2$, o termo $48$ está na posição:', ['$8$', '$9$', '$10$', '$11$'], 2, '$5n = 50$ ⇒ $n = 10$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O teatro', 'Em um teatro, a primeira fila tem $12$ lugares e cada fila seguinte tem $2$ lugares a mais. Quantos lugares tem a fila $25$?', ['$50$', '$58$', '$60$', '$62$', '$74$'], 2, '$12 + 2 · 24 = 60$. <strong>Alternativa C.</strong>'],
      cuidados: [['n em vez de n − 1', 'Para chegar ao termo $n$ são $n − 1$ passos.'], ['Posição não inteira', 'Se $n$ não é inteiro, o número não está na sequência.'], ['Troca de $a_1$ e $r$', '$a_1$ é o primeiro termo; $r$ é o acréscimo.'], ['Sem conferir', 'Teste a fórmula nos termos já conhecidos.']],
      quiz: [
        { q: '$a_n = 3n + 1$: $a_5$ vale:', o: ['$13$', '$16$', '$19$', '$21$'], a: 1 },
        { q: 'Em $a_n = a_1 + (n − 1) r$, $r$ é:', o: ['o primeiro termo', 'o acréscimo constante', 'a posição', 'o último termo'], a: 1 },
        { q: '$1, 3, 5, 7, …$ tem termo geral:', o: ['$2n$', '$2n − 1$', '$n + 2$', '$n²$'], a: 1 },
        { q: 'Em $a_n = 2n$, o termo $40$ está na posição:', o: ['$10$', '$20$', '$40$', '$80$'], a: 1 }
      ],
      sintese: [['Termo geral', 'a_n = a₁ + (n − 1) r.'], ['Usar', 'Calcule qualquer termo pela posição.'], ['Posição', 'Resolva a equação e confira se n é inteiro.']],
      msg: 'Próxima aula: expressões algébricas em sequências numéricas.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'expressoes-algebricas-em-sequencias', titulo: 'Expressões algébricas em sequências numéricas',
      h1: `Sequências: ${co('decay')}expressões e problemas</span>`,
      sub: 'Fechando o trimestre: usamos expressões algébricas para descrever sequências de quadrados, múltiplos e padrões mais elaborados, e aplicamos a problemas.',
      badges: [['n²'], ['múltiplos', 'growth'], ['problemas', 'decay']], color: 'decay',
      roteiro: ['De fórmulas simples a problemas.', [['Múltiplos', '3n, 5n', 'target'], ['Pares e ímpares', '2n e 2n − 1', 'bulb'], ['Quadrados', 'n²', 'chart'], ['Combinar', 'n² + 1', 'scale'], ['Problemas', 'aplicar a termo geral', 'book']]],
      objetivos: ['Associar sequências a <strong>expressões algébricas</strong> (múltiplos, pares, ímpares, quadrados).', '<strong>Combinar</strong> expressões para descrever padrões.', 'Resolver <strong>problemas</strong> com termo geral.'],
      dica: 'Compare cada termo com $n$: ele é $n$ mais algo? $n$ vezes algo? $n²$? Teste na tabela.',
      gancho: { titulo: 'Números pares', texto: 'Os números pares positivos são $2, 4, 6, 8, …$ Qual expressão dá o $n$-ésimo par?', mini: ['O $n$-ésimo par é:', ['$n + 2$', '$2n$', '$n²$', '$2n + 1$'], 1, '$2 · 1 = 2$, $2 · 2 = 4$… <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · expressões úteis', 'Catálogo de padrões', g2(`<div>
              ${tbl(['Sequência', 'Termo geral'], [['$2, 4, 6, 8, …$', '$2n$'], ['$1, 3, 5, 7, …$', '$2n − 1$'], ['$3, 6, 9, 12, …$', '$3n$'], ['$1, 4, 9, 16, …$', '$n²$'], ['$2, 5, 10, 17, …$', '$n² + 1$'], ['$5, 8, 11, 14, …$', '$3n + 2$']])}
            </div>`, card(`<strong>Como achar</strong>
              <p style="font-size:.92rem;margin-top:8px;">Monte a tabela $n$ × termo e compare com $n$, $2n$, $n²$…</p>
              <p style="font-size:.92rem;">Se a diferença é $r$ constante, comece com $rn$ e ajuste somando ou subtraindo.</p>`, 'primary'))],
        ['Teoria · aplicações', 'Usar o termo geral', g2(`<div>
              ${checks(['Dias de poupança: R$ 5 no 1º dia, R$ 10 no 2º, R$ 15 no 3º: $5n$. No dia $20$: R$ 100.', 'Total após $n$ dias ($5, 10, 15, …$): some os termos: $5 + 10 + … + 5n$.', 'Quadrados de azulejos em canteiros: $n²$ unidades na figura $n$.', 'Para saber se um número está na sequência, resolva $a_n = $ número e veja se $n$ é inteiro.'], '.95rem')}
            </div>`, callout('Soma dos primeiros termos', 'Para somar $1 + 2 + 3 + … + n$: ${n(n + 1)|2}$. Ex.: $1 + … + 10 = 55$.', 'decay'))]
      ],
      exemplos: [
        ['Achando a expressão', 'Encontre o termo geral de $4, 7, 10, 13, …$ e o $15°$ termo.', [['Razão', '$3$.'], ['Ajuste', '$3n + 1$ (para $n = 1$ dá $4$ ✓).'], ['$n = 15$', '$3 · 15 + 1 = 46$.']], '$a_n = 3n + 1$ e $a_{15} = $ <strong>46</strong>.'],
        ['Soma de 1 a 10', 'Qual é a soma $1 + 2 + 3 + … + 10$?', [['Fórmula', '${n(n + 1)|2}$ com $n = 10$.'], ['Calcular', '${10 · 11|2} = 55$.']], 'A soma é <strong>55</strong>.']
      ],
      pratique: [
        ['Termo geral', 'O termo geral de $3, 6, 9, 12, …$ é:', ['$n + 3$', '$3n$', '$n²$', '$3n + 3$'], 1, 'Múltiplos de $3$. <strong>Alternativa B.</strong>'],
        ['Ímpares', 'O 10º número ímpar positivo é:', ['$17$', '$19$', '$20$', '$21$'], 1, '$2 · 10 − 1 = 19$. <strong>Alternativa B.</strong>'],
        ['Quadrados', 'Em $n² + 1$, o termo de posição $6$ vale:', ['$13$', '$37$', '$49$', '$36$'], 1, '$36 + 1 = 37$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O cofrinho', 'Ana guarda R$ 2 no 1º dia, R$ 4 no 2º, R$ 6 no 3º e assim por diante. Quanto ela guarda no 15º dia?', ['R$ 15', 'R$ 28', 'R$ 30', 'R$ 32', 'R$ 45'], 2, '$2n = 2 · 15 = 30$. <strong>Alternativa C.</strong>'],
      cuidados: [['Ajuste esquecido', '$3n$ dá $3, 6, 9$; para $4, 7, 10$ é $3n + 1$.'], ['Posição × valor', '$n$ é a posição, $a_n$ é o valor.'], ['Quadrado de soma', '$(n + 1)²$ não é $n² + 1$.'], ['Soma de termos', 'Somar termos é outra conta: use a fórmula da soma, não o termo geral.']],
      quiz: [
        { q: 'O termo geral dos números pares é:', o: ['$n + 2$', '$2n$', '$2n − 1$', '$n²$'], a: 1 },
        { q: 'O 7º termo de $n²$ é:', o: ['$14$', '$21$', '$49$', '$77$'], a: 2 },
        { q: '$1 + 2 + 3 + 4 + 5$ vale:', o: ['$10$', '$15$', '$20$', '$25$'], a: 1 },
        { q: 'Em $a_n = 3n + 1$, o termo $22$ é de posição:', o: ['$6$', '$7$', '$8$', '$9$'], a: 1 }
      ],
      sintese: [['Expressões', '2n, 2n−1, 3n, n², n²+1…'], ['Tabela', 'Compare n com o termo.'], ['Soma', '1+…+n = n(n+1)÷2.']],
      msg: 'Com esta aula fechamos a Recomposição Matemática do 9º ano. Bons estudos!'
    }
  ]
});
