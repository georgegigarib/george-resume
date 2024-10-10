import CenterSection from '../components/CenterSection';
import ImageContainer from '../components/ImageContainer';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import devImage from '../assets/dev.webp';
import meImage from '../assets/me.webp';
import musicImage from '../assets/music.webp';
import { useLanguage } from '../hooks/useLanguage';
import { useEffect } from 'react';
import { setTheme } from '../utils/setTheme';

const Me = () => {

  const { loadLanguageFromStorage } = useLanguage();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setTheme(isDark);
    loadLanguageFromStorage()
  }, []);

  return (
    <div className="w-[1300px] md:w-[3300px] mx-2 bg-white dark:bg-black">
      <div className="flex justify-between w-full mt-6">
        <div className="flex-1 flex justify-center" id="dev">
          <ImageContainer imagePath={devImage} />
        </div>
        <div className="flex-1 flex justify-center" id="me">
          <ImageContainer imagePath={meImage} />
        </div>
        <div className="flex-1 flex justify-center" id="music">
          <ImageContainer imagePath={musicImage} />
        </div>
      </div>

      <div className="w-full -top-32 md:-top-96 relative z-[5]">
        <div className="flex">
          <div className="w-[33.33%]">
            <LeftSection />
          </div>
          <div className="w-[33.33%]">
            <CenterSection />
          </div>
          <div className="w-[33.33%]">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
