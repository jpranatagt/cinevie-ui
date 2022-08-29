import React from 'react'
import { ThemeProvider } from 'styled-components'

import { S_Dark, S_Light, S_Global } from '@styles'
import { U_useDarkMode } from './U_useDarkMode'

export const ThemeContext = React.createContext()

export const U_useTheme = () => React.useContext(ThemeContext)

export const U_useThemeContextProvider = ({ children }) => {
  const [theme, themeToggler] = U_useDarkMode()
  const isDark = theme === 'dark'
  const selectedTheme = isDark ? S_Dark : S_Light

  return (
    <ThemeContext.Provider
      value={{
        themeToggler,
        theme,
      }}
    >
      <ThemeProvider theme={selectedTheme}>
        <S_Global />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
