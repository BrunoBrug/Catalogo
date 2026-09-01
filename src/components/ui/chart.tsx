import * as React from 'react'
import { ResponsiveContainer, Tooltip, type TooltipContentProps } from 'recharts'
import { cn } from '@/lib/utils'

export type ChartConfig = Record<string, { label?: React.ReactNode; color?: string }>

interface ChartContainerProps extends React.ComponentProps<'div'> {
  config: ChartConfig
  children: React.ComponentProps<typeof ResponsiveContainer>['children']
}

function ChartContainer({ id, className, children, config, style, ...props }: ChartContainerProps) {
  const uniqueId = React.useId().replace(/:/g, '')
  const chartId = `chart-${id || uniqueId}`
  const colorVariables = Object.fromEntries(
    Object.entries(config)
      .filter(([, item]) => item.color)
      .map(([key, item]) => [`--color-${key}`, item.color]),
  ) as React.CSSProperties

  return (
    <div
      data-chart={chartId}
      className={cn('chart-container', className)}
      style={{ ...colorVariables, ...style }}
      {...props}
    >
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </div>
  )
}

type WatermelonTooltipProps = Partial<TooltipContentProps<number, string>> & {
  hideLabel?: boolean
}

function ChartTooltipContent({ active, payload, label, hideLabel = false }: WatermelonTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="chart-tooltip">
      {!hideLabel && label ? <b>{label}</b> : null}
      {payload.map((item) => (
        <span key={String(item.dataKey ?? item.name)}>
          <i style={{ backgroundColor: item.color }} />
          {item.name ?? 'Resultado'}: <strong>{item.value}</strong>
        </span>
      ))}
    </div>
  )
}

const ChartTooltip = Tooltip

export { ChartContainer, ChartTooltip, ChartTooltipContent }
