import clsx from 'clsx'
import React from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import '@/styles/slider-carousel.css'
import ImageWithLoader from '@/components/atoms/ImageLoader.tsx'

type ThreeDImageSliderProps = {
  projects: {
    src: string
    title: string
    onClick: () => void
  }[]
  isDesktopMode: boolean
}

const ThreeDImageSlider: React.FC<ThreeDImageSliderProps> = ({ projects, isDesktopMode }) => {
  const isMobile = useIsMobile()

  return (
    <div
      id="drag-container"
      className={clsx(isMobile ? '-top-[10%]' : ' top-[7vh]', isDesktopMode && isMobile ? 'top-[8%]' : '')}
    >
      <div id="spin-container">
        {projects.map((project, index) => (
          <ImageWithLoader
            key={index}
            imagePath={project.src}
            alt={project.title}
            onClick={project.onClick}
            imgClassName="carousel-image"
          />
        ))}
      </div>
      <div id="ground" />
    </div>
  )
}

export default ThreeDImageSlider
