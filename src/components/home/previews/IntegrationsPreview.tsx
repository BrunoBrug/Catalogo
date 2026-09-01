import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function IntegrationsPreview() {
  return (
    <DemoBrowserFrame label="Integrações" className="integrations-preview">
      <div className="integration-node">Formulário<small>nova solicitação</small></div>
      <span className="integration-arrow">→</span>
      <div className="integration-node integration-node--core">Automação<small>organiza e envia</small></div>
      <span className="integration-arrow">→</span>
      <div className="integration-stack">
        <div>Agenda</div>
        <div>Planilha</div>
        <div>Mensagem</div>
      </div>
    </DemoBrowserFrame>
  )
}
