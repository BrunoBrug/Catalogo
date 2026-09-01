import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function SitesPreview() {
  return (
    <DemoBrowserFrame label="Sites e landing pages" className="sites-preview">
      <div className="sites-preview__desktop">
        <nav><b>MARCA</b><span>Início &nbsp; Serviços &nbsp; Contato</span></nav>
        <main><small>SOLUÇÕES SOB MEDIDA</small><b>Uma presença digital que gera oportunidades.</b><i>Conheça nossos serviços</i></main>
      </div>
      <div className="sites-preview__phone">
        <span />
        <small>MARCA</small>
        <b>Seu negócio,<br />mais perto.</b>
        <i />
      </div>
    </DemoBrowserFrame>
  )
}
