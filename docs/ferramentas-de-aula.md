# Ferramentas de apresentação (decks de aula)

Menu **⋯** (canto superior direito) → carregado por `app/ferramentas.js`; a caneta vem de `app/quadro.js` (carrega só quando usada).

| Tecla | Ferramenta |
|---|---|
| **D** | Caneta e quadro (barra flutuante, arrastável) |
| **F** | Tela cheia |
| **B** | Apagar a tela (atenção da turma); toque ou B volta |
| M / N / T / L / O / H / + / − | Mapa, notas, cronômetro+sorteio, copiar link, ouvir, alto contraste, fonte |

## Caneta e quadro (`app/quadro.js`)
- Ferramentas (teclas 0–7 com a barra aberta): 🖱 interagir com o slide · ✏️ caneta · 🖍 marca-texto · 🧽 borracha (apaga o traço tocado) · 𝗧 texto · 🔴 laser · 🔦 holofote · ⬛ cobrir área (a borracha revela).
- Formas: reta, seta, retângulo, círculo/elipse, triângulo (Shift = reto/quadrado/círculo) e **ângulo** em 3 cliques com a medida em graus.
- Cores, 3 espessuras, desfazer/refazer (Ctrl+Z / Ctrl+Y), limpar slide, salvar PNG, **votação rápida A–E**.
- **Quadro lateral** (◧ esquerda / ◨ direita): o slide encolhe para 75% da largura e libera 1/4 para escrever; fundos: branco, quadriculado, pontilhado, eixos cartesianos, pautado.
- Cada slide guarda as próprias anotações (sessão do navegador). Mouse, toque e caneta (rejeição de palma). Não imprime.

## Sugerir melhoria
Menu ⋯ → **💡 Sugerir melhoria**: mesma janela do "Reportar erro" (`app/reportar.js`, `modo: 'sugestao'`); grava na coleção `reports` com categoria `Sugestão: …` (aparece em admin.html → Relatos; não exigiu mudar `firestore.rules`).

## Ideias para depois
Lupa em figuras · gravar/replay das anotações · exportar a aula com as anotações em PDF · "modo aluno" que replica a caneta do professor em tempo real · rubricas/stickers (✔ ✘ ★) · cronômetro visível em tela cheia · controle por celular (clicker).

## Figuras específicas e interativas de abertura (23/10/2026)
- As 34 aulas grátis (mais usadas) trocaram a figura genérica do 1º slide por uma cena interativa (`app/cenas.js` = motor + 23 cenas de Matemática; `app/cenas2.js` = 11 cenas de outras matérias, carregado sob demanda).
- Ligação: `scripts/aplicar-cenas.js` (passo do `preparar.js`) marca `<figure class="fig-ctx" data-cena="id">` e adiciona o script. Se o JS falhar, a figura genérica continua.
- Nova cena: `EduCenas.reg(id, {alt, leg, est, ctl, svg(e), lei(e)})` e mapear a pasta em `MAPA` do script.

