import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';
import { boxType } from '../utils/navbarTypes';

const LeftSection = () => {
  const { t, i18n } = useTranslation();

  const [activeBoxes, setActiveBoxes] = useState<boxType[]>([]);

  useEffect(() => {
    const updateBoxes = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setActiveBoxes([
          { startRow: 14, spanRow: 15, startColumn: 1, spanColumn: 12, content: t('hello') },
          { startRow: 29, spanRow: 1, startColumn: 1, spanColumn: 10, content: "Small Box 2" },
          { startRow: 23, spanRow: 2, startColumn: 13, spanColumn: 3, content: "3333" },
          { startRow: 14, spanRow: 9, startColumn: 13, spanColumn: 13, content: "Small Box 4" },
          { startRow: 23, spanRow: 6, startColumn: 16, spanColumn: 10, content: "Small Box 5" },
          { startRow: 6, spanRow: 8, startColumn: 9, spanColumn: 23, content: "Small Box 6" },
        ]);
      } else {
        setActiveBoxes([
          { startRow: 40, spanRow: 48, startColumn: 1, spanColumn: 28, content: "Box 1" },
          { startRow: 27, spanRow: 13, startColumn: 20, spanColumn: 25, content: "Box 2" },
          { startRow: 40, spanRow: 18, startColumn: 29, spanColumn: 16, content: "Box 3" },
          { startRow: 45, spanRow: 17, startColumn: 45, spanColumn: 13, content: "Box 4" },
          { startRow: 21, spanRow: 24, startColumn: 45, spanColumn: 36, content: "Box 5" },
          { startRow: 10, spanRow: 11, startColumn: 55, spanColumn: 20, content: "Box 6" },
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
    <div className="grid grid-cols-2 grid-rows-20 lg:grid-cols-100 lg:grid-rows-100 gap-4">
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
};

export default LeftSection;
