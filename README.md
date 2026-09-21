# Prof. Eduardo — Matemática

Site com as aulas interativas e os guias visuais (infográficos) de Matemática da 2ª série do Ensino Médio. Funciona 100% offline — cada página é um arquivo HTML autocontido, sem instalação, sem servidor, sem login. Todas as páginas têm um botão de alternância de tema claro/escuro (canto superior direito) para ficarem legíveis em projetores de sala iluminada.

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
```

A estrutura segue `aulas/<ano>/<trimestre>/<unidade>/<arquivo>.html`, do mesmo jeito que suas pastas no OneDrive — assim fica fácil saber onde cada coisa nova entra.

## Como adicionar uma aula nova no futuro

1. Coloque o novo arquivo `.html` na pasta certa (crie a pasta se for um trimestre/unidade novo, seguindo o padrão acima — ex.: `aulas/2-ano/4-tri/probabilidade/aula.html`).
2. Abra o `index.html` e encontre o bloco `CATALOG` no `<script>`, perto do topo. Ele é uma lista simples de objetos JavaScript: um por ano, dentro dele os trimestres, dentro de cada trimestre as unidades, e dentro de cada unidade os itens (aulas/guias).
3. Copie um bloco de unidade existente como modelo e ajuste `titulo`, `accent` (`growth`, `decay` ou `primary` — cores já usadas no material), `icon` (`curve-up`, `curve-log` ou `grid`) e a lista de `itens`, apontando `arquivo` para o caminho relativo do novo `.html`.
4. Suba o `index.html` atualizado e a nova pasta pelo mesmo caminho do passo 2 acima (Add file → Upload files). O site atualiza sozinho, sem precisar mexer em mais nada — os contadores do topo ("Unidades", "Aulas", "Guias visuais") se recalculam automaticamente a partir da lista.

Não é necessário nenhum processo de build: é HTML puro, servido como está.
