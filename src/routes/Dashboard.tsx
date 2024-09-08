import CenterSection from '../components/CenterSection';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const Me = () => {
  return (
    <div className="w-[1500px] md:w-[3300px] 3xl:w-[4000px] mt-32 mx-2">
      <div className="flex justify-between">
        <div className="flex-1 flex justify-center h-[300px]" id="dev">
          Dev
        </div>
        <div className="flex-1 flex justify-center h-[350px]" id="me">
          Me
        </div>
        <div className="flex-1 flex justify-center h-[300px]" id="music">
          Music
        </div>
      </div>
      <div className=" h-[400px]">
        <div className="flex">
          <div className="w-[33.33%] h-[800px]">
            <LeftSection />
          </div>
          <div className="w-[33.33%] h-[800px]">
            <CenterSection />
          </div>
          <div className="w-[33.33%] h-[800px]">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
