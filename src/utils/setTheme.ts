export function setTheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark')
}
