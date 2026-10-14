# Roadmap para vender o site (EduMath: provas + plataforma + aulas)

Atualizado em 2026-10-13. Marque ☑ quando concluir. Itens com 👤 dependem de **você** (conta, dinheiro, documento ou decisão); itens com 🤖 o Claude consegue fazer.

## ▶ PLANO DE EXECUÇÃO (ordem recomendada, definida em 2026-10-13)

Decisão: **parar de adicionar aulas** (já são 490+ páginas); o que falta é ferramenta, confiabilidade, parte legal e primeiros clientes.

### Fase 0 — Esta semana (proteger o investimento)
- [x] 👤 Registrar **edumath.com.br** (feito em 2026-10-13, no CPF; vence 13/10/2027).
- [ ] 👤 Pesquisar "EduMath" no **INPI** (classes 41, 9, 42), no Google e no Instagram. Plano B de domínio: edumath-app.com.br / edumathbr.com.br.
- [ ] 👤 **Advogado de direito autoral** (1 consulta): aulas derivadas da SEED-PR/RCO, licença Khan Academy (uso comercial proibido), textos de apoio do ENEM; e, se for servidor estadual, o que o estatuto diz sobre atividade empresarial e material produzido na função.
- [ ] 👤 Decidir **o que fica grátis e o que é pago** (sugestão: aulas = isca grátis; EduMath Provas + turmas = pago).
- [ ] 👤 Conferir se o repositório `EMarthins/aulas-matematica` é público (GitHub → Settings).

### Fase 1 — Hospedagem e proteção do conteúdo (🤖 faço; 👤 cria as contas)
- [x] 👤 Conta na **Cloudflare** criada; domínio adicionado (plano Free) e servidores DNS trocados no Registro.br (2026-10-13; a delegação de domínio novo leva ~2 h).
- [x] 🤖 **Cloudflare Pages no ar** em https://edumath.pages.dev e no domínio **https://edumath.com.br** (e www), ativado em 2026-10-14 (projeto `edumath`, deploy automático a cada push na branch master, sem build; HTTP redireciona para HTTPS). Falta: tornar o repositório privado quando for vender e remover o GitHub Pages.
- [ ] 🤖 Mover as imagens do ENEM (143 MB) para **Cloudflare R2**.
- [ ] 🤖 Trava real do conteúdo pago (Cloudflare Worker ou Firebase Functions checando o plano do login), em vez da trava no navegador.
- [ ] 🤖 **Sentry** (erros) e **Cloudflare Web Analytics** (visitas).
- [ ] 👤 Se usar Firebase Blaze: ligar alerta de orçamento.

### Fase 2 — Produto pronto para o professor (🤖)
- [x] 🤖 **Exportar prova em Word (.docx)** com equações nativas do Word — feito em 2026-10-14 (app/docx.js, botão "Word" no EduMath Provas; testado abrindo no Word de verdade). Pendente: conferir com professores reais em Word de Mac e no Google Docs/LibreOffice.
- [ ] 🤖 Testes de **sincronização** (2 aparelhos, internet caindo) e **backup** das provas na nuvem.
- [ ] 🤖 Teste em **celular** (aparelhos simples) e desempenho.
- [ ] 🤖 Botão **"Reportar erro"** em aulas e questões + registro de correções.
- [ ] 🤖 **Conta de demonstração** com prova pronta; primeiros 5 minutos sem becos sem saída; teste de 14 dias do Pro.
- [ ] 🤖 Selo discreto "feito com EduMath" na prova/folha de respostas e **indicação** (1 mês grátis por indicado).
- [ ] 👤 **Revisar uma amostra grande do conteúdo** (matemática, português, gabaritos) e decidir o que só entra no pago depois de revisado.
- [ ] 👤 Preencher `app/config-venda.js` (WhatsApp, e-mail, Pix, preços) e rodar `docs/teste-contas.md` com contas reais.

### Fase 3 — Piloto e primeiras vendas
- [ ] 👤 Recrutar **10 professores** para testar de graça por 3–4 semanas (colegas, grupos de WhatsApp/Telegram). Coletar depoimentos.
- [ ] 👤 Criar o documento `admins/<seu uid>` no Firestore (libera `admin.html`).
- [ ] 👤 **Vídeo de 60–90 s** mostrando "monte uma prova em 5 minutos" + página de venda com garantia de 7 dias.
- [ ] 👤 Abrir **MEI/CNPJ**, definir nota fiscal, política de reembolso e canal de suporte (quem responde e em quanto tempo).
- [ ] 👤 **Pré-venda por Pix** para o grupo do piloto (liberar plano em `admin.html`).
- [ ] 👤 Revisão final de `termos.html` pelo advogado (razão social, CNPJ, DPO, dados de menores).

### Fase 4 — Escala (quando houver 20+ pagantes)
- [ ] 🤖 Cobrança automática (Asaas/Mercado Pago, Pix recorrente + webhook) com planos validados no servidor.
- [ ] 🤖 Relatórios da turma e exportar notas (CSV); contas de escola; integração com Google Classroom.
- [ ] 👤 Vendas para escolas particulares e cursinhos (pagam mais e reclamam menos que o professor individual).
- [ ] 👤 SEO: títulos e descrições das aulas abertas ("aula pronta de função quadrática com slides e exercícios"), Instagram/TikTok.
- [ ] 🤖 Só então: mais conteúdo (novos trimestres do RCO), se os dados do piloto pedirem.

