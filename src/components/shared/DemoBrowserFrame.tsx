import type { ReactNode } from 'react'

interface DemoBrowserFrameProps {
  label: string
  children: ReactNode
  className?: string
}

export function DemoBrowserFrame({ label, children, className = '' }: DemoBrowserFrameProps) {
  return (
    <div
      className={`preview-frame ${className}`.trim()}
      role="img"
      aria-label={`Prévia de ${label}`}
    >
      <div className="preview-frame__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>bruno.dev / demonstração</span>
      </div>
      <div className="preview-frame__content">{children}</div>
    </div>
  )
}
