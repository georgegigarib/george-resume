import React from 'react'
import { Tooltip, TooltipProps } from '@mui/material'
import clsx from 'clsx'

const CustomTooltip = ({
  title,
  bgColor = 'bg-gray-700',
  textSize = 'text-md',
  className = '',
  children,
  ...props
}: TooltipProps & { bgColor?: string; textSize?: string; className?: string }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Tooltip
      title={
        <div onClick={stopPropagation} className={clsx('overflow-auto max-h-[100px] rounded-md', bgColor, textSize)}>
          {title}
        </div>
      }
      {...props}
    >
      <div className={className}>{children}</div>
    </Tooltip>
  )
}

export default CustomTooltip
