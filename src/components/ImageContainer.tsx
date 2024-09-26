import React, { useState, useEffect } from "react";

interface BlurredImageProps {
  imagePath: string;
  blurColor: string;
}

const BlurredImage: React.FC<BlurredImageProps> = ({ imagePath, blurColor }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      style={{
        height: '600px',
        boxShadow: `inset 0px 0px 30px 40px ${blurColor}`,
        position: "relative",
      }}
    >
      <img
        src={imagePath}
        alt="Blurred"
        style={{
          height: '600px',
          aspectRatio: '16:9',
          position: "relative",
          zIndex: -1,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease-in",
        }}
      />
    </div>
  );
};

export default BlurredImage;
