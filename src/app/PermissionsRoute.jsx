import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { U_usePermissionsStore, U_IsArrayContains } from '@utils'

export const PermissionsRoute = (props) => {
  const {
    children,
    permissions,
    page: Page,
    redirectPath,
    ...restProps
  } = props
  const { permissions: grantedPermissions } = U_usePermissionsStore()

  console.log(grantedPermissions)
  console.log(permissions)

  return (
    <Route
      {...restProps}
      render={() => {
        return U_IsArrayContains(grantedPermissions, permissions) ? (
          <Page />
        ) : (
          <Redirect to={redirectPath} />
        )
      }}
    />
  )
}
