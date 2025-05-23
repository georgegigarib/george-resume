import React from 'react'
import { useTranslation } from 'react-i18next'
import { Sections } from '@/app/layout/types/NavBarTypes'

const MusicLink = ({
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
        scrollToSection(Sections.Music, true)
        setAutomaticScroll(false)
      }}
      className={`block rounded md:p-0 ${
        activeHash === Sections.Music
          ? 'text-white font-bold animated-transform translate-y-[15%] md:translate-y-[45%] scale-130 -rotate-5'
          : activeHash === Sections.Dev
            ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%] animated-transform'
            : 'text-gray-900 -rotate-[17deg] -translate-y-[20%] sm:-rotate-12 md:translate-y-[0%] xl:-rotate-3 animated-transform opacity-40 font-bold 2xl:translate-y-[20%]'
      }`}
    >
      {t('navbar.music')}
    </a>
  )
}

export default MusicLink
