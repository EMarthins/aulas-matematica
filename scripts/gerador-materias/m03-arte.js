// Arte · 6º ano · 1º trimestre · Artes visuais — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

const elementos = svg(260, 110, `<circle cx="30" cy="55" r="7" fill="var(--primary)"/><line x1="60" y1="75" x2="110" y2="35" stroke="var(--growth)" stroke-width="4" stroke-linecap="round"/><polygon points="130,80 160,30 190,80" fill="var(--decay-soft)" stroke="var(--decay)" stroke-width="3" stroke-linejoin="round"/><rect x="205" y="35" width="40" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><text x="14" y="100" font-size="12" fill="var(--ink)">ponto</text><text x="62" y="100" font-size="12" fill="var(--ink)">linha</text><text x="132" y="100" font-size="12" fill="var(--ink)">forma</text><text x="208" y="100" font-size="12" fill="var(--ink)">forma</text>`, '300px');

module.exports = unidade({
  materia: 'arte', ano: '6° Ano', tri: 1, pasta: 'aulas/arte/6-ano/1-tri/artes-visuais/',
  titulo: 'Artes visuais', accent: 'decay', icon: 'wave', key: 'ar6u1', keyp: 'ar', area: 'Arte · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Artes Visuais previstas na BNCC.', 'Observe ao seu redor: a Arte está nas ruas, nos objetos e nas telas.'],
  aulas: [{
    slug: 'elementos-da-linguagem-visual', titulo: 'Elementos da linguagem visual: ponto, linha, forma e cor',
    h1: `A linguagem das ${co('decay')}artes visuais</span>`,
    sub: 'Toda imagem, de um desenho a uma fotografia, é construída com poucos elementos: ponto, linha, forma e cor. Conhecê-los muda a maneira de olhar e de criar.',
    badges: [['ponto'], ['linha', 'growth'], ['forma e cor', 'decay']], color: 'decay',
    roteiro: ['Os blocos de construção de uma imagem.', [['Ponto', 'o menor elemento', 'target'], ['Linha', 'direção e movimento', 'chart'], ['Forma', 'geométrica e orgânica', 'scale'], ['Cor', 'primárias e secundárias', 'bulb'], ['Observar', 'ler uma obra', 'book']]],
    objetivos: ['Reconhecer <strong>ponto, linha, forma e cor</strong> em imagens.', 'Diferenciar <strong>cores primárias, secundárias e terciárias</strong>.', 'Descrever uma imagem usando esses <strong>elementos</strong>.'],
    dica: 'Ao observar uma obra, pergunte: onde há <strong>pontos</strong>? Que <strong>linhas</strong> guiam o olhar? Quais <strong>formas</strong> e <strong>cores</strong> dominam?',
    gancho: { titulo: 'Desenhar sem lápis', texto: 'Imagine fazer um retrato apenas com <strong>pontos</strong>, como os pintores pontilhistas. De longe, os pontos se misturam e formam a imagem inteira. Que elemento visual é esse?', mini: ['O menor elemento da linguagem visual é:', ['a linha', 'a forma', 'o ponto', 'a textura'], 2, 'O ponto é a unidade mínima. <strong>Alternativa C.</strong>'] },
    teoria: [
      ['Teoria · elementos', 'Ponto, linha e forma', g2(`<div>
          ${checks(['<strong>Ponto:</strong> marca pequena; vários pontos podem formar linhas, formas e texturas.', '<strong>Linha:</strong> é o caminho de um ponto em movimento; pode ser reta, curva, ondulada, tracejada.', '<strong>Forma:</strong> contorno de uma área; <strong>geométrica</strong> (círculo, quadrado) ou <strong>orgânica</strong> (irregular, como folhas e nuvens).', 'Linhas e formas criam <strong>movimento, ritmo e equilíbrio</strong>.'], '.95rem')}
        </div>`, `<div>${elementos}</div>`)],
      ['Teoria · cor', 'Primárias, secundárias e terciárias', g2(`<div>
          ${tbl(['Tipo', 'Cores', 'Como se obtém'], [['primárias', 'amarelo, azul, vermelho', 'não se obtêm por mistura'], ['secundárias', 'verde, laranja, roxo', 'mistura de duas primárias'], ['terciárias', 'azul-esverdeado, vermelho-alaranjado…', 'primária + secundária vizinha']])}
        </div>`, callout('Quentes e frias', '<strong>Quentes:</strong> vermelho, laranja, amarelo (lembram sol e fogo). <strong>Frias:</strong> azul, verde, roxo (lembram água e céu).', 'decay'))]
    ],
    exemplos: [
      ['Misturando cores', 'Que cor secundária resulta de misturar amarelo e azul?', [['Cores primárias', 'Amarelo e azul.'], ['Mistura', 'Amarelo + azul.']], 'Resulta no <strong>verde</strong> (secundária).'],
      ['Lendo uma imagem', 'Um quadro mostra um céu laranja e vermelho, com linhas curvas no mar. Que sensação as cores e linhas passam?', [['Cores', 'Laranja e vermelho são quentes: calor, energia.'], ['Linhas curvas', 'Sugerem movimento suave, ondas.']], 'Passam <strong>calor e movimento</strong>, como um entardecer no mar.']
    ],
    pratique: [
      ['Cor secundária', 'Misturando vermelho e amarelo obtém-se:', ['verde', 'roxo', 'laranja', 'marrom'], 2, 'Vermelho + amarelo = laranja. <strong>Alternativa C.</strong>'],
      ['Tipo de linha', 'Uma linha em ziguezague, cheia de “bicos”, costuma transmitir:', ['calma', 'agitação', 'silêncio', 'ausência de movimento'], 1, 'Linhas quebradas dão sensação de agitação. <strong>Alternativa B.</strong>'],
      ['Forma', 'Uma nuvem, uma folha e uma mancha de tinta têm, em geral, forma:', ['geométrica', 'orgânica', 'quadrada', 'perfeita'], 1, 'Formas irregulares da natureza são orgânicas. <strong>Alternativa B.</strong>']
    ],
    enem: ['O cartaz', 'Um cartaz sobre verão usa predominantemente vermelho, laranja e amarelo. Essas cores são chamadas de:', ['frias', 'neutras', 'quentes', 'secundárias apenas', 'terciárias apenas'], 2, 'Vermelho, laranja e amarelo são cores quentes. <strong>Alternativa C.</strong>'],
    cuidados: [['Misturar sem critério', 'Misturas de mais de duas cores tendem a escurecer e “sujar” o resultado.'], ['Forma = só geométrica', 'Há formas orgânicas, muito comuns na natureza.'], ['Cor só “bonita ou feia”', 'Observe o que a cor <strong>comunica</strong>: calor, frio, calma, tensão.'], ['Ver rápido demais', 'Olhe uma obra por alguns minutos: detalhes aparecem aos poucos.']],
    quiz: [
      { q: 'As cores primárias são:', o: ['verde, laranja e roxo', 'amarelo, azul e vermelho', 'preto, branco e cinza', 'rosa, verde e azul'], a: 1 },
      { q: 'Verde é cor:', o: ['primária', 'secundária', 'neutra', 'terciária'], a: 1 },
      { q: 'A linha é o caminho de:', o: ['uma cor', 'um ponto em movimento', 'uma forma fechada', 'uma sombra'], a: 1 },
      { q: 'Azul e verde são cores:', o: ['quentes', 'frias', 'neutras', 'primárias apenas'], a: 1 }
    ],
    sintese: [['Elementos', 'Ponto, linha, forma e cor formam as imagens.'], ['Cores', 'Primárias, secundárias, terciárias; quentes e frias.'], ['Olhar', 'Descreva uma obra usando esses elementos.']],
    msg: 'Na próxima aula você explora textura, volume e composição.'
  }]
});
