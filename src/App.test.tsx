import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

it('apresenta a identidade principal', () => {
  render(<App />, { wrapper: MemoryRouter })

  expect(screen.getByText(/Bruno Brugnerotto/i)).toBeInTheDocument()
})
