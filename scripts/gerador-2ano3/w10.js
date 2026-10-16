// Módulo 10 · Matemática · 2ª série · 3º trimestre — Propriedades das funções (aulas 92, 93, 94 e 95 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

// diagrama de flechas: A = {1,2,3}, B = {a,b,c}
const flechas = (pares, extraB = []) => {
  const A = [1, 2, 3], B = ['a', 'b', 'c', ...extraB];
  const ya = i => 30 + i * 30, yb = i => 30 + i * 30 * (3 / B.length) * 1.0;
  return svg(240, 130, `<ellipse cx="60" cy="63" rx="32" ry="58" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/><ellipse cx="180" cy="63" rx="32" ry="58" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="2"/>` +
    A.map((a, i) => `<text x="56" y="${ya(i) + 4}" font-size="14" fill="var(--ink)">${a}</text>`).join('') +
    B.map((b, i) => `<text x="176" y="${yb(i) + 4}" font-size="14" fill="var(--ink)">${b}</text>`).join('') +
    pares.map(([i, j]) => `<line x1="72" y1="${ya(i)}" x2="168" y2="${yb(j)}" stroke="var(--decay)" stroke-width="2"/>`).join(''), '250px');
};

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/propriedades-das-funcoes/',
  titulo: 'Propriedades das funções', accent: 'primary', icon: 'grid', key: 'm2w10', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 92 a 95 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Revisão do 1º ano: domínio, contradomínio e imagem de uma função.'],
  aulas: [
    // ------------------------------------------------------------ aula 92
    {
      slug: 'propriedades-de-funcoes-i-sobrejetora', titulo: 'Propriedades de funções I: função sobrejetora',
      h1: `Função ${co('primary')}sobrejetora:</span> todo elemento é atingido`,
      sub: 'Uma função é sobrejetora quando a imagem é igual ao contradomínio: nenhum elemento do contradomínio fica “sem par”. A propriedade depende do contradomínio escolhido.',
      badges: [['Im = CD'], ['sem sobras', 'growth'], ['depende do CD', 'decay']], color: 'primary',
      roteiro: ['Imagem, contradomínio e sobrejetividade.', [['Revisão', 'D, CD e Im', 'book'], ['Sobrejetora', 'Im = CD', 'target'], ['Diagrama', 'setas que chegam em todos', 'chart'], ['Gráfico', 'reta horizontal toca', 'scale'], ['Exemplos', 'x² e 2x + 1', 'bulb']]],
      objetivos: ['Recordar <strong>domínio, contradomínio e imagem</strong>.', 'Reconhecer uma função <strong>sobrejetora</strong> por diagrama, tabela e gráfico.', 'Decidir se uma função é sobrejetora <strong>algebricamente</strong>.'],
      dica: 'Sobrejetora: <strong>Im(f) = CD(f)</strong>. Teste prático: toda reta horizontal $y = k$ ($k$ no CD) <strong>toca</strong> o gráfico.',
      gancho: { titulo: 'Cadeiras e alunos', texto: 'Em uma sala há $3$ alunos e $3$ cadeiras. Se cada aluno escolhe uma cadeira e <strong>nenhuma cadeira fica vazia</strong>, dizemos que a escolha “cobre todas as cadeiras”: é uma função sobrejetora dos alunos nas cadeiras.', mini: ['Uma função é sobrejetora quando:', ['a imagem é igual ao contradomínio', 'a imagem tem 1 elemento', 'o domínio é vazio', 'dois elementos têm a mesma imagem'], 0, 'Im = CD. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Sobrejetividade', g2(`<div>
              ${checks(['<strong>$f: A → B$ é sobrejetora</strong> se, para todo $y ∈ B$, existe $x ∈ A$ com $f(x) = y$. Ou seja, $Im(f) = B$.', '<strong>$f(x) = 2x + 1$, de $ℝ$ em $ℝ$:</strong> para todo $y$, $x = {y − 1|2}$ ✓ ⇒ sobrejetora.', '<strong>$f(x) = x²$, de $ℝ$ em $ℝ$:</strong> $y = −4$ não é atingido ⇒ <strong>não</strong> é sobrejetora.', 'Mas $f(x) = x²$ de $ℝ$ em $ℝ_{≥0}$ <strong>é</strong> sobrejetora: o contradomínio foi restringido.'], '.95rem')}
            </div>`, `<div>${flechas([[0, 0], [1, 1], [2, 2]])}<p class="hint" style="text-align:center;">Todos os elementos de B recebem seta: sobrejetora.</p></div>`)],
        ['Teoria · como testar', 'Algebricamente e pelo gráfico', g2(`<div>
              ${checks(['<strong>Algébrico:</strong> pegue $y$ do contradomínio e resolva $f(x) = y$ para $x$; se sempre houver solução no domínio, é sobrejetora.', '<strong>Gráfico:</strong> toda reta horizontal $y = k$ com $k ∈ CD$ deve cortar o gráfico pelo menos uma vez.', '<strong>Diagrama:</strong> toda “bolinha” do conjunto de chegada recebe pelo menos uma seta.', 'Funções afins ($a ≠ 0$) de $ℝ$ em $ℝ$ são sempre sobrejetoras.'], '.95rem')}
            </div>`, callout('Dica', 'Se quiser tornar $f$ sobrejetora, <strong>reduza o contradomínio</strong> à imagem.', 'primary'))]
      ],
      exemplos: [
        ['Diagrama', 'Se $A = \\{1, 2, 3\\}$, $B = \\{a, b\\}$ e $f(1) = a$, $f(2) = a$, $f(3) = b$, $f$ é sobrejetora?', [['Imagem', '$Im(f) = \\{a, b\\}$.'], ['Compare', '$Im(f) = B$.']], 'Sim, <strong>sobrejetora</strong> (todos os elementos de $B$ são atingidos).'],
        ['Algébrico', '$f: ℝ → ℝ$, $f(x) = x + 5$. É sobrejetora?', [['Dado $y$', '$x + 5 = y$ ⇒ $x = y − 5$ ∈ ℝ.'], ['Conclusão', 'Sempre existe $x$.']], 'Sim, é <strong>sobrejetora</strong>.']
      ],
      pratique: [
        ['Imagem', '$f: ℝ → ℝ$, $f(x) = x²$ NÃO é sobrejetora porque:', ['$Im$ não inclui números negativos', '$f$ não é definida em $0$', '$f$ é crescente', '$f$ é constante'], 0, 'Valores negativos do CD não são atingidos. <strong>Alternativa A.</strong>'],
        ['Afim', 'Qual função de $ℝ$ em $ℝ$ é sobrejetora?', ['$f(x) = x²$', '$f(x) = 3x − 2$', '$f(x) = |x|$', '$f(x) = 5$'], 1, 'Afim com $a ≠ 0$. <strong>Alternativa B.</strong>'],
        ['Contradomínio', '$f: ℝ → ℝ_{≥0}$, $f(x) = x²$ é:', ['sobrejetora', 'não sobrejetora', 'decrescente', 'constante'], 0, '$Im = [0, +∞) = CD$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Cobrindo todas as vagas', 'Uma empresa tem $4$ vagas e distribui $6$ candidatos aprovados entre elas, de modo que <strong>todas as vagas sejam preenchidas</strong>. A distribuição, como função dos candidatos nas vagas, é:', ['injetora', 'sobrejetora', 'constante', 'não é função', 'bijetora necessariamente'], 1, 'Todas as vagas (CD) são atingidas: sobrejetora. <strong>Alternativa B.</strong>'],
      cuidados: [['Sobrejetora independe do domínio?', 'Depende do <strong>contradomínio</strong> declarado.'], ['Imagem × contradomínio', 'A imagem pode ser menor que o contradomínio.'], ['Reta que não toca', 'Se alguma reta horizontal (no CD) não toca o gráfico, não é sobrejetora.'], ['Constante', 'Função constante só é sobrejetora se o CD tiver um elemento.']],
      quiz: [
        { q: 'Sobrejetora significa:', o: ['Im = CD', 'D = CD', 'Im = D', 'D = vazio'], a: 0 },
        { q: '$f: ℝ → ℝ$, $f(x) = 4x$ é:', o: ['sobrejetora', 'não sobrejetora', 'constante', 'não é função'], a: 0 },
        { q: '$f: ℝ → ℝ$, $f(x) = x²$ é:', o: ['sobrejetora', 'não sobrejetora', 'afim', 'bijetora'], a: 1 },
        { q: 'Para tornar $x²$ sobrejetora, o CD deve ser:', o: ['$ℝ$', '$ℝ_{<0}$', '$[0, +∞)$', '$ℤ$'], a: 2 }
      ],
      sintese: [['Sobrejetora', 'Im = CD.'], ['Teste', 'Reta horizontal no CD sempre toca o gráfico.'], ['CD', 'Mudar o contradomínio muda a propriedade.']],
      msg: 'Na próxima aula: função injetora.'
    },
    // ------------------------------------------------------------ aula 93
    {
      slug: 'propriedades-de-funcoes-ii-injetora', titulo: 'Propriedades de funções II: função injetora',
      h1: `Função ${co('primary')}injetora:</span> imagens diferentes para x diferentes`,
      sub: 'Uma função é injetora quando elementos diferentes do domínio têm imagens diferentes: nunca duas setas chegam ao mesmo ponto. No gráfico, nenhuma reta horizontal corta a curva mais de uma vez.',
      badges: [['x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂)'], ['sem repetições', 'growth'], ['teste da reta', 'decay']], color: 'primary',
      roteiro: ['Imagens que não se repetem.', [['Definição', 'injetora', 'target'], ['Diagrama', 'no máximo uma seta por B', 'chart'], ['Gráfico', 'reta horizontal corta 1 vez', 'scale'], ['Algébrico', 'f(x₁) = f(x₂) ⇒ x₁ = x₂', 'book'], ['Exemplos', 'afins e quadrática', 'bulb']]],
      objetivos: ['Reconhecer uma função <strong>injetora</strong> por diagrama, tabela e gráfico.', 'Usar o <strong>teste da reta horizontal</strong>.', 'Verificar <strong>algebricamente</strong>: $f(x_{1}) = f(x_{2}) ⇒ x_{1} = x_{2}$.'],
      dica: 'Injetora: <strong>não repete imagens</strong>. No gráfico: toda reta horizontal toca a curva <strong>no máximo uma vez</strong>.',
      gancho: { titulo: 'Um assento para cada aluno', texto: 'Se cada aluno ocupa um assento <strong>diferente</strong> (nunca dois alunos no mesmo assento), a relação “aluno → assento” é injetora. Pode sobrar assento vazio, mas não pode haver dois alunos no mesmo lugar.', mini: ['Uma função é injetora quando:', ['duas setas chegam no mesmo ponto', 'cada ponto do CD recebe no máximo uma seta', 'todos os pontos do CD recebem seta', 'o domínio é um ponto'], 1, 'Elementos diferentes, imagens diferentes. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Injetividade', g2(`<div>
              ${checks(['<strong>$f$ é injetora</strong> se $x_{1} ≠ x_{2} ⇒ f(x_{1}) ≠ f(x_{2})$ (equivale a: $f(x_{1}) = f(x_{2}) ⇒ x_{1} = x_{2}$).', '$f(x) = 2x + 1$ é injetora: $2x_{1} + 1 = 2x_{2} + 1 ⇒ x_{1} = x_{2}$.', '$f(x) = x²$ em $ℝ$ <strong>não</strong> é injetora: $f(−2) = f(2) = 4$.', '$f(x) = x²$ em $ℝ_{≥0}$ <strong>é</strong> injetora.'], '.95rem')}
            </div>`, `<div>${flechas([[0, 0], [1, 2]], [])}<p class="hint" style="text-align:center;">Cada elemento de B recebe no máximo uma seta: injetora (sobra o b).</p></div>`)],
        ['Teoria · testes', 'Gráfico e tabela', g2(`<div>
              ${checks(['<strong>Reta horizontal:</strong> se alguma reta $y = k$ corta o gráfico em <strong>2 ou mais pontos</strong>, $f$ <strong>não</strong> é injetora.', '<strong>Tabela:</strong> se a coluna de $f(x)$ repete um valor, não é injetora.', 'Funções <strong>estritamente crescentes</strong> ou <strong>estritamente decrescentes</strong> são injetoras.', 'Exponencial e logarítmica são injetoras.'], '.95rem')}
            </div>`, callout('Dica', 'Para tornar $x²$ injetora, restrinja o <strong>domínio</strong> a $x ≥ 0$ (ou $x ≤ 0$).', 'primary'))]
      ],
      exemplos: [
        ['Verificando', 'Mostre que $f(x) = 3x − 4$ é injetora.', [['Suponha', '$f(x_{1}) = f(x_{2})$.'], ['Desenvolva', '$3x_{1} − 4 = 3x_{2} − 4$ ⇒ $x_{1} = x_{2}$.']], '$f$ é <strong>injetora</strong>.'],
        ['Contra-exemplo', '$f(x) = |x|$ é injetora em $ℝ$?', [['Teste', '$f(−3) = 3$ e $f(3) = 3$.'], ['Conclusão', 'Imagens iguais para $x$ diferentes.']], '<strong>Não</strong> é injetora.']
      ],
      pratique: [
        ['Injetora?', 'Qual função de $ℝ$ em $ℝ$ é injetora?', ['$f(x) = x²$', '$f(x) = |x|$', '$f(x) = 5x$', '$f(x) = 7$'], 2, 'Afim não constante. <strong>Alternativa C.</strong>'],
        ['Tabela', 'Em $x: 1, 2, 3$ e $f(x): 4, 4, 6$, a função:', ['é injetora', 'não é injetora', 'é constante', 'não é função'], 1, 'Valor $4$ repete. <strong>Alternativa B.</strong>'],
        ['Gráfico', 'Uma parábola em $ℝ$ não é injetora porque:', ['é curva', 'uma reta horizontal a corta em dois pontos', 'é crescente', 'passa pela origem'], 1, 'Teste da reta horizontal. <strong>Alternativa B.</strong>']
      ],
      enem: ['Senhas e usuários', 'Um sistema associa a cada usuário uma senha, e não permite que dois usuários tenham a mesma senha. Como função dos usuários nas senhas, a associação é:', ['sobrejetora', 'injetora', 'constante', 'não é função', 'decrescente'], 1, 'Usuários diferentes têm senhas diferentes: injetora. <strong>Alternativa B.</strong>'],
      cuidados: [['Injetora ≠ sobrejetora', 'Injetora: não repete; sobrejetora: não sobra.'], ['Teste só em um valor', 'Basta <strong>um</strong> par repetido para negar a injetividade.'], ['Esquecer o domínio', 'Restringir o domínio pode tornar a função injetora.'], ['Crescente não estrita', 'Constante em trechos pode repetir valores.']],
      quiz: [
        { q: 'Injetora significa:', o: ['imagens diferentes para elementos diferentes', 'Im = CD', 'D = CD', 'duas setas no mesmo ponto'], a: 0 },
        { q: '$f(x) = x³$ em $ℝ$ é:', o: ['injetora', 'não injetora', 'constante', 'não função'], a: 0 },
        { q: 'Uma reta horizontal que corta a curva em dois pontos mostra que $f$:', o: ['é injetora', 'não é injetora', 'é sobrejetora', 'é crescente'], a: 1 },
        { q: '$f(x) = x²$ em $[0, +∞)$ é:', o: ['injetora', 'não injetora', 'constante', 'decrescente'], a: 0 }
      ],
      sintese: [['Injetora', 'x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂).'], ['Teste', 'Reta horizontal corta no máximo uma vez.'], ['Domínio', 'Restringir o domínio pode torná-la injetora.']],
      msg: 'Na próxima aula: função bijetora.'
    },
    // ------------------------------------------------------------ aula 94
    {
      slug: 'propriedades-de-funcoes-iii-bijetora', titulo: 'Propriedades de funções III: função bijetora',
      h1: `Função ${co('primary')}bijetora:</span> injetora e sobrejetora ao mesmo tempo`,
      sub: 'Uma função é bijetora quando é injetora e sobrejetora: cada elemento do contradomínio é imagem de exatamente um elemento do domínio. Só as bijetoras têm função inversa.',
      badges: [['injetora + sobrejetora'], ['1 para 1', 'growth'], ['tem inversa', 'decay']], color: 'primary',
      roteiro: ['A correspondência perfeita.', [['Definição', 'bijetora', 'target'], ['Diagrama', 'uma seta por elemento', 'chart'], ['Gráfico', 'reta horizontal corta 1 vez', 'scale'], ['Contagem', 'n(A) = n(B)', 'book'], ['Inversa', 'só bijetoras', 'bulb']]],
      objetivos: ['Definir <strong>função bijetora</strong>.', 'Classificar funções em <strong>sobrejetora, injetora, bijetora ou nenhuma</strong>.', 'Relacionar bijetividade e <strong>existência da inversa</strong>.'],
      dica: 'Bijetora = injetora <strong>e</strong> sobrejetora. Em conjuntos finitos, exige $n(A) = n(B)$.',
      gancho: { titulo: 'Um par de sapatos para cada pé', texto: 'Em um baile, cada convidado recebe <strong>exatamente um</strong> crachá, e todo crachá é usado. A correspondência convidado ↔ crachá é perfeita: é uma bijeção.', mini: ['Bijetora é a função que é:', ['só injetora', 'só sobrejetora', 'injetora e sobrejetora', 'nenhuma das duas'], 2, 'Bijetora = injetora + sobrejetora. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Correspondência biunívoca', g2(`<div>
              ${checks(['<strong>Bijetora:</strong> para todo $y ∈ B$ existe <strong>um único</strong> $x ∈ A$ com $f(x) = y$.', '$f(x) = 2x + 1$ de $ℝ$ em $ℝ$ é bijetora (injetora e sobrejetora).', '$f(x) = x²$ de $ℝ$ em $ℝ$: nem injetora nem sobrejetora.', '$f(x) = x²$ de $[0, +∞)$ em $[0, +∞)$: <strong>bijetora</strong>.'], '.95rem')}
            </div>`, `<div>${flechas([[0, 1], [1, 2], [2, 0]])}<p class="hint" style="text-align:center;">Uma seta saindo de cada elemento e chegando em cada elemento: bijetora.</p></div>`)],
        ['Teoria · classificação', 'Quatro possibilidades', g2(`<div>
              ${tbl(['Injetora?', 'Sobrejetora?', 'Nome', 'Exemplo'], [['sim', 'sim', 'bijetora', '$2x + 1$ em ℝ → ℝ'], ['sim', 'não', 'só injetora', '$2^{x}$ em ℝ → ℝ'], ['não', 'sim', 'só sobrejetora', '$x³ − x$ em ℝ → ℝ'], ['não', 'não', 'nenhuma', '$x²$ em ℝ → ℝ']])}
            </div>`, callout('Conta rápida', 'Se $A$ e $B$ são finitos e $f: A → B$ é bijetora, então $n(A) = n(B)$. Existem $n!$ bijeções entre dois conjuntos com $n$ elementos.', 'primary'))]
      ],
      exemplos: [
        ['Classificando', '$f: ℝ → ℝ$, $f(x) = 5x − 3$. Classifique.', [['Injetora?', '$5x_{1} − 3 = 5x_{2} − 3 ⇒ x_{1} = x_{2}$ ✓.'], ['Sobrejetora?', '$x = {y + 3|5}$ existe para todo $y$ ✓.']], '$f$ é <strong>bijetora</strong>.'],
        ['Contagem', 'Quantas funções bijetoras existem de $A = \\{1, 2, 3\\}$ em $B = \\{a, b, c\\}$?', [['Primeiro elemento', '$3$ opções.'], ['Segundo', '$2$ opções.'], ['Terceiro', '$1$ opção.']], '$3 · 2 · 1 = 6$ funções.']
      ],
      pratique: [
        ['Classificação', '$f: ℝ → ℝ$, $f(x) = x³$ é:', ['bijetora', 'só injetora', 'só sobrejetora', 'nenhuma'], 0, 'Injetora e sobrejetora. <strong>Alternativa A.</strong>'],
        ['Classificação', '$f: ℝ → ℝ$, $f(x) = 2^{x}$ é:', ['bijetora', 'só injetora', 'só sobrejetora', 'nenhuma'], 1, 'Injetora, mas não atinge valores $≤ 0$. <strong>Alternativa B.</strong>'],
        ['Contagem', 'Quantas bijeções existem entre dois conjuntos de $4$ elementos?', ['$4$', '$8$', '$16$', '$24$'], 3, '$4! = 24$. <strong>Alternativa D.</strong>']
      ],
      enem: ['Pareando equipes', 'Em um torneio, $5$ equipes serão pareadas, uma a uma, com $5$ campos, sem sobras e sem repetição. Quantas distribuições são possíveis?', ['$5$', '$25$', '$60$', '$120$', '$3 125$'], 3, '$5! = 120$. <strong>Alternativa D.</strong>'],
      cuidados: [['Bijetora sem injetora', 'É preciso <strong>as duas</strong> propriedades.'], ['Conjuntos finitos', 'Se $n(A) ≠ n(B)$, <strong>não existe</strong> bijeção.'], ['Mudar domínio e CD', 'Restringir domínio e CD pode tornar uma função bijetora.'], ['Confundir com inversa', 'Bijetora <strong>tem</strong> inversa; ter inversa não torna toda função bijetora.']],
      quiz: [
        { q: 'Bijetora é:', o: ['só injetora', 'injetora e sobrejetora', 'só sobrejetora', 'constante'], a: 1 },
        { q: 'Se $f: A → B$ é bijetora e $n(A) = 6$, então $n(B)$ vale:', o: ['$3$', '$6$', '$12$', '$36$'], a: 1 },
        { q: 'Qual função tem inversa?', o: ['a bijetora', 'a não injetora', 'a constante', 'qualquer'], a: 0 },
        { q: '$f(x) = 3x$ de $ℝ$ em $ℝ$ é:', o: ['bijetora', 'só injetora', 'só sobrejetora', 'nenhuma'], a: 0 }
      ],
      sintese: [['Bijetora', 'Injetora e sobrejetora.'], ['Contagem', 'n(A) = n(B); n! bijeções.'], ['Inversa', 'Só as bijetoras têm função inversa.']],
      msg: 'Na próxima aula: problemas com sobrejetoras, injetoras e bijetoras.'
    },
    // ------------------------------------------------------------ aula 95
    {
      slug: 'propriedades-de-funcoes-resolucao-de-problemas', titulo: 'Propriedades de funções: resolução de problemas',
      h1: `Propriedades das funções: ${co('primary')}problemas</span>`,
      sub: 'Reunimos sobrejetora, injetora e bijetora em problemas de classificação, de contagem de funções e de modelagem. Gráficos, tabelas e diagramas aparecem juntos.',
      badges: [['classificar'], ['contar', 'growth'], ['gráficos', 'decay']], color: 'primary',
      roteiro: ['Aplicando as três propriedades.', [['Classificar', 'em gráficos e tabelas', 'chart'], ['Contagem', 'funções entre conjuntos', 'book'], ['Ajustar D e CD', 'para ter a propriedade', 'scale'], ['Modelagem', 'situações reais', 'bulb'], ['Revisão', 'o que vale para quê', 'target']]],
      objetivos: ['<strong>Classificar</strong> funções dadas por gráfico, tabela ou lei.', '<strong>Contar</strong> funções, injeções e bijeções entre conjuntos finitos.', '<strong>Ajustar</strong> domínio e contradomínio para obter a propriedade desejada.'],
      dica: 'Contagem em conjuntos finitos: funções $A → B$: $n(B)^{n(A)}$. Injetoras: arranjos. Bijetoras (mesmo tamanho): $n!$.',
      gancho: { titulo: 'Quantas funções existem?', texto: 'De $A = \\{1, 2\\}$ em $B = \\{a, b, c\\}$: cada elemento de $A$ pode ir para qualquer um dos $3$ elementos de $B$. São $3 · 3 = 9$ funções. Quantas são injetoras? $3 · 2 = 6$.', mini: ['De um conjunto de $3$ elementos em outro de $2$, existem funções:', ['$6$', '$8$', '$9$', '$5$'], 1, 'Cada um dos $3$ elementos tem $2$ escolhas: $2³ = 8$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · contagem', 'Quantas funções?', g2(`<div>
              ${checks(['<strong>Funções</strong> de $A$ em $B$: $n(B)^{n(A)}$.', '<strong>Injetoras</strong> (com $n(A) ≤ n(B)$): $n(B) · (n(B) − 1) · … $ ($n(A)$ fatores).', '<strong>Bijetoras</strong> (com $n(A) = n(B) = n$): $n!$.', '<strong>Sobrejetoras</strong>: exigem $n(A) ≥ n(B)$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              ${tbl(['$n(A)$', '$n(B)$', 'funções', 'injetoras'], [['$2$', '$3$', '$9$', '$6$'], ['$3$', '$3$', '$27$', '$6$ (bijetoras)'], ['$3$', '$2$', '$8$', '$0$']])}`, 'primary'))],
        ['Teoria · ajustando', 'Domínio e contradomínio', g2(`<div>
              ${checks(['Para <strong>injetora</strong>: restrinja o <strong>domínio</strong> (ex.: $x² $ em $x ≥ 0$).', 'Para <strong>sobrejetora</strong>: restrinja o <strong>contradomínio</strong> à imagem.', 'Para <strong>bijetora</strong>: faça as duas coisas.', 'Exemplo: $f(x) = x² + 1$, de $[0, +∞)$ em $[1, +∞)$, é bijetora.'], '.95rem')}
            </div>`, callout('Resumo', 'Injetora ⇒ olhe o <strong>domínio</strong> (repetições). Sobrejetora ⇒ olhe o <strong>contradomínio</strong> (sobras).', 'primary'))]
      ],
      exemplos: [
        ['Ajuste', 'Para que $f(x) = x² + 1$ seja bijetora de $A$ em $B$, quais podem ser $A$ e $B$?', [['Injetora', '$A = [0, +∞)$.'], ['Sobrejetora', '$B = Im(f) = [1, +∞)$.']], '$A = [0, +∞)$ e $B = [1, +∞)$.'],
        ['Contagem', 'Quantas funções injetoras existem de $\\{1, 2, 3\\}$ em $\\{a, b, c, d, e\\}$?', [['Primeiro', '$5$ opções.'], ['Segundo', '$4$ opções.'], ['Terceiro', '$3$ opções.']], '$5 · 4 · 3 = 60$.']
      ],
      pratique: [
        ['Total de funções', 'De $\\{1, 2, 3, 4\\}$ em $\\{a, b\\}$, existem quantas funções?', ['$8$', '$12$', '$16$', '$24$'], 2, '$2^{4} = 16$. <strong>Alternativa C.</strong>'],
        ['Injetoras', 'De $\\{1, 2\\}$ em $\\{a, b, c, d\\}$, quantas injetoras?', ['$6$', '$8$', '$12$', '$16$'], 2, '$4 · 3 = 12$. <strong>Alternativa C.</strong>'],
        ['Ajuste', 'Para que $f(x) = x²$ seja injetora, o domínio pode ser:', ['$ℝ$', '$[0, +∞)$', '$[−1, 1]$', '$ℤ$'], 1, 'Crescente em $[0, +∞)$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Escala de plantão', 'Quatro enfermeiros serão distribuídos em $4$ plantões, um por plantão, sem repetir. De quantas maneiras isso pode ser feito?', ['$4$', '$8$', '$16$', '$24$', '$256$'], 3, '$4! = 24$. <strong>Alternativa D.</strong>'],
      cuidados: [['Contar funções com $n(A)^{n(B)}$', 'O certo é $n(B)^{n(A)}$: cada elemento de $A$ escolhe um elemento de $B$.'], ['Injetora com $n(A) > n(B)$', 'Impossível: não há injetoras (princípio das gavetas).'], ['Ajustar o CD errado', 'Sobrejetora exige CD = Imagem.'], ['Misturar propriedades', 'Cada uma tem seu critério.']],
      quiz: [
        { q: 'Funções de um conjunto com $3$ elementos em um com $2$:', o: ['$6$', '$8$', '$9$', '$5$'], a: 1 },
        { q: 'Bijeções entre dois conjuntos de $3$ elementos:', o: ['$3$', '$6$', '$9$', '$27$'], a: 1 },
        { q: 'Injetoras de $4$ elementos em $3$ elementos:', o: ['$0$', '$12$', '$24$', '$81$'], a: 0 },
        { q: 'Para tornar $x²$ sobrejetora usa-se o CD:', o: ['$ℝ$', '$[0, +∞)$', '$ℤ$', '$(−∞, 0)$'], a: 1 }
      ],
      sintese: [['Contagem', 'Funções nᴮᴬ; injetoras por arranjos; bijetoras n!.'], ['Ajustes', 'Domínio para injetora, CD para sobrejetora.'], ['Revisão', 'Classifique sempre D, CD e lei.']],
      msg: 'Na próxima aula: função composta.'
    }
  ]
});
