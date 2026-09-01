import { useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'
import { siteConcepts, type DeviceFrame, type SiteConcept } from '@/data/demoData'

export function SitesDemoPage() {
  const [conceptId, setConceptId] = useState<SiteConcept>('services')
  const [device, setDevice] = useState<DeviceFrame>('desktop')
  const concept = siteConcepts.find(({ id }) => id === conceptId)!

  return (
    <DemoLayout
      eyebrow="Demo 05 · Presença digital"
      title="Galeria de sites"
      description="Três direções genéricas mostram como conteúdo, estilo e chamada podem assumir a personalidade de cada negócio."
    >
      <div className="site-gallery-toolbar">
        <div className="site-gallery-tabs" role="tablist" aria-label="Conceitos de site">
          {siteConcepts.map((item) => <button role="tab" aria-selected={item.id === conceptId} key={item.id} onClick={() => setConceptId(item.id)}>{item.tab}</button>)}
        </div>
        <div className="device-toggle">
          <button className={device === 'desktop' ? 'is-active' : ''} type="button" aria-label="Visualizar em computador" onClick={() => setDevice('desktop')}><Monitor size={17} /></button>
          <button className={device === 'mobile' ? 'is-active' : ''} type="button" aria-label="Visualizar em celular" onClick={() => setDevice('mobile')}><Smartphone size={17} /></button>
        </div>
      </div>
      <div className="site-stage">
        <article className={`site-frame is-${device} is-${concept.id}`} data-testid="site-frame" data-device={device}>
          <nav><b>ESSÊNCIA</b><span>Início&nbsp;&nbsp; Soluções&nbsp;&nbsp; Sobre&nbsp;&nbsp; Contato</span><i>Menu</i></nav>
          <main>
            <div>
              <small>{concept.kicker}</small>
              <h2>{concept.title}</h2>
              <p>{concept.copy}</p>
              <button type="button">{concept.action} →</button>
            </div>
            <figure aria-label="Espaço visual da marca"><span>01</span><i /></figure>
          </main>
          <footer><span>Atendimento direto</span><span>Soluções adaptáveis</span><span>Presença profissional</span></footer>
        </article>
      </div>
    </DemoLayout>
  )
}
