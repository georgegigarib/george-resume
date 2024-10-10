import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';
import { boxType } from '../utils/navbarTypes';

const RightSection = () => {
  const { t, i18n } = useTranslation();

  const [activeBoxes, setActiveBoxes] = useState<boxType[]>([]);

  useEffect(() => {
    const updateBoxes = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setActiveBoxes([
          { startRow: 11, spanRow: 20, startColumn: 3, spanColumn: 15, content: t('hello') },
          { startRow: 8, spanRow: 3, startColumn: 8, spanColumn: 5, content: 'smallBox17' },
          { startRow: 9, spanRow: 2, startColumn: 13, spanColumn: 5, content: 'smallBox18' },
          { startRow: 9, spanRow: 15, startColumn: 18, spanColumn: 3, content: 'smallBox14' },
          { startRow: 5, spanRow: 4, startColumn: 13, spanColumn: 8, content: 'smallBox15' },
        ]);
      } else {
        setActiveBoxes([
          { startRow: 13, spanRow: 20, startColumn: 1, spanColumn: 13, content: t('hello') },
          { startRow: 21, spanRow: 12, startColumn: 14, spanColumn: 36, content: 'box13' },
          { startRow: 33, spanRow: 35, startColumn: 22, spanColumn: 22, content: 'box14' },
          { startRow: 51, spanRow: 8, startColumn: 14, spanColumn: 8, content: 'box15' },
          { startRow: 33, spanRow: 10, startColumn: 44, spanColumn: 30, content: 'box16' },
          { startRow: 43, spanRow: 18, startColumn: 44, spanColumn: 18, content: 'box17' },
          { startRow: 43, spanRow: 40, startColumn: 62, spanColumn: 12, content: 'box18' },
        ]);
      }
    };

    updateBoxes();

    window.addEventListener('resize', updateBoxes);
    return () => {
      window.removeEventListener('resize', updateBoxes);
    };
  }, [i18n.language, t]);

  return (
    <div className="grid grid-cols-100 grid-rows-100 gap-4">
      {activeBoxes.map((box, index) => (
        <Box 
          key={index}
          startRow={box.startRow}
          startColumn={box.startColumn}
          spanRow={box.spanRow}
          spanColumn={box.spanColumn}
          content={box.content} 
        />
      ))}
    </div>
  );
}

export default RightSection;
