import { AboutBruno } from '@/components/home/AboutBruno'
import { DemoGrid } from '@/components/home/DemoGrid'
import { Hero } from '@/components/home/Hero'
import { SolutionMap } from '@/components/home/SolutionMap'
import { ContactCTA } from '@/components/shared/ContactCTA'

export function HomePage() {
  return (
    <main id="conteudo-principal" tabIndex={-1}>
      <Hero />
      <SolutionMap />
      <DemoGrid />
      <section className="adaptability page-width">
        <p className="eyebrow">Projetos adaptáveis</p>
        <div>
          <h2>Cada projeto é adaptado à realidade do seu negócio.</h2>
          <p>
            Serviços, etapas, integrações e indicadores podem assumir formatos diferentes
            conforme a operação, os clientes e os objetivos.
          </p>
        </div>
      </section>
      <section className="alternative page-width" id="outras-solucoes">
        <div>
          <p className="eyebrow">Além do catálogo</p>
          <h2>A solução pode ser outra.</h2>
          <p>
            Uma necessidade diferente pode resultar em outra solução ou em uma combinação
            criada especificamente para o cenário do negócio.
          </p>
          <a href="#contato">Apresentar uma necessidade →</a>
        </div>
        <ol>
          <li>Uma rotina que precisa ser simplificada</li>
          <li>Uma oportunidade que pode ser aproveitada</li>
          <li>Uma solução adequada ao contexto</li>
        </ol>
      </section>
      <AboutBruno />
      <div className="page-width"><ContactCTA /></div>
    </main>
  )
}
