import CenterSection from '../components/CenterSection';
import ImageContainer from '../components/ImageContainer';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const Me = () => {
  return (
    <div className="w-[1500px] md:w-[3300px] mx-2">
      <div className="flex justify-between">
        <div className="flex-1 flex justify-center h-[100px]" id="dev">
        <ImageContainer imagePath='/src/assets/dev.jpg' blurColor='#000000' />
        </div>
        <div className="flex-1 flex justify-center h-[100px]" id="me">
          <ImageContainer imagePath='/src/assets/me.jpg' blurColor='#000000' />
        </div>
        <div className="flex-1 flex justify-center h-[100px]" id="music">
        <ImageContainer imagePath='/src/assets/music.jpg' blurColor='#000000' />
        </div>
      </div>
      <div className="relative">
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
