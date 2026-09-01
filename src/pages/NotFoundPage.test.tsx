import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import { NotFoundPage } from './NotFoundPage'

it('oferece retorno ao catálogo', () => {
  render(<NotFoundPage />, { wrapper: MemoryRouter })
  expect(screen.getByRole('link', { name: /voltar ao catálogo/i })).toHaveAttribute('href', '/')
})
