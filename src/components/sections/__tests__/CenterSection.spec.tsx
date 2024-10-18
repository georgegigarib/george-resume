import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CenterSection from '@/components/sections/CenterSection'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

const isMobileMock = vi.fn()

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock()
}))

describe('CenterSection component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <CenterSection />
      </AppTestProvider>
    )

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false)

    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
