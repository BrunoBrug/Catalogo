import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from './HomePage'

it('apresenta as seis soluções e o posicionamento aprovado', () => {
  render(<HomePage />, { wrapper: MemoryRouter })

  expect(
    screen.getByRole('heading', { name: /soluções digitais para negócios reais/i }),
  ).toBeInTheDocument()
  expect(
    screen.getAllByRole('link', { name: /abrir|simular|explorar|percorrer|ver/i }),
  ).toHaveLength(6)
  expect(
    screen.getAllByText(/cada projeto é adaptado à realidade do seu negócio/i).length,
  ).toBeGreaterThanOrEqual(1)
  expect(screen.getByText(/a solução pode ser outra/i)).toBeInTheDocument()
  expect(
    screen.getByText(/formado em análise e desenvolvimento de sistemas/i),
  ).toBeInTheDocument()
})
