// Prepara o site para publicar: roda, em ordem, todos os "aplicadores" (idempotentes), regenera o banco de
// questões e executa os testes estáticos.
//
//   node scripts/preparar.js        (a partir da raiz do site)
const { spawnSync } = require('child_process');
const passos = [
  ['layout legível em qualquer tela', 'scripts/aplicar-layout.js'],
  ['fontes locais', 'scripts/aplicar-fontes.js'],
  ['progresso no aparelho do aluno', 'scripts/aplicar-progresso.js'],
  ['trava de acesso (aulas grátis x conta)', 'scripts/aplicar-acesso.js'],
  ['ferramentas (mapa, notas, glossário…)', 'scripts/aplicar-ferramentas.js'],
  ['aulas numeradas por módulo (sem o nº do RCO)', 'scripts/normalizar-aulas.js'],
  ['barra lateral (dados do catálogo)', 'scripts/gerar-nav.js'],
  ['página inicial (números reais)', 'scripts/landing/montar.js'],
  ['Home (hub depois do login)', 'scripts/hub/montar.js'],
  ['Trilhas de estudo por turma', 'scripts/trilhas/montar.js'],
  ['pendências de guia e atividades', 'scripts/pendencias-atividades.js'],
  ['banco de questões', 'scripts/gerar-banco.js'],
  ['banco autoral do Proveiro', 'scripts/validar-banco-provas.js'],
  ['sincronização com a nuvem', 'scripts/testar-nuvem.js'],
  ['testes estáticos', 'scripts/testar.js']
];
let falhou = false;
for(const [nome, arq] of passos){
  console.log('\n▶ ' + nome);
  const r = spawnSync(process.execPath, [arq, '.'], { stdio: 'inherit' });
  if(r.status !== 0){ falhou = true; console.log('✘ falhou: ' + arq); break; }
}
console.log(falhou ? '\nHá problemas a corrigir antes de publicar.' : '\n✔ Pronto para publicar (git add -A && git commit && git push).');
process.exit(falhou ? 1 : 0);
