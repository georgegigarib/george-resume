import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import Dashboard from '@/app/pages/Dashboard'

const isMobileMock = vi.fn()

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock(),
}))

describe('Dashboard component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <Dashboard />
      </AppTestProvider>
    )

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false)

    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
