// Módulo 16 · 9º ano · Recomposição · 3º trimestre — Área do círculo (aulas 49 e 50 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wc = Wd.circulo('rc2');

const coroa = svg(240, 170, `<circle cx="120" cy="85" r="70" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><circle cx="120" cy="85" r="38" fill="var(--bg, #fff)" stroke="var(--decay)" stroke-width="3"/><line x1="120" y1="85" x2="190" y2="85" stroke="var(--ink)" stroke-width="2"/><line x1="120" y1="85" x2="120" y2="47" stroke="var(--ink)" stroke-width="2"/><text x="150" y="80" font-size="13" fill="var(--ink)">R</text><text x="124" y="70" font-size="13" fill="var(--ink)">r</text>`, '280px');

module.exports = unidade({
  tri: 3, dir: 'area-do-circulo', titulo: 'Área do círculo', accent: 'decay', icon: 'pie', key: 'r3u3',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'area-do-circulo-i', titulo: 'Área do círculo I',
      h1: `Área do ${co('decay')}círculo:</span> A = πr²`,
      sub: 'A área do círculo cresce com o quadrado do raio. Dobrar o raio quadruplica a área — uma ideia que explica por que uma pizza grande vale muito mais que uma média.',
      badges: [['πr²'], ['raio', 'growth'], ['pizza', 'decay']], color: 'decay',
      roteiro: ['De onde vem a fórmula e como usá-la.', [['A fórmula', 'A = π r²', 'target'], ['De onde vem', 'recortar e remontar', 'bulb'], ['Usar com r ou d', 'cuidado com o raio', 'scale'], ['Raio dobra, área quadruplica', 'crescimento ao quadrado', 'chart'], ['Problemas', 'pizzas e canteiros', 'book']]],
      objetivos: ['Calcular a <strong>área do círculo</strong> pela fórmula $A = πr²$.', 'Passar de <strong>diâmetro</strong> para raio antes de calcular.', 'Entender como a área varia com o raio.'],
      dica: 'Primeiro o <strong>raio</strong>: se for dado o diâmetro, divida por $2$. Depois eleve ao quadrado e multiplique por $π$.',
      gancho: { titulo: 'Qual pizza vale mais?', texto: 'Uma pizzaria vende pizza de <strong>20 cm de diâmetro</strong> e outra de <strong>40 cm de diâmetro</strong>. A segunda tem o dobro do tamanho. Ela rende o dobro de pizza?', mini: ['Dobrando o diâmetro, a área:', ['dobra', 'triplica', 'quadruplica', 'fica igual'], 2, 'A área depende de $r²$: dobrar $r$ multiplica por $4$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · a fórmula', 'Área = π vezes raio ao quadrado', g2(`<div>
              ${checks(['<strong>$A = π r²$</strong>, com $r$ o raio.', 'Com o diâmetro $d$: $r = {d|2}$ e $A = {π d²|4}$.', 'Raio $5$ cm, $π = 3,14$: $A = 3,14 · 25 = 78,5$ cm².', 'A área vem em unidade <strong>quadrada</strong> (cm², m²).'], '.95rem')}
            </div>`, card(`<strong>De onde vem?</strong>
              <p style="font-size:.92rem;margin-top:8px;">Cortando o círculo em muitas fatias finas e remontando, forma-se quase um retângulo de base ${'$'}πr${'$'} (meio comprimento) e altura $r$: área $= πr · r = πr²$.</p>`, 'primary'))],
        ['Teoria · crescimento', 'Raio dobra, área quadruplica', g2(`<div>
              ${checks(['Raio $r$ ⇒ área $πr²$. Raio $2r$ ⇒ área $π(2r)² = 4πr²$.', 'Raio $3r$ ⇒ área $9$ vezes maior.', 'Duas pizzas de $20$ cm de diâmetro ($π · 100$ cada) valem menos que uma de $40$ cm ($π · 400$).', 'Comprimento da circunferência dobra; a <strong>área</strong> quadruplica.'], '.95rem')}
            </div>`, callout('Compare as fórmulas', 'Comprimento: $C = 2πr$ (cresce com $r$). Área: $A = πr²$ (cresce com $r²$).', 'decay'))]
      ],
      exemplos: [
        ['Área da praça', 'Uma praça circular tem raio de $20$ m. Qual é a área? (use $π = 3,14$)', [['Fórmula', '$A = π r²$.'], ['Quadrado do raio', '$20² = 400$.'], ['Multiplicar', '$3,14 · 400 = 1256$.']], 'A área é <strong>1 256 m²</strong>.'],
        ['Com diâmetro', 'Uma pizza tem $30$ cm de diâmetro. Qual é a sua área? ($π = 3,14$)', [['Raio', '$30 ÷ 2 = 15$.'], ['Área', '$3,14 · 15² = 3,14 · 225$.'], ['Calcular', '$= 706,5$.']], 'A área é <strong>706,5 cm²</strong>.']
      ],
      widget: { titulo: 'Raio, comprimento e área', html: wc.html, js: wc.js },
      pratique: [
        ['Raio dado', 'Raio $10$ cm, $π = 3,14$. A área do círculo é:', ['$31,4$ cm²', '$62,8$ cm²', '$314$ cm²', '$628$ cm²'], 2, '$3,14 · 100 = 314$. <strong>Alternativa C.</strong>'],
        ['Diâmetro dado', 'Diâmetro $8$ m, $π = 3,14$. A área é:', ['$25,12$ m²', '$50,24$ m²', '$100,48$ m²', '$200,96$ m²'], 1, '$r = 4$; $3,14 · 16 = 50,24$. <strong>Alternativa B.</strong>'],
        ['Variação', 'Se o raio de um círculo triplica, a área fica:', ['$3$ vezes maior', '$6$ vezes maior', '$9$ vezes maior', '$27$ vezes maior'], 2, '$3² = 9$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A pizza grande', 'Uma pizza pequena tem $15$ cm de raio e custa R$ 20. Uma grande tem $30$ cm de raio. A área da grande em relação à pequena é:', ['igual', 'o dobro', 'o triplo', 'o quádruplo', 'o quíntuplo'], 3, 'Raio dobra ⇒ área $×4$. <strong>Alternativa D.</strong>'],
      cuidados: [['Usar o diâmetro como raio', 'Sempre divida o diâmetro por $2$ antes de elevar ao quadrado.'], ['Esquecer de elevar ao quadrado', '$A = π · r · r$, não $π · r · 2$.'], ['Confundir com o comprimento', 'Comprimento $= 2πr$; área $= πr²$.'], ['Unidade', 'A área é em m² (ou cm²).']],
      quiz: [
        { q: 'A área do círculo é:', o: ['$2πr$', '$πr$', '$πr²$', '$πd$'], a: 2 },
        { q: 'Raio $2$, $π = 3,14$: área:', o: ['$6,28$', '$12,56$', '$25,12$', '$3,14$'], a: 1 },
        { q: 'Diâmetro $20$: raio:', o: ['$5$', '$10$', '$20$', '$40$'], a: 1 },
        { q: 'Raio dobra: área:', o: ['dobra', 'triplica', 'quadruplica', 'metade'], a: 2 }
      ],
      sintese: [['Fórmula', 'A = πr².'], ['Raio', 'Divida o diâmetro por 2.'], ['Escala', 'Raio ×2 ⇒ área ×4.']],
      msg: 'Próxima aula: coroa circular, setor e figuras compostas com círculo.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'area-do-circulo-ii', titulo: 'Área do círculo II: coroa, setor e figuras compostas',
      h1: `Área ${co('decay')}do círculo</span>: coroa, setor e composições`,
      sub: 'Com a área do círculo calculamos a coroa circular (anel), o setor (fatia) e figuras que misturam retângulos e círculos.',
      badges: [['coroa'], ['setor', 'growth'], ['composta', 'decay']], color: 'decay',
      roteiro: ['Fatias, anéis e figuras mistas.', [['Coroa circular', 'círculo maior menos menor', 'target'], ['Setor circular', 'fração do círculo', 'scale'], ['Semicírculo', 'metade', 'bulb'], ['Compostas', 'círculo e retângulo', 'chart'], ['Problemas', 'praças e pratos', 'book']]],
      objetivos: ['Calcular a área de uma <strong>coroa circular</strong>.', 'Calcular a área de um <strong>setor</strong> e de um <strong>semicírculo</strong>.', 'Resolver problemas com <strong>figuras compostas</strong>.'],
      dica: 'Setor de ângulo $α$: área $= {α|360°} · πr²$. Coroa: $π(R² − r²)$.',
      gancho: { titulo: 'O prato fundo', texto: 'Um prato tem <strong>20 cm de diâmetro</strong> e a parte funda tem <strong>12 cm de diâmetro</strong>. A borda plana é uma coroa. Como calcular a área da borda?', mini: ['A área da borda é:', ['soma das duas áreas', 'diferença das áreas dos círculos', 'produto das áreas', 'metade da maior área'], 1, 'Coroa $=$ círculo maior $−$ círculo menor. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · coroa e setor', 'Fórmulas', g2(`<div>
              ${checks(['<strong>Coroa circular</strong> (anel) de raios $R$ e $r$: $A = πR² − πr² = π(R² − r²)$.', '<strong>Setor circular</strong> de ângulo $α$: $A = {α|360°} · π r²$.', '<strong>Semicírculo</strong> ($α = 180°$): $A = {π r²|2}$.', '<strong>Quarto de círculo</strong> ($α = 90°$): $A = {π r²|4}$.'], '.95rem')}
            </div>`, `<div>${coroa}</div>`)],
        ['Teoria · compostas', 'Misturando figuras', g2(`<div>
              ${checks(['Pista (retângulo mais dois semicírculos): área $=$ retângulo $+$ círculo inteiro.', 'Janela em arco: retângulo $+$ semicírculo.', 'Quadrado com círculo inscrito: área sobrando $= a² − πr²$.', 'Decomponha, calcule cada parte e some ou subtraia.'], '.95rem')}
            </div>`, callout('Quadrado e círculo', 'Em um quadrado de lado $10$ com círculo inscrito (raio $5$): sobra $100 − 78,5 = 21,5$ ($π = 3,14$).', 'decay'))]
      ],
      exemplos: [
        ['Coroa circular', 'Um anel tem raio externo de $10$ cm e raio interno de $6$ cm. Qual é a área? ($π = 3,14$)', [['Círculo maior', '$3,14 · 100 = 314$.'], ['Círculo menor', '$3,14 · 36 = 113,04$.'], ['Diferença', '$314 − 113,04 = 200,96$.']], 'A área do anel é <strong>200,96 cm²</strong>.'],
        ['Setor', 'Uma fatia de pizza tem ângulo de $45°$ e raio de $20$ cm. Qual é a área? ($π = 3,14$)', [['Área da pizza', '$3,14 · 400 = 1256$.'], ['Fração', '${45|360} = {1|8}$.'], ['Fatia', '$1256 ÷ 8 = 157$.']], 'A fatia tem <strong>157 cm²</strong>.']
      ],
      pratique: [
        ['Semicírculo', 'Semicírculo de raio $10$ ($π = 3,14$): área:', ['$31,4$', '$157$', '$314$', '$628$'], 1, '${314|2} = 157$. <strong>Alternativa B.</strong>'],
        ['Setor', 'Setor de $90°$ e raio $4$ ($π = 3,14$): área:', ['$6,28$', '$12,56$', '$25,12$', '$50,24$'], 1, '${3,14 · 16|4} = 12,56$. <strong>Alternativa B.</strong>'],
        ['Coroa', 'Coroa de raios $5$ e $3$ ($π = 3,14$): área:', ['$25,12$', '$50,24$', '$78,5$', '$100,48$'], 1, '$3,14 · (25 − 9) = 50,24$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O jardim com canteiro', 'Um jardim retangular de $10$ m × $8$ m tem um canteiro circular de raio $2$ m. Quantos m² de grama (área livre) restam? ($π = 3,14$)', ['$67,44$', '$72,00$', '$80,00$', '$92,56$', '$94,86$'], 0, 'Retângulo $80$; círculo $3,14 · 4 = 12,56$; $80 − 12,56 = 67,44$ m². <strong>Alternativa A.</strong>'],
      cuidados: [['Subtrair raios', 'Na coroa, subtraia as <strong>áreas</strong>, não os raios.'], ['Fração do setor', 'Use $α ÷ 360°$, não $α ÷ 180°$.'], ['Diâmetro como raio', 'Confira se foi dado raio ou diâmetro.'], ['Esquecer o círculo inteiro', 'Em pistas, dois semicírculos formam <strong>um</strong> círculo.']],
      quiz: [
        { q: 'A área de um semicírculo é:', o: ['$πr²$', '${πr²|2}$', '$2πr$', '${πr|2}$'], a: 1 },
        { q: 'Coroa de raios $R$ e $r$:', o: ['$π(R − r)$', '$π(R² − r²)$', '$πRr$', '$π(R + r)²$'], a: 1 },
        { q: 'Setor de $60°$ é que fração do círculo?', o: ['${1|3}$', '${1|4}$', '${1|6}$', '${1|12}$'], a: 2 },
        { q: 'Quadrado de lado $10$ com círculo de raio $5$ inscrito: área do círculo ($π = 3,14$):', o: ['$31,4$', '$78,5$', '$100$', '$157$'], a: 1 }
      ],
      sintese: [['Coroa', 'π(R² − r²).'], ['Setor', 'α ÷ 360° × πr².'], ['Compostas', 'Decomponha, some ou subtraia.']],
      msg: 'Próximo módulo: volumes.'
    }
  ]
});
