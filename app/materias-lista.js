// Matérias que o professor pode escolher como "principal" (cadastro e Minha conta). Os ids são os do catálogo (app/catalog.js).
export const MATERIAS_ATUACAO = [
  { id: 'matematica', nome: 'Matemática' },
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
