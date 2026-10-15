# EduMath Provas (fazedor de prova)

Página: `professor/prova.html` (menu **Painel → EduMath Provas**). Funciona sem login (o banco é público no site); se o professor estiver logado, o campo *Professor(a)* já vem preenchido.

## Como usar

A tela tem três colunas: **filtros → lista de questões → folha A4**.

1. **Filtros** (esquerda): busca por palavra-chave e listas de *turma/série*, *matéria*, *conteúdo*, *tipo*, *dificuldade* e *origem*. Cada lista mostra quantas questões existem com os outros filtros ativos; clique numa opção para filtrar (clique de novo para soltar). Clique no título da lista para **compactar/abrir**, e arraste a alça **⠿** para **mudar a ordem** das listas — o EduMath Provas lembra a sua arrumação. O botão do funil (na lista) esconde a coluna de filtros.
2. **Lista de questões** (meio): cartões grandes com o enunciado legível, miniatura da figura, tipo, turma, dificuldade e gabarito. *Compacta/Ampla* muda a densidade; **Ver completa ▾** abre a questão inteira no próprio cartão. **Arraste** o cartão para a folha ou clique em **+ Adicionar**.
3. **Folha** (direita): a prova em páginas A4 de verdade. Arraste as questões para reordenar, ou use ↑ ↓ ✕ ao passar o mouse. Clique no cabeçalho para editar o campo.
4. **☰ (canto superior direito)** abre a gaveta de configurações, com três listas que também compactam e mudam de lugar:
   - **Cabeçalho**: três modelos (caixas — baseado no modelo enviado —, linhas e compacto), título, subtítulo, logo, instruções e **pré-preenchimento** de escola, professor, turma, data e trimestre. Campo vazio = o aluno preenche. *Usar como padrão* grava os dados para as próximas provas.
   - **Prova**: questões da prova (arraste para reordenar, edite os pontos), dividir pontos, **versões A/B/C/D** (embaralha ordem e/ou alternativas; cada versão tem o seu gabarito) e **gabarito do professor** anexado ao final (com ou sem resolução).
   - **Layout**: 1 ou 2 colunas, tamanho da letra, margens, espaço entre questões, numeração, disposição das alternativas, linha entre colunas, rodapé.
5. **Assistente (bolinha de chat, canto inferior direito)**: escreva em uma frase, por exemplo *“5 questões de função quadrática, 1º ano”*, *“questões do ENEM de geometria espacial”*, *“dividir os pontos em 10”*, *“2 colunas com gabarito”*, *“versão B”*. Sem IA ligada, ele **procura no banco** (aplica os filtros e oferece “Adicionar N à prova”); com a IA ligada (veja abaixo), frases como *“crie 4 questões de porcentagem”* geram questões novas como rascunhos.
6. **PDF / Imprimir**: abre o diálogo do navegador; escolha *Salvar como PDF*, papel **A4**, margens **Nenhuma**, e desmarque “Cabeçalhos e rodapés”. Cada folha da tela é exatamente uma página A4. Para entregar aos alunos, imprima só as páginas da prova (as de gabarito têm a faixa *SOMENTE PROFESSOR*).
7. **Nova / Abrir / Salvar**: provas e “Minhas questões” ficam no navegador (localStorage). *Abrir → Exportar* gera um `.json` para guardar ou levar a outro computador.

Em telas pequenas, o botão **Banco / Folha** no topo alterna entre a lista e a folha, e os filtros abrem como gaveta.

`professor/prova.html?exemplo=1` abre uma prova de demonstração (`&cols=1`, `&gab=1` opcionais).

## Tipos de questão

