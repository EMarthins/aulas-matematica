# Painel de administração (admin.html)

Exclusivo da conta **eduardosiqueirar7@gmail.com** (administrador master). Link: `/admin.html` (e, depois de abrir uma vez, "Administração" no menu lateral). Prévia com dados fictícios: `admin.html?demo=1`.

## O que faz
- **Resumo:** números (professores, Pro ativos, alunos, turmas), "precisa da sua atenção" (professores aguardando aprovação, Pro vencendo, turmas com alunos pendentes há +7 dias), últimos acessos, cadastros da semana, turmas mais ativas.
- **Professores:** aprovar / recusar / suspender / reativar; trocar o plano **Gratuito ⇄ Pro ⇄ Escola** com validade (+30 dias, +90 dias, +1 ano ou data; renovar soma ao vencimento atual) e anotação do pagamento; uso (turmas, alunos, atividades); último acesso. Filtros e busca; exportar CSV.
- **Alunos:** botão **Tornar professor(a)…** no perfil (converte a conta para professor já aprovado e deixa escolher o plano: Pro 1 ano/90/30 dias ou gratuito; exige as regras que liberam o admin a mudar só o campo role e criar o perfil de professor); perfil, turmas (e se a matrícula está aprovada/pendente), último acesso e nº de acessos, atividades feitas e notas. Filtros: acessaram em 7 dias, sem acesso há +30 dias, matrícula pendente, sem turma.
- **Turmas:** professor, código, alunos aprovados/pendentes, atividades, criação e último acesso de aluno; lista de alunos da turma.

## Como funciona por trás
- **Aprovação de professores:** quem se cadastra como professor nasce com `teachers/{uid}.status = 'pending'` e vê um aviso "Cadastro em análise" no painel (não cria turmas nem atividades). Só o administrador muda para `approved` (regras do Firestore: `profAprovado`). Professores antigos, sem o campo status, contam como aprovados (aparecem como "Aprovado (antigo)").
- **Segurança:** a conta de administrador é fixada nas regras (`function admin()` em `firestore.rules`) pelo UID **e** pelo e-mail. Não existe mais a coleção `admins`. O servidor recusa qualquer outra conta, mesmo que alguém mexa na página. Se essa conta for excluída e recriada, o UID muda: atualize `firestore.rules` e `MASTER_UID` em `admin.html`.
- **Acessos:** `app/auth.js` grava `users/{uid}.ultimoAcesso` e `acessos` (+1) uma vez por sessão do navegador e a cada login. Só conta quem usa páginas com login (painéis, atividades, conta); quem só abre aulas públicas não aparece. Contas antigas mostram "sem registro" até o próximo acesso.
- **Leituras:** o painel lê usuários, professores, turmas, matrículas, atividades e submissões de uma vez (botão ↻ Atualizar). Com milhares de alunos isso consome a cota grátis do Firestore (50 mil leituras/dia): quando crescer, trocar por contadores.

## Para funcionar (uma vez, ao mudar as regras)
Publicar `firestore.rules` no console do Firebase (Firestore → Regras → colar → Publicar). O próprio painel tem o botão "Copiar regras" e o aviso com o passo a passo quando falta.

## Verificação feita em 2026-10-14 (com a conta master, dados reais)
Painel carregou (professores, alunos, turmas); escrita real de anotação, plano Pro/Gratuito e status; professor sem `status` (antigo) cria turma; professor suspenso recebe `permission-denied` ao criar turma e vê a tela "Acesso suspenso"; reativado voltou a criar. Contas de teste restauradas.

## Regras publicadas (2026-10-14, versão das 14h57)
Incluem a conversão aluno→professor. Primeira conversão: João Antônio Micena Machado Júnior (jammjunior7@gmail.com) → professor aprovado, Pro até 14/10/2027, anotação "cortesia de 1 ano". Observação: para publicar pelo Chrome, o editor das regras é CodeMirror 6; o texto foi inserido por `document.querySelector('.cm-content').cmView.view.dispatch(...)` e conferido por soma de verificação contra firestore.rules.

## Relatos de erro e códigos de convite (2026-10-14)
- **Aba "Relatos de erro":** lista o que as pessoas reportam pelo botão **⚑ Reportar um erro** (menu "⋯" de toda aula/guia/atividade e botão no detalhe de cada questão do EduMath Provas). Mostra quando, onde (link para a página/slide), categoria, texto e contato opcional; filtros Novos/Resolvidos/Todos, marcar como resolvido, reabrir, excluir e exportar CSV. O card "Relatos de erro" aparece no Resumo.
- **Como funciona:** `app/reportar.js` envia para a coleção `reports` pela API REST do Firestore, sem login e sem carregar o SDK. As regras aceitam só **criar** (campos e tamanhos limitados, status 'novo'); só o admin lê/edita/exclui. Proteções contra abuso: campo-isca invisível e 1 relato a cada 20 s por navegador. Se houver spam, excluir pela aba e, em último caso, ligar o App Check.
- **Códigos de convite:** antes qualquer usuário logado listava todas as turmas e via os códigos. Agora o código fica em `joinCodes/{CÓDIGO}` (cada pessoa lê UM código por vez; só o admin lista) e as turmas só são lidas pelo professor dono, pelo admin e pelo aluno matriculado. Turmas antigas são migradas sozinhas: o painel do professor e o painel de admin criam o registro que faltar (toast "N códigos de convite protegidos"). `app/data.js`: `criarTurma` publica o código (com sorteio novo se houver colisão), `garantirCodigos`, `buscarTurmaPorCodigo` (usa joinCodes; mantém a consulta antiga só enquanto as regras antigas estiverem publicadas).
