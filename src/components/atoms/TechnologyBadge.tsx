import React from 'react'
import { Chip } from '@mui/material'
import { ToolIconProps, toolsIconsList } from '@/constants/ToolsIconsList'
import ToolIcon from '@/components/atoms/ToolIcon'

export default function TechnologyBadge({ tool, size = 'lg' }: ToolIconProps): React.ReactElement {
  const toolData = toolsIconsList.find((t) => t.icon === tool)

  if (!toolData) return <></>

  return (
    <div>
      {/* icon library https://colored-icons.vercel.app */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.8/src/app/ci.min.css"
      />
      <Chip
        icon={<ToolIcon tool={tool} size={size} />}
        label={toolData.name}
        variant="outlined"
        sx={{
          margin: '3px',
          color: toolData.color,
          backgroundColor: toolData.bgColor,
          borderColor: toolData.borderColor,
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '15px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          padding: '2px 4px',
          '.MuiChip-label': {
            paddingLeft: '4px'
          }
        }}
      />
    </div>
  )
}
