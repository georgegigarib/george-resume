import React, { useState } from 'react'
import clsx from 'clsx'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ClickAwayListener, IconButton, Tooltip } from '@mui/material'

interface ClickableTooltipProps {
  text: React.ReactNode
  children: React.ReactNode
  bgColor?: string
  textColor?: string
}

export const ClickableTooltip: React.FC<ClickableTooltipProps> = ({
  text = '',
  children,
  bgColor = '',
  textColor = '',
}) => {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)
  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div className="ml-1">
        <Tooltip
          data-testid="tooltip"
          PopperProps={{
            disablePortal: true,
          }}
          placement={isMobile ? 'bottom' : 'top'}
          onClose={handleTooltipClose}
          open={open}
          disableHoverListener
          disableTouchListener
          enterTouchDelay={800}
          slotProps={{
            tooltip: {
              sx: {
                color: textColor,
                backgroundColor: bgColor,
              },
            },
          }}
          title={
            <div className={clsx('overflow-auto max-h-[140px] rounded-lg p-2 w-full description-scrollbar')}>
              <h2>{text}</h2>
            </div>
          }
        >
          <IconButton onClick={handleTooltipOpen} size="small">
            {children}
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  )
}
