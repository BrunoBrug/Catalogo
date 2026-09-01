import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function ManagementPreview() {
  return (
    <DemoBrowserFrame label="Gestão de serviços" className="management-preview">
      <header><b>Serviços em andamento</b><span>12 ativos</span></header>
      <div className="management-preview__columns">
        <div><small>Solicitados · 3</small><i>Briefing recebido<span>Hoje</span></i></div>
        <div><small>Em andamento · 5</small><i>Configuração<span>68%</span></i></div>
        <div><small>Concluídos · 4</small><i>Entrega aprovada<span>✓</span></i></div>
      </div>
    </DemoBrowserFrame>
  )
}
