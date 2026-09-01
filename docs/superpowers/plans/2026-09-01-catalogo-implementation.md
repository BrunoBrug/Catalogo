# Catálogo de Soluções Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e preparar para publicação um catálogo React profissional com página inicial e seis demonstrações interativas de soluções digitais.

**Architecture:** SPA estática em React e TypeScript, com rotas declarativas, dados fictícios em módulos locais e componentes de demonstração isolados por domínio. A identidade visual usa tokens CSS, Tailwind CSS 4 para composição, Motion para transições e uma adaptação do chart aberto do Watermelon UI/Recharts para os gráficos.

**Tech Stack:** React, TypeScript, Vite, React Router, Tailwind CSS 4, Motion, Recharts, Watermelon UI chart, Vitest, Testing Library e Vercel.

**Spec:** `docs/superpowers/specs/2026-09-01-catalogo-design.md`

## Global Constraints

- Todo conteúdo visível deve estar em português do Brasil e usar linguagem compreensível para quem não conhece tecnologia.
- A marca exibida é “Bruno Brugnerotto — Desenvolvedor”.
- As seis soluções têm a mesma importância visual e usam exemplos comerciais genéricos.
- A primeira versão não possui backend, login, persistência, pagamentos ou envio real de WhatsApp.
- Dados das demonstrações são fictícios e ficam em módulos TypeScript locais.
- Paleta: papel `#f5f0e7`, papel secundário `#e9e0d3`, superfície `#fffdf8`, texto `#12343b`, texto secundário `#657579`, cobre claro `#e9b872` e cobre `#bd5c3e`.
- Motion deve respeitar `prefers-reduced-motion`; interações duram entre 200 e 480 ms.
- Contraste WCAG AA, navegação por teclado e alvos de toque de pelo menos 44 px.
- Nenhum commit pode conter `Co-authored-by`; autor e committer devem ser apenas `BrunoBrug <brunobrugnerottodelara@gmail.com>`.

## File Structure

```text
Catalogo/
├── index.html                         # documento HTML do Vite
├── package.json                       # scripts e dependências
├── eslint.config.js                   # regras estáticas para React/TypeScript
├── tsconfig.json                      # configuração TypeScript
├── vite.config.ts                     # React, Tailwind e Vitest
├── vercel.json                        # fallback SPA
├── components.json                    # registro shadcn/Watermelon
├── THIRD_PARTY_NOTICES.md             # atribuição do componente aberto
├── src/
│   ├── main.tsx                       # montagem da aplicação
│   ├── App.tsx                        # roteador principal
│   ├── styles/index.css               # tokens, tipografia e estilos globais
│   ├── test/setup.ts                  # matchers e limpeza dos testes
│   ├── data/solutions.ts              # catálogo e tipos compartilhados
│   ├── data/demoData.ts               # dados fictícios das demos
│   ├── lib/utils.ts                    # composição de classes do chart
│   ├── components/
│   │   ├── layout/AppShell.tsx         # cabeçalho, conteúdo e rodapé
│   │   ├── layout/DemoLayout.tsx       # estrutura comum das demos
│   │   ├── home/Hero.tsx               # abertura aprovada
│   │   ├── home/SolutionMap.tsx        # mapa das seis rotas
│   │   ├── home/DemoGrid.tsx           # grade sem item destacado
│   │   ├── home/DemoCard.tsx           # resumo e link de uma solução
│   │   ├── home/AboutBruno.tsx         # apresentação curta e formação
│   │   ├── home/previews/*.tsx         # seis prévias compactas
│   │   ├── shared/Reveal.tsx            # entrada com Motion
│   │   ├── shared/DemoBrowserFrame.tsx # moldura de produto
│   │   ├── shared/ContactCTA.tsx        # contato reutilizável
│   │   └── ui/chart.tsx                 # chart do Watermelon adaptado
│   ├── pages/HomePage.tsx               # composição da home
│   ├── pages/AgendaDemoPage.tsx         # fluxo de agenda
│   ├── pages/WhatsAppDemoPage.tsx       # conversa simulada
│   ├── pages/DashboardDemoPage.tsx      # filtros, métricas e gráfico
│   ├── pages/ManagementDemoPage.tsx     # fluxo da ordem de serviço
│   ├── pages/SitesDemoPage.tsx          # galeria e alternância de moldura
│   ├── pages/IntegrationsDemoPage.tsx   # antes e depois do processo
│   └── pages/NotFoundPage.tsx            # recuperação de rota
└── src/**/*.test.tsx                    # testes próximos ao comportamento
```

