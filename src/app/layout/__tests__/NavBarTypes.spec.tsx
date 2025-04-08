import { expect } from 'vitest'
import { Sections } from '@/app/layout/types/NavBarTypes'
import { describe, it } from 'vitest'

describe('NavBarTypes', () => {
  it('should have the correct number of sections', () => {
    const sections = Object.keys(Sections)
    expect(sections.length).toBe(3)
  })

  it('should have the correct section names', () => {
    const sections = Object.keys(Sections)
    expect(sections).toEqual(['Dev', 'Me', 'Music'])
  })
})
