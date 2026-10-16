// Módulo 11 · Matemática · 2ª série · 3º trimestre — Função composta e função inversa (aulas 96, 97 e 98 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w96 = Wd.composta('cp96');
const w98 = Wd.inversa('iv98');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/funcao-composta-e-inversa/',
  titulo: 'Função composta e função inversa', accent: 'primary', icon: 'grid', key: 'm2w11', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 96 a 98 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Revisão do 1º ano: definição de função e representação gráfica.'],
  aulas: [
    // ------------------------------------------------------------ aula 96
    {
      slug: 'funcao-composta', titulo: 'Função composta',
      h1: `Função ${co('primary')}composta:</span> aplicar uma função depois da outra`,
      sub: 'Compor duas funções é aplicar uma e, no resultado, aplicar a outra. A composta (f∘g)(x) = f(g(x)) aparece em cadeias de processos: converter unidades, aplicar desconto e depois imposto, etc.',
      badges: [['f∘g'], ['f(g(x))', 'growth'], ['ordem importa', 'decay']], color: 'primary',
      roteiro: ['De dois passos a uma só função.', [['Ideia', 'dois processos em cadeia', 'bulb'], ['Definição', '(f∘g)(x) = f(g(x))', 'target'], ['Calcular', 'valor e lei', 'chart'], ['Ordem', 'f∘g ≠ g∘f', 'scale'], ['Aplicações', 'preço e imposto', 'coin']]],
      objetivos: ['Definir a <strong>função composta</strong> $f∘g$.', 'Calcular <strong>valores</strong> e determinar a <strong>lei</strong> de $f(g(x))$.', 'Compreender que a <strong>ordem</strong> importa.'],
      dica: 'Em $f(g(x))$, aplique <strong>primeiro $g$</strong> (dentro do parêntese) e depois $f$. Leia “de dentro para fora”.',
      gancho: { titulo: 'Desconto e depois imposto', texto: 'Uma loja dá <strong>10% de desconto</strong> ($g(x) = 0,9x$) e, depois, cobra <strong>R$ 5 de frete</strong> ($f(x) = x + 5$). O preço final de um produto de R$ 100 é $f(g(100)) = f(90) = 95$.', mini: ['Se $f(x) = 2x$ e $g(x) = x + 3$, $f(g(1))$ vale:', ['$5$', '$8$', '$3$', '$6$'], 1, '$g(1) = 4$ e $f(4) = 8$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'A composta f∘g', g2(`<div>
              ${checks(['<strong>$(f∘g)(x) = f(g(x))$</strong>: aplique $g$ e, ao resultado, aplique $f$.', 'Condição: a imagem de $g$ deve estar no domínio de $f$.', 'Exemplo: $f(x) = 2x + 1$ e $g(x) = x²$: $f(g(x)) = 2x² + 1$ e $g(f(x)) = (2x + 1)² = 4x² + 4x + 1$.', '<strong>Em geral $f∘g ≠ g∘f$.</strong>'], '.95rem')}
            </div>`, card(`<strong>Esquema</strong>
              <p style="font-size:.95rem;margin-top:8px;">$x → g(x) → f(g(x))$</p>`.split('\\xrightarrow{f}').join('→'), 'primary'))],
        ['Teoria · como calcular', 'Duas estratégias', g2(`<div>
              ${checks(['<strong>Numérico:</strong> calcule $g(x)$ e substitua em $f$. Ex.: $f(x) = x + 5$, $g(x) = 3x$: $f(g(2)) = f(6) = 11$.', '<strong>Algébrico:</strong> substitua $g(x)$ no lugar do $x$ de $f$. Ex.: $f(g(x)) = 3x + 5$.', '<strong>Cadeia de três:</strong> $(f∘g∘h)(x) = f(g(h(x)))$.', 'Também se pode ler: dada $f(g(x))$, descobrir $f$ ou $g$.'], '.95rem')}
            </div>`, callout('Dica', 'Para descobrir $f$: se $g(x) = x + 1$ e $f(g(x)) = x² + 2x + 1$, escreva $x² + 2x + 1 = (x + 1)²$ ⇒ $f(x) = x²$.', 'primary'))]
      ],
      exemplos: [
        ['Valor numérico', 'Sejam $f(x) = x² − 1$ e $g(x) = 2x + 3$. Calcule $f(g(1))$ e $g(f(1))$.', [['$g(1)$', '$2 · 1 + 3 = 5$.'], ['$f(g(1))$', '$f(5) = 24$.'], ['$f(1)$', '$0$ e $g(0) = 3$.']], '$f(g(1)) = 24$ e $g(f(1)) = 3$.'],
        ['Lei da composta', 'Com $f(x) = 3x − 2$ e $g(x) = x + 4$, determine $f(g(x))$.', [['Substitua', '$f(x + 4) = 3(x + 4) − 2$.'], ['Simplifique', '$3x + 12 − 2 = 3x + 10$.']], '$f(g(x)) = 3x + 10$.']
      ],
      widget: { titulo: 'Compondo funções afins', html: w96.html, js: w96.js },
      pratique: [
        ['Valor', 'Se $f(x) = x + 2$ e $g(x) = 3x$, $f(g(4))$ vale:', ['$8$', '$12$', '$14$', '$18$'], 2, '$g(4) = 12$ e $f(12) = 14$. <strong>Alternativa C.</strong>'],
        ['Lei', 'Se $f(x) = 2x$ e $g(x) = x − 5$, $g(f(x))$ é:', ['$2x − 5$', '$2x − 10$', '$x − 10$', '$2x + 5$'], 0, '$g(2x) = 2x − 5$. <strong>Alternativa A.</strong>'],
        ['Ordem', 'Qual afirmação é correta em geral?', ['$f∘g = g∘f$', '$f∘g ≠ g∘f$', '$f∘g$ é sempre constante', '$f∘g = f + g$'], 1, 'Composição não é comutativa. <strong>Alternativa B.</strong>']
      ],
      enem: ['Desconto e frete', 'Um produto de preço $p$ tem $20%$ de desconto ($g(p) = 0,8p$) e depois frete fixo de R$ 12 ($f(x) = x + 12$). Para $p = 150$, o preço final é:', ['R$ 120', 'R$ 132', 'R$ 138', 'R$ 162', 'R$ 144'], 1, '$g(150) = 120$ e $f(120) = 132$. <strong>Alternativa B.</strong>'],
      cuidados: [['Inverter a ordem', 'Em $f(g(x))$, aplique $g$ primeiro.'], ['Substituir só o $x$ do meio', 'Troque <strong>todo</strong> $x$ de $f$ por $g(x)$.'], ['Esquecer parênteses', '$f(x + 4)$ com $3x − 2$: $3(x + 4) − 2$.'], ['Domínio', 'A imagem de $g$ precisa estar no domínio de $f$.']],
      quiz: [
        { q: '$(f∘g)(x)$ é igual a:', o: ['$g(f(x))$', '$f(g(x))$', '$f(x) · g(x)$', '$f(x) + g(x)$'], a: 1 },
        { q: '$f(x) = x²$ e $g(x) = x + 1$: $f(g(2))$ vale:', o: ['$5$', '$9$', '$4$', '$25$'], a: 1 },
        { q: '$f(x) = x²$ e $g(x) = x + 1$: $g(f(2))$ vale:', o: ['$5$', '$9$', '$4$', '$25$'], a: 0 },
        { q: 'A composição é:', o: ['comutativa', 'não comutativa em geral', 'sempre igual', 'impossível'], a: 1 }
      ],
      sintese: [['Definição', '(f∘g)(x) = f(g(x)).'], ['Cálculo', 'Primeiro g, depois f.'], ['Ordem', 'f∘g ≠ g∘f.']],
      msg: 'Na próxima aula: função inversa.'
    },
    // ------------------------------------------------------------ aula 97
    {
      slug: 'funcao-inversa', titulo: 'Função inversa',
      h1: `Função ${co('primary')}inversa:</span> desfazendo a função`,
      sub: 'A função inversa f⁻¹ desfaz o que f faz: se f leva x em y, então f⁻¹ leva y de volta a x. Só existe inversa para funções bijetoras.',
      badges: [['f⁻¹'], ['só bijetoras', 'growth'], ['f(f⁻¹(x)) = x', 'decay']], color: 'primary',
      roteiro: ['Desfazendo o processo.', [['Ideia', 'voltar ao início', 'bulb'], ['Condição', 'bijetora', 'target'], ['Como achar', 'trocar x e y', 'scale'], ['Verificar', 'composição dá x', 'chart'], ['Exemplos', 'afim, raiz, exponencial', 'book']]],
      objetivos: ['Reconhecer a <strong>condição de existência</strong> da inversa (bijetora).', 'Determinar a <strong>lei</strong> de $f^{−1}$ trocando $x$ por $y$.', '<strong>Verificar</strong> com $f(f^{−1}(x)) = x$.'],
      dica: 'Receita: escreva $y = f(x)$, <strong>troque $x$ por $y$</strong> e <strong>isole $y$</strong>. O resultado é $f^{−1}(x)$.',
      gancho: { titulo: 'Celsius e Fahrenheit', texto: 'Para converter Celsius em Fahrenheit: $F = 1,8C + 32$. A conversão <strong>inversa</strong> (de Fahrenheit para Celsius) é $C = {F − 32|1,8}$. Cada fórmula desfaz a outra.', mini: ['A inversa de $f(x) = x + 7$ é:', ['$x − 7$', '$7 − x$', '$x + 7$', '${1|x + 7}$'], 0, 'Para desfazer a soma de $7$, subtraia $7$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Quando existe e como achar', g2(`<div>
              ${checks(['<strong>$f: A → B$ tem inversa $f^{−1}: B → A$ se, e somente se, $f$ for bijetora.</strong>', '<strong>Relação:</strong> $f(x) = y ⇔ f^{−1}(y) = x$.', '<strong>Composição:</strong> $f^{−1}(f(x)) = x$ e $f(f^{−1}(y)) = y$.', '<strong>Como achar:</strong> $y = f(x)$ ⇒ troque $x ↔ y$ ⇒ isole $y$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$f(x) = 2x + 3$: $y = 2x + 3$ ⇒ troque: $x = 2y + 3$ ⇒ $y = {x − 3|2}$.</p>
              <p style="font-size:.92rem;">$f^{−1}(x) = {x − 3|2}$.</p>`, 'primary'))],
        ['Teoria · mais exemplos', 'Funções comuns', g2(`<div>
              ${tbl(['$f(x)$', '$f^{−1}(x)$'], [['$x + 4$', '$x − 4$'], ['$3x$', '${x|3}$'], ['${x|2} − 1$', '$2x + 2$'], ['$x³$', 'raiz cúbica de $x$'], ['$2^{x}$', '$log_{2} x$']])}
            </div>`, callout('Cuidado', '$f^{−1}(x)$ <strong>não</strong> é ${1|f(x)}$. O “−1” indica função inversa, não expoente.', 'primary'))]
      ],
      exemplos: [
        ['Achar a inversa', 'Determine a inversa de $f(x) = 5x − 10$.', [['Escreva', '$y = 5x − 10$.'], ['Troque', '$x = 5y − 10$.'], ['Isole', '$y = {x + 10|5}$.']], '$f^{−1}(x) = {x + 10|5} = {x|5} + 2$.'],
        ['Verificar', 'Verifique que $f(x) = 2x + 3$ e $g(x) = {x − 3|2}$ são inversas.', [['$f(g(x))$', '$2 · {x − 3|2} + 3 = x − 3 + 3 = x$.'], ['$g(f(x))$', '${2x + 3 − 3|2} = x$.']], 'Como $f(g(x)) = x$ e $g(f(x)) = x$, são <strong>inversas</strong>.']
      ],
      pratique: [
        ['Inversa', 'A inversa de $f(x) = 4x$ é:', ['$4x$', '${x|4}$', '$x − 4$', '${4|x}$'], 1, '$y = 4x$ ⇒ $x = 4y$ ⇒ $y = {x|4}$. <strong>Alternativa B.</strong>'],
        ['Inversa', 'A inversa de $f(x) = x − 6$ é:', ['$x + 6$', '$6 − x$', '$x − 6$', '${1|x − 6}$'], 0, 'Para desfazer a subtração, some $6$. <strong>Alternativa A.</strong>'],
        ['Valor', 'Se $f(x) = 3x − 1$, então $f^{−1}(8)$ vale:', ['$3$', '$7$', '$23$', '$1$'], 0, '$f^{−1}(8) = x$ tal que $3x − 1 = 8$ ⇒ $x = 3$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Conversão de temperatura', 'A fórmula $F = 1,8C + 32$ converte Celsius em Fahrenheit. A conversão de $104$ °F para °C é:', ['$30$ °C', '$32$ °C', '$40$ °C', '$44$ °C', '$75$ °C'], 2, '$C = {104 − 32|1,8} = 40$. <strong>Alternativa C.</strong>'],
      cuidados: [['Confundir inversa com ${1|f}$', '$f^{−1}$ é função inversa, não o inverso multiplicativo.'], ['Trocar sem isolar', 'Depois de trocar, isole $y$.'], ['Inversa de não bijetora', 'Sem bijeção não há inversa (a menos que se restrinja).'], ['Verificar não é opcional', 'Teste $f(f^{−1}(x)) = x$.']],
      quiz: [
        { q: 'Uma função tem inversa se for:', o: ['bijetora', 'constante', 'só injetora', 'só sobrejetora'], a: 0 },
        { q: 'A inversa de $f(x) = x + 9$ é:', o: ['$9 − x$', '$x − 9$', '$9x$', '${x|9}$'], a: 1 },
        { q: '$f(f^{−1}(x))$ vale:', o: ['$0$', '$1$', '$x$', '$f(x)^{2}$'], a: 2 },
        { q: 'A inversa de $f(x) = 2x$ é:', o: ['${x|2}$', '$2x$', '$x − 2$', '$x + 2$'], a: 0 }
      ],
      sintese: [['Existência', 'Só funções bijetoras têm inversa.'], ['Cálculo', 'Troque x por y e isole y.'], ['Verificação', 'f(f⁻¹(x)) = x.']],
      msg: 'Na próxima aula: o gráfico da função inversa.'
    },
    // ------------------------------------------------------------ aula 98
    {
      slug: 'grafico-da-funcao-inversa', titulo: 'Gráfico da função inversa',
      h1: `Gráfico da função ${co('primary')}inversa:</span> simetria em torno de y = x`,
      sub: 'Os gráficos de f e de f⁻¹ são simétricos em relação à reta y = x (a bissetriz dos quadrantes ímpares). Trocar x por y é refletir o gráfico nessa reta.',
      badges: [['simetria'], ['y = x', 'growth'], ['(a, b) ↔ (b, a)', 'decay']], color: 'primary',
      roteiro: ['Refletindo o gráfico.', [['Pontos', '(a, b) vira (b, a)', 'target'], ['Reta y = x', 'o espelho', 'scale'], ['Desenhar', 'f⁻¹ a partir de f', 'chart'], ['Reconhecer', 'duas funções inversas', 'book'], ['Domínio e imagem', 'trocam de papel', 'bulb']]],
      objetivos: ['Reconhecer a <strong>simetria</strong> dos gráficos de $f$ e $f^{−1}$ em relação a $y = x$.', 'Construir o gráfico de $f^{−1}$ <strong>a partir do de $f$</strong>.', 'Relacionar <strong>domínio e imagem</strong> de $f$ e de $f^{−1}$.'],
      dica: 'Se $(a, b)$ está no gráfico de $f$, então $(b, a)$ está no gráfico de $f^{−1}$.',
      gancho: { titulo: 'O espelho diagonal', texto: 'Dobre uma folha com um gráfico ao longo da reta $y = x$: o gráfico de $f$ cai exatamente sobre o de $f^{−1}$. É o efeito de “trocar $x$ e $y$”.', mini: ['Se $(2, 5)$ está no gráfico de $f$, então no de $f^{−1}$ está:', ['$(2, 5)$', '$(5, 2)$', '$(−2, −5)$', '$(−5, −2)$'], 1, 'As coordenadas trocam de lugar. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · simetria', 'Pontos que trocam', g2(`<div>
              ${checks(['<strong>$(a, b) ∈ f ⇔ (b, a) ∈ f^{−1}$.</strong>', 'Os gráficos são <strong>simétricos em relação à reta $y = x$</strong>.', '<strong>Domínio e imagem trocam:</strong> $D(f^{−1}) = Im(f)$ e $Im(f^{−1}) = D(f)$.', 'Pontos sobre $y = x$ ficam fixos: $f(a) = a ⇒ f^{−1}(a) = a$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$f(x) = 2^{x}$ passa por $(0, 1)$, $(1, 2)$, $(3, 8)$.</p>
              <p style="font-size:.92rem;">$f^{−1}(x) = log_{2} x$ passa por $(1, 0)$, $(2, 1)$, $(8, 3)$.</p>`, 'primary'))],
        ['Teoria · simulador', 'Veja a simetria', g2(`<div>
              ${checks(['Escolha uma função e observe $f$ (azul), $f^{−1}$ (vermelho) e a reta $y = x$ (cinza).', 'Compare o ponto marcado: coordenadas trocadas.', 'A exponencial e o logaritmo de mesma base são inversas.', 'A cúbica e a raiz cúbica também.'], '.95rem')}
            </div>`, callout('Reconhecer', 'Para saber se dois gráficos são de funções inversas, verifique se um é o <strong>reflexo</strong> do outro na reta $y = x$.', 'primary'))]
      ],
      exemplos: [
        ['Pontos', 'O gráfico de $f$ passa por $(1, 4)$, $(2, 7)$ e $(3, 10)$. Que pontos pertencem ao gráfico de $f^{−1}$?', [['Trocar coordenadas', '$(4, 1)$, $(7, 2)$, $(10, 3)$.']], 'Pontos de $f^{−1}$: $(4, 1)$, $(7, 2)$ e $(10, 3)$.'],
        ['Domínio e imagem', 'Se $f(x) = 2^{x}$ ($D = ℝ$, $Im = ℝ_{>0}$), qual o domínio e a imagem de $f^{−1}$?', [['Trocam de papel', '$D(f^{−1}) = Im(f)$.']], '$D(f^{−1}) = ℝ_{>0}$ e $Im(f^{−1}) = ℝ$.']
      ],
      widget: { titulo: 'f e sua inversa', html: w98.html, js: w98.js },
      pratique: [
        ['Pontos', 'Se $(−1, 3)$ está no gráfico de $f$, então $f^{−1}(3)$ vale:', ['$3$', '$−1$', '${1|3}$', '$−3$'], 1, '$(3, −1)$ está em $f^{−1}$. <strong>Alternativa B.</strong>'],
        ['Simetria', 'Os gráficos de $f$ e $f^{−1}$ são simétricos em relação:', ['ao eixo $x$', 'ao eixo $y$', 'à reta $y = x$', 'à origem'], 2, 'Reta $y = x$. <strong>Alternativa C.</strong>'],
        ['Domínio', 'Se $Im(f) = [1, +∞)$, então $D(f^{−1})$ é:', ['$ℝ$', '$[1, +∞)$', '$(−∞, 1]$', '$(1, +∞)$'], 1, 'Domínio da inversa = imagem de $f$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Conferindo o gráfico', 'Dois gráficos são simétricos em relação à reta $y = x$. Isso significa que as funções correspondentes são:', ['iguais', 'opostas', 'inversas uma da outra', 'constantes', 'periódicas'], 2, 'Simetria em $y = x$ caracteriza inversas. <strong>Alternativa C.</strong>'],
      cuidados: [['Refletir no eixo x ou y', 'A reflexão é na reta $y = x$.'], ['Esquecer de trocar domínio e imagem', 'Eles trocam de papel.'], ['Inversa não existente', 'Só para funções bijetoras.'], ['Escalas diferentes nos eixos', 'Use a mesma escala para ver a simetria.']],
      quiz: [
        { q: 'O gráfico de $f^{−1}$ é o reflexo do de $f$ em:', o: ['$y = 0$', '$x = 0$', '$y = x$', '$y = −x$'], a: 2 },
        { q: 'Se $(a, b) ∈ f$, então $(b, a) ∈$:', o: ['$f$', '$f^{−1}$', '$f ∘ f$', 'eixo $x$'], a: 1 },
        { q: '$D(f^{−1})$ é igual a:', o: ['$D(f)$', '$Im(f)$', '$ℝ$', '$∅$'], a: 1 },
        { q: 'A inversa de $2^{x}$ é:', o: ['$x²$', '$log_{2} x$', '$2x$', '${1|2^{x}}$'], a: 1 }
      ],
      sintese: [['Simetria', 'Gráficos de f e f⁻¹ espelhados em y = x.'], ['Pontos', '(a, b) ↔ (b, a).'], ['D e Im', 'Trocam de papel.']],
      msg: 'Na próxima aula: problemas com função inversa.'
    }
  ]
});
