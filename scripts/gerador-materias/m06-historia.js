// História · 6º ano · 1º trimestre · Antiguidade e Idade Média — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'historia', ano: '6° Ano', tri: 1, pasta: 'aulas/historia/6-ano/1-tri/antiguidade-e-idade-media/',
  titulo: 'Antiguidade e Idade Média', accent: 'decay', icon: 'chain', key: 'hi6u1', keyp: 'hi', area: 'História · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de História previstas na BNCC.', 'Datas citadas seguem a periodização tradicional usada nas escolas; historiadores discutem seus limites.'],
  aulas: [{
    slug: 'como-a-historia-e-contada', titulo: 'Como a História é contada: fontes, tempo e periodização',
    h1: `Como a ${co('decay')}História</span> é contada?`,
    sub: 'A História estuda as ações humanas ao longo do tempo. Para isso, os historiadores usam fontes, organizam o tempo em períodos e comparam versões dos fatos.',
    badges: [['fontes'], ['tempo', 'growth'], ['períodos', 'decay']], color: 'decay',
    roteiro: ['Como transformar vestígios em História.', [['O que é História', 'estudo das ações humanas', 'bulb'], ['Fontes históricas', 'escritas, orais, materiais', 'book'], ['Medir o tempo', 'séculos e a.C./d.C.', 'chart'], ['Periodização', 'Antiguidade, Idade Média…', 'scale'], ['Pontos de vista', 'quem conta a história?', 'target']]],
    objetivos: ['Definir <strong>História</strong> e reconhecer tipos de <strong>fontes históricas</strong>.', 'Localizar fatos no tempo: <strong>século, a.C. e d.C.</strong>', 'Entender a <strong>periodização</strong> tradicional e seus limites.'],
    dica: 'O <strong>século</strong> tem 100 anos. O século I vai do ano 1 ao 100; o XXI, de 2001 a 2100.',
    gancho: { titulo: 'A caixa do tempo', texto: 'Uma turma enterrou uma caixa com bilhetes, fotos e objetos do ano de 2026 para ser aberta daqui a 50 anos. Quem abrir a caixa vai conhecer a vida de hoje por esses <strong>vestígios</strong>. Os historiadores fazem algo parecido com as <strong>fontes históricas</strong>.', mini: ['Uma fotografia antiga é uma fonte:', ['só escrita', 'visual (imagem)', 'oral', 'inexistente'], 1, 'Fotografias são fontes visuais. <strong>Alternativa B.</strong>'] },
    teoria: [
      ['Teoria · fontes', 'De onde vem o conhecimento histórico', g2(`<div>
          ${tbl(['Tipo de fonte', 'Exemplos'], [['escritas', 'cartas, jornais, leis, diários'], ['orais', 'entrevistas, histórias contadas'], ['materiais', 'ferramentas, ruínas, cerâmicas'], ['visuais', 'pinturas, fotografias, mapas'], ['audiovisuais', 'filmes, gravações']])}
        </div>`, callout('Fonte não é verdade pronta', 'Toda fonte foi produzida por alguém, com um ponto de vista. O historiador <strong>compara e questiona</strong> as fontes.', 'decay'))],
      ['Teoria · tempo', 'Séculos, a.C. e d.C. e períodos', g2(`<div>
          ${checks(['<strong>Século:</strong> 100 anos. Ano 1 a 100 = século I; 1901 a 2000 = século XX.', '<strong>a.C.</strong> (antes de Cristo) conta de trás para frente: 500 a.C. é mais antigo que 100 a.C.', '<strong>d.C.</strong> (depois de Cristo) conta normalmente para frente.', '<strong>Periodização tradicional:</strong> Pré-História, Antiguidade (até 476), Idade Média (476–1453), Idade Moderna (1453–1789), Idade Contemporânea.'], '.95rem')}
        </div>`, card(`<strong>Para calcular o século</strong>
          <p style="font-size:.92rem;margin-top:8px;">Ano 1789: some 1 à centena (17 + 1) ⇒ século XVIII.</p>
          <p style="font-size:.92rem;">Ano 2026: 20 + 1 ⇒ século XXI.</p>`, 'primary'))]
    ],
    exemplos: [
      ['Que século?', 'Em que século ocorreu o ano 1500?', [['Regra', 'Anos terminados em 00 fecham o século.'], ['Aplicar', 'O século XV vai de 1401 a 1500; logo, 1500 é o último ano do século XV.']], 'O ano 1500 pertence ao <strong>século XV</strong> (anos exatos de centena fecham o século).'],
      ['Mais antigo', 'Qual é mais antigo: 300 a.C. ou 100 a.C.?', [['Contagem a.C.', 'Os números decrescem em direção ao ano 1.'], ['Comparar', '300 a.C. aconteceu antes de 100 a.C.']], '<strong>300 a.C.</strong> é mais antigo.']
    ],
    pratique: [
      ['Fonte', 'Uma entrevista gravada com uma moradora idosa é fonte:', ['material', 'oral', 'escrita apenas', 'inexistente'], 1, 'Relato falado: fonte oral. <strong>Alternativa B.</strong>'],
      ['Século', 'O ano 1822 pertence ao século:', ['XVII', 'XVIII', 'XIX', 'XX'], 2, '18 + 1 = XIX. <strong>Alternativa C.</strong>'],
      ['Período', 'A Idade Média, na periodização tradicional, vai de:', ['476 a 1453', '1453 a 1789', '1789 a hoje', '3000 a.C. a 476'], 0, 'Da queda de Roma ao fim de Constantinopla. <strong>Alternativa A.</strong>']
    ],
    enem: ['Vestígios do passado', 'Um grupo de arqueólogos encontrou, em uma escavação, utensílios de cerâmica e restos de uma antiga moradia. Esses objetos são exemplos de fontes:', ['orais', 'materiais', 'audiovisuais', 'digitais', 'cartográficas'], 1, 'Objetos e vestígios físicos: fontes materiais. <strong>Alternativa B.</strong>'],
    cuidados: [['Século do ano 1900', '1900 ainda é século XIX (a centena fecha o século anterior).'], ['a.C. ao contrário', 'Em a.C., quanto maior o número, mais antigo.'], ['Fonte = verdade absoluta', 'Compare fontes e pergunte quem as produziu e por quê.'], ['Períodos rígidos', 'A periodização é uma convenção; cada região tem seu ritmo.']],
    quiz: [
      { q: 'Um século tem:', o: ['10 anos', '50 anos', '100 anos', '1000 anos'], a: 2 },
      { q: 'O ano 1999 está no século:', o: ['XIX', 'XX', 'XXI', 'XVIII'], a: 1 },
      { q: 'Uma carta antiga é uma fonte:', o: ['escrita', 'oral', 'material apenas', 'audiovisual'], a: 0 },
      { q: 'Quem compara e analisa as fontes é o:', o: ['historiador', 'cartógrafo', 'turista', 'jornalista esportivo'], a: 0 }
    ],
    sintese: [['Fontes', 'Escritas, orais, materiais, visuais e audiovisuais.'], ['Tempo', 'Século = 100 anos; a.C. decrescente, d.C. crescente.'], ['Periodização', 'Convenção para organizar o passado.']],
    msg: 'Na próxima aula você viaja para as primeiras sociedades humanas.'
  }]
});
