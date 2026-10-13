# Roteiro de teste com contas reais

O Claude não cria contas nem digita senhas, então estes testes (que usam o Firebase de verdade) são seus. Faça depois de **publicar as regras** (`firestore.rules`) no console do Firebase e de o site novo estar no ar. Use e-mails de teste (ex.: `teste.prof@gmail.com`, `teste.aluno@gmail.com`).

## 0. Preparação (uma vez)
1. Console do Firebase → Firestore → **Regras** → cole `firestore.rules` → **Publicar**.
2. Crie sua conta de professor no site (`login.html`). No Firestore, coleção **`admins`** → documento com ID = o UID dessa conta (Authentication → copie o UID) → campo qualquer (`ok: true`).

## 1. Nuvem do EduMath Provas (professor)
- [ ] Entre como professor e abra `professor/prova.html`. O selo no topo muda para **"Salvo na nuvem"**.
- [ ] Monte uma prova, abra o menu **⋯ → Salvar prova**. No Firestore deve aparecer `teachers/<uid>/provas/<id>`.
- [ ] Crie uma questão própria (**+**). Deve aparecer em `teachers/<uid>/questoes/<id>`.
- [ ] Abra o site em **outro navegador/aparelho**, entre com a mesma conta: a prova e a questão chegam sozinhas.
- [ ] Exclua a prova num dos aparelhos (⋯ → Abrir → excluir); no outro, ela some após sincronizar.
- [ ] Salve uma **4ª prova** na conta gratuita: o selo vira **"1 só neste navegador"** e clicar leva a `planos.html`.
- [ ] Sem internet (modo avião), edite a prova: selo **"Sem conexão"**; ao voltar a internet, sobe sozinho.

## 2. Planos (admin.html)
- [ ] Abra `admin.html` logada: a lista de professores aparece. Clique **30 dias** na conta de teste.
- [ ] Na conta de teste: o painel do professor mostra **Plano Pro**; o EduMath Provas deixa subir mais de 3 provas.
- [ ] **Voltar ao gratuito** funciona.
- [ ] Como professor comum (sem `admins`), `admin.html` mostra "Você não tem acesso".
- [ ] Como professor comum, tente mudar o próprio plano (console do navegador → `updateDoc(teachers/<uid>, {plano:'pro'})`): deve ser **negado**.

## 3. Limite de turmas
- [ ] Conta gratuita: crie 2 turmas; a 3ª mostra "O plano gratuito permite até 2 turmas".

## 4. Aluno e a trava das aulas
- [ ] Sem entrar, abra uma aula bloqueada: aparece a tela "Esta aula é para quem tem conta".
- [ ] Crie conta de aluno pelo botão dessa tela: depois de cadastrar, volta para a aula e ela abre.
- [ ] Entre numa turma pelo código, seja aprovado, conclua um quiz: a nota aparece no painel do professor.

## 5. LGPD (conta.html)
- [ ] **Baixar meus dados** gera `meus-dados.json` (professor e aluno).
- [ ] **Excluir minha conta** (use uma conta de teste!): pede a senha, apaga os dados e o login; depois não dá para entrar de novo, e no Firestore sobram só documentos de outras pessoas.

## Se algo falhar
Abra o console do navegador (F12) e me mande a mensagem de erro. Erros `permission-denied` quase sempre significam que as regras não foram publicadas ou que falta o documento em `admins`.
