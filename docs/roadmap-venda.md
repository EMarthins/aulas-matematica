# Roadmap para vender o site (Proveiro + plataforma + aulas)

Atualizado em 2026-10-12. Marque ☑ quando concluir. Itens com 👤 dependem de **você** (conta, dinheiro, documento ou decisão); itens com 🤖 o Claude consegue fazer.

## 👤 O que só você pode fazer (cobrar no começo de cada conversa)

- [ ] **Direitos de uso do conteúdo.** (a) Banco do ENEM: as questões são recortes das provas do INEP; os textos de apoio (poemas, reportagens, imagens) têm donos — consultar um advogado antes de vender isso como parte do produto. (b) Aulas/slides: confirmar a autoria das que vieram de pptx de terceiros (ex.: "Recomposição" do 9º ano) e se podem ser revendidas. As aulas da **Matemática 1ª série (1° Ano)** foram reescritas, com problemas originais “no estilo ENEM”, a partir dos slides da SEED-PR (Khan Academy e livros didáticos como referência): o texto e as questões do site são próprios, mas confirme se a organização do conteúdo e o uso do material de origem na venda dependem de autorização.
- [ ] **CNPJ/MEI** e emissão de nota fiscal.
- [ ] **Nome "Proveiro":** consultar o INPI e registrar o domínio próprio (ex.: proveiro.com.br).
- [ ] **Advogado revisar** `termos.html` (termos, privacidade, LGPD com dados de menores): preencher razão social, CNPJ, e-mail do encarregado (DPO).
- [ ] **Meio de cobrança:** abrir conta no Mercado Pago/Asaas/Stripe (ou Kiwify/Hotmart) e me passar as chaves quando for automatizar. Até lá, pré-venda manual por Pix.
- [ ] **Preencher `app/config-venda.js`:** WhatsApp, e-mail, chave Pix, preços.
- [ ] **Criar o seu administrador:** no console do Firebase, Firestore → coleção `admins` → documento com o UID da sua conta de professor (campo qualquer, ex.: `ok: true`). Isso libera a página `admin.html` (conceder plano Pro a quem pagou).
- [x] **Regras do Firestore publicadas** em 2026-10-12 (versão com admins, plano protegido, nuvem do Proveiro e exclusão de conta). Republicar sempre que `firestore.rules` mudar.
- [ ] **Testar com contas reais** (o Claude não cria contas): roteiro em `docs/teste-contas.md`.
- [ ] **Decidir preços e o que o plano gratuito inclui** (hoje: 3 provas na nuvem, 40 questões próprias, 2 turmas).
- [ ] **Canal de suporte** (WhatsApp/e-mail) e quem responde.
- [ ] **Conta de analytics** (ex.: Plausible/Google Analytics) e de monitoramento de erros (ex.: Sentry), se quiser.
- [ ] **Hospedagem de imagens** (Firebase Storage/Cloudflare R2) se o tráfego crescer: as questões do ENEM pesam 143 MB no repositório. Exige plano pago do Firebase (Blaze).
- [ ] **Vídeo de demonstração** e depoimentos dos primeiros professores.
- [ ] **Piloto:** pré-vender para 5–10 professores (Pix + liberar o plano pelo `admin.html`) antes de automatizar a cobrança.

## 🤖 Já feito / em andamento

Ver o fim deste arquivo (seção "Feito").

## 🤖 Depois (precisa de decisões/contas acima)

- [ ] Cobrança automática (Functions + webhook do meio de pagamento) e planos validados no servidor.
- [ ] Exportar a prova em Word (.docx) com matemática correta (OMML) — exige biblioteca e testes no Word.
- [ ] Contas de escola (coordenação + vários professores, cobrança única).
- [ ] Relatórios da turma (onde mais erram) e exportar notas em CSV.
- [ ] Integração com Google Classroom.
- [ ] Mover as imagens do ENEM para um armazenamento/CDN.
- [ ] Trava de verdade das aulas (servir por backend), em vez da trava no navegador.

## Feito

- [x] Provas e questões próprias do Proveiro **sincronizadas na nuvem** (app/nuvem.js; offline-first; testes em scripts/testar-nuvem.js).
- [x] **Planos:** campo plano/planoAte protegido nas regras (só admin muda); limites do gratuito em app/planos.js (3 provas, 40 questões, 2 turmas); cartão do plano no painel do professor.
- [x] **admin.html:** conceder/retirar o Pro por 30/90/365 dias ou até uma data (pré-venda manual). Falta você criar o documento admins/<seu uid>.
- [x] **planos.html** (preços, comparação, como assinar, FAQ) + dados comerciais em app/config-venda.js (preencher).
- [x] **conta.html (LGPD):** baixar meus dados (JSON) e excluir a conta com tudo.
- [x] **termos.html** reescrito (venda, LGPD, menores, direitos, planos) — falta revisão do advogado e dados da empresa.
- [x] Aulas grátis x conta (trava no navegador) e página para professores atualizada.
- [x] Roteiro de teste com contas reais: docs/teste-contas.md.
- Não feito de propósito: exportar Word (a matemática da prova usa CSS que o Word não entende; fazer certo exige gerar .docx com fórmulas e testar no Word).
