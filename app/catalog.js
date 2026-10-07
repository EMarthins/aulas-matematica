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
                  { tipo:'Aula 3', titulo:'Cartão de crédito, nome limpo e score', arquivo:'educacao-financeira/1-ano/3-tri/credito-juros-financiamento/aula-3-cartao-credito-spc-score.html' }
                ]
              },
              {
                titulo: 'Direitos do Consumidor',
                accent: 'decay',
                icon: 'grid',
                itens: [
                  { tipo:'Aula', titulo:'Código de Defesa do Consumidor e PROCON', arquivo:'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/aula.html' }
                ]
              },
              {
                titulo: 'Consumo Consciente',
                accent: 'growth',
                icon: 'dots',
                itens: [
                  { tipo:'Aula 1', titulo:'Armadilhas de consumo e consumismo', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-1-armadilhas-consumismo.html' },
                  { tipo:'Aula 2', titulo:'Compras inteligentes: supermercado e promoções', arquivo:'educacao-financeira/1-ano/3-tri/consumo-consciente/aula-2-supermercado-promocoes.html' }
                ]
              },
              {
                titulo: 'Apostas, Bets e Cassino',
                accent: 'danger',
                icon: 'dice',
                itens: [
                  { tipo:'Aula', titulo:'A ilusão do dinheiro fácil', arquivo:'educacao-financeira/1-ano/3-tri/apostas-bets-cassino/aula.html' }
                ]
              },
              {
                titulo: 'Perfil Empreendedor',
                accent: 'primary',
                icon: 'briefcase',
                itens: [
                  { tipo:'Aula', titulo:'Perfil empreendedor: o quê, como e por quê', arquivo:'educacao-financeira/1-ano/3-tri/perfil-empreendedor/aula.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ICONS = {
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
