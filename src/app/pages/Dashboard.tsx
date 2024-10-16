import CenterSection from '@/components/sections/CenterSection';
import ImageContainer from '@/components/organisms/DashboardImageContainer';
import LeftSection from '@/components/sections/LeftSection';
import RightSection from '@/components/sections/RightSection';
import devImage from '@/assets/images/dev.webp';
import meImage from '@/assets/images/me.webp';
import musicImage from '@/assets/images/music.webp';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect } from 'react';
import { setTheme } from '@/utils/setTheme';

export default function Dashboard() {

  const { loadLanguageFromStorage } = useLanguage();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setTheme(isDark);
    loadLanguageFromStorage()
  }, []);

  return (
    <div className="w-[1300px] md:w-[3300px] bg-white dark:bg-black">
      <div className="flex justify-between w-full mt-0">
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