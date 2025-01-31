import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ExampleComponent from '@/components/organisms/ExampleComponent'

describe('ExampleComponent', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<ExampleComponent />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the component with a random class', () => {
    render(<ExampleComponent />)

    const container = screen.getByTestId('example-container')
    const classRegex = /bg-app-lightModeBoxes-box\d+|dark:bg-app-darkModeBoxes-box\d+/
    expect(container.className).toMatch(classRegex)
  })

  it('renders the image correctly', () => {
    render(<ExampleComponent />)

    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveClass('rounded-lg min-h-full min-w-full flex-shrink object-cover')
  })

  it('generates a different random class on re-render', () => {
    const { unmount } = render(<ExampleComponent />)

    const firstContainer = screen.getByTestId('example-container')
    const firstClassName = firstContainer.className

    unmount()

    render(<ExampleComponent />)

    const secondContainer = screen.getByTestId('example-container')
    const secondClassName = secondContainer.className

    expect(firstClassName).not.toBe(secondClassName)
  })
})
