import { useState } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { BarChart3, RotateCcw, TrendingUp } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import { dashboardByPeriod, type DashboardPeriod } from '@/data/demoData'

const chartConfig = {
  value: { label: 'Resultado', color: '#bd5c3e' },
} satisfies ChartConfig

export function DashboardDemoPage() {
  const [period, setPeriod] = useState<DashboardPeriod>('30d')
  const data = dashboardByPeriod[period]

  return (
    <DemoLayout
      eyebrow="Demo 03 · Dados"
      title="Visão comercial"
      description="Indicadores transformam registros do dia a dia em uma leitura clara do momento e das oportunidades do negócio."
    >
      <div className="dashboard-toolbar">
        <div className="demo-product-title">
          <BarChart3 size={22} aria-hidden="true" />
          <div><b>Painel de resultados</b><span>Atualizado com dados de demonstração</span></div>
        </div>
        <div className="dashboard-filters">
          <label>Período
            <select value={period} onChange={(event) => setPeriod(event.target.value as DashboardPeriod)}>
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="year">Este ano</option>
            </select>
          </label>
          <button type="button" onClick={() => setPeriod('30d')}><RotateCcw size={15} /> Limpar filtros</button>
        </div>
      </div>
      <div className="metric-grid">
        <article><small>Receita acompanhada</small><b>{data.revenue}</b><span><TrendingUp size={14} /> {data.trend} no período</span></article>
        <article><small>Oportunidades</small><b>{data.opportunities}</b><span>novos contatos registrados</span></article>
        <article><small>Taxa de retorno</small><b>{data.returnRate}</b><span>clientes que voltaram</span></article>
      </div>
      <section className="dashboard-chart-section" aria-label="Evolução dos resultados">
        <header><div><p className="eyebrow">Evolução</p><h2>Resultado por intervalo</h2></div><span>Valores ilustrativos</span></header>
        <ChartContainer config={chartConfig} className="dashboard-chart">
          <AreaChart accessibilityLayer data={[...data.series]} margin={{ left: -18, right: 12, top: 15 }}>
            <defs>
              <linearGradient id="resultFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--copper)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="var(--copper)" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(18,52,59,.12)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Area dataKey="value" type="monotone" stroke="var(--copper)" strokeWidth={3} fill="url(#resultFill)" />
          </AreaChart>
        </ChartContainer>
        <p className="chart-description">A série mostra a evolução dos resultados no período escolhido e permite perceber tendências sem analisar planilhas manualmente.</p>
      </section>
    </DemoLayout>
  )
}
