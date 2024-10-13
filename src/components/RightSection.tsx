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
      { startRow: 18, spanRow: 21, startColumn: 9, spanColumn: 17, content: <SpotifyPlaylist /> },
      { startRow: 18, spanRow: 13, startColumn: 1, spanColumn: 8, content: <YoutubeVideo /> },
      { startRow: 7, spanRow: 11, startColumn: 12, spanColumn: 7, content: <ExampleComponent /> },
      { startRow: 3, spanRow: 15, startColumn: 19, spanColumn: 7, content: <ExampleComponent /> },
    ];
        
    const desktopBoxes = [
      { startRow: 13, spanRow: 20, startColumn: 1, spanColumn: 13, content: <ExampleComponent /> },
      { startRow: 21, spanRow: 12, startColumn: 14, spanColumn: 36, content: <ExampleComponent /> },
      { startRow: 33, spanRow: 26, startColumn: 22, spanColumn: 22, content: <SpotifyPlaylist /> },
      { startRow: 51, spanRow: 8, startColumn: 14, spanColumn: 8, content: <ExampleComponent /> },
      { startRow: 33, spanRow: 10, startColumn: 44, spanColumn: 20, content: <SpotifyLatestSong /> },
      { startRow: 43, spanRow: 10, startColumn: 44, spanColumn: 10, content: <ExampleComponent /> },
      { startRow: 43, spanRow: 18, startColumn: 54, spanColumn: 10, content: <YoutubeVideo /> },
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
