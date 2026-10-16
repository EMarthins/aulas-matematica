// Módulo 9 · Matemática · 2ª série · 3º trimestre — Funções definidas por mais de uma sentença (aulas 90 e 91 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w90 = Wd.partes('pt90');
const w91 = Wd.partes('pt91');

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/funcoes-definidas-por-partes/',
  titulo: 'Funções definidas por mais de uma sentença', accent: 'primary', icon: 'grid', key: 'm2w09', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 90 e 91 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Tarifas de táxi, imposto de renda e faixas de preço são exemplos reais de funções definidas por partes.'],
  aulas: [
    // ------------------------------------------------------------ aula 90
    {
      slug: 'grafico-de-funcao-por-partes', titulo: 'Gráfico de uma função definida por mais de uma sentença',
      h1: `Funções ${co('primary')}por partes:</span> uma regra para cada faixa`,
      sub: 'Algumas situações mudam de regra conforme a faixa: tarifas, impostos, notas. A função é definida por várias sentenças, cada uma valendo em um intervalo do domínio.',
      badges: [['faixas'], ['intervalos', 'growth'], ['gráfico em partes', 'decay']], color: 'primary',
      roteiro: ['Ler, calcular e desenhar.', [['Definição', 'várias sentenças', 'bulb'], ['Valor numérico', 'qual regra usar', 'target'], ['Gráfico', 'um trecho por sentença', 'chart'], ['Pontos de corte', 'bolinha cheia e vazia', 'scale'], ['Contínua ou não', 'salto no gráfico', 'book']]],
      objetivos: ['Reconhecer <strong>funções definidas por partes</strong>.', 'Calcular <strong>valores</strong> escolhendo a sentença correta.', 'Construir o <strong>gráfico</strong>, marcando as extremidades dos intervalos.'],
      dica: 'Primeiro veja <strong>em qual intervalo está o $x$</strong>; só então use a sentença daquele intervalo.',
      gancho: { titulo: 'A tarifa do estacionamento', texto: 'Um estacionamento cobra R$ 6 pela primeira hora e R$ 3 por hora adicional, até o máximo de R$ 24 por dia. O preço não é uma única fórmula: muda conforme o tempo de permanência.', mini: ['Se $f(x) = x + 1$ para $x < 2$ e $f(x) = 5$ para $x ≥ 2$, $f(3)$ vale:', ['$4$', '$5$', '$3$', '$6$'], 1, '$3 ≥ 2$: usa a segunda sentença: $5$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Sentenças e intervalos', g2(`<div>
              ${checks(['<strong>Função por partes:</strong> $f(x) = f_{1}(x)$ se $x ∈ I_{1}$; $f(x) = f_{2}(x)$ se $x ∈ I_{2}$; …', 'Os intervalos <strong>não se sobrepõem</strong> e juntos formam o domínio.', 'Exemplo: $f(x) = x + 1$ se $x < 2$; $f(x) = 5$ se $x ≥ 2$. Então $f(0) = 1$, $f(2) = 5$, $f(4) = 5$.', 'O gráfico é a união dos gráficos de cada sentença, <strong>cada um só no seu intervalo</strong>.'], '.95rem')}
            </div>`, card(`<strong>Extremidades</strong>
              <p style="font-size:.92rem;margin-top:8px;">$x < 2$: bolinha <strong>vazia</strong> em $x = 2$ (não inclui).</p>
              <p style="font-size:.92rem;">$x ≥ 2$: bolinha <strong>cheia</strong> em $x = 2$ (inclui).</p>`, 'primary'))],
        ['Teoria · gráfico', 'Experimente', g2(`<div>
              ${checks(['No simulador, mude o ponto de corte $c$ e as retas de cada trecho.', 'Veja a bolinha vazia (primeira sentença) e a cheia (segunda).', 'Quando os valores nas duas sentenças coincidem em $c$, o gráfico é <strong>contínuo</strong>; senão há um <strong>salto</strong>.', 'Teste o ponto $x$ para ver qual sentença é usada.'], '.95rem')}
            </div>`, callout('Dica', 'Valor absoluto também é função por partes: $|x| = x$ se $x ≥ 0$ e $|x| = −x$ se $x < 0$.', 'primary'))]
      ],
      exemplos: [
        ['Valor numérico', 'Seja $f(x) = 2x − 1$ se $x ≤ 3$ e $f(x) = 8 − x$ se $x > 3$. Calcule $f(1)$, $f(3)$ e $f(5)$.', [['$f(1)$', '$1 ≤ 3$: $2 · 1 − 1 = 1$.'], ['$f(3)$', '$3 ≤ 3$: $2 · 3 − 1 = 5$.'], ['$f(5)$', '$5 > 3$: $8 − 5 = 3$.']], '$f(1) = 1$, $f(3) = 5$ e $f(5) = 3$.'],
        ['Continuidade', 'A função do exemplo anterior é contínua em $x = 3$?', [['Pela esquerda', '$2 · 3 − 1 = 5$.'], ['Pela direita', '$8 − 3 = 5$.']], 'Sim: os valores coincidem ($5$), o gráfico é <strong>contínuo</strong>.']
      ],
      widget: { titulo: 'Função por duas sentenças', html: w90.html, js: w90.js },
      pratique: [
        ['Valor', 'Se $f(x) = x²$ para $x < 0$ e $f(x) = x + 4$ para $x ≥ 0$, então $f(−3)$ vale:', ['$−3$', '$1$', '$9$', '$7$'], 2, '$−3 < 0$: $(−3)² = 9$. <strong>Alternativa C.</strong>'],
        ['Valor', 'Com a mesma função, $f(2)$ vale:', ['$4$', '$6$', '$8$', '$2$'], 1, '$2 ≥ 0$: $2 + 4 = 6$. <strong>Alternativa B.</strong>'],
        ['Valor absoluto', '$|−7| + |3|$ vale:', ['$4$', '$−4$', '$10$', '$−10$'], 2, '$7 + 3 = 10$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A tarifa do táxi', 'Uma corrida custa R$ 5 de bandeirada para até $2$ km e R$ 2 por km adicional. O preço $P$ (reais) para $d$ km é $P = 5$ se $d ≤ 2$ e $P = 5 + 2(d − 2)$ se $d > 2$. Para $7$ km, o preço é:', ['R$ 14', 'R$ 15', 'R$ 19', 'R$ 12', 'R$ 29'], 1, '$7 > 2$: $5 + 2 · 5 = 15$. <strong>Alternativa B.</strong>'],
      cuidados: [['Usar a sentença errada', 'Confira em qual intervalo está o $x$.'], ['Extremidade', 'No ponto de corte, vale a sentença cujo intervalo inclui o valor ($≤$ ou $≥$).'], ['Intervalos sobrepostos', 'Cada $x$ deve ter <strong>uma única</strong> regra.'], ['Traçar o gráfico inteiro', 'Cada sentença só vale no seu trecho.']],
      quiz: [
        { q: 'Se $f(x) = 3$ para $x < 1$ e $f(x) = x$ para $x ≥ 1$, então $f(1)$ vale:', o: ['$3$', '$1$', '$4$', '$0$'], a: 1 },
        { q: 'Em um gráfico por partes, a bolinha vazia indica:', o: ['ponto incluído', 'ponto não incluído', 'raiz', 'máximo'], a: 1 },
        { q: '$|−5|$ vale:', o: ['$−5$', '$5$', '$0$', '$25$'], a: 1 },
        { q: 'Uma função com “salto” no gráfico é:', o: ['contínua', 'descontínua', 'linear', 'constante'], a: 1 }
      ],
      sintese: [['Definição', 'Várias sentenças, cada uma em um intervalo.'], ['Cálculo', 'Veja o intervalo, depois a sentença.'], ['Gráfico', 'Bolinha cheia inclui; vazia não inclui.']],
      msg: 'Na próxima aula você resolve problemas com funções por partes.'
    },
    // ------------------------------------------------------------ aula 91
    {
      slug: 'funcoes-por-partes-situacoes-problema', titulo: 'Resolução de situações-problema com funções definidas por mais de uma sentença',
      h1: `Funções por partes ${co('primary')}em problemas</span>`,
      sub: 'Montar a função de uma situação real — tarifa, imposto, salário com comissão — é o grande uso das funções por partes. Aqui você modela e interpreta.',
      badges: [['modelar'], ['faixas', 'growth'], ['interpretar', 'decay']], color: 'primary',
      roteiro: ['Do texto à função por partes.', [['Ler as faixas', 'onde a regra muda', 'book'], ['Escrever as sentenças', 'uma por faixa', 'target'], ['Calcular', 'valor para um x', 'chart'], ['Achar x', 'dado o valor', 'scale'], ['Gráfico', 'interpretar', 'bulb']]],
      objetivos: ['<strong>Modelar</strong> tarifas e faixas por uma função por partes.', 'Calcular o <strong>valor</strong> e achar o <strong>$x$</strong> a partir do valor.', 'Interpretar o <strong>gráfico</strong> da função.'],
      dica: 'Desenhe a <strong>linha do tempo/faixas</strong> e escreva uma sentença para cada faixa antes de calcular.',
      gancho: { titulo: 'O desconto por quantidade', texto: 'Uma loja vende canetas a R$ 4 cada até $10$ unidades; a partir da $11ª$, as canetas custam R$ 3 cada. Quanto custam $15$ canetas? Primeiras $10$: R$ 40. Restantes $5$: R$ 15. Total R$ 55.', mini: ['O preço de $12$ canetas é:', ['R$ 36', 'R$ 46', 'R$ 48', 'R$ 52'], 1, '$10 · 4 + 2 · 3 = 46$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · modelagem', 'Passo a passo', g2(`<div>
              ${checks(['<strong>1.</strong> Identifique as faixas e os pontos de mudança.', '<strong>2.</strong> Escreva a regra de cada faixa (muitas vezes é uma função afim).', '<strong>3.</strong> Garanta que cada $x$ pertence a <strong>uma</strong> faixa.', '<strong>4.</strong> Para achar $x$ a partir do valor, descubra a faixa primeiro (compare com os valores nos pontos de corte).'], '.95rem')}
            </div>`, card(`<strong>Exemplo: canetas</strong>
              <p style="font-size:.92rem;margin-top:8px;">$P(n) = 4n$ se $0 ≤ n ≤ 10$.</p>
              <p style="font-size:.92rem;">$P(n) = 40 + 3(n − 10)$ se $n > 10$.</p>`, 'primary'))],
        ['Teoria · simulador', 'Visualizando faixas', g2(`<div>
              ${checks(['Ajuste o simulador para reproduzir uma tarifa: primeiro trecho constante, segundo crescente.', 'Teste valores de $x$ e veja qual sentença está em uso.', 'Procure “saltos”: descontos ou taxas que mudam bruscamente.', 'Compare o preço nos pontos de corte antes de decidir a faixa.'], '.95rem')}
            </div>`, callout('Dica', 'Em imposto de renda, só a parte que ultrapassa cada faixa recebe a alíquota maior.', 'primary'))]
      ],
      exemplos: [
        ['Preço total', 'Com $P(n) = 4n$ para $n ≤ 10$ e $P(n) = 40 + 3(n − 10)$ para $n > 10$, calcule $P(25)$.', [['Faixa', '$25 > 10$.'], ['Calcule', '$40 + 3 · 15 = 85$.']], '$P(25) = $ <strong>R$ 85</strong>.'],
        ['Achar quantidade', 'Com o mesmo $P$, quantas canetas se compram com R$ 70?', [['Faixa', '$P(10) = 40 < 70$: está na 2ª faixa.'], ['Equação', '$40 + 3(n − 10) = 70$ ⇒ $n − 10 = 10$.'], ['Resolva', '$n = 20$.']], 'Compram-se <strong>20 canetas</strong>.']
      ],
      widget: { titulo: 'Simulador de faixas', html: w91.html, js: w91.js },
      pratique: [
        ['Preço', 'Pela função das canetas, $P(8)$ vale:', ['R$ 24', 'R$ 32', 'R$ 40', 'R$ 44'], 1, '$8 ≤ 10$: $4 · 8 = 32$. <strong>Alternativa B.</strong>'],
        ['Faixa', 'O valor de $P(12)$ é:', ['R$ 36', 'R$ 46', 'R$ 48', 'R$ 52'], 1, '$40 + 3 · 2 = 46$. <strong>Alternativa B.</strong>'],
        ['Achar n', 'Com R$ 100, comprando pela $P$, o número de canetas é:', ['$20$', '$25$', '$30$', '$33$'], 2, '$40 + 3(n − 10) = 100$ ⇒ $n = 30$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O plano de energia', 'Uma conta de energia cobra R$ 0,50 por kWh até $100$ kWh e R$ 0,80 por kWh no que exceder. Para $150$ kWh, o valor é:', ['R$ 60', 'R$ 70', 'R$ 75', 'R$ 90', 'R$ 120'], 3, 'Primeiros $100$: $100 · 0,50 = 50$; excedente $50$: $50 · 0,80 = 40$; total $90$. <strong>Alternativa D.</strong>'],
      cuidados: [['Aplicar a tarifa maior em tudo', 'Só o que passa da faixa paga a taxa nova.'], ['Esquecer a parte fixa', 'Some o valor já pago nas faixas anteriores.'], ['Faixa errada ao inverter', 'Compare com os valores nos pontos de corte.'], ['Unidades', 'Cuide de minutos × horas, kWh etc.']],
      quiz: [
        { q: 'Na tarifa com faixas, o preço acima da faixa usa:', o: ['a taxa nova só no excedente', 'a taxa nova em tudo', 'a taxa antiga', 'média das taxas'], a: 0 },
        { q: '$P(n) = 4n$ ($n ≤ 10$). $P(10)$ vale:', o: ['$14$', '$40$', '$4$', '$100$'], a: 1 },
        { q: 'Para achar $x$ dado o valor, primeiro:', o: ['derive', 'descubra a faixa', 'some tudo', 'ignore o corte'], a: 1 },
        { q: 'Funções por partes modelam:', o: ['só áreas', 'tarifas e faixas', 'só círculos', 'nada'], a: 1 }
      ],
      sintese: [['Modelar', 'Faixas → sentenças.'], ['Inverter', 'Descubra a faixa antes de resolver.'], ['Cuidado', 'Taxa nova só no excedente.']],
      msg: 'Na próxima aula: propriedades das funções (sobrejetora, injetora e bijetora).'
    }
  ]
});
