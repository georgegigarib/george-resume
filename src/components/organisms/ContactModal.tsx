import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '@/store'
import { setContactModalState } from '@/store/modal/modalStatus'
import Modal from '@/components/molecules/Modal'
import { useTranslation } from 'react-i18next'
import EmailButton from '@/components/molecules/EmailButton'
import CopyButton from '@/components/molecules/CopyButton'
import { WORK_EMAIL } from '@/constants/info'
import { useIsMobile } from '@/hooks/useIsMobile'
import EmailIcon from '@mui/icons-material/Email'

export default function ContactModal() {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const isMobile = useIsMobile()

  const isContactModalOpen = useSelector((state: StoreState) => state.modalStatus.isContactModalOpen)

  const email = WORK_EMAIL

  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState(t('contact.subjectDefault'))

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isContactModalOpen && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isContactModalOpen])

  const closeModal = () => {
    dispatch(setContactModalState(false))
    setMessage('')
    setSubject(t('contact.subjectDefault'))
  }

  const handleOnInputClick = (ref: HTMLTextAreaElement | HTMLInputElement) => {
    if (ref) {
      ref.focus()
    }
  }

  const handleGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.open(gmailUrl, '_blank')
  }

  const handleOutlook = () => {
    const outlookUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.open(outlookUrl, '_blank')
  }

  const handleMailto = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoUrl
  }

  useEffect(() => {
    setSubject(t('contact.subjectDefault'))
  }, [i18n.language])

  return (
    <Modal mobileHeight="550px" normalHeight="600px" isOpened={isContactModalOpen} closeModal={closeModal}>
      <div className="h-full w-full pt-6 px-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('contact.title')}</h2>
        <div className="flex flex-col h-[calc(100%-80px)] gap-4">
          {/* Email display with copy button */}
          <div className="flex items-center gap-4 p-1 px-3 rounded-xl">
            <span className="text-black dark:text-white font-medium">{email}</span>
            <CopyButton content={email} tooltipMessage={t('contact.buttons.copyEmailTooltip')}></CopyButton>
          </div>

          {/* Subject field */}
          <div className="relative">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('contact.subject')}
            </label>
            <input
              id="subject"
              type="text"
              ref={subjectRef}
              onClick={() => handleOnInputClick(subjectRef.current as HTMLInputElement)}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="
                w-full
                px-3
                py-2
                rounded-xl
                bg-gray-100 dark:bg-gray-800
                text-black dark:text-white
                border border-gray-300 dark:border-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* Message textarea with copy button */}
          <div className="flex-grow relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('contact.message')}
            </label>
            <div className="relative h-full">
              <textarea
                id="message"
                ref={textareaRef}
                value={message}
                onClick={() => handleOnInputClick(textareaRef.current as HTMLTextAreaElement)}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('contact.messagePlaceholder')}
                className="
                  h-full
                  w-full
                  p-4
                  rounded-xl
                  bg-gray-100 dark:bg-gray-800
                  text-black dark:text-white
                  resize-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  pr-12
                "
                required
              />
              <div className="absolute bottom-2 right-2">
                <CopyButton content={message} tooltipMessage={t('contact.buttons.copyMessageTooltip')}></CopyButton>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-semibold mt-2 text-black dark:text-white">
              {isMobile ? '' : t('contact.sendVia')}
            </h3>
            <div className="flex gap-3 justify-center mt-1">
              {isMobile ? (
                <EmailButton
                  onClick={handleMailto}
                  icon={
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">Enviar</span>
                      <EmailIcon className="text-green-600" />
                    </div>
                  }
                  provider="default"
                  className="px-2 rounded-full hover:shadow-md"
                />
              ) : (
                <>
                  <EmailButton onClick={handleGmail} icon={<i className="ci ci-gmail ci-lg"></i>} provider="gmail" />
                  <EmailButton
                    onClick={handleOutlook}
                    icon={<i className="ci ci-outlook ci-lg"></i>}
                    provider="outlook"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
