import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { IntegrationsDemoPage } from './IntegrationsDemoPage'

describe('IntegrationsDemoPage', () => {
  it('explica a diferença entre processo separado e conectado', async () => {
    const user = userEvent.setup()
    render(<IntegrationsDemoPage />, { wrapper: MemoryRouter })

    expect(screen.getByText(/informações copiadas manualmente/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /ver fluxo conectado/i }))
    expect(screen.getByText(/registro criado automaticamente/i)).toBeInTheDocument()
  })
})
