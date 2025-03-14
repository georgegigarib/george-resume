import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { desktopProjects } from '@/constants/projects'
import '@/styles/projects-modal.css'

import 'swiper/css'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper/types'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'

const ListOfDesktopProjectsPreModal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()
  const toolsLimit = 7
  const progressCircle = useRef<SVGSVGElement>(null)
  const progressContent = useRef<HTMLSpanElement>({} as HTMLSpanElement)
  const onAutoplayTimeLeft = (_: SwiperType, time: number, progress: number) => {
    progressCircle.current!.style.setProperty('--progress', (1 - progress).toString())
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  return (
    <div
      className="grid ml-8 grid-rows-1 grid-cols-4 
    bg-app-lightModeBoxes-box1 
    dark:bg-app-darkModeBoxes-box1 
     border-l-0 rounded-l-none
    rounded-xl"
    >
      <div
        className="text-center mb-4 col-span-1 self-center p-2 mr-4 
        md:dark:bg-app-lightModeBoxes-box1 
    md:bg-white
    md:bg-opacity-20
    md:border-[2px]
    border-app-darkModeBoxes-box1
    dark:border-white
    dark:border-opacity-60
    md:shadow-md
    opacity-90 rounded-xl flex flex-col gap-4 mt-16"
      >
        <h3 className="hidden md:flex text-lg font-bold dark:text-white text-black">
          {t(desktopProjects[activeIndex]?.title)}
        </h3>

        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {desktopProjects[activeIndex].tools.map((tool, index) =>
            index < toolsLimit ? (
              <Tooltip title={tool} arrow key={index}>
                <i className={`ci ci-${tool} ci-lg`}></i>
              </Tooltip>
            ) : index === toolsLimit ? (
              <Tooltip
                key={index}
                title={t('dev.projects.toolsRemaining', {
                  count: desktopProjects[activeIndex].tools.length - toolsLimit,
                })}
                arrow
              >
                <p className="-mt-1 dark:text-white text-black">
                  +{desktopProjects[activeIndex].tools.length - toolsLimit}
                </p>
              </Tooltip>
            ) : (
              <span key={index} />
            )
          )}
        </div>
      </div>

      <div className="col-span-3 self-center py-3 pr-3 ml-3 group">
        <Swiper
          initialSlide={2}
          grabCursor={true}
          spaceBetween={8}
          slidesPerView={1}
          slidesPerGroup={1}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          loop={true}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          modules={[Autoplay, Pagination]}
          pagination={true}
          direction="vertical"
          className="h-[120px] md:h-[250px] w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {desktopProjects.map((project, index) => (
            <SwiperSlide key={index} className="bg-transparent">
              <img src={project.src} alt={project.title} className="rounded-2xl" />
            </SwiperSlide>
          ))}
          <div className="hidden md:block">
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default ListOfDesktopProjectsPreModal
