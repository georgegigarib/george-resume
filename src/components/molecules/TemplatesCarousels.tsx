import clsx from 'clsx'
import { motion } from 'framer-motion'
import styles from '@/styles/TemplatesCarousels.module.css'
import ToolIcon from '../atoms/ToolIcon'
import { devTemplates } from '@/constants/templates'

export default function TemplatesCarousels() {
  const iconGroupsWithHints = devTemplates.slice(0, 3).map((project) => ({
    tools: project.tools.slice(0, 5),
    hint: project.hint,
    bgColor: project.bgColor
  }))

  return (
    <div className="col-span-1 self-center w-full rounded-xl md:flex flex-col row-span-2 hidden md:h-[400px]">
      <div className="grid grid-cols-1 gap-y-10 mt-4 px-2">
        {iconGroupsWithHints.map((groupData, groupIndex) => (
          <div key={groupIndex}>
            <div className={styles.container}>
              <div
                className={clsx(
                  styles.base,
                  {
                    [styles.reverse]: groupIndex % 2 !== 0
                  },
                  groupIndex % 2 !== 0 ? 'left-14' : 'right-14'
                )}
              >
                {groupData.tools.map((tool, index) => (
                  <div
                    key={index}
                    className={clsx(styles.icon, {
                      [styles.reverse]: groupIndex % 2 !== 0
                    })}
                  >
                    <ToolIcon tool={tool} size="2x" />
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className={clsx('relative -top-20', groupIndex % 2! === 0 ? 'left-32' : ' left-0')}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="absolute flex items-center text-center flex-wrap max-w-24 h-20 p-1 rounded-xl"
                style={{ backgroundColor: groupData.bgColor }}
              >
                <p className="font-bold capitalize text-sm">{groupData.hint}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
