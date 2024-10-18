import React, { useState, useEffect } from "react";
import { useIsMobile } from '@/hooks/useIsMobile';

interface BlurredImageProps {
  imagePath: string;
}

const BlurredImage: React.FC<BlurredImageProps> = ({ imagePath }) => {
  const isMobile = useIsMobile(768);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: '600px',
    boxShadow: `inset 0px 0px 30px 40px black`,
  });

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const blurColor = isDarkMode ? 'black' : 'white';

    if (isMobile) {
      setDimensions({ height: '260px', boxShadow: `inset 0px 0px 18px 20px ${blurColor}` });
    } else {
      setDimensions({ height: '600px', boxShadow: `inset 0px 0px 30px 40px ${blurColor}` });
    }
  }, [isMobile]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="z-[4]">
      <div
        style={{
          height: dimensions.height,
          boxShadow: dimensions.boxShadow,
          position: "relative",
        }}
      >
        <img
          src={imagePath}
          alt=""
          data-testid="image-test-id"
          style={{
            height: dimensions.height,
            aspectRatio: '16:9',
            position: "relative",
            zIndex: -1,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-in",
          }}
        />
      </div>
    </div>
  );
};

export default BlurredImage;
