import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';
import ExampleComponent from './ExampleComponente';
import SpotifyPlaylist from './SpotifyPlaylist';
import SpotifyLatestSong from './SpotfyLatestSong';
import { useIsMobile } from '../hooks/useIsMobile';
import YoutubeVideo from './YoutubeVideo';

const RightSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [activeBoxes, setActiveBoxes] = useState<
    { startRow: number; spanRow: number; startColumn: number; spanColumn: number; content: React.ReactNode }[]
  >([]);

  useEffect(() => {
    const mobileBoxes = [
      { startRow: 19, spanRow: 21, startColumn: 9, spanColumn: 17, content: <SpotifyPlaylist /> },
      { startRow: 19, spanRow: 13, startColumn: 1, spanColumn: 8, content: <YoutubeVideo /> },
      { startRow: 11, spanRow: 8, startColumn: 11, spanColumn: 8, content: <ExampleComponent /> },
      { startRow: 3, spanRow: 16, startColumn: 19, spanColumn: 7, content: <ExampleComponent /> },
    ];
        
    const desktopBoxes = [
      { startRow: 13, spanRow: 20, startColumn: 1, spanColumn: 13, content: <ExampleComponent /> },
      { startRow: 21, spanRow: 12, startColumn: 14, spanColumn: 36, content: <ExampleComponent /> },
      { startRow: 33, spanRow: 22, startColumn: 22, spanColumn: 22, content: <SpotifyPlaylist /> },
      { startRow: 48, spanRow: 6, startColumn: 14, spanColumn: 8, content: <ExampleComponent /> },
      { startRow: 33, spanRow: 7, startColumn: 44, spanColumn: 20, content: <SpotifyLatestSong /> },
      { startRow: 40, spanRow: 10, startColumn: 44, spanColumn: 10, content: <ExampleComponent /> },
      { startRow: 41, spanRow: 14, startColumn: 54, spanColumn: 10, content: <YoutubeVideo /> },
    ];

    setActiveBoxes(isMobile ? mobileBoxes : desktopBoxes);
  }, [isMobile, i18n.language, t]);

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
