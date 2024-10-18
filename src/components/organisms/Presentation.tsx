import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Presentation(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="flex relative flex-col justify-between h-full p-4  rounded-xl bg-gray-200 dark:bg-gray-800">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">
          {t('me.presentation.title')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{t('me.presentation.description')}</p>
      </div>
    </div>
  )
}
