import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';
import ExampleComponent from './ExampleComponente';
import SpotifyPlaylist from './SpotifyPlaylist';
import SpotifyLatestSong from './SpotfyLatestSong';

const RightSection = () => {
  const { t, i18n } = useTranslation();

  // Definir que el content puede ser un ReactNode (componente)
  const [activeBoxes, setActiveBoxes] = useState<
    { startRow: number, spanRow: number, startColumn: number, spanColumn: number, content: React.ReactNode }[]
  >([]);

  useEffect(() => {
    const updateBoxes = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setActiveBoxes([
          { startRow: 16, spanRow: 20, startColumn: 3, spanColumn: 15, content: <SpotifyPlaylist /> },
          { startRow: 10, spanRow: 5, startColumn: 8, spanColumn: 5, content: <ExampleComponent /> },
          { startRow: 11, spanRow: 4, startColumn: 13, spanColumn: 5, content: <ExampleComponent /> },
          { startRow: 11, spanRow: 15, startColumn: 18, spanColumn: 3, content: <ExampleComponent /> },
          { startRow: 7, spanRow: 4, startColumn: 10, spanColumn: 10, content: <ExampleComponent /> },
        ]);
      } else {
        setActiveBoxes([
          { startRow: 13, spanRow: 20, startColumn: 1, spanColumn: 13, content: <ExampleComponent /> },
          { startRow: 21, spanRow: 12, startColumn: 14, spanColumn: 36, content: <ExampleComponent /> },
          { startRow: 33, spanRow: 35, startColumn: 22, spanColumn: 22, content: <SpotifyPlaylist /> },
          { startRow: 51, spanRow: 8, startColumn: 14, spanColumn: 8, content: <ExampleComponent /> },
          { startRow: 33, spanRow: 10, startColumn: 44, spanColumn: 30, content: <SpotifyLatestSong /> },
          { startRow: 43, spanRow: 18, startColumn: 44, spanColumn: 18, content: <ExampleComponent /> },
          { startRow: 43, spanRow: 40, startColumn: 62, spanColumn: 12, content: <ExampleComponent /> },
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
          content={box.content} // Aquí pasamos el componente directamente
        />
      ))}
    </div>
  );
}

export default RightSection;
