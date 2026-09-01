import { useState } from 'react'
import { CheckCircle2, ClipboardList, Clock3, X } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'
import { serviceOrders, serviceOrderStatuses, type ServiceOrder } from '@/data/demoData'

export function ManagementDemoPage() {
  const [selected, setSelected] = useState<ServiceOrder | null>(null)

  return (
    <DemoLayout
      eyebrow="Demo 04 · Operação"
      title="Gestão de serviços"
      description="Um quadro simples centraliza solicitações, prazos e históricos para a equipe saber o que precisa acontecer em seguida."
    >
      <div className="management-toolbar">
        <div className="demo-product-title"><ClipboardList size={22} /><div><b>Ordens de serviço</b><span>{serviceOrders.length} itens neste quadro</span></div></div>
        <span>Atualizado agora</span>
      </div>
      <div className="service-board">
        {serviceOrderStatuses.map((status) => (
          <section key={status} className="service-column" aria-label={status}>
            <header><b>{status}</b><span>{serviceOrders.filter((order) => order.status === status).length}</span></header>
            {serviceOrders.filter((order) => order.status === status).map((order) => (
              <button key={order.id} type="button" onClick={() => setSelected(order)}>
                <small>Ordem {order.id}</small>
                <b>{order.summary}</b>
                <span>{order.customer} · {order.value}</span>
              </button>
            ))}
          </section>
        ))}
      </div>
      {selected ? (
        <section className="order-details" aria-label={`Detalhes da ordem ${selected.id}`}>
          <header><div><p className="eyebrow">Detalhes</p><h2>Ordem {selected.id}</h2></div><button type="button" aria-label="Fechar detalhes" onClick={() => setSelected(null)}><X /></button></header>
          <div className="order-details__meta">
            <span><small>Cliente</small><b>{selected.customer}</b></span>
            <span><small>Status</small><b>{selected.status}</b></span>
            <span><small>Valor fictício</small><b>{selected.value}</b></span>
          </div>
          <h3>Histórico do serviço</h3>
          <ol>
            {selected.history.map((event, index) => <li key={event}>{index === selected.history.length - 1 ? <Clock3 size={16} /> : <CheckCircle2 size={16} />}{event}</li>)}
          </ol>
        </section>
      ) : null}
    </DemoLayout>
  )
}
