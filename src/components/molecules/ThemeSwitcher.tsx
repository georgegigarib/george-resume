import { setTheme } from '@/utils/setTheme';
import { useEffect, useState } from 'react';
import ThemeSwitch from '@/components/atoms/Themeswitch';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
    document.documentElement.classList.toggle('dark');
  };

  return <ThemeSwitch checked={darkMode} onChange={toggleTheme} size={12} />;
};
export default ThemeSwitcher;
