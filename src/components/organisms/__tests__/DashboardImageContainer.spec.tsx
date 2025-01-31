import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import DashboardImageContainer from '@/components/organisms/DashboardImageContainer'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useDispatch, useSelector } from 'react-redux'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux')
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }
})

describe('DashboardImageContainer component', () => {
  const mockDispatch = vi.fn()
  beforeEach(() => {
    vi.clearAllMocks()

    vi.clearAllMocks()
    ;(useDispatch as unknown as Mock).mockReturnValue(mockDispatch)
  })

  const renderComponent = (isMobile: boolean, isDarkMode: boolean, imagePath: string) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    ;(useSelector as unknown as Mock).mockReturnValue(isDarkMode)
    return render(
      <AppTestProvider>
        <DashboardImageContainer imagePath={imagePath} />
      </AppTestProvider>
    )
  }

  it('matches the snapshot for desktop view in light mode', () => {
    const { asFragment } = renderComponent(false, false, 'path/to/image.jpg')
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view in light mode', () => {
    const { asFragment } = renderComponent(true, false, 'path/to/image.jpg')
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for desktop view in dark mode', () => {
    const { asFragment } = renderComponent(false, true, 'path/to/image.jpg')
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view in dark mode', () => {
    const { asFragment } = renderComponent(true, true, 'path/to/image.jpg')
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the image with correct src', async () => {
    renderComponent(false, false, 'path/to/image.jpg')
    const imgElement = screen.getByTestId('image-test-id')
    expect(imgElement).toHaveAttribute('src', 'path/to/image.jpg')
  })

  it.skip('applies the correct styles based on mobile and dark mode', async () => {
    renderComponent(true, true, 'path/to/image.jpg')

    expect(await screen.getByTestId('image-test-id')).toHaveStyle({
      height: '260px',
      boxShadow: 'inset 0px 0px 18px 20px #000',
    })
  })

  it.skip('applies the correct styles based on desktop and light mode', async () => {
    renderComponent(false, false, 'path/to/image.jpg')
    const imgElement = await screen.getByTestId('image-test-id')

    expect(imgElement).toHaveStyle({
      height: '600px',
      boxShadow: 'inset 0px 0px 40px 40px white',
    })
  })
})
