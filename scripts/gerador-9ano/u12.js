// Módulo 12 · 9º ano · Recomposição · 2º trimestre — Círculo e circunferência (aulas 35 a 38 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wc = Wd.circulo('rc1');

const elem = svg(240, 190, `<circle cx="110" cy="95" r="70" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><line x1="110" y1="95" x2="180" y2="95" stroke="var(--decay)" stroke-width="3"/><line x1="40" y1="95" x2="180" y2="95" stroke="var(--growth)" stroke-width="2" stroke-dasharray="5 4"/><line x1="60" y1="45" x2="160" y2="150" stroke="var(--ink)" stroke-width="2"/><line x1="175" y1="30" x2="175" y2="170" stroke="var(--danger, #c0392b)" stroke-width="2.4"/><circle cx="110" cy="95" r="3.5" fill="var(--ink)"/><text x="140" y="88" font-size="12" fill="var(--decay)">r</text><text x="100" y="112" font-size="12" fill="var(--growth)">d</text><text x="68" y="108" font-size="12" fill="var(--ink)">corda</text><text x="182" y="60" font-size="12" fill="var(--ink)">tangente</text>`, '300px');

module.exports = unidade({
  tri: 2, dir: 'circulo-e-circunferencia', titulo: 'Círculo e circunferência', accent: 'decay', icon: 'pie', key: 'r2u6',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'circulo-e-circunferencia', titulo: 'Círculo e circunferência',
      h1: `${co('decay')}Círculo</span> e circunferência: qual a diferença?`,
      sub: 'A circunferência é a linha; o círculo é a região que ela contorna. Ambos são definidos pelo centro e pelo raio.',
      badges: [['centro'], ['raio', 'growth'], ['diâmetro', 'decay']], color: 'decay',
      roteiro: ['Da definição ao diâmetro.', [['Circunferência', 'pontos à mesma distância', 'target'], ['Círculo', 'a região interna', 'bulb'], ['Raio e diâmetro', 'd = 2r', 'scale'], ['Posições', 'dentro, sobre, fora', 'chart'], ['Exemplos', 'rodas e moedas', 'book']]],
      objetivos: ['Distinguir <strong>círculo</strong> de <strong>circunferência</strong>.', 'Definir <strong>centro, raio e diâmetro</strong>.', 'Aplicar $d = 2r$.'],
      dica: 'Circunferência é uma <strong>linha</strong> (contorno). Círculo é uma <strong>região</strong> (inclui o interior).',
      gancho: { titulo: 'A roda da bicicleta', texto: 'A roda de uma bicicleta tem <strong>raio de 30 cm</strong>. Qual é o comprimento do aro mais longo que passa pelo centro, de ponta a ponta?', mini: ['O diâmetro da roda é:', ['$15$ cm', '$30$ cm', '$60$ cm', '$90$ cm'], 2, '$d = 2r = 2 · 30 = 60$ cm. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · definição', 'Pontos à mesma distância do centro', g2(`<div>
              ${checks(['<strong>Circunferência:</strong> todos os pontos de um plano à <strong>mesma distância</strong> de um ponto $O$ (o centro).', '<strong>Raio ($r$):</strong> distância do centro a um ponto da circunferência.', '<strong>Diâmetro ($d$):</strong> maior corda, passa pelo centro: $d = 2r$.', '<strong>Círculo:</strong> circunferência mais seu interior.'], '.95rem')}
            </div>`, `<div>${elem}</div>`)],
        ['Teoria · posições', 'Um ponto em relação à circunferência', g2(`<div>
              ${checks(['Ponto a distância $< r$ do centro: <strong>interior</strong> ao círculo.', 'Distância $= r$: <strong>sobre</strong> a circunferência.', 'Distância $> r$: <strong>exterior</strong>.', 'Exemplo: $r = 5$; ponto a $3$ do centro está dentro; a $5$ está sobre; a $8$ está fora.'], '.95rem')}
            </div>`, callout('Dica', 'Raio é sempre a <strong>metade</strong> do diâmetro: $r = {d|2}$.', 'decay'))]
      ],
      exemplos: [
        ['Raio e diâmetro', 'Um prato circular tem diâmetro de $26$ cm. Qual é o raio?', [['Relação', '$r = {d|2}$.'], ['Calcular', '${26|2} = 13$.']], 'O raio mede <strong>13 cm</strong>.'],
        ['Posição do ponto', 'Em uma circunferência de raio $7$ cm, um ponto está a $9$ cm do centro. Ele está dentro, sobre ou fora?', [['Comparar', '$9 > 7$.']], 'O ponto está <strong>fora</strong> da circunferência.']
      ],
      widget: { titulo: 'Raio, diâmetro e medidas do círculo', html: wc.html, js: wc.js },
      pratique: [
        ['Diâmetro', 'Uma moeda tem raio de $1,2$ cm. O diâmetro é:', ['$0,6$ cm', '$1,2$ cm', '$2,4$ cm', '$3,6$ cm'], 2, '$2 · 1,2 = 2,4$. <strong>Alternativa C.</strong>'],
        ['Raio', 'Uma pizza tem diâmetro de $40$ cm. Seu raio é:', ['$10$ cm', '$20$ cm', '$40$ cm', '$80$ cm'], 1, '${40|2} = 20$. <strong>Alternativa B.</strong>'],
        ['Posição', 'Uma circunferência tem raio $10$. O ponto a $10$ do centro está:', ['no interior', 'sobre a circunferência', 'no exterior', 'no centro'], 1, 'Distância igual ao raio: sobre. <strong>Alternativa B.</strong>']
      ],
      enem: ['A mesa redonda', 'Uma mesa redonda tem $1,8$ m de diâmetro. A distância do centro até a borda é:', ['$0,6$ m', '$0,9$ m', '$1,8$ m', '$2,7$ m', '$3,6$ m'], 1, '${1,8|2} = 0,9$ m. <strong>Alternativa B.</strong>'],
      cuidados: [['Círculo ≠ circunferência', 'Circunferência é a linha; círculo é a região.'], ['Raio × diâmetro', 'Não confunda: $d = 2r$.'], ['Diâmetro é corda', 'É a corda mais longa; passa pelo centro.'], ['Centro pertence?', 'O centro <strong>não</strong> está na circunferência (só no círculo).']],
      quiz: [
        { q: 'O raio é metade do:', o: ['perímetro', 'diâmetro', 'arco', 'setor'], a: 1 },
        { q: 'A linha que contorna o círculo é a:', o: ['corda', 'circunferência', 'secante', 'tangente'], a: 1 },
        { q: 'Diâmetro $14$ cm ⇒ raio:', o: ['$7$ cm', '$14$ cm', '$28$ cm', '$3,5$ cm'], a: 0 },
        { q: 'Ponto a $4$ do centro, raio $6$: ele está:', o: ['fora', 'sobre', 'dentro', 'no centro'], a: 2 }
      ],
      sintese: [['Circunferência', 'Linha; todos os pontos à mesma distância do centro.'], ['Círculo', 'Região, com o interior.'], ['d = 2r', 'O diâmetro é o dobro do raio.']],
      msg: 'Próxima aula: elementos da circunferência (corda, arco, tangente...).'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'elementos-da-circunferencia', titulo: 'Elementos da circunferência',
      h1: `Circunferência: ${co('decay')}corda, arco, secante e tangente</span>`,
      sub: 'Além do raio e do diâmetro, a circunferência tem cordas, arcos, retas secantes e tangentes, e setores. Cada um tem sua definição e propriedades.',
      badges: [['corda'], ['arco', 'growth'], ['tangente', 'decay']], color: 'decay',
      roteiro: ['Os nomes e o que cada um faz.', [['Corda', 'liga dois pontos', 'target'], ['Arco', 'parte da circunferência', 'bulb'], ['Secante', 'corta em dois pontos', 'scale'], ['Tangente', 'toca em um ponto', 'chart'], ['Setor e segmento', 'partes do círculo', 'book']]],
      objetivos: ['Identificar <strong>corda, arco, secante, tangente e setor</strong>.', 'Relacionar a <strong>tangente</strong> ao raio (ângulo reto).', 'Resolver problemas simples com esses elementos.'],
      dica: 'A tangente toca a circunferência em <strong>um único ponto</strong> e é <strong>perpendicular ao raio</strong> nesse ponto.',
      gancho: { titulo: 'A roda e a estrada', texto: 'Uma roda apoia-se em uma estrada reta, tocando o chão em <strong>um único ponto</strong>. A estrada é uma reta ___ à roda.', mini: ['A reta que toca a circunferência em um só ponto é:', ['secante', 'tangente', 'corda', 'diâmetro'], 1, 'Tangente. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · elementos', 'Vocabulário', g2(`<div>
              ${tbl(['Elemento', 'Definição'], [['corda', 'segmento que une dois pontos da circunferência'], ['diâmetro', 'corda que passa pelo centro'], ['arco', 'parte da circunferência entre dois pontos'], ['secante', 'reta que corta a circunferência em 2 pontos'], ['tangente', 'reta que toca em 1 ponto'], ['setor', 'região entre dois raios e um arco']])}
            </div>`, `<div>${elem}</div>`)],
        ['Teoria · propriedades', 'Tangente e corda', g2(`<div>
              ${checks(['A <strong>tangente</strong> é perpendicular ao raio no ponto de contato: $90°$.', 'Uma reta que passa pelo centro e é perpendicular a uma <strong>corda</strong> divide essa corda ao meio.', 'Duas tangentes traçadas de um ponto externo têm <strong>segmentos iguais</strong> até o contato.', 'O <strong>diâmetro</strong> é a maior corda possível.'], '.95rem')}
            </div>`, callout('Pitágoras entra', 'Raio, tangente e distância ao centro formam um triângulo retângulo: $d² = r² + t²$.', 'decay'))]
      ],
      exemplos: [
        ['Tangente e raio', 'Uma circunferência tem raio $5$ cm. Um ponto externo está a $13$ cm do centro. Qual é o comprimento do segmento de tangente até o ponto de contato?', [['Triângulo retângulo', 'Raio $5$ (cateto), tangente $t$ (cateto), distância $13$ (hipotenusa).'], ['Pitágoras', '$t² = 13² − 5² = 169 − 25 = 144$.'], ['Raiz', '$t = 12$.']], 'A tangente mede <strong>12 cm</strong>.'],
        ['Corda e diâmetro', 'Uma corda de $10$ cm e um diâmetro de $16$ cm estão na mesma circunferência. Pode haver corda maior que $16$ cm?', [['Maior corda', 'É o diâmetro.']], '<strong>Não</strong>: o diâmetro é a maior corda.']
      ],
      pratique: [
        ['Nome', 'A reta que corta a circunferência em dois pontos é:', ['tangente', 'secante', 'raio', 'arco'], 1, 'Secante. <strong>Alternativa B.</strong>'],
        ['Ângulo', 'O ângulo entre a tangente e o raio no ponto de contato mede:', ['$30°$', '$45°$', '$90°$', '$180°$'], 2, 'Perpendiculares. <strong>Alternativa C.</strong>'],
        ['Pitágoras', 'Raio $6$ e distância do ponto ao centro $10$. A tangente mede:', ['$4$', '$6$', '$8$', '$16$'], 2, '$10² − 6² = 64$ ⇒ $8$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O cabo tangente', 'Um cabo de aço toca uma polia circular em um único ponto, sem cortá-la. A direção do cabo em relação ao raio no ponto de contato é:', ['paralela', 'perpendicular', 'inclinada $45°$', 'coincidente', 'oposta'], 1, 'A tangente é perpendicular ao raio. <strong>Alternativa B.</strong>'],
      cuidados: [['Secante × tangente', 'Secante cruza em dois pontos; tangente toca em um.'], ['Diâmetro é corda', 'Todo diâmetro é corda, mas nem toda corda é diâmetro.'], ['Arco × corda', 'Arco é curvo; corda é reta.'], ['Tangente com raio', 'É o <strong>raio</strong> que é perpendicular à tangente.']],
      quiz: [
        { q: 'A maior corda de uma circunferência é o:', o: ['arco', 'raio', 'diâmetro', 'setor'], a: 2 },
        { q: 'Uma reta tangente toca a circunferência em:', o: ['nenhum ponto', 'um ponto', 'dois pontos', 'infinitos pontos'], a: 1 },
        { q: 'A região entre dois raios e um arco é o:', o: ['setor', 'arco', 'corda', 'segmento'], a: 0 },
        { q: 'O raio e a tangente no ponto de contato formam:', o: ['$45°$', '$60°$', '$90°$', '$180°$'], a: 2 }
      ],
      sintese: [['Vocabulário', 'Corda, diâmetro, arco, secante, tangente, setor.'], ['Tangente', 'Perpendicular ao raio.'], ['Pitágoras', 'Ajuda a medir o segmento de tangente.']],
      msg: 'Próxima aula: o número pi.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'circunferencia-e-o-numero-pi', titulo: 'Circunferência e o número pi',
      h1: `${co('decay')}π:</span> a razão que não muda`,
      sub: 'Dividindo o comprimento de qualquer circunferência pelo seu diâmetro, obtemos sempre o mesmo número: π, aproximadamente 3,14.',
      badges: [['π'], ['razão', 'growth'], ['3,14', 'decay']], color: 'decay',
      roteiro: ['De onde vem o 3,14.', [['Medir', 'comprimento e diâmetro', 'scale'], ['A razão', 'C ÷ d é constante', 'target'], ['O número π', 'irracional', 'bulb'], ['Aproximações', '3,14 e 22/7', 'chart'], ['Conferir', 'experimento', 'book']]],
      objetivos: ['Compreender que $C ÷ d = π$ para <strong>toda</strong> circunferência.', 'Usar as aproximações <strong>3,14</strong> e ${22|7}$.', 'Saber que π é <strong>irracional</strong>.'],
      dica: 'π é a <strong>razão</strong> entre o comprimento da circunferência e seu diâmetro: ${C|d} = π ≈ 3,14$.',
      gancho: { titulo: 'O experimento do barbante', texto: 'Envolva uma lata com um barbante e meça: o barbante dá <strong>31,4 cm</strong>. O diâmetro da lata é <strong>10 cm</strong>. Quanto vale $31,4 ÷ 10$?', mini: ['$31,4 ÷ 10$ é:', ['$3,14$', '$31,4$', '$314$', '$0,314$'], 0, 'Aproximadamente $π$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · o número π', 'Uma constante universal', g2(`<div>
              ${checks(['Para qualquer circunferência: <strong>${C|d} = π$</strong>, com $π ≈ 3,14159…$', 'π é um número <strong>irracional</strong>: infinitas casas decimais sem repetição.', 'Aproximações úteis: $π ≈ 3,14$ ou $π ≈ {22|7}$.', 'Se o diâmetro dobra, o comprimento também dobra: são diretamente proporcionais.'], '.95rem')}
            </div>`, card(`<strong>Dados medidos</strong>
              ${tbl(['Objeto', 'd (cm)', 'C (cm)', 'C ÷ d'], [['moeda', '$2,5$', '$7,9$', '$3,16$'], ['lata', '$10$', '$31,4$', '$3,14$'], ['prato', '$26$', '$81,7$', '$3,14$']])}`, 'primary'))],
        ['Teoria · usando π', 'Duas aproximações', g2(`<div>
              ${checks(['Com $3,14$: $C = 3,14 · d$. Com ${22|7}$: bom quando o diâmetro é múltiplo de $7$.', 'Exemplo: $d = 14$ ⇒ $C ≈ {22|7} · 14 = 44$.', 'Exemplo: $d = 10$ ⇒ $C ≈ 3,14 · 10 = 31,4$.', 'Enunciados dizem qual valor de π usar; siga-o.'], '.95rem')}
            </div>`, callout('π é exato como símbolo', 'Escrever $C = π d$ é exato; $3,14$ é só uma aproximação para calcular.', 'decay'))]
      ],
      exemplos: [
        ['Achando π', 'Uma roda tem diâmetro de $60$ cm e dá uma volta de $188,4$ cm. Qual é a razão $C ÷ d$?', [['Dividir', '$188,4 ÷ 60 = 3,14$.']], 'A razão é <strong>3,14</strong>, aproximação de π.'],
        ['Diâmetro pelo comprimento', 'O contorno de um tronco mede $94,2$ cm. Qual o diâmetro? (use $π = 3,14$)', [['Fórmula', '$d = {C|π}$.'], ['Calcular', '$94,2 ÷ 3,14 = 30$.']], 'O diâmetro é de <strong>30 cm</strong>.']
      ],
      pratique: [
        ['Valor de π', 'A melhor aproximação decimal de π com duas casas é:', ['$3,12$', '$3,14$', '$3,41$', '$3,24$'], 1, '$π ≈ 3,14$. <strong>Alternativa B.</strong>'],
        ['Razão', 'Em uma circunferência, $C = 62,8$ cm e $d = 20$ cm. A razão $C ÷ d$ é:', ['$2,14$', '$3,14$', '$4,14$', '$31,4$'], 1, '$62,8 ÷ 20 = 3,14$. <strong>Alternativa B.</strong>'],
        ['Tipo de número', 'π é um número:', ['inteiro', 'racional exato', 'irracional', 'negativo'], 2, 'Infinitas casas sem repetição. <strong>Alternativa C.</strong>']
      ],
      enem: ['A fita no tronco', 'Uma fita rodeia exatamente um tronco de árvore circular e mede $157$ cm. Com $π = 3,14$, o diâmetro do tronco é:', ['$25$ cm', '$40$ cm', '$50$ cm', '$78,5$ cm', '$100$ cm'], 2, '$d = {157|3,14} = 50$ cm. <strong>Alternativa C.</strong>'],
      cuidados: [['π não é 3,14 exato', '$3,14$ é aproximação; π tem infinitas casas.'], ['Razão C÷d, não C×d', 'π é o quociente comprimento ÷ diâmetro.'], ['22/7 também é aproximação', 'Não é igual a π.'], ['Arredondar cedo', 'Use π completo ou a aproximação pedida até o fim.']],
      quiz: [
        { q: 'π é a razão entre:', o: ['raio e diâmetro', 'comprimento e diâmetro', 'área e raio', 'raio e comprimento'], a: 1 },
        { q: 'π é:', o: ['racional', 'irracional', 'inteiro', 'natural'], a: 1 },
        { q: 'Com $π = 3,14$ e $d = 20$, $C$ vale:', o: ['$31,4$', '$62,8$', '$6,28$', '$314$'], a: 1 },
        { q: 'Quando o diâmetro dobra, o comprimento:', o: ['dobra', 'fica metade', 'não muda', 'triplica'], a: 0 }
      ],
      sintese: [['π', 'Razão C ÷ d, ≈ 3,14.'], ['Irracional', 'Infinitas casas, sem período.'], ['Proporção', 'C e d são diretamente proporcionais.']],
      msg: 'Próxima aula: comprimento da circunferência e perímetro do círculo.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'comprimento-da-circunferencia', titulo: 'Comprimento da circunferência e perímetro do círculo',
      h1: `Comprimento da ${co('decay')}circunferência</span>`,
      sub: 'O comprimento da circunferência é C = 2πr. Ele também é o perímetro do círculo. Com ele calculamos voltas de rodas, cercas e trilhas circulares.',
      badges: [['C = 2πr'], ['voltas', 'growth'], ['arco', 'decay']], color: 'decay',
      roteiro: ['Fórmula, voltas e arcos.', [['Fórmula', 'C = 2πr = πd', 'scale'], ['Calcular C', 'dado r ou d', 'chart'], ['Achar r', 'a partir de C', 'target'], ['Voltas da roda', 'distância ÷ C', 'bulb'], ['Comprimento de arco', 'fração da volta', 'book']]],
      objetivos: ['Calcular o <strong>comprimento</strong> da circunferência.', 'Resolver problemas de <strong>voltas de rodas</strong>.', 'Calcular o <strong>comprimento de um arco</strong>.'],
      dica: '$C = 2πr = πd$. Para uma <strong>fração</strong> da volta, calcule a mesma fração de $C$.',
      gancho: { titulo: 'A pista de corrida', texto: 'Uma pista circular tem <strong>raio de 50 m</strong>. Quanto um atleta percorre em uma volta completa? (use $π = 3,14$)', mini: ['Uma volta mede:', ['$157$ m', '$314$ m', '$78,5$ m', '$100$ m'], 1, '$C = 2 · 3,14 · 50 = 314$ m. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fórmula', 'C em função de r ou d', g2(`<div>
              ${checks(['<strong>$C = 2πr$</strong> ou <strong>$C = πd$</strong>.', 'Raio $4$ cm ($π = 3,14$): $C = 2 · 3,14 · 4 = 25,12$ cm.', 'Diâmetro $10$: $C = 3,14 · 10 = 31,4$.', 'Dado $C$: $r = {C|2π}$ e $d = {C|π}$.'], '.95rem')}
            </div>`, card(`<strong>Voltas de uma roda</strong>
              <p style="font-size:.92rem;margin-top:8px;">Número de voltas $= {"distância"|C}$.</p>
              <p style="font-size:.92rem;">Roda de $d = 60$ cm: $C = 188,4$ cm. Em $18,84$ m: $1884 ÷ 188,4 = 10$ voltas.</p>`, 'primary'))],
        ['Teoria · arcos', 'Fração da volta', g2(`<div>
              ${checks(['Um arco de $90°$ é $90° ÷ 360° = {1|4}$ da volta.', 'Comprimento do arco $= {α|360°} · C$ (com $α$ em graus).', 'Raio $10$, arco de $60°$: $C = 62,8$; arco $= {60|360} · 62,8 ≈ 10,47$.', 'Semicircunferência: ${C|2} = πr$.'], '.95rem')}
            </div>`, callout('Perímetro do círculo', 'O <strong>perímetro do círculo</strong> é o comprimento da circunferência que o contorna.', 'decay'))]
      ],
      exemplos: [
        ['Voltas da roda', 'Uma roda tem raio de $35$ cm. Quantas voltas dá em $21,98$ m? (use $π = 3,14$)', [['Comprimento', '$C = 2 · 3,14 · 35 = 219,8$ cm.'], ['Converter', '$21,98$ m $= 2198$ cm.'], ['Dividir', '$2198 ÷ 219,8 = 10$.']], 'Dá <strong>10 voltas</strong>.'],
        ['Cerca circular', 'Um canteiro circular tem diâmetro de $8$ m. Quantos metros de cerca contornam o canteiro? (use $π = 3,14$)', [['Fórmula', '$C = πd$.'], ['Calcular', '$3,14 · 8 = 25,12$.']], 'São necessários <strong>25,12 m</strong> de cerca.']
      ],
      pratique: [
        ['Comprimento', 'Uma circunferência de raio $5$ cm tem comprimento ($π = 3,14$) de:', ['$15,7$ cm', '$31,4$ cm', '$62,8$ cm', '$78,5$ cm'], 1, '$2 · 3,14 · 5 = 31,4$. <strong>Alternativa B.</strong>'],
        ['Raio', 'Uma circunferência tem comprimento $62,8$ cm. O raio mede ($π = 3,14$):', ['$5$ cm', '$10$ cm', '$20$ cm', '$31,4$ cm'], 1, '$r = 62,8 ÷ 6,28 = 10$. <strong>Alternativa B.</strong>'],
        ['Arco', 'Um arco de $180°$ em uma circunferência de comprimento $40$ cm mede:', ['$10$ cm', '$20$ cm', '$40$ cm', '$80$ cm'], 1, 'Metade da volta: $20$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A bicicleta', 'A roda de uma bicicleta tem diâmetro de $60$ cm. Quantos metros a bicicleta percorre em $100$ voltas completas da roda? (use $π = 3,14$)', ['$94,2$ m', '$120$ m', '$188,4$ m', '$314$ m', '$376,8$ m'], 2, '$C = 3,14 · 60 = 188,4$ cm; $100 · 188,4 = 18 840$ cm $= 188,4$ m. <strong>Alternativa C.</strong>'],
      cuidados: [['Confundir C com área', '$C = 2πr$ (comprimento); área é $πr²$.'], ['Usar o raio na fórmula do diâmetro', '$C = πd$ usa o diâmetro; $2πr$ usa o raio.'], ['Unidades', 'Converta cm e m antes de dividir.'], ['Arco em graus', 'Divida o ângulo por $360°$ para achar a fração da volta.']],
      quiz: [
        { q: '$C$ de uma circunferência de raio $3$ ($π = 3,14$):', o: ['$9,42$', '$18,84$', '$28,26$', '$37,68$'], a: 1 },
        { q: 'Uma semicircunferência mede:', o: ['$C$', '$C ÷ 2$', '$2C$', '$C ÷ 4$'], a: 1 },
        { q: 'Roda com $C = 2$ m percorre $20$ m em quantas voltas?', o: ['$5$', '$10$', '$20$', '$40$'], a: 1 },
        { q: 'O perímetro do círculo é o comprimento:', o: ['do diâmetro', 'do raio', 'da circunferência', 'do setor'], a: 2 }
      ],
      sintese: [['Fórmula', 'C = 2πr = πd.'], ['Voltas', 'Distância ÷ C.'], ['Arco', 'Fração da volta vezes C.']],
      msg: 'Próximo módulo: ângulo central e ângulo inscrito.'
    }
  ]
});
