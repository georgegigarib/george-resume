import Modal from '../molecules/Modal'

import Sms from '@mui/icons-material/Sms'
import { DevTemplatesPreModal } from '../molecules/DevTemplatesPreModal'
import { ClickableTooltip } from '../molecules/ClickableTooltip'
import { devTemplates } from '@/constants/templates'
import { useTranslation } from 'react-i18next'
import DevTemplatesOption from '../molecules/DevTemplatesOption'
import TemplatesCarousels from '../molecules/TemplatesCarousels'

const DevTemplatesModal = () => {
  const { t } = useTranslation()
  return (
    <div className="rounded-xl bg-slate-700 flex flex-col-reverse">
      <TemplatesCarousels />

      <Modal
        trigger={DevTemplatesPreModal()}
        layoutId="dev-templates-modal"
        mobileHeight="500px"
        normalHeight="600px"
      >
        <div className="h-full w-full bg-blue-950 p-4 rounded-xl overflow-hidden">
          <div className="flex items-center">
            <h2 className="font-semibold">{t('dev.templates.modal.title')}</h2>
            <ClickableTooltip
              text={t('dev.templates.modal.tooltip')}
              children={<Sms style={{ fill: 'white' }} />}
              bgColor="#33768f"
              textColor="black"
            />
          </div>

          <div className="overflow-auto shadow-inner max-h-[95%] scroll-smooth">
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
