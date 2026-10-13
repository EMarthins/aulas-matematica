// ============================================================
// Dados comerciais — PREENCHA antes de divulgar (ver docs/roadmap-venda.md).
// Enquanto o contato estiver vazio, a página de planos mostra "em breve" no lugar do botão de assinar.
// ============================================================
export const VENDA = {
  nomeProduto: 'EduMath',
  // Contato para assinar (pré-venda manual). Preencha pelo menos um.
  whatsapp: '',        // só números com DDI+DDD, ex.: '5511999999999'
  email: '',           // ex.: 'contato@seudominio.com.br'
  pix: '',             // chave Pix (mostrada ao assinante depois do contato), ex.: 'CNPJ ou e-mail'
  // Preços (R$) mostrados na página de planos.
  precoMensal: 29,
  precoAnual: 290,
  diasDeTeste: 14
};

// Quem responde pelo serviço (aparece em termos.html). Preencha quando tiver CNPJ/MEI.
export const EMPRESA = {
  razao: '',       // ex.: 'Eduardo Siqueira Marthins ME'
  cnpj: '',        // ex.: '00.000.000/0001-00'
  cidade: '',      // ex.: 'São Paulo/SP'
  emailDpo: ''     // e-mail do encarregado de dados (pode ser o mesmo do suporte)
};
