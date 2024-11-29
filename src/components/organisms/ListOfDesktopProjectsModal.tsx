import Modal from '@/components/molecules/Modal'
import Sms from '@mui/icons-material/Sms'
import { ClickableTooltip } from '../molecules/ClickableTooltip'
import { useTranslation } from 'react-i18next'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import ListOfProjectsModalSlider4 from '../molecules/ListOfProjectsThreeDSlider'
import ListOfDesktopProjectsPreModal from '../molecules/ListOfDesktopProjectsPreModal'

const ListOfDesktopProjectsModal = () => {
  const { t } = useTranslation()
  return (
    <div className="rounded-xl bg-slate-700 flex flex-col-reverse">
      <ListOfDesktopProjectsPreModal />

      <Modal
        trigger={
          <div>
            <div className="absolute p-3 rounded-xl cursor-pointer items-center w-24 md:w-44 hover:bg-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-between flex-col h-[7.5rem] md:h-auto">
                  <h1 className="font-bold flex flex-wrap text-start">Lista de projectos</h1>
                  <div className="flex bg-slate-500 p-1 rounded-lg md:hidden">
                    <p className="mx-auto text-xs font-bold">Expand</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center ml-14">
                  <OpenInFullIcon fontSize="medium" />
                </div>
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
        <div className="h-full w-full bg-white dark:bg-black p-2 rounded-xl overflow-hidden border border-gray-700 touch-none">
          <div className="flex items-center">
            <h2 className="font-semibold dark:text-white text-black">
              {t('dev.templates.modal.title')}
            </h2>
            <ClickableTooltip
              text={t('dev.templates.modal.tooltip')}
              children={<Sms style={{ fill: 'white' }} />}
              bgColor="#33768f"
              textColor="black"
            />
          </div>

          <ListOfProjectsModalSlider4 />
        </div>
      </Modal>
    </div>
  )
}

export default ListOfDesktopProjectsModal
