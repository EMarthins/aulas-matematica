// Acrescenta guias e atividades da 1ª série de Educação Financeira ao catálogo (idempotente)
const fs = require('fs');
const f = 'C:/Users/eduar/OneDrive/Documentos/Aulas/site/app/catalog.js';
let s = fs.readFileSync(f, 'utf8');
if (s.includes('credito-juros-financiamento/infografico.html')) { console.log('já integrado'); process.exit(0); }
const D = 'educacao-financeira/1-ano/3-tri/';
const I = (tipo, titulo, arq, sub) => `                  { tipo:'${tipo}',${sub ? ` sub:'${sub}',` : ''} titulo:'${titulo}', arquivo:'${D}${arq}' }`;
const A = (sub, titulo, arq) => I('Atividade', titulo, arq, sub);
const add = (ultimo, itens) => {
  const key = `arquivo:'${D}${ultimo}' }`;
  if (!s.includes(key)) throw new Error('não achei ' + ultimo);
  s = s.replace(key, key + ',\n' + itens.join(',\n'));
};
// crédito: guia + 9 atividades (após a aula 3)
add('credito-juros-financiamento/aula-3-cartao-credito-spc-score.html', [
  I('Guia', 'Guia visual — Crédito, Juros e Financiamento', 'credito-juros-financiamento/infografico.html'),
  A('ENEM', 'Aula 1 · Crédito e juros compostos no ENEM', 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-enem.html'),
  A('Criativa', 'Aula 1 · Quem eu pago primeiro?', 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-criativa.html'),
  A('Prática', 'Aula 1 · A bola de neve da dívida', 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos-atividade-pratica.html'),
  A('ENEM', 'Aula 2 · Financiamento e prestações no ENEM', 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-enem.html'),
  A('Criativa', 'Aula 2 · Ranking das ofertas de parcelamento', 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-criativa.html'),
  A('Prática', 'Aula 2 · Parcelas, taxas e prazos', 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira-atividade-pratica.html'),
  A('ENEM', 'Aula 3 · Cartão de crédito e score no ENEM', 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-enem.html'),
  A('Criativa', 'Aula 3 · Score Quest', 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-criativa.html'),
  A('Prática', 'Aula 3 · Fatura, limite e score', 'credito-juros-financiamento/aula-3-cartao-credito-spc-score-atividade-pratica.html')
]);
add('direitos-do-consumidor/aula.html', [
  I('Guia', 'Guia visual — Direitos do Consumidor', 'direitos-do-consumidor/infografico.html'),
  A('ENEM', 'Consumidor e matemática no ENEM', 'direitos-do-consumidor/atividade-enem.html'),
  A('Criativa', 'Júri do consumidor', 'direitos-do-consumidor/atividade-criativa.html'),
  A('Prática', 'Contas de quem conhece seus direitos', 'direitos-do-consumidor/atividade-pratica.html')
]);
add('consumo-consciente/aula-2-supermercado-promocoes.html', [
  I('Guia', 'Guia visual — Consumo Consciente', 'consumo-consciente/infografico.html'),
  A('ENEM', 'Aula 1 · Armadilhas de consumo no ENEM', 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-enem.html'),
  A('Criativa', 'Aula 1 · Caça às armadilhas', 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-criativa.html'),
  A('Prática', 'Aula 1 · As contas por trás das armadilhas', 'consumo-consciente/aula-1-armadilhas-consumismo-atividade-pratica.html'),
  A('ENEM', 'Aula 2 · Supermercado e promoções no ENEM', 'consumo-consciente/aula-2-supermercado-promocoes-atividade-enem.html'),
  A('Criativa', 'Aula 2 · O carrinho do mercado', 'consumo-consciente/aula-2-supermercado-promocoes-atividade-criativa.html'),
  A('Prática', 'Aula 2 · Promoção de verdade?', 'consumo-consciente/aula-2-supermercado-promocoes-atividade-pratica.html')
]);
add('apostas-bets-cassino/aula.html', [
  I('Guia', 'Guia visual — Apostas, Bets e Cassino', 'apostas-bets-cassino/infografico.html'),
  A('ENEM', 'A matemática das apostas no ENEM', 'apostas-bets-cassino/atividade-enem.html'),
  A('Criativa', 'Detector de anúncios enganosos', 'apostas-bets-cassino/atividade-criativa.html'),
  A('Prática', 'A matemática da casa', 'apostas-bets-cassino/atividade-pratica.html')
]);
add('perfil-empreendedor/aula.html', [
  I('Guia', 'Guia visual — Perfil Empreendedor', 'perfil-empreendedor/infografico.html'),
  A('ENEM', 'Números do empreendedor no ENEM', 'perfil-empreendedor/atividade-enem.html'),
  A('Criativa', 'Você é o dono da barraca', 'perfil-empreendedor/atividade-criativa.html'),
  A('Prática', 'As contas da barraca', 'perfil-empreendedor/atividade-pratica.html')
]);
fs.writeFileSync(f, s); console.log('ok');
