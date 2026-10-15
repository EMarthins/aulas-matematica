// Módulo 7 · 9º ano · Recomposição · 2º trimestre — Polígonos (aulas 21 e 22 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

// figura: polígono regular desenhado em SVG (n lados)
const poly = (n, fill = 'var(--primary-soft)', stroke = 'var(--primary)') => {
  const cx = 70, cy = 70, r = 56, pts = [];
  for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + 2 * Math.PI * i / n; pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); }
  return `<polygon points="${pts.join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="3" stroke-linejoin="round"/>`;
};
const tira = `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">${[[3, 'triângulo'], [4, 'quadrado'], [5, 'pentágono'], [6, 'hexágono']].map(([n, t]) => `<figure style="margin:0;text-align:center;">${svg(140, 140, poly(n), '110px')}<figcaption style="font-size:.85rem;color:var(--ink-soft);">${t}</figcaption></figure>`).join('')}</div>`;
const irreg = `<svg viewBox="0 0 160 140" style="width:100%;max-width:150px;height:auto;display:block;margin:6px auto;" role="img" aria-hidden="true"><polygon points="20,110 40,30 90,15 140,60 110,120" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="3" stroke-linejoin="round"/></svg>`;

module.exports = unidade({
  tri: 2, dir: 'poligonos', titulo: 'Polígonos', accent: 'primary', icon: 'polygon', key: 'r2u1',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'o-que-sao-poligonos', titulo: 'O que são polígonos?',
      h1: `${co('primary')}Polígonos:</span> figuras de lados retos`,
      sub: 'Polígono é uma figura plana fechada formada apenas por segmentos de reta. Vamos reconhecer polígonos, nomeá-los e identificar lados, vértices e ângulos.',
      badges: [['lados'], ['vértices', 'growth'], ['ângulos', 'decay']], color: 'primary',
      roteiro: ['Do conceito ao nome de cada polígono.', [['Definição', 'fechada, plana e reta', 'bulb'], ['Elementos', 'lados, vértices, ângulos', 'target'], ['Nomes', 'pelo número de lados', 'book'], ['Convexo ou não', 'o teste do segmento', 'scale'], ['Reconhecer', 'o que não é polígono', 'chart']]],
      objetivos: ['Definir <strong>polígono</strong> e distinguir de outras figuras.', 'Identificar <strong>lados, vértices e ângulos</strong>.', 'Nomear polígonos pelo <strong>número de lados</strong>.'],
      dica: 'Um polígono tem <strong>tantos vértices quanto lados</strong> e tantos ângulos internos quanto lados.',
      gancho: { titulo: 'O que é e o que não é', texto: 'Uma figura plana <strong>fechada</strong>, formada só por <strong>segmentos de reta</strong>, que não se cruzam: é um <strong>polígono</strong>. Um círculo, que tem borda curva, é polígono?', mini: ['O círculo é um polígono?', ['Sim, tem infinitos lados', 'Não, a borda é curva', 'Sim, é fechado', 'Depende do tamanho'], 1, 'Polígono só tem lados <strong>retos</strong>. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · polígonos', 'Definição e elementos', g2(`<div>
              ${checks(['<strong>Polígono:</strong> região plana limitada por uma linha poligonal <strong>fechada e simples</strong> (sem cruzamentos).', '<strong>Lados:</strong> os segmentos; <strong>vértices:</strong> pontos de encontro dos lados.', '<strong>Ângulos internos:</strong> formados por dois lados consecutivos, no interior.', 'Número de lados $=$ número de vértices $=$ número de ângulos.'], '.95rem')}
            </div>`, `<div>${tira}</div>`)],
        ['Teoria · nomes', 'Pelo número de lados', g2(`<div>
              ${tbl(['Lados', 'Nome'], [['$3$', 'triângulo'], ['$4$', 'quadrilátero'], ['$5$', 'pentágono'], ['$6$', 'hexágono'], ['$7$', 'heptágono'], ['$8$', 'octógono'], ['$10$', 'decágono'], ['$12$', 'dodecágono']])}
            </div>`, callout('Convexo ou côncavo', 'Em um polígono <strong>convexo</strong>, qualquer segmento ligando dois pontos do interior fica dentro dele. No <strong>côncavo</strong>, existe "reentrância".', 'primary'))]
      ],
      exemplos: [
        ['É polígono?', 'Quais figuras são polígonos? (a) quadrado; (b) círculo; (c) linha aberta formada por 4 segmentos; (d) hexágono.', [['Critério', 'Fechada, plana, só segmentos de reta.'], ['Quadrado', 'Sim.'], ['Círculo', 'Não: borda curva.'], ['Linha aberta', 'Não: não é fechada.'], ['Hexágono', 'Sim.']], 'São polígonos: <strong>(a) e (d)</strong>.'],
        ['Contando', 'Um polígono tem $9$ vértices. Quantos lados e quantos ângulos internos tem? Qual o nome?', [['Lados', 'Mesmo número de vértices: $9$.'], ['Ângulos', '$9$.'], ['Nome', 'Eneágono.']], '<strong>9 lados, 9 ângulos</strong>: eneágono.']
      ],
      pratique: [
        ['Nome', 'O polígono com $5$ lados é o:', ['hexágono', 'pentágono', 'octógono', 'quadrilátero'], 1, '$5$ lados: pentágono. <strong>Alternativa B.</strong>'],
        ['Contar vértices', 'Um octógono tem quantos vértices?', ['$6$', '$7$', '$8$', '$10$'], 2, 'Tem $8$ lados e $8$ vértices. <strong>Alternativa C.</strong>'],
        ['Não é polígono', 'Qual figura <strong>não</strong> é polígono?', ['losango', 'círculo', 'triângulo', 'trapézio'], 1, 'A borda do círculo é curva. <strong>Alternativa B.</strong>']
      ],
      enem: ['A praça', 'Uma praça tem o formato de um polígono com $6$ lados, todos retos e a figura é fechada. O polígono é um:', ['pentágono', 'hexágono', 'octógono', 'quadrilátero', 'heptágono'], 1, '$6$ lados: hexágono. <strong>Alternativa B.</strong>'],
      cuidados: [['Linha aberta não é polígono', 'O polígono precisa ser fechado.'], ['Lados curvos', 'Basta um lado curvo para a figura deixar de ser polígono.'], ['Lados que se cruzam', 'Um "oito" feito de segmentos não é polígono simples.'], ['Nome pelo vértice', 'Nomeie pelo número de <strong>lados</strong> (igual ao de vértices).']],
      quiz: [
        { q: 'Um quadrilátero tem quantos lados?', o: ['$3$', '$4$', '$5$', '$6$'], a: 1 },
        { q: 'O número de ângulos internos de um polígono é igual ao número de:', o: ['diagonais', 'lados', 'faces', 'arestas'], a: 1 },
        { q: 'O polígono de $12$ lados é o:', o: ['decágono', 'dodecágono', 'eneágono', 'pentadecágono'], a: 1 },
        { q: 'Qual característica <strong>não</strong> pertence a um polígono?', o: ['figura fechada', 'lados retos', 'borda curva', 'plana'], a: 2 }
      ],
      sintese: [['Polígono', 'Plano, fechado, só lados retos.'], ['Elementos', 'Lados, vértices e ângulos, todos em mesmo número.'], ['Nomes', 'Prefixo grego + "gono".']],
      msg: 'Próxima aula: polígonos regulares e não regulares.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'poligonos-regulares-e-nao-regulares', titulo: 'Polígonos regulares e não regulares',
      h1: `Polígonos ${co('primary')}regulares</span> e não regulares`,
      sub: 'Um polígono é regular quando todos os lados têm a mesma medida e todos os ângulos internos também. Caso contrário, é irregular.',
      badges: [['regular'], ['irregular', 'growth'], ['simetria', 'decay']], color: 'primary',
      roteiro: ['Lados e ângulos iguais — ou não.', [['Regular', 'equilátero e equiângulo', 'target'], ['Irregular', 'falta um dos dois', 'scale'], ['O losango e o retângulo', 'casos especiais', 'bulb'], ['Eixos de simetria', 'n em um regular', 'chart'], ['Perímetro', 'n vezes o lado', 'book']]],
      objetivos: ['Diferenciar polígonos <strong>regulares</strong> e <strong>não regulares</strong>.', 'Reconhecer <strong>equilátero</strong> e <strong>equiângulo</strong>.', 'Calcular o <strong>perímetro</strong> de um polígono regular.'],
      dica: 'Regular = <strong>lados iguais E ângulos iguais</strong>. Só um deles não basta.',
      gancho: { titulo: 'O losango e o retângulo', texto: 'O <strong>losango</strong> tem os 4 lados iguais; o <strong>retângulo</strong> tem os 4 ângulos iguais ($90°$). Algum deles é um polígono regular?', mini: ['O polígono regular de 4 lados é:', ['o losango', 'o retângulo', 'o quadrado', 'o trapézio'], 2, 'O quadrado tem lados iguais <strong>e</strong> ângulos iguais. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · regular', 'Duas condições juntas', g2(`<div>
              ${checks(['<strong>Equilátero:</strong> todos os lados com a mesma medida.', '<strong>Equiângulo:</strong> todos os ângulos internos iguais.', '<strong>Regular</strong> = equilátero <strong>e</strong> equiângulo.', 'Exemplos: triângulo equilátero, quadrado, pentágono regular, hexágono regular.'], '.95rem')}
            </div>`, card(`<strong>Só uma condição não basta</strong>
              ${tbl(['Figura', 'Lados iguais?', 'Ângulos iguais?', 'Regular?'], [['quadrado', 'sim', 'sim', 'sim'], ['losango (não quadrado)', 'sim', 'não', 'não'], ['retângulo (não quadrado)', 'não', 'sim', 'não'], ['paralelogramo comum', 'não', 'não', 'não']])}`, 'primary'))],
        ['Teoria · perímetro e simetria', 'Em um polígono regular', g2(`<div>
              ${checks(['<strong>Perímetro:</strong> soma dos lados. No regular, $P = n · ℓ$ (com $n$ lados de medida $ℓ$).', 'Hexágono regular de lado $5$ cm: $P = 6 · 5 = 30$ cm.', '<strong>Eixos de simetria:</strong> um polígono regular de $n$ lados tem $n$ eixos.', 'Triângulo equilátero: $3$ eixos; quadrado: $4$; hexágono: $6$.'], '.95rem')}
            </div>`, callout('Dica', 'Se o perímetro de um polígono regular de $n$ lados é $P$, cada lado mede $P ÷ n$.', 'primary'))]
      ],
      exemplos: [
        ['Perímetro de regular', 'Um pentágono regular tem lado de $7$ cm. Qual é o perímetro?', [['Lados', '$5$.'], ['Fórmula', '$P = 5 · 7$.']], 'O perímetro é <strong>35 cm</strong>.'],
        ['Descobrindo o lado', 'Um octógono regular tem perímetro de $64$ cm. Quanto mede o lado?', [['Lados', '$8$.'], ['Dividir', '$64 ÷ 8 = 8$.']], 'Cada lado mede <strong>8 cm</strong>.']
      ],
      pratique: [
        ['Regular?', 'Um polígono com todos os lados iguais, mas ângulos diferentes, é:', ['regular', 'irregular', 'impossível', 'um círculo'], 1, 'Precisa ter também os ângulos iguais. <strong>Alternativa B.</strong>'],
        ['Perímetro', 'Um hexágono regular de lado $9$ cm tem perímetro de:', ['$36$ cm', '$45$ cm', '$54$ cm', '$63$ cm'], 2, '$6 · 9 = 54$. <strong>Alternativa C.</strong>'],
        ['Lado', 'Um triângulo equilátero de perímetro $27$ cm tem lado:', ['$6$ cm', '$7$ cm', '$8$ cm', '$9$ cm'], 3, '$27 ÷ 3 = 9$. <strong>Alternativa D.</strong>']
      ],
      enem: ['Cerca da pracinha', 'Uma pracinha tem formato de pentágono regular com lado de $12$ m. Quantos metros de cerca são necessários para contornar toda a praça?', ['$36$ m', '$48$ m', '$60$ m', '$72$ m', '$120$ m'], 2, '$5 · 12 = 60$ m. <strong>Alternativa C.</strong>'],
      cuidados: [['Losango não é regular', 'Lados iguais, mas ângulos desiguais (a menos que seja quadrado).'], ['Retângulo não é regular', 'Ângulos iguais, mas lados desiguais.'], ['Perímetro como área', 'Perímetro soma lados; área mede superfície.'], ['Contar lados errado', 'Conte os lados com calma; um hexágono tem $6$.']],
      quiz: [
        { q: 'Qual é polígono regular?', o: ['retângulo', 'losango', 'quadrado', 'trapézio'], a: 2 },
        { q: 'O pentágono regular tem quantos eixos de simetria?', o: ['$1$', '$3$', '$5$', '$10$'], a: 2 },
        { q: 'Perímetro de octógono regular de lado $4$ cm:', o: ['$16$ cm', '$24$ cm', '$32$ cm', '$40$ cm'], a: 2 },
        { q: 'Equiângulo quer dizer:', o: ['lados iguais', 'ângulos iguais', 'diagonais iguais', 'lados paralelos'], a: 1 }
      ],
      sintese: [['Regular', 'Equilátero e equiângulo.'], ['Perímetro', 'n · lado no regular.'], ['Simetria', 'n eixos de simetria no regular de n lados.']],
      msg: 'Próximo módulo: triângulos — existência e classificação.'
    }
  ]
});
