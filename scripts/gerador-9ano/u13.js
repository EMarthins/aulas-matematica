// Módulo 13 · 9º ano · Recomposição · 2º trimestre — Ângulos na circunferência e problemas (aulas 39 a 42 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wa = Wd.angInscrito('ra1');

const ang = svg(240, 190, `<circle cx="120" cy="95" r="72" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><polyline points="120,95 192,95 120,23" fill="none" stroke="var(--decay)" stroke-width="3"/><polyline points="48,95 192,95 120,23" fill="none" stroke="var(--growth)" stroke-width="2" stroke-dasharray="5 4"/><circle cx="120" cy="95" r="3.5" fill="var(--ink)"/><text x="140" y="88" font-size="13" fill="var(--decay)">central</text><text x="82" y="62" font-size="13" fill="var(--growth)">inscrito</text>`, '300px');

module.exports = unidade({
  tri: 2, dir: 'angulos-na-circunferencia', titulo: 'Ângulos na circunferência e problemas', accent: 'decay', icon: 'wave', key: 'r2u7',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'angulo-central-e-inscrito-i', titulo: 'Ângulo central e ângulo inscrito I',
      h1: `Ângulo ${co('decay')}central</span> e ângulo inscrito`,
      sub: 'Ângulo central tem vértice no centro; ângulo inscrito tem vértice na circunferência. O central vale exatamente o arco que enxerga.',
      badges: [['central'], ['inscrito', 'growth'], ['arco', 'decay']], color: 'decay',
      roteiro: ['Definições e a medida do arco.', [['Ângulo central', 'vértice no centro', 'target'], ['Arco correspondente', 'mesma medida', 'bulb'], ['Ângulo inscrito', 'vértice na circunferência', 'scale'], ['A relação', 'inscrito = metade', 'chart'], ['Exemplos', 'achar o ângulo', 'book']]],
      objetivos: ['Definir <strong>ângulo central</strong> e <strong>ângulo inscrito</strong>.', 'Relacionar o ângulo central ao <strong>arco</strong>.', 'Aplicar: <strong>inscrito = metade do central</strong> (mesmo arco).'],
      dica: 'Ângulo central = <strong>arco</strong> correspondente. Ângulo inscrito = <strong>metade</strong> do arco (ou do central).',
      gancho: { titulo: 'O ângulo da fatia', texto: 'Uma pizza redonda foi cortada em <strong>8 fatias iguais</strong>. Qual é o ângulo de cada fatia, medido no centro da pizza?', mini: ['O ângulo central de cada fatia:', ['$30°$', '$36°$', '$45°$', '$60°$'], 2, '$360° ÷ 8 = 45°$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · ângulo central', 'Vértice no centro', g2(`<div>
              ${checks(['<strong>Ângulo central:</strong> vértice no centro $O$; lados são raios.', 'A medida do ângulo central é igual à medida do <strong>arco</strong> que ele determina.', 'Circunferência inteira: $360°$; semicircunferência: $180°$.', 'Pizza em $6$ fatias iguais: $360° ÷ 6 = 60°$ cada.'], '.95rem')}
            </div>`, `<div>${ang}</div>`)],
        ['Teoria · ângulo inscrito', 'Vértice na circunferência', g2(`<div>
              ${checks(['<strong>Ângulo inscrito:</strong> vértice na circunferência; lados são cordas.', 'Mede <strong>metade</strong> do arco que enxerga: $"inscrito" = {"arco"|2}$.', 'Se o central de $80°$ e o inscrito enxergam o mesmo arco, o inscrito mede $40°$.', 'Ângulo inscrito em uma <strong>semicircunferência</strong> mede $90°$.'], '.95rem')}
            </div>`, callout('Dica de memória', 'O centro "enxerga" o arco por inteiro; um ponto da circunferência enxerga só metade.', 'decay'))]
      ],
      exemplos: [
        ['Do arco ao inscrito', 'Um arco mede $110°$. Qual é o ângulo central e qual o inscrito que enxergam esse arco?', [['Central', 'Igual ao arco: $110°$.'], ['Inscrito', 'Metade: $55°$.']], 'Central <strong>110°</strong>; inscrito <strong>55°</strong>.'],
        ['Do inscrito ao arco', 'Um ângulo inscrito mede $38°$. Qual é o arco correspondente?', [['Relação', 'Arco $= 2 · $ inscrito.'], ['Calcular', '$2 · 38° = 76°$.']], 'O arco mede <strong>76°</strong>.']
      ],
      widget: { titulo: 'Central e inscrito no mesmo arco', html: wa.html, js: wa.js },
      pratique: [
        ['Central', 'Uma pizza dividida em $12$ fatias iguais: o ângulo central de cada fatia mede:', ['$15°$', '$30°$', '$45°$', '$60°$'], 1, '$360° ÷ 12 = 30°$. <strong>Alternativa B.</strong>'],
        ['Inscrito', 'O arco $AB$ mede $140°$. O ângulo inscrito que o enxerga mede:', ['$35°$', '$70°$', '$140°$', '$280°$'], 1, 'Metade: $70°$. <strong>Alternativa B.</strong>'],
        ['Semicircunferência', 'Um ângulo inscrito em uma semicircunferência mede:', ['$45°$', '$60°$', '$90°$', '$180°$'], 2, 'Arco de $180°$ ⇒ inscrito de $90°$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O relógio', 'No mostrador circular de um relógio, o ângulo central entre os ponteiros das horas $12$ e $3$ mede:', ['$30°$', '$60°$', '$90°$', '$120°$', '$180°$'], 2, 'São $3$ de $12$ divisões: $3 · 30° = 90°$. <strong>Alternativa C.</strong>'],
      cuidados: [['Central ≠ inscrito', 'O central é o <strong>dobro</strong> do inscrito (mesmo arco).'], ['Arcos diferentes', 'A relação vale quando enxergam o <strong>mesmo arco</strong>.'], ['Soma total', 'Os ângulos centrais de uma volta somam $360°$.'], ['Confundir lados', 'Lados do central são raios; do inscrito, cordas.']],
      quiz: [
        { q: 'O ângulo central é igual ao:', o: ['arco correspondente', 'dobro do arco', 'metade do arco', 'raio'], a: 0 },
        { q: 'Inscrito com arco de $90°$:', o: ['$90°$', '$45°$', '$180°$', '$30°$'], a: 1 },
        { q: 'Ângulos centrais de uma volta somam:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 3 },
        { q: 'O ângulo inscrito tem vértice:', o: ['no centro', 'na circunferência', 'fora do círculo', 'no raio'], a: 1 }
      ],
      sintese: [['Central', 'Vértice no centro; mede o arco.'], ['Inscrito', 'Vértice na circunferência; mede metade do arco.'], ['Volta', '360° em torno do centro.']],
      msg: 'Próxima aula: ângulo inscrito, consequências e exercícios.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'angulo-central-e-inscrito-ii', titulo: 'Ângulo central e ângulo inscrito II',
      h1: `Ângulos na circunferência: ${co('decay')}consequências</span>`,
      sub: 'Dois ângulos inscritos no mesmo arco são iguais; o triângulo formado com um diâmetro é retângulo; os ângulos de um quadrilátero inscrito têm regras próprias.',
      badges: [['mesmo arco'], ['diâmetro', 'growth'], ['quadrilátero inscrito', 'decay']], color: 'decay',
      roteiro: ['Consequências da relação fundamental.', [['Mesmo arco', 'ângulos iguais', 'target'], ['Triângulo no diâmetro', 'sempre retângulo', 'bulb'], ['Quadrilátero inscrito', 'opostos suplementares', 'scale'], ['Equações', 'achar x', 'chart'], ['Problemas', 'usar tudo', 'book']]],
      objetivos: ['Reconhecer que ângulos inscritos no <strong>mesmo arco</strong> são iguais.', 'Usar o <strong>triângulo inscrito com diâmetro</strong> (retângulo).', 'Resolver problemas com <strong>quadrilátero inscrito</strong>.'],
      dica: 'Mesmo arco ⇒ mesmo inscrito. Diâmetro como lado ⇒ ângulo de $90°$ no vértice oposto.',
      gancho: { titulo: 'Dois torcedores', texto: 'Dois torcedores sentados na arquibancada circular olham para o mesmo trecho do campo (o mesmo arco). O ângulo de visão deles é igual?', mini: ['Ângulos inscritos no mesmo arco são:', ['iguais', 'um o dobro do outro', 'suplementares', 'sempre retos'], 0, 'Mesmo arco ⇒ mesma metade. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · consequências', 'Mesmo arco e diâmetro', g2(`<div>
              ${checks(['Todos os ângulos inscritos que enxergam o <strong>mesmo arco</strong> são iguais.', 'Se o lado de um triângulo inscrito é um <strong>diâmetro</strong>, o ângulo oposto é reto ($90°$).', 'Ângulo central $= 2 ·$ inscrito (mesmo arco).', 'Dois inscritos em arcos <strong>complementares</strong> (que somam $360°$) são suplementares.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Arco $AB = 100°$: todo inscrito que o enxerga mede $50°$, e o central mede $100°$.</p>`, 'primary'))],
        ['Teoria · quadrilátero inscrito', 'Ângulos opostos', g2(`<div>
              ${checks(['Em um quadrilátero <strong>inscrito</strong> numa circunferência, ângulos <strong>opostos somam $180°$</strong>.', 'Se um ângulo mede $75°$, o oposto mede $105°$.', 'Retângulo e quadrado são sempre inscritíveis (opostos de $90°$).', 'Um paralelogramo só é inscritível se for retângulo.'], '.95rem')}
            </div>`, callout('Por que 180°?', 'Os dois inscritos opostos enxergam arcos que somam $360°$; metade de $360°$ é $180°$.', 'decay'))]
      ],
      exemplos: [
        ['Triângulo e diâmetro', 'Um triângulo $ABC$ está inscrito em uma circunferência e $AB$ é um diâmetro. Se o ângulo em $A$ mede $35°$, quanto mede o ângulo em $B$?', [['Ângulo em C', 'Está oposto ao diâmetro: $90°$.'], ['Soma', '$A + B + C = 180°$.'], ['Resolver', '$B = 180° − 35° − 90° = 55°$.']], 'O ângulo em $B$ mede <strong>55°</strong>.'],
        ['Quadrilátero inscrito', 'Em um quadrilátero inscrito, dois ângulos opostos medem $x + 30°$ e $2x + 30°$. Quanto vale $x$?', [['Equação', '$(x + 30°) + (2x + 30°) = 180°$.'], ['Resolver', '$3x + 60° = 180°$ ⇒ $3x = 120°$ ⇒ $x = 40°$.']], '$x = 40°$: os ângulos medem <strong>70° e 110°</strong>, que somam $180°$.']
      ],
      pratique: [
        ['Mesmo arco', 'Um ângulo inscrito mede $42°$. Outro, que enxerga o mesmo arco, mede:', ['$21°$', '$42°$', '$84°$', '$138°$'], 1, 'Mesmo arco, mesmo inscrito. <strong>Alternativa B.</strong>'],
        ['Diâmetro', 'Um triângulo inscrito com um lado igual ao diâmetro tem um ângulo de:', ['$30°$', '$45°$', '$60°$', '$90°$'], 3, 'O ângulo oposto ao diâmetro é reto. <strong>Alternativa D.</strong>'],
        ['Quadrilátero', 'Em um quadrilátero inscrito, um ângulo mede $82°$. O ângulo oposto mede:', ['$82°$', '$98°$', '$108°$', '$278°$'], 1, '$180° − 82° = 98°$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A praça circular', 'Três amigos, $A$, $B$ e $C$, estão sobre a borda de uma praça circular, e $AB$ é um diâmetro. O ângulo com vértice em $C$ mede:', ['$30°$', '$45°$', '$60°$', '$90°$', '$180°$'], 3, 'Inscrito no diâmetro: $90°$. <strong>Alternativa D.</strong>'],
      cuidados: [['Arcos diferentes', 'A igualdade de inscritos exige o <strong>mesmo arco</strong>.'], ['Central no lugar do inscrito', 'O central é o dobro; não confunda os dois.'], ['Opostos × vizinhos', 'No quadrilátero inscrito, os <strong>opostos</strong> somam $180°$.'], ['Triângulo sem diâmetro', 'Sem o diâmetro como lado, o ângulo não é reto.']],
      quiz: [
        { q: 'Inscritos no mesmo arco são:', o: ['iguais', 'suplementares', 'complementares', 'sempre retos'], a: 0 },
        { q: 'Triângulo inscrito com diâmetro tem ângulo de:', o: ['$45°$', '$60°$', '$90°$', '$120°$'], a: 2 },
        { q: 'Quadrilátero inscrito: opostos somam:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 1 },
        { q: 'Se o central mede $100°$, o inscrito (mesmo arco):', o: ['$25°$', '$50°$', '$100°$', '$200°$'], a: 1 }
      ],
      sintese: [['Mesmo arco', 'Inscritos iguais.'], ['Diâmetro', 'Triângulo retângulo no vértice oposto.'], ['Quadrilátero inscrito', 'Opostos somam 180°.']],
      msg: 'Próximas aulas: problemas com círculo e circunferência.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'problemas-com-circulo-i', titulo: 'Problemas que envolvem círculo e circunferência I',
      h1: `Problemas com ${co('decay')}círculo e circunferência</span> I`,
      sub: 'Reunimos raio, diâmetro, π, comprimento e arcos em situações do dia a dia: rodas, praças, relógios, pizzas e pistas.',
      badges: [['voltas'], ['arcos', 'growth'], ['pistas', 'decay']], color: 'decay',
      roteiro: ['Treino aplicado com comprimentos.', [['Revisar', 'C = 2πr e arcos', 'book'], ['Rodas', 'distância e voltas', 'chart'], ['Praças', 'cercas e calçadas', 'target'], ['Relógios', 'ângulos nos ponteiros', 'bulb'], ['Conferir', 'estimar com π ≈ 3', 'scale']]],
      objetivos: ['Resolver problemas de <strong>comprimento</strong> e <strong>voltas</strong>.', 'Calcular <strong>arcos</strong> e ângulos em relógios.', '<strong>Estimar</strong> usando $π ≈ 3$.'],
      dica: 'Estimativa rápida: use $π ≈ 3$ para ver se o resultado tem a ordem de grandeza certa.',
      gancho: { titulo: 'O ponteiro dos minutos', texto: 'O ponteiro dos minutos de um relógio mede <strong>10 cm</strong>. Que distância a ponta dele percorre em <strong>15 minutos</strong>? (use $π = 3,14$)', mini: ['Em 15 min, a ponta percorre:', ['$15,7$ cm', '$31,4$ cm', '$62,8$ cm', '$10$ cm'], 0, '$15$ min é ${1|4}$ de volta: $C = 62,8$; ${1|4}$ de $62,8 = 15,7$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · revisão', 'Fórmulas e atalhos', g2(`<div>
              ${checks(['$C = 2πr = πd$; arco $= {α|360°} · C$.', 'Relógio: $360° ÷ 60 = 6°$ por minuto (ponteiro dos minutos); $360° ÷ 12 = 30°$ por hora (marcação).', 'Voltas $= {"distância"|C}$; distância $= "voltas" · C$.', 'Estime com $π ≈ 3$ e depois calcule com $3,14$.'], '.95rem')}
            </div>`, card(`<strong>Relógio</strong>
              ${tbl(['Tempo', 'Ângulo do ponteiro dos minutos'], [['$15$ min', '$90°$'], ['$30$ min', '$180°$'], ['$45$ min', '$270°$'], ['$60$ min', '$360°$']])}`, 'primary'))],
        ['Teoria · estratégia', 'Passo a passo', g2(`<div>
              ${checks(['<strong>1.</strong> Identifique o que é dado: raio, diâmetro, ângulo ou distância.', '<strong>2.</strong> Escolha a fórmula (comprimento, arco, voltas).', '<strong>3.</strong> Calcule com o $π$ pedido.', '<strong>4.</strong> Confira a unidade e a ordem de grandeza.'], '.95rem')}
            </div>`, callout('Unidades', 'Misture cm e m com cuidado: $1$ m $= 100$ cm.', 'decay'))]
      ],
      exemplos: [
        ['Voltas da roda', 'Uma roda de raio $25$ cm roda $12,56$ m. Quantas voltas dá? ($π = 3,14$)', [['Comprimento', '$C = 2 · 3,14 · 25 = 157$ cm.'], ['Distância', '$12,56$ m $= 1256$ cm.'], ['Voltas', '$1256 ÷ 157 = 8$.']], 'Dá <strong>8 voltas</strong>.'],
        ['Arco do ponteiro', 'O ponteiro das horas mede $6$ cm. Em $2$ horas, a ponta percorre um arco de que comprimento? ($π = 3,14$)', [['Ângulo', '$2$ horas $= 2 · 30° = 60°$.'], ['Fração', '${60|360} = {1|6}$.'], ['Comprimento', '$C = 2 · 3,14 · 6 = 37,68$; ${37,68|6} = 6,28$.']], 'O arco mede <strong>6,28 cm</strong>.']
      ],
      pratique: [
        ['Pista', 'Uma pista circular tem diâmetro de $100$ m. Em $5$ voltas, um corredor percorre ($π = 3,14$):', ['$314$ m', '$785$ m', '$1 570$ m', '$3 140$ m'], 2, 'Uma volta $= 314$; $5 · 314 = 1570$. <strong>Alternativa C.</strong>'],
        ['Relógio', 'Em $20$ minutos, o ponteiro dos minutos gira:', ['$60°$', '$90°$', '$120°$', '$180°$'], 2, '$20 · 6° = 120°$. <strong>Alternativa C.</strong>'],
        ['Arco', 'Um arco de $90°$ em circunferência de raio $10$ cm mede ($π = 3,14$):', ['$5,7$ cm', '$15,7$ cm', '$31,4$ cm', '$62,8$ cm'], 1, '${1|4}$ de $62,8 = 15,7$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O carrossel', 'Um cavalinho de carrossel está a $3$ m do centro e dá $10$ voltas completas. Quantos metros percorre? ($π = 3,14$)', ['$18,84$', '$94,2$', '$141,3$', '$188,4$', '$282,6$'], 3, '$C = 2 · 3,14 · 3 = 18,84$; $10 · 18,84 = 188,4$ m. <strong>Alternativa D.</strong>'],
      cuidados: [['Unidades misturadas', 'Converta cm para m (ou o contrário) antes de dividir.'], ['Raio e diâmetro', 'Confira se o problema dá o raio ou o diâmetro.'], ['Arco × ângulo', 'Arco é comprimento; ângulo é medida em graus.'], ['Aproximar demais', 'Não arredonde π no meio da conta.']],
      quiz: [
        { q: 'O ponteiro dos minutos gira por minuto:', o: ['$1°$', '$6°$', '$30°$', '$60°$'], a: 1 },
        { q: 'Raio $2$ m, $C$ com $π = 3,14$:', o: ['$6,28$ m', '$12,56$ m', '$3,14$ m', '$25,12$ m'], a: 1 },
        { q: 'Roda de $C = 2$ m, distância $12$ m: voltas:', o: ['$2$', '$4$', '$6$', '$24$'], a: 2 },
        { q: 'Arco de $60°$ é que fração da volta?', o: ['${1|2}$', '${1|3}$', '${1|6}$', '${1|12}$'], a: 2 }
      ],
      sintese: [['Comprimento', 'C = 2πr; arco = fração da volta.'], ['Relógio', '6° por minuto, 30° por hora.'], ['Voltas', 'Distância ÷ C.']],
      msg: 'Próxima aula: problemas II, com ângulos e polígonos inscritos.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'problemas-com-circulo-ii', titulo: 'Problemas que envolvem círculo e circunferência II',
      h1: `Problemas com ${co('decay')}círculo e circunferência</span> II`,
      sub: 'Fechamos o 2º trimestre com problemas que combinam ângulos na circunferência, polígonos inscritos, triângulos e quadriláteros.',
      badges: [['inscritos'], ['ângulos', 'growth'], ['revisão', 'decay']], color: 'decay',
      roteiro: ['Misturar geometria do trimestre.', [['Hexágono inscrito', 'lado = raio', 'target'], ['Quadrado inscrito', 'diagonal = diâmetro', 'bulb'], ['Ângulos', 'central e inscrito', 'chart'], ['Revisar', 'o trimestre', 'book'], ['Resolver', 'com estratégia', 'scale']]],
      objetivos: ['Relacionar <strong>polígonos regulares</strong> à circunferência circunscrita.', 'Combinar <strong>ângulos, triângulos e quadriláteros</strong>.', 'Revisar o <strong>2º trimestre</strong>.'],
      dica: 'O <strong>hexágono regular</strong> inscrito tem lado igual ao raio; o <strong>quadrado</strong> inscrito tem diagonal igual ao diâmetro.',
      gancho: { titulo: 'A mesa hexagonal', texto: 'Uma mesa hexagonal regular está inscrita em um tampo redondo de <strong>raio 50 cm</strong>. Quanto mede o lado da mesa?', mini: ['O lado do hexágono regular inscrito é:', ['$25$ cm', '$50$ cm', '$100$ cm', '$86,6$ cm'], 1, 'No hexágono regular inscrito, o lado é igual ao raio. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · polígonos inscritos', 'Lado e raio', g2(`<div>
              ${checks(['<strong>Hexágono regular</strong> inscrito: ângulo central de $60°$ ⇒ triângulo equilátero ⇒ <strong>lado $= r$</strong>.', '<strong>Quadrado</strong> inscrito: diagonal $= $ diâmetro $= 2r$.', '<strong>Triângulo equilátero</strong> inscrito: ângulo central de $120°$.', 'Em um polígono regular de $n$ lados inscrito, o ângulo central é ${360°|n}$.'], '.95rem')}
            </div>`, card(`<strong>Ângulos centrais</strong>
              ${tbl(['Polígono regular', 'Ângulo central'], [['triângulo', '$120°$'], ['quadrado', '$90°$'], ['pentágono', '$72°$'], ['hexágono', '$60°$'], ['octógono', '$45°$']])}`, 'primary'))],
        ['Teoria · revisão do trimestre', 'Fórmulas-chave', g2(`<div>
              ${checks(['Triângulo: soma $180°$; externo $=$ soma dos dois opostos; $a < b + c$.', 'Polígonos: soma interna $(n − 2) · 180°$; externa $360°$; diagonais ${n(n − 3)|2}$.', 'Circunferência: $C = 2πr$; central $=$ arco; inscrito $=$ ${arco|2}$.', 'Quadrilátero: soma $360°$; inscrito: opostos somam $180°$.'], '.95rem')}
            </div>`, callout('Em prova', 'Escreva a fórmula antes de substituir; isso evita trocar ângulo interno por externo.', 'decay'))]
      ],
      exemplos: [
        ['Perímetro do hexágono', 'Um hexágono regular está inscrito em uma circunferência de raio $8$ cm. Qual é o perímetro?', [['Lado', 'Igual ao raio: $8$.'], ['Perímetro', '$6 · 8 = 48$.']], 'O perímetro é <strong>48 cm</strong>.'],
        ['Quadrado inscrito', 'Um quadrado está inscrito em uma circunferência de diâmetro $10$ cm. Qual é a medida da diagonal e qual o ângulo central de cada lado?', [['Diagonal', 'Igual ao diâmetro: $10$ cm.'], ['Ângulo central', '$360° ÷ 4 = 90°$.']], 'Diagonal <strong>10 cm</strong>; ângulo central <strong>90°</strong>.']
      ],
      pratique: [
        ['Hexágono', 'Raio $12$ cm: o lado do hexágono regular inscrito mede:', ['$6$ cm', '$12$ cm', '$24$ cm', '$72$ cm'], 1, 'Lado $=$ raio. <strong>Alternativa B.</strong>'],
        ['Pentágono', 'O ângulo central do pentágono regular inscrito mede:', ['$60°$', '$72°$', '$90°$', '$108°$'], 1, '$360° ÷ 5 = 72°$. <strong>Alternativa B.</strong>'],
        ['Inscrito', 'No octógono regular inscrito, cada ângulo central mede:', ['$30°$', '$36°$', '$45°$', '$60°$'], 2, '$360° ÷ 8 = 45°$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O suporte', 'Um suporte hexagonal regular é fixado dentro de um aro circular de $6$ cm de raio. O perímetro do suporte é:', ['$18$ cm', '$24$ cm', '$30$ cm', '$36$ cm', '$48$ cm'], 3, 'Lado $= 6$; $6 · 6 = 36$ cm. <strong>Alternativa D.</strong>'],
      cuidados: [['Lado do hexágono', 'É igual ao raio apenas no hexágono regular.'], ['Diagonal do quadrado', 'Quadrado inscrito: diagonal = diâmetro.'], ['Ângulo central', '$360° ÷ n$ — não $180° ÷ n$.'], ['Fórmulas misturadas', 'Anote qual fórmula usa interno, externo ou central.']],
      quiz: [
        { q: 'O hexágono regular inscrito tem lado igual:', o: ['ao diâmetro', 'ao raio', 'ao dobro do raio', 'à metade do raio'], a: 1 },
        { q: 'Ângulo central do triângulo equilátero inscrito:', o: ['$60°$', '$90°$', '$120°$', '$180°$'], a: 2 },
        { q: 'A diagonal do quadrado inscrito é igual ao:', o: ['raio', 'diâmetro', 'lado', 'perímetro'], a: 1 },
        { q: 'O ângulo central de um decágono regular inscrito é:', o: ['$18°$', '$36°$', '$45°$', '$60°$'], a: 1 }
      ],
      sintese: [['Inscritos', 'Hexágono: lado = raio; quadrado: diagonal = diâmetro.'], ['Central', '360° ÷ n.'], ['Revisão', 'Triângulos, polígonos, quadriláteros e circunferência.']],
      msg: 'Fechamos o 2º trimestre. No 3º: medidas, áreas, volumes, álgebra e sequências.'
    }
  ]
});
