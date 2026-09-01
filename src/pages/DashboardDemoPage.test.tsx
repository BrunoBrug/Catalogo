import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DashboardDemoPage } from './DashboardDemoPage'

describe('DashboardDemoPage', () => {
  it('atualiza métricas ao trocar o período', async () => {
    const user = userEvent.setup()
    render(<DashboardDemoPage />, { wrapper: MemoryRouter })

    expect(screen.getByText('R$ 42 mil')).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText(/período/i), '90d')
    expect(screen.getByText('R$ 118 mil')).toBeInTheDocument()
  })

  it('limpa os filtros para o período inicial', async () => {
    const user = userEvent.setup()
    render(<DashboardDemoPage />, { wrapper: MemoryRouter })

    await user.selectOptions(screen.getByLabelText(/período/i), 'year')
    await user.click(screen.getByRole('button', { name: /limpar filtros/i }))
    expect(screen.getByText('R$ 42 mil')).toBeInTheDocument()
  })
})
