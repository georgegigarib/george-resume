import CenterSection from '@/components/sections/CenterSection'
import ImageContainer from '@/components/organisms/DashboardImageContainer'
import LeftSection from '@/components/sections/LeftSection'
import RightSection from '@/components/sections/RightSection'
import dashboardImage from '@/assets/images/Background1.png'
import { useLanguage } from '@/hooks/useLanguage'
import { useEffect } from 'react'
import { setTheme } from '@/utils/setTheme'
import ProjectsModal from '@/components/molecules/ProjectsModal'
import TemplatesModal from '@/components/molecules/TemplateModal'

export default function Dashboard(): React.ReactElement {
  const { loadLanguageFromStorage } = useLanguage()

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setTheme(isDark)
    loadLanguageFromStorage()
  }, [])

  return (
    <div className="w-[1300px] md:w-[3200px] bg-app-light dark:bg-black">
      <div className="flex justify-between w-full mt-0">
        <ImageContainer imagePath={dashboardImage} />
      </div>

      <div className="w-full -top-32 md:-top-96 px-4 relative z-[5]">
        {/* modals */}
        <ProjectsModal />
        <TemplatesModal />

        <div className="flex">
          <div className="w-[33.33%]" id="dev">
            <LeftSection />
          </div>
          <div className="w-[33.33%]" id="me">
            <CenterSection />
          </div>
          <div className="w-[33.33%]" id="music">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  )
}
