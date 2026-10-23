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
