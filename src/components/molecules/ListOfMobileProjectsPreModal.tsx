import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { mobileProjects } from '@/constants/projects'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/effect-cards'

const ListOfMobileProjectsPreModal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="text-center mb-4 ">
        <h3 className="text-md md:text-xl font-bold dark:text-white text-black ">
          {t(mobileProjects[activeIndex]?.title)}
        </h3>

        <div
          className="description-scrollbar overflow-auto rounded-lg 
          border-[2px] 
          transition-all 
          duration-300 
          bg-white 
          dark:border-app-lightModeBoxes-box2 
          border-app-darkModeBoxes-box2 
          hover:bg-opacity-40
          bg-opacity-25
          mx-3 mt-2 hidden md:flex relative inner-box-shadow  
                    "
        >
          <p className="mt-2 text-black dark:text-white mx-2 h-16 text-start px-4 relative z-20 ">
            {t(mobileProjects[activeIndex]?.description)}
          </p>
        </div>
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
