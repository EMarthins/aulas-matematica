// Disciplina e tópico de cada questão das provas do ENEM que entram no banco como imagem.
// Chave: '<aa>-<n>' (aa = 21 ou 25; n = número da questão; 1i/1e = inglês/espanhol).  Valor: [disciplina, tópico].
const L = {};
const t = (aa, lista) => lista.trim().split('\n').forEach(l => { const [k, d, tp] = l.split('|').map(s => s.trim()); L[aa + '-' + k] = [d, tp]; });

// ---------- ENEM 2025 · Linguagens ----------
t('25', `
1e|Língua Espanhola|Interpretação de texto
2e|Língua Espanhola|Interpretação de texto
3e|Língua Espanhola|Recursos linguísticos
4e|Língua Espanhola|Variação linguística
5e|Língua Espanhola|Interpretação de texto
1i|Língua Inglesa|Interpretação de texto
2i|Língua Inglesa|Interpretação de texto
3i|Língua Inglesa|Poema
4i|Língua Inglesa|Interpretação de texto
5i|Língua Inglesa|Texto não verbal e embalagem
6|Língua Portuguesa|Gêneros textuais (crônica)
7|Língua Portuguesa|Gêneros textuais (crônica)
8|Língua Portuguesa|Interpretação de texto
9|Língua Portuguesa|Interpretação de texto
10|Língua Portuguesa|Recursos linguísticos
11|Literatura|Romantismo
12|Educação Física|Esporte e inclusão
13|Língua Portuguesa|Texto legal e interpretação
14|Literatura|Romantismo
15|Artes|Artes visuais
16|Literatura|Poesia simbolista
17|Literatura|Poesia contemporânea
18|Educação Física|Esporte e gênero
19|Educação Física|Esporte e sociedade
20|Educação Física|Esporte e gênero
21|Língua Portuguesa|Variação linguística e oralidade
22|Artes|Artes visuais
23|Artes|Arte contemporânea
24|Língua Portuguesa|Linguagem publicitária
25|Língua Portuguesa|Léxico e neologismos
26|Língua Portuguesa|Gêneros textuais
27|Educação Física|Lutas
28|Literatura|Poesia
29|Literatura|Literatura brasileira
30|Literatura|Literatura indígena
31|Língua Portuguesa|Gêneros textuais
32|Língua Portuguesa|Gêneros textuais (narrativa curta)
33|Língua Portuguesa|Interpretação de texto
34|Língua Portuguesa|Linguagem verbal e não verbal
35|Língua Portuguesa|Interpretação de texto
36|Língua Portuguesa|Língua falada e oralidade
37|Literatura|Comparação entre textos
38|Língua Portuguesa|Interpretação de texto
39|Tecnologias da comunicação|Rádio e podcast
40|Literatura|Literatura brasileira
41|Artes|Cultura e arte indígena
42|Língua Portuguesa|Linguagem jurídica
43|Língua Portuguesa|Cultura indígena e identidade
44|Língua Portuguesa|Leitura e argumentação
45|Artes|Ilustração e linguagem
`);
// ---------- ENEM 2025 · Humanas ----------
t('25', `
46|Geografia|Geopolítica
47|Geografia|Queimadas e meio ambiente
48|Filosofia|Retórica e argumentação
49|Sociologia|Cidadania e direito
50|Filosofia|Direito e justiça
51|Sociologia|Cultura e cotidiano urbano
52|História|Pandemias na história
53|História|Idade Média
54|Geografia|Urbanização
55|Filosofia|Poder e política
56|Geografia|Hidrografia e transporte
57|Sociologia|Cultura popular
58|História|República e voto
59|Geografia|Matriz energética
60|Filosofia|Ética e economia
61|Filosofia|Filosofia política
62|Filosofia|Utopia
63|Geografia|Agropecuária brasileira
64|História|Era Vargas
65|Filosofia|Identidade e existência
66|Filosofia|Sociedade industrial
67|Geografia|Questão agrária
68|Filosofia|Ética
69|História|Idade Média
70|Geografia|Meio ambiente e geologia
71|História|Guerra Fria
72|Filosofia|Filosofia pré-socrática
73|História|América colonial
74|História|História do Brasil
75|Geografia|Agricultura e meio ambiente
76|Filosofia|Direitos humanos
77|Geografia|Energia e meio ambiente
78|História|Brasil colonial
79|Filosofia|Utilitarismo
80|Geografia|Cidades sustentáveis
81|Sociologia|Gênero e desigualdade
82|Geografia|Sensoriamento remoto e Cerrado
83|História|Período joanino
84|Sociologia|Gênero e desigualdade
85|Filosofia|Platão e política
86|Geografia|Energia e construção
87|História|Roma Antiga
88|Sociologia|Povos indígenas e direitos
89|Geografia|Energia e clima
90|História|Brasil Império
`);
// ---------- ENEM 2025 · Natureza (+ Matemática anulada) ----------
t('25', `
91|Química|Separação de misturas
92|Biologia|Fisiologia
93|Biologia|Ecologia
94|Física|Eletricidade
95|Biologia|Comportamento animal
96|Biologia|Zoologia e ecologia
97|Biologia|Imunologia e vacinas
98|Biologia|Biomas
99|Biologia|Adaptações
100|Química|Soluções e osmose reversa
101|Física|Óptica
102|Biologia|Fisiologia
103|Biologia|Citologia
104|Química|Química ambiental
105|Física|Física nuclear
106|Química|Fórmulas e funções químicas
107|Biologia|Genética
108|Física|Mecânica
109|Química|Química orgânica
110|Química|Radioatividade
111|Biologia|Ecologia e energia
112|Biologia|Biotecnologia
113|Física|Eletromagnetismo
114|Física|Ondulatória
115|Química|Química orgânica
116|Biologia|Ecologia
117|Química|Reações químicas
118|Física|Mecânica
119|Física|Eletricidade
120|Física|Ondas eletromagnéticas
121|Química|Propriedades das substâncias
122|Física|Eletromagnetismo
123|Biologia|Fotossíntese
124|Química|Eletroquímica
125|Química|Estequiometria
126|Física|Mecânica
127|Química|Cinética química
128|Física|Termologia
129|Biologia|Microbiologia
130|Física|Eletricidade
131|Química|Estequiometria
132|Física|Acústica
133|Química|Química ambiental
134|Biologia|Fisiologia
135|Física|Ondulatória e luz
174|Matemática|Porcentagem e matemática financeira
`);
// ---------- ENEM 2021 · Linguagens ----------
t('21', `
1e|Língua Espanhola|Interpretação de texto
2e|Língua Espanhola|Interpretação de texto
3e|Língua Espanhola|Charge e cartum
4e|Língua Espanhola|Entrevista
5e|Língua Espanhola|Interpretação de texto
1i|Língua Inglesa|Interpretação de texto
2i|Língua Inglesa|Interpretação de texto
3i|Língua Inglesa|Interpretação de texto
4i|Língua Inglesa|Interpretação de texto
5i|Língua Inglesa|Poema
6|Literatura|Literatura brasileira
7|Literatura|Realismo
8|Artes|Música
9|Artes|Música
10|Literatura|Poesia
11|Literatura|Poesia
12|Artes|Artes visuais (pop art)
13|Educação Física|Esportes (skate)
14|Língua Portuguesa|Funções da linguagem
15|Língua Portuguesa|Quadrinhos e funções da linguagem
16|Língua Portuguesa|Variação linguística
17|Artes|Dança
18|Língua Portuguesa|Narrativa e interpretação
19|Língua Portuguesa|Texto literário
20|Língua Portuguesa|Interpretação de texto
21|Artes|Design e arquitetura
22|Tecnologias da comunicação|Redes sociais
23|Artes|Artes visuais
24|Artes|Música
25|Literatura|Poesia
26|Artes|Cinema
27|Artes|Música
28|Língua Portuguesa|Texto publicitário e campanha
29|Língua Portuguesa|Quadrinhos e humor
30|Artes|Fotografia e arte engajada
31|Tecnologias da comunicação|Saúde e tecnologia
32|Língua Portuguesa|Crônica
33|Educação Física|Dança
34|Língua Portuguesa|Argumentação
35|Tecnologias da comunicação|Mídia e notícias
36|Língua Portuguesa|Norma e variação linguística
37|Educação Física|Esporte e racismo
38|Artes|Artes visuais
39|Língua Portuguesa|Direitos da infância
40|Literatura|Literatura brasileira
41|Língua Portuguesa|Linguagem e ritmo de vida
42|Artes|Cinema e museu
43|Língua Portuguesa|Variação linguística e humor
44|Tecnologias da comunicação|Divulgação científica
45|Literatura|Conto
`);
// ---------- ENEM 2021 · Humanas ----------
t('21', `
46|Geografia|Astronomia e estações do ano
47|História|Interpretação de fonte histórica
48|Sociologia|Cultura e identidade
49|História|Escravidão
50|Filosofia|Descartes e racionalismo
51|Filosofia|Nietzsche
52|Filosofia|Filosofia medieval
53|Sociologia|Mudança social
54|História|Educação no Brasil
55|Filosofia|Sócrates
56|História|África
57|Sociologia|Violência e encarceramento
58|História|Brasil Império
59|Sociologia|Povos indígenas
60|História|Estado Novo
61|História|Brasil colonial
62|História|Idade Média
63|História|Independência da América
64|História|Revoluções inglesas
65|Sociologia|Poder e empresas
66|Geografia|Revitalização urbana
67|Geografia|Indústria e tecnologia
68|Geografia|Mineração e conflitos
69|Filosofia|Filosofia política
70|Sociologia|Classes sociais
71|Sociologia|Ciência e cultura indígena
72|Geografia|Geologia e rochas
73|Geografia|Planejamento urbano
74|História|Era Vargas
75|História|Brasil colonial
76|Sociologia|Refugiados
77|História|Ciência e mulheres
78|Filosofia|Sociedade industrial
79|Geografia|Urbanização
80|Geografia|Semiárido e clima
81|Sociologia|Desigualdade social
82|Geografia|Lixo eletrônico
83|Geografia|Recursos hídricos
84|História|Brasil Império
85|Sociologia|Trabalho e cultura popular
86|Sociologia|Trabalho e tecnologia
87|Sociologia|Trabalho
88|Sociologia|Desigualdade econômica
89|Geografia|Agricultura e biotecnologia
90|Geografia|Patrimônio cultural
`);
// ---------- ENEM 2021 · Natureza (+ Matemática anulada) ----------
t('21', `
91|Biologia|Botânica
92|Física|Ondulatória
93|Biologia|Adaptação
94|Física|Mecânica
95|Biologia|Ecologia
96|Biologia|Genética molecular
97|Química|Química ambiental
98|Biologia|Fisiologia
99|Física|Termologia
100|Física|Mecânica
101|Química|Química orgânica
102|Física|Eletricidade
103|Química|Análise e propriedades
104|Química|Química ambiental
105|Física|Eletricidade
106|Biologia|Fisiologia
107|Física|Mecânica
108|Química|Química orgânica
109|Química|Química e energia
110|Biologia|Metabolismo
111|Química|Meio ambiente
112|Biologia|Genética
113|Química|Reações químicas
114|Biologia|Fisiologia
115|Física|Termologia
116|Química|Química ambiental
117|Biologia|Ecologia
118|Química|Química orgânica
119|Biologia|Botânica
120|Biologia|Botânica
121|Biologia|Epidemiologia
122|Química|Tratamento de água
123|Biologia|Botânica
124|Química|Eletroquímica
125|Física|Termologia
126|Física|Eletricidade
127|Biologia|Evolução e ecologia
128|Física|Eletricidade
129|Biologia|Botânica
130|Química|Química orgânica
131|Física|Eletricidade
132|Biologia|Citologia
133|Química|Eletroquímica
134|Química|Soluções
135|Química|Polímeros
138|Matemática|Análise combinatória
`);
module.exports = L;
