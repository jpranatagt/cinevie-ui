import React from 'react'

import {
  U_useDisableBodyScroll,
  U_useThemeContextProvider,
} from '@utils'
import { T_HamburgerIcon, T_MenuConstant } from './statics'
import { C_NavigationMenuToggle } from './C_NavigationMenuToggle'
import { C_NavigationMenuList } from './C_NavigationMenuList'

export const C_NavigationMenu = () => {
  const [opened, setOpened] = React.useState(false)

  const toggleMenuRef = React.useRef()

  const handleMenu = () => {
    setOpened((prev) => !prev)
  }

  U_useDisableBodyScroll(opened)

  return (
    <nav ref={toggleMenuRef}>
      <T_HamburgerIcon isOpened={opened} handleMenu={handleMenu} />
      <U_useThemeContextProvider>
        <C_NavigationMenuList menus={T_MenuConstant} />
        <C_NavigationMenuToggle
          menus={T_MenuConstant}
          isOpened={opened}
          handleMenu={handleMenu}
        />
      </U_useThemeContextProvider>
    </nav>
  )
}
