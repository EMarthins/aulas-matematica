// Prepara o site para publicar: roda, em ordem, todos os "aplicadores" (idempotentes), regenera o banco de
// questões e executa os testes estáticos.
//
//   node scripts/preparar.js        (a partir da raiz do site)
const { spawnSync } = require('child_process');
const passos = [
  ['aulas na estrutura padrão (reestruturação automática)', 'scripts/reestruturar/reestruturar.js'],
  ['conferência da estrutura das aulas', 'scripts/reestruturar/conferir.js'],
  ['contas das questões dos módulos do CD', 'scripts/gerador-padrao/conferir-contas.js'],
  ['sobras da mini-linguagem nos módulos do CD', 'scripts/gerador-padrao/vazamentos-cd.js'],
  ['layout legível em qualquer tela', 'scripts/aplicar-layout.js'],
  ['fontes locais', 'scripts/aplicar-fontes.js'],
  ['progresso no aparelho do aluno', 'scripts/aplicar-progresso.js'],
  ['trava de acesso (aulas grátis x conta)', 'scripts/aplicar-acesso.js'],
  ['ferramentas (mapa, notas, glossário…)', 'scripts/aplicar-ferramentas.js'],
  ['figuras específicas e interativas das aulas mais usadas', 'scripts/aplicar-cenas.js'],
  ['aulas numeradas por módulo (sem o nº do RCO)', 'scripts/normalizar-aulas.js'],
  ['barra lateral (dados do catálogo)', 'scripts/gerar-nav.js'],
  ['página inicial (números reais)', 'scripts/landing/montar.js'],
  ['Home (hub depois do login)', 'scripts/hub/montar.js'],
  ['Trilhas de estudo por turma', 'scripts/trilhas/montar.js'],
  ['pendências de guia e atividades', 'scripts/pendencias-atividades.js'],
  ['banco de questões', 'scripts/gerar-banco.js'],
  ['banco autoral do Proveiro', 'scripts/validar-banco-provas.js'],
  ['sincronização com a nuvem', 'scripts/testar-nuvem.js'],
  ['trava de servidor das aulas', 'scripts/testar-gate.js'],
  ['monitoramento de erros', 'scripts/testar-monitor.js'],
  ['testes estáticos', 'scripts/testar.js']
];
// Saída enxuta (economiza leitura): cada passo vira 1 linha com tempo e a última linha de aviso; em falha mostra tudo.
// Use --verbose para ver a saída completa de todos os passos.
const verboso = process.argv.includes('--verbose');
let falhou = false;
const t0 = Date.now();
for(const [nome, arq] of passos){
  const t = Date.now();
  const r = spawnSync(process.execPath, [arq, '.'], { encoding: 'utf8', maxBuffer: 1 << 28 });
  const saida = (r.stdout || '') + (r.stderr || '');
  const seg = ((Date.now() - t) / 1000).toFixed(1) + 's';
  if(r.status !== 0){ falhou = true; console.log('✘ ' + nome + ' (' + seg + ') — falhou: ' + arq + '\n' + saida); break; }
  if(verboso) console.log('\n▶ ' + nome + '\n' + saida);
  else {
    const linhas = saida.split(/\r?\n/).filter(Boolean);
    console.log('✔ ' + nome + ' (' + seg + ')' + (linhas.length ? ' · ' + linhas[linhas.length - 1].slice(0, 120) : ''));
  }
}
console.log(falhou ? '\nHá problemas a corrigir antes de publicar.' : '\n✔ Pronto para publicar (git add -A && git commit && git push) · ' + ((Date.now() - t0) / 1000).toFixed(0) + 's');
process.exit(falhou ? 1 : 0);
