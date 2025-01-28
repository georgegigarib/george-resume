import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkTheme } from '@/store/theme/themeStatus.ts'

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux')
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }
})

describe('ThemeSwitcher component', () => {
  const mockDispatch = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useDispatch as unknown as Mock).mockReturnValue(mockDispatch)
  })

  const renderComponent = (darkMode: boolean) => {
    ;(useSelector as unknown as Mock).mockReturnValue(darkMode)
    return render(
      <AppTestProvider>
        <ThemeSwitcher />
      </AppTestProvider>
    )
  }

  it('matches the snapshot when dark mode is enabled', () => {
    const { asFragment } = renderComponent(true)

    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot when dark mode is disabled', () => {
    const { asFragment } = renderComponent(false)

    expect(asFragment()).toMatchSnapshot()
  })

  it('dispatches the correct action when toggling the theme', () => {
    const { getByRole } = renderComponent(false)
    const switchElement = getByRole('checkbox')
    fireEvent.click(switchElement)

    expect(mockDispatch).toHaveBeenCalledWith(setDarkTheme(true))
  })

  it('dispatches the correct action when toggling the theme off', () => {
    const { getByRole } = renderComponent(true)
    const switchElement = getByRole('checkbox')
    fireEvent.click(switchElement)

    expect(mockDispatch).toHaveBeenCalledWith(setDarkTheme(false))
  })
})
