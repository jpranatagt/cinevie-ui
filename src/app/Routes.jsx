import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { P_Suspense } from '@pages'

import { PermissionsRoute } from './PermissionsRoute'
import { PublicRoute } from './PublicRoute'

const Routes = ({ routes = [] }) => {
  const moviesRead = ['movies:read']
  return (
    <HelmetProvider>
      <P_Suspense>
        {routes.map((route) =>
          route.permissions ? (
            <PermissionsRoute exact key={route.path} {...route} />
          ) : (
            <PublicRoute
              exact
              key={route.path}
              permissions={moviesRead}
              {...route}
            />
          )
        )}
      </P_Suspense>
    </HelmetProvider>
  )
}

export default Routes