---

### Task 1: Fundação React, TypeScript e testes

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `eslint.config.js`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles/index.css`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

**Interfaces:**
- Produces: `App(): JSX.Element`, ambiente `jsdom`, alias `@/*` para `src/*` e scripts `dev`, `build`, `test`, `test:run` e `lint`.

- [ ] **Step 1: Inicializar as dependências**

```powershell
npm init -y
npm install react react-dom react-router-dom motion recharts lucide-react clsx tailwind-merge
npm install -D typescript vite @vitejs/plugin-react tailwindcss @tailwindcss/vite vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/react @types/react-dom eslint typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
```

Atualizar `package.json` com os scripts abaixo:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "test": "vitest",
    "test:run": "vitest run",
    "lint": "eslint ."
  }
}
```

- [ ] **Step 2: Criar configuração e teste inicial que falha**

```tsx
// src/App.test.tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

it('apresenta a identidade principal', () => {
  render(<App />, { wrapper: MemoryRouter })
  expect(screen.getByText(/Bruno Brugnerotto/i)).toBeInTheDocument()
})
```

```ts
// src/test/setup.ts
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 3: Executar o teste e confirmar a falha**

Run: `npm run test:run -- src/App.test.tsx`

Expected: FAIL porque `App` ainda não exporta a identidade.

- [ ] **Step 4: Criar a aplicação mínima e os tokens**

```tsx
// src/App.tsx
export function App() {
  return <h1>Bruno Brugnerotto — Desenvolvedor</h1>
}
```

```css
/* src/styles/index.css */
@import "tailwindcss";

:root {
  --paper: #f5f0e7;
  --paper-secondary: #e9e0d3;
  --surface: #fffdf8;
  --ink: #12343b;
  --muted: #657579;
  --copper-light: #e9b872;
  --copper: #bd5c3e;
}
```

- [ ] **Step 5: Executar teste e build**

Run: `npm run test:run -- src/App.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: build concluído em `dist/`.

- [ ] **Step 6: Commit**

```powershell
git add package.json package-lock.json index.html tsconfig.json vite.config.ts src
git commit -m "chore: scaffold catalog frontend"
```

### Task 2: Conteúdo, roteamento e página inicial