## Instrumentos, seleção e calculadora (23/10/2026, `app/quadro.js` + `app/calculadora.js`)
- **Instrumentos** (grupo "Instrumentos" da barra): 📏 régua 15 cm (mm/cm), esquadros 45° e 60° (com os ângulos e escalas), transferidor 180° (duas escalas; o ponto vermelho do centro "gruda" o vértice da ferramenta ∠ e do compasso). Arrastar pelo corpo, girar pela alça ↻ / roda do mouse (Shift = fino) / teclas `[` `]`; a alça encaixa em 0°/90° e Shift gira de 15° em 15°. **A caneta, retas, setas e o medidor "grudam" na borda** (ficam perfeitamente retos). `R` liga/desliga a régua.
- **Compasso** (9): centro + raio, mostra `r = x cm`. **Medir** ↔: segmento com o comprimento em cm. **Carimbos** (8): ✔ ✘ ★ ? ! (clique de novo no botão para trocar). **Tracejado**. **Malha sobre o slide** (#): quadriculada / pontilhada / eixos numerados.
- **Selecionar ⬚ (V)**: clique, Shift+clique ou caixa de seleção; arrastar = mover; alças = redimensionar (cantos proporcional, Alt = livre; lados = esticar) e girar (↻; retângulo/triângulo/elipse viram polilinha ao girar). Ações: **↔ Endireitar** (desenrola qualquer curva, círculo ou polígono numa reta do **mesmo comprimento**, com animação; mostra "= 6,28 × o raio" para o círculo e o perímetro do polígono), **⌒ Curvar** (dobra uma reta em arco mantendo o comprimento; mostra θ em rad e graus, R e imãs em 1 rad, π/2, π, 3π/2, 2π), **1 rad** (num círculo do compasso: marca o arco de comprimento igual ao raio — depois ↔ Endireitar mostra que o arco = raio), ⧉ Duplicar, 🗑 Excluir (Delete). Esc desmarca.
- **Lousa cheia** ▣ (quadro em branco no lugar do slide, mantendo a barra de navegação) e **lousa escura** 🌑 (giz); fundos: branco/quadriculado/pontilhado/eixos/pautado.
- **Desfazer/refazer** agora guarda estados completos do slide (inclui mover, girar, endireitar…), até 60 passos.
- **Calculadora científica** 🧮 (tecla K no deck ou botão na barra): sin/cos/tan (DEG/RAD), log, ln, √, ^, π, %, !, parênteses, multiplicação implícita; sem `eval`.

## Gráficos de funções e figuras de apoio (23/10/2026)
- **ƒ Gráficos** (`app/graficos.js`; botão ƒ da caneta, menu ⋯ ou tecla G): janela móvel/redimensionável/maximizável. Digite `y = x^2 − 4x + 3`, `a x^2 + b x + c` (aparecem controles deslizantes a, b, c, d; duplo clique no controle zera), pontos `(2; 3)` e retas `x = 3`; até 4 linhas coloridas. Mostra **raízes, intercepto y, máximos/mínimos e interseções** (liga/desliga em "Pontos notáveis"), tabela de valores (7 linhas, x inicial e passo editáveis), eixo x em múltiplos de **π** para trigonometria, arrastar = mover, roda/pinça = zoom, duplo clique = vista inicial. Interpretador próprio (sem eval): `sen/sin cos tan asin acos atan log ln sqrt/raiz abs exp`, `π`, `e`, multiplicação implícita (`2x`, `3sin(x)`).
- **🧩 Figuras de apoio** (`app/figuras-apoio.js`; botão 🧩 ou tecla I): 21 figuras entram como traços da caneta, **já selecionadas** (mover/redimensionar/girar/duplicar/apagar e escrever por cima): cubo, paralelepípedo, prisma, pirâmide, cilindro, cone, esfera (arestas ocultas tracejadas, fórmulas do volume); triângulo retângulo e qualquer, retângulo, círculo (r, d, C, A), paralelas e transversal, Venn, barra e pizza de frações; reta numérica, plano cartesiano, círculo trigonométrico (16 ângulos em graus e rad); tabela, linha do tempo, mapa mental. `EduQuadro.inserir(lista)` aceita qualquer lista de traços (coordenadas em unidades ~±150 em torno do centro) — é por onde entram figuras novas (acrescentar em `FIG` de figuras-apoio.js).

## Cenas interativas também nas aulas pagas (23/10/2026)
- **65 cenas** abrem o 1º slide: 34 escolhidas a dedo para as aulas grátis (`cenas.js` = motor + Matemática; `cenas2.js` = Humanas/Ciências) e **31 por tema** em `app/cenas3.js` (função afim, máquina de funções, exponencial, logaritmo, PA, PG, círculo trigonométrico, seno/cosseno, leis dos senos/cossenos, Pitágoras, dados e medidas de tendência central, amostra, áreas, círculo, volumes, porcentagem, valor posicional, MMC/MDC, divisores, potências, produtos notáveis, sistemas, proporção, ângulo inscrito, existência de triângulos, quadriláteros, plano cartesiano, cônicas, contagem, probabilidade, juros compostos).
- **155 aulas** (a 1ª de cada módulo de Matemática do 6º ao 9º ano e do EM) receberam a cena do tema por **regras de nome de pasta** em `scripts/aplicar-cenas.js` (`REGRAS`; roda no `preparar.js`). Para ligar outro módulo: acrescentar/ajustar uma regra (ou uma linha em `MAPA`) e rodar o script.
- Módulos sem cena (ficam com a figura genérica): Língua Portuguesa, recomposição, "retomadas", armazenamento de dados e os 6 módulos cuja 1ª aula não tem a figura padrão de abertura. Falta também cena nos demais slides das aulas ("interagir em todos os slides").
- Nova cena: `EduCenas.reg(id, {alt, leg, est, ctl, svg(e), lei(e)})` em `cenas3.js` e uma regra no script.
