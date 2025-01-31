import CodeTemplate from '@/assets/icons/code-template.webp'
import ImageWithLoader from '@/components/atoms/ImageLoader.tsx'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { motion } from 'framer-motion'
import React from 'react'

export default function DevTemplatesPreModal(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="relative h-full w-full py-3 px-2 rounded-xl cursor-pointer font-semibold ">
      <Tooltip arrow title={t('dev.templates.tooltip.showAllTemplates')}>
        <motion.div
          className="absolute top-2 right-2 block hover:bg-white hover:bg-opacity-25 px-1 py-1 rounded-full text-black dark:text-white"
          whileHover={{ scale: 1.07 }}
        >
          <AppsIcon fontSize="medium" />
        </motion.div>
      </Tooltip>

      <h2 className="text-black dark:text-white">{t('dev.templates.title')}</h2>

      <motion.div
        initial={{ z: 180 }}
        animate={{ rotate: [0, 70, 0] }}
        whileHover={{ rotate: 720, scale: 1.2 }}
        className="absolute -bottom-[25.7rem] right-2 text-xs hidden md:block"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2,
        }}
      >
        <div className="w-10">
          <ImageWithLoader imagePath={CodeTemplate} />
        </div>
      </motion.div>
    </div>
  )
}
