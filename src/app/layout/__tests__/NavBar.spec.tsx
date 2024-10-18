import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import Navbar from '@/app/layout/NavBar'

const isMobileMock = vi.fn()

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock()
}))

describe('NavBar component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <Navbar />
      </AppTestProvider>
    )

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false)

    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
