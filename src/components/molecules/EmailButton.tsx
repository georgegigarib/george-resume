import { ReactNode } from 'react'
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface EmailButtonProps {
  onClick: () => void
  icon: ReactNode
  provider: 'gmail' | 'outlook'
  className?: string
}

export default function EmailButton({ onClick, icon, provider, className = '' }: EmailButtonProps) {
  const { t } = useTranslation()

  const baseClasses = `
    text-white
    rounded-full
    font-bold
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300
    transform
    hover:scale-105
    border-2
    bg-gray-100
    dark:bg-gray-800
  `

  const providerClasses = {
    gmail: 'border-red-500 hover:bg-red-100',
    outlook: 'border-blue-500 hover:bg-blue-100',
  }

  return (
    <Tooltip title={t(`contact.buttons.${provider}Tooltip`)} arrow>
      <button type="button" onClick={onClick} className={`${baseClasses} ${providerClasses[provider]} ${className}`}>
        <div className="p-3 w-auto flex items-center justify-center rounded-full bg-opacity-80 ">{icon}</div>
      </button>
    </Tooltip>
  )
}
