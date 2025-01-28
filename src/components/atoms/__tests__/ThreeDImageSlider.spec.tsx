import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import ThreeDImageSlider from '@/components/atoms/ThreeDImageSlider'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

describe('ThreeDImageSlider component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderComponent = (isMobile: boolean, isDesktopMode: boolean, projects: any[]) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <ThreeDImageSlider projects={projects} isDesktopMode={isDesktopMode} />
      </AppTestProvider>
    )
  }

  const projects = [
    { src: 'image1.jpg', title: 'Project 1', onClick: vi.fn() },
    { src: 'image2.jpg', title: 'Project 2', onClick: vi.fn() },
  ]

  it('matches the snapshot for desktop mode', () => {
    const { asFragment } = renderComponent(false, true, projects)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile mode', () => {
    const { asFragment } = renderComponent(true, false, projects)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct number of images', () => {
    const { getAllByRole } = renderComponent(false, true, projects)
    const images = getAllByRole('img')
    expect(images.length).toBe(projects.length)
  })

  it('calls onClick when an image is clicked', () => {
    const { getAllByRole } = renderComponent(false, true, projects)
    const images = getAllByRole('img')
    fireEvent.click(images[0])
    expect(projects[0].onClick).toHaveBeenCalled()
  })
})
