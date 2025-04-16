import React from 'react'
import ResumePDF from '@/assets/documents/George Gil Garib Resume.pdf'
import CV from '@/assets/documents/George Gil Garib CV.pdf'
import resumeIcon from '@/assets/images/resume.png'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks/useLanguage'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function SeeResume(): React.ReactElement {
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()

  const pdfMap: Record<string, string> = {
    en: ResumePDF,
    es: CV,
  }

  const currentPdf = pdfMap[currentLanguage] || ResumePDF

  return (
    <div className="w-full p-2 cursor-pointer bg-transparent hover:scale-110 transition-all">
      <a
        href={currentPdf}
        target="_blank"
        className="flex flex-col gap-1 flex-wrap text-white rounded-xl  transition-all h-full bg-transparent"
      >
        <img
          src={resumeIcon}
          alt="Resume Icon"
          data-testid="resume-icon"
          width={isMobile ? '100' : '120'}
          className="relative  shadow-xl"
        />

        <div className="absolute mt-5 ml-1 md:ml-2 md:mt-10">
          <p
            className={`font-bold ${isMobile ? 'text-[0.65em]' : 'text-[1.0em]'} text-blue-500`}
            data-testid="resume-button-text-title"
          >
            {t('dev.resume.resume')}
          </p>

          <p
            className={`font-bold ${isMobile ? 'text-[0.3em]' : 'text-[0.70em]'} text-blue-500 -mt-1`}
            data-testid="resume-button-text-name"
          >
            {t('dev.resume.name')}
          </p>
        </div>
      </a>
    </div>
  )
}
