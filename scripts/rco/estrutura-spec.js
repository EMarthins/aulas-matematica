// Divisão em módulos da Matemática do 6º ao 9º ano (Ensino Fundamental), seguindo a ordem das aulas do RCO/NRE 2026.
// Cada módulo: t = título · r = faixas de aulas do RCO (ex.: '01-04', 'N1-N8', 'R9-R16') · ex = módulos que já existem no site e passam a morar aqui
// (as aulas/atividades deles são mantidas) · prov = divisão provisória (o RCO ainda não publicou as aulas desse trimestre) · l = aulas previstas escritas à mão.
// Para mudar a divisão: edite aqui e rode `node scripts/rco/montar-rco.js` (também roda no preparar.js).
const T1 = '1° Trimestre', T2 = '2° Trimestre', T3 = '3° Trimestre';
module.exports = {
  '6° Ano': {
    [T1]: [
      { t: 'Nivelamento: números naturais e operações', r: ['N1-N8'] },
      { t: 'Sistema de numeração decimal', r: ['01-04'], ex: ['Sistema de numeração decimal'] },
      { t: 'Reta numérica', r: ['05-06'] },
      { t: 'Adição e subtração de números naturais', r: ['07-11'] },
      { t: 'Tabelas e gráficos de colunas', r: ['12-14'] },
      { t: 'Multiplicação de números naturais', r: ['15-19'] },
      { t: 'Divisão de números naturais', r: ['20-26'] },
      { t: 'Propriedades da igualdade e expressões numéricas', r: ['27-30'], ex: ['Potenciação e expressões numéricas'] },
      { t: 'Localização em mapas, croquis e representações gráficas', r: ['31-32'] }
    ],
    [T2]: [
      { t: 'Potenciação', r: ['33'] },
      { t: 'Unidades de medida de comprimento', r: ['34-36'] },
      { t: 'Perímetro de figuras planas', r: ['37-38'] },
      { t: 'Ângulos', r: ['39-42'], ex: ['Ponto, reta, plano e ângulos'] },
      { t: 'Polígonos e quadriláteros', r: ['43-46'], ex: ['Polígonos e circunferência'] },
      { t: 'Sólidos geométricos, prismas e pirâmides', r: ['47-49'] },
      { t: 'Critérios de divisibilidade, múltiplos e divisores', r: ['50-52'], ex: ['Múltiplos, divisores e números primos'] },
      { t: 'Números primos e decomposição em fatores', r: ['53-54'], ex: ['MMC e MDC'] },
      { t: 'A ideia de fração', r: ['55-57'], ex: ['Frações'] },
      { t: 'Comparação e equivalência de frações', r: ['58-59'] },
      { t: 'Adição e subtração de frações', r: ['60-62'], ex: ['Operações com frações'] },
      { t: 'Frações na reta numérica', r: ['63-64'] },
      { t: 'Porcentagem e frações', r: ['65-68'], ex: ['Porcentagem'] },
      { t: 'Retomadas do 2º trimestre (naturais, inteiros e gráficos)', r: ['R9-R16'], ex: ['Números inteiros'] }
    ],
    [T3]: [
      { t: 'Números decimais: representação e leitura', r: ['69-71'] },
      { t: 'Frações e números decimais', r: ['72-75'] },
      { t: 'Números decimais na reta e comparação', r: ['76-79'], ex: ['Números decimais'] },
      { t: 'Adição e subtração com números decimais', r: ['80-81'] },
      { t: 'Gráfico de segmentos', r: ['82-83'] },
      { t: 'Multiplicação e divisão com números decimais', r: ['84-87'], ex: ['Operações com números decimais'] },
      { t: 'Porcentagem com números decimais', r: ['88-92'] },
      { t: 'Medidas de superfície e área', r: ['93-98'], ex: ['Perímetro e área'] },
      { t: 'Classificação de triângulos', r: ['99-100'] },
      { t: 'Retomadas do 3º trimestre', r: ['R17-R24'] },
      { t: 'Volume, capacidade e massa', r: [], ex: ['Volume, capacidade e massa'], comp: true }
    ]
  },
  '7° Ano': {
    [T1]: [
      { t: 'Nivelamento: naturais, tabelas e ampliação de figuras', r: ['N1-N10'] },
      { t: 'Interpretação de dados em tabelas e gráficos', r: ['01-04'] },
      { t: 'Operações com naturais, múltiplos e divisores', r: ['05-07'] },
      { t: 'Números inteiros: conceito, reta numérica e módulo', r: ['08-11'] },
      { t: 'Adição e subtração de números inteiros', r: ['12-19'] },
      { t: 'Multiplicação e divisão de números inteiros', r: ['20-25'] },
      { t: 'Potenciação e raiz quadrada de números inteiros', r: ['26-31'], ex: ['Inteiros: propriedades e potenciação'] },
      { t: 'Transformações no plano cartesiano e polígonos', r: ['32-35'] },
      { t: 'Números racionais e a reta numérica', r: ['36-40'], ex: ['Números racionais'] }
    ],
    [T2]: [
      { t: 'Frações e frações equivalentes', r: ['41-44'] },
      { t: 'Adição e subtração de números racionais', r: ['45-47'] },
      { t: 'Multiplicação e divisão de números racionais', r: ['48-54'] },
      { t: 'Expressões, potências e raízes de números racionais', r: ['55-59'] },
      { t: 'Área do retângulo e do quadrado', r: ['60-61'] },
      { t: 'Porcentagem', r: ['62-64'] },
      { t: 'Expressões algébricas e sequências', r: ['65-71'] },
      { t: 'Ângulos', r: ['72-75'], ex: ['Ângulos e polígonos'] },
      { t: 'Triângulos', r: ['76-79'] },
      { t: 'Polígonos', r: ['80-85'] },
      { t: 'Retomadas do 2º trimestre', r: ['R11-R20'] }
    ],
    [T3]: [
      { t: 'Círculo e circunferência', r: ['86-87'] },
      { t: 'Equações do 1º grau', r: ['88-95'], ex: ['Equações e inequações do 1º grau'] },
      { t: 'Média aritmética', r: ['96-98'], ex: ['Estatística e probabilidade'] },
      { t: 'Razão e proporção', r: ['99-103'], ex: ['Razão, proporção e regra de três'] },
      { t: 'Grandezas proporcionais', r: ['104-110'] },
      { t: 'Regra de três simples', r: ['111-112'] },
      { t: 'Perímetro, quadriláteros e áreas', r: ['113-119'] },
      { t: 'Unidades de medida e volume', r: ['120-125'], ex: ['Poliedros e sólidos que giram'] },
      { t: 'Retomadas do 3º trimestre', r: ['R21-R30'] }
    ]
  },
  '8° Ano': {
    [T1]: [
      { t: 'Nivelamento: inteiros, tabelas e racionais', r: ['N1-N8'] },
      { t: 'Números racionais na reta numérica', r: ['01-02'] },
      { t: 'Adição e subtração de números racionais', r: ['03-06'] },
      { t: 'Multiplicação e divisão de números racionais', r: ['07-13'] },
      { t: 'Dízimas periódicas e fração geratriz', r: ['14-15'], ex: ['Números reais e irracionais'] },
      { t: 'Porcentagem', r: ['17-18'] },
      { t: 'Interpretação de dados em tabelas', r: ['19-22'] },
      { t: 'Potenciação com números racionais', r: ['23-27'], ex: ['Potências e raízes'] },
      { t: 'Linguagem algébrica e valor numérico', r: ['29-31'], ex: ['Cálculo algébrico e produtos notáveis'] }
    ],
    [T2]: [
      { t: 'Raiz quadrada e números irracionais', r: [], prov: true, l: ['Raiz quadrada exata e aproximada', 'Números irracionais e reais'] },
      { t: 'Monômios e polinômios', r: [], prov: true, l: ['Monômios: operações', 'Polinômios: adição, subtração e multiplicação', 'Produtos notáveis e fatoração'] },
      { t: 'Equações do 1º grau e sistemas', r: [], prov: true, l: ['Isolar a incógnita e resolver equações do 1º grau', 'Problemas com equações', 'Sistemas de equações do 1º grau'], ex: ['Equações do 1º grau e sistemas'] },
      { t: 'Retomadas do 2º trimestre', r: [], prov: true, l: ['Retomadas (Prova Paraná) — a definir pelo RCO'] }
    ],
    [T3]: [
      { t: 'Ângulos, triângulos e quadriláteros', r: [], prov: true, l: ['Ângulos entre retas paralelas e transversal', 'Triângulos: propriedades e congruência', 'Quadriláteros e polígonos'], ex: ['Ângulos, triângulos e polígonos'] },
      { t: 'Circunferência e círculo', r: [], prov: true, l: ['Elementos da circunferência', 'Comprimento da circunferência e área do círculo'], ex: ['Circunferência e círculo'] },
      { t: 'Áreas e volumes', r: [], prov: true, l: ['Áreas de figuras planas', 'Volume de prismas e cilindros'], ex: ['Áreas e volumes'] },
      { t: 'Juros simples e proporcionalidade', r: [], prov: true, l: ['Juros simples', 'Grandezas proporcionais e regra de três'], ex: ['Juros simples e proporcionalidade'] },
      { t: 'Contagem, probabilidade e estatística', r: [], prov: true, l: ['Princípio multiplicativo e árvore de possibilidades', 'Probabilidade', 'Gráficos, média e amplitude'], ex: ['Contagem, probabilidade e estatística'] },
      { t: 'Retomadas do 3º trimestre', r: [], prov: true, l: ['Retomadas (Prova Paraná) — a definir pelo RCO'] }
    ]
  },
  '9° Ano': {
    [T1]: [
      { t: 'Nivelamento: inteiros e racionais', r: ['N1-N9'] },
      { t: 'Números irracionais e números reais', r: ['01-06'] },
      { t: 'Potências com expoente inteiro', r: ['07-16'] },
      { t: 'Notação científica e unidades de medida', r: ['17-22'] },
      { t: 'Potência com expoente racional e radicais', r: ['23-24'], ex: ['Radicais e potências'] },
      { t: 'Produtos notáveis', r: ['26-33'] },
      { t: 'Fatoração', r: ['34-37'] },
      { t: 'Razão e grandezas proporcionais', r: ['38-39'] }
    ],
    [T2]: [
      { t: 'Fatoração e equações', r: ['41-44'] },
      { t: 'Equação do 2º grau', r: ['46-56'], ex: ['Equações do 2º grau'] },
      { t: 'Ângulos formados por retas', r: ['57-59'] },
      { t: 'Figuras e triângulos semelhantes', r: ['61-64'], ex: ['Semelhança, Pitágoras e trigonometria'] },
      { t: 'Segmentos proporcionais e Teorema de Tales', r: ['66-68'] },
      { t: 'Relações métricas no triângulo retângulo', r: ['69-76'] },
      { t: 'Circunferência e círculo', r: ['77-82'] },
      { t: 'Plano cartesiano', r: ['83-84'] },
      { t: 'Retomadas do 2º trimestre', r: ['R11-R19'] }
    ],
    [T3]: [
      { t: 'Funções: noções e situações-problema', r: ['86-89'] },
      { t: 'Função afim: gráfico e zero', r: ['91-94'], ex: ['Funções afim e quadrática'] },
      { t: 'Porcentagem: acréscimos e decréscimos', r: ['96-97'] },
      { t: 'Juros simples e compostos', r: ['98-102'] },
      { t: 'Princípio fundamental da contagem', r: ['103-104'] },
      { t: 'Probabilidade', r: ['106-109'] },
      { t: 'Estatística: gráficos, medidas e pesquisa', r: ['111-122'], ex: ['Probabilidade e estatística'] },
      { t: 'Propriedades dos polígonos', r: ['123-124'] },
      { t: 'Retomadas do 3º trimestre', r: ['R22-R29'] }
    ]
  }
};