| tipo | campos | no papel |
|---|---|---|
| `mc` Múltipla escolha | `alternativas:[{t,ok}]` (2–10, uma `ok`) | a) b) c)…; layout automático (linha / 2 colunas / 1 coluna) |
| `aberta` Aberta/discursiva (inclui demonstrações) | `resposta:{modo:'linhas'\|'branco'\|'quadriculado'\|'nenhum', n, altura}`, `gabarito` | linhas pautadas, espaço, papel quadriculado |
| `vf` Verdadeiro/falso | `afirmacoes:[{t,ok}]` | `( ) afirmação` |
| `soma` Somatória | `afirmacoes:[{t,ok}]` (até 7) | 01, 02, 04, 08, 16, 32, 64 + quadro "Soma: ☐☐"; gabarito soma automática |
| `assoc` Associação de colunas | `colunaA`, `colunaB`, `pares:[índice em B de cada item de A]` | `( )` + letras |

## Esquema de uma questão (`app/banco-provas.json` → `questoes[]`)

```json
{
  "id": "bp-fq-01",              // único
  "tipo": "soma",
  "materia": "Matemática",
  "serie": "1º Ano",             // filtro "turma/série" (9º Ano, 1º Ano, 2º Ano, 3º Ano, ENA · PROFMAT…)
  "unidade": "Função quadrática",// filtro "conteúdo"
  "topicos": ["parábola", "vértice"],   // palavras-chave (busca)
  "dificuldade": 2,              // 1 fácil · 2 média · 3 difícil
  "fonte": "Banco do professor", // filtro "origem" (ex.: "ENEM 2023", "Livro X")
  "pontos": 1,
  "enunciado": "Texto com $x^2 - {a|b}$ …",
  "figura": { "tipo": "funcao", "fs": ["x^2-4x+3"], "x": [-1, 5] },
  "afirmacoes": [{ "t": "…", "ok": true }],
  "resolucao": "Passo a passo / demonstração…",
  "gabarito": "só para aberta (resposta curta)"
}
```

### Matemática no texto
Qualquer campo de texto aceita `$ … $`: `{a|b}` fração · `√{x}`, `√[3]{x}` raiz · `x^2`, `x^{n+1}` expoente · `a_n` índice · `<= >= != => <=> -> +- ~=` símbolos · `"texto reto"`. Fora dos cifrões vale HTML (`<br>`, `<b>`, `&lt;`). "R$ 100" é tratado como dinheiro.

### Figuras (`figura` ou `figuras:[…]`, todas em preto e branco para imprimir bem)
- `{tipo:'img', src:'data:image/png;base64,…' | 'caminho/relativo.png', largura:'60%', alt, legenda}`
- `{tipo:'svg', svg:'<svg viewBox=…>…</svg>', largura}` — geometria, esquemas, o que o SVG desenhar (scripts e `on*=` são removidos)
- `{tipo:'funcao', fs:['x^2-4x+3', {e:'2x-1', rotulo:'g', tracejado:true}], x:[-1,5], y:[-2,4], pontos:[{x,y,rotulo,vazio}]}` — gráfico de funções (aceita `sen cos tg sqrt abs ln log exp`, `2x`, `^`)
- `{tipo:'barras', titulo, rotulos:[…], valores:[…], unidade}`
- `{tipo:'tabela', cab:[…], linhas:[[…]]}` (células aceitam `$matemática$`)

## Alimentando o banco

- **Pela página**: *+ Nova questão* (editor com prévia em tempo real e botões de fração/raiz/símbolos). Fica em "Minhas questões" no navegador; ⋯ → *Exportar* para guardar.
- **Pacote para o site** (vale para todos): coloque as questões em `app/banco-provas.json` e rode `node scripts/validar-banco-provas.js` (também roda em `node scripts/preparar.js`). Para importar um pacote de outra fonte, ⋯ → *Importar pacote*, ou converta o site de origem para este formato (cada questão com `tipo`, `serie`, `unidade`, `enunciado`, alternativas/afirmações, `resolucao`).
- **Questões das aulas** (`app/banco.json`, geradas por `scripts/gerar-banco.js`, só múltipla escolha) aparecem automaticamente com origem "Estilo ENEM / Quiz / Mini-quiz".
- Imagens: o editor reduz para ≤ 900 px e guarda como `data:`. Para o banco do site prefira arquivos em `app/img-questoes/` e `src` relativo ao `professor/` (`../app/img-questoes/x.png`).

## IA (preparada, não configurada)

