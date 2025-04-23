import { useState, useEffect } from 'react'
import { Box, BoxProps } from '@/components/organisms/Box'
import { useTranslation } from 'react-i18next'
import ExampleComponent from '@/components/organisms/ExampleComponent'
import LatestSong from '@/components/organisms/LatestSong'
import { useIsMobile } from '@/hooks/useIsMobile'
import Presentation from '@/components/organisms/Presentation'
import Jokes from '@/components/organisms/Jokes'

const CenterSection = () => {
  const { t, i18n } = useTranslation()
  const isMobile = useIsMobile()
  const [activeBoxes, setActiveBoxes] = useState<BoxProps[]>([])

  useEffect(() => {
    const mobileBoxes = [
      { startRow: 8, spanRow: 7, startColumn: 4, spanColumn: 16, content: <Presentation /> },
      { startRow: 15, spanRow: 14, startColumn: 9, spanColumn: 11, content: <Jokes /> },
      { startRow: 12, spanRow: 8, startColumn: 20, spanColumn: 8, content: <ExampleComponent /> },
      { startRow: 8, spanRow: 4, startColumn: 20, spanColumn: 21, content: <LatestSong /> },
    ]

    const desktopBoxes = [
      { startRow: 26, spanRow: 30, startColumn: 19, spanColumn: 18, content: <ExampleComponent /> },
      { startRow: 56, spanRow: 9, startColumn: 27, spanColumn: 9, content: <ExampleComponent /> },
      { startRow: 50, spanRow: 10, startColumn: 37, spanColumn: 22, content: <Jokes /> },
      { startRow: 31, spanRow: 19, startColumn: 37, spanColumn: 51, content: <ExampleComponent /> },
      { startRow: 22, spanRow: 9, startColumn: 43, spanColumn: 22, content: <Presentation /> },
    ]

    setActiveBoxes(isMobile ? mobileBoxes : desktopBoxes)
  }, [isMobile, i18n.language, t])

  return (
    <div className="grid grid-cols-2 grid-rows-20 lg:grid-cols-100 lg:grid-rows-100 gap-4">
      {activeBoxes.map((box, index) => (
        <Box
          key={index}
          startRow={box.startRow}
          startColumn={box.startColumn}
          spanRow={box.spanRow}
          spanColumn={box.spanColumn}
          content={box.content}
        />
      ))}
    </div>
  )
}

export default CenterSection
