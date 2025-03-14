import CodeTemplate from '@/assets/icons/code-template.webp'
import ImageWithLoader from '@/components/atoms/ImageLoader.tsx'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import React from 'react'

export default function DevTemplatesPreModal(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="relative h-full w-full py-3 px-2 rounded-xl cursor-pointer font-semibold">
      <Tooltip arrow title={t('dev.templates.tooltip.showAllTemplates')}>
        <div className="absolute top-2 right-2 block hover:bg-white hover:scale[1.07] hover:bg-opacity-25 px-1 py-1 rounded-full text-black dark:text-white">
          <AppsIcon fontSize="medium" />
        </div>
      </Tooltip>

      <h2 className="text-black dark:text-white">{t('dev.templates.title')}</h2>

      <div className="absolute -bottom-[25.7rem] right-2 text-xs hidden md:block">
        <div className="w-10 swing-container">
          <ImageWithLoader imagePath={CodeTemplate} />
        </div>
      </div>
    </div>
  )
}
