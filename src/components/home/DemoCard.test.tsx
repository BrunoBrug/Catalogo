import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DemoCard } from '@/components/home/DemoCard'
import { solutions } from '@/data/solutions'

describe('DemoCard', () => {
  it.each(solutions)('exibe uma prévia útil para $title', (solution) => {
    render(
      <MemoryRouter>
        <DemoCard solution={solution} />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('img', { name: `Prévia de ${solution.title}` }),
    ).toBeInTheDocument()
  })

  it('apresenta o atendimento como uma conversa de texto', () => {
    const whatsapp = solutions.find((solution) => solution.id === 'whatsapp')!

    render(
      <MemoryRouter>
        <DemoCard solution={whatsapp} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Olá! Como posso ajudar?')).toBeInTheDocument()
    expect(screen.getByText('Quero consultar um horário.')).toBeInTheDocument()
  })
})
