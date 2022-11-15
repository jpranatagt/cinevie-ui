import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { S_Screen } from '@styles'
import { C_Theme } from './C_Theme'

export const C_NavigationMenuList = ({ menus = [] }) => {
  return (
    <S_Wrapper>
      {menus.map((item) => (
        <li key={item.title}>
          <NavLink exact to={item.path}>
            {item.title}
          </NavLink>
        </li>
      ))}
      <C_Theme />
    </S_Wrapper>
  )
}

const S_Wrapper = styled.ul`
  display: none;
  visibility: hidden;

  li {
    a {
      background-color: hsla(var(--primary-background), 0.8);
      color: hsl(var(--primary-50));
    }

    & .active,
    a:hover {
      color: hsl(var(--primary-text));
    }
  }

  ${S_Screen.lg`
    display: flex;
    column-gap: var(--spaceX-xl);

    font-weight: 500;

    visibility: visible;
  `}
`
