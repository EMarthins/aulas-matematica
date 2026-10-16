// Educação Física · 6º ano · 1º trimestre · Esportes — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'educacao-fisica', ano: '6° Ano', tri: 1, pasta: 'aulas/educacao-fisica/6-ano/1-tri/esportes/',
  titulo: 'Esportes', accent: 'growth', icon: 'stairs', key: 'ef6u1', keyp: 'edf', area: 'Educação Física · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Esportes previstas na BNCC (Educação Física).', 'Antes de qualquer atividade física, faça aquecimento e hidrate-se.'],
  aulas: [{
    slug: 'esporte-classificacao-e-fundamentos', titulo: 'O que é esporte: classificação e fundamentos',
    h1: `Esporte: ${co('growth')}regras, equipe e fair play</span>`,
    sub: 'Esporte é uma prática corporal com regras, objetivos e valores. Nesta aula você conhece os tipos de esporte, seus fundamentos e a importância de jogar limpo.',
    badges: [['regras'], ['tipos de esporte', 'growth'], ['fair play', 'decay']], color: 'growth',
    roteiro: ['Do jogo ao esporte organizado.', [['O que é esporte', 'regras e objetivos', 'bulb'], ['Classificação', 'coletivos, individuais, de rede…', 'chart'], ['Fundamentos', 'passe, drible, saque', 'target'], ['Fair play', 'jogo limpo', 'flag'], ['Saúde', 'aquecer e hidratar', 'scale']]],
    objetivos: ['Definir <strong>esporte</strong> e diferenciar de brincadeira e jogo.', 'Classificar esportes (<strong>coletivos, individuais, de rede, de invasão…</strong>).', 'Valorizar o <strong>fair play</strong> e o respeito às regras.'],
    dica: 'O que distingue o esporte da brincadeira livre é a existência de <strong>regras reconhecidas</strong> e de <strong>objetivo</strong> a cumprir.',
    gancho: { titulo: 'O jogo no recreio', texto: 'No recreio vocês improvisam um jogo de bola com regras próprias: dois times, um gol de cada lado e tempo de 10 minutos. Quando as regras são combinadas e seguidas por todos, isso se aproxima de um <strong>esporte</strong>. Qual item é essencial?', mini: ['O que mais caracteriza um esporte?', ['Ter regras e objetivo', 'Ser sempre profissional', 'Ter plateia', 'Usar uniforme'], 0, 'Esporte envolve regras e objetivos definidos. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · classificação', 'Tipos de esporte', g2(`<div>
          ${tbl(['Tipo', 'Característica', 'Exemplos'], [['individuais', 'a pessoa compete por si', 'natação, atletismo, judô'], ['coletivos de invasão', 'times invadem o campo adversário', 'futsal, basquete, handebol'], ['de rede/parede', 'bola passa por uma rede', 'vôlei, tênis, badminton'], ['de campo e taco', 'bater e correr bases', 'beisebol, críquete'], ['de combate', 'disputa corpo a corpo', 'judô, boxe, karatê']])}
        </div>`, callout('Importante', 'Um mesmo esporte pode ser praticado por <strong>lazer</strong>, <strong>saúde</strong> ou <strong>competição</strong>.', 'growth'))],
      ['Teoria · valores', 'Fundamentos, fair play e saúde', g2(`<div>
          ${checks(['<strong>Fundamentos</strong> são as habilidades básicas: passe, drible, arremesso, saque, recepção.', '<strong>Fair play</strong> (jogo limpo): respeitar regras, colegas, adversários e árbitros.', '<strong>Aquecimento</strong> prepara o corpo e previne lesões; <strong>alongamento</strong> e <strong>hidratação</strong> também.', 'Equipe: cada um tem uma função e o <strong>coletivo</strong> vale mais que o desempenho individual.'], '.95rem')}
        </div>`, card(`<strong>Fair play na prática</strong>
          <p style="font-size:.92rem;margin-top:8px;">Cumprimentar o adversário, ajudar quem cai, aceitar a decisão do árbitro e comemorar sem humilhar.</p>`, 'primary'))]
    ],
    exemplos: [
      ['Classificando', 'Em qual grupo se encaixa o vôlei?', [['Como se joga', 'Uma rede separa as equipes e a bola não pode cair no próprio campo.'], ['Característica', 'Bola passa por cima da rede.']], 'O vôlei é um esporte <strong>de rede</strong> (coletivo).'],
      ['Atitude de fair play', 'Durante um jogo, um colega seu cai no chão. O que fazer?', [['Primeiro', 'Verificar se ele está bem.'], ['Depois', 'Ajudar a levantar e continuar o jogo com respeito.']], 'Ajudar o colega é <strong>fair play</strong>.']
    ],
    pratique: [
      ['Tipo', 'O basquete é um esporte:', ['de combate', 'de invasão', 'individual', 'de campo e taco'], 1, 'Os times invadem a quadra adversária. <strong>Alternativa B.</strong>'],
      ['Fair play', 'Qual atitude representa fair play?', ['reclamar do árbitro', 'cumprimentar o adversário ao final', 'esconder a bola', 'zombar de quem errou'], 1, 'Respeito ao adversário. <strong>Alternativa B.</strong>'],
      ['Saúde', 'Antes de praticar esporte é importante:', ['comer muito', 'aquecer o corpo', 'ficar parado', 'evitar água'], 1, 'O aquecimento previne lesões. <strong>Alternativa B.</strong>']
    ],
    enem: ['Esporte e inclusão', 'Uma escola organiza um torneio com regras adaptadas para que todos participem, independentemente de habilidade. Essa decisão valoriza principalmente:', ['apenas a vitória', 'a inclusão e a participação', 'a competição profissional', 'o uso de uniformes', 'a exclusão dos menos habilidosos'], 1, 'Regras adaptadas favorecem a participação de todos. <strong>Alternativa B.</strong>'],
    cuidados: [['Vencer a qualquer custo', 'Respeitar as regras vale mais que o resultado.'], ['Pular o aquecimento', 'Aumenta o risco de lesões.'], ['Esporte só para os “bons”', 'O esporte é para todos: lazer, saúde e convivência.'], ['Esquecer a hidratação', 'Beba água antes, durante e depois.']],
    quiz: [
      { q: 'O futsal é esporte:', o: ['individual', 'de invasão (coletivo)', 'de combate', 'de rede'], a: 1 },
      { q: 'Fair play significa:', o: ['jogar sujo', 'jogo limpo, com respeito', 'vencer sempre', 'evitar a quadra'], a: 1 },
      { q: 'O judô é esporte:', o: ['de combate', 'de rede', 'de campo e taco', 'de invasão'], a: 0 },
      { q: 'Aquecer o corpo serve para:', o: ['cansar', 'prevenir lesões', 'atrasar o jogo', 'ganhar peso'], a: 1 }
    ],
    sintese: [['Esporte', 'Prática com regras e objetivos.'], ['Classificação', 'Individuais, invasão, rede, combate…'], ['Valores', 'Fair play, equipe e cuidado com a saúde.']],
    msg: 'Na próxima aula você pratica os fundamentos de um esporte coletivo.'
  }]
});
