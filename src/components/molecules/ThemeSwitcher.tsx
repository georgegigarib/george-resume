import DarkModeSwitch from '@/components/atoms/DarkModeSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkTheme } from '@/store/theme/themeStatus.ts'
import { StoreState } from '@/store'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: StoreState) => state.darkTheme.isDarkThemeEnabled)

  const toggleTheme = () => {
    dispatch(setDarkTheme(!darkMode))
  }

  return <DarkModeSwitch checked={darkMode} onChange={toggleTheme} size={12} />
}

export default ThemeSwitcher
