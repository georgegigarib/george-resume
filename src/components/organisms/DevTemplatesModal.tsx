import Modal from '@/components/molecules/Modal'
import DevTemplatesPreModal from '@/components/molecules/DevTemplatesPreModal'
import DevTemplatesOption from '@/components/molecules/DevTemplatesOption'
import TemplatesCarousels from '@/components/molecules/TemplatesCarousels'
import { ClickableTooltip } from '@/components/molecules/ClickableTooltip'
import { useTranslation } from 'react-i18next'
import Sms from '@mui/icons-material/Sms'
import { devTemplates } from '@/constants/templates'

const DevTemplatesModal = () => {
  const { t } = useTranslation()
  return (
    <div
      className="
      rounded-xl     
      border-[2px]
      bg-app-lightModeBoxes-box13 
      dark:bg-app-darkModeBoxes-box13 
      dark:border-app-lightModeBoxes-box13 
      border-app-darkModeBoxes-box13 
      flex flex-col-reverse"
    >
      <TemplatesCarousels />

      <Modal trigger={DevTemplatesPreModal()} layoutId="dev-templates-modal" mobileHeight="500px" normalHeight="600px">
        <div
          className="h-full w-full bg-app-lightModeBoxes-box13 
    dark:bg-app-darkModeBoxes-box13 
    dark:border-app-lightModeBoxes-box13 
    border-app-darkModeBoxes-box13 border-[2px]
    p-4 rounded-xl overflow-hidden"
        >
          <div className="flex items-center">
            <h2 className="font-semibold text-black dark:text-white">{t('dev.templates.modal.title')}</h2>
            <ClickableTooltip
              text={t('dev.templates.modal.tooltip')}
              children={<Sms style={{ fill: 'white' }} />}
              bgColor="#5eacfa"
              textColor="black"
            />
          </div>

          <hr className="w-100 mr-5 rounded-xl border"></hr>
          <div className="overflow-auto  max-h-[95%] mt-2 scroll-smooth text-white description-scrollbar">
            <div className="flex flex-col flex-wrap mr-3 py-2">
              {devTemplates.map((template, index) => (
                <DevTemplatesOption option={template} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DevTemplatesModal
