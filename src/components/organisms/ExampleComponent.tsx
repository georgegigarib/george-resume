import construction from '@/assets/images/construction.png'
import { useMemo } from 'react'
import ImageWithLoader from '@/components/atoms/ImageLoader.tsx'

const ExampleComponent = () => {
  const randomBoxNumber = useMemo(() => Math.floor(Math.random() * 16) + 1, [])

  const boxClass = useMemo(() => {
    switch (randomBoxNumber) {
      case 1:
        return 'bg-app-lightModeBoxes-box1 dark:bg-app-darkModeBoxes-box1 border-app-darkModeBoxes-box1 dark:border-app-lightModeBoxes-box1'
      case 2:
        return 'bg-app-lightModeBoxes-box2 dark:bg-app-darkModeBoxes-box2 border-app-darkModeBoxes-box2 dark:border-app-lightModeBoxes-box2'
      case 3:
        return 'bg-app-lightModeBoxes-box3 dark:bg-app-darkModeBoxes-box3 border-app-darkModeBoxes-box3 dark:border-app-lightModeBoxes-box3'
      case 4:
        return 'bg-app-lightModeBoxes-box4 dark:bg-app-darkModeBoxes-box4 border-app-darkModeBoxes-box4 dark:border-app-lightModeBoxes-box4'
      case 5:
        return 'bg-app-lightModeBoxes-box5 dark:bg-app-darkModeBoxes-box5 border-app-darkModeBoxes-box5 dark:border-app-lightModeBoxes-box5'
      case 6:
        return 'bg-app-lightModeBoxes-box6 dark:bg-app-darkModeBoxes-box6 border-app-darkModeBoxes-box6 dark:border-app-lightModeBoxes-box6'
      case 7:
        return 'bg-app-lightModeBoxes-box7 dark:bg-app-darkModeBoxes-box7 border-app-darkModeBoxes-box7 dark:border-app-lightModeBoxes-box7'
      case 8:
        return 'bg-app-lightModeBoxes-box8 dark:bg-app-darkModeBoxes-box8 border-app-darkModeBoxes-box8 dark:border-app-lightModeBoxes-box8'
      case 9:
        return 'bg-app-lightModeBoxes-box9 dark:bg-app-darkModeBoxes-box9 border-app-darkModeBoxes-box9 dark:border-app-lightModeBoxes-box9'
      case 10:
        return 'bg-app-lightModeBoxes-box10 dark:bg-app-darkModeBoxes-box10 border-app-darkModeBoxes-box10 dark:border-app-lightModeBoxes-box10'
      case 11:
        return 'bg-app-lightModeBoxes-box11 dark:bg-app-darkModeBoxes-box11 border-app-darkModeBoxes-box11 dark:border-app-lightModeBoxes-box11'
      case 12:
        return 'bg-app-lightModeBoxes-box12 dark:bg-app-darkModeBoxes-box12 border-app-darkModeBoxes-box12 dark:border-app-lightModeBoxes-box12'
      case 13:
        return 'bg-app-lightModeBoxes-box13 dark:bg-app-darkModeBoxes-box13 border-app-darkModeBoxes-box13 dark:border-app-lightModeBoxes-box13'
      case 14:
        return 'bg-app-lightModeBoxes-box14 dark:bg-app-darkModeBoxes-box14 border-app-darkModeBoxes-box14 dark:border-app-lightModeBoxes-box14'
      case 15:
        return 'bg-app-lightModeBoxes-box15 dark:bg-app-darkModeBoxes-box15 border-app-darkModeBoxes-box15 dark:border-app-lightModeBoxes-box15'
      case 16:
        return 'bg-app-lightModeBoxes-box16 dark:bg-app-darkModeBoxes-box16 border-app-darkModeBoxes-box16 dark:border-app-lightModeBoxes-box16'
      default:
        return 'bg-app-lightModeBoxes-box1 dark:bg-app-darkModeBoxes-box1 border-app-darkModeBoxes-box1 dark:border-app-lightModeBoxes-box1'
    }
  }, [randomBoxNumber])

  return (
    <div
      data-testid="example-container"
      className={`text-blue-900 rounded-xl flex justify-center flex-wrap items-center contain-size overflow-hidden h-full border-[2px] ${boxClass}`}
    >
      <ImageWithLoader
        imagePath={construction}
        imgClassName="rounded-lg min-h-full min-w-full flex-shrink object-cover"
      />
    </div>
  )
}

export default ExampleComponent
