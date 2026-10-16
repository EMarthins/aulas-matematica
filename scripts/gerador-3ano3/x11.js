// Módulo 11 · Matemática · 3ª série · 3º trimestre — Retomadas do trimestre (aulas R17 a R21 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('../gerador-9ano/wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wvol = Wd.volume('rv21');

const hexa = (() => {
  const cx = 110, cy = 80, r = 62, p = [];
  for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + 2 * Math.PI * i / 6; p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  const pts = p.map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
  return svg(220, 160, `<polygon points="${pts}" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/>` + p.map(q => `<line x1="${cx}" y1="${cy}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="var(--decay)" stroke-width="2" stroke-dasharray="5 4"/>`).join(''), '240px');
})();

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/retomadas-do-trimestre/',
  titulo: 'Retomadas do trimestre', accent: 'success', icon: 'grid', key: 'm3x11', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas de retomada R17 a R21 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Revisões de conteúdos do Ensino Fundamental e do início do Ensino Médio, com foco em avaliações externas.'],
  aulas: [
    // ------------------------------------------------------------ R17
    {
      slug: 'retomada-porcentagem-e-area-de-figuras-planas', titulo: 'Retomada: porcentagem envolvendo área de figuras planas',
      h1: `Retomada: ${co('success')}porcentagem e área</span> de figuras planas`,
      sub: 'Quando as dimensões de uma figura aumentam ou diminuem em certa porcentagem, a área não varia na mesma porcentagem. Vamos entender por quê e calcular variações.',
      badges: [['porcentagem'], ['área', 'growth'], ['fator', 'decay']], color: 'primary',
      roteiro: ['Variação da área quando os lados mudam.', [['Fator de variação', '1 ± taxa', 'target'], ['Lado × área', 'o fator ao quadrado', 'scale'], ['Retângulo', 'dois lados mudam', 'chart'], ['Variação percentual', '(fator − 1) · 100', 'book'], ['Problemas', 'terrenos e telas', 'bulb']]],
      objetivos: ['Calcular a <strong>variação percentual da área</strong> quando as dimensões variam.', 'Usar o <strong>fator multiplicativo</strong> ($1 ± taxa$).', 'Resolver problemas de <strong>terrenos, telas e molduras</strong>.'],
      dica: 'Se as <strong>duas</strong> dimensões são multiplicadas por $k$, a área é multiplicada por $k²$. Se só uma, por $k$.',
      gancho: { titulo: 'O terreno que cresce', texto: 'Um terreno quadrado de lado $10$ m terá o lado aumentado em $20%$. O lado passa a $12$ m e a área, de $100$ m² para $144$ m²: um aumento de $44%$, e não de $20%$.', mini: ['Aumentando $10%$ nos dois lados de um retângulo, a área aumenta:', ['$10%$', '$20%$', '$21%$', '$100%$'], 2, '$1,1 · 1,1 = 1,21$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · fatores', 'Quadrado do fator', g2(`<div>
              ${checks(['<strong>Aumento de $i%$:</strong> fator $1 + i$. <strong>Redução:</strong> $1 − i$.', 'Dimensões multiplicadas por $k$ ⇒ área multiplicada por <strong>$k²$</strong> (semelhança).', 'Retângulo com lados multiplicados por $k_{1}$ e $k_{2}$: área multiplicada por $k_{1} · k_{2}$.', '<strong>Variação percentual:</strong> $(fator − 1) · 100%$.'], '.95rem')}
            </div>`, card(`<strong>Tabela</strong>
              ${tbl(['Lado', 'Fator do lado', 'Fator da área', 'Variação da área'], [['$+10%$', '$1,1$', '$1,21$', '$+21%$'], ['$+20%$', '$1,2$', '$1,44$', '$+44%$'], ['$+50%$', '$1,5$', '$2,25$', '$+125%$'], ['$−10%$', '$0,9$', '$0,81$', '$−19%$']])}`, 'primary'))],
        ['Teoria · dois lados diferentes', 'Retângulos', g2(`<div>
              ${checks(['Aumento de $20%$ na base e redução de $10%$ na altura: fator $1,2 · 0,9 = 1,08$ ⇒ área aumenta $8%$.', 'Triângulos: área $= {b h|2}$, também multiplicada por $k_{b} · k_{h}$.', 'Círculos: área $π r²$, multiplicada por $k²$ quando o raio é multiplicado por $k$.', 'Sempre calcule o fator antes da variação percentual.'], '.95rem')}
            </div>`, callout('Armadilha', 'Aumentar o lado em $20%$ <strong>não</strong> aumenta a área em $20%$: aumenta $44%$.', 'primary'))]
      ],
      exemplos: [
        ['Variação da área', 'A base de um retângulo aumenta $25%$ e a altura diminui $20%$. Qual a variação percentual da área?', [['Fatores', '$1,25$ e $0,8$.'], ['Produto', '$1,25 · 0,8 = 1$.']], 'A área <strong>não muda</strong> (variação de $0%$).'],
        ['Tela maior', 'Uma tela de $40$ cm × $30$ cm tem as duas dimensões aumentadas em $50%$. Qual o aumento percentual da área?', [['Fator', '$1,5 · 1,5 = 2,25$.']], 'A área aumenta <strong>125%</strong>.']
      ],
      pratique: [
        ['Quadrado', 'O lado de um quadrado aumenta $30%$. A área aumenta:', ['$30%$', '$60%$', '$69%$', '$90%$'], 2, '$1,3² = 1,69$. <strong>Alternativa C.</strong>'],
        ['Redução', 'O raio de um círculo diminui $50%$. A área diminui:', ['$25%$', '$50%$', '$75%$', '$100%$'], 2, '$0,5² = 0,25$: reduz $75%$. <strong>Alternativa C.</strong>'],
        ['Retângulo', 'Base $+10%$ e altura $+20%$: a área aumenta:', ['$30%$', '$32%$', '$22%$', '$12%$'], 1, '$1,1 · 1,2 = 1,32$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A moldura', 'Uma moldura quadrada de lado $50$ cm será trocada por outra com $10%$ a mais no lado. A área da nova moldura, em relação à antiga, é:', ['$10%$ maior', '$20%$ maior', '$21%$ maior', '$25%$ maior', '$110%$ maior'], 2, '$1,1² = 1,21$. <strong>Alternativa C.</strong>'],
      cuidados: [['Somar percentuais', 'Os fatores se multiplicam; não some as taxas.'], ['Fator da área igual ao do lado', 'Com duas dimensões, eleve ao quadrado.'], ['Redução de $x%$ = fator $x$', 'Redução de $10%$ é fator $0,9$.'], ['Perímetro × área', 'O perímetro varia com o fator simples; a área, com o quadrado.']],
      quiz: [
        { q: 'Lado $+20%$ ⇒ área:', o: ['$+20%$', '$+40%$', '$+44%$', '$+4%$'], a: 2 },
        { q: 'Lados $×2$ ⇒ área:', o: ['$×2$', '$×4$', '$×6$', '$×8$'], a: 1 },
        { q: 'Fator de redução de $25%$:', o: ['$0,25$', '$0,75$', '$1,25$', '$0,5$'], a: 1 },
        { q: 'Base $+50%$ e altura igual ⇒ área:', o: ['$+50%$', '$+25%$', '$+100%$', '$+75%$'], a: 0 }
      ],
      sintese: [['Fatores', '1 ± taxa; multiplicam-se.'], ['Semelhança', 'Área × k² quando tudo é × k.'], ['Variação', '(fator − 1) · 100%.']],
      msg: 'Na próxima retomada: variação proporcional entre grandezas.'
    },
    // ------------------------------------------------------------ R18
    {
      slug: 'retomada-variacao-proporcional-entre-grandezas', titulo: 'Retomada: variação proporcional entre grandezas',
      h1: `Retomada: ${co('success')}variação proporcional</span> entre grandezas`,
      sub: 'Grandezas podem variar de modo direto, inverso ou com o quadrado/cubo. Reconhecer o tipo de proporcionalidade e aplicar a regra de três resolve a maior parte dos problemas.',
      badges: [['direta'], ['inversa', 'growth'], ['regra de três', 'decay']], color: 'primary',
      roteiro: ['Tipos de variação e regra de três.', [['Direta', 'razão constante', 'target'], ['Inversa', 'produto constante', 'scale'], ['Regra de três', 'simples e composta', 'chart'], ['Quadrado e cubo', 'área e volume', 'book'], ['Problemas', 'escala e consumo', 'bulb']]],
      objetivos: ['Distinguir <strong>proporcionalidade direta, inversa</strong> e outras variações.', 'Resolver problemas com <strong>regra de três</strong>.', 'Relacionar <strong>escala</strong>, área e volume.'],
      dica: 'Teste: se uma grandeza <strong>dobra</strong> e a outra também dobra, é direta; se a outra cai pela <strong>metade</strong>, é inversa.',
      gancho: { titulo: 'A receita e o forno', texto: 'Para assar $12$ pães, usa-se $600$ g de farinha (direta: mais pães, mais farinha). Já se $4$ pedreiros levam $6$ dias, $8$ pedreiros levam $3$ dias (inversa).', mini: ['Se $5$ canetas custam R$ 20, $8$ canetas custam:', ['R$ 24', 'R$ 28', 'R$ 32', 'R$ 40'], 2, '${20|5} = 4$ por caneta; $8 · 4 = 32$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · direta e inversa', 'Dois comportamentos', g2(`<div>
              ${checks(['<strong>Direta:</strong> ${y|x} = k$ (razão constante); o gráfico é uma reta pela origem.', '<strong>Inversa:</strong> $x · y = k$ (produto constante); o gráfico é uma hipérbole.', '<strong>Regra de três:</strong> monte a tabela, classifique e iguale as razões (invertendo uma delas, se inversa).', 'Também há variação com o <strong>quadrado</strong> (área) e o <strong>cubo</strong> (volume) do comprimento.'], '.95rem')}
            </div>`, card(`<strong>Exemplos</strong>
              ${tbl(['Situação', 'Tipo'], [['preço × quantidade', 'direta'], ['velocidade × tempo (mesma distância)', 'inversa'], ['área × lado', 'quadrática'], ['volume × aresta', 'cúbica']])}`, 'primary'))],
        ['Teoria · escala', 'Comprimento, área e volume', g2(`<div>
              ${checks(['Escala linear $1 : k$: comprimentos ficam $k$ vezes menores.', 'Áreas: $k²$ vezes menores. Volumes: $k³$ vezes menores.', 'Exemplo: maquete $1 : 50$ — um cômodo de $25$ m² vira $25 ÷ 2500 = 0,01$ m² $= 100$ cm².', 'Atenção às unidades ao converter.'], '.95rem')}
            </div>`, callout('Dica', 'Escala de áreas: eleve a escala ao quadrado; de volumes: ao cubo.', 'primary'))]
      ],
      exemplos: [
        ['Regra de três inversa', '$6$ operários terminam uma obra em $20$ dias. Em quantos dias $8$ operários terminam?', [['Produto constante', '$6 · 20 = 120$.'], ['Novo prazo', '$120 ÷ 8 = 15$.']], '<strong>15 dias</strong>.'],
        ['Maquete', 'Uma maquete tem escala $1 : 100$. Um prédio com $30$ m de altura tem na maquete qual altura?', [['Conversão', '$30$ m $= 3000$ cm.'], ['Divida', '$3000 ÷ 100 = 30$ cm.']], 'A altura é <strong>30 cm</strong>.']
      ],
      pratique: [
        ['Direta', 'Se $3$ kg custam R$ 18, $5$ kg custam:', ['R$ 25', 'R$ 28', 'R$ 30', 'R$ 36'], 2, '${18|3} = 6$; $5 · 6 = 30$. <strong>Alternativa C.</strong>'],
        ['Inversa', 'A $60$ km/h uma viagem leva $4$ h. A $80$ km/h levaria:', ['$2$ h', '$3$ h', '$5$ h', '$6$ h'], 1, '$60 · 4 = 240$; $240 ÷ 80 = 3$. <strong>Alternativa B.</strong>'],
        ['Escala de área', 'Escala $1 : 10$: uma área de $50$ cm² no desenho corresponde, na realidade, a:', ['$500$ cm²', '$5 000$ cm²', '$50 000$ cm²', '$100$ cm²'], 1, '$50 · 10² = 5000$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A caixa-d’água', 'Duas torneiras iguais enchem uma caixa em $6$ horas. Com $3$ torneiras iguais a essas, o tempo é:', ['$2$ h', '$3$ h', '$4$ h', '$9$ h', '$12$ h'], 2, '$2 · 6 = 12$; $12 ÷ 3 = 4$. <strong>Alternativa C.</strong>'],
      cuidados: [['Tratar inversa como direta', 'Mais operários, menos dias.'], ['Escala linear × área', 'Para áreas, eleve ao quadrado.'], ['Unidades misturadas', 'Converta antes de calcular.'], ['Regra de três mal montada', 'Mantenha a mesma ordem das grandezas.']],
      quiz: [
        { q: 'Dobrando o tempo (inversa), a velocidade:', o: ['dobra', 'cai pela metade', 'não muda', 'triplica'], a: 1 },
        { q: 'Volumes em escala $1 : 2$ ficam:', o: ['$2$ vezes menores', '$4$ vezes menores', '$8$ vezes menores', 'iguais'], a: 2 },
        { q: 'Grandezas diretamente proporcionais têm:', o: ['razão constante', 'produto constante', 'soma constante', 'diferença constante'], a: 0 },
        { q: '$4$ máquinas fazem um serviço em $6$ h; $12$ máquinas fazem em:', o: ['$2$ h', '$3$ h', '$18$ h', '$24$ h'], a: 0 }
      ],
      sintese: [['Direta', 'y ÷ x constante.'], ['Inversa', 'x · y constante.'], ['Escala', 'Linear k; área k²; volume k³.']],
      msg: 'Na próxima retomada: volume de sólidos geométricos.'
    },
    // ------------------------------------------------------------ R19
    {
      slug: 'retomada-volume-de-um-solido-geometrico', titulo: 'Retomada: volume de um sólido geométrico',
      h1: `Retomada: ${co('success')}volume</span> de sólidos geométricos`,
      sub: 'Prismas, cilindros, pirâmides, cones e esferas têm fórmulas de volume. Revemos todas e resolvemos problemas de capacidade e de composição de sólidos.',
      badges: [['prisma e cilindro'], ['pirâmide e cone', 'growth'], ['esfera', 'decay']], color: 'primary',
      roteiro: ['Fórmulas e aplicações.', [['Prismas e cilindros', 'A_b · h', 'target'], ['Pirâmides e cones', 'A_b · h ÷ 3', 'scale'], ['Esfera', '4πr³ ÷ 3', 'chart'], ['Capacidade', 'litros', 'book'], ['Compostos', 'somar e subtrair', 'bulb']]],
      objetivos: ['Aplicar as <strong>fórmulas de volume</strong> dos sólidos usuais.', 'Converter <strong>m³, dm³ e litros</strong>.', 'Calcular volumes de <strong>sólidos compostos</strong>.'],
      dica: 'Prismas/cilindros: $V = A_{b} · h$. Pirâmides/cones: $V = {A_{b} · h|3}$. Esfera: $V = {4π r³|3}$.',
      gancho: { titulo: 'O copo e o cone', texto: 'Um cone e um cilindro têm a mesma base e a mesma altura. O cone ocupa exatamente <strong>um terço</strong> do volume do cilindro: três cones cheios de água enchem o cilindro.', mini: ['O volume de uma pirâmide de base $A_{b}$ e altura $h$ é:', ['$A_{b} · h$', '${A_{b} · h|3}$', '${A_{b} · h|2}$', '$3 A_{b} h$'], 1, 'Um terço do prisma. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fórmulas', 'Volumes principais', g2(`<div>
              ${tbl(['Sólido', 'Volume'], [['prisma / cilindro', '$A_{b} · h$ (cilindro: $π r² h$)'], ['pirâmide / cone', '${A_{b} · h|3}$ (cone: ${π r² h|3}$)'], ['esfera', '${4π r³|3}$'], ['cubo', '$a³$'], ['bloco retangular', '$a · b · c$']])}
            </div>`, callout('Unidades', '$1$ m³ $= 1000$ L; $1$ dm³ $= 1$ L; $1$ cm³ $= 1$ mL.', 'primary'))],
        ['Teoria · simulador e composição', 'Experimente', g2(`<div>
              ${checks(['Use o simulador para comparar volumes de sólidos com a mesma base e altura.', '<strong>Sólido composto:</strong> some (ou subtraia) os volumes das partes.', 'Exemplo: cilindro de $r = 2$ e $h = 5$ com um cone de mesma base e altura $3$ em cima: $V = 20π + 4π = 24π$.', '<strong>Princípio de Cavalieri:</strong> sólidos de mesma altura e áreas iguais nas seções têm o mesmo volume.'], '.95rem')}
            </div>`, card(`<strong>Esfera</strong>
              <p style="font-size:.92rem;margin-top:8px;">$r = 3$: $V = {4π · 27|3} = 36π ≈ 113$.</p>`, 'primary'))]
      ],
      widget: { titulo: 'Volumes de sólidos', html: wvol.html, js: wvol.js },
      exemplos: [
        ['Cilindro e cone', 'Um cone tem raio $3$ cm e altura $10$ cm. Calcule o volume ($π = 3,14$).', [['Base', '$π · 9 = 28,26$.'], ['Volume', '${28,26 · 10|3} = 94,2$.']], '$V ≈ 94,2$ cm³.'],
        ['Esfera', 'Calcule o volume de uma esfera de raio $6$ cm em função de $π$.', [['Fórmula', '${4π r³|3}$.'], ['Calcule', '${4π · 216|3} = 288π$.']], '$V = 288π$ cm³.']
      ],
      pratique: [
        ['Pirâmide', 'Base de $12$ cm² e altura $5$ cm: o volume da pirâmide é:', ['$20$ cm³', '$30$ cm³', '$60$ cm³', '$17$ cm³'], 0, '${12 · 5|3} = 20$. <strong>Alternativa A.</strong>'],
        ['Cilindro', 'Cilindro de $r = 5$ e $h = 10$ ($π = 3$): volume:', ['$250$', '$500$', '$750$', '$1 500$'], 2, '$3 · 25 · 10 = 750$. <strong>Alternativa C.</strong>'],
        ['Capacidade', 'Um reservatório de $2$ m³ comporta quantos litros?', ['$20$ L', '$200$ L', '$2 000$ L', '$20 000$ L'], 2, '$1$ m³ $= 1000$ L. <strong>Alternativa C.</strong>']
      ],
      enem: ['O silo', 'Um silo tem a forma de um cilindro de $4$ m de diâmetro e $6$ m de altura. Com $π = 3$, o volume é:', ['$24$ m³', '$48$ m³', '$72$ m³', '$144$ m³', '$288$ m³'], 2, '$r = 2$: $3 · 4 · 6 = 72$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer o ÷ 3', 'Pirâmides e cones levam um terço.'], ['Diâmetro como raio', 'Divida o diâmetro por $2$.'], ['Unidades', 'Converta para a mesma unidade antes.'], ['Volume × área', 'O volume é em unidades cúbicas.']],
      quiz: [
        { q: 'Volume do cone:', o: ['$π r² h$', '${π r² h|3}$', '$2π r h$', '${4π r³|3}$'], a: 1 },
        { q: 'Volume da esfera:', o: ['${4π r³|3}$', '$4π r²$', '$π r³$', '${π r³|3}$'], a: 0 },
        { q: '$1$ dm³ equivale a:', o: ['$1$ L', '$10$ L', '$100$ L', '$0,1$ L'], a: 0 },
        { q: 'Cubo de aresta $3$: volume:', o: ['$9$', '$18$', '$27$', '$81$'], a: 2 }
      ],
      sintese: [['Prisma e cilindro', 'A_b · h.'], ['Pirâmide e cone', 'A_b · h ÷ 3.'], ['Esfera', '4πr³ ÷ 3.']],
      msg: 'Na próxima retomada: relações entre vértices, faces e arestas de um poliedro.'
    },
    // ------------------------------------------------------------ R20
    {
      slug: 'retomada-relacao-entre-vertices-faces-e-arestas', titulo: 'Retomada: relação entre vértices, faces e arestas de um poliedro',
      h1: `Retomada: ${co('success')}vértices, faces e arestas</span> de um poliedro`,
      sub: 'Em todo poliedro convexo, o número de vértices mais o número de faces é igual ao número de arestas mais 2: a relação de Euler. Ela permite achar o que falta.',
      badges: [['V + F = A + 2'], ['Euler', 'growth'], ['poliedros', 'decay']], color: 'primary',
      roteiro: ['Contar e relacionar.', [['Elementos', 'vértices, arestas, faces', 'bulb'], ['Relação de Euler', 'V + F = A + 2', 'target'], ['Contar arestas', 'pela soma dos lados', 'chart'], ['Poliedros de Platão', 'cinco', 'book'], ['Problemas', 'achar o que falta', 'scale']]],
      objetivos: ['Identificar <strong>vértices, arestas e faces</strong>.', 'Aplicar a <strong>relação de Euler</strong> $V + F = A + 2$.', 'Contar <strong>arestas</strong> por faces: $2A = $ soma dos lados das faces.'],
      dica: 'Contagem de arestas: cada aresta pertence a <strong>duas</strong> faces; logo $2A = $ (soma do número de lados de todas as faces).',
      gancho: { titulo: 'O cubo e a pirâmide', texto: 'Um cubo tem $8$ vértices, $6$ faces e $12$ arestas: $8 + 6 = 12 + 2$ ✓. Uma pirâmide de base quadrada tem $5$ vértices, $5$ faces e $8$ arestas: $5 + 5 = 8 + 2$ ✓.', mini: ['Um poliedro tem $6$ faces e $8$ arestas. Quantos vértices?', ['$4$', '$6$', '$8$', '$12$'], 0, '$V + 6 = 8 + 2$ ⇒ $V = 4$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · relação de Euler', 'V + F = A + 2', g2(`<div>
              ${checks(['<strong>Poliedro convexo:</strong> vale <strong>$V + F = A + 2$</strong>.', '<strong>Contagem de arestas:</strong> $2A = $ soma dos lados das faces (cada aresta é contada duas vezes).', '<strong>Contagem alternativa:</strong> $2A = $ soma dos graus dos vértices.', 'Exemplo: poliedro com $4$ faces triangulares e $4$ vértices ⇒ $A = {4 · 3|2} = 6$; $4 + 4 = 6 + 2$ ✓ (tetraedro).'], '.95rem')}
            </div>`, card(`<strong>Poliedros de Platão</strong>
              ${tbl(['Poliedro', 'V', 'F', 'A'], [['tetraedro', '$4$', '$4$', '$6$'], ['hexaedro (cubo)', '$8$', '$6$', '$12$'], ['octaedro', '$6$', '$8$', '$12$'], ['dodecaedro', '$20$', '$12$', '$30$'], ['icosaedro', '$12$', '$20$', '$30$']])}`, 'primary'))],
        ['Teoria · problemas típicos', 'Achar o que falta', g2(`<div>
              ${checks(['Dado $F$ e $A$: $V = A + 2 − F$.', 'Poliedro com faces de dois tipos: $2A = 3 F_{3} + 4 F_{4} + …$.', 'Exemplo: $8$ faces triangulares e $6$ vértices: $A = {8 · 3|2} = 12$ e $V + F = A + 2$ ⇒ $6 + 8 = 14$ ✓.', 'Poliedro com $12$ arestas e $6$ vértices tem $F = 12 + 2 − 6 = 8$ faces.'], '.95rem')}
            </div>`, callout('Verifique', 'Ao achar um dos três valores, confira se $V + F − A = 2$.', 'primary'))]
      ],
      exemplos: [
        ['Achar vértices', 'Um poliedro convexo tem $7$ faces e $15$ arestas. Quantos vértices?', [['Euler', '$V + 7 = 15 + 2$.'], ['Resolva', '$V = 10$.']], '<strong>10 vértices</strong>.'],
        ['Contar arestas', 'Um poliedro tem $4$ faces triangulares e $3$ quadrangulares. Quantas arestas?', [['Soma dos lados', '$4 · 3 + 3 · 4 = 24$.'], ['Divida por 2', '$A = 12$.']], 'Tem <strong>12 arestas</strong> (e $V = 12 + 2 − 7 = 7$).']
      ],
      pratique: [
        ['Faltante', 'Um poliedro tem $9$ arestas e $5$ vértices. Quantas faces?', ['$4$', '$5$', '$6$', '$7$'], 2, '$F = 9 + 2 − 5 = 6$. <strong>Alternativa C.</strong>'],
        ['Arestas', 'Um poliedro com $6$ faces quadrangulares tem arestas:', ['$8$', '$10$', '$12$', '$24$'], 2, '${6 · 4|2} = 12$. <strong>Alternativa C.</strong>'],
        ['Verificar', 'Qual terna $(V, F, A)$ satisfaz Euler?', ['$(5, 5, 8)$', '$(5, 5, 10)$', '$(6, 6, 6)$', '$(4, 4, 4)$'], 0, '$5 + 5 = 8 + 2$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A bola de futebol', 'Uma bola é feita de $12$ pentágonos e $20$ hexágonos (icosaedro truncado). Quantas arestas tem?', ['$60$', '$80$', '$90$', '$120$', '$180$'], 2, '$2A = 12 · 5 + 20 · 6 = 180$ ⇒ $A = 90$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer o ÷ 2', 'Cada aresta é compartilhada por duas faces.'], ['Euler fora dos convexos', 'A relação vale para poliedros convexos (e outros sem “buracos”).'], ['Confundir $A$ com $F$', 'Arestas são segmentos; faces são polígonos.'], ['Soma errada', 'Conte cada face pelo seu número de lados.']],
      quiz: [
        { q: 'A relação de Euler é:', o: ['$V + F = A + 2$', '$V + A = F + 2$', '$V − F = A$', '$V + F + A = 2$'], a: 0 },
        { q: 'O cubo tem quantas arestas?', o: ['$6$', '$8$', '$12$', '$16$'], a: 2 },
        { q: 'Poliedro com $5$ vértices e $8$ arestas tem faces:', o: ['$3$', '$4$', '$5$', '$6$'], a: 2 },
        { q: '$2A$ é igual a:', o: ['soma dos lados das faces', 'soma das faces', 'número de vértices', '$V + F$'], a: 0 }
      ],
      sintese: [['Euler', 'V + F = A + 2.'], ['Arestas', '2A = soma dos lados das faces.'], ['Platão', 'Cinco poliedros regulares.']],
      msg: 'Na última retomada: elementos de poliedros, hexágono regular e perímetro de regiões compostas.'
    },
    // ------------------------------------------------------------ R21
    {
      slug: 'retomada-elementos-do-poliedro-e-perimetros', titulo: 'Retomada: elementos de um poliedro, hexágono regular e perímetro de região composta',
      h1: `Retomada: ${co('success')}poliedros, hexágono regular e perímetros</span>`,
      sub: 'O hexágono regular se divide em seis triângulos equiláteros, e a distância do centro a qualquer vértice é igual ao lado. Com isso calculamos perímetros de regiões compostas e analisamos poliedros.',
      badges: [['hexágono regular'], ['perímetro composto', 'growth'], ['elementos', 'decay']], color: 'primary',
      roteiro: ['Geometria de itens de prova.', [['Elementos do poliedro', 'V, F, A', 'bulb'], ['Hexágono regular', '6 triângulos equiláteros', 'target'], ['Raio = lado', 'centro ao vértice', 'scale'], ['Perímetro composto', 'só o contorno externo', 'chart'], ['Problemas', 'estilo prova', 'book']]],
      objetivos: ['Identificar os <strong>elementos de um poliedro</strong> (vértices, arestas, faces).', 'Usar a propriedade do <strong>hexágono regular</strong> (6 triângulos equiláteros).', 'Calcular o <strong>perímetro de regiões compostas</strong>.'],
      dica: '<strong>Perímetro</strong> de uma figura composta: soma apenas dos lados do <strong>contorno externo</strong>. Lados internos (de junção) não entram.',
      gancho: { titulo: 'O ladrilho hexagonal', texto: 'Um ladrilho hexagonal regular de lado $10$ cm tem perímetro $60$ cm. Do centro a cada vértice a distância é $10$ cm. Juntando $3$ ladrilhos em torno de um vértice, o contorno externo muda.', mini: ['O hexágono regular se divide em:', ['4 triângulos retângulos', '6 triângulos equiláteros', '3 quadrados', '6 quadrados'], 1, 'Cada triângulo tem lado igual ao do hexágono. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · hexágono regular', 'Seis triângulos equiláteros', g2(`<div>
              ${checks(['O hexágono regular tem $6$ lados iguais ($ℓ$) e $6$ ângulos de $120°$.', 'Ele se divide em <strong>6 triângulos equiláteros</strong> de lado $ℓ$.', 'Logo, o <strong>raio</strong> (centro a vértice) é igual ao lado: $r = ℓ$.', 'Área $= 6 · {ℓ² √{3}|4} = {3 ℓ² √{3}|2}$.'], '.95rem')}
            </div>`, `<div>${hexa}</div>`)],
        ['Teoria · perímetro composto e poliedros', 'Contorno externo', g2(`<div>
              ${checks(['<strong>Perímetro da região composta:</strong> $P = $ (número de lados externos) $× ℓ$, se todos iguais.', 'Dois hexágonos de lado $ℓ$ unidos por um lado: contorno com $10$ lados ⇒ $P = 10ℓ$ (não $12ℓ$).', '<strong>Poliedro:</strong> $V + F = A + 2$ (Euler); $2A = $ soma dos lados das faces.', 'Prisma hexagonal: $12$ vértices, $8$ faces e $18$ arestas.'], '.95rem')}
            </div>`, callout('Verifique', 'Prisma hexagonal: $12 + 8 = 18 + 2$ ✓.', 'primary'))]
      ],
      exemplos: [
        ['Perímetro composto', 'Três hexágonos regulares de lado $5$ cm são unidos em fila, dois a dois por um lado inteiro. Qual o perímetro da região?', [['Lados totais', '$3 · 6 = 18$.'], ['Lados internos', '$2$ junções, cada uma esconde $2$ lados: $4$ lados.'], ['Contorno', '$18 − 4 = 14$ lados.']], '$P = 14 · 5 = 70$ cm.'],
        ['Elementos do prisma', 'Quantos vértices, faces e arestas tem um prisma triangular?', [['Vértices', '$3 + 3 = 6$.'], ['Faces', '$3$ laterais $+ 2$ bases $= 5$.'], ['Arestas', '$6 + 3 = 9$.']], '$V = 6$, $F = 5$, $A = 9$ (Euler: $6 + 5 = 9 + 2$ ✓).']
      ],
      pratique: [
        ['Hexágono', 'O raio de um hexágono regular de lado $8$ cm é:', ['$4$ cm', '$8$ cm', '$8√{3}$ cm', '$16$ cm'], 1, 'Raio igual ao lado. <strong>Alternativa B.</strong>'],
        ['Perímetro', 'Dois hexágonos regulares de lado $4$ cm unidos por um lado: perímetro:', ['$36$ cm', '$40$ cm', '$44$ cm', '$48$ cm'], 1, '$12 − 2 = 10$ lados; $10 · 4 = 40$. <strong>Alternativa B.</strong>'],
        ['Poliedro', 'Um prisma hexagonal tem quantas arestas?', ['$12$', '$16$', '$18$', '$20$'], 2, '$6 + 6 + 6 = 18$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O pavimento', 'Um calçamento tem $3$ ladrilhos hexagonais regulares de lado $ℓ$ ao redor de um vértice comum, em forma de “trevo”. O perímetro do contorno externo é:', ['$12ℓ$', '$13ℓ$', '$14ℓ$', '$15ℓ$', '$18ℓ$'], 0, 'Cada hexágono mostra $4$ lados externos: $3 · 4 = 12$ lados. <strong>Alternativa A.</strong>'],
      cuidados: [['Contar lados internos', 'Lados em comum não fazem parte do contorno.'], ['Confundir raio e apótema', 'No hexágono regular, o raio vale o lado; o apótema é ${ℓ √{3}|2}$.'], ['Euler fora do convexo', 'Use em poliedros convexos.'], ['Perímetro × área', 'Perímetro soma lados; área mede superfície.']],
      quiz: [
        { q: 'O ângulo interno do hexágono regular é:', o: ['$60°$', '$90°$', '$120°$', '$150°$'], a: 2 },
        { q: 'O hexágono regular se divide em triângulos:', o: ['retângulos', 'equiláteros', 'escalenos', 'obtusângulos'], a: 1 },
        { q: 'No perímetro composto contam-se:', o: ['todos os lados', 'só os do contorno externo', 'só os internos', 'só os maiores'], a: 1 },
        { q: 'Prisma triangular tem arestas:', o: ['$6$', '$9$', '$12$', '$15$'], a: 1 }
      ],
      sintese: [['Hexágono', '6 triângulos equiláteros; raio = lado.'], ['Perímetro composto', 'Só o contorno externo.'], ['Poliedros', 'Euler e contagem de arestas.']],
      msg: 'Fechamos a Matemática da 3ª série no 3º trimestre.'
    }
  ]
});
