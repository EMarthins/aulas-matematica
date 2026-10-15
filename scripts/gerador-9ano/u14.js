// Módulo 14 · 9º ano · Recomposição · 3º trimestre — Comprimento e perímetro (aulas 43 a 45 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wu = Wd.unidades('ru1');

const retang = svg(240, 130, `<rect x="30" y="25" width="170" height="80" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><text x="100" y="18" font-size="13" fill="var(--ink)">10 m</text><text x="206" y="70" font-size="13" fill="var(--ink)">6 m</text>`, '280px');

module.exports = unidade({
  tri: 3, dir: 'comprimento-e-perimetro', titulo: 'Comprimento e perímetro', accent: 'primary', icon: 'grid', key: 'r3u1',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'unidades-de-comprimento', titulo: 'Unidades de medida de comprimento',
      h1: `Medir comprimentos: ${co('primary')}do milímetro ao quilômetro</span>`,
      sub: 'O metro é a unidade de base. Seus múltiplos e submúltiplos permitem medir desde a espessura de uma folha até a distância entre cidades.',
      badges: [['metro'], ['conversão', 'growth'], ['escala', 'decay']], color: 'primary',
      roteiro: ['Unidades, conversões e escolha da medida certa.', [['O metro', 'unidade de base', 'bulb'], ['Múltiplos e submúltiplos', 'km, hm, dam, dm, cm, mm', 'chart'], ['Converter', 'multiplicar ou dividir por 10', 'scale'], ['Escolher', 'a unidade adequada', 'target'], ['Problemas', 'medidas do dia a dia', 'book']]],
      objetivos: ['Reconhecer <strong>múltiplos e submúltiplos</strong> do metro.', '<strong>Converter</strong> entre unidades de comprimento.', 'Escolher a unidade <strong>adequada</strong> para cada situação.'],
      dica: 'Cada "degrau" da escada de unidades vale <strong>10</strong>. Descendo, multiplique por $10$; subindo, divida por $10$.',
      gancho: { titulo: 'A trena e a estrada', texto: 'Para medir o comprimento de uma mesa usamos centímetros. Para a distância entre duas cidades usamos quilômetros. Quantos metros tem <strong>1 km</strong>?', mini: ['$1$ km equivale a:', ['$10$ m', '$100$ m', '$1 000$ m', '$10 000$ m'], 2, '$1$ km $= 1000$ m. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · a escada', 'Múltiplos e submúltiplos', g2(`<div>
              ${tbl(['Unidade', 'Símbolo', 'Em metros'], [['quilômetro', 'km', '$1000$'], ['hectômetro', 'hm', '$100$'], ['decâmetro', 'dam', '$10$'], ['metro', 'm', '$1$'], ['decímetro', 'dm', '$0,1$'], ['centímetro', 'cm', '$0,01$'], ['milímetro', 'mm', '$0,001$']])}
            </div>`, card(`<strong>Como converter</strong>
              <p style="font-size:.92rem;margin-top:8px;">Para uma unidade <strong>menor</strong>, multiplique (o número aumenta).</p>
              <p style="font-size:.92rem;">Para uma unidade <strong>maior</strong>, divida (o número diminui).</p>
              <p class="hint" style="margin-top:6px;">Cada passo na escada: $×10$ ou $÷10$.</p>`, 'primary'))],
        ['Teoria · exemplos', 'Conversões comuns', g2(`<div>
              ${checks(['$3,5$ km $= 3,5 · 1000 = 3500$ m.', '$250$ cm $= 250 ÷ 100 = 2,5$ m.', '$4$ m $= 400$ cm $= 4000$ mm.', '$7500$ m $= 7,5$ km.'], '.95rem')}
            </div>`, callout('Adequação', 'Medimos a espessura de um fio em <strong>mm</strong>, a altura de uma pessoa em <strong>cm</strong> ou <strong>m</strong>, a distância de uma viagem em <strong>km</strong>.', 'primary'))]
      ],
      exemplos: [
        ['Converter', 'Converta $2,4$ km para metros e $350$ cm para metros.', [['km para m', '$2,4 · 1000 = 2400$ m.'], ['cm para m', '$350 ÷ 100 = 3,5$ m.']], '$2,4$ km $=$ <strong>2 400 m</strong>; $350$ cm $=$ <strong>3,5 m</strong>.'],
        ['Soma com unidades diferentes', 'Uma fita de $1,5$ m é emendada em outra de $45$ cm. Qual é o comprimento total em cm?', [['Converter', '$1,5$ m $= 150$ cm.'], ['Somar', '$150 + 45 = 195$.']], 'O total é <strong>195 cm</strong>.']
      ],
      widget: { titulo: 'Conversor de unidades de comprimento', html: wu.html, js: wu.js },
      pratique: [
        ['Km para m', '$0,75$ km equivalem a:', ['$7,5$ m', '$75$ m', '$750$ m', '$7 500$ m'], 2, '$0,75 · 1000 = 750$. <strong>Alternativa C.</strong>'],
        ['Cm para m', '$1 200$ cm equivalem a:', ['$1,2$ m', '$12$ m', '$120$ m', '$12 000$ m'], 1, '$1200 ÷ 100 = 12$. <strong>Alternativa B.</strong>'],
        ['Mm para cm', '$85$ mm equivalem a:', ['$0,85$ cm', '$8,5$ cm', '$85$ cm', '$850$ cm'], 1, '$85 ÷ 10 = 8,5$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A corrida de rua', 'Uma corrida tem $10$ km. Os organizadores colocam um marco a cada $250$ m. Quantos marcos há, contando o de $10$ km?', ['$10$', '$20$', '$30$', '$40$', '$50$'], 3, '$10 000 ÷ 250 = 40$. <strong>Alternativa D.</strong>'],
      cuidados: [['Multiplicar ou dividir?', 'Para unidade menor, o número fica <strong>maior</strong>.'], ['Passos errados', 'Conte os degraus: de km a m são $3$ ($×1000$).'], ['Misturar unidades', 'Converta tudo para a mesma unidade antes de somar.'], ['Vírgula', 'Cuidado ao deslocar a vírgula.']],
      quiz: [
        { q: '$5$ m equivalem a:', o: ['$50$ cm', '$500$ cm', '$5000$ cm', '$0,5$ cm'], a: 1 },
        { q: '$2 500$ m equivalem a:', o: ['$25$ km', '$2,5$ km', '$0,25$ km', '$250$ km'], a: 1 },
        { q: 'Melhor unidade para medir a espessura de um fio de cabelo:', o: ['km', 'm', 'cm', 'mm'], a: 3 },
        { q: '$1$ cm tem quantos mm?', o: ['$1$', '$10$', '$100$', '$1000$'], a: 1 }
      ],
      sintese: [['Escada', 'Cada degrau vale 10.'], ['Converter', 'Para menor, multiplique; para maior, divida.'], ['Escolher', 'Unidade adequada ao que se mede.']],
      msg: 'Próxima aula: perímetro de figuras planas.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'perimetro-de-figuras-planas-i', titulo: 'Perímetro de figuras planas I',
      h1: `Perímetro: ${co('primary')}o contorno das figuras</span>`,
      sub: 'Perímetro é a medida do contorno de uma figura plana: a soma dos comprimentos de todos os seus lados.',
      badges: [['contorno'], ['soma dos lados', 'growth'], ['unidades', 'decay']], color: 'primary',
      roteiro: ['Somar lados e usar fórmulas curtas.', [['O que é perímetro', 'contorno', 'bulb'], ['Retângulo e quadrado', 'fórmulas', 'target'], ['Triângulos', 'soma dos três lados', 'scale'], ['Figuras compostas', 'contar o contorno', 'chart'], ['Problemas', 'cercas e rodapés', 'book']]],
      objetivos: ['Definir <strong>perímetro</strong> como a soma dos lados.', 'Calcular perímetro de <strong>quadrado, retângulo e triângulo</strong>.', 'Resolver problemas de <strong>cercas e molduras</strong>.'],
      dica: 'Perímetro mede <strong>comprimento</strong> (unidades como m e cm). Área mede <strong>superfície</strong> (m², cm²).',
      gancho: { titulo: 'A cerca do quintal', texto: 'Um quintal retangular tem <strong>10 m de comprimento</strong> e <strong>6 m de largura</strong>. Quantos metros de cerca são necessários para contorná-lo?', mini: ['O perímetro do quintal é:', ['$16$ m', '$32$ m', '$60$ m', '$20$ m'], 1, '$2 · (10 + 6) = 32$ m. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · fórmulas', 'Figuras simples', g2(`<div>
              ${checks(['<strong>Perímetro</strong> $=$ soma de todos os lados.', '<strong>Quadrado</strong> de lado $a$: $P = 4a$.', '<strong>Retângulo</strong> $a × b$: $P = 2(a + b)$.', '<strong>Triângulo</strong> de lados $a, b, c$: $P = a + b + c$.'], '.95rem')}
            </div>`, `<div>${retang}</div>`)],
        ['Teoria · figuras compostas', 'Contornar tudo', g2(`<div>
              ${checks(['Em figuras em "L", some <strong>todos</strong> os lados do contorno.', 'Um recorte interno não aumenta nem diminui o perímetro externo se alinhado ao canto.', 'Para polígonos regulares: $P = n · ℓ$.', 'Converta antes as unidades para a mesma.'], '.95rem')}
            </div>`, callout('Exemplo L', 'Um L formado por dois retângulos tem o mesmo perímetro do retângulo que o envolve (cantos alinhados).', 'primary'))]
      ],
      exemplos: [
        ['Retângulo', 'Um terreno retangular de $25$ m por $14$ m será cercado. Quantos metros de cerca?', [['Fórmula', '$2(a + b)$.'], ['Substituir', '$2 · (25 + 14) = 2 · 39 = 78$.']], 'São necessários <strong>78 m</strong> de cerca.'],
        ['Lado desconhecido', 'O perímetro de um retângulo é $50$ cm e um lado mede $15$ cm. Quanto mede o outro?', [['Semiperímetro', '$50 ÷ 2 = 25$.'], ['Outro lado', '$25 − 15 = 10$.']], 'O outro lado mede <strong>10 cm</strong>.']
      ],
      pratique: [
        ['Quadrado', 'O perímetro de um quadrado de lado $9$ cm é:', ['$18$ cm', '$27$ cm', '$36$ cm', '$81$ cm'], 2, '$4 · 9 = 36$. <strong>Alternativa C.</strong>'],
        ['Triângulo', 'Um triângulo tem lados $7$, $9$ e $12$ cm. O perímetro é:', ['$21$ cm', '$26$ cm', '$28$ cm', '$30$ cm'], 2, '$7 + 9 + 12 = 28$. <strong>Alternativa C.</strong>'],
        ['Retângulo', 'Retângulo de $20$ m por $5$ m: perímetro:', ['$25$ m', '$50$ m', '$100$ m', '$200$ m'], 1, '$2 · (20 + 5) = 50$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O rodapé', 'Uma sala retangular de $5$ m por $4$ m terá rodapé em todo o contorno, exceto uma porta de $1$ m. Quantos metros de rodapé são necessários?', ['$16$ m', '$17$ m', '$18$ m', '$19$ m', '$20$ m'], 1, '$2 · (5 + 4) = 18$; $18 − 1 = 17$ m. <strong>Alternativa B.</strong>'],
      cuidados: [['Perímetro × área', 'Perímetro soma lados; área multiplica.'], ['Esquecer lados', 'No retângulo são quatro lados: $2a + 2b$.'], ['Unidades', 'Perímetro em m ou cm; nunca em m².'], ['Lados faltando', 'Em figuras em L, descubra os lados que faltam.']],
      quiz: [
        { q: 'Perímetro de quadrado de lado $6$:', o: ['$12$', '$24$', '$36$', '$6$'], a: 1 },
        { q: 'Perímetro de retângulo $8 × 3$:', o: ['$11$', '$22$', '$24$', '$48$'], a: 1 },
        { q: 'Perímetro é medido em:', o: ['m', 'm²', 'm³', 'kg'], a: 0 },
        { q: 'Triângulo equilátero de lado $5$:', o: ['$10$', '$15$', '$20$', '$25$'], a: 1 }
      ],
      sintese: [['Perímetro', 'Soma dos lados.'], ['Fórmulas', '4a, 2(a+b), a+b+c.'], ['Unidade', 'Comprimento (m, cm).']],
      msg: 'Próxima aula: perímetro II, com figuras compostas e curvas.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'perimetro-de-figuras-planas-ii', titulo: 'Perímetro de figuras planas II',
      h1: `Perímetro: ${co('primary')}figuras compostas e semicírculos</span>`,
      sub: 'Contornos que misturam segmentos e arcos de circunferência pedem somar partes retas e curvas. Também resolvemos problemas inversos, como achar um lado a partir do perímetro.',
      badges: [['composta'], ['arcos', 'growth'], ['inverso', 'decay']], color: 'primary',
      roteiro: ['Somar partes retas e curvas.', [['Figura composta', 'contorno com recortes', 'chart'], ['Semicírculo', 'meio comprimento + diâmetro', 'target'], ['Lado desconhecido', 'a partir de P', 'scale'], ['Equações', 'perímetro com x', 'bulb'], ['Problemas', 'pistas e jardins', 'book']]],
      objetivos: ['Calcular perímetro de <strong>figuras compostas</strong>.', 'Incluir <strong>semicírculos</strong> no contorno.', 'Resolver <strong>equações</strong> de perímetro.'],
      dica: 'No semicírculo, o contorno inclui o <strong>arco</strong> (${C|2}$) <strong>e</strong> o <strong>diâmetro</strong> (se a base fizer parte do contorno).',
      gancho: { titulo: 'A pista com pontas redondas', texto: 'Uma pista de atletismo tem <strong>duas retas de 100 m</strong> e <strong>duas semicircunferências</strong> (juntas formam um círculo) de <strong>diâmetro 60 m</strong>. Quanto mede uma volta? ($π = 3,14$)', mini: ['O comprimento da volta é:', ['$288,4$ m', '$388,4$ m', '$200$ m', '$188,4$ m'], 0, 'Retas: $200$; curvas: $π · 60 = 188,4$; total $388,4$ m. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · contornos mistos', 'Retas mais arcos', g2(`<div>
              ${checks(['Divida o contorno em <strong>segmentos</strong> e <strong>arcos</strong>; some todos.', '<strong>Semicírculo</strong> de raio $r$: arco $= πr$; com o diâmetro: $P = πr + 2r$.', 'Dois semicírculos de mesmo diâmetro formam <strong>um círculo</strong>: $C = πd$.', 'Quarto de círculo: arco $= {πr|2}$, mais os dois raios.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">Janela em arco: base $1,2$ m e semicírculo em cima (diâmetro $1,2$): contorno $= 2 · 1 + 1,2 + 0,6π$.</p>`, 'primary'))],
        ['Teoria · equações', 'Quando o perímetro é dado', g2(`<div>
              ${checks(['Retângulo com lados $x$ e $x + 4$ e perímetro $32$: $2(2x + 4) = 32$ ⇒ $x = 6$.', 'Triângulo isósceles: $2a + b = P$.', 'Quadrado de perímetro $48$: lado $= 48 ÷ 4 = 12$.', 'Hexágono regular de perímetro $42$: lado $= 7$.'], '.95rem')}
            </div>`, callout('Roteiro', '<strong>1.</strong> Escreva o perímetro em função das incógnitas; <strong>2.</strong> iguale ao valor dado; <strong>3.</strong> resolva.', 'primary'))]
      ],
      exemplos: [
        ['Perímetro com semicírculo', 'Uma figura é um retângulo de $8$ cm por $5$ cm com um semicírculo (diâmetro $5$ cm) acoplado ao lado menor. Qual é o perímetro? ($π = 3,14$)', [['Retas externas', 'Dois lados de $8$ e um de $5$: $8 + 8 + 5 = 21$.'], ['Semicírculo', '${3,14 · 5|2} = 7,85$.'], ['Total', '$21 + 7,85 = 28,85$.']], 'O perímetro é <strong>28,85 cm</strong>.'],
        ['Achar x', 'Um retângulo tem lados $x$ e $x + 3$ e perímetro $26$. Quanto vale $x$?', [['Equação', '$2x + 2(x + 3) = 26$.'], ['Resolver', '$4x + 6 = 26$ ⇒ $x = 5$.']], '$x = $ <strong>5</strong> (lados $5$ e $8$).']
      ],
      pratique: [
        ['Semicírculo', 'O arco de um semicírculo de diâmetro $10$ ($π = 3,14$) mede:', ['$15,7$', '$31,4$', '$7,85$', '$62,8$'], 0, '${3,14 · 10|2} = 15,7$. <strong>Alternativa A.</strong>'],
        ['Lado', 'O perímetro de um quadrado é $56$ cm. O lado mede:', ['$7$ cm', '$14$ cm', '$28$ cm', '$224$ cm'], 1, '$56 ÷ 4 = 14$. <strong>Alternativa B.</strong>'],
        ['Equação', 'Retângulo de lados $x$ e $2x$ com perímetro $36$: $x$ vale:', ['$4$', '$6$', '$9$', '$12$'], 1, '$6x = 36$ ⇒ $x = 6$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A janela em arco', 'Uma janela tem formato de retângulo de $1$ m de largura e $1,5$ m de altura, com um semicírculo de diâmetro $1$ m sobre a largura. O contorno (sem a base inferior? use todo o contorno) é: dois lados de $1,5$, a base de $1$ e o arco. Qual o comprimento total? ($π = 3,14$)', ['$4,57$ m', '$5,57$ m', '$6,14$ m', '$5,00$ m', '$6,57$ m'], 0, 'Lados $3,0$; base $1$; arco ${3,14 · 1|2} = 1,57$. Total $= 5,57$ m. <strong>Alternativa B.</strong>'],
      cuidados: [['Semicírculo inteiro', 'O arco é metade do comprimento da circunferência.'], ['Lados internos', 'Segmentos internos (que não são contorno) não entram no perímetro.'], ['Unidades', 'Converta antes de somar.'], ['Aproximar π cedo', 'Mantenha π até o fim ou use o valor do enunciado.']],
      quiz: [
        { q: 'O comprimento de uma semicircunferência de raio $r$ é:', o: ['$2πr$', '$πr$', '$πr²$', '${πr|4}$'], a: 1 },
        { q: 'Quadrado de perímetro $20$: lado:', o: ['$4$', '$5$', '$10$', '$80$'], a: 1 },
        { q: 'Duas semicircunferências de mesmo diâmetro formam:', o: ['um quadrado', 'uma circunferência', 'um arco', 'um setor'], a: 1 },
        { q: 'Retângulo $x$ e $x + 1$, perímetro $18$: $x$ vale:', o: ['$3$', '$4$', '$5$', '$8$'], a: 1 }
      ],
      sintese: [['Compostas', 'Some todos os segmentos e arcos do contorno.'], ['Semicírculo', 'πr (arco) + 2r (com diâmetro).'], ['Equações', 'Escreva P com x e resolva.']],
      msg: 'Próximo módulo: área de figuras planas.'
    }
  ]
});
