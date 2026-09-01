import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const AgendaDemoPage = lazy(() => import('@/pages/AgendaDemoPage').then((module) => ({ default: module.AgendaDemoPage })))
const WhatsAppDemoPage = lazy(() => import('@/pages/WhatsAppDemoPage').then((module) => ({ default: module.WhatsAppDemoPage })))
const DashboardDemoPage = lazy(() => import('@/pages/DashboardDemoPage').then((module) => ({ default: module.DashboardDemoPage })))
const ManagementDemoPage = lazy(() => import('@/pages/ManagementDemoPage').then((module) => ({ default: module.ManagementDemoPage })))
const SitesDemoPage = lazy(() => import('@/pages/SitesDemoPage').then((module) => ({ default: module.SitesDemoPage })))
const IntegrationsDemoPage = lazy(() => import('@/pages/IntegrationsDemoPage').then((module) => ({ default: module.IntegrationsDemoPage })))

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="demonstracoes/agenda" element={<Suspense fallback={<RouteLoading />}><AgendaDemoPage /></Suspense>} />
        <Route path="demonstracoes/whatsapp" element={<Suspense fallback={<RouteLoading />}><WhatsAppDemoPage /></Suspense>} />
        <Route path="demonstracoes/dashboard" element={<Suspense fallback={<RouteLoading />}><DashboardDemoPage /></Suspense>} />
        <Route path="demonstracoes/gestao" element={<Suspense fallback={<RouteLoading />}><ManagementDemoPage /></Suspense>} />
        <Route path="demonstracoes/sites" element={<Suspense fallback={<RouteLoading />}><SitesDemoPage /></Suspense>} />
        <Route path="demonstracoes/integracoes" element={<Suspense fallback={<RouteLoading />}><IntegrationsDemoPage /></Suspense>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

function RouteLoading() {
  return <main className="route-loading page-width" role="status">Carregando demonstração…</main>
}
