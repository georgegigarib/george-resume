import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { desktopProjects } from '@/constants/projects'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const ListOfDesktopProjectsPreModal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const toolsLimit = 10

  return (
    <div className="grid ml-3 grid-rows-1 grid-cols-4">
      <div className="text-center mb-4 col-span-1 self-center p-4 md:bg-green-900 opacity-90 rounded-xl flex flex-col gap-4 mt-16">
        <h3 className="hidden md:flex text-lg font-bold dark:text-white text-black">
          {desktopProjects[activeIndex]?.title}
        </h3>

        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {desktopProjects[activeIndex].tools.map((tool, index) => {
            return index < toolsLimit ? (
              <i className={`ci ci-${tool} ci-lg`} key={index}></i>
            ) : index === toolsLimit ? (
              <p className="-mt-1">+{desktopProjects[activeIndex].tools.length - toolsLimit}</p>
            ) : (
              <></>
            )
          })}
        </div>
      </div>

      <div className="col-span-3 self-center py-3 pr-3 ml-3">
        <Swiper
          initialSlide={2}
          grabCursor={true}
          spaceBetween={3}
          loop={true}
          modules={[Pagination]}
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
        </Swiper>
      </div>
    </div>
  )
}

export default ListOfDesktopProjectsPreModal
