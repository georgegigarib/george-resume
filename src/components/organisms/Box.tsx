import Card from '@/components/molecules/Card'
import clsx from 'clsx'

export interface BoxProps {
  startColumn?: number
  startRow?: number
  spanColumn?: number
  spanRow?: number
  content: React.ReactNode
  useCard?: boolean
  addShadow?: boolean
}

export const Box = ({
  startColumn = 1,
  startRow = 1,
  spanColumn = 2,
  spanRow = 2,
  content = 'Default Content',
  useCard = true,
  addShadow = true,
}: BoxProps) => {
  const gridArea = `${startRow} / ${startColumn} / span ${spanRow} / span ${spanColumn}`

  return (
    <div
      className={clsx(
        'rounded-xl bg-transparent ',
        addShadow
          ? 'shadow-3d-light dark:shadow-3d-dark transition-all hover:shadow-hover-light dark:hover:shadow-hover-dark '
          : ''
      )}
      style={{ gridArea }}
    >
      {useCard ? <Card content={content} /> : content}
    </div>
  )
}
