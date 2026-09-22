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
    lede: 'Material interativo de Matemática para a 2ª e a 3ª séries do Ensino Médio — slides navegáveis e infográficos de apoio, prontos para projetar em sala.',
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
                  { tipo:'Guia', titulo:'Guia visual — Sequências Numéricas', arquivo:'aulas/3-ano/3-tri/sequencias/infografico.html' }
                ]
              },
              {
                titulo: 'Progressão Aritmética',
                accent: 'growth',
                icon: 'stairs',
                itens: [
                  { tipo:'Aula 1', titulo:'Termo geral', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-1-termo-geral.html' },
                  { tipo:'Aula 2', titulo:'Soma dos termos', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/aula-2-soma-termos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Aritmética', arquivo:'aulas/3-ano/3-tri/progressao-aritmetica/infografico.html' }
                ]
              },
              {
                titulo: 'Progressão Geométrica',
                accent: 'decay',
                icon: 'curve-up',
                itens: [
                  { tipo:'Aula 1', titulo:'Termo geral', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-1-termo-geral.html' },
                  { tipo:'Aula 2', titulo:'Soma dos termos', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/aula-2-soma-termos.html' },
                  { tipo:'Guia', titulo:'Guia visual — Progressão Geométrica', arquivo:'aulas/3-ano/3-tri/progressao-geometrica/infografico.html' }
                ]
              },
              {
                titulo: 'Trigonometria no Triângulo Retângulo',
                accent: 'growth',
                icon: 'triangle',
                itens: [
                  { tipo:'Aula 1', titulo:'Relações métricas e seno', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-1-relacoes-seno.html' },
                  { tipo:'Aula 2', titulo:'Cosseno, tangente e relação fundamental', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/aula-2-cosseno-tangente.html' },
                  { tipo:'Guia', titulo:'Guia visual — Trigonometria no Triângulo', arquivo:'aulas/3-ano/3-tri/trigonometria-triangulo/infografico.html' }
                ]
              },
              {
                titulo: 'Trigonometria no Ciclo',
                accent: 'primary',
                icon: 'wave',
                itens: [
                  { tipo:'Aula 1', titulo:'Arcos, seno e cosseno no ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-1-arcos-seno-cosseno.html' },
                  { tipo:'Aula 2', titulo:'Redução ao 1º quadrante e funções', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/aula-2-reducao-funcoes.html' },
                  { tipo:'Guia', titulo:'Guia visual — Trigonometria no Ciclo', arquivo:'aulas/3-ano/3-tri/trigonometria-ciclo/infografico.html' }
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
                  { tipo:'Guia', titulo:'Guia visual — Exponenciais', arquivo:'aulas/2-ano/3-tri/exponenciais/infografico.html' }
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
                  { tipo:'Guia', titulo:'Guia visual — Logaritmos', arquivo:'aulas/2-ano/3-tri/logaritmos/infografico.html' }
                ]
              },
              {
                titulo: 'Funções',
                accent: 'primary',
                icon: 'grid',
                itens: [
                  { tipo:'Aula 1', titulo:'Por partes e propriedades', arquivo:'aulas/2-ano/3-tri/funcoes/aula-1-partes-propriedades.html' },
                  { tipo:'Aula 2', titulo:'Composição e inversa', arquivo:'aulas/2-ano/3-tri/funcoes/aula-2-composta-inversa.html' },
                  { tipo:'Guia', titulo:'Guia visual — Funções', arquivo:'aulas/2-ano/3-tri/funcoes/infografico.html' }
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
    lede: 'Material interativo de Educação Financeira para a 3ª série do Ensino Médio — slides navegáveis e infográficos de apoio, prontos para projetar em sala.',
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
                  { tipo:'Guia', titulo:'Guia visual — Jogos de Azar', arquivo:'educacao-financeira/3-ano/3-tri/jogos-de-azar/infografico.html' }
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
                  { tipo:'Guia', titulo:'Guia visual — Empreendedorismo', arquivo:'educacao-financeira/3-ano/3-tri/empreendedorismo/infografico.html' }
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
  'sigma': '<path d="M6 4h12l-6 8 6 8H6l5-8Z"/>',
  'coin': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.3 9.3c0-1.2 1.2-1.8 2.7-1.8 1.7 0 2.7.8 2.7 1.9 0 2.6-5.4 1-5.4 3.6 0 1.1 1.2 1.9 2.7 1.9 1.5 0 2.7-.6 2.7-1.8"/>',
  'dice': '<rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="8.3" cy="8.3" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="15.7" cy="15.7" r="1.15" fill="currentColor" stroke="none"/>',
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
            lista.push({
              path: item.arquivo,
              label: materia.nome + ' · ' + anoBlock.ano + ' · ' + unidade.titulo + ' — ' + item.titulo,
              tipoConteudo: item.tipo
            });
          });
        });
      });
    });
  });
  return lista;
}
