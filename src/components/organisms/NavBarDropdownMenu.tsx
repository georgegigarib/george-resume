import { useState } from 'react'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Menu, MenuItem } from '@mui/material'

const NavBarDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="absolute right-0">
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
        <MenuIcon fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem disableRipple className="gap-2">
          <ThemeSwitcher />

          <LanguageSwitcher />
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavBarDropdownMenu
