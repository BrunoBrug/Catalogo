import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="not-found page-width" id="conteudo-principal" tabIndex={-1}>
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar ao catálogo</Link>
    </main>
  )
}
