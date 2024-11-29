import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'

type ToggleViewButtonProps = {
  isDesktopMode: boolean
  onClick: () => void
}

const ToggleProjectsViewButton: React.FC<ToggleViewButtonProps> = ({ isDesktopMode, onClick }) => (
  <Tooltip title={isDesktopMode ? 'Cambiar a vista Mobile' : 'Cambiar a vista Desktop'}>
    <IconButton onClick={onClick}>
      {isDesktopMode ? (
        <MobileScreenShareIcon color="primary" />
      ) : (
        <DesktopWindowsIcon color="primary" />
      )}
    </IconButton>
  </Tooltip>
)

export default ToggleProjectsViewButton
