import { useTranslation } from 'react-i18next'

const ExampleComponent = () => {
  const { t } = useTranslation()
  return (
    <div className="p-4 text-blue-900 rounded flex justify-center">
      <h4>{t('underConstruction')}</h4>
    </div>
  )
}

export default ExampleComponent
