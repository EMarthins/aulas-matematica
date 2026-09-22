# Prof. Eduardo — Aulas e Guias

Site com as aulas interativas e os guias visuais (infográficos) de Matemática (2ª e 3ª séries) e Educação Financeira (3ª série) do Ensino Médio. A página inicial tem abas para alternar entre as matérias. Funciona 100% offline — cada página é um arquivo HTML autocontido, sem instalação, sem servidor, sem login. Todas as páginas têm um botão de alternância de tema claro/escuro (canto superior direito) para ficarem legíveis em projetores de sala iluminada.

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
2. Abra o `index.html` e encontre o array `MATERIAS` no `<script>`, perto do topo. Cada matéria tem `id`, `nome`, `icon`, `lede` (frase de apresentação) e um `CATALOG` — uma lista de objetos JavaScript: um por ano, dentro dele os trimestres, dentro de cada trimestre as unidades, e dentro de cada unidade os itens (aulas/guias).
3. Para uma aula em matéria já existente: copie um bloco de unidade existente dentro do `CATALOG` daquela matéria como modelo e ajuste `titulo`, `accent` (`growth`, `decay`, `primary` ou `danger` — cores já usadas no material), `icon` (veja o objeto `ICONS` logo abaixo do `CATALOG` para as opções disponíveis, ou crie uma nova entrada lá) e a lista de `itens`, apontando `arquivo` para o caminho relativo do novo `.html`.
4. Para uma matéria nova: copie um bloco de matéria inteiro (de `{ id: ...` até o `}` que fecha o `CATALOG` dela) como modelo dentro do array `MATERIAS`, e ajuste `id`, `nome`, `icon` e `lede`. A aba aparece automaticamente no topo da página.
5. Suba o `index.html` atualizado e a nova pasta pelo mesmo caminho do passo 2 acima (Add file → Upload files). O site atualiza sozinho, sem precisar mexer em mais nada — os contadores do topo ("Unidades", "Aulas", "Guias visuais") se recalculam automaticamente a partir da matéria selecionada.

Não é necessário nenhum processo de build: é HTML puro, servido como está.
