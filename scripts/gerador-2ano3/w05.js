// Módulo 5 · Matemática · 2ª série · 3º trimestre — Propriedades operatórias dos logaritmos (aulas 80, 81 e 82 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/propriedades-dos-logaritmos/',
  titulo: 'Propriedades operatórias dos logaritmos', accent: 'decay', icon: 'curve-log', key: 'm2w05', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 80 a 82 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Valores aproximados usados: log 2 ≈ 0,30; log 3 ≈ 0,48; log 5 ≈ 0,70.'],
  aulas: [
    // ------------------------------------------------------------ aula 80
    {
      slug: 'logaritmo-de-um-produto', titulo: 'Logaritmo de um produto',
      h1: `Logaritmo de um ${co('decay')}produto:</span> multiplicar vira somar`,
      sub: 'O logaritmo transforma produtos em somas. Por isso foi tão importante antes das calculadoras e por isso ainda simplifica contas e equações.',
      badges: [['log(b·c)'], ['= log b + log c', 'growth'], ['mesma base', 'decay']], color: 'decay',
      roteiro: ['Da potência ao produto.', [['A ideia', 'aᵐ · aⁿ = aᵐ⁺ⁿ', 'bulb'], ['Propriedade', 'logₐ(b·c) = logₐ b + logₐ c', 'target'], ['Usar', 'decompor números', 'scale'], ['Calcular', 'com log 2 e log 3', 'chart'], ['Cuidados', 'soma ≠ produto de logs', 'book']]],
      objetivos: ['Enunciar e justificar $log_{a}(b · c) = log_{a} b + log_{a} c$.', '<strong>Decompor</strong> números e calcular logaritmos aproximados.', 'Resolver <strong>problemas</strong> usando a propriedade.'],
      dica: 'Multiplicar potências <strong>soma expoentes</strong>; como logaritmo é expoente, o log de um produto é a <strong>soma</strong> dos logs.',
      gancho: { titulo: 'Tábuas de logaritmos', texto: 'Antes das calculadoras, para multiplicar números grandes os cientistas consultavam tábuas de logaritmos: <strong>somavam</strong> os logs e voltavam ao número. Somar é bem mais simples que multiplicar.', mini: ['Se $log 2 = 0,30$ e $log 3 = 0,48$, então $log 6$ vale:', ['$0,18$', '$0,78$', '$1,44$', '$0,60$'], 1, '$log 6 = log 2 + log 3 = 0,78$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · propriedade', 'Produto vira soma', g2(`<div>
              ${checks(['<strong>$log_{a}(b · c) = log_{a} b + log_{a} c$</strong>, com $a$, $b$, $c$ válidos.', '<strong>Prova:</strong> $log_{a} b = x$ e $log_{a} c = y$ ⇒ $a^{x} = b$, $a^{y} = c$ ⇒ $b · c = a^{x+y}$ ⇒ $log_{a}(bc) = x + y$.', 'Exemplo: $log_{2}(4 · 8) = log_{2} 4 + log_{2} 8 = 2 + 3 = 5$ (e $2^{5} = 32$ ✓).', 'Vale para mais fatores: $log(abc) = log a + log b + log c$.'], '.95rem')}
            </div>`, card(`<strong>Decompondo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log 12 = log(2 · 2 · 3) = 2 · log 2 + log 3 = 0,60 + 0,48 = 1,08$.</p>
              <p style="font-size:.92rem;">$log 30 = log 3 + log 10 = 0,48 + 1 = 1,48$.</p>`, 'primary'))],
        ['Teoria · alerta', 'O que NÃO vale', g2(`<div>
              ${checks(['$log(b + c) ≠ log b + log c$: não há propriedade para a <strong>soma</strong> dentro do log.', '$log_{a}(b · c) ≠ log_{a} b · log_{a} c$ (é soma, não produto).', 'As bases dos logs precisam ser <strong>iguais</strong>.', 'Condição: $b > 0$ e $c > 0$ (cada um deve existir).'], '.95rem')}
            </div>`, callout('Teste rápido', '$log 100 = 2$. Se $log (50 + 50)$ fosse $log 50 + log 50 ≈ 3,4$, não bateria: <strong>não vale para soma</strong>.', 'decay'))]
      ],
      exemplos: [
        ['Calculando', 'Dados $log 2 = 0,30$ e $log 3 = 0,48$, calcule $log 18$.', [['Decomponha', '$18 = 2 · 3 · 3$.'], ['Propriedade', '$log 2 + 2 · log 3$.'], ['Substitua', '$0,30 + 0,96 = 1,26$.']], '$log 18 = 1,26$.'],
        ['Equação', 'Resolva $log_{2} x + log_{2} (x − 2) = 3$.', [['Condição', '$x > 2$.'], ['Produto', '$log_{2}[x(x − 2)] = 3$ ⇒ $x² − 2x = 8$.'], ['Raízes', '$x = 4$ ou $x = −2$; só $x = 4$ serve.']], '$S = \\{4\\}$.']
      ],
      pratique: [
        ['Produto', '$log_{3} 3 + log_{3} 9$ vale:', ['$1$', '$2$', '$3$', '$27$'], 2, '$1 + 2 = 3$ (ou $log_{3} 27 = 3$). <strong>Alternativa C.</strong>'],
        ['Decompondo', 'Com $log 2 = 0,30$, $log 20$ vale:', ['$0,60$', '$1,30$', '$2,30$', '$3$'], 1, '$log 2 + log 10 = 1,30$. <strong>Alternativa B.</strong>'],
        ['Equação', 'Se $log_{2} x + log_{2} 4 = 5$, então $x$ vale:', ['$2$', '$4$', '$8$', '$16$'], 2, '$log_{2}(4x) = 5$ ⇒ $4x = 32$ ⇒ $x = 8$. <strong>Alternativa C.</strong>']
      ],
      enem: ['Cálculo com logaritmo', 'Sabendo que $log 5 = 0,70$ e $log 2 = 0,30$, o valor de $log 50$ é:', ['$1,00$', '$1,40$', '$1,70$', '$2,10$', '$3,50$'], 2, '$log 5 + log 10 = 0,70 + 1 = 1,70$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar dentro do log', '$log(b + c)$ não se separa.'], ['Produto de logs', 'O log do produto é a <strong>soma</strong> dos logs.'], ['Bases diferentes', 'Só vale com a mesma base.'], ['Raízes inválidas', 'Verifique a condição de existência no final.']],
      quiz: [
        { q: '$log 4 + log 25$ vale:', o: ['$1$', '$2$', '$29$', '$100$'], a: 1 },
        { q: '$log_{2} (b · c)$ é igual a:', o: ['$log_{2} b · log_{2} c$', '$log_{2} b + log_{2} c$', '$log_{2} b − log_{2} c$', '$2 · log_{2} bc$'], a: 1 },
        { q: '$log_{5} 25 + log_{5} 5$ vale:', o: ['$2$', '$3$', '$5$', '$30$'], a: 1 },
        { q: 'A propriedade do produto vale quando as bases são:', o: ['diferentes', 'iguais', 'negativas', 'ímpares'], a: 1 }
      ],
      sintese: [['Produto', 'log(bc) = log b + log c.'], ['Prova', 'aˣ · aʸ = aˣ⁺ʸ.'], ['Cuidado', 'Soma dentro do log não se separa.']],
      msg: 'Na próxima aula: logaritmo de um quociente.'
    },
    // ------------------------------------------------------------ aula 81
    {
      slug: 'logaritmo-de-um-quociente', titulo: 'Logaritmo de um quociente',
      h1: `Logaritmo de um ${co('decay')}quociente:</span> dividir vira subtrair`,
      sub: 'Assim como o produto vira soma, o quociente vira diferença: o logaritmo de b dividido por c é o log de b menos o log de c.',
      badges: [['log(b÷c)'], ['= log b − log c', 'growth'], ['cologaritmo', 'decay']], color: 'decay',
      roteiro: ['Da potência ao quociente.', [['A ideia', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', 'bulb'], ['Propriedade', 'log(b/c) = log b − log c', 'target'], ['Inverso', 'log(1/c) = −log c', 'scale'], ['Calcular', 'com log 2 e log 3', 'chart'], ['Equações', 'combinar com o produto', 'book']]],
      objetivos: ['Enunciar $log_{a} {b|c} = log_{a} b − log_{a} c$.', 'Calcular o <strong>logaritmo do inverso</strong>: $log_{a} {1|c} = −log_{a} c$.', 'Resolver problemas combinando <strong>produto e quociente</strong>.'],
      dica: 'Dividir potências <strong>subtrai expoentes</strong>; por isso o log do quociente é a <strong>diferença</strong> dos logs.',
      gancho: { titulo: 'Metade de um número', texto: 'Se $log 6 = 0,78$ e queremos $log 3$, basta dividir $6$ por $2$: $log 3 = log 6 − log 2 = 0,78 − 0,30 = 0,48$.', mini: ['Com $log 2 = 0,30$, $log 5$ ($= log 10 − log 2$) vale:', ['$0,30$', '$0,70$', '$1,30$', '$0,50$'], 1, '$1 − 0,30 = 0,70$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · propriedade', 'Quociente vira diferença', g2(`<div>
              ${checks(['<strong>$log_{a} {b|c} = log_{a} b − log_{a} c$</strong>.', '<strong>Prova:</strong> $b = a^{x}$ e $c = a^{y}$ ⇒ ${b|c} = a^{x−y}$ ⇒ log $= x − y$.', 'Exemplo: $log_{2} {32|4} = 5 − 2 = 3$ (e $2^{3} = 8$ ✓).', '<strong>Inverso:</strong> $log_{a} {1|c} = log_{a} 1 − log_{a} c = −log_{a} c$.'], '.95rem')}
            </div>`, card(`<strong>Exemplos úteis</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log 5 = log {10|2} = 1 − 0,30 = 0,70$.</p>
              <p style="font-size:.92rem;">$log 0,2 = log {1|5} = −0,70$.</p>`, 'primary'))],
        ['Teoria · combinando', 'Produto e quociente juntos', g2(`<div>
              ${checks(['$log {a · b|c} = log a + log b − log c$.', '$log {6|5} = log 6 − log 5 = 0,78 − 0,70 = 0,08$.', 'Equação: $log_{3}(x + 6) − log_{3}(x − 2) = 1$ ⇒ $log_{3} {x + 6|x − 2} = 1$ ⇒ ${x + 6|x − 2} = 3$ ⇒ $x = 6$.', 'Confira a existência: $x > 2$ ✓.'], '.95rem')}
            </div>`, callout('Alerta', '$log {b|c} ≠ {log b|log c}$ e $log(b − c) ≠ log b − log c$.', 'decay'))]
      ],
      exemplos: [
        ['Calculando', 'Dados $log 2 = 0,30$ e $log 3 = 0,48$, calcule $log {3|2}$.', [['Propriedade', '$log 3 − log 2$.'], ['Subtraia', '$0,48 − 0,30 = 0,18$.']], '$log 1,5 = 0,18$.'],
        ['Equação', 'Resolva $log_{2}(x + 6) − log_{2}(x − 2) = 1$.', [['Condição', '$x > 2$.'], ['Quociente', '${x + 6|x − 2} = 2^{1} = 2$.'], ['Resolva', '$x + 6 = 2x − 4$ ⇒ $x = 10$.']], '$S = \\{10\\}$ (e $10 > 2$ ✓).']
      ],
      pratique: [
        ['Quociente', '$log_{2} 40 − log_{2} 5$ vale:', ['$2$', '$3$', '$8$', '$35$'], 1, '$log_{2} {40|5} = log_{2} 8 = 3$. <strong>Alternativa B.</strong>'],
        ['Inverso', '$log 0,01$ calculado por $log {1|100}$ vale:', ['$−2$', '$2$', '$−100$', '$0,01$'], 0, '$−log 100 = −2$. <strong>Alternativa A.</strong>'],
        ['Equação', 'Se $log_{3} x − log_{3} 2 = 2$, então $x$ vale:', ['$9$', '$12$', '$18$', '$36$'], 2, '${x|2} = 9$ ⇒ $x = 18$. <strong>Alternativa C.</strong>']
      ],
      enem: ['Diferença de intensidade', 'Sabendo que $log 3 = 0,48$ e $log 2 = 0,30$, o valor de $log 1,5$ é:', ['$0,18$', '$0,78$', '$1,44$', '$0,72$', '$0,12$'], 0, '$log 3 − log 2 = 0,18$. <strong>Alternativa A.</strong>'],
      cuidados: [['Quociente de logs', '$log {b|c}$ é diferença, não quociente de logs.'], ['Subtração dentro do log', '$log(b − c)$ não se separa.'], ['Ordem da subtração', 'É $log b − log c$, na ordem do numerador e denominador.'], ['Condição de existência', 'Todos os logaritmandos devem ser positivos.']],
      quiz: [
        { q: '$log {1|1000}$ vale:', o: ['$−3$', '$3$', '$1$', '$−1$'], a: 0 },
        { q: '$log_{a} {b|c}$ é igual a:', o: ['$log_{a} b ÷ log_{a} c$', '$log_{a} b − log_{a} c$', '$log_{a} b + log_{a} c$', '$log_{a}(b − c)$'], a: 1 },
        { q: '$log_{2} 48 − log_{2} 3$ vale:', o: ['$1$', '$4$', '$45$', '$16$'], a: 1 },
        { q: '$log_{5} {1|5}$ vale:', o: ['$1$', '$−1$', '$5$', '$0$'], a: 1 }
      ],
      sintese: [['Quociente', 'log(b/c) = log b − log c.'], ['Inverso', 'log(1/c) = −log c.'], ['Combinar', 'Produto soma, quociente subtrai.']],
      msg: 'Na próxima aula: logaritmo de uma potência.'
    },
    // ------------------------------------------------------------ aula 82
    {
      slug: 'logaritmo-de-uma-potencia', titulo: 'Logaritmo de uma potência',
      h1: `Logaritmo de uma ${co('decay')}potência:</span> o expoente desce`,
      sub: 'O expoente do logaritmando “desce” multiplicando o logaritmo. Essa propriedade permite resolver equações exponenciais com bases diferentes e calcular tempos de crescimento.',
      badges: [['log bⁿ'], ['= n · log b', 'growth'], ['raízes', 'decay']], color: 'decay',
      roteiro: ['O expoente que desce.', [['Propriedade', 'logₐ bⁿ = n·logₐ b', 'target'], ['Raiz', 'ⁿ√b = b^(1/n)', 'scale'], ['Calcular', 'log 8, log 25', 'chart'], ['Equações exponenciais', 'aplicar log nos dois lados', 'book'], ['Tempo de crescimento', 'juros e populações', 'bulb']]],
      objetivos: ['Enunciar $log_{a} b^{n} = n · log_{a} b$.', 'Aplicar a <strong>raízes</strong> via $b^{{1|n}}$.', 'Resolver <strong>equações exponenciais</strong> e problemas de tempo aplicando logaritmos.'],
      dica: 'Para tirar a incógnita do expoente, <strong>aplique logaritmo nos dois lados</strong> e use $log b^{x} = x · log b$.',
      gancho: { titulo: 'Quanto tempo até dobrar?', texto: 'Um capital cresce $10%$ ao ano. Em quantos anos ele dobra? Queremos $1,1^{t} = 2$. Sem logaritmos, só por tentativas; com logaritmos: $t · log 1,1 = log 2$.', mini: ['$log 2^{5}$ é igual a:', ['$5 + log 2$', '$5 · log 2$', '$log 10$', '$log 5 · 2$'], 1, 'O expoente multiplica: $5 · log 2$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · propriedade', 'Potência vira multiplicação', g2(`<div>
              ${checks(['<strong>$log_{a} b^{n} = n · log_{a} b$</strong> (com $b > 0$).', '<strong>Prova:</strong> $b^{n} = b · b · … · b$ ⇒ $log(b^{n}) = log b + … + log b$ ($n$ vezes) $= n · log b$.', 'Exemplo: $log 8 = log 2^{3} = 3 · 0,30 = 0,90$.', '<strong>Raiz:</strong> $log √{b} = log b^{{1|2}} = {1|2} log b$.'], '.95rem')}
            </div>`, card(`<strong>Exemplos</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log 25 = 2 · log 5 = 1,40$.</p>
              <p style="font-size:.92rem;">$log 0,01 = log 10^{−2} = −2$.</p>`, 'primary'))],
        ['Teoria · aplicação', 'Resolvendo 2ˣ = 20', g2(`<div>
              ${checks(['$2^{x} = 20$: não dá para igualar bases.', 'Aplique $log$: $x · log 2 = log 20 = 1,30$.', '$x = {1,30|0,30} ≈ 4,33$.', 'Confira: $2^{4} = 16 < 20 < 32 = 2^{5}$ ⇒ $x$ entre $4$ e $5$ ✓.'], '.95rem')}
            </div>`, callout('Tempo de duplicação', 'Para $a^{t} = 2$: $t = {log 2|log a}$. Com $a = 1,1$: $t ≈ {0,30|0,041} ≈ 7,3$ anos.', 'decay'))]
      ],
      exemplos: [
        ['Calculando', 'Dado $log 3 = 0,48$, calcule $log 81$.', [['Potência', '$81 = 3^{4}$.'], ['Propriedade', '$4 · 0,48 = 1,92$.']], '$log 81 = 1,92$.'],
        ['Equação exponencial', 'Resolva $3^{x} = 50$ com $log 2 = 0,30$, $log 3 = 0,48$ e $log 5 = 0,70$.', [['Aplique log', '$x · log 3 = log 50$.'], ['$log 50$', '$log 5 + log 10 = 1,70$.'], ['Divida', '$x = {1,70|0,48} ≈ 3,54$.']], '$x ≈ 3,54$ (entre $3$ e $4$ ✓).']
      ],
      pratique: [
        ['Potência', '$log_{2} 2^{7}$ vale (pela propriedade):', ['$2$', '$7$', '$14$', '$128$'], 1, '$7 · log_{2} 2 = 7$. <strong>Alternativa B.</strong>'],
        ['Cálculo', 'Com $log 2 = 0,30$, $log 16$ vale:', ['$0,60$', '$1,20$', '$2,40$', '$4,80$'], 1, '$4 · 0,30 = 1,20$. <strong>Alternativa B.</strong>'],
        ['Equação', 'Com $log 2 = 0,30$, a solução de $2^{x} = 10$ é aproximadamente:', ['$2,3$', '$3,3$', '$4,3$', '$10,3$'], 1, '$x = {1|0,30} ≈ 3,33$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Tempo para triplicar', 'Uma população cresce $20%$ ao ano ($a = 1,2$). Sendo $log 3 = 0,48$ e $log 1,2 = 0,08$, o tempo para triplicar é:', ['$3$ anos', '$4$ anos', '$6$ anos', '$12$ anos', '$48$ anos'], 2, '$1,2^{t} = 3$ ⇒ $t = {0,48|0,08} = 6$. <strong>Alternativa C.</strong>'],
      cuidados: [['O expoente não é da expressão toda', '$log b^{n}$ é diferente de $(log b)^{n}$.'], ['Perder o sinal', '$log 10^{−2} = −2$.'], ['Aproximação', 'Os resultados com tabelas são aproximados.'], ['Aplicar log em soma', '$log(a + b)$ não se separa; use $log$ apenas em produtos e potências.']],
      quiz: [
        { q: '$log 1000 = log 10^{3} =$', o: ['$3 + 1$', '$3$', '$10$', '$30$'], a: 1 },
        { q: '$log_{5} 5^{4}$ vale:', o: ['$1$', '$4$', '$20$', '$625$'], a: 1 },
        { q: '$log √{10}$ vale:', o: ['$1$', '$0,5$', '$2$', '$10$'], a: 1 },
        { q: 'Para resolver $a^{x} = b$ usamos:', o: ['derivada', 'logaritmo nos dois lados', 'raiz cúbica', 'subtração'], a: 1 }
      ],
      sintese: [['Potência', 'log bⁿ = n · log b.'], ['Equações', 'Aplique log nos dois lados.'], ['Aplicação', 'Tempo de duplicação, triplicação, juros.']],
      msg: 'Na próxima aula: problemas com logaritmos e mudança de base.'
    }
  ]
});
