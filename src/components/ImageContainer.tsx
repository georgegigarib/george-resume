import React, { useState, useEffect } from "react";

interface BlurredImageProps {
  imagePath: string;
}

const BlurredImage: React.FC<BlurredImageProps> = ({ imagePath }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: '600px',
    boxShadow: `inset 0px 0px 30px 40px black`, // Default to dark mode
  });

  const updateDimensions = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const blurColor = isDarkMode ? 'black' : 'white'; // Use black for dark mode, white for light mode

    if (window.innerWidth < 768) {
      setDimensions({ height: '240px', boxShadow: `inset 0px 0px 18px 20px ${blurColor}` });
    } else {
      setDimensions({ height: '600px', boxShadow: `inset 0px 0px 30px 40px ${blurColor}` });
    }
  };

  useEffect(() => {
    // Update dimensions when the window is resized
    window.addEventListener('resize', updateDimensions);

    // Watch for class changes on the document element (to detect theme change)
    const observer = new MutationObserver(() => {
      updateDimensions();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'], // Only watch for class changes
    });

    // Initial dimension calculation
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
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
          alt="Blurred"
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
