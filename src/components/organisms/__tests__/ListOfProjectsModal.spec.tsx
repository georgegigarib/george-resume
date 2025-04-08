import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ListOfProjectsModal from '@/components/organisms/ListOfMobileProjectsModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider.tsx'

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

describe('ListOfProjectsModal component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <AppTestProvider>
        <ListOfProjectsModal />
      </AppTestProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
