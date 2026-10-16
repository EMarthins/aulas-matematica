// Língua Portuguesa · 6º ano · 1º trimestre · Leitura e interpretação — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'portugues', ano: '6° Ano', tri: 1, pasta: 'aulas/portugues/6-ano/1-tri/leitura-e-interpretacao/',
  titulo: 'Leitura e interpretação', accent: 'primary', icon: 'dots', key: 'pt6u1', keyp: 'pt', area: 'Língua Portuguesa · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de leitura previstas na BNCC (Língua Portuguesa, Ensino Fundamental).', 'Leia sempre o texto inteiro antes de olhar as alternativas.'],
  aulas: [{
    slug: 'ler-para-compreender', titulo: 'Ler para compreender: ideia central e informações explícitas',
    h1: `Ler para compreender: ${co('primary')}o que o texto diz</span>`,
    sub: 'Ler não é só passar os olhos pelas palavras. Nesta aula você aprende a achar a ideia central de um texto e a localizar informações que estão escritas de forma explícita.',
    badges: [['leitura'], ['ideia central', 'growth'], ['informações', 'decay']], color: 'primary',
    roteiro: ['Quatro passos para ler com atenção.', [['Antes de ler', 'título, imagens, fonte', 'bulb'], ['Ideia central', 'sobre o que o texto fala', 'target'], ['Informações explícitas', 'o que está escrito', 'book'], ['Palavras difíceis', 'o contexto ajuda', 'chart'], ['Conferir', 'voltar ao texto', 'scale']]],
    objetivos: ['Identificar a <strong>ideia central</strong> de um texto.', 'Localizar <strong>informações explícitas</strong> (que estão escritas).', 'Usar o <strong>contexto</strong> para entender palavras desconhecidas.'],
    dica: 'A resposta de uma pergunta de localização está <strong>no texto</strong>: volte e sublinhe o trecho que a prova.',
    gancho: { titulo: 'O bilhete na geladeira', texto: 'Mariana encontrou este bilhete na geladeira: <strong>“Filha, o jantar está pronto no forno. Volto às 20h. Não esqueça de dar comida ao Tobias.”</strong> Quem é o Tobias e a que horas a mãe volta?', mini: ['A que horas a mãe volta?', ['Às 18h', 'Às 19h', 'Às 20h', 'Não informa'], 2, 'O horário está escrito no bilhete: “Volto às 20h”. <strong>Alternativa C.</strong>'] },
    teoria: [
      ['Teoria · compreensão', 'Ideia central e informações explícitas', g2(`<div>
          ${checks(['<strong>Ideia central</strong> é o assunto principal do texto: aquilo de que o texto trata do começo ao fim.', '<strong>Informação explícita</strong> é a que está escrita de forma clara, que você pode apontar com o dedo.', '<strong>Informação implícita</strong> não está escrita, mas pode ser concluída pelo que o texto sugere (é a próxima aula).', 'Pergunte ao texto: <em>quem? o quê? onde? quando? por quê?</em>'], '.95rem')}
        </div>`, card(`<strong>Roteiro de leitura</strong>
          <p style="font-size:.92rem;margin-top:8px;">1) Leia o título e observe imagens.</p>
          <p style="font-size:.92rem;">2) Leia o texto todo, sem pressa.</p>
          <p style="font-size:.92rem;">3) Sublinhe as palavras-chave.</p>
          <p style="font-size:.92rem;">4) Resuma em uma frase.</p>`, 'primary'))],
      ['Teoria · vocabulário', 'Palavras novas: deixe o contexto ajudar', g2(`<div>
          ${checks(['Se uma palavra é nova, leia a <strong>frase inteira</strong> antes de procurar o dicionário.', 'Exemplo: “O gato estava <em>exausto</em>, dormiu logo depois da brincadeira.” Se dormiu, estava muito <strong>cansado</strong>.', 'Palavras ao redor (antes e depois) dão <strong>pistas</strong>.', 'Depois, confirme no dicionário.'], '.95rem')}
        </div>`, callout('Pista de ouro', 'Se trocar a palavra desconhecida por um sinônimo e a frase continuar fazendo sentido, você acertou o significado.', 'primary'))]
    ],
    exemplos: [
      ['Achando a ideia central', 'Leia: “A horta da escola nasceu de uma ideia da turma do 6º ano. Com a ajuda do professor de Ciências, os alunos plantaram alface, cenoura e tomate. Hoje, a colheita é usada na merenda.” Qual é a ideia central?', [['Quem e o quê?', 'Alunos do 6º ano criaram uma horta.'], ['O que acontece com a horta?', 'Os alimentos são plantados e usados na merenda.'], ['Resumo em uma frase', 'A turma criou uma horta que ajuda na merenda.']], 'Ideia central: <strong>uma horta criada pelos alunos e usada na merenda da escola</strong>.'],
      ['Informação explícita', 'No mesmo texto, quais alimentos foram plantados?', [['Volte ao texto', 'Procure “plantaram”.'], ['Trecho', '“plantaram alface, cenoura e tomate”.']], 'Alface, cenoura e tomate: <strong>resposta está escrita no texto</strong>.']
    ],
    pratique: [
      ['Localizando', 'Texto: “O campeonato de futsal da escola começa em 12 de março e vai até o fim de abril. As inscrições são feitas na biblioteca.” Onde fazer a inscrição?', ['na quadra', 'na biblioteca', 'na secretaria', 'no pátio'], 1, 'Está escrito: “As inscrições são feitas na biblioteca.” <strong>Alternativa B.</strong>'],
      ['Ideia central', 'Texto: “As abelhas são essenciais para a natureza: ao levar o pólen de flor em flor, ajudam as plantas a produzir frutos. Sem elas, muitos alimentos seriam raros.” A ideia central é:', ['abelhas fazem mel', 'a importância das abelhas para a natureza e a alimentação', 'frutos são saborosos', 'flores têm pólen'], 1, 'O texto trata da importância das abelhas. <strong>Alternativa B.</strong>'],
      ['Contexto', '“O explorador ficou <em>perplexo</em> ao ver a cidade vazia: ninguém, nenhum barulho.” Perplexo significa:', ['alegre', 'muito surpreso e sem entender', 'com sono', 'zangado'], 1, 'As pistas (cidade vazia, nada) indicam surpresa e dúvida. <strong>Alternativa B.</strong>']
    ],
    enem: ['A placa da biblioteca', 'Texto: “A biblioteca funciona de segunda a sexta, das 8h às 17h. Aos sábados, abre apenas das 8h às 12h. Não abre aos domingos.” Em qual dia a biblioteca fecha mais cedo?', ['segunda-feira', 'quarta-feira', 'sexta-feira', 'sábado', 'domingo'], 3, 'Aos sábados fecha às 12h, mais cedo que nos outros dias. <strong>Alternativa D.</strong>'],
    cuidados: [['Responder pelo que “acha”', 'Pergunta de localização se responde com o que está <strong>no texto</strong>.'], ['Ideia central ≠ detalhe', 'Um detalhe aparece em um trecho; a ideia central aparece no texto todo.'], ['Ler só as alternativas', 'Leia o texto antes; as alternativas podem ser enganosas.'], ['Pular a palavra difícil', 'Releia a frase e use o contexto antes de desistir.']],
    quiz: [
      { q: 'A ideia central de um texto é:', o: ['um detalhe qualquer', 'o assunto principal', 'a primeira palavra', 'o título apenas'], a: 1 },
      { q: 'Informação explícita é a que:', o: ['não está no texto', 'está escrita no texto', 'se imagina', 'vem do dicionário'], a: 1 },
      { q: 'Para entender uma palavra nova, ajuda:', o: ['ignorar a frase', 'ler o contexto ao redor', 'trocar de texto', 'pular o parágrafo'], a: 1 },
      { q: 'Antes de ler, vale observar:', o: ['só o final', 'título e imagens', 'o número de linhas', 'nada'], a: 1 }
    ],
    sintese: [['Ideia central', 'O assunto principal do texto inteiro.'], ['Informação explícita', 'Está escrita; volte ao texto para provar.'], ['Contexto', 'As palavras ao redor ajudam a entender as novas.']],
    msg: 'Na próxima aula você descobre o que o texto sugere sem dizer: as informações implícitas.'
  }]
});