O **assistente** (bolinha de chat): o chat já entende turma, conteúdo, tipo, dificuldade e quantidade, e o ⚙ do chat → *Ver o pedido que seria enviado* mostra exatamente o que seria mandado. Falta só ligar um servidor:

1. Crie uma função/servidor seu (Firebase Cloud Function, Cloudflare Worker…) que receba `POST` JSON `{ modelo, sistema, prompt, esquema }`, chame a API da IA **com a chave guardada no servidor** e devolva `{ "questoes": [ … ] }` (ou `{ "texto": "<resposta bruta da IA>" }`, que o app extrai).
2. Em `app/ia-prova.js` ponha `habilitado: true`, `endpoint` e `modelo` (ou preencha em ⚙ no chat do assistente, que grava no navegador).
3. As questões voltam validadas (`validar()`); as inválidas são descartadas e contadas. Entram em "Minhas questões" com origem **IA (rascunho)** — arraste para a prova depois de revisar.

Nunca coloque a chave da API no navegador nem no repositório.

## Provas do ENEM no banco

**Todas as questões** dos cadernos do ENEM 2018 (2º dia), 2020, 2021, 2022, 2023, 2024 e 2025 (1º e 2º dias, sem a Redação): Linguagens (com Inglês e Espanhol), Ciências Humanas, Ciências da Natureza e Matemática — 1.200 questões, todas com o **gabarito oficial do INEP** (caderno 1 no 1º dia e caderno 5 no 2º, o mesmo do recorte). Anuladas, marcadas como tal: 2018: 150 · 2020: 114 e 141 · 2021: 138 · 2022: 175 · 2023: 177 · 2024: 102 · 2025: 123, 132 e 174. Quase todas entram como imagem recortada do caderno (`app/img-questoes/`); só a Matemática de 2021/2025 está em texto. Disciplina e tópico vêm de `scripts/banco-provas/enem/rotulos-AAAA.js`; os gabaritos ficam em `gabaritos-AAAA.json` (rode `aplicar-gabaritos.js` e depois `montar-imagens.js` ao trocar algum). O campo `semGabarito` continua existindo para provas novas ainda sem gabarito.

- **Matemática (2021 e 2025):** transcritas em texto (reflowáveis, com alternativas que embaralham), exceto as anuladas.
- **Demais áreas:** entram como **imagem** recortada do caderno (`soImagem`), com o gabarito oficial; o texto de busca vem do próprio PDF (2025) ou de OCR (2021). Os textos de apoio compartilhados (ex.: 2025, questões 6 a 10) aparecem uma vez só quando as questões são seguidas na prova.
- Filtros: **Turma/série = ENEM**, **Matéria** = Linguagens / Ciências Humanas / Ciências da Natureza / Matemática, **Conteúdo** = “Disciplina · tópico” (ex.: “Física · Eletricidade”), **Origem** = ENEM 2021 / 2025 (INEP).
- Dados: `scripts/banco-provas/enem/dados-2021.js`, `dados-2025.js` (matemática em texto), `imagens-2021.json`, `imagens-2025.json` (recortes), `rotulos.js` (disciplina e tópico) e `montar-imagens.js`. Imagens em `app/img-questoes/`.
- Campos usados: `pergunta`, `layoutAlt`, `soImagem` + `imagens`, `base` (texto de apoio compartilhado), `anulada`, `busca` e imagens `img:arquivo` (resolvidas para `app/img-questoes/`).
- Questões em imagem são do tamanho do caderno (≈ meia página): em 2 colunas as de largura total encolhem; use **1 coluna** para elas.


## Exportar para Word (.docx)

Botão **Word** na barra do EduMath Provas (ao lado de "Imprimir / PDF"). Gera um arquivo editável com o mesmo conteúdo e configuração da prova: cabeçalho (modelos caixas/linhas/compacto/nenhum, logo, instruções, versão), colunas (1 a 3, com separador), fonte, margens, estilo de numeração ("1." ou "Questão 1"), pontuação, alternativas (1 por linha, 2 colunas ou na mesma linha), V/F, somatória, associação, espaço de resposta (linhas, em branco, quadriculado), rodapé "Página X de Y" e gabarito/resoluções anexados.

