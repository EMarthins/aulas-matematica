# Questões do CD no EduMath Provas

O CD "Educador Interativo" (pasta `OneDrive/Aulas/Matemática`) virou três lotes do banco `app/banco-provas.json`. Todos entram **como recorte de imagem** (`soImagem: true`, mesma ideia das questões do ENEM): o enunciado fica fiel ao original (fórmulas, figuras, tabelas) e o banco guarda tipo, gabarito, série e conteúdo para filtrar, montar prova, gerar versões e exportar para Word.

| lote | origem | questões | gerador |
|---|---|---|---|
| `cdb-cNN-NNN` | "Banco de Questões de Matemática" (PDF, 26 capítulos de vestibular, gabarito no fim de cada capítulo) | 1.253 (895 múltipla escolha, 144 V/F, 86 somatória, 128 abertas) | `scripts/banco-provas/uno/montar.js` + `recortes.json` |
| `cdb-sim-*` | Simulados B1–B8 e Atividades 01–03 (PDF só de imagem; gabarito lido da última página ou resolvido) | 168 (7 sem gabarito) | `scripts/banco-provas/simulados/montar.js` + `recortes.json` + `gabaritos.json` |
| `cdb-l-*` | 232 listas de exercícios (pasta EXER: EF 6º–9º e Ensino Médio) exportadas do Word para PDF | ~1.650 (405 múltipla escolha, o resto aberta; 421 com a **resolução em imagem**) | `scripts/banco-provas/listas/montar.js` + `itens.json` + `correcoes.json` |

As imagens ficam em `app/img-questoes/` (`cdb-…jpg`; as resoluções terminam em `-r.jpg`). `prova-app.js` troca `img:cdb-…` pelo caminho real, como já fazia com `img:enem…`.

## Campos novos / comportamento

- `tipo: 'vf' | 'soma' | 'aberta'` também valem com `soImagem` (o gabarito vai em `gabarito`: `V – F – V`, `46`, texto). A folha mostra a caixa **Soma** ou o espaço de resposta (`resposta.modo/altura`).
- `imgPrevia: true` → o cartão do banco mostra o recorte em vez do texto OCR/PDF (que vem embaralhado nas fórmulas).
- `resolucaoImg: { src, larguraMm }` → resolução em imagem; aparece no gabarito do professor (tela, impressão e Word) e em "Ver completa".
- `base: { id, src, larguraMm }` (já existia) → textos de apoio compartilhados entre questões seguidas.
- `semGabarito: true` → o gabarito não pôde ser lido; aparece "—".

## Como regenerar (ferramentas fora do repositório, em `Aulas/fontes-nre/tools/`)

1. **Banco UNO**: `uno-layout.mjs` (posições do texto) → `uno-segmentar.mjs` (questões + gabarito) → renderizar páginas com `pdf-para-png.ps1` → `uno-recortar.mjs` → copiar `uno/out/*.jpg` e `uno/recortes.json`.
2. **Simulados em imagem**: `pdf-para-png.ps1` → `ocr.ps1 -Lista` (OCR do Windows, pt-BR) → `simulado-segmentar.mjs`.
3. **Listas Word**: `doc-para-pdf.ps1` (Word → PDF) → `importar-listas.mjs listar/segmentar` (+ `pdf-lote-png.ps1`) → `publicar-listas.mjs` (filtra alturas, copia imagens e `itens.json` para o site).
4. Rodar o `montar.js` do lote e `node scripts/validar-banco-provas.js`.

## Observações

- Material de terceiros (banco comercial de vestibulares, listas de exercícios): conferir direitos antes de vender/publicar em massa. A origem de cada questão aparece no próprio recorte e, nas listas, em `topicos`.
- Questões com figura que encobre as alternativas no original (B7-08, B7-11) foram deixadas de fora.
- ~190 questões de múltipla escolha das listas ainda estão sem gabarito (a resolução está em imagem ou a lista não traz); o campo `correcoes.json` aceita `{ "cdb-l-…": { "gab": "C" } }`.

## Atualização 19/10/2026 — gabaritos e módulos criados
- Todas as questões **abertas** das listas EXER que vieram sem resposta ganharam gabarito (arquivos `scripts/banco-provas/listas/abertas-lote.txt`, `gab-lote.txt`); recortes defeituosos saíram (`excluir-lote.txt`); dúvidas ficam em `duvidosos-lote.txt`.
- Fluxo: `fontes-nre/tools/publicar-listas.mjs` → `listas/montar.js` → `aplicar-gabaritos.js` → `validar-banco-provas.js`. `listas/pendentes.js` mostra o que ainda falta (hoje 0).
- `lote-02.js`: 9 questões de nivelamento (álgebra e equações) do `.docx` do CD.
- Total no banco: 4.314 questões. Todas as mc têm gabarito (2 de simulado foram excluídas por figura ambígua). Listas recortadas à mão: `fontes-nre/tools/manual-recortes.mjs` (+ `listas/manual-spec-*.json`).

## Atualização 20/10/2026 — questões em imagem → texto (padrão da prova em 2 colunas)
**Pedido:** transcrever tudo o que não é figura. Só ficam como imagem as questões em que o desenho é o próprio enunciado ou as alternativas.

- **Resultado:** 4.036 das 4.336 questões estão transcritas (`transcrita: true`): enunciado em HTML com a mini-linguagem de fórmulas, alternativas/afirmações em texto, figuras recortadas só quando necessárias (`figura/figuras`: img, tabela, svg…). **146 continuam como imagem** (`soImagem`): 52 ENEM + 28 cdb-c + 13 cdb-sim + 53 cdb-l. A lista com o motivo de cada uma está em `scripts/banco-provas/transcrever/manter.txt`.
- **Mini-linguagem (app/matematica.js):** `$…$`, `{a|b}` frações, `√{x}`, `^`, `_`, e novas estruturas `@M{a&b;c&d}` (matriz/binomial), `@D{…}` (determinante), `@S{eq1;eq2}` (sistema/chaves). Dinheiro: `R$` vira `R&#36;` automaticamente. O Word (`app/docx.js`) exporta as estruturas como equações OMML.
- **Fluxo (`scripts/banco-provas/transcrever/`):** `proximo.js <qtd> <porFolha> <filtro>` gera folhas de contato; escrever os dados num `.js`, converter em `lote-NNN-….jsonl`; `aplicar-transcricoes.js` aplica todos os lotes (campos `e,p,a,af,fig,figs,alts,tab,tabs,svg,extra,tipo,ok,gabarito…`); `reabrir.js <ids>` devolve ao estado-imagem para refazer; `transcritas.js salvar|restaurar` guarda/recupera o estado; `node scripts/validar-banco-provas.js` valida tudo.
- **Gabaritos:** preservados das entradas antigas (letra `ok`, soma, V/F). Onde o gabarito antigo era só “texto” de questão que na verdade é múltipla escolha, foi corrigido para `mc`.
- **Conferência:** cada lote foi visto em pré-visualização de duas colunas (Chrome headless). Figuras de página escaneada (ex.: Teorema de Tales) vêm do recorte original.
- **Limites honestos:** parte das ~1.700 questões aceitas automaticamente no início (texto do PDF/OCR sem revisão linha a linha) foi só conferida por amostragem; erros de digitação podem existir. Alts de figura (`alt`) são descrições para acessibilidade escritas à mão.
