import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ContactCTA } from '@/components/shared/ContactCTA'

interface DemoLayoutProps {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  aside?: ReactNode
}

export function DemoLayout({ eyebrow, title, description, children, aside }: DemoLayoutProps) {
  return (
    <main className="demo-page page-width" id="conteudo-principal" tabIndex={-1}>
      <Link className="demo-page__back" to="/#demonstracoes">← Voltar ao catálogo</Link>
      <header className="demo-page__heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </header>
      <div className={`demo-page__workspace${aside ? ' has-aside' : ''}`}>
        <section className="demo-surface">{children}</section>
        {aside ? <aside className="demo-aside">{aside}</aside> : null}
      </div>
      <p className="demo-page__note">Demonstração com dados fictícios. Nenhuma ação externa é realizada.</p>
      <ContactCTA compact />
    </main>
  )
}
