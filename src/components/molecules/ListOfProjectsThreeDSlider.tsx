import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import initCarousel from '@/utils/carouselScript'
import ProjectInfo from '@/components/atoms/ProjectInfo'
import ToggleProjectsViewButton from '@/components/atoms/ToggleProjectsViewButton'
import ThreeDImageSlider from '@/components/atoms/ThreeDImageSlider'
import { useIsMobile } from '@/hooks/useIsMobile'
import Sms from '@mui/icons-material/Sms'
import { useTranslation } from 'react-i18next'
import { desktopProjects, mobileProjects, ProjectInfoType } from '@/constants/projects'
import { motion } from 'framer-motion'
import { ClickableTooltip } from './ClickableTooltip'

const MOBILE_SIZE_ON_MOBILE = { width: 115, height: 230 }
const MOBILE_SIZE_ON_DESKTOP = { width: 150, height: 280 }

const DESKTOP_SIZE_ON_MOBILE = { width: 190, height: 120 }
const DESKTOP_SIZE_ON_DESKTOP = { width: 260, height: 140 }

interface CarouselComponentProps {
  platform?: 'desktop' | 'mobile'
}

export default function ThreeDSlider({ platform }: CarouselComponentProps): React.ReactElement {
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const [isDesktopMode, setIsDesktopMode] = useState(platform === 'desktop')
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
    initCarousel(-200, carouselSize.width, carouselSize.height, true, projects.length * carouselRadious)
  }, [carouselSize, projects.length])

  return (
    <div
      className="h-full w-full 
        bg-gray-300 
        dark:bg-black 
        border-gray-700 
        dark:border-gray-300 
        border-[2px] 
        p-4 rounded-xl overflow-hidden 
        touch-none"
    >
      <div className="flex items-center">
        <h2 className="font-semibold dark:text-white text-black ml-2">{t('dev.projects.title')}</h2>
        <ClickableTooltip
          text={t('dev.projects.modal.tooltip')}
          children={<Sms style={{ fill: 'white' }} />}
          bgColor="#5eacfa"
          textColor="black"
        />
      </div>
      <div className={clsx('mt-2 grid touch-none w-full', isMobile ? 'grid-rows-2' : 'grid-cols-2 p-4')}>
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
            onClick: () => handleImageClick(project),
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
            repeatDelay: 1,
          }}
        >
          <p>{t('dev.projects.sliderHint')}</p>
        </motion.div>
      </div>
    </div>
  )
}
