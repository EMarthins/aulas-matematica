// Módulo 4 · Matemática · 3ª série · 3º trimestre — Progressão geométrica: termo geral (aulas 79, 80 e 81 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('../gerador-9ano/wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w79 = Wd.sequencia('pg79');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/pg-termo-geral/',
  titulo: 'Progressão geométrica: termo geral', accent: 'growth', icon: 'curve-up', key: 'm3x04', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 79 a 81 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 79
    {
      slug: 'progressao-geometrica-termo-geral-i', titulo: 'Progressão geométrica: termo geral I',
      h1: `Progressão ${co('growth')}geométrica:</span> multiplicar sempre pelo mesmo`,
      sub: 'Em uma progressão geométrica (PG), cada termo é o anterior multiplicado por uma constante q, a razão. Ela descreve crescimentos e decaimentos percentuais: juros, populações, resfriamento.',
      badges: [['PG'], ['razão q', 'growth'], ['aₙ = a₁·qⁿ⁻¹', 'decay']], color: 'growth',
      roteiro: ['Da definição ao termo geral.', [['PG', 'quociente constante', 'target'], ['Razão q', 'aₙ₊₁ ÷ aₙ', 'scale'], ['Classificação', 'crescente, decrescente, oscilante', 'chart'], ['Termo geral', 'aₙ = a₁·qⁿ⁻¹', 'book'], ['Aplicar', 'termos distantes', 'bulb']]],
      objetivos: ['Definir <strong>PG</strong> e calcular a <strong>razão</strong>.', 'Classificar uma PG conforme $a_{1}$ e $q$.', 'Deduzir e aplicar $a_{n} = a_{1} · q^{n−1}$.'],
      dica: 'PA <strong>soma</strong> a razão; PG <strong>multiplica</strong> pela razão. Teste: divida termos consecutivos; se o quociente é constante, é PG.',
      gancho: { titulo: 'A lenda do tabuleiro', texto: 'Conta a lenda que o inventor do xadrez pediu $1$ grão de trigo na 1ª casa, $2$ na 2ª, $4$ na 3ª, dobrando a cada casa. Os grãos formam uma PG de razão $2$. Quantos na 11ª casa? $a_{11} = 1 · 2^{10} = 1024$.', mini: ['Em $(3, 6, 12, 24, …)$ a razão é:', ['$2$', '$3$', '$6$', '$9$'], 0, '$6 ÷ 3 = 2$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'PG, razão e classificação', g2(`<div>
              ${checks(['<strong>PG:</strong> $a_{n+1} = a_{n} · q$; $q$ é a <strong>razão</strong>: $q = {a_{2}|a_{1}} = {a_{3}|a_{2}} = …$', '<strong>Crescente:</strong> $a_{1} > 0$ e $q > 1$ (ou $a_{1} < 0$ e $0 < q < 1$).', '<strong>Decrescente:</strong> $a_{1} > 0$ e $0 < q < 1$ (ou $a_{1} < 0$ e $q > 1$).', '<strong>Oscilante:</strong> $q < 0$ (sinais alternam). <strong>Constante:</strong> $q = 1$.'], '.95rem')}
            </div>`, card(`<strong>Termo geral</strong>
              <p style="font-size:1rem;margin-top:8px;">$a_{n} = a_{1} · q^{n−1}$</p>
              <p class="hint" style="margin-top:6px;">Ex.: $(3, 6, 12, …)$: $a_{8} = 3 · 2^{7} = 384$.</p>`, 'primary'))],
        ['Teoria · dedução e simulação', 'De onde vem', g2(`<div>
              ${checks(['$a_{2} = a_{1} q$; $a_{3} = a_{1} q²$; $a_{4} = a_{1} q³$…', 'O padrão: $a_{n} = a_{1} · q^{n−1}$.', 'Entre quaisquer termos: $a_{n} = a_{k} · q^{n−k}$.', 'No simulador, escolha “Multiplica pelo mesmo número (q)” e varie $a_{1}$ e $q$.'], '.95rem')}
            </div>`, callout('Percentual', 'Aumento de $5%$ ao período: $q = 1,05$. Redução de $20%$: $q = 0,8$.', 'growth'))]
      ],
      exemplos: [
        ['Termo geral', 'Calcule o 7º termo da PG $(5, 10, 20, …)$.', [['Razão', '$q = 2$.'], ['Fórmula', '$a_{7} = 5 · 2^{6}$.'], ['Calcule', '$5 · 64 = 320$.']], '$a_{7} = 320$.'],
        ['PG decrescente', 'Calcule $a_{6}$ da PG $(243, 81, 27, …)$.', [['Razão', '$q = {1|3}$.'], ['Fórmula', '$a_{6} = 243 · ({1|3})^{5} = 243 ÷ 243$.']], '$a_{6} = 1$.']
      ],
      widget: { titulo: 'PG: termos e razão', html: w79.html, js: w79.js },
      pratique: [
        ['Razão', 'A razão da PG $(2, −6, 18, −54, …)$ é:', ['$−3$', '$3$', '$−4$', '$−6$'], 0, '$−6 ÷ 2 = −3$. <strong>Alternativa A.</strong>'],
        ['Termo', 'O 6º termo da PG $(1, 4, 16, …)$ é:', ['$256$', '$1 024$', '$4 096$', '$64$'], 1, '$1 · 4^{5} = 1024$. <strong>Alternativa B.</strong>'],
        ['Classificação', 'A PG $(8, 4, 2, 1, …)$ é:', ['crescente', 'decrescente', 'oscilante', 'constante'], 1, '$a_{1} > 0$ e $q = {1|2}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A população de bactérias', 'Uma cultura tem $200$ bactérias e dobra a cada hora. Quantas há após $5$ horas?', ['$1 000$', '$2 000$', '$3 200$', '$6 400$', '$12 800$'], 3, '$200 · 2^{5} = 6400$. <strong>Alternativa D.</strong>'],
      cuidados: [['Expoente $n$ em vez de $n − 1$', 'Do $a_{1}$ ao $a_{n}$ há $n − 1$ multiplicações.'], ['Razão como diferença', 'Na PG o que é constante é o <strong>quociente</strong>.'], ['Percentual como razão', '$20%$ de aumento é $q = 1,2$, não $0,2$.'], ['Sinal da razão', 'Razão negativa faz os termos alternarem de sinal.']],
      quiz: [
        { q: 'O termo geral da PG é:', o: ['$a_{1} + (n − 1) r$', '$a_{1} · q^{n−1}$', '$a_{1} · n · q$', '$q^{n}$'], a: 1 },
        { q: 'A PG $(7, 14, 28, …)$ tem razão:', o: ['$2$', '$7$', '$14$', '$21$'], a: 0 },
        { q: 'Uma PG com $q < 0$ é:', o: ['crescente', 'decrescente', 'oscilante', 'constante'], a: 2 },
        { q: 'Aumento de $10%$ por período corresponde a $q =$:', o: ['$0,1$', '$1,1$', '$10$', '$0,9$'], a: 1 }
      ],
      sintese: [['PG', 'Quociente constante q.'], ['Termo geral', 'aₙ = a₁·qⁿ⁻¹.'], ['Percentual', 'q = 1 ± taxa.']],
      msg: 'Na próxima aula: achar q, a₁ e n; interpolação geométrica.'
    },
    // ------------------------------------------------------------ aula 80
    {
      slug: 'progressao-geometrica-termo-geral-ii', titulo: 'Progressão geométrica: termo geral II',
      h1: `Progressão geométrica: ${co('growth')}achar q, a₁ e n</span>`,
      sub: 'Dados dois termos, descobrimos a razão e o restante da PG. Também inserimos meios geométricos entre dois números e resolvemos problemas de crescimento percentual.',
      badges: [['achar q'], ['achar n', 'growth'], ['meios geométricos', 'decay']], color: 'growth',
      roteiro: ['Quatro incógnitas, uma fórmula.', [['Montar', 'aₙ = a₁·qⁿ⁻¹', 'target'], ['Achar q', 'raiz do quociente', 'scale'], ['Achar n', 'potência da razão', 'chart'], ['Interpolar', 'meios geométricos', 'book'], ['Aplicar', 'taxas e populações', 'bulb']]],
      objetivos: ['Determinar <strong>$q$, $a_{1}$ ou $n$</strong> usando o termo geral.', 'Fazer <strong>interpolação geométrica</strong>.', 'Resolver problemas de <strong>crescimento percentual</strong>.'],
      dica: 'Dados $a_{p}$ e $a_{q}$ (posições $p < q$): $q^{q−p} = {a_{q}|a_{p}}$. Isole a razão extraindo a raiz.',
      gancho: { titulo: 'Quanto cresce por mês?', texto: 'Uma colônia tem $100$ indivíduos no mês $1$ e $800$ no mês $4$, crescendo em PG. Do mês $1$ ao $4$ há $3$ passos: $q³ = 8$, logo $q = 2$.', mini: ['Em uma PG, $a_{1} = 3$ e $a_{4} = 24$. A razão é:', ['$2$', '$3$', '$4$', '$8$'], 0, '$q³ = 8$ ⇒ $q = 2$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · achar a razão', 'Pelo quociente de dois termos', g2(`<div>
              ${checks(['<strong>$a_{n} = a_{p} · q^{n−p}$</strong> ⇒ $q^{n−p} = {a_{n}|a_{p}}$.', 'Exemplo: $a_{2} = 6$ e $a_{5} = 162$: $q³ = {162|6} = 27$ ⇒ $q = 3$ e $a_{1} = 2$.', '<strong>Achar $n$:</strong> $a_{n} = a_{1} q^{n−1}$ ⇒ $q^{n−1} = {a_{n}|a_{1}}$ ⇒ compare potências.', 'Se $n − p$ é par e o quociente é positivo, há duas razões possíveis ($±$).'], '.95rem')}
            </div>`, card(`<strong>Exemplo: quantos termos?</strong>
              <p style="font-size:.92rem;margin-top:8px;">PG $(3, 6, 12, …, 768)$: $768 = 3 · 2^{n−1}$ ⇒ $2^{n−1} = 256 = 2^{8}$ ⇒ $n = 9$.</p>`, 'primary'))],
        ['Teoria · interpolação geométrica', 'Meios geométricos', g2(`<div>
              ${checks(['<strong>Interpolar $k$ meios</strong> entre $a$ e $b$: a PG tem $k + 2$ termos e $q^{k+1} = {b|a}$.', 'Exemplo: $3$ meios entre $2$ e $162$: $q⁴ = 81$ ⇒ $q = 3$ ⇒ $(2, 6, 18, 54, 162)$.', 'Se o enunciado não diz o sinal, considere $q > 0$ (ou analise $±$).', 'Aplicação: etapas de crescimento igual (taxa constante) entre dois valores.'], '.95rem')}
            </div>`, callout('Conta rápida', 'Para $k$ meios há $k + 1$ “saltos” multiplicativos de fator $q$.', 'growth'))]
      ],
      exemplos: [
        ['Razão e primeiro termo', 'Em uma PG, $a_{3} = 20$ e $a_{6} = 160$. Calcule $q$ e $a_{1}$.', [['Quociente', '$q³ = {160|20} = 8$ ⇒ $q = 2$.'], ['Primeiro termo', '$a_{1} = a_{3} ÷ q² = 20 ÷ 4 = 5$.']], '$q = 2$ e $a_{1} = 5$.'],
        ['Quantos termos', 'Quantos termos tem a PG $(5, 15, 45, …, 1215)$?', [['Fórmula', '$1215 = 5 · 3^{n−1}$.'], ['Isole', '$3^{n−1} = 243 = 3^{5}$.'], ['Conclua', '$n = 6$.']], 'A PG tem <strong>6 termos</strong>.']
      ],
      pratique: [
        ['Razão', 'Se $a_{2} = 12$ e $a_{4} = 108$ (PG de termos positivos), $q$ vale:', ['$2$', '$3$', '$6$', '$9$'], 1, '$q² = 9$ ⇒ $q = 3$. <strong>Alternativa B.</strong>'],
        ['Número de termos', 'A PG $(2, 4, 8, …, 512)$ tem:', ['$7$ termos', '$8$ termos', '$9$ termos', '$10$ termos'], 2, '$2^{n} = 512 = 2^{9}$ ⇒ $n = 9$. <strong>Alternativa C.</strong>'],
        ['Interpolação', 'Inserindo $2$ meios geométricos entre $3$ e $81$, a razão é:', ['$2$', '$3$', '$9$', '$27$'], 1, '$q³ = 27$ ⇒ $q = 3$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O crescimento percentual', 'Uma cidade tinha $10 000$ habitantes e $14 641$ habitantes quatro anos depois, com crescimento percentual anual constante. Qual a taxa?', ['$5%$', '$8%$', '$10%$', '$12%$', '$15%$'], 2, '$q⁴ = 1,4641 = 1,1⁴$ ⇒ $q = 1,1$ ⇒ $10%$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer a raiz', 'Para achar $q$ de $q³ = 8$ extraia a raiz cúbica.'], ['Número de passos', 'De $a_{p}$ a $a_{n}$ são $n − p$ passos.'], ['Sinal de $q$', 'Com expoente par, considere $±$.'], ['Meios × termos', '$k$ meios dá $k + 2$ termos.']],
      quiz: [
        { q: '$k$ meios geométricos entre $a$ e $b$: $q^{k+1} =$', o: ['${b|a}$', '$b − a$', '$a · b$', '${a|b}$'], a: 0 },
        { q: 'PG $(1, 3, 9, …, 729)$ tem:', o: ['$6$ termos', '$7$ termos', '$8$ termos', '$9$ termos'], a: 1 },
        { q: 'Se $a_{1} = 5$ e $a_{3} = 45$ ($q > 0$), $q$ vale:', o: ['$2$', '$3$', '$4$', '$9$'], a: 1 },
        { q: 'Aumento de $20%$ ao período dá $q =$', o: ['$0,2$', '$1,2$', '$2$', '$20$'], a: 1 }
      ],
      sintese: [['Razão', 'q^(n−p) = aₙ ÷ aₚ.'], ['Contagem', 'Compare potências para achar n.'], ['Interpolação', 'k meios ⇒ q^(k+1) = b ÷ a.']],
      msg: 'Na próxima aula: propriedades da PG e a ligação com a função exponencial.'
    },
    // ------------------------------------------------------------ aula 81
    {
      slug: 'progressao-geometrica-termo-geral-iii', titulo: 'Progressão geométrica: termo geral III',
      h1: `Progressão geométrica: ${co('growth')}propriedades e função exponencial</span>`,
      sub: 'A PG tem propriedades próprias: o termo médio é a média geométrica dos vizinhos e termos equidistantes têm o mesmo produto. Além disso, aₙ é uma função exponencial de n.',
      badges: [['média geométrica'], ['produto', 'growth'], ['função exponencial', 'decay']], color: 'growth',
      roteiro: ['Propriedades e conexões.', [['Termo médio', 'b² = a·c', 'target'], ['Equidistantes', 'produto constante', 'scale'], ['Três termos', 'x/q, x, xq', 'chart'], ['PG e exponencial', 'pontos na curva', 'book'], ['Problemas', 'aplicar', 'bulb']]],
      objetivos: ['Aplicar a propriedade do <strong>termo médio geométrico</strong>.', 'Usar o <strong>produto de termos equidistantes</strong>.', 'Relacionar a PG à <strong>função exponencial</strong> $a_{n} = {a_{1}|q} · q^{n}$.'],
      dica: 'Três números em PG: chame-os de ${x|q}$, $x$ e $x q$. O produto é $x³$.',
      gancho: { titulo: 'Três números em PG', texto: 'Três números em PG têm produto $216$. O do meio é $6$, pois $x³ = 216$ ⇒ $x = 6$. Com $q = 3$: $2, 6, 18$.', mini: ['Se $(4, x, 25)$ é PG de termos positivos, $x$ vale:', ['$10$', '$14,5$', '$20$', '$100$'], 0, '$x² = 4 · 25 = 100$ ⇒ $x = 10$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · propriedades', 'Média geométrica e produtos', g2(`<div>
              ${checks(['<strong>Termo médio:</strong> $a_{n}² = a_{n−1} · a_{n+1}$ (média geométrica dos vizinhos, termos positivos).', '<strong>Equidistantes:</strong> $a_{1} · a_{n} = a_{2} · a_{n−1} = …$', 'Em $(2, 6, 18, 54, 162)$: $2 · 162 = 6 · 54 = 18 · 18 = 324$.', '<strong>Teste de PG:</strong> $a, b, c$ em PG ⇔ $b² = a c$.'], '.95rem')}
            </div>`, card(`<strong>PG e função exponencial</strong>
              <p style="font-size:.92rem;margin-top:8px;">$a_{n} = a_{1} q^{n−1} = {a_{1}|q} · q^{n}$.</p>
              <p style="font-size:.92rem;">Os pontos $(n, a_{n})$ estão sobre uma <strong>curva exponencial</strong>.</p>`, 'primary'))],
        ['Teoria · problemas típicos', 'Roteiro', g2(`<div>
              ${checks(['Três termos em PG com produto conhecido: ${x|q}$, $x$, $xq$ ⇒ $x³ = $ produto.', 'Cinco termos: ${x|q²}$, ${x|q}$, $x$, $xq$, $xq²$.', 'Se dois termos são dados, ache $q$ e depois o que for pedido.', 'Compare PA e PG: média aritmética × média geométrica.'], '.95rem')}
            </div>`, callout('Comparação', 'PA: $2b = a + c$. PG: $b² = a · c$.', 'growth'))]
      ],
      exemplos: [
        ['Três números', 'Três números positivos em PG têm soma $39$ e produto $729$. Quais são?', [['Incógnitas', '${x|q}$, $x$, $xq$.'], ['Produto', '$x³ = 729$ ⇒ $x = 9$.'], ['Soma', '${9|q} + 9 + 9q = 39$ ⇒ $9q² − 30q + 9 = 0$ ⇒ $q = 3$ ou $q = {1|3}$.']], 'Os números são <strong>3, 9 e 27</strong>.'],
        ['Valor de x', 'Para que valor de $x$ a terna $(x, x + 2, x + 8)$ é uma PG?', [['Condição', '$(x + 2)² = x (x + 8)$.'], ['Desenvolva', '$x² + 4x + 4 = x² + 8x$.'], ['Resolva', '$4 = 4x$ ⇒ $x = 1$.']], '$x = 1$: a PG é $(1, 3, 9)$.']
      ],
      pratique: [
        ['Termo médio', 'O termo médio geométrico entre $4$ e $9$ é:', ['$6$', '$6,5$', '$13$', '$36$'], 0, '$√{36} = 6$. <strong>Alternativa A.</strong>'],
        ['Equidistantes', 'Em $(1, 2, 4, 8, 16)$, $a_{1} · a_{5}$ é igual a:', ['$a_{2} · a_{4}$', '$a_{3}$', '$2a_{3}$', '$a_{2} + a_{4}$'], 0, 'Equidistantes têm o mesmo produto. <strong>Alternativa A.</strong>'],
        ['Teste de PG', 'Qual terna está em PG?', ['$(2, 4, 7)$', '$(3, 6, 12)$', '$(1, 2, 5)$', '$(5, 6, 8)$'], 1, '$6² = 3 · 12$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Salários em PG', 'Três valores positivos em PG têm produto $1000$ e o menor é $4$. O valor do meio é:', ['$8$', '$10$', '$20$', '$25$', '$250$'], 1, '$x³ = 1000$ ⇒ $x = 10$. <strong>Alternativa B.</strong>'],
      cuidados: [['Média aritmética na PG', 'Na PG o termo médio é a média <strong>geométrica</strong>.'], ['Sinais', 'Raiz quadrada do produto exige termos positivos (ou considere $±$).'], ['Equidistantes', 'Os termos precisam estar à mesma distância dos extremos.'], ['Perder a solução com $q = {1|3}$', 'Ela dá a mesma terna invertida.']],
      quiz: [
        { q: '$b² = a c$ caracteriza:', o: ['PA', 'PG', 'qualquer sequência', 'função afim'], a: 1 },
        { q: 'Em $(3, 6, 12, 24, 48)$, $a_{1} · a_{5}$ vale:', o: ['$144$', '$72$', '$51$', '$288$'], a: 0 },
        { q: 'Três números em PG com produto $27$: o do meio é:', o: ['$3$', '$9$', '$27$', '$1$'], a: 0 },
        { q: 'Os pontos $(n, a_{n})$ de uma PG estão em uma:', o: ['reta', 'curva exponencial', 'parábola', 'circunferência'], a: 1 }
      ],
      sintese: [['Termo médio', 'b² = a·c (média geométrica).'], ['Equidistantes', 'Mesmo produto.'], ['Função exponencial', 'aₙ = (a₁ ÷ q)·qⁿ.']],
      msg: 'Na próxima aula: a soma dos termos de uma PG finita.'
    }
  ]
});
