import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import Marquee from 'react-fast-marquee'
import clsx from 'clsx'
import TechnologyBadge from '@/components/atoms/TechnologyBadge'
import { useIsMobile } from '@/hooks/useIsMobile'
import { IconName } from '@/constants/ToolsIconsList'
import { useTranslation } from 'react-i18next'

type ProjectInfoProps = {
  title: string
  description: string
  url: string
  tools: IconName[]
  isDesktopMode: boolean
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ title, description, url, tools, isDesktopMode }) => {
  const isMobile = useIsMobile()
  const { t } = useTranslation()

  return (
    <div className={clsx(isMobile ? 'flex flex-col w-full' : '')}>
      {/* <span className="flex items-center">
        <h2 className="font-bold dark:text-white text-black">{t(title)}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="ml-1">
          <LaunchIcon color="primary" fontSize="small" />
        </a>
      </span> */}

      <div className={clsx('grid', isDesktopMode ? 'sm:grid-cols-1 md:grid-cols-2' : 'grid-cols-1')}>
        <div>
          <span className="flex items-center">
            <h2 className="font-bold dark:text-white text-black">{t(title)}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer" className="ml-1">
              <LaunchIcon color="primary" fontSize="small" />
            </a>
          </span>

          <div className="overflow-auto mt-2 max-h-20 md:max-h-28 description-scrollbar">
            <p className="dark:text-white text-black pr-8">{t(description)}</p>
          </div>
        </div>

        <div className={clsx(!isDesktopMode ? 'mt-4 xl:mt-10' : '')}>
          {!isMobile && <p className="dark:text-white font-bold text-black">{t('dev.projects.usedTechnologies')}</p>}

          <div className="overflow-auto  md:hidden mt-4 md:mt-0 max-h-10 h-14 flex flex-nowrap max-w-[75vw]">
            <Marquee
              gradient={false}
              speed={30}
              direction="left"
              loop={0}
              className={clsx(isMobile ? 'overflow-hidden' : 'flex-wrap flex gap-2')}
            >
              {tools.map((tool, idx) => (
                <TechnologyBadge key={idx} tool={tool} size="md" />
              ))}
            </Marquee>
          </div>

          <div className="overflow-auto md:flex mt-2 md:mt-2 max-h-20 md:max-h-28 gap-1 description-scrollbar hidden flex-wrap">
            {tools.map((tool, idx) => (
              <TechnologyBadge key={idx} tool={tool} size="md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
