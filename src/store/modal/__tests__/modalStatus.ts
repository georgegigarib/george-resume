import { describe, it, expect, beforeEach, vi } from 'vitest'
import themeReducer, { setDarkTheme, ThemeState } from '@/store/theme/themeStatus'
import { setTheme } from '@/utils/setTheme'

vi.mock('@/utils/setTheme', () => ({
  setTheme: vi.fn(),
}))

describe('themeStatus slice', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should handle initial state', () => {
    const initialState: ThemeState = {
      isDarkThemeEnabled: false,
    }
    const state = themeReducer(undefined, { type: 'unknown' })
    expect(state).toEqual(initialState)
  })

  it('should set dark theme', () => {
    const initialState: ThemeState = { isDarkThemeEnabled: false }
    const action = setDarkTheme(true)
    const state = themeReducer(initialState, action)
    expect(state.isDarkThemeEnabled).toBe(true)
    expect(localStorage.getItem('darkMode')).toBe('true')
    expect(setTheme).toHaveBeenCalledWith(true)
  })

  it('should set light theme', () => {
    const initialState: ThemeState = { isDarkThemeEnabled: true }
    const action = setDarkTheme(false)
    const state = themeReducer(initialState, action)
    expect(state.isDarkThemeEnabled).toBe(false)
    expect(localStorage.getItem('darkMode')).toBe('false')
    expect(setTheme).toHaveBeenCalledWith(false)
  })
})
