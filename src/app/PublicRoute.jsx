import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { U_usePermissionsStore, U_IsArrayContains } from '@utils'

export const PublicRoute = (props) => {
  const {
    children,
    permissions,
    page: Page,
    redirectPath,
    ...restProps
  } = props
  const { permissions: grantedPermissions } = U_usePermissionsStore()
  return <Route {...restProps} render={() => <Page />} />
}
