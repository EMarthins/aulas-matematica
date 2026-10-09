# Proveiro (fazedor de prova)

Página: `professor/prova.html` (menu **Painel → Proveiro**). Funciona sem login (o banco é público no site); se o professor estiver logado, o campo *Professor(a)* já vem preenchido.

## Como usar

A tela tem três colunas: **filtros → lista de questões → folha A4**.

1. **Filtros** (esquerda): busca por palavra-chave e listas de *turma/série*, *matéria*, *conteúdo*, *tipo*, *dificuldade* e *origem*. Cada lista mostra quantas questões existem com os outros filtros ativos; clique numa opção para filtrar (clique de novo para soltar). Clique no título da lista para **compactar/abrir**, e arraste a alça **⠿** para **mudar a ordem** das listas — o Proveiro lembra a sua arrumação. O botão do funil (na lista) esconde a coluna de filtros.
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

88 questões de Matemática do **ENEM 2021 e 2025** (2º dia, caderno azul, questões 136–180 — as anuladas ficam de fora), com gabarito oficial e figuras recortadas dos cadernos do INEP. Aparecem no filtro **Turma/série = ENEM** e **Origem = ENEM 2021/2025 (INEP)**, separadas por conteúdo. Ainda sem resolução comentada.

- Dados: `scripts/banco-provas/enem/dados-2021.js` e `dados-2025.js` (transcrição conferida; coordenadas dos recortes `fig`/alternativas em figura). Imagens em `app/img-questoes/`.
- Campos novos usados por elas: `pergunta` (texto depois da figura), `layoutAlt` (força a disposição das alternativas) e imagens `src: "img:arquivo.png"` (resolvidas para `app/img-questoes/`).
- Para acrescentar outro ano: copie o formato de um `dados-AAAA.js`, ponha o PDF do caderno e do gabarito e rode o montador (ele recorta as figuras e grava em `app/banco-provas.json`). Provas só com gabarito (sem o caderno de questões) não têm como entrar.
