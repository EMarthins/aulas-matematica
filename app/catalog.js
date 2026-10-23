// ============================================================
// MATÉRIAS — fonte única do catálogo de aulas/guias, usada pelo
// index.html (catálogo público) e pelo painel do professor
// (para escolher qual aula vira atividade).
// Cada matéria tem sua própria aba e seu próprio catálogo.
// Dentro de cada matéria: CATALOG é a lista de anos/trimestres/unidades.
// Cada "arquivo" é o caminho relativo a partir da raiz do site.
// ============================================================

export const MATERIAS = [
  {
    id: 'matematica',
    nome: 'Matemática',
    icon: 'sigma',
    lede: 'Material interativo de Matemática para o 9º ano do Ensino Fundamental e para a 2ª e a 3ª séries do Ensino Médio — slides navegáveis e infográficos de apoio, prontos para projetar em sala.',
    CATALOG: [
      // >>> mat-9ano
      {
        ano: '9° Ano',
        preencher: true,
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Equações do 2º grau',
                accent: 'primary',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Equações do 2º grau: incompletas e Bhaskara', arquivo:'aulas/9-ano/1-tri/equacoes-do-2-grau/aula-1-equacoes-incompletas-e-formula-de-bhaskara.html' },
                  { tipo:'Aula 2', titulo:'Soma e produto das raízes e problemas', arquivo:'aulas/9-ano/1-tri/equacoes-do-2-grau/aula-2-soma-e-produto-das-raizes-e-problemas.html' }
                ]
              },
              {
                titulo: 'Radicais e potências',
                accent: 'decay',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Radicais: simplificação e operações', arquivo:'aulas/9-ano/1-tri/radicais-e-potencias/aula-1-radicais-simplificacao-e-operacoes.html' },
                  { tipo:'Aula 2', titulo:'Racionalização e potências de expoente fracionário', arquivo:'aulas/9-ano/1-tri/radicais-e-potencias/aula-2-racionalizacao-e-potencias-fracionarias.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Semelhança, Pitágoras e trigonometria',
                accent: 'decay',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Semelhança de triângulos e Teorema de Tales', arquivo:'aulas/9-ano/2-tri/semelhanca-pitagoras-e-trigonometria/aula-1-semelhanca-de-triangulos-e-teorema-de-tales.html' },
                  { tipo:'Aula 2', titulo:'Teorema de Pitágoras e razões trigonométricas', arquivo:'aulas/9-ano/2-tri/semelhanca-pitagoras-e-trigonometria/aula-2-teorema-de-pitagoras-e-trigonometria.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Funções afim e quadrática',
                accent: 'growth',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Função afim e seu gráfico', arquivo:'aulas/9-ano/3-tri/funcoes-afim-e-quadratica/aula-1-funcao-afim-e-seu-grafico.html' },
                  { tipo:'Aula 2', titulo:'Função quadrática e parábola', arquivo:'aulas/9-ano/3-tri/funcoes-afim-e-quadratica/aula-2-funcao-quadratica-e-parabola.html' }
                ]
              },
              {
                titulo: 'Probabilidade e estatística',
                accent: 'accent',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Probabilidade: espaço amostral e eventos', arquivo:'aulas/9-ano/3-tri/probabilidade-e-estatistica/aula-1-probabilidade-espaco-amostral-e-eventos.html' },
                  { tipo:'Aula 2', titulo:'Média, moda, mediana e gráficos', arquivo:'aulas/9-ano/3-tri/probabilidade-e-estatistica/aula-2-media-moda-mediana-e-graficos.html' }
                ]
              }
            ]
          }
        ]
      },
      // <<< mat-9ano
      // >>> mat-8ano
      {
        ano: '8° Ano',
        preencher: true,
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Números reais e irracionais',
                accent: 'primary',
                icon: 'sigma',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Conjuntos numéricos e números reais', arquivo:'aulas/8-ano/1-tri/numeros-reais-e-irracionais/aula-1-conjuntos-numericos-e-numeros-reais.html' },
                  { tipo:'Aula 2', titulo:'Números irracionais e representação decimal', arquivo:'aulas/8-ano/1-tri/numeros-reais-e-irracionais/aula-2-numeros-irracionais-e-representacao-decimal.html' }
                ]
              },
              {
                titulo: 'Potências e raízes',
                accent: 'growth',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Propriedades das potências e notação científica', arquivo:'aulas/8-ano/1-tri/potencias-e-raizes/aula-1-propriedades-das-potencias-e-notacao-cientifica.html' },
                  { tipo:'Aula 2', titulo:'Raiz quadrada e raízes exatas', arquivo:'aulas/8-ano/1-tri/potencias-e-raizes/aula-2-raiz-quadrada-e-raizes-exatas.html' }
                ]
              },
              {
                titulo: 'Cálculo algébrico e produtos notáveis',
                accent: 'decay',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Monômios e polinômios', arquivo:'aulas/8-ano/1-tri/calculo-algebrico/aula-1-monomios-e-polinomios.html' },
                  { tipo:'Aula 2', titulo:'Produtos notáveis e fatoração', arquivo:'aulas/8-ano/1-tri/calculo-algebrico/aula-2-produtos-notaveis-e-fatoracao.html' }
                ]
              },
              {
                titulo: 'Equações do 1º grau e sistemas',
                accent: 'growth',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Equações do 1º grau e problemas', arquivo:'aulas/8-ano/1-tri/equacoes-e-sistemas/aula-1-equacoes-do-1-grau-e-problemas.html' },
                  { tipo:'Aula 2', titulo:'Sistemas de equações do 1º grau', arquivo:'aulas/8-ano/1-tri/equacoes-e-sistemas/aula-2-sistemas-de-equacoes-do-1-grau.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Ângulos, triângulos e polígonos',
                accent: 'primary',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ângulos entre retas e triângulos', arquivo:'aulas/8-ano/2-tri/triangulos-e-poligonos/aula-1-angulos-entre-retas-e-triangulos.html' },
                  { tipo:'Aula 2', titulo:'Quadriláteros e polígonos', arquivo:'aulas/8-ano/2-tri/triangulos-e-poligonos/aula-2-quadrilateros-e-poligonos.html' }
                ]
              },
              {
                titulo: 'Circunferência e círculo',
                accent: 'accent',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Circunferência: elementos, comprimento e π', arquivo:'aulas/8-ano/2-tri/circunferencia-e-circulo/aula-1-circunferencia-comprimento-e-pi.html' },
                  { tipo:'Aula 2', titulo:'Área do círculo', arquivo:'aulas/8-ano/2-tri/circunferencia-e-circulo/aula-2-area-do-circulo.html' }
                ]
              },
              {
                titulo: 'Áreas e volumes',
                accent: 'warm',
                icon: 'cube',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Área de figuras planas', arquivo:'aulas/8-ano/2-tri/areas-e-volumes/aula-1-area-de-figuras-planas.html' },
                  { tipo:'Aula 2', titulo:'Volume de prismas e cilindros', arquivo:'aulas/8-ano/2-tri/areas-e-volumes/aula-2-volume-de-prismas-e-cilindros.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Juros simples e proporcionalidade',
                accent: 'warm',
                icon: 'percent',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Juros simples', arquivo:'aulas/8-ano/3-tri/juros-simples-e-proporcionalidade/aula-1-juros-simples.html' },
                  { tipo:'Aula 2', titulo:'Grandezas proporcionais e regra de três', arquivo:'aulas/8-ano/3-tri/juros-simples-e-proporcionalidade/aula-2-grandezas-proporcionais-e-regra-de-tres.html' }
                ]
              },
              {
                titulo: 'Contagem, probabilidade e estatística',
                accent: 'accent',
                icon: 'combo',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Árvore de possibilidades e probabilidade', arquivo:'aulas/8-ano/3-tri/contagem-e-estatistica/aula-1-arvore-de-possibilidades-e-probabilidade.html' },
                  { tipo:'Aula 2', titulo:'Gráficos, média e amplitude', arquivo:'aulas/8-ano/3-tri/contagem-e-estatistica/aula-2-graficos-media-e-amplitude.html' }
                ]
              }
            ]
          }
        ]
      },
      // <<< mat-8ano
      // >>> mat-7ano
      {
        ano: '7° Ano',
        preencher: true,
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Inteiros: propriedades e potenciação',
                accent: 'primary',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Propriedades das operações com inteiros', arquivo:'aulas/7-ano/1-tri/inteiros-propriedades-e-potenciacao/aula-1-propriedades-das-operacoes-com-inteiros.html' },
                  { tipo:'Aula 2', titulo:'Potenciação com números inteiros', arquivo:'aulas/7-ano/1-tri/inteiros-propriedades-e-potenciacao/aula-2-potenciacao-com-numeros-inteiros.html' }
                ]
              },
              {
                titulo: 'Números racionais',
                accent: 'growth',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Números racionais: representação e comparação', arquivo:'aulas/7-ano/1-tri/numeros-racionais/aula-1-numeros-racionais-representacao-e-comparacao.html' },
                  { tipo:'Aula 2', titulo:'Operações com racionais, potências e raízes', arquivo:'aulas/7-ano/1-tri/numeros-racionais/aula-2-operacoes-com-racionais-potencias-e-raizes.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Equações e inequações do 1º grau',
                accent: 'decay',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Equações do 1º grau', arquivo:'aulas/7-ano/2-tri/equacoes-e-inequacoes/aula-1-equacoes-do-1-grau.html' },
                  { tipo:'Aula 2', titulo:'Inequações do 1º grau', arquivo:'aulas/7-ano/2-tri/equacoes-e-inequacoes/aula-2-inequacoes-do-1-grau.html' }
                ]
              },
              {
                titulo: 'Razão, proporção e regra de três',
                accent: 'success',
                icon: 'percent',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Razão, proporção e grandezas proporcionais', arquivo:'aulas/7-ano/2-tri/proporcao-e-regra-de-tres/aula-1-razao-proporcao-e-grandezas-proporcionais.html' },
                  { tipo:'Aula 2', titulo:'Regra de três simples', arquivo:'aulas/7-ano/2-tri/proporcao-e-regra-de-tres/aula-2-regra-de-tres-simples.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Ângulos e polígonos',
                accent: 'primary',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ângulos opostos pelo vértice e retas paralelas', arquivo:'aulas/7-ano/3-tri/angulos-e-poligonos/aula-1-angulos-opostos-pelo-vertice-e-retas-paralelas.html' },
                  { tipo:'Aula 2', titulo:'Polígonos: diagonais e soma dos ângulos', arquivo:'aulas/7-ano/3-tri/angulos-e-poligonos/aula-2-poligonos-diagonais-e-soma-dos-angulos.html' }
                ]
              },
              {
                titulo: 'Poliedros e sólidos que giram',
                accent: 'decay',
                icon: 'cube',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Poliedros: faces, arestas e vértices', arquivo:'aulas/7-ano/3-tri/poliedros-e-solidos-que-giram/aula-1-poliedros-faces-arestas-e-vertices.html' },
                  { tipo:'Aula 2', titulo:'Sólidos que giram: cilindro, cone e esfera', arquivo:'aulas/7-ano/3-tri/poliedros-e-solidos-que-giram/aula-2-solidos-que-giram-cilindro-cone-e-esfera.html' }
                ]
              },
              {
                titulo: 'Estatística e probabilidade',
                accent: 'accent',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Pesquisa estatística, tabelas e gráficos', arquivo:'aulas/7-ano/3-tri/estatistica-e-probabilidade/aula-1-pesquisa-estatistica-tabelas-e-graficos.html' },
                  { tipo:'Aula 2', titulo:'Probabilidade: primeiras ideias', arquivo:'aulas/7-ano/3-tri/estatistica-e-probabilidade/aula-2-probabilidade-introducao-e-eventos.html' }
                ]
              }
            ]
          }
        ]
      },
      // <<< mat-7ano
      // >>> mat-6ano
      {
        ano: '6° Ano',
        preencher: true,
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              // >>> mat-6ano-novas
              {
                titulo: 'Reta numérica',
                accent: 'primary',
                icon: 'reta-num',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Reta numérica I', arquivo:'aulas/6-ano/1-tri/reta-numerica/aula-1-reta-numerica-i.html' },
                  { tipo:'Aula 2', titulo:'Reta numérica II', arquivo:'aulas/6-ano/1-tri/reta-numerica/aula-2-reta-numerica-ii.html' }
                ]
              },
              {
                titulo: 'Adição e subtração de números naturais',
                accent: 'growth',
                icon: 'adicao-subtracao',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Processos de adição', arquivo:'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/aula-1-processos-de-adicao.html' },
                  { tipo:'Aula 2', titulo:'Adição: propriedades', arquivo:'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/aula-2-propriedades-da-adicao.html' },
                  { tipo:'Aula 3', titulo:'Subtração: ideias associadas', arquivo:'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/aula-3-subtracao-ideias-associadas.html' },
                  { tipo:'Aula 4', titulo:'Subtração: relação fundamental', arquivo:'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/aula-4-subtracao-relacao-fundamental.html' },
                  { tipo:'Aula 5', titulo:'Adição e subtração: situações-problema', arquivo:'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/aula-5-adicao-e-subtracao-situacoes-problema.html' }
                ]
              },
              // <<< mat-6ano-novas
              {
                titulo: 'Sistema de numeração decimal',
                accent: 'primary',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Características do sistema de numeração decimal I', arquivo:'aulas/6-ano/1-tri/sistema-de-numeracao-decimal/aula-1-caracteristicas-do-sistema-de-numeracao-decimal-i.html' },
                  { tipo:'Aula 2', titulo:'Características do sistema de numeração decimal II', arquivo:'aulas/6-ano/1-tri/sistema-de-numeracao-decimal/aula-2-caracteristicas-do-sistema-de-numeracao-decimal-ii.html' },
                  { tipo:'Aula 3', titulo:'Sistema de numeração decimal: ordens e classes I', arquivo:'aulas/6-ano/1-tri/sistema-de-numeracao-decimal/aula-3-sistema-de-numeracao-decimal-ordens-e-classes-i.html' },
                  { tipo:'Aula 4', titulo:'Sistema de numeração decimal: ordens e classes II', arquivo:'aulas/6-ano/1-tri/sistema-de-numeracao-decimal/aula-4-sistema-de-numeracao-decimal-ordens-e-classes-ii.html' }
                ]
              },
              {
                titulo: 'Potenciação e expressões numéricas',
                accent: 'primary',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Potenciação de números naturais', arquivo:'aulas/6-ano/1-tri/potenciacao-e-expressoes-numericas/aula-1-potenciacao-de-numeros-naturais.html' },
                  { tipo:'Aula 2', titulo:'Expressões numéricas e ordem das operações', arquivo:'aulas/6-ano/1-tri/potenciacao-e-expressoes-numericas/aula-2-expressoes-numericas-e-ordem-das-operacoes.html' }
                ]
              },
              {
                titulo: 'Múltiplos, divisores e números primos',
                accent: 'growth',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Múltiplos e divisores', arquivo:'aulas/6-ano/1-tri/multiplos-divisores-e-primos/aula-1-multiplos-e-divisores.html' },
                  { tipo:'Aula 2', titulo:'Critérios de divisibilidade', arquivo:'aulas/6-ano/1-tri/multiplos-divisores-e-primos/aula-2-criterios-de-divisibilidade.html' },
                  { tipo:'Aula 3', titulo:'Números primos e decomposição em fatores primos', arquivo:'aulas/6-ano/1-tri/multiplos-divisores-e-primos/aula-3-numeros-primos-e-decomposicao.html' }
                ]
              },
              {
                titulo: 'MMC e MDC',
                accent: 'decay',
                icon: 'combo',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Mínimo múltiplo comum (MMC)', arquivo:'aulas/6-ano/1-tri/mmc-e-mdc/aula-1-minimo-multiplo-comum.html' },
                  { tipo:'Aula 2', titulo:'Máximo divisor comum (MDC)', arquivo:'aulas/6-ano/1-tri/mmc-e-mdc/aula-2-maximo-divisor-comum.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Frações',
                accent: 'decay',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Fração: parte de um todo e frações equivalentes', arquivo:'aulas/6-ano/2-tri/fracoes/aula-1-fracao-parte-de-um-todo-e-equivalencia.html' },
                  { tipo:'Aula 2', titulo:'Comparação e simplificação de frações', arquivo:'aulas/6-ano/2-tri/fracoes/aula-2-comparacao-e-simplificacao-de-fracoes.html' }
                ]
              },
              {
                titulo: 'Operações com frações',
                accent: 'growth',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Adição e subtração de frações', arquivo:'aulas/6-ano/2-tri/operacoes-com-fracoes/aula-1-adicao-e-subtracao-de-fracoes.html' },
                  { tipo:'Aula 2', titulo:'Multiplicação e divisão de frações', arquivo:'aulas/6-ano/2-tri/operacoes-com-fracoes/aula-2-multiplicacao-e-divisao-de-fracoes.html' }
                ]
              },
              {
                titulo: 'Números decimais',
                accent: 'primary',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Leitura e comparação de números decimais', arquivo:'aulas/6-ano/2-tri/numeros-decimais/aula-1-leitura-e-comparacao-de-numeros-decimais.html' },
                  { tipo:'Aula 2', titulo:'Frações e números decimais', arquivo:'aulas/6-ano/2-tri/numeros-decimais/aula-2-fracao-decimal-e-transformacoes.html' }
                ]
              },
              {
                titulo: 'Operações com números decimais',
                accent: 'success',
                icon: 'coin',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Adição e subtração de números decimais', arquivo:'aulas/6-ano/2-tri/operacoes-com-decimais/aula-1-adicao-e-subtracao-de-decimais.html' },
                  { tipo:'Aula 2', titulo:'Multiplicação e divisão de números decimais', arquivo:'aulas/6-ano/2-tri/operacoes-com-decimais/aula-2-multiplicacao-e-divisao-de-decimais.html' }
                ]
              },
              {
                titulo: 'Porcentagem',
                accent: 'decay',
                icon: 'percent',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Porcentagem: o que é e como calcular', arquivo:'aulas/6-ano/2-tri/porcentagem/aula-1-porcentagem-conceito-e-calculo.html' },
                  { tipo:'Aula 2', titulo:'Aumentos e descontos percentuais', arquivo:'aulas/6-ano/2-tri/porcentagem/aula-2-aumentos-e-descontos-percentuais.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Números inteiros',
                accent: 'primary',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Números inteiros e reta numérica', arquivo:'aulas/6-ano/3-tri/numeros-inteiros/aula-1-numeros-inteiros-e-reta-numerica.html' },
                  { tipo:'Aula 2', titulo:'Operações com números inteiros', arquivo:'aulas/6-ano/3-tri/numeros-inteiros/aula-2-operacoes-com-numeros-inteiros.html' }
                ]
              },
              {
                titulo: 'Ponto, reta, plano e ângulos',
                accent: 'growth',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ponto, reta e plano', arquivo:'aulas/6-ano/3-tri/geometria-e-angulos/aula-1-ponto-reta-e-plano.html' },
                  { tipo:'Aula 2', titulo:'Ângulos e sua medida', arquivo:'aulas/6-ano/3-tri/geometria-e-angulos/aula-2-angulos-e-sua-medida.html' }
                ]
              },
              {
                titulo: 'Polígonos e circunferência',
                accent: 'decay',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Polígonos e triângulos', arquivo:'aulas/6-ano/3-tri/poligonos-e-circunferencia/aula-1-poligonos-e-triangulos.html' },
                  { tipo:'Aula 2', titulo:'Circunferência e círculo', arquivo:'aulas/6-ano/3-tri/poligonos-e-circunferencia/aula-2-circunferencia-e-circulo.html' }
                ]
              },
              {
                titulo: 'Perímetro e área',
                accent: 'primary',
                icon: 'cube',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Perímetro de figuras planas', arquivo:'aulas/6-ano/3-tri/perimetro-e-area/aula-1-perimetro-de-figuras-planas.html' },
                  { tipo:'Aula 2', titulo:'Área de figuras planas', arquivo:'aulas/6-ano/3-tri/perimetro-e-area/aula-2-area-de-figuras-planas.html' }
                ]
              },
              {
                titulo: 'Volume, capacidade e massa',
                accent: 'success',
                icon: 'cube',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Volume e capacidade', arquivo:'aulas/6-ano/3-tri/volume-capacidade-e-massa/aula-1-volume-e-capacidade.html' },
                  { tipo:'Aula 2', titulo:'Medidas de massa', arquivo:'aulas/6-ano/3-tri/volume-capacidade-e-massa/aula-2-medidas-de-massa.html' }
                ]
              }
            ]
          }
        ]
      },
      // <<< mat-6ano
      // >>> mat-1ano
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Notação Científica',
                accent: 'primary',
                icon: 'numbers',
                itens: [
                  { tipo:'Aula 1', titulo:'Escrever e converter números', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/aula-1-escrever-numeros.html' },
                  { tipo:'Aulas 2–3', titulo:'Operações e comparações', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/aula-2-operacoes-e-comparacoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Notação Científica', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Notação científica no estilo ENEM', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Está em notação científica?', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Notação científica: trilha de desafios', arquivo:'aulas/1-ano/1-tri/notacao-cientifica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Sistema Internacional e Unidades',
                accent: 'growth',
                icon: 'cube',
                itens: [
                  { tipo:'Aulas 4–5', titulo:'SI e grandezas derivadas', arquivo:'aulas/1-ano/1-tri/sistema-internacional/aula-1-si-e-grandezas-derivadas.html' },
                  { tipo:'Aulas 6–7', titulo:'Múltiplos e submúltiplos', arquivo:'aulas/1-ano/1-tri/sistema-internacional/aula-2-multiplos-e-submultiplos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Sistema Internacional e Unidades', arquivo:'aulas/1-ano/1-tri/sistema-internacional/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Unidades de medida no estilo ENEM', arquivo:'aulas/1-ano/1-tri/sistema-internacional/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual é o fator de conversão?', arquivo:'aulas/1-ano/1-tri/sistema-internacional/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Unidades de medida: trilha de desafios', arquivo:'aulas/1-ano/1-tri/sistema-internacional/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Algarismos Significativos',
                accent: 'decay',
                icon: 'numbers',
                itens: [
                  { tipo:'Aulas 8–9', titulo:'Algarismos significativos e duvidosos', arquivo:'aulas/1-ano/1-tri/algarismos-significativos/aula-algarismos-significativos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Algarismos Significativos', arquivo:'aulas/1-ano/1-tri/algarismos-significativos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Algarismos significativos no estilo ENEM', arquivo:'aulas/1-ano/1-tri/algarismos-significativos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive da precisão', arquivo:'aulas/1-ano/1-tri/algarismos-significativos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Algarismos significativos: trilha de desafios', arquivo:'aulas/1-ano/1-tri/algarismos-significativos/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Razões entre Grandezas',
                accent: 'success',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 10–11', titulo:'Energia, densidade e IMC', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/aula-1-energia-densidade-imc.html' },
                  { tipo:'Aulas 12–13', titulo:'Densidade demográfica e velocidade média', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/aula-2-densidade-demografica-e-velocidade.html' },
                  { tipo:'Guia', titulo:'Guia visual — Razões entre Grandezas', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Razões entre grandezas no estilo ENEM', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória das razões e unidades', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Razões entre grandezas: trilha de desafios', arquivo:'aulas/1-ano/1-tri/razoes-entre-grandezas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Armazenamento de Dados',
                accent: 'growth',
                icon: 'grid',
                itens: [
                  { tipo:'Aula 14', titulo:'Bit, byte e seus múltiplos', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/aula-1-bit-byte-e-multiplos.html' },
                  { tipo:'Aula 15', titulo:'Nuvem e taxa de transferência', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/aula-2-nuvem-e-taxa-de-transferencia.html' },
                  { tipo:'Guia', titulo:'Guia visual — Armazenamento de Dados', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Armazenamento de dados no estilo ENEM', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a solução', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Armazenamento de dados: trilha de desafios', arquivo:'aulas/1-ano/1-tri/armazenamento-de-dados/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Funções: Definição, Domínio e Imagem',
                accent: 'primary',
                icon: 'curve-up',
                itens: [
                  { tipo:'Aula 16', titulo:'Definição de função', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/aula-1-definicao-de-funcao.html' },
                  { tipo:'Aula 17', titulo:'Domínio e imagem', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/aula-2-dominio-e-imagem.html' },
                  { tipo:'Guia', titulo:'Guia visual — Funções: Definição, Domínio e Imagem', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Funções no estilo ENEM', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: funções', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Funções: trilha de desafios', arquivo:'aulas/1-ano/1-tri/funcoes-definicao-dominio-imagem/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Gráfico de uma Função',
                accent: 'growth',
                icon: 'curve-log',
                itens: [
                  { tipo:'Aula 18', titulo:'Do texto ao gráfico', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/aula-1-do-texto-ao-grafico.html' },
                  { tipo:'Aulas 19–20', titulo:'Domínio, imagem e crescimento no gráfico', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/aula-2-dominio-imagem-e-crescimento-no-grafico.html' },
                  { tipo:'Guia', titulo:'Guia visual — Gráfico de uma Função', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Gráficos de funções no estilo ENEM', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive de gráficos', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Gráficos de funções: trilha de desafios', arquivo:'aulas/1-ano/1-tri/grafico-de-uma-funcao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Função Afim: Lei de Formação',
                accent: 'primary',
                icon: 'algebra',
                itens: [
                  { tipo:'Aulas 21–22', titulo:'Lei por dois pontos', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/aula-1-lei-por-dois-pontos.html' },
                  { tipo:'Aula 23', titulo:'Função linear', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/aula-2-funcao-linear.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Afim: Lei de Formação', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Função afim no estilo ENEM', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique as funções', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Função afim: trilha de desafios', arquivo:'aulas/1-ano/1-tri/funcao-afim-lei-de-formacao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Gráfico e Zero da Função Afim',
                accent: 'growth',
                icon: 'curve-up',
                itens: [
                  { tipo:'Aula 24', titulo:'Gráfico da função afim', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/aula-1-grafico-da-funcao-afim.html' },
                  { tipo:'Aulas 25–26', titulo:'Zero da função afim', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/aula-2-zero-da-funcao-afim.html' },
                  { tipo:'Guia', titulo:'Guia visual — Gráfico e Zero da Função Afim', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Gráfico e zero da função afim no estilo ENEM', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória: função e zero', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Gráfico e zero da função afim: trilha de desafios', arquivo:'aulas/1-ano/1-tri/grafico-e-zero-da-funcao-afim/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Taxa de Variação e Coeficientes',
                accent: 'decay',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 27–28', titulo:'Taxa de variação', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/aula-1-taxa-de-variacao.html' },
                  { tipo:'Aulas 29–31', titulo:'Sinais dos coeficientes', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/aula-2-sinais-dos-coeficientes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Taxa de Variação e Coeficientes', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Taxa de variação e coeficientes no estilo ENEM', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: coeficientes e retas', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Taxa de variação e coeficientes: trilha de desafios', arquivo:'aulas/1-ano/1-tri/taxa-de-variacao-e-coeficientes/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Crescimento e Sinal da Função Afim',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aulas 32 e 34', titulo:'Crescente e decrescente', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/aula-1-crescente-e-decrescente.html' },
                  { tipo:'Aula 35', titulo:'Estudo do sinal', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/aula-2-estudo-do-sinal.html' },
                  { tipo:'Guia', titulo:'Guia visual — Crescimento e Sinal da Função Afim', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Crescimento e sinal da função afim no estilo ENEM', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a solução', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Crescimento e sinal da função afim: trilha de desafios', arquivo:'aulas/1-ano/1-tri/crescimento-e-sinal-da-funcao-afim/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Números Reais na Reta Numérica',
                accent: 'primary',
                icon: 'numbers',
                itens: [
                  { tipo:'Aula 33', titulo:'Números reais na reta numérica', arquivo:'aulas/1-ano/1-tri/numeros-reais-na-reta/aula-numeros-reais-na-reta.html' },
                  { tipo:'Guia', titulo:'Guia visual — Números Reais na Reta Numérica', arquivo:'aulas/1-ano/1-tri/numeros-reais-na-reta/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Números reais na reta no estilo ENEM', arquivo:'aulas/1-ano/1-tri/numeros-reais-na-reta/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique os números', arquivo:'aulas/1-ano/1-tri/numeros-reais-na-reta/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Números reais na reta: trilha de desafios', arquivo:'aulas/1-ano/1-tri/numeros-reais-na-reta/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Problemas com Função Afim',
                accent: 'primary',
                icon: 'briefcase',
                itens: [
                  { tipo:'Aula 36', titulo:'Modelar e comparar', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/aula-1-modelando-e-comparando.html' },
                  { tipo:'Aula 37', titulo:'Problemas com gráficos', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/aula-2-problemas-com-graficos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Problemas com Função Afim', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Problemas com função afim no estilo ENEM', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive de problemas', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Problemas com função afim: trilha de desafios', arquivo:'aulas/1-ano/1-tri/problemas-com-funcao-afim/atividade-pratica.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Função Quadrática: Definição',
                accent: 'primary',
                icon: 'parabola',
                itens: [
                  { tipo:'Aula 38', titulo:'Definição e coeficientes', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/aula-1-definicao-e-coeficientes.html' },
                  { tipo:'Aula 39', titulo:'Problemas do 2º grau', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/aula-2-problemas-do-2-grau.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Quadrática: Definição', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Função quadrática no estilo ENEM', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique as funções', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Função quadrática: trilha de desafios', arquivo:'aulas/1-ano/2-tri/funcao-quadratica-definicao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Gráfico da Função Quadrática',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aula 40', titulo:'A parábola', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/aula-1-a-parabola.html' },
                  { tipo:'Aula 41', titulo:'A parábola em situações', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/aula-2-parabola-em-situacoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Gráfico da Função Quadrática', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'A parábola no estilo ENEM', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória: lei e parábola', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'A parábola: trilha de desafios', arquivo:'aulas/1-ano/2-tri/grafico-da-funcao-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Zeros da Função Quadrática',
                accent: 'decay',
                icon: 'algebra',
                itens: [
                  { tipo:'Aulas 42–43', titulo:'Zeros e discriminante', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/aula-1-zeros-e-discriminante.html' },
                  { tipo:'Aulas 44–45', titulo:'Soma e produto', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/aula-2-soma-e-produto.html' },
                  { tipo:'Guia', titulo:'Guia visual — Zeros da Função Quadrática', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Zeros da função quadrática no estilo ENEM', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique pelo discriminante', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Zeros da função quadrática: trilha de desafios', arquivo:'aulas/1-ano/2-tri/zeros-da-funcao-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Vértice, Máximo, Mínimo e Imagem',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 46–47', titulo:'Vértice da parábola', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/aula-1-vertice-da-parabola.html' },
                  { tipo:'Aulas 48–50', titulo:'Máximo, mínimo e imagem', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/aula-2-maximo-minimo-e-imagem.html' },
                  { tipo:'Guia', titulo:'Guia visual — Vértice, Máximo, Mínimo e Imagem', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Vértice, máximo e imagem no estilo ENEM', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: vértice e imagem', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Vértice, máximo e imagem: trilha de desafios', arquivo:'aulas/1-ano/2-tri/vertice-maximo-minimo-e-imagem/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Crescimento e Sinal da Quadrática',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aulas 51–52', titulo:'Crescimento e decrescimento', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/aula-1-crescimento-e-decrescimento.html' },
                  { tipo:'Aulas 53–54', titulo:'Sinal e gráficos de situações', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/aula-2-sinal-e-graficos-de-situacoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Crescimento e Sinal da Quadrática', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Crescimento e sinal da quadrática no estilo ENEM', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive da parábola', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Crescimento e sinal da quadrática: trilha de desafios', arquivo:'aulas/1-ano/2-tri/crescimento-e-sinal-da-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Problemas com Funções do 2º Grau',
                accent: 'primary',
                icon: 'briefcase',
                itens: [
                  { tipo:'Aula 55', titulo:'O kit de ferramentas', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/aula-1-kit-de-ferramentas.html' },
                  { tipo:'Aula 56', titulo:'Problemas variados', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/aula-2-problemas-variados.html' },
                  { tipo:'Guia', titulo:'Guia visual — Problemas com Funções do 2º Grau', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Problemas do 2º grau no estilo ENEM', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a solução', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Problemas do 2º grau: trilha de desafios', arquivo:'aulas/1-ano/2-tri/problemas-com-funcoes-do-2-grau/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Polinômios e Fatoração',
                accent: 'primary',
                icon: 'algebra',
                itens: [
                  { tipo:'Aula 57', titulo:'Polinômios e raízes', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/aula-1-polinomios-e-raizes.html' },
                  { tipo:'Aula 58', titulo:'Decomposição em fatores', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/aula-2-decomposicao-em-fatores.html' },
                  { tipo:'Guia', titulo:'Guia visual — Polinômios e Fatoração', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Polinômios e fatoração no estilo ENEM', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória: polinômio e forma fatorada', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Polinômios e fatoração: trilha de desafios', arquivo:'aulas/1-ano/2-tri/polinomios-e-fatoracao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Semelhança de Figuras e Triângulos',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aulas 59–60', titulo:'Figuras semelhantes', arquivo:'aulas/1-ano/2-tri/semelhanca/aula-1-figuras-semelhantes.html' },
                  { tipo:'Aulas 61–62', titulo:'Semelhança de triângulos', arquivo:'aulas/1-ano/2-tri/semelhanca/aula-2-semelhanca-de-triangulos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Semelhança de Figuras e Triângulos', arquivo:'aulas/1-ano/2-tri/semelhanca/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Semelhança no estilo ENEM', arquivo:'aulas/1-ano/2-tri/semelhanca/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'São semelhantes?', arquivo:'aulas/1-ano/2-tri/semelhanca/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Semelhança: trilha de desafios', arquivo:'aulas/1-ano/2-tri/semelhanca/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Congruência de Triângulos',
                accent: 'growth',
                icon: 'triangle',
                itens: [
                  { tipo:'Aulas 63–64', titulo:'Casos LLL e LAL', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/aula-1-casos-lll-e-lal.html' },
                  { tipo:'Aulas 65–66', titulo:'Casos ALA e LAAo', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/aula-2-casos-ala-e-laao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Congruência de Triângulos', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Congruência de triângulos no estilo ENEM', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: congruência', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Congruência de triângulos: trilha de desafios', arquivo:'aulas/1-ano/2-tri/congruencia-de-triangulos/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Teorema Fundamental da Semelhança',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 67', titulo:'Teorema Fundamental da Semelhança', arquivo:'aulas/1-ano/2-tri/teorema-fundamental-da-semelhanca/aula-teorema-fundamental-da-semelhanca.html' },
                  { tipo:'Guia', titulo:'Guia visual — Teorema Fundamental da Semelhança', arquivo:'aulas/1-ano/2-tri/teorema-fundamental-da-semelhanca/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Teorema Fundamental da Semelhança no estilo ENEM', arquivo:'aulas/1-ano/2-tri/teorema-fundamental-da-semelhanca/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'O que a razão multiplica?', arquivo:'aulas/1-ano/2-tri/teorema-fundamental-da-semelhanca/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Teorema Fundamental: trilha de desafios', arquivo:'aulas/1-ano/2-tri/teorema-fundamental-da-semelhanca/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Pitágoras e Relações Métricas',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 68', titulo:'Teorema de Pitágoras', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/aula-1-teorema-de-pitagoras.html' },
                  { tipo:'Aulas 69–70', titulo:'Relações métricas', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/aula-2-relacoes-metricas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Pitágoras e Relações Métricas', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Pitágoras e relações métricas no estilo ENEM', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a solução', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Pitágoras e relações métricas: trilha de desafios', arquivo:'aulas/1-ano/2-tri/pitagoras-e-relacoes-metricas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Razões Trigonométricas',
                accent: 'primary',
                icon: 'wave',
                itens: [
                  { tipo:'Aulas 71–72', titulo:'O seno', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/aula-1-o-seno.html' },
                  { tipo:'Aulas 74–76', titulo:'Cosseno, tangente e problemas', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/aula-2-cosseno-e-tangente.html' },
                  { tipo:'Guia', titulo:'Guia visual — Razões Trigonométricas', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Razões trigonométricas no estilo ENEM', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual razão usar?', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Razões trigonométricas: trilha de desafios', arquivo:'aulas/1-ano/2-tri/razoes-trigonometricas/atividade-pratica.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Estatística: Conceitos e Variáveis',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 77–78', titulo:'Estatística e pesquisa estatística', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/aula-1-conceito-e-pesquisa.html' },
                  { tipo:'Aulas 79–80', titulo:'População, amostra e variáveis', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/aula-2-populacao-amostra-e-variaveis.html' },
                  { tipo:'Guia', titulo:'Guia visual — Estatística: Conceitos e Variáveis', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Estatística: conceitos e variáveis no estilo ENEM', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique as variáveis', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Estatística: conceitos e variáveis: trilha de desafios', arquivo:'aulas/1-ano/3-tri/estatistica-conceitos-e-variaveis/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Distribuição de Frequência',
                accent: 'growth',
                icon: 'bars',
                itens: [
                  { tipo:'Aula 81', titulo:'Tabela de frequências', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/aula-1-tabela-de-frequencias.html' },
                  { tipo:'Aula 82', titulo:'Dados agrupados em classes', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/aula-2-dados-em-classes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Distribuição de Frequência', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Distribuição de frequência no estilo ENEM', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a construção', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Distribuição de frequência: trilha de desafios', arquivo:'aulas/1-ano/3-tri/distribuicao-de-frequencia/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Gráficos: Setores, Linhas e Pictogramas',
                accent: 'primary',
                icon: 'pie',
                itens: [
                  { tipo:'Aula 84', titulo:'Gráfico de setores', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/aula-1-grafico-de-setores.html' },
                  { tipo:'Aulas 85–86', titulo:'Gráficos de linhas e pictogramas', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/aula-2-linhas-e-pictogramas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Gráficos: Setores, Linhas e Pictogramas', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Gráficos de setores, linhas e pictogramas no estilo ENEM', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: gráficos', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Gráficos: setores, linhas e pictogramas: trilha de desafios', arquivo:'aulas/1-ano/3-tri/graficos-setores-linhas-pictogramas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Histograma de Frequência',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aula 87', titulo:'O histograma', arquivo:'aulas/1-ano/3-tri/histograma/aula-1-o-histograma.html' },
                  { tipo:'Aula 88', titulo:'Lendo histogramas', arquivo:'aulas/1-ano/3-tri/histograma/aula-2-lendo-histogramas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Histograma de Frequência', arquivo:'aulas/1-ano/3-tri/histograma/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Histograma no estilo ENEM', arquivo:'aulas/1-ano/3-tri/histograma/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Histograma ou gráfico de barras?', arquivo:'aulas/1-ano/3-tri/histograma/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Histograma: trilha de desafios', arquivo:'aulas/1-ano/3-tri/histograma/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Média, Moda e Mediana',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 89–90', titulo:'Média, moda e mediana', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/aula-1-media-moda-e-mediana.html' },
                  { tipo:'Aula 91', titulo:'Medidas em tabelas de frequência', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/aula-2-medidas-em-tabelas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Média, Moda e Mediana', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Média, moda e mediana no estilo ENEM', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive das medidas', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Média, moda e mediana: trilha de desafios', arquivo:'aulas/1-ano/3-tri/media-moda-e-mediana/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Tendência Central em Classes',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aula 92', titulo:'Medidas em classes', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/aula-1-medidas-em-classes.html' },
                  { tipo:'Aula 93', titulo:'Valores discrepantes e escolha da medida', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/aula-2-valores-discrepantes-e-escolha.html' },
                  { tipo:'Guia', titulo:'Guia visual — Tendência Central em Classes', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Tendência central em classes no estilo ENEM', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual medida usar?', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Tendência central em classes: trilha de desafios', arquivo:'aulas/1-ano/3-tri/tendencia-central-em-classes/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Medidas de Dispersão',
                accent: 'growth',
                icon: 'sigma',
                itens: [
                  { tipo:'Aula 94', titulo:'Amplitude e desvio médio', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/aula-1-amplitude-e-desvio-medio.html' },
                  { tipo:'Aula 95', titulo:'Variância e desvio padrão', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/aula-2-variancia-e-desvio-padrao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Medidas de Dispersão', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Medidas de dispersão no estilo ENEM', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: dispersão', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Medidas de dispersão: trilha de desafios', arquivo:'aulas/1-ano/3-tri/medidas-de-dispersao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Quartis e Box-plot',
                accent: 'primary',
                icon: 'candles',
                itens: [
                  { tipo:'Aula 96', titulo:'Quartis', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/aula-1-quartis.html' },
                  { tipo:'Aula 97', titulo:'Box-plot', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/aula-2-box-plot.html' },
                  { tipo:'Guia', titulo:'Guia visual — Quartis e Box-plot', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Quartis e box-plot no estilo ENEM', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a construção', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Quartis e box-plot: trilha de desafios', arquivo:'aulas/1-ano/3-tri/quartis-e-box-plot/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Ramos e Folhas e Escolha de Gráficos',
                accent: 'primary',
                icon: 'candles',
                itens: [
                  { tipo:'Aula 99', titulo:'Diagrama de ramos e folhas', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/aula-1-ramos-e-folhas.html' },
                  { tipo:'Aulas 98 e 100', titulo:'Conversão e escolha de gráficos', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/aula-2-conversao-e-escolha-de-graficos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Ramos e Folhas e Escolha de Gráficos', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Ramos e folhas e escolha de gráficos no estilo ENEM', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual gráfico usar?', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Ramos e folhas e escolha de gráficos: trilha de desafios', arquivo:'aulas/1-ano/3-tri/ramos-e-folhas-e-escolha-de-graficos/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      // <<< mat-1ano
      {
        ano: '3° Ano',
        trimestres: [
          // >>> mat-3ano-1tri
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Equação Exponencial',
                accent: 'primary',
                icon: 'algebra',
                itens: [
                  { tipo:'Aula 1', titulo:'Equação exponencial: mesma base', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/aula-1-mesma-base.html' },
                  { tipo:'Aulas 2–3', titulo:'Equação exponencial: substituição e aplicações', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/aula-2-substituicao-e-aplicacoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Equação Exponencial', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Equação exponencial no estilo ENEM', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual é o método?', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Equação exponencial: trilha de desafios', arquivo:'aulas/3-ano/1-tri/equacao-exponencial/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Função Exponencial',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 4–5', titulo:'Função exponencial: lei de formação', arquivo:'aulas/3-ano/1-tri/funcao-exponencial/aula-1-lei-de-formacao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Exponencial', arquivo:'aulas/3-ano/1-tri/funcao-exponencial/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Função exponencial no estilo ENEM', arquivo:'aulas/3-ano/1-tri/funcao-exponencial/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'É função exponencial?', arquivo:'aulas/3-ano/1-tri/funcao-exponencial/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Função exponencial: trilha de desafios', arquivo:'aulas/3-ano/1-tri/funcao-exponencial/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Gráfico da Função Exponencial',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 6–7', titulo:'Exponencial crescente: gráfico', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/aula-1-exponencial-crescente.html' },
                  { tipo:'Aulas 8–9', titulo:'Exponencial decrescente: gráfico', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/aula-2-exponencial-decrescente.html' },
                  { tipo:'Guia', titulo:'Guia visual — Gráfico da Função Exponencial', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Gráfico da exponencial no estilo ENEM', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: gráficos exponenciais', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Gráfico da exponencial: trilha de desafios', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-grafico/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Função Exponencial: Problemas',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 10–11', titulo:'Problemas com função exponencial', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-problemas/aula-1-problemas-com-exponencial.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Exponencial: Problemas', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-problemas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Problemas com exponencial no estilo ENEM', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-problemas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a resolução', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-problemas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Problemas com exponencial: trilha de desafios', arquivo:'aulas/3-ano/1-tri/funcao-exponencial-problemas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Logaritmo: Definição',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aula 12', titulo:'Definição de logaritmo', arquivo:'aulas/3-ano/1-tri/logaritmo-definicao/aula-1-definicao-de-logaritmo.html' },
                  { tipo:'Guia', titulo:'Guia visual — Logaritmo: Definição', arquivo:'aulas/3-ano/1-tri/logaritmo-definicao/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Definição de logaritmo no estilo ENEM', arquivo:'aulas/3-ano/1-tri/logaritmo-definicao/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos logaritmos', arquivo:'aulas/3-ano/1-tri/logaritmo-definicao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Definição de logaritmo: trilha de desafios', arquivo:'aulas/3-ano/1-tri/logaritmo-definicao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Logaritmo: Consequências da Definição',
                accent: 'growth',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 13–14', titulo:'Consequências da definição', arquivo:'aulas/3-ano/1-tri/logaritmo-consequencias/aula-1-consequencias-da-definicao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Logaritmo: Consequências da Definição', arquivo:'aulas/3-ano/1-tri/logaritmo-consequencias/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Consequências da definição no estilo ENEM', arquivo:'aulas/3-ano/1-tri/logaritmo-consequencias/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive: onde está o erro?', arquivo:'aulas/3-ano/1-tri/logaritmo-consequencias/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Consequências da definição: trilha de desafios', arquivo:'aulas/3-ano/1-tri/logaritmo-consequencias/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Logaritmo de Base 10',
                accent: 'decay',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 15–16', titulo:'Logaritmo decimal', arquivo:'aulas/3-ano/1-tri/logaritmo-base-10/aula-1-logaritmo-decimal.html' },
                  { tipo:'Guia', titulo:'Guia visual — Logaritmo de Base 10', arquivo:'aulas/3-ano/1-tri/logaritmo-base-10/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Logaritmo decimal no estilo ENEM', arquivo:'aulas/3-ano/1-tri/logaritmo-base-10/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Em que faixa está o logaritmo?', arquivo:'aulas/3-ano/1-tri/logaritmo-base-10/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Logaritmo decimal: trilha de desafios', arquivo:'aulas/3-ano/1-tri/logaritmo-base-10/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Logaritmo: Condição de Existência',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 17–18', titulo:'Condição de existência do logaritmo', arquivo:'aulas/3-ano/1-tri/logaritmo-condicao-existencia/aula-1-condicao-de-existencia.html' },
                  { tipo:'Guia', titulo:'Guia visual — Logaritmo: Condição de Existência', arquivo:'aulas/3-ano/1-tri/logaritmo-condicao-existencia/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Condição de existência no estilo ENEM', arquivo:'aulas/3-ano/1-tri/logaritmo-condicao-existencia/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: existência', arquivo:'aulas/3-ano/1-tri/logaritmo-condicao-existencia/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Condição de existência: trilha de desafios', arquivo:'aulas/3-ano/1-tri/logaritmo-condicao-existencia/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Propriedades Operatórias do Logaritmo',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 19–21', titulo:'Produto, quociente e potência', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/aula-1-produto-quociente-potencia.html' },
                  { tipo:'Aulas 22–23', titulo:'Mudança de base', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/aula-2-mudanca-de-base.html' },
                  { tipo:'Guia', titulo:'Guia visual — Propriedades Operatórias do Logaritmo', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Propriedades dos logaritmos no estilo ENEM', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a resolução', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Propriedades dos logaritmos: trilha de desafios', arquivo:'aulas/3-ano/1-tri/logaritmo-propriedades/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Equação Logarítmica',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aula 24', titulo:'Equação logarítmica', arquivo:'aulas/3-ano/1-tri/equacao-logaritmica/aula-1-equacao-logaritmica.html' },
                  { tipo:'Guia', titulo:'Guia visual — Equação Logarítmica', arquivo:'aulas/3-ano/1-tri/equacao-logaritmica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Equação logarítmica no estilo ENEM', arquivo:'aulas/3-ano/1-tri/equacao-logaritmica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive: onde está o erro?', arquivo:'aulas/3-ano/1-tri/equacao-logaritmica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Equação logarítmica: trilha de desafios', arquivo:'aulas/3-ano/1-tri/equacao-logaritmica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Função Logarítmica',
                accent: 'growth',
                icon: 'wave',
                itens: [
                  { tipo:'Aulas 25–26', titulo:'Função logarítmica: definição e escalas', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/aula-1-definicao-e-escalas.html' },
                  { tipo:'Aulas 27–30', titulo:'Função logarítmica: gráficos crescente e decrescente', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/aula-2-graficos-crescente-e-decrescente.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Logarítmica', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Função logarítmica no estilo ENEM', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique a função', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Função logarítmica: trilha de desafios', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Função Logarítmica: Problemas',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 31–32', titulo:'Problemas com logaritmos', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica-problemas/aula-1-problemas-com-logaritmos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Logarítmica: Problemas', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica-problemas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Problemas com logaritmos no estilo ENEM', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica-problemas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória: problema e resposta', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica-problemas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Problemas com logaritmos: trilha de desafios', arquivo:'aulas/3-ano/1-tri/funcao-logaritmica-problemas/atividade-pratica.html' }
                ]
              },
              // <<< mat-3ano-1tri
              // >>> cd-mat-3ano-1tri
              {
                titulo: 'Probabilidade',
                accent: 'accent',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Probabilidade: união e eventos independentes', arquivo:'aulas/3-ano/1-tri/probabilidade/aula-1-probabilidade-uniao-e-eventos-independentes.html' },
                  { tipo:'Aula 2', titulo:'Probabilidade condicional', arquivo:'aulas/3-ano/1-tri/probabilidade/aula-2-probabilidade-condicional.html' }
                ]
              },
              // <<< cd-mat-3ano-1tri
            ]
          },
          // >>> mat-3ano-2tri
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Perímetro de Figuras Planas',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aulas 33–34', titulo:'Perímetro de figuras planas: resolução de problemas', arquivo:'aulas/3-ano/2-tri/perimetro-figuras-planas/aula-1-perimetro-de-figuras-planas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Perímetro de Figuras Planas', arquivo:'aulas/3-ano/2-tri/perimetro-figuras-planas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Perímetro de figuras planas no estilo ENEM', arquivo:'aulas/3-ano/2-tri/perimetro-figuras-planas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual fórmula usar?', arquivo:'aulas/3-ano/2-tri/perimetro-figuras-planas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Perímetro de figuras planas: trilha de desafios', arquivo:'aulas/3-ano/2-tri/perimetro-figuras-planas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Poliedros',
                accent: 'primary',
                icon: 'cube',
                itens: [
                  { tipo:'Aulas 35–36', titulo:'Poliedros: elementos e regulares', arquivo:'aulas/3-ano/2-tri/poliedros/aula-1-elementos-e-regulares.html' },
                  { tipo:'Aulas 37–38', titulo:'Poliedros de Platão e relação de Euler', arquivo:'aulas/3-ano/2-tri/poliedros/aula-2-platao-e-euler.html' },
                  { tipo:'Guia', titulo:'Guia visual — Poliedros', arquivo:'aulas/3-ano/2-tri/poliedros/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Poliedros no estilo ENEM', arquivo:'aulas/3-ano/2-tri/poliedros/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos poliedros', arquivo:'aulas/3-ano/2-tri/poliedros/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Poliedros: trilha de desafios', arquivo:'aulas/3-ano/2-tri/poliedros/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Prisma: Características e Área',
                accent: 'primary',
                icon: 'cube',
                itens: [
                  { tipo:'Aula 39', titulo:'Prisma: características e planificações', arquivo:'aulas/3-ano/2-tri/prisma-area/aula-1-caracteristicas-e-planificacoes.html' },
                  { tipo:'Aulas 40–41', titulo:'Prisma: área da superfície', arquivo:'aulas/3-ano/2-tri/prisma-area/aula-2-area-da-superficie.html' },
                  { tipo:'Guia', titulo:'Guia visual — Prisma: Características e Área', arquivo:'aulas/3-ano/2-tri/prisma-area/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Prisma: características e área no estilo ENEM', arquivo:'aulas/3-ano/2-tri/prisma-area/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Que sólido tem esta planificação?', arquivo:'aulas/3-ano/2-tri/prisma-area/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Prisma: trilha de desafios', arquivo:'aulas/3-ano/2-tri/prisma-area/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Prisma: Volume',
                accent: 'growth',
                icon: 'cube',
                itens: [
                  { tipo:'Aulas 42–43', titulo:'Volume do prisma', arquivo:'aulas/3-ano/2-tri/prisma-volume/aula-1-volume-do-prisma.html' },
                  { tipo:'Aula 44', titulo:'Prisma: área total e volume em problemas', arquivo:'aulas/3-ano/2-tri/prisma-volume/aula-2-area-total-e-volume.html' },
                  { tipo:'Guia', titulo:'Guia visual — Prisma: Volume', arquivo:'aulas/3-ano/2-tri/prisma-volume/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Volume do prisma no estilo ENEM', arquivo:'aulas/3-ano/2-tri/prisma-volume/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive: onde está o erro?', arquivo:'aulas/3-ano/2-tri/prisma-volume/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Volume do prisma: trilha de desafios', arquivo:'aulas/3-ano/2-tri/prisma-volume/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Pirâmide: Características e Área',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 45', titulo:'Pirâmide: características e planificações', arquivo:'aulas/3-ano/2-tri/piramide-area/aula-1-caracteristicas-da-piramide.html' },
                  { tipo:'Aulas 46–47', titulo:'Pirâmide: área da superfície', arquivo:'aulas/3-ano/2-tri/piramide-area/aula-2-area-da-piramide.html' },
                  { tipo:'Guia', titulo:'Guia visual — Pirâmide: Características e Área', arquivo:'aulas/3-ano/2-tri/piramide-area/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Pirâmide: características e área no estilo ENEM', arquivo:'aulas/3-ano/2-tri/piramide-area/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a resolução', arquivo:'aulas/3-ano/2-tri/piramide-area/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Pirâmide: trilha de desafios', arquivo:'aulas/3-ano/2-tri/piramide-area/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Pirâmide: Volume',
                accent: 'growth',
                icon: 'triangle',
                itens: [
                  { tipo:'Aulas 48–49', titulo:'Volume da pirâmide', arquivo:'aulas/3-ano/2-tri/piramide-volume/aula-1-volume-da-piramide.html' },
                  { tipo:'Aula 50', titulo:'Pirâmide: área total e volume em problemas', arquivo:'aulas/3-ano/2-tri/piramide-volume/aula-2-problemas-de-area-e-volume.html' },
                  { tipo:'Guia', titulo:'Guia visual — Pirâmide: Volume', arquivo:'aulas/3-ano/2-tri/piramide-volume/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Volume da pirâmide no estilo ENEM', arquivo:'aulas/3-ano/2-tri/piramide-volume/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: pirâmides', arquivo:'aulas/3-ano/2-tri/piramide-volume/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Volume da pirâmide: trilha de desafios', arquivo:'aulas/3-ano/2-tri/piramide-volume/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Cilindro: Características e Área',
                accent: 'primary',
                icon: 'cube',
                itens: [
                  { tipo:'Aula 51', titulo:'Cilindro: características e planificação', arquivo:'aulas/3-ano/2-tri/cilindro-area/aula-1-caracteristicas-do-cilindro.html' },
                  { tipo:'Aulas 52–53', titulo:'Cilindro: área da superfície', arquivo:'aulas/3-ano/2-tri/cilindro-area/aula-2-area-do-cilindro.html' },
                  { tipo:'Guia', titulo:'Guia visual — Cilindro: Características e Área', arquivo:'aulas/3-ano/2-tri/cilindro-area/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Cilindro: características e área no estilo ENEM', arquivo:'aulas/3-ano/2-tri/cilindro-area/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Que fórmula do cilindro?', arquivo:'aulas/3-ano/2-tri/cilindro-area/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Cilindro: trilha de desafios', arquivo:'aulas/3-ano/2-tri/cilindro-area/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Cilindro: Volume',
                accent: 'growth',
                icon: 'cube',
                itens: [
                  { tipo:'Aulas 54–55', titulo:'Volume do cilindro', arquivo:'aulas/3-ano/2-tri/cilindro-volume/aula-1-volume-do-cilindro.html' },
                  { tipo:'Aula 56', titulo:'Cilindro: área total e volume em problemas', arquivo:'aulas/3-ano/2-tri/cilindro-volume/aula-2-problemas-de-area-e-volume.html' },
                  { tipo:'Guia', titulo:'Guia visual — Cilindro: Volume', arquivo:'aulas/3-ano/2-tri/cilindro-volume/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Volume do cilindro no estilo ENEM', arquivo:'aulas/3-ano/2-tri/cilindro-volume/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos volumes', arquivo:'aulas/3-ano/2-tri/cilindro-volume/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Volume do cilindro: trilha de desafios', arquivo:'aulas/3-ano/2-tri/cilindro-volume/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Cone: Características e Área',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 57', titulo:'Cone: características e planificação', arquivo:'aulas/3-ano/2-tri/cone-area/aula-1-caracteristicas-do-cone.html' },
                  { tipo:'Aulas 58–59', titulo:'Cone: área da superfície', arquivo:'aulas/3-ano/2-tri/cone-area/aula-2-area-do-cone.html' },
                  { tipo:'Guia', titulo:'Guia visual — Cone: Características e Área', arquivo:'aulas/3-ano/2-tri/cone-area/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Cone: características e área no estilo ENEM', arquivo:'aulas/3-ano/2-tri/cone-area/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Que sólido é?', arquivo:'aulas/3-ano/2-tri/cone-area/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Cone: trilha de desafios', arquivo:'aulas/3-ano/2-tri/cone-area/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Cone: Volume',
                accent: 'growth',
                icon: 'triangle',
                itens: [
                  { tipo:'Aulas 60–61', titulo:'Volume do cone', arquivo:'aulas/3-ano/2-tri/cone-volume/aula-1-volume-do-cone.html' },
                  { tipo:'Guia', titulo:'Guia visual — Cone: Volume', arquivo:'aulas/3-ano/2-tri/cone-volume/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Volume do cone no estilo ENEM', arquivo:'aulas/3-ano/2-tri/cone-volume/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive: onde está o erro?', arquivo:'aulas/3-ano/2-tri/cone-volume/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Volume do cone: trilha de desafios', arquivo:'aulas/3-ano/2-tri/cone-volume/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Esfera: Área e Volume',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aulas 62–63', titulo:'Esfera: área e volume', arquivo:'aulas/3-ano/2-tri/esfera/aula-1-area-e-volume-da-esfera.html' },
                  { tipo:'Aula 64', titulo:'Esfera: situações-problema', arquivo:'aulas/3-ano/2-tri/esfera/aula-2-situacoes-problema.html' },
                  { tipo:'Guia', titulo:'Guia visual — Esfera: Área e Volume', arquivo:'aulas/3-ano/2-tri/esfera/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Esfera no estilo ENEM', arquivo:'aulas/3-ano/2-tri/esfera/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: esfera', arquivo:'aulas/3-ano/2-tri/esfera/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Esfera: trilha de desafios', arquivo:'aulas/3-ano/2-tri/esfera/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Porcentagem em Área e Perímetro',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 65–66', titulo:'Porcentagem em área, perímetro e volume de prismas', arquivo:'aulas/3-ano/2-tri/porcentagem-area-perimetro/aula-1-porcentagem-em-prismas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Porcentagem em Área e Perímetro', arquivo:'aulas/3-ano/2-tri/porcentagem-area-perimetro/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Porcentagem em prismas no estilo ENEM', arquivo:'aulas/3-ano/2-tri/porcentagem-area-perimetro/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aumenta, diminui ou não muda?', arquivo:'aulas/3-ano/2-tri/porcentagem-area-perimetro/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Porcentagem em prismas: trilha de desafios', arquivo:'aulas/3-ano/2-tri/porcentagem-area-perimetro/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Relação entre Área e Perímetro',
                accent: 'primary',
                icon: 'grid',
                itens: [
                  { tipo:'Aulas 67–68', titulo:'Relação entre as grandezas de área e de perímetro', arquivo:'aulas/3-ano/2-tri/area-e-perimetro/aula-1-razao-de-semelhanca.html' },
                  { tipo:'Guia', titulo:'Guia visual — Relação entre Área e Perímetro', arquivo:'aulas/3-ano/2-tri/area-e-perimetro/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Área e perímetro no estilo ENEM', arquivo:'aulas/3-ano/2-tri/area-e-perimetro/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória da razão de semelhança', arquivo:'aulas/3-ano/2-tri/area-e-perimetro/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Área e perímetro: trilha de desafios', arquivo:'aulas/3-ano/2-tri/area-e-perimetro/atividade-pratica.html' }
                ]
              },
              // <<< mat-3ano-2tri
              // >>> cd-mat-3ano-2tri
              {
                titulo: 'Geometria analítica',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ponto, distância e equação da reta', arquivo:'aulas/3-ano/2-tri/geometria-analitica/aula-1-ponto-distancia-e-equacao-da-reta.html' },
                  { tipo:'Aula 2', titulo:'Circunferência no plano cartesiano', arquivo:'aulas/3-ano/2-tri/geometria-analitica/aula-2-circunferencia-no-plano-cartesiano.html' }
                ]
              },
              {
                titulo: 'Cônicas: elipse, hipérbole e parábola',
                accent: 'accent',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Elipse e hipérbole', arquivo:'aulas/3-ano/2-tri/conicas/aula-1-elipse-e-hiperbole.html' },
                  { tipo:'Aula 2', titulo:'Parábola: foco e diretriz', arquivo:'aulas/3-ano/2-tri/conicas/aula-2-parabola-foco-e-diretriz.html' }
                ]
              },
              {
                titulo: 'Vetores no plano e área do triângulo',
                accent: 'decay',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Vetores no plano: soma, módulo e produto escalar', arquivo:'aulas/3-ano/2-tri/vetores-e-area-do-triangulo/aula-1-vetores-no-plano.html' },
                  { tipo:'Aula 2', titulo:'Área do triângulo: fórmula de Heron e determinante', arquivo:'aulas/3-ano/2-tri/vetores-e-area-do-triangulo/aula-2-area-do-triangulo-heron-e-determinante.html' }
                ]
              },
              // <<< cd-mat-3ano-2tri
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              // >>> mat-3ano-3tri
              {
                titulo: 'Sequências numéricas',
                accent: 'growth',
                icon: 'stairs',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Sequências numéricas I: padrões e a ideia de função', arquivo:'aulas/3-ano/3-tri/sequencias-numericas/aula-1-sequencias-numericas-i.html' },
                  { tipo:'Aula 2', titulo:'Sequências numéricas II: lei de formação e termo geral', arquivo:'aulas/3-ano/3-tri/sequencias-numericas/aula-2-sequencias-numericas-ii.html' },
                  { tipo:'Aula 3', titulo:'Sequências numéricas III: recorrência', arquivo:'aulas/3-ano/3-tri/sequencias-numericas/aula-3-sequencias-numericas-iii.html' },
                  { tipo:'Aula 4', titulo:'Sequências numéricas IV: classificação e problemas', arquivo:'aulas/3-ano/3-tri/sequencias-numericas/aula-4-sequencias-numericas-iv.html' }
                ]
              },
              {
                titulo: 'Progressão aritmética: termo geral',
                accent: 'primary',
                icon: 'stairs',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Progressão aritmética: termo geral I', arquivo:'aulas/3-ano/3-tri/pa-termo-geral/aula-1-progressao-aritmetica-termo-geral-i.html' },
                  { tipo:'Aula 2', titulo:'Progressão aritmética: termo geral II', arquivo:'aulas/3-ano/3-tri/pa-termo-geral/aula-2-progressao-aritmetica-termo-geral-ii.html' },
                  { tipo:'Aula 3', titulo:'Progressão aritmética: termo geral III', arquivo:'aulas/3-ano/3-tri/pa-termo-geral/aula-3-progressao-aritmetica-termo-geral-iii.html' }
                ]
              },
              {
                titulo: 'Progressão aritmética: soma dos termos',
                accent: 'primary',
                icon: 'stairs',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Progressão aritmética: soma dos termos I', arquivo:'aulas/3-ano/3-tri/pa-soma-dos-termos/aula-1-progressao-aritmetica-soma-dos-termos-i.html' },
                  { tipo:'Aula 2', titulo:'Progressão aritmética: soma dos termos II', arquivo:'aulas/3-ano/3-tri/pa-soma-dos-termos/aula-2-progressao-aritmetica-soma-dos-termos-ii.html' },
                  { tipo:'Aula 3', titulo:'Progressão aritmética: soma dos termos III', arquivo:'aulas/3-ano/3-tri/pa-soma-dos-termos/aula-3-progressao-aritmetica-soma-dos-termos-iii.html' }
                ]
              },
              {
                titulo: 'Progressão geométrica: termo geral',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Progressão geométrica: termo geral I', arquivo:'aulas/3-ano/3-tri/pg-termo-geral/aula-1-progressao-geometrica-termo-geral-i.html' },
                  { tipo:'Aula 2', titulo:'Progressão geométrica: termo geral II', arquivo:'aulas/3-ano/3-tri/pg-termo-geral/aula-2-progressao-geometrica-termo-geral-ii.html' },
                  { tipo:'Aula 3', titulo:'Progressão geométrica: termo geral III', arquivo:'aulas/3-ano/3-tri/pg-termo-geral/aula-3-progressao-geometrica-termo-geral-iii.html' }
                ]
              },
              {
                titulo: 'Progressão geométrica: soma dos termos',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Progressão geométrica: soma dos termos de uma PG finita I', arquivo:'aulas/3-ano/3-tri/pg-soma-dos-termos/aula-1-progressao-geometrica-soma-dos-termos-i.html' },
                  { tipo:'Aula 2', titulo:'Progressão geométrica: soma dos termos de uma PG finita II', arquivo:'aulas/3-ano/3-tri/pg-soma-dos-termos/aula-2-progressao-geometrica-soma-dos-termos-ii.html' },
                  { tipo:'Aula 3', titulo:'Progressão geométrica: soma dos termos III (soma infinita)', arquivo:'aulas/3-ano/3-tri/pg-soma-dos-termos/aula-3-progressao-geometrica-soma-dos-termos-iii.html' }
                ]
              },
              {
                titulo: 'Triângulo retângulo: relações métricas e seno',
                accent: 'decay',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Relações métricas no triângulo retângulo', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-metricas-e-seno/aula-1-relacoes-metricas-no-triangulo-retangulo.html' },
                  { tipo:'Aula 2', titulo:'Razões trigonométricas no triângulo retângulo: seno I', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-metricas-e-seno/aula-2-razoes-trigonometricas-seno-i.html' },
                  { tipo:'Aula 3', titulo:'Razões trigonométricas no triângulo retângulo: seno II', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-metricas-e-seno/aula-3-razoes-trigonometricas-seno-ii.html' }
                ]
              },
              {
                titulo: 'Triângulo retângulo: cosseno e tangente',
                accent: 'decay',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Razões trigonométricas no triângulo retângulo: cosseno I', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-cosseno-e-tangente/aula-1-razoes-trigonometricas-cosseno-i.html' },
                  { tipo:'Aula 2', titulo:'Razões trigonométricas no triângulo retângulo: cosseno II', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-cosseno-e-tangente/aula-2-razoes-trigonometricas-cosseno-ii.html' },
                  { tipo:'Aula 3', titulo:'Razões trigonométricas no triângulo retângulo: tangente I', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-cosseno-e-tangente/aula-3-razoes-trigonometricas-tangente-i.html' },
                  { tipo:'Aula 4', titulo:'Razões trigonométricas no triângulo retângulo: tangente II', arquivo:'aulas/3-ano/3-tri/triangulo-retangulo-cosseno-e-tangente/aula-4-razoes-trigonometricas-tangente-ii.html' }
                ]
              },
              {
                titulo: 'Relação fundamental e arcos da circunferência',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Relação fundamental da trigonometria', arquivo:'aulas/3-ano/3-tri/relacao-fundamental-e-arcos/aula-1-relacao-fundamental-da-trigonometria.html' },
                  { tipo:'Aula 2', titulo:'Razões trigonométricas na circunferência: arcos I', arquivo:'aulas/3-ano/3-tri/relacao-fundamental-e-arcos/aula-2-razoes-trigonometricas-na-circunferencia-arcos-i.html' }
                ]
              },
              {
                titulo: 'Circunferência trigonométrica',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Circunferência trigonométrica: arcos côngruos', arquivo:'aulas/3-ano/3-tri/circunferencia-trigonometrica/aula-1-circunferencia-trigonometrica-arcos-congruos.html' },
                  { tipo:'Aula 2', titulo:'Circunferência trigonométrica: seno de um arco', arquivo:'aulas/3-ano/3-tri/circunferencia-trigonometrica/aula-2-circunferencia-trigonometrica-seno-de-um-arco.html' },
                  { tipo:'Aula 3', titulo:'Circunferência trigonométrica: cosseno de um arco', arquivo:'aulas/3-ano/3-tri/circunferencia-trigonometrica/aula-3-circunferencia-trigonometrica-cosseno-de-um-arco.html' },
                  { tipo:'Aula 4', titulo:'Circunferência trigonométrica: seno e cosseno de um arco — redução ao 1º quadrante', arquivo:'aulas/3-ano/3-tri/circunferencia-trigonometrica/aula-4-circunferencia-trigonometrica-reducao-ao-primeiro-quadrante.html' }
                ]
              },
              {
                titulo: 'Funções trigonométricas',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Funções trigonométricas: função seno', arquivo:'aulas/3-ano/3-tri/funcoes-trigonometricas/aula-1-funcoes-trigonometricas-funcao-seno.html' },
                  { tipo:'Aula 2', titulo:'Funções trigonométricas: função cosseno', arquivo:'aulas/3-ano/3-tri/funcoes-trigonometricas/aula-2-funcoes-trigonometricas-funcao-cosseno.html' },
                  { tipo:'Aula 3', titulo:'Funções trigonométricas: função tangente', arquivo:'aulas/3-ano/3-tri/funcoes-trigonometricas/aula-3-funcoes-trigonometricas-funcao-tangente.html' }
                ]
              },
              {
                titulo: 'Retomadas do trimestre',
                accent: 'success',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Retomada: porcentagem envolvendo área de figuras planas', arquivo:'aulas/3-ano/3-tri/retomadas-do-trimestre/aula-1-retomada-porcentagem-e-area-de-figuras-planas.html' },
                  { tipo:'Aula 2', titulo:'Retomada: variação proporcional entre grandezas', arquivo:'aulas/3-ano/3-tri/retomadas-do-trimestre/aula-2-retomada-variacao-proporcional-entre-grandezas.html' },
                  { tipo:'Aula 3', titulo:'Retomada: volume de um sólido geométrico', arquivo:'aulas/3-ano/3-tri/retomadas-do-trimestre/aula-3-retomada-volume-de-um-solido-geometrico.html' },
                  { tipo:'Aula 4', titulo:'Retomada: relação entre vértices, faces e arestas de um poliedro', arquivo:'aulas/3-ano/3-tri/retomadas-do-trimestre/aula-4-retomada-relacao-entre-vertices-faces-e-arestas.html' },
                  { tipo:'Aula 5', titulo:'Retomada: elementos de um poliedro, hexágono regular e perímetro de região composta', arquivo:'aulas/3-ano/3-tri/retomadas-do-trimestre/aula-5-retomada-elementos-do-poliedro-e-perimetros.html' }
                ]
              },
              // <<< mat-3ano-3tri
              // >>> cd-mat-3ano-3tri
              {
                titulo: 'Polinômios e números complexos',
                accent: 'warm',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Polinômios: valor numérico, raízes e divisão', arquivo:'aulas/3-ano/3-tri/polinomios-e-complexos/aula-1-polinomios-valor-numerico-raizes-e-divisao.html' },
                  { tipo:'Aula 2', titulo:'Números complexos', arquivo:'aulas/3-ano/3-tri/polinomios-e-complexos/aula-2-numeros-complexos.html' }
                ]
              },
              {
                titulo: 'Matemática financeira: juros compostos',
                accent: 'growth',
                icon: 'coin',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Juros compostos e montante', arquivo:'aulas/3-ano/3-tri/matematica-financeira/aula-1-juros-compostos-e-montante.html' },
                  { tipo:'Aula 2', titulo:'Descontos, acréscimos e variações percentuais', arquivo:'aulas/3-ano/3-tri/matematica-financeira/aula-2-descontos-acrescimos-e-variacoes-percentuais.html' }
                ]
              },
              {
                titulo: 'Financiamentos: SAC e Price',
                accent: 'warm',
                icon: 'coin',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Financiamento pelo sistema SAC', arquivo:'aulas/3-ano/3-tri/financiamentos-sac-e-price/aula-1-financiamento-sac.html' },
                  { tipo:'Aula 2', titulo:'Financiamento pela Tabela Price e comparação', arquivo:'aulas/3-ano/3-tri/financiamentos-sac-e-price/aula-2-financiamento-price-e-comparacao.html' }
                ]
              },
              // <<< cd-mat-3ano-3tri
              {
                titulo: 'Sequências Numéricas',
                accent: 'primary',
                icon: 'dots',
                itens: [
                  { tipo:'Aula', titulo:'Padrões e termo geral', arquivo:'aulas/3-ano/3-tri/sequencias/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Sequências Numéricas', arquivo:'aulas/3-ano/3-tri/sequencias/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Sequências no ENEM: questões reais', arquivo:'aulas/3-ano/3-tri/sequencias/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Arraste o Próximo Número', arquivo:'aulas/3-ano/3-tri/sequencias/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Sequências: Trilha de Desafios', arquivo:'aulas/3-ano/3-tri/sequencias/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Aritmética',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aula 1', titulo:'Termo geral', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-1-termo-geral.html' },
                  { tipo:'Aula 2', titulo:'Soma dos termos', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-2-soma-termos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Aritmética', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Termo Geral da P.A.', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-1-termo-geral-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Monte a P.A.: Arraste os Termos', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-1-termo-geral-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Prática Progressiva: Termo Geral', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-1-termo-geral-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Soma dos Termos da P.A.', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-2-soma-termos-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Emparelhando com Gauss', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-2-soma-termos-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Prática Progressiva: Soma dos Termos', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-2-soma-termos-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Geométrica',
                accent: 'decay',
                icon: 'curve-up',
                itens: [
                  { tipo:'Aula 1', titulo:'Termo geral', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-1-termo-geral.html' },
                  { tipo:'Aula 2', titulo:'Soma dos termos', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-2-soma-termos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Geométrica', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Termo Geral da PG', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-1-termo-geral-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Laboratório da PG: Construa e Preveja', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-1-termo-geral-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Pratique: Termo Geral em 3 Níveis', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-1-termo-geral-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Soma dos Termos da PG', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-2-soma-termos-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Tabuleiro Infinito: Explore a Soma da PG', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-2-soma-termos-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Pratique: Soma da PG em 3 Níveis', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-2-soma-termos-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Trigonometria no Triângulo Retângulo',
                accent: 'growth',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 1', titulo:'Relações métricas e seno', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-1-relacoes-seno.html' },
                  { tipo:'Aula 2', titulo:'Cosseno, tangente e relação fundamental', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-2-cosseno-tangente.html' },
                  { tipo:'Guia', titulo:'Guia visual — Trigonometria no Triângulo', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Relações Métricas e Seno', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-1-relacoes-seno-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Laboratório do Triângulo: Seno na Prática', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-1-relacoes-seno-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Lista Progressiva: Relações Métricas e Seno', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-1-relacoes-seno-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Cosseno, Tangente e Relação Fundamental', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-2-cosseno-tangente-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Painel Ao Vivo: Cosseno e Tangente', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-2-cosseno-tangente-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Lista Progressiva: Cosseno, Tangente e Relação Fundamental', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-2-cosseno-tangente-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Trigonometria no Ciclo',
                accent: 'primary',
                icon: 'wave',
                itens: [
                  { tipo:'Aula 1', titulo:'Arcos, seno e cosseno no ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-1-arcos-seno-cosseno.html' },
                  { tipo:'Aula 2', titulo:'Redução ao 1º quadrante e funções', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-2-reducao-funcoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Trigonometria no Ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Arcos, Seno e Cosseno no Ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-1-arcos-seno-cosseno-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Ciclo Interativo: Arraste o Ponto', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-1-arcos-seno-cosseno-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Prática: Arcos, Seno e Cosseno no Ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-1-arcos-seno-cosseno-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Redução e Funções Trigonométricas', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-2-reducao-funcoes-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Jogo: Redução e Monte a Onda', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-2-reducao-funcoes-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Prática: Redução e Funções Trigonométricas', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-2-reducao-funcoes-atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: '2° Ano',
        trimestres: [
          // >>> mat-2ano-1tri
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Função Quadrática e seu Gráfico',
                accent: 'primary',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 1–2', titulo:'Função quadrática e seu gráfico', arquivo:'aulas/2-ano/1-tri/funcao-quadratica/aula-1-funcao-quadratica-e-grafico.html' },
                  { tipo:'Guia', titulo:'Guia visual — Função Quadrática e seu Gráfico', arquivo:'aulas/2-ano/1-tri/funcao-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Função quadrática no estilo ENEM', arquivo:'aulas/2-ano/1-tri/funcao-quadratica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'É função quadrática?', arquivo:'aulas/2-ano/1-tri/funcao-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Função quadrática: trilha de desafios', arquivo:'aulas/2-ano/1-tri/funcao-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Zeros, Soma e Produto',
                accent: 'decay',
                icon: 'algebra',
                itens: [
                  { tipo:'Aulas 3–4', titulo:'Zeros e discriminante', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/aula-1-zeros-e-discriminante.html' },
                  { tipo:'Aulas 5–6', titulo:'Soma e produto das raízes', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/aula-2-soma-e-produto.html' },
                  { tipo:'Guia', titulo:'Guia visual — Zeros, Soma e Produto', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Zeros da função quadrática no estilo ENEM', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Classifique pelo discriminante', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Zeros da função quadrática: trilha de desafios', arquivo:'aulas/2-ano/1-tri/zeros-soma-produto/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Vértice da Parábola',
                accent: 'primary',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 7–8', titulo:'Vértice e eixo de simetria', arquivo:'aulas/2-ano/1-tri/vertice-da-parabola/aula-1-vertice-e-eixo-de-simetria.html' },
                  { tipo:'Guia', titulo:'Guia visual — Vértice da Parábola', arquivo:'aulas/2-ano/1-tri/vertice-da-parabola/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Vértice da parábola no estilo ENEM', arquivo:'aulas/2-ano/1-tri/vertice-da-parabola/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos vértices', arquivo:'aulas/2-ano/1-tri/vertice-da-parabola/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Vértice da parábola: trilha de desafios', arquivo:'aulas/2-ano/1-tri/vertice-da-parabola/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Máximo, Mínimo e Imagem',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 9–11', titulo:'Valor máximo e mínimo e imagem da função quadrática', arquivo:'aulas/2-ano/1-tri/maximo-minimo-e-imagem/aula-1-maximos-minimos-e-imagem.html' },
                  { tipo:'Guia', titulo:'Guia visual — Máximo, Mínimo e Imagem', arquivo:'aulas/2-ano/1-tri/maximo-minimo-e-imagem/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Máximo, mínimo e imagem no estilo ENEM', arquivo:'aulas/2-ano/1-tri/maximo-minimo-e-imagem/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: extremos e imagem', arquivo:'aulas/2-ano/1-tri/maximo-minimo-e-imagem/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Máximo, mínimo e imagem: trilha de desafios', arquivo:'aulas/2-ano/1-tri/maximo-minimo-e-imagem/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Sinais e Gráficos de Situações',
                accent: 'primary',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 12–13', titulo:'Estudo dos sinais e gráficos de situações', arquivo:'aulas/2-ano/1-tri/sinais-e-graficos/aula-1-sinais-e-graficos-de-situacoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Sinais e Gráficos de Situações', arquivo:'aulas/2-ano/1-tri/sinais-e-graficos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Sinais da função quadrática no estilo ENEM', arquivo:'aulas/2-ano/1-tri/sinais-e-graficos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'O sinal da função', arquivo:'aulas/2-ano/1-tri/sinais-e-graficos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Sinais da função quadrática: trilha de desafios', arquivo:'aulas/2-ano/1-tri/sinais-e-graficos/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Problemas com Função Quadrática',
                accent: 'growth',
                icon: 'parabola',
                itens: [
                  { tipo:'Aulas 14–15', titulo:'Problemas que envolvem funções do 2º grau', arquivo:'aulas/2-ano/1-tri/problemas-funcao-quadratica/aula-1-problemas-com-funcao-quadratica.html' },
                  { tipo:'Guia', titulo:'Guia visual — Problemas com Função Quadrática', arquivo:'aulas/2-ano/1-tri/problemas-funcao-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Problemas com função quadrática no estilo ENEM', arquivo:'aulas/2-ano/1-tri/problemas-funcao-quadratica/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a resolução', arquivo:'aulas/2-ano/1-tri/problemas-funcao-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Problemas com função quadrática: trilha de desafios', arquivo:'aulas/2-ano/1-tri/problemas-funcao-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'População e Amostra',
                accent: 'primary',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 16–17', titulo:'População, amostra e pesquisa estatística', arquivo:'aulas/2-ano/1-tri/populacao-e-amostra/aula-1-populacao-e-amostra.html' },
                  { tipo:'Guia', titulo:'Guia visual — População e Amostra', arquivo:'aulas/2-ano/1-tri/populacao-e-amostra/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'População e amostra no estilo ENEM', arquivo:'aulas/2-ano/1-tri/populacao-e-amostra/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Todo, parte, parâmetro e estatística', arquivo:'aulas/2-ano/1-tri/populacao-e-amostra/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'População e amostra: trilha de desafios', arquivo:'aulas/2-ano/1-tri/populacao-e-amostra/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Tipos de Amostra',
                accent: 'growth',
                icon: 'bars',
                itens: [
                  { tipo:'Aulas 18–19', titulo:'Tipos de amostra e paradoxo do aniversário', arquivo:'aulas/2-ano/1-tri/tipos-de-amostra/aula-1-tipos-de-amostra.html' },
                  { tipo:'Guia', titulo:'Guia visual — Tipos de Amostra', arquivo:'aulas/2-ano/1-tri/tipos-de-amostra/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Tipos de amostra no estilo ENEM', arquivo:'aulas/2-ano/1-tri/tipos-de-amostra/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual técnica de amostragem?', arquivo:'aulas/2-ano/1-tri/tipos-de-amostra/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Tipos de amostra: trilha de desafios', arquivo:'aulas/2-ano/1-tri/tipos-de-amostra/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Interpretação de Tabelas e Gráficos',
                accent: 'growth',
                icon: 'bars',
                itens: [
                  { tipo:'Aula 20', titulo:'Leitura crítica de tabelas e gráficos', arquivo:'aulas/2-ano/1-tri/tabelas-e-graficos/aula-1-leitura-critica-de-tabelas-e-graficos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Interpretação de Tabelas e Gráficos', arquivo:'aulas/2-ano/1-tri/tabelas-e-graficos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Tabelas e gráficos no estilo ENEM', arquivo:'aulas/2-ano/1-tri/tabelas-e-graficos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: leitura crítica', arquivo:'aulas/2-ano/1-tri/tabelas-e-graficos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Tabelas e gráficos: trilha de desafios', arquivo:'aulas/2-ano/1-tri/tabelas-e-graficos/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Sequências Numéricas',
                accent: 'primary',
                icon: 'stairs',
                itens: [
                  { tipo:'Aulas 21–22', titulo:'Sequências numéricas: padrões e termo geral', arquivo:'aulas/2-ano/1-tri/sequencias-numericas/aula-1-padroes-e-termo-geral.html' },
                  { tipo:'Guia', titulo:'Guia visual — Sequências Numéricas', arquivo:'aulas/2-ano/1-tri/sequencias-numericas/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Sequências numéricas no estilo ENEM', arquivo:'aulas/2-ano/1-tri/sequencias-numericas/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Como a sequência cresce?', arquivo:'aulas/2-ano/1-tri/sequencias-numericas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Sequências numéricas: trilha de desafios', arquivo:'aulas/2-ano/1-tri/sequencias-numericas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Aritmética: Termo Geral',
                accent: 'primary',
                icon: 'stairs',
                itens: [
                  { tipo:'Aulas 23–25', titulo:'Progressão aritmética: termo geral', arquivo:'aulas/2-ano/1-tri/pa-termo-geral/aula-1-termo-geral-da-pa.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Aritmética: Termo Geral', arquivo:'aulas/2-ano/1-tri/pa-termo-geral/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'PA: termo geral no estilo ENEM', arquivo:'aulas/2-ano/1-tri/pa-termo-geral/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Ordene a resolução', arquivo:'aulas/2-ano/1-tri/pa-termo-geral/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'PA: termo geral — trilha de desafios', arquivo:'aulas/2-ano/1-tri/pa-termo-geral/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Aritmética: Soma',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aulas 26–27', titulo:'Soma dos termos de uma PA', arquivo:'aulas/2-ano/1-tri/pa-soma/aula-1-soma-dos-termos-da-pa.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Aritmética: Soma', arquivo:'aulas/2-ano/1-tri/pa-soma/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Soma da PA no estilo ENEM', arquivo:'aulas/2-ano/1-tri/pa-soma/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória das somas', arquivo:'aulas/2-ano/1-tri/pa-soma/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Soma da PA: trilha de desafios', arquivo:'aulas/2-ano/1-tri/pa-soma/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Geométrica: Termo Geral',
                accent: 'primary',
                icon: 'candles',
                itens: [
                  { tipo:'Aulas 28–30', titulo:'Progressão geométrica: termo geral', arquivo:'aulas/2-ano/1-tri/pg-termo-geral/aula-1-termo-geral-da-pg.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Geométrica: Termo Geral', arquivo:'aulas/2-ano/1-tri/pg-termo-geral/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'PG: termo geral no estilo ENEM', arquivo:'aulas/2-ano/1-tri/pg-termo-geral/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual o tipo da PG?', arquivo:'aulas/2-ano/1-tri/pg-termo-geral/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'PG: termo geral — trilha de desafios', arquivo:'aulas/2-ano/1-tri/pg-termo-geral/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Progressão Geométrica: Soma',
                accent: 'growth',
                icon: 'candles',
                itens: [
                  { tipo:'Aulas 31–32', titulo:'Soma dos termos de uma PG finita', arquivo:'aulas/2-ano/1-tri/pg-soma/aula-1-soma-da-pg-finita.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Geométrica: Soma', arquivo:'aulas/2-ano/1-tri/pg-soma/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Soma da PG finita no estilo ENEM', arquivo:'aulas/2-ano/1-tri/pg-soma/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive: onde está o erro?', arquivo:'aulas/2-ano/1-tri/pg-soma/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Soma da PG finita: trilha de desafios', arquivo:'aulas/2-ano/1-tri/pg-soma/atividade-pratica.html' }
                ]
              }
            ]
          },
          // <<< mat-2ano-1tri
          // >>> mat-2ano-2tri
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Trigonometria: introdução',
                accent: 'primary',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 33', titulo:'Ângulos do triângulo e teorema de Pitágoras', arquivo:'aulas/2-ano/2-tri/trigonometria-introducao/aula-1-angulos-do-triangulo-e-pitagoras.html' },
                  { tipo:'Aula 34', titulo:'Seno, cosseno e tangente: ângulos notáveis', arquivo:'aulas/2-ano/2-tri/trigonometria-introducao/aula-2-razoes-trigonometricas.html' }
                ]
              },
              {
                titulo: 'Lei dos senos',
                accent: 'growth',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 35', titulo:'Lei dos senos: lados, ângulos e raio circunscrito', arquivo:'aulas/2-ano/2-tri/lei-dos-senos/aula-1-lei-dos-senos.html' },
                  { tipo:'Aula 36', titulo:'Lei dos senos: rampa, torres e rio', arquivo:'aulas/2-ano/2-tri/lei-dos-senos/aula-2-lei-dos-senos-aplicacoes.html' }
                ]
              },
              {
                titulo: 'Lei dos cossenos',
                accent: 'decay',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 37', titulo:'Lei dos cossenos: terceiro lado e ângulos', arquivo:'aulas/2-ano/2-tri/lei-dos-cossenos/aula-1-lei-dos-cossenos.html' },
                  { tipo:'Aula 38', titulo:'Lei dos cossenos: lago, navios e terreno', arquivo:'aulas/2-ano/2-tri/lei-dos-cossenos/aula-2-lei-dos-cossenos-aplicacoes.html' }
                ]
              },
              {
                titulo: 'Arcos, graus e radianos',
                accent: 'success',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 39', titulo:'Arcos de circunferência: graus, radianos e comprimento', arquivo:'aulas/2-ano/2-tri/arcos-graus-radianos/aula-1-arcos-comprimento.html' },
                  { tipo:'Aula 40', titulo:'Conversões entre graus e radianos', arquivo:'aulas/2-ano/2-tri/arcos-graus-radianos/aula-2-conversoes-e-problemas.html' }
                ]
              },
              {
                titulo: 'Circunferência trigonométrica e arcos côngruos',
                accent: 'primary',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 41', titulo:'Circunferência trigonométrica e arcos côngruos', arquivo:'aulas/2-ano/2-tri/arcos-congruos/aula-1-circunferencia-trigonometrica.html' },
                  { tipo:'Aula 42', titulo:'Arcos côngruos: giros, roletas e manobras', arquivo:'aulas/2-ano/2-tri/arcos-congruos/aula-2-arcos-congruos-problemas.html' }
                ]
              },
              {
                titulo: 'Seno e cosseno de um arco',
                accent: 'growth',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 43', titulo:'Seno de um arco: redução ao 1º quadrante', arquivo:'aulas/2-ano/2-tri/seno-e-cosseno-de-um-arco/aula-1-seno-de-um-arco.html' },
                  { tipo:'Aula 44', titulo:'Cosseno de um arco e relação fundamental', arquivo:'aulas/2-ano/2-tri/seno-e-cosseno-de-um-arco/aula-2-cosseno-de-um-arco.html' }
                ]
              },
              {
                titulo: 'Tangente de um arco',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 45', titulo:'Tangente de um arco: eixo das tangentes e sinais', arquivo:'aulas/2-ano/2-tri/tangente-de-um-arco/aula-1-tangente-de-um-arco.html' }
                ]
              },
              {
                titulo: 'Função seno: gráfico, centro e amplitude',
                accent: 'primary',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 46', titulo:'A função seno: senóide, domínio, imagem e período', arquivo:'aulas/2-ano/2-tri/funcao-seno/aula-1-funcao-seno.html' },
                  { tipo:'Aula 47', titulo:'Parâmetros a e b: centro e amplitude', arquivo:'aulas/2-ano/2-tri/funcao-seno/aula-2-parametros-a-e-b.html' }
                ]
              },
              {
                titulo: 'Função seno: período, deslocamento e problemas',
                accent: 'growth',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 48', titulo:'Parâmetros c e d: período e deslocamento', arquivo:'aulas/2-ano/2-tri/funcao-seno-periodo-e-problemas/aula-1-parametros-c-e-d.html' },
                  { tipo:'Aula 49', titulo:'Função seno: roda-gigante, luz e energia', arquivo:'aulas/2-ano/2-tri/funcao-seno-periodo-e-problemas/aula-2-funcao-seno-problemas.html' }
                ]
              },
              {
                titulo: 'Função cosseno: gráfico e parâmetros',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 50', titulo:'A função cosseno: cossenóide, domínio, imagem e período', arquivo:'aulas/2-ano/2-tri/funcao-cosseno/aula-1-funcao-cosseno.html' },
                  { tipo:'Aula 51', titulo:'Parâmetros da função cosseno', arquivo:'aulas/2-ano/2-tri/funcao-cosseno/aula-2-parametros-da-cossenoide.html' }
                ]
              },
              {
                titulo: 'Funções seno e cosseno: modelagem e problemas',
                accent: 'success',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 52', titulo:'Modelando fenômenos com o cosseno', arquivo:'aulas/2-ano/2-tri/funcoes-trigonometricas-problemas/aula-1-modelando-com-o-cosseno.html' },
                  { tipo:'Aula 53', titulo:'Máximos e mínimos: marés, coração e luz', arquivo:'aulas/2-ano/2-tri/funcoes-trigonometricas-problemas/aula-2-maximos-e-minimos-do-cosseno.html' },
                  { tipo:'Aula 54', titulo:'Problemas de seno e cosseno', arquivo:'aulas/2-ano/2-tri/funcoes-trigonometricas-problemas/aula-3-problemas-de-seno-e-cosseno.html' }
                ]
              },
              {
                titulo: 'Área de polígonos: unidades e fórmulas',
                accent: 'primary',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 55', titulo:'Área e unidades de área', arquivo:'aulas/2-ano/2-tri/area-de-poligonos/aula-1-area-e-unidades.html' },
                  { tipo:'Aula 56', titulo:'Áreas de triângulos e quadriláteros', arquivo:'aulas/2-ano/2-tri/area-de-poligonos/aula-2-areas-de-triangulos-e-quadrilateros.html' }
                ]
              },
              {
                titulo: 'Áreas irregulares e problemas',
                accent: 'growth',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 57', titulo:'Áreas de polígonos irregulares: decompor, subtrair e contar', arquivo:'aulas/2-ano/2-tri/areas-irregulares-e-problemas/aula-1-poligonos-irregulares.html' },
                  { tipo:'Aula 58', titulo:'Problemas de área: tangram, molduras e terrenos', arquivo:'aulas/2-ano/2-tri/areas-irregulares-e-problemas/aula-2-problemas-de-area.html' }
                ]
              },
              {
                titulo: 'Área do círculo e de suas partes',
                accent: 'decay',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 59', titulo:'Círculo, circunferência e coroa circular', arquivo:'aulas/2-ano/2-tri/area-do-circulo-e-partes/aula-1-circulo-e-coroa.html' },
                  { tipo:'Aula 60', titulo:'Setor e segmento circular', arquivo:'aulas/2-ano/2-tri/area-do-circulo-e-partes/aula-2-setor-e-segmento.html' }
                ]
              },
              {
                titulo: 'Problemas de área com círculos e figuras compostas',
                accent: 'success',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 61', titulo:'Problemas com círculos: coroa e corda tangente', arquivo:'aulas/2-ano/2-tri/problemas-de-area-com-circulos/aula-1-coroa-e-corda-tangente.html' },
                  { tipo:'Aula 62', titulo:'Figuras compostas: dividir para conquistar', arquivo:'aulas/2-ano/2-tri/problemas-de-area-com-circulos/aula-2-figuras-compostas.html' },
                  { tipo:'Aula 63', titulo:'Problemas de área no estilo ENEM', arquivo:'aulas/2-ano/2-tri/problemas-de-area-com-circulos/aula-3-problemas-estilo-enem.html' }
                ]
              },
              {
                titulo: 'Polígonos regulares: elementos e área',
                accent: 'primary',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 64', titulo:'Polígonos regulares: elementos e relações métricas', arquivo:'aulas/2-ano/2-tri/poligonos-regulares/aula-1-elementos-e-relacoes.html' },
                  { tipo:'Aula 65', titulo:'Área de um polígono regular', arquivo:'aulas/2-ano/2-tri/poligonos-regulares/aula-2-area-do-poligono-regular.html' }
                ]
              },
              {
                titulo: 'Variação do perímetro e da área',
                accent: 'growth',
                icon: 'bars',
                pendente: true,
                itens: [
                  { tipo:'Aula 66', titulo:'Perímetro e área: variação linear e quadrática', arquivo:'aulas/2-ano/2-tri/variacao-do-perimetro-e-da-area/aula-1-linear-e-quadratica.html' },
                  { tipo:'Aula 67', titulo:'Campos, plantas e escalas', arquivo:'aulas/2-ano/2-tri/variacao-do-perimetro-e-da-area/aula-2-campos-plantas-e-escalas.html' }
                ]
              },
              {
                titulo: 'Ladrilhamento do plano',
                accent: 'decay',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 68', titulo:'Ladrilhamento do plano: mosaicos e a regra dos 360°', arquivo:'aulas/2-ano/2-tri/ladrilhamento-do-plano/aula-1-ladrilhamento.html' }
                ]
              },
              {
                titulo: 'Retomada: equação do 2º grau e raízes da função',
                accent: 'primary',
                icon: 'parabola',
                pendente: true,
                itens: [
                  { tipo:'Aula R9', titulo:'Retomada: equação do 2º grau', arquivo:'aulas/2-ano/2-tri/retomada-equacao-do-2-grau/aula-1-retomada-equacao-do-2-grau.html' },
                  { tipo:'Aula R10', titulo:'Retomada: raízes, vértice e simetria da parábola', arquivo:'aulas/2-ano/2-tri/retomada-equacao-do-2-grau/aula-2-retomada-raizes-e-vertice.html' }
                ]
              },
              {
                titulo: 'Retomada: comportamento de funções e sistemas lineares',
                accent: 'growth',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula R11', titulo:'Retomada: comportamento de funções reais', arquivo:'aulas/2-ano/2-tri/retomada-funcoes-e-sistemas/aula-1-retomada-comportamento-de-funcoes.html' },
                  { tipo:'Aula R12', titulo:'Retomada: sistema linear e matrizes', arquivo:'aulas/2-ano/2-tri/retomada-funcoes-e-sistemas/aula-2-retomada-sistema-linear.html' }
                ]
              },
              {
                titulo: 'Retomada: progressão aritmética',
                accent: 'decay',
                icon: 'stairs',
                pendente: true,
                itens: [
                  { tipo:'Aula R13', titulo:'Retomada: termo geral da progressão aritmética', arquivo:'aulas/2-ano/2-tri/retomada-progressao-aritmetica/aula-1-retomada-termo-geral-da-pa.html' },
                  { tipo:'Aula R14', titulo:'Retomada: soma dos termos de uma PA', arquivo:'aulas/2-ano/2-tri/retomada-progressao-aritmetica/aula-2-retomada-soma-da-pa.html' }
                ]
              },
              {
                titulo: 'Retomada: progressão geométrica',
                accent: 'success',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula R15', titulo:'Retomada: PA e PG; termo geral da PG', arquivo:'aulas/2-ano/2-tri/retomada-progressao-geometrica/aula-1-retomada-pa-e-pg.html' },
                  { tipo:'Aula R16', titulo:'Retomada: soma dos termos de uma PG', arquivo:'aulas/2-ano/2-tri/retomada-progressao-geometrica/aula-2-retomada-soma-da-pg.html' }
                ]
              },
              // <<< mat-2ano-2tri
              // >>> cd-mat-2ano-2tri
              {
                titulo: 'Matrizes, determinantes e sistemas lineares',
                accent: 'decay',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Matrizes e operações', arquivo:'aulas/2-ano/2-tri/matrizes-e-sistemas-lineares/aula-1-matrizes-e-operacoes.html' },
                  { tipo:'Aula 2', titulo:'Determinantes e sistemas lineares', arquivo:'aulas/2-ano/2-tri/matrizes-e-sistemas-lineares/aula-2-determinantes-e-sistemas-lineares.html' }
                ]
              },
              // <<< cd-mat-2ano-2tri
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              // >>> mat-2ano-3tri
              {
                titulo: 'Equação e função exponencial',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Equação exponencial', arquivo:'aulas/2-ano/3-tri/equacao-e-funcao-exponencial/aula-1-equacao-exponencial.html' },
                  { tipo:'Aula 2', titulo:'Função exponencial: definição algébrica', arquivo:'aulas/2-ano/3-tri/equacao-e-funcao-exponencial/aula-2-funcao-exponencial-definicao-algebrica.html' },
                  { tipo:'Aula 3', titulo:'Função exponencial: definição gráfica', arquivo:'aulas/2-ano/3-tri/equacao-e-funcao-exponencial/aula-3-funcao-exponencial-definicao-grafica.html' }
                ]
              },
              {
                titulo: 'Função exponencial: problemas e gráficos',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Função exponencial: resolução de problemas', arquivo:'aulas/2-ano/3-tri/funcao-exponencial-problemas-e-graficos/aula-1-funcao-exponencial-resolucao-de-problemas.html' },
                  { tipo:'Aula 2', titulo:'Função exponencial crescente: representação gráfica', arquivo:'aulas/2-ano/3-tri/funcao-exponencial-problemas-e-graficos/aula-2-funcao-exponencial-crescente.html' },
                  { tipo:'Aula 3', titulo:'Função exponencial decrescente: representação gráfica', arquivo:'aulas/2-ano/3-tri/funcao-exponencial-problemas-e-graficos/aula-3-funcao-exponencial-decrescente.html' }
                ]
              },
              {
                titulo: 'Logaritmo: definição e consequências',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Logaritmo: definição', arquivo:'aulas/2-ano/3-tri/logaritmo-definicao-e-consequencias/aula-1-logaritmo-definicao.html' },
                  { tipo:'Aula 2', titulo:'Logaritmo: consequências da definição I', arquivo:'aulas/2-ano/3-tri/logaritmo-definicao-e-consequencias/aula-2-logaritmo-consequencias-da-definicao-i.html' },
                  { tipo:'Aula 3', titulo:'Logaritmo: consequências da definição II', arquivo:'aulas/2-ano/3-tri/logaritmo-definicao-e-consequencias/aula-3-logaritmo-consequencias-da-definicao-ii.html' }
                ]
              },
              {
                titulo: 'Logaritmos decimais e condição de existência',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Logaritmo de base 10', arquivo:'aulas/2-ano/3-tri/logaritmos-decimais-e-existencia/aula-1-logaritmo-de-base-10.html' },
                  { tipo:'Aula 2', titulo:'Logaritmo: condição de existência', arquivo:'aulas/2-ano/3-tri/logaritmos-decimais-e-existencia/aula-2-logaritmo-condicao-de-existencia.html' }
                ]
              },
              {
                titulo: 'Propriedades operatórias dos logaritmos',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Logaritmo de um produto', arquivo:'aulas/2-ano/3-tri/propriedades-dos-logaritmos/aula-1-logaritmo-de-um-produto.html' },
                  { tipo:'Aula 2', titulo:'Logaritmo de um quociente', arquivo:'aulas/2-ano/3-tri/propriedades-dos-logaritmos/aula-2-logaritmo-de-um-quociente.html' },
                  { tipo:'Aula 3', titulo:'Logaritmo de uma potência', arquivo:'aulas/2-ano/3-tri/propriedades-dos-logaritmos/aula-3-logaritmo-de-uma-potencia.html' }
                ]
              },
              {
                titulo: 'Logaritmos: problemas e mudança de base',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Logaritmo: resolução de problemas', arquivo:'aulas/2-ano/3-tri/logaritmos-problemas-e-mudanca-de-base/aula-1-logaritmo-resolucao-de-problemas.html' },
                  { tipo:'Aula 2', titulo:'Logaritmo: mudança de base', arquivo:'aulas/2-ano/3-tri/logaritmos-problemas-e-mudanca-de-base/aula-2-logaritmo-mudanca-de-base.html' }
                ]
              },
              {
                titulo: 'Equações logarítmicas e função logarítmica',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Equações logarítmicas', arquivo:'aulas/2-ano/3-tri/equacoes-logaritmicas-e-funcao-logaritmica/aula-1-equacoes-logaritmicas.html' },
                  { tipo:'Aula 2', titulo:'Função logarítmica: definição', arquivo:'aulas/2-ano/3-tri/equacoes-logaritmicas-e-funcao-logaritmica/aula-2-funcao-logaritmica-definicao.html' }
                ]
              },
              {
                titulo: 'Função logarítmica: gráficos e problemas',
                accent: 'decay',
                icon: 'curve-log',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Função logarítmica crescente: representação gráfica', arquivo:'aulas/2-ano/3-tri/funcao-logaritmica-graficos-e-problemas/aula-1-funcao-logaritmica-crescente.html' },
                  { tipo:'Aula 2', titulo:'Função logarítmica decrescente: representação gráfica', arquivo:'aulas/2-ano/3-tri/funcao-logaritmica-graficos-e-problemas/aula-2-funcao-logaritmica-decrescente.html' },
                  { tipo:'Aula 3', titulo:'Função logarítmica: resolução de situações-problema', arquivo:'aulas/2-ano/3-tri/funcao-logaritmica-graficos-e-problemas/aula-3-funcao-logaritmica-situacoes-problema.html' }
                ]
              },
              {
                titulo: 'Funções definidas por mais de uma sentença',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Gráfico de uma função definida por mais de uma sentença', arquivo:'aulas/2-ano/3-tri/funcoes-definidas-por-partes/aula-1-grafico-de-funcao-por-partes.html' },
                  { tipo:'Aula 2', titulo:'Resolução de situações-problema com funções definidas por mais de uma sentença', arquivo:'aulas/2-ano/3-tri/funcoes-definidas-por-partes/aula-2-funcoes-por-partes-situacoes-problema.html' }
                ]
              },
              {
                titulo: 'Propriedades das funções',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Propriedades de funções I: função sobrejetora', arquivo:'aulas/2-ano/3-tri/propriedades-das-funcoes/aula-1-propriedades-de-funcoes-i-sobrejetora.html' },
                  { tipo:'Aula 2', titulo:'Propriedades de funções II: função injetora', arquivo:'aulas/2-ano/3-tri/propriedades-das-funcoes/aula-2-propriedades-de-funcoes-ii-injetora.html' },
                  { tipo:'Aula 3', titulo:'Propriedades de funções III: função bijetora', arquivo:'aulas/2-ano/3-tri/propriedades-das-funcoes/aula-3-propriedades-de-funcoes-iii-bijetora.html' },
                  { tipo:'Aula 4', titulo:'Propriedades de funções: resolução de problemas', arquivo:'aulas/2-ano/3-tri/propriedades-das-funcoes/aula-4-propriedades-de-funcoes-resolucao-de-problemas.html' }
                ]
              },
              {
                titulo: 'Função composta e função inversa',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Função composta', arquivo:'aulas/2-ano/3-tri/funcao-composta-e-inversa/aula-1-funcao-composta.html' },
                  { tipo:'Aula 2', titulo:'Função inversa', arquivo:'aulas/2-ano/3-tri/funcao-composta-e-inversa/aula-2-funcao-inversa.html' },
                  { tipo:'Aula 3', titulo:'Gráfico da função inversa', arquivo:'aulas/2-ano/3-tri/funcao-composta-e-inversa/aula-3-grafico-da-funcao-inversa.html' }
                ]
              },
              {
                titulo: 'Função inversa: problemas',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Função inversa: resolução de problemas I', arquivo:'aulas/2-ano/3-tri/funcao-inversa-problemas/aula-1-funcao-inversa-resolucao-de-problemas-i.html' },
                  { tipo:'Aula 2', titulo:'Função inversa: resolução de problemas II', arquivo:'aulas/2-ano/3-tri/funcao-inversa-problemas/aula-2-funcao-inversa-resolucao-de-problemas-ii.html' }
                ]
              },
              {
                titulo: 'Retomada: Teorema de Pitágoras',
                accent: 'success',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Retomada: Teorema de Pitágoras', arquivo:'aulas/2-ano/3-tri/retomada-teorema-de-pitagoras/aula-1-retomada-teorema-de-pitagoras.html' }
                ]
              },
              // <<< mat-2ano-3tri
              // >>> cd-mat-2ano-3tri
              {
                titulo: 'Análise combinatória',
                accent: 'primary',
                icon: 'combo',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Princípio fundamental da contagem e permutações', arquivo:'aulas/2-ano/3-tri/analise-combinatoria/aula-1-principio-fundamental-da-contagem-e-permutacoes.html' },
                  { tipo:'Aula 2', titulo:'Arranjos e combinações', arquivo:'aulas/2-ano/3-tri/analise-combinatoria/aula-2-arranjos-e-combinacoes.html' }
                ]
              },
              {
                titulo: 'Função modular',
                accent: 'decay',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Módulo de um número e função modular', arquivo:'aulas/2-ano/3-tri/funcao-modular/aula-1-modulo-e-funcao-modular.html' },
                  { tipo:'Aula 2', titulo:'Equações e inequações modulares', arquivo:'aulas/2-ano/3-tri/funcao-modular/aula-2-equacoes-e-inequacoes-modulares.html' }
                ]
              },
              // <<< cd-mat-2ano-3tri
              {
                titulo: 'Exponenciais',
                accent: 'growth',
                icon: 'curve-up',
                itens: [
                  { tipo:'Aula', titulo:'Função e equação exponencial', arquivo:'aulas/2-ano/3-tri/exponenciais/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Exponenciais', arquivo:'aulas/2-ano/3-tri/exponenciais/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Exponenciais no ENEM — Atividade', arquivo:'aulas/2-ano/3-tri/exponenciais/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Laboratório de Exponenciais', arquivo:'aulas/2-ano/3-tri/exponenciais/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Treino Progressivo — Exponenciais', arquivo:'aulas/2-ano/3-tri/exponenciais/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Logaritmos',
                accent: 'decay',
                icon: 'curve-log',
                itens: [
                  { tipo:'Aula 1', titulo:'Fundamentos', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-1-fundamentos.html' },
                  { tipo:'Aula 2', titulo:'Propriedades', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-2-propriedades.html' },
                  { tipo:'Aula 3', titulo:'Equações e função', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-3-equacoes-funcao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Logaritmos', arquivo:'aulas/2-ano/3-tri/logaritmos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Logaritmos no ENEM: definição e propriedades', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-1-fundamentos-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · A Máquina do Logaritmo', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-1-fundamentos-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Prática Progressiva: Fundamentos dos Logaritmos', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-1-fundamentos-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Logaritmos no ENEM: propriedades operatórias', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-2-propriedades-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Laboratório de Escalas Logarítmicas', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-2-propriedades-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Prática Progressiva: Propriedades Operatórias', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-2-propriedades-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 3 · Logaritmos no ENEM: questões reais', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-3-equacoes-funcao-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 3 · Laboratório da Função Logarítmica', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-3-equacoes-funcao-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 3 · Prática Progressiva: Logaritmos', arquivo:'aulas/2-ano/3-tri/logaritmos/aula-3-equacoes-funcao-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Funções',
                accent: 'primary',
                icon: 'grid',
                itens: [
                  { tipo:'Aula 1', titulo:'Por partes e propriedades', arquivo:'aulas/2-ano/3-tri/funcoes/aula-1-partes-propriedades.html' },
                  { tipo:'Aula 2', titulo:'Composição e inversa', arquivo:'aulas/2-ano/3-tri/funcoes/aula-2-composta-inversa.html' },
                  { tipo:'Guia', titulo:'Guia visual — Funções', arquivo:'aulas/2-ano/3-tri/funcoes/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Função por Partes e Propriedades', arquivo:'aulas/2-ano/3-tri/funcoes/aula-1-partes-propriedades-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Oficina da Tarifa e Sala de Classificação', arquivo:'aulas/2-ano/3-tri/funcoes/aula-1-partes-propriedades-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Prática Progressiva: Por Partes e Propriedades', arquivo:'aulas/2-ano/3-tri/funcoes/aula-1-partes-propriedades-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Composição e Inversa', arquivo:'aulas/2-ano/3-tri/funcoes/aula-2-composta-inversa-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Fábrica da Composta e Espelho da Inversa', arquivo:'aulas/2-ano/3-tri/funcoes/aula-2-composta-inversa-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Prática Progressiva: Composição e Inversa', arquivo:'aulas/2-ano/3-tri/funcoes/aula-2-composta-inversa-atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  // >>> recomp-mat
  {
    id: 'recomposicao-matematica',
    nome: 'Recomposição Matemática',
    icon: 'stairs',
    lede: 'Aulas de Recomposição de Aprendizagem em Matemática para o 9º ano — 1º, 2º e 3º trimestres, uma aula por aula do plano, com slides navegáveis, exemplos resolvidos, atividades e quiz.',
    CATALOG: [
      {
        ano: '9° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Operações com números inteiros',
                accent: 'primary',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Números inteiros: soma e subtração', arquivo:'aulas/9-ano/1-tri/operacoes-com-inteiros/aula-1-inteiros-soma-e-subtracao.html' },
                  { tipo:'Aula 2', titulo:'Multiplicação, divisão e potenciação com inteiros', arquivo:'aulas/9-ano/1-tri/operacoes-com-inteiros/aula-2-inteiros-multiplicacao-divisao-potencia.html' },
                  { tipo:'Aula 3', titulo:'Resolução de problemas com números inteiros', arquivo:'aulas/9-ano/1-tri/operacoes-com-inteiros/aula-3-problemas-com-inteiros.html' }
                ]
              },
              {
                titulo: 'Números racionais: representações e frações',
                accent: 'growth',
                icon: 'numbers',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Representações de um número racional', arquivo:'aulas/9-ano/1-tri/numeros-racionais/aula-1-representacoes-de-um-racional.html' },
                  { tipo:'Aula 2', titulo:'Fração como parte do todo, razão e número misto', arquivo:'aulas/9-ano/1-tri/numeros-racionais/aula-2-fracao-parte-razao-misto.html' },
                  { tipo:'Aula 3', titulo:'Fração de uma quantidade e comparação de frações', arquivo:'aulas/9-ano/1-tri/numeros-racionais/aula-3-fracao-de-quantidade-e-comparacao.html' }
                ]
              },
              {
                titulo: 'Frações equivalentes',
                accent: 'growth',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Frações equivalentes e simplificação', arquivo:'aulas/9-ano/1-tri/fracoes-equivalentes/aula-1-equivalencia-e-simplificacao.html' },
                  { tipo:'Aula 2', titulo:'Frações com o mesmo denominador e o mínimo múltiplo comum', arquivo:'aulas/9-ano/1-tri/fracoes-equivalentes/aula-2-mesmo-denominador-e-mmc.html' },
                  { tipo:'Aula 3', titulo:'Frações equivalentes em problemas e na reta numérica', arquivo:'aulas/9-ano/1-tri/fracoes-equivalentes/aula-3-equivalencia-em-problemas.html' }
                ]
              },
              {
                titulo: 'Operações com números racionais',
                accent: 'primary',
                icon: 'sigma',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Adição e subtração de números racionais', arquivo:'aulas/9-ano/1-tri/operacoes-com-racionais/aula-1-adicao-e-subtracao-de-racionais.html' },
                  { tipo:'Aula 2', titulo:'Multiplicação e divisão de números racionais', arquivo:'aulas/9-ano/1-tri/operacoes-com-racionais/aula-2-multiplicacao-e-divisao-de-racionais.html' },
                  { tipo:'Aula 3', titulo:'Resolução de problemas com números racionais I', arquivo:'aulas/9-ano/1-tri/operacoes-com-racionais/aula-3-problemas-com-racionais-i.html' },
                  { tipo:'Aula 4', titulo:'Resolução de problemas com números racionais II', arquivo:'aulas/9-ano/1-tri/operacoes-com-racionais/aula-4-problemas-com-racionais-ii.html' }
                ]
              },
              {
                titulo: 'Porcentagem',
                accent: 'decay',
                icon: 'percent',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Porcentagem e suas representações', arquivo:'aulas/9-ano/1-tri/porcentagem/aula-1-porcentagem-e-suas-representacoes.html' },
                  { tipo:'Aula 2', titulo:'Aumentos e descontos percentuais', arquivo:'aulas/9-ano/1-tri/porcentagem/aula-2-aumentos-e-descontos.html' },
                  { tipo:'Aula 3', titulo:'Problemas de porcentagem', arquivo:'aulas/9-ano/1-tri/porcentagem/aula-3-problemas-de-porcentagem.html' }
                ]
              },
              {
                titulo: 'Grandezas proporcionais',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Grandezas diretamente proporcionais I', arquivo:'aulas/9-ano/1-tri/grandezas-proporcionais/aula-1-grandezas-diretamente-proporcionais-i.html' },
                  { tipo:'Aula 2', titulo:'Grandezas diretamente proporcionais II', arquivo:'aulas/9-ano/1-tri/grandezas-proporcionais/aula-2-grandezas-diretamente-proporcionais-ii.html' },
                  { tipo:'Aula 3', titulo:'Grandezas inversamente proporcionais I', arquivo:'aulas/9-ano/1-tri/grandezas-proporcionais/aula-3-grandezas-inversamente-proporcionais-i.html' },
                  { tipo:'Aula 4', titulo:'Grandezas inversamente proporcionais II', arquivo:'aulas/9-ano/1-tri/grandezas-proporcionais/aula-4-grandezas-inversamente-proporcionais-ii.html' }
                ]
              }
            ]
          },
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Polígonos',
                accent: 'primary',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'O que são polígonos?', arquivo:'aulas/9-ano/2-tri/poligonos/aula-1-o-que-sao-poligonos.html' },
                  { tipo:'Aula 2', titulo:'Polígonos regulares e não regulares', arquivo:'aulas/9-ano/2-tri/poligonos/aula-2-poligonos-regulares-e-nao-regulares.html' }
                ]
              },
              {
                titulo: 'Triângulos: existência e classificação',
                accent: 'growth',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Condição de existência de um triângulo', arquivo:'aulas/9-ano/2-tri/triangulos-existencia-classificacao/aula-1-condicao-de-existencia-de-um-triangulo.html' },
                  { tipo:'Aula 2', titulo:'Classificação dos triângulos quanto aos lados', arquivo:'aulas/9-ano/2-tri/triangulos-existencia-classificacao/aula-2-triangulos-quanto-aos-lados.html' },
                  { tipo:'Aula 3', titulo:'Classificação dos triângulos quanto aos ângulos', arquivo:'aulas/9-ano/2-tri/triangulos-existencia-classificacao/aula-3-triangulos-quanto-aos-angulos.html' }
                ]
              },
              {
                titulo: 'Propriedades dos triângulos',
                accent: 'growth',
                icon: 'triangle',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Soma dos ângulos internos e ângulo externo', arquivo:'aulas/9-ano/2-tri/propriedades-dos-triangulos/aula-1-soma-dos-angulos-e-angulo-externo.html' },
                  { tipo:'Aula 2', titulo:'Relações entre lados e ângulos e segmentos notáveis', arquivo:'aulas/9-ano/2-tri/propriedades-dos-triangulos/aula-2-lados-angulos-e-segmentos-notaveis.html' }
                ]
              },
              {
                titulo: 'Quadriláteros',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Classificação dos quadriláteros', arquivo:'aulas/9-ano/2-tri/quadrilateros/aula-1-classificacao-dos-quadrilateros.html' },
                  { tipo:'Aula 2', titulo:'Propriedades dos quadriláteros', arquivo:'aulas/9-ano/2-tri/quadrilateros/aula-2-propriedades-dos-quadrilateros.html' }
                ]
              },
              {
                titulo: 'Propriedades dos polígonos',
                accent: 'primary',
                icon: 'polygon',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Soma dos ângulos internos de um polígono', arquivo:'aulas/9-ano/2-tri/propriedades-dos-poligonos/aula-1-soma-dos-angulos-internos.html' },
                  { tipo:'Aula 2', titulo:'Ângulos externos dos polígonos', arquivo:'aulas/9-ano/2-tri/propriedades-dos-poligonos/aula-2-angulos-externos-dos-poligonos.html' },
                  { tipo:'Aula 3', titulo:'Diagonais de um polígono', arquivo:'aulas/9-ano/2-tri/propriedades-dos-poligonos/aula-3-diagonais-de-um-poligono.html' },
                  { tipo:'Aula 4', titulo:'Triângulos em foco I: decomposição de figuras', arquivo:'aulas/9-ano/2-tri/propriedades-dos-poligonos/aula-4-triangulos-em-foco-decomposicao.html' },
                  { tipo:'Aula 5', titulo:'Triângulos em foco II: problemas com polígonos', arquivo:'aulas/9-ano/2-tri/propriedades-dos-poligonos/aula-5-triangulos-em-foco-problemas.html' }
                ]
              },
              {
                titulo: 'Círculo e circunferência',
                accent: 'decay',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Círculo e circunferência', arquivo:'aulas/9-ano/2-tri/circulo-e-circunferencia/aula-1-circulo-e-circunferencia.html' },
                  { tipo:'Aula 2', titulo:'Elementos da circunferência', arquivo:'aulas/9-ano/2-tri/circulo-e-circunferencia/aula-2-elementos-da-circunferencia.html' },
                  { tipo:'Aula 3', titulo:'Circunferência e o número pi', arquivo:'aulas/9-ano/2-tri/circulo-e-circunferencia/aula-3-circunferencia-e-o-numero-pi.html' },
                  { tipo:'Aula 4', titulo:'Comprimento da circunferência e perímetro do círculo', arquivo:'aulas/9-ano/2-tri/circulo-e-circunferencia/aula-4-comprimento-da-circunferencia.html' }
                ]
              },
              {
                titulo: 'Ângulos na circunferência e problemas',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ângulo central e ângulo inscrito I', arquivo:'aulas/9-ano/2-tri/angulos-na-circunferencia/aula-1-angulo-central-e-inscrito-i.html' },
                  { tipo:'Aula 2', titulo:'Ângulo central e ângulo inscrito II', arquivo:'aulas/9-ano/2-tri/angulos-na-circunferencia/aula-2-angulo-central-e-inscrito-ii.html' },
                  { tipo:'Aula 3', titulo:'Problemas que envolvem círculo e circunferência I', arquivo:'aulas/9-ano/2-tri/angulos-na-circunferencia/aula-3-problemas-com-circulo-i.html' },
                  { tipo:'Aula 4', titulo:'Problemas que envolvem círculo e circunferência II', arquivo:'aulas/9-ano/2-tri/angulos-na-circunferencia/aula-4-problemas-com-circulo-ii.html' }
                ]
              },
              {
                titulo: 'Recomposição Matemática · versão compacta',
                accent: 'primary',
                icon: 'polygon',
                itens: [
                  { tipo:'Aulas 21–22', titulo:'Polígonos', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-1-poligonos.html' },
                  { tipo:'Aulas 23–27', titulo:'Triângulos', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-2-triangulos.html' },
                  { tipo:'Aulas 28–29', titulo:'Quadriláteros', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-3-quadrilateros.html' },
                  { tipo:'Aulas 30–34', titulo:'Propriedades dos polígonos', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-4-propriedades-poligonos.html' },
                  { tipo:'Aulas 35–38', titulo:'Circunferência e o número π', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-5-circunferencia.html' },
                  { tipo:'Aulas 39–42', titulo:'Ângulos na circunferência e problemas', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-6-angulos-problemas.html' },
                  { tipo:'Guia', titulo:'Guia — Recomposição Matemática', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/infografico.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Polígonos (aulas 21–22)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-1-poligonos-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Triângulos (aulas 23–27)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-2-triangulos-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Quadriláteros (aulas 28–29)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-3-quadrilateros-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Propriedades dos polígonos (aulas 30–34)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-4-propriedades-poligonos-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Circunferência (aulas 35–38)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-5-circunferencia-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Exercícios e problemas · Ângulos e problemas (aulas 39–42)', arquivo:'aulas/9-ano/2-tri/recomposicao-matematica/aula-6-angulos-problemas-atividade-pratica.html' }
                ]
              }
            ]
          },
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Comprimento e perímetro',
                accent: 'primary',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Unidades de medida de comprimento', arquivo:'aulas/9-ano/3-tri/comprimento-e-perimetro/aula-1-unidades-de-comprimento.html' },
                  { tipo:'Aula 2', titulo:'Perímetro de figuras planas I', arquivo:'aulas/9-ano/3-tri/comprimento-e-perimetro/aula-2-perimetro-de-figuras-planas-i.html' },
                  { tipo:'Aula 3', titulo:'Perímetro de figuras planas II', arquivo:'aulas/9-ano/3-tri/comprimento-e-perimetro/aula-3-perimetro-de-figuras-planas-ii.html' }
                ]
              },
              {
                titulo: 'Área de figuras planas',
                accent: 'growth',
                icon: 'grid',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Área de figuras planas I: o conceito e o retângulo', arquivo:'aulas/9-ano/3-tri/area-de-figuras-planas/aula-1-area-de-figuras-planas-i.html' },
                  { tipo:'Aula 2', titulo:'Área de figuras planas II: triângulo, paralelogramo, trapézio e losango', arquivo:'aulas/9-ano/3-tri/area-de-figuras-planas/aula-2-area-de-figuras-planas-ii.html' },
                  { tipo:'Aula 3', titulo:'Área de figuras planas III: figuras compostas e problemas', arquivo:'aulas/9-ano/3-tri/area-de-figuras-planas/aula-3-area-de-figuras-planas-iii.html' }
                ]
              },
              {
                titulo: 'Área do círculo',
                accent: 'decay',
                icon: 'pie',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Área do círculo I', arquivo:'aulas/9-ano/3-tri/area-do-circulo/aula-1-area-do-circulo-i.html' },
                  { tipo:'Aula 2', titulo:'Área do círculo II: coroa, setor e figuras compostas', arquivo:'aulas/9-ano/3-tri/area-do-circulo/aula-2-area-do-circulo-ii.html' }
                ]
              },
              {
                titulo: 'Volumes',
                accent: 'primary',
                icon: 'cube',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Cálculo do volume do cubo', arquivo:'aulas/9-ano/3-tri/volumes/aula-1-volume-do-cubo.html' },
                  { tipo:'Aula 2', titulo:'Cálculo do volume do bloco retangular', arquivo:'aulas/9-ano/3-tri/volumes/aula-2-volume-do-bloco-retangular.html' },
                  { tipo:'Aula 3', titulo:'Volume de prismas', arquivo:'aulas/9-ano/3-tri/volumes/aula-3-volume-de-prismas.html' },
                  { tipo:'Aula 4', titulo:'Volume do cilindro I', arquivo:'aulas/9-ano/3-tri/volumes/aula-4-volume-do-cilindro-i.html' },
                  { tipo:'Aula 5', titulo:'Volume do cilindro II', arquivo:'aulas/9-ano/3-tri/volumes/aula-5-volume-do-cilindro-ii.html' }
                ]
              },
              {
                titulo: 'Expressões algébricas',
                accent: 'growth',
                icon: 'algebra',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Cálculo do valor numérico de expressões algébricas I', arquivo:'aulas/9-ano/3-tri/expressoes-algebricas/aula-1-valor-numerico-i.html' },
                  { tipo:'Aula 2', titulo:'Cálculo do valor numérico de expressões algébricas II', arquivo:'aulas/9-ano/3-tri/expressoes-algebricas/aula-2-valor-numerico-ii.html' },
                  { tipo:'Aula 3', titulo:'Resolução de problemas com expressões algébricas', arquivo:'aulas/9-ano/3-tri/expressoes-algebricas/aula-3-problemas-com-expressoes-algebricas.html' }
                ]
              },
              {
                titulo: 'Sequências e padrões',
                accent: 'decay',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Descobrindo padrões em sequências figuradas', arquivo:'aulas/9-ano/3-tri/sequencias-e-padroes/aula-1-padroes-em-sequencias-figuradas.html' },
                  { tipo:'Aula 2', titulo:'Descobrindo padrões em sequências numéricas', arquivo:'aulas/9-ano/3-tri/sequencias-e-padroes/aula-2-padroes-em-sequencias-numericas.html' },
                  { tipo:'Aula 3', titulo:'Representação algébrica de sequências', arquivo:'aulas/9-ano/3-tri/sequencias-e-padroes/aula-3-representacao-algebrica-de-sequencias.html' },
                  { tipo:'Aula 4', titulo:'Expressões algébricas em sequências numéricas', arquivo:'aulas/9-ano/3-tri/sequencias-e-padroes/aula-4-expressoes-algebricas-em-sequencias.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< recomp-mat
  {
    id: 'educacao-financeira',
    nome: 'Educação Financeira',
    icon: 'coin',
    lede: 'Material interativo de Educação Financeira para a 1ª, a 2ª e a 3ª séries do Ensino Médio — slides navegáveis, infográficos e atividades, prontos para projetar em sala.',
    CATALOG: [
      {
        ano: '3° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Jogos de Azar e a Ilusão do Dinheiro Fácil',
                accent: 'danger',
                icon: 'dice',
                itens: [
                  { tipo:'Aula', titulo:'A matemática por trás das bets', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Jogos de Azar', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Apostas no ENEM: questões reais', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Simulador: A Casa Sempre Ganha', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Jogos de Azar: Trilha de Problemas', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Empreendedorismo: do Perfil ao Plano de Negócios',
                accent: 'growth',
                icon: 'briefcase',
                itens: [
                  { tipo:'Aula 1', titulo:'Perfil e pesquisa de mercado', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-1-perfil-pesquisa.html' },
                  { tipo:'Aula 2', titulo:'Ideia e proposta de valor', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-2-ideia-proposta.html' },
                  { tipo:'Aula 3', titulo:'Canais, parcerias e custos', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-3-canais-custos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Empreendedorismo', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Perfil e Pesquisa de Mercado', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-1-perfil-pesquisa-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Monte sua Pesquisa', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-1-perfil-pesquisa-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Prática: Perfil e Pesquisa', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-1-perfil-pesquisa-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Ideia e Proposta de Valor', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-2-ideia-proposta-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · O Caminho do Empreendedor', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-2-ideia-proposta-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Prática: Minha Proposta de Valor', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-2-ideia-proposta-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 3 · Canais, Parcerias e Custos', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-3-canais-custos-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 3 · Calculadora do Ponto de Equilíbrio', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-3-canais-custos-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 3 · Prática: Custos em Progressão', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/aula-3-canais-custos-atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: '2° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Investimentos e Renda Fixa',
                accent: 'primary',
                icon: 'coin',
                itens: [
                  { tipo:'Aula 1', titulo:'Investir e renda fixa: Tesouro, CDB, LCI e LCA', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-1-investir-renda-fixa.html' },
                  { tipo:'Aula 2', titulo:'Juros compostos, tempo e carteira', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-2-juros-compostos-carteira.html' },
                  { tipo:'Guia', titulo:'Guia visual — Investimentos e Renda Fixa', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Investir e renda fixa no ENEM', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Memória da renda fixa', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · Do colchão à LCI', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Juros compostos e carteira no ENEM', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Monte a carteira certa', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · O tempo trabalha por você', arquivo:'educacao-financeira/2-ano/3-tri/investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Renda Variável e Bolsa de Valores',
                accent: 'growth',
                icon: 'candles',
                itens: [
                  { tipo:'Aula', titulo:'Ser sócio: ações, FIIs, ETFs e a Bolsa', arquivo:'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Renda Variável e Bolsa', arquivo:'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Renda variável e Bolsa no ENEM', arquivo:'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Pregão ao vivo: 12 dias na Bolsa', arquivo:'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'A Bolsa na ponta do lápis', arquivo:'educacao-financeira/2-ano/3-tri/renda-variavel-bolsa/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Apostas, Bets e Cassino',
                accent: 'danger',
                icon: 'dice',
                itens: [
                  { tipo:'Aula', titulo:'A ilusão do dinheiro fácil', arquivo:'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Apostas, Bets e Cassino', arquivo:'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'A matemática das apostas no ENEM', arquivo:'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detector de anúncios enganosos', arquivo:'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'A matemática da casa', arquivo:'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Criptoativos',
                accent: 'decay',
                icon: 'chain',
                itens: [
                  { tipo:'Aula', titulo:'Cripto: tecnologia, volatilidade e escolhas responsáveis', arquivo:'educacao-financeira/2-ano/3-tri/criptoativos/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Criptoativos', arquivo:'educacao-financeira/2-ano/3-tri/criptoativos/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Criptoativos no ENEM', arquivo:'educacao-financeira/2-ano/3-tri/criptoativos/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Golpe ou legítimo?', arquivo:'educacao-financeira/2-ano/3-tri/criptoativos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Contas de cripto', arquivo:'educacao-financeira/2-ano/3-tri/criptoativos/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
              {
                titulo: 'Crédito, Juros e Financiamento',
                accent: 'danger',
                icon: 'coin',
                itens: [
                  { tipo:'Aula 1', titulo:'Cheque especial e juros compostos', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-1-cheque-especial-juros-compostos.html' },
                  { tipo:'Aula 2', titulo:'Financiamento, prestações e calculadora financeira', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-2-financiamento-calculadora-financeira.html' },
                  { tipo:'Aula 3', titulo:'Cartão de crédito, nome limpo e score', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score.html' },
                  { tipo:'Guia', titulo:'Guia visual — Crédito, Juros e Financiamento', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Crédito e juros compostos no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Quem eu pago primeiro?', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · A bola de neve da dívida', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Financiamento e prestações no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · Ranking das ofertas de parcelamento', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Parcelas, taxas e prazos', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 3 · Cartão de crédito e score no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 3 · Score Quest', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 3 · Fatura, limite e score', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Direitos do Consumidor',
                accent: 'decay',
                icon: 'grid',
                itens: [
                  { tipo:'Aula', titulo:'Código de Defesa do Consumidor e PROCON', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Direitos do Consumidor', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Consumidor e matemática no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Júri do consumidor', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Contas de quem conhece seus direitos', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Consumo Consciente',
                accent: 'growth',
                icon: 'dots',
                itens: [
                  { tipo:'Aula 1', titulo:'Armadilhas de consumo e consumismo', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo.html' },
                  { tipo:'Aula 2', titulo:'Compras inteligentes: supermercado e promoções', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Consumo Consciente', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 1 · Armadilhas de consumo no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 1 · Caça às armadilhas', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 1 · As contas por trás das armadilhas', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo-atividade-pratica.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Aula 2 · Supermercado e promoções no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes-atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Aula 2 · O carrinho do mercado', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes-atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Aula 2 · Promoção de verdade?', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes-atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Apostas, Bets e Cassino',
                accent: 'danger',
                icon: 'dice',
                itens: [
                  { tipo:'Aula', titulo:'A ilusão do dinheiro fácil', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Apostas, Bets e Cassino', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'A matemática das apostas no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detector de anúncios enganosos', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'A matemática da casa', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Perfil Empreendedor',
                accent: 'primary',
                icon: 'briefcase',
                itens: [
                  { tipo:'Aula', titulo:'Perfil empreendedor: o quê, como e por quê', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/aula.html' },
                  { tipo:'Guia', titulo:'Guia visual — Perfil Empreendedor', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/infografico.html' },
                  { tipo:'Atividade', sub:'ENEM', titulo:'Números do empreendedor no ENEM', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/atividade-enem.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Você é o dono da barraca', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'As contas da barraca', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // >>> ena-profmat
  {
    id: 'ena-profmat',
    oculta: true, // escondida do site (catálogo, Home, barra lateral, simulados e landing); os arquivos ficam em ena-profmat/
    nome: 'ENA · PROFMAT',
    icon: 'sigma',
    destaque: { titulo: 'Trilha de estudo guiada pelo edital', texto: '14 itens do edital, 9 fases e calendário automático. Comece por aqui.', url: 'ena-profmat/trilha-de-estudo.html' },
    lede: 'Preparação para o Exame Nacional de Acesso ao PROFMAT (ENA): aulas completas em slides, guias visuais e atividades de cada tópico cobrado — da porcentagem à geometria espacial —, com as questões que já caíram em 2025 e 2026 resolvidas passo a passo.',
    CATALOG: [
      {
        ano: 'Parte 1 · Aritmética e Lógica',
        trimestres: [
          {
            nome: 'Conjuntos numéricos e capítulos 1 a 4',
            unidades: [
              {
                titulo: 'Conjuntos Numéricos e Intervalos',
                accent: 'primary',
                icon: 'sigma',
                itens: [
                  { tipo:'Aula 1', titulo:'Naturais, inteiros, racionais e reais', arquivo:'ena-profmat/17-conjuntos-numericos/aula-1-naturais-inteiros-racionais-reais.html' },
                  { tipo:'Aula 2', titulo:'Reta real, intervalos e operações', arquivo:'ena-profmat/17-conjuntos-numericos/aula-2-intervalos-reta-real.html' },
                  { tipo:'Guia', titulo:'Guia visual — Conjuntos Numéricos e Intervalos', arquivo:'ena-profmat/17-conjuntos-numericos/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Conjuntos numéricos no estilo ENA', arquivo:'ena-profmat/17-conjuntos-numericos/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Que tipo de número é?', arquivo:'ena-profmat/17-conjuntos-numericos/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Conjuntos numéricos: trilha de desafios', arquivo:'ena-profmat/17-conjuntos-numericos/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Porcentagem, Razão e Proporção',
                accent: 'growth',
                icon: 'percent',
                itens: [
                  { tipo:'Aula 1', titulo:'Porcentagem: pense em fatores', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/aula-1-porcentagem.html' },
                  { tipo:'Aula 2', titulo:'Razão, proporção e taxas de trabalho', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/aula-2-razao-proporcao-taxas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Porcentagem, Razão e Proporção', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Porcentagem e proporção no estilo ENA', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Direta, inversa ou nenhuma?', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Porcentagem e taxas: trilha de desafios', arquivo:'ena-profmat/01-porcentagem-razao-proporcao/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Números Inteiros',
                accent: 'primary',
                icon: 'numbers',
                itens: [
                  { tipo:'Aula 1', titulo:'Restos, divisibilidade, MMC e MDC', arquivo:'ena-profmat/02-numeros-inteiros/aula-1-restos-divisibilidade-mmc-mdc.html' },
                  { tipo:'Aula 2', titulo:'Paridade, algarismos e somas de inteiros', arquivo:'ena-profmat/02-numeros-inteiros/aula-2-paridade-algarismos-somas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Números Inteiros', arquivo:'ena-profmat/02-numeros-inteiros/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Números inteiros no estilo ENA', arquivo:'ena-profmat/02-numeros-inteiros/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive de resoluções erradas', arquivo:'ena-profmat/02-numeros-inteiros/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Inteiros: trilha de desafios', arquivo:'ena-profmat/02-numeros-inteiros/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Conjuntos e Contagem de Elementos',
                accent: 'decay',
                icon: 'venn',
                itens: [
                  { tipo:'Aula', titulo:'Conjuntos e contagem de elementos', arquivo:'ena-profmat/03-conjuntos-contagem/aula-conjuntos-contagem.html' },
                  { tipo:'Guia', titulo:'Guia visual — Conjuntos e Contagem de Elementos', arquivo:'ena-profmat/03-conjuntos-contagem/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Conjuntos no estilo ENA', arquivo:'ena-profmat/03-conjuntos-contagem/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos conjuntos', arquivo:'ena-profmat/03-conjuntos-contagem/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Contagem: trilha de desafios', arquivo:'ena-profmat/03-conjuntos-contagem/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Lógica e Demonstração',
                accent: 'primary',
                icon: 'logic',
                itens: [
                  { tipo:'Aula 1', titulo:'Lógica: conectivos e negações', arquivo:'ena-profmat/04-logica-demonstracao/aula-1-conectivos-negacoes.html' },
                  { tipo:'Aula 2', titulo:'Contraexemplos, eliminação e demonstração', arquivo:'ena-profmat/04-logica-demonstracao/aula-2-contraexemplos-eliminacao-demonstracao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Lógica e Demonstração', arquivo:'ena-profmat/04-logica-demonstracao/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Lógica no estilo ENA', arquivo:'ena-profmat/04-logica-demonstracao/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Monte a demonstração', arquivo:'ena-profmat/04-logica-demonstracao/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Lógica: trilha de desafios', arquivo:'ena-profmat/04-logica-demonstracao/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: 'Parte 2 · Álgebra e Funções',
        trimestres: [
          {
            nome: '1º grau, capítulos 5 a 8 e matrizes',
            unidades: [
              {
                titulo: 'Equações, Inequações e Sistemas do 1º Grau',
                accent: 'growth',
                icon: 'algebra',
                itens: [
                  { tipo:'Aula 1', titulo:'Equações e inequações do 1º grau', arquivo:'ena-profmat/18-primeiro-grau-sistemas/aula-1-equacoes-inequacoes-primeiro-grau.html' },
                  { tipo:'Aula 2', titulo:'Sistemas lineares e problemas', arquivo:'ena-profmat/18-primeiro-grau-sistemas/aula-2-sistemas-lineares-problemas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Equações, Inequações e Sistemas do 1º Grau', arquivo:'ena-profmat/18-primeiro-grau-sistemas/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'1º grau no estilo ENA', arquivo:'ena-profmat/18-primeiro-grau-sistemas/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive do 1º grau', arquivo:'ena-profmat/18-primeiro-grau-sistemas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'1º grau: trilha de desafios', arquivo:'ena-profmat/18-primeiro-grau-sistemas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Álgebra: Produtos Notáveis, Radicais e Módulo',
                accent: 'primary',
                icon: 'algebra',
                itens: [
                  { tipo:'Aula 1', titulo:'Produtos notáveis e fatoração', arquivo:'ena-profmat/05-algebra/aula-1-produtos-notaveis-fatoracao.html' },
                  { tipo:'Aula 2', titulo:'Potências, radicais, módulo e ordem', arquivo:'ena-profmat/05-algebra/aula-2-potencias-radicais-modulo-ordem.html' },
                  { tipo:'Guia', titulo:'Guia visual — Álgebra: Produtos Notáveis, Radicais e Módulo', arquivo:'ena-profmat/05-algebra/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Álgebra no estilo ENA', arquivo:'ena-profmat/05-algebra/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Caça-erros de álgebra', arquivo:'ena-profmat/05-algebra/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Álgebra: trilha de desafios', arquivo:'ena-profmat/05-algebra/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Equações, Inequações e Sistemas',
                accent: 'growth',
                icon: 'algebra',
                itens: [
                  { tipo:'Aula 1', titulo:'Equação do 2º grau, Girard e sinal', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/aula-1-segundo-grau-girard-sinal.html' },
                  { tipo:'Aula 2', titulo:'Fracionárias, modulares, irracionais e sistemas', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/aula-2-fracionarias-modulares-irracionais-sistemas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Equações, Inequações e Sistemas', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Equações e inequações no estilo ENA', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual método resolve?', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Equações: trilha de desafios', arquivo:'ena-profmat/06-equacoes-inequacoes-sistemas/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Funções Afim e Quadrática',
                accent: 'primary',
                icon: 'parabola',
                itens: [
                  { tipo:'Aula 1', titulo:'Função afim e regiões do plano', arquivo:'ena-profmat/07-funcoes-afim-quadratica/aula-1-funcao-afim-regioes.html' },
                  { tipo:'Aula 2', titulo:'Função quadrática, vértice e otimização', arquivo:'ena-profmat/07-funcoes-afim-quadratica/aula-2-funcao-quadratica-otimizacao.html' },
                  { tipo:'Guia', titulo:'Guia visual — Funções Afim e Quadrática', arquivo:'ena-profmat/07-funcoes-afim-quadratica/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Funções no estilo ENA', arquivo:'ena-profmat/07-funcoes-afim-quadratica/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: funções', arquivo:'ena-profmat/07-funcoes-afim-quadratica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Funções: trilha de desafios', arquivo:'ena-profmat/07-funcoes-afim-quadratica/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Sequências: PA, PG e Somas',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aula 1', titulo:'Progressão aritmética e de Sₙ para aₙ', arquivo:'ena-profmat/08-sequencias-pa-pg/aula-1-progressao-aritmetica.html' },
                  { tipo:'Aula 2', titulo:'Progressão geométrica e sequências recursivas', arquivo:'ena-profmat/08-sequencias-pa-pg/aula-2-progressao-geometrica-recursivas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Sequências: PA, PG e Somas', arquivo:'ena-profmat/08-sequencias-pa-pg/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Sequências no estilo ENA', arquivo:'ena-profmat/08-sequencias-pa-pg/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória das fórmulas de sequências', arquivo:'ena-profmat/08-sequencias-pa-pg/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Sequências: trilha de desafios', arquivo:'ena-profmat/08-sequencias-pa-pg/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Matrizes, Determinantes e Sistemas',
                accent: 'growth',
                icon: 'grid',
                itens: [
                  { tipo:'Aula 1', titulo:'Matrizes: operações e inversa', arquivo:'ena-profmat/20-matrizes-determinantes/aula-1-matrizes-operacoes-inversa.html' },
                  { tipo:'Aula 2', titulo:'Determinantes e sistemas lineares', arquivo:'ena-profmat/20-matrizes-determinantes/aula-2-determinantes-sistemas-cramer.html' },
                  { tipo:'Guia', titulo:'Guia visual — Matrizes, Determinantes e Sistemas', arquivo:'ena-profmat/20-matrizes-determinantes/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Matrizes no estilo ENA', arquivo:'ena-profmat/20-matrizes-determinantes/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive de matrizes', arquivo:'ena-profmat/20-matrizes-determinantes/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Matrizes: trilha de desafios', arquivo:'ena-profmat/20-matrizes-determinantes/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: 'Parte 3 · Contagem e Dados',
        trimestres: [
          {
            nome: 'Capítulos 9 a 11',
            unidades: [
              {
                titulo: 'Análise Combinatória',
                accent: 'primary',
                icon: 'combo',
                itens: [
                  { tipo:'Aula 1', titulo:'Princípio multiplicativo, arranjo e combinação', arquivo:'ena-profmat/09-analise-combinatoria/aula-1-principios-arranjo-permutacao-combinacao.html' },
                  { tipo:'Aula 2', titulo:'Anagramas, mesa redonda e outros padrões', arquivo:'ena-profmat/09-analise-combinatoria/aula-2-anagramas-circular-complementar-binomio.html' },
                  { tipo:'Guia', titulo:'Guia visual — Análise Combinatória', arquivo:'ena-profmat/09-analise-combinatoria/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Combinatória no estilo ENA', arquivo:'ena-profmat/09-analise-combinatoria/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual técnica de contagem?', arquivo:'ena-profmat/09-analise-combinatoria/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Contagem: trilha de desafios', arquivo:'ena-profmat/09-analise-combinatoria/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Probabilidade',
                accent: 'decay',
                icon: 'dice',
                itens: [
                  { tipo:'Aula', titulo:'Probabilidade: contagem e fração', arquivo:'ena-profmat/10-probabilidade/aula-probabilidade.html' },
                  { tipo:'Guia', titulo:'Guia visual — Probabilidade', arquivo:'ena-profmat/10-probabilidade/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Probabilidade no estilo ENA', arquivo:'ena-profmat/10-probabilidade/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: probabilidade', arquivo:'ena-profmat/10-probabilidade/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Probabilidade: trilha de desafios', arquivo:'ena-profmat/10-probabilidade/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Estatística Descritiva',
                accent: 'growth',
                icon: 'bars',
                itens: [
                  { tipo:'Aula', titulo:'Média, mediana, moda e dispersão', arquivo:'ena-profmat/11-estatistica/aula-estatistica-descritiva.html' },
                  { tipo:'Guia', titulo:'Guia visual — Estatística Descritiva', arquivo:'ena-profmat/11-estatistica/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Estatística no estilo ENA', arquivo:'ena-profmat/11-estatistica/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Detetive de estatística', arquivo:'ena-profmat/11-estatistica/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Estatística: trilha de desafios', arquivo:'ena-profmat/11-estatistica/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: 'Parte 4 · Geometria',
        trimestres: [
          {
            nome: 'Triângulos e capítulos 12 a 14',
            unidades: [
              {
                titulo: 'Triângulos: Congruência e Semelhança',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 1', titulo:'Existência, congruência e pontos notáveis', arquivo:'ena-profmat/19-congruencia-semelhanca/aula-1-triangulos-congruencia-pontos-notaveis.html' },
                  { tipo:'Aula 2', titulo:'Semelhança, Tales e bissetriz', arquivo:'ena-profmat/19-congruencia-semelhanca/aula-2-semelhanca-tales-bissetriz.html' },
                  { tipo:'Guia', titulo:'Guia visual — Triângulos: Congruência e Semelhança', arquivo:'ena-profmat/19-congruencia-semelhanca/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Triângulos no estilo ENA', arquivo:'ena-profmat/19-congruencia-semelhanca/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos triângulos', arquivo:'ena-profmat/19-congruencia-semelhanca/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Triângulos: trilha de desafios', arquivo:'ena-profmat/19-congruencia-semelhanca/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Geometria Plana',
                accent: 'primary',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 1', titulo:'Ângulos, semelhança e triângulos retângulos', arquivo:'ena-profmat/12-geometria-plana/aula-1-angulos-semelhanca-triangulos.html' },
                  { tipo:'Aula 2', titulo:'Áreas e razões de áreas', arquivo:'ena-profmat/12-geometria-plana/aula-2-areas-razoes-de-areas.html' },
                  { tipo:'Aula 3', titulo:'Círculo e truques para gabaritar', arquivo:'ena-profmat/12-geometria-plana/aula-3-circulo-truques.html' },
                  { tipo:'Guia', titulo:'Guia visual — Geometria Plana', arquivo:'ena-profmat/12-geometria-plana/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Geometria plana no estilo ENA', arquivo:'ena-profmat/12-geometria-plana/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Qual ferramenta resolve?', arquivo:'ena-profmat/12-geometria-plana/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Geometria plana: trilha de desafios', arquivo:'ena-profmat/12-geometria-plana/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Trigonometria',
                accent: 'decay',
                icon: 'wave',
                itens: [
                  { tipo:'Aula 1', titulo:'Trigonometria no triângulo retângulo', arquivo:'ena-profmat/13-trigonometria/aula-1-razoes-notaveis-identidades.html' },
                  { tipo:'Aula 2', titulo:'Triângulo qualquer, radianos e fórmulas', arquivo:'ena-profmat/13-trigonometria/aula-2-triangulo-qualquer-radianos-formulas.html' },
                  { tipo:'Guia', titulo:'Guia visual — Trigonometria', arquivo:'ena-profmat/13-trigonometria/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Trigonometria no estilo ENA', arquivo:'ena-profmat/13-trigonometria/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória da trigonometria', arquivo:'ena-profmat/13-trigonometria/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Trigonometria: trilha de desafios', arquivo:'ena-profmat/13-trigonometria/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Geometria Espacial',
                accent: 'success',
                icon: 'cube',
                itens: [
                  { tipo:'Aula', titulo:'Volumes, poliedros e recipiente inclinado', arquivo:'ena-profmat/14-geometria-espacial/aula-volumes-poliedros.html' },
                  { tipo:'Guia', titulo:'Guia visual — Geometria Espacial', arquivo:'ena-profmat/14-geometria-espacial/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Geometria espacial no estilo ENA', arquivo:'ena-profmat/14-geometria-espacial/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Verdadeiro ou falso: espacial', arquivo:'ena-profmat/14-geometria-espacial/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Espacial: trilha de desafios', arquivo:'ena-profmat/14-geometria-espacial/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      },
      {
        ano: 'Parte 5 · Extras e Estratégia',
        trimestres: [
          {
            nome: 'Capítulos 15 e 16',
            unidades: [
              {
                titulo: 'Tópicos Complementares (EXTRA)',
                accent: 'primary',
                icon: 'planet',
                itens: [
                  { tipo:'Aula 1', titulo:'Geometria analítica, exponencial e logaritmo', arquivo:'ena-profmat/15-topicos-complementares/aula-1-analitica-exponencial-logaritmo.html' },
                  { tipo:'Aula 2', titulo:'Polinômios, complexos, matrizes e financeira', arquivo:'ena-profmat/15-topicos-complementares/aula-2-polinomios-complexos-matrizes-financeira.html' },
                  { tipo:'Guia', titulo:'Guia visual — Tópicos Complementares (EXTRA)', arquivo:'ena-profmat/15-topicos-complementares/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Tópicos extras no estilo ENA', arquivo:'ena-profmat/15-topicos-complementares/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Memória dos tópicos extras', arquivo:'ena-profmat/15-topicos-complementares/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Tópicos extras: trilha de desafios', arquivo:'ena-profmat/15-topicos-complementares/atividade-pratica.html' }
                ]
              },
              {
                titulo: 'Estratégia de Prova e Folha de Fórmulas',
                accent: 'growth',
                icon: 'flag',
                itens: [
                  { tipo:'Aula', titulo:'Estratégia, tempo e plano de estudo', arquivo:'ena-profmat/16-estrategia-de-prova/aula-estrategia-de-prova.html' },
                  { tipo:'Guia', titulo:'Guia visual — Estratégia de Prova e Folha de Fórmulas', arquivo:'ena-profmat/16-estrategia-de-prova/infografico.html' },
                  { tipo:'Atividade', sub:'ENA', titulo:'Simulado relâmpago no estilo ENA', arquivo:'ena-profmat/16-estrategia-de-prova/atividade-ena.html' },
                  { tipo:'Atividade', sub:'Criativa', titulo:'Em qual capítulo cai?', arquivo:'ena-profmat/16-estrategia-de-prova/atividade-criativa.html' },
                  { tipo:'Atividade', sub:'Prática', titulo:'Trilha mista: um pouco de tudo', arquivo:'ena-profmat/16-estrategia-de-prova/atividade-pratica.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< ena-profmat
  // >>> novas-ingles
  {
    id: 'ingles',
    nome: 'Língua Inglesa',
    icon: 'flag',
    lede: 'Inglês para a escola e para o ENEM: vocabulário, gramática e leitura.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Vocabulário e comunicação',
                accent: 'growth',
                icon: 'flag',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Hello! Cumprimentos e apresentações', arquivo:'aulas/ingles/6-ano/1-tri/vocabulario-e-comunicacao/aula-1-hello-greetings-and-introductions.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-ingles
  // >>> novas-arte
  {
    id: 'arte',
    nome: 'Arte',
    icon: 'wave',
    lede: 'Linguagens artísticas e história da arte.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Artes visuais',
                accent: 'decay',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Elementos da linguagem visual: ponto, linha, forma e cor', arquivo:'aulas/arte/6-ano/1-tri/artes-visuais/aula-1-elementos-da-linguagem-visual.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-arte
  // >>> novas-educacao-fisica
  {
    id: 'educacao-fisica',
    nome: 'Educação Física',
    icon: 'stairs',
    lede: 'Movimento, esporte, saúde e cultura corporal.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Esportes',
                accent: 'growth',
                icon: 'stairs',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'O que é esporte: classificação e fundamentos', arquivo:'aulas/educacao-fisica/6-ano/1-tri/esportes/aula-1-esporte-classificacao-e-fundamentos.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-educacao-fisica
  // >>> novas-ciencias
  {
    id: 'ciencias',
    nome: 'Ciências',
    icon: 'venn',
    lede: 'Ciências da Natureza no Ensino Fundamental.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Vida e evolução',
                accent: 'growth',
                icon: 'venn',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'O que é vida? Características dos seres vivos e a célula', arquivo:'aulas/ciencias/6-ano/1-tri/vida-e-evolucao/aula-1-o-que-e-vida-e-as-celulas.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-ciencias
  // >>> novas-historia
  {
    id: 'historia',
    nome: 'História',
    icon: 'chain',
    lede: 'Do mundo antigo ao Brasil contemporâneo.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Antiguidade e Idade Média',
                accent: 'decay',
                icon: 'chain',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Como a História é contada: fontes, tempo e periodização', arquivo:'aulas/historia/6-ano/1-tri/antiguidade-e-idade-media/aula-1-como-a-historia-e-contada.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-historia
  // >>> novas-geografia
  {
    id: 'geografia',
    nome: 'Geografia',
    icon: 'planet',
    lede: 'Espaço geográfico, natureza, população e economia.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Espaço e cartografia',
                accent: 'growth',
                icon: 'planet',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Orientação e leitura de mapas: pontos cardeais, escala e legenda', arquivo:'aulas/geografia/6-ano/1-tri/espaco-e-cartografia/aula-1-orientacao-e-leitura-de-mapas.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-geografia
  // >>> novas-fisica
  {
    id: 'fisica',
    nome: 'Física',
    icon: 'wave',
    lede: 'Física do Ensino Médio.',
    CATALOG: [
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Mecânica',
                accent: 'primary',
                icon: 'wave',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Movimento: referencial, deslocamento e velocidade média', arquivo:'aulas/fisica/1-ano/1-tri/mecanica/aula-1-movimento-referencial-e-velocidade-media.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-fisica
  // >>> novas-quimica
  {
    id: 'quimica',
    nome: 'Química',
    icon: 'combo',
    lede: 'Química do Ensino Médio.',
    CATALOG: [
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Matéria e estrutura atômica',
                accent: 'decay',
                icon: 'combo',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Matéria, substâncias e misturas', arquivo:'aulas/quimica/1-ano/1-tri/materia-e-estrutura-atomica/aula-1-materia-substancias-e-misturas.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-quimica
  // >>> novas-biologia
  {
    id: 'biologia',
    nome: 'Biologia',
    icon: 'curve-up',
    lede: 'Biologia do Ensino Médio.',
    CATALOG: [
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Citologia e genética',
                accent: 'growth',
                icon: 'curve-up',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'A célula: membrana, citoplasma, núcleo e organelas', arquivo:'aulas/biologia/1-ano/1-tri/citologia-e-genetica/aula-1-a-celula-organelas-e-membrana.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-biologia
  // >>> novas-filosofia
  {
    id: 'filosofia',
    nome: 'Filosofia',
    icon: 'logic',
    lede: 'Pensamento filosófico para o Ensino Médio.',
    CATALOG: [
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Introdução à Filosofia',
                accent: 'primary',
                icon: 'logic',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'O que é Filosofia? Do mito à razão', arquivo:'aulas/filosofia/1-ano/1-tri/introducao-a-filosofia/aula-1-o-que-e-filosofia-mito-e-razao.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-filosofia
  // >>> novas-sociologia
  {
    id: 'sociologia',
    nome: 'Sociologia',
    icon: 'bars',
    lede: 'Sociologia para o Ensino Médio.',
    CATALOG: [
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Cultura e sociedade',
                accent: 'decay',
                icon: 'bars',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'O olhar sociológico e o conceito de cultura', arquivo:'aulas/sociologia/1-ano/1-tri/cultura-e-sociedade/aula-1-o-olhar-sociologico-e-o-conceito-de-cultura.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-sociologia
  // >>> padrao-portugues
  {
    id: 'portugues',
    nome: 'Língua Portuguesa',
    icon: 'dots',
    lede: 'Leitura, gramática, produção de texto e literatura, do 6º ano ao 3º ano do Ensino Médio.',
    CATALOG: [
      {
        ano: '6° Ano',
        trimestres: [
          {
            nome: '1° Trimestre',
            unidades: [
              {
                titulo: 'Leitura e interpretação',
                accent: 'primary',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'Ler para compreender: ideia central e informações explícitas', arquivo:'aulas/portugues/6-ano/1-tri/leitura-e-interpretacao/aula-1-ler-para-compreender-ideia-central-e-informacoes-explicitas.html' },
                  { tipo:'Aula 2', titulo:'Informações implícitas e inferências', arquivo:'aulas/portugues/6-ano/1-tri/leitura-e-interpretacao/aula-2-informacoes-implicitas-e-inferencias.html' },
                  { tipo:'Aula 3', titulo:'Gêneros textuais: bilhete, aviso e notícia', arquivo:'aulas/portugues/6-ano/1-tri/leitura-e-interpretacao/aula-3-generos-textuais-bilhete-aviso-e-noticia.html' }
                ]
              },
              {
                titulo: 'Literatura',
                accent: 'decay',
                icon: 'dots',
                pendente: true,
                itens: [
                  { tipo:'Aula 1', titulo:'A narrativa: narrador, personagens, tempo e espaço', arquivo:'aulas/portugues/6-ano/1-tri/literatura/aula-1-a-narrativa-narrador-personagens-tempo-e-espaco.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< padrao-portugues
];

import { completar } from './catalog-extra.js';
import { aplicarRCO } from './catalog-rco.js';
import { especificarIcones } from './icones.js';

export const ICONS = {
  'gift': '<rect x="3.5" y="8" width="17" height="4.5" rx="1"/><path d="M12 8v13M5 12.5V20h14v-7.5M12 8c-1.5-3.8-5.5-3.2-4.6-.8.6 1.4 2.9.8 4.6.8ZM12 8c1.5-3.8 5.5-3.2 4.6-.8-.6 1.4-2.9.8-4.6.8Z"/>',
  'planet': '<circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(-25 12 12)"/>',
  'flag': '<path d="M6 21V4M6 5h11l-2 4 2 4H6"/>',
  'cube': '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9Z"/><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9"/>',
  'bars': '<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="8"/><rect x="12" y="8" width="3" height="12"/><rect x="17" y="14" width="3" height="6"/>',
  'pie': '<circle cx="12" cy="12" r="8.5"/><path d="M12 12V3.5M12 12l6 6"/>',
  'combo': '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.3 7.8 11 16.2M16.7 7.8 13 16.2"/>',
  'parabola': '<path d="M4 20V4M4 20h16"/><path d="M7 5C9 18 15 18 17 5"/>',
  'algebra': '<path d="M4 7l6 10M10 7 4 17M14 10h7M14 15h7"/>',
  'numbers': '<path d="M9 4 7 20M17 4l-2 16M4 9h16M3.5 15h16"/>',
  'logic': '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M7.5 12.5l3 3 6-7"/>',
  'venn': '<circle cx="9.5" cy="12" r="5.5"/><circle cx="14.5" cy="12" r="5.5"/>',
  'percent': '<circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="M19 5 5 19"/>',
  'curve-up': '<path d="M4 19 C 9,17 13,11 17,6 L20,3"/><path d="M13 3h7v7" fill="none"/>',
  'curve-log': '<path d="M4 17 C 8,17 10,15 12,11 C 14,7 17,5 20,5"/>',
  'grid': '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  'dots': '<circle cx="4.5" cy="19" r="1.6" fill="currentColor" stroke="none"/><circle cx="10" cy="14.5" r="1.6" fill="currentColor" stroke="none"/><circle cx="15.5" cy="9.5" r="1.6" fill="currentColor" stroke="none"/><circle cx="20" cy="4.5" r="1.6" fill="currentColor" stroke="none"/><path d="M4.5 19 10 14.5 15.5 9.5 20 4.5" stroke-dasharray="1 3.4"/>',
  'stairs': '<path d="M4 20h4v-4h4v-4h4v-4h4V4"/>',
  'triangle': '<path d="M4 20h16L6 4Z"/><path d="M4 20V4" stroke-dasharray="1 3"/>',
  'wave': '<path d="M3 12c2 -6 4 -6 6 0s4 6 6 0 4 -6 6 0"/>',
  'polygon': '<path d="M12 3 19.5 7.5v9L12 21 4.5 16.5v-9Z"/><path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" stroke-dasharray="1 3"/>',
  'sigma': '<path d="M6 4h12l-6 8 6 8H6l5-8Z"/>',
  'coin': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.3 9.3c0-1.2 1.2-1.8 2.7-1.8 1.7 0 2.7.8 2.7 1.9 0 2.6-5.4 1-5.4 3.6 0 1.1 1.2 1.9 2.7 1.9 1.5 0 2.7-.6 2.7-1.8"/>',
  'dice': '<rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="8.3" cy="8.3" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="15.7" cy="15.7" r="1.15" fill="currentColor" stroke="none"/>',
  'candles': '<path d="M7 4v3M7 17v3M17 6v2M17 15v4"/><rect x="5" y="7" width="4" height="10" rx="1"/><rect x="15" y="8" width="4" height="7" rx="1"/>',
  'chain': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  'briefcase': '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>'
};

// Achata o catálogo numa lista simples { label, path, tipo } — útil para
// montar um <select> de "qual aula vira atividade" no painel do professor.
export function listarAulasParaSelecao(){
  var lista = [];
  MATERIAS.forEach(function(materia){
    if(materia.oculta) return;
    materia.CATALOG.forEach(function(anoBlock){
      anoBlock.trimestres.forEach(function(tri){
        tri.unidades.forEach(function(unidade){
          unidade.itens.forEach(function(item){
            var prefixo = item.tipo === 'Atividade' ? '[Atividade ' + item.sub + '] ' : '';
            lista.push({
              path: item.arquivo,
              label: materia.nome + ' · ' + anoBlock.ano + ' · ' + unidade.titulo + ' — ' + prefixo + item.titulo,
              tipoConteudo: item.tipo
            });
          });
        });
      });
    });
  });
  return lista;
}

completar(MATERIAS);
aplicarRCO(MATERIAS); // Matemática 6º–9º ano na divisão do RCO (módulos + aulas previstas)
especificarIcones(MATERIAS, ICONS); // ícone específico de cada matéria e módulo (app/icones.js)
