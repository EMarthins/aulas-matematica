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
      {
        ano: '3° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
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
          {
            nome: '3° Trimestre',
            unidades: [
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
      {
        ano: '9° Ano',
        trimestres: [
          {
            nome: '2° Trimestre',
            unidades: [
              {
                titulo: 'Recomposição Matemática',
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
          }
        ]
      }
    ]
  },
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
  }
  // <<< ena-profmat
];

export const ICONS = {
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
