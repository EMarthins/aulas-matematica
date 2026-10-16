// Ciências · 6º ano · 1º trimestre · Vida e evolução — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois e não use "$" em textos; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'ciencias', ano: '6° Ano', tri: 1, pasta: 'aulas/ciencias/6-ano/1-tri/vida-e-evolucao/',
  titulo: 'Vida e evolução', accent: 'growth', icon: 'venn', key: 'ci6u1', keyp: 'ci', area: 'Ciências · 6º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Vida e Evolução previstas na BNCC (Ciências da Natureza).', 'Observe os seres vivos ao seu redor: plantas, animais, fungos e microrganismos.'],
  aulas: [{
    slug: 'o-que-e-vida-e-as-celulas', titulo: 'O que é vida? Características dos seres vivos e a célula',
    h1: `O que é ${co('growth')}vida?</span> Seres vivos e células`,
    sub: 'Todos os seres vivos têm características em comum e são formados por células. Nesta aula você descobre o que distingue um ser vivo de um objeto e como as células se organizam.',
    badges: [['seres vivos'], ['célula', 'growth'], ['organização', 'decay']], color: 'growth',
    roteiro: ['Das características da vida à célula.', [['Características', 'o que todo ser vivo faz', 'bulb'], ['Células', 'a unidade da vida', 'target'], ['Tipos de célula', 'procariótica e eucariótica', 'chart'], ['Níveis de organização', 'da célula ao organismo', 'scale'], ['Reinos', 'grupos de seres vivos', 'book']]],
    objetivos: ['Reconhecer as <strong>características comuns</strong> dos seres vivos.', 'Explicar que a <strong>célula</strong> é a unidade básica da vida.', 'Ordenar os <strong>níveis de organização</strong>: célula, tecido, órgão, sistema, organismo.'],
    dica: 'Para saber se algo é vivo, pergunte: nasce, cresce, se alimenta ou produz energia, reage ao ambiente, se reproduz e morre?',
    gancho: { titulo: 'Semente ou pedrinha?', texto: 'Uma semente e uma pedrinha têm tamanho parecido. Plantada em solo úmido, a semente germina e vira planta; a pedrinha continua igual. O que a semente tem que a pedrinha não tem?', mini: ['A semente é ser vivo porque:', ['é pequena', 'cresce, usa energia e se reproduz', 'é dura', 'é escura'], 1, 'Seres vivos crescem, usam energia e se reproduzem. <strong>Alternativa B.</strong>'] },
    teoria: [
      ['Teoria · seres vivos', 'Características comuns', g2(`<div>
          ${checks(['<strong>Células:</strong> todos os seres vivos são formados por uma ou mais células.', '<strong>Metabolismo:</strong> obtêm e transformam energia (alimentação, respiração, fotossíntese).', '<strong>Reprodução, crescimento e desenvolvimento.</strong>', '<strong>Reagem ao ambiente</strong> e <strong>se adaptam</strong>; morrem.'], '.95rem')}
        </div>`, card(`<strong>Viva ou não?</strong>
          ${tbl(['Exemplo', 'É ser vivo?'], [['bactéria', 'sim'], ['cogumelo', 'sim'], ['pedra', 'não'], ['vírus', 'discussão: não tem células']])}`, 'primary'))],
      ['Teoria · a célula', 'Unidade básica e níveis de organização', g2(`<div>
          ${checks(['<strong>Célula:</strong> menor unidade que realiza as funções da vida.', '<strong>Procariótica:</strong> sem núcleo definido (bactérias). <strong>Eucariótica:</strong> com núcleo (animais, plantas, fungos).', '<strong>Unicelulares</strong> (uma célula) e <strong>pluricelulares</strong> (muitas células).', 'Organização: <strong>célula → tecido → órgão → sistema → organismo</strong>.'], '.95rem')}
        </div>`, callout('Exemplo', 'Células musculares formam o tecido muscular; ele forma o músculo (órgão); vários músculos formam o sistema muscular.', 'growth'))]
    ],
    exemplos: [
      ['Ordenando os níveis', 'Coloque em ordem do menor para o maior: órgão, célula, organismo, tecido.', [['Menor unidade', 'Célula.'], ['Conjunto de células iguais', 'Tecido.'], ['Conjunto de tecidos', 'Órgão.'], ['Ser inteiro', 'Organismo.']], 'Ordem: <strong>célula → tecido → órgão → organismo</strong>.'],
      ['Unicelular ou pluricelular?', 'A ameba é formada por uma única célula. Como ela é classificada?', [['Número de células', 'Uma.'], ['Termo', 'Unicelular.']], 'A ameba é um ser <strong>unicelular</strong>.']
    ],
    pratique: [
      ['Característica', 'Qual característica é comum a todos os seres vivos?', ['terem asas', 'serem formados por células', 'viverem na água', 'terem esqueleto'], 1, 'Todos têm células. <strong>Alternativa B.</strong>'],
      ['Célula', 'Bactérias possuem células:', ['eucarióticas', 'procarióticas', 'sem DNA', 'sem membrana'], 1, 'Bactérias têm células procarióticas. <strong>Alternativa B.</strong>'],
      ['Níveis', 'O coração é um:', ['tecido', 'órgão', 'sistema', 'organismo'], 1, 'Conjunto de tecidos com função específica. <strong>Alternativa B.</strong>']
    ],
    enem: ['O ser invisível', 'Ao microscópio, um estudante vê um ser que se move, se alimenta e se divide em dois, e é formado por uma única célula. Esse ser é:', ['um objeto não vivo', 'um organismo unicelular', 'um tecido humano', 'um órgão', 'uma rocha'], 1, 'Uma célula só: unicelular. <strong>Alternativa B.</strong>'],
    cuidados: [['Vivo = se mexe', 'Plantas não “andam”, mas são seres vivos.'], ['Vírus', 'Não têm células; seu enquadramento como ser vivo é discutido.'], ['Célula = órgão', 'Célula é menor que tecido, que é menor que órgão.'], ['Todo microscópico é bactéria', 'Há fungos, protozoários e outros microrganismos.']],
    quiz: [
      { q: 'A menor unidade da vida é:', o: ['o órgão', 'a célula', 'o tecido', 'o sistema'], a: 1 },
      { q: 'Seres formados por muitas células são:', o: ['unicelulares', 'pluricelulares', 'não vivos', 'minerais'], a: 1 },
      { q: 'Na ordem de organização, vem logo após o tecido:', o: ['a célula', 'o órgão', 'o organismo', 'o sistema'], a: 1 },
      { q: 'Qual NÃO é característica dos seres vivos?', o: ['reproduzir-se', 'ter células', 'ser sempre grande', 'obter energia'], a: 2 }
    ],
    sintese: [['Vida', 'Células, metabolismo, reprodução e resposta ao ambiente.'], ['Célula', 'Unidade básica; pro e eucariótica.'], ['Organização', 'Célula, tecido, órgão, sistema, organismo.']],
    msg: 'Na próxima aula você aprende a classificar os seres vivos em reinos.'
  }]
});
