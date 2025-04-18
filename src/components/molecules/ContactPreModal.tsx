import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import { setContactModalState } from '@/store/modal/modalStatus'

const ContactPreModal = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(setContactModalState(true))
  }

  return (
    <div onClick={openModal} className="cursor-pointer transform hover:scale-105 transition-all duration-300">
      <div
        className="
        bg-gradient-to-r from-blue-500 to-purple-500
        hover:from-purple-500 hover:to-blue-500
        rounded-xl p-4 shadow-lg
        flex flex-col  justify-between
        border-2 border-transparent hover:border-white
        text-white
        transition-all duration-100
      "
      >
        <h2 className="text-lg font-bold">{t('contact.title')}</h2>
        <div className="flex items-center justify-start md:justify-between">
          <p className="text-sm opacity-90 md:w-24">{t('contact.letsWork')}</p>
          <Tooltip title={t('contact.sendMeAMessage')} arrow>
            <span
              className="
            bg-white bg-opacity-20
            hover:bg-opacity-30
            rounded-full
            p-1
            md:p-2
            h-auto
            flex justify-center items-center
            transition-all duration-300
            md:text-xl
            "
            >
              <EmailIcon fontSize="inherit" />
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ContactPreModal
