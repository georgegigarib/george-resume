import React from 'react';
import { Link } from 'react-router-dom';
import ResumePDF from '@/assets/documents/George Gil Garib Resume.pdf'
import CVPDF from '@/assets/documents/George Gil Garib CV.pdf';
import resumeIcon from '@/assets/icons/resume-icon.svg';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function SeeResume(): React.ReactElement {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const pdfMap: Record<string, string> = {
    en: ResumePDF,
    es: CVPDF,
  };

  const currentPdf = pdfMap[currentLanguage] || ResumePDF;

  return (
    <Link 
      to={currentPdf}
      target='_blank'
      className={`flex flex-col gap-1 items-center justify-center text-center flex-wrap bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all h-full`}
      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
    >
      <img
        src={resumeIcon}
        alt="Resume Icon"
        width={isMobile ? '40' : '80'}
        height={isMobile ? '40' : '80'}
        className=""
      />

      <p className={`font-bold ${isMobile ? 'text-[0.7em]' : 'text-[1.0em]'}`}>
        {t('dev.resume.seeResume')}
        </p>
    </Link>
  );
}
