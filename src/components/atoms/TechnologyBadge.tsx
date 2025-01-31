import React, { useEffect } from 'react'
import ToolIcon from '@/components/atoms/ToolIcon'
import { ToolIconProps, toolsIconsList } from '@/constants/ToolsIconsList'
import { useSelector } from 'react-redux'
import { StoreState } from '@/store'
import { Chip } from '@mui/material'

export default function TechnologyBadge({ tool, size = 'lg' }: ToolIconProps): React.ReactElement {
  const isDakTHemeEnabled = useSelector((state: StoreState) => state.darkTheme.isDarkThemeEnabled)
  const toolData = toolsIconsList.find((t) => t.icon === tool)

  useEffect((): void => {}, [toolData, isDakTHemeEnabled])

  if (!toolData) return <></>

  return (
    <div>
      {/* icon library https://colored-icons.vercel.app */}
      <Chip
        icon={<ToolIcon tool={tool} size={size} />}
        label={toolData.name}
        variant="outlined"
        sx={{
          margin: '3px',
          color: isDakTHemeEnabled ? (toolData.darkColor ?? toolData.color) : toolData.color,
          backgroundColor: isDakTHemeEnabled ? (toolData.darkBgColor ?? toolData.bgColor) : toolData.bgColor,
          borderColor: isDakTHemeEnabled ? (toolData.darkBorderColor ?? toolData.borderColor) : toolData.borderColor,
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '15px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          padding: '2px 4px',
          '.MuiChip-label': {
            paddingLeft: '4px',
          },
        }}
      />
    </div>
  )
}
