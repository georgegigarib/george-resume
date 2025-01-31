import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher'

const changeLanguageMock = vi.fn()

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    changeLanguage: changeLanguageMock,
  }),
}))

describe('LanguageSwitcher component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <LanguageSwitcher />
      </AppTestProvider>
    )

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens the menu when button is clicked', () => {
    const { getByTestId } = renderComponent()

    const button = getByTestId('language-switcher-button')
    fireEvent.click(button)

    expect(getByTestId('language-menu')).toBeTruthy()
    expect(getByTestId('language-option-en')).toBeTruthy()
    expect(getByTestId('language-option-es')).toBeTruthy()
  })

  it('changes language when an option is selected', () => {
    const { getByTestId } = renderComponent()

    const button = getByTestId('language-switcher-button')
    fireEvent.click(button)

    const spanishOption = getByTestId('language-option-es')
    fireEvent.click(spanishOption)

    expect(changeLanguageMock).toHaveBeenCalledWith('es')
  })
})
