import { Sections } from '@/app/layout/navbarTypes'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MeLink = ({
  scrollToSection,
  setAutomaticScroll,
  activeHash
}: {
  scrollToSection: (id: string, called?: boolean) => void
  setAutomaticScroll: React.Dispatch<React.SetStateAction<boolean>>
  activeHash: string
}) => {
  const { t } = useTranslation()

  return (
    <a
      onClick={() => {
        scrollToSection(Sections.Me, true)
        setAutomaticScroll(false)
      }}
      className={`block pt-8 rounded md:p-0 ${
        activeHash === Sections.Me
          ? 'text-white font-bold animated-transform -translate-y-[50%] md:translate-y-[50%] scale-130'
          : 'text-gray-900 -translate-y-[75%] sm:-translate-y-[70%] animated-transform md:dark:hover:bg-transparent opacity-40 font-bold'
      } ${
        activeHash === Sections.Music
          ? 'rotate-[18deg] sm:rotate-6 md:-translate-y-[10%] 2xl:translate-y-[15%] lg:rotate-3'
          : activeHash === Sections.Dev
            ? '-rotate-[18deg] sm:-rotate-6  md:translate-y-[0%]  2xl:translate-y-[15%] lg:-rotate-3'
            : ''
      }`}
    >
      {t('navbar.me')}
    </a>
  )
}

export default MeLink
