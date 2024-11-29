import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useIsMobile } from '@/hooks/useIsMobile'
import { centerModalInViewport } from '@/utils/centerModalInViewPort'
import clsx from 'clsx'

interface ModalProps {
  trigger: React.ReactNode
  children: React.ReactNode
  layoutId: string
  normalWidth?: string
  mobileHeight?: string
  normalHeight?: string
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  layoutId,
  trigger,
  children,
  normalWidth = '450px',
  mobileHeight = '350px',
  normalHeight = '500px',
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isOpen) {
      setModalPosition(centerModalInViewport(isMobile))
    }
    const handleResize = () => setModalPosition(centerModalInViewport(isMobile))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, isMobile])

  const handleClose = () => setIsOpen(false)

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      <motion.div
        className="h-full w-full cursor-pointer"
        layoutId={layoutId}
        onClick={() => setIsOpen(true)}
      >
        {trigger}
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isOpen && (
          <>
            <motion.div
              transition={{ ease: 'circIn', duration: 0.5 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[20]"
              onClick={handleOutsideClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={layoutId}
                className={clsx(
                  'relative rounded-xl p-4',
                  `top-[${modalPosition.top}] left-[${modalPosition.left}]`,
                  className
                )}
                style={{
                  width: isMobile ? 'calc(100% - 80px)' : normalWidth,
                  height: isMobile ? mobileHeight : normalHeight,
                  position: 'fixed'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="absolute top-4 right-4">
                  <IconButton onClick={handleClose} aria-label="close">
                    <CloseIcon
                      fontSize="medium"
                      style={{ fill: 'white' }}
                      className="p-1 hover:bg-gray-700 rounded-full"
                    />
                  </IconButton>
                </div>
                {children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
