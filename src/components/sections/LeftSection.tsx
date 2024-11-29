import { useEffect, useState } from 'react'
import Box from '@/components/organisms/Box'
import { useTranslation } from 'react-i18next'
import ExampleComponent from '@/components/organisms/ExampleComponent'
import { useIsMobile } from '@/hooks/useIsMobile'
import SeeResume from '@/components/organisms/SeeResume'
import ListOfProjectsModal from '../organisms/ListOfMobileProjectsModal'
import ListOfWebsitesModal from '../organisms/ListOfWebPagesModal'
import DevTemplatesModal from '../organisms/DevTemplatesModal'
import ListOfDesktopProjectsModal from '../organisms/ListOfDesktopProjectsModal'

const LeftSection = () => {
  const { t, i18n } = useTranslation()
  const isMobile = useIsMobile()
  const [activeBoxes, setActiveBoxes] = useState<
    {
      startRow: number
      spanRow: number
      startColumn: number
      spanColumn: number
      content: React.ReactNode
      useCard?: boolean
    }[]
  >([])

  useEffect(() => {
    const mobileBoxes = [
      {
        startRow: 14,
        spanRow: 20,
        startColumn: 1,
        spanColumn: 12,
        content: <ListOfProjectsModal />,
        useCard: false
      },
      {
        startRow: 34,
        spanRow: 1,
        startColumn: 1,
        spanColumn: 10,
        content: <DevTemplatesModal />,
        useCard: false
      },
      { startRow: 14, spanRow: 6, startColumn: 13, spanColumn: 18, content: <ExampleComponent /> },
      {
        startRow: 20,
        spanRow: 9,
        startColumn: 13,
        spanColumn: 8,
        content: <ListOfWebsitesModal />,
        useCard: false
      },
      { startRow: 20, spanRow: 6, startColumn: 21, spanColumn: 6, content: <SeeResume /> },
      {
        startRow: 7,
        spanRow: 7,
        startColumn: 6,
        spanColumn: 21,
        content: <ListOfDesktopProjectsModal />,
        useCard: false
      }
    ]

    const desktopBoxes = [
      {
        startRow: 40,
        spanRow: 48,
        startColumn: 1,
        spanColumn: 28,
        content: <ListOfProjectsModal />,
        useCard: false
      },
      { startRow: 27, spanRow: 13, startColumn: 20, spanColumn: 25, content: <ExampleComponent /> },
      {
        startRow: 40,
        spanRow: 18,
        startColumn: 29,
        spanColumn: 16,
        content: <DevTemplatesModal />,
        useCard: false
      },
      {
        startRow: 38,
        spanRow: 17,
        startColumn: 45,
        spanColumn: 13,
        content: <ExampleComponent />
      },
      { startRow: 38, spanRow: 10, startColumn: 75, spanColumn: 10, content: <SeeResume /> },
      {
        startRow: 20,
        spanRow: 24,
        startColumn: 45,
        spanColumn: 40,
        content: <ListOfDesktopProjectsModal />,
        useCard: false
      },
      { startRow: 9, spanRow: 11, startColumn: 55, spanColumn: 20, content: <ExampleComponent /> }
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
          useCard={box.useCard}
        />
      ))}
    </div>
  )
}

export default LeftSection
