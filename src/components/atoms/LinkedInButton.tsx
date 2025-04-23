import { SOCIAL_LINKS } from '@/constants/info'
import { useIsMobile } from '@/hooks/useIsMobile'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Tooltip } from '@mui/material'

export default function LinkedInButton() {
  const ismobile = useIsMobile()

  return (
    <Tooltip title="LinkedIn" arrow>
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 md:p-2 flex justify-center items-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
      >
        <LinkedInIcon fontSize={ismobile ? 'small' : 'medium'} />
      </a>
    </Tooltip>
  )
}
