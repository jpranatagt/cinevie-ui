import { U_useLocalStorageState } from '@utils'

export const U_useDarkMode = (initialTheme = 'light') => {
  const [theme, setTheme] = U_useLocalStorageState(
    'theme',
    initialTheme
  )

  const isDark = theme === 'dark'

  const themeToggler = (event) => {
    event.preventDefault()
    isDark ? setTheme('light') : setTheme('dark')
  }

  return [theme, themeToggler]
}
