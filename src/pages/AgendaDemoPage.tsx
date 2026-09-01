import { useState, type FormEvent } from 'react'
import { CalendarDays, Check } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'
import { availableSlots, responsibleOptions, serviceOptions } from '@/data/demoData'

export function AgendaDemoPage() {
  const [serviceId, setServiceId] = useState('')
  const [responsibleId, setResponsibleId] = useState('')
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [feedback, setFeedback] = useState<'error' | 'success' | null>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setFeedback(serviceId && responsibleId && date && slot ? 'success' : 'error')
  }

  const summary = (
    <>
      <p className="eyebrow">Resumo</p>
      <h2>Seu horário</h2>
      <dl className="booking-summary">
        <div><dt>Serviço</dt><dd>{serviceOptions.find(({ id }) => id === serviceId)?.name ?? 'A escolher'}</dd></div>
        <div><dt>Responsável</dt><dd>{responsibleOptions.find(({ id }) => id === responsibleId)?.name ?? 'A escolher'}</dd></div>
        <div><dt>Data</dt><dd>{date || 'A escolher'}</dd></div>
        <div><dt>Horário</dt><dd>{slot || 'A escolher'}</dd></div>
      </dl>
    </>
  )

  return (
    <DemoLayout
      eyebrow="Demo 01 · Agenda"
      title="AgendaFlow"
      description="Um agendamento direto, com disponibilidade clara e confirmação sem troca de várias mensagens."
      aside={summary}
    >
      <div className="demo-product-title">
        <CalendarDays size={22} aria-hidden="true" />
        <div><b>Novo agendamento</b><span>Escolha as opções para simular</span></div>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Serviço
          <select value={serviceId} onChange={(event) => { setServiceId(event.target.value); setFeedback(null) }}>
            <option value="">Selecione um serviço</option>
            {serviceOptions.map((service) => <option key={service.id} value={service.id}>{service.name} · {service.duration}</option>)}
          </select>
        </label>
        <label>
          Responsável
          <select value={responsibleId} onChange={(event) => { setResponsibleId(event.target.value); setFeedback(null) }}>
            <option value="">Selecione um responsável</option>
            {responsibleOptions.map((responsible) => <option key={responsible.id} value={responsible.id}>{responsible.name}</option>)}
          </select>
        </label>
        <label className="booking-form__date">
          Data
          <input type="date" value={date} onChange={(event) => { setDate(event.target.value); setFeedback(null) }} />
        </label>
        <fieldset>
          <legend>Horário disponível</legend>
          <div className="slot-grid">
            {availableSlots.map((time) => (
              <button className={slot === time ? 'is-selected' : ''} key={time} type="button" onClick={() => { setSlot(time); setFeedback(null) }}>
                {time}
              </button>
            ))}
          </div>
        </fieldset>
        <button className="primary-button" type="submit">Confirmar agendamento</button>
        {feedback === 'error' ? <p className="form-feedback is-error" role="alert">Escolha serviço, responsável, data e horário antes de confirmar.</p> : null}
        {feedback === 'success' ? <p className="form-feedback is-success" role="status"><Check size={17} aria-hidden="true" /> Demonstração confirmada. O cliente receberia os detalhes automaticamente.</p> : null}
      </form>
    </DemoLayout>
  )
}
