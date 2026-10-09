// ============================================================
// Estrutura completa do catálogo: todas as turmas (6º ao 9º ano do Fundamental e 1º ao 3º ano do Médio)
// em todas as matérias. Módulos sem aulas aparecem como "em breve" e são preenchidos aos poucos:
// quando uma unidade ganha itens em app/catalog.js (mesmo ano e mesmo título), ela substitui o módulo vazio.
// ============================================================
const FUND = ['6° Ano', '7° Ano', '8° Ano', '9° Ano'], MEDIO = ['1° Ano', '2° Ano', '3° Ano'], TODOS = FUND.concat(MEDIO);
const TRI = ['1° Trimestre', '2° Trimestre', '3° Trimestre'];
const ACC = ['primary', 'growth', 'decay', 'success'];

// matérias novas (só estrutura) — { id, nome, icon, lede, anos, temas }
const NOVAS = [
  { id: 'portugues', nome: 'Língua Portuguesa', icon: 'dots', anos: TODOS, temas: ['Leitura e interpretação', 'Gramática e análise linguística', 'Produção de texto', 'Literatura'], lede: 'Leitura, gramática, produção de texto e literatura, do 6º ano ao 3º ano do Ensino Médio.' },
  { id: 'ingles', nome: 'Língua Inglesa', icon: 'flag', anos: TODOS, temas: ['Vocabulário e comunicação', 'Gramática em contexto', 'Leitura de textos'], lede: 'Inglês para a escola e para o ENEM: vocabulário, gramática e leitura.' },
  { id: 'arte', nome: 'Arte', icon: 'wave', anos: TODOS, temas: ['Artes visuais', 'Música', 'Teatro e dança'], lede: 'Linguagens artísticas e história da arte.' },
  { id: 'educacao-fisica', nome: 'Educação Física', icon: 'stairs', anos: TODOS, temas: ['Esportes', 'Ginástica e dança', 'Corpo e saúde'], lede: 'Movimento, esporte, saúde e cultura corporal.' },
  { id: 'ciencias', nome: 'Ciências', icon: 'venn', anos: FUND, temas: ['Vida e evolução', 'Matéria e energia', 'Terra e universo'], lede: 'Ciências da Natureza no Ensino Fundamental.' },
  { id: 'historia', nome: 'História', icon: 'chain', anos: TODOS, temas: ['Antiguidade e Idade Média', 'Brasil colonial e império', 'Mundo contemporâneo'], lede: 'Do mundo antigo ao Brasil contemporâneo.' },
  { id: 'geografia', nome: 'Geografia', icon: 'planet', anos: TODOS, temas: ['Espaço e cartografia', 'Natureza e sociedade', 'População e economia'], lede: 'Espaço geográfico, natureza, população e economia.' },
  { id: 'fisica', nome: 'Física', icon: 'wave', anos: MEDIO, temas: ['Mecânica', 'Termologia e óptica', 'Eletricidade e ondas'], lede: 'Física do Ensino Médio.' },
  { id: 'quimica', nome: 'Química', icon: 'combo', anos: MEDIO, temas: ['Matéria e estrutura atômica', 'Reações e soluções', 'Química orgânica'], lede: 'Química do Ensino Médio.' },
  { id: 'biologia', nome: 'Biologia', icon: 'curve-up', anos: MEDIO, temas: ['Citologia e genética', 'Ecologia', 'Fisiologia e evolução'], lede: 'Biologia do Ensino Médio.' },
  { id: 'filosofia', nome: 'Filosofia', icon: 'logic', anos: MEDIO, temas: ['Introdução à Filosofia', 'Ética e política', 'Conhecimento e ciência'], lede: 'Pensamento filosófico para o Ensino Médio.' },
  { id: 'sociologia', nome: 'Sociologia', icon: 'bars', anos: MEDIO, temas: ['Cultura e sociedade', 'Trabalho e desigualdade', 'Política e cidadania'], lede: 'Sociologia para o Ensino Médio.' }
];

// módulos por ano nas matérias que já existem
const MAT = {
  '6° Ano': ['Números naturais e operações', 'Frações e números decimais', 'Geometria plana', 'Medidas e grandezas', 'Estatística e probabilidade'],
  '7° Ano': ['Números inteiros e racionais', 'Razão, proporção e porcentagem', 'Equações do 1º grau', 'Ângulos e triângulos', 'Estatística e probabilidade'],
  '8° Ano': ['Potências e raízes', 'Álgebra e produtos notáveis', 'Equações e sistemas', 'Áreas e volumes', 'Probabilidade e estatística'],
  '1° Ano': ['Conjuntos e funções', 'Função afim e quadrática', 'Exponencial e logaritmo', 'Trigonometria no triângulo retângulo']
};
const EF = {
  '6° Ano': ['Dinheiro e escolhas'], '7° Ano': ['Consumo consciente e orçamento'], '8° Ano': ['Poupar e planejar'], '9° Ano': ['Juros e crédito no dia a dia']
};

const chaveAno = a => { const n = +(/\d+/.exec(a) || [0])[0]; return /Parte/.test(a) ? n : (n >= 6 ? n : n + 10); };
const vazia = (titulo, i) => ({ titulo, accent: ACC[i % 4], icon: 'grid', itens: [], vazio: true });
const anoVazio = (ano, titulos) => ({
  ano,
  trimestres: TRI.map((nome, t) => ({ nome, unidades: titulos.filter((_, i) => i % 3 === t).map((x, k) => vazia(x, t + k)) })).filter(t => t.unidades.length)
});

export function completar(MATERIAS) {
  const porId = Object.fromEntries(MATERIAS.map(m => [m.id, m]));
  const garante = (m, ano, titulos) => { if (titulos && !m.CATALOG.some(a => a.ano === ano)) m.CATALOG.push(anoVazio(ano, titulos)); };
  // matérias já existentes: anos que faltam
  TODOS.forEach(ano => { garante(porId.matematica, ano, MAT[ano] || ['Módulo 1', 'Módulo 2', 'Módulo 3']); garante(porId['educacao-financeira'], ano, EF[ano] || ['Módulo 1']); });
  // matérias novas
  NOVAS.forEach(n => {
    if (porId[n.id]) return;
    MATERIAS.push({ id: n.id, nome: n.nome, icon: n.icon, lede: n.lede, emBreve: true, CATALOG: n.anos.map(ano => anoVazio(ano, n.temas)) });
  });
  MATERIAS.forEach(m => { if (!m.CATALOG.some(a => /Parte/.test(a.ano))) m.CATALOG.sort((a, b) => chaveAno(a.ano) - chaveAno(b.ano)); });
  // ENA fica por último entre as matérias que já têm conteúdo; as novas vêm depois
  return MATERIAS;
}
