import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DarkModeSwitch from '../DarkModeSwitch'

describe('DarkModeSwitch component', () => {
  const renderComponent = (checked = false, onChange = () => {}, size?: number) =>
    render(<DarkModeSwitch checked={checked} onChange={onChange} size={size} />)

  it('matches snapshot', () => {
    const { asFragment } = renderComponent(true)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with the correct initial checked state', () => {
    const { getByTestId } = renderComponent(true)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('calls onChange when the checkbox is clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId } = renderComponent(false, handleChange)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalled()
  })

  it('applies the correct size based on the size prop', () => {
    const size = 60
    const { container } = renderComponent(false, () => {}, size)
    const labelElement = container.querySelector('.theme-switch') as HTMLElement

    expect(labelElement.style.getPropertyValue('--toggle-size')).toBe(`${size}px`)
  })

  it('applies the default size when size prop is not provided', () => {
    const { container } = renderComponent()
    const labelElement = container.querySelector('.theme-switch') as HTMLElement

    expect(labelElement.style.getPropertyValue('--toggle-size')).toBe('50px')
  })

  it('toggles the checked state correctly when clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId, rerender } = renderComponent(false, handleChange)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalled()

    rerender(<DarkModeSwitch checked={true} onChange={handleChange} />)

    expect(checkbox.checked).toBe(true)
  })

  it('renders the correct structure for child elements', () => {
    const { container } = renderComponent(true)

    expect(container.querySelector('.theme-switch__clouds')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__stars-container')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__sun-moon-container')).toBeInTheDocument()
    expect(container.querySelector('.theme-switch__moon')).toBeInTheDocument()
  })

  it('applies the correct styles based on the checked state', () => {
    const { getByTestId, rerender } = renderComponent(false)
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(false)

    rerender(<DarkModeSwitch checked={true} onChange={() => {}} />)

    expect(checkbox.checked).toBe(true)
  })
})
