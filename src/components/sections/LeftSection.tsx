import { useEffect, useState } from 'react'
import { Box, BoxProps } from '@/components/organisms/Box'
import { useTranslation } from 'react-i18next'
import ExampleComponent from '@/components/organisms/ExampleComponent'
import { useIsMobile } from '@/hooks/useIsMobile'
import SeeResume from '@/components/organisms/SeeResume'
import ListOfMobileProjectsModal from '@/components/organisms/ListOfMobileProjectsModal'
import DevTemplatesModal from '@/components/organisms/DevTemplatesModal'
import ListOfDesktopProjectsModal from '@/components/organisms/ListOfDesktopProjectsModal'
import ContactPreModal from '../molecules/ContactPreModal'
import DevPresentation from '../organisms/DevPresentation'

const LeftSection = () => {
  const { t, i18n } = useTranslation()
  const isMobile = useIsMobile()
  const [activeBoxes, setActiveBoxes] = useState<BoxProps[]>([])

  useEffect(() => {
    const mobileBoxes: BoxProps[] = [
      {
        startRow: 14,
        spanRow: 12,
        startColumn: 1,
        spanColumn: 12,
        content: <ListOfMobileProjectsModal />,
        useCard: false,
      },
      {
        startRow: 26,
        spanRow: 1,
        startColumn: 1,
        spanColumn: 10,
        content: <DevTemplatesModal />,
        useCard: false,
      },
      {
        startRow: 14,
        spanRow: 9,
        startColumn: 13,
        spanColumn: 13,
        content: <DevPresentation />,
        addShadow: false,
        useCard: false,
      },
      {
        startRow: 15,
        spanRow: 2,
        startColumn: 26,
        spanColumn: 10,
        content: <ContactPreModal />,
        useCard: false,
      },
      {
        startRow: 14,
        spanRow: 1,
        startColumn: 25,
        spanColumn: 6,
        content: <SeeResume />,
        useCard: false,
        addShadow: false,
      },
      {
        startRow: 6,
        spanRow: 8,
        startColumn: 8,
        spanColumn: 23,
        content: <ListOfDesktopProjectsModal />,
        useCard: false,
      },
    ]

    const desktopBoxes: BoxProps[] = [
      {
        startRow: 42,
        spanRow: 38,
        startColumn: 1,
        spanColumn: 28,
        content: <ListOfMobileProjectsModal />,
        useCard: false,
      },
      { startRow: 24, spanRow: 18, startColumn: 1, spanColumn: 44, content: <DevPresentation /> },
      {
        startRow: 42,
        spanRow: 18,
        startColumn: 29,
        spanColumn: 16,
        content: <DevTemplatesModal />,
        useCard: false,
      },
      {
        startRow: 38,
        spanRow: 7,
        startColumn: 45,
        spanColumn: 13,
        content: <ContactPreModal />,
      },
      {
        startRow: 38,
        spanRow: 10,
        startColumn: 75,
        spanColumn: 10,
        content: <SeeResume />,
        useCard: false,
        addShadow: false,
      },
      {
        startRow: 20,
        spanRow: 18,
        startColumn: 45,
        spanColumn: 40,
        content: <ListOfDesktopProjectsModal />,
        useCard: false,
      },
      { startRow: 38, spanRow: 11, startColumn: 58, spanColumn: 15, content: <ExampleComponent /> },
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
          addShadow={box.addShadow}
        />
      ))}
    </div>
  )
}

export default LeftSection