---

A lista detalhada abaixo é a original (itens soltos); o plano acima é a ordem a seguir.

## 👤 O que só você pode fazer (cobrar no começo de cada conversa)

- [ ] **Direitos de uso do conteúdo.** (a) Banco do ENEM: as questões são recortes das provas do INEP; os textos de apoio (poemas, reportagens, imagens) têm donos — consultar um advogado antes de vender isso como parte do produto. (b) Aulas/slides: confirmar a autoria das que vieram de pptx de terceiros (ex.: "Recomposição" do 9º ano) e se podem ser revendidas. As aulas da **Matemática 1ª série (1° Ano)** foram reescritas, com problemas originais “no estilo ENEM”, a partir dos slides da SEED-PR (Khan Academy e livros didáticos como referência); o mesmo vale para a **Matemática 3ª série (1° e 2° trimestres)** e a **2ª série (1° trimestre)**, reescritas a partir das aulas do RCO/SEED-PR: o texto e as questões do site são próprios, mas confirme se a organização do conteúdo e o uso do material de origem na venda dependem de autorização.
- [ ] **CNPJ/MEI** e emissão de nota fiscal.
- [ ] **Nome "EduMath" (escolhido em 2026-10-13; a ferramenta de provas virou "EduMath Provas"):** registrar **edumath.com.br** no Registro.br (estava livre em 2026-10-13; edumath.com e edumath.app já têm dono) e consultar o INPI (classes 41, 9 e 42) antes de investir na marca. O nome antigo "Proveiro" foi abandonado: proveiro.com.br pertence a terceiro desde jan/2026.
- [ ] **Advogado revisar** `termos.html` (termos, privacidade, LGPD com dados de menores): preencher razão social, CNPJ, e-mail do encarregado (DPO).
- [ ] **Meio de cobrança:** abrir conta no Mercado Pago/Asaas/Stripe (ou Kiwify/Hotmart) e me passar as chaves quando for automatizar. Até lá, pré-venda manual por Pix.
- [ ] **Preencher `app/config-venda.js`:** WhatsApp, e-mail, chave Pix, preços.
- [x] **Administrador:** fixado em 2026-10-14 na conta eduardosiqueirar7@gmail.com (UID e e-mail nas regras; não usa mais a coleção `admins`). Ver docs/admin-painel.md.
- [ ] **Publicar as regras novas do Firestore** (admin master + aprovação de professores + leitura do painel admin). Última versão publicada: 2026-10-12. Republicar sempre que `firestore.rules` mudar (o admin.html tem o botão "Copiar regras").
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
- [x] Exportar a prova em Word (.docx) com matemática correta (OMML) — feito (ver Fase 2).
- [ ] Contas de escola (coordenação + vários professores, cobrança única).
- [ ] Relatórios da turma (onde mais erram) e exportar notas em CSV.
- [ ] Integração com Google Classroom.
- [ ] Mover as imagens do ENEM para um armazenamento/CDN.
- [ ] Trava de verdade das aulas (servir por backend), em vez da trava no navegador.

## Feito

- [x] Provas e questões próprias do EduMath Provas **sincronizadas na nuvem** (app/nuvem.js; offline-first; testes em scripts/testar-nuvem.js).
- [x] **Planos:** campo plano/planoAte protegido nas regras (só admin muda); limites do gratuito em app/planos.js (3 provas, 40 questões, 2 turmas); cartão do plano no painel do professor.
- [x] **admin.html (antigo, só planos):** conceder/retirar o Pro por 30/90/365 dias ou até uma data (pré-venda manual). Falta você criar o documento admins/<seu uid>.
- [x] **planos.html** (preços, comparação, como assinar, FAQ) + dados comerciais em app/config-venda.js (preencher).
- [x] **conta.html (LGPD):** baixar meus dados (JSON) e excluir a conta com tudo.
- [x] **termos.html** reescrito (venda, LGPD, menores, direitos, planos) — falta revisão do advogado e dados da empresa.
- [x] Aulas grátis x conta (trava no navegador) e página para professores atualizada.
- [x] Roteiro de teste com contas reais: docs/teste-contas.md.
- Exportar Word: feito em 2026-10-14 com gerador próprio (app/docx.js, sem bibliotecas, funciona offline); frações e raízes viram equações do Word (OMML), figuras SVG viram PNG, imagens do ENEM são embutidas; conferido no Word por scripts/testar-docx.js + automação (docs/fazedor-de-prova.md).

- **Painel de administração completo** (2026-10-14): admin.html com Resumo, Professores (aprovar/recusar/suspender, plano Pro/Gratuito/Escola), Alunos (perfil, turmas, acessos, atividades) e Turmas; professor novo nasce "aguardando aprovação". Guia: docs/admin-painel.md.
