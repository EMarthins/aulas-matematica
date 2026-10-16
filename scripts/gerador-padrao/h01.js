// Língua Portuguesa · 6º ano · 1º trimestre · Leitura e interpretação (3 aulas) — NA ESTRUTURA PADRÃO DE HUMANAS (docs/estrutura-aulas.md)
// Textos-fonte originais produzidos para o EduMath. Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas.
const P = require('./kit.js');
const { unidade } = require('./aula.js');
const { tbl, checks, callout, card, g2 } = P;
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  tipo: 'humanas', materia: 'portugues', ano: '6° Ano', tri: 1, pasta: 'aulas/portugues/6-ano/1-tri/leitura-e-interpretacao/', inicio: 1,
  titulo: 'Leitura e interpretação', accent: 'primary', icon: 'dots', key: 'pt6h01', keyp: 'pt', area: 'Língua Portuguesa · 6º ano',
  refs: ['Textos, exemplos e questões originais, elaborados para o EduMath a partir das habilidades de leitura previstas na BNCC (Língua Portuguesa, Ensino Fundamental).', 'Leia sempre o texto inteiro antes de olhar as alternativas.'],
  aulas: [
    // ============================================================ aula 1
    {
      slug: 'ler-para-compreender-ideia-central-e-informacoes-explicitas', titulo: 'Ler para compreender: ideia central e informações explícitas',
      h1: `O que o texto ${co('primary')}diz</span> e o que a gente imagina?`,
      pergunta: 'Um bilhete curto na porta da geladeira pode ser lido de modos muito diferentes. Como separar o que está escrito do que apenas imaginamos?',
      cena: 'bilhete', legenda: 'Ilustração original: recado preso na geladeira.', badges: [['leitura'], ['ideia central', 'growth'], ['informação explícita', 'decay']],
      previos: { texto: 'Todo dia você lê bilhetes, avisos, mensagens e legendas. Nem sempre percebemos o que de fato está escrito.', mini: ['A resposta de uma pergunta como “a que horas?” costuma estar:', ['no texto, escrita', 'só na imaginação do leitor', 'no título do livro', 'em outro texto'], 0, 'Informações explícitas estão escritas no próprio texto.'], dupla: 'Já aconteceu de você entender uma mensagem de um jeito e a outra pessoa de outro? O que causou a diferença?' },
      contexto: [
        { titulo: 'Todo texto nasce de uma situação', html: checks(['<strong>Quem</strong> escreve (autor) e <strong>para quem</strong> escreve (leitor).', '<strong>Onde</strong> o texto circula (suporte): bilhete, jornal, mensagem, livro.', '<strong>Para quê</strong>: informar, avisar, convencer, divertir.', 'Entender a situação ajuda a entender o texto.'], '1.12rem'),
          fig: tbl(['Texto', 'Quem → para quem', 'Para quê'], [['bilhete na geladeira', 'mãe → filha', 'avisar'], ['aviso na escola', 'escola → alunos', 'informar'], ['mensagem no celular', 'amigo → amigo', 'combinar']]) }
      ],
      explicacao: [
        { titulo: 'Ideia central', html: checks(['<strong>Ideia central</strong> é o assunto principal: aquilo de que o texto trata do começo ao fim.', 'Para achá-la, pergunte: <em>sobre o que fala o texto todo?</em>', 'Resuma o texto em <strong>uma frase</strong>: essa frase deve valer para o texto inteiro.'], '1.12rem'),
          fig: callout('Teste', 'Se a frase só serve para um trecho, é um detalhe; se serve para o texto todo, é a ideia central.', 'primary') },
        { titulo: 'Informações explícitas', html: checks(['<strong>Explícitas</strong> são as que estão escritas: dá para apontar com o dedo.', 'Pergunte ao texto: <em>quem? o quê? onde? quando? por quê?</em>', 'Para localizar, volte ao texto e sublinhe o trecho que prova a resposta.'], '1.12rem'),
          fig: tbl(['Pergunta', 'Onde procurar'], [['quem?', 'nomes e pronomes'], ['quando?', 'datas e horários'], ['onde?', 'lugares']]) },
        { titulo: 'Palavras novas e o contexto', html: checks(['Antes do dicionário, leia a <strong>frase inteira</strong>.', 'Exemplo: “O gato estava <em>exausto</em>; dormiu logo depois da brincadeira.” Se dormiu, estava muito cansado.', 'Troque a palavra por um sinônimo: se a frase continua fazendo sentido, você acertou.'], '1.12rem'),
          fig: callout('Pista', 'As palavras <strong>ao redor</strong> dão pistas do significado.', 'growth') }
      ],
      fonte: { cena: 'bilhete', titulo: 'Investigando o bilhete', trecho: '“Filha, o jantar está pronto no forno. Volto às 20h. Não esqueça de dar comida ao Tobias. Beijos, mamãe.”', proced: 'Bilhete original produzido para esta aula · gênero: bilhete · suporte: papel na geladeira.', perguntas: [['Quem produziu e para quem?', 'A mãe escreveu para a filha: a assinatura e o vocativo (“Filha”) mostram isso.'], ['Qual é a ideia central?', 'A mãe avisa sobre o jantar, a hora da volta e o cuidado com o Tobias.'], ['Que informações estão explícitas?', 'Jantar no forno; volta às 20h; dar comida ao Tobias.'], ['O que o texto NÃO permite concluir?', 'Quem é o Tobias (cachorro? gato? irmão?), nem onde a mãe está.']] },
      comparar: { titulo: 'Dois leitores, duas leituras', pergunta: 'Dois colegas leram o bilhete. Quem se apoiou no que está escrito?', a: ['Leitor A', '“A mãe está brava, por isso deixou o recado.” (isso não aparece no texto)'], b: ['Leitor B', '“A mãe volta às 20h e deixou o jantar no forno.” (está escrito)'], fecho: 'O Leitor B se apoia em informações explícitas; o Leitor A inventou um sentimento que o texto não traz.' },
      pratica: [
        ['Texto: “O campeonato de futsal da escola começa em 12 de março e vai até o fim de abril. As inscrições são feitas na biblioteca.” Onde fazer a inscrição?', ['na quadra', 'na biblioteca', 'na secretaria', 'no pátio'], 1, 'A informação está explícita: “as inscrições são feitas na biblioteca”.'],
        ['Texto: “As abelhas são essenciais para a natureza: ao levar o pólen de flor em flor, ajudam as plantas a produzir frutos.” A ideia central é:', ['abelhas fazem mel', 'a importância das abelhas para a natureza', 'flores têm pólen', 'frutos são saborosos'], 1, 'O texto inteiro trata da importância das abelhas para as plantas e a natureza.'],
        ['“O explorador ficou <em>perplexo</em> ao ver a cidade vazia: ninguém, nenhum barulho.” Perplexo significa:', ['alegre', 'muito surpreso, sem entender', 'com sono', 'zangado'], 1, 'As pistas (cidade vazia, silêncio) indicam surpresa e dúvida.'],
        ['“A biblioteca funciona de segunda a sexta, das 8h às 17h. Aos sábados, das 8h às 12h. Não abre aos domingos.” Em qual dia fecha mais cedo?', ['segunda', 'quarta', 'sexta', 'sábado'], 3, 'Aos sábados fecha às 12h, mais cedo que nos demais dias.']
      ],
      sintese: { ideias: [['Ideia central', 'O assunto principal do texto inteiro.'], ['Informação explícita', 'Está escrita; volte ao texto para provar.'], ['Contexto', 'Quem escreve, para quem e para quê ajudam a ler.']], pergunta: 'No bilhete da geladeira, o que é explícito e o que é apenas imaginação do leitor?', retomada: 'Voltando à pergunta inicial: separamos o que está escrito (a mãe volta às 20h) do que imaginamos (ela está brava).' },
      saida: [{ q: 'A ideia central de um texto é:', o: ['um detalhe qualquer', 'o assunto principal', 'a primeira palavra', 'só o título'], a: 1 }, { q: 'Informação explícita é a que:', o: ['não está no texto', 'está escrita no texto', 'se imagina', 'vem do dicionário'], a: 1 }, { q: 'Para entender uma palavra nova, ajuda:', o: ['ignorar a frase', 'ler o contexto ao redor', 'trocar de texto', 'pular o parágrafo'], a: 1 }]
    },
    // ============================================================ aula 2
    {
      slug: 'informacoes-implicitas-e-inferencias', titulo: 'Informações implícitas e inferências',
      h1: `O que o texto ${co('primary')}sugere</span> sem dizer`,
      pergunta: 'Ana olhou para a mochila molhada e disse “hoje não teve recreio”. O texto não fala de chuva. Como a gente descobre?',
      cena: 'baloes', legenda: 'Ilustração original: conversa entre dois colegas.', badges: [['implícito'], ['inferência', 'growth'], ['pistas', 'decay']],
      previos: { texto: 'Na conversa do dia a dia, muita coisa fica “subentendida”. Entendemos pelo contexto, pelo tom de voz, pelos gestos.', mini: ['Alguém diz: “Que frio!”, olhando para a janela aberta. Provavelmente quer:', ['que a janela seja fechada', 'saber a temperatura exata', 'sair de casa', 'trocar de assunto'], 0, 'Há um pedido subentendido: fechar a janela.'], dupla: 'Dê um exemplo de algo que alguém já te disse sem dizer de forma direta.' },
      contexto: [
        { titulo: 'Quando o texto não diz tudo', html: checks(['Autores escrevem contando com a <strong>inteligência do leitor</strong>: nem tudo vem explícito.', 'Em bilhetes, diálogos, charges e piadas, muita informação é <strong>implícita</strong>.', 'O leitor completa o sentido usando <strong>pistas do texto</strong> e seu conhecimento de mundo.'], '1.12rem'),
          fig: callout('Dois níveis', '<strong>Explícito:</strong> está escrito. <strong>Implícito:</strong> não está escrito, mas dá para concluir com base em pistas.', 'primary') }
      ],
      explicacao: [
        { titulo: 'O que é inferir', html: checks(['<strong>Inferir</strong> é concluir algo a partir de pistas do texto.', 'Boa inferência: tem <strong>apoio no texto</strong> (uma ou mais pistas).', 'Má inferência: é um palpite sem base no texto.'], '1.12rem'),
          fig: tbl(['Pista no texto', 'Inferência'], [['mochila molhada, pátio vazio', 'choveu'], ['bocejo e olhos fechando', 'está com sono']]) },
        { titulo: 'Como achar as pistas', html: checks(['Releia e marque <strong>palavras, ações e detalhes</strong> que sugerem algo.', 'Pergunte: <em>o que isso me leva a concluir?</em>', 'Confirme: <em>há mais de uma pista que apoia essa conclusão?</em>'], '1.12rem'),
          fig: callout('Roteiro', 'Pista → conclusão → confirmação em outra pista.', 'growth') },
        { titulo: 'Cuidado com o “achismo”', html: checks(['Uma inferência precisa de <strong>evidência</strong>; opinião pessoal não basta.', 'Se o texto permite <strong>mais de uma</strong> conclusão, diga que é provável, não certa.', 'Diferencie: <strong>o que o texto diz</strong>, <strong>o que sugere</strong> e <strong>o que eu acho</strong>.'], '1.12rem'),
          fig: tbl(['Afirmação', 'Tipo'], [['“Ana está no pátio.”', 'explícita'], ['“Choveu.”', 'inferência'], ['“Ana gosta de chuva.”', 'opinião (sem base)']]) }
      ],
      fonte: { cena: 'baloes', titulo: 'Investigando um pequeno texto', trecho: 'Pedro olhou para a mochila encharcada e para o pátio vazio. Pegou o guarda-chuva dobrado no canto da sala e suspirou: “Hoje não teve recreio, de novo.”', proced: 'Texto original produzido para esta aula · gênero: narrativa curta.', perguntas: [['O que está escrito explicitamente?', 'A mochila está encharcada, o pátio está vazio e Pedro tem um guarda-chuva.'], ['Que inferência o texto permite?', 'Está chovendo (ou choveu): mochila molhada, pátio vazio, guarda-chuva.'], ['Que outra pista confirma?', '“De novo” sugere que isso já aconteceu em outros dias.'], ['O que o texto NÃO permite concluir?', 'Quanto tempo vai chover, nem se Pedro gosta de chuva.']] },
      comparar: { titulo: 'Duas inferências sobre o mesmo texto', pergunta: 'Duas alunas leram o texto de Pedro. Qual inferência tem mais apoio no texto?', a: ['Aluna 1', '“Choveu: a mochila está encharcada e o pátio está vazio.”'], b: ['Aluna 2', '“Pedro foi para a escola sem querer.” (nenhuma pista no texto)'], fecho: 'A inferência da Aluna 1 se apoia em duas pistas do texto; a da Aluna 2 não tem evidência.' },
      pratica: [
        ['“Lia fechou o livro com um sorriso, abraçou-o e disse: ‘Quero ler de novo!’” O texto permite inferir que Lia:', ['não gostou do livro', 'gostou do livro', 'esqueceu o livro', 'estava com sono'], 1, 'O sorriso, o abraço e o desejo de reler são pistas de que gostou.'],
        ['“O ônibus chegou lotado; muitos passageiros foram em pé.” Pode-se inferir que:', ['o ônibus estava cheio', 'o ônibus quebrou', 'era domingo', 'o motorista atrasou'], 0, '“Lotado” e “em pé” indicam ônibus cheio.'],
        ['“Daniel abriu a geladeira, olhou e fechou. Foi ao armário e voltou de mãos vazias.” O que se infere?', ['Daniel não achou o que queria comer', 'Daniel estava cozinhando', 'Daniel não gosta de geladeira', 'Daniel acabou de jantar'], 0, 'As ações repetidas de procurar sem pegar nada sugerem que não encontrou o que queria.'],
        ['Qual afirmação é uma INFERÊNCIA (e não informação explícita)?', ['“A porta estava aberta.”', '“Alguém saiu com pressa.”', '“Eram 7h.”', '“Havia um carro na rua.”'], 1, '“Alguém saiu com pressa” é conclusão a partir de pistas; as outras estão escritas.']
      ],
      sintese: { ideias: [['Implícito', 'O que não está escrito, mas pode ser concluído.'], ['Inferência', 'Conclusão apoiada em pistas do texto.'], ['Evidência', 'Sem pistas, é só palpite.']], pergunta: 'No texto de Pedro, quais pistas permitem concluir que choveu?', retomada: 'Voltando à pergunta inicial: descobrimos a chuva pelas pistas (mochila molhada, pátio vazio, guarda-chuva).' },
      saida: [{ q: 'Inferir é:', o: ['copiar o texto', 'concluir a partir de pistas', 'inventar sem base', 'decorar'], a: 1 }, { q: 'Uma boa inferência:', o: ['não precisa de pistas', 'se apoia no texto', 'é sempre certa', 'ignora o contexto'], a: 1 }, { q: '“Ela olhou o relógio várias vezes.” Pode-se inferir que ela:', o: ['estava com pressa ou ansiosa', 'gostava de relógios', 'estava dormindo', 'era professora'], a: 0 }]
    },
    // ============================================================ aula 3
    {
      slug: 'generos-textuais-bilhete-aviso-e-noticia', titulo: 'Gêneros textuais: bilhete, aviso e notícia',
      h1: `Para que serve cada ${co('primary')}texto?</span>`,
      pergunta: 'Um bilhete, um aviso e uma notícia são todos textos curtos. Por que não podemos trocar um pelo outro?',
      cena: 'jornal', legenda: 'Ilustração original: página de jornal.', badges: [['gêneros textuais'], ['finalidade', 'growth'], ['suporte', 'decay']],
      previos: { texto: 'Você reconhece de longe um recado, uma bula, uma receita. Cada texto tem “cara” própria porque cumpre uma função.', mini: ['Um texto que informa um fato recente de interesse público é uma:', ['receita', 'notícia', 'poesia', 'carta de amor'], 1, 'Notícia informa fatos recentes.'], dupla: 'Em que lugares da escola você encontra avisos? Que informações eles sempre trazem?' },
      contexto: [
        { titulo: 'Gênero: texto + situação', html: checks(['<strong>Gênero textual</strong> é o tipo de texto que usamos em cada situação.', 'Cada gênero tem <strong>finalidade</strong>, <strong>leitor</strong>, <strong>suporte</strong> e <strong>linguagem</strong> próprios.', 'Escolher o gênero certo é parte de se comunicar bem.'], '1.12rem'),
          fig: tbl(['Gênero', 'Finalidade', 'Onde circula'], [['bilhete', 'recado rápido', 'papel, geladeira, caderno'], ['aviso', 'informar a muitos', 'mural, portão, quadro'], ['notícia', 'relatar um fato', 'jornal, site, rádio, TV']]) }
      ],
      explicacao: [
        { titulo: 'Bilhete e aviso', html: checks(['<strong>Bilhete:</strong> recado curto, pessoal, com destinatário e assinatura.', '<strong>Aviso:</strong> informação para vários leitores, direta, com data, local e horário.', 'Ambos usam <strong>poucas palavras</strong> e linguagem objetiva.'], '1.12rem'),
          fig: callout('Exemplo de aviso', 'REUNIÃO DE PAIS · sexta-feira, 18h · auditório da escola.', 'primary') },
        { titulo: 'A notícia', html: checks(['<strong>Notícia:</strong> relata um fato <strong>recente</strong> e de interesse público.', 'Estrutura: <strong>título</strong>, <strong>linha fina</strong> (resumo) e <strong>corpo</strong>.', 'Responde: <em>o quê? quem? quando? onde? como? por quê?</em>'], '1.12rem'),
          fig: tbl(['Parte', 'Função'], [['título', 'chamar a atenção'], ['linha fina', 'resumir o fato'], ['corpo', 'detalhar quem, quando, onde, como']]) },
        { titulo: 'Linguagem e finalidade', html: checks(['Bilhete: informal e pessoal (<em>Oi, vó!</em>).', 'Aviso e notícia: <strong>mais formais</strong>, impessoais, claras.', 'A <strong>finalidade</strong> orienta a escolha das palavras e o tamanho do texto.'], '1.12rem'),
          fig: callout('Regra', 'Mude a finalidade e o leitor, e o gênero muda.', 'growth') }
      ],
      fonte: { cena: 'jornal', titulo: 'Investigando uma notícia curta', trecho: '<strong>Escola inaugura horta comunitária</strong><br><em>Alunos do 6º ano plantaram alface e cenoura no último sábado.</em><br>A Escola Municipal Dom Pedro inaugurou, no sábado (10), uma horta no pátio. A colheita será usada na merenda a partir do próximo mês.', proced: 'Notícia original produzida para esta aula · gênero: notícia · suporte: jornal da escola.', perguntas: [['Qual é o fato noticiado?', 'A inauguração de uma horta comunitária na escola.'], ['Quando e onde aconteceu?', 'No sábado (10), no pátio da Escola Municipal Dom Pedro.'], ['Que partes da notícia você identifica?', 'Título (em destaque), linha fina (em itálico) e corpo (o parágrafo).'], ['O que o texto não informa?', 'Quantos alunos participaram e quanto será colhido.']] },
      comparar: { titulo: 'O mesmo fato em dois gêneros', pergunta: 'O mesmo fato foi escrito de duas formas. Qual é o bilhete e qual é o aviso?', a: ['Texto 1', '“Mãe, a horta nova da escola é linda! Vou levar alface pra casa. Beijo!”'], b: ['Texto 2', '“Horta comunitária: visite o pátio da escola de segunda a sexta, das 14h às 17h.”'], fecho: 'O Texto 1 é um bilhete (pessoal, com destinatário); o Texto 2 é um aviso (informa vários leitores, com dias e horários).' },
      pratica: [
        ['“Pai, voltei da escola e deixei o caderno na mesa. Beijos, Luiza.” O gênero é:', ['aviso', 'bilhete', 'notícia', 'receita'], 1, 'Tem destinatário, linguagem pessoal e assinatura: é um bilhete.'],
        ['“A biblioteca estará fechada na segunda-feira, dia 14.” O gênero é:', ['bilhete', 'aviso', 'poema', 'carta'], 1, 'Informa muitos leitores sobre data e local: é um aviso.'],
        ['Qual parte da notícia resume o fato logo abaixo do título?', ['corpo', 'linha fina', 'assinatura', 'legenda'], 1, 'A linha fina resume o fato.'],
        ['O gênero indicado para relatar um fato recente de interesse público é:', ['bilhete', 'receita', 'notícia', 'convite'], 2, 'Notícia relata fatos recentes.']
      ],
      sintese: { ideias: [['Gênero', 'Texto adequado a uma situação, com finalidade e leitor.'], ['Bilhete e aviso', 'Recado pessoal × informação para muitos.'], ['Notícia', 'Título, linha fina e corpo: relata um fato recente.']], pergunta: 'Escolha o melhor gênero para avisar toda a escola de uma gincana e explique a escolha.', retomada: 'Voltando à pergunta inicial: não trocamos os textos porque cada um tem finalidade, leitor e linguagem próprios.' },
      saida: [{ q: 'O bilhete é um texto:', o: ['longo e impessoal', 'curto, pessoal, com destinatário', 'sem finalidade', 'só para jornal'], a: 1 }, { q: 'A notícia relata:', o: ['um fato recente', 'uma receita', 'um poema', 'um conto de fadas'], a: 0 }, { q: 'O aviso se destina a:', o: ['apenas uma pessoa', 'vários leitores', 'ninguém', 'um personagem'], a: 1 }]
    }
  ]
});
