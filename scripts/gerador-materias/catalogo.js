// Integra a 1ª aula de cada matéria nova ao app/catalog.js (idempotente):  node scripts/gerador-materias/catalogo.js
// Cada matéria vira um bloco  // >>> novas-<id> … // <<< novas-<id>  no fim do array MATERIAS (na ordem de NOVAS em app/catalog-extra.js).
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r\n/g, '\n');
// metadados (id, nome, icon, lede) vêm de NOVAS em catalog-extra.js, para não duplicar texto
const ex = fs.readFileSync(path.join(__dirname, '../../app/catalog-extra.js'), 'utf8').replace(/\r\n/g, '\n');
const FUND = [], MEDIO = [], TODOS = [];
const NOVAS = eval(ex.slice(ex.indexOf('const NOVAS = [') + 'const NOVAS = '.length, ex.indexOf('\n];', ex.indexOf('const NOVAS = [')) + 3));
const q = t => String(t).split(String.fromCharCode(92)).join(String.fromCharCode(92, 92)).split("'").join(String.fromCharCode(92) + "'");
const units = fs.readdirSync(__dirname).filter(n => /^m\d\d[\w-]*\.js$/.test(n)).sort().map(n => require('./' + n).meta);
const blocos = NOVAS.map(n => {
  const u = units.find(x => x.materia === n.id); if (!u) return null;
  const itens = u.aulas.map(a => `                  { tipo:'${a[0]}', titulo:'${q(a[1])}', arquivo:'${u.pasta}${a[2]}' }`).join(',\n');
  return { id: n.id, txt: `  // >>> novas-${n.id}
  {
    id: '${n.id}',
    nome: '${q(n.nome)}',
    icon: '${n.icon}',
    lede: '${q(n.lede)}',
    CATALOG: [
      {
        ano: '${u.ano}',
        trimestres: [
          {
            nome: '${u.tri}° Trimestre',
            unidades: [
              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',
                pendente: true,
                itens: [
${itens}
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  // <<< novas-${n.id}
` };
}).filter(Boolean);
// remove blocos antigos e reinsere todos antes do fim do array MATERIAS
s = s.replace(/  \/\/ >>> novas-[\w-]+\n[\s\S]*?  \/\/ <<< novas-[\w-]+\n/g, '');
// o último bloco existente (ENA) precisa de vírgula antes dos novos
s = s.split('  }'+String.fromCharCode(10)+'  // <<< ena-profmat'+String.fromCharCode(10)).join('  },'+String.fromCharCode(10)+'  // <<< ena-profmat'+String.fromCharCode(10));
const fim = s.lastIndexOf(String.fromCharCode(10) + '];' + String.fromCharCode(10), s.indexOf('export const ICONS'));
if (fim < 0) throw new Error('fim do array MATERIAS não encontrado');
s = s.slice(0, fim + 1) + blocos.map(b => b.txt).join('') + s.slice(fim + 1);
if (crlf) s = s.replace(/\n/g, '\r\n');
fs.writeFileSync(f, s);
console.log('Matérias com 1ª aula:', blocos.map(b => b.id).join(', '));
