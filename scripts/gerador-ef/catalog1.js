// Adiciona o 1º ano de Educação Financeira ao app/catalog.js (idempotente)
const fs = require('fs');
const f = 'C:/Users/eduar/OneDrive/Documentos/Aulas/site/app/catalog.js';
let s = fs.readFileSync(f, 'utf8');
if (s.includes("educacao-financeira/1-ano/")) { console.log('já integrado'); process.exit(0); }
const D = 'educacao-financeira/1-ano/3-tri/';
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
  u('Crédito, Juros e Financiamento', 'danger', 'coin', [
    I('Aula 1', 'Cheque especial e juros compostos', 'credito-juros-financiamento/aula-1-cheque-especial-juros-compostos.html'),
    I('Aula 2', 'Financiamento, prestações e calculadora financeira', 'credito-juros-financiamento/aula-2-financiamento-calculadora-financeira.html'),
    I('Aula 3', 'Cartão de crédito, nome limpo e score', 'credito-juros-financiamento/aula-3-cartao-credito-spc-score.html')
  ]),
  u('Direitos do Consumidor', 'decay', 'grid', [
    I('Aula', 'Código de Defesa do Consumidor e PROCON', 'direitos-do-consumidor/aula.html')
  ]),
  u('Consumo Consciente', 'growth', 'dots', [
    I('Aula 1', 'Armadilhas de consumo e consumismo', 'consumo-consciente/aula-1-armadilhas-consumismo.html'),
    I('Aula 2', 'Compras inteligentes: supermercado e promoções', 'consumo-consciente/aula-2-supermercado-promocoes.html')
  ]),
  u('Apostas, Bets e Cassino', 'danger', 'dice', [
    I('Aula', 'A ilusão do dinheiro fácil', 'apostas-bets-cassino/aula.html')
  ]),
  u('Perfil Empreendedor', 'primary', 'briefcase', [
    I('Aula', 'Perfil empreendedor: o quê, como e por quê', 'perfil-empreendedor/aula.html')
  ])
];
const bloco = `,
      {
        ano: '1° Ano',
        trimestres: [
          {
            nome: '3° Trimestre',
            unidades: [
${units.join(',\n')}
            ]
          }
        ]
      }`;
const iIcons = s.indexOf('export const ICONS');
const fim = s.lastIndexOf('\n      }\n    ]\n  }\n];', iIcons);
if (fim < 0) throw new Error('marcador não encontrado');
s = s.slice(0, fim + '\n      }'.length) + bloco + s.slice(fim + '\n      }'.length);
s = s.replace("para a 2ª e a 3ª séries do Ensino Médio — slides navegáveis, infográficos e atividades", "para a 1ª, a 2ª e a 3ª séries do Ensino Médio — slides navegáveis, infográficos e atividades");
fs.writeFileSync(f, s);
console.log('ok');
