import clsx from 'clsx'
import ToolIcon from '@/components/atoms/ToolIcon'
import styles from '@/styles/TemplatesCarousel.module.css'
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { devTemplates } from '@/constants/templates'
import { motion } from 'framer-motion'

export default function TemplatesCarousels() {
  const { t } = useTranslation()
  const iconGroupsWithHints = devTemplates.slice(0, 3).map((project) => ({
    tools: project.tools.slice(0, 5),
    hint: project.hint,
    bgColor: project.bgColor,
    url: project.url,
  }))

  return (
    <div className="col-span-1 self-center w-full rounded-xl md:flex flex-col row-span-2 hidden md:h-[420px]">
      <div className="grid grid-cols-1 gap-y-10 mt-4 px-2">
        {iconGroupsWithHints.map((groupData, groupIndex) => (
          <div key={groupIndex}>
            <div className={styles.container}>
              <div
                className={clsx(
                  styles.base,
                  {
                    [styles.reverse]: groupIndex % 2 !== 0,
                  },
                  groupIndex % 2 !== 0 ? 'left-14' : 'right-14'
                )}
              >
                {groupData.tools.map((tool, index) => (
                  <Tooltip arrow title={tool} key={index}>
                    <div
                      key={index}
                      className={clsx(styles.icon, {
                        [styles.reverse]: groupIndex % 2 !== 0,
                      })}
                    >
                      <ToolIcon tool={tool} size="2x" />
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
            <motion.div
              className={clsx('relative -top-20 group', groupIndex % 2! === 0 ? 'left-32' : ' left-0')}
              whileHover={{ scale: 1.03 }}
            >
              <a href={groupData.url}>
                <div
                  className="absolute flex items-center text-center flex-wrap max-w-24 h-20 p-1 rounded-xl"
                  style={{ backgroundColor: groupData.bgColor }}
                >
                  <Tooltip arrow title={t('dev.templates.tooltip.seeTemplate')} placement="top">
                    <div className="absolute -top-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/25 bg-tra px-1 mt-1 rounded-full">
                      <ArrowOutwardIcon fontSize="inherit" className="-top-[2px] relative" />
                    </div>
                  </Tooltip>
                  <p className="font-bold capitalize text-sm text-black dark:text-white">{t(groupData.hint)}</p>
                </div>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
