import { solutions } from '@/data/solutions'
import { Reveal } from '@/components/shared/Reveal'
import { DemoCard } from './DemoCard'

export function DemoGrid() {
  return (
    <section className="demos page-width" id="demonstracoes">
      <header className="section-heading">
        <div>
          <p className="eyebrow">Demonstrações</p>
          <h2>
            Veja o fluxo,
            <br />
            não só a tela.
          </h2>
        </div>
        <p>
          Cada exemplo mostra uma solução em ação e pode ser aberto para uma experiência
          completa.
        </p>
      </header>
      <div className="demo-grid">
        {solutions.map((solution) => (
          <Reveal key={solution.id} className="demo-card-reveal">
            <DemoCard solution={solution} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
