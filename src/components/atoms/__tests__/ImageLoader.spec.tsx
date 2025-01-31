import { render, screen, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ImageWithLoader from '@/components/atoms/ImageLoader'

describe('ImageWithLoader component', () => {
  const imagePath = './src/assets/images/Background1.png'
  const imgClassName = 'custom-class'
  const style = { width: '100px' }
  const dataTestId = 'image-test-id'
  const altText = 'Test Image'

  it('renders the loader initially', () => {
    render(<ImageWithLoader imagePath={imagePath} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders the image after it has loaded', async () => {
    render(<ImageWithLoader imagePath={imagePath} />)
    const img = screen.getByRole('img')
    expect(img).toHaveClass('opacity-0')

    await act(async () => {
      img.onload = () => {}
      img.dispatchEvent(new Event('load'))
    })

    expect(img).toHaveClass('opacity-100')
  })

  it('applies the provided class name and style', () => {
    render(<ImageWithLoader imagePath={imagePath} imgClassName={imgClassName} style={style} />)
    const img = screen.getByRole('img')
    expect(img).toHaveClass(imgClassName)
    expect(img).toHaveStyle(style)
  })

  it('sets the data-testid attribute correctly', () => {
    render(<ImageWithLoader imagePath={imagePath} dataTestId={dataTestId} />)
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
  })

  it('sets the alt attribute correctly', () => {
    render(<ImageWithLoader imagePath={imagePath} alt={altText} />)
    expect(screen.getByAltText(altText)).toBeInTheDocument()
  })
})
