import { renderHook, act } from '@testing-library/react'
import { useLanguage } from '@/hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn()
}))

describe('useLanguage', () => {
  const mockChangeLanguage = vi.fn()
  const mockI18n = {
    changeLanguage: mockChangeLanguage
  }

  beforeEach(() => {
    ;(useTranslation as unknown as Mock).mockReturnValue({ i18n: mockI18n })
    localStorage.clear()
  })

  it('should change the language and save it to localStorage', () => {
    const { result } = renderHook(() => useLanguage())

    act(() => {
      result.current.changeLanguage('es')
    })

    expect(mockChangeLanguage).toHaveBeenCalledWith('es')
    expect(localStorage.getItem('language')).toBe('es')
  })

  it('should load the language from localStorage', () => {
    localStorage.setItem('language', 'fr')

    const { result } = renderHook(() => useLanguage())

    act(() => {
      result.current.loadLanguageFromStorage()
    })

    expect(mockChangeLanguage).toHaveBeenCalledWith('fr')
  })

  it('should return the current language from localStorage', () => {
    localStorage.setItem('language', 'de')

    const { result } = renderHook(() => useLanguage())

    expect(result.current.currentLanguage).toBe('de')
  })

  it('should return "en" if no language is in localStorage', () => {
    const { result } = renderHook(() => useLanguage())

    expect(result.current.currentLanguage).toBe('en')
  })
})
