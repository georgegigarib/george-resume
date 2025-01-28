import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import CachedIcon from '@mui/icons-material/Cached'

export default function Jokes(): React.ReactElement {
  const { t } = useTranslation()
  const jokes = [t('me.jokes.joke1'), t('me.jokes.joke2'), t('me.jokes.joke3'), t('me.jokes.joke4')]

  const [currentJoke, setCurrentJoke] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeJoke()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentJoke])

  const handleChangeJoke = () => {
    setFade(false)
    setTimeout(() => {
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * jokes.length)
      } while (randomIndex === currentJoke)

      setCurrentJoke(randomIndex)
      setFade(true)
    }, 500)
  }

  return (
    <div className="flex relative flex-col justify-between w-full h-full p-4 overflow-hidden rounded-xl border-[2px] bg-app-lightModeBoxes-box16 dark:bg-app-darkModeBoxes-box16 border-app-darkModeBoxes-box16 dark:border-app-lightModeBoxes-box16">
      <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} h-full`}>
        <p data-testid="current-joke" className="text-gray-700 dark:text-gray-100 h-full">
          {jokes[currentJoke]}
        </p>
      </div>

      <IconButton
        aria-label="refresh joke"
        data-testid="refresh-joke-button"
        onClick={handleChangeJoke}
        sx={{
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          color: 'inherit',
        }}
      >
        <CachedIcon fontSize="medium" />
      </IconButton>
    </div>
  )
}
