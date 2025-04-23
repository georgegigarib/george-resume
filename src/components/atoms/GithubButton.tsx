import { SOCIAL_LINKS } from '@/constants/info'
import { useIsMobile } from '@/hooks/useIsMobile'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Tooltip } from '@mui/material'

export default function GitHubButton() {
  const ismobile = useIsMobile()

  return (
    <Tooltip title="GitHub" arrow>
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        className="p-1 md:p-2 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <GitHubIcon fontSize={ismobile ? 'small' : 'medium'} />
      </a>
    </Tooltip>
  )
}
