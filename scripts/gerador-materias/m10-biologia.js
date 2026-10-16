// Biologia · 1º ano · 1º trimestre · Citologia e genética — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'biologia', ano: '1° Ano', tri: 1, pasta: 'aulas/biologia/1-ano/1-tri/citologia-e-genetica/',
  titulo: 'Citologia e genética', accent: 'growth', icon: 'curve-up', key: 'bi1u1', keyp: 'bi', area: 'Biologia · 1º ano',
  refs: ['Texto, exemplos e questões originais, elaborados a partir das habilidades de Ciências da Natureza previstas na BNCC (Ensino Médio).', 'Dica de estudo: desenhe a célula e as organelas e relacione cada uma com sua função.'],
  aulas: [{
    slug: 'a-celula-organelas-e-membrana', titulo: 'A célula: membrana, citoplasma, núcleo e organelas',
    h1: `A ${co('growth')}célula:</span> a unidade da vida`,
    sub: 'Toda célula é envolta por uma membrana, tem citoplasma e material genético. Nas células eucarióticas, organelas executam funções específicas: energia, produção de proteínas, digestão e mais.',
    badges: [['membrana'], ['núcleo', 'growth'], ['organelas', 'decay']], color: 'growth',
    roteiro: ['Um passeio pela célula.', [['Teoria celular', 'tudo é feito de células', 'bulb'], ['Membrana', 'seleciona o que entra', 'target'], ['Citoplasma e núcleo', 'onde ocorre a vida', 'chart'], ['Organelas', 'mitocôndria, ribossomo…', 'scale'], ['Animal e vegetal', 'diferenças', 'book']]],
    objetivos: ['Enunciar a <strong>teoria celular</strong>.', 'Relacionar cada <strong>organela</strong> à sua função.', 'Diferenciar <strong>célula animal</strong> de <strong>vegetal</strong>.'],
    dica: 'Uma analogia: a célula é uma cidade; o núcleo é a prefeitura, as mitocôndrias são as usinas de energia e a membrana é a muralha com portões.',
    gancho: { titulo: 'A usina da célula', texto: 'Uma atleta corre uma maratona. Seus músculos precisam de muita energia. Uma organela das células musculares é especializada em liberar energia dos alimentos.', mini: ['A organela que libera energia é a:', ['mitocôndria', 'ribossomo', 'núcleo', 'parede celular'], 0, 'Mitocôndrias fazem a respiração celular. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · estrutura', 'Membrana, citoplasma e núcleo', g2(`<div>
          ${checks(['<strong>Teoria celular:</strong> todos os seres vivos são formados por células; a célula é a unidade básica; toda célula vem de outra célula.', '<strong>Membrana plasmática:</strong> envolve a célula e controla a entrada e a saída de substâncias.', '<strong>Citoplasma:</strong> gel com as organelas, onde ocorrem muitas reações.', '<strong>Núcleo</strong> (eucariontes): guarda o material genético (DNA).'], '.95rem')}
        </div>`, card(`<strong>Procarionte × eucarionte</strong>
          ${tbl(['', 'procarionte', 'eucarionte'], [['núcleo', 'sem carioteca', 'com núcleo definido'], ['organelas membranosas', 'não', 'sim'], ['exemplo', 'bactérias', 'animais, plantas, fungos']])}`, 'primary'))],
      ['Teoria · organelas', 'Quem faz o quê', g2(`<div>
          ${tbl(['Organela', 'Função'], [['mitocôndria', 'respiração celular: libera energia (ATP)'], ['ribossomo', 'síntese de proteínas'], ['retículo endoplasmático', 'transporte e produção de substâncias'], ['complexo golgiense', 'empacota e distribui substâncias'], ['lisossomo', 'digestão intracelular'], ['cloroplasto (vegetal)', 'fotossíntese'], ['parede celular (vegetal)', 'sustentação e proteção']])}
        </div>`, callout('Animal × vegetal', 'A célula vegetal tem <strong>parede celular</strong>, <strong>cloroplastos</strong> e grande vacúolo; a animal não.', 'growth'))]
    ],
    exemplos: [
      ['Relacionando', 'Qual organela produz proteínas?', [['Lembre', 'Proteínas são “montadas” por estruturas pequenas.'], ['Organela', 'Ribossomos.']], 'Os <strong>ribossomos</strong>.'],
      ['Animal ou vegetal?', 'Uma célula tem parede celular e cloroplastos. É animal ou vegetal?', [['Parede celular e cloroplasto', 'Característicos de vegetais.']], 'É uma célula <strong>vegetal</strong>.']
    ],
    pratique: [
      ['Função', 'A organela responsável pela fotossíntese é o:', ['lisossomo', 'cloroplasto', 'ribossomo', 'golgiense'], 1, 'Cloroplastos realizam a fotossíntese. <strong>Alternativa B.</strong>'],
      ['Membrana', 'A membrana plasmática tem a função de:', ['produzir energia', 'controlar entrada e saída de substâncias', 'digerir alimentos', 'guardar o DNA'], 1, 'É seletiva. <strong>Alternativa B.</strong>'],
      ['Procarionte', 'Bactérias são seres:', ['eucariontes', 'procariontes', 'multicelulares complexos', 'sem material genético'], 1, 'Sem núcleo definido: procariontes. <strong>Alternativa B.</strong>']
    ],
    enem: ['O destino dos alimentos', 'Uma célula precisa digerir partículas que capturou do meio. A organela que cumpre essa função, com enzimas digestivas, é o:', ['mitocôndria', 'lisossomo', 'ribossomo', 'núcleo', 'cloroplasto'], 1, 'Lisossomos fazem a digestão intracelular. <strong>Alternativa B.</strong>'],
    cuidados: [['Mitocôndria “produz” energia', 'Ela libera energia dos alimentos (não a cria).'], ['Núcleo em bactéria', 'Bactérias não têm núcleo definido.'], ['Parede em animal', 'Parede celular não existe em células animais.'], ['Decorar sem relacionar', 'Associe cada organela a uma função no cotidiano.']],
    quiz: [
      { q: 'O núcleo guarda:', o: ['energia', 'DNA', 'água', 'oxigênio'], a: 1 },
      { q: 'Quem faz respiração celular?', o: ['mitocôndria', 'ribossomo', 'lisossomo', 'membrana'], a: 0 },
      { q: 'Célula com cloroplastos é:', o: ['animal', 'vegetal', 'bacteriana apenas', 'viral'], a: 1 },
      { q: 'A teoria celular afirma que:', o: ['só plantas têm células', 'todos os seres vivos são formados por células', 'células surgem do nada', 'vírus são células'], a: 1 }
    ],
    sintese: [['Estrutura', 'Membrana, citoplasma e material genético.'], ['Organelas', 'Mitocôndria, ribossomo, lisossomo, cloroplasto…'], ['Comparação', 'Procarionte × eucarionte; animal × vegetal.']],
    msg: 'Na próxima aula você estuda o transporte pela membrana e o metabolismo celular.'
  }]
});
