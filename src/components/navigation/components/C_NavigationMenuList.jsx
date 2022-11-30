import React from 'react'
import styled from 'styled-components'

import { S_Screen } from '@styles'

import {
  U_useIsAuthenticated,
  U_useLogoutPermissions,
  U_useModalDialog,
} from '@utils'

import { C_MenuList } from './C_MenuList'
import { C_Theme } from './C_Theme'

export const C_NavigationMenuList = ({ menus = [] }) => {
  const isAuthenticated = () => U_useIsAuthenticated()
  const { status, U_useLogout } = U_useLogoutPermissions()
  const [U_useToggleLogoutModalDialog, C_LogoutModalDialog] =
    U_useModalDialog()

  if (status === 'LOGOUT SUCCESS') {
    setTimeout(() => U_useToggleLogoutModalDialog(), 3000)
  }

  return (
    <S_Wrapper>
      <C_MenuList menus={menus} />
      {isAuthenticated() && (
        <li onClick={() => U_useToggleLogoutModalDialog()}>
          <a href="#logout">LOGOUT</a>
        </li>
      )}
      <C_Theme />
      <C_LogoutModalDialog
        title="LOGOUT"
        proceedTitle={status}
        description="Do you want to logout now?"
        handleProceed={() => U_useLogout()}
      />
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
