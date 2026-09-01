import { Link } from 'react-router-dom'
import { solutions } from '@/data/solutions'

export function SolutionMap() {
  return (
    <section className="solution-map page-width" aria-label="Mapa do catálogo">
      <header>
        <span>MAPA DO CATÁLOGO</span>
        <span>ESCOLHA UMA SOLUÇÃO E VEJA NA PRÁTICA</span>
      </header>
      <div className="solution-map__routes">
        <div className="solution-map__home">
          <small>PÁGINA PRINCIPAL</small>
          <strong>Catálogo</strong>
          <span>→</span>
        </div>
        {solutions.map((solution) => (
          <Link key={solution.id} to={solution.path}>
            <small>{solution.path.replace('/demonstracoes', '')}</small>
            <strong>{solution.title.replace(' inteligente', '').replace(' comercial', '')}</strong>
            <span>↗</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
