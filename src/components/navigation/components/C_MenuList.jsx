import React from 'react'
import { NavLink } from 'react-router-dom'

import { U_useIsPermitted, U_useIsAuthenticated } from '@utils'

export const C_MenuList = ({
  menus = [],
  isMenuToggle = false,
  handleMenu = () => {},
}) => {
  const ListElement = (menu) => (
    <li key={menu.title}>
      {isMenuToggle ? (
        <h2>
          <NavLink exact to={menu.path} onClick={() => handleMenu()}>
            {menu.title}
          </NavLink>
        </h2>
      ) : (
        <NavLink exact to={menu.path} onClick={() => handleMenu()}>
          {menu.title}
        </NavLink>
      )}
    </li>
  )

  const isPermitted = (permissions) => U_useIsPermitted(permissions)
  const isAuthenticated = () => U_useIsAuthenticated()

  return menus.map((item) =>
    item.permissions
      ? isPermitted(item.permissions) && ListElement(item)
      : !isAuthenticated() && ListElement(item)
  )
}
