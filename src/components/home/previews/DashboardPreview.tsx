import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function DashboardPreview() {
  return (
    <DemoBrowserFrame label="Dashboard comercial" className="dashboard-preview">
      <header><b>Visão comercial</b><span>Últimos 30 dias</span></header>
      <div className="dashboard-preview__stats">
        <span><small>Receita</small><b>R$ 28,4 mil</b><i>+12%</i></span>
        <span><small>Novos clientes</small><b>48</b><i>+8%</i></span>
      </div>
      <div className="dashboard-preview__chart" aria-hidden="true">
        {[34, 52, 43, 68, 59, 78, 88].map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </DemoBrowserFrame>
  )
}
