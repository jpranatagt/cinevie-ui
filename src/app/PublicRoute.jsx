import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { U_useIsAuthenticated } from '@utils'

export const PublicRoute = (props) => {
  const { page: Page, redirectPath, ...restProps } = props

  const isAuthenticated = U_useIsAuthenticated()

  return (
    <Route
      {...restProps}
      render={() => {
        return !isAuthenticated ? (
          <Page />
        ) : (
          <Redirect to={redirectPath} />
        )
      }}
    />
  )
}