**Files:**
- Create: `src/data/solutions.ts`
- Create: `src/components/layout/AppShell.tsx`
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/SolutionMap.tsx`
- Create: `src/components/home/DemoGrid.tsx`
- Create: `src/components/home/DemoCard.tsx`
- Create: `src/components/home/AboutBruno.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/NotFoundPage.tsx`
- Modify: `src/App.tsx`
- Test: `src/pages/HomePage.test.tsx`

**Interfaces:**
- Produces: `SolutionDefinition`, `solutions: readonly SolutionDefinition[]`, `HomePage(): JSX.Element` e seis rotas clicáveis.

- [ ] **Step 1: Escrever o teste da home**

```tsx
it('mostra seis soluções e as mensagens obrigatórias', () => {
  render(<HomePage />, { wrapper: MemoryRouter })
  expect(screen.getByRole('heading', { name: /soluções digitais para negócios reais/i })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /abrir|simular|explorar|percorrer|ver/i })).toHaveLength(6)
  expect(screen.getByText(/cada projeto é adaptado à realidade do seu negócio/i)).toBeInTheDocument()
  expect(screen.getByText(/a solução pode ser outra/i)).toBeInTheDocument()
  expect(screen.getByText(/formado em análise e desenvolvimento de sistemas/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/HomePage.test.tsx`

Expected: FAIL porque `HomePage` e o catálogo ainda não existem.

- [ ] **Step 3: Definir o contrato do catálogo**

```ts
export type PreviewKind = 'agenda' | 'whatsapp' | 'dashboard' | 'management' | 'sites' | 'integrations'

export interface SolutionDefinition {
  id: PreviewKind
  order: string
  format: string
  title: string
  summary: string
  path: `/demonstracoes/${string}`
  action: string
}

export const solutions: readonly SolutionDefinition[] = [
  { id: 'agenda', order: '01', format: 'Demo funcional', title: 'Agenda inteligente', summary: 'Serviços, responsáveis, horários e confirmação em um fluxo completo.', path: '/demonstracoes/agenda', action: 'Abrir AgendaFlow' },
  { id: 'whatsapp', order: '02', format: 'Conversa simulada', title: 'Atendimento por WhatsApp', summary: 'Triagem, respostas, agenda e encaminhamento em uma conversa guiada.', path: '/demonstracoes/whatsapp', action: 'Simular atendimento' },
  { id: 'dashboard', order: '03', format: 'Dados exploráveis', title: 'Dashboard comercial', summary: 'Indicadores e filtros para acompanhar desempenho e oportunidades.', path: '/demonstracoes/dashboard', action: 'Explorar painel' },
  { id: 'management', order: '04', format: 'Fluxo guiado', title: 'Gestão de serviços', summary: 'Solicitação, orçamento, andamento e entrega em um acompanhamento.', path: '/demonstracoes/gestao', action: 'Percorrer o fluxo' },
  { id: 'sites', order: '05', format: 'Galeria visual', title: 'Sites e landing pages', summary: 'Conceitos completos com visualização em desktop e celular.', path: '/demonstracoes/sites', action: 'Ver galeria de sites' },
  { id: 'integrations', order: '06', format: 'Estudo de caso', title: 'Integrações', summary: 'Processos conectados para reduzir tarefas manuais e organizar informações.', path: '/demonstracoes/integracoes', action: 'Ver estudo de caso' },
] as const
```

- [ ] **Step 4: Implementar AppShell, Hero, mapa e grade**

`Hero` deve renderizar o rótulo “Sistemas · automações · sites · dados”, o título aprovado e um parágrafo de benefício. `SolutionMap` deve criar links a partir de `solutions`. `DemoGrid` deve mapear os mesmos dados em seis `DemoCard`, sem prop `featured` e sem tratamento visual especial para nenhum item. `AboutBruno` deve usar apenas duas frases: “Bruno Brugnerotto — Desenvolvedor” e “Formado em Análise e Desenvolvimento de Sistemas, com experiência em aplicações web, sistemas e automações.”

- [ ] **Step 5: Configurar as rotas da SPA**

```tsx
export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
```

Nesta tarefa, `NotFoundPage` já deve conter o título “Página não encontrada” e o link “Voltar ao catálogo”, evitando uma importação quebrada enquanto as rotas das demonstrações são adicionadas nas tarefas seguintes.

- [ ] **Step 6: Executar teste e build**

Run: `npm run test:run -- src/pages/HomePage.test.tsx`

Expected: PASS com seis links.

Run: `npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```powershell
git add src
git commit -m "feat: build catalog home structure"
```

### Task 3: Prévias e movimento da página inicial

**Files:**
- Create: `src/components/shared/Reveal.tsx`
- Create: `src/components/shared/DemoBrowserFrame.tsx`
- Create: `src/components/home/previews/AgendaPreview.tsx`
- Create: `src/components/home/previews/WhatsAppPreview.tsx`
- Create: `src/components/home/previews/DashboardPreview.tsx`
- Create: `src/components/home/previews/ManagementPreview.tsx`
- Create: `src/components/home/previews/SitesPreview.tsx`
- Create: `src/components/home/previews/IntegrationsPreview.tsx`
- Create: `src/components/home/previews/PreviewForSolution.tsx`
- Modify: `src/components/home/DemoCard.tsx`
- Modify: `src/styles/index.css`
- Test: `src/components/home/DemoCard.test.tsx`

**Interfaces:**
- Consumes: `PreviewKind` de `src/data/solutions.ts`.
- Produces: `PreviewForSolution({ kind }: { kind: PreviewKind })`, `Reveal({ children, delay? })` e `DemoBrowserFrame`.

- [ ] **Step 1: Escrever o teste de seleção das prévias**

```tsx
it.each([
  ['agenda', 'Prévia da agenda'],
  ['whatsapp', 'Prévia do chat'],
  ['dashboard', 'Prévia do dashboard'],
  ['management', 'Prévia da gestão'],
  ['sites', 'Prévia de sites'],
  ['integrations', 'Prévia de integrações'],
] as const)('renderiza a prévia %s', (kind, label) => {
  render(<PreviewForSolution kind={kind} />)
  expect(screen.getByLabelText(label)).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/components/home/DemoCard.test.tsx`

Expected: FAIL porque as prévias não existem.

- [ ] **Step 3: Implementar moldura, prévias e seletor exaustivo**

```tsx
export function PreviewForSolution({ kind }: { kind: PreviewKind }) {
  const previews: Record<PreviewKind, JSX.Element> = {
    agenda: <AgendaPreview />,
    whatsapp: <WhatsAppPreview />,
    dashboard: <DashboardPreview />,
    management: <ManagementPreview />,
    sites: <SitesPreview />,
    integrations: <IntegrationsPreview />,
  }
  return previews[kind]
}
```

As prévias devem reproduzir a direção aprovada: agenda com campos e horários; WhatsApp com cabeçalho, status, balões, horários, respostas rápidas e campo de texto; dashboard com três métricas e barras; gestão com quatro colunas; sites com três conceitos genéricos; integrações com comparação “Antes/Depois”.

- [ ] **Step 4: Implementar Motion com redução de movimento**

```tsx
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

Envolver a aplicação em `<MotionConfig reducedMotion="user">`. Os cards usam `whileHover={{ y: -5 }}` somente em dispositivos que suportam hover; o CSS mantém foco visível equivalente.

- [ ] **Step 5: Executar testes**

Run: `npm run test:run -- src/components/home/DemoCard.test.tsx src/pages/HomePage.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add src
git commit -m "feat: add animated solution previews"
```

### Task 4: Demonstração de agenda

**Files:**
- Create: `src/data/demoData.ts`
- Create: `src/components/layout/DemoLayout.tsx`
- Create: `src/pages/AgendaDemoPage.tsx`
- Modify: `src/App.tsx`
- Test: `src/pages/AgendaDemoPage.test.tsx`

**Interfaces:**
- Produces: `ServiceOption`, `ResponsibleOption`, `availableSlots` e `AgendaDemoPage()`.

- [ ] **Step 1: Escrever testes de validação e confirmação**

```tsx
it('exige os campos antes de confirmar', async () => {
  const user = userEvent.setup()
  render(<AgendaDemoPage />)
  await user.click(screen.getByRole('button', { name: /confirmar agendamento/i }))
  expect(screen.getByRole('alert')).toHaveTextContent(/escolha serviço, responsável, data e horário/i)
})

it('confirma uma seleção completa como demonstração fictícia', async () => {
  const user = userEvent.setup()
  render(<AgendaDemoPage />)
  await user.selectOptions(screen.getByLabelText(/serviço/i), 'reuniao-inicial')
  await user.selectOptions(screen.getByLabelText(/responsável/i), 'equipe-atendimento')
  await user.type(screen.getByLabelText(/data/i), '2026-09-10')
  await user.click(screen.getByRole('button', { name: '10:00' }))
  await user.click(screen.getByRole('button', { name: /confirmar agendamento/i }))
  expect(screen.getByRole('status')).toHaveTextContent(/demonstração confirmada/i)
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/AgendaDemoPage.test.tsx`

Expected: FAIL porque a página não existe.

- [ ] **Step 3: Implementar estado e validação**

Use `useState` para `serviceId`, `responsibleId`, `date`, `slot` e `feedback`. O botão confirma somente quando os quatro valores existem. O feedback deve usar `role="status" aria-live="polite"`; a validação usa `role="alert"`.

- [ ] **Step 4: Registrar rota e validar**

```tsx
<Route path="demonstracoes/agenda" element={<AgendaDemoPage />} />
```

Run: `npm run test:run -- src/pages/AgendaDemoPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src
git commit -m "feat: add interactive scheduling demo"
```

### Task 5: Demonstração de atendimento por WhatsApp

**Files:**
- Create: `src/pages/WhatsAppDemoPage.tsx`
- Modify: `src/data/demoData.ts`
- Modify: `src/App.tsx`
- Test: `src/pages/WhatsAppDemoPage.test.tsx`

**Interfaces:**
- Produces: `ChatIntent = 'schedule' | 'quote' | 'human'`, `ChatMessage` e fluxo reiniciável.

- [ ] **Step 1: Escrever o teste do fluxo e reinício**

```tsx
it('conduz um pedido de orçamento e permite reiniciar', async () => {
  const user = userEvent.setup()
  render(<WhatsAppDemoPage />)
  await user.click(screen.getByRole('button', { name: /pedir orçamento/i }))
  expect(screen.getByText(/algumas perguntas rápidas/i)).toBeInTheDocument()
  expect(screen.getByText(/interesse: orçamento/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /reiniciar conversa/i }))
  expect(screen.getByRole('button', { name: /pedir orçamento/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/WhatsAppDemoPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implementar chat textual**

O componente deve renderizar cabeçalho “Atendimento”, estado “online agora”, balões com `time`, três respostas rápidas e um campo visual desabilitado. A escolha adiciona mensagens e atualiza um resumo lateral com a intenção registrada. Nenhuma chamada externa é feita.

- [ ] **Step 4: Registrar rota e testar**

Run: `npm run test:run -- src/pages/WhatsAppDemoPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src
git commit -m "feat: add whatsapp service demo"
```

### Task 6: Dashboard com Watermelon UI e Recharts

**Files:**
- Create: `components.json`
- Create: `src/components/ui/chart.tsx`
- Create: `THIRD_PARTY_NOTICES.md`
- Create: `src/pages/DashboardDemoPage.tsx`
- Modify: `src/data/demoData.ts`
- Modify: `src/App.tsx`
- Test: `src/pages/DashboardDemoPage.test.tsx`

**Interfaces:**
- Produces: `DashboardPeriod = '30d' | '90d' | 'year'`, `dashboardByPeriod` e gráfico responsivo.

- [ ] **Step 1: Escrever teste de atualização de métricas**

```tsx
it('atualiza métricas ao trocar o período', async () => {
  const user = userEvent.setup()
  render(<DashboardDemoPage />)
  expect(screen.getByText('R$ 42 mil')).toBeInTheDocument()
  await user.selectOptions(screen.getByLabelText(/período/i), '90d')
  expect(screen.getByText('R$ 118 mil')).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/DashboardDemoPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Instalar o chart aberto do Watermelon UI**

Criar `components.json` antes do comando:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

```powershell
npx shadcn@latest add "https://registry.watermelon.sh/r/chart.json"
```

Manter somente os arquivos necessários ao chart, adaptar as cores para os tokens aprovados e registrar em `THIRD_PARTY_NOTICES.md` que o componente deriva do Watermelon UI sob licença MIT.

- [ ] **Step 4: Implementar filtros, métricas e gráfico**

O seletor controla `period`. `dashboardByPeriod[period]` fornece `revenue`, `occupancy`, `returnRate` e `series`. Renderizar `ChartContainer`, `AreaChart`, eixos, tooltip acessível e uma descrição textual do comportamento da série. O botão “Limpar filtros” restaura `period` para `30d`.

- [ ] **Step 5: Executar testes e build**

Run: `npm run test:run -- src/pages/DashboardDemoPage.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: PASS sem importações ausentes.

- [ ] **Step 6: Commit**

```powershell
git add components.json THIRD_PARTY_NOTICES.md src package.json package-lock.json
git commit -m "feat: add interactive business dashboard"
```

### Task 7: Demonstração de gestão de serviços

**Files:**
- Create: `src/pages/ManagementDemoPage.tsx`
- Modify: `src/data/demoData.ts`
- Modify: `src/App.tsx`
- Test: `src/pages/ManagementDemoPage.test.tsx`

**Interfaces:**
- Produces: `ServiceOrderStatus`, `ServiceOrder`, `serviceOrders` e painel de detalhes.

- [ ] **Step 1: Escrever teste de seleção da ordem**

```tsx
it('abre os detalhes da ordem selecionada', async () => {
  const user = userEvent.setup()
  render(<ManagementDemoPage />)
  await user.click(screen.getByRole('button', { name: /ordem 1042/i }))
  expect(screen.getByRole('heading', { name: /ordem 1042/i })).toBeInTheDocument()
  expect(screen.getByText(/histórico do serviço/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/ManagementDemoPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implementar quadro e detalhes**

Use quatro colunas: “Recebida”, “Orçamento”, “Em execução” e “Pronta”. Cada cartão é um `<button>` com número e resumo. Ao selecionar, abrir painel semântico com status, valor fictício, histórico e cliente identificado apenas por primeiro nome fictício.

- [ ] **Step 4: Testar e registrar rota**

Run: `npm run test:run -- src/pages/ManagementDemoPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src
git commit -m "feat: add service management demo"
```

### Task 8: Galeria de sites genéricos

**Files:**
- Create: `src/pages/SitesDemoPage.tsx`
- Modify: `src/data/demoData.ts`
- Modify: `src/App.tsx`
- Test: `src/pages/SitesDemoPage.test.tsx`

**Interfaces:**
- Produces: `SiteConcept = 'services' | 'local' | 'professional'`, `DeviceFrame = 'desktop' | 'mobile'` e galeria navegável.

- [ ] **Step 1: Escrever teste da moldura e conteúdo neutro**

```tsx
it('alterna a moldura e mantém conceitos genéricos', async () => {
  const user = userEvent.setup()
  render(<SitesDemoPage />)
  expect(screen.queryByText(/pet shop|banho|tosa/i)).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /visualizar em celular/i }))
  expect(screen.getByTestId('site-frame')).toHaveAttribute('data-device', 'mobile')
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/SitesDemoPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implementar conceitos e alternância**

Criar três páginas completas fictícias: “Serviços que aproximam”, “Negócio local feito perto” e “Presença profissional”. Abas alteram o conceito; botões de desktop e celular alteram somente a moldura, preservando o conteúdo.

- [ ] **Step 4: Testar e registrar rota**

Run: `npm run test:run -- src/pages/SitesDemoPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src
git commit -m "feat: add generic website gallery"
```

### Task 9: Estudo de caso de integrações

**Files:**
- Create: `src/pages/IntegrationsDemoPage.tsx`
- Modify: `src/App.tsx`
- Test: `src/pages/IntegrationsDemoPage.test.tsx`

**Interfaces:**
- Produces: modo `before | after` e comparação de processo fragmentado/conectado.

- [ ] **Step 1: Escrever o teste da comparação**

```tsx
it('explica a diferença entre processo separado e conectado', async () => {
  const user = userEvent.setup()
  render(<IntegrationsDemoPage />)
  expect(screen.getByText(/informações copiadas manualmente/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /ver fluxo conectado/i }))
  expect(screen.getByText(/registro criado automaticamente/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Confirmar a falha**

Run: `npm run test:run -- src/pages/IntegrationsDemoPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implementar o fluxo visual curto**

O modo “Antes” mostra três ferramentas separadas e dois pontos de retrabalho. O modo “Depois” conecta atendimento, registro e equipe em uma sequência com setas, resumo e economia de etapas, sem alegar economia financeira garantida.

- [ ] **Step 4: Testar e registrar rota**

Run: `npm run test:run -- src/pages/IntegrationsDemoPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src
git commit -m "feat: add integrations case study"
```

### Task 10: Contato, rota desconhecida e preparação para Vercel

**Files:**
- Create: `src/components/shared/ContactCTA.tsx`
- Create: `src/lib/contact.ts`
- Modify: `src/pages/NotFoundPage.tsx`
- Create: `src/lib/contact.test.ts`
- Create: `src/pages/NotFoundPage.test.tsx`
- Create: `vercel.json`
- Create: `README.md`
- Modify: `src/components/layout/DemoLayout.tsx`
- Modify: `src/pages/HomePage.tsx`

**Interfaces:**
- Produces: `getContactUrl(envUrl?: string): string`, CTA compartilhado e fallback SPA.

- [ ] **Step 1: Escrever testes de contato e recuperação**

```ts
it('usa a URL configurada quando disponível', () => {
  expect(getContactUrl('https://wa.me/5541999999999')).toBe('https://wa.me/5541999999999')
})

it('usa o portfólio como alternativa', () => {
  expect(getContactUrl()).toBe('https://brunobrug.vercel.app/')
})
```

```tsx
it('oferece retorno ao catálogo', () => {
  render(<NotFoundPage />, { wrapper: MemoryRouter })
  expect(screen.getByRole('link', { name: /voltar ao catálogo/i })).toHaveAttribute('href', '/')
})
```

- [ ] **Step 2: Confirmar as falhas**

Run: `npm run test:run -- src/lib/contact.test.ts src/pages/NotFoundPage.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implementar URL e CTA**

```ts
const portfolioUrl = 'https://brunobrug.vercel.app/'

export function getContactUrl(envUrl?: string) {
  return envUrl?.trim() || portfolioUrl
}
```

`ContactCTA` usa `getContactUrl(import.meta.env.VITE_WHATSAPP_URL)`, `target="_blank"` e `rel="noreferrer"`, informando visualmente que o link abre uma nova aba.

- [ ] **Step 4: Configurar Vercel e documentação**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

O README deve mostrar: proposta do projeto, instalação com `npm install`, execução com `npm run dev`, testes com `npm run test:run`, build com `npm run build`, variável `VITE_WHATSAPP_URL` e publicação na Vercel.

- [ ] **Step 5: Executar suíte completa**

Run: `npm run test:run`

Expected: todos os testes PASS.

Run: `npm run build`

Expected: `dist/` criado sem erros.

- [ ] **Step 6: Commit**

```powershell
git add src vercel.json README.md
git commit -m "feat: finish contact and deployment flow"
```

### Task 11: Verificação visual, acessibilidade e entrega

**Files:**
- Modify: arquivos de estilo ou componentes que falharem na verificação
- Create: `docs/verification/2026-09-01-catalogo-checklist.md`

**Interfaces:**
- Consumes: aplicação completa.
- Produces: evidência de testes, build, responsividade, teclado e console.

- [ ] **Step 1: Executar verificações automatizadas limpas**

Run: `npm run test:run`

Expected: PASS sem testes ignorados.

Run: `npm run build`

Expected: PASS sem warnings de TypeScript ou módulos ausentes.

- [ ] **Step 2: Iniciar o servidor de desenvolvimento**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite informa a URL local e permanece ativo.

- [ ] **Step 3: Verificar a experiência completa no navegador**

Validar `/`, as seis rotas e uma rota inexistente em 390, 768, 1024 e 1440 px. Confirmar ausência de rolagem horizontal, textos sem corte, navegação por teclado, foco visível, alvos de 44 px, animação reduzida e console sem erros.

- [ ] **Step 4: Registrar evidências**

```markdown
# Verificação do catálogo — 2026-09-01

- [x] Testes automatizados
- [x] Build de produção
- [x] Rotas e recuperação 404
- [x] 390 / 768 / 1024 / 1440 px
- [x] Teclado e foco visível
- [x] prefers-reduced-motion
- [x] Console sem erros
- [x] Nenhuma referência segmentada nas demonstrações
```

- [ ] **Step 5: Revisar autoria e commit final**

Run: `git log --format="%an <%ae> | %cn <%ce> | %s" --all`

Expected: todos os commits do projeto exibem somente BrunoBrug como autor e committer e nenhum corpo contém `Co-authored-by`.

```powershell
git add docs/verification src
git commit -m "docs: record catalog verification"
```

- [ ] **Step 6: Enviar a branch principal**

Run: `git push origin main`

Expected: `main` atualizada no repositório `BrunoBrug/Catalogo`.
