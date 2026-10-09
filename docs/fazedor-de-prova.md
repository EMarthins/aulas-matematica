# Fazedor de prova

Página: `professor/prova.html` (menu **Painel → Fazedor de prova**). Funciona sem login (o banco é público no site); se o professor estiver logado, o campo *Professor(a)* já vem preenchido.

## Como usar

1. **Banco** (esquerda): busque por palavra-chave e filtre por *turma/série*, *matéria*, *conteúdo*, *tipo*, *dificuldade* e *origem*. Os filtros são "em cascata": cada lista mostra só o que existe com as outras escolhas e quantas questões há.
2. **Arraste** o cartão para a folha (ou clique em *+ Adicionar*). Dentro da folha, arraste as questões para reordenar, ou use ↑ ↓ ✕ ao passar o mouse.
3. **Cabeçalho** (direita → *Cabeçalho*): três modelos (caixas — baseado no modelo enviado —, linhas e compacto), título, subtítulo, logo, instruções, e **pré-preenchimento** de escola, professor, turma, data e trimestre. Campo vazio = o aluno preenche. *Usar como padrão* grava os dados para as próximas provas. Clicar no cabeçalho da folha leva ao campo correspondente.
4. **Prova**: lista e pontuação (dividir igualmente em N pontos), **versões A/B/C/D** (embaralha ordem e/ou alternativas; cada versão tem o seu gabarito) e **gabarito do professor** anexado ao final (com ou sem resolução).
5. **Layout**: 1 ou 2 colunas, tamanho da letra, margens, espaço entre questões, estilo da numeração, disposição das alternativas, linha entre colunas, rodapé.
6. **Imprimir / salvar PDF**: abre o diálogo do navegador; escolha *Salvar como PDF*, papel **A4**, margens **Nenhuma**, e desmarque "Cabeçalhos e rodapés". Cada folha da tela é exatamente uma página A4. Para entregar aos alunos, imprima só as páginas da prova (as de gabarito têm a faixa *SOMENTE PROFESSOR*).
7. **Salvar / Abrir**: provas e "Minhas questões" ficam no navegador (localStorage). *Abrir / importar → Exportar* gera um `.json` para guardar ou levar a outro computador.

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

Aba **IA** do fazedor: o formulário (turma, matéria, conteúdo, quantidade, dificuldade, tipos, instruções) e o pedido já funcionam — *Ver o pedido enviado* mostra exatamente o que seria mandado. Falta só ligar um servidor:

1. Crie uma função/servidor seu (Firebase Cloud Function, Cloudflare Worker…) que receba `POST` JSON `{ modelo, sistema, prompt, esquema }`, chame a API da IA **com a chave guardada no servidor** e devolva `{ "questoes": [ … ] }` (ou `{ "texto": "<resposta bruta da IA>" }`, que o app extrai).
2. Em `app/ia-prova.js` ponha `habilitado: true`, `endpoint` e `modelo` (ou preencha em *IA → Configuração (avançado)*, que grava no navegador).
3. As questões voltam validadas (`validar()`); as inválidas são descartadas e contadas. Entram em "Minhas questões" com origem **IA (rascunho)** — arraste para a prova depois de revisar.

Nunca coloque a chave da API no navegador nem no repositório.
