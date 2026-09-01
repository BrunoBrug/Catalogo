import type { PreviewKind } from '@/data/solutions'
import { AgendaPreview } from './AgendaPreview'
import { DashboardPreview } from './DashboardPreview'
import { IntegrationsPreview } from './IntegrationsPreview'
import { ManagementPreview } from './ManagementPreview'
import { SitesPreview } from './SitesPreview'
import { WhatsAppPreview } from './WhatsAppPreview'

const previews = {
  agenda: AgendaPreview,
  whatsapp: WhatsAppPreview,
  dashboard: DashboardPreview,
  management: ManagementPreview,
  sites: SitesPreview,
  integrations: IntegrationsPreview,
} satisfies Record<PreviewKind, React.ComponentType>

export function PreviewForSolution({ kind }: { kind: PreviewKind }) {
  const Preview = previews[kind]
  return <Preview />
}
