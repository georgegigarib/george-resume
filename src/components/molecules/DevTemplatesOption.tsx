import React, { useState } from 'react'
import clsx from 'clsx'
import TechnologyBadge from '@/components/atoms/TechnologyBadge'
import Tooltip from '@mui/material/Tooltip'
import type { Template } from '@/constants/templates'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useTranslation } from 'react-i18next'
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

interface DevTemplatesOptionProps {
  option: Template
}

const DevTemplatesOption: React.FC<DevTemplatesOptionProps> = ({ option }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()
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
      className={clsx('flex w-full rounded-lg border border-gray-300 flex-nowrap mt-4 relative')}
      data-testid="template-option"
    >
      <div className="overflow-hidden max-w-[86%]">
        <div
          className={`whitespace-nowrap flex mt-1 ml-2 flex-col transition-all ease-in-out duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-[50px] opacity-90 scale-95'}`}
          onClick={handleContainerClick}
        >
          <div className="flex flex-wrap transition-all duration-500 ease-in-out transform-gpu">
            {option.tools.map((tool, index) => (
              <div
                className="my-1 mb-2 transition-all duration-500 ease-in-out transform-gpu"
                data-testid="tec-badge"
                key={index}
              >
                <TechnologyBadge tool={tool} size={isMobile ? 'sm' : 'lg'} />
              </div>
            ))}
          </div>

          <div className="overflow-auto text-wrap my-2 max-h-20 description-scrollbar transition-all duration-500 ease-in-out transform-gpu">
            {t(option.description)}
          </div>
        </div>

        <div
          className={clsx('absolute top-3 right-2 cursor-pointer transition-transform hover:scale-105')}
          onClick={() => window.open(option.url, '_blank')}
        >
          <Tooltip title={t('dev.templates.tooltip.seeTemplate')} arrow placement="top-end">
            <div className="hover:bg-gray-700 rounded-full p-1 relative right-[2px] flex items-center justify-center">
              <RemoveRedEyeOutlined fontSize="small" />
            </div>
          </Tooltip>
        </div>
      </div>

      {remainingTools > 0 && !isExpanded && (
        <div
          className="absolute -bottom-3 right-3 cursor-pointer bg-app-grey rounded-full transition-transform hover:scale-105"
          onClick={handleExpand}
        >
          <Tooltip title={t('dev.templates.modal.showAllTools')} arrow>
            <span className="ml-auto cursor-pointer hover:opacity-70 flex items-center">
              <div className="flex items-center justify-center rounded-full text-sm ">
                <span className="text-white rounded-full flex flex-nowrap">
                  <ExpandMore fontSize="medium" />
                </span>
              </div>
            </span>
          </Tooltip>
        </div>
      )}

      {isExpanded && (
        <>
          <div
            className="absolute -bottom-3 right-3 cursor-pointer bg-app-grey rounded-full transition-transform hover:scale-105"
            onClick={handleCollapse}
          >
            <Tooltip title="See less" arrow>
              <div className="flex items-center justify-center rounded-full text-white  hover:bg-gray-700 -bottom-4">
                <ExpandLess fontSize="medium" />
              </div>
            </Tooltip>
          </div>
        </>
      )}
    </div>
  )
}

export default DevTemplatesOption
