# Catálogo de Soluções Bruno Brugnerotto

## Objetivo

Criar uma vitrine profissional para apresentar soluções digitais a pequenos negócios, com foco inicial em estabelecimentos de Curitiba e região. O visitante deve entender em poucos segundos quais problemas os produtos resolvem, abrir demonstrações e encontrar um caminho direto para contato.

O catálogo será enviado em abordagens comerciais. Por isso, a página inicial prioriza produtos, benefícios e evidências visuais. A explicação sobre o processo de trabalho será curta.

## Posicionamento

**Marca:** Bruno Brugnerotto, Desenvolvedor.

**Proposta:** sistemas, automações, sites e dados para facilitar o atendimento, organizar a operação e apoiar o crescimento do negócio.

**Mensagens obrigatórias:**

- Cada projeto é adaptado à realidade do seu negócio.
- O catálogo reúne exemplos. Uma necessidade diferente pode resultar em outra solução ou em uma combinação criada para o cenário do negócio.

O texto deve focar o produto e o resultado para o cliente. Expressões como “eu posso desenvolver” não serão usadas como título ou argumento principal.

## Público

- Donos e gestores de pequenos negócios.
- Prestadores de serviços e profissionais autônomos.
- Comércio, atendimento e negócios locais.
- Empresas que organizam pedidos, horários, clientes ou equipes.
- Negócios que querem melhorar a presença digital ou reduzir tarefas manuais.

O público não precisa conhecer tecnologia. A linguagem deve usar situações do dia a dia, exemplos e resultados compreensíveis.

## Metas da primeira versão

1. Apresentar a proposta de valor acima da dobra.
2. Mostrar seis categorias de solução por meio de experiências clicáveis.
3. Permitir que o visitante experimente fluxos com dados fictícios.
4. Comunicar que cada projeto aceita adaptações.
5. Oferecer contato em todas as páginas de demonstração.
6. Publicar o front-end na Vercel sem depender de um servidor próprio.

## Direção visual

O catálogo seguirá a estética editorial tecnológica aprovada, preservando a estrutura clara da primeira proposta e evitando uma composição excessivamente conceitual.

- Fundo marfim, texto azul-petróleo e superfícies claras.
- Cobre como destaque principal e cobre claro para indicadores e profundidade.
- Tipografia serifada expressiva em títulos, sans-serif legível no corpo e monoespaçada em rótulos.
- Abertura equilibrada em duas colunas, linhas finas, números de coleção e molduras que lembram navegadores.
- Grade de duas colunas com as seis soluções no mesmo nível de importância.
- Textura leve para evitar superfícies estéreis.
- Animações de entrada entre 200 e 480 ms, com atraso máximo de 40 ms entre itens relacionados.
- Hover discreto nas prévias para indicar interação, sem parallax ou efeitos decorativos pesados.
- Suporte a `prefers-reduced-motion` por meio do `MotionConfig` e de CSS.
- Contraste WCAG AA, navegação por teclado e alvos de toque com pelo menos 44 pixels.

### Tokens iniciais

| Token | Valor |
| --- | --- |
| Papel | `#f5f0e7` |
| Papel secundário | `#e9e0d3` |
| Superfície | `#fffdf8` |
| Texto | `#12343b` |
| Texto secundário | `#657579` |
| Cobre claro | `#e9b872` |
| Cobre | `#bd5c3e` |
| Display | Fraunces |
| Corpo | Manrope |
| Rótulos | IBM Plex Mono |

## Arquitetura da informação

### Página principal `/`

1. Cabeçalho com a marca pessoal, demonstrações, soluções e contato.
2. Hero com a proposta “Soluções digitais para negócios reais”.
3. Texto curto com a frase “Cada projeto é adaptado à realidade do seu negócio”.
4. Mapa visual que liga o catálogo às seis demonstrações.
5. Grade de demonstrações com prévia, benefício e chamada para abrir.
6. Bloco discreto “A solução pode ser outra”.
7. Apresentação curta de Bruno com formação e áreas de experiência.
8. Chamada final para contato.

### Rotas de demonstração

| Rota | Formato | O que o visitante experimenta |
| --- | --- | --- |
| `/demonstracoes/agenda` | Demo funcional | Serviço, profissional, data, horário e confirmação fictícia. |
| `/demonstracoes/whatsapp` | Conversa simulada | Escolhas de atendimento, triagem, agenda e encaminhamento. |
| `/demonstracoes/dashboard` | Painel explorável | Filtros, métricas e gráficos com dados fictícios. |
| `/demonstracoes/gestao` | Fluxo guiado | Solicitação, orçamento, execução, entrega e aviso ao cliente. |
| `/demonstracoes/sites` | Galeria visual | Modelos genéricos para serviços, negócio local e presença profissional, com alternância entre desktop e mobile. |
| `/demonstracoes/integracoes` | Estudo de caso | Comparação entre processo fragmentado e fluxo conectado. |

Cada rota terá contexto curto, demonstração, lista de ganhos e a ação “Quero uma solução parecida”.

## Comportamento das demonstrações

### Agenda

A demo usará dados locais e exemplos comerciais genéricos para funcionar na Vercel sem backend. O visitante selecionará serviço, responsável, data e horário. A confirmação deixará claro que o agendamento é fictício e não enviará dados para terceiros.

A base Spring Boot e PostgreSQL do AgendaFlow continuará como projeto separado. O catálogo poderá apontar para a versão completa quando existir uma API hospedada.

