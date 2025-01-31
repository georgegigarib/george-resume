import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

interface ImageWithLoaderProps {
  imagePath: string
  imgClassName?: string
  style?: React.CSSProperties
  dataTestId?: string
  alt?: string
  onClick?: () => void
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  imagePath,
  imgClassName,
  style,
  dataTestId,
  alt,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
      <img
        src={imagePath}
        alt={alt}
        className={`${imgClassName} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
        data-testid={dataTestId}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
      />
    </>
  )
}

export default ImageWithLoader
