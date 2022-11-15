import React from 'react'
import { Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { P_Suspense } from '@pages'

const Routes = ({ routes = [] }) => {
  return (
    <HelmetProvider>
      <P_Suspense>
        {routes.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </P_Suspense>
    </HelmetProvider>
  )
}

export default Routes
