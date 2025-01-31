import { describe, it, expect, beforeEach } from 'vitest'
import { setTheme } from '@/utils/setTheme'

describe('setTheme', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('should add "dark" class when isDark is true', () => {
    setTheme(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should remove "dark" class when isDark is false', () => {
    document.documentElement.classList.add('dark')

    setTheme(false)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
