export interface ServiceOption {
  id: string
  name: string
  duration: string
}

export interface ResponsibleOption {
  id: string
  name: string
}

export const serviceOptions: readonly ServiceOption[] = [
  { id: 'reuniao-inicial', name: 'Reunião inicial', duration: '45 min' },
  { id: 'atendimento-completo', name: 'Atendimento completo', duration: '1h 30 min' },
  { id: 'retorno', name: 'Retorno', duration: '30 min' },
]

export const responsibleOptions: readonly ResponsibleOption[] = [
  { id: 'equipe-atendimento', name: 'Equipe de atendimento' },
  { id: 'especialista-1', name: 'Especialista 1' },
  { id: 'especialista-2', name: 'Especialista 2' },
]

export const availableSlots = ['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'] as const

export type ChatIntent = 'schedule' | 'quote' | 'human'

export interface ChatMessage {
  id: string
  sender: 'business' | 'customer'
  text: string
  time: string
}

export const chatIntentLabels: Record<ChatIntent, string> = {
  schedule: 'Agendamento',
  quote: 'Orçamento',
  human: 'Falar com a equipe',
}

export type DashboardPeriod = '30d' | '90d' | 'year'

export interface DashboardSnapshot {
  revenue: string
  opportunities: string
  returnRate: string
  trend: string
  series: readonly { label: string; value: number }[]
}

export const dashboardByPeriod: Record<DashboardPeriod, DashboardSnapshot> = {
  '30d': {
    revenue: 'R$ 42 mil', opportunities: '64', returnRate: '38%', trend: '+12%',
    series: [
      { label: 'Sem 1', value: 7 }, { label: 'Sem 2', value: 9 },
      { label: 'Sem 3', value: 8 }, { label: 'Sem 4', value: 12 },
    ],
  },
  '90d': {
    revenue: 'R$ 118 mil', opportunities: '183', returnRate: '41%', trend: '+18%',
    series: [
      { label: 'Jun', value: 31 }, { label: 'Jul', value: 38 }, { label: 'Ago', value: 49 },
    ],
  },
  year: {
    revenue: 'R$ 486 mil', opportunities: '721', returnRate: '44%', trend: '+24%',
    series: [
      { label: '1º tri', value: 92 }, { label: '2º tri', value: 111 },
      { label: '3º tri', value: 128 }, { label: '4º tri', value: 155 },
    ],
  },
}
