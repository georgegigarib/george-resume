import ListOfMobileProjectsPreModal from '@/components/molecules/ListOfMobileProjectsPreModal'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Tooltip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useDispatch } from 'react-redux'
import { setProjectModalState } from '@/store/modal/modalStatus'

const ListOfMobileProjectsModal = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isMobile = useIsMobile()

  const openModal = () => {
    dispatch(setProjectModalState(true))
  }

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
      <div onClick={openModal}>
        <div className="w-full p-3 flex justify-between rounded-xl text-start cursor-pointer items-center">
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
              <ArrowForwardIcon className="dark:text-white text-black " fontSize={isMobile ? 'medium' : 'inherit'} />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ListOfMobileProjectsModal
