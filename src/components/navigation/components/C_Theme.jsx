import React from 'react'
import styled from 'styled-components'

import { S_Screen } from '@styles'
import { U_useTheme } from '@utils'

export const C_Theme = ({ handleMenu = () => {} }) => {
  const { theme, themeToggler } = U_useTheme()
  const isDark = theme === 'dark'

  return (
    <S_Wrapper
      title={`Activate ${isDark ? 'Light' : 'Dark'} Mode`}
      onClick={(event) => {
        themeToggler(event)
        handleMenu()
      }}
    >
      <h2>{isDark ? 'DARK' : 'LIGHT'}</h2>
      <a href="#theme">{isDark ? 'DARK' : 'LIGHT'}</a>
    </S_Wrapper>
  )
}

const S_Wrapper = styled.li`
  cursor: pointer;

  h2 {
    display: block;
    visibility: visible;

    ${S_Screen.lg`
      display: none;
      visibility: hidden;
    `}
  }

  a {
    display: none;
    visibility: hidden;

    ${S_Screen.lg`
      display: inline;
      visibility: visible;
    `}
  }

  :hover {
    color: hsl(var(--primary-text));
  }
`
