import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from '@/components/molecules/Card'

describe('Card component', () => {
  const renderComponent = () => render(<Card content="Test Content" />)

  it('matches snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the content passed as props', () => {
    const { getByText } = renderComponent()

    const contentElement = getByText('Test Content')

    expect(contentElement).toBeTruthy()
  })

  it('renders with the correct classes', () => {
    const { container } = renderComponent()

    expect(container.querySelector('.bg-gray-50')).toBeTruthy()
  })
})
