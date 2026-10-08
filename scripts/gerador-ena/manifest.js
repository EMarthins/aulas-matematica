// Estrutura da matéria ENA / PROFMAT no catálogo: partes → unidades → itens.
// Cada unidade: pasta, ícone, cor, aulas [tipo, título, arquivo], e títulos das 3 atividades.
const U = (dir, titulo, accent, icon, aulas, ena, cria, pratica) => ({ dir: 'ena-profmat/' + dir + '/', titulo, accent, icon, aulas, ena, cria, pratica });
module.exports = [
  { nome: 'Parte 1 · Aritmética e Lógica', tri: 'Conjuntos numéricos e capítulos 1 a 4', unidades: [
    U('17-conjuntos-numericos', 'Conjuntos Numéricos e Intervalos', 'primary', 'sigma', [
      ['Aula 1', 'Naturais, inteiros, racionais e reais', 'aula-1-naturais-inteiros-racionais-reais.html'],
      ['Aula 2', 'Reta real, intervalos e operações', 'aula-2-intervalos-reta-real.html']
    ], 'Conjuntos numéricos no estilo ENA', 'Que tipo de número é?', 'Conjuntos numéricos: trilha de desafios'),
    U('01-porcentagem-razao-proporcao', 'Porcentagem, Razão e Proporção', 'growth', 'percent', [
      ['Aula 1', 'Porcentagem: pense em fatores', 'aula-1-porcentagem.html'],
      ['Aula 2', 'Razão, proporção e taxas de trabalho', 'aula-2-razao-proporcao-taxas.html']
    ], 'Porcentagem e proporção no estilo ENA', 'Direta, inversa ou nenhuma?', 'Porcentagem e taxas: trilha de desafios'),
    U('02-numeros-inteiros', 'Números Inteiros', 'primary', 'numbers', [
      ['Aula 1', 'Restos, divisibilidade, MMC e MDC', 'aula-1-restos-divisibilidade-mmc-mdc.html'],
      ['Aula 2', 'Paridade, algarismos e somas de inteiros', 'aula-2-paridade-algarismos-somas.html']
    ], 'Números inteiros no estilo ENA', 'Detetive de resoluções erradas', 'Inteiros: trilha de desafios'),
    U('03-conjuntos-contagem', 'Conjuntos e Contagem de Elementos', 'decay', 'venn', [
      ['Aula', 'Conjuntos e contagem de elementos', 'aula-conjuntos-contagem.html']
    ], 'Conjuntos no estilo ENA', 'Memória dos conjuntos', 'Contagem: trilha de desafios'),
    U('04-logica-demonstracao', 'Lógica e Demonstração', 'primary', 'logic', [
      ['Aula 1', 'Lógica: conectivos e negações', 'aula-1-conectivos-negacoes.html'],
      ['Aula 2', 'Contraexemplos, eliminação e demonstração', 'aula-2-contraexemplos-eliminacao-demonstracao.html']
    ], 'Lógica no estilo ENA', 'Monte a demonstração', 'Lógica: trilha de desafios')
  ] },
  { nome: 'Parte 2 · Álgebra e Funções', tri: '1º grau, capítulos 5 a 8 e matrizes', unidades: [
    U('18-primeiro-grau-sistemas', 'Equações, Inequações e Sistemas do 1º Grau', 'growth', 'algebra', [
      ['Aula 1', 'Equações e inequações do 1º grau', 'aula-1-equacoes-inequacoes-primeiro-grau.html'],
      ['Aula 2', 'Sistemas lineares e problemas', 'aula-2-sistemas-lineares-problemas.html']
    ], '1º grau no estilo ENA', 'Detetive do 1º grau', '1º grau: trilha de desafios'),
    U('05-algebra', 'Álgebra: Produtos Notáveis, Radicais e Módulo', 'primary', 'algebra', [
      ['Aula 1', 'Produtos notáveis e fatoração', 'aula-1-produtos-notaveis-fatoracao.html'],
      ['Aula 2', 'Potências, radicais, módulo e ordem', 'aula-2-potencias-radicais-modulo-ordem.html']
    ], 'Álgebra no estilo ENA', 'Caça-erros de álgebra', 'Álgebra: trilha de desafios'),
    U('06-equacoes-inequacoes-sistemas', 'Equações, Inequações e Sistemas', 'growth', 'algebra', [
      ['Aula 1', 'Equação do 2º grau, Girard e sinal', 'aula-1-segundo-grau-girard-sinal.html'],
      ['Aula 2', 'Fracionárias, modulares, irracionais e sistemas', 'aula-2-fracionarias-modulares-irracionais-sistemas.html']
    ], 'Equações e inequações no estilo ENA', 'Qual método resolve?', 'Equações: trilha de desafios'),
    U('07-funcoes-afim-quadratica', 'Funções Afim e Quadrática', 'primary', 'parabola', [
      ['Aula 1', 'Função afim e regiões do plano', 'aula-1-funcao-afim-regioes.html'],
      ['Aula 2', 'Função quadrática, vértice e otimização', 'aula-2-funcao-quadratica-otimizacao.html']
    ], 'Funções no estilo ENA', 'Verdadeiro ou falso: funções', 'Funções: trilha de desafios'),
    U('08-sequencias-pa-pg', 'Sequências: PA, PG e Somas', 'growth', 'stairs', [
      ['Aula 1', 'Progressão aritmética e de Sₙ para aₙ', 'aula-1-progressao-aritmetica.html'],
      ['Aula 2', 'Progressão geométrica e sequências recursivas', 'aula-2-progressao-geometrica-recursivas.html']
    ], 'Sequências no estilo ENA', 'Memória das fórmulas de sequências', 'Sequências: trilha de desafios'),
    U('20-matrizes-determinantes', 'Matrizes, Determinantes e Sistemas', 'growth', 'grid', [
      ['Aula 1', 'Matrizes: operações e inversa', 'aula-1-matrizes-operacoes-inversa.html'],
      ['Aula 2', 'Determinantes e sistemas lineares', 'aula-2-determinantes-sistemas-cramer.html']
    ], 'Matrizes no estilo ENA', 'Detetive de matrizes', 'Matrizes: trilha de desafios')
  ] },
  { nome: 'Parte 3 · Contagem e Dados', tri: 'Capítulos 9 a 11', unidades: [
    U('09-analise-combinatoria', 'Análise Combinatória', 'primary', 'combo', [
      ['Aula 1', 'Princípio multiplicativo, arranjo e combinação', 'aula-1-principios-arranjo-permutacao-combinacao.html'],
      ['Aula 2', 'Anagramas, mesa redonda e outros padrões', 'aula-2-anagramas-circular-complementar-binomio.html']
    ], 'Combinatória no estilo ENA', 'Qual técnica de contagem?', 'Contagem: trilha de desafios'),
    U('10-probabilidade', 'Probabilidade', 'decay', 'dice', [
      ['Aula', 'Probabilidade: contagem e fração', 'aula-probabilidade.html']
    ], 'Probabilidade no estilo ENA', 'Verdadeiro ou falso: probabilidade', 'Probabilidade: trilha de desafios'),
    U('11-estatistica', 'Estatística Descritiva', 'growth', 'bars', [
      ['Aula', 'Média, mediana, moda e dispersão', 'aula-estatistica-descritiva.html']
    ], 'Estatística no estilo ENA', 'Detetive de estatística', 'Estatística: trilha de desafios')
  ] },
  { nome: 'Parte 4 · Geometria', tri: 'Triângulos e capítulos 12 a 14', unidades: [
    U('19-congruencia-semelhanca', 'Triângulos: Congruência e Semelhança', 'primary', 'triangle', [
      ['Aula 1', 'Existência, congruência e pontos notáveis', 'aula-1-triangulos-congruencia-pontos-notaveis.html'],
      ['Aula 2', 'Semelhança, Tales e bissetriz', 'aula-2-semelhanca-tales-bissetriz.html']
    ], 'Triângulos no estilo ENA', 'Memória dos triângulos', 'Triângulos: trilha de desafios'),
    U('12-geometria-plana', 'Geometria Plana', 'primary', 'triangle', [
      ['Aula 1', 'Ângulos, semelhança e triângulos retângulos', 'aula-1-angulos-semelhanca-triangulos.html'],
      ['Aula 2', 'Áreas e razões de áreas', 'aula-2-areas-razoes-de-areas.html'],
      ['Aula 3', 'Círculo e truques para gabaritar', 'aula-3-circulo-truques.html']
    ], 'Geometria plana no estilo ENA', 'Qual ferramenta resolve?', 'Geometria plana: trilha de desafios'),
    U('13-trigonometria', 'Trigonometria', 'decay', 'wave', [
      ['Aula 1', 'Trigonometria no triângulo retângulo', 'aula-1-razoes-notaveis-identidades.html'],
      ['Aula 2', 'Triângulo qualquer, radianos e fórmulas', 'aula-2-triangulo-qualquer-radianos-formulas.html']
    ], 'Trigonometria no estilo ENA', 'Memória da trigonometria', 'Trigonometria: trilha de desafios'),
    U('14-geometria-espacial', 'Geometria Espacial', 'success', 'cube', [
      ['Aula', 'Volumes, poliedros e recipiente inclinado', 'aula-volumes-poliedros.html']
    ], 'Geometria espacial no estilo ENA', 'Verdadeiro ou falso: espacial', 'Espacial: trilha de desafios')
  ] },
  { nome: 'Parte 5 · Extras e Estratégia', tri: 'Capítulos 15 e 16', unidades: [
    U('15-topicos-complementares', 'Tópicos Complementares (EXTRA)', 'primary', 'planet', [
      ['Aula 1', 'Geometria analítica, exponencial e logaritmo', 'aula-1-analitica-exponencial-logaritmo.html'],
      ['Aula 2', 'Polinômios, complexos, matrizes e financeira', 'aula-2-polinomios-complexos-matrizes-financeira.html']
    ], 'Tópicos extras no estilo ENA', 'Memória dos tópicos extras', 'Tópicos extras: trilha de desafios'),
    U('16-estrategia-de-prova', 'Estratégia de Prova e Folha de Fórmulas', 'growth', 'flag', [
      ['Aula', 'Estratégia, tempo e plano de estudo', 'aula-estrategia-de-prova.html']
    ], 'Simulado relâmpago no estilo ENA', 'Em qual capítulo cai?', 'Trilha mista: um pouco de tudo')
  ] }
];
