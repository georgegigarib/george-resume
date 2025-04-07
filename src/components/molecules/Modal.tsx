import { useEffect, useState } from 'react'
import clsx from 'clsx'
import CloseIcon from '@mui/icons-material/Close'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useSelector } from 'react-redux'
import { StoreState } from '@/store'

interface ModalProps {
  children: React.ReactNode
  isOpened: boolean
  closeModal: () => void
  normalWidth?: string
  mobileHeight?: string
  normalHeight?: string
  className?: string
}

export default function Modal({
  children,
  isOpened = false,
  closeModal,
  normalWidth = '450px',
  mobileHeight = '350px',
  normalHeight = '500px',
  className,
}: ModalProps) {
  const isDakTHemeEnabled = useSelector((state: StoreState) => state.darkTheme.isDarkThemeEnabled)
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = ''
    }
  }, [isOpened])

  useEffect(() => {
    if (isOpened) {
      setIsVisible(true)
    } else {
      setTimeout(() => setIsVisible(false), 300)
    }
  }, [isOpened])

  const close = () => {
    closeModal()
  }

  return (
    <div
      className={`fixed inset-0 z-[40] ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      data-testid="modal-background"
    >
      <div
        className={clsx(
          'absolute inset-0 bg-black transition-opacity duration-300',
          isOpened ? 'opacity-70' : 'opacity-0'
        )}
        onClick={closeModal}
        style={{ zIndex: 1 }}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4" style={{ zIndex: 2 }}>
        <div
          className={clsx(
            'bg-white dark:bg-black rounded-xl shadow-lg transform transition-all',
            `${isOpened ? 'animate-zoomIn' : 'animate-zoomOut'}`,
            `${!isOpened && !isVisible ? 'hidden' : ''}`,
            className
          )}
          style={{
            width: isMobile ? 'calc(100% - 80px)' : normalWidth,
            height: isMobile ? mobileHeight : normalHeight,
            margin: 'auto',
          }}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-opacity-35 focus:outline-none"
            style={{
              background: isDakTHemeEnabled ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
            }}
            aria-label="Close"
            data-testid="close-button"
          >
            <CloseIcon fontSize="medium" style={{ color: isDakTHemeEnabled ? 'white' : 'black' }} />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
