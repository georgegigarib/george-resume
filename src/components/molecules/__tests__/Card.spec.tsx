import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from '@/components/molecules/Card'

describe('Card component', () => {
  it('renders the content passed as props', () => {
    const { getByText } = render(<Card content="Test Content" />)
    const contentElement = getByText('Test Content')

    expect(contentElement).toBeTruthy()
  })

  it('renders with the correct classes', () => {
    const { container } = render(<Card content="Test Content" />)

    expect(container.querySelector('.bg-gray-50')).toBeTruthy()
  })
})
