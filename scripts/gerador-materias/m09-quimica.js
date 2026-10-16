// Química · 1º ano · 1º trimestre · Matéria e estrutura atômica — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'quimica', ano: '1° Ano', tri: 1, pasta: 'aulas/quimica/1-ano/1-tri/materia-e-estrutura-atomica/',
  titulo: 'Matéria e estrutura atômica', accent: 'decay', icon: 'combo', key: 'qu1u1', keyp: 'qu', area: 'Química · 1º ano',
  refs: ['Texto, exemplos e questões originais, elaborados a partir das habilidades de Ciências da Natureza previstas na BNCC (Ensino Médio).', 'Dica de estudo: relacione cada conceito a exemplos do cotidiano (cozinha, limpeza, corpo humano).'],
  aulas: [{
    slug: 'materia-substancias-e-misturas', titulo: 'Matéria, substâncias e misturas',
    h1: `${co('decay')}Matéria:</span> substâncias e misturas`,
    sub: 'Tudo o que tem massa e ocupa lugar no espaço é matéria. A Química classifica a matéria em substâncias puras e misturas, e entender isso explica desde a água do mar até o ar que respiramos.',
    badges: [['matéria'], ['substância pura', 'growth'], ['misturas', 'decay']], color: 'decay',
    roteiro: ['Do conceito de matéria à separação de misturas.', [['Matéria', 'massa e volume', 'bulb'], ['Substância pura', 'simples e composta', 'target'], ['Misturas', 'homogêneas e heterogêneas', 'chart'], ['Fases', 'quantas se enxergam', 'scale'], ['Separação', 'filtração, decantação…', 'book']]],
    objetivos: ['Definir <strong>matéria, massa e volume</strong>.', 'Diferenciar <strong>substância pura</strong> de <strong>mistura</strong>.', 'Classificar misturas em <strong>homogêneas e heterogêneas</strong> e escolher um método de separação.'],
    dica: 'Conte as <strong>fases</strong> que se enxergam: uma só = mistura homogênea (solução); duas ou mais = heterogênea.',
    gancho: { titulo: 'Água com sal e água com areia', texto: 'Em um copo você dissolve sal na água; em outro, mistura areia na água. No primeiro, não se enxerga o sal; no segundo, a areia aparece. Os dois copos têm <strong>misturas</strong>, mas de tipos diferentes.', mini: ['Água com sal dissolvido é uma mistura:', ['homogênea (uma fase)', 'heterogênea (duas fases)', 'uma substância pura', 'um elemento químico'], 0, 'Uma só fase visível: homogênea. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · classificação', 'Substâncias e misturas', g2(`<div>
          ${checks(['<strong>Matéria:</strong> tudo que tem massa e ocupa lugar no espaço (volume).', '<strong>Substância pura:</strong> composição fixa e propriedades constantes (ponto de fusão e de ebulição definidos). Ex.: água, oxigênio, ouro.', '<strong>Substância simples:</strong> um só elemento (O₂, Fe). <strong>Composta:</strong> mais de um (H₂O, CO₂).', '<strong>Mistura:</strong> duas ou mais substâncias; composição variável.'], '.95rem')}
        </div>`, card(`<strong>Exemplos do dia a dia</strong>
          ${tbl(['Material', 'Classificação'], [['água destilada', 'substância composta'], ['ouro 24 quilates', 'substância simples'], ['ar atmosférico', 'mistura homogênea'], ['água com óleo', 'mistura heterogênea'], ['granito', 'mistura heterogênea']])}`, 'primary'))],
      ['Teoria · separação', 'Como separar misturas', g2(`<div>
          ${tbl(['Mistura', 'Método', 'Princípio'], [['areia + água', 'filtração ou decantação', 'partículas sólidas ficam retidas ou assentam'], ['água + óleo', 'decantação (funil de separação)', 'densidades diferentes'], ['sal dissolvido em água', 'evaporação', 'só a água evapora'], ['ferro + areia', 'separação magnética', 'ferro é atraído pelo ímã'], ['água + álcool', 'destilação', 'pontos de ebulição diferentes']])}
        </div>`, callout('Importante', 'Separar uma mistura é um processo <strong>físico</strong>: as substâncias não mudam de natureza.', 'decay'))]
    ],
    exemplos: [
      ['Classificando', 'Classifique: leite com café.', [['Fases', 'Uma fase visível.'], ['Substâncias', 'Várias substâncias dissolvidas.']], '<strong>Mistura homogênea</strong>.'],
      ['Escolhendo o método', 'Como separar uma mistura de limalha de ferro e areia?', [['Propriedade diferente', 'O ferro é atraído por ímã; a areia não.'], ['Método', 'Passar um ímã.']], '<strong>Separação magnética</strong>.']
    ],
    pratique: [
      ['Substância', 'Qual é uma substância pura?', ['ar', 'água do mar', 'água destilada', 'granito'], 2, 'A água destilada é só H₂O. <strong>Alternativa C.</strong>'],
      ['Mistura', 'Água e óleo formam mistura:', ['homogênea', 'heterogênea', 'unitária', 'simples'], 1, 'Duas fases visíveis. <strong>Alternativa B.</strong>'],
      ['Método', 'Para obter sal da água do mar usa-se:', ['filtração', 'evaporação', 'decantação', 'separação magnética'], 1, 'A água evapora e o sal permanece. <strong>Alternativa B.</strong>']
    ],
    enem: ['O café coado', 'No preparo do café, o pó é separado do líquido por um filtro de papel. O processo físico utilizado é:', ['evaporação', 'destilação', 'filtração', 'decantação magnética', 'cristalização'], 2, 'Filtração retém o sólido. <strong>Alternativa C.</strong>'],
    cuidados: [['Água do mar é pura?', 'É mistura (água + sais dissolvidos).'], ['Homogênea = pura', 'Mistura homogênea ainda tem várias substâncias.'], ['Ar é substância?', 'O ar é mistura de gases (nitrogênio, oxigênio…).'], ['Separação química', 'Separar misturas não muda a natureza das substâncias.']],
    quiz: [
      { q: 'Matéria é tudo que:', o: ['tem cor', 'tem massa e ocupa espaço', 'tem energia apenas', 'é visível'], a: 1 },
      { q: 'O ar atmosférico é:', o: ['substância simples', 'mistura homogênea', 'mistura heterogênea', 'substância composta'], a: 1 },
      { q: 'A água (H₂O) é substância:', o: ['simples', 'composta', 'mistura', 'elemento'], a: 1 },
      { q: 'Para separar água e óleo:', o: ['evaporação', 'decantação', 'magnetismo', 'destilação fracionada'], a: 1 }
    ],
    sintese: [['Matéria', 'Massa e volume.'], ['Classificação', 'Substância pura (simples/composta) e mistura (homogênea/heterogênea).'], ['Separação', 'Métodos físicos: filtração, decantação, evaporação, destilação, ímã.']],
    msg: 'Na próxima aula você conhece os modelos atômicos e as partículas do átomo.'
  }]
});
