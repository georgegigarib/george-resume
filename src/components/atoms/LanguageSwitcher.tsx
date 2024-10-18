import { Menu, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import ChangeLanguageIcon from '@mui/icons-material/Language'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { useLanguage } from '@/hooks/useLanguage'
import { languages, LanguageOption } from '@/locales/languages'
import i18n from '@/locales/i18n.config'

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const languageOptions: LanguageOption[] = Object.values(languages)

  const currentLanguage = languages[i18n.language as keyof typeof languages]

  return (
    <>
      <div
        className="flex items-center justify-between w-full gap-10"
        data-testid="language-switcher"
      >
        <Button
          variant="contained"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          style={{
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center'
          }}
          size="small"
          data-testid="language-switcher-button"
        >
          <ChangeLanguageIcon style={{ marginRight: '8px' }} />
          {currentLanguage?.name || 'English'}
          <ArrowDropDown
            style={{
              marginLeft: 'auto',
              transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            style: {
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '5px'
            }
          }}
          data-testid="language-menu"
        >
          {languageOptions.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code)
                setAnchorEl(null)
              }}
              data-testid={`language-option-${lang.code}`}
            >
              {lang.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  )
}

export default LanguageSwitcher
