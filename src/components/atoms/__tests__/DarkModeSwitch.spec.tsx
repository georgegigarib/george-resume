import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DarkModeSwitch from '../DarkModeSwitch'

describe('ThemeSwitch component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<DarkModeSwitch checked={true} onChange={() => {}} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with the correct initial checked state', () => {
    const { getByTestId } = render(<DarkModeSwitch checked={true} onChange={() => {}} />)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('calls onChange when the checkbox is clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId } = render(<DarkModeSwitch checked={false} onChange={handleChange} />)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalled()
  })

  it('applies the correct size based on the size prop', () => {
    const size = 60
    const { container } = render(<DarkModeSwitch checked={false} onChange={() => {}} size={size} />)
    const labelElement = container.querySelector('.theme-switch') as HTMLElement

    expect(labelElement.style.getPropertyValue('--toggle-size')).toBe(`${size}px`)
  })

  it('applies the default size when size prop is not provided', () => {
    const { container } = render(<DarkModeSwitch checked={false} onChange={() => {}} />)
    const labelElement = container.querySelector('.theme-switch') as HTMLElement

    expect(labelElement.style.getPropertyValue('--toggle-size')).toBe('50px')
  })

  it('toggles the checked state correctly when clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId, rerender } = render(
      <DarkModeSwitch checked={false} onChange={handleChange} />
    )
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalled()

    rerender(<DarkModeSwitch checked={true} onChange={handleChange} />)

    expect(checkbox.checked).toBe(true)
  })

  it('renders the correct structure for child elements', () => {
    const { container } = render(<DarkModeSwitch checked={true} onChange={() => {}} />)

    expect(container.querySelector('.theme-switch__clouds')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__stars-container')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__sun-moon-container')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__moon')).toBeInTheDocument()
  })

  it('applies the correct styles based on the checked state', () => {
    const { getByTestId, rerender } = render(<DarkModeSwitch checked={false} onChange={() => {}} />)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(false)

    rerender(<DarkModeSwitch checked={true} onChange={() => {}} />)

    expect(checkbox.checked).toBe(true)
  })
})
