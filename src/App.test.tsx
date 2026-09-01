import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

it('apresenta a identidade principal', () => {
  render(<App />, { wrapper: MemoryRouter })

  expect(
    screen.getByRole('link', { name: /Bruno Brugnerotto — Desenvolvedor/i }),
  ).toBeInTheDocument()
})
