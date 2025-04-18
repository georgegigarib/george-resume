import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'

interface CopyButtonProps {
  content: string
  tooltipMessage: string
}

export default function CopyButton({ content = '', tooltipMessage = '' }: CopyButtonProps) {
  const [contentCopied, setContentCopied] = useState(false)

  const { t } = useTranslation()

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setContentCopied(true)
    setTimeout(() => setContentCopied(false), 1200)
  }

  return (
    <Tooltip title={contentCopied ? t('contact.buttons.copied') : tooltipMessage} arrow>
      <button
        onClick={handleCopy}
        className={`rounded-full p-2 text-sm transition-all duration-300 flex justify-center ${contentCopied ? 'bg-blue-500' : ' hover:bg-gray-300 dark:hover:bg-gray-600'}`}
      >
        <ContentCopyIcon
          fontSize="inherit"
          className={contentCopied ? 'text-white' : 'text-gray-700 dark:text-gray-300'}
        />
      </button>
    </Tooltip>
  )
}
