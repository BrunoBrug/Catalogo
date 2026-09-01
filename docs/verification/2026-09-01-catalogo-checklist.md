# Verificação do catálogo — 2026-09-01

## Automação

- [x] `npm run test:run` — 11 arquivos e 21 testes aprovados
- [x] `npm run lint` — nenhum erro ou aviso
- [x] `npm run build` — TypeScript e build Vite aprovados
- [x] Rotas das demos carregadas sob demanda, sem alerta de chunk excessivo

## Navegador

- [x] Página inicial com seis soluções, conteúdo visível e sem overlay de erro
- [x] Larguras 390, 768, 1024 e 1440 px sem rolagem horizontal ou texto cortado
- [x] Animações de entrada ativadas durante o scroll; `prefers-reduced-motion` respeitado pelo Motion
- [x] Agenda: validação e confirmação cobertas por teste automatizado
- [x] WhatsApp: seleção de orçamento atualiza conversa e resumo
- [x] Dashboard: período de 90 dias atualiza métrica e gráfico
- [x] Gestão: ordem 1042 abre detalhes e histórico
- [x] Sites: alternância para celular e conteúdo comercial genérico
- [x] Integrações: alternância entre processo separado e fluxo conectado
- [x] Rota inexistente apresenta recuperação para o catálogo
- [x] Console sem erros ou avisos durante a navegação

## Acessibilidade e conteúdo

- [x] Link de salto para o conteúdo principal
- [x] Foco visível global para links, botões e campos
- [x] Alvos interativos com pelo menos 44 px
- [x] Contraste AA nos textos secundários, rótulos em cobre e botões
- [x] Prévias com nomes acessíveis e WhatsApp apresentado como conversa textual
- [x] Nenhum exemplo segmentado de pet shop, beleza ou estética nas telas de produção
- [x] Dados identificados como fictícios e nenhuma ação externa nas demonstrações

## Repositório

- [x] Commits com autor e committer `BrunoBrug <brunobrugnerottodelara@gmail.com>`
- [x] Nenhuma ocorrência de `Co-authored-by`
- [x] Fallback SPA preparado em `vercel.json`
