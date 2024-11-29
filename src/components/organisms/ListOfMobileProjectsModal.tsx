import Modal from '@/components/molecules/Modal'
import Sms from '@mui/icons-material/Sms'
import { motion } from 'framer-motion'
import { ClickableTooltip } from '../molecules/ClickableTooltip'
import { useTranslation } from 'react-i18next'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import ListOfProjectsModalSlider4 from '../molecules/ListOfProjectsThreeDSlider'
import ListOfMobileProjectsPreModal from '../molecules/ListOfMobileProjectsPreModal'

const ListOfMobileProjectsModal = () => {
  const { t } = useTranslation()
  return (
    <div className="rounded-xl bg-slate-700 flex flex-col-reverse justify-end ml-1">
      <ListOfMobileProjectsPreModal />

      <Modal
        trigger={
          <div>
            <motion.div
              className="w-full p-3 flex justify-between rounded-xl text-start  cursor-pointer items-center hover:bg-gray-600"
              whileHover={{ scale: 1.002 }}
            >
              <h1 className="font-bold">Lista de proyectos</h1>
              <OpenInFullIcon fontSize="medium" />
            </motion.div>
          </div>
        }
        mobileHeight="600px"
        normalWidth="70%"
        normalHeight="60%"
        layoutId="mobile-projects-modal"
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

export default ListOfMobileProjectsModal
