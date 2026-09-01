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
