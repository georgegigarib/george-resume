import React from 'react'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import { IconButton, Tooltip } from '@mui/material'

type ToggleViewButtonProps = {
  isDesktopMode: boolean
  onClick: () => void
}

const ToggleProjectsViewButton: React.FC<ToggleViewButtonProps> = ({ isDesktopMode, onClick }) => (
  <Tooltip title={isDesktopMode ? 'Cambiar a vista Mobile' : 'Cambiar a vista Desktop'}>
    <IconButton onClick={onClick}>
      {isDesktopMode ? (
        <MobileScreenShareIcon color="primary" fontSize="large" />
      ) : (
        <DesktopWindowsIcon color="primary" fontSize="large" />
      )}
    </IconButton>
  </Tooltip>
)

export default ToggleProjectsViewButton
