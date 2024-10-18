import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'
import * as themeUtils from '@/utils/setTheme'

describe('ThemeSwitcher component', () => {
  const setThemeSpy = vi.spyOn(themeUtils, 'setTheme')

  const renderComponent = () => render(<ThemeSwitcher />)

  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('matches snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with dark mode based on localStorage', () => {
    localStorage.setItem('darkMode', 'true')
    renderComponent()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles to dark mode on switch', () => {
    localStorage.setItem('darkMode', 'false')
    const { getByRole } = renderComponent()
    const switchElement = getByRole('checkbox')

    fireEvent.click(switchElement)

    expect(setThemeSpy).toHaveBeenCalledWith(true)
    expect(localStorage.getItem('darkMode')).toBe('true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles to light mode on switch', () => {
    localStorage.setItem('darkMode', 'true')
    const { getByRole } = renderComponent()
    const switchElement = getByRole('checkbox')

    fireEvent.click(switchElement)

    expect(setThemeSpy).toHaveBeenCalledWith(false)
    expect(localStorage.getItem('darkMode')).toBe('false')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
