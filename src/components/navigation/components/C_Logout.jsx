import React from 'react'
import {
  U_useIsAuthenticated,
  U_useLogoutPermissions,
  U_useModalDialog,
} from '@utils'

export const C_Logout = ({ isMenuToggle = false }) => {
  const isAuthenticated = () => U_useIsAuthenticated()
  const { status, U_useLogout } = U_useLogoutPermissions()
  const [U_useToggleLogoutModalDialog, C_LogoutModalDialog] =
    U_useModalDialog()

  return isAuthenticated() ? (
    <li onClick={() => U_useToggleLogoutModalDialog()}>
      {isMenuToggle ? (
        <h2>
          <a href="#logout">LOGOUT</a>{' '}
        </h2>
      ) : (
        <a href="#logout">LOGOUT</a>
      )}
      <C_LogoutModalDialog
        title="LOGOUT"
        proceedTitle={status}
        description="Do you want to logout now?"
        handleProceed={() => U_useLogout()}
      />
    </li>
  ) : null
}
