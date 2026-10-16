# Checklist geral do EduMath — o que já foi feito e o que falta

Atualizado em 16/10/2026 (depois da reestruturação de todas as aulas). Marque ☑ quando concluir. Itens com 👤 dependem de **você**; itens com 🤖 o Claude consegue fazer.

## ✅ O que já está feito

### Aulas (slides)
- [x] **765 aulas publicadas** nas matérias visíveis (Matemática 596, Recomposição 75, Educação Financeira 79, Português 4 e 1 aula em cada uma de 11 matérias novas) + **116 aulas do ENA/PROFMAT** (aba oculta).
- [x] **Matemática 1ª, 2ª e 3ª série — 1º, 2º e 3º trimestres completos** (RCO): 1ª série (3 tri), 2ª série (1º, 2º e 3º tri), 3ª série (1º, 2º e 3º tri).
- [x] **Recomposição Matemática (9º ano)** como matéria separada, com seletor de matéria no catálogo (62 aulas novas + versão compacta antiga).
- [x] **Educação Financeira** 1ª, 2ª e 3ª série (3º trimestre) e Matemática 2ª e 3ª série 3º trimestre.
- [x] **Uma aula de cada matéria nova** (Português, Inglês, Arte, Ed. Física, Ciências, História, Geografia, Física, Química, Biologia, Filosofia, Sociologia).
- [x] **Estrutura padrão de aula (Exatas e Humanas)** documentada (`docs/estrutura-aulas.md`) e guardada na memória.
- [x] **Gerador da estrutura padrão** (`scripts/gerador-padrao`) e **amostra do 6º ano 1º tri**: Matemática (4 aulas) + Português (4 aulas).
- [x] **Reestruturação de TODAS as aulas antigas** (373 arquivos de slides) para a estrutura padrão, sem conteúdo novo: abertura com **imagem de contextualização original**, conhecimentos prévios, objetivos, exemplo passo a passo (etapas reveladas), prática guiada, prática independente **sem gabarito**, correção comentada, síntese com pergunta de revisão, exit ticket e "o que ainda ficou difícil?". Roda automaticamente no `preparar.js`.
- [x] **43 ilustrações originais** (biblioteca de cenas) escolhidas automaticamente pelo assunto de cada aula.

### Plataforma
- [x] Site no ar: edumath.com.br (Cloudflare Pages; push na `master` = deploy).
- [x] Landing → Home (hub) → catálogo com dropdown por trimestre; botão Home em todas as páginas; seletor de matéria.
- [x] EduMath Provas (banco com filtros, A4, exportar Word .docx) — 4.329 questões do CD Educador Interativo importadas.
- [x] Login, painel de administração, aprovação de professores, trilhas de estudo por turma.
- [x] Testes estáticos (`node scripts/preparar.js`) e teste geral no navegador.

## ⏳ O que falta

### Aulas e conteúdo
- [ ] 🤖 **Guia visual + 3 atividades** (ENEM, criativa, prática) para **79 módulos (195 aulas)** que saíram só com as aulas — lista em `docs/pendencias-atividades.md`.
- [ ] 👤→🤖 **Resto do 6º ano 1º tri no padrão novo** (Matemática aulas 05–32; mais módulos de Português) — depende do seu aval depois de ver a amostra.
- [ ] 🤖 **Turmas do NRE (Ensino Fundamental)**: 9º, 8º, 7º e 6º ano (PDFs de Matemática dos 3 trimestres já baixados) — sempre pedir aprovação antes de cada turma.
- [ ] 🤖 **Recomposições do Ensino Médio** (Drive NRE).
- [ ] 🤖 **Matérias novas**: só 1 aula cada; faltam trimestres inteiros ("em breve": 8 a 26 módulos por matéria).
- [ ] 🤖 **Educação Financeira**: só 3º trimestre nas 3 séries do Ensino Médio; 6º–9º ano e 1º/2º tri sem módulos.
- [ ] 👤 **Definir a 3ª estrutura (aula de revisão para avaliações)** — Exatas e Humanas já estão definidas, a de revisão ainda não.
- [ ] 🤖 **Humanas com a estrutura completa** (fonte/evidência + análise/comparação): hoje só o Português 6º ano tem; História, Geografia, Filosofia, Sociologia e demais receberam a adaptação (rótulo "Atividade de aplicação").
- [ ] 🤖 "Toque brilhante": polimento visual (suas observações de acabamento) — as 43 cenas são genéricas por assunto; dá para criar figuras mais específicas nas aulas mais usadas.
- [ ] 🤖 CD Educador Interativo: ~190 questões de múltipla escolha sem gabarito e 17 listas não segmentadas; aulas e turmas do CD ainda não importadas.

