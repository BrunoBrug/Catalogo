export type PreviewKind =
  | 'agenda'
  | 'whatsapp'
  | 'dashboard'
  | 'management'
  | 'sites'
  | 'integrations'

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
  {
    id: 'agenda',
    order: '01',
    format: 'Demo funcional',
    title: 'Agenda inteligente',
    summary: 'Serviços, responsáveis, horários e confirmação em um fluxo completo.',
    path: '/demonstracoes/agenda',
    action: 'Abrir AgendaFlow',
  },
  {
    id: 'whatsapp',
    order: '02',
    format: 'Conversa simulada',
    title: 'Atendimento por WhatsApp',
    summary: 'Triagem, respostas, agenda e encaminhamento em uma conversa guiada.',
    path: '/demonstracoes/whatsapp',
    action: 'Simular atendimento',
  },
  {
    id: 'dashboard',
    order: '03',
    format: 'Dados exploráveis',
    title: 'Dashboard comercial',
    summary: 'Indicadores e filtros para acompanhar desempenho e oportunidades.',
    path: '/demonstracoes/dashboard',
    action: 'Explorar painel',
  },
  {
    id: 'management',
    order: '04',
    format: 'Fluxo guiado',
    title: 'Gestão de serviços',
    summary: 'Solicitação, orçamento, andamento e entrega em um acompanhamento.',
    path: '/demonstracoes/gestao',
    action: 'Percorrer o fluxo',
  },
  {
    id: 'sites',
    order: '05',
    format: 'Galeria visual',
    title: 'Sites e landing pages',
    summary: 'Conceitos completos com visualização em desktop e celular.',
    path: '/demonstracoes/sites',
    action: 'Ver galeria de sites',
  },
  {
    id: 'integrations',
    order: '06',
    format: 'Estudo de caso',
    title: 'Integrações',
    summary: 'Processos conectados para reduzir tarefas manuais e organizar informações.',
    path: '/demonstracoes/integracoes',
    action: 'Ver estudo de caso',
  },
] as const
