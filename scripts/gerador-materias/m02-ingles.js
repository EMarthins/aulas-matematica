// Língua Inglesa · 6º ano · 1º trimestre · Vocabulário e comunicação — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'ingles', ano: '6° Ano', tri: 1, pasta: 'aulas/ingles/6-ano/1-tri/vocabulario-e-comunicacao/',
  titulo: 'Vocabulário e comunicação', accent: 'growth', icon: 'flag', key: 'en6u1', keyp: 'en', area: 'Língua Inglesa · 6º ano',
  refs: ['Diálogos e exemplos originais, elaborados a partir das habilidades de comunicação oral e escrita previstas na BNCC (Língua Inglesa).', 'Pratique falando em voz alta: repita cada frase três vezes.'],
  aulas: [{
    slug: 'hello-greetings-and-introductions', titulo: 'Hello! Cumprimentos e apresentações',
    h1: `Hello! ${co('growth')}Greetings and introductions</span>`,
    sub: 'Cumprimentar, dizer o nome e perguntar como a pessoa está são os primeiros passos para conversar em inglês. Nesta aula você aprende as frases mais usadas.',
    badges: [['greetings'], ['I am…', 'growth'], ['How are you?', 'decay']], color: 'growth',
    roteiro: ['Do “hello” a se apresentar.', [['Greetings', 'good morning, afternoon, evening', 'bulb'], ['Name', 'My name is… / I am…', 'target'], ['How are you?', 'perguntar e responder', 'chart'], ['Goodbye', 'despedidas', 'flag'], ['Practice', 'diálogo completo', 'book']]],
    objetivos: ['Usar <strong>cumprimentos</strong> de acordo com o horário do dia.', 'Dizer o <strong>nome</strong> e perguntar o nome de alguém.', 'Perguntar e responder <strong>“How are you?”</strong>.'],
    dica: 'Em inglês, <strong>Good morning</strong> é até o meio-dia, <strong>Good afternoon</strong> até o entardecer e <strong>Good evening</strong> à noite ao chegar.',
    gancho: { titulo: 'Primeiro dia de aula', texto: 'Você chega à escola e encontra uma colega nova, a Emma. Ela diz: <strong>“Hi! I’m Emma. What’s your name?”</strong> Como você responderia?', mini: ['What’s your name?', ['I’m fine, thanks.', 'My name is Ana.', 'Good night.', 'See you later.'], 1, 'Para dizer o nome: “My name is…” ou “I’m…”. <strong>Alternativa B.</strong>'] },
    teoria: [
      ['Teoria · greetings', 'Cumprimentos e despedidas', g2(`<div>
          ${tbl(['Inglês', 'Português', 'Quando usar'], [['Hello / Hi', 'Olá / Oi', 'a qualquer hora'], ['Good morning', 'Bom dia', 'de manhã'], ['Good afternoon', 'Boa tarde', 'à tarde'], ['Good evening', 'Boa noite', 'ao chegar, à noite'], ['Good night', 'Boa noite', 'ao se despedir / dormir'], ['Goodbye / Bye', 'Tchau', 'despedida'], ['See you later', 'Até mais', 'despedida informal']])}
        </div>`, callout('Atenção', '<strong>Good evening</strong> é para cumprimentar; <strong>Good night</strong> é para se despedir ou ir dormir.', 'growth'))],
      ['Teoria · introductions', 'Nome e “como vai?”', g2(`<div>
          ${checks(['<strong>My name is</strong> Ana. / <strong>I am</strong> Ana. / <strong>I’m</strong> Ana.', '<strong>What’s your name?</strong> — Qual é o seu nome?', '<strong>Nice to meet you.</strong> — Prazer em conhecer você.', '<strong>How are you?</strong> — I’m fine, thank you. / I’m great! / Not bad. And you?'], '.95rem')}
        </div>`, card(`<strong>Mini-diálogo</strong>
          <p style="font-size:.92rem;margin-top:8px;">A: Hi! I’m Lucas. What’s your name?</p>
          <p style="font-size:.92rem;">B: Hello, Lucas! My name is Sara.</p>
          <p style="font-size:.92rem;">A: Nice to meet you, Sara.</p>
          <p style="font-size:.92rem;">B: Nice to meet you too!</p>`, 'primary'))]
    ],
    exemplos: [
      ['Escolhendo o cumprimento', 'São 15h e você entra na sala de aula. Qual cumprimento é o mais adequado?', [['Que horas?', '15h é à tarde.'], ['Cumprimento da tarde', 'Good afternoon.']], 'Você diz <strong>“Good afternoon!”</strong>'],
      ['Completando o diálogo', 'Complete: “Hello! ___ name is Pedro. Nice to meet you.”', [['Quem fala?', 'A pessoa fala do próprio nome.'], ['Pronome certo', '“My name is…” (meu nome é…).']], 'Resposta: <strong>My</strong>.']
    ],
    pratique: [
      ['Que horário?', 'De manhã, às 8h, você cumprimenta o professor com:', ['Good night!', 'Good morning!', 'Good evening!', 'Goodbye!'], 1, 'Manhã: Good morning. <strong>Alternativa B.</strong>'],
      ['Responda', 'Alguém pergunta: “How are you?”. Uma boa resposta é:', ['My name is Bia.', 'I’m fine, thank you.', 'Goodbye.', 'Good morning.'], 1, 'How are you? → I’m fine, thank you. <strong>Alternativa B.</strong>'],
      ['Despedida', 'Você vai dormir e se despede dos pais. Diz:', ['Good morning!', 'Good afternoon!', 'Good night!', 'Hello!'], 2, 'Good night = boa noite ao se despedir. <strong>Alternativa C.</strong>']
    ],
    enem: ['A placa do hotel', 'Um hotel recebe turistas às 21h. O recepcionista deve dizer:', ['Good morning, welcome!', 'Good afternoon, welcome!', 'Good evening, welcome!', 'Goodbye, welcome!', 'Good luck!'], 2, 'À noite, ao receber alguém: Good evening. <strong>Alternativa C.</strong>'],
    cuidados: [['Good night × Good evening', 'Good evening cumprimenta; Good night despede.'], ['I am × I’m', '“I’m” é a forma curta de “I am”; as duas estão certas.'], ['Esquecer o “My”', 'Diga “My name is Ana”, não “Name is Ana”.'], ['Pronúncia', 'Repita em voz alta; ouvir e falar é parte do aprendizado.']],
    quiz: [
      { q: '“Bom dia” em inglês é:', o: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], a: 1 },
      { q: '“What’s your name?” significa:', o: ['Como vai você?', 'Qual é o seu nome?', 'Onde você mora?', 'Que horas são?'], a: 1 },
      { q: 'Para se despedir à noite, antes de dormir:', o: ['Good morning', 'Good evening', 'Good night', 'Hello'], a: 2 },
      { q: '“Nice to meet you” quer dizer:', o: ['Até logo', 'Prazer em conhecer você', 'Bom dia', 'Obrigado'], a: 1 }
    ],
    sintese: [['Greetings', 'Hello, Good morning, Good afternoon, Good evening.'], ['Introductions', 'My name is… / I’m… / Nice to meet you.'], ['Goodbye', 'Bye, See you later, Good night.']],
    msg: 'Na próxima aula você aprende os números e a falar sobre idade e família.'
  }]
});
