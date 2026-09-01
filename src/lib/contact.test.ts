import { describe, expect, it } from 'vitest'
import { getContactUrl } from './contact'

describe('getContactUrl', () => {
  it('usa a URL configurada quando disponível', () => {
    expect(getContactUrl('https://wa.me/5541999999999')).toBe('https://wa.me/5541999999999')
  })

  it('usa o portfólio como alternativa', () => {
    expect(getContactUrl()).toBe('https://brunobrug.vercel.app/')
  })
})
