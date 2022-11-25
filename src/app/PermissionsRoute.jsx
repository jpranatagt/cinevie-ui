import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { U_useIsPermitted } from '@utils'

export const PermissionsRoute = (props) => {
  const {
    permissions,
    page: Page,
    redirectPath,
    ...restProps
  } = props
  const isPermitted = U_useIsPermitted(permissions)

  return (
    <Route
      {...restProps}
      render={() => {
        return isPermitted ? <Page /> : <Redirect to={redirectPath} />
      }}
    />
  )
}
