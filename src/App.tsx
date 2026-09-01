import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AgendaDemoPage } from '@/pages/AgendaDemoPage'
import { WhatsAppDemoPage } from '@/pages/WhatsAppDemoPage'
import { DashboardDemoPage } from '@/pages/DashboardDemoPage'
import { ManagementDemoPage } from '@/pages/ManagementDemoPage'
import { SitesDemoPage } from '@/pages/SitesDemoPage'

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="demonstracoes/agenda" element={<AgendaDemoPage />} />
        <Route path="demonstracoes/whatsapp" element={<WhatsAppDemoPage />} />
        <Route path="demonstracoes/dashboard" element={<DashboardDemoPage />} />
        <Route path="demonstracoes/gestao" element={<ManagementDemoPage />} />
        <Route path="demonstracoes/sites" element={<SitesDemoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
