// Sociologia · 1º ano · 1º trimestre · Cultura e sociedade — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'sociologia', ano: '1° Ano', tri: 1, pasta: 'aulas/sociologia/1-ano/1-tri/cultura-e-sociedade/',
  titulo: 'Cultura e sociedade', accent: 'decay', icon: 'bars', key: 'so1u1', keyp: 'so', area: 'Sociologia · 1º ano',
  refs: ['Texto e exemplos originais, elaborados a partir das habilidades de Ciências Humanas previstas na BNCC (Ensino Médio).', 'Observe sua própria rotina como um pesquisador: que regras e hábitos ninguém ensina de forma explícita?'],
  aulas: [{
    slug: 'o-olhar-sociologico-e-o-conceito-de-cultura', titulo: 'O olhar sociológico e o conceito de cultura',
    h1: `O olhar ${co('decay')}sociológico:</span> indivíduo, sociedade e cultura`,
    sub: 'A Sociologia estuda como as pessoas vivem em sociedade, como se formam regras, valores e costumes e como a cultura molda comportamentos. Para isso, exige estranhar o que parece natural.',
    badges: [['sociedade'], ['cultura', 'growth'], ['estranhamento', 'decay']], color: 'decay',
    roteiro: ['Da vida cotidiana ao pensamento sociológico.', [['O que é Sociologia', 'ciência da sociedade', 'bulb'], ['Estranhar o familiar', 'sair do senso comum', 'target'], ['Cultura', 'costumes, valores, símbolos', 'chart'], ['Etnocentrismo', 'julgar o outro pelo seu padrão', 'scale'], ['Relativismo cultural', 'compreender antes de julgar', 'book']]],
    objetivos: ['Reconhecer o <strong>objeto da Sociologia</strong> e sua diferença em relação ao senso comum.', 'Definir <strong>cultura</strong> e dar exemplos.', 'Distinguir <strong>etnocentrismo</strong> de <strong>relativismo cultural</strong>.'],
    dica: 'Sociologia é <strong>estranhar o que parece natural</strong>: perguntar por que fazemos o que fazemos e como aprendemos isso.',
    gancho: { titulo: 'O cumprimento', texto: 'No Brasil, é comum cumprimentar com beijo no rosto ou abraço. Em outros países, a saudação é uma reverência ou um aperto de mão. Nenhuma está “errada”: cada <strong>cultura</strong> tem seus códigos.', mini: ['Costumes e valores de um grupo formam sua:', ['cultura', 'genética', 'geografia', 'astrologia'], 0, 'Cultura é o conjunto de saberes, costumes e valores. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · sociologia', 'Do senso comum à análise', g2(`<div>
          ${checks(['<strong>Sociologia:</strong> ciência que estuda a vida em sociedade, suas relações, instituições e mudanças.', 'Surgiu no século XIX, diante das transformações da Revolução Industrial e das cidades; nomes: Comte, Durkheim, Marx, Weber.', '<strong>Senso comum:</strong> explicações do cotidiano, sem exame sistemático. <strong>Olhar sociológico:</strong> investiga com método e compara evidências.', '<strong>Estranhamento</strong> e <strong>desnaturalização</strong>: duvidar do que parece “sempre ter sido assim”.'], '.95rem')}
        </div>`, card(`<strong>Instituições sociais</strong>
          ${tbl(['Instituição', 'Função'], [['família', 'socialização primária'], ['escola', 'educação formal'], ['religião', 'valores e sentido'], ['Estado', 'organização e leis'], ['mídia', 'informação e opinião']])}`, 'primary'))],
      ['Teoria · cultura', 'Etnocentrismo e relativismo', g2(`<div>
          ${checks(['<strong>Cultura:</strong> conjunto de conhecimentos, crenças, valores, costumes, linguagens e símbolos que um grupo aprende e transmite.', 'A cultura é <strong>aprendida</strong> (socialização), não herdada pela biologia.', '<strong>Etnocentrismo:</strong> considerar a própria cultura superior e usá-la como padrão para julgar as outras.', '<strong>Relativismo cultural:</strong> compreender cada cultura em seus próprios termos, sem hierarquizá-las, mas sem abrir mão de direitos humanos.'], '.95rem')}
        </div>`, callout('Diversidade', 'Falamos da cultura no plural: <strong>culturas</strong>. Em um mesmo país convivem diversas culturas e subculturas (regionais, juvenis, religiosas).', 'decay'))]
    ],
    exemplos: [
      ['Etnocentrismo', 'Um turista diz: “Comer com as mãos é nojento e atrasado”, sobre um costume de outro país. Que atitude é essa?', [['Padrão usado', 'A própria cultura.'], ['Julgamento', 'Considera a outra inferior.']], 'É <strong>etnocentrismo</strong>.'],
      ['Desnaturalizando', 'Por que as pessoas usam horário de trabalho e escola “das 7h às 12h”? É natural?', [['Pergunta sociológica', 'Foi sempre assim?'], ['Resposta', 'Não: o horário foi construído socialmente (industrialização, organização do trabalho).']], 'O hábito é <strong>construído socialmente</strong>, não natural.']
    ],
    pratique: [
      ['Conceito', 'A Sociologia é a ciência que estuda:', ['as rochas', 'a vida em sociedade', 'os astros', 'as plantas'], 1, 'Estuda a sociedade. <strong>Alternativa B.</strong>'],
      ['Atitude', 'Compreender uma cultura em seus próprios termos, sem hierarquizar, é:', ['etnocentrismo', 'relativismo cultural', 'preconceito', 'xenofobia'], 1, 'Relativismo cultural. <strong>Alternativa B.</strong>'],
      ['Aprendizado', 'A cultura é transmitida principalmente por meio de:', ['herança genética', 'socialização', 'sorte', 'clima'], 1, 'Aprendemos a cultura vivendo em grupo. <strong>Alternativa B.</strong>']
    ],
    enem: ['O estudante intercambista', 'Um estudante brasileiro chega a outro país e se surpreende com costumes à mesa muito diferentes dos seus. Em vez de julgar, ele pergunta o significado de cada hábito. Essa postura é:', ['etnocentrismo', 'relativismo cultural', 'xenofobia', 'preconceito', 'isolamento'], 1, 'Tentar compreender antes de julgar. <strong>Alternativa B.</strong>'],
    cuidados: [['Cultura = só arte', 'Cultura inclui língua, comida, religião, regras, gestos, valores.'], ['Relativismo ≠ tudo vale', 'Compreender não significa aceitar violações de direitos humanos.'], ['Senso comum é “errado”', 'Ele orienta o dia a dia, mas não substitui a investigação.'], ['Natural × social', 'Muito do que parece natural é aprendido.']],
    quiz: [
      { q: 'O etnocentrismo é:', o: ['respeito às diferenças', 'julgar outras culturas pela própria', 'estudo da língua', 'uma forma de arte'], a: 1 },
      { q: 'Qual instituição é a primeira a socializar a criança?', o: ['mídia', 'família', 'Estado', 'empresa'], a: 1 },
      { q: 'Cultura é:', o: ['herdada pelos genes', 'aprendida e transmitida', 'igual em todo lugar', 'só festas'], a: 1 },
      { q: 'Estranhar o familiar ajuda a:', o: ['esquecer', 'desnaturalizar hábitos e analisá-los', 'evitar pensar', 'copiar outros'], a: 1 }
    ],
    sintese: [['Sociologia', 'Estuda a vida em sociedade com método.'], ['Cultura', 'Costumes, valores e símbolos aprendidos.'], ['Atitude', 'Estranhar o familiar; relativizar sem ser etnocêntrico.']],
    msg: 'Na próxima aula você estuda a socialização e as instituições sociais.'
  }]
});
