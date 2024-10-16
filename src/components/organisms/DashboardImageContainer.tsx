import React, { useState, useEffect } from "react";

interface BlurredImageProps {
  imagePath: string;
}

const BlurredImage: React.FC<BlurredImageProps> = ({ imagePath }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: '600px',
    boxShadow: `inset 0px 0px 30px 40px black`,
  });

  const updateDimensions = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const blurColor = isDarkMode ? 'black' : 'white';

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      setDimensions({ height: '260px', boxShadow: `inset 0px 0px 18px 20px ${blurColor}` });
    } else {
      setDimensions({ height: '600px', boxShadow: `inset 0px 0px 30px 40px ${blurColor}` });
    }
  };

  useEffect(() => {
    updateDimensions();
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);

    const observer = new MutationObserver(() => {
      updateDimensions();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

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
