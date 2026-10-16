// Filosofia · 1º ano · 1º trimestre · Introdução à Filosofia — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'filosofia', ano: '1° Ano', tri: 1, pasta: 'aulas/filosofia/1-ano/1-tri/introducao-a-filosofia/',
  titulo: 'Introdução à Filosofia', accent: 'primary', icon: 'logic', key: 'fl1u1', keyp: 'fl', area: 'Filosofia · 1º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Ciências Humanas previstas na BNCC (Ensino Médio).', 'Filosofar é perguntar: anote as perguntas que surgirem durante a aula.'],
  aulas: [{
    slug: 'o-que-e-filosofia-mito-e-razao', titulo: 'O que é Filosofia? Do mito à razão',
    h1: `O que é ${co('primary')}Filosofia?</span> Do mito à razão`,
    sub: 'A Filosofia nasceu na Grécia Antiga, quando alguns pensadores passaram a buscar explicações racionais, e não apenas míticas, para o mundo. Filosofar é perguntar, argumentar e examinar o que parece óbvio.',
    badges: [['mito'], ['razão', 'growth'], ['perguntas', 'decay']], color: 'primary',
    roteiro: ['Da explicação mítica à pergunta filosófica.', [['Admiração e dúvida', 'de onde vem o filosofar', 'bulb'], ['Mito', 'explicação pela narrativa', 'book'], ['Razão (logos)', 'explicação pela argumentação', 'target'], ['Pré-socráticos', 'a natureza como tema', 'chart'], ['Sócrates', 'o método de perguntar', 'scale']]],
    objetivos: ['Definir <strong>Filosofia</strong> e reconhecer a atitude filosófica.', 'Distinguir <strong>mito</strong> e <strong>explicação racional (logos)</strong>.', 'Reconhecer a importância de <strong>perguntar</strong> e <strong>argumentar</strong>.'],
    dica: 'A palavra Filosofia vem do grego: <strong>philos</strong> (amigo, amor) + <strong>sophia</strong> (sabedoria). Filósofo é o “amigo da sabedoria”.',
    gancho: { titulo: 'O porquê do trovão', texto: 'Para os antigos gregos, o trovão era a voz de Zeus. Hoje explicamos o trovão pela física das descargas elétricas. Entre uma explicação e outra, mudou a maneira de <strong>pensar</strong>: do mito ao argumento.', mini: ['Explicar o trovão por uma história sobre deuses é uma explicação:', ['mítica', 'científica', 'matemática', 'musical'], 0, 'Narrativa com seres divinos: mito. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · origem', 'Mito e razão', g2(`<div>
          ${checks(['<strong>Mito:</strong> narrativa tradicional, transmitida oralmente, que explica a origem do mundo, dos fenômenos e dos costumes por meio de deuses e heróis.', '<strong>Logos (razão):</strong> explicação baseada em argumentos que podem ser examinados, discutidos e criticados.', 'A Filosofia surge na Grécia (séc. VII–VI a.C.), nas cidades da Jônia, como <strong>passagem do mito ao logos</strong> — sem eliminar o mito, que continua existindo.', 'Condições: vida urbana, comércio, escrita, debate público (a <em>pólis</em>).'], '.95rem')}
        </div>`, card(`<strong>Dois modos de explicar</strong>
          ${tbl(['', 'Mito', 'Filosofia'], [['base', 'tradição e autoridade', 'argumento e razão'], ['quem explica', 'deuses e heróis', 'causas naturais e conceitos'], ['questionamento', 'não se discute', 'pode ser criticada']])}`, 'primary'))],
      ['Teoria · o filosofar', 'Perguntar, duvidar, argumentar', g2(`<div>
          ${checks(['<strong>Filosofar começa na admiração</strong> (espanto diante do mundo) e na <strong>dúvida</strong>.', '<strong>Tales de Mileto</strong> afirmou que a água é o princípio de todas as coisas; <strong>Heráclito</strong>, que tudo muda (“não nos banhamos duas vezes no mesmo rio”).', '<strong>Sócrates</strong> (séc. V a.C.) praticava o diálogo: com perguntas, levava as pessoas a examinar o que julgavam saber.', 'Frase atribuída a Sócrates: “Só sei que nada sei” — reconhecer a própria ignorância é o início da sabedoria.'], '.95rem')}
        </div>`, callout('Perguntas filosóficas', 'O que é justiça? O que é conhecer? Por que agimos bem ou mal? São perguntas que não se resolvem com um experimento, mas com <strong>reflexão e argumentos</strong>.', 'primary'))]
    ],
    exemplos: [
      ['Mito ou logos?', 'Classifique: (a) “o Sol é puxado por uma carruagem divina”; (b) “o dia e a noite ocorrem porque a Terra gira”.', [['(a)', 'Narrativa com deuses: mito.'], ['(b)', 'Explicação por causa natural: razão.']], '(a) <strong>mito</strong>; (b) <strong>explicação racional</strong>.'],
      ['O sentido de “filósofo”', 'O que significa a palavra “filósofo” em sua origem grega?', [['philos', 'Amigo, amante.'], ['sophia', 'Sabedoria.']], '“<strong>Amigo da sabedoria</strong>”.']
    ],
    pratique: [
      ['Origem', 'A Filosofia surgiu na:', ['China Antiga', 'Grécia Antiga', 'Roma Imperial', 'Idade Média'], 1, 'Grécia Antiga. <strong>Alternativa B.</strong>'],
      ['Atitude', 'Qual atitude é característica do filosofar?', ['aceitar tudo sem pensar', 'perguntar e argumentar', 'repetir tradições', 'evitar discussões'], 1, 'Questionamento e argumento. <strong>Alternativa B.</strong>'],
      ['Mito × logos', 'A diferença central entre mito e logos está em:', ['a cor das imagens', 'o mito narra; o logos argumenta e pode ser criticado', 'o mito é sempre falso', 'o logos não usa palavras'], 1, 'O logos admite crítica e justificação. <strong>Alternativa B.</strong>']
    ],
    enem: ['A dúvida de Sócrates', 'Um estudante pergunta a um colega: “O que é a coragem?”, e a cada resposta pede exemplos e contra-exemplos. Esse procedimento se aproxima:', ['da atitude mítica', 'do diálogo socrático', 'da fé religiosa', 'da propaganda', 'da obediência'], 1, 'Perguntar para examinar conceitos: método socrático. <strong>Alternativa B.</strong>'],
    cuidados: [['Mito ≠ mentira', 'Mitos têm função cultural e simbólica; não são só “histórias falsas”.'], ['Filosofia = opinião', 'Filosofar exige <strong>argumentos</strong>, não só opinião.'], ['Surgiu do nada', 'Dependeu de condições históricas (cidade, escrita, debate público).'], ['Decorar nomes', 'Mais importante que o nome do pensador é entender a pergunta que ele faz.']],
    quiz: [
      { q: 'Filosofia significa, em grego:', o: ['amor ao dinheiro', 'amigo da sabedoria', 'ciência dos números', 'arte de falar'], a: 1 },
      { q: 'Logos significa, entre outros sentidos:', o: ['razão', 'mito', 'magia', 'ritual'], a: 0 },
      { q: 'O filósofo que praticava o diálogo por perguntas foi:', o: ['Tales', 'Heráclito', 'Sócrates', 'Homero'], a: 2 },
      { q: 'O filosofar começa com:', o: ['obediência', 'admiração e dúvida', 'silêncio', 'medo'], a: 1 }
    ],
    sintese: [['Filosofia', 'Amor à sabedoria; pensar com razão e argumentos.'], ['Do mito ao logos', 'Explicação por narrativas → explicação argumentada.'], ['Atitude', 'Admirar, duvidar, perguntar e argumentar.']],
    msg: 'Na próxima aula você conhece os primeiros filósofos e suas explicações sobre a natureza.'
  }]
});
