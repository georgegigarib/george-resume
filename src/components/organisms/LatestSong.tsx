import React, { useEffect, useState, useRef } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function LatestSong(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
  const isMobile = useIsMobile()
  const iframeWidth = isMobile ? 320 : 365
  const iframes: string[] = [
    'https://open.spotify.com/embed/album/6H73t0Wok8dsEEGqRhgOsV?utm_source=generator',
    'https://embed.music.apple.com/do/album/un-a%C3%B1o-single/1760344218',
  ]

  const totalIframes: number = iframes.length
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isMouseOver) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalIframes)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isMouseOver, totalIframes])

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      data-testid="frame-container"
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
              className="rounded-xl"
              data-testid={`song-test-id-${index}`}
              src={src}
              width={iframeWidth}
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
  )
}
