// Módulo 17 · 9º ano · Recomposição · 3º trimestre — Volumes (aulas 51 a 55 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wv = Wd.volume('rv1');
const wv2 = Wd.volume('rv2');

const cubo = svg(200, 160, `<polygon points="40,60 110,60 110,130 40,130" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><polygon points="40,60 75,30 145,30 110,60" fill="var(--growth-soft)" stroke="var(--primary)" stroke-width="3"/><polygon points="110,60 145,30 145,100 110,130" fill="var(--decay-soft)" stroke="var(--primary)" stroke-width="3"/><text x="66" y="150" font-size="13" fill="var(--ink)">a</text>`, '220px');
const cil = svg(200, 170, `<ellipse cx="100" cy="35" rx="55" ry="16" fill="var(--growth-soft)" stroke="var(--decay)" stroke-width="3"/><path d="M45 35 V125 A55 16 0 0 0 155 125 V35" fill="var(--decay-soft)" stroke="var(--decay)" stroke-width="3"/><line x1="100" y1="35" x2="155" y2="35" stroke="var(--ink)" stroke-width="2"/><text x="118" y="30" font-size="13" fill="var(--ink)">r</text><text x="160" y="85" font-size="13" fill="var(--ink)">h</text>`, '220px');

module.exports = unidade({
  tri: 3, dir: 'volumes', titulo: 'Volumes', accent: 'primary', icon: 'cube', key: 'r3u4',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'volume-do-cubo', titulo: 'Cálculo do volume do cubo',
      h1: `Volume do ${co('primary')}cubo:</span> a³`,
      sub: 'Volume é a medida do espaço ocupado por um sólido, medida em unidades cúbicas. O cubo é o ponto de partida: seu volume é o lado multiplicado por si mesmo três vezes.',
      badges: [['volume'], ['a³', 'growth'], ['m³ e litros', 'decay']], color: 'primary',
      roteiro: ['Do cubinho unitário ao litro.', [['O que é volume', 'espaço ocupado', 'bulb'], ['Cubinhos', 'contar unidades', 'chart'], ['Cubo', 'V = a³', 'target'], ['Unidades', 'm³, dm³, cm³', 'scale'], ['Litros', '1 dm³ = 1 L', 'coin']]],
      objetivos: ['Entender <strong>volume</strong> como contagem de cubinhos unitários.', 'Calcular o volume do <strong>cubo</strong>.', 'Relacionar <strong>dm³ e litros</strong>.'],
      dica: '$1$ dm³ $= 1$ litro. $1$ m³ $= 1000$ dm³ $= 1000$ litros.',
      gancho: { titulo: 'A caixa-d’água cúbica', texto: 'Uma caixa-d’água tem formato de cubo com <strong>1 m de aresta</strong>. Quantos litros de água ela comporta?', mini: ['O volume de $1$ m³ em litros:', ['$10$ L', '$100$ L', '$1 000$ L', '$10 000$ L'], 2, '$1$ m³ $= 1000$ dm³ $= 1000$ L. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · o cubo', 'Aresta ao cubo', g2(`<div>
              ${checks(['<strong>Volume</strong> é a quantidade de cubinhos unitários que cabem no sólido.', 'Cubo de aresta $a$: $V = a · a · a = a³$.', 'Aresta $4$ cm: $V = 4³ = 64$ cm³.', '<strong>Área total</strong> do cubo: $6a²$ (seis faces quadradas).'], '.95rem')}
            </div>`, `<div>${cubo}</div>`)],
        ['Teoria · unidades', 'Cada degrau vale 1000', g2(`<div>
              ${checks(['$1$ m³ $= 1000$ dm³ $= 1 000 000$ cm³.', '$1$ dm³ $= 1000$ cm³ $= 1$ litro.', '$1$ cm³ $= 1$ mL.', 'Entre unidades vizinhas de volume, multiplique ou divida por <strong>1000</strong>.'], '.95rem')}
            </div>`, callout('Armadilha', 'Comprimento ×10, área ×100, volume ×1000 por degrau da escada.', 'primary'))]
      ],
      exemplos: [
        ['Volume do cubo', 'Qual é o volume de um cubo de aresta $6$ cm?', [['Fórmula', '$V = a³$.'], ['Calcular', '$6³ = 216$.']], 'O volume é <strong>216 cm³</strong>.'],
        ['Em litros', 'Um aquário cúbico tem aresta de $50$ cm. Quantos litros comporta?', [['Converter a aresta', '$50$ cm $= 5$ dm.'], ['Volume', '$5³ = 125$ dm³.'], ['Litros', '$1$ dm³ $= 1$ L.']], 'Comporta <strong>125 litros</strong>.']
      ],
      widget: { titulo: 'Volume de sólidos', html: wv.html, js: wv.js },
      pratique: [
        ['Cubo', 'Cubo de aresta $3$ m: volume:', ['$9$ m³', '$18$ m³', '$27$ m³', '$81$ m³'], 2, '$3³ = 27$. <strong>Alternativa C.</strong>'],
        ['Litros', 'Um cubo de aresta $2$ dm comporta:', ['$2$ L', '$4$ L', '$6$ L', '$8$ L'], 3, '$2³ = 8$ dm³ $= 8$ L. <strong>Alternativa D.</strong>'],
        ['Conversão', '$2$ m³ correspondem a:', ['$20$ L', '$200$ L', '$2 000$ L', '$20 000$ L'], 2, '$2 · 1000 = 2000$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O reservatório', 'Um reservatório cúbico tem $1,5$ m de aresta. Seu volume em litros é:', ['$1 125$ L', '$2 250$ L', '$3 375$ L', '$4 500$ L', '$6 750$ L'], 2, '$1,5³ = 3,375$ m³ $= 3375$ L. <strong>Alternativa C.</strong>'],
      cuidados: [['a³, não 3a', 'Aresta $4$: $4³ = 64$, não $12$.'], ['Converter por 10 ou 100', 'Em volumes, o fator é $1000$.'], ['Litros e dm³', '$1$ L $= 1$ dm³ (não cm³).'], ['Unidades misturadas', 'Converta a aresta antes de elevar ao cubo.']],
      quiz: [
        { q: 'Volume do cubo de aresta $5$:', o: ['$15$', '$25$', '$125$', '$625$'], a: 2 },
        { q: '$1$ dm³ equivale a:', o: ['$1$ L', '$10$ L', '$100$ L', '$0,1$ L'], a: 0 },
        { q: '$1$ m³ tem quantos dm³?', o: ['$10$', '$100$', '$1000$', '$10 000$'], a: 2 },
        { q: 'Área total do cubo de aresta $a$:', o: ['$a²$', '$4a²$', '$6a²$', '$12a$'], a: 2 }
      ],
      sintese: [['Cubo', 'V = a³.'], ['Unidades', '× 1000 por degrau; 1 dm³ = 1 L.'], ['Cuidado', 'Converta antes de calcular.']],
      msg: 'Próxima aula: volume do bloco retangular.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'volume-do-bloco-retangular', titulo: 'Cálculo do volume do bloco retangular',
      h1: `Volume do ${co('primary')}bloco retangular</span>`,
      sub: 'O bloco retangular (paralelepípedo) tem três dimensões: comprimento, largura e altura. Seu volume é o produto dessas três medidas.',
      badges: [['paralelepípedo'], ['c · l · h', 'growth'], ['capacidade', 'decay']], color: 'primary',
      roteiro: ['Três dimensões, um produto.', [['Dimensões', 'c, l e h', 'bulb'], ['Fórmula', 'V = c · l · h', 'target'], ['Área da base', '× altura', 'scale'], ['Capacidade', 'litros', 'coin'], ['Problemas', 'piscinas e caixas', 'book']]],
      objetivos: ['Calcular o volume de um <strong>bloco retangular</strong>.', 'Usar <strong>área da base × altura</strong>.', 'Resolver problemas de <strong>capacidade</strong>.'],
      dica: 'Volume $=$ área da base $×$ altura. No bloco retangular, a base é $c × l$.',
      gancho: { titulo: 'A piscina', texto: 'Uma piscina retangular tem <strong>8 m de comprimento</strong>, <strong>4 m de largura</strong> e <strong>1,5 m de profundidade</strong>. Quantos metros cúbicos de água ela comporta?', mini: ['O volume da piscina:', ['$13,5$ m³', '$32$ m³', '$48$ m³', '$54$ m³'], 2, '$8 · 4 · 1,5 = 48$ m³. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · a fórmula', 'Produto das dimensões', g2(`<div>
              ${checks(['Bloco de dimensões $c$, $l$ e $h$: <strong>$V = c · l · h$</strong>.', 'Mesma ideia: <strong>área da base</strong> $×$ <strong>altura</strong>.', 'Bloco $5 × 3 × 2$: $V = 30$ unidades cúbicas.', 'O cubo é o caso em que $c = l = h = a$.'], '.95rem')}
            </div>`, card(`<strong>Área total</strong>
              <p style="font-size:.92rem;margin-top:8px;">$A_t = 2(cl + ch + lh)$: seis faces retangulares.</p>
              <p class="hint" style="margin-top:6px;">Para pintar a caixa por fora, use área; para encher, use volume.</p>`, 'primary'))],
        ['Teoria · capacidade', 'Litros e volume', g2(`<div>
              ${checks(['$1$ dm³ $= 1$ litro. Dimensões em dm: o produto já dá litros.', 'Caixa de $50$ cm × $40$ cm × $30$ cm $= 5$ dm × $4$ dm × $3$ dm $= 60$ dm³ $= 60$ L.', 'Piscina: $48$ m³ $= 48 000$ L.', 'Se a altura da água é só uma parte da altura, use a altura da água.'], '.95rem')}
            </div>`, callout('Atenção', 'Converta todas as dimensões para a <strong>mesma unidade</strong> antes de multiplicar.', 'primary'))]
      ],
      exemplos: [
        ['Volume e litros', 'Um aquário mede $80$ cm × $40$ cm × $50$ cm. Quantos litros comporta?', [['Converter', '$8$ dm × $4$ dm × $5$ dm.'], ['Volume', '$8 · 4 · 5 = 160$ dm³.'], ['Litros', '$160$ L.']], 'Comporta <strong>160 litros</strong>.'],
        ['Altura que falta', 'Um bloco de volume $120$ cm³ tem base de $10$ cm × $4$ cm. Qual é a altura?', [['Área da base', '$10 · 4 = 40$.'], ['Altura', '$h = 120 ÷ 40 = 3$.']], 'A altura é <strong>3 cm</strong>.']
      ],
      pratique: [
        ['Volume', 'Bloco $6 × 4 × 5$ cm: volume:', ['$15$ cm³', '$60$ cm³', '$100$ cm³', '$120$ cm³'], 3, '$6 · 4 · 5 = 120$. <strong>Alternativa D.</strong>'],
        ['Capacidade', 'Caixa de $2$ m × $1$ m × $0,5$ m comporta quantos litros?', ['$100$ L', '$500$ L', '$1 000$ L', '$2 000$ L'], 2, '$1$ m³ $= 1000$ L. <strong>Alternativa C.</strong>'],
        ['Altura', 'Volume $90$ m³, base $6 × 5$ m. Altura:', ['$2$ m', '$3$ m', '$5$ m', '$15$ m'], 1, '$90 ÷ 30 = 3$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A caixa-d’água', 'Uma caixa-d’água retangular tem $2$ m de comprimento, $1,5$ m de largura e $1$ m de altura. Quantos litros ela comporta cheia?', ['$300$', '$3 000$', '$4 500$', '$30 000$', '$300 000$'], 1, '$2 · 1,5 · 1 = 3$ m³ $= 3000$ L. <strong>Alternativa B.</strong>'],
      cuidados: [['Soma em vez de produto', '$V = c · l · h$, não $c + l + h$.'], ['Unidades misturadas', 'Converta tudo para a mesma unidade.'], ['Área × volume', 'Volume dá unidade cúbica.'], ['Altura da água', 'Se a caixa não está cheia, use a altura do líquido.']],
      quiz: [
        { q: 'Volume do bloco $2 × 3 × 4$:', o: ['$9$', '$12$', '$24$', '$48$'], a: 2 },
        { q: '$1$ L equivale a:', o: ['$1$ cm³', '$10$ cm³', '$100$ cm³', '$1000$ cm³'], a: 3 },
        { q: 'Volume $=$ área da base $×$:', o: ['perímetro', 'altura', 'diagonal', 'raio'], a: 1 },
        { q: 'Caixa de $3 × 2 × 1$ dm comporta:', o: ['$3$ L', '$6$ L', '$9$ L', '$12$ L'], a: 1 }
      ],
      sintese: [['Bloco', 'V = c·l·h.'], ['Base × altura', 'Vale para prismas em geral.'], ['Litros', '1 dm³ = 1 L.']],
      msg: 'Próxima aula: volume de prismas.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'volume-de-prismas', titulo: 'Volume de prismas',
      h1: `Volume de ${co('primary')}prismas:</span> área da base × altura`,
      sub: 'Prisma é um sólido com duas bases iguais e paralelas. O volume de qualquer prisma é a área da base multiplicada pela altura.',
      badges: [['prisma'], ['base × altura', 'growth'], ['triangular', 'decay']], color: 'primary',
      roteiro: ['Qualquer base, a mesma ideia.', [['O que é prisma', 'bases iguais e paralelas', 'bulb'], ['Volume', 'área da base × h', 'target'], ['Base triangular', 'b·h÷2', 'scale'], ['Base hexagonal', 'seis triângulos', 'chart'], ['Problemas', 'barras e telhados', 'book']]],
      objetivos: ['Identificar <strong>prismas</strong> e suas bases.', 'Calcular o volume por <strong>área da base × altura</strong>.', 'Aplicar a prismas de base <strong>triangular e outras</strong>.'],
      dica: 'Para qualquer prisma: <strong>$V = A_{b} · h$</strong>, onde $A_b$ é a área de <strong>uma</strong> base.',
      gancho: { titulo: 'A barra de chocolate', texto: 'Uma barra de chocolate em forma de prisma triangular tem base com <strong>6 cm de base e 4 cm de altura</strong> e comprimento de <strong>20 cm</strong>. Qual é o volume de chocolate?', mini: ['O volume da barra:', ['$120$ cm³', '$240$ cm³', '$480$ cm³', '$24$ cm³'], 1, 'Área da base: ${6 · 4|2} = 12$ cm²; $V = 12 · 20 = 240$ cm³. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o volume do prisma', 'Área da base vezes a altura', g2(`<div>
              ${checks(['Prisma: duas bases iguais e paralelas; faces laterais são paralelogramos (retângulos, no reto).', '<strong>$V = A_b · h$</strong> (altura $h$ entre as bases).', 'Base triangular: $A_b = {b · h_b|2}$, e $V = A_b · H$ ($H$ = altura do prisma).', 'Base hexagonal regular de lado $a$: $A_b = 6 · {a² √{3}|4}$.'], '.95rem')}
            </div>`, card(`<strong>Nomes</strong>
              ${tbl(['Base', 'Prisma'], [['triângulo', 'triangular'], ['quadrado', 'quadrangular'], ['retângulo', 'bloco retangular'], ['pentágono', 'pentagonal'], ['hexágono', 'hexagonal']])}`, 'primary'))],
        ['Teoria · tipos de problema', 'Achar V, A_b ou h', g2(`<div>
              ${checks(['<strong>Volume:</strong> $V = A_b · h$.', '<strong>Altura:</strong> $h = {V|A_b}$.', '<strong>Área da base:</strong> $A_b = {V|h}$.', 'Se a base é composta, calcule a área da base primeiro.'], '.95rem')}
            </div>`, callout('Dica de ouro', 'Qualquer sólido "empilhado" com a mesma seção em todas as alturas segue $V = A_b · h$.', 'primary'))]
      ],
      exemplos: [
        ['Prisma triangular', 'Um prisma tem base triangular de $6$ cm de base e $4$ cm de altura e altura do prisma $10$ cm. Qual é o volume?', [['Área da base', '${6 · 4|2} = 12$ cm².'], ['Volume', '$12 · 10 = 120$.']], 'O volume é <strong>120 cm³</strong>.'],
        ['Achar a altura', 'Um prisma de base quadrada de lado $5$ m tem volume $100$ m³. Qual a altura?', [['Área da base', '$5² = 25$.'], ['Altura', '$100 ÷ 25 = 4$.']], 'A altura é <strong>4 m</strong>.']
      ],
      pratique: [
        ['Triangular', 'Base triangular de área $15$ cm² e altura do prisma $8$ cm: volume:', ['$23$', '$60$', '$120$', '$240$'], 2, '$15 · 8 = 120$. <strong>Alternativa C.</strong>'],
        ['Base quadrada', 'Prisma de base quadrada de lado $4$ e altura $10$: volume:', ['$40$', '$80$', '$160$', '$400$'], 2, '$16 · 10 = 160$. <strong>Alternativa C.</strong>'],
        ['Altura', 'Volume $180$ m³ e área da base $30$ m². Altura:', ['$5$ m', '$6$ m', '$9$ m', '$150$ m'], 1, '$180 ÷ 30 = 6$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O telhado', 'O sótão de uma casa tem forma de prisma triangular: base triangular com $6$ m de base e $2,5$ m de altura, e comprimento de $10$ m. Qual é o volume do sótão?', ['$15$ m³', '$30$ m³', '$75$ m³', '$150$ m³', '$300$ m³'], 2, 'Base: ${6 · 2,5|2} = 7,5$; $V = 7,5 · 10 = 75$ m³. <strong>Alternativa C.</strong>'],
      cuidados: [['Duas alturas', 'Há a altura do triângulo da base e a altura do prisma; não as misture.'], ['Esquecer o ÷ 2', 'A área do triângulo leva metade do produto.'], ['Perímetro no lugar da área', 'Use a área da base.'], ['Unidades', 'Resposta em unidade cúbica.']],
      quiz: [
        { q: 'O volume do prisma é:', o: ['perímetro × altura', 'área da base × altura', 'soma das arestas', 'área lateral × 2'], a: 1 },
        { q: 'Base de área $12$ e altura $5$:', o: ['$17$', '$30$', '$60$', '$120$'], a: 2 },
        { q: 'Prisma com bases hexagonais é:', o: ['triangular', 'pentagonal', 'hexagonal', 'cilíndrico'], a: 2 },
        { q: 'Altura $= V ÷$:', o: ['perímetro', 'área da base', 'raio', 'diagonal'], a: 1 }
      ],
      sintese: [['Prisma', 'V = A_b · h.'], ['Base', 'Calcule a área da base primeiro.'], ['Inversos', 'h = V ÷ A_b.']],
      msg: 'Próxima aula: volume do cilindro.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'volume-do-cilindro-i', titulo: 'Volume do cilindro I',
      h1: `Volume do ${co('primary')}cilindro:</span> πr²h`,
      sub: 'O cilindro é como um prisma de base circular. Seu volume é a área do círculo da base multiplicada pela altura: V = π r² h.',
      badges: [['cilindro'], ['πr²h', 'growth'], ['latas', 'decay']], color: 'primary',
      roteiro: ['Do círculo da base à lata.', [['O cilindro', 'duas bases circulares', 'bulb'], ['A fórmula', 'V = π r² h', 'target'], ['Raio ou diâmetro', 'cuidado', 'scale'], ['Capacidade', 'litros', 'coin'], ['Problemas', 'latas e caixas', 'book']]],
      objetivos: ['Reconhecer o <strong>cilindro</strong> e seus elementos.', 'Aplicar $V = π r² h$.', 'Converter o resultado para <strong>litros</strong>.'],
      dica: 'Volume $=$ área da base $×$ altura, e a base é um <strong>círculo</strong>: $V = π r² · h$.',
      gancho: { titulo: 'A lata de óleo', texto: 'Uma lata cilíndrica tem <strong>raio de 5 cm</strong> e <strong>altura de 10 cm</strong>. Qual é o volume? (use $π = 3,14$)', mini: ['O volume da lata:', ['$157$ cm³', '$314$ cm³', '$785$ cm³', '$1 570$ cm³'], 2, '$3,14 · 25 · 10 = 785$ cm³. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · a fórmula', 'Base circular vezes altura', g2(`<div>
              ${checks(['Cilindro: duas bases circulares iguais e paralelas.', '<strong>$V = π r² h$</strong>.', 'Raio $3$, altura $10$, $π = 3,14$: $V = 3,14 · 9 · 10 = 282,6$.', 'Se der o diâmetro $d$: $r = {d|2}$.'], '.95rem')}
            </div>`, `<div>${cil}</div>`)],
        ['Teoria · capacidade', 'Litros', g2(`<div>
              ${checks(['$1$ L $= 1$ dm³ $= 1000$ cm³.', 'Cilindro de $785$ cm³ comporta $0,785$ L.', 'Raio em dm e altura em dm ⇒ volume em dm³ $=$ litros.', 'Tambor de $r = 3$ dm e $h = 9$ dm: $V = 3,14 · 9 · 9 = 254,34$ L.'], '.95rem')}
            </div>`, callout('Unidade única', 'Converta raio e altura para a <strong>mesma unidade</strong> antes de calcular.', 'primary'))]
      ],
      exemplos: [
        ['Volume do tambor', 'Um tambor cilíndrico tem diâmetro de $60$ cm e altura de $90$ cm. Qual é o volume em litros? ($π = 3,14$)', [['Raio', '$60 ÷ 2 = 30$ cm $= 3$ dm.'], ['Altura', '$90$ cm $= 9$ dm.'], ['Volume', '$3,14 · 3² · 9 = 3,14 · 81 = 254,34$ dm³.']], 'Comporta <strong>254,34 litros</strong>.'],
        ['Altura que falta', 'Um cilindro de raio $4$ cm tem volume $200,96$ cm³. Qual a altura? ($π = 3,14$)', [['Área da base', '$3,14 · 16 = 50,24$.'], ['Altura', '$200,96 ÷ 50,24 = 4$.']], 'A altura é <strong>4 cm</strong>.']
      ],
      widget: { titulo: 'Volume do cilindro', html: wv2.html, js: wv2.js },
      pratique: [
        ['Volume', 'Cilindro de raio $2$ cm e altura $10$ cm ($π = 3,14$): volume:', ['$62,8$ cm³', '$125,6$ cm³', '$251,2$ cm³', '$1 256$ cm³'], 1, '$3,14 · 4 · 10 = 125,6$. <strong>Alternativa B.</strong>'],
        ['Diâmetro', 'Cilindro de diâmetro $10$ e altura $2$ ($π = 3,14$): volume:', ['$31,4$', '$62,8$', '$157$', '$314$'], 2, '$r = 5$; $3,14 · 25 · 2 = 157$. <strong>Alternativa C.</strong>'],
        ['Altura', 'Volume $314$ cm³ e raio $5$ cm ($π = 3,14$). Altura:', ['$2$ cm', '$4$ cm', '$10$ cm', '$20$ cm'], 1, '$3,14 · 25 = 78,5$; $314 ÷ 78,5 = 4$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A caixa de suco', 'Um copo cilíndrico tem $4$ cm de raio e $10$ cm de altura. Qual é o volume em mL? ($π = 3,14$)', ['$125,6$', '$251,2$', '$502,4$', '$628$', '$1 256$'], 2, '$3,14 · 16 · 10 = 502,4$ cm³ $= 502,4$ mL. <strong>Alternativa C.</strong>'],
      cuidados: [['Elevar o raio ao quadrado', '$r²$, não $2r$.'], ['Diâmetro como raio', 'Divida o diâmetro por $2$.'], ['Unidades misturadas', 'Converta antes de multiplicar.'], ['Circunferência no lugar da área', 'A base entra com a <strong>área</strong> $πr²$.']],
      quiz: [
        { q: 'O volume do cilindro é:', o: ['$2πrh$', '$πr²h$', '$πrh$', '$πr²$'], a: 1 },
        { q: 'Raio $1$, altura $1$, $π = 3,14$:', o: ['$1$', '$3,14$', '$6,28$', '$9,42$'], a: 1 },
        { q: 'Diâmetro $6$: raio:', o: ['$3$', '$6$', '$12$', '$36$'], a: 0 },
        { q: '$1000$ cm³ são:', o: ['$1$ mL', '$10$ mL', '$1$ L', '$10$ L'], a: 2 }
      ],
      sintese: [['Cilindro', 'V = π r² h.'], ['Raio', 'Metade do diâmetro.'], ['Capacidade', '1 L = 1000 cm³.']],
      msg: 'Próxima aula: volume do cilindro II, com problemas de capacidade.'
    },
    // ---------------------------------------------------------------- aula 5
    {
      slug: 'volume-do-cilindro-ii', titulo: 'Volume do cilindro II',
      h1: `Cilindro: ${co('primary')}problemas de capacidade</span>`,
      sub: 'Cisternas, tanques, canos e latas pedem comparar volumes, descobrir dimensões e converter para litros. Fechamos o módulo com problemas variados.',
      badges: [['problemas'], ['capacidade', 'growth'], ['comparar', 'decay']], color: 'primary',
      roteiro: ['Mais prática e comparações.', [['Revisar', 'V = πr²h', 'book'], ['Comparar', 'dois cilindros', 'scale'], ['Achar medidas', 'altura ou raio', 'target'], ['Nível do líquido', 'altura ocupada', 'chart'], ['Conferir', 'estimativa com π ≈ 3', 'bulb']]],
      objetivos: ['Comparar <strong>volumes de cilindros</strong>.', 'Determinar <strong>altura do líquido</strong>.', 'Resolver problemas de <strong>capacidade</strong> em litros.'],
      dica: 'Para o nível do líquido: <strong>volume do líquido $÷$ área da base</strong> $=$ altura.',
      gancho: { titulo: 'Duas latas', texto: 'Uma lata tem <strong>raio 4 cm e altura 10 cm</strong>; outra tem <strong>raio 5 cm e altura 6 cm</strong>. Qual comporta mais?', mini: ['O maior volume é o da lata:', ['de raio $4$', 'de raio $5$', 'iguais', 'depende de π'], 0, '$r²h$: $16 · 10 = 160$ contra $25 · 6 = 150$. Comporta mais a de raio $4$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · comparar', 'π cancela', g2(`<div>
              ${checks(['Para comparar, basta comparar $r² · h$ (o $π$ aparece nos dois).', 'Lata A: $r = 4$, $h = 10$ ⇒ $r²h = 160$.', 'Lata B: $r = 5$, $h = 6$ ⇒ $r²h = 150$.', 'A lata A comporta mais, apesar de ser mais estreita.'], '.95rem')}
            </div>`, card(`<strong>Efeito do raio</strong>
              <p style="font-size:.92rem;margin-top:8px;">Dobrar a altura dobra o volume. Dobrar o raio quadruplica.</p>`, 'primary'))],
        ['Teoria · nível do líquido', 'Altura ocupada', g2(`<div>
              ${checks(['Altura do líquido $= {V|A_b}$.', 'Tanque de base $π · 3² = 28,26$ dm² com $565,2$ L: altura $= 565,2 ÷ 28,26 = 20$ dm.', 'Se a água ocupa $60%$ da altura, ocupa $60%$ do volume (mesma base).', 'Cuidado com unidades: L ↔ dm³.'], '.95rem')}
            </div>`, callout('Dica', 'Cilindros de mesma base: volumes são proporcionais às alturas.', 'primary'))]
      ],
      exemplos: [
        ['Nível da água', 'Um tanque cilíndrico de raio $1$ m recebe $6,28$ m³ de água. Qual é a altura da água? ($π = 3,14$)', [['Área da base', '$3,14 · 1² = 3,14$ m².'], ['Altura', '$6,28 ÷ 3,14 = 2$.']], 'A água atinge <strong>2 m</strong>.'],
        ['Raio que falta', 'Um cilindro de altura $10$ cm tem volume $785$ cm³. Qual o raio? ($π = 3,14$)', [['Área da base', '$785 ÷ 10 = 78,5$.'], ['Raio²', '$78,5 ÷ 3,14 = 25$.'], ['Raio', '$r = 5$.']], 'O raio mede <strong>5 cm</strong>.']
      ],
      pratique: [
        ['Mais volume', 'Cilindro A: $r = 3$, $h = 4$. Cilindro B: $r = 2$, $h = 9$. Qual tem maior volume?', ['o A', 'o B', 'são iguais', 'não dá para saber'], 2, '$9 · 4 = 36$ e $4 · 9 = 36$: iguais. <strong>Alternativa C.</strong>'],
        ['Nível', 'Base de $50$ dm² e volume de água $300$ L. A altura é:', ['$3$ dm', '$6$ dm', '$15$ dm', '$150$ dm'], 1, '$300 ÷ 50 = 6$. <strong>Alternativa B.</strong>'],
        ['Dobrar o raio', 'Se o raio de um cilindro dobra (altura igual), o volume:', ['dobra', 'triplica', 'quadruplica', 'fica igual'], 2, '$2² = 4$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O tanque de combustível', 'Um tanque cilíndrico tem raio de $1$ m e comprimento de $5$ m (deitado). Qual é o volume aproximado em litros? ($π = 3$)', ['$3 000$', '$5 000$', '$10 000$', '$15 000$', '$30 000$'], 3, '$3 · 1 · 5 = 15$ m³ $= 15 000$ L. <strong>Alternativa D.</strong>'],
      cuidados: [['Altura do tanque deitado', 'Em tanque deitado, a "altura" do cilindro é o comprimento.'], ['Raio ao quadrado', 'Dobrar o raio quadruplica o volume.'], ['Mistura de L e m³', '$1$ m³ $= 1000$ L.'], ['Arredondar π cedo', 'Use o valor do enunciado até o fim.']],
      quiz: [
        { q: 'Dobrando a altura (mesmo raio), o volume:', o: ['dobra', 'triplica', 'quadruplica', 'fica igual'], a: 0 },
        { q: 'Altura do líquido $=$ volume $÷$:', o: ['raio', 'área da base', 'perímetro', 'diâmetro'], a: 1 },
        { q: '$1$ m³ em litros:', o: ['$10$', '$100$', '$1000$', '$10 000$'], a: 2 },
        { q: 'Raio $3$, $h = 2$, $π = 3$: volume:', o: ['$18$', '$27$', '$54$', '$108$'], a: 2 }
      ],
      sintese: [['Comparar', 'Compare r²h (π cancela).'], ['Nível', 'Altura = V ÷ A_b.'], ['Unidades', '1 m³ = 1000 L.']],
      msg: 'Próximo módulo: expressões algébricas.'
    }
  ]
});
