// Módulo 18 · 9º ano · Recomposição · 3º trimestre — Expressões algébricas (aulas 56 a 58 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wn = Wd.valorNum('rn1');

module.exports = unidade({
  tri: 3, dir: 'expressoes-algebricas', titulo: 'Expressões algébricas', accent: 'growth', icon: 'algebra', key: 'r3u5',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'valor-numerico-i', titulo: 'Cálculo do valor numérico de expressões algébricas I',
      h1: `Expressões algébricas: ${co('growth')}letras no lugar de números</span>`,
      sub: 'Uma expressão algébrica usa letras para representar valores que podem variar. Para obter o valor numérico, substituímos a letra e calculamos.',
      badges: [['variável'], ['substituir', 'growth'], ['valor numérico', 'decay']], color: 'growth',
      roteiro: ['Do enunciado à expressão e ao valor.', [['Variável', 'letra que muda', 'bulb'], ['Expressão', 'montar a partir do texto', 'book'], ['Substituir', 'trocar a letra pelo valor', 'target'], ['Calcular', 'ordem das operações', 'scale'], ['Conferir', 'testar casos', 'chart']]],
      objetivos: ['Reconhecer <strong>variáveis</strong> e <strong>expressões algébricas</strong>.', 'Calcular o <strong>valor numérico</strong> por substituição.', 'Traduzir <strong>frases em expressões</strong>.'],
      dica: 'Ao substituir, use <strong>parênteses</strong> no lugar da letra, principalmente com números negativos.',
      gancho: { titulo: 'O preço da corrida', texto: 'Uma corrida de aplicativo custa <strong>R$ 5 de taxa fixa</strong> mais <strong>R$ 2 por quilômetro</strong>. Se $x$ é o número de quilômetros, o preço é $5 + 2x$. Quanto custa uma corrida de $8$ km?', mini: ['Para $x = 8$, o preço é:', ['R$ 13', 'R$ 16', 'R$ 21', 'R$ 40'], 2, '$5 + 2 · 8 = 21$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · expressões', 'Letras e números', g2(`<div>
              ${checks(['<strong>Variável</strong> (ou incógnita): letra que representa um número qualquer.', '<strong>Expressão algébrica:</strong> números, letras e operações, como $3x + 5$ ou $a² − 2b$.', '<strong>Coeficiente:</strong> número que multiplica a letra ($3$ em $3x$).', '<strong>Termo:</strong> parte separada por $+$ ou $−$.'], '.95rem')}
            </div>`, card(`<strong>Frases em expressões</strong>
              ${tbl(['Em palavras', 'Expressão'], [['o dobro de um número', '$2x$'], ['um número mais 7', '$x + 7$'], ['o triplo menos 4', '$3x − 4$'], ['a metade de um número', '${x|2}$'], ['o quadrado de um número', '$x²$']])}`, 'primary'))],
        ['Teoria · valor numérico', 'Substituir e calcular', g2(`<div>
              ${checks(['Para $3x + 5$ com $x = 4$: $3 · 4 + 5 = 17$.', 'Para $x² − 2x$ com $x = −3$: $(−3)² − 2 · (−3) = 9 + 6 = 15$.', 'Com duas letras: $2a + b$ para $a = 5$, $b = −1$: $10 − 1 = 9$.', 'Respeite a ordem: potência, multiplicação, soma/subtração.'], '.95rem')}
            </div>`, callout('Parênteses', 'Em $x²$ com $x = −3$, escreva $(−3)²$. Sem parênteses, $−3²$ daria $−9$ (errado).', 'growth'))]
      ],
      exemplos: [
        ['Valor numérico', 'Calcule o valor de $2x² − 3x + 1$ para $x = 3$.', [['Substituir', '$2 · 3² − 3 · 3 + 1$.'], ['Potência', '$2 · 9 − 9 + 1$.'], ['Contas', '$18 − 9 + 1 = 10$.']], 'O valor numérico é <strong>10</strong>.'],
        ['Com negativo', 'Calcule $a² − 3a$ para $a = −2$.', [['Substituir', '$(−2)² − 3 · (−2)$.'], ['Calcular', '$4 + 6 = 10$.']], 'O valor numérico é <strong>10</strong>.']
      ],
      widget: { titulo: 'Valor numérico de uma expressão', html: wn.html, js: wn.js },
      pratique: [
        ['Substituição', 'O valor de $4x − 3$ para $x = 5$ é:', ['$2$', '$17$', '$20$', '$23$'], 1, '$20 − 3 = 17$. <strong>Alternativa B.</strong>'],
        ['Com potência', 'O valor de $x² + 1$ para $x = −4$ é:', ['$−15$', '$−17$', '$15$', '$17$'], 3, '$(−4)² + 1 = 17$. <strong>Alternativa D.</strong>'],
        ['Duas letras', 'O valor de $3a − b$ para $a = 2$, $b = 4$ é:', ['$2$', '$6$', '$10$', '$14$'], 0, '$6 − 4 = 2$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A conta de telefone', 'Uma operadora cobra R$ 30 fixos por mês mais R$ 0,50 por minuto excedente. Se $m$ é o número de minutos excedentes, a conta é $30 + 0,5m$. Em um mês com $50$ minutos excedentes, a conta é:', ['R$ 45', 'R$ 55', 'R$ 60', 'R$ 80', 'R$ 125'], 1, '$30 + 0,5 · 50 = 55$. <strong>Alternativa B.</strong>'],
      cuidados: [['Perder o sinal', 'Troque $x$ por $(−3)$ com parênteses.'], ['Ordem das operações', '$2 + 3x$ para $x = 4$ é $14$, não $20$.'], ['Juntar letra e número', '$3x$ é $3 · x$, não "trinta e x".'], ['Esquecer o coeficiente', 'Substitua e multiplique pelo coeficiente.']],
      quiz: [
        { q: 'O valor de $5x + 2$ para $x = 3$ é:', o: ['$10$', '$17$', '$21$', '$35$'], a: 1 },
        { q: 'O dobro de um número mais $3$ é:', o: ['$2x + 3$', '$2(x + 3)$', '$x + 6$', '$x² + 3$'], a: 0 },
        { q: 'O coeficiente de $−7y$ é:', o: ['$y$', '$7$', '$−7$', '$−y$'], a: 2 },
        { q: '$x²$ para $x = −5$:', o: ['$−25$', '$−10$', '$10$', '$25$'], a: 3 }
      ],
      sintese: [['Expressão', 'Letras, números e operações.'], ['Valor numérico', 'Substitua com parênteses e calcule.'], ['Traduzir', 'Frases viram expressões.']],
      msg: 'Próxima aula: valor numérico II, com fórmulas e geometria.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'valor-numerico-ii', titulo: 'Cálculo do valor numérico de expressões algébricas II',
      h1: `Valor numérico: ${co('growth')}fórmulas e frações</span>`,
      sub: 'Fórmulas da Matemática e de outras ciências são expressões algébricas. Substituímos valores e calculamos, inclusive com frações e decimais.',
      badges: [['fórmulas'], ['frações', 'growth'], ['decimais', 'decay']], color: 'growth',
      roteiro: ['Usar fórmulas conhecidas.', [['Fórmulas', 'área, perímetro, velocidade', 'bulb'], ['Com frações', 'substituir e simplificar', 'scale'], ['Com decimais', 'cuidado com casas', 'chart'], ['Duas variáveis', 'a e b', 'target'], ['Conferir', 'ordem de grandeza', 'book']]],
      objetivos: ['Usar <strong>fórmulas</strong> como expressões algébricas.', 'Calcular valor numérico com <strong>frações e decimais</strong>.', 'Resolver <strong>problemas com duas variáveis</strong>.'],
      dica: 'Escreva a fórmula, <strong>substitua</strong> os valores com parênteses e só então calcule.',
      gancho: { titulo: 'A fórmula do trapézio', texto: 'A área de um trapézio é ${(B + b) · h|2}$. Com $B = 10$, $b = 6$ e $h = 4$, qual é a área?', mini: ['A área é:', ['$16$', '$24$', '$32$', '$64$'], 2, '${16 · 4|2} = 32$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · fórmulas', 'Expressões prontas', g2(`<div>
              ${checks(['Perímetro do retângulo: $P = 2(b + h)$. Área do triângulo: $A = {b h|2}$.', 'Velocidade média: $v = {d|t}$. Temperatura: $F = 1,8C + 32$.', 'Juros simples: $J = C i t$. Área do círculo: $A = π r²$.', 'Substitua os valores dados e calcule com cuidado.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$F = 1,8C + 32$ para $C = 25$: $F = 1,8 · 25 + 32 = 77$ °F.</p>`, 'primary'))],
        ['Teoria · com frações e duas letras', 'Passo a passo', g2(`<div>
              ${checks(['${2|3}x + 1$ para $x = 9$: ${2|3} · 9 + 1 = 6 + 1 = 7$.', '$a² + b²$ para $a = 3$, $b = 4$: $9 + 16 = 25$.', '$(a + b)²$ para $a = 3$, $b = 4$: $7² = 49$ — diferente de $a² + b²$!', '$−x$ para $x = −4$: o valor é $4$.'], '.95rem')}
            </div>`, callout('Atenção', '$(a + b)²$ <strong>não</strong> é igual a $a² + b²$. Confira com números.', 'growth'))]
      ],
      exemplos: [
        ['Velocidade', 'Use $v = {d|t}$ para $d = 150$ km e $t = 2,5$ h.', [['Substituir', '$v = {150|2,5}$.'], ['Calcular', '$150 ÷ 2,5 = 60$.']], 'A velocidade média é <strong>60 km/h</strong>.'],
        ['Duas variáveis', 'Calcule $2a² − b$ para $a = −3$ e $b = 5$.', [['Substituir', '$2 · (−3)² − 5$.'], ['Potência', '$2 · 9 − 5$.'], ['Resultado', '$18 − 5 = 13$.']], 'O valor numérico é <strong>13</strong>.']
      ],
      pratique: [
        ['Fórmula', 'Com $F = 1,8C + 32$, para $C = 100$, $F$ vale:', ['$180$', '$202$', '$212$', '$232$'], 2, '$180 + 32 = 212$. <strong>Alternativa C.</strong>'],
        ['Fração', 'O valor de ${3|4}x − 2$ para $x = 8$ é:', ['$2$', '$4$', '$6$', '$8$'], 1, '$6 − 2 = 4$. <strong>Alternativa B.</strong>'],
        ['Soma de quadrados', 'O valor de $a² + b²$ para $a = 6$ e $b = 8$ é:', ['$14$', '$48$', '$100$', '$196$'], 2, '$36 + 64 = 100$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O aluguel de bicicleta', 'Uma loja cobra R$ 10 de taxa mais R$ 4 por hora de bicicleta: $C = 10 + 4h$. Para um passeio de $3,5$ horas, o custo é:', ['R$ 14,00', 'R$ 20,00', 'R$ 24,00', 'R$ 28,00', 'R$ 38,00'], 2, '$10 + 4 · 3,5 = 24$. <strong>Alternativa C.</strong>'],
      cuidados: [['(a + b)² ≠ a² + b²', 'Teste com números: $(1 + 2)² = 9$ e $1² + 2² = 5$.'], ['Sinal negativo', '$−x$ com $x = −4$ dá $+4$.'], ['Decimais', 'Alinhe a vírgula e confira a ordem de grandeza.'], ['Unidade final', 'Escreva a unidade (km/h, reais, °F…).']],
      quiz: [
        { q: '$a² + b²$ para $a = 2$ e $b = 3$:', o: ['$10$', '$13$', '$25$', '$36$'], a: 1 },
        { q: '$(a + b)²$ para $a = 2$ e $b = 3$:', o: ['$13$', '$25$', '$10$', '$5$'], a: 1 },
        { q: 'Em $v = d ÷ t$ com $d = 90$ e $t = 3$:', o: ['$30$', '$93$', '$270$', '$87$'], a: 0 },
        { q: '${x|2} + 1$ para $x = 6$:', o: ['$3$', '$4$', '$6$', '$7$'], a: 1 }
      ],
      sintese: [['Fórmulas', 'São expressões algébricas.'], ['Substituir', 'Com parênteses e cuidando dos sinais.'], ['Cuidado', '(a+b)² não é a²+b².']],
      msg: 'Próxima aula: resolver problemas com expressões algébricas.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'problemas-com-expressoes-algebricas', titulo: 'Resolução de problemas com expressões algébricas',
      h1: `Problemas com ${co('growth')}expressões algébricas</span>`,
      sub: 'Muitos problemas ficam fáceis quando traduzimos o enunciado em uma expressão e depois substituímos valores ou resolvemos uma equação simples.',
      badges: [['traduzir'], ['modelar', 'growth'], ['resolver', 'decay']], color: 'growth',
      roteiro: ['Do texto à expressão e ao resultado.', [['Ler', 'o que varia', 'book'], ['Escolher a letra', 'e dar nome', 'bulb'], ['Montar', 'a expressão', 'target'], ['Substituir ou resolver', 'achar o valor', 'scale'], ['Conferir', 'testar a resposta', 'chart']]],
      objetivos: ['<strong>Modelar</strong> situações com expressões algébricas.', 'Resolver <strong>equações simples</strong> obtidas da modelagem.', '<strong>Conferir</strong> a resposta no enunciado.'],
      dica: 'Defina <strong>o que a letra representa</strong> antes de escrever a expressão (ex.: $x$ = número de caixas).',
      gancho: { titulo: 'Os salgados da festa', texto: 'Cada pacote tem <strong>12 salgados</strong>. Compraram $p$ pacotes e ainda ganharam <strong>5 avulsos</strong>. Quantos salgados há para $p = 4$?', mini: ['O total é $12p + 5$. Para $p = 4$:', ['$21$', '$48$', '$53$', '$60$'], 2, '$12 · 4 + 5 = 53$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · modelagem', 'Passo a passo', g2(`<div>
              ${checks(['<strong>1.</strong> Identifique a grandeza que varia e chame-a de $x$.', '<strong>2.</strong> Escreva as relações do enunciado como expressão.', '<strong>3.</strong> Substitua o valor dado ou iguale ao resultado e resolva.', '<strong>4.</strong> Confira a resposta no texto do problema.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Um táxi cobra R$ 6 de bandeirada mais R$ 3 por km: $C = 6 + 3x$. Se pagou R$ 27: $6 + 3x = 27$ ⇒ $x = 7$ km.</p>`, 'primary'))],
        ['Teoria · equações simples', 'Desfazer as operações', g2(`<div>
              ${checks(['$3x + 5 = 20$ ⇒ $3x = 15$ ⇒ $x = 5$.', '$2x − 7 = 9$ ⇒ $2x = 16$ ⇒ $x = 8$.', '${x|4} + 1 = 6$ ⇒ ${x|4} = 5$ ⇒ $x = 20$.', 'Confira substituindo: $3 · 5 + 5 = 20$ ✓.'], '.95rem')}
            </div>`, callout('Operações inversas', 'Para isolar $x$, desfaça as operações na ordem inversa: primeiro soma/subtração, depois multiplicação/divisão.', 'growth'))]
      ],
      exemplos: [
        ['Modelando o aluguel', 'Uma van custa R$ 120 fixos mais R$ 2,50 por km. Quantos km foram percorridos se a conta foi R$ 195?', [['Expressão', '$C = 120 + 2,5x$.'], ['Equação', '$120 + 2,5x = 195$.'], ['Resolver', '$2,5x = 75$ ⇒ $x = 30$.']], 'Foram percorridos <strong>30 km</strong>.'],
        ['Lados do retângulo', 'Um retângulo tem lados $x$ e $x + 5$ e perímetro $30$. Quanto vale $x$?', [['Perímetro', '$2x + 2(x + 5) = 30$.'], ['Simplificar', '$4x + 10 = 30$.'], ['Resolver', '$x = 5$.']], 'Os lados medem <strong>5 e 10</strong>.']
      ],
      pratique: [
        ['Modelar', 'O número de pernas de $c$ cachorros e $g$ galinhas é:', ['$4c + 2g$', '$2c + 4g$', '$c + g$', '$6cg$'], 0, 'Cachorro tem $4$; galinha, $2$. <strong>Alternativa A.</strong>'],
        ['Equação', 'Se $2x + 7 = 21$, então $x$ vale:', ['$5$', '$7$', '$10$', '$14$'], 1, '$2x = 14$ ⇒ $x = 7$. <strong>Alternativa B.</strong>'],
        ['Problema', 'Paulo tem $x$ reais; Ana tem o dobro e mais R$ 3. Se Paulo tem R$ 10, Ana tem:', ['R$ 13', 'R$ 20', 'R$ 23', 'R$ 33'], 2, '$2 · 10 + 3 = 23$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O plano de internet', 'Um plano custa R$ 50 fixos e mais R$ 1,20 por GB extra. Uma pessoa pagou R$ 62. Quantos GB extras usou?', ['$5$', '$8$', '$10$', '$12$', '$52$'], 2, '$50 + 1,2g = 62$ ⇒ $g = 10$. <strong>Alternativa C.</strong>'],
      cuidados: [['Letra sem significado', 'Diga o que a letra representa.'], ['Perder um termo', 'Releia o enunciado e inclua taxa fixa e variável.'], ['Equação mal desfeita', 'Desfaça soma/subtração antes de multiplicação/divisão.'], ['Sem conferir', 'Substitua a resposta no problema.']],
      quiz: [
        { q: 'O triplo de um número, menos $2$:', o: ['$3x − 2$', '$3(x − 2)$', '$x³ − 2$', '$2x − 3$'], a: 0 },
        { q: '$5x − 4 = 21$ ⇒ $x$ vale:', o: ['$3$', '$4$', '$5$', '$17$'], a: 2 },
        { q: 'Táxi: $C = 5 + 2x$. Para $x = 10$:', o: ['R$ 15', 'R$ 20', 'R$ 25', 'R$ 70'], a: 2 },
        { q: '${x|3} = 7$ ⇒ $x$ vale:', o: ['$10$', '$14$', '$21$', '${7|3}$'], a: 2 }
      ],
      sintese: [['Modelar', 'Defina a letra, escreva a expressão.'], ['Resolver', 'Operações inversas.'], ['Conferir', 'Substitua no enunciado.']],
      msg: 'Próximo módulo: sequências e padrões.'
    }
  ]
});
