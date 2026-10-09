# Prof. Eduardo — Aulas e Guias

Site com as aulas interativas e os guias visuais (infográficos) de Matemática (9º ano do Ensino Fundamental e 2ª e 3ª séries do Ensino Médio) e Educação Financeira (1ª, 2ª e 3ª séries do Ensino Médio), além da aba **ENA · PROFMAT** (preparação para o Exame Nacional de Acesso ao PROFMAT: 20 unidades, 36 aulas em slides, 20 guias visuais e 60 atividades, mais a “Trilha de estudo guiada” pelo edital em `ena-profmat/trilha-de-estudo.html`). A página inicial tem abas para alternar entre as matérias. Todas as páginas têm um botão de alternância de tema claro/escuro (canto superior direito) para ficarem legíveis em projetores de sala iluminada.

Cada aula/guia continua sendo um arquivo HTML autocontido que funciona 100% offline, sem instalação e sem login — pode ser aberto direto e usado em sala normalmente. Além disso, o site agora tem uma **plataforma** (login, turmas, atividades, correção e engajamento) que usa o Firebase como backend; veja a seção [Plataforma (login, turmas e atividades)](#plataforma-login-turmas-e-atividades) mais abaixo.

## Como publicar isso no GitHub Pages

Você não precisa usar terminal nem `git` — dá pra fazer tudo pelo site do GitHub.

1. **Crie o repositório.** Em [github.com/new](https://github.com/new), dê um nome (ex.: `aulas-matematica`), deixe como **Public** (necessário para o GitHub Pages gratuito) e clique em **Create repository**. Não marque a opção de adicionar README — já tem um aqui.
2. **Suba os arquivos.** Na página do repositório recém-criado, clique em **"uploading an existing file"** (ou **Add file → Upload files**). Extraia o `.zip` que você recebeu e arraste **o conteúdo da pasta** (o `index.html`, o `README.md`, o `.nojekyll` e a pasta `aulas/`) para a área de upload — o GitHub preserva a estrutura de subpastas ao arrastar. Depois clique em **Commit changes**.
3. **Ative o GitHub Pages.** Vá em **Settings → Pages** (menu à esquerda). Em "Build and deployment", escolha **Source: Deploy from a branch**, selecione a branch **main** e a pasta **/ (root)**, e clique em **Save**.
4. **Aguarde ~1 minuto.** O GitHub mostra o link do site no topo da mesma página (formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`). Esse é o endereço que você pode salvar nos favoritos ou colocar na tela inicial do celular/tablet.

Qualquer atualização futura (novo arquivo, edição) segue o mesmo caminho: **Add file → Upload files** substituindo o arquivo, ou editando direto pelo ícone de lápis do GitHub.

## Estrutura do repositório

```
index.html                          → página inicial (catálogo das aulas)
aulas/
  9-ano/
    2-tri/
      recomposicao-matematica/
        aula-1-poligonos.html                  → aulas 21–22
        aula-2-triangulos.html                 → aulas 23–27
        aula-3-quadrilateros.html              → aulas 28–29
        aula-4-propriedades-poligonos.html     → aulas 30–34
        aula-5-circunferencia.html             → aulas 35–38
        aula-6-angulos-problemas.html          → aulas 39–42
        infografico.html                       → guia da unidade (mapa, habilidades, fórmulas)
  2-ano/
    3-tri/
      exponenciais/
        aula.html
        infografico.html
      logaritmos/
        aula-1-fundamentos.html
        aula-2-propriedades.html
        aula-3-equacoes-funcao.html
        infografico.html
      funcoes/
        aula-1-partes-propriedades.html
        aula-2-composta-inversa.html
        infografico.html
  3-ano/
    3-tri/
      sequencias/
        aula.html
        infografico.html
      progressao-aritmetica/
        aula-1-termo-geral.html
        aula-2-soma-termos.html
        infografico.html
      progressao-geometrica/
        aula-1-termo-geral.html
        aula-2-soma-termos.html
        infografico.html
      trigonometria-triangulo/
        aula-1-relacoes-seno.html
        aula-2-cosseno-tangente.html
        infografico.html
      trigonometria-ciclo/
        aula-1-arcos-seno-cosseno.html
        aula-2-reducao-funcoes.html
        infografico.html
educacao-financeira/
  1-ano/
    3-tri/
      credito-juros-financiamento/   (3 aulas + guia + 9 atividades)
      direitos-do-consumidor/        (aula + guia + 3 atividades)
      consumo-consciente/            (2 aulas + guia + 6 atividades)
      apostas-bets-cassino/          (aula + guia + 3 atividades)
      perfil-empreendedor/           (aula + guia + 3 atividades)
  2-ano/
    3-tri/
      investimentos-renda-fixa/      (2 aulas + guia + 6 atividades)
      renda-variavel-bolsa/          (aula + guia + 3 atividades)
      apostas-bets-cassino/          (aula + guia + 3 atividades)
      criptoativos/                  (aula + guia + 3 atividades)
  3-ano/
    3-tri/
      jogos-de-azar/
        aula.html
        infografico.html
      empreendedorismo/
        aula-1-perfil-pesquisa.html
        aula-2-ideia-proposta.html
        aula-3-canais-custos.html
        infografico.html
```

A estrutura segue `<materia>/<ano>/<trimestre>/<unidade>/<arquivo>.html` — `aulas/` é sempre Matemática (nome histórico, mantido para não quebrar links já publicados) e cada nova matéria ganha sua própria pasta de primeiro nível (ex.: `educacao-financeira/`).

## Como adicionar uma aula nova no futuro

1. Coloque o novo arquivo `.html` na pasta certa (crie a pasta se for uma matéria/trimestre/unidade novos, seguindo o padrão acima — ex.: `aulas/2-ano/4-tri/probabilidade/aula.html` ou `educacao-financeira/3-ano/4-tri/orcamento/aula.html`).
2. Abra `app/catalog.js` — fonte única do catálogo, usada tanto pela página inicial quanto pelo painel do professor (para escolher qual aula virar atividade). É o array `MATERIAS`: cada matéria tem `id`, `nome`, `icon`, `lede` (frase de apresentação) e um `CATALOG` — uma lista de objetos: um por ano, dentro dele os trimestres, dentro de cada trimestre as unidades, e dentro de cada unidade os itens (aulas/guias).
3. Para uma aula em matéria já existente: copie um bloco de unidade existente dentro do `CATALOG` daquela matéria como modelo e ajuste `titulo`, `accent` (`growth`, `decay`, `primary` ou `danger` — cores já usadas no material), `icon` (veja o objeto `ICONS` logo abaixo do `CATALOG`, no mesmo arquivo, para as opções disponíveis, ou crie uma nova entrada lá) e a lista de `itens`, apontando `arquivo` para o caminho relativo do novo `.html` (relativo à raiz do site).
4. Para uma matéria nova: copie um bloco de matéria inteiro (de `{ id: ...` até o `}` que fecha o `CATALOG` dela) como modelo dentro do array `MATERIAS`, e ajuste `id`, `nome`, `icon` e `lede`. A aba aparece automaticamente no topo da página inicial.
5. Os decks, guias e atividades de Educação Financeira (1ª e 2ª séries) são gerados por `scripts/gerador-ef/` (`lib.js` traz os componentes; `d*.js`, `i*.js`, `a*.js` são os conteúdos; `node build.js` gera as páginas). Editar o conteúdo e rodar de novo é mais rápido que mexer no HTML.
6. A matéria **ENA · PROFMAT** é gerada por `scripts/gerador-ena/`: `kit.js` (mini-linguagem de matemática `$...$` com frações `{a|b}`, raízes `√{x}`, expoentes `x^2`, figuras SVG e modelos de atividade), `dNN*.js` (aulas), `gNN.js` (guia visual + 3 atividades), `manifest.js` (estrutura do catálogo) e `trilha.js` (gera a trilha de estudo guiada a partir do manifesto; rode `node scripts/gerador-ena/trilha.js`). Rodar `node scripts/gerador-ena/build.js` gera as páginas, `node scripts/gerador-ena/catalogo.js` atualiza `app/catalog.js` e `node scripts/preparar.js` aplica layout, progresso, ferramentas e testes. O site não usa KaTeX: toda a matemática é HTML puro.
6. **Rode `node scripts/preparar.js`** (na raiz do site). Ele aplica, em ordem e de forma idempotente, tudo o que as páginas precisam e já roda os testes:
   - `aplicar-layout.js` — layout legível em qualquer tela/projetor (letra fluida, slides em tela cheia, ajuste automático, impressão);
   - `aplicar-fontes.js` — fontes locais (`assets/fonts.css`), sem depender do Google;
   - `aplicar-progresso.js` — progresso no aparelho do aluno (aberta/nota), sem login;
   - `aplicar-ferramentas.js` — menu "⋯" das aulas (mapa dos slides, notas, cronômetro e sorteio, copiar link do slide, voz alta, fonte e contraste), retomar de onde parou, glossário clicável, pesquisa de entendimento e registro de erros para a revisão;
   - `gerar-banco.js` — extrai as questões das aulas/atividades para `app/banco.json` (alimenta Simulados, Revisão e o Banco de questões do professor);
   - `testar.js` — testes estáticos (catálogo, scripts, fontes, banco, quizzes, modo offline).
   Quiz pontuado (`.qz`) em página nova: rode também `node scripts/inject-progress-hook.js .` para reportar a nota ao painel do professor.
7. **Testes no navegador:** abra `testes.html` (pelo site publicado ou por um servidor local) e clique em "Rodar testes": cada página é aberta num quadro invisível e confere erros de JavaScript, rolagem horizontal, slides que não cabem na tela e a conclusão das atividades.
8. Suba tudo com `git push`. O site atualiza sozinho. Se mudar a lista de arquivos do modo offline ou quiser forçar a limpeza do cache dos visitantes, troque `VERSAO` em `sw.js`.

## Recursos do site (resumo)

**Para o aluno:** busca e filtros no catálogo (tecla `/`) · continuar de onde parou e próxima aula sugerida · progresso e conquistas (sem login) · simulados por matéria/ano/tema (`simulado.html`) · revisão espaçada dos erros (`revisao.html`) · glossário clicável · texto maior/menor, alto contraste e leitura em voz alta · funciona offline e instala como aplicativo.

**Para o professor (em sala):** slides em tela cheia que se adaptam a qualquer projetor · `F` tela cheia, `B` tela preta, `M` mapa dos slides, `N` notas, `T` cronômetro e sorteio, `L` copiar link do slide · impressão dos slides como folheto.

**Para o professor (plataforma, com login):** turmas com aprovação de alunos, atividades (quiz, envio, aula assistida), correção, engajamento com termômetro de entendimento e CSV · **Fazedor de prova** (`professor/prova.html`): arraste questões de um banco com filtros (turma, conteúdo, tipo, dificuldade, palavra-chave) para folhas A4 em 1 ou 2 colunas, com cabeçalho pré-preenchível, versões A/B/C/D, gabarito e PDF — questões de múltipla escolha, abertas, V/F, somatória e associação, com figuras, gráficos e demonstrações; pronto para geração por IA (veja `docs/fazedor-de-prova.md`) · **Banco de questões em lista** (`professor/banco.html`).

Não é necessário nenhum processo de build: é HTML puro, servido como está.

## Atividades extras (ENEM, criativa e prática)

Cada aula tem 3 atividades prontas, que aparecem no catálogo dentro do bloco recolhível **Atividades** de cada unidade e também na lista de aulas que o professor escolhe ao criar uma atividade na plataforma (com o prefixo `[Atividade ENEM]`, `[Atividade Criativa]` ou `[Atividade Prática]`):

- **ENEM** — questões reais de provas anteriores (ENEM, ENEM PPL e alguns vestibulares), com ano/edição citados e resolução passo a passo.
- **Criativa** — formato interativo diferente de quiz: simuladores, jogos de arrastar, tabuleiros, calculadoras ao vivo.
- **Prática** — lista progressiva (fácil → difícil) com dicas e resolução.

Nomes dos arquivos: `atividade-enem.html` / `atividade-criativa.html` / `atividade-pratica.html` quando a unidade tem uma aula só; `aula-N-<slug>-atividade-enem.html` etc. quando tem várias, na mesma pasta da aula.

**Contrato com a plataforma:** toda atividade define `window.reportarConclusao(pontos, total)` (que envia a nota ao `player.html` via `postMessage`) e a chama uma vez ao terminar. Fora da plataforma isso não faz nada. Por isso `scripts/inject-progress-hook.js` pula esses arquivos — não rode o gancho genérico neles. Ao criar atividade nova, copie o bloco `<script>` do final de qualquer atividade existente e registre-a em `app/catalog.js` com `tipo:'Atividade'` e `sub:'ENEM' | 'Criativa' | 'Prática'`.

**9º ano (Recomposição Matemática):** os slides já trazem, dentro de cada aula, as seções "Exercícios" e "Problemas" com resposta escondida. Eles continuam lá, intactos; além disso, cada um dos 6 blocos tem uma atividade avulsa `aula-N-<slug>-atividade-pratica.html` com os mesmos itens (resposta revelada sob demanda e autoavaliação "acertei/errei", que vira a nota). Essas 6 páginas são geradas por `node scripts/gerar-atividades-9ano.js .` a partir dos slides — se editar um exercício nos slides, rode o script de novo para atualizar a atividade.

## Plataforma (login, turmas e atividades)

Além do catálogo público de aulas, o site tem uma camada de plataforma para você (e, se quiser, outros professores) usar com turmas de verdade: login de aluno/professor, aprovação manual de cada aluno, atribuição de atividades (quiz autocorrigido, aula assistida, ou envio de resposta/link para correção) e um painel de engajamento por turma.

**Sem Cloud Storage / sem cartão de crédito:** desde outubro de 2024 o Firebase Storage passou a exigir o plano pago (Blaze, com cartão cadastrado) mesmo dentro da cota gratuita. Por isso a plataforma não faz upload de arquivo — nas atividades do tipo "envio", o aluno escreve a resposta e/ou cola um link (Google Drive, Google Docs etc.). O restante (Authentication + Firestore) continua 100% no plano gratuito (Spark), sem cartão.

Essa camada usa o **Firebase** (Google) como backend — é a única parte do site que precisa de configuração externa; o catálogo de aulas continua funcionando sem ela.

### Estrutura da plataforma

```
login.html                   → login/cadastro (aluno ou professor)
player.html                  → abre uma aula/quiz dentro de uma atividade e grava o progresso
professor/dashboard.html     → turmas, aprovação de alunos, atividades, correção, engajamento
aluno/dashboard.html         → entrar em turma por código, ver atividades atribuídas
app/
  firebase-config.js         → config pública do seu projeto Firebase (você preenche)
  firebase-init.js           → inicialização do Firebase, reaproveitada por todas as páginas
  auth.js                    → cadastro/login/logout, proteção de página por papel (aluno/professor)
  data.js                    → leitura/escrita no Firestore (turmas, matrículas, atividades, submissões)
  catalog.js                 → catálogo de aulas (fonte única, usado pelo index.html e pelo painel do professor)
  util.js                    → escape de HTML e validação de links (segurança contra XSS)
  style.css, theme-toggle.js → visual e tema claro/escuro compartilhados pelas páginas da plataforma
firestore.rules              → regras de segurança do banco (publique no console do Firebase)
scripts/inject-progress-hook.js → anexa às aulas o gancho que reporta progresso ao player.html
```

### Configuração (uma vez só)

1. Crie um projeto gratuito em [console.firebase.google.com](https://console.firebase.google.com/), ative **Authentication** (provedor E-mail/senha) e **Firestore Database**.
2. Em Configurações do projeto → Seus apps → app Web, copie o objeto `firebaseConfig` e cole em `app/firebase-config.js`.
3. No console do Firebase, vá em **Firestore Database → Regras**, cole o conteúdo de `firestore.rules` e publique.
4. Suba as mudanças com `git push` — pronto, o login e os painéis passam a funcionar no site publicado.

### Como funciona, por trás

- **Multi-professor de verdade:** os dados no Firestore são organizados por professor (`teachers/{uid}/...`), então cada professor só vê suas próprias turmas, alunos e atividades — o mesmo site serve vários professores sem misturar dados.
- **Aprovação de aluno:** quando um aluno entra numa turma pelo código, cria-se uma matrícula com status `pending`; só depois que o professor aprova no painel é que o aluno passa a ver as atividades daquela turma.
- **Atividades ficam em cima do catálogo já existente:** o professor escolhe uma aula/quiz do `app/catalog.js` ao criar uma atividade — nenhum conteúdo é duplicado.
- **`player.html` é a ponte:** ele abre a aula real dentro de um `<iframe>`. Cada aula tem um pequeno script (injetado por `scripts/inject-progress-hook.js`) que avisa o `player.html`, via `postMessage`, quando foi aberta e quando um quiz foi concluído (com a nota) — sem precisar carregar o Firebase dentro de cada aula. Por isso as aulas continuam funcionando normalmente se abertas fora da plataforma (direto pelo catálogo, ou offline).
