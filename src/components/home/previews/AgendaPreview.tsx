import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function AgendaPreview() {
  return (
    <DemoBrowserFrame label="Agenda inteligente" className="agenda-preview">
      <aside>
        <b>Agenda</b>
        <span>Hoje</span>
        <span>Semana</span>
      </aside>
      <div className="agenda-preview__main">
        <header>
          <b>Terça-feira, 10</b>
          <span>+ Novo horário</span>
        </header>
        <div className="agenda-preview__calendar">
          <time>09:00</time><i />
          <time>10:30</time><i className="is-booked">Reunião inicial</i>
          <time>13:00</time><i />
          <time>14:30</time><i className="is-confirmed">Serviço confirmado</i>
        </div>
      </div>
    </DemoBrowserFrame>
  )
}
