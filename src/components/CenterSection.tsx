import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';
import ExampleComponent from './ExampleComponente';

const CenterSection = () => {
  const { t, i18n } = useTranslation();

  const [activeBoxes, setActiveBoxes] = useState<
    { startRow: number; spanRow: number; startColumn: number; spanColumn: number; content: React.ReactNode }[]
  >([]);

  useEffect(() => {
    const updateBoxes = (): void => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setActiveBoxes([
          { startRow: 14, spanRow: 18, startColumn: 2, spanColumn: 6, content: <ExampleComponent /> },
          { startRow: 10, spanRow: 7, startColumn: 8, spanColumn: 13, content: <ExampleComponent /> },
          { startRow: 17, spanRow: 20, startColumn: 8, spanColumn: 10, content: <ExampleComponent /> },
          { startRow: 17, spanRow: 3, startColumn: 18, spanColumn: 13, content: <ExampleComponent /> },
          { startRow: 20, spanRow: 4, startColumn: 18, spanColumn: 6, content: <ExampleComponent /> },
          { startRow: 7, spanRow: 10, startColumn: 21, spanColumn: 20, content: <ExampleComponent /> },
        ]);
      } else {
        setActiveBoxes([
          { startRow: 28, spanRow: 28, startColumn: 12, spanColumn: 22, content: <ExampleComponent /> },
          { startRow: 56, spanRow: 9, startColumn: 25, spanColumn: 9, content: <ExampleComponent /> },
          { startRow: 51, spanRow: 16, startColumn: 34, spanColumn: 22, content: <ExampleComponent /> },
          { startRow: 33, spanRow: 18, startColumn: 34, spanColumn: 57, content: <ExampleComponent /> },
          { startRow: 18, spanRow: 15, startColumn: 48, spanColumn: 16, content: <ExampleComponent /> },
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

export default CenterSection;
