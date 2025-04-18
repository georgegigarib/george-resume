import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import GoogleIcon from '@mui/icons-material/Google'
import MicrosoftIcon from '@mui/icons-material/Microsoft'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Tooltip } from '@mui/material'

interface ContactModalContentProps {
  message: string
  setMessage: (message: string) => void
  handleGmail: () => void
  handleOutlook: () => void
  handleCopyEmail: () => void
}

export default function ContactModalContent({
  message,
  setMessage,
  handleGmail,
  handleOutlook,
  handleCopyEmail,
}: ContactModalContentProps) {
  const { t } = useTranslation()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="z-40 h-full w-full bg-white dark:bg-black p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('contact.title')}</h2>
      <div className="flex flex-col h-[calc(100%-80px)]">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('contact.messagePlaceholder')}
          className="
          flex-grow
          p-4
          rounded-xl
          bg-gray-100 dark:bg-gray-800
          text-black dark:text-white
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          mb-4
        "
          required
        />
        <div className="flex gap-3">
          <Tooltip title="Enviar por Gmail" arrow>
            <button
              type="button"
              onClick={handleGmail}
              className="
              flex-1
              bg-red-500
              hover:bg-red-600
              text-white
              py-3
              px-6
              rounded-xl
              font-bold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              transform
              hover:scale-105
            "
            >
              Gmail
              <GoogleIcon />
            </button>
          </Tooltip>

          <Tooltip title="Enviar por Outlook" arrow>
            <button
              type="button"
              onClick={handleOutlook}
              className="
              flex-1
              bg-blue-500
              hover:bg-blue-600
              text-white
              py-3
              px-6
              rounded-xl
              font-bold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              transform
              hover:scale-105
            "
            >
              Outlook
              <MicrosoftIcon />
            </button>
          </Tooltip>

          <Tooltip title="Copiar correo" arrow>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="
              bg-gray-500
              hover:bg-gray-600
              text-white
              py-3
              px-6
              rounded-xl
              font-bold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              transform
              hover:scale-105
            "
            >
              <ContentCopyIcon />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
