import CenterSection from '../components/CenterSection';
import ImageContainer from '../components/ImageContainer';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const Me = () => {
  return (
    <div className="w-[1300px] md:w-[3300px] mx-2 bg-white dark:bg-black">
      <div className="flex justify-between w-full">
        <div className="flex-1 flex justify-center" id="dev">
        <ImageContainer imagePath='/src/assets/dev.jpg' />
        </div>
        <div className="flex-1 flex justify-center" id="me">
          <ImageContainer imagePath='/src/assets/me.jpg' />
        </div>
        <div className="flex-1 flex justify-center" id="music">
        <ImageContainer imagePath='/src/assets/music.jpg' />
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