- **Código:** `app/docx.js` (sem bibliotecas; monta o pacote OOXML + zip; roda no navegador e no Node). O botão chama `baixarDocx()`.
- **Matemática:** frações e raízes viram **equações do Word** (OMML); expoentes/índices simples viram texto sobrescrito/subscrito; o restante é texto formatado (fonte Cambria).
- **Figuras:** gráficos/barras/SVG viram PNG (canvas), tabelas viram tabelas do Word, imagens (ENEM etc.) são embutidas (JPEG/PNG/GIF; webp é convertido).
- **Teste:** `node scripts/testar-docx.js saida.docx [colunas] [--gab]` monta uma prova de amostra e confere o XML; variações por variável de ambiente (`CAB`, `LAYOUT`, `VERSAO`). Para ver como o Word abre (PDF/PNG por página), usar automação COM do Word (exemplos em scratchpad: word-check.ps1, word-png.ps1).
- **Armadilhas já resolvidas:** o Word **funde tabelas coladas** (há um parágrafo mínimo entre elas); parágrafos iguais com borda inferior perdem as linhas (as linhas de resposta são uma tabela de linhas); atributo repetido em SVG (corrigido em figuras.js) quebrava a rasterização; `NUMPAGES` no rodapé só atualiza quando o Word pagina.
- **Limites:** layout em colunas depende da paginação do Word (pode diferir um pouco do PDF/impressão do site); equações em linha mostram frações menores que as do papel; não testado ainda em Word de Mac, Google Docs ou LibreOffice.

## Prova de exemplo e demonstração (sem cadastro)
`professor/prova.html?exemplo=1` (e o item "Carregar prova de exemplo" do menu ⋯) carrega uma prova pronta de 11 questões variadas (frações e raízes, gráfico, barras/tabela, figura, V/F, somatória, associação, aberta), cabeçalho preenchido, 2 colunas e gabarito anexado, com um aviso flutuante convidando a criar a conta. Funciona sem login (tudo no navegador) e já exporta Word/PDF. Links: página "Para professores" ("Ver uma prova pronta") e "Planos". Não existe uma conta de demonstração compartilhada de propósito: uma senha pública seria alterada/abusada por qualquer um; se quiser uma conta real de demo, crie-a e use o painel de admin para aprovar e dar Pro.

## Folha de respostas do aluno (cartão-resposta)

Em **☰ → Prova → Folha de respostas do aluno**:

- **Anexar a folha de respostas depois da prova (página separada)**: entra logo após as páginas da prova e antes do gabarito do professor; também sai no **PDF/imprimir** e no **Word**.
- **Uma linha por questão**, no formato do tipo: múltipla escolha = bolinhas A–E (com a quantidade certa de alternativas); V/F e associação = um quadrinho por afirmação/item (o aluno escreve V, F ou a letra); somatória = dois quadrinhos para a soma; aberta = linha para a resposta rápida. A legenda no topo só cita os tipos que existem na prova.
- **Colunas**: automático (1 coluna até 22 questões, 2 acima), 1 ou 2. O texto das **instruções** é editável; Turma e Data vêm do cabeçalho da prova.
- **Incluir também a folha preenchida (só professor)**: página com a faixa SOMENTE PROFESSOR e as respostas certas marcadas (vale para a versão A/B/C/D ativa).
- **Imprimir só a folha de respostas**: botão no mesmo bloco (liga o anexo, se preciso, e imprime só essas páginas).
- Pelo chat: “anexar folha de respostas”, “sem folha de respostas”.

Código: `app/folha-respostas.js` (modelo da linha + HTML; sem DOM, roda também no Node), CSS `.fr-*` em `app/prova-folha.css`, paginação em `prova-app.js` (`folhaFr`), Word em `app/docx.js` (`folhaRespostasBlocos`). Teste no Word: `FR=1 node scripts/testar-docx.js saida.docx 2 --gab`.
