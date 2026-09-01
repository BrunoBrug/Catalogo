import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AgendaDemoPage } from './AgendaDemoPage'

describe('AgendaDemoPage', () => {
  it('exige os campos antes de confirmar', async () => {
    const user = userEvent.setup()
    render(<AgendaDemoPage />, { wrapper: MemoryRouter })

    await user.click(screen.getByRole('button', { name: /confirmar agendamento/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      /escolha serviço, responsável, data e horário/i,
    )
  })

  it('confirma uma seleção completa como demonstração fictícia', async () => {
    const user = userEvent.setup()
    render(<AgendaDemoPage />, { wrapper: MemoryRouter })

    await user.selectOptions(screen.getByLabelText(/serviço/i), 'reuniao-inicial')
    await user.selectOptions(screen.getByLabelText(/responsável/i), 'equipe-atendimento')
    await user.type(screen.getByLabelText(/data/i), '2026-09-10')
    await user.click(screen.getByRole('button', { name: '10:00' }))
    await user.click(screen.getByRole('button', { name: /confirmar agendamento/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/demonstração confirmada/i)
  })
})
