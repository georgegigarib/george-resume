import React from 'react'
import { Sections } from '@/app/layout/navbarTypes'
import { useTranslation } from 'react-i18next'

const DevLink = ({
  scrollToSection,
  setAutomaticScroll,
  activeHash,
}: {
  scrollToSection: (id: string, called?: boolean) => void
  setAutomaticScroll: React.Dispatch<React.SetStateAction<boolean>>
  activeHash: string
}) => {
  const { t } = useTranslation()

  return (
    <a
      onClick={() => {
        scrollToSection(Sections.Dev, true)
        setAutomaticScroll(false)
      }}
      className={`block rounded md:p-0 ${
        activeHash === Sections.Dev
          ? 'text-white font-bold animated-transform translate-y-[15%] md:translate-y-[45%] scale-130'
          : activeHash === Sections.Music
            ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%] animated-transform'
            : 'text-gray-900 animated-transform rotate-[18deg] -translate-y-[20%] sm:rotate-12 md:translate-y-[0%] xl:rotate-3 opacity-40 font-bold 2xl:translate-y-[20%]'
      }`}
      aria-current={activeHash === Sections.Dev ? 'page' : undefined}
    >
      {t('navbar.dev')}
    </a>
  )
}

export default DevLink
