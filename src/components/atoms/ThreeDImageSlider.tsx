import clsx from 'clsx'
import React from 'react'
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
  return (
    <div id="drag-container" className={clsx(isDesktopMode ? 'top-[10vh] md:top-[8vh]' : 'lg:top-[5vh]')}>
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
