import Card from '@/components/molecules/Card'

interface BoxProps {
  startColumn?: number
  startRow?: number
  spanColumn?: number
  spanRow?: number
  content: React.ReactNode
  useCard?: boolean
}

const Box = ({
  startColumn = 1,
  startRow = 1,
  spanColumn = 2,
  spanRow = 2,
  content = 'Default Content',
  useCard = true
}: BoxProps) => {
  const gridArea = `${startRow} / ${startColumn} / span ${spanRow} / span ${spanColumn}`

  return (
    <div className="rounded-xl" style={{ gridArea }}>
      {useCard ? <Card content={content} /> : content}
    </div>
  )
}

export default Box
