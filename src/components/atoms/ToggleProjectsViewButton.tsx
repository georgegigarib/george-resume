import React from 'react'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import { IconButton, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

type ToggleViewButtonProps = {
  isDesktopMode: boolean
  onClick: () => void
}

export default function ToggleProjectsViewButton({ isDesktopMode, onClick }: ToggleViewButtonProps) {
  const { t } = useTranslation()

  return (
    <Tooltip
      title={isDesktopMode ? t('dev.projects.modalToggle.desktopView') : t('dev.projects.modalToggle.mobileView')}
    >
      <IconButton onClick={onClick}>
        {isDesktopMode ? (
          <MobileScreenShareIcon color="primary" fontSize="large" />
        ) : (
          <DesktopWindowsIcon color="primary" fontSize="large" />
        )}
      </IconButton>
    </Tooltip>
  )
}
