import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TechnologyBadge from '../atoms/TechnologyBadge'
import Tooltip from '@mui/material/Tooltip'
import LinkIcon from '@mui/icons-material/Link'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import type { Template } from '@/constants/templates'
import { useIsMobile } from '@/hooks/useIsMobile'

interface DevTemplatesOptionProps {
  option: Template
}

const DevTemplatesOption: React.FC<DevTemplatesOptionProps> = ({ option }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isMobile = useIsMobile()

  const MAX_VISIBLE_BADGES = isMobile ? 1 : 3
  const remainingTools = option.tools.length - MAX_VISIBLE_BADGES

  const handleContainerClick = () => {
    if (!isExpanded && remainingTools > 0) {
      setIsExpanded(true)
    }
  }

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleCollapse = () => {
    setIsExpanded(false)
  }

  return (
    <div
      className={clsx('flex w-full rounded-lg border border-gray-400 flex-nowrap mt-4 relative')}
    >
      <div className="overflow-hidden max-w-[86%]">
        <motion.div
          initial={{ height: 'auto' }}
          animate={{ height: isExpanded ? 'auto' : '50px' }}
          transition={{ duration: 0.3 }}
          className="whitespace-nowrap shadow-inner flex mt-1 ml-2 flex-wrap"
          onClick={handleContainerClick}
        >
          {option.tools.map((tool, index) => (
            <div className="my-1 mb-2" key={index}>
              <TechnologyBadge tool={tool} size={isMobile ? 'sm' : 'lg'} />
            </div>
          ))}
        </motion.div>

        <motion.div
          className={clsx('absolute top-3 right-2 cursor-pointer')}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open(option.url, '_blank')}
        >
          <div className="hover:bg-gray-700 rounded-full p-1  flex items-center justify-center">
            <LinkIcon fontSize="medium" />
          </div>
        </motion.div>
      </div>

      {remainingTools > 0 && !isExpanded && (
        <motion.div
          className="absolute -bottom-3 right-3 cursor-pointer bg-blue-950 rounded-full"
          whileHover={{ scale: 1.05 }}
          onClick={handleExpand}
        >
          <Tooltip title={`See more tools`} arrow>
            <span className="ml-auto cursor-pointer text-gray-500 hover:text-gray-700 flex items-center">
              <div className="flex items-center justify-center rounded-full text-sm hover:bg-gray-700">
                <span className="text-white rounded-full  flex flex-nowrap">
                  <ExpandMore fontSize="medium" />
                </span>
              </div>
            </span>
          </Tooltip>
        </motion.div>
      )}

      {isExpanded && (
        <>
          <motion.div
            className="absolute -bottom-3 right-3 cursor-pointer bg-blue-950 rounded-full"
            whileHover={{ scale: 1.05 }}
            onClick={handleCollapse}
          >
            <Tooltip title={`See less`} arrow>
              <div className="flex items-center justify-center rounded-full text-white  hover:bg-gray-700 -bottom-4">
                <ExpandLess fontSize="medium" />
              </div>
            </Tooltip>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default DevTemplatesOption
