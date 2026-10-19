# Plataforma — o que entrou em 19/10/2026

## 1. Planejador de aula (PTD) — `professor/planejador.html`
- Monta o **Plano de Trabalho Docente** do trimestre: identificação, conteúdos, objetivos, habilidades (BNCC), metodologia, recursos, avaliação/recuperação, **cronograma de aulas** e referências, com assinaturas.
- Os **módulos vêm do catálogo** (matéria → série → trimestre); marcando módulos, o botão "Montar cronograma" cria uma linha por aula e "Buscar objetivos nas aulas" lê o slide *Objetivos da aula* de cada aula.
- "Distribuir datas": primeira aula + dias da semana + aulas por encontro + feriados/recessos (dd/mm).
- Saída: **Imprimir / salvar PDF** e **Baixar para Word (.doc)** (abre no Word; tabela do cronograma incluída).
- Vários planos por aparelho (novo, duplicar, excluir, exemplo). Fica salvo no **navegador** (localStorage), sem nuvem ainda.
- `?demo=1` abre sem conta com um plano de exemplo (usado pela página `demo.html`).
- Links: menu lateral (Professor), Home, topo das páginas do professor.

## 2. Reportar erro
Já existia e continua ligado (menu ⋯ das aulas e do EduMath Provas → coleção `reports` → aba "Relatos de erro" do admin). Só foi conferido.

## 3. Monitoramento — `app/monitor.js`
- **Funciona hoje, sem conta:** erros de JavaScript do site publicado viram um relato automático (categoria "Erro automático") na aba Relatos do admin. Limites: 3 por visita, sem repetir, ignora extensões/rede/outros domínios, não envia dados pessoais.
- **Sentry** e **Cloudflare Web Analytics**: já têm o código pronto; falta colar as chaves no topo de `app/monitor.js` (`sentryLoader`, `cfBeaconToken`) — passo a passo no comentário do arquivo. Criar as contas é com você.
- Só liga em `edumath.com.br` e `edumath.pages.dev` (nunca no localhost). Teste: `node scripts/testar-monitor.js`.

## 4. Trava real das aulas (servidor) — `functions/`
- **Cloudflare Pages Functions** (`functions/_middleware.js` + `functions/_gate.js`, rotas em `_routes.json`): para `/aulas/*`, `/educacao-financeira/*` e `/ena-profmat/*`, só entrega as páginas `.html` com **login válido**. As aulas grátis (`functions/_gratis.js`, gerado por `scripts/aplicar-acesso.js`) abrem para todos.
- Como funciona: `app/auth.js` grava o token do Firebase no cookie `edu_t` (1 h, renovado sozinho); o servidor confere a **assinatura** com as chaves públicas do Google (projeto `estude-app-marth`). Sem cookie válido: HTTP 401 com uma página que tenta renovar o cookie a partir do login e recarrega; se não há login, mostra "Entrar / Criar conta / Ver aulas grátis".
- Hoje "pago" = **ter conta** (mesma regra da trava do navegador). Para exigir plano Pro no futuro, mude a função `permite` em `_middleware.js`.
- Se o Google estiver fora do ar e as chaves não puderem ser buscadas, a página **abre** (não derruba o site) e responde com o cabeçalho `X-Edu-Gate: bypass`.
- Testes: `node scripts/testar-gate.js` (38 verificações: token válido/expirado/adulterado/de outro projeto, caminhos, cache, XSS) — roda no `preparar.js`. Também foi exercitado no runtime real da Cloudflare (`wrangler pages dev`): 401 sem cookie, 200 nas grátis e nas páginas do site.
- **Limites e cuidados:**
  - Plano Free da Cloudflare: 100 mil execuções de Functions por dia (cada página/arquivo em `/aulas/*` conta).
  - **O repositório no GitHub ainda é PÚBLICO** (e o GitHub Pages segue no ar): enquanto for assim, qualquer um lê as aulas direto no GitHub. A trava de servidor só protege de verdade depois de tornar o repositório **privado** e desligar o GitHub Pages (ver `docs/roadmap-venda.md`).
  - Reverter rapidamente: esvaziar `include` em `_routes.json` (ou apagar a pasta `functions/`) e dar push.
  - Se algo der errado com quem está logado, a página de bloqueio pede para sair e entrar de novo.

## 5. Conta de demonstração e teste grátis
- **`demo.html` ("Experimente sem criar conta")**: 4 passos de 5 minutos, sem cadastro — prova de exemplo (`professor/prova.html?exemplo=1`), planejador com plano de exemplo, uma aula grátis e o catálogo — com barra de progresso e chamada final para criar a conta. Ligada na página inicial, no login e na Home (visitante).
- **Teste grátis do Pro**: todo professor novo recebe o Pro por `VENDA.diasDeTeste` dias (14) a partir do cadastro (`teachers/{uid}.createdAt`); depois volta ao Gratuito sozinho. Aparece como "Pro (teste grátis)" em Minha conta e no painel do professor, com os dias restantes. Quem tem plano liberado pelo admin não é afetado. (Lógica em `app/planos.js`.)
- Não foi criada uma conta real de demonstração no Firebase: criar contas no serviço de produção é com você. A demonstração sem conta cobre o mesmo caminho.
