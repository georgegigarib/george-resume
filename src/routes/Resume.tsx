import React from 'react';
import ResumePDF from '../assets/George Gil Garib Resume.pdf';
import CVPDF from '../assets/George Gil Garib CV.pdf';
import { useLanguage } from '../hooks/useLanguage';

export default function ResumeViewer(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  const pdfMap: Record<string, string> = {
    en: ResumePDF,
    es: CVPDF,
  };

  const currentPdf = pdfMap[currentLanguage] || ResumePDF;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <object
        data={currentPdf}
        type="application/pdf"
        style={{ width: '100%', height: '90vh', minHeight: '600px' }}
      >
        <p>Your browser does not support PDFs. <a href={currentPdf}>Download the PDF</a>.</p>
      </object>
    </div>
  );
}
