import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Route } from 'react-router-dom'
import { P_Suspense } from '@pages'

import { PermissionsRoute } from './PermissionsRoute'

const Routes = ({ routes = [] }) => {
  return (
    <HelmetProvider>
      <P_Suspense>
        {routes.map((route) =>
          route.permissions ? (
            <PermissionsRoute key={route.path} exact {...route} />
          ) : (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.page}
            />
          )
        )}
      </P_Suspense>
    </HelmetProvider>
  )
}

export default Routes
