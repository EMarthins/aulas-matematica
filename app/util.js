// Pequenos utilitários compartilhados.

// Escapa texto antes de inserir via innerHTML — importante sempre que o
// texto vem de outro usuário (nome de aluno, resposta de atividade, etc.),
// para não permitir HTML/script injetado (XSS).
export function escapeHtml(str){
  if(str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Só aceita transformar em link clicável se for http(s) — evita esquemas
// perigosos como "javascript:" vindos de um link colado por um aluno.
export function linkSeguro(url){
  if(!url) return null;
  var limpo = String(url).trim();
  if(!/^https?:\/\//i.test(limpo)) return null;
  return limpo;
}
