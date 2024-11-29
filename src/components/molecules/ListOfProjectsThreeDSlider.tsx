import React, { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import initCarousel from '../../utils/carouselScript'
import { motion } from 'framer-motion'
import ProjectInfo from '@/components/atoms/ProjectInfo'
import ToggleProjectsViewButton from '@/components/atoms/ToggleProjectsViewButton'
import ThreeDImageSlider from '@/components/atoms/ThreeDImageSlider'
import { desktopProjects, mobileProjects, ProjectInfoType } from '@/constants/projects'
import clsx from 'clsx'

const MOBILE_SIZE_ON_MOBILE = { width: 115, height: 230 }
const MOBILE_SIZE_ON_DESKTOP = { width: 150, height: 280 }

const DESKTOP_SIZE_ON_MOBILE = { width: 190, height: 120 }
const DESKTOP_SIZE_ON_DESKTOP = { width: 260, height: 140 }

const CarouselComponent: React.FC = () => {
  const isMobile = useIsMobile()
  const [isDesktopMode, setIsDesktopMode] = useState(false)
  const projects = isDesktopMode ? desktopProjects : mobileProjects
  const [selectedProject, setSelectedProject] = useState<ProjectInfoType | null>(projects[0])

  const handleImageClick = (project: ProjectInfoType) => setSelectedProject(project)
  const toggleViewMode = () => setIsDesktopMode((prev) => !prev)

  const carouselSize = isDesktopMode
    ? isMobile
      ? DESKTOP_SIZE_ON_MOBILE
      : DESKTOP_SIZE_ON_DESKTOP
    : isMobile
      ? MOBILE_SIZE_ON_MOBILE
      : MOBILE_SIZE_ON_DESKTOP

  const carouselRadious = isDesktopMode ? (isMobile ? 30 : 40) : isMobile ? 19 : 24

  useEffect(() => {
    initCarousel(
      -200,
      carouselSize.width,
      carouselSize.height,
      true,
      projects.length * carouselRadious
    )
  }, [carouselSize, projects.length])

  return (
    <div
      className={clsx('mt-2 grid touch-none w-full', isMobile ? 'grid-rows-2' : 'grid-cols-2 p-4')}
    >
      <div className={isMobile ? '' : ''}>
        {selectedProject && (
          <ProjectInfo
            title={selectedProject.title}
            description={selectedProject.description}
            url={selectedProject.url}
            tools={selectedProject.tools}
          />
        )}
      </div>

      <ThreeDImageSlider
        projects={projects.map((project) => ({
          src: project.src,
          title: project.title,
          onClick: () => handleImageClick(project)
        }))}
        isDesktopMode={isDesktopMode}
      />

      <div className="absolute right-5 bottom-5">
        <ToggleProjectsViewButton isDesktopMode={isDesktopMode} onClick={toggleViewMode} />
      </div>

      <motion.div
        className={clsx(
          'dark:text-white d text-black absolute left-8 bottom-7 bg-slate-700 rounded-lg px-2 text-center md:text-start'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0] }}
        transition={{
          times: [0, 0.5, 0.8, 1],
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <p>Don't be shy... spin it!</p>
      </motion.div>
    </div>
  )
}

export default CarouselComponent
