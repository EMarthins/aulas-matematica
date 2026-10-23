// Matérias que o professor pode escolher como "principal" (cadastro e Minha conta). Os ids são os do catálogo (app/catalog.js).
export const MATERIAS_ATUACAO = [
  { id: 'matematica', nome: 'Matemática' },
  { id: 'recomposicao-matematica', nome: 'Recomposição Matemática' },
  { id: 'educacao-financeira', nome: 'Educação Financeira' },
  { id: 'portugues', nome: 'Língua Portuguesa' },
  { id: 'ingles', nome: 'Língua Inglesa' },
  { id: 'arte', nome: 'Arte' },
  { id: 'educacao-fisica', nome: 'Educação Física' },
  { id: 'ciencias', nome: 'Ciências' },
  { id: 'historia', nome: 'História' },
  { id: 'geografia', nome: 'Geografia' },
  { id: 'fisica', nome: 'Física' },
  { id: 'quimica', nome: 'Química' },
  { id: 'biologia', nome: 'Biologia' },
  { id: 'filosofia', nome: 'Filosofia' },
  { id: 'sociologia', nome: 'Sociologia' },
  { id: 'varias', nome: 'Mais de uma matéria' }
];
export const materiaValida = id => MATERIAS_ATUACAO.some(m => m.id === id);
export const optionsMateria = sel => '<option value="">Escolha…</option>' + MATERIAS_ATUACAO.map(m => '<option value="' + m.id + '"' + (m.id === sel ? ' selected' : '') + '>' + m.nome + '</option>').join('');

// Anos/séries que o professor pode marcar ("onde eu dou aula"). A chave é o número do ano no catálogo ("6° Ano" … "9° Ano" no Fundamental; "1° Ano" … "3° Ano" no Médio).
export const ANOS_ATUACAO = [
  { id: '6', nome: '6º ano' }, { id: '7', nome: '7º ano' }, { id: '8', nome: '8º ano' }, { id: '9', nome: '9º ano' },
  { id: '1', nome: '1ª série' }, { id: '2', nome: '2ª série' }, { id: '3', nome: '3ª série' }
];
