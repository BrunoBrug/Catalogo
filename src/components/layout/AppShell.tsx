import { Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <header className="site-header page-width">
        <a className="brand" href="/" aria-label="Bruno Brugnerotto — Desenvolvedor">
          <strong>
            <span>Bruno</span> <span>Brugnerotto</span>
          </strong>
          <small>DESENVOLVEDOR · CATÁLOGO DE SOLUÇÕES</small>
        </a>
        <nav aria-label="Navegação principal">
          <a href="/#demonstracoes">Demonstrações</a>
          <a href="/#outras-solucoes">Soluções</a>
          <a href="/#contato">Conversar →</a>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer page-width">
        <span>Bruno Brugnerotto — Desenvolvedor</span>
        <span>Curitiba · Paraná</span>
      </footer>
    </div>
  )
}
