import Modal from '@/components/molecules/Modal'
import ThreeDSlider from '@/components/molecules/ListOfProjectsThreeDSlider'
import ListOfDesktopProjectsPreModal from '@/components/molecules/ListOfDesktopProjectsPreModal'
import { ClickableTooltip } from '@/components/molecules/ClickableTooltip'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Tooltip } from '@mui/material'
import clsx from 'clsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Sms from '@mui/icons-material/Sms'

const ListOfDesktopProjectsModal = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  return (
    <div
      className="rounded-xl     
    bg-app-lightModeBoxes-box1 
    dark:bg-app-darkModeBoxes-box1 
    dark:border-app-lightModeBoxes-box1 
    border-app-darkModeBoxes-box1 flex flex-col-reverse
    border-[2px]"
    >
      <ListOfDesktopProjectsPreModal />

      <Modal
        trigger={
          <div
            className="absolute p-1 rounded-lg cursor-pointer items-center w-[7.2rem] md:w-44 dark:hover:bg-white hover:bg-opacity-25 hover:bg-white dark:hover:bg-opacity-25
            bg-app-lightModeBoxes-box1 m-1
    dark:bg-app-darkModeBoxes-box1 md:mt-2 md:ml-2 border-app-darkModeBoxes-box1 dark:border-app-lightModeBoxes-box1
    "
          >
            <div className="grid grid-cols-1 md:grid-cols-4 items-center px-2 pt-2 md:pb-2">
              <div className="col-span-3 flex justify-between flex-col h-[7.5rem] md:h-auto">
                <h1
                  className={clsx(
                    'font-bold flex flex-wrap text-start dark:text-white text-black',
                    isMobile ? 'text-sm' : 'text-md'
                  )}
                >
                  {t('dev.projects.projects.desktop.title')}
                </h1>
                <Tooltip title={t('dev.projects.showAllProjects')} arrow>
                  <div className="flex p-1 rounded-lg md:hidden">
                    <p className="mx-auto text-xs font-bold">{t('dev.projects.seeMore')}</p>
                  </div>
                </Tooltip>
              </div>

              <div className="hidden md:flex justify-center ml-6">
                <Tooltip title={t('dev.projects.seeMore')} arrow>
                  <ArrowForwardIcon
                    fontSize="large"
                    className="hover:bg-white hover:bg-opacity-25 rounded-full p-1 dark:text-white text-black"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        }
        mobileHeight="600px"
        normalWidth="70%"
        normalHeight="60%"
        layoutId="desktop-projects-modal"
        className="max-w-[1100px]"
      >
        <div
          className="h-full w-full  p-2 rounded-xl overflow-hidden bg-gray-300 
        dark:bg-black 
        border-gray-700 
        dark:border-gray-300 
        border-[2px] touch-none"
        >
          <div className="flex items-center">
            <h2 className="font-semibold dark:text-white text-black">{t('dev.templates.modal.title')}</h2>
            <ClickableTooltip
              text={t('dev.projects.modal.tooltip')}
              children={<Sms style={{ fill: 'white' }} />}
              bgColor="#5eacfa"
              textColor="black"
            />
          </div>

          <ThreeDSlider platform="desktop" />
        </div>
      </Modal>
    </div>
  )
}

export default ListOfDesktopProjectsModal
