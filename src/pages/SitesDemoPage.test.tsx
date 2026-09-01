import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { SitesDemoPage } from './SitesDemoPage'

describe('SitesDemoPage', () => {
  it('alterna a moldura e mantém conceitos genéricos', async () => {
    const user = userEvent.setup()
    render(<SitesDemoPage />, { wrapper: MemoryRouter })

    expect(screen.queryByText(/pet shop|banho|tosa/i)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /visualizar em celular/i }))
    expect(screen.getByTestId('site-frame')).toHaveAttribute('data-device', 'mobile')
  })

  it('permite trocar o conceito apresentado', async () => {
    const user = userEvent.setup()
    render(<SitesDemoPage />, { wrapper: MemoryRouter })

    await user.click(screen.getByRole('tab', { name: /presença profissional/i }))
    expect(screen.getByRole('heading', { name: /clareza para apresentar seu trabalho/i })).toBeInTheDocument()
  })
})
