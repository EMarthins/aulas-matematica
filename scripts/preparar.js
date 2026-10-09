// Prepara o site para publicar: roda, em ordem, todos os "aplicadores" (idempotentes), regenera o banco de
// questões e executa os testes estáticos.
//
//   node scripts/preparar.js        (a partir da raiz do site)
const { spawnSync } = require('child_process');
const passos = [
  ['layout legível em qualquer tela', 'scripts/aplicar-layout.js'],
  ['fontes locais', 'scripts/aplicar-fontes.js'],
  ['progresso no aparelho do aluno', 'scripts/aplicar-progresso.js'],
  ['ferramentas (mapa, notas, glossário…)', 'scripts/aplicar-ferramentas.js'],
  ['banco de questões', 'scripts/gerar-banco.js'],
  ['banco autoral do fazedor de prova', 'scripts/validar-banco-provas.js'],
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
