import React, { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useSelector } from 'react-redux'
import { StoreState } from '@/store'
import ImageWithLoader from '@/components/atoms/ImageLoader.tsx'

interface BlurredImageProps {
  imagePath: string
}

const BlurredImage: React.FC<BlurredImageProps> = ({ imagePath }) => {
  const isMobile = useIsMobile(768)
  const isDarkMode = useSelector((state: StoreState) => state.darkTheme.isDarkThemeEnabled)
  const [isLoaded, setIsLoaded] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: '600px',
    boxShadow: 'inset 0px 0px 30px 40px black',
  })

  useEffect(() => {
    const blurColor = isDarkMode ? '#000' : 'white'

    setDimensions({
      height: isMobile ? '260px' : '600px',
      boxShadow: isMobile ? `inset 0px 0px 18px 20px ${blurColor}` : `inset 0px 0px 40px 40px ${blurColor}`,
    })
  }, [isMobile, isDarkMode])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="z-[4]">
      <div
        style={{
          height: dimensions.height,
          boxShadow: dimensions.boxShadow,
          position: 'relative',
        }}
      >
        <ImageWithLoader
          imagePath={imagePath}
          dataTestId="image-test-id"
          alt=""
          style={{
            height: dimensions.height,
            aspectRatio: '16:9',
            position: 'relative',
            zIndex: -1,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in',
          }}
        />
      </div>
    </div>
  )
}

export default BlurredImage