### WhatsApp

A interface terá aparência reconhecível de chat de texto, com cabeçalho do contato, estado online, balões, horários, respostas rápidas e campo de mensagem. Botões de resposta conduzirão a três resultados: agendar, pedir orçamento ou falar com a equipe. Uma área curta mostrará o que o sistema registrou em cada etapa.

### Dashboard

O painel usará dados fictícios de um pequeno negócio. Filtros por período e categoria atualizarão receita, ocupação, retorno e origem dos atendimentos. Os gráficos usarão o componente aberto de charts do Watermelon UI, baseado em Recharts, adaptado aos tokens do catálogo.

### Gestão

O visitante acompanhará uma ordem de serviço por quatro estados: recebida, orçamento, em execução e pronta. A demo permitirá selecionar uma ordem para abrir resumo, histórico e dados do cliente fictício.

### Sites

A galeria terá três conceitos visuais genéricos: serviços, negócio local e presença profissional. Cada conceito abrirá uma página completa dentro do catálogo. Um controle permitirá alternar entre molduras desktop e mobile.

### Integrações

O estudo de caso mostrará as etapas atuais, os pontos de retrabalho e o fluxo conectado. O conteúdo será visual e curto. A página não simulará uma integração real.

## Conteúdo e linguagem

- Português do Brasil.
- Frases curtas e voz ativa.
- Benefícios antes de tecnologias.
- Sem promessas de resultado financeiro garantido.
- Sem termos técnicos quando uma expressão comum comunicar a mesma ideia.
- Nenhum dado real de empresa ou cliente nas demos.
- Tecnologias aparecem em uma área secundária para quem quiser conferir a execução.

### Chamadas principais

- Ver demonstrações.
- Abrir demonstração.
- Quero uma solução parecida.
- Apresentar uma necessidade.
- Conversar com Bruno.

## Componentes

- `AppShell`: cabeçalho, navegação, rodapé e foco de rota.
- `Hero`: proposta principal e acesso às demonstrações.
- `SolutionMap`: mapa visual das rotas.
- `DemoCard`: prévia, formato, resumo e link.
- `DemoLayout`: estrutura compartilhada pelas páginas internas.
- `DemoBrowserFrame`: moldura visual das experiências.
- `Reveal`: entrada discreta de seções com Motion e alternativa sem movimento.
- `BusinessChart`: adaptação do chart aberto do Watermelon UI para dados fictícios.
- `AdaptabilityNote`: mensagem sobre adaptação do projeto.
- `AlternativeSolution`: mensagem sobre soluções fora do catálogo.
- `ContactCTA`: contato configurável.
- Componentes específicos de cada demonstração.

## Estrutura técnica

- React com TypeScript e Vite.
- React Router para navegação.
- Vitest e Testing Library para testes de comportamento.
- Tailwind CSS 4 para composição e CSS organizado por tokens para a identidade visual.
- Motion para entradas, transições e estados de hover.
- Watermelon UI usado seletivamente no gráfico, sem adotar templates completos.
- Recharts como mecanismo de visualização de dados.
- Dados de demonstração em módulos locais tipados por TypeScript.
- `VITE_WHATSAPP_URL` para o contato de produção.
- O botão de contato usará o portfólio público como alternativa quando a variável não estiver configurada.
- Hospedagem estática na Vercel com regra de fallback para a SPA.

Nenhum backend será criado para a primeira versão. A arquitetura permitirá trocar os adaptadores locais por APIs em uma evolução futura.

## Estados e erros

- Rotas desconhecidas mostrarão uma página curta com retorno ao catálogo.
- A agenda impedirá confirmação sem serviço, profissional, data e horário.
- A conversa do WhatsApp oferecerá reinício do fluxo.
- Os filtros do dashboard terão estado inicial válido e ação para limpar.
- Todas as confirmações fictícias usarão `aria-live`.
- Links externos indicarão abertura em nova aba.

## Testes

### Automatizados

- Página inicial apresenta proposta, seis demos e mensagens obrigatórias.
- Navegação abre cada rota.
- Agenda exige dados e confirma uma seleção válida.
- WhatsApp avança e reinicia o fluxo.
- Dashboard atualiza métricas ao trocar filtro.
- Gestão abre detalhes de uma ordem.
- Galeria de sites alterna desktop e mobile.
- Contato usa a variável de ambiente ou o portfólio como alternativa.
- Rota desconhecida apresenta recuperação.

### Verificação visual

- Larguras de 390, 768, 1024 e 1440 pixels.
- Ordem de foco e navegação por teclado.
- Contraste e redução de movimento.
- Ausência de rolagem horizontal.
- Console do navegador sem erros.

## Fora da primeira versão

- Login e área administrativa.
- Persistência de dados das demonstrações.
- Envio real de mensagens pelo WhatsApp.
- Pagamentos.
- Painel para editar o conteúdo.
- Backend compartilhado entre as demos.

## Critérios de aceite

1. O visitante entende a proposta na primeira tela.
2. As seis soluções abrem experiências próprias.
3. A agenda e os fluxos guiados funcionam com dados fictícios.
4. O catálogo comunica adaptação e abertura a outras soluções sem tirar o foco dos produtos.
5. O site funciona em celular e desktop.
6. O build da Vercel não precisa de backend.
7. Os testes automatizados e a verificação visual passam antes da publicação.
