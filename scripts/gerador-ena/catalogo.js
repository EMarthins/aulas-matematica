// Integra a matéria ENA / PROFMAT ao app/catalog.js (idempotente): node scripts/gerador-ena/catalogo.js
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '../../app/catalog.js');
let s = fs.readFileSync(f, 'utf8');
const partes = require('./manifest.js');
const q = t => t.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const I = (tipo, titulo, arq, sub) => `                  { tipo:'${tipo}',${sub ? ` sub:'${sub}',` : ''} titulo:'${q(titulo)}', arquivo:'${arq}' }`;
const unit = u => `              {
                titulo: '${q(u.titulo)}',
                accent: '${u.accent}',
                icon: '${u.icon}',
                itens: [
${[
    ...u.aulas.map(a => I(a[0], a[1], u.dir + a[2])),
    I('Guia', 'Guia visual — ' + u.titulo, u.dir + 'infografico.html'),
    I('Atividade', u.ena, u.dir + 'atividade-ena.html', 'ENA'),
    I('Atividade', u.cria, u.dir + 'atividade-criativa.html', 'Criativa'),
    I('Atividade', u.pratica, u.dir + 'atividade-pratica.html', 'Prática')
  ].join(',\n')}
                ]
              }`;
const catalogo = partes.map(p => `      {
        ano: '${q(p.nome)}',
        trimestres: [
          {
            nome: '${q(p.tri)}',
            unidades: [
${p.unidades.map(unit).join(',\n')}
            ]
          }
        ]
      }`).join(',\n');
const bloco = `,
  // >>> ena-profmat
  {
    id: 'ena-profmat',
    nome: 'ENA · PROFMAT',
    icon: 'sigma',
    lede: 'Preparação para o Exame Nacional de Acesso ao PROFMAT (ENA): aulas completas em slides, guias visuais e atividades de cada tópico cobrado — da porcentagem à geometria espacial —, com as questões que já caíram em 2025 e 2026 resolvidas passo a passo.',
    CATALOG: [
${catalogo}
    ]
  }
  // <<< ena-profmat`;
const re = /,\n  \/\/ >>> ena-profmat[\s\S]*?\/\/ <<< ena-profmat/;
if (re.test(s)) s = s.replace(re, () => bloco);
else {
  const iIcons = s.indexOf('export const ICONS');
  const fim = s.lastIndexOf('\n];', iIcons);
  if (fim < 0) throw new Error('marcador de fim de MATERIAS não encontrado');
  s = s.slice(0, fim) + bloco + s.slice(fim);
}
// ícones novos
const NEW = {
  'percent': '<circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="M19 5 5 19"/>',
  'venn': '<circle cx="9.5" cy="12" r="5.5"/><circle cx="14.5" cy="12" r="5.5"/>',
  'logic': '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M7.5 12.5l3 3 6-7"/>',
  'numbers': '<path d="M9 4 7 20M17 4l-2 16M4 9h16M3.5 15h16"/>',
  'algebra': '<path d="M4 7l6 10M10 7 4 17M14 10h7M14 15h7"/>',
  'parabola': '<path d="M4 20V4M4 20h16"/><path d="M7 5C9 18 15 18 17 5"/>',
  'combo': '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.3 7.8 11 16.2M16.7 7.8 13 16.2"/>',
  'pie': '<circle cx="12" cy="12" r="8.5"/><path d="M12 12V3.5M12 12l6 6"/>',
  'bars': '<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="8"/><rect x="12" y="8" width="3" height="12"/><rect x="17" y="14" width="3" height="6"/>',
  'cube': '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9Z"/><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9"/>',
  'flag': '<path d="M6 21V4M6 5h11l-2 4 2 4H6"/>',
  'planet': '<circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(-25 12 12)"/>'
};
for (const [k, v] of Object.entries(NEW)) {
  if (new RegExp(`'${k}':`).test(s)) continue;
  s = s.replace(/(export const ICONS = \{\n)/, (_, a) => `${a}  '${k}': '${v}',\n`);
}
fs.writeFileSync(f, s);
console.log('catálogo atualizado:', partes.reduce((n, p) => n + p.unidades.length, 0), 'unidades');
