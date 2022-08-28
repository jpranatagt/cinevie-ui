import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const Routes = ({ routes = [] }) => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div />}>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Suspense>
      </Switch>
    </Router>
  )
}

export default Routes
