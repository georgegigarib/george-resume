import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import LeftSection from '@/components/sections/LeftSection'

const isMobileMock = vi.fn()

vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    onSlideChange,
  }: {
    children: React.ReactNode
    onSlideChange?: (params: { realIndex: number }) => void
  }) => {
    onSlideChange?.({ realIndex: 0 })
    return <div data-testid="swiper">{children}</div>
  },
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide">{children}</div>,
}))

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock(),
}))

describe('LeftSection component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <LeftSection />
      </AppTestProvider>
    )

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false)

    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
