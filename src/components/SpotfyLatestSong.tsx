import React, { useEffect, useState, useRef } from 'react';

export default function SpotifyLatestSong(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const iframes: string[] = [
    "https://open.spotify.com/embed/track/6FL1hImx4QGr7m8xs31uvW?utm_source=generator",
    "https://embed.music.apple.com/do/album/un-a%C3%B1o/1760344218?i=1760344579"
  ];

  const totalIframes: number = iframes.length;
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isMouseOver) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalIframes);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMouseOver, totalIframes]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    const touchStartY = e.touches[0].clientY;

    const handleTouchMove = (event: TouchEvent): void => {
      const touchEndY = event.touches[0].clientY;

      if (touchStartY - touchEndY > 50) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalIframes);
        window.removeEventListener('touchmove', handleTouchMove);
      } else if (touchEndY - touchStartY > 50) {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalIframes) % totalIframes);
        window.removeEventListener('touchmove', handleTouchMove);
      }
    };

    window.addEventListener('touchmove', handleTouchMove);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const startY = e.clientY;

    const handleMouseMove = (event: MouseEvent): void => {
      const endY = event.clientY;

      if (startY - endY > 50) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalIframes);
        cleanup();
      } else if (endY - startY > 50) {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalIframes) % totalIframes);
        cleanup();
      }
    };

    const cleanup = (): void => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', cleanup);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', cleanup);
  };

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
    >
      <div
        className="transition-transform duration-500"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          height: `${totalIframes * 76}px`,
        }}
      >
        {iframes.map((src, index) => (
          <div key={index} style={{ pointerEvents: 'none' }}>
            <iframe
              className="rounded-xl w-full"
              src={src}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media *; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ pointerEvents: 'auto', overflow: 'hidden', background: 'transparent' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
