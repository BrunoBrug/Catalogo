import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { SolutionDefinition } from '@/data/solutions'
import { PreviewForSolution } from './previews/PreviewForSolution'

export function DemoCard({ solution }: { solution: SolutionDefinition }) {
  return (
    <motion.article
      className="demo-card"
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <span className="demo-card__format">
        {solution.order} · {solution.format}
      </span>
      <h3>{solution.title}</h3>
      <p>{solution.summary}</p>
      <div className="demo-card__preview">
        <PreviewForSolution kind={solution.id} />
      </div>
      <Link to={solution.path}>{solution.action} →</Link>
    </motion.article>
  )
}
