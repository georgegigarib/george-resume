import { useState, useEffect } from 'react';
import Box from "@/components/organisms/Box";
import { useTranslation } from 'react-i18next';
import ExampleComponent from '@/components/organisms/ExampleComponente';
import LatestSong from '@/components/organisms/LatestSong';
import { useIsMobile } from '@/hooks/useIsMobile';
import Presentation from '@/components/organisms/Presentation';
import Jokes from '@/components/organisms/Jokes';

const CenterSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [activeBoxes, setActiveBoxes] = useState<
    { startRow: number; spanRow: number; startColumn: number; spanColumn: number; content: React.ReactNode }[]
  >([]);

  useEffect(() => {
    const mobileBoxes = [
      { startRow: 6, spanRow: 7, startColumn: 4, spanColumn: 16, content: <Presentation /> },
      { startRow: 13, spanRow: 14, startColumn: 1, spanColumn: 13, content: <Jokes /> },
      { startRow: 13, spanRow: 17, startColumn: 14, spanColumn: 6, content: <ExampleComponent /> },
      { startRow: 12, spanRow: 8, startColumn: 20, spanColumn: 8, content: <ExampleComponent /> },
      { startRow: 8, spanRow: 4, startColumn: 20, spanColumn: 21, content: <LatestSong /> },
    ];

    const desktopBoxes = [
      { startRow: 28, spanRow: 28, startColumn: 12, spanColumn: 22, content: <ExampleComponent /> },
      { startRow: 56, spanRow: 9, startColumn: 25, spanColumn: 9, content: <ExampleComponent /> },
      { startRow: 49, spanRow: 10, startColumn: 34, spanColumn: 22, content: <Jokes /> },
      { startRow: 31, spanRow: 18, startColumn: 34, spanColumn: 57, content: <ExampleComponent /> },
      { startRow: 22, spanRow: 9, startColumn: 43, spanColumn: 22, content: <Presentation /> },
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

export default CenterSection;
