import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { P_Suspense } from '@pages'

const Routes = ({ routes = [] }) => {
  return (
    <Router>
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
    </Router>
  )
}

export default Routes
