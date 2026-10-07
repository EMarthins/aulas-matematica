// Adiciona o 2º ano de Educação Financeira ao app/catalog.js (idempotente)
const fs = require('fs');
const f = 'C:/Users/eduar/OneDrive/Documentos/Aulas/site/app/catalog.js';
let s = fs.readFileSync(f, 'utf8');
if (s.includes("educacao-financeira/2-ano/")) { console.log('já integrado'); process.exit(0); }
const D = 'educacao-financeira/2-ano/3-tri/';
const A = (sub, titulo, arq) => `                  { tipo:'Atividade', sub:'${sub}', titulo:'${titulo}', arquivo:'${D}${arq}' }`;
const I = (tipo, titulo, arq) => `                  { tipo:'${tipo}', titulo:'${titulo}', arquivo:'${D}${arq}' }`;
const u = (titulo, accent, icon, itens) => `              {
                titulo: '${titulo}',
                accent: '${accent}',
                icon: '${icon}',
                itens: [
${itens.join(',\n')}
                ]
              }`;
const units = [
  u('Investimentos e Renda Fixa', 'primary', 'coin', [
    I('Aula 1', 'Investir e renda fixa: Tesouro, CDB, LCI e LCA', 'investimentos-renda-fixa/aula-1-investir-renda-fixa.html'),
    I('Aula 2', 'Juros compostos, tempo e carteira', 'investimentos-renda-fixa/aula-2-juros-compostos-carteira.html'),
    I('Guia', 'Guia visual — Investimentos e Renda Fixa', 'investimentos-renda-fixa/infografico.html'),
    A('ENEM', 'Aula 1 · Investir e renda fixa no ENEM', 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-enem.html'),
    A('Criativa', 'Aula 1 · Memória da renda fixa', 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-criativa.html'),
    A('Prática', 'Aula 1 · Do colchão à LCI', 'investimentos-renda-fixa/aula-1-investir-renda-fixa-atividade-pratica.html'),
    A('ENEM', 'Aula 2 · Juros compostos e carteira no ENEM', 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-enem.html'),
    A('Criativa', 'Aula 2 · Monte a carteira certa', 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-criativa.html'),
    A('Prática', 'Aula 2 · O tempo trabalha por você', 'investimentos-renda-fixa/aula-2-juros-compostos-carteira-atividade-pratica.html')
  ]),
  u('Renda Variável e Bolsa de Valores', 'growth', 'candles', [
    I('Aula', 'Ser sócio: ações, FIIs, ETFs e a Bolsa', 'renda-variavel-bolsa/aula.html'),
    I('Guia', 'Guia visual — Renda Variável e Bolsa', 'renda-variavel-bolsa/infografico.html'),
    A('ENEM', 'Renda variável e Bolsa no ENEM', 'renda-variavel-bolsa/atividade-enem.html'),
    A('Criativa', 'Pregão ao vivo: 12 dias na Bolsa', 'renda-variavel-bolsa/atividade-criativa.html'),
    A('Prática', 'A Bolsa na ponta do lápis', 'renda-variavel-bolsa/atividade-pratica.html')
  ]),
  u('Apostas, Bets e Cassino', 'danger', 'dice', [
    I('Aula', 'A ilusão do dinheiro fácil', 'apostas-bets-cassino/aula.html'),
    I('Guia', 'Guia visual — Apostas, Bets e Cassino', 'apostas-bets-cassino/infografico.html'),
    A('ENEM', 'A matemática das apostas no ENEM', 'apostas-bets-cassino/atividade-enem.html'),
    A('Criativa', 'Detector de anúncios enganosos', 'apostas-bets-cassino/atividade-criativa.html'),
    A('Prática', 'A matemática da casa', 'apostas-bets-cassino/atividade-pratica.html')
  ]),
  u('Criptoativos', 'decay', 'chain', [
    I('Aula', 'Cripto: tecnologia, volatilidade e escolhas responsáveis', 'criptoativos/aula.html'),
    I('Guia', 'Guia visual — Criptoativos', 'criptoativos/infografico.html'),
    A('ENEM', 'Criptoativos no ENEM', 'criptoativos/atividade-enem.html'),
    A('Criativa', 'Golpe ou legítimo?', 'criptoativos/atividade-criativa.html'),
    A('Prática', 'Contas de cripto', 'criptoativos/atividade-pratica.html')
  ])
];
const bloco = `,
      {
        ano: '2° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
${units.join(',\n')}
            ]
          }
        ]
      }`;
// fecha o CATALOG de Educação Financeira: último "\n      }\n    ]\n  }\n];" antes de ICONS
const iIcons = s.indexOf('export const ICONS');
const fim = s.lastIndexOf('\n      }\n    ]\n  }\n];', iIcons);
if (fim < 0) throw new Error('marcador não encontrado');
s = s.slice(0, fim + '\n      }'.length) + bloco + s.slice(fim + '\n      }'.length);
s = s.replace("Material interativo de Educação Financeira para a 3ª série do Ensino Médio — slides navegáveis e infográficos de apoio, prontos para projetar em sala.", "Material interativo de Educação Financeira para a 2ª e a 3ª séries do Ensino Médio — slides navegáveis, infográficos e atividades, prontos para projetar em sala.");
// ícones novos
s = s.replace("  'briefcase':", "  'candles': '<path d=\"M7 4v3M7 17v3M17 6v2M17 15v4\"/><rect x=\"5\" y=\"7\" width=\"4\" height=\"10\" rx=\"1\"/><rect x=\"15\" y=\"8\" width=\"4\" height=\"7\" rx=\"1\"/>',\n  'chain': '<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>',\n  'briefcase':");
fs.writeFileSync(f, s);
console.log('ok');
