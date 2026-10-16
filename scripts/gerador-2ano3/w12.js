// Módulo 12 · Matemática · 2ª série · 3º trimestre — Função inversa: problemas (aulas 99 e 100 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/funcao-inversa-problemas/',
  titulo: 'Função inversa: problemas', accent: 'primary', icon: 'grid', key: 'm2w12', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 99 e 100 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 99
    {
      slug: 'funcao-inversa-resolucao-de-problemas-i', titulo: 'Função inversa: resolução de problemas I',
      h1: `Função inversa ${co('primary')}em problemas</span> I`,
      sub: 'A inversa responde à pergunta “de volta”: dado o resultado, qual foi o valor inicial? Preços, conversões e fórmulas de física usam a inversa o tempo todo.',
      badges: [['de volta'], ['conversões', 'growth'], ['modelos afins', 'decay']], color: 'primary',
      roteiro: ['Resolvendo problemas de “volta”.', [['Ler a pergunta', 'a ida ou a volta', 'book'], ['Montar f', 'a função da ida', 'target'], ['Achar f⁻¹', 'trocar e isolar', 'scale'], ['Aplicar', 'calcular o valor', 'chart'], ['Conferir', 'ida e volta', 'bulb']]],
      objetivos: ['<strong>Modelar</strong> a situação por uma função $f$ e encontrar $f^{−1}$.', 'Resolver problemas de <strong>conversão de unidades</strong> e <strong>preços</strong> com a inversa.', '<strong>Conferir</strong> pelo caminho de volta.'],
      dica: 'Se o problema diz “qual era o valor <strong>antes</strong>?” ou “quantos <strong>para chegar</strong> a…?”, você está procurando $f^{−1}$.',
      gancho: { titulo: 'O troco do aplicativo', texto: 'O preço de uma corrida é $P(x) = 6 + 2,5x$, com $x$ em km. Se Marta pagou R$ 31, quantos km rodou? Em vez de tentar valores, calculamos a <strong>inversa</strong>: $x = {P − 6|2,5}$.', mini: ['Com $P = 31$, a distância é:', ['$8$ km', '$10$ km', '$12$ km', '$14,8$ km'], 1, '${31 − 6|2,5} = 10$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · estratégia', 'Ida e volta', g2(`<div>
              ${checks(['<strong>1.</strong> Escreva a função da <strong>ida</strong> $f$ (entrada → saída).', '<strong>2.</strong> Determine $f^{−1}$ (trocar e isolar).', '<strong>3.</strong> Substitua o valor da <strong>saída</strong> na inversa para obter a <strong>entrada</strong>.', '<strong>4.</strong> Confira: $f(\\text{entrada}) = \\text{saída}$.'].map(t => t.split(String.fromCharCode(92) + 'text').join('')), '.95rem')}
            </div>`, card(`<strong>Exemplo de conversão</strong>
              <p style="font-size:.92rem;margin-top:8px;">Libras para quilos: $k = 0,45 · l$. Inversa: $l = {k|0,45}$. Um pacote de $9$ kg pesa $20$ lb.</p>`, 'primary'))],
        ['Teoria · mais situações', 'Preço, salário e unidades', g2(`<div>
              ${checks(['<strong>Salário:</strong> $S = 1200 + 0,05 v$ ($v$ = vendas). Para $S = 2000$: $v = {S − 1200|0,05} = 16 000$.', '<strong>Temperatura:</strong> $F = 1,8C + 32$; inversa $C = {F − 32|1,8}$.', '<strong>Movimento:</strong> $s = s_{0} + vt$; inversa para o tempo: $t = {s − s_{0}|v}$.', '<strong>Desconto:</strong> $P = 0,8 · p$; o preço original é $p = {P|0,8}$.'], '.95rem')}
            </div>`, callout('Armadilha comum', 'Para achar o preço <strong>antes</strong> de um desconto de $20%$, divida por $0,8$ (e não some $20%$ ao valor final).', 'primary'))]
      ],
      exemplos: [
        ['Preço original', 'Após $20%$ de desconto, um tênis custa R$ 160. Qual era o preço original?', [['Função', '$P = 0,8 · p$.'], ['Inversa', '$p = {P|0,8}$.'], ['Calcule', '${160|0,8} = 200$.']], 'O preço original era <strong>R$ 200</strong>.'],
        ['Temperatura', 'Uma temperatura de $86$ °F corresponde a quantos °C?', [['Inversa', '$C = {F − 32|1,8}$.'], ['Calcule', '${86 − 32|1,8} = 30$.']], '<strong>30 °C</strong>.']
      ],
      pratique: [
        ['Táxi', 'Com $P(x) = 5 + 3x$, se $P = 38$, então $x$ vale:', ['$9$', '$11$', '$13$', '$14,3$'], 1, '${38 − 5|3} = 11$. <strong>Alternativa B.</strong>'],
        ['Desconto', 'Após $10%$ de desconto, uma camisa custa R$ 63. O preço original era:', ['R$ 56,70', 'R$ 66,30', 'R$ 70', 'R$ 73'], 2, '${63|0,9} = 70$. <strong>Alternativa C.</strong>'],
        ['Conversão', 'Com $F = 1,8C + 32$, $F = 50$ equivale a:', ['$5$ °C', '$10$ °C', '$18$ °C', '$32$ °C'], 1, '${50 − 32|1,8} = 10$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A conta de energia', 'Uma conta de energia é $C = 15 + 0,6 · k$ ($k$ = consumo em kWh). Se a conta foi R$ 99, o consumo foi:', ['$100$ kWh', '$120$ kWh', '$140$ kWh', '$165$ kWh', '$190$ kWh'], 2, '$k = {99 − 15|0,6} = 140$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar o desconto', 'O original é o valor final dividido pelo fator $0,8$, não valor $+ 20%$.'], ['Trocar entrada e saída', 'Na inversa, entra a saída da ida.'], ['Esquecer a conferência', 'Teste $f(\\text{valor encontrado})$.'.split(String.fromCharCode(92) + 'text').join('')], ['Unidades', 'Cuide de km × m, kWh etc.']],
      quiz: [
        { q: 'A inversa de $f(x) = 2x + 6$ é:', o: ['${x − 6|2}$', '$2x − 6$', '${x + 6|2}$', '$2x + 6$'], a: 0 },
        { q: 'Se $F = 1,8C + 32$ e $F = 212$, então $C$ vale:', o: ['$80$', '$100$', '$120$', '$180$'], a: 1 },
        { q: 'Preço final R$ 90 após aumento de $50%$ ($×1,5$). Preço original:', o: ['R$ 45', 'R$ 60', 'R$ 135', 'R$ 40'], a: 1 },
        { q: 'Usamos $f^{−1}$ quando queremos:', o: ['a ida', 'a volta (achar a entrada)', 'a soma', 'a média'], a: 1 }
      ],
      sintese: [['Ida e volta', 'f leva da entrada à saída; f⁻¹ faz o caminho de volta.'], ['Descontos', 'Original = final ÷ fator.'], ['Conferir', 'Aplique f ao valor encontrado.']],
      msg: 'Na próxima aula: problemas II, com funções não afins.'
    },
    // ------------------------------------------------------------ aula 100
    {
      slug: 'funcao-inversa-resolucao-de-problemas-ii', titulo: 'Função inversa: resolução de problemas II',
      h1: `Função inversa ${co('primary')}em problemas</span> II`,
      sub: 'Continuamos com funções não afins: quadráticas restritas, exponenciais e logarítmicas. A inversa de aˣ é o logaritmo e a de x² (com x ≥ 0) é a raiz quadrada.',
      badges: [['x² e √x'], ['aˣ e log', 'growth'], ['restringir domínio', 'decay']], color: 'primary',
      roteiro: ['Inversas de funções não afins.', [['Quadrática', 'restringir o domínio', 'target'], ['Raiz', 'inversa de x²', 'scale'], ['Exponencial e log', 'inversas', 'chart'], ['Tempo e população', 'modelos', 'bulb'], ['Revisão', 'o que mantém do módulo', 'book']]],
      objetivos: ['Encontrar a inversa de funções <strong>quadráticas (restritas)</strong>, <strong>exponenciais</strong> e <strong>logarítmicas</strong>.', 'Escolher <strong>domínio</strong> para que a função seja bijetora.', 'Resolver problemas de <strong>tempo e crescimento</strong> com a inversa.'],
      dica: 'Restrinja o domínio antes de inverter: $f(x) = x²$ com $x ≥ 0$ tem inversa $f^{−1}(x) = √{x}$.',
      gancho: { titulo: 'Quanto tempo?', texto: 'Uma cultura cresce segundo $N(t) = 100 · 2^{t}$ ($t$ em horas). Para saber <strong>em quanto tempo</strong> ela chega a $1 600$, usamos a inversa: $t = log_{2}({N|100})$. Com $N = 1600$: $log_{2} 16 = 4$ horas.', mini: ['A inversa de $f(x) = 3^{x}$ é:', ['$x³$', '$log_{3} x$', '${1|3^{x}}$', '$3x$'], 1, 'Exponencial e logaritmo de mesma base. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · inversas clássicas', 'Resumo', g2(`<div>
              ${tbl(['$f(x)$', 'Restrição', '$f^{−1}(x)$'], [['$x²$', '$x ≥ 0$', '$√{x}$'], ['$x² + 1$', '$x ≥ 0$', '$√{x − 1}$'], ['$2^{x}$', 'nenhuma', '$log_{2} x$'], ['$log_{3} x$', '$x > 0$', '$3^{x}$'], ['$√{x}$', '$x ≥ 0$', '$x²$ (com $x ≥ 0$)']])}
            </div>`, callout('Regra', 'Funções não injetoras precisam ter o <strong>domínio restringido</strong> para terem inversa.', 'primary'))],
        ['Teoria · exemplos de cálculo', 'Passo a passo', g2(`<div>
              ${checks(['<strong>$f(x) = x² + 1$, $x ≥ 0$:</strong> $y = x² + 1$ ⇒ troque: $x = y² + 1$ ⇒ $y = √{x − 1}$ (para $y ≥ 0$).', '<strong>$f(x) = 2^{x} + 3$:</strong> $x = 2^{y} + 3$ ⇒ $2^{y} = x − 3$ ⇒ $y = log_{2}(x − 3)$.', '<strong>$f(x) = log_{5}(x + 1)$:</strong> $x = log_{5}(y + 1)$ ⇒ $y = 5^{x} − 1$.', 'Verifique o domínio da inversa: é a <strong>imagem</strong> de $f$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo de uso</strong>
              <p style="font-size:.92rem;margin-top:8px;">$N(t) = 100 · 2^{t}$ ⇒ $t = log_{2}({N|100})$.</p>`, 'primary'))]
      ],
      exemplos: [
        ['Inversa da quadrática', 'Determine a inversa de $f(x) = x² + 4$, com $x ≥ 0$.', [['Troque', '$x = y² + 4$.'], ['Isole', '$y² = x − 4$ ⇒ $y = √{x − 4}$ (positivo).']], '$f^{−1}(x) = √{x − 4}$, com $x ≥ 4$.'],
        ['Tempo de crescimento', 'Com $N(t) = 500 · 2^{t}$, quando $N = 4000$?', [['Inversa', '$2^{t} = {N|500} = 8$.'], ['Resolva', '$t = log_{2} 8 = 3$.']], 'Em <strong>3 horas</strong>.']
      ],
      pratique: [
        ['Inversa', 'A inversa de $f(x) = 5^{x}$ é:', ['$x⁵$', '$log_{5} x$', '$5x$', '$x − 5$'], 1, 'Exponencial ⇔ logaritmo. <strong>Alternativa B.</strong>'],
        ['Quadrática', 'A inversa de $f(x) = x²$, $x ≥ 0$, é:', ['$x²$', '$√{x}$', '$−x²$', '${1|x}$'], 1, 'Raiz quadrada. <strong>Alternativa B.</strong>'],
        ['Valor', 'Se $f(x) = 2^{x}$, então $f^{−1}(64)$ vale:', ['$5$', '$6$', '$32$', '$128$'], 1, '$log_{2} 64 = 6$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A população de bactérias', 'A população é $N(t) = 200 · 3^{t}$ ($t$ em horas). Em quanto tempo chega a $5 400$?', ['$2$ h', '$3$ h', '$4$ h', '$5$ h', '$27$ h'], 1, '$3^{t} = 27$ ⇒ $t = 3$. <strong>Alternativa B.</strong>'],
      cuidados: [['Esquecer a restrição', 'Sem restringir o domínio, a quadrática não tem inversa.'], ['Sinal da raiz', 'Ao isolar $y$ em $y² = k$, escolha o sinal conforme o domínio.'], ['Domínio da inversa', 'É a imagem de $f$.'], ['Confundir $f^{−1}$ com $1 ÷ f$', 'São coisas diferentes.']],
      quiz: [
        { q: 'A inversa de $log_{2} x$ é:', o: ['$2^{x}$', '$x²$', '$2x$', '${1|log_{2} x}$'], a: 0 },
        { q: 'Para que $x²$ tenha inversa, o domínio pode ser:', o: ['$ℝ$', '$x ≥ 0$', '$ℤ$', '$[−1, 1]$'], a: 1 },
        { q: '$f(x) = 2^{x} + 3$ tem inversa:', o: ['$log_{2}(x − 3)$', '$log_{2}(x) − 3$', '$2^{x − 3}$', '$x − 3$'], a: 0 },
        { q: 'O domínio de $f^{−1}$ é:', o: ['o domínio de $f$', 'a imagem de $f$', '$ℝ$ sempre', 'vazio'], a: 1 }
      ],
      sintese: [['Inversas clássicas', 'x² ↔ √x; aˣ ↔ logₐ x.'], ['Restrições', 'Domínio bijetor é essencial.'], ['Aplicação', 'Tempo de crescimento via logaritmo.']],
      msg: 'Na próxima aula, a retomada do Teorema de Pitágoras fecha o trimestre.'
    }
  ]
});
