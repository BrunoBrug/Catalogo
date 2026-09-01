import { Link } from 'react-router-dom'
import type { SolutionDefinition } from '@/data/solutions'

export function DemoCard({ solution }: { solution: SolutionDefinition }) {
  return (
    <article className="demo-card">
      <span className="demo-card__format">
        {solution.order} · {solution.format}
      </span>
      <h3>{solution.title}</h3>
      <p>{solution.summary}</p>
      <div className="demo-card__preview" aria-hidden="true">
        <span>{solution.title}</span>
      </div>
      <Link to={solution.path}>{solution.action} →</Link>
    </article>
  )
}
