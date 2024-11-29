import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import { mobileProjects } from '@/constants/projects'

const ListOfMobileProjectsPreModal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <h3 className="text-md md:text-xl font-bold dark:text-white text-black">
          {mobileProjects[activeIndex]?.title}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto hidden md:flex h-16 overflow-auto description-scrollbar text-start px-4 mr-2">
          {mobileProjects[activeIndex]?.description}
        </p>
      </div>

      <Swiper
        initialSlide={2}
        effect={'cards'}
        grabCursor={true}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        direction="horizontal"
        modules={[EffectCards]}
        className="w-[70%] absolute bottom-0"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {mobileProjects.map((project, index) => (
          <SwiperSlide key={index} className="bg-transparent">
            <img src={project.src} alt={project.title} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ListOfMobileProjectsPreModal
