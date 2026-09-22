// Anexa o gancho de progresso (postMessage) a todas as aulas e infográficos,
// de forma idempotente (não duplica se rodar de novo).
const fs = require('fs');
const path = require('path');

const root = process.argv[2];
if(!root){ console.error('uso: node inject-progress-hook.js <site-dir>'); process.exit(1); }

const MARKER = 'LESSON-PROGRESS-HOOK';

const HOOK_AULA = `
<script>
(function(){
  // ${MARKER} — reporta progresso ao player.html quando embutido num <iframe>
  // autenticado; fora dele (aberto direto) isso é um no-op inofensivo.
  try{ window.parent.postMessage({type:'lesson-progress', event:'opened'}, '*'); }catch(e){}
  var qzGroups = document.querySelectorAll('.qz');
  if(qzGroups.length){
    var respondidos = 0, acertos = 0;
    document.addEventListener('click', function(e){
      var btn = e.target.closest ? e.target.closest('.qopt') : null;
      if(!btn) return;
      var group = btn.closest('.qz');
      if(!group || group.dataset.lpCounted) return;
      group.dataset.lpCounted = '1';
      respondidos++;
      if(btn.dataset.ok === '1') acertos++;
      if(respondidos === qzGroups.length){
        try{ window.parent.postMessage({type:'lesson-progress', event:'quiz-completed', score:acertos, total:qzGroups.length}, '*'); }catch(e){}
      }
    }, true);
  }
})();
</script>
`;

const HOOK_INFOGRAFICO = `
<script>
(function(){
  // ${MARKER}
  try{ window.parent.postMessage({type:'lesson-progress', event:'opened'}, '*'); }catch(e){}
})();
</script>
`;

function walk(dir, out){
  for(const name of fs.readdirSync(dir)){
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if(stat.isDirectory()) walk(full, out);
    else if(name.endsWith('.html')) out.push(full);
  }
}

const files = [];
for(const sub of ['aulas', 'educacao-financeira']){
  const p = path.join(root, sub);
  if(fs.existsSync(p)) walk(p, files);
}

let aulaCount = 0, infoCount = 0, skipCount = 0;
for(const f of files){
  let content = fs.readFileSync(f, 'utf8');
  if(content.includes(MARKER)){ skipCount++; continue; }
  const isInfografico = path.basename(f) === 'infografico.html';
  content += isInfografico ? HOOK_INFOGRAFICO : HOOK_AULA;
  fs.writeFileSync(f, content, 'utf8');
  if(isInfografico) infoCount++; else aulaCount++;
}

console.log(`aulas atualizadas: ${aulaCount}`);
console.log(`infográficos atualizados: ${infoCount}`);
console.log(`já tinham o gancho (puladas): ${skipCount}`);
console.log(`total de arquivos processados: ${files.length}`);
