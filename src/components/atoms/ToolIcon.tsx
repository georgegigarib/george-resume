import React from 'react'
import { ToolIconProps, toolsIconsList } from '../../constants/ToolsIconsList'

export default function ToolIcon({ tool, size = 'lg' }: ToolIconProps): React.ReactElement {
  const toolData = toolsIconsList.find((t) => t.icon === tool)

  if (!toolData) return <></>

  const sizeMap: Record<string, string> = {
    xs: 'h-3',
    sm: 'h-4',
    md: 'h-5',
    lg: 'h-6',
    xl: 'h-6',
    '2x': 'h-8',
    '3x': 'h-14',
    '4x': 'h-16',
    '5x': 'h-20'
  }

  return toolData.custom ? (
    <img src={toolData.svg} alt={toolData.name} className={`custom-icon ${sizeMap[size]} pr-0`} />
  ) : (
    <i className={`ci ci-${toolData.icon} ci-${size}`}></i>
  )
}
