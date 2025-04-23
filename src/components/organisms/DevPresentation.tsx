import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'
import TechnologyBadge from '@/components/atoms/TechnologyBadge'
import { IconName } from '@/constants/ToolsIconsList'
import { useIsMobile } from '@/hooks/useIsMobile'
import GitHubButton from '../atoms/GithubButton'
import LinkedInButton from '../atoms/LinkedInButton'

export default function DevPresentation() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  const featuredSkills = [IconName.TypeScript, IconName.React, IconName.VueJs, IconName.TailwindCSS, IconName.Vitest]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 md:py-7  w-full transition-all duration-300">
      {/* Encabezado con nombre y botones de contacto */}

      <div className="flex justify-between items-center mb-4">
        {/* Usaremos una clave de traducción diferente para el título amigable */}
        <h2 className="text-lg md:text-2xl text-center md:text-start font-bold text-gray-800 dark:text-white">
          {t('dev.profile.title')}
        </h2>

        <div className="hidden md:flex space-x-2">
          <LinkedInButton />
          <GitHubButton />
        </div>
      </div>

      {/* Resumen profesional amigable */}
      <div className="mb-6 space-y-2 ">
        <p
          className="text-sm md:text-base text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: isMobile ? t('dev.profile.summaryMobile') : t('dev.profile.summary') }}
        />
      </div>

      {/* Habilidades destacadas */}
      <div className="hidden md:block">
        <div className="flex items-center mb-2">
          <CodeIcon className="mr-2 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('dev.profile.skills')}</h3>
        </div>

        <div className="flex flex-wrap gap-2 ml-2">
          {/* Mostramos solo las habilidades destacadas */}
          {featuredSkills.map((skill) => (
            <TechnologyBadge key={skill} tool={skill} size="md" />
          ))}
          {/* Eliminamos el botón "Ver más" y la lógica asociada */}
        </div>
      </div>

      <div className="flex items-center flex-row-reverse md:hidden gap-2 -mt-9">
        <GitHubButton />
        <LinkedInButton />
      </div>
    </div>
  )
}
