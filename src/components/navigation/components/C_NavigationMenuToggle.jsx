import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { S_Screen } from '@styles'
import { C_Theme } from './C_Theme'

export const C_NavigationMenuToggle = (props) => {
  const {
    isOpened = false,
    handleMenu = () => {},
    menus = [],
  } = props

  return (
    <S_Wrapper isOpened={isOpened}>
      {menus.map((item) => (
        <li key={item.title}>
          <NavLink exact to={item.path} onClick={() => handleMenu()}>
            <h2>{item.title}</h2>
          </NavLink>
        </li>
      ))}
      <C_Theme handleMenu={handleMenu} />
    </S_Wrapper>
  )
}

const S_Wrapper = styled.ul`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  row-gap: var(--spaceY-xl);

  height: 100%;
  width: ${(p) => (p.isOpened ? '100%' : '0%')};

  background-color: hsla(var(--primary-background), 0.95);

  text-align: center;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  visibility: visible;

  li {
    opacity: ${(p) => (p.isOpened ? 1 : 0)};
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s,
      color 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    color: hsl(var(--primary-50));

    & .active {
      color: hsl(var(--primary-text));
    }

    a:hover {
      color: hsl(var(--primary-text));
    }
  }

  ${S_Screen.md`
    width: ${(p) => (p.isOpened ? '40%' : '0%')};
  `}

  ${S_Screen.lg`
    display: none;
    visibility: hidden;
  `}
`
