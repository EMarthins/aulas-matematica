// Módulo 1 · Matemática · 2ª série · 3º trimestre — Equação e função exponencial (aulas 69, 70 e 71 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo. Em math, "${a|b}" só dentro de aspas simples (nunca em template literal).
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w71 = Wd.expo('ex71');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/equacao-e-funcao-exponencial/',
  titulo: 'Equação e função exponencial', accent: 'growth', icon: 'curve-up', key: 'm2w01', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 69 a 71 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 69
    {
      slug: 'equacao-exponencial', titulo: 'Equação exponencial',
      h1: `Equação ${co('growth')}exponencial:</span> a incógnita no expoente`,
      sub: 'Quando a incógnita aparece no expoente, temos uma equação exponencial. O caminho mais comum é reduzir os dois lados a uma potência da mesma base.',
      badges: [['aˣ = aʸ'], ['mesma base', 'growth'], ['S = { }', 'decay']], color: 'growth',
      roteiro: ['Da árvore genealógica à equação exponencial.', [['Equação exponencial', 'x no expoente', 'bulb'], ['Mesma base', 'reduzir os dois lados', 'target'], ['Propriedades', 'produto, quociente, potência', 'scale'], ['Substituição', 'y = aˣ', 'chart'], ['Conjunto solução', 'S', 'book']]],
      objetivos: ['Identificar uma <strong>equação exponencial</strong>.', 'Resolvê-la reduzindo os dois membros a uma <strong>potência de mesma base</strong>.', 'Usar <strong>propriedades das potências</strong> e a <strong>substituição de variável</strong>.'],
      dica: 'Se $a^{x} = a^{y}$ (com $a > 0$ e $a ≠ 1$), então $x = y$: igualdade de potências de mesma base implica igualdade dos expoentes.',
      gancho: { titulo: 'A árvore genealógica', texto: 'Você tem $2$ pais, $4$ avós, $8$ bisavós… o número de ancestrais <strong>dobra</strong> a cada geração: na geração $x$ são $2^{x}$ ancestrais. Em qual geração há $32$ ancestrais?', mini: ['$2^{x} = 32$ tem solução:', ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 16$'], 1, '$32 = 2^{5}$, logo $x = 5$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · equação exponencial', 'Mesma base nos dois lados', g2(`<div>
              ${checks(['<strong>Equação exponencial:</strong> a incógnita está no expoente de pelo menos uma potência. Ex.: $2^{x} = 32$.', 'Passo 1: escreva os dois lados como potências de <strong>mesma base</strong> (fatore: $32 = 2^{5}$).', 'Passo 2: iguale os expoentes: $2^{x} = 2^{5}$ ⇒ $x = 5$.', 'Exemplo: $9^{x} = 27$ ⇒ $3^{2x} = 3^{3}$ ⇒ $2x = 3$ ⇒ $x = {3|2}$.'], '.95rem')}
            </div>`, card(`<strong>Propriedades que ajudam</strong>
              <p style="font-size:.9rem;margin-top:8px;">$a^{m} · a^{n} = a^{m+n}$</p>
              <p style="font-size:.9rem;">$a^{m} ÷ a^{n} = a^{m−n}$</p>
              <p style="font-size:.9rem;">$(a^{m})^{n} = a^{m·n}$</p>
              <p style="font-size:.9rem;">$a^{−n} = {1|a^{n}}$ e $a^{0} = 1$</p>`, 'primary'))],
        ['Teoria · outros casos', 'Colocar em evidência e substituir', g2(`<div>
              ${checks(['<strong>Soma de potências:</strong> $2^{x+1} + 2^{x+5} = 34$ ⇒ $2^{x}(2 + 32) = 34$ ⇒ $2^{x} = 1$ ⇒ $x = 0$.', '<strong>Equação do 2º grau escondida:</strong> $9^{x} − 4 · 3^{x} + 3 = 0$. Faça $y = 3^{x}$: $y² − 4y + 3 = 0$ ⇒ $y = 1$ ou $y = 3$.', 'Volte: $3^{x} = 1$ ⇒ $x = 0$; $3^{x} = 3$ ⇒ $x = 1$. Logo $S = \\{0, 1\\}$.', '<strong>Sem solução:</strong> $2^{x} = −4$ (potência de base positiva nunca é negativa) ⇒ $S = ∅$.'], '.95rem')}
            </div>`, callout('Atenção', 'Ao substituir $y = a^{x}$, só servem as raízes <strong>positivas</strong>, pois $a^{x} > 0$ sempre.', 'growth'))]
      ],
      exemplos: [
        ['Mesma base', 'Resolva $4^{x} = 32$.', [['Decomponha', '$4 = 2^{2}$ e $32 = 2^{5}$.'], ['Igual base', '$(2^{2})^{x} = 2^{5}$ ⇒ $2^{2x} = 2^{5}$.'], ['Expoentes', '$2x = 5$ ⇒ $x = {5|2}$.']], '$S = \\{ {5|2} \\}$.'],
        ['Substituição', 'Resolva $9^{x} − 10 · 3^{x} + 9 = 0$.', [['Escreva $9^{x}$', '$9^{x} = (3^{x})²$.'], ['Faça $y = 3^{x}$', '$y² − 10y + 9 = 0$ ⇒ $y = 1$ ou $y = 9$.'], ['Volte', '$3^{x} = 1$ ⇒ $x = 0$; $3^{x} = 9$ ⇒ $x = 2$.']], '$S = \\{0, 2\\}$.']
      ],
      pratique: [
        ['Mesma base', 'A solução de $5^{x} = 125$ é:', ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 25$'], 1, '$125 = 5^{3}$. <strong>Alternativa B.</strong>'],
        ['Base diferente', 'A solução de $8^{x} = 4$ é:', ['$x = {1|2}$', '$x = {2|3}$', '$x = {3|2}$', '$x = 2$'], 1, '$2^{3x} = 2^{2}$ ⇒ $3x = 2$. <strong>Alternativa B.</strong>'],
        ['Evidência', 'A solução de $2^{x+1} + 2^{x} = 24$ é:', ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 6$'], 1, '$2^{x} · (2 + 1) = 24$ ⇒ $2^{x} = 8$ ⇒ $x = 3$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A área e a massa (ENEM 2012, adaptada)', 'A área $A$ da superfície corporal relaciona-se com a massa $m$ por $A = k · m^{{2|3}}$. Se a massa de uma pessoa é multiplicada por $8$, por quanto fica multiplicada a área?', ['$2$', '$4$', '$8$', '$16$', '$64$'], 1, '$(8m)^{{2|3}} = 8^{{2|3}} · m^{{2|3}} = 4 · m^{{2|3}}$. <strong>Alternativa B.</strong>'],
      cuidados: [['Igualar a base e esquecer o expoente', 'Quando as bases são iguais, <strong>iguale os expoentes</strong>.'], ['Bases que parecem diferentes', '$4$, $8$ e $32$ são potências de $2$: decomponha.'], ['Raiz negativa na substituição', 'Se $y = 3^{x}$, descarte $y ≤ 0$.'], ['Somar bases', '$2^{x} + 2^{x} = 2 · 2^{x} = 2^{x+1}$, e não $4^{x}$.']],
      quiz: [
        { q: '$3^{x} = 81$ tem solução:', o: ['$x = 3$', '$x = 4$', '$x = 27$', '$x = 8$'], a: 1 },
        { q: '$2^{x} = {1|8}$ tem solução:', o: ['$x = 3$', '$x = −3$', '$x = −8$', '$x = {1|3}$'], a: 1 },
        { q: '$4^{x} = 2$ tem solução:', o: ['$x = 2$', '$x = {1|2}$', '$x = −2$', '$x = 4$'], a: 1 },
        { q: 'A equação $2^{x} = −3$:', o: ['tem solução $x = −1$', 'tem solução $x = 3$', 'não tem solução real', 'tem duas soluções'], a: 2 }
      ],
      sintese: [['Mesma base', 'aˣ = aʸ ⇒ x = y (a > 0 e a ≠ 1).'], ['Técnicas', 'Fatorar, evidência e substituição y = aˣ.'], ['Conjunto solução', 'Sempre confira se as raízes servem.']],
      msg: 'Na próxima aula você define a função exponencial e calcula valores dela.'
    },
    // ------------------------------------------------------------ aula 70
    {
      slug: 'funcao-exponencial-definicao-algebrica', titulo: 'Função exponencial: definição algébrica',
      h1: `Função ${co('growth')}exponencial:</span> f(x) = aˣ`,
      sub: 'Uma função exponencial associa a cada x real o valor de uma potência de base fixa a. Ela modela populações, juros e decaimentos, em que o crescimento é proporcional ao tamanho atual.',
      badges: [['f(x) = aˣ'], ['a > 0, a ≠ 1', 'growth'], ['valor numérico', 'decay']], color: 'growth',
      roteiro: ['Da multiplicação de bactérias à fórmula.', [['Dependência', 'grandezas ligadas', 'bulb'], ['Definição', 'f(x) = aˣ', 'target'], ['Restrições', 'a > 0 e a ≠ 1', 'scale'], ['Valor numérico', 'substituir x', 'chart'], ['Modelos', 'p(t) = p₀ · aᵗ', 'book']]],
      objetivos: ['Identificar a <strong>representação algébrica</strong> de uma função exponencial.', 'Calcular o <strong>valor numérico</strong> de $f(x)$.', 'Entender por que $a > 0$ e $a ≠ 1$.'],
      dica: 'Função exponencial: <strong>variável no expoente</strong>. Função polinomial: variável na base ($x²$). Não confunda.',
      gancho: { titulo: 'Bactérias que dobram', texto: 'Uma colônia tem $100$ bactérias e <strong>dobra a cada hora</strong>. Após $t$ horas, o número é $N(t) = 100 · 2^{t}$. Quantas bactérias há após $3$ horas?', mini: ['$N(3)$ é:', ['$300$', '$600$', '$800$', '$1 000$'], 2, '$100 · 2^{3} = 100 · 8 = 800$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Função exponencial', g2(`<div>
              ${checks(['<strong>Função exponencial</strong> de base $a$: $f: ℝ → ℝ_{>0}$, $f(x) = a^{x}$, com $a > 0$ e $a ≠ 1$.', '<strong>Por que $a > 0$?</strong> Para a potência existir para todo $x$ real (ex.: $(−2)^{{1|2}}$ não é real).', '<strong>Por que $a ≠ 1$?</strong> $1^{x} = 1$ é função constante, não exponencial.', '<strong>Valor numérico:</strong> $f(x) = 3^{x}$: $f(−2) = {1|9}$, $f(0) = 1$, $f(2) = 9$.'], '.95rem')}
            </div>`, card(`<strong>Forma geral de modelos</strong>
              <p style="font-size:.92rem;margin-top:8px;">$f(x) = k · a^{x}$: $k$ é o valor inicial ($f(0) = k$).</p>
              <p style="font-size:.92rem;">$a > 1$: crescimento. $0 < a < 1$: decaimento.</p>`, 'primary'))],
        ['Teoria · exemplos', 'Reconhecendo funções exponenciais', g2(`<div>
              ${tbl(['Função', 'Exponencial?', 'Por quê'], [['$f(x) = 5^{x}$', 'sim', 'base 5 > 0'], ['$f(x) = ({1|2})^{x}$', 'sim', 'base entre 0 e 1'], ['$f(x) = x^{3}$', 'não', 'variável na base'], ['$f(x) = 1^{x}$', 'não', 'base 1: constante'], ['$f(x) = (−3)^{x}$', 'não', 'base negativa']])}
            </div>`, callout('Ideia-chave', 'Em $f(x) = a^{x}$, <strong>somar</strong> $1$ ao $x$ <strong>multiplica</strong> $f(x)$ por $a$.', 'growth'))]
      ],
      exemplos: [
        ['Valor numérico', 'Dada $f(x) = 2^{x}$, calcule $f(4)$, $f(0)$ e $f(−3)$.', [['$f(4)$', '$2^{4} = 16$.'], ['$f(0)$', '$2^{0} = 1$.'], ['$f(−3)$', '$2^{−3} = {1|8}$.']], '$f(4) = 16$, $f(0) = 1$ e $f(−3) = {1|8}$.'],
        ['Modelo de crescimento', 'A população de uma cultura é $p(t) = 40 · 2^{3t}$ (em milhares), com $t$ em horas. Quanto é a população após $20$ min ($t = {1|3}$)?', [['Substituir', '$p({1|3}) = 40 · 2^{3 · {1|3}} = 40 · 2^{1}$.'], ['Calcular', '$40 · 2 = 80$ milhares.']], 'A população é de <strong>80 mil</strong>: dobrou em relação à inicial.']
      ],
      pratique: [
        ['Valor', 'Se $f(x) = 3^{x}$, então $f(3)$ vale:', ['$9$', '$27$', '$81$', '$6$'], 1, '$3^{3} = 27$. <strong>Alternativa B.</strong>'],
        ['Valor negativo', 'Se $f(x) = 4^{x}$, então $f(−1)$ vale:', ['$−4$', '${1|4}$', '$4$', '$−{1|4}$'], 1, '$4^{−1} = {1|4}$. <strong>Alternativa B.</strong>'],
        ['Reconhecer', 'Qual é função exponencial?', ['$f(x) = x^{2}$', '$f(x) = 2x$', '$f(x) = 7^{x}$', '$f(x) = 1^{x}$'], 2, 'Variável no expoente e base $7 > 0$, diferente de $1$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A cultura de bactérias (ENEM 2016, adaptada)', 'Em uma cultura inicial de $40$ mil bactérias, a população é $p(t) = 40 · 2^{3t}$ (em milhares), com $t$ em horas. Após $20$ minutos, a população, em relação à inicial, será:', ['reduzida a ${1|3}$', 'reduzida a ${1|2}$', 'reduzida a ${2|3}$', 'duplicada', 'triplicada'], 3, '$t = {1|3}$: $2^{1} = 2$ vezes. <strong>Alternativa D.</strong>'],
      cuidados: [['Base negativa', 'Não existe função exponencial de base negativa ou zero.'], ['Confundir $x^{2}$ com $2^{x}$', 'Em $2^{x}$ o $x$ é o expoente.'], ['Minutos e horas', 'Se $t$ é em horas, $20$ min são ${1|3}$ de hora.'], ['Esquecer $f(0) = k$', 'O valor inicial é $f(0)$; em $a^{x}$, é $1$.']],
      quiz: [
        { q: '$f(x) = 5^{x}$: $f(2)$ vale:', o: ['$10$', '$25$', '$7$', '$32$'], a: 1 },
        { q: 'A condição para a base $a$ é:', o: ['$a > 0$ e $a ≠ 1$', '$a ≥ 0$', '$a$ qualquer', '$a < 0$'], a: 0 },
        { q: '$f(0)$, em $f(x) = k · a^{x}$, vale:', o: ['$a$', '$k$', '$0$', '$1$'], a: 1 },
        { q: 'Qual não é função exponencial?', o: ['$2^{x}$', '$({1|3})^{x}$', '$x^{5}$', '$10^{x}$'], a: 2 }
      ],
      sintese: [['Definição', 'f(x) = aˣ, a > 0 e a ≠ 1.'], ['Valor numérico', 'Substitua x e aplique potência.'], ['Modelo', 'f(x) = k·aˣ com k = f(0).']],
      msg: 'Na próxima aula você vê o gráfico da função exponencial.'
    },
    // ------------------------------------------------------------ aula 71
    {
      slug: 'funcao-exponencial-definicao-grafica', titulo: 'Função exponencial: definição gráfica',
      h1: `O gráfico da função ${co('growth')}exponencial</span>`,
      sub: 'O gráfico de f(x) = aˣ é uma curva que passa por (0, 1), nunca toca o eixo x e muda de aspecto conforme a base a seja maior ou menor que 1.',
      badges: [['curva exponencial'], ['(0, 1)', 'growth'], ['assíntota y = 0', 'decay']], color: 'growth',
      roteiro: ['Pontos, forma e propriedades do gráfico.', [['Tabela de valores', 'montar pontos', 'chart'], ['Passa por (0,1)', 'a⁰ = 1', 'target'], ['Assíntota', 'não toca o eixo x', 'scale'], ['Domínio e imagem', 'ℝ e ℝ₊*', 'book'], ['Ler o gráfico', 'interpretar', 'bulb']]],
      objetivos: ['Construir o gráfico de $f(x) = a^{x}$ por <strong>tabela de pontos</strong>.', 'Reconhecer <strong>domínio, imagem e assíntota</strong>.', 'Interpretar o gráfico em situações-problema.'],
      dica: 'Ponto fixo: <strong>todo gráfico de $a^{x}$ passa por $(0, 1)$</strong>, pois $a^{0} = 1$.',
      gancho: { titulo: 'Montando pontos', texto: 'Para $f(x) = 2^{x}$ calculamos: $f(−1) = {1|2}$, $f(0) = 1$, $f(1) = 2$, $f(2) = 4$, $f(3) = 8$. Marque esses pontos no plano e ligue-os: surge uma curva que sobe cada vez mais rápido.', mini: ['O gráfico de $2^{x}$ passa pelo ponto:', ['$(0, 0)$', '$(0, 1)$', '$(1, 1)$', '$(1, 0)$'], 1, '$2^{0} = 1$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o gráfico', 'Características', g2(`<div>
              ${checks(['<strong>Domínio:</strong> $ℝ$ (todos os reais). <strong>Imagem:</strong> $ℝ_{>0}$ (reais positivos).', 'Corta o eixo $y$ em $(0, 1)$ e <strong>não corta</strong> o eixo $x$.', '<strong>Assíntota horizontal:</strong> o eixo $x$ (a curva se aproxima, mas não toca).', 'Se $a > 1$: <strong>crescente</strong>. Se $0 < a < 1$: <strong>decrescente</strong>.'], '.95rem')}
            </div>`, card(`<strong>Tabela de $2^{x}$ e $({1|2})^{x}$</strong>
              ${tbl(['$x$', '$−2$', '$−1$', '$0$', '$1$', '$2$'], [['$2^{x}$', '${1|4}$', '${1|2}$', '$1$', '$2$', '$4$'], ['$({1|2})^{x}$', '$4$', '$2$', '$1$', '${1|2}$', '${1|4}$']])}`, 'primary'))],
        ['Teoria · interpretando', 'Lendo informações no gráfico', g2(`<div>
              ${checks(['Se o gráfico passa por $(2, 9)$ e por $(0, 1)$, então $a² = 9$ ⇒ $a = 3$.', 'Se passa por $(1, 5)$ e é da forma $k · a^{x}$ com $k = 1$: $a = 5$.', 'Valores de $f$ <strong>positivos sempre</strong>: o gráfico fica acima do eixo $x$.', 'Dois gráficos $a^{x}$ e $({1|a})^{x}$ são <strong>simétricos em relação ao eixo $y$</strong>.'], '.95rem')}
            </div>`, callout('Dica', 'Para descobrir a base a partir de um ponto $(1, y)$: a base é o próprio $y$ (quando $k = 1$).', 'growth'))]
      ],
      exemplos: [
        ['Descobrir a base', 'O gráfico de $f(x) = a^{x}$ passa por $(3, 8)$. Qual é a base?', [['Substitua', '$a^{3} = 8$.'], ['Resolva', '$a = 2$ (pois $2^{3} = 8$).']], 'A base é <strong>2</strong>.'],
        ['Imagem', 'Qual é a imagem de $f(x) = 3^{x}$?', [['Potência de base positiva', 'Sempre positiva.'], ['Alcance', 'Pode ser tão pequena ou grande quanto quisermos.']], '$"Im" = ℝ_{>0}$: todos os reais positivos.']
      ],
      widget: { titulo: 'Gráfico de k · aˣ', html: w71.html, js: w71.js },
      pratique: [
        ['Ponto fixo', 'O gráfico de $f(x) = 7^{x}$ corta o eixo $y$ em:', ['$(0, 0)$', '$(0, 1)$', '$(0, 7)$', '$(7, 0)$'], 1, '$7^{0} = 1$. <strong>Alternativa B.</strong>'],
        ['Base', 'O gráfico de $a^{x}$ passa por $(2, 25)$. Então $a$ vale:', ['$2$', '$5$', '$12,5$', '$25$'], 1, '$a² = 25$ ⇒ $a = 5$. <strong>Alternativa B.</strong>'],
        ['Imagem', 'A imagem de $f(x) = 2^{x}$ é:', ['$ℝ$', '$ℝ_{+}$', '$ℝ_{>0}$ (reais positivos)', '$ℤ$'], 2, 'Sempre $> 0$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O gráfico de uma cultura', 'O gráfico de $N(t) = 200 · 2^{t}$ (bactérias, $t$ em horas) tem como assíntota horizontal:', ['a reta $y = 200$', 'o eixo $y$', 'a reta $y = 1$', 'o eixo $x$ ($y = 0$)', 'a reta $x = 1$'], 3, 'A curva se aproxima do eixo $x$ sem tocá-lo. <strong>Alternativa D.</strong>'],
      cuidados: [['Tocar o eixo x', 'A curva nunca toca nem cruza o eixo $x$.'], ['Corta o eixo y em k, não em 1', 'Em $k · a^{x}$, o corte é $(0, k)$.'], ['Crescente × decrescente', 'Depende da base: $a > 1$ ou $0 < a < 1$.'], ['Ligar pontos em reta', 'A curva é suave; não ligue os pontos por segmentos.']],
      quiz: [
        { q: 'O domínio de $f(x) = a^{x}$ é:', o: ['$ℝ_{+}$', '$ℝ$', '$ℤ$', '$[0, 1]$'], a: 1 },
        { q: 'O gráfico de $a^{x}$ sempre passa por:', o: ['$(0, 0)$', '$(1, 1)$', '$(0, 1)$', '$(1, 0)$'], a: 2 },
        { q: 'A assíntota horizontal de $a^{x}$ é:', o: ['$y = 1$', 'eixo $x$', 'eixo $y$', '$y = a$'], a: 1 },
        { q: 'Com $a > 1$, a função é:', o: ['decrescente', 'constante', 'crescente', 'periódica'], a: 2 }
      ],
      sintese: [['Gráfico', 'Curva por (0,1), acima do eixo x.'], ['Domínio e imagem', 'ℝ e ℝ positivos.'], ['Base', 'Maior que 1: cresce; entre 0 e 1: decresce.']],
      msg: 'Na próxima aula você resolve problemas com a função exponencial.'
    }
  ]
});
