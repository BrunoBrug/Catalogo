import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { WhatsAppDemoPage } from './WhatsAppDemoPage'

describe('WhatsAppDemoPage', () => {
  it('conduz um pedido de orçamento e permite reiniciar', async () => {
    const user = userEvent.setup()
    render(<WhatsAppDemoPage />, { wrapper: MemoryRouter })

    await user.click(screen.getByRole('button', { name: /pedir orçamento/i }))
    expect(screen.getByText(/algumas perguntas rápidas/i)).toBeInTheDocument()
    expect(screen.getByText(/interesse: orçamento/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /reiniciar conversa/i }))
    expect(screen.getByRole('button', { name: /pedir orçamento/i })).toBeInTheDocument()
  })
})