### Decisões de organização (ver `docs/auditoria-trimestres.md`)
- [ ] 👤 **3ª série · 3º tri**: 5 módulos antigos compactos (Sequências Numéricas, PA, PG, Trig. no Triângulo Retângulo, Trig. no Ciclo — 41 aulas) **repetem** os 10 módulos novos (37 aulas). Escolher: manter só um conjunto ou juntar os antigos num módulo "versão compacta" (como na Recomposição).
- [ ] 👤 **2ª série · 3º tri**: 3 módulos antigos compactos (Exponenciais, Logaritmos, Funções — 27 aulas) repetem os 13 módulos novos. Mesma decisão.
- [ ] 👤 **Recomposição 9º ano · 2º tri**: a "versão compacta" (13 aulas, 6 páginas que **não são slides**) repete 7 módulos novos; sugiro esconder ou apagar quando as atividades dos novos estiverem prontas.
- [ ] 👤 **Matemática 6º–9º ano**: só o 6º ano 1º tri tem aulas; os demais trimestres aparecem como "em breve". O 9º ano regular está vazio porque o conteúdo está na Recomposição — decidir se terá conteúdo próprio ou se esses espaços ficam escondidos.
- [ ] 👤 PA/PG aparecem na 2ª série (1º tri) e de novo na 3ª série (3º tri): conferir com a grade da SEED se a repetição é intencional.
- [ ] 👤 1ª série · 1º tri: conferir o plano de trimestre com o RCO (não consigo verificar localmente).

### Plataforma e venda
- [ ] 👤 **Publicar as regras do Firestore** (`firestore.rules`) — necessário para a sincronização das trilhas na nuvem.
- [ ] 🤖 **Planejador de aula (PTD)** — ideia "para depois".
- [ ] 👤 Itens do `docs/roadmap-venda.md`: INPI, advogado de direito autoral, preços/Pix/WhatsApp (`app/config-venda.js`), piloto com 10 professores, MEI/CNPJ, termos revisados.
- [ ] 🤖 Trava real do conteúdo pago, Sentry/analytics, botão "Reportar erro", conta de demonstração (roadmap, fases 1–2).
- [ ] 👤 **Revisar uma amostra grande do conteúdo** (matemática, português, gabaritos) antes de vender.

### Para colocar no ar
- [ ] 👤 **Dizer "deploy"** — a reestruturação está feita e testada localmente, mas só vai ao ar com o seu aval (o Service Worker passa para a v36).

## 🧪 Resultado do teste geral (16/10/2026, 1366×768)
- Testes estáticos: **881 páginas ok** (`node scripts/preparar.js`); estrutura das aulas: **381 reestruturadas, 0 com problema** (`conferir.js`).
- Teste no navegador (`testes.html`, só aulas): **387 páginas · 377 ok · 10 avisos · 0 falhas** (sem erro de JavaScript, sem rolagem horizontal).
- Os 10 avisos são **slides que rolam um pouco na vertical** e **já eram assim antes da reestruturação** (conferi comparando com a versão antiga): Quiz/Exit ticket do 9º ano · operações com racionais (18 px, 3 aulas), "Teoria · fração de uma quantidade" (249 px) e "fração parte/razão/misto" (9 px) no módulo Números racionais, e 5 aulas do ENA (oculto). Ajuste fino de espaçamento = pendência de acabamento.
- Pendência de acabamento anotada: 6 páginas compactas da Recomposição 2º tri (`aula-1-poligonos.html`…) **não são slides**, por isso não entraram na reestruturação.
