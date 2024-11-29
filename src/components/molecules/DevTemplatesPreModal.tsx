import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CodeTemplate from '@/assets/icons/code-template.webp'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

export const DevTemplatesPreModal = () => {
  const { t } = useTranslation()

  return (
    <div className="relative h-full w-full py-3 px-2 rounded-xl cursor-pointer font-semibold hover:bg-gray-600">
      <motion.div
        initial={{ z: 180 }}
        animate={{ rotate: [0, 70, 0] }}
        className="absolute top-3 right-2 text-xs "
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2
        }}
      >
        <div className="w-10">
          <img src={CodeTemplate} />
        </div>
      </motion.div>
      <h2>{t('dev.templates.title')}</h2>

      <motion.div
        className="absolute -bottom-[24.5rem] right-3 hidden md:block"
        whileHover={{ scale: 1.2 }}
      >
        <OpenInFullIcon fontSize="small" />
      </motion.div>
    </div>
  )
}
