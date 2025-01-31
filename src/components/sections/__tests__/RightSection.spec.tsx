import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import RightSection from '@/components/sections/RightSection'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

const isMobileMock = vi.fn()

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock(),
}))

describe('RightSection component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <RightSection />
      </AppTestProvider>
    )

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false)

    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
