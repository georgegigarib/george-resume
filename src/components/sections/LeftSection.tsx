import { useEffect, useState } from 'react';
import Box from "../organisms/Box";
import { useTranslation } from 'react-i18next';
import ExampleComponent from '../organisms/ExampleComponente';
import { useIsMobile } from '../../hooks/useIsMobile';
import SeeResume from '../organisms/SeeResume';

const LeftSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [activeBoxes, setActiveBoxes] = useState<
    { startRow: number; spanRow: number; startColumn: number; spanColumn: number; content: React.ReactNode }[]
  >([]);

  useEffect(() => {
    const mobileBoxes = [
      { startRow: 14, spanRow: 20, startColumn: 1, spanColumn: 12, content: <ExampleComponent /> },
      { startRow: 34, spanRow: 1, startColumn: 1, spanColumn: 10, content: <ExampleComponent /> },
      { startRow: 14, spanRow: 6, startColumn: 13, spanColumn: 18, content: <ExampleComponent /> },
      { startRow: 20, spanRow: 9, startColumn: 13, spanColumn: 9, content: <ExampleComponent /> },
      { startRow: 20, spanRow: 6, startColumn: 22, spanColumn: 6, content: <SeeResume /> },
      { startRow: 7, spanRow: 7, startColumn: 8, spanColumn: 17, content: <ExampleComponent /> },
    ];
    
    const desktopBoxes = [
      { startRow: 40, spanRow: 48, startColumn: 1, spanColumn: 28, content: <ExampleComponent /> },
      { startRow: 27, spanRow: 13, startColumn: 20, spanColumn: 25, content: <ExampleComponent /> },
      { startRow: 40, spanRow: 18, startColumn: 29, spanColumn: 16, content: <ExampleComponent /> },
      { startRow: 45, spanRow: 17, startColumn: 45, spanColumn: 13, content: <ExampleComponent /> },
      { startRow: 45, spanRow: 10, startColumn: 71, spanColumn: 10, content: <SeeResume /> },
      { startRow: 21, spanRow: 24, startColumn: 45, spanColumn: 36, content: <ExampleComponent /> },
      { startRow: 10, spanRow: 11, startColumn: 55, spanColumn: 20, content: <ExampleComponent /> },
    ];

    setActiveBoxes(isMobile ? mobileBoxes : desktopBoxes);
  }, [isMobile, i18n.language, t]);

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
