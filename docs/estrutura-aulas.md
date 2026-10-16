# Estrutura padrão das aulas em slides (Exatas)

Definida pelo professor em 16/10/2026. Vale para todas as aulas novas de Exatas; imagens de contextualização são obrigatórias.

| # | Etapa | Slides | Tempo (aula de 50 min) | O que entra |
|---|---|---|---|---|
| 1 | Abertura e identificação | 1 | 5 min (com o 2) | título, **imagem de contexto**, pergunta instigante ou situação-problema, turma |
| 2 | Conhecimentos prévios | 1 | | pergunta rápida, desafio curto, situação cotidiana, votação/dupla |
| 3 | Objetivos | 1 | 3 min | 2–3 objetivos com verbos observáveis |
| 4 | Explicação | 2–4 | 12 min | definição, representação visual, regra/fórmula, exemplo simples |
| 5 | Exemplo resolvido | 1–2 | 8 min | problema, etapas reveladas uma a uma, justificativa, resposta destacada, verificação |
| 6 | Prática guiada | 1–2 | 7 min | questão parecida, pausa, dicas graduais, correção comentada |
| 7 | Prática independente | 1–3 | 10 min | objetiva, discursiva, contextualizada, V/F, desafio |
| 8 | Síntese e avaliação | 1–2 | 5 min | 3 ideias essenciais, pergunta de revisão, exit ticket, "o que ficou difícil?" |

Regras: uma ideia por slide; títulos curtos; texto grande; cor com função; gráficos e diagramas que expliquem; animação só para revelar etapas; respostas em slides posteriores.
Imagens: ilustrações/SVG originais (sem imagens de terceiros e sem .swf).
# Estrutura padrão das aulas em slides (Humanas)

História, Geografia, Filosofia e Sociologia. Centro da aula: contexto, fontes, perspectivas e explicação própria (painel de investigação, não apostila).

| # | Etapa | Slides | Tempo | O que entra |
|---|---|---|---|---|
| 1 | Abertura provocativa | 1 | 2 min | **imagem** histórica, mapa, notícia, frase controversa ou pergunta |
| 2 | Conhecimentos prévios | 1 | 3 min | o que a turma sabe, ideias equivocadas, experiências |
| 3 | Contextualização | 1–2 | 5 min | período, lugar, atores, condições (**imagem/mapa**) |
| 4 | Ideias centrais | 3–5 | 12 min | conceitos, causas e consequências, agentes e interesses, mudanças e permanências |
| 5 | Fonte, evidência ou estudo de caso | 1–2 | 7 min | quem produziu? em que contexto? que mensagem? o que revela e o que não permite concluir? |
| 6 | Análise, comparação ou debate | 1–2 | 8 min | interpretações diferentes; conclusão sustentada em evidências |
| 7 | Atividade de aplicação | 1–3 | 8 min | fonte inédita, causas e consequências, comparação, mapa/gráfico, justificativa |
| 8 | Síntese e questão de saída | 1 | 5 min | retomar a pergunta inicial, 3 ideias essenciais, pergunta de saída |

Eixos: **História** pergunta → contexto → causas → acontecimentos → fontes → consequências e interpretações · **Geografia** problema espacial → mapa/dado → conceitos → fatores → comparação de lugares → soluções · **Filosofia** dilema → pergunta → conceitos → argumento de um pensador → objeções → posição fundamentada · **Sociologia** fenômeno → dados e exemplos → conceitos → teorias → comparação de perspectivas → interpretação crítica.

Regras: fontes primárias e imagens com legenda e procedência; separar fatos documentados, interpretações de historiadores e opiniões dos alunos; evitar causa única e inevitabilidade; em mapas e gráficos, fonte, período, unidade e escala; debate sempre ligado ao objetivo.

Terceira estrutura, a definir: aula de **revisão e preparação para avaliações**.

## Conversão das aulas antigas (16/10/2026)

As aulas que já existiam (decks antigos: capa, roteiro, objetivos, gancho, teoria, exemplos, "Praticando", quiz, síntese) foram **reorganizadas na estrutura padrão sem criar conteúdo novo**, pelo script `scripts/reestruturar/reestruturar.js` (idempotente; roda sozinho no começo de `node scripts/preparar.js`, então um deck regenerado por um gerador antigo volta ao padrão).

O que o script faz em cada aula (Exatas e, de forma geral, as demais matérias):
- **Capa → abertura**: imagem de contextualização original (43 cenas em `scripts/gerador-padrao/ilus.js` + `ilus2.js`, escolhida pelo assunto) e a pergunta "Pense nisto" tirada do próprio gancho.
- "Para início de conversa" → **Conhecimentos prévios** (logo depois da abertura); "Roteiro" sai; objetivos ficam.
- "Exemplo resolvido" → **passo a passo**, com as etapas reveladas uma a uma (botão); o último exemplo (se houver 2+) vira **Prática guiada** ("tente antes de revelar"); com um só exemplo, a 1ª questão interativa faz o papel de guiada.
- "Praticando" / "Estilo SAEB/ENEM" → **Prática independente SEM resposta** (2 questões por slide) + **Correção comentada** (gabarito e comentário que já existiam na questão).
- "Cuidados" passa para depois da correção; "Síntese" ganha a **pergunta de revisão** (retoma o gancho); "Desafio final" vira **Exit ticket**; novo slide **"O que ainda ficou difícil?"** (autoavaliação guardada no aparelho).
- Em Humanas (História, Geografia, Filosofia, Sociologia, Arte, Português, Inglês, Ed. Física) o nome da etapa é "Atividade de aplicação". A estrutura completa de Humanas (fonte/evidência e análise/comparação) só existe nas aulas feitas direto no `gerador-padrao` (Português 6º ano); nas demais é uma adaptação.

Conferência automática: `node scripts/reestruturar/conferir.js` (seções/divs balanceadas, 1 slide ativo, ordem das etapas, imagem na capa). Relatório de trimestres: `node scripts/reestruturar/auditoria-trimestres.js` → `docs/auditoria-trimestres.md`.
