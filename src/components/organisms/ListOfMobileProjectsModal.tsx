import ThreeDSlider from '@/components/molecules/ListOfProjectsThreeDSlider'
import ListOfMobileProjectsPreModal from '@/components/molecules/ListOfMobileProjectsPreModal'
import Modal from '@/components/molecules/Modal'
import { ClickableTooltip } from '@/components/molecules/ClickableTooltip'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Tooltip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Sms from '@mui/icons-material/Sms'
import { motion } from 'framer-motion'

const ListOfMobileProjectsModal = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  return (
    <div
      className="rounded-xl 
    bg-app-lightModeBoxes-box2 
    dark:bg-app-darkModeBoxes-box2 
    dark:border-app-lightModeBoxes-box2 
    border-app-darkModeBoxes-box2
    border-[2px]
    flex flex-col-reverse justify-end"
    >
      <ListOfMobileProjectsPreModal />

      <Modal
        trigger={
          <div>
            <motion.div
              className="w-full p-3 flex justify-between rounded-xl text-start cursor-pointer items-center"
              whileHover={{ scale: 1.002 }}
            >
              <h1 className="font-bold dark:text-white text-black ">{t('dev.projects.projects.mobile.title')}</h1>
              <Tooltip title={t('dev.projects.showAllProjects')} arrow>
                <div
                  className={`rounded-full py-1 px-2 items-center 
                    bg-white 
                    dark:border-app-lightModeBoxes-box2 
                    border-app-darkModeBoxes-box2 
                    hover:bg-opacity-45 
                    dark:text-white 
                    text-black 
                    bg-opacity-25 
                    md:border-[2px]
                    transition-all 
                    duration-300 
                    hover:scale-105 
                    flex gap-2 
                    text-xs 
                    font-bold`}
                >
                  {isMobile ? '' : t('dev.projects.seeMore')}
                  <ArrowForwardIcon
                    className="dark:text-white text-black "
                    fontSize={isMobile ? 'medium' : 'inherit'}
                  />
                </div>
              </Tooltip>
            </motion.div>
          </div>
        }
        mobileHeight="600px"
        normalWidth="70%"
        normalHeight="60%"
        layoutId="mobile-projects-modal"
        className="max-w-[1100px]"
      >
        <div
          className="h-full w-full 
        bg-gray-300 
        dark:bg-black 
        border-gray-700 
        dark:border-gray-300 
        border-[2px] 
        p-2 rounded-xl overflow-hidden 
        touch-none"
        >
          <div className="flex items-center">
            <h2 className="font-semibold dark:text-white text-black ml-2">{t('dev.projects.title')}</h2>
            <ClickableTooltip
              text={t('dev.projects.modal.tooltip')}
              children={<Sms style={{ fill: 'white' }} />}
              bgColor="#5eacfa"
              textColor="black"
            />
          </div>

          <ThreeDSlider platform="mobile" />
        </div>
      </Modal>
    </div>
  )
}

export default ListOfMobileProjectsModal
