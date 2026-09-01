import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ManagementDemoPage } from './ManagementDemoPage'

describe('ManagementDemoPage', () => {
  it('abre os detalhes da ordem selecionada', async () => {
    const user = userEvent.setup()
    render(<ManagementDemoPage />, { wrapper: MemoryRouter })

    await user.click(screen.getByRole('button', { name: /ordem 1042/i }))
    expect(screen.getByRole('heading', { name: /ordem 1042/i })).toBeInTheDocument()
    expect(screen.getByText(/histórico do serviço/i)).toBeInTheDocument()
  })
})
