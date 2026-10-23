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
