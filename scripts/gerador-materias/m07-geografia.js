// Geografia · 6º ano · 1º trimestre · Espaço e cartografia — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks, svg } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

const rosa = svg(220, 180, `<circle cx="110" cy="90" r="62" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="3"/><line x1="110" y1="22" x2="110" y2="158" stroke="var(--ink)" stroke-width="2"/><line x1="42" y1="90" x2="178" y2="90" stroke="var(--ink)" stroke-width="2"/><polygon points="110,18 102,38 118,38" fill="var(--decay)"/><text x="104" y="14" font-size="14" fill="var(--ink)">N</text><text x="104" y="176" font-size="14" fill="var(--ink)">S</text><text x="184" y="95" font-size="14" fill="var(--ink)">L</text><text x="22" y="95" font-size="14" fill="var(--ink)">O</text>`, '240px');

module.exports = unidade({
  materia: 'geografia', ano: '6° Ano', tri: 1, pasta: 'aulas/geografia/6-ano/1-tri/espaco-e-cartografia/',
  titulo: 'Espaço e cartografia', accent: 'growth', icon: 'planet', key: 'ge6u1', keyp: 'ge', area: 'Geografia · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Geografia previstas na BNCC.', 'Compare mapas, plantas e imagens de satélite do seu bairro.'],
  aulas: [{
    slug: 'orientacao-e-leitura-de-mapas', titulo: 'Orientação e leitura de mapas: pontos cardeais, escala e legenda',
    h1: `Mapas: ${co('growth')}orientação, escala e legenda</span>`,
    sub: 'Para se localizar e ler um mapa, é preciso conhecer os pontos cardeais, a escala e a legenda. Esses três elementos transformam o desenho em informação.',
    badges: [['pontos cardeais'], ['escala', 'growth'], ['legenda', 'decay']], color: 'growth',
    roteiro: ['Da bússola à leitura de um mapa.', [['Orientação', 'pontos cardeais', 'target'], ['Rosa dos ventos', 'N, S, L, O', 'flag'], ['Escala', 'quanto o mapa reduz', 'scale'], ['Legenda', 'símbolos e cores', 'book'], ['Ler um mapa', 'passo a passo', 'chart']]],
    objetivos: ['Usar os <strong>pontos cardeais</strong> e a rosa dos ventos para se orientar.', 'Interpretar a <strong>escala</strong> de um mapa.', 'Ler a <strong>legenda</strong> e os símbolos cartográficos.'],
    dica: 'O Sol nasce no <strong>Leste</strong> (nascente) e se põe no <strong>Oeste</strong> (poente). Com o braço direito apontando o nascente, o Norte fica à frente.',
    gancho: { titulo: 'O tesouro do pirata', texto: 'Um mapa do tesouro diz: “Do portão, ande 20 passos para o <strong>Norte</strong> e depois 10 para o <strong>Leste</strong>”. Sem saber onde é o Norte, ninguém acha o tesouro. Como se orientar?', mini: ['O Sol nasce, aproximadamente, no:', ['Norte', 'Sul', 'Leste', 'Oeste'], 2, 'O Sol nasce no Leste. <strong>Alternativa C.</strong>'] },
    teoria: [
      ['Teoria · orientação', 'Pontos cardeais e colaterais', g2(`<div>
          ${checks(['<strong>Pontos cardeais:</strong> Norte (N), Sul (S), Leste (L) e Oeste (O).', '<strong>Colaterais:</strong> Nordeste (NE), Noroeste (NO), Sudeste (SE), Sudoeste (SO).', '<strong>Rosa dos ventos</strong> é o desenho que mostra essas direções.', 'No mapa, geralmente o Norte aponta para o <strong>alto</strong> da folha.'], '.95rem')}
        </div>`, `<div>${rosa}</div>`)],
      ['Teoria · escala e legenda', 'Reduzir e simbolizar', g2(`<div>
          ${checks(['<strong>Escala</strong> é a relação entre a medida no mapa e a medida real. 1 : 100 000 significa que 1 cm no mapa equivale a 100 000 cm (1 km) no terreno.', 'Quanto <strong>menor o denominador</strong>, maior a escala e mais detalhes aparecem.', '<strong>Legenda</strong> explica as cores e os símbolos (rios, estradas, cidades).', '<strong>Título</strong>, <strong>fonte</strong> e <strong>data</strong> ajudam a avaliar o mapa.'], '.95rem')}
        </div>`, card(`<strong>Conta de escala</strong>
          <p style="font-size:.92rem;margin-top:8px;">Escala 1 : 50 000 e 4 cm no mapa:</p>
          <p style="font-size:.92rem;">4 · 50 000 = 200 000 cm = 2 km.</p>`, 'primary'))]
    ],
    exemplos: [
      ['Distância real', 'Em um mapa de escala 1 : 100 000, duas cidades estão a 5 cm. Qual a distância real?', [['Multiplique', '5 · 100 000 = 500 000 cm.'], ['Converta', '500 000 cm = 5 000 m = 5 km.']], 'A distância real é de <strong>5 km</strong>.'],
      ['Orientação', 'Você está de frente para o poente (onde o Sol se põe). Que ponto cardeal é esse e onde fica o Norte?', [['Poente', 'Oeste.'], ['Norte', 'À sua direita (virado para o Oeste).']], 'Você olha para o <strong>Oeste</strong>; o Norte fica à sua <strong>direita</strong>.']
    ],
    pratique: [
      ['Cardeal', 'O ponto cardeal oposto ao Norte é o:', ['Leste', 'Oeste', 'Sul', 'Nordeste'], 2, 'Oposto de Norte é Sul. <strong>Alternativa C.</strong>'],
      ['Escala', 'Na escala 1 : 200 000, 3 cm no mapa correspondem a:', ['600 m', '6 km', '60 km', '600 km'], 1, '3 · 200 000 = 600 000 cm = 6 km. <strong>Alternativa B.</strong>'],
      ['Legenda', 'A legenda de um mapa serve para:', ['enfeitar', 'explicar os símbolos e as cores', 'mostrar a escala', 'indicar o autor'], 1, 'Legenda decodifica símbolos. <strong>Alternativa B.</strong>']
    ],
    enem: ['O mapa da escola', 'No mapa de uma escola, a biblioteca está a 8 cm do pátio. A escala é 1 : 1 000. A distância real entre eles é de:', ['8 m', '80 m', '800 m', '8 km', '80 km'], 1, '8 · 1 000 = 8 000 cm = 80 m. <strong>Alternativa B.</strong>'],
    cuidados: [['Norte sempre em cima?', 'Quase sempre, mas confira a rosa dos ventos do mapa.'], ['Escala maior', 'Escala maior (1:1 000) mostra mais detalhes que 1:1 000 000.'], ['Esquecer de converter', 'cm para m e km: divida por 100 e por 1 000.'], ['Ignorar a legenda', 'Cores e símbolos mudam de mapa para mapa.']],
    quiz: [
      { q: 'O Sol nasce no:', o: ['Oeste', 'Leste', 'Norte', 'Sul'], a: 1 },
      { q: 'O ponto colateral entre Sul e Leste é o:', o: ['Nordeste', 'Sudeste', 'Sudoeste', 'Noroeste'], a: 1 },
      { q: 'Escala 1 : 10 000 — 2 cm no mapa equivalem a:', o: ['20 m', '200 m', '2 km', '20 km'], a: 1 },
      { q: 'Quem explica símbolos e cores é:', o: ['a escala', 'a legenda', 'o título', 'a rosa dos ventos'], a: 1 }
    ],
    sintese: [['Orientação', 'N, S, L, O e colaterais; Sol nasce no Leste.'], ['Escala', 'Medida no mapa × denominador = distância real.'], ['Legenda', 'Traduz símbolos e cores.']],
    msg: 'Na próxima aula você estuda coordenadas geográficas: latitude e longitude.'
  }]
});
