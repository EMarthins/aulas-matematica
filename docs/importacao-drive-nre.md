# Importação do Drive NRE 2026 e da pasta "Matemática"

Fonte do conteúdo novo (aulas reescritas) — não entram arquivos de terceiros no site, só texto reescrito e exercícios originais.

## Fontes
1. **Drive "Listas de Conteúdos e Planos de Aula PDF – NRE_2026"**: 3 trimestres × CCM / Tempo Integral / Ensino Fundamental / Ensino Médio. Cada PDF de plano traz links dos Google Slides de todas as aulas (públicos; `…/export/txt`).
2. **Pasta local `OneDrive\Aulas\Matemática`** (CD "Educador Interativo"): `DOCS` (ppt/pptx/pdf e planejamentos), `EXER` (listas e provas em Word/PDF por ano e Ensino Médio), `ANIM` (animações .swf), `VIDEO` (**não usar**), `TOOLS`/`AGENDA` (instaladores, ignorar). As animações .swf não são copiadas: as mais úteis serão refeitas como widgets próprios.

## Linha de produção (fora do repositório: `Aulas/fontes-nre/`)
- `tools/coletar.mjs` lê o PDF, extrai os links e baixa o texto de cada deck; `tools/indice.mjs` gera `indice.json`; `tools/ver.mjs <pdf> "<série>" <aula…>` mostra o texto limpo.
- Matemática: 932 decks coletados (EF 6º–9º, EM 1ª–3ª, recomposições).

## Como uma turma entra no site
1. Ler os decks da turma (`ver.mjs`) e agrupar em módulos de 1–3 aulas.
2. Escrever `scripts/gerador-2ano/vNN.js` (ou o gerador da série) só com as **aulas**, usando `rev.js` (revisões) ou os helpers do kit, `trig.js` e `geom.js` (figuras e widgets). Problemas **originais** (nunca copiados dos slides).
3. `meta.pendente: true` → o catálogo mostra "Guia visual e atividades · em breve" e o módulo entra em `docs/pendencias-atividades.md`.
4. `node scripts/gerador-2ano/build.js vNN` → `node scripts/gerador-2ano/catalogo.js` → `node scripts/preparar.js` → `testes.html?q=aulas/2-ano/2-tri&run=1`.

## Estado
- **Matemática 2ª série · 2º tri**: 22 módulos (v15–v36), 44 aulas (33–68 e retomadas R9–R16).
- Falta (Matemática): 6º, 7º, 8º e 9º anos (todos os trimestres), 2ª série 3º tri, 3ª série 3º tri e as recomposições. Depois: guias e atividades (alimentadas pela pasta EXER) e os demais componentes do Drive.

## Armadilhas do gerador
- `${` dentro de template literal interpola; em matemática use `$ {a|b}` ou aspas simples.
- `R$` seguido de não-dígito quebra a mini-linguagem (escreva "reais").
- `String.replace` com `$'`/`$&` no texto novo corrompe o arquivo: use `split().join()`.
- Não crie scripts com `cat <<EOF` contendo barras invertidas.
