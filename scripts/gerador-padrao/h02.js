// Língua Portuguesa · 6º ano · 1º trimestre · Literatura (1 aula) — ESTRUTURA PADRÃO DE HUMANAS
// Texto-fonte original. Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas.
const P = require('./kit.js');
const { unidade } = require('./aula.js');
const { tbl, checks, callout } = P;
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  tipo: 'humanas', materia: 'portugues', ano: '6° Ano', tri: 1, pasta: 'aulas/portugues/6-ano/1-tri/literatura/', inicio: 1,
  titulo: 'Literatura', accent: 'decay', icon: 'dots', key: 'pt6h02', keyp: 'pt', area: 'Língua Portuguesa · 6º ano',
  refs: ['Texto-fonte, exemplos e questões originais, elaborados para o EduMath a partir das habilidades de leitura literária previstas na BNCC (Língua Portuguesa).', 'Leia a narrativa em voz alta e conte-a de novo com as suas palavras.'],
  aulas: [{
    slug: 'a-narrativa-narrador-personagens-tempo-e-espaco', titulo: 'A narrativa: narrador, personagens, tempo e espaço',
    h1: `Toda história tem ${co('primary')}quem conta</span>, quem vive, quando e onde`,
    pergunta: 'Por que “era uma vez” nos faz imaginar uma história antes mesmo de ela começar? O que toda narrativa precisa ter?',
    cena: 'livro', legenda: 'Ilustração original: livro aberto com uma estrela.', badges: [['narrativa'], ['narrador e personagens', 'growth'], ['tempo e espaço', 'decay']],
    previos: { texto: 'Você já ouviu e contou muitas histórias: contos, fábulas, causos de família, filmes. Todas têm elementos em comum.', mini: ['Quem conta a história em uma narrativa é o:', ['narrador', 'leitor', 'ilustrador', 'editor'], 0, 'O narrador é quem conta a história.'], dupla: 'Conte em uma frase a história de um filme ou conto que você conhece: quem é o personagem principal e onde acontece?' },
    contexto: [
      { titulo: 'Narrar é contar uma sequência de fatos', html: checks(['<strong>Narrativa</strong> é um texto que conta fatos que acontecem a personagens, em um tempo e lugar.', 'Há narrativas <strong>reais</strong> (relato) e <strong>de ficção</strong> (conto, fábula, romance).', 'Narrativas orais e escritas existem em todas as culturas.'], '1.12rem'),
        fig: tbl(['Gênero', 'Exemplo'], [['conto', 'história curta com poucos personagens'], ['fábula', 'história com animais e uma lição (moral)'], ['crônica', 'fato do dia a dia contado com humor ou poesia']]) }
    ],
    explicacao: [
      { titulo: 'Narrador e personagens', html: checks(['<strong>Narrador:</strong> quem conta. Em <strong>1ª pessoa</strong> ele participa (“eu fui…”); em <strong>3ª pessoa</strong> ele observa (“ela foi…”).', '<strong>Personagens:</strong> quem vive os fatos; há o <strong>principal</strong> (protagonista) e os <strong>secundários</strong>.', 'Não confunda <strong>autor</strong> (quem escreve) com <strong>narrador</strong> (voz que conta).'], '1.12rem'),
        fig: tbl(['Narrador', 'Exemplo'], [['1ª pessoa', '“Eu abri a porta devagar.”'], ['3ª pessoa', '“Ela abriu a porta devagar.”']]) },
      { titulo: 'Tempo e espaço', html: checks(['<strong>Tempo:</strong> quando acontece (época, hora, ordem dos fatos) e quanto dura.', '<strong>Espaço:</strong> onde acontece (lugar, ambiente).', 'Marcadores: “naquela manhã”, “no fundo do quintal”, “de repente”, “ao entardecer”.'], '1.12rem'),
        fig: callout('Pergunte ao texto', 'Quando? Onde? Quem? O que aconteceu? Como terminou?', 'primary') },
      { titulo: 'A estrutura da narrativa', html: checks(['<strong>Situação inicial:</strong> apresenta personagens, tempo e espaço.', '<strong>Conflito:</strong> o problema que movimenta a história.', '<strong>Clímax:</strong> o momento de maior tensão.', '<strong>Desfecho:</strong> como o conflito se resolve.'], '1.12rem'),
        fig: tbl(['Etapa', 'Pergunta'], [['situação inicial', 'quem, onde, quando?'], ['conflito', 'qual é o problema?'], ['clímax', 'qual o momento decisivo?'], ['desfecho', 'como termina?']]) }
    ],
    fonte: { cena: 'natureza', legenda: 'Ilustração original: um jardim ao entardecer.', titulo: 'Investigando uma narrativa curta', trecho: 'No fundo do quintal, a tartaruga Dona Lia decidiu atravessar o jardim antes do pôr do sol. Os grilos riram: “Você nunca vai chegar!”. Mas, passo a passo, sem pressa e sem parar, ela foi avançando. Ao entardecer, tocou a roseira e olhou o sol descer. — Cheguei — disse, sorrindo.', proced: 'Narrativa original produzida para esta aula · gênero: fábula curta.', perguntas: [['Quem é o personagem principal e quem são os secundários?', 'Dona Lia é a principal; os grilos são secundários.'], ['Que tipo de narrador conta a história?', '3ª pessoa: o narrador observa e não participa.'], ['Onde e quando acontece?', 'No fundo do quintal (jardim), em um dia, do início da tarde ao entardecer.'], ['Qual é o conflito e como se resolve?', 'Os grilos duvidam que ela chegue; ela persiste e chega à roseira.']] },
    comparar: { titulo: 'Duas leituras do final', pergunta: 'Dois colegas discutem o que a história ensina. Qual leitura se apoia melhor no texto?', a: ['Leitor A', '“Quem anda devagar sempre chega, desde que não pare.” (apoiado em “sem pressa e sem parar”)'], b: ['Leitor B', '“Os grilos são maus.” (o texto só diz que riram)'], fecho: 'A leitura de A se apoia em trecho do texto; a de B ultrapassa o que o texto afirma.' },
    pratica: [
      ['Em “Eu abri a porta devagar”, o narrador é de:', ['1ª pessoa', '2ª pessoa', '3ª pessoa', 'não há narrador'], 0, 'Usa “eu”: narrador-personagem, 1ª pessoa.'],
      ['“No fundo do quintal” indica:', ['tempo', 'espaço', 'conflito', 'desfecho'], 1, 'É o lugar onde se passa a ação: espaço.'],
      ['O momento em que o conflito se resolve é o:', ['desfecho', 'situação inicial', 'título', 'tempo'], 0, 'O desfecho mostra como termina.'],
      ['Quem escreve o texto é o:', ['narrador', 'autor', 'personagem', 'leitor'], 1, 'O autor escreve; o narrador é a voz que conta.']
    ],
    sintese: { ideias: [['Elementos', 'Narrador, personagens, tempo e espaço.'], ['Estrutura', 'Situação inicial, conflito, clímax e desfecho.'], ['Leitura', 'Apoie sua interpretação em trechos do texto.']], pergunta: 'Na história de Dona Lia, qual é o conflito e como ele se resolve?', retomada: 'Voltando à pergunta inicial: toda narrativa precisa de personagens, tempo, espaço, narrador e um conflito.' },
    saida: [{ q: 'O narrador é:', o: ['quem escreve o livro', 'quem conta a história', 'o personagem principal sempre', 'o leitor'], a: 1 }, { q: 'O espaço de uma narrativa é:', o: ['quando ocorre', 'onde ocorre', 'quem participa', 'como termina'], a: 1 }, { q: 'O problema que movimenta a história é o:', o: ['conflito', 'título', 'tempo', 'autor'], a: 0 }]
  }]
});
